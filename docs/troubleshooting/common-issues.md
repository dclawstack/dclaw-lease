# Common Issues

## App won't start

**Symptoms:** Pods in `CrashLoopBackOff` or `Error` state.

**Solutions:**

```bash
# Check logs
kubectl logs -n dclaw-lease deployment/dclaw-lease-backend

# Check events
kubectl get events -n dclaw-lease --sort-by='.lastTimestamp'

# Verify database connection
kubectl exec -n dclaw-lease deployment/dclaw-lease-backend --   python -c "import asyncio; from sqlalchemy import text; ..."
```

## Database connection errors

**Symptoms:** Backend logs show `connection refused` or `timeout`.

**Solutions:**

1. Verify the database cluster is ready:
   ```bash
   kubectl get clusters -n dclaw-lease
   ```

2. Check the connection string secret:
   ```bash
   kubectl get secret dclaw-lease-db-credentials -n dclaw-lease
   ```

## Frontend can't reach backend

**Symptoms:** Browser console shows CORS errors or 502 Bad Gateway.

**Solutions:**

1. Verify backend pod is running
2. Check ingress configuration
3. Verify `NEXT_PUBLIC_API_URL` is set correctly

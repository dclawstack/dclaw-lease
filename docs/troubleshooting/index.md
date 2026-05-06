# Troubleshooting

Common issues and solutions for DClaw Lease.

## Quick Diagnostics

```bash
# Check app pods
kubectl get pods -n dclaw-lease

# Check logs
kubectl logs -n dclaw-lease deployment/dclaw-lease-backend

# Check database
kubectl get clusters -n dclaw-lease
```

## Sections

- [Common Issues](./common-issues)
- [FAQ](./faq)

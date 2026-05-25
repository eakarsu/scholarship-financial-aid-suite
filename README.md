# Scholarship Financial Aid Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIScholarshipFinancialAidAssistant`
- `AIScholarshipFinancialAidOperations`
- `AIScholarshipFinancialAidAnalytics`
- `AIScholarshipFinancialAidWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/scholarship-financial-aid-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5160`

Seeded users:
- `admin@scholarship-financial-aid.local / admin123`
- `manager@scholarship-financial-aid.local / manager123`
- `analyst@scholarship-financial-aid.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/scholarship-financial-aid-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5160 npm run smoke
```

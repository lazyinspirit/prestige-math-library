# Step 9 scope-denial delta review — frontier-27

On Monday, August 31, 2026, I reviewed the 4 pending rows in
`research/frontier-27-step9-scope-delta.json` against the current plan,
coverage, authored pages, and cited-source harvest records.

| Group | Batch | Page | Result | Step 9 decision | Evidence |
|---|---:|---|---|---|---|
| `a` | 2 | `conjugate-gradients-minres-and-preconditioning` | `Jacobi Iterations` | `stands` | The Strang source row still defers this worked splitting-matrix computation to `conjugate-gradients-minres-and-preconditioning-examples`, the LA-22 design still reserves Jacobi/Gauss-Seidel and diagonal preconditioning for the B page, and the authored B page plus `plan-spec` still home that exact example lane there. |
| `a` | 2 | `conjugate-gradients-minres-and-preconditioning` | `3.2 Jacobi Preconditioning` | `stands` | The Templates source row is still an exact deferment to the same companion examples page, and the live design plus authored/page-plan records still place the diagonal SPD preconditioning computation on that B page rather than on the A-page theorem spine. |
| `a` | 2 | `conjugate-gradients-minres-and-preconditioning` | `3.2.2 Discussion` | `stands` | The current Templates discussion row still matches the B-page comparison between an improving diagonal preconditioner and a worsening one; the live examples page and the plan still reserve those two preconditioning witnesses there. |
| `a` | 2 | `conjugate-gradients-minres-and-preconditioning` | `Figure 36: Contour lines of the quadratic form of the diagonally preconditioned sample problem` | `stands` | The Shewchuk figure remains the exact diagonal-preconditioning geometry deferred to the companion examples page, and the current authored B page plus plan still keep that worked geometry in the examples lane rather than the A-page proof lane. |

No `frontier-27` defect-ledger row is currently open: `node -e "const fs=require('fs');const rows=fs.readFileSync('research/defect-ledger.jsonl','utf8').split(/\\n/).filter(Boolean).map(JSON.parse).filter(r=>r.run==='frontier-27'&&r.disposition==='open');console.log('COUNT',rows.length);"` returned `COUNT 0`. I therefore made no ledger-row close/defer edit. I re-rendered `research/DEFECT-LEDGER.md` on the current ledger bytes so the generated view stays current.

Checks run on Monday, August 31, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-27 --all`
  - result: groups `a/b/c/d` refreshed with `0` pending rows each
- `node tools/scope-decisions.mjs check --run frontier-27`
  - result: `64` current decline rows, `0` errors
- `node tools/defect-ledger.mjs render`
  - result: rendered `4288` ledger rows to `research/DEFECT-LEDGER.md`
- `git diff --check -- research/frontier-27-alpha-a-scope-decisions.json research/frontier-27-alpha-step9-review.md research/DEFECT-LEDGER.md`
  - result: clean

No blocker remains for this Step 9 scope review.

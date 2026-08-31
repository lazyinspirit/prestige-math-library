On Monday, August 31, 2026, I reviewed the `14` pending rows from `research/frontier-26-step9-scope-delta.json` against the current coverage rows, authored page files, live plan, and destination pages.

Outcome:

- `12` rows resolve as `stands`.
- `2` rows resolve as `owner-decision`.
- `0` declines were overturned into new in-scope content.
- `0` manifest, coverage, contract, risk, splice, impact, or ledger edits were required beyond the owning scope-decision records.

Resolved rows:

- Group `a`
  - `Exercise 8.64` on `dedekind-domains-and-ideal-classes`: `stands`. The current CA-9 route still starts from the local-DVR characterization and reaches ideal factorization later; adopting the exercise's factorization-first route would change the page's present reading order.
  - `Theorem 20.16` on `dedekind-domains-and-ideal-classes`: `owner-decision`. The current page and plan still stop at the finite torsion-free Steinitz theorem, and the stronger Dedekind-module torsion classification has no committed non-PID home on current disk.
  - `Theorem 7.3` on `dedekind-domains-and-ideal-classes`: `owner-decision`. This is the same broader finitely generated Dedekind-module classification seam as Milne `20.16`, still beyond the authored page boundary.
  - `Lemma 15.22.11(3)` on `dedekind-domains-and-ideal-classes`: `stands`. The current page still uses only the Dedekind-module consequences from that Stacks source, while the published PID module-classification page remains the natural home for the free-module refinement.

- Group `c`
  - Hunter `Theorem 7.8`, Hunter `7.3. Density`, and Wheeden-Zygmund `(8.18)`: all `stand`. MT-15 still owns density and separability, while MT-14 still limits itself to Holder, Minkowski, Riesz-Fischer, comparison results, and the `0<p<1` appendix.
  - Wheeden-Zygmund's later `Riesz-Fischer` index entry: `stands`. It is still only a naming trap, not an MT-14 item.
  - Ahlfors `1.7 Branch Points`, Ahlfors `4.1 The Use of Level Curves`, and McMullen `Example 4`: all `stand`. CA-20 still stops at continuation, monodromy, germ-space surfaces, the logarithm and nth-root models, reflection, and the natural-boundary tail, with no branch-point or algebraic-surface expansion.

- Group `d`
  - Nguyen's `P_5` solved-graph bullet: `stands`. The live split still sends star expansions and Theorem `1.9` to page `417`, and the full `P_5/co-P_5` theorem to page `419`.
  - Source `Theorem 1.6` deferred from page `417` to page `419`: `stands`. The destination page still carries the `P_5` endpoint on current bytes.
  - Source `Theorem 1.9` deferred from page `419` back to page `417`: `stands`. The star-expansion page still carries that theorem family and its `C_6`, `C_7`, and hatted-five-cycle consequences.

Ledger review:

- `node tools/defect-ledger.mjs stats --run frontier-26 --by disposition --json` reports only `fixed: 318` and `narrowed: 16`; there are no `open` frontier-26 rows.
- `node tools/defect-ledger.mjs check --run frontier-26 --adjudications research/frontier-26-judge-adjudications.jsonl --closure research/frontier-26-judge-closure.json` passes with `334` checked rows and `0` errors.
- Because no `frontier-26` ledger row is open, there was no Step-9 ledger disposition edit and therefore no ledger re-render to perform in this dispatch.

Checks run on current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-26 --all`
  - `a: 9 decline(s), 0 pending`
  - `b: 21 decline(s), 0 pending`
  - `c: 11 decline(s), 0 pending`
  - `d: 26 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-26`
  - `scope-decisions: 67 current decline(s), 0 error(s)`
- `node tools/defect-ledger.mjs check --run frontier-26 --adjudications research/frontier-26-judge-adjudications.jsonl --closure research/frontier-26-judge-closure.json`
  - `defect-ledger: 334 defect row(s) checked for frontier-26, 0 error(s)`
- `git diff --check -- research/frontier-26-alpha-a-scope-decisions.json research/frontier-26-alpha-c-scope-decisions.json research/frontier-26-alpha-d-scope-decisions.json`
  - clean

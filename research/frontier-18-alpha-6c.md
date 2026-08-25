# frontier-18 alpha 6c

Run: `frontier-18`
Lane: `6c-lead`
Date: `2026-08-24`

## Scope and method

- Read the current `CLAUDE.md`, `LEVELS.md`, `SCHEMA.md`, `ARCHITECTURE.md`, the run brief, the batch briefs, and the prior `research/frontier-18-alpha-contract-audit.md` before acting.
- Rebuilt the relationship checklist with `node tools/audit-manifest.mjs research/frontier-18-batch-*.pages.json --output research/frontier-18-audit-manifest.json`.
- Current authored seam set: `6068` relationships over `796` in-run items:
  - `2246` same-batch dependencies
  - `3814` published-backward dependencies
  - `8` same-batch `justified_by` discharges
  - `8` forward references
  - `0` cross-batch edges
  - `0` unresolved or missing-source defects
- Published-backward dependency targets are `2026` `ai-altered` Statements and `1788` `literature-derived` Statements; `0` published-backward dependencies target an `ai-generated` Statement.
- Checked the in-run provenance URL rule from disk: every frontier-18 item whose Statement is `literature-derived` or `ai-altered` has a reader-visible `sources.references` URL (`794` checked, `0` missing).

## Cross-batch edges

- None. The authored content has `0` `cross-batch` relationships in `research/frontier-18-audit-manifest.json`, so there was no cross-batch semantic seam to repair.

## Forward references

All eight declared forward references are orientation-only and stay out of `deps`, Statements, and Facts & Assumptions.

1. `def-roots-of-unity-in-a-field` → `thm-complex-nth-roots-and-roots-of-unity`
   Clean. The source use is a remark-only pointer to the complex parametrisation; the definition and the page's actual proofs stay purely algebraic.
2. `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate` → `ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial`
   Clean. The source remark names the companion worked example and does not carry any proof step.
3. `thm-composita-of-cyclotomic-extensions` → `cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case`
   Clean. The source remark explicitly says the finite-field failure lies outside the theorem's scope and points to the counterexample.
4. `thm-intersections-of-rational-cyclotomic-fields` → `cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case`
   Clean. The remark is exactly the “base field matters” warning the theorem needs.
5. `thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals` → `fs-every-finite-abelian-group-is-the-galois-group-of-a-cyclotomic-field`
   Clean. The remark correctly distinguishes “subfield of a cyclotomic field” from “cyclotomic field itself”.
6. `def-laplacian-of-a-c2-function` → `thm-c2-holomorphic-components-are-harmonic`
   Clean. The source remark only identifies the planar equation as the same harmonic equation used later; nothing on the definition page depends on the theorem.
7. `rem-several-variable-conventions-and-the-identity-theorem-gap` → `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc`
   Clean. The remark uses the example only to illustrate why the distinguished boundary, not the whole topological boundary, carries the maximum-modulus statement.
8. `rem-several-variable-conventions-and-the-identity-theorem-gap` → `fs-several-variable-identity-theorem-from-an-accumulation-point`
   Clean. The remark states exactly that the open-set theorem is weaker than the one-variable accumulation-point statement and points to the false stronger version.

## Published-backward seam reads

I manually re-opened the source use and cited target on the highest-signal cross-level seams and on the items previously repaired by `frontier-18`'s contract audit.

- `lem-four-square-congruence-for-primes` → `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares`
  Clean. The cited proposition is for odd primes and `p \nmid a`; the source use carries both hypotheses exactly and applies it only at `a = -1`.
- `thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals` → `cor-the-galois-group-of-a-rational-cyclotomic-field`
  Clean. The source uses only the isomorphism `Gal(Q(mu_N)/Q) ≅ (Z/N)^×`, then passes to a quotient through the Galois correspondence; no stronger cyclotomic claim is imported.
- `cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case` → `thm-the-cyclotomic-galois-group-over-a-finite-field`
  Clean. The counterexample uses only the degree formula via the order of `[q]_n` in `(Z/n)^×`.
- `cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case` → `thm-intersections-of-rational-cyclotomic-fields`
  Clean. The source use is explicitly “this rational theorem fails over every base field”; it does not cite the theorem for a stronger finite-field claim.
- `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc` → `cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc`
  Clean. The example uses only the distinguished-boundary bound and correctly contrasts it with the larger topological boundary.
- `fs-several-variable-identity-theorem-from-an-accumulation-point` → `thm-identity-theorem-in-several-complex-variables`
  Clean. The false statement is exactly the one-variable strengthening the theorem does not assert; the source theorem remains the honest open-set form.
- `def-laplacian-of-a-c2-function` → `thm-c2-holomorphic-components-are-harmonic`
  Clean as a forward orientation reference, not a dependency edge.

The citation-fidelity repairs from `research/frontier-18-alpha-contract-audit.md` were also rechecked on disk in the batches where they mattered most to the cross-level surface (`3`, `5`, `7`, `8`). The widened fact lines are now faithful to their cited Statements.

## Gates and receipts

- `merge-proof-contracts`: pass. Wrote `research/frontier-18-proof-contracts.json` with `669` scoped items from `10` batch contract files.
- `proof-contract --strict`: pass. `0` errors, `3` `shotgun-bracket` warnings, `669/669` items checked.
- `finite-smoke`: pass. `0` errors, `22` checks over `20/669` items carrying finite-smoke obligations.
- `risk-report --require-reviewed`: pass. `0` errors, `669` items routed.
- `boundary-audit`: pass. `5352` rows over `10` contract files, `0` template clusters at threshold, `0` contradicted dispositions after the earlier contract-audit repairs.
- `citation-fidelity --fail-on-missing-quote`: pass. `4761` citations, `0` missing quotes, `0` widening candidates.
- `audit-manifest`: pass. `6068` relationships over `796` in-run items, `0` unresolved, `0` missing-source.
- `impact-audit --receipt`: pass. `research/frontier-18-impact.json` is current for `pre-author → post-6b`: `796` changed interfaces, `732` affected consumers. Every affected consumer is itself an in-run draft item changed in the same window, so the receipt closes them as `repaired`.
- `spine-audit --receipt`: pass. `research/frontier-18-spine-audit.json` is current for `58` proof-bearing items among the top `100` transitive consumer cones. `57` attestations were carried forward from `research/frontier-17-spine-audit.json` at byte-identical `content_sha256`; `lem-finite-sum-laws` is the one new scope entrant and was read afresh at the current hash.
- `gate-liveness`: still red, and still a tooling blocker rather than a frontier-18 content defect. With the full checklist arguments it reports all four probes as `unparsed` even though the probed tools themselves return live nonempty summaries. I did not patch `tools/gate-liveness.mjs` in this 6c pass.

## Defects and dispositions

- No confirmed-fatal cross-batch or cross-level citation defect was found in this 6c pass.
- No published dependency repair was needed.
- No new `research/defect-ledger.jsonl` row was written at 6c, because no 6c finding reached `confirmed_fatal`.

## What I did not check

- I did not manually line-read all `3814` published-backward dependency edges one by one outside the `audit-manifest` + `proof-contract` + `citation-fidelity` pass. The manual disk reads were concentrated on the eight forward references, the seam-critical published dependencies listed above, and the contract-audit items previously flagged by the detectors.
- I did not patch `tools/gate-liveness.mjs`; the remaining red is already recorded in `research/frontier-18-alpha-contract-audit.md` as a tooling/runtime issue rather than a mathematical or citation failure.

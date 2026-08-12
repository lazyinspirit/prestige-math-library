## Alpha re-check before the step-4 splice

You returned `research/frontier-12-alpha-step3-scaffold-review.md`: **7 sufficient,
4 insufficient**, plus §5 corrections C1–C12. The orchestrator routed every one to
the owning Beta and all six fix rounds have reported. **Re-check them from disk.**
This is the re-check your own §7 called for, and it is the last gate before step 4
splices 451 items into `plan-spec.json`.

You are not re-reviewing the seven `sufficient` pairs. Confirm or refute the
repairs, and say plainly whether each `insufficient` verdict is now discharged.

### The four `insufficient` verdicts

| pair | was | now | claimed fix |
|---|---|---|---|
| `splitting-fields` (56) | 15 A | **18 A** | the three normality results from Stacks 09HL — tags 09HN, 09HP, 0BR3 |
| `eigenvalues-…` (86) | 19 A | **23 A** | Pinkham §12.3 — `thm-trace-is-sum-of-eigenvalues`, `thm-determinant-is-product-of-eigenvalues`, `thm-spectral-mapping-for-polynomials`, and the corollary |
| `pi-…` (183) | 12 A | **14 A** | the Archimedean characterization and the second addition you named |
| `finite-probability-spaces-and-random-variables` (220.2) | 37 A | 37 A | **sourcing**: Grinstead & Snell added; harvest 136 → 197 rows |

For each: is the verdict discharged, and does the **new** material carry real
coverage rows at real locators? You found these gaps by opening sources — check
the repairs the same way. In particular, 220.2's fix is the one most likely to be
cosmetic: confirm that the 14 previously unsourced items (Bayes, total
probability, the chain rule, product spaces, binomial, Cauchy–Schwarz among them)
now trace to actual Grinstead & Snell sections that contain them, and that 220.2
independently satisfies two independent treatments now that the split gave it its
own source obligation.

### The §5 corrections

C1–C11 were routed. Verify the ones with mathematical content rather than the
clerical ones:

- **C5** — did batch 1 source the **prime** ideal clause of
  `thm-ideal-correspondence-for-localisation`, or drop it? Stacks Lemma 10.9.16
  gives only the ideal statement. Either resolution is acceptable; a row still
  claiming more than its source gives is not.
- **C7** — did batch 4 fix the Lebl quote to `sin(x) ≤ x` for `x ≥ 0`, and does
  nothing in the scaffold still lean on the stronger `|sin x| ≤ |x|`?
- **C8** — is Donaldson's *"A Sketch Proof of Green's Theorem"* now corroboration
  only, with no `[F#]` fact citing it?
- **C6** — is the phantom Pinkham "Theorem 12.1.3" row split so that no scaffold
  item is unsourced and none unmapped?
- **C3/C4** — do batch 1's Judson and Milne locators now match the editions at
  the URLs actually cited?
- **C11** — are batch 2's nine A and thirteen B items now mapped? Harvest went
  115 → 137 rows.

### Two decisions the orchestrator took on your findings

Recorded in `research/frontier-12-step3-decisions.md`; check the reasoning, do not
redo the work:

- **D11** — module localisation (C1) is homed on **no** page in the plan. It is
  recorded as a tracked gap rather than wedged into batch 2's accepted pair: it
  cannot live at order 53.2 (modules arrive at 102), and nothing downstream needs
  it. Batch 1 was told only to stop naming a destination that will not contain it.
  **Say whether you agree that is the right disposition**, since you found it.
- **D12** — order 88 retitled to "Diagonalisation and the Minimal Polynomial",
  matching its id, because Cayley–Hamilton is now homed at 86.

### Gate state at re-check

884 harvested results across 12 A pages, 0 errors, 0 warnings. Merged in-memory
splice: **24 pages, 451 items, `validate-plan` exit 0, zero errors** — no
`undeclared-prereq`, `b-leaf`, `forward-ref`, `dup-id` or item cycle.

### Output

Write `research/frontier-12-alpha-recheck.md`: per routed item, `discharged` /
`not discharged`, with evidence. End with a single explicit verdict — **is the
scaffold set ready for the step-4 splice?** If anything is not discharged, name
the exact remaining work and the owning batch.

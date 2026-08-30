# Exact Step-8 repair envelope — 8-preflight, round 3

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-24",
  "stage": "8-preflight",
  "round": 3,
  "mode": "preflight",
  "group": null,
  "failures": [
    {
      "id": "defect-ledger",
      "stage": "8-preflight",
      "why": "ERROR confirmed_fatal on cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded",
      "output": "defect-ledger: 207 defect row(s) checked for frontier-24, 20 error(s)\nERROR confirmed_fatal on cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on cex-total-variation-can-exceed-the-absolute-value-of-the-set-value (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on def-principal-part-at-an-isolated-point (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on def-signed-measure (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on ex-pole-pushing-along-three-discs (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on fs-a-hahn-decomposition-is-unique (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on fs-finite-values-and-finite-additivity-force-finite-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on fs-total-variation-always-equals-the-absolute-value-of-the-set-value (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-riemann-map-extremal-family-is-nonempty (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-runge-pole-pushing-lemma (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-two-omitted-values-rule-out-an-essential-singularity (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on prop-simple-integrals-are-bounded-by-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-gamma-weierstrass-product (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-mittag-leffler-theorem-on-plane-domains (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-stirling-formula-gamma (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-total-variation-of-a-complex-measure-is-finite (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-zero-divisor-theorem-on-plane-domains (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [],
  "assigned_items": [],
  "live_tuples": []
}
```

---

# Step 8 — targeted repair-integrity review, `{{run}}`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.

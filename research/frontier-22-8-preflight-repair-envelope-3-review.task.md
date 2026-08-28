# Exact Step-8 repair envelope — 8-preflight, round 3

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-22",
  "stage": "8-preflight",
  "round": 3,
  "mode": "preflight",
  "group": null,
  "failures": [
    {
      "id": "boundary-audit",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 2656 rows over 1 contract file(s); 2450 marked not_applicable\n\nTEMPLATE REUSE — 1 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  3 rows · axes: nonempty-choice\n    \"The Statement or Example explicitly assumes the Axiom of Choice used by the cited Montel extraction.\"\n    items: thm-vitali-porter-convergence-theorem, ex-the-unit-ball-family-is-normal-on-any-domain, ex-diagonal-extraction-on-a-disc-for-montels-theorem\n\nCONTRADICTED DISPOSITIONS — none found by the three detectors.\n\nUPHELD BY REVIEW — 11 row(s) an Alpha read and kept, with reasons on the record:\n  thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field  [empty]  by contract-audit-3: Step 1.1 first proves that k[G] is a nonzero semisimple ring and then invokes Wedderburn-Artin with a positive number of\n  cor-sum-of-squares-formula-for-irreducible-degrees  [empty]  by contract-audit-3: A finite group always has at least the trivial irreducible representation, so the list V_1,...,V_r is never empty and th\n  thm-spectral-radius-is-bounded-by-average-and-maximum-degree  [empty]  by contract-audit-3: The hypothesis n>=1 makes V(G) nonempty, so the average-degree formula sums over a fixed nonempty vertex set rather than\n  thm-binet-cauchy-formula  [empty]  by contract-audit-3: The theorem assumes m>=1; when m>n, step 2.1 handles that branch directly, and when m<=n the family of m-element subsets\n  cor-kirchhoff-eigenvalue-product-formula  [empty]  by contract-audit-3: The statement assumes n>=2, so the product over j=2,...,n always has at least one factor and never creates an empty-prod\n  thm-spectral-gap-implies-connectivity-and-edge-expansion  [zero]  by contract-audit-3: The Given line fixes a nonempty proper subset S of V(G), so 1<=|S|<=n-1 and therefore n>=2 before the proof divides by n\n  thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces  [empty]  by contract-audit-3: The only family named in the statement is the sequence family {f_n : n in N}, whose index set N is not empty, so the det\n  cor-dominated-convergence-is-a-vitali-corollary  [zero]  by contract-audit-3: Step 2.2 explicitly chooses epsilon>0 before using epsilon^{-1}, so the denominator seen by the detector is already rest\n  thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations  [empty]  by contract-audit-3: The theorem quantifies over nonempty H-free graphs in every substantive clause; the only family token names the forbidde\n  prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical  [empty]  by contract-audit-3: The hypothesis kappa(G)<|V(G)|^tau already forces G to be nonempty, and the word family only names the forbidden family \n  thm-pure-blockades-with-cograph-patterns-have-additive-kappa  [empty]  by contract-audit-3: A blockade has length t>=1 and each block B_i is nonempty by definition, so the sum over i=1,...,t in the statement cann\n\nEvery line above is a candidate for a human read, not a verdict.\n",
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

# Step 6b repair — step6-routing-adjudicate

This file is the authority for repair cycle 1.
Primary gate: `step6-routing-adjudicate`
Reason: ERROR decision-not-applied: [lem-hashing-commits-public-randomness] accepted_repair no longer matches the reader result
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `lem-hashing-commits-public-randomness`, `thm-graph-nonisomorphism-is-in-ip`, `thm-kolmogorov-complexity-is-not-computable`, `thm-martin-lof-randomness-implies-computable-randomness`, `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q`, `lem-pairing-preserves-convergence-in-probability`, `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability`, `thm-limits-in-probability-are-unique-almost-surely`, `thm-lp-convergence-implies-convergence-in-probability`, `thm-open-mapping-theorem`, `thm-morse-sard-for-maps-from-manifolds-with-boundary`, `cor-eisenstein-prime-is-totally-ramified`, `cor-zeta-zero-count-unit-interval`, `thm-fundamental-identity-for-primes-in-number-fields`, `cex-nonintegral-reflection-does-not-produce-a-singular-power`, `ex-sl2-verma-embedding-chain`, `lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one`, `prop-simple-reflection-embedding-of-verma-modules`, `cor-schur-index-divides-the-representation-degree`, `ex-galois-conjugate-characters-of-c3`, `lem-galois-conjugates-have-equal-scalar-extension-multiplicity`, `cor-grassmannian-smooth-irreducible-dimension`, `cor-projective-variety-product-exists`, `lem-affine-product-topology-not-product-topology`, `thm-plucker-image-closed`, `cex-closed-subset-does-not-determine-closed-subscheme`, `cex-locally-finite-type-not-finite-type`, `def-affine-overlap-separation-condition`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
step6-scope: 717 item(s) routed, 359 adjudication obligation(s), 28 error(s)
ERROR decision-not-applied: [lem-hashing-commits-public-randomness] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-graph-nonisomorphism-is-in-ip] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-kolmogorov-complexity-is-not-computable] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-martin-lof-randomness-implies-computable-randomness] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-pairing-preserves-convergence-in-probability] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-limits-in-probability-are-unique-almost-surely] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-lp-convergence-implies-convergence-in-probability] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-open-mapping-theorem] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-morse-sard-for-maps-from-manifolds-with-boundary] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-eisenstein-prime-is-totally-ramified] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-zeta-zero-count-unit-interval] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-fundamental-identity-for-primes-in-number-fields] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-nonintegral-reflection-does-not-produce-a-singular-power] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-sl2-verma-embedding-chain] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [prop-simple-reflection-embedding-of-verma-modules] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-schur-index-divides-the-representation-degree] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-galois-conjugate-characters-of-c3] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-galois-conjugates-have-equal-scalar-extension-multiplicity] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-grassmannian-smooth-irreducible-dimension] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-projective-variety-product-exists] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-affine-product-topology-not-product-topology] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-plucker-image-closed] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-closed-subset-does-not-determine-closed-subscheme] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-locally-finite-type-not-finite-type] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [def-affine-overlap-separation-condition] accepted_repair no longer matches the reader result

```

## Advisory failures

```json
[]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task supplies the primary gate, live ids, exhausted ids,
output, and advisory failures. Reproduce only the primary gate on the current
tree; do not revisit exhausted ids or treat advisory failures as this dispatch's
scope.

For each live finding, repair a confirmed in-scope defect or document a
false-positive with the governing rule and exact evidence. Update only records
made stale by a confirmed repair. An unscoped mechanical failure may be fixed at
its repository cause; do not invent an item or ledger row for it.

When `risk-report` is primary, every live id needs an actual mathematical read
and a complete, item-specific `risk_review` in its owning batch contract. Use
scoped `--items` invocations while working. The generated task is already
partitioned by Alpha group; do not inspect or write another group's carriers.
A missing review is not itself a defect-ledger row, though a defect found during
that review follows the normal repair and ledger protocol.

At 6b, append one `route:"gate"` supplemental decision per concrete defect to
the owning group's decisions file and its matching ledger row. At 6c, append the
required `kind:"gate"` verdict and current carrier hash to
`research/<run>-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.


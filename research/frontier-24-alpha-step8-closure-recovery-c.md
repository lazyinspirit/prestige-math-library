# Step 8 closure recovery — group c, rejudge round 1

## Scope and outcomes

The authoritative repair envelope assigned six current unadjudicated tuples
owned by group c. All six were read against their current item text and cited
dependencies: four are `confirmed_fatal` and two are `confirmed_nonfatal`.

| item | context_sha256 | outcome | basis |
|---|---|---|---|
| `def-principal-part-at-an-isolated-point` | `98834c69339edef3278083b90deec31f0200f0079408bbdcb7643e8434b21d9b` | `confirmed_fatal` | The cited decomposition theorem splits an existing Laurent series but does not supply Laurent-series existence on a punctured disc. |
| `lem-two-omitted-values-rule-out-an-essential-singularity` | `fe0ea56ec9dee96f852d27aee33a10f9d9918a1ed3ee7ff6b87c0886cb2dcb19` | `confirmed_fatal` | The lemma invoked Montel–Carathéodory normality after dropping its Axiom-of-Choice hypothesis. |
| `thm-gamma-weierstrass-product` | `0c760634b13d2f9c4a6886105b7de1ee3ca68a9bafcc8aa989b059bcde3acad3` | `confirmed_nonfatal` | Step 1.1 already proves that the product function is entire; adding that step to the later tag is an immediate local proof closure. |
| `thm-stirling-formula-gamma` | `6100dd5c84df3e21d683892bfe318c3a2ae0ac5df5f6bcd45d4918ccaa40ebf1` | `confirmed_fatal` | Fact L3 inflated the cited factorial asymptotic into a positive-real Gamma asymptotic, although the proof uses only the factorial statement. |
| `thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals` | `a0e0dc9a7679714a053561abf368460142d1882039966f33c7bbad00d6ee8610` | `confirmed_nonfatal` | For nonzero complex `z`, the phase `conj(z)/abs(z)` and its unit modulus follow immediately from the field operations and the displayed modulus definition. |
| `thm-zero-divisor-theorem-on-plane-domains` | `352a219a206d15940a1356ac9903f853293fe0866bc9c90a44a1237d153c38cb` | `confirmed_fatal` | Fact L4 and both applications omitted the cited entire-product theorem's nonzero-sequence hypothesis and separate `z^m` factor at zero. |

## Licensed repairs

1. `def-principal-part-at-an-isolated-point` now cites Laurent expansion
   existence before citing the regular/principal decomposition.
2. `lem-two-omitted-values-rule-out-an-essential-singularity` now assumes and
   cites the Axiom of Choice required by its normal-family subsequence.
3. `thm-stirling-formula-gamma` now states only the factorial logarithmic
   asymptotic supplied by the cited real Stirling theorem.
4. `thm-zero-divisor-theorem-on-plane-domains` now states the nonzero-sequence
   hypothesis and splits off zero multiplicity before each use of the entire
   Weierstrass product theorem.

These four changed items are the only rejudge targets from this recovery. Their
prior current verdict contexts are stale by construction. The engine owns any
permitted next rejudge cycle.

## Evidence and checks

- Appended six exact adjudication rows carrying the pre-edit guard hashes from
  the six current item states.
- Added four matching rejudge defect rows through
  `tools/defect-ledger.mjs`; the append validator accepted all four and
  regenerated the ledger view.
- Focused precheck passed on all three repaired proof-bearing items.
- Focused render check passed on all four repaired items.
- Strict focused proof-contract validation passed on the repaired proofs and
  both Mittag-Leffler consumers affected by the definition change, with zero
  errors and zero warnings.
- Citation fidelity across batches 4–6 checked 290 citations with no missing
  quotes and no widening candidates.
- The exact evidence join found one outcome for each of the six assigned
  tuples, with no malformed or surplus group-c row.
- Step-8 scope check exited 0: 493 items partitioned, zero open rejections, and
  zero cross-group alerts.

## Alerts and blockers

There were no incoming alerts, no outgoing cross-group mathematical finding,
and no published-item repair. Group c has no mathematical, ownership, or
access blocker. Whole-run closure still depends on the out-of-group tuples
assigned by the envelope to their respective owners; none was modified or
adjudicated here.

## Changed artifacts

- `items/def-principal-part-at-an-isolated-point.md`
- `items/lem-two-omitted-values-rule-out-an-essential-singularity.md`
- `items/thm-stirling-formula-gamma.md`
- `items/thm-zero-divisor-theorem-on-plane-domains.md`
- `research/frontier-24-judge-adjudications.jsonl` (six appended rows)
- batch-5 and batch-6 proof-contract entries affected by the repairs
- `research/frontier-24-alpha-c-step8-rejudge-defect-rows.json`
- `research/defect-ledger.jsonl` and its generated view
- this report

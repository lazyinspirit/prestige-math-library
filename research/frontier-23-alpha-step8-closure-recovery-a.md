# frontier-23 — Step 8 closure recovery, group a

## Summary

Handled all 10 current unadjudicated rows owned by group a in rejudge round 1: 5 `confirmed_fatal` and 5 `confirmed_nonfatal`. The five fatal rows licensed five coherent repairs; no false-positive outcome, cross-group alert, published repair, or blocker arose.

## Rows handled

| item | context_sha256 | pre-edit item_sha256 | outcome | rejection | disposition |
|---|---|---|---|---|---|
| `cex-enumerating-relator-consequences-does-not-decide-nontriviality` | `ba8c9b9faa653986c1925e1de8ba27d07512aa8cceb3cd085c3e488069b2a323` | `60bb0c7597c0284a2db638c13dcc756d617ab9bf353968a5554eb2e6fdc2749e` | `confirmed_nonfatal` | Step 1.1 asserts that ⟨a∣∅⟩ presents the free group on a, but its citations [L2] and [given] do not establish this. [L2] only gives the word criterion after the group is known to be free; a presentation-quotient fact is missing. | The free-presentation identification is correct; the objection is a local missing presentation-quotient citation. No edit under the fatal-only rule. |
| `def-bass-serre-tree-of-a-graph-of-groups` | `47766ea9faadd414e4b8226273e3358205c4bee5ba207d65b0313a53957cf522` | `d69b01aa3fbb0305541748292928c54b69a9613ff4e3177f6564c6ca4428c5e1` | `confirmed_fatal` | EMBEDDED_JSON: The cosets \(\Gamma/G_v\) and \(\Gamma/G_e\) are not defined from the stated data: the vertex and edge groups are given with maps into the presentation, but no result establishes their canonical maps into \(\pi_1(\mathcal G,T)\) are injective, hence subgroups of \(\Gamma\). | Round-1 rejudge repair: The coset construction now cites and uses vertex-group injectivity, with each edge group embedded through its injective boundary map before the cosets are formed. |
| `def-reduced-graph-of-groups-word` | `5c75442541b255bea247f40171a7253340dabd6d6bd9a7047672502fd5a6175f` | `4840070bdc8420ef9f2d179262f283f548cc88790261301a54e0c16bc75b5f58` | `confirmed_fatal` | EMBEDDED_JSON: This conflicts with the sibling normal-form theorem: if \(e\in T\), the one-edge word \(e\) is reduced and has positive edge length here, yet \(e=1\) in \(\pi_1(\mathcal G,T)\). The sibling theorem asserts every such word is nonidentity. | Round-1 rejudge repair: The definition now distinguishes closed words; a lone tree edge is not closed and therefore is not a normal-form representative of a group element. |
| `ex-decomposing-the-square-of-the-two-dimensional-s-three-character` | `1f1856b2baace8c2134af62a5c36ad8752f0f086510c5a92d3cd28a0ae1af24c` | `c56d95a016a24b98e1133909647018b263fbeb1562ac4c52117f89694cd7d6ca` | `confirmed_nonfatal` | Step 2.1 uses the values of \(\operatorname{sgn}\) on the three classes, but its citations give only the inner-product formula, multiplicity theorem, and \(\chi_2\)'s values. No cited fact establishes the sign row needed for the displayed computation. | The sign row is standard and the corrected computation is right; the objection is a local citation omission. No edit under the fatal-only rule. |
| `ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six` | `40fc46f2e593d4b949501f32abf8f9ec9e6c7ca57c2fe8e848ff596a4bcd9bd3` | `caa091c46a22029e0f4995e30164f08664a4ba4af1f463f16552f336839fb12b` | `confirmed_fatal` | Step 2.1 falsely says the representatives are listed in the order of step 1.2: that step orders the types \((4),(3,1),(2,2),(2,1,1),(1,1,1,1)\), while step 2.1 begins with the identity and a transposition. | Round-1 rejudge repair: Step 2.1 now matches each displayed representative to its cycle type instead of falsely claiming the representative order agrees with step 1.2. |
| `ex-todd-coxeter-as-a-partial-coset-enumeration-procedure` | `8d47f51e9983b110376bb0632484aa37da9a8b6ceed52777f87b5480d43f41bd` | `ccd5309b06b49bcbfd517a5c07e0d24361267ce01aa26a29d3f58f36cd99c536` | `confirmed_nonfatal` | Step 1.1’s cited [L1] merely defines the word problem. It does not establish that the relevant Todd-Coxeter data gives a finite quotient or that a nontrivial action there proves nontriviality in the presented group; the quotient-homomorphism argument is uncited. | The example is explicitly conditional on finite quotient data, and homomorphisms preserve the identity; the objection is an immediately closable citation gap. No edit. |
| `lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable` | `3f58d55eab0795b187bcb9ba2148ced6db440112a99437d7acf6bcdb1db3b06a` | `4bfdd28319b4ffcb59d51c068b812344e9d3617635e8fadb527bda899498ab94` | `confirmed_nonfatal` | Step 2.1 relies on equality of free reductions being equivalent to equality in the ambient free group (and on effective free reduction), but [L1] and [L2] only characterize the normal closure. No cited fact licenses this essential move. | Effective free reduction and uniqueness of reduced free-group words are standard; the objection is a local missing citation. No edit. |
| `thm-bass-serre-structure-theorem` | `fe318abe3b8437f18e6b6de09020b6720068c81fd3efdaa9e33692becbb47654` | `83b2cf794a7473dd7504abd744016c8ef1b894f61f9017dbf4d866de9759a913` | `confirmed_fatal` | EMBEDDED_JSON: Step 3.2 wrongly treats an arbitrary reduced graph-of-groups word for γ as a closed path in \(T\) from \(\Phi(\gamma)=1\). The definition permits any underlying edge path, so its endpoints are uncontrolled; a based-loop normal-form construction is needed. | Round-1 rejudge repair: Step 3.2 now chooses the closed normal form supplied by the repaired theorem and explicitly identifies its endpoint as the Phi(gamma)-translate of its start. |
| `thm-grushko-decomposition-and-rank-additivity` | `848be1c2d35a95dfbcebfe49858f21bcb704f28fb7dcac3e6ee12d2ee292ae5a` | `7388af03d11504766933a36e2b7a8b6be14814d94513cfa871f5bdb66b0feb54` | `confirmed_nonfatal` | EMBEDDED_JSON: Step 1.1 treats the sole Kurosh factor as literally \(A_j\), hence obtains \(A_j\le gB_kg^{-1}\). The cited [L1] statement gives only an isomorphism \(A_j\cong K\) with an intersection subgroup \(K\); it does not identify \(A_j\) with \(K\). | The Kurosh decomposition used here is the internal decomposition induced by the displayed intersection subgroups; the theorem is correct and the objection is a citation-phrasing gap. No edit. |
| `thm-normal-form-for-fundamental-groups-of-graphs-of-groups` | `8377a34575bb7a474d2f710248105a1dd2681e35e407a28e3bdf6753195133dc` | `980f2a821683127c25de49a8ee90057e6be820b8b2623a04c80ddd4f058c18bf` | `confirmed_fatal` | EMBEDDED_JSON: The statement is false under its cited word definition: for any tree edge \(e\in T\), the one-edge word \(e\) is reduced and has positive edge length, but [L2] makes \(e=1\) in \(\pi_1(\mathcal G,T)\). | Round-1 rejudge repair: The theorem now applies its nonidentity conclusion to reduced closed words, excluding the nonclosed single-tree-edge counterexample. |

## Licensed repairs and rejudge targets

1. `def-bass-serre-tree-of-a-graph-of-groups` — Round-1 rejudge repair: The coset construction now cites and uses vertex-group injectivity, with each edge group embedded through its injective boundary map before the cosets are formed. Rejudge target.
1. `def-reduced-graph-of-groups-word` — Round-1 rejudge repair: The definition now distinguishes closed words; a lone tree edge is not closed and therefore is not a normal-form representative of a group element. Rejudge target.
1. `ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six` — Round-1 rejudge repair: Step 2.1 now matches each displayed representative to its cycle type instead of falsely claiming the representative order agrees with step 1.2. Rejudge target.
1. `thm-bass-serre-structure-theorem` — Round-1 rejudge repair: Step 3.2 now chooses the closed normal form supplied by the repaired theorem and explicitly identifies its endpoint as the Phi(gamma)-translate of its start. Rejudge target.
1. `thm-normal-form-for-fundamental-groups-of-graphs-of-groups` — Round-1 rejudge repair: The theorem now applies its nonidentity conclusion to reduced closed words, excluding the nonclosed single-tree-edge counterexample. Rejudge target.

## Documentary updates

- Regenerated 9 affected entries in `research/frontier-23-batch-1.proof-contracts.json`.
- Regenerated the repaired S4 example entry in `research/frontier-23-batch-4.proof-contracts.json`.
- Appended 10 exact adjudication rows and 5 matching defect-ledger rows.

## Alerts and blockers

None. All assigned rows have exact outcomes, and no defect was found outside group-a ownership.

## Checks

- Focused `precheck`: 3 proof-bearing repaired items, 0 failures.
- Focused `rendercheck`: 5 repaired items passed.
- `depcheck --quiet`: passed with repository-wide legacy warnings only.
- Strict proof contracts: batch 1 `9/9`; batch 4 `1/1`.
- Citation fidelity: batch 1 `93` and batch 4 `130` citations, no missing quotes.
- Reviewed risk reports for batches 1 and 4: 0 errors.
- `defect-ledger validate --run frontier-23`: 343 rows checked, 0 errors.
- Exact tuple check: 10/10 rows have one adjudication outcome.
- `step8-guard`: 75/75 repository changes licensed, 0 creations, 0 deletions.
- `step8-scope check --run frontier-23`: 0 open rejections and 0 cross-group alerts.
- Focused `git diff --check`: passed.

# Frontier-14 batch 4 — Step 6a independent-reader report

I opened all 53 scoped items: 36 on `triangularisation-and-jordan-canonical-form` and 17 on `triangularisation-and-jordan-canonical-form-examples`. I also opened all 35 additional published items cited by this batch, for 88 unique item files opened in total. Every scoped item has both `provenance.statement` and `provenance.proof`; the nine `ai-generated` example Statements are leaves and are not dependency targets in any of the seven frontier-14 batch manifests.

## Findings

### R4-1 — `prop-quotient-vector-space-operations-and-projection` — fatal

**Exact location:** `items/prop-quotient-vector-space-operations-and-projection.md:33`, Fact [L1], used in proof steps 1.1 and 2.1.

**Defect:** [L1] attributes the biconditional
`v+W=v'+W` exactly when `v-v'\in W` to `def-quotient-vector-space-and-canonical-projection`, but the cited Definition does not state that criterion.

**Evidence:** The cited Definition says only that `v+W:={v+w:w\in W}`, defines the quotient operations, and says their representative-independence is established in this proposition. It contains no coset-equality iff. Step 1.1 uses both directions of the added iff to prove representative-independence, so the proof imports a clause that its cited dependency does not license. This is an inaccurate [L1] restatement, not merely an omitted between-step explanation.

### R4-2 — `prop-induced-quotient-operator-is-well-defined` — fatal

**Exact location:** `items/prop-induced-quotient-operator-is-well-defined.md:37`, Fact [L2], used in proof step 1.1.

**Defect:** [L2] says `prop-quotient-vector-space-operations-and-projection` states that cosets are equal exactly when representatives differ by an element of `W`. Its actual Statement asserts only that the quotient operations are well defined, that `V/W` is a vector space, and that the canonical projection is surjective linear with kernel `W`.

**Evidence:** Proof step 1.1 explicitly uses the missing implication `v+W=v'+W \Rightarrow v-v'\in W`. The cited proposition's Statement contains no coset-equality criterion, so this is a wider [L2] restatement that licenses a proof step the cited Statement does not.

### R4-3 — `thm-quotient-vector-space-universal-property` — fatal

**Exact location:** `items/thm-quotient-vector-space-universal-property.md:34`, Fact [L1], used in proof step 1.1.

**Defect:** [L1] again adds “two vectors have the same coset exactly when their difference lies in `W`” to `prop-quotient-vector-space-operations-and-projection`.

**Evidence:** The cited proposition's Statement has the quotient operations, vector-space structure, and the projection's surjectivity, linearity, and kernel; it does not state this iff. Step 1.1 relies on the added forward implication to prove that `\bar f` is well defined. This is an inaccurate [L1] restatement.

### R4-4 — `thm-nilpotent-endomorphism-characterisations` — fatal

**Exact location:** `items/thm-nilpotent-endomorphism-characterisations.md:26-33`, especially the final sentence of the Statement; proof step 3.1 purports to establish it.

**Defect:** The Statement says that on the zero space “all four readings hold in their empty forms,” but reading 2 is `\mu_N=x^r` for some `1\le r\le n`. With `n=0`, no such integer `r` exists.

**Evidence:** For the unique endomorphism of `V=0`, `\mu_N=1=x^0` and the adopted nilpotency index is `1`. Thus the exponent in `\mu_N` is `0`, the index is `1`, and neither supplies an `r` satisfying `1\le r\le0`. Step 3.1 verifies `\mu_N=1=x^0`, but that does not make enumerated condition 2 true. The Statement itself overclaims at the zero-space boundary.

### R4-5 — `thm-power-ranks-determine-nilpotent-jordan-blocks` — fatal

**Exact location:** `items/thm-power-ranks-determine-nilpotent-jordan-blocks.md:38`, Fact [L2], used in proof step 3.1.

**Defect:** [L2] says the kernels and ranks of powers are “eventually stabilising,” citing `lem-kernel-and-rank-sequences-of-powers`. The cited Statement gives only monotonicity and the conditional assertion that *if* equality occurs at one consecutive pair, then all later terms stabilise. It does not assert that such an equality eventually occurs.

**Evidence:** The cited clause is: if `ker T^m=ker T^{m+1}` for some `m` (equivalently for ranks), then all later kernels and images equal the `m`th ones. The batch fact drops that hypothesis and changes the conclusion to unconditional eventual stabilisation. The latter is easy to prove in finite dimension, and nilpotence also gives a tail here, but neither argument appears in the fact inputs before step 3.1 invokes [L2]. This is a widened [L2] restatement.

### R4-6 — `prop-generalised-eigenspaces-and-algebraic-multiplicity` — fatal

**Exact location:** `items/prop-generalised-eigenspaces-and-algebraic-multiplicity.md:38`, Fact [L2], used in proof steps 1.1 and 2.1.

**Defect:** [L2] attributes to `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial` the conclusion that the restriction to the `\lambda`-summand has minimal polynomial exactly `(x-\lambda)^{e_\lambda}`. The cited corollary's Statement does not contain that conclusion.

**Evidence:** The cited Statement gives the direct-sum decomposition and says that for `k\ge e_i`, `ker(T-\lambda_iI)^k` is the stabilised generalised eigenspace. It says nothing about the restriction's minimal polynomial. Step 1.1 imports the extra conclusion, and step 2.1 uses it to identify the nilpotency index. The relevant stronger result exists in the cited corollary's own dependency `thm-primary-decomposition-for-an-endomorphism`, but this item does not cite that theorem. The present [L2] restatement is wider than its cited Statement.

### R4-7 — `prop-generalised-eigenspaces-and-algebraic-multiplicity` — fatal

**Exact location:** `items/prop-generalised-eigenspaces-and-algebraic-multiplicity.md:40`, Fact [L3], used in proof step 2.1.

**Defect:** [L3] removes the cited theorem's nonzero-space hypothesis and says that on an arbitrary `m`-dimensional space the exponent of a nilpotent operator's minimal polynomial is its nilpotency index.

**Evidence:** `thm-nilpotent-endomorphism-characterisations` states the exponent/index assertion first for a **nonzero** `n`-dimensional space. On the zero space its own conventions give `\mu_N=1=x^0` but nilpotency index `1`; hence the exponent is `0`, not the index. The [L3] restatement changes the domain and is false at `m=0`. The later application is intended for a nonzero generalised eigenspace, but [L3] itself neither states nor preserves that required hypothesis.

### R4-8 — `ex-a-cyclic-companion-operator` — nonfatal

**Exact location:** `items/ex-a-cyclic-companion-operator.md:49`, verification step 2.1.

**Defect:** The displayed calculations and [L1]/[L2] do not immediately yield the final equality `\mu_C=\chi_C=f` as written. [L2] gives `\mu_C=\chi_C` from cyclicity, while [L1] describes the companion matrix assuming the vector annihilator is already known; it does not state the converse that a displayed companion matrix has characteristic polynomial `f`.

**Evidence:** A short missing bridge repairs the step: because `e_1` is cyclic and `f(C)e_1=0`, commutation gives `f(C)C^je_1=0` for the whole power basis, so `f(C)=0`; cyclicity gives `\deg\mu_C=3`, hence the monic degree-three divisor `\mu_C` of the monic degree-three polynomial `f` is `f`, and then [L2] gives `\chi_C=f`. This is a competent-reader-under-30-seconds gap, so it is nonfatal.

### R4-9 — `prop-polynomial-calculus-on-restrictions-and-quotients` — polish

**Exact location:** `items/prop-polynomial-calculus-on-restrictions-and-quotients.md:46`, proof step 1.1.

**Defect and evidence:** The quotient power is typeset as `\bar T^{,k}` rather than `\bar T^k`. The comma is a stray exponent character. The intended induction remains unambiguous.

### R4-10 — `ex-first-isomorphism-theorem-for-a-coordinate-map` — polish

**Exact location:** `items/ex-first-isomorphism-theorem-for-a-coordinate-map.md:29`, displayed map in the Example.

**Defect and evidence:** The source has `F^2,qquad (x,y,z)` instead of `F^2,\qquad (x,y,z)`, so the rendered formula exposes `qquad` as letters rather than spacing.

### R4-11 — `ex-jordan-form-with-two-eigenvalues-from-power-ranks` — polish

**Exact location:** `items/ex-jordan-form-with-two-eigenvalues-from-power-ranks.md:27`, displayed rank sequences.

**Defect and evidence:** The separator is `\ldots,qquad \rho_k(1)` rather than `\ldots,\qquad \rho_k(1)`. The displayed numerical sequences and verification are otherwise correct.

### R4-12 — `ex-jordan-chevalley-decomposition-from-jordan-blocks` — polish

**Exact location:** `items/ex-jordan-chevalley-decomposition-from-jordan-blocks.md:27`, displayed decomposition.

**Defect and evidence:** The separator after `3T^2-2T^3` is `,qquad` rather than `,\qquad`. The polynomial identity remains mathematically correct, including in characteristics 2 and 3.

### R4-13 — `ex-quotient-of-f-three-by-a-line-and-canonical-projection` — nonfatal

**Exact location:** `research/frontier-14-batch-4.proof-contracts.json:3352` and `:3367`, the `one` and `nonempty-choice` boundary rows.

**Defect:** Both boundary dispositions describe different coordinates from those in the item.

**Evidence:** The contract says `W` has basis vector `e_3` and that representatives are `(a,b,0)`. The item actually sets `W=F(1,0,0)=Fe_1` and proves that every coset has the unique representative `(0,y,z)`. The item's construction and proof are correct; the boundary evidence is not.

### R4-14 — `ex-an-invariant-flag-producing-upper-triangular-form` — nonfatal

**Exact location:** `research/frontier-14-batch-4.proof-contracts.json:3610-3620`, the `zero`, `one`, and `degenerate` boundary rows.

**Defect:** These dispositions refer to parameters `\lambda` and `\mu` that do not exist in the item.

**Evidence:** The item fixes `Te_1=2e_1`, `Te_2=e_1+3e_2`, and `Te_3=2e_1-e_2+4e_3`. The contract instead discusses setting `\lambda=\mu=0`, checking `T(e_1)=\lambda e_1`, and allowing `\lambda=\mu`. Those are copied dispositions for a different parameterised example, not evidence about this fixed rational operator. The item proof itself is correct.

### R4-15 — `fs-jordan-canonical-form-is-a-unique-matrix` — nonfatal

**Exact location:** `research/frontier-14-batch-4.proof-contracts.json:4312-4317`, the `zero` and `one` boundary rows.

**Defect:** The contract says both blocks have eigenvalue zero and that a `J_1(0)` block is moved. The item uses `A=J_2(0)\oplus J_1(1)` and `B=J_1(1)\oplus J_2(0)`.

**Evidence:** The one-dimensional block has eigenvalue `1`, not `0`; the distinct diagonal sequences `(0,0,1)` and `(1,0,0)` are part of the actual refutation. The counterexample is valid, but these two boundary rows state false evidence.

## Per-page verdicts

- **`triangularisation-and-jordan-canonical-form` — 36/36 items opened; not ready.** R4-1 through R4-7 are fatal: six dependency restatements import conclusions or remove hypotheses that the cited Statements do not license, and R4-4 is a false zero-space assertion in the Statement itself. R4-9 is polish. I found no false title and no further defect in the remaining items on the page.

- **`triangularisation-and-jordan-canonical-form-examples` — 17/17 items opened; no fatal mathematical defect found.** R4-8 is a nonfatal short proof bridge, R4-10 through R4-12 are display-source polish, and R4-13 through R4-15 are inaccurate boundary-contract records whose underlying item proofs remain correct. I found no false title or false example and no further defect in the remaining items on the page.

**Counts:** 53/53 scoped items opened; 35 additional cited items opened; 88 unique item files opened. Findings: 7 fatal, 4 nonfatal, 4 polish.

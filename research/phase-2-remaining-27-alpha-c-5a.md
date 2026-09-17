# Step 5a adjudication — group `c`, run `phase-2-remaining-27`

Role: group Alpha (`5a-c`), covering batches **1, 2, 5** (functional-analysis core:
Hilbert-space geometry and Riesz representation; compact, Hilbert–Schmidt and
Fredholm operators; spectral measures and Borel functional calculus). I authored
none of this content, and I neither judge, stamp nor self-certify anything: the
engine stamps the decision carriers and runs the gate battery after this
dispatch.

## 1. Obligations adjudicated

The exact route set is `research/phase-2-remaining-27-step5-scope-{1,2,5}.json`.

| Batch | touched | reader findings | refuter findings | decisions |
|---|---|---|---|---|
| 1 | `ex-fourier-series-of-a-square-wave`, `lem-trigonometric-characters-are-orthonormal`, `thm-fourier-basis-and-parseval-on-the-n-torus` | — | `refuter:1:1` (`ex-adjoints-of-shifts-multiplication-and-integral-operators`), `refuter:1:2` (`thm-hilbert-space-fourier-expansion`) | 5 |
| 2 | `thm-atkinson`, `thm-norm-limit-of-compact-operators-is-compact` | — | `refuter:2:1` (`thm-l-two-kernels-give-hilbert-schmidt-operators`) | 3 |
| 5 | `cex-a-quasinilpotent-operator-need-not-be-zero`, `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`, `lem-bounded-hilbert-operators-form-a-c-star-algebra`, `lem-continuous-functional-calculus-produces-a-regular-pvm`, `lem-polynomial-calculus-is-isometric-for-self-adjoint-operators`, `lem-spectrum-of-a-positive-operator-is-nonnegative`, `rem-positive-square-root-and-covariance-matrices`, `thm-numerical-radius-is-an-equivalent-operator-norm` | `reader:5:1` (the examples page) | `refuter:5:1` (same page), `refuter:5:2` (`lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension`), `refuter:5:3` (`thm-positive-square-root`) | 12 |

Twenty decisions, one per routed obligation; the decisions file is
`research/phase-2-remaining-27-alpha-c-5a-decisions.json`.

## 2. How the states were measured

`research/phase-2-remaining-27-step5-hash-<i>-{pre,post}.json` were compared with
the current item/contract/manifest and page carriers (same canonical hashing as
`tools/step5-scope.mjs`). Twelve of the thirteen touched carriers still differ
from **both** the pre- and post-reader snapshots, because the reader's repair is
in place and this adjudication added the required 5a `risk_review` to the
contract entry (audit enrichment); those decisions are `amended_repair` with
that fact stated in the evidence. `rem-positive-square-root-and-covariance-matrices`
is unchanged since the post-reader snapshot (it is not HIGH/CRITICAL, so no
risk review was added) and is `accepted_repair`. Every reader/refuter carrier I
touched differs from its collected `observed_sha256`.

## 3. Reader repairs (touched carriers)

All thirteen were re-derived from the current files, not from the report.

**Batch 1.** (a) `lem-trigonometric-characters-are-orthonormal` step 2.1
contained a corrupted clause (`1=2\pi m`'); the reader restored the integral
value 1. I further **amended** the step because the replacement sentence still
claimed that both primitives "vanish at both endpoints", which is false for
`t \mapsto -\cos(2\pi mt)/(2\pi m)`; it now states that both primitives take
matching endpoint values (`\sin 2\pi m=\sin 0=0`, `\cos 2\pi m=\cos 0=1`), so
each definite integral vanishes. (b) `thm-fourier-basis-and-parseval-on-the-n-torus`
step 1.1 had an undefined symbol `m_j`; the deleted factor is
`\int_{\mathbb T} e_{k_j}\overline{e_{l_j}} dm_{\mathbb T}=\delta_{k_jl_j}`. (c)
`ex-fourier-series-of-a-square-wave`: the claim "does not converge pointwise at
the jump" is false under the symmetric-partial-sum reading (the terms cancel to
the mean 0); the repaired clause asserts no pointwise convergence to the
representative's values, which is true under both readings. Coefficients
`\widehat s(k)=(1-(-1)^k)/(\pi ik)`, the mean-square convergence and the Parseval
sum `\pi^2/8` were re-derived.

**Batch 2.** (d) `thm-norm-limit-of-compact-operators-is-compact` step 2.1: the
old two-term estimate needed the factor `\|x-x_i\|\le 2`; the reader's
`\varepsilon/4` choice gives `<3\varepsilon/4<\varepsilon` directly. (e)
`thm-atkinson` steps 2.2/3.2: the old argument used the wrong product of the
parametrix pair and a false inclusion `\ker T^*\subseteq\ker(T^*S^*)`; the
repaired steps use `S^*T^*=(TS)^*=I-(-G^*)` with `G=TS-I` compact and Schauder's
theorem, which is the standard route (Jaffe, *Atkinson's Theorem*; Bai,
*Fredholm Operators and Atkinson's Theorem*).

**Batch 5.** (f) `[A4]`/step 1.3 anti-multiplicativity corrected to
`(ST)^*=T^*S^*` in `lem-bounded-hilbert-operators-form-a-c-star-algebra` and
`lem-polynomial-calculus-is-isometric-for-self-adjoint-operators`; (g)
`ker(T^*-zI)` corrected to `ker(T^*-\overline z I)` in
`lem-spectrum-of-a-positive-operator-is-nonnegative`; (h) the
`(zI-J)z^{-1}(I+z^{-1}J)` expansion fixed in
`cex-a-quasinilpotent-operator-need-not-be-zero`; (i) `g_z(\zeta)=(z-\zeta)^{-1}`
(not `(\zeta-z)^{-1}`) in
`ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`;
(j) the conjugation chain of step 6.2 in
`lem-continuous-functional-calculus-produces-a-regular-pvm` rewritten using
`\mu_{y,x}=\overline{\mu_{x,y}}`; (k) the nonzero hypothesis on `V` added to
`rem-positive-square-root-and-covariance-matrices`; (l) the four-term
polarization bound `4|\langle Tx,y\rangle|\le 8w(T)` replacing the false
`|\operatorname{Re}\langle Tx,y\rangle|\le w(T)` in
`thm-numerical-radius-is-an-equivalent-operator-norm`.

## 4. Refuter findings

**`refuter:1:1` — `ex-adjoints-of-shifts-multiplication-and-integral-operators`
(confirmed fatal, repaired).** Step 1.3 derived
`∫_{X×Y}|kf|\,d(μ×ν)≤\|k\|_2\|f\|_2` by Cauchy–Schwarz in `L^2(μ)` against the
constant function 1; that derivation gives `μ(X)^{1/2}\|k\|_2\|f\|_2` and the
displayed bound is false when `μ(X)>1` (`X=[0,4]`, `Y=[0,1]`, `k=f=1`: `4>2`).
Step 2.1's appeal to "the bound of step 1.3" could not license Fubini for
`k f\overline g` even if it were true. I rewrote step 1.3 around the section-norm
function `h`, proved `h∈L^2(μ)` by Tonelli, and displayed in step 2.1 the correct
bound `∫|k f\overline g|\,d(μ×ν)≤\|k\|_2\|f\|_2\|g\|_2`, which licenses Fubini
and the adjoint formula. Statement level claims (boundedness, adjoint) were
already true and are unchanged.

**`refuter:1:2` — `thm-hilbert-space-fourier-expansion` (confirmed fatal,
repaired).** Claim 3 quantified over surjections `σ:\mathbb N\to J`; a repeated
value breaks convergence (`H=\mathbb C`, `I=\{0\}`, `σ≡0` gives partial sums
`n`), and step 2.1's "subfamily of the tail" justification also fails under
repetitions. I strengthened claim 3 to sequences of pairwise distinct indices
whose image contains the support, rewrote step 2.1 with a tail-control set `F_0`
and the finite Pythagorean identity, and removed the two now-unused facts
(`lem-countable-iff-surjection-from-n`, `lem-reverse-triangle-inequality-in-a-normed-space`)
from the item and both proof contracts. Downstream consumers use only claim 1
(net convergence) or claims 1–2, so no consumer interface changed; the
Statement quote held by batches 1 and 2 contracts was refreshed.

**`refuter:2:1` — `thm-l-two-kernels-give-hilbert-schmidt-operators`
(confirmed fatal, repaired).** Step 4.1's bound
`∫|g_j|\,dρ≤\|k_0\|_{L^2(ρ)}ν(B_j)^{1/2}` omits `μ(X)^{1/2}` and is false when
`μ(X)>1` (`X=Y=\{0,1\}` counting, `k_0≡1`, `B_j=Y`: `4>2\sqrt2`); the `L^1`
membership it invokes genuinely fails for `k_0(m,0)=1/m` on `\mathbb N^2`, so
Fubini did not apply as written. I rewrote the first sentence of step 4.1 to use
step 3.1 for a.e. finiteness and Tonelli for measurability of the four
nonnegative section integrals; citation uses and derivation `d-4.1` were updated.

**`refuter:5:1` and `reader:5:1` — examples page (confirmed nonfatal,
repaired).** The closing sentence "the same nilpotent, whose quadratic form takes
the non-real value `i/2`" misattributes: `|T|=\operatorname{diag}(0,2)` belongs to
`T=2J` (item `ex-square-root-and-absolute-value-of-a-matrix`), while
`\langle Jx,x\rangle=i/2` belongs to the unit Jordan block `J`
(`cex-self-adjointness-cannot-be-dropped-from-the-order-calculus`); for `2J` the
value is `i`. I repaired the page prose (attribute `\operatorname{diag}(0,2)` to
`T=2J` and `i/2` to `J` itself); both findings are closed by the same repair,
with separate ledger rows because the two findings name different locations.

**`refuter:5:3` — `thm-positive-square-root` (confirmed nonfatal, repaired).**
Step 4.1 called `R` and `S` "positive" under `[A5]`'s algebraic notion
(`a=b^*b`) although `R` was only given as quadratic-form positive. The claim is
true; I added the bridge: `σ(R),σ(S)\subseteq[0,+\infty)` by `[A3]`, and the
self-adjoint calculus `[A4]` with `\lambda\mapsto\sqrt\lambda` exhibits
`R=(\sqrt R)^*(\sqrt R)` and `S=(\sqrt S)^*(\sqrt S)` inside `C^*(R,S)`, so
`[A5]` applies to both characters. Contract citation uses for `[A3]`/`[A4]` were
updated.

**`refuter:5:2` — `lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension`
(confirmed nonfatal, recorded, not repaired).** Step 4.1 asserts pointwise a.e.
identities `φ(z)^*φ(z)=I_k`, `φ(z)φ(z)^*=I_{k'}` for infinite `k` or `k'`, where
the infinite matrix products are not defined, and the passage from `V^*V=I`,
`VV^*=I` to a.e. matrix identities needs an absolute-convergence/measurable-field
argument the item does not give. The lemma's conclusion is true and the finite
cases are immediate; the reader independently recorded the same residual
uncertainty. The closure route (finite-sum component identities for finite `k`
or `k'`, giving pointwise a.e. orthonormal families of rows or columns in
`\mathbb C^k` or `\mathbb C^{k'}` and a dimension contradiction) needs an
elementary finite-dimension/Bessel citation the item does not currently carry,
so I recorded the gap as `nonfatal-recorded` for the 5b lead rather than
patching the compression.

## 5. Sources consulted

* Reader/refuter evidence: `research/phase-2-remaining-27-reader-{1,2,5}.md`,
  `research/phase-2-remaining-27-reader-findings-{1,2,5}.json`,
  `research/phase-2-remaining-27-refute-{1,2,5}.json`, and the scope files.
* Cited library statements were read at their exact clauses: e.g.
  `thm-hilbert-adjoint-properties` (anti-multiplicativity and `\|T^*T\|=\|T\|^2`),
  `lem-kernel-range-orthogonality-for-hilbert-adjoints`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
  `lem-spectrum-of-a-positive-operator-is-nonnegative`,
  `thm-continuous-functional-calculus-properties`,
  `lem-characters-on-a-commutative-c-star-algebra-preserve-star`.
* External confirmations (batch-2 Atkinson composition order, as recorded by the
  independent reader): Ethan Y. Jaffe, *Atkinson's Theorem*
  (`https://r-grande.github.io/Expository/Atkinson's%20Theorem.pdf`) and Yuguang
  Bai, *Fredholm Operators and Atkinson's Theorem*
  (`https://www.math.uwo.ca/faculty/khalkhali/files/Fredholm.pdf`); both use the
  parametrix product whose compact defect controls `\ker T^*`.
* Batch-1 choice-strength reading rests on the reader's BFK (Blackadar–Farah–Karagila)
  source check as recorded in `reader-1.md` §Method; I did not re-fetch that paper.

## 6. Repairs performed by this adjudication (summary)

| Item | Change | Verdict |
|---|---|---|
| `ex-adjoints-of-shifts-multiplication-and-integral-operators` | steps 1.3 and 2.1 rewritten around the section-norm function and the triple-product bound | `confirmed_fatal` |
| `thm-hilbert-space-fourier-expansion` | claim 3 strengthened to injective enumerations; step 2.1 rewritten; two unused facts removed | `confirmed_fatal` |
| `thm-l-two-kernels-give-hilbert-schmidt-operators` | step 4.1 measurability argument repaired | `confirmed_fatal` |
| `thm-positive-square-root` | step 4.1 positivity bridge added | `confirmed_nonfatal` |
| examples page | prose misattribution repaired | `confirmed_nonfatal` (both findings) |
| `lem-trigonometric-characters-are-orthonormal` | endpoint-vanishing wording amended | `amended_repair` |

All six changed items/pages were reflowed (`unchanged`) and prechecked (`PASS`).
The affected proof-contract entries in
`research/phase-2-remaining-27-batch-{1,2,5}.proof-contracts.json` and in the
merged `research/phase-2-remaining-27-proof-contracts.json` were synchronised
(citation `uses`, derivations, boundaries), and the batch contracts pass
`tools/proof-contract.mjs --strict`.

## 7. Defect ledger

Twenty closed rows were appended at `caught_at_stage: "5a-adjudicate"`, one per
decision, ids `p2r27-c-5a-001` … `p2r27-c-5a-020`;
`node tools/defect-ledger.mjs validate --run phase-2-remaining-27` reports
0 errors. Row `p2r27-c-5a-019` (the intertwiner gap) is
`disposition: "nonfatal-recorded"` and stays visible for the 5b lead; all other
rows are `fixed` with `repair_confidence: 1`.

## 8. Published content

No defect in this group's work lies in published content: every carrier
adjudicated here is an in-flight (`status: draft`) item or page of run
`phase-2-remaining-27`, and every refuter/reader finding names such a carrier.
`research/published-consumer-supplier-ledger.md` therefore needs no new entry
from this dispatch, and the published-consumer ledger lock was not taken.

## 9. Checks run

* `node tools/risk-report.mjs research/phase-2-remaining-27-batch-<i>.proof-contracts.json`
  for `i = 1, 2, 5` before review, and again with `--require-reviewed` after the
  review: **0 errors** for each batch (57/42/59 required items, complete
  `risk_review` records written into the batch and merged contracts).
* `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-<i>.proof-contracts.json --strict`:
  **0 errors, 0 warnings** for batches 1 and 2; batch 5 has its two pre-existing
  `shotgun-bracket` warnings (`lem-spectral-permanence-for-unital-c-star-subalgebras`,
  `thm-partial-isometry-characterizations`) and no errors.
* `node tools/tsx-run.mjs tools/precheck.mts` (repo-wide): the six changed
  carriers of this group all PASS. The repo-wide run ends with 1–2 failing
  items belonging to other groups' in-flight work at the time of the run (e.g.
  `lem-solovay-almost-disjoint-extension-under-ma`, a forward-ref failure in
  group `e`'s batch); none is in batches 1, 2 or 5. An earlier repo-wide run in
  this dispatch reported 0 failing.
* `node tools/tsx-run.mjs tools/reflow.mts` on the five changed items: all
  `unchanged`.
* `node tools/depcheck.mjs --quiet`: exit 0, no cycles, all references resolve
  (the pre-existing `cited-not-in-deps` warnings are on other groups' items).
* `node tools/defect-ledger.mjs validate --run phase-2-remaining-27`: 0 errors.

## 10. Cross-group note for 5b (contract quote, not a dependency change)

The repaired Statement of `thm-hilbert-space-fourier-expansion` (batch 1,
group `c`) is quoted by a proof-contract citation in **batch 12** (group `a`):
`thm-peter-weyl-for-compact-lie-groups`, fact `L5`. That quote initially still
ended with the old claim-3 wording; batch 12's contract is owned by group `a`,
which was editing it concurrently, so I did not write to it. As of 22:01 AEST
the batch-12 contract again carries the new wording ("pairwise distinct") and
`tools/proof-contract.mjs research/phase-2-remaining-27-batch-12.proof-contracts.json --strict`
reports 0 errors, so no cross-group repair is outstanding here. The consumer
only uses claim 1 (net convergence), so the dependency interface is unchanged;
the batch-1 and batch-2 quotes of the same Statement were refreshed by this
dispatch.

## 11. Blockers and open items

* No blocker for batches 1, 2 and 5: every routed obligation is decided, every
  repair is complete and checked, and no escalation is owed.
* Open for the 5b lead: `p2r27-c-5a-019` (`nonfatal-recorded`) and the batch-12
  quote note above.
* No proposed withdrawal exists for these batches; nothing was deleted or
  withdrawn.

# Reader report — batch 32

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: independent Step 3a reader (`reader-32`)  
Scope: batch `32`

## Opened inventory

Assigned pages:

- `library/advanced-qft-and-supersymmetry/qftx-susy-ward-and-nonrenormalization.md`
- `library/advanced-qft-and-supersymmetry/qftx-susy-ward-and-nonrenormalization-examples.md`

Assigned items, reviewed in dependency order:

- `def-qftx-wilsonian-n1-action-data`
- `pthm-qftx-n1-wilsonian-f-term-nonrenormalization`
- `ex-qftx-n1-wilsonian-wavefunction-vs-holomorphic`
- `ex-qftx-n1-u1-fi-charge-trace`

Direct claim-relevant item suppliers opened:

- `def-countable-choice`
- `ex-unitary-and-special-unitary-lie-groups`
- `thm-cartans-closed-subgroup-theorem`
- `thm-the-tangent-space-at-the-identity-is-a-lie-algebra`
- `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`
- `def-qftx-physical-superspace-normalization`
- `def-qftx-n1-vector-superfield`
- `def-qftx-n1-chiral-superfield`
- `def-qftx-superspace-grassmann-algebra`
- `def-qftx-nonabelian-brst-complex`
- `lem-qftx-nonabelian-brst-nilpotence`
- `def-qftx-nonabelian-gauge-data`
- `post-qftx-nonabelian-yang-mills-model`
- `lem-qftx-n1-chiral-superspace-identities`

The assigned A-page prerequisite carriers opened were `qftx-susy-n1-superspace-and-actions`, `qftx-susy-extended-actions`, `aqft-susy-math-foundations`, and `qftx-nonabelian-brst-bv-mathematics`. I also reviewed `def-aqft-susy-wilsonian-action`, the current out-of-batch item consumer of the action-data definition, for impact from the definition repair; its claim does not use the corrected Kähler or FI qualifications.

Both assigned page files contain frontmatter only, retain `page_layout: compact-v1`, and have no summary bodies. No TikZ/tikzcd diagrams occur in the assigned pages or items.

## Repairs and evidence

1. In `def-qftx-wilsonian-n1-action-data`, the original scalar statement treated every nondegenerate Hermitian Hessian as a Kähler metric. Nondegeneracy alone permits indefinite signature. The definition now specifies an open scalar domain, smooth real potential, Hessian and closed associated real `(1,1)`-form; it requires positive definiteness for a Kähler metric and identifies the nondegenerate indefinite case as pseudo-Kähler. It records the dimensions `[K]=2` and `[g_{i\bar j}]=0` under the existing `[\phi_i]=1` convention. The theorem's fact `[F5]` and its proof-contract quotation were updated to match.

2. The same definition originally called `G` a pointwise gauge-invariant integrand while its FI paragraph admits a constant `[V_1]_D` term whose gauge invariance holds after integration by parts. `G` is now defined by gauge invariance of its integrated D-term under the stated boundary conditions; zero-integral gauge variations, including the constant Abelian FI term described below, are allowed. This matches the explicit shift `V_1 \mapsto V_1-\Lambda_1-\bar\Lambda_1` and the vanishing D-integrals of chiral and anti-chiral shifts used in the FI argument.

   The same definition now records that the formal background extension leaves higher superderivative jets free as well as first anti-chiral jets. This is the stated source of the independent `\bar D^2 P_j` and `\bar D^2 \bar f_r` jets used in the FI-spurion proof.

3. `pthm-qftx-n1-wilsonian-f-term-nonrenormalization` originally asserted `F_\lambda=F` although its action class permits a field-independent Abelian mixing term `W_a^\alpha W_{b\alpha}` in `F`, while its separately named gauge-coupling coefficient covered only simple-factor traces. Dienes, Kolda, and March-Russell, *Kinetic Mixing and the Supersymmetric Gauge Hierarchy*, §2 Eq. (2.2), give the gauge-invariant N=1 `U(1)_a \times U(1)_b` mixing operator; §3.1 Eqs. (3.1)–(3.3) give its one-loop field-theory generation by matter charged under both factors. The theorem now collects every quadratic gauge-invariant `W` polynomial with coefficients independent of dynamical matter fields, including Abelian mixing initially written in `F`, into a complete invariant-form coefficient vector `\boldsymbol\tau`. It states nonrenormalization for the remainder `F_{\mathrm{rem}}` and the one-loop-only exception for that full gauge-kinetic vector. The proof's spurion argument and graph count now apply to the full coefficient vector; it explicitly records the Abelian mixing channel in the one-loop matter graph case.

   Independent source check: Weinberg, *Non-Renormalization Theorems in Non-Renormalizable Theories*, arXiv:hep-th/9803099v1, Eqs. (10)–(12) and the paragraph immediately following Eq. (12), has an apparent case-list error: its displayed count equation forces one `C_2` vertex, whereas the following prose says `C_2=2`. The local proof already used the value forced by the equation (`C_2=1`) and the corrected graph count; I preserved it. The theorem facts now define `A=A_\mu dx^\mu`, `F_A=dA+\tfrac12[A\wedge A]`, and the wedge-bracket convention before using `Q_a(F_A\wedge F_A)` as the topological density. I also expanded the FI proof to show how invariance against arbitrary chiral gauge parameters forces the promoted coefficient to be constant in the independent real and chiral spurion jets, while keeping real linear-multiplet D-term data distinct.

4. After the theorem correction, `ex-qftx-n1-u1-fi-charge-trace` now states a positive field-independent quadratic U(1) kinetic coefficient, `F_{\mathrm{rem}}=0`, and a real D-term consisting only of its bare FI term. This keeps the example within the corrected action-data convention. `ex-qftx-n1-wilsonian-wavefunction-vs-holomorphic` now cites the theorem's unchanged `F_{\mathrm{rem}}`; in its ungauged Wess–Zumino case this remainder is `W_0`.

The assigned batch manifest's Definition, theorem Statement, and U(1) Example mirrors were synchronized. The theorem contract's `F1`/`F5` source quotations and derivations `1.1`, `2.1`, `3.1`, `4.1`, `5.1`, `6.1`, and `7.1` were updated; both example contracts' `F1`/`F2` quotations were synchronized. No stale `verification.judge` records were present on the changed items. The definition contract has no derivation or citation rows affected by these definition-only changes.

## Validation

- Reflow on all four changed items: exit 0; all unchanged.
- Precheck: definition `0 checked, 0 failing`; theorem and both examples passed, with no failing items.
- Final `proof-layout` on the four changed items: `4 items, 11 steps, 0 defects`.
- A focused consistency check confirmed the current manifest Statement/Definition/Example mirrors and affected proof-contract quotations/derivation claims match the item sources.

## Page verdicts

- `qftx-susy-ward-and-nonrenormalization`: **pass**. Its two assigned items are the action-data definition and conditional N=1 theorem; the repaired definition and theorem are synchronized with the page's current item inventory.
- `qftx-susy-ward-and-nonrenormalization-examples`: **pass**. Its two assigned examples remain conditional and match the corrected theorem statement; the B-page body remains empty.

## Defects not edited and blockers

None found that remained uneditable in this batch. No blocker remains for this reader review. The source arithmetic inconsistency noted above is in the cited paper, not a defect in the current local proof.

## Coverage limits

I checked the exact direct suppliers needed for the assigned constructions and arguments, including the relevant Lie-group, superspace, BRST, and action-convention proofs. I did not audit the complete transitive foundational closure behind every supplier (notably the entire set-theory dependency closure behind countable choice). For source disputes I inspected Weinberg's Eqs. (10)–(12) and FI argument and the cited Dienes et al. sections; I did not independently re-fetch every other bibliographic reference because none of the remaining decisions depended on them. No empirical observation or statistical claim is made by this batch.

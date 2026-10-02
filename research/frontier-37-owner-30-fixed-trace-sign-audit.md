# Fixed-trace sign audit: curve duality

**Scope.** Report-only audit of `thm-serre-duality-curves-line-bundles` and
`rem-duality-trace-normalization`, including their used Koszul, Gysin, Čech,
and projective-Laurent normalization suppliers. No item, carrier, manifest,
plan, ledger, receipt, certification, or gate was edited.

## Finding

Step 1.4 has the wrong universal scalar relative to the fixed projective
Laurent trace. The literal trace of the connecting class of
`0 → ω_C → ω_C(p) → ω_C(p)|_p → 0`, for quotient generator `t⁻¹dt`, is
`−1` at a rational point of `P¹` under the stated ordered Čech differential
and Laurent trace. The usual local residue is `+1`. Thus the universal
comparison is `−1` times the positive residue; in characteristic `2` the
two scalars coincide. The claim `t_C(δ_p(t⁻¹dt)) = 1` does not follow from
the supplier comparison as written, and in characteristic different from
`2` the `P¹` calculation directly gives the opposite sign.

## Typed maps and local Koszul calculation

For `A = O_{C,p}` and uniformizer `u`, use the cochain resolution
`K⁻¹ = A e_u → K⁰ = A`, `e_u ↦ u`. The lift of the quotient generator
`u⁻¹du` to `ω_C(p)` is the degree-zero map `v(1)=u⁻¹du`; therefore
`v(u)=du`, so the classical projective-resolution Ext cocycle is
`c(e_u)=+du`.

The cited items assign different typed meanings to the signs:

- `thm-ext-is-hom-in-the-derived-category`, Step 2.1, defines the map from
  the classical projective Ext complex (positive precomposition differential)
  to the standard cochain Hom complex. In degree one this map is
  `c ↦ σ₁c = −c`.
- `prop-yoneda-product-is-composition-in-the-derived-category`, Step 1.2,
  represents the connecting arrow of the short extension by the positive
  cocycle `+c` in the derived category, using the cone projection. Its Step
  2.1 expressly says this Yoneda normalization is not the classical-projective
  comparison of `thm-ext...`.
- `lem-smooth-projective-rational-point-koszul-residue-normalization`, Steps
  2.1 and 3.1, says the raw ambient degree-one point cochain `+du` has fixed
  trace `−1`, while the normalized local point class `−du` has trace `+1`.

Consequently `σ₁` is a comparison of *cochain models*, not a trace-preserving
operation on the original connecting class. If the connecting class is
represented by the raw class `+du`, replacing it by `−du` changes its scalar
by `−1`; a trace-one statement about the latter gives trace `−1` on the
former. Conversely, if one starts with the Yoneda connecting arrow in derived
Hom, it is already represented by `+du` under the cone convention, so the
classical-to-derived factor cannot be applied to it a second time.

The repository records distinct natural identifications here:
`thm-higher-yoneda-ext-agrees-with-derived-ext`, Steps 1.1 and 3.1, sends an
extension to the positive classical cocycle `+c`; `prop-yoneda...`, Step 1.2,
sends it to the positive cone connecting arrow `+c`; and `thm-ext...`, Step
2.1, defines a classical-projective-to-derived-Hom chain comparison sending
`+c` to `−c`. The proposition's Step 2.1 expressly disclaims equality of its
Yoneda normalization with the latter comparison. These are not, by
themselves, contradictory published assertions. The defect in the target is
its use of these distinct maps as if they formed a sign-preserving commuting
square.

## Decisive fixed-trace check on `P¹`

Take `C=P¹_k`, `p=[1:0]`, `t=x₁/x₀`, and the standard affine cover
`U₀=D₊(x₀), U₁=D₊(x₁)` ordered `0<1`. The canonical-bundle definition fixes
the frame `dt` on `U₀` as the image of `x₀⁻²`, and
`t⁻¹dt = (x₀x₁)⁻¹` on the overlap. Lift the quotient generator on `U₀` and
zero on `U₁`. The declared Čech differential is
`(δs)₀₁=s₁−s₀`, so the connecting cocycle is
`−t⁻¹dt = −(x₀x₁)⁻¹`. The fixed Laurent trace sends the positive monomial
class `(x₀x₁)⁻¹` to `1`; hence it sends this connecting class to `−1`.

Ordering the point chart last gives a positive overlap representative, as
Step 1.4 computes. It does not alter the cohomology class or its trace: the
degree-one Čech coordinate changes sign when the two cover indices are
reordered, and its canonical comparison with the standard ordered Laurent
complex carries that positive representative to the negative standard
Laurent class. The arbitrary cover order in Step 1.4 therefore cannot be used
to read the fixed Laurent coefficient as `+1` without this comparison sign.

This check uses only the actual supplied formulas:
`def-cech-cochain-complex-open-cover` (`δ_{ij}=s_j−s_i`),
`def-smooth-projective-dualizing-line-bundle-and-trace` (`dt ↔ x₀⁻²` and
fixed Laurent coefficient trace),
`lem-projective-space-top-cohomology-residue-pairing` (standard ordered
Čech monomial basis), and the rational-point normalizer’s raw-trace
calculation. It is not a choice to rescale the trace.

## Source check and disposition

I read the cited full-text locations relevant to the sign:

- Stacks Project, tag `06XP`, §13.27, Definitions 13.27.4–13.27.5 and the
  following composition discussion: a Yoneda extension is sent to its
  connecting morphism `f s⁻¹` in the derived category.
- Weibel, *An Introduction to Homological Algebra*, Chapter 3, §3.4.3 and
  Vista 3.4.6: the projective-resolution extension class is obtained by the
  connecting map from the positive restriction of a lift; Chapter 10,
  §§10.4.7 and 10.7.5 identifies the usual Ext with derived-category Hom.
  These citations do not support treating the cone/Yoneda class and the
  classical-projective cochain as the same signed representative without an
  explicit convention conversion.
- The repo’s published projective-point normalizer computes raw trace
  `(-1)^N` in Step 2.1 and applies its normalization in Steps 3.1–4.1;
  for `N=1`, this is raw trace `−1`, normalized trace `+1`.

No route from the current Step 1.4 chain to the asserted universal `+1`
comparison is valid while the projective Laurent trace, ordered Čech
differential, and positive local residue are all held fixed; in characteristic
`2` the numerical values happen to coincide. The displayed `P¹` class fixes
the universal comparison scalar.
The target proof needs a sign repair. The supplier conventions need no repair
merely because their chosen isomorphisms differ; the consumer must retain the
comparison factor and not infer that the original class has trace `+1` from
the normalized class `−du`.

## Files checked

- `items/thm-serre-duality-curves-line-bundles.md`, especially Facts [F10]–
  [F11] and proof Step 1.4.
- `items/rem-duality-trace-normalization.md`, especially the paragraph
  identifying the point-last Čech boundary with the normalized point class.
- `items/thm-ext-is-hom-in-the-derived-category.md`, Step 2.1.
- `items/thm-higher-yoneda-ext-agrees-with-derived-ext.md`, Steps 1.1 and 3.1.
- `items/prop-yoneda-product-is-composition-in-the-derived-category.md`,
  Steps 1.2 and 2.1.
- `items/lem-regular-immersion-local-to-global-ext-collapse.md`, Step 7.1.
- `items/lem-smooth-projective-rational-point-koszul-residue-normalization.md`,
  Steps 2.1–4.1.
- `items/lem-smooth-projective-embedding-gysin-trace-compatibility.md`.
- `items/def-smooth-projective-dualizing-line-bundle-and-trace.md`.
- `items/lem-projective-space-top-cohomology-residue-pairing.md`, Steps
  1.1–1.3.
- `items/def-cech-cochain-complex-open-cover.md` and
  `items/thm-cech-to-sheaf-cohomology-comparison.md`.

## General-curve comparison and repair route

The sign determined by the `P¹` check extends to every smooth proper
geometrically integral curve over a perfect field. The fixed trace and the
positive local residue convention give

\[
t_C\!\left(\delta_p(a u^{-1}du)\right)
=-\operatorname{Tr}_{\kappa(p)/k}(a)
=-\operatorname{res}_p(a u^{-1}du)
\]

for every closed point `p`, uniformizer `u`, and coefficient
`a ∈ κ(p)`. Consequently `t_C = -t_C^{res}` on `H¹(C,ω_C)`. For every
invertible `L`, the fixed-trace Serre pairing is likewise the **negative** of
the positive residue pairing. No trace rescaling is involved.

### Point class, Cartier extension, and ambient trace

Fix a rational point `x` on a smooth projective curve over an algebraically
closed field and a parameter `u`. Put `A=O_{C,x}`. Identify the quotient of
`0 → ω_C → ω_C(x) → ω_C(x)|_x → 0` with `κ(x)` by sending the class of
`u⁻¹du` to `1`. The two-term resolution `A e_u → A`, `e_u ↦ u`, and the lift
`1 ↦ u⁻¹du` give the **raw classical** extension cocycle
`e_u ↦ +du`: applying the resolution differential gives
`u(u⁻¹du)=du`. This is the extension class of the displayed Cartier
sequence with that quotient identification.

The published rational-point normalizer fixes the trace-one class in the
global Yoneda group `Ext¹_C(κ(x),ω_C)` to be `e_u ↦ -du` when `dim C=1`; its
statement and proof carry that class through conormal adjunction and Yoneda
composition to the ambient projective-space point class, whose evaluation at
`1` followed by the fixed Laurent trace is `+1`. For the point immersion
`x↪C`, the normalized regular-immersion collapse contributes the single
factor `σ₁=(-1)^{1(1+1)/2}=-1` (the degree-one Hodge determinant factor is
`s₁=+1`), not a trace rescaling. Thus the global extension class of the
Cartier sequence is the **negative** of the normalized global point class.
Under the same point-to-curve-to-ambient Yoneda/Gysin map, its image has fixed
trace `-1`.

Write `e_x` for the global sheaf-Yoneda class of
`0 → ω_C → ω_C(x) → κ(x) → 0`. Its restriction to `A` is the local module
extension just computed, whose projective-resolution representative is
`+du`. Write `ε_x` for the trace-one global point class from the normalizer;
in the same local Koszul model it is `−du`, so `e_x=−ε_x`. This is the sole
classical-resolution/normalized-point conversion. The global Cartier
connecting class is the Yoneda composite of the **original** sheaf extension
`e_x` with `O_C → κ(x)`, viewed in
`Ext¹_{O_C}(O_C,ω_C)=H¹(C,ω_C)`. The extension-to-boundary map is the
ordinary positive connecting map (Stacks tag `06XP`, §13.27), so it
introduces no further sign. Therefore
`t_C(δ_x(u⁻¹du))=-1`; scaling the quotient section by `b` gives `-b`. This
also explains the ordered-Čech calculation: a cover with the point chart last
represents the boundary by `+u⁻¹du`; the normalized local-to-global/Gysin
comparison sends the raw class to the negative trace-one point class. On
`P¹` the standard ordered cover makes the same boundary class
`-(x₀x₁)⁻¹`, exactly the fixed Laurent trace `-1` found above.

The precise false inference in target Step 1.4 is the passage from “the raw
Cartier extension cocycle `+du` is multiplied by `σ₁=-1` to obtain the
trace-one normalized class `-du`” to “the original connecting class has
trace `+1`.” The comparison changes the class by `-1`, so its trace changes
by `-1` too. The published point normalizer, the normalized collapse, and
the fixed projective Laurent trace can all remain as stated; the target proof
must retain this scalar. The `thm-ext` projective comparison and the
cone/Yoneda comparison are distinct chosen identifications in the current
library, as `prop-yoneda...` Step 2.1 itself notes. They must not be combined
as though their cocycle representatives were identical. The local calculation
above uses the explicit normalized-collapse map and the explicit extension
lift, so it does not infer a trace from an untyped comparison isomorphism.

### Closed points and perfect-field residue realization

For a closed point `p`, let `L=κ(p)`. Since `k` is perfect, `L/k` is finite
separable. With `K=\bar k`, the algebra `L⊗_kK` splits as
`∏_{σ:L↪K}K`; the base-changed Cartier divisor is the disjoint union of the
rational points `x_σ`. Flat base change carries the twisting sequence and its
connecting homomorphism to the sum of the corresponding rational-point
sequences. It also carries the fixed trace to the fixed trace: the cited
projective-embedding compatibility proof tensors the finite locally free
resolution and its ordered Hom–Čech complex with `K`, preserving the one
factor `σ_c` and the same Laurent coefficient. Hence

\[
\begin{aligned}
t_C\!\left(\delta_p(a u^{-1}du)\right)
 &= \sum_{\sigma:L\hookrightarrow K}
    t_{C_K}\!\left(\delta_{x_\sigma}(\sigma(a)u_\sigma^{-1}du_\sigma)\right)\\
 &= -\sum_{\sigma:L\hookrightarrow K}\sigma(a)
  = -\operatorname{Tr}_{L/k}(a).
\end{aligned}
\]

The coefficient-trace residue convention gives
`res_p(a u⁻¹du)=+Tr_{L/k}(a)`. The global residue theorem and the
principal-parts presentation make the positive residue-sum functional
`t_C^{res}` well defined on `H¹(C,ω_C)`. Applying the published duality
theorem to `O_C`, with `H⁰(C,O_C)=k`, gives `dim_k H¹(C,ω_C)=1`. The trace
form of the finite separable extension is nondegenerate, so choose `a` with
`Tr_{L/k}(a)≠0`; the class `δ_p(a u⁻¹du)` is nonzero and spans this
one-dimensional group. The two functionals agree on this generator with
opposite values, proving `t_C=-t_C^{res}` on the whole group. This argument
keeps the perfect-field hypothesis exactly where the coefficient-trace
residue formula and separable splitting are used; arbitrary-field part (1)
of the duality theorem remains unchanged.

For general invertible `L`, take an effective Cartier divisor `D` supporting
a principal-parts representative `c` and a section
`s∈H⁰(C,ω_C⊗L⁻¹)`. Multiplication by `s` maps the `L(D)` exact sequence to
the `ω_C(D)` exact sequence. Naturality identifies the lower connecting
class with `c∪s`, with no degree sign because `s` is in cohomological degree
zero. The established trace comparison then gives

\[
t_C(c\cup s)
=-\sum_{p\in\operatorname{supp}D}\operatorname{res}_p(c_ps)
=-\langle c,s\rangle.
\]

The positive residue pairing remains bilinear, functorial, and perfect: it is
the negative of the fixed-trace perfect pairing, and multiplication by `-1`
does not affect nondegeneracy or dimensions. Thus the equality
`h¹(C,L)=h⁰(C,ω_C⊗L⁻¹)` is retained.

### Exact claim and consumer disposition

The following sign-bearing statements require the `−` comparison:

- `thm-serre-duality-curves-line-bundles`: part (2) must say
  `t_C(ξ) = -Σ res_p(ξ_p)` and
  `t_C(c∪s) = -⟨c,s⟩`. In the proof, Facts [F10], Steps 1.4 and 2.2, and
  Step 3.1 need the raw/normalized distinction and the minus sign. Part (1),
  the perfectness and functoriality claims, and the dimension identity are
  unchanged.
- `rem-duality-trace-normalization`: replace its asserted literal equality
  by `t_C=-t_C^{res}` and update its point-boundary comparison from
  `+Tr(a)` to `-Tr(a)`.
- `ex-residue-projective-line`: all local-residue and global-sum calculations
  remain as written; its Step 5.1/F9 interpretation of residue sum as the
  fixed normalized trace changes to its negative.
- `ex-serre-duality-projective-line-twists` and
  `ex-residue-pairing-one-cocycle`: their positive residue tables remain
  correct, but those tables are the negative of the fixed-trace Serre pairing.
  In particular, for `d=0` the positive local residue is `+1`, while the
  fixed trace on the same class is `-1`; the duality matrix for the fixed
  trace is the negative anti-diagonal identity.
- `rem-general-serre-duality-deferred`: its arbitrary-field fixed-trace
  pairings remain unchanged; only the sentence saying that the line-bundle
  theorem identifies the fixed trace with the residue-sum functional must
  say “the negative of the residue-sum functional.”

Direct consumers whose claims use only perfectness, dimensions, or vanishing
do not need sign edits: `cor-h1-line-bundle-dual-sections`,
`cor-h0-canonical-differentials-genus`, `ex-genus-one-rr-degree-positive`,
and `thm-canonical-map-nonhyperelliptic-curve`. This list is based on their
current proof text and dependency links; it does not assume that a dependency
alone requires an edit.

### Source and supplier status

The required local calculation is already present in the full current
supplier texts: the normalized collapse gives `σ₁=-1` in
`lem-regular-immersion-local-to-global-ext-collapse` Step 7.1; the
rational-point normalizer computes raw ambient trace `(-1)^N`, normalizes by
`(-1)^N`, and gives intrinsic point generator `(-1)^n du` in
`lem-smooth-projective-rational-point-koszul-residue-normalization` Steps
1.1–4.1; `lem-smooth-projective-embedding-gysin-trace-compatibility` Steps
3.1, 5.1, and 6.1 identify this with the fixed embedding-independent trace
and prove its field-extension compatibility. Stacks Project tag `06XP`,
§13.27, supplies the extension/Yoneda-to-connecting-morphism convention;
the repository's ordered Čech definition supplies the explicit boundary
sign. No published trace is changed.

There is a convention issue to keep visible rather than silently erase:
`thm-ext-is-hom-in-the-derived-category` Step 2.1 sends a positive
classical projective-resolution cocycle to `σ₁c=-c`, while
`thm-higher-yoneda-ext-agrees-with-derived-ext` Step 1.1 sends an extension
to the positive classical cocycle and `prop-yoneda-product-is-composition-in-the-derived-category`
Step 1.2 sends it to the positive cone connecting arrow. The proposition
Step 2.1 expressly says these chosen identifications are not asserted to be
the same. For the route above, the local-to-global trace uses the normalized
collapse once; the extension boundary remains the usual connecting class.
The concrete coefficient is independently forced by the standard ordered
`P¹` Čech computation. No contradictory published assertion or supplier
repair is identified here: the current consumer's Step 1.4 uses distinct
natural identifications as one commuting arrow and loses the factor `−1`.
 
## Authorized repair completed

The two authorized target items now retain the literal published Gysin trace
and the positive local-residue convention while stating their actual
comparison:

- thm-serre-duality-curves-line-bundles, Statement (2), Steps 1.4, 2.2,
  3.1, and 4.1: over a perfect field,
  \(t_C(\xi)=-\sum_p\operatorname{res}_p(\xi_p)\) and
  \(t_C(c\cup s)=-\langle c,s\rangle\). The arbitrary-field fixed-trace
  duality, perfectness, functoriality, and dimension conclusions are retained.
- rem-duality-trace-normalization: the trace comparison, point-class
  calculation, and line-bundle pairing now use the same single minus sign.
  The remark continues to scope the coefficient-trace residue comparison to
  perfect fields.

The local comparison is now globalized on C, without applying the
projective-space-only Ext-collapse statement to x→C. For an effective
Cartier point the locally free resolution
\(0\to\mathcal O_C(-x)\to\mathcal O_C\to\kappa(x)\to0\) computes sheaf Ext:
\(\mathcal Ext^0=0\), \(\mathcal Ext^1=\iota_*(\omega_C(x)|_x)\), and all
higher sheaf Exts vanish. An injective resolution and its Hom double complex
identify that computation with the finite locally free resolution;
extension-by-zero adjunction makes \(\mathcal Hom(\kappa(x),I)\) flasque
for injective I. Thus the Grothendieck spectral sequence for
\(\Gamma\circ\mathcal Hom(\kappa(x),-)\) applies. The only nonzero sheaf-Ext
row is supported on the affine one-point subscheme, so it has no positive
cohomology; the total-degree-one edge is the natural isomorphism
\[
\operatorname{Ext}^1_{\mathcal O_C}(\kappa(x),\omega_C)
\longrightarrow
\operatorname{Ext}^1_{\mathcal O_{C,x}}(\kappa(x),\omega_{C,x}).
\]
This makes the raw Cartier extension e_x, whose local cocycle is
\(e_u\mapsto+du\), and the normalized point class epsilon_x, whose local
cocycle is \(e_u\mapsto-du\), comparable as global classes:
\(e_x=-\epsilon_x\). The standard positive Yoneda boundary is
\(e_x\circ q_x=-\epsilon_x\circ q_x\), so it has fixed trace −1.
There is exactly one comparison sign; the original extension class receives
no additional sigma_1.

Facts [F15]–[F16] make the support and boundary routes explicit. Direct
dependencies cited there are:

- def-effective-cartier-divisor
- def-invertible-sheaf-of-cartier-divisor
- def-sheaf-ext-for-coherent-modules
- def-sheaf-cohomology-derived-global-sections
- def-extension-by-zero-abelian-sheaf
- def-flasque-sheaf
- lem-closed-immersion-cohomology-pushforward
- lem-acyclic-assembly-by-exact-columns
- lem-acyclic-assembly-by-exact-rows
- lem-ringed-space-module-sheaves-enough-injectives
- lem-effective-cartier-divisor-exact-sequence
- thm-acyclic-resolution-theorem-for-right-derived-functors
- thm-choice-implies-dependent-implies-countable-choice
- thm-effective-cartier-divisor-closed-immersion
- thm-extension-by-zero-adjunction-exactness
- thm-flasque-sheaves-acyclic
- thm-grothendieck-spectral-sequence
- thm-local-ring-smooth-curve-dvr
- thm-qc-sheaf-affine-higher-cohomology-vanishes
- prop-yoneda-product-is-composition-in-the-derived-category

The fixed-trace comparison continues to use the existing rational-point
Koszul normalizer, embedding-Gysin compatibility, and trace base-change
suppliers. No supplier's published trace or assertion was changed.

The exact target SHA-256 values after repair are:

- items/thm-serre-duality-curves-line-bundles.md:
  171e700c03ab957c4f8e66eff2530f06ddc24bc768218d21963c0edec59486f1
- items/rem-duality-trace-normalization.md:
  909c1fe821c1626fef416dfe9bfd198bee49e9fe5425f1dd6de8815c168a4fa0

Focused verification passed: node tools/tsx-run.mjs tools/precheck.mts
items/thm-serre-duality-curves-line-bundles.md reported PASS (1 checked,
0 failing). No mathematical or source-convention uncertainty remains in this
repaired comparison. Other sign-bearing examples and the shared trace
carriers were outside this write authorization and remain for the root
integrator to update.
 
## Selected batch-8 carrier integration

Synchronized only the selected rows for thm-serre-duality-curves-line-bundles
and rem-duality-trace-normalization in
research/frontier-37-owner-30-batch-8.pages.json. Their statements, direct
dependencies, proof strategies, source references, status, provenance, and
proof-strategy labels now agree with the current item frontmatter and repaired
claim. Every other item row in the pages carrier was retained unchanged.

The theorem page row now states the scope split accurately: arbitrary-field
Serre duality uses the fixed embedding-independent Gysin trace; the
perfect-field residue realization is negative,
t_C(ξ)=−Σ res_p(ξ_p) and t_C(c∪s)=−⟨c,s⟩. Its complete direct-dependency
list has 50 IDs. Compared with its pre-sync page row, 22 were added:

- def-closed-immersion-schemes
- def-dependent-choice
- def-effective-cartier-divisor
- def-extension-by-zero-abelian-sheaf
- def-flasque-sheaf
- def-invertible-sheaf-of-cartier-divisor
- def-sheaf-cohomology-derived-global-sections
- def-sheaf-ext-for-coherent-modules
- lem-acyclic-assembly-by-exact-columns
- lem-acyclic-assembly-by-exact-rows
- lem-closed-immersion-cohomology-pushforward
- lem-effective-cartier-divisor-exact-sequence
- lem-ringed-space-module-sheaves-enough-injectives
- prop-yoneda-product-is-composition-in-the-derived-category
- thm-acyclic-resolution-theorem-for-right-derived-functors
- thm-choice-implies-dependent-implies-countable-choice
- thm-effective-cartier-divisor-closed-immersion
- thm-extension-by-zero-adjunction-exactness
- thm-flasque-sheaves-acyclic
- thm-grothendieck-spectral-sequence
- thm-local-ring-smooth-curve-dvr
- thm-qc-sheaf-affine-higher-cohomology-vanishes

The obsolete direct dependency thm-ext-is-hom-in-the-derived-category was
removed from the theorem row. The remark row's 23 dependencies were already
identical to its current item metadata and were copied without a delta.

Regenerated the theorem contract's citations and derivations from its current
Facts and numbered proof steps. It now has 49 citations covering F1–F16 and
9 derivations. F10 cites the four suppliers actually linked by the repaired
fact; its old thm-ext citation was dropped. F15 adds 19 source citations for
the global-to-local Ext/support argument, and F16 adds the Yoneda-boundary
supplier. The remark has no Facts & Assumptions or numbered Proof section, so
its citations and derivations remain empty. Boundary evidence was manually
synchronized: the theorem's zero, one, degenerate, and nonempty-choice cases
now cite the negative trace/residue calculation and the global Ext edge; the
remark's zero, one, and nonempty-choice cases now refer to its corrected
negative statement and trace-detecting boundary. Neither selected contract
had a risk_review field.

The previous positive-trace boundary assertions are corrected in these
selected carriers: the raw Cartier class +du maps to the normalized −du
point class by the one global-to-local Ext comparison; the positive Yoneda
boundary has fixed trace −1. The residue remains +1. Step 2.2 now uses
−Tr(a), Step 3.1 the negative residue pairing, and Step 4.1 derives
perfectness from multiplication of the perfect fixed-trace pairing by −1.

The exact selected-carrier check passed:
node tools/proof-contract.mjs research/frontier-37-owner-30-batch-8.proof-contracts.json --strict --items thm-serre-duality-curves-line-bundles,rem-duality-trace-normalization
reported 0 errors, 0 warnings, 2/2 items checked.

Final carrier SHA-256 values:

- research/frontier-37-owner-30-batch-8.pages.json:
  eca58b40e1c5d2cb3221f8828b9798c8b19d5b21cd217337697f134135a6482a
- research/frontier-37-owner-30-batch-8.proof-contracts.json:
  c799d1b8b8af9a650527a34b882f002b192fb5c675253e42ade511afdd1d916f

No receipt, scope decision, gate configuration, cross-edge inventory, plan,
or unrelated carrier was edited.

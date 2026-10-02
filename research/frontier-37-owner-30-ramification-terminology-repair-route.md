# Step 3 ramification terminology and divisor repair route

## Scope

Report-only audit of the five named live item bodies and their actual proof
routes. No item, supplier, carrier, shared decision, coverage row, receipt,
plan, ledger, or gate was changed or checked for acceptance. The five audited
file snapshots were:

| Item | SHA-256 |
|---|---|
| def-ramification-index-curve-map | 5c8a4430f16935271514d1c0a80f66d278e70c8e8d8be6a2c9d40165cca5de21 |
| def-ramification-and-branch-points | afb2a3fc4067911ad159d300faac303938bd0c9697bb83686e7f03d64c08f0be |
| cex-inseparable-map-riemann-hurwitz-naive-fails | c15816c691216d33db1fe1257d3b4d6dd085d37a4de0032c2465729f5437b8c6 |
| ex-divisor-degree-over-nonalgebraically-closed-field | b28672204f19ff62c4a0597efcdee62982f96a17abe380f8477c9b228e168864 |
| lem-torsion-quotient-invertible-sheaves-effective-divisor | 8401fdb019f7c8242a54d9b430537f5277275a70016233ff8d22266c91679a26 |

I read the relevant actual direct suppliers, including
lem-curve-different-local-support-and-index-bound,
lem-ag-differentials-transitivity, the unramified-morphism definition, the
Cartier-divisor definitions, thm-line-bundle-rational-section-cartier-divisor,
and thm-cartier-weil-divisors-curves-agree. The Stacks Project pages for
unramified morphisms (Morphisms of Schemes, tags 02G4, 02G5, and 02G7) confirm
the scheme-theoretic unramified convention and the finite separable residue
field condition. The published library transitivity lemma gives the
right-exact Kähler differential sequence for arbitrary ring maps.

## Findings and repair routes

### Ramification index and ramification loci

The definition of e_p as the order of the pullback of a target uniformizer,
its positivity, and its independence of uniformizer are correct for the
stated finite morphism of smooth proper integral curves. The defect is the
last sentence: it calls p scheme-theoretically unramified when e_p=1, without
requiring the residue extension kappa(p)/kappa(q) to be separable.

Preserve the numerical index and distinguish the conventions. A minimal
repair calls e_p=1 “unramified in the index sense” and e_p>1
“ramified in the index sense”. For the ordinary scheme-theoretic notion in
this finite curve-map setting, the exact pointwise criterion is
e_p=1 together with separability of kappa(p)/kappa(q). Locally, if
A=O_{D,q}, B=O_{C,p}, and t_q maps to a unit times t_p^e, then the local
fibre is B/(t_p^e). It is a residue field, rather than a nonreduced
Artinian thickening, exactly when e=1; that field fibre is unramified over
kappa(q) exactly when its residue extension is separable. This agrees with
the published unramified definition (locally finite type and vanishing
relative differentials).

The adjacent definition of index and differential loci already makes the
needed distinction correctly. Under a separable function-field extension it
uses the local-support lemma to identify the differential support with
{p : e_p>1 or kappa(p)/kappa(q) is inseparable}; it then gives equality of
the two loci at separable-residue points and over perfect k. Its statement
does not claim finite support or a comparison when the function-field
extension is inseparable. No independent mathematical repair to that
definition is indicated, apart from aligning its vocabulary with the index
definition.

Direct consumer audit:

- lem-curve-different-local-support-and-index-bound uses e_p numerically and
  has a separable generic-extension hypothesis; it does not infer
  scheme-theoretic unramifiedness from e_p=1.
- def-different-divisor-curve-map states the correct zero-length criterion:
  e_p=1 and separable residue extension.
- lem-fibre-degree-sum-ramification-residue and
  lem-degree-pullback-divisor-finite-morphism-curves use e_p as the local
  order coefficient; their formulas are valid over arbitrary base fields.
- ex-ramification-power-map-projective-line explicitly says “index
  convention” for its e_p=1 shorthand. Its claim that the other points are
  unramified also establishes separable residue extensions under
  char(k) not dividing n. No mathematical defect found there.
- ex-riemann-hurwitz-double-cover works in characteristic not two and with
  degree-two residue extensions, which are separable; its index/differential
  branch usage is valid.
- ex-hyperelliptic-curve-double-cover assumes k algebraically closed, so
  residue extensions are trivial and its index/differential locus usage is
  valid.
- cor-unramified-cover-curves-genus-complete defines the input as finite
  étale and uses vanishing relative differentials; it does not rely on the
  e_p=1-only convention.
- cex-inseparable-map-riemann-hurwitz-naive-fails correctly computes
  e_0=e_infinity=p, but its “only/ exactly at 0 and infinity” claim is
  false; see the next section.

### Inseparable Frobenius counterexample

The core counterexample is sound and the prior full-module-length criticism
is withdrawn. The current proof explicitly computes
Omega_{P1/P1} as an invertible rank-one sheaf on the two charts; its torsion
subsheaf is zero, so the proposed divisor made from torsion lengths is zero.
This is not a claim that the full stalks of Omega have finite length. The
degree comparison O(-2) versus O(-2p) then shows that the canonical-bundle
formula cannot be extended by that torsion-submodule recipe.

There are two actual proof-scope errors and one false description of the
ramification locus:

1. Construction and conclusion say that x -> x^p is ramified only/exactly
   at 0 and infinity. After base change to an algebraic closure, every
   geometric closed point is index-ramified: at a finite geometric point a,
   choose b with b^p=a; the pullback of the target parameter x-a is
   x^p-a=(x-b)^p, so e=p. At infinity the same computation uses y. The
   present computation e_0=e_infinity=p remains correct, but does not show
   these are the only points. Over an imperfect original field, some closed
   points can instead have e=1 and inseparable residue extension, so the
   clean repair is to state the geometric claim after base change and avoid
   an unqualified classification of original closed points.

2. Fact F5 links the different R_f to def-different-divisor-curve-map, whose
   definition assumes a separable function-field extension. The Frobenius
   example is purely inseparable, so this named R_f is not defined by that
   supplier here. Keep the counterexample's separate proposed recipe
   explicit: take the torsion subsheaf of Omega, whose stalk lengths are
   zero in this example, and call its divisor a candidate extension of the
   separable formula. The absolute rational-differential divisor statements
   in F5, and the displayed computation using dx and a source uniformizer,
   are valid; they are not the defect.

3. Step 2.1 cites the separable canonical-bundle theorem F6 for the exact
   sequence 0 -> f*omega_D -> omega_C -> Omega_{C/D} -> 0 in this
   inseparable case. That injectivity assertion is not available and is
   false here because the first map is zero. Replace that use with the
   always right-exact Kähler transitivity sequence from
   lem-ag-differentials-transitivity: f*Omega_{D/k} -> Omega_{C/k} ->
   Omega_{C/D} -> 0, whose first arrow need not be injective. It permits
   the computed zero map to identify Omega_{C/D} with Omega_{C/k};
   alternatively omit this identification, since the direct chart
   calculation in step 2.2 already proves Omega_{C/D} is invertible and
   torsion-free. F6 remains only background for the separable theorem being
   refuted.

The item’s F7 and conclusion still call several Cartier/Picard suppliers
“not yet authored”. Those files now exist, including the invertible-sheaf,
effective-Cartier, rational-section, pullback, and Cartier/Weil interfaces.
That old authorship note should be reconciled against their actual current
proofs and decisions; this audit does not infer acceptance from file presence.
The line-bundle degree contradiction has a direct route through the current
P1 divisor-classification and divisor-degree sources.

### Divisor degree after base change

The residue field, degree formula, local order, and principal divisor
calculation in ex-divisor-degree-over-nonalgebraically-closed-field are
correct. Step 3.2 has a C-linearity error in its splitting map. It gives
C tensor_R C -> C x C by a tensor formula that conjugates the second tensor
factor. But the base-change C-algebra structure is through that second
factor, and the displayed map sends 1 tensor b to (b, conjugate(b)), not
to the diagonal scalar (b,b). It is therefore not a C-algebra isomorphism
for the stated base change, so the labeling of the two C-rational points is
not justified by that map as written.

Use the C-algebra isomorphism
a tensor b maps to (a b, conjugate(a) b), where a belongs to the first
C factor and b to the base C factor. It sends the base scalar 1 tensor b to
(b,b) and t tensor 1 to (i,-i). An even shorter route is to base change the
coordinate ring directly:
C tensor_R R[t]/(t^2+1) = C[t]/((t-i)(t+i)) = C x C,
with the two evaluation maps t -> i and t -> -i. The claimed two points and
preservation of total degree then follow. No other proof defect was found.

### Torsion quotient and global gluing

The local DVR calculation in lem-torsion-quotient-invertible-sheaves-effective-divisor
is correct. At p, an injection between free rank-one modules has image
t_p^{l_p} times a basis, so Q_p is cyclic of length l_p and the rational
section of L^vee tensor M has order l_p. The divisor D is finite and
effective, and the rational-section supplier provides a global isomorphism
O_C(D) -> L^vee tensor M carrying the canonical section to the section
defined by L -> M. Thus the first conclusion M ~= L tensor O_C(D) has a
global proof route.

The second conclusion Q ~= O_C(D)/O_C is not established by the final
sentence’s pointwise trivializations alone: local trivializations of L at
each p need not glue on C. The global ambient-bundle isomorphism does
establish the canonical twisted quotient
Q ~= L tensor (O_C(D)/O_C).
To preserve the stated untwisted isomorphism, make the finite-support step
explicit. The sheaf O_C(D)/O_C is an invertible module on the finite
effective Cartier subscheme D. Since D is a finite disjoint union of local
Artinian schemes, L restricted to each component is free of rank one;
choose a generator on each of the finitely many components and combine them
to a global trivialization L|_D ~= O_D. Tensoring the canonical twisted
quotient with that chosen trivialization gives a (noncanonical) global
isomorphism Q ~= O_C(D)/O_C. This uses more than equality of stalk lengths;
the original exact sequence supplies the cyclic local structure, while the
rational section and finite-support trivialization supply the global
isomorphism.

The supplier-obligation prose in this lemma is also stale: the referenced
Cartier divisor and rational-section files are present, although their
current decision/acceptance status must be checked by the owner. The
def-linear-equivalence-cartier-divisors supplier does not appear necessary
for this lemma’s divisor and quotient argument. Its theorem consumer
thm-canonical-bundle-ramification-formula uses the twist conclusion; the
global quotient refinement does not change that route.

## Handoff

These are report-only findings and proposed repair routes for the five
requested items. No repairs, review receipts, gate runs, or owner decisions
were made.

## Authorized repair checkpoint

The root later released exact math-write authority for four items only. I
edited those four item bodies and their direct dependency lists, and did not
edit the fifth audited item (`def-ramification-and-branch-points`), any other
item, shared carrier, plan, coverage row, receipt, ledger, or gate. The prior
report routes are reconciled below against the applied proof text. These are
author edits awaiting the root's ordinary review; no acceptance or receipt is
claimed.

### Applied proof routes

- `def-ramification-index-curve-map`: kept the order definition and named
  “index-unramified” (`e_p=1`) separately from scheme-theoretic
  unramifiedness. The exact finite-curve-map criterion now includes both
  `e_p=1` and separability of `kappa(p)/kappa(q)`. The forward route uses the
  actual residue-field lemma to get maximal-ideal equality and separability;
  the reverse route identifies the local fibre with `kappa(p)`, base-changes
  differentials, and applies Nakayama. Choice use is stated at this comparison,
  not attributed to the numerical index.
- `cex-inseparable-map-riemann-hurwitz-naive-fails`: the counterexample uses
  the torsion subsheaf lengths as a separate proposed correction divisor; it
  does not call them the separable different divisor or the lengths of the
  full relative-differential stalks. The explicit chart computation still
  gives zero torsion. The differential map is handled through the always
  right-exact transitivity sequence, not the separable theorem's injectivity
  assertion. The geometric ramification claim is now quantified after base
  change: every geometric closed point has index `p`; the example also records
  an imperfect-base closed point with index `1` and inseparable residue field.
  The earlier full-module-length criticism is withdrawn. The absolute
  rational-differential divisor computation is retained unchanged.
- `ex-divisor-degree-over-nonalgebraically-closed-field`: the splitting is
  expressed by factorizing `t^2+1` over `C`; the equivalent tensor-product map
  is `a tensor b -> (ab, conjugate(a)b)`, with the second factor the base
  `C`. It sends base scalars diagonally and is therefore `C`-linear.
- `lem-torsion-quotient-invertible-sheaves-effective-divisor`: the rational
  section from `L -> M` gives a global isomorphism
  `O_C(D) -> L^vee tensor M`, and tensoring yields the global twist
  isomorphism compatible with the inclusion. The quotient first has the
  canonical form `Q ~= L tensor (O_C(D)/O_C)`. For the stated untwisted
  quotient, the proof chooses, for each point of the finite support, a
  trivializing neighborhood excluding the other support points, together
  with `C minus S`. Every overlap between distinct members misses the support,
  so the local isomorphisms glue. This finite-support open-cover argument
  supersedes the earlier report's Artinian-component trivialization route;
  it does not claim that arbitrary local trivializations glue.

### Current snapshots and review boundary

| Item | SHA-256 after authorized edit |
|---|---|
| def-ramification-index-curve-map | `9d0213c036c4de933b5f52d17fe6b91444735d6f4132730980233619f40dc151` |
| cex-inseparable-map-riemann-hurwitz-naive-fails | `670c3c7f4b2e3c05cd610ed5d1b6041b918cf242a2e011978c05979fbd34ca74` |
| ex-divisor-degree-over-nonalgebraically-closed-field | `fdaeec8ce8476a20bcea3671b20666cbf4c320dbd7e0823801690df857ed363d` |
| lem-torsion-quotient-invertible-sheaves-effective-divisor | `a9f61fe28e05bb19560816d7a707e3af6ee2f717a8c7b820542d740c7260cfe2` |

I reread the edited passages and checked their named direct-source interfaces
against the current source files. No automated precheck/render check, owner
receipt, acceptance gate, or shared-state integration was attempted. Root
review and integration remain pending.

### Torsion-lemma inherited-choice and local-divisor correction

Root authorized the exact scope amendment for
`lem-torsion-quotient-invertible-sheaves-effective-divisor`. Its Statement and
Given now explicitly assume the Axiom of Choice, with
`def-axiom-of-choice` in `deps` and a choice fact explaining that the actual
smooth-curve/local-DVR interface uses it. This does not restrict the field
`k` or its characteristic. The inherited premise is real: the curve
definition reaches `def-smooth-morphism-classical`, whose Statement assumes
Choice, and `thm-local-ring-smooth-curve-dvr` explicitly uses Choice through
the one-dimensional regular-local-ring DVR criterion.

The proof no longer depends on
`thm-cartier-weil-divisors-curves-agree`; that broad Cartier/Weil and Picard
identification was not needed for this claim and carried an unrelated DC
premise. Instead, the inclusion is a global regular section of
`L^vee tensor M`. On a trivializing open its coefficient is a regular
nonzero local equation, hence a nonzerodivisor on the integral curve and an
effective Cartier equation by `def-effective-cartier-divisor`. Ratios of
these equations on overlaps are units by `def-cartier-divisor`, so their
orders at each closed point are independent of the trivialization. The
actual DVR normal form and module-length inputs give order `l_p`; the finite
formal closed-point divisor notation is therefore exactly
`D = sum_p l_p[p]` by `def-divisor-smooth-proper-curve`. This identifies only
the local coefficients needed here and makes no claim of a global
Cartier/Weil-group equivalence. The rational-section theorem still supplies
the global `O_C(D) -> L^vee tensor M` isomorphism carrying the canonical
section to the inclusion's section, hence the twist isomorphism and canonical
twisted quotient. The finite-support open-cover argument still gives the
stated noncanonical untwisted quotient isomorphism.

The nonexistent `step 2.2` citation in step 3.1 is corrected to the actual
step 2.1 and the local coefficient fact. The edited lemma's current
SHA-256 is
`5c7da24d90cd1a3c0adab96a5cf3274bd2dff974633cbe80e8e1579b961dc818`.
This is an author repair awaiting root review; no carrier, receipt, gate,
plan, or shared decision was changed.

## Upstream delta-invariant repair checkpoint

Root released exact item-only math-write authority for
`def-delta-invariant-curve-singularity`, plus this report append. The item was
rewritten to supply the finite-stalk, finite-dimension, regularity-detection,
and total-sum routes without changing its algebraically closed-field scope.
Its current SHA-256 is
`30125f0ce021c4cbae00f4356c0aaa9f91cec6fcd8283ae4dd48c5c103269d10`.
This is an author repair awaiting root review; no normalization repair,
carrier, shared decision, receipt, plan, ledger, or gate was changed.

### Exact route written

- On each affine chart `U = Spec A`, the current normalization statement gives
  `nu^{-1}(U) = Spec B`, with `A subset B subset k(X)` and `B` the integral
  closure of `A` in the function field, finite over `A`. The finite morphism
  is affine; the actual affine-pushforward interface gives sections `B_f` on
  every principal open `D(f)`, with localization restrictions. Therefore the
  pushforward is quasi-coherent and of finite type. Since `X` is locally
  Noetherian, the coherent finite-type criterion makes the pushforward and
  `O_X` coherent, and their cokernel `Q` coherent. The chart map `A -> B` is
  injective, and `Q_x = (B/A)_m = B_m/A_m`.
- The stalk algebra is explicitly `B_m = S^{-1}B = B tensor_A A_m`, where
  `S = A minus m`. The general integral-closure/localization theorem identifies
  it with the integral closure of `A_m` in `k(X)`; it is finite and semilocal,
  possibly with several maximal ideals over `m`. Semilocality is shown directly
  from the finite-dimensional fibre algebra `B_m/mB_m`: any finite list of
  distinct maximal ideals gives a Chinese-remainder surjection onto a product
  of nonzero residue fields, bounding the list length by the fibre dimension.
  Integral-extension contraction identifies these maximal ideals as lying
  over `m`. The route retains every normalization branch and selects none.
- The generic quotient is zero. For a closed point, the local ring is a
  one-dimensional Noetherian local domain; the generic localization of `Q_x`
  is zero, so its support is contained in the maximal ideal. A regular closed
  point has a one-dimensional regular local ring, hence a DVR and an integrally
  closed ring; localization of integral closure then makes `Q_x=0`.
- For finite `M=Q_x`, the support-annihilator identity and radical-as-prime-
  intersection give `m^N M=0`: choose finite generators `u_i` of `m`, choose
  exponents `e_i` with `u_i^{e_i}M=0`, and take
  `N = 1 + sum_i(e_i - 1)`. The finite filtration by `m^j M` has finite
  dimensional residue-field layers. Closed-point residue fields equal `k`
  because they are finitely generated field quotients of finite-type
  `k`-algebras and `k` is algebraically closed. Thus each `delta_x` is a finite
  nonnegative integer.
- The same local closure comparison shows `delta_x=0` iff the one-dimensional
  Noetherian local domain is integrally closed, iff it is a DVR, iff it is
  regular. Since algebraically closed `k` is perfect, the regular-locus-open
  theorem makes `X_sing` closed; the generic point is regular, so this is a
  proper closed subset. The curve closed-subset lemma makes it finite and
  supported on closed points, proving the total sum is finite.

The definition now states its actual inherited Axiom-of-Choice premise. The
finite affine, local-coherence, one-dimensional regular-local/DVR,
regular-locus, support-radical and curve-topology interfaces used here carry
that premise. The proof adds no separate dependent-choice assumption and keeps
all algebraically closed fields and characteristics. It no longer cites
`thm-proper-pushforward-coherent`,
`thm-local-ring-smooth-curve-dvr`, or `thm-regular-local-rings-are-normal`;
the finite affine module route and one-dimensional regular-local/DVR route
replace those unsupported applications on singular `X`.

### Supplier boundary and paused Euler audit

The item still uses the current statement interface of
`thm-normalization-glues-integral-finite-type-curves` for finite affine charts
and finite integral closures. That supplier remains a draft with independent
proof concerns recorded in Dir's curve-foundations audit. I did not edit,
re-review, or certify its proof; this checkpoint makes no claim that the
supplier or the delta item has been accepted.

At the time of this delta checkpoint, the requested B7 core audit of
`thm-euler-characteristic-degree-shift-curve`,
`lem-h1-stabilizes-downward-point-removal`,
`lem-large-positive-divisors-nonspecial`,
`thm-riemann-roch-euler-characteristic-curve`, and
`thm-riemann-roch-as-l-minus-index` was still paused. The subsequent audit and
its current hashes and findings are recorded in the section below.

## B7 Euler/Riemann–Roch five-core audit

This is a report-only mathematical audit of the five live bodies listed above,
read against their actual direct suppliers on 2026-10-01. The target hashes
below identify the audited snapshots. At these snapshots, I found no false
claim or noncircularity defect in the five core arguments. The proof routes are
mathematically sound conditional on the sheaf/divisor and cohomology supplier
interfaces they invoke. This is not an item acceptance or a statement that
the run's authoring/review decisions have closed.

| Item | Audited SHA-256 | Finding |
|---|---|---|
| `thm-euler-characteristic-degree-shift-curve` | `33737b9450d798ad14d52f80cd102227a79ca20cb381bd57135fb02386c0facf` | Sound degree shift and equivalent dimension identity, conditional on its divisor/sheaf dictionary. |
| `lem-h1-stabilizes-downward-point-removal` | `74033858ce7ab55fd081138be30e07a4155cb1a06f1b2ac8e2e67bfb1084bcd4` | Sound connecting-map dimension drop, effective antitonicity, and eventual stabilization. |
| `lem-large-positive-divisors-nonspecial` | `2935d80e174ef24750ce74f26d8c672392ab9cf664bce5fb319b8b4322ad4ea8` | Sound fixed-direction consequence of the vanishing theorem; it does not assert a degree-only threshold. |
| `thm-riemann-roch-euler-characteristic-curve` | `5e56cf44773c01316741cedb8c72d256f3c79ca84810c1839bbbbbd202a3d75a` | Sound substitution of `chi(O_C)=1-g` into the degree shift. |
| `thm-riemann-roch-as-l-minus-index` | `4046cb7d77b015133a34428113c9a1593ea0a05ac6ece714ac06733505b1dec6` | Sound substitution of `l=h^0`, `i=h^1`, with the stated nonnegativity, equality case, and zero-divisor reading. |

### Actual proof routes and suppliers

- The one-point route is `lem-add-one-point-exact-sequence-line-bundle`
  (`e94c98da57b62c03f3880657833a4faea3db8f4e1c1f3055e09ab0e39a4cef5f`) →
  `lem-add-one-point-euler-characteristic`
  (`0d5fbaa6872d6b70adda9a06f315c3eec412544a07dd03b7b446b77c80ca9227`) →
  `lem-divisor-decomposition-positive-negative-points`
  (`83bf829ef762581c5f1795a17d4b6c9d16f0309f82559c8c4679b15a34ee41e2`).
  The exact-sequence proof uses the smooth-curve DVR at a closed point: if
  `a` is the coefficient of `D` there and `t` a uniformizer, the stalks are
  `t^(-a) O_{C,p} subset t^(-a-1) O_{C,p}` and the quotient is
  `kappa(p)`. Its local evaluation map has that kernel and is surjective on
  the point stalk; the skyscraper has no higher cohomology. The Euler-shift
  proof applies the published coherent short-exact Euler additivity result
  (`lem-euler-characteristic-additive-short-exact`,
  `6eafa220a15636de646ef0c91266d4a7eb1bb365ad96cec5a664d0d9b8b4d765`).
  For an effective `E`, the exact-sequence source builds the finite-support
  quotient by adding one closed point at a time; its successive residue-field
  dimensions sum to `deg_k(E)`. The signed divisor proof then walks a finite
  chain from `0` to `D`, reversing the one-point identity for subtractions.
  This is not circular: the chain depends on the point-shift result, not on
  the Euler-characteristic-degree-shift theorem itself.

- `lem-h1-stabilizes-downward-point-removal` uses the same one-point exact
  sequence and the long exact cohomology sequence. The `H^1` map is surjective
  because `H^1` of the skyscraper vanishes, and its kernel is the image of the
  connecting map from `kappa(p)`. Rank-nullity gives the exact drop
  `dim_k im(partial) <= [kappa(p):k]`. Iterating over the finite support of an
  effective divisor proves antitonicity. The resulting non-increasing
  sequence of nonnegative integers can have only finitely many strict drops,
  proving eventual constancy. The proof does not need a degree bound for the
  stabilization index.

- `thm-h1-line-bundle-vanishes-sufficiently-high-degree`
  (`3afb0a218feaceb1de7fe41642963b19a580a179aa9ea2e3f8e08b02ec800e0b`)
  applies published Serre vanishing (`thm-serre-vanishing`,
  `1e49170e0396aebf9f0520fb08e368d321578bf78a7678c64f811df762a9d73c`)
  after the finite-pullback ampleness result
  (`lem-ample-pullback-finite-morphism`,
  `34438a8f48b83b59afe32b321da37bdb134132c9549571169261a60c0613a2eb`) and
  the ample-powers embedding result
  (`thm-ample-powers-very-ample-proper-base`,
  `daf7d01576bb8642caa85b797fc47ea2495159cabc91bc250ae269502e2e768d`).
  It obtains vanishing at a fixed threshold and uses the preceding `h^1`
  antitonicity result to include every extra effective summand, uniformly in
  that summand. Its direct input is a fixed finite morphism and an effective
  `A` with `O_C(A) ~= phi^* O(1)`; the finite-map corollary
  (`cor-smooth-proper-curve-finite-map-projective-line`,
  `5cb298402f08bcf030b285ac4765bdd9de43864ac938e1521fd99fe2310915e7`)
  supplies the stated example from a pole divisor. No argument here turns
  this into a threshold depending only on `deg(D)`.

- The Euler-form Riemann–Roch proof invokes the degree-shift theorem and the
  genus definition. The actual genus definition records
  `H^0(C,O_C)=k` through `thm-h0-structure-sheaf-proper-curve`
  (`3fa2bafae379acf7d5891b644450499fa95d1c0d0ead60fd8a2187ef7a5162e0`), so
  `chi(O_C)=1-g` has the required base term. Finiteness and vanishing in
  degrees `q>=2` are supplied by
  `lem-riemann-roch-space-finite-dimensional`
  (`e548fe89e376aa656a59783525a622e0eee0132b271b30a2f1babda7ce710149`);
  the underlying proper coherent cohomology finiteness corollary is published
  (`cor-projective-cohomology-finite-dimensional-field`,
  `7a6d033fcfc3de4291e5feca81803277eca6db5c54bebc1f52b8b0d9063bd9f5`).
  The final `l-i` theorem only substitutes the definitions and the preceding
  Euler-form theorem. It uses no duality or `2g-2` criterion.

### Exact remaining supplier/interface issues

1. The repeated text saying the batch-5/6 divisor suppliers are “not authored
   on disk” is stale: the actual files are present. In particular,
   `def-invertible-sheaf-of-cartier-divisor`
   (`4fe9bd462ddd48bbe17709b99eb72e178cc6c88caec3d2449406d743c31c30eb`)
   gives the local `f_i^(-1) O` construction and `O(0)=O`;
   `thm-line-bundle-rational-section-cartier-divisor`
   (`a769479d45dc430c62eda285791b053e5f2feaab77fa1adb3ad4d33f3db192b5`)
   gives the rational-section/sheaf dictionary; and
   `thm-cartier-weil-divisors-curves-agree`
   (`7fcaa43bc6654e6a4e80a6b7b2384e4310078850ec0265ada2c5afcc14a84b38`)
   states the curve's Weil divisors are Cartier. The corresponding local
   invertibility item and divisor–tensor item are also present at
   `065e5405cd11f367ea08f1f057b9b941feb952ad4aadc4b1b3ea53ce94a18600` and
   `c7ab316a7b29b8cf44a838e3444be1d5cd87a86ed265ada0017f16992e88a609`.
   Presence and proof availability do not themselves close their draft
   decisions; the “not authored” wording should not be treated as a current
   mathematical blocker.

2. The one-point exact-sequence supplier has a real declared-interface gap:
   its proof/Facts invoke the Cartier–Weil divisor-to-sheaf route, but its
   frontmatter `deps` do not include
   `def-invertible-sheaf-of-cartier-divisor` or
   `thm-cartier-weil-divisors-curves-agree`. The latter's actual contract
   inherits both AC and DC through its cycle-map suppliers, while the
   one-point item states AC only. AC does imply DC by the library theorem
   `thm-choice-implies-dependent-implies-countable-choice`, so this is an
   undeclared proof/dependency route rather than a false statement under the
   stated AC premise; make that implication explicit in the dependency path,
   or replace the broad Cartier–Weil invocation with the local DVR construction
   actually needed. The one-point Euler shift and all five targets inherit
   this open interface until it is reconciled.

3. `lem-riemann-roch-space-finite-dimensional` likewise has live prose
   obligations to the Cartier-sheaf and `L(D)` dictionaries, whose actual
   files now exist, but the current dependency list does not carry all those
   named suppliers. The five-core results use this lemma for coherence and
   finite-dimensional cohomology; this dependency-contract cleanup is
   separate from the validity of the finite-dimensionality argument once
   those interfaces are available.

4. One small proof-boundary repair remains in
   `thm-h1-line-bundle-vanishes-sufficiently-high-degree`: Serre vanishing
   provides an integer threshold `m_0`, while the divisor–tensor fact [F6] is
   stated for nonnegative powers and step 4.1 applies it over `m>=m_0`.
   Replace the threshold by `max(m_0,0)` (vanishing persists for all larger
   exponents) before translating to divisors. This does not alter the
   fixed-direction conclusion or the uniformity in `E`, but is needed for the
   written implication to use the cited interface exactly.

The supplier hashes above are the read snapshots for this audit; I did not
edit the five target items or any supplier, and did not run item checks,
certifications, receipts, or gates. Any later supplier edit requires a fresh
comparison before root integration. Root retains all coverage, scope,
acceptance, and gate decisions.

## Authorized Euler supplier-interface repairs

Root released item-only math-write authority for the exact-sequence lemma, the
Riemann–Roch finite-dimensionality lemma, and the fixed-direction H¹ vanishing
theorem, together with this report append. I updated only those three item
files and this report. I did not change any page, other item, shared carrier,
scope decision, receipt, plan, ledger, or gate. These are author repairs; root
review and integration remain pending.

- `lem-add-one-point-exact-sequence-line-bundle` now declares and explains the
  actual Weil-to-Cartier, Cartier-sheaf construction/invertibility, and
  rational-section interfaces, with the corresponding direct dependencies.
  The smooth-curve supplier's Dependent Choice premise is explicitly supplied
  from the stated Axiom of Choice by
  `thm-choice-implies-dependent-implies-countable-choice`. Its local order
  description applies only to nonempty opens; the empty-open section group is
  explicitly zero. The exact sequence, stalk quotient, and effective-divisor
  iteration remain as stated.
- `lem-riemann-roch-space-finite-dimensional` now records the same actual
  divisor-to-Cartier-to-sheaf-to-global-section route in its contract, Facts,
  dependencies, and proof, with the AC-to-DC implication explicit. The
  coherence argument remains the locally free finite-type route followed by
  the proper coherent-cohomology finiteness supplier; the Weil-to-Cartier
  identification precedes construction and invertibility of the divisor
  sheaf.
- `thm-h1-line-bundle-vanishes-sufficiently-high-degree` replaces the stale
  “not authored” supplier text with the current divisor/tensor and finite-map
  interfaces and adds their actual direct dependencies. It obtains coherence
  of `O_C(D0)` from the finite-dimensionality lemma. The power `L^d` is made
  ample using the closed H-very ample witness from the ample-powers theorem
  and the affine-base `lem-very-ample-implies-ample` route. Serre's integer
  threshold `m1` is replaced by `m0 = max(m1, 0)` before applying the
  nonnegative divisor/tensor dictionary; consequently `n0 = d m0` is
  nonnegative. The original fixed-direction conclusion and its uniformity in
  every effective `E` are preserved.

Targeted `precheck.mts` passed all three edited proof-bearing items; targeted
`rendercheck.mjs` passed all three items, including YAML and KaTeX parsing.
These are local format/render checks only, not proof acceptance, a receipt, or
a gate result.

| Item | Current SHA-256 |
|---|---|
| `lem-add-one-point-exact-sequence-line-bundle` | `45abf7121b4a3b72ab08c16a18a65205307d27fdc32846dfef07fa01a745097a` |
| `lem-riemann-roch-space-finite-dimensional` | `80bbb38fae2f137681b9abdb54b2b9f844c72b16857a9862e8f95f5525d823d3` |
| `thm-h1-line-bundle-vanishes-sufficiently-high-degree` | `367ba2e233213e184102414de26a6aa9598e43dc0a5872cf9af2e8a353549981` |

The earlier five-core Euler/Riemann–Roch audit remains a report-only finding
about those five target snapshots. This repair changes three
proof/dependency supplier snapshots used in its route:
`lem-add-one-point-exact-sequence-line-bundle`,
`lem-riemann-roch-space-finite-dimensional`, and
`thm-h1-line-bundle-vanishes-sufficiently-high-degree`. The exact current
hashes above supersede the older supplier hashes quoted in that audit. No
statement change to the five audited targets was made, and no refreshed
receipt or acceptance is asserted.

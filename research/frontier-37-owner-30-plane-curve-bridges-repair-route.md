# Plane-curve bridge repair route

Audit scope: `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic`,
`cor-genus-degree-smooth-plane-curve`, `ex-plane-cubic-canonical-trivial`,
`ex-plane-quartic-canonical-hyperplane`, and
`cex-riemann-inequality-not-equality-special-divisor`. This file began as a
route-only audit. A later authorized implementation update is recorded below.
The two example items `ex-plane-cubic-canonical-trivial` and
`ex-plane-quartic-canonical-hyperplane`, and all carriers, are outside that
implementation update.

## Follow-up: explicit AC and missing local/properness interfaces

This section supersedes the earlier item hashes above and records the only
additional item edits. The counterexample's opening and Given now explicitly
assume the inherited Axiom of Choice, with the same arbitrary field and
genus-at-least-one range. The cubic and genus Statement AC-source wording now
also names the smooth-curve DVR/divisor and projective-properness inputs used
in the proof; their mathematical conclusions and field/characteristic scopes
are unchanged.

For the local intersection multiplicities, the actual published interfaces
are `thm-dvr-element-normal-form` and `thm-dvr-ideal-and-module-length`.
The former states that every nonzero element of a DVR's fraction field is
`u*pi^n` for a unit `u`; its direct deps are
`def-uniformising-parameter` and `def-discrete-valuation-ring`. The latter
states `length_V(V/(pi^n))=n`, and more generally
`length_V(V/(x))=n` when `x=u*pi^n`; its direct deps are
`thm-dvr-element-normal-form`, `thm-ideals-in-a-dvr`,
`def-composition-series-and-length-of-a-module`, and
`cor-length-is-additive-in-short-exact-sequences`. Both are published. The
already-declared `thm-local-ring-smooth-curve-dvr` supplies the local DVR, but
remains a draft. The cubic Fact [F4] and genus Fact [F5] now state the normal
form and quotient-length conclusion explicitly; their intersection-length
steps cite those facts.

For properness of a closed plane subscheme, the attached published interfaces
are `thm-projective-space-proper-over-base` (AC-qualified properness of
`P^n_S -> S`), `lem-closed-immersion-proper` (AC-qualified properness of a
closed immersion), and `lem-proper-stable-composition` (AC-qualified
composition). The genus Fact [F10] and counterexample Fact [F12] state this
composition route, and their properness proof steps cite it. The cex item now
has the exact direct dependencies `lem-closed-immersion-proper`,
`lem-proper-stable-composition`, and `thm-projective-space-proper-over-base`;
the genus item has those three dependencies as well. Both items already
assume the library's inherited AC convention.

The exact new direct dependency additions are:

* cubic item: `thm-dvr-element-normal-form`,
  `thm-dvr-ideal-and-module-length`;
* genus item: `lem-closed-immersion-proper`,
  `lem-proper-stable-composition`, `thm-dvr-element-normal-form`,
  `thm-dvr-ideal-and-module-length`,
  `thm-projective-space-proper-over-base`;
* counterexample item: `lem-closed-immersion-proper`,
  `lem-proper-stable-composition`, `thm-projective-space-proper-over-base`.

Updated SHA256 hashes:

* cubic item: `5c6e27c27d3558fcb62fb6a01b022a7298789328eef6a498800a6ecfd2f59f66`;
* genus item: `f5b538083c173567007dafe9e9be4c9ef96ee7f94250f0ce27d404334774cca1`;
* counterexample item: `6598ffd9eeab4e6ff13f362a984438eda685760839ee8565fdfe4824fd867fc3`.

Focused precheck and rendercheck were rerun after these item changes; all three
items pass both. The new length and projective properness suppliers are
published, while the smooth-curve-to-DVR supplier and previously named
Riemann--Roch, genus, divisor, and adjunction suppliers remain drafts. This
follow-up changes no carriers, receipts, gates, shared plans, or published
items.

## Findings and repair routes

### Genus-one degree-three embedding

The cohomology and very-ampleness part of the current proof is supported by
`cor-rr-exact-high-degree-formula`,
`cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`,
`thm-degree-two-g-plus-one-line-bundle-very-ample`, and
`thm-base-point-free-linear-system-morphism`: for genus one and `deg L = 3`,
they give `h^0(L)=3`, very ampleness, the closed immersion into `P^2_k`, and
`i^*O(1) ~= L`. The unsupported part is Facts [F6] and steps 4.1–5.1: the
listed divisor/morphism-degree definitions do not prove that the image is a
hypersurface or identify its degree by a general-line intersection.

Use this scheme-theoretic route instead, valid over the statement's arbitrary
field `k`:

1. Let `Y` be the closed image. The closed immersion identifies `Y` with the
   smooth geometrically integral curve `C`. The homogeneous ideal of this
   integral projective subscheme is saturated and prime: use
   `thm-closed-subschemes-projective-space-homogeneous-ideals` for the
   saturated homogeneous presentation, and note that its quotient injects
   into the section ring `bigoplus_{n>=0} H^0(Y,O_Y(n))`, a domain because
   `Y` is integral: a nonzero section of an invertible sheaf is nonzero at
   the generic point, so products of nonzero sections remain nonzero. This
   restriction kernel is saturated as well: because this is the complete
   linear system, each coordinate section is a nonzero basis section, and
   multiplication by any one of them is injective in that section ring. Thus
   its homogeneous ideal `I(Y)` is prime and saturated. For the height
   calculation over arbitrary `k`, choose a coordinate `x_i` not in `I(Y)`
   and let `A=(S_{x_i})_0`, where `S=k[x_0,x_1,x_2]/I(Y)`, be the nonempty
   affine chart of `Y`. It is a finite-type domain of dimension one. Since
   the quotient is standard graded, inverting `x_i` gives
   `(k[x]/I(Y))_{x_i} ~= A[x_i,x_i^{-1}]`: factor each homogeneous fraction
   by its power of `x_i`; the grading makes the displayed map injective.
   Hence its fraction field, and therefore that of `k[x]/I(Y)`, has
   transcendence degree two over `k`. Apply the published
   `thm-dimension-formula-for-affine-domains` to the prime `I(Y)` in
   `k[x_0,x_1,x_2]`; it gives `ht I(Y)+2=3`, so `I(Y)` has height one. By
   `lem-finite-variable-polynomial-rings-over-fields-are-ufds`, this
   height-one prime is principal. Since it is homogeneous, it has a
   homogeneous generator `F`; the graded ideal condition forces a generator
   of a principal homogeneous ideal to be homogeneous. Hence `Y=V_+(F)` as a
   scheme. The generator is irreducible, and therefore square-free.
2. Choose a linear form `ell` whose restriction to `Y` is nonzero. Such a form
   exists because `Y` is a proper curve in `P^2`; this works over finite as
   well as infinite fields. Under `i`, its restriction is a nonzero section
   of `i^*O(1) ~= L`, so its zero divisor has degree `deg L=3`. The scheme
   `Y cap V_+(ell)` is this zero scheme. The irreducible `F` and `ell` have
   no common nonconstant factor, so the published
   `cor-projective-plane-bezout-length-form` applies over `k`: the sum of
   local lengths weighted by residue degrees is `deg(F)`. Those local lengths
   are precisely the vanishing multiplicities in the zero divisor. Thus
   `deg(F)=3`. This avoids treating a possibly non-rational intersection as
   three `k`-points and avoids an unsupported degree definition. The published
   `def-degree-projective-hypersurface` then gives `deg(Y)=deg(F)=3`.
3. For the “rational point (equivalently, a degree-one divisor)” parenthesis,
   do not silently require the divisor to be effective. If `D` is any divisor
   of degree one, the high-degree RR supplier gives
   `h^0(O_C(D))=1` because `1>2g-2=0`. A nonzero section yields an effective
   divisor `E~D` of degree one. Since
   `deg_k(E)=sum_x n_x [kappa(x):k]=1`, `E` consists of one `k`-rational
   point with coefficient one. Conversely, a rational point is an effective
   degree-one divisor. Therefore the parenthetical claim as written is valid.
4. Taking `L=O_C(3p_0)` gives degree three, so the same argument proves the
   final “every genus-one curve with a rational point” clause. The argument
   uses the AC assumption already inherited from the relevant linear-system
   and Bezout suppliers; it introduces no point, basis, or line-intersection
   choices beyond the finite existence choices shown above.

This repairs exactly the image/hypersurface/degree bridge while preserving the
field and divisor claims. Drop current [F6]'s unsupported general-line degree
assertion and replace its use with the homogeneous-prime/UFD and weighted
Bezout argument. No external source lookup is needed: the cited UFD,
projective-scheme, hypersurface-degree, and Bezout interfaces are published
library items, including the arbitrary-field affine-domain dimension formula.

### Smooth plane curve and the genus formula

The Statement of `cor-genus-degree-smooth-plane-curve` does not assume that
`F` is square-free or that `C` is geometrically integral. Its current Facts
silently add square-freeness, and step 1.1 says it is square-free “by
hypothesis”; that is not licensed by the Statement. Derive both properties
from smoothness instead:

1. Base-change to an algebraic closure `kbar`. Smoothness survives field
   extension (`lem-smooth-fibres-smooth`), and pure dimension remains one.
2. If `F` has a repeated irreducible factor over `kbar`, take a projective
   point on that factor; its existence follows from the positive-degree
   hypersurface dimension-drop result. On an affine chart through that point,
   the local equation lies in the square of the maximal ideal. Its Jacobian
   row is zero, whereas a plane-curve local ring has dimension one. The
   rational-point form of `thm-jacobian-criterion-affine-variety` (which
   allows the actual, possibly nonradical, equation ideal) then shows the
   local ring is not regular, contrary to smoothness over the perfect field
   `kbar`. Thus `F` is square-free over `kbar`.
3. If this square-free `F` is reducible, write `F=GH` with `G,H` nonconstant
   and coprime. The published arbitrary-field
   `cor-projective-plane-bezout-length-form`, now over `kbar`, gives a
   nonempty intersection `V_+(G,H)`. At a point of it the dehomogenized
   equation is in the square of the maximal ideal, again giving a zero
   Jacobian row and a nonregular one-dimensional local ring. This contradicts
   smoothness. So `F` is irreducible and square-free over `kbar`; `C` is
   geometrically integral. Properness follows because it is closed in
   projective space. This supplies the exact hypotheses of
   `thm-adjunction-smooth-plane-curve` and
   `cor-canonical-degree-two-g-minus-two`.

For the degree calculation, choose a line not containing `C`. Its section of
`O_C(1)` is nonzero; its divisor is the scheme intersection with the line.
Bezout with `F` and the line gives weighted total length `d`, hence
`deg O_C(1)=d`. Tensor powers and additivity give
`deg O_C(m)=md` for every integer `m`; for negative `m`, use duals of line
bundles (or the inverse rational section), not a global section of a negative
twist. Adjunction gives `omega_C ~= O_C(d-3)`, so
`deg omega_C=d(d-3)`. The canonical-degree formula gives
`2g-2=d(d-3)`, hence `g=(d-1)(d-2)/2`. This proves the cubic and quartic
specializations in all characteristics. It replaces the current unsupported
“F is square-free by hypothesis” and general-line-count bridges without
strengthening the Statement.

The two key geometry suppliers are already suitable: the adjunction item is a
draft whose stated input is smooth pure-dimension-one `V_+(F)`, and the
published Bezout corollary gives weighted length over any field and unweighted
length over an algebraically closed field. The derivation above supplies the
missing geometric-integrality hypothesis rather than importing it as an
assumption.

### Cubic and quartic canonical examples

`ex-plane-cubic-canonical-trivial` is supported once the smooth-plane-curve
bridge above is in place. For every smooth plane cubic over any field,
adjunction gives `omega_C ~= O_C(0) ~= O_C` and the repaired genus formula gives
`g=1`; no rational point is needed for this forward claim. The degree-zero
section criterion also supplies the divisor-class phrasing. The converse
retains its stated rational-point hypothesis and follows from the preceding
degree-three embedding route; do not infer that every smooth plane cubic has
a rational point.

`ex-plane-quartic-canonical-hyperplane` also needs no rational point and is
valid over every field for a smooth plane quartic. With geometric integrality
from the smooth-plane-curve route, adjunction gives
`omega_C ~= O_C(1)` and genus three. The exact sequence
`0 -> O_P2(-3) -> O_P2(1) -> O_C(1) -> 0`, with
`H^0(P2,O(-3))=H^1(P2,O(-3))=0` from
`thm-cohomology-projective-space-twisting-sheaves`, identifies the full space
of canonical sections with the restrictions of linear forms. Therefore the
canonical morphism from that complete linear system is exactly the given
closed immersion into `P^2`. This is the needed scheme-level bridge from the
canonical bundle calculation to the canonical plane model. Any additional
canonical-map classification wording is outside this route report's assigned
scope.

### Quartic witness in the Riemann-inequality counterexample

The general `D=0` computation in `cex-riemann-inequality-not-equality-special-divisor`
is independent of the plane-quartic clause and is valid as written for every
smooth proper geometrically integral curve of genus at least one. The current
concrete clause correctly limits itself to algebraically closed
characteristic zero, but its generic-existence supplier only proves a
nonempty smooth pure-dimension-one member, not integrality. Replace that
incomplete bridge with the explicit Fermat quartic
`F=x_0^4+x_1^4+x_2^4` over the same advertised field `k`:

* On a projective chart `x_i != 0`, a point of `F=0` must have some other
  coordinate `x_j != 0`; after setting `x_i=1`, the derivative in `x_j` is
  `4x_j^3 != 0`. The relative Jacobian criterion
  `thm-jacobian-criterion-smooth-morphism` therefore gives smoothness. This
  uses only `char(k)=0` and does not assert existence in unsupported
  characteristics.
* Smoothness implies square-freeness by the repeated-factor argument above.
  If the Fermat quartic were reducible, factor it as coprime positive-degree
  forms `G H`; Bezout over the algebraically closed `k` gives a common
  projective point. There `dF=H dG+G dH=0`, so the local Jacobian row
  vanishes and the curve is singular, contradiction. Hence the Fermat quartic
  is integral (indeed geometrically integral over this algebraically closed
  field).
* The repaired genus corollary gives genus three. Alternatively, the existing
  draft `thm-plane-curve-arithmetic-genus` computes arithmetic genus three;
  its displayed cohomology sequence gives `H^0=k`, `H^1` of dimension three,
  and no higher cohomology, so for this smooth curve arithmetic and geometric
  genus agree.

The quartic witness then has `l(0)=1`, `i(0)=g=3`, and
`1 > 0+1-3=-2`, exactly the existing promised example. Keep the general
positive-genus proof and the characteristic-zero witness; no stronger
characteristic claim is needed. The sibling `ex-plane-quartic-genus-three-smooth`
has the same unsupported smooth-implies-integral assertion, but it is outside
this exact write scope; the same two-step Jacobian/Bezout proof is its route.

## Classical/scheme interface and supplier boundary

These items' mathematical statements use `V_+(F)` and `P^2_k` as schemes, and
the cubic statement permits arbitrary `k`; keep the principal proof scheme
theoretic. `thm-closed-subschemes-projective-space-homogeneous-ideals` gives
the actual scheme `V_+(I)=Proj(k[x_0,x_1,x_2]/I)` and its saturated homogeneous
ideal, while `def-projective-algebraic-set` records only the classical point
set over an algebraically closed field. The published
`thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`
is the real bridge when a classical variety is intended: over algebraically
closed `k`, it identifies irreducible classical varieties with integral
finite-type schemes satisfying the affine-overlap separation condition, and
its proof checks separation through the affine overlaps. A projective closed
curve is separated, so this applies after the geometric-integrality argument.
It is not an arbitrary-field bridge: the classical point-set definition in
this library assumes algebraically closed `k`, and the cubic proof should not
rely on it outside that setting.

For smoothness terminology, the published
`cor-smooth-variety-classical-scheme-conventions-agree` states equivalence of
the older classical local-standard-smooth and scheme smoothness conventions
for finite-type schemes over every field (under its declared AC); over a
perfect field it also equates these with regular local rings. Thus the
geometric argument over `kbar` has an actual scheme/classical regularity
interface, and the Fermat local derivative calculation has the stronger
scheme Jacobian criterion available. The projective Bezout item is explicitly
scheme-theoretic: it counts local lengths with residue-degree weights, which
is the correct bridge back to divisor degree over non-algebraically-closed
`k`.

Supplier status matters: the homogeneous-ideal theorem, polynomial UFD/height-one
lemma, hypersurface degree definition, Bezout length corollary, cohomology of
projective space, and the classical/scheme interfaces cited above are
published. `thm-adjunction-smooth-plane-curve`,
`cor-genus-degree-smooth-plane-curve`, and
`thm-plane-curve-arithmetic-genus` are drafts in this run. This route closes
their stated geometry gaps, without claiming full proof review or
certification or refreshing unchanged supplier evidence. The initial
route-only audit made no writes; the exact three item writes are recorded in
the authorized implementation update below, which changed no carrier, receipt,
or gate.

## Authorized implementation update

The three released repairs are now present in their item files. Their
mathematical scope and promised conclusions are preserved; only the cubic
Statement's AC supplier wording was aligned with the cited path. The cubic
proof handles the signed-divisor case without strengthening its assumptions.

### `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic`

The proof derives the scheme-theoretic image degree instead of relying on a
general-line or unsupported degree assertion. It presents the image by its
saturated homogeneous ideal, proves the homogeneous coordinate ring is a
domain, and uses a nonempty standard affine chart and standard-graded
localization to show the prime ideal has height one. The polynomial UFD makes
it principal; homogeneity gives an irreducible homogeneous equation. A linear
section has zero scheme equal to its scheme-theoretic line intersection. The
local DVR lengths give its divisor degree `deg L = 3`, while weighted Bezout
gives the same sum as `deg F`; hence the image is a cubic. Riemann--Roch on an
arbitrary signed degree-one divisor also produces an effective degree-one
divisor and therefore a rational point.

### `cor-genus-degree-smooth-plane-curve`

The Given no longer assumes square-freeness. After base change to `kbar`, the
proof uses the actual dehomogenized equation at closed chart points. A repeated
irreducible factor, or two coprime positive-degree factors, forces the local
equation into the square of the maximal ideal at a point supplied by weighted
Bezout. The affine Jacobian criterion then contradicts regularity of the
smooth one-dimensional local ring. This proves geometric integrality. A
second weighted Bezout computation identifies `deg O_C(1)=d`. Every integer
twist is handled by tensor powers or dual powers; negative twists use rational
sections rather than an asserted global section. Adjunction and the canonical
degree formula give `g=(d-1)(d-2)/2` over the original arbitrary field and in
every characteristic.

### `cex-riemann-inequality-not-equality-special-divisor`

The general Riemann inequality argument remains intact. The concrete witness
is the Fermat quartic over the already advertised algebraically closed
characteristic-zero field. On each normalized projective chart, the opens
`D(u)` and `D(v)` cover the hypersurface and the corresponding partial
derivative is a unit, proving scheme smoothness. Minimal-prime, principal-ideal,
and affine-dimension arguments establish the chart and projective scheme
dimensions. Repeated factors or a reducible equation would force a zero
Jacobian row at a Bezout point, contradicting smoothness; the UFD then gives
integrality. The repaired genus formula supplies genus three, so the existing

The final direct dependency arrays and item hashes are:

* `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` — SHA256
  `f0a1bb9a05465398886a6415bd57c193e033f88a25ac97da25950b0a3ca258ab`.
  Deps: `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`,
  `cor-projective-plane-bezout-length-form`,
  `cor-rr-exact-high-degree-formula`, `def-algebraic-curve-over-field`,
  `def-axiom-of-choice`, `def-degree-divisor-proper-curve`,
  `def-degree-projective-hypersurface`, `def-divisor-smooth-proper-curve`,
  `def-little-l-divisor`, `def-rational-section-line-bundle`,
  `def-very-ample-invertible-sheaf-relative`,
  `lem-finite-variable-polynomial-rings-over-fields-are-ufds`,
  `thm-affine-domain-dimension-transcendence-degree`,
  `thm-base-point-free-linear-system-morphism`,
  `thm-cartier-weil-divisors-curves-agree`,
  `thm-closed-subschemes-projective-space-homogeneous-ideals`,
  `thm-degree-two-g-plus-one-line-bundle-very-ample`,
  `thm-dimension-formula-for-affine-domains`,
  `thm-line-bundle-rational-section-cartier-divisor`,
  `thm-local-ring-smooth-curve-dvr`,
  `thm-principal-divisor-degree-zero-proper-curve`,
  `thm-twisting-sheaf-invertible-standard-graded`.
* `cor-genus-degree-smooth-plane-curve` — SHA256
  `5e8c7e4081973742a2e5ac0e1348ded54b31982a2709ac42a2d9ff9b909d3154`.
  Deps: `cor-canonical-degree-two-g-minus-two`,
  `cor-projective-plane-bezout-length-form`,
  `cor-smooth-variety-classical-scheme-conventions-agree`,
  `def-axiom-of-choice`, `def-degree-divisor-proper-curve`,
  `def-divisor-smooth-proper-curve`, `def-genus-euler-characteristic-curve`,
  `def-rational-section-line-bundle`, `def-twisting-sheaf-proj`,
  `lem-chain-dimension-open-cover`,
  `lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct`,
  `lem-finite-variable-polynomial-rings-over-fields-are-ufds`,
  `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`,
  `lem-projective-hypersurface-affine-pieces`, `lem-smooth-fibres-smooth`,
  `thm-affine-domain-dimension-transcendence-degree`,
  `thm-cartier-weil-divisors-curves-agree`,
  `thm-dimension-formula-for-affine-domains`,
  `thm-jacobian-criterion-affine-variety`,
  `thm-krull-principal-ideal-theorem`,
  `thm-line-bundle-rational-section-cartier-divisor`,
  `thm-local-ring-smooth-curve-dvr`,
  `thm-principal-divisor-degree-zero-proper-curve`,
  `thm-twisting-sheaf-invertible-standard-graded`,
  `thm-adjunction-smooth-plane-curve`.
* `cex-riemann-inequality-not-equality-special-divisor` — SHA256
  `13c7b63ee9efc7e6b5781d87fca3da211ecfbb5c1d650c7ea77687f928a140b9`.
  Deps: `cor-genus-degree-smooth-plane-curve`,
  `cor-projective-plane-bezout-length-form`,
  `cor-smooth-variety-classical-scheme-conventions-agree`,
  `def-algebraic-curve-over-field`, `def-axiom-of-choice`,
  `def-degree-divisor-proper-curve`, `def-genus-euler-characteristic-curve`,
  `def-index-speciality-divisor`, `def-little-l-divisor`,
  `def-nonspecial-divisor`,
  `lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct`,
  `lem-finite-variable-polynomial-rings-over-fields-are-ufds`,
  `lem-chain-dimension-open-cover`,
  `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`,
  `lem-projective-hypersurface-affine-pieces`,
  `thm-affine-domain-dimension-transcendence-degree`,
  `thm-dimension-formula-for-affine-domains`,
  `thm-h0-structure-sheaf-proper-curve`,
  `thm-jacobian-criterion-affine-variety`,
  `thm-jacobian-criterion-smooth-morphism`,
  `thm-krull-principal-ideal-theorem`,
  `thm-riemann-roch-as-l-minus-index`.

Scoped verification after the item bodies and frontmatter stabilized:

* `node tools/tsx-run.mjs tools/precheck.mts` with the three exact item paths:
  all three passed (`3 checked, 0 failing`).
* `node tools/rendercheck.mjs` with the same three paths: all passed real
  KaTeX parsing and renderer YAML parsing, with no delimiter or wikilink
  issues.

These item files remain `draft`. Their unresolved direct-source boundary is
specific: the cubic relies on draft high-degree Riemann--Roch, very-ampleness,
linear-system, curve-definition, divisor-degree, rational-section, and local
DVR/principal-divisor interfaces; the genus formula relies on draft canonical
degree, divisor-degree, rational-section, local-DVR, and adjunction interfaces;
the counterexample relies on draft Riemann--Roch, genus, zero-section, divisor,
and speciality interfaces. In particular,
`thm-cartier-weil-divisors-curves-agree`,
`thm-line-bundle-rational-section-cartier-divisor`,
`thm-local-ring-smooth-curve-dvr`, and
`thm-principal-divisor-degree-zero-proper-curve` are draft suppliers. Their
presence in `deps` does not certify their proofs. The independent geometry
route is supported by the cited published homogeneous-ideal, UFD,
affine-dimension, Jacobian, and weighted-Bezout suppliers. No carrier, receipt,
gate, scope decision, shared plan, or published item was changed by this
implementation update.

## Selected B7 counterexample carrier sync

Root released carrier-only synchronization for
`cex-riemann-inequality-not-equality-special-divisor`. Its batch-7 page entry now
records the actual AC-qualified claim, all 25 declared dependencies, the
explicit Fermat quartic witness, the direct proof strategy, and draft status.
The selected proof contract now has citations for each of those 25 dependencies,
using the exact current on-disk Statement or Definition section as its quote;
it records the item's Facts F1–F12, all eight current proof steps, no routine
steps, and the eight current boundary cases. The supplier-status boundary in
the item is retained: this carrier sync does not certify the separately draft
Riemann–Roch, genus, divisor, or speciality suppliers.

The item itself was not modified; its SHA-256 remained
`6598ffd9eeab4e6ff13f362a984438eda685760839ee8565fdfe4824fd867fc3` before and
after this carrier work. The selected carrier file hashes are:

* `frontier-37-owner-30-batch-7.pages.json`:
  `80d45d410227f0a8a57985ecc755c93551e16a4c5d76c5daa4009f7dce54003d`.
* `frontier-37-owner-30-batch-7.proof-contracts.json`:
  `aab0707686c7f344f3453d7da3d5ff49b157c78caded32752d295842ef27e9c4`.

JSON parsing and exact equality of the page dependency list with the contract's
cited source IDs passed. No strict or gate check was run while B7/B6 sources are
moving. The cubic and genus B8 carrier entries, all other B7 entries, and shared
ledgers remain untouched by this sync.

## Selected B8 carrier sync

Root released carrier-only synchronization for the following eight B8 rows.
Their page entries now match each item's current Statement or Definition,
frontmatter dependencies, status, and provenance; each entry also records the
direct strategy. The proof contracts cite the declared dependencies and record
the current Facts and Assumptions, numbered derivations, and boundary cases.
The dependency/citation sets matched exactly, and the recorded numbered-step
counts matched the item bodies. The hyperelliptic-curve definition has no
numbered proof and no Facts and Assumptions section, so its contract records
the definition and dependency evidence without inventing proof steps or facts.

| Item | Declared dependencies / cited sources | Numbered steps |
| --- | ---: | ---: |
| `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` | 24 | 7 |
| `cor-genus-degree-smooth-plane-curve` | 30 | 7 |
| `def-hyperelliptic-curve` | 27 | 0 |
| `thm-canonical-map-nonhyperelliptic-curve` | 47 | 13 |
| `cex-canonical-map-hyperelliptic-not-embedding` | 14 | 4 |
| `ex-plane-quartic-canonical-hyperplane` | 21 | 5 |
| `lem-finite-potent-trace-linearity-and-conjugation` | 8 | 16 |
| `lem-abstract-residue-trace-under-finite-free-extension` | 9 | 10 |

All eight rows already existed in the B8 contract scope index, so that index
was unchanged. The initial scan found no mismatched selected-supplier quotes in
other B8 consumer contracts (`changedExternal: []`); no external contracts were
regenerated. No item file was edited. The selected page and contract JSON files
parsed and passed the scoped statement/dependency/step alignment checks; no
strict or gate check was run while B6/B7 sources are moving.

After this synchronization, the current `def-complete-linear-system`
Definition differs from the stored exact quote in the selected contracts for
`def-hyperelliptic-curve`, `thm-canonical-map-nonhyperelliptic-curve`,
`cex-canonical-map-hyperelliptic-not-embedding`, and
`ex-plane-quartic-canonical-hyperplane`. This is a moving B6/B7 source quote;
the stored quote matched when captured. It is reported for root's later stable
refresh and is not chased here.

At the carrier write, the B8 file hashes were:

* `frontier-37-owner-30-batch-8.pages.json`:
  `cafe4440fbc91db032b68885ea14764b3d1e0983d170ee412eae7ef752011687`.
* `frontier-37-owner-30-batch-8.proof-contracts.json`:
  `a6cc5c799f82649c432fe51ecf67bc63688c198b8723f579519c63974a9e5503`.

The item files remained read-only, with SHA-256 hashes:

* `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic`:
  `5c6e27c27d3558fcb62fb6a01b022a7298789328eef6a498800a6ecfd2f59f66`.
* `cor-genus-degree-smooth-plane-curve`:
  `f5b538083c173567007dafe9e9be4c9ef96ee7f94250f0ce27d404334774cca1`.
* `def-hyperelliptic-curve`:
  `645ae37e3f262ac9e0490eec542a61f60c5924130b1e4ae760d50735798005af`.
* `thm-canonical-map-nonhyperelliptic-curve`:
  `203f0f5b4a880bc31fc68a16208164b5da03950a1295a388bd9ae39d21c65d79`.
* `cex-canonical-map-hyperelliptic-not-embedding`:
  `68fafe5b081911d58685f585fd51a1223ef8315dd075d5f0f616a980a68fdc10`.
* `ex-plane-quartic-canonical-hyperplane`:
  `828b7d6d1d1092730624f33f598d2a0af69d54813901f2bbc854edc8e98622d2`.
* `lem-finite-potent-trace-linearity-and-conjugation`:
  `6f1d43bf0f96da2c7fb4e6b412939e0cee959395c40feb6d1ab3c94e7a170f8e`.
* `lem-abstract-residue-trace-under-finite-free-extension`:
  `0310f6bbf6ef00eb5fcf582324c1d392899659c00dc8b1a4cd4a9e23564cb66d`.

These eight carrier rows and this report append complete the released B8
carrier scope. This synchronization records draft evidence; it does not certify
the items or their draft suppliers.

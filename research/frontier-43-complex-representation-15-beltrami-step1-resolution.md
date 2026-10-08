# Beltrami Step 1 owner resolution

Run: `frontier-43-complex-representation-15`. Subject: CA-QC-2,
`beltrami-equation-and-measurable-riemann-mapping`, order 1620.
Bounded pass: one targeted source/proof audit and one design repair.

Decision: preserve the full promised claim for every integer k ≥ 0 and
0 < α < 1, including the exact exponent α and the local diffeomorphism
conclusion. The missing supplier is resolved as an explicit same-A-page
construction and weak factorization plan. No item proof has yet been
written or independently accepted by this resolution. Step 3 must actually
prove these suppliers and the consumer; a citation alone supplies nothing.

## Placement and dependency order

After the measurable Riemann mapping theorem and local integrability
corollary, and immediately before `thm-holder-regularity-beltrami-solutions`,
place these local proved items in order:

1. `lem-local-holder-cauchy-transform-estimate`.
2. `lem-nondegenerate-local-holder-beltrami-coordinates`.
3. `lem-weak-beltrami-factorization-in-holder-coordinates`.
4. Existing promised `thm-holder-regularity-beltrami-solutions`.

The first lemma proves a bounded operator on Hölder spaces, not an Lp
Beurling theorem. The second constructs coordinates without referring to a
previously given weak solution or claiming its derivative is nonzero. The
third applies to every W^{1,2} weak solution, including noninjective ones.
Only the final theorem uses injectivity of the normalized MRMT solution.
This order avoids circular regularity or Jacobian arguments.

Add the backward page edge `schauder-and-lp-elliptic-estimates` (order 1064).
It supplies Hölder definitions/completeness and reaches the already proved
Newtonian potential estimate. Its scalar second-order Schauder theorem is
not being asserted to imply the first-order result. Root owns the shared
plan-spec edit. Inspection of the current plan closure after that edge found
all supplier homes listed below reachable; no other page edge is needed.

## Exact existing supplier interfaces

The Cauchy-transform lemma uses:

- `def-holder-spaces-c-k-alpha-and-their-scaled-norms` and
  `thm-holder-spaces-on-bounded-domains-are-banach-spaces`, whose statement
  also covers C_b^{k,α} on arbitrary open sets, including R².
- `def-newtonian-potential`,
  `def-laplace-fundamental-solution-with-positive-minus-laplacian-sign`,
  `thm-newtonian-potential-for-holder-data-is-classical`, and
  `lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials`.
- `thm-distributional-differentiation-is-continuous-and-commutes`,
  `lem-mollification-commutes-with-weak-derivatives-in-the-interior`,
  `thm-dominated-convergence`, and `thm-differentiation-under-the-integral-sign`
  for the derivative/convolution passage described below.
- `def-wirtinger-derivatives`,
  `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, and
  `thm-symmetry-of-higher-mixed-partials` for operator identities.

The coordinate lemma uses the preceding local lemma plus:

- `lem-smooth-bump-between-concentric-euclidean-balls` for a fixed cutoff.
- `thm-holder-spaces-on-bounded-domains-are-banach-spaces` and
  `thm-complete-subspace-iff-closed` for the fixed-support subspace.
- `thm-banach-fixed-point` for the contraction, or the explicit geometric
  Neumann series whose convergence is proved using that completeness.
- `thm-euclidean-inverse-function-theorem`, `cor-mean-value-theorem`, and
  `thm-chain-rule-for-total-derivatives` for the nondegenerate chart.
- `def-measurable-beltrami-coefficient` and
  `def-weak-solution-beltrami-equation` for the local equation conventions.

The weak-factorization lemma uses the coordinate lemma plus:

- `lem-c-k-boundary-flattening-preserves-wkp-locally`, whose actual statement
  covers arbitrary C^k diffeomorphisms, at k=1 and p=2.
- `thm-weyl-lemma-for-the-laplacian` and
  `lem-weak-derivative-linearity-locality-and-commutation`:
  ∂bar h=0 implies Δh=4∂∂bar h=0 distributionally; Weyl gives a smooth
  representative, and its now classical Cauchy–Riemann equation makes it
  holomorphic by the existing exact item
  `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic`.

The final theorem uses these local suppliers,
`thm-measurable-riemann-mapping-sphere`,
`cor-injective-holomorphic-derivative-nonzero`, and
`thm-euclidean-inverse-function-theorem`. Carry the choice assumptions of
actual suppliers (in particular `def-countable-choice` and, wherever full
AC is inherited, `def-axiom-of-choice`); do not silently discard them.

## Complete proof route

### Fixed-support Cauchy operator

Use the real planar fundamental solution Γ(z)=−(2π)^{-1}log|z| and its
complex-linear Newtonian convolution Nq. For q supported in the fixed closed
disk B₂ and in C^{k,α}(R²), define

    Tq = −4∂z Nq,       Sq = ∂z Tq = −4∂z² Nq.

The published Newtonian theorem gives −ΔNq=q and Nq in C^{2,α}_loc,
so ∂bar Tq=q. Since ∂zΓ=−1/(4πz), Tq agrees with the absolutely convergent
Cauchy integral (1/π)∫q(ζ)/(z−ζ)dA(ζ). The cancelled Hessian formula gives
S the principal-value kernel −1/(πz²), including its correct distribution
normalization. No globally absolutely convergent subtraction of q(z) is
asserted, and no Lp mapping claim is needed.

On B₄, the published fixed-support Newtonian C^{2,α} bound controls Tq and
Sq. Outside B₃, differentiate the nonsingular integral: derivatives of Sq
of order j are bounded by C_j ||q||∞ |z|^{−2−j}. Near pairs outside B₃
are estimated by the derivative bound and the mean value theorem; distant
pairs are estimated by the supremum bound. Pairs crossing these regions
are covered by B₄ when close, or the same distant-pair bound when separated.
This proves a global C^{0,α} bound for S. For every |β|≤k,
D^β Nq=N(D^βq) distributionally. Prove this by compactly supported
mollification/integration by parts, then pass locally in distributions and
in the absolutely convergent potential integral; Hölder-norm convergence
of mollifiers is neither assumed nor needed. The published Newtonian theorem
applied separately to D^βq then identifies the classical derivatives.
Applying the preceding estimates to each D^βq proves

    ||Sq||_{C^{k,α}(R²)} ≤ M_{k,α} ||q||_{C^{k,α}(R²)},
    ||Tq||_{C^{k+1,α}(B_R)} ≤ C_{k,α,R} ||q||_{C^{k,α}(R²)}.

The lower derivative Hölder seminorms used in the product estimate follow
from bounded higher derivatives on convex R² and the supremum bound for
pairs at distance ≥1. Prove the finite Leibniz/product estimate explicitly;
do not introduce an unproved multiplication theorem.

### Frozen coefficient and small-norm chart

Fix p, translate p to zero, and let a=μ(p), |a|<1. The real affine
orientation-preserving map A(z)=z+a bar(z) has J_A=1−|a|²>0. In w=A(z)
coordinates the equation becomes g_barw=ν(w)g_w with

    ν(w) = (μ(A^{-1}w)−a)/(1−bar(a) μ(A^{-1}w)),       ν(0)=0.

The denominator is bounded away from zero near p (indeed ≥1−|a|q when
|μ|≤q<1). The coefficients and derivatives in this change are bounded in
terms of the local coefficient norm and that ellipticity bound.

Choose a fixed smooth χ equal to 1 on B₁ and supported strictly inside B₂;
choose r so that rB₃ is in the transformed domain. Define on the plane
b_r(ξ)=χ(ξ)ν(rξ), extended by zero. On the fixed disk, for k=0 both
||ν(r·)||∞ and [ν(r·)]α are O(r^α). For k≥1, the zero value gives
||ν(r·)||∞=O(r); each derivative of positive order j≤k is
r^j(D^jν)(r·), and its top seminorm is bounded by
r^{k+α}[D^kν]α. Product differentiation with the fixed χ and the lower
order Hölder bounds shows ||b_r||_{C^{k,α}(R²)}→0. This includes cutoff
terms; mere smallness of ||b_r||∞ would not suffice. Constants may depend
on k, α, ellipticity and the local C^{k,α} coefficient norm.

Let X={q∈C_b^{k,α}(R²):supp(q)⊂closed B₂}; it is a closed Banach
subspace. With the proved product bound P_{k,α} choose r so that
P_{k,α}M_{k,α}||b_r||_{C^{k,α}}<1/2. Then
q↦b_r(1+Sq) maps X into X and is a contraction. Its fixed point satisfies
||q||≤2||b_r||, with harmless norm constants if a different equivalent
Hölder norm is used. Set φ(ξ)=ξ+Tq(ξ). Then

    φ_barξ=q=b_r(1+Sq)=b_r φ_ξ.

Shrink r further to have ||Dφ−I||∞<1/2. The mean value theorem along
segments makes φ injective (|φ(x)−φ(y)|≥|x−y|/2), and the derivative is
invertible everywhere with positive determinant; the inverse function theorem
provides its local C¹ inverse. On B₁ it solves the original residual equation.
Undo scaling and affine freezing to get Φ(z)=r φ(A(z)/r) on a neighborhood
of p, with Φ_barz=μ Φ_z, Φ∈C^{k+1,α}, and J_Φ>0. The inverse inherits
C^{k+1,α}: DΦ^{-1}=(DΦ∘Φ^{-1})^{-1} gives the k=0 Hölder bound because
the inverse is locally Lipschitz; differentiating this identity inductively
and using finite product/composition bounds gives the higher orders.

### Arbitrary weak solution and nonzero Jacobian

For any W^{1,2}_loc solution f, use the stated Sobolev pullback lemma on
compact patches of Φ^{-1} to get h=f∘Φ^{-1}∈W^{1,2}_loc and its weak
chain rule. Writing f=h∘Φ and subtracting μ times the z derivative from
the bar-z derivative gives

    0 = (h_barw∘Φ)(overline(Φ_z)−μ overline(Φ_barz))
      = (h_barw∘Φ)(1−|μ|²)overline(Φ_z).

The last multiplier never vanishes because Φ is a diffeomorphism and
|μ|<1. Thus h_barw=0 almost everywhere; Sobolev pullback preserves null
sets as guaranteed by that supplier. Distribution commutation and Weyl give
h a holomorphic representative. It follows that f=h∘Φ has the full
C^{k+1,α} regularity for arbitrary weak solutions. This is the required
first-order regularity conclusion without an unexplained Sobolev bootstrap.

For the normalized MRMT solution f, homeomorphy makes h injective. The
published injective-holomorphic derivative theorem gives h'≠0, and

    J_f(z)=|h'(Φ(z))|² J_Φ(z)>0.

The holomorphic inverse of h and the Hölder inverse of Φ show that f is a
local C^{k+1,α} diffeomorphism. Arbitrary weak solutions need not have
nonzero Jacobian, and this property must never be included in their lemma.
Use coordinate charts at infinity for the sphere statement; the coefficient
hypothesis and local conclusion are chartwise, not a global Euclidean norm.

## Actual source retrieval and reading

Retrieved by curl with redirects and HTTP failure detection, then extracted
with installed Python3/PyMuPDF (fitz):

- Astala–Clop–Faraco–Jääskeläinen–Koski, *Nonlinear Beltrami operators,
  Schauder estimates and bounds for the Jacobian*, Ann. IHP AN 34 (2017),
  1543–1559: https://ems.press/content/serial-article-files/16835 . Download
  succeeded, 17 PDF pages. Read introduction/Theorems 1.1–1.3 (printed
  1543–1545), §2.4 (1552–1554) and §3 inverse discussion (1554–1555).
  The introduction explicitly states the full linear α regularity and
  Jacobian result. Theorem 1.2 alone loses exponent and is insufficient;
  Theorem 1.3 covers C¹ gradient dependence, hence the linear case, but its
  general proof requires extra nonlinear machinery. This resolution instead
  spells out a smaller constructive linear route. No claim of reading the
  entire 17-page article is made.
- Hunter, *Notes on Partial Differential Equations* (2014):
  https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf . Download succeeded,
  read §2.7.1–2.7.2, Theorem 2.26, Corollary 2.27 and complete proof of
  Theorem 2.28, printed 37–43 (PDF 43–49). The near/far kernel split and
  annular cancellation give the exact α bound for 0<α<1; the α=1 endpoint
  fails at the far integral. The existing local Newtonian supplier gives
  precisely the fixed-support norm form used here.
- Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*,
  https://www.math.stonybrook.edu/~mlyubich/book.pdf . Download succeeded,
  702 PDF pages. Read Appendix §14.10.1, Theorem 14.11 and its proof,
  printed 200–201; it fixes the sign of T and the distributional equation.
  It is not cited as proving our Hölder contraction or all-order conclusion.

Initial attempted pdftotext extraction failed because that executable is
absent; the subsequent fitz extraction succeeded. Downloads/extractions are
in /tmp and are retrieval aids, not checked-in purported source archives.

## Exit and downstream consequence

The bounded design repair is complete: exact local suppliers, placement,
full proof route and external interfaces are identified, and no mathematical
uncertainty remains in this planned route. Actual authoring/review remains
mandatory. No existing or published statement was narrowed or changed;
therefore no published consumer repair is triggered. CA-QC-3 may consume the
same retained regularity/Jacobian interface after its proof is authored.
Its writer must not treat this planning evidence as an already proved item.

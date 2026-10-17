---
id: ex-emgmath-compact-neutrality
kind: example
title: "Compact boundaryless Gauss neutrality"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-emg-lorentzian-forms
  - def-gr-metric-volume-form-and-current-flux
  - def-smooth-singular-chain-and-cochain-complexes
  - def-darboux-integral
  - lem-emg-gauss-finite-chain
  - lem-emg-scaled-three-torus-smooth
  - def-smooth-vector-field-as-a-tangent-bundle-section
  - def-sine-and-cosine-by-power-series
  - lem-sine-and-cosine-series-converge-everywhere
  - thm-termwise-differentiation-of-a-real-power-series
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - def-null-and-content-zero-in-rn
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-heine-borel-rn
  - thm-jordan-boundary-criterion
  - thm-graphs-of-continuous-functions-have-content-zero
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - lem-integral-additivity-over-a-content-zero-almost-partition
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - def-multidimensional-darboux-integral
  - def-multidimensional-rectangle-and-volume
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-darboux-integral: mathematical-premise
  lem-emg-gauss-finite-chain: mathematical-premise
  lem-emg-scaled-three-torus-smooth: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  lem-sine-and-cosine-series-converge-everywhere: mathematical-premise
  thm-termwise-differentiation-of-a-real-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  def-null-and-content-zero-in-rn: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-jordan-boundary-criterion: mathematical-premise
  thm-graphs-of-continuous-functions-have-content-zero: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  lem-integral-additivity-over-a-content-zero-almost-partition: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, section 3.2.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "Section 3.2.5, current charge and its relation to the Maxwell form equation and Stokes flux."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 1, Maxwell form and tensor conventions (1.77)–(1.94), printed pp. 20–24 (PDF pp. 26–30)."
---

## Example

Fix periods $L_1,L_2,L_3>0$ and use the smooth quotient geometry and global
forms and vector fields supplied by
[[lem-emg-scaled-three-torus-smooth]]. In its coordinates set
$M:=\mathbb R_{x^0}\times\mathbb T^3_L$, with
$g=-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2$, orientation
$dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and time orientation
$N=\partial_0$. Fix $c,\mu_0>0$ as real coefficients and put

$$f(x^1):=\cos\left(\frac{2\pi x^1}{L_1}\right),\qquad h(x^1):=\frac{L_1}{2\pi}\sin\left(\frac{2\pi x^1}{L_1}\right).$$

Then $h'=f$ and both functions are smooth and periodic. Define the smooth
current and field

$$j:=f(x^1)\partial_0,\qquad F:=-\mu_0h(x^1)\,dx^0\wedge dx^1.$$

Let $\Sigma$ be the oriented spatial slice $x^0=x^0_*$, represented as a
finite smooth singular chain as follows. Triangulate the fundamental cube
$[0,L_1]\times[0,L_2]\times[0,L_3]$ by the six tetrahedra indexed by
$\sigma\in S_3$. The ordered vertices of tetrahedron $\sigma$ are
$0$, $L_{\sigma(1)}e_{\sigma(1)}$,
$L_{\sigma(1)}e_{\sigma(1)}+L_{\sigma(2)}e_{\sigma(2)}$, and
$(L_1,L_2,L_3)$. Compose each affine simplex map with the quotient
$q:\mathbb R^3\to\mathbb T^3_L$, and weight it by $\operatorname{sgn}(\sigma)$
so every tetrahedron has the cube orientation. The determinant of the
ordered edge vectors is $L_1L_2L_3\operatorname{sgn}(\sigma)$, so this
coefficient gives each simplex the cube orientation. The six regions are the
orderings $0\le u_{\sigma(3)}\le u_{\sigma(2)}\le u_{\sigma(1)}\le1$ of
$u_i:=x^i/L_i$; their interiors are disjoint and their union is the cube.
Internal faces cancel in pairs, and opposite cube faces are identified by
period translations with opposite boundary orientations, as verified below.

```tikz
\begin{tikzpicture}[scale=0.9]
  \coordinate (O) at (0,0);
  \coordinate (X) at (2,0);
  \coordinate (Y) at (1,0.7);
  \coordinate (XY) at (3,0.7);
  \coordinate (Z) at (0,1.7);
  \coordinate (XZ) at (2,1.7);
  \coordinate (YZ) at (1,2.4);
  \coordinate (XYZ) at (3,2.4);
  \draw[thick] (O)--(X)--(XY)--(Y)--cycle;
  \draw[thick] (Z)--(XZ)--(XYZ)--(YZ)--cycle;
  \draw[thick] (O)--(Z) (X)--(XZ) (Y)--(YZ) (XY)--(XYZ);
  \draw[densely dotted,very thick] (O)--(XYZ);
  \node[below left] at (O) {$0$};
  \node[right] at (XYZ) {$(L_1,L_2,L_3)$};
  \node at (1.35,1.25) {six tetrahedra};
  \node[above] at (1.4,2.75) {$x^3=0\sim L_3$};
  \node[below] at (1.5,-0.42) {$x^1=0\sim L_1$};
  \node[right] at (3.55,1.3) {$x^2=0\sim L_2$};
\end{tikzpicture}
```

The perspective box depicts the fundamental cube, with opposite faces paired
by the labels. Its dotted body diagonal is the shared edge of the six affine
tetrahedra indexed by coordinate permutations. The drawing is schematic and
is not used in the chain-boundary proof above.

## Facts & Assumptions

**Given:** $L_i,c,\mu_0>0$, the product Lorentzian geometry and the smooth
fields in the Example.

[F1] [[lem-emg-scaled-three-torus-smooth]] proves the quotient is a smooth
compact boundaryless torus, the global $dx^i,\partial_i$ descend, and on the
product $M$ the metric components are constant
$\eta=\operatorname{diag}(-1,1,1,1)$, the Christoffel symbols vanish, and
$\mathrm{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$.

[F2] The alternating current-flux form is
$\iota_j\mathrm{vol}_g$ and charge is
$Q(\Sigma)=c^{-1}\int_\Sigma\iota_j\mathrm{vol}_g$
([[def-gr-metric-volume-form-and-current-flux]],
[[lem-emg-gauss-finite-chain]]).

[F3] For any finite smooth singular three-cycle on which a smooth sourced
Maxwell field is defined, the Gauss lemma
[[lem-emg-gauss-finite-chain]] gives zero total charge.

[F4] The smooth tangent-bundle conventions inherited from
[[def-emg-lorentzian-forms]] and [[lem-emg-gauss-finite-chain]] use
$\mathrm{AC}_\omega$; the finite torus chain below is explicit and uses no
additional choice ([[def-countable-choice]]).

[F5] The boundary of an ordered smooth singular $3$-simplex is the alternating
sum of its four face maps, and the boundary of a finite chain is the finite
sum of these boundaries
([[def-smooth-singular-chain-and-cochain-complexes]]).

[F6] The power-series definitions and convergence, followed by repeated
termwise differentiation, make $\sin$ and $\cos$ smooth. Their first
derivatives are $\cos$ and $-\sin$, and both have period $2\pi$
([[def-sine-and-cosine-by-power-series]],
[[lem-sine-and-cosine-series-converge-everywhere]],
[[thm-termwise-differentiation-of-a-real-power-series]],
[[thm-sine-and-cosine-derivatives]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F7] The chain rule gives $h'(x^1)=f(x^1)$. This continuous derivative is
Riemann integrable, and its integral equals the endpoint difference of $h$
([[thm-chain-rule-for-total-derivatives]],
[[thm-continuous-implies-integrable]], [[def-darboux-integral]],
[[thm-ftc-second-part]]).

[F8] The published definition [[def-integral-of-a-form-over-a-smooth-singular-simplex]]
defines the integral of a smooth $3$-form over a smooth singular $3$-simplex
$\sigma$ as the Jordan-set Riemann integral of the coefficient of its
pullback in the standard positive affine coordinates on
$T_3=\{(s_1,s_2,s_3):s_i\ge0,\ s_1+s_2+s_3\le1\}$;
it also establishes that $T_3$ is compact Jordan. The published, audited
change-of-variables theorem [[thm-change-of-variables-for-compact-jordan-sets]]
states: if $U\subseteq\mathbb R^3$ is open,
$\phi:U\to\mathbb R^3$ is injective and $C^1$ with $D\phi$ invertible
throughout $U$, and $K\subseteq U$ is compact Jordan, then
for bounded $u:\phi(K)\to\mathbb R$ the two integrability conditions are
equivalent and, when they hold,
$$\int_{\phi(K)}u(y)\,dy=\int_Ku(\phi(s))|\det D\phi(s)|\,ds.$$
Its proof also establishes compact Jordan status of $\phi(K)$.

[F9] The published boundary criterion says a Euclidean-metric-bounded set is
Jordan measurable exactly when its boundary has content zero
([[thm-jordan-boundary-criterion]]). The published graph theorem says the
graph of a continuous function on a closed nondegenerate rectangle has
content zero ([[thm-graphs-of-continuous-functions-have-content-zero]]). The
published compact-Jordan integrability theorem states that a continuous
function on a compact Jordan set is integrable there
([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]), and
closed bounded subsets of $\mathbb R^3$ are compact
([[thm-heine-borel-rn]]). Content zero passes to subsets and finite unions
because a subset inherits a finite cube cover and finitely many such covers
can be combined ([[def-null-and-content-zero-in-rn]]). If
bounded Jordan sets $A_1,\ldots,A_N$ fill a bounded Jordan set $A$ up to a
content-zero remainder, have pairwise content-zero intersections, and a
bounded function is integrable on $A$ and every $A_i$, then
the published finite-additivity lemma
[[lem-integral-additivity-over-a-content-zero-almost-partition]] gives
$\int_Ag=\sum_i\int_{A_i}g$.

[F10] The published theorem [[thm-continuous-on-a-rectangle-is-riemann-integrable]]
says every continuous real function on a closed nondegenerate rectangle in
$\mathbb R^m$ is Riemann integrable. The published rectangular Fubini theorem
[[thm-riemann-fubini-on-product-rectangles]] says that for an integrable
function on a product of nondegenerate rectangles, the iterated section
integrals exist when the sections in that order are integrable and equal the
multiple integral. The published multidimensional Darboux definition
[[def-multidimensional-darboux-integral]] gives the common lower/upper sum value when
they agree, and rectangle volume is the product of side lengths
by the published definition [[def-multidimensional-rectangle-and-volume]];
in particular, a constant
$a$ on a rectangle $R$ has integral $a\,\operatorname{vol}(R)$ because each
lower and upper Darboux sum has that value.

## Verification

**Given:** [F1]–[F10], the geometry, fields and finite chain defined in the
Example.

1.1 For a fixed permutation $\sigma$, the barycentric coordinates of a point
in the ordered region
$0\le u_{\sigma(3)}\le u_{\sigma(2)}\le u_{\sigma(1)}\le1$ relative to its
four listed vertices are $1-u_{\sigma(1)}$,
$u_{\sigma(1)}-u_{\sigma(2)}$, $u_{\sigma(2)}-u_{\sigma(3)}$, and
$u_{\sigma(3)}$; these are nonnegative, sum to one, and reconstruct the
point. Thus the six tetrahedra cover the cube with disjoint interiors. Each
affine map is smooth on a neighbourhood of its standard simplex, and its
composition with the smooth quotient map [F1] is a smooth singular simplex.
The ordered edge determinant is
$L_1L_2L_3\operatorname{sgn}(\sigma)$, so the weight
$\operatorname{sgn}(\sigma)$ orients each tetrahedron by
$dx^1\wedge dx^2\wedge dx^3$. [given, F1, construct, algebra]

1.2 The function $h$ is periodic and smooth, with $h'=f$ by [F6]–[F7], so
$F$ and $j$ are smooth global fields on the product. Since
$dF=-\mu_0h'(x^1)dx^1\wedge dx^0\wedge dx^1=0$, the homogeneous equation
holds. Raising indices gives $F^{01}=\mu_0h$ and $F^{10}=-\mu_0h$. Thus
$\nabla_aF^{a0}=\partial_1F^{10}=-\mu_0f=-\mu_0j^0$,
$\nabla_aF^{a1}=\partial_0F^{01}=0=-\mu_0j^1$, and the $b=2,3$ equations
have both sides zero. Thus both field equations are verified everywhere.
[given, F1, F6, F7, algebra]

2.1 An internal facet arises by setting one adjacent-coordinate inequality
to equality. The two permutations differ by swapping those adjacent entries;
their omitted vertices occupy the same position in the ordered vertex lists,
and the remaining three vertices have the same order. Thus the face maps in
[F5] are identical, while the permutation signs are opposite. Their two
coefficients in the signed face boundary therefore sum to zero. This covers
both internal facet types (equal first and second coordinates, or equal
second and third coordinates). [given, F5, step 1.1, algebra]

2.2 Fix a coordinate $i$ and order the other two indices as $(a,b)$. The
triangle on $x^i=L_i$ comes from permutation $(i,a,b)$ by omitting vertex
$0$; its ordered vertices are $L_ie_i$, $L_ie_i+L_ae_a$, and
$L_ie_i+L_ae_a+L_be_b$. The triangle on $x^i=0$ comes from $(a,b,i)$ by
omitting the final vertex; its ordered vertices are $0$, $L_ae_a$, and
$L_ae_a+L_be_b$. Translation by $L_ie_i$ makes these vertex lists identical,
so their quotient face maps are equal. Moving $i$ from first to last is two
transpositions, so the permutation coefficients agree; the omitted-vertex
boundary signs are $+1$ and $-1$. By [F5] the corresponding face terms
cancel. This pairs every outer triangle, for all three coordinates and both
orders $(a,b)$. [given, F1, F5, step 1.1, algebra]

3.1 The finite chain boundary is the alternating face sum in [F5]. Steps 2.1
and 2.2 cancel every internal and external face term, respectively. Hence
$\partial\Sigma=0$, as required in [F3]. The explicit finite triangulation
adds no choice, as [F4] records. [given, F3, F4, F5, step 2.1, step 2.2, algebra]

4.1 Since $\partial\Sigma=0$ by step 3.1, the finite-chain neutrality
result [F3] applies and gives $Q(\Sigma)=0$. [given, F3, step 3.1]

4.2 Let $C=[0,L_1]\times[0,L_2]\times[0,L_3]$ and let $T_\sigma\subset C$
be the affine tetrahedron with the ordered vertices specified in the Example;
each $T_\sigma$ is closed and bounded, hence compact by [F9], so the
continuous function $f$ is bounded there. The standard $T_3$ is compact
Jordan by [F8].
Write $\phi_\sigma:T_3\to T_\sigma$ for its affine parametrization and
$\psi_\sigma=q\circ\phi_\sigma$ for the corresponding simplex in $M$.
Since $j=f(x^1)\partial_0$ and $\mathrm{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ by [F1], the interior-product definition in [F2] gives
$\iota_j\mathrm{vol}_g=f(x^1)dx^1\wedge dx^2\wedge dx^3$. The pullback of
$\iota_j\mathrm{vol}_g$ by
$\psi_\sigma$ has coefficient
$f(\phi_\sigma^1(s))\det D\phi_\sigma$ in the standard positive affine
coordinates, because the descended coordinate forms pull back under $q$ to
the Euclidean coordinate forms [F1]. By [F8] this is the coefficient whose
integral defines $\int_{\psi_\sigma}\iota_j\mathrm{vol}_g$. This coefficient
is continuous on compact Jordan $T_3$, hence integrable by [F9]. The determinant
of the three edge vectors is
$\det D\phi_\sigma=L_1L_2L_3\operatorname{sgn}(\sigma)$, so the chain
coefficient gives
$$\operatorname{sgn}(\sigma)\int_{\psi_\sigma}\iota_j\mathrm{vol}_g
=\int_{T_3} f(\phi_\sigma^1(s))|\det D\phi_\sigma|\,ds
=\int_{T_\sigma}f(x^1)\,dx^1dx^2dx^3.$$
The last equality is [F8]'s change-of-variables formula: $T_3$ is compact
Jordan, $\phi_\sigma$ extends to an injective affine $C^1$ map on
$\mathbb R^3$ with nonsingular constant derivative, and $f$ is bounded and
continuous on $T_\sigma$.
The cube $C$ and each $T_\sigma$ are closed and bounded, hence compact by
Heine--Borel, and they are bounded Jordan sets. Indeed their
boundaries are finite unions of bounded pieces of affine planes; each such
piece is contained in the graph of an affine function over a containing
closed nondegenerate rectangle after solving the plane equation for a
coordinate with nonzero normal component. These graphs have content zero by
[F9], so the boundary criterion in [F9] applies. By step 1.1 the six
$T_\sigma$ cover $C$ and have disjoint interiors. Thus each pairwise
intersection is contained in the union of their boundaries and has content
zero by finite-union and subset closure in [F9], while the remainder
$C\setminus\bigcup_{\sigma\in S_3}T_\sigma$ is
empty. The coefficient $f$ is continuous and bounded on the compact Jordan
sets $C,T_\sigma$, so all integrals in the finite additivity hypotheses are
defined by [F9]. Applying the finite Jordan-set additivity result in [F9]
and using the chain definition in [F2] gives
$$Q(\Sigma)=\frac1c\sum_{\sigma\in S_3}\operatorname{sgn}(\sigma)
\int_{\psi_\sigma}\iota_j\mathrm{vol}_g
=\frac1c\int_C f(x^1)\,dx^1dx^2dx^3.$$
[given, F1, F2, F8, F9, step 1.1, algebra, construct]

4.3 Write $A=[0,L_1]$ and $B=[0,L_2]\times[0,L_3]$, so $C=A\times B$.
The coefficient $f(x^1)$ is continuous on $C$ and hence integrable there by
[F10]. Rectangular Fubini [F10] applies, and its sections over $B$ are the
constant function $f(x^1)$. The multidimensional Darboux sums and volume
formula in [F10] therefore give
$$\int_Cf(x^1)\,dx^1dx^2dx^3
=L_2L_3\int_0^{L_1}f(x^1)\,dx^1.$$
By [F7], $h'=f$ and the one-dimensional FTC gives
$\int_0^{L_1}f(x^1)\,dx^1=h(L_1)-h(0)=0$, since the sine values at $0$ and
$2\pi$ agree. Hence the direct integral computation also yields
$Q(\Sigma)=0$, in agreement with step 4.1. [given, F7, F10, step 4.2, algebra] ∎

## Remarks

This is a mathematical model with smooth fields. It illustrates the
compact-cycle constraint without using a point source or a boundary at
infinity; it does not report a measurement or assert that the model describes
nature.

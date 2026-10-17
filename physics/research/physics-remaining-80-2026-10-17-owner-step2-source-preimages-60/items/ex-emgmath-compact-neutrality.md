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

## Verification

**Given:** [F1]–[F7], the geometry, fields and finite chain defined in the
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
result [F3] applies and gives $Q(\Sigma)=0$. Directly,
$\iota_j\mathrm{vol}_g=f(x^1)dx^1\wedge dx^2\wedge dx^3$, so additivity
over the positively oriented six-simplex decomposition from steps 1.1–2.2
gives
$Q(\Sigma)=\frac{L_2L_3}{c}\int_0^{L_1}\cos\left(\frac{2\pi x^1}{L_1}\right)\,dx^1=\frac{L_2L_3}{c}\bigl[h(L_1)-h(0)\bigr]=0,$
by [F7] and the equal endpoint values of $h$. This explicitly checks total
neutrality on the compact spatial cycle. [given, F2, F3, F6, step 3.1, step 1.2, algebra] ∎

## Remarks

This is a mathematical model with smooth fields. It illustrates the
compact-cycle constraint without using a point source or a boundary at
infinity; it does not report a measurement or assert that the model describes
nature.

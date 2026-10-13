---
id: ex-sr-affine-chart-transition
kind: example
title: "Worked affine transition between two inertial charts"
status: published
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-affine-space-and-displacement, def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, lem-future-oriented-inertial-frames-exist, def-linear-isomorphism-and-invertible-linear-map, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, def-orientation-of-a-finite-dimensional-real-vector-space]
dependency_roles:
  def-affine-space-and-displacement: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Worked computation of the transition between two inertial charts. Let
$(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space with
inertial frames $(o;e_0,e_1,e_2,e_3)$ and $(o';e'_0,e'_1,e'_2,e'_3)$ and
charts
$x(p)=E^{-1}(p-o)$, $x'(p)=E'^{-1}(p-o')$, and write
$e'_a=\sum_bM^b_ae_b$ with $M$ the change-of-basis matrix. Then for every
event $p$,

$$x'(p)=M^{-1}\bigl(x(p)-x(o')\bigr)=M^{-1}x(p)+b,\qquad b:=-M^{-1}x(o'),$$

so the transition is an affine map of $\mathbb R^4$ with invertible linear part
$M^{-1}$.

**Restriction to the plane of $e_0,e_1$.** Fix an inertial frame
$(o;e_0,e_1,e_2,e_3)$ with $o$ the origin of $A$ used in the charts, and a real
parameter $r$, and put

$$e'_0:=\cosh r\,e_0+\sinh r\,e_1,\qquad e'_1:=\sinh r\,e_0+\cosh r\,e_1,\qquad e'_2:=e_2,\qquad e'_3:=e_3,$$

with $o':=o$. Then $(o';e'_0,e'_1,e'_2,e'_3)$ is again an inertial frame: the
matrix of the change of basis is the block matrix
$M=\operatorname{diag}\Bigl(\begin{pmatrix}\cosh r&\sinh r\\ \sinh r&\cosh r\end{pmatrix},I_2\Bigr)$
with $\det M=\cosh^2r-\sinh^2r=1$, and

$$M^{-1}=\operatorname{diag}\Bigl(\begin{pmatrix}\cosh r&-\sinh r\\ -\sinh r&\cosh r\end{pmatrix},I_2\Bigr).$$

Since $M$ has determinant $1$, the two bases are positively oriented together;
the new timelike vector satisfies
$\eta(e'_0,e'_0)=-\cosh^2r+\sinh^2r=-1<0$ with
$\cosh r>\lvert\sinh r\rvert$, so it is future timelike; hence the primed tuple
is an inertial frame. The transition values are
$x'(o)=0$ and $x'\bigl(x^{-1}(1,0,0,0)\bigr)=(\cosh r,-\sinh r,0,0)$. Inertial frames
exist at every event by [[lem-future-oriented-inertial-frames-exist]], so the
computation applies with any chosen origin.

## Facts & Assumptions

**Given:** The inertial frames and charts of the Example, with
$e'_a=\sum_bM^b_ae_b$, and the restricted basis with the hyperbolic parameter
$r$.

[L1] An inertial frame's ordered basis is $\eta$-orthonormal, future and
positively oriented; its chart is $x(p)=E^{-1}(p-o)$, so $x(o)=0$; and for
another inertial frame with chart $x'$ the transition law
$x'=M^{-1}(x-x(o'))$ holds ([[def-inertial-frame-and-inertial-chart]]).

[L2] $\cosh u=(e^u+e^{-u})/2>0$ and $\sinh u=(e^u-e^{-u})/2$
([[def-hyperbolic-functions]]), and
$\cosh^2u-\sinh^2u=1$ for every real $u$
([[thm-hyperbolic-identities-and-derivatives]]).

[L3] In an $\eta$-orthonormal basis the matrix of $\eta$ is
$\operatorname{diag}(-1,1,1,1)$, so
$\eta(v,w)=-v^0w^0+v^1w^1+v^2w^2+v^3w^3$
([[def-inertial-frame-and-inertial-chart]]).

[L4] A timelike vector $v$ with $\eta(v,v)<0$ and
$v^0>\lvert v_{\mathrm{vec}}\rvert$ is future timelike
([[def-causal-classification-of-lorentz-vectors]],
[[def-time-orientation-and-future-causal-sets]],
[[lem-timelike-cone-has-two-convex-components]]).

[L5] The change-of-basis map between two ordered bases has $\det>0$ exactly
when the bases lie in the same positive class; a positive class is an
orientation and a basis in it is positively oriented
([[def-orientation-of-a-finite-dimensional-real-vector-space]]).

[L6] The change-of-basis matrix between two ordered bases is invertible
([[def-linear-isomorphism-and-invertible-linear-map]]), and an expression
$u\mapsto M^{-1}u+b$ is an affine map of $\mathbb R^4$
([[def-affine-space-and-displacement]]).

## Verification

**Proof technique:** direct computation with the transition law and the hyperbolic identity.

1.1 For a general pair of inertial frames, substituting $E'(u)=E(Mu)$, equivalently $E'=E\circ M$, into $x'=E'^{-1}(p-o')$ and using $p-o'=E\bigl(x(p)-x(o')\bigr)$ gives $x'(p)=M^{-1}\bigl(x(p)-x(o')\bigr)=M^{-1}x(p)-M^{-1}x(o')$, an affine map with invertible linear part $M^{-1}$ by [L1] and [L6]. [L1, L6, algebra]

1.2 For the restricted basis, $\eta(e'_0,e'_0)=-\cosh^2r+\sinh^2r=-1$ and $\eta(e'_1,e'_1)=-\sinh^2r+\cosh^2r=1$ by [L3] and [L2], while $\eta(e'_0,e'_1)=-\cosh r\sinh r+\sinh r\cosh r=0$; also $\eta(e'_i,e'_j)=\delta_{ij}$ for $i,j\in\{2,3\}$ and the mixed entries vanish. Hence $(e'_0,e'_1,e'_2,e'_3)$ is $\eta$-orthonormal by [L1]. [L1, L2, L3, algebra]

1.3 The matrix $M$ of the restricted change of basis is the displayed block matrix, and $\det M=\cosh^2r-\sinh^2r=1$ by [L2]; its inverse is the displayed block matrix, since multiplying the two blocks gives the identity using $\cosh^2r-\sinh^2r=1$. [L2, algebra]

2.1 By $\cosh^2r-\sinh^2r=1$ and $\cosh r>0$ one has $\cosh r=\sqrt{1+\sinh^2r}>\lvert\sinh r\rvert$ for every real $r$; with $\eta(e'_0,e'_0)=-1<0$ from step 1.2, the vector $e'_0$ is future timelike by [L4]. Since $\det M=1>0$ by step 1.3, the primed basis lies in the same positive class as the positively oriented original basis by [L5]; hence $(o';e'_0,e'_1,e'_2,e'_3)$ is an inertial frame by [L1]. [step 1.2, step 1.3, L1, L2, L4, L5, algebra]

3.1 With $o'=o$ and $x(o)=0$ by [L1], the transition law of step 1.1 gives $x'(o)=M^{-1}(x(o)-x(o'))=0$, and for the event $p=x^{-1}(1,0,0,0)$, whose coordinates in the first chart are $x(p)=(1,0,0,0)$, it gives $x'(p)=M^{-1}(1,0,0,0)=(\cosh r,-\sinh r,0,0)$ by the inverse computed in step 1.3. This completes the worked computation of the transition and its two displayed values. [step 1.1, step 1.3, L1, L2, algebra] ∎

---
id: lem-gr-fx-kerr-vacuum-verification
kind: lemma
title: "Kerr exterior vacuum verification"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "A local tensor identity for the specified metric; it does not assert that arbitrary stationary vacuum data are Kerr or that this metric describes nature."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-kerr-exterior
  - lem-gr-fx-kerr-exterior-properties
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-inverse-metric-and-musical-isomorphisms
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - def-countable-choice
dependency_roles:
  def-gr-fx-kerr-exterior: mathematical-premise
  lem-gr-fx-kerr-exterior-properties: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §7.3, PDF pp. 95-96; cited only for context, not as the local Ricci calculation"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
    - title: "M. Visser, The Kerr spacetime: A brief introduction, introductory book chapter, arXiv:0706.0622v3 (2008), §4, PDF p. 12, Ricci-calculation discussion"
      url: "https://arxiv.org/pdf/0706.0622"
verification:
  precheck: pending
---

## Statement

For the specified Kerr exterior metric $g$, with $M>0$, $|a|<M$, and
$r>r_+$, the Ricci tensor of its metric-selected connection vanishes:
$\operatorname{Ric}(g)=0$. This is a local geometric identity on the entire
subextremal exterior, including the rotation axis by smooth extension.

## Facts & Assumptions

**Given:** The subextremal Kerr exterior metric, its metric-selected
connection, and the curvature sign convention of the GR geometry library.

[F1] [[def-gr-fx-kerr-exterior]]: $\Sigma=r^2+a^2\cos^2\theta$, $\Delta=r^2-2Mr+a^2$, and the polar-chart components are $g_{tt}=-(1-2Mr/\Sigma)$, $g_{t\phi}=-2Mar\sin^2\theta/\Sigma$, $g_{rr}=\Sigma/\Delta$, $g_{\theta\theta}=\Sigma$, and $g_{\phi\phi}=\sin^2\theta[(r^2+a^2)^2-a^2\Delta\sin^2\theta]/\Sigma$.

[F2] [[lem-gr-fx-kerr-exterior-properties]]: $g$ is a smooth Lorentzian metric, and $\Sigma,\Delta$ are strictly positive on the exterior.

[F3] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: $\Gamma^a{}_{bc}=\frac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ for the unique metric-selected connection.

[F4] [[def-gr-curvature-tensor-and-derived-tensors]]: $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$, and $\operatorname{Ric}_{bd}=R^a{}_{bad}$.

[F5] [[thm-gr-curvature-tensoriality-and-coordinate-formula]]: $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$.

[A1] The tangent-bundle convention in [F2]-[F3] uses only countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Proof

1.1 Work first on a polar chart with $0<\theta<\pi$ and change angular coordinate to $u=\cos\theta$. Put $q=1-u^2$, $S=r^2+a^2u^2$, $D=r^2-2Mr+a^2$, and $A=r^2+a^2$. In coordinate order $(t,\phi,r,u)$ the metric is block diagonal between $(t,\phi)$ and $(r,u)$: $g=G\oplus h$, where $G=S^{-1}\begin{pmatrix}2Mr-S&-2Marq\\-2Marq&q(A^2-a^2Dq)\end{pmatrix}$ and $h=\operatorname{diag}(S/D,S/q)$. Direct $2\times2$ inversion gives $G^{-1}=\begin{pmatrix}-(A^2-a^2Dq)/(SD)&-2Mar/(SD)\\-2Mar/(SD)&(D-a^2q)/(SDq)\end{pmatrix}$, with $\det G=-Dq$; the inverse base block is $h^{-1}=\operatorname{diag}(D/S,q/S)$. [F1, F2, algebra]

1.2 The derivatives needed below are $S_r=2r$, $S_u=2a^2u$, $S_{rr}=2$, $S_{ru}=0$, $S_{uu}=2a^2$, $D_r=2(r-M)$, $D_{rr}=2$, $q_u=-2u$, and $q_{uu}=-2$. On this chart $S,D,q>0$, so every denominator in the metric and inverse block is nonzero. [F1, F2, algebra]

2.1 Write Greek indices $\alpha,\beta,\gamma$ for $t,\phi$ and Latin indices $i,j,k,\ell$ for $r,u$. Since $G,h$ are independent of $t,\phi$, the complete nonzero Christoffel families from [F3] are $$\Gamma^\alpha{}_{\beta i}=\Gamma^\alpha{}_{i\beta}=\frac12(G^{-1})^{\alpha\gamma}\partial_iG_{\gamma\beta},\qquad \Gamma^i{}_{\alpha\beta}=-\frac12(h^{-1})^{ij}\partial_jG_{\alpha\beta},\qquad \Gamma^i{}_{jk}=\frac12(h^{-1})^{i\ell}(\partial_jh_{\ell k}+\partial_kh_{\ell j}-\partial_\ell h_{jk});$$ all families not forced by lower-index symmetry vanish. The six base coefficients, making the last family explicit, are $$\Gamma^r{}_{rr}=\frac rS-\frac{r-M}{D},\quad \Gamma^r{}_{ru}=\frac{a^2u}{S},\quad \Gamma^r{}_{uu}=-\frac{Dr}{Sq},\quad \Gamma^u{}_{rr}=-\frac{a^2uq}{SD},\quad \Gamma^u{}_{ru}=\frac rS,\quad \Gamma^u{}_{uu}=\frac{a^2u}{S}+\frac uq.$$ Thus the first two matrix families are fully specified by the displayed $G,G^{-1},h^{-1}$ and their $r,u$ derivatives, rather than by omitted connection coefficients. [F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 Put $W_r:=(r-M)/D$, $W_u:=-u/q$, and $P_i:=G^{-1}\partial_iG$. The determinant identity $\partial_i\det G=(\det G)\operatorname{tr}(G^{-1}\partial_iG)$ and $\det G=-Dq$ give $\Gamma^\alpha{}_{\alpha i}=W_i$ after summing $\alpha$. Also $\sqrt{|\det G\det h|}=S$. In the $\alpha\beta$ contraction, $\partial_i\Gamma^i{}_{\alpha\beta}+\Gamma^c{}_{ci}\Gamma^i{}_{\alpha\beta}$ combines to the displayed divergence term, while the two mixed-block quadratic-Christoffel terms combine to the displayed matrix product. The $ij$ contraction leaves $\operatorname{Ric}(h)_{ij}$, the derivative and trace terms shown below; mixed components vanish because the metric blocks are independent of $t,\phi$. Thus the signed curvature formula [F5], contracted by $\operatorname{Ric}_{bd}=R^a{}_{bad}$ from [F4], gives $$\operatorname{Ric}_{\alpha\beta}=-\frac1{2S}\partial_i\!\left(S h^{ij}\partial_jG_{\alpha\beta}\right)+\frac12h^{ij}\left(\partial_iG\,G^{-1}\partial_jG\right)_{\alpha\beta},\qquad \operatorname{Ric}_{\alpha i}=0,$$ $$\operatorname{Ric}_{ij}=\operatorname{Ric}(h)_{ij}-\partial_iW_j+\Gamma^k{}_{ij}W_k-\frac14\operatorname{tr}(P_iP_j).$$ Here $\det G=-Dq$ and $\det h=S^2/(Dq)$, so the volume factor in the first formula is $\sqrt{|\det G\det h|}=S$. For the base block, substitution of the six coefficients in step 2.1 gives $$\operatorname{Ric}(h)_{ij}=\frac{Mr(3a^2u^2-r^2)}{S^3}h_{ij}.$$ The remaining base terms cancel componentwise. For $(i,j)=(r,r)$, put $P_{rr}=M^2a^2u^2+3M^2r^2-2Ma^2ru^2-Ma^2r-3Mr^3+a^2r^2u^2+r^4$ and $Q_{rr}=M^2a^4u^4-2M^2a^2r^2u^2+5M^2r^4-2Ma^4ru^4+2Ma^4ru^2-2Ma^2r^3u^2-2Ma^2r^3-4Mr^5+a^4r^2u^4+2a^2r^4u^2+r^6$. The common numerator of $\operatorname{Ric}_{rr}$ over $S^2D^2$ is $Mr(3a^2u^2-r^2)D+SP_{rr}-Q_{rr}=0$. For $(r,u)$, the Hessian and trace terms are respectively $-uB/((u^2-1)SD)$ and $uB/((u^2-1)SD)$, where $B=-Ma^2u^2+Ma^2-2Mr^2+a^2ru^2+r^3$, and $\operatorname{Ric}(h)_{ru}=0$. For $(u,u)$, put $P_{uu}=-Mru^2+Mr+a^2u^4+r^2u^2$ and $Q_{uu}=u^2(-4Ma^2ru^2+4Ma^2r+a^4u^4+2a^2r^2u^2+r^4)$. The common numerator of $\operatorname{Ric}_{uu}$ over $q^2S^2$ is $Mr(3a^2u^2-r^2)q+P_{uu}qS-Q_{uu}=0$. Each polynomial identity follows by expanding $S=r^2+a^2u^2$, $D=r^2-2Mr+a^2$, and $q=1-u^2$; the signed formula retains both derivative and both quadratic-connection contributions. [F1, F3, F4, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 In the fiber block, insert the explicit matrices $G,G^{-1},h^{-1}$ from step 1.1 into the first formula of step 3.1. Its three independent entries reduce to $$\operatorname{Ric}_{tt}=0,\qquad \operatorname{Ric}_{t\phi}=0,\qquad \operatorname{Ric}_{\phi\phi}=0.$$ This is the full $2\times2$ fiber block; the remaining three base entries vanish by the component cancellations in step 3.1 and the two mixed entries vanish by that formula. Hence the entire polar-chart Ricci matrix is zero, with no scalar-curvature shortcut. [F1, F3, F4, F5, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 The polar chart omits only the axis. By [A1] and [F2], $g$ is smooth there, and [F4]-[F5] make $\operatorname{Ric}(g)$ a smooth tensor. Since its components vanish on the dense axis-avoiding set by step 4.1, continuity makes $\operatorname{Ric}(g)$ vanish on the axis as well. [A1, F2, F4, F5, step 4.1, algebra]

6.1 Thus $\operatorname{Ric}(g)=0$ at every point with $r>r_+$. The calculation proves a tensor identity for this specified metric; no Einstein field equation or classification of other metrics was used. [given, step 5.1] ∎


## Remarks

The source literature identifies Kerr as a vacuum solution, but the proof above
does not take that identification as a substitute for the signed Ricci
calculation. In particular, scalar-curvature vanishing alone would not imply
this lemma.

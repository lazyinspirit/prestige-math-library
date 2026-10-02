---
id: cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth
kind: corollary
title: Complete noncompact manifolds with nonnegative ricci curvature have at most euclidean volume growth
status: draft
origin: pipeline
deps:
  - cor-bishop-volume-upper-bound
  - def-model-space-radial-area-and-ball-volume
  - def-countable-choice
  - def-comparison-sine-cosine-and-cotangent-functions
  - thm-ftc-second-part
  - lem-derivative-of-a-power
  - thm-continuous-implies-integrable
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§27.2 and 28.1, pp.200–209: the Bishop–Gromov upper bound and the flat model volume"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: the volume-density quotient and the flat comparison volume"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, noncompact, boundaryless Riemannian manifold of dimension
$n\ge2$ whose Ricci curvature satisfies $\operatorname{Ric}\ge0$, let
$p\in M$, and let $B(p,r)=\{q\in M:d_g(p,q)<r\}$ be the open metric ball.
Then
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)\le\frac{\omega_{n-1}r^n}{n}\qquad\text{for every }r>0,$$
where $\omega_{n-1}$ is the total surface measure of the unit sphere
$S^{n-1}\subseteq\mathbb R^n$ of
[[def-model-space-radial-area-and-ball-volume]]. In other words, a complete
noncompact manifold of nonnegative Ricci curvature has at most Euclidean
volume growth. Neither compactness nor noncompactness enters the inequality
itself: the noncompactness in the hypothesis records the situation to which
the growth statement is applied, and the bound holds for every complete,
connected, boundaryless manifold of dimension $n\ge2$ with
$\operatorname{Ric}\ge0$. No choice beyond the inherited
$\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, noncompact Riemannian manifold $(M,g)$ of dimension $n\ge2$ with $\operatorname{Ric}\ge0$; a point $p\in M$; the ball volume $\operatorname{vol}_g(B(p,r))$; and the model functions $\operatorname{sn}_0$, $A_0$, $V_0$ and $V^\star_0$ of the flat model.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the Bishop–Gromov comparison and the model-volume interface cited below; no further selection is made.

[F1] Bishop volume upper bound ([[cor-bishop-volume-upper-bound]]): if $(M,g)$ is complete, connected and boundaryless of dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$ for a real number $k$, then $\operatorname{vol}_g(B(p,r))\le V^\star_k(r)$ for every $r>0$. No compactness of $M$ is assumed.

[F2] Flat model volumes ([[def-model-space-radial-area-and-ball-volume]], [[def-comparison-sine-cosine-and-cotangent-functions]]): the comparison sine is $\operatorname{sn}_0(t)=t$, the model radial area is $A_0(t)=\omega_{n-1}\operatorname{sn}_0(t)^{n-1}=\omega_{n-1}t^{n-1}$, the model ball volume is $V_0(r)=\int_0^rA_0(t)\,dt$, and for $k=0$ the saturated model volume of [F1] is $V^\star_0(r)=V_0(r)$ for every $r\ge0$.

[F3] Power integral ([[thm-ftc-second-part]], [[lem-derivative-of-a-power]], [[thm-continuous-implies-integrable]]): for every integer $m\ge0$ and every $0\le s\le r$, $$\int_s^rt^m\,dt=\frac{r^{m+1}-s^{m+1}}{m+1},$$ because $t\mapsto t^{m+1}/(m+1)$ has derivative $t^m$ and $t^m$ is continuous, hence integrable, on $[s,r]$.

## Proof

**Proof technique:** direct: specialise the Bishop upper bound to $k=0$, where $\operatorname{Ric}\ge0=(n-1)\cdot0\cdot g$, and evaluate the integral defining the flat model volume.

1.1 The Bishop bound with $k=0$. [F1, F2, given]
The Ricci hypothesis $\operatorname{Ric}\ge0$ is exactly $\operatorname{Ric}\ge(n-1)k\,g$ for $k=0$, and $(M,g)$ is complete, connected and boundaryless of dimension $n\ge2$. Hence [F1] with $k=0$ gives $$\operatorname{vol}_g\bigl(B(p,r)\bigr)\le V^\star_0(r)\qquad(r>0),$$ and by [F2] the flat saturated model volume is the integral $$V^\star_0(r)=V_0(r)=\int_0^rA_0(t)\,dt=\omega_{n-1}\int_0^rt^{n-1}\,dt .$$ [F1, F2, given]

2.1 Evaluation and conclusion. [F2, F3, step 1.1]
The power integral [F3] with $m=n-1\ge1$ and $s=0$ gives $\int_0^rt^{n-1}dt=r^n/n$. Substituting into step 1.1 yields $$\operatorname{vol}_g\bigl(B(p,r)\bigr)\le V^\star_0(r)=\frac{\omega_{n-1}r^n}{n},\qquad r>0,$$ which is the asserted Euclidean-growth bound. Two boundary conventions should be noted: the value $r=0$ is excluded, where $B(p,0)=\varnothing$ and $V_0(0)=0$; and the dimension hypothesis $n\ge2$ makes the exponent $n-1\ge1$, so the integrand is the continuous monomial $t^{n-1}$ of [F3]. The noncompactness hypothesis is not used in the argument, so the bound also holds in the compact case. The comparison parameter $k=0$ is supplied directly by $\operatorname{Ric}\ge0$; no positive uniform Ricci lower bound is assumed. No direction, ball, chart or family is selected anywhere: the argument is the single specialisation $k=0$ of [F1] together with an explicit integral, and the only choice principle used is the inherited [A1]. [F2, F3, step 1.1] ∎

## Source locator

Datar §§27.2 and 28.1, pp.200–209, and Eschenburg §§4–5, pp.15–20, give the Bishop–Gromov upper bound by the model ball volume; the flat model volume is the integral of $\omega_{n-1}t^{n-1}$, namely $\omega_{n-1}r^n/n$. The content of this corollary is that specialisation, together with the observation that the inequality itself does not use noncompactness.

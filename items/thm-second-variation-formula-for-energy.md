---
id: thm-second-variation-formula-for-energy
kind: theorem
title: Second variation formula for energy
status: published
origin: pipeline
deps:
  - lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation
  - thm-first-variation-formula-for-energy
  - def-smooth-variation-and-variation-field-of-a-curve
  - def-energy-of-a-piecewise-smooth-curve
  - def-covariant-derivative-along-a-curve
  - def-levi-civita-connection
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - def-riemann-curvature-four-tensor
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Theorem 10.12"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Theorem 10.12, printed pp.185-186 (PDF labels P201-202); length formula for proper unit-speed variations
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025), Theorem 21.1.2"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Theorem 21.1.2, printed pp.154-155 (PDF labels P161-162); energy formula for proper variations
---

## Statement

Assume $\mathrm{AC}_\omega$ through the declared dependencies, as required by
[[thm-algebraic-symmetries-of-the-riemann-tensor]]. Let $a<b$ and let
$$F:(-\varepsilon,\varepsilon)^2\times[a,b]\longrightarrow M$$
be continuous and smooth in $(s,r)$, and smooth on each strip of one common
finite subdivision $a=t_0<\cdots<t_m=b$, with smooth parameter derivatives at
the seams. Suppose the central curve
$\gamma(t)=F(0,0,t)$ is an affinely parametrized geodesic. Put
$$E(s,r)=\frac12\sum_{k=1}^m\int_{t_{k-1}}^{t_k}|\partial_tF(s,r,t)|_g^2\,dt,$$
and at $(s,r)=(0,0)$ write
$V=\partial_sF$, $W=\partial_rF$, and $T=\dot\gamma$. Then
$$\left.\partial_s\partial_r E(s,r)\right|_{(0,0)}=\int_a^b\bigl(g(D_tV,D_tW)-g(R(V,T)T,W)\bigr)\,dt+\left[g(D_sW,T)\right]_a^b.$$
Here $[h]_a^b=h(b)-h(a)$, and $D_sW$ is the covariant mixed acceleration at
the outer endpoint. The curvature convention is
$$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z.$$

Equivalently, integrating the derivative-product term by parts on each
subinterval gives the full jump form
$$\left[g(D_sW,T)\right]_a^b+\left[g(D_tV,W)\right]_a^b-\sum_{j=1}^{m-1}g(\Delta_jD_tV,W(t_j))-\int_a^b g(D_t^2V+R(V,T)T,W)\,dt,$$
where $\Delta_jD_tV=(D_tV)(t_j^+)-(D_tV)(t_j^-)$. Thus the corner term is
present in the integrated form; it cancels with the corresponding jump created
when that form is integrated back to the derivative-product expression. If
the endpoints are fixed for every $(s,r)$, then $D_sW(a)=D_sW(b)=0$, so the
acceleration boundary term vanishes; also $W(a)=W(b)=0$ in the integrated
form.

## Facts & Assumptions

**Given:** The variation, its common finite subdivision, the Levi-Civita
connection, and the energy convention above.

[A1] $\mathrm{AC}_\omega$ is required here through
[[def-countable-choice]] and the declared algebraic-symmetry dependency; its
local use is to supply pair interchange for the curvature bilinear form. The
remaining differentiation and integration use no choice.

[F1] Energy is the half-integral of squared speed, summed over the supplied
finite subdivision, by [[def-energy-of-a-piecewise-smooth-curve]].

[F2] A piecewise smooth variation is smooth on every strip of one common
finite subdivision and has a continuous variation field, by
[[def-smooth-variation-and-variation-field-of-a-curve]].

[F3] The first variation of energy includes the outer endpoint terms, the
internal corner jumps, and the integral against $D_tT$, by
[[thm-first-variation-formula-for-energy]].

[F4] Variation covariant derivatives satisfy
$D_sD_tU-D_tD_sU=R(F_s,F_t)U$ by
[[lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation]].

[F5] The Levi-Civita connection is torsion free, so covariant derivatives of
the two parameter directions commute; in particular $D_sT=D_tV$ and
$D_sW=D_rV$, by [[def-levi-civita-connection]].

[F6] The Riemannian curvature tensor is skew in each pair and invariant under
pair interchange, by [[thm-algebraic-symmetries-of-the-riemann-tensor]].

[F9] The four-tensor is defined by
$\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$, by
[[def-riemann-curvature-four-tensor]].

[F7] $D_t$ is covariant differentiation along the curve, by
[[def-covariant-derivative-along-a-curve]].

[F8] A continuous parameter derivative of the scalar integrand passes through
each compact-interval Riemann integral by
[[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]].

## Proof

**Proof technique:** Differentiate the full first-variation formula and then
integrate by parts piecewise.

1.1 Fix $s$ and apply [F3] to the $r$-variation $t\mapsto F(s,r,t)$ at $r=0$. [F1, F2, F3, F7]
With $T_s=\partial_tF(s,0,\cdot)$ and $W_s=\partial_rF(s,0,\cdot)$ this gives
$$\partial_rE(s,0)=g(W_s(b),T_s(b^-))-g(W_s(a),T_s(a^+))-\sum_{j=1}^{m-1}g(W_s(t_j),\Delta_jT_s)-\sum_{k=1}^m\int_{t_{k-1}}^{t_k}g(W_s,D_tT_s)\,dt.$$
The energy normalization in [F1] is the one used in this first variation.

2.1 Differentiate this identity in $s$ at zero. [F2, F3, F5, F7, F8, step 1.1]
Since the central path is a
smooth affine geodesic, $D_tT=0$ on every strip and $\Delta_jT=0$ at each seam.
The derivative therefore reduces to
$$\left[g(D_sW,T)+g(W,D_sT)\right]_a^b-\sum_{j=1}^{m-1}g(W(t_j),\Delta_jD_sT)-\sum_{k=1}^m\int_{t_{k-1}}^{t_k}g(W,D_sD_tT)\,dt.$$
The differentiation-under-the-integral result [F8] applies on each compact
strip. Torsion freeness gives $D_sT=D_tV$ on each strip: in target coordinates
the difference is the mixed-partial difference plus
$\Gamma^k{}_{ij}(F_s^iF_t^j-F_t^iF_s^j)$, both zero by equality of mixed
partials and symmetry of the Levi-Civita symbols. Parameter smoothness makes
$W$ continuous at every seam.

3.1 Apply [F4] to the field $T$ along the $(s,t)$ parameter surface and substitute into [2.1]. [F3, F4, F5, F7, step 2.1]
$$D_sD_tT=D_tD_sT+R(V,T)T=D_t^2V+R(V,T)T.$$
This yields the piecewise integrated form
$$\left[g(D_sW,T)+g(D_tV,W)\right]_a^b-\sum_{j=1}^{m-1}g(W(t_j),\Delta_jD_tV)-\int_a^b g(D_t^2V+R(V,T)T,W)\,dt.$$
The jump is right trace minus left trace, exactly as in [F3].

4.1 Integrating $-g(W,D_t^2V)$ by parts on every strip gives the identity below. [F2, F3, F7, step 3.1]
$$-\int_a^b g(W,D_t^2V)\,dt=-\left[g(W,D_tV)\right]_a^b+\sum_{j=1}^{m-1}g(W(t_j),\Delta_jD_tV)+\int_a^b g(D_tW,D_tV)\,dt.$$
The interior jump terms in [3.1] cancel these seam terms, and its
$[g(D_tV,W)]_a^b$ cancels the displayed outer derivative term. What remains is
the stated half-energy second-variation formula, including the mixed
acceleration $[g(D_sW,T)]_a^b$. The same calculation proves the equivalent
corner form in the Statement.

5.1 The curvature term and endpoint acceleration are symmetric under exchanging the two variation directions. [F5, F6, F9, step 2.1, step 4.1]
For $V,W$ as curvature inputs, $$g(R(V,T)T,W)=\operatorname{Rm}(V,T,T,W)=\operatorname{Rm}(W,T,T,V)=g(R(W,T)T,V)$$ by [F9] and pair interchange and the two pair skews in [F6]. The same coordinate
calculation as in step 2.1, now in the $s,r$ directions, gives $D_sW=D_rV$
by [F5]. Thus both the curvature term and the endpoint acceleration are
symmetric; the derivative-product term in step 4.1 is symmetric by symmetry
of $g$.

6.1 The endpoint, corner, dimension, and choice cases are as follows. [A1, F2, F3, F5, F6, F7, step 3.1, step 4.1, step 5.1]
If endpoints are fixed, $W(a)=W(b)=0$ for all parameters, hence
$D_sW(a)=D_sW(b)=0$ and the acceleration term vanishes; the integrated-form
endpoint term vanishes as well. For moving endpoints retain the acceleration
term. With a piecewise smooth variation the jump in [3.1] is required in the
integrated form, while [4.1] shows why no separate seam term remains in the
derivative-product formula. If $\gamma$ is constant, $T=0$ and the curvature
and acceleration terms vanish, but the integral of $g(D_tV,D_tW)$ need not
vanish. In dimension zero all variation fields vanish; in dimension one the
curvature term vanishes by first-pair skewness. The empty manifold admits no
given variation, and $a=b$ is excluded because the covariant derivative
convention needs a nondegenerate interval. If one first-variation field is
zero, the bulk and curvature terms vanish, but a moving-endpoint mixed
acceleration may remain; under fixed endpoints it is zero. The exact choice
assumption is [A1], through the declared algebraic-symmetry dependency, with no full AC or
additional choice. The claim is an equality, not a biconditional.
$\square$

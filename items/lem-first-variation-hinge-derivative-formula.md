---
id: lem-first-variation-hinge-derivative-formula
kind: lemma
title: First-variation hinge derivative formula
status: published
origin: pipeline
deps:
  - thm-first-variation-formula-for-length
  - thm-distance-from-p-is-smooth-off-p-and-the-cut-locus
  - prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus
  - prop-gradient-hessian-and-divergence-connection-formulas
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§6, pp.21–25: the first-variation computation of the derivative of a shortest geodesic to a moving endpoint, in the proof of Corollary 6.3"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$, carried
through the distance and first-variation suppliers named below. Let $(M,g)$ be
a complete, connected, boundaryless Riemannian manifold.

**(a) Smooth family form.** Let $\varepsilon>0$, $L>0$, and let
$\alpha:(-\varepsilon,\varepsilon)\times[0,L]\to M$ be smooth with each
$t\mapsto\alpha(s,t)$ an affinely parametrized geodesic whose velocity
$\partial_t\alpha(s,\cdot)$ never vanishes. Write $\gamma(t):=\alpha(0,t)$,
$V:=\partial_s\alpha(0,\cdot)$ and let $u(t)$ be the unit tangent of $\gamma$.
Then $s\mapsto L(s):=\operatorname{Length}(\alpha(s,\cdot))$ is differentiable
at $0$ and
$$L'(0)=g_{M}(V(L),u(L))-g_{M}(V(0),u(0)).$$
If moreover each member $\alpha(s,\cdot)$ is minimizing between its own
endpoints $x(s):=\alpha(s,0)$ and $y(s):=\alpha(s,L)$, then
$L(s)=d_g(x(s),y(s))$ for all $s$, so the same formula is the derivative of the
distance between the two moving endpoints.

**(b) Hinge form.** Let $o,p\in M$ with $p\neq o$ and $p$ not a cut point of
$o$, let $\sigma:[0,\rho]\to M$ be the unit-speed minimizing geodesic from $o$
to $p$ (so $\sigma(0)=o$, $\sigma(\rho)=p$, $\rho>0$), and let
$\gamma:[0,a]\to M$, $a>0$, be a unit-speed geodesic with $\gamma(0)=p$. Then
$t\mapsto d_g(o,\gamma(t))$ has a right derivative at $0$ and
$$\left.\frac{d}{dt}\right|_{0^+}d_g(o,\gamma(t))=g_p(\dot\gamma(0),\dot\sigma(\rho))=-\cos\theta,$$
where $\theta\in[0,\pi]$ is the angle at the hinge vertex $p$ between the two
legs, characterized by $\cos\theta:=-g_p(\dot\sigma(\rho),\dot\gamma(0))$ (the
legs are unit speed, so $-\dot\sigma(\rho)$ is the unit direction from $p$ back
to $o$ and $\dot\gamma(0)$ the unit direction from $p$ along the other leg).

## Facts & Assumptions

**Given:** The complete connected boundaryless Riemannian manifold $(M,g)$, the smooth family $\alpha$ of part (a) with its geodesics and moving endpoints, and the hinge configuration $(o,p,\sigma,\gamma)$ of part (b) with $p\notin \operatorname{Cut}(o)$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ of the distance and first-variation suppliers used below ([[def-countable-choice]]); the computations add no selection.

[F1] First variation of length: for a piecewise smooth variation $\alpha:(-\varepsilon,\varepsilon)\times[a,b]\to M$ with regular central curve $\gamma=\alpha(0,\cdot)$, unit tangent $U=T/|T|$ on each smooth piece and variation field $V=\partial_s\alpha(0,\cdot)$, $$\left.\frac{d}{ds}\right|_{s=0}L(\gamma_s)=g(V(b),U(b^-))-g(V(a),U(a^+))-\sum_jg(V(t_j),U(t_j^+)-U(t_j^-))-\sum_j\int_{t_{j-1}}^{t_j}g(V,D_tU)\,dt$$ with the corner sum empty for a smooth variation ([[thm-first-variation-formula-for-length]]).

[F2] The distance function $r_o:=d_g(o,\cdot)$ is smooth on the open set $M\setminus(\{o\}\cup\operatorname{Cut}(o))$, which contains $p$ ([[thm-distance-from-p-is-smooth-off-p-and-the-cut-locus]]).

[F3] At a point $q=\sigma(\rho)$ before the cut time of the radial direction, $\operatorname{grad}r_o(q)=\dot\sigma(\rho)$ is the outward unit radial field ([[prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus]]).

[F4] The gradient is the metric dual of the differential: for smooth $f$, $\operatorname{grad}f=(df)^\sharp$, so for a smooth curve $t\mapsto x(t)$, $\frac{d}{dt}f(x(t))=g(\operatorname{grad}f(x(t)),\dot x(t))$ ([[prop-gradient-hessian-and-divergence-connection-formulas]]).

## Proof

1.1 The smooth family form. [F1, given]
Apply [F1] to the variation $\alpha$ on the fixed interval $[0,L]$, which is smooth and hence has no corner terms. The central curve $\gamma=\alpha(0,\cdot)$ is an affinely parametrized geodesic with nowhere vanishing velocity, so $D_t\dot\gamma=0$ and $|\dot\gamma|$ is constant; its unit tangent $u=\dot\gamma/|\dot\gamma|$ therefore satisfies $D_tu=0$ on $[0,L]$. Hence each integrand $g(V,D_tu)$ in [F1] vanishes and the corner sum is empty, so the formula of part (a) follows. If each member is minimizing between its endpoints, then its length equals the distance of those endpoints, which is the stated interpretation. [F1, given]

1.2 The hinge setting and the smooth locus. [F2, given]
Since $p\notin(\{o\}\cup\operatorname{Cut}(o))$ and [F2] makes $r_o$ smooth on the open complement of that set, there is $\delta>0$ with $\gamma(t)\notin\{o\}\cup\operatorname{Cut}(o)$ for every $t\in[0,\delta]$ (the curve $\gamma$ is continuous at $t=0$ with $\gamma(0)=p$). On $[0,\delta]$ the composition $t\mapsto r_o(\gamma(t))=d_g(o,\gamma(t))$ is smooth, hence its right derivative at $0$ exists and equals the ordinary derivative at $0$ of the restriction to $[0,\delta]$. [F2, given]

1.3 The gradient at the terminal point. [F3, given]
The segment $\sigma|_{[0,\rho]}$ is the minimizing radial segment from $o$ to $p$ in the unit direction $\dot\sigma(0)$, and $\rho>0$; by [F3] its terminal velocity is the unit radial gradient, $\operatorname{grad}r_o(p)=\dot\sigma(\rho)$ and $|\dot\sigma(\rho)|=1$. [F3, given]

2.1 Chain rule at the vertex. [F3, F4, step 1.2, step 1.3]
By [F4] applied to $f=r_o$ and the curve $\gamma$ on $[0,\delta]$, $$\frac{d}{dt}d_g(o,\gamma(t))=g_{\gamma(t)}\bigl(\operatorname{grad}r_o(\gamma(t)),\dot\gamma(t)\bigr)$$ for $t\in(0,\delta]$, and evaluating the right-hand side at $t=0$ by continuity with step 1.3 gives $$\left.\frac{d}{dt}\right|_{0^+}d_g(o,\gamma(t))=g_p(\dot\sigma(\rho),\dot\gamma(0))=g_p(\dot\gamma(0),\dot\sigma(\rho)),$$ the metric being symmetric. [F3, F4, step 1.2, step 1.3]

3.1 Identification with the included angle. [step 2.1]
Both legs are unit speed, so $-\dot\sigma(\rho)$ and $\dot\gamma(0)$ are unit vectors; the angle $\theta\in[0,\pi]$ at the vertex between the direction back along the first leg and the direction along the second leg is defined by $\cos\theta=g_p(-\dot\sigma(\rho),\dot\gamma(0))=-g_p(\dot\sigma(\rho),\dot\gamma(0))$. Step 2.1 therefore reads $\frac{d}{dt}\big|_{0^+}d_g(o,\gamma(t))=-g_p(-\dot\sigma(\rho),\dot\gamma(0))=-\cos\theta$, which is the formula of part (b). Since the metric is positive definite, $|g_p(\dot\sigma(\rho),\dot\gamma(0))|\le1$, so the derivative lies in $[-1,1]$. This proves both parts. [step 2.1]

4.1 Boundary and choice audit.
The hypotheses $L>0$ and "velocity never vanishes" are exactly the regularity requirement of [F1]; $a>0$ and $\rho>0$ keep both legs nondegenerate, and $p\neq o$ with $p\notin\operatorname{Cut}(o)$ is exactly what makes $r_o$ smooth at $p$ in step 2.1 and the radial segment $\sigma$ minimizing in step 1.3. For $t=0$ the derivative is one-sided, as stated. In dimension one the hinge angle is $0$ or $\pi$ and the formula reads $\mp1$, consistent with the fact that the opposite-side distance is locally the sum or difference of lengths. No step divides by the hinge angle or by the length of the second leg, and no minimality of $\gamma$ is used. Exactly [A1] is inherited; no family is selected at any step.
[A1, F1, F2, F3, F4, step 1.1, step 3.1] ∎

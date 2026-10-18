---
id: ex-fas-bifurcation-shrinks-contraction-ball
kind: example
title: "The certified FAS contraction radius shrinks at a pitchfork"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - alg-fas-two-grid-cycle
  - thm-fas-local-contraction-under-derivative-bound
  - thm-mean-value-inequality-for-total-derivatives
  - lem-fas-second-derivative-of-composed-cycle-map
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For $F_\mu(x,y)=(\mu x+x^3,y)$ with zero right side, use the coarse space
spanned by $(0,1)^{\mathsf T}$, iterate and residual restriction
$I(x,y)=R(x,y)=y$, coarse residual $F_H(v)=v$, and one pre- and one
post-sweep $S_\mu(x,y)=(x-\tfrac12(\mu x+x^3),y/2)$. The exact-branch FAS
cycle has root $(0,0)$ and derivative norm
$$q_\mu=(1-\mu/2)^2\qquad(0<\mu\le1).$$
For each such $\mu$, the local theorem certifies radius
$r_\mu=\sqrt{\mu/100}$, which tends to zero as the pitchfork parameter
approaches $0$.

## Facts & Assumptions

**Given:** $0<\mu\le1$, the two-dimensional fine residual, zero right side, the stated transfers and coarse residual, one pre/post smoother, exact coarse solve, and exact arithmetic.

[F1] [[alg-fas-two-grid-cycle]]: the coarse target is $F_H(Iu)+R(-F_\mu(u))$ and the correction is $u+P(v-Iu)$.

[F2] [[thm-fas-local-contraction-under-derivative-bound]]: if the actual exact-branch cycle has root derivative norm $q$, derivative-Lipschitz constant $L$ on a radius-$r$ ball, and $q+Lr/2<1$, then its iterates converge to the root from that ball.

[F3] [[thm-mean-value-inequality-for-total-derivatives]]: a uniform derivative bound on a convex open set gives a Lipschitz bound there.

[F4] [[lem-fas-second-derivative-of-composed-cycle-map]]: applying the second-derivative composition formula with identity middle map gives $(s_\mu\circ s_\mu)''=s_\mu''(s_\mu)(s_\mu')^2+s_\mu'(s_\mu)s_\mu''$.

## Example

**Given:** The scalar function $s_\mu(x)=(1-\mu/2)x-x^3/2$, the radius $r_\mu=\sqrt{\mu/100}$, and the exact coarse branch.

## Verification

1.1 Let $P(v)=(0,v)^{\mathsf T}$. For any pre-smoothed $(x,y)$, [F1] gives $g_H=F_H(y)+R(-F_\mu(x,y))=y-y=0.$ The exact coarse solution is $v=0$, so prolonging $v-I(x,y)=-y$ sets the second fine coordinate to zero. The following post-sweep leaves it zero. Hence the actual cycle map is $E_\mu(x,y)=(s_\mu(s_\mu(x)),0).$ [F1, given, algebra]

1.2 Write $a=1-\mu/2$ and $r=r_\mu\le0.1$. For $|x|\le r$, $|s_\mu(x)|\le r+\tfrac12r^3\le1.005r,\quad |s_\mu'(x)|\le1.015,\quad |s_\mu'(s_\mu(x))|\le1.02,$ and $|s_\mu''(x)|\le3r$, $|s_\mu''(s_\mu(x))|\le3.015r$. By [F4], $(s_\mu\circ s_\mu)''=s_\mu''(s_\mu)(s_\mu')^2+s_\mu'(s_\mu)s_\mu''$, so these bounds give $|(s_\mu\circ s_\mu)''(x)|<7r$. The derivative matrix of $E_\mu$ is $\operatorname{diag}((s_\mu\circ s_\mu)'(x),0)$, so [F3] gives $\|DE_\mu(z)-DE_\mu(z')\|_{\rm op}\le7r\|z-z'\|_2$ on the ball. [given, F3, F4, algebra]

2.1 Since $F_\mu(x,y)=0$ implies $y=0$ and $x(\mu+x^2)=0$, for $\mu>0$ the unique fine root is $(0,0)$. Also $s_\mu'(0)=1-\mu/2$, so differentiating the two sweeps gives $DE_\mu(0,0)=\begin{pmatrix}(1-\mu/2)^2&0\\0&0\end{pmatrix},\qquad q_\mu=(1-\mu/2)^2.$ [given, step 1.1, algebra]

3.1 With $r^2=\mu/100$, $q_\mu+\frac{(7r)r}{2}=(1-\mu/2)^2+\frac{7\mu}{200}=1-\frac{193}{200}\mu+\frac14\mu^2\le1-\frac{143}{200}\mu<1.$ Thus [F2] applies on this ball. Its certified radius $r_\mu=\sqrt{\mu/100}$ tends to zero as $\mu\downarrow0$; at $\mu=0$, $q_0=1$ and the strict derivative hypothesis fails. For $\mu<0$, the scalar equation $\mu x+x^3=0$ has the additional roots $x=\pm\sqrt{-\mu}$, which is the pitchfork bifurcation. [F2, step 2.1, step 1.2, algebra] ∎

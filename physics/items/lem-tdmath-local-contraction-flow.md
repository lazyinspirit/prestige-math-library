---
id: lem-tdmath-local-contraction-flow
kind: lemma
title: "Local flows by a contraction argument"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuous-partial-derivatives-imply-total-differentiability, thm-mean-value-inequality-for-total-derivatives, thm-continuous-implies-integrable, thm-newton-leibniz-with-interior-derivative, thm-euclidean-space-complete]
dependency_roles:
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-mean-value-inequality-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Ko Honda, Differential Geometry Course Notes, §33.1, full 84-page lecture notes"
      url: "https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf"
    - title: "Leonard Tomczak, notes for Jack Smith, Differential Geometry, §§5.1 and 6.3, full lecture notes"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/DG_Notes.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement

Let $U\subseteq\mathbb R^m$ be open, $m\ge1$, let $X:U\to\mathbb R^m$ have continuous first partial derivatives, and fix $q_0\in U$. There are $r,\delta>0$ and a map $\phi:[-\delta,\delta]\times\overline B(q_0,r/2)\to\overline B(q_0,r)$ such that for each $p\in\overline B(q_0,r/2)$, $t\mapsto\phi(t,p)$ is $C^1$, satisfies $\phi(0,p)=p$ and $\partial_t\phi(t,p)=X(\phi(t,p))$ on $(-\delta,\delta)$, and is the unique such solution that stays in $\overline B(q_0,r)$. The dependence on the initial point is locally Lipschitz, and the local flow law $\phi(t,\phi(s,p))=\phi(t+s,p)$ holds whenever the displayed maps are defined in the chosen neighborhood.

## Facts & Assumptions

**Given:** The Euclidean norm on $\mathbb R^m$, an open $U$, a vector field with continuous first partial derivatives, and $q_0\in U$.

[F1] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous partial derivatives on an open neighborhood imply total differentiability there, with derivative the Jacobian.

[F2] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open set, a uniform bound on the derivative operator norm gives the corresponding Lipschitz bound.

[F3] [[thm-continuous-implies-integrable]]: every continuous real component on a compact interval is Riemann integrable.

[F4] [[thm-newton-leibniz-with-interior-derivative]]: if a continuous function on a closed interval has a Riemann-integrable interior derivative, its integral is the endpoint increment.

[F5] [[thm-euclidean-space-complete]]: every Cauchy sequence in $\mathbb R^m$ with its Euclidean norm has a limit in $\mathbb R^m$.

## Proof

**Given:** $U,X,q_0$ as in the Statement; use the componentwise Riemann integral for continuous $\mathbb R^m$-valued functions.

1.1 By openness choose $R>0$ with $\overline B(q_0,2R)\subset U$. Continuity of $X$ and $DX$ at $q_0$ gives finite $M,L\ge0$ bounding $\|X\|$ on $\overline B(q_0,R)$ and $\|DX\|$ on $B(q_0,2R)$. By [F1] $X$ is totally differentiable there, and [F2] applied to the convex ball $B(q_0,2R)$ gives $\|X(u)-X(v)\|\le L\|u-v\|$ for $u,v\in\overline B(q_0,R)$. [given, F1, F2]

2.1 Choose $\delta>0$ with $M\delta\le R/2$ and $L\delta<1$, and let $\mathcal C:=\{\gamma\in C([-\delta,\delta],\mathbb R^m):\gamma(t)\in\overline B(q_0,R)\text{ for every }t\}$ with the supremum norm. It is complete: for a supremum-Cauchy sequence $(\gamma_k)$, [F5] gives the pointwise limit $\gamma(t)\in\mathbb R^m$; the supremum-Cauchy estimate, passed to that pointwise limit, gives uniform convergence to $\gamma$. The limit is continuous: given $\varepsilon>0$ and $t_0$, choose $k$ with $\|\gamma_k-\gamma\|_\infty<\varepsilon/3$, then continuity gives $\rho>0$ such that $\|\gamma_k(t)-\gamma_k(t_0)\|<\varepsilon/3$ whenever $|t-t_0|<\rho$; the triangle inequality yields $\|\gamma(t)-\gamma(t_0)\|<\varepsilon$. Also $\gamma(t)\in\overline B(q_0,R)$ for every $t$, since this Euclidean ball is closed and each $\gamma_k(t)$ lies in it. Thus $\gamma\in\mathcal C$. For $p\in\overline B(q_0,R/2)$ define $T_p\gamma(t):=p+\int_0^t X(\gamma(s))\,ds$. The integrand is continuous and hence integrable by [F3]. Then $T_p$ maps $\mathcal C$ into itself, since $\|T_p\gamma(t)-q_0\|\le\|p-q_0\|+M|t|\le R$, and is a contraction with constant at most $L\delta$. [step 1.1, F2, F3, F5, construct]

3.1 Starting at the constant curve $\gamma_0(t)=p$, iterate $\gamma_{k+1}=T_p\gamma_k$. If $\kappa=L\delta<1$, then $\|\gamma_{k+1}-\gamma_k\|_\infty\le\kappa^k\|\gamma_1-\gamma_0\|_\infty$; the geometric tail bound makes $(\gamma_k)$ uniformly Cauchy. Its limit $\phi(\cdot,p)\in\mathcal C$ is a fixed point by the contraction bound. Any two fixed points have distance at most $\kappa$ times that distance, so they coincide. [step 2.1, algebra, construct]

4.1 For $g(s)=X(\phi(s,p))$, continuity and [F3] make every component Riemann integrable. At an interior $t$, the difference quotient of $\phi(t,p)=p+\int_0^t g(s)\,ds$ differs from $g(t)$ by at most $\sup_{|s-t|\le|h|}\|g(s)-g(t)\|$, which tends to zero by continuity; thus $\partial_t\phi=X(\phi)$. Conversely any $C^1$ solution staying in the ball satisfies the fixed-point equation by [F4], so uniqueness of the fixed point is uniqueness of the IVP. [step 3.1, F3, F4]

4.2 If $p,p'$ lie in $\overline B(q_0,R/2)$, subtract their fixed-point equations from step 3.1 and take suprema to obtain $\|\phi(\cdot,p)-\phi(\cdot,p')\|_\infty\le\|p-p'\|+L\delta\|\phi(\cdot,p)-\phi(\cdot,p')\|_\infty$. Since $L\delta<1$, division gives the local Lipschitz estimate $(1-L\delta)^{-1}\|p-p'\|$. [step 2.1, step 3.1, F2, algebra]

5.1 Whenever the compositions remain in the chosen ball, both $t\mapsto\phi(t+s,p)$ and $t\mapsto\phi(t,\phi(s,p))$ solve the same IVP at $t=0$, with initial value $\phi(s,p)$. Uniqueness from step 4.1 gives the local flow law; setting $t=-s$ gives the local inverse relation. [step 4.1, algebra] ∎

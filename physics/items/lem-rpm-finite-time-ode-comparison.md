---
id: lem-rpm-finite-time-ode-comparison
kind: lemma
title: "Finite-time comparison of bounded vector fields"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-vector-valued-derivative-and-integral
  - thm-componentwise-limits-and-continuity
  - thm-continuous-implies-integrable
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-gronwall-integral-inequality
dependency_roles:
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
sources:
  references:
    - title: "Gautam Iyer, Brief Notes on Introduction to Differential Equations, complete ODE notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html"
      locator: "Theorem 8, Lemma 9 and Remark 10: continuous dependence between two vector fields and the Gronwall inequality. The displayed source proof is a sketch; the assigned item supplies its complete integral-equation proof."
---

## Statement

Let $n\ge1$, $T\ge0$, $U\subseteq\mathbb R^n$ be open, and $K\subseteq U$ be compact and convex. Let $F_\epsilon,F_0:[0,T]\times U\to\mathbb R^n$ be continuous. Suppose that on $[0,T]\times K$ both fields are bounded in the Euclidean norm by $B\ge0$, and that there is $L\ge0$ such that

$$\|F_0(t,z)-F_0(t,w)\|_2\le L\|z-w\|_2\qquad(t\in[0,T],\ z,w\in K).$$

Also suppose

$$\|F_\epsilon(t,z)-F_0(t,z)\|_2\le\eta\qquad(t\in[0,T],\ z\in K)$$

for some $\eta\ge0$. Let $z_\epsilon,z_0\in C^1([0,T],\mathbb R^n)$ solve $\dot z_\epsilon=F_\epsilon(t,z_\epsilon)$ and $\dot z_0=F_0(t,z_0)$, with both trajectories contained in $K$. Then, for every $t\in[0,T]$,

$$\|z_\epsilon(t)-z_0(t)\|_2\le\bigl(\|z_\epsilon(0)-z_0(0)\|_2+\eta t\bigr)e^{Lt}.$$

In particular, equal initial states give $\sup_{0\le t\le T}\|z_\epsilon(t)-z_0(t)\|_2\le\eta T e^{LT}$. The field bound $B$ alone is not a stability hypothesis; the comparison-field Lipschitz bound $L$ and uniform field error $\eta$ are part of the assumptions. No existence through $T$ follows unless the trajectories are known to exist there.

## Facts & Assumptions

**Given:** The interval, open state domain, compact convex set, bounded continuous fields, the comparison-field state-Lipschitz constant, uniform field-error bound, and the two existing $C^1$ solution curves in the Statement.

[L1] On a nondegenerate compact interval $[a,b]$ with $a<b$, a differentiable vector-valued curve with integrable derivative has derivative integral equal to the endpoint difference ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[L2] For an integrable vector-valued function, $\|\int_a^b f\|_2\le\int_a^b\|f\|_2$ when $a\le b$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L3] If $u,a,b$ are continuous on $[0,T]$, $u,b\ge0$, $u(t)\le a(t)+\int_0^t b(s)u(s)\,ds$, and $a$ is nondecreasing, then $u(t)\le a(t)\exp(\int_0^t b(s)\,ds)$ ([[thm-gronwall-integral-inequality]]).

[L4] Each $C^1$ solution has a continuous vector derivative; vector continuity and integrability are componentwise, and every continuous real component on $[0,T]$ is Riemann integrable ([[thm-componentwise-limits-and-continuity]], [[thm-continuous-implies-integrable]], [[def-vector-valued-derivative-and-integral]]).

## Proof

**Proof technique:** subtract the integral equations and apply Gronwall's inequality.

1.1 Write $d(t):=\|z_\epsilon(t)-z_0(t)\|_2$. At $t=0$ the claimed estimate is equality; if $T=0$, this proves the result. Assume $T>0$ and fix $0<t\le T$. By [L4] each solution derivative is vector-integrable on the nondegenerate interval $[0,t]$, so [L1] applies there. Subtracting the resulting integral equations, adding and subtracting $F_0(s,z_\epsilon(s))$, and applying [L2] gives $d(t)\le d(0)+\int_0^t(\|F_\epsilon(s,z_\epsilon(s))-F_0(s,z_\epsilon(s))\|_2+\|F_0(s,z_\epsilon(s))-F_0(s,z_0(s))\|_2)\,ds\le d(0)+\eta t+L\int_0^t d(s)\,ds$, because both states lie in $K$, the uniform field-error bound controls the first integrand term by $\eta$, and the Lipschitz bound for $F_0$ controls the second by $Ld(s)$. At $t=0$ this integral inequality also holds as equality, since the zero-length integral is zero by [[def-vector-valued-derivative-and-integral]] componentwise. Thus it holds on all of $[0,T]$. [given, L1, L2, L4, algebra]

2.1 Set $a(t)=d(0)+\eta t$ and $b(t)=L$ on $[0,T]$. These functions are continuous, $a$ is nondecreasing, and $b,d\ge0$, so [L3] yields $d(t)\le(d(0)+\eta t)e^{Lt}$ for every $t$. If $d(0)=0$, then $\eta t\le\eta T$ and $e^{Lt}\le e^{LT}$ on $[0,T]$, which gives the stated supremum estimate. [step 1.1, L3, algebra] ∎

## Remarks

The trajectories are assumed to exist on the common finite interval and remain in the stated set. Local existence and continuation are separate obligations; compact containment cannot be replaced by pointwise boundedness of the vector field on a larger, unspecified domain.

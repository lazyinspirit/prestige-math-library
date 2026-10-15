---
id: pthm-td-finite-entropy-maximum
kind: physics-theorem
domain: physics
title: Canonical weights uniquely maximize finite-state entropy at their mean energy
status: draft
origin: pipeline
library: physics
dependency_level: 6
deps: [def-natural-logarithm, def-td-finite-microstate-model, post-td-canonical-sampling, pthm-td-finite-canonical-identities, thm-logarithm-derivative-and-integral]
dependency_roles:
  def-natural-logarithm: mathematical-premise
  def-td-finite-microstate-model: formulation-prerequisite
  post-td-canonical-sampling: physical-assumption
  pthm-td-finite-canonical-identities: physical-result
  thm-logarithm-derivative-and-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: Finite probability distributions on the declared microstate set at a fixed positive temperature; the result is a conditional variational property of the model and does not derive the physical canonical-preparation postulate.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.3.3 (printed pp. 22–25)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §4.6.2 (printed pp. 216–217)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Statement

Let $(\Omega,\epsilon)$ be a finite nonempty microstate model, let $T>0$, and let $q_x=e^{-\beta E_x}/Z$ be its canonical probabilities at $\beta=(k_{\mathrm B}T)^{-1}$. Set $\bar E=\sum_xq_xE_x$. Among all probability vectors $r=(r_x)_{x\in\Omega}$ with $\sum_xr_x=1$ and $\sum_xr_xE_x=\bar E$, the dimensionless Shannon entropy
$$h(r):=-\sum_{x:r_x>0}r_x\log r_x$$
is uniquely maximized by $r=q$. The corresponding physical Gibbs entropy is $S(r):=k_{\mathrm B}h(r)$ in $\mathrm{J\,K^{-1}}$ and has the same unique maximizer. This is a finite-model variational theorem; it does not establish that a physical sample is prepared canonically.

## Facts & Assumptions

**Given:** A finite nonempty state set with fixed energies $E_x$ in joules, $T>0$, $\beta=(k_{\mathrm B}T)^{-1}$, the canonical law $q$, and a competing probability vector $r$ with the same mean energy.

[F1] [[def-td-finite-microstate-model]]: $\Omega$ is finite and nonempty and $E_x$ is fixed.

[F2] [[post-td-canonical-sampling]]: $q_x=e^{-\beta E_x}/Z$ with $q_x>0$ and $\sum_xq_x=1$.

[F3] [[pthm-td-finite-canonical-identities]]: $\bar E=\sum_xq_xE_x$, $\log q_x=-\beta E_x-\log Z$, and the physical entropy satisfies $S(q)=k_{\mathrm B}(\log Z+\beta\bar E)$. Dividing by the positive $k_{\mathrm B}$ gives $h(q)=\log Z+\beta\bar E$.

[F4] [[thm-logarithm-derivative-and-integral]] and [[def-natural-logarithm]]: $\log t=\int_1^tdu/u$ for $t>0$.

[A1] The competitor has $r_x\ge0$, $\sum_xr_x=1$, and $\sum_xr_xE_x=\bar E$.

## Proof

**Given:** The finite model, its canonical weights, and a competing probability vector with the same mean.

1.1 For every $t>0$, [F4] gives $\log t\le t-1$, with equality only at $t=1$: for $t>1$, integrate $1/u<1$ on $(1,t)$; for $0<t<1$, integrate $1/u>1$ on $(t,1)$ and reverse the endpoints. For every $x$ with $r_x>0$, apply this to $t=q_x/r_x$ to obtain $r_x\log(r_x/q_x)\ge r_x-q_x$. Summing over the support of $r$ gives $D:=\sum_{x:r_x>0}r_x\log(r_x/q_x)\ge1-\sum_{x:r_x>0}q_x\ge0$. Equality forces full support and $r_x=q_x$ for every state. [F2, F4, A1, algebra]

2.1 Using [F3] and the fixed-mean condition [A1], $D=\sum_{x:r_x>0}r_x\log r_x+\beta\bar E+\log Z$. Therefore $h(r)=\beta\bar E+\log Z-D\le\beta\bar E+\log Z=h(q)$, so $S(r)=k_{\mathrm B}h(r)\le k_{\mathrm B}h(q)=S(q)$. Since $k_{\mathrm B}>0$, equality holds only when $D=0$, which by step 1.1 is equivalent to $r=q$. This proves the unique maximum of both entropies. [F1, F2, F3, A1, step 1.1, algebra] ∎

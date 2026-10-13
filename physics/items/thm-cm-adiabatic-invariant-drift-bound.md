---
id: thm-cm-adiabatic-invariant-drift-bound
kind: theorem
title: "Adiabatic action drift bound: order-$\\varepsilon$ change of the action on the $O(1/\\varepsilon)$ time scale"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-parameter-dependent-action-angle-branch, cor-vector-valued-ftc-and-lipschitz-bound, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, thm-norm-inequality-for-the-vector-valued-integral, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm-parameter-dependent-action-angle-branch: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 10 Sections 10.2-10.3, Eqs. (10.28)-(10.42): the adiabatic regime, the averaged energy-change identity and the invariance of the action variable to the accuracy of the averaged argument, printed pages 5-8 of Chapter 10 (PDF pages 241-244)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 4.6, Eqs. (4.148)-(4.158): the averaged statement $\\langle\\dot I\\rangle=0$ for a slowly varying parameter, with the author's explicit note that more rigorous proofs exist elsewhere, printed pages 113-115"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 5 Sections 5.2-5.3, Eqs. (5.23)-(5.28): secular versus periodic first-order effects after averaging over one period, printed pages 96-98"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Let $\varepsilon>0$, $A>0$, $\omega_0>0$, let $\widehat J,\widehat S\subseteq\mathbb R$ be open intervals, and let $J\subseteq\widehat J$ and $S\subseteq\widehat S$ be intervals with nonempty interiors ([[def-cm-parameter-dependent-action-angle-branch]], [[def-interval]]). Let $h:\widehat J\times\widehat S\to\mathbb R$ and $k:\widehat J\times\mathbb R\times\widehat S\to\mathbb R$ be $C^2$, with $k$ $2\pi$-periodic in $\theta$ on $J\times\mathbb R\times S$. Let $K\subseteq J$ and $S_0\subseteq S$ be compact intervals, let $s_0\in S_0$, and suppose

$$|\partial_Ih(I,s)|\ge\omega_0\qquad\bigl((I,s)\in K\times S_0\bigr).$$

Let $(I,\theta,s):[0,A/\varepsilon]\to J\times\mathbb R\times S$ be a branch solution of the branch vector field of the datum ([[def-cm-parameter-dependent-action-angle-branch]]) with $s(0)=s_0$, and suppose that for every $t\in[0,A/\varepsilon]$ one has $I(t)\in K$ and $s(t)\in S_0$. Then for every $t\in[0,A/\varepsilon]$,

$$|I(t)-I(0)|\le\varepsilon\Bigl[2\sup_{K\times[0,2\pi]\times S_0}|g|+A\sup_{K\times[0,2\pi]\times S_0}\bigl|\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg\bigr|\Bigr],$$

where $g=(k-\langle k\rangle)/\partial_Ih$ is the drift generator of the datum.

## Remarks

- **Conditional character.** The bound is conditional on the branch solution staying in the compact sets $K\times S_0$, i.e. on the action coordinate not leaving the chart along the motion; the trapping is an explicit hypothesis, not a consequence. The chart itself — the existence of a smooth parameter-dependent action-angle family with $|\omega|\ge\omega_0$ — is likewise a hypothesis of the definition, not proved here. No claim of exact invariance is made: the right-hand side is a bound of order $\varepsilon$ and grows linearly in the rescaled time $A$.
- **Comparison with the sources.** Both cited treatments derive the order-$\varepsilon$ (averaged) statement $\langle\dot I\rangle=0$; Tong's Section 4.6 explicitly remarks that stricter proofs are deferred to the literature, and Likharev's averaged identity likewise treats the parameter as frozen over one period. The present theorem replaces averaging by the exact chain-rule identity $(I+\varepsilon g)'=-\varepsilon^2(\ldots)$ and hence yields a uniform-in-time bound on the stated horizon under the explicit trapping and frequency hypotheses. No exact conservation is asserted.

## Facts & Assumptions

**Given:** The intervals $J,S$, the compact intervals $K,S_0$, the constants $\varepsilon,A,\omega_0,s_0$, the $C^2$ data $h,k$ with $k$ $2\pi$-periodic in $\theta$, the drift generator $g$, and a branch solution $(I,\theta,s)$ as in the statement.

[F1] The branch vector field is $(I,\theta,s)'=\widehat\Phi$ with $\widehat\Phi(I,\theta,s)=\bigl(-\varepsilon\partial_\theta k,\ \partial_Ih+\varepsilon\partial_Ik,\ \varepsilon\bigr)$; consequently $s(t)=s_0+\varepsilon t$, $I'=-\varepsilon\partial_\theta k(I,\theta,s)$ and $\theta'=\omega+\varepsilon\partial_Ik(I,\theta,s)$ with $\omega=\partial_Ih$; see [[def-cm-parameter-dependent-action-angle-branch]]. [given]

[F2] The angle average $\langle k\rangle(I,s)=\frac1{2\pi}\int_0^{2\pi}k(I,\theta,s)\,d\theta$ is of class $C^1$ on the open parameter domain $\widehat J\times\widehat S$, with $\partial_I\langle k\rangle=\langle\partial_Ik\rangle$ and $\partial_s\langle k\rangle=\langle\partial_sk\rangle$, by differentiation under the integral sign on compact rectangles ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]). Since $|\partial_Ih|\ge\omega_0>0$ on $K\times S_0$, the quotient $g=(k-\langle k\rangle)/\partial_Ih$ is $C^1$ on a neighborhood of $K\times[0,2\pi]\times S_0$; in particular $\partial_\theta g=\partial_\theta k/\partial_Ih$ there, because $\langle k\rangle$ does not depend on $\theta$. [given]

[F3] The suprema in the statement are finite: $g$ and its first partial derivatives and the partial derivatives $\partial_\theta k,\partial_Ik,\partial_sg$ are continuous on the compact set $K\times[0,2\pi]\times S_0$ (periodicity of $k$ and of its derivatives in $\theta$ makes $[0,2\pi]$ a full period; [[thm-continuous-partial-derivatives-imply-total-differentiability]] for the differentiable structure used below). [given]

[F4] Chain rule for a composite $t\mapsto g(I(t),\theta(t),s(t))$: if $g$ is totally differentiable at the relevant points and $t\mapsto(I,\theta,s)$ is differentiable, then $\frac{d}{dt}g(I,\theta,s)=\partial_Ig\,I'+\partial_\theta g\,\theta'+\partial_sg\,s'$ ([[thm-chain-rule-for-total-derivatives]]). [given]

[F5] Fundamental theorem and norm bound: a differentiable curve on an interval with continuous derivative satisfies $u(t)-u(0)=\int_0^tu'$ ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[def-vector-valued-derivative-and-integral]]), and $\bigl|\int_0^t\phi\bigr|\le\int_0^t|\phi|$ for real continuous $\phi$ ([[thm-norm-inequality-for-the-vector-valued-integral]] for the one-dimensional case, or monotonicity of the integral). [given]

## Proof

**Proof technique:** direct; conjugate the action by the drift generator so that the fast angle cancels exactly, then integrate the remaining order-$\varepsilon^2$ identity and bound the errors.

1.1 Along the branch solution the composite $t\mapsto g(t):=g(I(t),\theta(t),s(t))$ is differentiable, and by [F1], [F2], [F4], $$g'=\partial_Ig\,(-\varepsilon\partial_\theta k)+\partial_\theta g\,\bigl(\omega+\varepsilon\partial_Ik\bigr)+\partial_sg\,\varepsilon .$$ Since $\partial_\theta g\,\omega=\frac{\partial_\theta k}{\omega}\omega=\partial_\theta k$ by [F2], this gives $g'=-\varepsilon\partial_Ig\,\partial_\theta k+\partial_\theta k+\varepsilon\partial_\theta g\,\partial_Ik+\varepsilon\partial_sg$, hence $$I'+\varepsilon g'=-\varepsilon\partial_\theta k+\varepsilon g'=-\varepsilon^2\bigl(\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg\bigr),$$ that is, $\frac{d}{dt}\bigl(I+\varepsilon g(I,\theta,s)\bigr)=-\varepsilon^2\bigl(\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg\bigr)$ at every $t\in[0,A/\varepsilon]$. [F1, F2, F4, algebra]

2.1 Integrating: by [F5] applied to the curve $u(t):=I(t)+\varepsilon g(I(t),\theta(t),s(t))$, whose derivative is continuous by step 1.1 and [F3], $$u(t)-u(0)=-\varepsilon^2\int_0^t\bigl(\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg\bigr)(I(r),\theta(r),s(r))\,dr,$$ so by [F3] and the norm bound of [F5], $|u(t)-u(0)|\le\varepsilon^2t\,C\le\varepsilon AC$, where $C:=\sup_{K\times[0,2\pi]\times S_0}|\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg|$ and $t\le A/\varepsilon$. [step 1.1, F3, F5]

3.1 Conclusion: writing $u=I+\varepsilon g$ and using the triangle inequality, $$|I(t)-I(0)|\le|u(t)-u(0)|+\varepsilon|g(I(t),\theta(t),s(t))|+\varepsilon|g(I(0),\theta(0),s(0))|\le\varepsilon AC+2\varepsilon\sup_{K\times[0,2\pi]\times S_0}|g|,$$ which is the displayed bound. [step 2.1, F3, algebra] ∎

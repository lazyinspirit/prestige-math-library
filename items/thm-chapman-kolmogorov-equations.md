---
id: thm-chapman-kolmogorov-equations
kind: theorem
title: "Chapman-Kolmogorov equations"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-iterated-transition-kernels, lem-kernel-composition-is-well-defined-and-associative, lem-bounded-function-form-of-the-markov-property, thm-tower-property-of-conditional-expectation, thm-taking-out-what-is-known]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Levin, Peres, Wilmer, Markov Chains and Mixing Times"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf"
      locator: "Section 1.1, equation (1.10) and the following t-step transition-probability identity, printed pp. 4-5"
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf"
      locator: "Theorem 4.8 and proof, printed pp. 117-119"
---

## Statement

For $m,n\ge0$,
$$K^{m+n}=K^mK^n.$$ Assume Choice and let $X$ be a Markov chain with kernel $K$ relative to $(\mathcal F_n)$. For every bounded measurable real $f$, $$ \mathbb E[f(X_{m+n})\mid\mathcal F_m]=K^nf(X_m)\quad\text{a.s.} $$ Equivalently, for $A\in\mathcal E$, $$ \mathbb P(X_{m+n}\in A\mid\mathcal F_m)=K^n(X_m,A)\quad\text{a.s.} $$
Both assertions include $m=0$ and $n=0$.

## Facts & Assumptions

**Given:** A probability kernel $K$; for the probabilistic claims, Choice and a $K$-chain $X$.

[F1] Kernel iterates start from the identity kernel and use chronological composition. ([[def-iterated-transition-kernels]])

[F2] Kernel composition is associative and preserves probability kernels. ([[lem-kernel-composition-is-well-defined-and-associative]])

[F3] The one-step Markov property holds for every bounded measurable test function. ([[lem-bounded-function-form-of-the-markov-property]])

[F4] Conditional expectation satisfies the tower property through nested sigma-algebras. ([[thm-tower-property-of-conditional-expectation]])

## Proof

1.1 The identity kernel is a two-sided identity: directly from its Dirac [F1, F2] sections, $(IK)(x,A)=K(x,A)$ and $(KI)(x,A)=\int1_A(y)K(x,dy)=K(x,A)$. Thus $K^{m+0}=K^m=K^mK^0$, including $m=0$. If $K^{m+n}=K^mK^n$, then [F1]--[F2] give $$ K^{m+n+1}=K^{m+n}K=(K^mK^n)K=K^m(K^nK)=K^mK^{n+1}. $$ Induction proves the kernel identity for all $m,n\ge0$. [F1, F2]

2.1 Fix $m$ and bounded measurable $f$. For $n=0$, $f(X_m)$ is [F1, F3, F4, step 1.1] $\mathcal F_m$-measurable and hence is its own conditional expectation; it is also $K^0f(X_m)$. Suppose the formula holds at $n$. By [F3] at time $m+n$, [F4], and the induction hypothesis applied to the bounded measurable function $Kf$, $$ \begin{aligned} \mathbb E[f(X_{m+n+1})\mid\mathcal F_m] &=\mathbb E[\mathbb E(f(X_{m+n+1})\mid\mathcal F_{m+n}) \mid\mathcal F_m]\\ &=\mathbb E[Kf(X_{m+n})\mid\mathcal F_m] =K^n(Kf)(X_m)=K^{n+1}f(X_m). \end{aligned} $$ The last equality is the definition of kernel composition from step 1.1. Induction proves the conditional-expectation formula. Choice is used only by [F3]--[F4], which operate on conditional-expectation classes. [F1, F3, F4, step 1.1]

3.1 Taking $f=1_A$ in step 2.1 gives the displayed conditional-probability [F3, step 2.1] formula; conversely that formula for all $A$ gives the bounded-function formula by the preceding lemma. Empty and full $A$ yield respectively zero and one on both sides. [F3, step 2.1] ∎

---
id: cex-a-bounded-harmonic-boundary-value-problem-can-be-nonunique-without-almost-sure-boundary-hitting
kind: counterexample
title: "A bounded harmonic boundary problem without uniqueness"
status: draft
origin: pipeline
deps:
  - thm-dirichlet-problem-for-finite-state-hitting-probabilities
  - def-hitting-return-and-visit-times
proof_strategy: direct
landmark: false
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf"
      locator: "§9.2, Proposition 9.1 and complete proof, printed pp. 117–118 (PDF pp. 132–133): its uniqueness result assumes irreducibility; this two-absorbing-state example violates that premise and is derived locally."
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf"
      locator: "§2, Example 24.3 and complete Theorem 24.4 first-step proof, printed/PDF pp. 3–4: hitting-probability and nonnegative exit-equation context only; no uniqueness counterexample is stated there."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $E=\{a,b\}$ and take the identity transition matrix
$$p(a,a)=p(b,b)=1,\qquad p(a,b)=p(b,a)=0.$$ Set $A=\{a\}$ and prescribe
the boundary value $f(a)=1$. For every $c\in[0,1]$, the bounded function
$v_c(a)=1$, $v_c(b)=c$ satisfies $v_c=f$ on $A$ and $v_c=Pv_c$ on $A^c$,
where $Pq(x):=\sum_{y\in E}p(x,y)q(y)$ for $q:E\to\mathbb R$,
but under the deterministic start at $b$,
$$\mathbb P_b(T_A<\infty)=0.$$
Thus, without almost-sure boundary hitting, the bounded harmonic extension
need not be unique. This finite witness uses no choice and remains valid when
AC is assumed for the general Dirichlet theorem it illustrates.

## Facts & Assumptions

**Given:** the two-state identity transition matrix, boundary set $A=\{a\}$, and boundary value $f(a)=1$.

[F1] The hitting time is $T_A=\inf\{n\ge0:X_n\in A\}$, with the empty infimum equal to $+\infty$. ([[def-hitting-return-and-visit-times]])

[F2] The referenced bounded Dirichlet theorem is stated under AC. ([[thm-dirichlet-problem-for-finite-state-hitting-probabilities]])

[F3] The bounded Dirichlet uniqueness theorem also assumes $\mathbb P_x(T_A<\infty)=1$ for every $x\in E$. ([[thm-dirichlet-problem-for-finite-state-hitting-probabilities]])

[F4] Under AC and the all-start hitting assumption, the theorem asserts uniqueness among bounded solutions with the specified boundary values and harmonic equation on $A^c$. ([[thm-dirichlet-problem-for-finite-state-hitting-probabilities]])

## Proof

**Proof technique:** construct the finite deterministic chain, calculate the harmonic equation at the sole interior state, and exhibit two different bounded solutions while the boundary is never hit from that state.

1.1 The matrix has nonnegative entries and each row sums to one. On the finite sample space $\Omega=E$ with $\mathcal F=2^E$, define $X_n(\omega)=\omega$ for every $n\ge0$. For each $x\in E$, take the deterministic-start law $\mathbb P_x=\delta_x$ and the constant filtration $\mathcal F_n=2^E$. Then $X_{n+1}=X_n$ on every path, so this is a Markov chain with the displayed transition matrix. The construction uses no choice. [given]

1.2 For any $c\in[0,1]$, $v_c$ takes values in $[0,1]$, so it is bounded. Its value on $A$ is $v_c(a)=1=f(a)$. [given]

2.1 Since $A^c=\{b\}$, the local row-sum definition of $P$ and the matrix entries give $$Pv_c(b)=p(b,a)v_c(a)+p(b,b)v_c(b)=0\cdot1+1\cdot c=c=v_c(b).$$ Thus every $v_c$ solves both the boundary and harmonic equations. Taking $c=0$ and $c=1$ gives distinct solutions, since their values at $b$ differ. [step 1.2, given]

2.2 Under $\mathbb P_b=\delta_b$, step 1.1 gives $X_n=b\notin A$ for every $n\ge0$. More precisely, $\{n\ge0:X_n(\omega)\in A\}$ is empty at $\omega=b$, and $\mathbb P_b(\{b\})=1$; by [F1], $T_A=+\infty$ almost surely and $\mathbb P_b(T_A<\infty)=0$. In contrast, under $\mathbb P_a$, the initial state lies in $A$, so $T_A=0$. [F1, step 1.1, given]

3.1 The referenced uniqueness theorem is stated under AC [F2] and assumes all-start almost-sure hitting [F3]. The present witness is choice-free and violates the latter assumption at $b$, as step 2.2 shows. [F2, F3, step 2.2, given]

4.1 Step 2.1 gives distinct bounded solutions, while [F4] guarantees uniqueness only under the additional hypotheses just described. Thus the counterexample does not conflict with the theorem. [F4, step 2.1, step 2.2, step 3.1, given]

5.1 The example fixes two distinct states, so an empty or one-state space cannot instantiate it. The off-diagonal transition weights are zero, and both rows are absorbing. The endpoint $T_A=0$ occurs from $a$; from $b$ the hitting time is infinite. The choices $c=0$ and $c=1$ are included and still give bounded solutions. The chain law and all calculations are explicit on a finite space, so no choice principle is used. This is a single counterexample, not an iff assertion. [F1, step 1.1, step 1.2, step 2.1, step 2.2, given] ∎

## Source notes

LPW, §9.2, Proposition 9.1 and its complete proof, printed pp. 117–118 (PDF pp. 132–133), proves a bounded harmonic-extension uniqueness result for an irreducible chain. Its section assumes irreducibility, which this identity matrix does not satisfy, so it is context and does not prove the counterexample. Roch, Note 24, §2, Example 24.3 and Theorem 24.4 with its first-step proof, printed/PDF pp. 3–4, discusses hitting probabilities and nonnegative exit equations; it does not state a uniqueness counterexample. The displayed two-state harmonic equations and hitting probability are calculated directly above.

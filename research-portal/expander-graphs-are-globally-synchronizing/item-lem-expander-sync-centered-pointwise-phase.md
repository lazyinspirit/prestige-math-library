---
title: Centered-adjacency pointwise phase bounds
status: draft
research_item: lem-expander-sync-centered-pointwise-phase
dependency_level: 8
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 14, proof of Lemma 2.3
      statement: At a stable normalized state, the centered neighboring phase sum has
        the stated imaginary part, a lower bound on its real part, and squared
        modulus at least $(d^*\rho_1)^2H(\theta_y)$.
      hypotheses: The article's finite graph and stable-state conventions, with the
        first order parameter normalized to be real and nonnegative and phases
        represented in $(-\pi,\pi]$.
      reading_limits: The supplied extracted article text at the proof of Lemma 2.3
        was inspected. This citation attributes the claim and is not a premise
        of the local proof.
---

PDF p. 14: ` Proof of Lemma 2.3 `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [prop-expander-sync-stable-hessian](item-prop-expander-sync-stable-hessian)
- [def-expander-sync-h](item-def-expander-sync-h)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with $n=|V|>0$, symmetric binary adjacency matrix $A$, and possible self-loops. Let $d^*>0$ and $\Delta_A=A-(d^*/n)J$, where $J$ is the all-ones matrix. Let $\theta$ be a stable state, meaning a local minimum of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{x,y}(1-\cos(\theta_x-\theta_y))$ on the phase torus. Choose representatives $\theta_x\in(-\pi,\pi]$ after a common rotation for which $\rho_1=n^{-1}\sum_x e^{i\theta_x}$ is real and nonnegative. For $y\in V$ put $r_y=\sum_x A_{x,y}\cos(\theta_x-\theta_y)$ and $S_y=\sum_x(\Delta_A)_{x,y}e^{i(\theta_x-\theta_y)}$.

Let $H(t)=\sin^2(|t|)$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$, on $(-\pi,\pi]$. Then, for every $y\in V$,

$$r_y=d^*\rho_1e^{-i\theta_y}+S_y\ge0,$$

$$\sum_x(\Delta_A)_{x,y}\sin(\theta_x-\theta_y)=d^*\rho_1\sin\theta_y,\qquad \sum_x(\Delta_A)_{x,y}\cos(\theta_x-\theta_y)\ge-d^*\rho_1\cos\theta_y,$$

and $|S_y|^2\ge(d^*\rho_1)^2H(\theta_y)$. The inequality includes the case $\rho_1=0$.

## Facts & Assumptions

[F1] The centered adjacency definition gives $A=\Delta_A+(d^*/n)J$ with $J_{x,y}=1$ ([def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)).

[F2] The first Daido parameter is $\rho_1=n^{-1}\sum_xe^{i\theta_x}$; a common rotation can make it real and nonnegative, and the rotated phases have representatives in $(-\pi,\pi]$ ([def-expander-sync-daido](item-def-expander-sync-daido), [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)).

[F3] Under countable choice, a stable state is a local energy minimum. For the stated finite graph, stability gives $r_y\ge0$ and $\sum_x A_{x,y}e^{i\theta_x}=r_ye^{i\theta_y}$, including when there is a self-loop at $y$ ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-sync-states](item-def-expander-sync-states), [prop-expander-sync-stable-hessian](item-prop-expander-sync-stable-hessian)).

[F4] For real angles $u,v$, $e^{iu}=\cos u+i\sin u$, $|e^{iu}|=1$, and $e^{i(u-v)}=e^{iu}\overline{e^{iv}}$; these expressions are independent of representatives ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F5] The displayed two branches define $H$ on $(-\pi,\pi]$ and agree at their overlap ([def-expander-sync-h](item-def-expander-sync-h)).

[F6] Cosine decreases on $[0,\pi]$, and $\cos(\pi/2)=0$ ([prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities), [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

## Proof

**Given:** The graph, positive $d^*$, stable state and normalized representatives in the statement, under countable choice.

**Goal:** Prove the displayed identity, real and imaginary part relations, and pointwise squared-modulus bound for each $y\in V$.

1.1 Fix $y$. Multiply the equilibrium identity in [F3] by $e^{-i\theta_y}$. Substituting [F1] and using [F2] gives $r_y=(d^*/n)e^{-i\theta_y}\sum_xe^{i\theta_x}+S_y=d^*\rho_1e^{-i\theta_y}+S_y$. The left side is a nonnegative real number by [F3]. [F1, F2, F3, F4, algebra]

2.1 Write $S_y=C_y+iT_y$, where $C_y=\sum_x(\Delta_A)_{x,y}\cos(\theta_x-\theta_y)$ and $T_y=\sum_x(\Delta_A)_{x,y}\sin(\theta_x-\theta_y)$. The entries of $\Delta_A$ are real. Taking imaginary and real parts in step 1.1 gives $T_y=d^*\rho_1\sin\theta_y$ and $C_y=r_y-d^*\rho_1\cos\theta_y\ge-d^*\rho_1\cos\theta_y$. [F1, F3, F4, step 1.1, algebra]

3.1 Put $a=d^*\rho_1\ge0$. From [F4], $\cos^2 t+\sin^2 t=1$ and $\cos(-t)=\cos t$, $\sin(-t)=-\sin t$. If $|\theta_y|\le\pi/2$, step 2.1 gives $|S_y|^2=C_y^2+a^2\sin^2\theta_y\ge a^2H(\theta_y)$ by the first branch of [F5]. [F2, F4, F5, step 2.1, algebra]

4.1 If $\pi/2\le|\theta_y|\le\pi$, [F6] and evenness of cosine give $\cos\theta_y\le0$. Thus step 2.1 gives $C_y\ge-a\cos\theta_y\ge0$, so $C_y^2\ge a^2\cos^2\theta_y$. Adding $T_y^2=a^2\sin^2\theta_y$ yields $|S_y|^2\ge a^2=a^2H(\theta_y)$ by [F5]. The two cases cover the domain, including their common boundary and $a=0$, proving the result. [F5, F6, step 2.1, step 3.1, algebra] ∎

## Source notes

The pointwise claim is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF p. 14, proof of Lemma 2.3. The proof above uses the stated mathematical suppliers.

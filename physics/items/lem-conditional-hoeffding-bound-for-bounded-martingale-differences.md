---
id: lem-conditional-hoeffding-bound-for-bounded-martingale-differences
kind: lemma
title: Conditional Hoeffding bound for bounded martingale differences
status: published
origin: pipeline
deps: [thm-basic-algebra-and-order-properties-of-conditional-expectation, lem-conditioning-a-known-variable-and-an-independent-variable, thm-taking-out-what-is-known, thm-exponential-two-point-convexity, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Roch, Notes 20: Azuma's Inequality, Lemma 20.6 and Theorem 20.8 proof, pp. 2–3", url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes20.pdf"}
---

## Statement

Assume AC. Let $D\in L^1$ satisfy $\mathbb E[D\mid\mathcal G]=0$ almost surely. Let $A,B$ be finite $\mathcal G$-measurable random variables such that $A\le D\le B$ and $B-A\le c$ almost surely for a deterministic $c\ge0$. Then for every $\lambda\in\mathbb R$,
$$\mathbb E[e^{\lambda D}\mid\mathcal G]\le e^{\lambda^2c^2/8}\quad\text{a.s.}$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]] supplies conditional linearity, order, and preservation of constants.

[F2] [[lem-conditioning-a-known-variable-and-an-independent-variable]] says a $\mathcal G$-measurable integrable variable conditions to itself.

[F3] [[thm-exponential-two-point-convexity]] gives the chord bound for the exponential.

[F4] [[def-axiom-of-choice]] states AC, assumed here because F1, F2, and F5 use conditional expectations and chosen representatives.

[F5] [[thm-taking-out-what-is-known]] permits a finite $\mathcal G$-measurable factor to be taken outside conditional expectation when the input and product are integrable.

## Proof

1.1 The inequalities and the deterministic width give $D-c\le A\le D\le B\le D+c$, so $A,B\in L^1$. Conditional order and F2 yield $$A=\mathbb E[A\mid\mathcal G]\le0\le\mathbb E[B\mid\mathcal G]=B.$$ Thus $|D|\le B-A\le c$, making $e^{\lambda D}$ bounded and its conditional expectation well-defined. [F1, F2]

2.1 On $\{A=B\}$, step 1.1 forces $D=A=B=0$, so the result is equality. On $\{A<B\}$ write $w=B-A$ and $\theta=(D-A)/w\in[0,1]$. F3 gives $$e^{\lambda D}\le\frac{B-D}{w}e^{\lambda A}+\frac{D-A}{w}e^{\lambda B}.$$ The ratios $B/w$ and $-A/w$ lie in $[0,1]$, while the $\mathcal G$-measurable divided difference $K=(e^{\lambda B}-e^{\lambda A})/w$ is bounded by $|\lambda|e^{|\lambda|c}$. Thus the right side is the sum of the two displayed bounded endpoint terms and $KD$; conditional linearity, the known-variable rule, F5, and $\mathbb E[D\mid\mathcal G]=0$ turn its conditional expectation into $$\frac{B}{w}e^{\lambda A}+\frac{-A}{w}e^{\lambda B}.$$ This justifies pulling out the potentially small-width coefficient rather than formally dividing inside a conditional expectation. [F1, F2, F3, F5]

3.1 Put $u=-A/w\in[0,1]$ and $z=\lambda w$. The last expression is $$h_u(z)=(1-u)e^{-uz}+u e^{(1-u)z}.$$ For $g_u=\log h_u$, direct differentiation gives $g_u(0)=g_u'(0)=0$ and $$0\le g_u''(z)=p_z(1-p_z)\le\tfrac14,$$ where $p_z=u e^{(1-u)z}/h_u(z)\in[0,1]$. Integrating the second-derivative bound from $0$ to $z$ (with reversed limits when $z<0$) gives $g_u(z)\le z^2/8$. Hence $h_u(z)\le e^{z^2/8}\le e^{\lambda^2c^2/8}$. [step 2.1]

4.1 Combining the two measurable cases proves the conditional inequality. Random endpoints cause no hidden selection; only their deterministic width enters the final bound. AC is used exactly as recorded in F4. [F4, step 1.1, step 2.1, step 3.1] ∎

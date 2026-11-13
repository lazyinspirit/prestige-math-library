---
title: Mass-angle lower bound — Lemma 4.1
status: draft
research_item: lem-expander-sync-lem-4-1
dependency_level: 12
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 22–23, Section 4 and Lemma 4.1
      statement: Under the Section 4 angle and mass notation, the sum of H over the
        vertices is at least c_M sin²(beta_M).
      hypotheses: The Section 4 conventions include a nonsynchronized stable state,
        principal phase representatives, and the stated angle and mass bounds.
      reading_limits: The supplied article text at Section 4 and the proof of Lemma
        4.1 was inspected. This reference attributes the claim; the proof below
        uses the declared mathematical suppliers.
---

PDF p. 23: ` Lemma 4.1 `

## Prerequisites

- [def-expander-sync-h](item-def-expander-sync-h)
- [prop-expander-sync-h-properties](item-prop-expander-sync-h-properties)
- [def-expander-sync-amplification-sequences](item-def-expander-sync-amplification-sequences)
- [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph with nonempty vertex set, possibly with self-loops, and let $\theta$ be a nonsynchronized stable state whose first order parameter is real and nonnegative. A stable state is a local minimum on the phase torus of the graph energy $\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$; nonsynchronized means that the phases are not all equal modulo $2\pi$. The first order parameter is $|V|^{-1}\sum_{x\in V}e^{i\theta_x}$. Use the representatives $\theta_x\in(-\pi,\pi]$.

Let $\beta_0,\ldots,\beta_M$ and $c_0,\ldots,c_M$ be an amplification sequence: $M\ge0$ is an integer, $\pi/2=\beta_0>\cdots>\beta_M\ge0$, $c_0<\cdots<c_M$, and $|\mathcal C_{\beta_s}|\ge c_s$ for $0\le s\le M$, where $\mathcal C_\psi=\{x\in V:|\theta_x|\ge\psi\}$ and $c_0=|\mathcal C_{\pi/2}|$. For $t\in(-\pi,\pi]$, let $H(t)=\sin^2|t|$ if $|t|\le\pi/2$, and $H(t)=1$ if $\pi/2\le|t|\le\pi$. Then

$$\sum_{x\in V}H(\theta_x)\ge c_M\sin^2(\beta_M).$$

## Facts & Assumptions

[F1] The graph, phase torus, stable state, first order parameter and amplification sequence have the meanings stated above. In particular, $0\le\beta_M\le\pi/2$ and $|\mathcal C_{\beta_M}|\ge c_M$ ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation), [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-sync-states](item-def-expander-sync-states), [def-expander-sync-daido](item-def-expander-sync-daido), [def-expander-sync-amplification-sequences](item-def-expander-sync-amplification-sequences), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F2] Each principal representative lies in $(-\pi,\pi]$, and $x\in\mathcal C_\psi$ exactly when $|\theta_x|\ge\psi$ for $0\le\psi\le\pi$ ([def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)).

[F3] The displayed branches define $H$; it is nonnegative and nondecreasing on $[0,\pi]$ ([def-expander-sync-h](item-def-expander-sync-h), [prop-expander-sync-h-properties](item-prop-expander-sync-h-properties)).

## Proof

**Given:** The graph, state and amplification sequence in the statement.

**Goal:** Prove the stated lower bound for the sum of $H$.

1.1 For each $x\in\mathcal C_{\beta_M}$, [F2] gives $\beta_M\le|\theta_x|\le\pi$. By the two branches defining $H$, $H(\theta_x)=H(|\theta_x|)$. Monotonicity in [F3] therefore gives $H(\theta_x)\ge H(\beta_M)=\sin^2(\beta_M)$, where the last equality uses $0\le\beta_M\le\pi/2$. [F1, F2, F3, algebra]

2.1 All terms outside $\mathcal C_{\beta_M}$ are nonnegative by [F3]. Summing step 1.1 over the finite tail set gives $\sum_{x\in V}H(\theta_x)\ge|\mathcal C_{\beta_M}|\sin^2(\beta_M)$. Since the squared sine is nonnegative and $|\mathcal C_{\beta_M}|\ge c_M$ by [F1], the desired inequality follows. [F1, F3, step 1.1, algebra] ∎

## Source notes

The statement is attributed to Lemma 4.1 of the article cited in the frontmatter. The proof above uses monotonicity of $H$ directly: the article's intermediate comparison of $\sin^2(\theta_x)$ with $\sin^2(\beta_M)$ need not hold for vertices whose absolute angle exceeds $\pi/2$.

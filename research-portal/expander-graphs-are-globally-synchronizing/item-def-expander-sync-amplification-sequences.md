---
title: Angle and mass sequences in the amplification argument
status: draft
research_item: def-expander-sync-amplification-sequences
dependency_level: 11
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF page 22, Section 4 opening and Figure 2
      statement: For a nonsynchronized stable state, the article starts with beta_0 =
        pi/2 and c_0 equal to the cardinality of the corresponding phase tail,
        then constructs strictly decreasing angles and strictly increasing mass
        lower bounds. It sets beta_{-1} = pi, c_{-1} = 0, beta_{M+1} = 0 and
        c_{M+1} = n.
      hypotheses: The connected-graph and phase-normalization conventions in the
        article apply; the state is stable and not fully synchronized.
      reading_limits: The supplied article text at Section 4 and Figure 2 was
        inspected for attribution and conventions. This citation is not used to
        prove the definition or its justification.
---

PDF p. 22: ` Section 4 opening; Figure 2 `

## Prerequisites

- [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)
- [lem-expander-sync-half-circle](item-lem-expander-sync-half-circle)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)


## Definition

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, possibly with self-loops, with nonempty vertex set and $n=|V|$. Connected means that every two vertices are joined by a finite edge path. Let $\theta$ be a stable state, meaning a local minimum on the phase torus $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ of the graph energy $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$, where $A$ is the binary adjacency matrix. Suppose the state is not fully synchronized, meaning that its coordinates are not all equal modulo $2\pi$, and that its first order parameter $\rho_1=n^{-1}\sum_{x\in V}e^{i\theta_x}$ is real and nonnegative. Use the unique representatives $\theta_x\in(-\pi,\pi]$.

For $0\le\psi\le\pi$, write $\mathcal C_\psi=\{x\in V:|\theta_x|\ge\psi\}$ for the phase tail set. Set $\beta_0=\pi/2$ and $c_0=|\mathcal C_{\pi/2}|$. An amplification sequence of length $M$, where $M$ is a nonnegative integer, consists of real angles $\beta_0,\ldots,\beta_M$ and real mass lower bounds $c_0,\ldots,c_M$ satisfying $\pi/2=\beta_0>\beta_1>\cdots>\beta_M\ge0$, $c_0<c_1<\cdots<c_M$, and $|\mathcal C_{\beta_s}|\ge c_s$ for every $0\le s\le M$. When $M=0$, the strict chains impose no additional comparisons. Set $\beta_{-1}=\pi$, $c_{-1}=0$, $\beta_{M+1}=0$, and $c_{M+1}=n$ as endpoint conventions.

## Facts & Assumptions

[F1] The phase-tail definition supplies the unique representatives in $(-\pi,\pi]$ and identifies $\mathcal C_\psi$ with the displayed set for $0\le\psi\le\pi$ ([def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)).

[F2] Under countable choice, the half-circle lemma says that a stable state on a finite connected graph with first order parameter $\rho_1\in[0,1]$ and every representative in $(-\pi/2,\pi/2)$ has every representative equal to zero ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [lem-expander-sync-half-circle](item-lem-expander-sync-half-circle)).

[F3] The graph notation, stable-state energy and first order parameter are as stated in the definition ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation), [def-expander-sync-states](item-def-expander-sync-states), [def-expander-sync-daido](item-def-expander-sync-daido)).

[F4] On a nonempty finite vertex set, every Daido order parameter satisfies $|\rho_k|\le1$ for each integer $k\ge1$ ([prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)).

## Justification

**Given:** The graph and normalized nonsynchronized stable state in the definition.

**Goal:** Justify the starting mass, endpoint bounds and the sequence terminology.

1.1 Since $V$ is finite and nonempty, [F4] with $k=1$ gives $|\rho_1|\le1$. The assumed real nonnegativity therefore gives $\rho_1=|\rho_1|\in[0,1]$. If $\mathcal C_{\pi/2}$ were empty, [F1] would put every representative in $(-\pi/2,\pi/2)$. All hypotheses of [F2] would then hold, so the half-circle lemma would make every representative zero, contradicting nonsynchronization. Thus $c_0=|\mathcal C_{\pi/2}|\ge1$. [F1, F2, F3, F4, given]

2.1 The endpoint bounds hold: $|\mathcal C_\pi|\ge0=c_{-1}$, while [F1] gives $\mathcal C_0=V$, so $|\mathcal C_0|=n=c_{M+1}$. In particular, the one-term choice $M=0$ is an amplification sequence; longer sequences are specified by the displayed conditions and are not asserted to exist here. The endpoint angles are weakly ordered with the internal angles, and endpoint mass bounds need not be strictly larger than their neighbors. [F1, step 1.1, algebra] ∎



The sequence and endpoint conventions are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 22, Section 4 and Figure 2. The justification uses the declared mathematical suppliers.

## Source notes

The sequence and endpoint conventions are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 22, Section 4 and Figure 2. The justification uses the declared mathematical suppliers.

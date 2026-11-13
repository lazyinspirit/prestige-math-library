---
id: cor-expander-sync-cor-2-6
title: Uniform bound on average H mass — Corollary 2.6
kind: corollary
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-expander-sync-lem-2-3
  - lem-expander-sync-lem-2-5
  - def-expander-sync-h
  - def-expander-sync-states
  - def-expander-sync-adjacency-expander
  - def-expander-sync-graph-notation
  - def-expander-sync-daido
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
  - def-expander-prereq-phase-torus
formulation_deps:
  - def-expander-sync-h
  - def-expander-sync-states
  - def-expander-sync-adjacency-expander
  - def-expander-sync-graph-notation
  - def-expander-sync-daido
  - math:def-countable-choice
  - def-expander-prereq-phase-torus
argument_deps:
  - lem-expander-sync-lem-2-3
  - lem-expander-sync-lem-2-5
  - def-expander-prereq-phasor-calculus
  - def-expander-prereq-phase-torus
dependency_roles:
  lem-expander-sync-lem-2-3: mathematical-premise
  lem-expander-sync-lem-2-5: mathematical-premise
  def-expander-sync-h: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-countable-choice: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 11, Section 2.1 standing conventions; p. 16, Corollary 2.6
      statement: For a stable state on an (n,d*,alpha)-expander with alpha at most
        1/5, the average of H over the vertices is at most 5 alpha squared
        divided by 2.
      hypotheses: Section 2.1 assumes a connected graph, a real nonnegative first
        order parameter, and phase representatives in (-pi,pi]; the reference
        parameter is selected as an expected average degree.
      reading_limits: The supplied article text at the standing conventions, corollary
        and its proof was inspected for attribution. The article is not used as
        a proof premise.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 13
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, possibly with loops, with $n=|V|>0$ and symmetric binary adjacency matrix $A$. Connected means that every two vertices can be joined by a finite edge path. Let $d^*\ge0$ and $\alpha\le1/5$, and suppose $G$ is an $(n,d^*,\alpha)$-expander, meaning that $\|A-(d^*/n)J\|\le\alpha d^*$ for the all-ones matrix $J$ and the Euclidean operator norm. Let $\theta$ be a stable state: a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{xy}(1-\cos(\theta_x-\theta_y))$. Choose phase representatives in $(-\pi,\pi]$ after a common rotation for which $\rho_1=n^{-1}\sum_{x\in V}e^{i\theta_x}$ is real and nonnegative. Define $H(t)=\sin^2(|t|)$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$. Then

$$\frac1n\sum_{x\in V}H(\theta_x)\le\frac{5\alpha^2}{2}.$$

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-adjacency-expander]]

[[def-expander-sync-states]]

[[def-expander-prereq-phase-torus]]

[[def-expander-sync-daido]]

[[def-expander-sync-h]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] Under the statement’s connectedness, stability and normalization hypotheses, Lemma 2.3 gives $n\alpha^2\ge\rho_1^2\sum_xH(\theta_x)$ ([[lem-expander-sync-lem-2-3]]).

[F2] When additionally $0\le\alpha\le1/5$, Lemma 2.5 gives $\rho_1^2\ge1-3\alpha$ ([[lem-expander-sync-lem-2-5]]). Both suppliers carry countable choice ([[math:def-countable-choice]]).

[F3] The adjacency entries record edges; the expander condition is the stated operator-norm bound ([[def-expander-sync-graph-notation]], [[def-expander-sync-adjacency-expander]]). For real $t$, the phasor $e^{it}$ has unit modulus and is $2\pi$-periodic ([[def-expander-prereq-phasor-calculus]]). The definition of $H$ gives $H(0)=0$ ([[def-expander-sync-h]]).

[F4] Phase classes modulo $2\pi$ are identified bijectively with unit-circle points by $[t]\mapsto(\cos t,\sin t)$ ([[def-expander-prereq-phase-torus]]). Since $e^{it}=\cos t+i\sin t$ and $e^{i0}=1$, equality $e^{it}=1$ therefore implies $[t]=[0]$ ([[def-expander-prereq-phasor-calculus]]).

## Proof

**Given:** The connected expander, normalized stable state and parameters in the Statement, under countable choice.

**Goal:** Bound the average of $H$ by $5\alpha^2/2$.

1.1 If $d^*>0$, the nonnegative operator norm and the expander inequality imply $\alpha\ge0$. By [F2], $\rho_1^2\ge1-3\alpha\ge2/5$. Combining this positive lower bound with [F1] and dividing by $n\rho_1^2$ gives $n^{-1}\sum_xH(\theta_x)\le\alpha^2/\rho_1^2\le5\alpha^2/2$. [F1, F2, given, algebra]

2.1 If $d^*=0$, the expander bound gives $\|A\|=0$, so $A$ is the zero matrix. Connectedness and nonemptiness then force $n=1$. The normalized first order parameter is the single unit phasor $e^{i\theta_1}$, which is real and nonnegative, hence equals $1$. By [F4], $[\theta_1]=[0]$, so $\theta_1=2\pi k$ for an integer $k$. The representative condition $-\pi<\theta_1\le\pi$ gives $-1/2<k\le1/2$, forcing $k=0$. Hence $\theta_1=0$ and $H(\theta_1)=0$. Thus the claimed bound also holds in this case, regardless of the sign of $\alpha$. Together with step 1.1 this proves the claim. [F3, F4, given, step 1.1, algebra] ∎

## Source notes

The original Corollary 2.6 is attributed to the article, PDF p. 16. Section 2.1, PDF p. 11, supplies its standing connectedness and normalization conventions. The argument above uses the completed mathematical suppliers; the article citation is attribution rather than a premise.

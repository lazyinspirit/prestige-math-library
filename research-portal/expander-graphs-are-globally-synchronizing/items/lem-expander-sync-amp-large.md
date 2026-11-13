---
id: lem-expander-sync-amp-large
title: Large-set amplification — Lemma 4.3
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-two-sided-expander
  - def-expander-sync-states
  - def-expander-sync-phase-arcs
  - def-expander-sync-edge-count
  - lem-expander-sync-kernel-almost-antisymmetry
  - rem-expander-sync-rem-3-9
  - prop-expander-prereq-ordered-angle-inequalities
  - math:def-countable-choice
  - def-expander-sync-graph-notation
  - prop-expander-sync-daido-properties
  - math:cor-pi-is-the-first-positive-sine-zero
dependency_roles:
  def-expander-sync-two-sided-expander: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-phase-arcs: mathematical-premise
  def-expander-sync-edge-count: mathematical-premise
  lem-expander-sync-kernel-almost-antisymmetry: mathematical-premise
  rem-expander-sync-rem-3-9: mathematical-premise
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  math:def-countable-choice: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  prop-expander-sync-daido-properties: mathematical-premise
  math:cor-pi-is-the-first-positive-sine-zero: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 23–24, Lemma 4.3; p. 26, proof; p. 11, phase convention
      statement: For a stable state, if the displayed lower bound on sin(beta-gamma)
        holds, Lemma 4.3 gives the minimum of the geometric growth bound and n/2
        as a lower bound for the size of the gamma tail.
      hypotheses: The article assumes a connected graph and normalized principal
        phases in Section 2.1, p.11; Lemma 4.3 requires 0<epsilon<1+c-,
        0<gamma<beta<=pi/2 and the displayed sine inequality. Its fractions
        require c+ != c- and nonempty C_beta. The zero-reference connected case
        cannot have nonempty C_beta.
      reading_limits: Original PDF images pp.11 and 23–26, and the corresponding
        extracted text, were inspected for the standing hypotheses, displayed
        statement and proof. Article reference is attribution only. The local
        proof uses declared suppliers and handles the real-parameter boundary
        cases separately; no broader article audit is claimed.
dependency_level: 12
---

## Statement

Assume countable choice. Let $G=(V,E)$ be an $(n,d^*,\alpha,c^-,c^+)$-expander with real $d^*,\alpha,c^-,c^+$ and $c^+\ne c^-$. Assume either $d^*\ne0$ or that $G$ is connected, meaning that every two vertices can be joined by a finite path of edges. Thus $n=|V|>0$, $\|A-(d^*/n)J\|\le\alpha d^*$, and $c^-d^*I\preceq L-d^*I+(d^*/n)J\preceq c^+d^*I$. Let $\theta$ be a stable state, meaning a local minimum of the graph Kuramoto energy. Choose its phase origin so that $n^{-1}\sum_{x\in V}e^{i\theta_x}$ is real and nonnegative. For $0\le\psi\le\pi$, write $\mathcal C_\psi=\{x\in V:|\theta_x|\ge\psi\}$ using principal representatives in $(-\pi,\pi]$.

Let $0<\varepsilon<1+c^-$ and $0<\gamma<\beta\le\pi/2$, and suppose $|\mathcal C_\beta|>0$. If

$$\sin(\beta-\gamma)\ge\frac{2(1+c^++\alpha)|\mathcal C_{\pi/2}|}{(1+c^--\varepsilon)|\mathcal C_\beta|},$$

then

$$|\mathcal C_\gamma|\ge\min\left\{\left(1+\frac{\varepsilon}{c^+-c^-}\right)|\mathcal C_\beta|,\frac n2\right\}.$$

## Statement references

[[def-expander-sync-two-sided-expander]]

[[def-expander-sync-states]]

[[def-expander-sync-phase-arcs]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] The expander inequalities in the Statement use nonnegative quadratic-form order. The adjacency matrix is symmetric and nonnegative, $L\mathbf1=0$, and $J\mathbf1=n\mathbf1$ ([[def-expander-sync-two-sided-expander]]).

[F2] For $0<\gamma<\beta\le\pi/2$, the phase tails obey $\mathcal C_{\pi/2}\subseteq\mathcal C_\beta\subseteq\mathcal C_\gamma$. For subsets $P,Q\subseteq V$, their ordered adjacency count is $e(P,Q)=\sum_{x\in P,y\in Q}A_{xy}$, and $Q^c=V\setminus Q$ ([[def-expander-sync-phase-arcs]], [[def-expander-sync-edge-count]]).

[F3] Under the stated stability, alignment, expander and countable-choice hypotheses, $\sin(\beta-\gamma)e(\mathcal C_\beta,\mathcal C_\gamma^c)\le(1+c^++\alpha)d^*|\mathcal C_{\pi/2}|$ ([[lem-expander-sync-kernel-almost-antisymmetry]], [[math:def-countable-choice]]).

[F4] If $X\subseteq Y$, $|Y|\le n/2$, and $|Y|<(1+\varepsilon/(c^+-c^-))|X|$, then $e(X,Y^c)>(1+c^--\varepsilon)(d^*/n)|X||Y^c|$, under the positive-degree and nonzero-gap hypotheses of the Statement ([[rem-expander-sync-rem-3-9]]).

[F5] Sine is nonnegative on $[0,\pi]$ ([[prop-expander-prereq-ordered-angle-inequalities]]). If $0<\gamma<\beta\le\pi/2$, then $0<\beta-\gamma<\pi$, so $\sin(\beta-\gamma)>0$ ([[math:cor-pi-is-the-first-positive-sine-zero]]).

[F6] The finite graph is nonempty and its binary adjacency matrix records its edges ([[def-expander-sync-graph-notation]]). The normalized first Daido parameter is the mean of the unit phasors, and each phase has a unique representative in $(-\pi,\pi]$ ([[prop-expander-sync-daido-properties]]).

## Proof

**Given:** The graph, state, parameters and sine inequality in the Statement.

**Goal:** Prove the stated lower bound for $|\mathcal C_\gamma|$.

1.1 If $d^*<0$, the difference of the two quadratic-form bounds in [F1] gives $(c^+-c^-)d^*\ge0$. Thus the nonzero gap obeys $c^+-c^-<0$. Since $\varepsilon>0$, the factor $q=1+\varepsilon/(c^+-c^-)$ is less than $1$. Tail nesting gives $|\mathcal C_\gamma|\ge|\mathcal C_\beta|\ge q|\mathcal C_\beta|$, hence the required minimum bound. [F1, F2, algebra]

1.2 If $d^*=0$, the expander norm condition gives $A=0$, since $\|Ae_y\|\le\|A\|\|e_y\|=0$ for every coordinate vector $e_y$. The statement then requires connectedness, so [F6] implies $n=1$: an edgeless graph cannot have a path between two distinct vertices. The sole phasor is real and nonnegative by normalization, and has unit modulus, so equals $1$. Its principal representative is $0$. Therefore $\mathcal C_\beta$ is empty for $\beta>0$, contradicting the nonempty-denominator hypothesis. This case has no admissible inputs. [F1, F2, F6, algebra]

1.3 We may now assume $d^*>0$. Testing the difference of the two quadratic-form bounds in [F1] on a nonzero vector shows $(c^+-c^-)d^*\ge0$. Since $d^*>0$ and the gap is nonzero, $c^+-c^->0$. The norm bound gives $\alpha\ge0$. Testing the upper Laplacian bound on $\mathbf1$ gives $c^+\ge0$, because the centered Laplacian annihilates $\mathbf1$. Thus $B:=1+c^++\alpha>0$, and $k:=1+c^--\varepsilon>0$ by hypothesis. [F1, algebra]

2.1 Suppose the conclusion fails. Put $X=\mathcal C_\beta$, $Y=\mathcal C_\gamma$, $a=|X|$, $r=|\mathcal C_{\pi/2}|$, and $t=|Y^c|$. By [F2], $X\subseteq Y$; failure of the conclusion gives $|Y|<n/2$ and $|Y|<(1+\varepsilon/(c^+-c^-))a$. Hence $t>n/2$. Applying [F4] gives $e(X,Y^c)>k(d^*/n)at$. [F2, F4, step 1.3, algebra]

3.1 Put $s=\sin(\beta-\gamma)$. By [F5], $s>0$, so step 2.1 gives $s e(X,Y^c)>s k(d^*/n)at$. The hypothesis, $a>0$, and $k>0$ give $ska\ge2Br$. Consequently $s e(X,Y^c)>2Br(d^*/n)t\ge Brd^*$; the last inequality also holds when $r=0$. This contradicts [F3]. Therefore the conclusion holds. [F3, F5, step 1.3, step 2.1, algebra] ∎

## Source notes

The article’s Lemma 4.3 states the same displayed amplification implication for a stable state on an $(n,d^*,\alpha,c^-,c^+)$-expander with $0<\varepsilon<1+c^-$ and $0<\gamma<\beta\le\pi/2$. Its displayed fractions require $|\mathcal C_\beta|$ and $c^+-c^-$ to be nonzero. The article’s earlier phase convention makes the first order parameter real and nonnegative. Section 2.1, PDF p. 11, also explicitly assumes that $G$ is connected. At $d^*=0$, connectedness and phase normalization force a single vertex at phase zero, contradicting the nonempty denominator $|\mathcal C_\beta|>0$. Thus the original connected-graph claim is preserved. For $d^*>0$, connectedness is unnecessary; negative real reference parameters give the conclusion directly by nesting. This source note attributes the original formulation and does not use the article as a proof premise.

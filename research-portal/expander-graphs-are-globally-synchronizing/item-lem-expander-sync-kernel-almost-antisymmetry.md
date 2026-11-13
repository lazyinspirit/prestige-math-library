---
title: Almost antisymmetry and summed kernel bounds
status: published
research_item: lem-expander-sync-kernel-almost-antisymmetry
dependency_level: 11
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 25–26, proof of Lemma 4.3
      statement: The kernel satisfies the displayed almost-antisymmetry bound;
        symmetrization and the stability inequality give the corresponding
        edge-count bounds.
      hypotheses: Principal phase representatives, the article's finite undirected
        graph and stable configuration, and 0 < gamma < beta <= pi/2 for the
        amplification application.
      reading_limits: The cited extracted PDF text was inspected for attribution and
        the displayed argument. The proof here uses the declared mathematical
        suppliers, not the article as a premise.
---

PDF p. 25: ` Proof of Lemma 4.3 `; PDF p. 26: ` Proof of Lemma 4.3 `

## Prerequisites

- [def-expander-sync-kernel](item-def-expander-sync-kernel)
- [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)
- [def-expander-sync-edge-count](item-def-expander-sync-edge-count)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [lem-expander-sync-kernel-stability](item-lem-expander-sync-kernel-stability)
- [lem-expander-sync-kernel-three-regions](item-lem-expander-sync-kernel-three-regions)
- [lem-expander-sync-lem-3-6](item-lem-expander-sync-lem-3-6)
- [math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)
- [math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)


## Statement

For $a,b\in(-\pi,\pi]$, let $K(a,b)=\sin(|a|-\min\{|b|,\pi/2\})$. Then $K(a,b)+K(b,a)\le\mathbf1_{\{|a|\ge\pi/2\}}+\mathbf1_{\{|b|\ge\pi/2\}}$, where each indicator is $1$ when its condition holds and $0$ otherwise.

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, possible self-loops, and symmetric binary adjacency matrix $A$. Let $\theta$ be a stable phase configuration, meaning a local minimum on $\mathbb R^V/(2\pi\mathbb Z)^V$ of $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$. Choose principal representatives $\theta_x\in(-\pi,\pi]$ and suppose $|V|^{-1}\sum_x e^{i\theta_x}\in[0,1]$. For $0<\gamma<\beta\le\pi/2$, write $\mathcal C_\psi=\{x\in V:|\theta_x|\ge\psi\}$ and $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{x,y}$, with $X^c=V\setminus X$. Then

$$\sin(\beta-\gamma)e(\mathcal C_\beta,\mathcal C_\gamma^c)\le\sum_{x,y\in\mathcal C_\beta}A_{x,y}K(\theta_x,\theta_y)\le e(\mathcal C_{\pi/2},\mathcal C_\beta)\le e(\mathcal C_{\pi/2},V).$$

If additionally $G$ is an $(n,d^*,\alpha,c^-,c^+)$-expander, then $e(\mathcal C_{\pi/2},V)\le(1+c^++\alpha)d^*|\mathcal C_{\pi/2}|$.

## Statement references

[def-expander-sync-kernel](item-def-expander-sync-kernel)

[def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)

[def-expander-sync-edge-count](item-def-expander-sync-edge-count)

[def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)

[lem-expander-sync-kernel-stability](item-lem-expander-sync-kernel-stability)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-sync-energy](item-def-expander-sync-energy)

[def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)

## Facts & Assumptions

[F1] The kernel has the formula in the Statement and, when $|b|\ge\pi/2$, $K(a,b)=-\cos a$ ([def-expander-sync-kernel](item-def-expander-sync-kernel)).

[F2] Sine is odd and bounded above by $1$; cosine is even and nonnegative on $[-\pi/2,\pi/2]$ ([math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity), [math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)). The quarter-turn identity gives $\sin(t-\pi/2)=-\cos t$ ([math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

[F3] The phase tails and ordered edge counts are as defined in the Statement; $A$ is symmetric and nonnegative, and $\mathcal C_{\pi/2}\subseteq\mathcal C_\beta\subseteq\mathcal C_\gamma$ ([def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs), [def-expander-sync-edge-count](item-def-expander-sync-edge-count)).

[F4] Under the graph, stability, representative, order-parameter and countable-choice hypotheses in the Statement, $\sum_{x\in V}A_{x,y}K(\theta_x,\theta_y)\ge0$ for every $y$ ([lem-expander-sync-kernel-stability](item-lem-expander-sync-kernel-stability), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F5] For $y\in\mathcal C_\beta$, the kernel is at most $0$ on $\mathcal C_\gamma\setminus\mathcal C_\beta$ and at most $\sin(\gamma-\beta)$ on $\mathcal C_\gamma^c$ ([lem-expander-sync-kernel-three-regions](item-lem-expander-sync-kernel-three-regions)).

[F6] For the stated expander and any $X\subseteq V$, the maximum-degree consequence of the incident-edge bound gives $e(X,V)\le(1+c^++\alpha)d^*|X|$ ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander), [lem-expander-sync-lem-3-6](item-lem-expander-sync-lem-3-6)).

## Proof

**Given:** The angles $a,b$, and, for the summed bounds, the graph, stable configuration and angles $\gamma,\beta$ in the Statement.

**Goal:** Prove the pointwise inequality, the chain of summed bounds and the expander consequence.

1.1 Put $u=|a|$ and $v=|b|$. If both are below $\pi/2$, [F1] and oddness give $K(a,b)+K(b,a)=\sin(u-v)+\sin(v-u)=0$. If $u\ge\pi/2>v$, then $K(a,b)\le1$ and $K(b,a)=\sin(v-\pi/2)=-\cos v\le0$. The reversed case is symmetric. If both are at least $\pi/2$, each kernel value is at most $1$. These cases include equality at $\pi/2$ and give the stated indicator bound. [F1, F2, algebra]

2.1 Let $S=\sum_{x,y\in\mathcal C_\beta}A_{x,y}K(\theta_x,\theta_y)$. Interchanging the finite summation indices and using symmetry of $A$ yields twice $S$ as the sum of $A_{x,y}(K(\theta_x,\theta_y)+K(\theta_y,\theta_x))$. Apply step 1.1 termwise. The two indicator sums are equal by symmetry, and the first counts precisely $e(\mathcal C_{\pi/2},\mathcal C_\beta)$ because $\mathcal C_{\pi/2}\subseteq\mathcal C_\beta$. Thus $S\le e(\mathcal C_{\pi/2},\mathcal C_\beta)\le e(\mathcal C_{\pi/2},V)$, the last inequality using nonnegative entries. [F3, step 1.1, algebra]

3.1 Sum [F4] over $y\in\mathcal C_\beta$ and split the $x$-sum into $\mathcal C_\beta$, $\mathcal C_\gamma\setminus\mathcal C_\beta$, and $\mathcal C_\gamma^c$. By [F5] and nonnegativity of $A$, the total is at most $S+\sin(\gamma-\beta)e(\mathcal C_\gamma^c,\mathcal C_\beta)$. Symmetry of $A$ and oddness of sine therefore give $S\ge\sin(\beta-\gamma)e(\mathcal C_\beta,\mathcal C_\gamma^c)$. Apply [F6] with $X=\mathcal C_{\pi/2}$ for the final expander bound. Together with step 2.1 this proves the chain. [F2, F3, F4, F5, F6, step 2.1, algebra] ∎

## Source notes

The pointwise inequality and its use in the proof of Lemma 4.3 are attributed to the cited article. The line on PDF page 25 omits $d^*$ from the incident-edge bound; the following page displays it. The expander bound stated here follows from the separately declared incident-edge supplier.

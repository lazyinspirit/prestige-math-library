---
id: lem-neural-operator-compact-union-under-uniform-convergence
kind: lemma
title: "Uniformly convergent images of a compact set have compact union"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-metric-space
  - def-metric-compactness
  - def-metric-continuity
  - def-metric-topology
  - thm-continuous-image-of-a-compact-space-is-compact
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Lemma 21, Appendix F, PDF pp. 90–91; a complete open-cover proof is supplied locally"
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces, let $K\subseteq X$ be compact, and let $f,f_n:X\to Y$ be continuous for every integer $n\ge1$. Suppose that for every $\varepsilon>0$ there is $N\ge1$ such that $d_Y(f_n(x),f(x))<\varepsilon$ for all $n\ge N$ and all $x\in K$.
Then
$$W=f[K]\cup\bigcup_{n=1}^{\infty}f_n[K]$$
is compact in $Y$. The empty-set case is included, and the proof uses no choice principle.

## Facts & Assumptions

**Given:** Metric spaces, a compact subset $K$, continuous maps, and uniform convergence on $K$ as stated.

[F1] Compactness means that every open cover has a finite subcover; this convention applies to compact subsets of metric spaces ([[def-metric-compactness]]).

[F2] A continuous map sends a compact subset of a metric space to a compact subset ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[F3] In a metric space, open sets contain an open ball about each of their points, and open balls are open ([[def-metric-space]], [[def-metric-topology]]).

## Proof

**Proof technique:** open-cover argument with a uniform neighborhood of the limit image.

1.1 If $K=\emptyset$, then $W=\emptyset$ and it is compact. Otherwise let $\mathcal V$ be any open cover of $W$. By [F2], $f[K]$ is compact, so [F1] gives finitely many $V_1,\ldots,V_q\in\mathcal V$ covering $f[K]$. Set $O=\bigcup_{i=1}^qV_i$, an open set containing $f[K]$. [given, F1, F2, cases]

2.1 Form the family of all balls $B_Y(y,r)$ with $y\in f[K]$, $r>0$, and $B_Y(y,2r)\subseteq O$. This family covers $f[K]$ by openness and [F3], so [F1] gives a finite subcover with centers $y_1,\ldots,y_s$ and radii $r_1,\ldots,r_s$. Since $f[K]\ne\emptyset$, $s\ge1$; let $\delta=\min_i r_i>0$. If $z\in Y$ and $d_Y(z,y)<\delta$ for some $y\in f[K]$, choose $i$ with $d_Y(y,y_i)<r_i$; then $d_Y(z,y_i)<\delta+r_i\le2r_i$, so $z\in B_Y(y_i,2r_i)\subseteq O$. Thus every point within distance $\delta$ of some point of $f[K]$ lies in $O$. [step 1.1, F1, F3, algebra]

3.1 Uniform convergence supplies $N\ge1$ such that $d_Y(f_n(x),f(x))<\delta$ for every $x\in K$ and every $n\ge N$. Since $f(x)\in f[K]$, step 2.1 implies $f_n[K]\subseteq O$ for every $n\ge N$. [given, step 2.1, algebra]

4.1 For each of the finitely many indices $1\le n<N$, [F2] makes $f_n[K]$ compact, so [F1] supplies a finite subfamily of $\mathcal V$ covering it. Together with $V_1,\ldots,V_q$ from step 1.1, these finitely many members cover $f[K]$, all $f_n[K]$ with $n\ge N$, and each remaining $f_n[K]$. Hence every open cover of $W$ has a finite subcover, so $W$ is compact by [F1]. The proof uses only finite subcovers and a finite minimum, not a choice axiom. [step 1.1, step 3.1, F1, F2, algebra] ∎ 
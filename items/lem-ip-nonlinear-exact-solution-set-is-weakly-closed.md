---
id: lem-ip-nonlinear-exact-solution-set-is-weakly-closed
kind: lemma
title: The exact solution set of a weakly closed map is weakly sequentially closed
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-weakly-closed-nonlinear-forward-map
  - def-weak-convergence-of-nets-and-sequences
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 10"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Benedikt Wirth, Inverse Problems, Chapter 10"
      url: "https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $X,Y$ be real Hilbert spaces, let $D\subseteq X$ be nonempty and weakly closed, meaning closed in the coarsest topology making every bounded real-linear functional continuous, and let $F:D\to Y$ satisfy this graph condition: whenever $x_n\in D$, $x_n\rightharpoonup x$, and $F(x_n)\rightharpoonup z$, one has $x\in D$ and $F(x)=z$. Weak convergence means convergence under every bounded real-linear functional. For $y\in Y$, the exact solution set $S_F(y):=\{x\in D:F(x)=y\}$ is weakly sequentially closed in $X$: every sequence in $S_F(y)$ that converges weakly to $x$ has $x\in S_F(y)$.

## Statement references

[[def-ip-weakly-closed-nonlinear-forward-map|Weakly closed domain and sequential graph closure]]

[[def-weak-convergence-of-nets-and-sequences|Weak sequence convergence]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 10](https://arxiv.org/pdf/2001.00617v2)

[Benedikt Wirth, *Inverse Problems*, Chapter 10](https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf)

## Facts & Assumptions

**Given:** Real Hilbert spaces $X,Y$, a weakly closed forward map $F:D\to Y$, a datum $y\in Y$, a sequence $(x_n)$ in $S_F(y)$, and $x_n\rightharpoonup x$.

[F1] Sequential weak-to-weak graph closure means that $x_n\in D$, $x_n\rightharpoonup x$, and $F(x_n)\rightharpoonup z$ imply $x\in D$ and $F(x)=z$ ([[def-ip-weakly-closed-nonlinear-forward-map]]).

[F2] Weak convergence is convergence in the weak topology; in particular, a constant sequence with value $y$ converges weakly to $y$ ([[def-weak-convergence-of-nets-and-sequences]]).

## Proof

1.1 Since $x_n\in S_F(y)$, each $x_n$ lies in $D$ and $F(x_n)=y$. Thus $(F(x_n))$ is the constant sequence at $y$, so it converges weakly to $y$ by [F2]. [given, F2]

2.1 Apply [F1] to $x_n\rightharpoonup x$ and $F(x_n)\rightharpoonup y$. It follows that $x\in D$ and $F(x)=y$, hence $x\in S_F(y)$. This is the asserted sequential weak closedness. [given, F1, step 1.1] ∎

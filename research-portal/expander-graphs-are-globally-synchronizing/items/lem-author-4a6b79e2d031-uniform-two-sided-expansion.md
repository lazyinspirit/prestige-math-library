---
id: lem-author-4a6b79e2d031-uniform-two-sided-expansion
title: Uniform two-sided expansion sufficient for global synchrony
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-4a6b79e2d031-uniform-centered-adjacency
  - lem-author-4a6b79e2d031-positive-degree-envelope
  - def-expander-sync-two-sided-expander
  - prop-expander-prereq-selfadjoint-order-and-norm
  - math:thm-finite-union-bound
  - math:thm-integral-logarithm-is-unbounded
  - def-expander-sync-erdos-renyi
  - math:cor-integral-logarithm-is-strictly-increasing
  - math:cor-integral-logarithm-agrees-with-natural-logarithm
dependency_roles:
  lem-author-4a6b79e2d031-uniform-centered-adjacency: mathematical-premise
  lem-author-4a6b79e2d031-positive-degree-envelope: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
  prop-expander-prereq-selfadjoint-order-and-norm: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
  math:thm-integral-logarithm-is-unbounded: mathematical-premise
  def-expander-sync-erdos-renyi: mathematical-premise
  math:cor-integral-logarithm-is-strictly-increasing: mathematical-premise
  math:cor-integral-logarithm-agrees-with-natural-logarithm: mathematical-premise
formulation_deps:
  - lem-author-4a6b79e2d031-positive-degree-envelope
  - lem-author-4a6b79e2d031-uniform-centered-adjacency
  - def-expander-sync-two-sided-expander
  - def-expander-sync-erdos-renyi
  - math:cor-integral-logarithm-agrees-with-natural-logarithm
argument_deps:
  - lem-author-4a6b79e2d031-uniform-centered-adjacency
  - lem-author-4a6b79e2d031-positive-degree-envelope
  - def-expander-sync-two-sided-expander
  - prop-expander-prereq-selfadjoint-order-and-norm
  - math:thm-finite-union-bound
  - math:thm-integral-logarithm-is-unbounded
  - def-expander-sync-erdos-renyi
  - math:cor-integral-logarithm-is-strictly-increasing
  - math:cor-integral-logarithm-agrees-with-natural-logarithm
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
---

## Statement

Fix $\gamma_0>1$, and let $a,b,\eta$ be the constants in the positive-degree-envelope lemma. For all sufficiently large $n$, uniformly over $p\in[0,1]$ with $d=np\ge\gamma_0\log n$, the graph $G(n,p)$ is an $(n,d,\alpha,c^-,c^+)$-expander with probability at least
$$1-Kd^{-1/4}-n^{-\eta}-n^{-2},$$
where $K$ is the constant of the uniform-centered-adjacency lemma, $\alpha=d^{-1/4}$, $c^-=a/2-1>-1$ and $c^+=b$. In particular $d>0$, $1+c^-=a/2>0$ is fixed, and $c^+$ is bounded independently of $n,p$.

## Statement references

[[lem-author-4a6b79e2d031-positive-degree-envelope]]

[[lem-author-4a6b79e2d031-uniform-centered-adjacency]]

[[def-expander-sync-erdos-renyi]]

[[def-expander-sync-two-sided-expander]]

[[math:cor-integral-logarithm-agrees-with-natural-logarithm]]

## Facts & Assumptions

[F1] The norm failure probability is at most $Kd^{-1/4}$ ([[lem-author-4a6b79e2d031-uniform-centered-adjacency]]); the degree-envelope failure probability is at most $n^{-\eta}+n^{-2}$ ([[lem-author-4a6b79e2d031-positive-degree-envelope]]). Their union obeys [[math:thm-finite-union-bound]].

[F2] The exact centered matrices and expander predicate are those of [[def-expander-sync-two-sided-expander]]; in particular, $\Delta_A=A-pJ$ is real symmetric. For real $t\ge0$, a real symmetric matrix of norm at most $t$ lies between $-tI$ and $tI$ in Loewner order ([[prop-expander-prereq-selfadjoint-order-and-norm]]).

[F3] The graph law $G(n,p)$ is the labelled loop-free independent-edge model of [[def-expander-sync-erdos-renyi]]. Both probability estimates in [F1] apply to this same law.

[F4] The integral logarithm $L$ is unbounded above ([[math:thm-integral-logarithm-is-unbounded]]) and strictly increasing on $(0,\infty)$ ([[math:cor-integral-logarithm-is-strictly-increasing]]), and $L(x)=\log x$ for every $x>0$ ([[math:cor-integral-logarithm-agrees-with-natural-logarithm]]).

## Proof

**Given:** The graph parameters and constants in the Statement.

**Goal:** Establish the stated expander event and probability.

1.1 For any $M\in\mathbb R$, [F4] gives an $x>0$ with $L(x)>M$. For every positive integer $n\ge x$, monotonicity and identification give $\log n=L(n)\ge L(x)>M$. Thus $\log n\to\infty$. Since $d\ge\gamma_0\log n$ and $\gamma_0>1$ is fixed, $d\to\infty$ uniformly over the admissible $p$. Eventually $n\ge3$, $d\ge\log n>0$ and $\alpha=d^{-1/4}\le\min\{a/2,1\}$, so both estimates in [F1] apply to [F3]. Outside the union of their failure events, all degrees are in $[ad,bd]$ and $\|\Delta_A\|<d^{3/4}=\alpha d$. [F1, F2, F3, F4, given]

2.1 Write $D$ for the degree matrix. The definition yields the exact identity $\Delta_L=L-dI+pJ=D-dI-\Delta_A$. The diagonal bounds and [F2] therefore imply $(a-1-\alpha)dI\preceq\Delta_L\preceq(b-1+\alpha)dI.$ By step 1.1 these imply $(a/2-1)dI\preceq\Delta_L\preceq bdI$, as required. This uses the actual loop-free degrees and centering, including the $-pI$ shift in $\Delta_A$. [F2, step 1.1]

3.1 Combining the adjacency and Laplacian conditions gives the declared expander event. The union bound in [F1] supplies its probability lower bound. The constants depend only on the fixed lower density ratio and not on the chosen sequence $p(n)$. [F1, F2, step 1.1, step 2.1] ∎

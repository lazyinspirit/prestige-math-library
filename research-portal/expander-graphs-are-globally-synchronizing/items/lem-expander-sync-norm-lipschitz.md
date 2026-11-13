---
id: lem-expander-sync-norm-lipschitz
title: "Convex adjacency norm: sharp coordinate constant and median counterexample"
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-erdos-renyi-random-graph
  - def-expander-sync-centered-matrices
  - lem-author-b785a1269d40-sharp-cube-norm-slope
  - lem-author-b785a1269d40-many-center-amplification
  - lem-author-b785a1269d40-degree-forces-centered-norm
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:def-convex-and-strictly-convex-functions-on-euclidean-sets
  - math:def-lipschitz-holder-contraction
dependency_roles:
  math:def-erdos-renyi-random-graph: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  lem-author-b785a1269d40-sharp-cube-norm-slope: mathematical-premise
  lem-author-b785a1269d40-many-center-amplification: mathematical-premise
  lem-author-b785a1269d40-degree-forces-centered-norm: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:def-convex-and-strictly-convex-functions-on-euclidean-sets: mathematical-premise
  math:def-lipschitz-holder-contraction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 35, Proof of Corollary 6.6
      statement: The proof of Corollary 6.6 asserts convexity and the coordinate
        1-Lipschitz property and then the median bound refuted in this item.
      hypotheses: Independent edge coordinates of the loop-free G(n,p), centering
        Delta_A = A - pJ; the median bound is asserted for n >= 1000 and 0 < p <
        1.
      reading_limits: PDF page 35 inspected as a rendered page and extracted text;
        extracted text of page 4 and Section 1.2 on page 6 inspected for the
        graph model, centering and norm conventions. This citation attributes
        the challenged claims only. The proof uses the three declared local
        lemma interfaces; no concentration theorem or underlying literature is
        imported.
dependency_level: 4
---

## Statement

Let $n\ge2$, $0<p<1$, and let $X$ consist of the $d=\binom n2$ independent Bernoulli-$p$ edge coordinates of the loop-free graph $G(n,p)$. Let $T(x)$ have zero diagonal and symmetric off-diagonal coordinates $x$, let $J$ be the all-ones matrix, and use the Euclidean coordinate metric and Euclidean operator norm. The function $f(x)=\|T(x)-pJ\|$ is convex; its sharp Lipschitz constant on $[0,1]^d$ is $\sqrt{2(n-1)/n}$, which exceeds 1 for $n\ge3$.

The article's accompanying bound $M\|\Delta_A\|\le4\sqrt{np(1-p)}+4$ for every $n\ge1000$ and $p\in(0,1)$ is false. Specifically, at $k=100$, $n=4^{k+2}k!$, $p=1/n$, every median of $\|\Delta_A\|=\|A-pJ\|$ is at least 9, whereas $4\sqrt{np(1-p)}+4<8$. Here a median $MZ$ means any real number with both $\mathbb P(Z\le MZ)\ge1/2$ and $\mathbb P(Z\ge MZ)\ge1/2$.

## Statement references

[[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[[math:def-convex-and-strictly-convex-functions-on-euclidean-sets]]

[[math:def-lipschitz-holder-contraction]]

## Facts & Assumptions

[F1] The loop-free graph law has independent Bernoulli edge coordinates ([[math:def-erdos-renyi-random-graph]]).

[F2] The article chooses $\Delta_A=A-pJ$ for $G(n,p)$ ([[def-expander-sync-centered-matrices]]).

[F3] The affine norm map is convex and has sharp cube Lipschitz constant $\sqrt{2(n-1)/n}$ ([[lem-author-b785a1269d40-sharp-cube-norm-slope]]).

[F4] At $n=4^{k+2}k!$ and $p=1/n$ the probability of a vertex with at least $k$ neighbors is at least $4/5$ ([[lem-author-b785a1269d40-many-center-amplification]]).

[F5] A graph with a vertex of degree at least $k$ satisfies $\|A-J/n\|\ge\sqrt k-1$ ([[lem-author-b785a1269d40-degree-forces-centered-norm]]).

## Proof

**Given:** The hypotheses and objects in the Statement.

**Goal:** Establish the asserted conclusions.

1.1 The edge-coordinate representation is [F1], with the centering identified by [F2]. Apply [F3] to obtain the asserted convexity and sharp Lipschitz constant. Its explicit two points lie in the actual cube; hence replacing the global domain by the Bernoulli coordinate cube does not restore the 1-Lipschitz assertion. [F1, F2, F3, given]

2.1 Choose $k=100$ and the displayed $n,p$. Then $n$ is an even integer exceeding 1000 and $0<p<1$, so the original median assertion applies to these parameters. By [F4] and [F5], $Z=\|\Delta_A\|\ge9$ on an event of probability at least $4/5$. If $m<9$, then $\mathbb P(Z\le m)\le1/5<1/2$. Consequently every median is at least 9. Meanwhile $np(1-p)=1-1/n<1$, so $4\sqrt{np(1-p)}+4<8$. This is a concrete counterexample under the original hypotheses. [F1, F2, F4, F5, given, algebra] ∎

## Source notes

The original article, PDF p. 35, proof of Corollary 6.6, says “It is not hard to see that f is convex and 1-Lipschitz” and then states the median bound refuted above. The definitions of $J$, $\Delta_A$, the choice $d^*=pn$, and the operator norm are in Section 1.2, PDF p. 6; the independent-edge model is described on PDF p. 4.

The local proof establishes the sharp coordinate constant and the counterexample to the displayed median bound under its full original quantifiers.

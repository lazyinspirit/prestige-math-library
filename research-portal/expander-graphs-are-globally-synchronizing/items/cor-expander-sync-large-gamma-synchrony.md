---
id: cor-expander-sync-large-gamma-synchrony
title: Synchronization for sufficiently large logarithmic density constants
kind: corollary
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-two-sided-expander
  - def-expander-sync-global-synchrony
  - def-expander-sync-centered-matrices
  - lem-author-cc4f5d837ae1-uniform-sharp-adjacency-bound
  - lem-author-cc4f5d837ae1-uniform-synchrony-slack
  - prop-expander-sync-prop-3-2
  - thm-expander-sync-thm-1-10
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
  - math:thm-finite-union-bound
dependency_roles:
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  lem-author-cc4f5d837ae1-uniform-sharp-adjacency-bound: mathematical-premise
  lem-author-cc4f5d837ae1-uniform-synchrony-slack: mathematical-premise
  prop-expander-sync-prop-3-2: mathematical-premise
  thm-expander-sync-thm-1-10: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 31, Paragraph after equation (6.2)
      statement: For each fixed small $\varepsilon>0$, the article states that there
        is a sufficiently large $\gamma_0>1$ such that for $p\ge\gamma_0\log
        n/n$, with high probability $G(n,p)$ has $d^*=pn$,
        $\alpha=(2+\varepsilon)(pn)^{-1/2}$, $c^-=-\varepsilon$, and
        $c^+=\varepsilon$ in its expander description, and satisfies Theorem
        1.10 for sufficiently large $n$.
      hypotheses: "Conditions and scope retained in the extracted formulation: For
        each fixed small $\\varepsilon>0$, the article states that there is a
        sufficiently large $\\gamma_0>1$ such that for $p\\ge\\gamma_0\\log
        n/n$, with high probability $G(n,p)$ has $d^*=pn$,
        $\\alpha=(2+\\varepsilon)(pn)^{-1/2}$, $c^-=-\\varepsilon$, and
        $c^+=\\varepsilon$ in its expander description, and satisfies Theorem
        1.10 for sufficiently large $n$."
      reading_limits: Freshly inspected original PDF p. 31 both as extracted text and
        rendered page image, including (6.1), (6.2) and the following
        large-gamma paragraph. Attribution only. The proof here replaces the
        spectral inference with the independently imported BBK results and local
        parameter-uniform applications. No original-article defect assessment or
        full source-proof audit is claimed.
dependency_level: 11
formulation_deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-two-sided-expander
  - def-expander-sync-global-synchrony
  - def-expander-sync-centered-matrices
  - thm-expander-sync-thm-1-10
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
argument_deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-two-sided-expander
  - def-expander-sync-global-synchrony
  - def-expander-sync-centered-matrices
  - lem-author-cc4f5d837ae1-uniform-sharp-adjacency-bound
  - lem-author-cc4f5d837ae1-uniform-synchrony-slack
  - prop-expander-sync-prop-3-2
  - thm-expander-sync-thm-1-10
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
  - math:thm-finite-union-bound
---

## Statement

Assume countable choice. For every fixed $0<\varepsilon<1$, there is $\gamma_0=\gamma_0(\varepsilon)>1$ such that, uniformly for $p\in[\gamma_0\log n/n,1]$, with probability tending to one as $n\to\infty$, the simple graph $G(n,p)$ is an $(n,d^*,\alpha,c^-,c^+)$-expander with
$$d^*=np,\qquad\alpha=(2+\varepsilon)(np)^{-1/2},\qquad c^-=-\varepsilon,\qquad c^+=\varepsilon,$$
and satisfies the hypotheses of Theorem 1.10; hence it is globally synchronizing. Uniformity means the supremum of the failure probability over the stated $p$ interval tends to zero; it includes every varying sequence $p=p(n)$ in that range.

## Facts & Assumptions

[F1] The graph law, reference centered matrices, two-sided expander and global synchrony conventions are [[def-expander-sync-erdos-renyi]], [[def-expander-sync-centered-matrices]], [[def-expander-sync-two-sided-expander]] and [[def-expander-sync-global-synchrony]]. The uniform quantifiers are [[def-expander-prereq-asymptotic-quantifiers]].

[F2] The uniform norm estimate with constant $2+\varepsilon$ is [[lem-author-cc4f5d837ae1-uniform-sharp-adjacency-bound]]. The simultaneous degree slack and numerical condition for $K=2+\varepsilon$ are [[lem-author-cc4f5d837ae1-uniform-synchrony-slack]].

[F3] Degree slack and the adjacency norm imply the two-sided expander by [[prop-expander-sync-prop-3-2]]. Its positive-reference synchrony criterion is [[thm-expander-sync-thm-1-10]], under [[math:def-countable-choice]].

[F4] For any finite family of events in one probability space, the probability of their union is at most the sum of their probabilities ([[math:thm-finite-union-bound]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove all stated conclusions.

1.1 Choose $\gamma_0>\max\{1,g_\varepsilon,12/\varepsilon^2\}$, where $g_\varepsilon$ is supplied by [F2]. The uniform spectral estimate persists on the smaller parameter interval with this larger lower endpoint. Intersect it with the degree good event from [F2]. By [F4] applied to the two complementary bad events, the failure probability is at most the sum of their two uniform bounds, tending to zero. On this intersection, $\|A-pJ\|\le(2+\varepsilon)\sqrt{np}=\alpha d^*$ and the exact degree inequalities of Proposition 3.2 hold. Thus [F3] establishes all three expander inequalities in the conventions of [F1]. [F1, F2, F3, F4, given, algebra]

2.1 Since $0<\varepsilon<1$, $c^->-1$. Supplier [F2] gives $d^*>0$, $0<\alpha\le1/5$ and the strict numerical condition of Theorem 1.10 uniformly for large $n$, because $1+4c^+-3c^-=1+7\varepsilon$. Apply [F3] under countable choice. Each graph on the good event is globally synchronizing. The probability conclusion, including every varying allowed sequence $p(n)$, follows from step 1.1 and the uniform quantifiers in [F1]. [F1, F2, F3, step 1.1, algebra] ∎

## Source notes

The original large-density claim on PDF p. 31, after (6.2), is retained: for sufficiently large $\gamma_0$, $\gamma\ge\gamma_0$ gives $d^*=pn$, $\alpha=(2+\varepsilon)(pn)^{-1/2}$, $c^-=-\varepsilon$, $c^+=\varepsilon$, the Theorem 1.10 condition and global synchrony with high probability for $p\ge\gamma\log n/n$. The explicit range $0<\varepsilon<1$ spells out its fixed small-parameter convention. The local proof preserves its rich parameter conclusion and makes the probability uniformity precise. The local proof uses [[lem-author-cc4f5d837ae1-uniform-sharp-adjacency-bound]] and [[lem-author-cc4f5d837ae1-uniform-synchrony-slack]]. The article and the fixed-law Péché–Soshnikov result are not logical suppliers for the spectral estimate.

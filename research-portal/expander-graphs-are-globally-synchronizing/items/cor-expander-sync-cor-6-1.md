---
id: cor-expander-sync-cor-6-1
title: Failure of the stated constant-two expansion bound — Corollary 6.1
kind: corollary
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-two-sided-expander
  - def-expander-sync-erdos-renyi
  - def-expander-prereq-asymptotic-quantifiers
  - cex-author-47d4423675aa-near-threshold-spectral-edge
dependency_roles:
  def-expander-sync-two-sided-expander: mathematical-premise
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  cex-author-47d4423675aa-near-threshold-spectral-edge: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF page 32, Corollary 6.1; PDF page 8, proof of Theorem 1.2
      statement: For every positive epsilon and p at least (1+epsilon) log n/n, the
        probability of the stated two-sided expander property with alpha at most
        (2+epsilon)/sqrt(pn) tends to one. The proof of Theorem 1.2 takes d*=pn
        and c-minus and c-plus depending on epsilon, strictly between -1 and 0
        and between 0 and e-1 respectively.
      hypotheses: The graph is G(n,p), p may depend on n, and the limit is as n tends
        to infinity.
      reading_limits: The supplied article's extracted text at the indicated passages
        was read for attribution. The article is not used as proof of its own
        claim; the independent counterexample supplier supplies the mathematical
        input below.
formulation_deps:
  - def-expander-sync-two-sided-expander
  - def-expander-sync-erdos-renyi
  - def-expander-prereq-asymptotic-quantifiers
argument_deps:
  - def-expander-sync-two-sided-expander
  - def-expander-sync-erdos-renyi
  - def-expander-prereq-asymptotic-quantifiers
  - cex-author-47d4423675aa-near-threshold-spectral-edge
dependency_level: 9
---

## Statement

The article's Corollary 6.1 asserts that for every $\varepsilon>0$ and every sequence $p=p(n)\ge(1+\varepsilon)\log n/n$, the graph $G(n,p)$ is with high probability an $(n,d^*,\alpha,c^-,c^+)$-expander with $d^*=pn$, $\alpha\le(2+\varepsilon)(pn)^{-1/2}$ and $-1<c^-<0<c^+<e-1$. Its use in the proof of Theorem 1.2 takes $c^\pm$ depending on the fixed $\varepsilon$. This assertion is false: for a positive fixed $\varepsilon$ and an admissible sequence $p$, even its required adjacency bound fails with probability tending to one.

## Statement references

[[def-expander-sync-two-sided-expander]]

[[def-expander-sync-erdos-renyi]]

[[def-expander-prereq-asymptotic-quantifiers]]

[[cex-author-47d4423675aa-near-threshold-spectral-edge]]

## Facts & Assumptions

[F1] In the two-sided expander definition, with adjacency matrix $A$, all-ones matrix $J$ and $d^*=pn$, the adjacency condition is $\|A-pJ\|\le\alpha pn$ ([[def-expander-sync-two-sided-expander]]).

[F2] For the simple graph $G(n,p)$ with $p=3\log n/(2n)$ for sufficiently large $n$, put $g=9/(2\sqrt5)-2>0$. With high probability, $\|A-pJ\|\ge(2+g/2)\sqrt{pn}$ ([[cex-author-47d4423675aa-near-threshold-spectral-edge]]).

[F3] The graph law has independent Bernoulli edge indicators and no loops; high probability means that the corresponding event probability tends to one as $n\to\infty$ ([[def-expander-sync-erdos-renyi]], [[def-expander-prereq-asymptotic-quantifiers]]).

## Proof

**Given:** The attributed assertion in the Statement and the inputs [F1]–[F3].

**Goal:** Exhibit a fixed positive $\varepsilon$ and an admissible sequence for which the asserted expander event has probability tending to zero.

1.1 Choose $\varepsilon=g/4$. Since $g>0$ and $g<2$, this choice lies in $(0,1/2)$. Set $p=3\log n/(2n)$ for all sufficiently large $n$, and choose any valid probabilities for the finitely many earlier indices. Then $p\ge(1+\varepsilon)\log n/n$ eventually, and $pn>0$ eventually. The graph sequence has the law required by [F2]. [F2, F3, algebra]

2.1 If the asserted expander event held for any parameters satisfying its inequalities, [F1] would give $\|A-pJ\|\le(2+\varepsilon)\sqrt{pn}$. But $\varepsilon=g/4<g/2$, so this event is disjoint from the high-probability event in [F2]. Therefore its probability tends to zero, establishing the stated failure. The conclusion is independent of the choices of $c^-$ and $c^+$. [F1, F2, step 1.1, algebra] ∎

## Source notes

The article citation records the original assertion and its use; it is not a premise in the refutation. The completed counterexample supplier contains the independent spectral input and its hypothesis transfer. This refutation alone makes no claim about the truth of Theorem 1.2 or global synchronization.

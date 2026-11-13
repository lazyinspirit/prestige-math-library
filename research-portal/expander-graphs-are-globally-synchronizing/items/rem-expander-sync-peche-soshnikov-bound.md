---
id: rem-expander-sync-peche-soshnikov-bound
title: The reported centered-adjacency estimate and its sparse-law limit
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-centered-matrices
  - def-expander-sync-adjacency-expander
  - def-expander-prereq-asymptotic-quantifiers
  - thm-expander-prereq-fixed-law-wigner-edge-input
  - cex-author-47d4423675aa-near-threshold-spectral-edge
dependency_roles:
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  thm-expander-prereq-fixed-law-wigner-edge-input: mathematical-premise
  cex-author-47d4423675aa-near-threshold-spectral-edge: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 31, Section 6, equation (6.1) and the following p=gamma log n/n
        paragraph; p. 6 for centering
      statement: The article attributes to Peche and Soshnikov the estimate
        ||Delta_A||<=2 sqrt(np(1-p))+o(n^(-1/44)) with high probability and
        infers alpha=(2+epsilon)/sqrt(np); the near-threshold discussion takes
        p=gamma log n/n, gamma>1, and Delta_A=A-pJ.
      hypotheses: Loop-free G(n,p), reference degree d*=np; the page discusses
        spectral expansion near the connectivity threshold. This citation
        records the exact original attribution challenged, not independent
        proof.
      reading_limits: Read the Section 6 opening and PDF p.31 in extracted text and
        rendered page image, and the current authored centering and graph-law
        definitions. No claim about failure of subsequent synchronization
        theorems is made.
dependency_level: 9
formulation_deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-centered-matrices
  - def-expander-sync-adjacency-expander
  - def-expander-prereq-asymptotic-quantifiers
argument_deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-centered-matrices
  - def-expander-sync-adjacency-expander
  - def-expander-prereq-asymptotic-quantifiers
  - thm-expander-prereq-fixed-law-wigner-edge-input
  - cex-author-47d4423675aa-near-threshold-spectral-edge
---

## Statement

The article attributes to Peche and Soshnikov the high-probability estimate $\|\Delta_A\|\le2\sqrt{np(1-p)}+o(n^{-1/44})$ as $n\to\infty$ and infers that $\alpha=(2+\varepsilon)(pn)^{-1/2}$ can be used. Here $d^*=pn>0$ and $\Delta_A=A-pJ$ for the simple graph $G(n,p)$. The adjacency-expander parameter $\alpha$ controls the inequality $\|\Delta_A\|\le\alpha d^*$; the reported choice therefore requires $\|\Delta_A\|\le(2+\varepsilon)\sqrt{np}$ for fixed $\varepsilon>0$. This attribution is retained as the original claim. It does not hold throughout the near-connectivity regime $p=\gamma\log n/n$, $\gamma>1$: the law $p=3\log n/(2n)$ has a fixed leading-order spectral gap above $2\sqrt{np}$, as in the counterexample below. In particular, this law excludes the reported choice of $\alpha$ for every fixed $0<\varepsilon<g/2$, where $g=9/(2\sqrt5)-2>0$. The fixed-law Wigner input does not justify a changing sparse law or this loop-free diagonal convention.

## Statement references

[[def-expander-sync-erdos-renyi]]

[[def-expander-sync-centered-matrices]]

[[def-expander-sync-adjacency-expander]]

[[def-expander-prereq-asymptotic-quantifiers]]

[[thm-expander-prereq-fixed-law-wigner-edge-input]]

[[cex-author-47d4423675aa-near-threshold-spectral-edge]]

## Facts & Assumptions

[F1] The original equation and its attribution occur on original PDF p. 31, before the paragraph taking $p=\gamma\log n/n$, $\gamma>1$.

[F2] The independent Wigner supplier fixes a compactly supported entry law, its variance and moment envelope, and uses independent identically distributed entries including the diagonal. [[thm-expander-prereq-fixed-law-wigner-edge-input]]

[F3] The counterexample with $p=3\log n/(2n)$ proves that $\|A-pJ\|\ge(2+g/2)\sqrt{np}$ with high probability, where $g=9/(2\sqrt5)-2>0$. [[cex-author-47d4423675aa-near-threshold-spectral-edge]]

[F4] For a loop-free graph the centered-at-mean matrix has diagonal zero, but $\Delta_A=A-pJ$ has diagonal $-p$. [[def-expander-sync-centered-matrices]] [[def-expander-sync-erdos-renyi]]

[F5] The adjacency-expander predicate is $\|\Delta_A\|\le\alpha d^*$, with $\Delta_A=A-(d^*/n)J$. At $d^*=pn>0$, the choice $\alpha=(2+\varepsilon)(pn)^{-1/2}$ is therefore equivalent to $\|A-pJ\|\le(2+\varepsilon)\sqrt{np}$. [[def-expander-sync-adjacency-expander]] [[def-expander-sync-centered-matrices]]

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the stated conclusions.

1.1 Fact [F1] preserves the article attribution. The Wigner normalization in [F2] would turn its error $o(n^{-6/11+\varepsilon})$ into $o(n^{-1/22+\varepsilon})$ upon multiplying by $\sqrt n$; choosing $\varepsilon=1/44$ explains the exponent in the reported formula. This computation still requires a fixed law and the stated diagonal assumptions, and supplies no theorem uniform in a vanishing $p$. [F1, F2, algebra]

2.1 By [F3], the claim fails for $\gamma=3/2$, with the same loop-free graph and reference-degree centering in [F4]. Since $2\sqrt{np(1-p)}\le2\sqrt{np}$, no $o(n^{-1/44})$ error can close that positive leading-order gap. Thus the reported formula and its constant-two consequence cannot be used throughout the stated near-threshold regime. The original claim remains covered by its attribution and the explicit counterexample, rather than being silently weakened. [F3, F4, step 1.1, algebra]

3.1 By [F5], the reported choice of $\alpha$ requires $\|A-pJ\|\le(2+\varepsilon)\sqrt{np}$. For every fixed $0<\varepsilon<g/2$, the event in [F3] instead gives $\|A-pJ\|\ge(2+g/2)\sqrt{np}>(2+\varepsilon)\sqrt{np}$. Thus the probability of the reported adjacency-expander predicate tends to zero for this law. This identifies the constant-two choices excluded by the counterexample without claiming that every positive $\varepsilon$ is excluded. [F3, F5, step 2.1, algebra] ∎

## Source notes

This is a local authoring correction with explicit independent source support for its counterexample. The fixed-law source remains correctly bounded to its original hypotheses. No conclusion about the article synchronization theorems follows from this spectral counterexample: those statements and their other arguments remain separate obligations. The article-report concern remains a lead for the independent final original-PDF assessor.

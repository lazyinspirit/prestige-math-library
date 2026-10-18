---
id: thm-it-type-class-entropy-approximation
kind: theorem
title: "Uniform entropy approximation for type-class sizes"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - lem-it-type-class-cardinality-bounds
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - thm-logarithm-derivative-and-integral
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the estimate is uniform over a finite-dimensional type set."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Proposition 1.5 (Method of types), printed pp. 15–16 / author PDF pp. 15–16"
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "Theorem 11.1.3 and the summary of basic type bounds, printed pp. 350–355 (complete Chapter 11 PDF pp. 3–9)"
---

## Statement

For a fixed finite alphabet $\mathcal A$ of size $k\ge1$, uniformly over every $n$-type $q\in\mathcal P_n(\mathcal A)$,
$$nH(q)-(k-1)\ln(n+1)\le\ln|T_q|\le nH(q).$$
Consequently,
$$0\le H(q)-\frac1n\ln|T_q|\le\frac{(k-1)\ln(n+1)}n\longrightarrow0$$
uniformly over $q\in\mathcal P_n(\mathcal A)$ as $n\to\infty$.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$, $k=|\mathcal A|\ge1$, and an attainable type $q$ for each $n\ge1$.

[F1] [[lem-it-type-class-cardinality-bounds]]: $(n+1)^{-(k-1)}e^{nH(q)}\le|T_q|\le e^{nH(q)}$ for every $n$-type $q$.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(q)$ is finite and uses the natural logarithm.

[F3] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\ln x=\int_1^x ds/s$.

## Proof

1.1 Each type class is nonempty because $q$ is attainable, so $|T_q|>0$. Taking natural logarithms in [F1] gives $nH(q)-(k-1)\ln(n+1)\le\ln|T_q|\le nH(q)$. [F1, F2, algebra]

2.1 Divide by $n$ and subtract from $H(q)$ to get the uniform error interval in the statement. For $x\ge1$, [F3] and $1/s\le1/\sqrt{s}$ give $\ln x\le\int_1^x ds/\sqrt{s}=2(\sqrt{x}-1)$, hence $\ln(n+1)/n\to0$. The bound is independent of $q$, so convergence is uniform. [F3, step 1.1, algebra] ∎


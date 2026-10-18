---
id: ex-it-binary-type-class-count
kind: example
title: "Binary type classes at length ten"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-empirical-type-and-type-class
  - lem-it-type-class-cardinality-bounds
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all counts are finite."
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
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "Theorem 11.1.3 and Example 11.1.3 (binary type classes), printed pp. 350–353 (complete Chapter 11 PDF pp. 3–6)"
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Proposition 1.5 (Method of types), printed pp. 15–16 / author PDF pp. 15–16"
---

## Example

For $\mathcal A=\{0,1\}$ and $n=10$, the types with $q(1)=1/5$ and $q(1)=1/2$ have class sizes $45$ and $252$. Their entropy exponentials are respectively $5^{10}/4^8$ and $2^{10}=1024$, and the polynomially corrected bounds use the factor $(n+1)^{-1}=1/11$.

## Facts & Assumptions

**Given:** The binary alphabet $\mathcal A=\{0,1\}$, block length $n=10$, and the two stated attainable types.

[F1] [[def-it-empirical-type-and-type-class]]: a type class consists of the words with prescribed symbol counts.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(q)=-\sum_{a:q(a)>0}q(a)\ln q(a)$ in nats.

[F3] [[lem-it-type-class-cardinality-bounds]]: for an alphabet of size $k$, $(n+1)^{-(k-1)}e^{nH(q)}\le|T_q|\le e^{nH(q)}$.

## Verification

**Given:** The data above.

1.1 For $q(1)=1/5$, the counts are $(8,2)$, so $|T_q|=10!/(8!2!)=45$ and $e^{10H(q)}=(1/5)^{-2}(4/5)^{-8}=5^{10}/4^8$. [F1, F2, given, algebra]

1.2 For $q(1)=1/2$, the counts are $(5,5)$, so $|T_q|=10!/(5!5!)=252$ and $e^{10H(q)}=2^{10}=1024$. Since $1024\le252\cdot11=2{,}772$ and $252\le1{,}024$, we have $1024/11\le252\le1024$, retaining the polynomial factor in [F3]. [F1, F2, F3, given, algebra]

2.1 Since $5^{10}=9{,}765{,}625$, $4^8=65{,}536$, $45\cdot11\cdot4^8=32{,}440{,}320$, and $45\cdot4^8=2{,}949{,}120$, cross-multiplication in step 1.1 gives $e^{10H(q)}/11\le45\le e^{10H(q)}$, as [F3] states. [F3, step 1.1, algebra]

3.1 At endpoint types $q=(1,0)$ and $q=(0,1)$, each type class is a singleton and $H(q)=0$, so the lower cardinality bound is $1/11$, while the class size and upper bound equal $1$; thus [F3] also covers zero-coordinate boundary cases. [F1, F2, F3, algebra] ∎


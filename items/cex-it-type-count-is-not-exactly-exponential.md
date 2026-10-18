---
id: cex-it-type-count-is-not-exactly-exponential
kind: counterexample
title: "A balanced binary type class is not exactly exponential in entropy"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-empirical-type-and-type-class, lem-it-type-class-cardinality-bounds, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the counterexample is a finite count."
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
      locator: "Theorem 11.1.3 and Theorem 11.1.4, printed pp. 350–355 (complete Chapter 11 PDF pp. 3–9)"
---

## Statement refuted

For every finite alphabet, every $n\ge1$, and every $n$-type $q$, the type-class size is exactly $|T_q|=e^{nH(q)}$.

## Facts & Assumptions

**Given:** The binary alphabet $\mathcal A=\{0,1\}$ and block length $n=2$.

[F1] [[def-it-empirical-type-and-type-class]]: $T_q$ consists of the words whose empirical vector is $q$.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(q)=-\sum_{a:q(a)>0}q(a)\ln q(a)$.

[F3] [[lem-it-type-class-cardinality-bounds]]: $(n+1)^{-(k-1)}e^{nH(q)}\le|T_q|\le e^{nH(q)}$ for an alphabet of size $k$.

## Counterexample

**Given:** $n=2$ and the binary type $q(0)=q(1)=1/2$.

1.1 The words with type $q$ are $01$ and $10$, so $|T_q|=2$. [F1, given, construct]

2.1 By [F2], $H(q)=\ln2$, and therefore $e^{2H(q)}=4\ne2=|T_q|$. This single attainable type refutes the universal exact-equality claim. [F2, step 1.1, algebra]

3.1 At the boundary type $q=(1,0)$, the only word is $00$, and both $|T_q|$ and $e^{2H(q)}$ equal $1$; this boundary equality does not rescue the refuted universal claim and is consistent with [F3]. [F1, F2, F3, algebra] ∎


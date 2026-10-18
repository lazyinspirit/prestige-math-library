---
id: def-it-multiterminal-lossless-code
kind: definition
title: "Finite fixed-length multiterminal lossless code"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-finite-iid-multisource
  - def-it-information-units-and-logarithm-base
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; each encoder and decoder is a function between finite sets."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 15"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§15.4, printed pp. 549–550, definition of a two-encoder distributed source code and block error."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 11, §11.6, Definition 11.15, printed p. 225, multi-terminal compression."
---

## Definition

Fix a finite-alphabet IID multisource from [[def-it-finite-iid-multisource]] and a blocklength $n\ge1$. Choose positive integers $M_1,\ldots,M_k$. A **fixed-length multiterminal lossless code** consists of separate deterministic encoders
$$f_{i,n}:\mathcal X_i^n\to[M_i]:=\{1,\ldots,M_i\},\qquad 1\le i\le k,$$
and one common deterministic decoder
$$g_n:\prod_{i=1}^k[M_i]\to\prod_{i=1}^k\mathcal X_i^n.$$
Its block-error probability is
$$P_e^{(n)}:=\mathbb P\!\left[g_n\bigl(f_{1,n}(X_1^n),\ldots,f_{k,n}(X_k^n)\bigr)\ne(X_1^n,\ldots,X_k^n)\right].$$
The rate of encoder $i$ is $R_{i,n}:=n^{-1}\ln M_i$ nats per source symbol, with the logarithm convention of [[def-it-information-units-and-logarithm-base]]. A vector $R=(R_1,\ldots,R_k)\in[0,\infty)^k$ is **achievable** if there are strictly increasing blocklengths $n_j\to\infty$ and such codes for which $P_e^{(n_j)}\to0$ and $\limsup_{j\to\infty}R_{i,n_j}\le R_i$ for every $i$. The encoders do not observe other terminals' source blocks; only the common decoder receives all message indices.

## Remarks

Each index alphabet can be transmitted using $\lceil\log_2 M_i\rceil$ bits of fixed length. The corresponding rate in nats differs from $n^{-1}\ln M_i$ by at most $(\ln2)/n$ due to integer bit rounding.

---
id: def-archimedean-embeddings-and-number-field-signature
kind: definition
title: "Archimedean embeddings and signature"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-number-field, def-f-homomorphisms-and-embeddings-of-field-extensions]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Stein, section 6.1"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Definition

Let $K$ be a number field. Let $r_1$ be the number of field embeddings
$K\to\mathbb R$ that fix $\mathbb Q$, and let $r_2$ be the number of
complex-conjugate pairs among the nonreal field embeddings $K\to\mathbb C$
that fix $\mathbb Q$. The **signature of $K$** is $(r_1,r_2)$, with
$r_1+2r_2=[K:\mathbb Q]$. Embedding determinants use all of these real and
nonreal embeddings.

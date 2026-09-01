---
id: def-braid-group-by-the-artin-presentation
kind: definition
title: "The braid group by Artin presentation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-presentation, def-relators-relations-and-finite-presentations]
landmark: true
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Definition

For $n\ge2$, the **braid group** $B_n$ is the group with generators
$\sigma_1,\dots,\sigma_{n-1}$ and relations

$$\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}\qquad(1\le i\le n-2),$$

$$\sigma_i\sigma_j=\sigma_j\sigma_i\qquad(1\le i,j\le n-1,\ |i-j|>1).$$

Equivalently,

$$B_n=\langle \sigma_1,\dots,\sigma_{n-1}\mid \sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}\ (1\le i\le n-2),\ \sigma_i\sigma_j=\sigma_j\sigma_i\ (1\le i,j\le n-1,\ |i-j|>1)\rangle,$$

interpreted in the sense of [[def-group-presentation]] and
[[def-relators-relations-and-finite-presentations]].

For $n=0$ and $n=1$, there are no generators, and $B_n$ is the trivial group
given by the empty presentation.

---
id: def-coinvariants-functor-of-a-group-module
kind: definition
title: "The coinvariants functor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-group-ring-module-and-trivial-module-convention, def-tensor-product-of-modules-by-generators-and-relations]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

For a left $G$-module $M$, its coinvariants are
$M_G=M/\langle gm-m:g\in G,m\in M\rangle$. If
$f:M\to N$ is $G$-linear, define $f_G:M_G\to N_G$ by
$f_G([m])=[f(m)]$. Equivariance makes this well defined, and identities and
composites are preserved, so $M\mapsto M_G$ is a functor. The map
$1\otimes m\mapsto[m]$ naturally identifies
$\mathbb Z\otimes_{\mathbb Z[G]}M$ (with right trivial $\mathbb Z$) with
$M_G$.

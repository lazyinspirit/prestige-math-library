---
id: lem-regular-elements-form-a-connected-dense-open-subset
kind: lemma
title: "Regular elements form a connected dense open subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

In a complex semisimple Lie algebra $\mathfrak g$, the set of regular elements is a connected dense Zariski-open subset of $\mathfrak g$.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$ of dimension $n$ and rank $r$.

## Proof

**Proof technique:** direct.

1.1 In any fixed basis of $\mathfrak g$, the matrix entries of $\operatorname{ad}_x$ depend linearly on $x$. By [[def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra]], regularity is the condition that $\operatorname{rank}(\operatorname{ad}_x)=n-r$, so the nonregular locus is cut out by the vanishing of all $(n-r)\times(n-r)$ minors and is therefore Zariski closed. [given, algebra]

2.1 Standard structure theory for complex semisimple Lie algebras supplies at least one regular element, so the complement of the closed set from step 1.1 is a nonempty Zariski-open subset. Because a nonempty Zariski-open subset of the complex affine space underlying $\mathfrak g$ is dense, the regular set is dense. [step 1.1]

3.1 The complement of a proper complex algebraic subset of a finite-dimensional complex vector space is connected, so the nonempty open regular set from step 2.1 is connected as well. Hence the regular elements form a connected dense open subset. [step 2.1] ∎

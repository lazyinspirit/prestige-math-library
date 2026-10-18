---
id: thm-temperley-lieb-spencer-jones-wenzl-existence-criterion
kind: theorem
title: "Spencer's quantum-characteristic criterion for Jones–Wenzl existence"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - lem-temperley-lieb-jones-wenzl-projector-exists-iff-trivial-projective
  - thm-temperley-lieb-link-state-diagram-basis-is-cellular
  - cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "R. A. Spencer, The Modular Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§§2.2–2.3, Theorem 8.4, and §10.3, PDF pp. 6–8 and 22–32: quantum characteristic, composition-factor support, and the projector criterion."
---

## Statement

Let $K$ be a field, $\delta\in K$, let $\ell$ be the quantum characteristic from [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]], and let $p=\operatorname{char}K$ (write $p=\infty$ in characteristic zero). A normalized idempotent $e\in\mathrm{TL}_n(K,\delta)$ satisfying $\varepsilon(e)=1$ and $d_i e=0$ for every $1\le i<n$ exists exactly in the following cases:

1. if $\ell=\infty$, every finite $n$ satisfies the criterion $n<\ell$;
2. if $\ell<\infty$ and $p$ is finite, then $n<\ell$ or $n=a\,p(i)-1$ for some $i\ge1$ and integer $1\le a<p$;
3. if $\ell<\infty$ and $p=\infty$, then $n<\ell$ or $n=a\ell-1$ for some positive integer $a$.

The criterion is over fields. It does not assert descent to an arbitrary coefficient ring.

## Proof status

The local projective-idempotent equivalence is proved in [[lem-temperley-lieb-jones-wenzl-projector-exists-iff-trivial-projective]]. The remaining required step is the arbitrary-field decomposition argument that identifies projectivity of the trivial simple module with the singleton support condition in Spencer's Theorem 8.4. Spencer's proof uses the truncation functor, linkage by the central element $F_n$, uniqueness of standard-module morphisms, and a separate induction for the trivial composition-factor multiplicities. These results are not supplied by the current local carriers, and this item is not a proved supplier.

## Owner escalation

Proposed A-page supplier: a complete local proof that the trivial module is projective exactly when its Spencer composition-factor support is the singleton containing $n$, followed by the digit-set reduction to the three cases above. Until that supplier is authored, keep this theorem escalated and do not use it in logical dependencies.

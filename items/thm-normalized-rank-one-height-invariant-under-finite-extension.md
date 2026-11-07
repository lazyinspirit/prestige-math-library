---
id: thm-normalized-rank-one-height-invariant-under-finite-extension
kind: theorem
title: "Normalized height of a rank-one normed module is invariant under finite extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-height-of-a-rank-one-normed-module-over-number-ring
  - def-number-field
  - lem-finite-module-cardinality-scales-under-number-field-extension
  - thm-height-of-a-rank-one-normed-module-independent-of-element
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 355–356; normalized degree convention for the differential module."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC. Let $K'/K$ be a finite extension of number fields of degree $d$, and let $(M,\|\cdot\|_v)$ be a rank-one normed $\mathcal O_K$-module with the archimedean norms used in the rank-one module height. Give $M'=M\otimes_{\mathcal O_K}\mathcal O_{K'}$ the base-changed norms at every archimedean place of $K'$. Then the normalized logarithmic heights satisfy $h_{K'}(M')=h_K(M)$.

## Statement references

[[def-height-of-a-rank-one-normed-module-over-number-ring]]

[[thm-height-of-a-rank-one-normed-module-independent-of-element]]

[[lem-finite-module-cardinality-scales-under-number-field-extension]]

[Faltings 1983, §2, printed pp. 355–356](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

## Facts & Assumptions

**Given:** AC; a finite extension $K'/K$ of degree $d$ and a rank-one normed module over $\mathcal O_K$.

[A1] [[def-axiom-of-choice]]: AC is inherited from the supplied height/model interface; the displayed local calculation makes no further use of it.

[F1] [[def-height-of-a-rank-one-normed-module-over-number-ring]]: the multiplicative height is the finite index of a generator divided by the product of its archimedean norms with real/complex weights; its logarithm is divided by the field degree.

[F2] [[thm-height-of-a-rank-one-normed-module-independent-of-element]]: the displayed module height is independent of the chosen nonzero element.

[F3] [[lem-finite-module-cardinality-scales-under-number-field-extension]]: for a finite $\mathcal O_K$-module $Q$, $\#(Q\otimes_{\mathcal O_K}\mathcal O_{K'})=(\#Q)^d$.

## Proof

**Proof technique:** compare the finite and infinite factors after extension.

**Given:** [F1]–[F3], $d=[K':K]$, and $0\ne m\in M$.

1.1 Put $Q=M/\mathcal O_Km$. Right exactness of tensor product identifies $M'/\mathcal O_{K'}m$ with $Q\otimes_{\mathcal O_K}\mathcal O_{K'}$. By [F3],
$$\#(M'/\mathcal O_{K'}m)=(\#Q)^d=(\#(M/\mathcal O_Km))^d.$$ [F3, given, algebra]

1.2 For every archimedean place $v$ of $K$, the sum of the weights $\epsilon_w$ over places $w|v$ of $K'$ is $d\epsilon_v$: for a real $v$, real places contribute $1$ and complex places contribute $2$; for a complex $v$, each of its $d$ extensions has weight $2$. Hence
$$\prod_{w|\infty}\|m\|_w^{\epsilon_w}=\left(\prod_{v|\infty}\|m\|_v^{\epsilon_v}\right)^d.$$ [given, algebra]

2.1 By [F1] and [F2], compute both heights using the same element $m$. The numerator and denominator each acquire the $d$th power by steps 1.1 and 1.2, while $[K':\mathbb Q]=d[K:\mathbb Q]$. Taking logarithms and dividing by these degrees yields $h_{K'}(M')=h_K(M)$. [F1, F2, step 1.1, step 1.2, algebra] ∎

## Proof status

The finite-index scaling calculation is complete conditional on [F3]. The current proof of `lem-finite-module-cardinality-scales-under-number-field-extension` still records unresolved supplier IDs `cor-norm-of-a-prime-ideal`, `lem-nonzero-number-field-ideal-has-finite-quotient`, `thm-fundamental-identity-for-primes-in-number-fields`, and `thm-ideal-norm-is-multiplicative`. This height-invariance claim remains escalated until those inputs are reconciled.

---
id: prop-verma-homomorphisms-are-singular-vectors
kind: proposition
title: "Verma homomorphisms and singular vectors"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-verma-modules]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §15.1"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

For weights $\lambda,\mu$, evaluation at the highest-weight vector gives a natural vector-space isomorphism
$$\operatorname{Hom}_{\mathfrak g}(M(\mu),M(\lambda))\cong\{v\in M(\lambda)_\mu:\mathfrak n^+v=0\}.$$

## Facts & Assumptions

**Given:** The universal property of [[thm-universal-property-of-verma-modules]].

## Proof

**Proof technique:** direct.

1.1 A homomorphism $f$ sends the highest-weight vector $v_\mu$ to a vector of weight $\mu$ killed by $\mathfrak n^+$; evaluation is therefore a linear map into the displayed space. [given]

2.1 Conversely, a vector $v$ in that space is a highest-weight vector of weight $\mu$, so the universal property supplies a unique homomorphism $M(\mu)\to M(\lambda)$ sending $v_\mu$ to $v$. The two constructions are inverse. [given, construct] ∎

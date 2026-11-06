---
id: lem-cft-coinvariant-dual-is-invariant-functional
kind: lemma
title: The coinvariant dual is the invariant-functional space
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: mathematics
library: mathematics
deps:
  - def-cft-coinvariants-and-conformal-blocks
dependency_roles:
  def-cft-coinvariants-and-conformal-blocks: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 4, §4.4.4
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch4.pdf
      locator: Conformal blocks as the dual of coinvariants.
---

## Statement

For $W=\operatorname{span}_{\mathbb C}\{x\cdot m:x\in\mathfrak g_{\mathrm{out}},\ m\in M_\bullet\}$ and $C_X(M_\bullet)=M_\bullet/W$, pullback along the quotient map identifies $C_X(M_\bullet)^*$ with
$$\{\lambda\in M_\bullet^*: \lambda(x\cdot m)=0\text{ for every }x\in\mathfrak g_{\mathrm{out}},\ m\in M_\bullet\}.$$
The dual is the algebraic linear dual; no topology or continuous-dual convention is imposed.

## Statement references

[[def-cft-coinvariants-and-conformal-blocks]]

## Facts & Assumptions

**Given:** The algebraic tensor product, outgoing Lie-algebra action, and quotient subspace in [[def-cft-coinvariants-and-conformal-blocks]].

[F1] [[def-cft-coinvariants-and-conformal-blocks]]: $C_X(M_\bullet)=M_\bullet/W$, where $W=\operatorname{span}_{\mathbb C}\{x\cdot m\}$, and $B_X(M_\bullet)=\operatorname{Hom}_{\mathbb C}(C_X(M_\bullet),\mathbb C)$.

## Proof

1.1 Let $q:M_\bullet\to M_\bullet/W$ be the quotient map. If $\bar\lambda\in(M_\bullet/W)^*$, then $\lambda:=\bar\lambda\circ q$ vanishes on $W=\ker q$, so $\lambda(x\cdot m)=0$ for every $x,m$. [given, F1, algebra]

2.1 Conversely, if $\lambda\in M_\bullet^*$ vanishes on every $x\cdot m$, linearity makes it vanish on their span $W$. Define $\bar\lambda(q(m)):=\lambda(m)$. If $q(m)=q(m')$, then $m-m'\in W$, whence $\lambda(m)=\lambda(m')$; thus $\bar\lambda$ is well-defined and linear. The two constructions are inverse by surjectivity of $q$, proving the equality. [given, F1, step 1.1, construct] ∎

---
id: "lem-auslander-buchsbaum-base-case-free-module"
kind: "lemma"
title: "auslander buchsbaum base case free module"
deps: ["def-projective-dimension-of-an-object", "thm-finite-flat-modules-over-local-rings-are-free", "lem-projective-modules-are-flat-over-an-arbitrary-ring", "cor-depth-as-first-nonzero-ext"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 1.53, pd=0 case, p.24"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

If a nonzero finite module $M$ over a nonzero Noetherian local ring $R$ has projective dimension zero, then it is finite free of positive rank and $\operatorname{depth}_RM=\operatorname{depth}R$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-projective-dimension-of-an-object]]: Assume projective resolutions are supplied or exist in the relevant class. The **projective dimension** of $M$ is $$\operatorname{pd}(M)=\inf\{d\geq0:M\text{ has a projective resolution of length }d\},$$ with value $\infty$ if this set is empty. A length-zero projective resolution exists exactly when $M$ is projective.

[F2] [[thm-finite-flat-modules-over-local-rings-are-free]]: The standard theorem holds over arbitrary local rings; the proof written here is the Noetherian local case. Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M$ be a finite flat $R$-module. Then $M$ is free.

[F3] [[lem-projective-modules-are-flat-over-an-arbitrary-ring]]: Every projective left or right module over an arbitrary ring is flat on its appropriate side.

[F4] [[cor-depth-as-first-nonzero-ext]]: Let $R$ be Noetherian, let $M$ be finite, and let $I$ lie in the Jacobson radical. Then $$\operatorname{depth}_I(M)= \inf\{i\ge0:\operatorname{Ext}^i_R(R/I,M)\ne0\},$$ where the infimum of the empty set is $\infty$.

## Proof

1.1 Projective dimension zero means projective. A projective module is flat, and the finite-flat theorem for Noetherian local rings makes $M$ finite free, say $R^r$. Nonzeroness forces $r\ge1$. [F1, F3, F2]

2.1 Ext into a finite direct sum is the finite direct sum of the corresponding Ext groups, as follows by applying Hom to a resolution. Thus $\operatorname{Ext}^i_R(k,R^r)=\operatorname{Ext}^i_R(k,R)^r$ has the same first nonzero degree as $\operatorname{Ext}^i_R(k,R)$. The Ext-depth criterion gives equality of depths, including depth zero. [F4, step 1.1, algebra] ∎

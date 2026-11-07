---
id: lem-smith-diagonal-spin-square-local-correction
kind: lemma
title: "The local diagonal-spin correction for a square input"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps: [def-axiom-of-choice, def-dependent-choice, thm-local-hilbert-symbol-cup-product-norm-criterion, thm-local-artin-reciprocity-and-norm-index]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC and DC are inherited from the local Hilbert-symbol norm criterion.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Morgan and A. Smith, Field change for the Cassels–Tate pairing and applications to class groups, Proposition 8.1"
      url: "https://arxiv.org/pdf/2206.13403"
      locator: "§8.1, involution spin and its local conditions"
verification: {}
---

## Statement

Assume AC and DC. Let $F$ be a nonarchimedean local field of characteristic zero with finite residue field, let $K=F(\sqrt\delta)$ be a quadratic field extension, and let $\kappa$ be its nontrivial automorphism. For $\beta\in K^\times$, put $\alpha=\beta^2$, $t=\operatorname{Tr}_{K/F}(\alpha)$ and $a=N_{K/F}(\alpha)$. Suppose $t\ne0$. Write $H_{F,2}$ for the quadratic Hilbert symbol. Then
$$H_{F,2}(t,-\delta a)=H_{F,2}(2,-\delta).$$
This gives a local correction independent of $\beta$ when the input is a square. It does not by itself prove the global involution-spin identity or the dyadic unramified case.

## Statement references

[[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[Morgan and Smith, *Field change for the Cassels–Tate pairing and applications to class groups*, Proposition 8.1](https://arxiv.org/pdf/2206.13403)

## Facts & Assumptions

**Given:** AC, DC, the quadratic local extension, $\beta$, $\alpha$, $t$ and $a$ in the Statement.

[F1] The quadratic Hilbert symbol is bilinear on square classes and vanishes on norms from the corresponding quadratic extension. [[thm-local-hilbert-symbol-cup-product-norm-criterion]] [[thm-local-artin-reciprocity-and-norm-index]]

## Proof

1.1 Write $\beta=u+v\sqrt\delta$ with $u,v\in F$. Then $a=N_{K/F}(\beta)^2$ is a square and $$t=2(u^2+\delta v^2).$$ Since $t\ne0$, the element $u+v\sqrt{-\delta}$ has nonzero norm $u^2+\delta v^2$ in the quadratic étale algebra $F(\sqrt{-\delta})$. If $-\delta$ is a square, its Hilbert symbol is already trivial; otherwise this is a norm from the quadratic field $F(\sqrt{-\delta})$. [given, algebra]

2.1 By [F1], the factor $u^2+\delta v^2$ has trivial Hilbert pairing with $-\delta$. Bilinearity and the fact that $a$ is a square give $$H_{F,2}(t,-\delta a)=H_{F,2}(2,-\delta)H_{F,2}(u^2+\delta v^2,-\delta)=H_{F,2}(2,-\delta).$$ This is the claimed local identity and uses no global spin assertion. [F1, step 1.1, algebra] ∎

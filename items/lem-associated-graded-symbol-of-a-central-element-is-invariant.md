---
id: lem-associated-graded-symbol-of-a-central-element-is-invariant
kind: lemma
title: "The leading PBW symbol of a central element is invariant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-quadratic-casimir-element-is-central, def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra, prop-associated-graded-of-the-pbw-filtration-is-commutative, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Lin Chen, Geometric Representation Theory I, Lecture 5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture5.pdf"
pipeline_run: null
---

## Statement

If $z\in Z(U(\mathfrak g))$ has leading PBW symbol $\sigma_m(z)\in \operatorname{gr}_m U(\mathfrak g)\cong S^m(\mathfrak g)$, then $\sigma_m(z)$ is invariant under the adjoint action of $\mathfrak g$.

## Facts & Assumptions

**Given:** A central element $z\in Z(U(\mathfrak g))$ of PBW degree $m$ and its leading symbol $\sigma_m(z)\in S^m(\mathfrak g)$.

## Proof

**Proof technique:** direct.

1.1 Centrality means $[x,z]=0$ for every $x\in \mathfrak g$. For $x\in F_1U(\mathfrak g)$ and $z\in F_mU(\mathfrak g)$, the commutator estimate in [[prop-associated-graded-of-the-pbw-filtration-is-commutative]] gives $[x,z]\in F_mU(\mathfrak g)$. Thus the adjoint action of $x$ induces an operator on $\operatorname{gr}_mU(\mathfrak g)$. [given]

2.1 Under the PBW identification with $S(\mathfrak g)$, that induced operator is the derivation extending $x\cdot y=[x,y]$ on $y\in\mathfrak g$. It therefore sends $\sigma_m(z)$ to the degree-$m$ symbol of $[x,z]$. The latter commutator is zero by step 1.1, so $x\cdot \sigma_m(z)=0$ for every $x\in \mathfrak g$. [step 1.1, algebra]

3.1 Therefore the leading PBW symbol of $z$ lies in $S(\mathfrak g)^{\mathfrak g}$. [step 2.1] ∎

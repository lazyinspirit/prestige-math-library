---
id: prop-harish-chandra-projection-is-multiplicative-on-the-center
kind: proposition
title: "The Harish-Chandra projection is multiplicative on the center"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-harish-chandra-projection, lem-central-elements-have-weight-zero]
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
pipeline_run: null
---

## Statement

For central elements $z,z'\in Z(U(\mathfrak g))$, the Harish-Chandra projection from [[def-harish-chandra-projection]] satisfies

$$\operatorname{pr}(zz')=\operatorname{pr}(z)\operatorname{pr}(z').$$

## Facts & Assumptions

**Given:** Central elements $z,z'\in Z(U(\mathfrak g))$.

## Proof

**Proof technique:** direct.

1.1 By [[lem-central-elements-have-weight-zero]], both $z$ and $z'$ lie in $U(\mathfrak g)_0$. Write $z=\operatorname{pr}(z)+a$ and $z'=\operatorname{pr}(z')+a'$ with $a,a'\in \mathfrak n^-U(\mathfrak g)+U(\mathfrak g)\mathfrak n^+$. [given, construct]

2.1 Put $I:=\mathfrak n^-U(\mathfrak g)+U(\mathfrak g)\mathfrak n^+$. Multiplication on either side by $U(\mathfrak h)$ preserves $I$. Moreover, if $c$ is central, then $Ic\subseteq I$: for a term $xu$ with $x\in\mathfrak n^-$, one has $(xu)c=x(uc)$, while for a term $uy$ with $y\in\mathfrak n^+$, centrality gives $(uy)c=(uc)y$. [step 1.1, algebra]

3.1 Using only the decomposition of $z$, write $$zz'=\operatorname{pr}(z)z'+az'=\operatorname{pr}(z)\operatorname{pr}(z')+\operatorname{pr}(z)a'+az'.$$ The last two terms lie in $I$ by step 2.1; no assertion that $I$ is multiplicatively closed is needed. [step 1.1, step 2.1, algebra]

4.1 Applying the projection from [[def-harish-chandra-projection]] to step 3.1 leaves exactly $\operatorname{pr}(z)\operatorname{pr}(z')$. Therefore $\operatorname{pr}(zz')=\operatorname{pr}(z)\operatorname{pr}(z')$. [step 3.1] ∎

---
id: def-direct-sum-model-of-complexification
kind: definition
title: "The direct-sum model $V\\oplus iV$ of a complexification"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complexification-of-a-real-vector-space]
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Definition

Let $V$ be a real vector space. The **direct-sum model** of the complexification of $V$ is the complex vector space $V\oplus iV$ whose underlying set is $V\times V$, with componentwise addition

$$(v,w)+(v',w'):=(v+v',w+w')$$

and complex scalar multiplication

$$(a+bi)\cdot(v,w):=(av-bw,\,aw+bv)\qquad(a,b\in\mathbb R,\ v,w\in V).$$

An element is written $v+iw$ for the pair $(v,w)$, so that $i(v+iw)=-w+iv$; the distinguished copy of $V$ is the real subspace of pairs $(v,0)$. This is the concrete model compared with the tensor model $V_{\mathbb C}$ of [[def-complexification-of-a-real-vector-space]].

## Remarks

The axioms of a complex vector space are checked directly from the displayed formulas; for instance $i(i(v+iw))=i(-w+iv)=-v-iw=-(v+iw)$, matching $i^2=-1$. Writing $v+iw$ is a notation for the pair, not a claim that $iV$ is already a subspace of anything.

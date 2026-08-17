---
id: cex-unit-length-interval-need-not-embed-in-real-line-mod-integers
kind: counterexample
title: "An interval of length one need not embed under $p:\\mathbb R\\to\\mathbb R/\\mathbb Z$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "The half-open restriction must be a continuous bijection but fail to be open, while the closed restriction must fail injectivity."
  counterexample_search: "Checked the half-open saturation at every integer and the endpoint collision p(0)=p(1); the two witnesses cover distinct endpoint conventions."
deps: [def-circle-as-real-line-mod-integers, def-quotient-topology, def-subspace-topology-top, lem-integer-part, lem-homeomorphism-criteria, lem-open-quotient-arcs-in-real-line-mod-integers]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

The strict bound in [[lem-open-quotient-arcs-in-real-line-mod-integers]] cannot
be replaced uniformly by length at most one. In particular, the claim that
$p|_J$ is a homeomorphism onto its image for every open, closed, or half-open
interval $J$ of length at most one is false.

## Facts & Assumptions

**Given:** The quotient map $p:\mathbb R\to\mathbb R/\mathbb Z$ and the intervals $[0,1)$ and $[0,1]$.

[L1] The continuous quotient projection has $p(x)=[x]$, with $p(x)=p(y)$ exactly when $x-y\in\mathbb Z$ ([[def-circle-as-real-line-mod-integers]]).

[L2] A subset $V$ of the quotient is open if and only if $p^{-1}[V]$ is open in $\mathbb R$ ([[def-quotient-topology]]).

[L3] A restriction of a continuous map to a subspace is continuous ([[def-subspace-topology-top]]).

[L4] The open sets of a subspace are the traces of ambient open sets ([[def-subspace-topology-top]]).

[L5] Every real $x$ has a unique integer $m$ with $m\le x<m+1$ ([[lem-integer-part]]).

[L6] For a continuous bijection, being a homeomorphism is equivalent to being an open map ([[lem-homeomorphism-criteria]]).

[L7] The quotient map is open, and every interval shorter than one embeds in $\mathbb R/\mathbb Z$ ([[lem-open-quotient-arcs-in-real-line-mod-integers]]).

## Counterexample

**Proof technique:** direct.

1.1 The restriction $f=p|_{[0,1)}$ is continuous by [L1] and [L3]. It is surjective: for $x\in\mathbb R$, [L5] gives $r=x-\lfloor x\rfloor\in[0,1)$ with $p(r)=p(x)$. It is injective: if $r,s\in[0,1)$ and $p(r)=p(s)$, then [L1] gives $r-s\in\mathbb Z$ and $|r-s|<1$, so $r=s$. Thus $f$ is a continuous bijection onto $\mathbb R/\mathbb Z$. [L1, L3, L5, algebra]

2.1 The set $A=[0,1/2)$ is relatively open in $[0,1)$, since $A=(-1/2,1/2)\cap[0,1)$ by [L4]. Its image satisfies $p^{-1}(p[A])=\bigcup_{n\in\mathbb Z}[n,n+1/2)$ by [L1]. This union is not open at any integer, in particular at $0$, so [L2] says $p[A]$ is not open in the quotient. Hence the continuous bijection $f$ is not open and is not a homeomorphism by [L6]. [step 1.1, L1, L2, L4, L6]

3.1 The other endpoint convention fails differently: on $[0,1]$ one has $p(0)=p(1)$ by [L1], so the restriction is not injective and cannot be a homeomorphism onto its image. Both intervals have length one, which refutes the proposed replacement of the strict bound in [L7] by length at most one. [L1, L7, algebra] ∎

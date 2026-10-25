---
id: cex-amenability-does-not-imply-subexponential-growth
kind: counterexample
title: "Under the ultrafilter lemma, amenability does not imply subexponential growth"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-polynomial-subexponential-exponential-and-intermediate-growth, ex-the-lamplighter-group-is-amenable]
justified_by: []
aliases: []
landmark: false
generation:
  role: counterexample
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references: []
---

## Statement refuted

Every amenable finitely generated group has subexponential growth.

## Facts & Assumptions

**Given:** The false claim above and the ultrafilter lemma.

[L1] Exponential growth is one of the growth types in the standard comparison hierarchy ([[def-polynomial-subexponential-exponential-and-intermediate-growth]]).

[L2] Under the ultrafilter lemma, the standard lamplighter group is amenable ([[ex-the-lamplighter-group-is-amenable]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $L=\left(\bigoplus_{\mathbb Z}\mathbb Z/2\mathbb Z\right)\rtimes\mathbb Z$ with generators $t$ for the shift and $a$ for toggling the lamp at the origin. For every subset $E\subseteq\{0,\dots,n-1\}$, the element obtained by walking from $0$ to $n$, toggling exactly the lamps in $E$ on the way, has word length at most $3n$; different subsets give different group elements. [given, construct]

2.1 Therefore the ball of radius $3n$ contains at least $2^n$ elements, so $L$ has exponential growth in the sense of [L1]. Together with [L2], this amenable group refutes the statement. [L1, L2, step 1.1, algebra] ∎

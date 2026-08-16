---
id: ex-the-adjoint-functor-theorem-for-ordered-sets
kind: example
title: "The adjoint functor theorem for ordered sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-preorders-as-categories-and-monotone-maps-as-functors, def-galois-connection, def-small-finite-and-large-limits-completeness-and-cocompleteness]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, example 6.3.14"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Example

Let $A$ and $B$ be complete partially ordered sets, and let
$g:B\to A$ preserve arbitrary meets, including the empty meet. Then $g$ has a
left adjoint $f:A\to B$, given by
$$f(a)=\bigwedge\{b\in B:a\le g(b)\}.$$

## Facts & Assumptions

**Given:** Complete posets $A,B$ and a meet-preserving monotone map $g:B\to A$.

[L1] Preorders are thin categories and monotone maps are exactly the functors between them ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L2] A Galois connection $f\dashv g$ is characterised by $f(a)\le b$ if and only if $a\le g(b)$ ([[def-galois-connection]]).

[L3] Completeness means that all small limits exist ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

## Verification

**Proof technique:** constructive.

1.1 For each $a\in A$, let $S_a=\{b\in B:a\le g(b)\}$. It is nonempty: because $g$ preserves the empty meet, $g(\top_B)=\top_A$, so $a\le g(\top_B)$. Completeness [L3] therefore supplies $f(a)=\bigwedge S_a$. [L3, construct]

2.1 If $a\le a'$, then $S_{a'}\subseteq S_a$, so $\bigwedge S_a\le\bigwedge S_{a'}$. Hence $f$ is monotone and therefore a functor under [L1]. [step 1.1, L1]

2.2 If $a\le g(b)$, then $b\in S_a$, so $f(a)=\bigwedge S_a\le b$. [step 1.1]

2.3 Conversely, since $g$ preserves the meet of $S_a$, one has $g(f(a))=\bigwedge_{c\in S_a}g(c)$. Every $g(c)$ on the right lies above $a$, hence $a\le g(f(a))$. Thus $f(a)\le b$ implies $a\le g(f(a))\le g(b)$ by monotonicity. [step 1.1]

3.1 Steps 2.2 and 2.3 give the equivalence in [L2] for every $a,b$, so $f\dashv g$. The empty-meet case in step 1.1 is what prevents the defining set from being empty. [step 2.2, step 2.3, L2, discharge-construct] ∎

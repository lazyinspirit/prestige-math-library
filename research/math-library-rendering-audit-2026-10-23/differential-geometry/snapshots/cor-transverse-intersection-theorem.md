---
id: cor-transverse-intersection-theorem
kind: corollary
title: "Transverse embedded submanifolds intersect in the expected codimension"
status: published
dependency_level: 3
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ def-transverse-embedded-submanifolds, thm-transverse-preimage-theorem, def-codimension-and-hypersurface ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step2-root-published-recording/receipts/cor-transverse-intersection-theorem.json
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

If $S,T\subseteq M$ are transverse embedded submanifolds of codimensions $a$ and
$b$, then $S\cap T$ is an embedded submanifold. If $a+b\le\dim M$, it has
codimension $a+b$ (possibly empty); if $a+b>\dim M$, then $S\cap T=\varnothing$.
At each $p\in S\cap T$,

$$ T_p(S\cap T)=T_pS\cap T_pT. $$

## Facts & Assumptions

**Given:** Embedded submanifolds $S,T\subseteq M$ with $S\pitchfork T$.

[F1] Two embedded submanifolds are transverse exactly when their inclusion maps are transverse ([[def-transverse-embedded-submanifolds]]).

[L1] The transverse preimage theorem identifies the preimage tangent space with the inverse image of the target tangent space ([[thm-transverse-preimage-theorem]]).

## Proof
**Proof technique:** direct.

1.1 Let $i:S\hookrightarrow M$ be the inclusion. By [F1], $i\pitchfork T$, and $i^{-1}(T)=S\cap T$. Write $m=\dim M$, so $\dim S=m-a$. If $b\le m-a$, [L1] shows that $S\cap T$ is an embedded submanifold of $S$ of codimension $b$; if $b>m-a$, [L1] gives $S\cap T=\varnothing$. These are exactly the cases $a+b\le m$ and $a+b>m$. [F1, L1, given, cases]

2.1 In the case $a+b\le m$, $$ \operatorname{codim}_M(S\cap T)=\operatorname{codim}_M S+\operatorname{codim}_S(S\cap T)=a+b, $$ and the tangent-space formula from [L1] becomes $$ T_p(S\cap T)=\{v\in T_pS:di_p(v)\in T_pT\}=T_pS\cap T_pT. $$ When $a+b>m$ the intersection is empty by step 1.1, so the pointwise tangent formula is vacuous. [L1, step 1.1, algebra, cases]

3.1 Hence transverse embedded submanifolds intersect in the expected codimension. [step 2.1] ∎

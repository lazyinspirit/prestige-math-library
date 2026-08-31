---
id: cor-transverse-intersection-theorem
kind: corollary
title: "Transverse embedded submanifolds intersect in the expected codimension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-transverse-embedded-submanifolds,
       thm-transverse-preimage-theorem,
       def-codimension-and-hypersurface]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

If $S,T\subseteq M$ are transverse embedded submanifolds of codimensions $a$ and
$b$, then $S\cap T$ is an embedded submanifold of codimension $a+b$. At each
$p\in S\cap T$,

$$
T_p(S\cap T)=T_pS\cap T_pT.
$$

## Facts & Assumptions

**Given:** Embedded submanifolds $S,T\subseteq M$ with $S\pitchfork T$.

[F1] Two embedded submanifolds are transverse exactly when their inclusion maps are transverse ([[def-transverse-embedded-submanifolds]]).

[L1] The transverse preimage theorem identifies the preimage tangent space with the inverse image of the target tangent space ([[thm-transverse-preimage-theorem]]).

## Proof
**Proof technique:** direct.

1.1 Let $i:S\hookrightarrow M$ be the inclusion. By [F1], $i\pitchfork T$. Since $i^{-1}(T)=S\cap T$, [L1] shows that $S\cap T$ is an embedded submanifold of $S$ of codimension $\operatorname{codim}_M T=b$. [F1, L1, given]
2.1 Therefore $$ \operatorname{codim}_M(S\cap T)=\operatorname{codim}_M S+\operatorname{codim}_S(S\cap T)=a+b. $$ The tangent-space formula from [L1] becomes $$ T_p(S\cap T)=\{v\in T_pS:di_p(v)\in T_pT\}=T_pS\cap T_pT. $$ [L1, step 1.1, algebra]
3.1 Hence transverse embedded submanifolds intersect in the expected codimension. [step 2.1] ∎
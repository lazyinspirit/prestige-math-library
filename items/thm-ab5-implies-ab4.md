---
id: thm-ab5-implies-ab4
kind: theorem
title: "AB5 implies AB4"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-axioms-ab4-and-ab4-star, def-the-axioms-ab5-and-ab5-star]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Exercise A.4.6"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
pipeline_run: frontier-22
---

## Statement

Every abelian category satisfying AB5 also satisfies AB4.

## Facts & Assumptions

**Given:** An abelian category satisfying AB5.

[L1] AB5 is the directed-join distributivity law together with AB3
([[def-the-axioms-ab5-and-ab5-star]]).

[L2] AB4 is the assertion that small coproducts of monomorphisms are monic
([[def-the-axioms-ab4-and-ab4-star]]).

## Proof

**Proof technique:** direct.

1.1 Let $(m_i:B_i\rightarrowtail A_i)_{i\in I}$ be a small family of monomorphisms, and let $$m:\coprod_{i\in I} B_i\to \coprod_{i\in I} A_i$$ be the induced coproduct map, which exists by the AB3 part of [L1]. Let $k:K\rightarrowtail\coprod_i B_i$ be its kernel. For each finite subset $F\subseteq I$, let $S_F\le\coprod_i B_i$ be the finite partial sum of the summands with indices in $F$. Because finite coproducts in an abelian category are biproducts, the restriction of $m$ to $S_F$ is a finite direct sum of monomorphisms and is therefore monic. Hence $K\wedge S_F=0$ for every finite $F$. [L1, construct]
2.1 The family $(S_F)$ is directed and has join $\coprod_i B_i$. Applying the AB5 identity [L1] with the fixed subobject $K$ gives $$ K=\left(\bigvee_F S_F\right)\wedge K=\bigvee_F(S_F\wedge K)=0. $$ So the kernel of $m$ is zero, and therefore $m$ is monic. By [L2], this is exactly AB4. [L1, L2, step 1.1] ∎
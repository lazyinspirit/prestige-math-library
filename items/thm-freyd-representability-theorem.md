---
id: thm-freyd-representability-theorem
kind: theorem
title: "Freyd's representability theorem for continuous Set-valued functors satisfying a solution set condition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-general-adjoint-functor-theorem-objectwise-form, def-category-of-elements, thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements, def-presheaf-representable-functor-and-representation, thm-universal-elements-and-universal-factorisations]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, theorem 4.7.15"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be complete and locally small, and let $F:\mathcal C\to\mathbf{Set}$ be continuous. Suppose there is a supplied set of pairs $(S_i,y_i)$ with $y_i\in F(S_i)$ such that, for every $C\in\mathcal C$ and every $x\in F(C)$, some $i$ and some $f:S_i\to C$ satisfy
$$F(f)(y_i)=x.$$
Then $F$ is covariantly representable.

## Facts & Assumptions

**Given:** The category, functor, and supplied set of element-pairs in the Statement.

[L1] The category of elements $\int F$ has objects $(C,x)$ and morphisms $f:(C,x)\to(D,y)$ satisfying $F(f)(x)=y$ ([[def-category-of-elements]]).

[L2] For a covariant Set-valued functor, a universal element is exactly an initial object of $\int F$ ([[thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements]]).

[L3] A covariant $\mathbf{Set}$-valued functor is representable when it is naturally isomorphic to $\mathcal C(R,-)$ for some object $R$ ([[def-presheaf-representable-functor-and-representation]]).

[L5] For locally small $\mathcal C$, a pair $(R,u)$ with $u\in F(R)$ is universal for $F:\mathcal C\to\mathbf{Set}$ if and only if, for every object $c$ and every $x\in F(c)$, there is a unique morphism $f:R\to c$ with $F(f)(u)=x$ ([[thm-universal-elements-and-universal-factorisations]]).

[L4] The objectwise GAFT constructs an initial comma object from completeness, local smallness, continuity, and a supplied solution set ([[thm-general-adjoint-functor-theorem-objectwise-form]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1], each pair $(S_i,y_i)$ is an object of $\int F$, and the displayed factorisation condition says exactly that every $(C,x)$ receives a morphism from some $(S_i,y_i)$. Thus these pairs form a supplied jointly weakly initial set in $\int F$. [L1, construct]

2.1 The category $\int F$ is the comma category $(1\downarrow F)$ for a singleton $1$. Since $F$ is continuous, [L4] applies to the supplied set from step 1.1 and gives an initial object $(R,u)$, without selecting over a proper class. [step 1.1, L4, choose]

3.1 By [L2], $(R,u)$ is a universal element of $F$. By [L5] the map $\Phi_c:\mathcal C(R,c)\to F(c)$, $f\mapsto F(f)(u)$, is then a bijection for every object $c$; it is natural in $c$ because for $g:c\to c'$ functoriality gives $F(g)(\Phi_c(f))=F(g)(F(f)(u))=F(g\circ f)(u)=\Phi_{c'}(g\circ f)$. Hence $\mathcal C(R,-)\cong F$ as functors, which is representability in the sense of [L3]. [step 2.1, L2, L3, L5, discharge-construct] ∎

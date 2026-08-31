---
id: thm-the-module-endofunctor-category-is-strict-monoidal
kind: theorem
title: "The right-module endofunctor category is strict monoidal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-category-of-right-module-endofunctors, def-strict-monoidal-category]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, display (2.40)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

For every monoidal category $\mathcal C$, the category $\mathcal C'$ of
[[def-the-category-of-right-module-endofunctors]] is a strict monoidal category
under composition of endofunctors.

## Facts & Assumptions

**Given:** The category $\mathcal C'$ of right-module endofunctors on a
monoidal category $\mathcal C$.

[L1] An object of $\mathcal C'$ is a pair $(F,c)$ with a coherent natural isomorphism $c_{X,Y}:F(X)\otimes Y\to F(X\otimes Y)$, and a morphism is a natural transformation compatible with those structure maps ([[def-the-category-of-right-module-endofunctors]]).

[L2] A strict monoidal category is a monoidal category whose associator and unitors are identities and whose tensor is literally associative and unital on objects ([[def-strict-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 For objects $(F,c)$ and $(G,d)$ of $\mathcal C'$, define $(F,c)\otimes(G,d):=(FG,e)$ with $e_{X,Y}:=F(d_{X,Y})\circ c_{G(X),Y}$. The axioms from [L1] for $c$ and $d$ imply the same associativity and unit equations for $e$, so $(FG,e)$ is again an object of $\mathcal C'$. For morphisms $\theta:(F,c)\Rightarrow(F',c')$ and $\eta:(G,d)\Rightarrow(G',d')$, define $(\theta\otimes\eta)_X:=\theta_{G'(X)}\circ F(\eta_X)=F'(\eta_X)\circ\theta_{G(X)}$. The equality is naturality, and the module-compatibility equation follows from the corresponding equations for $\theta$ and $\eta$. [given, L1, construct]

1.2 Let $\mathbf I$ be the identity functor on $\mathcal C$ with structure map $i_{X,Y}=1_{X\otimes Y}$. Then $(\mathbf I,i)$ is an object of $\mathcal C'$ and acts as a two-sided unit for the tensor just defined. [L1, construct]

2.1 Composition of endofunctors is literally associative and unital, so $((F\otimes G)\otimes H)=FGH=F\otimes(G\otimes H)$ and $\mathbf I\otimes F=F=F\otimes\mathbf I$ as equalities of objects. The induced structure maps agree term by term from the definition in step 1.1, so the associator and unitors are identities. [step 1.1, step 1.2, algebra]

3.1 Step 2.1 verifies the strictness clause of [L2], so $\mathcal C'$ is
strict monoidal under composition. [L2, step 2.1] ∎

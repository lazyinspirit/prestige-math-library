---
id: thm-mac-lane-strictification
kind: theorem
title: "Mac Lane strictification"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-category-of-right-module-endofunctors, thm-the-module-endofunctor-category-is-strict-monoidal, def-monoidal-equivalence, thm-fully-faithful-split-essentially-surjective-characterises-equivalence, thm-every-equivalence-can-be-made-an-adjoint-equivalence, prop-fully-faithful-functors-reflect-isomorphisms]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter XI.3, Theorem 1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Theorem 2.8.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a monoidal category. Then the assignment
$$L(X)=\bigl(X\otimes -,\,\alpha_{X,-,-}\bigr)$$
defines a strong monoidal functor $L:\mathcal C\to\mathcal C'$ from
$\mathcal C$ to the strict monoidal category $\mathcal C'$ of
[[def-the-category-of-right-module-endofunctors]], and $L$ is a monoidal
equivalence. Consequently every monoidal category is monoidally equivalent to a
strict monoidal category.

## Facts & Assumptions

**Given:** A monoidal category $\mathcal C$ and its right-module endofunctor
category $\mathcal C'$.

[L1] An object of $\mathcal C'$ is a functor $F$ together with coherent isomorphisms $c_{X,Y}:F(X)\otimes Y\to F(X\otimes Y)$, and a morphism in $\mathcal C'$ is a natural transformation compatible with those structure maps ([[def-the-category-of-right-module-endofunctors]]).

[L2] The category $\mathcal C'$ is strict monoidal under composition ([[thm-the-module-endofunctor-category-is-strict-monoidal]]).

[L3] A monoidal equivalence is a strong monoidal functor whose underlying functor is an equivalence of categories with monoidal quasi-inverse data ([[def-monoidal-equivalence]]).

[L4] A functor is an equivalence exactly when it is fully faithful and split essentially surjective ([[thm-fully-faithful-split-essentially-surjective-characterises-equivalence]]).

[L5] Every equivalence can be equipped with adjoint-equivalence data ([[thm-every-equivalence-can-be-made-an-adjoint-equivalence]]).

[L6] A fully faithful functor reflects isomorphisms ([[prop-fully-faithful-functors-reflect-isomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 For each object $X$ of $\mathcal C$, put $L(X)=(X\otimes-,\alpha_{X,-,-})$. The pentagon and triangle axioms of $\mathcal C$ are exactly the coherence and unit equations required in [L1], so $L(X)$ is an object of $\mathcal C'$. For a morphism $f:X\to Y$, define $L(f)_Z=f\otimes1_Z$. Naturality of the associator shows that $L(f)$ is a morphism in $\mathcal C'$. [given, L1, construct]

1.2 The functor $L$ is split essentially surjective. For an object $(F,c)$ of $\mathcal C'$, let $X:=F(\mathbf 1)$ and define $\phi_Y:=F(\lambda_Y)\circ c_{\mathbf 1,Y}:X\otimes Y\to F(Y)$. Each $\phi_Y$ is an isomorphism because both factors are, and naturality of $c$ together with its coherence equations makes $\phi:L(X)\Rightarrow(F,c)$ a morphism in $\mathcal C'$. [L1, choose, construct]

2.1 The unit comparison for $L$ is the natural isomorphism $(L_0)_Z=\lambda_Z^{-1}:Z\to\mathbf 1\otimes Z$, and the binary comparison $L_2(X,Y):L(X)\otimes L(Y)\Rightarrow L(X\otimes Y)$ has component $\alpha^{-1}_{X,Y,Z}:X\otimes(Y\otimes Z)\to(X\otimes Y)\otimes Z$. The same pentagon and triangle identities show these are morphisms in $\mathcal C'$, so $L$ is strong monoidal into the strict monoidal target of [L2]. [step 1.1, L2, construct]

2.2 The functor $L$ is faithful. If $L(f)=L(g)$, then their components at the unit object agree, and composing with the right unitors gives $f=\rho_Y\circ L(f)_{\mathbf 1}\circ\rho_X^{-1}=\rho_Y\circ L(g)_{\mathbf 1}\circ\rho_X^{-1}=g$. [step 1.1, algebra]

3.1 The functor $L$ is full. Given a morphism $\theta:L(X)\Rightarrow L(Y)$ in $\mathcal C'$, define $f=\rho_Y\circ\theta_{\mathbf 1}\circ\rho_X^{-1}:X\to Y$. The compatibility equation from [L1], evaluated at $(\mathbf 1,Z)$, identifies $\theta_Z$ with $f\otimes1_Z$ after the unitors are inserted, so $\theta=L(f)$. [L1, step 2.2, construct]

4.1 By steps 2.2-3.1 and [L4], the underlying functor of $L$ is an equivalence of categories. By [L5], choose an adjoint-equivalence quasi-inverse $G:\mathcal C'\to\mathcal C$ with natural isomorphisms $\eta:1_{\mathcal C}\Rightarrow GL$ and $\varepsilon:LG\Rightarrow1_{\mathcal C'}$. [L4, L5, step 1.2, step 2.2, step 3.1, choose]

5.1 Use full faithfulness of $L$ to define the binary comparison $G_2(A,B):G(A)\otimes G(B)\to G(A\otimes B)$ as the unique morphism whose image under $L$ is $$\varepsilon_{A\otimes B}^{-1}\circ(\varepsilon_A\otimes\varepsilon_B)\circ L_2(GA,GB)^{-1}.$$ Define $G_0:\mathbf1_{\mathcal C}\to G(\mathbf1_{\mathcal C'})$ uniquely by $$L(G_0)=\varepsilon_{\mathbf1_{\mathcal C'}}^{-1}\circ L_0^{-1}.$$ Naturality of $\varepsilon$ and $L_2$ makes the displayed images natural in $A,B$, so faithfulness of $L$ makes $G_2$ natural. Both comparisons are isomorphisms by [L6]. [L2, L4, L6, step 2.1, step 4.1, construct]

6.1 Apply the faithful functor $L$ to the associativity and unit diagrams for $G_2,G_0$. By their defining formulas, the images reduce to the coherence diagrams for the strong monoidal functor $L$ together with naturality of $\varepsilon$, so they commute. Thus $G$ is strong monoidal, and the defining equations in step 5.1 say exactly that $\varepsilon$ is monoidal. The triangle identity $\varepsilon L\circ L\eta=1_L$ gives $L\eta=(\varepsilon L)^{-1}$; since the inverse of a monoidal natural isomorphism is monoidal, faithfulness of $L$ then verifies the binary and unit equations for $\eta$. Hence $\eta$ is monoidal. The data $(L,G,\eta,\varepsilon)$ therefore satisfy [L3], so $L$ is a monoidal equivalence to the strict monoidal category $\mathcal C'$. [L3, step 2.1, step 4.1, step 5.1, algebra] ∎

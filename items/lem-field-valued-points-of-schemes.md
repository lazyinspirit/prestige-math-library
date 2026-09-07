---
id: "lem-field-valued-points-of-schemes"
kind: "lemma"
title: "Field-valued points and local-ring points"
status: "draft"
origin: "pipeline"
deps: ["def-residue-field-scheme-point", "thm-morphisms-into-affine-scheme-global-sections", "lem-local-homomorphism-residue-field-map", "thm-tensor-product-basis-from-bases", "thm-proper-ideal-contained-in-maximal-ideal"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 26.13, paragraphs preceding 26.13.3 and its field-valued special case"
      url: "https://stacks.math.columbia.edu/tag/01J5"
proof_strategy: direct
---

## Statement

For every field $K$ and scheme $X$, morphisms $\operatorname{Spec}K\to X$ correspond bijectively to pairs $(x,\iota)$ with $x\in X$ and a field embedding $\iota:\kappa(x)\to K$. The identity embedding gives a canonical morphism $\operatorname{Spec}\kappa(x)\to X$, compatible with all scheme morphisms. More generally, for a nonzero local ring $(R,\mathfrak m)$, morphisms $\operatorname{Spec}R\to X$ correspond to pairs $(x,\varphi)$ with a local homomorphism $\varphi:\mathcal O_{X,x}\to R$. Assuming Choice, two field-valued points have the same image in $X$ if and only if they are dominated by a common field-valued point, by compatible embeddings of their fields into a third field.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] For a point $x$ of a locally ringed space, put $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$. If $x=\mathfrak p$ in an affine spectrum, the canonical isomorphism $\mathcal O_{X,\mathfrak p}\cong A_{\mathfrak p}$ carries $\mathfrak m_{\mathfrak p}$ to $\mathfrak pA_{\mathfrak p}$ and therefore induces canonical field isomorphisms $$\kappa(\mathfrak p)\cong A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}\cong\operatorname{Frac}(A/\mathfrak p).$$ ([[def-residue-field-scheme-point]])

[F2] For a scheme $X$ and a ring $A$, taking global sections induces a natural bijection $$\operatorname{Hom}(X,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathrm{CRing}}(A,\Gamma(X,\mathcal O_X)).$$ ([[thm-morphisms-into-affine-scheme-global-sections]])

[F3] Let $$ (f,f^\sharp):(X,\mathcal O_X)\to(Y,\mathcal O_Y) $$ be a morphism of locally ringed spaces, and let $x\in X$. Then the local stalk map $$ f^\sharp_x:\mathcal O_{Y,f(x)}\longrightarrow\mathcal O_{X,x} $$ induces a field homomorphism $$ \kappa(f(x))\longrightarrow \kappa(x) $$ between residue fields. ([[lem-local-homomorphism-residue-field-map]])

[F4] Let $R$ be a commutative ring. If $M$ is free with basis $(e_i)_{i\in I}$ and $N$ is free with basis $(f_j)_{j\in J}$, then $M\otimes_RN$ is free with basis $$\bigl(e_i\otimes f_j\bigr)_{(i,j)\in I\times J}.$$ Equivalently, the canonical map $R^{(I\times J)}\to M\otimes_RN$ sending the standard basis vector at $(i,j)$ to $e_i\otimes f_j$ is an isomorphism. This includes an empty basis in either factor. ([[thm-tensor-product-basis-from-bases]])

[F5] Assume the Axiom of Choice (def-axiom-of-choice). In a nonzero commutative ring, every proper ideal is contained in a maximal ideal. ([[thm-proper-ideal-contained-in-maximal-ideal]])

## Proof

1.1 If $U=\operatorname{Spec}A$ contains $x$, F2 identifies a morphism $\operatorname{Spec}R\to U$ with $\psi:A\to R$. The preimage $\mathfrak p=\psi^{-1}(\mathfrak m)$ is prime, and every element outside it maps to a unit. Thus $\psi$ factors uniquely through a local map $A_{\mathfrak p}\to R$. Conversely any such local map gives $\psi$ and has closed-point image $\mathfrak p$. [given, F2]

2.1 Every open neighbourhood of the closed point of $\operatorname{Spec}R$ is the whole spectrum: a basic open containing that point is defined by an element outside $\mathfrak m$, hence by a unit. Therefore any morphism to $X$ factors through every affine neighbourhood of its closed-point image. The affine constructions agree after shrinking to a common neighbourhood, by uniqueness of the map induced from the stalk. They consequently give inverse constructions globally; for $X=\varnothing$ both sets are empty. [step 1.1, algebra]

3.1 For $R=K$ a field, locality says precisely that the maximal ideal of $\mathcal O_{X,x}$ maps to zero. Factoring through the quotient F1 gives a unital field map, necessarily injective. Conversely such an embedding gives a local map. Taking $R=\mathcal O_{X,x}$ and its identity gives the canonical $\operatorname{Spec}\mathcal O_{X,x}\to X$; composing with its residue-field point gives $\operatorname{Spec}\kappa(x)\to X$. Every field-valued representative at $x$ factors uniquely through this residue-field representative by the specified embedding, so it is the smallest representative in its class. Identity embeddings give the canonical points, and F3 gives their compatibility with a morphism $X\to S$ by composing the residue-field maps. [F1, F3, step 2.1]

4.1 If two representatives at $x$ use fields $K,L$, their tensor product over $\kappa(x)$ is nonzero: choose bases of these nonzero vector spaces and apply F4. By F5 choose a maximal ideal and take its quotient field $\Omega$. The unital maps $K,L\to\Omega$ are injective and agree on $\kappa(x)$, hence give a common representative by step 3.1. Conversely a common representative maps its unique point to both images, forcing those images equal. This is exactly where Choice is used. [F4, F5, step 3.1] ∎

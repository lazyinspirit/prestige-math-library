---
id: lem-finite-vector-space-copowers-in-a-linear-abelian-category
kind: lemma
title: "Finite vector-space copowers in a $k$-linear abelian category"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-abelian-category, def-additive-category, def-biproduct, def-cotensor-and-tensor, def-dimension, def-functor-and-contravariant-functor, def-k-linear-category-and-k-linear-functor, def-linear-map, def-natural-isomorphism, def-natural-transformation, def-vector-space, def-yoneda-embedding, lem-yoneda-evaluation-bijection, thm-morphisms-between-finite-biproducts-correspond-to-matrices, thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism, thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, author final version, §1.11 (Definition 1.11.1 and Proposition 1.11.2 with its coalgebra-realization sketch), printed pp.15–16"
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 and (2.1)), §2.3 ((2.6)–(2.9)), §2.4 (Proposition 2.8, Corollary 2.9 and (2.18)–(2.31)), §§3.1–3.2 (Definition 3.1, Theorem 3.2, Lemma 3.3, Proposition 3.4 and Corollaries 3.5–3.7), §3.5 (Definition 3.14, Lemmas 3.15–3.16 and (3.56)–(3.58))"
      url: https://arxiv.org/pdf/1612.04561v3
dependency_level: 0
---

## Statement

Let $k$ be a field, let $\mathcal C$ be a $k$-linear abelian category ([[def-k-linear-category-and-k-linear-functor]], [[def-abelian-category]]), let $V$ be a finite-dimensional $k$-vector space ([[def-dimension]], [[def-vector-space]]) and let $Y$ be an object of $\mathcal C$. Then the functor $Z\mapsto\operatorname{Hom}_k(V,\mathcal C(Y,Z))$ from $\mathcal C$ to $k$-vector spaces ([[thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]]) is representable ([[def-yoneda-embedding]]): there are an object $V\odot Y$ and a natural isomorphism $\mathcal C(V\odot Y,Z)\cong\operatorname{Hom}_k(V,\mathcal C(Y,Z))$ ([[def-natural-transformation]], [[def-natural-isomorphism]]). For every finite basis $(v_1,\dots,v_n)$ of $V$ the $n$-fold biproduct $Y^n$ ([[def-biproduct]]) represents this functor through the matrix calculus of [[thm-morphisms-between-finite-biproducts-correspond-to-matrices]]; a change of basis acts by an invertible scalar matrix, and the two representations agree up to a unique compatible isomorphism ([[thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism]]), so $V\odot Y$ is determined up to a unique compatible isomorphism and is independent of the chosen basis. Equivalently, $V\odot Y$ is the tensor of $Y$ by $V$ in the enriched sense of [[def-cotensor-and-tensor]]: the formula displayed above is exactly the defining corepresentation of that tensor, the base being the symmetric monoidal category of all $k$-vector spaces; it may be restricted to finite-dimensional vector spaces when all hom-spaces of $\mathcal C$ are finite-dimensional. Given a representing object with its universal element for every pair $(V,Y)$, the assignment $(V,Y)\mapsto V\odot Y$ extends canonically to a functor on the product of the category of finite-dimensional $k$-vector spaces with $\mathcal C$ ([[def-functor-and-contravariant-functor]], [[def-additive-category]]) whose structural morphisms are induced by the representing property; identities and composition are automatic from representability. The objectwise construction uses one finite basis and one finite biproduct. The functor assertion requires the stated family of representing data; existence of each object alone does not choose such a family.

## Facts & Assumptions

**Given:** A field $k$, a $k$-linear abelian category $\mathcal C$, a finite-dimensional $k$-vector space $V$ with a fixed finite basis $(v_1,\dots,v_n)$, and an object $Y$ of $\mathcal C$.

[F1] Evaluation on the fixed basis is a bijection $\operatorname{Hom}_k(V,W)\to W^n$, $f\mapsto(f(v_1),\dots,f(v_n))$, for every $k$-vector space $W$; finite-dimensionality of $V$ is exactly the existence of a finite basis ([[def-dimension]]), and linearity is additivity and homogeneity as defined in [[def-linear-map]].

[F2] In an additive category a finite family has a biproduct $Y^n$ (with the empty family giving the zero object), and morphisms out of a finite biproduct are computed componentwise: $g\mapsto(g\circ i_1,\dots,g\circ i_n)$ is an isomorphism of abelian groups $\mathcal C(Y^n,Z)\to\mathcal C(Y,Z)^n$ ([[def-biproduct]], [[thm-morphisms-between-finite-biproducts-correspond-to-matrices]]).

[F3] For a locally small $\mathcal C$ and objects $A,B$, evaluation at the identity is a bijection $\operatorname{Nat}(\mathcal C(A,-),\mathcal C(B,-))\cong\mathcal C(B,A)$, whose inverse sends $x:B\to A$ to the natural transformation with components $f\mapsto f\circ x$ ([[lem-yoneda-evaluation-bijection]]).

[F4] Two universal elements of one functor have representing objects joined by a unique compatible isomorphism ([[thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism]]).

[F5] A tensor of $C$ by $X$ over a base $\mathcal V$ is an object $X\otimes C$ with natural isomorphisms $\mathcal B(X\otimes C,B)\cong[X,\mathcal B(C,B)]$ in $\mathcal V$; over $\mathbf{Set}$ tensors are the copowers ([[def-cotensor-and-tensor]]).

## Proof

**Proof technique:** direct.

1.1 Fix the finite basis $(v_1,\dots,v_n)$ of $V$ and let $A=Y^n$ be the supplied $n$-fold biproduct of $Y$ with injections $i_1,\dots,i_n$; for $n=0$ this is the empty biproduct, the zero object ([[def-biproduct]], [[def-additive-category]]). For each object $Z$ the evaluations $f\mapsto(f(v_1),\dots,f(v_n))$ and $g\mapsto(g\circ i_1,\dots,g\circ i_n)$ are bijections $\operatorname{Hom}_k(V,\mathcal C(Y,Z))\to\mathcal C(Y,Z)^n$ and $\mathcal C(A,Z)\to\mathcal C(Y,Z)^n$ by [F1] and [F2], so their composite is a bijection
$$\eta_Z:\mathcal C(A,Z)\longrightarrow\operatorname{Hom}_k(V,\mathcal C(Y,Z)).$$
For $u:Z\to Z'$ both $\eta_{Z'}(u\circ g)$ and the componentwise composite $u\circ\eta_Z(g)$ have $j$-th entry $u\circ g\circ i_j$, so $\eta$ is natural in $Z$ ([[def-natural-transformation]], [[thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]]); the universal element $u_A=\eta_A(1_A)$ is the linear map with $u_A(v_j)=i_j$, so $(A,u_A)$ represents the functor $Z\mapsto\operatorname{Hom}_k(V,\mathcal C(Y,Z))$ ([[def-yoneda-embedding]], [[def-natural-isomorphism]]). [given, F1, F2]

2.1 Let $(v'_1,\dots,v'_n)$ be a second finite basis and write $v'_k=\sum_j s_{jk}v_j$ for the invertible scalar matrix $S=(s_{jk})$ ([[def-linear-map]]). The associated representation is $(A,u'_A)$ with $u'_A(v'_k)=i_k$; by linearity and [F2] there is a unique endomorphism $\phi:A\to A$ with $\phi\circ u_A=u'_A$, its matrix being determined by $S$, and the same construction with the two bases interchanged gives a two-sided inverse, so $\phi$ is invertible. By [F4] applied to the two universal elements of the functor of step 1.1, $\phi$ is the unique compatible isomorphism between the two representing objects; hence $V\odot Y$ is determined up to a unique compatible isomorphism and is independent of the chosen basis of $V$. [step 1.1, F4, algebra]

2.2 Let $h:Y\to Y'$ and let $(A',u')$ be the representation of $Z\mapsto\operatorname{Hom}_k(V,\mathcal C(Y',Z))$ produced by step 1.1, with natural bijections $\eta'_Z$. Precomposition with $h$ gives maps $h_*:\mathcal C(Y',Z)\to\mathcal C(Y,Z)$, $g\mapsto g\circ h$, componentwise linear, and the composite $\theta_Z:=(\eta_Z)^{-1}\circ h_*\circ\eta'_Z$ is a natural transformation $\mathcal C(A',-)\Rightarrow\mathcal C(A,-)$ ([[def-natural-transformation]], [[def-functor-and-contravariant-functor]]). By [F3] applied to the objects $A'$ and $A$ there is a unique morphism $\phi_h:A\to A'$ with $\theta_Z(f)=f\circ\phi_h$ for every $f:A'\to Z$, and this is the structural morphism $V\odot Y\to V\odot Y'$ induced by the representing property. [step 1.1, F3, given]

2.3 Let $\lambda:V\to V'$ be a $k$-linear map. Precomposition gives $\lambda^*:\operatorname{Hom}_k(V',\mathcal C(Y,Z))\to\operatorname{Hom}_k(V,\mathcal C(Y,Z))$, $g\mapsto g\circ\lambda$, and the composite $(\eta^{V}_Z)^{-1}\circ\lambda^*\circ\eta^{V'}_Z$ is a natural transformation $\mathcal C(A^{V'},-)\Rightarrow\mathcal C(A^{V},-)$; by [F3] it is induced by a unique morphism $V\odot Y\to V'\odot Y$, the structural morphism in the coefficient variable ([[def-k-linear-category-and-k-linear-functor]], [[def-linear-map]]). [step 1.1, F3]

3.1 For natural transformations $\alpha:\mathcal C(A,-)\Rightarrow\mathcal C(B,-)$ and $\beta:\mathcal C(B,-)\Rightarrow\mathcal C(C,-)$, [F3] gives $\alpha_c(f)=f\circ E(\alpha)$ and $\beta_c(g)=g\circ E(\beta)$, hence $E(\beta\circ\alpha)=E(\alpha)\circ E(\beta)$; identities correspond to identities. Now take the family of representing objects and universal elements in the statement as supplied data. The transformations in steps 2.2 and 2.3 go opposite to the corresponding maps of pairs, and their composites act by $g\mapsto g\circ h\circ h'$ in the object variable and by $f\mapsto f\circ\lambda'\circ\lambda$ in the coefficient variable. These operations commute with one another, so their representing morphisms preserve identities and composition and give the asserted functor $(V,Y)\mapsto V\odot Y$. This proves functoriality of the supplied family, without selecting one globally from objectwise existence. [step 2.2, step 2.3, F3]


4.1 The isomorphism $\mathcal C(V\odot Y,Z)\cong\operatorname{Hom}_k(V,\mathcal C(Y,Z))$ is $k$-linear, since basis evaluation and composition with the biproduct injections are $k$-linear. It is therefore the enriched tensor isomorphism of [F5] over all $k$-vector spaces. A finite-dimensional enriching base is available only when all hom-spaces of $\mathcal C$ are finite-dimensional. The objectwise existence and basis comparison require only finite data; functoriality uses the supplied family as in step 3.1. [step 1.1, step 2.1, step 3.1, F5, given] ∎

---
id: cex-hh-infinite-dimensional-tensor-dual-identification-fails
kind: counterexample
title: "An infinite-dimensional tensor-dual functional outside the image"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-hh-scalar-and-tensor-conventions, lem-hh-finite-tensor-duality-and-canonical-coevaluation, def-free-module-on-a-set-and-standard-basis, thm-tensor-product-basis-from-bases, def-linear-independence, def-linear-basis, cor-independent-set-is-no-larger-than-a-finite-spanning-set, thm-universal-property-of-free-modules, def-algebraic-dual-and-linear-functional]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "Theorem 5.9, printed p. 30, and Remark 5.10 and Example 5.11, printed p. 31: finite-free Hom–tensor duality and a warning that the canonical map can fail outside the finite-free case"
    - title: "The CRing Project, open-source commutative algebra text (2016 PDF; Chapter 13)"
      url: "https://math.colorado.edu/topology/cringproject.pdf"
      locator: "Example 13.3.17, printed pp. 139–140: the canonical Hom–tensor map is an isomorphism when its first argument is finitely generated and free"
verification:
  precheck: pass
---

## Statement refuted

The finitely proved identification of [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]], read without its finite-dimensional hypothesis, would say that the canonical map $V^*\otimes V^*\to(V\otimes V)^*$, $f\otimes g\mapsto[v\otimes w\mapsto f(v)g(w)]$, is surjective for every $k$-vector space $V$.

## Facts & Assumptions

**Given:** An infinite set $I$, a field $k$, the free module $V=k^{(I)}=\bigoplus_{i\in I}k$ with standard basis $(e_i)_{i\in I}$, and the functional $L\in(V\otimes V)^*$ with $L(e_i\otimes e_j)=\delta_{ij}$.

[F1] The free module on $I$ has standard basis $(e_i)$ with unique finite expansions, and a set map from a basis into a module extends uniquely to a linear map ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]]).

[F2] The elementary tensors $e_i\otimes e_j$ of two bases form a basis of $V\otimes V$ ([[thm-tensor-product-basis-from-bases]]).

[F3] The algebraic dual $V^*$ is the space of linear functionals $V\to k$; the coordinate functionals $e_j^*$ with $e_j^*(e_i)=\delta_{ij}$ exist by [F1] ([[def-algebraic-dual-and-linear-functional]]).

[F4] A set $S\subseteq V$ is linearly independent when every injective finite list into $S$ is independent, and a basis is an independent spanning set ([[def-linear-independence]], [[def-linear-basis]]).

[F5] If a vector space has a spanning set with $n$ elements, then every linearly independent subset of it is finite with at most $n$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[F6] Every element of a tensor product is a finite sum of elementary tensors, and bilinear pairings induce linear maps by its universal property ([[def-hh-scalar-and-tensor-conventions]]).

## Counterexample

**Proof technique:** direct.

Let $I$ be an infinite set, let $V=k^{(I)}$ have basis $(e_i)_{i\in I}$, and let $L\in(V\otimes V)^*$ be the linear functional determined on the product basis by $L(e_i\otimes e_j)=\delta_{ij}$. Then $L$ is not in the image of the canonical map $V^*\otimes V^*\to(V\otimes V)^*$, $f\otimes g\mapsto[v\otimes w\mapsto f(v)g(w)]$: the tensor-dual identification is a finite-dimensional phenomenon, and for $I=\mathbb N$ the outside functional is the coefficient pairing $(\sum_na_ne_n)\otimes(\sum_mb_me_m)\mapsto\sum_na_nb_n$, which is not a finite sum of products of functionals.

1.1 For $f,g\in V^*$, the bilinear pairing $(v,w)\mapsto f(v)g(w)$ defines a functional $\theta(f,g)\in(V\otimes V)^*$ by [F6]; the assignment $(f,g)\mapsto\theta(f,g)$ is itself bilinear, so [F6] gives a linear map $\theta:V^*\otimes V^*\to(V\otimes V)^*$ with $\theta(f\otimes g)(v\otimes w)=f(v)g(w)$, without a finite-dimensional hypothesis. The product basis $(e_i\otimes e_j)_{(i,j)\in I\times I}$ of [F2] is a basis of $V\otimes V$, so prescribing the values $L(e_i\otimes e_j)=\delta_{ij}$ on it defines a unique linear functional $L\in(V\otimes V)^*$ by [F1]; in particular $L$ is well defined and $I\times I$, hence $I$, is infinite. Likewise the coordinate functionals $e_j^*$ of [F3] are well defined, and the set $S:=\{e_j^*:j\in I\}\subseteq V^*$ is infinite because $j\mapsto e_j^*$ is injective (they take different values at the single vector $e_j$), and it is linearly independent: if $\sum_{l=1}^r\lambda_le_{j_l}^*=0$ is a finite relation with distinct indices $j_1,\dots,j_r$, evaluating at $e_{j_l}$ gives $\lambda_l=0$. [given, F1, F2, F3, F4, F6, algebra]

2.1 Suppose $L$ is the image of an element of $V^*\otimes V^*$, written as a finite sum $\sum_{s=1}^mf_s\otimes g_s$ of elementary tensors by [F6]. For fixed $j\in I$ the functional $v\mapsto L(v\otimes e_j)$ is the coordinate functional $e_j^*$, because $L(e_i\otimes e_j)=\delta_{ij}$, and by the canonical-map formula in step 1.1 it is also $\sum_{s=1}^mf_s(\cdot)g_s(e_j)=\sum_{s=1}^mg_s(e_j)f_s$; hence every $e_j^*$ lies in the finite-dimensional span of $f_1,\dots,f_m$. Thus the infinite linearly independent set $S$ of step 1.1 lies in a space spanned by $m$ elements, contradicting [F5], which forbids an infinite linearly independent subset in such a space. [step 1.1, F5, F6, algebra]

3.1 No finite sum $\sum_sf_s\otimes g_s$ can have image $L$, so $L$ lies outside the image of the canonical map and the map is not surjective for this infinite-dimensional $V$: surjectivity of $V^*\otimes V^*\to(V\otimes V)^*$ is a finite-dimensional phenomenon, as claimed. For $I=\mathbb N$ and $v=\sum_na_ne_n$, $w=\sum_mb_me_m$ (finite sums) one computes $L(v\otimes w)=\sum_{n,m}a_nb_mL(e_n\otimes e_m)=\sum_na_nb_n$, so the outside functional is exactly the coefficient pairing, which is not a finite sum of products of functionals by step 2.1. [step 2.1, F6, algebra] ∎

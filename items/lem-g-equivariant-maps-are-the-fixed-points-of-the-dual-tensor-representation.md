---
id: lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation
kind: lemma
title: "For finite-dimensional complex $V$, the intertwiners $V\\to W$ are exactly the fixed points of $V^*\\otimes W$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dual-complex-representation, def-g-fixed-subspace-of-a-representation, def-intertwiner-equivalent-and-faithful-representations, def-tensor-product-of-complex-representations, thm-hom-from-a-finite-dimensional-space-as-a-tensor-product]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Lemma 3.2.1 and Proposition 3.1.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group, let $V$ and $W$ be finite-dimensional complex
representations of $G$, and let

$$\Phi:V^{*}\otimes_{\mathbb C}W\longrightarrow\operatorname{Hom}_{\mathbb C}(V,W)$$

be the natural isomorphism of [[thm-hom-from-a-finite-dimensional-space-as-a-tensor-product]],
sending $f\otimes w$ to the map $v\mapsto f(v)w$. Then $\Phi$ is an
intertwiner between the diagonal representation on $V^{*}\otimes W$ and the
conjugation representation on $\operatorname{Hom}_{\mathbb C}(V,W)$, and it
carries the fixed subspace $(V^{*}\otimes W)^{G}$ bijectively onto
$\operatorname{Hom}_G(V,W)$.

## Facts & Assumptions

**Given:** Finite-dimensional complex representations $V$ and $W$ of a finite group $G$.

[F1] The dual action is $(g\cdot f)(v)=f(g^{-1}\cdot v)$ ([[def-dual-complex-representation]]).

[F2] The diagonal action on the tensor product is $g\cdot(f\otimes w)=(g\cdot f)\otimes(g\cdot w)$ ([[def-tensor-product-of-complex-representations]]).

[F3] The fixed subspace of a representation is the set of vectors fixed by every $g\in G$ ([[def-g-fixed-subspace-of-a-representation]]).

[F4] Intertwiners are the linear maps $T$ with $T(g\cdot v)=g\cdot T(v)$ for all $g,v$ ([[def-intertwiner-equivalent-and-faithful-representations]]).

[F5] The map $(f,w)\mapsto[v\mapsto f(v)w]$ induces a natural isomorphism $\Phi:V^{*}\otimes_{\mathbb C}W\to\operatorname{Hom}_{\mathbb C}(V,W)$ ([[thm-hom-from-a-finite-dimensional-space-as-a-tensor-product]]).

## Proof

**Proof technique:** direct.

1.1 For an elementary tensor $f\otimes w$ and $v\in V$, $\Phi(g\cdot(f\otimes w))(v)=\Phi((g\cdot f)\otimes(g\cdot w))(v)$ by [F2], and this equals $(g\cdot f)(v)(g\cdot w)=f(g^{-1}\cdot v)(g\cdot w)$ by [F1]. [F1, F2, given]

2.1 The right-hand side of step 1.1 is $g\cdot\bigl(f(g^{-1}\cdot v)w\bigr)=g\cdot\bigl(\Phi(f\otimes w)(g^{-1}\cdot v)\bigr)$, which is the value at $v$ of the conjugation action on the linear map $\Phi(f\otimes w)$. Since elementary tensors span the tensor product, $\Phi$ is an intertwiner of representations. [F5, step 1.1, algebra]

3.1 An element of $V^{*}\otimes W$ is fixed by $G$ exactly when its image under $\Phi$ is fixed by $G$, because $\Phi$ is a bijective intertwiner of step 2.1; so $\Phi\bigl((V^{*}\otimes W)^{G}\bigr) =\operatorname{Hom}_{\mathbb C}(V,W)^{G}$ by [F3]. [F3, step 2.1, given]

4.1 A linear map $T$ is fixed by the conjugation action of every $g$ exactly when $g\cdot T(g^{-1}\cdot v)=T(v)$ for all $g,v$, i.e. when $T(g\cdot v)=g\cdot T(v)$; by [F4] this says precisely that $T\in\operatorname{Hom}_G(V,W)$. Hence $\operatorname{Hom}_{\mathbb C}(V,W)^{G}=\operatorname{Hom}_G(V,W)$, which combines with step 3.1 into the claim. [F4, step 3.1, algebra] ∎

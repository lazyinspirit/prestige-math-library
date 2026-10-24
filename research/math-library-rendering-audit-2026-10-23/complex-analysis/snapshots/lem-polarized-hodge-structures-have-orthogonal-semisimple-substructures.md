---
id: lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures
kind: lemma
title: "Polarized rational Hodge structures split orthogonally"
status: published
origin: pipeline
dependency_level: 4
deps:
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - def-morphisms-and-polarizability-of-rational-hodge-structures
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Théorie de Hodge II, Publications mathématiques de l'IHÉS 40 (1971), 5-57; (2.1.10)-(2.1.17), (2.2.1) and Lemme (4.2.3) with its proof"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Let $(V,Q)$ be a polarized rational pure Hodge structure and $U\subseteq V$ a
rational sub-Hodge structure, with the notions of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]] and
[[def-morphisms-and-polarizability-of-rational-hodge-structures]]. Then $Q|_U$
is a polarization of $U$, and
$$V=U\oplus U^{\perp_Q},\qquad U^{\perp_Q}=\{x\in V:Q(x,U)=0\}$$
is an orthogonal direct sum of rational Hodge structures in which the
complement is polarized. Every short exact sequence of polarizable rational
pure Hodge structures of a fixed weight splits in the category of Hodge
structures, and every polarizable rational pure Hodge structure is a finite
direct sum of simple Hodge structures. These are claims about rational Hodge
substructures; they do not assert a splitting for an arbitrary local
subsystem. Every rational splitting and direct-sum decomposition of this item
is given by rational matrices satisfying the linear identities recorded below,
and those identities, hence the splitting and the decomposition, persist after
extension of scalars to every characteristic-zero field; no positivity or
order structure is asserted over that field, and no subobject of the extension
is claimed to be rationally defined.

## Facts & Assumptions

**Given:** The polarized rational pure Hodge structure $(V,Q)$ of weight $k$
and the rational sub-Hodge structure $U\subseteq V$.

[F1] Polarizations, the Weil operator $C$ acting by $i^{p-q}$ on $V^{p,q}$,
complex conjugation, rational sub-Hodge structures and their bidegree
decompositions are those of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]].

[F2] Morphisms, direct sums, short exact sequences and splittings of Hodge
structures, and the closure of kernels and images under the bidegree
decomposition, are those of
[[def-morphisms-and-polarizability-of-rational-hodge-structures]].
In particular a bidegree-preserving map has bidegree-preserving kernel and
image, and a bijective bidegree-preserving map has bidegree-preserving inverse.

## Proof

1.1 The Weil operator $C$ preserves $U_{\mathbb C}$, because $U_{\mathbb C}=\bigoplus_{p+q=k}(U_{\mathbb C}\cap V^{p,q})$ and $C$ multiplies each $U_{\mathbb C}\cap V^{p,q}$ by the scalar $i^{p-q}$; complex conjugation preserves $U_{\mathbb C}$ because it exchanges $V^{p,q}$ with $V^{q,p}$ and preserves $U_{\mathbb C}$ [F1]. The positive definite Hermitian form $h(x,y)=Q(Cx,\bar y)$ of [F1] therefore restricts to $U_{\mathbb C}$ as a positive definite form, while $Q|_U$ inherits rationality, the $(-1)^k$-symmetry and type orthogonality from $Q$. The identity $Q(Cx,y)=Q(x,C^{-1}y)$ holds on $V_{\mathbb C}$: both sides equal $\sum_{p+q=k}i^{p-q}Q(x^{p,q},y^{q,p})$, because $Q(x^{r,s},y^{a,b})$ vanishes unless $(a,b)=(s,r)$. If $u\in U$ lies in the radical of $Q|_U$, so that $Q(u,U)=0$, then $Q(Cu,U_{\mathbb C})=Q(u,C^{-1}U_{\mathbb C})=0$; as $C^{-1}$ preserves $U_{\mathbb C}$, this says $Cu$ is again in the radical and $h(u,u)=Q(Cu,\bar u)=0$, whence $u=0$ by positive definiteness. Therefore $Q|_U$ is nondegenerate and is a polarization of $U$. [F1, given, algebra]

2.1 Since $Q|_U$ is nondegenerate by step 1.1, the rational equations $Q(x,U)=0$ define a rational subspace $U^{\perp_Q}$ whose dimension is $\dim V-\dim U$, the kernel of the surjective pairing map $V\to U^{\vee}$, $x\mapsto Q(x,\cdot)|_U$, having that dimension; and $U\cap U^{\perp_Q}=0$ because $Q|_U$ is nondegenerate. Hence $V=U\oplus U^{\perp_Q}$ as $\mathbb Q$-vector spaces. Let $x=\sum_{p+q=k}x^{p,q}\in U^{\perp_Q}_{\mathbb C}$ with $x^{p,q}\in V^{p,q}$, and fix $(r,s)$; for every $v\in U^{s,r}$ one has $$0=Q(x,v)=\sum_{p+q=k}Q(x^{p,q},v)=Q(x^{r,s},v),$$ because $Q$ pairs $V^{p,q}$ only with $V^{q,p}$ [F1]. As $v$ ranges over $U^{s,r}=U_{\mathbb C}\cap V^{s,r}$ and $Q(x^{r,s},\cdot)$ is supported on $V^{s,r}$, this gives $Q(x^{r,s},U_{\mathbb C})=0$, so every $x^{r,s}$ lies in $U^{\perp_Q}_{\mathbb C}$ and $U^{\perp_Q}$ is a rational sub-Hodge structure. The Hermitian form $h$ restricts positively to $U^{\perp_Q}_{\mathbb C}$, so the argument of step 1.1 with $U$ replaced by $U^{\perp_Q}$ shows that $Q|_{U^{\perp_Q}}$ is a polarization of $U^{\perp_Q}$. This proves the orthogonal Hodge direct sum. [step 1.1, F1, given, algebra]

3.1 Let $0\to U\xrightarrow{i}V\xrightarrow{\pi}W\to0$ be a short exact sequence of polarizable rational pure Hodge structures of the fixed weight $k$ [F2], so that in particular $V$ is polarizable; fix a polarization $Q$ of $V$ and identify $U$ with its image under $i$, a rational sub-Hodge structure by [F2]. By step 2.1, $V=U\oplus U^{\perp_Q}$ and $Q|_{U^{\perp_Q}}$ is a polarization. The restriction $\pi|_{U^{\perp_Q}}$ is a morphism of Hodge structures, is injective because $U^{\perp_Q}\cap\ker\pi=U^{\perp_Q}\cap U=0$, and has source and target of the same finite dimension $\dim V-\dim U=\dim W$ by exactness, so it is bijective. A bijective morphism has bidegree-preserving inverse by [F2]: if $w\in W^{p,q}$ and $\pi^{-1}(w)=\sum x^{r,s}$ with $x^{r,s}\in V^{r,s}$, then $w=\sum\pi(x^{r,s})$ with $\pi(x^{r,s})\in W^{r,s}$, directness of the target decomposition forces $\pi(x^{r,s})=0$ for $(r,s)\ne(p,q)$, and injectivity gives $x^{r,s}=0$ for those $(r,s)$. Hence $s:=(\pi|_{U^{\perp_Q}})^{-1}:W\to V$ is a morphism with $\pi\circ s=\operatorname{id}_W$, and the sequence splits. [step 2.1, F1, F2, given, algebra]

4.1 For semisimplicity, suppose $V\ne0$ is polarizable. Among the nonzero rational sub-Hodge structures of $V$ the dimensions form a nonempty subset of $\{1,\dots,\dim V\}$, so there is one, $U$, of least dimension; then $U$ is simple, since a nonzero rational sub-Hodge structure of $U$ is one of $V$ of no larger dimension. By step 2.1, $V=U\oplus U^{\perp_Q}$ with $U^{\perp_Q}$ polarizable of strictly smaller dimension, and induction on $\dim V$ (the case $U^{\perp_Q}=0$ terminating) exhibits $V$ as a finite direct sum of simple Hodge structures. A splitting produced in step 3.1 and a decomposition produced here are given by rational matrices in rational bases; the identities $\pi\circ s=\operatorname{id}_W$, idempotence of the projections, and $Q(x,U)=0$ for $x\in U^{\perp_Q}$ are linear equations with rational coefficients and therefore remain valid after extension of scalars to any characteristic-zero field $F$, so the extended sequence splits and the extended decomposition is a direct sum decomposition of $V_F$ over $F$. Positivity is used only over $\mathbb R$ and is not invoked over $F$, and no new subobject of $V_F$ is claimed to descend to $V$. The argument is finite-dimensional rational and complex linear algebra on fixed finite-dimensional structures and uses no choice principle. [step 2.1, step 3.1, F1, F2, given, algebra, induction] ∎
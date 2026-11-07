---
id: lem-product-point-determinant-classes-are-algebraic
kind: lemma
title: "Determinant classes are algebraic at a product point"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne, Hodge Cycles on Abelian Varieties, notes by J. S. Milne"
      url: "https://www.jmilne.org/math/Documents/Deligne82.pdf"
      locator: "Section 4, Lemma 4.5 and proof, printed pages 30–31; the explicit symmetric-power spanning argument below proves the algebraic special-fibre assertion."
verification: {}
---

## Statement

Assume AC. Let $B/\mathbb C$ be an abelian variety of dimension $m$, let $E$ be a number field, and let $M\subset E$ be a full $\mathbb Z$-lattice. Form the abelian variety $A=B\otimes_{\mathbb Z}M$ and let $E$ act on $H^1(A,\mathbb Q)$ through its rational action on $M$. Put $d=2m$ and $V=H^1(A,\mathbb Q)$. For $m>0$, regard $D=\bigwedge_E^dV$ as a rational subspace of $H^d(A,\mathbb Q)=\bigwedge_{\mathbb Q}^dV$ using the standard separable-algebra determinant embedding, specified after scalar extension by the direct sum of the top exterior powers of the individual $E$-eigenspaces. For $m=0$, define $D=\mathbb Q\cdot1\subset H^0(A,\mathbb Q)$; it is the image under trace of $\bigwedge_E^0(0)=E$, not an embedding of that $E$-space.

Every element of $D(m)$ is a rational linear combination of classes of algebraic codimension-$m$ cycles on $A$. More precisely, the relevant class is a rational linear combination of pullbacks of the class of a point of $B$ under homomorphisms $p_\alpha:A\to B$ induced by integral functionals $\alpha:M\to\mathbb Z$. The case $m=0$ gives the unit class.

This assertion is only about the special product point; it does not assert the existence of an algebraic family or any deformation principle.

## Facts & Assumptions

**Given:** AC, the abelian variety, number field, full lattice, product construction and determinant embedding described in the Statement.

[F1] The singular cohomology cross product is an isomorphism for a finite-free homology factor, under AC ([[thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses]]).

## Proof

**Proof technique:** express the determinant space inside a symmetric-power span of point-class pullbacks.

1.1 Choose an integral basis of $M$ of rank $n=[E:\mathbb Q]$. It identifies $A$ with $B^n$ and $M^*=\operatorname{Hom}_{\mathbb Z}(M,\mathbb Z)$ with the coefficient lattice of its projection homomorphisms. By complex torus uniformization, $B^{\mathrm{an}}$ is a real torus of dimension $d$; its cohomology ring over $\mathbb Q$ is the exterior algebra on $W=H^1(B,\mathbb Q)$. Indeed the circle has one generator in degrees zero and one and no higher cohomology, so [F1], the product cup rule, and induction on the circle factors give this ring. Applying [F1] again gives $V=W\otimes_{\mathbb Q}E^*$ and $H^d(A,\mathbb Q)=\bigwedge_{\mathbb Q}^dV$, where $E^*=M^*\otimes\mathbb Q$. For $m=0$ all varieties and the ring are points and the conclusion is immediate; assume $m>0$ below. [F1, given, choose, construct, algebra]

2.1 For an integral $\alpha\in M^*$, the homomorphism $p_\alpha:A\to B$ satisfies $p_\alpha^*w=w\otimes\alpha$ for $w\in W$, because on $B^n$ it is the sum of the integer multiples prescribed by $\alpha$ and a group homomorphism of tori acts on first cohomology by the dual map on their lattices. A point class $[b]\in H^d(B,\mathbb Q)(m)$ is nonzero and spans the one-dimensional top cohomology: in an oriented local chart its Thom class integrates to one, and the top class of the oriented compact torus integrates nontrivially. If $\alpha\ne0$ then $p_\alpha$ is a surjective homomorphism of complex abelian varieties and its differential is surjective; it is smooth, and the inverse image of $b$ is an algebraic codimension-$m$ cycle. Its cohomology class is $p_\alpha^*[b]$ by the local product description of the Thom class. For $\alpha=0$ the pullback is zero in positive degree. Thus every $p_\alpha^*[b]$ is algebraic. [F1, given, step 1.1, algebra]

3.1 Fix a basis $w_1,\ldots,w_d$ of $W$ and put $\omega=w_1\wedge\cdots\wedge w_d$. The element $p_\alpha^*\omega$ is $(w_1\otimes\alpha)\wedge\cdots\wedge(w_d\otimes\alpha)$. Multilinear polarization defines a rational linear map $T:\bigwedge^dW\otimes\operatorname{Sym}^d(E^*)\to\bigwedge^d(W\otimes E^*)$ taking $\omega\otimes\alpha^d$ to this wedge. Concretely the coefficient of $t_1\cdots t_d$ in the wedge with $\alpha=\sum t_i\alpha_i$, divided by $d!$, defines the symmetrization; it depends only on the symmetric tensor. Pure $d$th powers of rational vectors span $\operatorname{Sym}^d(E^*)$: expand $(\sum_i t_i\alpha_i)^d$ and recover each coefficient from finitely many rational values by ordinary univariate interpolation in the variables successively. Clearing denominators reduces these vectors to integral functionals, with only rational rescaling. Since $\omega$ is a rational multiple of $[b]$ and all its pullbacks are algebraic by step 2.1, the image of $T$, after the Tate twist, consists entirely of algebraic classes. [given, step 1.1, step 2.1, construct, algebra]

4.1 Let $L/\mathbb Q$ be a finite splitting field of $E$. Then $E^*\otimes L=\bigoplus_\sigma L\lambda_\sigma$, a direct sum of one-dimensional eigenspaces indexed by embeddings $\sigma:E\to L$. By the given definition of the separable determinant embedding, $D\otimes L$ is the direct sum of the subspaces $\bigwedge_L^d(W_L\otimes L\lambda_\sigma)$ of $\bigwedge_L^d(W_L\otimes E_L^*)$. Each is generated by $T_L(\omega\otimes\lambda_\sigma^d)$, so $D\otimes L\subseteq\operatorname{im}T_L$. Since field extension is exact and faithful, this inclusion descends to $D\subseteq\operatorname{im}T$. Step 3.1 consequently expresses each element of $D(m)$ as a rational linear combination of algebraic pullbacks of a point class, proving the Statement. [given, step 1.1, step 3.1, algebra] ∎

## Source-reading boundary

Only the special-fibre argument in the cited lemma is used. No deformation, relative comparison, or absolute-Hodge propagation theorem is imported.

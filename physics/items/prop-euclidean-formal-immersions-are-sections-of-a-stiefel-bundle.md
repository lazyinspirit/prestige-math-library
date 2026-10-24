---
id: prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle
kind: proposition
title: "Euclidean formal immersions are homotopy equivalent to Stiefel-bundle sections"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-gauss-frame-map-of-an-immersion-into-euclidean-space, def-formal-immersion-between-smooth-manifolds, def-space-of-immersions-and-space-of-formal-immersions, def-weak-compact-open-smooth-topology-on-mapping-spaces, def-smooth-section-local-section-and-support, def-frame-bundle-and-associated-vector-bundle, def-stiefel-space-grassmannian-and-tautological-bundle, def-vector-bundle-map-over-a-smooth-base-map, def-locally-trivial-fiber-bundle, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, prop-tangent-space-of-a-regular-level-set-is-the-kernel, cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame, lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots, thm-every-smooth-manifold-admits-a-riemannian-metric, def-countable-choice, thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, thm-the-global-differential-of-a-smooth-map-is-smooth]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §1 and §2.1"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; $\\operatorname{Mono}(TM,\\mathbb R^{n})$ is homotopy equivalent to the section space of the fibre bundle with Stiefel fibres, and Theorem 5 describes $\\operatorname{Imm}(S^n,\\mathbb R^{n+k})$ through $V_n(\\mathbb R^{n+k})$"
    - title: "John Francis, The h-Principle, Lecture 10: Classifying immersions of spheres, after Smale (notes by A. Beaudry)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf
      locator: "PDF pp. 1–2; the section/difference-class model of formal immersions of spheres"
dependency_level: 2
---

## Statement

Let $M^m$ be a smooth manifold and $n\ge m$. Supply its canonical smooth tangent bundle and smooth global differential, and fix a smooth Riemannian metric on $TM$. These smooth constructions and such a metric exist under $\mathrm{AC}_\omega$; the conclusions below require no additional choice once they are supplied. Give $\varepsilon^n=M\times\mathbb R^n$ its Euclidean metric. Distinguish the monomorphism bundle $\mathcal M=\operatorname{Mono}(TM,\varepsilon^n)$ from its orthonormal Stiefel subbundle $E=V(TM,\varepsilon^n)$, whose fibre is $V_m(\mathbb R^n)$, associated to the orthonormal frame bundle of $TM$. All section spaces carry the weak compact-open $C^\infty$ topology. Then:

1. Smooth bundle monomorphisms $B:TM\to\varepsilon^n$ over the identity correspond homeomorphically to $\Gamma(\mathcal M)$. Fibrewise polar normalization $B\mapsto B(B^*B)^{-1/2}$ gives an $O(m)$-equivariant strong deformation retraction $\Gamma(\mathcal M)\to\Gamma(E)$. In an orthonormal frame, the polar map is a diffeomorphism $\operatorname{Mono}(\mathbb R^m,\mathbb R^n)\cong V_m(\mathbb R^n)\times\operatorname{Sym}^+_m$, where the second factor consists of positive-definite self-adjoint $m\times m$ matrices; thus the monomorphism fibre and the Stiefel fibre have the same homotopy type, rather than being identified homeomorphically.
2. The canonical target tangent trivialization gives the actual homeomorphism $\operatorname{FImm}(M,\mathbb R^n)\cong C^\infty(M,\mathbb R^n)\times\Gamma(\mathcal M)$. Contracting the first factor and polar-normalizing the second give a homotopy equivalence $\operatorname{FImm}(M,\mathbb R^n)\simeq\Gamma(E)$. In particular the two spaces have the same path components and homotopy invariants. Under the actual homeomorphism, the derivative map is $f\mapsto(f,df)$; in the normalized model it sends $df$ to its polar normalization.
3. For the standard metric on $S^m$, the bundle $E=V(TS^m,\varepsilon^n)$ is the pullback along $x\mapsto T_xS^m\in\mathrm{Gr}_m(\mathbb R^{m+1})$ of the bundle of isometric injections from the tautological $m$-plane to $\mathbb R^n$. Whenever $TM$ is trivial, $E$ is trivial; in particular $V(TS^1,\varepsilon^2)\cong S^1\times S^1$.

No orientation of $M$ or global tangent frame is needed. The normalization uses the supplied metric; the canonical smooth tangent constructions and metric existence for general $M$ are the stated countable-choice uses. The section-space maps use no further choice once those data are supplied.

## Facts & Assumptions

**Given:** A smooth manifold $M^m$ with a supplied smooth tangent metric, $n\ge m$, the trivial Euclidean bundle $\varepsilon^n$, the monomorphism bundle $\mathcal M$, and the orthonormal Stiefel subbundle $E$.

[F1] In a local tangent frame, a fibrewise injection is a full-rank matrix, and changes of tangent frame act by right multiplication; these matrices represent the formal Gauss data. [[def-gauss-frame-map-of-an-immersion-into-euclidean-space]]

[F2] A formal immersion $(f,F)$ is a smooth map $f$ and a smooth bundle monomorphism covering $f$; the formal immersion spaces and smooth mapping spaces have the weak compact-open $C^\infty$ topology, generated by finitely many compact chart pieces and derivative bounds. [[def-formal-immersion-between-smooth-manifolds]], [[def-space-of-immersions-and-space-of-formal-immersions]], [[def-weak-compact-open-smooth-topology-on-mapping-spaces]]

[F3] A smooth section is a smooth map into the bundle whose projection is the identity. [[def-smooth-section-local-section-and-support]]

[F4] A bundle map over the identity restricts to a linear map on each fibre; smoothness is checked in local bundle charts. [[def-vector-bundle-map-over-a-smooth-base-map]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]

[F5] A locally trivial fibre bundle has local product charts. [[def-locally-trivial-fiber-bundle]]

[F6] $V_m(\mathbb R^n)$ consists of ordered orthonormal frames; the Grassmannian has graph charts, and its tautological bundle has fibre the represented plane. [[def-stiefel-space-grassmannian-and-tautological-bundle]]

[F7] The orthonormal frame bundle, using the supplied metric, is a principal $O(m)$-bundle; its associated bundles use the given group action. [[def-frame-bundle-and-associated-vector-bundle]]

[F8] For a regular level set its tangent space is the kernel of the differential. [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]

[F9] A smooth vector bundle is trivial if and only if it admits a smooth global frame. [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]

[F10] Under countable choice every smooth manifold admits a Riemannian metric. [[thm-every-smooth-manifold-admits-a-riemannian-metric]], [[def-countable-choice]]

[F11] A smooth positive-definite self-adjoint bundle endomorphism has a unique smooth positive square root. Locally, the derivative of matrix squaring at a positive matrix $R$ is $H\mapsto RH+HR$; its eigenvalues on symmetric matrices are $r_i+r_j>0$, so the root is smooth in the matrix entries. [[lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots]]

[F12] Under $\mathrm{AC}_\omega$, the canonical tangent-bundle atlas gives smooth local product charts linear on each fibre, and the global differential of a smooth map is smooth. [[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]], [[thm-the-global-differential-of-a-smooth-map-is-smooth]]. These structures are supplied here.

## Proof

1.1 Use the supplied smooth tangent-bundle structures of [F12] and the supplied metric; [F10] supplies one under $\mathrm{AC}_\omega$ if needed. In any local tangent frame the condition that a matrix have rank $m$ is open, so [F1] and [F4] give the smooth monomorphism bundle $\mathcal M$. Orthonormal tangent frames give the associated bundle with fibre $V_m(\mathbb R^n)$ in [F6] and [F7], which is exactly its isometric-injection subbundle $E$. The map $B\mapsto(x\mapsto B_x)$ is a bijection onto $\Gamma(\mathcal M)$ by [F3]. It is a homeomorphism: section coordinates are precisely the matrix coefficients on each compact base chart piece. A compact piece of $TM$ has compact base projection and bounded vector coordinates, so controlling coefficient jets there controls every jet of the fibre-linear total-space map. Conversely evaluating that map along the finitely many local basis-vector sections over a compact base piece recovers each coefficient and all its derivatives. These two estimates show that the weak total-space and coefficient topologies agree with the section topology in [F2]. [F1, F2, F3, F4, F5, F6, F7, F10, F12, construct]

2.1 For an injective $B$ put $R=(B^*B)^{1/2}$ and $Q=BR^{-1}$. By [F11] these operations are smooth, and $Q^*Q=I$. Conversely $(Q,R)$ with $Q$ isometric and $R$ positive gives $B=QR$, uniquely, so this is the asserted local polar diffeomorphism. Under a change of orthonormal tangent frame $U\in O(m)$, $B$ changes to $BU$, $R$ to $U^*RU$, and $Q$ to $QU$; hence it descends globally without a global frame. The path $B_t=B((1-t)I+tR^{-1})$ remains injective because its second factor is positive definite, has $B_0=B$ and $B_1=Q$, and fixes every isometric $B$. The operations and this path are continuous for weak $C^\infty$ section topologies: on finitely many compact chart pieces the positive spectra stay bounded away from zero, and the smooth matrix operations and all chain-rule derivatives vary continuously there. Thus it is an equivariant strong deformation retraction of section spaces. Rank zero gives the unique empty matrix and the same formulas. [F2, F6, F7, F11, step 1.1, algebra]

3.1 The canonical identification $T\mathbb R^n\cong\mathbb R^n\times\mathbb R^n$ sends a formal immersion $(f,F)$ to $(f,B)$ with $B_x:T_xM\to\mathbb R^n$ the same fibre map. This is a bijection onto $C^\infty(M,\mathbb R^n)\times\Gamma(\mathcal M)$ and a homeomorphism for the identical local matrix/derivative neighbourhoods, as in step 1.1. The contraction $(f,B)\mapsto((1-t)f,B)$ deforms the first factor to zero; combining it with step 2.1 on the second factor gives the homotopy equivalence to $\Gamma(E)$. Its homotopy inverse sends an isometric section $Q$ to $(0,Q)$. For an immersion the smooth formal pair is $(f,df)$ by [F2] and [F12], so the normalized section is the polar part of $df$, as stated. No compactness of $M$ is needed because every basic neighbourhood controls only finitely many compact chart pieces. [F2, F4, F12, step 1.1, step 2.1, construct]

4.1 If $TM$ has a smooth global frame by [F9], orthonormalizing it in the supplied metric gives a global orthonormal frame and identifies $E$ with $M\times V_m(\mathbb R^n)$. For $M=S^m$ with its standard metric, [F8] gives $T_xS^m=x^\perp$; its projection $I-xx^*$ varies smoothly, so the Gauss map to the Grassmannian is smooth in its graph charts. The tautological-plane pullback of [F6] therefore is $TS^m$, and its isometric-injection bundle pulls back to $E$. On $S^1$ the standard unit angular field is a global orthonormal frame, giving $E\cong S^1\times V_1(\mathbb R^2)=S^1\times S^1$. When $m=0$ the Stiefel and monomorphism fibres are points, and when $n=m$ the normalized fibre is $O(m)$ while the monomorphism fibre retains its positive-definite polar factor. These are included in the same construction. [F6, F7, F8, F9, step 2.1, step 3.1] ∎

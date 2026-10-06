---
id: lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals
kind: lemma
title: "The signature is independent of the diagonalizing basis and unchanged by scalar extension from the rationals to the reals"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 8
deps:
  - thm-dimension-of-a-linear-subspace
  - thm-rank-nullity
  - def-subfield
  - def-ordered-field
  - thm-tensor-product-basis-from-bases
  - lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate
  - cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
  - cor-real-symmetric-bilinear-forms-are-classified-by-inertia
  - def-axiom-of-choice
  - def-bilinear-symmetric-skew-and-alternating-forms
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - def-kronecker-evaluation-pairing
  - def-middle-dimensional-intersection-form
  - def-signature-of-a-closed-oriented-four-k-manifold
  - def-singular-cup-product-on-cochains
  - def-fundamental-class-of-a-compact-oriented-manifold
  - lem-closed-oriented-pid-manifolds-have-finitely-generated-homology
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - thm-sylvesters-law-of-inertia
  - thm-symmetric-bilinear-forms-have-an-orthogonal-basis
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original p. 224: the signature is read from a diagonalization of the rational middle form"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Definition 11.14 and the paragraph after (11.11), printed p. 94: the positive and negative indices are intrinsic and the rational and real ranks agree"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 34: signature as the number of positive minus negative diagonal entries"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, inherited from finite generation and the coefficient-duality
suppliers. Let $M$ be a closed oriented smooth $4k$-manifold. (1) Any basis of
$H^{2k}(M;\mathbb R)$ diagonalizing $Q_M$ has the same number $p$ of positive
entries and the same number $q$ of negative entries, and $\sigma(M)=p-q$ equals
the intrinsic inertia difference of $Q_M$; in particular the definition
[[def-signature-of-a-closed-oriented-four-k-manifold]] is well posed. (2) With
$V_{\mathbb Q}=H^{2k}(M;\mathbb Q)$ and
$V_{\mathbb R}=V_{\mathbb Q}\otimes_{\mathbb Q}\mathbb R$, the inertia data of
$Q_M^{\mathbb Q}$ and of $Q_M=Q_M^{\mathbb Q}\otimes\mathbb R$ agree; more
generally, scalar extension of a finite-dimensional symmetric bilinear form
along an ordered-field extension preserves inertia, so the signatures computed
over $\mathbb Q$ and over $\mathbb R$ coincide.

## Facts & Assumptions

**Given:** AC; a closed oriented smooth $4k$-manifold $M$ with middle form $Q_M$ (over $\mathbb R$) and its rational counterpart $Q_M^{\mathbb Q}$ on $H^{2k}(M;\mathbb Q)$.

[F1] $Q_M(x,y)=\langle x\smile y,[M]\rangle$ on $H^{2k}(M;\mathbb R)$, and the inertia of a symmetric bilinear form is the triple $(p,q,r)$ of counts of positive, negative and zero diagonal entries in a diagonalizing basis, with signature $p-q$ ([[def-middle-dimensional-intersection-form]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F2] Every symmetric bilinear form on a finite-dimensional real vector space is congruent to exactly one normal form $\operatorname{diag}(I_p,-I_q,0_r)$, and the counts are independent of the diagonalizing basis ([[thm-sylvesters-law-of-inertia]]).

[F3] Two symmetric forms of the same finite dimension are congruent exactly when they have the same inertia ([[cor-real-symmetric-bilinear-forms-are-classified-by-inertia]]); every symmetric bilinear form over a field of characteristic not two has an orthogonal basis ([[thm-symmetric-bilinear-forms-have-an-orthogonal-basis]]).

[F4] If $F$ is a subfield of the ordered field $K$ with the order induced from $K$ ([[def-ordered-field]], [[def-subfield]]), then for $a\in F$ the sign of $a$ is the same in $F$ and in $K$, since the positive cone of $F$ is the restriction of that of $K$; and if $e_1,\dots,e_n$ is an $F$-basis of $V$, then $e_i\otimes1$ is a $K$-basis of $V\otimes_FK$, with the same diagonal entries for a diagonal form ([[thm-tensor-product-basis-from-bases]]).

[F5] For a closed oriented $4k$-manifold, $H_j(M;\mathbb Z)$ and $H^j(M;\mathbb Z)$ are finitely generated, and for a divisible coefficient group $F$ evaluation gives a natural isomorphism $H^{2k}(M;F)\cong\operatorname{Hom}_{\mathbb Z}(H_{2k}(M;\mathbb Z),F)$ ([[lem-closed-oriented-pid-manifolds-have-finitely-generated-homology]], [[cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology]]).

[F6] Every finitely generated abelian group is $\mathbb Z^b\oplus T$ with $T$ finite, and for torsion-free $F$ one has $\operatorname{Hom}_{\mathbb Z}(T,F)=0$ and $\operatorname{Hom}_{\mathbb Z}(\mathbb Z^b,F)\cong F^b$ ([[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]).

[F7] The Kronecker pairing evaluates representatives and is natural in the cohomology variable under coefficient homomorphisms $u:G\to G'$: $\langle u_*\alpha,z\rangle=u\langle\alpha,z\rangle$; the cup product is the coefficientwise front/back cochain formula, so it commutes with coefficient change ([[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]], [[def-kronecker-evaluation-pairing]], [[def-singular-cup-product-on-cochains]]).

[F8] The fundamental class is the unique class restricting to the prescribed local generator at every point; for the real orientation obtained from the integral one by coefficient change, the image of $[M]_{\mathbb Z}$ is $[M]_{\mathbb R}$, because coefficient change carries the integral local generator to the real one and preserves local restrictions ([[def-fundamental-class-of-a-compact-oriented-manifold]]).

## Proof

**Proof technique:** direct; scalar extension of a diagonal form, then the coefficient-change bridge via divisible-coefficient duality.

1.1 Let $B$ be a symmetric form on a finite-dimensional space over an ordered field $F$, and let $K\supseteq F$ carry an extending order. By [F3] choose an orthogonal $F$-basis with diagonal entries $b_i$. Write $V=V_+\oplus V_-\oplus V_0$ for its positive, negative and zero coordinate subspaces, of dimensions $p,q,r$. The radical is $V_0$. A positive-definite subspace projects injectively to $V_+$: a vector with zero positive coordinates has $B(v,v)\le0$, so cannot be a nonzero vector in such a subspace. Rank-nullity and the subspace dimension bound ([[thm-rank-nullity]], [[thm-dimension-of-a-linear-subspace]]) give dimension at most $p$, attained by $V_+$. Similarly the maximal negative dimension is $q$. Thus $(p,q,r)$ is intrinsic over any ordered field. By [F4], the extended basis has the same diagonal entries and signs over $K$, so these intrinsic dimensions, and hence the signature, are preserved. [given, F3, F4, algebra]

1.2 Basis independence and well-posedness: by [F2] the diagonal entries' sign counts $(p,q,r)$ of any diagonalizing basis of $Q_M$ are intrinsic to $Q_M$, and by [F3] congruent forms have equal inertia, so $p$, $q$ are the same for every diagonalizing basis; since $Q_M$ is symmetric and nondegenerate by [[lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate]], $r=0$ and $\sigma(M)=p-q$ is the intrinsic inertia difference of $Q_M$ as claimed in [[def-signature-of-a-closed-oriented-four-k-manifold]]. [given, F1, F2, F3]

1.3 Coefficient bridge: by [F5] applied with the divisible groups $F=\mathbb Q$ and $F=\mathbb R$, evaluation gives natural isomorphisms $H^{2k}(M;\mathbb Q)\cong\operatorname{Hom}_{\mathbb Z}(H_{2k}(M;\mathbb Z),\mathbb Q)$ and $H^{2k}(M;\mathbb R)\cong\operatorname{Hom}_{\mathbb Z}(H_{2k}(M;\mathbb Z),\mathbb R)$. Writing $H_{2k}(M;\mathbb Z)=\mathbb Z^b\oplus T$ with $T$ finite by [F6], both groups are $\mathbb Q^b$ and $\mathbb R^b$, and the map induced by the coefficient inclusion $\mathbb Q\hookrightarrow\mathbb R$ is the natural inclusion $\mathbb Q^b\hookrightarrow\mathbb R^b$. Hence the natural map $H^{2k}(M;\mathbb Q)\otimes_{\mathbb Q}\mathbb R\to H^{2k}(M;\mathbb R)$ is an isomorphism $\mathbb Q^b\otimes_{\mathbb Q}\mathbb R\cong\mathbb R^b$. [given, F5, F6]

2.1 Form compatibility: for $x,y\in H^{2k}(M;\mathbb Q)$, with images $x_{\mathbb R},y_{\mathbb R}$ under coefficient change, $Q_M(x_{\mathbb R},y_{\mathbb R})=Q_M^{\mathbb Q}(x,y)$. Indeed the cup product formula is coefficientwise by [F7], so $x_{\mathbb R}\smile y_{\mathbb R}$ is the coefficient-change image of $x\smile y$; the real fundamental class is the coefficient-change image of the integral one by [F8], and the Kronecker pairing is natural in coefficients by [F7]; evaluating the rational cup class on the integral fundamental class gives the rational number $Q_M^{\mathbb Q}(x,y)$, whose image in $\mathbb R$ is the real evaluation. Since the $x_{\mathbb R}$ span $H^{2k}(M;\mathbb R)$ over $\mathbb R$ by step 1.3, the real form is the scalar extension $Q_M^{\mathbb Q}\otimes_{\mathbb Q}\mathbb R$ of the rational one. [given, F1, F7, F8]

3.1 Inertia agreement: by step 2.1 the real form $Q_M$ is the scalar extension of the rational form $Q_M^{\mathbb Q}$ along $\mathbb Q\subseteq\mathbb R$, so step 1.1 gives that their inertia triples agree; in particular the signatures over $\mathbb Q$ and over $\mathbb R$ coincide. [step 1.1, step 1.3, step 2.1]

4.1 Steps 1.1 and 2.1 prove the basis-independence and well-posedness clause, and steps 1.1, 1.3 and 2.1 prove the scalar-extension clause for $M$; the general statement for arbitrary finite-dimensional symmetric forms over an ordered field is exactly step 1.1. If the vector space of the form is zero, its diagonal data are empty and its signature is $0$. For a zero-manifold the middle group need not vanish; both coefficient fields give its signed point count. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎

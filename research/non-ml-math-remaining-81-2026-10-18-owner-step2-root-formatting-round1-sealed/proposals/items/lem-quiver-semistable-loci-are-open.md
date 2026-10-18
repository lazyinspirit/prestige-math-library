---
id: lem-quiver-semistable-loci-are-open
kind: lemma
title: "Semistable loci of finite-quiver representations are open"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-acyclic-quiver-stability-data
  - def-grassmannian-subspaces
  - def-plucker-coordinates
  - lem-plucker-map-well-defined-injective
  - thm-plucker-image-closed
  - def-segre-map
  - thm-segre-image-rank-one-minors
  - def-projective-morphism-pre-proj
  - thm-projective-morphism-proper
  - thm-proper-morphism-closed-image
  - thm-closed-projective-embedding-by-homogeneous-generators
  - def-axiom-of-choice
  - thm-closed-subschemes-projective-space-homogeneous-ideals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli, §3"
      url: "https://arxiv.org/pdf/math/0204059"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $Q$, $k$, $\mathbf d$, and $Z$ be as in
[[def-finite-acyclic-quiver-stability-data]]. The subset
$\operatorname{Rep}^{ss}_{\mathbf d}(Q,Z)$ of representations over $\bar k$
that are semistable for every nonzero geometric subrepresentation is Zariski
open in $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}$.

## Facts & Assumptions

**Given:** A finite acyclic quiver $Q$, a finite field $k$, a dimension vector
$\mathbf d$, and central charges $z_i\in\mathbb H$.

[F1] $\operatorname{Rep}_{\mathbf d}(Q)$ is the affine parameter scheme of
arrow matrices, and geometric semistability tests all nonzero subspaces
preserved by those matrices
([[def-finite-acyclic-quiver-stability-data]]).

[F2] Each Grassmannian has a closed Plücker embedding into a projective space
([[thm-plucker-image-closed]]).

[F3] The Segre image of a product of two projective spaces is a closed
projective algebraic set ([[thm-segre-image-rank-one-minors]]).

[F4] A morphism is projective on the repository's stated convention if it
factors as a closed immersion into relative projective space followed by
projection ([[def-projective-morphism-pre-proj]]).

[F5] A projective morphism is proper; this supplier explicitly assumes AC
([[thm-projective-morphism-proper]]).

[F6] Proper morphisms of schemes are closed, including after base change
([[thm-proper-morphism-closed-image]]).

[F7] Under AC, a homogeneous ideal in $A[x_0,\ldots,x_n]$ defines a closed subscheme of $\mathbb P_A^n$; on $D_+(x_i)$ its ring is the degree-zero localized polynomial ring modulo the localized ideal ([[thm-closed-subschemes-projective-space-homogeneous-ideals]]).

[A1] The Axiom of Choice is assumed only for the projective-morphism
properness result [F5] ([[def-axiom-of-choice]]).

[A2] The Axiom of Choice is also inherited through [F7] for the scheme-theoretic realizations of the Plucker and Segre equations in [F2] and [F3]. Their classical projective coordinate interpretation uses the algebraically closed field $\bar k$, as fixed by [[thm-closed-projective-embedding-by-homogeneous-generators]] and its projective-space prerequisite. Thus the finite field $k$ is not substituted for the classical base field ([[def-axiom-of-choice]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For each subvector $\mathbf e$ with $0<\mathbf e\le\mathbf d$ and $\phi_Z(\mathbf e)>\phi_Z(\mathbf d)$, let $P_{\mathbf e}= \prod_i\operatorname{Gr}(e_i,k^{d_i})_{\bar k}$. In $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}\times P_{\mathbf e}$ impose, for each arrow $a:i\to j$, the equation that $$\mathcal S_i\longrightarrow k^{d_i}\xrightarrow{A_a}k^{d_j} \longrightarrow\mathcal Q_j$$ vanishes, where $\mathcal S_i$ is the tautological subbundle and $\mathcal Q_j$ the tautological quotient bundle: their fibers at $U_i,U_j$ are $U_i$ and $k^{d_j}/U_j$. These are zero-locus equations for bundle maps, so their common incidence locus $I_{\mathbf e}$ is closed. Its geometric points are exactly pairs consisting of an arrow matrix tuple and a subrepresentation of dimension $\mathbf e$. [F1, construct, algebra]

2.1 Work over $\bar k$. Apply [F7] to the homogeneous Plucker equations from [F2]. On a chart $p_I\ne0$, set $p_I=1$ and form the matrix $(I_r\mid A)$ from the signed one-outside coordinates. The Plucker relation with tuples $J\setminus\{j\}$ and $I\cup\{j\}$ expresses $p_J$, for $j\in J\setminus I$, in terms of coordinates with fewer outside indices and one-outside coordinates. Induction identifies every $p_J$ with the corresponding minor of $(I_r\mid A)$ inside the quotient chart ring itself. Conversely these minors satisfy all relations as polynomial identities. Sending the entries of $A$ to the one-outside coordinates and sending the $p_J$ to these minors therefore gives inverse ring homomorphisms between that quotient chart ring and $\bar k[A]$. Pivot changes are the same invertible-minor changes of basis on overlaps. Thus these affine charts construct the Grassmannian scheme, with the usual tautological subbundle and a genuine closed immersion into projective space; $r=0$ and $r=n$ give a point. For the Segre equations in [F3], on $z_{i_0j_0}=1$ put $u_i=z_{ij_0}$ and $v_j=z_{i_0j}$, with $u_{i_0}=v_{j_0}=1$. The minor relation gives $z_{ij}=u_i v_j$ in the quotient ring. This substitution and the two coordinate extractions are inverse ring maps with $\bar k[u_i\ (i\ne i_0),v_j\ (j\ne j_0)]$, since substituted products satisfy every minor. By [F7] these compatible charts realize the product as a closed subscheme of projective space. Iterating this Segre construction embeds the finite product $P_{\mathbf e}$ as a closed subscheme of one projective space; if $Q_0$ is empty the product is a point. The polynomial identities used here also hold with any $\bar k$-algebra as coefficient ring, so the embeddings remain closed after forming the product with the affine representation scheme. The bundle-map zero equations of step 1.1 give a closed subscheme of this product. Its composite inclusion in the relative projective space is closed: the closed underlying inclusions compose, and on the quotient charts the composite ring maps remain surjective. Hence its projection is projective in the factorization sense of [F4]. [A2, F2, F3, F4, F7, step 1.1, construct, algebra]

3.1 By [A1] and [F5], the projection in step 2.1 is proper; [F6] then makes its image closed in $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}$. This image is exactly the locus of representations with a destabilizing subrepresentation of dimension $\mathbf e$. [A1, F5, F6, step 2.1]

4.1 There are finitely many subvectors $\mathbf e$ with $0<\mathbf e\le\mathbf d$. The unstable locus is the finite union of the closed images from step 3.1 over the subvectors satisfying the strict phase inequality. Its complement is therefore open and, by [F1], is precisely $\operatorname{Rep}^{ss}_{\mathbf d}(Q,Z)$. If $\mathbf d=0$ the union is empty and the whole one-point representation space is open. [F1, step 3.1, algebra]

5.1 The two declared axiom branches are [A2], used in step 2.1 for scheme-theoretic closed embeddings, and [A1], used in step 3.1 through [F5] for properness. The semistability and HN counting arguments do not use this openness lemma. [A1, A2, F2, F3, F5, F7, step 2.1, step 3.1] ∎


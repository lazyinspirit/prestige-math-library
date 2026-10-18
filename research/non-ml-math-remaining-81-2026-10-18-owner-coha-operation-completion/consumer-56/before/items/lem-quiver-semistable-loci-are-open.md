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

[A1] The Axiom of Choice is assumed only for the projective-morphism
properness result [F5] ([[def-axiom-of-choice]]).

[A2] The Axiom of Choice is also inherited for the scheme-theoretic closed
projective embeddings used by the Plucker and Segre suppliers [F2] and [F3]
([[thm-closed-projective-embedding-by-homogeneous-generators]],
[[def-axiom-of-choice]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For each subvector $\mathbf e$ with $0<\mathbf e\le\mathbf d$ and $\phi_Z(\mathbf e)>\phi_Z(\mathbf d)$, let $P_{\mathbf e}= \prod_i\operatorname{Gr}(e_i,k^{d_i})_{\bar k}$. In $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}\times P_{\mathbf e}$ impose, for each arrow $a:i\to j$, the equation that $$\mathcal S_i\longrightarrow k^{d_i}\xrightarrow{A_a}k^{d_j} \longrightarrow\mathcal Q_j$$ vanishes, where $\mathcal S_i$ is the tautological subbundle and $\mathcal Q_j$ the tautological quotient bundle: their fibers at $U_i,U_j$ are $U_i$ and $k^{d_j}/U_j$. These are zero-locus equations for bundle maps, so their common incidence locus $I_{\mathbf e}$ is closed. Its geometric points are exactly pairs consisting of an arrow matrix tuple and a subrepresentation of dimension $\mathbf e$. [F1, construct, algebra]

1.2 By [A2] and [F2], every factor of $P_{\mathbf e}$ is a closed subvariety of a projective space. Iterating [F3] gives a closed projective embedding of their finite product into a projective space; if $Q_0$ is empty, the product is a point and is already projective. Thus the projection $\operatorname{Rep}_{\mathbf d}\times P_{\mathbf e}\to \operatorname{Rep}_{\mathbf d}$ is projective, and its restriction to the closed subvariety $I_{\mathbf e}$ is projective in the factorization sense of [F4]. [A2, F2, F3, F4, construct]

2.1 By [A1] and [F5], the projection in step 1.2 is proper; [F6] then makes its image closed in $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}$. This image is exactly the locus of representations with a destabilizing subrepresentation of dimension $\mathbf e$. [A1, F5, F6, step 1.2]

3.1 There are finitely many subvectors $\mathbf e$ with $0<\mathbf e\le\mathbf d$. The unstable locus is the finite union of the closed images from step 2.1 over the subvectors satisfying the strict phase inequality. Its complement is therefore open and, by [F1], is precisely $\operatorname{Rep}^{ss}_{\mathbf d}(Q,Z)$. If $\mathbf d=0$ the union is empty and the whole one-point representation space is open. [F1, step 2.1, algebra]

4.1 The two declared axiom branches are [A2], used in step 1.2 for scheme-theoretic closed embeddings, and [A1], used in step 2.1 through [F5] for properness. The semistability and HN counting arguments do not use this openness lemma. [A1, A2, F2, F3, F5, step 1.2, step 2.1] ∎

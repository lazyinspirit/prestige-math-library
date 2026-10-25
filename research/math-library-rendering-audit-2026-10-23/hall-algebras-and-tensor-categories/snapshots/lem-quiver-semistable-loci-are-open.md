---
id: lem-quiver-semistable-loci-are-open
kind: lemma
title: "Semistable loci of finite-quiver representations are open"
status: published
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

**Given:** A finite acyclic quiver $Q$, a finite field $k$, a dimension vector $\mathbf d$, and central charges $z_i\in\mathbb H$.

[F1] $\operatorname{Rep}_{\mathbf d}(Q)$ is the affine parameter scheme of arrow matrices, and geometric semistability tests all nonzero subspaces preserved by those matrices ([[def-finite-acyclic-quiver-stability-data]]).

[F2] Each Grassmannian has a closed Plücker embedding into a projective space ([[thm-plucker-image-closed]]).

[F3] The Segre image of a product of two projective spaces is a closed projective algebraic set ([[thm-segre-image-rank-one-minors]]).

[F4] A morphism is projective on the repository's stated convention if it factors as a closed immersion into relative projective space followed by projection ([[def-projective-morphism-pre-proj]]).

[F5] A projective morphism is proper; this supplier explicitly assumes AC ([[thm-projective-morphism-proper]]).

[F6] Proper morphisms of schemes are closed, including after base change ([[thm-proper-morphism-closed-image]]).

[F7] Under AC, a homogeneous ideal in $A[x_0,\ldots,x_n]$ defines a closed subscheme of $\mathbb P_A^n$; on $D_+(x_i)$ its ring is the degree-zero localized polynomial ring modulo the localized ideal ([[thm-closed-subschemes-projective-space-homogeneous-ideals]]).

[A1] The Axiom of Choice is assumed only for the projective-morphism properness result [F5] ([[def-axiom-of-choice]]).

[A2] The Axiom of Choice is also inherited through [F7] for the scheme-theoretic realizations of the Plucker and Segre equations in [F2] and [F3]. Their classical projective coordinate interpretation uses the algebraically closed field $\bar k$, as fixed by [[thm-closed-projective-embedding-by-homogeneous-generators]] and its projective-space prerequisite. Thus the finite field $k$ is not substituted for the classical base field ([[def-axiom-of-choice]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Work over $\bar k$. By [F2] and [F7], the Plucker equations define a closed projective subscheme whose $\bar k$-points are the $r$-planes. On a chart $p_I\ne0$, normalize $p_I=1$ and use the signed one-outside coordinates as the entries of a matrix $A$. The Plucker relation with tuples $J\setminus\{j\}$ and $I\cup\{j\}$ expresses each $p_J$, for $j\in J\setminus I$, using coordinates with fewer indices outside $I$ and one-outside coordinates. Induction identifies every $p_J$ in the quotient chart ring with the corresponding maximal minor of $(I_r\mid A)$; conversely those minors satisfy every Plucker relation. Hence the chart ring is $\bar k[A]$. The row spans of $(I_r\mid A)$ give a rank-$r$ subbundle of the trivial bundle, and its quotient is locally free; the pivot changes on overlaps are invertible and glue these bundles and charts. Thus the equations construct the Grassmannian scheme with its closed Plucker embedding. The endpoint cases $r=0,n$ are points. For the Segre equations in [F3], on $z_{i_0j_0}\ne0$ normalize $z_{i_0j_0}=1$ and put $u_i=z_{ij_0}$ and $v_j=z_{i_0j}$, with $u_{i_0}=v_{j_0}=1$. The minor relations give $z_{ij}=u_iv_j$ in the quotient ring, and substitution and coordinate extraction are inverse maps with $\bar k[u_i\ (i\ne i_0),v_j\ (j\ne j_0)]$. These charts construct the closed Segre embedding. Iterating it embeds the finite product $P_{\mathbf e}=\prod_i\operatorname{Gr}(e_i,k^{d_i})_{\bar k}$ as a closed subscheme of one projective space; if $Q_0$ is empty, $P_{\mathbf e}$ is a point. The chart ring surjections remain surjective after adjoining the arrow-matrix coordinates, so $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}\times P_{\mathbf e}$ is closed in a relative projective space over $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}$. The chart calculations show these projective subschemes are reduced with the point loci in [F2] and [F3]; [A2] records their classical projective coordinate interpretation over $\bar k$. [A2, F2, F3, F7, construct, algebra]

2.1 For each subvector $\mathbf e$ with $0<\mathbf e\le\mathbf d$ and $\phi_Z(\mathbf e)>\phi_Z(\mathbf d)$, impose in $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}\times P_{\mathbf e}$, for each arrow $a:i\to j$, that the composition $$\mathcal S_i\longrightarrow k^{d_i}\xrightarrow{A_a}k^{d_j}\longrightarrow\mathcal Q_j$$ vanish. Here $\mathcal S_i$ and $\mathcal Q_j$ are the tautological subbundle and quotient bundle constructed in step 1.1; their fibers at $U_i,U_j$ are $U_i$ and $k^{d_j}/U_j$. On the charts from step 1.1 these are polynomial equations, so their common zero locus $I_{\mathbf e}$ is closed. Its geometric points are exactly pairs consisting of an arrow-matrix tuple and a subrepresentation of dimension $\mathbf e$. The closed inclusion $I_{\mathbf e}\hookrightarrow\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}\times P_{\mathbf e}$ composes with the relative Plucker–Segre closed immersion of step 1.1, so the projection to $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}$ is projective by [F4]. [F1, F4, step 1.1, construct, algebra]

3.1 By [A1] and [F5], the projection in step 2.1 is proper; [F6] then makes its image closed in $\operatorname{Rep}_{\mathbf d}(Q)_{\bar k}$. Its $\bar k$-points are exactly the representations with a destabilizing subrepresentation of dimension $\mathbf e$. [A1, F5, F6, step 2.1]

4.1 There are finitely many subvectors $\mathbf e$ with $0<\mathbf e\le\mathbf d$. The unstable locus is the finite union of the closed images from step 3.1 over the subvectors satisfying the strict phase inequality. Its complement is therefore open and, by [F1], is precisely $\operatorname{Rep}^{ss}_{\mathbf d}(Q,Z)$. If $\mathbf d=0$ the union is empty and the whole one-point representation space is open. [F1, step 3.1, algebra]

5.1 The two declared axiom branches are [A2], used in step 1.1 through [F7] for the scheme-theoretic projective constructions, and [A1], used in step 3.1 through [F5] for properness. The semistability and HN counting arguments do not otherwise use AC. [A1, A2, F5, F7, step 1.1, step 3.1] ∎


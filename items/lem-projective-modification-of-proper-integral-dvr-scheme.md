---
id: lem-projective-modification-of-proper-integral-dvr-scheme
kind: lemma
title: "Projective modification of a proper integral DVR-scheme, unchanged in codimension one when regular"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - thm-projective-space-proper-over-base
  - lem-proper-stable-base-change
  - lem-proper-stable-composition
  - lem-proper-local-on-base
  - lem-proper-source-to-separated-target-proper
  - thm-valuative-criterion-properness
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - def-relative-projective-space-standard-charts
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "EGA III, §5.2 (projective existence) and §5.3 (proper extension)"
      url: https://www.numdam.org/item/PMIHES_1961__11__5_0.pdf
    - title: "Stacks Project, Cohomology of Schemes §§8, 14, 18, 24; flat-DVR specialization of the proofs"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
---

## Statement

Assume AC. Let $R$ be a Noetherian DVR and let $X$ be an integral proper $R$-scheme. There is an integral projective $R$-scheme $Z$ and a proper birational surjection $\pi:Z\to X$, isomorphic over a dense open $U$. If $X$ is regular, the maximal such open $U$ contains every codimension-one point of $X$. If $X$ dominates $\operatorname{Spec}R$, then $Z$ is flat over $R$.

## Facts & Assumptions

**Given:** AC, $R$, $X$, and the additional hypotheses for the corresponding clauses.

[F1] Projective spaces are proper, properness survives base change and composition and is local on the target, and a map from a proper source to a separated target is proper ([[thm-projective-space-proper-over-base]], [[lem-proper-stable-base-change]], [[lem-proper-stable-composition]], [[lem-proper-local-on-base]], [[lem-proper-source-to-separated-target-proper]]). Proper maps satisfy valuative existence and uniqueness ([[thm-valuative-criterion-properness]]).

[F2] A one-dimensional regular local ring is a DVR, and torsion-free modules over a PID are flat ([[thm-one-dimensional-regular-local-rings-are-dvrs]], [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]). Projective-space charts are [[def-relative-projective-space-standard-charts]]. AC is inherited through these suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Choose a finite nonempty affine cover $X=\bigcup_i U_i$, and put $U=\bigcap_i U_i$. Since $X$ is integral, every $U_i$ contains its generic point and $U$ is nonempty dense. Each $U_i$ is finite type over $R$, so finite algebra generators give a closed immersion into an affine space and hence an immersion $U_i\to\mathbb P_R^{n_i}$. Let $Z_i$ be its integral closure as a subscheme of that projective space, where “closure” means the reduced scheme-theoretic closure of its image, not normalization. Concretely its ideal on any affine chart is the kernel of evaluation in the function field of $U_i$; these prime ideals localize compatibly and define an integral closed subscheme. It contains $U_i$ as a dense open. Form the integral closure $W$ of the diagonal map $U\to\prod_i\mathbb P_R^{n_i}$ in the same sense. The map of $U$ is an immersion, since its multi-diagonal into $\prod_i U_i$ is closed by separatedness of $X/R$; therefore $U$ is a dense open of $W$. Each projection factors through $Z_i$. Write $p_i:W\to Z_i$, $V_i=p_i^{-1}(U_i)$, and $Z=\bigcup_iV_i$. [F1, F2, construct]

2.1 The maps $V_i\to U_i\to X$ agree on intersections, because they agree on the dense open $U$, their source is integral, and the target is separated. They glue to $\pi:Z\to X$. Each $V_i\to U_i$ is proper by [F1]. The inclusion $V_i\subseteq\pi^{-1}(U_i)$ is proper over $U_i$ by the proper-source/separated-target assertion, hence closed; it is also dense since it contains $U$, so it equals $\pi^{-1}(U_i)$. Thus $\pi$ is proper by target locality. Its image contains the dense $U_i$-subset $U$ and is closed in each $U_i$, so it is surjective. The same argument applied to $U\subseteq\pi^{-1}(U)$, whose map to $U$ is the identity, gives $\pi^{-1}(U)=U$. The product of projective spaces has its Segre closed embedding in one projective space: in each chart the product coordinates recover the original affine coordinates, and globally the image is cut out by the two-by-two minors of the rank-one coordinate tensor; iteration gives the finite-product embedding. Hence $Z$, open in closed $W$, has an immersion in projective space. Since $Z$ is proper over $R$ and the ambient projective space is separated, that immersion is proper by [F1] and hence closed. Thus $Z$ is projective and integral, and $\pi$ is birational. [F1, step 1.1, construct]

3.1 If $X$ is regular and $x$ has codimension one, put $A=\mathcal O_{X,x}$, a DVR by [F2], with fraction field $K(X)$. The base change $Z_A$ is integral and proper birational over $A$. Any affine chart meeting its closed fibre has a finite-type coordinate algebra $B\subseteq K(X)$ containing $A$. An element of negative valuation in $B$ would make the uniformizer invertible in $B$, so cannot occur on such a chart; consequently $B=A$. A chart meeting the closed fibre exists by valuative existence in [F1], and any two such charts give sections agreeing at the generic point and hence equal by separatedness. It follows that $Z_A\to\operatorname{Spec}A$ is an isomorphism. This isomorphism spreads to a neighbourhood of $x$: use finitely many affine charts for the finite-type morphism, express the inverse ring maps by finitely many generators, relations and denominators outside the prime of $x$, and shrink to make their compositions equal to the identity. Charts absent after localization are removed by clearing their relation $1=0$; the remaining finitely many charts glue the inverse. Thus the open isomorphism locus contains every codimension-one point. [F1, F2, step 2.1, algebra]

4.1 If $X$ dominates the trait, the same is true of integral $Z$. Its affine coordinate rings are torsion-free over $R$, hence flat by [F2]. Flatness is affine local, so $Z/R$ is flat. This proves all clauses, retaining AC through [F1]–[F2]. [F1, F2, step 2.1, step 3.1] ∎

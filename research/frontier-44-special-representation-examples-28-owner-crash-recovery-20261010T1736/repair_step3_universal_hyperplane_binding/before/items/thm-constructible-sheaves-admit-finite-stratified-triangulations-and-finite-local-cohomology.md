---
id: thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology
kind: theorem
title: "Algebraically constructible sheaves have finite compatible stratified and local cochain models"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 12
deps: [def-axiom-of-choice,
       lem-compact-semialgebraic-families-admit-compatible-finite-triangulations,
       lem-finite-cell-local-system-cohomology-is-finite-and-commutes-with-field-extension,
       lem-finite-poset-diagrams-have-bounded-finite-bar-models,
       lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model,
       lem-finite-simplicial-open-stars-have-explicit-conical-product-charts,
       thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mark Goresky, Triangulation of stratified objects, Proc. AMS 72 (1978), 193-200"
      url: "https://www.math.ias.edu/~goresky/pdf/triangulations.pdf"
      locator: "sections 2-4, printed pp. 193-199; bibliographic identity verified, available copy is an image scan without text layer"
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "Sections 8, 9 and 32 (links, conical neighbourhoods, constructible sheaves)"
---

## Statement

Assume AC. Let $X$ be a quasi-projective complex algebraic variety, $k$ a
field, and $F$ a bounded complex of analytic $k$-sheaves whose cohomology is
locally constant of finite rank on a finite complex algebraic stratification.
Fix finitely many algebraic supports and locally closed inclusions to be
respected. There is a finite compatible smooth complex algebraic Whitney
refinement, a projective compactification with its algebraic boundary
respected, and a finite pair of simplicial complexes $(K,D)$ such that
$X^{\mathrm{an}}\cong|K|\setminus|D|$, every open simplex lies in one complex
stratum, and the marked supports are unions of simplices. One can take
$\dim K\le2\dim_{\mathbb C}X$; in particular constant-sheaf cohomology vanishes
above that real dimension. The same construction applies individually to the
compact controlled links supplied by the conical-neighborhood theorem.

On these models, actual ordinary and compact-support cohomology, ordinary
derived Hom, internal derived Hom and local cohomology with a prescribed
algebraic support have bounded finite-dimensional cochain models. Internal Hom
is constructible on a finite complex Whitney refinement. The local link and
support models vary locally constantly along the corresponding complex strata;
thus their cohomology has finite rank there. Every such model commutes with
extension of the coefficient field. Inclusions and supports are chosen in
finite collections for a given construction; no compatible triangulation of
arbitrary algebraic maps or cyclic diagrams is asserted. Perverse dimensions
remain the dimensions of the complex strata, independent of the auxiliary real
simplices.

## Facts & Assumptions

**Given:** AC, $X,k,F$, its finite-rank constructible cohomology and the finite support/inclusion collection in the Statement.

[F1] Finite complex Whitney strata and their controlled local cone products are supplied by [[thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods]], including its upstream compatible algebraic stratification construction.

[F2] Compact controlled Whitney spaces and inherited compact controlled links have finite compatible triangulations by the actual radial/core/bundle/mapping-cylinder construction ([[lem-compact-semialgebraic-families-admit-compatible-finite-triangulations]]).

[F3] Finite simplicial stars have explicit compact-link cone products, and finite local-system cellular cochains are finite and scalar compatible ([[lem-finite-simplicial-open-stars-have-explicit-conical-product-charts]], [[lem-finite-cell-local-system-cohomology-is-finite-and-commutes-with-field-extension]]).

[F4] The actual analytic derived incidence equivalence supplies ordinary and compact-support cohomology, derived Hom, internal Hom and the local product projection comparison on finite deleted-boundary models ([[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]]). Its compact-support bridge uses its declared c-soft supplier; it does not identify a diagram injective with an injective among arbitrary analytic sheaves.

[F5] Finite strict-face-chain bar resolutions compute these diagram derived constructions in bounded finite-dimensional complexes and commute with scalar extension ([[lem-finite-poset-diagrams-have-bounded-finite-bar-models]]).

[A1] AC is inherited exactly for the tube/partition and analytic derived-sheaf supplier constructions ([[def-axiom-of-choice]]); all final displayed matrix operations are finite.

## Proof

**Proof technique:** direct.

1.1 By quasi-projectivity choose an algebraic locally closed embedding $X\hookrightarrow\mathbb P^N$. Its reduced projective closure $\overline X$ has $X$ as an open subset, and $B=\overline X\setminus X$ is closed algebraic. Take closures of the finitely many marked supports and the pieces of the given constructibility stratification. Apply [F1]'s finite stratification construction on $\overline X$, respecting these closed algebraic subsets and their finite locally closed differences. This gives a complex Whitney refinement on which every cohomology sheaf of $F$ stays finite-rank locally constant; passing to smaller smooth strata preserves local constancy. The compact analytic space $\overline X^{\mathrm{an}}$ embeds smoothly in a finite Euclidean space: send a projective line represented by $z\ne0$ to its Hermitian rank-one projector $zz^*/(z^*z)$. This is well-defined, injective, and smooth in the projective coordinate charts; its chart inverse recovers the ratios of the projector's nonzero column, so it is a smooth embedding. It is compact because it is the continuous image of the unit sphere. Its restricted algebraic Whitney strata satisfy the real smooth Whitney conditions used by [F2]. Apply [F2], including all chosen stratum unions. Let $K$ be the resulting finite complex and $D$ the subcomplex mapping onto $B$; one barycentric subdivision makes every marked subcomplex full if needed. Restricting the homeomorphism yields $X^{\mathrm{an}}\cong |K|\setminus|D|$ as claimed. [given, F1, F2, A1, construct]

2.1 Every retained open simplex is contained in one original complex stratum. The cohomology of $F$ on it is finite-rank locally constant, so $F$ belongs to the actual essential image of [F4]. It therefore has a bounded finite-dimensional diagram representative on the face poset of the retained simplices, with no assertion that the analytic sheaf category itself is finite. The finite bar construction of [F5] computes actual ordinary derived global sections and actual derived Hom because [F4] proves full faithfulness against the analytic sheaf category by independently established star acyclicity. Its compact-support clause identifies the actual support functor with finite relative cochains on the compactification pair; this uses the c-soft acyclicity and open extension by zero declared in [F4]. Finite simplicial stars and their closed subcomplex complements admit the explicit finite product/cone models of [F3]. Thus local support cohomology is computed by the finite cone of restriction from such a neighborhood to its complement of the marked support, with the conventional shift determined by the support triangle. These restrictions and their maps are the actual sheaf restrictions under [F4], not merely vector spaces with matching dimensions. For the constant sheaf on a compact model the ordinary cellular model has no cochain terms above the simplicial dimension, which is at most twice the complex dimension by [F2]. All face-chain lengths and cohomology amplitudes are finite, so the models are uniformly bounded for the finitely many chosen strata and supports. [F3, F4, F5, step 1.1]

3.1 The ordinary incidence calculation alone gives constructibility on real simplices. To obtain local constancy along a complex stratum $S$, use [F1]'s actual local chart $U\cong V\times cL$, where $V$ is a small contractible ball in $S$ and the chart preserves the complex strata. The compact link $L$ has a finite inherited controlled stratification and a finite triangulation by [F2], and $cL$ truncated to a finite radius has a finite deleted-boundary model. Each product stratum is a product of the contractible $V$ with a link stratum. The restriction of the cohomology sheaves of $F$ is locally constant there. On a link simplex, therefore, its restriction to $V$ times that simplex is represented by a finite coefficient complex independent of the $V$ direction. This last derived assertion follows from [F4], rather than assuming a sheaf is invariant under every stratum-preserving homeomorphism: pullback along the projection to the link is fully faithful on the relevant finite incidence categories because [F4]'s product comparison has fibre $V$ and $C^*(V;k)\simeq k$ by [F3]. Filter the finitely many link simplices by closed skeleta. On a simplex piece the object is a pullback: finite-rank constant sheaves on the contractible product have no positive Ext between them by [F4] and its constant-sheaf comparison. The finite ordinary truncation triangles therefore split there, expressing its locally constant bounded complex by a finite coefficient complex. The ordinary exact open/closed extension-by-zero triangles in [F4] build the object through this finite filtration. Full faithfulness lifts the connecting morphisms between pullbacks, so their finite cones are again pullbacks. Induction proves that the restriction of $F$ to this chart is pulled back from a finite link-cone object. The same argument applies simultaneously to the chosen finite collection of input objects and marked support strata. [F1, F2, F3, F4, F5, step 2.1]

4.1 In step 3.1's chart, ordinary local sections, punctured-neighborhood sections and sections with a marked support are therefore the corresponding finite link/cone cochains, constant in the $V$ direction. Their restriction morphisms are the product/incidence morphisms, so their support cones are locally constant too. Applying this also to two input complexes shows that their internal derived Hom is locally constant in the $V$ direction, with bounded finite-dimensional stalks computed by [F4] and [F5]. Finitely many complex Whitney strata give a uniform amplitude bound. Hence the result is constructible for the complex stratification (or its finite simultaneous support refinement), not merely for the real simplex partition. This is the local constructibility and finite local cohomology assertion required for the later open/closed and perverse gluing constructions. It does not substitute the real simplex dimension for the complex dimension of $S$. [F1, F4, F5, step 3.1]

5.1 Finally every displayed incidence, bar, relative support and link-cone model is a finite matrix complex of finite-dimensional $k$-spaces. Tensor with a field extension $k\subset k'$ is exact, carries its kernels and images to the corresponding kernels and images, and commutes with every finite sum, differential, restriction map and cone. The comparisons of [F4] and the finite local-system comparison of [F3] therefore identify these scalar-extended complexes with the actual corresponding sheaf constructions over $k'$. The constructions and comparisons are locally coherent through their actual incidence morphisms. This proves all claimed finite cohomology and coefficient-extension assertions. [F3, F4, F5, step 2.1, step 4.1] ∎

## Remarks

- Steps 2.1–5.1 use the actual derived-incidence supplier with its finite deleted-boundary model and analytic cohomology comparisons.
- **Source caveat.** The Goresky 1978 triangulation paper is available only as
  an image scan without a text layer; its bibliographic identity was verified
  and the geometric route here is anchored in the text-verified Goresky lecture
  notes and the explicit constructions of the cited suppliers.

---
id: lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact
kind: lemma
title: "Smooth and noncharacteristic complex pullbacks are perverse-exact"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-axiom-of-choice,
       lem-controlled-stratified-submersions-have-continuous-local-trivializations,
       thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
       lem-analytic-constructible-sheaves-admit-coherent-six-operations,
       lem-complex-algebraic-stratifications-have-finite-conical-cochain-models,
       lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model,
       def-finite-complex-algebraic-whitney-stratification-and-control-data,
       def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-canonical-t-structure-on-a-derived-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, The Hodge theory of algebraic maps, arXiv:math/0306030v2 (complete final-version PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "Lemma 3.5.4 (normally nonsingular inclusion: i^!K = i^*K[-2c]) and §3.7 with Remark 3.5.1 (t-exactness of smooth pullback)"
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "§4.2.3-4.2.4 (f^! = f^*[2d](d) and t-exactness for smooth maps)"
---

## Statement

Assume the inherited Axiom of Choice. Let $P$ be a bounded algebraically constructible complex on a complex variety $Y$. If $a:X\to Y$ is smooth of pure relative complex dimension $d$, then $a^*[d]$ is perverse-exact and $a^!=a^*[2d]$ in complex orientation. Fix a finite complex algebraic Whitney stratification $\mathfrak S$ of $Y$. If $i:Z\hookrightarrow Y$ is the restriction of a smooth complex closed embedding of codimension $c$ transverse to every stratum of $\mathfrak S$, then $i^*[-c]$ is perverse-exact on the subcategory of bounded complexes whose cohomology sheaves are locally constant of finite rank on every stratum of $\mathfrak S$, and $i^!P\cong i^*P[-2c]$ for every $P$ in this subcategory. No assertion is made for arbitrary closed embeddings.

## Facts & Assumptions

**Given:** the morphism $a$, the closed embedding $i$ transverse to the fixed stratification $\mathfrak S$, the complex $P$ constructible for $\mathfrak S$ when applying $i$, and the inherited choice assumption.

[F1] Controlled stratified submersions have local trivializations preserving their base coordinates ([[lem-controlled-stratified-submersions-have-continuous-local-trivializations]], [[def-finite-complex-algebraic-whitney-stratification-and-control-data]]). Transversality makes the local defining map of $Z$ a submersion on every stratum near the point under consideration. Its local trivialization gives a stratum-preserving product $W\times D^{2c}$, where $W$ is a neighborhood in $Z$, $D^{2c}$ is an open normal disk and $W$ is the zero slice. The derived coefficient comparison in this product is established in step 1.3; a homeomorphism of unstratified sets alone would not supply it.

[F2] The perverse upper support condition is $\dim\operatorname{supp}\mathcal H^q(P)\le-q$, and duality exchanges the upper and lower perverse aisles ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]], [[def-canonical-t-structure-on-a-derived-category]], [[def-algebraically-constructible-complex-of-analytic-field-sheaves]]). Six-functor duality gives $Da^*=a^!D$ and $Di^*=i^!D$, support localization computes $i^!$, and smooth complex orientation gives $a^!=a^*[2d]$ ([[lem-analytic-constructible-sheaves-admit-coherent-six-operations]]). The Axiom of Choice is assumed as in [[def-axiom-of-choice]].

[F3] Finite conical local models provide compatible finite deleted-boundary triangulations of the local slice ([[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]]). On finite deleted-boundary models, the actual analytic derived-incidence theorem proves the natural comparison $R\operatorname{pr}_*\operatorname{pr}^*B\cong B\otimes_k C^*(F;k)$ for a product projection with fiber $F$, carrying the adjunction unit to $B\otimes(k\to C^*(F;k))$ ([[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]], Statement and proof steps 2.3, 4.1 and 5.1). Thus pullback is fully faithful when $F$ is a nonempty contractible disk. This is a proved product comparison on the supplied models; contractibility alone does not assert base change for an arbitrary nonproper map.

## Proof

**Given:** the hypotheses of the Statement.

1.1 If $P$ is in the upper perverse aisle, a support of $\mathcal H^{q+d}(P)$ has dimension at most $-(q+d)$. Its inverse image under a smooth relative-$d$ map has dimension at most $-(q+d)+d=-q$. Since ordinary pullback is exact for field-module sheaves, this is exactly the support condition for $a^*P[d]$, so $a^*[d]$ preserves the upper aisle. Its relative disk bundle is complex oriented, so the smooth exceptional pullback formula in [F2] gives $a^!=a^*[2d]$. Then $D(a^*P[d])=a^!DP[-d]=a^*DP[d]$, so the upper-aisle calculation for $DP$ also proves preservation of the lower aisle. [F2, given, algebra]

1.2 Suppose $P$ is in the upper perverse aisle and constructible for $\mathfrak S$. The nonzero stalk loci of its cohomology sheaves are unions of strata, each of dimension bounded by the corresponding support dimension. For a transverse embedding $i$, a stratum $S$ of dimension $s$ meets $Z$ either trivially or in dimension $s-c$, so the support of $\mathcal H^{q-c}(P)$ meets $Z$ in dimension at most $-(q-c)-c=-q$; this is the upper perverse condition for $i^*P[-c]$. The exact shift uses transversality on every stratum supporting that cohomology sheaf. [F2, given, algebra]

1.3 In a local controlled product $W\times D^{2c}$ from [F1], shrink $W$ to a finite conical local model of its induced stratification and triangulate it compatibly by [F3]; the disk also has a finite deleted-boundary model. The pullback of $P$ to this product has bounded finite-rank locally constant cohomology on each simplex times the disk. Such a piece is contractible, so its cohomology sheaves are constant by local-system transport along paths and contracting homotopies. Apply [F3] with base a point and this contractible product as fiber: pullback from the point is fully faithful, and its essential image is closed under finite extensions because connecting morphisms lift. Ordinary truncation triangles therefore show that the complex on each piece is pulled back from a finite coefficient complex. Filter $W$ by closed skeleta. Pullback along $\operatorname{pr}:W\times D^{2c}\to W$ commutes with open extension by zero and closed pushforward: their natural comparisons are isomorphisms on stalks, including zero stalks off the relevant product subsets. On each skeleton [F3] makes this pullback fully faithful; lifting the connecting morphisms in the open/closed triangles and taking their cones proves inductively that $P|_{W\times D^{2c}}\cong\operatorname{pr}^*B$, with $B$ its zero-slice restriction. Support localization [F2], computed in the finite product models [F3], now identifies its exceptional zero-slice restriction with $B\otimes_k C^*(D^{2c},D^{2c}\setminus\{0\};k)$. The relative normal complex has its sole cohomology $k$ in degree $2c$, with the complex-oriented generator, giving $i^!P\cong i^*P[-2c]$. For $c=0$ this is the identity calculation. These are the natural support comparisons with the oriented normal class; transitions preserve the orientation of the complex normal bundle, so they agree on overlaps and glue. [F1, F2, F3, construct]

2.1 Verdier duality preserves constructibility for $\mathfrak S$, by the stratumwise finite conical coefficient models in [F3] and duality in [F2]. Dualizing gives $D(i^*P[-c])=i^!DP[c]=i^*DP[-c]$; apply step 1.2 to $DP$ and use [F2] to obtain lower perverse exactness on that subcategory. Together with steps 1.1 and 1.3 this proves both exactness assertions and both oriented exceptional-pullback formulas, including the cases of relative dimension or codimension zero. [F2, F3, step 1.1, step 1.2, step 1.3] ∎

## Remarks

The controlled local product, the analytic product-projection comparison on finite models and the support/duality calculus are separate inputs [F1]–[F3]. No affine vanishing, decomposition theorem or Hodge theory is an input, so this item lies strictly before the projective perverse theorem.

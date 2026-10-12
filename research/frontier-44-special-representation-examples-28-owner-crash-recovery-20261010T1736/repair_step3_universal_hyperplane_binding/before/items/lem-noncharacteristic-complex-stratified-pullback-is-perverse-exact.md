---
id: lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact
kind: lemma
title: "Smooth and noncharacteristic complex pullbacks are perverse-exact"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-axiom-of-choice,
       lem-controlled-stratified-submersions-have-continuous-local-trivializations,
       thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
       lem-analytic-constructible-sheaves-admit-coherent-six-operations,
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

Assume the inherited Axiom of Choice. Let $P$ be a bounded algebraically constructible complex on a complex variety $Y$ with a finite complex algebraic Whitney stratification. If $a:X\to Y$ is smooth of pure relative complex dimension $d$, then $a^*[d]$ is perverse-exact and $a^!=a^*[2d]$ in complex orientation. If $i:Z\hookrightarrow Y$ is the restriction of a smooth complex closed embedding of codimension $c$ transverse to every stratum, then $i^*[-c]$ is perverse-exact and $i^!P\cong i^*P[-2c]$. The latter comparison is for complexes constructible for that transverse stratification; no assertion is made for arbitrary closed embeddings.

## Facts & Assumptions

**Given:** the morphism $a$, the transverse closed embedding $i$, the constructible complex $P$, and the inherited choice assumption.

[F1] Controlled stratified submersions have local trivializations preserving their base coordinates ([[lem-controlled-stratified-submersions-have-continuous-local-trivializations]], [[def-finite-complex-algebraic-whitney-stratification-and-control-data]]). Applied in a sufficiently small compact normal-disk neighborhood to the local defining submersion of $Z$, this gives a stratum-preserving product $Z\times D^{2c}$ with $Z$ the zero slice, and a constructible complex in that product is pulled back along its contractible normal disk. This is the exact controlled product clause used below; a homeomorphism of unstratified sets would not suffice.

[F2] The perverse upper support condition is $\dim\operatorname{supp}\mathcal H^q(P)\le-q$, and duality exchanges the upper and lower perverse aisles ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]], [[def-canonical-t-structure-on-a-derived-category]], [[def-algebraically-constructible-complex-of-analytic-field-sheaves]]). Six-functor duality gives $Da^*=a^!D$ and $Di^*=i^!D$, with relative cohomology computing $i^!$ in a normal product; complex orientation identifies $H^{2c}(D^{2c},S^{2c-1};k)=k$ canonically and all other relative groups vanish ([[lem-analytic-constructible-sheaves-admit-coherent-six-operations]]). The Axiom of Choice is assumed as in [[def-axiom-of-choice]].

## Proof

**Given:** the hypotheses of the Statement.

1.1 If $P$ is in the upper perverse aisle, a support of $\mathcal H^{q+d}(P)$ has dimension at most $-(q+d)$. Its inverse image under a smooth relative-$d$ map has dimension at most $-(q+d)+d=-q$. Since ordinary pullback is exact for field-module sheaves, this is exactly the support condition for $a^*P[d]$, so $a^*[d]$ preserves the upper aisle. Its relative disk bundle is complex oriented, so the smooth exceptional pullback formula in [F2] gives $a^!=a^*[2d]$. Then $D(a^*P[d])=a^!DP[-d]=a^*DP[d]$, so the upper-aisle calculation for $DP$ also proves preservation of the lower aisle. [F2, given, algebra]

1.2 For a transverse embedding $i$, a stratum $S$ of dimension $s$ meets $Z$ either trivially or in dimension $s-c$, so the support of $\mathcal H^{q-c}(P)$ meets $Z$ in dimension at most $-(q-c)-c=-q$; this is the upper perverse condition for $i^*P[-c]$. The exact shift uses transversality on every stratum, including the strata supporting that cohomology sheaf. [F2, given, algebra]

1.3 In the controlled normal product [F1] the constructible complex is constant in the normal disk direction, so its exceptional restriction is $i^*P$ tensored with the relative normal cochain complex of $(D^{2c},S^{2c-1})$. The oriented relative generator in [F2] identifies this complex with $k[-2c]$, yielding $i^!P=i^*P[-2c]$. On overlaps the transition maps preserve the complex normal orientation: a complex-linear determinant has positive real determinant equal to the square of its complex absolute value, so the same relative generator is used on both charts and the local comparisons glue. [F1, F2, construct]

2.1 Dualizing gives $D(i^*P[-c])=i^!DP[c]=i^*DP[-c]$; apply step 1.2 to $DP$ and use [F2] to obtain lower perverse exactness. Together with steps 1.1 and 1.3 this proves both exactness assertions and both oriented exceptional-pullback formulas, including the cases of relative dimension or codimension zero. [F2, step 1.1, step 1.2, step 1.3] ∎

## Remarks

This is the complete support and duality deduction from the controlled stratified normal-product clause [F1], which must be reconciled with that topology supplier's final Statement rather than assumed from an unstratified finite triangulation; the six-functor supplier supplies the sheaf-valued relative orientation calculation. No affine vanishing, decomposition theorem or Hodge theory is an input, so this item lies strictly before the projective perverse theorem.

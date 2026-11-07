---
id: thm-gts-relative-shifted-symplectic-structure-in-cy-families-of-sheaves
kind: theorem
title: Relative shifted symplectic structure in Calabi–Yau families of sheaves
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-calabi-yau-orientations-derived-perfect-moduli-frontiers
dependency_level: 6
deps:
  - def-gts-closed-n-shifted-symplectic-form
  - def-gts-relative-closed-shifted-symplectic-form
  - def-gts-derived-artin-stack-and-cotangent-complex
  - def-gts-geometric-orientation-and-dg-category-calabiyau-structure
  - thm-gts-shifted-symplectic-form-on-perfect-complex-moduli-of-a-cy-variety
dependency_roles:
  def-gts-closed-n-shifted-symplectic-form: mathematical-premise
  def-gts-relative-closed-shifted-symplectic-form: mathematical-premise
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-gts-geometric-orientation-and-dg-category-calabiyau-structure: mathematical-premise
  thm-gts-shifted-symplectic-form-on-perfect-complex-moduli-of-a-cy-variety: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Matthew Huynh, Degenerations of Shifted Symplectic Moduli Stacks of Sheaves
      url: https://arxiv.org/pdf/2609.36922
      locator: arXiv:2609.36922v1, Theorem 3.3 and §§4.1–4.6, PDF pp. 13–21.
    - title: Christopher Brav and Tobias Dyckerhoff, Relative Calabi-Yau Structures
      url: https://arxiv.org/pdf/1606.00619
      locator: Definitions 1.2 and 1.8, PDF pp. 2–3; relative left structures on functors are kept distinct from the base-linear absolute class here.
    - title: Pantev, Toën, Vaquié, Vezzosi, Shifted Symplectic Structures
      url: https://arxiv.org/pdf/1111.3209
      locator: Theorem 2.5 and Theorem 2.12, PDF pp. 30–44, for the fiberwise comparison only.
verification:
  precheck: pass
aliases: []
---

## Statement

Let $R$ be a smooth finitely generated commutative $\mathbb C$-algebra and $S=\operatorname{Spec}(R)$. Let $p:X\to S$ be a smooth quasi-projective family of pure relative dimension $d$ with a chosen isomorphism $\mathcal O_X\simeq\Omega^d_{X/S}$. For a derived $S$-scheme $T$, let $\operatorname{Coh}(X_T)$ be the stable category of complexes with bounded coherent cohomology and set $\operatorname{IndCoh}(X_T)=\operatorname{Ind}(\operatorname{Coh}(X_T))$; assume the source's equivalence $\operatorname{IndCoh}(X_T)\simeq\operatorname{QCoh}(X_T)$ under smoothness. A family $F$ on $X_T$ has proper support over $T$ when its cohomology is supported on a closed subspace $Z\to T$ that is proper. It is flat over $T$ when it is connective and has Tor-amplitude at most zero: for every discrete quasi-coherent $\mathcal O_T$-module $G$, $F\otimes^{\mathbf L}p_T^*G$ has cohomology only in degree zero. Put $\mathcal C=\operatorname{IndCoh}(X)$, regarded as an $R$-linear category. For $T$, write $\mathcal C_T=\mathcal C\otimes_{\operatorname{QCoh}(S)}\operatorname{QCoh}(T)$. A $\mathcal C_T$-object is pseudo-perfect if its associated exact functor $\mathcal C^c{}^{\mathrm{op}}\to\operatorname{QCoh}(T)$ lands in perfect complexes. Let $\mathcal M_{\mathcal C/S}^{\mathrm{pp}}$ be the derived moduli functor of pseudo-perfect objects and let $\mathcal M_{X/S}$ be the derived moduli functor of flat families of properly supported coherent sheaves.

Assume the paper's exact finiteness and relative Calabi–Yau hypotheses. The category $\mathcal C$ is compactly generated, meaning generated under colimits by its compact objects; it is smooth in the source sense when its identity functor is left dualizable as an $R$-linear functor; and it is finite type when it is a compact object of $\operatorname{Pr}^{\mathrm L}_{\omega,R}$. A specified relative left $d$-Calabi–Yau class is a map $\eta:R[d]\to\operatorname{HN}(\mathcal C/R)$ whose induced inverse-dualizing map $\mathcal C^!\to\mathcal C[-d]$ is a quasi-isomorphism. Assume $\mathcal M_{\mathcal C/S}^{\mathrm{pp}}$ is derived Artin locally of finite presentation, and that $\mathcal M_{X/S}$ identifies with an open derived substack whose relative tangent at $F$ is $R\operatorname{Hom}_{\mathcal C_T}(F,F)[1]$. Finally, assume the universal object induces a natural map from the space of relative negative-cyclic classes to closed relative forms, as detailed in [A4]. Then $\mathcal M_{X/S}$ carries a relative $(2-d)$-shifted symplectic structure. Under the relative class's base-change compatibility, restriction to a geometric fiber is the corresponding base-changed closed form. If that fiber also satisfies the smooth-proper orientation and representability hypotheses of the preceding A-page theorem, the two constructions agree; no such comparison is asserted for a nonproper ambient fiber.

## Statement references

[Huynh, Theorem 3.3 and §§4.1–4.6](https://arxiv.org/pdf/2609.36922).

[Brav–Dyckerhoff, Definitions 1.2 and 1.8](https://arxiv.org/pdf/1606.00619).

[PTVV, Theorems 2.5 and 2.12](https://arxiv.org/pdf/1111.3209).

## Facts & Assumptions

**Given:** The smooth affine base $S=\operatorname{Spec}(R)$, the smooth quasi-projective relative Calabi–Yau family $X/S$, its chosen relative volume form, the $R$-linear category $\mathcal C=\operatorname{IndCoh}(X)$, the relative left $d$-Calabi–Yau class $\eta$, the pseudo-perfect-object moduli stack, and the flat proper-support substack with the properties enumerated in the Statement.

[F1] [[def-gts-derived-artin-stack-and-cotangent-complex]]: a derived Artin stack is a space-valued derived sheaf with the stated representability and atlas conditions; its relative cotangent complex represents derived derivations, and its relative tangent is asserted only under perfectness.

[F2] [[def-gts-geometric-orientation-and-dg-category-calabiyau-structure]]: a relative left $d$-Calabi–Yau structure on a smooth $R$-linear category is a map $R[d]\to\operatorname{HN}(\mathcal C/R)$ whose induced map $\mathcal C^!\to\mathcal C[-d]$ is an equivalence. $\operatorname{HN}$ is Hochschild chains with their circle action followed by homotopy fixed points.

[F3] [[def-gts-relative-closed-shifted-symplectic-form]]: a relative shifted symplectic structure is a closed relative negative-cyclic two-form whose adjoint $T_{(M/S)}\to L_{(M/S)}[n]$ is a quasi-isomorphism.

[F4] [[thm-gts-shifted-symplectic-form-on-perfect-complex-moduli-of-a-cy-variety]]: for a smooth proper geometric fiber with the exact all-derived-base degree-d orientation and the stated representability conditions, the absolute perfect-complex moduli stack has a (2-d)-shifted form. Its universal Chern-character prerequisite is now constructed locally. This does not discharge the separate relative hypotheses [A1]–[A5].

[A1] $\mathcal C=\operatorname{IndCoh}(X)$ is compactly generated, smooth, and finite type over $R$. The proof that the six-functor duality and tensor-product equivalence imply these properties is not locally supplied here.

[A2] The relative negative-cyclic class $\eta$ exists and its image gives the equivalence $\mathcal C^!\to\mathcal C[-d]$. The proof that the chosen relative volume form constructs $\eta$ uses the unsupplied IndCoh/Hochschild-duality inputs.

[A3] The moduli stack of pseudo-perfect objects is derived Artin locally of finite presentation, properly supported objects are exactly the relevant pseudo-perfect objects, the duality identification $R\operatorname{Hom}_R(R\operatorname{Hom}_{\mathcal C_T}(F,F[d]),R)\simeq R\operatorname{Hom}_{\mathcal C_T}(\operatorname{id}_{\mathcal C_T}^!(F[d]),F)$ holds, and the flat proper-support locus is the open substack with the relative tangent stated in the Statement. The cited representability, duality, and proper-support arguments are not locally supplied here.

[A4] The universal object induces a natural map from $\operatorname{Map}_R(R[d],\operatorname{HN}(\mathcal C/R))$ to $\mathcal A^{2,\mathrm{cl}}(\mathcal M_{\mathcal C/S}^{\mathrm{pp}}/S,2-d)$, compatible with derived affine descent, whose underlying pairing is composition followed by $\eta$. This is the precise cyclic-to-closed-form construction assumed by the conditional proof.

[A5] The relative negative-cyclic class and closed-form construction commute with derived base change to geometric fibers.

## Proof


1.1 Evaluate the assumed natural transformation in [A4] on the relative class $\eta$. On each derived affine chart it yields a closed relative two-form of degree $2-d$; [A4] states that these chartwise forms agree on overlaps and descend. They therefore define a global closed relative form $\omega_\eta$ on the pseudo-perfect moduli stack. This uses the stipulated cyclic-to-closed-form map as a premise; the construction of that map is not proved here. [given, F2, F3, A4, construct]

2.1 Let $F$ be a point of the pseudo-perfect moduli stack. By [A3], its relative tangent is $R\operatorname{Hom}_{\mathcal C_T}(F,F)[1]$. The underlying pairing of $\omega_\eta$ is induced by composition of endomorphisms followed by $\eta$; its adjoint is the map obtained by applying $R\operatorname{Hom}_{\mathcal C_T}(F,-)$ to $\mathcal C_T^!(F[d])\to F$, with the shift convention $K[r]^j=K^{j+r}$. [given, F1, F2, A2, A3, step 1.1]

3.1 Since $\eta$ is a left $d$-Calabi–Yau structure, $\mathcal C^!\to\mathcal C[-d]$ is a quasi-isomorphism. Evaluation at $F$ preserves this equivalence. The pseudo-perfect duality identification in [A3] identifies the resulting map on $R\operatorname{Hom}_{\mathcal C_T}(F,F)[1]$ with the adjoint $T_{(M/S,F)}\to L_{(M/S,F)}[2-d]$. Hence this adjoint is a quasi-isomorphism. [A2, A3, step 2.1, algebra]

4.1 The flat proper-support moduli stack is an open derived substack by [A3], so its relative tangent and cotangent are restrictions of those of the pseudo-perfect moduli stack. Restricting $\omega_\eta$ preserves closedness, and the restricted adjoint remains a quasi-isomorphism at every point. Therefore it is relative $(2-d)$-shifted symplectic by [F3]. [F3, A3, step 1.1, step 3.1]

5.1 For a geometric point $s$ of $S$, [A5] identifies the restriction of $\omega_\eta$ with the closed form obtained by applying the same assumed cyclic-to-closed-form map to the base-changed class. The shift remains $2-d$. If $X_s$ is also smooth proper and satisfies the absolute theorem's exact orientation and representability hypotheses, [F4] identifies that form with its absolute form. If $X_s$ is nonproper, [F4] does not apply to the ambient fiber, so no such identification is used. Base change supplies no missing IndCoh or representability proof. [F4, A5, step 1.1, algebra] ∎

## Remarks

The proof is conditional on A1–A5. Huynh's source proof identifies the exact missing chain: IndCoh six-functor duality and the BZFN tensor equivalence; the volume-form-to-negative-cyclic construction; proper-support/pseudo-perfect identification; and Toën–Vaquié/Pridham–PS23 representability for the flat locus. The current batch has no local carriers for these inputs. The enumerative applications discussed after the theorem are not claimed here.


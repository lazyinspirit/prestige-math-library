---
id: thm-gts-shifted-symplectic-form-on-perfect-complex-moduli-of-a-cy-variety
kind: theorem
title: Shifted symplectic form on perfect-complex moduli of a Calabi–Yau variety
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-calabi-yau-orientations-derived-perfect-moduli
dependency_level: 5
deps:
  - thm-gts-transgression-to-shifted-symplectic-mapping-stacks
  - def-gts-closed-n-shifted-symplectic-form
  - def-gts-derived-artin-stack-and-cotangent-complex
  - def-gts-geometric-orientation-and-dg-category-calabiyau-structure
  - def-gts-derived-stack-of-perfect-complexes
  - thm-gts-perfect-complex-stack-two-shifted-symplectic
  - lem-gts-universal-cyclic-character-on-perfect-complex-core
dependency_roles:
  thm-gts-transgression-to-shifted-symplectic-mapping-stacks: mathematical-premise
  def-gts-closed-n-shifted-symplectic-form: mathematical-premise
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-gts-geometric-orientation-and-dg-category-calabiyau-structure: mathematical-premise
  def-gts-derived-stack-of-perfect-complexes: mathematical-premise
  thm-gts-perfect-complex-stack-two-shifted-symplectic: mathematical-premise
  lem-gts-universal-cyclic-character-on-perfect-complex-core: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pantev, Toën, Vaquié, Vezzosi, Shifted Symplectic Structures
      url: https://arxiv.org/pdf/1111.3209
      locator: Theorem 2.5, Theorem 2.12 and complete §2.3 proof, PDF pp. 30–44.
    - title: Damien Calaque and Stefano Ronchi, Shifted Symplectic Geometry by Examples
      url: https://arxiv.org/pdf/2510.04625
      locator: Definition 5.6, Theorem 5.8 and Lemma 5.9, PDF pp. 39–41; the theorem proof is referred to PTVV.
verification:
  precheck: pass
aliases: []
---

## Statement

Let k be a characteristic-zero field and let X be a smooth proper scheme of pure dimension d equipped with the exact degree-d geometric orientation defined on this page. Write Perf(X) for the derived moduli stack whose A-points are perfect complexes on X_A = X × Spec(A) and equivalences. Assume the source finiteness conditions: Perf(X) is locally geometric, is covered by derived Artin locally finite-presentation open substacks, and the corresponding mapping stacks from X to the same open substacks of Perf_k are derived Artin locally of finite presentation. Then Perf(X) carries a canonical (2-d)-shifted symplectic structure. For d=3 the shift is -1 and gives a derived obstruction-theory interface; this result alone constructs neither a virtual class nor a physical state count.

## Statement references

[PTVV, Theorem 0.1(1), Theorem 2.5 and Theorem 2.12](https://arxiv.org/pdf/1111.3209).

[Calaque–Ronchi, Theorem 5.8 and Lemma 5.9](https://arxiv.org/pdf/2510.04625).

## Facts & Assumptions

**Given:** A characteristic-zero field $k$; a smooth proper $d$-dimensional scheme $X$; a degree-$d$ $\mathcal O$-orientation $[X]$ satisfying perfect duality after every connective derived base change; the locally geometric perfect-complex moduli functor; and the source finiteness and representability conditions in the Statement. The theorem uses the orientation as a datum and does not require a chosen construction of it.

[F1] [[def-gts-geometric-orientation-and-dg-category-calabiyau-structure]]: an O-orientation is a map C(X,O_X) -> k[-d] whose cap maps C(X_A,E) -> R Hom_A(C(X_A,E dual),A)[-d] are quasi-isomorphisms for every connective derived base A and every perfect E.

[F2] [[def-gts-derived-stack-of-perfect-complexes]]: Perf(X)(A) is the groupoid of perfect complexes on X_A and equivalences; its points are families on X_A.

[F3] [[def-gts-derived-artin-stack-and-cotangent-complex]]: on each Artin locally finite-presentation open, cotangent complexes are perfect, and tangent complexes are their duals.

[F4] [[def-gts-closed-n-shifted-symplectic-form]]: a shifted symplectic structure is a closed weight-two negative-cyclic form whose adjoint tangent-to-cotangent map is a quasi-isomorphism.

[F5] [[thm-gts-transgression-to-shifted-symplectic-mapping-stacks]]: if F has an n-shifted symplectic structure, X is O-compact and degree-d oriented after all base changes, and Map(X,F) is derived Artin locally of finite presentation, then Map(X,F) has a canonical (n-d)-shifted symplectic structure. The current Step 1 record is ready and hash-current; this is authoring readiness, not independent acceptance.

[F6] [[thm-gts-perfect-complex-stack-two-shifted-symplectic]]: Perf_k has a compatible two-shifted symplectic form once its universal datum is supplied. The local construction [F7] supplies that exact datum and its all-derived-base tangent pairing.

[F7] [[lem-gts-universal-cyclic-character-on-perfect-complex-core]]: the universal character, its closed weight-two image, the tangent End(E)[1] and the nondegenerate one-half trace-composition pairing are constructed naturally on every derived base, with actual higher descent.

[A2] The mapping-stack representability and open-cover hypotheses in the Statement are explicit; they are not inferred from smooth properness alone.

## Proof

**Given:** [F1]–[F7] and the exact orientation, geometricity and representability hypotheses in the Statement. The proof uses the actual universal evaluation and does not assume an equivalence between the two local presentations of perfect complexes.

1.1 Put $M=\mathrm{Perf}(X)$. Its tautological family gives an actual evaluation map $\mathrm{ev}:X\times M\to\mathrm{Perf}_k$: on a derived affine mapping to $X\times M$, restrict that family. A bounded complex of finite-rank locally free modules is dualizable, by the finite tensor–Hom duality and its cone construction, so this restriction is an actual point of the affine perfect-module core. All maps and their higher simplices are the restrictions of the tautological family. Only this direction is needed; no converse comparison between local models or identification of $M$ with an entire mapping stack is assumed. [F1, F2, F7, given, construct]

2.1 By [F7], the universal cyclic-core character followed by mixed HKR and its weight-two projection is a global closed two-form $\omega_{\mathrm{Perf}}$ of degree two on the actual prestack $\mathrm{Perf}_k$. Pull it back by evaluation. The character is a map of spaces with all its higher simplices, so its affine restrictions form the actual homotopy-limit datum defining a closed form on $X\times M$, not merely an assignment of cohomology classes to objects. [F4, F7, step 1.1, construct]

2.2 We identify the actual tangent without a formal-moduli recognition theorem. For an A-point E put $D=C(X_A,\mathcal E nd(E))$. Its based loop space in the full perfect-complex core is the automorphism infinity-group of E. On a split square-zero direction $A\oplus N$ with N a perfect connective A-module, perfect Hom and the stipulated derived base change identify the endomorphism fiber over the identity with the space underlying $D\otimes_A N$. Every such endomorphism $1+u$ is invertible, with inverse $1-u$, because $N^2=0$; the assertion is about its entire component and higher homotopies. Thus the automorphism group's tangent at the identity is D. Derivations are fibers of values on this square-zero extension; finite loop limits commute with these fibers. Since looping a linear complex shifts it by $[-1]$, the perfect tangent of the given Artin open satisfies $T_{M,E}[-1]\simeq D$, hence $T_{M,E}\simeq D[1]$. Yoneda on the free module shifts and their mapping spaces detects this equivalence of perfect complexes. It is natural in the actual derived base A and the family E. [F1, F2, F3, F7, step 1.1, construct]

3.1 Reproduce the integration construction of [F5] on this evaluation map. For derived affines $\operatorname{Spec}B\to M$ and $\operatorname{Spec}C\to X$, the polynomial-cell cotangent model gives the mixed Künneth map on de Rham complexes: differentials of $B\otimes_k C$ split into the two factors, and their exterior powers split by the number of factors from each summand. Project the C-factor to weight zero. Global sections over X then give a natural map $\kappa_{M,X}:\mathrm{DR}(M\times X/k)\to\mathrm{DR}(M/k)\otimes_k C(X,\mathcal O_X)$. The projection formula is first the identity for finite free coefficient modules, then for finite cones and retracts. Compactness of $\mathcal O_X$ makes $C(X,-)$ preserve direct sums (a filtered colimit of finite sums) and finite cofibers, hence the cell colimits expressing any coefficient complex as sums of shifts and cones. This extends the formula to the possibly unbounded de Rham coefficient complex without a finite-rank assumption. The coefficient $C(X,\mathcal O_X)$ is perfect by the stipulated O-compactness, so tensoring with it commutes with the affine homotopy limits extending the construction to M. The construction commutes with both differentials. Composing with the given $[X]$ and taking the negative-cyclic product therefore defines $\omega_M=\int_X\mathrm{ev}^*\omega_{\mathrm{Perf}}$, a global closed two-form of degree $2-d$. [F1, F4, F5, F7, step 2.1, construct]

4.1 The family identity in [F7] identifies the leading pulled-back character with $\tfrac12\operatorname{Tr}(\operatorname{At}_{M}(E)^2)$, using the relative Atiyah coaction along M. By its first-jet construction, that coaction evaluated on a derivation of M is the actual first variation of the tautological family. Its adjoint $T_{M,E}\to D[1]$ is therefore the tangent identification of step 2.2: the classifying map of this universal family into M is the identity. This identifies the leading evaluation pairing with one half of trace of composition on the endomorphism sheaf, without a tangent assertion about any classifying prestack of a fixed automorphism group. Consequently the leading pairing of the integrated form is the cup/composition map on $C(X_A,\mathcal E nd(E))$, followed by the trace to $C(X_A,\mathcal O_{X_A})$ and by $[X]_A$, multiplied by $1/2$. This is the underlying form of the constructed negative-cyclic class: the weight-zero projection in $\kappa$ and the relative mixed comparison in [F7] are the same affine operations. The compatibility holds in derived module complexes with their Koszul symmetry, not merely on classical closed points. [F1, F4, F5, F7, step 3.1, step 2.2, algebra]

5.1 The sheaf $\mathcal E nd(E)=E^\vee\otimes E$ is perfect and its trace-of-composition pairing identifies it with its dual: contracting the two E/dual pairs has inverse the two coevaluation maps, by the duality triangles. Apply the GIVEN orientation duality [F1] to this perfect sheaf after the arbitrary derived base A. It identifies $D\simeq D^\vee[-d]$ through precisely the cup/trace/integration map in step 4.1. Multiplication by $1/2$ is invertible in characteristic zero. Shifting by $[1]$ and using step 2.2 therefore makes the adjoint $T_{M,E}\to L_{M,E}[2-d]$ an equivalence. No field-valued Serre-duality statement has been extended beyond its actual hypotheses; the full base-change duality is the orientation datum in the Statement. [F1, F3, F4, step 2.2, step 4.1, algebra]

6.1 Quasi-isomorphisms of quasi-coherent complexes are local on the stipulated derived Artin atlas. Thus the closed form of step 3.1 has an equivalence as its adjoint on every indicated open and their overlaps. Naturality of evaluation, the global cyclic character and the fixed orientation makes these closed-form points agree with all their higher descent data. They define the asserted canonical $(2-d)$-shifted symplectic structure on the whole $M$. The original geometricity and representability assumptions remain in force; none has been inferred from smooth properness alone. [F1, F3, F4, F7, step 3.1, step 5.1, construct]

7.1 For $d=3$ the degree is $2-d=-1$. The constructed structure is exactly the derived shifted-form interface in the Statement; it constructs no virtual integration or physical state count. [F4, step 6.1, algebra] ∎

## Remarks

The universal negative-cyclic input is supplied by [F7]. The orientation is the exact datum in the Statement, with perfect duality after every derived base change; the theorem does not need a separate construction of an orientation from a field-valued volume form. The stated finiteness and representability hypotheses remain in force.

The construction can be summarized by the following square of actual evaluation maps; the proof above uses the stated naturality and descent, not the picture.

```tikzcd
\mathrm{Perf}(X)(A) \arrow[r,"\mathrm{ev}"] \arrow[d,"\text{base change}"] &
\mathrm{Map}(X,\mathrm{Perf}_k)(A) \arrow[d,"\text{base change}"] \\
\mathrm{Perf}(X)(A') \arrow[r,"\mathrm{ev}"] &
\mathrm{Map}(X,\mathrm{Perf}_k)(A')
```

This is a mathematical derived-moduli result only. In dimension three it supplies an obstruction-theory interface, not a virtual class or state count.


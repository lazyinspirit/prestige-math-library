---
id: lem-graded-algebra-isomorphism-transports-the-graded-module-category
kind: lemma
title: "A graded algebra isomorphism transports the graded module category, its Grothendieck groups and its dualities"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 35
deps: [def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       def-graded-cartan-pairing-between-projectives-and-modules,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-finitely-generated-graded-projective-module,
       def-graded-ring-module-bimodule-and-internal-shift,
       cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading,
       def-type-a-hecke-specht-module-and-cell-form,
       thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4, Invent. Math. 178 (2009) 451-484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Section 4.1-4.4, printed pp. 19-27: nondegenerate cyclotomic quotient, weight idempotents, the generator formulas (4.36)-(4.37) and the isomorphism; Section 6, printed pp. 29-31: the integral form and base change. Complete passages read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 2.4-2.10, printed pp. 6-10: graded module categories, duality and divided powers; Section 4.7-4.8, printed pp. 35-37: Theorems 4.9, 4.11 and 4.12. Complete passages read."
verification:
  precheck: pass
---

## Statement

Let $\rho:R\to H$ be an isomorphism of finite-dimensional unital
$\mathbb Z$-graded $k$-algebras. Restriction of scalars along $\rho$ is an
equivalence of graded left module categories which is exact, sends
finite-dimensional modules to finite-dimensional modules, sends a shift
$M\{r\}$ to $M\{r\}$, sends finitely generated graded projectives to finitely
generated graded projectives, preserves composition multiplicities of graded
simples (with shifts), and identifies the graded Hom pairings
$\operatorname{gdim}\operatorname{HOM}$ of
[[def-graded-cartan-pairing-between-projectives-and-modules]]. It therefore
induces $A$-module isomorphisms $K_0^{\rm gr}(R)\to K_0^{\rm gr}(H)$ and
$G_0^{\rm gr}(R)\to G_0^{\rm gr}(H)$ intertwining the Cartan homomorphisms and
the forgetful maps $\zeta$.

If moreover $\rho$ intertwines fixed anti-automorphisms $\ast_R$ and $\ast_H$
(i.e. $\rho(x^{\ast_R})=\rho(x)^{\ast_H}$), then the transported functor
intertwines the two diagram dualities $D_\psi$ and the two projective
Hom-dualities $\#$ of `def-cyclotomic-klr-diagram-duality-and-graded-module-duals`,
and hence preserves normalized self-dual simples and normalized self-dual
indecomposable projectives.

**Application.** For each nonzero content sector choose the actual graded block
isomorphism $\rho_\alpha$. DEFINE the Hecke duality by
$\ast_H=\rho_\alpha\ast_R\rho_\alpha^{-1}$. This is a grading-preserving
anti-involution, fixing the NAMED images of $e(i),y_r,\psi_r$, and $\rho_\alpha$
intertwines it by definition. Thus the preceding duality conclusion applies
blockwise. This does not identify $\ast_H$ with the raw cellular
anti-involution that fixes affine Hecke generators, and does not infer that a
product is fixed merely because its factors are fixed.

## Facts & Assumptions

**Given:** An isomorphism $\rho:R\to H$ of finite-dimensional unital
$\mathbb Z$-graded $k$-algebras, possibly intertwining fixed anti-automorphisms
$\ast_R$, $\ast_H$.

[F1] The graded module categories, the internal shift $M\{r\}$, finite
generated graded projectives and the Grothendieck and Cartan data are those of
[[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]],
[[def-graded-ring-module-bimodule-and-internal-shift]] and
[[def-finitely-generated-graded-projective-module]].

[F2] The graded Hom pairing $h(P,M)=\operatorname{gdim}\operatorname{HOM}(P,M)$,
its additivity, sesquilinearity and degree-zero part are those of
[[def-graded-cartan-pairing-between-projectives-and-modules]].

[F3] The Hecke-side grading and the block isomorphisms are supplied by
`cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading` and
`thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism`; the diagram dualities
are those of `def-cyclotomic-klr-diagram-duality-and-graded-module-duals`, and
the left cell module used in the application is the one of
[[def-type-a-hecke-specht-module-and-cell-form]].

## Proof

**Proof technique:** direct.

1.1 **Restriction of scalars is an equivalence.** Pulling back a graded left $H$-module $M$ along $\rho$ gives a graded left $R$-module with the same underlying graded vector space and action $r\cdot m=\rho(r)m$, and pulling back along $\rho^{-1}$ is a functor in the other direction; the two composites are the identity on underlying graded vector spaces and hence on objects and morphisms [F1]. Because $\rho$ is a bijection and preserves degree, the functor is exact, preserves finite-dimensionality, and satisfies $\rho^*M\{r\}=(\rho^*M)\{r\}$ [F1]. [F1]

1.2 **Projectives, Hom and composition multiplicities.** A finitely generated graded projective is a direct summand of a finite free graded module; pulling back preserves finite free modules and retracts, so it preserves finitely generated graded projectives [F1]. It is the identity on graded Hom spaces $\operatorname{Hom}_{R,d}(P,\rho^*M)=\operatorname{Hom}_{H,d}(\rho_*P,M)$ and on shifts, so it preserves graded Hom dimensions and consequently composition multiplicities of graded simples together with their shifts; the graded Hom pairing of [F2] is therefore identified [F2]. [F1, F2]

2.1 **The Grothendieck identifications.** Since the functor is exact and preserves split exact sequences, finite dimension and the shift, it induces $A$-linear isomorphisms $K_0^{\mathrm{gr}}(R)\to K_0^{\mathrm{gr}}(H)$ and $G_0^{\mathrm{gr}}(R)\to G_0^{\mathrm{gr}}(H)$; the underlying module of a projective is carried to the underlying module, so the Cartan homomorphisms and the forgetful maps $\zeta$ are intertwined, and $q$ is preserved because shifts are [F1, F2]. [F1, F2, step 1.2]

2.2 **Dualities.** Suppose $\rho$ intertwines the stars. For a finite-dimensional graded module $M$, the transported duality is $(a\cdot f)(m)=f(a^{\ast_H}m)$ on the dual space; substituting $a=\rho(x)$ and using $\rho(x^{\ast_R})=\rho(x)^{\ast_H}$ shows that the duality computed with $\ast_R$ on $\rho^*M$ equals the duality computed with $\ast_H$ on $M$, so the two diagram dualities $D_\psi$ are intertwined [F3]. The same substitution on $\operatorname{HOM}(P,R)\cong\operatorname{HOM}(\rho_*P,H)$ identifies the projective Hom-dualities $\#$; consequently normalized self-dual simples and normalized self-dual indecomposable projectives are preserved, since normalization is a shift-fixing condition [F3]. [F3, step 1.1]

3.1 **The application.** For each nonzero content sector the block isomorphism $\rho_\alpha$ is a graded algebra isomorphism [F3]. Defining $\ast_H=\rho_\alpha\ast_R\rho_\alpha^{-1}$ gives an anti-automorphism because a conjugation of an anti-automorphism is again one, it is an involution because $\ast_R$ is, it preserves the grading because $\rho_\alpha$ does, and it fixes the named images $\rho_\alpha(e(i)),\rho_\alpha(y_r),\rho_\alpha(\psi_r)$ whenever $\ast_R$ fixes the corresponding KLR generators; the intertwining $\rho_\alpha\ast_R=\ast_H\rho_\alpha$ holds by construction, so the duality conclusion of step 2.2 applies blockwise [F3]. No identification of $\ast_H$ with the raw cellular anti-involution is made, and no product-fixedness is inferred from fixedness of factors. [F3, step 2.2]

4.1 **No choice.** The construction is the inverse-pair of functors induced by an explicit bijection, and every verification is a one-line substitution on generators or Hom spaces; no family of nonempty sets is selected. Hence no choice is used. [F1, F3, given] ∎

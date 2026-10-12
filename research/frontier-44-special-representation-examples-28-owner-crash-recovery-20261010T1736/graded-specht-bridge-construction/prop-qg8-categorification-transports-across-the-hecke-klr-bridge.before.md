---
id: prop-qg8-categorification-transports-across-the-hecke-klr-bridge
kind: proposition
title: "The QG-8 categorification transports across the blockwise Hecke-KLR bridge"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 36
deps: [def-nondegenerate-root-of-unity-level-one-hecke-regime,
       def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       def-graded-cartan-pairing-between-projectives-and-modules,
       lem-graded-algebra-isomorphism-transports-the-graded-module-category,
       thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism,
       cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric,
       thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module,
       thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module,
       thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda,
       thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis,
       thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis,
       def-axiom-of-choice,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Introduction pp. 1-3; Section 4.7-4.8, printed pp. 35-37: Theorems 4.9, 4.11, 4.12 and the categorification of the negative half; Section 5.1-5.7, printed pp. 45-57: Theorems 5.1-5.19. Complete passages read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4, Invent. Math. 178 (2009) 451-484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1-5: Main Theorem (1.6)-(1.15) and Corollaries 1-2; Section 4.4, printed pp. 25-27: the generator formulas (4.36)-(4.37). Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 9.1-9.5, printed pp. 39-46: categorification of f and V(Lambda), Theorem 9.5 and the graded canonical-basis statements. Complete passage read."
verification:
  precheck: pass
---

## Statement

In the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]] (both branches (C0)
and (CP)), fixing an admissible normalising series, the blockwise graded
isomorphism $\rho_\alpha:R^\Lambda_\alpha\to H^\Lambda_\alpha$ of
`thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism` with the grading of
`cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading` transports the
standard homogeneous cyclotomic data to the Hecke side, block by block and then
by the restricted direct sums of
[[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]]:

1. the unique $A$-module isomorphism
$\phi:K_0^{\rm gr}(R^\Lambda)\to V_A(\Lambda_0)$ of
`thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module`
(sending the vacuum class to $v_{\Lambda_0}$ and intertwining the normalized
divided powers $E_i,F_i,K_i$) becomes an $A$-module isomorphism
$\phi^{\rm Hecke}:K_0^{\rm gr}(H^{\Lambda})\to V_A(\Lambda_0)$ with the same
properties;

2. the canonical identification
$\Psi_{\rm can}:G_0^{\rm gr}(R^\Lambda)\to V_A(\Lambda_0)^\vee$ of
`thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module`
(restricted weight dual, canonical module action, normalized simple classes to
the form-dual projective basis) becomes an isomorphism
$\Psi_{\rm can}^{\rm Hecke}:G_0^{\rm gr}(H^{\Lambda})\to V_A(\Lambda_0)^\vee$
with the same properties;

3. the two identifications intertwine the transported $E_i,F_i,K_i$ of
`thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero`
with the Hecke-side functors induced by
[[def-cyclotomic-klr-induction-and-restriction-functors]], and the
FIRST-BAR-SEQUILINEAR Hom pairing $h$ of
[[def-graded-cartan-pairing-between-projectives-and-modules]] and, separately,
the $A$-BILINEAR tensor pairing $T$ defining $\Psi_{\rm can}$, with
$h(P,M)=T(P^{\#},M)$. Both are weightwise perfect on normalized cover/simple
bases, where $P^{\#}=P$; they are not identified on arbitrary shifted first
arguments;

4. in branch (C0), and with the additional hypotheses of
`thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`
and `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`
(symmetric Cartan datum with $d_i=1$, characteristic zero, finite loopless
quiver with arbitrary edge multiplicities and
$Q_{ij}=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$), which the type-$A$
specialization of the regime satisfies, the transported normalized
$\#$self-dual indecomposable projectives correspond bijectively to the lower
global basis and the transported normalized $D_\psi$-self-dual simples to the
upper global basis; the transported simple and projective crystals are the
$B(\Lambda_0)$-crystals of
`thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`, so
each class carries its crystal label in $RP$.

In BOTH branches the normalized finite-module duality representatives and their
right crystal labels come from
`def-cyclotomic-klr-diagram-duality-and-graded-module-duals` and
`thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`,
independently of clause (4)'s characteristic-zero global-basis conclusion.

No based-quotient, quantum-star or cyclotomic categorification statement is
asserted beyond these transported clauses. Choice is inherited only through the
cited global-basis suppliers.

## Facts & Assumptions

**Given:** The nondegenerate level-one regime with its fixed admissible
normalising series, the blockwise graded isomorphisms $\rho_\alpha$, and the
standard homogeneous cyclotomic data on the KLR side.

[F1] The transport of the graded module category, its Grothendieck groups, its
Cartan maps, its forgetful maps, its graded Hom pairing and its diagram
dualities along a graded algebra isomorphism is the content of
[[lem-graded-algebra-isomorphism-transports-the-graded-module-category]].

[F2] The Hecke-side groups, Cartan map and pairing are the transported data of
[[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]] and
[[def-graded-cartan-pairing-between-projectives-and-modules]]; the Hecke-side
induction and restriction functors are those of
[[def-cyclotomic-klr-induction-and-restriction-functors]].

[F3] The type-$A$ specialization of the regime has $d_i=1$, the finite loopless
cycle quiver with the double edge only at $e=2$, and
$Q^A_{ij}=(-1)^{h}(u-v)^{2h}$ with $h=1$ on each edge
([[def-nondegenerate-root-of-unity-level-one-hecke-regime]]); the cyclotomic
quotient is the standard homogeneous one of
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]].

[F4] The blockwise isomorphism, the grading, the finite-dimensionality and
symmetry of blocks are
`thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism`,
`cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading` and
`thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric`; the
KLR-side identifications, the functor action, the global bases and the crystal
correspondence are
`thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module`,
`thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module`,
`thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero`,
`thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`,
`thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis` and
`thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`.

[C1] Choice is inherited exactly through the global-basis suppliers of [F4];
the transport itself introduces none
([[def-axiom-of-choice]], [F1]).

## Proof

**Proof technique:** direct.

1.1 **Transport of the projective identification.** By [F1] the blockwise graded isomorphisms $\rho_\alpha$ induce an $A$-linear isomorphism $K_0^{\mathrm{gr}}(R^\Lambda)\to K_0^{\mathrm{gr}}(H^\Lambda)$ which intertwines shifts, Cartan maps and forgetful maps, block by block and then on the restricted direct sums. Composing with the KLR-side isomorphism $\phi$ of [F4] gives $\phi^{\rm Hecke}$; the vacuum class is preserved because $\rho_\alpha$ is the identity on the underlying vector spaces and fixes the vacuum sector, and the divided powers are intertwined because the Hecke-side $E_i,F_i,K_i$ are defined to be the transported KLR functors [F1, F2, F4]. This proves (1). [F1, F2, F4]

1.2 **Transport of the module identification.** Applying the same transport to the exact functor on finite-dimensional graded modules gives an $A$-linear isomorphism $G_0^{\mathrm{gr}}(R^\Lambda)\to G_0^{\mathrm{gr}}(H^\Lambda)$ preserving internal shifts, composition multiplicities and the diagram dualities, by [F1]. Composing with $\Psi_{\rm can}$ of [F4] gives $\Psi_{\rm can}^{\rm Hecke}$ with the same restricted-weight-dual target, the same canonical module action transported through the functor, and normalized simple classes mapping to the form-dual projective basis; this proves (2). [F1, F2, F4]

1.3 **Functors and pairings.** The Hecke-side functors $E_i,F_i$ are by definition the images of the KLR functors under the blockwise equivalences, so the transported identifications intertwine them with the quantum action of [F4] [F1, F2]. The graded Hom pairing is identified by [F1], and the identity $h(P,M)=T(P^{\#},M)$ is the native comparison recorded in [F4] between the Hom pairing and the tensor pairing defining $\Psi_{\rm can}$; both are weightwise perfect on the normalized cover and simple bases because on those bases $P^{\#}=P$ and the duality fixing condition makes the two pairings evaluate to the same delta, while the first-bar rule on shifts is retained on arbitrary shifted first arguments rather than identified with the bilinear form [F1, F2, F4]. This proves (3). [F1, F2, F4]

1.4 **Clause (4) and the type-A hypothesis check.** By [F3] the type-$A$ specialization has $d_i=1$, the finite loopless cycle quiver and $Q^A_{ij}=(-1)^{h}(u-v)^{2h}$ with $h=1$, so it satisfies the stated symmetric-Cartan characteristic-zero parameters of the two global-basis theorems; transporting their conclusions along the blockwise equivalences identifies the normalized self-dual indecomposable projectives with the lower global basis and the normalized self-dual simples with the upper global basis [F1, F3, F4]. Since the transported functor preserves shifts and dualities, the crystals are the $B(\Lambda_0)$-crystals of [F4] and each class carries its label in the restricted set $RP$ [F3, F4]. [F1, F3, F4]

2.1 **Both branches and Choice.** In an arbitrary branch of the regime the normalized finite-module duality representatives and their right crystal labels exist by the duality and crystal suppliers of [F4] alone, so clauses (1)-(3) hold in both branches and clause (4) only adds the characteristic-zero global-basis correspondence [F4]. No new choice is made: [C1] is inherited through the global-basis suppliers, and all transport verifications are finite substitutions. [C1, F1, F4, given] ∎

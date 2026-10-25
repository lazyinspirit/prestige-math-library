---
id: thm-ariki-canonical-basis-theorem-in-characteristic-zero
kind: theorem
title: "Ariki's canonical basis theorem in characteristic zero"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 39
deps: [prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
       thm-graded-specht-classes-realize-standard-fock-vectors,
       lem-standard-fock-vectors-expand-in-the-upper-global-basis,
       def-graded-specht-module-by-homogeneous-standard-tableaux,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       def-upper-global-basis-by-the-contravariant-form,
       thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible,
       thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis,
       thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis,
       def-axiom-of-choice,
       def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       def-nondegenerate-root-of-unity-level-one-hecke-regime,
       lem-graded-algebra-isomorphism-transports-the-graded-module-category]
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
      locator: "Section 5.1-5.4, printed pp. 45-52: Theorems 5.1, 5.3 and 5.9, the canonical-basis transport; Section 3.8-3.10, printed pp. 21-25: dual-canonical, quasi-canonical and canonical bases. Complete passages read."
    - title: "Susumu Ariki, On the decomposition numbers of the Hecke algebra of G(m,1,n), J. Math. Kyoto Univ. 36 (1996) 789-808"
      url: "https://projecteuclid.org/journals/journal-of-mathematics-of-kyoto-university/volume-36/issue-4/On-the-decomposition-numbers-of-the-Hecke-algebra-of-Gm/10.1215/kjm/1250518452.pdf"
      locator: "Theorem 4.4 (printed pp. 806-807), read in the recovered full-text extraction of pp. 789-808; the theorem is independently carried by BK 2009 Theorems 5.1, 5.3, 5.9 and Kleshchev's survey, which were read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 9.1-9.5, printed pp. 39-46: Theorems 9.8-9.9 and Corollary 9.10; the graded canonical-basis and decomposition-number statements. Complete passages read."
verification:
  precheck: pass
---

## Statement

In branch (C0) of the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]], with the normalized
self-dual simples $D(\lambda)$ and their normalized projective covers
$Y(\lambda)$ labelled by the crystal $B(\Lambda_0)=RP$ as in
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]] (4):

1. the transported isomorphism
$\phi^{\rm Hecke}:K_0^{\rm gr}(H^{\Lambda})\to V_A(\Lambda_0)$ sends the class
of the normalized self-dual indecomposable projective $Y(\lambda)$ to the lower
global basis vector $G(\lambda)$ for every $\lambda\in RP$;

2. the transported identification
$\Psi_{\rm can}^{\rm Hecke}:G_0^{\rm gr}(H^{\Lambda})\to V_A(\Lambda_0)^\vee$
sends $[D(\lambda)]$ to the upper global basis vector $G^*(\lambda)$, form-dual
to $G(\lambda)$ under the highest-weight contravariant form;

3. equivalently the lower global basis is the canonical basis of the basic
module $V_A(\Lambda_0)$ and corresponds to projective indecomposables, while
the upper global basis is the dual-canonical basis and corresponds to simple
classes, and the labels are those of
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]] (4): the
crystal $B(\Lambda_0)=RP$, with a simple and its projective cover carrying the
same label. The passage from these crystal labels to the
cellular/Dipper--James parametrization of the simple modules is not asserted
here; it is established with the head classification later on this page;

4. specializing the grading $q=1$ via the forgetful maps $\zeta$ of
[[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]]
recovers Ariki's ungraded canonical-basis statement, and combined with the
graded decomposition theorem later on this page it gives his ungraded
decomposition-number theorem.

Choice is inherited only through the QG-8 global-basis suppliers; no choice is
introduced by the transport or by the label comparison.

## Facts & Assumptions

**Given:** Branch (C0) of the nondegenerate level-one regime, the normalized
self-dual simples and projective covers, and the transported identifications.

[F1] The QG-8 transport identifies the KLR-side canonical data with the
Hecke-side groups: clause (1) transports $\phi$ to $\phi^{\rm Hecke}$, clause
(2) transports $\Psi_{\rm can}$ to $\Psi_{\rm can}^{\rm Hecke}$, and clause (4)
identifies the transported normalized self-dual projectives with the lower
global basis, the transported normalized self-dual simples with the upper
global basis, and the transported crystals with the $B(\Lambda_0)$-crystals
labelled in $RP$ ([[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]).

[F2] The lower and upper global bases, their duality
$B(G(\lambda),G^*(\lambda'))=\delta_{\lambda\lambda'}$ under the contravariant
form, and their crystal compatibility are those of
[[def-lower-global-basis-of-a-quantum-highest-weight-module]],
[[def-upper-global-basis-by-the-contravariant-form]] and
[[thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]]; the KLR
side conclusions are
`thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`
and `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`.

[F3] The transport of the graded module category, its Grothendieck groups, its
Cartan and forgetful maps and its dualities along the blockwise graded
isomorphism is the content of
[[lem-graded-algebra-isomorphism-transports-the-graded-module-category]]; the
forgetful maps satisfy $\zeta(qm)=\zeta(m)$
([[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]]).

[F4] The Specht classes realize the standard Fock vectors
([[thm-graded-specht-classes-realize-standard-fock-vectors]]), with the
restricted coordinate functionals and the transition polynomials of
[[lem-standard-fock-vectors-expand-in-the-upper-global-basis]] and
[[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]].

[C1] Choice is inherited through the QG-8 global-basis suppliers
([[def-axiom-of-choice]],
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]).

## Proof

**Proof technique:** direct.

1.1 **Projectives to the lower basis (1).** By [F1] the transported isomorphism $\phi^{\rm Hecke}$ is the QG-8 transport of the KLR-side identification, under which the normalized self-dual indecomposable projectives correspond bijectively to the lower global basis; the transport preserves the classes of the underlying modules and internal shifts, so the class of $Y(\lambda)$ is sent to $G(\lambda)$ for every restricted label $\lambda$ [F1, F2]. [F1, F2]

1.2 **Simples to the upper basis (2).** The same clause identifies the transported normalized self-dual simples with the upper global basis, and the upper family is form-dual to the lower family under the contravariant form by [F2]; hence $\Psi_{\rm can}^{\rm Hecke}([D(\lambda)])=G^*(\lambda)$ with $B(G(\lambda),G^*(\lambda'))=\delta_{\lambda\lambda'}$ [F1, F2]. [F1, F2]

1.3 **Labels and non-assertion (3).** On the KLR side the crystals are constructed from the one-step socle and head operators and identified with $B(\Lambda_0)$; the transport preserves the crystal structure, so each transported class carries its intrinsic label in $RP$ and no permutation of labels is left open [F1]. The identification of these crystal labels with the cellular or Dipper--James head labels is deliberately not asserted here; only the transported identifications of clauses (1) and (2) are claimed [F1, F4]. [F1, F4]

1.4 **The ungraded specialization (4).** The forgetful maps satisfy $\zeta(qm)=\zeta(m)$ and specialize $q$ to $1$ [F3]; a graded composition series of a finite-dimensional graded module specializes to an ungraded composition series with the same multiplicities, and the transported identifications therefore specialize to the ungraded statement that the self-dual projective classes are the canonical basis and the simple classes the dual-canonical basis of the basic module, which is Ariki's ungraded canonical-basis statement [F1, F3]. Combining this specialization with the graded decomposition theorem of this page gives the ungraded decomposition-number statement; that combination is recorded as the pointer in clause (4) and is not used in the present proofs [F3, F4]. [F1, F3, F4]

2.1 **Choice.** The transport functor, the label comparison and the specialization are explicit finite constructions on finite-dimensional blocks; the only choice is inherited through the global-basis suppliers, as recorded in [C1]. [C1, F1, given] ∎


## Remarks

In characteristic-zero branch (C0), the two basis correspondences of clauses
(1) and (2) can be read together as follows. The labels
$\lambda,\mu\in RP=B(\Lambda_0)$ are crystal labels; the second row uses the
restricted integral form-dual, as in [F2]. The bottom equality records the
form-duality of the two target bases, not a map between the two rows.

```tikz
\begin{tikzpicture}
\node (P) at (0,0) {$\begin{array}{c}K_0^{\mathrm{gr}}(H^\Lambda)\\{}[Y(\lambda)]\end{array}$};
\node (L) at (6,0) {$\begin{array}{c}V_A(\Lambda_0)\\G(\lambda)\end{array}$};
\draw[->] (P) -- node[above] {$\phi^{\mathrm{Hecke}}$} (L);
\node (S) at (0,-1.8) {$\begin{array}{c}G_0^{\mathrm{gr}}(H^\Lambda)\\{}[D(\mu)]\end{array}$};
\node (U) at (6,-1.8) {$\begin{array}{c}V_A(\Lambda_0)^\vee\\G^*(\mu)\end{array}$};
\draw[->] (S) -- node[above] {$\Psi_{\mathrm{can}}^{\mathrm{Hecke}}$} (U);
\node at (3,-3) {$B(G(\lambda),G^*(\mu))=\delta_{\lambda\mu}$};
\end{tikzpicture}
```

Each row displays the image of the indicated class under its labelled map.
The correspondences and the pairing are proved in steps 1.1 and 1.2; the
proof is independent of this illustration.

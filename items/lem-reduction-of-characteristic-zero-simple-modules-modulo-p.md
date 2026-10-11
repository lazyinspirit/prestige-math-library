---
id: lem-reduction-of-characteristic-zero-simple-modules-modulo-p
kind: lemma
title: "Reduction of characteristic-zero simple modules modulo p"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 42
deps: [def-integral-form-of-the-cyclotomic-hecke-klr-block,
       thm-graded-specht-classes-realize-standard-fock-vectors,
       cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group,
       thm-graded-specht-module-has-homogeneous-tableau-basis,
       thm-ariki-canonical-basis-theorem-in-characteristic-zero,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       def-nondegenerate-root-of-unity-level-one-hecke-regime,
       prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
       lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels,
       thm-graded-specht-heads-classify-the-graded-simple-modules,
       lem-integer-cyclic-presentation-descends-the-simple-head-generator-line,
       lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator]
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
      locator: "Section 6, printed pp. 29-31, read in full: Theorems 6.1, 6.4 and 6.5 on the integral form, base change and the reduction modulo p of irreducible modules. Complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 5.1-5.7, printed pp. 45-57: Theorems 5.1-5.19; Section 3.8-3.10, printed pp. 21-25: canonical bases and the dual-canonical vectors. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 9.1-9.5, printed pp. 39-46: the graded canonical-basis and decomposition-number statements. Complete passage read."
verification:
  precheck: pass
---

## Statement

Let $K$ be a characteristic-zero field and $F$ a field of characteristic $p>0$,
both in the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]] with the same $e$
and with $\xi_K,\xi_F$ primitive $e$-th roots, and fix the integral form
$H^\Lambda_\alpha(\mathbb Z)$ of
[[def-integral-form-of-the-cyclotomic-hecke-klr-block]]. For
$\lambda\in RP_\alpha$ let $\widetilde D(\lambda)$ be the characteristic-zero
normalized simple and let $0\ne v_\lambda\in\widetilde D(\lambda)$ be the image
of the generating vector of the graded Specht module $S(\lambda)$. Then:

1. $L(\lambda):=H^\Lambda_\alpha(\mathbb Z)v_\lambda$ is a lattice in
$\widetilde D(\lambda)$, invariant under $H^\Lambda_\alpha(\mathbb Z)$, and its
$e(i)$-weight spaces are lattices in the weight spaces of
$\widetilde D(\lambda)$;

2. $J(\lambda):=F\otimes_{\mathbb Z}L(\lambda)$ is a well-defined graded
$H^\Lambda_\alpha(F)$-module with the same $q$-character as
$\widetilde D(\lambda)$, so it is nonzero and finite-dimensional, and its class
in $G_0^{\rm gr}(H^\Lambda_\alpha(F))$ is independent of the choice of the
lattice;

3. the transported identification of
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]] (2) over
$F$ satisfies $\Psi_{\rm can}^{\rm Hecke}([J(\lambda)])=D_\lambda$, the
dual-canonical basis vector; equivalently
$[J(\lambda)]=(\Psi_{\rm can}^{\rm Hecke})^{-1}(D_\lambda)$.

Choice is inherited only through the transported global-basis and duality
suppliers.

## Facts & Assumptions

**Given:** The two fields $K$ and $F$ in the regime with the same $e$, the integral form $H^\Lambda_\alpha(\mathbb Z)$, and the characteristic-zero normalized simple $\widetilde D(\lambda)$ with its Specht generator image $v_\lambda$.

[F1] The integral form and its base-change isomorphisms $K\otimes H^\Lambda_\alpha(\mathbb Z)\cong H^\Lambda_\alpha(K)$ and $F\otimes H^\Lambda_\alpha(\mathbb Z)\cong H^\Lambda_\alpha(F)$ are those of [[def-integral-form-of-the-cyclotomic-hecke-klr-block]].

[F2] The rational Garnir annihilator line and the integer cyclic presentation descent are the two local helpers [[lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator]] and [[lem-integer-cyclic-presentation-descends-the-simple-head-generator-line]]; the homogeneous tableau basis is [[thm-graded-specht-module-has-homogeneous-tableau-basis]].

[F3] The extremal-word character detection and the injectivity of word characters on $G_0$ are the content of [[lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels]]; the finite-module duality is that of `def-cyclotomic-klr-diagram-duality-and-graded-module-duals`.

[F4] The restricted Specht classes form an $A$-basis of the upper dual and realize the standard Fock vectors ([[cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group]], [[thm-graded-specht-classes-realize-standard-fock-vectors]]); the transported identification over $F$ and the head/crystal labels are those of [[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]] and [[thm-graded-specht-heads-classify-the-graded-simple-modules]], with the characteristic-zero upper-basis theorem [[thm-ariki-canonical-basis-theorem-in-characteristic-zero]].

[F5] The graded Grothendieck groups and their shift-orbit bases are those of [[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]].

## Proof

**Proof technique:** direct.

1.1 **The lattice.** Apply the rational Garnir annihilator line of [F2] to the left Murphy cell module and its initial homogeneous cyclic generator: the finite integral row-permutation crossing matrices define a rational simultaneous Garnir-annihilator line, the strict crossing filtration proves standard spanning, and the homogeneous standard basis proves generator-preserving scalar-extension equality, factoring through the finite integer cyclotomic algebra by faithful rational scalar extension [F2]. Then the integer cyclic presentation descent of [F2] identifies the radical by the regular trace pairing, proves rational radical base change, and descends the specified simple head together with the initial-generator image; absolute Schur makes every quotient map to the fixed normalized head differ by a scalar, so the generator image lies on the proved rational line [F1, F2]. Hence $L(\lambda)=H^\Lambda_\alpha(\mathbb Z)v_\lambda$ is a finitely generated torsion-free $\mathbb Z$-module inside the rational simple, invariant under the integral form, and the $e(i)$-projections cut out lattices in the weight spaces [F1, F2]. [F1, F2]

1.2 **Base change and the q-character.** The integral orbit is finitely generated and torsion-free and spans the rational head by cyclicity, so it is a full lattice of rank $\dim_K\widetilde D(\lambda)$; word idempotents give graded direct summands whose ranks survive tensoring with $F$, so $J(\lambda)=F\otimes_{\mathbb Z}L(\lambda)$ is a finite-dimensional graded $H^\Lambda_\alpha(F)$-module with the same $q$-character as $\widetilde D(\lambda)$ and is nonzero [F1, F2]. Any other full homogeneous stable lattice has the same word-component ranks, and the extremal-word character lemma proves $G_0$ injectivity, so the class of the reduction is independent of the lattice [F3, F5]. [F1, F2, F3]

2.1 **The transported identification.** The restricted Specht classes are an $A$-basis of the upper dual and realize the standard Fock vectors in a field-independent way [F4]; expand both module classes in their restricted Specht bases. The corresponding Specht characters agree across fields by the homogeneous tableau formula [F2]. Character injectivity [F3] makes the expansion coefficients equal, since the restricted Specht characters are linearly independent over $A$. Their field-independent images [F4] therefore give equal images under $\Psi_{\rm can}^{\rm Hecke}$. Applying this to $J(\lambda)$ and the normalized characteristic-zero simple and invoking the characteristic-zero upper-basis theorem gives $\Psi_{\rm can}^{\rm Hecke}([J(\lambda)])=D_\lambda$ in the restricted integral weight-dual lattice $V_A(\Lambda_0)^\vee$, equivalently $[J(\lambda)]=(\Psi_{\rm can}^{\rm Hecke})^{-1}(D_\lambda)$ [F4]. [F3, F4, step 1.2]

3.1 **Choice.** The lattice construction, the base change and the character comparison are finite-dimensional linear algebra over $\mathbb Z$, $K$ and $F$; the only choice is inherited through the transported global-basis and duality suppliers. [F4, given] ∎

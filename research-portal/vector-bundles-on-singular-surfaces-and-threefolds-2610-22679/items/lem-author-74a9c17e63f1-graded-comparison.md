---
id: lem-author-74a9c17e63f1-graded-comparison
kind: lemma
title: Actual cofiber triangles and source grading of the motivic tower
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - thm-author-4f716d60801a-derived-enhancement-input
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  thm-author-74a9c17e63f1-source-multiplicative-input: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
sources:
  references:
    - title: Jacob Lurie, Higher Algebra (September 18, 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 7.1.1.2, p. 1199; Proposition 7.1.1.4, p. 1200; Remark
        7.1.1.16, p. 1206; Remark 7.1.2.9, p. 1211; Theorem 7.1.2.13 and its
        proof, pp. 1212–1213 (printed pages).
      statement: For the discrete commutative ring spectrum HZ, its module
        infinity-category is canonically equivalent to the unbounded derived
        infinity-category of abelian groups. The forgetful functor to spectra is
        exact. The equivalence identifies homology with spectral homotopy; after
        cochain reindexing, pi_i(U C)=H^{-i}(C). Exactness supplies U(C[n])
        equivalent to (U C)[n].
      hypotheses: Theorem 7.1.2.13 has a commutative ring R; take R=Z. Use unbounded
        complexes and their quasi-isomorphism localization, in the fixed
        compatible universes and with Choice. Proposition 7.1.1.4 applies
        because HZ smash is exact on the supplied stable spectra category.
        Convert homological degree n to cochain degree -n. No connectivity or
        boundedness restriction on C.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the primary PDF extraction of the named definition,
        proposition, remarks, and the complete short proof of Theorem 7.1.2.13.
        Import the equivalence and module foundations; its cited recognition and
        model-category theorems were not reconstructed. Shift compatibility is
        the local application of exactness to the supplied cochain-cone
        suspension and spectral suspension. No comparison with a particular
        sequential Eilenberg–Mac Lane model is asserted. Current maintenance
        read the assigned body and current supplier interfaces; no fresh
        primary-source or page-image reading, independent review or acceptance
        is claimed."
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1(1), p. 3; Section 2.1, p. 11; Definition 4.9 and Theorem
        4.10(1)–(2), pp. 21–22; Definition 4.23 and Theorem 4.24(1)–(2), pp.
        27–28 (printed pages).
      statement: The motivic complex is defined from the actual graded spectrum
        shifted by -2r; the resulting objects are D(Z)-valued, naturally in the
        qcqs prime-field scheme, and vanish for negative weights. Thus the
        comparison uses the underlying spectrum of that very derived object
        under the standard derived-to-HZ-module realization, rather than an
        equivalence selected from matching homotopy groups.
      hypotheses: Qcqs Q-schemes or F_p-schemes for a prime p; integer weights, with
        negative weights zero. Both local functors are the specified prime-field
        restrictions to k-schemes. No finite valuative dimension assumption is
        used for this graded comparison.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the primary versioned PDF extraction at Theorem 1.1(1),
        Section 2.1, the two definitions and the listed theorem clauses. The
        definitions specify the actual shifted graded spectra and the theorem
        clauses specify the derived objects and zero convention. Their trace
        constructions and descent proofs remain imported. No fresh page-image
        reading or convergence-proof reconstruction is claimed. Reference 0
        makes the underlying-spectrum interpretation explicit; the restriction
        and cofiber application below are local. Current maintenance read the
        assigned body and current supplier interfaces; no fresh primary-source
        or page-image reading, independent review or acceptance is claimed."
formulation_deps:
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - thm-author-4f716d60801a-derived-enhancement-input
argument_deps:
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - def-motivic-cohomology
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - thm-author-4f716d60801a-derived-enhancement-input
---

## Statement
Assume the Axiom of Choice and the fixed compatible size conventions of the supplied constructions. Let $k$ be the standing field and let $X$ be a quasi-compact quasi-separated $k$-scheme. Write $M_r(X)=\mathbb Z(r)_{\mathrm{mot}}(X)$ for the supplied motivic complex, regarded in the unbounded derived enhancement $\mathcal D_\infty(\mathbb Z)$, whose homotopy category is $D(\mathbb Z)$. For $r<0$ set $M_r(X)=0$.

For a derived complex $C$, let $\mathcal U C$ be its spectral realization: apply the canonical equivalence $\mathcal D_\infty(\mathbb Z)\simeq\operatorname{Mod}_{H\mathbb Z}$ and then forget the module action. Here $H\mathbb Z$ is the discrete commutative ring spectrum associated to $\mathbb Z$, with $\pi_0=\mathbb Z$ and other homotopy groups zero, and its module spectra are spectra with a coherent unital associative $H\mathbb Z$-action. The cochain shift is $C[n]^q=C^{q+n}$ with differential $(-1)^n d_C^{q+n}$; spectral shifts denote integer suspension. The realization is exact and supplies a natural equivalence $\mathcal U(C[n])\simeq(\mathcal U C)[n]$.

For every $r\geq0$, the actual natural maps of the supplied tower give a cofiber triangle of spectra
$$F^{r+1}_{\mathrm{mot}}K(X)\longrightarrow F^r_{\mathrm{mot}}K(X)\longrightarrow(\mathcal U M_r(X))[2r].$$
The last arrow is the actual quotient map to $\operatorname{gr}^rF_{\mathrm{mot}}K(X)=\operatorname{cofib}(F^{r+1}_{\mathrm{mot}}K(X)\to F^r_{\mathrm{mot}}K(X))$ followed by the source equivalence $\gamma_r$. Thus the usual notation $\mathbb Z(r)_{\mathrm{mot}}(X)[2r]$ in this spectral triangle means $(\mathcal U M_r(X))[2r]$, equivalently $\mathcal U(M_r(X)[2r])$. These are maps of the actual functor diagrams. The zero extension of $M_r$ also identifies all negative graded terms, including $r=-1$.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed compatible size conventions are those of the supplied filtration, stable spectra and unbounded derived enhancement. They discharge the realization hypotheses at the first application below; existence of the stipulated universes is a separate size assumption. [[math:def-axiom-of-choice]] [[def-motivic-filtration]] [[def-stable-spectra-interface]] [[thm-author-4f716d60801a-derived-enhancement-input]]

**Given:** These assumptions, the completed motivic tower on qcqs $k$-schemes with its constant nonpositive extension, and the coherent motivic complex functor restricted from the same prime field.

**Goal:** Specify the actual quotient maps, the typed spectral target and the source comparison.

[F1] [[def-motivic-filtration]] specifies the source tower by prime-field restriction and its constant nonpositive stages. [[def-motivic-cohomology]] specifies the same prime-field motivic complexes. [[thm-author-4f716d60801a-derived-enhancement-input]], specialized to $\mathbb Z$-modules, supplies their unbounded derived enhancement, its ordinary derived homotopy category, and its cochain suspension convention.

[F2] [[thm-author-74a9c17e63f1-source-multiplicative-input]] supplies the actual natural comparison $\gamma_r$ for those very objects and the zero convention for negative weights. Its spectral target is interpreted by [F4]–[F5].

[F3] [[def-decreasing-filtered-spectrum]] defines $\operatorname{gr}^r$ as the cofiber of the transition $F^{r+1}\to F^r$. [[def-stable-spectra-interface]] defines this cofiber as the pushout along the map to zero and supplies its exact triangle, suspension and coherent diagram conventions.

[F4] Reference 0 supplies the canonical equivalence with $H\mathbb Z$-modules and the exact forgetful functor defining $\mathcal U$. Consequently it realizes quasi-isomorphism classes and coherent maps, with $\pi_i(\mathcal U C)=H^{-i}(C)$. Its exactness identifies cochain suspension with spectral suspension, naturally for every integer shift.

[F5] Reference 1 identifies the underlying spectrum of $M_r$ with the actual shifted graded spectrum: $\mathcal U M_r\simeq(\operatorname{gr}^rF_{\mathrm{mot}}K)[-2r]$. This is the defining source comparison in [F2], using the derived realization of [F4]. It is compatible with restriction to $k$-schemes and is zero in negative weights.

## External input
Reference 0 imports the derived-to-module equivalence, module-spectrum terminology, homotopy/cohomology identification and exactness of the forgetful functor under its recorded hypotheses. Iterating the cochain suspension supplied by [F1] and the spectral suspension supplied by [F3] gives the stated shift compatibility. These established categorical inputs are not reconstructed here.

Reference 1 imports the identification of the source motivic complex with the actual shifted graded spectrum, including its derived interpretation and negative-weight vanishing. Both source diagrams are the same restrictions as [F1]. This input supplies the compatibility of $\gamma_r$ with $\mathcal U$; matching homotopy groups alone would not supply such a map or equivalence. The cofiber and restriction argument below is local.

## Proof
**Given:** [A1], the tower and complex functors of [F1], and an integer $r$.

1.1 Under [A1], apply [F1]–[F5]. By [F3], form $Q_r=\operatorname{cofib}(F^{r+1}_{\mathrm{mot}}K\to F^r_{\mathrm{mot}}K)=\operatorname{gr}^rF_{\mathrm{mot}}K$ and its canonical quotient map. These are coherent functor diagrams: evaluate each defining pushout at $X$ to obtain the cofiber there. For $r\geq0$, [F5] and the shift compatibility of [F4] identify the actual source equivalence of [F2] as $\gamma_r:Q_r\simeq(\mathcal U M_r)[2r]$. Compose the quotient with this equivalence; replacing the cofiber term by an equivalent spectrum gives the displayed triangle. The stages, quotient and comparison are the supplied source diagrams restricted as in [F1], so the resulting triangle is natural in $X$. For the shift comparison, exactness of $\mathcal U$ preserves zero and the suspension pushout $0\sqcup_C0$ of [F1] and [F3], giving $\mathcal U(C[1])\simeq(\mathcal U C)[1]$; iteration and inverse suspension give all integer shifts. This identifies $\mathcal U(M_r[2r])$ with $(\mathcal U M_r)[2r]$ and fixes the shorthand in the statement. [A1, F1, F2, F3, F4, F5, construct]

2.1 For $r<0$, both $r$ and $r+1$ are nonpositive, including $r=-1$. By [F1] their transition is an equivalence in the constant extension. Its cofiber is zero by the pushout definition in [F3]. By [F4] realization preserves zero, so this agrees with the explicit zero extension of $M_r$ and with the source vanishing of [F2] and [F5]. Thus the negative graded terms are also identified. In subsequent full-plane formulas a negative-weight motivic complex denotes this zero extension; no previously defined negative-weight cohomology is assumed. [F1, F2, F3, F4, F5, step 1.1] ∎

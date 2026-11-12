---
id: thm-critical-rank-cancellation
kind: theorem
title: Critical-rank cancellation used in the article
status: published
domain: mathematics
deps:
  - def-vector-bundle-classes
  - lem-k-zero-stable-equivalence
  - lem-author-7dc5154c7a6f-cancellation-interface
  - thm-author-7dc5154c7a6f-suslin-module-input
  - math:def-axiom-of-choice
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-affine-scheme
  - math:def-affine-scheme-spectrum
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-algebraically-closed-field
  - math:def-grothendieck-universe-closure-convention
  - math:def-krull-dimension-of-a-ring
  - math:def-dimension-noetherian-topological-space
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:thm-irreducible-closed-subsets-and-prime-ideals
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  lem-k-zero-stable-equivalence: mathematical-premise
  lem-author-7dc5154c7a6f-cancellation-interface: mathematical-premise
  thm-author-7dc5154c7a6f-suslin-module-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated: mathematical-premise
  math:cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:thm-irreducible-closed-subsets-and-prime-ideals: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 2, introduction after Theorem B; p. 12, opening of the proof of
        Theorem A; p. 17, opening of the proof of Theorem B
      statement: The introduction invokes Suslin cancellation to reduce critical-rank
        classification to K_0. Theorem A uses that rank-two bundles have equal
        K_0 classes exactly when they are isomorphic; Theorem B refers back to
        that injectivity argument.
      hypotheses: Theorem A concerns normal affine surfaces and Theorem B normal
        affine threefolds over an algebraically closed field, with the article
        finite-type conventions. The broader affine cancellation assertion here
        uses the separate Keshari/Suslin supplier and the local spectral K-zero
        application interface.
      reading_limits: Read these three passages in the frozen extracted article text
        during this repair. No visual PDF inspection or original-author defect
        finding is claimed. The article supplies the uses and special cases, not
        a proof of the broader cancellation theorem.
    - title: Manoj Kumar Keshari, Cancellation problem for projective modules over
        affine algebras
      url: https://arxiv.org/pdf/0708.2961v1
      locator: "Printed p. 1, Introduction: opening conventions, definition of
        cancellative, and Theorem 1.1(i)"
      statement: "Over a finite-type affine algebra A of dimension d over an
        algebraically closed field, every finite projective A-module of constant
        rank at least d is cancellative: a common finite free stabilization can
        be removed."
      hypotheses: A commutative unital affine algebra over an algebraically closed
        field of arbitrary characteristic, finite Krull dimension d; finitely
        generated projective modules of constant rank r >= d. No smoothness,
        normality, reducedness or invertibility of d! is assumed in Theorem
        1.1(i).
      reading_limits: Read the web-extracted arXiv v1 PDF text of printed p. 1, the
        opening Noetherian/finitely-generated conventions, cancellation
        definition, and Theorem 1.1(i), during this repair. No visual PDF
        inspection is claimed. Suslin 1977 and Keshari later proofs were not
        read or reconstructed. Cancellation is supplied by the declared imported
        theorem; the argument here checks its application.
dependency_level: 16
formulation_deps:
  - def-vector-bundle-classes
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-affine-scheme-spectrum
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-algebraically-closed-field
  - math:def-grothendieck-universe-closure-convention
  - math:def-krull-dimension-of-a-ring
  - math:def-dimension-noetherian-topological-space
argument_deps:
  - def-vector-bundle-classes
  - lem-k-zero-stable-equivalence
  - lem-author-7dc5154c7a6f-cancellation-interface
  - thm-author-7dc5154c7a6f-suslin-module-input
  - math:def-axiom-of-choice
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-affine-scheme
  - math:def-affine-scheme-spectrum
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-algebraically-closed-field
  - math:def-grothendieck-universe-closure-convention
  - math:def-krull-dimension-of-a-ring
  - math:def-dimension-noetherian-topological-space
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:thm-irreducible-closed-subsets-and-prime-ideals
---

## Statement
Assume AC and the universes of the article\'s K-theory construction. Let $k$ be an algebraically closed field of arbitrary characteristic and $X=\operatorname{Spec}A$ a nonempty affine finite-type $k$-scheme of dimension $d$. For any two vector bundles $E,F$ of the same constant rank $r\geq d$, $E\cong F$ if and only if $[E]=[F]$ in the article\'s perfect spectral $K_0(X)$. In particular this applies to rank $d$ on every normal affine surface or threefold in the article. Here $[E]$ is the perfect-K-theory object class, and the affine comparison identifies it with the vector-bundle Grothendieck class; no coherent-sheaf G-zero identification is used.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[A1] AC is assumed for the affine coordinate-ring supplier, the affine bundle and K-zero comparisons, and the prime/irreducible-closed correspondence used below. Suitable universes satisfying the supplied closure convention and the size bounds of the K-theory suppliers are assumed separately; their existence is not deduced from AC. [[math:def-axiom-of-choice]], [[math:def-grothendieck-universe-closure-convention]]

[F1] The precise module cancellation input applies over a nonzero finite-type algebra of finite Krull dimension over an algebraically closed field, in every characteristic, to constant ranks at least that dimension. It defines finite projective modules and cancellativity in the common finite-free-stabilization sense. [[thm-author-7dc5154c7a6f-suslin-module-input]]

[F2] The local application lemma proves the perfect spectral K-zero/isomorphism equivalence on a noetherian affine scheme whenever the corresponding constant-rank finite projective modules are cancellative. It also checks the quasi-compact and quasi-separated hypotheses for the class convention. [[lem-author-7dc5154c7a6f-cancellation-interface]]

[F3] A vector bundle is a finite locally free structure-sheaf module, of constant rank $r$ when locally isomorphic to $\mathcal O_X^r$; its isomorphisms are invertible module-sheaf morphisms. The affine perfect/bundle comparison and stable-equivalence supplier fix the actual class map: $[E]$ is the object class in $K_0(X)=\pi_0\mathbb K(\operatorname{Perf}(X))$, identified with the bundle Grothendieck class on affine schemes, and equality of bundle Grothendieck classes on noetherian affine schemes is equivalent to a common finite free stabilization. [[def-vector-bundle-classes]], [[lem-k-zero-stable-equivalence]]

[F4] An affine scheme has the form $\operatorname{Spec}A$ for a commutative unital coordinate ring $A$, canonically recovered as global sections. Its points are the prime ideals of $A$; the zero ring has empty spectrum. Finite type refers to the structure morphism to $\operatorname{Spec}k$. Under AC, an affine finite-type $k$-scheme has a finitely generated coordinate $k$-algebra. [[math:def-affine-scheme]], [[math:def-affine-scheme-spectrum]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]]

[F5] A field is a principal ideal domain: its only ideals are $(0)$ and $(1)$. Every commutative finite-type algebra over a principal ideal domain is noetherian. A scheme with a finite affine open cover by spectra of noetherian rings is noetherian, so a single such affine chart suffices. [[math:cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian]], [[math:def-locally-noetherian-and-noetherian-scheme]]

[F6] The dimension of a nonempty noetherian scheme is the supremum of lengths of strict chains of nonempty irreducible closed subsets of its underlying space; the ring dimension is the supremum of lengths of strict prime-ideal chains. A noetherian ring has noetherian spectrum. Under AC, nonempty irreducible closed subsets of a spectrum correspond to prime ideals by $\mathfrak p\mapsto V(\mathfrak p)$, with unique radical defining ideal. [[math:def-dimension-noetherian-topological-space]], [[math:def-krull-dimension-of-a-ring]], [[math:thm-noetherian-ring-has-noetherian-spectrum]], [[math:thm-irreducible-closed-subsets-and-prime-ideals]]

[F7] Algebraically closed means that every nonconstant one-variable polynomial over the field has a root in that field. The normal surface and threefold settings mentioned in the Statement are the article special cases of dimension two and three; normality is not used as an extra premise of the cancellation argument. [[math:def-algebraically-closed-field]]

## Proof

1.1 By [F4] under [A1], $A$ is a finite-type $k$-algebra, and it is nonzero because $X$ is nonempty. By [F5], $A$ is noetherian and the single affine chart $X=\operatorname{Spec}A$ makes $X$ noetherian. To compare dimensions in [F6], if $\mathfrak p\subsetneq\mathfrak q$, then $V(\mathfrak q)\subseteq V(\mathfrak p)$ and the inclusion is strict by uniqueness of the radical defining ideal; conversely inclusion of the closed sets reverses inclusion of their defining ideals. Thus the prime/irreducible-closed correspondence reverses strict chains and preserves their lengths, so $\dim A=\dim X=d$. Since the finite bundle rank satisfies $r\geq d$ and $X$ is nonempty, $d$ is finite. Therefore [F1], with the field convention [F7], makes every constant-rank-$r$ finite projective $A$-module cancellative. All hypotheses of [F2] are now satisfied, so it gives $E\cong F$ exactly when $[E]=[F]$, with the actual class map in [F3]. [A1, F1, F2, F3, F4, F5, F6, F7, given]

2.1 A normal affine surface or threefold in the article is an affine finite-type scheme over the same algebraically closed field, and its critical rank is respectively $d=2$ or $d=3$. Substitution $r=d$ in step 1.1 yields exactly the original assertion. The reverse implication is included by the same equivalence: isomorphic bundles have equal object classes under [F3]. No normality assumption was needed for the broader equivalence. [F3, F7, step 1.1] ∎

## Source notes
The original article invokes Sus77 in the introduction on p. 2 and the proof of Theorem A on p. 12; Theorem B injectivity on p. 17 refers back to that proof (https://arxiv.org/abs/2610.22679v1). Its rank-d normal settings are preserved as special cases of the broader precise sourced theorem. Keshari, printed p. 1, opening conventions, cancellation definition and Theorem 1.1(i), supplies the cited formulation behind [F1] (https://arxiv.org/pdf/0708.2961v1). The proof here is a local application of the imported cancellation theorem through [F2]; no reconstruction of Suslin’s proof or proof acceptance is asserted.

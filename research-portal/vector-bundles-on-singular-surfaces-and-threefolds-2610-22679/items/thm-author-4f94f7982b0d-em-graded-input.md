---
id: thm-author-4f94f7982b0d-em-graded-input
kind: theorem
title: External actual EM graded algebra, Picard class and complex PBF
status: draft
domain: mathematics
deps:
  - def-motivic-cohomology
  - prop-motivic-projective-bundle-formula
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  prop-motivic-projective-bundle-formula: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes, arXiv
        v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: §2.2 pp11–12; Definitions4.9/4.23; Lemma5.1/Definition5.2 pp33–34;
        actual map(5.2) and Theorem5.3; Theorem5.24 pp43–44
      hypotheses: Any qcqs scheme over a prime field F=Q or F_p; all nonnegative
        weights, negative complexes explicitly zero. Restrict along any field
        extension and then to smooth schemes over any qcqs classical S over that
        field.
      statement: The actual shifted graded complexes A_n=Z(n)_mot[2n] carry natural
        coherent unital commutative graded products. The pointed Picard
        first-Chern map and its multiplication give the displayed P¹/PBF
        equivalences, on the same complexes, not just group isomorphisms.
      reading_limits: Read these exact construction/convention statements, full
        Lemma5.1 proof and Definition5.2, actual map(5.2), full Theorem5.24
        proof and negative-weight convention. Imported the earlier deep
        trace/syntomic P¹ foundations; not reconstructed.
dependency_level: 14
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. On qcqs schemes over a prime field, $A_n=\mathbb Z(n)_{\rm mot}[2n]$ forms a natural unital commutative graded algebra in spectra. Put $A_n=0$ for $n<0$. There is the actual natural complex map $R\Gamma_{\rm Nis}(\mathbb G_m)[-1]\to\mathbb Z(1)_{\rm mot}$ of Definition5.2; after shifting by2 and taking Ω∞ this is the pointed Picard class. Its restriction to $(\mathbb P^1,\infty)$ is $b=c_1(\mathcal O(1))$ with the trivial-line nullhomotopy at infinity. Multiplication by its powers and pullback give the actual complex equivalences
$$\bigoplus_{m=0}^{d}\mathbb Z(j-m)_{\rm mot}(Y)[-2m]\xrightarrow{\sum c_1(\mathcal O(1))^m\pi^*}\mathbb Z(j)_{\rm mot}(\mathbb P^d_Y).$$
These hold for $j\geq0$, and also for $j<0$ with all terms zero. The general bundle version holds with the stated line/quotient convention conversion by dual bundle. All structures restrict naturally to smooth schemes over any qcqs $S/k$.

## Facts & Assumptions
**Given:** The qcqs prime-field schemes, weights and supplied local constructions in the statement, with the stated Choice and size premises.

[A1] The assumed [[math:def-axiom-of-choice]] and fixed size bounds discharge the premise of [[prop-motivic-projective-bundle-formula]] when using its supplied projective-bundle contract and quotient-convention conversion. [[def-motivic-cohomology]] fixes the actual coefficient functor. This records the chosen local supplier contract; it makes no foundational necessity claim about the published EM constructions.

## External input
Import the stated EM constructions and actual maps, with the completed projective-bundle supplier’s quotient convention. No A¹-invariance is imported. The Picard map is a map of complexes and hence supplies its coherent pointed class, rather than a choice made from an identification of groups.

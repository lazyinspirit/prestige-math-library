---
id: lem-metastable-cohomology-of-eilenberg-maclane-spaces
kind: lemma
title: "Metastable cohomology of mod-two Eilenberg–Mac Lane spaces"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - thm-steenrod-squares-are-well-defined-and-natural
  - def-axiom-of-choice
  - thm-admissible-composites-present-the-mod-two-square-algebra
  - lem-universal-mod-two-class-detects-admissible-composites-in-the-strict-range
  - prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "Corollary 1.38 and proof, printed pp. 58–59: evaluation in the metastable range; this record retains the strict inequality i<q."
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 8, printed p. 15: mod-two metastable evaluation. Its integral/mod-two identification is not used."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For $q\ge1$ and $0\le i<q$, evaluation on the normalized mod-two fundamental class is an isomorphism

$$\eta_{q,i}:\mathcal A^i\xrightarrow{\cong} \widetilde H^{q+i}(K(\mathbb F_2,q);\mathbb F_2),\qquad a\longmapsto a(\iota_q).$$

For a based classifying map $f$ of $z$, it satisfies $f^*\eta_{q,i}(a)=a(z)$. No integral identification and no degree-$2q$ endpoint claim is included.

## Facts & Assumptions

**Given:** AC; $q\ge1$; a based CW model $K_q=K(\mathbb F_2,q)$ with normalized fundamental class $\iota_q$; the admissible basis of $\mathcal A^i$; and the polynomial presentation of $H^*(K_q;\mathbb F_2)$.

[F1] The admissible composites form a basis of the square algebra in each degree ([[thm-admissible-composites-present-the-mod-two-square-algebra]]), evaluation on $\iota_q$ is injective in the strict range $i<q$ ([[lem-universal-mod-two-class-detects-admissible-composites-in-the-strict-range]]), and the polynomial presentation lists the cohomology generators with their excess bounds ([[prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces]]).

[F2] Cohomology operations are universal classes on Eilenberg–Mac Lane spaces, and representability with naturality gives the classifying-map evaluation identity ([[cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces]], [[thm-eilenberg-maclane-spaces-represent-singular-cohomology]], [[thm-steenrod-squares-are-well-defined-and-natural]]).

[F3] AC is used for the model and basis choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The admissible-basis theorem gives the admissible basis of $\mathcal A^i$, independently of this cohomology calculation. The polynomial presentation gives of $H^*(K_q)$. Every positive-degree polynomial generator has degree at least $q$, so a product of two such generators has degree at least $2q$. Consequently the basis of cohomology in degree $q+i<2q$ consists exactly of the individual generators $Sq^I\iota_q$ with $|I|=i$ and $e(I)<q$. Every admissible sequence of degree $i$ has $e(I)\le|I|=i<q$, so these are indexed by all the admissible basis elements of $\mathcal A^i$. Evaluation takes that basis bijectively to this basis and is therefore both surjective and injective. [given, F1]

2.1 Alternatively The strict-range detection lemma supplies injectivity directly; the present polynomial degree argument closes its previously missing surjectivity. Naturality and the published operation-evaluation corollary give the asserted classifying-map evaluation identity, without minting that identity again. Reduced and ordinary cohomology agree in these positive degrees by the published representability interface. For $q=1$ the strict range contains only $i=0$, where both bases contain the fundamental class/identity. [step 1.1, F1, F2, F3] ∎

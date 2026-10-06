---
id: rem-the-kernel-map-need-not-be-injective-outside-type-i
kind: remark
title: "Recorded: the kernel map need not be injective outside the type I regime"
proved_here: false
deps: []
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 7, §7.F, Corollary 7.F.4; Chapter 8, §8.B, Remark 8.B.6(2); Chapter 9, §9.G, Examples 9.G.1–9.G.3"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Remark F.4.5 (the map Φ is not injective in general, compare Dixmier §18)"
external_dependency:
  source_url: "https://arxiv.org/pdf/1912.07262"
  exact_statement: "Bekka–de la Harpe, Corollary 7.F.4: let G be a second-countable locally compact group and π a factor representation of G; if π is not of type I, then there exist uncountably many pairwise inequivalent irreducible unitary representations of G weakly equivalent to π. Remark 8.B.6(2): the kernel map from the unitary dual to the primitive ideal space is injective in important cases, but not in general."
  local_proof_attempt: "No local proof is attempted. The exact non-type-I factor statement uses the direct-integral and factor theory of Chapter 7, which is owned by the planned page direct-integral-decomposition-and-type-i-groups (not selected in this run). The kernel-map theorem proved on this page is stated on weak-equivalence classes and requires no type-I hypothesis, so it does not consume this remark."
  necessity: "The page's design promises the exact caveat that the unitary dual need not be a parameter space in the type-I sense; recording it with its exact source keeps the promised warning without importing unproved type-I theory, and prevents a later page from treating the kernel map as injective."
status: draft
origin: pipeline
---
## Statement

For a second-countable locally compact group $G$ that is not of type I, the
kernel map from the unitary dual of $G$ to the primitive ideal space of the
full group C\*-algebra, $[\pi]\mapsto\ker\pi$, can have uncountable fibres and
need not be injective. More precisely, if $\rho$ is a factor representation of
$G$ that is not of type I, then there are uncountably many pairwise
inequivalent irreducible unitary representations of $G$ that are weakly
equivalent to $\rho$; their C\*-kernels coincide. This does not assert that
every fibre of the kernel map of a non-type-I group is uncountable.

## Remarks

- **Recorded, not proved here.** This statement is quoted from the sources
  listed above; the library does not prove it on this page. The direct-integral
  and factor machinery behind Corollary 7.F.4 is owned by the planned page
  `direct-integral-decomposition-and-type-i-groups`, outside this pair.
- **Scope of the caveat.** The record concerns a non-type-I *factor*
  representation, not every irreducible representation and not every fibre of
  the kernel map of a non-type-I group.
- **Relation to this page.** The homeomorphism proved on this page is asserted
  on weak-equivalence classes and needs no type-I hypothesis; no item of this
  page consumes this remark as a proof input.

---
title: Possible chaos with nonidentical intrinsic frequencies
status: published
research_item: rem-expander-sync-heterogeneous-chaos
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 2, Section 1, paragraph beginning Recent work; PDF p. 41,
        reference [35]
      statement: The article states that if oscillator frequencies are non-identical,
        more complicated long-term behavior such as chaos can occur, citing
        Maistrenko, Popovych and Tass, Chaotic attractor in the Kuramoto model
        (2005), as [35]. This record attributes that assertion; it does not
        import a proved chaos-existence theorem.
      hypotheses: The graph Kuramoto equation (1.1), finite graph with symmetric
        adjacency matrix and intrinsic frequencies not all identical. The quoted
        sentence asserts possibility, not chaotic behavior for every
        heterogeneous frequency vector or graph.
      reading_limits: The complete paragraph and surrounding equation (1.1) were
        inspected in extracted text and the rendered original PDF page 2; the
        reference [35] entry was inspected on PDF page 41. No existence proof is
        supplied at this passage.
    - title: Chaotic Attractor in the Kuramoto Model — Maistrenko, Popovych and Tass
        (2005)
      url: https://doi.org/10.1142/S0218127405014155
      locator: Publisher-indexed abstract; bibliographic identity confirmed in JuSER
        record 14750
      statement: The abstract reports a chaotic attractor in a four-dimensional
        Kuramoto model and describes its emergence through a torus-destruction
        scenario. This is an attribution of what the abstract reports, not an
        imported rigorous existence theorem.
      hypotheses: The four-dimensional globally coupled phase-oscillator Kuramoto
        model studied by the cited authors; exact parameters and full-paper
        proof hypotheses are not specified in the inspected abstract.
      reading_limits: "Only the publisher-indexed abstract and JuSER bibliographic
        record were inspected. The full IJBC paper was not read: publisher
        DOI/PDF/ePDF retrieval attempts returned HTTP 403. Its exact parameters,
        diagnostics and any rigorous proof were not verified. The distinct PRE
        paper is not substituted for this unread full text."
---

PDF p. 2: ` Section 1, homogeneous versus heterogeneous dynamics `

## Prerequisites

- [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)
- [rem-expander-prereq-heterogeneous-chaos-report](item-rem-expander-prereq-heterogeneous-chaos-report)
- [` Chaotic Attractor in the Kuramoto Model — Maistrenko, Popovych and Tass (2005) · Publisher-indexed abstract; bibliographic identity confirmed in JuSER record 14750 `](https://doi.org/10.1142/S0218127405014155)


## Statement

For the [graph Kuramoto system](item-def-expander-sync-kuramoto-system), the article makes the following background assertion, retained verbatim:

> In contrast, if the oscillators’ frequencies are non-identical, more complicated long-term behavior such as chaos can occur [35].

Here non-identical means that the intrinsic frequencies are not all equal. The sentence asserts the possibility of chaos for heterogeneous systems; it does not assert that every heterogeneous system is chaotic. The article's reference [35] is Maistrenko, Popovych and Tass, *Chaotic Attractor in the Kuramoto Model*, International Journal of Bifurcation and Chaos 15 (2005), 3457–3466.

## Evidence status

The [independent heterogeneous-model chaos report](item-rem-expander-prereq-heterogeneous-chaos-report) records the actually inspected evidence from the distinct paper *Phase chaos in coupled oscillators* (Popovych, Maistrenko and Tass, Physical Review E 71 (2005), 065201), equation (1), the four-oscillator discussion and Figure 1. Its model has four globally coupled phases, intrinsic frequencies $-1,-1/3,1/3,1$, and coupling coefficient $K/4$. Its authors plot a positive maximal Lyapunov exponent approximately for $0.94<K<1.22$ and display intersections of trajectories with a phase-difference section. They interpret these numerical diagnostics as a chaotic attractor, emerging through torus destruction. The linked report states the model, terminology and numerical reading limits. The computation was not reproduced here.

The inspected abstract of the exact cited paper [35] separately reports a chaotic attractor and a torus-destruction transition. Its full text was not read, so the numerical parameters and diagnostics from the PRE paper are not attributed to [35].

The article's original possibility assertion remains the claim under discussion. A rigorous applicable existence theorem for chaos in its finite heterogeneous pure-sine graph equation has not been established here. The numerical evidence above is not a proof of that assertion. The unresolved rigorous-existence question remains visible, without asserting that the article's claim is false or that no rigorous proof exists in the literature.

## Source notes

The original assertion is on PDF page 2, Section 1, in the complete paragraph beginning “Recent work”; its exact reference [35] is on PDF page 41. The original article is used for attribution, not as proof of itself. For [35], only its abstract and bibliographic record were inspected; the publisher's full-text retrieval was unavailable. The independent PRE numerical report has the reading limits recorded in the linked supplier. No physical measurement, rigorous attractor certificate or independently reproduced numerical result is claimed.

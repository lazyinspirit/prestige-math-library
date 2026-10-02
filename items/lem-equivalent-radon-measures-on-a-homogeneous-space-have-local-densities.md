---
id: lem-equivalent-radon-measures-on-a-homogeneous-space-have-local-densities
kind: lemma
title: "Local densities for equivalent Radon quotient measures"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-quasi-invariant-measure-on-a-homogeneous-space, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, lem-closed-subgroup-quotient-averaging-and-compact-lifts]
justified_by: []
aliases: []
proof_strategy: construction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. If $\mu$ and $\nu$ are equivalent Radon measures on $G/H$, then on each open $\sigma$-compact component of a disjoint cover of $G/H$ there is an almost-everywhere unique finite positive Radon–Nikodym density $w$ with $d\nu=w\,d\mu$. These densities define a unitary multiplication map between the completed locally measurable $L^2$ section spaces, component by component; no global Borel density is asserted on a non-$\sigma$-finite quotient.

## Facts & Assumptions

**Given:** LCH $G$, closed $H$, equivalent Radon measures $\mu,\nu$ on $X=G/H$, and AC.

[F1] AC supplies dependent and countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] The quotient $X$ is LCH ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F3] The open-subgroup-orbit decomposition of $X$ has open $\sigma$-compact components (the construction is given in the proof below).

[F4] On a $\sigma$-finite measure space, absolute continuity gives a measurable Radon–Nikodym density, unique almost everywhere; equivalent measures give a density positive and finite almost everywhere ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[A1] AC permits selecting a density representative on each component ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** construction.

1.1 Choose a relatively compact symmetric open identity neighborhood $U\subseteq G$ and set $L=\bigcup_{n\ge1}U^n$. Then $L$ is open and $\sigma$-compact. Its action on $X$ partitions $X$ into disjoint open orbits: the orbit through $xH$ is the image of $L$ under $\ell\mapsto\ell xH$, so it is $\sigma$-compact; it is LCH by [F2]. The compact closures of the sets $U^n$ give each orbit a countable compact cover. [F1, F2, F3, construct]

1.2 Restrict $\mu$ and $\nu$ to one orbit. Each restriction is $\sigma$-finite because it is Radon and the orbit is a countable union of compact sets of finite measure. Equivalence gives $\nu_i\ll\mu_i$ and $\mu_i\ll\nu_i$; [F4] supplies a measurable $w_i$ with $d\nu_i=w_i\,d\mu_i$, where $0<w_i<\infty$ almost everywhere. The RN uniqueness clause makes $w_i$ unique up to $\mu_i$-null sets. [F4, choose]

2.1 By [A1] choose one measurable version separately on each orbit; all density operations below are performed componentwise. On each component, multiplication by $w_i^{-1/2}$ maps $L^2(\mu_i;V)$ isometrically onto $L^2(\nu_i;V)$, since $\int\|w_i^{-1/2}F\|^2d\nu_i=\int\|F\|^2d\mu_i$; its inverse is multiplication by $w_i^{1/2}$. Taking the Hilbert direct sum of these componentwise unitaries gives the asserted map on the completed locally measurable section spaces. [A1, F4, step 1.2] ∎

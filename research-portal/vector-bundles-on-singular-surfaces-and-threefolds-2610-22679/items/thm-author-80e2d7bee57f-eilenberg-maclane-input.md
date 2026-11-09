---
id: thm-author-80e2d7bee57f-eilenberg-maclane-input
kind: theorem
title: Eilenberg–Mac Lane spectrum of a chain complex
status: published
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Stable model categories are categories of modules
      url: https://homepages.math.uic.edu/~bshipley/classTopFinal.pdf
      locator: Appendix B.1, pp. 38–40, especially construction preceding equation
        (B.1.9) and Theorem B.1.11
      statement: For an unbounded chain complex D of abelian groups, the Eilenberg–Mac
        Lane construction gives an underlying Omega spectrum whose stable
        homotopy groups are naturally H_n(D).
      hypotheses: Take the one-object ringoid with endomorphism ring Z; D is an
        unbounded chain complex of Z-modules.
      reading_limits: Read the construction, equation (B.1.9), and the statement and
        opening proof of Theorem B.1.11 in the linked text; the full proof and
        other model comparisons were not independently reconstructed.
dependency_level: 0
---

## Statement
For every unbounded chain complex $D$ of abelian groups, the cited Eilenberg–Mac Lane construction gives a functorial pointed simplicial Omega spectrum $HD$ and natural isomorphisms from its stable homotopy groups to $H_n(D)$ for all integers $n$. An Omega spectrum is a sequential spectrum whose adjoint structure maps are weak equivalences.

## External input
This is the one-object $\mathbb Z$ case of the cited construction and equation (B.1.9). The result and its construction are imported from the cited literature; no local reconstruction is claimed. The source defines the levels using the functor $W$ and explicitly states that the underlying spectra are Omega spectra. The model is a naive module spectrum, not the symmetric Eilenberg–Mac Lane functor distinguished in the source's Remark B.1.10.

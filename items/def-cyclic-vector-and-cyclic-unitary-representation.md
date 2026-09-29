---
id: def-cyclic-vector-and-cyclic-unitary-representation
kind: definition
title: Cyclic vector and cyclic unitary representation
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-strongly-continuous-unitary-representation]
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Definition C.4.8, Appendix C, printed p. 375"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bekka and de la Harpe, Unitary Representations of Groups, Duals, and Characters, Definition 1.B.4, §1.B"
      url: "https://arxiv.org/pdf/1912.07262"
---

## Definition

Let $\pi:G\to U(H)$ be a unitary representation. A vector $\xi\in H$ is
**cyclic** if
$$\overline{\operatorname{span}_{\mathbb C}\{\pi(g)\xi:g\in G\}}=H.$$
The representation is **cyclic** if it has a cyclic vector. The representation
on the zero Hilbert space is cyclic, with its unique vector $0$ as a cyclic
vector. In particular this convention permits the zero representation in the
unnormalized GNS statement; irreducibility remains defined only for nonzero
Hilbert spaces.

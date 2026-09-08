---
id: thm-inflation-restriction-transgression-five-term-sequence
kind: theorem
title: "The inflation–restriction–transgression five-term sequence"
status: draft
origin: pipeline
deps: [thm-degree-one-inflation-restriction-exact-sequence, lem-transgression-kernel-is-the-image-of-restriction, lem-kernel-of-degree-two-inflation-is-the-transgression-image, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21"
      url: "https://arxiv.org/pdf/1103.4052"
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Assume AC. For every group extension $1\to N\to G\to Q\to1$ and left G-module A, the sequence
$$0\longrightarrow H^1(Q,A^N)\xrightarrow{\operatorname{inf}}H^1(G,A)\xrightarrow{\operatorname{res}}H^1(N,A)^Q\xrightarrow{\operatorname{Tra}}H^2(Q,A^N)\xrightarrow{\operatorname{inf}}H^2(G,A)$$
is exact at every term having a following displayed arrow. Tra uses the normalizer quotient and its printed DHW cocycle sign; degree-two inflation includes coefficient inclusion. Cohomology is normalized bar cohomology, with its inherited derived interpretation. No exactness assertion at the last term is intended.

## Facts & Assumptions

**Given:** AC, the extension and module A.

[F1] Inflation is injective and its image is the kernel of restriction ([[thm-degree-one-inflation-restriction-exact-sequence]]).

[F2] The kernel of Tra is the restriction image ([[lem-transgression-kernel-is-the-image-of-restriction]]).

[F3] The kernel of degree-two inflation is the image of Tra ([[lem-kernel-of-degree-two-inflation-is-the-transgression-image]]).

## Proof

1.1 Use the degree-one inflation and restriction formulas with coefficients $A^N\subseteq A$. F1 gives injectivity of the first arrow and exactness at $H^1(G,A)$. Its codomain for restriction is precisely $H^1(N,A)^Q$, the domain of Tra in F2. [F1, F2, given]

2.1 F2 gives exactness at $H^1(N,A)^Q$. F3 applies to the same normalizer transgression and the pullback/coefficient-inclusion inflation and gives exactness at $H^2(Q,A^N)$. These cover every asserted location, including zero composites. No result about the cokernel of the final map is used or claimed. For N=1 the two inflation maps are identities and H1(N,A)=0; for Q=1 the restriction map is the identity and both positive-degree Q groups vanish, so the degenerate sequences agree. [F2, F3, step 1.1, algebra] ∎

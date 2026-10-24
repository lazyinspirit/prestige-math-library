---
id: thm-piccirillo-conway-trace-partner-has-s-two
kind: theorem
title: "Piccirillo’s partner has the same zero-trace and Rasmussen invariant two"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-piccirillo-conway-pair
  - def-smooth-zero-trace
  - lem-piccirillo-diagram-produces-dualizable-handle-link
  - lem-piccirillo-knot-lee-computations
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Proposition 1.4 (PDF pp. 3, 5), the trace construction in §3 (PDF pp. 4–5), and Theorem 1.5 with its proof and Table 1 in §4 (PDF pp. 5–6), arXiv v1"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§§2–3, trace reformulation and Piccirillo calculation summary"
---

## Statement

Assume the Axiom of Choice. For the Conway knot $C$ and Piccirillo partner $K_P$
fixed above, the zero-traces are diffeomorphic and
$$X_0(C)\cong X_0(K_P),\qquad s(K_P)=2.$$
This statement concerns the zero-trace $4$-manifolds; it asserts no smooth
concordance between $C$ and $K_P$.

## Statement references

[Piccirillo, Proposition 1.4 and Theorem 1.5](https://arxiv.org/pdf/1808.02923)

[Hom, §§2–3](https://arxiv.org/pdf/2107.09171)

## Facts & Assumptions

**Given:** Full AC and the specified knots $C$ and $K_P$.

[A1] The Axiom of Choice, written AC, is assumed. [[def-axiom-of-choice]]

[A2] AC implies dependent choice and hence countable choice $\mathrm{AC}_\omega$; this supplies every retained local countable-choice hypothesis. [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]

[F1] [[lem-piccirillo-diagram-produces-dualizable-handle-link]] constructs under full AC one actual framed handlebody with zero-trace descriptions $X_0(C)$ and $X_0(K_P)$. The local witness is identified with $X_0(C)$ by its framed construction; its identification with $X_0(K_P)$ composes this with the explicitly imported Proposition 1.4. The retained local endpoint is not asserted to be the published panel $N$.

[F2] [[lem-piccirillo-knot-lee-computations]] supplies the established exact rational Lee calculation on the two specified diagrams, giving $s(C)=0$ and $s(K_P)=2$.

## Proof

**Proof technique:** direct.

1.1 By [F1], the two zero-traces are diffeomorphic to the same framed handlebody. Compose the first diffeomorphism with the inverse of the second to obtain $X_0(C)\cong X_0(K_P)$. The supplier uses the published trace equality for the named Figure 2 knot independently of its local endpoint encoding. [A1, F1, construct]

2.1 Apply [F2] to that specified diagram to obtain $s(K_P)=2$. Together with step 1.1 this gives both conclusions of the Statement. [A1, A2, F2, step 1.1, construct] ∎


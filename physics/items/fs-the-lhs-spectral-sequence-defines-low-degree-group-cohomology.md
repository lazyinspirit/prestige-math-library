---
id: "fs-the-lhs-spectral-sequence-defines-low-degree-group-cohomology"
kind: "false-statement"
title: "LHS defines low-degree group cohomology"
deps: ["thm-lyndon-hochschild-serre-spectral-sequence", "def-group-cohomology-as-a-derived-functor", "lem-invariants-for-a-group-extension-compose", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Sections 6.1 and 6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

The LHS spectral sequence defines the groups $H^1(G,M)$ and $H^2(G,M)$, without an earlier definition of group cohomology.

## Facts & Assumptions

**Given:** The library's derived-invariants convention, with DC or supplied comparison data.

[F1] Group cohomology is defined from invariants of a supplied injective resolution ([[def-group-cohomology-as-a-derived-functor]]).

[F2] Invariants compose through the quotient, and LHS applies the derived-composite construction to those already defined functors ([[lem-invariants-for-a-group-extension-compose]], [[thm-lyndon-hochschild-serre-spectral-sequence]]).

## Refutation

1.1 For a supplied resolution $M\to I$, F1 defines $H^1(G,M)=\ker((I^1)^G\to(I^2)^G)/\operatorname{im}((I^0)^G\to(I^1)^G)$ and similarly uses degrees one, two and three for $H^2$. No group extension occurs in either definition. DC supplies the stated resolution-independent notation, while the displayed quotient for specified data is already defined in ZF. F2 uses these derived functors to identify both its page and its target. [F1, F2]

2.1 The trivial extension $1\to1\to G\xrightarrow{1}G\to1$ makes the proposed independent definition visibly circular. Trivial-group invariants are the identity functor, so applied to an exact resolution their positive cohomology is zero and their degree-zero cohomology is $M$. The LHS second page is therefore $E_2^{p,0}=H^p(G,M)$ and zero elsewhere; its target is the same $H^p(G,M)$. In particular the entries at $(1,0)$ and $(2,0)$ already contain the groups allegedly being defined. LHS supplies a computation and comparison tool, not the missing definition. For zero coefficients all displayed quotients are zero, with the same dependency order. [F1, F2, step 1.1] ∎

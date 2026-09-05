---
id: thm-dirichlet-l-nonzero-at-one
kind: theorem
title: "Nonprincipal Dirichlet L-functions are nonzero at one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-nonreal-dirichlet-l-nonzero-at-one, lem-real-dirichlet-l-nonzero-at-one]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, section 3.4"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

If $\chi\ne\chi_0$ is a Dirichlet character, then $L(1,\chi)\ne0$.

## Facts & Assumptions

**Given:** A nonprincipal Dirichlet character $\chi$.

[L1] Nonreal Dirichlet characters satisfy $L(1,\chi)\ne0$
([[lem-nonreal-dirichlet-l-nonzero-at-one]]).

[L2] Real nonprincipal Dirichlet characters satisfy $L(1,\chi)\ne0$
([[lem-real-dirichlet-l-nonzero-at-one]]).

## Proof

**Proof technique:** direct.

1.1 Every Dirichlet character is either real or nonreal. If $\chi$ is nonreal, [L1] applies; if $\chi$ is real, then because it is also nonprincipal [L2] applies. [L1, L2, given, cases]

2.1 In both cases $L(1,\chi)\ne0$, so the theorem follows. [step 1.1, cases-exhaustive] ∎

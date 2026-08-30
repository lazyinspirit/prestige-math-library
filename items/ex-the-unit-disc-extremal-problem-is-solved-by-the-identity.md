---
id: ex-the-unit-disc-extremal-problem-is-solved-by-the-identity
kind: example
title: "The unit-disc extremal problem is solved by the identity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-map-extremal-family, cor-uniqueness-of-the-normalized-riemann-map, thm-unit-disc-schwarz-lemma-with-rigidity]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Example

For $\Omega=\mathbb D$ and $z_0=0$, the extremal map is the identity
$f(z)=z$, and the extremal derivative is $1$.

## Facts & Assumptions

**Given:** The extremal family $\mathcal F(\mathbb D,0)$.

[L1] If $h:\mathbb D\to\mathbb D$ is holomorphic and $h(0)=0$, then $|h'(0)|\le1$, with equality only for rotations ([[thm-unit-disc-schwarz-lemma-with-rigidity]]).

## Verification

**Proof technique:** direct.

1.1 Every map $h\in\mathcal F(\mathbb D,0)$ satisfies $h(0)=0$ and $h'(0)>0$, so [L1] gives $0<h'(0)\le1$. [L1, given]

2.1 The identity map belongs to $\mathcal F(\mathbb D,0)$ and has derivative $1$ at $0$, so the extremal derivative is exactly $1$. Equality in [L1] forces any extremizer to be a rotation, and the positivity of the derivative leaves only the identity. [L1, step 1.1, algebra] ∎

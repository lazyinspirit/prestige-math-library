---
id: ex-flat-idempotent-quotient
kind: example
title: "A quotient by an idempotent ideal is flat"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-flat-quotients-and-idempotent-ideals]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Exercise (9.9)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Example

Let $R=A\times B$ and let $I=A\times0=R(1,0)$. Then $(1,0)$ is idempotent, so
the quotient
$$ R/I\cong 0\times B\cong B $$
is a flat $R$-module.

## Facts & Assumptions

**Given:** A product ring $R=A\times B$ and the ideal $I=A\times0$.

[L1] Quotients by idempotent-generated ideals are flat
([[cor-flat-quotients-and-idempotent-ideals]]).

## Verification

**Proof technique:** direct.


1.1 The element $e=(1,0)\in A\times B$ satisfies $e^2=e$, and $I=Re$. [given, algebra]


1.2 Therefore [L1] applies and shows that $R/I$ is flat. Concretely, $R/I\cong B$ as the second factor. [L1]


2.1 This is the standard idempotent-quotient example. [algebra] ∎

---
id: ex-nonflat-quotient-module
kind: example
title: "The quotient by a nonidempotent ideal is not flat"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-flatness-criteria-by-injections-and-ideals, cor-flat-quotients-and-idempotent-ideals]
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
    - title: "Mihnea Mustata, Graduate Commutative Algebra, §10"
      url: "https://www.math.lsa.umich.edu/~mmustata/commalg.html"
---

## Example

In $R=k[\varepsilon]/(\varepsilon^2)$, the quotient by the ideal
$I=(\varepsilon)$ is not flat.

## Facts & Assumptions

**Given:** A field $k$, the ring $R=k[\varepsilon]/(\varepsilon^2)$, and the
ideal $I=(\varepsilon)$.

[L1] If $R/I$ is flat, then $I=I^2$
([[cor-flat-quotients-and-idempotent-ideals]]).

[L2] Flatness is detected by the ideal-injection criterion
([[thm-flatness-criteria-by-injections-and-ideals]]).

## Verification

**Proof technique:** direct.


1.1 Here $I^2=(\varepsilon^2)=0$, while $I\neq0$. So $I\neq I^2$. [given, algebra]


1.2 By [L1], the quotient $R/I$ cannot be flat. Equivalently, the ideal criterion [L2] fails for the inclusion $I\hookrightarrow R$ after tensoring with $R/I$. [L1, L2]


2.1 Thus quotients by nonidempotent ideals need not be flat. [algebra] ∎

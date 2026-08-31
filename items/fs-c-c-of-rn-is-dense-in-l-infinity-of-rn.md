---
id: fs-c-c-of-rn-is-dense-in-l-infinity-of-rn
kind: false-statement
title: "FALSE: $C_c(\\mathbb{R}^n)$ is dense in $L^\\infty(\\mathbb{R}^n)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn]
landmark: false
proof_strategy: "Refute the claim by noting that the A-page closure theorem identifies the closure as $C_0(\\mathbb{R}^n)$, not all of $L^\\infty(\\mathbb{R}^n)$. A bounded function with no vanishing-at-infinity representative is enough."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

**False claim.** $C_c(\mathbb{R}^n)$ is dense in $L^\infty(\mathbb{R}^n)$.

## Facts & Assumptions

**Given:** The $L^\infty$-closure theorem for $C_c(\mathbb{R}^n)$.

[L1] The closure of $C_c(\mathbb{R}^n)$ in $L^\infty$ is exactly
$C_0(\mathbb{R}^n)$ ([[thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn]]).

## Refutation

**Proof technique:** direct.

1.1 The constant function $1$ belongs to $L^\infty(\mathbb{R}^n)$ but not to [L1]
$C_0(\mathbb{R}^n)$, because it does not vanish at infinity. [L1]

2.1 By [L1], every $L^\infty$-limit of compactly supported continuous functions [L1, step 1.1]
lies in $C_0(\mathbb{R}^n)$. Therefore $1$ cannot lie in the closure of
$C_c(\mathbb{R}^n)$, and the claim is false. [L1, step 1.1] ∎
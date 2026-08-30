---
id: fs-connected-complement-in-c-implies-simple-connectivity
kind: false-statement
title: "FALSE: a connected plane-domain complement in C already implies simple connectivity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-the-punctured-plane-separates-c-complement-from-spherical-complement]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Proposition 4.3.7"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

**False claim.** If $\Omega\subseteq\mathbb C$ is a connected complex domain and
$\mathbb C\setminus\Omega$ is connected, then $\Omega$ is simply connected.

## Facts & Assumptions

**Given:** The punctured plane witness from [[cex-the-punctured-plane-separates-c-complement-from-spherical-complement]].

[L1] The punctured plane has connected complement in $\mathbb C$ but disconnected spherical complement, and is therefore not simply connected ([[cex-the-punctured-plane-separates-c-complement-from-spherical-complement]]).

## Refutation

**Proof technique:** direct.

1.1 Apply [L1] to $\Omega=\mathbb C^\times$. Its complement in $\mathbb C$ is the connected set $\{0\}$, but the domain is not simply connected. [given, L1]

2.1 So the displayed implication fails. The missing point is exactly that plane simple connectivity depends on the complement in $\widehat{\mathbb C}$, not merely in $\mathbb C$. [step 1.1] ∎

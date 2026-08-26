---
id: ex-bose-construction-for-the-steiner-triple-system-on-nine-points
kind: example
title: "Bose's construction at order $9$ gives a Steiner triple system on nine points"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bose-construction-produces-a-steiner-triple-system]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jonathan Davidson, Steiner Triple Systems"
      url: "https://jjdavidson.github.io/notes/design-theory/03steiner-triple.html"
---

## Example

For $m=1$, Bose's construction has $n=3$ and point set
$(\mathbb Z/3)\times(\mathbb Z/3)$. Since $x\circ y=2(x+y)$ in $\mathbb Z/3$, the
twelve blocks are
$$\{(0,0),(0,1),(0,2)\},\ \{(1,0),(1,1),(1,2)\},\ \{(2,0),(2,1),(2,2)\},$$
$$\{(0,0),(1,0),(2,1)\},\ \{(0,1),(1,1),(2,2)\},\ \{(0,2),(1,2),(2,0)\},$$
$$\{(0,0),(2,0),(1,1)\},\ \{(0,1),(2,1),(1,2)\},\ \{(0,2),(2,2),(1,0)\},$$
$$\{(1,0),(2,0),(0,1)\},\ \{(1,1),(2,1),(0,2)\},\ \{(1,2),(2,2),(0,0)\}.$$

## Facts & Assumptions

**Given:** Bose's construction from [[thm-bose-construction-produces-a-steiner-triple-system]].

## Verification

**Proof technique:** direct.

1.1 The first three displayed blocks are the vertical blocks $V_x$, and the remaining nine are the blocks $B_{x,y,i}$ for the three unordered pairs $\{0,1\}$, $\{0,2\}$, and $\{1,2\}$ and the three layers $i\in\mathbb Z/3$. [given, algebra]

2.1 Theorem [[thm-bose-construction-produces-a-steiner-triple-system]] therefore applies verbatim and shows that these twelve blocks form a Steiner triple system on nine points. [step 1.1] ∎

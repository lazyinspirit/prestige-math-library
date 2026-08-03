---
id: ex-chinese-remainder-system-worked
kind: example
title: "The system $x\\equiv2\\pmod3$, $x\\equiv3\\pmod5$, $x\\equiv2\\pmod7$ has the unique solution $x\\equiv23\\pmod{105}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chinese-remainder-theorem, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "University of Southampton, Simultaneous Linear Congruences"
      url: "https://www.southampton.ac.uk/~wright/1001/simultaneous-linear-congruences.html"
pipeline_run: null
---

## Example

The system

$$x\equiv2\pmod3,\qquad x\equiv3\pmod5,\qquad x\equiv2\pmod7$$

has exactly the solutions $x\equiv23\pmod{105}$.

## Facts & Assumptions

**Given:** The three displayed congruences.

[L1] For a finite pairwise-coprime list of positive moduli, prescribed residues determine one class modulo their product ([[thm-chinese-remainder-theorem]]).

[L2] The relation $u\equiv v\pmod n$ means $n\mid(u-v)$ ([[def-congruence-modulo-an-integer]]).

## Verification

**Proof technique:** constructive.

1.1 The numbers $3,5,7$ are pairwise coprime and have product $105$. The complementary products $35,21,15$ satisfy $2\cdot35\equiv1\pmod3$, $21\equiv1\pmod5$, and $15\equiv1\pmod7$, while each is divisible by the other two moduli. [L2]

2.1 Therefore $x:=2(2\cdot35)+3(21)+2(15)=233$ has the prescribed three residues, and $233=23+2\cdot105$ gives $x\equiv23\pmod{105}$. [construct, step 1.1, L2]

3.1 By [L1], all simultaneous solutions form one class modulo $3\cdot5\cdot7=105$; since step 2.1 exhibits $23$ in that class, it is exactly $[23]_{105}$. [step 2.1, L1, discharge-construct] ∎

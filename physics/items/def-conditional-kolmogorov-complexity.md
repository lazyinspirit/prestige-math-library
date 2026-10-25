---
id: def-conditional-kolmogorov-complexity
kind: definition
title: "Conditional Kolmogorov complexity"
status: published
origin: session
deps: [def-description-machine-and-plain-kolmogorov-complexity, def-effective-binary-encoding-and-decoder, thm-existence-of-a-universal-turing-machine]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Shen, §12"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Definition
A **conditional description machine** is a partial computable function
$$D:\{0,1\}^*\times\{0,1\}^*\rightharpoonup\{0,1\}^*,$$
with pairs represented by the fixed computable pairing
$$\langle p,y\rangle:=1^{|p|}0py.$$
The leading unary length determines the end of $p$, leaving $y$ as the
remainder, so both encoding and decoding are Turing computable; in particular
this is an effective encoding in the sense of
[[def-effective-binary-encoding-and-decoder]]. Put
$$C_D(x\mid y):=\min\{|p|:D(p,y)=x\},$$
with value $\infty$ when no such $p$ exists.

A conditional machine $U$ is **optimal** when, for every conditional machine
$D$, there is a constant $c_D$ such that
$$C_U(x\mid y)\le C_D(x\mid y)+c_D$$
for all strings $x,y$. An optimal conditional machine exists by universal
dispatch. Enumerate conditional machines by their finite Turing-machine codes.
On program $1^{|e|}0ep$ and condition $y$, a single conditional machine
decodes the machine code $e$ and simulates that machine on
$\langle p,y\rangle$ using the universal interpreter
([[thm-existence-of-a-universal-turing-machine]]). For each fixed $D$ choose
one of its codes $e$; this adds only $2|e|+1$ bits to $p$, independently of
$x,y$. Fix this optimal machine $U$ and write
$C(x\mid y):=C_U(x\mid y)$. This is the conditional version of
[[def-description-machine-and-plain-kolmogorov-complexity]].

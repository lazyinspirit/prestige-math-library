---
id: ex-euler-totient-recovered-by-mobius-inversion
kind: example
title: "Möbius inversion of $\\sum_{d\\mid n}\\varphi(d)=n$ gives $\\varphi(n)=\\sum_{d\\mid n}\\mu(d)(n/d)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: [cor-classical-mobius-inversion, thm-sum-of-totients-over-divisors, def-number-theoretic-mobius-function]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "P. J. Cameron, Notes on Number Theory, Theorem 7.11"
      url: "https://maths.qmul.ac.uk/~pjc/notes/nt.pdf"
    - title: "Stanford Pairing-Based Cryptography notes, Möbius inversion"
      url: "https://crypto.stanford.edu/pbc/notes/numbertheory/mobius.html"
pipeline_run: null
---

## Example

The divisor-sum theorem from the CRT development states

$$n=\sum_{d\mid n}\varphi(d)$$

for every positive integer $n$ ([[thm-sum-of-totients-over-divisors]]). Apply [[cor-classical-mobius-inversion]] with $g(n)=n$ and $f(n)=\varphi(n)$. The form indexed by the complementary divisor gives

$$\varphi(n)=\sum_{d\mid n}\mu(d)g(n/d)=\sum_{d\mid n}\mu(d)\frac nd.$$

At $n=12$, the values from [[def-number-theoretic-mobius-function]] give

$$\varphi(12)=12-6-4+0+2+0=4,$$

where the terms correspond to $d=1,2,3,4,6,12$. Thus Möbius inversion recovers $\varphi(12)=4$ directly from the CRT divisor-sum theorem.

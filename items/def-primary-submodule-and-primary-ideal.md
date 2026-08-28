---
id: def-primary-submodule-and-primary-ideal
kind: definition
title: "Primary submodules and primary ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-right-and-two-sided-ideal, def-quotient-module, def-annihilator-and-torsion-of-a-module, def-radical-of-an-ideal]
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 19.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §18"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Definition

Let $R$ be a commutative ring, let $M$ be a left $R$-module, and let
$Q \subsetneq M$ be a proper submodule. Then $Q$ is **primary** when every zero
divisor on the quotient module $M/Q$ acts nilpotently on $M/Q$; equivalently,
whenever multiplication by $a \in R$ on $M/Q$ has nontrivial kernel, there
exists $n \ge 1$ with
$$
a^n(M/Q)=0.
$$

If
$$
\sqrt{\operatorname{Ann}_R(M/Q)}=\mathfrak p,
$$
then $Q$ is called **$\mathfrak p$-primary**.

The radical here is well-defined: $\operatorname{Ann}_R(M/Q)$ is an ideal of
$R$. Indeed, it contains $0$, is closed under subtraction, and if $a$ annihilates
$M/Q$ then so does $ra$ for every $r\in R$, by the module axioms.

When $M=R$, viewed as its regular module, a primary submodule is a
**primary ideal**.

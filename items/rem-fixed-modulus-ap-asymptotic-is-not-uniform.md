---
id: rem-fixed-modulus-ap-asymptotic-is-not-uniform
kind: remark
title: "Fixed-modulus prime asymptotics do not provide growing-modulus uniformity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - thm-prime-number-theorem-arithmetic-progressions
  - thm-siegel-walfisz-prime-distribution
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 4, Theorem 4.12"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
    - title: "Analytic Number Theory lecture notes, Chapter 11, Theorem 11.2"
      url: "https://metaphor.ethz.ch/x/2018/hs/401-3100-68L/IANTnotes2018.pdf"
---

## Remarks

Assume the Axiom of Choice, Countable Choice, and Dependent Choice.

For each fixed integer $q\ge1$ and reduced residue class $a\pmod q$, the
fixed-modulus prime number theorem gives
$\psi(x;q,a)\sim x/\varphi(q)$ as $x\to\infty$; its threshold may depend on
$q$ and $a$. Pointwise convergence of a family does not by itself give a
uniform estimate when the index varies with $x$: for example,
$f_q(x)=1$ when $x\ge q$ and $f_q(x)=0$ when $x<q$ satisfies
$f_q(x)\to1$ for each fixed $q$, while $f_{\lfloor x\rfloor+1}(x)=0$.
The fixed-modulus theorem therefore supplies no growing-modulus error bound
by itself. Siegel–Walfisz adds a uniform conclusion in its stated logarithmic
modulus range.

## Remarks references

[Kedlaya, Chapter 4, Theorem 4.12 and proof](https://kskedlaya.org/ant/chap-primes-in-ap.html)

[[thm-prime-number-theorem-arithmetic-progressions|fixed-modulus prime number theorem in arithmetic progressions]]

[[thm-siegel-walfisz-prime-distribution|Siegel–Walfisz theorem for primes in arithmetic progressions]]

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, and Dependent Choice as
assumptions of the contextual Siegel–Walfisz result.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice
function; it is inherited through the SW zero-free supplier.

[A2] [[def-countable-choice]]: Every sequence of nonempty sets indexed by
$\mathbb N$ has a choice function; it is inherited through the SW proof inputs.

[A3] [[def-dependent-choice]]: Every entire relation on a nonempty set admits
an $\mathbb N$-indexed chain from any prescribed start; it is inherited through
the SW zero-free supplier.

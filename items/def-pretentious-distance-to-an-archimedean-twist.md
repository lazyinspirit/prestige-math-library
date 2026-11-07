---
dependency_level: 1
id: def-pretentious-distance-to-an-archimedean-twist
kind: definition
title: "Pretentious distance to an Archimedean twist"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - lem-archimedean-twist-completely-multiplicative-and-unit-valued
  - def-multiplicative-arithmetic-function
  - def-completely-multiplicative-arithmetic-function
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Andrew Granville and K. Soundararajan, Pretentious Multiplicative Number Theory (author manuscript, 2011)"
      url: "https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf"
    - title: "Andrew Granville, Adam J. Harper, and K. Soundararajan, A New Proof of Halász’s Theorem, and Its Consequences"
      url: "https://discovery.ucl.ac.uk/id/eprint/1568743/1/Granville%20HalaszActualPaperRevision.pdf"
verification:
  precheck: n/a
---

## Definition

Let $f,g:\mathbb Z_{>0}\to\mathbb C$ be multiplicative arithmetic functions,
meaning $f(1)=g(1)=1$ and $f(mn)=f(m)f(n)$ and $g(mn)=g(m)g(n)$ whenever
$m,n$ are coprime positive integers. Assume $|f(n)|,|g(n)|\le1$ for every
$n\ge1$. For real $t$ and $n\ge1$, define the Archimedean twist
$n^{it}:=\exp(it\log n)$, using the natural logarithm and complex exponential.
For real $x\ge3$, define

$$ D(f,g;x):=\left(\sum_{p\le x}\frac{1-\operatorname{Re}(f(p)\overline{g(p)})}{p}\right)^{1/2},\qquad D(f,n^{it};x):=D(f,g;x)\text{ for }g(n)=n^{it}. $$

The sum is finite, and every summand is nonnegative because
$|f(p)\overline{g(p)}|\le1$; hence the displayed nonnegative real square root
exists. Equivalently,

$$ D(f,n^{it};x)^2=\sum_{p\le x}\frac{1-\operatorname{Re}(f(p)p^{-it})}{p},\qquad p^{-it}:=\exp(-it\log p). $$

## Definition references

[[def-multiplicative-arithmetic-function]]

[[def-completely-multiplicative-arithmetic-function]]

[[lem-archimedean-twist-completely-multiplicative-and-unit-valued]]

[[def-natural-logarithm]]

[[thm-natural-logarithm-laws]]

[[def-complex-exponential]]

[[thm-complex-exponential-addition-and-real-extension]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[lem-complex-conjugation-and-modulus-laws]]

[Granville and Soundararajan, *Pretentious Multiplicative Number Theory*, §4.1, PDF pp. 31–33](https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf)

[Granville, Harper, and Soundararajan, “A New Proof of Halász’s Theorem,” §1, PDF pp. 1–3](https://discovery.ucl.ac.uk/id/eprint/1568743/1/Granville%20HalaszActualPaperRevision.pdf)

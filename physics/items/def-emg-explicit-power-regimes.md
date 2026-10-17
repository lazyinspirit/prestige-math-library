---
id: def-emg-explicit-power-regimes
kind: definition
title: Explicit rational and real power regimes
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
physical_scope: null
deps:
- def-real-numbers
- def-rational-power
- def-integer-power
- lem-rational-power-well-defined
- lem-rational-power-laws
- thm-nth-roots-exist
- def-real-power
- thm-real-power-laws
dependency_roles:
  def-real-numbers: mathematical-premise
  def-rational-power: mathematical-premise
  def-integer-power: mathematical-premise
  lem-rational-power-well-defined: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  thm-nth-roots-exist: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-laws: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
  - title: J. Lebl, Basic Analysis I
    url: https://www.jirka.org/ra/realanal.pdf
  - title: Radicals and rational exponents (Emory University)
    url: https://mathcenter.oxford.emory.edu/site/math100/radicals/
  - title: Exponentiation (Wikipedia)
    url: https://en.wikipedia.org/wiki/Exponentiation
  - title: Nth root (Wikipedia)
    url: https://en.wikipedia.org/wiki/Nth_root
  - title: W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1
    url: https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis
justified_by:
- lem-emg-positive-square-root-smoothness
dependency_level: 0
---

## Definition

For $a>0$, integer $m$ and integer $n\ge1$, define the rational regime by

$$
a^{m/n}:=(a^{1/n})^m,
$$

where $a^{1/n}$ is the unique positive root of $s^n=a$ in [[thm-nth-roots-exist]], and integer powers include reciprocals for negative $m$. This is [[def-rational-power]]; [[lem-rational-power-well-defined]] proves independence of the fraction representative and [[lem-rational-power-laws]] gives the rational exponent laws. For the rational-exponent regime at base zero, retain the convention of [[def-rational-power]] and [[def-integer-power]]: $0^0=1$, $0^r=0$ for rational $r>0$, and $0^r$ is undefined for rational $r<0$. This records the integer zero-exponent convention together with the positive-rational supplementary clause; it does not extend the real-exponent convention.

The separate real-exponent regime is [[def-real-power]]: for $a>0$ and $x\in\mathbb R$, $a^x=\exp(x\log a)$, with the laws of [[thm-real-power-laws]]. For real exponents at base zero, set $0^x=0$ only when $x>0$; $0^0$ and $0^x$ for $x<0$ are undefined, exactly as in [[def-real-power]]. The rational and real exponent operations are separate definitions; at zero base and exponent zero, state which regime is intended: the rational/integer convention gives $1$, while the real-power convention leaves the expression undefined. No arbitrary real power is assigned to a negative base. The real-power laws are supplied by that theorem, not inferred from the rational root formula. Use the real-number structure of [[def-real-numbers]].

In particular $s(q)=q^{1/2}$ for $q>0$ is the unique positive solution of $s(q)^2=q$. Its smoothness and derivative are a separate well-definedness result, not an assumption about fractional notation.

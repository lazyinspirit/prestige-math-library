---
id: ex-soundararajan-explicit-cusp-tail-estimate
kind: example
title: "An explicit high-cusp mass estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - thm-soundararajan-cusp-tail-mass-bound-for-hecke-maass-forms
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "Proposition 2, printed p. 3."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§2, cusp mass estimate and QUE deduction, pp. 12–14."
---

## Example

For every Petersson-norm-one full-level joint Hecke–Maass cusp form $u$, the mass above height $10^{20}$ satisfies
$$\int_{\substack{|x|\le1/2\\y\ge10^{20}}}|u(x+iy)|^2\,\frac{dx\,dy}{y^2}<0.61.$$

## Example references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, Proposition 2, printed p. 3.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §2, pp. 12–14.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** A Petersson-norm-one full-level joint Hecke–Maass cusp form $u$.

[F1] For every $T\ge1$, its cusp mass above height $T$ is at most $10^8(1+\log T)/\sqrt T$ ([[thm-soundararajan-cusp-tail-mass-bound-for-hecke-maass-forms]]).

[F2] The logarithm is strictly increasing and satisfies $\log(ab)=\log a+\log b$ ([[thm-natural-logarithm-laws]]).

[F3] $\log x=\int_1^xdt/t$ for $x>0$ ([[thm-logarithm-derivative-and-integral]]).

## Verification

1.1 By [F3] and the substitution $t=(1+u)/(1-u)$,
$$\log2=2\int_0^{1/3}\frac{du}{1-u^2}
=2\sum_{k\ge0}\frac{3^{-(2k+1)}}{2k+1}<2\sum_{k\ge0}3^{-(2k+1)}=\frac34.$$
The geometric series converges uniformly on $[0,1/3]$, which justifies termwise integration. Thus [F2] gives $\log10<\log16=4\log2<3$. Applying [F1] with $T=10^{20}$, the right side is
$$10^8\frac{1+20\log10}{10^{10}}=\frac{1+20\log10}{100}
<\frac{61}{100}=0.61,$$
This proves the asserted estimate. [F1, F2, F3, given, construct, algebra] ∎

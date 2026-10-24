---
id: def-spherical-bessel-evaluation-contract
kind: definition
title: Scaled spherical Bessel evaluation on positive real arguments
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-spherical-bessel-and-hankel-functions, def-certified-evaluation-result-contract]
justified_by: [thm-certified-scaled-spherical-bessel-enclosures]
axiom_use: "The definition uses no axiom; a represented point is supplied with its terminating interval interface as input data."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §10.49, Explicit Formulas"
      url: "https://dlmf.nist.gov/10.49"
      locator: "§10.49(i), equations 10.49.1–10.49.6, finite spherical Bessel and outgoing Hankel formulas."
    - title: "NIST Digital Library of Mathematical Functions, §10.51, Recurrence Relations and Derivatives"
      url: "https://dlmf.nist.gov/10.51"
      locator: "§10.51(i), equations 10.51.1–10.51.3, spherical-function recurrences and derivative formulas."
    - title: "University of Toronto, Lecture Notes on Mathematical Methods 2019–20"
      url: "https://www.physics.utoronto.ca/~phy1540f/p154019_cumullect.pdf"
      locator: "§6.4, printed pp. 157–158, spherical radial solution convention and finite-derivative definition."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\ell\ge0$ be an integer and $z>0$ real. Put
$$c_\ell=(2\ell+1)!!=\prod_{r=0}^{\ell}(2r+1),\qquad d_\ell=(2\ell-1)!!=\prod_{r=1}^{\ell}(2r-1),$$
where the second product is empty and equals $1$ when $\ell=0$. Using the outgoing convention of [[def-spherical-bessel-and-hankel-functions]], define
$$J_\ell^{\rm sc}(z)=c_\ell z^{-\ell}j_\ell(z),\qquad D J_\ell^{\rm sc}(z)=c_\ell z^{-\ell}j_\ell'(z),$$
$$H_\ell^{\rm sc}(z)=d_\ell^{-1}z^{\ell+1}e^{-iz}h_\ell^{(1)}(z),\qquad D H_\ell^{\rm sc}(z)=d_\ell^{-1}z^{\ell+1}e^{-iz}(h_\ell^{(1)})'(z).$$
The symbols $D J_\ell^{\rm sc}$ and $D H_\ell^{\rm sc}$ mean the scaled derivatives of the original functions, not derivatives of the scaled functions. The available targets are $j_\ell$, $j_\ell'$, $h_\ell^{(1)}$, $(h_\ell^{(1)})'$, and these four scaled quantities; every derivative is with respect to $z$.

An input is either (i) a closed dyadic interval $I=[a,b]\subset(0,\infty)$, requesting an enclosure of the whole target image on $I$, or (ii) a positive real $z$ supplied by an interface that, on each integer request $n\ge1$, terminates and returns a closed dyadic interval $I_n$ containing $z$ with width at most $2^{-n}$. The intervals need not be nested. This is a representation hypothesis on a supplied input, not a claim that every positive real has such a representation. An exact positive dyadic point is the constant-interface case $I_n=[z,z]$. A represented point need not be dyadic: arguments such as $kR$ or $\sqrt{k^2+V_0}R$ are admitted when a caller constructs a terminating interface by rigorous interval propagation from represented parameters. Each returned box must contain the exact composed argument; a midpoint or approximate point alone is not an admissible interface. The caller's construction must retain positivity and prove termination of every requested refinement.

For each target, outputs and optional relative tests use [[def-certified-evaluation-result-contract]]: a real enclosure is an interval, a complex enclosure is a rectangle, and its radius is half its length or half its Euclidean diagonal, respectively. Each target has an exact positive rational absolute tolerance $\varepsilon_a$; an exact positive rational relative tolerance $\varepsilon_r$ may also be requested. A relative flag may be true only when the returned enclosure excludes zero and $\operatorname{rad}(B)/d(B,0)\le\varepsilon_r$. No relative flag is available when the enclosure contains zero.

Intermediate interval endpoints may be exact rationals. Final endpoints are rounded outward to multiples of $2^{-p}$ for an integer $p\ge0$. The mathematical procedure has no fixed exponent limit. A concrete bounded implementation must return `range` or `inconclusive` rather than claim a finite result it cannot represent. Finite caps are specified by the evaluating algorithm. A fixed nondegenerate input interval requests its whole image and is not promised arbitrarily small radius; eventual absolute success is asserted separately for represented-point inputs.

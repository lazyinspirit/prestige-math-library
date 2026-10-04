---
id: rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity
kind: remark
title: "Endpoint targets: weak (1,1) here, L∞ to BMO later; strong endpoints fail in general"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-calderon-zygmund-operator-has-weak-type-one-one, thm-calderon-zygmund-singular-integrals-are-bounded-on-lp, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.3, weak (1,1) in Theorem 5.3.3 and the strict-range scope of (5.3.14), printed pp. 355–371"
    - title: "Terence Tao, Math 247A Lecture Notes 4"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "§3, remarks on weak (1,1) and BMO as the endpoint substitutes, printed p. 10"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). For an $L^2$-bounded Calderón–Zygmund operator the two endpoint-adjacent facts
established on this page are the weak $(1,1)$ estimate of
[[thm-calderon-zygmund-operator-has-weak-type-one-one]] and the strong $L^p$
bounds for $1<p<\infty$ of
[[thm-calderon-zygmund-singular-integrals-are-bounded-on-lp]]. The following
claims are deliberately **not** made here, and the reader should not read the
page as asserting or refuting them.

First, no strong type $(1,1)$ bound and no bounded action on
$L^\infty(\mathbb R^n)$ is claimed; the weak $(1,1)$ estimate is the endpoint
substitute for the former, and the companion examples page exhibits the
Hilbert transform of an interval indicator as a counterexample to compatible
strong $L^1$ and $L^\infty$ conclusions, for the Hilbert transform and hence
for the class of Calderón–Zygmund operators.

Second, the $L^\infty\to\mathrm{BMO}$ endpoint is the subject of the later BMO
page of this track, where bounded mean oscillation is defined and the endpoint
estimate is proved; neither the statement nor the proof of that estimate is
used here, and no $L^\infty$ conclusion is available from it.

The strict-range bounds are stated with the exponent range $1<p<\infty$ only;
the constants blow up as $p\downarrow1$ and as $p\to\infty$ in the estimates
recorded above, consistently with the two refuted endpoints.

---
id: rem-the-heat-operator-family-is-an-analytic-semigroup-in-the-later-abstract-language
kind: remark
title: The heat operator family is an analytic semigroup in the later abstract language
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - thm-complex-time-heat-operators-form-a-bounded-holomorphic-semigroup
  - def-heat-evolution-of-initial-data
  - def-complex-time-heat-kernel-on-a-proper-sector
  - thm-heat-cauchy-solution-for-lp-data
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations (KIT lecture notes, Chapter 2)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: '§2.3, Definition 2.18 and Theorem 2.25 (sectorial operators and bounded analytic semigroups)'
    - title: "Martin Hairer, An Introduction to Stochastic PDEs (lecture notes, Chapter 4)"
      url: "https://www.hairer.org/SPDEs.pdf"
      locator: "§4.3, printed pp. 46–48 (definition and basic theory of analytic semigroups)"
---

## Remark

**Orientation only.** For $1\le p<\infty$, the family $z\mapsto H_z$ constructed explicitly in
[[thm-complex-time-heat-operators-form-a-bounded-holomorphic-semigroup]] is the
concrete Gaussian instance of what the library's later abstract treatment of
analytic semigroups will call a bounded holomorphic (analytic) $C_0$-semigroup
on a sector: bounded on every proper subsector, strongly continuous on the
positive real axis, and multiplicative in the sector. Concretely, the kernel
and its estimates are those of [[def-complex-time-heat-kernel-on-a-proper-sector]];
the sectorial bound $\|H_z\|_{L^p\to L^p}\le(\cos\sigma)^{-n/2}$ on
$|\arg z|\le\sigma<\theta$ and the law $H_zH_w=H_{z+w}$ are clauses (i) and
(ii) of that theorem, its clause (iii) gives the holomorphy in operator norm,
and the strong continuity at the vertex along the positive axis, for
$1\le p<\infty$, is that of the heat flow of
[[def-heat-evolution-of-initial-data]] supplied by
[[thm-heat-cauchy-solution-for-lp-data]].

This page does not use that abstract notion as a premise, does not identify the
generator $\Delta$ with an unbounded operator domain, and makes no claim about
maximal regularity, resolvent sectors, or the Hille–Yosida representation in
the abstract language. The later page is responsible for the abstract
definition and for the generator theory; here only the explicit kernel family
of [[def-complex-time-heat-kernel-on-a-proper-sector]] and its estimates are
used.

For $p=\infty$ the same family is bounded and operator-norm holomorphic at positive complex times, but is not a $C_0$-semigroup on all of $L^\infty$; the vertex continuity assertion above is restricted to finite $p$. Indeed, for $f=\mathbf1_{[0,\infty)}$ on $\mathbb R$, evenness and unit mass give $H_tf(0)=1/2$. Continuity of $H_tf$ makes $|H_tf(x)-1|>\eta$ on a positive-length interval $0<x<\delta$ for every $\eta<1/2$; hence $\|H_tf-f\|_\infty\ge1/2$ for every $t>0$.

For finite $p$, continuity at the vertex also holds within each proper subsector. With $\varepsilon>0$ real and $|\arg z|\le\sigma$, the semigroup law gives
$$\|H_zf-f\|_p\le((\cos\sigma)^{-n/2}+1)\|f-H_\varepsilon f\|_p+\|H_{z+\varepsilon}f-H_\varepsilon f\|_p.$$
For fixed $\varepsilon$, the last term tends to zero as $z\to0$ by positive-parameter operator holomorphy; then $\varepsilon\downarrow0$ controls the first term by the finite-$p$ real-time continuity cited above. This supplies the vertex continuity of the analytic $C_0$ terminology.

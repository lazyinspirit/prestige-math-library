---
id: def-muckenhoupt-a-infinity-class
kind: definition
title: The Muckenhoupt A_infinity class
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-muckenhoupt-a-p-and-a-one-weights, lem-a-p-dual-weight-and-nesting-properties, lem-a-p-weights-are-doubling, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Definition 7.3.1, Proposition 7.3.2 and Corollary 7.3.4, printed pp. 525-530"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Definition 4.32 and Theorem 4.40, printed pp. 85 and 90"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

The **Muckenhoupt $A_\infty$ class** is the union of the finite-exponent
classes:
$$A_\infty:=\bigcup_{1\le p<\infty}A_p,$$
where $A_p$ and $A_1$ are the classes of
[[def-muckenhoupt-a-p-and-a-one-weights]]. Thus a weight $w$ belongs to
$A_\infty$ exactly when $w\in A_p$ for some finite $p$, and by the nesting
property of [[lem-a-p-dual-weight-and-nesting-properties]] the witnessing
exponent may be replaced by any larger one: if $w\in A_p$ then $w\in A_q$ for
every $q>p$. The class is not defined by a single limit formula in $p$; its
equivalence with the power-decay condition
$w(E)/w(Q)\le C(|E|/|Q|)^\delta$ and with the reverse Hölder property is a
theorem proved separately on this page.

Every $A_\infty$ weight is doubling: choose a witnessing exponent $p>1$ using the nesting lemma. Then
then [[lem-a-p-weights-are-doubling]] gives
$w(\lambda Q)\le\lambda^{np}[w]_{A_p}w(Q)$ for every cube and $\lambda>1$, and
the corresponding ball bound with a constant depending only on the indicated
data. No new choice principle is used in the definition itself.

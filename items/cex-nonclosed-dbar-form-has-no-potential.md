---
id: cex-nonclosed-dbar-form-has-no-potential
kind: counterexample
title: A nonclosed dbar form cannot have a potential
status: draft
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.2"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Exercise 4.2.1, printed p. 132 (PDF p. 131), lines 10832–10837. It asks for an explicit non-solvable (0,1)-form in C² but gives no witness or proof; the witness and local obstruction below are derived here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement refuted

Let $g=\bar z_1\,d\bar z_2$ on $\mathbb C^2$. For every nonempty open
$U\subseteq\mathbb C^2$, the restricted form $g|_U$ is not of the form
$\bar\partial u$ for any smooth function $u:U\to\mathbb C$.

## Facts & Assumptions

**Given:** The nonempty open set $U\subseteq\mathbb C^2$ and the smooth
$(0,1)$-form $g|_U=\bar z_1\,d\bar z_2$.

[F1] The coordinate formula for $\bar\partial$ differentiates form coefficients in each $\bar z_j$ direction and wedges the result with $d\bar z_j$ ([[def-bigraded-complex-differential-forms]]).

[F2] For every smooth complex-valued form, $\bar\partial^2=0$ ([[thm-d-dbar-decomposition-and-identities]]).

## Counterexample

**Proof technique:** counterexample.

1.1 The proposed witness has a nonzero $\bar\partial$ derivative at every point. [F1, given, algebra]
Applying the coefficient formula [F1] to $g=\bar z_1\,d\bar z_2$ differentiates its coefficient once in each barred coordinate. Only the $j=1$ derivative is nonzero, and it equals $1$, so
$$\bar\partial g=d\bar z_1\wedge d\bar z_2.$$
Because the two coordinate covectors are distinct members of the local wedge basis, this $(0,2)$-form is nonzero at every point of $\mathbb C^2$; hence $g|_U$ is not $\bar\partial$-closed on any nonempty open $U$.

2.1 Nonclosedness contradicts the necessary condition for having a potential. [F2, step 1.1, given, algebra]
If a smooth $u:U\to\mathbb C$ satisfied $\bar\partial u=g|_U$, applying $\bar\partial$ and using [F2] would give $0=\bar\partial^2u=\bar\partial g|_U=d\bar z_1\wedge d\bar z_2$. The last form is nonzero at every point of the nonempty set $U$ by step 1.1, a contradiction. Thus no such $u$ exists.
∎

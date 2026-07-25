---
id: rem-schechter-kelley-tychonoff
kind: remark
title: "Schechter 2006: Kelley's cofinite proof yields BPI, not the Axiom of Choice"
status: draft
origin: session
proved_here: false
deps: [rem-halpern-levy-bpi-not-ac]
justified_by: []
forward_refs: [rem-choice-ledger, def-axiom-of-choice, thm-ultrafilter-lemma]
aliases: []
landmark: false
short: "the classical Tychonoff-implies-AC argument needs a repair"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Schechter, Kelley's specialization of Tychonoff's theorem is equivalent to the Boolean prime ideal theorem, Fund. Math. 189 (2006), 285-288"
      url: "https://doi.org/10.4064/fm189-3-5"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Kelley (1950) derived the Axiom of Choice from Tychonoff's theorem as follows.
Given nonempty sets $X_a$ for $a \in I$, adjoin a point $\infty$ to each and
topologise $X_a \cup \{\infty\}$ by the **cofinite** topology; each such space is
compact, the sets $X_a$ are claimed to be closed, and the finite intersection
property of the family $\{\pi_a^{-1}(X_a)\}$ then yields a point of the product,
that is, a choice function.

**Schechter (2006): that argument does not prove the Axiom of Choice.** In the
cofinite topology on $X_a \cup \{\infty\}$ the set $X_a$ is **not** closed when
$X_a$ is infinite, since every nonempty open set is cofinite and therefore meets
$X_a$. What Kelley's specialisation actually proves, and is equivalent to over
ZF, is the **Boolean prime ideal theorem**.

**The repair.** Make the adjoined point **isolated**: topologise
$X_a \cup \{\infty\}$ as the disjoint sum of $X_a$ with its cofinite topology and
the one-point space $\{\infty\}$, so that the open sets are the unions of a
cofinite subset of $X_a$ (or $\emptyset$) with a subset of $\{\infty\}$. This
space is compact and $T_1$, and now $X_a$ genuinely is closed, its complement
$\{\infty\}$ being open. With the repair the classical conclusion survives in the
form: **"every product of compact $T_1$ spaces is compact" is equivalent to the
Axiom of Choice over ZF**, while "every product of compact Hausdorff spaces is
compact" is equivalent to BPI.

## Remarks

- **Not proved in this library.** Neither Tychonoff's theorem nor either
  equivalence is proved here.

- **What would prove it.** A ZF development of product topologies and
  compactness, plus the filter arguments of the ultrafilter lemma. Only the
  *independence* half, that BPI does not imply the Axiom of Choice, needs
  forcing; that half is [[rem-halpern-levy-bpi-not-ac]]. The rest is elementary
  once topology exists, which is why this item records a correction rather than a
  deep theorem.

- **Why it matters here.** The claim "Tychonoff implies AC" is standard, and the
  standard proof of it is the one Kelley gave. A library that repeats it verbatim
  would be asserting an equivalence with [[def-axiom-of-choice]] on the strength
  of a false lemma, and would also be mis-pricing the Hausdorff case, which costs
  only [[thm-ultrafilter-lemma]]. When the topology track reaches Tychonoff, this
  correction is what keeps the two statements and their two prices apart in
  [[rem-choice-ledger]].

- **Conditional discipline.** This item states an error and its repair, plus two
  ZF equivalences; only the accompanying strictness claim, that BPI is genuinely
  weaker, is an independence result and it is recorded conditionally in
  [[rem-halpern-levy-bpi-not-ac]].

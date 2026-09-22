---
id: prop-integration-against-haar-is-invariant-under-translations-and-conjugation
kind: proposition
title: Haar integration is translation and conjugation invariant
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-normalized-haar-measure-on-a-compact-lie-group, def-axiom-of-choice, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, def-integrable-real-and-complex-functions-and-their-integrals]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1, (4.1)–(4.2)"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar
measure $\mu$, so that $\mu$ is the unique regular Borel probability measure
that is left, right and inversion invariant
([[cor-normalized-haar-measure-on-a-compact-lie-group]]). Then for every
integrable $f:G\to\mathbb C$ and every $h\in G$,
$$\int_G f(hx)\,d\mu(x)=\int_G f(xh)\,d\mu(x)=\int_G f(hxh^{-1})\,d\mu(x)=\int_G f(x^{-1})\,d\mu(x)=\int_G f(x)\,d\mu(x).$$

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure $\mu$, an integrable $f:G\to\mathbb C$, and $h\in G$.

[A1] The Axiom of Choice is the choice principle of [[def-axiom-of-choice]]; it is used exactly through [L1].

[L1] Normalized Haar measure $\mu$ is the unique regular Borel probability measure on $G$ that is invariant under left translations, right translations and inversion; in particular $\mu(hE)=\mu(E)$, $\mu(Eh)=\mu(E)$ and $\mu(E^{-1})=\mu(E)$ for every Borel $E\subseteq G$ ([[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[L2] For nonnegative Borel $g$ the nonnegative integral is the supremum of the integrals of the simple Borel functions below it, the integral of a nonnegative simple function is its finite linear combination of measure values, and an increasing sequence of nonnegative Borel functions with pointwise limit $g$ has integrals converging to the integral of $g$ ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-monotone-convergence-for-the-integral]]).

[L3] A complex-valued function is integrable exactly when the four nonnegative functions $(\operatorname{Re}f)_\pm,(\operatorname{Im}f)_\pm$ are integrable, and its integral is the corresponding signed combination of their integrals ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Let $E\subseteq G$ be Borel. Since $x\mapsto 1_E(hx)$ is the indicator of $h^{-1}E$, the left invariance in [L1] gives $\int_G 1_E(hx)\,d\mu(x)=\mu(h^{-1}E)=\mu(E)$; since $x\mapsto1_E(xh)$ is the indicator of $Eh^{-1}$, the right invariance gives $\int_G1_E(xh)\,d\mu(x)=\mu(Eh^{-1})=\mu(E)$; and since $x\mapsto1_E(x^{-1})$ is the indicator of $E^{-1}$, inversion invariance gives $\int_G1_E(x^{-1})\,d\mu(x)=\mu(E^{-1})=\mu(E)$. [L1, algebra]

2.1 Let $g\ge0$ be Borel. By [L2] choose an increasing sequence of nonnegative simple Borel functions $s_n\nearrow g$. Each $s_n$ is a finite linear combination of Borel indicators, so the three translation/inversion identities of step 1.1 and linearity of the simple integral give $\int s_n(hx)\,d\mu=\int s_n(xh)\,d\mu=\int s_n(x^{-1})\,d\mu=\int s_n\,d\mu$; the same sequences $s_n(h\cdot)$, $s_n(\cdot h)$, $s_n(\cdot^{-1})$ increase to $g(h\cdot)$, $g(\cdot h)$, $g(\cdot^{-1})$, so two applications of monotone convergence in [L2] identify all four nonnegative integrals. [L2, step 1.1]

3.1 For the conjugation identity write $\phi(x)=hxh^{-1}$. Applying step 2.1 to the nonnegative Borel function $x\mapsto g(hx)$ in place of $g$ and then the left-translation identity gives $\int g(hxh^{-1})\,d\mu(x)=\int g(hx)\,d\mu(x)=\int g(x)\,d\mu(x)$ for nonnegative Borel $g$. [step 2.1]

4.1 Now let $f$ be integrable complex-valued. The functions $f(h\cdot),f(\cdot h),f(\phi(\cdot)),f(\cdot^{-1})$ are Borel because $x\mapsto hx$, $x\mapsto xh$, $\phi$ and inversion are homeomorphisms of $G$, and they are integrable because the identities of steps 2.1 and 3.1 applied to $|f|$ show that each of these four functions has the finite integral $\int|f|\,d\mu$. Splitting $f$ into its four nonnegative parts by [L3] and applying the corresponding identity of steps 2.1 and 3.1 to each part, then recombining, gives the displayed chain of equalities. The Axiom of Choice entered only through [L1]. [A1, L3, step 2.1, step 3.1] ∎

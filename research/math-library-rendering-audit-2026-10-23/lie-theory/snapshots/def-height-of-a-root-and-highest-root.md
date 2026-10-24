---
id: def-height-of-a-root-and-highest-root
kind: definition
title: Height and highest root
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, level and highest root, printed pp. 155-156"
landmark: false
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system with a chosen
positive system $\Phi^{+}$ and base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ of
simple roots ([[def-positive-system-and-base-of-simple-roots]]). By
[[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]
every root is a unique integral combination of $\Delta$ whose nonzero
coefficients all have one sign.

For $\beta=\sum_{i=1}^{r}n_i\alpha_i\in\Phi$ the **height** of $\beta$ is
$$\operatorname{ht}(\beta)=\sum_{i=1}^{r}n_i .$$
This is well defined because the simple roots form a basis, and simple roots
are exactly the roots of height one. The **root order** on $\Phi$ is defined
by
$$\beta\le\gamma\quad\Longleftrightarrow\quad \gamma-\beta=\sum_{i=1}^{r}m_i\alpha_i\quad\text{with }m_i\in\mathbb Z_{\ge0}.$$
It restricts to a partial order on the positive roots, in which every
comparison chain is finite because heights strictly increase. A positive root
$\theta\in\Phi^{+}$ is a **highest root** if it is maximal for this order,
that is, if $\theta\le\gamma$ for no positive root $\gamma\ne\theta$. The
existence and uniqueness of a highest root for an irreducible system are
proved in [[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]].

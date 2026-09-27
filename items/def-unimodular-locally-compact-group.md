---
id: def-unimodular-locally-compact-group
kind: definition
title: "Unimodular locally compact group"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-modular-function-of-a-locally-compact-group]
justified_by: []
aliases: [def-unimodular-group]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§§30A–30B, printed pp. 115–118"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Assume AC and let $G$ be an LCH group with fixed left Haar measure $\mu$ and
modular function $\Delta_G$ ([[def-modular-function-of-a-locally-compact-group]]).
The group $G$ is **unimodular** when
$$\Delta_G(g)=1\qquad\text{for every }g\in G .$$
Equivalently, by the defining identity of the modular function, $G$ is
unimodular exactly when the fixed left Haar measure $\mu$ satisfies
$$\int_G f(xg)\,d\mu(x)=\int_G f\,d\mu(x)\qquad(f\in C_c(G),\ g\in G),$$
that is, exactly when $\mu$ is right invariant and hence is also a right Haar
measure. Unimodularity is a property of the group alone, because the modular
function does not depend on the normalisation of $\mu$.

## Remarks

- **Right invariance is the same condition.** A left Haar measure $\mu$ is right
  invariant precisely when $c(g)=1$ for all $g$, since $c(g)$ was defined as the
  unique scalar with $\int f(xg)\,d\mu=c(g)\int f\,d\mu$. Thus the group is
  unimodular exactly when some, equivalently every, left Haar measure is right
  invariant.
- **Choice cost.** The equivalence above is a rewriting of the defining identity
  and needs no selection; the existence of $\mu$, and with it of $\Delta_G$, is
  what carries AC, through the declared dependency.
- **Naming.** A nonunimodular group is one with $\Delta_G\not\equiv1$, and a
  left Haar measure of a nonunimodular group is never right invariant. The
  companion page exhibits the positive affine group as such an example.

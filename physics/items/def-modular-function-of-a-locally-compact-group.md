---
id: def-modular-function-of-a-locally-compact-group
kind: definition
title: "Modular function of a locally compact group"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-right-translation-scales-left-haar-measure, def-left-haar-integral-and-left-haar-measure, def-axiom-of-choice]
justified_by: []
aliases: [def-modular-function]
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§§5.2–5.3 and Lemma 5.5.2, printed pp. 212–230, 238–239"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Assume AC, let $G$ be an LCH group and fix a left Haar measure $\mu$ on $G$
([[def-left-haar-integral-and-left-haar-measure]]). By
[[lem-right-translation-scales-left-haar-measure]] there is, for every $g\in G$,
exactly one positive real number $c(g)$ with
$$\int_G f(xg)\,d\mu(x)=c(g)\int_G f\,d\mu(x)\qquad(f\in C_c(G)).$$
The **modular function** (also **modulus**) of $G$ is the function
$$\Delta_G:G\longrightarrow\mathbb R_{>0},\qquad \Delta_G(g):=c(g^{-1}),$$
characterised by the displayed identity in the equivalent form
$$\int_G f(xg^{-1})\,d\mu(x)=\Delta_G(g)\int_G f\,d\mu(x)\qquad(f\in C_c(G),\ g\in G).$$
Thus the convention fixed here is that of the source quoted below: a right
translate by $g^{-1}$ scales the left Haar integral by $\Delta_G(g)$. The
companion page computes $\Delta_G(a,b)=a^{-1}$ for the positive affine group.

## Remarks

- **Well-definedness.** The definition makes no selection: for each $g$ the
  scalar $c(g)$ is specified by a property that
  [[lem-right-translation-scales-left-haar-measure]] proves to hold for exactly
  one positive real number, and $\Delta_G$ is then the composite of $c$ with
  inversion. AC enters only through the suppliers of that lemma, namely Haar
  existence and uniqueness of left Haar measures up to scale, and is declared as
  a dependency.
- **Independence of the normalisation.** If $\mu'=\lambda\mu$ with $\lambda>0$
  is another left Haar measure, then multiplying both sides of the defining
  identity by $\lambda$ shows that $c$, hence $\Delta_G$, is unchanged. In
  particular the modular function depends on the group and not on the chosen
  Haar measure.
- **Borel-level form.** The scaling identity holds for every nonnegative Borel
  function and every $\mu$-integrable complex function, since the translate of
  $\mu$ is the Radon measure $c(g)\mu$ and integrals of nonnegative Borel
  functions are determined by their measure. This form is used throughout the
  page.
- **Convention comparison.** Sources working with right Haar measures obtain the
  reciprocal function; the affine example on the companion page records the
  resulting numerical convention $\Delta_G(a,b)=a^{-1}$ used on this page.

---
id: def-involution-on-l1-of-a-group
kind: definition
title: "Involution on L1 of a locally compact group"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-modular-function-of-a-locally-compact-group, thm-the-modular-function-is-a-continuous-homomorphism, lem-haar-change-of-variables-under-inversion, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, def-complex-haar-lp-spaces-and-compactly-supported-functions, lem-topological-group-translations-and-inversion, cor-continuous-functions-are-borel-measurable, def-axiom-of-choice]
justified_by: []
forward_refs: [cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31A–31E, printed pp. 119–125"
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Assume AC. Let $G$ be an LCH group with a fixed left Haar measure $\mu$, let
$\Delta_G$ be the modular function of $G$
([[def-modular-function-of-a-locally-compact-group]]), and write
$L^1(G):=L^1(G,\mu;\mathbb C)$ with norm $\|\cdot\|_1$
([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]). For a
complex-valued function $f$ on $G$ put
$$f^{*}(x):=\Delta_G(x^{-1})\,\overline{f(x^{-1})}\qquad(x\in G),$$
and define the **involution** of $L^1(G)$ to be the map $f\mapsto f^{*}$ that
assigns to the class of $f$ the class of $f^{*}$.

Thus the involution is the composition of inversion, complex conjugation and
multiplication by the continuous positive function $\Delta_G\circ\operatorname{inv}$, where
$\operatorname{inv}(x)=x^{-1}$. On a unimodular group $\Delta_G\equiv1$
([[def-unimodular-locally-compact-group]]) and the involution reduces to the
naive inversion $f^{*}(x)=\overline{f(x^{-1})}$.

**Well-definedness.** The map $\operatorname{inv}$ is a homeomorphism of $G$
([[lem-topological-group-translations-and-inversion]]), so $\operatorname{inv}$ and its
inverse carry Borel sets to Borel sets and a Borel function $f$ has $f\circ\operatorname{inv}$
Borel; $\Delta_G\circ\operatorname{inv}$ is continuous, hence Borel
([[thm-the-modular-function-is-a-continuous-homomorphism]],
[[cor-continuous-functions-are-borel-measurable]]), and complex conjugation is
continuous. So $f^{*}$ is measurable whenever $f$ is. Integrability and norm:
the change of variables under inversion
([[lem-haar-change-of-variables-under-inversion]]) applied to the nonnegative
Borel function $H(t):=\Delta_G(t)|f(t)|$ gives
$$\int_G|f^{*}|\,d\mu=\int_GH(x^{-1})\,d\mu(x)=\int_G\Delta_G(x^{-1})H(x)\,d\mu(x)=\int_G|f|\,d\mu<\infty ,$$
because $\Delta_G(x^{-1})\Delta_G(x)=1$,
so $f^{*}$ is $\mu$-integrable with $\|f^{*}\|_1=\|f\|_1$. Independence of the
representative: applying the same identity to the indicator of a Borel set $E$
gives $\mu(E^{-1})=\int_E\Delta_G(x^{-1})\,d\mu(x)$, and the density
$\Delta_G\circ\operatorname{inv}$ is strictly positive, so $\mu(E^{-1})=0$ exactly when
$\mu(E)=0$; hence $f=0$ a.e. implies $f^{*}=0$ a.e., and two representatives of
one class of $L^1(G)$ give two representatives of one class. The assignment is
therefore a well-defined map $L^1(G)\to L^1(G)$.

## Remarks

**Normalisation.** The factor $\Delta_G(x^{-1})$ is the one that makes the
involution isometric, $\|f^{*}\|_1=\|f\|_1$, and later makes it reverse
convolution, $(f\ast g)^{*}=g^{*}\ast f^{*}$
([[lem-the-l1-involution-is-isometric-and-reverses-convolution]]); without it
the map $f\mapsto\overline{f(x^{-1})}$ is not isometric on a nonunimodular group
([[cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group]]).

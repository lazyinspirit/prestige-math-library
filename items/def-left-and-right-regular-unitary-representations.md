---
id: def-left-and-right-regular-unitary-representations
kind: definition
title: "Left and right regular unitary representations of an LCH group"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-haar-translations-are-strongly-continuous-on-lp-one-and-two, def-modular-function-of-a-locally-compact-group, thm-the-modular-function-is-a-continuous-homomorphism, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, def-complex-haar-lp-spaces-and-compactly-supported-functions, def-complex-l-two-inner-product, def-continuous-and-unitary-representation-of-a-compact-lie-group, def-hilbert-space, def-left-haar-integral-and-left-haar-measure, lem-right-translation-scales-left-haar-measure, def-linear-isometry-and-orthogonal-or-unitary-operator, def-axiom-of-choice]
justified_by: []
aliases: []
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
  precheck: n/a
---

## Definition

Assume AC. Let $G$ be an LCH group with a fixed left Haar measure $\mu$, let
$\Delta_G$ be the modular function of $G$
([[def-modular-function-of-a-locally-compact-group]]), and let $L^2(G)$ be the
complex space $L^2(G,\mu;\mathbb C)$ with norm $\|\cdot\|_2$ and inner product
$\langle\xi,\eta\rangle=\int_G\xi\overline{\eta}\,d\mu$
([[def-complex-haar-lp-spaces-and-compactly-supported-functions]],
[[def-complex-l-two-inner-product]]). For $g\in G$ and $\xi\in L^2(G)$ define
classes by
$$\lambda(g)\xi(x):=\xi(g^{-1}x),\qquad \rho(g)\xi(x):=\Delta_G(g)^{1/2}\xi(xg)\qquad(x\in G).$$
The assignment $\lambda$ is the **left regular representation** of $G$ and
$\rho$ is the (modularly corrected) **right regular representation**.

**Well-definedness and basic properties.** Both formulas are representative
independent: for a Borel set $E$ left invariance gives $\mu(g^{-1}E)=\mu(E)$
and the right-translation scaling
$\int_GF(xg)\,d\mu(x)=c(g)\int_GF\,d\mu(x)$ with $c(g)=\Delta_G(g^{-1})>0$
([[def-left-haar-integral-and-left-haar-measure]],
[[lem-right-translation-scales-left-haar-measure]]) gives $\mu(Eg)=0$ exactly
when $\mu(E)=0$; hence $\xi=\xi'$ a.e. implies $\lambda(g)\xi=\lambda(g)\xi'$
a.e. and $\rho(g)\xi=\rho(g)\xi'$ a.e. Both formulas are complex-linear in
$\xi$ pointwise, and both preserve the norm,
$$\|\lambda(g)\xi\|_2=\|\xi\|_2,\qquad \|\rho(g)\xi\|_2^2=\int_G\Delta_G(g)|\xi(xg)|^2\,d\mu(x) =\Delta_G(g)\Delta_G(g^{-1})\|\xi\|_2^2=\|\xi\|_2^2,$$
using $\Delta_G(g)\Delta_G(g^{-1})=1$
([[thm-the-modular-function-is-a-continuous-homomorphism]]); so each
$\lambda(g)$ and $\rho(g)$ is a linear isometry of $L^2(G)$. The group laws
hold: $\lambda(e)=\rho(e)=\mathrm{id}$,
$\lambda(g)\lambda(h)=\lambda(gh)$ and $\rho(g)\rho(h)=\rho(gh)$ because
$\Delta_G$ is multiplicative and $\Delta_G>0$, and consequently
$\lambda(g)^{-1}=\lambda(g^{-1})$ and $\rho(g)^{-1}=\rho(g^{-1})$. Each
$\lambda(g)$ and $\rho(g)$ is therefore an invertible linear isometry of the
Hilbert space $L^2(G)$ ([[def-hilbert-space]]), and $g\mapsto\lambda(g)$,
$g\mapsto\rho(g)$ are group homomorphisms from $G$ into the group of such
operators.

**Unitary representations.** In the terminology of
[[def-continuous-and-unitary-representation-of-a-compact-lie-group]], a
representation of $G$ on a complex Hilbert space $H$ is a group homomorphism
$\pi:G\to U(H)$ into the group $U(H)$ of unitary operators on $H$ satisfying **strong continuity**: $g\mapsto\pi(g)\xi$ is continuous at $e$ for every
$\xi\in H$ (equivalently at every point of $G$). On an infinite-dimensional
$H$, *unitary operator* means an invertible linear isometry, so that the
invertible isometries $\lambda(g),\rho(g)$ above are its unitary operators;
this is the usage of
[[def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group]],
and the finite-dimensional normal form recorded in
[[def-linear-isometry-and-orthogonal-or-unitary-operator]] is not used here.
The strong continuity of both homomorphisms follows from
[[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]:
its $p=2$ left translate is exactly $\lambda(g)$, and its modular right
translate is exactly $\rho(g)$. Its AC hypothesis is assumed here. Thus
both assignments are unitary representations in this terminology.

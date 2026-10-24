---
id: def-cg-canonical-reflection-homomorphism
kind: definition
title: "The canonical reflection homomorphism, roots, reflections, and the positive cone"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 3
deps: [def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-hh-coxeter-matrix-word-group-and-length, def-group-homomorphism, def-linear-map, def-linear-isomorphism-and-invertible-linear-map, def-vector-space-of-linear-maps, lem-composition-and-identity-linear-maps, lem-monoid-units-form-a-group, def-linear-combination-and-span]
justified_by: [lem-cg-reflection-representation-descends-and-root-norms]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press; author's full institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "\u00a76.12, printed pp. 117\u2013118: Corollary 6.12.4 and Definition 6.12.5, the extension of $s_i\\mapsto\\rho_i$ to the canonical representation $\\rho:W\\to\\mathrm{GL}(\\mathbb R^I)$"
    - title: "Anders Bj\u00f6rner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "\u00a74.2, printed p. 94: Theorem 4.2.2, the unique extension of $s\\mapsto\\sigma_s$ to $W$; (4.17)\u2013(4.18) for the action notation"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "\u00a71.3, printed p. 11: Proposition 1.3(a), the unique homomorphism $\\sigma:W\\to\\mathrm{GL}(E)$ with $\\sigma(s)=\\sigma_s$"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $S$, $m$, $V$, $B$ be as in [[def-cg-real-coxeter-form-and-reflection]], let $W$ be the presented Coxeter group of [[def-hh-coxeter-matrix-word-group-and-length]] with its universal property, and put $r_s:=r_{e_s}$ for $s\in S$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]]).

**(1)** Write $\mathrm{GL}(V)$ for the group of invertible linear maps $V\to V$, the unit group of the monoid of linear endomorphisms under composition ([[def-linear-isomorphism-and-invertible-linear-map]], [[def-vector-space-of-linear-maps]], [[lem-composition-and-identity-linear-maps]], [[lem-monoid-units-form-a-group]]). The **canonical reflection homomorphism** is the group homomorphism $\rho:W\to\mathrm{GL}(V)$ ([[def-group-homomorphism]]) that satisfies $\rho(s)=r_s$ for every $s\in S$; its existence and uniqueness are established by [[lem-cg-reflection-representation-descends-and-root-norms]], which is this definition's recorded justifier. For $w\in W$ and $v\in V$ write $\rho(w)v$ for the image.

**(2)** The **root system** of the pair is $\Phi:=\{\rho(w)e_s:w\in W,\ s\in S\}\subset V$; its elements are the **roots**. The set of **reflections** of $W$ is $T:=\{wsw^{-1}:w\in W,\ s\in S\}\subset W$; that $\rho(wsw^{-1})$ is the reflection $r_{\rho(w)e_s}$ and that every root is $B$-non-isotropic are proved in [[lem-cg-reflection-representation-descends-and-root-norms]].

**(3)** The **positive cone** is $V_+:=\{\sum_{s\in S}\lambda_se_s:\lambda_s\in\mathbb R,\ \lambda_s\ge0\}$ and the **negative cone** is $-V_+$ ([[def-linear-combination-and-span]]).

No positivity of $\rho(w)e_s$ for fixed $w$, no faithfulness or injectivity of $\rho$, no discreteness and no nondegeneracy of $B$ is asserted by this definition.

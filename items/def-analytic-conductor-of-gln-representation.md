---
dependency_level: 4
id: def-analytic-conductor-of-gln-representation
kind: definition
title: "Analytic Conductor of a GL(n) Representation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-adelic-gln-automorphic-representation
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
  - lem-nontrivial-adelic-additive-characters-have-nontrivial-local-components
  - thm-generic-local-gln-representation-has-congruence-newvectors
  - def-smooth-generic-local-gln-representation-and-mirabolic-induction
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Akshay Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity, §2.12.2"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
    - title: "Philippe Michel and Akshay Venkatesh, The Subconvexity Problem for GL2, §3.1.8"
      url: "https://arxiv.org/pdf/0903.3591v2"
    - title: "H. Jacquet, I. I. Piatetski-Shapiro, and J. Shalika, Conducteur des représentations du groupe linéaire, Math. Ann. 256 (1981), §§4–5"
      url: "https://lesesvre.perso.math.cnrs.fr/newforms-references/jpss.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $F$ be a number field and let $\pi=\bigotimes'_v\pi_v$ be a unitary cuspidal generic automorphic representation of $\mathrm{GL}_n(\mathbb A_F)$, with unitary, cuspidal, and generic as defined for adelic automorphic representations and with local standard factors as defined for standard L-functions; at each finite place $\pi_v$ denotes its smooth local representation. At a finite place $v$, let $\mathcal O_v$ be the ring of integers, $\mathfrak p_v$ its maximal ideal, and $q_v=|\mathcal O_v/\mathfrak p_v|$. Set $K_1(\mathfrak p_v^0)=\mathrm{GL}_n(\mathcal O_v)$ and, for $m\ge1$, let $K_1(\mathfrak p_v^m)$ be the subgroup of $\mathrm{GL}_n(\mathcal O_v)$ whose bottom row is congruent to $(0,\ldots,0,1)$ modulo $\mathfrak p_v^m$. For each finite $v$, put $S_v(\pi)=\{m\in\mathbb Z_{\ge0}:\pi_v\text{ has a nonzero }K_1(\mathfrak p_v^m)\text{-fixed vector}\}$. Genericity makes this set nonempty. Define $m_v(\pi)=\min S_v(\pi)$ and $C_v(\pi)=q_v^{m_v(\pi)}$. At all but finitely many finite places $\pi_v$ is unramified and $m_v(\pi)=0$.

At an archimedean place $v$, write $L_v(s,\pi_v)=\prod_{j=1}^n\Gamma_v(s+\mu_{j,v})$ using the local gamma factors and archimedean parameters from the standard L-function definition, and set $\deg(v)=[F_v:\mathbb R]$ and $C_v(\pi)=\prod_{j=1}^n(1+|\mu_{j,v}|)^{\deg(v)}$. The analytic conductor is

$$C(\pi)=\prod_{v\text{ finite}}q_v^{m_v(\pi)}\prod_{v\text{ archimedean}}\prod_{j=1}^n(1+|\mu_{j,v}|)^{\deg(v)}.$$

## Definition references

[[lem-nontrivial-adelic-additive-characters-have-nontrivial-local-components]]

[[thm-generic-local-gln-representation-has-congruence-newvectors]]

[Akshay Venkatesh, *Sparse Equidistribution Problems, Period Bounds and Subconvexity*, §2.12.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

[Philippe Michel and Akshay Venkatesh, *The Subconvexity Problem for GL2*, §3.1.8 (the local formula there is for ranks 1 and 2)](https://arxiv.org/pdf/0903.3591v2)

[H. Jacquet, I. I. Piatetski-Shapiro, and J. Shalika, *Conducteur des représentations du groupe linéaire*, §§4–5](https://lesesvre.perso.math.cnrs.fr/newforms-references/jpss.pdf)

## Facts & Assumptions

[F1] The global additive character used in genericity has nontrivial locally constant finite-place components by [[lem-nontrivial-adelic-additive-characters-have-nontrivial-local-components]]. The global Whittaker functional is continuous in the smooth tensor topology and nonzero. If it vanished on every pure tensor, linearity would make it vanish on their span and continuity on its closure, the whole smooth tensor realization. Thus it is nonzero on some pure tensor. Fixing all tensor factors except the $v$-factor gives a nonzero local Whittaker functional for $\pi_v$. Thus each smooth finite component is locally generic in the sense of [[def-smooth-generic-local-gln-representation-and-mirabolic-induction]].

[F2] For those components, [[thm-generic-local-gln-representation-has-congruence-newvectors]] proves $S_v(\pi)\ne\varnothing$; well-ordering gives its minimum. The restricted-tensor-product convention in [[def-adelic-gln-automorphic-representation]] gives $\pi_v^{\mathrm{GL}_n(\mathcal O_v)}\ne0$ almost everywhere. Consequently $m_v(\pi)=0$ almost everywhere and the displayed finite-place product has finitely many non-unit factors.

## Remarks

The finite-place definition uses the least congruence fixed-vector exponent. The local existence proof does not assert uniqueness at that level or identification with a Rankin–Selberg epsilon exponent. Those are separate stronger newform statements.

The standard-factor definition supplies the notation for the archimedean parameters. Its invocation of local Langlands parameters still requires actual proof suppliers for those assignments: the planned p-adic correspondence is on the separate local Weil–Deligne and Langlands page, and does not supply an archimedean correspondence. The local congruence-vector proof above does not certify either assignment or the complete standard-factor definition.

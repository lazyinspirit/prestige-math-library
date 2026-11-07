---
id: lem-smith-induced-frobenius-orbit-evaluation
kind: lemma
title: "Frobenius-orbit evaluation of an induced Kummer section"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-kummer-cohomology-of-roots-of-unity, thm-shapiro-lemma-for-group-cohomology, lem-smith-kummer-section-from-approximate-generator]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the Kummer-section and
  continuous-cohomology interfaces. The orbit decomposition is finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I, Proposition 3.22"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, Proposition 3.22, the off-diagonal double-coset formula"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$, $e$, $V_0$, a finite place $q\notin V_0$, its decomposition field $E$, and an approximate generator $\alpha\in E^\times$ satisfy the hypotheses of the natural Kummer-section construction. Let $M$ be a finite $\operatorname{Gal}(K/F)$-module killed by $e$, let $m\in\operatorname{Hom}(\mu_e,M)^{\operatorname{Gal}(K/E)}$, and let $B_{q,M}(m)$ be the constructed section value.

Choose a finite place $p\notin V_0$ distinct from $q$, and an arithmetic Frobenius lift $\sigma\in G_F$ at $p$. Let $T=G_F/G_E$ with its left $\sigma$-action. For each orbit $O\subseteq T$, choose a representative $t_O\in G_F$ and write $d_O=|O|$ and $h_O=t_O^{-1}\sigma^{d_O}t_O\in G_E$. Let $\psi:G_E\to\mu_e$ be any continuous Kummer cocycle for $\alpha$. Then the section class is unramified at $p$ and its Frobenius value in the coinvariant group $M/(\sigma-1)M$ is
$$B_{q,M}(m)(\sigma)=\sum_O\overline{\,t_O\,m\bigl(\psi(h_O)\bigr)\,}.$$
Each summand is independent of the Kummer cocycle representative and of the choice of orbit representative after passing to coinvariants. The orbits are equivalently the double cosets $\langle\sigma\rangle\backslash G_F/G_E$. This is an off-diagonal evaluation; it does not assert the diagonal spin identity or the analytic distribution of the symbols.

## Statement references

[[lem-kummer-cohomology-of-roots-of-unity]]

[[thm-shapiro-lemma-for-group-cohomology]]

[[lem-smith-kummer-section-from-approximate-generator]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.22](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the source Kummer-section data, $M$, $m$, the distinct place $p$, and the choices in the Statement.

[F1] The Kummer-section construction represents $m$ by an equivariant map from $U=\operatorname{Ind}_{G_E}^{G_F}\mu_e$ to $M$ and applies it to the induced Kummer class of $\alpha$. [[lem-smith-kummer-section-from-approximate-generator]]

[F2] Finite-index Shapiro identifies the induced class with the original Kummer class, naturally under local restriction. [[thm-shapiro-lemma-for-group-cohomology]] [[lem-kummer-cohomology-of-roots-of-unity]]

## Proof

1.1 Put $U=\operatorname{Ind}_{G_E}^{G_F}\mu_e$ and let $\rho_m:U\to M$ be the equivariant map in [F1], so $\rho_m(t\otimes z)=t\,m(z)$. Because $p\ne q$ and $p\notin V_0$, the valuations of $\alpha$ at every prime of $E$ above $p$ are multiples of $e$. The Kummer class is therefore unramified at those primes; by local Shapiro its induced class is unramified at $p$. Hence its value on $\sigma$ represents an element of $U/(\sigma-1)U$, and applying $\rho_m$ gives the section value in $M/(\sigma-1)M$. [F1, F2, given, algebra]

1.2 For a finite $\sigma$-orbit $O$ of length $d$ in $T$, write $U_O$ for the sum of its induced components and choose a component $t\otimes\mu_e$. Projection of the cocycle identity gives a map from $U_O/(\sigma-1)U_O$ to that component modulo $\sigma^d-1$: if $c$ is a cocycle, send the class of $c(\sigma)$ to the $t$-component of $$c(\sigma^d)=\sum_{j=0}^{d-1}\sigma^j c(\sigma).$$ This is an isomorphism. Indeed, for $c(\sigma)=(\sigma-1)u$ the displayed sum telescopes to $(\sigma^d-1)u$, while every component class is obtained by a vector supported in the chosen component; moving the other components around the orbit proves injectivity. [F2, given, algebra]

2.1 By the finite-index Shapiro cochain construction, the chosen component of the induced cocycle at $\sigma^{d_O}$ is $t_O\otimes\psi(t_O^{-1}\sigma^{d_O}t_O)$, modulo a coboundary in that component. Step 1.2 therefore identifies the induced Frobenius class with the sum of these orbit-component classes. Applying $\rho_m$ and using step 1.1 gives the displayed formula. A different cocycle or coset representative changes the terms only by differences in $(\sigma-1)M$; the orbit sum is the intrinsic cohomology class. The orbits are exactly the left-cyclic/right-$G_E$ double cosets. [F1, F2, step 1.1, step 1.2, algebra] ∎

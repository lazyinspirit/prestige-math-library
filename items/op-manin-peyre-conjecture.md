---
id: op-manin-peyre-conjecture
kind: open-problem
title: Manin–Peyre counting conjecture for rational points on smooth Fano varieties
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-smooth-fano-variety-over-number-field
  - def-picard-rank-over-number-field
  - def-geometric-picard-rank
  - def-effective-cone-of-divisors
  - def-adelic-metrization-and-anticanonical-height
  - def-peyre-admissibility-conditions
  - def-peyre-alpha-factor
  - def-peyre-beta-factor
  - def-peyre-tamagawa-measure
  - def-peyre-leading-constant
  - def-thin-set-of-rational-points
  - lem-peyre-alpha-integral-finite
  - thm-peyre-beta-factor-finite
  - lem-peyre-local-picard-l-factor-well-defined
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa
      url: https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf
      locator: §§3–5, especially Definitions 3.1–3.10 and 4.1–4.8 and the thin-set refinement in §5.
    - title: Valentin Blomer, Jörg Brüdern, Ulrich Derenthal and Giuliano Gagliardi, The Manin–Peyre conjecture for smooth spherical Fano varieties of semisimple rank one
      url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/235A5BAB435DC8519686A76FAD2EB686/S2050509423001238a.pdf/the-manin-peyre-conjecture-for-smooth-spherical-fano-varieties-of-semisimple-rank-one.pdf
      locator: §1.1, the thin-set correction; §9.2, the theorem for the stated special family.
---

## Open problem

Let $X/\mathbb Q$ be a smooth projective geometrically integral Fano variety of dimension $d\ge1$ with Zariski-dense $X(\mathbb Q)$. Here Fano means that the anticanonical line bundle $-K_X$ is ample. Write $\rho=\operatorname{rank}\operatorname{Pic}(X)\ge1$ and $\overline X=X\times_{\mathbb Q}\overline{\mathbb Q}$. Assume
$$H^1(\overline X,\mathcal O_{\overline X})=H^2(\overline X,\mathcal O_{\overline X})=0,$$
that $\operatorname{Pic}(X)$ and $\operatorname{Pic}(\overline X)$ are finite-rank free abelian groups, and that the closed effective cone $C_{\mathrm{eff}}(X)$ in $V=\operatorname{Pic}(X)\otimes_{\mathbb Z}\mathbb R$ spans $V$, is pointed and finitely generated, and has full-dimensional dual cone
$$C_{\mathrm{eff}}(X)^\vee=\{\ell\in V^*:\ell(c)\ge0\text{ for every }c\in C_{\mathrm{eff}}(X)\},$$
with $-K_X\in\operatorname{int}(C_{\mathrm{eff}}(X))\subset V$. Thus $-K_X$ is strictly positive on every nonzero element of $C_{\mathrm{eff}}(X)^\vee$; it is not an element of $V^*$. Also assume the cohomological Brauer group $\operatorname{Br}(\overline X)=H^2_{\acute e t}(\overline X,\mathbb G_m)_{\mathrm{tors}}$ is zero. Fix an adelic metric on $-K_X$ and its associated height $H$.

Normalize
$$\alpha(X)=\frac1{(\rho-1)!}\int_{C_{\mathrm{eff}}(X)^\vee}e^{-\langle-K_X,y\rangle}\,dy,$$
where $dy$ gives covolume $1$ to the dual of the base-field Picard lattice. Put
$$\beta(X)=\#H^1_{\mathrm{cts}}(G_{\mathbb Q},\operatorname{Pic}(\overline X)),$$
where $G_{\mathbb Q}=\operatorname{Gal}(\overline{\mathbb Q}/\mathbb Q)$ acts continuously on the discrete geometric Picard lattice; assume this group is finite. For the Tamagawa factor, choose a finite set $S$ containing the archimedean place and all bad places, put $L_S(s,M)=\prod_{v\notin S}L_v(s,M)$ and $\lambda_v=L_v(1,M)$ for good finite $v\notin S$ (with $\lambda_v=1$ for $v\in S$). Let $\omega_{H,v}$ be the local measure from the anticanonical metric. Assume the regularized limit
$$\omega_H=\lim_{s\to1^+}(s-1)^\rho L_S(s,M)|D_{\mathbb Q}|^{-d/2}\prod_v\lambda_v^{-1}\omega_{H,v},\qquad M=\operatorname{Pic}(\overline X),$$
exists as a finite positive measure on the restricted-product adelic points. Set $\tau_H(X)=\omega_H(\overline{X(\mathbb Q)})$, where the closure is in that topology.

A subset $Z\subseteq X(\mathbb Q)$ is **thin** if it is contained in a finite union of sets of either form: the rational points of a proper closed subvariety of $X$, or the image $f(Y(\mathbb Q))$ of a dominant generically finite morphism $f:Y\to X$ of degree at least $2$ for which there is no rational map $s:X\dashrightarrow Y$ such that $f\circ s$ is the identity on a dense open subset of $X$. Prove that there exist a dense Zariski-open subset $U\subseteq X$ and a thin set $Z\subseteq X(\mathbb Q)$ such that, as $B\to\infty$,
$$N_{U\setminus Z,H}(B):=\#\{P\in(U(\mathbb Q)\setminus Z):H(P)\le B\}\sim\alpha(X)\beta(X)\tau_H(X)\,B(\log B)^{\rho-1}.$$

## Open problem references

[[def-smooth-fano-variety-over-number-field]]

[[def-peyre-admissibility-conditions]]

[[def-peyre-alpha-factor]]

[[def-peyre-beta-factor]]

[[def-peyre-tamagawa-measure]]

[[def-peyre-leading-constant]]

[[def-thin-set-of-rational-points]]

[Emmanuel Peyre, *Points de hauteur bornée, topologie adélique et mesures de Tamagawa*, §§3–5](https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf)

[Blomer, Brüdern, Derenthal and Gagliardi, *The Manin–Peyre conjecture for smooth spherical Fano varieties of semisimple rank one*, §1.1 and §9.2](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/235A5BAB435DC8519686A76FAD2EB686/S2050509423001238a.pdf/the-manin-peyre-conjecture-for-smooth-spherical-fano-varieties-of-semisimple-rank-one.pdf)

## Facts & Assumptions

**Given:** $X/\mathbb Q$, its anticanonical adelic metric and height, the base Picard lattice, the geometric Picard lattice, and the regularized adelic measure when it exists.

[F1] The alpha normalization uses the dual of the base-field Picard lattice with covolume $1$ and the integral over the dual effective cone. ([[def-peyre-alpha-factor]])

[F2] The beta factor is the cardinality of continuous $H^1(G_{\mathbb Q},\operatorname{Pic}(X_{\overline{\mathbb Q}}))$; its finiteness is a separate theorem obligation. ([[def-peyre-beta-factor]], [[thm-peyre-beta-factor-finite]])

[F3] The Tamagawa factor is the regularized local product with the discriminant and Picard-$L$-factor normalization, evaluated on the closure of $X(\mathbb Q)$. ([[def-peyre-tamagawa-measure]])

[F4] The thin-set definition consists of proper-closed-subvariety points and images of degree-at-least-two covers without rational sections. ([[def-thin-set-of-rational-points]])

[A1] The current adelic restricted-product interface carries AC and Countable Choice. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-peyre-tamagawa-measure]])

## Status

Peyre's 2003 article presents the general asymptotic as conjectural. BBDG 2024 explains why an unrestricted dense-open count can fail and proves the thin-set form only for its stated smooth spherical Fano family. No 2026 general status survey was consulted. Several local Peyre-definition and finiteness carriers used here are currently escalated; this item is not a theorem supplier.

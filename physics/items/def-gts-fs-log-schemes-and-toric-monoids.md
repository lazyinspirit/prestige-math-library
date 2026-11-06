---
id: def-gts-fs-log-schemes-and-toric-monoids
kind: definition
title: Fine saturated log schemes and toric monoids
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-etale-morphism-schemes
dependency_roles:
  def-etale-morphism-schemes: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Arthur Ogus, Lectures on Logarithmic Algebraic Geometry
      url: https://math.uchicago.edu/~drinfeld/p-adic_periods/Ogus_logbook.pdf
      locator: Chapter I on integral/saturated monoids; Chapter II §1.1 (including morphisms), Example 1.2.7, and §2.1 on log structures, log points and charts
    - title: Mark Gross and Bernd Siebert, Mirror Symmetry via Logarithmic Degeneration Data I
      url: https://arxiv.org/pdf/math/0309070v3
      locator: §3.1, Definition 3.1 and Example 3.2, log structures, morphisms and divisorial data
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A commutative monoid is written additively, with identity $0$. It is integral if its map to its group completion $P^{\mathrm{gp}}$ is injective, fine if it is integral and finitely generated, saturated if $x\in P^{\mathrm{gp}}$ and $r x\in P$ for an integer $r>0$ imply $x\in P$, and sharp if its only invertible element is $0$. Here a toric monoid means $Q=\sigma\cap M$ for a pointed rational polyhedral cone $\sigma\subset M_{\mathbb R}$ and a lattice $M$; it is fine, saturated and sharp. This fixes the convention for this page.

A log structure on a scheme $X$ is a sheaf of commutative monoids $M_X$ on the étale site, together with a monoid map $\alpha:M_X\to\mathcal O_X$ (where multiplication is used on $\mathcal O_X$), for which $\alpha^{-1}(\mathcal O_X^\times)\to\mathcal O_X^\times$ is an isomorphism. Its characteristic or ghost monoid at a geometric point $\bar x$ is $\overline M_{X,\bar x}=M_{X,\bar x}/\mathcal O_{X,\bar x}^{\times}$. A chart by a monoid $P$ is a monoid map $P\to\Gamma(U,\mathcal O_U)$ whose associated log structure is $M_X|_U$. A log scheme is fine and saturated (fs) if étale locally it has a chart by an fs monoid.

A morphism of log schemes $f:(X,M_X,\alpha_X)\to(Y,M_Y,\alpha_Y)$ consists of a scheme morphism $f:X\to Y$ and a homomorphism of sheaves of monoids $f^\flat:f^{-1}M_Y\to M_X$ satisfying $\alpha_X\circ f^\flat=f^\sharp\circ f^{-1}\alpha_Y$. Composition uses the composed scheme maps and the induced composite monoid maps. An isomorphism is a morphism with a two-sided inverse in this category.

For a sharp toric monoid $Q$ and field $k$, the log point $\operatorname{Spec}(Q\to k)$ has underlying scheme $\operatorname{Spec}k$; its chart sends $0$ to $1$ and every nonzero $q\in Q$ to $0\in k$. These definitions do not assert that any given scheme admits a log structure or that a morphism is log smooth.

## Definition references

[[def-gts-log-smooth-saturated-morphism-and-log-canonical-line]]

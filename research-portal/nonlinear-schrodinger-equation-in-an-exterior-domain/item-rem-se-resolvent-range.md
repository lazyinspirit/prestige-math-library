---
title: Resolvent frequencies, cutoff signs and higher compatibility
status: published
research_item: rem-se-resolvent-range
dependency_level: 9
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 6: ` paragraph following (2.1) `; PDF p. 7: ` opening continuation `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [prop-se-2-1](item-prop-se-2-1)
- [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent)
- [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)
- [lem-se-cutoff-resolvent-negative-extension](item-lem-se-cutoff-resolvent-negative-extension)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls)
- [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain)
- [math:lem-sobolev-trace-agrees-with-continuous-boundary-values](https://alphabetamath.cc/item/lem-sobolev-trace-agrees-with-continuous-boundary-values)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)


## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and assume that $\Theta$ is nontrapping: every generalized reflected ray leaves every compact set in finite forward time. Let $\Delta_D$ be the Dirichlet Laplacian and $H_D^s(\Omega)$ the spectral scale of $I-\Delta_D$. For real $\chi\in C_c^\infty(\mathbb R^n)$ write $K_z=\chi(-\Delta_D-z)^{-1}\chi$ whenever the resolvent exists.

The imported high-frequency $L^2$ estimate has norm $O(|\lambda|^{-1})$ for $|\lambda|\ge1$; the low-frequency $L^2$ estimate is uniform for $|\lambda|\le1$. Both concern $z=(\lambda\pm i\epsilon)^2$ with sufficiently small positive $\epsilon$. The cited high-frequency result uses nontrapping, while the cited low-frequency result applies in every dimension $n\ge2$ with a nonempty Dirichlet obstacle. For $-1\le s\le1$, the uniform bound $K_z:H_D^s\to H_D^{s+1}$ extends from nonnegative cutoffs to arbitrary real cutoffs by surrounding their support with a nonnegative cutoff equal to one there. The same uniform bound holds for $-2\le s\le-1$ by the negative-order endpoint and interpolation.

The article restricts its displayed estimate to $-1\le s\le1$, the range used at that point. For $s\ge3$, $H_D^{s+1}$ entails further boundary compatibility: in particular, $u\in H_D^4$ implies that the trace of $\Delta u$ vanishes on the obstacle boundary. A general smooth cutoff need not preserve this condition, even for a smooth compactly supported $u\in H_D^4$.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The geometry and nontrapping convention are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping). The shifted Dirichlet scale satisfies $H_D^4=D((I-\Delta_D)^2)$, and $D(\Delta_D)=H^2(\Omega)\cap H_0^1(\Omega)$ [def-se-dirichlet-scale](item-def-se-dirichlet-scale). These suppliers retain the assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] Under these hypotheses, the imported input gives the high- and low-frequency $L^2$ bounds for nonnegative smooth compactly supported cutoffs and the uniform $H_D^s\to H_D^{s+1}$ bound for $-1\le s\le1$ [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent). Its source records the role of nontrapping at high frequency and the nonempty obstacle at low frequency.

[F3] Smooth compactly supported multipliers are bounded on $H_D^t$ for $-2\le t\le2$ [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality). A smooth nonnegative function equal to one on any prescribed compact set exists by the concentric-ball bump construction [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls). The resulting real-cutoff estimate is also stated in [prop-se-2-1](item-prop-se-2-1).

[F4] For real smooth compactly supported cutoffs, the uniform endpoint bound $K_z:H_D^{-2}\to H_D^{-1}$ follows by pivot duality from the positive-order estimate [lem-se-cutoff-resolvent-negative-extension](item-lem-se-cutoff-resolvent-negative-extension). The spectral-scale operator interpolation theorem applies to consistent bounded endpoint maps at arbitrary real scale indices [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F5] On a bounded $C^1$ domain the $H^1$ trace is bounded and agrees with classical restriction for continuous Sobolev functions [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain) [math:lem-sobolev-trace-agrees-with-continuous-boundary-values](https://alphabetamath.cc/item/lem-sobolev-trace-agrees-with-continuous-boundary-values). Here $H_0^1(\Omega)$ is the $H^1(\Omega)$ norm closure of $C_c^\infty(\Omega;\mathbb C)$ [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure); its Countable Choice hypothesis follows from the assumed Axiom of Choice. In particular, an $H_0^1$ function has zero trace by approximation with compactly supported smooth functions.

## Proof

[F1] The geometry and nontrapping convention are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping). The shifted Dirichlet scale satisfies $H_D^4=D((I-\Delta_D)^2)$, and $D(\Delta_D)=H^2(\Omega)\cap H_0^1(\Omega)$ [def-se-dirichlet-scale](item-def-se-dirichlet-scale). These suppliers retain the assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] Under these hypotheses, the imported input gives the high- and low-frequency $L^2$ bounds for nonnegative smooth compactly supported cutoffs and the uniform $H_D^s\to H_D^{s+1}$ bound for $-1\le s\le1$ [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent). Its source records the role of nontrapping at high frequency and the nonempty obstacle at low frequency.

[F3] Smooth compactly supported multipliers are bounded on $H_D^t$ for $-2\le t\le2$ [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality). A smooth nonnegative function equal to one on any prescribed compact set exists by the concentric-ball bump construction [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls). The resulting real-cutoff estimate is also stated in [prop-se-2-1](item-prop-se-2-1).

[F4] For real smooth compactly supported cutoffs, the uniform endpoint bound $K_z:H_D^{-2}\to H_D^{-1}$ follows by pivot duality from the positive-order estimate [lem-se-cutoff-resolvent-negative-extension](item-lem-se-cutoff-resolvent-negative-extension). The spectral-scale operator interpolation theorem applies to consistent bounded endpoint maps at arbitrary real scale indices [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F5] On a bounded $C^1$ domain the $H^1$ trace is bounded and agrees with classical restriction for continuous Sobolev functions [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain) [math:lem-sobolev-trace-agrees-with-continuous-boundary-values](https://alphabetamath.cc/item/lem-sobolev-trace-agrees-with-continuous-boundary-values). Here $H_0^1(\Omega)$ is the $H^1(\Omega)$ norm closure of $C_c^\infty(\Omega;\mathbb C)$ [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure); its Countable Choice hypothesis follows from the assumed Axiom of Choice. In particular, an $H_0^1$ function has zero trace by approximation with compactly supported smooth functions.



**Given:** The obstacle, scale, cutoff and parameters in the Statement.

**Goal:** Explain the frequency and cutoff assertions, the negative extension, and the higher-order compatibility obstruction.

1.1 Choose a nonnegative smooth compactly supported $\rho$ equal to one on $\operatorname{supp}\chi$. Then $\chi\rho=\rho\chi=\chi$. For $-1\le s\le1$, both $s$ and $s+1$ lie in $[-2,2]$. The identity $K_z=M_\chi\,[\rho(-\Delta_D-z)^{-1}\rho]M_\chi$ on $L^2$, the imported nonnegative-cutoff estimate, and the two multiplier bounds give the real-cutoff estimate by bounded extension. The same composition transfers the stated high- and low-frequency $L^2$ bounds, with constants depending on $\chi$ and $\rho$. Their geometric and parameter hypotheses remain those in [F1]–[F2]. [F1, F2, F3, given, choose]

1.2 If $u\in H_D^4$, the domain-of-a-square definition gives $u\in D(\Delta_D)$ and $(I-\Delta_D)u\in D(\Delta_D)$; hence $\Delta_Du\in D(\Delta_D)\subset H_0^1(\Omega)$. Localize near the compact obstacle boundary inside a bounded smooth truncation. Restricting the $C_c^\infty(\Omega;\mathbb C)$ approximants supplied by [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure) and applying continuity of the trace shows that the obstacle-boundary trace of $\Delta u$ is zero. For $s\ge3$, spectral-scale nesting gives $H_D^{s+1}\subset H_D^4$, so the same necessary condition applies. [F1, F5, given]

2.1 The negative endpoint in [F4] is uniform in the same parameters, while step 1.1 supplies the endpoint $H_D^{-1}\to H_D^0$. Both extend the same $L^2$ resolvent expression, and are consistent on the common spectral core. Interpolating the endpoints yields $H_D^s\to H_D^{s+1}$ uniformly for $-2\le s\le-1$. [F4, step 1.1]

3.1 The condition can fail after multiplication. In $\mathbb R^3$ take the closed unit ball as obstacle, set $r=|x|$, and choose a smooth radial function $\eta$ supported in a small annulus about $r=1$ and equal to one near $r=1$. Put $u=\eta(r)(1-r^{-1})$ on $r>1$ and $\chi=\eta(r)(r-1)$, extended smoothly by zero outside that annulus. Both $u$ and $\Delta u$ are smooth and compactly supported up to the boundary and vanish there: near $r=1$, $\Delta(1-r^{-1})=0$. Their zero boundary values give membership in $H_0^1$ by a cutoff in a shrinking boundary collar and the closure definition [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure), while smoothness supplies $H^2$ membership; thus $u,\Delta u\in D(\Delta_D)$ and $u\in H_D^4$. Near the sphere, $\chi u=(r-1)^2/r=r-2+r^{-1}$, whose three-dimensional radial Laplacian is $2/r$; its boundary trace is therefore $2$. By step 1.2, $\chi u\notin H_D^4$. This establishes the claimed obstruction. [F1, F5, step 1.2, construct] ∎

## Source notes

The original article is cited for the remark and its placement after Proposition 2.1, not as proof of the claims. The frequency bounds and their source reading limits are recorded in the independent imported supplier. The negative extension above states the full interval obtained from its endpoint and interpolation; the article defers that extension to its Lemma 4.1.

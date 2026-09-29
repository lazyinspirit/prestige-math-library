---
id: thm-harmonic-measure-conformal-invariance
kind: theorem
title: "Conformal invariance of harmonic measure"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-uniqueness-for-the-bounded-plane-dirichlet-problem
  - def-biholomorphic-map
  - def-complex-domain
  - def-continuous-map-top
  - def-dependent-choice
  - def-harmonic-measure-plane-domain
  - def-homeomorphism-and-open-maps
  - def-radon-measure-on-an-lch-space
  - lem-positive-c-zero-functionals-have-finite-regular-representing-measures
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-harmonic-measure-is-well-defined
sources:
  references:
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 37-39: conformal transport of harmonic measure"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.8, printed p. 171: harmonic measure and conformal maps"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume Dependent Choice. Let $\Omega,\Omega'\subseteq\mathbb C$ be bounded
regular plane domains, in the sense of [[def-harmonic-measure-plane-domain]],
and let $F:\Omega\to\Omega'$ be a biholomorphism
([[def-biholomorphic-map]]) that extends to a homeomorphism
$\overline F:\overline\Omega\to\overline{\Omega'}$
([[def-homeomorphism-and-open-maps]]). Then for every $z\in\Omega$ the
pushforward boundary measure satisfies
$$\overline F_*\,\omega_\Omega^z=\omega_{\Omega'}^{F(z)}$$
on all Borel subsets of $\partial\Omega'$. No pushforward of a boundary measure
is asserted without the closure homeomorphism: the transport is proved by
equality of continuous harmonic extensions and not by a boundary
correspondence alone.

## Facts & Assumptions

**Given:** Bounded plane domains $\Omega,\Omega'$ all of whose boundary points are regular ([[def-complex-domain]], [[def-harmonic-measure-plane-domain]]), a biholomorphism $F:\Omega\to\Omega'$, and a homeomorphism $\overline F:\overline\Omega\to\overline{\Omega'}$ extending $F$; also Dependent Choice ([[def-dependent-choice]]).

[F1] Under Dependent Choice the harmonic measures $\omega_\Omega^z$ and $\omega_{\Omega'}^{F(z)}$ exist and are the unique Radon Borel probability measures on the compact boundaries representing their Perron envelopes ([[thm-harmonic-measure-is-well-defined]]): for continuous data $\psi$ on $\partial\Omega$ and $\varphi$ on $\partial\Omega'$, $H_{\Omega,\psi}(z)=\int\psi\,d\omega_\Omega^z$ and $H_{\Omega',\varphi}(F(z))=\int\varphi\,d\omega_{\Omega'}^{F(z)}$.

[F2] Regularity of every boundary point means $H_{\Omega,\psi}(w)\to\psi(\zeta)$ as $w\to\zeta$ inside $\Omega$, for every $\zeta\in\partial\Omega$ and every continuous $\psi$; hence $H_{\Omega,\psi}$ is continuous on $\overline\Omega$ when set equal to $\psi$ on $\partial\Omega$, and analogously for $\Omega'$. Two continuous functions on $\overline\Omega$, harmonic on $\Omega$, with equal boundary values coincide ([[def-harmonic-measure-plane-domain]], [[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

[F3] Composition with a holomorphic map preserves harmonicity ([[thm-conformal-invariance-of-plane-harmonicity]]), and a homeomorphism between the closures restricting to a bijection $\Omega\to\Omega'$ carries $\partial\Omega$ onto $\partial\Omega'$ ([[def-homeomorphism-and-open-maps]], [[def-continuous-map-top]]).

[F4] Two finite regular Borel measures on a compact space that agree on all continuous functions coincide ([[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]], [[def-radon-measure-on-an-lch-space]]).

## Proof

**Proof technique:** direct.

1.1 The map $\overline F$ is a bijection of the compact sets $\overline\Omega$ and $\overline{\Omega'}$ restricting to the bijection $F:\Omega\to\Omega'$; therefore it maps $\partial\Omega=\overline\Omega\setminus\Omega$ onto $\overline{\Omega'}\setminus\Omega'=\partial\Omega'$, and it is a homeomorphism between the two boundaries. Consequently, for continuous $\varphi:\partial\Omega'\to\mathbb R$ the pullback $\varphi\circ\overline F$ is continuous on $\partial\Omega$, and the pushforward $(\overline F_*\omega_\Omega^z)(E):=\omega_\Omega^z(\overline F^{-1}(E))$ is well defined on Borel subsets of $\partial\Omega'$. [F3, given]

2.1 For continuous $\varphi$ on $\partial\Omega'$ and $\psi:=\varphi\circ\overline F$ on $\partial\Omega$, the function $u:=H_{\Omega',\varphi}\circ F$ is harmonic on $\Omega$ by [F3], since $H_{\Omega',\varphi}$ is harmonic on $\Omega'$, and it extends continuously to $\partial\Omega$ with boundary values $\psi$, because $H_{\Omega',\varphi}$ extends continuously to $\overline{\Omega'}$ with values $\varphi$ by [F2] and $\overline F$ maps $\partial\Omega$ onto $\partial\Omega'$ by step 1.1. [F2, F3, step 1.1]

2.2 The pushforward of step 1.1 represents the same value: by the defining property of $\omega_\Omega^z$ in [F1] and the change of variables defining the pushforward, $$\int_{\partial\Omega'}\varphi\,d(\overline F_*\omega_\Omega^z) =\int_{\partial\Omega}(\varphi\circ\overline F)\,d\omega_\Omega^z =H_{\Omega,\psi}(z).$$ [F1, step 1.1]

3.1 The continuous harmonic extensions $u=H_{\Omega',\varphi}\circ F$ and $H_{\Omega,\psi}$ of step 2.1 have the same boundary values $\psi$ on $\partial\Omega$, so they coincide on $\Omega$ by [F2]; at $z$ this is $$H_{\Omega,\psi}(z)=H_{\Omega',\varphi}\bigl(F(z)\bigr).$$ [F2, step 2.1]

4.1 Combining steps 3.1 and 2.2 with the defining property of $\omega_{\Omega'}^{F(z)}$ in [F1] gives, for every continuous $\varphi:\partial\Omega'\to\mathbb R$, $$\int_{\partial\Omega'}\varphi\,d(\overline F_*\omega_\Omega^z) =H_{\Omega',\varphi}\bigl(F(z)\bigr) =\int_{\partial\Omega'}\varphi\,d\omega_{\Omega'}^{F(z)}.$$ Both sides are finite regular Borel measures on the compact boundary $\partial\Omega'$, so by [F4] they coincide as measures, and in particular on every Borel subset of $\partial\Omega'$. [F1, F4, step 3.1, step 2.2]

5.1 Therefore $\overline F_*\omega_\Omega^z=\omega_{\Omega'}^{F(z)}$ on all Borel boundary sets. Dependent Choice was used only through the existence and uniqueness theorem [F1]; the transport itself is the identification of two continuous harmonic extensions with common boundary data, and no boundary behaviour of $F$ beyond the given closure homeomorphism was assumed. [F1, step 4.1] ∎

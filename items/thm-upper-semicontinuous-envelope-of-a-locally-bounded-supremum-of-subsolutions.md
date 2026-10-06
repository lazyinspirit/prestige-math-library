---
id: thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions
kind: theorem
title: "The upper envelope of a locally bounded supremum of subsolutions is a subsolution"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-viscosity-subsolution-and-supersolution, def-upper-and-lower-semicontinuous-envelopes, lem-viscosity-testing-by-first-order-jets, lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation, thm-euclidean-semicontinuous-extreme-value-theorem, cor-euclidean-closed-balls-and-spheres-are-compact]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)"
      url: "https://arxiv.org/pdf/math/9207212"
      locator: "Lemma 4.2 and Proposition 4.3, printed pp. 23--24"
    - title: "Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)"
      url: "https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf"
      locator: "Chapter 1 Section 8, Lemma 1.25 and its upper-envelope discussion, printed pp. 33--34"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $U\subseteq\mathbb R^{n+1}$ be open, let
$H:U\times\mathbb R^n\to\mathbb R$ be continuous, and let $\mathcal F$ be a
nonempty family of real-valued upper semicontinuous viscosity subsolutions of
$u_t+H(x,t,Du)=0$ in $U$. Put $w(z):=\sup_{w'\in\mathcal F}w'(z)$ for $z\in U$
and assume that $w$ is locally bounded above: $w(z)<\infty$ for every $z\in U$
and $w$ is bounded above on every compact subset of $U$. Then the upper
semicontinuous envelope $w^*$
([[def-upper-and-lower-semicontinuous-envelopes]]) is a viscosity subsolution
of $u_t+H(x,t,Du)=0$ in $U$. No choice principle is used.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb R^{n+1}$, continuous $H:U\times\mathbb R^n\to\mathbb R$, a nonempty family $\mathcal F$ of upper semicontinuous viscosity subsolutions, $w=\sup_{w'\in\mathcal F}w'$, locally bounded above, and its upper envelope $w^*$.

[F1] $w^*(z)=\inf_{r>0}M_r(z)$ with $M_r(z):=\sup\{w(y):|y-z|\le r,\ y\in U\}$, and $w^*(z)=\lim_{r\downarrow0}M_r(z)$; if $w$ is locally bounded above then $w^*$ is real-valued on $U$. The envelope is upper semicontinuous: for $z$ and $\eta>0$ choose $r>0$ with $M_r(z)\le w^*(z)+\eta$; then for $|z'-z|<r$ one has $M_{r-|z'-z|}(z')\le M_r(z)$, hence $w^*(z')\le w^*(z)+\eta$ ([[def-upper-and-lower-semicontinuous-envelopes]]).

[F2] Each $w'\in\mathcal F$ satisfies $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$ at every $z_0\in U$ at which $w'-\phi$ has a local maximum, $\phi\in C^1(U)$ ([[def-viscosity-subsolution-and-supersolution]], [[lem-viscosity-testing-by-first-order-jets]]).

[F3] Every upper semicontinuous real-valued function on a nonempty compact subset of $\mathbb R^m$ attains its maximum there ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F4] If $v-\phi$ has a local maximum at $z_0$ and $\overline B(z_0,r)\subseteq U$ is a ball on which $v-\phi\le v(z_0)-\phi(z_0)$, then for every $\varepsilon>0$ the test $\phi_\varepsilon=\phi+\varepsilon|z-z_0|^4$ has the same value and first jet as $\phi$ at $z_0$ and makes $v-\phi_\varepsilon$ strictly maximised over $\overline B(z_0,r)$ at $z_0$ ([[lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation]]).

## Proof

**Proof technique:** near-maximal selection from the supremum plus strict test perturbation.

1.1 Strict-contact case. Let $\phi\in C^1(U)$ touch $w^*$ from above at $z_0=(x_0,t_0)$ with a strict local maximum of $w^*-\phi$, and suppose $\theta:=\phi_t(z_0)+H(z_0,D\phi(z_0))>0$. Choose $r>0$ so that $\overline B(z_0,r)\subseteq U$, the contact is strict on this ball, and $\phi_t(z)+2(t-t_0)+H(z,D\phi(z)+2(x-x_0))>\theta/2$ throughout it, by continuity. On the compact annulus $A=\{r/2\le|z-z_0|\le r\}$, [F1, F3] give the positive gap $g=(w^*-\phi)(z_0)-\max_A(w^*-\phi)$. Choose $0<\eta<g/4$ and $0<\delta<r/2$ such that $|\phi(y)-\phi(z_0)|<\eta$ and $|y-z_0|^2<\eta$ for $|y-z_0|<\delta$. The two supremum definitions in [F1] supply one pair $(w',y)$ with $w'\in\mathcal F$, $|y-z_0|<\delta$, and $w'(y)>w^*(z_0)-\eta$ (use a closed radius smaller than $\delta$). By [F3], $w'-\phi-|z-z_0|^2$ attains a maximum on $\overline B(z_0,r)$, of value greater than $(w^*-\phi)(z_0)-3\eta$. Its value on $A$ is at most $(w^*-\phi)(z_0)-g$, since $w'\le w\le w^*$. Thus any maximiser $z_*=(x_*,t_*)$ lies in $B(z_0,r/2)$ and is an interior upper contact for $\psi=\phi+|z-z_0|^2$. Its derivatives are $\psi_t(z_*)=\phi_t(z_*)+2(t_*-t_0)$ and $D\psi(z_*)=D\phi(z_*)+2(x_*-x_0)$. Their residual is greater than $\theta/2$, contradicting the subsolution inequality [F2]. Hence the desired residual at $z_0$ is nonpositive. [F1, F2, F3, algebra]

2.1 General contacts and conclusion. If $w^*-\phi$ merely has a local maximum at $z_0$, fix $r>0$ with $\overline B(z_0,r)\subseteq U$ on which the maximum inequality $w^*-\phi\le w^*(z_0)-\phi(z_0)$ holds and strictify by [F4]: the test $\phi_\varepsilon=\phi+\varepsilon|z-z_0|^4$ has the same value and first jet at $z_0$ and makes $w^*-\phi_\varepsilon$ strictly maximised at $z_0$ over $\overline B(z_0,r)$. Step 1.1 applied to $\phi_\varepsilon$ gives $\phi_t(z_0)+H(z_0,D\phi(z_0))=(\phi_\varepsilon)_t(z_0)+H(z_0,D\phi_\varepsilon(z_0))\le0$. Hence $w^*$ is a viscosity subsolution of the equation in $U$; the selection of the single witness $(w',y)$ and of the compact maximiser $z_*$ involves no choice principle, and the whole argument is pointwise. [step 1.1, F4] ∎

## Remarks

- **Where local boundedness above is used.** It makes $w^*$ real-valued so that the compact-annulus maximum and the test inequality are meaningful; the family is not assumed to consist of locally bounded functions or to be directed, and no member of the family other than the single witness $(w',y)$ is examined.
- **Role in Perron's method.** This is the load-bearing half of [[thm-perron-method-for-hamilton-jacobi-equations]]: the supremum of the admissible subsolutions is made upper semicontinuous by passing to $w^*$, and this theorem says the envelope is still a subsolution.

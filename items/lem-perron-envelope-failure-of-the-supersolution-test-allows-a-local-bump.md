---
id: lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump
kind: lemma
title: Failure of the supersolution test for the lower envelope allows a local bump
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- prop-maxima-of-subsolutions-and-minima-of-supersolutions
- lem-viscosity-testing-by-first-order-jets
- lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation
- prop-classical-solutions-are-viscosity-solutions
- def-viscosity-subsolution-and-supersolution
- def-upper-and-lower-semicontinuous-envelopes
- def-total-derivative-in-euclidean-space
- thm-euclidean-semicontinuous-extreme-value-theorem
- cor-euclidean-closed-balls-and-spheres-are-compact
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Lemma 4.4 and its proof, printed pp. 24--25
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 8, the supersolution half of the Perron proof, printed pp. 34--37
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $U\subseteq\mathbb R^{n+1}$ be open, let
$H:U\times\mathbb R^n\to\mathbb R$ be continuous, and let $w:U\to\mathbb R$ be
an upper semicontinuous viscosity subsolution of $u_t+H(x,t,Du)=0$ in $U$.
Suppose the lower semicontinuous envelope $w_*$ fails the supersolution test
at $\hat z\in U$ in the following precise sense: $w_*(\hat z)\in\mathbb R$ and there is $\phi\in C^1(U)$ such that
$w_*-\phi$ has a local minimum at $\hat z$ and
$$\phi_t(\hat z)+H(\hat z,D\phi(\hat z))<0 .$$
Then for every sufficiently small $\kappa>0$ there is a viscosity subsolution
$W_\kappa$ of the same equation in $U$ with
$$W_\kappa\ge w\ \text{on }U,\qquad \sup_U(W_\kappa-w)>0,\qquad W_\kappa=w\ \text{on }\{z\in U:|z-\hat z|\ge\kappa\}.$$
Moreover $W_\kappa$ can be taken to be $\max(w,\chi)$ on a small ball around
$\hat z$ and $w$ outside it, where $\chi$ is a classical subsolution with
$\chi(\hat z)=w_*(\hat z)+\delta$ for some $\delta>0$. No choice principle is
used.

## Facts & Assumptions

**Given:** Open $U\subseteq\mathbb R^{n+1}$, continuous $H:U\times\mathbb R^n\to\mathbb R$, an upper semicontinuous viscosity subsolution $w:U\to\mathbb R$, its lower envelope $w_*$, a point $\hat z\in U$ with $w_*(\hat z)\in\mathbb R$ and a $C^1$ test $\phi$ with $w_*-\phi$ having a local minimum at $\hat z$ and $c:=-\bigl(\phi_t(\hat z)+H(\hat z,D\phi(\hat z))\bigr)>0$.

[F1] $w_*(z)=\sup_{r>0}\inf\{w(y):|y-z|\le r\}$ is the lower semicontinuous envelope of $w$, it satisfies $w_*\le w$ pointwise, and for every $\eta>0$ there are points $z$ arbitrarily close to $\hat z$ with $w(z)<w_*(\hat z)+\eta$ ([[def-upper-and-lower-semicontinuous-envelopes]]).

[F2] A finite maximum of finitely many viscosity subsolutions of the equation in an open set is a viscosity subsolution ([[prop-maxima-of-subsolutions-and-minima-of-supersolutions]]); a $C^1$ function with $\chi_t+H(z,D\chi)\le0$ pointwise is a viscosity subsolution of the same equation ([[prop-classical-solutions-are-viscosity-solutions]], [[def-viscosity-subsolution-and-supersolution]]).

[F3] A continuous function $f$ with $f(\hat z)<0$ is negative on a neighbourhood of $\hat z$; here the function in question is $z\mapsto\phi_t(z)+H(z,D\phi(z))$ ([[def-total-derivative-in-euclidean-space]], [[def-viscosity-subsolution-and-supersolution]] for the smoothness conventions).

## Proof

**Proof technique:** a strict test-function bump plus the finite-maximum rule.

1.1 The bump function. Fix $\kappa>0$ with $\overline B(\hat z,\kappa)\subseteq U$ and choose $r\in(0,\kappa]$ small. For $\gamma>0$ put $\tilde\phi(z):=\phi(z)-\gamma|z-\hat z|^4$, so that $\tilde\phi\in C^1(U)$, $\tilde\phi(\hat z)=\phi(\hat z)$ and $D\tilde\phi(\hat z)=D\phi(\hat z)$; shrinking $r$ if necessary and using [F3], we may assume $\tilde\phi_t(z)+H(z,D\tilde\phi(z))\le-c/2<0$ for all $z\in\overline B(\hat z,r)$, so every vertical translate of $\tilde\phi$ is a classical, hence viscosity, subsolution there. Since $w_*-\phi$ has a local minimum at $\hat z$, after shrinking $r$ we have $w_*(z)-\tilde\phi(z)\ge m+\gamma|z-\hat z|^4$ for $z\in\overline B(\hat z,r)$, where $m:=w_*(\hat z)-\phi(\hat z)$. Choose $0<\delta<\gamma(r/2)^4$ and define $\chi:=\tilde\phi+m+\delta$, a classical subsolution on $\overline B(\hat z,r)$ with $\chi(\hat z)=w_*(\hat z)+\delta$. On the annulus $r/2\le|z-\hat z|\le r$ we have $w_*(z)\ge\tilde\phi(z)+m+\gamma|z-\hat z|^4\ge\chi(z)-\delta+\gamma(r/2)^4>\chi(z)$, and since $w_*\le w$ by [F1] this gives $\chi<w$ there. By continuity of $\chi$, choose $r_0\in(0,r/2)$ so that $\chi(z)>w_*(\hat z)+\delta/2$ whenever $|z-\hat z|<r_0$. The lower-envelope definition [F1] gives a point $z_0$ in this ball with $w(z_0)<w_*(\hat z)+\delta/2<\chi(z_0)$. [F1, F2, F3, algebra]

2.1 The bump is a subsolution. Define $W:=\max(w,\chi)$ on $B(\hat z,r)$ and $W:=w$ on $U\setminus B(\hat z,r)$; this is well defined because on the sphere $|z-\hat z|=r$ one has $\chi<w$ by step 1.1. Then $W\ge w$ on $U$, and $\sup_U(W-w)>0$ at the point $z_0$ of step 1.1. On the ball $B(\hat z,r)$ the function $W$ is the maximum of the viscosity subsolution $w$ and the classical, hence viscosity, subsolution $\chi$, so it is a viscosity subsolution there by [F2]; on the exterior of $\overline B(\hat z,r)$ it equals the subsolution $w$; and near every point of the sphere it equals $w$, which is a subsolution, so by locality of the definition $W$ is a viscosity subsolution on all of $U$. Since $\chi<w$ on the annulus, $W=w$ outside $B(\hat z,r)\subseteq B(\hat z,\kappa)$, that is $W=w$ on $\{z:|z-\hat z|\ge\kappa\}$; and $W$ is upper semicontinuous as a maximum of the upper semicontinuous $w$ and the continuous $\chi$. [step 1.1, F2, algebra] ∎ 
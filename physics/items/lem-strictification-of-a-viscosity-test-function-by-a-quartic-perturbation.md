---
id: lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation
kind: lemma
title: Strictification of a viscosity test function by a quartic perturbation
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
- cor-euclidean-closed-balls-and-spheres-are-compact
- thm-euclidean-semicontinuous-extreme-value-theorem
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Section 2 and the contact arguments of Section 3, printed pp. 11--17
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 2, Remark 2.1, printed p. 8 (quadratic strictification); the quartic calculation is proved here.
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $U\subseteq\mathbb R^m$ be open, let $v:U\to\mathbb R$, let
$\phi\in C^1(U)$, suppose $v-\phi$ has a local maximum at $z_0\in U$, and fix
$r>0$ with $\overline B(z_0,r)\subseteq U$ and
$v(z)-\phi(z)\le v(z_0)-\phi(z_0)$ for every $z\in\overline B(z_0,r)$. For
$\varepsilon>0$ define
$$\phi_\varepsilon(z):=\phi(z)+\varepsilon|z-z_0|^4 .$$
Then $\phi_\varepsilon\in C^1(U)$ agrees with $\phi$ to first order at the
contact,
$$\phi_\varepsilon(z_0)=\phi(z_0),\qquad D\phi_\varepsilon(z_0)=D\phi(z_0),$$
and $v-\phi_\varepsilon$ has a strict maximum over $\overline B(z_0,r)$ at
$z_0$:
$$v(z)-\phi_\varepsilon(z)<v(z_0)-\phi_\varepsilon(z_0)\qquad\text{for every }z\in\overline B(z_0,r)\setminus\{z_0\} .$$
The same statement with $\phi_\varepsilon:=\phi-\varepsilon|z-z_0|^4$
strictifies a local minimum contact of a test function, and the first jet at
the contact is again unchanged. No choice principle is used.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb R^m$, functions $v:U\to\mathbb R$ and $\phi\in C^1(U)$, a point $z_0\in U$, a radius $r>0$ with $\overline B(z_0,r)\subseteq U$ and $v(z)-\phi(z)\le v(z_0)-\phi(z_0)$ for all $z\in\overline B(z_0,r)$, and for $\varepsilon>0$ the function $\phi_\varepsilon(z)=\phi(z)+\varepsilon|z-z_0|^4$.

[F1] The map $q(z):=|z-z_0|^4$ is a polynomial in the coordinates of $z$, hence of class $C^1$ on $\mathbb R^m$, with $q(z_0)=0$ and $Dq(z_0)=0$; more precisely $Dq(z)=4|z-z_0|^2(z-z_0)$ for every $z$, the derivative being the total derivative in the sense of [[def-total-derivative-in-euclidean-space]] and its components the partial derivatives of [[def-directional-and-partial-derivatives]].

[F2] If $f,g$ are $C^1$ on an open set, then so is $f+g$, with $D(f+g)=Df+Dg$ and $(f+g)(z_0)=f(z_0)+g(z_0)$ ([[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** an explicit perturbation whose first jet vanishes at the contact.

1.1 Regularity and first jet. The function $q(z)=|z-z_0|^4$ is a polynomial with $q(z_0)=0$ and $Dq(z_0)=0$ by [F1]; adding it to the $C^1$ function $\phi$ with coefficient $\varepsilon>0$ gives $\phi_\varepsilon\in C^1(U)$ with $\phi_\varepsilon(z_0)=\phi(z_0)+\varepsilon q(z_0)=\phi(z_0)$ and $D\phi_\varepsilon(z_0)=D\phi(z_0)+\varepsilon Dq(z_0)=D\phi(z_0)$ by [F2]. [F1, F2, algebra]

2.1 Strict maximum. Let $z\in\overline B(z_0,r)$ with $z\ne z_0$. Then $|z-z_0|^4>0$, and the hypothesised maximum inequality gives $v(z)-\phi(z)\le v(z_0)-\phi(z_0)$; subtracting the positive quantity $\varepsilon|z-z_0|^4$ from the left-hand side and using $\phi_\varepsilon=\phi+\varepsilon|\cdot-z_0|^4$ and $\phi_\varepsilon(z_0)=\phi(z_0)$, we get $v(z)-\phi_\varepsilon(z)\le v(z_0)-\phi(z_0)-\varepsilon|z-z_0|^4<v(z_0)-\phi(z_0)=v(z_0)-\phi_\varepsilon(z_0)$. Hence $z_0$ is the strict maximum of $v-\phi_\varepsilon$ over $\overline B(z_0,r)$. [step 1.1, algebra]

3.1 Minimum case. If $v-\phi$ has a local minimum at $z_0$ with $v(z)-\phi(z)\ge v(z_0)-\phi(z_0)$ on $\overline B(z_0,r)$ and $\phi^-_\varepsilon:=\phi-\varepsilon|z-z_0|^4$, the same two computations with signs reversed give $\phi^-_\varepsilon(z_0)=\phi(z_0)$, $D\phi^-_\varepsilon(z_0)=D\phi(z_0)$ and $v(z)-\phi^-_\varepsilon(z)>v(z_0)-\phi^-_\varepsilon(z_0)$ for every $z\in\overline B(z_0,r)\setminus\{z_0\}$. [step 2.1, F1, F2, algebra]

4.1 Conclusion. Step 1.1 and step 2.1 give the upper-contact statement, and step 3.1 gives the lower-contact statement; the proof used only the polynomial computation [F1] and additivity [F2], so it selects nothing and uses no choice principle. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Why the quartic.** The perturbation has value $0$ and gradient $0$ at the contact, so it changes neither the value nor the first jet tested in the viscosity inequalities, while it is strictly positive away from the contact and therefore turns a nonstrict contact into a strict one. This is the device that lets the stability and supremum-envelope arguments localise a maximum on a closed ball without losing the tested jet.
- **Scope.** The statement is pointwise in the ball and does not require $v$ to be semicontinuous, bounded or measurable; the compactness and extreme-value suppliers [[cor-euclidean-closed-balls-and-spheres-are-compact]] and [[thm-euclidean-semicontinuous-extreme-value-theorem]] are available for applications that patch such a ball maximum into a global one, and they are not needed for the computation above.

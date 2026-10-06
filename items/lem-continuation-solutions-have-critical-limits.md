---
id: lem-continuation-solutions-have-critical-limits
kind: lemma
title: "Continuation solutions have critical limits and exponential decay"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-regular-continuation-datum-between-morse-smale-pairs, def-morse-smale-pair, def-countable-choice, cor-every-smooth-vector-field-on-a-compact-manifold-is-complete, thm-fundamental-theorem-on-flows, lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits, thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points, thm-morse-lemma, def-morse-trajectory-from-p-to-q]
justified_by: []
dependency_level: 1
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, Sec. 6.1 and Lecture 20, Sec. 6.3 (1): the autonomous tails and the end conditions, PDF pp. 86-87 and 91-92"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 4.4, Proposition 4.4.2 and the preceding paragraph on limits of flow lines, read at PDF pp. 193-194"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.4, first and second steps: trajectories of the perturbed field on the two half-lines are trajectories of the two end fields, printed pp. 73-75, PDF pp. 83-85"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(f_s,g_s)$ be a
continuation datum from $(f^-,g^-)$ to $(f^+,g^+)$ on a closed manifold $M$
and let $u:\mathbb R\to M$ be a solution of the continuation equation
([[def-regular-continuation-datum-between-morse-smale-pairs]]). Then the limits
$$\lim_{s\to-\infty}u(s)=p\in\operatorname{Crit}(f^-),\qquad \lim_{s\to+\infty}u(s)=q\in\operatorname{Crit}(f^+)$$
exist. Moreover, in the Morse coordinates of [[thm-morse-lemma]] at $p$ and
$q$ the curve $u$ converges to $p$ (resp. $q$) exponentially fast as
$s\to-\infty$ (resp. $s\to+\infty$), and $|\partial_su(s)|_{g_s}$ decays
exponentially; in particular the energy integral
$\int_{\mathbb R}|\partial_su|^2\,ds$ is finite.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a closed manifold $M$, Morse--Smale pairs
$(f^\pm,g^\pm)$ in the metric sense, a continuation datum $(f_s,g_s)$ with
threshold $S>0$, and a solution $u$ of the continuation equation.

[F1] On a closed manifold, under $\mathrm{AC}_\omega$, every smooth vector
field is complete, so the autonomous negative-gradient fields
$-\nabla^{g^\pm}f^\pm$ have global flows; uniqueness of solutions of the
autonomous equation identifies reparametrized solution curves with
trajectories of that flow
([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]],
[[thm-fundamental-theorem-on-flows]]).

[F2] Under $\mathrm{AC}_\omega$, a negative-gradient trajectory of a Morse
function on a compact manifold has a unique $\alpha$-limit and a unique
$\omega$-limit, both critical points
([[lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits]],
[[def-morse-trajectory-from-p-to-q]]).

[F3] The datum is constant on the two half-lines:
$(f_s,g_s)=(f^-,g^-)$ for $s\le-S$ and $(f_s,g_s)=(f^+,g^+)$ for $s\ge S$
([[def-regular-continuation-datum-between-morse-smale-pairs]]).

[F4] At a Morse critical point of the actual metric negative gradient, the
local stable and unstable disks are tangent to the positive and negative
Hessian eigenspaces, and the weighted-path parametrization of those disks
gives exponential convergence of the orbits: a trajectory of
$-\nabla^{g^\pm}f^\pm$ that converges to a critical point in forward (resp.
backward) time decays exponentially in that time
([[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]],
[[thm-morse-lemma]]).

## Proof

**Proof technique:** direct.

1.1 On the negative half-line $s\le-S$, the continuation equation reads $\partial_su=-\nabla^{g^-}f^-(u(s))$ by [F3], so there $u$ is a reparametrized solution curve of the autonomous negative-gradient field of $f^-$. By [F1] that field is complete; let $\Phi^-$ be its global flow and define $\gamma(t)=\Phi^-_t(u(-S))$ for $t\in\mathbb R$. Then $\gamma$ is a full negative-gradient trajectory of $f^-$, and uniqueness of solutions of the autonomous equation gives $u(s)=\gamma(s+S)$ for every $s\le-S$. [F1, F3, given, construct]

2.1 By [F2] the trajectory $\gamma$ has a unique $\alpha$-limit $p\in\operatorname{Crit}(f^-)$; reparametrizing back gives $\lim_{s\to-\infty}u(s)=\lim_{t\to-\infty}\gamma(t)=p$. [F2, step 1.1]

2.2 The same construction on the positive half-line exhibits the restriction of $u$ to $[S,\infty)$ as the terminal piece of a full trajectory of the complete field $-\nabla^{g^+}f^+$, whose unique $\omega$-limit is a critical point $q\in\operatorname{Crit}(f^+)$ by [F2]; hence $\lim_{s\to+\infty}u(s)=q$. [F1, F2, F3, step 1.1]

3.1 Let $p$ be the limit of step 2.1. Since $u(s)\to p$, the curve enters and stays in a sufficiently small Morse chart at $p$ as $s\to-\infty$, so it is a trajectory of the metric negative gradient converging to $p$ in backward time. By [F4] it lies on the local unstable disk, whose weighted-path parametrization bounds $\|u(s)-p\|\le Ce^{\lambda s}$ for $s\le s_0$ with constants $C,\lambda>0$ in the Morse coordinates of [[thm-morse-lemma]]; replacing $s$ by $-s$ and $p$ by $q$ gives the analogous bound $\|u(s)-q\|\le C'e^{-\lambda' s}$ for $s\ge s_1$. [F4, step 2.1, step 2.2]

4.1 On the two half-lines $\nabla^{g_s}f_s=\nabla^{g^\pm}f^\pm$ is smooth with $\nabla^{g^\pm}f^\pm(p)=0$, hence Lipschitz on the small charts, so $|\partial_su|_{g_s}=|\nabla^{g_s}f_s(u(s))|_{g_s}$ is bounded by a constant times $\|u(s)-p\|$ near $p$ and by a constant times $\|u(s)-q\|$ near $q$; by step 3.1 it decays exponentially on both ends and is bounded on the compact window $[-S,S]$. Therefore $\int_{\mathbb R}|\partial_su|_{g_s}^2\,ds$ is finite. [step 3.1, algebra] ∎

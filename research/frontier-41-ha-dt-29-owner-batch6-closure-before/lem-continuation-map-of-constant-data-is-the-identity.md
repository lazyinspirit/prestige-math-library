---
id: lem-continuation-map-of-constant-data-is-the-identity
kind: lemma
title: "The continuation map of constant data is the identity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli, def-continuation-chain-map, def-regular-continuation-datum-between-morse-smale-pairs, thm-continuation-trajectories-are-compact-up-to-breaking, lem-orientation-lines-orient-continuation-moduli-spaces, def-morse-smale-pair, lem-time-translation-acts-freely-on-nonconstant-trajectories, def-unparametrized-morse-trajectory-moduli-space, thm-unparametrized-trajectory-space-is-a-smooth-manifold, lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits, def-morse-trajectory-from-p-to-q, def-axiom-of-choice, lem-first-order-asymptotically-hyperbolic-operator-is-fredholm]
justified_by: []
dependency_level: 9
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (2): for constant data C(p,q)=W(p,q) and phi=id because nonconstant solutions come in translation families, PDF p. 92"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, Exercise 2 and the identity computation for the constant path, p. 4 of the lecture"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.4, second step: the constant interpolation I(x,s)=f_0(x) has Phi_I=Id, printed p. 75, PDF p. 85"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f,g)$ be Morse--Smale on a closed manifold $M$ and let
$(f_s,g_s)=(f,g)$ for every $s$ be the constant continuation datum from
$(f,g)$ to itself ([[def-regular-continuation-datum-between-morse-smale-pairs]],
[[def-morse-smale-pair]]). Then its continuation map
([[def-continuation-chain-map]]) is the identity:
$$\Phi_k=\operatorname{id}_{CM_k(f,g;\Lambda)},\qquad \Lambda=\mathbb Z/2\ \text{or}\ \mathbb Z,$$
with the signs of [[lem-orientation-lines-orient-continuation-moduli-spaces]]
in the integral case. Equivalently, for critical points $p\ne q$ with
$\operatorname{ind}(p)=\operatorname{ind}(q)$ the moduli space
$\mathcal C(p,q)$ of [[def-regular-continuation-datum-between-morse-smale-pairs]]
is empty, and $\mathcal C(p,p)$ consists of the single constant solution at
$p$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Morse--Smale pair $(f,g)$ on a closed manifold $M$ and its constant continuation datum.

[F1] For the constant datum the continuation equation is the autonomous negative-gradient equation of $(f,g)$, so a solution $u$ with limits $p,q$ is a negative-gradient trajectory from $p$ to $q$; its limits exist by the published endpoint lemma and it is nonconstant exactly when $p\ne q$ ([[def-regular-continuation-datum-between-morse-smale-pairs]], [[def-morse-trajectory-from-p-to-q]], [[lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits]]).

[F2] At nonconstant solutions, regularity is the Morse--Smale transversality condition in the endpoint fibre-product description. At the constant solution $u_p$, the operator is $d/ds+H_p$, with $H_p$ the invertible self-adjoint Hessian endomorphism; its decaying negative- and positive-end spaces are the complementary negative and positive Hessian subspaces, so it is onto by [[lem-first-order-asymptotically-hyperbolic-operator-is-fredholm]]. Thus the constant datum is regular. For a regular datum the moduli space $\mathcal C(p,q)$ is a smooth manifold of dimension $\operatorname{ind}(p)-\operatorname{ind}(q)$, empty when this number is negative ([[def-regular-continuation-datum-between-morse-smale-pairs]], [[thm-unparametrized-trajectory-space-is-a-smooth-manifold]]).

[F3] If $u$ is a nonconstant solution of the constant datum, then every time translate $s\mapsto u(s+c)$ is another solution with the same limits, and the translation action on nonconstant trajectories is free, so a nonconstant solution contributes a one-dimensional family of solutions ([[lem-time-translation-acts-freely-on-nonconstant-trajectories]], [[def-unparametrized-morse-trajectory-moduli-space]]).

[F4] At each critical point $p$ the constant curve $u_p\equiv p$ solves the equation with limits $p,p$, so $\mathcal C(p,p)\ne\varnothing$; and the determinant-line trivialization at a constant solution is the canonical trivialization of the orientation line, so the sign $\tau(u_p)$ agrees with the single global sign convention of [[lem-orientation-lines-orient-continuation-moduli-spaces]] and does not depend on $p$.

## Proof

**Proof technique:** direct.

1.1 By [F1] the solutions of the constant datum with limits $p,q$ are exactly the negative-gradient trajectories from $p$ to $q$, so $\mathcal C(p,q)$ is the parametrized trajectory moduli space and $\mathcal C(p,p)$ contains the constant solution $u_p$. [F1, F4, given]

2.1 Let $p\ne q$ and suppose $\mathcal C(p,q)\ne\varnothing$. By [F2] its dimension is $\operatorname{ind}(p)-\operatorname{ind}(q)$; if that dimension were $0$, the space would be a nonempty zero-dimensional manifold, while by [F3] a nonconstant solution produces a one-dimensional free translation family inside $\mathcal C(p,q)$, a contradiction. Hence $\mathcal C(p,q)=\varnothing$ whenever $p\ne q$ and $\operatorname{ind}(p)=\operatorname{ind}(q)$, and also whenever the index difference is negative. [F2, F3, step 1.1]

2.2 For $p=q$ a solution in $\mathcal C(p,p)$ other than the constant one would be nonconstant and hence, by [F3], would come with a free translation family, contradicting the zero dimension of $\mathcal C(p,p)$; therefore $\mathcal C(p,p)=\{u_p\}$ is a single point. [F2, F3, step 1.1]

3.1 The continuation map evaluates to $\Phi_k(p)=\#\mathcal C(p,p)\cdot p=p$ over $\mathbb Z/2$ and to $\Phi_k(p)=\tau(u_p)\,p$ over $\mathbb Z$ by [F4] and step 2.2; by step 2.1 all off-diagonal coefficients vanish. The trivialization convention of [F4] is fixed so that $\tau(u_p)=+1$, hence extending linearly gives $\Phi_k=\operatorname{id}$ for every $k$ in both coefficient cases. [F4, step 2.1, step 2.2] ∎

The sign $\tau(u_p)=+1$ is a convention, but a consistent one: it is the global sign by which the boundary-orientation convention of [[lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli]] is fixed, and it is the choice under which the boundary count of the chain-map theorem below gives $\Phi\circ\partial=\partial\circ\Phi$ rather than its negative. The cited source treatments state the identity exactly in this convention.

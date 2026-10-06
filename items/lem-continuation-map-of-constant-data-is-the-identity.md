---
id: lem-continuation-map-of-constant-data-is-the-identity
kind: lemma
title: "The continuation map of constant data is the identity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuation-chain-map, def-regular-continuation-datum-between-morse-smale-pairs, thm-continuation-trajectories-are-compact-up-to-breaking, lem-orientation-lines-orient-continuation-moduli-spaces, def-morse-smale-pair, lem-continuation-energy-identity, lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits, def-morse-trajectory-from-p-to-q, def-axiom-of-choice, lem-first-order-asymptotically-hyperbolic-operator-is-fredholm]
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
in the integral case, using the same critical rays at the two copies of the pair. Equivalently, for critical points $p\ne q$ with
$\operatorname{ind}(p)=\operatorname{ind}(q)$ the moduli space
$\mathcal C(p,q)$ of [[def-regular-continuation-datum-between-morse-smale-pairs]]
is empty, and $\mathcal C(p,p)$ consists of the single constant solution at
$p$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Morse--Smale pair $(f,g)$ on a closed manifold $M$ and its constant continuation datum.

[F1] For the constant datum, all continuation solutions are full autonomous negative-gradient curves with the prescribed limits. Their nonconstant subset consists exactly of the Morse trajectories of [[def-morse-trajectory-from-p-to-q]]; constant critical curves are additional solutions ([[def-regular-continuation-datum-between-morse-smale-pairs]]). The energy identity gives $\int_{\mathbb R}|\dot u|^2=f(p)-f(q)$, so equal endpoints force a constant curve ([[lem-continuation-energy-identity]]).

[F2] At nonconstant solutions, regularity is the Morse--Smale transversality condition in the endpoint fibre-product description. At the constant solution $u_p$, the operator is $d/ds+H_p$, with $H_p$ the invertible self-adjoint Hessian endomorphism; its decaying negative- and positive-end spaces are the complementary negative and positive Hessian subspaces, so it is onto by [[lem-first-order-asymptotically-hyperbolic-operator-is-fredholm]]. Thus the constant datum is regular. For a regular datum the moduli space $\mathcal C(p,q)$ is a smooth manifold of dimension $\operatorname{ind}(p)-\operatorname{ind}(q)$, empty when this number is negative ([[def-regular-continuation-datum-between-morse-smale-pairs]]).

[F3] Every translate $s\mapsto u(s+c)$ of a solution of the constant datum solves the same autonomous equation with the same limits. A nonconstant solution yields a continuous nonconstant translation family: if the family were constant, evaluating at one fixed time would make $u$ constant. This argument applies to the actual metric equation directly, including curves with coincident endpoint labels.

[F4] At a critical point $p$ the constant curve solves the equation. In the fixed-window orientation sequence, the unstable input maps identically to the stable normal quotient under the Hessian splitting; with matched endpoint rays its kernel sign is $+1$ ([[lem-orientation-lines-orient-continuation-moduli-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the continuation solution space consists of full negative-gradient curves, including constants; only its nonconstant part is the Morse-trajectory space. For each critical point $p$, the constant curve $u_p$ lies in $\mathcal C(p,p)$ by [F4]. The constant datum is regular by [F2]. [F1, F2, F4, given]

2.1 Let $p\ne q$ and suppose $\mathcal C(p,q)\ne\varnothing$. Every solution then is nonconstant. By [F2] this space has dimension $\operatorname{ind}(p)-\operatorname{ind}(q)$. If the dimension is zero it is discrete, so every continuous map from the connected line into it is constant, contradicting the nonconstant translation family of [F3]. Hence $\mathcal C(p,q)$ is empty for distinct equal-index endpoints, and also for negative index difference by [F2]. [F2, F3, step 1.1]

2.2 For $p=q$, [F1] gives zero energy. The continuous nonnegative function $|\dot u|^2$ therefore vanishes identically, so $u$ is constant; its prescribed limit is $p$. Together with step 1.1 this gives $\mathcal C(p,p)=\{u_p\}$. [F1, step 1.1, algebra]

3.1 The continuation map evaluates to $\Phi_k(p)=\#\mathcal C(p,p)\cdot p=p$ over $\mathbb Z/2$ and to $\Phi_k(p)=\tau(u_p)\,p$ over $\mathbb Z$ by [F4] and step 2.2; by step 2.1 all off-diagonal coefficients vanish. The identity quotient map of [F4] proves $\tau(u_p)=+1$, hence extending linearly gives $\Phi_k=\operatorname{id}$ for every $k$ in both coefficient cases. [F4, step 2.1, step 2.2] ∎


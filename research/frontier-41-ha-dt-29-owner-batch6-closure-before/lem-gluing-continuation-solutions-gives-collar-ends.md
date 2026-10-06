---
id: lem-gluing-continuation-solutions-gives-collar-ends
kind: lemma
title: "Gluing continuation solutions gives collar neighbourhoods of the broken ends"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-continuation-trajectories-are-compact-up-to-breaking, def-broken-continuation-trajectory, def-regular-continuation-datum-between-morse-smale-pairs, lem-continuation-energy-identity, thm-morse-trajectory-compactness-up-to-breaking, lem-gluing-broken-index-two-trajectories-gives-collar-ends, thm-implicit-function-theorem-for-banach-spaces, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators, lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse, prop-parametrized-morse-trajectory-space-is-a-manifold, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, def-topological-manifold-with-boundary, lem-time-translation-acts-freely-on-nonconstant-trajectories, def-axiom-of-choice]
justified_by: []
dependency_level: 6
proof_strategy: direct
sources:
  references:
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Sec. 6, Theorem 6.11 and Sec. 7, Theorems 7.5-7.6: gluing of time-dependent and lambda-parametrised trajectories is a diffeomorphism onto a collar, orientation-compatible, pp. 43-68"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 18, Sec. 5.5 (linear gluing isomorphisms) and Lecture 20, Sec. 6.3 (3) (the two breaking cases are exactly the boundary), PDF pp. 81-84 and 92-93"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 4.4, Theorem 4.4.5 and Lemmas 4.4.8-4.4.9 (the local gluing model producing collar neighbourhoods of the strata), read at PDF pp. 194-202"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f_s,g_s)$ be a
regular continuation datum on a closed manifold $M$, let
$\operatorname{ind}(p)-\operatorname{ind}(q)=1$, and let
$$\beta=(\gamma^-,v)\in\mathcal M^-(p,a)\times\mathcal C(a,q),\qquad \operatorname{ind}(a)=\operatorname{ind}(q),$$
or
$$\beta=(v,\gamma^+)\in\mathcal C(p,b)\times\mathcal M^+(b,q),\qquad \operatorname{ind}(b)=\operatorname{ind}(p),$$
be a once-broken continuation trajectory ([[def-broken-continuation-trajectory]]).
Then there are $\delta>0$ and a continuous injection
$\psi:[0,\delta)\to\overline{\mathcal C}(p,q)$ with
$$\psi(0)=\beta,\qquad \psi(t)\in\mathcal C(p,q)\ (t>0),$$
that is smooth on $(0,\delta)$, whose parameter $t$ is a neck-length (gluing)
parameter, and whose image is a neighbourhood of $\beta$; moreover every
sequence in $\mathcal C(p,q)$ converging geometrically to $\beta$ lies
eventually in $\psi((0,\delta))$. Consequently every once-broken boundary
point of the compactification of
[[thm-continuation-trajectories-are-compact-up-to-breaking]] has a one-sided
collar chart, and $\overline{\mathcal C}(p,q)$ is a compact one-dimensional
topological manifold with boundary whose boundary is exactly the disjoint
union of these once-broken products.

## Facts & Assumptions

**Given:** The Axiom of Choice, a closed manifold $M$, a regular continuation datum $(f_s,g_s)$, critical points $p,q$ with $\operatorname{ind}(p)-\operatorname{ind}(q)=1$, and a once-broken continuation trajectory $\beta=(\gamma^-,v)$ or $\beta=(v,\gamma^+)$ at a critical point $a$ or $b$ of the corresponding end pair.

[F1] The pieces of $\beta$ are respectively an unparametrized Morse trajectory of a Morse--Smale end and a solution of the continuation equation; in a Morse chart at the intermediate critical point the incoming trajectory approaches the critical point along the stable manifold and the outgoing one leaves along the unstable manifold, both with definite exponential rates ([[def-broken-continuation-trajectory]], [[def-regular-continuation-datum-between-morse-smale-pairs]]).

[F2] The time-dependent field has smooth local evolution operators, so splicing the pieces by a smooth neck that follows the flow across a small Morse-chart neighbourhood of the intermediate critical point produces, for every sufficiently large neck length $t$, a smooth curve $w_t$ whose defect $F(w_t)=\partial_sw_t+\nabla^{g_s}f_s(w_t)$ tends to $0$ as $t\to\infty$ in the weighted $C^0$ norm of the Banach space on which the linearization acts ([[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]], [[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]]).

[F3] The linearized continuation operator at a solution is Fredholm and surjective by regularity; at the glued curves $w_t$ its tangent operator is obtained by gluing the surjective linearizations of the two pieces, which have bounded right inverses on the two half-line models, and the right inverse is bounded uniformly for large $t$ ([[def-regular-continuation-datum-between-morse-smale-pairs]], [[lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse]]).

[F4] The Banach implicit function theorem produces from an approximate solution with small defect and a bounded right inverse a genuine solution nearby, smoothly depending on the parameters of the construction ([[thm-implicit-function-theorem-for-banach-spaces]]).

[F5] The compactification $\overline{\mathcal C}(p,q)$ is compact and metrizable, $\mathcal C(p,q)$ is its open dense unbroken locus, and the once-broken configurations at index drop one are exactly the two products displayed in the statement, with each of the end moduli spaces finite ([[thm-continuation-trajectories-are-compact-up-to-breaking]]).

[F6] The same gluing analysis is already published for the two Morse--Smale ends: once-broken index-two configurations admit collar charts and the gluing map is a diffeomorphism onto a collar ([[lem-gluing-broken-index-two-trajectories-gives-collar-ends]], [[thm-morse-trajectory-compactness-up-to-breaking]], [[prop-parametrized-morse-trajectory-space-is-a-manifold]]); the time-translation action on the tail piece is free, so the tail parameter is the neck parameter ([[lem-time-translation-acts-freely-on-nonconstant-trajectories]]).

## Proof

**Proof technique:** direct.

1.1 Fix the once-broken configuration $\beta$. For each large neck length $T$ perform the pre-gluing of [F2]: reparametrize the two pieces so that their images overlap in a fixed small Morse-chart ball at the intermediate critical point, join them along a neck that follows the flow across the ball for time $T$, and smooth the junction. The resulting curves $w_T$ are smooth and their defects $F(w_T)$ tend to $0$ in the weighted $C^0$ norm as $T\to\infty$, because the pieces solve the equation away from the junction and the junction error is concentrated in a ball that shrinks in the relevant weighted norm. [F1, F2, given, construct]

2.1 By [F3] the linearized operator $L_T$ of the continuation equation at $w_T$ is surjective with a bounded right inverse $R_T$, and the norms $\|R_T\|$ are bounded uniformly for all large $T$. The operator $L_T$ is obtained by gluing the linearizations at the two pieces, and a standard open-condition argument on the space of asymptotically hyperbolic operators shows that surjectivity and the bound persist along the family $w_T$. [F3, step 1.1]

3.1 By [F4] applied to $F$ at $w_T$ with right inverse $R_T$, there is for each large $T$ a genuine solution $u_T\in\mathcal C(p,q)$ of the continuation equation with $\|u_T-w_T\|$ bounded by a constant times $\|F(w_T)\|$, and the solutions $u_T$ depend smoothly on $T$. Writing $t=1/T$ and $\psi(t)=u_{1/t}$ for small $t>0$ gives the map of the statement, with $\psi(t)\in\mathcal C(p,q)$ for $t>0$ and smooth on $(0,\delta)$. [F4, step 2.1]

4.1 As $T\to\infty$ the curves $w_T$ converge geometrically to $\beta$ by construction, so $\|F(w_T)\|\to0$ gives $u_T\to\beta$ geometrically as $T\to\infty$; extending $\psi$ by $\psi(0)=\beta$ makes it continuous at the endpoint. The map is injective for small $t$: two distinct neck lengths give solutions whose neck regions have different lengths, and the implicit-function-theorem uniqueness makes the correspondence rigid. Thus $\psi$ is a continuous injection, smooth on $(0,\delta)$. [step 1.1, step 3.1]

5.1 The image of $\psi$ is a neighbourhood of $\beta$ in $\overline{\mathcal C}(p,q)$: if not, there is a sequence $u_n\in\mathcal C(p,q)$ converging geometrically to $\beta$ with $u_n\notin\psi((0,\delta))$ for all $n$. The pre-gluing construction applies to the pieces of $\beta$, and for large $n$ the solutions $u_n$ are close to $w_{T_n}$ for suitable neck lengths $T_n\to\infty$; by the uniqueness part of [F4] each $u_n$ equals $\psi(1/T_n)$ for large $n$, a contradiction. Hence every sequence converging to $\beta$ lies eventually in the image of $\psi$, which is the covering assertion. [F4, step 3.1, step 4.1]

6.1 Applying steps 1.1--5.1 to each once-broken boundary point, and using [F5] to identify the once-broken products as exactly the set of boundary points and to know that each end moduli space occurring is finite, endows every boundary point of the compact metrizable space $\overline{\mathcal C}(p,q)$ with a one-sided collar chart; [F6] supplies the same collar charts for the tail pieces on the two ends. A compact metrizable space of dimension one whose interior points have Euclidean charts and whose boundary points have one-sided collar charts is a compact one-dimensional topological manifold with boundary ([[def-topological-manifold-with-boundary]]), and its boundary is the disjoint union of the once-broken products. [F5, F6, step 5.1] ∎

---
id: thm-continuation-trajectories-are-compact-up-to-breaking
kind: theorem
title: "Continuation trajectories are compact up to breaking"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-broken-continuation-trajectory, def-regular-continuation-datum-between-morse-smale-pairs, lem-continuation-energy-identity, lem-continuation-solutions-have-critical-limits, thm-morse-trajectory-compactness-up-to-breaking, lem-breaking-length-is-bounded-by-index-drop, cor-index-one-trajectory-moduli-spaces-are-finite, def-morse-smale-pair, def-compact-space, def-metrizable-space, def-second-countable-space, thm-metric-compactness-equivalences, cor-equicontinuous-families-into-a-compact-metric-target, prop-compact-open-is-uniform-on-a-compact-metric-domain, def-compact-open-topology-for-topological-domains, def-first-countable-top, lem-compact-metric-space-has-a-countable-dense-subset, thm-fundamental-theorem-on-flows, cor-every-smooth-vector-field-on-a-compact-manifold-is-complete, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex, thm-implicit-function-theorem-for-banach-spaces, lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]
justified_by: []
dependency_level: 5
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (3): proof of compactness and boundary shape of C(p^-,q^+) and the two breaking cases, PDF pp. 92-93"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, Exercise 1: every sequence in the compactified moduli space has a convergent subsequence, and the boundary formula for m^V(p_1,p_0), pp. 1-3"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 4.4, Proposition 4.4.2 (compactness of the space of broken tunnelings) and the convergence convention, read at PDF pp. 193-194"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.2.b-c: compactness up to breaking and the manifold-with-boundary structure, printed pp. 63-68, PDF pp. 73-78"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f_s,g_s)$ be a
regular continuation datum from $(f^-,g^-)$ to $(f^+,g^+)$ on a closed manifold
$M$ and let $p\in\operatorname{Crit}(f^-)$,
$q\in\operatorname{Crit}(f^+)$
([[def-regular-continuation-datum-between-morse-smale-pairs]],
[[def-morse-smale-pair]]).

1. Every sequence in $\mathcal C(p,q)$ has a subsequence converging
   geometrically ([[def-broken-continuation-trajectory]]) to a broken
   continuation trajectory $\beta\in\overline{\mathcal C}(p,q)$; the number of
   tail pieces of $\beta$ is bounded by the index drop
   $\operatorname{ind}(p)-\operatorname{ind}(q)$
   ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).
2. $\overline{\mathcal C}(p,q)$, with the geometric-convergence topology, is a
   compact, metrizable and second-countable space in which $\mathcal C(p,q)$ is
   open and dense.
3. If $\operatorname{ind}(p)=\operatorname{ind}(q)$, then $\mathcal C(p,q)$ is
   compact and zero-dimensional, hence finite.
4. If $\operatorname{ind}(p)-\operatorname{ind}(q)=1$, then every boundary
   point of $\overline{\mathcal C}(p,q)$ is either of the form
   $(\gamma^-,v)\in\mathcal M^-(p,a)\times\mathcal C(a,q)$ with
   $\operatorname{ind}(a)=\operatorname{ind}(q)$, or of the form
   $(v,\gamma^+)\in\mathcal C(p,b)\times\mathcal M^+(b,q)$ with
   $\operatorname{ind}(b)=\operatorname{ind}(p)$; each of the sets
   $\mathcal M^-(p,a)$ and $\mathcal M^+(b,q)$ is finite
   ([[cor-index-one-trajectory-moduli-spaces-are-finite]]), and these
   once-broken configurations are the only points of
   $\overline{\mathcal C}(p,q)\smallsetminus\mathcal C(p,q)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a closed manifold $M$, a regular continuation datum $(f_s,g_s)$ with threshold $S>0$, critical points $p,q$ of $f^-,f^+$, and the moduli spaces $\mathcal C(p,q)$ of the datum.

[F1] Every $u\in\mathcal C(p,q)$ satisfies the uniform energy bound $E(u)\le f^-(p)-f^+(q)+2S\max_{[-S,S]\times M}|(\partial_sf_s)|=:C_0$, and $E(u)\ge0$ ([[lem-continuation-energy-identity]]).

[F2] The broken continuation trajectories of the datum and their geometric convergence are defined as finite concatenations of an unquotiented middle solution with broken Morse trajectories of the two ends; the index identity gives $r+s\le\operatorname{ind}(p)-\operatorname{ind}(q)$ for the numbers of tail pieces, and on each end the tail pieces of a broken Morse trajectory form a finite union over strictly index-decreasing chains ([[def-broken-continuation-trajectory]], [[lem-breaking-length-is-bounded-by-index-drop]]).

[F3] On a closed manifold, each of the two Morse--Smale ends satisfies the compactness-up-to-breaking theorem for its unparametrized trajectory spaces: every sequence of trajectories with fixed ends has a subsequence converging geometrically to a broken Morse trajectory; the compactified space is compact, metrizable and second-countable with the unbroken locus open and dense, and its height parametrization is a homeomorphism onto a compact subset of the compact-open function space ([[thm-morse-trajectory-compactness-up-to-breaking]]).

[F4] On the compact window $[-S,S]$, the restrictions of solutions are solutions of the smooth $s$-dependent ODE on the compact manifold $M$; the velocity bound is uniform because the field $s\mapsto-\nabla^{g_s}f_s$ is smooth on the compact set $[-S,S]\times M$ and the flows are complete under the Axiom of Choice ([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]], [[thm-fundamental-theorem-on-flows]]). Consequently on this window uniform bounds on the position give uniform $C^1$-bounds and every sequence has a $C^0$-convergent subsequence with a uniform Cauchy modulus ([[cor-equicontinuous-families-into-a-compact-metric-target]], [[thm-metric-compactness-equivalences]]).

[F5] The compact-open topology on $C^0$ of a compact metric domain is the topology of uniform convergence and is metrizable, second-countable and first countable; a compact metric space has a countable dense subset ([[prop-compact-open-is-uniform-on-a-compact-metric-domain]], [[def-compact-open-topology-for-topological-domains]], [[def-metrizable-space]], [[def-second-countable-space]], [[def-first-countable-top]], [[lem-compact-metric-space-has-a-countable-dense-subset]], [[def-compact-space]]).

[F6] For index drop one, each end's index-one trajectory moduli space is a finite set ([[cor-index-one-trajectory-moduli-spaces-are-finite]]).

[F7] Near a broken configuration the linearized continuation operator is surjective, because the datum is regular and the linearization differs from the surjective linearizations of the pieces by a compactly supported perturbation; the half-line model operators with hyperbolic limits have bounded right inverses, uniformly near the pieces ([[def-regular-continuation-datum-between-morse-smale-pairs]], [[lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse]], [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]], [[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]]).

[F8] The Banach implicit function theorem produces from an approximate solution with sufficiently small defect and a bounded right inverse a genuine solution nearby ([[thm-implicit-function-theorem-for-banach-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the energy $E(u)$ is bounded by the constant $C_0$ uniformly over all $u\in\mathcal C(p,q)$, and on the tails $s\le-S$, $s\ge S$ the equation is the autonomous negative gradient equation of the Morse functions $f^\pm$ with critical limits supplied by [[lem-continuation-solutions-have-critical-limits]]. [F1, given]

2.1 Restrict every $u\in\mathcal C(p,q)$ to the compact window $[-S,S]$. By [F4] the fields $s\mapsto-\nabla^{g_s}f_s$ are uniformly bounded and uniformly Lipschitz on the compact set $[-S,S]\times M$, so the family of restrictions is equicontinuous and pointwise precompact in $(M,d)$; Arzel\`a--Ascoli in the form of [F4] therefore extracts from every sequence in $\mathcal C(p,q)$ a subsequence whose restrictions to $[-S,S]$ converge uniformly. [F4, step 1.1]

3.1 Consider the negative tails $s\le-S$ of the subsequence of step 2.1. These are trajectories of the complete autonomous field $-\nabla^{g^-}f^-$ ([[def-regular-continuation-datum-between-morse-smale-pairs]]), so by the compactness-up-to-breaking theorem of the first end [F3] a further subsequence of the tails, after independent time shifts, converges geometrically to a broken Morse trajectory $\gamma^-_1\#\cdots\#\gamma^-_r$ from $p$ to some critical point $a$, with $r\le\operatorname{ind}(p)-\operatorname{ind}(a)$. [F3, step 1.1, step 2.1]

4.1 The same argument on the positive tails $s\ge S$ produces, after a further subsequence, a broken Morse trajectory $\gamma^+_s\#\cdots\#\gamma^+_1$ from some critical point $b$ to $q$ with $s\le\operatorname{ind}(b)-\operatorname{ind}(q)$, and the terminal values of the negative tails and the initial values of the positive tails are linked by the limit $v$ of the restrictions on the compact window obtained in step 2.1, which is again a solution of the continuation equation on $[-S,S]$ and extends to a middle piece $v\in\mathcal C(a,b)$ by the two-end limits of the tails. [F3, step 2.1, step 3.1]

5.1 The assembled object is a broken continuation trajectory from $p$ to $q$: the pieces satisfy the incidence relations of [F2], and the index identity of [F2] applied to the two end chains and the middle piece bounds the total number of tail pieces by $\operatorname{ind}(p)-\operatorname{ind}(q)$; this proves part 1. [F2, step 3.1, step 4.1]

6.1 For compactness of $\overline{\mathcal C}(p,q)$: assign to a broken continuation trajectory the continuous path obtained by concatenating the height parametrizations of its pieces; by [F3] each end contributes a homeomorphism onto a compact set of compact-open paths, and the middle piece contributes its own parametrized path on the compact window, so the concatenation is a continuous injection into the compact-open space of paths between the two critical values. Every sequence of broken continuation trajectories has a geometrically convergent subsequence by the extraction of steps 2.1--4.1 applied stratum by stratum, an induction on the number of pieces which uses [F3] for the tail chains and step 2.1 for the middle piece; hence the image is sequentially compact, and therefore compact because the compact-open space of paths is metrizable. A continuous bijection from a compact space onto its Hausdorff image is a homeomorphism, and [F5] then gives metrizability, second countability and first countability. Conversely a geometric limit of broken configurations is itself broken, because it is described by finitely many pieces with the incidence relations of [F2] and the index bound is closed under limits; hence the broken locus is closed and $\mathcal C(p,q)$ is open in $\overline{\mathcal C}(p,q)$. [F2, F3, F5, step 5.1, step 2.1, step 4.1]

7.1 For the density of $\mathcal C(p,q)$, fix $\beta\in\overline{\mathcal C}(p,q)$ with pieces $\gamma^-_1,\dots,\gamma^-_r,v,\gamma^+_s,\dots,\gamma^+_1$. For a large neck parameter $\rho$ pre-glue the pieces: patch consecutive pieces inside small Morse charts at the intermediate critical points by the explicit local flow-line interpolation, obtaining a smooth curve $w_\rho$ that agrees with the pieces outside the $\rho$-neighbourhoods of the break points; the defect $F(w_\rho)=\partial_sw_\rho+\nabla^{g_s}f_s(w_\rho)$, measured in the weighted $C^0$ norm, tends to $0$ as $\rho\to\infty$ because the pieces solve the equation and, in the Morse-chart model, the incoming and outgoing pieces approach the critical point at compatible exponential rates. By [F7] the linearized operator at $w_\rho$ is surjective with a bounded right inverse uniformly for large $\rho$; [F8] therefore produces a genuine solution $u_\rho$ of the continuation equation with $\|u_\rho-w_\rho\|\to0$ as $\rho\to\infty$. The solutions $u_\rho$ converge geometrically to $\beta$, so every point of $\overline{\mathcal C}(p,q)$ is a limit of points of $\mathcal C(p,q)$, which is the asserted density. [F7, F8, step 6.1]

7.2 For part 3, let $\operatorname{ind}(p)=\operatorname{ind}(q)$. Then every broken limit of part 1 has $r+s=0$ by the index bound of [F2], so $\mathcal C(p,q)$ is closed in the compact space $\overline{\mathcal C}(p,q)$; it is a zero-dimensional smooth manifold by the dimension formula of the datum, and a compact zero-dimensional manifold is finite. [F2, step 5.1, step 6.1]

8.1 For part 4, let $\operatorname{ind}(p)-\operatorname{ind}(q)=1$. Then the index identity of [F2] leaves only the two patterns $(\gamma^-,v)$ and $(v,\gamma^+)$ with a single tail piece of index drop one and a middle piece of index drop zero, i.e. $\operatorname{ind}(a)=\operatorname{ind}(q)$ and $\operatorname{ind}(b)=\operatorname{ind}(p)$; no deeper breaking is possible, and each surviving end moduli space is finite by [F6]. These are exactly the boundary points, since a boundary point is a geometric limit of unbroken solutions by step 7.1 and is therefore one of the broken limits classified in part 1. [F2, F6, step 7.1, step 7.2] ∎

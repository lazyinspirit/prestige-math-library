---
id: lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit
kind: lemma
title: "Local generalized Poincare-Bendixson theorem for a precompact planar orbit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finitely-cornered-regular-plane-curve-separates-without-choice, thm-heine-borel-rn, lem-c1-euclidean-maximal-flow-with-c2-upgrade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 2
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
      locator: "Theorem 7.16 and its planar preliminaries (\u00a77.3, printed pp. 223-232); the proof here is local and explicitly avoids sequential compactness"
---

## Statement

Let $U\subseteq\mathbb R^2$ be open and let $Y:U\to\mathbb R^2$ be a $C^1$ vector
field with flow $\Phi$. Let $\mathcal O^+(y)=\{\Phi_t(y):t\ge0\}$ be a positive
orbit whose closure $K_0=\overline{\mathcal O^+(y)}$ is compact and satisfies
$K_0\Subset U$. Put $K=\omega^+(y)=\bigcap_{T\ge0}
\overline{\{\Phi_t(y):t\ge T\}}$, and assume $K$ contains only finitely many
equilibria (zeros of $Y$). Then exactly one of the following forms holds:

(i) $K$ is a singleton equilibrium;

(ii) $K$ is one regular periodic orbit;

(iii) $K$ is a nonempty finite set $E$ of equilibria together with at least one
regular trajectory, and every regular point of $K$ lies on such a trajectory
whose alpha- and omega-limit sets are points of $E$.

The family of connecting trajectories in (iii) need not be finite. The
conclusion uses no choice principle beyond the ambient Euclidean completeness.

## Facts & Assumptions

**Given:** A $C^1$ field $Y$ on an open set $U\subseteq\mathbb R^2$, a positive orbit $\mathcal O^+(y)$ with compact closure $K_0\Subset U$, and the limit set $K=\omega^+(y)=\bigcap_{T\ge0}\overline{\{\Phi_t(y):t\ge T\}}$, which contains only finitely many equilibria.

[F1] The field $Y$ has a unique maximal flow $\Phi$, jointly $C^1$ and satisfying $\partial_t\Phi=Y(\Phi)$; two trajectories through one point agree on the common part of their time intervals; each time slice is injective; a trajectory remaining in a compact subset of $U$ has no finite maximal endpoint; each trajectory of a $C^1$ field is $C^2$ in time; and at a regular point there is a $C^1$ flow box whose plaques are carried by the flow ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F2] A piecewise-$C^2$ topological embedding $c:S^1\to\mathbb R^2$ with finitely many corners, each having two distinct one-sided tangent rays and regular edges, has a complement with exactly two connected components, one bounded and one unbounded ([[lem-finitely-cornered-regular-plane-curve-separates-without-choice]]).

[F3] Closed and bounded subsets of $\mathbb R^2$ are compact, so a nested decreasing family of nonempty compact subsets of $\mathbb R^2$ has nonempty intersection, and a continuous function on a compact set attains its bounds ([[thm-heine-borel-rn]]).



## Proof

**Proof technique:** direct.

1.1 The sets $K_T:=\overline{\{\Phi_t(y):t\ge T\}}$ are nested nonempty compact connected subsets of $K_0\Subset U$; by the finite-intersection property for nested compacta [F3], $K=\bigcap_TK_T$ is nonempty and compact, and it is connected because the intersection of a decreasing family of continua is a continuum. Flow continuity and the flow law make $K$ invariant: $\Phi_s(K)\subseteq K$ for every real $s$ for which it is defined near $K$, since $\Phi_s(K_T)\subseteq K_{T+s}$ and $K$ is closed. [given, F1, F3]

1.2 **A transverse section and monotone crossings.** Fix a regular point $w\in K_0$ and a compact embedded segment $\Sigma$ through $w$, contained in one flow box of [F1] and transverse to $Y$ at every point; parameterize $\Sigma$ by an interval coordinate and write $p_0<p_1<\dots$ for the intersection points of an orbit with $\Sigma$ in the order of visiting times $t_0<t_1<\dots$. Such times are isolated, because the flow box straightens the field and the section is transverse to its direction. Let $p_0,p_1$ be two consecutive intersections of some orbit with $\Sigma$ and consider the closed curve $C$ formed by the orbit arc $\gamma|_{[t_0,t_1]}$ together with the subarc of $\Sigma$ from $p_0$ to $p_1$. It is a simple closed piecewise-$C^2$ curve with two corners at $p_0,p_1$, each having distinct one-sided tangents, because the orbit is transverse to $\Sigma$ and, by uniqueness [F1], the arc has no self-intersection and, by consecutiveness, meets $\Sigma$ only at its endpoints; both facts use that the orbit is not periodic on $[t_0,t_1]$. By [F2] the complement of $C$ has exactly two components. The forward orbit leaves $p_1$ on the side of the crossing opposite to the incoming arc and hence enters the component of $\mathbb R^2\setminus C$ whose closure meets $\Sigma$ in the ray beyond $p_1$: it cannot cross the orbit arc by uniqueness and cannot meet $\Sigma$ until its next visit, so the next intersection satisfies $p_2>p_1$ when $p_1>p_0$, and symmetrically $p_2<p_1$ when $p_1<p_0$. Repeating the same argument for each consecutive triple makes the sequence of crossing coordinates strictly monotone in one direction; a repeated intersection, instead, makes the orbit periodic by uniqueness. [given, F1, F2]

2.1 **At most one point of $K$ on a compact section.** Let $\Sigma$ be compact and transverse as in step 1.2, extend it slightly within its flow box so its endpoints are interior to the extended section, and let $q\in K\cap\Sigma$. Then $q$ is a limit of crossing points of the original orbit with $\Sigma$: late orbit points $\Phi_t(y)$ with $t\to\infty$ approach $q$, and in a small flow box around $q$ the section is crossed within a uniformly bounded signed time, so some crossing point lies arbitrarily close to $q$. Since a transverse section meets each time-parametrised orbit in isolated times, all these crossing points avoid neighbours of $q$ only finitely often; more precisely, the monotone sequence of crossing coordinates of the orbit converges to the coordinate of the unique limit point. By the strict monotonicity of step 1.2 (for the orbit's crossings, or for the crossings of any invariant orbit inside $K$) two distinct points of $K\cap\Sigma$ would give two different limits of the same monotone sequence, which is impossible; hence $K\cap\Sigma$ has at most one point, and any orbit contained in $K$ has at most one distinct intersection point with $\Sigma$, although a periodic orbit returns to that point repeatedly. [step 1.2, F1]

3.1 **The dichotomy for a regular point of $K$.** Fix a regular point $z\in K$; since $K$ is invariant [step 1.1], the whole trajectory of $z$ lies in $K$. Its forward limit set $\omega^+(z)=\bigcap_{T\ge0}\overline{\{\Phi_t(z):t\ge T\}}$ is nonempty, compact, connected and contained in $K$ by the same nested-tail argument as in step 1.1, and it is invariant. If $\omega^+(z)$ contains a regular point $w$, choose a compact transverse section $\Sigma$ through $w$; the forward orbit of $z$ crosses $\Sigma$ infinitely often at points accumulating at $w$, and all these crossing points lie in $K$ by invariance and closedness, hence in the at-most-single-point set $K\cap\Sigma$ of step 2.1; thus two such crossings coincide, and by uniqueness the orbit of $z$ is periodic, with $\omega^+(z)$ equal to that periodic orbit. If $\omega^+(z)$ contains no regular point, then every point of it is an equilibrium, so $\omega^+(z)$ is a nonempty connected subset of the finite equilibrium set and hence a singleton equilibrium. [step 1.1, step 2.1, F1]

4.1 **Assembling the three alternatives.** If $K$ has no regular points, then $K$ is a connected nonempty subset of the finite equilibrium set, hence a singleton equilibrium, which is (i). If $K$ has no equilibrium, take any regular $z\in K$; by step 3.1 either its orbit is periodic, in which case the periodic orbit $P\subseteq K$ is compact, or $\omega^+(z)$ is a singleton equilibrium, contrary to the absence of equilibria; so $P$ exists. The periodic orbit is open in $K$: a finite flow-box tube around $P$ meets $K$ only in $P$, because any point of $K$ in such a tube is carried by the flow to a transverse section that already meets $P$ in at most one point, and would either produce a second point of $K$ on that section or lie on $P$; formally, apply step 2.1 to a short section through a point of $P$ and to the crossings forced by the tube. Being also closed in the compact $K$ and nonempty, $P=K$ by connectedness of $K$, which is (ii). Finally suppose $K$ has both a regular point $z$ and an equilibrium. Then $\omega^+(z)$ is a singleton equilibrium by step 3.1, and the same section argument applies to the alpha-limit of $z$: a regular alpha-limit point would force two negative-time crossings in the singleton $K\cap\Sigma$, and hence periodicity; thus its alpha-limit is a singleton equilibrium; for an arbitrary regular point $z'$ of $K$ the same dichotomy gives that $\omega^+(z')$ is a singleton equilibrium as well, since if it were the periodic orbit $P$ of step 3.1 then the tube argument of the second case above would make $P$ open and closed in the connected $K$, so $K=P$ would carry no equilibrium, contrary to the present case, and the same negative-time section argument makes $\alpha(z')$ a singleton equilibrium; writing $E$ for the finite set of equilibria of $K$, every regular point of $K$ lies on its own trajectory and has both one-sided limit sets in $E$, so $K=E\ \cup\ \{\text{the regular trajectories in }K\}$, which is (iii). [step 3.1, F1]

5.1 Steps 1.1–4.1 cover the three cases exhaustively and each alternative holds exactly when the corresponding case does, so exactly one of (i), (ii), (iii) occurs; the arguments used only the flow box and uniqueness clauses of the $C^1$ flow [F1], the finite-corner Jordan separation [F2] and compactness [F3], all of which are choice-free, so no choice principle is invoked. [step 4.1] ∎

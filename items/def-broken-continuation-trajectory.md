---
id: def-broken-continuation-trajectory
kind: definition
title: "Broken continuation trajectories and geometric convergence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-continuation-datum-between-morse-smale-pairs, def-broken-morse-trajectory, def-geometric-convergence-to-a-broken-morse-trajectory, def-unparametrized-morse-trajectory-moduli-space, def-morse-smale-pair, def-morse-trajectory-from-p-to-q, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-breaking-length-is-bounded-by-index-drop, cor-no-morse-smale-trajectories-for-nonpositive-index-drop, def-topology-of-compact-convergence, lem-continuation-solutions-have-critical-limits, def-countable-choice]
justified_by: []
dependency_level: 2
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (3)-(4): the two breaking patterns M^-_0(p,a)xC_0(a,q) and C_0(p,b)xM^+_0(b,q) and the general breaking picture, PDF pp. 92-94"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.1: compactification of moduli spaces and the smooth-on-compact-sets convergence convention, p. 1 of the lecture"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.2.a (spaces of broken trajectories and their topology) and Sec. 3.4 (the broken configurations of the interpolating complex), printed pp. 61-63 and 73-77, PDF pp. 71-73 and 83-87"
verification:
  precheck: n/a
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the smooth-bundle setup. Let $(f_s,g_s)$ be a regular continuation datum from $(f^-,g^-)$ to $(f^+,g^+)$ on a
closed manifold $M$ ([[def-regular-continuation-datum-between-morse-smale-pairs]]),
let $p\in\operatorname{Crit}(f^-)$, $q\in\operatorname{Crit}(f^+)$
([[def-morse-smale-pair]]), and let $\mathcal C(p,q)$ be the continuation
moduli spaces of the datum.

A **broken continuation trajectory** from $p$ to $q$ consists of nonconstant
autonomous tail pieces and one continuation solution (which may be constant)
$$\bigl(\gamma^-_1,\dots,\gamma^-_r;\ v;\ \gamma^+_1,\dots,\gamma^+_s\bigr),\qquad r,s\ge0,$$
together with critical points $p=p^-_0,p^-_1,\dots,p^-_r$ of $f^-$ and
$q=p^+_0,p^+_1,\dots,p^+_s$ of $f^+$ such that
$$\gamma^-_i\in\mathcal M^-(p^-_{i-1},p^-_i),\qquad v\in\mathcal C(p^-_r,p^+_s),\qquad \gamma^+_j\in\mathcal M^+(p^+_j,p^+_{j-1})$$
for all $i,j$ ([[def-unparametrized-morse-trajectory-moduli-space]],
[[def-morse-trajectory-from-p-to-q]]). The pieces are read in the temporal
order $\gamma^-_1,\dots,\gamma^-_r,\ v,\ \gamma^+_s,\gamma^+_{s-1},\dots,\gamma^+_1$;
the tuple displays the pieces of the two ends in increasing order of their
index-drop chains. The space of broken continuation trajectories from $p$ to
$q$ is denoted $\overline{\mathcal C}(p,q)$; the locus $r=s=0$ is
$\mathcal C(p,q)$ itself.

The pieces carry the index drops
$$d_i:=\operatorname{ind}(p^-_{i-1})-\operatorname{ind}(p^-_i)\ge1,\qquad e_j:=\operatorname{ind}(p^+_j)-\operatorname{ind}(p^+_{j-1})\ge1,\qquad m:=\operatorname{ind}(p^-_r)-\operatorname{ind}(p^+_s)\ge0,$$
which are nonnegative by the emptiness of the corresponding spaces for
nonpositive drop ([[cor-no-morse-smale-trajectories-for-nonpositive-index-drop]],
[[def-regular-continuation-datum-between-morse-smale-pairs]]), and the index
identity
$$\operatorname{ind}(p)-\operatorname{ind}(q)=r+s+m+\sum_{i=1}^{r}(d_i-1)+\sum_{j=1}^{s}(e_j-1)$$
holds by telescoping the drops along the two chains
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]). In
particular $r+s\le\operatorname{ind}(p)-\operatorname{ind}(q)$, and equality
holds precisely when every tail piece connects critical points of consecutive
index and the middle piece has index difference $m=0$. The number of tail pieces
is bounded by the index drop, exactly as for the broken Morse trajectories of
a Morse--Smale pair ([[lem-breaking-length-is-bounded-by-index-drop]],
[[def-broken-morse-trajectory]]).

A sequence $u_n\in\mathcal C(p,q)$ **converges geometrically** to such a
configuration if $u_n\to v$ in $C^\infty$ on compact time intervals without
shifting the middle solution, and there are shifts $a^i_n\to-\infty$ and
$b^j_n\to+\infty$ such that
$$u_n(\,\cdot+a^i_n)\to\gamma^-_i,\qquad u_n(\,\cdot+b^j_n)\to\gamma^+_j$$
in $C^\infty$ on compact intervals, for chosen parametrized representatives
of the autonomous orbit classes. Temporal order requires
$a^{i+1}_n-a^i_n\to+\infty$ and $b^{j-1}_n-b^j_n\to+\infty$.
For the middle and each shifted autonomous tail, $C^0$ convergence on compact
intervals implies convergence of all derivatives by differentiating the
corresponding smooth ODE; the shifted equation on every fixed compact tail
interval is eventually the fixed autonomous end equation
([[def-topology-of-compact-convergence]],
[[def-geometric-convergence-to-a-broken-morse-trajectory]]).

The topology on $\overline{\mathcal C}(p,q)$ uses compact-time tests on the
unshifted middle solution and ordered regular-level transversal tests on the
autonomous components. A neighbourhood specifies compact intervals and open
neighbourhoods of the middle curve on them, and open transversal
neighbourhoods along each tail; configurations may smooth some breaks but
must pass these tests in the stated order. Shrinking the tests gives a
neighbourhood basis, with the compact-convergence topology on the unbroken
locus and the corresponding broken-end topology on each stratum. The middle
solution's time coordinate is fixed: translating it generally changes the
continuation equation. Every middle solution has critical limits by
[[lem-continuation-solutions-have-critical-limits]].

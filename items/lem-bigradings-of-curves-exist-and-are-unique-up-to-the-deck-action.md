---
id: lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action
kind: lemma
title: "Existence and rigidity of bigradings"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
  - def-khovanov-seidel-bigraded-cover-and-bigraded-curves
  - def-curves-and-geometric-intersection-numbers-on-the-marked-disk
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-deck-transformation-and-deck-group
  - thm-covering-space-lifting-criterion
  - thm-homotopy-lifting-for-covering-maps
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Lemmas 3.12 and 3.13"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Lemmas 3.12 and 3.13 with their proofs, printed pp. 24-25"
verification:
  precheck: pass
---

## Statement

Let $(D,\Delta)$ be the marked disk and $\widetilde\pi\colon\widetilde P\to P$
the $\mathbb Z^2$-cover of
[[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]] with deck action
$\chi$. A curve $c$ in $(D,\Delta)$
([[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]) admits a
bigrading if and only if $c$ is not a simple closed curve; when it does, any two
bigradings of $c$ differ by a unique element of the deck group $\mathbb Z^2$.
Moreover, the $\mathbb Z^2$-action on isotopy classes of bigraded curves is
free: a bigraded curve is never isotopic to $\chi(r_1,r_2)\widetilde c$ with
$(r_1,r_2)\ne0$. Consequently a bigrading of a non-closed curve is unique up to
the deck action, and an isotopy of curves lifts uniquely to an isotopy of
bigraded curves once one bigrading is fixed, whenever the lifted bigradings
exist throughout the isotopy.

## Facts & Assumptions
**Given:** The marked disk $(D,\Delta)$, the pullback covering $\widetilde\pi$ of the universal covering of $(\mathbb C^*/\mathbb R_{>0})^2$ along $\delta_P$, with deck group $\mathbb Z^2$ acting by $\chi$, and a curve $c$ with canonical section $s_c$.

[L1] A bigrading of $c$ is a continuous lift of $s_c$ to $\widetilde P$; the deck group acts on bigradings by composition with $\chi$, and bigraded isotopy is isotopy through pairs ([[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]]).

[L2] A map from a path-connected, locally path-connected space lifts through a covering with a prescribed initial point exactly when its induced fundamental-group image lies in that of the covering; homotopies lift uniquely from an initial lift ([[thm-covering-space-lifting-criterion]], [[thm-homotopy-lifting-for-covering-maps]]). In this particular pullback, a lift is a continuous real-coordinate lift $x$ of $\delta_Ps_c$, and $\chi(r)$ sends $x$ to $x+r$. Thus each fibre is a free transitive $\mathbb Z^2$-set: this follows from the explicit translation formula, not from a freeness assertion for arbitrary deck groups ([[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]]).

[L3] A curve is either an embedded arc with interior in $D^\circ\setminus\Delta$, or an essential simple closed curve in $D^\circ\setminus\Delta$; an arc with its endpoints in $\Delta$ removed is a contractible interval, possibly closed or half-open at boundary endpoints, and the complement of the marked points in a simple closed curve is connected ([[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]).

[L4] The covering $\widetilde P$ is classified by the cohomology class whose value on a small positively oriented loop $\lambda_z$ around a marked point is $(-2,1)$ and whose value on the class of a full turn of the tangent line over a point is $(1,0)$; an essential simple closed curve in the punctured disk bounds a topological disk in $D$ containing $k\ge1$ marked points, and its class pairs with the covering class as $\pm(2-2k,k)\ne(0,0)$ ([[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]]).



## Proof

**Proof technique:** direct.

1.1 *Non-closed curves admit bigradings.* If $c$ is an arc, $c\setminus\Delta$ is a contractible interval [L3], hence path-connected and locally path-connected with trivial fundamental group. Choose any point over $s_c(z_0)$; the subgroup condition in [L2] is then automatic, and the lifting criterion gives a continuous lift of $s_c$, which is a bigrading. [L1, L2, L3]

1.2 *Simple closed curves do not admit bigradings.* By Jordan's theorem an essential simple closed curve encloses $k\ge1$ marks. The two circle coordinates of $\delta_Ps_c$ have winding $\pm(2-2k,k)$ by [L4]. A continuous real-coordinate lift around $c$ would return to its initial value, forcing both windings to be zero, contrary to $k\ge1$. Hence no bigrading exists. [L2, L4]

1.3 *Uniqueness up to the deck action.* Suppose $c$ admits bigradings $\widetilde c$ and $\widetilde c'$. Both are lifts of the same section $s_c$ over the connected base $c\setminus\Delta$ [L3], so $\widetilde c'(z)=\chi(\delta(z))\widetilde c(z)$ for a continuous function $\delta\colon c\setminus\Delta\to\mathbb Z^2$; since $\mathbb Z^2$ is discrete this function is locally constant, and since $c\setminus\Delta$ is connected it is constant, say $\delta\equiv(r_1,r_2)$. Thus $\widetilde c'=\chi(r_1,r_2)\widetilde c$, and $(r_1,r_2)$ is unique because $\chi$ acts freely on each fibre. [L1, L2, L3]

1.4 *Freeness on isotopy classes.* Parametrize the given bigraded isotopy by smooth embedded arcs $\gamma_t:[0,1]\to D$, choosing the parametrizations so that $\gamma_1=\gamma_0$; this is possible by interpolating the increasing reparametrization of the returned arc. The base and tangent-line traces at each unmarked parameter value are therefore closed loops. If the arc has a boundary endpoint, that endpoint is fixed, and its tangent line stays transverse to the boundary throughout the isotopy. Its projective tangent trace lies in $\mathbb RP^1$ minus the boundary tangent line, a contractible interval; its base trace is constant. Hence its cover monodromy is zero. If both endpoints are distinct marks $q_0,q_1$, the loops $\kappa_s(t)=\gamma_t(s)$ for $0<s<1$ are freely homotopic as $s$ varies, and thus have the same winding about every mark. Near $q_0$ all windings except the one about $q_0$ vanish, while near $q_1$ all except the one about $q_1$ vanish. Comparing these tuples shows that every winding is zero. For small $s>0$, $\kappa_s(t)-q_0=s\gamma_t'(0)+o(s)$ uniformly in $t$, so the nonzero vector loop $\gamma_t'(0)$ also has winding zero; the tangent-line trace at $\gamma_t(s)$ converges to its projectivization, and thus has zero fibre winding. The two coordinates of the covering monodromy in [L4] are consequently zero. The deck shift is constant along the connected arc, so in both endpoint cases $(r_1,r_2)=0$. This is the endpoint comparison of Khovanov--Seidel Lemma bigrading-isotopy, printed p. 24, with the tangent contribution made explicit. [L1, L2, L3, L4]

2.1 *Conclusion and isotopy lifting.* Steps 1.1 and 1.2 give the existence criterion, step 1.3 gives uniqueness up to a unique deck element, and step 1.4 gives freeness on isotopy classes. Parametrize an arc isotopy by a fixed interval with its marked ends removed. Its tangent sections give a homotopy into $P$, which lifts uniquely from a prescribed initial bigrading by [L2]; interpreting the lifted map on each moving arc gives the required bigraded isotopy. No choice principle is used. [L2, step 1.1, step 1.2, step 1.3, step 1.4] ∎

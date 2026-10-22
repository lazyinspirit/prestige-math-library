---
id: thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice
kind: theorem
title: Compact manifolds are retracts of finite polyhedra without choice
status: draft
origin: pipeline
deps:
  - def-cw-complex-with-closure-finiteness-and-weak-topology
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Hatcher, Algebraic Topology, Appendix
      url: https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf
      locator: Neighborhood retracts and finite domination
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

Every compact Hausdorff topological manifold $M$, with boundary allowed, admits an embedding $e:M\hookrightarrow\mathbb R^N$, an open neighborhood $U$ of $e(M)$ and a retraction $r:U\to e(M)$. Moreover there is a finite Euclidean cubical complex $L$ with $e(M)\subseteq L\subseteq U$, so that $r|_L$ makes $M$ an actual retract of a finite CW complex. No choice principle, smooth or PL structure, triangulation of $M$, or general locally contractible-space retraction theorem is assumed.

## Facts & Assumptions

**Given:** The compact Hausdorff manifold.

[F1] A finite union of closed cubes from one rectangular grid, together with all their faces, is a finite CW complex: distinct relative interiors of grid faces are disjoint, the closed faces give their characteristic maps, their boundaries consist of lower-dimensional faces, and the finite closed-cover topology gives the weak topology. [[def-cw-complex-with-closure-finiteness-and-weak-topology]]

## Proof

1.1 Choose finitely many chart domains $V_i$ whose smaller concentric coordinate balls cover $M$, using compactness. For boundary charts use the relatively open unit half-ball $B^n_+=\{x:|x|<1,\ x_n\ge0\}$; for interior charts use the unit ball. Denote the chart by $\varphi_i$ and arrange that the radius-$1/3$ smaller balls cover. Choose the explicit radial bump $\rho_i$ equal to $1$ at radius at most $1/3$ and zero at radius at least $2/3$, interpolating linearly in between, and extend it by zero outside $V_i$. Its support is compact in $V_i$. Define $$e(x)=\bigl(\rho_i(x),\,\rho_i(x)\varphi_i(x)\bigr)_{i=1}^s\in\mathbb R^{s(n+1)},$$ with the vector entry zero outside $V_i$. Boundedness of the chart coordinates makes these extensions continuous. If $e(x)=e(y)$, choose an index with $\rho_i(x)>0$. The equal scalar and vector entries recover $\varphi_i(x)=\varphi_i(y)$ and hence $x=y$. A continuous injection of a compact space into the Hausdorff Euclidean space is an embedding. From now on identify $M$ with its image. All choices here form one finite list. [given, construct, algebra]

2.1 Write an ambient point in the $i$th block as $(t_i,z_i)$. On the open ambient set $O_i=\{t_i>0,\ |z_i/t_i|<1\}$ define $$q_i(t,z)=e\bigl(\varphi_i^{-1}(p_i(z_i/t_i))\bigr),$$ where $p_i$ is the identity for an interior chart and $p_i(x_1,\ldots,x_n)=(x_1,\ldots,x_{n-1},\max(0,x_n))$ for a boundary chart. The latter decreases norm and retracts the unit ball onto its relative half-ball. Thus $q_i:O_i\to e(V_i)$ is continuous and $q_i(x)=x$ for every $x\in M\cap O_i$. The compact sets $K_i=e(\{\rho_i\ge1/2\})$ cover $M$ and lie in $O_i$. Choose a positive $\delta_i$ with the closed $\delta_i$ neighborhood of $K_i$ contained in $O_i$; such a number exists by compactness and the open cover by small ambient balls. Put $\beta_i(z)=\max(0,\delta_i-\operatorname{dist}(z,K_i))$. Its closed support $S_i$ is compact and contained in $O_i$, and $\sum_i\beta_i>0$ on $M$. Empty $K_i$ may simply be discarded. No nearest-point selection is made: distance means the infimum of the set of distances. [step 1.1, construct, algebra]

3.1 We construct successive continuous maps $r_j:D_j\to M$, where $D_j=U_j\cap\{\beta_1+\cdots+\beta_j>0\}$ and $U_j$ is an open neighborhood of $M$. In addition require the following controlled property even at points outside $D_j$: for every $x\in M$ and every neighborhood $V$ of $x$ in $M$, there is an ambient neighborhood $A$ of $x$ with $r_j(A\cap D_j)\subseteq V$. Begin with $U_0=\mathbb R^N$ and the empty map. Suppose the property holds for $r_{j-1}$. There is an open neighborhood $U_j\subseteq U_{j-1}$ of $M$ such that $$r_{j-1}(U_j\cap S_j\cap D_{j-1})\subseteq e(V_j).$$ Indeed, at $x\in M\cap S_j$ the chart $e(V_j)$ is a neighborhood of $x$, so the controlled property supplies the required ambient neighborhood. At $x\in M\setminus S_j$ an ambient neighborhood avoids the closed set $S_j$. Take the union of all open subsets of $U_{j-1}$ satisfying the displayed containment. This union contains $M$ and itself satisfies that containment. Taking the union of all admissible neighborhoods avoids selecting one for every point. [step 1.1, step 2.1, construct, algebra]

4.1 On $D_j$ put $a=\beta_1+\cdots+\beta_{j-1}$ and $b=\beta_j$. Where $b=0$ use $r_j=r_{j-1}$; where $a=0$ use $r_j=q_j$. If $a,b>0$, both $r_{j-1}$ and $q_j$ lie in $e(V_j)$ by step 3.1, so define $$r_j(z)=e\varphi_j^{-1}\left(\frac{a}{a+b}\,\varphi_j e^{-1}r_{j-1}(z)+\frac{b}{a+b}\,\varphi_j e^{-1}q_j(z)\right).$$ The chart image is a bounded convex ball or half-ball, so the convex combination remains in it. This map is continuous where both weights are positive. At a point where $a=0,b>0$, the first coordinate vector is uniformly bounded in the unit ball and its coefficient tends to zero; the expression therefore tends to the $q_j$ value regardless of whether $r_{j-1}$ has a limit there. At $b=0,a>0$, either a neighborhood avoids $S_j$, or the point is in $S_j$ and the containment from step 3.1 puts $r_{j-1}$ in $e(V_j)$ there. Continuity of $r_{j-1},q_j$ and the bounded coordinate formula then gives the stated $r_{j-1}$ value. This proves continuity on all of $D_j$. [step 2.1, step 3.1, construct, algebra]

5.1 The controlled property also persists. At $x\notin S_j$ the map locally is the old map. At $x\in M\cap S_j$, choose a sufficiently small convex coordinate neighborhood of $\varphi_j(x)$ in the ball or half-ball whose inverse lies in a prescribed neighborhood of $x$. The old controlled property puts all defined old values in this neighborhood for ambient points sufficiently near $x$; continuity of $q_j$ and $q_j(x)=x$ puts the new values there too. Every convex blend, as well as each endpoint case, remains in that neighborhood. This proves the property at $x$. Whenever $r_j$ is defined at a point of $M$, all contributing maps have value that point, so $r_j|_{M\cap D_j}$ is the identity. Finite induction ends with $M\subset D_s$, since the sum of the weights is positive there. The continuous map $r_s:D_s\to M$ is therefore the required neighborhood retraction. The induction and neighborhood unions require no infinite selection. [step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 By compactness, some positive $\varepsilon$ has the closed $\varepsilon$ neighborhood of $M$ contained in the open set $D_s$: finitely many ambient balls with doubled balls inside $D_s$ give a uniform positive minimum radius. Choose a rectangular grid with cube side less than $\varepsilon/\sqrt N$. There are only finitely many grid cubes meeting the bounded compact set $M$, and their union $L$ contains $M$ and lies in $D_s$, because each such cube has diameter less than $\varepsilon$. Include all cube faces. This is a finite CW complex by [F1], and the inclusion $M\hookrightarrow L$ followed by $r_s|_L$ is literally the identity on $M$. Empty $M$ is the empty retract. A compact zero-manifold is finite, and the same disjoint-neighborhood construction, or a finite set of points as $L$, handles that case without dividing by $\sqrt0$. For positive dimension the construction above applies to interior and boundary charts alike. Every noncanonical datum chosen in the proof belongs to a finite chart or parameter list. Thus the asserted embedding, retraction and finite domination hold without a choice axiom. [F1, step 1.1, step 2.1, step 5.1, construct, algebra] ∎

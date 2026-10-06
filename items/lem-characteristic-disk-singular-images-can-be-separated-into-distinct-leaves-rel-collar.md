---
id: lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar
kind: lemma
title: "Characteristic-disk singular images can be separated into distinct leaves relative to the boundary collar"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary, lem-c2-leaf-intersection-with-a-box-transversal-is-countable, lem-manifold-bump-for-a-compact-set-inside-an-open-set, cor-interval-uncountable, def-countable-choice-principle-for-foliation-pair, thm-chain-rule-for-total-derivatives, def-transversely-oriented-codimension-one-foliation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a76, printed pp. 16-19 (separating the characteristic singularities into distinct leaves); the finite-perturbation scheme is supplied locally"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a $C^2$
cooriented codimension-one foliation of a smooth $3$-manifold with
nowhere-vanishing defining form $\omega$, and let $h:D^2\to M$ be a $C^2$ map
whose characteristic covector $h^*\omega$ is nowhere vanishing on the closure
$\overline C$ of a prescribed collar $C$ of $\partial D^2$ and has finitely many interior zeros $p_1,\dots,p_N$,
all nondegenerate, each a center or a saddle. Then for every sufficiently small
prescribed $C^2$ neighbourhood of $h$ there is a $C^2$ map $h'$ in that
neighbourhood, together with a $C^2$ homotopy from $h$ to $h'$ fixed on an open
neighbourhood of $C$, such that:

(i) the singular points of $h'$ are exactly $p_1,\dots,p_N$, and near each
$p_i$ the local transverse function of $h'$ differs from that of $h$ by a
constant, so the transverse-coordinate Hessian and the center/saddle type are
unchanged;

(ii) the images $h'(p_1),\dots,h'(p_N)$ lie in pairwise distinct ambient leaves
of $F$.

In particular $h'$ has no characteristic separatrix joining two distinct
singular points; homoclinic separatrices are not excluded.

## Facts & Assumptions

**Given:** A cooriented codimension-one $C^2$ foliation with defining form $\omega$, a $C^2$ map $h:D^2\to M$ regular on the closure $\overline C$ of a prescribed collar $C$ of $\partial D^2$, and finitely many nondegenerate characteristic zeros $p_1,\dots,p_N$ in the interior of $D^2$.

[F1] In a foliation chart with transverse coordinate $z$ one has $\omega=a\,dz$ with $a\neq0$, so the characteristic zero set of a map $g$ in the chart is the critical set of $u=z\circ g$, and adding a constant to $u$ on an open set does not change the critical points or the Hessian there ([[def-transversely-oriented-codimension-one-foliation]], [[thm-chain-rule-for-total-derivatives]]).

[F2] Let $F$ be a $C^2$ foliation on a second-countable manifold, $L$ a leaf and $\tau:J\to Q$ a vertical transverse interval in a foliation box; then $\tau^{-1}(L)$ is at most countable ([[lem-c2-leaf-intersection-with-a-box-transversal-is-countable]]).

[F3] For $a<b$ both $[a,b]$ and $(a,b)$ are uncountable, so no countable subset of an interval equals the interval ([[cor-interval-uncountable]]).

[F4] For a compact set $K$ contained in an open set $W$ of a smooth manifold there is a smooth bump $\rho$ equal to $1$ on a neighbourhood of $K$ and supported in $W$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

1.1 The compact set $\overline C$ contains no zero of $h^*\omega$. Thus each $p_i$ lies in the open set $\operatorname{int}D^2\setminus\overline C$; choose pairwise disjoint open disks $V_i$ with closures in that set, with $p_i\in V_i$, and slightly smaller compact cores $W_i\subset V_i$ around $p_i$. Since the $p_i$ are the only zeros, and a nondegenerate zero is isolated, we may choose the $V_i$ so that $h^*\omega\neq0$ on $\overline V_i\setminus W_i$. Shrinking the $V_i$ further, arrange that each $h(\overline V_i)$ lies in a single foliation chart $Q_i$ with transverse coordinate $z_i$, and write $u_i:=z_i\circ h$. Process the indices in the order $i=1,\dots,N$. [given, F1, F3]

2.1 **A bump on each disk and its margin.** By [F4] choose for each $i$ a smooth bump $\rho_i$ with $0\le\rho_i\le1$, equal to $1$ on a neighbourhood of $W_i$ and supported in $V_i$. On the compact set $\operatorname{supp}(d\rho_i)$, which is disjoint from $W_i$, the form $du_i$ is nowhere zero; by compactness there is $\eta_i>0$ with $|du_i|\ge\eta_i$ there. [step 1.1, F4]

3.1 **Avoiding the finitely many earlier singular leaves.** Write $(Y_i,u_i)=\chi_i\circ h$. The curve $\tau_i(t)=\chi_i^{-1}(Y_i(p_i),u_i(p_i)+t)$ for $|t|<\varepsilon_i$ parametrizes a vertical transverse interval $J_i$ through $h(p_i)$ in the box $Q_i$. For each $j<i$, the map $h$ has already been replaced near $p_j$ by a map whose singular image $q_j$ is fixed in the $j$-th stage; its leaf $L_j$ meets the interval $J_i$ in at most countably many points by [F2]. The finitely many countable sets $\{z_i(q_j'):q_j'\in J_i\cap L_j\}$ have a countable union, while $J_i$ is uncountable [F3]; choose $\delta_i$ with $|\delta_i|$ so small that $u_i(p_i)+\delta_i$ avoids all the earlier singular leaves and the endpoint of $J_i$, and $|\delta_i|\sup|d\rho_i|<\eta_i/2$. Only finitely many such choices are made in the whole construction. [step 2.1, F2, F3]

4.1 **The local modification preserves the singular set.** Define the modified map $h_i$ on $V_i$ by $h_i=\chi_i^{-1}(Y_i,u_i+\delta_i\rho_i)$, where $(Y_i,u_i)=\chi_i\circ h$ are the foliation-box coordinates, and let $h_i=h_{i-1}$ outside $V_i$, with $h_0=h$; since $\rho_i$ is compactly supported in the interior of $V_i$, all derivatives agree across $\partial V_i$, so $h_i$ is a $C^2$ map of the disk equal to $h$ near the collar. On the neighbourhood of $W_i$ where $\rho_i=1$ the transverse function is $u_i+\delta_i$, whose critical set and Hessian agree with those of $u_i$ by [F1], so the singular point $p_i$ survives with its type unchanged. On $\operatorname{supp}(d\rho_i)$ one has $d(u_i+\delta_i\rho_i)=du_i+\delta_i\,d\rho_i$ with $|du_i|\ge\eta_i>|\delta_i|\sup|d\rho_i|$, so the differential does not vanish and no new zero appears; outside $V_i$ the map is unchanged and its zeros are the previously handled ones. [step 2.1, step 3.1, F1]

5.1 **Distinct leaves.** At the end of stage $i$ the singular image of $p_i$ is $h_i(p_i)$; in the coordinates of the box $Q_i$ its transverse coordinate is $u_i(p_i)+\delta_i$, and by step 3.1 this value avoids the leaves $L_j$ of the singular images of all $j<i$; since the later modifications are supported in $V_j$ with $j>i$ and $V_i\cap V_j=\varnothing$, they do not move the image of $p_i$. Applying this for every $i$, the final images $h'(p_1),\dots,h'(p_N)$ lie in pairwise distinct leaves. [step 3.1, step 4.1]

6.1 **Assembling the homotopy.** Define $H:D^2\times[0,1]\to M$ by $H(x,s)=\chi_i^{-1}(Y_i(x),u_i(x)+s\delta_i\rho_i(x))$ for $x\in V_i$, and $H(x,s)=h(x)$ outside $\bigcup_iV_i$. The disks are disjoint, so this is well defined; every $\rho_i$ vanishes on an open neighbourhood of $\partial V_i$, so the local formulas equal $h(x)$ there for every $s$ and glue to a jointly $C^2$ map by the chain rule. Thus $H(\cdot,0)=h$ and $H(\cdot,1)=h'$, and the complement of the finite compact union $\bigcup_i\operatorname{supp}\rho_i$ is an open neighbourhood of $\overline C$ fixed throughout. In chart coordinates the $C^2$ norm of each endpoint modification is bounded by $|\delta_i|\lVert\rho_i\rVert_{C^2}$; composition with the fixed $C^2$ chart inverse is continuous in $C^2$ on a compact chart neighbourhood, as follows by applying the chain rule twice and uniform continuity of its derivatives there. Choose the $\delta_i$ within the finitely many chart margins and norm bounds as well as the inequalities of step 3.1, so all interpolated chart points remain in $Q_i$ and $h'$ lies in the prescribed $C^2$ neighbourhood. For $N=0$ take $H(x,s)=h(x)$. Step 4.1 gives (i), and step 5.1 gives (ii). [step 2.1, step 3.1, step 4.1, step 5.1, F1]

7.1 Finally, a characteristic separatrix joining two distinct singular points is a trajectory of the characteristic field on which the local transverse coordinate is constant, so its endpoints are two singular images lying in one leaf; assertion (ii) therefore excludes such a separatrix, while a homoclinic separatrix begins and ends at the same singularity and is not excluded. The only infinite selection in the proof is the countable union in step 3.1, which uses exactly the stated $\mathrm{AC}_\omega$ through the leaf-intersection lemma [F2]; every other choice is finite. [step 5.1, step 6.1, F2] ∎

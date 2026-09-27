---
id: def-cuspidal-support-and-harish-chandra-series
kind: definition
title: Cuspidal representations and Harish-Chandra series
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-harish-chandra-induction-and-restriction-for-finite-gl-n, def-coordinate-parabolics-for-ordered-partitions, def-compositions-partial-flags-and-standard-parabolics, def-standard-subgroups-of-gl-n-over-a-finite-field, thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq, thm-transitivity-and-parabolic-independence-of-harish-chandra-induction, thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order, def-g-module-over-a-commutative-ring, def-subgroup, def-normal-subgroup, def-group-action, lem-symmetric-group-is-a-group, def-symmetric-group, def-weyl-group-and-length-for-finite-gl-n, thm-matrix-multiplication-laws, def-matrix-product-and-identity-matrix, cor-general-linear-group-is-a-group]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Definition 10.2, Lemma 10.3 and Definition 10.5, printed pp. 41-42"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Definition 5.7, printed p. 43"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: n/a
---

## Definition

**Refinements of ordered partitions.** Let $n\ge1$ and let $\gamma$ and
$\delta$ be ordered partitions of $\{1,\dots,n\}$
([[def-coordinate-parabolics-for-ordered-partitions]]). One says that
$\delta$ **refines** $\gamma$ when every block of $\delta$ is contained in a
block of $\gamma$, and that $\delta$ is a **proper refinement** of $\gamma$
when in addition the two set partitions differ, that is, when $\gamma$ does
not refine $\delta$. Equivalently, $\gamma$ is obtained from $\delta$ by
merging blocks, and at least one block of $\gamma$ is the union of at least two
blocks of $\delta$; in particular $L_\delta\le L_\gamma$, since a matrix that
is block diagonal for the finer ordered partition $\delta$ is block diagonal
for $\gamma$
([[def-coordinate-parabolics-for-ordered-partitions]]). Moreover
$$P_\delta\cap L_\gamma=L_\delta\ltimes(U_\delta\cap L_\gamma),$$
because every $g\in P_\delta\cap L_\gamma$ can be written as $g=lu$ with
$l\in L_\delta$ and $u\in U_\delta$ (the standard Levi decomposition of
[[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]] transported by
[[def-coordinate-parabolics-for-ordered-partitions]]), and then
$l\in L_\delta\le L_\gamma$ forces $u=l^{-1}g\in L_\gamma$; conversely
$L_\delta\,(U_\delta\cap L_\gamma)\subseteq P_\delta\cap L_\gamma$ since both
factors lie in both subgroups, and $L_\delta\cap U_\delta=\{I_n\}$. By claim 1
of [[thm-transitivity-and-parabolic-independence-of-harish-chandra-induction]]
the case in which the order of the blocks of $\delta$ is compatible with that
of $\gamma$ is the one in which $U_\gamma\le U_\delta$ and
$P_\delta\cap L_\gamma$ is displayed there as a coordinate parabolic of
$L_\gamma$; every refinement can be reordered compatibly, that is, its blocks
can be listed block by block in the order of $\gamma$.
The group $U_\delta\cap L_\gamma$ is normalised by $L_\delta$, because
$L_\delta\le P_\delta$ normalises $U_\delta$
([[def-coordinate-parabolics-for-ordered-partitions]]) and stabilises
$L_\gamma$; hence for every complex $L_\gamma$-module $N$ the invariants
$$N^{U_\delta\cap L_\gamma}:=\{\,x\in N:ux=x\text{ for every }u\in U_\delta\cap L_\gamma\,\}$$
form a complex $L_\delta$-submodule of $N$
([[def-g-module-over-a-commutative-ring]]). We write
$${}^*\!R_{L_\delta}^{L_\gamma}(N):=N^{U_\delta\cap L_\gamma}$$
for this $L_\delta$-module, the **Harish-Chandra restriction of $N$ from
$L_\gamma$ to $L_\delta$** (along the coordinate parabolic
$P_\delta\cap L_\gamma$); by claim 2 of
[[thm-transitivity-and-parabolic-independence-of-harish-chandra-induction]]
it does not depend, up to isomorphism of $L_\delta$-modules, on the order in
which the blocks of $\delta$ are listed.

**Cuspidal modules.** Let $\gamma$ be an ordered partition of $\{1,\dots,n\}$
and let $N$ be a complex $L_\gamma$-module. Then $N$ is **cuspidal** when
$${}^*\!R_{L_\delta}^{L_\gamma}(N)=0\qquad\text{for every proper refinement }\delta\text{ of }\gamma,$$
that is, when the invariants of $N$ under the unipotent radical
$U_\delta\cap L_\gamma$ of the coordinate parabolic $P_\delta\cap L_\gamma$ of
$L_\gamma$ vanish for every properly smaller coordinate Levi subgroup
$L_\delta<L_\gamma$ obtained from a refinement of $\gamma$. We also say that a
complex $L_\gamma$-module $N$ is **non-cuspidal** when it is not cuspidal.

**Cuspidal pairs and Harish-Chandra series.** A **cuspidal pair** is a pair
$(L_\gamma,N)$ consisting of a coordinate Levi subgroup $L_\gamma\le G$ and an
irreducible cuspidal complex $L_\gamma$-module $N$. The **Harish-Chandra
series** attached to such a pair is the set
$$\operatorname{Irr}\bigl(G\,\big|\,(L_\gamma,N)\bigr):=\{\,M\in\operatorname{Irr}(\mathbb C G):R_{L_\gamma}^G(N)\twoheadrightarrow M\,\}$$
of isomorphism classes of irreducible complex $G$-modules that are
irreducible quotients of $R_{L_\gamma}^G(N)$, the Harish-Chandra induction of
[[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]; since
$R_{L_\gamma}^G(N)$ is a nonzero finite-dimensional complex $G$-module and
every finite-dimensional complex module of the finite group $G$ is completely
reducible, $M$ belongs to the series if and only if $M$ is isomorphic to a
direct summand of $R_{L_\gamma}^G(N)$, and the series is nonempty
([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

**Transport by a permutation.** Let $\sigma\in S_n$
([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]) and let
$w_\sigma:=P_\sigma$ be the associated permutation matrix
([[def-weyl-group-and-length-for-finite-gl-n]]), so that conjugation by $w_\sigma$ maps
the coordinate subgroups of type $\gamma$ onto those of type
$\sigma(\gamma)$
([[def-coordinate-parabolics-for-ordered-partitions]]): for an ordered
partition $\gamma=(S_1,\dots,S_r)$ put $\sigma(\gamma):=(\sigma(S_1),\dots,\sigma(S_r))$,
so that
$$L_{\sigma(\gamma)}=w_\sigma L_\gamma w_\sigma^{-1},\qquad P_{\sigma(\gamma)}=w_\sigma P_\gamma w_\sigma^{-1},\qquad U_{\sigma(\gamma)}=w_\sigma U_\gamma w_\sigma^{-1}.$$
For a complex $L_\gamma$-module $N$ let $N^\sigma$ be the vector space $N$
with the action of $L_{\sigma(\gamma)}$ given by
$$m\cdot x:=(w_\sigma^{-1}mw_\sigma)\cdot x\qquad(m\in L_{\sigma(\gamma)},\ x\in N),$$
which is a complex $L_{\sigma(\gamma)}$-module because
$m\mapsto w_\sigma^{-1}mw_\sigma$ is an isomorphism
$L_{\sigma(\gamma)}\to L_\gamma$
([[thm-matrix-multiplication-laws]],
[[def-matrix-product-and-identity-matrix]],
[[cor-general-linear-group-is-a-group]]); we call $N^\sigma$ the **transport
of $N$ by $\sigma$**. For a complex $G$-module $X$ let $X^\sigma$ be the
vector space $X$ with the $G$-action $g\cdot x:=(w_\sigma^{-1}gw_\sigma)\cdot
x$; since $g\mapsto w_\sigma^{-1}gw_\sigma$ is an automorphism of $G$, this is
again a complex $G$-module. Transport is compatible with composition,
$(M^\rho)^\sigma=M^{\sigma\circ\rho}$ and $N^{\mathrm{id}}=N$, and a module and its
transport by $\sigma$ have the same dimension and the same lattice of
submodules, so $N$ is irreducible exactly when $N^\sigma$ is.

## Remarks

The definition of cuspidality above tests the quotient $N^{U_\delta\cap
L_\gamma}$ for the standard parabolic $P_\delta\cap L_\gamma$ of the standard
Levi $L_\gamma$. Dudas and Michel (Definition 10.2) define cuspidality of a
$\Lambda G^F$-module by the vanishing of ${}^*\!R_L^{G^F}$ for every proper
$G$-split Levi subgroup $L$ of the ambient group; the independence of the
parabolic along which the restriction is taken is their Theorem 10.1, and the
case needed above (two coordinate parabolics with the same coordinate Levi) is
claim 2 of
[[thm-transitivity-and-parabolic-independence-of-harish-chandra-induction]].
Taylor (Definition 5.7) uses the same vanishing condition for the standard
Levis of a fixed split BN-pair, which is the form in which cuspidality is used
by the Harish-Chandra series theorems of this page.

Two extreme cases illustrate the definition. For the one-block ordered
partition $\gamma=(\{1,\dots,n\})$ one has $L_\gamma=G$, the proper
refinements of $\gamma$ are exactly the ordered partitions of $\{1,\dots,n\}$
having at least two blocks, and a complex $G$-module is cuspidal in the sense
above exactly when its invariants under the unipotent radical of every proper
coordinate parabolic of $G$ vanish; for a cuspidal pair $(G,N)$ the series is
the singleton $\{N\}$, because $R_{L_\gamma}^G$ is the identity functor
([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]). For the
all-singleton ordered partition
$\gamma=(\{1\},\dots,\{n\})$ one has $L_\gamma=T$ and there is no proper
refinement at all, so every complex $T$-module is cuspidal; the series of the
cuspidal pairs $(T,\chi)$ are the principal series of $G$. In both cases
cuspidality is the standard one for the corresponding standard Levi, and the
list of proper refinements does not depend on the order in which the blocks of
$\gamma$ are listed.

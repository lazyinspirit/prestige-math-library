---
id: prop-quotient-foliation-under-a-free-proper-foliated-action
kind: proposition
title: "The quotient foliation under a free and properly discontinuous foliated action"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
  - def-covering-space-action
  - thm-orbit-map-of-a-covering-space-action-is-a-covering
  - def-covering-map-and-evenly-covered-neighbourhoods
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - def-regular-foliation-atlas
  - def-leaf-of-a-regular-foliation
  - thm-regular-foliations-and-integrable-distributions-correspond
  - prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-smooth-atlas
  - def-smooth-manifold
  - def-topological-manifold-without-boundary
  - def-quotient-topology
  - def-countable-choice
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas
  - def-second-countable-space
  - def-topology-basis-subbasis
  - cor-interval-uncountable
  - thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let
$\Gamma$ be a group acting on a smooth manifold $M$ by
diffeomorphisms, and suppose the action is **free and properly discontinuous**:
$\gamma\cdot x=x$ implies $\gamma=e$ for all $x\in M$, and for every compact
subset $K\subseteq M$ the set
$\{\gamma\in\Gamma:\gamma K\cap K\neq\varnothing\}$ is finite. Let $F$ be a
regular foliation of $M$ preserved by $\Gamma$, so every $\gamma$ maps leaves
onto leaves, with tangent distribution $D=TF$. Then:

1. $M/\Gamma$ carries a unique smooth structure for which the orbit map
   $\pi:M\to M/\Gamma$ is a local diffeomorphism, and with this structure $\pi$
   is a covering map;
2. there is a unique regular foliation $F/\Gamma$ on $M/\Gamma$ whose leaves are
   the images $\pi(L)$ of the leaves of $F$, and its codimension equals
   $\operatorname{codim}F$;
3. the tangent distribution of $F/\Gamma$ is $d\pi(D)$.

## Facts & Assumptions

**Given:** A group $\Gamma$ acting freely and properly discontinuously by diffeomorphisms on a smooth manifold $M$, a regular foliation $F$ of $M$ with tangent distribution $D=TF$ preserved by $\Gamma$, the orbit map $\pi:M\to M/\Gamma$, and the set $\Gamma x=\{\gamma\cdot x:\gamma\in\Gamma\}$.

[F1] A smooth manifold is a topological manifold: Hausdorff, second countable and locally Euclidean ([[def-topological-manifold-without-boundary]], [[def-smooth-manifold]]).

[F2] Every point of a topological manifold has a neighbourhood basis of open sets with compact closures; in particular $M$ is locally compact and first countable ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]]).

[F3] For a surjection $q:X\to Y$, the quotient topology makes $V\subseteq Y$ open exactly when $q^{-1}(V)$ is open, and a set is open in the quotient exactly when it is the image of a saturated open set ([[def-quotient-topology]]).

[F4] An action by homeomorphisms is a covering-space action when every point has an open neighbourhood $U$ with $\gamma U\cap U=\varnothing$ for every $\gamma\neq e$; for a covering-space action the orbit map is a covering map ([[def-covering-space-action]], [[thm-orbit-map-of-a-covering-space-action-is-a-covering]]).

[F5] A covering map is a continuous surjection each of whose points has an evenly covered open neighbourhood $W$, over which the preimage is a disjoint union of open sheets mapping homeomorphically onto $W$ ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F6] A regular foliation atlas of codimension $n-k$ on an $n$-manifold has charts whose overlaps preserve the transverse coordinates, and its leaves are the equivalence classes of the plaque-chain relation ([[def-regular-foliation-atlas]], [[def-leaf-of-a-regular-foliation]]); regular foliations and integrable distributions determine each other, the leaves being the maximal connected integral manifolds ([[thm-regular-foliations-and-integrable-distributions-correspond]]). Under the assumed Countable Choice, these leaves carry intrinsic second-countable smooth manifold structures; connected integral manifolds factor smoothly through them ([[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]). In particular every plaque is intrinsically open: its factorization is a local diffeomorphism because its tangent image and the leaf tangent image both equal $D$.

[F7] If $G:M\to N$ is a local diffeomorphism and $U$ is open with $G|_U$ a diffeomorphism onto $G(U)$, then the family $G_*\mathcal D_{G(p)}=dG_p(\mathcal D_p)$ is a smooth distribution on $G(U)$ of the same rank, and images of integral manifolds are integral manifolds ([[prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds]]).

[F8] A smooth atlas is a family of pairwise smoothly compatible charts covering the space, and every smooth atlas is contained in exactly one maximal smooth atlas, which generates the same smooth structure ([[def-smooth-atlas]], [[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]]).

[F9] A diffeomorphism is a bijective smooth map with smooth inverse, and a local diffeomorphism restricts near each point to a diffeomorphism onto an open set ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F11] A nondegenerate real interval is uncountable ([[cor-interval-uncountable]]); a connected countable subset of $\mathbb R$ must therefore be a singleton, since a missing intermediate value would separate it by open half-lines.

[F10] A space is second countable when it has an at most countable basis, i.e. every open set is a union of members of that countable family ([[def-second-countable-space]], [[def-topology-basis-subbasis]]).

## Proof

**Proof technique:** direct.

1.1 **The pointwise disjoint-translates condition.** For each $x\in M$ there is an open neighbourhood $U$ of $x$ with $\gamma U\cap U=\varnothing$ for every nonidentity $\gamma\in\Gamma$. Indeed, by [F2] choose a compact neighbourhood $K$ of $x$. The set $F_0:=\{\gamma\in\Gamma:\gamma K\cap K\neq\varnothing\}$ is finite by proper discontinuity. For each $\gamma\in F_0$ with $\gamma\neq e$ freeness and Hausdorffness give disjoint open sets $V_\gamma\ni x$ and $W_\gamma\ni\gamma x$; then $$U:=\operatorname{int}(K)\cap\bigcap_{\gamma\in F_0\setminus\{e\}}\bigl(V_\gamma\cap\gamma^{-1}W_\gamma\bigr)$$ is an open neighbourhood of $x$, and for $\gamma\in F_0\setminus\{e\}$ one has $\gamma U\subseteq W_\gamma$ and $U\subseteq V_\gamma$, so $\gamma U\cap U=\varnothing$, while for $\gamma\notin F_0$ one has $\gamma U\cap U\subseteq\gamma K\cap K=\varnothing$. [F2, given, choose]

1.2 **$M/\Gamma$ is second countable.** The orbit map is open: for open $B\subseteq M$ the saturation $\pi^{-1}(\pi(B))=\Gamma B$ is a union of translates of $B$, hence open, so $\pi(B)$ is open by [F3]. Choose a countable basis $\mathcal B$ of $M$ by [F1] and [F10]; then $\pi[\mathcal B]$ is an at most countable family of open subsets of $M/\Gamma$: given an open $V\subseteq M/\Gamma$ and $b\in V$, choose $m\in\pi^{-1}(b)$ and then $B\in\mathcal B$ with $m\in B\subseteq\pi^{-1}(V)$; then $b\in\pi(B)\subseteq V$. So $\pi[\mathcal B]$ is a basis, and $M/\Gamma$ is second countable. [F1, F3, F10]

2.1 **The orbit map is a covering.** By step 1.1 and [F4] the action on $M$ — which is by homeomorphisms, because $\Gamma$ acts by diffeomorphisms by [F9] — is a covering-space action, so the orbit map $\pi:M\to M/\Gamma$ is a covering map. Its fibres are exactly the orbits: $\pi(m)=\pi(m')$ holds exactly when $m'=\gamma m$ for some $\gamma\in\Gamma$, by the definition of the orbit space. [F4, F9, step 1.1, given]

3.1 **Local sections differ locally by group elements.** Let $s_1:W_1\to M$ and $s_2:W_2\to M$ be continuous local sections of $\pi$ on open sets, so $\pi\circ s_i=\mathrm{id}_{W_i}$, and let $w\in W_1\cap W_2$. Then some open connected neighbourhood $W_0\subseteq W_1\cap W_2$ of $w$ and some $\gamma\in\Gamma$ satisfy $s_2|_{W_0}=\gamma\circ s_1|_{W_0}$. Indeed, $s_1(w)$ and $s_2(w)$ lie in the same $\pi$-fibre, which is an orbit by step 2.1, so $\gamma s_1(w)=s_2(w)$ for some $\gamma\in\Gamma$. By [F5] choose an evenly covered open neighbourhood $W$ of $w$; shrinking inside $W\cap W_1\cap W_2$ (a smaller open set over an evenly covered one is again evenly covered) gives an open connected neighbourhood $W_0$ of $w$ on which both sections are defined and over which $\pi$ is evenly covered. The connected set $s_2(W_0)$ lies in a single sheet $V$ of $\pi^{-1}(W_0)$; the connected set $\gamma s_1(W_0)$ satisfies $\pi(\gamma s_1(W_0))=W_0$ and contains $\gamma s_1(w)=s_2(w)$, so it likewise lies in the single sheet $V$. Since $\pi|_V$ is injective and both $s_2$ and $\gamma\circ s_1$ are sections over $W_0$, it follows that $s_2(t)=\gamma s_1(t)$ for every $t\in W_0$. [F5, step 2.1, choose]

3.2 **$M/\Gamma$ is Hausdorff.** Let $x,y\in M$ with $\pi(x)\neq\pi(y)$, so $y\notin\Gamma x$. By [F2] choose compact neighbourhoods $K_x$ of $x$ and $K_y$ of $y$ with open interiors $U_x$, $U_y$. The set $F_1:=\{\gamma\in\Gamma:\gamma K_y\cap K_x\neq\varnothing\}$ is finite, because $\gamma K_y\cap K_x\neq\varnothing$ implies $\gamma(K_x\cup K_y)\cap(K_x\cup K_y)\neq\varnothing$ and $K_x\cup K_y$ is compact (the same argument as in step 1.1, applied with [F1]). For each $\gamma\in F_1$ one has $x\neq\gamma y$, since $\gamma y=x$ would give $y\in\Gamma x$; by Hausdorffness there are disjoint open sets $V_\gamma\ni x$ and $W_\gamma\ni\gamma y$. Put $$V:=U_x\cap\bigcap_{\gamma\in F_1}V_\gamma,\qquad W:=U_y\cap\bigcap_{\gamma\in F_1}\gamma^{-1}W_\gamma .$$ Both are open neighbourhoods of $x$ and $y$. If $\gamma\in F_1$, then $V\subseteq V_\gamma$ and $\gamma W\subseteq W_\gamma$, so $V\cap\gamma W=\varnothing$; if $\gamma\notin F_1$, then $V\cap\gamma W\subseteq K_x\cap\gamma K_y=\varnothing$. Hence $V\cap\Gamma W=\varnothing$. The set $\Gamma V$ is open (a union of translates of an open set) and $\Gamma$-invariant, and it is disjoint from the open $\Gamma$-invariant set $\Gamma W$; by [F3] their images $\pi(\Gamma V)=\pi(V)$ and $\pi(\Gamma W)=\pi(W)$ are disjoint open sets in $M/\Gamma$ containing $\pi(x)$ and $\pi(y)$. Hence $M/\Gamma$ is Hausdorff. [F1, F3, step 2.1, choose]

4.1 **A smooth atlas and the local diffeomorphism property.** For every sheet $U$ over an evenly covered open set and every smooth chart $(U',\varphi)$ of $M$ with $U'\subseteq U$, define $\psi:\pi(U')\to\mathbb R^n$ by $\psi(\pi(m)):=\varphi(m)$ for $m\in U'$; this is well defined because $\pi|_{U'}$ is injective, and it is a homeomorphism onto the open set $\varphi(U')$ because $\pi|_{U'}$ is a homeomorphism onto the open set $\pi(U')$. Such pairs cover $M/\Gamma$ (every point has a neighbourhood contained in a sheet with a chart, by [F5]). Two of them, $(\psi_1,\pi(U_1'))$ and $(\psi_2,\pi(U_2'))$, overlap in $\pi(U_1')\cap\pi(U_2')$; writing $s_i:=(\pi|_{U_i'})^{-1}$ for the inverse sections, the transition on a point $\pi(m)$ of the overlap is $\psi_2\circ\psi_1^{-1}(\varphi_1(m))=\varphi_2(s_2(\pi(m)))=\varphi_2(\gamma s_1(\pi(m)))=\varphi_2(\gamma(m))$ for some $\gamma\in\Gamma$ and all $m$ in a neighbourhood of the given point, the middle equality by step 3.1. This is smooth, because $\varphi_2\circ\gamma\circ\varphi_1^{-1}$ is a transition between charts of $M$ conjugated by the diffeomorphism $\gamma$ of $M$ ([F9]). Hence the $\psi$ form a smooth atlas $\mathcal A$ on the topological manifold $M/\Gamma$ — Hausdorff by step 3.2, second countable by step 1.2, locally Euclidean by the $\psi$ — and $\psi\circ\pi\circ\varphi^{-1}=\mathrm{id}$ on the appropriate domain shows that $\pi$ is a local diffeomorphism for the smooth structure on $M/\Gamma$ generated by $\mathcal A$. [F5, F8, F9, step 3.1, step 3.2, step 1.2, construct]

5.1 **Uniqueness of the smooth structure.** In any smooth structure on $M/\Gamma$ for which $\pi$ is a local diffeomorphism, the charts $\psi$ of step 4.1 are smoothly compatible with every chart $\theta$ of that structure. Indeed, $\theta\circ\psi^{-1}=\theta\circ\pi\circ\varphi^{-1}$ is smooth, and its inverse $\psi\circ\theta^{-1}=\varphi\circ(\pi|_{U'})^{-1}\circ\theta^{-1}$ is smooth because the local inverse of $\pi$ is smooth. By [F8] both atlases generate the same maximal atlas, proving uniqueness. [F8, F9, step 4.1]

5.2 **The descended distribution.** Define, for $b\in M/\Gamma$ and any $m\in\pi^{-1}(b)$, the subspace $E_b:=d\pi_m(D_m)\subseteq T_b(M/\Gamma)$. This does not depend on $m$: if $m'=\gamma m$, then $\pi$ near $m'$ equals $\pi$ near $m$ composed with $\gamma^{-1}$, so $d\pi_{m'}(D_{m'})=d\pi_m(d\gamma^{-1}_{\gamma m}(D_{\gamma m}))=d\pi_m(D_m)$, using $d\gamma(D)=D$. To justify this implication from preservation of leaf sets, restrict $\gamma$ to a connected plaque neighborhood whose image lies in a target foliation chart. A leaf meets at most countably many target plaques, since these are disjoint open subsets of its intrinsic second-countable manifold ([F1], [F6]); the connected image has constant transverse coordinates, because a countable connected subset of $\mathbb R$ is a singleton. Thus $\gamma$ maps this neighborhood smoothly into one target plaque and carries its tangent space into $D$. Applying the same argument to $\gamma^{-1}$ gives equality. The family $E$ is a smooth rank-$(\dim M-\operatorname{codim}F)$ distribution: the charts $\psi$ of step 4.1 are local diffeomorphisms of $M/\Gamma$ obtained by pushing forward by $\pi$ along a sheet, so on each chart domain $E$ is the pushforward of the subbundle $D$ by a diffeomorphism, which is a smooth subbundle of the same rank by [F7]. [F1, F6, F7, F9, F11, given, step 4.1]

6.1 **Integrability and the quotient foliation.** Around each $m\in M$ restrict a foliation chart to a sheet of $\pi$. Its plaques push forward to integral manifolds of $E$ by [F7], and one passes through every point of the quotient. Thus $E$ is integrable. By [F6] it determines a regular foliation $F/\Gamma$ with maximal connected integral leaves, codimension $\operatorname{codim}F$, and tangent distribution $E=d\pi(D)$. This uses existence of an atlas for an integrable distribution; it does not assert that all projected charts have a single transverse transition function on an entire overlap. [F6, F7, step 4.1, step 5.2, construct]

7.1 **The leaves are exactly the images of leaves of $F$.** Let $Q$ be the quotient leaf through $\pi(m)$ and $L$ the original leaf through $m$. On each plaque patch of $L$ contained in a sheet, $\pi$ is an integral immersion for $E$, so its image lies in one quotient leaf by [F6]. These patches cover the connected intrinsic manifold $L$; the inverse images of quotient leaves partition $L$ into open sets, so $\pi(L)\subseteq Q$. Conversely, join $\pi(m)$ to any $z\in Q$ by a finite chain of quotient plaques. Subdivide each plaque path into finitely many pieces contained in sheets' images, using its compact parameter interval and the local plaque coordinates. Lift the first piece through $m$, and each following piece through the preceding endpoint, using the inverse of $\pi$ on a sheet. Each lifted piece is an integral manifold patch of $D$, since $d\pi$ identifies $D$ with $E$, and therefore lies in one original leaf by [F6]. Consecutive pieces meet, so all lie in $L$, and their final point maps to $z$. Hence $Q=\pi(L)$. [F6, F7, step 2.1, step 4.1, step 5.2, step 6.1, given]

8.1 **Uniqueness of $F/\Gamma$, and conclusion.** If $F'$ is a regular foliation of $M/\Gamma$ whose leaves are the sets $\pi(L)$, then its tangent distribution $D'$ satisfies $D'_b=T_b(\pi(L))$ in its intrinsic leaf structure for $b=\pi(m)$. More explicitly, apply the connected-plaque and countable-transverse-values argument of step 5.2 to a plaque of $F'$ inside a chart of $F/\Gamma$, and conversely to a plaque of $F/\Gamma$ inside a chart of $F'$. Since both foliations have the same leaf sets, these smooth inclusions give $D'_b\subseteq E_b$ and $E_b\subseteq D'_b$. Hence $D'_b=E_b$; since a regular foliation is determined by its tangent distribution and its leaves, $F'=F/\Gamma$. Thus step 2.1 gives claim 1 except uniqueness, step 5.1 gives that uniqueness, steps 6.1 and 7.1 give claim 2 with the codimension, and step 5.2 gives claim 3. [F6, F11, step 2.1, step 5.1, step 5.2, step 6.1, step 7.1] ∎

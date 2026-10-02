---
id: cor-universal-cover-classification-riemann-surfaces
kind: corollary
title: "Every Riemann surface is a quotient of a simply connected model"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-properly-discontinuous-group-action
  - def-free-group-action
  - def-group-action
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-biholomorphic-map
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-universal-covering-space
  - def-deck-transformation-and-deck-group
  - def-quotient-topology
  - def-continuous-map-top
  - def-homeomorphism-and-open-maps
  - def-compact-space
  - def-second-countable-space
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-connected-and-locally-path-connected-implies-path-connected
  - lem-compactness-of-a-subspace-is-ambient
  - thm-compactness-under-continuous-maps
  - def-hausdorff-space
  - def-interior-closure-boundary-top
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - thm-universal-cover-uniqueness-and-dominating-property
  - lem-holomorphic-structure-lifts-to-covering-surface
  - def-universal-covering-type-riemann-surface
  - thm-uniformization-simply-connected-riemann-surfaces
  - lem-three-simply-connected-models-are-inequivalent
  - cor-injective-holomorphic-derivative-nonzero
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-3 and 6-9, the uniformization theorem and the discussion of the universal cover; standard quotient presentation of a surface as a model divided by its deck group"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 section 5, printed pp. 115-118 (surfaces as quotients of the disc, plane or sphere by deck groups)"
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 17, printed p. 157 (the uniformization theorem and quotients by properly discontinuous groups)"
---

## Statement

Assume the Axiom of Choice. Every connected Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]) is biholomorphic to the
quotient of exactly one of the Riemann sphere, complex plane and unit disc by a
group of holomorphic automorphisms acting freely and properly discontinuously
([[def-properly-discontinuous-group-action]], [[def-biholomorphic-map]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; a connected Riemann surface $X$; the holomorphic universal cover $p:\widetilde X\to X$ of [[def-universal-covering-type-riemann-surface]] with its deck group $\operatorname{Deck}(p)$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]): every family of nonempty sets has a choice function; it supplies the Countable Choice $\mathrm{AC}_\omega$ of [[def-countable-choice]] used by the lifted holomorphic structure [F5] and it is the hypothesis of the uniformization theorem inside [F5].

[F1] Riemann surfaces and holomorphic maps ([[def-riemann-surface-and-holomorphic-atlas]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-biholomorphic-map]]): $X$ is nonempty, connected, Hausdorff and second countable with a holomorphic atlas; charts are homeomorphisms onto open subsets of $\mathbb C$; restrictions, composites and inverses of biholomorphisms are holomorphic, and a biholomorphism is in particular a homeomorphism; a bijective holomorphic map whose inverse is holomorphic is a biholomorphism.

[F2] Coverings, sheets and deck groups ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[def-universal-covering-space]], [[def-deck-transformation-and-deck-group]]): a covering map $r:E\to B$ is a continuous surjection such that every point of $B$ has an evenly covered open neighbourhood $U$ with $r^{-1}(U)$ a disjoint union of open sheets, each mapped homeomorphically onto $U$; a universal covering is a covering whose total space is simply connected; a deck transformation of $r$ is an isomorphism $h$ over $B$, that is a homeomorphism with $r\circ h=r$, and the deck transformations form a group acting on $E$ by evaluation.

[F3] Rigidity and freeness of deck actions ([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]): for a covering with connected total space, two deck transformations agreeing at one point are equal, and consequently the deck group acts freely.

[F4] Fibre transitivity for universal covers ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]): for a path-connected, locally path-connected, semilocally simply connected base, the deck group of a universal cover is isomorphic to the fundamental group, the isomorphism carrying a loop class to the deck transformation that moves the chosen point of the fibre to the corresponding lifted endpoint; hence the deck group of a universal cover acts transitively on each fibre, since a path in the simply connected total space joining two points of the fibre projects to a loop whose lifted endpoint is the other fibre point. With [F3] the action on each fibre is simply transitive.

[F5] The holomorphic universal cover and its type ([[lem-holomorphic-structure-lifts-to-covering-surface]], [[def-universal-covering-type-riemann-surface]], [[thm-uniformization-simply-connected-riemann-surfaces]]): the connected Riemann surface $X$ has a holomorphic universal cover $p:\widetilde X\to X$; $\widetilde X$ is a second-countable Riemann surface with the unique complex structure making $p$ a holomorphic unbranched covering, every deck transformation is biholomorphic for it, and $\widetilde X$ is biholomorphic to exactly one of the models $\widehat{\mathbb C}$, $\mathbb C$, $\mathbb D$; the model occurring is the universal-covering type of $X$, so there is a biholomorphism $\varphi:\widetilde X\to M$ onto exactly one model $M\in\{\widehat{\mathbb C},\mathbb C,\mathbb D\}$.

[F6] Free and properly discontinuous actions ([[def-properly-discontinuous-group-action]], [[def-free-group-action]], [[def-group-action]]): an action of a group $G$ on a space $Y$ by homeomorphisms is free when no nonidentity element fixes a point and properly discontinuous when for every compact $K\subseteq Y$ only finitely many $g$ satisfy $gK\cap K\ne\varnothing$; the action is by evaluation, and $gK\cap K\ne\varnothing$ is symmetric in the sense that it fails for all but finitely many $g$.

[F7] The quotient topology ([[def-quotient-topology]], [[def-continuous-map-top]], [[def-homeomorphism-and-open-maps]]): for a surjection $q:Y\to Z$ the quotient topology makes $V\subseteq Z$ open exactly when $q^{-1}(V)$ is open in $Y$; the quotient map is continuous, and a continuous bijection which is an open map is a homeomorphism.

[F8] Compactness and local structure ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]], [[def-compact-space]], [[def-hausdorff-space]], [[def-interior-closure-boundary-top]]): a Riemann surface is locally compact and Hausdorff and every point has a compact neighbourhood; compact sets admit finite ambient open subcovers ([[lem-compactness-of-a-subspace-is-ambient]]), and continuous images of compact sets are compact ([[thm-compactness-under-continuous-maps]]); a compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]); closed subsets and finite unions of compact sets are compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]); second countability means having a countable open base ([[def-second-countable-space]]); connected locally path-connected spaces are path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]); finite unions and finite intersections of open sets are open, and a neighbourhood of a point contains an open neighbourhood.

[F9] Local biholomorphy ([[cor-injective-holomorphic-derivative-nonzero]]): an injective holomorphic map on a complex domain has nowhere-zero derivative and is biholomorphic onto its open image; consequently a holomorphic covering map between Riemann surfaces is a local biholomorphism, because a covering map is locally injective and its chart expressions are then injective holomorphic maps on plane domains.

[F10] Uniqueness of universal covers ([[thm-universal-cover-uniqueness-and-dominating-property]]): after basepoints over a common point are fixed, a universal cover of a path-connected, locally path-connected base admits a unique continuous map over the base to every connected covering, in particular any two universal covers are uniquely isomorphic over the base.

[F11] The models ([[lem-three-simply-connected-models-are-inequivalent]]): $\widehat{\mathbb C}$, $\mathbb C$ and $\mathbb D$ are simply connected Riemann surfaces and no two of them are biholomorphic.

## Proof

1.1 **The cover, its deck group and the model.** By [F5] the holomorphic universal cover $p:\widetilde X\to X$ exists, $\widetilde X$ is a simply connected Riemann surface, the deck transformations of $p$ are biholomorphic, and there is a biholomorphism $\varphi:\widetilde X\to M$ onto exactly one model $M\in\{\widehat{\mathbb C},\mathbb C,\mathbb D\}$. The deck group $\operatorname{Deck}(p)$ consists of the homeomorphisms $h$ of $\widetilde X$ with $p\circ h=p$ [F2]. [A1, F2, F5]

1.2 **Small invariant-free neighbourhoods.** We record the following consequence of free proper discontinuity, used twice below. Let a group $G$ act on a locally compact Hausdorff space $Y$ by homeomorphisms, freely and properly discontinuously. Then every $y\in Y$ has an open neighbourhood $V$ with $gV\cap V=\varnothing$ for every $g\ne e$. Indeed, by local compactness choose a compact neighbourhood $K$ of $y$; by proper discontinuity the set $F:=\{g\in G:gK\cap K\ne\varnothing\}$ is finite and contains $e$; for each $g\in F\setminus\{e\}$ freeness gives $g\cdot y\ne y$, and since $Y$ is Hausdorff there are disjoint open sets $U_g\ni g\cdot y$ and $W_g\ni y$. Then $V:=\operatorname{int}(K)\cap\bigcap_{g\in F\setminus\{e\}}\bigl(W_g\cap g^{-1}U_g\bigr)$ is a finite intersection of open neighbourhoods of $y$ [F8], hence an open neighbourhood of $y$, and for $g\in F\setminus\{e\}$ one has $gV\subseteq U_g$ and $V\subseteq W_g$, so $gV\cap V=\varnothing$, while for $g\notin F$ one has $V\subseteq K$ and $gV\subseteq gK$, so $gV\cap V=\varnothing$. [F6, F8]

2.1 **The deck group acts freely and simply transitively on fibres.** By [F3] the deck group of the covering $p$, whose total space $\widetilde X$ is connected, acts freely on $\widetilde X$. By [F4] it acts transitively, hence simply transitively, on every fibre of $p$: this uses that $X$ is path-connected, locally path-connected and semilocally simply connected, which holds because $X$ is a connected locally Euclidean space [F8]. [F3, F4, F8, step 1.1]

2.2 **The deck group acts properly discontinuously on $\widetilde X$.** Let $K\subseteq\widetilde X$ be compact. Consider all pairs consisting of an evenly covered coordinate-disc neighbourhood $U$ and a smaller open neighbourhood $W$ with compact closure $\overline W\subseteq U$; local coordinate discs supply such pairs at every point of $p(K)$. Compactness of $p(K)$ gives finitely many such $W_i$ covering it, with $\overline W_i\subseteq U_i$. For each $i$, the set $K\cap p^{-1}(\overline W_i)$ is compact: it is closed in $K$. The sheets over $U_i$ form an open cover of this set, so only finitely many of those sheets meet it; call their family $\mathcal S_i$. If $hK\cap K\ne\varnothing$, write $h(x)=y$ with $x,y\in K$, choose $i$ with $p(x)=p(y)\in W_i$, and let $V,V'\in\mathcal S_i$ be the sheets containing $x,y$. Since $h$ preserves $p$, it maps the connected sheet $V$ onto the sheet $V'$ over the same $U_i$. Two deck transformations mapping $V$ to $V'$ agree at the point of $V$ above any prescribed point of $U_i$, so they agree everywhere by [F3]. Thus at most $\sum_i|\mathcal S_i|^2$ deck transformations have $hK\cap K\ne\varnothing$, proving proper discontinuity. [F2, F3, F8, step 1.1]
2.3 **Quotients by free proper actions are coverings.** We record the general statement needed here for $M$ and again at the uniqueness stage below. Let $Y$ be a Riemann surface and let $K$ be a group of homeomorphisms of $Y$ acting freely and properly discontinuously (for instance a group of holomorphic automorphisms); let $q:Y\to Y/K$ be the quotient map to the orbit space with the quotient topology. Then $q$ is a covering map. Indeed, by step 1.2 applied to $Y$ and $K$, each $y\in Y$ has an open neighbourhood $V$ with $gV\cap V=\varnothing$ for all $g\ne e$. Then $q^{-1}(q(V))=\bigcup_{g\in K}gV$ is a disjoint union of open sets (if $gV\cap hV\ne\varnothing$ then $V\cap g^{-1}hV\ne\varnothing$, so $g^{-1}h=e$ and $g=h$), and $q$ restricted to each $gV$ is injective: if $q(ga)=q(gb)$ with $a,b\in V$, then $gb\in K\cdot ga$ and hence $b=g^{-1}hga\in g^{-1}hgV$ for some $h\in K$, so $V\cap g^{-1}hgV\ne\varnothing$, which forces $g^{-1}hg=e$, that is $h=e$ and $a=b$. $q$ is open because $q^{-1}(q(O))=\bigcup_{g}gO$ is open for open $O$; hence $q(V)$ is open and each restriction $q|_{gV}:gV\to q(V)$ is a continuous open bijection, thus a homeomorphism, so $q(V)$ is evenly covered and $q$ is a covering map [F2, F7, F8]. [F2, F6, F7, F8, step 1.2]

3.1 **Topology of the general holomorphic quotient.** In step 2.3 assume now that $K$ acts by biholomorphisms, and put $Z:=Y/K$. The continuous image $Z$ of connected $Y$ is connected. Since $q$ is open, the images of a countable open base of $Y$ form a countable open base of $Z$. To prove Hausdorffness, take distinct orbits represented by $y,z$. Choose compact neighbourhoods $C_y,C_z$ and put $C:=C_y\cup C_z$, compact by [F8]. The set $F:=\{g:gC_y\cap C_z\ne\varnothing\}$ is finite by proper discontinuity on $C$. For every $g\in F$, $gy\ne z$; choose disjoint open sets $A_g\ni gy$, $B_g\ni z$. Put $V:=\operatorname{int}C_y\cap\bigcap_{g\in F}g^{-1}A_g$ and $W:=\operatorname{int}C_z\cap\bigcap_{g\in F}B_g$. These are open neighbourhoods of $y,z$, and $gV\cap W=\varnothing$ for $g\in F$ by construction and for $g\notin F$ by the definition of $F$. Thus $q(V)$ and $q(W)$ are disjoint open neighbourhoods of the two orbits. So $Z$ is Hausdorff. [F1, F6, F7, F8, step 2.3, construct]

3.2 **The conjugate group on the model.** Put $G:=\varphi\operatorname{Deck}(p)\varphi^{-1}=\{\varphi\circ h\circ\varphi^{-1}:h\in\operatorname{Deck}(p)\}$; this is a group of holomorphic automorphisms of $M$, since $\varphi$ and $h$ are biholomorphic [F1, F5]. The action of $G$ on $M$ by evaluation is free: if $\varphi h\varphi^{-1}(m)=m$, then $h(\varphi^{-1}(m))=\varphi^{-1}(m)$ and $h=e$ by the freeness of step 2.1. It is properly discontinuous: for compact $K\subseteq M$ the set $\varphi^{-1}(K)$ is compact, being a continuous image under the homeomorphism $\varphi^{-1}$, and $\{g\in G:gK\cap K\ne\varnothing\}=\varphi\{h\in\operatorname{Deck}(p):h\varphi^{-1}(K)\cap\varphi^{-1}(K)\ne\varnothing\}\varphi^{-1}$ is a bijective image of a finite set by step 2.2. [F1, F5, F6, step 2.1, step 2.2]

4.1 **Charts on the general holomorphic quotient.** For every chart $\psi:U\to\mathbb C$ of $Y$ and every coordinate-disc restriction $V\subseteq U$ satisfying $gV\cap V=\varnothing$ for $g\ne e$, give $q(V)$ the chart $\psi\circ(q|_V)^{-1}$. Such $V$ exist about every point by step 1.2, and $q|_V$ is a homeomorphism by step 2.3. On an overlap of two quotient charts, write $s_V=(q|_V)^{-1}$ and $s_W=(q|_W)^{-1}$. At a point $a$ of the overlap there is $g\in K$ with $s_W(a)=g s_V(a)$. On the open neighbourhood where $s_V$ takes values in $V\cap g^{-1}W$, one has $s_W=g\circ s_V$, because $q|_W$ is injective. The transition is therefore locally $\psi_W\circ g\circ\psi_V^{-1}$, holomorphic by [F1]. These charts, with step 3.1, make $Z$ a Riemann surface, and $q:Y\to Z$ a local biholomorphism: on $V$ its quotient-coordinate expression is $\psi_V$. This structure is uniquely determined by requiring $q$ to be a local biholomorphism, since then every inverse local section and every displayed quotient chart is holomorphic. [F1, F2, F7, step 1.2, step 2.3, step 3.1, construct]

4.2 **The transported covering and its deck group.** Define $\tilde p:=p\circ\varphi^{-1}:M\to X$. Then $\tilde p$ is a covering map: it is continuous, it is surjective because $p$ is [F2], and if $U\subseteq X$ is evenly covered for $p$ with sheets $V_j$, then the sets $\varphi(V_j)$ are pairwise disjoint open subsets of $M$ covering $\tilde p^{-1}(U)$, and $\tilde p$ restricted to each $\varphi(V_j)$ is the composite of the homeomorphism $\varphi^{-1}|_{\varphi(V_j)}$ with the homeomorphism $p|_{V_j}$, hence a homeomorphism onto $U$; so $U$ is evenly covered for $\tilde p$ [F2, F8]. Its deck group is exactly $G$: a homeomorphism $h$ of $M$ satisfies $\tilde p\circ h=\tilde p$ if and only if $p\circ\varphi^{-1}h=p\circ\varphi^{-1}$, that is $\varphi^{-1}h\varphi\in\operatorname{Deck}(p)$, which is exactly $h\in G$. [F2, F8, step 3.2]

4.3 **The quotient map is a covering with deck group $G$.** Applying step 2.3 to $M$ and $G$ (which acts freely and properly discontinuously by step 3.2, by holomorphic automorphisms) gives that the canonical projection $q:M\to M/G$ onto the orbit space is a covering map; in particular $M/G$ is a topological space with the quotient topology of $q$ [F7, step 3.2, step 2.3]. [F7, step 3.2, step 2.3]

5.1 **The induced map $\bar p:M/G\to X$.** Define $\bar p\bigl(q(y)\bigr):=\tilde p(y)$ for $y\in M$. This is well defined: if $q(y')=q(y)$ then $y'=g\cdot y=\varphi h\varphi^{-1}(y)$ for some $h\in\operatorname{Deck}(p)$ (step 3.2), and $\tilde p(y')=p(\varphi^{-1}\varphi h\varphi^{-1}(y))=p(h(\varphi^{-1}(y)))=p(\varphi^{-1}(y))=\tilde p(y)$ because $p\circ h=p$ [F2, step 4.2]. [F2, step 3.2, step 4.2]

5.2 **$\bar p$ is continuous.** Let $W\subseteq X$ be open. By the definition of the quotient topology, $\bar p^{-1}(W)$ is open in $M/G$ if and only if $q^{-1}\bigl(\bar p^{-1}(W)\bigr)=\tilde p^{-1}(W)$ is open in $M$ [F7]; this holds because $\tilde p$ is continuous (it is a covering map, step 4.2). [F7, step 4.2]

5.3 **$\bar p$ is a bijection.** It is surjective because $\tilde p$ is surjective [F2, step 4.2]. It is injective: if $\tilde p(y)=\tilde p(y')$, then $\varphi^{-1}(y)$ and $\varphi^{-1}(y')$ lie in the same fibre of $p$, so by the simple transitivity of step 2.1 there is $h\in\operatorname{Deck}(p)$ with $\varphi^{-1}(y')=h(\varphi^{-1}(y))$; then $y'=\varphi h\varphi^{-1}(y)=g\cdot y$ lies in the orbit of $y$, so $q(y')=q(y)$. [F2, step 2.1, step 4.2]

5.4 **Exactly one model.** Suppose that $X$ is biholomorphic to $N/H$ for another model $N\in\{\widehat{\mathbb C},\mathbb C,\mathbb D\}$ and a group $H$ of holomorphic automorphisms of $N$ acting freely and properly discontinuously. The argument of step 2.3 applies verbatim to $Y:=N$ and $K:=H$, and uses only that $N$ is a Riemann surface and $H$ acts freely and properly discontinuously, so the quotient map $N\to N/H$ is a covering map; steps 3.1 and 4.1 give $N/H$ its quotient Riemann-surface structure and make this projection a local biholomorphism. Compose it with the supposed biholomorphism $N/H\to X$. The total space $N$ is simply connected [F11], so $N\to N/H$ is a universal covering of $N/H\cong X$, as is $p:\widetilde X\to X$; by the uniqueness of universal covers over the common base $X$, after basepoints are fixed there is a homeomorphism $\varphi:N\to\widetilde X$ over $X$ [F10], and $\varphi$ is biholomorphic: both projections $N\to X$ and $p:\widetilde X\to X$ are holomorphic coverings, the latter by [F5] and the former because step 4.1 applied to $N$ and $H$ makes $N\to N/H$ a holomorphic covering while $N/H\to X$ is a biholomorphism, hence both projections are local biholomorphisms [F9]; so on an evenly covered open set $W\subseteq X$ the map $\varphi$ is a composite of local inverses of local biholomorphisms, hence holomorphic, and the same argument applied to $\varphi^{-1}$ gives the reverse. Hence $N$ is biholomorphic to $\widetilde X$, and $\widetilde X$ is biholomorphic to $M$ by step 1.1; since no two of the models are biholomorphic [F11], $N=M$. Therefore the model occurring in the statement is unique: $X$ is a quotient of exactly one of the three models. [F9, F10, F11, step 1.1, step 2.3, step 3.1, step 4.1]

6.1 **$\bar p$ is an open map and hence a homeomorphism.** The covering map $\tilde p$ of step 4.2 is open: if $O\subseteq M$ is open and $x\in\tilde p(O)$, choose an evenly covered neighbourhood $U$ of $x$ and a sheet $V$ of $\tilde p^{-1}(U)$ meeting $O$; then $V\cap O$ is open and $\tilde p(V\cap O)$ is open in $X$ because $\tilde p|_V$ is a homeomorphism, and it contains $x$, so $\tilde p(O)=\bigcup_{x\in\tilde p(O)}\tilde p(V_x\cap O)$ is open [F2, F7, F8]. Now let $O\subseteq M/G$ be open; then $q^{-1}(O)$ is open in $M$ by the quotient topology, and $\bar p(O)=\bar p(q(q^{-1}(O)))=\tilde p(q^{-1}(O))$ is open in $X$ because $q$ is surjective. Hence the continuous bijection $\bar p$ is an open map, so it is a homeomorphism $M/G\to X$ [F7]. [F2, F7, F8, step 4.2, step 5.2, step 5.3]

7.1 **Complex structure on the quotient and existence.** Apply steps 3.1 and 4.1 to $Y=M$ and $K=G$. The quotient $M/G$ is a Riemann surface with its quotient atlas, and $q:M\to M/G$ is a holomorphic local biholomorphism. The map $\tilde p=p\circ\varphi^{-1}$ is also a holomorphic local biholomorphism by [F5], [F9]. Since $\bar p\circ q=\tilde p$, on a sufficiently small sheet $V$ the homeomorphism $\bar p$ of step 6.1 is $\tilde p|_V\circ(q|_V)^{-1}$, a local biholomorphism. Thus $\bar p$ and its inverse are holomorphic, so $X$ is biholomorphic to the quotient $M/G$. This proves existence for the model of step 1.1. [F1, F5, F9, step 1.1, step 3.1, step 4.1, step 3.2, step 6.1]

8.1 **Conclusion and choice accounting.** Steps 7.1 and 5.4 prove the statement: $X$ is biholomorphic to $M/G$ for the model $M$ of its universal-covering type and the group $G$ of holomorphic automorphisms of $M$ acting freely and properly discontinuously, and the model is exactly one of the three. The Axiom of Choice [A1] is used exactly through the Countable Choice consumed by the lifted holomorphic structure [F5] and through the uniformization theorem inside the definition of the type [F5]; the remaining selections are finite (finitely many evenly covered sets and sheets in step 2.2, finitely many group elements in step 1.2). [A1, F5, step 7.1, step 5.4] ∎

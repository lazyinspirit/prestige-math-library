---
id: lem-gr-development-pair-gluing
kind: lemma
title: "Gluing two developments along their maximal common development: the quotient is a development containing both"
status: draft
origin: session
domain: mathematics
dependency_level: 34
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-maximal-common-development, lem-gr-no-corresponding-boundary-points, lem-gr-subdevelopment-convexity, lem-gr-portion-inextendibility, lem-gr-maximal-geodesics-and-extension, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-cauchy-set-topology-and-graph, def-quotient-topology, def-second-countable-space, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-manifold, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-topological-space, def-continuity-real, def-interval, def-countable, def-countable-choice]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-maximal-common-development: mathematical-premise
  lem-gr-no-corresponding-boundary-points: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-portion-inextendibility: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  def-quotient-topology: mathematical-premise
  def-second-countable-space: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-topological-space: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-countable: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the proof of Theorem 2.7, points 1-5 (openness of the quotient maps, Hausdorffness via Theorem 3.13, the smooth atlas, the metric, the Cauchy property and the time orientation), printed pp. 20-22"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "Y. Choquet-Bruhat and R. Geroch, Global aspects of the Cauchy problem in general relativity, Communications in Mathematical Physics 14 (1969), 329-335: the gluing of two developments along a common one and the resulting global hyperbolicity"
      url: "https://doi.org/10.1007/BF01645389"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): quotients of causal spaces and embeddings of globally hyperbolic domains, Theorem 2.9.9 and Lemma 2.9.11, printed pp. 46-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]) for the countable atlases in (b). Let
$(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same
data ([[def-gr-development-and-data-fixing-isometry]] clause (a)), write
$\Sigma:=j(\Sigma)$ and $\Sigma':=j'(\Sigma)$, and let $(U,\varphi)$ be their
maximal common development
([[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (b),
[[lem-gr-maximal-common-development]]). Let
$Z:=(M\sqcup M',\tau)$ be the topological disjoint union with canonical
inclusions $\iota_M:M\to Z$, $\iota_{M'}:M'\to Z$, and define a relation $\sim$ on
$Z$ by: $z\sim w$ when $z=w$, or $z=\iota_M(p)$ and $w=\iota_{M'}(\varphi(p))$ for
some $p\in U$, or $z=\iota_{M'}(p)$ and $w=\iota_M(\varphi^{-1}(p))$ for some
$p\in\varphi(U)$. Let $Q:=Z/{\sim}$ with quotient map $\pi:Z\to Q$ and
quotient topology ([[def-quotient-topology]]). Then:

**(a)** $\sim$ is an equivalence relation; $\pi\circ\iota_M:M\to Q$ and
$\pi\circ\iota_{M'}:M'\to Q$ are injective, continuous and open, hence
homeomorphisms onto the open subsets $(\pi\circ\iota_M)(M)$ and
$(\pi\circ\iota_{M'})(M')$, which cover $Q$;
$(\pi\circ\iota_M)(U)=(\pi\circ\iota_{M'})(\varphi(U))=(\pi\circ\iota_M)(M)\cap(\pi\circ\iota_{M'})(M')$;
and $Q$ is Hausdorff.

**(b)** $Q$ carries a unique structure of a second countable smooth
four-manifold ([[def-smooth-manifold]]) making $\pi\circ\iota_M$ and
$\pi\circ\iota_{M'}$ diffeomorphisms onto open subsets; a unique smooth Lorentzian
metric $\bar g$, time orientation $\bar N$ and matter fields $\bar\psi$ on $Q$
making both maps isometries that preserve the time orientation and the matter
fields. These satisfy the field equations of the data on $Q$, and
$\bar j:=\pi\circ\iota_M\circ j$ is an embedding of $\Sigma$ with induced data
$(h,K,\psi_0)$, so $(Q,\bar g,\bar N,\bar j,\bar\psi)$ is a development of the
data; moreover every causal curve in $Q$ that is inextendible in $Q$ meets
$\bar j(\Sigma)$ in exactly one parameter value.

**(c)** $\Psi:=\pi\circ\iota_M$ and $\Psi':=\pi\circ\iota_{M'}$ are data-fixing
development embeddings of $M$ and $M'$ into $Q$ in the sense of
[[def-gr-development-and-data-fixing-isometry]] clause (c).

## Facts & Assumptions

**Given:** developments $M,M'$ of the same data, their maximal common development $(U,\varphi)$, the disjoint union $Z$, the relation $\sim$ and the quotient $Q$.

[L1] Maximality and the empty corresponding set: by [[lem-gr-maximal-common-development]] clause (b), $(U,\varphi)$ is a common subdevelopment of the same data ([[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a)) and every common subdevelopment is contained in it with the same map; hence the maximality hypothesis of [[lem-gr-no-corresponding-boundary-points]] is satisfied and that lemma yields that $U$ has **no** corresponding boundary points in the sense of clause (c) of the definition.

[L2] The two developments at the level of structure: $M,M'$ are Hausdorff second countable smooth Lorentzian four-manifolds with time orientations and matter fields, $\varphi$ is a diffeomorphism onto the open set $\varphi(U)$, and $\varphi$ preserves the metric, the time orientation and the matter fields ([[def-gr-development-and-data-fixing-isometry]] clauses (a)-(c), [[def-smooth-manifold]], [[def-second-countable-space]]).

[L3] Convexity and the Cauchy property: causal curves in $M$ with endpoints in $U$ lie in $U$, and likewise for their time reverses; an inextendible causal curve in $M$ (respectively in $U$) meets $\Sigma$ (respectively $\Sigma$) in exactly one parameter value; Cauchy sets are acausal; and every closed causal segment lies on an inextendible causal curve of the ambient manifold ([[lem-gr-subdevelopment-convexity]] clause (c), [[def-gr-development-and-data-fixing-isometry]] clause (a)5, [[lem-gr-maximal-geodesics-and-extension]] clauses (c)-(d), [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]).

[L4] The side decomposition and portion inextendibility: $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$ and $M'=I'^-(\Sigma')\sqcup\Sigma'\sqcup I'^+(\Sigma')$ ([[lem-gr-cauchy-set-topology-and-graph]] clause (a), [[thm-gr-cauchy-surface-implies-globally-hyperbolic]]); a maximal connected portion of a causal curve that is inextendible in an ambient open set and enters an open subset is inextendible in that subset ([[lem-gr-portion-inextendibility]]); and $\Sigma\subseteq U$, $\varphi(\Sigma)=\Sigma'$ ([[lem-gr-maximal-common-development]] clause (b), [[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c)).

[L5] Quotient topology: for a surjection $\pi:Z\to Q$ with the quotient topology a subset $A\subseteq Q$ is open exactly when $\pi^{-1}(A)$ is open, and $\pi$ is continuous; a continuous injective open map is a homeomorphism onto its image ([[def-quotient-topology]], [[def-topological-space]], [[def-continuity-real]]).

The stated $\mathrm{AC}_\omega$ is used only to select countably many charts; no Dependent Choice and no full Axiom of Choice is used.

## Proof

**Proof technique:** direct. Write $\iota_M,\iota_{M'}$ for the canonical inclusions and $p_M:=\pi\circ\iota_M$, $p_{M'}:=\pi\circ\iota_{M'}$.

1.1 (Equivalence relation.) Reflexivity and symmetry of $\sim$ are built into its definition; for transitivity let $z\sim w$ and $w\sim v$. If $z=w$ or $w=v$ then $z\sim v$ directly. Otherwise, up to exchanging the roles of the two members, $z=\iota_M(p)$, $w=\iota_{M'}(\varphi(p))$, $p\in U$; and $w\sim v$ with $w\in M'$ forces $v=w$ or $v=\iota_M(\varphi^{-1}(w))=\iota_M(p)$; in both cases $z\sim v$. [given, algebra]

2.1 ($p_M$ and $p_{M'}$ are open injections.) For open $A\subseteq M$ the saturation is $$\pi^{-1}\bigl(p_M(A)\bigr)=\iota_M(A)\cup\iota_{M'}\bigl(\varphi(A\cap U)\bigr),$$ which is open in $Z=\iota_M(M)\sqcup\iota_{M'}(M')$ because $A$ and $A\cap U$ are open and $\varphi$ is a homeomorphism onto its image ([L2]); hence $p_M(A)$ is open in $Q$ ([L5]), and similarly for $p_{M'}$. If $p_M(p)=p_M(q)$ with $p\ne q$, then $\iota_M(p)\sim\iota_M(q)$ requires $\iota_M(p)=\iota_{M'}(\varphi(p))$ or $\iota_M(q)=\iota_{M'}(\varphi(q))$, impossible inside the disjoint union, or $\iota_M(p)=\iota_M(q)$, i.e. $p=q$; so $p_M$ is injective, and similarly $p_{M'}$. Both are continuous as compositions of the continuous inclusions with $\pi$ ([L5]). [step 1.1, L2, L5, algebra]

3.1 (The overlap and the side decomposition.) A class is represented in both members exactly when it has a representative $p\in U\subseteq M$: indeed $\iota_M(p)\sim\iota_{M'}(\varphi(p))$, and conversely an identification always arises from a point of $U$ by the definition of $\sim$. Hence $p_M(U)=p_{M'}(\varphi(U))=p_M(M)\cap p_{M'}(M')$, and $$Q=p_M(M\setminus U)\;\sqcup\;p_M(U)\;\sqcup\;p_{M'}(M'\setminus U),$$ a disjoint union of three sets, each open in $Q$ by step 2.1 (images of the open sets $M\setminus U$, $U$, $M'\setminus U$). [step 2.1, given, algebra]

4.1 (Smooth atlas.) Let $\{(V_i,\phi_i)\}_{i\in\mathbb N}$ and $\{(V'_k,\phi'_k)\}_{k\in\mathbb N}$ be countable atlases of $M$ and $M'$ ([L2]); their existence uses $\mathrm{AC}_\omega$ applied to the countable bases of the two manifolds. Then $$\bigl\{(p_M(V_i),\;\phi_i\circ p_M^{-1})\bigr\}_{i\in\mathbb N}\cup\bigl\{(p_{M'}(V'_k),\;\phi'_k\circ p_{M'}^{-1})\bigr\}_{k\in\mathbb N}$$ is a countable open cover of $Q$ (step 3.1) by homeomorphisms onto open subsets of $\mathbb R^4$. Its transition maps are of the form $\phi_{i_0}^{-1}\circ\phi_{i_1}$, the primed analogue, or $\phi'_k\circ\varphi\circ\phi_i^{-1}$ (suitably restricted) on the overlap in $p_M(U)$; the first two are smooth because the atlases are smooth, and the third is smooth because $\varphi:(U,g|_U,\psi|_U)\to M'$ is a diffeomorphism onto the open set $\varphi(U)$ ([L2]). Hence $Q$ is a smooth four-manifold with this structure, and it is the unique structure making $p_M,p_{M'}$ diffeomorphisms onto their images, since any such structure has these charts in its atlas. [step 2.1, step 3.1, L2, L5, algebra]

4.2 ($Q$ is Hausdorff.) Let $[z]\ne[w]\in Q$. If both are represented in one member, say $z,w\in M$, then $p_M$ is a homeomorphism onto the open set $p_M(M)$ ([L5]); if $z\ne w$ they are separated in $M$ and their images in $Q$ are separated by images of the separating open sets; if $z=w$ then $[z]=[w]$, excluded. If $z\in M\setminus U$ and $w\in M'\setminus\varphi(U)$, the two open sets $p_M(M\setminus U)$ and $p_{M'}(M'\setminus\varphi(U))$ separate them (step 3.1). The remaining case is $z\in\partial U$ and $w\in\partial\varphi(U)$ (or with the two members exchanged), since a representative of $[z]$ in $U$ or of $[w]$ in $\varphi(U)$ reduces to the previous cases via step 3.1. Suppose then that no open neighbourhoods of $[z]$ and $[w]$ in $Q$ are disjoint. For all open $V\ni z$ in $M$ and $V'\ni w$ in $M'$, the open sets $p_M(V)$ and $p_{M'}(V')$ (both are open in $Q$ by step 2.1) meet, so there are $x\in V\cap U$ and $y\in V'\cap\varphi(U)$ with $\iota_M(x)\sim\iota_{M'}(y)$, which by step 3.1 means $y=\varphi(x)$. Thus every pair of open neighbourhoods of $z$ and $w$ contains such a pair $(x,\varphi(x))$, that is, $z$ and $w$ are corresponding boundary points of $U$ in the sense of [[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (c). This contradicts [L1]. Hence $Q$ is Hausdorff. [step 2.1, step 3.1, L1, L5, contradiction, algebra]

4.3 (Second countability.) A homeomorphism transports a countable basis to a countable basis, so transporting the countable bases of $M$ and $M'$ along $p_M$ and $p_{M'}$ gives two countable bases of the open sets $p_M(M)$ and $p_{M'}(M')$; their union is at most countable and is a basis of $Q$ because every open subset of $Q$ is a union of its traces in the two open parts, which are unions of members of these bases. Hence $Q$ is second countable ([[def-second-countable-space]], [[def-countable]]). [step 2.1, step 3.1, L2, algebra]

5.1 (Metric, orientation and matter fields descend.) On $p_M(M)$ define $\bar g$ by pushforward of $g$ under $p_M$ and likewise $\bar N$, $\bar\psi$; on $p_{M'}(M')$ define them by pushforward under $p_{M'}$. On the overlap $p_M(U)=p_{M'}(\varphi(U))$ the two prescriptions agree: indeed $p_{M'}\circ\varphi=p_M$ there (step 3.1) and $\varphi$ is a data-fixing isometry preserving the metric, the time orientation and the matter fields ([L2], [[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c)). Since the overlap and its complement are open, the resulting $\bar g$ is a smooth Lorentzian metric, $\bar N$ a time orientation and $\bar\psi$ smooth matter fields on $Q$ ([L2]); and $p_M$, $p_{M'}$ are isometries preserving the time orientation and the matter fields. [step 4.1, L2, algebra]

6.1 (The field equations and the induced data.) The equations of the data ([[def-gr-development-and-data-fixing-isometry]] clause (a)4) are local and hold on $M$ and $M'$, so they hold on $Q$ because $Q$ is covered by the images of the two isometries (step 5.1). The map $\bar j=\pi\circ\iota_M\circ j=p_M\circ j:\Sigma\to Q$ is an embedding with spacelike image, since $p_M$ is a diffeomorphism onto an open set and $j$ has these properties in $M$; its induced metric, second fundamental form and matter data are $(h,K,\psi_0)$ because $p_M$ is a data-fixing isometry ([L2]). [step 5.1, L2, algebra]

7.1 (The Cauchy property.) Let $\bar\gamma:\bar I\to Q$ be a causal curve inextendible in $Q$. Pick $\bar t_0\in\bar I$; say $\bar\gamma(\bar t_0)\in p_M(M)$ (the other case is symmetric). Let $\bar J$ be the connected component of $\bar\gamma^{-1}[p_M(M)]$ containing $\bar t_0$; by [L4] the restriction $\bar\gamma|_{\bar J}$ is inextendible in the manifold $p_M(M)$, hence its pullback $\gamma:=p_M^{-1}\circ\bar\gamma|_{\bar J}$ is a causal curve in $M$ inextendible in $M$ ([L2]); by [L3] it meets $\Sigma$ in exactly one parameter value, so $\bar\gamma$ meets $\bar j(\Sigma)$ at least once. Suppose $\bar\gamma(t_1),\bar\gamma(t_2)\in\bar j(\Sigma)$ with $t_1<t_2$. The sets $\bar\gamma^{-1}[p_M(M\setminus U)]$, $\bar\gamma^{-1}[p_M(U)]$, $\bar\gamma^{-1}[p_{M'}(M'\setminus U)]$ are pairwise disjoint open subsets of the interval $[t_1,t_2]$ covering it (step 3.1), and they are all empty except one, because intervals are connected; since $\bar\gamma(t_i)\in\bar j(\Sigma)\subseteq p_M(U)$, the exceptional one is $\bar\gamma^{-1}[p_M(U)]$, so $\bar\gamma|_{[t_1,t_2]}$ lifts to a causal curve in $U$ whose endpoint values lie in $\Sigma$ at two distinct parameters. By [L3] that segment lies on an inextendible causal curve of $U$, which by the Cauchy property of $\Sigma$ in $U$ meets $\Sigma$ in exactly one parameter value, whereas it contains the two endpoint parameter values whose values lie in $\Sigma$ ([L3]). Hence the meeting is exactly once. [step 6.1, L3, L4, contradiction, algebra]

8.1 (Conclusion.) The preceding steps exhibit $(Q,\bar g,\bar N,\bar j,\bar\psi)$ as a time-oriented second countable smooth Lorentzian four-manifold satisfying the field equations on $Q$, with $\bar j(\Sigma)$ a spacelike embedded hypersurface meeting every inextendible causal curve exactly once and carrying the induced data of the same initial data: a development of the data. The maps $p_M:M\to Q$ and $p_{M'}:M'\to Q$ are diffeomorphisms onto open subsets, isometric, time-orientation preserving, matter preserving and satisfy $p_M\circ j=\bar j=p_{M'}\circ j'$ (step 3.1), so they are data-fixing development embeddings. This proves (a), (b) and (c). [step 4.1, step 4.3, step 6.1, step 7.1, algebra] ∎

## Remarks

This is Sbierski's Theorem 2.7. Hausdorffness is exactly where the absence of corresponding boundary points of the maximal common development is used; the smooth structure and the fields descend because the maximal common development map is a data-fixing isometry, and second countability is immediate because the quotient is covered by the images of two countable atlases. No isometry class of developments is formed, and the only choice used is the stated countable selection of charts.

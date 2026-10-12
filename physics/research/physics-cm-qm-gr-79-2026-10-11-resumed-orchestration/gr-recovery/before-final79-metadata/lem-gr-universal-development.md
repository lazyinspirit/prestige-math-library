---
id: lem-gr-universal-development
kind: lemma
title: "Existence of a universal development: the quotient of the set-sized family of canonical developments along pairwise maximal common developments"
status: draft
origin: session
domain: mathematics
dependency_level: 35
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-push-up-rule, thm-smooth-partitions-of-unity-exist-on-manifolds, lem-timelike-cone-has-two-convex-components, lem-gr-joint-exponential-diffeomorphism, thm-gr-convex-normal-neighborhoods, lem-gr-convex-normal-causality, thm-second-countable-implies-separable, thm-countable-union-of-countable, def-countable, lem-q-and-irrationals-dense-r, def-topology-basis-subbasis, def-separable-space, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-maximal-common-development, lem-gr-no-corresponding-boundary-points, lem-gr-development-pair-gluing, lem-gr-intersection-of-developments, lem-gr-subdevelopment-convexity, lem-gr-portion-inextendibility, lem-gr-data-fixing-immersion-is-embedding, lem-gr-maximal-geodesics-and-extension, lem-gr-cauchy-set-topology-and-graph, thm-gr-cauchy-surface-implies-globally-hyperbolic, thm-gr-smooth-cauchy-temporal-splitting, thm-gr-local-geodesics-and-exponential-map, def-quotient-topology, def-smooth-manifold, def-second-countable-space, def-topological-space, def-c-r-and-smooth-maps-between-smooth-manifolds, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-power-set, def-axiom-schema-of-separation, def-countable-choice, def-dependent-choice, def-continuity-real, def-interval]
dependency_roles:
  lem-gr-push-up-rule: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-convex-normal-causality: mathematical-premise
  thm-second-countable-implies-separable: mathematical-premise
  thm-countable-union-of-countable: mathematical-premise
  def-countable: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  def-topology-basis-subbasis: mathematical-premise
  def-separable-space: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-maximal-common-development: mathematical-premise
  lem-gr-no-corresponding-boundary-points: mathematical-premise
  lem-gr-development-pair-gluing: mathematical-premise
  lem-gr-intersection-of-developments: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-portion-inextendibility: mathematical-premise
  lem-gr-data-fixing-immersion-is-embedding: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-quotient-topology: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-second-countable-space: mathematical-premise
  def-topological-space: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-power-set: mathematical-premise
  def-axiom-schema-of-separation: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the proof of Theorem 2.8 (the set X of developments over Sigma x R, the quotient by identifications along maximal common developments, transitivity, Hausdorffness, the Cauchy property, and the embedding of an arbitrary development via a globally timelike flow), printed pp. 22-24"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "Y. Choquet-Bruhat and R. Geroch, Global aspects of the Cauchy problem in general relativity, Communications in Mathematical Physics 14 (1969), 329-335: the set-sized gluing construction of the maximal development"
      url: "https://doi.org/10.1007/BF01645389"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Cauchy hypersurfaces, domains of dependence and globally hyperbolic domains, Theorem 2.9.9, printed pp. 46-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pending
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Fix the data of
[[def-gr-development-and-data-fixing-isometry]]: a smooth three-manifold
$\Sigma$ with smooth Riemannian metric $h$, smooth symmetric tensor $K$,
one fixed admissible covariant matter model with its complete smooth Cauchy
data $d$, and constants $\Lambda,\kappa$. The model and its complete data,
including all required initial derivatives and prescribed fields on empty
regions, are fixed throughout. Assume the supplied complete-data local
existence and geometric uniqueness hypotheses apply on every spacelike
restart surface occurring in comparisons, as required by that definition.
Assume that at least one development of these data exists.
Write $Z_0:=\Sigma\times\mathbb R$ and let $j_0:\Sigma\to Z_0$,
$j_0(x):=(x,0)$.

**(a) The set-sized family.** Let $\mathcal X$ be the collection of all
tuples $(U,g,N,\psi)$ such that $U\subseteq Z_0$ is an open neighbourhood of
$j_0(\Sigma)$ in $Z_0$, $g$ is a smooth Lorentzian metric on $U$, $N$ a time
orientation and $\psi$ matter fields of the sector on $U$, and
$(U,g,N,j_0,\psi)$ is a development of the data in the sense of
[[def-gr-development-and-data-fixing-isometry]] clause (a). Then
$\mathcal X$ is a set, and it is nonempty provided at least one development
of the data exists.

**(b) Identifications.** For $\alpha=(U_\alpha,g_\alpha,N_\alpha,\psi_\alpha)$
and $\beta\in\mathcal X$ let $(U_{\alpha\beta},\varphi_{\alpha\beta})$ be
their maximal common development, regarded as a subset of $U_\alpha$
([[lem-gr-maximal-common-development]], [[def-gr-common-subdevelopment-and-corresponding-boundary]];
in the convention of the definition it is realised inside the first member).
Let $Z:=\bigsqcup_{\alpha\in\mathcal X}U_\alpha$ and let $\sim$ be the
equivalence relation on $Z$ **generated** by the relations
$x\sim\varphi_{\alpha\beta}(x)$ for $\alpha,\beta\in\mathcal X$ and
$x\in U_{\alpha\beta}$ (a finite chain of such steps, in either order).
Then the classes of two points $p\in U_\alpha$, $q\in U_\beta$ coincide if and
only if $p\in U_{\alpha\beta}$ and $q=\varphi_{\alpha\beta}(p)$.

**(c) The quotient.** Let $Q:=Z/{\sim}$ with quotient map $\pi$. Then
$\pi|_{U_\alpha}:U_\alpha\to Q$ is a homeomorphism onto an open subset
$Q_\alpha:=\pi(U_\alpha)$, the family $\{Q_\alpha\}_{\alpha\in\mathcal X}$
covers $Q$, and $Q$ is Hausdorff.

**(d) Structure.** $Q$ is a Hausdorff, second countable smooth four-manifold and carries a
unique smooth atlas (unique in the sense of maximal atlases compatible with
the charts below) making all maps $\pi|_{U_\alpha}$ diffeomorphisms onto open
subsets, together with a smooth Lorentzian metric $\bar g$, a time orientation
$\bar N$ and matter fields $\bar\psi$ such that every $\pi|_{U_\alpha}$ is an
isometry onto its image preserving time orientation and matter fields, and
such that $\bar j:=\pi|_{U_\alpha}\circ j_0$ (independent of $\alpha$) is a
common embedding of $\Sigma$ with induced data $(h,K,d)$. The field
equations hold on $Q$, and every causal curve in $Q$ that is inextendible in
$Q$ meets $\bar j(\Sigma)$ in exactly one parameter value. Consequently
$(Q,\bar g,\bar N,\bar j,\bar\psi)$ is a development of the data
in the sense of [[def-gr-development-and-data-fixing-isometry]] clause (a).
The representative $\bar N$ is chosen to determine the common future cones;
it need not equal the pushforward of each representative $N_\alpha$.

**(e) Universality.** Every development $(M,g,N,j,\psi)$ of the same data
admits a data-fixing development embedding into $Q$ in the sense of
[[def-gr-development-and-data-fixing-isometry]] clause (c).

## Facts & Assumptions

**Given:** the fixed data, the family $\mathcal X$, the disjoint union $Z$, the generated relation $\sim$ and the quotient $Q$.

[L1] Set-sized specification: a member of $\mathcal X$ is a tuple $(U,g,N,\psi)$ with $U\subseteq Z_0$, $g\subseteq T^*Z_0\otimes T^*Z_0$, $N\subseteq TZ_0$ and each matter field a subset of the corresponding tensor bundle over $Z_0$; these are subsets of fixed sets, so membership in $\mathcal X$ is separation over a product of power sets ([[def-power-set]], [[def-axiom-schema-of-separation]]).

[L2] Maximal common developments and pair gluing: for any two members $\alpha,\beta\in\mathcal X$ their maximal common development $(U_{\alpha\beta},\varphi_{\alpha\beta})$ exists, is a common subdevelopment realised inside $U_\alpha$, and contains the image of $\Sigma$; the pair quotient $Q_{\alpha\beta}:=(U_\alpha\sqcup U_\beta)/{\sim_{\alpha\beta}}$ of [[lem-gr-development-pair-gluing]] is a development of the data which is Hausdorff, second countable and smooth, in which $U_\alpha$ and $U_\beta$ embed by data-fixing development embeddings; the maximality property of [[lem-gr-maximal-common-development]] clause (b) applies to every common subdevelopment ([[lem-gr-maximal-common-development]], [[lem-gr-development-pair-gluing]] clauses (a)-(c)).

[L3] Transitivity of the pairwise identifications: for $\alpha,\beta,\gamma\in\mathcal X$ put $V:=\varphi_{\alpha\beta}^{-1}(U_{\beta\gamma})\subseteq U_{\alpha\beta}\subseteq U_\alpha$. Then $V$ is open and contains $j_0(\Sigma)$, and it carries a development structure of the same data: indeed $\varphi_{\alpha\beta}$ maps $V$ diffeomorphically onto $U_{\beta\gamma}\cap\varphi_{\alpha\beta}(U_{\alpha\beta})$, the intersection of two developments of the same data sharing the initial Cauchy surface, which is a development by [[lem-gr-intersection-of-developments]], and the development structure is transported by the data-fixing isometry $\varphi_{\alpha\beta}$ ([[def-gr-development-and-data-fixing-isometry]] clause (a), [[def-gr-common-subdevelopment-and-corresponding-boundary]]); consequently $\chi:=\varphi_{\beta\gamma}\circ\varphi_{\alpha\beta}|_V$ is a data-fixing isometric immersion of the development $V$ into $U_\gamma$, hence a data-fixing development embedding ([[lem-gr-data-fixing-immersion-is-embedding]] clauses (b)-(c)), so $(V,\chi)$ is a common subdevelopment of $\alpha,\gamma$ and therefore $V\subseteq U_{\alpha\gamma}$ and $\varphi_{\alpha\gamma}|_V=\chi$ ([[lem-gr-maximal-common-development]] clause (b)).

[L4] Cauchy structure of the members and of $Q_0:=Q$: each $U_\alpha$ is a development of the data, hence globally hyperbolic with Cauchy surface $j_0(\Sigma)$; $\Sigma$ is acausal in each member and the side decomposition holds; a maximal connected portion of a curve that is inextendible in an ambient open set and enters an open subset is inextendible there; the push-up implications hold and every closed causal segment lies on an inextendible causal curve of the ambient manifold ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]], [[def-gr-development-and-data-fixing-isometry]] clause (a)5, [[lem-gr-cauchy-set-topology-and-graph]] clause (a), [[lem-gr-maximal-geodesics-and-extension]] clauses (c)-(d), [[lem-gr-portion-inextendibility]], [[lem-gr-push-up-rule]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]).

[L5] Quotient topology: openness, continuity and the homeomorphism criterion for injective open maps ([[def-quotient-topology]], [[def-topological-space]], [[def-continuity-real]]).

[L6] Temporal flow representation: every globally hyperbolic member is representable over $\Sigma\times\mathbb R$: with $T$ and $X:=\nabla T/g(\nabla T,\nabla T)$ of [[thm-gr-smooth-cauchy-temporal-splitting]], the flow of $X$ is global and $T$ increases at unit rate along it (clauses (a),(d),(e)), so $T\circ\Phi(t,x)=T(x)+t$; and an integral curve of $X$ cannot converge at an end because $T$ is continuous there while tending to $\pm\infty$ ([[def-continuity-real]]).

[L7] Intersection of developments: if two developments of the data share the initial Cauchy surface, their intersection carries a development structure of the data on which both embedding maps restrict to data-fixing development embeddings ([[lem-gr-intersection-of-developments]] clauses (a)-(c)); applied successively this yields the same for a finite intersection of subdevelopments of a common member.

[L8] Local exponential arguments are applied inside a member, which is a genuine second countable Lorentzian manifold: its joint exponential map has a smooth inverse near the diagonal, sufficiently small convex normal neighborhoods exist, and a contained timelike chord has timelike inverse velocity ([[lem-gr-joint-exponential-diffeomorphism]] clauses (a)-(c), [[thm-gr-convex-normal-neighborhoods]] clauses (a)-(b), [[lem-gr-convex-normal-causality]]). Uniqueness of the geodesic ODE lets these local maps patch in the quotient atlas; the maximal exponential domain on $Q$ is open and the exponential is locally smooth, as follows by following a compact geodesic segment through finitely many member charts ([[thm-gr-local-geodesics-and-exponential-map]]). This is a local construction, not an application of a theorem whose hypotheses already require second countability of $Q$.

[L9] Countable Choice supplies a countable dense subset of the second countable initial manifold and tangent bases at countably many selected points; countable unions of countable sets are countable, and rational vectors and rational translated balls are dense and form a Euclidean basis ([[thm-second-countable-implies-separable]], [[def-separable-space]], [[thm-countable-union-of-countable]], [[def-countable]], [[def-countable-choice]], [[lem-q-and-irrationals-dense-r]], [[def-topology-basis-subbasis]]).

[L10] Once $Q$ is second countable, its Hausdorff locally Euclidean smooth atlas makes it a smooth manifold, and Countable Choice gives a smooth partition of unity subordinate to its member cover. A finite positive weighted sum of vectors in one future timelike cone remains future timelike ([[def-smooth-manifold]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[lem-timelike-cone-has-two-convex-components]]).

Countable Choice is used for dense points, countably many tangent bases and the partition of unity. Dependent Choice permits the successive compatible countable choices in the recursion and is inherited from temporal splitting; separation and formation of power sets require neither choice axiom.

## Proof

**Proof technique:** direct.

1.1 (Clause (a).) Each member is determined by four subsets of fixed sets as in [L1], so separation makes $\mathcal X$ a set; it is nonempty whenever some development of the data exists, by transporting that development through the flow representation [L6] (this transport is carried out in the proof of clause (e) below and uses no new hypothesis). [L1, L6, algebra]

1.2 (Canonical representation of an arbitrary development.) Let $(M,g,N,j,\psi)$ be a development. By [L4] it is globally hyperbolic with Cauchy surface $j(\Sigma)$. Let $X,\Phi,T$ be as in [L6]. Each integral curve is defined on $\mathbb R$ and satisfies $T(\Phi(t,y))=T(y)+t$, so it has no endpoint in $M$ and meets $j(\Sigma)$ exactly once. The map $\chi:\Sigma\times\mathbb R\to M$, $\chi(x,t)=\Phi(t,j(x))$, is therefore bijective and smooth. At $(x,t)$ its differential sends tangent vectors from $\Sigma$ to $d\Phi_t(dj(T_x\Sigma))$ and the time direction to $X_{\Phi(t,j(x))}=d\Phi_t(X_{j(x)})$. Since $j(\Sigma)$ is spacelike, $X_{j(x)}$ is not tangent to it; since $\Phi_t$ is a diffeomorphism with inverse $\Phi_{-t}$, these images span $T_{\chi(x,t)}M$. Thus $\chi$ is a bijective local diffeomorphism, hence a diffeomorphism. Pulling back the metric, orientation representative and matter fields gives a tuple on $Z_0=\Sigma\times\mathbb R$ in $\mathcal X$, with $\chi\circ j_0=j$. This proves nonemptiness from the assumed development. The associated quotient embedding will be concluded after the quotient structure is established. [L6, L4, algebra]

2.1 (Clause (b): transitivity of the pairwise identifications.) The identity common development of a member with itself gives $U_{\alpha\alpha}=U_\alpha$ and $\varphi_{\alpha\alpha}=\operatorname{id}$ by maximality [L2]; reversing a common-development embedding gives the same identifications in the opposite order, by the same maximality. Let $p\in U_\alpha$, $q\in U_\beta$, $r\in U_\gamma$ with $p\sim q$ via $\varphi_{\alpha\beta}$ and $q\sim r$ via $\varphi_{\beta\gamma}$. Then $p\in U_{\alpha\beta}$ and $q=\varphi_{\alpha\beta}(p)\in U_{\beta\gamma}$, so $p\in V=\varphi_{\alpha\beta}^{-1}(U_{\beta\gamma})$, and by [L3] the pair $(V,\chi)$ is a common subdevelopment of $\alpha$ and $\gamma$ mapping $p$ to $\chi(p)=\varphi_{\beta\gamma}(\varphi_{\alpha\beta}(p))=r$. By the maximality property of the maximal common development of $\alpha$ and $\gamma$, $V\subseteq U_{\alpha\gamma}$ and $\varphi_{\alpha\gamma}(p)=\chi(p)=r$. Hence the identification of $p$ with $r$ holds at chain length two, and by induction at every finite chain length; the converse inclusion is the definition of the generating relations. This proves (b). [step 1.1, L3, algebra]

3.1 (Clause (c): the member maps and Hausdorffness.) By [L5] the map $\pi|_{U_\alpha}$ is continuous; it is injective because step 2.1 reduces any identification of points in $U_\alpha$ to the maximal common development with itself, which is $(U_\alpha,\operatorname{id})$ by the identity common development and maximality [L2]. Openness: the saturation of an open $A\subseteq U_\alpha$ is the union over $\gamma\in\mathcal X$ of $\{x\in U_\gamma:\ x\sim a\text{ for some }a\in A\}$, which by step 2.1 equals $$\bigcup_{\gamma\in\mathcal X}\varphi_{\alpha\gamma}\bigl(A\cap U_{\alpha\gamma}\bigr),$$ a union of open sets, because each $\varphi_{\alpha\gamma}$ is a diffeomorphism onto the open set $\varphi_{\alpha\gamma}(U_{\alpha\gamma})$ and $A\cap U_{\alpha\gamma}$ is open. Hence each $\pi|_{U_\alpha}$ is a homeomorphism onto the open set $Q_\alpha$, and the $Q_\alpha$ cover $Q$ because every class has a representative. For Hausdorffness let $[p]\ne[q]$ with $p\in U_\alpha$, $q\in U_\beta$. Consider the pair quotient $Q_{\alpha\beta}$ of [L2] with its canonical map $\kappa:Q_{\alpha\beta}\to Q$; by step 2.1 the classes of $p$ and $q$ are distinct in $Q_{\alpha\beta}$ (otherwise they would be identified by a chain, hence by the single pairwise identification), and $Q_{\alpha\beta}$ is Hausdorff, so there are disjoint open $O_p\ni[p]$, $O_q\ni[q]$ in $Q_{\alpha\beta}$. The map $\kappa$ is injective (step 2.1), continuous and open (the saturation argument above applies to the two-member family), hence a homeomorphism onto its open image; thus $\kappa(O_p),\kappa(O_q)$ are disjoint open neighbourhoods of $[p],[q]$ in $Q$. This proves (c). [step 2.1, L2, L5, algebra]

4.1 (The local smooth structure, fields and future cones.) Compose the charts of each member with $(\pi|_{U_\alpha})^{-1}$. On $Q_\alpha\cap Q_\beta=\pi(U_{\alpha\beta})$, the transitions use the smooth data-fixing diffeomorphism $\varphi_{\alpha\beta}$, so these charts generate a unique maximal compatible smooth atlas. The metrics and matter fields agree on overlaps and descend to $\bar g,\bar\psi$; the field equations hold locally. The pushforwards of $N_\alpha$ need not agree as vectors, but they select the same future timelike component on every overlap because $\varphi_{\alpha\beta}$ preserves future cones. Thus there is a consistent locally smooth choice of future cones, before any global representative field is asserted. The maps $\pi|_{U_\alpha}\circ j_0$ agree and define an embedded spacelike $S:=\bar j(\Sigma)$ with the prescribed induced data, since every member contains this entire surface and each member map is a diffeomorphism onto an open subset. [step 3.1, L2, algebra]

5.1 (A countable dense set without assuming second countability of $Q$.) Choose a countable dense $D_0\subseteq S$. At every newly occurring point choose one tangent basis and retain it at all later stages; let $R_x$ be its rational span. Recursively set $D_{n+1}=D_n\cup\{\exp_xv:x\in D_n, v\in R_x, \bar g_x(v,v)<0, \exp_xv\text{ defined}\}$ and $D=\bigcup_nD_n$. These sets are countable by [L9], using the declared choice axioms for the recursion. To show density, take $p\in Q_\alpha$ and its member flow line from $z_0\in S$ to $p$ given by [L6]. If its flow parameter is zero, density of $D_0$ in $S$ suffices. Otherwise partition its compact segment into finitely many nonconstant timelike subsegments, each contained in a convex normal neighborhood within this member. Write their endpoints $z_0,\ldots,z_k=p$. For negative flow parameter the chords are past timelike; for positive parameter they are future timelike. We show inductively $z_i\in\overline{D\cap Q_\alpha}$: if $z_{i-1}$ has this property, choose $d\in D\cap Q_\alpha$ sufficiently near $z_{i-1}$. In the local two-point inverse the vector $v(d,z_i)$ is timelike by continuity and openness of the timelike set. Approximate it by a timelike $u\in R_d$ so closely that the member geodesic remains defined to time one and $\exp_du$ lies in any prescribed neighborhood of $z_i$ within $Q_\alpha$. Such $u$ exists by rational density and openness of the local exponential domain. If $d\in D_m$, then $\exp_du\in D_{m+1}\subseteq D$, with no claim that $m=i-1$. The exact inverse satisfies $\exp_d(v(d,z_i))=z_i$; no approximation error is added for this equality. This proves the induction and density of $D$ in $Q$. [step 4.1, L6, L8, L9, construct]

6.1 (An explicit countable basis.) In each fixed tangent basis at $d\in D$, let $B_d(a,r)$ denote a Euclidean ball with rational center $a\in\mathbb Q^4$ and rational radius $r>0$. Form the family of all $\exp_d(B_d(a,r))$ for which the ball lies in the exponential domain and $\exp_d$ restricts to a diffeomorphism onto an open subset of $Q$. This family is countable by [L9] and consists of open sets by its definition. Given $p\in O$ with $O$ open, choose a member containing $p$ and use its joint exponential inverse near $(p,p)$. For all $d$ in a sufficiently small open neighborhood of $p$ in that member, there is a velocity $v(d,p)$ inside an open fiber domain $H_d$ on which $\exp_d$ is a diffeomorphism onto an open set containing $p$. Choose such $d\in D$ by step 5.1. The open set $H_d\cap\exp_d^{-1}(O)$ contains $v(d,p)$, so a rational translated ball in the fixed basis at $d$ contains $v(d,p)$ and lies in this open set. Its image is a family member containing $p$ and contained in $O$. This proves the basis criterion and hence second countability of $Q$. [step 5.1, L8, L9, construct]

7.1 (A smooth global orientation representative.) The quotient is now a smooth manifold in the full sense of [L10]. Choose a subordinate locally finite smooth partition of unity $(\rho_\alpha)$ for the member cover and put $\bar N=\sum_\alpha\rho_\alpha(\pi|_{U_\alpha})_*N_\alpha$, extending each summand by zero outside $Q_\alpha$. Each summand is smooth because its support lies in $Q_\alpha$; the sum is locally finite. At every point the nonzero summands are positive multiples of vectors in the same future timelike component by step 4.1 and at least one coefficient is positive since the coefficients sum to one. Cone convexity makes $\bar N$ smooth, nowhere zero and future timelike. Every member map therefore preserves time orientation in the sense of preserving future cones. The metric and matter fields are the descended fields of step 4.1; the particular representative $\bar N$ is not claimed unique. [step 4.1, step 6.1, L10, construct]

8.1 (Clause (d): the Cauchy property, at least one meeting.) Let $\gamma:\bar I\to Q$ be a causal curve inextendible in $Q$ and pick $t_0\in\bar I$ with $\gamma(t_0)\in Q_\alpha$. Let $J$ be the connected component of $\gamma^{-1}[Q_\alpha]$ containing $t_0$. By [L4] the restriction $\gamma|_J$ is inextendible in the open set $Q_\alpha$, so its pullback under the diffeomorphism $\pi|_{U_\alpha}$ is a causal curve in $U_\alpha$ inextendible in $U_\alpha$; by [L4] it meets $j_0(\Sigma)$ in exactly one parameter value, so $\gamma$ meets $\bar j(\Sigma)$. [step 7.1, L4, algebra]

8.2 (Compatible side decomposition.) In each member write $U_\alpha=I^-_\alpha(j_0\Sigma)\sqcup j_0\Sigma\sqcup I^+_\alpha(j_0\Sigma)$ as in [L4]. For $x\in U_{\alpha\beta}$ the side computed in $U_{\alpha\beta}$ is the same as in $U_\alpha$: a timelike curve inside the subdevelopment gives membership in the corresponding ambient side, and these sides are disjoint. The isometry $\varphi_{\alpha\beta}$ identifies these subdevelopment sides with those in its image in $U_\beta$, so the side in $U_\beta$ is identical. It follows that $Q^-:=\bigcup_\alpha\pi(I^-_\alpha(j_0\Sigma))$ and $Q^+:=\bigcup_\alpha\pi(I^+_\alpha(j_0\Sigma))$ are disjoint open sets and $Q=Q^-\sqcup S\sqcup Q^+$. In particular $S$ is closed. A future causal segment in a member that starts on its Cauchy surface lies, immediately afterwards, in its future side, and one ending on the surface lies immediately beforehand in its past side: extend the segment to an inextendible causal curve in that member; the unique Cauchy meeting and the disjoint side decomposition give the stated sides. More explicitly, any future-side point before the meeting would yield a timelike curve from the surface followed by a causal segment back to it, contrary to acausality; the past-side case after the meeting is its time reverse, using the push-up rule underlying the member side decomposition. [step 7.1, L2, L4, algebra]

9.1 (At most one Cauchy meeting.) Suppose a future causal curve $\gamma$ has two parameter values on $S$. In a member neighborhood of any meeting it can meet $S$ at most once, since $S$ is the member's acausal Cauchy surface. Thus its meeting parameters form a relatively closed locally discrete subset; on the compact interval between the proposed two meetings it is finite, and we may choose consecutive meetings $t_1<t_2$. The connected image $\gamma((t_1,t_2))$ misses $S$, so by step 8.2 it lies wholly in either $Q^-$ or $Q^+$. Near $t_1$ it lies in a member containing $\gamma(t_1)$, and the member side observation of step 8.2 puts it in $Q^+$. Near $t_2$ the same observation puts it in $Q^-$. This contradicts the disjointness of these sides. A past causal curve is treated by reversing its parameter. Together with step 8.1, every inextendible causal curve meets $S$ exactly once; all development conditions, including second countability, hold. [step 8.1, step 8.2, contradiction, algebra]

10.1 (Universality.) For an arbitrary development $M$, use its canonical representative $D:=\Sigma\times\mathbb R\in\mathcal X$ and diffeomorphism $\chi:D\to M$ from step 1.2. The map $(\pi|_D)\circ\chi^{-1}:M\to Q$ is a diffeomorphism onto an open subset, an isometry preserving future cones and matter fields, and takes $j$ to $\bar j$. Hence it is a data-fixing development embedding, proving (e). [step 1.2, step 7.1, step 9.1, algebra]

11.1 (Conclusion.) Steps 1.1 and 1.2 establish (a), step 2.1 establishes (b), step 3.1 establishes (c), steps 4.1-9.1 establish (d), and step 10.1 establishes (e). [step 1.1, step 2.1, step 3.1, step 7.1, step 9.1, step 10.1] ∎

## Remarks

The dense-set and translated-ball arguments are supplied locally here before selecting the global time-orientation field, so no second-countability or partition-of-unity circularity is hidden. The separate dense-set and second-countability lemmas retain explicit reusable constructions. The choice of future cones, unlike their auxiliary smooth representative, is forced by the members. The quotient construction uses neither Zorn's lemma nor a selection of isometry-class representatives.

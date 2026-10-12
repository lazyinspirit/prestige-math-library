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
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-maximal-common-development, lem-gr-no-corresponding-boundary-points, lem-gr-development-pair-gluing, lem-gr-intersection-of-developments, lem-gr-subdevelopment-convexity, lem-gr-portion-inextendibility, lem-gr-data-fixing-immersion-is-embedding, lem-gr-maximal-geodesics-and-extension, lem-gr-cauchy-set-topology-and-graph, thm-gr-cauchy-surface-implies-globally-hyperbolic, thm-gr-smooth-cauchy-temporal-splitting, thm-gr-local-geodesics-and-exponential-map, def-quotient-topology, def-smooth-manifold, def-second-countable-space, def-topological-space, def-c-r-and-smooth-maps-between-smooth-manifolds, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-power-set, def-axiom-schema-of-separation, def-countable-choice, def-dependent-choice, def-continuity-real, def-interval]
dependency_roles:
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
$\Sigma$ with smooth Riemannian metric $h$, smooth symmetric tensor $K$, a
matter sector with initial data $\psi_0$, and constants $\Lambda,\kappa$.
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

**(d) Structure.** $Q$ is Hausdorff and locally Euclidean and carries a
unique smooth atlas (unique in the sense of maximal atlases compatible with
the charts below) making all maps $\pi|_{U_\alpha}$ diffeomorphisms onto open
subsets, together with a smooth Lorentzian metric $\bar g$, a time orientation
$\bar N$ and matter fields $\bar\psi$ such that every $\pi|_{U_\alpha}$ is an
isometry onto its image preserving time orientation and matter fields, and
such that $\bar j:=\pi|_{U_\alpha}\circ j_0$ (independent of $\alpha$) is a
common embedding of $\Sigma$ with induced data $(h,K,\psi_0)$. The field
equations hold on $Q$, and every causal curve in $Q$ that is inextendible in
$Q$ meets $\bar j(\Sigma)$ in exactly one parameter value. Hence
$(Q,\bar g,\bar N,\bar j,\bar\psi)$ satisfies every clause of
[[def-gr-development-and-data-fixing-isometry]] clause (a) except possibly
the second countability of the underlying manifold; if $Q$ is second
countable then it is a development of the data.

**(e) Universality.** Every development $(M,g,N,j,\psi)$ of the same data
admits a data-fixing development embedding into $Q$ in the sense of
[[def-gr-development-and-data-fixing-isometry]] clause (c).

## Facts & Assumptions

**Given:** the fixed data, the family $\mathcal X$, the disjoint union $Z$, the generated relation $\sim$ and the quotient $Q$.

[L1] Set-sized specification: a member of $\mathcal X$ is a tuple $(U,g,N,\psi)$ with $U\subseteq Z_0$, $g\subseteq T^*Z_0\otimes T^*Z_0$, $N\subseteq TZ_0$ and each matter field a subset of the corresponding tensor bundle over $Z_0$; these are subsets of fixed sets, so membership in $\mathcal X$ is separation over a product of power sets ([[def-power-set]], [[def-axiom-schema-of-separation]]).

[L2] Maximal common developments and pair gluing: for any two members $\alpha,\beta\in\mathcal X$ their maximal common development $(U_{\alpha\beta},\varphi_{\alpha\beta})$ exists, is a common subdevelopment realised inside $U_\alpha$, and contains the image of $\Sigma$; the pair quotient $Q_{\alpha\beta}:=(U_\alpha\sqcup U_\beta)/{\sim_{\alpha\beta}}$ of [[lem-gr-development-pair-gluing]] is a development of the data which is Hausdorff, second countable and smooth, in which $U_\alpha$ and $U_\beta$ embed by data-fixing development embeddings; the maximality property of [[lem-gr-maximal-common-development]] clause (b) applies to every common subdevelopment ([[lem-gr-maximal-common-development]], [[lem-gr-development-pair-gluing]] clauses (a)-(c)).

[L3] Transitivity of the pairwise identifications: for $\alpha,\beta,\gamma\in\mathcal X$ put $V:=\varphi_{\alpha\beta}^{-1}(U_{\beta\gamma})\subseteq U_{\alpha\beta}\subseteq U_\alpha$. Then $V$ is open and contains $j_0(\Sigma)$, and it carries a development structure of the same data: indeed $\varphi_{\alpha\beta}$ maps $V$ diffeomorphically onto $U_{\beta\gamma}\cap\varphi_{\alpha\beta}(U_{\alpha\beta})$, the intersection of two developments of the same data sharing the initial Cauchy surface, which is a development by [[lem-gr-intersection-of-developments]], and the development structure is transported by the data-fixing isometry $\varphi_{\alpha\beta}$ ([[def-gr-development-and-data-fixing-isometry]] clause (a), [[def-gr-common-subdevelopment-and-corresponding-boundary]]); consequently $\chi:=\varphi_{\beta\gamma}\circ\varphi_{\alpha\beta}|_V$ is a data-fixing isometric immersion of the development $V$ into $U_\gamma$, hence a data-fixing development embedding ([[lem-gr-data-fixing-immersion-is-embedding]] clauses (b)-(c)), so $(V,\chi)$ is a common subdevelopment of $\alpha,\gamma$ and therefore $V\subseteq U_{\alpha\gamma}$ and $\varphi_{\alpha\gamma}|_V=\chi$ ([[lem-gr-maximal-common-development]] clause (b)).

[L4] Cauchy structure of the members and of $Q_0:=Q$: each $U_\alpha$ is a development of the data, hence globally hyperbolic with Cauchy surface $j_0(\Sigma)$; $\Sigma$ is acausal in each member and the side decomposition holds; a maximal connected portion of a curve that is inextendible in an ambient open set and enters an open subset is inextendible there; every closed causal segment lies on an inextendible causal curve of the ambient manifold ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]], [[def-gr-development-and-data-fixing-isometry]] clause (a)5, [[lem-gr-cauchy-set-topology-and-graph]] clause (a), [[lem-gr-maximal-geodesics-and-extension]] clauses (c)-(d), [[lem-gr-portion-inextendibility]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]).

[L5] Quotient topology: openness, continuity and the homeomorphism criterion for injective open maps ([[def-quotient-topology]], [[def-topological-space]], [[def-continuity-real]]).

[L6] Temporal flow representation: every globally hyperbolic member is representable over $\Sigma\times\mathbb R$: with $T$ and $X:=\nabla T/g(\nabla T,\nabla T)$ of [[thm-gr-smooth-cauchy-temporal-splitting]], the flow of $X$ is global and $T$ increases at unit rate along it (clauses (a),(d),(e)), so $T\circ\Phi(t,x)=T(x)+t$; and an integral curve of $X$ cannot converge at an end because $T$ is continuous there while tending to $\pm\infty$ ([[def-continuity-real]]).

[L7] Intersection of developments: if two developments of the data share the initial Cauchy surface, their intersection carries a development structure of the data on which both embedding maps restrict to data-fixing development embeddings ([[lem-gr-intersection-of-developments]] clauses (a)-(c)); applied successively this yields the same for a finite intersection of subdevelopments of a common member.

The two declared choice axioms are used for the countable atlas selections of the pair/general gluing and for the specification of the sets in (a); no further choice is used.

## Proof

**Proof technique:** direct.

1.1 (Clause (a).) Each member is determined by four subsets of fixed sets as in [L1], so separation makes $\mathcal X$ a set; it is nonempty whenever some development of the data exists, by transporting that development through the flow representation [L6] (this transport is carried out in the proof of clause (e) below and uses no new hypothesis). [L1, L6, algebra]

2.1 (Clause (e).) Let $(M,g,N,j,\psi)$ be a development of the data; by [L4] it is globally hyperbolic with Cauchy surface $j(\Sigma)$. Let $T$ and $X$ be as in [L6] and $\Phi$ the global flow of $X$. For $x\in j(\Sigma)$ and $t\in\mathbb R$ the curve $s\mapsto\Phi(s,x)$ is a complete timelike integral curve; it cannot converge at any end, since $T(\Phi(t,x))=T(x)+t$ tends to $\pm\infty$ while a limit point would have finite $T$ by continuity ([L6]). Hence it is an inextendible timelike curve and meets the Cauchy surface $j(\Sigma)$ in exactly one parameter value; since it contains $x=\Phi(0,x)$, that value is $0$. Therefore $$\chi:\ D\longrightarrow M,\qquad D:=\{(x,t)\in j(\Sigma)\times\mathbb R:\ \Phi(s,x)\text{ defined for all }s\text{ between }0\text{ and }t\},\qquad \chi(x,t):=\Phi(t,x),$$ is bijective, with $D$ an open neighbourhood of $j(\Sigma)\times\{0\}$ (the flow domain is open), and smooth; it is a diffeomorphism because it is a smooth bijection whose differential is invertible: in the representation $M\cong\mathbb R\times T^{-1}(0)$ of [L6] clause (e), $\chi$ corresponds to $(c,z,t)\mapsto(c+t,z)$, a shear. Pulling back $g,N,\psi$ along $\chi$ and identifying $j(\Sigma)\cong\Sigma$ gives a tuple $(D,\chi^*g,\chi^*N,\chi^*\psi)\in\mathcal X$, and $\chi^{-1}:M\to D\subseteq Q$ is a data-fixing isometry onto its image; it is a diffeomorphism onto an open subset of the member $D$ and satisfies $\chi^{-1}\circ j=j_0$, so it is a data-fixing development embedding of $M$ into $Q$. This proves (e). [step 1.1, L6, L4, algebra]

2.2 (Clause (b): transitivity of the pairwise identifications.) Let $p\in U_\alpha$, $q\in U_\beta$, $r\in U_\gamma$ with $p\sim q$ via $\varphi_{\alpha\beta}$ and $q\sim r$ via $\varphi_{\beta\gamma}$. Then $p\in U_{\alpha\beta}$ and $q=\varphi_{\alpha\beta}(p)\in U_{\beta\gamma}$, so $p\in V=\varphi_{\alpha\beta}^{-1}(U_{\beta\gamma})$, and by [L3] the pair $(V,\chi)$ is a common subdevelopment of $\alpha$ and $\gamma$ mapping $p$ to $\chi(p)=\varphi_{\beta\gamma}(\varphi_{\alpha\beta}(p))=r$. By the maximality property of the maximal common development of $\alpha$ and $\gamma$, $V\subseteq U_{\alpha\gamma}$ and $\varphi_{\alpha\gamma}(p)=\chi(p)=r$. Hence the identification of $p$ with $r$ holds at chain length two, and by induction at every finite chain length; the converse inclusion is the definition of the generating relations. This proves (b). [step 1.1, L3, algebra]

3.1 (Clause (c): the member maps and Hausdorffness.) By [L5] the map $\pi|_{U_\alpha}$ is continuous; it is injective because two points of $U_\alpha$ with the same class are identified by a chain which, by step 2.2, reduces to a single pairwise identification inside $U_\alpha$, and these identifications have the identity as their first coordinate ([[def-gr-common-subdevelopment-and-corresponding-boundary]]: a common subdevelopment is realised inside its first member, and the map is injective by [[lem-gr-data-fixing-immersion-is-embedding]]). Openness: the saturation of an open $A\subseteq U_\alpha$ is the union over $\gamma\in\mathcal X$ of $\{x\in U_\gamma:\ x\sim a\text{ for some }a\in A\}$, which by step 2.2 equals $$\bigcup_{\gamma\in\mathcal X}\varphi_{\alpha\gamma}^{-1}\bigl(A\cap U_{\alpha\gamma}\bigr),$$ a union of open sets, because each $\varphi_{\alpha\gamma}$ is a diffeomorphism onto the open set $\varphi_{\alpha\gamma}(U_{\alpha\gamma})$ and $A\cap U_{\alpha\gamma}$ is open. Hence each $\pi|_{U_\alpha}$ is a homeomorphism onto the open set $Q_\alpha$, and the $Q_\alpha$ cover $Q$ because every class has a representative. For Hausdorffness let $[p]\ne[q]$ with $p\in U_\alpha$, $q\in U_\beta$. Consider the pair quotient $Q_{\alpha\beta}$ of [L2] with its canonical map $\kappa:Q_{\alpha\beta}\to Q$; by step 2.2 the classes of $p$ and $q$ are distinct in $Q_{\alpha\beta}$ (otherwise they would be identified by a chain, hence by the single pairwise identification), and $Q_{\alpha\beta}$ is Hausdorff, so there are disjoint open $O_p\ni[p]$, $O_q\ni[q]$ in $Q_{\alpha\beta}$. The map $\kappa$ is injective (step 2.2), continuous and open (the saturation argument above applies to the two-member family), hence a homeomorphism onto its open image; thus $\kappa(O_p),\kappa(O_q)$ are disjoint open neighbourhoods of $[p],[q]$ in $Q$. This proves (c). [step 2.2, L2, L5, algebra]

4.1 (Clause (d): smooth structure and fields.) The charts of the members composed with the inverses of the homeomorphisms $\pi|_{U_\alpha}$ provide an atlas on $Q$; transition functions between charts of the same member are smooth, and between charts of $\alpha$ and $\beta$ on the common part $Q_\alpha\cap Q_\beta=\pi(U_{\alpha\beta})$ (step 2.2) they are of the form $\phi_\beta\circ\varphi_{\alpha\beta}\circ\phi_\alpha^{-1}$, which is smooth because $\varphi_{\alpha\beta}$ is a diffeomorphism onto its image ([L2]). This yields a smooth atlas in which all $\pi|_{U_\alpha}$ are diffeomorphisms onto open subsets, unique as a maximal atlas with this property. Whether $Q$ is second countable is a separate question, not decided here. The metric, time orientation and matter fields descend by pushforward along the $\pi|_{U_\alpha}$: the prescriptions for $\alpha$ and $\beta$ agree on the overlap because $\varphi_{\alpha\beta}$ is a data-fixing isometry ([L2]), and smoothness, Lorentzian signature and time orientation are local; the field equations are local and hold in each member, hence on $Q$; and $\bar j=\pi|_{U_\alpha}\circ j_0$ is well defined (the classes of $j_0(\Sigma)$ coincide by [L2]) and is an embedding with the induced data, since each $\pi|_{U_\alpha}$ is a data-fixing isometry. This proves the first part of (d). [step 3.1, L2, def. smooth manifold, algebra]

5.1 (Clause (d): the Cauchy property, at least one meeting.) Let $\gamma:\bar I\to Q$ be a causal curve inextendible in $Q$ and pick $t_0\in\bar I$ with $\gamma(t_0)\in Q_\alpha$. Let $J$ be the connected component of $\gamma^{-1}[Q_\alpha]$ containing $t_0$. By [L4] the restriction $\gamma|_J$ is inextendible in the open set $Q_\alpha$, so its pullback under the diffeomorphism $\pi|_{U_\alpha}$ is a causal curve in $U_\alpha$ inextendible in $U_\alpha$; by [L4] it meets $j_0(\Sigma)$ in exactly one parameter value, so $\gamma$ meets $\bar j(\Sigma)$. [step 4.1, L4, algebra]

6.1 (Clause (d): at most one meeting.) Suppose $\gamma(t_1),\gamma(t_2)\in\bar j(\Sigma)$ with $t_1<t_2$; taking $t_1,t_2$ consecutive among the meetings of $\gamma$ with $\bar j(\Sigma)$: the set of meeting parameters is closed, and it is discrete, because near a meeting point the spacelike hypersurface $\bar j(\Sigma)$ is the zero set of a function with timelike gradient ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]), so the derivative of that function along the causal curve has a constant nonzero sign almost everywhere near the meeting and the composed function is strictly monotone there, giving at most one meeting in a small parameter interval; a closed discrete set ordered in $\mathbb R$ with two elements has consecutive elements, we may assume $\gamma(t)\notin\bar j(\Sigma)$ for $t_1<t<t_2$. The image $\gamma([t_1,t_2])$ is compact and covered by the open sets $Q_\alpha$, so finitely many members $\alpha_1,\dots,\alpha_n$ cover it. If $\gamma([t_1,t_2])\subseteq Q_{\alpha_1}$, the segment lifts to a causal curve in $U_{\alpha_1}$ whose values at $t_1,t_2$ lie on $j_0(\Sigma)$; by [L4] it lies on an inextendible causal curve of $U_{\alpha_1}$, which would meet the Cauchy surface $j_0(\Sigma)$ in two parameter values, a contradiction. Otherwise set $R:=\bigcap_{i=1}^nU_{\alpha_1\alpha_i}$, an open neighbourhood of $j_0(\Sigma)$ in $U_{\alpha_1}$ which is a development of the data by the intersection lemma [[lem-gr-intersection-of-developments]] applied successively to the subdevelopments $U_{\alpha_1\alpha_i}$ of $U_{\alpha_1}$; by step 2.2, $\bigcap_{i=1}^nQ_{\alpha_i}=\pi(R)$. Now $\gamma(t_1),\gamma(t_2)\in\bar j(\Sigma)\subseteq\pi(R)$. If $\gamma([t_1,t_2])\subseteq\pi(R)$, the segment lifts to a causal curve in the development $R$ with two parameter values on its Cauchy surface, a contradiction. Otherwise choose a connected component $J^*$ of $\gamma^{-1}[\pi(R)]$ with $J^*\subsetneq[t_1,t_2]$, which exists because the preimage is open, contains both endpoints and is not everything. At each end of $J^*$ the curve immediately leaves $\pi(R)$ (maximality of the component), so $\gamma|_{J^*}$ does not converge to any point of the open manifold $\pi(R)$ at either end: it is inextendible in $\pi(R)\cong R$. By the Cauchy property of the development $R$ ([L4]) it meets $\bar j(\Sigma)$ at some parameter $s_0\in J^*\subseteq(t_1,t_2)$, contradicting the consecutiveness of $t_1,t_2$. Hence there is exactly one meeting. [step 5.1, L2, L4, L7, contradiction, algebra]

7.1 (Summary.) The preceding steps prove (a)-(e). [step 2.1, algebra] ∎

## Remarks

This is the existence half of Sbierski's Theorem 2.8 in its set-theoretic form: the family of all canonical developments is a set, the identifications along pairwise maximal common developments are transitive by the maximality property of the common development, the pair-gluing lemma supplies Hausdorffness and the local structure, and every development is absorbed through the global flow representation of the temporal splitting theorem. The product of this construction is the universal development up to the single manifold axiom that this route does not deliver: the second countability of the total quotient, which is established separately by the explicit dense-set argument. No isometry class of developments is formed and no Zorn's lemma is used.

---
id: lem-gr-no-corresponding-boundary-points
kind: lemma
title: "A maximal common development has no corresponding boundary points: the spacelike restart produces a strictly larger common development"
status: published
origin: session
domain: mathematics
dependency_level: 35
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-dust-local-evolution, thm-gr-scalar-field-local-evolution, thm-gr-barotropic-fluid-local-evolution, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-corresponding-boundary-structure, lem-gr-corresponding-set-smooth-extension, lem-gr-boundary-null-geodesic-segment, lem-gr-exposed-boundary-point, lem-gr-spacelike-restart-hypersurface, lem-gr-data-fixing-immersion-is-embedding, lem-gr-isometric-immersion-rigidity, lem-gr-maximal-common-development, thm-gr-local-geometric-development, lem-gr-local-cauchy-neighborhood, lem-gr-portion-inextendibility, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-push-up-rule, lem-gr-chronology-openness, thm-gr-convex-normal-neighborhoods, thm-gr-local-geodesics-and-exponential-map, thm-gr-auxiliary-complete-riemannian-metric, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-continuity-real, def-countable-choice, def-dependent-choice, lem-gr-past-corresponding-boundary-restart]
dependency_roles:
  thm-gr-dust-local-evolution: mathematical-premise
  thm-gr-scalar-field-local-evolution: mathematical-premise
  thm-gr-barotropic-fluid-local-evolution: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-corresponding-boundary-structure: mathematical-premise
  lem-gr-corresponding-set-smooth-extension: mathematical-premise
  lem-gr-boundary-null-geodesic-segment: mathematical-premise
  lem-gr-exposed-boundary-point: mathematical-premise
  lem-gr-spacelike-restart-hypersurface: mathematical-premise
  lem-gr-data-fixing-immersion-is-embedding: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  lem-gr-maximal-common-development: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  lem-gr-local-cauchy-neighborhood: mathematical-premise
  lem-gr-portion-inextendibility: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-continuity-real: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  lem-gr-past-corresponding-boundary-restart: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Theorem 3.6 with full proof and Theorem 3.13, printed pp. 15 and 18-20"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "Y. Choquet-Bruhat and R. Geroch, Global aspects of the Cauchy problem in general relativity, Communications in Mathematical Physics 14 (1969), 329-335: the spacelike-slice argument for Hausdorffness of the glued development"
      url: "https://doi.org/10.1007/BF01645389"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: domains of dependence and causal convexity, Corollary 3.36 and Propositions 3.42-3.43 printed pp. 84-99"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let
$(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same data,
let $(U,\varphi)$ be a common subdevelopment
([[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a)),
write $\Sigma:=j(\Sigma)$, and let $C\subseteq\partial U$ be the set of
boundary points with a corresponding boundary point. Assume that $(U,\varphi)$
is maximal among the common subdevelopments of $M$ and $M'$ in the following
sense: for every common subdevelopment $(V,\chi)$ of $M$ and $M'$ one has
$V\subseteq U$ and $\chi=\varphi$ on $V$ (this is the maximality property of
the maximal common development, [[lem-gr-maximal-common-development]] clause
(b)). Then $C=\varnothing$.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the two developments, the maximal common subdevelopment $(U,\varphi)$, and the corresponding set $C$.

[L1] Future and past restart geometry in the original orientation. If $C\cap J^+(\Sigma)\ne\varnothing$, [[lem-gr-boundary-null-geodesic-segment]] supplies an exposed future point, and [[lem-gr-spacelike-restart-hypersurface]] supplies a normal neighborhood, precompact diamond $W$, a whole spacelike surface $S\subseteq U\cup C$ meeting $\partial U$, and radial tubes with clauses (c)1-4. If $C\cap J^-(\Sigma)\ne\varnothing$, [[lem-gr-past-corresponding-boundary-restart]] supplies the corresponding past exposure and complement localization in clause (a), the whole surface in (b), and the same thin-tube, original-Cauchy and overlap conclusions in (c)1-4. Its radial time increases toward the original future, whereas the future-side construction uses a past radial flow. Both constructions keep the original $N,N\prime$, metric, initial normal convention and matter fields fixed.

[L2] Data transfer: $\Phi$ is defined and smooth on a neighbourhood of $U\cup C$, and for the spacelike hypersurface $S\subseteq U\cup C$ the restriction $\Phi|_S$ is an embedding onto its image identifying the induced metric, the second fundamental form and the matter fields with their covariant derivatives of every finite order; in particular $\Phi|_S$ identifies the complete Cauchy data $(\bar g_S,k_S,\psi_S)$ of $S$ realized in $M$ with the corresponding data of $\Phi(S)$ in $M'$ ([[lem-gr-corresponding-set-smooth-extension]] clause (e)).

[L3] Local complete-data geometric uniqueness is required for the fixed admissible coupled model at the actual restart data, as specified in [[def-gr-development-and-data-fixing-isometry]]. Use [[thm-gr-local-geometric-development]] when its full initialization, hyperbolicity, compatibility recovery and stress-conservation hypotheses hold on this spacelike surface. Scalar and strict-fluid instances are [[thm-gr-scalar-field-local-evolution]], [[thm-gr-barotropic-fluid-local-evolution]]. Geodesic nonnegative tilted dust instead uses [[thm-gr-dust-local-evolution]] with its independent common-flow/frame reduction, including its separately prescribed velocity on zero density. Complete data, including all required matter jets, agree by [L2]; the comparison isometry matches every matter field. An arbitrary conserved stress is not a fixed-model uniqueness premise.

[L4] The restart supplier makes $S$ a smooth embedded spacelike hypersurface without boundary. The intrinsic neighborhood theorem [[lem-gr-local-cauchy-neighborhood]] clause (d), applied separately to the embeddings $S\hookrightarrow M$ and $\Phi(S)\hookrightarrow M'$, supplies open neighborhoods on which the whole respective surface is Cauchy and which are globally hyperbolic. With the restricted solution fields these are developments of the complete data on $S$. Neither surface needs to be globally acausal in the original ambient manifold; the neighborhoods are intrinsic.

[L5] Embedding theorem: a data-fixing isometric immersion of one development into another is injective and hence a development embedding; its image is open and it is a diffeomorphism onto it ([[lem-gr-data-fixing-immersion-is-embedding]], [[lem-gr-isometric-immersion-rigidity]] clause (a)).

[L6] Every causal curve inextendible in $U\cup N$ meets the original $\Sigma$ once for a tube of [[lem-gr-spacelike-restart-hypersurface]] clause (c), or of [[lem-gr-past-corresponding-boundary-restart]] clause (c) in the past-side case. In either case clause (c)4 supplies a smooth quantitatively thin tube inside any specified open neighborhood of the whole $S$ and below any specified positive continuous ceiling, with the explicit derivative bound required for conclusions (c)1-3. Thus $U\cup N$ is a development by the local field equations and that Cauchy conclusion.

No choice principle beyond the two declared axioms is used in this item.

## Proof

**Proof technique:** direct; by contradiction.

1.1 (Both boundary sides in the fixed model.) Suppose $C\ne\varnothing$. Since $\Sigma\subset U$ and the original Cauchy side decomposition exhausts $M$, every point of $C$ lies strictly to the original future or past of $\Sigma$. If $C\cap J^+(\Sigma)\ne\varnothing$, take the future exposure and restart configuration of [L1]. Otherwise $C\cap J^-(\Sigma)\ne\varnothing$, and take the complete past-side exposure, complement localization, spacelike surface and quantitatively thin tubes supplied by [L1]. In both cases $S\subseteq U\cup C$, $S\cap\partial U\ne\varnothing$, and the tube conclusions preserve the original $\Sigma$ Cauchy property and original-oriented overlap comparison. No development, normal or matter datum is time-reversed. [given, L1, algebra]

2.1 (Local uniqueness on the whole restart surface.) The complete data of $S$ realized in $M$ and in $M'$ via $\Phi|_S$ agree by [L2]. Apply [L4] to obtain intrinsic Cauchy neighborhoods of each surface, carrying the restricted metric and full matter solution. The applicable fixed-model theorem [L3] gives an open neighborhood $O$ of the whole $S$ in the source and a future isometry $\Theta:O\to M'$ matching all matter fields, with $\Theta|_S=\Phi|_S$. Replace $O$ by $O\cap N$. This construction uses the actual branch uniqueness theorem and its admissibility at the realized restart data. [step 1.1, L2, L3, L4, algebra]

3.1 (A smooth admissible thinner tube.) Apply the applicable restart clause (c)4 with the prescribed open neighborhood $O\subseteq N\subseteq W$ of $S$ and width ceiling $\delta/2$. It gives a smooth positive width $\delta_0\le\delta/2$ with $|d\delta_0|_{q_0}\le1/(8\sqrt2)$ and $N_0=F(\{(s,t):|t|<\delta_0(s)\})\subseteq O$. The comparison metric bounds and the signed-face endpoint argument therefore retain restart conclusions (c)1-3. No scaling of an arbitrary continuous width is used. [step 2.1, L1, L6, construct]

4.1 (Agreement on the actual overlap.) The future local isometry $\Theta$ is defined on $N_0$, equals $\Phi$ on $S$, and matches the matter fields there and on $N_0$ by step 2.1. The applicable restart clause (c)3 now gives $\Theta=\varphi$ on $N_0\cap U$: the punctured radial segment lies in $U$, and its limiting value and velocity at its possibly boundary base agree through $\Phi$. Connection transport and uniqueness of the two image geodesics prove that comparison, without requiring the base to lie in $U$. [step 2.1, step 3.1, L1, L2, L5, algebra]

5.1 (The patched map.) Define $\Psi:U\cup N_0\to M'$ by $\Psi:=\varphi$ on $U$ and $\Psi:=\Theta$ on $N_0$. This is well defined by step 4.1 and smooth and is a data-fixing isometric immersion preserving the time orientation and the matter fields, because these are local properties and hold for $\varphi$ on $U$ and for $\Theta$ on $N_0$ ([[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c), [[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a)). [step 4.1, algebra]

6.1 ($U\cup N_0$ is a development.) By [L6] every causal curve in $U\cup N_0$ that is inextendible in $U\cup N_0$ meets $\Sigma$ in exactly one parameter value; $U\cup N_0\subseteq M$ is open with the restricted metric, time orientation and matter fields, the field equations hold (they are local and hold on $M$), and $j:\Sigma\to U\cup N_0$ is an embedding with the induced data $(h,K,\psi_0)$. Hence $U\cup N_0$ is a development of the same data ([[def-gr-development-and-data-fixing-isometry]] clause (a)); in particular it is globally hyperbolic with Cauchy surface $\Sigma$ by [[thm-gr-cauchy-surface-implies-globally-hyperbolic]]. [step 5.1, L6, algebra]

7.1 ($\Psi$ is a development embedding.) By step 5.1, $\Psi$ is a data-fixing isometric immersion of the development $U\cup N_0$ into $M'$; hence it is injective and a diffeomorphism onto the open set $\Psi(U\cup N_0)$ by [L5]. [step 6.1, L5, algebra]

8.1 (Strictly larger.) Pick $x\in S\cap\partial U$ (nonempty by the applicable surface clause (b) in [L1]). Then $x\in S\subseteq N_0$ and $x\notin U$, so $N_0\not\subseteq U$ and $U\subsetneq U\cup N_0$. Thus $(U\cup N_0,\Psi)$ is a common subdevelopment of $M$ and $M'$ strictly larger than $(U,\varphi)$, contradicting the maximality of $(U,\varphi)$ assumed in the statement. [step 7.1, algebra, contradiction]

9.1 (Conclusion.) Therefore the assumption $C\ne\varnothing$ is false: $C=\varnothing$. [step 1.1, step 8.1, discharge-contradiction] ∎

## Remarks

This is Theorems 3.6 and 3.13 of Sbierski's paper. The two corrections recorded in [[lem-gr-corresponding-set-smooth-extension]] (no isometry claim for the normal-coordinate formula outside $\overline U$, and the connection compatibility replacing it) enter through the data transfer [L2] and through the geodesy of the extension used in [[lem-gr-boundary-null-geodesic-segment]]. The patching step 4.1 is the place where the source writes "the same continuity argument as in the proof of Lemma 3.1, applied to $N\cap U$": it is made precise here through the limiting first jet at the base point $s\in S$ of the radial segment, using clause (c)3 of [[lem-gr-spacelike-restart-hypersurface]] instead of a density argument. Step 1.1 treats the two sides separately. The full past-side geometric construction is [[lem-gr-past-corresponding-boundary-restart]], with future radial flow and its signed future-endpoint argument. The local uniqueness invocation in step 2.1 uses the actual complete data on $S$ with the original future unit normal in both branches. Neither $N$, the initial $K$, nor any scalar, fluid, dust or additional model field is reversed; no invariance of a fixed model under time reversal is assumed.

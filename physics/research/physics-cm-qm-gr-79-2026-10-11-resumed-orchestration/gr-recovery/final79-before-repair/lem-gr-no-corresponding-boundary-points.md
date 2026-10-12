---
id: lem-gr-no-corresponding-boundary-points
kind: lemma
title: "A maximal common development has no corresponding boundary points: the spacelike restart produces a strictly larger common development"
status: draft
origin: session
domain: mathematics
dependency_level: 33
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-corresponding-boundary-structure, lem-gr-corresponding-set-smooth-extension, lem-gr-boundary-null-geodesic-segment, lem-gr-exposed-boundary-point, lem-gr-spacelike-restart-hypersurface, lem-gr-partial-cauchy-development, lem-gr-data-fixing-immersion-is-embedding, lem-gr-isometric-immersion-rigidity, lem-gr-maximal-common-development, thm-gr-local-geometric-development, lem-gr-local-cauchy-neighborhood, lem-gr-portion-inextendibility, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-push-up-rule, lem-gr-chronology-openness, thm-gr-convex-normal-neighborhoods, thm-gr-local-geodesics-and-exponential-map, thm-gr-auxiliary-complete-riemannian-metric, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-continuity-real, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-corresponding-boundary-structure: mathematical-premise
  lem-gr-corresponding-set-smooth-extension: mathematical-premise
  lem-gr-boundary-null-geodesic-segment: mathematical-premise
  lem-gr-exposed-boundary-point: mathematical-premise
  lem-gr-spacelike-restart-hypersurface: mathematical-premise
  lem-gr-partial-cauchy-development: mathematical-premise
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

**Given:** the two developments, the maximal common subdevelopment $(U,\varphi)$, and the corresponding set $C$.

[L1] Exposed points and restart: if $C\cap J^+(\Sigma)\ne\varnothing$, then there is an exposed point $p\in C\cap J^+(\Sigma)$ with $J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}$ ([[lem-gr-boundary-null-geodesic-segment]]); and for such $p$ the constructions of [[lem-gr-spacelike-restart-hypersurface]] are available: a strictly convex normal neighbourhood $C_0$ of $p$ with $C_0\cap\partial U\subseteq C$, causally convex diamonds $W,\overline W\subseteq C_0$, a point $q\in W\cap I^+(p)$ with $J^-(q)\cap U^c\cap J^+(\Sigma)\subseteq W$, the level hypersurface $S$ with $S\subseteq(U\cap W)\cup(W\cap\partial U\cap C)$ and $S\cap\partial U\ne\varnothing$, and radial tubes $N$ over $S$ with the properties of that lemma, clauses (a)-(c).

[L2] Data transfer: $\Phi$ is defined and smooth on a neighbourhood of $U\cup C$, and for the spacelike hypersurface $S\subseteq U\cup C$ the restriction $\Phi|_S$ is an embedding onto its image identifying the induced metric, the second fundamental form and the matter fields with their first covariant derivatives; in particular $\Phi|_S$ identifies the complete Cauchy data $(\bar g_S,k_S,\psi_S)$ of $S$ realized in $M$ with the corresponding data of $\Phi(S)$ in $M'$ ([[lem-gr-corresponding-set-smooth-extension]] clause (e)).

[L3] Local geometric development and uniqueness: for the fixed covariant model and complete constrained data of the batch, any two developments are related near the entire initial surface by a data-fixing time-orientation-preserving isometry matching all matter fields ([[thm-gr-local-geometric-development]], last sentence; the hypotheses of that theorem are those of the data of the original development, applied to the data on the spacelike hypersurface $S$).

[L4] Domains of dependence: a closed, acausal, edgeless embedded spacelike hypersurface $S$ of an open Lorentzian four-manifold $W^\circ$ has an open, causally convex domain of dependence $D(S)$ on which $S$ is a Cauchy set; $D(S)$ is a development of the data $(\bar g_S,k_S,\psi_S)$ ([[lem-gr-partial-cauchy-development]] clauses (a)-(c), [[def-gr-development-and-data-fixing-isometry]] clause (a)). The hypersurface $S$ of [L1], viewed inside the open manifold $W^\circ=W\cap I^+(\Sigma)=W$ (recall $W\subseteq I^+(\Sigma)$), satisfies these hypotheses. It is closed in $W^\circ$: it is a component of $\{\tau_q=\tau_0\}\cap W^\circ$, a set closed in $W^\circ$. It is acausal: $\tau_q$ is continuous and strictly monotone along every causal curve contained in $W\cap\{\tau_q>0\}$ ([[lem-gr-spacelike-restart-hypersurface]] clause (c)1), and if a causal curve in $W^\circ$ from $x\in S$ left $\{\tau_q>0\}$ at a point $p$, then $p\le y\ll q$ for the endpoint $y\in S\subseteq I^-(q)$ of the subsegment from $p$ to $y$, so push-up would give $p\ll q$, that is $\tau_q(p)>0$, contradicting $\tau_q(p)=0$; hence the curve stays in $\{\tau_q>0\}$, where strict monotonicity forces $\tau_q(x)\ne\tau_q(y)$ unless $x=y$ and the curve is constant. It is edgeless: for $s\in S$ choose a chart at $s$ in which $\tau_q$ is the first coordinate (possible because $d\tau_q\ne0$), with connected level slice $\{x^1=0\}$; a causal curve from $x\in I^-(s)$ to $y\in I^+(s)$ inside that chart has $\tau_q(x)>\tau_q(s)>\tau_q(y)$ (strict monotonicity, as $x\ll s\ll q$ and $s\ll y\ll q$ give $\tau_q(x)>\tau_q(s)$ and $\tau_q(y)<\tau_q(s)$), so by continuity of $\tau_q$ it meets the level $\{\tau_q=\tau_0\}$, and every point of that slice in the chart lies in $S$ because the slice is connected and contains $s$; hence no such curve avoids $S$.

[L5] Embedding theorem: a data-fixing isometric immersion of one development into another is injective and hence a development embedding; its image is open and it is a diffeomorphism onto it ([[lem-gr-data-fixing-immersion-is-embedding]], [[lem-gr-isometric-immersion-rigidity]] clause (a)).

[L6] Causal convexity and Cauchy property: causal curves with endpoints in $U$ lie in $U$; a causal curve in $U\cup N$ that is inextendible in $U\cup N$ meets $\Sigma$ in exactly one parameter value, for every radial tube $N$ over $S$ whose width function is positive, Lipschitz-small with respect to the level metrics and vanishes toward the ends of $S$; this is the endpoint analysis establishing [[lem-gr-spacelike-restart-hypersurface]] clause (c)2, which applies to any such tube with the width function substituted. Hence $U\cup N$ is again a development of the same data (open submanifold of $M$ with the restricted metric and fields, the field equations being local and valid on $M$; [[def-gr-development-and-data-fixing-isometry]] clause (a)).

No choice principle beyond the two declared axioms is used in this item.

## Proof

**Proof technique:** direct; by contradiction.

1.1 (Reduction to $C\cap J^+(\Sigma)\ne\varnothing$; time reversal.) Suppose $C\ne\varnothing$; by time reversal of the two developments (which exchanges $j(\Sigma)$-future and past and preserves all hypotheses) we may assume $C\cap J^+(\Sigma)\ne\varnothing$. Then [L1] provides the exposed point $p$ and the whole restart configuration. [given, L1, algebra]

2.1 (The local uniqueness isometry.) By [L2] the complete Cauchy data of $S$ are realized in $M$ (by the inclusion $S\hookrightarrow M$) and in $M'$ (by $\Phi|_S$). By [L4] there is a development $D(S)\subseteq W^\circ$ of these data with Cauchy surface $S$; and applying clause (d) of [[lem-gr-local-cauchy-neighborhood]] to the smooth embedded spacelike hypersurface $\Phi(S)\subseteq M'$ (a smooth embedded spacelike hypersurface without boundary, [[lem-gr-corresponding-set-smooth-extension]] clause (e) and [[lem-gr-spacelike-restart-hypersurface]] clause (b)) gives a globally hyperbolic open neighbourhood $W_{\Phi(S)}$ of $\Phi(S)$ in $M'$ on which $\Phi(S)$ is Cauchy, hence a development of the same data with initial embedding $\Phi|_S$. The local geometric development theorem [L3] applied to these two developments yields an open neighbourhood $O\subseteq D(S)$ of $S$ and a data-fixing time-orientation-preserving isometry $\varphi:O\to M'$ onto an open subset of $W_{\Phi(S)}$ with $\varphi|_S=\Phi|_S$ and matching all matter fields. Replace $O$ by $O\cap N$ (still an open neighbourhood of $S$, as $S\subseteq N$). [step 1.1, L2, L3, L4, algebra]

3.1 (A radial sub-tube of $O$.) Choose a continuous positive width function $\delta_0\le\delta$ on $S$ such that $\delta_0$ is Lipschitz-small with respect to the level metrics, vanishes toward the ends of $S$, and $F(s,t)\in O$ for every $|t|<\delta_0(s)$: for instance $\delta_0:=\varepsilon\min(\delta,\rho,\operatorname{dist}_h(\cdot,M\setminus O))$ with $\rho$ as in [[lem-gr-spacelike-restart-hypersurface]] and $\varepsilon>0$ small. Put $N_0:=F(S\times(-\delta_0,\delta_0))$. Then $N_0\subseteq O\cap N$ is an open radial tube over $S$. [step 2.1, construct]

4.1 ($\psi=\varphi$ on $N_0\cap U$.) Let $y\in N_0\cap U$; write $y=F(s,t_y)$ with $s\in S$ and $|t_y|<\delta_0(s)$, and let $\gamma$ be the flow line through $s$ (a geodesic segment through $y$, [[lem-gr-spacelike-restart-hypersurface]] [L3]). By [[lem-gr-spacelike-restart-hypersurface]] clause (c)3 the radial segment from $s$ to $y$ (excluding $s$) is contained in $U$. Hence $\psi\circ\gamma$ is a geodesic of $M'$ on the parameter interval between $s$ and $y$ ([[lem-gr-isometric-immersion-rigidity]] clause (a)), and so is $\varphi\circ\gamma$ (as $\gamma\subseteq N_0\subseteq O$). At $s$ the two curves have the same limiting value and velocity: the value is $\Phi(s)=\varphi(s)$ (step 2.1) and the velocity is $d\varphi_s(\gamma'(s))=d\Phi_s(\gamma'(s))$, because $\varphi|_S=\Phi|_S$ gives equality on $T_sS$, and both differentials are isometries carrying the unit future normal of $S$ to the unit future normal of $\Phi(S)$ ([[lem-gr-corresponding-set-smooth-extension]] clause (e); [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]] for the uniqueness of the normal). By uniqueness of geodesics with given initial data ([[thm-gr-local-geodesics-and-exponential-map]]) the two geodesics coincide, so $\psi(y)=\varphi(y)$. [step 2.1, step 3.1, algebra]

5.1 (The patched map.) Define $\Psi:U\cup N_0\to M'$ by $\Psi:=\psi$ on $U$ and $\Psi:=\varphi$ on $N_0$. This is well defined by step 4.1 and smooth and is a data-fixing isometric immersion preserving the time orientation and the matter fields, because these are local properties and hold for $\psi$ on $U$ and for $\varphi$ on $N_0$ ([[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c), [[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a)). [step 4.1, algebra]

6.1 ($U\cup N_0$ is a development.) By [L6] every causal curve in $U\cup N_0$ that is inextendible in $U\cup N_0$ meets $\Sigma$ in exactly one parameter value; $U\cup N_0\subseteq M$ is open with the restricted metric, time orientation and matter fields, the field equations hold (they are local and hold on $M$), and $j:\Sigma\to U\cup N_0$ is an embedding with the induced data $(h,K,\psi_0)$. Hence $U\cup N_0$ is a development of the same data ([[def-gr-development-and-data-fixing-isometry]] clause (a)); in particular it is globally hyperbolic with Cauchy surface $\Sigma$ by [[thm-gr-cauchy-surface-implies-globally-hyperbolic]]. [step 5.1, L6, algebra]

7.1 ($\Psi$ is a development embedding.) By step 5.1, $\Psi$ is a data-fixing isometric immersion of the development $U\cup N_0$ into $M'$; hence it is injective and a diffeomorphism onto the open set $\Psi(U\cup N_0)$ by [L5]. [step 6.1, L5, algebra]

8.1 (Strictly larger.) Pick $x\in S\cap\partial U$ (nonempty by [[lem-gr-spacelike-restart-hypersurface]] clause (b)). Then $x\in S\subseteq N_0$ and $x\notin U$, so $N_0\not\subseteq U$ and $U\subsetneq U\cup N_0$. Thus $(U\cup N_0,\Psi)$ is a common subdevelopment of $M$ and $M'$ strictly larger than $(U,\varphi)$, contradicting the maximality of $(U,\varphi)$ assumed in the statement. [step 7.1, algebra, contradiction]

9.1 (Conclusion.) Therefore the assumption $C\ne\varnothing$ is false: $C=\varnothing$. [step 1.1, step 8.1, discharge-contradiction] ∎

## Remarks

This is Theorems 3.6 and 3.13 of Sbierski's paper. The two corrections recorded in [[lem-gr-corresponding-set-smooth-extension]] (no isometry claim for the normal-coordinate formula outside $\overline U$, and the connection compatibility replacing it) enter through the data transfer [L2] and through the geodesy of the extension used in [[lem-gr-boundary-null-geodesic-segment]]. The patching step 4.1 is the place where the source writes "the same continuity argument as in the proof of Lemma 3.1, applied to $N\cap U$": it is made precise here through the limiting first jet at the base point $s\in S$ of the radial segment, using clause (c)3 of [[lem-gr-spacelike-restart-hypersurface]] instead of a density argument. The time-reversal reduction in step 1.1 uses that all constructions are time-symmetric; the past case is obtained by replacing the time orientation $N$ by $-N$, which preserves the class of developments, the corresponding points and the maximality property.

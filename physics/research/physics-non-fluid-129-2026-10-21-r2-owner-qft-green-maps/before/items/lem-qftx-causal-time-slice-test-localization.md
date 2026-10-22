---
id: lem-qftx-causal-time-slice-test-localization
kind: lemma
title: Compact test classes localize to a Cauchy neighborhood
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-gr-causal-conditions-and-global-hyperbolicity
  - def-gr-causal-curves-and-reachability
  - def-gr-observer-and-rest-space
  - def-gr-smooth-lorentzian-objects
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - def-qftx-free-weyl-net
  - def-qftx-green-hyperbolic-interface
  - lem-gr-cauchy-set-topology-and-graph
  - lem-gr-chronology-openness
  - lem-gr-compact-future-cone-intersections
  - lem-gr-maximal-geodesics-and-extension
  - lem-qftx-green-propagator-symplectic-quotient
  - thm-gr-local-geodesics-and-exponential-map
  - thm-gr-volume-time-function
  - thm-smooth-partitions-of-unity-exist-on-manifolds
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-qftx-free-weyl-net: mathematical-premise
  def-qftx-green-hyperbolic-interface: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-compact-future-cone-intersections: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-qftx-green-propagator-symplectic-quotient: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-volume-time-function: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Bär, Nicolas Ginoux, and Frank Pfäffle, Wave Equations on Lorentzian Manifolds and Quantization
      url: https://arxiv.org/pdf/0806.1036
      locator: Chapter 4 §4.5, Lemmas 4.5.4 and 4.5.6, cutoff construction and compact localization, printed pp. 137–139.
    - title: Christopher J. Fewster and Katarzyna Rejzner, Algebraic Quantum Field Theory—an introduction
      url: https://arxiv.org/pdf/1904.04051v2
      locator: §4.1 A5 and §4.2, explicit time-slice test replacement and free scalar quotient, printed pp. 13–17.
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice. Let $\iota:U\hookrightarrow M$ be a Cauchy morphism between Green-data backgrounds of [[def-qftx-green-hyperbolic-interface]], with $U$ identified with its open image in $M$. Thus $U$ is globally hyperbolic and causally convex in $M$, and it contains a Cauchy hypersurface of $M$. For every $f\in\mathcal D_g(M)$ there is $g\in\mathcal D_g(U)$ such that

$$[f]=[\iota_*g]\quad\text{in }V(M)=\mathcal D_g(M)/P_M\mathcal D_g(M).$$

The conclusion is conditional on the Green maps and Cauchy uniqueness in the stated interfaces.

## Statement references

[[def-qftx-green-hyperbolic-interface]]

[[def-qftx-free-weyl-net]]

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a Green-data background $(M,g_M,N_M,P_M,E^M_+,E^M_-)$, a causally convex Cauchy subobject $U\subseteq M$ with its restricted Green data, and $f\in\mathcal D_g(M)$.

[A1] Assume $\mathrm{AC}_\omega$ and Dependent Choice, with the exact principles of [[def-countable-choice]] and [[def-dependent-choice]].

[F1] [[thm-gr-volume-time-function]]: on a globally hyperbolic time-oriented smooth Lorentzian four-manifold, the volume time $t$ is continuous, strictly increasing along every nonconstant future causal curve, tends to $+\infty$ and $-\infty$ at the two ends of every inextendible causal curve, and each level $S_c=t^{-1}(c)$ is a Cauchy set.

[F2] [[lem-gr-cauchy-set-topology-and-graph]]: a Cauchy set $S$ is closed, the sets $I^-(S),S,I^+(S)$ partition the manifold, and $J^-(S)$ and $J^+(S)$ are closed.

[F3] [[lem-gr-compact-future-cone-intersections]]: if $S_b$ is a level of a volume time function and $K$ is compact, then $J^+(K)\cap J^-(S_b)$ is compact; applying the same statement to the reversed time orientation and time function $-t$ gives compactness of $J^-(K)\cap J^+(S_b)$.

[F4] [[thm-smooth-partitions-of-unity-exist-on-manifolds]]: under Countable Choice every open cover of a smooth manifold has a subordinate smooth partition of unity.

[F5] [[lem-gr-chronology-openness]]: $I^+(S)$ and $I^-(S)$ are open for every subset $S\subseteq M$.

[F6] [[lem-gr-maximal-geodesics-and-extension]] and [[thm-gr-local-geodesics-and-exponential-map]]: through each point of a time-oriented Lorentzian manifold there is a maximal timelike geodesic, and a Cauchy set meets every inextendible timelike curve exactly once.

[F7] [[def-qftx-free-weyl-net]]: a Cauchy morphism has causally convex open image containing a Cauchy hypersurface; causal convexity means every causal segment with endpoints in the image lies in the image.

[F8] [[def-qftx-green-hyperbolic-interface]] and [[lem-qftx-green-propagator-symplectic-quotient]]: $E=E_--E_+$, $E Pk=0$ for every compact test $k$, and $\ker E=P\mathcal D_g(M)$.

## Proof

1.1 Every volume-time level $S_c$ of $U$ is also a Cauchy set of $M$. Let $\gamma$ be any inextendible causal curve in $M$. It meets the Cauchy hypersurface $\Sigma\subset U$ from the Cauchy-morphism hypothesis. Because $U$ is causally convex, $\gamma^{-1}(U)$ is an interval: if two parameter values lie in $U$, the causal segment between them lies in $U$. The restriction of $\gamma$ to this interval is inextendible in $U$; a limit at a boundary point of the interval in $U$ would, by openness and continuity, extend the interval, while a limit at an end of the original curve would contradict its inextendibility in $M$. Hence this restriction meets the Cauchy level $S_c$ of $U$ exactly once by [F1]. This proves the claim for every $c$. [A1, F1, F2, F7, given, algebra]

2.1 Choose any $a<b$. The two open sets $I^+(S_a)$ and $I^-(S_b)$ cover $M$. To see this, take a maximal future timelike geodesic through any point $p\in M$ using [F6]. By step 1.1 it meets both Cauchy levels, and it meets $S_a$ before $S_b$: between the two crossings the curve lies in $U$ by causal convexity, where $t_U$ strictly increases from $a$ to $b$ [F1,F7]. If $p$ is strictly after the $S_a$ crossing then $p\in I^+(S_a)$; otherwise it is strictly before the $S_b$ crossing and $p\in I^-(S_b)$. Openness follows from [F5]. Apply [F4] to obtain smooth $\theta_+,\theta_-:M\to[0,1]$ with $\theta_++\theta_-=1$, $\operatorname{supp}\theta_+\subset I^+(S_a)$ and $\operatorname{supp}\theta_-\subset I^-(S_b)$. Set $f_\pm:=\theta_\pm f$ and $K_\pm:=\operatorname{supp}f_\pm$; these are compact, and $K_\pm$ lie in the stated open sets. [A1, F1, F4, F5, F6, F7, step 1.1, given, construct]

3.1 If $K_+$ is nonempty, continuity of $t_U$ on the compact set $K_+$ and strict increase in [F1] give $\min_{K_+}t_U>a$. Choose $a'$ strictly between these values. Every $x\in K_+$ lies in $I^+(S_{a'})$: a maximal future timelike geodesic in $U$ through $x$ meets the Cauchy level $S_{a'}$, and since $t_U(x)>a'$, that meeting precedes $x$. By [F2], $A:=J^-_M(S_a)$ and $B:=J^+_M(S_{a'})$ are closed; they are disjoint because a causal curve in $M$ from $S_{a'}$ to $S_a$ would, by causal convexity, lie in $U$ and contradict the strict increase of $t_U$ from $a'$ to $a$. The open sets $M\setminus A$ and $M\setminus B$ cover $M$. Choose a subordinate partition $\phi_A+\phi_B=1$ with $\operatorname{supp}\phi_A\subset M\setminus A$ and $\operatorname{supp}\phi_B\subset M\setminus B$ by [F4], and put $\rho_+:=\phi_A$. Then $\rho_+=0$ on a neighborhood of $A$, $\rho_+=1$ on a neighborhood of $B$, and $\operatorname{supp}(d\rho_+)\subseteq M\setminus(A\cup B)$. Each level $S_c$ is Cauchy in $M$ by step 1.1, so every point of this transition support is causally after a point of $S_a$ (it is not in $J^-_M(S_a)$) and causally before a point of $S_{a'}$ (it is not in $J^+_M(S_{a'})$). Causal convexity therefore puts the transition support in $U$. Also $\operatorname{supp}\rho_+\subset M\setminus A$; since $S_a$ is Cauchy in $M$, every point outside $J^-_M(S_a)$ lies causally to its future, so $\operatorname{supp}\rho_+\subseteq J^+_M(S_a)$. Moreover, causal convexity gives $J^+_M(S_a)\cap J^-_M(K_+)=J^+_U(S_a)\cap J^-_U(K_+)$: each point in the left side lies on causal segments whose endpoints lie in $U$, so both segments lie in $U$, and the reverse inclusion is immediate. The time-reversed case of [F3], applied to the volume-time level $S_a$ and compact set $K_+$ in the globally hyperbolic spacetime $U$, makes this common shadow compact. Define $\psi_+:=\rho_+E_-f_+$. Its support lies in that compact subset of $U$, so $\psi_+\in\mathcal D_g(M)$. Since $\rho_+=1$ near $K_+$, the product rule gives $P\psi_+=f_+ +[P,\rho_+]E_-f_+$, where $[P,\rho_+]u:=P(\rho_+u)-\rho_+Pu$ vanishes wherever $\rho_+$ is locally constant. Consequently $g_+:=f_+-P\psi_+=-[P,\rho_+]E_-f_+$ is compactly supported in $U$; its support lies in the transition band intersected with $J^-_M(K_+)$, hence in the compact causal shadow just identified. By [F8], $E g_+=E f_+$. If $K_+=\varnothing$, set $g_+=0$. [A1, F1, F2, F3, F4, F6, F7, F8, step 1.1, step 2.1, given, construct]

4.1 If $K_-$ is nonempty, continuity of $t_U$ on the compact set $K_-$ and strict increase in [F1] give $\max_{K_-}t_U<b$. Choose $b'$ strictly between these values; every $x\in K_-$ lies in $I^-(S_{b'})$ by the future timelike geodesic argument with time direction reversed. The sets $A':=J^-_M(S_{b'})$ and $B':=J^+_M(S_b)$ are closed and disjoint by [F2] and the same causal-convexity/time-order argument as in step 3.1. Choose a subordinate partition of unity for $M\setminus A'$ and $M\setminus B'$ with supports contained in those respective opens, and let $\rho_-$ be its member supported in $M\setminus B'$. Then $\rho_-=1$ on a neighborhood of $A'$, $\rho_-=0$ on a neighborhood of $B'$, and $\operatorname{supp}(d\rho_-)\subseteq M\setminus(A'\cup B')$. Since both levels are Cauchy in $M$, every point of the transition support is causally after a point of $S_{b'}$ and causally before a point of $S_b$; causal convexity puts it in $U$. Also $\operatorname{supp}\rho_-\subset M\setminus B'$; since $S_b$ is Cauchy in $M$, every point outside $J^+_M(S_b)$ lies causally to its past, so $\operatorname{supp}\rho_-\subseteq J^-_M(S_b)$. Causal convexity gives $J^+_M(K_-)\cap J^-_M(S_b)=J^+_U(K_-)\cap J^-_U(S_b)$. Applying [F3] in $U$ to its volume-time level $S_b$ and compact set $K_-$ shows that this common shadow is compact. Put $\psi_-:=\rho_-E_+f_-$. Its support is contained in that compact subset of $U$. Since $K_-\subset I^-_M(S_{b'})\subset A'$, $\rho_-=1$ near $K_-$; the product rule gives $g_-:=f_--P\psi_-=-[P,\rho_-]E_+f_-$. Its support lies in the transition support intersected with $J^+_M(K_-)$, hence in the compact shadow $J^+_M(K_-)\cap J^-_M(S_b)$, so it is compactly supported in $U$. By [F8], $Eg_-=Ef_-$. If $K_-=\varnothing$, set $g_-=0$. [A1, F1, F2, F3, F4, F6, F7, F8, step 2.1, step 3.1, given, construct]

5.1 Let $g_U$ be the restriction to $U$ of $g:=g_++g_-$, whose two summands have compact support in $U$ by steps 3.1 and 4.1. Then $\iota_*g_U=g$, and $Eg=Eg_++Eg_-=Ef_++Ef_-=Ef$ by those same steps and $f=f_++f_-$. By [F8], $\ker E=P\mathcal D_g(M)$, so $E(f-\iota_*g_U)=0$ implies $f-\iota_*g_U\in P\mathcal D_g(M)$. This is the asserted equality of test classes. [F8, step 2.1, step 3.1, step 4.1, given, algebra] ∎

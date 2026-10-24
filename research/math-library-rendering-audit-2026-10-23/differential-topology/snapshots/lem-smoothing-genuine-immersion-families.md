---
id: lem-smoothing-genuine-immersion-families
kind: lemma
title: "Smoothing continuous families of genuine immersions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-compact-parameter-pair, def-space-of-immersions-and-space-of-formal-immersions, def-immersion-submersion-and-constant-rank-map, def-regular-homotopy-of-immersions, def-smooth-map-between-manifolds-with-boundary, lem-joint-jet-continuity-and-the-weak-smooth-topology, def-weak-compact-open-smooth-topology-on-mapping-spaces, thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space, thm-euclidean-tubular-neighbourhood-theorem, def-normal-addition-map-for-a-euclidean-submanifold, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-differentiation-under-the-integral-sign, thm-heine-cantor-metric, thm-extreme-value-metric, thm-smooth-partitions-of-unity-exist-on-manifolds, def-compact-space, def-countable-choice, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.24 and the approximation of maps by mollification, pp. 139–141"
      url: https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Question 1.2 and the compact-open C^infinity topology on Imm(M,N)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "Morris W. Hirsch, Differential Topology, Ch. 2 §1–§2, pp. 34–38 (the C^infinity topology and smooth approximation of maps)"
      url: https://people.dm.unipi.it/benedett/HIRSCH.pdf
dependency_level: 4
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M^m$ be compact, $N^n$ smooth, $m\le n$, and $(P,Q)$ a compact parameter pair. A continuous family $\Phi:P\to\operatorname{Imm}(M,N)$ whose adjoint is smooth on $W\times M$ for some open $W\supseteq Q$ is homotopic, through genuine families and relative to $Q$, to a smooth family agreeing with it on a parameter neighbourhood of $Q$. Every continuous path in $\operatorname{Imm}(M,N)$ is homotopic relative to its endpoints to a smooth path. Consequently its path components are regular homotopy classes.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, compact smooth $M^m$, smooth $N^n$ with $m\le n$, a compact parameter pair $(P,Q)$, and a weakly continuous family of immersions with adjoint $\varphi$ smooth on $W\times M$, $W\supseteq Q$.

[F1] Local source jets of $\varphi$ are jointly continuous; conversely joint jet continuity gives weak continuity ([[lem-joint-jet-continuity-and-the-weak-smooth-topology]]).

[L1] Under countable choice, $N$ and the boundaryless factor $P_0$ of $P$ have Euclidean embeddings and smooth tubular retractions ([[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]], [[thm-euclidean-tubular-neighbourhood-theorem]]). For $e:N\hookrightarrow\mathbb R^b$ write $r:T\to e(N)$ for the latter; $dr_a$ is the identity on $T_ae(N)$ when $a\in e(N)$.

[L2] Parameter mollification by a nonnegative unit-mass bump is smooth and allows differentiation under the integral on compact source pieces; uniform continuity gives uniform approximation of values and source derivatives ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-differentiation-under-the-integral-sign]], [[thm-heine-cantor-metric]]).

[L3] Smooth bumps supported in a prescribed open set and equal to one near a compact set exist ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]); continuous strictly positive functions on nonempty compact sets have positive minima ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 Put $a=e\circ\varphi$. Extend its parameter coordinates to a Euclidean neighbourhood of $P=P_0\times[0,1]^d$ by the tubular projection on $P_0$ and clamping each interval coordinate. This extension $\hat a$ is continuous with every $x$-derivative jointly continuous. For a nonnegative bump $\beta_\delta$ of mass one define $v_\delta(p,x)=\int\beta_\delta(p-y)\hat a(y,x)\,dy$, taking $\delta$ below a uniform neighbourhood radius of the compact $P$. The result is smooth jointly in $(p,x)$, and every $x$-derivative passes under the integral. Values and first $x$-derivatives converge uniformly to those of $a$ on finitely many compact source chart pieces covering $M$. [F1, L1, L2, given, construct]

2.1 The compact family of pairs $(a(p,x),d_xa(p,x))$ lies in the open set of ambient first jets $(z,A)$ for which $z\in T$ and $dr_zA$ is injective. At an original pair, $dr_a d_xa=d_xa$ is injective. Nonvanishing minors and continuity of $dr$ therefore give a uniform positive allowed error on the finitely many compact parameter-source pieces. Choose $\delta$ so that both value and first-derivative errors of $v=v_\delta$ are smaller than that error. This uses the distance of the compact family from the complement of the permitted jet neighbourhood, rather than a distance from the whole, possibly noncompact, $e(N)$ to the edge of $T$. No bound on $\|dr\|$ away from $e(N)$ is asserted. [L1, L3, step 1.1, choose]

3.1 Choose a smooth cutoff $\chi:P\to[0,1]$ supported in $W$ and equal to one near $Q$, by applying [L3] in $P_0\times\mathbb R^d$; for empty $Q$ set $\chi=0$. The map $b=\chi a+(1-\chi)v$ is smooth, since $a$ is smooth on the support of $\chi$. For $s\in[0,1]$ set $w_s=(1-s)a+sb$ and $\varphi_s=e^{-1}r(w_s)$. Because $\chi$ depends only on the parameter, both $w_s-a$ and $d_xw_s-d_xa$ are $(s(1-\chi))$ times the respective mollification errors. Thus the permitted first-jet conditions of step 2.1 hold throughout, and every $\varphi_s(p,\cdot)$ is an immersion. The homotopy starts at $\varphi$, ends at the smooth map $e^{-1}r(b)$, and is fixed where $\chi=1$. [L1, L3, step 2.1, construct]

4.1 All source derivatives of $\varphi_s$ are jointly continuous by the integral formula and smooth composition; [F1] gives a continuous homotopy of families. Empty source or parameter spaces need no smoothing. This proves the relative assertion. [F1, step 1.1, step 3.1]

5.1 For an arbitrary continuous path $\gamma$, choose a smooth $\eta:[0,1]\to[0,1]$ equal to zero near zero and one near one. The path $t\mapsto\gamma(\eta(t))$ is homotopic to $\gamma$ relative to endpoints by precomposition with $(1-s)t+s\eta(t)$. Its adjoint is smooth near the endpoints, where it is independent of $t$ and equals the prescribed smooth immersion. Apply steps 1.1–4.1 with $P=[0,1]$, $Q=\{0,1\}$ to produce a smooth path with exactly those endpoints. A smooth path of immersions is a regular homotopy by [[def-regular-homotopy-of-immersions]], and every regular homotopy is weakly continuous by [F1]. Hence the component and regular-homotopy classifications agree. [F1, step 4.1, construct] ∎

---
id: lem-smoothing-formal-immersion-families
kind: lemma
title: "Smoothing continuous families of formal immersions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-compact-parameter-pair, def-formal-immersion-between-smooth-manifolds, def-space-of-immersions-and-space-of-formal-immersions, lem-joint-jet-continuity-and-the-weak-smooth-topology, def-weak-compact-open-smooth-topology-on-mapping-spaces, def-vector-bundle-map-over-a-smooth-base-map, def-pullback-vector-bundle-as-a-fibre-product, thm-the-pullback-fibre-product-is-a-smooth-vector-bundle, def-dual-and-hom-vector-bundles, thm-relative-whitney-approximation-for-manifold-valued-maps, def-countable-choice, thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space, thm-euclidean-tubular-neighbourhood-theorem, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-differentiation-under-the-integral-sign, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-extreme-value-metric, thm-heine-cantor-metric]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorems 6.21 and 6.26, pp. 136–141 (relative Whitney approximation)"
      url: https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: §1 (smooth families of formal immersions)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
dependency_level: 3
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M^m,N^n$ be smooth manifolds with $m\le n$, $(P,Q)$ a compact parameter pair, and $\Phi:P\to\operatorname{FImm}(M,N)$ a continuous family whose adjoint formal data are smooth on $W\times M$ for some open $W\supseteq Q$ in $P$. Then $\Phi$ is homotopic relative to $Q$ to a smooth family, through formal immersions, and the homotopy is fixed on an open parameter neighbourhood of $Q$. In particular this applies when the family is smoothly holonomic on $Q$, as in [[def-compact-parameter-pair]]. Compactness of $M$ is not required.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, smooth $M^m,N^n$ with $m\le n$, a compact parameter pair $(P,Q)$, and continuous formal data $(f_p,F_p)$ smooth on $W\times M$ with $W\supseteq Q$.

[F1] Weak continuity is equivalent to joint continuity of every source-coordinate derivative, and smooth families are weakly continuous ([[lem-joint-jet-continuity-and-the-weak-smooth-topology]], [[def-space-of-immersions-and-space-of-formal-immersions]]).

[L1] Under countable choice, choose a proper Euclidean embedding $e:N\hookrightarrow\mathbb R^b$ and a smooth tubular retraction $r:T\to e(N)$, $T$ open in $\mathbb R^b$ ([[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]], [[thm-euclidean-tubular-neighbourhood-theorem]]). At $a\in e(N)$, $dr_a$ is the identity on $T_ae(N)$.

[L2] Smooth bundle metrics and smooth locally finite partitions of unity subordinate to precompact chart domains exist under countable choice; smooth bumps can be fixed to one near a compact set and supported in a prescribed open neighbourhood ([[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L3] Parameter convolution with a nonnegative compactly supported unit-mass smooth bump is smooth in the parameter; continuous source derivatives pass under this integral on compact source pieces, by boundedness and differentiation under the integral sign ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-differentiation-under-the-integral-sign]]). Uniform continuity makes these convolutions approach the original data uniformly on each compact parameter-source product ([[thm-heine-cantor-metric]]).

## Proof

**Proof technique:** direct.

1.1 Encode the data as $a(p,x)=e(f_p(x))$ and $B(p,x)=de_{f_p(x)}F_{p,x}\in\operatorname{Hom}(T_xM,\mathbb R^b)$. They have jointly continuous $x$-derivatives by [F1]. All their source fibres remain $T_xM$. In the vector bundle $V=\mathbb R^b\oplus\operatorname{Hom}(TM,\mathbb R^b)$ over $M$, the set $\mathcal O$ of pairs $(a,B)$ with $a\in T$ and $dr_aB$ injective is open: in local frames injectivity is the nonvanishing of an appropriate minor. The original pairs lie in $\mathcal O$ because $dr_aB=B$. Equip $V$ with a smooth fibre norm using [L2]. [F1, L1, L2, given, construct]

2.1 Write $P=P_0\times[0,1]^d$. Embed the compact boundaryless $P_0$ in Euclidean space and use its smooth tubular projection; in the interval factors use coordinate clamps. Together these give a continuous projection $\pi$ from a Euclidean neighbourhood of $P$ to $P$, independent of $x$, and fix $P$ pointwise. Extend $a,B$ by evaluation at $\pi(p)$. On every compact source set, the extension retains all jointly continuous $x$-derivatives. Convolution in the Euclidean parameter coordinates therefore gives smooth data $a_\delta,B_\delta$ on a neighbourhood of $P$ times $M$; $B_\delta(p,x)$ is the integral in the single vector space $\operatorname{Hom}(T_xM,\mathbb R^b)$, so it is intrinsically defined and is smooth in any local source frame. [L1, L3, step 1.1, construct]

3.1 Choose a countable locally finite smooth partition $(\lambda_j)$ on $M$ with compact supports $K_j$ inside chart domains, using [L2]. Compactness of $P\times K_j$ and openness of $\mathcal O$ give a positive constant $c_j$ such that perturbations of norm less than $c_j$ of the original pair over this product remain in $\mathcal O$. Put $\varepsilon(x)=\frac12\sum_j\lambda_j(x)c_j>0$. At each $x$ this is at most half the largest active $c_j$; that $c_j$ is valid at $x$, so the fibre ball of radius $\varepsilon(x)$ about every original pair at $x$ lies in $\mathcal O$. Choose $\delta_j>0$ so that the error of $(a_{\delta_j},B_{\delta_j})$ on $P\times K_j$ is less than $\frac12\min_{K_j}\varepsilon$, which is positive by compactness. These are independent countably many choices. Define $a'=\sum_j\lambda_ja_{\delta_j}$ and $B'=\sum_j\lambda_jB_{\delta_j}$. They are smooth by local finiteness, and their combined error at $(p,x)$ is less than $\varepsilon(x)/2$. Empty supports are omitted. [L2, L3, step 1.1, step 2.1, choose, construct]

4.1 Choose a smooth $\chi:P\to[0,1]$ equal to one near $Q$ and supported in $W$, using [L2] on $P_0\times\mathbb R^d$ and restricting to $P$; for $Q=\varnothing$ take $\chi=0$. Replace $(a',B')$ by $(\bar a,\bar B)=\chi(a,B)+(1-\chi)(a',B')$. This pair is smooth: the original data are smooth where $\chi$ is supported, and the other summand is smooth everywhere. For $s\in[0,1]$ set $(a_s,B_s)=(1-s)(a,B)+s(\bar a,\bar B)$. Its error from the original pair is still less than $\varepsilon(x)/2$, so every pair lies in $\mathcal O$. [L2, step 3.1, construct]

5.1 Set $f_s=e^{-1}r(a_s)$ and $F_s=d(e^{-1})_{r(a_s)}dr_{a_s}B_s$. Each $F_s$ is a linear injection from the original $T_xM$ to $T_{f_s(p,x)}N$; no approximation has moved $x$. At $s=0$ these recover $(f,F)$, and at $s=1$ they are jointly smooth in $(p,x)$. Every source derivative is jointly continuous in $(s,p,x)$, because the sums are locally finite and the retraction is smooth. By [F1] this is a continuous homotopy through formal immersions. It is fixed where $\chi=1$, proving the relative assertion. If $P$ or $M$ is empty the unique family already suffices. [F1, L1, step 1.1, step 3.1, step 4.1] ∎

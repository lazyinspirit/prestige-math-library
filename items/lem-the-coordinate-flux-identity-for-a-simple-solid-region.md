---
id: lem-the-coordinate-flux-identity-for-a-simple-solid-region
kind: lemma
title: "The single-direction flux identity on a simple solid region"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-adapted-outward-boundary-presentation-of-a-simple-solid-region, lem-flux-of-a-single-component-field-through-an-oriented-graph-face, lem-integral-additivity-over-a-content-zero-almost-partition, thm-solid-between-continuous-graphs-fubini-formula, lem-cyclic-coordinate-permutations-preserve-integrals-in-r3, thm-ftc-second-part, def-finitely-patched-regular-surface-and-integrals, def-admissible-regular-parametrized-surface-patch, thm-continuous-functions-on-compact-jordan-sets-are-integrable, def-euclidean-inner-product, def-simple-solid-region-in-a-coordinate-direction, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-riemann-integral-over-a-jordan-set, def-divergence-and-curl-of-a-c1-vector-field, def-ck-euclidean-maps-and-diffeomorphisms, lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Theorem 4.2.2"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let $(k,D,\gamma_1,\gamma_2)$ be a simple description of a solid $E$ in the direction $k$ and let $\Sigma=\bigl((D_1,\varphi_1),\ldots,(D_P,\varphi_P)\bigr)$ be a boundary presentation adapted to it ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]]). Let $R$ be a real function of class $C^1$ on an open set containing $E$ and let $Re_k$ be the field whose $k$th coordinate is $R$ and whose other two coordinates are zero. Then the flux of $Re_k$ over the presentation equals the integral of the $k$th partial derivative of $R$ over $E$:

$$\sum_{j=1}^{P}\int_{D_j}\bigl\langle Re_k(\varphi_j),\varphi_{j,u}\times\varphi_{j,v}\bigr\rangle=\int_E\partial_kR.$$

## Facts & Assumptions

**Given:** The simple description $(k,D,\gamma_1,\gamma_2)$ of $E$, the adapted presentation $\Sigma$ with its supplied sublists $\Sigma^+,\Sigma^-,\Sigma^0$, and the function $R$ of class $C^1$ on an open $O\supseteq E$. Write $\psi_j=\pi_k\circ\varphi_j$, $V_j=\psi_j[D_j^\circ]$, $\sigma_k^{-1}(w,t)$ for the point with $\pi_k$-projection $w$ and $k$th coordinate $t$, and $R^{\gamma_i}(w):=R(\sigma_k^{-1}(w,\gamma_i(w)))$ for $i=1,2$.

[F1] For a compatible finite patch presentation, the oriented flux is the sum of the patch values, each patch value being $\int_{D_j}(F\circ\varphi_j)\cdot(\varphi_{j,u}\times\varphi_{j,v})$ ([[def-finitely-patched-regular-surface-and-integrals]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F2] For $j\in\Sigma^0$ the $k$th coordinate of $\varphi_{j,u}\times\varphi_{j,v}$ vanishes on the interior of $D_j$; the projected images of the upper sublist are pairwise disjoint and fill $D$ up to content zero, and the same holds for the lower sublist ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]]).

[F3] A regular patch has a compact Jordan parameter region that is the closure of its nonempty interior, and its parametrization is $C^1$ on an open neighbourhood of that region ([[def-admissible-regular-parametrized-surface-patch]]).

[F4] The simple solid region described by $(k,D,\gamma_1,\gamma_2)$ is $E=\{p\in\mathbb R^3:\pi_k(p)\in D,\ \gamma_1(\pi_k(p))\le p_k\le\gamma_2(\pi_k(p))\}$ with $D$ compact Jordan and $\gamma_1\le\gamma_2$ continuous on $D$, and $\sigma_k(p)=(\pi_k(p),p_k)$ carries $E$ onto the solid between the graphs of $\gamma_1$ and $\gamma_2$ over $D$ ([[def-simple-solid-region-in-a-coordinate-direction]]).

[F5] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$ ([[def-euclidean-inner-product]]); a $C^1$ function has continuous first partial derivatives ([[def-ck-euclidean-maps-and-diffeomorphisms]]); and $\partial_k$ is the $k$th partial derivative appearing in the divergence of [[def-divergence-and-curl-of-a-c1-vector-field]].

[F6] Integration over a bounded Jordan measurable set is integration of the zero extension over a bounding rectangle ([[def-riemann-integral-over-a-jordan-set]]).

[L1] For $j\in\Sigma^+$ the flux of $Re_k$ through $(D_j,\varphi_j)$ is $\int_{V_j}R^{\gamma_2}$, and for $j\in\Sigma^-$ it is $-\int_{V_j}R^{\gamma_1}$; each $V_j$ is a bounded open Jordan measurable subset of $D$ and the base integrand is integrable over it ([[lem-flux-of-a-single-component-field-through-an-oriented-graph-face]]).

[L2] Let $A$ be bounded Jordan measurable, let $N\ge1$ and let $A_1,\ldots,A_N\subseteq A$ be bounded Jordan sets with pairwise intersections of content zero and with $A\setminus\bigcup_iA_i$ of content zero; if $f$ is bounded on $A$ and integrable over $A$ and over each $A_i$, then $\int_Af=\sum_{i=1}^N\int_{A_i}f$ ([[lem-integral-additivity-over-a-content-zero-almost-partition]]).

[L3] For compact Jordan $D\subseteq\mathbb R^m$, continuous $\alpha\le\beta$ on $D$ and $K=\{(u,t):u\in D,\ \alpha(u)\le t\le\beta(u)\}$, the solid $K$ is compact and Jordan measurable and every continuous $H:K\to\mathbb R$ satisfies $\int_KH=\int_D\bigl(\int_{\alpha(u)}^{\beta(u)}H(u,t)\,dt\bigr)du$ ([[thm-solid-between-continuous-graphs-fubini-formula]]).

[L4] For a cyclic coordinate permutation $\sigma_k$ of $\mathbb R^3$ and compact Jordan $E'$, the set $\sigma_k[E']$ is compact Jordan and $\int_{\sigma_k[E']}H=\int_{E'}H\circ\sigma_k$ for bounded $H$ integrable on either side ([[lem-cyclic-coordinate-permutations-preserve-integrals-in-r3]]).

[L5] If $G$ is differentiable at every point of $[a,b]$ with $a<b$ and $G'$ is integrable on $[a,b]$, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[L6] Every continuous real function on a compact Jordan measurable set is Riemann integrable over it ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[L7] For a $C^1$ map $\varphi$ of two variables into $\mathbb R^3$, $(\varphi_u\times\varphi_v)_k=\det D(\pi_k\circ\varphi)$ ([[lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians]]).

## Proof

**Proof technique:** direct.

1.1 Let $j\in\Sigma^0$. By [F5] the flux integrand of $Re_k$ through $(D_j,\varphi_j)$ is $R(\varphi_j)\,(\varphi_{j,u}\times\varphi_{j,v})_k$, which is continuous on $D_j$ because $\varphi_j$ is $C^1$ there by [F3] and $R$ is continuous. By [F2] its second factor vanishes on $D_j^\circ$, and $D_j$ is the closure of $D_j^\circ$ by [F3], so a continuous function vanishing on $D_j^\circ$ vanishes on $D_j$. Hence that patch's flux is $\int_{D_j}0=0$. [given, F2, F3, F5, L7]

1.2 By [F4] the set $E$ is compact and Jordan measurable and $\sigma_k[E]=K:=\{(w,t):w\in D,\ \gamma_1(w)\le t\le\gamma_2(w)\}$. The function $H(w,t):=(\partial_kR)(\sigma_k^{-1}(w,t))$ is continuous on $K$, since $\partial_kR$ is continuous on $O$ by [F5] and $\sigma_k^{-1}$ is linear, and $H\circ\sigma_k=\partial_kR$ on $E$. So [L4] applied with $E'=E$ gives $\int_E\partial_kR=\int_KH$, both integrals existing by [L3] and [L6]. [given, F4, F5, L3, L4, L6]

1.3 Fix $w\in D$ and put $G(t):=R(\sigma_k^{-1}(w,t))$, defined and differentiable for every $t$ with $\sigma_k^{-1}(w,t)\in O$, with $G'(t)=(\partial_kR)(\sigma_k^{-1}(w,t))=H(w,t)$ because varying $t$ moves only the $k$th coordinate. If $\gamma_1(w)<\gamma_2(w)$ then $G$ is differentiable on $[\gamma_1(w),\gamma_2(w)]$, whose points lie in $E\subseteq O$ by [F4], and $G'$ is continuous there hence integrable, so [L5] gives $\int_{\gamma_1(w)}^{\gamma_2(w)}H(w,t)\,dt=G(\gamma_2(w))-G(\gamma_1(w))=R^{\gamma_2}(w)-R^{\gamma_1}(w)$. If instead $\gamma_1(w)=\gamma_2(w)$ then the interval is degenerate, so the integral is $0$, and the increment $R^{\gamma_2}(w)-R^{\gamma_1}(w)$ is also $0$; the identity holds in that case too. [given, F4, F5, L5]

1.4 The functions $R^{\gamma_1}$ and $R^{\gamma_2}$ are continuous on the compact Jordan base $D$, hence bounded and integrable over $D$ by [L6] and [F6]. By [L1] each $V_j$ with $j\in\Sigma^+$ is a bounded Jordan subset of $D$ over which $R^{\gamma_2}$ is integrable, and by [F2] those sets are pairwise disjoint — so their pairwise intersections are empty and have content zero — and their union omits from $D$ only a set of content zero. So [L2] gives $\sum_{j\in\Sigma^+}\int_{V_j}R^{\gamma_2}=\int_DR^{\gamma_2}$, and by [L1] the left side is the sum of the upper faces' fluxes. [given, F2, F6, L1, L2, L6]

1.5 The same argument applied to the lower sublist gives $\sum_{j\in\Sigma^-}\int_{V_j}R^{\gamma_1}=\int_DR^{\gamma_1}$, and by [L1] each lower face's flux is $-\int_{V_j}R^{\gamma_1}$, so the lower faces' fluxes sum to $-\int_DR^{\gamma_1}$. [given, F2, F6, L1, L2, L6]

2.1 By step 1.3 the inner integral in [L3] is $R^{\gamma_2}(w)-R^{\gamma_1}(w)$ for every $w\in D$, a continuous function of $w$; so [L3] applied to $H$ on $K$ and step 1.2 give $\int_E\partial_kR=\int_KH=\int_D\bigl(R^{\gamma_2}-R^{\gamma_1}\bigr)=\int_DR^{\gamma_2}-\int_DR^{\gamma_1}$, the last step by linearity of the integral over $D$. [step 1.2, step 1.3, L3, L6]

2.2 By [F1] the flux over the presentation is the sum of the $P$ patch fluxes, which splits along the three supplied sublists. Step 1.1 makes the lateral sum zero, step 1.4 makes the upper sum $\int_DR^{\gamma_2}$ and step 1.5 makes the lower sum $-\int_DR^{\gamma_1}$, so the total is $\int_DR^{\gamma_2}-\int_DR^{\gamma_1}$. [step 1.1, step 1.4, step 1.5, F1]

3.1 Steps 2.1 and 2.2 give the same number for the two sides of the asserted identity, so it holds. [step 2.1, step 2.2] ∎

## Remarks

- **The degenerate slice needs its own line.** Where the two graph functions agree, the second fundamental theorem is unavailable, since it requires a nondegenerate interval; step 1.3 handles that case separately, and both sides are zero there. Folding it into the main computation would apply [L5] with $a=b$.

- **Nothing here says the normals point outward.** The identity is proved from the sign conditions of the adapted presentation alone. Reading its right-hand side as an outward flux is [[prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal]] and [[cor-every-face-of-an-elementary-solid-region-is-outward-oriented]], and no step above depends on them.

---
id: def-gts-oriented-submersion-chain-transfer-data
kind: definition
title: Oriented-submersion chain-transfer data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 6
axiom_strength: ZF + full AC
deps:
  - def-relative-cup-product
  - thm-thom-isomorphism-for-a-trivial-oriented-bundle
  - lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology
  - def-gts-smooth-integral-singular-chain-complex
  - def-gts-ordinary-differential-cohomology-orientation
  - def-smooth-differential-k-form
  - def-singular-cohomology-with-coefficients
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - lem-singular-uct-extension-from-cycle-projections
  - def-axiom-of-choice
dependency_roles:
  def-relative-cup-product: mathematical-premise
  thm-thom-isomorphism-for-a-trivial-oriented-bundle: mathematical-premise
  lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology: mathematical-premise
  def-gts-smooth-integral-singular-chain-complex: mathematical-premise
  def-gts-ordinary-differential-cohomology-orientation: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  lem-singular-uct-extension-from-cycle-projections: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: M. J. Hopkins and I. M. Singer, Quadratic Functions in Geometry, Topology, and M-Theory
      url: https://arxiv.org/pdf/math/0211216v2
      locator: Section 3.4, integration by a differential Thom cocycle and slant product, PDF pp. 28–30.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.6, Theorem 3.137 proof sketch, PDF pp. 69–71.
---

## Definition

Assume full AC. Let $\pi:W\to M$ be a proper oriented smooth submersion of relative dimension $n$ with compact oriented fibers and a chosen differential-cohomology orientation. A **smooth integral chain-transfer datum** is a family of homomorphisms
$$T_{\pi,m}:C_m^\infty(M;\mathbb Z)\longrightarrow C_{m+n}^\infty(W;\mathbb Z)\qquad(m\ge0)$$
satisfying $\partial T_{\pi,m}=(-1)^nT_{\pi,m-1}\partial$, with $T_{\pi,-1}=0$.

For $n=0$, the transfer is normalized on each point generator by
$$T_{\pi,0}([m])=\sum_{x\in\pi^{-1}(m)}\epsilon_x[x],$$
where the finite sum is zero on an empty fiber and $\epsilon_x$ is its chosen zero-dimensional orientation sign.

Naturality is required for every Cartesian pullback square
$$
\begin{CD} W'=M'\times_M W @>{q}>> W\\ @V{\pi'}VV @VV{\pi}V\\ M' @>{f}>> M \end{CD}
$$
where $f$ is smooth, $\pi'$ is the pulled-back proper submersion, and its fiber orientation is pulled back from $\pi$: $q_*T_{\pi',m}=T_{\pi,m}f_*$. For composable properly oriented submersions $W\xrightarrow{\pi}M\xrightarrow{\kappa}B$, require
$$T_{\kappa\circ\pi,m}=T_{\pi,m+n_\kappa}T_{\kappa,m}.$$

For a smooth $(m+n)$-form $\omega$ on $W$, define fiber integration by
$$\left(\int_{W/M}\omega\right)_x(v_1,\ldots,v_m)=\int_{W_x}\omega(-,\ldots,-,\widetilde v_1,\ldots,\widetilde v_m),$$
where $v_i\in T_xM$, $\widetilde v_i$ are any lifts to $TW|_{W_x}$, the first $n$ slots are evaluated on positively oriented vertical frames, and $W_x=\pi^{-1}(x)$. This convention uses positive vertical vectors before base vectors; the value is independent of the lifts. The transferred chain uses this same orientation order: positive vertical fiber directions first, followed by base-simplex directions. Require the evaluation identity $\int_{T_{\pi,m}c}\omega=\int_c\int_{W/M}\omega$ for every smooth integral $m$-chain $c$.

Properness and compact fibers make this a smooth $m$-form on $M$.

Here is the integral Gysin map used in the compatibility condition. Use the orientation's embedding $e:W\hookrightarrow M\times\mathbb R^N$ and oriented rank-$\ell$ normal bundle $\nu$, where $\ell=N-n$ and vertical tangent directions precede normal directions in the ambient orientation. Choose a fibre metric on $\nu$ and a compatible tubular embedding $\chi$ over $M$, defined on a neighborhood of its closed unit disk bundle $D\nu$. Put $S\nu=\partial D\nu$ and $\operatorname{Th}(\nu)=D\nu/S\nu$. These auxiliary tubular data are included in the compatibility input; no canonical choice is asserted. Identify $\mathbb R^N$ with the interior of $D^N$ by the orientation-preserving radial diffeomorphism $y\mapsto y/\sqrt{1+\|y\|^2}$. Define the map of pairs
$$c:(M\times D^N,M\times S^{N-1})\longrightarrow(\operatorname{Th}(\nu),\{*\})$$
by sending $\chi(w,v)$ with $\|v\|<1$ to $[w,v]$, and every other point to $*$. This collapse is continuous, including on the outer sphere: $D\nu$ is proper over $M$, since $\pi$ is proper and its disk fibres are compact, so the tube over any compact base neighborhood is compact and stays away from that sphere. On such a neighborhood the formula is a continuous map from the disk bundle modulo its sphere and is constant off the tube.

Let $u_D\in H^\ell(D\nu,S\nu;\mathbb Z)$ be the oriented integral Thom class specified by the orientation, expressed in the disk/sphere pair by radial deformation and excision, and let $p:D\nu\to W$ be projection. The quotient comparison $q^*:\widetilde H^*(\operatorname{Th}(\nu);\mathbb Z)\to H^*(D\nu,S\nu;\mathbb Z)$ is an isomorphism. For $\alpha\in H^{m+n}(W;\mathbb Z)$ put
$$\Theta(\alpha)=(q^*)^{-1}(p^*\alpha\smile u_D).$$
Let $u_N\in H^N(D^N,S^{N-1};\mathbb Z)$ evaluate to $1$ on the standard oriented disk, and use the trivial-bundle Thom isomorphism
$$\Sigma_N:H^m(M;\mathbb Z)\xrightarrow{\cong}H^{m+N}(M\times D^N,M\times S^{N-1};\mathbb Z),\qquad b\longmapsto\operatorname{pr}_M^*b\smile\operatorname{pr}_{D^N}^*u_N.$$
Define the integral Gysin homomorphism for these chosen orientation data by
$$G_{\pi,m}(\alpha)=(-1)^{mn}\Sigma_N^{-1}c^*\Theta(\alpha).$$
All degrees agree since $m+n+\ell=m+N$. The sign fixes the vertical-before-base convention: in a local oriented product, $\Sigma_N$ puts the $m$ base slots before the $N$ ambient slots, whereas $p^*\alpha\smile u_D$ puts the $n$ vertical slots before the $m$ base slots and then the $\ell$ normal slots. Reordering these blocks differs by $(-1)^{mn}$ after the common normal block is accounted for. Thus the displayed sign converts the usual right-cup Thom construction to the fibre-integration convention above. No invariance under changes of these auxiliary data or general transfer existence is being assumed without the stipulated compatibility and coherence data.

Let $\iota_W:C_*^\infty(W;\mathbb Z)\hookrightarrow C_*(W;\mathbb Z)$ be smooth-chain inclusion. For an ordinary integral cocycle $u\in C^{m+n}(W;\mathbb Z)=\operatorname{Hom}(C_{m+n}(W;\mathbb Z),\mathbb Z)$, define the induced cochain by $c\mapsto u(\iota_W T_{\pi,m}c)$ on $C_m^\infty(M;\mathbb Z)$. The signed chain identity gives $\delta(u\circ T)=(-1)^n(\delta u)\circ T$, so cocycles map to cocycles; if $u=\delta v$, then $u\circ T=\delta((-1)^nv\circ T)$, so coboundaries map to coboundaries. Under full AC, the smooth-to-ordinary chain homology isomorphism and the natural free-complex UCT make restriction $H^q(W;\mathbb Z)\to H^q(C^*_\infty(W;\mathbb Z))$ and its analogue for $M$ isomorphisms; transport the cochain class back through the latter inverse. The datum requires the resulting homomorphism $\pi_!^{\mathbb Z}:H^{m+n}(W;\mathbb Z)\to H^m(M;\mathbb Z)$ to equal $G_{\pi,m}$ as defined above. These operations, domains, and coherence conditions are part of the supplied datum; no general construction of such transfers is asserted.

## Definition references

[[def-relative-cup-product]]

[[thm-thom-isomorphism-for-a-trivial-oriented-bundle]]

[[lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology]]

[[def-gts-smooth-integral-singular-chain-complex]]

[[def-gts-ordinary-differential-cohomology-orientation]]

## Remarks

This is explicit data for a conditional integration argument, not an existence theorem. In particular, the signed chain identity, evaluation formula, Gysin compatibility and composition coherence are part of the input and must be verified in any application. A construction of such a transfer from a differential Thom cocycle for every proper oriented submersion remains an authoring obligation recorded in the integration item and batch notes.

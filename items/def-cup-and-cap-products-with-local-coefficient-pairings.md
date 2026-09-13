---
id: def-cup-and-cap-products-with-local-coefficient-pairings
kind: definition
title: Cup and cap products with local coefficients
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-local-system-of-r-modules-and-its-pullback, def-homology-and-cohomology-with-local-coefficients, def-relative-cap-product, def-alexander-whitney-diagonal-approximation, thm-cup-product-leibniz-identity, thm-cap-product-boundary-identity]
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.H, pp.335–336
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $R$ be a commutative unital ring and let $\mathcal L,\mathcal K$ be left $R$-module local systems on $X$. Their **objectwise tensor product** is
$$(\mathcal L\otimes_R\mathcal K)_x=\mathcal L_x\otimes_R\mathcal K_x,\qquad T_\gamma(\ell\otimes k)=T_\gamma\ell\otimes T_\gamma k.$$
The tensor relations make the displayed transport well defined; identity and composition hold on elementary tensors, and $T_{\bar\gamma}\otimes T_{\bar\gamma}$ is its inverse. Thus this is again a local system.

A **local-coefficient pairing** is a natural transformation $b:\mathcal L\otimes_R\mathcal K\to\mathcal N$, equivalently bilinear maps $b_x:\mathcal L_x\times\mathcal K_x\to\mathcal N_x$ satisfying $T_\gamma b_x(\ell,k)=b_y(T_\gamma\ell,T_\gamma k)$ for every path class $\gamma:x\to y$.

For a simplex $\sigma:[v_0,\ldots,v_{p+q}]\to X$, let $\lambda_{0p}^\sigma$ be its affine edge path from $v_0$ to $v_p$. For $\varphi\in C^p(X;\mathcal L)$ and $\psi\in C^q(X;\mathcal K)$ define
$$(\varphi\smile_b\psi)(\sigma)=b_{v_0}\left(\varphi(\sigma[0,\ldots,p]),T^{\mathcal K}_{\overline{\lambda_{0p}^\sigma}}\psi(\sigma[p,\ldots,p+q])\right).$$
The reverse transport is necessary because the back-face value lies over $v_p$ while the output cochain value must lie over $v_0$. The Alexander--Whitney face calculation, with naturality of $b$ on each triangular transport comparison, gives
$$\delta(\varphi\smile_b\psi)=\delta\varphi\smile_b\psi+(-1)^p\varphi\smile_b\delta\psi.$$
Hence cocycles give cup products in cohomology. The same vanishing-on-front-face argument as for ordinary relative cups gives $H^p(X,A;\mathcal L)\otimes_RH^q(X,B;\mathcal K)\to H^{p+q}(X,A\cup B;\mathcal N)$ under the usual excisive-triad comparison.

For $\varphi\in C^p(X;\mathcal L)$ and a local chain generator $m\sigma\in C_n(X;\mathcal K)$, define the **cohomology-first cap product** by zero when $p>n$ and otherwise by
$$\varphi\cap_b(m\sigma)=T^{\mathcal N}_{\lambda_{0p}^\sigma}\left(b_{v_0}(\varphi(\sigma[0,\ldots,p]),m)\right)\sigma[p,\ldots,n].$$
Here forward transport is necessary because the retained back face begins at $v_p$. The published front/back face cancellation, with the same naturality squares, yields
$$\partial(\varphi\cap_b c)=(-1)^p\left(\varphi\cap_b\partial c-\delta\varphi\cap_b c\right).$$
Consequently cap descends to the same relative quotient patterns as [[def-relative-cap-product]], with the chain coefficient system changed from $\mathcal K$ to $\mathcal N$ in the target. In particular,
$$H^p(X,A;\mathcal L)\otimes_RH_n(X,A;\mathcal K)\longrightarrow H_{n-p}(X;\mathcal N),$$
and
$$H^p(X;\mathcal L)\otimes_RH_n(X,A;\mathcal K)\longrightarrow H_{n-p}(X,A;\mathcal N).$$

If a cohomology class is represented with compact support $K$, cup with any ordinary class remains supported in $K$, while the cap of a class in $H^p(X,X\setminus K;\mathcal L)$ with a class in $H_n(X,X\setminus K;\mathcal K)$ is an absolute class. Enlargement of $K$ commutes with the formulas, giving the compact-support cup and supportwise cap operations used in duality. Constant systems and multiplication recover the published operations. Empty spaces, zero systems or rings, $p=0$, $p=n$, and $p>n$ follow from the displayed formulas. Only finite faces of a supplied simplex occur, so no AC is used.

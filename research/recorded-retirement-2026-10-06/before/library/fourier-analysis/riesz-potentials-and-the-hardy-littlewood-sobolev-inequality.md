---
page: riesz-potentials-and-the-hardy-littlewood-sobolev-inequality
title: "Riesz Potentials and the Hardy–Littlewood–Sobolev Inequality"
status: published
items: [def-riesz-potential-of-order-alpha,
        lem-riesz-potential-near-far-splitting,
        lem-hedberg-pointwise-inequality,
        thm-hardy-littlewood-sobolev-fractional-integration,
        rem-fractional-integration-endpoints]
examples: []
---

This page develops the unit-normalized Riesz potential
$$I_\alpha f(x)=\int_{\mathbb R^n}|x-y|^{\alpha-n}f(y)\,dy\qquad(0<\alpha<n)$$
on complex Euclidean Lebesgue spaces and proves the strict-range
Hardy–Littlewood–Sobolev fractional integration theorem. The kernel is the
unit normalization $c_{n,\alpha}=1$ used by the cited sources; no Fourier
multiplier identity is asserted for $I_\alpha$.

The definition fixes exactly where the pointwise integral is absolutely
meaningful and claims no all-$L^p$ existence. The near/far lemma then splits
the kernel at a radius $R$: the near part is controlled by $R^\alpha Mf(x)$
through the centered maximal function, while the far part is controlled by
Hölder's inequality and the polar-coordinate computation of the radial weight,
whose finiteness is exactly the strict condition $p<n/\alpha$; the same lemma
proves local integrability of $L^p$ representatives and independence of the
measurable representative at every convergent point. Hedberg's pointwise
inequality balances the two bounds at $R=(\|f\|_p/Mf(x))^{p/n}$ and gives
$|I_\alpha f(x)|\le C(Mf(x))^{1-\theta}\|f\|_p^{\theta}$ with
$\theta=\alpha p/n$.

The theorem takes $1/q=1/p-\alpha/n$, so $q>p$, and proves that the defining
integral converges absolutely almost everywhere for every complex $L^p$ input,
that the resulting classes form a bounded linear map $L^p\to L^q$ with
$\|I_\alpha f\|_q\le C_{n,\alpha,p}\|f\|_p$, and that on the dense smooth
core the map is the pointwise integral, whose unique bounded dense-core
extension is the same almost-everywhere integral operator. Countable Choice is
declared on every item consuming the maximal-function, Tonelli, polar,
measurability, density, completeness or extension interfaces, and the
endpoint remark is recorded, not proved, and supplies no argument.

---
id: lem-small-gradient-almost-complex-cylinder-neck-energy-decay
kind: lemma
title: "Exponential energy decay on small-gradient almost complex cylinder necks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-interior-energy-regularity-for-smooth-almost-complex-strips, thm-fourier-basis-and-parseval-on-the-n-torus]
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, neck estimates"
      url: "https://bookstore.ams.org/coll-52"
---

## Statement

Assume Countable Choice. Fix a compact smooth Riemannian manifold $(X,g)$ and a period $T>0$. Consider smooth families $J(\sigma,\tau,x)^2=-I$ on cylinders $[a,b]\times(\mathbb R/T\mathbb Z)$, with uniform bounds for $J$ and its first two target covariant derivatives. There are constants $\varepsilon,c,C>0$ depending only on these data such that the following holds. If
$$u_\sigma+J(\sigma,\tau,u)u_\tau=0,\qquad \sup|du|_g+\sup(|\partial_\sigma J|+|\partial_\tau J|)\le\varepsilon,$$
then a fixed smooth embedding $F:X\to\mathbb R^N$ can be chosen once for the target so that, for $V=F\circ u$ and $e(\sigma)=\tfrac12\int_0^T|V_\tau|^2d\tau$,
$$e''\ge c^2 e,\qquad e(\sigma)\le e(a)e^{-c(\sigma-a)}+e(b)e^{-c(b-\sigma)}.$$
Consequently, for $0\le R\le(b-a)/2$,
$$E_g\bigl(u;[a+R,b-R]\times S_T^1\bigr)\le C(e(a)+e(b))e^{-cR}.$$
Here $E_g=\tfrac12\int|du|_g^2$. The energy density at either endpoint is bounded by $CT\varepsilon^2$. Thus central neck energies tend to zero as $R\to\infty$, uniformly in neck length, for maps satisfying these hypotheses. This statement concerns closed cylinders, not boundary necks.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact target, uniform coefficient bounds, fixed angular period, equation, and smallness hypotheses of the statement.

[F1] The direct covariant computation in [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]] proves, writing $q=u_\sigma$, $$\nabla_\sigma u_\sigma+\nabla_\tau u_\tau=(\nabla_{Jq}J)q+J(\nabla_qJ)q+(\partial_\tau J+J\partial_\sigma J)q.$$ In particular its norm is at most $C|du|_g^2+C\kappa|du|_g$, where $\kappa=\sup(|\partial_\sigma J|+|\partial_\tau J|)$ denotes only explicit source derivatives.

[F2] The Countable Choice proof of [[thm-fourier-basis-and-parseval-on-the-n-torus]] gives periodic Wirtinger: for a smooth mean-zero vector-valued periodic $w$, $\int_0^T|w_\tau|^2\ge(2\pi/T)^2\int_0^T|w|^2$, by applying Parseval componentwise and observing that the zero Fourier coefficient vanishes.

## Proof

1.1 Choose a finite chart cover and smooth subordinate functions $\phi_i$ with compact supports in those charts and sum one, obtained by Euclidean bumps and normalization. The map $F(x)=(\phi_i(x),\phi_i(x)x_i(x))_i$ is a smooth embedding: at an index where $\phi_i>0$, equality of the displayed coordinates recovers the original chart point, and vanishing of all their derivatives recovers a zero tangent vector. Compactness makes it a homeomorphism onto its image and makes its differential uniformly comparable with the metric $g$. Its first and second covariant derivatives have uniform bounds. This fixes $F$ independently of the cylinder and its map. [given, construct, algebra]

2.1 Let $H=\Delta V$, taking the ordinary flat source Laplacian componentwise. The composition rule and [F1] give $$H=dF(\nabla_\sigma u_\sigma+\nabla_\tau u_\tau)+(\nabla dF)(u_\sigma,u_\sigma)+(\nabla dF)(u_\tau,u_\tau).$$ Uniform coefficient and embedding bounds therefore give $|H|\le C_0(|du|_g+\kappa)|du|_g$. The original equation and the bound for $J$ give $|du|_g\le C_1|u_\tau|_g\le C_2|V_\tau|$. After imposing the stated smallness, $$|H|\le C_3\varepsilon|V_\tau|.$$ This is a pointwise estimate on actual maps into $X$; no ambient extension of $J$ or model moduli equation is assumed. [F1, step 1.1, given, algebra]

3.1 Put $w=V_\tau$. It has zero angular mean because $V$ is periodic, and $\Delta w=\partial_\tau H$ because derivatives of a smooth Euclidean map commute. Twice differentiating $e=\tfrac12\int|w|^2$ and integrating by parts only in the periodic angular direction gives $$e''=\int_0^T\bigl(|w_\sigma|^2+|w_\tau|^2-\langle w_\tau,H\rangle\bigr)d\tau.$$ There are no endpoint terms in this integration. By step 2.1 and Young's inequality this is at least $$\int_0^T|w_\sigma|^2+\tfrac12|w_\tau|^2-\tfrac12 C_3^2\varepsilon^2|w|^2\,d\tau.$$ Let $\lambda=(2\pi/T)^2$ and choose $\varepsilon>0$ so that $C_3^2\varepsilon^2\le\lambda/2$. Then [F2] gives $e''\ge(\lambda/4)\int|w|^2=(\lambda/2)e$. Set $c=\sqrt{\lambda/2}$. [F2, step 2.1, construct, algebra]

4.1 Let $h(\sigma)=e(a)e^{-c(\sigma-a)}+e(b)e^{-c(b-\sigma)}$. It satisfies $h''-c^2h=0$ and dominates $e$ at both endpoints. If $e-h$ had a positive value, it would have a positive interior maximum; there its second derivative is nonpositive, contrary to $(e-h)''\ge c^2(e-h)>0$. Thus $e\le h$ throughout the cylinder, giving the claimed pointwise exponential bound. The argument also covers vanishing endpoint values, since $e$ is nonnegative and smooth. [step 3.1, construct, algebra]

5.1 The equation and uniform metric comparability give $$E_g(u;[a+R,b-R]\times S_T^1)\le C_4\int_{a+R}^{b-R}e(\sigma)d\sigma.$$ Integrating the two exponentials from step 4.1 bounds the last integral by $c^{-1}(e(a)+e(b))e^{-cR}$. Finally $|V_\tau|\le C|u_\tau|_g\le C\varepsilon$, so $e(a)+e(b)\le CT\varepsilon^2$. This proves all assertions, including uniform decay of central neck energy. A boundary neck has angular endpoint terms and is not covered by the periodic argument. [step 1.1, step 2.1, step 4.1, algebra] ∎

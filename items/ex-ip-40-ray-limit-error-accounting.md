---
id: ex-ip-40-ray-limit-error-accounting
kind: example
title: Exact-solution correction errors vanish in the Gaussian-beam ray limit
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - lem-ip-gaussian-beam-null-bicharacteristic
  - thm-ip-variable-metric-wave-ibvp-energy-wellposedness
  - thm-holder-inequality-for-integrals
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-riemannian-speed-and-length
  - def-countable-choice
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Lauri Oksanen, Mikko Salo, Plamen Stefanov, and Gunther Uhlmann, Inverse
        problems for real principal type operators (arXiv:2001.07599v2)
      url: https://arxiv.org/pdf/2001.07599v2
      locator: "§3, Theorem 3.1 and proof, PDF pp. 20–32: normalized bicharacteristic
        concentration and correction/error terms."
    - title: Mikko Salo, On geometric inverse problems and microlocal analysis (full
        author lecture notes, arXiv:2312.08123v1)
      url: https://arxiv.org/pdf/2312.08123v1
      locator: "§3.4, PDF pp. 32–39: Gaussian concentration and the limits of the
        lecture's beam proof sketch."
proof_strategy: Cauchy–Schwarz error expansion
---

## Example

Let $(M,g)$ be a compact Riemannian manifold, let $T>0$, and let $Q=(0,T)\times M$ carry product measure $dV_gdt$. Fix a unit-speed geodesic segment $\gamma:[0,L]\to M$ and $t_0$ with $0<t_0<T-L$, and set $\Gamma(s)=(t_0+s,\gamma(s))$, $0\le s\le L$; $ds$ denotes its arclength parameter. Let $a\in C^\infty([0,T]\times M)$, and for each $\lambda\ge1$ let $u_{j,\lambda}^{\mathrm{app}}\in L^2(Q)$ and $R_{j,\lambda}\in L^2(Q)$ for $j=1,2$. Suppose $\|u_{j,\lambda}^{\mathrm{app}}\|_{L^2(Q)}\le C_0$, $\|R_{j,\lambda}\|_{L^2(Q)}\le C_1\lambda^{-1/2}$, and
$$\int_Q a\,u_{1,\lambda}^{\mathrm{app}}u_{2,\lambda}^{\mathrm{app}}\,dV_gdt\longrightarrow \int_0^L a(t_0+s,\gamma(s))\,ds.$$
Set $u_{j,\lambda}=u_{j,\lambda}^{\mathrm{app}}+R_{j,\lambda}$. Then
$$\left|\int_Q a\,u_{1,\lambda}u_{2,\lambda}\,dV_gdt-\int_Q a\,u_{1,\lambda}^{\mathrm{app}}u_{2,\lambda}^{\mathrm{app}}\,dV_gdt\right|=O(\lambda^{-1/2}),$$
and hence the exact-solution product has the same ray-integral limit. For the real self-adjoint wave application, assume additionally Countable Choice, that $M$ is connected and nonempty with nonempty smooth boundary, and that the two operators are $P_j=\partial_t^2-\Delta_g+q_j(x)$ with $q_j\in C^\infty(M;\mathbb R)$ independent of time. The beams must satisfy the following additional supplier conditions: the observed ray has a compact embedded phase-space extension with immersed base projection; its two endpoint cutoff neighborhoods lie outside the measurement cylinder; and the approximate forward beam vanishes near $t=0$, while the approximate terminal beam vanishes near $t=T$. These temporal vanishing conditions are separate from the location of the spatial endpoint residuals. Use physical time along the unit-speed spatial ray and the normalization $|\partial_t\phi|=1$, with initial transported mass one. Then the Gaussian-beam lemma gives the unweighted ray measure and residual $O(\lambda^{-N})$ throughout $Q$. Apply the wave energy wellposedness theorem with zero boundary data and zero initial data for the forward correction, or zero terminal data for the terminal correction, to the negative residual. Since $\|P_ju_{j,\lambda}^{\mathrm{app}}\|_{L^1_tL^2_x}\le\sqrt T\|P_ju_{j,\lambda}^{\mathrm{app}}\|_{L^2(Q)}$, its energy estimate gives an $L^2(Q)$ correction $O(\lambda^{-N})$, hence the assumed $O(\lambda^{-1/2})$ order after choosing $N\ge1$. The exact waves retain the actual approximate boundary traces. This application asserts no temporal vanishing merely from an extension outside the measurement domain; the generic error estimate above only needs its explicitly stated norm and product-limit hypotheses.

## Example references

[[lem-ip-gaussian-beam-null-bicharacteristic]]

[[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]]

[[thm-holder-inequality-for-integrals]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[def-riemannian-speed-and-length]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** A smooth coefficient $a$ on the compact spacetime cylinder; two uniformly $L^2$-bounded approximate solutions; and two $L^2$ correction remainders of order $\lambda^{-1/2}$.

[F1] For real-valued square-integrable $v,w$, [[thm-holder-inequality-for-integrals]] gives $\int|vw|\le\|v\|_2\|w\|_2$. For complex-valued $v,w$, apply that inequality to the real functions $|v|$ and $|w|$; $|vw|=|v||w|$ and their $L^2$ norms are unchanged.

## Proof

1.1 Expand the exact product: $$u_{1,\lambda}u_{2,\lambda}-u_{1,\lambda}^{\mathrm{app}}u_{2,\lambda}^{\mathrm{app}}=R_{1,\lambda}u_{2,\lambda}^{\mathrm{app}}+u_{1,\lambda}^{\mathrm{app}}R_{2,\lambda}+R_{1,\lambda}R_{2,\lambda}.$$ Multiplying by $a$, integrating, and applying [F1] to each term gives an absolute value at most $$\|a\|_{L^\infty(Q)}\big(\|R_{1,\lambda}\|_2\|u_{2,\lambda}^{\mathrm{app}}\|_2+\|u_{1,\lambda}^{\mathrm{app}}\|_2\|R_{2,\lambda}\|_2+\|R_{1,\lambda}\|_2\|R_{2,\lambda}\|_2\big).$$ [F1, given, algebra]

2.1 By the hypotheses, the preceding expression is bounded by $\|a\|_\infty(2C_0C_1\lambda^{-1/2}+C_1^2\lambda^{-1})$, which is $O(\lambda^{-1/2})$ for $\lambda\ge1$. Since this difference tends to zero, the assumed approximate-product limit passes unchanged to the exact product. [step 1.1, given, algebra] ∎

---
id: thm-ip-fourier-slice-identity
kind: theorem
title: The Fourier-slice identity for the Euclidean Radon transform
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
aliases: []
deps:
  - thm-ftc-second-part
  - thm-chain-rule-for-total-derivatives
  - def-ip-2d-radon-transform
  - cor-change-of-variables-for-compactly-supported-functions
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-riemann-fubini-on-product-rectangles
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, RICAM lecture notes v1, §2.1: Radon transform in R²"
      url: "https://users.jyu.fi/~salomi/lecturenotes/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–7: Fourier-slice theorem and its Fubini proof."
    - title: "Frank Natterer, X-ray Tomography, in Inverse Problems and Imaging"
      url: "https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf"
      locator: "§2.1, pp. 18–20, Theorem 2.1: projection-slice theorem and line-coordinate proof."
---

## Statement

For every $f\in C_c^\infty(\mathbb R^2;\mathbb C)$, every unit normal $\theta\in S^1$, and every $\sigma\in\mathbb R$, the compact-support Fourier transform of the line data in the offset variable equals the restriction of the two-dimensional Fourier transform to the line in frequency space with direction $\theta$:
$$\widehat{Rf}(\theta,\sigma)=\widehat f(\sigma\theta).$$

## Statement references

[Mikko Salo, RICAM lecture notes v1, §2.1](https://users.jyu.fi/~salomi/lecturenotes/RICAM_notes_v1.pdf)

[Frank Natterer, “X-ray Tomography,” §2.1](https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf)

## Facts & Assumptions

**Given:** $f\in C_c^\infty(\mathbb R^2;\mathbb C)$, $\theta\in S^1$, and $\sigma\in\mathbb R$.

[F1] [[def-ip-2d-radon-transform]]: $Rf(\theta,s)=\int_{\mathbb R}f(s\theta+t\theta^\perp)\,dt$, and the compact-support Fourier transform uses the phase $e^{-2\pi i x\cdot\xi}$.

[F2] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: a continuous real function on a compact Jordan set is Riemann integrable; apply this to real and imaginary parts on a bounding rectangle.

[F3] [[thm-riemann-fubini-on-product-rectangles]]: for a Riemann-integrable function on a product of closed rectangles, the iterated Riemann integrals equal the product-rectangle integral when the sections are integrable.

[F4] [[cor-change-of-variables-for-compactly-supported-functions]]: an injective $C^1$ change of variables with nonvanishing Jacobian carries a compactly supported Riemann integral to the integral multiplied by the absolute Jacobian.

[F5] [[thm-ftc-second-part]]: if a real function $G$ is differentiable on $[a,b]$, including one-sided endpoint derivatives, and $G'$ is Riemann integrable there, then $\int_a^bG'=G(b)-G(a)$.

[F6] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable maps between finite-dimensional real spaces, $D(g\circ T)=Dg(T)\circ DT$. Apply this separately to real and imaginary parts; when $T$ is linear, $DT=T$ is constant, so repeated application gives the corresponding directional derivatives of a smooth composition.

## Proof

1.1 Fix $\theta$ and define $T(s,t)=s\theta+t\theta^\perp$ and $F(s,t)=f(T(s,t))$. The columns of $T$ are an orthonormal positively oriented basis, so $T$ is a linear diffeomorphism and $K:=T^{-1}(\operatorname{supp}f)$ is compact. Choose $M>0$ with $K\subset[-M,M]^2$. Then $F(s,t)=0$ for $|t|>M$, and $Rf(\theta,s)=\int_{-M}^{M}F(s,t)\,dt$; it vanishes unless $s$ belongs to the compact projection of $K$ onto the first coordinate. [given, F1, choose]

2.1 Write $f=f_{\mathrm R}+if_{\mathrm I}$ and $F_\nu=f_\nu\circ T$ for $\nu\in\{\mathrm R,\mathrm I\}$. Each $f_\nu$ is real smooth; since $DT$ is constant, repeated applications of [F6] give $\partial_s^kF_\nu(s,t)=(\theta\cdot\nabla)^k f_\nu(T(s,t))$. Thus, for each integer $k\ge0$, $\partial_s^kF$ is continuous. On every compact $s$-interval, $\partial_s^{k+1}F$ is uniformly continuous on the product with $[-M,M]$. For each real component, apply [F5] on $[0,1]$ to $u\mapsto\partial_s^kF_\nu(s+uh,t)$. By [F6] its derivative is $h\,\partial_s^{k+1}F_\nu(s+uh,t)$, continuous and hence integrable by [F2], with the same one-sided derivatives at the endpoints. Combining the two real equalities and dividing by $h$ gives, for sufficiently small nonzero $h$ of either sign, $$\frac{\partial_s^kF(s+h,t)-\partial_s^kF(s,t)}{h}=\int_0^1\partial_s^{k+1}F(s+uh,t)\,du.$$ The right side converges uniformly for $t\in[-M,M]$ to $\partial_s^{k+1}F(s,t)$ as $h\to0$. Integrating in $t$ therefore proves inductively that $\frac{d^k}{ds^k}Rf(\theta,s)=\int_{-M}^{M}\partial_s^kF(s,t)\,dt$ for every $k$, and uniform continuity also makes each derivative continuous in $s$. Thus $Rf(\theta,\cdot)\in C_c^\infty(\mathbb R;\mathbb C)$, so its Fourier transform in [F1] is defined. [F1, F2, F5, F6, step 1.1]

2.2 Put $H(s,t)=f(T(s,t))e^{-2\pi i\sigma s}$. This is continuous and supported in $K$. Choose a nondegenerate product rectangle containing $K$. By [F2], the real and imaginary parts of $H$ are Riemann integrable there, and all their one-variable sections are continuous and hence Riemann integrable. [F2, step 1.1, choose]

3.1 By [F1], $\widehat{Rf}(\theta,\sigma)$ is the iterated integral of $H$, first in $t$ and then in $s$. Apply the real-valued Riemann-Fubini theorem [F3] separately to $\operatorname{Re}H$ and $\operatorname{Im}H$ on the chosen rectangle, then combine the two equalities. Since $H$ vanishes outside that rectangle, this gives $$\widehat{Rf}(\theta,\sigma)=\int_{\mathbb R^2}f(s\theta+t\theta^\perp)e^{-2\pi i\sigma s}\,ds\,dt.$$ [F1, F3, step 2.1, step 2.2]

4.1 Apply [F4] to $T$ separately for the real and imaginary parts of the compactly supported Riemann integrand in step 3.1. Since $s=x\cdot\theta$ and $|\det DT|=1$, the integral becomes $\int_{\mathbb R^2}f(x)e^{-2\pi i\sigma x\cdot\theta}\,dx=\widehat f(\sigma\theta)$ by [F1]. This is the claimed identity. [F1, F4, step 3.1] ∎

## References

[[def-ip-2d-radon-transform]]

[[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]

[[thm-riemann-fubini-on-product-rectangles]]

[[cor-change-of-variables-for-compactly-supported-functions]]

[[thm-ftc-second-part]]

[[thm-chain-rule-for-total-derivatives]]

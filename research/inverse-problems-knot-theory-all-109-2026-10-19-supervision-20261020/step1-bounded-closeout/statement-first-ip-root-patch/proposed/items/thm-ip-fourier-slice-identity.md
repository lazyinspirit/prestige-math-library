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

## Proof

1.1 Fix $\theta$ and define $T(s,t)=s\theta+t\theta^\perp$. Its columns are an orthonormal positively oriented basis, so $T$ is a linear diffeomorphism with $|\det DT|=1$. The function $(s,t)\mapsto f(T(s,t))e^{-2\pi i\sigma s}$ is continuous and compactly supported because $T^{-1}(\operatorname{supp}f)$ is compact. Choose a nondegenerate closed rectangle containing this support; [F2] makes the real and imaginary parts Riemann integrable there. [given, F1, F2, choose]

2.1 By [F1], the iterated integral is $\widehat{Rf}(\theta,\sigma)$. Riemann-Fubini [F3] on the chosen rectangle, extended by zero outside it, gives $\widehat{Rf}(\theta,\sigma)=\int_{\mathbb R^2}f(s\theta+t\theta^\perp)e^{-2\pi i\sigma s}\,ds\,dt$. [F1, F3, step 1.1]

3.1 Apply [F4] to $T$ separately for real and imaginary parts. Since $s=x\cdot\theta$ and $|\det DT|=1$, the integral in step 2.1 becomes $\int_{\mathbb R^2}f(x)e^{-2\pi i\sigma x\cdot\theta}\,dx=\widehat f(\sigma\theta)$ by [F1]. This is the claimed identity. [F1, F4, step 2.1] ∎

## References

[[def-ip-2d-radon-transform]]

[[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]

[[thm-riemann-fubini-on-product-rectangles]]

[[cor-change-of-variables-for-compactly-supported-functions]]

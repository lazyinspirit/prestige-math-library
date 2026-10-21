---
id: thm-ip-generalized-fno-uniform-approximation-on-compact-sets
kind: theorem
title: Generalized FNO approximation on compact sets
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-countable-choice
  - def-ip-generalized-fourier-neural-operator
  - lem-ip-boundary-chart-lifting-and-fourier-projection
  - lem-ip-finite-dimensional-neural-universal-approximation
  - lem-ip-fno-torus-compact-universality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "§4.4, Theorem 4.8 and its complete proof, printed pp. 23–25."
    - title: "Nikola Kovachki et al., On Universal Approximation and Error Bounds for Fourier Neural Operators"
      url: "https://jmlr.org/papers/volume22/21-0806/21-0806.pdf"
      locator: "Theorem 5 and complete proof in Appendix D.1–D.4."
---

## Statement

Assume Countable Choice. Let $M=\partial\Omega\times\partial\Omega$ for a nonempty bounded smooth domain $\Omega\subset(0,1)^d$, $d\ge2$, and let $a,b\in\mathbb N$ be positive finite channel dimensions. If $T:L^2(M;\mathbb R^a)\to L^2(\Omega;\mathbb R^b)$ is continuous, then for every compact set $C\subset L^2(M;\mathbb R^a)$ and every $\varepsilon>0$, there exists a generalized Fourier neural operator $\Psi:L^2(M;\mathbb R^a)\to L^2(\Omega;\mathbb R^b)$ using a fixed smooth globally Lipschitz nonpolynomial activation and the boundary charts of the statement such that
$$\sup_{h\in C}\|T(h)-\Psi(h)\|_{L^2(\Omega;\mathbb R^b)}<\varepsilon.$$

## Statement references

[[def-ip-generalized-fourier-neural-operator|The generalized FNO architecture, chart lifting and dimension-reduction layer.]]

[de Hoop et al., §4.4, Theorem 4.8 and proof](https://arxiv.org/pdf/2511.20361)

[Kovachki et al., Theorem 5 and Appendix D: compact-uniform FNO approximation](https://jmlr.org/papers/volume22/21-0806/21-0806.pdf)

## Facts & Assumptions

**Given:** $\Omega$, $M$, $T$, compact $C$, and $\varepsilon$ as in the statement.

[F1] There are bounded chart maps $G_a:L^2(M;\mathbb R^a)\to\bigoplus_{j,k}L^2(\mathbb T^{2d-2};\mathbb R^a)$ and $L_a$ in the reverse direction, obtained by applying the scalar chart maps componentwise, with $L_aG_a=I$. ([[lem-ip-boundary-chart-lifting-and-fourier-projection]])

[F2] On a torus, a Fourier neural operator with the specified activation uniformly approximates every continuous map on every compact input set in the $L^2$ norm. ([[lem-ip-fno-torus-compact-universality]])

[F3] Zero extension from $L^2(\Omega)$ to $L^2(\mathbb T^d)$ is isometric because $\Omega\subset(0,1)^d$; the product extension constant in the last $d-2$ coordinates is also isometric under normalized Haar measure.

[F4] The generalized-FNO architecture contains the zero operator by setting its finite-layer coefficients to zero. ([[def-ip-generalized-fourier-neural-operator]])

[A1] Countable Choice is assumed at the finite boundary-chart partition interface. ([[def-countable-choice]])

## Proof

**Given:** Countable Choice and the data in the statement.

1.1 If $C=\varnothing$, choose the zero generalized FNO from [F4]; the uniform error condition is vacuous. Otherwise let $n=2d-2$ and let $J_0:L^2(\Omega;\mathbb R^b)\to L^2(\mathbb T^d;\mathbb R^b)$ be zero extension. Let $I_{d,n}:L^2(\mathbb T^d;\mathbb R^b)\to L^2(\mathbb T^n;\mathbb R^b)$ send $g(x_1,\ldots,x_d)$ to the function constant in the last $n-d=d-2$ coordinates. The chart-pair components identify $\bigoplus_{j,k}L^2(\mathbb T^n;\mathbb R^a)$ with $L^2(\mathbb T^n;\mathbb R^{J^2a})$. Define $S:=I_{d,n}J_0TL_a$ on this direct-sum space. This is continuous by [F1] and [F3], and $G_a(C)$ is compact because $G_a$ is continuous and $C$ is compact. [A1, F1, F3, F4, given, construct]

2.1 Apply [F2] to the continuous map $S:L^2(\mathbb T^n;\mathbb R^{J^2a})\to L^2(\mathbb T^n;\mathbb R^b)$ on compact $G_a(C)$ with tolerance $\varepsilon$. There is a torus FNO $\Phi$ such that $\sup_{u\in G_a(C)}\|S(u)-\Phi(u)\|_{L^2(\mathbb T^n;\mathbb R^b)}<\varepsilon$. [F2, step 1.1, choose]

3.1 Set $\mathbb T^0=\{()\}$ with unit mass, so the following integral is the identity when $d=2$. For any finite channel dimension $c$, define $A_c:L^2(\mathbb T^n;\mathbb R^c)\to L^2(\mathbb T^d;\mathbb R^c)$ by $(A_cv)(x)=\int_{\mathbb T^{d-2}}v(x,z)\,dz$, componentwise. Cauchy–Schwarz on the unit-measure torus and Fubini give $\|A_c\|\le1$. Let $R$ be restriction from $\mathbb T^d$ to $\Omega$, also of norm at most one. Since $A_bI_{d,n}=I$, $RJ_0=I$, and $L_aG_a=I$, the generalized FNO $\Psi:=R\circ A_b\circ\Phi\circ G_a$ satisfies
$$\|T(h)-\Psi(h)\|_{L^2(\Omega;\mathbb R^b)}=\|RA_b(S(G_ah)-\Phi(G_ah))\|_{L^2(\Omega;\mathbb R^b)}\le\|S(G_ah)-\Phi(G_ah)\|_{L^2(\mathbb T^n;\mathbb R^b)}<\varepsilon$$
for every $h\in C$. Write the torus FNO as $\Phi=Q_\Phi\circ\Phi_0$, where $\Phi_0$ ends before its final constant affine channel map $Q_\Phi(v)=Wv+c$ and has $r$ output channels. Its initial affine channel lift is composed into the first affine part of $\Phi_0$ after $G_a$. Normalized averaging commutes with the final map, $A_bQ_\Phi=Q_\Phi A_r$, and restriction commutes with the same pointwise map. Hence $R A_b\Phi G_a=Q_\Phi R A_r\Phi_0G_a$. This has the generalized architecture: identity pointwise lift, chart lift $G_a$, torus layers $\Phi_0$, the constant-kernel dimension reduction $A_r$, restriction $R$, and final pointwise affine map $Q_\Phi$. [F1, F3, step 1.1, step 2.1, given, algebra] ∎

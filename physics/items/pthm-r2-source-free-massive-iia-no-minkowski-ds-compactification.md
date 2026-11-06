---
id: pthm-r2-source-free-massive-iia-no-minkowski-ds-compactification
kind: physics-theorem
title: No smooth compact Minkowski/de Sitter solution in the source-free Maldacena–Nuñez massive-IIA invariant ansatz
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps:
  - lem-r2-conformal-warped-external-ricci-trace
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
dependency_roles:
  lem-r2-conformal-warped-external-ricci-trace: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional source-free, smooth compact, boundaryless, two-derivative massive Type IIA equations in the Maldacena–Nuñez field basis with nonzero Romans mass and exact invariant Minkowski or de Sitter external geometry. D6/O6 sources, boundaries, higher-derivative terms, time dependence, and any unproved map to a different massive-IIA action basis are outside the claim."
sources:
  references:
    - title: "Juan Maldacena and Carlos Nuñez, Supergravity description of field theories on curved manifolds and a no go theorem, arXiv:hep-th/0007018v2"
      url: "https://arxiv.org/pdf/hep-th/0007018v2"
      locator: "§6.3, equations (41)–(45), PDF pp. 26–27; source-free massive-IIA metric/dilaton equations and compact integration."
    - title: "Thomas Van Riet and Gianluca Zoccarato, Beginners lectures on flux compactifications and related Swampland topics, arXiv:2305.01722"
      url: "https://arxiv.org/pdf/2305.01722"
      locator: "§§4.2–4.3, equations (4.35)–(4.50) and the type-IIA volume/dilaton no-go discussion; used as independent scope context, not as the ten-dimensional proof."
---

## Statement

Use natural units $\hbar=c=1$, length-valued coordinates, and dimensionless metric components. Let $2\le d<10$ and let $X$ be a nonempty smooth compact boundaryless manifold of dimension $10-d$ with a smooth positive-definite metric $\widehat g$. Internal integrals use its Riemannian volume density $d\widehat\mu=\sqrt{\det\widehat g}\,|dy^1\cdots dy^{10-d}|$. Let $(Y_d,g_d)$ be either Minkowski spacetime $(\mathbb R^d,\eta)$, where $\eta=\operatorname{diag}(-1,1,\ldots,1)$, or de Sitter space
$$dS_d(H_d)=\left\{z\in\mathbb R^{1,d}:-z_0^2+\sum_{i=1}^d z_i^2=H_d^{-2}\right\}$$
with its induced Lorentzian metric, where $H_d>0$ has units of inverse length. Its scalar curvature is $R_d=0$ in the Minkowski case and $R_d=d(d-1)H_d^2>0$ in the de Sitter case. Use
$$ds_{10}^2=\Omega(y)^2\left(ds_d^2+\widehat g_{mn}(y)dy^m dy^n\right),$$
where $\Omega\in C^\infty(X,(0,\infty))$. Let $\phi\in C^\infty(X,\mathbb R)$ be dimensionless; let $m\ne0$ be the constant Romans mass with units of inverse length; let $B_2$ be a real smooth antisymmetric rank-two potential with dimensionless coordinate components; and let $G_3,F_4$ be real smooth antisymmetric rank-three and rank-four field strengths with coordinate components of units inverse length. Use the source-free Maldacena–Nuñez field basis, $B^2=B_{MN}B^{MN}$, $G^2=G_{MNP}G^{MNP}$, and $F^2=F_{MNPQ}F^{MNPQ}$, with no factorial in these contractions. Adopt the two equations
$$\begin{aligned} R_{MN}={}&\frac{m^2}{16}e^{-5\phi}g_{MN}+2\partial_M\phi\,\partial_N\phi +e^{2\phi}\left(G_M{}^{PQ}G_{NPQ}-\frac1{12}g_{MN}G^2\right)\\ &+2m^2e^{-3\phi}\left(B_M{}^PB_{NP}-\frac1{16}g_{MN}B^2\right) +\frac13e^{-\phi}\left(F_M{}^{PQR}F_{NPQR}-\frac3{32}g_{MN}F^2\right),\\ 0={}&\Box_g\phi+\frac{5m^2}{8}e^{-5\phi}+\frac1{48}e^{-\phi}F^2-\frac16e^{2\phi}G^2+\frac{3m^2}{4}e^{-3\phi}B^2 . \end{aligned}$$
Assume each antisymmetric tensor in the adopted equations has only wholly internal components or components proportional to the external volume form times an internal form; the latter are absent when the tensor rank is less than $d$. This is the full external-isometry-invariant ansatz used here. Assume no localized source terms, no boundary, and no higher-derivative corrections. Then these equations have no solution with either exact de Sitter or exact Minkowski external geometry. This is a source-free statement; it does not apply to O6/D6-supported compactifications.

## Statement references

[Maldacena and Nuñez, §6.3](https://arxiv.org/pdf/hep-th/0007018v2)

[Van Riet and Zoccarato, §§4.2–4.3](https://arxiv.org/pdf/2305.01722)

## Facts & Assumptions

**Given:** The metric, smooth compact internal space, field equations, source-free hypothesis, and nonzero constant $m$ in the Statement. In particular $m^2>0$, $\Omega>0$, and every field is smooth on all of $X$.

[A1] Adopt the Maldacena–Nuñez metric and dilaton equations (41)–(42) in exactly the displayed field basis. They are not derived from the different Bergshoeff/Romans action basis; no such field-basis map is assumed.

[F1] [[lem-r2-conformal-warped-external-ricci-trace]]: the external Ricci block of the conformal product metric is determined by $\widehat\Delta\log\Omega+8|d\log\Omega|_{\widehat g}^2=\widehat\Delta\Omega^8/(8\Omega^8)$.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]: on an oriented boundaryless smooth manifold, finite nonnegative smooth chart cutoffs with compact supports sum to one near a compact set, and an exact compactly supported top form integrates to zero. Step 3.1 applies this interface only to coordinate domains with their coordinate orientations and constructs the density version on $X$ locally.

## Proof

1.1 Split each field into its wholly internal component $Q_e$ and its component $Q_l$ with all $d$ external indices. In the metric equation [A1], contract the external indices with $g^{\mu\nu}=\Omega^{-2}(g_d)^{\mu\nu}$ and divide by $d$ and use [F1]. Antisymmetry gives $g^{\mu\nu}G_{\mu}{}^{PQ}G_{\nu PQ}=(d/3)G_l^2$, $g^{\mu\nu}B_{\mu}{}^{P}B_{\nu P}=(d/2)B_l^2$, and $g^{\mu\nu}F_{\mu}{}^{PQR}F_{\nu PQR}=(d/4)F_l^2$; these contractions vanish for wholly internal components. Separating internal and external terms yields $$\begin{aligned} \frac{\widehat\Delta\Omega^8}{8\Omega^{10}} ={}&\Omega^{-2}\lambda +\left[-\frac{m^2}{16}e^{-5\phi}+\frac1{12}e^{2\phi}G_e^2+\frac{m^2}{8}e^{-3\phi}B_e^2+\frac1{32}e^{-\phi}F_e^2\right]\\ &-\left[\mathbf1_{d\le3}\frac14e^{2\phi}G_l^2+\mathbf1_{d\le2}\frac{7m^2}{8}e^{-3\phi}B_l^2+\mathbf1_{d\le4}\frac5{96}e^{-\phi}F_l^2\right], \end{aligned}$$ where $\lambda=R_d/d$ and $\mathbf1_P$ is $1$ if $P$ holds and $0$ otherwise. This identity follows from the displayed metric equation and [F1]; unlike the printed equation (43), the normalized trace has no factor $d$ multiplying the matter bracket. [A1, F1, algebra]

2.1 Since $\phi=\phi(y)$, the ten-dimensional scalar wave operator is $\Box_g\phi=\Omega^{-10}\widehat\nabla_m(\Omega^8\widehat\nabla^m\phi)$: substitute $\sqrt{|g|}=\Omega^{10}\sqrt{|g_d|}\sqrt{\widehat g}$ and $g^{mn}=\Omega^{-2}\widehat g^{mn}$ in the coordinate divergence formula. Multiply step 1.1 by $10\Omega^{10}$ and use the dilaton equation [A1] multiplied by $\Omega^{10}$. Writing $0=\Box_g\phi+P$ gives $-\Box_g\phi=P$, so subtract the wave term from the left and add $P$ to the right. The Romans terms $-10m^2e^{-5\phi}/16$ and $+5m^2e^{-5\phi}/8$ cancel. Combining the remaining coefficients gives $$\begin{aligned} \frac{10}{8}\widehat\Delta\Omega^8-\widehat\nabla_m(\Omega^8\widehat\nabla^m\phi) =10\lambda\Omega^8+\Omega^{10}\bigg[& \frac23e^{2\phi}G_e^2+2m^2e^{-3\phi}B_e^2+\frac13e^{-\phi}F_e^2\\ &-\mathbf1_{d\le3}\frac83e^{2\phi}G_l^2-\mathbf1_{d\le2}8m^2e^{-3\phi}B_l^2-\mathbf1_{d\le4}\frac12e^{-\phi}F_l^2\bigg]. \end{aligned}$$ Every coefficient here is derived from the adopted equations (41)–(42): for example $10/12-1/6=2/3$, $10/8+3/4=2$, and $10/32+1/48=1/3$. This corrects both the trace normalization and the wave-term sign in the printed (43)–(45); compact integration eliminates both divergences regardless of that sign. [A1, step 1.1, algebra]

3.1 For each point $p$ of possibly nonorientable $X$, take a coordinate domain $U$ containing $p$ and orient $U$ by its coordinates. Apply [F2] on this oriented boundaryless manifold $U$ to the compact set $\{p\}$; the sum of its finitely many cutoffs is a nonnegative smooth function $b$ with compact support in $U$, equal to one near $p$. Extend $b$ by zero to $X$. The positivity sets of all such chart-and-function pairs cover $X$; compactness gives finitely many pairs $(U_i,b_i)$ whose positivity sets cover $X$, without selecting one pair for every point. Then $B=\sum_i b_i>0$ on $X$, and $\chi_i=b_i/B$ are smooth, nonnegative, supported compactly in $U_i$, and satisfy $\sum_i\chi_i=1$. For any smooth vector field $V$, define $\widehat{\operatorname{div}}V=(\det\widehat g)^{-1/2}\partial_m((\det\widehat g)^{1/2}V^m)$. In each chart the compactly supported coordinate derivative integrates to zero, giving $\int_X\widehat{\operatorname{div}}(\chi_iV)\,d\widehat\mu=0$. Summing and using $\sum_i d\chi_i=0$ proves $\int_X\widehat{\operatorname{div}}V\,d\widehat\mu=0$ without choosing an orientation. On smooth compact $X$, integrate the identity in step 2.1. The left side is the sum of two exact-divergence integrals and vanishes by this density identity. Internal squares are nonnegative because $\widehat g$ is positive definite. Every external square is nonpositive because it has one timelike external index, and each such term has a minus sign; all coefficients are positive, including those multiplied by $m^2$. Thus the bracket is nonnegative. For de Sitter, $\lambda=(d-1)H_d^2>0$, so $10\lambda\int_X\Omega^8d\widehat\mu>0$, contradicting the zero integral. [A1, F2, step 2.1, algebra]

4.1 For Minkowski, $\lambda=0$. The integral of the continuous nonnegative bracket in step 2.1 is zero, so every displayed internal and allowed external form component vanishes pointwise. With $B_2=G_3=F_4=0$, integrate the dilaton equation [A1] against $\Omega^{10}d\widehat\mu$. The wave term is $\widehat\nabla_m(\Omega^8\widehat\nabla^m\phi)$ and has zero integral by step 3.1, but the remaining integral $\frac{5m^2}{8}\int_X\Omega^{10}e^{-5\phi}d\widehat\mu$ is strictly positive because $m\ne0$, $\Omega>0$, and $\phi$ is smooth. This contradiction excludes Minkowski. [A1, F2, step 2.1, step 3.1, algebra] ∎

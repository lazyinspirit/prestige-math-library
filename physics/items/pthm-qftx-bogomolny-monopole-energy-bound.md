---
id: pthm-qftx-bogomolny-monopole-energy-bound
kind: physics-theorem
title: Classical SU(2) monopole energy bound and Bogomolny equations
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-bps-solitons-monopoles
dependency_level: 3
deps:
  - def-countable-choice
  - def-qftx-adjoint-higgs-monopole-sector
  - lem-qftx-principal-curvature-cartan-bianchi
  - lem-qftx-su2-compact-nonabelian-invariant-form
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-adjoint-higgs-monopole-sector: formulation-prerequisite
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
proof_strategy: direct
axiom_base: "ZF + AC_omega, inherited through the gauge-geometry and Euclidean divergence suppliers; no full Axiom of Choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "Conditional classical energy identity and lower bound for smooth finite-energy fields in the specified static SU(2) adjoint-Higgs Prasad–Sommerfield sector. It asserts neither existence of a saturating solution nor any quantum particle or supersymmetry state."
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://arxiv.org/pdf/hep-th/0509216
      locator: "§1.1, normalization footnote on printed p. 6 (PDF p. 7), and §2.1.2, equations (2.16)–(2.18), printed p. 43 (PDF p. 44): static energy, Bianchi surface term, Bogomolny square completion, sign-dependent first-order equations. Tong's energy coefficient 1/e^2 and surface coefficient 2/e^2 are converted by g^2=e^2: kappa is twice the normalized Hermitian matrix trace, so 1/(2g^2) kappa equals 1/e^2 Tr."
    - title: "Jeffrey A. Harvey, Magnetic Monopoles, Duality, and Supersymmetry"
      url: https://arxiv.org/pdf/hep-th/9603086
      locator: "§2.1, equations (2.3)–(2.6), printed p. 19 (PDF p. 20): Bianchi integration by parts, positive-charge square completion, and the sign-reversed bound. Harvey uses B_i=-epsilon_ijk F_jk/2 and e inside D; this item proves the identity in its own stated convention."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume $\mathrm{AC}_\omega$. Use natural units on Minkowski $\mathbb R^{1,3}$ with $\eta=\operatorname{diag}(-1,1,1,1)$ and oriented Euclidean spatial slice with $\epsilon_{123}=1$. Fix the global group $SU(2)$, basis $T_a=-i\sigma_a/2$, and positive $\operatorname{Ad}$-invariant form $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ with $\kappa(T_a,T_b)=\delta_{ab}$. Let $g>0$ be dimensionless and let $A_i,\Phi$ be smooth static fields in the zero-potential adjoint-Higgs model, with $[A_i]=[\Phi]=\mathrm{length}^{-1}$, $F_{ij}=\partial_iA_j-\partial_jA_i+[A_i,A_j]$, $D_i\Phi=\partial_i\Phi+[A_i,\Phi]$, and $B_i=\tfrac12\epsilon_{ijk}F_{jk}$. Require the model's smooth finite-energy boundary reduction: $|\Phi|_\kappa\to v>0$ for a fixed $v$ of dimension $\mathrm{length}^{-1}$, with $n_\infty(\omega)=\lim_{R\to\infty}\Phi(R\omega)/v$ in $C^\infty(S^2,\mathfrak{su}(2))$. Use the adapted limiting connections $\mathcal A_{\alpha,\infty}$ of the static-sector Definition: the tangential condition is $[\mathcal A_{\alpha,\infty},T_3]=0$ in each adapted frame. The scaled radial limit $B_\infty(\omega):=\lim_{R\to\infty}R^2\sum_i\omega_iB_i(R\omega)$ exists uniformly on each closed hemisphere and satisfies $[B_\infty(\omega),n_\infty(\omega)]=0$. Suppose the energy

$$E=\frac{1}{2g^2}\int_{\mathbb R^3}\sum_i\bigl(\kappa(B_i,B_i)+\kappa(D_i\Phi,D_i\Phi)\bigr)\,d^3x$$

is finite and the model's asymptotic reduction and surface limit

$$m=\lim_{R\to\infty}\int_{S_R^2}\kappa(\Phi,B_i)\hat x_i\,dS$$

exist. Put $T=m/g^2$. Then both identities hold:

$$E=\frac{1}{2g^2}\int_{\mathbb R^3}\sum_i\kappa(B_i-D_i\Phi,B_i-D_i\Phi)\,d^3x+T,$$

$$E=\frac{1}{2g^2}\int_{\mathbb R^3}\sum_i\kappa(B_i+D_i\Phi,B_i+D_i\Phi)\,d^3x-T.$$

Consequently $E\ge |T|$. If $T>0$, equality holds exactly when $B_i=D_i\Phi$ for every $i$ and every $x$; if $T<0$, equality holds exactly when $B_i=-D_i\Phi$ everywhere. If $T=0$, equality holds exactly when $B_i=0$ and $D_i\Phi=0$ everywhere. These are conditional classical deductions for the adopted energy functional; the word BPS here refers only to classical energy saturation and asserts no quantum state or supersymmetry central-charge relation.

## Statement references

[David Tong, §2.1.2, the monopole equations and energy bound](https://arxiv.org/pdf/hep-th/0509216)

[Jeffrey A. Harvey, §2.1, symmetric monopoles and the Bogomolny bound](https://arxiv.org/pdf/hep-th/9603086)

[[def-qftx-adjoint-higgs-monopole-sector|Static SU(2) adjoint-Higgs model and boundary flux]]

[[lem-qftx-principal-curvature-cartan-bianchi|Principal curvature and Bianchi identity]]

[[lem-qftx-su2-compact-nonabelian-invariant-form|Positive invariant form on SU(2)]]

[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains|Divergence theorem on bounded C1 domains]]

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is the Axiom of Countable Choice, required by the exact Bianchi and divergence suppliers. [[def-countable-choice]]

[F1] The sector fixes $F_{ij}=\partial_iA_j-\partial_jA_i+[A_i,A_j]$, $D_i\Phi=\partial_i\Phi+[A_i,\Phi]$, $B_i=\tfrac12\epsilon_{ijk}F_{jk}$, the positive coupling $g$, the energy functional, and the finite surface limit. [[def-qftx-adjoint-higgs-monopole-sector]]

[F2] The form $\kappa$ is a positive-definite symmetric real bilinear form and is $\operatorname{Ad}$-invariant, so $\kappa([X,Y],Z)+\kappa(Y,[X,Z])=0$. [[lem-qftx-su2-compact-nonabelian-invariant-form]]

[F3] In every local section, $F=dA+\tfrac12[A\wedge A]$ and $D_AF=0$; contracting the latter with $\epsilon_{ijk}$ gives $D_iB_i=0$. [[lem-qftx-principal-curvature-cartan-bianchi]]

[F4] For a bounded $C^1$ domain and a $C^1$ vector field on its closure, the integral of the divergence equals the outward boundary flux; this theorem assumes $\mathrm{AC}_\omega$. [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

## Proof

**Given:** [A1], [F1]–[F4], smooth fields, and the finite-energy and surface-limit hypotheses.

1.1 Define $J_i=\kappa(\Phi,B_i)$. The product rule gives $\partial_iJ_i=\kappa(\partial_i\Phi,B_i)+\kappa(\Phi,\partial_iB_i)$. By [F1]–[F3], the sum is $\kappa(D_i\Phi,B_i)+\kappa(\Phi,D_iB_i)=\kappa(D_i\Phi,B_i)$: the two connection terms cancel by Ad-invariance and $D_iB_i=0$ by Bianchi. [A1, F1, F2, F3, algebra]

2.1 On each closed ball $B_R$, $J$ is $C^1$, so [F4] and step 1.1 give $\int_{B_R}\sum_i\kappa(D_i\Phi,B_i)\,d^3x=\int_{S_R^2}\kappa(\Phi,B_i)\hat x_i\,dS$. Positive definiteness in [F2] gives $2|\kappa(D_i\Phi,B_i)|\le\kappa(D_i\Phi,D_i\Phi)+\kappa(B_i,B_i)$, so finite energy makes the cross term integrable. Taking $R\to\infty$ and using the declared surface limit yields $\int_{\mathbb R^3}\sum_i\kappa(B_i,D_i\Phi)\,d^3x=m$. [A1, F1, F2, F4, step 1.1, algebra]

3.1 Expand the first square: its integral is $\int\sum_i\bigl(\kappa(B_i,B_i)+\kappa(D_i\Phi,D_i\Phi)-2\kappa(B_i,D_i\Phi)\bigr)\,d^3x$. By [F1] the first two terms give $2g^2E$, and by step 2.1 the cross term integrates to $2m$; multiplying by $1/(2g^2)$ and adding $T=m/g^2$ gives the first identity. Expanding with the plus sign changes the cross term to $+2m$, so subtracting $T$ gives the second identity. All integrals converge by [F1], [F2], and step 2.1. [F1, F2, step 2.1, algebra]

4.1 Each square integral in step 3.1 is nonnegative by [F2], giving $E\ge T$ and $E\ge -T$, hence $E\ge|T|$. For $T>0$, equality in $E\ge T$ holds exactly when the integral of the continuous nonnegative function $\sum_i\kappa(B_i-D_i\Phi,B_i-D_i\Phi)$ is zero, which is equivalent to $B_i=D_i\Phi$ everywhere; the converse follows from the first identity. For $T<0$, the second identity gives equivalently $B_i=-D_i\Phi$. For $T=0$, equality means $E=0$; positivity and continuity of the energy density imply $B_i=D_i\Phi=0$ everywhere, and these conditions also make $E=0$. [F1, F2, step 3.1, algebra] ∎

## Remarks

For anti-Hermitian $X,Y$, put $X_H=iX$ and $Y_H=iY$. Then $\kappa(X,Y)=2\operatorname{Tr}_2(X_HY_H)$. Consequently the energy coefficient $\kappa/(2g^2)$ becomes $\operatorname{Tr}_2/g^2$, and the surface coefficient $\kappa/g^2$ becomes $2\operatorname{Tr}_2/g^2$. Both match Tong's equation (2.16) at $g^2=e^2$. The proof is a classical model deduction and establishes no existence result for any specified topological sector.

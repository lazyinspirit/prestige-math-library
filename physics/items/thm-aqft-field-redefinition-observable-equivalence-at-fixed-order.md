---
id: thm-aqft-field-redefinition-observable-equivalence-at-fixed-order
kind: theorem
title: Fixed-order on-shell amplitude equivalence under local field redefinition
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
proof_strategy: direct
deps:
  - def-aqft-lsz-amplitude-data
dependency_roles:
  def-aqft-lsz-amplitude-data: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in
        effective theories at higher orders"
      url: "https://arxiv.org/pdf/1811.09413"
verification:
  precheck: pass
---
## Statement

Fix $N\geq0$ and put $R_N=\mathbb C[\epsilon]/(\epsilon^{N+1})$. For each regulator $\rho$, let $X_\rho=X_\rho^{\bar 0}\oplus X_\rho^{\bar 1}$ be the finite-dimensional graded field-coordinate space in the regulated perturbative LSZ amplitude datum. Its even coordinates are commuting, its odd coordinates generate the specified exterior algebra, and its source $J$ has commuting even components and anticommuting odd components paired in the declared order. Let $\mathcal I_\rho$ be the specified integration functional, consisting of the even-coordinate functional and ordered coefficient extraction over the odd coordinates, and let $S_{\rho,\epsilon}$ be an even action in its domain. Define
$$
Z_{\rho,\epsilon}[J]=\mathcal I_\rho\!\left(\exp\!\bigl(iS_{\rho,\epsilon}(\varphi)+i\langle J,\varphi\rangle\bigr)\right).
$$
Let $F_{\rho,\epsilon}$ be the actual parity-preserving local formal coordinate map used at regulator $\rho$, with $F_{\rho,0}=\operatorname{id}$ and an inverse modulo $\epsilon^{N+1}$. Use the full pullback $S_{\rho,\epsilon}\circ F_{\rho,\epsilon}$, retaining every term through order $N$, and define
$$
Z'_{\rho,\epsilon}[J]=\mathcal I_\rho\!\left(\exp\!\bigl(iS_{\rho,\epsilon}(F_{\rho,\epsilon}(\psi))+i\langle J,F_{\rho,\epsilon}(\psi)\rangle\bigr)\mathcal J_{F,\rho}(\psi)\right),
$$
where the full graded Jacobian factor satisfies
$$
\mathcal I_\rho(h(\varphi))=\mathcal I_\rho\!\left(h(F_{\rho,\epsilon}(\psi))\,\mathcal J_{F,\rho}(\psi)\right)
$$
for every admissible integrand $h$. Assume $Z_{\rho,\epsilon}[0]$ is a unit for each $\rho$, and that for the same ordered field components the connected Green functions defined by the graded source derivatives have a common regulator limit with stable external channels $a_j$, masses $m_{a_j}>0$, and nonzero simple-pole residues $Z_{a_j}$ at $s_j=m_{a_j}^2$, where $s_j=-\eta^{\mu\nu}p_{j,\mu}p_{j,\nu}$ and $\eta=\operatorname{diag}(-1,1,1,1)$. Use the same overlap matrix $U$, its channel-coordinate kernels $G_n$, and chosen roots $z_a^2=Z_a$ in both descriptions, with $Z_a^{1/2}=z_a$. Assume the pole factorization and joint limits in the LSZ datum exist:
$$
G_n(p_1,\ldots,p_n)=\left(\prod_{j=1}^n\frac{Z_{a_j}^{1/2}}{s_j-m_{a_j}^2}\right)\mathcal A_n(p_1,\ldots,p_n)+\text{terms missing at least one external pole},
$$
with normalized joint residue
$$
\mathcal A_n=\left(\prod_{j=1}^n Z_{a_j}^{-1/2}\right)\lim_{s_j\to m_{a_j}^2}\left(\prod_{j=1}^n(s_j-m_{a_j}^2)\right)G_n.
$$
Then $Z'_{\rho,\epsilon}[J]=Z_{\rho,\epsilon}[J]$ coefficientwise in $R_N$ for every regulator and source, and the normalized on-shell LSZ amplitudes agree coefficientwise modulo $\epsilon^{N+1}$. This equality follows from the actual regulated coordinate change, its full graded Jacobian, and the correspondingly transformed graded source; it does not assert equality of the two off-shell action expressions or that such regulated or LSZ data exist for a given quantum field theory.

## Statement references

[[def-aqft-operator-basis-quotient|Finite-order invariant operator-basis quotient]]

[[prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy|Fixed-order integration-by-parts and leading-equation field-redefinition relations]]

[[def-aqft-lsz-amplitude-data|Regulated perturbative LSZ amplitude data]]

[Criado–Pérez-Victoria, §2, equations (2.2)–(2.8), and Appendix B](https://arxiv.org/pdf/1811.09413)

## Facts & Assumptions

**Given:** the truncated ring $R_N$; the graded regulated field-coordinate and source algebras; the original actions and exact change-of-variables identities; and a common LSZ limit with the stated stable one-particle simple-pole data.

[F1] [[def-aqft-lsz-amplitude-data]]: the action is an even element of the graded coordinate algebra; odd field modes and sources lie in specified exterior algebras; integration over odd modes is ordered coefficient extraction; generating integrands and graded source derivatives lie in the integration domain; and LSZ amplitudes are normalized joint residues of the channel-coordinate kernels, using the supplied invertible overlap matrix and fixed nonzero square roots of the stable-pole residues.

[A1] For every regulator $\rho$, $F_{\rho,\epsilon}$ is the actual parity-preserving local formal map used in the transformed functional, has identity leading term, and has an inverse modulo $\epsilon^{N+1}$.

[A2] The factor $\mathcal J_{F,\rho}$ satisfies the exact graded change-of-variables identity for every integrand used in the source generating functional and its derivatives.

[A3] The common regulator limits, Fourier transforms, connected functions, pole factorizations, and joint residues exist with the stable-channel and nonzero-residue hypotheses in the Statement.

## Proof

**Given:** F1 and A1–A3.

1.1 Fix $\rho$ and apply A2 to $h(\varphi)=\exp(iS_{\rho,\epsilon}(\varphi)+i\langle J,\varphi\rangle)$. By F1 this generating integrand and its graded source derivatives lie in the domain of $\mathcal I_\rho$, so the exact identity gives $Z'_{\rho,\epsilon}[J]=Z_{\rho,\epsilon}[J]$ coefficientwise in $R_N$. [given, F1, A2]

2.1 At $J=0$ the partition values are equal by step 1.1 and are units by hypothesis. Division by this common unit shows that the normalized source functionals agree in the graded source algebra over $R_N$. [given, step 1.1, algebra]

3.1 Taking the formal logarithms of the equal normalized functionals in step 2.1 and then applying the same ordered left graded source derivatives gives equal connected Green functions for the original fields and for the transformed insertions $F_{\rho,\epsilon}(\psi)$. The supplied Fourier transform and removal of the same momentum-conservation delta function preserve equality. Passing to the common regulator limit preserves equality wherever that limit exists. [given, F1, A3, step 2.1]

4.1 The LSZ amplitudes are the normalized joint residues of these connected functions. By step 3.1 the component functions agree; applying the same $U^{-1}$ on each external leg gives equal channel-coordinate kernels. Their joint residues agree, and multiplication by the same fixed $z_{a_j}^{-1}$ gives equal normalized amplitudes coefficientwise through order $N$. If any required common limit or stable pole does not exist, the corresponding amplitude conclusion is not asserted. [given, F1, A3, step 3.1] ∎


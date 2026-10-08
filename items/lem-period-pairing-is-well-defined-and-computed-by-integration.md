---
id: lem-period-pairing-is-well-defined-and-computed-by-integration
kind: lemma
title: The period pairing is well defined and computed by integration
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 16
deps:
  - cor-complex-analytic-functions-have-local-primitives
  - cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-countable-choice
  - def-cover-small-singular-chain-subcomplex
  - def-de-rham-cohomology
  - def-de-rham-integration-cochain-map
  - def-meromorphic-differential-on-a-riemann-surface
  - def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface
  - def-period-pairing-and-period-lattice
  - def-riemann-surface-and-holomorphic-atlas
  - def-singular-chain-complex-and-singular-homology
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - def-smooth-manifold
  - def-smooth-singular-chain-and-cochain-complexes
  - def-kronecker-evaluation-pairing
  - lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision
  - lem-finite-choice
  - lem-holomorphic-differentials-form-a-g-dimensional-space
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - thm-barycentric-subdivision-is-a-chain-map
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-complex-numbers-are-the-real-coordinate-plane
  - thm-symplectic-homology-basis-compact-riemann-surface
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 7 §1, Proposition–Definition 7.1, printed p. 59, for the period homomorphism; Ch. 7 §2, printed p. 60, for the path-period ambiguity formula"
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81)
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2 §20.4, printed pp. 161–162, chains, cycles, homology and integration of closed differentials"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the full Axiom of Choice ([[def-axiom-of-choice]]), used for the symplectic basis and through countable choice in the de Rham comparison. Let $X$, $a_i,b_i$ and the period pairing $P$ be as in [[def-period-pairing-and-period-lattice]], with fixed continuous side-loop representatives $A_i,B_i$. For a continuous singular $1$-chain $c=\sum_j n_j\sigma_j$, define $\int_c\omega:=\sum_j n_j\int_{\sigma_j}\omega$ using the local-primitive path integral of [[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]]. Then:

1. For every $\gamma\in H_1(X;\mathbb Z)$, every continuous singular cycle $c$ representing $\gamma$, and every $\omega\in\Omega(X)$, $P(\gamma,\omega)=\int_c\omega$. If $c$ is piecewise $C^1$, this is the usual contour integral. Thus the value is independent of the cycle representative and of the chosen symplectic basis.
2. For every continuous singular $2$-chain $\beta$, $\int_{\partial\beta}\omega=0$. Hence integration against $\omega$ defines a homomorphism on singular homology.
3. $P$ is additive in $\gamma$ and $\mathbb C$-linear in $\omega$. If $g\ge1$, write $v=(a_1,b_1,\ldots,a_g,b_g)^{\mathsf T}$ and $p(\omega)=(P(v_i,\omega))_{i=1}^{2g}$. For a symplectic change of basis $v'=Uv$, with $U\in\mathrm{GL}_{2g}(\mathbb Z)$ and $UJU^{\mathsf T}=J$ for $J=\operatorname{diag}(J_2,\ldots,J_2)$ and $J_2=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, the new period vector is $p'(\omega)=Up(\omega)$.
4. Let $J_X:H^1_{\mathrm{dR}}(X;\mathbb R)\to H^1(X;\mathbb R)$ be the real de Rham comparison of [[cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology]]. For $\omega=\alpha+i\beta$ with real $1$-forms $\alpha=\operatorname{Re}\omega$ and $\beta=\operatorname{Im}\omega$, the complexified comparison satisfies
$$P(\gamma,\omega)=\langle J_X[\alpha],\gamma\rangle+i\langle J_X[\beta],\gamma\rangle,$$
where each bracket on the right is the real Kronecker pairing.

For $g=0$, $H_1(X;\mathbb Z)=0$, so $P=0$ and the period vector and basis-change statement are empty. Full AC is also sufficient for the countable-choice hypothesis in the de Rham comparison ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$ of genus $g$, the fixed symplectic basis and side-loop representatives used to define $P$, and a holomorphic differential $\omega$.

[F1] Under full AC, the fixed side-loop classes form a symplectic basis of $H_1(X;\mathbb Z)$; on this basis and its continuous loop representatives, the period definition uses integer coordinates and path integrals, and is additive in the homology class and complex-linear in $\omega$ ([[thm-symplectic-homology-basis-compact-riemann-surface]], [[def-period-pairing-and-period-lattice]]).

[F2] A holomorphic differential has a chart-independent path integral along every continuous path, additive under concatenation, sign-reversing under path reversal, and equal to the usual contour integral on piecewise-$C^1$ paths ([[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]]).

[F3] Every holomorphic differential on a compact Riemann surface is a closed smooth complex-valued $1$-form ([[lem-holomorphic-differentials-form-a-g-dimensional-space]]).

[F4] Every point has a coordinate disk on which the coefficient of $\omega$ has a holomorphic primitive ([[cor-complex-analytic-functions-have-local-primitives]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F5] For any open cover whose interiors cover $X$, a finite singular chain admits an iterated barycentric subdivision all of whose simplices lie in members of that cover; the subdivision commutes with the singular boundary ([[lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision]], [[def-cover-small-singular-chain-subcomplex]], [[thm-barycentric-subdivision-is-a-chain-map]]).

[F6] A singular $n$-chain is a finite formal sum of continuous singular $n$-simplices, its boundary is the alternating sum of its faces, and the continuous singular cochain coboundary is $\delta\varphi=\varphi\partial$ ([[def-singular-chain-complex-and-singular-homology]], [[def-singular-cochain-complex-with-coefficients]]).

[F7] For a finite-dimensional Hausdorff second-countable smooth manifold, the real de Rham comparison is $J_X=r_X^{-1}I_X:H^k_{\mathrm{dR}}(X;\mathbb R)\to H^k(X;\mathbb R)$, where $I_X$ is integration on smooth singular simplices and $r_X$ is restriction from continuous to smooth cohomology; it is an isomorphism under $\mathrm{AC}_\omega$ ([[cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology]], [[def-de-rham-cohomology]], [[def-de-rham-integration-cochain-map]], [[def-smooth-singular-chain-and-cochain-complexes]]).

[F8] For an abelian coefficient group $G$, the Kronecker pairing evaluates a class in $H^1(X;G)$ on an integral singular homology class, is independent of both representatives, and is additive; this includes $G=\mathbb C$ as well as $G=\mathbb R$ ([[def-singular-cohomology-with-coefficients]], [[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F9] A Riemann surface is a Hausdorff, second-countable topological $2$-manifold with a holomorphic atlas; holomorphic coordinate changes are smooth, giving its underlying finite-dimensional smooth structure ([[def-riemann-surface-and-holomorphic-atlas]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[def-smooth-manifold]]).

[F10] Full AC implies countable choice; only that consequence is needed by the de Rham comparison ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F11] A complex-valued differential form has unique real and imaginary component forms, and integration is real-linear on each component ([[def-bigraded-complex-differential-forms]], [[thm-complex-numbers-are-the-real-coordinate-plane]]).

[F12] Only finitely many local primitive disks need be assigned to the finitely many small triangles of one subdivided simplex; finite choice is available in ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** local primitives on subdivided singular simplices, followed by the de Rham comparison.

1.1 Let $\sigma:\Delta^2\to X$ be any continuous singular $2$-simplex. The coordinate disks equipped with local primitives from [F4] form an open cover of $X$. By [F5], some iterated barycentric subdivision of $\sigma$ is a finite sum of small singular $2$-simplices, each mapped into a disk carrying a primitive $H$. For one such triangle $\tau$, [F2] gives $\int_{\tau\delta_0}\omega=H(\tau(v_2))-H(\tau(v_1))$, $\int_{\tau\delta_1}\omega=H(\tau(v_2))-H(\tau(v_0))$, and $\int_{\tau\delta_2}\omega=H(\tau(v_1))-H(\tau(v_0))$; the alternating face sum is zero. Summing over the subdivision cancels interior faces in opposite orientations, and additivity of the edge path integrals recovers the original boundary. Hence $\int_{\partial\sigma}\omega=0$. [F2, F4, F5, F6, F12, given]

2.1 Extend $C_\omega(\sigma):=\int_\sigma\omega$ from continuous singular $1$-simplices to the complex singular $1$-cochain by finite linearity. Applying step 1.1 to each simplex in a finite $2$-chain $\beta$ gives $C_\omega(\partial\beta)=\int_{\partial\beta}\omega=0$. Thus $C_\omega$ is a cocycle and its evaluation on a $1$-cycle depends only on that cycle's homology class; it equals the complex-coefficient Kronecker evaluation of $[C_\omega]$ on that class. [F6, F8, step 1.1, algebra]

3.1 Let $\gamma$ have coordinates $\sum_i(m_i a_i+n_i b_i)$ in the basis of [F1], and let $c$ be any continuous singular cycle representing it. The cocycle from step 2.1 evaluates on $a_i,b_i$ as the path integrals over their fixed representatives $A_i,B_i$. By [F1] these are exactly the defining values used in $P$; additivity and the basis expansion therefore give $C_\omega(c)=P(\gamma,\omega)$. If $c$ is piecewise $C^1$, [F2] identifies this value with the usual contour integral. The same canonical homology functional is obtained from any symplectic basis or representative. [F1, F2, step 2.1, algebra]

4.1 Additivity of the path integral in the chain and its $\mathbb C$-linearity in $\omega$ from [F2] imply the stated bilinearity of $P$ by step 3.1. If $v'_i=\sum_jU_{ij}v_j$, then $P(v'_i,\omega)=\sum_jU_{ij}P(v_j,\omega)$ for each $i$, so $p'=Up$. For $g=0$ both vectors are empty. [F1, F2, step 3.1, algebra]

5.1 Write $\omega=\alpha+i\beta$ as in [F11]. By [F3], $\alpha$ and $\beta$ are closed real $1$-forms. The real and imaginary parts of $C_\omega$ from step 2.1 are continuous singular $1$-cocycles. By [F9], $X$ is a finite-dimensional Hausdorff second-countable smooth manifold, so [F7] applies. On every smooth singular $1$-simplex, [F2] and [F7] identify the cocycle restrictions with the de Rham integration cochains $I_X(\alpha)$ and $I_X(\beta)$. Thus $r_X[\operatorname{Re}C_\omega]=I_X[\alpha]$ and $r_X[\operatorname{Im}C_\omega]=I_X[\beta]$; injectivity of $r_X$ in [F7] gives $[\operatorname{Re}C_\omega]=J_X[\alpha]$ and $[\operatorname{Im}C_\omega]=J_X[\beta]$. Evaluating by [F8] on $\gamma$ and using step 3.1 yields the displayed de Rham identity. Full AC supplies the symplectic basis in [F1] and implies $\mathrm{AC}_\omega$ through [F10]; the local subdivision and endpoint calculations use only finite choice. [F3, F7, F8, F9, F10, F11, step 2.1, step 3.1, given] ∎

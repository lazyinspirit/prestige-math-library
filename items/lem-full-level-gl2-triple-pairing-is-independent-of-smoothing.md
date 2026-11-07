---
id: lem-full-level-gl2-triple-pairing-is-independent-of-smoothing
kind: lemma
title: "The Full-Level GL2 Triple Pairing Is Independent of Smoothing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, Pairings of Automorphic Distributions"
      url: "https://arxiv.org/pdf/1106.2364v1"
      locator: "Theorem 2.30 and §4, printed p.18; the proof here uses an explicit compact approximate identity instead of compactly supported de Rham cohomology."
---

## Statement

Use the group, full-level distributions, one cuspidal factor, base points,
and smoothed function $\Phi_\psi$ of the rapid-decay construction. Define
$$I(\psi)=\int_{\Gamma\backslash G}\Phi_\psi(g,g,g)\,dg\qquad(\psi\in C_c^\infty(G)).$$
There is a scalar $P(\tau_1,\tau_2,\tau_3)$ such that
$$I(\psi)=P(\tau_1,\tau_2,\tau_3)\int_G\psi(h)\,dh.$$
In particular all smoothing functions of total integral one give the same
pairing. The dependence on each of the three distribution inputs is linear.
No positivity condition on the smoothing function and no choice principle
are required.

## Statement references

[[lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay|the precise triple-distribution construction and cusp estimate]]

## Facts & Assumptions

**Given:** The full-level triple with its cuspidal first factor and compatible Haar measures in the two integrals.

[F1] [[lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay]] supplies the well-defined smoothed function, absolute quotient integrability, and cusp bounds by a fixed finite derivative seminorm of the smoothing function on each fixed compact support. Its finite-order compact-picture construction also bounds that function on compact subsets of $G^3$ by such a seminorm.

## Proof

**Given:** The data in the Statement; use left Haar measure $dh$ on $G$.

1.1 Linearity and [F1] make $I$ a linear functional on test functions. For tests supported in a fixed compact $C$, cover the compact part of the quotient by finitely many coordinate sets and apply the finite-order estimate in [F1] there. On the cusp apply [F1] with $N=1$ and integrate its bound against $dx\,dy\,dk/y^2$. Together these give $|I(\psi)|\le A_Cp_q(\psi)$ for some finite $q,A_C$ depending on $C$. Thus $I$ is a distribution on $G$. [F1, construct, algebra]

2.1 For $b\in G$ put $(L_b\psi)(h)=\psi(b^{-1}h)$. Substituting $h=bk$ in the test-function pairing gives $\Phi_{L_b\psi}(g,g,g)=\Phi_\psi(gb,gb,gb)$. The group $PGL_2(\mathbb R)$ is unimodular: the determinant of its adjoint action on $\mathfrak{sl}_2$ is one, as is seen on diagonal matrices and unipotent generators, and is also of absolute value one on a determinant-negative representative. Hence the quotient Haar measure is right invariant. The absolute convergence from [F1] permits the change $g\mapsto gb$ in its integral, so $I(L_b\psi)=I(\psi)$ for every $b\in G$, including its other connected component. [F1, step 1.1, algebra]

3.1 Choose a nonnegative smooth bump $\rho$ of integral one supported in a coordinate neighbourhood of the identity, and let $\rho_j$ be its coordinate dilates with supports tending to the identity and renormalized to total Haar integral one. This is an explicitly indexed approximate identity. For any test $\varphi$, define $(\varphi*\rho_j)(h)=\int_G\varphi(g)\rho_j(g^{-1}h)\,dg$. These tests have common compact support for all sufficiently large $j$, and converge to $\varphi$ with all derivatives: put $g=hk^{-1}$, use unimodularity to obtain $\int\rho_j(k)\varphi(hk^{-1})\,dk$, and use uniform continuity of each derivative on a common compact neighbourhood. For each fixed $j$, step 2.1 and interchange of a compact integral with the distribution in step 1.1 give $I(\varphi*\rho_j)=\int_G\varphi(g)I(L_g\rho_j)\,dg=I(\rho_j)\int_G\varphi(g)\,dg$. This interchange follows directly by Riemann sums, which converge in every test-function seminorm on the compact support; the finite-order bound in step 1.1 passes the limit through $I$. [step 1.1, step 2.1, construct, algebra]

4.1 Fix one test $\eta$ of Haar integral one. Applying step 3.1 to $\eta$ and using continuity from step 1.1 gives $I(\rho_j)=I(\eta*\rho_j)\to I(\eta)$. Applying the same identity to arbitrary $\varphi$ and passing to the limit gives $I(\varphi)=I(\eta)\int_G\varphi$. Set $P(\tau_1,\tau_2,\tau_3)=I(\eta)$. The formula proves independence of $\eta$ and every other normalized smoothing function. Linearity in the distribution inputs follows from the tensor evaluation and the absolutely convergent quotient integral in [F1]. The bump, dilates and compact Riemann sums were explicitly specified, so no choice principle enters. [F1, step 1.1, step 3.1, algebra] ∎

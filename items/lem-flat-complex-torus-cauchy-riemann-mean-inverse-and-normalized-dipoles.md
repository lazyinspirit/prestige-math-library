---
id: lem-flat-complex-torus-cauchy-riemann-mean-inverse-and-normalized-dipoles
kind: lemma
title: "A flat complex torus has an explicit mean-zero Cauchy--Riemann inverse and normalized dipoles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, def-complex-lattice-and-complex-torus, def-wirtinger-derivatives, thm-fourier-basis-and-parseval-on-the-n-torus, thm-weierstrass-zeta-sigma-quasi-periodicity, thm-liouville-bounded-entire-function, thm-removable-singularity-characterizations, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Assume Countable Choice. Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be an oriented complex lattice, $A=\operatorname{Im}(\overline{\omega_1}\omega_2)>0$, and $E=\mathbb C/\Lambda$. Use coordinates $z=\omega_1s+\omega_2t$ on the unit coordinate torus and normalized measure $ds\,dt$. For an integer $q\ge0$, let $H^q(E)$ mean complex-valued functions with coordinate weak derivatives through order $q$ in $L^2$, and let $H^q_0$ be its closed subspace of integral zero. Then $D=2\partial_{\bar z}$ has kernel the complex constants and range $H^q_0$ on $H^{q+1}$, and restricts to a bounded isomorphism $H^{q+1}_0\to H^q_0$. Its inverse is the actual Fourier multiplier
$$\widehat{Qf}(k,l)=\frac{A\widehat f(k,l)}{2\pi(\omega_2k-\omega_1l)}\quad((k,l)\ne(0,0)),\qquad\widehat{Qf}(0,0)=0.$$
On a compact set of oriented nondegenerate lattice bases these inverse norms are uniform. On the open set of such bases, $Q:H^q_0\to H^{q+1}_0$ is smooth in operator norm after the coordinate identifications. Thus the unrestricted operator has complex kernel and cokernel dimensions one and Fredholm index zero; specifying zero mean removes its kernel and its exact single complex obstruction.

For distinct $a,b\in E$, a point $z_0\notin\{a,b\}$, and $R\in\mathbb C$, there is exactly one meromorphic function on $E$ having no poles except possibly $a,b$, principal parts $R/(z-a)$ and $-R/(z-b)$ in the translation coordinates, and value zero at $z_0$. It is
$$G_{a,b,R;z_0}(z)=R\bigl[\zeta_\Lambda(z-a)-\zeta_\Lambda(z-b)-\zeta_\Lambda(z_0-a)+\zeta_\Lambda(z_0-b)\bigr].$$
Lifts of $a,b,z_0,z$ do not affect this expression. For fixed $\Lambda$ it is smooth in the point and residue parameters away from collisions and poles, with uniform bounds for each finite number of derivatives on compact subsets of that parameter and evaluation domain. In particular a torus meromorphic function with just two prescribed simple principal parts can exist only when their residues sum to zero, and this condition suffices, with uniqueness after one value is prescribed. When $R=0$ the normalized function is zero.

These are actual periodic operator and meromorphic-function statements. They assert no gluing, incidence-cover matching, boundary-degeneration count or Floer invariance.

## Statement references

[[thm-fourier-basis-and-parseval-on-the-n-torus]]; [[thm-weierstrass-zeta-sigma-quasi-periodicity]]

## Facts & Assumptions

**Given:** The oriented lattice, coordinate weak Sobolev spaces, and translation coordinates specified in the Statement. All vector spaces and operators here are complex unless a real dimension is explicitly mentioned.

[F1] [[thm-fourier-basis-and-parseval-on-the-n-torus]] gives the actual complete complex Fourier basis and Parseval on the coordinate two-torus under Countable Choice. [[def-wirtinger-derivatives]] defines $2\partial_{\bar z}=\partial_x+i\partial_y$.

[F2] [[thm-weierstrass-zeta-sigma-quasi-periodicity]] proves normal convergence of $\zeta_\Lambda$, simple lattice poles of residue one, holomorphicity off them, and $\zeta_\Lambda(z+\lambda)=\zeta_\Lambda(z)+\eta_\lambda$ for each lattice translation, with constant increment.

[F3] A holomorphic function with a removable singularity extends across it by [[thm-removable-singularity-characterizations]]. A bounded entire function is constant by [[thm-liouville-bounded-entire-function]].

[F4] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] proves that the integral of an exact compactly supported form on an oriented boundaryless smooth manifold is zero, choice-free. It is used on the compact torus itself, not as a boundary-domain Stokes theorem.

## Proof

1.1 Solving the two coordinate derivative equations gives $$D=\frac{i}{A}(\omega_1\partial_t-\omega_2\partial_s).$$ Indeed substitution of $\partial_s=\operatorname{Re}(\omega_1)\partial_x+\operatorname{Im}(\omega_1)\partial_y$ and its $t$ analogue gives coefficient one for $\partial_x$ and coefficient $i$ for $\partial_y$. On $e_{k,l}=e^{2\pi i(ks+lt)}$ the symbol is consequently $\lambda_{k,l}=2\pi(\omega_2k-\omega_1l)/A$. The real linear map $(k,l)\mapsto\omega_2k-\omega_1l$ is invertible. Its norm and inverse norm are bounded by finite expressions in the four real matrix entries and $A^{-1}$, using the explicit two-by-two inverse. Hence there are $c,C>0$ with $c\sqrt{k^2+l^2}\le|\lambda_{k,l}|\le C\sqrt{k^2+l^2}$. On a compact set of nondegenerate bases one choice of positive $c$ and finite $C$ works throughout, since the entries are bounded and $A$ has a positive minimum. [F1, given, algebra]

1.2 For clarity the weak Sobolev and Fourier domains coincide here without an elliptic regularity import. Testing a weak coordinate derivative against a character gives coefficients $(2\pi ik)^a(2\pi il)^b\widehat u(k,l)$ for $\partial_s^a\partial_t^b u$. Parseval identifies its squared norm with the sum of their squared absolute values. Conversely, if these weighted coefficient sums are finite for $a+b\le q$, square partial Fourier sums converge together with all these derivatives in $L^2$. Integration against any smooth periodic test function and passage to the limit gives their weak derivative identities. The passage is valid by Cauchy--Schwarz, since the test function and its derivatives are in $L^2$. Thus the actual weak domain is the Fourier weighted space, with equivalent squared norm $\sum_{k,l}(1+k^2+l^2)^q|\widehat u(k,l)|^2$. Completeness follows from the complete weighted sequence space and the onto Fourier coefficient map in [F1]. No choices of eigenfunctions or weak solutions enter this identification. [F1, construct, algebra]

1.3 Choose lifts of the three marked points to $\mathbb C$. By [F2], $\zeta(z-a)-\zeta(z-b)$ is periodic: its two constant increments cancel. Its principal parts are exactly $1/(z-a)$ and $-1/(z-b)$; it has no other poles. Subtracting its value at $z_0$ and multiplying by $R$ gives the displayed function. Changing a lift of $a$ or $b$ changes its two occurrences by the same constant increment with opposite signs, hence makes no change. Changing the lift of either evaluation point likewise cancels the two increments. Thus it descends to the asserted function on $E$. The normally convergent holomorphic function in [F2] is smooth on every pole-free coordinate domain; the displayed finite composition proves smooth dependence on the point and residue parameters. Compactness then bounds every specified finite derivative on a compact pole-free parameter/evaluation subset. [F2, construct, algebra]

2.1 The zero coefficient of $Du$ is zero. If $f$ has zero mean, define $u$ by the coefficients in the Statement. Steps 1.1 and 1.2 give $$\sum_{k,l}(1+k^2+l^2)^{q+1}|\widehat u(k,l)|^2\le C_q\sum_{k,l}(1+k^2+l^2)^q|\widehat f(k,l)|^2,$$ using $k^2+l^2\ge1$ for nonzero modes. The partial sums converge in the actual $H^{q+1}$ domain by step 1.2, and their $D$ images converge to $f$ in $H^q$. This proves existence and the bound. The symbol is nonzero on every nonzero mode, so $Du=0$ forces $u$ constant, and the zero-mean inverse is unique. The integral is a bounded complex functional onto $\mathbb C$ (constant functions suffice), so its kernel is closed of complex codimension one. This proves the kernel, range, cokernel and Fredholm assertions and the uniform norm assertion. [F1, step 1.1, step 1.2, construct, algebra]

3.1 Smooth operator dependence also follows from the same concrete symbols. On any sufficiently small closed neighborhood of a nondegenerate basis, each finite parameter derivative of $A/[2\pi(\omega_2k-\omega_1l)]$ has absolute value at most $C_j/(\sqrt{k^2+l^2})$ for nonzero modes: differentiating its numerator or denominator a finite number of times leaves a numerator of at most the compensating frequency degree, while step 1.1 bounds every denominator away from zero. Taylor's integral remainder on this finite-dimensional parameter neighborhood gives the corresponding operator-norm difference and derivative remainders, by the weighted multiplier estimate in step 2.1. Repeating for each derivative order proves smoothness $H^q_0\to H^{q+1}_0$. This argument uses coordinate Sobolev spaces, so no unproved varying-domain identification is implicit. [step 1.1, step 1.2, step 2.1, algebra]

4.1 The difference of two functions with these principal parts has removable singularities by [F3], and is holomorphic on the compact torus. Its periodic lift is bounded on a closed fundamental parallelogram and hence everywhere; Liouville makes it constant. Its prescribed value makes the constant zero. To see the residue obstruction without a meromorphic-existence assumption, take a periodic meromorphic function $h$ with these two possible simple poles. Choose disjoint translation-coordinate disks about them and a smooth function $\chi$ equal to zero on smaller disks, equal to one outside the chosen disks, and radial and increasing on each intervening annulus. The form $\chi h\,dz$ extends smoothly by zero across the two poles and is a smooth form on the boundaryless compact torus. Since $d(h\,dz)=0$ off the poles, [F4] gives $0=\int_E d(\chi h\,dz)=\int_E d\chi\wedge h\,dz$. On an annulus $z=a_j+re^{i\theta}$ its integral is $\int\chi'(r)\,i\int_0^{2\pi}h(a_j+re^{i\theta})re^{i\theta}\,d\theta\,dr=2\pi iR_j$. Indeed the simple principal part contributes this value, every term of the convergent local holomorphic power series contributes zero angular integral, and $\int\chi'=1$. The two annuli are the entire support of $d\chi$, so $R_1+R_2=0$. This proves necessity. Step 1.3 proves sufficiency and also the zero-residue case. No incidence matching or geometric sewing is inferred from this exact residue constraint. [F2, F3, F4, step 1.3, construct, algebra] ∎

---
id: thm-grand-equivalence-for-simply-connected-plane-domains
kind: theorem
title: "For a plane domain, the complement, homology, primitive, logarithm, conjugate, conformal, homotopy, and contractibility conditions are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-homological-simple-connectivity-equivalences,
       lem-trivial-fundamental-group-implies-null-homology-for-plane-domains,
       lem-connected-spherical-complement-implies-null-homology,
       lem-null-homology-implies-connected-spherical-complement,
       thm-null-homology-is-equivalent-to-global-harmonic-conjugates,
       lem-null-homology-gives-the-plane-or-disc-alternative,
       lem-the-plane-or-disc-alternative-gives-contractibility,
       lem-contractibility-implies-trivial-fundamental-group,
       rem-analytic-equivalences-from-global-cauchy-theory,
       cor-holomorphic-roots-homologically-simply-connected-domains,
       thm-path-independence-and-complex-primitive-criterion,
       thm-continuous-logarithms-exist-along-a-contour,
       def-winding-number-closed-complex-contour,
       cor-winding-number-is-the-normalized-argument-increment]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §§4.2-4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, §§5-6"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb C$ be a complex domain.
The following conditions are equivalent.

1. $\widehat{\mathbb C}\setminus\Omega$ is connected.
2. $\Omega$ is homologically simply connected.
3. The fundamental group of $\Omega$ is trivial.
4. Every holomorphic function on $\Omega$ has a primitive.
5. For every holomorphic $f$ on $\Omega$ and every closed rectifiable contour $\gamma$ in $\Omega$,
   $$\int_\gamma f(z)\,dz=0.$$
6. Every nowhere-zero holomorphic function on $\Omega$ has a holomorphic logarithm.
7. Every nowhere-zero holomorphic function on $\Omega$ has a holomorphic square root.
8. Every harmonic function on $\Omega$ has a harmonic conjugate.
9. Either $\Omega=\mathbb C$, or $\Omega$ is conformally equivalent to $\mathbb D$.
10. Either $\Omega$ is homeomorphic to $\mathbb C$, or $\Omega$ is homeomorphic to $\mathbb D$.
11. $\Omega$ is contractible.

## Facts & Assumptions

**Given:** The Axiom of Choice and a complex domain $\Omega$.

[L1] Condition 1 implies condition 2 and condition 2 implies condition 1 ([[lem-connected-spherical-complement-implies-null-homology]], [[lem-null-homology-implies-connected-spherical-complement]]).

[L2] The global Cauchy page already makes homological simple connectivity equivalent to the primitive clause, the holomorphic-logarithm clause, and the omitted-point primitive clause ([[thm-homological-simple-connectivity-equivalences]], [[rem-analytic-equivalences-from-global-cauchy-theory]]).

[L3] On a homologically simply connected domain every nowhere-zero holomorphic function has holomorphic roots of every positive order ([[cor-holomorphic-roots-homologically-simply-connected-domains]]).

[L4] Homological simple connectivity is equivalent to the global harmonic-conjugate condition ([[thm-null-homology-is-equivalent-to-global-harmonic-conjugates]]).

[L5] Under the Axiom of Choice, homological simple connectivity implies the plane-or-disc alternative ([[lem-null-homology-gives-the-plane-or-disc-alternative]]).

[L6] A domain homeomorphic to the plane or the disc is contractible ([[lem-the-plane-or-disc-alternative-gives-contractibility]]).

[L7] A contractible space has trivial fundamental group ([[lem-contractibility-implies-trivial-fundamental-group]]).

[L8] Trivial fundamental group implies homological simple connectivity for plane domains ([[lem-trivial-fundamental-group-implies-null-homology-for-plane-domains]]).

[L9] For a continuous function on a complex domain, having a primitive is equivalent to vanishing on every closed rectifiable contour ([[thm-path-independence-and-complex-primitive-criterion]]).

[L10] Every complex contour missing a point admits a continuous logarithm along that contour ([[thm-continuous-logarithms-exist-along-a-contour]]).

[L11] For a closed contour $\gamma$ and $p\notin\gamma^\ast$, one has $$n(\gamma,p)=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-p},$$ and also $$n(\gamma,p)=\frac{\theta(b)-\theta(a)}{2\pi}$$ for every continuous argument $\theta$ of $\gamma-p$ along $\gamma$ ([[def-winding-number-closed-complex-contour]], [[cor-winding-number-is-the-normalized-argument-increment]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], conditions 1 and 2 are equivalent. By [L2], conditions 2, 4, and 6 are equivalent. By [L4], conditions 2 and 8 are equivalent. By [L9], conditions 4 and 5 are equivalent. [L1, L2, L4, L9]

1.2 Condition 2 implies condition 7 by [L3]. Conversely, assume condition 7. Fix $p\in\mathbb C\setminus\Omega$ and a closed rectifiable contour $\gamma:[a,b]\to\Omega$. Applying condition 7 repeatedly to the nowhere-zero holomorphic function $z\mapsto z-p$ produces, for every $m\ge1$, a nowhere-zero holomorphic function $g_m$ on $\Omega$ with $g_m^{2^m}=z-p$. By [L10], the closed contour $g_m\circ\gamma$ admits a continuous logarithm $\lambda_m$; write $\theta_m=\operatorname{Im}\lambda_m$. Then $2^m\lambda_m$ is a continuous logarithm of $\gamma-p$ along $\gamma$, so [L11] gives $$n(\gamma,p)=2^m\frac{\theta_m(b)-\theta_m(a)}{2\pi}.$$ Applying [L11] again to $g_m\circ\gamma$ shows that $(\theta_m(b)-\theta_m(a))/(2\pi)$ is an integer. Therefore $$n(\gamma,p)\in 2^m\mathbb Z\qquad(m\ge1).$$ The only integer divisible by every power of $2$ is $0$, so $n(\gamma,p)=0$. By [L11], this is equivalent to $$\int_\gamma\frac{dz}{z-p}=0.$$ Since $p$ and $\gamma$ were arbitrary and $z\mapsto1/(z-p)$ is continuous on $\Omega$, [L9] makes $1/(z-p)$ admit a primitive on $\Omega$. Thus condition 2 holds by [L2], and conditions 2 and 7 are equivalent. [L3, L9, L10, L11, algebra]

1.3 Assume condition 2. By [L5], condition 9 follows. Any conformal equivalence is in particular a homeomorphism, so condition 9 implies condition 10. Then [L6] gives condition 11, [L7] gives condition 3, and [L8] returns to condition 2. Thus [L5, L6, L7, L8] $$2\Rightarrow9\Rightarrow10\Rightarrow11\Rightarrow3\Rightarrow2.$$

2.1 Steps 1.1, 1.2, and 1.3 connect every listed clause to condition 2, so all eleven conditions are equivalent. [step 1.1, step 1.2, step 1.3] ∎

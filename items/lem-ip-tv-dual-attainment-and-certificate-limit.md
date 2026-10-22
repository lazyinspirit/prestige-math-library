---
id: lem-ip-tv-dual-attainment-and-certificate-limit
kind: lemma
title: Dual attainment and convergence of TV source certificates
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-tv-dual-source-certificate
  - def-ip-bregman-distance
  - def-ip-spatial-bv-and-distributional-tv
  - def-ip-boundary-tv-conventions
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-ip-variational-source-condition
  - lem-ip-banach-fenchel-duality-for-regularization
  - thm-ip-vsc-nonlinear-regularization-rate
  - def-countable-choice
  - def-real-and-complex-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-bolzano-weierstrass
  - thm-riesz-representation-for-hilbert-space
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on
        convergence of solutions of total variation regularized linear inverse
        problems, Theorem 1, Proposition 3, and their complete proofs
      url: https://arxiv.org/pdf/1711.06495
    - title: Barbara Kaltenbacher, Convergence rates under a range invariance
        condition with application to electrical impedance tomography, Lemma 2
        and Theorem 3
      url: https://arxiv.org/pdf/2403.18704
    - title: "Jonathan M. Borwein and Jon D. Vanderwerff, Convex Functions:
        Constructions, Characterizations and Counterexamples, Exercise 4.4.1"
      url: https://carmamaths.org/jon/Preprints/Books/CUP/cup-final.pdf
      locator: §4.4, Exercise 4.4.1; inspection confirms it concerns convex conjugate
        examples and is not used in this projection proof.
---

## Statement

Assume Countable Choice. Let $X=L^2(\Omega;\mathbb R)$ and $Y=L^2(\Sigma,\mu;\mathbb R)$ be real Hilbert spaces, let $A:X\to Y$ be bounded and real-linear, and let $R:X\to[0,+\infty]$ be one of the full-space, Dirichlet, or Neumann TV functionals. Assume that $R$ is proper, convex, lower semicontinuous, and positively one-homogeneous, and that $u^\dagger$ is a minimum-$R$ exact solution of $Au=f$ with a dual source certificate $p^\dagger\in Y$, so $A^*p^\dagger\in\partial R(u^\dagger)$. Define $K:=\{p\in Y:A^*p\in\partial R(0)\}$ and $D_{\alpha,w}(p):=\langle f+w,p\rangle_Y-\frac{\alpha}{2}\|p\|_Y^2$ for $\alpha>0$ and $w\in Y$.

For each $\alpha>0$ and $w\in Y$, $D_{\alpha,w}$ has a unique maximizer on $K$, namely $p_{\alpha,w}=\operatorname{Proj}_K((f+w)/\alpha)$. If $u_{\alpha,w}$ is any supplied global minimizer of $u\mapsto\frac12\|Au-(f+w)\|_Y^2+\alpha R(u)$, then $p_{\alpha,w}=(f+w-Au_{\alpha,w})/\alpha$, $A^*p_{\alpha,w}\in\partial R(u_{\alpha,w})$, and $A^*p_{\alpha,w}\in\partial R(0)$. For every such supplied minimizer, the correctly normalized primal-dual value identity is

$$\min_u\{\tfrac12\|Au-(f+w)\|_Y^2+\alpha R(u)\}=\alpha D_{\alpha,w}(p_{\alpha,w}).$$

Let $P_0:=\{p\in K:\langle f,p\rangle_Y=R(u^\dagger)\}$ and let $p_0$ be its unique minimum-norm element. For every sequence $\alpha_n>0$ with $\alpha_n\to0$, $p_{\alpha_n,0}\to p_0$ strongly in $Y$ and $A^*p_{\alpha_n,0}\to A^*p_0$ strongly in $X$. For every $\alpha>0$ and $w\in Y$,

$$\|p_{\alpha,w}-p_{\alpha,0}\|_Y\le\frac{\|w\|_Y}{\alpha},\qquad \|A^*p_{\alpha,w}-A^*p_{\alpha,0}\|_X\le\frac{\|A^*\|\,\|w\|_Y}{\alpha}.$$

Moreover, for any $R_0>R(u^\dagger)$ the certificate yields a variational source condition on $\{u:R(u)\le R_0\}$ with exponent $2$, coefficient $\beta=0$, and index function $\psi(s)=(1+\|p^\dagger\|_Y)\sqrt{s}$. Consequently, if $\delta_n\downarrow0$, $\|w_n\|_Y\le\delta_n$, $\alpha_n\asymp\delta_n$, and exact global minimizers $u_n$ are supplied, then the variational-source rate theorem gives

$$D_R^{A^*p^\dagger}(u_n,u^\dagger)=O(\delta_n),\qquad \|Au_n-(f+w_n)\|_Y=O(\delta_n).$$

## Statement references

[[def-ip-tv-dual-source-certificate|The classical TV source condition and certificate.]]

[[def-ip-variational-source-condition|The general variational source inequality.]]

[[thm-ip-vsc-nonlinear-regularization-rate|The Bregman and residual rates under parameter coupling.]]

[Iglesias, Mercier, and Scherzer, *A note on convergence of solutions of total variation regularized linear inverse problems*, Theorem 1 and Proposition 3](https://arxiv.org/pdf/1711.06495)

[Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, Lemma 2 and Theorem 3](https://arxiv.org/pdf/2403.18704)

[Inspected historical citation: Borwein and Vanderwerff, *Convex Functions: Constructions, Characterizations and Counterexamples*, Exercise 4.4.1; it concerns convex-conjugate examples and is not used in this proof.](https://carmamaths.org/jon/Preprints/Books/CUP/cup-final.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the real Hilbert spaces and map in the Statement, a minimum-TV exact solution, a dual source certificate, and (where specified) supplied global minimizers.

[A1] Countable Choice supplies the nearest-point minimizing sequences and weakly convergent subsequences used below. ([[def-countable-choice]])

[F1] [[def-ip-tv-dual-source-certificate]]: $u^\dagger$ is an exact minimum-TV solution and $A^*p^\dagger\in\partial R(u^\dagger)$; the Hilbert adjoint satisfies $\langle Au,p\rangle_Y=\langle u,A^*p\rangle_X$.

[F2] [[def-ip-banach-convex-subgradient-and-dual-pairing]]: $\xi\in\partial R(u)$ exactly when $R(z)\ge R(u)+\langle\xi,z-u\rangle$ for every $z\in X$.

[F3] [[def-ip-bregman-distance]]: $D_R^{\xi^\dagger}(u,u^\dagger)=R(u)-R(u^\dagger)-\langle\xi^\dagger,u-u^\dagger\rangle_X$.

[F4] [[lem-ip-banach-fenchel-duality-for-regularization]]: $R(u)+R^*(\xi)=\langle\xi,u\rangle$ if and only if $\xi\in\partial R(u)$.

[F5] [[def-ip-variational-source-condition]]: on a named sublevel, $-\langle\xi^\dagger,u-u^\dagger\rangle\le\beta D_R^{\xi^\dagger}(u,u^\dagger)+\psi(\|Au-Au^\dagger\|_Y^2)$.

[F6] [[thm-ip-vsc-nonlinear-regularization-rate]]: when the exact global minimizer, noise bound, sublevel VSC, and conjugate parameter coupling hold, the Bregman distance and noisy residual have the displayed rates.

[F7] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle|\le\|u\|\,\|v\|$ in a real Hilbert space.

[F8] [[thm-bolzano-weierstrass]]: every bounded real sequence has a convergent subsequence.

[F9] [[thm-riesz-representation-for-hilbert-space]]: every bounded linear functional on a real Hilbert space is inner product with a vector in that space.

[F10] [[def-real-and-complex-inner-product-space]]: the real Hilbert norm satisfies $\|y\|_Y^2=\langle y,y\rangle_Y$.

## Proof


1.1 Put $q^\dagger=A^*p^\dagger$. Applying [F2] at $u^\dagger$ with $z=0$ and $z=2u^\dagger$, and using $R(0)=0$ and $R(2u^\dagger)=2R(u^\dagger)$, gives $\langle q^\dagger,u^\dagger\rangle_X=R(u^\dagger)$. For arbitrary $z\in X$, [F2] then yields $R(z)\ge\langle q^\dagger,z\rangle_X$, so $q^\dagger\in\partial R(0)$ and $p^\dagger\in K$. Every $p\in K$ satisfies $\langle f,p\rangle_Y=\langle u^\dagger,A^*p\rangle_X\le R(u^\dagger)$; equality holds for $p^\dagger$. Thus $P_0$ is nonempty, closed, and convex. [F1, F2, given, algebra]

1.2 The set $K$ is nonempty because $0\in\partial R(0)$, convex by the subgradient inequality, and closed because $\partial R(0)=\{q:R(z)\ge\langle q,z\rangle_X\text{ for all }z\}$ is an intersection of closed half-spaces and $A^*$ is continuous. For any nonempty closed convex subset $C$ of a Hilbert space, let $d=\inf_{c\in C}\|x-c\|$ and use Countable Choice to select $c_n\in C$ with $\|x-c_n\|^2\le d^2+1/n$. The midpoint belongs to $C$, so the parallelogram identity gives $\|c_n-c_m\|^2\le2/n+2/m$; thus $(c_n)$ is Cauchy. Completeness and closedness yield a nearest point, and strict convexity of squared norm makes it unique. Applying this to $K$ and $P_0$ defines their projections. [A1, F2, given, construct]

2.1 Completing the square gives $D_{\alpha,w}(p)=\frac{\|f+w\|_Y^2}{2\alpha}-\frac{\alpha}{2}\|p-(f+w)/\alpha\|_Y^2$. Hence its unique maximizer on $K$ is $p_{\alpha,w}=\operatorname{Proj}_K((f+w)/\alpha)$. [step 1.2, given, algebra]

3.1 Let $u_{\alpha,w}$ be a supplied global minimizer and put $p=(f+w-Au_{\alpha,w})/\alpha$. For any $h\in X$ and $t>0$, objective minimality and expansion of the square give $[R(u_{\alpha,w}+th)-R(u_{\alpha,w})]/t\ge\langle A^*p,h\rangle_X-t\|Ah\|_Y^2/(2\alpha)$. As $t\downarrow0$, the lower limit of these secants is at least $\langle A^*p,h\rangle_X$; convexity makes the unit secant at least every smaller positive secant, so $R(u_{\alpha,w}+h)-R(u_{\alpha,w})\ge\langle A^*p,h\rangle_X$. This for every $h$ proves $A^*p\in\partial R(u_{\alpha,w})$. Applying [F2] with $z=0$ and $z=2u_{\alpha,w}$ gives $\langle A^*p,u_{\alpha,w}\rangle_X=R(u_{\alpha,w})$, and then [F2] for arbitrary $z$ gives $A^*p\in\partial R(0)$, so $p\in K$. By [F4] at $0$, $R^*(A^*q)=0$ for every $q\in K$; Fenchel–Young in [F4] therefore gives $\langle A^*q,u_{\alpha,w}\rangle_X\le R(u_{\alpha,w})$. Thus $D_{\alpha,w}(q)\le R(u_{\alpha,w})+\alpha\langle p,q\rangle_Y-\alpha\|q\|_Y^2/2=D_{\alpha,w}(p)-\alpha\|q-p\|_Y^2/2$. Hence $p=p_{\alpha,w}$. Finally $Au_{\alpha,w}=f+w-\alpha p$, so $\frac12\|Au_{\alpha,w}-(f+w)\|_Y^2+\alpha R(u_{\alpha,w})=\alpha D_{\alpha,w}(p)$, establishing the normalized value identity in the Statement. [F2, F4, step 2.1, given, algebra]

3.2 If $P_Kx=p$ and $P_Ky=q$, minimizing squared distance along the segment from $p$ to any $z\in K$ gives $\langle x-p,z-p\rangle\le0$. Apply this with $z=q$, and the corresponding inequality for $P_Ky$ with $z=p$. Adding yields $\|p-q\|_Y^2\le\langle x-y,p-q\rangle_Y\le\|x-y\|_Y\|p-q\|_Y$ by [F7], so $\|p-q\|_Y\le\|x-y\|_Y$. Taking $x=(f+w)/\alpha$ and $y=f/\alpha$ proves the first noise-stability bound; applying $A^*$ proves the second. [F7, step 2.1, given, algebra]

3.3 Write $p_n=p_{\alpha_n,0}$. Maximality against $p_0\in P_0$ and the support bound $\langle f,p_n\rangle_Y\le R(u^\dagger)$ give $\|p_n\|_Y\le\|p_0\|_Y$ and $\langle f,p_n\rangle_Y\to R(u^\dagger)$. The closed span of any subsequence is separable; Gram–Schmidt on rational finite linear combinations of its terms gives a finite or countable orthonormal family with dense span. Repeated use of [F8] and [A1] selects a further subsequence whose coordinates all converge. For each finite initial segment, expanding the nonnegative squared norm after orthogonal projection shows that the sum of squared limiting coordinates is at most $\|p_0\|_Y^2$; hence the coordinates define a vector $p$ in that closed span. Approximation by finite linear combinations proves weak convergence there, and [F9] represents each functional $x\mapsto\langle x,y\rangle_Y$ restricted to the span, so convergence is weak in $Y$. The limit lies in $K$: by [F2], $K=\bigcap_{z\in X}\{q:\langle q,Az\rangle_Y\le R(z)\}$, an intersection of weakly closed half-spaces. It also attains $\langle f,p\rangle_Y=R(u^\dagger)$, so $p\in P_0$. Weak lower semicontinuity of the norm and the bound force $\|p\|_Y=\|p_0\|_Y$, hence uniqueness gives $p=p_0$. Every subsequence therefore has a further subsequence weakly converging to $p_0$; testing against any fixed $y\in Y$ shows that every scalar subsequence has a further subsequence converging to $\langle p_0,y\rangle_Y$, so $\langle p_n,y\rangle_Y\to\langle p_0,y\rangle_Y$. Thus $p_n\rightharpoonup p_0$. Weak lower semicontinuity and the uniform upper bound then give $\|p_n\|_Y\to\|p_0\|_Y$. The norm identity [F10] yields strong convergence, and boundedness of $A^*$ yields strong convergence of $A^*p_n$. [A1, F1, F2, F8, F9, F10, step 1.1, step 1.2, step 2.1, construct, algebra]

4.1 For $u\in\operatorname{dom}R$, [F1] and [F7] give $-\langle A^*p^\dagger,u-u^\dagger\rangle_X=\langle p^\dagger,f-Au\rangle_Y\le\|p^\dagger\|_Y\|Au-f\|_Y$. Therefore the VSC [F5] holds with $\beta=0$, $p=2$, and $\psi(s)=C\sqrt{s}$, $C=1+\|p^\dagger\|_Y$, on every regularizer sublevel; [F3] identifies its Bregman term with the distance in the Statement. Its conjugate is $H(q)=C^2/(4q)$ for $q>0$. For an exact minimizer with $\|w\|_Y\le\delta$, comparison to $u^\dagger$ gives $R(u_{\alpha,w})\le R(u^\dagger)+\delta^2/(2\alpha)$; if $\alpha\asymp\delta$, this is below any fixed $R_0>R(u^\dagger)$ for small $\delta$. With $c_p=1/4$, $\rho_\delta=H(c_p/\alpha)=C^2\alpha\asymp\delta$ and $H(c_p/(2\alpha))=2\rho_\delta$, so all parameter-coupling hypotheses in [F6] hold and the stated rates follow. [F1, F3, F5, F6, F7, given, algebra] ∎

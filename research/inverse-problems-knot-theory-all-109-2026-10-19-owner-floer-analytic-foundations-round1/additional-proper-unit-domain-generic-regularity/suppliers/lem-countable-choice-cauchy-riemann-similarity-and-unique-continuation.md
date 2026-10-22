---
id: lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation
kind: lemma
title: "Cauchy–Riemann similarity and unique continuation under countable choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-plancherel
  - thm-mihlin-fourier-multiplier-theorem
  - thm-weyl-lemma-for-the-laplacian
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - lem-countable-choice-planar-morrey-estimate
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry, version3.2"
      url: "https://arxiv.org/pdf/1011.1690"
      locator: "Full Proposition2.70 throughTheorem2.78 and Proposition2.82 proofs, printed53–58; explicit Cauchy transform and CC proof supplied locally"
---

## Statement

Assume countable choice and write $D=\partial_s+i\partial_t=2\partial_{\bar z}$ on a connected open set $\Omega\subset\mathbb C$. Let $B\in L^\infty_{\mathrm{loc}}(\Omega;\operatorname{End}_{\mathbb R}(\mathbb C^m))$, and let $v\in W^{1,p}_{\mathrm{loc}}(\Omega;\mathbb C^m)$, for some $p>2$, solve $Dv+Bv=0$ weakly. Use its continuous representative. Near every point $z_0$ there are a continuous invertible complex matrix $P$, belonging locally to $W^{1,q}$ for every finite $q>2$, and a holomorphic vector function $h$ with $v=Ph$. One may normalize $P(z_0)=I$.

Consequently either $v$ is identically zero, or all its zeros are isolated and have finite order: at a zero $z_0$ there are an integer $k\ge1$ and constants $c,C,r>0$ with
$$c|z-z_0|^k\le|v(z)|\le C|z-z_0|^k\qquad(0<|z-z_0|<r).$$
In particular vanishing on an open set, or vanishing to infinite order at one point, forces global vanishing. The same conclusions hold for $v_s+J(s,t)v_t+Av=0$ when $J$ is a smooth family of real complex structures and $A$ is locally bounded; the local factor is then an invertible real matrix rather than necessarily a complex matrix.

If two smooth maps solve the same equation $u_s+J(s,t,u)u_t=0$ for a smooth almost complex family on a smooth target and have matching infinite jets at one interior point, they agree everywhere on their connected common source. Agreement on an open set suffices. This assertion concerns parametrized maps and actual linear equations; it does not infer moduli transversality or an injective-point theorem.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The weak solution, locally bounded coefficient, indicated regularity, and the smooth geometric data when that version is asserted.

[F1] [[thm-plancherel]] gives the $L^2$ Fourier isometry under countable choice. [[thm-mihlin-fourier-multiplier-theorem]] gives $L^q$ boundedness, agreeing with the $L^2$ multiplier action, of smooth homogeneous degree-zero symbols with bounded derivatives on the unit circle, for $1<q<\infty$.

[F2] [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] supplies cutoff and mollifier approximations. [[lem-countable-choice-planar-morrey-estimate]] gives continuous locally bounded representatives of $W^{1,p}$ functions for $p>2$.

[F3] [[thm-weyl-lemma-for-the-laplacian]] makes every distributional harmonic function smooth under countable choice. [[thm-fourier-basis-and-parseval-on-the-n-torus]] supplies complete complex Fourier series on circles under that same axiom.

## Proof

1.1 Define $K(z)=1/(\pi z)$ as a locally integrable kernel. Its distributional derivative is $\partial_{\bar z}K=\delta_0$. Here is a direct sign and normalization check, requiring no stronger-choice Stokes theorem. For a compactly supported smooth test $\psi$, use $z=re^{i\theta}$ and $\partial_{\bar z}=e^{i\theta}(\partial_r+i r^{-1}\partial_\theta)/2$. Then $$-\int K\partial_{\bar z}\psi\,dA=-\frac1{2\pi}\int_0^{2\pi}\int_0^\infty\bigl(\psi_r+i r^{-1}\psi_\theta\bigr)\,dr\,d\theta=\psi(0).$$ The angular term integrates to zero by periodicity; it is integrable near zero because $\psi_\theta=O(r)$. For bounded $f$ supported in a disk of radius $r$, set $Tf=K*f$. On that disk, $\|Tf\|_\infty\le4r\|f\|_\infty$ by enclosing the translated integration region in the radius-$2r$ disk and integrating $1/(\pi|z|)$. This map is continuous even for measurable $f$: cut the kernel inside a small radius, whose integral norm is arbitrarily small, and use uniform continuity of the remaining nonsingular translated kernel on bounded sets. Distributional convolution gives $\partial_{\bar z}Tf=f$. [given, construct, algebra]

2.1 We prove the actual Sobolev regularity of this transform. For smooth compactly supported $f$, $H_j=\partial_jTf=K*(\partial_jf)$ is continuous, bounded on compact sets, and $O(|z|^{-2})$ at infinity. The last bound follows by subtracting $K(z)\int\partial_jf=0$ and the estimate $|K(z-\zeta)-K(z)|\le C|\zeta|/|z|^2$ outside twice the support radius. Thus $H_j\in L^2$. The distributional identity $DH_j=2\partial_jf$, Fourier differentiation and [F1] give $$\widehat H_j(\xi)=\frac{2i\xi_j}{i\xi_s-\xi_t}\widehat f(\xi)\quad\text{a.e.}$$ with Fourier convention $\widehat{\partial_j}=2\pi i\xi_j$. This follows first against Schwartz tests by integration by parts and then in $L^2$; the denominator is nonzero except at the measure-zero origin, so there is no unsupported point-mass term in this $L^2$ identity. Each displayed symbol is smooth homogeneous of degree zero with its first two derivatives bounded on the unit circle. Therefore [F1] gives $\|\nabla Tf\|_q\le C_q\|f\|_q$ for every $1<q<\infty$. For bounded compactly supported $f$, use mollified compact approximants from [F2], converging simultaneously in $L^2$ and any fixed $L^q$, $q>2$. Their transforms converge uniformly on compact sets: Hölder bounds the kernel there in $L^{q'}$, because $q'<2$. Their derivatives converge in $L^q$ by the multiplier estimate. Hence $Tf\in W^{1,q}_{\mathrm{loc}}$ with the same weak derivative formulas. This holds for every finite $q>2$ and for matrix entries as well. [F1, F2, step 1.1, construct, algebra]

3.1 Work on a small closed disk about $z_0$ where $\|B\|_\infty$ is bounded. Define a measurable complex-linear matrix $$C(z)=-\frac{(B(z)v(z))v(z)^*}{2|v(z)|^2}$$ when $v(z)\ne0$, and zero otherwise. It satisfies $Cv=-Bv/2$ everywhere almost surely and $\|C\|\le\|B\|/2$. Thus $\partial_{\bar z}v=Cv$. Extend $C$ by zero off this disk. On continuous complex matrix functions on its closure use $\mathcal T(P)=I+T(CP)$. step 1.1 makes its contraction constant at most $4r\|C\|_\infty$. Shrink $r$ to make this less than $1/4$. Iterating from $I$ is an explicit uniformly Cauchy sequence: successive differences have geometric bounds. Its continuous limit $P$ satisfies $P=I+T(CP)$, with $\|P-I\|<1/3$, hence is pointwise invertible by its finite-matrix Neumann series. step 2.1 proves $P\in W^{1,q}_{\mathrm{loc}}$ for every finite $q>2$ and $\partial_{\bar z}P=CP$. No measurable choice of matrix extensions has occurred: the formula for $C$ is specified also at the zeros. [F2, step 1.1, step 2.1, construct, algebra]

4.1 The inverse matrix belongs to the same local Sobolev spaces. Indeed $P^{-1}=\sum_{n\ge0}(I-P)^n$ converges uniformly, and its differentiated terms have $L^q$ norms bounded by $n(1/3)^{n-1}\|dP\|_q$ on compact subsets. Thus the series converges in $W^{1,q}$ and proves $d(P^{-1})=-P^{-1}(dP)P^{-1}$. The weak product rule follows by the mollifier approximation and the bounded continuous factors; the same argument or [F2] gives $h=P^{-1}v\in W^{1,p}_{\mathrm{loc}}$. Since $P$ is complex linear, the ordinary matrix product rule for $\partial_{\bar z}$ gives $\partial_{\bar z}h=-P^{-1}CP\,P^{-1}v+P^{-1}Cv=0$. Thus $\Delta h=4\partial_z\partial_{\bar z}h=0$ distributionally. By [F3] it is smooth, and its now classical Cauchy–Riemann equation makes it holomorphic. Replacing $P$ by $P P(z_0)^{-1}$ and $h$ by $P(z_0)h$ gives the stated normalization without changing the factorization. [F2, F3, step 3.1, construct, algebra]

5.1 We detail finite order without a stronger-choice complex-analysis supplier. For a smooth holomorphic scalar component $h$ on a round disk, its circle Fourier coefficients $a_n(r)$ satisfy $a_n'(r)=n a_n(r)/r$, by its polar Cauchy–Riemann equation and integration by parts in the angle. Hence $a_n(r)=c_nr^n$. Boundedness near the center forces every negative coefficient to vanish. At a fixed smaller radius $R$, $|a_n(R)|\le\sup_{|z|=R}|h|$, so $\sum_{n\ge0}c_nz^n$ converges uniformly on any still smaller disk by a geometric series. Circle Fourier completeness in [F3] identifies it with $h$ there. Apply this componentwise. Either all vector coefficients vanish, or their least nonzero index $k$ exists and $$h(z_0+z)=z^k(a+O(z)),\qquad a\ne0.$$ The continuous invertible factor from step 4.1 and its locally bounded inverse give the two-sided norm bound stated for $v$. At a zero the index is positive. In particular zeros of a nonzero local solution are isolated, and no such solution can vanish to infinite order. The set of points near which $v$ is identically zero is open and also closed in the connected source: at a limit point of that set the local factorization has accumulating zeros, so its holomorphic factor cannot have a finite-order isolated zero and must be identically zero. This proves the global alternative and continuation assertion. [F3, step 4.1, construct, algebra]

6.1 For the variable principal structure, choose fixed real coordinates making $J(z_0)=i$ and set $\Phi(z)=(I-J(z)i)/2$. At $z_0$ it is the identity, hence is smoothly invertible nearby, and $$J\Phi=(J+i)/2=\Phi i.$$ Substitution $v=\Phi w$ reduces $v_s+Jv_t+Av=0$ to $$Dw+\Phi^{-1}(\Phi_s+J\Phi_t+A\Phi)w=0.$$ The new zeroth-order matrix is locally bounded, so steps3.1–5.1 apply and give a real invertible continuous combined factor for $v$. Fixed complex coordinates exist by choosing a finite real complex basis; no infinite basis or extra axiom is involved. [step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 Finally take two smooth solutions $u_1,u_2$ with equal value at an interior point and use a convex target coordinate ball near that value. Their coordinate difference $w=u_1-u_2$ satisfies $$w_s+J(s,t,u_1)w_t+A(s,t)w=0,$$ where $$A(s,t)a=\left(\int_0^1d_xJ(s,t,u_2+\lambda w)[a]\,d\lambda\right)(u_2)_t.$$ This identity follows by subtracting the two actual equations; its coefficients are smooth and bounded on a smaller source disk. The variable-principal result therefore applies. Equal infinite jets give infinite-order zero of $w$ and force equality locally. If the two maps agree on an open set, the same local argument propagates equality to its closure, and connectedness gives global equality. In the infinite-jet case first obtain that nonempty equality neighborhood and propagate it. All constructions used explicit kernels, Fourier bounds with the stated CC suppliers, geometric iteration and finite-dimensional formulas. This completes the similarity and unique-continuation assertions. [step 5.1, step 6.1, construct, algebra] ∎

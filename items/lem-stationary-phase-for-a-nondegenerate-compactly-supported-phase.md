---
id: lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase
kind: lemma
title: Stationary phase with a compactly supported amplitude
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-van-der-corput-oscillatory-integral-estimate
- cor-multivariable-taylor-formula-with-peano-remainder
- cor-second-order-taylor-expansion-with-the-hessian
- def-multivariable-taylor-polynomial
- thm-algebra-of-derivatives
- thm-chain-rule-for-total-derivatives
- def-ck-and-multi-index-notation-in-several-variables
- def-partition-of-unity-subordinate-to-a-cover
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-dominated-convergence
- def-nonnegative-lebesgue-integral
- thm-linear-change-of-variables-for-lebesgue-measure
- thm-sylvesters-law-of-inertia
- thm-integration-by-parts-for-absolutely-continuous-functions
- thm-differentiation-under-the-integral-sign
- thm-multivariable-taylor-formula-with-lagrange-remainder
- thm-newton-leibniz-with-interior-derivative
- cor-volume-of-a-radius-r-n-ball
- cor-newton-leibniz-with-finitely-many-exceptional-points
- lem-schwartz-cutoffs-from-the-standard-smooth-step
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
  - title: Mark Williams, Notes on harmonic analysis
    url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
    locator: Lemma 11.2 and its proof, printed pp.71–72, equation (11.3).
  - title: Terence Tao, Lecture Notes 8 for Math 247B
    url: https://www.math.ucla.edu/~tao/247b.1.07w/notes8.pdf
    locator: Lemmas 3.1–3.3, printed pp.9–11, and the derivative and uniform-constant discussion on pp.11–12.
---

## Statement

Let $d\ge1$, $a\in C_c^\infty(\mathbb R^d)$, $\varphi\in C^\infty(\mathbb R^d;\mathbb R)$ and $I(\lambda)=\int e^{2\pi i\lambda\varphi(x)}a(x)\,dx$. (a) If $\nabla\varphi\neq0$ on a neighbourhood of $\operatorname{supp}a$, then $|I(\lambda)|\le C_N\lambda^{-N}$ for every integer $N\ge0$ and $\lambda>0$. (b) If $\varphi$ has exactly one stationary point $x_0$, in the interior of $\operatorname{supp}a$, with $D^2\varphi(x_0)$ invertible, then $|I(\lambda)|\le C\lambda^{-d/2}$ for $\lambda\ge1$, and more precisely $|\partial_\lambda^k(e^{-2\pi i\lambda\varphi(x_0)}I(\lambda))|\le C_k\lambda^{-d/2-k}$ for every $k\ge0$. The constants depend only on $d$, the diameter of the amplitude support, the chosen localization radius, finitely many derivatives of $a$ and $\varphi$, on a positive lower bound for $|\det D^2\varphi(x_0)|$, and on a positive lower bound for $|\nabla\varphi|$ on the amplitude support off a small ball about $x_0$.

## Facts & Assumptions

**Given:** $d\ge1$, a real phase $\varphi\in C^\infty(\mathbb R^d;\mathbb R)$, an amplitude $a\in C_c^\infty(\mathbb R^d;\mathbb C)$, $I(\lambda)=\int e^{2\pi i\lambda\varphi(x)}a(x)\,dx$.

[F1] Divergence and integration by parts: for a compactly supported smooth vector field $v$ one has $\int_{\mathbb R^d}\nabla\cdot v\,dx=0$ (integrate the last coordinate first and apply the one-dimensional fundamental theorem across the compact support, using Fubini); hence for smooth $h$ and any $j$, $\int(\partial_j\psi)h\,dx=-\int\psi\,\partial_jh\,dx$. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-newton-leibniz-with-interior-derivative]], [[cor-newton-leibniz-with-finitely-many-exceptional-points]], [[thm-algebra-of-derivatives]])

[F2] Taylor with Lagrange remainder near the stationary point: since $\nabla\varphi(x_0)=0$, on a sufficiently small ball $B(x_0,\eta)$ one has $\varphi(x)=\varphi(x_0)+\tfrac12\langle Q(x-x_0),x-x_0\rangle+R(x)$ with $Q=D^2\varphi(x_0)$ and $|R(x)|\le C_3|x-x_0|^3$, $|\nabla R(x)|\le C_3|x-x_0|^2$; consequently $\nabla\varphi(x)=Q(x-x_0)+\nabla R(x)$ and, $Q$ being invertible with smallest singular value $\mu>0$, $|\nabla\varphi(x)|\ge\tfrac\mu2|x-x_0|$ for $|x-x_0|$ small. ([[thm-multivariable-taylor-formula-with-lagrange-remainder]], [[cor-second-order-taylor-expansion-with-the-hessian]], [[def-multivariable-taylor-polynomial]])

[F5] Finite compact localization: for a compact set $K$ covered by finitely many open balls, first cover $K$ by finitely many smaller balls whose closures lie in members of the original cover. Choose smooth nonnegative bumps $\beta_j$ supported in those cover members and equal to one on the smaller balls. Their sum $B$ is positive near $K$. For $0<c<\min_K B$, choose a smooth scalar cutoff $\eta$ zero when $B\le c/2$ and one when $B\ge c$; then $\rho_j=\eta(B)\beta_j/B$ where $B>0$, extended by zero, are smooth compactly supported functions subordinate to the original balls and sum to one near $K$. This uses only finite choices and smooth Euclidean cutoffs. ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]], [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]])

[F6] Differentiation under the integral sign: for compactly supported smooth integrands depending smoothly on a parameter, $\partial_\lambda^k\int e^{2\pi i\lambda(\varphi(x)-\varphi(x_0))}a(x)\,dx=\int(2\pi i(\varphi(x)-\varphi(x_0)))^k e^{2\pi i\lambda(\varphi(x)-\varphi(x_0))}a(x)\,dx$ for every $k\ge0$. ([[thm-differentiation-under-the-integral-sign]], [[thm-dominated-convergence]])

[F7] Volume and annulus integrals: the ball of radius $\delta$ has volume $\omega_d\delta^d$, and for $2N>d$ the annulus $(\delta,\eta)$ satisfies $\int_{\delta\le|x|\le\eta}|x|^{-2N}dx\le C_{d,N}\delta^{d-2N}$ for $0<\delta\le\eta\le1$. ([[cor-volume-of-a-radius-r-n-ball]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[def-nonnegative-lebesgue-integral]])



## Proof

**Proof technique:** direct; localize with cutoffs, gain $\lambda^{-1}$ per integration by parts against the phase gradient, and balance the gain against the $|x|^{-2}$ loss and the annulus volume to obtain the exponent $d/2$.

1.1 Non-stationary decay (a). Assume $|\nabla\varphi|\ge\kappa>0$ on a neighbourhood of $\operatorname{supp}a$. Cover $\operatorname{supp}a$ by finitely many balls on each of which some partial derivative satisfies $|\partial_j\varphi|\ge\kappa/\sqrt d$; such a cover exists because $|\nabla\varphi|$ is the Euclidean norm of the gradient. By [F5] choose a smooth partition of unity $\sum_r\rho_r=1$ on a neighbourhood of $\operatorname{supp}a$ subordinated to that cover and replace $a$ by $a\rho_r$, reducing to the case where $|\partial_j\varphi|\ge c>0$ on $\operatorname{supp}a$ for one index $j$. Put $\psi:=1/\partial_j\varphi$ on a neighbourhood of $\operatorname{supp}a$ and $F:=e^{2\pi i\lambda\varphi}$. Since $\partial_jF=2\pi i\lambda\,\partial_j\varphi\,F$, [F1] gives $$\int e^{2\pi i\lambda\varphi}a\,dx=(2\pi i\lambda)^{-1}\int(\partial_jF)\psi a\,dx=-(2\pi i\lambda)^{-1}\int F\,\partial_j(\psi a)\,dx.$$ Iterating this identity $N$ times (each step replaces the amplitude by $\partial_j(\psi\,\cdot)$, a smooth compactly supported function) yields $|I(\lambda)|\le(2\pi\lambda)^{-N}C_N$, where $C_N$ is a finite supremum of derivatives of $a,\psi$ on the support; summing the finitely many patches gives (a). [F1, F5, given, algebra]

2.1 Localization at the stationary point (b). Fix $x_0$ and $Q$ as in [F2], and choose $\eta>0$ so small that the expansion and the lower bound $|\nabla\varphi(x)|\ge\tfrac\mu2|x-x_0|$ hold on the ball $B(x_0,\eta)$ and $B(x_0,\eta)$ is contained in the interior of $\operatorname{supp}a$ where needed; choose a smooth cutoff $\rho$ with $\rho=1$ on $B(x_0,\eta/2)$, $\rho=0$ outside $B(x_0,\eta)$, and put $a_1:=\rho a$, $a_2:=(1-\rho)a$. On $\operatorname{supp}a_2$ the gradient does not vanish and is bounded below by a positive number depending on $\eta$, $a$ and $\varphi$, so [F2] does not apply there but (a) of step 1.1 does: $|\int e^{2\pi i\lambda\varphi}a_2|\le C_N\lambda^{-N}$ for every $N$. Hence it suffices to estimate $I_1(\lambda)=\int e^{2\pi i\lambda\varphi}a_1$. [F1, F2, F5, step 1.1]

3.1 Smooth dyadic decomposition. Translate $x_0$ to zero. Choose a smooth radial cutoff $\theta$ equal to one for $|x|\le1$ and zero for $|x|\ge2$. Put $r=\lambda^{-1/2}$. If $r$ is comparable to or larger than the fixed localization radius $\eta$, the crude compact-support bound already gives the claimed estimate, after adjusting a constant on that bounded interval of $\lambda$. Otherwise $a_1\theta(x/r)$ is supported in $|x|\le2r$ and its integral is bounded by $C r^d=C\lambda^{-d/2}$. The remaining amplitude has the telescoping smooth decomposition $a_1\sum_{j\ge0}[\theta(x/(2^{j+1}r))-\theta(x/(2^jr))]$; only finitely many summands meet its support. The $j$th term is supported where $s_j\le|x|\le4s_j$, $s_j=2^jr$, and its derivative of order $\ell$ is bounded by $C_\ell s_j^{-\ell}$, for $s_j$ below a fixed constant. [F5, F7, step 2.1, algebra]

4.1 Smooth annulus estimates. On each such annulus put $V=\nabla\varphi/|\nabla\varphi|^2$. Taylor's estimate [F2] and the product and quotient rules give $|\partial^\alpha V(x)|\le C_\alpha s_j^{-1-|\alpha|}$ there: the numerator is $O(s_j)$, its higher derivatives are bounded, and the denominator is at least $c s_j^2$; differentiating the reciprocal and using the product rule gives the stated bounds by induction. For its smooth compactly supported amplitude $u_j$, integration by parts over all of $\mathbb R^d$ gives $\int e^{2\pi i\lambda\varphi}u_j=-(2\pi i\lambda)^{-1}\int e^{2\pi i\lambda\varphi}\operatorname{div}(Vu_j)$. After $N$ iterations the new amplitude is bounded by $C_N\lambda^{-N}s_j^{-2N}$: each divergence consumes one derivative and one factor $V$, and the derivative estimates of step 3.1 and of $V$ give this bound by the Leibniz rule. Its support has volume at most $Cs_j^d$, so its integral is at most $C_N\lambda^{-N}s_j^{d-2N}$. Choose $2N>d$ and sum the geometric series over $s_j=2^jr$; it is bounded by $C\lambda^{-N}r^{d-2N}=C\lambda^{-d/2}$. Every integration uses smooth compact support away from zero, so there is no boundary term or singular vector field at the stationary point. Combining this with steps 2.1 and 3.1 proves the basic estimate. [F1, F2, F5, F7, step 3.1, algebra]

5.1 Differentiated bounds. By [F6] the $k$th derivative of the centered local integral has amplitude $u_k=(2\pi i(\varphi-\varphi(0)))^k a_1$. Taylor's formula gives $|\partial^\ell u_k|\le C_{k,\ell}|x|^{\max(2k-\ell,0)}$ near zero: a derivative of order $\ell$ distributed among the $k$ factors reduces the total vanishing order by at most $\ell$. On the small ball its absolute integral is at most $Cr^{d+2k}$. On the smooth annulus the cutoff amplitude has derivative bounds $C_{k,\ell}s_j^{2k-\ell}$ (also for $\ell>2k$, since $s_j$ is bounded above and $s_j^{2k-\ell}$ is then bounded below). The same $N$ integrations give the bound $C\lambda^{-N}s_j^{d+2k-2N}$. Choosing $2N>d+2k$ and summing yields $C\lambda^{-N}r^{d+2k-2N}=C\lambda^{-d/2-k}$. On the nonstationary support, differentiation of the centered exponential multiplies its fixed amplitude by $(2\pi i(\varphi-\varphi(0)))^k$; step 1.1 still gives arbitrarily fast decay. This proves every centered derivative estimate. [F2, F6, F7, step 1.1, step 3.1, step 4.1, algebra]

6.1 Conclusion. Step 1.1 proves (a) for all $N$; steps 2.1–4.1 prove the $O(\lambda^{-d/2})$ bound of (b) with the stated dependence on $d$, finitely many derivatives of $a,\varphi$, $\mu$ and the lower bound for $|\nabla\varphi|$ off the small ball; step 5.1 proves the differentiated bounds. The argument uses finite-dimensional Taylor estimates, the stated Fubini and differentiation-under-the-integral interfaces, the fundamental theorem, and smooth compact-support integration by parts. All spatial partitions in [F5] use finitely many Euclidean bumps. No additional Choice principle is invoked beyond the stated hypotheses of these integration suppliers; this does not assert that every item in their transitive foundational closure has a choice-free proof. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

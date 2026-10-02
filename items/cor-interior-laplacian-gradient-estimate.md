---
id: cor-interior-laplacian-gradient-estimate
kind: corollary
title: Interior gradient bound for Poisson solutions
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [cor-mean-value-theorem, def-countable-choice, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, def-newtonian-potential, cor-harmonic-cauchy-estimates-in-supremum-norm, lem-laplace-fundamental-kernel-is-locally-integrable, lem-smooth-bump-between-concentric-euclidean-balls, lem-sphere-and-ball-measures-scale, thm-chain-rule-for-total-derivatives, thm-dominated-convergence, thm-newtonian-potential-for-holder-data-is-classical, thm-polar-coordinates-formula-for-lebesgue-measure, thm-real-power-continuity-and-derivatives]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, Theorems 2.7 and 2.9 gradient bounds for Poisson solutions"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A: Partial Differential Equations (2023)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§4.2, printed pp. 60–61, Theorem 4.4 and its interior consequences"
---

## Statement

Assume Countable Choice, $n\ge2$ and $0<\alpha<1$. Let $u\in C^2(B_r(a))\cap L^\infty(B_r(a))$ and let $f\in C^{0,\alpha}(B_r(a))$ have finite Hölder seminorm, with $-\Delta u=f$ pointwise. Then
$$\|Du\|_{\infty;B_{r/2}(a)}\le C_n\Bigl(r^{-1}\|u\|_{\infty;B_r(a)}+r\|f\|_{\infty;B_r(a)}\Bigr).$$
No Hölder seminorm of $f$ occurs on the right-hand side.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, $0<\alpha<1$, a centre $a\in\mathbb R^n$, a radius $r>0$, $u\in C^2(B_r(a))\cap L^\infty(B_r(a))$ and $f\in C^{0,\alpha}(B_r(a))$ with finite Hölder seminorm and $-\Delta u=f$ pointwise.

[F1] The normalized kernel is $\Phi(z)=|z|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and $\Phi(z)=-(2\pi)^{-1}\log|z|$ for $n=2$, with $\nabla\Phi(z)=-z/(\omega_{n-1}|z|^n)$ for $n\ge3$ and $\nabla\Phi(z)=-z/(2\pi|z|^2)$ for $n=2$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]]); $\Phi$ is locally integrable ([[lem-laplace-fundamental-kernel-is-locally-integrable]]).

[F2] For nonnegative Borel $F$, polar coordinates give $\int_{B_s}F(|z|)dz=\omega_{n-1}\int_0^sF(\rho)\rho^{n-1}d\rho$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-sphere-and-ball-measures-scale]]).

[F3] The Newtonian potential of $G$ is $N G(x)=\int_{\mathbb R^n}\Phi(x-y)G(y)dy$ ([[def-newtonian-potential]]).

[F4] For compactly supported $\alpha$-Hölder $G$, its Newtonian potential is $C^2$ and satisfies $-\Delta NG=G$ pointwise ([[thm-newtonian-potential-for-holder-data-is-classical]]).

[F5] Dominated convergence for Lebesgue integrals on $\mathbb R^n$ ([[thm-dominated-convergence]]).

[F6] For $0<\rho<R$ there is a smooth $\eta$ with $\eta=1$ on $\overline B_\rho(0)$ and $\operatorname{supp}\eta\subseteq B_R(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]); rescaled and translated, such cutoffs exist between any two concentric Euclidean balls.

[F7] The real mean value theorem applies to a real-valued function continuous on a segment and differentiable in its interior ([[cor-mean-value-theorem]]).

[F8] For harmonic $v$ on an open set containing $\overline{B_\rho(x)}$: $|D^\alpha v(x)|\le C'_{n,\alpha}\rho^{-|\alpha|}\sup_{B_\rho(x)}|v|$ ([[cor-harmonic-cauchy-estimates-in-supremum-norm]]).

[F9] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F9], let $x_0\in B_{r/2}(a)$ be arbitrary, and put $\rho:=r/4$, so that $\overline{B_\rho(x_0)}\subset B_r(a)$; write $M_u:=\|u\|_{\infty;B_r(a)}$ and $M_f:=\|f\|_{\infty;B_r(a)}$. Both are finite: $M_u<\infty$ is given, and the finite Hölder seminorm bounds $|f(x)|\le|f(a)|+[f]_{0,\alpha;B_r(a)}(2r)^\alpha$ for every $x\in B_r(a)$. [given, F9]

2.1 Kernel integrals. By [F1] and [F2], $|D\Phi(z)|\le C_n|z|^{1-n}$ and $\int_{B_s}|D\Phi(z)|dz\le C_ns$ for every $s>0$. For the fixed scale $\rho$ of step 1.1, a change of variables $z=\rho\zeta$ in the power-kernel case $n\ge3$, and the identity $\Phi(\rho\zeta)-\Phi(\rho)=-(2\pi)^{-1}\log|\zeta|$ when $n=2$, give $$\int_{B_{3\rho/2}}|\Phi(z)-\Phi(\rho)|dz\le C_n\rho^2.$$ The scaled integral is finite in every dimension by polar coordinates; constants depend only on $n$. [given, F1, F2, algebra]

2.2 Cutoff and normalized potential at $x_0$. By [F6] fix a smooth cutoff $\eta$ with $\eta=1$ on $\overline B_{3\rho/4}(x_0)$ and $\operatorname{supp}\eta\subseteq B_\rho(x_0)$, and put $G:=\eta f$ on $B_\rho(x_0)$, extended by $0$ to $\mathbb R^n$. Then $G$ is continuous, compactly supported and has finite $\alpha$-Hölder seminorm. Define $$w(x):=\int_{\mathbb R^n}\bigl(\Phi(x-y)-\Phi(\rho)\bigr)G(y)dy=NG(x)-\Phi(\rho)\int_{\mathbb R^n}G(y)dy.$$ By [F3] and [F4], $w\in C^2(\mathbb R^n)$ and $-\Delta w=G$ pointwise; the subtracted term is constant in $x$. [step 1.1, F3, F4, F6]

3.1 The remainder $h:=u-w$ is harmonic on $B_{3\rho/4}(x_0)$: there $\eta=1$, so $G=f$ and $-\Delta h=-\Delta u+\Delta w=f-G=0$ by the hypothesis and step 2.2. [step 2.2, algebra]

3.2 Explicit form and bound for $Dw$. Fix $x\in B_{3\rho/4}(x_0)$ and a coordinate $k$. For $y$ with $|x-y|>2|t|$, the real mean value theorem [F7] and $|D\Phi(z)|\le C_n|z|^{1-n}$ give $$\left|\frac{\Phi(x+te_k-y)-\Phi(x-y)}t\right|\le C_n|x-y|^{1-n},$$ since every point on the segment between $x-y$ and $x+te_k-y$ has norm at least $|x-y|/2$. The right side is integrable on the bounded support of $G$. On this far region the quotients converge pointwise for $y\ne x$ to $\partial_k\Phi(x-y)$, so dominated convergence [F5], with the indicator of $|x-y|>2|t|$, gives convergence of the far-region integrals to $\int\partial_k\Phi(x-y)G(y)dy$. On the near region $|x-y|\le2|t|$, the quotient integral is bounded by $$\frac{M_f}{|t|}\left(\int_{B_{2|t|}(te_k)}|\Phi(z)|dz+\int_{B_{2|t|}(0)}|\Phi(z)|dz\right),$$ which tends to zero: it is $O(|t|)$ for $n\ge3$ and $O(|t|(1+|\log|t||))$ for $n=2$, by polar coordinates [F1, F2]. The integral of $|D\Phi(x-y)G(y)|$ over that near region is $O(M_f|t|)$ by step 2.1. Hence $\partial_kw(x)=\int\partial_k\Phi(x-y)G(y)dy$. At $x=x_0$, this yields $|Dw(x_0)|\le M_f\int_{B_\rho(x_0)}|D\Phi(x_0-y)|dy\le C_nM_f\rho$. For $x\in B_{\rho/2}(x_0)$, the normalized kernel and the inclusion $B_\rho(x_0)\subset B_{3\rho/2}(x)$ give $|w(x)|\le M_f\int_{B_{3\rho/2}}|\Phi(z)-\Phi(\rho)|dz\le C_nM_f\rho^2$ by step 2.1. [step 2.1, step 2.2, F1, F2, F5, F7, algebra]

4.1 Harmonic gradient bound. Since $h$ is harmonic on $B_{3\rho/4}(x_0)\supseteq\overline{B_{\rho/2}(x_0)}$, apply [F8] separately to each coordinate derivative $\partial_i h(x_0)$, $0\le i<n$. The vector norm satisfies $|Dh(x_0)|\le\sqrt n\max_i|\partial_i h(x_0)|$, so, absorbing $\sqrt n$ into $C'_n$, $$|Dh(x_0)|\le C'_n(2/\rho)\sup_{B_{\rho/2}(x_0)}|h|\le C'_n(2/\rho)\bigl(M_u+C_nM_f\rho^2\bigr)$$ by steps 3.1 and 3.2. [step 3.1, step 3.2, F8, algebra]

5.1 Combining steps 3.2 and 4.1 at the point $x_0$, $|Du(x_0)|\le|Dw(x_0)|+|Dh(x_0)|\le C_nM_f\rho+C'_n(2/\rho)\bigl(M_u+C_nM_f\rho^2\bigr)\le C''_n\bigl(\rho^{-1}M_u+\rho M_f\bigr)=C''_n\bigl(4r^{-1}M_u+\tfrac14rM_f\bigr)$, and absorbing the numerical factors into $C''_n$ gives $|Du(x_0)|\le C_n(r^{-1}M_u+rM_f)$. [step 3.2, step 4.1, algebra]

6.1 Since $x_0\in B_{r/2}(a)$ was arbitrary, taking the supremum over $x_0$ gives $\|Du\|_{\infty;B_{r/2}(a)}\le C_n(r^{-1}\|u\|_{\infty;B_r(a)}+r\|f\|_{\infty;B_r(a)})$, the displayed estimate; the constants encountered in steps 2.1, 3.2 and 4.1 depend only on $n$, and the Hölder seminorm of $f$ entered only through the qualitative $C^2$ clause of [F4] used to define $w$ and $h$, never through a quantitative bound. The argument covers complex-valued $u$ and $f$ by applying the real case to real and imaginary parts. [step 5.1, cases] ∎

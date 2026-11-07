---
id: lem-short-interval-parseval-frequency-reduction
kind: lemma
title: Short-interval Parseval reduction to Dirichlet-polynomial frequencies
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
axiom_use: No choice axiom is used; the Fourier identity is proved from compact integrals and explicit Gaussian tails.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-fourier-transform-of-a-gaussian
- lem-perron-kernel
- lem-truncated-perron-kernel
- thm-ftc-second-part
- thm-riemann-fubini-on-product-rectangles
sources:
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
    locator: Lemma 14, printed pp. 21–23. The local proof retains both frequency signs for complex coefficients.
---

## Statement

Let $X\ge e^{20}$ and $1\le h_1\le h_2=X/(\log X)^{1/5}$. Let $|a_n|\le1$ for integers $X\le n\le4X$, and put
$$A(s)=\sum_{X\le n\le4X}a_nn^{-s},\qquad D_j(x)=\frac1{h_j}\sum_{x<n\le x+h_j}a_n,$$
where the sum is taken over the displayed finite support. Write $T_0=(\log X)^{1/15}$ and $T_1=X/h_1$. Then
$$\frac1X\int_X^{2X}|D_1(x)-D_2(x)|^2dx\ll\frac1{(\log X)^{2/15}}+\int_{T_0\le|t|\le T_1}|A(1+it)|^2dt+\sup_{T\ge T_1}\frac{T_1}T\int_{T\le|t|\le2T}|A(1+it)|^2dt.$$
All constants are absolute. The integral over $x$ is an ordinary finite piecewise-continuous integral; both signs of $t$ are retained, including for complex $a_n$. No multiplicative-function or almost-all-interval assertion is made.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] The symmetric Perron kernel at any positive real abscissa has values $0,1/2,1$ according as its positive argument is below, at, or above one; its finite truncation has the stated scalar error. [[lem-perron-kernel]] [[lem-truncated-perron-kernel]]

[F2] The Fourier transform of a real Gaussian is a Gaussian with the stated normalization. [[lem-fourier-transform-of-a-gaussian]]

[F3] Finite-rectangle Riemann integrals may be interchanged, and compact integrals of continuous derivatives evaluate by endpoint differences. [[thm-riemann-fubini-on-product-rectangles]] [[thm-ftc-second-part]]

## Proof

1.1 For $s=1+it$ put $K_h(s,x)=((x+h)^s-x^s)/s$. The symmetric Perron kernel in [F1], followed by the absolutely convergent correction obtained from the two endpoints, gives, for every $x$ away from the finitely many integer endpoints, $$\sum_{x<n\le x+h}a_n=\lim_{R\to\infty}\frac1{2\pi}\int_{-R}^R A(1+it)K_h(1+it,x)dt.$$ The endpoint half-weights affect only finitely many $x$ in $[X,2X]$ and hence do not change its integral. Equivalently, the identity follows termwise from the real Perron kernel after substituting $z=(x+h)/n$ and $z=x/n$. [F1, given, algebra]

1.2 We use the following finite-band Fourier identity. If $B$ is bounded, piecewise continuously differentiable with finitely many pieces, and supported in a fixed compact interval and $G(v)=\int B(t)e^{itv}dt$, then $$\int_{\mathbb R}|G(v)|^2dv=2\pi\int_{\mathbb R}|B(t)|^2dt.$$ To prove it, insert $e^{-\epsilon v^2}$ on the left, expand the square on finite rectangles, and use [F2–F3]. The resulting Gaussian kernel is an approximate identity of total mass $2\pi$; at all but finitely many jump points it converges to $B$, and its tails are explicitly exponentially bounded. Finite partition and uniform continuity away from jumps pass to the limit on the right. On the left, integration by parts on each smooth piece gives $G(v)=O((1+|v|)^{-1})$, so the Gaussian may be removed by splitting at a large $|v|$ and using the integrable $v^{-2}$ tail. This proves the identity without a general $L^2$ extension or a choice axiom. [F2, F3, construct, algebra]

2.1 Split the finite integral at $|t|=T_0$. Since $|A(1+it)|\le\sum_{X\le n\le4X}1/n\ll1$, Taylor's integral formula on $1\le x\le3X$ yields uniformly for $|t|\le T_0$ and $h\le h_2$ $$\frac{K_h(1+it,x)}h=x^{it}+O\!\left((1+|t|)\frac hX\right).$$ Thus the common low-frequency main terms cancel in $D_1-D_2$, and their remainder is $O(T_0^2h_2/X)=O((\log X)^{-1/15})$. Its mean square is the first term of the asserted bound. [F3, step 1.1, given, algebra]

2.2 Let $V_{h,R}(x)$ be the contribution of $T_0\le|t|\le R$ in step 1.1. For $k_u(s)=((1+u)^s-1)/s$, the exact algebraic identity $$K_h(s,x)=\frac{x}{2h}\int_{h/x}^{3h/x}x^s k_u(s)du-\frac{x+h}{2h}\int_0^{2h/(x+h)}(x+h)^s k_u(s)du$$ follows by substituting $w=xu$ in the first integral and $w=h+(x+h)u$ in the second. Apply Cauchy–Schwarz to each $u$ integral, extend its range to $0\le u\le3h/X$, and use $X\le x,x+h\le3X$. For a fixed $u$, apply step 1.2 to $$B_u(t)=\mathbf1_{T_0\le|t|\le R}A(1+it)k_u(1+it).$$ The changes $v=\log x$ and $v=\log(x+h)$ bound the two $x$ integrals by the global Fourier integral, with an absolute factor. Since $|k_u(1+it)|\ll\min(h/X,1/|t|)$ for $0\le u\le3h/X$, the result is $$\frac1X\int_X^{2X}\left|\frac{V_{h,R}(x)}h\right|^2dx\ll\int_{T_0\le|t|\le R}|A(1+it)|^2\min\!\left\{1,\frac{X^2}{h^2t^2}\right\}dt.$$ [F3, step 1.1, step 1.2, given, algebra]

3.1 The same estimate applied to differences of finite frequency bands shows that the high-frequency integrals converge in mean square as $R\to\infty$, because $A$ is bounded and $\int_R^\infty t^{-2}dt\to0$. The pointwise symmetric Perron limit from step 1.1 identifies that limit with $D_h$ minus its low-frequency part; one may use the scalar kernel error in [F1] on the complement of finitely many $R^{-1/2}$-neighborhoods of endpoints, whose total length tends to zero, and boundedness on those neighborhoods. Thus step 2.2 holds with $R=\infty$. [F1, step 1.1, step 2.2, given, algebra]

4.1 Since $h_2\ge h_1$, both frequency weights in step 2.2 are bounded by $\min\{1,(T_1/|t|)^2\}$. Split the integral at $T_1$, then split the tail into dyadic bands $2^kT_1\le|t|\le2^{k+1}T_1$. On the $k$th band the weight is at most $4^{-k}$, so the sum is at most a constant times $$\sup_{T\ge T_1}\frac{T_1}T\int_{T\le|t|\le2T}|A(1+it)|^2dt.$$ Combine this with the low-frequency estimate of step 2.1 and $|z+w|^2\le2|z|^2+2|w|^2$. This is the displayed bound. [step 2.1, step 2.2, step 3.1, algebra] ∎

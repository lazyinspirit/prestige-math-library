---
id: lem-gaussian-rbf-power-function-fill-distance-bound
kind: lemma
title: Gaussian RKHS power function decays exponentially with inverse fill distance
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - def-countable-choice
  - ex-gaussian-radial-kernel
  - thm-canonical-rkhs-construction-and-reproducing-property
  - lem-finite-dimensional-projection-in-a-real-inner-product-space
  - lem-dense-cube-polynomial-norming-and-reproduction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Rieger and Zwicknagl, Sampling inequalities for infinitely smooth functions, with applications to interpolation and machine learning"
      url: "https://link.springer.com/content/pdf/10.1007/s10444-008-9089-0.pdf"
      locator: "Theorem 6.1 and its proof; §§4.2, 4.3, and 4.5 for the compact-cube route, especially the local polynomial reproduction input attributed to Madych and Nelson (1992), Lemma 1."
    - title: "Belkin, Hsu, Ma, and Mandal, Reconciling modern machine learning practice and the bias-variance trade-off"
      url: "https://arxiv.org/pdf/1812.11118"
      locator: "Appendix A, Theorem 1 and proof sketch; the proof sketch refers to Wendland (2004), Theorem 11.22."
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, let $\Omega\subset\mathbb R^d$ be a fixed closed cube with
positive side length, let $\sigma>0$, and set
$k_\sigma(x,z)=\exp(-\|x-z\|_2^2/(2\sigma^2))$ on $\Omega$. Let
$\mathcal H_\sigma$ be its real reproducing-kernel Hilbert space. For a finite
nonempty set $X=\{x_1,\ldots,x_m\}\subset\Omega$, define its Euclidean fill
distance and Gaussian power function by
$$h_X:=\sup_{x\in\Omega}\min_{1\le j\le m}\|x-x_j\|_2,\qquad
P_X(x):=\inf_{v\in\operatorname{span}\{k_\sigma(\cdot,x_j):1\le j\le m\}}
\|k_\sigma(\cdot,x)-v\|_{\mathcal H_\sigma}.$$
There are constants $C,c,h_0>0$, depending only on $d,\Omega,\sigma$, such
that every such $X$ with $0<h_X\le h_0$ satisfies
$$\sup_{x\in\Omega}P_X(x)\le
C\exp\!\left(-c\frac{|\log h_X|}{h_X}\right).$$

## Statement references

[Rieger and Zwicknagl, Theorem 6.1 and proof](https://link.springer.com/content/pdf/10.1007/s10444-008-9089-0.pdf)

[Belkin, Hsu, Ma, and Mandal, Appendix A, Theorem 1 and proof sketch](https://arxiv.org/pdf/1812.11118)

## Facts & Assumptions

**Given:** The Gaussian kernel, cube $\Omega$, and real RKHS
$\mathcal H_\sigma$ from the Statement.

[A1] The Axiom of Countable Choice says every countable sequence of nonempty
sets has a choice function ([[def-countable-choice]]).

[F1] The Gaussian radial function is a real positive semidefinite kernel on
$\mathbb R^d$ ([[ex-gaussian-radial-kernel]]).

[F2] Under Countable Choice a real positive semidefinite kernel has a canonical
RKHS with the stated reproducing property
([[thm-canonical-rkhs-construction-and-reproducing-property]]).

[F3] The finite-dimensional span in the definition has a unique orthogonal
projection in a real inner-product space
([[lem-finite-dimensional-projection-in-a-real-inner-product-space]]).

[F4] There are $A>1$ and $\kappa>0$, depending only on $d$, such that on any closed cube of side length $L>0$, if a finite nonempty sample set has fill distance $h$ and $2nh/L\le\kappa$ for an integer $n\ge1$, then at each $x$ there are real coefficients $\lambda_j$ reproducing all polynomials of total degree at most $n$ with $\sum_j|\lambda_j|\le A^n$ ([[lem-dense-cube-polynomial-norming-and-reproduction]]).

## Proof

1.1 Let $z_c$ be the center of $\Omega$, let $L>0$ be its side length, and use orthonormal coordinates along its edges, writing $u(z)$ for the coordinates of $z-z_c$. These coordinates preserve distances and give $\|u(z)\|_2\le B=L\sqrt d/2$ for every $z\in\Omega$. Put $t=B^2/\sigma^2>0$. For a multi-index $\alpha=(\alpha_1,\ldots,\alpha_d)\in\mathbb N_0^d$, write $|\alpha|=\sum_i\alpha_i$, $\alpha!=\prod_i\alpha_i!$, and $u^\alpha=\prod_i u_i^{\alpha_i}$, and define
$$\Phi_\alpha(z)=\exp(-\|u(z)\|_2^2/(2\sigma^2))\frac{u(z)^\alpha}{\sigma^{|\alpha|}\sqrt{\alpha!}}.$$
Multiplying the convergent exponential power series in the $d$ coordinates yields
$$\sum_\alpha\Phi_\alpha(z)\Phi_\alpha(w)=e^{-(\|u(z)\|_2^2+\|u(w)\|_2^2)/(2\sigma^2)}e^{u(z)\cdot u(w)/\sigma^2}=k_\sigma(z,w).$$
The series is absolutely convergent, since replacing each coordinate product by its absolute value gives the finite value $e^{-(\|u(z)\|_2^2+\|u(w)\|_2^2)/(2\sigma^2)}\exp(\sum_i|u_i(z)u_i(w)|/\sigma^2)$. In particular the vector $\Phi(z)=(\Phi_\alpha(z))_\alpha$ is square summable with squared norm $k_\sigma(z,z)=1$. [given, construct, algebra]

1.2 For any finite set of points $z_1,\ldots,z_q\in\Omega$ and real coefficients $a_1,\ldots,a_q$, the reproducing property gives
$$\left\|\sum_{j=1}^qa_jk_\sigma(\cdot,z_j)\right\|_{\mathcal H_\sigma}^2=\sum_{j,l=1}^qa_ja_lk_\sigma(z_j,z_l)=\left\|\sum_{j=1}^qa_j\Phi(z_j)\right\|_{\ell^2}^2.$$
The second equality follows from step 1.1 by interchanging a finite sum with an absolutely convergent series. Thus this norm identity concerns finite kernel combinations and requires no description of the whole Gaussian RKHS or extension of its functions to $\mathbb R^d$. The RKHS used here is available under the stated Countable Choice hypothesis. [A1, F1, F2, step 1.1, algebra]

2.1 Fix $X$ as in the Statement, set $h=h_X$, and for now choose an integer $n\ge1$ such that $2nh/L\le\kappa$. Fix any $x\in\Omega$ and take coefficients $\lambda_j$ from [F4]. Define real coefficients
$$b_j=\lambda_j\exp\left(\frac{\|u(x_j)\|_2^2-\|u(x)\|_2^2}{2\sigma^2}\right).$$
Then $\sum_j|b_j|\le e^{t/2}A^n$. For every $|\alpha|\le n$, the polynomial $z\mapsto u(z)^\alpha$ has total degree at most $n$, so reproduction implies
$$\sum_jb_j\Phi_\alpha(x_j)=\frac{e^{-\|u(x)\|_2^2/(2\sigma^2)}}{\sigma^{|\alpha|}\sqrt{\alpha!}}\sum_j\lambda_ju(x_j)^\alpha=\Phi_\alpha(x).$$
Consequently all coordinates of $\Phi(x)-\sum_jb_j\Phi(x_j)$ with $|\alpha|\le n$ vanish. [F4, step 1.1, construct, algebra]

2.2 Write $\Phi_{>n}(z)$ for the coordinates with $|\alpha|>n$. Expanding $(\sum_i u_i(z)^2/\sigma^2)^r$ by multiplication shows that its monomial coefficient at multi-index $\alpha$ of size $r$ is $r!/\alpha!$: it counts the ordered $r$ choices of coordinates with the prescribed multiplicities. Hence
$$\|\Phi_{>n}(z)\|_{\ell^2}^2=e^{-\|u(z)\|_2^2/\sigma^2}\sum_{r=n+1}^{\infty}\frac{(\|u(z)\|_2^2/\sigma^2)^r}{r!}\le\sum_{r=n+1}^{\infty}\frac{t^r}{r!}.$$
If $n+2\ge2t$, the ratio of any successive terms in the last tail is at most $1/2$, so summing the geometric majorant gives
$$\sum_{r=n+1}^{\infty}\frac{t^r}{r!}\le\frac{2t^{n+1}}{(n+1)!}\le2\left(\frac{et}{n+1}\right)^{n+1}.$$
For the final inequality, $\log(q!)=\sum_{j=1}^q\log j\ge\int_1^q\log s\,ds=q\log q-q+1$ for every integer $q\ge1$, and exponentiation yields $q!\ge(q/e)^q$. Thus the bound holds uniformly for every $z\in\Omega$. [step 1.1, algebra]

2.3 The vector $\sum_j b_jk_\sigma(\cdot,x_j)$ is an admissible vector in the infimum defining $P_X(x)$. Steps 1.2 and 2.1 show that its error norm is $\|\Phi_{>n}(x)-\sum_jb_j\Phi_{>n}(x_j)\|_{\ell^2}$. Apply the triangle inequality to these finitely many square-summable vectors and use steps 2.1 and 2.2 to obtain
$$P_X(x)\le\sqrt2(1+e^{t/2}A^n)\left(\frac{et}{n+1}\right)^{(n+1)/2}.$$
The $\ell^2$ triangle inequality here can be obtained from the finite Euclidean triangle inequality on every initial finite collection of multi-indices and then passing to the supremum of their squared partial sums; thus no additional choice principle is involved. The bound is independent of $x$, and holds whenever $n\ge1$, $2nh/L\le\kappa$, and $n+2\ge2t$. [given, step 1.2, step 2.1, step 2.2, algebra]

3.1 Put $D=\kappa L/2>0$ and $n=\lfloor D/h\rfloor$. For all sufficiently small $h>0$ this integer satisfies $n\ge1$, $n+2\ge2t$, and $D/(2h)\le n\le D/h$; the lower bound follows from $\lfloor s\rfloor\ge s/2$ for $s\ge2$. Also $2nh/L\le\kappa$. Since $1+e^{t/2}A^n\le2e^{t/2}A^n$, the logarithm of the positive bound in step 2.3 is at most
$$-\frac12(n+1)\log(n+1)+K(n+1),$$
where one may take $K=1+\frac32\log2+t/2+\log A+\frac12|\log(et)|>0$. Decrease $h_0>0$ until for all $0<h\le h_0$ the preceding integer conditions hold, $h<1$, $\log(n+1)\ge4K$, and $\log(n+1)\ge\frac12|\log h|$. Such an $h_0$ exists because $n\ge D/(2h)$ implies $\log(n+1)\ge|\log h|+\log(D/2)$, which tends to infinity and eventually exceeds $|\log h|/2$. [F4, step 2.3, choose, algebra]

3.2 For $0<h\le h_0$ the exponent in step 3.1 is at most $-(n+1)\log(n+1)/4$, and hence at most $-D|\log h|/(16h)$, by the two lower bounds for $n$ and $\log(n+1)$. Therefore step 2.3 gives, uniformly in $x\in\Omega$,
$$P_X(x)\le\exp\left(-\frac D{16}\frac{|\log h|}{h}\right).$$
Taking the supremum over $x$ proves the Statement with $c=D/16$ and $C=1$, and also with any larger positive $C$. All constants depend only on $d$, $\Omega$, and $\sigma$. Countable Choice was used only through the canonical RKHS supplier in step 1.2; the reproduction and feature estimates add no further choice assumption. [step 2.3, step 3.1, algebra] ∎


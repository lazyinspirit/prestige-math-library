---
id: thm-harmonic-baoab-invariant-law-and-stability-limit
kind: theorem
title: "Exact invariant covariance and stability threshold for scalar harmonic BAOAB"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-positive-definite-gaussian-integral
  - thm-integration-by-parts
  - thm-dominated-convergence
  - def-axiom-of-choice
  - alg-baoab-underdamped-langevin-splitting
  - lem-exact-ornstein-uhlenbeck-momentum-substep
  - lem-stable-gaussian-autoregression-invariant-law
proof_strategy: direct
axiom_base: Full AC
axiom_use: "AC is inherited through the Gaussian law and autoregression suppliers; the scalar covariance and stability calculations use no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §2 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §5.2.2"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
    - title: "Adam Telatovich and Xiantao Li, Strong Convergence Analysis for Numerical Methods for the Langevin Dynamics Model, §3.2"
      url: "https://arxiv.org/pdf/1706.04237v2"
---

## Statement

Let $d=1$, $M=m>0$, $V(q)=kq^2/2$ with $k>0$, and $\beta,\gamma,h>0$. Put
$$\omega^2=\frac{k}{m},\qquad r=\frac{h^2\omega^2}{4}=\frac{h^2k}{4m},\qquad a=e^{-\gamma h}.$$
For $0<h<2\sqrt{m/k}$, the BAOAB chain of [[alg-baoab-underdamped-langevin-splitting]] has the unique invariant law
$$\begin{pmatrix}Q\\P\end{pmatrix}\sim N_2\!\left(0,\begin{pmatrix}(\beta k)^{-1}&0\\0&(m/\beta)(1-r)\end{pmatrix}\right).$$
Thus the position variance is exactly the canonical Gibbs variance $1/(\beta k)$, while the momentum variance has bias $-h^2k/(4\beta)$ relative to the canonical value $m/\beta$. The linear transition matrix $A$ in proof step 1.2 has spectral radius $\rho(A):=\max\{|\lambda|:\lambda\text{ is a complex eigenvalue of }A\}$ less than one exactly for $0<h<2\sqrt{m/k}$; at equality its spectral radius is one, and for $h>2\sqrt{m/k}$ the chain has no invariant probability law. No conclusion about nonquadratic potentials or general BAOAB superconvergence follows from this harmonic calculation.

## Facts & Assumptions

**Given:** The scalar harmonic model above, AC, the BAOAB algorithm, and $h,\beta,\gamma,m,k>0$.

[F1] [[def-underdamped-langevin-equation-and-canonical-gibbs-density]]: the harmonic force is $-kq$, the momentum is $p=mv$, and the canonical density is proportional to $e^{-\beta kq^2/2}e^{-\beta p^2/(2m)}$. The density itself does not state its variances; the local calculation in proof step 1.1 derives them.

[F2] [[alg-baoab-underdamped-langevin-splitting]]: one step is the ordered B/2, A/2, O, A/2, B/2 sequence, with the exact OU momentum update.

[F3] [[lem-exact-ornstein-uhlenbeck-momentum-substep]]: the O noise is centered Gaussian and has variance $\beta^{-1}m(1-a^2)$ in the scalar momentum coordinate.

[L1] [[lem-stable-gaussian-autoregression-invariant-law]]: if a linear Gaussian recursion has exponentially decaying matrix powers, it has a unique invariant Gaussian whose covariance is the convergent discrete Lyapunov series.

[F4] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: Lebesgue measure in $(q,p)$ is the product of the $q$ and $p$ Lebesgue measures on Borel sets, and Tonelli factors the nonnegative Gibbs density.

[F5] [[lem-positive-definite-gaussian-integral]]: for $c>0$, $\int_{\mathbb R}e^{-cx^2/2}dx=\sqrt{2\pi/c}$.

[F6] [[thm-integration-by-parts]]: the compact-interval integration-by-parts formula applies to the smooth Gaussian factors used in proof step 1.1.

[F7] [[thm-dominated-convergence]]: an integrable majorant permits passage of a pointwise limit through an integral.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]–[L1] and [F4]–[F7]; the two-dimensional algebra below uses no further choice.

## Proof

**Given:** The hypotheses in the statement.

1.1 The canonical density factorizes over $q$ and $p$. By [F4] its normalizer is the product of the two one-dimensional Gaussian integrals, and [F5] gives $Z_q=\sqrt{2\pi/(\beta k)}$ and $Z_p=\sqrt{2\pi m/\beta}$. The normalized factors are centered. For $c>0$, [F6] on $[-R,R]$ gives
$$\int_{-R}^R x^2e^{-cx^2/2}dx=\frac1c\left(\int_{-R}^R e^{-cx^2/2}dx-2Re^{-cR^2/2}\right).$$
Letting $R\to\infty$ and using $Re^{-cR^2/2}\to0$ gives $\int_{\mathbb R}x^2e^{-cx^2/2}dx=c^{-1}\int_{\mathbb R}e^{-cx^2/2}dx$; oddness gives zero mean. Therefore the canonical variances are $1/(\beta k)$ and $m/\beta$, with zero cross-covariance. These are the canonical values used below. [F1, F4, F5, F6, given, algebra]

1.2 Set $v=p/m$, $s=h/2$, and $\sigma^2=\beta^{-1}(1-a^2)/m$. Applying [F2] in sequence and using $F(q)=-kq$ gives [F1, F2, F3, given, algebra]
$$q'=(1-r(1+a))q+s(1+a)v+s\sigma\xi,$$
$$v'=-s\omega^2(1+a)(1-r)q+(a-r(1+a))v+(1-r)\sigma\xi,$$
where $\xi\sim N(0,1)$. Thus $z'=(q',v')^T=Az+g\xi$, with
$$A=\begin{pmatrix}1-r(1+a)&s(1+a)\\-s\omega^2(1+a)(1-r)&a-r(1+a)\end{pmatrix},\qquad g=\sigma\begin{pmatrix}s\\1-r\end{pmatrix}.$$
[F1, F2, F3, given, algebra]

2.1 Direct expansion gives $\det A=a$ and $\operatorname{tr}A=(1+a)(1-2r)$. The characteristic polynomial is $\lambda^2-(1+a)(1-2r)\lambda+a$. Since $0<a<1$, for $0<r<1$ its values at $1$ and $-1$ satisfy [F1, step 1.2, algebra]
$$1-\operatorname{tr}A+\det A=2r(1+a)>0,\qquad 1+\operatorname{tr}A+\det A=2(1+a)(1-r)>0.$$
If its roots are nonreal, they are conjugate with modulus $\sqrt a<1$. If they are real, their product $a>0$ makes them have the same sign. For two positive roots, the first displayed product is positive and their product is below one, so neither can be at least one. For two negative roots, the second displayed product is positive and their product is below one, so neither can be at most $-1$. Hence both roots have modulus less than one. At $r=1$, the polynomial has root $-1$. At $r>1$, its value at $-1$ is negative while it tends to positive infinity as $\lambda\to-\infty$, so it has a root $\lambda_u<-1$; its other root is $a/\lambda_u$ and has modulus less than one. Therefore $\rho(A)<1$ exactly when $0<r<1$. [F1, step 1.2, algebra]

3.1 For $0<r<1$, the characteristic roots have modulus less than one by step 2.1. If they differ, Cayley–Hamilton writes $A^n$ as a linear combination of their $n$th powers. If they coincide at $\lambda$, Cayley–Hamilton gives $(A-\lambda I)^2=0$, so $A^n=\lambda^nI+n\lambda^{n-1}(A-\lambda I)$; for $|\lambda|<1$ this is bounded by $C\theta^n$ for any fixed $|\lambda|<\theta<1$. Thus the power-decay hypothesis of [L1] holds. Its discrete Lyapunov covariance in $(q,v)$ coordinates is [F1, F3, L1, step 1.2, step 2.1, algebra]
$$P=\frac1{\beta m}\begin{pmatrix}\omega^{-2}&0\\0&1-r\end{pmatrix}.$$
Indeed, substituting $A,g$ from step 1.2 gives $APA^T+gg^T=P$: the off-diagonal identity reduces to $s(1-r)[(1+a)(a-1)+(1-a^2)]=0$; the first diagonal identity reduces, after multiplication by $\beta m\omega^2$, to
$$[1-r(1+a)]^2+r(1+a)[2-r(1+a)]=1;$$
and the second diagonal identity, after division by $1-r$ and multiplication by $\beta m$, reduces to
$$[a-r(1+a)]^2+r(1+a)^2(1-r)+(1-a^2)(1-r)=1.$$
Both displayed scalar identities follow by expansion and $r=s^2\omega^2$. Thus [L1] gives the unique invariant Gaussian with this covariance. Transforming back by $p=mv$ gives $\operatorname{Var}(Q)=1/(\beta k)$, $\operatorname{Var}(P)=m(1-r)/\beta$, and zero covariance. [F1, F3, L1, step 1.2, step 2.1, algebra]

4.1 For $r>1$, step 2.1 gives a real left eigenvector $\ell$ for $\lambda_u<-1$. The innovation vector excites that mode: direct multiplication gives $\det[g,Ag]=-2\sigma^2s(1-r)\ne0$, so $\ell^Tg\ne0$ (otherwise $g$ would lie in the other right eigenspace and $g,Ag$ would be dependent). If an invariant probability existed, its projection $X=\ell^Tz$ would satisfy $X'=\lambda_uX+\zeta$ with independent nondegenerate centered normal $\zeta=\ell^Tg\xi$. Its characteristic function would obey $\varphi(t)=\varphi(\lambda_ut)e^{-\operatorname{Var}(\zeta)t^2/2}$. Iterating and using $|\varphi|\le1$ forces $\varphi(t)=0$ for every $t\ne0$. For any probability law of a finite real random variable $X$, [F7] and dominated convergence applied to $e^{itX}\to1$ with majorant $1$ give $\varphi(t)\to1$ as $t\to0$, contradicting this forced vanishing. Hence no invariant probability exists for $r>1$. Since $r=h^2k/(4m)$, the threshold is $h=2\sqrt{m/k}$. The boundary $r=1$ has an eigenvalue $-1$, so [L1] does not give a unique invariant law there. This proves the stated stable, boundary, and unstable cases without making any nonharmonic invariant-law claim. [A1, F1, F2, L1, F7, step 1.2, step 2.1, algebra] ∎

## Remarks

The kinetic bias is a discrete-step bias, not Monte Carlo sampling error. This theorem is only the exact linear harmonic calculation; it does not prove a general BAOAB invariant-bias rate.

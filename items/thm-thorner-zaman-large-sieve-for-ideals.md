---
id: thm-thorner-zaman-large-sieve-for-ideals
kind: theorem
title: Field-uniform large-sieve bound for Hecke characters and ideal sums
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-number-field
  - def-absolute-norm-of-an-ideal
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ideal-norm-is-multiplicative
  - lem-character-orthogonality-for-finite-abelian-groups
  - thm-residue-theorem-null-homologous-cycle
  - def-weiss-smoothed-mellin-kernel
  - lem-weiss-smoothing-inequality-for-dirichlet-polynomials
  - lem-weiss-convexity-bound-for-primitive-hecke-l-functions
  - lem-primitive-congruence-family-modulus-and-smoothed-coset-bound
  - lem-effective-reciprocal-ideal-sum-lower-bound
  - lem-weiss-sifted-coset-selberg-estimate
  - thm-plancherel
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-riesz-fischer-completeness-of-l-p
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: AC and Countable Choice are inherited through primitive Hecke continuation and L2 Plancherel; finite character orthogonality and ideal-sieve algebra add no choice.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the Chebotarev density theorem
      url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
      locator: Theorem 4.2 and complete proof, printed pp. 1155–1159; Lemmas 4.3–4.6, printed pp. 1156–1158.
    - title: A. R. Weiss, the least prime ideal
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
      locator: Lemma 3.6 and Theorem 3.7, printed pp. 72–75; ideal-class notation, printed pp. 58–59.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field of degree $n_K$, absolute discriminant $D_K$, and absolute ideal norm $N$. Let $H$ be a primitive congruence class group of $K$, let $h_H$ be the order of its finite ideal-class quotient, and put $Q=\max_{\chi\bmod H}N_{K/\mathbb Q}\mathfrak f_\chi$, the largest norm of a Hecke-character conductor in the family. Suppose $\nu\ge\epsilon>0$, $T\ge1$, and $b(\mathfrak p)$ is a complex-valued function on prime ideals with $\sum_{\mathfrak p}(N\mathfrak p)|b(\mathfrak p)|^2<\infty$ and $b(\mathfrak p)=0$ whenever $N\mathfrak p\le y$. If
$$y\ge C_\epsilon\left\{h_H n_K^{(5/4+\nu)n_K}D_K^{3/2+\nu}Q^{1/2}T^{n_K/2+1}\right\}^{1+\epsilon}$$
for a sufficiently large $C_\epsilon>0$, then, with
$$\mathcal L'=\frac12\log D_K+\frac12\log Q+\frac14n_K\log n_K+\left(\frac12n_K+1\right)\log T+O_\epsilon(1),$$
one has
$$\sum_{\chi\bmod H}\int_{-T}^{T}\left|\sum_{\mathfrak p}b(\mathfrak p)\chi(\mathfrak p)(N\mathfrak p)^{-it}\right|^2dt \le\left(\frac{5\pi\left(1-\frac1{1+\nu}\right)^{-1}}{\frac1{1+\epsilon}\log(y/h_H)-\mathcal L'}+O_\epsilon(y^{-\epsilon/2})\right)\sum_{\mathfrak p}(N\mathfrak p)|b(\mathfrak p)|^2.$$
The constants in the implied terms are effective and depend only on $\epsilon$. For infinite coefficient families, the series on the left is its $L^2([-T,T])$ limit under increasing ideal-norm truncations; the proof establishes that limit under the stated weighted square-summability, without an absolute-summability hypothesis.

## Statement references

[[def-number-field|Number field and degree]]

[[def-absolute-norm-of-an-ideal|Absolute ideal norm]]

[[def-finite-order-ray-class-hecke-character-and-l-function|Hecke characters and conductors]]

[[def-weiss-smoothed-mellin-kernel|Compact smoothing kernel]]

## Facts & Assumptions

**Given:** AC and Countable Choice, $K$, its ideal norms, primitive congruence class group $H$, conductor bound $Q$, $T\ge1$, $\nu\ge\epsilon>0$, and coefficients $b(\mathfrak p)$ satisfying the stated square-summability and support conditions.

[F1] The finite character group of $H$ has order $h_H$ and satisfies orthogonality on its ideal-class quotient. [[lem-character-orthogonality-for-finite-abelian-groups]]

[F2] The smoothed mean-square majorant applies to absolutely summable ideal coefficients after grouping them by ideal norm. [[lem-weiss-smoothing-inequality-for-dirichlet-polynomials]]

[F3] Ideals have the multiplicative absolute norm and prime-ideal factorization used in the support condition and ideal sums. [[def-absolute-norm-of-an-ideal]] [[thm-ideal-norm-is-multiplicative]] [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F4] Primitive Hecke L-functions satisfy the continuation and functional equation supplied for their conductors. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[F5] The local vertical-strip convexity estimate is proved at its AC+CC scope without any additional growth hypothesis, by completed order-one growth and Gaussian interpolation. [[lem-weiss-convexity-bound-for-primitive-hecke-l-functions]]

[A1] The Axiom of Choice is inherited through the primitive Hecke analytic supplier. [[def-axiom-of-choice]]

[A2] Countable Choice is inherited through the primitive Hecke and L2 suppliers. [[def-countable-choice]]

[F6] For a primitive congruence family, $2^{\omega(\mathfrak m_0)}\le e^{c_\eta n_K}Q^\eta$ and the smoothed divisor-coset estimate has error $B_\delta X^{1+\delta}/x$, where $X=n_K^{n_K/4}D_K^{1/2}Q^{1/2}T^{n_K/2+1}$, for the normalization $A=2\sqrt{2n_K}\,T$. This is uniform and effective for every $\delta>0$. [[lem-primitive-congruence-family-modulus-and-smoothed-coset-bound]]

[F7] Put $U=n_K^{n_K}D_K$ and $c_\nu=1-1/(1+\nu)$. Uniformly for $\nu\ge\epsilon>0$, $z\ge3U^{1/2+\nu/2}$ and $\log z>F_\epsilon$, the reciprocal-ideal estimate is $\kappa(K)/V(z)\le c_\nu^{-1}/(\log z-F_\epsilon)$ with an effective $F_\epsilon$ depending only on $\epsilon$. [[lem-effective-reciprocal-ideal-sum-lower-bound]]

[F8] The exact finite ideal Selberg weights turn a divisor-coset estimate with error $M$ into a nonnegative sifted sum with main term $\kappa(K)/(h_HV(z))$ and error $M\zeta(1+u)^{2n_K}z^{2+2u}$, for any $u>0$. [[lem-weiss-sifted-coset-selberg-estimate]]

[F9] Under CC, Fourier transformation is unitary on complex $L^2$, and agrees with the integral transform on $L^1\cap L^2$. The space $L^2$ is complete. [[thm-plancherel]] [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]] [[thm-riesz-fischer-completeness-of-l-p]]

[F10] The explicit Weiss convolution kernel is nonnegative and continuous for $k\ge2$, with integral one, transform $h_k(s)=(\sinh(s/A)/(s/A))^k$ and $H(x)=\eta(\log x)$. Its compact support and these identities follow from the actual finite convolution verification; the sharper transform lower bound used below is derived directly in step 1.1. [[def-weiss-smoothed-mellin-kernel]]

## Proof

**Given:** The original field, primitive family, coefficient hypotheses, $\nu\ge\epsilon>0$ and $T\ge1$.

1.1 Write $n=n_K$, $h=h_H$, $D=D_K$, $X=n^{n/4}(DQ)^{1/2}T^{n/2+1}$ and $U=n^nD$. We first take a finitely supported coefficient function. Put $k=2n$ and choose the wider smoothing parameter $A=2\sqrt{k}\,T$. The explicitly defined kernel has $\eta(u)\ge0$ and transform $h_k(it)=(\sin(t/A)/(t/A))^k$. For $|t|\le T$, the elementary sine series bound $\sin v/v\ge1-v^2/5$ for $|v|\le1$ gives $h_k(it)\ge(1-1/(20k))^k\ge19/20$ by the finite Bernoulli inequality. For each character, $g_\chi(u)=\sum_\mathfrak p b(\mathfrak p)\chi(\mathfrak p)\eta(u-\log N\mathfrak p)$ is a finite sum of compactly supported bounded functions. Its integral Fourier transform at frequency $t/(2\pi)$ is $h_k(it)\sum_\mathfrak p b(\mathfrak p)\chi(\mathfrak p)(N\mathfrak p)^{-it}$. By [F9], Plancherel gives the exact factor $2\pi$ after changing frequency; hence $$\int_{-T}^T\left|\sum_\mathfrak p b(\mathfrak p)\chi(\mathfrak p)(N\mathfrak p)^{-it}\right|^2dt\le c_s\int_0^\infty\left|\sum_\mathfrak p b(\mathfrak p)\chi(\mathfrak p)H_{k,A}(x/N\mathfrak p)\right|^2\frac{dx}{x},\qquad c_s=\frac{800\pi}{361}<\frac{5\pi}{2}.$$ The kernel's defining convolution also gives $h_k(0)=1$ and $h_k(1)\le(1+1/(5A^2))^k\le e^{1/(20T^2)}$, which is an absolute constant. This choice changes no public height or coefficient hypothesis. [A1, A2, F9, F10, given, construct, algebra]

2.1 Fix $\delta=\min(\epsilon/2,1/4)>0$ and use [F6] with parameter $\delta/2$. For every coset, take the nonnegative compactly supported weight $f_C(\mathfrak a)=\mathbf1_{\mathfrak a\in C}H_{k,A}(x/N\mathfrak a)/N\mathfrak a$. The divisor main term is $\theta\kappa(K)/(hN\mathfrak d)$ and the error is $B_{\delta/2}X^{1+\delta/2}/x$. Apply [F8] with $u=\delta$. Its extra factor $\zeta(1+\delta)^{2n}$ can be absorbed into a constant times $X^{\delta/2}$: $X\ge n^{n/4}$ and the supremum of $\zeta(1+\delta)^{2n}n^{-\delta n/8}$ over integers $n\ge1$ is finite and effective. Consequently, after renaming an effective constant $B_\delta$, $$\sum_{\mathfrak a\in C\cap S_z}\frac{H_{k,A}(x/N\mathfrak a)}{N\mathfrak a}\le\frac{\kappa(K)}{hV(z)}+\frac{B_\delta X^{1+\delta}z^{2+2\delta}}x\quad(z\ge1).$$ Every finite divisor count required by [F8] is supplied by [F6] without a restriction on its norm. [F3, F6, F8, step 1.1, construct, algebra]

3.1 Discard primes dividing the group modulus on the left, since all extended characters vanish there; their nonnegative right-side contributions can always be restored. Sum the smoothed squares in step 1.1 over the character family. Finite orthogonality [F1] gives $h$ times the sum of the coset squares. Within each coset use Cauchy–Schwarz with factors $b(\mathfrak p)\sqrt{N\mathfrak p\,H(x/N\mathfrak p)}$ and $\sqrt{H(x/N\mathfrak p)/N\mathfrak p}$. For $1\le z\le y$, every prime in the coefficient support belongs to $S_z$; enlarge the second factor to the nonnegative ideal sum of step 2.1. Integrate against $dx/x$, retaining the exact smoothing coefficient $c_s$. The main kernel integral is $h_k(0)=1$, and the error integral is $(N\mathfrak p)^{-1}h_k(1)\ll (N\mathfrak p)^{-1}$. Because $N\mathfrak p>y$, this proves $$\sum_{\chi\bmod H}\int_{-T}^T\left|\sum_\mathfrak p b(\mathfrak p)\chi(\mathfrak p)(N\mathfrak p)^{-it}\right|^2dt\le c_s\left(\frac{\kappa(K)}{V(z)}+B'_\delta hX^{1+\delta}z^{2+2\delta}y^{-1}\right)\sum_\mathfrak pN\mathfrak p|b(\mathfrak p)|^2.$$ All expansions and coefficient interchanges here are finite, and all kernel integrals are compact in the logarithmic variable. Cauchy–Schwarz may be checked by expanding the finite nonnegative sum of squared differences; no additional measure-space inequality is required. [F1, F3, F10, step 1.1, step 2.1, algebra]

4.1 Set $\alpha=1/(1+\epsilon)$ and choose $$z^2=\frac{(y/h)^\alpha}{X}.$$ The public lower bound on $y$ is exactly $y\ge C_\epsilon(hXU^{1+\nu})^{1+\epsilon}$. Therefore $z^2\ge C_\epsilon^\alpha h^{1-\alpha}U^{1+\nu}$. Choose $C_\epsilon$ effectively large enough that $z\ge3e^{F_\epsilon}U^{1/2+\nu/2}$. This choice is uniform for all $\nu\ge\epsilon$. Also $z^2\le y^\alpha\le y^2$ since $h,X,y\ge1$, so $1\le z\le y$. Unlike a manipulation of the alternative source cutoff, this exact choice gives the identity $$2\log z=\alpha\log(y/h)-\log X.$$ The error in step 3.1 becomes $B'_\delta(h/y)^r$ with $r=(\epsilon-\delta)/(1+\epsilon)>0$. The public size assumption gives $h/y\le y^{-\epsilon/(1+\epsilon)}$, so the error is at most $B'_\delta y^{-\lambda_\epsilon}$ with $\lambda_\epsilon=\epsilon(\epsilon-\delta)/(1+\epsilon)^2>0$. No logarithm of the class-group order is discarded. [F6, F7, step 3.1, given, construct, algebra]

5.1 Define the positive denominator $$D_0=2\log z-2F_\epsilon=\frac1{1+\epsilon}\log(y/h)-\mathcal L',\qquad\mathcal L'=\log X+2F_\epsilon.$$ Then $\mathcal L'=\tfrac12\log D+\tfrac12\log Q+\tfrac14n\log n+(\tfrac12n+1)\log T+O_\epsilon(1)$ exactly as stated. By [F7] and step 4.1, $\kappa(K)/V(z)\le2c_\nu^{-1}/D_0$, where $c_\nu=1-1/(1+\nu)$. Moreover $D_0\le\alpha\log y$ since $X\ge1$ and $F_\epsilon\ge0$. The strict spare constant $5\pi-2c_s>0$ absorbs the error from step 4.1: enlarge $C_\epsilon$ so that for every $y\ge C_\epsilon$, $$c_sB'_\delta\,\alpha(\log y)y^{-\lambda_\epsilon}\le5\pi-2c_s.$$ Such a uniform effective choice exists because $t e^{-\lambda_\epsilon t}$ is decreasing to zero beyond $t\ge1/\lambda_\epsilon$. Since $c_\nu^{-1}\ge1$, step 3.1 now bounds the left side by $5\pi c_\nu^{-1}D_0^{-1}\sum N\mathfrak p|b(\mathfrak p)|^2$. This is stronger than the displayed assertion: its additional $O_\epsilon(y^{-\epsilon/2})$ term may be chosen identically zero. All denominator and cutoff constants depend only on $\epsilon$, not on $\nu\ge\epsilon$. [F7, step 3.1, step 4.1, algebra]

6.1 For the full weighted-square-summable coefficients, truncate to $N\mathfrak p\le R$. The finite estimate of step 5.1 applies also to the difference of any two such truncations, with the same constant and parameters, so the corresponding finite family of functions is Cauchy in $L^2([-T,T])$ as the weighted coefficient tail tends to zero. By [F9] and CC, each has an $L^2$ limit. This is the series interpretation specified in the Statement; it requires no claim of absolute or pointwise convergence for arbitrary coefficients. Norm convergence and the finite character sum permit passage to the left squared norm; the right side converges to the given nonnegative weighted series. This proves the full original family, norm, height, $\nu/\epsilon$, conductor and exponent ranges. The cases $n=D=Q=h=1$ and the zero function are included by the same finite estimates and size choice. [A2, F9, step 5.1, given, algebra] ∎

## Proof status

Complete at the full stated AC+CountableChoice scope and original numerical bounds. The primitive-family modulus estimate and reciprocal-ideal input are proved locally, including the effective Euler–Kronecker comparison from the accepted completed-zero inequality rather than importing Ihara. The wider auxiliary smoothing parameter leaves the public assumptions unchanged and supplies enough leading-constant margin to retain exactly 5π while absorbing the cutoff error. The explicit cutoff keeps the class-group logarithm exactly; no unproved inequality between the source's two different h-exponents is used. Infinite coefficient sums are constructed as L2 limits from the original weighted square-summability. No absolute-summability premise, class-field realization, independent review or external theorem import is added. Separate zero-detector, density, exceptional-zero and Chebotarev items are not proved by this result alone.

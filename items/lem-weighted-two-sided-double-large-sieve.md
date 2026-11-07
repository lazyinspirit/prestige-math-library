---
dependency_level: 0
id: lem-weighted-two-sided-double-large-sieve
kind: lemma
title: Weighted two-sided double large sieve for finite indexed families
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
axiom_use: Countable Choice is assumed for the existing completed Lebesgue and Fourier
  inversion/convolution suppliers; the finite partitions, coefficient modifications
  and pair counting use no stronger choice principle.
deps:
- def-countable-choice
- thm-ftc-second-part
- thm-holder-inequality-for-integrals
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-fourier-transform-converts-convolution-to-products
- thm-l-one-fourier-inversion
- thm-complex-exponential-is-entire-with-derivative-itself
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
justified_by: []
sources:
  references:
  - title: Xi Cen, Xitao Gao, Cheng Zhang, and Junyong Zhang, A New Bound for the
      Gauss Circle Problem
    url: https://arxiv.org/pdf/2610.21730v1
    locator: Section 4, equation (4.17), for the classical weighted two-sided sieve
      use; Appendix B for the coordinate-FTC sampling argument. The proof here reconstructs
      the Fourier majorant and both pair-count bounds locally.
  - title: Jean Bourgain and Nigel Watt, Decoupling for Perturbed Cones and the Mean
      Square of the Riemann Zeta Function
    url: https://arxiv.org/pdf/1505.04161v1
    locator: Section 5, equations (5.1)–(5.5), for related double-large-sieve context;
      its fixed-polynomial moment comparison is not a logical input to this proof.
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$ be an integer, let $D_i,E_i>0$ for $1\le i\le d$, and let $J$ and $I$ be finite index sets, each allowed to be empty. For $j\in J$ and $\nu\in I$, let $x_j,y_\nu\in\mathbb R^d$ satisfy $|x_{j,i}|\le D_i$ and $|y_{\nu,i}|\le E_i$ for every $i$. Repeated or coincident vectors retain their indices. Let $a_j,b_\nu\in\mathbb C$ satisfy $|a_j|,|b_\nu|\le1$, put $e(t)=\exp(2\pi it)$, and define the ordered index-pair counts

$$ B_X:=\#\{(j,j')\in J^2:|x_{j,i}-x_{j',i}|\le E_i^{-1}\text{ for every }i\},\qquad B_Y:=\#\{(\nu,\nu')\in I^2:|y_{\nu,i}-y_{\nu',i}|\le D_i^{-1}\text{ for every }i\}. $$

There is a constant $C_d>0$, depending only on $d$, such that

$$ \left|\sum_{j\in J}\sum_{\nu\in I}a_jb_\nu e(x_j\cdot y_\nu)\right|\le C_d\left(\prod_{i=1}^d(1+D_iE_i)\,B_XB_Y\right)^{1/2}. $$

In particular, the inequality includes zero coefficients and empty families without a separation or distinctness hypothesis on either vector family.

## Statement references

[[def-countable-choice]]

[Cen–Gao–Zhang–Zhang, §4, equation (4.17), and Appendix B](https://arxiv.org/pdf/2610.21730v1)

[Bourgain–Watt, §5, related double-large-sieve setup](https://arxiv.org/pdf/1505.04161v1)

## Facts & Assumptions

**Given:** Countable Choice and the finite indexed data, positive coordinate scales and coefficient bounds in the Statement. Write $\Omega=\prod_i[-D_i,D_i]$, $P=\prod_i(1+D_iE_i)$ and $|\Omega|=\prod_i2D_i$.

[A1] Countable Choice is the explicitly assumed axiom in the local Lebesgue/Fourier suppliers ([[def-countable-choice]]).

[F1] The fundamental theorem evaluates the integral of a continuous derivative on a compact interval as the endpoint difference; apply its real statement separately to real and imaginary parts ([[thm-ftc-second-part]]).

[F2] Hölder's inequality with exponents $2,2$ gives integral Cauchy–Schwarz for measurable real functions with finite squared integrals, including counting measure on a finite set ([[thm-holder-inequality-for-integrals]]).

[F3] For an absolutely integrable complex function on a sigma-finite product, the product and iterated integrals agree ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] Under Countable Choice, the Fourier transform of an $L^1$ convolution is the product of the Fourier transforms ([[thm-fourier-transform-converts-convolution-to-products]]).

[F5] Under Countable Choice, if $f,\widehat f\in L^1$, Fourier inversion recovers the value at every Lebesgue point, in particular at every point of a continuous $f$ ([[thm-l-one-fourier-inversion]]).

[F6] The complex exponential is entire and has derivative equal to itself; on the imaginary axis its modulus is one ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F7] Assuming Countable Choice, every bounded Borel Riemann-integrable real function on a nondegenerate compact box has the same Riemann and Lebesgue integrals ([[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]). Apply this separately to real and imaginary components of the continuous functions below.

## Proof

1.1 If either index family is empty, its pair count and the bilinear sum vanish, proving the inequality. Otherwise set $m_i=\max(1,\lceil2D_iE_i\rceil)$ and $\delta_i=2D_i/m_i$. Partition each coordinate interval into $m_i$ consecutive equal intervals, using a fixed half-open convention and including the final right endpoint. The resulting cells $Q$ have common positive volume $v=\prod_i\delta_i$. Assign every $x_j$ to its unique cell and let $n_Q$ be its index count. Then $\delta_iE_i\le1$, $|\Omega|/v=\prod_i m_i\le2^dP$, and
$$ \sum_Qn_Q^2\le B_X, $$
because any two assigned indices in one cell have every coordinate gap at most $\delta_i\le E_i^{-1}$. This argument retains every coincident index. [given, construct, algebra]

1.2 For a smooth complex function $f$ on an interval of length $\delta$, its real and imaginary components and all derivatives used here are continuous on compact intervals or boxes, hence bounded, Borel and Riemann integrable. Thus [F7] identifies their Riemann integrals with the Lebesgue integrals used in the subsequent Fubini and Cauchy–Schwarz steps. The Darboux/Riemann FTC [F1] applied to real and imaginary parts therefore gives $f(t)=f(s)+\int_s^t f'(u)\,du$. Averaging in $s$ therefore bounds evaluation at any point of the interval by $\delta^{-1}\int|f|+\int|f'|$. More precisely, evaluation is the sum of the average functional and a derivative-integral functional whose kernel has modulus at most $1$: interchange the finite-interval integrals in the averaged identity. Take the product of these evaluation decompositions in all coordinates of a cell. Expanding its $2^d$ terms and applying [F3] gives, at every $z\in\overline Q$,
$$ |F(z)|\le v^{-1}\sum_{\mu\in\{0,1\}^d}\left(\prod_i\delta_i^{\mu_i}\right)\int_Q|\partial^\mu F(u)|\,du. $$
All derivatives used here are continuous on a compact rectangle and hence integrable; this also supplies absolute integrability for each Fubini interchange. No derivative of an absolute value is assumed. [A1, F1, F3, F7, step 1.1, algebra]

2.1 For any coefficient array $c=(c_\nu)$ with $|c_\nu|\le1$, put $F_c(u)=\sum_\nu c_\nu e(u\cdot y_\nu)$. For each $\mu\in\{0,1\}^d$, let $c_{\nu,\mu}=b_\nu\prod_i(y_{\nu,i}/E_i)^{\mu_i}$; these coefficients have modulus at most one. By [F6],
$$ \partial^\mu F_b(u)=\left(\prod_i(2\pi iE_i)^{\mu_i}\right)F_{c_\mu}(u). $$
Consequently step 1.2 and $\delta_iE_i\le1$ give $|F_b(x_j)|\le C_dv^{-1}\sum_\mu\int_Q|F_{c_\mu}|$ for every assigned $x_j\in Q$, with $C_d$ depending only on $d$. [F6, step 1.1, step 1.2, construct, algebra]

2.2 Multiply the preceding bound by $n_Q$ and sum over cells. Apply [F2] on each cell to $|F_{c_\mu}|$ and $1$, then on the finite cell index set. This gives
$$ \sum_j|F_b(x_j)|\le C_d\left(\sum_Q\frac{n_Q^2}{v}\right)^{1/2}\sum_{\mu\in\{0,1\}^d}\left(\int_\Omega|F_{c_\mu}(u)|^2\,du\right)^{1/2}\le C_d(PB_X)^{1/2}\sup_{|c_\nu|\le1}\left(|\Omega|^{-1}\int_\Omega|F_c(u)|^2\,du\right)^{1/2}. $$
These integrals are finite because $|F_c|\le\#I$ and $\Omega$ has finite measure. The supremum is finite by the same bound. This proves the sharp-box sampling step directly; it does not apply any $q>2$ fixed-polynomial estimate at $q=2$. [F2, F6, step 1.1, step 2.1, algebra]

3.1 The exponential functions integrated on compact intervals in this step are smooth; apply [F7] to their real and imaginary components to use the [F1] antiderivative evaluations as Lebesgue integral identities. Define $h(t)=\int_{-1/2}^{1/2}e(-ts)\,ds$ and $T(s)=(1-|s|)_+$. The interval indicator $I_0=\mathbf1_{[-1/2,1/2]}$ has Fourier transform $h$ directly by definition, and its convolution with itself is $T$, since the convolution integral is the length of the overlap of two unit intervals. Thus [F4] gives $\widehat T=h^2$. The function $h$ is real and even, by pairing $s$ and $-s$ and complex conjugating. It satisfies $|h(t)|\le1$, while [F1] and [F6] applied to the exponential antiderivative give $|h(t)|\le1/(\pi|t|)$ for $t\ne0$. Hence $h^2\in L^1(\mathbb R)$, as is $T$. Every point of the continuous $T$ is a Lebesgue point. Fourier inversion [F5], followed by evenness, therefore gives
$$ \int_\mathbb R h(t)^2e(-\xi t)\,dt=T(\xi)\qquad(\xi\in\mathbb R). $$
In particular $\int h^2=1$. Every Fourier input used here is integrable, and the convolution has $L^1$ factors, as required in [F4]–[F5]. [A1, F1, F4, F5, F6, F7, construct, algebra]

3.2 Using the compact-interval integral agreement [F7], [F1] and [F6] give $|e(u)-1|\le2\pi|u|$ for real $u$: integrate the derivative $2\pi i e(u)$, whose modulus is $2\pi$. Consequently $|h(t)-1|\le2\pi|t|\int_{-1/2}^{1/2}|s|\,ds=\pi|t|/2$. Set $L_i=2\pi D_i$ and
$$ W(u)=\prod_i h(u_i/L_i)^2. $$
For $u\in\Omega$, $|u_i/L_i|\le1/(2\pi)$, so $h(u_i/L_i)\ge3/4$ and $W(u)\ge(9/16)^d$. The product is nonnegative and integrable. By substitution in step 3.1 and [F3],
$$ \widehat W(\xi)=\prod_i L_iT(L_i\xi_i),\qquad 0\le\widehat W(\xi)\le\prod_iL_i=\pi^d|\Omega|. $$
It vanishes unless every $|\xi_i|\le1/L_i<D_i^{-1}$. Product integrability follows from $\int h^2=1$, so all these product interchanges are absolutely integrable on sigma-finite Euclidean spaces. [A1, F1, F3, F6, F7, step 3.1, construct, algebra]

4.1 For every $|c_\nu|\le1$, expand the finite square and integrate against $W$. Since $W$ is integrable and the exponentials have modulus one, each term is absolutely integrable. Step 3.2 gives
$$ \int_\Omega|F_c(u)|^2\,du\le(16/9)^d\int_{\mathbb R^d}W(u)|F_c(u)|^2\,du=(16/9)^d\sum_{\nu,\nu'}c_\nu\overline{c_{\nu'}}\widehat W(y_{\nu'}-y_\nu)\le(16\pi/9)^d|\Omega|B_Y. $$
For the last inequality, take the absolute value of the finite sum; Fourier terms vanish outside the specified pair gaps and each retained term has modulus at most $\pi^d|\Omega|$. The left integral is nonnegative. This proves that the supremum in step 2.2 is at most $(16\pi/9)^{d/2}B_Y^{1/2}$. [F3, F6, step 3.2, algebra]

4.2 Finally $|\sum_j a_jF_b(x_j)|\le\sum_j|F_b(x_j)|$ because $|a_j|\le1$. Substitute step 4.1 into step 2.2 and absorb the dimension-dependent factors in $C_d$. The result is precisely the claimed inequality for the original indexed families. Step 1.1 treated empty families, and zero coefficients and every equality case in the inclusive pair thresholds were retained throughout. Countable Choice was used only in the cited Lebesgue/Fourier branch; all combinatorial constructions were finite. [A1, given, step 1.1, step 2.2, step 4.1, algebra] ∎

## Proof references

[[thm-ftc-second-part]]

[[thm-holder-inequality-for-integrals]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[[thm-fourier-transform-converts-convolution-to-products]]

[[thm-l-one-fourier-inversion]]

[[thm-complex-exponential-is-entire-with-derivative-itself]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]

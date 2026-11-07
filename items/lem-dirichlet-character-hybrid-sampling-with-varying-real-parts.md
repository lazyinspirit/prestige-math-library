---
dependency_level: 3
id: lem-dirichlet-character-hybrid-sampling-with-varying-real-parts
kind: lemma
title: Hybrid character sampling with varying nonnegative real parts
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: None. The proof uses finite weighted sums, compact Riemann integrals and explicit exponential tails for improper Riemann integrals.
deps:
  - lem-dirichlet-character-hybrid-mean-square-and-separated-sampling
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-unit-group-modulo-n-and-euler-totient
  - thm-dirichlet-character-orthogonality
  - thm-ftc-second-part
  - lem-continuous-functions-riemann-integrable
  - lem-riemann-integral-linearity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-logarithm-derivative-and-integral
justified_by: []
sources:
  references:
    - title: H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III
      url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
      locator: Section26.2, Theorem26.18, printed pp.124–125. The three sampling families are adapted here with a different explicitly proved log-ratio coefficient weight, not attributed as the source's displayed coefficient weight.
---

## Statement

Let $q,Q,N\ge1$ be integers, $T\ge2$, $A\in\mathbb R$, $0<\delta\le1$, and $a_1,\ldots,a_N\in\mathbb C$. Put
$$B=\log(2N),\qquad W_N(n)=1+\log\frac{\log(2N)}{\log(2n)}\quad(1\le n\le N).$$
Thus $W_N(n)\ge1$. Choose one of the following three finite character families, and use its specified labels $\ell$, character functions $\psi_\ell$, positive label weights $w_\ell$ and nonnegative coefficient weights $b_n$:

1. All characters $\chi$ modulo $q$: $\ell=\chi$, $\psi_\ell=\chi$, $w_\ell=1$, and $b_n=\frac{\varphi(q)}q(qT+n)\mathbf1_{(n,q)=1}$.
2. All characters $\chi$ modulo $q$, evaluated at their unique primitive ancestors: $\ell=\chi$, $\psi_\ell=\chi^*$, $w_\ell=1$, and $b_n=qT+n$.
3. All primitive characters $\chi$ modulo $d$ for $1\le d\le Q$: $\ell=(d,\chi)$, $\psi_\ell=\chi$, $w_\ell=d/\varphi(d)$, and $b_n=Q^2T+n$.

Include the primitive principal character modulo $1$. For each label let $J_\ell$ be a finite index set, allowed to be empty, and let $t_{\ell,j}\in[A,A+T]$ and $\sigma_{\ell,j}\ge0$. Suppose $|t_{\ell,j}-t_{\ell,k}|\ge\delta$ for distinct indices of the same label. There is an absolute constant $C>0$, the same for these three choices, such that
$$\sum_\ell w_\ell\sum_{j\in J_\ell}\left|\sum_{n\le N}a_n\psi_\ell(n)n^{-\sigma_{\ell,j}-it_{\ell,j}}\right|^2\le C(\delta^{-1}+B)\sum_{n\le N}b_n|a_n|^2W_N(n).\tag{1}$$
Here $n^{-\sigma-it}=\exp((-\sigma-it)\log n)$. Coefficients are independent of the sample indices. Real parts may vary arbitrarily, and times belonging to different labels may coincide. In the ancestor case labels remain the actual characters modulo $q$.

The following explicit weight bounds hold with absolute constants:

* If $H\ge\exp(64)$, $H\le Y\le H^{3/2}$, and $N=\lfloor Y(\log H)^2\rfloor$, then $W_N(n)\le1+\log2$ for every integer $H<n\le N$.
* If $H\ge2$ and $M=\lfloor H\rfloor$, then
$$\sum_{n\le M}\frac{H+n}{n}W_M(n)\le C H\log(2H).\tag{2}$$

Consequently, applying (1) with $\delta=1$ to coefficients supported on $H<n\le Y(\log H)^2$ costs no additional $\log\log H$ factor from $W_N$. For the ancestor or primitive family with $qT\le H$ or $Q^2T\le H$, respectively, applying (1) to coefficients supported on $n\le M$ with $|a_n|\le n^{-1/2}$ gives a bound $CH(\log(2H))^2$. These are mean-square application interfaces; they assume no zero detector or critical-line fourth-moment theorem.

## Statement references

[[def-dirichlet-character-modulo-q]]

[[def-primitive-dirichlet-character-and-conductor]]

[[def-unit-group-modulo-n-and-euler-totient]]

[Montgomery–Vaughan, Theorem26.18, for the sampling families](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The data, one of the three finite indexed character families, and its nonnegative diagonal coefficients $b_n$ from the Statement. Write $\mathcal G(c)=\sum_{n\le N}b_n|c_n|^2$.

[F1] For these exact three families, real-time sampling with fixed coefficients satisfies
$$\sum_\ell w_\ell\sum_j\left|\sum_{n\le N}c_n\psi_\ell(n)n^{-it_{\ell,j}}\right|^2\le C_0(\delta^{-1}+\log(2N))\mathcal G(c)$$
with an absolute constant, including the given indexed labels, weights, modulus-one convention and empty families ([[lem-dirichlet-character-hybrid-mean-square-and-separated-sampling]]).

[F2] Characters are homomorphisms on the finite unit group and zero off it; hence $\psi_\ell(1)=1$. Orthogonality at the unit class $1$ gives $\#\{\chi\bmod d\}=\varphi(d)$. The ancestor is primitive at a divisor of the specified modulus, and conductor $1$ is included ([[def-dirichlet-character-modulo-q]], [[def-unit-group-modulo-n-and-euler-totient]], [[thm-dirichlet-character-orthogonality]], [[def-primitive-dirichlet-character-and-conductor]]).

[F3] The integral of a Riemann-integrable derivative on a compact interval is the endpoint difference; apply the real statement to the real and imaginary components as needed ([[thm-ftc-second-part]]).

[F4] Continuous real functions on compact intervals have oriented Riemann integrals, monotone and additive over intervals, with the compact supremum bound. Integral functions differentiate to their integrands, and these integrals are linear ([[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]]).

[F5] The exponential has derivative equal to itself and $|\exp(x+iy)|=e^x$; the logarithm has derivative $1/x$ and is the integral of $1/t$ from $1$ to $x$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-logarithm-derivative-and-integral]]).

## Proof

1.1 All integral inequalities needed here are finite Riemann inequalities. For continuous complex $f$ integrate its components; rotating a nonzero value $\int f$ to the positive real axis and using [F4] proves $|\int f|\le\int|f|$. For finite nonnegative weights $w_j$, the quadratic $\sum_jw_j(u_j-\lambda v_j)^2\ge0$ gives finite weighted Cauchy–Schwarz, including a zero quadratic coefficient, when its linear coefficient must vanish. Apply it to real moduli. Every finite sum of exponentials below and its derivatives are continuous, so all compact integrals exist by [F4]. Improper integrals will be justified by the explicit exponential tails below. [F4, algebra]

1.2 For each label the number of samples is at most $1+T/\delta$: order its finitely many times and sum the consecutive gaps. By [F2], the constant term of every sampled polynomial is $a_1$. In family1 the weighted sample count is at most $\varphi(q)(1+T/\delta)\le C\varphi(q)T/\delta$. In family2 use $\varphi(q)\le q$. In family3 use
$$\sum_{d\le Q}\frac d{\varphi(d)}\#\{\chi\bmod d:\chi\text{ primitive}\}\le\sum_{d\le Q}d\le Q^2.$$
Thus the constant-term contribution is at most $C\delta^{-1}b_1|a_1|^2$ in each case. This is bounded by the right side of (1), since $W_N(1)\ge1$. The inequality $|z+z'|^2\le2|z|^2+2|z'|^2$ therefore reduces (1) to $a_1=0$. If $N=1$ this already proves it. [F2, given, algebra]

2.1 Suppose $N\ge2$ and $a_1=0$, and set
$$F_\ell(u,t)=\sum_{2\le n\le N}a_n\psi_\ell(n)e^{(-u-it)\log n}\qquad(u\ge0).$$
For fixed $t$, both $F_\ell$ and its $u$ derivative have modulus at most $C_a2^{-u}$, where the finite number $C_a$ can be taken as $\sum_{n\ge2}|a_n\psi_\ell(n)|(1+\log n)$. This bound is used only for convergence. Applying [F3] to $|F_\ell(u,t)|^2$ on $[\sigma,R]$ and then letting $R\to\infty$ gives
$$|F_\ell(\sigma,t)|^2\le2\int_0^\infty|F_\ell(u,t)||\partial_uF_\ell(u,t)|\,du\qquad(\sigma\ge0).\tag{3}$$
Indeed its derivative is $2\operatorname{Re}(\partial_uF_\ell\overline{F_\ell})$, and the endpoint value at $R$ and the absolute derivative tail tend to zero exponentially. Enlarging the lower limit $\sigma$ to $0$ increases a nonnegative integral. No common value of the real parts is assumed. [F3, F4, F5, step 1.1, construct, algebra]

2.2 Define the continuous nonnegative functions
$$g(u)=\sum_{2\le n\le N}b_n|a_n|^2e^{-2u\log n},\qquad k(u)=\sum_{2\le n\le N}b_n|a_n|^2(\log n)^2e^{-2u\log n}.$$
For every fixed $u$, apply [F1] to the SAME sample labels and times, with coefficients $a_nn^{-u}$ and $-(\log n)a_nn^{-u}$, respectively. This bounds their sampled squared norms by $C_0(\delta^{-1}+B)g(u)$ and $C_0(\delta^{-1}+B)k(u)$. Finite weighted Cauchy–Schwarz at this fixed $u$, followed by summation of (3), consequently gives
$$\sum_\ell w_\ell\sum_j|F_\ell(\sigma_{\ell,j},t_{\ell,j})|^2\le C_0(\delta^{-1}+B)\int_0^\infty2\sqrt{g(u)k(u)}\,du.\tag{4}$$
The exchanges are finite sums and improper limits with the exponential bounds of step 2.1, not an interchange over an infinite family. Zero $b_n$, including nonunit indices in family1, are retained in both diagonal forms. [F1, F4, step 1.1, step 2.1, construct, algebra]

3.1 Put $a=1/B>0$. Pointwise $2\sqrt{gk}\le g/(u+a)+(u+a)k$, by the square of $\sqrt{g/(u+a)}-\sqrt{(u+a)k}$. For $n\ge2$ put $\lambda=\log n$, so $0<\lambda<B$. Exponential antiderivatives and [F3] give
$$\int_0^\infty(u+a)\lambda^2e^{-2\lambda u}du=\frac14+\frac{a\lambda}2\le\frac34.\tag{5}$$
To evaluate the $u$ term, integrate by parts on $[0,R]$ and let $R\to\infty$; its boundary polynomial times $e^{-2\lambda R}$ tends to zero, as does its exponential tail. [F3, F4, F5, step 2.2, algebra]

3.2 Split the remaining diagonal integral at $u=1/\lambda$. Compact comparison, the logarithmic primitive and the exponential antiderivative give
$$\int_0^{1/\lambda}\frac{e^{-2\lambda u}}{u+a}du\le\log(1+B/\lambda)\le\log2+\log(B/\lambda),$$
$$\int_{1/\lambda}^\infty\frac{e^{-2\lambda u}}{u+a}du\le\lambda\int_{1/\lambda}^\infty e^{-2\lambda u}du=e^{-2}/2.$$
Since $\log(2n)\le2\log n$ for $n\ge2$, the sum of these estimates and (5) is at most $C[1+\log(B/\log(2n))]=CW_N(n)$, with an absolute $C$. Each improper integral has the displayed integrable tail. [F3, F4, F5, step 3.1, algebra]

3.3 Expand the finite sums $g,k$ in step 3.1 and integrate their nonnegative diagonal terms. Step 3.2 shows $\int_0^\infty2\sqrt{gk}\le C\sum_{n\ge2}b_n|a_n|^2W_N(n)$. Substitute this into (4) and restore $a_1$ by step 1.2. This proves (1) for all $N\ge1$ and all three families. If all coefficients or all sampling families are zero or empty, the left side vanishes. Coincident times across labels cause no change to any sum; equal within-label gaps were included in the count of step 1.2 and in [F1]. All operations and label choices are finite. [F1, F2, F4, step 1.2, step 2.2, step 3.1, step 3.2, algebra]

4.1 For the first weight assertion set $L=\log H\ge64$. We have $\log2=\int_1^2dt/t\le1$, so $\log64=6\log2\le6<8=64/8$. For $x\ge64$, the derivative of $x/8-\log x$ is $1/8-1/x\ge0$, hence FTC gives $\log x\le x/8$. Thus $2\log L+\log2\le L/4+1\le L/2$. Hence
$$\log(2N)\le\log(2YL^2)\le\tfrac32L+2\log L+\log2\le2L.$$
For $H<n\le N$, $\log(2n)\ge L$, so $1\le W_N(n)\le1+\log2$, as claimed. If no such integer exists the assertion is vacuous. [F3, F4, F5, algebra]

4.2 For any integer $M\ge1$ put $B_M=\log(2M)\ge\log2>0$. The harmonic bound $\sum_{n\le M}1/n\le1+\log M$ follows by comparing $1/n$ with $\int_{n-1}^ndt/t$ for $n\ge2$. Using the identity
$$W_M(n)=1+\int_{\log(2n)}^{B_M}\frac{dx}{x}$$
and interchanging its FINITE sum gives
$$\sum_{n\le M}\frac{W_M(n)}n=\sum_{n\le M}\frac1n+\int_{\log2}^{B_M}\frac1x\sum_{\substack{n\le M\\\log(2n)\le x}}\frac1n\,dx.$$
These integrands have finitely many jump points. Their integrals are obtained by subdivision at those points, whose endpoint values do not affect upper/lower sums: isolate them in intervals of arbitrarily small total length. For each $x\ge\log2$ the inner harmonic sum is at most $1+x$. It follows that the last display is at most $C B_M$, since $\log(B_M/\log2)\le B_M/\log2-1$. This also covers $M=1$, when the integral interval is a singleton. [F3, F4, F5, construct, algebra]

4.3 Since $W_M(n)\le1+\log(B_M/\log2)\le B_M/\log2$, we have $\sum_{n\le M}W_M(n)\le M B_M/\log2$. Take $M=\lfloor H\rfloor\le H$ and combine this with step 4.2:
$$\sum_{n\le M}\frac{H+n}{n}W_M(n)=H\sum_{n\le M}\frac{W_M(n)}n+\sum_{n\le M}W_M(n)\le C H\log(2H).$$
This proves (2). All lower logarithmic endpoints are positive, and $\log x\le x-1$ for $x\ge1$ used here follows by integrating $1/t\le1$ from $1$ to $x$. [F3, F4, F5, step 4.2, algebra]

4.4 For TypeI-sized support, step 4.1 bounds its coefficient weight by an absolute constant, and $B=\log(2N)\le2\log H$. Thus (1) has only its original $O(\log H)$ sampling factor at $\delta=1$. For the mollifier-sized support, if $qT\le H$ or $Q^2T\le H$, then the appropriate $b_n\le H+n$. Apply (2), $|a_n|^2\le1/n$, and $1+\log(2M)\le C\log(2H)$ in (1) to obtain $CH(\log(2H))^2$. A common shift of all times changes $a_n$ only by a factor $n^{-iv}$ of modulus one, so it introduces no extra coefficient or real-part factor. These are precisely the stated mean-square interfaces; no detector or moment conclusion is used or derived. [F1, F5, step 3.3, step 4.1, step 4.3, algebra] ∎

## Remarks

The complete Statement and proof paragraph of Vaughan26.18 were read from the existing full text. The source uses a different coefficient weight, $1+\log\log(2N)/\log(2n)$, and refers to earlier inequalities for its proof. The present log-ratio weight is an explicitly proved adaptation; no equality with that source weight or stronger pointwise coefficient estimate is asserted.

The final ledger makes this mean-square input suitable for the corresponding TypeI and mollifier terms in an Ingham detector calculation. Any resulting zero-density derivation remains conditional on a proved zero detector at its actual axiom scope and on the still missing sampled critical-line family fourth moment. It does not establish the full Ingham–Huxley, log-free, Heath–Brown or Guth–Maynard claims. No accepted supplier body is changed.

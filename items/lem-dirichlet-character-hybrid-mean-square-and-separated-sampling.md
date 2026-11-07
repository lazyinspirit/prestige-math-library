---
dependency_level: 2
id: lem-dirichlet-character-hybrid-mean-square-and-separated-sampling
kind: lemma
title: Hybrid character mean square and separated real-time sampling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
axiom_use: None. All character families and sample families are finite; the proof uses compact Riemann integrals and explicitly controlled absolutely convergent improper Riemann integrals.
deps:
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - def-unit-group-modulo-n-and-euler-totient
  - thm-dirichlet-character-primitive-induction
  - thm-dirichlet-character-orthogonality
  - lem-primitive-gauss-sum-twist
  - thm-primitive-gauss-sum-norm
  - thm-additive-large-sieve-inequality
  - thm-ftc-second-part
  - lem-continuous-functions-riemann-integrable
  - lem-riemann-integral-linearity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-derivatives
  - thm-logarithm-derivative-and-integral
justified_by: []
sources:
  references:
    - title: H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III
      url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
      locator: Section 26.2, Lemma 26.14 and Theorems 26.15–26.17, printed pp.119–125. Adapted hybrid mean-square and real-time sampling conclusions; the logarithmic-window kernel is reconstructed directly below. No varying-real-part assertion from Theorem26.18 is included.
---

## Statement

Let $q,Q,N\ge1$ be integers, let $T\ge2$ and $A\in\mathbb R$, and let $a_1,\ldots,a_N\in\mathbb C$. For a Dirichlet character $\chi$ put
$$D_\chi(t)=\sum_{n=1}^N a_n\chi(n)n^{-it},\qquad n^{-it}=\exp(-it\log n).$$
Write $\chi^*$ for the unique primitive ancestor of a character modulo $q$, and include the primitive principal character modulo $1$. All integrals below are Riemann integrals. There is an absolute constant $C>0$ such that

$$\sum_{\chi\bmod q}\int_A^{A+T}|D_\chi(t)|^2\,dt\le C\frac{\varphi(q)}q\sum_{\substack{n\le N\\(n,q)=1}}|a_n|^2(qT+n),\tag{1}$$
$$\sum_{\chi\bmod q}\int_A^{A+T}|D_{\chi^*}(t)|^2\,dt\le C\sum_{n\le N}|a_n|^2(qT+n),\tag{2}$$
$$\sum_{d\le Q}\frac d{\varphi(d)}\sum_{\substack{\chi\bmod d\\\chi\ \mathrm{primitive}}}\int_A^{A+T}|D_\chi(t)|^2\,dt\le C\sum_{n\le N}|a_n|^2(Q^2T+n).\tag{3}$$

These three inequalities also have the following sampled form. For each character label $\chi$ on the left side take a finite index set $J_\chi$, allowed to be empty, and times $t_{\chi,j}\in[A,A+T]$. Let $0<\delta\le1$ and suppose
$$|t_{\chi,j}-t_{\chi,k}|\ge\delta\qquad(j\ne k\text{ in }J_\chi).$$
Replace each integral on the left side by $\sum_{j\in J_\chi}|D_\chi(t_{\chi,j})|^2$, or by $\sum_{j\in J_\chi}|D_{\chi^*}(t_{\chi,j})|^2$ in (2). Then its right side may be multiplied by $\delta^{-1}+\log(2N)$, with another absolute constant. In (2) labels remain the characters modulo $q$; in (3) each primitive-character label retains its weight $d/\varphi(d)$. Different character labels may have coincident times. The coefficients in all branches are independent of the sample indices.

## Statement references

[[def-dirichlet-character-modulo-q]]

[[def-primitive-dirichlet-character-and-conductor]]

[[def-unit-group-modulo-n-and-euler-totient]]

[Montgomery–Vaughan, §26.2, Theorems26.16–26.17](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The positive integers, real parameters, coefficients and finite indexed sampling data in the Statement. Write $e(x)=\exp(2\pi ix)$.

[F1] A character is zero off the units; $\varphi(q)$ counts the unit classes. Every character modulo $q$ has a unique primitive ancestor whose conductor divides $q$. Induction from a fixed divisor is the specified zero-extended arithmetic function, hence is unique ([[def-dirichlet-character-modulo-q]], [[def-unit-group-modulo-n-and-euler-totient]], [[def-primitive-dirichlet-character-and-conductor]], [[def-induced-dirichlet-character]], [[thm-dirichlet-character-primitive-induction]]).

[F2] Summing $\chi(a)\overline{\chi(b)}$ over all characters modulo $q$ gives $\varphi(q)$ for equal unit classes and $0$ for distinct unit classes ([[thm-dirichlet-character-orthogonality]]).

[F3] For a primitive character modulo $d$, $\sum_{a\bmod d}\chi(a)e(am/d)=\overline{\chi(m)}\tau(\chi)$ for every integer $m$, and $|\tau(\chi)|^2=d$ ([[lem-primitive-gauss-sum-twist]], [[thm-primitive-gauss-sum-norm]]).

[F4] For finitely many $\eta$-separated frequencies in $\mathbb R/\mathbb Z$, $0<\eta\le1$, and coefficients on an interval of $L\ge1$ integers, the additive large-sieve bound is $(\eta^{-1}+4\pi L)\sum|b_n|^2$ ([[thm-additive-large-sieve-inequality]]).

[F5] For a real differentiable function with Riemann-integrable derivative on a compact interval, the derivative integral is the endpoint difference. Apply this separately to the real and imaginary components of complex functions ([[thm-ftc-second-part]]).

[F6] Continuous real functions on compact intervals have oriented Riemann integrals, monotone in the integrand, with $|\int_a^b f|\le|b-a|\max|f|$, and additive over intervals; their integral functions differentiate to the integrand. These integrals are linear ([[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]]).

[F7] The complex exponential has derivative equal to itself and $|\exp(x+iy)|=e^x$. The real sine and cosine derivatives are cosine and minus sine, with $\sin0=0$, $\cos0=1$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-derivatives]]).

[F8] The natural logarithm on positive reals has derivative $1/x$ and $\log x=\int_1^x dt/t$ ([[thm-logarithm-derivative-and-integral]]).

## Proof

1.1 We first record the finite-interval inequalities used below without a measure-theoretic supplier. For a continuous complex $f$, define its integral by its real and imaginary parts using [F6]. If $z=\int f\ne0$, multiply by $\overline z/|z|$ and use monotonicity on its real part to obtain $|\int f|\le\int|f|$; the case $z=0$ is immediate. For continuous real $u,v$, nonnegativity and linearity give $0\le\int(u-\lambda v)^2$ for every real $\lambda$. The discriminant of this quadratic gives $(\int uv)^2\le\int u^2\int v^2$; if $\int v^2=0$, its linear coefficient must be zero, so that case is included. The same quadratic argument proves finite-sum Cauchy–Schwarz, also with any prescribed nonnegative finite weights. These arguments apply to $u=|f|$, $v=|g|$. [F6, algebra]

1.2 Finite step functions on compact intervals are Riemann integrable: subdivide at their finitely many discontinuities and isolate those points in intervals of arbitrarily small total length; boundedness makes the upper-minus-lower sum there arbitrarily small. This also proves that changing finitely many point values leaves these integrals unchanged. Their integral is the sum of constant values times interval lengths. Subsequent improper integrals mean limits of compact Riemann integrals; whenever an absolute tail is bounded by a specified integrable majorant, the Cauchy criterion gives existence and bounds that tail by the corresponding majorant integral. No sequence of choices, Lebesgue integral or integral over a product space is used. [F6, construct, algebra]

2.1 For an interval $I$ of $L\ge1$ consecutive integers, put $B(x)=\sum_{n\in I}b_ne(nx)$. Orthogonality [F2] and finite Cauchy–Schwarz give
$$\sum_{\chi\bmod q}\left|\sum_{n\in I}b_n\chi(n)\right|^2=\varphi(q)\sum_{\substack{r\bmod q\\(r,q)=1}}\left|\sum_{\substack{n\in I\\n\equiv r\bmod q}}b_n\right|^2\le\frac{\varphi(q)}q(q+L)\sum_{\substack{n\in I\\(n,q)=1}}|b_n|^2,$$
since each residue class has at most $1+L/q$ representatives. [F1, F2, step 1.1, algebra]

2.2 For primitive $\chi$ modulo $d$, conjugating [F3] gives
$$\sum_{n\in I}b_n\chi(n)=\frac1{\overline{\tau(\chi)}}\sum_{\substack{a\bmod d\\(a,d)=1}}\overline{\chi(a)}B(-a/d).$$
Square, sum over primitive characters, and enlarge the resulting nonnegative sum to all characters modulo $d$. By [F2] and [F3],
$$\sum_{\chi\bmod d}^{*}\left|\sum_{n\in I}b_n\chi(n)\right|^2\le\frac{\varphi(d)}d\sum_{\substack{a\bmod d\\(a,d)=1}}|B(-a/d)|^2.\tag{4}$$
The asterisk means primitive characters. [F1, F2, F3, algebra]

2.3 The ancestors of characters modulo $q$ give exactly one copy of each primitive character of conductor $d\mid q$. Indeed every such primitive character induces a character modulo $q$ by [F1], and two identical ancestors induce the same zero-extended character. Reduced fractions $-a/d$ with $d\mid q$ are distinct classes in the grid $q^{-1}\mathbb Z/\mathbb Z$: equality of reduced fractions forces equality of their denominators and numerators. The $d=1$ frequency is $0$. Discarding $\varphi(d)/d\le1$ in (4), summing over $d\mid q$ and applying [F4] with $\eta=1/q$ therefore gives
$$\sum_{\chi\bmod q}\left|\sum_{n\in I}b_n\chi^*(n)\right|^2\le(q+4\pi L)\sum_{n\in I}|b_n|^2.\tag{5}$$
For $q=1$ the singleton frequency is $1$-separated vacuously, so this case is included. [F1, F4, step 2.2, algebra]

2.4 Alternatively multiply (4) by $d/\varphi(d)$ and sum over $d\le Q$. The reduced frequencies are distinct and $Q^{-2}$-separated in the circle: any noninteger difference has nonzero integral numerator and denominator at most $Q^2$. Thus [F4] gives
$$\sum_{d\le Q}\frac d{\varphi(d)}\sum_{\chi\bmod d}^{*}\left|\sum_{n\in I}b_n\chi(n)\right|^2\le(Q^2+4\pi L)\sum_{n\in I}|b_n|^2.\tag{6}$$
For $Q=1$ use the same singleton convention. These static inequalities have zero left and right sides when $I$ is empty. [F1, F4, step 2.2, algebra]

3.1 For $h>0$ set $W_h(t)=|\int_{-h/2}^{h/2}\exp(itx)\,dx|^2$. FTC and [F7] give $W_h(t)=2(1-\cos ht)/t^2$ for $t\ne0$ and $W_h(0)=h^2$. It is continuous, bounded by $h^2$, and at most $4/t^2$ off $0$, hence absolutely integrable as an improper Riemann integral. Define
$$P(x)=\int_0^x\frac{dy}{1+y^2},\qquad c=\int_0^\infty\frac{dy}{1+y^2}.$$
The latter exists by comparison with $y^{-2}$ for $y\ge1$ and satisfies $1/2\le c\le2$. Oddness gives $P(-x)=-P(x)$, and $|c-P(x)|\le1/x$ for $x\ge1$. We will not need to evaluate $c$. [F5, F6, F7, step 1.1, step 1.2, construct, algebra]

3.2 For $\varepsilon>0$, differentiation of a damped integral gives
$$\int_0^\infty e^{-\varepsilon t}\frac{\sin at}{t}\,dt=P(a/\varepsilon).\tag{7}$$
Here is the full limit justification. The difference quotient in $a$ of $\sin(at)/t$ is bounded by $1$, by [F5] and $|\cos|\le1$. On a compact $t$ interval it converges uniformly to $\cos(at)$; after multiplication by $e^{-\varepsilon t}$ its absolute tail is bounded uniformly by $\int_R^\infty e^{-\varepsilon t}dt$. Thus the derivative equals $\int_0^\infty e^{-\varepsilon t}\cos(at)dt=\varepsilon/(\varepsilon^2+a^2)$, evaluated by the complex exponential antiderivative. Both sides of (7) vanish at $a=0$ and have this derivative; applying [F5] on the compact interval between $0$ and $a$ proves (7). The apparent value at $t=0$ is its continuous limit. [F5, F6, F7, step 1.1, step 1.2, step 3.1, algebra]

3.3 Put $J_\varepsilon(v)=\int_{\mathbb R}e^{-\varepsilon|t|}W_h(t)\cos(vt)\,dt$. Differentiating in $h$ and using $2\sin(ht)\cos(vt)=\sin((h+v)t)+\sin((h-v)t)$ gives
$$J_\varepsilon(v)=2\int_0^h\left[P\left(\frac{u+v}{\varepsilon}\right)+P\left(\frac{u-v}{\varepsilon}\right)\right]du.\tag{8}$$
Indeed, for $0\le h\le H$, the $h$ derivative of $W_h(t)$ has modulus at most $2H$ for $|t|\le1$, and at most $2/|t|$ for $|t|\ge1$. Multiplication by the exponential supplies a uniform integrable tail for the difference quotients, so the compact-uniform plus tail argument of step 3.2 justifies differentiation. At $h=0$, $J_\varepsilon(v)=0$; integrate its derivative by [F5]. Only one-variable integrals have been differentiated or evaluated. [F5, F6, F7, step 1.2, step 3.2, algebra]

3.4 Let $\varepsilon\downarrow0$ in (8). Off an arbitrarily short neighborhood of $u=|v|$ in $[0,h]$, the estimates in step 3.1 imply uniform convergence to the signed limits $\pm c$; the possible neighborhood contributes at most $4c$ times its length. This gives $4c(h-|v|)_+$, including $v=0$ and $|v|=h$. On the left, convergence is uniform on every compact $t$ interval and the tails are bounded independently of $\varepsilon$ by $\int_{|t|>R}4/t^2\,dt$. The imaginary part of $\int W_h(t)e^{itv}dt$ is zero by oddness. Therefore
$$\int_{\mathbb R}W_h(t)e^{itv}\,dt=4c(h-|v|)_+\qquad(v\in\mathbb R).\tag{9}$$
No Fourier inversion or convergence theorem for Lebesgue integrals was used. [F6, F7, step 1.2, step 3.1, step 3.3, algebra]

4.1 First take $A=0$ and put $h=1/T$. For any of the character functions $\psi$ in (1)–(3), let
$$S_\psi(u)=\sum_{n\le N}a_n\psi(n)\mathbf1_{[\log n-h/2,\log n+h/2]}(u).$$
This is a finite step function of compact support. The overlap length of the $n$ and $m$ windows is $(h-|\log n-\log m|)_+$. Expanding finite squares and applying (9) consequently gives
$$\int_{\mathbb R}W_h(t)|D_\psi(t)|^2dt=4c\int_{\mathbb R}|S_\psi(u)|^2du.\tag{10}$$
On the left every summand is absolutely integrable by step 3.1; on the right use step 1.2. All interchanges are finite sums, not product-integral interchanges. [F7, step 1.2, step 3.4, construct, algebra]

4.2 FTC gives $|e^{iy}-1|\le|y|$ by integrating its derivative of modulus one. Hence, for $|t|\le T=1/h$,
$$\left|\int_{-h/2}^{h/2}e^{itx}dx-h\right|\le |t|\int_{-h/2}^{h/2}|x|dx\le h/4,$$
so $W_h(t)\ge9h^2/16$. Since $c\le2$, (10) implies, with an absolute $C_0$,
$$\int_0^T|D_\psi(t)|^2dt\le C_0h^{-2}\int_{\mathbb R}|S_\psi(u)|^2du.\tag{11}$$
This is an inequality of nonnegative improper Riemann integrals, justified by compact monotonicity followed by the explicit tails already proved. [F5, F6, F7, step 1.1, step 3.1, step 4.1, algebra]

4.3 For fixed $u$, the active integers form a consecutive interval in $[1,N]$, of cardinality $L(u)\le1+h e^{u+h/2}$. To see the bound, its real containing interval is $[e^{u-h/2},e^{u+h/2}]$, of length $e^{u+h/2}(1-e^{-h})\le h e^{u+h/2}$, the last inequality following by integrating $e^{-x}\le1$ on $[0,h]$. If $n$ is active then $e^{u+h/2}\le ne^h\le e^{1/2}n$, since $h\le1/2$ and the exponential is nondecreasing by its nonnegative derivative and FTC. The number $e^{1/2}$ is an absolute constant. Consequently, for $K\ge1$ and fixed positive $b$,
$$K+bL(u)\le C_b(K+hn)\quad\text{for every active }n.\tag{12}$$
All empty active intervals contribute zero. [F5, F7, F8, step 4.1, algebra]

4.4 Sum (11) over the characters modulo $q$. At each $u$, use step 2.1 for its active interval, retain the factor $\varphi(q)/q$, and apply (12) with $K=q$. Integrate the resulting finite-step-function inequality in $u$. Each fixed $n$ is active on a window of length $h$, including its endpoints without changing the integral. Thus
$$\sum_{\chi\bmod q}\int_0^T|D_\chi(t)|^2dt\le C\frac{\varphi(q)}q h^{-2}\sum_{\substack{n\le N\\(n,q)=1}}|a_n|^2(q+hn)h=C\frac{\varphi(q)}q\sum_{\substack{n\le N\\(n,q)=1}}|a_n|^2(qT+n).$$
This proves (1) at $A=0$. [F1, F6, step 1.2, step 2.1, step 4.2, step 4.3, algebra]

4.5 For the ancestor family use (5) instead of step 2.1 and $K=q$ in (12); for the weighted primitive family use (6) and $K=Q^2$. The same window-length calculation gives (2) and (3) at $A=0$, respectively. For general $A$, substitute $t=A+v$ and replace $a_n$ by $a_n n^{-iA}$, preserving $|a_n|$. Translation of a continuous Riemann integral follows directly by translating its partitions, so (1)–(3) hold as stated. [F6, F7, step 2.3, step 2.4, step 4.2, step 4.3, step 4.4, algebra]

5.1 For each sample take $I_{\chi,j}=[t_{\chi,j}-\delta/2,t_{\chi,j}+\delta/2]$. For one label these intervals have disjoint interiors, even when two endpoints meet. They lie in $I_0=[A-\delta/2,A+T+\delta/2]$, of length $T+\delta\le3T/2$. For a continuously differentiable complex $F$, [F5] applied to $|F|^2$ gives, at $t_0\in I_{\chi,j}$ and every $s\in I_{\chi,j}$,
$$|F(t_0)|^2\le |F(s)|^2+2\int_{I_{\chi,j}}|F(t)||F'(t)|dt.$$
Integrate this inequality in $s$ and divide by $\delta$ to obtain
$$|F(t_0)|^2\le\delta^{-1}\int_{I_{\chi,j}}|F(t)|^2dt+2\int_{I_{\chi,j}}|F(t)||F'(t)|dt.\tag{13}$$
These are compact integrals of continuous functions, so step 1.1 supplies every integral inequality used here. [F5, F6, step 1.1, given, construct, algebra]

5.2 Fix one of the three character families, with its positive label weights $w_\chi$ equal to $1$ in (1)–(2) and $d/\varphi(d)$ in (3). Sum (13) with these weights and use disjoint interiors for each label. If $U=\sum_\chi w_\chi\int_{I_0}|D_\psi|^2$ and $V=\sum_\chi w_\chi\int_{I_0}|D'_\psi|^2$, the result is at most $\delta^{-1}U+2\sqrt{UV}$, by integral and finite weighted Cauchy–Schwarz from step 1.1. Here $\psi=\chi^*$ only in (2). No separation between different labels is required. [F6, step 1.1, step 5.1, algebra]

5.3 Put $B=\log(2N)>0$. The derivative polynomial has coefficients $-i(\log n)a_n$, whose squared absolute values are at most $B^2|a_n|^2$. Apply the continuous branch already proved on $I_0$. Its length is $T+\delta\ge2$, and its coefficient quadratic form is at most $3/2$ times the right-side form at $T$. Therefore $U\le C\mathcal G$ and $V\le CB^2\mathcal G$, where $\mathcal G$ is respectively the right-side quadratic form in (1), (2) or (3), without its absolute constant. Step 5.2 is at most $C(\delta^{-1}+B)\mathcal G$, proving every sampled assertion. [F7, F8, step 4.4, step 4.5, step 5.2, algebra]

5.4 Empty sampling families give zero, and all-zero coefficient families give zero on both sides. The case $N=1$ has $D'_\psi=0$ and $B=\log2>0$, so the same argument applies. The modulus-one cases were included in steps 2.3–2.4. Equal sample gaps $\delta$ and samples at either endpoint retain (13), because intervals may meet only at endpoints. All choices and sums in this proof are finite; its analytic limits use the explicit compact-uniform and tail estimates of steps 3.1–3.4. Thus no choice principle has entered. [F1, F6, step 1.2, step 2.3, step 2.4, step 3.4, step 5.1, step 5.3, algebra] ∎

## Remarks

The source statements and proofs in §26.2 were read through Theorem26.17. The proof here adapts their logarithmic-window argument, deriving the triangle identity directly with an unevaluated positive normalization constant. It does not invoke Plancherel, Lebesgue Fubini or a Fourier-inversion supplier. It proves only real-time sampling with coefficients independent of the samples. Sample-dependent real parts, critical-line fourth moments, zero detectors, hybrid large-value estimates and the full density theorems require additional local proofs.

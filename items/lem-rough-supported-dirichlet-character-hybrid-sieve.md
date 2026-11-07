---
dependency_level: 2
id: lem-rough-supported-dirichlet-character-hybrid-sieve
kind: lemma
title: "Hybrid sieve with rough coefficients and a logarithmic conductor weight"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: None. All character families and coefficient sums are finite; analytic limits use compact Riemann calculus and explicit one-dimensional absolute tails.
deps:
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - def-gauss-sum-dirichlet-character
  - def-unit-group-modulo-n-and-euler-totient
  - def-number-theoretic-mobius-function
  - thm-dirichlet-character-primitive-induction
  - thm-dirichlet-character-orthogonality
  - lem-dirichlet-character-values
  - thm-primitive-gauss-sum-norm
  - thm-additive-large-sieve-inequality
  - thm-canonical-prime-factorisation
  - thm-euler-totient-product-formula
  - cor-euler-totient-is-multiplicative
  - thm-standard-representatives-modulo-n
  - lem-integer-part
  - thm-geometric-series
  - thm-ftc-second-part
  - lem-continuous-functions-riemann-integrable
  - lem-riemann-integral-linearity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-sine-and-cosine-derivatives
  - thm-logarithm-derivative-and-integral
  - thm-complex-exponential-addition-and-real-extension
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
sources:
  references:
    - title: "Montgomery and Vaughan, Multiplicative Number Theory III, Section 28.7, Lemma 28.17"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 226–227; rough-coefficient Gauss amplification and hybrid sieve. The positive conductor weight and the complete compact triangle calculation are reconstructed locally."
---

## Statement

Let $Q\ge1$ be real, let $N\ge1$ be an integer, let $U\ge2$ and $A\in\mathbb R$, and let $a_1,\ldots,a_N\in\mathbb C$. Assume that $a_n=0$ whenever $n$ has a prime divisor $p\le Q$; the coefficient $a_1$ is allowed. For a Dirichlet character $\psi$ define
$$D_\psi(t)=\sum_{n=1}^N a_n\psi(n)\exp(-it\log n).$$
There is an absolute constant $C>0$ such that
$$\sum_{\substack{d\in\mathbb Z\\1\le d\le Q}}\left(1+\log\frac Qd\right)\sum_{\substack{\psi\bmod d\\\psi\text{ primitive}}}\int_A^{A+U}|D_\psi(t)|^2\,dt\le C\sum_{n=1}^N|a_n|^2(n+Q^2U).$$
The primitive character of conductor one is included. The coefficients are common to all characters and times. The integrals are Riemann integrals, and the constant is independent of every displayed parameter and coefficient.

## Statement references

[[def-dirichlet-character-modulo-q]]

[[def-primitive-dirichlet-character-and-conductor]]

[Montgomery–Vaughan, Section 28.7, Lemma 28.17](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The parameters and common coefficients in the Statement. Put $e(x)=\exp(2\pi i x)$ and $\ell_d=1+\log(Q/d)$ for integers $1\le d\le Q$.

[F1] A character is a homomorphism on the unit classes, extended by zero off the units. ([[def-dirichlet-character-modulo-q]])

[F2] Primitive means not induced from a proper divisor; the principal character modulo one is primitive. ([[def-primitive-dirichlet-character-and-conductor]])

[F3] Induction from $d\mid q$ agrees with the ancestor on integers coprime to $q$ and vanishes otherwise. ([[def-induced-dirichlet-character]])

[F4] The Gauss sum is $\tau(\xi)=\sum_{a\bmod q}\xi(a)e(a/q)$, with this additive-character normalization. ([[def-gauss-sum-dirichlet-character]])

[F5] The unit classes modulo $q$ form a finite group and their number is $\varphi(q)$. ([[def-unit-group-modulo-n-and-euler-totient]])

[F6] The Möbius function is zero on integers divisible by a prime square and is $(-1)^r$ on a product of $r$ distinct primes; $\mu(1)=1$. ([[def-number-theoretic-mobius-function]])

[F7] Every character modulo $q$ has a unique primitive ancestor of conductor dividing $q$. ([[thm-dirichlet-character-primitive-induction]])

[F8] Summing $\xi(a)\overline{\xi(b)}$ over all characters modulo $q$ gives $\varphi(q)$ for equal unit classes and zero for distinct unit classes. ([[thm-dirichlet-character-orthogonality]])

[F9] Character values on units have modulus one, and are zero on nonunits. ([[lem-dirichlet-character-values]])

[F10] For a primitive character modulo $d$, $|\tau(\psi)|^2=d$. ([[thm-primitive-gauss-sum-norm]])

[F11] For a finite $\eta$-separated frequency set in $\mathbb R/\mathbb Z$ and coefficients on $L\ge1$ consecutive integers, the additive large-sieve bound is $(\eta^{-1}+4\pi L)\sum|b_n|^2$. ([[thm-additive-large-sieve-inequality]])

[F12] A positive integer has its canonical finite prime-power factorization with uniquely determined exponents. ([[thm-canonical-prime-factorisation]])

[F13] Euler's finite product formula is $\varphi(n)=n\prod_{p\mid n}(1-1/p)$, with $\varphi(1)=1$. ([[thm-euler-totient-product-formula]])

[F14] If $(d,m)=1$, then $\varphi(dm)=\varphi(d)\varphi(m)$. ([[cor-euler-totient-is-multiplicative]])

[F15] Complete residue systems can be taken as $0,\ldots,q-1$, including the sole representative $0$ modulo one. ([[thm-standard-representatives-modulo-n]])

[F16] Every real number has a unique integer part. ([[lem-integer-part]])

[F17] For real $0\le r<1$, $\sum_{j\ge0}r^j=(1-r)^{-1}$. ([[thm-geometric-series]])

[F18] Compact integrals of integrable real derivatives equal their endpoint differences; apply this separately to real and imaginary parts. ([[thm-ftc-second-part]])

[F19] Continuous functions on compact intervals have monotone oriented Riemann integrals, bounded by interval length times their supremum, additive over intervals; the integral function of a continuous integrand differentiates to that integrand. ([[lem-continuous-functions-riemann-integrable]])

[F20] Riemann integration is linear. ([[lem-riemann-integral-linearity]])

[F21] The complex exponential is entire and its derivative is itself. ([[thm-complex-exponential-is-entire-with-derivative-itself]])

[F22] $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$. ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]])

[F23] The kernel of the complex exponential is $2\pi i\mathbb Z$. ([[thm-kernel-and-fibres-of-complex-exponential]])

[F24] The sine and cosine derivatives are cosine and minus sine. ([[thm-sine-and-cosine-derivatives]])

[F25] $\log'(x)=1/x$ and $\log x=\int_1^xdt/t$ for $x>0$. ([[thm-logarithm-derivative-and-integral]])

[F26] $\exp(z+w)=\exp z\exp w$, and the complex exponential extends the real exponential. ([[thm-complex-exponential-addition-and-real-extension]])

[F27] The real logarithm is the inverse of the exponential on positive reals. ([[def-natural-logarithm]])

[F28] The logarithm is continuous and strictly increasing, with its product, quotient and reciprocal laws and $\log1=0$. ([[thm-natural-logarithm-laws]])

## Proof

**Proof technique:** finite Gauss amplification, a harmonic lower bound, and a compact triangle transform on logarithmic windows.

1.1 The compact integral inequalities needed below follow directly from [F19] and [F20]. Rotate a complex integral by the conjugate phase of its value to prove $|\int f|\le\int|f|$, including a zero value. Nonnegativity of $\int(u-\lambda v)^2$ for all real $\lambda$ gives integral Cauchy–Schwarz by its discriminant, also when the quadratic coefficient is zero; the same finite-sum argument gives finite weighted Cauchy–Schwarz. Finite step functions are Riemann integrable: isolate each of their finitely many discontinuities in intervals of arbitrarily small total length, and bound the upper-minus-lower sum there by that length times a fixed bound. This also proves that changing finitely many point values does not change the integral. Every improper integral below is a limit of compact integrals, with its absolute Cauchy tails specified explicitly. [F19, F20, construct, algebra]

1.2 Fix for now an interval $I$ of $L\ge1$ consecutive positive integers, and coefficients $b_n$ on it satisfying the rough-support hypothesis. For every integer $q\le Q$, each index with $b_n\ne0$ is coprime to $q$: otherwise [F12] supplies a common prime divisor $p\le q\le Q$. Character families and residue sums are finite by [F5], [F15] and [F16], and $\ell_d\ge1$ by [F28]. A primitive character of conductor $d\mid q$ induces exactly one character modulo $q$: [F3] specifies its arithmetic function, and [F7] supplies the inverse ancestor map. These statements include $d=q=1$ by [F2]. [given, F2, F3, F5, F7, F12, F15, F16, F28, construct, algebra]

1.3 Let $\xi$ modulo $q$ be induced by a primitive $\psi$ modulo $d\mid q$, and let $P_q$ be the finite set of primes dividing $q$ but not $d$. By [F1], [F3] and [F12], $\xi(a)=\psi(a)\prod_{p\in P_q}(1-\mathbf1_{p\mid a})$. Expanding this finite product and using [F6] gives $$\tau(\xi)=\sum_{l\mid\prod_{p\in P_q}p}\mu(l)\psi(l)\sum_{b\bmod q/l}\psi(b)e\bigl(b/(q/l)\bigr).$$ Indeed $a=lb$ parametrizes the multiples of $l$ modulo $q$, and $(l,d)=1$. Here and below all complete systems are the standard ones in [F15]. [F1, F3, F4, F6, F12, F15, algebra]

1.4 For real $R\ge1$, put $H_R=\sum_{1\le n\le R}1/n$. By [F12], each $n$ uniquely has the form $ab$, where all prime divisors of $a$ divide $d$ and $(b,d)=1$. Enlarge the finite reciprocal sum over such $a$ to the product of the finitely many positive geometric series from [F17]. By [F13], $$H_R\le\prod_{p\mid d}(1-1/p)^{-1}\sum_{\substack{b\le R\\(b,d)=1}}\frac1b=\frac d{\varphi(d)}\sum_{\substack{b\le R\\(b,d)=1}}\frac1b.$$ The empty product at $d=1$ equals one. Only finitely many prime factors are involved; truncated geometric products bound the finite sum before their explicit geometric tails are allowed to tend to zero. [F12, F13, F17, construct, algebra]

2.1 In step 1.3, $d\mid q/l$; write $q/l=dk$ and $b=c+dj$, with $c\bmod d$ and $0\le j<k$. Periodicity and [F26] split the inner sum into $\sum_{c\bmod d}\psi(c)e(c/(dk))$ times $\sum_{j=0}^{k-1}e(j/k)$. For $k>1$ the latter is zero: multiply it by $1-e(1/k)$, telescope, and use [F23] to see that the multiplier is nonzero. For $k=1$ it is one and the remaining sum is $\tau(\psi)$. Thus $$\tau(\xi)=\mu(q/d)\psi(q/d)\tau(\psi).$$ The right side vanishes if $q/d$ is not squarefree or is not coprime to $d$, exactly when $l=q/d$ cannot occur in step 1.3. By [F9] and [F10], $$|\tau(\xi)|^2=\begin{cases}d\mu(m)^2,&q=dm, (m,d)=1,\\0,&\text{otherwise.}\end{cases}$$ This includes the empty product and $\tau(\mathbf1\bmod1)=1$. [F1, F4, F6, F9, F10, F12, F15, F23, F26, step 1.3, algebra]

2.2 Put $B(\alpha)=\sum_{n\in I}b_ne(n\alpha)$. For a unit $n\bmod q$, substitution in the finite Gauss sum gives $\sum_{a\bmod q}\overline{\xi(a)}e(an/q)=\xi(n)\tau(\overline\xi)$. Step 1.2 makes every nonzero coefficient index such a unit. Finite character orthogonality therefore gives the exact identity $$\sum_{\substack{a\bmod q\\(a,q)=1}}|B(a/q)|^2=\frac1{\varphi(q)}\sum_{\xi\bmod q}|\tau(\overline\xi)|^2\left|\sum_{n\in I}b_n\xi(n)\right|^2.$$ All expansions are finite, and [F9] supplies conjugation as reciprocal on units in the substitution. [F1, F4, F8, F9, F26, step 1.2, algebra]

2.3 Group the last finite sum by the squarefree radical $m$ of $b$. Then $m\le b\le R$ and $(m,d)=1$. For fixed $m$, its reciprocal mass is at most $\prod_{p\mid m}\sum_{j\ge1}p^{-j}=\prod_{p\mid m}(p-1)^{-1}=1/\varphi(m)$, by [F13] and [F17]; $m=1$ contributes one. Consequently $$\frac d{\varphi(d)}\sum_{\substack{m\le R\\(m,d)=1}}\frac{\mu(m)^2}{\varphi(m)}\ge H_R\ge\log R.$$ For the last inequality, [F16] gives $H_R\ge\int_1^{\lfloor R\rfloor+1}dx/x=\log(\lfloor R\rfloor+1)\ge\log R$, by [F25] and [F28]. There is also $H_R\ge1$. [F6, F12, F13, F16, F17, F25, F28, step 1.4, algebra]

2.4 For $h>0$ set $W_h(t)=|\int_{-h/2}^{h/2}\exp(itx)\,dx|^2$. By [F18], [F21], [F22] and [F26], it equals $2(1-\cos ht)/t^2$ for $t\ne0$ and $h^2$ at zero. It is continuous and bounded by $\min(h^2,4/t^2)$, hence has an absolutely convergent improper Riemann integral. Put $P(x)=\int_0^x(1+y^2)^{-1}dy$ and $c=\int_0^\infty(1+y^2)^{-1}dy$. Compact monotonicity and the tail comparison with $y^{-2}$ give $1/2\le c\le2$, $P(-x)=-P(x)$, and $|c-P(x)|\le1/x$ for $x\ge1$. [F18, F19, F20, F21, F22, F24, F26, step 1.1, construct, algebra]

3.1 On the support, induction gives $\xi(n)=\psi(n)$, where $\psi$ is the ancestor. Sum step 2.2 over $q\le Q$, regroup by $q=dm$ using steps 1.2 and 2.1, and apply [F14]. This proves $$\sum_{q\le Q}\sum_{\substack{a\bmod q\\(a,q)=1}}|B(a/q)|^2=\sum_{d\le Q}W_d(Q)\sum_{\psi\bmod d}^{*}\left|\sum_{n\in I}b_n\psi(n)\right|^2,\qquad W_d(Q)=\frac d{\varphi(d)}\sum_{\substack{m\le Q/d\\(m,d)=1}}\frac{\mu(m)^2}{\varphi(m)}.$$ The star denotes primitive characters. The norms in step 2.1 apply equally to conjugate characters. Each primitive ancestor induces once at each allowable modulus; no extra label weight or character-dependent coefficient is inserted. [F3, F5, F7, F9, F14, step 1.2, step 2.1, step 2.2, algebra]

3.2 For $\epsilon>0$ one has $$\int_0^\infty e^{-\epsilon t}\frac{\sin(at)}t\,dt=P(a/\epsilon)\qquad(a\in\mathbb R).$$ To prove this, differentiate compact integrals in $a$. The difference quotients of $\sin(at)/t$ have modulus at most one by [F18] and [F24]; on compact $t$ intervals they converge uniformly to $\cos(at)$, and their damped tails are bounded by $\int_R^\infty e^{-\epsilon t}dt$. The derivative integral is $\int_0^\infty e^{-\epsilon t}\cos(at)dt=\epsilon/(\epsilon^2+a^2)$, evaluated from the complex exponential antiderivative and its exponential tail. The right side has the same derivative by [F19], and both vanish at $a=0$; compact FTC proves the equality. At $t=0$ use the continuous limiting value. [F18, F19, F21, F22, F24, F26, step 1.1, step 2.4, algebra]

4.1 The reduced frequencies $a/q$ in step 3.1 are distinct in $\mathbb R/\mathbb Z$, with the modulus-one frequency equal to zero. For two distinct frequencies, every nonintegral difference has a nonzero integral numerator over a denominator $qr\le Q^2$; minimizing over integer translates therefore gives circular distance at least $Q^{-2}$. Apply [F11] with $\eta=Q^{-2}$ to obtain $$\sum_{d\le Q}W_d(Q)\sum_{\psi\bmod d}^{*}\left|\sum_{n\in I}b_n\psi(n)\right|^2\le(Q^2+4\pi L)\sum_{n\in I}|b_n|^2.$$ When $Q=1$ the singleton frequency satisfies the separation condition vacuously. [F11, F12, F15, F23, step 3.1, algebra]

4.2 Define $J_\epsilon(h,v)=\int_{\mathbb R}e^{-\epsilon|t|}W_h(t)\cos(vt)dt$. On $0\le h\le H$, the $h$ derivative $2\sin(ht)/t$ is bounded by $2H$ for $|t|\le1$ and by $2/|t|$ otherwise; after damping these bounds have explicit integrable tails. Compact-uniform convergence of difference quotients and those tails justify differentiation. The trigonometric product identity, obtained from [F22] and [F26], and step 3.2 give $$J_\epsilon(h,v)=2\int_0^h\left[P\left(\frac{u+v}{\epsilon}\right)+P\left(\frac{u-v}{\epsilon}\right)\right]du.$$ Here $J_\epsilon(0,v)=0$, and [F18] integrates its derivative. [F18, F19, F20, F22, F24, F26, step 1.1, step 2.4, step 3.2, algebra]

5.1 Set $R=Q/d\ge1$ in step 2.3. Then $W_d(Q)\ge\max(1,\log(Q/d))\ge\ell_d/2$. Inserting this positive lower bound in step 4.1 gives the static estimate $$\sum_{d\le Q}\ell_d\sum_{\psi\bmod d}^{*}\left|\sum_{n\in I}b_n\psi(n)\right|^2\le2(Q^2+4\pi L)\sum_{n\in I}|b_n|^2.$$ The factor $d/\varphi(d)$ in step 3.1 was retained in the harmonic argument; no unweighted coprime harmonic lower bound is assumed. Empty intervals have zero on both sides and will be permitted below. [F28, step 4.1, step 2.3, algebra]

5.2 Let $\epsilon\downarrow0$ in step 4.2. Outside an arbitrarily short neighborhood of $u=|v|$ in $[0,h]$, the bounds for $P$ in step 2.4 give uniform convergence to the signed limits $\pm c$; the bounded integrand makes that neighborhood's contribution arbitrarily small. The right side therefore tends to $4c(h-|v|)_+$, including $v=0$ and $|v|=h$. The left side converges uniformly on compact $t$ intervals, and its tails are uniformly bounded by $\int_{|t|>R}4/t^2dt=8/R$. Oddness makes the imaginary part vanish. Thus the exact absolutely convergent identity is $$\int_{\mathbb R}W_h(t)\exp(itv)dt=4c(h-|v|)_+.$$ All limits have explicit one-dimensional tails; no Fourier inversion or product-integral theorem has been used. [F18, F19, F20, F22, step 1.1, step 2.4, step 4.2, algebra]

6.1 First let $A=0$ and $h=1/U\le1/2$. For each primitive $\psi$, define the finite step function $$S_\psi(u)=\sum_{n=1}^N a_n\psi(n)\mathbf1_{[\log n-h/2,\log n+h/2]}(u).$$ Its support is compact. Expanding both finite squares, the overlap length of the $n,m$ intervals is $(h-|\log n-\log m|)_+$. Step 5.2 consequently gives $$\int_{\mathbb R}W_h(t)|D_\psi(t)|^2dt=4c\int_{\mathbb R}|S_\psi(u)|^2du.$$ On the left $|D_\psi|\le\sum|a_n|$ by [F9], so its absolute tail is at most $(\sum|a_n|)^2\,8/R$; the right integral is a compact finite-step integral from step 1.1. This justifies every finite-sum exchange, including window endpoints. [given, F9, F20, F22, F26, F27, F28, step 1.1, step 5.2, construct, algebra]

7.1 For $|t|\le U=1/h$, FTC and unit modulus give $$\left|\int_{-h/2}^{h/2}\exp(itx)dx-h\right|\le|t|\int_{-h/2}^{h/2}|x|dx\le h/4.$$ Hence $W_h(t)\ge9h^2/16$ on this interval. Nonnegative compact-integral comparison followed by the tails in step 6.1 proves $$\int_0^U|D_\psi(t)|^2dt\le C_0h^{-2}\int_{\mathbb R}|S_\psi(u)|^2du$$ for an absolute $C_0$, since $c\le2$. [F18, F19, F21, F22, step 1.1, step 2.4, step 6.1, algebra]

7.2 For fixed $u$, the active positive integers form a consecutive interval $I(u)\subseteq[1,N]$, possibly empty. By [F27] and [F28], they lie between $e^{u-h/2}$ and $e^{u+h/2}$. Its cardinality $L(u)$ is at most $1+h e^{u+h/2}$: the real interval's length is $e^{u+h/2}(1-e^{-h})\le h e^{u+h/2}$, by [F18] applied to $e^{-x}\le1$. If $n$ is active, $e^{u+h/2}\le ne^h\le e^{1/2}n$. Exponential monotonicity here also follows from its positive real derivative and FTC. Since $Q^2\ge1$, this proves $$Q^2+4\pi L(u)\le C_1(Q^2+hn)$$ for every active $n$, with an absolute $C_1$. Floors and equality at interval endpoints are allowed by [F16] and step 1.1. [given, F16, F18, F21, F22, F26, F27, F28, step 1.1, step 6.1, algebra]

8.1 The coefficients restricted to $I(u)$ retain the rough-support property. Apply step 5.1 at each $u$, and then use step 7.2 separately for every active coefficient. It gives $$\sum_{d\le Q}\ell_d\sum_{\psi\bmod d}^{*}|S_\psi(u)|^2\le C_2\sum_{n\in I(u)}|a_n|^2(Q^2+hn).$$ Integrate in $u$; each fixed $n$ is active on a window of length exactly $h$. Finite character sums and step 7.1 therefore yield $$\sum_{d\le Q}\ell_d\sum_{\psi\bmod d}^{*}\int_0^U|D_\psi(t)|^2dt\le C_3h^{-2}\sum_{n=1}^N|a_n|^2(Q^2+hn)h=C_3\sum_{n=1}^N|a_n|^2(Q^2U+n).$$ All $u$ integrals are compact step integrals and all remaining improper tails were proved in step 6.1. [F19, F20, step 1.1, step 5.1, step 6.1, step 7.1, step 7.2, algebra]

9.1 For general real $A$, replace $a_n$ by $a_n\exp(-iA\log n)$ and translate $t=A+v$ in the compact integral. The phase product law [F26] makes the new polynomial $D_\psi(A+v)$, while [F22] preserves every coefficient modulus and the rough support. Translation of partitions preserves Riemann integrals. Step 8.1 proves the required estimate on $[A,A+U]$ with the same absolute constant. [given, F19, F20, F22, F26, F27, step 8.1, algebra]

10.1 All constants used above are numerical: the arithmetic lower bound is $W_d(Q)\ge\ell_d/2$, the additive-sieve constant is literal, $1/2\le c\le2$, and $h\le1/2$ in the window estimate. There is no restriction on $N$, and the index $n=1$ has its permitted logarithmic window centered at zero. At $Q=1$, step 5.1 retains the positive weight one and the single primitive label. Empty character subfamilies and all-zero coefficients give zero energy; window endpoint changes affect finitely many points only. Steps 8.1 and 9.1 thus establish every parameter and endpoint case in the Statement, without a choice premise. [F2, F16, F19, F20, F27, F28, step 1.1, step 1.2, step 4.1, step 5.1, step 2.4, step 7.2, step 8.1, step 9.1, algebra] ∎

## Remarks

The proof adapts the source's rough-coefficient Gauss amplification while deriving its complete induced Gauss formula, the exact conductor weight and the compact triangle calculation locally. In particular the harmonic lower bound is applied to $\frac d{\varphi(d)}\sum_{(m,d)=1}\mu(m)^2/\varphi(m)$, not to the unmultiplied coprime sum. No sampled hybrid inequality, Selberg theorem, private proof excerpt or nonlocal theorem replaces these steps. The cached source passage in Section 28.7 was read; this does not claim fresh external retrieval or whole-book reading. The positive weight at $d=Q$ is a consequence of the locally proved $H_R\ge1$ bound.

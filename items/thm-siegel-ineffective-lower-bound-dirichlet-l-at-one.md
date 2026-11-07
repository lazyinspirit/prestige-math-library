---
id: thm-siegel-ineffective-lower-bound-dirichlet-l-at-one
kind: theorem
title: Siegel's ineffective lower bound for real Dirichlet L-values at one
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-dirichlet-character-modulo-q
  - lem-dirichlet-character-values
  - def-dirichlet-l-function
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-dirichlet-l-euler-product
  - lem-real-dirichlet-l-nonzero-at-one
  - thm-induced-dirichlet-l-finite-euler-factors
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - lem-real-dirichlet-character-has-real-primitive-ancestor
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - def-natural-logarithm
  - def-complex-exponential
  - lem-mellin-inversion-for-exponential-kernel
  - def-euler-gamma-function
  - thm-gamma-meromorphic-continuation
  - thm-stirling-formula-gamma
  - thm-residue-theorem-null-homologous-cycle
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-identity-theorem-holomorphic-functions
  - thm-dirichlet-series-summatory-integral
  - thm-fundamental-theorem-of-arithmetic
  - thm-euclids-lemma
  - thm-natural-logarithm-laws
  - thm-real-power-laws
  - thm-logarithm-slower-than-every-positive-power
  - lem-product-of-distinct-primitive-real-characters-is-nonprincipal
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - thm-p-series-real-exponents
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - def-prime
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Theorem 10.3 and its complete proof, printed pp. 76–79.
    - title: Harold Davenport, Multiplicative Number Theory
      url: https://djvu.online/file/Rh8B8jEVpxFgk
      locator: §21, printed pp. 126–131, Siegel's theorem proof.

---




## Statement

For every real $\varepsilon>0$ there is a constant $c_\varepsilon>0$ such that every primitive real nonprincipal Dirichlet character $\chi$ of conductor $q\ge3$ satisfies
$$L(1,\chi)\ge c_\varepsilon q^{-\varepsilon}.$$
The proof does not give an effective procedure for computing $c_\varepsilon$.

## Statement references

Ian Petrow, *Introduction to Analytic Number Theory*, Theorem 10.3 and complete proof, printed pp. 76–79.

Harold Davenport, *Multiplicative Number Theory*, §21, printed pp. 126–131.

## Facts & Assumptions

**Given:** A positive real $\varepsilon$, primitive real nonprincipal Dirichlet characters and their conductors, and their Dirichlet $L$-functions.

[A1] The proof uses classical excluded middle on existence of a primitive real nonprincipal character with a real zero in a specified interval. It uses no axiom of choice.

[F1] A Dirichlet character is periodic and completely multiplicative, vanishes on nonunits, and has modulus one on units; a real character therefore takes values in $\{-1,0,1\}$. For $\operatorname{Re}s>1$, $L(s,\rho)=\sum_{n\ge1}\rho(n)n^{-s}$ ([[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]], [[def-dirichlet-l-function]]).

[F2] A primitive nonprincipal character has an entire $L$-function, its Euler product is positive on real $s>1$, and for a real such character $L(1,\rho)\ne0$ ([[thm-primitive-dirichlet-l-analytic-continuation]], [[thm-dirichlet-l-euler-product]], [[lem-real-dirichlet-l-nonzero-at-one]]).

[F3] If $\rho$ modulo $M$ is induced by its primitive ancestor $\rho^*$ modulo $d$, then for $\operatorname{Re}s>1$,
$$L(s,\rho)=L(s,\rho^*)\prod_{p\mid M,\ p\nmid d}(1-\rho^*(p)p^{-s})$$
([[thm-induced-dirichlet-l-finite-euler-factors]]).

[F4] For $\operatorname{Re}s>0$, $s\ne1$,
$$\zeta(s)=\frac{s}{s-1}-s\int_1^\infty\{x\}x^{-s-1}\,dx,$$
where $\{x\}=x-\lfloor x\rfloor$; the integral is holomorphic there ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[F5] A real Dirichlet character has a real primitive ancestor; a nonprincipal character's primitive ancestor is nonprincipal ([[lem-real-dirichlet-character-has-real-primitive-ancestor]], [[def-primitive-dirichlet-character-and-conductor]], [[def-induced-dirichlet-character]]).

[F6] For $x>0$, $x^{-s}=\exp(-s\log x)$; Mellin inversion gives $e^{-x}=(2\pi i)^{-1}\int_{(c)}\Gamma(s)x^{-s}ds$ for $c>0$ ([[def-natural-logarithm]], [[def-complex-exponential]], [[lem-mellin-inversion-for-exponential-kernel]]).

[F7] Gamma has residue $1$ at $0$, is positive on the positive real axis, and decays exponentially on bounded vertical strips ([[def-euler-gamma-function]], [[thm-gamma-meromorphic-continuation]], [[thm-stirling-formula-gamma]]).

[F8] A meromorphic function's integral around a positively oriented rectangle with no boundary poles is $2\pi i$ times the sum of enclosed residues ([[thm-residue-theorem-null-homologous-cycle]]).

[F9] Locally uniform limits of holomorphic functions are holomorphic; holomorphic functions on a connected domain agreeing on a nonempty open subset agree throughout ([[thm-weierstrass-convergence-holomorphic-functions]], [[thm-identity-theorem-holomorphic-functions]]).

[F10] If $A(x)=\sum_{n\le x}a_n=O(1)$, then for $\operatorname{Re}z>0$ the convergent Dirichlet series satisfies $\sum_{n\ge1}a_n n^{-z}=z\int_1^\infty A(x)x^{-z-1}dx$ ([[thm-dirichlet-series-summatory-integral]]).

[F11] The unique prime factorization of a positive integer is a finite product of prime powers ([[thm-fundamental-theorem-of-arithmetic]]).

[F12] If a prime divides a product of two integers, it divides at least one factor ([[thm-euclids-lemma]]).

[F13] The natural logarithm is strictly increasing and satisfies $\log(xy)=\log x+\log y$; positive real powers satisfy $x^{r+s}=x^rx^s$ and $(xy)^r=x^ry^r$; also $\log x=o(x^\alpha)$ for every $\alpha>0$ ([[thm-natural-logarithm-laws]], [[thm-real-power-laws]], [[thm-logarithm-slower-than-every-positive-power]]).

[F14] For $\operatorname{Re}s>1$, each Dirichlet $L$-function has its Euler product, which is positive on the real axis for a real character ([[thm-dirichlet-l-euler-product]]).

[F15] Distinct primitive real nonprincipal characters modulo $q_1,q_2$ have a real nonprincipal product character modulo $q_1q_2$ ([[lem-product-of-distinct-primitive-real-characters-is-nonprincipal]]).

[F16] The complex exponential is entire and has modulus $|\exp z|=\exp(\operatorname{Re}z)$; the real exponential is increasing ([[lem-complex-exponential-series-converges-everywhere]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]]).

[F17] The series $\sum_{n\ge1}n^{-\sigma}$ converges for real $\sigma>1$ ([[thm-p-series-real-exponents]]).

[F18] For $p>1$, the function $r\mapsto p^r$ is strictly increasing, so $p^{-\beta}<1$ when $\beta>0$ ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]]).

[F19] The integer $3$ is prime: its only positive divisors are $1$ and $3$ ([[def-prime]]).

## Proof

**Given:** The data and the supplier facts above.

1.1 Put $\eta=\min\{\varepsilon,1\}$ and $\delta=\eta/32$. By classical excluded middle [A1], either there is a primitive real nonprincipal character $\chi_1$ of conductor $q_1$ with a real zero $\beta\in[1-\delta,1)$, or there is no such character and zero. In the latter case define $\chi_1(n)=0$ when $3\mid n$, $1$ when $n\equiv1\pmod3$, and $-1$ when $n\equiv2\pmod3$, and set $q_1=3$, $\beta=1-\delta/2$. Multiplication modulo $3$ shows this is a real nonprincipal character; it is primitive by [F5], since [F19] says the only positive divisors of $3$ are $1,3$ and induction of the principal character modulo $1$ is principal. In either case $1-\delta\le\beta<1$ and $\beta\ge31/32$. [A1, F1, F5, F19, given, algebra]

1.2 Let $\rho$ be any nonprincipal character modulo $M$. Its sum over a complete residue period is zero: choose a unit $b$ with $\rho(b)\ne1$ and multiply the residue classes by $b$. Thus $A_\rho(x)=\sum_{n\le x}\rho(n)$ has $|A_\rho(x)|\le M$. By [F10], initially on $\operatorname{Re}z>1$, $$L(z,\rho)=z\int_1^\infty A_\rho(x)x^{-z-1}\,dx.$$ For integer $N$, the truncated integral is a finite sum of terms $A_\rho(k)(k^{-z}-(k+1)^{-z})$, which are holomorphic by [F6] and [F16]. On a compact subset with $\operatorname{Re}z\ge\eta>0$ and $|z|\le R$, the remaining tail has modulus at most $MRN^{-\eta}/\eta$; [F9] therefore gives a holomorphic continuation to $\operatorname{Re}z>0$. If $\rho$ is primitive, this equals the entire function in [F2] by the identity theorem. The integral also gives $|L(z,\rho)|\le M|z|/\operatorname{Re}z$. [F1, F2, F6, F9, F10, F16, given, algebra]

2.1 With $\chi_1,q_1,\beta$ selected in step 1.1, let $\chi_2$ be any primitive real nonprincipal character of conductor $q_2>q_1$. Put $m=q_1q_2$ and $\psi=\chi_1\chi_2$. By [F15], $\psi$ is a real nonprincipal character modulo $m$. [F15, step 1.1, given, algebra]

3.1 For $\operatorname{Re}s>1$ set $$F(s)=\zeta(s)L(s,\chi_1)L(s,\chi_2)L(s,\psi)=\sum_{n\ge1}a(n)n^{-s}.$$ The Euler factors from [F1] and [F14] have the following forms, with $x=p^{-s}$ and $u=\chi_1(p),v=\chi_2(p)$: if $u=v=1$ the factor is $(1-x)^{-4}$; if $u,v\ne0$ and at least one is $-1$, it is $(1-x^2)^{-2}$; if exactly one of $u,v$ is zero, it is either $(1-x)^{-2}$ or $(1-x^2)^{-1}$; and if both are zero it is $(1-x)^{-1}$. Each expansion has nonnegative coefficients and its coefficient of every even power $x^{2k}$ is at least one. The product converges absolutely for $\operatorname{Re}s>1$, since each character series is dominated absolutely by $\sum n^{-\sigma}$ and this converges for $\sigma>1$ by [F17]; [F11] then implies $a(n)\ge0$ for all $n$ and $a(r^2)\ge1$ for every positive integer $r$. [F1, F11, F14, F17, step 2.1, algebra]

3.2 For every real nonprincipal character $\rho$, [F5] gives a real nonprincipal primitive ancestor $\rho^*$. Its $L$-function is real on the real axis by conjugation symmetry and [F9], positive for real $s>1$ by [F14], and nonzero at $1$ by [F2]; continuity therefore gives $L(1,\rho^*)>0$. The finite factor identity [F3], initially valid for $\operatorname{Re}s>1$, extends to $\operatorname{Re}s>0$ by step 1.2 and [F9]. Each factor $1-\rho^*(p)p^{-s}$ is positive for real $s>0$ by [F1] and [F18]. Hence $L(1,\rho)>0$. In the no-zero case the same argument shows every primitive real nonprincipal $L(\beta,\rho)>0$: it is real, has no zero on $[\beta,1)$ by the case assumption, and is positive at $1$. The finite factors give positivity also for imprimitive characters. Formula [F4] gives $\zeta(\beta)<0$, since $\beta/(\beta-1)<0$ and the integral term is nonnegative before subtraction. Thus in the no-zero case $F(\beta)<0$ for every $\chi_2$ considered. In the zero case $L(\beta,\chi_1)=0$, so $F(\beta)=0$. In either branch, $F(\beta)\le0$. [F1, F2, F3, F4, F5, F9, F14, F18, step 1.1, step 2.1, step 1.2, algebra]

4.1 For $X\ge1$, define $S_\beta(X)=\sum_{n\ge1}a(n)n^{-\beta}e^{-n/X}$. Step 3.1 gives nonnegative summands and $a(1)=1$, so $S_\beta(X)\ge e^{-1}$ by monotonicity of the real exponential [F16]. The series for $F(\beta+s)$ converges absolutely on $\operatorname{Re}s=2$ by [F14] and [F17]. For finite partial sums, [F6] gives the Mellin formula termwise. On this line $|X^s|=X^2$ by [F16]; the tail integrals are bounded by $X^2(2\pi)^{-1}\int_{\mathbb R}|\Gamma(2+it)|dt$ times the tail of $\sum |a(n)|n^{-(\beta+2)}$, which tends to zero. Thus passing to the limit gives $$S_\beta(X)=\frac1{2\pi i}\int_{(2)}F(\beta+s)\Gamma(s)X^s\,ds.$$ [F6, F7, F14, F16, F17, step 3.1, given, algebra]

5.1 Shift the contour in step 4.1 to $\operatorname{Re}s=-\beta/2$, so $z=\beta+s$ has real part $\beta/2>0$ throughout. The three nonprincipal character factors are holomorphic there by step 1.2; [F4] gives the zeta factor's only pole at $s=1-\beta$, and [F7] gives the gamma poles at the nonpositive integers, of which only $s=0$ is crossed. On horizontal sides at height $T$, the zeta formula [F4] and the bound in step 1.2 bound the other factors by a fixed polynomial in $T$, while [F7] makes the gamma factor decay exponentially; the horizontal integrals tend to zero. By [F8] the residues give $$S_\beta(X)=\lambda\Gamma(1-\beta)X^{1-\beta}+F(\beta)+I_\beta(X),\qquad \lambda=L(1,\chi_1)L(1,\chi_2)L(1,\psi),$$ where $I_\beta(X)=(2\pi i)^{-1}\int_{(-\beta/2)}F(\beta+s)\Gamma(s)X^s ds$. [F4, F7, F8, step 1.2, step 4.1, algebra]

6.1 On the new vertical line, $z=\beta/2+it$. Formula [F4] gives $|\zeta(z)|\le C_\beta(1+|t|)$, since $|z-1|\ge1-\beta/2\ge1/2$. Step 1.2 gives bounds $q_1|z|/(\beta/2)$, $q_2|z|/(\beta/2)$, and $m|z|/(\beta/2)$ for the three character factors; here $m=q_1q_2$. Their product is at most $C_\beta(q_1q_2)^2(1+|t|)^3$. Stirling's estimate [F7] makes the remaining gamma-weighted integral finite, and $|X^s|=X^{-\beta/2}$ by [F16]. Therefore $$|I_\beta(X)|\le C_\beta(q_1q_2)^2X^{-\beta/2}.$$ [F4, F7, F16, step 1.2, step 5.1, algebra]

7.1 Choose $A_\beta\ge1$ so that $C_\beta A_\beta^{-\beta/2}\le(2e)^{-1}$, and set $X=A_\beta(q_1q_2)^8$. Since $q_1q_2\ge1$ and $\beta\ge31/32$, step 6.1 gives $|I_\beta(X)|\le(2e)^{-1}(q_1q_2)^{2-4\beta}\le(2e)^{-1}$. From steps 3.2, 4.1 and 5.1 and $S_\beta(X)\ge e^{-1}$ it follows that $\lambda\Gamma(1-\beta)X^{1-\beta}\ge(2e)^{-1}$. Since $\Gamma(1-\beta)>0$ by [F7], this yields $$\lambda\ge c_{\beta,q_1}(q_2)^{-8(1-\beta)}\ge c'_{\beta,q_1}q_2^{-\eta/4}$$ because $8(1-\beta)\le8\delta=\eta/4$. [F7, F13, step 3.2, step 4.1, step 5.1, step 6.1, algebra]

8.1 For any nonprincipal real character $\rho$ modulo $M$, its partial sums satisfy $|A_\rho(x)|\le M$ as in step 1.2, so [F10] at $z=1$ shows its series converges. The initial segment through $M$ has absolute value at most $1+\log M$. Abel summation and telescoping give $$\left|\sum_{n>M}\frac{\rho(n)}n\right|\le M\left(\frac1{M+1}+\sum_{n>M}\left(\frac1n-\frac1{n+1}\right)\right)\le2.$$ Thus $|L(1,\rho)|\le C\log(3M)$. Step 3.2 gives $L(1,\chi_1)>0$ and $L(1,\psi)>0$. Since $m=q_1q_2$, [F13] gives $\log(3m)\le C_{q_1}\log q_2$ when $q_2>q_1$. Hence $\lambda\le C_{\chi_1,q_1}L(1,\chi_2)\log q_2$. Combining with step 7.1 and using $\log q_2\le C_\eta q_2^{\eta/2}$ from [F13] gives $$L(1,\chi_2)\ge c_{\eta,\chi_1,\beta}q_2^{-3\eta/4}\ge c_{\eta,\chi_1,\beta}q_2^{-\eta}.$$ [F10, F13, step 1.2, step 3.2, step 7.1, given, algebra]

9.1 There are only finitely many primitive real nonprincipal characters with conductor $q\le q_1$, since by [F1] its values on the $q$ residue classes lie in $\{-1,0,1\}$, leaving at most $3^q$ functions for each modulus. Their values $L(1,\chi)$ are positive by the argument in step 8.1; the minimum of the finitely many positive numbers $L(1,\chi)q^\eta$ is positive (and if the set is empty, no extra minimum is needed). Taking the smaller of this bound and the constant from step 8.1 supplies a positive constant for all conductors. In the zero case the selected $\chi_1,\beta$ are existential and not effectively located, so the resulting constant is ineffective. [F1, step 1.1, step 8.1, algebra]

10.1 Since $0<\eta\le\varepsilon$ and $q\ge3$, the monotonicity in [F18] gives $q^{-\eta}\ge q^{-\varepsilon}$. Thus the constant obtained for $\eta$ in step 9.1 proves the statement for the original $\varepsilon>0$. [F18, step 9.1, algebra] ∎


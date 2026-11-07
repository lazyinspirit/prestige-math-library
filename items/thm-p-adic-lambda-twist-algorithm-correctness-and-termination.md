---
id: thm-p-adic-lambda-twist-algorithm-correctness-and-termination
kind: theorem
title: 'Correctness and termination of the p-power-twist $\lambda$-algorithm'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - alg-exact-prime-valuation-in-number-field-by-ideal-membership
  - def-generalized-bernoulli-number
  - def-teichmuller-character-on-zp-units
  - lem-principal-unit-generators-of-p-adic-units
  - lem-primitive-gauss-sum-twist
  - thm-primitive-gauss-sum-norm
  - thm-mahler-transform-for-p-adic-measures
  - alg-iwasawa-lambda-from-p-power-character-twists
  - def-iwasawa-mu-lambda-invariants-of-power-series
  - def-iwasawa-power-series-attached-to-dirichlet-character
  - lem-p-adic-power-series-cyclotomic-twist-valuation
  - thm-dirichlet-l-special-values-via-generalized-bernoulli-numbers
  - thm-exact-prime-valuation-algorithm-correct-and-terminates
  - thm-kubota-leopoldt-dirichlet-character-interpolation
  - thm-kubota-leopoldt-p-adic-zeta-interpolation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. Knospe, Special Values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters"
      url: "https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf"
      locator: "Theorem 5.2(i), printed pp. 10–11"
    - title: "H. Knospe, Special values of p-adic L-functions and Iwasawa lambda-invariants of Dirichlet characters, arXiv:2401.06100v3"
      url: "https://arxiv.org/pdf/2401.06100"
      locator: "Theorem 5.2(i), arXiv v3, printed pp. 11–12"
verification: {}
---

## Statement

Let $p$ be an odd prime and let $\chi=\theta\omega^i$ be a nontrivial even primitive Dirichlet character with $p$ not dividing the conductor of $\theta$, where $\omega$ is the Teichmüller character and $0\le i\le p-2$. Fix a $p$-adic embedding of the character values and compatible primitive roots $\zeta_{p^n}$. Let $F_\chi(T)\in\mathcal O_\chi\llbracket T\rrbracket$ be the associated Iwasawa series, and supply an exact coefficient of $F_\chi$ that is a unit, certifying $\mu(F_\chi)=0$. Put $e_\chi=v_\pi(p)$ for a uniformizer $\pi$ of $\mathcal O_\chi$, choose $k=i$ for $1\le i\le p-2$ and $k=p-1$ for $i=0$, and for each $n\ge1$ let $\psi_n$ be the order-$p^n$ character of $1+p\mathbb Z_p$ with $\psi_n(1+p)=\zeta_{p^n}^{-1}$. For the prime $P_n$ above $p$ selected by the embedding, normalize $v_p(b)=v_{P_n}((b))/e(P_n/p)$ on nonzero algebraic numbers $b$. At each index, compute the generalized Bernoulli number $B_{k,\theta\psi_n}$ and its normalized valuation exactly; if the Bernoulli number is zero, advance to $n+1$, and otherwise test whether $v_p(B_{k,\theta\psi_n})<1/e_\chi$. The procedure terminates at the first passing index and returns $(p-1)p^{n-1}v_p(B_{k,\theta\psi_n})$. This equals the Iwasawa $\lambda$-invariant of $F_\chi$, defined as the degree of the distinguished polynomial in its Weierstrass factorization.

## Statement references

[H. Knospe, *Special Values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters*, Theorem 5.2(i), printed pp. 10–11](https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf)

[H. Knospe, *Special values of p-adic L-functions and Iwasawa $\lambda$-invariants of Dirichlet characters*, Theorem 5.2(i), arXiv v3, printed pp. 11–12](https://arxiv.org/pdf/2401.06100)

## Facts & Assumptions

**Given:** An odd prime $p$, $\chi=\theta\omega^i$, the p-adic L-series $F_\chi$, and the supplied $\mu=0$ coefficient certificate.

[F1] For $\chi=\theta\omega^i$ and $i\equiv k\pmod{p-1}$, the first-kind interpolation formula is
$$L_p(1-k,\chi\psi_n)=\bigl(1-(\theta\psi_n)(p)p^{k-1}\bigr)L(1-k,\theta\psi_n).$$
[[thm-kubota-leopoldt-dirichlet-character-interpolation]]

[F2] For any Dirichlet character $\vartheta$, $L(1-k,\vartheta)=-B_{k,\vartheta}/k$. [[thm-dirichlet-l-special-values-via-generalized-bernoulli-numbers]]

[F3] The twist valuation obeys the strict threshold and exact-value formula in [F4] of the algorithm carrier. [[lem-p-adic-power-series-cyclotomic-twist-valuation]]

[F4] The series coordinate satisfies $F_\chi(\psi_n(1+p)^{-1}(1+p)^s-1)=L_p(s,\chi\psi_n)$. [[def-iwasawa-power-series-attached-to-dirichlet-character]]

[F5] Scalar bounded measures on the additive group $\mathbb Z_p$ are identified with integral power series by their Mahler transforms. [[thm-mahler-transform-for-p-adic-measures]]

[F6] The finite primitive Gauss-sum Fourier identity holds, and its Gauss sum is nonzero. [[lem-primitive-gauss-sum-twist]], [[thm-primitive-gauss-sum-norm]]

[F7] The generalized Bernoulli numbers are defined by the finite Bernoulli-polynomial sum, equivalently
$$\frac{t\sum_{c=1}^q\psi(c)e^{ct}}{e^{qt}-1}=\sum_{k\ge0}B_{k,\psi}\frac{t^k}{k!}$$
for a nontrivial character $\psi$ modulo $q$; the zero constant term is $B_{0,\psi}=0$. [[def-generalized-bernoulli-number]]

[F8] The Teichmüller decomposition is $x=\omega(x)\langle x\rangle$, and $\gamma=1+p$ gives a continuous isomorphism $\mathbb Z_p\to1+p\mathbb Z_p$, $z\mapsto\gamma^z$. [[def-teichmuller-character-on-zp-units]], [[lem-principal-unit-generators-of-p-adic-units]]

## Proof

**Given:** Exactly the algorithm input and its supplied unit coefficient certificate. The following first two steps supply the previously missing trivial-tame finite-character interpolation by finite algebra; no rational-zeta special-value theorem or choice hypothesis is used there.

1.1 Suppose $\theta=1$. Since $\chi=\omega^i$ is nontrivial and even, $i$ is a nonzero even residue modulo $p-1$, and the algorithm chooses $k=i\ge2$. Choose a positive integer $a$ prime to $p$ with $\omega(a)^i\ne1$; one exists because otherwise the degree-$i$ polynomial $X^i-1$ would have all $p-1>i$ nonzero residue classes as roots. Put $X=1+T$ and
$$A_a(T)=\frac1T-\frac a{X^a-1}.$$
This is an integral power series: $(X^a-1)/(aT)$ is an integral unit series with constant coefficient $1$, and $A_a$ is $T^{-1}$ times $1$ minus its inverse. By [F5] it is the transform of a bounded measure $\mu_a$ on $\mathbb Z_p$. Set $\nu_a=x^{-1}\operatorname{Res}_{\mathbb Z_p^\times}\mu_a$. Restriction and multiplication by the unit-valued continuous function $x^{-1}$ preserve boundedness. For $z(x)\in\mathbb Z_p$ defined by $\langle x\rangle=\gamma^{z(x)}$, define
$$F_i(T)=\frac{\displaystyle\int_{\mathbb Z_p^\times}\omega(x)^i\langle x\rangle(1+T)^{-z(x)}\,d\nu_a(x)}{\omega(a)^i\langle a\rangle(1+T)^{-z(a)}-1}.$$
The numerator is integral coefficientwise by boundedness and the integral binomial series; the denominator has unit constant coefficient because modulo $p$ it is $\omega(a)^i-1\ne0$. Thus $F_i\in\mathbb Z_p[[T]]$. Substitution $1+T=\psi(\gamma)^{-1}\gamma^s$ gives precisely the Mellin character $\psi(x)\omega(x)^i\langle x\rangle^{1-s}$ in numerator and denominator. Equivalently, with $d\nu_a=x^{-1}d\mu_a$, the numerator is the usual $\psi\omega^{i-1}\langle x\rangle^{-s}$ Mellin integral against $\mu_a$. This supplies the same Mellin normalization as the character-interpolation construction and [F4] for the trivial tame branch. Independence from an allowed regularizer follows directly: if $P_b$ is pushforward under $x\mapsto bx$, the substitutions on $1/T$ give $(1-bP_b)A_a=(1-aP_a)A_b$; Mahler injectivity and unit restriction give $(1-[b])\nu_a=(1-[a])\nu_b$, so the displayed quotients agree in the fraction field whenever their denominators are nonzero. Taking $b=1+p$ identifies this with the zeta pseudomeasure regularizer $\nu_b/([b]-[1])$; this is the explicit measure construction before its rational-special-value step, not an invocation of its Countable Choice hypothesis. The chosen $a$ makes the present nontrivial tame component integral. [F4, F5, F8, given, construct, algebra]

1.2 Fix the nontrivial $\psi=\psi_n$, of conductor $q$, extended by zero off the units. Let $\xi$ be a primitive $q$th root in a finite extension containing its values. The finite Gauss identity [F6] shows that multiplying a bounded additive measure by $\psi$ sends its transform $A(T)$ to
$$\frac1{\tau(\psi^{-1})}\sum_{c\bmod q}\psi^{-1}(c)A(\xi^c(1+T)-1).$$
This identity first holds on integer exponents and then on $\mathbb Z_p$ by continuity. All substitutions converge, since $\xi^c-1$ is topologically nilpotent; finite scalar extension and a finite sum suffice. Apply it to $A_a$. Write
$$K_\psi(t)=\frac1{\tau(\psi^{-1})}\sum_{c\bmod q}\frac{\psi^{-1}(c)}{\xi^ce^t-1}.$$
The finite Gauss identity and geometric expansion in $e^{-t}$ give the rational identity
$$K_\psi(t)=\frac{\sum_{c=1}^q\psi(c)e^{ct}}{e^{qt}-1},$$
where $\psi(-1)=1$ because $\psi$ is trivial on the Teichmüller factor. The right side is regular at $t=0$ since $\sum_c\psi(c)=0$. Reindexing $c\mapsto ac$ in the second part of $A_a$ shows that its twisted exponential transform is $K_\psi(t)-a\psi(a)K_\psi(at)$. By [F7] its $(k-1)$st derivative at zero is
$$(1-a^k\psi(a))\frac{B_{k,\psi}}k.$$
The operator $(1+T)d/dT$ on a Mahler transform computes additive moments, so this derivative is $\int\psi(x)x^{k-1}\,d\mu_a$. The twist is supported on units; consequently it is also $\int\psi(x)x^k\,d\nu_a$. At $s=1-k$, $\omega(x)^i\langle x\rangle^k=x^k$ because $k\equiv i\pmod{p-1}$. Dividing by the nonzero denominator $\psi(a)a^k-1$ in step 1.1 gives
$$F_i\bigl(\psi(\gamma)^{-1}\gamma^{1-k}-1\bigr)=-\frac{B_{k,\psi}}k.$$
The denominator is a unit since its residue is $\omega(a)^i-1$. The supplied branch series $F_\chi$ satisfies the same Mellin normalization [F4], hence these are its values. This proves exactly the missing finite-twist identity at the required trivial-tame interpolation points, without deriving it from untwisted zeta moments. [F4, F5, F6, F7, F8, step 1.1, algebra]

2.1 If $\theta\ne1$, the completed local character-interpolation theorem [F1] applies. The chosen $k$ satisfies $k\equiv i\pmod{p-1}$. Since $\psi_n$ has conductor divisible by $p$, $(\theta\psi_n)(p)=0$. Thus [F1] and [F2] give
$$L_p(1-k,\chi\psi_n)=-B_{k,\theta\psi_n}/k.$$
For $\theta=1$, step 1.2 gives exactly the same value in the series coordinate [F4]. In either case $1\le k\le p-1$, so $k$ is a $p$-adic unit. Therefore
$$v_p(B_{k,\theta\psi_n})=v_p(F_\chi(\alpha_{n,k})),$$
including the convention that both sides are infinite when their arguments vanish. [F1, F2, F4, step 1.2, given, algebra]

2.2 The supplied unit coefficient certifies $\mu(F_\chi)=0$, so $\lambda(F_\chi)$ is a finite nonnegative integer. By [F3] and step 2.1, the strict Bernoulli valuation test passes exactly when $\lambda(F_\chi)/e_n<1/e_\chi$. Whenever it passes the value is finite and its returned output is $e_n v_p(B_{k,\theta\psi_n})=\lambda(F_\chi)$. If a Bernoulli number is zero its infinite valuation cannot pass, exactly as specified by the algorithm. [F3, F4, step 2.1, given, algebra]

3.1 As $n\to\infty$, $e_n=(p-1)p^{n-1}\to\infty$, whereas $\lambda(F_\chi)$ is fixed. Thus some index satisfies $\lambda(F_\chi)/e_n<1/e_\chi$. The corresponding value is nonzero and the strict test passes by step 2.2, so the algorithm terminates and returns the correct invariant. The first passing index is sufficient; no monotonicity assertion for the actual Bernoulli valuations is needed. The case $\lambda=0$ passes already at the first index by [F3]. [F3, step 2.2, algebra] ∎

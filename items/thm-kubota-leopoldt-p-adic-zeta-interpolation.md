---
id: thm-kubota-leopoldt-p-adic-zeta-interpolation
kind: theorem
title: Kubota–Leopoldt p-adic zeta pseudomeasure interpolation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- def-bernoulli-numbers-by-their-generating-function
- def-countable-choice
- def-iwasawa-algebra-of-profinite-abelian-group
- def-p-adic-pseudomeasure-on-profinite-abelian-group
- def-teichmuller-character-on-zp-units
- lem-principal-unit-generators-of-p-adic-units
- thm-mahler-expansion-for-continuous-p-adic-functions
- thm-mahler-transform-for-p-adic-measures
- thm-special-values-of-riemann-zeta-at-integers
- thm-monic-polynomial-division
axiom_use: Countable Choice is used only through the complete rational special-value
  theorem F4. All group, measure, finite-free coefficient, unit restriction and all-unit
  augmentation constructions below are explicit; arbitrary-profinite compactness is
  not invoked.
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: Theorem 2.13, Theorem 4.1, §§3–4, printed pp. 110–139
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Contextual Iwasawa theory reference only; no zeta-construction theorem
      locator independently verified here
verification: {}
---

## Statement

Assume Countable Choice for the rational special-value theorem. For every prime $p$ there is a p-adic pseudomeasure $\zeta_p$ on the multiplicative group $\mathbb Z_p^\times$ such that for every integer $k\ge1$,
$$\int_{\mathbb Z_p^\times}x^k\,d\zeta_p(x)=(1-p^{k-1})\zeta(1-k).$$
Here the integral of a pseudomeasure against a character is its evaluation in the total quotient algebra; at $k=1$ the right side is $0$.

## Statement references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, Theorem 2.13 and Theorem 4.1, §§3–4, pp. 110–139](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[J. Sharifi, *Iwasawa Theory* (contextual reference; zeta-construction locator unverified)](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A prime $p$ and Countable Choice for the rational zeta special-value supplier.

[F1] The complete scalar Mahler proof gives canonical digit-tree compactness of $\mathbb Z_p$, uniform finite-residue approximation and the integral binomial polynomials. Its transform identifies bounded scalar measures with $\mathbb Z_p\llbracket T\rrbracket$, with coefficient $n$ the integral of $\binom{x}{n}$. [[thm-mahler-expansion-for-continuous-p-adic-functions]], [[thm-mahler-transform-for-p-adic-measures]]

[F2] The completed group algebra is the inverse limit of finite group rings. Its procyclic coordinate proof compares both coefficient $p^m$ and cyclic $p^n$ quotients with powers of $(p,T)$. [[def-iwasawa-algebra-of-profinite-abelian-group]]

[F3] A pseudomeasure is a total-quotient fraction whose product with $[b]-[1]$ is integral for every group element $b$; an arbitrary fraction need not satisfy this. [[def-p-adic-pseudomeasure-on-profinite-abelian-group]]

[F4] Under Countable Choice, the rational special values are $\zeta(0)=-1/2$, $\zeta(1-2r)=-B_{2r}/(2r)$ for $r\ge1$, and $\zeta(-2r)=0$ for $r\ge1$. [[thm-special-values-of-riemann-zeta-at-integers]], [[def-countable-choice]]

[F5] The Bernoulli generating function is $t/(e^t-1)=\sum_{n\ge0}B_nt^n/n!$, with $B_1=-1/2$. [[def-bernoulli-numbers-by-their-generating-function]]

[F6] For odd $p$, Teichmuller lifting gives $\mathbb Z_p^\times=\mu_{p-1}\times(1+p\mathbb Z_p)$ and $1+p$ generates the principal factor topologically; for $p=2$, $5$ generates $1+4\mathbb Z_2$. [[def-teichmuller-character-on-zp-units]], [[lem-principal-unit-generators-of-p-adic-units]]

[F7] Division by a monic polynomial over a commutative ring gives a unique remainder of smaller degree. [[thm-monic-polynomial-division]]

## Proof

1.1 Put $H=\mathbb Z_p^\times$. It is clopen in $\mathbb Z_p$ and compact by [F1]: adjoin its complement to any open cover. A continuous function on $H$ modulo $p^m$ factors through the units modulo $p^n$ for some $n$, since finite cylinder refinement gives a common residue level. Given compatible integral distributions on these finite quotients, define their functional on a function factoring through one level by its finite sum; compatibility makes it independent of refinement and its norm is at most the supremum norm. For an arbitrary continuous function, its canonical value truncations modulo $p^m$ are locally constant and converge uniformly. The finite sums are Cauchy and independent of the approximation, giving a bounded functional. Conversely, indicator integrals give compatible distributions; density shows that the constructions are inverse. Products of distributions define convolution, and translating by $b\in H$ acts as $[b]$. This constructs the needed bounded-measure/group-algebra correspondence on this particular $H$ without assuming compactness of arbitrary profinite inverse limits. [F1, F2, given, construct, algebra]

1.2 For every $b\in H$, put $X=1+T$ and $h_b(T)=(X^b-1)/(bT)=1+\sum_{j\ge1}b^{-1}\binom{b}{j+1}T^j$. The binomial coefficients are integral by [F1], and $b$ is a unit, so $h_b$ is an integral unit series. Define $F_b(T)=(1-h_b(T)^{-1})/T\in\mathbb Z_p\llbracket T\rrbracket$. Its numerator has zero constant coefficient; it is the integral series represented by the Laurent identity $F_b=1/T-b/(X^b-1)$. By [F1] there is an actual bounded additive measure $\mu_b$ with this transform, for every $p$-adic unit $b$, including $b=1$ when $\mu_1=0$. This is a direct construction for all units, not a limiting assertion about integer regularizers. [F1, given, construct, algebra]

1.3 We prove the unit-restriction identity, including $p=2$, without an algebraic-closure or valued-field extension choice. Put $R=\mathbb Z_p[Y]/(1+Y+\cdots+Y^{p-1})$, finite free with its canonical monic-polynomial basis by [F7]. It is complete and separated coefficientwise; scalar bounded measures extend to $R$-valued functions by applying the scalar functional to each of these finitely many coordinates. In $R$, $Y^p=1$, and $\sum_{j=0}^{p-1}Y^{jr}$ is $p$ if $p\mid r$ and zero otherwise, since multiplication by $r\not\equiv0\pmod p$ permutes the residues. Thus $p^{-1}\sum_jY^{jx}$ is the indicator of $p\mathbb Z_p$ for integer $x$, and also for $x\in\mathbb Z_p$ when $Y^{jx}$ means $Y^{j(x\bmod p)}$. Division by $p$ here is only an identity in $R[1/p]$; the resulting indicator is integral. Modulo $p$ the defining polynomial is $(Y-1)^{p-1}$, so each $c_j=Y^j-1$ is topologically nilpotent. For $p=2$, this is simply $R=\mathbb Z_2$, $Y=-1$ and $c_1=-2$. [F1, F7, given, construct, algebra]

2.1 Set $a=1+p$ for odd $p$, and $a=5$ for $p=2$. Write $D=\mu_{p-1}$ in the first case and $D=\{1,-1\}$ in the second. In the latter case every odd unit has a unique sign making its residue modulo $4$ equal to $1$, so [F6] gives $H=D\times\langle a\rangle$ in both cases. The exact orders in the finite principal-unit quotients in [F6] identify compatible exponent residues with $\mathbb Z_p$. The cofinal subgroups $\{1\}\times a^{p^n\mathbb Z_p}$ and the proof of [F2], applied coefficientwise to the finite free algebra $B=\mathbb Z_p[D]$, give $\Lambda(H)=B\llbracket S\rrbracket$, with $S=[a]-[1]$. The two ideal containments in that proof remain valid over $B$: binomial divisibility gives $(p^m,(1+S)^{p^n}-1)\subseteq(p,S)^k$ for large $m,n$, and the cyclic relation gives $(p,S)^{mp^n}\subseteq(p^m,(1+S)^{p^n}-1)$. No reducedness or semisimplicity of $B$ is required; in particular $B=\mathbb Z_2[C_2]$ is allowed. Multiplication by $S$ shifts coefficients and is injective, so $[a]-[1]$ is regular. The valuation induction of [F6] also shows $a^k\ne1$ for every integer $k\ge1$. [F2, F6, step 1.1, algebra]

2.2 Let $P_b$ be pushforward on additive measures under $x\mapsto bx$. On transforms it is substitution $T\mapsto X^b-1$: the binomial identity $X^{bx}=(X^b)^x$ holds first for nonnegative integers and then coefficientwise for all $b,x\in\mathbb Z_p$ by continuity and density. The substitution has zero constant term, and for a unit $b$ its linear term is a unit, so it also acts on $\mathbb Q_p((T))$. These substitutions commute. If $h=1/T$, then $F_b=(1-bP_b)h$ and therefore $(1-bP_b)F_a=(1-aP_a)F_b$. Mahler injectivity yields $(1-bP_b)\mu_a=(1-aP_a)\mu_b$. The operators here are $1-bP_b$, not $P_b-b$. [F1, step 1.2, algebra]

2.3 It remains to compute every positive moment. Coefficient comparison in [F5] gives $B_n\in\mathbb Q$ recursively, so the same identities hold in $\mathbb Q_p\llbracket t\rrbracket$. Also $t/(e^t-1)+t/2$ is even: replacing $t$ by $-t$ and using $e^{-t}=1/e^t$ gives the same series. Hence $B_{2r+1}=0$ for $r\ge1$. For the chosen integer $a$, substitution $1+T=e^t$ in step 1.2 and [F5] show that the $m$th derivative at $0$ is $(1-a^{m+1})B_{m+1}/(m+1)$. This equals $(-1)^m(1-a^{m+1})\zeta(-m)$ by [F4], separately for $m=0$, odd $m$, and positive even $m$. The differential operator $\partial=(1+T)d/dT$ satisfies $\partial^m(1+T)^x|_{T=0}=x^m$; applying it coefficientwise to the transform is a finite linear combination of basis integrals. Therefore $\int_{\mathbb Z_p}x^m\,d\mu_a=(-1)^m(1-a^{m+1})\zeta(-m)$ for every integer $m\ge0$. This is the sole use of the Countable Choice hypothesis. [F1, F4, F5, step 1.2, algebra]

2.4 Put $z_j=(1+T)Y^j-1$. Its powers tend to zero in the $(p,T)$-adic topology: modulo each $p^r$ the constant term is nilpotent, and then sufficiently high powers are divisible by any prescribed power of $T$. Thus $F_a(z_j)$ and the binomial series $(1+z_j)^x$ converge coefficientwise, uniformly for $x\in\mathbb Z_p$. For nonnegative integer $x$, $(1+z_j)^x=Y^{jx}(1+T)^x$; continuity and density extend this to all $x$. Boundedness permits coefficientwise integration of these uniformly convergent series, giving $F_a(z_j)=\int Y^{jx}(1+T)^x\,d\mu_a(x)$. Consequently the Mahler transform of $\operatorname{Res}_{p\mathbb Z_p}\mu_a$ is $p^{-1}\sum_jF_a(z_j)$. [F1, step 1.2, step 1.3, algebra]

3.1 A unit $b$ preserves $H$ and its complement. Restriction to $H$ is defined by extending a continuous function by zero to $\mathbb Z_p$; multiplication by $x^{-1}$ on $H$ is bounded. Put $\nu_b=x^{-1}\operatorname{Res}_H\mu_b$. A change of variables in the defining functional gives $x^{-1}\operatorname{Res}_H(bP_b\mu)=[b](x^{-1}\operatorname{Res}_H\mu)$. Thus step 2.2 becomes $(1-[b])\nu_a=(1-[a])\nu_b$ in the actual bounded-measure algebra of step 1.1 for EVERY $b\in H$, including $1,-1$ and all $2$-adic units when $p=2$. No division by $|D|$ occurs. [step 1.1, step 2.2, construct, algebra]

3.2 In $R\llbracket X\rrbracket$, geometric expansion at $X=0$ and the finite sums of step 1.3 give $\sum_j(XY^j-1)^{-1}=p/(X^p-1)$. This is a rational identity after multiplication by its finitely many polynomial denominators. Since the integer $a$ is prime to $p$, $j\mapsto aj$ permutes the residues modulo $p$; applying the same identity to $X^a$ yields $p^{-1}\sum_jF_a(XY^j-1)=F_a(X^p-1)$. It remains valid upon writing $X=1+T$: each denominator is regular in $R\llbracket T\rrbracket$. Indeed $XY^j-1=Y^j(T+1-Y^{-j})$ is regular: its parenthesized constant term $c=1-Y^{-j}$ is topologically nilpotent, and $(T+c)\sum u_nT^n=0$ forces $u_n=(-c)^Nu_{n+N}\to0$ for every $n$. Since $a$ is a positive integer, $(XY^j)^a-1$ is this regular element times $\sum_{r=0}^{a-1}(XY^j)^r$; the latter has unit constant coefficient, because modulo $p$ it is $a$ plus an element of the nilpotent ideal $(Y-1)$ and $p\nmid a$. Such a constant is a unit in the complete finite free ring $R$, by lifting its inverse modulo $p$ with a geometric series. Finally $X^p-1$ and $X^{ap}-1$ have lowest nonzero $T$-coefficients $p$ and $ap$, both non-zero-divisors on the torsion-free $R$, so they too are regular by the lowest-coefficient argument. Cross-multiplication before substitution and regularity therefore justify cancellation of the denominator product. Both sides represented by the pole-cancelled $F_a$ series converge as in step 2.4. Hence $\operatorname{Res}_{p\mathbb Z_p}\mu_a=P_p\mu_a$ by scalar Mahler injectivity, since pushforward by $x\mapsto px$ has transform $F_a((1+T)^p-1)$. [F1, step 1.3, step 2.4, algebra]

4.1 Define $\zeta_p=\nu_a/([a]-[1])$ in the ambient total quotient ring, using regularity from step 2.1. Step 3.1 gives $([b]-[1])\zeta_p=\nu_b\in\Lambda(H)$ for every $b\in H$. This is exactly the full condition in [F3], so $\zeta_p$ is a source-defined pseudomeasure, including at $p=2$, rather than just an ambient fraction. [F3, step 2.1, step 3.1, construct, algebra]

4.2 The $m$th moment of $P_p\mu_a$ is $p^m$ times the full $m$th moment. Subtracting the restriction identity in step 3.2 from the full moment in step 2.3 gives $\int_Hx^m\,d\mu_a=(1-p^m)(-1)^m(1-a^{m+1})\zeta(-m)$ for every $m\ge0$. In particular the $m=0$ unit mass is zero. Multiplication by $x^{-1}$ now gives, for every $k\ge1$, $\int_Hx^k\,d\nu_a=(-1)^k(a^k-1)(1-p^{k-1})\zeta(1-k)$. [step 3.1, step 2.3, step 3.2, algebra]

5.1 For $k\ge1$, character evaluation $\rho_k(x)=x^k$ on the integral algebra is a ring homomorphism. To check multiplication explicitly, modulo $p^m$ it factors through the finite unit residues and is the finite sum sending $[x]$ to $x^k$; finite sums and $\rho_k(xy)=\rho_k(x)\rho_k(y)$ prove multiplicativity, and compatible residues give the scalar evaluation. It agrees with the bounded-functional integral by the approximations in step 1.1. Since $\rho_k(a)-1=a^k-1\ne0$ by step 2.1, evaluation of the displayed fraction $\nu_a/([a]-[1])$ is well defined in $\mathbb Q_p$. This is evaluation at its allowed regularizer, not an assertion that every ambient denominator is nonzero at the character. Step 4.2 gives $\int_Hx^k\,d\zeta_p=(-1)^k(1-p^{k-1})\zeta(1-k)$. For even $k$ the sign is $1$; for odd $k\ge3$, [F4] makes the zeta value zero; for $k=1$ the Euler factor is zero. Thus the original displayed identity holds for every $k\ge1$ and every prime, with exactly the stated Countable Choice assumption. No value at the trivial character $k=0$ is assigned. [F4, step 1.1, step 2.1, step 4.1, step 4.2, algebra] ∎

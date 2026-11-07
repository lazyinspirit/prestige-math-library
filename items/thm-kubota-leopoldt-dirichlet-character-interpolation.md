---
id: thm-kubota-leopoldt-dirichlet-character-interpolation
kind: theorem
title: "Kubota–Leopoldt interpolation for Dirichlet characters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-bounded-measure-over-finite-free-zp-algebra
  - def-dirichlet-character-modulo-q
  - def-field-norm-and-trace
  - def-generalized-bernoulli-number
  - def-gauss-sum-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - def-teichmuller-character-on-zp-units
  - lem-exponential-mellin-special-values-for-dirichlet-characters
  - lem-mahler-transform-over-finite-free-zp-algebra
  - lem-primitive-gauss-sum-twist
  - thm-adjugate-identity-over-a-commutative-ring
  - thm-chinese-remainder-theorem
  - thm-dirichlet-l-special-values-via-generalized-bernoulli-numbers
  - thm-mahler-expansion-for-continuous-p-adic-functions
  - thm-primitive-gauss-sum-norm
  - thm-ring-of-integers-free-of-rank-degree
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions"
      url: "https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf"
      locator: "Theorem 5.7, Lemmas 5.9–5.12, and Theorem 5.20, printed pp. 144–148"
    - title: "J. Sharifi, Iwasawa Theory lecture notes"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "§§2.3–2.4, printed pp. 47–56"
    - title: "H. Knospe, Special values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters"
      url: "https://arxiv.org/pdf/2401.06100"
      locator: "Theorem 5.2(i), arXiv v3, printed pp. 11–12"
verification: {}
---

## Statement

Let $p$ be an odd prime, let $\eta$ be a nontrivial primitive Dirichlet character of conductor $D>1$ with $p\nmid D$, and fix a number field $E$ containing its values and a primitive $D$th root $\epsilon_D$. Put $\mathcal O=\mathcal O_E\otimes_{\mathbb Z}\mathbb Z_p$ and fix a p-adic embedding of $E$. For $a\in(\mathbb Z/D\mathbb Z)^\times$, define
$$G(\eta^{-1})=\sum_{a\bmod D}\eta^{-1}(a)\epsilon_D^a,\qquad
F_\eta(T)=-\frac{1}{G(\eta^{-1})}\sum_{a\in(\mathbb Z/D\mathbb Z)^\times}
\frac{\eta^{-1}(a)}{(1+T)\epsilon_D^a-1}.$$
The denominators and Gauss sum are units in $\mathcal O$, so $F_\eta(T)\in\mathcal O\llbracket T\rrbracket$. Let $\mu_\eta$ be the unique bounded $\mathcal O$-valued measure on the additive group $\mathbb Z_p$ whose Mahler transform is $F_\eta$, and put
$$\zeta_\eta=x^{-1}\operatorname{Res}_{\mathbb Z_p^\times}(\mu_\eta),$$
where restriction means integration only over $\mathbb Z_p^\times$ and multiplication by $x^{-1}$ means $\int f\,d(x^{-1}\mu)=\int_{\mathbb Z_p^\times}x^{-1}f(x)\,d\mu(x)$.
Let $\psi$ be either the trivial character of conductor $1$, extended as $1$ to all integers, or a nontrivial finite-order character of $\Gamma=1+p\mathbb Z_p$ of exact conductor $q=p^n$, extended trivially over the Teichmüller roots of unity and by zero to integers divisible by $p$. Integrals with $\psi$ are interpreted after extending coefficients to a finite free coefficient algebra containing its values. Then for every integer $k\ge1$,
$$\int_{\mathbb Z_p^\times}\psi(x)x^k\,d\zeta_\eta(x)
=\bigl(1-(\eta\psi)(p)p^{k-1}\bigr)L(1-k,\eta\psi).$$
For $0\le i\le p-2$, put $\chi=\eta\omega^i$. For $s\in\mathbb C_p$ with $|s|_p<p^{(p-2)/(p-1)}$, define the p-adic Mellin value
$$L_p(s,\chi\psi)=\int_{\mathbb Z_p^\times}
\psi(x)\omega(x)^{i-1}\exp\!\bigl(-s\log\langle x\rangle\bigr)\,d\mu_\eta(x),\qquad
\langle x\rangle=x\omega(x)^{-1}.$$
Here $\log$ and $\exp$ are their convergent p-adic power series on $1+p\mathbb Z_p$ and $p\mathbb Z_p$, respectively. If $k\ge1$ and $i\equiv k\pmod{p-1}$, then
$$L_p(1-k,\chi\psi)
=\bigl(1-(\eta\psi)(p)p^{k-1}\bigr)L(1-k,\eta\psi).$$

## Statement references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, Theorem 5.7, Lemmas 5.9–5.12 and Theorem 5.20, pp. 144–148](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[J. Sharifi, *Iwasawa Theory*, §§2.3–2.4, pp. 47–56](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

[H. Knospe, *Special Values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet Characters*, Theorem 5.2(i), arXiv v3, pp. 11–12](https://arxiv.org/pdf/2401.06100)

## Facts & Assumptions

**Given:** $p,\eta,E,\epsilon_D,\psi,k$ and the finite character data in the Statement.

[F1] Mahler expansion over a finite free coefficient algebra identifies bounded $\mathcal O$-valued measures on $\mathbb Z_p$ with $\mathcal O\llbracket T\rrbracket$ by $\mu\mapsto\int(1+T)^x\,d\mu(x)$. [[lem-mahler-transform-over-finite-free-zp-algebra]]

[F2] For a primitive Dirichlet character $\alpha$, the exponential Gauss-sum Mellin kernel has $m$th derivative at zero equal to $L(-m,\alpha)$. [[lem-exponential-mellin-special-values-for-dirichlet-characters]]

[F3] The Chinese remainder theorem identifies $(\mathbb Z/Dq\mathbb Z)^\times$ with $(\mathbb Z/D\mathbb Z)^\times\times(\mathbb Z/q\mathbb Z)^\times$ when $(D,q)=1$. [[thm-chinese-remainder-theorem]]

[F4] A nontrivial finite-order character of $\Gamma$ of exact conductor $q=p^n$ induces a primitive Dirichlet character modulo $q$. [[def-primitive-dirichlet-character-and-conductor]]

[F5] Every $x\in\mathbb Z_p^\times$ has the Teichmüller decomposition $x=\omega(x)\langle x\rangle$ with $\langle x\rangle\in1+p\mathbb Z_p$. [[def-teichmuller-character-on-zp-units]]

[F6] For a primitive character $\alpha$ modulo $q$, $\sum_{a\bmod q}\alpha(a)e(am/q)=\overline{\alpha(m)}\tau(\alpha)$ for every integer $m$. [[lem-primitive-gauss-sum-twist]]

[F7] For a primitive character $\alpha$ modulo $q$, $|\tau(\alpha)|^2=q$. [[thm-primitive-gauss-sum-norm]]

[F8] The ring of integers of a number field $E$ is free of rank $[E:\mathbb Q]$ over $\mathbb Z$. [[thm-ring-of-integers-free-of-rank-degree]]

[F9] The field norm of an algebraic number is the determinant of its multiplication map on the number-field vector space. [[def-field-norm-and-trace]]

[F10] For a square matrix over a commutative ring, $A\operatorname{adj}(A)=\det(A)I$; if $\det(A)$ is a unit, this identity gives an inverse. [[thm-adjugate-identity-over-a-commutative-ring]]

[F11] The generalized Bernoulli number is $B_{r,\alpha}=q^{r-1}\sum_{a=1}^q\alpha(a)B_r(a/q)$. [[def-generalized-bernoulli-number]]

[F12] The continued Dirichlet $L$-function satisfies $L(1-r,\alpha)=-B_{r,\alpha}/r$ for every integer $r\ge1$. [[thm-dirichlet-l-special-values-via-generalized-bernoulli-numbers]]

## Proof

**Given:** The hypotheses and constructions in the Statement.

1.1 By [F8], $\mathcal O_E$ is finite free over $\mathbb Z$, so $\mathcal O=\mathcal O_E\otimes_{\mathbb Z}\mathbb Z_p$ is finite free over $\mathbb Z_p$. For $u=1-\epsilon_D^a$, multiplication by $u$ on $\mathcal O_E$ has determinant $N_{E/\mathbb Q}(u)$ by [F9]. Since $\epsilon_D^a$ is a primitive $D$th root, $N_{\mathbb Q(\epsilon_D)/\mathbb Q}(u)=\Phi_D(1)$ and $N_{E/\mathbb Q}(u)=\Phi_D(1)^{[E:\mathbb Q(\epsilon_D)]}$. To evaluate this, use $D=\prod_{1<d\mid D}\Phi_d(1)$, obtained by setting $X=1$ in $(X^D-1)/(X-1)=\prod_{1<d\mid D}\Phi_d(X)$. Inductively, if $D=\ell^r$, the proper divisors $d>1$ with $\Phi_d(1)\ne1$ are exactly $\ell^j$ for $1\le j<r$, each contributing $\ell$, so $\Phi_D(1)=\ell$; if $D$ has at least two prime factors, the proper prime-power divisors contribute product $D$ and all other proper divisors contribute $1$, so $\Phi_D(1)=1$. Thus $p\nmid\Phi_D(1)$ because $p\nmid D$, and $N_{E/\mathbb Q}(u)$ is a $p$-adic unit. The adjugate identity [F10] then makes multiplication by $u$ invertible after tensoring with $\mathbb Z_p$, so every denominator in $F_\eta$ is a unit. Complex conjugation gives $\overline{\tau(\eta^{-1})}=\eta(-1)\tau(\eta)$; [F7] then gives $\tau(\eta^{-1})\tau(\eta)=\eta(-1)D$, a unit in $\mathcal O$. Hence $G(\eta^{-1})$ is a unit, and geometric expansion proves $F_\eta(T)\in\mathcal O\llbracket T\rrbracket$. [F7, F8, F9, F10, given, algebra]

1.2 By [F1], $F_\eta$ is the Mahler transform of a unique bounded $\mathcal O$-valued measure $\mu_\eta$ on $\mathbb Z_p$. The operator $\partial=(1+T)d/dT$ satisfies $\partial^m(1+T)^x|_{T=0}=x^m$, so
$$\int_{\mathbb Z_p}x^m\,d\mu_\eta(x)=\partial^mF_\eta(0)=f_\eta^{(m)}(0)=L(-m,\eta)$$
for every $m\ge0$, where $f_\eta(t)$ is the exponential kernel in [F2] after substituting $1+T=e^t$. [F1, F2, step 1.1, algebra]

2.1 For nontrivial $\psi$ of conductor $q=p^n$, choose a primitive $q$th root $\epsilon_q$ and a number field $E'$ containing $E$, $\epsilon_q$ and the values of $\psi$, with a p-adic embedding extending the one on $E$. Use the coefficient algebra $\mathcal O_{E'}\otimes_{\mathbb Z}\mathbb Z_p$, which is finite free by [F8]. Define the bounded twist $\mu_{\eta,\psi}$ by $\int f\,d\mu_{\eta,\psi}=\int\psi(x)f(x)\,d\mu_\eta(x)$. Under the Chinese remainder decomposition [F3], $(\eta\psi)(a_D,a_q)=\eta(a_D)\psi(a_q)$. If this product factored through $d\mid Dq$, write $d=d_Dd_q$ with $d_D\mid D$ and $d_q\mid q$. Restricting to $(a_D,1)$ shows $\eta$ factors through $d_D$, and restricting to $(1,a_q)$ shows $\psi$ factors through $d_q$. Since $d<Dq$, at least one factor is a proper divisor of its conductor, contradicting the primitivity of $\eta$ and [F4]. Thus $\eta\psi$ is primitive of conductor $Dq$. The primitive Gauss-sum identity [F6] gives the finite Fourier formula
$$A_{\mu_{\eta,\psi}}(T)=\frac1{\tau(\psi^{-1})}
\sum_{c\bmod q}\psi^{-1}(c)A_{\mu_\eta}((1+T)\epsilon_q^c-1).$$
After substituting $1+T=e^t$, the corresponding exponential kernel is
$$f_{\eta,\psi}(t)=\frac1{\tau(\psi^{-1})}
\sum_{c\bmod q}\psi^{-1}(c)f_\eta(t+2\pi i c/q).$$
By [F7], $\tau(\psi^{-1})\ne0$. Using the exponential-series formula in [F2] and [F6] with $m=-n$ evaluates the inner finite sum as $\psi(-1)\psi(n)\tau(\psi^{-1})$. Hence
$$f_{\eta,\psi}(t)=-(\eta\psi)(-1)\sum_{n\ge1}(\eta\psi)(n)e^{-nt},$$
which is the kernel in [F2] for the primitive product character $\eta\psi$. [F2, F3, F4, F6, F7, F8, step 1.2, algebra]

2.2 Applying [F2] to this kernel shows
$$\int_{\mathbb Z_p} \psi(x)x^m\,d\mu_\eta(x)
=\int_{\mathbb Z_p}x^m\,d\mu_{\eta,\psi}(x)
=L(-m,\eta\psi)$$
for every $m\ge0$. The twist is supported on $\mathbb Z_p^\times$ because $\psi$ vanishes on multiples of $p$. The finite Fourier identity is used only to identify its moments; boundedness already follows from multiplication of a bounded measure by the bounded locally constant function $\psi$. [F1, F2, step 2.1, algebra]

3.1 For the untwisted measure, define $\varphi$ as pushforward under $x\mapsto px$ and define $\rho\mu(f)=\int_{p\mathbb Z_p}f(x/p)\,d\mu(x)$. Then $\varphi\rho\mu=\operatorname{Res}_{p\mathbb Z_p}\mu$. On Mahler transforms,
$$A_{\varphi\rho\mu}(T)=\frac1p\sum_{\xi^p=1}A_\mu((1+T)\xi-1),$$
because $p^{-1}\sum_{\xi^p=1}\xi^x$ is the indicator of $p\mathbb Z_p$. The roots-of-unity sum $\sum_{\xi^p=1}\xi^j$ equals $p$ when $p\mid j$ and $0$ otherwise; expanding geometrically near $X=0$ therefore proves the rational identity $\frac1p\sum_{\xi^p=1}(X\xi-1)^{-1}=(X^p-1)^{-1}$. Applied to each summand of $F_\eta$, then reindexed by $b=pa\pmod D$ (valid since $p\nmid D$ and $\eta^{-1}(a)=\eta(p)\eta^{-1}(b)$), this gives
$$\varphi\rho F_\eta(T)=\eta(p)F_\eta((1+T)^p-1)=\eta(p)\varphi F_\eta(T).$$
The pushforward $\varphi$ is injective because $x\mapsto px$ is a homeomorphism from $\mathbb Z_p$ onto the clopen set $p\mathbb Z_p$. Thus $\rho\mu_\eta=\eta(p)\mu_\eta$. Since $\int x^m\,d(\rho\mu_\eta)=p^{-m}\int_{p\mathbb Z_p}x^m\,d\mu_\eta$, this relation gives $\int_{p\mathbb Z_p}x^m\,d\mu_\eta=\eta(p)p^mL(-m,\eta)$. Subtracting from the full moment in step 1.2 yields
$$\int_{\mathbb Z_p^\times}x^m\,d\mu_\eta(x)
=(1-\eta(p)p^m)L(-m,\eta).$$
[F1, step 1.2, algebra]

3.2 If $\psi\ne1$, the support statement in step 2.2 and the moment identity there give
$$\int_{\mathbb Z_p^\times}\psi(x)x^m\,d\mu_\eta(x)
=L(-m,\eta\psi)
=(1-(\eta\psi)(p)p^m)L(-m,\eta\psi),$$
since $(\eta\psi)(p)=0$. If $\psi=1$, step 3.1 gives the same formula. Setting $m=k-1$ and using $\zeta_\eta=x^{-1}\operatorname{Res}_{\mathbb Z_p^\times}\mu_\eta$ proves the first interpolation identity. [F1, step 2.2, step 3.1, algebra]

4.1 For $s=1-k$, $|s|_p\le1<p^{(p-2)/(p-1)}$, so this interpolation point lies in the stated disc. If also $i\equiv k\pmod{p-1}$, the integrand defining $L_p$ simplifies on units:
$$\psi(x)\omega(x)^{i-1}\langle x\rangle^{k-1}
=\psi(x)\omega(x)^{i-k}x^{k-1}
=\psi(x)x^{k-1}.$$
Step 3.2 therefore gives $L_p(1-k,\eta\omega^i\psi)=(1-(\eta\psi)(p)p^{k-1})L(1-k,\eta\psi)$, which is the second displayed interpolation formula. [F5, step 3.2, given, algebra] ∎

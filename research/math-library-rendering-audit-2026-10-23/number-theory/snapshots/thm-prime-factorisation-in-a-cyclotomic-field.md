---
id: thm-prime-factorisation-in-a-cyclotomic-field
kind: theorem
title: Prime factorisation in a cyclotomic field
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-cyclotomic-ring-of-integers
  - cor-total-ramification-in-a-prime-power-cyclotomic-field
  - thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field
  - thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient
  - lem-monogenic-prime-factorisation-by-polynomial-reduction
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity
  - cor-euler-totient-is-multiplicative
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - def-prime-above-and-residue-degree
  - def-cyclotomic-extension
  - def-cyclotomic-polynomial
  - def-order-in-a-group
  - def-unit-group-modulo-n-and-euler-totient
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 3 and Ch. 6"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 3, Theorem 3.41, pp. 62-63: factorisation of p O_K by reduction of the minimal polynomial in the monogenic case O_K = Z[alpha]. Ch. 6, Theorem 6.4(c), pp. 99-100: for n = p^r m with (p,m)=1, (p) = (P_1...P_s)^{phi(p^r)} with P_i distinct."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.18"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Example 8.18, pp. 143-144: for p not dividing n the Frobenius of Q(zeta_n) sends zeta_n to zeta_n^p and has order f with n | p^f - 1."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Chs. 10-11"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 10, Theorem 10.1 and Lemmas 10.3/10.5/10.6, pp. 54-58: O_{Q(zeta_{p^a})} = Z[zeta_{p^a}] and the prime-power ramification data. Ch. 11, Theorem 11.6 and Remark 11.7, pp. 61-62: reduced indices N and the discriminant/ramification dictionary."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $f\ge1$ be a reduced index, that is, $f$ is odd or $4\mid f$. Let $\ell$ be
a rational prime, write $f=\ell^{a}m$ with $\gcd(\ell,m)=1$ (so $a$ is the
$\ell$-adic valuation of $f$, $m=f/\ell^{a}$, and $m=f$ when $\ell\nmid f$),
and put $e:=\varphi(\ell^{a})$, $d:=\operatorname{ord}_m(\ell)$, the
multiplicative order of $\ell$ modulo $m$, and $g:=\varphi(m)/d$, with the
conventions $\varphi(1)=1$ and $\operatorname{ord}_1(\ell)=1$. Let $\zeta_f$ be
a primitive $f$-th root of unity and $K=\mathbb Q(\zeta_f)$. Then
$$\ell\mathcal O_K=(P_1\cdots P_g)^{e}$$
with pairwise distinct primes $P_1,\dots,P_g$ of residue degree $d$, and
$edg=\varphi(f)$.

## Facts & Assumptions

**Given:** A reduced index $f\ge1$, a rational prime $\ell$, the factorisation $f=\ell^{a}m$ with $\gcd(\ell,m)=1$, the numbers $e=\varphi(\ell^{a})$, $d=\operatorname{ord}_m(\ell)$, $g=\varphi(m)/d$ (with the conventions $\varphi(1)=1$ and $\operatorname{ord}_1(\ell)=1$), a primitive $f$-th root of unity $\zeta=\zeta_f$, the field $K=\mathbb Q(\zeta)$, and, for $n\ge1$, the image $\bar\Phi_n$ of $\Phi_n$ in $\mathbb F_\ell[t]$.

[F1] $\mathcal O_K=\mathbb Z[\zeta]$ ([[thm-cyclotomic-ring-of-integers]]).

[F2] $\Phi_f$ is monic of degree $\varphi(f)$ with $\Phi_f(\zeta)=0$, its roots in a field of characteristic not dividing $f$ are exactly the primitive $f$-th roots of unity, and $\Phi_f$ is irreducible over $\mathbb Q$; hence $\Phi_f$ is the minimal polynomial of $\zeta$ over $\mathbb Q$, and $K=\mathbb Q(\mu_f)$ is a cyclotomic extension of order $f$ ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]], [[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]], [[def-cyclotomic-extension]]).

[F3] Monogenic factorisation: if $K=\mathbb Q(\alpha)$ is a number field with $\mathcal O_K=\mathbb Z[\alpha]$ and monic minimal polynomial $F$ of $\alpha$, and if the image of $F$ in $\mathbb F_p[t]$ factors as $\prod_ih_i^{a_i}$ into distinct monic irreducibles, then $p\mathcal O_K=\prod_iP_i^{a_i}$ with pairwise distinct primes $P_i=(p,\widetilde h_i(\alpha))$ of residue degree $\deg h_i$, where $\widetilde h_i\in\mathbb Z[t]$ is the coefficientwise lift of $h_i$ with coefficients in $\{0,\ldots,p-1\}$; the argument uses no Axiom of Choice ([[lem-monogenic-prime-factorisation-by-polynomial-reduction]], [[def-prime-above-and-residue-degree]]).

[F4] For every $n\ge1$, $\prod_{j\mid n}\Phi_j=t^{n}-1$ in $\mathbb Z[t]$, and $\Phi_n$ is monic of degree $\varphi(n)$; in particular $\Phi_1=t-1$ ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[def-cyclotomic-polynomial]]).

[F5] Finite-field factorisation: if $n\ge1$ and $\ell\nmid n$, then $\bar\Phi_n$ is a product of pairwise distinct monic irreducible polynomials in $\mathbb F_\ell[t]$, each of degree $\operatorname{ord}_n(\ell)$, and there are $\varphi(n)/\operatorname{ord}_n(\ell)$ of them ([[thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field]], [[def-order-in-a-group]], [[def-unit-group-modulo-n-and-euler-totient]]).

[F6] Euler's totient is multiplicative on coprime arguments: $\varphi(uv)=\varphi(u)\varphi(v)$ when $\gcd(u,v)=1$ ([[cor-euler-totient-is-multiplicative]]).

[F7] $\mathbb F_\ell[t]$ is an integral domain (indeed a unique factorisation domain), so a product identity $A\cdot B=A\cdot C$ with $A\ne0$ implies $B=C$ ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[F8] Total ramification in a prime-power cyclotomic field: for $b\ge1$, $p\mathcal O_{\mathbb Q(\zeta_{p^{b}})}=(\lambda)^{\varphi(p^{b})}$ with $\lambda=1-\zeta_{p^{b}}$, and $\lambda\mathcal O_{\mathbb Q(\zeta_{p^{b}})}$ is the unique prime above $p$, with residue field $\mathbb F_p$ ([[cor-total-ramification-in-a-prime-power-cyclotomic-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a\ge1$. Since $\gcd(\ell,m)=1$, the divisors of $\ell^{a}m$ are exactly the $\ell^{j}m'$ with $0\le j\le a$ and $m'\mid m$; reducing the product identity of [F4] at $n=\ell^{a}m$ and at $n=\ell^{a-1}m$ modulo $\ell$ and using $(X^{m})^{\ell^{j}}-1=(X^{m}-1)^{\ell^{j}}$ in $\mathbb F_\ell[t]$ therefore gives $\prod_{j=0}^{a}\prod_{m'\mid m}\bar\Phi_{\ell^{j}m'}=(X^{m}-1)^{\ell^{a}}$ and $\prod_{j=0}^{a-1}\prod_{m'\mid m}\bar\Phi_{\ell^{j}m'}=(X^{m}-1)^{\ell^{a-1}}$. The second product is the part $j\le a-1$ of the first, and $(X^{m}-1)^{\ell^{a-1}}\ne0$, so cancelling this common factor in the domain $\mathbb F_\ell[t]$ gives $\prod_{m'\mid m}\bar\Phi_{\ell^{a}m'}=(X^{m}-1)^{\ell^{a}-\ell^{a-1}}=(X^{m}-1)^{\varphi(\ell^{a})}$. [F4, F7]

1.2 Applied to $n=m$, which is coprime to $\ell$, [F5] gives $\bar\Phi_m=\prod_{i=1}^{g}h_i$ with $g=\varphi(m)/d$, where the $h_i$ are pairwise distinct monic irreducible elements of $\mathbb F_\ell[t]$ of degree $d=\operatorname{ord}_m(\ell)$; in particular $\bar\Phi_m\ne0$. [F5]

2.1 Claim: for our fixed $a\ge1$, $\bar\Phi_{\ell^{a}n}=\bar\Phi_n^{\varphi(\ell^{a})}$ in $\mathbb F_\ell[t]$ for every $n\ge1$ with $\gcd(n,\ell)=1$. This is proved by strong induction on $n$. For $n=1$, step 1.1 with $m=1$ gives $\bar\Phi_{\ell^{a}}=(X-1)^{\varphi(\ell^{a})}$, while $\bar\Phi_1=X-1$ by [F4], so $\bar\Phi_{\ell^{a}}=\bar\Phi_1^{\varphi(\ell^{a})}$. For $n>1$, assume the claim for every proper divisor $m'\mid n$, $m'\ne n$; step 1.1 with $m=n$ gives $\prod_{m'\mid n}\bar\Phi_{\ell^{a}m'}=(X^{n}-1)^{\varphi(\ell^{a})}$, and [F4] gives $\prod_{m'\mid n}\bar\Phi_{m'}=X^{n}-1$, so substituting $\bar\Phi_{\ell^{a}m'}=\bar\Phi_{m'}^{\varphi(\ell^{a})}$ for the proper divisors yields $\bar\Phi_{\ell^{a}n}\cdot\prod_{m'\mid n,\,m'<n}\bar\Phi_{m'}^{\varphi(\ell^{a})}=\bar\Phi_n^{\varphi(\ell^{a})}\cdot\prod_{m'\mid n,\,m'<n}\bar\Phi_{m'}^{\varphi(\ell^{a})}$; the common factor is a nonzero product of nonzero monic polynomials, so cancellation in the domain $\mathbb F_\ell[t]$ gives $\bar\Phi_{\ell^{a}n}=\bar\Phi_n^{\varphi(\ell^{a})}$. [step 1.1, F4, F7]

2.2 Since $\gcd(\ell^{a},m)=1$, [F6] gives $\varphi(f)=\varphi(\ell^{a}m)=\varphi(\ell^{a})\varphi(m)$, so $edg=\varphi(\ell^{a})\cdot d\cdot\bigl(\varphi(m)/d\bigr)=\varphi(\ell^{a})\varphi(m)=\varphi(f)$. [F6, step 1.2]

3.1 In all cases $a\ge0$ one has $\bar\Phi_f=\bar\Phi_{\ell^{a}m}=\prod_{i=1}^{g}h_i^{e}$ in $\mathbb F_\ell[t]$, a product of pairwise distinct monic irreducibles of degree $d$ with common multiplicity $e$: if $a\ge1$ this is step 2.1 at $n=m$ combined with step 1.2, and if $a=0$ then $e=\varphi(1)=1$ and $m=f$, so the same formula is step 1.2 itself. [step 1.2, step 2.1]

4.1 By [F1], [F2] the element $\alpha:=\zeta$ has $\mathcal O_K=\mathbb Z[\alpha]$ and monic minimal polynomial $\Phi_f$, so the monogenic factorisation [F3] applies with $p=\ell$ to the factorisation of step 3.1: $\ell\mathcal O_K=\prod_{i=1}^{g}P_i^{e}$ with pairwise distinct primes $P_i=(\ell,\widetilde h_i(\zeta))$ of residue degree $\deg h_i=d$, where $\widetilde h_i$ is the coefficientwise integer lift modulo $\ell$, and $\prod_{i=1}^{g}P_i^{e}=(P_1\cdots P_g)^{e}$. [F1, F2, F3, step 3.1]

5.1 Edge cases. If $f=1$ then $a=0$, $m=1$, $e=d=g=1$ and $\bar\Phi_1=X-1$, so steps 3.1 and 4.1 give $\ell\mathbb Z=(\ell)$, and step 2.2 gives $edg=1=\varphi(1)$; if $m=1$ and $a\ge1>0$ then $g=d=1$ and $P_1=(\ell,\zeta-1)$, so $\ell\mathcal O_K=P_1^{\,\varphi(\ell^{a})}$, while [F8] with $p=\ell$, $b=a$ gives $\ell\mathcal O_K=(\lambda)^{\varphi(\ell^{a})}$ with $\lambda=1-\zeta$ the unique prime above $\ell$; the two descriptions agree by uniqueness of the prime above $\ell$. [F8, step 4.1, step 2.2] ∎

## Remarks

- **Where reducedness enters.** The factorisation argument itself only uses $\gcd(\ell,m)=1$; the reduced-index hypothesis is the standing convention for cyclotomic conductors in this pair, and it is exactly what excludes the degenerate shape $f=2m$ with $m$ odd, where $2\mid f$ yet $\mathbb Q(\zeta_f)=\mathbb Q(\zeta_m)$ and $2$ is unramified, so the companion ramification criterion needs the reduced index as stated.
- **Unramified case.** When $a=0$ the theorem specialises to $\ell\mathcal O_K=P_1\cdots P_g$ with $g=\varphi(f)/\operatorname{ord}_f(\ell)$ primes of residue degree $\operatorname{ord}_f(\ell)$, the form in which the unramified-decomposition corollary of this page reads off the residue degree of the arithmetic Frobenius ([[cor-unramified-prime-decomposition-in-a-cyclotomic-field]]).
- **Choice.** The proof's only structural inputs are the choice-free monogenic reduction [F3] and finite polynomial arithmetic; the monograph-level finite field factorisation [F5] is quoted as a published interface.

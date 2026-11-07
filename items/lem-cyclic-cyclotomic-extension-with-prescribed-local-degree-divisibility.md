---
id: lem-cyclic-cyclotomic-extension-with-prescribed-local-degree-divisibility
kind: lemma
title: "Cyclic cyclotomic extensions with prescribed divisible local degrees"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - thm-unit-group-modulo-odd-prime-power-is-cyclic
  - thm-unit-group-modulo-two-power-structure
  - cor-cyclotomic-ramification-criterion
  - cor-unramified-prime-decomposition-in-a-cyclotomic-field
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-global-field-completion-tensor-product-decomposition
proof_strategy: direct
axiom_use: >-
  AC supplies the stipulated common algebraic closure and completion embeddings,
  and implies the Countable Choice in the completion decomposition interface.
  The construction uses finitely many cyclotomic subfields and explicit finite
  cyclic quotients. No reciprocity or class-formation theorem is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII Lemma7.3, printed p.220. This proof specifies an imaginary cyclic dyadic quotient and uses the safe factorial local base-change bound."
verification: {}
---

## Statement

Assume AC. Let $K$ be a number field, let $S$ be a finite set of finite places of $K$, and let $m\ge1$ be an integer. There exist an integer $N\ge1$ and a finite extension $L/K$ such that $L\subseteq K(\mu_N)$, $L/K$ is cyclic, $L$ is totally complex, and for every $v\in S$ and every $w\mid v$ of $L$,
$$m\mid[L_w:K_v].$$

## Statement references

[[cor-the-galois-group-of-a-rational-cyclotomic-field]]

[[thm-unit-group-modulo-odd-prime-power-is-cyclic]]

[[thm-unit-group-modulo-two-power-structure]]

## Facts & Assumptions

**Given:** AC, the number field $K$, finite set $S$, and positive integer $m$ in the Statement.

[F1] The Galois group of $\mathbb Q(\mu_n)/\mathbb Q$ is $(\mathbb Z/n\mathbb Z)^\times$ acting by its exponents. For odd $\ell$ this unit group at $\ell^r$ is cyclic of order $(\ell-1)\ell^{r-1}$. At $2^{a+2}$, $a\ge1$, every unit is uniquely $(-1)^\varepsilon5^b$ with $b\bmod2^a$. [[cor-the-galois-group-of-a-rational-cyclotomic-field]] [[thm-unit-group-modulo-odd-prime-power-is-cyclic]] [[thm-unit-group-modulo-two-power-structure]]

[F2] A rational prime $p$ not dividing the cyclotomic conductor is unramified, and its arithmetic Frobenius acts on roots of unity by exponent $p$; its local degree is the order of that Frobenius. [[cor-cyclotomic-ramification-criterion]] [[cor-unramified-prime-decomposition-in-a-cyclotomic-field]] [[lem-arithmetic-frobenius-on-a-cyclotomic-field]]

[F3] A finite local extension has degree equal to its ramification index times its residue degree. Completion of a finite separable global extension decomposes as the product of the completions at the places above the given place. [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]] [[thm-global-field-completion-tensor-product-decomposition]]

[A1] The declared AC implies the Countable Choice required by the completion-decomposition interface; no stronger hypothesis is added. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** construct cyclic prime-power cyclotomic quotients whose local degrees grow at each prescribed rational prime, choose an imaginary dyadic quotient, and take a compositum followed by base change.

**Given:** The original data.

1.1 For a rational prime $\ell$ and $r\ge1$, the polynomial $\Phi_{\ell^r}(1+X)=\sum_{j=0}^{\ell-1}(1+X)^{j\ell^{r-1}}$ is monic of degree $d=(\ell-1)\ell^{r-1}$, has constant coefficient $\ell$, and reduces modulo $\ell$ to $X^d$. In a completion at $\ell$, a primitive $\ell^r$th root $\zeta$ reduces to $1$, because the residue characteristic is $\ell$. Thus $x=\zeta-1$ has positive valuation. In its displayed polynomial, if $v(x)<1/d$ the leading term is uniquely of smallest valuation, and if $v(x)>1/d$ the constant term is uniquely of smallest valuation. Therefore $v(x)=1/d$. The ramification index is at least $d$; by [F1] the global cyclotomic degree is $d$, so [F3] forces local degree $d$ and total ramification. In particular every subfield of this cyclotomic field has full local degree at $\ell$ equal to its global degree. [F1, F3, A1, given, algebra]

2.1 Let $\ell$ be odd. In $\operatorname{Gal}(\mathbb Q(\mu_{\ell^r})/\mathbb Q)$ take the fixed field $E_{\ell,r}$ of the unique subgroup of order $\ell-1$. It is cyclic of degree $\ell^{r-1}$. At $p=\ell$ its local degree is this degree by step 1.1. At any fixed rational prime $p\ne\ell$, the Frobenius of [F2] has an $\ell$-power order in this quotient which tends to infinity with $r$. Indeed, if the order were at most $\ell^c$, then $p^{(\ell-1)\ell^c}\equiv1\pmod{\ell^r}$. For fixed $p,c$ the nonzero integer $p^{(\ell-1)\ell^c}-1$ is divisible by only finitely many powers of $\ell$, so that bound is impossible for every sufficiently large $r$. Hence, given finitely many rational primes and a prescribed $\ell$-power, one sufficiently large $r$ makes all their local degrees divisible by that power. [F1, F2, step 1.1, construct, algebra]

2.2 For the dyadic factor fix $a\ge1$ and define the surjective homomorphism $\theta_a:(\mathbb Z/2^{a+2}\mathbb Z)^\times\to\mathbb Z/2^a\mathbb Z$ by $\theta_a((-1)^\varepsilon5^b)=b+2^{a-1}\varepsilon$. It is a homomorphism because $2\cdot2^{a-1}=0$ modulo $2^a$. Let $E_{2,a}$ be the fixed field of its kernel. This field is cyclic of degree $2^a$ and totally complex: complex conjugation is $-1$, whose image is the nonzero element $2^{a-1}$. At $p=2$ its local degree is $2^a$ by step 1.1. For an odd rational prime $p$, write $p=(-1)^\varepsilon5^{b_a}$ modulo $2^{a+2}$. If the order of $\theta_a(p)$ were at most $2^c$, multiplying its vanishing relation by $2$ would give $2^{c+1}b_a\equiv0\pmod{2^a}$, and hence $p^{2^{c+1}}\equiv1\pmod{2^{a+2}}$. The fixed nonzero integer $p^{2^{c+1}}-1$ excludes this for every sufficiently large $a$. Thus the dyadic local degrees at every prescribed finite set of rational primes are eventually divisible by any prescribed power of $2$. The fields need not form a nested tower; the eventual estimate applies to every sufficiently large $a$. [F1, F2, step 1.1, construct, algebra]

3.1 Given an integer $M\ge1$ and finitely many rational primes $T$, take one factor from step 2.1 for each odd prime dividing $M$, large enough for its local degrees at all $p\in T$ to be divisible by the corresponding primary part of $M$. Also take one dyadic factor from step 2.2, whether or not $M$ is even, imposing its required dyadic divisibility. These fields have pairwise coprime prime-power degrees, so their intersections in each successive compositum are trivial and their Galois groups multiply. Their compositum $E/\mathbb Q$ is therefore cyclic, is contained in one rational cyclotomic field, and is totally complex because it contains the imaginary dyadic factor. Every local degree $[E_p:\mathbb Q_p]$ is divisible by $M$: it is divisible by the local degree of each primary subfield, and their required primary parts are relatively prime. Empty $T$ or $M=1$ causes no problem; retain an imaginary dyadic factor. [F1, F3, step 2.1, step 2.2, construct, algebra]

4.1 Put $n=[K:\mathbb Q]$, take $M=m\,n!$, and apply step 3.1 to the rational primes under $S$. Set $L=KE$. Since $E/\mathbb Q$ is cyclic, restriction identifies $\operatorname{Gal}(L/K)$ with a subgroup of $\operatorname{Gal}(E/\mathbb Q)$, so $L/K$ is cyclic. It is cyclotomic over $K$ and totally complex. At $v\in S$, fix compatible completions at $p$ below $v$. By [F3], $L_w=K_vE_p$. Since $E_p/\mathbb Q_p$ is Galois, $[L_w:K_v]=[E_p:\mathbb Q_p]/c$, where $c=[E_p\cap K_v:\mathbb Q_p]$. The positive integer $c$ is at most $[K_v:\mathbb Q_p]\le n$, so $c\mid n!$. The numerator is divisible by $m n!$, and its quotient by $c$ is therefore divisible by $m$. All places $w$ above $v$ have that degree because $L/K$ is Galois. This proves every clause, including possible real places of $K$, which become complex because $E$ has no real embeddings. [F3, A1, step 3.1, construct, algebra] ∎

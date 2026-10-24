---
id: lem-primitive-laurent-annihilators-preserve-nonzero-values-under-rational-and-prime-reduction
kind: lemma
title: Primitive Laurent annihilators preserve nonzero rational and prime reductions
status: published
origin: pipeline
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Section4.1, integral self-value and large-prime reduction
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

Put $\Lambda=\mathbb Z[t,t^{-1}]$ and $\Lambda_{\mathbb Q}=\mathbb Q[t,t^{-1}]$. Let $\Delta\in\Lambda$ be nonzero and primitive, meaning that the greatest common divisor of its finitely many integer coefficients is one. Define
$$T_\Delta=\{x\in\mathbb Q(t)/\Lambda:\Delta x=0\}.$$
The natural map $\mathbb Q(t)/\Lambda\to\mathbb Q(t)/\Lambda_{\mathbb Q}$ is injective on $T_\Delta$.

For a prime $p$ such that $\bar\Delta\ne0$ in $\Lambda_p=\mathbb F_p[t,t^{-1}]$, there is a well-defined additive reduction map
$$\rho_{p,\Delta}:T_\Delta\longrightarrow\mathbb F_p(t)/\Lambda_p,\qquad [a/\Delta]\longmapsto[\bar a/\bar\Delta],\quad a\in\Lambda.$$
It satisfies $\rho_{p,\Delta}(b x)=\bar b\,\rho_{p,\Delta}(x)$ for $b\in\Lambda$. For every nonzero $x\in T_\Delta$, one can compute a nonzero integer $D$ from $\Delta$ and a chosen representative $a/\Delta$ such that $\rho_{p,\Delta}(x)\ne0$ for every prime $p\nmid D$. No choice principle or factorization theorem for arbitrary rings is assumed. This is a map on the specified annihilated quotient module; no global reduction homomorphism from $\mathbb Q(t)$ to $\mathbb F_p(t)$ is asserted.

## Facts & Assumptions

**Given:** The primitive finite Laurent polynomial and, for the last assertion, one nonzero annihilated quotient class with a representative. Laurent polynomials are finite coefficient lists. Over a field the product of two nonzero Laurent polynomials is nonzero, since its lowest and highest nonzero terms have nonzero product coefficients.

## Proof

1.1 Suppose $x\in T_\Delta$ maps to zero in the rational quotient. It has a representative $r\in\Lambda_{\mathbb Q}$, and $\Delta r\in\Lambda$. Let $m\ge1$ be the least positive integer clearing the finitely many denominators of $r$ and put $f=mr\in\Lambda$. If $m>1$, take a prime divisor $p$ of $m$; the least divisor greater than one is prime, so this requires no choice principle. Not every coefficient of $f$ is divisible by $p$, since otherwise $m/p$ would also clear the denominators of $r$, contrary to minimality. Primitivity likewise says $\bar\Delta\ne0$ modulo $p$. Thus $\bar\Delta\bar f\ne0$ in the field Laurent polynomial ring. But $\Delta f=m(\Delta r)$ has all coefficients divisible by $p$, a contradiction. Hence $m=1$, so $r\in\Lambda$ and $x=0$. This proves the asserted injection. [given, construct, algebra]

1.2 Every $x\in T_\Delta$ has a representative $a/\Delta$ with $a\in\Lambda$: take any rational-function representative $r$ of $x$ and use $a=\Delta r$, which is in $\Lambda$ by the annihilation condition. For two such representatives $a/\Delta,a'/\Delta$, equality of their classes means $a'-a=\Delta b$ for some $b\in\Lambda$. If $\bar\Delta\ne0$, their reduced fractions differ by $\bar b$ and so define the same class in $\mathbb F_p(t)/\Lambda_p$. The additive and $\Lambda$-scalar identities follow by reducing their actual finite numerators. This constructs precisely the claimed map and uses no reduction of arbitrary rational-function coefficients or denominators. [given, construct, algebra]

2.1 Fix a nonzero $x$. Multiply $\Delta$ by a power of $t$ to obtain a polynomial $d(t)$ with nonzero constant and leading coefficient; this unit change does not change its annihilated module. Adjust its numerator accordingly, then multiply $x$ by a power $t^m$ so that $y=t^m x=c(t)/d(t)$ with $c\in\mathbb Z[t]$. The class $y$ is nonzero, and step 1.1 implies $c/d\notin\Lambda_{\mathbb Q}$. Ordinary finite polynomial division over $\mathbb Q$ gives $c=dQ+R$, with $\deg R<\deg d$. Its remainder is nonzero, since a zero remainder would give $c/d\in\mathbb Q[t]$. Clear the finitely many coefficient denominators: $$q c=d A+B,\qquad q\in\mathbb Z_{>0},\quad A,B\in\mathbb Z[t],\quad B\ne0,\quad\deg B<\deg d.$$ In particular $\deg d>0$. Choose the first nonzero coefficient $C$ of $B$ in increasing exponent order and set $D=q\,d(0)\,\operatorname{lead}(d)\,C\ne0$. All choices here are finite coefficient operations and polynomial division. [given, step 1.1, construct, algebra]

3.1 If $p\nmid D$, then $\bar d$ has its original positive degree and nonzero constant term, $\bar B\ne0$ and $\deg\bar B<\deg\bar d$, and $\bar q$ is invertible. The reduced identity gives $$[\bar c/\bar d]=\bar q^{-1}[\bar B/\bar d]\quad\text{in }\mathbb F_p(t)/\Lambda_p.$$ The latter class cannot be zero. If $\bar B=\bar d\,L$ for $L\in\Lambda_p$, the nonzero constant term of $\bar d$ and the polynomial nature of $\bar B$ force the lowest exponent of $L$ to be nonnegative: lowest exponents add and their coefficients do not cancel. Hence $L$ is a polynomial, contradicting $\deg\bar B<\deg\bar d$. Thus $\rho_{p,\Delta}(y)\ne0$, with the unit changes in $\Delta$ cancelled between numerator and denominator. By step 1.2, $\rho_{p,\Delta}(y)=t^m\rho_{p,\Delta}(x)$; the unit $t^m$ preserves nonzero classes. This proves the nonzero reduction assertion for the explicit finite exceptional integer $D$. If $\Delta$ is a Laurent unit, $T_\Delta=0$ and the nonzero case is vacuous. The argument used only finitely many integer and polynomial operations, proving the full choice scope. [step 1.2, step 2.1, construct, algebra] ∎

## Remarks

For an actual Blanchfield self-pairing, applying this lemma requires a proved primitive annihilator of the value and an exact identification of its reduced value with the geometric mod-$p$ pairing. Neither a Seifert presentation nor that coefficient comparison is supplied by this purely algebraic statement.

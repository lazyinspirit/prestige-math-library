---
dependency_level: 0
id: lem-frobenius-semilinear-lattice-can-be-scaled-to-nonzero-reduction
kind: lemma
title: Ramified normalization of a Frobenius-semilinear lattice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-discrete-valuation-ring
- thm-monic-polynomial-division
- thm-adjugate-identity-over-a-commutative-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique
      des invariants
    url: https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf
    locator: Chapter V §1, normalization of a semilinear map after finite ramification;
      full elementary construction.
verification: {}
---

## Statement

Let $A$ be a discrete valuation ring of characteristic $p>0$, with fraction field $K$, normalized valuation $v$ and uniformizer $\pi$. Let $q>1$ be a power of $p$ and let $\sigma:K\to K$ satisfy $v\sigma=qv$ and $\sigma(\pi)=\pi^q$. Let $V$ have finite positive dimension and let $\phi$ be $\sigma$-semilinear with invertible linearization. Given a free full $A$-lattice $M\subset V$, put $n=q-1$ and $B=A[T]/(T^n-\pi)$, writing $\rho$ for $T$. Then $B$ is a discrete valuation ring with uniformizer $\rho$, finite free of rank $n$ over $A$. The endomorphism $\sigma$ extends by $\rho\mapsto\rho^q$. If $m$ is the minimum valuation of the nonzero entries of the matrix of $\phi$ in an $A$-basis of $M$, the lattice $M'=\rho^{-m}(B\otimes_A M)$ satisfies $\phi(M')\subseteq M'$ and its reduction modulo $\rho$ is not the zero semilinear map. This includes $q=2$ and requires neither completeness nor a choice axiom.

## Facts & Assumptions

**Given:** The DVR, exact endomorphism identity, basis lattice and map in the Statement.

[F1] Elements of a DVR are precisely elements of its fraction field of nonnegative integral valuation. Every nonzero element is a uniformizer power times a unit. ([[def-discrete-valuation-ring]])

[F2] Division by a monic polynomial gives a unique representative of degree less than its degree. ([[thm-monic-polynomial-division]])

[F3] A square matrix whose determinant is a unit is invertible by its adjugate. ([[thm-adjugate-identity-over-a-commutative-ring]])

## Proof

1.1 By [F2], $B$ is free on $1,\rho,\ldots,\rho^{n-1}$. For a nonzero normal form $b=\sum_{i=0}^{n-1}a_i\rho^i$ define $w(b)=\min_{a_i\ne0}(nv(a_i)+i)$. Distinct terms have different residues modulo $n$, so the minimum is unique. In multiplying two such sums, the product of their two unique least-weight terms has smaller weight than every other product term; replacing $\rho^n$ by $\pi$ preserves weight. Other terms cannot cancel that least-weight term, even after collecting coefficients. Thus $w(bc)=w(b)+w(c)$; the same normal-form argument gives $w(b+c)\ge\min(w(b),w(c))$. In particular $B$ is a domain. [F1, F2, given, construct, algebra]

2.1 Let $b\ne0$ and $h=w(b)$. Each monomial $a_i\rho^i$ equals $u_i\rho^{nv(a_i)+i}$ for a unit $u_i\in A$. Dividing each term by $\rho^h$ leaves nonnegative powers, so $b=\rho^h u$ with $u\in B$ and $w(u)=0$. The constant coefficient of $u$ is a unit in $A$. Modulo $\pi$, multiplication by $u$ on $B/\pi B=(A/\pi A)[\rho]/(\rho^n)$ is triangular with that constant coefficient on its diagonal. Its determinant is nonzero modulo $\pi$ and hence a unit of $A$. By [F3], multiplication by $u$ is invertible on $B$, and in particular $u$ has a multiplicative inverse. It follows that on $\operatorname{Frac}B$ the extended valuation $w(b/c)=w(b)-w(c)$ is well defined and its valuation ring is exactly $B$: if $w(b)\ge w(c)$, the above factorizations put $b/c$ in $B$. Since $w(\rho)=1$, this proves the DVR assertion. [F1, F3, step 1.1, algebra]

3.1 Apply $\sigma$ to coefficients and send $\rho$ to $\rho^q$. This respects the relation because $(\rho^q)^n=\pi^q=\sigma(\pi)$, so it defines an endomorphism of $B$. For a normal-form term its weight becomes $q(nv(a_i)+i)$; the least one is still unique. Thus $w(\sigma b)=qw(b)$, proving injectivity and the extension to the fraction field. [given, step 1.1, step 2.1, construct, algebra]

4.1 In the rescaled basis $\rho^{-m}e_i$, the matrix of $\phi$ is $\rho^{-(q-1)m}$ times its original matrix. Its nonzero entry weights are $nv(M_{ij})-(q-1)m=n(v(M_{ij})-m)\ge0$, with equality for at least one entry. All entries therefore lie in $B$ and at least one is a unit. This proves lattice stability and nonzero reduction. When $q=2$, $n=1$ and $B=A$ with $\rho=\pi$, so the same calculation covers that endpoint. [step 2.1, step 3.1, given, algebra] ∎

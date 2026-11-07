---
id: thm-bourgain-lindenstrauss-burgess-bound-for-small-squareful-moduli
kind: theorem
title: "Bourgain–Lindenstrauss Burgess corollary for a fixed squareful modulus"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [thm-burgess-character-sum-bound-cube-free-moduli, def-dirichlet-character-modulo-q, thm-chinese-remainder-theorem, thm-unit-group-chinese-remainder-decomposition, lem-hecke-maass-burgess-distinct-prime-divisor-subpower-bound, lem-complete-period-of-nonprincipal-dirichlet-character-sums-to-zero, cor-euclids-lemma-for-finite-products, def-prime, thm-prime-factorisation-exists]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf"
      locator: "§5, Theorems 5.1–5.4, printed pp. 15–18."
---

## Statement

Fix d≥1 and a cube-free k₀≥1 coprime to d. If χ is a nonprincipal Dirichlet character modulo dk₀, then for every ε>0 and integer r≥1, |Σ_{N<n≤N+H}χ(n)|≪_{ε,r,d}H^{1−1/r}k₀^{(r+1)/(4r²)+ε}, uniformly in N∈ℤ and H≥1.

## Statement references

[Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits, §5, Theorems 5.1–5.4, printed pp. 15–18.](https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf)

## Facts & Assumptions

**Given:** A fixed integer $d\ge1$, a cube-free integer $k_0\ge1$ with $(d,k_0)=1$, a nonprincipal Dirichlet character $\chi$ modulo $dk_0$, an integer interval $(N,N+H]$ with $H\ge1$, a real $\epsilon>0$, and an integer $r\ge1$.

[F1] [[def-dirichlet-character-modulo-q]]: A Dirichlet character modulo $q$ is a group homomorphism on $(\mathbb Z/q\mathbb Z)^\times$, extended to integers by zero on nonunits.

[F2] [[thm-unit-group-chinese-remainder-decomposition]]: For coprime moduli $d,k_0$, the unit group modulo $dk_0$ is the product of the unit groups modulo $d$ and $k_0$; hence $\chi=\chi_d\chi_0$ on integers for characters $\chi_d,\chi_0$ of the two factors.

[F3] [[thm-burgess-character-sum-bound-cube-free-moduli]]: For a nonprincipal character modulo a cube-free modulus $k_0$, every consecutive interval of length $L\ge1$ has character sum $\ll_{\eta,r}L^{1-1/r}k_0^{(r+1)/(4r^2)+\eta}$.

[F4] [[lem-hecke-maass-burgess-distinct-prime-divisor-subpower-bound]]: For every $\eta>0$, $2^{\omega(m)}\ll_\eta m^\eta$ for all $m\ge1$.

[F5] [[lem-complete-period-of-nonprincipal-dirichlet-character-sums-to-zero]]: A nonprincipal Dirichlet character modulo $d$ sums to zero over each complete residue period modulo $d$.

[F6] [[thm-prime-factorisation-exists]]: Every positive integer is a finite product of primes, with 1 represented by the empty product.

[F7] [[cor-euclids-lemma-for-finite-products]]: If a prime divides a finite product of primes, it divides one of the factors.

[F8] [[def-prime]]: A positive divisor of a prime is 1 or the prime.

## Proof

**Proof technique:** direct.

1.1 First suppose $\chi_0$ is nonprincipal. Split $(N,N+H]$ into its residue classes $n\equiv l\pmod d$. If $\gcd(l,d)>1$, then $\chi_d(l)=0$ and that class contributes zero. Otherwise, writing $n=l+dm$ and choosing $c$ with $c\equiv d^{-1}l\pmod{k_0}$, multiplicativity and $\gcd(d,k_0)=1$ give $\chi_0(l+dm)=\chi_0(d)\chi_0(m+c)$. Thus each nonzero class contributes a constant of modulus at most one times a Burgess sum over a consecutive translated interval. If $H\ge d$, its length is at most $\lceil H/d\rceil\le2H/d$, so [F3] bounds the sum over all at most $d$ classes by $\ll_{\epsilon,r,d}H^{1-1/r}k_0^{(r+1)/(4r^2)+\epsilon/2}$. If $H<d$, the trivial bound $H\le d^{1/r}H^{1-1/r}$ gives the same estimate after enlarging the constant. [given, F1, F2, F3, algebra]

1.2 Now suppose $\chi_0$ is principal. Since $\chi$ is nonprincipal, $\chi_d$ is nonprincipal. Let $P=\{p:p\mid k_0\}$, finite by [F6] and [F7], since [F8] identifies any prime divisor with one of the prime factors. Then $\chi(n)=\chi_d(n)\prod_{p\in P}(1-\mathbf1_{p\mid n})$. Expanding this finite product gives $2^{\omega(k_0)}$ terms indexed by subsets $S\subseteq P$. For such a term let $e=\prod_{p\in S}p$; it is coprime to $d$, and the summation over $n\in(N,N+H]$ with $e\mid n$ becomes a consecutive interval of $m=n/e$. Its character factor is $\chi_d(e)\chi_d(m)$, so [F5] cancels every complete period of length $d$ and at most $d$ terms remain. Each term is therefore $O(d)$. By [F4], the whole sum is $O_{d,\epsilon}(k_0^{\epsilon/2})$. [given, F1, F2, F4, F5, F6, F7, F8, algebra]

2.1 Since $H\ge1$ and $k_0\ge1$, the bound from step 1.2 is at most $\ll_{\epsilon,r,d}H^{1-1/r}k_0^{(r+1)/(4r^2)+\epsilon}$. The step 1.1 estimate is also no larger than this after replacing its $\epsilon/2$ by $\epsilon$. These two cases prove the asserted uniform bound. [step 1.1, step 1.2, algebra] ∎

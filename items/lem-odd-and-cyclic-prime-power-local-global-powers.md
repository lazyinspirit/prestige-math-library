---
id: lem-odd-and-cyclic-prime-power-local-global-powers
kind: lemma
title: Odd and cyclic prime-power local-to-global powers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-number-field-infinitely-many-nonsplit-primes
  - thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for the supplied infinitely-many-nonsplit-primes theorem.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Song Wang, An Effective Version of the Grunwald–Wang Theorem
      url: https://thesis.caltech.edu/6803/1/Wang_s_2002.pdf
      locator: Chapter 1 §1.3, Proposition 1.9, steps 1–5, printed pp.21–24. The proof is reconstructed below; the noncyclic two-primary exceptional classification is not asserted.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a number field, $S$ a finite set of its places, and $m\ge1$. Put
$$P(m,S)=\{a\in K^\times:a\in K_v^{\times m}\text{ for every finite }v\notin S\}.$$
If $m$ is odd then $P(m,S)=K^{\times m}$. More generally, if $m=p^r$ is a prime power and $\operatorname{Gal}(K(\zeta_m)/K)$ is a cyclic $p$-group, then $P(m,S)=K^{\times m}$. In particular, this covers every cyclic extension $K(\zeta_{2^r})/K$. The theorem makes no assertion about the noncyclic two-primary exceptional case.

## Facts & Assumptions

**Given:** The number field, finite set, exponent and explicit choices in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] A nontrivial finite solvable Galois extension of number fields has infinitely many finite places that do not split completely. [[thm-number-field-infinitely-many-nonsplit-primes]]

[F2] The Galois group of a cyclotomic extension embeds in the unit group of the relevant exponent ring through its action on a primitive root. [[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]]

## Proof

**Proof technique:** split cyclic Kummer extensions at almost every place, then use norm descent of coprime degree.

1.1 Let $m=p^r$ and assume $\zeta_m\in K$. For $a\in P(m,S)$, the splitting field $E=K(\sqrt[m]{a})$ is a cyclic Galois extension: every conjugate of a chosen root is the root times a power of $\zeta_m$, and an automorphism is determined by this factor, giving an injection into $\mu_m$. If $v\notin S$, some $m$th root of $a$ lies in $K_v$; as $K$ already contains all $m$th roots of unity, all roots lie in $K_v$ and $v$ splits completely in $E$. The finite exceptional set also absorbs ramified places. By [F1], $E=K$, so $a\in K^{\times m}$. [A1, F1, given, construct, algebra]

2.1 Now suppose $L=K(\zeta_m)$ is cyclic of $p$-power degree. For every finite place $w$ of $L$ over $v\notin S$, the element $a$ is an $m$th power in $L_w$. Step 1.1 over $L$ gives $a=b^m$ for some $b\in L^\times$. The roots of $X^m-a$ are $b\zeta_m^i$. Each field $K(b\zeta_m^i)$ is an intermediate field of the cyclic $p$-extension $L/K$; these intermediate fields are linearly ordered by inclusion. Choose a smallest one, $E$. At every $v\notin S$ outside the finitely many ramified places, some root lies in $K_v$, so its intermediate field has a degree-one place over $v$ and, being Galois, splits completely there. Its subfield $E$ also splits completely. By [F1], $E=K$, so one root belongs to $K$ and $a\in K^{\times m}$. This proves the second assertion, including the trivial cyclotomic extension. [A1, F1, step 1.1, given, choose, construct, algebra]

3.1 Let $p$ be odd and $m=p^r$. Put $K_1=K(\zeta_p)$. By [F2], $[K_1:K]$ divides $p-1$, while $\operatorname{Gal}(K_1(\zeta_{p^r})/K_1)$ embeds in the kernel of reduction $(\mathbb Z/p^r\mathbb Z)^\times\to(\mathbb Z/p\mathbb Z)^\times$, which is cyclic of order $p^{r-1}$. The latter cyclicity follows from the binomial expansion: for odd $p$, $1+p$ has order $p^{r-1}$ modulo $p^r$, and there are exactly $p^{r-1}$ elements congruent to $1$ modulo $p$. Step 2.1 applied to $K_1$ gives $a=b^{p^r}$ for some $b\in K_1$. Taking the norm gives $a^{[K_1:K]}=N(b)^{p^r}$. The degree is coprime to $p^r$, so a Bézout identity expresses $a$ as a product of an integer power of $a^{p^r}$ and an integer power of $a^{[K_1:K]}$; thus $a$ is a $p^r$th power in $K$. [F2, step 2.1, given, construct, algebra]

4.1 If $m$ is odd, factor it as a product of pairwise coprime prime powers. Membership in $P(m,S)$ implies membership in each corresponding $P(p^r,S)$, so step 3.1 makes $a$ a $p^r$th power in $K$ for each prime power. For coprime positive $u,v$, Bézout gives $K^{\times u}\cap K^{\times v}=K^{\times uv}$: if $a=x^u=y^v$ and $ru+sv=1$, then $a=(y^r x^s)^{uv}$. Induction on the finite factorization proves $a\in K^{\times m}$. The reverse inclusion is immediate, and $m=1$ is trivial. For $p=2$, the cyclotomic group embeds in the $2$-group $(\mathbb Z/2^r\mathbb Z)^\times$, so any cyclic such group is automatically a cyclic $2$-group and step 2.1 applies. [F2, step 2.1, step 3.1, construct, algebra] ∎

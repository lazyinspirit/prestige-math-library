---
id: lem-dirichlet-character-factorization-under-crt
kind: lemma
title: CRT Factorization of Dirichlet Characters and Their Conductors
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-dirichlet-character-modulo-q
  - def-induced-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - thm-chinese-remainder-theorem
  - thm-dirichlet-character-primitive-induction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§2.2, the local character decomposition preceding equations (2.13)–(2.14), printed p. 11."
---

## Statement

Let $N=\prod_{p\mid N}p^{e_p}$ with $N\ge1$, and let $\chi$ be a Dirichlet
character modulo $N$. Put $q=\operatorname{cond}(\chi)$, so $q\mid N$, and
$s_p=\operatorname{ord}_p(q)$. Under the Chinese remainder isomorphism
$$\left(\mathbb Z/N\mathbb Z\right)^\times
\cong\prod_{p\mid N}\left(\mathbb Z/p^{e_p}\mathbb Z\right)^\times,$$
there are unique local Dirichlet characters $\chi_p$ modulo $p^{e_p}$ such
that $\chi=\prod_{p\mid N}\chi_p$ as arithmetic functions, with each local
character extended by zero on nonunits. The least exponent through which the
unit character $\chi_p$ factors is $s_p$; equivalently, its local conductor is
$p^{s_p}$.

## Statement references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

## Facts & Assumptions

**Given:** $N\ge1$ and a Dirichlet character $\chi$ modulo $N$.

[F1] [[def-dirichlet-character-modulo-q]]: a Dirichlet character is a homomorphism on the unit group modulo its modulus, extended by zero to nonunits.

[F2] [[thm-chinese-remainder-theorem]]: for pairwise-coprime moduli, the residue map to the product of residue rings is a bijection preserving addition, multiplication, zero, and one.

[F3] [[def-induced-dirichlet-character]]: induction to a larger modulus agrees with the primitive character on integers coprime to that modulus and is zero on its nonunits.

[F4] [[thm-dirichlet-character-primitive-induction]]: every Dirichlet character has a unique primitive ancestor, whose modulus is its conductor.

[F5] [[def-primitive-dirichlet-character-and-conductor]]: a character is primitive when it is not induced from a proper divisor of its modulus.

## Proof

**Proof technique:** direct.

1.1 The CRT map in [F2] restricts to a bijection of unit groups. If a residue $x$ modulo $N$ is a unit, its inverse maps to a componentwise inverse. Conversely, if the image of $x$ is a tuple of units, choose the tuple of inverses and use surjectivity to lift it to a residue $y$ modulo $N$; multiplicativity gives the image of $xy$ equal to one, and injectivity gives $xy=1$ modulo $N$. [given, F2, algebra, choose]

1.2 Transport the unit character $\chi$ through this group isomorphism. For each $p\mid N$, restrict it to the factor whose $p$-coordinate varies and whose other coordinates are one. Each restriction is a local Dirichlet character $\chi_p$, and a tuple in the product is the product of its single-coordinate tuples, so the transported character is $\prod_p\chi_p$. Restriction to each single-coordinate factor also proves uniqueness. On integers, if $m$ is a unit modulo $N$ this is the same factorization; if $m$ is not a unit, at least one local factor is zero and both sides are zero by [F1]. [F1, step 1.1, algebra]

1.3 Let $\chi^*$ be the primitive ancestor of $\chi$ modulo $q$ from [F4]. The same CRT construction factors $\chi^*$ into local characters. Since $\chi$ is induced from $\chi^*$ by [F3], its local factor at $p$ is the inflation of the local factor of $\chi^*$ from modulus $p^{s_p}$. If that factor descended to $p^c$ with $c<s_p$, CRT would make $\chi^*$ induced from the proper divisor $q/p^{s_p-c}$, contradicting [F5]. Thus the least local exponent is exactly $s_p$. [F3, F4, F5, step 1.2, contradiction] ∎

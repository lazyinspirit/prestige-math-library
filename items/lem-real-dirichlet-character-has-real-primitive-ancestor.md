---
id: lem-real-dirichlet-character-has-real-primitive-ancestor
kind: lemma
title: A real Dirichlet character has a real primitive ancestor
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-dirichlet-character-primitive-induction
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - thm-fundamental-theorem-of-arithmetic
  - thm-chinese-remainder-theorem
  - def-dirichlet-character-modulo-q
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jan-Hendrik Evertse, Analytic Number Theory: Prime Number Theory, Chapter 3"
      url: https://pub.math.leidenuniv.nl/~evertsejh/ant20-3.pdf
      locator: Section 3.2, induced characters, conductors and primitive characters, printed pp. 96–97; Theorem 3.2.6(iii) states the unique primitive ancestor and refers its proof to an exercise.
---

## Statement

Let $q\ge1$ be an integer and let $\chi$ be a Dirichlet character modulo $q$ whose values are all real. Let $\chi^*$ be its unique primitive ancestor, of conductor $d\mid q$. Then $\chi^*$ also takes only real values.

## Facts & Assumptions

**Given:** An integer $q\ge1$, a real-valued Dirichlet character $\chi$ modulo $q$, and its unique primitive ancestor $\chi^*$ of conductor $d\mid q$.

[F1] Every character has a unique primitive ancestor; if $\chi$ is induced from $\chi^*$, then $\chi(n)=\chi^*(n)$ whenever $(n,q)=1$ ([[thm-dirichlet-character-primitive-induction]], [[def-primitive-dirichlet-character-and-conductor]], [[def-induced-dirichlet-character]]).

[F2] Every integer $q\ge1$ has a factorization $q=\prod_{j=1}^t p_j^{e_j}$ with distinct primes $p_j$ and positive exponents $e_j$; the empty product is $1$ ([[thm-fundamental-theorem-of-arithmetic]]).

[F3] For pairwise-coprime positive moduli, any assigned residue classes are reductions of one residue class modulo their product ([[thm-chinese-remainder-theorem]]).

[F4] A Dirichlet character is zero on nonunits and is periodic modulo its modulus ([[def-dirichlet-character-modulo-q]]).

## Proof

**Given:** The data in the statement.

1.1 If $q=1$, then $d=1$ and the only character modulo $1$ is the principal character, so $\chi^*=\chi$ is real. Suppose henceforth $q>1$. Factor $q$ as in [F2] and write $d=\prod_{j=1}^t p_j^{f_j}$ with $0\le f_j\le e_j$. Fix any unit class $a$ modulo $d$, represented by an integer $a$. For each $j$, prescribe the residue $b_j\equiv a\pmod{p_j^{e_j}}$ if $f_j>0$, and prescribe $b_j\equiv1\pmod{p_j^{e_j}}$ if $f_j=0$. Each $b_j$ is a unit modulo $p_j^{e_j}$: in the first case $p_j\nmid a$, and in the second case $b_j=1$. [F1, F2, given, choose]

2.1 By [F3] there is a residue class $n$ modulo $q$ with $n\equiv b_j\pmod{p_j^{e_j}}$ for every $j$. It is a unit modulo $q$ because it is a unit modulo every prime-power factor. It also satisfies $n\equiv a\pmod d$: for $f_j>0$ the imposed congruence modulo $p_j^{e_j}$ implies the congruence modulo $p_j^{f_j}$, while indices with $f_j=0$ impose no condition. [F2, F3, step 1.1]

3.1 Since $\chi$ is induced from $\chi^*$, [F1] gives $\chi^*(a)=\chi^*(n)=\chi(n)\in\mathbb R$. This holds for every unit class $a$ modulo $d$; on nonunits $\chi^*$ is zero by [F4]. Thus every value of $\chi^*$ is real. [F1, F4, step 2.1] ∎

## Unit reduction diagram

The horizontal arrow is reduction of unit residue classes. Step 2.1 proves that it is surjective in this setting; [F1] says the two vertical character maps commute with it. The proof above does not rely on the diagram.

```tikzcd
(\mathbb Z/q\mathbb Z)^\times \arrow[r,two heads,"\mathrm{red}"] \arrow[dr,"\bar\chi"'] & (\mathbb Z/d\mathbb Z)^\times \arrow[d,"\bar\chi^*"] \\
& \mathbb R^\times
```

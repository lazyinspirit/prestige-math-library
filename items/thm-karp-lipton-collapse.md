---
id: thm-karp-lipton-collapse
kind: theorem
title: "The Karp--Lipton collapse"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-circuit-family-and-p-poly]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

If $\mathrm{NP}\subseteq\mathrm{P/poly}$, then the polynomial hierarchy
collapses to its second level:
$$\mathrm{PH}=\Sigma_2^p.$$
Here $\Sigma_2^p$ consists of languages expressible as
$x\in L\iff\exists u\,\forall v\,R(x,u,v)$ for a polynomial-time predicate
$R$ and polynomially bounded strings; $\Pi_2^p$ reverses the two quantifiers,
and $\mathrm{PH}$ is the union of the constant-alternation levels.

## Facts & Assumptions

**Given:** $\mathrm{NP}\subseteq\mathrm{P/poly}$.

[L1] $\mathrm{P/poly}$ permits one polynomial-size circuit independently at each input length, by [[def-circuit-family-and-p-poly]].

## Proof

**Proof technique:** direct.

1.1 Let $R(x,y,z)$ be any polynomial-time predicate with polynomially bounded $z$, and form the NP language $$E_R=\{\langle x,y,w\rangle:\text{some extension }z\succeq w \text{ satisfies }R(x,y,z)\}.$$ By the hypothesis, $E_R$ has polynomial-size decision circuits. Successively querying whether the current prefix has a satisfying extension, first with a $0$ appended and then with a $1$ appended, composes polynomially many copies of these decision circuits into a polynomial-size search circuit. On input $(x,y)$ for which some witness exists, it outputs an actual $z$ satisfying $R(x,y,z)$. [L1, given, construct]

2.1 Let $L\in\Pi_2^p$, so $x\in L\iff\forall y\,\exists z\,R(x,y,z)$. For each fixed input length, step 1.1 supplies a single polynomial-size search circuit $C$ which works for every pair $(x,y)$ of the relevant padded lengths. Therefore $$ x\in L\iff\exists C\ \forall y\; R\bigl(x,y,C(x,y)\bigr). $$ If $x\in L$, choose the search circuit from step 1.1; conversely, any circuit satisfying the right side supplies the required witness for every $y$. The predicate merely evaluates $C$ and checks $R$, so it is polynomial-time and the right side is a $\Sigma_2^p$ formula. [L1, step 1.1]

3.1 Thus $\Pi_2^p\subseteq\Sigma_2^p$; the reverse containment after complementing gives equality of the second levels. Replacing each inner $\Pi_2^p$ block of a higher alternating formula by its $\Sigma_2^p$ form and merging adjacent existential and universal blocks inductively collapses every constant-alternation level to $\Sigma_2^p$. Consequently $\mathrm{PH}=\Sigma_2^p$. [step 2.1] ∎

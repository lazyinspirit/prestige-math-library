---
id: lem-primitive-gauss-sum-twist
kind: lemma
title: "Primitive Gauss-sum twist"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-gauss-sum-dirichlet-character, def-primitive-dirichlet-character-and-conductor]
proof_strategy: cases
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Lemma 16.3"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

If $\chi$ is primitive modulo $q$, then for every integer $m$,
$$\sum_{a\bmod q}\chi(a)e(am/q)=\overline{\chi(m)}\tau(\chi).$$

## Facts & Assumptions

**Given:** A primitive $\chi$ modulo $q$ and $m\in\mathbb Z$.

[F1] The normalization of $\tau(\chi)$ is fixed above ([[def-gauss-sum-dirichlet-character]]).

[F2] Primitivity excludes induction from a proper divisor ([[def-primitive-dirichlet-character-and-conductor]]).

## Proof

**Proof technique:** cases.

1.1 If $(m,q)=1$, substitution $b=am$ permutes the residue classes and gives the sum as $\overline{\chi(m)}\tau(\chi)$. [F1, given, assume-case unit]

2.1 If $g=(m,q)>1$, choose a unit $u\equiv1\pmod{q/g}$ for which $\chi(u)\ne1$; otherwise the unit character factors modulo $q/g$, contrary to [F2]. Multiplication by $u$ leaves $e(am/q)$ unchanged and multiplies the sum by $\chi(u)$, so the sum is zero. [F2, step 1.1, assume-case nonunit]

3.1 In the second case $\chi(m)=0$, so the right side is also zero; the two cases prove the formula. [step 2.1, cases-exhaustive] ∎

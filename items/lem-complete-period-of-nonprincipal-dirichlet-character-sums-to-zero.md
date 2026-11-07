---
id: lem-complete-period-of-nonprincipal-dirichlet-character-sums-to-zero
kind: lemma
title: "A nonprincipal Dirichlet character sums to zero over a complete period"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-dirichlet-character-modulo-q, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, Number Theory I, Lecture 18"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
      locator: "§18, Dirichlet characters and orthogonality relations."
    - title: "Lior Bary-Soroker, Math 539: Analytic Number Theory Lecture Notes"
      url: "https://personal.math.ubc.ca/~lior/teaching/1516/539_W16/539_notes.pdf"
      locator: "§2.2.3, Lemma 67, PDF pp. 20–21: complete-period sum of a nonprincipal character vanishes by orthogonality."
---

## Statement

Let q≥1 and let χ be a nonprincipal Dirichlet character modulo q. Then Σ_{a mod q}χ(a)=0.

## Statement references

[Andrew V. Sutherland, Number Theory I, Lecture 18, §18, Dirichlet characters and orthogonality relations.](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

[Lior Bary-Soroker, Math 539: Analytic Number Theory Lecture Notes, §2.2.3, Lemma 67, PDF pp. 20–21.](https://personal.math.ubc.ca/~lior/teaching/1516/539_W16/539_notes.pdf)

## Facts & Assumptions

**Given:** An integer $q\ge1$ and a nonprincipal Dirichlet character $\chi$ modulo $q$.

[F1] [[def-dirichlet-character-modulo-q]]: A Dirichlet character is multiplicative on the unit group modulo $q$ and is extended to integers by zero on nonunits.

[F2] [[def-unit-group-modulo-n-and-euler-totient]]: The residue classes coprime to $q$ form the unit group $(\mathbb Z/q\mathbb Z)^\times.

## Proof

**Proof technique:** direct.

1.1 Since $\chi$ is nonprincipal, there is a unit $b\bmod q$ with $\chi(b)\ne1$. Multiplication by $b$ permutes all residue classes modulo $q$, because multiplication by its inverse is the inverse permutation. Therefore, writing $S=\sum_{a\bmod q}\chi(a)$, multiplicativity and the zero extension in [F1] give $S=\sum_{a\bmod q}\chi(ba)=\chi(b)S$. [given, F1, F2, choose, algebra]

1.2 Since $\chi(b)\ne1$, the identity in step 1.1 implies $(1-\chi(b))S=0$ with nonzero first factor, so $S=0$. If $q=1$, no nonprincipal character exists and the implication is vacuous. [step 1.1, algebra] ∎

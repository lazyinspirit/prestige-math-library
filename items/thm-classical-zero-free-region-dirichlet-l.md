---
id: thm-classical-zero-free-region-dirichlet-l
kind: theorem
title: "Classical zero-free region for primitive Dirichlet L-functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-dirichlet-l-function
  - def-exceptional-zero-of-a-real-primitive-dirichlet-l-function
  - def-primitive-dirichlet-character-and-conductor
  - def-dirichlet-character-modulo-q
  - def-principal-dirichlet-character
  - lem-dirichlet-bounded-family-common-zero-free-region
  - thm-natural-logarithm-laws
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  The original public Statement retains AC, Countable Choice and Dependent Choice.
  This direct proof invokes none of them: its bounded Dirichlet family supplier
  is choice-free and the remaining comparisons are finite and pointwise.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. R. Weiss, The least prime ideal"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf"
      locator: "Section 1, Theorem 1.9 and printed pp. 59–61; bounded-conductor Hecke-family region."
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., revised by Hugh L. Montgomery, Chapter 14"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Printed pp. 88–95, complete independent proof of the primitive Dirichlet zero-free region and real exceptional-zero qualification."

---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. There is an absolute constant $c>0$ such that if $\chi$ is a primitive Dirichlet character modulo $q\ge1$, then the region
$$\left\{s=\sigma+it:\ \sigma>1-\frac{c}{\log(q(|t|+3))}\right\}$$
contains no zero of $L(s,\chi)$, except that when $\chi$ is real and nonprincipal it may contain one real simple zero. The possible zero is an exceptional real zero in the sense defined for such characters. The assertion is per character and makes no cross-character uniqueness assertion.

## Statement references

[Weiss, Section 1, Theorem 1.9](https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf)

[Davenport, Chapter 14, complete section](https://djvu.online/file/Rh8B8jEVpxFgk)

## Facts & Assumptions

**Given:** The original AC, Countable Choice and Dependent Choice hypotheses, and a primitive Dirichlet character $\chi$ modulo the positive integer $q$.

[A1] The three public hypotheses are retained verbatim but are unused in this proof. Their meanings are the existing choice definitions ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

[F1] A Dirichlet character is a homomorphism on the finite unit group, extended by zero off the units. The principal character is one on units, and primitive has its stated conductor meaning. The associated $L$-series defines the Dirichlet $L$-function on real part greater than one ([[def-dirichlet-character-modulo-q]], [[def-principal-dirichlet-character]], [[def-primitive-dirichlet-character-and-conductor]], [[def-dirichlet-l-function]]).

[F2] Put $a=10^{-17}$. For every real $Q,H\ge2$, the product over all primitive conductors $d\le Q$ has at most one zero occurrence in $\beta>1-a/\log(Q(H+3))$, $|\gamma|\le H$, with multiplicities and characters counted separately. Every such occurrence is a real simple zero $\beta\in(0,1)$ of a real nonprincipal primitive character. This literal supplier has no choice hypothesis ([[lem-dirichlet-bounded-family-common-zero-free-region]]).

[F3] Natural logarithm is increasing, positive above one, has its product law and $\log1=0$ ([[thm-natural-logarithm-laws]]).

[F4] For a real nonprincipal primitive character modulo $q>1$, a real zero $\beta\in(0,1)$ is an exceptional real zero in the stated sense; the definition itself asserts no existence or uniqueness ([[def-exceptional-zero-of-a-real-primitive-dirichlet-l-function]]).

## Proof

1.1 Fix the absolute constant $c=a/4$ from [F2]. For an arbitrary real $t$, put $z=|t|+3\ge3$, $Q=\max(q,2)$ and $H=\max(|t|,2)$. Then $Q,H\ge2$, $q\le Q$, $|t|\le H$, $Q\le2q$ and $H+3\le2z$. By [F3], $$0<\log(Q(H+3))\le\log(4qz)<3\log(qz),$$ because $4<9\le(qz)^2$. Consequently $c/\log(qz)<a/\log(Q(H+3))$. Every zero in the claimed region at this particular height lies strictly within the public bounded region of [F2]. These choices are explicit pointwise formulas, and the original assumptions [A1] introduce no additional proof input. [A1, F1, F2, F3, given, construct, algebra]

2.1 Apply [F2] to such a zero using the parameters in step 1.1. The zero must be real and simple, its real part must belong to $(0,1)$, and its character must be real and nonprincipal. Thus every nonreal zero and every zero of a nonreal or principal character is excluded from the entire curved region. In particular conductor one is covered directly: all integers have the same residue modulo one, so its unit group is the one-element group. A homomorphism maps the identity to one; hence [F1] makes its sole character principal, and no zero of that character is in the claimed region. Any remaining character has $q>1$, and its possible real zero is exceptional by [F4]. No separate Hecke correspondence, line-one theorem, zeta region or lower bound for $L(1,\chi)$ is required. [F1, F2, F4, step 1.1, algebra]

3.1 All real zeros in the claimed region for this fixed character have $t=0$, hence the same threshold $\beta>1-c/\log(3q)$. Use the SINGLE pair $Q=\max(q,2)$ and $H=2$. The parameter comparison of step 1.1 at $t=0$ puts every such zero in this same bounded family region. By [F2], that family contains at most one occurrence, counting multiplicity; therefore the fixed character has at most one such real zero, and it is simple. Step 2.1 excludes all other possibilities and identifies the permitted exception in the exact original sense [F4]. This proves the full original per-character Statement for every positive $q$ and every real height, with one fixed absolute $c>0$ and without asserting cross-character uniqueness for the curved regions. [F2, F3, F4, step 1.1, step 2.1, construct, algebra] ∎

## Source notes

The original Statement, its three choice hypotheses and source references are preserved exactly. The present minimal deduction uses only the public choice-free bounded Dirichlet-family core and elementary logarithmic padding; it does not reopen that accepted proof or use the earlier Hecke/Weiss route, any class-number argument, or the effective real-L1 estimate. The full Weiss parent, including its separate quadratic-field/conductor/Stark lower-bound chain, keeps its prior held status and is not a premise. The original source-reading history remains unchanged; no fresh reading of the cited books/articles is claimed for this replacement deduction.

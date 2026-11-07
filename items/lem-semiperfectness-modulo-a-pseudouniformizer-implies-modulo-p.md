---
dependency_level: 2
id: lem-semiperfectness-modulo-a-pseudouniformizer-implies-modulo-p
kind: lemma
title: Frobenius modulo a pseudouniformizer and modulo p
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-dependent-choice
- def-perfectoid-field-and-its-tilt
- def-separated-and-complete-filtered-module
proof_strategy: direct
sources:
  references:
  - title: Peter Schneider, The perfectoid open unit disk (2015), §1; complete local
      reconstruction of the adic and filtered arguments
    url: https://www.uni-muenster.de/FB10/u/pschnei/publ/misc/perfectoid-disk.pdf
---

## Statement

Assume Dependent Choice. Let $K$ be a perfectoid field of residue characteristic $p$, let $0<|\varpi|_K<1$ with $p\in\varpi K^\circ$, and let $S$ be a commutative $K^\circ$-algebra complete and Hausdorff for an ideal $I$ containing the image of $\varpi$. Then Frobenius on $S/\varpi S$ is surjective if and only if Frobenius on $S/pS$ is surjective. Both quotients are $\mathbb F_p$-algebras. If $\operatorname{char}K=p$, the second assertion means that Frobenius on $S$ itself is surjective. No flatness or absence of torsion in $S$ is assumed.

## Statement references

[Schneider, The perfectoid open unit disk, §1](https://www.uni-muenster.de/FB10/u/pschnei/publ/misc/perfectoid-disk.pdf)

## Facts & Assumptions

**Given:** Dependent Choice and the objects and hypotheses of the Statement.

[A1] Dependent Choice supplies a sequence of successive choices from a serial relation. ([[def-dependent-choice]])

[F1] A perfectoid field has nondiscrete real-valued value group and residue characteristic $p$; its valuation ring is $K^\circ$. ([[def-perfectoid-field-and-its-tilt]])

[F2] An $I$-adically complete Hausdorff ring is the inverse limit of its quotients by the powers of $I$, and every $I$-adic Cauchy sequence converges. ([[def-separated-and-complete-filtered-module]])

## Proof

1.1 Since $pS\subseteq\varpi S$, surjectivity of Frobenius on $S/pS$ implies its surjectivity on $S/\varpi S$. For the reverse implication assume Frobenius on $S/\varpi S$ is surjective. Nondiscreteness of the value group gives $t\in K^\circ$ with $|\varpi|_K^{1/p}<|t|_K<1$: its logarithmic subgroup has arbitrarily small positive elements, which after negation give values arbitrarily close to $1$ from below. Then $\varpi/t^p\in K^\circ$, so $\varpi S\subseteq t^pS$, and Frobenius on $S/t^pS$ is surjective as well. Some positive power of $t$ lies in $\varpi K^\circ$, since $|t|_K<1$; hence the powers of $t$ tend to zero $I$-adically in $S$. [F1, given, algebra, choose]

2.1 Fix $a\in S$. Under [A1], successively choose $b_j,a_{j+1}\in S$ with $a_j=b_j^p+t^pa_{j+1}$, starting with $a_0=a$, using the surjectivity modulo $t^p$ from step 1.1. In the $\mathbb F_p$-algebra $S/pS$, finite substitution and the binomial identity give $a\equiv c_N^p+t^{pN}a_N\pmod{pS}$, where $c_N=\sum_{j=0}^{N-1}t^jb_j$. [A1, step 1.1, given, choose, algebra]

3.1 If $\operatorname{char}K=0$, choose $N$ with $|t|_K^{pN}\le|p|_K$. Then $t^{pN}\in pK^\circ$, so the last term in step 2.1 belongs to $pS$, proving $a\equiv c_N^p\pmod{pS}$. If $\operatorname{char}K=p$, one has $p=0$ in $S$ and the same finite identity holds exactly. The sums $c_N$ are Cauchy $I$-adically because the powers of $t$ tend to zero. By [F2] they converge to $c\in S$. The errors $t^{pN}a_N$ tend to zero $I$-adically, regardless of $a_N$, since $I^m$ is an ideal and contains $t^{pN}$ for all large $N$. Continuity of the polynomial map $z\mapsto z^p$ gives $a=c^p$. Thus Frobenius is surjective in either characteristic, and the converse in step 1.1 completes the equivalence. The zero algebra is included. [F2, step 1.1, step 2.1, given, algebra] ∎

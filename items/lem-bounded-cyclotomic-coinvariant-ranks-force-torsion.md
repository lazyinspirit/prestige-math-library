---
id: lem-bounded-cyclotomic-coinvariant-ranks-force-torsion
kind: lemma
title: Bounded cyclotomic coinvariant ranks force compact Iwasawa modules to be torsion
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: constructive
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-p-adic-weierstrass-preparation-for-iwasawa-power-series
  - lem-weierstrass-division-for-p-adic-power-series
  - def-axiom-of-choice
  - def-countable-choice
sources:
  references:
    - title: Romyar Sharifi, Iwasawa Theory
      url: https://www.math.ucla.edu/~sharifi/notes/iwasawa-ch02.html
      locator: Section 2.4, Proposition 2.4.12, the coinvariant rank formula for finitely generated modules; compact finite generation is added and proved locally.
---

## Statement

Assume AC and Countable Choice. Let $p$ be a prime, $R=\mathbb Z_p\llbracket T\rrbracket$, and $\omega_n=(1+T)^{p^n}-1$. Let $M$ be a compact profinite abelian pro-$p$ group with a continuous $R$-module structure, with $1+T$ acting through the continuous procyclic $\mathbb Z_p$ action. Suppose $M/\omega_mM$ is finitely generated over $\mathbb Z_p$ for one $m$, and that the $\mathbb Z_p$-ranks of $M/\omega_nM$ are uniformly bounded for all sufficiently large $n$. Then $M$ is finitely generated and torsion over $R$.

## Statement references

[[thm-p-adic-weierstrass-preparation-for-iwasawa-power-series]]

[[lem-weierstrass-division-for-p-adic-power-series]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** AC and Countable Choice, $p$, $R$, $M$, $m$ and the uniform rank bound as in the Statement.

[F1] Every nonzero $f\in R$ can be written $p^auP$ with $u$ a unit and $P$ a distinguished monic polynomial. [[thm-p-adic-weierstrass-preparation-for-iwasawa-power-series]]

[F2] Division by a distinguished monic degree-$d$ polynomial gives $R/(P)\cong\mathbb Z_p^d$ on the polynomial-remainder basis. [[lem-weierstrass-division-for-p-adic-power-series]]

[A1] The stated choice assumptions are available for the profinite quotient and finite generator selections. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Proof technique:** Compact Nakayama via finite continuous quotients, then Weierstrass rank comparison.

1.1 Put $\mathfrak m=(p,T)$. Since $\omega_m\in\mathfrak m$, $M/\mathfrak mM$ is a finite quotient of the finitely generated $\mathbb Z_p$-module $M/\omega_mM$. The subgroup $\mathfrak mM=pM+TM$ is closed as the sum of two compact images. Choose finitely many lifts of a basis of $M/\mathfrak mM$ over $\mathbb F_p$, and let $Q$ be their $R$-span. The continuous map $R^d\to M$ has image $Q$, so $Q$ is compact and closed. Thus $V=M/Q$ is compact and satisfies $V=\mathfrak mV$. [A1, given, construct, algebra]

2.1 Every nonzero element of $V$ survives in a finite continuous $R$-module quotient. Indeed choose an open subgroup avoiding it; continuity and compactness let one intersect the finitely many translates in its finite $\Gamma$-orbit, producing an invariant open subgroup. For any finite quotient $U$, some $p^a$ kills $U$ and some $\gamma^{p^b}$ acts trivially. In characteristic $p$ the identity $(1+T)^{p^b}-1\equiv T^{p^b}$ gives $T^{p^b}U\subseteq pU$; hence a sufficiently high power of $(p,T)$ kills $U$. But $U=\mathfrak mU$ forces $U=0$. All separating finite quotients vanish, so $V=0$ and $M$ is finitely generated over $R$. Retain the quotient from step 1.1. [A1, step 1.1, construct, algebra]

3.1 Suppose the fraction-field rank of $M$ is $r>0$. Choose $r$ elements of $M$ forming a fraction-field basis. They define an injection $R^r\hookrightarrow M$ with finitely generated torsion cokernel $C$. Multiplying the finitely many annihilators of its generators gives a nonzero $f$ with $fC=0$. Write $f=p^auP$ by [F1]. By [F2], $R/(P)$ is free over $\mathbb Z_p$ of rank $\deg P$, so $C[1/p]$ is a finite-dimensional $\mathbb Q_p$-vector space of some dimension $D$, including when $P=1$. Use the finite generation obtained in step 2.1. [F1, F2, step 2.1, construct, algebra]

4.1 Reduction of $0\to R^r\to M\to C\to0$ modulo $\omega_n$ gives $C[\omega_n]\to(R/\omega_n)^r\to M/\omega_nM\to C/\omega_nC\to0$. For the first map lift an individual $c\in C[\omega_n]$, write $\omega_n$ times the lift in $R^r$, and reduce modulo $\omega_n$; different lifts give the same class. Since $\omega_n$ is distinguished monic of degree $p^n$, [F2] gives $R/\omega_n\cong\mathbb Z_p^{p^n}$. The left image has $\mathbb Z_p$-rank at most $D$ after inverting $p$. Hence $\operatorname{rank}_{\mathbb Z_p}(M/\omega_nM)\ge rp^n-D$, contradicting the uniform bound when $r>0$. Thus $r=0$ and the finitely generated module $M$ is torsion over the domain $R$. This completes the construction from step 3.1. [F2, step 3.1, algebra, discharge-construct] ∎

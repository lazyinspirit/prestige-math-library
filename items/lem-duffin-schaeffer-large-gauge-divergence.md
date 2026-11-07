---
dependency_level: 5
id: lem-duffin-schaeffer-large-gauge-divergence
kind: lemma
title: Reduced approximation for gauges supported on values at least one half
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-duffin-schaeffer-reduced-event-overlap
- lem-reduced-approximation-zero-one-law
- thm-euler-totient-product-formula
- thm-cauchy-schwarz-and-the-euclidean-norm
- thm-lebesgue-measure-is-a-complete-measure
- def-countable-choice
- thm-continuity-from-above-for-measures
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
  - title: A. D. Pollington and R. C. Vaughan, The k-dimensional Duffin and Schaeffer
      conjecture, Mathematika37(1990),190–200, §§2–3
    url: https://personal.science.psu.edu/rcv4/personal/Publications/kdimensional_duffin_and_schaeffer_conjecture.pdf
proof_strategy: direct
---

## Statement

Assume Countable Choice. Suppose $\psi:\mathbb N\to[0,\infty)$ has $\psi(q)=0$ or $\psi(q)\ge1/2$ for every $q$, and $\sum_q\psi(q)\varphi(q)/q=\infty$. Then its reduced rational-approximation limsup set has Lebesgue measure $1$.

## Statement references

[Koukoulopoulos–Maynard, Lemma5.2, printed p.264; the proof below avoids the cited external input](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] Reduced events satisfy the local measure lower bound and overlap bound in [[lem-duffin-schaeffer-reduced-event-overlap]].

[F2] Every reduced limsup has measure zero or one ([[lem-reduced-approximation-zero-one-law]]).

[F3] $1\le\varphi(q)\le q$, and totients have their prime product ([[thm-euler-totient-product-formula]]).

[F4] Finite Cauchy–Schwarz holds ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F5] Under Countable Choice, Lebesgue measure is a complete measure, and is continuous from above for decreasing measurable sets of finite initial measure ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-continuity-from-above-for-measures]]).

## Proof

1.1 Discard $q=1$, which does not affect a limsup or series divergence. Put $a(q):=\min(\psi(q),q/(2\varphi(q)))$ and $w_q=a(q)\varphi(q)/q=\min(\psi(q)\varphi(q)/q,1/2)$. The series $\sum_qw_q$ diverges: either infinitely many terms were clipped, each to $1/2$, or only finitely many were clipped and the tail is unchanged. At nonzero terms $a(q)\ge1/2$, since both entries of the minimum are at least $1/2$ by [F3]. Also $a(q)/q\le1/(2\varphi(q))\le1/2$. Write $E_q$ for its reduced event; by [F1], $w_q\le\lambda(E_q)\le2w_q$. The upper bound is finite subadditivity of interval lengths. [given, F1, F3, construct, algebra]

2.1 For distinct supported $q,r$, put $g=\gcd(q,r)$ and $D=\max(ra(q),qa(r))/g$. Then $D\ge\max(q/g,r/g)/2$. The coprime integers $q/g,r/g$ each have at most one distinct prime factor greater than $D$, because two such factors would have product exceeding that integer. Thus the overlap product in [F1] has at most two factors and is at most $(3/2)^2<4$. Consequently $\lambda(E_q\cap E_r)\ll w_qw_r$, with an absolute constant. Zero-weight terms are null and satisfy the same bound. [F1, step 1.1, algebra]

3.1 For every integer $X\ge2$, choose $Y\ge X$ minimal with $1\le\sum_{X\le q\le Y}w_q\le3/2$; divergence and $w_q\le1/2$ ensure existence. Put $Q=\sum_{X\le q\le Y}\mathbf1_{E_q}$ and $U=\bigcup_{X\le q\le Y}E_q$. Then $\int Q\ge1$, while steps 1.1–2.1 give $\int Q^2\ll\sum w_q+(\sum w_q)^2\ll1$. Partition $U$ into its finitely many measurable membership-pattern atoms. On each atom $Q$ is constant; finite Cauchy–Schwarz [F4] applied with weights equal to the atom measures gives $(\int Q)^2\le\lambda(U)\int Q^2$. Hence $\lambda(U)\ge c>0$ with one absolute $c$, independent of $X$. [F4, F5, step 1.1, step 2.1, algebra]

4.1 Every tail union $\bigcup_{q\ge X}E_q$ has measure at least $c$ by step 3.1. Continuity from above [F5] gives $\lambda(\limsup E_q)\ge c$. By [F2] this measure is $1$. Since $a(q)\le\psi(q)$, the original reduced limsup contains this full-measure set and is itself measurable with measure at most $1$. Its measure is therefore $1$, as asserted. [F2, F5, step 1.1, step 3.1, algebra] ∎

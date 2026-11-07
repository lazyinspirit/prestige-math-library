---
id: thm-polya-vinogradov-partial-sum-bound
kind: theorem
title: Pólya–Vinogradov bound for partial sums of a primitive nonprincipal character
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-gauss-sum-dirichlet-character
  - lem-primitive-gauss-sum-twist
  - thm-primitive-gauss-sum-norm
  - lem-dirichlet-character-values
  - def-primitive-dirichlet-character-and-conductor
  - lem-sine-chord-and-lipschitz-bounds
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-monotonicity-of-the-integral
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Harold Davenport, Multiplicative Number Theory, §23
      url: https://djvu.online/file/Rh8B8jEVpxFgk
      locator: Printed pp. 135–137, proof of the Pólya–Vinogradov inequality.
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Chapter 6 §4, printed pp. 50–53, primitive Gauss-sum twist and norm.
---




## Statement

There is an absolute constant $C>0$ such that for every integer $q\ge3$, every primitive nonprincipal Dirichlet character $\chi$ modulo $q$, and every integer $N\ge1$,
$$\left|\sum_{n=1}^{N}\chi(n)\right|\le C\sqrt q\log q.$$

## Statement references

Harold Davenport, *Multiplicative Number Theory*, §23, printed pp. 135–137.

Ian Petrow, *Introduction to Analytic Number Theory*, Chapter 6 §4, printed pp. 50–53.

## Facts & Assumptions

**Given:** An integer $q\ge3$, a primitive nonprincipal Dirichlet character $\chi$ modulo $q$, and an integer $N\ge1$.

[F1] The Gauss sum is $\tau(\psi)=\sum_{a\bmod q}\psi(a)e(a/q)$, where $e(u)=e^{2\pi i u}$ ([[def-gauss-sum-dirichlet-character]]).

[F2] For every integer $m$, a primitive character satisfies $\sum_{a\bmod q}\psi(a)e(am/q)=\overline{\psi(m)}\tau(\psi)$ ([[lem-primitive-gauss-sum-twist]]).

[F3] If $\psi$ is primitive modulo $q$, then $|\tau(\psi)|^2=q$ ([[thm-primitive-gauss-sum-norm]]).

[F4] A Dirichlet character vanishes on nonunits and has modulus one on unit classes ([[lem-dirichlet-character-values]]).

[F5] A character is primitive when it does not descend from a proper divisor of its modulus; conjugating all its values preserves this property ([[def-primitive-dirichlet-character-and-conductor]]).

[F6] For $0\le u\le\pi/2$, $\sin u\ge2u/\pi$ ([[lem-sine-chord-and-lipschitz-bounds]]).

[F7] The natural logarithm is increasing, satisfies $\log'(x)=1/x$, and $\log3>0$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]]).

[F8] The integral preserves pointwise inequalities between integrable functions on an interval ([[thm-monotonicity-of-the-integral]]).

[F9] For real $t$, $|e^{2\pi i t}|=1$ and $|1-e^{2\pi i t}|=2|\sin(\pi t)|$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Given:** The data and hypotheses in [F1]–[F4].

1.1 By [F5], $\overline\chi$ is primitive: a proper-divisor induction for $\overline\chi$ would conjugate to one for $\chi$. Apply [F2] to $\overline\chi$ with $m=n$. Since $\overline{\overline\chi(n)}=\chi(n)$, this gives $\chi(n)=\tau(\overline\chi)^{-1}\sum_{a\bmod q}\overline\chi(a)e(an/q)$ for every integer $n$; the denominator is nonzero by [F3]. [F2, F3, F5, given, algebra]

2.1 Sum the identity of step 1.1 over $1\le n\le N$ and use the triangle inequality and [F4]. The residue $a=0$ contributes zero, so $$\left|\sum_{n=1}^{N}\chi(n)\right|\le q^{-1/2}\sum_{a=1}^{q-1}\left|\sum_{n=1}^{N}e(an/q)\right|.$$ [F3, F4, step 1.1, algebra]

3.1 For $1\le a<q$, put $z=e(a/q)$. By [F9], $|z|=1$ and $z\ne1$, so the geometric-sum identity gives $$\left|\sum_{n=1}^Nz^n\right|=\left|\frac{z(1-z^N)}{1-z}\right|\le\frac2{|1-z|}=\frac1{|\sin(\pi a/q)|}.$$ Put $m=\min(a,q-a)\le q/2$. By [F6], $\sin(\pi m/q)\ge2m/q$, so each term is at most $q/(2m)$. Pairing the residues with the same $m$ gives $$\sum_{a=1}^{q-1}\left|\sum_{n=1}^{N}e(an/q)\right|\le q\sum_{1\le m\le q/2}m^{-1}.$$ For $K=\lfloor q/2\rfloor$, monotonicity [F8] and [F7] give $\sum_{m=2}^K1/m\le\int_1^K dx/x=\log K$, hence the displayed sum is at most $q(1+\log q)$. [F6, F7, F8, F9, step 2.1, algebra]

4.1 Substitution into step 2.1 yields $|\sum_{n=1}^{N}\chi(n)|\le\sqrt q(1+\log q)$. Since $q\ge3$ and $\log q\ge\log3>0$ by [F7], $1+\log q\le(1+1/\log3)\log q$, proving the theorem with an absolute constant. [F7, step 2.1, step 3.1, algebra] ∎


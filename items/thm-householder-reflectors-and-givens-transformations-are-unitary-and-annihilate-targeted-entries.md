---
id: thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
kind: theorem
title: "Householder reflectors and Givens transformations are unitary and can annihilate prescribed entries"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-householder-reflector, def-real-and-complex-givens-transformations, def-linear-isometry-and-orthogonal-or-unitary-operator]
aliases: []
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Theorem 3.4.1 and Givens rotations section"
      url: "https://fncbook.com/house/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Least squares and QR"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html"
---

## Statement

Let $\mathbb F=\mathbb R$ or $\mathbb C$.

1. Every Householder reflector $H_v=I-2vv^*$ is orthogonal or unitary.
2. For every nonzero $z\in \mathbb F^m$, there is a Householder reflector $H$
   such that $Hz=\alpha e_1$ with $|\alpha|=\|z\|_2$.
3. For every pair $(a,b)\in \mathbb F^2$ not both zero, there is a real or
   complex Givens transformation $G$ such that
   $$G\binom{a}{b}=\binom{\alpha}{0}$$
   with $|\alpha|=(|a|^2+|b|^2)^{1/2}$.

## Facts & Assumptions

**Given:** A field $\mathbb F=\mathbb R$ or $\mathbb C$, a unit vector $v$, a
nonzero vector $z\in\mathbb F^m$, and a pair $(a,b)\in\mathbb F^2$ with not
both entries zero.

[L1] Householder reflectors and Givens transformations are defined in
[[def-householder-reflector]] and
[[def-real-and-complex-givens-transformations]].

[L2] An orthogonal or unitary operator is an invertible linear isometry
([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

## Proof

**Proof technique:** direct matrix multiplication and explicit parameter choice.

1.1 For $H_v=I-2vv^*$ with $v^*v=1$, one has $H_v^*=I-2vv^*=H_v$ and $H_v^2=I-4vv^*+4v(v^*v)v^*=I$. Hence $H_v^*H_v=I$, so $H_v$ is orthogonal or unitary. [L1, L2, algebra]

1.2 In the real case, for $(a,b)\ne(0,0)$ set $r=(a^2+b^2)^{1/2}$, $c=a/r$, and $s=b/r$. Then $c^2+s^2=1$ and $$ \begin{pmatrix}c&s\\-s&c\end{pmatrix}\binom{a}{b} =\binom{r}{0}. $$ In the complex case, if $a=0$ take $c=0$ and $s=b/|b|$; otherwise write $a=\phi|a|$ with $|\phi|=1$, set $r=(|a|^2+|b|^2)^{1/2}$, $c=|a|/r$, and $s=\phi\overline b/r$. Then $c^2+|s|^2=1$ and $$ \begin{pmatrix}c&s\\-\overline s&c\end{pmatrix}\binom{a}{b} =\binom{\phi r}{0}. $$ Thus a Givens transformation annihilates the second entry while preserving the Euclidean norm. [L1, algebra]

2.1 If $z$ is already a scalar multiple of $e_1$, choose any Householder reflector fixing $e_1$: for $m=1$, $H=[-1]$ works; for $m>1$, take $v=e_2$, so $H_ve_1=e_1$. Otherwise set $\alpha:=e^{i\theta}\|z\|_2$, where $e^{i\theta}=z_1/|z_1|$ when $z_1\ne 0$ and $e^{i\theta}=1$ when $z_1=0$, and put $w:=z-\alpha e_1$, $v:=w/\|w\|_2$. Then $v^*z=(\|z\|_2^2-\overline\alpha z_1)/\|w\|_2=\|w\|_2/2$, so $H_vz=z-2v(v^*z)=z-w=\alpha e_1$. [L1, step 1.1, algebra]

3.1 Step 1.1 proves claim 1, step 2.1 proves claim 2, and step 1.2 proves claim 3. [step 1.1, step 2.1, step 1.2] ∎

---
id: lem-qc-rz-candidate-norm-integer
kind: lemma
title: Size and residue of the Rz candidate norm integer
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-cyclotomic-bullet-automorphism
  - def-qc-denominator-exponent
  - lem-qc-cyclotomic-scaled-grid-finiteness
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Lemmas 8.4 and 8.5 and Appendix D
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 5
---

## Statement

Let $u\in D$ satisfy $|u|,|u^\bullet|\le1$, put
$\xi=1-u^\dagger u$, and write $\xi^\bullet\xi=n/2^\ell$ with
$n\in\mathbb Z$ and least $\ell\ge0$. Then $n\ge0$, and either $n=0$ or
$n\equiv1\pmod8$. If $u\ne0$ has least square-root-of-two denominator
exponent $k$, then $n\le4^k$.

## Facts & Assumptions

**Given:** The displayed $u,\xi,n,\ell$ and the convention
$z^\dagger=\bar z$ for scalars.

[F1] [[def-qc-dyadic-cyclotomic-ring]] supplies the unique integral power
basis of $O$ and its localization $D$.

[F2] [[def-qc-cyclotomic-bullet-automorphism]] fixes $i$, negates $\sqrt2$,
and commutes with conjugation.

[F3] For nonzero $u$ satisfying the two disk bounds,
[[lem-qc-cyclotomic-scaled-grid-finiteness]] gives
$k=\operatorname{sde}(u)\ge0$ and bounds its scaled integral coefficients.
[[def-qc-denominator-exponent]] defines this least exponent and sets
$\operatorname{sde}(0)=-\infty$.

## Proof


1.1 Put $\delta=1+\omega$ and $q=1+\sqrt2$. Direct multiplication gives $\delta^2=q\sqrt2\omega$, $\delta^4=2q^2i$, and $\delta^{-1}=(1-\omega+\omega^2-\omega^3)/2$. Since $q^{-1}=\sqrt2-1\in O$, these identities give $D=O[\delta^{-1}]$. Choose the least integer $h\ge0$ such that $u=x/\delta^h$ with $x=a\omega^3+b\omega^2+c\omega+d\in O$. Multiplying $x$ by the displayed inverse of $\delta$ shows that $x/\delta\in O$ exactly when $a+b+c+d$ is even: each numerator coefficient is a signed sum of the four coefficients, and all four sums have the same parity. Thus if $h>0$, this sum is odd. [F1, F2, given, choose, algebra]

2.1 If $h=0$, the two disk conditions give $|x|^2+|x^\bullet|^2=2(a^2+b^2+c^2+d^2)\le2$. Consequently $x=0$ or $x=\pm\omega^j$ for $0\le j\le3$. If $h=1$, the same identity and $|\delta|^2+|\delta^\bullet|^2=4$ give $a^2+b^2+c^2+d^2\le2$; its parity is odd by minimality, so it equals $1$. Then $x$ is again a root of unity, contradicting $|u^\bullet|^2=1/(2-\sqrt2)>1$. Thus the cases $h\le1$ give only $u=0$ (where $n=1$) and the eight roots of unity (where $n=0$). [F1, F2, step 1.1, algebra]

3.1 For $h\ge2$, multiplication gives $x^\dagger x=A+B\sqrt2$, where $A=a^2+b^2+c^2+d^2$ and $B=cd+bc+ab-da$. The odd sum of coefficients makes $A$ odd; also $B\equiv(a+c)(b+d)\equiv0\pmod2$ since the two factors have opposite parity. Write $(\delta^\dagger\delta)^h=(2+\sqrt2)^h=C+D\sqrt2$. Both $C,D$ are even, since $(2+\sqrt2)^2=6+4\sqrt2$. It follows that $\xi=(X+Y\sqrt2)/(2+\sqrt2)^h$, with $X=C-A$ odd and $Y=D-B$ even. Taking real conjugates gives $\xi^\bullet\xi=(X^2-2Y^2)/2^h$. Its numerator is $1\pmod8$, hence odd, so this denominator is already minimal. This proves the residue assertion; nonnegativity follows from $0\le\xi,\xi^\bullet\le1$. [F2, step 1.1, step 2.1, algebra]

4.1 For nonzero $u$, write $u=v/(\sqrt2)^k$, $v\in O$. Then $\xi=(2^k-v^\dagger v)/2^k$, and $2^k-v^\dagger v\in\mathbb Z[\sqrt2]$ by the same multiplication as in step 3.1. Therefore $2^{2k}\xi^\bullet\xi$ is an integer, whence $\ell\le2k$. The inequality $0\le\xi^\bullet\xi\le1$ now yields $n\le2^\ell\le4^k$. [F1, F2, F3, step 3.1, algebra] ∎


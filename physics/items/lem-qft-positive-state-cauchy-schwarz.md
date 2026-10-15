---
id: lem-qft-positive-state-cauchy-schwarz
kind: lemma
title: Positive-state Cauchy–Schwarz and left radical
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-qft-involutive-algebra-state]
dependency_roles:
  def-qft-involutive-algebra-state: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Konrad Schmüdgen, An Invitation to Unbounded Representations of *-Algebras on Hilbert Space, Graduate Texts in Mathematics 285, Springer Nature (2020), §2.4 Proposition 2.33 and §4.4 Lemma 4.35"
      url: "https://doi.org/10.1007/978-3-030-46366-3"
      locator: "§2.4, printed pp. 20–21, Hermiticity and Cauchy–Schwarz; §4.4, printed p. 78, null left ideal and quotient pairing."
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, lecture notes, arXiv:1904.04051v2 (2019), §2.3"
      url: "https://arxiv.org/html/1904.04051"
      locator: "§2.3, state positivity, Cauchy–Schwarz and the null left ideal used in the GNS construction."
---

## Form conventions

A sesquilinear form $B:A\times A\to\mathbb C$ is taken to be linear in its first variable and conjugate-linear in its second. It is **Hermitian** when $B(a,b)=\overline{B(b,a)}$ for all $a,b\in A$, **positive semidefinite** when $B(a,a)\in[0,\infty)$ for every $a\in A$, and has **radical**

$$\operatorname{rad}B:=\{a\in A:B(a,b)=0\text{ for every }b\in A\}.$$

For a Hermitian form this left radical also equals $\{a\in A:B(b,a)=0\text{ for every }b\in A\}$.

## Statement

Let $A$ be a unital complex star algebra and let $\omega$ be a positive normalized state on $A$ ([[def-qft-involutive-algebra-state]]). Define $q(a):=\omega(a^*a)$ and $N_\omega:=\{a\in A:q(a)=0\}$. Then

$$|\omega(b^*a)|^2\le q(a)q(b)\qquad(a,b\in A).$$

The form $(a,b)_\omega:=\omega(b^*a)$ is Hermitian and positive semidefinite, $N_\omega$ is its radical and a complex linear subspace, and $N_\omega$ is a left ideal: $c a\in N_\omega$ whenever $a\in N_\omega$ and $c\in A$.

## Facts & Assumptions

**Given:** A unital complex star algebra $A$ and a positive normalized state $\omega:A\to\mathbb C$.

[F1] [[def-qft-involutive-algebra-state]]: multiplication is complex-bilinear and associative, $(ab)^*=b^*a^*$, and $\omega$ is complex-linear with $\omega(1_A)=1$ and real nonnegative $\omega(a^*a)$ for every $a\in A$.

## Proof

**Proof technique:** direct.

1.1 Put $X:=\omega(a^*b)$ and $Y:=\omega(b^*a)$. Positivity makes both $q(a+b)=q(a)+X+Y+q(b)$ and $q(a+ib)=q(a)+iX-iY+q(b)$ real; their imaginary parts give $\operatorname{Im}(X+Y)=0$ and $\operatorname{Re}(X-Y)=0$, hence $Y=\overline X$. Thus $(a,b)_\omega=\omega(b^*a)$ is Hermitian. [given, F1, algebra]

2.1 Suppose $q(b)>0$. For every $z\in\mathbb C$, positivity and the star-algebra laws give $0\le q(a+zb)=q(a)+zX+\overline z\,\overline X+|z|^2q(b)$. Taking $z=-\overline X/q(b)$ yields $0\le q(a)-|X|^2/q(b)$, so $|\omega(b^*a)|^2=|Y|^2=|X|^2\le q(a)q(b)$. [given, F1, step 1.1, algebra]

3.1 Suppose $q(b)=0$. If $X\ne0$, taking $z=-t\overline X$ for real $t>q(a)/(2|X|^2)$ makes $q(a+zb)=q(a)-2t|X|^2<0$, contradicting positivity. Hence $X=Y=0$, so the same Cauchy–Schwarz inequality holds when $q(b)=0$; if instead $q(a)=0$ and $q(b)>0$, step 2.1 forces $Y=0$ as well. [given, F1, step 1.1, step 2.1, algebra]

4.1 If $a\in N_\omega$, steps 2.1 and 3.1 give $(a,b)_\omega=0$ for every $b\in A$; conversely $(a,a)_\omega=0$ means $a\in N_\omega$. Thus $N_\omega$ is exactly the radical and is a linear subspace. For $c\in A$, set $d:=c^*ca$. Applying Cauchy–Schwarz to $a,d$ gives $|\omega(d^*a)|^2\le q(a)q(d)=0$, while $d^*a=a^*c^*ca=(ca)^*(ca)$; therefore $ca\in N_\omega$. [F1, step 2.1, step 3.1, algebra] ∎

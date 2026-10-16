---
id: cor-qc-cyclotomic-prime-norm-solvability
kind: corollary
title: Prime norm numerators congruent to one modulo eight are solvable
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - thm-qc-cyclotomic-norm-equation-decision
  - lem-qc-cyclotomic-euclidean-factorization-and-units
  - thm-first-supplement-to-quadratic-reciprocity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Proposition C.26
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 4
---

## Statement

Let $\xi\in\mathbb Z[\sqrt2,1/2]$ be positive at both real embeddings.
If $\xi^\bullet\xi=p/2^\ell$ with $\ell\ge0$ and a rational prime
$p\equiv1\pmod8$, then $t^\dagger t=\xi$ has a solution in
$\mathbb Z[\omega,1/2]$. The complete finite-time norm solver returns a
solution on every such input. The same conclusion holds when
$\xi^\bullet\xi=1/2^\ell$. No runtime bound is implied.

## Facts & Assumptions

**Given:** $p,\ell,\xi$ as above; $O=\mathbb Z[\omega]$,
$\delta=1+\omega$, and $\lambda=1+\sqrt2$.

[F1] [[thm-qc-cyclotomic-norm-equation-decision]]: after clearing a rational
square denominator, solvability is equivalent to even exponents at all
conjugation-fixed prime classes. Its proof gives $\delta$ prime,
$\delta^\dagger\sim\delta$, and $\delta^4=2i\lambda^2$.

[F2] [[lem-qc-cyclotomic-euclidean-factorization-and-units]] supplies
unique factorization, effective associates and real unit correction.

[F3] [[thm-first-supplement-to-quadratic-reciprocity]] implies that
$-1$ is a square modulo every prime congruent to one modulo four.

## Proof



1.1 Choose $r$ large enough that $\eta=4^r\xi\in\mathbb Z[\sqrt2]$ and $a=4r-\ell\ge0$. Then $\eta^\bullet\eta=2^a p$. Any prime $\pi$ of $O$ dividing $\eta$ divides the rational integer $2^a p$, hence divides $2$ or $p$ by the prime-divisor property. The only prime class over $2$ is that of $\delta$, by [F1]. [F1, F2, given, algebra, choose]

1.2 No prime $\pi$ dividing $p$ has a conjugation-fixed associate class. Indeed, choose an integer $b$ with $b^2\equiv-1\pmod p$ by [F3], so $\pi\mid(b+i)(b-i)$. Thus $\pi$ divides at least one of $b+i,b-i$. If its conjugate were associate to itself, conjugating this divisibility would make it divide both factors, and hence $2i$. Since $i$ is a unit, $\pi\mid 2i$ implies $\pi\mid2$. As $p$ is odd, $1=2((p+1)/2)-p$ with $(p+1)/2\in\mathbb Z$. Thus $\pi\mid1$, a contradiction. The required $b$ can also be found by the finite search $0\le b<p$. [F2, F3, given, algebra, construct]

1.3 Every nonzero element of $\mathbb Z[\sqrt2]$ has even $\delta$-valuation in $O$. To prove this, direct multiplication gives $\delta^2=\sqrt2\,\omega\lambda$, so $v_\delta(\sqrt2)=2$ and $v_\delta(2)=4$. An odd integer $c_0$ is not divisible by $\delta$: since $1=2((c_0+1)/2)-c_0$ and $\delta\mid2$, divisibility of $c_0$ by the prime $\delta$ would imply $\delta\mid1$. Hence, for each nonzero integer $c$, writing $c=2^r c_0$ with $c_0$ odd gives $v_\delta(c)=4r=4v_2(c)$. For nonzero integers $c,d$, the summands of $c+d\sqrt2$ therefore have valuations $4v_2(c)$ and $4v_2(d)+2$. Their residues modulo $4$ are distinct, so the valuation of their sum is their minimum: after factoring out the lower power, the remaining lower-valuation term is nonzero modulo $\delta$, whereas the other is zero. This minimum is even. When a coefficient is zero, the valuation of the remaining summand is even as well. Apply this to $\eta$ to conclude that its $\delta$-exponent is even. [F1, F2, algebra]

2.1 By steps 1.1 and 1.2, the only possible conjugation-fixed prime class in $\eta$ is $\delta$, and step 1.3 proves its exponent is even. The criterion of [F1] therefore constructs a solution, and its complete terminating solver returns one. [F1, step 1.1, step 1.2, step 1.3]

3.1 If the norm numerator is $1$, clear the denominator as in step 1.1; then $\eta^\bullet\eta=2^a$. Every prime divisor of $\eta$ therefore lies in the sole class $\delta$. Its exponent is even by step 1.3, so [F1] again constructs and returns a solution. This includes $\ell=0$, where a positive real unit is corrected by the same unit-square step. [F1, F2, step 1.1, step 1.3, algebra] ∎

---
id: lem-qc-rz-scaled-grid-growth
kind: lemma
title: Exponent growth of the Rz scaled grid
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-cyclotomic-bullet-automorphism
  - def-qc-denominator-exponent
  - lem-qc-cyclotomic-scaled-grid-finiteness
  - lem-integer-part
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Lemmas 5.23 and 5.24
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 5
---

## Statement

Let $\theta\in\mathbb R$, $0<\varepsilon<1/2$, and let $u_1,u_2,\ldots$ be the distinct points in
$\mathcal G=\{u\in D:|u|,|u^\bullet|\le1,\ \operatorname{Re}(e^{i\theta/2}u)\ge1-\varepsilon^2/2\}$,
ordered by nondecreasing least denominator exponent $k_j$.
Put $K=\lceil\log_2(512/\varepsilon^2)\rceil$. Then this sequence is infinite,
$k_2\le K$, and
$$k_j\le k_2+2\lceil\log_2 j\rceil\qquad(j\ge1).$$
More generally, if two bounded convex plane regions $A,B$ contain disks of
radii $r,R>0$, then for every integer $k$ the simultaneous grid
$\{u\in(\sqrt2)^{-k}O:u\in A,\ u^\bullet\in B\}$ has at least two points
whenever $2^k rR\ge128$.

## Facts & Assumptions

**Given:** The rings $O=\mathbb Z[\omega]$, $D=O[1/2]$, and the displayed
regions and ordering.

[F1] [[def-qc-cyclotomic-bullet-automorphism]] fixes $i$ and sends $\sqrt2$
to $-\sqrt2$; [[def-qc-dyadic-cyclotomic-ring]] contains
$\mathbb Z[\sqrt2]+i\mathbb Z[\sqrt2]$ in $O$.

[F2] [[def-qc-denominator-exponent]] defines least denominator exponents;
[[lem-qc-cyclotomic-scaled-grid-finiteness]] makes every bounded exponent
layer of the two unit disks finite.

[F3] [[lem-integer-part]]: for every real $x$, the integer
$\lfloor x+1/2\rfloor$ is within $1/2$ of $x$.

## Proof


1.1 Write $q=1+\sqrt2$ and $C=(1+\sqrt2)/2$. For any integer $m$, the unit (using $q^{-1}=\sqrt2-1$ for negative $m$) $\lambda=q^m\in\mathbb Z[\sqrt2]$ satisfies $|\lambda^\bullet|=\lambda^{-1}$. For arbitrary real $x,y$, solve the two real linear equations $\lambda(a+\sqrt2 b)=x$ and $\lambda^\bullet(a-\sqrt2 b)=y$ for real $a,b$ and round each to an integer by [F3]. The resulting $\alpha\in\mathbb Z[\sqrt2]$ satisfies $|\alpha-x|\le C\lambda$ and $|\alpha^\bullet-y|\le C\lambda^{-1}$. Applying this independently to real and imaginary coordinates gives, for arbitrary complex centers $z,w$, a $v\in O$ such that $|v-z|\le\sqrt2 C\lambda$ and $|v^\bullet-w|\le\sqrt2 C\lambda^{-1}$. [F1, F3, given, construct, algebra]

2.1 Set $s=2^{k/2}$. Choose the integer $m$ so that $4\sqrt2 C/(sR)\le\lambda<4q\sqrt2 C/(sR)$. If $s^2rR\ge128$, then $32C^2q=56+40\sqrt2<128$ implies $\sqrt2 C\lambda<sr/4$, while $\sqrt2 C\lambda^{-1}\le sR/4$. Apply step 1.1 to centers of disks in $sA$ and $(\sqrt2)^{k\bullet}B$; the latter disk has radius $sR$, since $|(\sqrt2)^{k\bullet}|=s$. Both $v$ and $v+\lambda$ lie in the first disk: their errors are bounded by $sr/4$ and $sr/4+\lambda<sr/4+sr/(4\sqrt2 C)<sr$. Their bullet images likewise lie in the second disk, since the corresponding errors are at most $sR/4$ and $sR/4+sR/(4\sqrt2 C)<sR$. Dividing by $(\sqrt2)^k$ gives two distinct simultaneous grid points. [F1, step 1.1, choose, algebra]

3.1 Put $\delta=\varepsilon^2/2$. The disk centered at $(1-\delta/2)e^{-i\theta/2}$ with radius $r=\delta/2=\varepsilon^2/4$ lies in the unit disk and in the half plane $\operatorname{Re}(e^{i\theta/2}u)\ge1-\delta$ by the triangle inequality. Take this as the disk in $A$ and the full unit disk as $B$. Since $2^Kr\ge128$, step 2.1 gives two candidates of exponent at most $K$. Every candidate is nonzero because its displayed real part is positive; [F2] therefore gives nonnegative exponents and finitely many candidates through each fixed exponent. In particular $k_2\le K$. [F2, step 2.1, algebra]

4.1 If $u\ne v$ are grid points of exponent at most $k_2$, then for every integer $\ell\ge0$ the $2^\ell+1$ points $w_h=(h/2^\ell)u+(1-h/2^\ell)v$, $0\le h\le2^\ell$, are distinct. They have exponent at most $k_2+2\ell$, and both their original and bullet images lie in the required convex regions, because rational coefficients are fixed by $\bullet$. Thus the grid is infinite. Together with finite layers this proves the existence of its stated enumeration, and taking $\ell=\lceil\log_2 j\rceil$ gives the exponent bound. [F1, F2, step 3.1, algebra] ∎


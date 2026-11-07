---
id: lem-rankin-covering-system-lower-bound
kind: lemma
title: "Rankin's three-stage residue covering lower bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 3
deps:
  - def-prime-residue-covering-length
  - def-iterated-logarithms-and-prime-gap-scale
  - def-prime-counting-function
  - def-prime
  - thm-third-mertens-theorem-for-primes
  - thm-chebyshev-prime-counting-bounds
  - lem-elementary-rankin-smooth-number-upper-bound
  - thm-standard-representatives-modulo-n
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - lem-prime-residue-covering-length-is-finite
  - lem-integer-part
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29, especially the three-stage Rankin construction"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
    - title: "James Maynard, Large gaps between primes, Section 2"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf"
---

## Statement

For real $z\ge2$, let $Y(z)$ be the greatest nonnegative integer $H$ for which there are residues $a_p$ modulo each prime $p\le z$ such that every integer $1\le h\le H$ is congruent to at least one selected residue $a_p$ modulo its prime. There are constants $c>0$ and $z_0\ge2$ such that, for every real $z\ge z_0$,
$$Y(z)\ge c\,\frac{z\log z\,\log_3 z}{(\log_2 z)^2}.$$

## Statement references

[[def-prime-residue-covering-length]]

[[lem-elementary-rankin-smooth-number-upper-bound]]

[Koukoulopoulos, *The Distribution of Prime Numbers*, Chapter 29](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)

[Maynard, “Large gaps between primes,” Section 2](https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf)

## Facts & Assumptions

**Given:** A sufficiently large real $z$; $Y(z)$ as in the Statement; and the prime-counting and iterated-logarithm conventions in the cited Definitions.

[F1] $Y(z)$ is a finite attained maximum of coverable nonnegative integer lengths, and a residue assignment covers $[1,H]\cap\mathbb Z$ exactly when every such $h$ is congruent to one of its assigned residues ([[def-prime-residue-covering-length]], [[lem-prime-residue-covering-length-is-finite]]).

[F2] For all sufficiently large $t$, there are absolute constants $c_1,c_2>0$ with $c_1t/\log t\le\pi(t)\le c_2t/\log t$ ([[thm-chebyshev-prime-counting-bounds]], [[def-prime-counting-function]]).

[F3] For all sufficiently large $t$, $\prod_{p\le t}(1-1/p)\ll1/\log t$ ([[thm-third-mertens-theorem-for-primes]]).

[F4] If $x\ge y\ge3$, $u=\log x/\log y\ge e$, and $\log u\le(\log y)/4$, then $\Psi(x,y)\le Cx\log y\exp(-u\log u+Cu)$ for an absolute $C$; in particular, for fixed $R\ge4$ and $P=\exp((\log X)\log_3X/(R\log_2X))$, $\Psi(3X,P)\le X(\log X)^{1-R+o(1)}$ as $X\to\infty$ ([[lem-elementary-rankin-smooth-number-upper-bound]]).

[F5] For each positive prime $q$ and integer $n$, there is a unique representative $a$ with $0\le a<q$ and $n\equiv a\pmod q$ ([[thm-standard-representatives-modulo-n]]).

[F6] The natural logarithm is continuous and obeys product and quotient laws; $\log t=\int_1^t ds/s$ for $t>0$ ([[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]]).

[F7] For each real $t$, $\lfloor t\rfloor$ is the unique integer $m$ with $m\le t<m+1$ ([[lem-integer-part]]).

[L1] As the variable tends to infinity, $f\sim g$ means $f/g\to1$, $f=o(g)$ means $f/g\to0$, and $f\ll g$ means $|f|\le Cg$ for some constant $C$ on a sufficiently large range.

## Proof

**Proof technique:** direct.

1.1 Write $L=\log z$, $L_2=\log_2z$, and $L_3=\log_3z$. Fix a positive constant $c_0$ to be made sufficiently small below, put $H=\left\lfloor c_0zLL_3/L_2^2\right\rfloor$, set $Y_*=zL_3/L_2$, and set $y=\exp(\log(H/3)\log_3(H/3)/(4\log_2(H/3)))$. By [F7], the floor differs from its argument by less than $1$, so $H\sim c_0zLL_3/L_2^2$. The logarithm laws and continuity in [F6] then give $H/Y_*\sim c_0L/L_2$, $\log(H/Y_*)\sim L_2$, $\log Y_*\sim L$, and $\log y\sim LL_3/(4L_2)$. Thus $H/Y_*\to\infty$ and $3\le y<Y_*<z$ for sufficiently large $z$. [F6, F7, L1, given, algebra, choose]

2.1 Apply [F4] with $X=H/3$ and $R=4$. For these parameters, $\Psi(H,y)\le(H/3)(\log(H/3))^{-3+o(1)}$ and hence $\Psi(H,y)/\log y=o(z/L)$. Indeed, $\log H\sim L$, $\log y\sim LL_3/(4L_2)$, and $H\sim c_0zLL_3/L_2^2$. [F4, L1, step 1.1, algebra]

3.1 First choose residue $a_p=0$ for every prime $p$ with $y<p\le Y_*$. Let $\mathcal N$ be the integers $1\le n\le H$ not covered by these choices. If $n\in\mathcal N$ is not $y$-smooth, it has a prime divisor $q>y$; since no prime in $(y,Y_*]$ divides $n$, this divisor satisfies $q>Y_*$. Writing $n=mq$ gives $m\le H/Y_*$. Counting all such pairs $(m,q)$, with $q\le H/m$, yields $$|\mathcal N|\le\Psi(H,y)+\sum_{1\le m\le H/Y_*}\pi(H/m).$$ For every summand, $H/m\ge Y_*$, so [F2] and the integral comparison $\sum_{m\le T}1/m\le1+\log T$ give $|\mathcal N|\ll\Psi(H,y)+H\log(H/Y_*)/\log Y_*$. [F2, F6, L1, step 1.1, step 2.1, algebra]

4.1 Process the finitely many primes $p\le y$ in increasing order. At each prime, among its $p$ residue classes choose one containing the largest number of integers in the current residual set; at least a $1/p$ fraction is thereby covered. After these choices, the residual set $\mathcal N'$ satisfies $|\mathcal N'|\le|\mathcal N|\prod_{p\le y}(1-1/p)$. By [F3] and step 3.1, $$|\mathcal N'|\ll\frac{\Psi(H,y)}{\log y}+\frac{H\log(H/Y_*)}{\log Y_*\log y}.$$ The selection is finite and uses no choice axiom. [F1, F3, L1, step 3.1, choose]

5.1 By step 1.1, $$\frac{H\log(H/Y_*)}{\log Y_*\log y}\sim\frac{4c_0z}{\log z}.$$ Step 2.1 makes the first term in step 4.1 $o(z/\log z)$. Hence there is an absolute $C_0>0$ such that $|\mathcal N'|\le(4C_0c_0+o(1))z/\log z$. On the other hand, [F2] gives $$\#\{p:Y_*<p\le z\}=\pi(z)-\pi(Y_*)\ge(c_1-o(1))\frac z{\log z},$$ because $Y_*/z=L_3/L_2\to0$ and $\log Y_*/\log z\to1$. Choose $c_0<c_1/(16C_0)$ and then take $z$ sufficiently large; there are more primes in $(Y_*,z]$ than elements of $\mathcal N'$. [F2, L1, step 1.1, step 2.1, step 4.1, choose, algebra]

6.1 Enumerate the finite residual integers as $n_1,\ldots,n_\ell$ and distinct primes in $(Y_*,z]$ as $q_1,\ldots,q_k$, where $k>\ell$ by step 5.1. For each $j\le\ell$, choose the representative $a_{q_j}$ of $n_j$ modulo $q_j$ from [F5]; set the unused residues in $(Y_*,z]$ to $0$. Each residual integer is now covered, while all integers removed in the first two stages are already covered. Thus a residue assignment covers $[1,H]\cap\mathbb Z$, so $Y(z)\ge H$. Since $H\sim c_0z\log z\log_3z/(\log_2z)^2$, decreasing the positive constant proves the Statement for every sufficiently large $z$. [F1, F5, step 4.1, step 5.1, choose, construct] ∎


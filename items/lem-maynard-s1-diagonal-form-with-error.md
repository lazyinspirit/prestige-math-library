---
dependency_level: 2
id: lem-maynard-s1-diagonal-form-with-error
kind: lemma
title: "Complete finite cross-array diagonalization and the S1 asymptotic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-maynard-selberg-coordinate-transform-and-coefficient-bounds
  - lem-squarefree-multiplicative-logarithmic-sums
  - lem-maynard-finite-divisor-weight-congruence-expansion
  - def-maynard-variational-quantity-mk
justified_by: []
proof_strategy: direct
axiom_use: "Finite arithmetic, Riemann integrals and absolutely convergent numerical series; no choice axiom is added."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Section5, Lemma5.1 equations(5.3)–(5.13); generic finite cross-array identity also supplies the prime-coordinate version of Lemma5.2."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory II, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
      locator: "Sections22.1–22.2, printed pp.323–341; source-backed local adaptation, not an imported theorem."
---

## Statement

Let $k\ge2$, $R>1$, and let $W$ contain every prime at most $y>3$. Let $\lambda_d$ be a real array supported on $\prod_i d_i<R$ squarefree and coprime to $W$. For either $\chi(p)=p$ or $\chi(p)=p-1$ on primes outside $W$, extend $\chi$ and $h(p)=\chi(p)-1$ multiplicatively on squarefree integers and put
$$U_r=\left(\prod_i\mu(r_i)h(r_i)\right) \sum_{r_i\mid d_i\ \forall i}\frac{\lambda_d}{\prod_i\chi(d_i)},\quad Q_\chi=\sum_{\substack{d,e\\(d_i,e_j)=1\ (i\ne j)}} \frac{\lambda_d\lambda_e}{\prod_i\chi([d_i,e_i])}.$$
There is the following exact finite identity. Sum over mutually coprime squarefree variables $u_i,s_{ij}$, $i\ne j$, all coprime to $W$; terms with zero $U$ are omitted. Set $A_i=u_i\prod_{j\ne i}s_{ij}$ and $B_i=u_i\prod_{j\ne i}s_{ji}$. Then
$$Q_\chi=\sum_{u,s} \left(\prod_i\frac{\mu(u_i)^2}{h(u_i)}\right) \left(\prod_{i\ne j}\frac{\mu(s_{ij})}{h(s_{ij})^2}\right)U_AU_B. \tag{1}$$
All $U_r$ vanish off the same product-squarefree support as $\lambda$. If $\lambda_d$ also vanishes unless $d_i=1$ for $i$ outside a fixed active set $E$, then $U_r=0$ unless those $r_i=1$.

For $y=\log\log\log N$, $W=\prod_{p\le y}p$, $a=\varphi(W)/W$, $R=N^\alpha$, $L=\log R$, fixed $\alpha>0$ and $d=|E|\ge1$, (1) implies
$$Q_\chi=\sum_r\frac{U_r^2}{\prod_i h(r_i)} +O_k\left(\frac{U_{\max}^2(aL)^d}{y}\right). \tag{2}$$
For no active coordinates the identity is exact without error.

In particular fix $0<\alpha<1/2$, a smooth $\Phi\in C_c^\infty(\{t_i>0,\sum t_i<1\})$, and fixed distinct integer shifts $H$. Define $Y_r=\Phi(\log r/L)$ on the product-squarefree support coprime to $W$, zero otherwise, and define $\lambda$ by [[lem-maynard-selberg-coordinate-transform-and-coefficient-bounds]]. Choose any $v$ with $(v+h_i,W)=1$ for all $i$. For $w(n)=(\sum_{d_i\mid n+h_i}\lambda_d)^2$ set
$$S_1=\sum_{N\le n<2N,\ n\equiv v\ (W)}w(n),\quad C_N=\frac{Na^kL^k}{W},\quad K_*=(1+\log\log(3WR^k))^2.$$
Then, writing $Y=\|\Phi\|_\infty$,
$$S_1=C_N I_k(\Phi)+O_{k,H,\Phi,\alpha}\left(C_N\left(\frac1y+\frac{K_*}{aL}\right)+Y^2R^2L^{4k}\right) =C_N(I_k(\Phi)+o(1)). \tag{3}$$

## Facts & Assumptions

**Given:** The finite data, followed by the asymptotic specialization in the Statement. $U_{\max}=\max_r|U_r|$, zero for an empty array.

[F1] [[lem-maynard-selberg-coordinate-transform-and-coefficient-bounds]] gives finite inversion, its product-squarefree support and $\lambda_{\max}\ll_k YL^k$ for large $R$, with at most $R(1+\log R)^{k-1}$ supported tuples.

[F2] [[lem-squarefree-multiplicative-logarithmic-sums]] gives the uniform smooth sums for $1/\varphi$, $1/\prod(p-2)$, the reciprocal-square full sums and tails, and the pairwise-coprime tensor estimate with $K_*/(aL)\to0$.

[F3] [[lem-maynard-finite-divisor-weight-congruence-expansion]] gives the exact finite CRT expansion with at most $\sum|\lambda_d\lambda_e|$ endpoint error.

## Proof

1.1 On squarefree arguments the prime-by-prime identity $1+h(p)=\chi(p)$ gives [given, algebra]
$$\frac1{\chi([d_i,e_i])}=\frac1{\chi(d_i)\chi(e_i)}\sum_{u_i\mid d_i,e_i}h(u_i).$$
Also $1_{(d_i,e_j)=1}=\sum_{s_{ij}\mid d_i,e_j}\mu(s_{ij})$, since the squarefree divisor sum is a product of $1-1$. Substitute both finite identities into $Q_\chi$. A term now has $u_i\mid d_i,e_i$ and $s_{ij}\mid d_i,e_j$. [given, algebra]

1.2 Now specialize to the smooth $Y$, so for $\chi(p)=p$ the array $U$ equals $Y$ by [F1]. For large $N$, $y>\max_{i,\ell}|h_i-h_\ell|$. A shared prime of $[d_i,e_i]$ and $[d_j,e_j]$ lies outside $W$ and would divide $h_i-h_j$ if the congruences were compatible. This is impossible since its prime divisors are at most the fixed diameter and hence in $W$. Conversely, if there are no cross common primes, all $W,[d_i,e_i]$ are pairwise coprime, and [F3] gives compatibility and modulus $W\prod_i[d_i,e_i]$. Therefore [F1, F3, given, algebra]
$$S_1=(N/W)Q_\chi+O\left(\sum_{d,e}|\lambda_d\lambda_e|\right).$$
The tuple-count and coefficient bounds in [F1] bound the error by $O_k(Y^2R^2L^{4k})$. [F1, F3, given, algebra]

2.1 All these array variables are squarefree and coprime to $W$. They may moreover be restricted to be mutually coprime before the inner $d,e$ sums are performed. Indeed a prime in $u_i$ specifies the edge $(i,i)$ between its coordinate in $d$ and its coordinate in $e$, while a prime in $s_{ij}$ specifies edge $(i,j)$. A prime belongs to at most one coordinate of each supported original tuple $d,e$. Thus it cannot belong to two distinct edge variables: those two edges differ in a row or a column and force a repeated prime in $\prod d_i$ or $\prod e_i$. This would make $\lambda_d\lambda_e=0$. This establishes precisely the coprimality restriction in (1), not an unrestricted array identity. [step 1.1, given, algebra]

3.1 Under those restrictions the remaining inner conditions are exactly $A_i\mid d_i$ and $B_i\mid e_i$. The definition of $U$ evaluates the two sums as $U_A/\prod_i(\mu(A_i)h(A_i))$ and $U_B/\prod_i(\mu(B_i)h(B_i))$. Each diagonal variable $u_i$ occurs once in each denominator, and each cross variable $s_{ij}$ occurs once on each side. Consequently its coefficient becomes $\mu(u_i)^2/h(u_i)$ or $\mu(s_{ij})/h(s_{ij})^2$, respectively. This proves (1). A nonzero inner sum requires $r_i\mid d_i$ on supported $d$, proving the asserted support of $U$ and its inactive-coordinate vanishing. All nonzero arrays are finite because their variables divide a product of size less than $R$. [step 1.1, step 2.1, given, algebra]

4.1 The all-$s_{ij}=1$ terms in (1) are exactly the diagonal sum in (2); the remaining restriction that the $u_i$ are pairwise coprime is already enforced by $U_u=0$ off its support. In every other nonzero term some active cross variable $s_{ij}>y$, since it is coprime to $W$. Each inactive coordinate forces $u_i=1$ and every incident cross variable equal to one. Drop all remaining coprimality and product restrictions for an absolute majorant. The $d$ free $u$ sums are each [F2, step 3.1, algebra]
$$\sum_{u<R,(u,W)=1}\frac{\mu(u)^2}{h(u)}\ll_k aL$$
by [F2], for either $h(p)=p-1$ or $p-2$. Each full cross sum $\sum\mu(s)^2/h(s)^2$ is bounded by an absolute constant, and the distinguished cross tail is $O(1/y)$ by [F2]. A finite union bound over at most $k(k-1)$ positions proves (2). With $d=0$ or $d=1$ there are no active cross positions, so the error can be zero. [F2, step 3.1, algebra]

5.1 Apply (2) with all $k$ coordinates active, then apply [F2]'s pairwise-coprime tensor formula with prime factor $1/(p-1)$ and smooth function $\Phi^2$ on the unit cube. Its zero extension is smooth by compact interior support. Since $c_1(W)=a$, this gives [F2, step 4.1, step 1.2, algebra]
$$Q_\chi=(aL)^k I_k(\Phi) +O_{k,\Phi}\left((aL)^k/y+K_*(aL)^{k-1}\right).$$
Together with step 1.2 this proves the error in (3). Finally $\log W\le y\log y=o(\log\log N)$, $a^{-1}\le W$, and $R^2=N^{2\alpha}$ with $2\alpha<1$. Thus the endpoint error divided by $C_N$ tends to zero, as do $1/y$ and $K_*/(aL)$. This proves the asserted asymptotic, including $\Phi=0$ without a positivity inference. [F2, step 4.1, step 1.2, algebra] ∎

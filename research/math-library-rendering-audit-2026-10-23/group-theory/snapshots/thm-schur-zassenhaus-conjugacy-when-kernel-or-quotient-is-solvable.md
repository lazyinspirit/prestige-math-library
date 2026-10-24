---
id: thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable
kind: theorem
title: "Schur-Zassenhaus conjugacy when the kernel or quotient is solvable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-schur-zassenhaus-existence, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup, thm-cauchys-theorem-for-finite-groups, cor-prime-order-group-is-cyclic, thm-sylow-second-theorem]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

Let $N\trianglelefteq G$ be a normal Hall subgroup of a finite group $G$, and
let $H,K\le G$ be complements to $N$. If either $N$ or $G/N$ is solvable, then
$H$ and $K$ are conjugate in $G$.

## Facts & Assumptions

**Given:** A finite group $G$, a normal Hall subgroup $N\trianglelefteq G$, and complements $H,K\le G$ to $N$.

[L1] A normal Hall subgroup has a complement ([[thm-schur-zassenhaus-existence]]).

[L2] Solvability passes to quotients and subgroups ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]]).

[L3] A nontrivial normal subgroup of a solvable group contains a nontrivial abelian subgroup normal in the whole group ([[lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup]]).

[L4] A finite group of prime order is cyclic ([[cor-prime-order-group-is-cyclic]]).

[L5] Cauchy's theorem produces an element of order $p$ when a prime $p$ divides the order of a finite group ([[thm-cauchys-theorem-for-finite-groups]]).

[L6] Any two Sylow $p$-subgroups are conjugate ([[thm-sylow-second-theorem]]).

## Proof

**Proof technique:** direct.

1.1 We argue by induction on $|G|$. The claim is trivial when $N=1$ or $N=G$. Assume from now on that $1<N<G$ and that the statement holds for all smaller finite groups satisfying the same solvability hypothesis. [given, L1]

1.2 First consider the special case in which $A\trianglelefteq X$ is an abelian normal Hall subgroup of a finite group $X$, and $U,V$ are complements to $A$. Write $A$ additively. Since $U$ is a complement, every element of $X$ has a unique form $a u$ with $a\in A$ and $u\in U$. For each $u\in U$, let $\lambda(u)\in A$ be determined by the unique element $\lambda(u)u\in V$. Then $\lambda(uv)=\lambda(u)+u\cdot\lambda(v)$ because $V$ is a subgroup. Let $m=|U|$, choose $b$ with $bm\equiv1\pmod{|A|}$, and put $\sigma=\sum_{u\in U}\lambda(u)$ and $a=-b\sigma$. Summing $\lambda(ux)=\lambda(u)+u\cdot\lambda(x)$ over $x\in U$ gives $\sigma=m\lambda(u)+u\cdot\sigma$, hence $\lambda(u)=u\cdot a-a$. Therefore every element of $V$ has the form $(u\cdot a-a)u=a^{-1}ua$, so $V=a^{-1}Ua$. Thus complements to an abelian normal Hall subgroup are conjugate by that subgroup. [construct, choose, algebra]

2.1 Suppose $N$ is solvable. By [L3], choose a nontrivial abelian normal subgroup $A\le N$ that is normal in $G$. In $G/A$, the subgroup $N/A$ is normal Hall and the images $HA/A$ and $KA/A$ are complements. The induction hypothesis applies because $N/A$ is solvable by [L2]. After conjugating $K$, we may assume $HA=KA=:M$. Inside $M$, the subgroup $A$ is abelian normal Hall and $H,K$ are complements to $A$, so step 1.2 makes them conjugate in $M$, hence in $G$. [L2, L3, step 1.2, step 1.1, induction]

2.2 Now suppose instead that $G/N$ is solvable. Since $H\cong G/N$, the group $H$ is solvable by [L2]. If $|H|$ is prime, then both $H$ and $K$ are Sylow subgroups of that prime order, so [L6] makes them conjugate. [L2, L6, given, step 1.1]

2.3 Assume $|H|$ is not prime, and write $Q=G/N$. Choose a nontrivial proper abelian normal subgroup $\overline A\trianglelefteq Q$: if $Q$ is nonabelian, apply [L3] to the solvable group $Q$ and its normal subgroup $Q$; if $Q$ is abelian of composite order, [L5] gives an element of prime order and [L4] makes the subgroup it generates a proper normal subgroup. Let $M$ be the preimage of $\overline A$ under the quotient map $G\to Q$. Then $M\trianglelefteq G$, $M<G$, and $M/N\cong\overline A$ is solvable. Since $H$ and $K$ are complements to $N$ in $G$, the subgroups $H\cap M$ and $K\cap M$ are complements to $N$ in $M$. The induction hypothesis applied to $M$ therefore lets us conjugate $K$ by an element of $M$ so that $H\cap M=K\cap M=:A$. In particular, $A$ is abelian and normal in both $H$ and $K$. [L3, L4, L5, step 1.1, induction]

3.1 Both $H$ and $K$ normalize $A$, so $H,K\le N_G(A)$. If $N_G(A)<G$, then every element of $N_G(A)$ has the form $nh$ with $n\in N$ and $h\in H$, and because $h\in N_G(A)$ the condition $nh\in N_G(A)$ forces $n=(nh)h^{-1}\in N\cap N_G(A)$. Hence $N_G(A)=(N\cap N_G(A))H=(N\cap N_G(A))K$. Thus $N\cap N_G(A)$ is a normal Hall subgroup of the proper group $N_G(A)$, and the quotient by it is isomorphic to the solvable group $H$. The induction hypothesis on $N_G(A)$ makes $H$ and $K$ conjugate there. [L2, step 2.3, step 1.1, induction]

3.2 If instead $N_G(A)=G$, then $A\trianglelefteq G$. In $G/A$, the normal Hall subgroup is $NA/A$, and the images $H/A$ and $K/A$ are complements. The quotient $(G/A)/(NA/A)\cong G/NA\cong Q/\overline A$ is solvable and smaller than $Q$ because $\overline A$ is nontrivial. Therefore the induction hypothesis on $G/A$ lets us conjugate $K$ so that $H/A=K/A$. Since $A\le H$ and also $A\le K$ with $A\trianglelefteq G$, this equality of quotient subgroups means $H=K$. Thus the final conjugacy is proved in this case as well. [L2, step 2.3, step 1.1, induction]

4.1 Steps 2.1 and 2.2-3.2 cover the two solvability hypotheses. Therefore complements to $N$ are conjugate in $G$ whenever the kernel or quotient is solvable. [step 2.1, step 2.2, step 3.1, step 3.2] ∎

---
id: thm-schur-zassenhaus-existence
kind: theorem
title: "Schur-Zassenhaus existence theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-normal-hall-subgroup-gives-a-coprime-extension, thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products, thm-cauchys-theorem-for-finite-groups, thm-sylow-first-theorem, thm-sylow-second-theorem, thm-nontrivial-center-of-a-finite-p-group, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal, thm-conjugation-is-an-automorphism]
landmark: true
proof_strategy: induction
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "Keith Conrad, The Schur-Zassenhaus Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/schurzass.pdf"
---

## Statement

Let $N\trianglelefteq G$ be a normal Hall subgroup of a finite group $G$. Then
$N$ has a complement in $G$.

## Facts & Assumptions

**Given:** A finite group $G$ and a normal Hall subgroup $N\trianglelefteq G$.

[L1] A normal Hall subgroup gives an extension
$1\to N\to G\to G/N\to1$ with $\gcd(|N|,|G/N|)=1$
([[lem-normal-hall-subgroup-gives-a-coprime-extension]]).

[L2] In a group extension, a complement to the kernel is equivalent to a split
section ([[thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]]).

[L3] Cauchy's theorem produces an element of order $p$ whenever a prime $p$
divides the order of a finite group ([[thm-cauchys-theorem-for-finite-groups]]).

[L4] Sylow $p$-subgroups exist in finite groups, and any two Sylow
$p$-subgroups are conjugate ([[thm-sylow-first-theorem]],
[[thm-sylow-second-theorem]]).

[L5] Every nontrivial finite $p$-group has nontrivial center
([[thm-nontrivial-center-of-a-finite-p-group]]).

[L6] A characteristic subgroup of a normal subgroup is normal in the ambient
group ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

[L7] Conjugation by a group element is an automorphism
([[thm-conjugation-is-an-automorphism]]).

## Proof

**Proof technique:** induction on $|G|$, followed in the minimal case by
coprime cocycle averaging.

1.1 We argue by induction on $|G|$. If $N=1$, then $G$ is a complement to $N$. If $N=G$, then $G/N=1$, so the trivial subgroup is a complement. Assume from now on that $1<N<G$ and that the statement holds for all smaller finite groups. [given, L1, induction, base]

2.1 Suppose $M$ is a normal subgroup of $G$ with $1<M<N$. Then $N/M$ is a normal Hall subgroup of $G/M$, so the induction hypothesis gives a subgroup $K/M\le G/M$ complementary to $N/M$. Thus $K<G$, $G=NK$, and $N\cap K=M$. Inside the proper group $K$, the subgroup $M$ is normal Hall because $|K/M|=|G/N|$ is coprime to $|M|$. The induction hypothesis applied to $K$ gives a complement $H$ to $M$ in $K$, so $K=MH$. Since $H\le K$, we have $H\cap N=H\cap(N\cap K)=H\cap M=1$, while $NH=N(MH)=NK=G$. Thus $H$ complements $N$ in $G$. For the remainder we may therefore assume that $N$ contains no nontrivial proper subgroup normal in $G$. [L1, step 1.1, induction, ih, algebra]

3.1 Choose a prime $p$ dividing $|N|$ and let $P$ be a Sylow $p$-subgroup of $N$, whose existence is supplied by [L4]; in particular $P\ne1$. Because $N\trianglelefteq G$, every $G$-conjugate of $P$ is again a Sylow $p$-subgroup of $N$. Hence [L4] gives, for each $g\in G$, an $n\in N$ with $gPg^{-1}=nPn^{-1}$. Thus $n^{-1}g\in N_G(P)$ and $G=NN_G(P)$. If $P<N$ and $N_G(P)=G$, then $P$ is a nontrivial proper normal subgroup of $G$ contained in $N$, contrary to step 2.1. Thus $P<N$ forces $R:=N_G(P)<G$. Put $A=R\cap N$. The subgroup $A$ is normal in $R$, and $G=NR$ gives $R/A\cong G/N$; hence $A$ is a normal Hall subgroup of $R$. Induction gives a complement $H$ to $A$ in $R$, so $R=AH$. Consequently $G=NR=NH$ and $N\cap H=A\cap H=1$, proving the theorem when $P<N$. The only remaining case is $P=N$, so $N$ is a $p$-group. [L4, step 2.1, induction, ih, algebra]

4.1 By [L5], the finite $p$-group $N$ has nontrivial center. The center is characteristic in $N$, so [L6] makes it normal in $G$; step 2.1 therefore forces $Z(N)=N$, and $N$ is abelian. Now $\Omega_1(N)=\{x\in N:x^p=1\}$ is a subgroup, is nontrivial by [L3], and is characteristic because automorphisms preserve $p$th powers. Hence [L6] makes it normal in $G$, and step 2.1 again forces $\Omega_1(N)=N$. Therefore every nonidentity element of $N$ has order $p$, so $N$ is elementary abelian. [L3, L5, L6, step 2.1, step 3.1, algebra]

5.1 Write $Q=G/N$, choose a set-theoretic section $s:Q\to G$ with $s(1)=1$, and write the abelian group $N$ additively. Because $N$ is abelian, the formula $q\cdot n=s(q)ns(q)^{-1}$ does not depend on the chosen lift of $q$, and [L7] makes it an action of $Q$ on $N$ by automorphisms. Define $f:Q\times Q\to N$ by $s(q)s(r)=f(q,r)s(qr)$. This is well defined because $\pi(s(q)s(r))=qr$, so $s(q)s(r)s(qr)^{-1}\in N$. [L7, step 4.1, choose, algebra]

6.1 Associativity gives $f(q,r)+f(qr,t)=q\cdot f(r,t)+f(q,rt)$ for all $q,r,t\in Q$. Let $m=|Q|$, choose an integer $b$ with $bm\equiv1\pmod p$, define $\sigma(q)=\sum_{x\in Q}f(q,x)$ and $c(q)=b\,\sigma(q)$, and sum the cocycle identity over $x\in Q$. Since $x\mapsto rx$ is a permutation of $Q$, this yields $m f(q,r)+\sigma(qr)=q\cdot\sigma(r)+\sigma(q)$. Because every element of the elementary abelian $p$-group $N$ has order dividing $p$, multiplication by $bm$ is the identity on $N$. Hence $f(q,r)=c(q)+q\cdot c(r)-c(qr)$. [step 4.1, step 5.1, choose, algebra]

7.1 Define $s':Q\to G$ by $s'(q)=-c(q)+s(q)$, meaning $s'(q)=i(-c(q))s(q)$ inside the extension. Since $i(-c(q))\in N$, we have $\pi(s'(q))=q$. Using the formula from step 6.1, $s'(q)s'(r)=(-c(q)-q\cdot c(r)+f(q,r))s(qr)=-c(qr)s(qr)=s'(qr)$. So $s'$ is a homomorphic section of $G\to Q$. By [L2], the extension splits, equivalently $N$ has a complement in $G$. This completes the induction. [L2, step 6.1, step 5.1, construct, discharge-induction] ∎

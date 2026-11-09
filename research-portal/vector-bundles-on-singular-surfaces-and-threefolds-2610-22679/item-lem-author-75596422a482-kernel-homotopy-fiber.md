---
title: Kernel models the homotopy fiber when the cokernel is acyclic
status: published
research_item: lem-author-75596422a482-kernel-homotopy-fiber
dependency_level: 0
---

PDF p. 13: Supported Chow group

## Prerequisites

None.

## Statement
Let $f:A_\bullet\to B_\bullet$ be a chain map of abelian groups, $K=\ker f$, and suppose its cokernel complex is acyclic, meaning that all its homology groups vanish. Define $F_n=A_n\oplus B_{n+1}$ with differential $d_F(a,b)=(d_Aa,f(a)-d_Bb)$. Then $K\to F$, $a\mapsto(a,0)$, induces an isomorphism on every homology group. The complex $F$ is the standard homotopy-fiber model of $f$.

## Facts & Assumptions

**Given:** A chain map $f$ with acyclic cokernel, and $K,F$ as stated.

**Goal:** Prove that the inclusion $K\to F$ is a quasi-isomorphism, meaning a map inducing isomorphisms on all homology groups.

## Proof

1.1 Since $f$ commutes with differentials, $d_F^2=0$; the inclusion of $K$ into $F$ is a degreewise injective chain map. Its quotient is $Q_n=(A_n/K_n)\oplus B_{n+1}$ with the induced differential. [given, algebra]

2.1 Identify $A/K$ with the image subcomplex $I\subset B$. The map $Q_n\to (B/I)_{n+1}$ sending $(x,b)$ to the class of $b$ is a surjective chain map to the shifted cokernel, whose differential is the negative of that of $B/I$. Its kernel is the complex $D_n=I_n\oplus I_{n+1}$ with differential $(x,y)\mapsto(dx,x-dy)$. [given, step 1.1, algebra]

3.1 The maps $h_n:D_n\to D_{n+1}$ given by $h_n(x,y)=(y,0)$ satisfy $dh+hd=\mathrm{id}$, so $D$ is acyclic. The shifted cokernel is acyclic by hypothesis; the long exact homology sequence of $0\to D\to Q\to(B/I)[1]\to0$ therefore makes $Q$ acyclic. Applying the same exact sequence to $0\to K\to F\to Q\to0$ proves the claimed isomorphisms. [given, step 2.1, algebra] ∎

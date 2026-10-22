---
id: lem-order-two-herbrand-quotients-multiply
kind: lemma
title: Multiplication of order-two Herbrand quotients
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
proof_strategy: direct
sources:
  references:
    - title: J. S. Milne, Class Field Theory, Chapter II, section 3, Propositions 3.6 and 3.8
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
---

## Statement

Let $M$ be an abelian group with an involution $\sigma$, written additively, and put $D=\sigma-1$ and $N=1+\sigma$. Define $T_0(M)=\ker D/\operatorname{im}N$ and $T_1(M)=\ker N/\operatorname{im}D$. When both groups are finite put $h(M)=|T_0(M)|/|T_1(M)|$. For a short exact sequence of groups with involution, $0\to A\to B\to C\to0$, if any two of these quotients are defined, the third is defined and $h(B)=h(A)h(C)$. For a finite group $M$, $h(M)=1$. Consequently an equivariant homomorphism with finite kernel and cokernel preserves definedness and value of $h$.

## Facts & Assumptions

**Given:** The groups, involutions, maps, and notation in the statement. The identities $DN=ND=0$ make the two displayed quotient groups well-defined.

## Proof

1.1 The short exact sequence gives a cyclic exact sequence $$T_0(A)\longrightarrow T_0(B)\longrightarrow T_0(C)\overset{\partial_0}{\longrightarrow}T_1(A)\longrightarrow T_1(B)\longrightarrow T_1(C)\overset{\partial_1}{\longrightarrow}T_0(A).$$ Explicitly, for $c\in\ker D$ choose a lift $b$ and set $\partial_0[c]=[Db]$; for $c\in\ker N$ set $\partial_1[c]=[Nb]$. These lie in $A$ and the required kernels. Changing $b$ by an element of $A$ changes the answer by a boundary. Replacing $c$ by $c+Nc'$ changes $Db$ by zero after lifting $c'$, and replacing $c$ by $c+Dc'$ changes $Nb$ by zero; hence the maps are well-defined. At $T_0(B)$, a class whose image is a norm in $C$ can have a lifted norm subtracted to become an invariant element of $A$. At $T_0(C)$, $\partial_0[c]=0$ means $Db=Da$ for some $a\in A$, so $b-a$ is an invariant lift. At $T_1(A)$, a class that becomes $Db$ in $B$ comes from $[\bar b]\in T_0(C)$. At $T_1(B)$, a class whose image is a $D$-boundary in $C$ can have a lifted $D$-boundary subtracted to lie in $\ker N\cap A$. At $T_1(C)$, $\partial_1[c]=0$ means $Nb=Na$ for some $a\in A$, so $b-a$ is a lift in $\ker N$. At $T_0(A)$, a class that becomes $Nb$ in $B$ comes from $[\bar b]\in T_1(C)$. These checks establish exactness at all six positions. [given, construct, algebra]

2.1 If four of the six groups in step 1.1 are finite and correspond to any two of $A,B,C$, each remaining group has finite kernel and image between finite groups, hence is finite. For six finite groups in a cyclic exact sequence, write the order of each group as the product of the orders of its incoming and outgoing images. Multiplying alternating orders cancels every image order once in numerator and once in denominator. Applied to step 1.1 this gives $$\frac{|T_0(A)|\,|T_0(C)|\,|T_1(B)|}{|T_0(B)|\,|T_1(A)|\,|T_1(C)|}=1,$$ which is $h(B)=h(A)h(C)$. [step 1.1, algebra]

3.1 For finite $M$, the kernel-image formula gives $|\ker D|\,|\operatorname{im}D|=|M|=|\ker N|\,|\operatorname{im}N|$, so $|T_0(M)|=|T_1(M)|$ and $h(M)=1$. A homomorphism with finite kernel and cokernel factors as a surjection onto its image followed by an inclusion. Apply step 2.1 to the two corresponding short exact sequences and use the just-proved value $1$ for the finite kernel and cokernel. This proves the final assertion as well. [step 2.1, algebra] ∎


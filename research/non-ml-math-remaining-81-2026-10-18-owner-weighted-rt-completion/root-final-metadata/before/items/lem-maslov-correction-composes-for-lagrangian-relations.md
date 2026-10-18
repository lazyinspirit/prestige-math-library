---
id: lem-maslov-correction-composes-for-lagrangian-relations
kind: lemma
title: "The middle-boundary Maslov correction composes for Lagrangian relations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
deps:
  - lem-maslov-index-four-lagrangian-cocycle
  - lem-lagrangian-relation-sends-lagrangian-to-lagrangian
  - def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces
  - thm-rank-nullity
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Teruji Thomas, The Maslov index as a quadratic space"
      url: "https://arxiv.org/pdf/math/0505561"
      locator: "Sections 2, 5 and 7 for quadratic-space conventions; the full relation-reduction proof is supplied locally."
---

## Statement

Use the Wall-form Maslov convention of [[lem-maslov-index-four-lagrangian-cocycle]]. Let $B\subseteq\overline V\oplus W$ be a finite-dimensional real Lagrangian relation, where the product symplectic form is $-\omega_V\oplus\omega_W$. Write $B(L)=\{w:\exists v\in L,(v,w)\in B\}$ and $B^t(Q)=\{v:\exists w\in Q,(v,w)\in B\}$. For Lagrangians $L,P\subseteq V$ and $Q,R\subseteq W$,

$$\mu_V(L,P,B^t(Q))+\mu_W(B(L),Q,R)=\mu_W(B(P),Q,R)+\mu_V(L,P,B^t(R)).$$

Consequently, for composable Lagrangian relations $A:V_0\to V_1$, $B:V_1\to V_2$, $C:V_2\to V_3$ and specified Lagrangians $\lambda_i\subseteq V_i$, the integer correction $m(B,A)=\mu_{V_1}(A(\lambda_0),\lambda_1,B^t(\lambda_2))$ satisfies

$$m(B,A)+m(C,BA)=m(C,B)+m(CB,A).$$

It vanishes for either identity relation, is additive on direct sums, and for graphs of symplectic isomorphisms $f_1,f_2$ equals $\mu(f_2f_1\lambda_0,f_2\lambda_1,\lambda_2)$. No injectivity, transversality or equal-dimension hypothesis on a general relation is imposed.

## Facts & Assumptions

**Given:** The finite-dimensional symplectic spaces, Lagrangian relations and Lagrangians in the Statement.

[F1] The Wall form on $L_1\cap(L_2+L_3)/((L_1\cap L_2)+(L_1\cap L_3))$ is $\psi([a],[a'])=\omega(a,b')$ with $a+b+c=0$; its signature $\mu$ satisfies the four-Lagrangian cocycle ([[lem-maslov-index-four-lagrangian-cocycle]]).

[F2] Images of Lagrangians under Lagrangian relations are Lagrangian ([[lem-lagrangian-relation-sends-lagrangian-to-lagrangian]]).

[F3] Lagrangians equal their symplectic orthogonal complements, and finite-dimensional rank-nullity and subspace dimension formulas apply ([[def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces]], [[thm-rank-nullity]]).

## Proof


1.1 The Wall form in [F1] is unchanged by a symplectic isomorphism: the isomorphism carries its numerator and denominator to the corresponding subspaces and preserves $\omega(a,b')$. The cyclic map $[a]\mapsto[b]$, with $a+b+c=0$, is a well-defined isomorphism between the cyclic Wall quotients: changing a decomposition adds an adjacent intersection, and its inverse is obtained by solving the same sum-zero equation. It preserves the form because $\omega(b,c')=-\omega(b,a')=\omega(a',b)=\omega(a,b')$. Hence $\mu$ is cyclically invariant. If the first two Lagrangians agree, its numerator and denominator are both that Lagrangian, so the quotient is zero. Cyclic invariance therefore shows that $\mu$ vanishes whenever any two arguments agree. Orthogonal direct sums give orthogonal direct sums of Wall quotients and forms, so their signatures add. [F1, F3, algebra]

1.2 Set $K=\{v:(v,0)\in B\}$ and $K'=\{w:(0,w)\in B\}$. Both are isotropic. A vector $x$ annihilates $\pi_VB$ exactly when $(x,0)$ annihilates $B$, hence belongs to $B=B^\perp$. Thus $(\pi_VB)^\perp=K$ and $\pi_VB=K^\perp$; likewise $\pi_WB=K'^\perp$. A pair $(v,w)\in B$ defines an isomorphism $\phi:K^\perp/K\to K'^\perp/K'$. Changing $w$ adds precisely $K'$, and changing $v$ adds $K$; the two projections are onto and these are their kernels. Isotropy of $B$ gives $\omega_W(w,w')=\omega_V(v,v')$, so $\phi$ is symplectic. [F3, algebra, construct]

1.3 Choose a Lagrangian $N_0$ containing $K$. This finite construction needs no transversality: extend a basis $e_i$ of $K$ to hyperbolic pairs by choosing vectors $f_j$ with $\omega(e_i,f_j)=\delta_{ij}$, possible by nondegeneracy. Replace $f_i$ by $f_i-\frac12\sum_j\omega(f_i,f_j)e_j$ to make their pairings zero. Their span is symplectic. In its symplectic orthogonal complement, repeatedly choose a nonzero vector and a vector pairing to $1$, splitting off a symplectic plane each time. Adjoining one vector from each such plane to the $e_i$ spans the required Lagrangian. The construction ends by finite dimension. [F3, construct]

2.1 For a Lagrangian $L\subseteq V$, put $L_K=((L\cap K^\perp)+K)/K$. It is Lagrangian in $K^\perp/K$: the inverse image $P_L=(L\cap K^\perp)+K$ is isotropic, and $P_L^\perp=(L+K)\cap K^\perp=(L\cap K^\perp)+K=P_L$. The last equality follows by writing $x=l+k$ and observing that $x,k\in K^\perp$ force $l\in K^\perp$. Here $(U\cap T)^\perp=U^\perp+T^\perp$ follows from inclusion and equal dimensions by [F3]. The relation normal form in step 1.2 gives $B(L)/K'=\phi(L_K)$ and $B^t(Q)/K=\phi^{-1}(Q_{K'})$. These are equalities of the actual subspaces containing $K'$ or $K$, not an assumption that relation images are injective. [F2, F3, step 1.2, algebra]

3.1 Suppose $N_0,N\subseteq V$ both contain $K$. We prove $\mu_V(L,N_0,N)=\mu_{K^\perp/K}(L_K,N_0/K,N/K)$ by identifying their complete Wall forms. The left numerator $L\cap(N_0+N)$ lies in $K^\perp$. It projects onto the right numerator: if a representative $l+k$, with $l\in L\cap K^\perp$, lies in the sum of the two reduced spaces, then $l\in N_0+N$, since that sum contains $K$. The image of $(L\cap N_0)+(L\cap N)$ is precisely the right denominator: $l+k\in N_0$ is equivalent to $l\in N_0$, and likewise for $N$. The projection kernel $L\cap K$ is already in this denominator. Hence the Wall quotient spaces are isomorphic. A decomposition $a+b+c=0$ projects to the corresponding decomposition, and $\omega(a,b')$ descends to the quotient form because both entries lie in $K^\perp$. The isomorphism is an isometry, proving equality of signatures. By step 1.1 the same reduction holds when any two arguments contain $K$. [F1, F3, step 1.1, step 2.1, algebra]

4.1 For arbitrary $L,P$ and $N$ containing $K$, the four-Lagrangian identity gives $\mu(L,P,N)-\mu(L,P,N_0)=\mu(L,N_0,N)-\mu(P,N_0,N)$. Reduce the two right-hand terms by step 3.1 and apply that same identity in $K^\perp/K$. Thus $\mu_V(L,P,N)=\mu_{K^\perp/K}(L_K,P_K,N/K)+\eta_K(L,P)$, where $\eta_K(L,P)=\mu_V(L,P,N_0)-\mu_{K^\perp/K}(L_K,P_K,N_0/K)$. In particular the defect is independent of $N$. The auxiliary $N_0$ disappears from the differences used below. [F1, step 3.1, step 1.3, algebra]

5.1 In step 4.1 take $N=B^t(Q)$. By step 2.1 and symplectic invariance, its reduced triple transports by $\phi$ to $(B(L)/K',B(P)/K',Q_{K'})$. Since $B(L)$ and $B(P)$ both contain $K'$, step 3.1 applied in $W$ identifies this reduced signature with $\mu_W(B(L),B(P),Q)$. Therefore $\mu_V(L,P,B^t(Q))-\mu_W(B(L),B(P),Q)=\eta_K(L,P)$, independent of $Q$. Subtract the equations for $Q$ and $R$ and use the four-Lagrangian identity on $(B(L),B(P),Q,R)$ in $W$. This yields exactly the first identity in the Statement. [F1, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Relational composition obeys $(BA)(\lambda_0)=B(A(\lambda_0))$ and $(CB)^t(\lambda_3)=B^t(C^t(\lambda_3))$ by the defining existential equations. Substitute $L=A(\lambda_0)$, $P=\lambda_1$, $Q=\lambda_2$, $R=C^t(\lambda_3)$ into step 5.1. All these spaces are Lagrangian by [F2], including inverse images by applying it to transposed relations. The resulting equality is precisely $m(B,A)+m(C,BA)=m(C,B)+m(CB,A)$. Thus adding these integer corrections gives associative weights. [F2, step 5.1, algebra]

7.1 For an identity relation on either side, its image or inverse image is the specified middle Lagrangian, so two arguments of $\mu$ agree and the correction is zero by step 1.1. Direct sums add corrections by that same step, including the zero-dimensional empty space. For graphs of symplectic isomorphisms the correction is $\mu(f_1\lambda_0,\lambda_1,f_2^{-1}\lambda_2)$. Transporting all three arguments by $f_2$ gives $\mu(f_2f_1\lambda_0,f_2\lambda_1,\lambda_2)$ with precisely the stated sign and order. These prove the remaining conclusions. [step 1.1, step 6.1, algebra] ∎

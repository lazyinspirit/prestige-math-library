---
id: lem-author-75596422a482-kernel-homotopy-fiber
kind: lemma
title: Kernel models the homotopy fiber when the cokernel is acyclic
status: published
domain: mathematics
deps:
  - math:def-chain-complex-in-an-abelian-category
  - math:def-chain-map
  - math:def-homology-object-of-a-chain-complex
  - math:thm-a-chain-map-induces-a-well-defined-map-on-homology
  - math:lem-the-kernel-of-a-chain-map-is-computed-degreewise
  - math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise
  - math:thm-abelian-groups-form-an-abelian-category
  - math:cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise
  - math:thm-long-exact-sequence-in-homology
  - math:def-mapping-cone-of-a-chain-map
  - math:def-shift-of-a-chain-complex
dependency_roles:
  math:def-chain-complex-in-an-abelian-category: mathematical-premise
  math:def-chain-map: mathematical-premise
  math:def-homology-object-of-a-chain-complex: mathematical-premise
  math:thm-a-chain-map-induces-a-well-defined-map-on-homology: mathematical-premise
  math:lem-the-kernel-of-a-chain-map-is-computed-degreewise: mathematical-premise
  math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise: mathematical-premise
  math:thm-long-exact-sequence-in-homology: mathematical-premise
  math:def-mapping-cone-of-a-chain-map: mathematical-premise
  math:def-shift-of-a-chain-complex: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $f:A_\bullet\to B_\bullet$ be a chain map of abelian groups, $K=\ker f$, and suppose its cokernel complex is acyclic, meaning that all its homology groups vanish. Define $F_n=A_n\oplus B_{n+1}$ with differential $d_F(a,b)=(d_Aa,f(a)-d_Bb)$. Then $K\to F$, $a\mapsto(a,0)$, induces an isomorphism on every homology group. The complex $F$ is the standard homotopy-fiber model of $f$: with the chain-complex convention $C[k]_n=C_{n-k}$ and $d_{C[k]}=(-1)^k d_C$, a homotopy fiber means $\operatorname{Cone}(f)[-1]$, and $F$ is chain-isomorphic to this model. Here $K_n=\ker(f_n)$ and $\operatorname{coker}(f)_n=B_n/f_n(A_n)$ have the induced differentials.

## Statement references

[[math:def-chain-complex-in-an-abelian-category]]

[[math:def-chain-map]]

[[math:def-homology-object-of-a-chain-complex]]

[[math:thm-a-chain-map-induces-a-well-defined-map-on-homology]]

[[math:lem-the-kernel-of-a-chain-map-is-computed-degreewise]]

[[math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise]]

[[math:thm-abelian-groups-form-an-abelian-category]]

[[math:cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise]]

[[math:thm-long-exact-sequence-in-homology]]

[[math:def-mapping-cone-of-a-chain-map]]

[[math:def-shift-of-a-chain-complex]]

## Facts & Assumptions

**Given:** A chain map $f$ of complexes of abelian groups with acyclic cokernel, and $K,F$ as stated.

**Goal:** Prove that the inclusion $K\to F$ is a quasi-isomorphism, meaning a chain map inducing isomorphisms on all homology groups, and identify $F$ with the stated homotopy-fiber model.

[F1] The category $\mathbf{Ab}$ of abelian groups is abelian; chain complexes have differentials of degree $-1$ with $d^2=0$, and a chain map satisfies $d_Bf=fd_A$. [[math:thm-abelian-groups-form-an-abelian-category]], [[math:def-chain-complex-in-an-abelian-category]], [[math:def-chain-map]]

[F2] Homology is the quotient of cycles by boundaries, and a chain map induces its well-defined map on this quotient. [[math:def-homology-object-of-a-chain-complex]], [[math:thm-a-chain-map-induces-a-well-defined-map-on-homology]]

[F3] Kernels and cokernels of chain maps are computed degreewise with the induced differentials; this also applies to inclusions of subcomplexes. [[math:lem-the-kernel-of-a-chain-map-is-computed-degreewise]], [[math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise]]

[F4] The shift has $C[k]_n=C_{n-k}$ and $d_{C[k]}=(-1)^k d_C$. The mapping cone has $\operatorname{Cone}(f)_n=B_n\oplus A_{n-1}$ and differential $(b,a)\mapsto(d_Bb+f(a),-d_Aa)$. [[math:def-shift-of-a-chain-complex]], [[math:def-mapping-cone-of-a-chain-map]]

[F5] A sequence of chain maps in an abelian category is exact if and only if it is exact in every degree. [[math:cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise]]

[F6] A short exact sequence of complexes in an abelian category gives the long exact sequence in homology. [[math:thm-long-exact-sequence-in-homology]]

## Proof

1.1 Since $f$ commutes with differentials, $d_F^2(a,b)=(0,f(d_Aa)-d_B(f(a)))=0$, and the inclusion $K\to F$ is a degreewise injective chain map. Its quotient is $Q_n=(A_n/K_n)\oplus B_{n+1}$ with the induced differential. Put $I_n=f_n(A_n)$; the chain-map identity makes $I$ a subcomplex of $B$. The map $A_n/K_n\to I_n$, $[a]\mapsto f_n(a)$, is well-defined, surjective and injective, since its kernel consists exactly of the classes with $a\in K_n$; these maps commute with differentials. Thus identify $Q_n=I_n\oplus B_{n+1}$ with differential $(x,b)\mapsto(d_Ix,x-d_Bb)$. Put $C=B/I=\operatorname{coker}(f)$. The map $Q_n\to C[-1]_n=C_{n+1}$, $(x,b)\mapsto[b]$, is surjective and commutes with differentials, since $[x-d_Bb]=-d_C[b]$. Its kernel is $D_n=I_n\oplus I_{n+1}$ with differential $(x,y)\mapsto(d_Ix,x-d_Iy)$. Therefore $0\to D\to Q\to C[-1]\to0$ and $0\to K\to F\to Q\to0$ are short exact sequences of complexes in $\mathbf{Ab}$. [given, F1, F3, F4, F5, algebra]

2.1 The maps $h_n:D_n\to D_{n+1}$ given by $h_n(x,y)=(y,0)$ satisfy $(dh+hd)(x,y)=(d_Iy,y)+(x-d_Iy,0)=(x,y)$. Every cycle $z$ of $D$ is consequently the boundary $d(hz)$, so $D$ is acyclic. Since the differential of $C[-1]$ is $-d_C$, its cycles and boundaries in degree $n$ are those of $C$ in degree $n+1$; thus $H_n(C[-1])=H_{n+1}(C)=0$ by hypothesis. Apply the long exact homology sequence to the first short exact sequence of step 1.1: the zero groups $H_n(D)$ and $H_n(C[-1])$ force $H_n(Q)=0$ for every $n$. For the second sequence, the exact segment $H_{n+1}(Q)\to H_n(K)\to H_n(F)\to H_n(Q)$ then proves that the induced map $H_n(K)\to H_n(F)$ is an isomorphism for every $n$. Finally, the degreewise bijection $F_n\to\operatorname{Cone}(f)[-1]_n=B_{n+1}\oplus A_n$, $(a,b)\mapsto(-b,a)$, commutes with differentials: both compositions send $(a,b)$ to $(d_Bb-f(a),d_Aa)$. Hence it is a chain isomorphism to the homotopy-fiber model with the convention stated above. [given, F2, F4, F6, step 1.1, algebra] ∎

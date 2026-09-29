---
id: thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic
kind: theorem
title: "A chain map is a quasi-isomorphism exactly when its cone is acyclic"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, def-quasi-isomorphism, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex, def-homology-object-of-a-chain-complex, thm-a-chain-map-induces-a-well-defined-map-on-homology, thm-the-pullback-of-an-epimorphism-is-an-epimorphism, thm-every-monomorphism-is-the-kernel-of-its-cokernel, cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero, thm-an-abelian-category-is-balanced]
proof_strategy: direct
verification:
  audited: 2026-09-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

Let $f:C_\bullet\to D_\bullet$ be a chain map in an abelian category. Then $f$
is a quasi-isomorphism if and only if $\operatorname{Cone}(f)$ is acyclic.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$ in an abelian category and an integer $n$.

[L1] A quasi-isomorphism induces isomorphisms on all homology objects ([[def-quasi-isomorphism]], [[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[L2] The cone has degree-$n$ object $D_n\oplus C_{n-1}$ and differential $(y,x)\mapsto(d_Dy+f_{n-1}x,-d_Cx)$; this is biproduct matrix notation for morphisms ([[def-mapping-cone-of-a-chain-map]]).

[L3] The homology map $q_{E,n}:Z_n(E)\to H_n(E)$ is the cokernel of the boundary inclusion. Acyclicity means $H_n(E)=0$ for every $n$ ([[def-homology-object-of-a-chain-complex]], [[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[L4] Every boundary inclusion is the kernel of its homology cokernel, and epimorphisms remain epic under pullback. Hence if $q_{E,n}t=0$ for a morphism $t:T\to Z_n(E)$, an epic pullback cover $e:T'\to T$ admits $v:T'\to E_{n+1}$ with $d_{n+1}v=z_{E,n}te$ ([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]], [[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

[L5] In an abelian category, zero kernel detects monicity, zero cokernel detects epicity, and a monic epic is an isomorphism ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]], [[thm-an-abelian-category-is-balanced]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], $H_n(E)=0$ exactly when the boundary map $E_{n+1}\to Z_n(E)$ is epic. By [L4], this is equivalent to the following arrow condition: every $t:T\to Z_n(E)$ becomes a boundary after precomposition with some epimorphism $e:T'\to T$. We use this condition for $E=\operatorname{Cone}(f)$, and use the analogous condition $q_{E,n}t=0$ for boundaries in $C$ and $D$. [L3, L4]

1.2 Conversely, assume $f$ is a quasi-isomorphism. Let $t:T\to Z_n(\operatorname{Cone}(f))$ be any morphism, and write the components of its composite with the cycle inclusion as $y:T\to D_n$ and $x:T\to C_{n-1}$. The cone-cycle equation gives $d_Cx=0$ and $d_Dy+f_{n-1}x=0$. Thus $x=z_{C,n-1}x_0$ for a unique $x_0:T\to Z_{n-1}(C)$, and $H_{n-1}(f)q_{C,n-1}x_0=q_{D,n-1}f_{n-1}x=0$. Since $H_{n-1}(f)$ is monic, $q_{C,n-1}x_0=0$. By [L4], after an epic cover $e_0:T_0\to T$ there is $w:T_0\to C_n$ with $d_Cw=xe_0$. [L1, L2, L4, assume-hyp, construct, algebra]

2.1 Assume the cone is acyclic. To test the kernel of $H_{n-1}(f)$, take a morphism $t:T\to Z_{n-1}(C)$ with $H_{n-1}(f)q_{C,n-1}t=0$. By [L4], after an epic cover $e_0:T_0\to T$ there is $y:T_0\to D_n$ with $d_Dy=f_{n-1}z_{C,n-1}te_0$. The column $(-y,z_{C,n-1}te_0):T_0\to\operatorname{Cone}(f)_n$ is a cycle by [L2]. By step 1.1, after another epic cover $e_1:T_1\to T_0$ it is the cone boundary of a column $(v,w):T_1\to D_{n+1}\oplus C_n$. The second component of that boundary says $z_{C,n-1}te_0e_1=-d_Cw$, so $q_{C,n-1}te_0e_1=0$. Cancel the epimorphisms to obtain $q_{C,n-1}t=0$. To apply this to the kernel $k:K\to H_{n-1}(C)$ of $H_{n-1}(f)$, pull back the epic $q_{C,n-1}$ along $k$, obtaining an epic $e:T\to K$ and $t:T\to Z_{n-1}(C)$ with $q_{C,n-1}t=ke$. The preceding argument gives $ke=0$, hence $k=0$. Thus $H_{n-1}(f)$ is monic by [L5]. [L1, L2, L3, L4, L5, step 1.1, assume-hyp, construct, algebra]

2.2 The morphism $ye_0+f_nw:T_0\to D_n$ is a cycle, so it factors through $Z_n(D)$ as $r:T_0\to Z_n(D)$. Since $H_n(f)$ is an isomorphism, there is $h:T_0\to H_n(C)$ with $H_n(f)h=q_{D,n}r$. Pull back the epic $q_{C,n}:Z_n(C)\to H_n(C)$ along $h$, obtaining an epic $e_1:T_1\to T_0$ and $s:T_1\to Z_n(C)$ with $q_{C,n}s=he_1$. Therefore $q_{D,n}(re_1-Z_n(f)s)=0$. By [L4], after an epic cover $e_2:T_2\to T_1$ there is $v:T_2\to D_{n+1}$ with $d_Dv=(ye_0+f_nw)e_1e_2-f_nz_{C,n}se_2$. [L1, L3, L4, step 1.2, construct, algebra]

3.1 To test epicity of $H_n(f)$, take any $t:T\to Z_n(D)$. The column $(z_{D,n}t,0):T\to\operatorname{Cone}(f)_n$ is a cycle. By step 1.1, after an epic cover $e:T'\to T$ it is the boundary of $(v,w):T'\to D_{n+1}\oplus C_n$. The second component says $d_Cw=0$, so $w=z_{C,n}s$ for a unique $s:T'\to Z_n(C)$. The first component gives $q_{D,n}te=H_n(f)q_{C,n}s$. Hence $\operatorname{coker}(H_n(f))q_{D,n}te=0$ for every $t$. Taking $t=1_{Z_n(D)}$ and cancelling the epimorphisms $e$ and $q_{D,n}$ yields $\operatorname{coker}(H_n(f))=0$. Thus $H_n(f)$ is epic by [L5]. Since $n$ is arbitrary, this step and step 2.1 make every $H_n(f)$ an isomorphism; [L1] makes $f$ a quasi-isomorphism. [L1, L2, L3, L5, step 1.1, step 2.1, assume-hyp, construct, algebra]

4.1 Put $u=-we_1e_2+z_{C,n}se_2:T_2\to C_n$. The cone differential of $(v,u)$ is $(ye_0e_1e_2,xe_0e_1e_2)$ by [L2] and steps 1.2 and 2.2. Thus $te_0e_1e_2$ is a cone boundary. Since the composite cover is epic, step 1.1 gives $H_n(\operatorname{Cone}(f))=0$. This holds for every $n$, so the cone is acyclic by [L3]. The two implications prove the equivalence. [L2, L3, step 1.1, step 3.1, step 1.2, step 2.2, construct, algebra] ∎

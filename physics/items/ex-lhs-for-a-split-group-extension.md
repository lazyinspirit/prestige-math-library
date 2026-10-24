---
id: "ex-lhs-for-a-split-group-extension"
kind: "example"
title: "LHS for a split group extension"
deps: ["thm-lyndon-hochschild-serre-spectral-sequence", "thm-five-term-exact-sequence-in-group-cohomology-from-lhs", "thm-splitting-lemma-for-group-extensions", "def-group-cohomology-as-a-derived-functor", "thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Section 6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Example

For $G=N\rtimes Q$, the LHS page is $E_2^{p,q}=H^p(Q,H^q(N,M))$, where a section acts on $N$ by conjugation and on coefficients through its image in $G$. A section of groups alone does not imply collapse or a split inflation map for arbitrary coefficients.

Here is a split example with nonzero transgression. Let $G=C_2\times C_2=\langle t,s\rangle$, $N=\langle t\rangle$, $Q=\langle s\rangle$, and $k=\mathbb F_2$. On the four-dimensional $k$-space $M=\langle a,b,c,d\rangle$ define $t=1+T$, $s=1+S$ by
$$Ta=c,\quad Tb=Tc=Td=0,\qquad Sa=d,\quad Sb=c,\quad Sc=Sd=0.$$
Then $d_2^{0,1}:H^1(N,M)^Q\to H^2(Q,M^N)$ has rank one. We compute the whole five-term portion below. As a comparison, for the same split group and trivial coefficients $k$, its degree-one inflation–restriction sequence splits by the section.

## Facts & Assumptions

**Given:** These finite modules, with the DC or supplied-comparison convention of LHS.

[F1] LHS has the indicated page, finite target filtration and module naturality ([[thm-lyndon-hochschild-serre-spectral-sequence]]).

[F2] Its five-term sequence is exact with derived restriction, inflation and transgression ([[thm-five-term-exact-sequence-in-group-cohomology-from-lhs]]).

[F3] A section describes the semidirect action by conjugation ([[thm-splitting-lemma-for-group-extensions]]).

[F4] Group cohomology is Ext of the trivial module, and a supplied projective resolution computes it by the canonical Hom-total comparison ([[def-group-cohomology-as-a-derived-functor]], [[thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]]).

## Verification

1.1 The displayed operators satisfy $T^2=S^2=TS=ST=0$. In characteristic two this gives $(1+T)^2=(1+S)^2=1$ and commuting actions, so $M$ is a well-defined $G$-module. The map $s\mapsto s$ is a group section, and its conjugation action on $N$ is trivial by commutativity, as in F3. It need not act trivially on the coefficient module. [F3, construct]

1.2 For either cyclic factor use the rank-one free integral group-ring resolution with alternating differentials $t-1,1+t,t-1,1+t,\ldots$ (replace $t$ by $s$ for $Q$). It is exact: in $\mathbb Z[C_2]$, the kernels are respectively $\mathbb Z(1+t)$ and $\mathbb Z(1-t)$, equal to the preceding images, and the augmentation kernel is $\mathbb Z(1-t)$. Hom into a characteristic-two module replaces every differential by $T$, or by $S$. Thus its positive cohomology is $\ker T/\operatorname{im}T$, or $\ker S/\operatorname{im}S$. F4 licenses this computation; each rank-one free module is projective by a single generator lift. [F4]

2.1 Here $W=M^N=\langle b,c,d\rangle$, and $H^1(N,M)=\langle[b],[d]\rangle$. The quotient action is trivial on these two classes, since $Sb=c$ is a $T$-boundary and $Sd=0$. To see the action agrees with F1's resolution convention, let $Q$ act trivially on the cyclic $N$-resolution and by its given action on $M$; the Hom-to-injective-total comparison in F4 commutes with these actions and its augmentation. On $W$, $Sb=c$ and $Sc=Sd=0$, so $H^1(Q,W)=H^2(Q,W)=\langle[d]\rangle$. Consequently the three page entries in F2 have dimensions $1,2,1$. [F1, F2, F4, step 1.1, step 1.2]

2.2 Tensor the two cyclic resolutions over $\mathbb Z$ and take the signed total. This is a free $\mathbb Z[G]$-resolution of $\mathbb Z$: each bidegree is rank one over that ring. For exactness, each augmented factor, as an abelian complex, splits into its degree-zero copy of $\mathbb Z$ and contractible two-term complexes. Indeed its successive boundary groups have the single displayed generator in step 1.2, and each surjection to that generator has the explicit lift $1$ or $-1$; the augmentation also has lift $1$. These splittings decompose the differentials into identity maps on adjacent summands. Tensoring such a contractible summand with the other complex stays contractible: the homotopy $h\otimes1$ has cross terms cancelling under the tensor sign. There are finitely many summands in each degree. Thus the total has homology $\mathbb Z$ in degree zero and zero above it, proving the resolution claim. [F4, step 1.2]

3.1 Hom of this total into $M$ has degree zero $M$ and degree one $M\oplus M$, with coboundary $w\mapsto(Tw,Sw)$. Its degree-one cycles $(u,v)$ satisfy $Tu=0$, $Sv=0$ and $Su=Tv$; the three equations come from bidegrees $(2,0),(0,2),(1,1)$ and signs disappear over $k$. Here $u\in\langle b,c,d\rangle$ and $v\in\langle c,d\rangle$, so the third equation forces the $b$-coefficient of $u$ to vanish. Cycles are therefore $\langle c,d\rangle\oplus\langle c,d\rangle$, of dimension four. Boundaries are generated by $(c,d)$ and $(0,c)$, of dimension two. F4 gives $H^1(G,M)\cong k^2$. [F4, step 1.1, step 2.2]

4.1 Restriction to $N$ sends $[(u,v)]$ to $[u]\in\ker T/\operatorname{im}T$. Indeed inclusion of the $N$-resolution at degree zero of the other factor lifts the identity augmentation, so its Hom map is this projection; the canonical comparison of F4 identifies it with F2's restriction. Its image is exactly $\langle[d]\rangle$: all allowable $u$ lie in $\langle c,d\rangle$, and $(d,0)$ is a cycle. Thus F2 forces the kernel of transgression to be $\langle[d]\rangle$ in $\langle[b],[d]\rangle$. Its target is the one-dimensional $\langle[d]\rangle$ from step 2.1, so $d_2([b])=[d]\ne0$. The five-term portion is $0\to k\to k^2\to k^2\to k\to H^2(G,M)$, with middle restriction of rank one, transgression of rank one, and the last inflation zero. This proves noncollapse despite the group section. [F2, F4, step 2.1, step 3.1]

4.2 Restriction to the section subgroup projects a cycle to $[v]\in H^1(Q,M)$. Here $\ker S=\operatorname{im}S=\langle c,d\rangle$, so this target is zero. It cannot retract the nonzero injection $H^1(Q,M^N)\hookrightarrow H^1(G,M)$: the coefficient modules in those two quotient-group cohomologies differ. With trivial coefficients $k$ instead, $T=S=0$, the same resolution gives $H^1(G,k)=k^2$ and $H^1(N,k)=H^1(Q,k)=k$. Inflation is $z\mapsto(0,z)$, restriction is $(u,v)\mapsto u$, and restriction to the section is $(u,v)\mapsto v$. To verify the inflation formula, project the tensor resolution onto the $Q$ factor by augmentation of the $N$ factor; its Hom map is the displayed inclusion and lifts the quotient fixed-point map in F2. This is a valid split degree-one sequence and has zero transgression by exactness. [F2, F4, step 2.2, step 3.1]

5.1 F1 gives finite strong convergence for both coefficient modules. The calculations establish only the stated low-degree portion; other page differentials and the full degree-two target in the first example are not claimed computed. A group section imposes no bidegree vanishing on those uncomputed arrows. All displayed resolutions, bases and linear equations are explicit and require no AC; resolution independence retains the supplied-data/DC convention. [F1, step 4.1, step 4.2] ∎

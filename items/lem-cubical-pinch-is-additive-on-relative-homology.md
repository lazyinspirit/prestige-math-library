---
id: "lem-cubical-pinch-is-additive-on-relative-homology"
kind: "lemma"
title: "Cubical pinch is additive on relative homology"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-cubical-and-spherical-models-of-higher-homotopy-agree","lem-relative-cubical-disk-model-and-compression","def-higher-homotopy-group-by-based-cubes","def-relative-homotopy-group","def-relative-singular-homology","thm-long-exact-sequence-in-homology","thm-singular-homology-satisfies-homotopy-exactness-and-excision","lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees","lem-interval-exponential-law-and-quotient-homotopies"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, Proposition4.36, pp369–370, with the
        relative wedge splitting and cube reparametrizations supplied locally
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Use either of the following based pairs:

- $(Q,R)=(I^n/\partial I^n,*)$ for $n\ge1$;
- $(Q,R)=(I^n/J,F/(F\cap J))$ for $n\ge2$, where $F=I^{n-1}\times\{0\}$ and $J$ is the union of all other faces, and the collapsed set is the basepoint.

Let $(Y,B)=(Q\vee Q,R\vee R)$ and let $i_1,i_2$ be the two inclusions. The coordinate-one pinch $c:(Q,R)\to(Y,B)$ rescales the first half-cube positively onto the first copy and the second half-cube positively onto the second copy. Then, for every $\alpha\in H_n(Q,R;\mathbb Z)$,
$$c_*\alpha=(i_1)_*\alpha+(i_2)_*\alpha.$$
Consequently, for any two based maps of pairs $f,g:(Q,R,*)\to(X,A,x_0)$, the map $w=(f\vee g)c$ satisfies $w_*\alpha=f_*\alpha+g_*\alpha$. No choice principle is used.

## Facts & Assumptions

[F1] [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]] identifies the first quotient with the based sphere and identifies its coordinate-one pinch with the absolute group operation. [[lem-relative-cubical-disk-model-and-compression]] identifies the second quotient pair with a disk and its boundary.

[F2] [[def-relative-singular-homology]] computes relative homology by quotient chain complexes. [[thm-long-exact-sequence-in-homology]] gives exactness for a short exact sequence of complexes.

[F3] [[thm-singular-homology-satisfies-homotopy-exactness-and-excision]] gives homotopy invariance and CW excision. All excision pairs below are finite CW pairs.

[F4] [[def-higher-homotopy-group-by-based-cubes]] gives the displayed positive affine rescalings that define absolute coordinate-one concatenation. [[def-relative-homotopy-group]] uses that same coordinate-one formula for $n\ge2$, and [[lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees]] proves that it descends to the relative group operation.

[F5] [[lem-interval-exponential-law-and-quotient-homotopies]] proves that every quotient map times the interval is quotient in the ordinary product topology.

## Proof

**Given:** One of the two model pairs and an element $\alpha$ as stated. Let $q_1,q_2:(Y,B)\to(Q,R)$ collapse the other summand to the common basepoint.

1.1 These are finite CW pairs with the basepoint a vertex. For the absolute model use the sphere structure with one vertex and one $n$-cell, as realized by its collapsed-boundary disk. For the relative model use the sphere boundary structure on $R\cong S^{n-1}$ and then attach its one disk interior by the identity boundary map. The boundary has a vertex at the marked point; $n\ge2$ ensures it is a positive-dimensional sphere. The wedge identifies only these vertices and retains the finite cell structures. Thus $B$ and $T=B\cup i_1(Q)$ are subcomplexes of $Y$, and $q_j,i_j$ are continuous maps of pairs by the wedge quotient test. [F1, F3, given]

2.1 The nested subcomplexes $B\subseteq T\subseteq Y$ give a degreewise short exact sequence $$0\longrightarrow C_*(T)/C_*(B)\longrightarrow C_*(Y)/C_*(B)\longrightarrow C_*(Y)/C_*(T)\longrightarrow0.$$ Indeed the singular simplices in a subspace are subsets of the basis of singular simplices in the larger space, so the first quotient includes injectively and its image is exactly the kernel of the last quotient. The boundaries preserve these subgroups. By [F2], the sequence $$H_n(T,B)\longrightarrow H_n(Y,B)\xrightarrow{r}H_n(Y,T)$$ is exact at its middle term. CW excision [F3] identifies $H_n(T,B)$ with the first copy $H_n(Q,R)$, using $T=i_1(Q)\cup B$ and intersection $i_1(R)$. It identifies $H_n(Y,T)$ with the second copy, using $Y=i_2(Q)\cup T$ and intersection $i_2(R)$. These identifications are induced by the actual inclusions. [F2, F3, step 1.1]

2.2 On the original cube define the pinch by sending $(t_1,t')$ to the first copy represented by $(2t_1,t')$ when $t_1\le1/2$, and to the second represented by $(2t_1-1,t')$ when $t_1\ge1/2$. At the common face these are the collapsed basepoint in each model: coordinate-one end faces are contained in the collapsed set. In the relative model this uses $n\ge2$, since the distinguished face is in the last coordinate, not coordinate one. Finite closed pasting and quotient descent give $c$. The boundary subset goes into $B$, so it is a map of pairs. The exact formulas in [F4], together with [F1]'s spherical transport, identify these positive rescalings with absolute and relative concatenation. [F1, F4, step 1.1]


3.1 The map $(q_2)_*:H_n(Y,B)\to H_n(Q,R)$ factors through $r$, because $q_2(T)$ is contained in $R$. On $H_n(Y,T)$ its factor is inverse to the second excision inclusion in step 2.1: the composite $q_2i_2$ is the identity of $(Q,R)$. Thus $\ker(q_2)_*=\operatorname{im}(i_1)_*$. Both identities $q_ji_j=\mathrm{id}$ hold, and $q_ji_{3-j}$ is constant in $R$, hence induces zero on the relative chain quotient. For $z\in H_n(Y,B)$, subtract $(i_2)_*(q_2)_*z$ to get an element of this kernel, say $(i_1)_*a$. Applying $(q_1)_*$ shows $a=(q_1)_*z$. Therefore $$z=(i_1)_*(q_1)_*z+(i_2)_*(q_2)_*z,$$ and uniqueness follows by applying the two projections. This proves the relative splitting and its exact inverse, without asserting that singular chains on a wedge themselves split. [F2, step 2.1]

3.2 The composites $q_1c,q_2c$ are induced on $Q$ by the cube maps with first coordinates $p_1(t_1)=\min(2t_1,1)$ and $p_2(t_1)=\max(2t_1-1,0)$ respectively, leaving every other coordinate unchanged. Interpolate their first coordinates to $t_1$ by $(1-s)p_j(t_1)+st_1$. Each endpoint 0,1 remains fixed, so this preserves the entire cube boundary. It also preserves $J$ and $F$ separately in the relative model: all unchanged-coordinate faces stay in place, and the coordinate-one end faces stay at their original ends. Thus the maps descend to homotopies of pairs from $q_jc$ to the identity. The quotient times the interval is quotient by [F5], so these descended homotopies are continuous. Homotopy invariance [F3] gives $(q_j)_*c_*\alpha=\alpha$ for both $j$. [F3, F5, step 2.2]

4.1 Apply the splitting identity in step 3.1 to $z=c_*\alpha$ and use step 3.2. It gives the displayed formula. The wedge map $f\vee g$ is continuous because the two maps agree at the basepoint, and its composite with $i_1$ is $f$ and with $i_2$ is $g$. The homomorphism induced on relative homology therefore sends this formula to $w_*\alpha=f_*\alpha+g_*\alpha$. [F2, step 3.1, step 3.2]

5.1 The calculation holds for every class, including zero and any multiple or negative of an oriented generator; no selection of a generator was made. Empty targets admit none of the stated based maps, while constant maps have zero induced relative value and obey the formula. The absolute $n=1$ case uses the interval with both ends collapsed and works exactly as above. In relative degree one the coordinate-one-zero face would be the distinguished face, so the pinch argument has not been asserted in that degree. The homotopies fix time endpoints and preserve all required boundary subsets. Two summands and all their algebra are finite, and no choice principle is used. [step 2.2, step 3.1, step 3.2, step 4.1] ∎

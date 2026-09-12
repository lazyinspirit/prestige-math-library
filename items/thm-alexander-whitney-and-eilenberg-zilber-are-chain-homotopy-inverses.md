---
id: "thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses"
kind: "theorem"
title: "Alexander--Whitney and shuffle are natural chain-homotopy inverses"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-alexander-whitney-diagonal-approximation","def-singular-chain-cross-product-on-generators","lem-singular-chain-cross-product-boundary-formula","prop-singular-chain-cross-products-are-natural","lem-singular-product-chain-equivalence-by-simplex-models","thm-singular-chain-homotopy-formula","def-singular-cochain-complex-with-coefficients"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher §3.2; Miller Lemma 33.2
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For arbitrary spaces $X,Y$ and every commutative unital ring $R$, the Alexander–Whitney map $A$ and signed shuffle map $S$ are natural chain maps
$$C_*(X\times Y;R)\underset{S}{\overset{A}{\rightleftarrows}} C_*(X;R)\otimes_R C_*(Y;R).$$
Both preserve degree-zero augmentation, and $AS$ and $SA$ are naturally chain homotopic to the respective identity maps. Moreover, for the specified natural inverse $T$ constructed below there is a natural chain homotopy $A\simeq T$. This holds for ordinary unnormalized chains and requires no AC.

## Facts & Assumptions

[F1] [[def-alexander-whitney-diagonal-approximation]] constructs $A$, proves its chain-map and naturality identities, and identifies its degree-zero action.

[F2] [[def-singular-chain-cross-product-on-generators]] specifies the finite signed shuffle sum. [[lem-singular-chain-cross-product-boundary-formula]] proves that $S$ is a chain map, and [[prop-singular-chain-cross-products-are-natural]] proves its naturality.

[F3] [[lem-singular-product-chain-equivalence-by-simplex-models]] states that $S$ has a natural inverse and natural homotopies, without AC, and that scalar extension preserves the result.

[F4] [[thm-singular-chain-homotopy-formula]] gives the explicit prism homotopy for a specified homotopy of spaces. [[def-singular-cochain-complex-with-coefficients]] supplies ordinary unnormalized singular chains as free modules on singular simplices.

## Proof

**Given:** Work first over $\mathbb Z$. Write $D=C_*(X\times Y)$ and $F=C_*(X)\otimes C_*(Y)$ with the signed tensor differential.

1.1 By [F1] and [F2], $A$ and $S$ are natural chain maps. Both act in degree zero by the inverse identifications between a pair of vertices and their tensor. [F1, F2, given]

1.2 We now construct the model contractions used below. If $Q$ is a standard simplex or a product of two standard simplices and $v$ is its first vertex, the affine homotopy $H(x,t)=(1-t)v+tx$ stays in $Q$. Let $p:C(Q)\to C(*)$ collapse $Q$ and let $j:C(*)\to C(Q)$ include $v$. The prism $P$ of [F4] satisfies $dP+Pd=1-jp$. The point complex has one generator $e_n$ in each degree, with $de_n=e_{n-1}$ for positive even $n$ and $de_n=0$ for odd $n$. Define $ae_n=e_{n+1}$ for odd $n$ and $ae_n=0$ for even $n$. Direct substitution gives $da+ad=1-i\epsilon$, where $\epsilon:C(*)\to\mathbb Z[0]$ is augmentation and $i$ includes degree zero. Thus $h_Q=P+jap$ satisfies $dh_Q+h_Qd=1-e_Q$, where $e_Q=ji\epsilon p$ projects onto the first vertex. For a product model in $F$, put
$$h_F(x\otimes y)=h_Cx\otimes y+(-1)^{|x|}e_Cx\otimes h_Ey.$$
The mixed terms cancel, giving $dh_F+h_Fd=1-e_C\otimes e_E$. Hence in either $D$- or $F$-model every positive-degree cycle, and every augmentation-zero degree-zero cycle, has the specified filling $hz$. [F4, given, algebra]

2.1 Construct a natural chain map $T:D\to F$. In degree zero send the vertex $(x,y)$ to $x\otimes y$. Suppose $T$ is defined naturally below degree $n>0$. On the universal diagonal simplex $a_n:\Delta^n\to\Delta^n\times\Delta^n$, the chain $z=T_{n-1}da_n$ is a cycle when $n>1$ and has augmentation zero when $n=1$. Define $T_n(a_n)=h_Fz$ using step 1.2, and for $\sigma=(x,y)$ put $T_n(\sigma)=(x_\#\otimes y_\#)T_n(a_n)$. Freeness in [F4] extends this linearly. Then $dT_n=T_{n-1}d$, and composition of pair maps proves naturality. Thus $T$ is a specified natural chain map whose degree-zero action equals that of $A$. [F4, step 1.1, step 1.2]

2.2 More generally, let $u,v:E\to G$ be natural chain maps between $D$ or $F$ functors that agree in degree zero. Set $H_{-1}=0$. Assuming $H$ defined below degree $n$, for each universal degree-$n$ generator $a$ put $z=(u-v)a-H_{n-1}da$. The lower homotopy identity makes $z$ a cycle for $n>0$, while at $n=0$ it is zero. Define $H_n(a)=hz$ with the appropriate model contraction from step 1.2, and push forward to arbitrary generators. Then $dH_n+H_{n-1}d=u-v$; the specified pushforward rule makes $H$ natural. [F4, step 1.2, algebra]

3.1 Since $T$ and $S$ are natural chain maps and $T_0S_0=S_0T_0=1$, step 2.2 applied to $(TS,1_F)$ and $(ST,1_D)$ gives natural homotopies $U$ and $V$ with $dU+Ud=TS-1$ and $dV+Vd=ST-1$. This independently realizes the existence asserted in [F3]. [F2, F3, step 2.1, step 2.2]

3.2 The maps $A,T:D\to F$ agree in degree zero by steps 1.1 and 2.1. Applying step 2.2 to $(A,T)$ gives a natural $K$ with $dK+Kd=A-T$. This is the stated comparison with the specified inverse, including its degree-zero normalization. [step 1.1, step 2.1, step 2.2]

4.1 Compose the identity of step 3.2 with the chain map $S$. Then $$d(KS+U)+(KS+U)d=(A-T)S+(TS-1)=AS-1,$$ and $$d(SK+V)+(SK+V)d=S(A-T)+(ST-1)=SA-1.$$ All summands and composites are natural, so these are the required natural chain homotopies. [F2, step 3.1, step 3.2]

5.1 Tensor these integral identities with $R$. The canonical identification sends $(x\otimes y)\otimes r$ to $(x\otimes1)\otimes(y\otimes r)$; its inverse sends $(x\otimes a)\otimes(y\otimes b)$ to $(x\otimes y)\otimes ab$. The tensor relations and commutativity of $R$ make the maps well-defined inverses commuting with the signed differential. The extended maps are the stated AW and shuffle formulas. Additivity of tensoring preserves the homotopy identities without a flatness hypothesis. [F1, F2, F3, step 4.1]

6.1 An empty factor or $R=0$ makes both complexes zero. Degree zero and augmentation were checked in step 1.1; the point calculation in step 1.2 retains the nonzero higher unnormalized chains. Every image is a finite chain because the model contractions are finite prism sums and each recursion uses only finitely many faces and already defined chains. Hence degeneracy, the lowest degree, and coefficient zero impose no exception, and no choice axiom is used. [F3, step 1.1, step 1.2, step 2.1, step 2.2, step 5.1] ∎

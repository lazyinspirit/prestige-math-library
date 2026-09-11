---
id: thm-mayer-vietoris-sequence-in-singular-cohomology
kind: theorem
title: Mayer vietoris sequence in singular cohomology
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-singular-cohomology-with-coefficients, def-singular-cochain-complex-with-coefficients, prop-singular-cohomology-is-contravariantly-functorial, thm-cover-small-inclusion-is-a-chain-homotopy-equivalence, thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence, thm-long-exact-sequence-of-a-pair-in-singular-cohomology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, Mayer–Vietoris Sequences, printed pages 203–204
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

For an open cover $X=U\cup V$ and any abelian group $G$, there is a natural exact sequence
$$\cdots\to H^n(X;G)\xrightarrow{\alpha}H^n(U;G)\oplus H^n(V;G)\xrightarrow{\beta}H^n(U\cap V;G)\xrightarrow{\partial}H^{n+1}(X;G)\to\cdots.$$
Here $\alpha$ is the pair of restrictions and $\beta([u],[v])=[u|_{U\cap V}-v|_{U\cap V}]$. Naturality means continuous maps $f:X\to X'$ with $f(U)\subseteq U'$ and $f(V)\subseteq V'$ for the ordered covers, and coefficient homomorphisms. The connector is specified in the proof with this difference sign. Negative-degree groups are zero.

## Facts & Assumptions

[F1] [[thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence]] gives the integral chain sequence with $i(c)=(c,-c)$ and $j(u,v)=u+v$, ending in the small complex $M=C_*^{\{U,V\}}(X;\mathbb Z)$.

[F2] [[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]] supplies a chain homotopy inverse to the inclusion $I:M\to C_*(X;\mathbb Z)$.

[F3] [[def-singular-cochain-complex-with-coefficients]] uses arbitrary simplex functions and positive coboundary; [[def-singular-cohomology-with-coefficients]] forms cocycles modulo coboundaries.

[F4] [[prop-singular-cohomology-is-contravariantly-functorial]] gives natural cochain precomposition and coefficient postcomposition, commuting with coboundary.

[F5] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] fixes the positive extension-differential convention for connectors. The needed exactness chase for the present complexes is supplied below.

## Proof

**Given:** The ordered cover and coefficients. Write $D=\operatorname{Hom}(M,G)$, $E=C^*(U;G)\oplus C^*(V;G)$ and $F=C^*(U\cap V;G)$, with positive cochain differentials. Their cohomologies mean kernel modulo image.

1.1 The dual of $j$ sends $w\in D^n$ to its two restrictions $a(w)$, while the dual of $i$ sends $(u,v)$ to $b(u,v)=u|-v|$, by [F1]. The map $a$ is injective because $j$ is onto. If $b(u,v)=0$, their values agree on common simplices; assign the value from $u$ to a simplex in $U$, and otherwise that from $v$. This gives a unique cochain on the small basis and its restrictions are $(u,v)$. Thus $\ker b=\operatorname{im}a$. Finally for a cochain $c$ on the intersection, extend it by zero to $U$ and pair this extension with zero on $V$; this maps to $c$. All maps commute with differential by [F1] and [F3], proving $0\to D\xrightarrow{a}E\xrightarrow{b}F\to0$ termwise exact, including negative zero degrees. [F1, F3]

1.2 Precomposition $I^\sharp:C^*(X;G)\to D$ is a cochain homotopy equivalence. Indeed let $R$ be the chain homotopy inverse in [F2]. Precomposing with each of $R,I$ gives cochain maps in reverse order. If a chain homotopy satisfies $1-IR=\partial T+T\partial$, precomposition by $T_{n-1}$ gives $1-R^\sharp I^\sharp=\delta K+K\delta$; the other inverse homotopy gives the other composite. At degree zero the homotopy with index $-1$ is zero. Thus the induced map $\theta:H^n(X;G)\to H^n(D)$ is an isomorphism. No Hom exactness theorem is used. [F2, F3]

2.1 For a cocycle $c\in F^n$, lift it to $e\in E^n$ by step 1.1. Then $b\delta e=\delta c=0$, so $\delta e=a(d)$ for a unique $d\in D^{n+1}$. Injectivity of $a$ and $\delta^2=0$ imply $\delta d=0$. If $e$ changes by $a(t)$, then $d$ changes by $\delta t$. If $c$ changes by $\delta c_0$, lift $c_0$ to $e_0$ and replace $e$ by $e+\delta e_0$, which leaves $d$ unchanged. Hence $\partial_D[c]=[d]$ is well-defined; lifts of sums show it is additive. Define the asserted connector by $\partial=\theta^{-1}\partial_D$. This uses the same positive sign as [F5]. Concretely, one may lift by $(\widetilde c,0)$ where $\widetilde c$ is zero extension to $U$; the small cocycle $d$ restricts to $\delta\widetilde c$ on $U$ and zero on $V$. [F3, F5, step 1.1, step 1.2]

2.2 At $H^n(E)$, images from $D$ map to zero. If a cocycle $e$ has $be=\delta c_0$, lift $c_0$ to $e_0$ and replace $e$ by $e-\delta e_0$. This is a cocycle in $\ker b$, hence equals $a(d)$ for a unique cocycle $d$, since $a$ is injective and commutes with differential. Thus this kernel equals the image from $H^n(D)$. The identification $H^n(E)=H^n(U;G)\oplus H^n(V;G)$ is coordinatewise: cycles and boundaries are respectively pairs of cycles and pairs of boundaries. [F3, step 1.1]

3.1 At $H^n(F)$, a class represented by $be$ with $e$ closed has zero connector. Conversely, if the connecting class of $c$ vanishes, its lift satisfies $\delta e=a(\delta t)$ for some $t\in D^n$. Then $e-a(t)$ is a cocycle lifting $c$. At $H^{n+1}(D)$, a connecting representative $d$ satisfies $a(d)=\delta e$, so its image is zero. Conversely if a cocycle $d$ has $a(d)=\delta e$, then $be$ is a cocycle and its connector is $[d]$. These arguments establish exactness at both positions in both directions. They include the initial $H^0(D)$ injection because a global primitive in $E^{-1}$ is necessarily zero. [F3, step 1.1, step 2.1]

4.1 Replace $H^*(D)$ by $H^*(X;G)$ through $\theta$. The map to the two open sets is the actual pair of restrictions because $aI^\sharp$ restricts absolute cochains. The next map is the stated difference by step 1.1. Steps 2.2 and 3.1 give the exact sequence with connector from step 2.1. A map of ordered covers sends small chains to small chains and commutes with their inclusions and $i,j$; hence its cochain maps commute with $a,b$ and the canonical $I^\sharp$. Sending a lift $e$ through these maps gives a lift of the image of $c$, and its differential is the image of $a(d)$. Thus it commutes with $\partial_D$, and the commuting isomorphisms $\theta$ imply commutation with $\partial$. Coefficient postcomposition has the same property. No naturality of the chosen chain inverse $R$ or of zero extension is required. [F1, F3, F4, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1]

5.1 This proves the statement, naturally with its printed sign. If $U$ or $V$ is empty, the sequence has the remaining restriction as an identity and zero intersection groups. If $U=V=X$, then $\alpha$ is diagonal, $\beta(u,v)=u-v$, and the connector is zero since $c\mapsto(c,0)$ is a cochain lift. These include point spaces and empty $X$; zero coefficients and negative degrees give zero terms. At degree zero there are no negative primitives, as checked in step 3.1. The two-coordinate constructions need no infinite choice; the small-chain construction uses least subdivision depths and all cochain extensions use the specified zero. No AC is used. [F2, F3, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎

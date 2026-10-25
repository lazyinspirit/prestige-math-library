---
id: "thm-poincare-lefschetz-duality"
kind: "theorem"
title: "Poincaré–Lefschetz duality"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-relative-fundamental-class-and-boundary-orientation","thm-poincare-duality-for-oriented-topological-manifolds","def-relative-cap-product","thm-five-lemma-for-a-morphism-of-long-exact-sequences","thm-long-exact-sequence-of-a-pair-in-singular-homology","thm-long-exact-sequence-of-a-pair-in-singular-cohomology","def-axiom-of-choice","thm-topological-collaring-for-manifold-boundaries","thm-excision-for-singular-cohomology","thm-excision-for-singular-homology","thm-homotopic-maps-induce-equal-maps-in-singular-cohomology","cor-homotopic-maps-induce-the-same-map-on-singular-homology","def-compactly-supported-singular-cohomology-of-a-locally-compact-space","lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class","lem-compatible-local-orientation-classes-exist-over-compact-subsets","thm-cap-product-boundary-identity"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem 3.43, pp.253–254
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: May, A Concise Course in Algebraic Topology, relative Poincaré duality,
        pp.170–171
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. Let $M$ be a compact $R$-oriented $n$-manifold with boundary $A$, for a commutative unital ring $R$. Cap with its relative fundamental class gives isomorphisms, for every integer $p$,
$$S_p:H^p(M;R)\xrightarrow{\sim}H_{n-p}(M,A;R),\qquad T_p:H^p(M,A;R)\xrightarrow{\sim}H_{n-p}(M;R).$$
Here both maps send a class $a$ to $a\cap[M,A]$ in the displayed target. Empty boundary recovers Poincaré duality. Disconnected and empty manifolds are included. AC is inherited only from the exhaustion and local universal-coefficient arguments in Poincaré duality.

## Facts & Assumptions

[F1] [[def-relative-fundamental-class-and-boundary-orientation]] supplies $z=[M,A]$ with $\partial z=[A]$, for the outward-normal-first boundary orientation.

[F2] [[thm-poincare-duality-for-oriented-topological-manifolds]] gives actual compact-support cap isomorphisms for boundaryless oriented manifolds, and ordinary cap isomorphisms when compact.

[F3] [[def-relative-cap-product]] defines both displayed maps by the front-evaluation/back-face formula and proves descent on the pair complexes, without any excisive-triad requirement in these specializations.

[F4] [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]] applies to each five-term exact window with four surrounding comparison isomorphisms.

[F5] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives the homology pair sequence. [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] gives the cohomology sequence with positive connector $[a]\mapsto[\delta\widetilde a]$.

[F6] [[def-axiom-of-choice]] is assumed for precisely the uses in [F2].

[F7] [[thm-topological-collaring-for-manifold-boundaries]] gives a collar of $A$, proves that the interior inclusion is a homotopy equivalence, and identifies nonempty $A$ as a compact boundaryless $(n-1)$-manifold.

[F8] [[thm-excision-for-singular-cohomology]] gives restriction isomorphisms when the closed excised set lies in the interior of the relative subspace. [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] and [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]] give homotopy invariance with arbitrary coefficients.

[F9] [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] constructs the support colimit with the common-larger-support equality criterion.

[F10] [[lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class]] constructs $z$ with the prescribed generator at every interior point and identifies its boundary class.

[F11] [[thm-cap-product-boundary-identity]] gives $\partial(\varphi\cap c)=(-1)^p(\varphi\cap\partial c-\delta\varphi\cap c)$ for $|\varphi|=p$.

[F12] [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]] constructs $[N]_{K_d}$ and makes restriction to the local groups at all points of $K_d$ injective.

[F13] [[thm-excision-for-singular-homology]] identifies the core-supported pair $(N,N\setminus K_d)$ with $(M,C_d)$ after removing the closed boundary $A$ inside the open collar $C_d$.

## Proof

**Given:** $M,A,n,R$, the supplied interior orientation, and AC. All coefficients below are $R$. If $A$ is empty, [F1] and [F3] identify both maps with [F2]'s compact duality map; hence both are isomorphisms. This also treats $n=0$. Suppose henceforth $A\ne\varnothing$, so $n\ge1$, and put $N=M\setminus A$.

1.1 Choose the collar $c$ supplied by [F7] and put $C_d=c(A\times[0,d))$, $K_d=M\setminus C_d$, for $0<d<1$. These are compact subsets $K_d$ of $N$. They are cofinal among compact subsets of $N$: the increasing open sets $M\setminus c(A\times[0,d])$, as $d$ decreases to zero, cover $N$. The removed sets are compact and hence closed, and every interior collar point has positive height. A compact $K\subset N$ has a finite subcover by these increasing sets, so is contained in one of them and consequently in that $K_d$. The collar also deformation retracts $C_d$ onto $A$ by multiplying height by $1-s$. [F7, given]

2.1 The natural pair cohomology sequences of [F5] for $A\subset C_d\subset M$ and homotopy invariance [F8] show by [F4] that restriction $r_d:H^p(M,C_d)\to H^p(M,A)$ is an isomorphism in every degree. Indeed the four surrounding absolute maps are identities on $M$ and the cohomology isomorphisms of $A\to C_d$. The needed naturality follows on the pair short exact cochain sequences from inclusion and restriction; taking any extension in the connector formula of [F5] gives commuting connectors. Excision [F8], removing the closed $A\subset C_d$, gives another isomorphism $e_d:H^p(M,C_d)\to H^p(N,N\setminus K_d)$. [F4, F5, F8, step 1.1]

3.1 For $d'<d$, the inclusion of relative cochains induces the support transition from $K_d$ to $K_{d'}$. The maps $r_d,e_d$ commute with it since all are restrictions or inclusions on cochains. Thus $e_dr_d^{-1}$ defines an isomorphism $$J:H^p(M,A)\xrightarrow{\sim}H_c^p(N).$$ More explicitly every support representative moves to some $K_d$ by step 1.1 and is the image of exactly one element via $r_de_d^{-1}$. Moving to a larger core leaves that element unchanged, so it defines an inverse on the common-support quotient [F9]. If two representatives agree at an arbitrary larger compact support, enlarge that support to a core again; the same commuting maps prove equality of these inverse images. This proves both surjectivity and injectivity without an exact-colimit theorem. [F9, step 1.1, step 2.1]

4.1 This isomorphism preserves the cap map in the required sense: $T_p=i_*D_NJ$, for $i:N\to M$. For a given $a\in H^p(M,A)$, choose a relative cocycle $\varphi$ on $(M,C_d)$ representing $r_d^{-1}a$. Choose a chain $u$ in $N$ representing $[N]_{K_d}$ from [F12] and a relative cycle $v$ representing $z$ from [F10]. Their images in $H_n(M,C_d;R)$ are equal. Indeed [F13] transports the first class isomorphically from $H_n(N,N\setminus K_d;R)$, and both classes restrict to the same prescribed generator at every point of $K_d$: for $u$ this is [F12], and for $v$ it is the defining property of $z$ in [F10]. Transporting back through [F13], pointwise injectivity [F12] proves equality. Equality in the relative chain quotient gives $i_\#u-v=\partial b+h$ for some $b\in C_{n+1}(M;R)$ and $h\in C_n(C_d;R)$. Since $\varphi$ is a cocycle vanishing on $C_d$, the difference between $i_\#((\varphi|_N)\cap u)$ and $\varphi\cap v$ is $(-1)^p\partial(\varphi\cap b)$, by [F11]; the cap of $h$ is zero. The cap formula commutes with inclusion of $N$ because each front and back face is simply postcomposed with that inclusion. The two absolute homology classes therefore agree. The interior inclusion is a homotopy equivalence by [F7], so $i_*$ is an isomorphism by [F8]; $D_N$ is an isomorphism by [F2]. Together with step 3.1 this proves that $T_p$ is an isomorphism. [F1, F2, F3, F6, F7, F8, F10, F11, F12, F13, step 3.1]

5.1 For $S_p$ consider the following five-term cohomology window, followed by the homology window placed beneath it: $$H^{p-1}(A)\xrightarrow{\delta}H^p(M,A)\xrightarrow{j}H^p(M)\xrightarrow{r}H^p(A)\xrightarrow{\delta}H^{p+1}(M,A),$$ $$H_{n-p}(A)\xrightarrow{i_*}H_{n-p}(M)\xrightarrow{q_*}H_{n-p}(M,A)\xrightarrow{(-1)^p\partial}H_{n-p-1}(A)\xrightarrow{i_*}H_{n-p-1}(M).$$ The vertical maps in order are $D_{A,p-1},T_p,S_p,D_{A,p},T_{p+1}$, where $D_{A,k}$ is cap with $[A]$. Both rows are exact by [F5]; multiplying the one connector by the unit $(-1)^p$ does not change its kernel or image. The first, second, fourth and fifth vertical maps are isomorphisms by [F2] on compact $A$ and step 4.1. [F1, F2, F3, F5, F6, F7, step 4.1]

6.1 All four squares commute, as can be checked on one relative cycle $v$ for $z$. Its boundary $b=\partial v$ is a cycle in $A$ representing $[A]$ by [F1]. If $\alpha$ is a degree-$(p-1)$ cocycle on $A$, extend it to a cochain $\widetilde\alpha$ on $M$ by zero on the other simplices. Then $\delta\widetilde\alpha$ represents its cohomology connector by [F5]. The rearranged identity [F11] is $$\delta\widetilde\alpha\cap v=\widetilde\alpha\cap b+(-1)^p\partial(\widetilde\alpha\cap v).$$ It gives $T_p\delta=i_*D_{A,p-1}$. This proves the first square, and replacing $p$ by $p+1$ proves the fourth. In negative cochain degree the source is zero, so these formulas assert the same zero identity. The second square is $S_pj=q_*T_p$, since its two outputs are the same cap chain taken modulo $A$. Finally for an absolute degree-$p$ cocycle $\varphi$, [F11] gives $\partial(\varphi\cap v)=(-1)^p\varphi\cap b$. Hence $(-1)^p\partial S_p=D_{A,p}r$, the third square with exactly the sign used in step 5.1. At $p>n$ the target chains are zero; the displayed boundary identity still holds. [F1, F3, F5, F11, step 5.1]

7.1 Apply [F4] to the commuting exact window in steps 5.1–6.1. Its four surrounding maps are isomorphisms, so $S_p$ is an isomorphism. The result holds in every integer degree. For empty $M$ the groups are zero, and for the zero ring all maps are the unique zero-module isomorphisms. A point was included in the empty-boundary case; its cap map is multiplication by the supplied orientation unit. For $n=1$, $A$ is a compact zero-manifold and its duality is still [F2]. The endpoints $p=0,n$ use ordinary degree-zero homology, and negative chain and cochain groups are zero throughout the exact windows. No normalization of singular simplices was used, so degenerate simplices obey the same cap identities. Disconnected and closed components are covered by [F10] and by duality [F2] without choosing new component orientations. The only AC use is inherited from [F2]: its countable coordinate-neighborhood selection and local free-module/UCT projections and comparison lifts. The collar, the cofinal-support argument, single representative comparisons and signed exact-window argument require no additional AC. [F1, F2, F3, F4, F6, F7, F10, F11, step 4.1, step 5.1, step 6.1] ∎ 

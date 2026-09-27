---
id: thm-harish-chandra-adjunction-for-finite-gl-n
kind: theorem
title: Harish-Chandra induction is left adjoint to restriction
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-harish-chandra-induction-and-restriction-for-finite-gl-n, thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Proposition 9.4(i), printed p. 35"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 5.3, printed p. 42"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $q$ be a prime power and put $G=\operatorname{GL}_n(\mathbb F_q)$.
Let $P=L\ltimes U$ be a split parabolic subgroup of $G$ with Levi complement
$L$ and unipotent radical $U$, and let $R_L^G$ and ${}^*\!R_L^G$ be the
Harish–Chandra induction and restriction functors attached to the pair $(L,P)$
([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]); all modules
below are complex. Then $R_L^G$ is **left adjoint** to ${}^*\!R_L^G$:

1. **Natural bijection.** For every $\mathbb C$-linear $L$-module $V$ and every
   $\mathbb C$-linear $G$-module $X$ there is a bijection
   $$\operatorname{Hom}_G\!\left(R_L^G(V),X\right)\longrightarrow\operatorname{Hom}_L\!\left(V,{}^*\!R_L^G(X)\right)$$
   which is natural in $V$ and in $X$.
2. **Description.** Writing $W:=\operatorname{Inf}_L^PV$ for the inflation of
   $V$, that bijection is the composite of the Frobenius adjunction
   $\operatorname{Hom}_G(\operatorname{Ind}_P^GW,X)\to\operatorname{Hom}_P(W,X)$
   for the subgroup $P\le G$
   ([[thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]])
   with the map that sends a $P$-linear $\varphi:W\to X$ to its restriction
   $\varphi|_V:V\to X^U$; this restriction is $L$-linear and takes values in the
   $U$-invariants because $U$ acts trivially on $W$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a prime power $q$, the group $G=\operatorname{GL}_n(\mathbb F_q)$, a split parabolic subgroup $P=L\ltimes U$ of $G$ with Levi complement $L$ and unipotent radical $U$, a $\mathbb C$-linear $L$-module $V$, a $\mathbb C$-linear $G$-module $X$, and the functors $R_L^G,{}^*\!R_L^G$ attached to $(L,P)$.

[L1] Let $R$ be a commutative ring, $G$ a finite group, $H\le G$, $W$ an $R$-linear $H$-module and $V$ an $R$-linear $G$-module. Then there is a natural isomorphism $$\operatorname{Hom}_G(\operatorname{Ind}_H^G W,V)\cong\operatorname{Hom}_H(W,\operatorname{Res}_H^G V)$$ ([[thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]]).

[L2] Let a finite group $P$ be the internal semidirect product $P=L\ltimes U$ of a subgroup $L\le P$ and a normal subgroup $U\trianglelefteq P$, so $P=LU$, $L\cap U=\{1\}$ and $P/U\cong L$; let $\pi:P\to L$, $\pi(lu):=l$, be the corresponding surjective homomorphism with kernel $U$. The inflation $\operatorname{Inf}_L^PV$ of an $L$-module $V$ is $V$ with the $P$-action $p\cdot v:=\pi(p)\cdot v$, under which every element of $U$ acts as the identity and the $L$-action is the given one ([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]).

[L3] The Harish–Chandra induction is $R_L^G(V)=\operatorname{Ind}_P^G(\operatorname{Inf}_L^PV)$, the set of functions $f:G\to V$ with $f(gp)=\pi(p)^{-1}f(g)$ and $(x\cdot f)(g)=f(x^{-1}g)$; the Harish–Chandra restriction is ${}^*\!R_L^G(X)=X^U=\{\,x\in X:u\cdot x=x\text{ for every }u\in U\,\}$ with the $L$-action $l\cdot x:=lx$ ([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]).

[L4] A morphism $\alpha:V\to V'$ of $R$-linear $L$-modules is also $P$-linear for the inflated actions, and postcomposition with $\alpha$ defines a morphism $R_L^G(\alpha):R_L^G(V)\to R_L^G(V')$; the assignments $V\mapsto R_L^G(V)$ and $X\mapsto{}^*\!R_L^G(X)$ are additive functors ([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]).

[L5] For a composition $\alpha$ of $n$ the standard parabolic subgroup $P_\alpha$ of $G=\operatorname{GL}_n(\mathbb F_q)$ has the Levi decomposition $P_\alpha=L_\alpha\ltimes U_\alpha$, so the constructions apply with $P=P_\alpha$, $L=L_\alpha$, $U=U_\alpha$; a split parabolic subgroup is a conjugate $gP_\alpha g^{-1}=(gL_\alpha g^{-1})\ltimes(gU_\alpha g^{-1})$, and for it the parabolic $P$ and its unipotent radical $U$ are part of the data ([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]).

## Proof

**Proof technique:** direct.

1.1 **Frobenius adjunction for $P\le G$.** By [L3] the Harish–Chandra induction is the composite functor $R_L^G(V)=\operatorname{Ind}_P^G\!\left(\operatorname{Inf}_L^PV\right)$, so with $W:=\operatorname{Inf}_L^PV$ the adjunction of [L1], applied to the finite group $G$, its subgroup $P$, the $P$-module $W$ and the $G$-module $X$, gives a natural bijection $\Theta:\operatorname{Hom}_G(R_L^GV,X)\to\operatorname{Hom}_P(W,X)$, where $X$ is viewed as a $P$-module by restricting its $G$-action. [L1, L3]

1.2 **Images of $P$-linear maps lie in $X^U$.** Let $\varphi:W\to X$ be $P$-linear, $u\in U$ and $w\in W$. Since $U\le P$ we have $\varphi(u\cdot w)=u\cdot\varphi(w)$, and $u\cdot w=w$ because every element of $U$ acts as the identity on the inflation $W=\operatorname{Inf}_L^PV$ by [L2]; hence $u\cdot\varphi(w)=\varphi(w)$ for all $u\in U$, that is $\varphi(W)\subseteq X^U$. [L2, algebra]

2.1 **The identification with $L$-linear maps into $X^U$.** Define $\Lambda:\operatorname{Hom}_P(W,X)\to\operatorname{Hom}_L(V,X^U)$ by $\Lambda(\varphi):=\varphi|_V$. This is well defined: a $P$-linear map is $L$-linear because $L\le P$, and it takes values in $X^U$ by step 1.2. It is injective: $W$ and $V$ have the same underlying set, so a $P$-linear map is determined by its values on $V$. It is surjective: for an $L$-linear $\psi:V\to X^U$ define $\Phi_\psi(w):=\psi(w)$ for $w\in W$; writing an arbitrary $p\in P$ as $p=lu$ with $l\in L$ and $u\in U$, the unique factorisation available in $P=L\ltimes U$ with $P=LU$ and $L\cap U=\{1\}$ by [L2], one computes $$\Phi_\psi(p\cdot w)=\Phi_\psi(l\cdot w)=\psi(l\cdot w)=l\cdot\psi(w)=lu\cdot\psi(w)=p\cdot\Phi_\psi(w),$$ where the middle steps use that $u$ acts trivially on $W$ and that $\psi(w)$ lies in $X^U$, and the last is the $L$-action on $X^U$ of [L3]. Thus $\Phi_\psi$ is $P$-linear with $\Lambda(\Phi_\psi)=\psi$, so $\Lambda$ is a bijection. [step 1.2, L2, L3, algebra]

3.1 **The composite is a natural bijection.** Composing the bijections of steps 1.1 and 2.1 gives a bijection $$\Lambda\circ\Theta:\operatorname{Hom}_G(R_L^GV,X)\longrightarrow\operatorname{Hom}_L(V,{}^*\!R_L^GX),$$ the target being $\operatorname{Hom}_L(V,X^U)$ by [L3]. It is natural in $V$: for an $L$-linear $\alpha:V\to V'$ with induced $P$-linear $\operatorname{Inf}\alpha:W\to W'$, the functoriality of [L4] gives $R_L^G(\alpha)=\operatorname{Ind}_P^G(\operatorname{Inf}\alpha)$, and because $\operatorname{Inf}\alpha$ restricts to $\alpha$ on the common underlying sets, the naturality of $\Theta$ in its first variable gives for $\varphi\in\operatorname{Hom}_G(R_L^GV',X)$ $$(\Lambda\circ\Theta)\big(\varphi\circ R_L^G(\alpha)\big)=\Theta(\varphi)\circ\operatorname{Inf}\alpha\big|_{V}=\big(\Theta(\varphi)\big|_V\big)\circ\alpha=(\Lambda\circ\Theta)(\varphi)\circ\alpha .$$ Naturality in $X$ is the same computation with postcomposition by a $G$-linear $\beta:X\to X'$: $\Theta$ is natural in its second variable and $\beta$ maps $X^U$ into $(X')^U$, so both composites send $\varphi$ to $\beta\circ\Lambda(\Theta(\varphi))$. Hence $\Lambda\circ\Theta$ is a natural bijection in both variables. [step 1.1, step 2.1, L1, L3, L4]

4.1 **Adjunction.** By step 3.1 the assignment $\varphi\mapsto\Lambda(\Theta(\varphi))$ is a bijection $\operatorname{Hom}_G(R_L^GV,X)\to\operatorname{Hom}_L(V,{}^*\!R_L^GX)$ natural in $V$ and in $X$, with $\Lambda,\Theta$ as constructed from the definition of the functors and the published adjunction; this is exactly the assertion that $R_L^G$ is left adjoint to ${}^*\!R_L^G$, and by [L5] it applies to every split parabolic subgroup of $G$, standard or conjugate. ∎ [step 3.1, L5]

**Remark.** Nothing in steps 1.1–3.1 uses that the coefficient ring is $\mathbb C$ or that $P$ is proper: the identification $\Lambda$ of step 2.1 rests only on $P=L\ltimes U$ and on $U$ acting trivially on the inflation, so the same proof yields the adjunction over any commutative ring of coefficients. At the two extremes of [L5], $P=G$ gives $L=G$, $U=\{1\}$ and $X^U=X$, while $P=B$ gives $L=T$ and $U$ the standard maximal unipotent subgroup.

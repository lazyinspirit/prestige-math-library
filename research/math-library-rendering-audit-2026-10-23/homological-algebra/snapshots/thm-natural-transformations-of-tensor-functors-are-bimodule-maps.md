---
id: thm-natural-transformations-of-tensor-functors-are-bimodule-maps
kind: theorem
title: "Natural transformations between tensor functors are bimodule maps"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-unit-isomorphisms-for-module-tensor-products
  - thm-bimodule-actions-induced-on-tensor-products
  - prop-functoriality-of-module-tensor-products
  - def-bimodule
  - def-natural-transformation
  - def-vertical-composition-of-natural-transformations
  - def-hom-groups-and-induced-hom-maps
justified_by: []
aliases: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A,B$ be unital rings and let $M,M'$ be $(B,A)$-bimodules
([[def-bimodule]]), with tensor functors $T_M=M\otimes_A-$ and
$T_{M'}=M'\otimes_A-$. Under the tensor-unit isomorphisms
$\rho_M:M\otimes_AA\to M$ and $\rho_{M'}:M'\otimes_AA\to M'$ of
[[thm-unit-isomorphisms-for-module-tensor-products]], every natural
transformation $\eta:T_M\Rightarrow T_{M'}$ corresponds to the $B$-linear map

$$f=\rho_{M'}\circ\eta_A\circ\rho_M^{-1}:M\longrightarrow M',\qquad f(m)=\rho_{M'}\bigl(\eta_A(m\otimes1)\bigr),$$

which satisfies $f(ma)=f(m)a$ for all $a\in A$, i.e. is a $(B,A)$-bimodule
map, and then $\eta_X=f\otimes1_X$ for every left $A$-module $X$. Conversely
every bimodule map $f:M\to M'$ yields a natural transformation with components
$f\otimes1_X$. The two assignments are inverse bijections
$\operatorname{Nat}(T_M,T_{M'})\cong\operatorname{Hom}_{B\text{-}A}(M,M')$,
compatible with addition, identities, and vertical composition. No commutativity
and no choice are used. Here $\operatorname{Nat}(T_M,T_{M'})$ uses
bimodule maps as set codes for the component families, not those
proper-class families as elements of a set.

## Facts & Assumptions

**Given:** Unital rings $A,B$, $(B,A)$-bimodules $M,M'$, a left $A$-module $X$, and a natural transformation $\eta:T_M\Rightarrow T_{M'}$.

[F1] The tensor-unit map $\rho_N:N\otimes_AA\to N$, $\rho_N(n\otimes a)=na$, is an isomorphism with inverse $n\mapsto n\otimes1$ and respects every displayed outer module structure ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F2] If $M$ is a $(B,A)$-bimodule and $X$ a left $A$-module, then $M\otimes_AX$ is a left $B$-module with $b(m\otimes x)=(bm)\otimes x$, so $T_M,T_{M'}$ take values in $B\text{-}\mathbf{Mod}$ ([[thm-bimodule-actions-induced-on-tensor-products]]).

[F3] A $(B,A)$-bimodule has commuting left $B$-action and right $A$-action; a $(B,A)$-bimodule map is a map that is both $B$-linear and $A$-linear ([[def-bimodule]]).

[F4] Naturality of $\eta$: for every left $A$-linear $u:X\to Y$ one has $(1_{M'}\otimes u)\circ\eta_X=\eta_Y\circ(1_M\otimes u)$ ([[def-natural-transformation]]).

[F5] Module maps induce tensor maps with $(f\otimes g)(m\otimes x)=f(m)\otimes g(x)$, functorially: $\operatorname{id}\otimes\operatorname{id}=\operatorname{id}$ and $(f'\circ f)\otimes(g'\circ g)=(f'\otimes g')\circ(f\otimes g)$ ([[prop-functoriality-of-module-tensor-products]]).

[F6] Vertical composition is componentwise, $(\xi\circ\eta)_X=\xi_X\circ\eta_X$ ([[def-vertical-composition-of-natural-transformations]]).

[F7] For left $R$-modules, $\operatorname{Hom}_R$ is an abelian group under pointwise addition, with postcomposition and precomposition homomorphisms ([[def-hom-groups-and-induced-hom-maps]]).

## Proof

**Proof technique:** direct.

1.1 Define $f:=\rho_{M'}\circ\eta_A\circ\rho_M^{-1}$, so $f(m)=\rho_{M'}(\eta_A(m\otimes1))$ by [F1]. Then $f$ is $B$-linear, as a composite of the $B$-linear maps $\rho_M^{-1}$, $\eta_A$ (a morphism in $B\text{-}\mathbf{Mod}$ by [F2] and [F4]) and $\rho_{M'}$, which respect the outer structures by [F1]. Moreover $f(ma)=f(m)a$ for all $a\in A$: naturality at the left $A$-linear map $r_a:A\to A$, $r_a(x)=xa$, reads $\eta_A\circ(1_M\otimes r_a)=(1_{M'}\otimes r_a)\circ\eta_A$, and $ma\otimes1=(1_M\otimes r_a)(m\otimes1)$; evaluating there and using that $\rho_{M'}$ is $A$-linear, so that $\rho_{M'}\bigl((1_{M'}\otimes r_a)(y)\bigr)=\rho_{M'}(y)a$, gives $f(ma)=\rho_{M'}(\eta_A(m\otimes1))a=f(m)a$. By [F3] the map $f$ is a $(B,A)$-bimodule map. [F1, F2, F3, F4]

1.2 Conversely, let $f:M\to M'$ be a $(B,A)$-bimodule map and put $\eta_X:=f\otimes1_X:M\otimes_AX\to M'\otimes_AX$ by [F5]. Each $\eta_X$ is $B$-linear, since $\eta_X(b(m\otimes x))=f(bm)\otimes x=b(f(m)\otimes x)$, and the family is natural: for $u:X\to Y$ functoriality in [F5] gives $(f\otimes1_Y)\circ(1_M\otimes u)=f\otimes u=(1_{M'}\otimes u)\circ(f\otimes1_X)$. [F2, F3, F4, F5]

2.1 Let $\eta$ be natural with associated $f$ from step 1.1. Naturality at $\ell_x:A\to X$, $\ell_x(a)=ax$, gives $\eta_X\circ(1_M\otimes\ell_x)=(1_{M'}\otimes\ell_x)\circ\eta_A$; evaluated at $m\otimes1$ the left side is $\eta_X(m\otimes x)$, while the right side is $(1_{M'}\otimes\ell_x)(f(m)\otimes1)=f(m)\otimes x$, using $f(m)=\rho_{M'}(\eta_A(m\otimes1))$ and $\rho_{M'}^{-1}(f(m))=f(m)\otimes1$ from [F1]. Both $\eta_X$ and $f\otimes1_X$ are homomorphisms agreeing on every elementary tensor, so $\eta_X=f\otimes1_X$; in particular $\eta$ is determined by $f$. [F1, F4, F5, step 1.1]

3.1 The assignments are inverse: starting from a bimodule map $f$, the transformation of step 1.2 has associated map $f'=\rho_{M'}\circ(f\otimes1_A)\circ\rho_M^{-1}$, and $f'(m)=\rho_{M'}(f(m)\otimes1)=f(m)$ by [F1] and [F5]; starting from $\eta$, its associated $f$ satisfies $f\otimes1_X=\eta_X$ for all $X$ by step 2.1. Hence $\eta\mapsto f$ is a bijection onto the set of $(B,A)$-bimodule maps. [F1, F3, F5, step 1.1, step 1.2, step 2.1]

4.1 Compatibility: sums of natural transformations, defined componentwise, are natural, and $f_{\eta+\eta'}=f_\eta+f_{\eta'}$ because $\rho_{M'}$ and $\eta\mapsto\eta_A$ are additive; conversely sums of bimodule maps are bimodule maps and $(f+f')\otimes1_X=f\otimes1_X+f'\otimes1_X$ by [F5] and agreement on elementary tensors. The identity $1_{T_M}$ corresponds to $1_M$ in both directions, since $\rho_M(m\otimes1)=m$ and $1_M\otimes1_X=\operatorname{id}$ by [F5]. Vertical composition corresponds to composition: by [F6] and step 2.1, for $\xi:T_{M'}\Rightarrow T_{M''}$ with associated $g$ one has $(\xi\circ\eta)_A(m\otimes1)=\xi_A(f(m)\otimes1)=g(f(m))\otimes1$, so $\xi\circ\eta$ is associated with $g\circ f$, while $(g\otimes1_X)\circ(f\otimes1_X)=(g\circ f)\otimes1_X$ by [F5]; by [F7] these operations are the additions and compositions on the two Hom-groups. [F5, F6, F7, step 1.1, step 2.1, step 3.1]

5.1 Steps 1.1-3.1 establish the bijection $\operatorname{Nat}(T_M,T_{M'})\cong\operatorname{Hom}_{B\text{-}A}(M,M')$ with $\eta_X=f\otimes1_X$, and step 4.1 shows it is compatible with addition, identities and vertical composition. Nothing was chosen, and no commutativity was used. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎

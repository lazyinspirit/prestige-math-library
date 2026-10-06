---
id: thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels
kind: theorem
title: "Finite left exact functors are Hom functors with dual bimodule kernels"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
justified_by: []
aliases: []
deps: [thm-right-adjoints-preserve-limits, def-functor-category, def-algebraic-dual-and-linear-functional, def-bimodule, def-dimension, def-equivalence-and-adjoint-equivalence-of-categories, def-exact-and-short-exact-sequences-of-modules, def-functor-and-contravariant-functor, def-k-linear-category-and-k-linear-functor, def-left-and-right-modules, def-left-exact-and-right-exact-functor, def-module-homomorphism-kernel-image-and-cokernel, def-natural-isomorphism, def-natural-transformation, def-opposite-ring, def-vector-space-of-linear-maps, lem-evaluation-on-the-regular-module-has-a-commuting-right-action, lem-finite-module-duality-is-exact-with-commuting-bimodule-actions, lem-tensor-hom-adjunction-for-bimodules, thm-finite-eilenberg-watts-for-right-exact-linear-functors, thm-modules-over-a-ring-form-an-abelian-category, thm-universal-property-of-module-tensor-products, thm-yoneda-lemma-is-natural-in-both-variables]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 (L1)-(L3), equation (2.1))"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Throughout, a bimodule over $k$-algebras means a $k$-vector space with $k$-bilinear commuting actions and agreeing scalar actions: $(c1_B)m=m(c1_A)=cm$ for $c\in k$ in a $(B,A)$-bimodule. This compatibility is an additional requirement beyond the ring-bimodule definition [[def-bimodule]].

For assertions forming categories of functors, fix a set of allowed finite-dimensional $k$-vector space structures containing $k$ and the underlying spaces of the algebras considered, and closed under finite biproducts, subspaces, quotients, $k$-tensor products, $k$-duals and spaces of linear maps. Allow every compatible algebra, module and bimodule structure on these spaces. The resulting module categories are small, so their functors and natural transformations are set-coded as required by [[def-functor-category]]. The objectwise formulas apply without this size restriction; no category of proper-class functors is asserted.

Let $A,B$ be finite-dimensional unital algebras over a field $k$. Let
${}_AA_A$ be the regular bimodule and let $A^{*}=\operatorname{Hom}_k(A,k)$ be
its $k$-dual with the commuting actions $(a\cdot\lambda)(x)=\lambda(xa)$ and
$(\lambda\cdot a)(x)=\lambda(ax)$, regarded as a left $A$-module. Let
$F:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$ be a $k$-linear left exact
functor and put $M=F(A^{*})$ with the right $A$-action
$m\cdot a=F(\lambda\mapsto\lambda\cdot a)(m)$; then $M$ is a
finite-dimensional $(B,A)$-bimodule. There is a natural isomorphism of left
$B$-modules

$$F(X)\cong\operatorname{Hom}_A(M^{*},X)$$

for every finite-dimensional left $A$-module $X$, where $M^{*}$ is the
$(A,B)$-bimodule dual to $M$ and the left $B$-action on the Hom is
$(b\varphi)(u)=\varphi(u\cdot b)$; the isomorphism is natural in $X$.
Consequently $M\mapsto\operatorname{Hom}_A(M^{*},-)$ is an equivalence of
categories between finite-dimensional $(B,A)$-bimodules with bimodule maps and
$k$-linear left exact functors $A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$
with all natural transformations, with quasi-inverse $F\mapsto F(A^{*})$. No
commutativity of $A$ or $B$ and no choice are used.

## Facts & Assumptions

**Given:** The scalar and size conventions above, a field $k$, finite-dimensional unital $k$-algebras $A$ and $B$, the $k$-dual $A^{*}=\operatorname{Hom}_k(A,k)$ of the regular bimodule with the commuting actions displayed in the statement, and a $k$-linear left exact functor $F:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$ on finite-dimensional left modules.

[F1] Duality $(-)^{*}=\operatorname{Hom}_k(-,k)$ is a contravariant $k$-linear functor on finite-dimensional modules, exact, with $X\cong X^{**}$ naturally; it is a contravariant equivalence between finite-dimensional left $A$-modules and finite-dimensional left $A^{\mathrm{op}}$-modules, and between finite-dimensional $(A,B)$-bimodules and finite-dimensional $(B,A)$-bimodules, and it carries the left/right module structures into one another ([[lem-finite-module-duality-is-exact-with-commuting-bimodule-actions]], [[def-opposite-ring]], [[def-left-and-right-modules]]).

[F2] Every $k$-linear right exact functor between finite-dimensional module categories over finite-dimensional algebras is naturally isomorphic to $T_K=K\otimes_{A'}-$ for the bimodule kernel $K=G(A')$, and the assignment is an equivalence with quasi-inverse $G\mapsto G(A')$ ([[thm-finite-eilenberg-watts-for-right-exact-linear-functors]]).

[F3] If $Y$ is an $(A,A)$-bimodule with compatible $k$-actions, each right multiplication $t_a(y)=ya$ is left $A$-linear. For a $k$-linear $F:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$, the formulas $ma=F(t_a)(m)$ give a right $A$-action on $F(Y)$ commuting with its left $B$-action. Indeed $t_{aa'}=t_{a'}t_a$, $t_1=1$, and $t_{a+a'}=t_a+t_{a'}$; the agreeing $k$-actions follow from $F(t_{c1_A})=c1_{F(Y)}$ ([[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]], [[def-bimodule]]).

[F4] Tensor-hom adjunction: for a $(k,A^{\mathrm{op}})$-bimodule $K$, a left $A^{\mathrm{op}}$-module $Y$ and a $k$-vector space $V$, a $k$-linear map $K\otimes_{A^{\mathrm{op}}}Y\to V$ corresponds naturally to an $A^{\mathrm{op}}$-linear map $Y\to\operatorname{Hom}_k(K,V)$; equivalently, a balanced $k$-bilinear pairing out of $K\times Y$ induces a unique map out of the tensor product ([[lem-tensor-hom-adjunction-for-bimodules]], [[thm-universal-property-of-module-tensor-products]]).

[F5] A functor is left exact when it preserves every finite limit, in particular kernels, and right exact when it preserves finite colimits, in particular cokernels ([[def-left-exact-and-right-exact-functor]]).

[F6] The Yoneda lemma identifies natural transformations $\operatorname{Hom}_A(U,-)\Rightarrow G$ with elements of $G(U)$; concretely, a natural transformation between represented functors $\operatorname{Hom}_A(U,-)\Rightarrow\operatorname{Hom}_A(V,-)$ is determined by, and determined as precomposition with, a map $V\to U$ ([[thm-yoneda-lemma-is-natural-in-both-variables]]).

[F7] For a finite-dimensional $(A,B)$-bimodule $U$, tensor-Hom adjunction gives $U\otimes_B-\dashv\operatorname{Hom}_A(U,-)$, restricting to finite-dimensional modules because both tensor products and Hom-spaces remain finite-dimensional. Hence $\operatorname{Hom}_A(U,-)$ preserves finite limits and is left exact; it is $k$-linear by postcomposition and the agreeing scalar actions ([[lem-tensor-hom-adjunction-for-bimodules]], [[thm-right-adjoints-preserve-limits]], [[def-k-linear-category-and-k-linear-functor]]).

## Proof

**Proof technique:** direct.

1.1 The $k$-dual $A^{*}$ with the actions $(a\cdot\lambda)(x)=\lambda(xa)$ and $(\lambda\cdot a)(x)=\lambda(ax)$ is a finite-dimensional $(A,A)$-bimodule (the actions commute by associativity of multiplication in $A$), and $\lambda\mapsto\lambda\cdot a$ is left $A$-linear for each $a$, since $((b\cdot\lambda)\cdot a)(x)=\lambda(axb)=(b\cdot(\lambda\cdot a))(x)$. Hence $F$ is defined on $A^{*}$ and, by [F3] applied to the bimodule $A^{*}$ in place of the regular module, $M=F(A^{*})$ is a finite-dimensional $(B,A)$-bimodule, the right action being $m\cdot a=F(\lambda\mapsto\lambda\cdot a)(m)$. [F1, F3, given]

1.2 Define $F^{\mathrm{d}}(Y)=F(Y^{*})^{*}$ for finite-dimensional left $A^{\mathrm{op}}$-modules $Y$ (equivalently right $A$-modules): $Y^{*}$ is a finite-dimensional left $A$-module by [F1], so $F(Y^{*})$ is in $B\text{-}\mathrm{mod}$ and its dual is a left $B^{\mathrm{op}}$-module, so $F^{\mathrm{d}}$ is a functor $A^{\mathrm{op}}\text{-}\mathrm{mod}\to B^{\mathrm{op}}\text{-}\mathrm{mod}$, $k$-linear by [F1]. It is right exact: if $Y_1\to Y_2\to Y_3\to0$ is exact, then dualizing gives the exact sequence $0\to Y_3^{*}\to Y_2^{*}\to Y_1^{*}$ by exactness of the duality [F1], left exactness of $F$ gives $0\to F(Y_3^{*})\to F(Y_2^{*})\to F(Y_1^{*})$, and dualizing again gives the exact sequence $F^{\mathrm{d}}(Y_1)\to F^{\mathrm{d}}(Y_2)\to F^{\mathrm{d}}(Y_3)\to0$. [F1, F5, given]

2.1 By [F2] applied to the finite-dimensional algebras $A^{\mathrm{op}}$ and $B^{\mathrm{op}}$, the right exact $k$-linear functor $F^{\mathrm{d}}$ is naturally isomorphic to $K\otimes_{A^{\mathrm{op}}}-$ with kernel $K=F^{\mathrm{d}}(A^{\mathrm{op}})$, a finite-dimensional $(B^{\mathrm{op}},A^{\mathrm{op}})$-bimodule. The dual of the regular left $A^{\mathrm{op}}$-module is $A^{*}$ with the left $A$-action $(a\cdot\lambda)(x)=\lambda(xa)$ of step 1.1, so $K=F(A^{*})^{*}=M^{*}$ under the identifications of [F1]; thus $K$ is the $(A,B)$-bimodule dual of $M$. [F1, F2, step 1.1, step 1.2]

3.1 For $X\in A\text{-}\mathrm{mod}$ double duality of [F1] gives $F(X)\cong F(X^{**})\cong F^{\mathrm{d}}(X^{*})^{*}$, and step 2.1 gives $F^{\mathrm{d}}(X^{*})\cong K\otimes_{A^{\mathrm{op}}}X^{*}$; hence $F(X)\cong(K\otimes_{A^{\mathrm{op}}}X^{*})^{*}$, naturally in $X$. [F1, step 1.2, step 2.1]

3.2 There is a natural left $B$-module isomorphism $(K\otimes_{A^{\mathrm{op}}}X^{*})^{*}\cong\operatorname{Hom}_A(M^{*},X)$. Here $K=M^{*}$ is a left $A$-module and right $B$-module, and is regarded as a right $A^{\mathrm{op}}$-module by $u\cdot a^{\mathrm{op}}=au$; $X^{*}$ is a left $A^{\mathrm{op}}$-module by $a^{\mathrm{op}}\lambda=\lambda\cdot a$. For $A$-linear $\varphi:M^{*}\to X$, the pairing $u\otimes\lambda\mapsto\lambda(\varphi(u))$ is balanced since $\lambda(\varphi(au))=\lambda(a\varphi(u))=(\lambda\cdot a)(\varphi(u))$. Conversely a functional $\omega$ defines $u\mapsto[\lambda\mapsto\omega(u\otimes\lambda)]$ into $X^{**}\cong X$, and balancing makes this map $A$-linear. These constructions are inverse, $k$-linear and natural in $X$. The tensor product carries a right $B$-action $(u\otimes\lambda)b=(ub)\otimes\lambda$, so its dual has left action $(b\omega)(u\otimes\lambda)=\omega(ub\otimes\lambda)$. This corresponds to $(b\varphi)(u)=\varphi(ub)$, proving $B$-linearity. [F1, F4, step 1.1, step 2.1, algebra]

4.1 Combining steps 3.1 and 3.2 gives a natural isomorphism $F(X)\cong\operatorname{Hom}_A(M^{*},X)$ of left $B$-modules for every finite-dimensional left $A$-module $X$, with $M=F(A^{*})$ a finite-dimensional $(B,A)$-bimodule by step 1.1. [step 1.1, step 3.1, step 3.2]

5.1 (Equivalence on hom-categories.) The assignment lands in $k$-linear left exact functors by [F7]. For finite-dimensional $(B,A)$-bimodules $M,N$, a natural transformation $\eta:\operatorname{Hom}_A(M^{*},-)\Rightarrow\operatorname{Hom}_A(N^{*},-)$ with $B$-linear components corresponds by the Yoneda computation [F6] to the map $f=\eta_{M^{*}}(1_{M^{*}}):N^{*}\to M^{*}$, which is $A$-linear by construction and right $B$-linear: naturality at $r_b:M^{*}\to M^{*}$ gives $r_b^{M^{*}}f=\eta_{M^{*}}(r_b^{M^{*}})$, while $B$-linearity of $\eta_{M^{*}}$ gives $\eta_{M^{*}}(r_b^{M^{*}})=bf=fr_b^{N^{*}}$; conversely every $(A,B)$-bimodule map $N^{*}\to M^{*}$ gives such a natural transformation by precomposition. By the bimodule duality [F1] these correspond bijectively to $(B,A)$-bimodule maps $M\to N$; so the assignment $M\mapsto\operatorname{Hom}_A(M^{*},-)$ is full and faithful. It is essentially surjective by step 4.1: every $k$-linear left exact $F$ is naturally isomorphic to $\operatorname{Hom}_A(F(A^{*})^{*},-)$ with $F(A^{*})$ a $(B,A)$-bimodule. Hence the assignment is an equivalence of categories, and it has quasi-inverse $F\mapsto F(A^{*})$: on objects this returns $F$ up to the isomorphism of step 4.1, and on morphisms it sends a natural transformation to its component at $A^{*}$, a $(B,A)$-bimodule map by naturality against the right-action maps of $A^{*}$. The other composite is naturally isomorphic to $M$: $\operatorname{Hom}_A(M^{*},A^{*})\cong M$ sends $\varphi$ to the unique $m$ with $u(m)=\varphi(u)(1)$ for every $u\in M^{*}$, using double duality. Its inverse sends $m$ to $u\mapsto[a\mapsto u(ma)]$; these formulas respect both actions and are natural in $M$. [F1, F6, F7, step 4.1]

6.1 Steps 1.1, 4.1 and 5.1 prove the statement: $M=F(A^{*})$ is a finite-dimensional $(B,A)$-bimodule, $F(X)\cong\operatorname{Hom}_A(M^{*},X)$ naturally in $X$, and $M\mapsto\operatorname{Hom}_A(M^{*},-)$ is an equivalence with quasi-inverse $F\mapsto F(A^{*})$. No commutativity of $A$ or $B$ was used, and all dualities, tensor products and presentations involved are finite-dimensional, so no choice is used. [step 1.1, step 4.1, step 5.1, given] ∎

---
id: thm-finite-eilenberg-watts-for-right-exact-linear-functors
kind: theorem
title: "Finite Eilenberg–Watts for right exact linear functors"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
justified_by: []
aliases: []
deps: [def-functor-category, cor-every-module-is-a-quotient-of-a-free-module, def-additive-functor, def-bimodule, def-equivalence-and-adjoint-equivalence-of-categories, def-exact-and-short-exact-sequences-of-modules, def-generated-cyclic-finitely-generated-and-free-modules, def-k-linear-category-and-k-linear-functor, def-left-exact-and-right-exact-functor, def-module-homomorphism-kernel-image-and-cokernel, def-natural-transformation, lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural, lem-canonical-free-presentation-controls-eilenberg-watts-comparison, lem-evaluation-on-the-regular-module-has-a-commuting-right-action, lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums, prop-finite-dimensional-module-categories-are-intrinsically-finite, prop-functoriality-of-module-tensor-products, thm-an-additive-functor-preserves-finite-biproducts, thm-bimodule-actions-induced-on-tensor-products, thm-natural-transformations-of-tensor-functors-are-bimodule-maps, thm-unit-isomorphisms-for-module-tensor-products, thm-universal-property-of-module-tensor-products]
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
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1, Lemma 2.2, equation (2.1))"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Throughout, a bimodule over $k$-algebras means a $k$-vector space with $k$-bilinear commuting actions and agreeing scalar actions: $(c1_B)m=m(c1_A)=cm$ for $c\in k$ in a $(B,A)$-bimodule. This compatibility is an additional requirement beyond the ring-bimodule definition [[def-bimodule]].

For assertions forming categories of functors, fix a set of allowed finite-dimensional $k$-vector space structures containing $k$ and the underlying spaces of the algebras considered, and closed under finite biproducts, subspaces, quotients, $k$-tensor products, $k$-duals and spaces of linear maps. Allow every compatible algebra, module and bimodule structure on these spaces. The resulting module categories are small, so their functors and natural transformations are set-coded as required by [[def-functor-category]]. The objectwise formulas apply without this size restriction; no category of proper-class functors is asserted.

Let $A$ and $B$ be finite-dimensional unital algebras over a field $k$, and let
$A\text{-}\mathrm{mod}$ and $B\text{-}\mathrm{mod}$ be the categories of
finite-dimensional left modules.

(i) For every finite-dimensional $(B,A)$-bimodule $M$ the functor
$T_M=M\otimes_A-:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$ is well
defined, $k$-linear and right exact.

(ii) Conversely every $k$-linear right exact functor
$F:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$ is naturally isomorphic to
$T_{F(A)}$, where $F(A)$ carries the $(B,A)$-bimodule structure of
[[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]];
explicitly the canonical comparison $\tau_X:F(A)\otimes_AX\to F(X)$,
$\tau_X(m\otimes x)=F(\ell_x)(m)$ with $\ell_x(a)=ax$, is a natural
isomorphism.

(iii) For finite-dimensional $(B,A)$-bimodules $M,M'$ the assignment
$f\mapsto(f\otimes1_X)_X$ is a bijection
$\operatorname{Hom}_{B\text{-}A}(M,M')\to\operatorname{Nat}(T_M,T_{M'})$,
compatible with addition, identities and vertical composition.

(iv) Hence $M\mapsto T_M$ is an equivalence of categories between the category
of finite-dimensional $(B,A)$-bimodules with bimodule maps and the category of
$k$-linear right exact functors $A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$
with all natural transformations. No commutativity of $A$ or $B$ is assumed and
no choice is used.

## Facts & Assumptions

**Given:** The scalar and size conventions above, a field $k$, finite-dimensional unital $k$-algebras $A$ and $B$, a finite-dimensional $(B,A)$-bimodule $M$, and a $k$-linear right exact functor $F:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$ on finite-dimensional left modules.

[F1] For a unital ring $A$ and a right $A$-module $M$ the functor $M\otimes_A-$ is additive, preserves cokernels, and hence is right exact; if $M$ is a $(B,A)$-bimodule it takes values in left $B$-modules and all the induced maps are $B$-linear, with no commutativity and no choice ([[lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums]]).

[F2] The tensor product $M\otimes_AX$ of a right $A$-module with a left $A$-module is a quotient of $M\otimes_kX$; when $M$ is a $(B,A)$-bimodule and $X$ a left $A$-module there is a unique left $B$-module structure with $b(m\otimes x)=(bm)\otimes x$, and for a left $A$-linear $u:X\to Y$ the map $1_M\otimes u$ is $B$-linear, functorial, additive and $k$-homogeneous in $u$ ([[thm-universal-property-of-module-tensor-products]], [[thm-bimodule-actions-induced-on-tensor-products]], [[prop-functoriality-of-module-tensor-products]]).

[F3] For an additive functor $F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ the module $F(A)$ carries a $(B,A)$-bimodule structure with $ma=F(r_a)(m)$ for the right multiplications $r_a$, commuting with the left $B$-action, using only functoriality on the maps $r_a:A\to A$ ([[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]], [[def-bimodule]]).

[F4] For an additive $F$ and $M=F(A)$ as in [F3], the pairing $\beta_X(m,x)=F(\ell_x)(m)$ is balanced in $m$ and $B$-linear, so it induces a $B$-linear map $\tau_X:M\otimes_AX\to F(X)$ that is natural in $X$; the computation uses only additivity and functoriality of $F$ on the maps $\ell_x:A\to X$ and the universal property of the tensor product ([[lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural]], [[thm-universal-property-of-module-tensor-products]]).

[F5] An additive functor between additive categories preserves finite biproducts ([[thm-an-additive-functor-preserves-finite-biproducts]], [[def-additive-functor]]).

[F6] For every left $A$-module $X$ the unit map $\rho_{M'}:M'\otimes_AA\to M'$, $m\otimes a\mapsto ma$, is an isomorphism natural in the right module $M'$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F7] Every finite-dimensional left $A$-module $X$ admits a finite presentation $A^s\xrightarrow{\alpha}A^r\xrightarrow{\beta}X\to0$: finitely many generators give the surjection $\beta$, and the kernel is a submodule of the finite-dimensional space $A^r$, hence finite-dimensional, so finitely many of its generators give $\alpha$; right exact functors preserve the exactness of this sequence ([[cor-every-module-is-a-quotient-of-a-free-module]], [[def-generated-cyclic-finitely-generated-and-free-modules]], [[def-exact-and-short-exact-sequences-of-modules]], [[def-left-exact-and-right-exact-functor]], [[def-module-homomorphism-kernel-image-and-cokernel]]).

[F8] Every natural transformation $\eta:T_M\Rightarrow T_{M'}$ between tensor functors of $(B,A)$-bimodules is determined by its component at $A$: with $f=\rho_{M'}\circ\eta_A\circ\rho_M^{-1}$ one has $f(ma)=f(m)a$, so $f$ is a $(B,A)$-bimodule map, and $\eta_X=f\otimes1_X$ for every left $A$-module $X$; conversely every bimodule map $f$ gives such a natural transformation, and the two assignments are inverse bijections compatible with addition, identities and vertical composition, using only the maps $\ell_x$ and the unit isomorphisms ([[thm-natural-transformations-of-tensor-functors-are-bimodule-maps]]).

[F9] The general comparison theorem proves that $\tau$ is a natural isomorphism for every additive, right exact, coproduct-preserving functor on all modules, by the cokernel-universality argument on the canonical free presentation of an arbitrary module; its hypotheses are stronger than those available on $A\text{-}\mathrm{mod}$, where $F$ is defined only on finite modules and only finite presentations occur ([[lem-canonical-free-presentation-controls-eilenberg-watts-comparison]]).



## Proof

**Proof technique:** direct.

1.1 (i) Let $M$ be a finite-dimensional $(B,A)$-bimodule. For a finite-dimensional left $A$-module $X$ the tensor product $M\otimes_AX$ is a quotient of $M\otimes_kX$, hence finite-dimensional: if $(m_i)$ and $(x_j)$ are finite $k$-bases then the tensors $m_i\otimes x_j$ span, by expansion in both factors and the agreeing scalar actions, and by [F2] it is a left $B$-module with $b(m\otimes x)=(bm)\otimes x$; for a left $A$-linear $u:X\to Y$ the map $T_M(u)=1_M\otimes u$ is $B$-linear, preserves identities and composition, and is additive and $k$-homogeneous in $u$ by [F2]. Hence $T_M$ is a well-defined $k$-linear functor $A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$. [F2, given]

1.2 (ii, the comparison.) Let $F$ be $k$-linear and right exact. By [F3] the finite-dimensional left $B$-module $F(A)$ carries a $(B,A)$-bimodule structure commuting with the $B$-action, and for $x\in X$ the map $\ell_x:A\to X$, $\ell_x(a)=ax$, is left $A$-linear between finite-dimensional modules, so $F(\ell_x)$ is defined. The balanced-map computation of [F4] uses only additivity and functoriality of $F$ on these maps and the tensor universal property, so it applies verbatim and yields a $B$-linear map $\tau_X:F(A)\otimes_AX\to F(X)$, $\tau_X(m\otimes x)=F(\ell_x)(m)$, natural in $X$. The scalar actions on $F(A)$ agree because $r_{c1_A}=c1_A$ as endomorphisms and $F(r_{c1_A})=c1_{F(A)}$ by $k$-linearity. [F3, F4, given, algebra]

2.1 (i, right exactness.) Let $X\xrightarrow{u}Y\xrightarrow{v}Z\to0$ be exact in $A\text{-}\mathrm{mod}$. Applying [F1] gives the exact sequence $M\otimes_AX\xrightarrow{1\otimes u}M\otimes_AY\xrightarrow{1\otimes v}M\otimes_AZ\to0$: the functor $M\otimes_A-$ preserves cokernels, and every module occurring is finite-dimensional because each is a quotient of a finite tensor product, so the computation takes place entirely inside the finite categories. Hence $T_M$ is right exact. [F1, F2, step 1.1]

2.2 (ii, the comparison is an isomorphism on free modules.) For $X=A$ the map $\tau_A:F(A)\otimes_AA\to F(A)$ sends $m\otimes a$ to $F(\ell_a)(m)=F(r_a)(m)=ma$ by [F3], so it is the unit isomorphism $\rho_{F(A)}$ of [F6], an isomorphism. Both $F$ and $T_{F(A)}$ are additive and therefore preserve finite biproducts by [F5], and $\tau$ is natural; hence for every $r\ge0$ the map $\tau_{A^r}$ is the direct sum of $r$ copies of $\tau_A$ and is an isomorphism. [F5, F6, step 1.2]

2.3 (iii) Let $M,M'$ be finite-dimensional $(B,A)$-bimodules. Every natural transformation $\eta:T_M\Rightarrow T_{M'}$ has, by [F8], the form $\eta_X=f\otimes1_X$ for the bimodule map $f=\rho_{M'}\eta_A\rho_M^{-1}:M\to M'$, and conversely every bimodule map $f$ yields such a natural transformation; the two assignments are inverse bijections compatible with addition, identities and vertical composition. Because every object and every map occurring in the computation ($A$, $X$, the maps $\ell_x$, and the unit isomorphisms) lies in the finite module categories, the classification restricts verbatim from all modules to $A\text{-}\mathrm{mod}$. [F6, F8, step 1.1]

3.1 (ii, isomorphism for all finite-dimensional $X$.) Let $X\in A\text{-}\mathrm{mod}$ and choose a finite presentation $A^s\xrightarrow{\alpha}A^r\xrightarrow{\beta}X\to0$ by [F7]. By naturality of $\tau$ and right exactness of $F$ and of $T_{F(A)}$ (step 2.1) there is a commutative diagram with exact rows comparing $\tau$ on $A^s\to A^r\to X\to0$, and the first two vertical maps are isomorphisms by step 2.2. The induced map on cokernels is therefore an isomorphism: if $q$ and $q'$ are the cokernel maps of $T(\alpha)$ and $F(\alpha)$, then $\tau_X$ is characterized by $\tau_Xq=q'\tau_r$, and the map $s$ defined by $sq'=q\tau_r^{-1}$ satisfies $s\tau_X=1$ and $\tau_Xs=1$ after composing with the epimorphisms $q,q'$. This is the finite-presentation form of the cokernel-universality argument of [F9]: the coproduct-preservation hypothesis of [F9] is not available for $F$ on $A\text{-}\mathrm{mod}$, so [F9] is not applied as a statement, but its argument is reproduced here with finite presentations. Hence $\tau_X$ is an isomorphism, so $F\cong T_{F(A)}$ naturally. [F7, F9, step 2.1, step 1.2, step 2.2, algebra]

4.1 (iv) Define $\Phi$ on finite-dimensional $(B,A)$-bimodules by $\Phi(M)=T_M$ and on bimodule maps by $f\mapsto(f\otimes1_X)_X$; by step 1.1 this is a functor into the category of $k$-linear right exact functors, and by step 2.3 it is full and faithful. It is essentially surjective: for a $k$-linear right exact $F$ the comparison of step 3.1 is a natural isomorphism $T_{F(A)}\cong F$, and $F(A)$ is a finite-dimensional $(B,A)$-bimodule by step 1.2. More explicitly, the assignments $M\mapsto T_M$ and $F\mapsto F(A)$ are inverse up to natural isomorphism: $F(A)\otimes_AA\cong F(A)$ by [F6] and $T_{F(A)}\cong F$ by step 3.1, so $\Phi$ is an equivalence of categories with quasi-inverse $F\mapsto F(A)$ (which sends a natural transformation to its component at $A$). The comparison is natural also in $F$: for $\eta:F\Rightarrow G$, naturality at $\ell_x$ gives $\eta_X\tau_X^F(m\otimes x)=G(\ell_x)(\eta_A(m))=\tau_X^G(\eta_A(m)\otimes x)$. The tensor-unit isomorphisms are natural in $M$ by [F6]. [F6, step 3.1, step 2.3]

5.1 Steps 1.1, 2.1, 1.2, 3.1, 2.3 and 4.1 prove (i), (ii), (iii) and (iv). No commutativity of $A$ or $B$ was used, and all presentations, biproducts and bases occurring above are finite data inside finite-dimensional modules, so no choice is used. [step 1.1, step 2.1, step 1.2, step 3.1, step 2.3, step 4.1, given] ∎

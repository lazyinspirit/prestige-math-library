---
id: cor-exact-finite-tensor-functors-have-right-projective-kernels
kind: corollary
title: "Exact finite tensor functors have projective right-module kernels"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
justified_by: []
aliases: []
deps: [cor-every-module-is-a-quotient-of-a-free-module, def-bimodule, def-dimension, def-direct-sum-of-a-family-of-modules, def-exact-functor-between-abelian-categories, def-generated-cyclic-finitely-generated-and-free-modules, def-hom-groups-and-induced-hom-maps, def-left-and-right-flat-modules-over-an-arbitrary-ring, def-left-and-right-modules, def-left-exact-and-right-exact-functor, def-module-homomorphism-kernel-image-and-cokernel, def-projective-module, def-split-monomorphism-and-split-epimorphism, lem-finite-module-duality-is-exact-with-commuting-bimodule-actions, lem-projective-modules-are-flat-over-an-arbitrary-ring, lem-tensor-hom-adjunction-for-bimodules, thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels, thm-modules-over-a-ring-form-an-abelian-category, thm-projective-module-characterizations, thm-splitting-lemma-for-modules, thm-universal-property-of-module-direct-sums, thm-universal-property-of-module-tensor-products]
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

Let $A,B$ be finite-dimensional unital algebras over a field $k$ and let $M$ be
a finite-dimensional $(B,A)$-bimodule with associated tensor functor
$T_M=M\otimes_A-:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$. Then the
following are equivalent: (1) $T_M$ is exact on finite-dimensional left
$A$-modules, equivalently $M$ is flat as a right $A$-module; (2) $M$ is a
projective right $A$-module. Since $M$ is finite-dimensional, (2) is also
equivalent to $M$ being a direct summand of a finite free right $A$-module and
to $M$ being finitely generated and projective. No choice is used.

## Facts & Assumptions

**Given:** The agreeing scalar convention above, a field $k$, finite-dimensional unital $k$-algebras $A,B$, and a finite-dimensional $(B,A)$-bimodule $M$, with $T_M=M\otimes_A-:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$.

[F1] A right $A$-module $N$ is flat exactly when $N\otimes_A-$ is exact on left $A$-modules; every projective right $A$-module is flat, without choice ([[def-left-and-right-flat-modules-over-an-arbitrary-ring]], [[lem-projective-modules-are-flat-over-an-arbitrary-ring]]).

[F2] The choice-free direction $1\Rightarrow4$ of the projective-module characterizations produces, from the canonical free cover, an identification of a projective module with a direct summand of a free module; for a finitely generated module the cover may be taken over a finite generating set, so the free module is finite; conversely a direct summand of a free module whose basis is finite is projective, since lifts of the finitely many basis elements can be chosen ([[thm-projective-module-characterizations]], [[def-projective-module]], [[cor-every-module-is-a-quotient-of-a-free-module]], [[def-generated-cyclic-finitely-generated-and-free-modules]]).

[F3] For a $(B,A)$-bimodule $N$ and finite-dimensional left $A$-modules $X$, duality and the tensor-hom adjunction give a natural isomorphism $(N\otimes_AX)^{*}\cong\operatorname{Hom}_{A^{\mathrm{op}}}(N,X^{*})$ of left $B^{\mathrm{op}}$-modules: a functional $\omega$ corresponds to $u\mapsto(x\mapsto\omega(u\otimes x))$, and the balancing relation for $\omega$ is exactly $A^{\mathrm{op}}$-linearity of that map, because $u\cdot a$ denotes the right $A$-action on $N$ and $\lambda\cdot a$ the right $A$-action on $X^{*}$ ([[thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels]], [[lem-finite-module-duality-is-exact-with-commuting-bimodule-actions]], [[thm-universal-property-of-module-tensor-products]], [[lem-tensor-hom-adjunction-for-bimodules]]).

[F4] Duality $X\mapsto X^{*}$ is an exact contravariant equivalence between finite-dimensional left $A$-modules and finite-dimensional left $A^{\mathrm{op}}$-modules, so a functor on one side is exact exactly when the corresponding functor on the other side is ([[lem-finite-module-duality-is-exact-with-commuting-bimodule-actions]]).

[F5] The category $A\text{-}\mathrm{mod}$ is abelian; a finite-dimensional left $A$-module is finitely generated, and a finite-dimensional right $A$-module has a finite free cover $A^{n}\twoheadrightarrow N$ built from a finite $k$-basis ([[thm-modules-over-a-ring-form-an-abelian-category]], [[def-dimension]], [[cor-every-module-is-a-quotient-of-a-free-module]], [[thm-universal-property-of-module-direct-sums]], [[def-direct-sum-of-a-family-of-modules]]).

[F6] If $N$ is a direct summand of the free right module $A^{n}$ with inclusion $h:N\to A^{n}$ and retraction $p:A^{n}\twoheadrightarrow N$, then $N$ is projective: given a surjection $e:E\twoheadrightarrow N'$ and $f:N\to N'$, lift $fp:A^n\to N'$ by choosing preimages under $e$ of the images of its finitely many basis vectors; precomposing the resulting lift with $h$ lifts $f$ ([[thm-projective-module-characterizations]], [[def-projective-module]], [[thm-splitting-lemma-for-modules]], [[def-split-monomorphism-and-split-epimorphism]]).



## Proof

**Proof technique:** direct.

1.1 (2)$\Rightarrow$(1). If $M$ is a projective right $A$-module, then $M$ is flat by [F1], that is, $M\otimes_A-$ is exact on left $A$-modules; restricting to finite-dimensional left modules, $T_M$ is exact on $A\text{-}\mathrm{mod}$. Equivalently, $M$ is a direct summand of a free right module by [F2], tensoring with a free module is a direct sum of copies of the identity, and a direct summand of an exact functor is exact. [F1, F2]

1.2 ((1), transport of exactness.) Suppose $T_M$ is exact on finite-dimensional left $A$-modules. By [F3] there are natural isomorphisms $(M\otimes_AX)^{*}\cong\operatorname{Hom}_{A^{\mathrm{op}}}(M,X^{*})$ for finite-dimensional left $A$-modules $X$; since $X\mapsto X^{*}$ is an exact contravariant equivalence between $A\text{-}\mathrm{mod}$ and $A^{\mathrm{op}}\text{-}\mathrm{mod}$ by [F4], exactness of $M\otimes_A-$ on the finite left modules is equivalent to exactness of $\operatorname{Hom}_{A^{\mathrm{op}}}(M,-)$ on the finite right $A$-modules. [F3, F4]

2.1 ((1)$\Rightarrow$(2), the cover splits.) Keep the hypothesis of step 1.2. Since $M$ is finite-dimensional it is finitely generated as a right $A$-module, so a finite $k$-basis of $M$ induces a surjection $p:A^{n}\twoheadrightarrow M$ of right $A$-modules by [F5]. Exactness of $\operatorname{Hom}_{A^{\mathrm{op}}}(M,-)$ at this surjection gives that $\operatorname{Hom}_{A^{\mathrm{op}}}(M,A^{n})\to\operatorname{Hom}_{A^{\mathrm{op}}}(M,M)$ is surjective, so the identity of $M$ lifts to $h:M\to A^{n}$ with $ph=1_M$; hence $M$ is a direct summand of the finite free right $A$-module $A^{n}$, and is projective by [F6]. [F5, F6, step 1.2, choose, construct]

3.1 The finite-generation clause: a finite-dimensional module is finitely generated by [F5]; conversely a finitely generated projective right module is a direct summand of a finite free module by [F2], giving the stated equivalences. Steps 1.1 and 2.1 prove (2)$\Rightarrow$(1) and (1)$\Rightarrow$(2), so the exactness of $T_M$, the flatness of $M$, the projectivity of $M$, and the finite-summand and finite-generation conditions are all equivalent. [F1, F2, F5, step 1.1, step 2.1]

4.1 All covers, bases and summands used above are finite (they come from finite $k$-bases of finite-dimensional modules), and no commutativity of $A$ or $B$ was used, so no choice is used. [step 1.1, step 1.2, step 2.1, step 3.1, given] ∎

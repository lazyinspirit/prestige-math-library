---
id: lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence
kind: lemma
title: "The Morita data satisfy the bicategory coherence axioms"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
justified_by: []
aliases: []
deps: [def-morita-bicategory-of-rings-and-bimodules, def-bicategory-pseudofunctor-and-biequivalence, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, thm-bimodule-actions-induced-on-tensor-products, prop-functoriality-of-module-tensor-products, def-tensor-product-of-modules-by-generators-and-relations, def-bimodule]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Johnson and D. Yau, 2-Dimensional Categories, Example 2.1.26 (Bimod) and Definition 2.1.3 (bicategory axioms, printed p.32f)"
      url: "https://arxiv.org/pdf/2002.06055"
    - title: "Fuchs-Schaumann-Schweigert, Eilenberg-Watts calculus for finite categories, introduction (bimodules as 1-cells and tensoring as composition)"
      url: "https://arxiv.org/pdf/1612.04561v3"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

The data of [[def-morita-bicategory-of-rings-and-bimodules]] satisfy the bicategory axioms of [[def-bicategory-pseudofunctor-and-biequivalence]]. Explicitly: for a $(D,C)$-bimodule $H$, a $(C,B)$-bimodule $G$, and a $(B,A)$-bimodule $F$ the canonical associativity isomorphisms are natural isomorphisms of bimodules
$$\alpha_{H,G,F}:(H\otimes_CG)\otimes_BF\longrightarrow H\otimes_C(G\otimes_BF);$$
the unitors $B\otimes_BF\cong F$ and $F\otimes_AA\cong F$ are natural isomorphisms; the pentagon and triangle identities hold; and horizontal composition of bimodule maps, $(g,f)\mapsto g\otimes f$, is a functor on hom-categories that preserves identities and composition. Consequently the composition functors, associator, and unitors make the Morita data a genuine bicategory: every tensor is a finite sum of elementary tensors, on which the coherence diagrams are checked, and the two sides of each diagram agree on all elements. No commutativity of the rings and no choice are used.

## Facts & Assumptions

**Given:** The Morita data of [[def-morita-bicategory-of-rings-and-bimodules]]: objects are unital rings; $\mathbf{Bimod}(A,B)$ has the $(B,A)$-bimodules as objects and the simultaneously left $B$-linear and right $A$-linear maps as morphisms; the identity 1-cell of $A$ is ${}_AA_A$; composition is $N\otimes_BM$ on a $(C,B)$-bimodule $N$ and a $(B,A)$-bimodule $M$, with $(g,f)\mapsto g\otimes f$ on maps.

[F1] The composite of a $(D,C)$-bimodule with a $(C,B)$-bimodule carries induced commuting outer actions and is a $(D,B)$-bimodule, and its elementary tensors satisfy $d(m\otimes n)=(dm)\otimes n$ and $(m\otimes n)b=m\otimes(nb)$ ([[thm-bimodule-actions-induced-on-tensor-products]], [[def-bimodule]]).

[F2] There is a canonical group isomorphism $\alpha_{M,N,P}:(M\otimes_RN)\otimes_SP\to M\otimes_R(N\otimes_SP)$ with $\alpha((m\otimes n)\otimes p)=m\otimes(n\otimes p)$; it is natural in $M,N,P$ and respects every compatible outer module action ([[thm-associativity-of-balanced-tensor-products]]).

[F3] There are canonical group isomorphisms $\lambda_N:R\otimes_RN\to N$, $r\otimes n\mapsto rn$, and $\rho_M:M\otimes_RR\to M$, $m\otimes r\mapsto mr$, natural in the module and respecting every displayed outer module structure ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F4] For module maps $g$ and $f$ the tensor map $g\otimes f$ is a well-defined homomorphism with $(g\otimes f)(m\otimes n)=g(m)\otimes f(n)$, compatible with outer actions, preserving identities and composition: $1\otimes1=1$ and $(g'\circ g)\otimes(f'\circ f)=(g'\otimes f')\circ(g\otimes f)$ ([[prop-functoriality-of-module-tensor-products]], [[thm-bimodule-actions-induced-on-tensor-products]]).

[F5] Every element of a tensor product is a finite sum of elementary tensors, and the balancing relation $(mr)\otimes n=m\otimes(rn)$ holds; two additive maps out of a tensor product agreeing on all elementary tensors are equal ([[def-tensor-product-of-modules-by-generators-and-relations]]).

## Proof

**Proof technique:** direct.

1.1 (The associator is a natural bimodule isomorphism.) For a $(D,C)$-bimodule $H$, a $(C,B)$-bimodule $G$ and a $(B,A)$-bimodule $F$, the map $\alpha_{H,G,F}:(H\otimes_CG)\otimes_BF\to H\otimes_C(G\otimes_BF)$ of [F2] is a group isomorphism sending $(h\otimes g)\otimes f$ to $h\otimes(g\otimes f)$. It respects the outer actions by [F2], and both sides are $(D,A)$-bimodules with the induced actions of [F1], so $\alpha_{H,G,F}$ is an isomorphism of $(D,A)$-bimodules, natural in each variable by [F2]. [F1, F2, given]

1.2 (The unitors are natural bimodule isomorphisms.) For a $(B,A)$-bimodule $F$, [F3] applied to the left $B$-module $F$ gives $\lambda_F:B\otimes_BF\to F$, $b\otimes f\mapsto bf$, and applied to the right $A$-module $F$ gives $\rho_F:F\otimes_AA\to F$, $f\otimes a\mapsto fa$; both are group isomorphisms, respect the outer actions by [F3] and are natural in $F$. These are the unitors of the Morita data at the identity 1-cells ${}_BB_B$ and ${}_AA_A$. [F1, F3, given]

1.3 (Horizontal composition is a functor.) For rings $A,B,C$ the assignment $c$ sending a pair $(G,F)\in\mathbf{Bimod}(B,C)\times\mathbf{Bimod}(A,B)$ to $G\otimes_BF\in\mathbf{Bimod}(A,C)$ and a pair of bimodule maps $(g,f)$ to the bimodule map $g\otimes f$ is well defined on objects and morphisms by [F1] and [F4]. It preserves identities and composition by the two laws of [F4], and it is functorial in each variable by the same formulas, hence a functor on the product of hom-categories. [F1, F4, given]

2.1 (Pentagon.) Let $K,H,G,F$ be a $(E,D)$-, $(D,C)$-, $(C,B)$- and $(B,A)$-bimodule. Both sides of the pentagon identity are maps $\bigl((K\otimes_DH)\otimes_CG\bigr)\otimes_BF\to K\otimes_D\bigl(H\otimes_C(G\otimes_BF)\bigr)$ of $(E,A)$-bimodules built from the associators of step 1.1 and whiskered identities, hence additive and action-preserving. On an elementary tensor $((k\otimes h)\otimes g)\otimes f$ a direct computation shows that both paths perform the same rebracketing: the left-hand path gives first $(k\otimes h)\otimes(g\otimes f)$ and then $k\otimes(h\otimes(g\otimes f))$, while the right-hand path gives successively $(k\otimes(h\otimes g))\otimes f$, then $k\otimes((h\otimes g)\otimes f)$, then the same element $k\otimes(h\otimes(g\otimes f))$. Since the domain is generated additively by elementary tensors by [F5], the two maps are equal. [F5, step 1.1, given, algebra]

2.2 (Triangle.) Let $G$ be a $(C,B)$-bimodule and $F$ a $(B,A)$-bimodule. Both sides of the triangle identity are maps $(G\otimes_BB)\otimes_BF\to G\otimes_BF$; on an elementary tensor $(x\otimes b)\otimes y$ the composite $(1_G*\lambda_F)\circ\alpha_{G,{}_BB_B,F}$ sends it to $x\otimes(by)$, while $\rho_G*1_F$ sends it to $(xb)\otimes y$, and these agree by the balancing relation $xb\otimes y=x\otimes by$ of [F5]. By [F5] the two maps agree on the whole tensor product. [F5, step 1.1, step 1.2, given, algebra]

3.1 (Assembly.) Step 1.3 gives the composition functors with their functoriality, steps 1.1 and 1.2 give the associator and the two unitors as natural bimodule isomorphisms with the correct variances, and steps 2.1 and 2.2 verify the pentagon and triangle identities, every coherence equation being checked on elementary tensors and extended by additivity. All maps are the canonical tensor isomorphisms, no element outside the given modules is selected, and no commutativity of rings is assumed. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎

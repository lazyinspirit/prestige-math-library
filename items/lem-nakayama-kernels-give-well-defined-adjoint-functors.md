---
id: lem-nakayama-kernels-give-well-defined-adjoint-functors
kind: lemma
title: "Nakayama kernels give well-defined adjoint functors"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [cor-a-right-adjoint-preserves-ends-and-a-left-adjoint-preserves-coends, def-adjunction-by-unit-counit-and-triangle-identities, def-algebraic-dual-and-linear-functional, def-bimodule, def-end-and-coend, def-functor-and-contravariant-functor, def-k-linear-category-and-k-linear-functor, def-left-and-right-modules, def-left-and-right-nakayama-functors-by-finite-kernel-calculus, def-left-exact-and-right-exact-functor, def-linear-map, def-natural-isomorphism, def-natural-transformation, lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps, lem-finite-module-duality-is-exact-with-commuting-bimodule-actions, lem-finite-vector-space-copowers-in-a-linear-abelian-category, lem-tensor-hom-adjunction-for-bimodules, prop-functoriality-of-module-tensor-products, thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories, thm-ends-and-coends-are-unique-up-to-unique-isomorphism, thm-every-equivalence-can-be-made-an-adjoint-equivalence, thm-unit-isomorphisms-for-module-tensor-products, thm-universal-property-of-module-tensor-products]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, author final version, §1.11 (Definition 1.11.1 and Proposition 1.11.2 with its coalgebra-realization sketch), printed pp.15–16"
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 and (2.1)), §2.3 ((2.6)–(2.9)), §2.4 (Proposition 2.8, Corollary 2.9 and (2.18)–(2.31)), §§3.1–3.2 (Definition 3.1, Theorem 3.2, Lemma 3.3, Proposition 3.4 and Corollaries 3.5–3.7), §3.5 (Definition 3.14, Lemmas 3.15–3.16 and (3.56)–(3.58))"
      url: https://arxiv.org/pdf/1612.04561v3
dependency_level: 9
---

## Statement

Let $\mathcal A$ be a finite $k$-linear abelian category with a chosen module model $\mathcal A\simeq A\text{-}\mathrm{mod}$, $A$ a finite-dimensional $k$-algebra, and let $N^{r}_{\mathcal A}=\Gamma^{rl}(1_{\mathcal A})$, $N^{l}_{\mathcal A}=\Gamma^{lr}(1_{\mathcal A})$ be the Nakayama functors of [[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]]. Then $N^{r}_{\mathcal A},N^{l}_{\mathcal A}$ are well-defined endofunctors that are independent of the module model up to canonical natural isomorphism, and intrinsically they are given by the end/coend formulas
$$N^{r}_{\mathcal A}(X)\cong\int^{a\in\mathcal A}\operatorname{Hom}_{\mathcal A}(X,a)^{*}\otimes a,\qquad N^{l}_{\mathcal A}(X)\cong\int_{a\in\mathcal A}\operatorname{Hom}_{\mathcal A}(a,X)\otimes a,$$
whose universal maps are those of [[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]] ([[def-end-and-coend]]). In the model they compute as
$$N^{r}_{\mathcal A}\cong A^{*}\otimes_A-,\qquad N^{l}_{\mathcal A}\cong\operatorname{Hom}_A(A^{*},-),$$
and there are an explicit unit and counit making $N^{r}_{\mathcal A}$ left adjoint to $N^{l}_{\mathcal A}$ with the triangle identities ([[def-adjunction-by-unit-counit-and-triangle-identities]], [[lem-tensor-hom-adjunction-for-bimodules]]). The regular bimodule $A$ and the co-regular bimodule $A^{*}$ are the respective images of the identity under $\Psi^{r}$ and $\Psi^{l}$ and need not be isomorphic; the functors are not asserted to be equivalences in general. The supplied module equivalence and Deligne-product data carry the existence theorem's AC convention; the formulas and adjunction require no further choice.

## Facts & Assumptions

**Given:** A finite $k$-linear abelian category $\mathcal A$ ([[def-k-linear-category-and-k-linear-functor]]) together with a chosen module model $\mathcal A\simeq A\text{-}\mathrm{mod}$ for a finite-dimensional unital $k$-algebra $A$, the Eilenberg–Watts functors $\Phi^{l},\Phi^{r},\Psi^{l},\Psi^{r}$ of the categorical triangle, and the Nakayama functors $N^{r}_{\mathcal A}=\Gamma^{rl}(1_{\mathcal A})$, $N^{l}_{\mathcal A}=\Gamma^{lr}(1_{\mathcal A})$ of [[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]].

[F1] The functors $\Phi^{l}(M)=\operatorname{Hom}_{\mathcal A}(M^{*},-)$ and $\Phi^{r}(M)=M\otimes_{\mathcal A}-$ on $\mathcal A^{\mathrm{op}}\boxtimes\mathcal A$ are equivalences of categories onto $\operatorname{Lex}(\mathcal A,\mathcal A)$ and $\operatorname{Rex}(\mathcal A,\mathcal A)$ with quasi-inverses $\Psi^{l},\Psi^{r}$, so the triangle $\operatorname{Lex}(\mathcal A,\mathcal A)\simeq\mathcal A^{\mathrm{op}}\boxtimes\mathcal A\simeq\operatorname{Rex}(\mathcal A,\mathcal A)$ of categorical Eilenberg–Watts holds ([[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]]).

[F2] On external objects the two equivalences compute as $\Phi^{l}(\bar a\boxtimes b)(X)\cong\operatorname{Hom}_{\mathcal A}(a,X)\otimes_kb$ and $\Phi^{r}(\bar a\boxtimes b)(X)\cong\operatorname{Hom}_{\mathcal A}(X,a)^{*}\otimes_kb$, both naturally in the object $X$ ([[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]], [[def-natural-transformation]]).

[F3] $\Psi^{l}(F)=\int^{a}\bar a\boxtimes F(a)$ is a coend with universal cowedge $\rho_a:F(a)\otimes_ka^{*}\to M$, $\rho_a(f\otimes\lambda)=\lambda\circ f$, when $F=\Phi^{l}(M)$, and $\Psi^{r}(G)=\int_{a}\bar a\boxtimes G(a)$ is an end with universal wedge $\omega_a:M\to\operatorname{Hom}_k(a,G(a))$, $\omega_a(m)(x)=m\otimes x$, when $G=\Phi^{r}(M)$; moreover $\Psi^{l}\Phi^{l}\cong1$ and $\Psi^{r}\Phi^{r}\cong1$ as natural isomorphisms ([[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]], [[def-end-and-coend]], [[def-natural-isomorphism]]).

[F4] Every equivalence of categories can be equipped as an adjoint equivalence ([[thm-every-equivalence-can-be-made-an-adjoint-equivalence]], [[def-adjunction-by-unit-counit-and-triangle-identities]]), a left adjoint carries a coend to a coend of the composite diagram and a right adjoint carries an end to an end of the composite diagram, with the universal maps ([[cor-a-right-adjoint-preserves-ends-and-a-left-adjoint-preserves-coends]]).

[F5] For the finite-dimensional algebra $A$ the $k$-dual $X^{*}=\operatorname{Hom}_k(X,k)$ is an exact contravariant equivalence of the finite-dimensional module categories, with $\operatorname{ev}_X:X\to X^{**}$ a natural isomorphism ([[lem-finite-module-duality-is-exact-with-commuting-bimodule-actions]], [[def-algebraic-dual-and-linear-functional]], [[def-left-and-right-modules]]).

[F6] The balanced tensor product is unital and functorial: $A\otimes_AX\cong X$ and $A^{*}\otimes_AA\cong A^{*}$ by the multiplication maps, and the outer module structures on tensor products are the induced ones ([[thm-unit-isomorphisms-for-module-tensor-products]], [[prop-functoriality-of-module-tensor-products]], [[def-bimodule]]).

[F7] For a finite-dimensional $k$-vector space $V$ and an object $Y$ of a $k$-linear abelian category there is an object $V\odot Y$ with a natural isomorphism $\mathcal C(V\odot Y,Z)\cong\operatorname{Hom}_k(V,\mathcal C(Y,Z))$, the copower written $V\otimes_kY$ ([[lem-finite-vector-space-copowers-in-a-linear-abelian-category]]).

[F8] Ends and coends are unique up to a unique isomorphism compatible with every component ([[thm-ends-and-coends-are-unique-up-to-unique-isomorphism]], [[def-end-and-coend]]).

[F9] For a $(B,A)$-bimodule $M$ the functor $M\otimes_A-$ is left adjoint to $\operatorname{Hom}_B(M,-)$, with unit $\eta_X(x)(m)=m\otimes x$ and counit $\varepsilon_Y(m\otimes\varphi)=\varphi(m)$, and these satisfy the triangle identities ([[lem-tensor-hom-adjunction-for-bimodules]], [[def-adjunction-by-unit-counit-and-triangle-identities]], [[def-bimodule]]).

## Proof

**Proof technique:** direct.

1.1 The identity functor of $\mathcal A$ preserves every limit and colimit that exists, so it is both left exact and right exact and defines an object of $\operatorname{Lex}(\mathcal A,\mathcal A)$ and of $\operatorname{Rex}(\mathcal A,\mathcal A)$ ([[def-left-exact-and-right-exact-functor]], [[def-functor-and-contravariant-functor]]). The composites $\Gamma^{rl}=\Phi^{r}\Psi^{l}$ and $\Gamma^{lr}=\Phi^{l}\Psi^{r}$ are composites of the equivalences of [F1], hence are themselves equivalences of categories; therefore $N^{r}_{\mathcal A}=\Gamma^{rl}(1_{\mathcal A})$ and $N^{l}_{\mathcal A}=\Gamma^{lr}(1_{\mathcal A})$ are well-defined endofunctors of $\mathcal A$, determined by $\mathcal A$, the two equivalences and the identity functor alone. [given, F1, F4]

2.1 In the chosen model one has $1_{\mathcal A}\cong\Phi^{l}(A^{*})$, because $\Phi^{l}(A^{*})(X)=\operatorname{Hom}_A((A^{*})^{*},X)\cong\operatorname{Hom}_A(A,X)\cong X$ by [F1], the double duality of [F5] and the identification $\operatorname{Hom}_A(A,X)\cong X$, $f\mapsto f(1_A)$, with inverse $x\mapsto(a\mapsto ax)$; similarly $1_{\mathcal A}\cong\Phi^{r}(A)$ because $\Phi^{r}(A)(X)=A\otimes_AX\cong X$ by [F1] and [F6]. Applying the quasi-inverse isomorphisms of [F3] gives $\Psi^{l}(1_{\mathcal A})\cong\Psi^{l}\Phi^{l}(A^{*})\cong A^{*}$ and $\Psi^{r}(1_{\mathcal A})\cong\Psi^{r}\Phi^{r}(A)\cong A$; hence in the model $N^{r}_{\mathcal A}\cong\Phi^{r}(A^{*})=A^{*}\otimes_A-$ and $N^{l}_{\mathcal A}\cong\Phi^{l}(A)=\operatorname{Hom}_A(A^{*},-)$. [step 1.1, F1, F3, F5, F6]

3.1 Evaluation at a fixed finite module $X$ preserves the needed universal objects. In the kernel model, evaluation on Rex is $E_X^r(M)=M\otimes_AX$. For a left $A$-module $Y$, the space $\operatorname{Hom}_k(X,Y)$ is an $(A,A)$-bimodule with $(a f)(x)=a f(x)$ and $(f\cdot a)(x)=f(ax)$. Currying and its inverse $h\mapsto(m\otimes x\mapsto h(m)(x))$ give $\operatorname{Hom}_A(M\otimes_AX,Y)\cong\operatorname{Hom}_{A\text{-}A}(M,\operatorname{Hom}_k(X,Y)).$ Thus $E_X^r$ is a left adjoint. Evaluation on Lex is $E_X^l(M)=\operatorname{Hom}_A(M^*,X)\cong\operatorname{Hom}_{A^{\mathrm{op}}}(X^*,M)$, the isomorphism sending $f$ to $f^*$ followed by $M^{**}\cong M$ [F5]. The mutually inverse assignments $g\mapsto(y\mapsto(\lambda\mapsto g(y\otimes\lambda)))$ and $h\mapsto(y\otimes\lambda\mapsto h(y)(\lambda))$ give $\operatorname{Hom}_{A\text{-}A}(Y\otimes_kX^*,M)\cong\operatorname{Hom}_A(Y,\operatorname{Hom}_{A^{\mathrm{op}}}(X^*,M)),$ so $E_X^l$ is a right adjoint. Both auxiliary bimodules are finite-dimensional, and the displayed currying maps respect the outer actions, checked on elementary tensors. Transport through [F1] therefore makes evaluation on Rex a left adjoint and evaluation on Lex a right adjoint. By [F4], they preserve coends and ends respectively. [step 2.1, F1, F4, F5, F9, given]

3.2 In the model of step 2.1, $N^{r}\cong A^{*}\otimes_A-$ and $N^{l}\cong\operatorname{Hom}_A(A^{*},-)$; the co-regular bimodule $A^{*}$ is in particular an $(A,A)$-bimodule, so [F9] applied to $M=A^{*}$ exhibits an adjunction $N^{r}\dashv N^{l}$ with unit $\eta_X(x)(\lambda)=\lambda\otimes x$ and counit $\varepsilon_Y(\lambda\otimes\varphi)=\varphi(\lambda)$, and the triangle identities hold by [F9] ([[def-adjunction-by-unit-counit-and-triangle-identities]], [[def-bimodule]], [[def-linear-map]]). [step 2.1, F9]


4.1 By [F3], $\Psi^l(1_{\mathcal A})$ is the coend of $\bar a\boxtimes a$ and $\Psi^r(1_{\mathcal A})$ is its end. The equivalence $\Phi^r$ preserves the first, and $\Phi^l$ preserves the second, by [F4]. Applying the corresponding evaluation functors, which preserve these universal objects by step 3.1, gives pointwise universal objects in $\mathcal A$. Formula [F2] identifies their diagrams as $\operatorname{Hom}_{\mathcal A}(X,a)^*\otimes_ka$ and $\operatorname{Hom}_{\mathcal A}(a,X)\otimes_ka$, respectively. Their universal maps are the evaluations of the images of the cowedges and wedges of [F3]. Consequently these are precisely the asserted coend formula for $N^r(X)$ and end formula for $N^l(X)$. [step 2.1, step 3.1, F2, F3, F4, F7]

5.1 The formulas of step 4.1 refer only to the intrinsic data of $\mathcal A$: its hom functors, the finite-dimensional $k$-dual and the copowers of [F7]. For a second module model the same description therefore applies, and by the uniqueness of (co)ends [F8] the two resulting endofunctors are related by a unique compatible natural isomorphism; hence $N^{r}_{\mathcal A}$ and $N^{l}_{\mathcal A}$ are independent of the module model up to canonical natural isomorphism. [step 4.1, F7, F8]

6.1 The identifications $\Psi^{r}(1_{\mathcal A})\cong A$ and $\Psi^{l}(1_{\mathcal A})\cong A^{*}$ of step 2.1 exhibit the regular and the co-regular bimodule as the images of the identity under $\Psi^{r}$ and $\Psi^{l}$; no isomorphism between these two bimodules, and no equivalence property of $N^{r}_{\mathcal A}$ or $N^{l}_{\mathcal A}$, is asserted or used, and the companion examples page records a finite category where they differ. Only the given finite-dimensional data and the finite (co)limits they determine are used, so no commutativity of $A$ and no further choice principle enter, and nothing is inferred from unrestricted completeness or cocompleteness. [step 2.1, step 5.1, F3, F6] ∎

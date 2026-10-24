---
id: thm-klr-categorification-of-the-negative-quantum-half
kind: theorem
title: "The KLR category categorifies the negative quantum half"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form, thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations, lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases, def-divided-power-klr-idempotents-and-projectives, thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives, def-lusztig-divided-power-integral-form, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, lem-lusztig-and-kashiwara-normalizations-match-by-root-color, lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality, def-axiom-of-choice, lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: 'Theorem 1.1 and §3.2 (Propositions 3.10-3.20), printed pp. 2-3, 39-45: surjectivity of $\gamma$ via the character map and the divided-power projectives, injectivity from the form, and the final isomorphism.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups II, Transactions of the AMS 363 (2011) 2685-2700, arXiv:0804.2080v1'
      url: 'https://arxiv.org/pdf/0804.2080'
      locator: '§3, the paragraph after Corollary 7 and Theorem 8, printed pp. 13-14: the isomorphism $\gamma:Af\to K_0(R)$ for an arbitrary Cartan datum and any ground field.'
    - title: 'Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bulletin of the AMS 47 (2010) 419-481 (survey), arXiv:0909.4844'
      url: 'https://arxiv.org/pdf/0909.4844'
      locator: '§9.1, Theorem 9.1, printed pp. 39-40: the unique $A$-module isomorphism $Af\to[\mathrm{Proj}(H^\infty)]$ with $1\mapsto[H^\infty_0]$ and $\gamma(\theta_i^{(n)}x)=\theta_i^{(n)}\gamma(x)$.'
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§3.2 and §4.2.4, printed pp. 23-29 and 33-35: the general-parameter algebras, the PBW theorem, and the decategorification morphisms.'
---

## Statement

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] over any field $k$. Then the homomorphism $\gamma:Af\to K_0(R)$ of [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]] is an isomorphism of $\mathbb Z[q,q^{-1}]$-algebras and of $\mathbb N[I]$-graded twisted bialgebras:
(i) **Surjectivity.** Every class in $K_0(R(\beta))$ is a $\mathbb Z[q,q^{-1}]$-linear combination of classes of divided-power projectives $[P_\theta]$, $\theta$ a sequence of divided powers of weight $\beta$; hence $\gamma$ is onto.
(ii) **Injectivity.** $\gamma$ is injective, because it preserves the forms by [[thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form]] and the source form $B_L$ (equivalently $B_K$) is nondegenerate on each finite weight component.
(iii) **Compatibility.** $\gamma$ intertwines the multiplications ($[\mathrm{Ind}]$ against the product in $Af$), the comultiplications ($[\mathrm{Res}]$ against $r$), the bar involutions and the forms; the free $A$-rank of $K_0(R(\beta))$ equals the free $A$-rank of $Af_\beta$; no rank or dimension comparison of the infinite-dimensional algebra $R(\beta)$ itself with $f_\beta$ is asserted.
Equivalently, $K_0(R)$ is a free $A$-module with the classes of the indecomposable graded projective $R$-modules as a shift-orbit basis ([[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]]), and the divided-power classes span; the triangularly selected classes $[P(Y_b)]$ form an $A$-basis, whereas the family of all divided-power words is generally redundant.

## Facts & Assumptions

**Given:** A KLR datum $Q$ over any field $k$, the algebra $Af$ of the divided-power form of the negative half with its generators $\theta_i^{(n)}$ of [[def-lusztig-divided-power-integral-form]], the homomorphism $\gamma$ of [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]], and the Cartan form comparison of [[thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form]].

[F1] Triangular basis and simplicity ([[lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head]]): for each $\beta$ there is a finite family of ordered divided-power words $Y_b$ with $[P(Y_b)]$ a triangular $A$-basis of $K_0(R(\beta))$ with diagonal $1$, and the graded simples are absolutely simple with all nonzero homogeneous endomorphisms of degree $0$.

[F2] Form comparison ([[thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form]]): $(\gamma(x),\gamma(y))_{KLR}=B_L(x,y)$ on each weight component, and $B_L$ is a unit multiple of the nondegenerate normalized form $B_K$.

[F3] Nondegeneracy ([[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]]): $B_K$ is nondegenerate on each finite weight component; this uses the Axiom of Choice ([[def-axiom-of-choice]]).

[F4] Compatibility suppliers: $[\mathrm{Res}]$ is an algebra homomorphism for the twisted product and $\gamma$ is compatible with coproducts and bar ([[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]], [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]], [[lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]]).

## Proof

**Proof technique:** direct; surjectivity by the triangular divided-string basis, injectivity by the preserved nondegenerate form, then compatibility.

1.1 (Surjectivity.) By [F1] the classes $[P(Y_b)]$ form an $A$-basis of $K_0(R(\beta))$ for a finite family of ordered divided-power words; each $Y_b$ is a word in divided powers of single colours, so its class equals $\gamma(\theta_{i_1}^{(n_1)}\cdots\theta_{i_r}^{(n_r)})$ by multiplicativity of $\gamma$ and the definition of $P_\theta$. Hence every class in $K_0(R(\beta))$ is an $A$-linear combination of classes $[P_\theta]$ of divided-power projectives, and $\gamma$ is onto. [given, F1, algebra]

2.1 (Injectivity.) Suppose $\gamma(x)=0$ for some $x\in Af_\nu$. By [F2] and [F3], for every $y$ in the same weight component one has $B_L(x,y)=(\gamma(x),\gamma(y))=0$; since $B_L$ is a unit multiple of the nondegenerate form $B_K$ on the finite-dimensional $\mathbb Q(q)$-space $Af_\nu\otimes_A\mathbb Q(q)$, this forces $x=0$. The categorical and form-comparison steps of [F2] are choice-free; the Axiom of Choice is inherited only through the nondegeneracy supplier [F3]. [step 1.1, F2, F3, algebra]

3.1 (Compatibility and ranks.) The intertwining of multiplications is multiplicativity of $\gamma$ together with the induction formula of [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]]; the intertwining of comultiplications is the Mackey comparison of [[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]] against the coproduct $r$ of the negative half; the bar compatibility is $P_{i,n}^\#=P_{i,n}$ for the normalized divided projectives of [[def-divided-power-klr-idempotents-and-projectives]], and form preservation is [F2]. Since $\gamma$ is an isomorphism of $A$-modules by steps 1.1 and 2.1, the free $A$-rank of $K_0(R(\beta))$ equals that of $Af_\beta$; the finite free basis supplied by [F1] transfers through $\gamma$ to a finite free basis of $Af_\beta$, and the infinite-dimensional algebra $R(\beta)$ itself is not compared with $f_\beta$. [step 1.1, step 2.1, F1, F4, algebra] ∎

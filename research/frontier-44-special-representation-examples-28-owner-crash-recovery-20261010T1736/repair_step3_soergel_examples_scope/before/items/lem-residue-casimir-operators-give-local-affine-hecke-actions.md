---
id: lem-residue-casimir-operators-give-local-affine-hecke-actions
kind: lemma
title: "Residue Casimir operators and local affine-Hecke actions"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 24
deps:
  - def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - thm-parabolic-category-o-is-a-highest-weight-category
  - thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
  - thm-weyl-character-formula
  - thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra
  - prop-translation-functors-are-exact-and-biadjoint-across-a-wall
  - def-axiom-of-choice
  - def-higher-level-wedge-tensor-fock-module
  - def-translation-functor-between-o-blocks
  - prop-brackets-of-root-spaces
  - thm-root-sl-two-triple
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras (complete109-page arXiv0508003)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Sections4.2–4.4 (printedpp38–45), especially equations4.3/4.6/4.8/4.34–4.37 and Theorems4.4–4.5 with their actual CR dependency; full needed passages read."
    - title: "Joseph Chuang and Raphael Rouquier, Derived equivalences for symmetric groups and sl2-categorification (complete45-page arXiv0407205)"
      url: "https://arxiv.org/pdf/math/0407205"
      locator: "Sections3.2–3.3 (pp5–10),4.3 (pp13–14),5.1–5.4 (pp14–21), especially Lemma3.6 and Proposition5.20 full proofs; Grassmannian duality replaced by the explicit local partial-coinvariant complete-intersection proof."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and work with the finite
classical $\mathfrak{gl}_n$ category $\mathcal O$ of
[[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]],
distinct from the Fock algebra $\mathfrak{gl}_{I^+}$.

Let $x_j$ be the tensor Casimir acting on the $j$-th natural factor of
$M\otimes V^{\otimes r}$ together with all preceding factors, and let $T_j$ be
the adjacent place swap. Then the **degenerate affine Hecke relations** hold:
the $x_j$ commute, the $T_j$ satisfy the symmetric-group braid and quadratic
relations, $T_jx_j-x_{j+1}T_j=-1$, and distant generators commute. They restrict
naturally to the repeated residue functors $f_i^r$ of
[[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]], where
$x_j-i$ is locally nilpotent; the dual actions are the biadjoint mates on
$e_i^r$. Finite Levi tensor decomposition and exact PBW induction give
multiplicity-free generalized-standard flags for the entry moves $i\to i+1$ and
$i+1\to i$.

The standard-class map $[\Delta(A)]\mapsto M_A$ gives the full integral Fock
$K_0$ action, its Chevalley/Serre relations and local integrability; each root's
biadjoint functors therefore give a positive, locally finite
$\mathfrak{sl}_2$ action on the simple-class basis. The ground-state class
generates the highest constituent, not generally the entire tensor Fock module.

## Facts & Assumptions

**Given:** Finite classical blocks with natural module $V$, its dual $V^{*}$, the residue functors $f_i,e_i$, the tensor Casimir $x=\sum_{a,b}E_{ab}\otimes E_{ba}$ with place factors, and the Fock/tableau data of [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]] and [[def-higher-level-wedge-tensor-fock-module]].

[F1] Translation and duality ([[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]], [[def-translation-functor-between-o-blocks]], [[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]): exactness, biadjunction and block projections for the residue functors.

[F2] PBW and root sl2 ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[thm-root-sl-two-triple]], [[prop-brackets-of-root-spaces]]): PBW bases, root $\mathfrak{sl}_2$-triples and root-space brackets.

[F3] Parabolic structure and characters ([[thm-parabolic-category-o-is-a-highest-weight-category]], [[thm-weyl-character-formula]]): generalized-standard flags, simple/standard Grothendieck bases and character injectivity, the finite Weyl character formula.

[F4] Fock monomials and weights ([[def-higher-level-wedge-tensor-fock-module]], [[thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis]]): the column monomials and their weights, box moves and finiteness.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The degenerate affine Hecke relations.** Write $x=\sum_{a,b}E_{ab}\otimes E_{ba}$ and let $x_j$ include the place swaps with the preceding $j-1$ natural factors. Direct matrix-unit multiplication in the natural module gives $T_j^2=1$, the braid relation for adjacent places, commutation of distant places, and $T_jx_jT_j=x_{j+1}-T_j$, which is equivalent to $T_jx_j-x_{j+1}T_j=-1$; the Casimir components and the place operators commute as required. Hence the listed relations hold on $M\otimes V^{\otimes r}$. [F2, algebra]

2.1 **The Casimir eigenvalues and the selected moves.** For a highest weight $\lambda_j=a_j+j-1$ one has $c(\lambda)=\sum_j\lambda_j(\lambda_j+n+1-2j)$ with $c(V)=n$; the eigenvalue on the flag factor $\lambda+\varepsilon_j$ is $(c(\lambda+\varepsilon_j)-c(\lambda)-n)/2=\lambda_j+1-j=a_j$, and on $\lambda-\varepsilon_j$ in the tensor product with $V^{*}$ it is $-a_j-n+1$. Replacing entry $i+1$ therefore contributes the generalized eigenvalue $-n-i$ on the dual side. Exact generalized eigenspace decomposition selects precisely the single-entry moves $i\to i+1$ and $i+1\to i$. [F2, F5, step 1.1, algebra]

3.1 **Restriction to the residue functors and local nilpotence.** Restricting $x$ to the generalized eigencomponent defining $f_i$ gives $x_j-i$ locally nilpotent because on a fixed finite cut only two relevant entry values occur and repeated replacements terminate; by [F1] the restriction is exact on the finite flags. The dual operator on $e_i$ is defined as the biadjoint mate, so it satisfies the same relations and intertwines the two adjunctions. [F1, F2, step 2.1]

4.1 **Multiplicity-free flags.** Tensor identity plus finite Levi complete reducibility produces each valid column move exactly once, and projected invalid or repeated-column moves vanish; by [F3] this yields multiplicity-free generalized-standard flags for the entry moves. [F3, step 3.1]

5.1 **The integral Fock $K_0$ action.** By [F3] the standard classes form a basis of the block Grothendieck group and characters are injective, so the standard-class map $[\Delta(A)]\mapsto M_A$ is an isomorphism; the induced generators are the explicit tensor/wedge action of [F4], and checking on this basis proves the Chevalley and Serre relations, including the divided powers. Each residue root is locally finite, and positivity in the simple basis makes class vanishing equivalent to functor vanishing; biadjunction and finite length then supply the locally finite $\mathfrak{sl}_2$ action. The ground-state class generates the highest constituent, and only in special cases the whole Fock module. [F3, F4, step 3.1, step 4.1, algebra]

6.1 **Conclusion.** The tensor Casimir and place swaps give the degenerate affine Hecke relations on the finite classical tensor products, restrict to the residue functors with local nilpotence and biadjoint mates, produce multiplicity-free generalized-standard flags, and induce the integral Fock $K_0$ action with Chevalley/Serre relations, local integrability and positivity. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

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

1.2 **The Casimir scalars on flag sections.** Write $C=\sum_{a,b}E_{ab}E_{ba}$. The matrix-unit brackets show that $C$ is central and that its highest-weight scalar is $c(\lambda)=\sum_j\lambda_j(\lambda_j+n+1-2j)$: commute each positive root factor past its negative partner and apply it to the highest vector. Moreover $\Delta(C)=C\otimes1+1\otimes C+2x$ and $c(V)=c(V^{*})=n$. On a valid generalized-standard section of highest weight $\lambda+\varepsilon_j$, $x$ therefore has scalar $(c(\lambda+\varepsilon_j)-c(\lambda)-n)/2=\lambda_j+1-j=a_j$; the section $\lambda-\varepsilon_j$ has scalar $-a_j-n+1$. Thus $i\to i+1$ selects scalar $i$, and $i+1\to i$ selects scalar $-n-i$. The generalized-standard tensor flags will be constructed below; these formulas concern their sections and do not assert scalar action on arbitrary weight vectors. [F2, F3, algebra]

2.1 **The operator relations and dual mates.** The operators $x_j,T_j$ are natural endomorphisms of the tensor functors, so the relations of step 1.1 restrict to simultaneous generalized residue components whenever those components are defined. Taking mates under the tensor/block biadjunction transfers the operator identities to the reverse functors, with the dual-Casimir shift $-n-i$ of step 1.2. The nilpotence and identification of these components with block projections are verified after constructing the flags. [F1, F2, step 1.1, step 1.2]

2.2 **Multiplicity-free generalized-standard flags.** Filter $V|_{\mathfrak p}$ by its successive Levi blocks and $V^{*}|_{\mathfrak p}$ by the reverse blocks; each section is a natural or dual natural Levi module with radical acting by zero. For a finite Levi simple $E(\lambda)$, the Weyl numerator identity $A(\lambda+\rho_{\mathfrak l})\sum_j e^{\varepsilon_j}=\sum_j A(\lambda+\rho_{\mathfrak l}+\varepsilon_j)$ gives $E(\lambda)\otimes V_b=\bigoplus_jE(\lambda+\varepsilon_j)$ over the dominant valid moves in block $b$: an invalid move makes two shifted coordinates equal and its alternating numerator zero. The same identity with $-\varepsilon_j$ treats the dual. Levi complete reducibility, part of the parabolic structure [F3], turns these character identities into multiplicity-one decompositions. The tensor identity for induction maps $u\otimes(e\otimes v)$ to $\sum(u_{(1)}\otimes e)\otimes u_{(2)}v$, with inverse given by the antipode; the coproduct/antipode identities verify balancing and inverse composition. PBW makes induction exact, so the resulting filtration of $\Delta(A)\otimes V$ or $\Delta(A)\otimes V^{*}$ has precisely the generalized-standard sections for these valid moves. Their central characters are the changed entry multisets, and step 1.2 gives the Casimir scalar on each section. Exact block or generalized-eigenspace projection therefore retains precisely the specified moves, each once. [F2, F3, F5, step 1.2, algebra]

3.1 **Eigencomponents on all objects.** Projectives have finite standard flags, and tensoring their flags with either finite factor gives the flags of step 2.2. On a chosen block component the Casimir differs from its indicated scalar by an operator zero on every flag section, so a power bounded by the flag length annihilates that component. Distinct scalars give distinct changed multisets. Every finite-length object is a quotient of a finite sum of these projectives; naturality of $x$ and exactness of both projections extend the block/eigencomponent identification and nilpotence to all objects. Apply this successively to each tensor place to obtain the natural affine-Hecke action on repeated residue functors, with each $x_j-i$ locally nilpotent. [F1, F3, step 2.1, step 2.2, algebra]

4.1 **The integral Fock $K_0$ action.** The standard classes form a basis in each block by [F3], and the monomials of [F4] have exactly those labels, so $[\Delta(A)]\mapsto M_A$ is an isomorphism of abelian groups. Step 2.2 identifies the induced operators with the tensor/wedge operators at $s=1$; their Chevalley/Serre relations follow from the Fock module. On a tensor of minuscule wedges, $f_i^r$ counts ordered choices of $r$ distinct movable columns; every subset occurs $r!$ times, and the same holds for $e_i^r$. Thus the divided class operators are integral as well. Each residue operator is nilpotent on any fixed weight calculation by the finite-cut Fock action; positivity in the simple basis and finite length then imply the corresponding iterated functor vanishes. The locally finite $\mathfrak{sl}_2$ action follows. The ground-state class generates its highest constituent; the other standard classes supply the rest of the tensor Fock module. [F3, F4, step 2.2, step 3.1, algebra]

5.1 **Conclusion.** The tensor Casimir and place swaps give the degenerate affine Hecke relations on the finite classical tensor products, restrict to the residue functors with local nilpotence and biadjoint mates, produce multiplicity-free generalized-standard flags, and induce the integral Fock $K_0$ action with Chevalley/Serre relations, local integrability and positivity. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1] ∎

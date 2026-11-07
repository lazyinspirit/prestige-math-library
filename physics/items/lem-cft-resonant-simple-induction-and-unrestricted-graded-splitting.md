---
id: lem-cft-resonant-simple-induction-and-unrestricted-graded-splitting
kind: lemma
title: Simple top induction and splitting in the specified admissible grading
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
deps:
  - thm-cft-positive-resonant-induced-top-nondegeneracy
  - lem-cft-resonant-finite-root-and-first-kernel-reduction
  - lem-cft-algebraic-graded-dual-of-admissible-module
  - lem-cft-resonant-universal-top-jacobi-realization
  - thm-cft-contragredient-module-well-defined
  - def-axiom-of-choice
dependency_roles:
  thm-cft-positive-resonant-induced-top-nondegeneracy: mathematical-premise
  lem-cft-resonant-finite-root-and-first-kernel-reduction: mathematical-premise
  lem-cft-algebraic-graded-dual-of-admissible-module: mathematical-premise
  lem-cft-resonant-universal-top-jacobi-realization: mathematical-premise
  thm-cft-contragredient-module-well-defined: mathematical-premise
  def-axiom-of-choice: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZFC
axiom_use: "The proof uses AC for extending bases of multiplicity-space double duals and choosing a maximal independent family of simple submodules."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras
      url: https://arxiv.org/pdf/math/0607679v1
      locator: "§§3–4; the finite resonant reduction is retained, while the all-degree splitting is proved directly below. The published missing root is not imported as accepted."
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I
      url: https://arxiv.org/pdf/1012.4193v7
      locator: "§2, opposite-field contragredients for grading-restricted modules; the unrestricted algebraic graded-dual extension is proved by the local helper and is not attributed to this source."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Under precisely the hypotheses of [[thm-cft-positive-resonant-induced-top-nondegeneracy]], every $M(U_i)$ is simple, and every admissible $V$-module is a direct sum of irreducible graded admissible submodules respecting its originally specified $\mathbb N$-grading, including arbitrary multiplicities and grading shifts.

## Statement references

[[thm-cft-positive-resonant-induced-top-nondegeneracy]]

[[lem-cft-resonant-finite-root-and-first-kernel-reduction]]

[[lem-cft-algebraic-graded-dual-of-admissible-module]]

[[lem-cft-resonant-universal-top-jacobi-realization]]

## Facts & Assumptions

**Given:** The exact VOA hypotheses in the preceding theorem, the Axiom of Choice, and the actual specified nonnegative grading on each admissible module.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is used for vector-space basis extension in Step 3.2 and maximal independent families in Step 4.1; it is not a restriction on $V$.

[F1] [[lem-cft-resonant-finite-root-and-first-kernel-reduction]]: $A(V)$ is finite dimensional and semisimple, has finitely many simple tops $U_i$, and a nonzero top-disjoint kernel in $M(U_i)$ has a first singular top $U_j$ at a positive integral difference $h_j-h_i$.

[A2] [[thm-cft-positive-resonant-induced-top-nondegeneracy]] has the exact planned assertion of vanishing for every such positive-integral difference. Its current carrier is unresolved; every conclusion below that uses [A2] is conditional on that assertion.

[F2] [[lem-cft-resonant-universal-top-jacobi-realization]]: maps from $A(V)$-tops into $\Omega_0$ extend uniquely from $M(U)$, and every simple admissible module is a grading shift of the normalized simple quotient attached to its simple top.

[F3] [[lem-cft-algebraic-graded-dual-of-admissible-module]] gives exact contravariant algebraic graded duality $D(W)=\bigoplus_n W(n)^*$, injective evaluation $j_W:W\to D^2(W)$, and $j_W$ is an isomorphism on finite-dimensional grades. [[thm-cft-contragredient-module-well-defined]] supplies the finite-grade ordinary contragredient interface used to identify duals of the finite-dimensional simple modules.

## Proof

1.1 If $J(U_i)$, the largest graded submodule of $M(U_i)$ disjoint from its top, were nonzero, [F1] would place a simple $A(V)$-copy $U_j$ in $\Omega_0(M(U_i))(d)$ for $d=h_j-h_i\in\mathbb Z_{>0}$. This contradicts [A2]. Hence $J(U_i)=0$. Any nonzero graded submodule of $M(U_i)$ either meets its simple degree-zero top, and then contains the generating top, or is contained in $J(U_i)$; thus $M(U_i)$ is graded-simple. The scalar $L(0)=h_i+n$ on grade $n$ makes every ungraded submodule graded by polynomial interpolation on the finite grade support of each vector. So $M(U_i)$ is simple as a weak module. [F1, A2, F2, algebra]

2.1 Let $L_i$ denote the resulting normalized simple module. Every simple graded admissible submodule with first occupied degree $p$ is a shift $L_i[p]$: its first grade is a unital $A(V)$-module, contains a simple Zhu submodule, and the universal map from the corresponding $M(U_i)[p]$ is nonzero; simplicity of $M(U_i)$ makes it an isomorphism onto the generated simple submodule. The finite list of labels is the list in [F1]. [F1, F2, step 1.1, algebra]

3.1 First prove that every extension $0\to S\to E\to L_i[q]\to0$ splits when $S$ is a direct sum of simple shifts $L_j[p]$ with $p\ge q$. In degree $n<q$, both end terms vanish, so $E(n)=0$. The quotient map $E(q)\to L_i(0)=U_i$ is a surjective $A(V)$-map because degree-zero modes preserve grade and all negative-degree modes kill grade $q$. Semisimplicity of the regular $A(V)$-module makes every $A(V)$-module semisimple, so choose an $A(V)$-linear section $U_i\to E(q)$. Its image is annihilated by all negative-degree modes, since they land in absent grades below $q$. By the universal property [F2] it extends, after shifting grades by $q$, to $M(U_i)[q]\to E$. Its composite to $L_i[q]$ is the identity on the top and hence a nonzero map between simple modules, so is an isomorphism; its inverse gives a grading-preserving section. [A1, F1, F2, step 1.1, algebra]

3.2 Now let every simple summand of $S$ have shift $p<q$. Duality [F3] gives an exact sequence $0\to D(L_i[q])\to D(E)\to D(S)\to0$. Since the simple grades are finite dimensional and only finitely many pairs $(j,p)$, $0\le p\le n$, contribute in each degree $n$,
$$
D(S)\cong\bigoplus_{j,p<q}D(L_j[p])\otimes E_{j,p}^*,
$$
where $E_{j,p}$ is the (possibly infinite-dimensional) multiplicity space of $L_j[p]$ in $S$. Each $D(L_j[p])$ is a simple ordinary shift by [F3] and the finite-grade contragredient theorem. For every simple summand $T=D(L_j[p])$ of $D(S)$, pull the displayed dual exact sequence back along $T\hookrightarrow D(S)$. Its kernel $D(L_i[q])$ is a simple shift whose lowest grade $q$ is at least $p$, so Step 3.1 splits this pullback over $T$. Choose these sections by [A1]; their sum is a grading-preserving section $D(S)\to D(E)$, since vectors in a direct sum have finite support. Thus the dual sequence splits. Dualize its retraction and compose
$$
E\xrightarrow{j_E}D^2(E)\longrightarrow D^2(S)\xrightarrow{r_S}S.
$$
Here the middle arrow is the retraction from the dual splitting. To define $r_S$, write $S=\bigoplus_{j,p}L_j[p]\otimes E_{j,p}$; then $D^2(S)=\bigoplus_{j,p}L_j[p]\otimes E_{j,p}^{**}$. The evaluation $E_{j,p}\hookrightarrow E_{j,p}^{**}$ is injective. Extend a basis of its image to a basis of $E_{j,p}^{**}$ and send the added basis vectors to zero; this gives a linear retraction $E_{j,p}^{**}\to E_{j,p}$. Tensor with the identity on $L_j[p]$ and sum over $(j,p)$. The composition restricts to the identity on $S$, by naturality of evaluation, and therefore splits the original extension. No infinite-dimensional grade is identified with its bidual. [A1, F3, step 3.1, algebra]

3.3 For arbitrary semisimple $S=S_{<q}\oplus S_{\ge q}$, push the extension out along the two projections $S\to S_{<q}$ and $S\to S_{\ge q}$. Step 3.1 splits the pushout with kernel $S_{\ge q}$; Step 3.2 splits the one with kernel $S_{<q}$. The original $E$ is the fiber product of these pushouts over their common quotient $L_i[q]$: the canonical map is injective because its restriction to $S$ is the pair of complementary projections; it is surjective because, after choosing a common lift of a quotient element, the two discrepancies lie in the complementary kernel summands and can be corrected independently. The pair of pushout sections therefore defines a section into $E$. This proves that every extension of one simple shifted module by an arbitrary semisimple graded admissible module splits. [A1, step 3.1, step 3.2, algebra]

4.1 Let $W$ be any admissible module and let $S\subseteq W$ be the sum of all its graded simple submodules. Under [A1], choose a maximal independent family of graded simple submodules; their sum is direct and equals $S$, since an additional simple either has zero intersection and enlarges the family or is contained in the sum. If $W/S\ne0$, choose its first occupied grade $p$. Its degree-$p$ space is annihilated by negative-degree modes and is an $A(V)$-module. It contains a simple top $U_i$ by [F1]. The universal map $M(U_i)[p]\to W/S$ is nonzero, so its image is a simple graded submodule $T\cong L_i[p]$ by Step 1.1. Its preimage gives an extension $0\to S\to N\to T\to0$, which splits by Step 3.3. The section supplies a new graded simple submodule of $W$ not contained in $S$, contradicting the definition of $S$. Hence $W=S$, an internal direct sum of irreducible graded admissible modules in the original grading. [A1, F1, F2, step 1.1, step 3.3, algebra] ∎

---
id: cex-a-transitive-action-need-not-be-frobenius
kind: counterexample
title: "A transitive action need not be Frobenius"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [prop-frobenius-permutation-action-characterization, def-frobenius-complement-and-frobenius-group, def-finite-symmetric-group-and-permutation-notation, def-group-action, def-orbit-and-stabilizer, thm-orbit-stabilizer, def-coset, lem-coset-membership-and-equality, def-subgroup, lem-subgroup-criterion, def-conjugacy-class-and-centralizer, thm-conjugation-is-an-automorphism, lem-group-inverse-laws, thm-lagrange]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement refuted

Let $S_4$ be the symmetric group on the four letters $0,1,2,3$
([[def-finite-symmetric-group-and-permutation-notation]]), acting on
$\{0,1,2,3\}$ naturally, and let
$H:=\{\sigma\in S_4:\sigma(2)=2\}$ be the stabilizer of the letter $2$
([[def-orbit-and-stabilizer]], [[def-group-action]]). Then the action is
transitive and nonregular, but it is **not** a Frobenius action: $H$ is not a
Frobenius complement of $S_4$
([[def-frobenius-complement-and-frobenius-group]]). Explicitly:

1. the transposition $(0\,1)$ fixes the two letters $2$ and $3$, so some
   nonidentity element fixes more than one point;
2. for $g=(2\,3)\notin H$ the stabilizer $gHg^{-1}$ of the letter $3$ meets $H$
   in $\{\operatorname{id},(0\,1)\}\ne\{\operatorname{id}\}$.

## Facts & Assumptions

**Given:** The symmetric group $S_4=\operatorname{Sym}(\{0,1,2,3\})$, its natural action on $\{0,1,2,3\}$, and $H=\{\sigma\in S_4:\sigma(2)=2\}$.

[F1] Cycle notation: a transposition $(a\,b)$ exchanges $a$ and $b$ and fixes every other letter; $(a\,b)^{2}=\operatorname{id}$; and a permutation of the four letters fixing two of them is determined by what it does to the remaining two, so the permutations fixing both $2$ and $3$ are exactly $\operatorname{id}$ and $(0\,1)$ ([[def-finite-symmetric-group-and-permutation-notation]]).

[F2] Stabilizers, cosets and conjugation: for a group $G$ acting on a set $X$ and $x\in X$, the stabilizer $G_x=\{g:g\cdot x=x\}$ is a subgroup; point stabilizers of points in one orbit are conjugate: for $g\in G$ one has $gG_xg^{-1}=G_{g\cdot x}$, because $g\sigma g^{-1}$ fixes $g\cdot x$ exactly when $\sigma$ fixes $x$ ([[def-orbit-and-stabilizer]], [[thm-orbit-stabilizer]], [[def-group-action]], [[def-subgroup]], [[thm-conjugation-is-an-automorphism]], [[def-conjugacy-class-and-centralizer]], [[lem-group-inverse-laws]]).

[F3] The transitivity of the natural action is the statement that for all $i,j\in\{0,1,2,3\}$ there is $\sigma\in S_4$ with $\sigma(i)=j$: if $i=j$ take $\sigma=\operatorname{id}$, and if $i\ne j$ take the transposition $\sigma=(i\,j)$, which sends $i$ to $j$ by [F1]; the action is nonregular because the nonidentity element $(0\,1)$ fixes the point $2$ by [F1] ([[def-group-action]]).

[F4] Characterization of Frobenius complements by the coset action: for a finite group $G$ and a subgroup $\{1\}<H<G$, the subgroup $H$ is a Frobenius complement exactly when the left action of $G$ on $G/H$ is transitive, nonregular, and every nonidentity element of $G$ fixes at most one coset ([[prop-frobenius-permutation-action-characterization]], [[def-coset]], [[lem-coset-membership-and-equality]]).

## Counterexample

**Proof technique:** direct.

1.1 The action of $S_4$ on $\{0,1,2,3\}$ is transitive and nonregular by [F3]. The stabilizer $H=G_{2}$ is a subgroup by [F2]; it contains $\operatorname{id}$ and $(0\,1)$ by [F1], and it does not contain $(2\,3)$ because $(2\,3)$ sends $2$ to $3$, so $\{\operatorname{id}\}<H<S_4$. [F1, F2, F3]

2.1 Take $g=(2\,3)$. Then $g\notin H$ by step 1.1, and by [F2] the conjugate $gHg^{-1}$ is the stabilizer $G_{g\cdot 2}=G_{3}$ of the letter $3$. The permutations lying in $H\cap G_{3}$ fix both $2$ and $3$, so by [F1] this intersection is exactly $\{\operatorname{id},(0\,1)\}$. [F1, F2, step 1.1]

3.1 It follows that $H$ is not a Frobenius complement of $S_4$: with $g=(2\,3)\notin H$ one has $H\cap gHg^{-1}=\{\operatorname{id},(0\,1)\}\ne\{\operatorname{id}\}$, whereas a Frobenius complement must satisfy $H\cap xHx^{-1}=\{1\}$ for every $x\in S_4\setminus H$. [F4, step 2.1]

4.1 The same failure is visible in the coset picture. The map $S_4/H\to\{0,1,2,3\}$, $\sigma H\mapsto\sigma(2)$, is a bijection, and it is equivariant for the left action on cosets and the natural action on letters: $\tau\cdot(\sigma H)=(\tau\sigma)H\mapsto(\tau\sigma)(2)=\tau(\sigma(2))$ for all $\tau,\sigma\in S_4$. So the coset action is the natural action on four letters; it is transitive and nonregular by [F3], and the transposition $(0\,1)$ fixes the two letters $2$ and $3$ by [F1], hence fixes the two corresponding cosets, violating the condition in [F4] that a nonidentity element fix at most one coset. Therefore the natural transitive action of $S_4$ on four letters is not a Frobenius action. ∎ [F1, F4, step 3.1]

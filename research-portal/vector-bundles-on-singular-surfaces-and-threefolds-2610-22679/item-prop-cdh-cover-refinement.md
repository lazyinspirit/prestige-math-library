---
title: Finite refinement for integer cdh sections
status: published
research_item: prop-cdh-cover-refinement
dependency_level: 11
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Lemma2.4 proof, printed p.5, final paragraph
      reading_limits: Read the complete actual p.5 proof paragraph, including its
        appeal to MVW12.28 and the claim of a finite Nisnevich refinement. The
        assigned proposition extracts this finite-refinement input; it does not
        reproduce the separate seminormal representability theorem.
      statement: The proof of Lemma 2.4 asserts finite local integer representatives
        after a proper/cdh and Nisnevich refinement.
      hypotheses: The article passage assumes a separated seminormal finite-type
        scheme over an algebraically closed field. The arbitrary-field sieve
        refinement here is a local composition of the separately declared
        finite-type suppliers, not attributed to that passage.
---

PDF p. 5: Finite refinements and integer sections

## Prerequisites

- [lem-author-5bfbe3ebf14f-finite-nisnevich-subfamily](item-lem-author-5bfbe3ebf14f-finite-nisnevich-subfamily)
- [lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition](item-lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition)
- [lem-author-5bfbe3ebf14f-finite-generated-topology-basis](item-lem-author-5bfbe3ebf14f-finite-generated-topology-basis)
- [lem-author-5bfbe3ebf14f-finite-coproduct-sieve-refinement](item-lem-author-5bfbe3ebf14f-finite-coproduct-sieve-refinement)
- [lem-author-5bfbe3ebf14f-constant-sheaf-finite-local-representatives](item-lem-author-5bfbe3ebf14f-constant-sheaf-finite-local-representatives)
- [thm-author-5bfbe3ebf14f-mvw-finite-type-cdh-two-stage-input](item-thm-author-5bfbe3ebf14f-mvw-finite-type-cdh-two-stage-input)
- [def-cdh-topology-interface](item-def-cdh-topology-interface)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)


## Statement
On the specified site of separated finite-type schemes over a field $k$, every cdh covering sieve $S$ on $X$ contains a finite covering family $\{U_i\to X\}$. Its finite coproduct $W=\coprod_iU_i\to X$ is a covering morphism and has an MVW two-stage refinement
$$V\xrightarrow{q}X'\xrightarrow{p}X,$$
where $p$ is completely decomposed proper and $q$ is Nisnevich, with a map $h:V\to W$ over $X$. Splitting $V$ into the finite clopen pieces $V_i=h^{-1}(U_i)$ gives a finite Nisnevich family over $X'$ whose composites to $X$ all belong to $S$. Neither $W\to X$ nor $V\to X$ is asserted to belong to $S$.

Every section of the constant integer cdh sheaf has finitely many constant local representatives on such a finite covering family, and therefore factors through the sheafification of a finite subset of $\mathbb Z$. If desired the above two-stage refinement may be chosen for that representing family, retaining its finitely many representative values on the split pieces. No conclusion for an arbitrary qcqs base outside this site is asserted.

## Facts & Assumptions
**Given:** The exact finite-type cdh site, a covering sieve $S$, and, for the last assertion, $s\in H^0_{\mathrm{cdh}}(X,\mathbb Z)$ with $\mathbb Z$ meaning the sheafification of the constant presheaf.

**Goal:** Prove finite refinement and finite local values without a coproduct-in-sieve assumption.

[F1] [lem-author-5bfbe3ebf14f-finite-nisnevich-subfamily](item-lem-author-5bfbe3ebf14f-finite-nisnevich-subfamily), [lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition](item-lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition) and [lem-author-5bfbe3ebf14f-finite-generated-topology-basis](item-lem-author-5bfbe3ebf14f-finite-generated-topology-basis) prove that covering sieves contain finite composite generating families.

[F2] [lem-author-5bfbe3ebf14f-finite-coproduct-sieve-refinement](item-lem-author-5bfbe3ebf14f-finite-coproduct-sieve-refinement) proves that their coproduct is a covering morphism and explains how any two-stage refinement is split back into arrows of the original sieve.

[F3] [thm-author-5bfbe3ebf14f-mvw-finite-type-cdh-two-stage-input](item-thm-author-5bfbe3ebf14f-mvw-finite-type-cdh-two-stage-input) imports MVW12.26/12.28 and identifies its topology with the specified one, under exactly these hypotheses.

[F4] [lem-author-5bfbe3ebf14f-constant-sheaf-finite-local-representatives](item-lem-author-5bfbe3ebf14f-constant-sheaf-finite-local-representatives) supplies local representability from the actual two-plus sheafification and the finite constant-set factorization. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) fixes that convention.

## Proof
1.1 Apply [F1] to $S$ to obtain a finite $B$-family $\{U_i\to X\}$ whose arrows individually lie in $S$. By [F2] its finite coproduct $W\to X$ is a cdh covering morphism. All schemes remain separated of finite type over $k$. Therefore [F3] applies to this morphism and gives $V\to X'\to X$ and $h:V\to W$ with the claimed proper and Nisnevich conditions. Lemma12.26 in [F3] identifies that proper cover as completely decomposed. [F1, F2, F3, given]

2.1 Apply [F2] to $h$: the $V_i$ form a finite clopen decomposition of $V$, their maps to $X'$ are a Nisnevich family, and their composites to $X$ factor through the corresponding $U_i\to X$. Those composites consequently lie in $S$. This proves the sieve-level two-stage refinement in its precise family sense; no coproduct arrow has been added to $S$. [F2, step 1.1]

3.1 For an integer section use [F4] to obtain its covering sieve of constant representatives, then a finite $B$-family in that sieve. The finitely many representatives $n_i$ give its factorization through the constant-set sheaf of $D=\{n_i\}$. Apply steps 1.1 and 2.1 to this family if a two-stage form is desired. Since $V_i\to X$ factors through $U_i$, the representative on $V_i$ remains $n_i$; no new values appear. This proves the finite-values assertion and completes the proposition with the original cover-refinement claim preserved. [F1, F2, F4, step 1.1, step 2.1] ∎

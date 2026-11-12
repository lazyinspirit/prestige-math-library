---
id: lem-author-58e57d689702-independent-gamma
kind: lemma
title: An independent full equivalence into the truncated cdh localization
status: published
domain: mathematics
deps:
  - thm-author-e71ff76fe904-cdh-factorization-input
  - lem-author-e71ff76fe904-finite-quotient-comparison
  - lem-author-dcdf962edbda-qcqs-site
  - def-motivic-cohomology
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-e71ff76fe904-cdh-factorization-input: mathematical-premise
  lem-author-e71ff76fe904-finite-quotient-comparison: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
formulation_deps:
  - thm-author-e71ff76fe904-cdh-factorization-input
  - lem-author-e71ff76fe904-finite-quotient-comparison
  - lem-author-dcdf962edbda-qcqs-site
  - def-motivic-cohomology
  - math:def-axiom-of-choice
argument_deps:
  - thm-author-e71ff76fe904-cdh-factorization-input
  - lem-author-e71ff76fe904-finite-quotient-comparison
  - lem-author-dcdf962edbda-qcqs-site
  - def-motivic-cohomology
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and the fixed compatible nested universes and site-size bounds of the finite-quotient and qcqs-site constructions, with $\omega$ in the scheme-data universe.

For every qcqs $k$-scheme, every $j\geq0$ and invertible positive integer $n$, the actual source maps give a natural equivalence
$$\gamma_X:\mathbb Z(j)_{\mathrm{mot}}(X)/n\xrightarrow{\alpha_X}\mathbb Z(j)_{\mathrm{cdh},F}(X)/n\xrightarrow{\theta_X}(L^F_{\mathrm{cdh}}\tau^{\leq j}B_j)(X).$$
Here $F$ is the prime subfield; localization is on the completed entire qcqs $F$-scheme site, and $B_j=R\Gamma_{\mathrm{et}}(-,\mu_n^{\otimes j})$. Both arrows are full equivalences before applying any cohomological truncation. This claim is independent of all pending Artin, singular-BL and étale-descent targets.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the stated exact map or descent conclusion.

[F1] [[lem-author-e71ff76fe904-finite-quotient-comparison]]. [F2] [[thm-author-e71ff76fe904-cdh-factorization-input]], [[lem-author-dcdf962edbda-qcqs-site]] and [[def-motivic-cohomology]].

[A1] Retain the Axiom of Choice and the compatible universe and site-size bounds required by the actual finite-quotient comparison. All functors, sheafifications and evaluations below use those same bounds. [[math:def-axiom-of-choice]]

## Proof
1.1 The completed finite-quotient supplier [F1] supplies the actual full equivalence $\alpha$ on all qcqs prime-field schemes: Theorem4.10(4) in characteristic zero, and Theorem4.24(3) tensored with $\mathbb Z/n$ in characteristic $r>0$ with $r\nmid n$. The completed factorization supplier supplies the full equivalence $\theta$ by EM Theorem3.5(3). [F1, F2]

2.1 Their composite is a full equivalence and has the displayed actual source and target on evaluating at $X$. Prime-field restriction is actual precomposition, so does not alter either arrow. All source maps and their domains are fixed by the completed suppliers; no assertion from a pending target or mere truncated comparison enters this argument. [F1, F2, step 1.1] ∎

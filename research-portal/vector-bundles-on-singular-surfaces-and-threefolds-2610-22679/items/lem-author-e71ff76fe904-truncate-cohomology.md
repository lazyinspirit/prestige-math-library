---
id: lem-author-e71ff76fe904-truncate-cohomology
kind: lemma
title: Cofiber range gives natural truncation and cohomology comparison
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-e71ff76fe904-comparison-composite
  - lem-author-e71ff76fe904-prime-field-coefficients
  - def-motivic-cohomology
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-e71ff76fe904-comparison-composite: mathematical-premise
  lem-author-e71ff76fe904-prime-field-coefficients: mathematical-premise
  def-motivic-cohomology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 13
---

## Statement
Assume the Axiom of Choice and compatible fixed universe size bounds for the small sites and derived categories used below. For every qcqs $k$-scheme $X$, $j\geq0$ and $n\geq1$ invertible in $k$, the actual comparison map gives a natural equivalence
$$\tau^{\leq j}(\mathbb Z(j)_{\mathrm{mot}}(X)/n)\xrightarrow{\sim}\tau^{\leq j}R\Gamma_{\mathrm{et}}(X,\mu_n^{\otimes j})$$
and natural isomorphisms $H^{a,j}_{\mathrm{mot}}(X,\mathbb Z/n)\to H^a_{\mathrm{et}}(X,\mu_n^{\otimes j})$ for all $a\leq j$.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[A1] The Axiom of Choice and fixed size bounds are inherited when applying the prime-field helper in steps 1.1 and 2.1, specifically its K-injective derived-evaluation identification. [[math:def-axiom-of-choice]]

[F1] [[lem-author-e71ff76fe904-comparison-composite]] supplies the actual source comparison and its objectwise cofiber bound.

[F2] [[lem-author-e71ff76fe904-prime-field-coefficients]] identifies the underlying prime-field object and the intrinsic étale target under [A1]; [[def-motivic-cohomology]] fixes its motivic source and finite coefficients.

## Proof
1.1 Apply the source comparison of [F1] at the underlying prime-field object given by [F2]. Precomposition evaluates the same actual map and its same cofiber. Its triangle $A\xrightarrow{f}B\to C$ has $H^a(C)=0$ for $a\leq j$. For $a\leq j$, both $H^{a-1}(C)$ and $H^a(C)$ are zero, so the long exact sequence shows $H^a(f)$ is an isomorphism. [A1, F1, F2]

2.1 Standard cohomological truncation preserves these cohomology groups in degrees at most $j$ and makes all larger ones zero. Hence $\tau^{\leq j}f$ is a quasi-isomorphism and therefore an equivalence in $D(\mathbb Z)$. The coefficient and derived-evaluation identifications of [F2] identify its terms with the displayed ones. Applying cohomology gives the asserted degree-$a$ isomorphisms by the completed motivic definition. All steps use functors or the natural source triangle, so commute with pullback in $X$. [A1, F1, F2, step 1.1] ∎

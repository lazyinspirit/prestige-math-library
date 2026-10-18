---
id: lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations
kind: lemma
title: "Finite-field groupoid cardinality respects the motivic stack relations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-field-stack-groupoid-cardinality
  - def-motivic-stack-function-groups-for-quiver-representations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dominic Joyce, Configurations in abelian categories. II. Ringel-Hall algebras, arXiv:math/0503029v2, §§2–3"
      url: "https://arxiv.org/pdf/math/0503029v4"
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §3"
      url: "https://arxiv.org/pdf/1002.4372v1"
verification:
  precheck: pass
---

## Statement

For the finite-quiver quotient stacks over $\mathbb F_q$ whose rational-point
groupoids are finite, groupoid cardinality is additive under closed/open
decomposition and multiplicative under product. It respects the
vector-bundle-stack relation
$$[V_1/V_0\to S] =\mathbb L^{r_1-r_0}[S\to S],$$
so it defines a ring realization on the subring of motivic classes generated
by these stacks, and it sends $\mathbb L$ to $q$.

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$, the vector-stack coefficient relation,
and the groupoid cardinality of
[[def-finite-field-stack-groupoid-cardinality]].

[F1] Groupoid cardinality is the finite sum
$\sum_{[x]}|\operatorname{Aut}(x)|^{-1}$
([[def-finite-field-stack-groupoid-cardinality]]).

[F2] The coefficient theory imposes
$[V_1/V_0]=\mathbb L^{r_1-r_0}[S]$
for a constant-rank vector-bundle map
([[def-motivic-stack-function-groups-for-quiver-representations]]).

## Proof

**Proof technique:** direct.

1.1 If a finite group $G$ acts on a finite groupoid $\mathcal H$, the action groupoid $\mathcal H//G$ has cardinality $|\mathcal H|/|G|$. For an orbit of isomorphism classes, choose a representative $h$; the automorphism group of its image in $\mathcal H//G$ has $|\operatorname{Aut}_{\mathcal H}(h)|\,|\operatorname{Stab}_G([h])|$ elements, since each stabilizing group element has exactly $|\operatorname{Aut}_{\mathcal H}(h)|$ isomorphisms $g h\to h$. The orbit has $|G|/|\operatorname{Stab}_G([h])|$ classes, all with the same automorphism-group order. Thus its contribution to $|\mathcal H//G|$ is the sum of their contributions to $|\mathcal H|$, divided by $|G|$; summing over the finitely many orbits proves the formula. This includes a finite set as a discrete groupoid. For translation of $\mathbb A^s(\mathbb F_q)$ on $\mathbb A^r(\mathbb F_q)$ through any linear map, it gives cardinality $q^{r-s}$, including the kernel stabilizers. [F1, algebra]

2.1 Over any finite quotient-stack base $S$ in the stated scope, stratify where the vector-bundle map has constant rank. Fix an isomorphism class $[s]$ on one stratum and a representative $s$. Its fiber groupoid is $[V_1(s)(\mathbb F_q)/V_0(s)(\mathbb F_q)]$, of cardinality $q^{r_1-r_0}$ by step 1.1. Transport along base isomorphisms identifies the groupoid of total rational points lying over $[s]$ with the action groupoid of this fiber under the finite group $\operatorname{Aut}_S(s)$; step 1.1 therefore gives its cardinality as $q^{r_1-r_0}/|\operatorname{Aut}_S(s)|$. Summing this explicit contribution over the finitely many base isomorphism classes proves $|[V_1/V_0](\mathbb F_q)|=q^{r_1-r_0}|S(\mathbb F_q)|$. The representatives and strata used here are finite in number; the argument uses only finite choices. Additivity over the finite rank stratification gives the identity before restricting to a stratum. [F1, F2, step 1.1]

3.1 Rational points respect a closed/open decomposition, and rational-point groupoids of products are products, so groupoid cardinality respects the scissor relation and the ring product. Step 2.1 verifies the only additional vector-stack relation. Since $|\mathbb A^1(\mathbb F_q)|=q\ne0$, the realization extends to localization at $\mathbb L$ and sends $\mathbb L^{-1}$ to $q^{-1}$. This proves the claimed well-defined ring realization. [F1, F2, step 2.1, algebra] ∎



---
id: lem-local-koszul-acyclicity-inductive-converse
kind: lemma
title: "Local Koszul Acyclicity Inductive Converse"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-mapping-cone-homology-exact-sequence, def-regular-sequence-on-a-module, def-local-ring, def-noetherian-ring, def-noetherian-module, def-generated-cyclic-finitely-generated-and-free-modules, thm-nakayama-lemma]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

Let $(R,\mathfrak m)$ be Noetherian local, $M$ finite, and $\mathbf x=(x_1,\ldots,x_n)\subseteq\mathfrak m$ be nonempty, with $M/(\mathbf x)M\ne0$. If $K(\mathbf x;M)$ has no positive homology, then the shorter complex is acyclic and the last element is injective on its preceding quotient.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-mapping-cone-homology-exact-sequence]], [[def-regular-sequence-on-a-module]], [[def-local-ring]], [[def-noetherian-ring]], [[def-noetherian-module]], [[def-generated-cyclic-finitely-generated-and-free-modules]], [[thm-nakayama-lemma]].

## Proof

**Proof technique:** direct.

1.1 Put $C=K(x_1,\ldots,x_{n-1};M)$ and $y=x_n$. For every $j>0$, the cone exact sequence and $H_{j+1}(K(\mathbf x;M))=0$ show that multiplication by $y$ on $H_j(C)$ is surjective. Each $H_j(C)$ is finite because $C$ is a bounded complex of finite modules over the Noetherian ring $R$. [given, algebra]

2.1 Since $y\in\mathfrak m$, Nakayama applied to the surjections in step 1.1 gives $H_j(C)=0$ for every $j>0$. The segment of the same exact sequence ending in $H_1(K(\mathbf x;M))=0$ then shows that multiplication by $y$ on $H_0(C)=M/(x_1,\ldots,x_{n-1})M$ is injective. These are the two asserted conclusions. [step 1.1, algebra] ∎

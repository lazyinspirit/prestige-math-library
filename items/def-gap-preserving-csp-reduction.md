---
id: def-gap-preserving-csp-reduction
kind: definition
title: "Complete uniform gap-preserving CSP reductions"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-constraint-graph-and-labeling-value, def-gap-csp]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §1.2-§1.3; Definition 1.2, Theorem 1.5 and Lemmas 1.6-1.8, pp. 4-7."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5 Definition 18.27 and Lemma 18.28, author-hosted draft."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Throughout this page a **binary constraint graph** is one in the convention of [[def-constraint-graph-and-labeling-value]]: a finite ordinary undirected multigraph with paired incidence slots, a finite nonempty alphabet $\Sigma$, one relation $R_e\subseteq\Sigma^2$ per edge in a specified endpoint order, and explicit Boolean relation tables. For an edge set $E\ne\varnothing$ the value $\operatorname{val}_\sigma(G)$ is the fraction of ordinary edges satisfied by the labeling $\sigma$, and $\operatorname{UNSAT}(G)=\min_\sigma(1-\operatorname{val}_\sigma(G))$; an edgeless graph has value one and unsatisfiability zero, as in the published convention. The **explicit encoding** of $G$ is the list of vertices, the paired incidence slots, the alphabet size and the relation tables; its bit length is the input size of the algorithms below.

Fix an alphabet-size parameter $s\ge1$ and a degree parameter $d\ge1$ for the input graphs. A **complete uniform gap-preserving reduction** with output alphabet $\Sigma'$, output degree bound $d'$, blowup $C$ and gap map $g$ consists of a deterministic algorithm $R$ that, given the explicit encoding of a binary constraint graph $G$ over an alphabet $\Sigma$ with $|\Sigma|=s$ whose underlying graph has all vertex degrees at most $d$, outputs the explicit encoding of a binary constraint graph $R(G)$ over the fixed alphabet $\Sigma'$ such that:

1. **Output shape.** Arity stays two, all vertex degrees of $R(G)$ are at most $d'$, and
$$|E(R(G))|\le C\,|E(G)|,\qquad |V(R(G))|\le C\,|E(G)|\ \text{ whenever } E(G)\ne\varnothing .$$
An edgeless input is mapped to an edgeless output, which therefore has value one.
2. **Completeness.** $\operatorname{UNSAT}(G)=0$ implies $\operatorname{UNSAT}(R(G))=0$.
3. **Gap preservation.** $\operatorname{UNSAT}(R(G))\ge g\bigl(\operatorname{UNSAT}(G)\bigr)$ for every input $G$, where $g:[0,1]\to[0,1]$ is nondecreasing with $g(0)=0$ and $g(\varepsilon)>0$ for every $\varepsilon>0$.
4. **Uniformity.** $R$ runs in time polynomial in the bit length of the explicit input encoding, and the output is explicit. The alphabet $\Sigma'$, the numbers $d'$, $C$ and the function $g$ depend only on the fixed parameters $s,d$ and on $R$ itself, never on $|V(G)|$ or $|E(G)|$.

The definition asserts no existence statement: it records the interface in which the degree-reduction, powering and assignment-tester steps of this page are stated. Isolated vertices may be deleted from inputs and outputs without changing value or unsatisfiability, so the vertex bound in clause 1 is never needed for padded inputs; the bounded-degree clause and the fixed alphabet keep the explicit encoding length of the output within a constant multiple of $|V(R(G))|+|E(R(G))|$ plus logarithmic vertex names. Loops count as ordinary edges with two incidences and a relation tested on the repeated label, exactly as published. Monotonicity of $g$ is used only to compose gap maps, in [[lem-complete-linear-blowup-reductions-compose]], never to enlarge an input hypothesis.

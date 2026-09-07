---
id: def-constraint-graph-and-labeling-value
kind: definition
title: "Constraint graph and labeling value"
status: published
origin: pipeline
deps: [def-regular-multigraph-and-normalized-adjacency]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §1.1 Definition1.1 and §1.2 Definition1.2, pp2–3."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Definition

A binary constraint graph consists of a finite ordinary undirected multigraph, with paired incidence slots as in [[def-regular-multigraph-and-normalized-adjacency]], a finite nonempty alphabet $\Sigma$, and for each edge a relation $R_e\subseteq\Sigma^2$ in a specified endpoint order. Reversing that order transposes the relation. Loops have two incidences and test $R_e(a,a)$. Relations are explicit Boolean tables.

For a labeling $\sigma:V\to\Sigma$, $\operatorname{val}_\sigma(G)$ is the fraction of ordinary edges satisfied. Put $\operatorname{val}(G)=\max_\sigma\operatorname{val}_\sigma(G)$ and $\operatorname{UNSAT}_\sigma(G)=1-\operatorname{val}_\sigma(G)$, $\operatorname{UNSAT}(G)=\min_\sigma\operatorname{UNSAT}_\sigma(G)$. An edgeless graph has value one. Isolated vertices may be removed without changing value. Fractions computed using directed slots agree with edge fractions. Duplicating each ordinary edge preserves them. An explicit representation uses $O(|V|+|E||\Sigma|^2)$ table entries and endpoint names of $O(\log(|V|+2))$ bits.

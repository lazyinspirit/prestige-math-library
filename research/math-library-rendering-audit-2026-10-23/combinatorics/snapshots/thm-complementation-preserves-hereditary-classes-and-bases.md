---
id: thm-complementation-preserves-hereditary-classes-and-bases
kind: theorem
title: "Complementation preserves hereditary classes and complements their minimal forbidden bases"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complement-of-a-graph-class, lem-complement-commutes-with-induced-subgraphs, def-minimal-forbidden-induced-subgraph, thm-hereditary-classes-have-a-unique-minimal-forbidden-basis]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
    - title: "ISGCI, Self-complementary classes"
      url: "https://www.graphclasses.org/classes/self_complementary.html"
pipeline_run: null
---

## Statement

If $\mathcal C$ is hereditary, then $\overline{\mathcal C}$ is hereditary and

$$\mathcal B(\overline{\mathcal C})=\{\overline H:H\in\mathcal B(\mathcal C)\}$$

up to isomorphism.

## Facts & Assumptions

**Given:** A hereditary graph class $\mathcal C$.

[F1] $G\in\overline{\mathcal C}$ exactly when $\overline G\in\mathcal C$ ([[def-complement-of-a-graph-class]]).

[L1] Complementation commutes with taking induced subgraphs ([[lem-complement-commutes-with-induced-subgraphs]]).

[F2] A minimal forbidden graph lies outside the class while all its proper induced subgraphs lie inside ([[def-minimal-forbidden-induced-subgraph]]).

[L2] A hereditary class is determined by its unique minimal forbidden basis ([[thm-hereditary-classes-have-a-unique-minimal-forbidden-basis]]).

## Proof

**Proof technique:** direct.

1.1 Let $G\in\overline{\mathcal C}$ and $W\subseteq V(G)$. Then $\overline G\in\mathcal C$, so $\overline G[W]\in\mathcal C$ by heredity. [F1]

1.2 Let $H\in\mathcal B(\mathcal C)$. Then $\overline H\notin\overline{\mathcal C}$, while for every proper $W\subsetneq V(H)$, $H[W]\in\mathcal C$ and therefore $\overline H[W]=\overline{H[W]}\in\overline{\mathcal C}$. [F1, F2, L1]

2.1 Since $\overline{G[W]}=\overline G[W]$, one has $G[W]\in\overline{\mathcal C}$. Isomorphism closure is likewise preserved, so $\overline{\mathcal C}$ is hereditary. [step 1.1, L1, F1]

2.2 Hence $\overline H\in\mathcal B(\overline{\mathcal C})$. Applying the same argument to the involution of complementation gives the reverse inclusion. [step 1.2, F2]

3.1 Therefore the minimal bases are complementary as claimed. [step 2.2, L2] ∎

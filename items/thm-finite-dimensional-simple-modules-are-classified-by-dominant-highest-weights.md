---
id: thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights
kind: theorem
title: "Finite-dimensional simple modules are classified by dominant highest weights"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-highest-weight-vector-and-cyclic-highest-weight-module, def-root-reflections-and-the-weyl-group-action, def-fundamental-weights-for-a-chosen-simple-root-system]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Every finite-dimensional simple $\mathfrak g$-module is a cyclic highest-weight module whose highest weight is dominant integral, and for each dominant integral weight

$$\lambda=\sum_{i=1}^r m_i\omega_i \qquad (m_i\in \mathbb N_0),$$

there exists, up to isomorphism, a unique finite-dimensional simple module $L(\lambda)$ with highest weight $\lambda$.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$ with chosen simple roots $\alpha_1,\dots,\alpha_r$ and fundamental weights $\omega_1,\dots,\omega_r$.

[F1] For each weight $\lambda$, there is a unique irreducible highest-weight module $L(\lambda)$, and every irreducible highest-weight module of weight $\lambda$ is isomorphic to $L(\lambda)$.

[F2] If $\lambda$ is dominant integral, then $L(\lambda)$ is finite-dimensional.

## Proof

**Proof technique:** direct.

1.1 In any finite-dimensional module, one can choose a weight maximal with respect to the positive-root order. Its weight space contains a nonzero vector killed by $\mathfrak n^+$, so every finite-dimensional simple module is a cyclic highest-weight module in the sense of [[def-highest-weight-vector-and-cyclic-highest-weight-module]]. [given, choose]

2.1 Restricting that module to each simple-root $\mathfrak{sl}_2$-subalgebra shows that the highest weight pairs nonnegatively and integrally with every simple coroot. By [[def-fundamental-weights-for-a-chosen-simple-root-system]], the highest weight is therefore a dominant integral combination of the fundamental weights. [step 1.1]

3.1 Let $V$ be a finite-dimensional simple module. By step 1.1 it is an irreducible highest-weight module of some weight $\lambda$, and step 2.1 shows that $\lambda$ is dominant integral. By [F1], $V\cong L(\lambda)$. Conversely, if $\lambda$ is dominant integral, then [F2] gives a finite-dimensional module $L(\lambda)$, and [F1] makes it the unique simple module with highest weight $\lambda$. This is exactly the claimed classification. [F1, F2, step 1.1, step 2.1] ∎

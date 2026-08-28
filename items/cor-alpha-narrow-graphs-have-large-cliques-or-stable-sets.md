---
id: cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets
kind: corollary
title: "An $\\alpha$-narrow graph has a clique or stable set of size at least $|V(G)|^{1/(2\\alpha)}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-clique-stable-set-and-numbers, def-real-power, thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs, def-perfect-graph-for-the-bull-route, thm-clique-independence-chromatic-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Proposition 2.1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Let $G$ be a nonempty finite graph and let $\alpha>0$. If $G$ is
$\alpha$-narrow, then $G$ contains a clique or a stable set of size at least
$|V(G)|^{1/(2\alpha)}$.

## Facts & Assumptions

**Given:** A nonempty $\alpha$-narrow finite graph $G$.

[L1] The graph $G$ has a perfect induced subgraph $P$ with $|V(P)|\ge |V(G)|^{1/\alpha}$ ([[thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs]]).

[L2] Every finite graph $H$ satisfies $|V(H)|\le \chi(H)\alpha(H)$ ([[thm-clique-independence-chromatic-bounds]]).

[F1] In a perfect graph, every induced subgraph satisfies $\chi=\omega$ ([[def-perfect-graph-for-the-bull-route]]).

[F2] The clique number and stability number are the sizes of the largest clique and stable set ([[def-clique-stable-set-and-numbers]]).

[F3] Real powers use the displayed exponent notation ([[def-real-power]]).

## Proof

**Proof technique:** direct.

1.1 Let $P$ be the perfect induced subgraph given by [L1]. Applying [L2] to $P$ and then using [F1] gives $|V(P)|\le \alpha(P)\omega(P)$. Hence either $\alpha(P)\ge |V(P)|^{1/2}$ or $\omega(P)\ge |V(P)|^{1/2}$. So $P$, and therefore $G$, has a stable set or clique of size at least $|V(P)|^{1/2}$. [L1, L2, F1, F2, algebra]

2.1 Since $|V(P)|\ge |V(G)|^{1/\alpha}$, step 1.1 yields a clique or stable set of size at least $|V(G)|^{1/(2\alpha)}$ by [F3]. [step 1.1, L1, F3, algebra] ∎

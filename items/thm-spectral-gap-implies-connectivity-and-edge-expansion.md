---
id: thm-spectral-gap-implies-connectivity-and-edge-expansion
kind: theorem
title: "For an $(n,d,\\lambda)$-graph with $\\lambda<d$, every nontrivial cut has many crossing edges"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-connected-components-partition-the-vertex-set, def-graph-adjacency-incidence-neighbourhood-and-degree, def-n-d-lambda-graph-and-expander, def-rayleigh-quotient, thm-courant-fischer-min-max-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "O. Pikhurko, Algebraic Methods in Combinatorics, Lemmas 67-68"
      url: "https://opikhurko.warwick.ac.uk/AlgMet.pdf"
---

## Statement

Let $G$ be an $(n,d,\lambda)$-graph with adjacency matrix $A$. For every
nonempty proper subset $S\subset V(G)$, writing
$e(S,V(G)\setminus S)$ for the number of edges crossing the cut, one has

$$e(S,V(G)\setminus S)\ge \frac{(d-\lambda)|S|(n-|S|)}{n}.$$

In particular, if $\lambda<d$, then $G$ is connected.

## Facts & Assumptions

**Given:** An $(n,d,\lambda)$-graph $G$ and a nonempty proper subset $S\subset V(G)$.

[F1] In an $(n,d,\lambda)$-graph, the graph is $d$-regular and its second-largest adjacency eigenvalue is at most $\lambda$ ([[def-n-d-lambda-graph-and-expander]]).

[L1] Courant-Fischer characterises the second-largest eigenvalue as a max-min Rayleigh quotient, so every nonzero vector orthogonal to the all-ones eigenvector has Rayleigh quotient at most $\lambda_2$ ([[thm-courant-fischer-min-max-principle]], [[def-rayleigh-quotient]]).

[L2] Connected components partition the vertex set ([[cor-connected-components-partition-the-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathbf 1_S$ be the indicator vector of $S$, and put $x:=\mathbf 1_S-\frac{|S|}{n}\mathbf 1$. Then $x\ne0$ because $S$ is nonempty and proper, and $x$ is orthogonal to $\mathbf 1$. Since $G$ is $d$-regular by [F1], the vector $\mathbf 1$ is an adjacency eigenvector with eigenvalue $d$, so [L1] gives $x^{\mathsf T}Ax\le \lambda\, x^{\mathsf T}x$. [F1, L1, algebra]

2.1 A direct computation gives $x^{\mathsf T}x=\frac{|S|(n-|S|)}{n}$ and $x^{\mathsf T}Ax=d\frac{|S|(n-|S|)}{n}-e(S,V(G)\setminus S)$, because $\mathbf 1_S^{\mathsf T}A\mathbf 1_S$ counts twice the edges internal to $S$, while $\mathbf 1_S^{\mathsf T}A\mathbf 1=d|S|$. Substituting these expressions into step 1.1 yields $d\frac{|S|(n-|S|)}{n}-e(S,V(G)\setminus S)\le \lambda\frac{|S|(n-|S|)}{n}$, which rearranges to the claimed cut bound. [step 1.1, F1, algebra]

3.1 If $\lambda<d$ and $G$ were disconnected, [L2] would provide a connected component $C$ with $\varnothing\ne C\ne V(G)$ and $e(C,V(G)\setminus C)=0$. But step 2.1 would then force $0\ge \frac{(d-\lambda)|C|(n-|C|)}{n}>0$, a contradiction. So $G$ is connected. [step 2.1, L2]

4.1 Step 2.1 gives the edge-expansion inequality, and step 3.1 gives the connectedness consequence. [step 2.1, step 3.1] ∎

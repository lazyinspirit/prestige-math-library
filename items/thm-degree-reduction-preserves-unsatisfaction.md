---
id: thm-degree-reduction-preserves-unsatisfaction
kind: theorem
title: "Degree reduction preserves unsatisfaction quantitatively"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-cloud-consistency-forces-near-constant-labels, lem-regularization-preserves-value-quantitatively, lem-constraint-expander-overlay, def-gap-preserving-csp-reduction, def-degree-reduction-by-expander-clouds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §1.3 Lemma 1.7 and §4 Corollary 4.3, pp. 6 and 15."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1: preprocessing to a regular expander, author-hosted draft."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $G$ be a binary constraint graph over the fixed alphabet $\Sigma$ with $E(G)\ne\varnothing$, and let $G_2=R_{\deg}(G)$ be its degree-reduced graph as constructed by [[def-degree-reduction-by-expander-clouds]]. Then $G_2$ is $387$-regular over the same alphabet, has $2|E(G)|$ vertices and exactly $387|E(G)|$ ordinary edges, is produced from the explicit encoding of $G$ by a deterministic algorithm in polynomial time, and with $K=20/7$ its unsatisfiability satisfies perfect completeness and the quantitative bound
$$\operatorname{UNSAT}(G_2)\ge\frac{\operatorname{UNSAT}(G)}{387K}=\frac{7}{7740}\operatorname{UNSAT}(G).$$
Consequently $R_{\deg}$, with the empty output on edgeless inputs, is a complete uniform gap-preserving reduction in the sense of [[def-gap-preserving-csp-reduction]] with output alphabet $\Sigma$, output degree bound $387$, blowup $387$ and gap map $g(\varepsilon)=\varepsilon/(387K)$.

## Facts & Assumptions

**Given:** a binary constraint graph $G$ over the fixed alphabet $\Sigma$ with $m=|E(G)|\ge1$, its cloud graph $G_1$ and its degree-reduced graph $G_2=R_{\deg}(G)$, and $K=20/7$.

[F1] The full preprocessing graph $G_2$ of a graph with $m>0$ edges has $2m$ vertices, degree $387$ and $387m$ ordinary edges over the same alphabet; it has loops at every vertex and $\alpha(G_2)\le\rho_2<1$. With $K=20/7$ and $c=1/(129K)$, $$\frac{129c}{387}\operatorname{UNSAT}(G)\le\operatorname{UNSAT}(G_2)\le\frac{\operatorname{UNSAT}(G)}{387}.$$ For every port labeling $\tau$, $\operatorname{UNSAT}_\tau(G_2)=\frac{129}{387}\operatorname{UNSAT}_\tau(G_1)$ and $\operatorname{UNSAT}_{D\tau}(G)\le387K\operatorname{UNSAT}_\tau(G_2)$. Construction and plurality decoding take polynomial time, and the edgeless convention has unsatisfiability zero ([[lem-constraint-expander-overlay]]).


[F3] The degree-reduction map $R_{\deg}$ is deterministic: on an edgeless input it outputs the empty graph over $\Sigma$, and otherwise it outputs the graph $G_2$ of the cloud-and-overlay construction, listing the explicit expander adjacency lists, copying the $2m$ relation tables and adding the $387m$ slots of the overlay, in time polynomial in the encoding length of the input; the decoding map $D$ is the fixed plurality decoding of the construction ([[def-degree-reduction-by-expander-clouds]]).

[F4] A complete uniform gap-preserving reduction with output alphabet $\Sigma'$, output degree bound $d'$, blowup $C$ and gap map $g$ satisfies: $|E(R(G))|\le C|E(G)|$ and $|V(R(G))|\le C|E(G)|$ when $E(G)\ne\varnothing$; edgeless inputs go to edgeless outputs; $\operatorname{UNSAT}(G)=0$ implies $\operatorname{UNSAT}(R(G))=0$; $\operatorname{UNSAT}(R(G))\ge g(\operatorname{UNSAT}(G))$ with $g$ nondecreasing, $g(0)=0$ and $g(\varepsilon)>0$ for $\varepsilon>0$; and $R$ runs in polynomial time ([[def-gap-preserving-csp-reduction]]).

## Proof

**Proof technique:** direct.

1.1 By [F3] the map is deterministic and polynomial time, and by [F1] its output is $387$-regular over $\Sigma$ with $2m$ vertices and $387m$ ordinary edges. For $m\ge1$ these counts satisfy $|E(G_2)|=387m\le387|E(G)|$ and $|V(G_2)|=2m\le387|E(G)|$, the vertex bound because $2\le387$. [F1, F3, algebra]

1.2 Perfect completeness: if $\operatorname{UNSAT}(G)=0$ then the second inequality of [F1] gives $\operatorname{UNSAT}(G_2)\le\operatorname{UNSAT}(G)/387=0$, and unsatisfiability is nonnegative, so $\operatorname{UNSAT}(G_2)=0$. The edgeless case is the empty-output convention of [F3]. [F1, F3]

1.3 For the quantitative bound, let $\tau$ be any labeling of $G_2$, decoded to $\sigma=D\tau$ on $G$. By [F1], $\operatorname{UNSAT}_{D\tau}(G)\le387K\operatorname{UNSAT}_\tau(G_2)$, and by the definition of the minimum over labelings, $\operatorname{UNSAT}(G)\le\operatorname{UNSAT}_{D\tau}(G)$. Hence $\operatorname{UNSAT}(G)\le387K\operatorname{UNSAT}_\tau(G_2)$ for every $\tau$, and minimizing the right side over $\tau$ gives $$\operatorname{UNSAT}(G)\le387K\operatorname{UNSAT}(G_2),\qquad\text{that is,}\qquad \operatorname{UNSAT}(G_2)\ge\frac{\operatorname{UNSAT}(G)}{387K}.$$ [F1, algebra]

2.1 The gap map $g(\varepsilon)=\varepsilon/(387K)$ is nondecreasing, satisfies $g(0)=0$ and is positive for $\varepsilon>0$, and together with steps 1.1, 1.2 and 1.3 it makes $R_{\deg}$, with the empty output on edgeless inputs, a complete uniform gap-preserving reduction with output alphabet $\Sigma$ (fixed), output degree bound $387$, blowup $387$ and that gap map, in the sense of [F4]. For the edgeless input both the input and the output have unsatisfiability zero, so the gap inequality holds trivially there. [F3, F4, step 1.1, step 1.2, step 1.3] ∎

## Remarks

- The constant is not improvable by this proof: the factor $387K=7740/7$ is exactly the loss accumulated by the cloud rounding inequality $U_G\le U_{\rm ext}+(2/h_0)U_{\rm int}$ and the uniform edge rescaling from $129m$ to $387m$ slots in [F1]. Later items absorb it into their own constants, which is why [[thm-gap-amplification-step]] carries a smaller $\beta$.
- Fact [F2] is declared because the published derivation of the decoding inequality in [F1] runs through the cloud rounding bound; the page records that bound as its own interface so that the code and tester branches can cite it.

---
id: lem-complete-linear-blowup-reductions-compose
kind: lemma
title: "Complete linear-blowup reductions compose"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-gap-preserving-csp-reduction]
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
    - title: "Irit Dinur, The PCP theorem by gap amplification, §1.3 and §3: the composed reduction (prep)ᵗ∘P, pp. 6-7 and 11-12."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5 Definition 18.27 (complete linear-blowup reductions)."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $R_1$ be a complete uniform gap-preserving reduction with output alphabet $\Sigma_1$, output degree bound $d_1$, blowup $C_1$ and gap map $g_1$, defined for input alphabets of size $s$ and input degrees at most $d$. Assume also that $R_1(G)$ has at least one edge whenever $G$ has at least one edge. Let $R_2$ be a complete uniform gap-preserving reduction with output alphabet $\Sigma_2$, output degree bound $d_2$, blowup $C_2$ and gap map $g_2$, defined for input alphabets of size at least $|\Sigma_1|$ and input degrees at most $d_1$. Then the composition $R_2\circ R_1$, which on input $G$ first computes $R_1(G)$ and then $R_2(R_1(G))$, is a complete uniform gap-preserving reduction for input alphabets of size $s$ and input degrees at most $d$, with output alphabet $\Sigma_2$, output degree bound $d_2$, blowup $C_1C_2$, gap map $g_2\circ g_1$, and running time polynomial in the bit length of the explicit input encoding of $G$.

## Facts & Assumptions

**Given:** complete uniform gap-preserving reductions $R_1,R_2$ with the parameters and compatibility hypotheses in the statement, including the assumption that $R_1$ does not erase all edges of a nonempty input, and an input graph $G$ over an alphabet of size $s$ with all vertex degrees at most $d$.

[F1] A complete uniform gap-preserving reduction $R$ with output alphabet $\Sigma'$, output degree bound $d'$, blowup $C$ and gap map $g$ satisfies: $|E(R(G))|\le C|E(G)|$ and $|V(R(G))|\le C|E(G)|$ whenever $E(G)\ne\varnothing$; an edgeless input is mapped to an edgeless output; $\operatorname{UNSAT}(G)=0$ implies $\operatorname{UNSAT}(R(G))=0$; $\operatorname{UNSAT}(R(G))\ge g(\operatorname{UNSAT}(G))$ with $g$ nondecreasing, $g(0)=0$ and $g(\varepsilon)>0$ for $\varepsilon>0$; all degrees of $R(G)$ are at most $d'$, the arity remains two, and $R$ runs in polynomial time in the encoding length of its input ([[def-gap-preserving-csp-reduction]]).

[A2] The additional edge-preservation condition in the statement ensures that if $G$ has an edge, then $R_1(G)$ is a nonempty input for the size clauses of $R_2$.

## Proof

**Proof technique:** direct.

1.1 If $E(G)=\varnothing$ then $R_1(G)$ is edgeless by [F1], hence so is $R_2(R_1(G))$, as required for an edgeless input. If $E(G)\ne\varnothing$, [A2] gives $E(R_1(G))\ne\varnothing$, so [F1] applied twice yields $|E(R_2(R_1(G)))|\le C_2|E(R_1(G))|\le C_1C_2|E(G)|$ and $|V(R_2(R_1(G)))|\le C_2|E(R_1(G))|\le C_1C_2|E(G)|$; all degrees of $R_1(G)$ are at most $d_1$ and its alphabet is $\Sigma_1$, so $R_2$ is applicable to it. [F1, A2, algebra]

1.2 If $\operatorname{UNSAT}(G)=0$ then two applications of the completeness clause of [F1] give $\operatorname{UNSAT}(R_1(G))=0$ and then $\operatorname{UNSAT}(R_2(R_1(G)))=0$, so the composite is complete. [F1]

1.3 For the gap map, two applications of the gap clause of [F1] give $\operatorname{UNSAT}(R_2(R_1(G)))\ge g_2(\operatorname{UNSAT}(R_1(G)))\ge g_2(g_1(\operatorname{UNSAT}(G)))$, the second inequality because $g_2$ is nondecreasing and $\operatorname{UNSAT}(R_1(G))\ge g_1(\operatorname{UNSAT}(G))$; the composition $g_2\circ g_1$ is nondecreasing, vanishes at $0$ and is positive on $(0,1]$, so it is an admissible gap map. [F1, algebra]

2.1 For uniformity, the encoding length of $R_1(G)$ is bounded by a polynomial in the encoding length of $G$: the alphabet $\Sigma_1$ is fixed, all degrees are at most $d_1$, and the vertex and edge counts obey the linear bounds of step 1.1; the running time of $R_1$ on $G$ and of $R_2$ on $R_1(G)$ is polynomial in the respective encoding lengths by [F1], so with the shape, completeness and gap clauses of step 1.1, step 1.2 and step 1.3 the composite runs in polynomial time in the encoding length of $G$ and is a complete uniform gap-preserving reduction with output alphabet $\Sigma_2$, output degree bound $d_2$, blowup $C_1C_2$ and gap map $g_2\circ g_1$. [F1, step 1.1, step 1.2, step 1.3, algebra] ∎

## Remarks


- The compatibility hypotheses are not cosmetic: $R_2$ is applied to a graph whose alphabet is $\Sigma_1$ and whose degrees are bounded by $d_1$, and step 1.1 is exactly where those two fixed parameters, together with the edge bound, keep the intermediate explicit encoding polynomially short. Without a bound on the intermediate encoding length the composition of two polynomial-time algorithms need not be polynomial time in the original input length.
- The edge blowup multiplies and the gap maps compose in the order the reductions are applied; no constant is lost. Later items of this page use the lemma with $R_1$ the degree-reduction map and $R_2$ the powering map.

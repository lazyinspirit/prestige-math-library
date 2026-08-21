---
id: lem-van-kampen-factorization-invariance
kind: lemma
title: "Homotopic-loop factorizations have the same value in the group pushout"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-open-cover-loop-generation, lem-van-kampen-homotopy-grid,
       def-pushout-of-group-homomorphisms,
       def-induced-homomorphism-on-fundamental-groups,
       thm-fundamental-group-laws, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.20"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Assume the hypotheses of [[lem-open-cover-loop-generation]], and let $P$ be a pushout of

$$\pi_1(U\cap V,x_0)\longrightarrow\pi_1(U,x_0),\qquad \pi_1(U\cap V,x_0)\longrightarrow\pi_1(V,x_0).$$

A **subordinate factorization** is one obtained from a finite subdivision and connector paths in $U\cap V$ as in [[lem-open-cover-loop-generation]]; it writes the loop class as a product of inclusion-images of based loops lying in $U$ or $V$. Replace each factor by its image under the corresponding canonical map to $P$ and multiply in the same order. If two based loops are path-homotopic relative to their endpoints, then every subordinate factorization of the first and every subordinate factorization of the second have the same value in $P$.

## Facts & Assumptions

**Given:** The two-set cover and basepoint, the pushout $P$ with factor maps $i_U,i_V$, endpoint-homotopic based loops $\alpha,\beta$, and subordinate factorizations of both loops.

[L1] Every based loop over the cover has a finite subordinate factorization by loops in $U$ and $V$ ([[lem-open-cover-loop-generation]]).

[L2] A path homotopy over the cover has a finite subordinate grid refining any prescribed bottom and top subdivisions ([[lem-van-kampen-homotopy-grid]]).

[F1] In the pushout, the factor maps satisfy $i_U\circ k_U=i_V\circ k_V$ on $\pi_1(U\cap V,x_0)$ ([[def-pushout-of-group-homomorphisms]]).

[F2] A finite natural-number-indexed family of nonempty sets has a choice function ([[lem-finite-choice]]).

[F3] Loop concatenation, constant loops, and reversed paths give the group operation, identity, and inverses in every fundamental group ([[thm-fundamental-group-laws]]).

## Proof

**Proof technique:** direct.

1.1 The value of a subordinate factorization $[\alpha]=(j_{A_1})_*[a_1]\cdots(j_{A_m})_*[a_m]$ is, by definition, $i_{A_1}[a_1]\cdots i_{A_m}[a_m]\in P$. Subdividing a factor only replaces one factor by a product in the same fundamental group. If a connector at a subdivision point is changed, the two connectors differ by a loop in $U\cap V$, and [F1] gives the same element whether that correction is read in the $U$ factor or the $V$ factor. Thus refinements and connector changes preserve the value. [L1, F1, F3]

2.1 Choose an endpoint-fixed path homotopy $H$ from $\alpha$ to $\beta$. By [L2], take a subordinate rectangular grid refining the prescribed subdivisions of both factorizations. At every grid vertex, choose a path to $x_0$ inside $U$ if all adjacent rectangles are assigned to $U$, inside $V$ if all are assigned to $V$, and inside $U\cap V$ if both assignments occur. Each required path family is nonempty by path-connectedness, and [F2] licenses the finite selection; on the bottom and top edges use the prescribed connectors after the harmless adjustments of step 1.1. [step 1.1, L2, F2, choose]

3.1 For an oriented grid edge, concatenate its chosen endpoint connectors with the image of the edge. This gives a based loop in either adjacent cover member; if the adjacent assignments differ, both connectors lie in $U\cap V$, so [F1] identifies the two readings in $P$. Around one grid rectangle, the four edge loops multiply to the identity because the restriction of $H$ to that rectangle contracts its boundary inside its assigned cover member. Multiplying these boundary identities row by row cancels every interior edge with its reverse, leaving exactly the refined bottom word and the inverse of the refined top word. Hence the two words have equal value in $P$. [step 2.1, F1, F3, algebra]

4.1 Step 1.1 identifies the refined boundary words with the values of the original factorizations, while step 3.1 identifies those refined values with each other. Therefore every factorization of $\alpha$ and every factorization of $\beta$ have the same value in $P$. [step 1.1, step 3.1] ∎

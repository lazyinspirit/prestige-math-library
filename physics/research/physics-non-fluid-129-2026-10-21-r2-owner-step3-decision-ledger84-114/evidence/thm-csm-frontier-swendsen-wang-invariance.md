---
id: thm-csm-frontier-swendsen-wang-invariance
kind: theorem
title: Finite Swendsen–Wang update preserves the Potts law
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - alg-csm-frontier-swendsen-wang
  - thm-csm-frontier-edwards-sokal
  - def-csm-frontier-finite-potts-fk
dependency_roles:
  alg-csm-frontier-swendsen-wang: mathematical-premise
  thm-csm-frontier-edwards-sokal: mathematical-premise
  def-csm-frontier-finite-potts-fk: mathematical-premise
justified_by: []
aliases: []
axiom_use: No choice axiom is used; all graphs, edge sets, components, and probability sums are finite.
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Geoffrey R. Grimmett, The Random-Cluster Model"
      url: https://arxiv.org/pdf/math/0205237
      locator: "§2.3, printed pp. 7–9 (PDF pp. 6–8), and §8.3 (PDF pp. 38–39): the finite joint Potts/FK law and Swendsen–Wang update."
    - title: "Hugo Duminil-Copin, Geometric Representations of Lattice Spin Models, Cours Peccot lecture notes"
      url: https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf
      locator: "Chapter 3, §3.2, printed pp. 24–26: finite Potts/FK coupling and conditional cluster colors."
verification:
  precheck: pending
---

## Statement

For a finite simple graph $G=(V,E)$, integer $Q\geq2$, and finite activities $v_e\geq0$, let $\pi_P(\sigma)=w_P(\sigma)/Z_P$ be the normalized finite Potts law and let the Swendsen–Wang update be the two-stage procedure of activating equal-spin edges with probabilities $v_e/(1+v_e)$ and independently recoloring each resulting component uniformly from $[Q]$. Its transition kernel preserves $\pi_P$. The procedure always terminates after finitely many edge and component operations. No irreducibility, uniqueness, convergence-rate, or critical-mixing claim is made.

## Statement references

[[alg-csm-frontier-swendsen-wang]]

[[def-csm-frontier-finite-potts-fk]]

[[thm-csm-frontier-edwards-sokal]]

## Facts & Assumptions

**Given:** The finite graph, integer $Q\geq2$, and finite nonnegative edge activities.

[F1] [[def-csm-frontier-finite-potts-fk]]: $w_P(\sigma)=\prod_{e=\{u,v\}\in E}(1+v_e\mathbf1_{\{\sigma(u)=\sigma(v)\}})$, $Z_P=\sum_\sigma w_P(\sigma)>0$, and the FK edge weight is $w_{FK}(A)=Q^{k_G(A)}\prod_{e\in A}v_e$.

[F2] [[thm-csm-frontier-edwards-sokal]]: for $W(\sigma,A)=\prod_{e\notin A}1\prod_{e\in A}v_e\mathbf1_{\{\sigma(u_e)=\sigma(w_e)\}}$, the normalized joint law $\nu(\sigma,A)=W(\sigma,A)/\sum_{\tau,B}W(\tau,B)$ has Potts spin marginal $w_P/Z_P$, FK edge marginal $w_{FK}/Z_{FK}$, and, conditional on any positive-probability edge set, independent uniform colors on its connected components. These are the exact current supplier interfaces used below.

[F3] [[alg-csm-frontier-swendsen-wang]]: edges with unequal endpoint spins are absent; equal-spin edges are independently activated with probability $v_e/(1+v_e)$; each component is then recolored independently and uniformly.

## Proof
**Given:** [F1]–[F3], with the exact finite conventions stated above.

1.1 For each fixed spin configuration $\sigma$, summing $W(\sigma,A)$ over $A\subseteq E$ factors over edges. An unequal-spin edge must be absent and contributes $1$; an equal-spin edge contributes either $1$ or $v_e$. Thus $\sum_AW(\sigma,A)=\prod_{e\in E}(1+v_e\mathbf1_{\{\sigma(u_e)=\sigma(w_e)\}})=w_P(\sigma)$, which is positive by [F1]. Dividing by this conditional normalizer shows that under $\nu$, given $\sigma$, unequal-spin edges are forced absent and equal-spin edges are independent Bernoulli variables with activation probabilities $v_e/(1+v_e)$, including probability zero when $v_e=0$. This is exactly the first stage of [F3]. [F1, F2, F3, algebra]

2.1 Every edge set produced in step 1.1 has $W(\sigma,A)>0$: all active edges have $v_e>0$ and equal endpoint spins, while inactive edges contribute $1$. Therefore $\nu(A)>0$. By [F2], conditional on this edge set, its components receive independent uniform colors. This is exactly the second stage of [F3]. [F2, F3, step 1.1]

3.1 Start with $\sigma$ distributed as the spin marginal $\pi_P$ of $\nu$. By step 1.1, after the first stage the pair $(\sigma,A)$ has joint law $\nu$. By step 2.1, the new configuration $\sigma'$ is then drawn from the spin conditional law $\nu(\cdot\mid A)$. Summing over the finite edge-set space shows that its marginal is the spin marginal of $\nu$, namely $\pi_P$. Hence the update preserves $\pi_P$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 The graph has finitely many edges, so the first stage performs one draw per edge; the second stage performs one draw per connected component of a finite graph. Both stages therefore terminate after finitely many operations. [F1, F3] ∎

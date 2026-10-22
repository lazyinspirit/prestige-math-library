---
id: thm-csm-frontier-edwards-sokal
kind: theorem
title: "Finite Edwards–Sokal coupling and correlation identity"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps: [def-csm-frontier-finite-potts-fk]
dependency_roles:
  def-csm-frontier-finite-potts-fk: mathematical-premise
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all graphs, configuration spaces, and sums are finite."
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Geoffrey R. Grimmett, The Random-Cluster Model"
      url: https://arxiv.org/pdf/math/0205237
      locator: "§2.3, printed pp. 7–9 / PDF pp. 6–8: finite joint law, marginals, cluster coloring, and correlation/connection proof."
    - title: "Hugo Duminil-Copin, Geometric Representations of Lattice Spin Models, Cours Peccot lecture notes"
      url: https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf
      locator: "Chapter 3, §3.2, printed pp. 24–26: conditional cluster coloring and the finite Potts/connectivity relation."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $G=(V,E)$ be a finite simple graph, let $Q\geq2$ be an integer, and let each edge activity $v_e$ be finite and nonnegative. Use the Potts weight $w_P(\sigma)=\prod_{e=\{u_e,w_e\}}(1+v_e\mathbf1_{\{\sigma(u_e)=\sigma(w_e)\}})$ and FK weight $w_{FK}(A)=Q^{k_G(A)}\prod_{e\in A}v_e$ from the finite definitions. Define
$$W(\sigma,A):=\prod_{e\notin A}1\prod_{e\in A}v_e\mathbf1_{\{\sigma(u_e)=\sigma(w_e)\}},\qquad (\sigma,A)\in[Q]^V\times2^E.$$
The normalized joint law $\nu(\sigma,A):=W(\sigma,A)/\sum_{\tau,B}W(\tau,B)$ has Potts marginal $w_P/Z_P$ and FK marginal $w_{FK}/Z_{FK}$, with $Z_P=Z_{FK}=\sum_{\tau,B}W(\tau,B)$. Conditional on an edge set $A$ of positive probability, the colors of its connected components are independent and uniform on $[Q]$. Thus for every $x,y\in V$,
$$\mathbb P(\sigma(x)=\sigma(y))=\frac1Q+\left(1-\frac1Q\right)\mathbb P_{FK}(x\leftrightarrow y),$$
where $x\leftrightarrow y$ means that $x$ and $y$ lie in the same component of $G_A$.

## Statement references

[[def-csm-frontier-finite-potts-fk]]

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$, integer $Q\geq2$, and finite activities $v_e\geq0$.

[F1] [[def-csm-frontier-finite-potts-fk]]: the spin weight is $\prod_e(1+v_e\mathbf1_{\{\sigma(u_e)=\sigma(w_e)\}})$, the FK weight of $A$ is $Q^{k_G(A)}\prod_{e\in A}v_e$, and both finite normalizers are positive.

## Proof

**Proof technique:** direct.

1.1 For fixed $\sigma$, summing $W(\sigma,A)$ over all $A\subseteq E$ chooses, independently for each edge, either its absent factor $1$ or its present factor $v_e\mathbf1_{\{\sigma(u_e)=\sigma(w_e)\}}$. Distributivity of the finite product therefore gives $\sum_AW(\sigma,A)=w_P(\sigma)$. Summing this equality over the finite set $[Q]^V$ gives $\sum_{\sigma,A}W(\sigma,A)=Z_P$. [given, F1, algebra]

1.2 Fix $A\subseteq E$. The product $W(\sigma,A)$ is zero unless the spins agree across every edge in $A$. Equality propagates along each finite path, so the admissible configurations are exactly those constant on each connected component of $G_A$. Assigning one of $Q$ colors independently to each of its $k_G(A)$ components gives exactly $Q^{k_G(A)}$ such configurations, each with weight $\prod_{e\in A}v_e$. Hence $\sum_\sigma W(\sigma,A)=w_{FK}(A)$, including when this weight is zero. Summing over $A$ gives $\sum_{\sigma,A}W(\sigma,A)=Z_{FK}$. [F1, algebra]

2.1 The common total is positive by [F1], so dividing $W$ by it defines a probability law. The finite marginal sums in steps 1.1 and 1.2 show that its spin and edge marginals are respectively $w_P/Z_P$ and $w_{FK}/Z_{FK}$, and that $Z_P=Z_{FK}$. [F1, step 1.1, step 1.2, algebra]

2.2 For a fixed $A$ with positive FK probability, every spin assignment constant on its components has the same joint weight $\prod_{e\in A}v_e$. By step 1.2 there are $Q^{k_G(A)}$ such assignments, so the conditional law is uniform on them; this is equivalent to assigning independent uniform colors to the components. [step 1.2, algebra]

3.1 If $x,y$ are connected in $G_A$, step 2.2 makes their colors equal with conditional probability $1$. If they are in distinct components, their independent uniform colors agree with probability $1/Q$. Averaging over the FK marginal from step 2.1 yields $\mathbb P(\sigma(x)=\sigma(y))=\mathbb P_{FK}(x\leftrightarrow y)+Q^{-1}\mathbb P_{FK}(x\not\leftrightarrow y)=Q^{-1}+(1-Q^{-1})\mathbb P_{FK}(x\leftrightarrow y)$. [step 2.1, step 2.2, algebra] ∎

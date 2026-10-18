---
id: lem-weighted-network-energy-kernel-and-mass-balance
kind: lemma
title: "Energy, kernel, and weighted mass balance for a finite network"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    def-finite-weighted-network-diffusion-data,
    def-oriented-incidence-matrix-of-a-graph
  ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "No choice principle is used; only finite sums and finite-dimensional
  matrix identities occur."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Fan R. K. Chung, Spectral Graph Theory, Chapter 1: Eigenvalues and the
        Laplacian of a Graph, CBMS 92 (1997), complete chapter text"
      url: "https://fanchung.ucsd.edu/cbms.pdf"
      locator: "Complete Chapter 1 text; §§1.2 and 1.4, printed pp. 2–14."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorems 3.1–3.2 and §3.4, Theorem 3.4, PDF pp. 7–16."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use the data of [[def-finite-weighted-network-diffusion-data]]. Let
$E_+=\{e\in E:c_e>0\}$ and let $G_+=(V,E_+)$; its connected components are
the **positive-conductance components**. For $x\in\mathbb R^I$, let
$\bar x\in\mathbb R^V$ equal $x$ on $I$ and $0$ on $D$. Then

$$x^{\mathsf T}L_Dx=\sum_{e\in E}c_e (\bar x_{\mathrm{head}(e)}-\bar x_{\mathrm{tail}(e)})^2\ge0.$$

Consequently $L_D$ is symmetric positive semidefinite, and $x\in\ker L_D$
exactly when $\bar x$ is constant on each positive-conductance component and
that constant is zero on every such component meeting $D$. In the closed
case $D=\varnothing$, every differentiable solution of
$Mu'+L_Cu=f$ satisfies

$$\frac{d}{dt}\mathbf1^{\mathsf T}Mu(t)=\mathbf1^{\mathsf T}f(t).$$

Thus homogeneous closed diffusion conserves weighted mass
$\mathbf1^{\mathsf T}Mu$, which need not equal the unweighted sum
$\mathbf1^{\mathsf T}u$.

## Facts & Assumptions

**Given:** A finite oriented simple graph, conductances $c_e\ge0$, positive
free-vertex masses $m_i>0$, a Dirichlet set $D$, and the matrices
$B,C,M,L_C,L_D$ of [[def-finite-weighted-network-diffusion-data]].

[F1] Each oriented incidence column has exactly one $-1$ at its tail and one
$+1$ at its head; the other entries are zero
([[def-oriented-incidence-matrix-of-a-graph]]).

[F2] $L_C=BCB^{\mathsf T}$ and $L_D$ is its principal restriction to free
vertices ([[def-finite-weighted-network-diffusion-data]]).

## Proof

1.1 Reversing an edge orientation replaces its incidence column $b_e$ by $-b_e$, but the contribution $c_eb_eb_e^{\mathsf T}$ to $BCB^{\mathsf T}$ does not change. For the zero extension $\bar x$, [F1] gives $b_e^{\mathsf T}\bar x=\bar x_{\mathrm{head}(e)} -\bar x_{\mathrm{tail}(e)}$. Expanding $\bar x^{\mathsf T}BCB^{\mathsf T}\bar x =\sum_ec_e(b_e^{\mathsf T}\bar x)^2$ proves the displayed energy identity. It is nonnegative term by term, so $L_D$ is symmetric positive semidefinite. [given, F1, F2, algebra]

2.1 If $L_Dx=0$, step 1.1 gives a sum of nonnegative terms equal to $x^{\mathsf T}L_Dx=0$. For every $e\in E_+$ its endpoint difference must therefore be zero. Along every path in $G_+$, $\bar x$ has equal values at successive vertices, hence is constant on each positive-conductance component; it is zero on any such component meeting $D$ because $\bar x=0$ there. Conversely, if these componentwise conditions hold, every edge with $c_e>0$ has zero endpoint difference, while an edge with $c_e=0$ contributes zero regardless of its difference. Thus $BCB^{\mathsf T}\bar x=0$ and $L_Dx=0$. [step 1.1, given, algebra]

3.1 Suppose $D=\varnothing$. From [F1], every column of $B$ sums to zero, so $\mathbf1^{\mathsf T}B=0$ and therefore $\mathbf1^{\mathsf T}L_C=0$. Multiplying $Mu'+L_Cu=f$ on the left by $\mathbf1^{\mathsf T}$ gives $\mathbf1^{\mathsf T}Mu'+\mathbf1^{\mathsf T}L_Cu =\mathbf1^{\mathsf T}f$. The second term vanishes, and the first is the derivative of $\mathbf1^{\mathsf T}Mu$, proving the balance law and its homogeneous conservation case. [F1, F2, given, algebra] ∎


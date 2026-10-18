---
id: cex-density-continuity-fails-unequal-speed-routing
kind: counterexample
title: "Density continuity can violate conservative advection balance"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-conservative-network-advection-routing
  - thm-conservative-network-routing-conserves-flux
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "No choice principle is used; only finite flux sums are evaluated."
sources:
  references:
    - title: "Mario Arioli and Michele Benzi, A Finite Element Method for Quantum Graphs, Emory CS Technical Report TR-2015-009 (44-page full text)"
      url: "https://www.cs.emory.edu/technical-reports/techrep-00275.pdf"
      locator: "Complete 44-page report; §2, §4, §7.2, printed/PDF pp. 3–14 and 22–23."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorems 3.1–3.2 and §3.4, Theorem 3.4, PDF pp. 7–16."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

A universal junction rule declaring the density equal on every incident
edge always conserves mass for advection with unequal edge speeds.

## Counterexample model

Use one incoming edge with speed $1$ and two outgoing edges with speeds $1$
and $2$. Mass flux on an edge is stipulated to be speed times density. Giving
all incident edges density $1$ yields incoming flux $1$ and total outgoing
flux $3$, so mass is not conserved. A conservative routing can instead send
the full incoming flux to the speed-$1$ outgoing edge and zero to the other.

The arrows indicate the stipulated flow direction and speeds; the exact flux sums in the refutation, not the drawing, establish the failure.

\begin{center}
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
  \node[circle,draw] (v) at (0,0) {junction};
  \node[left] (in) at (-2.1,0) {in: $v=1,\ \rho=1,\ q=1$};
  \node[right] (out1) at (2.2,1.0) {out: $v_1=1,\ \rho=1,\ q_1=1$};
  \node[right] (out2) at (2.2,-1.0) {out: $v_2=2,\ \rho=1,\ q_2=2$};
  \draw[->] (in) -- (v);
  \draw[->] (v) -- (out1);
  \draw[->,dashed] (v) -- (out2);
\end{tikzpicture}
\end{center}

## Facts & Assumptions

**Given:** The stipulated one-in/two-out junction, positive speeds
$v_{\rm in}=1$, $v_1=1$, $v_2=2$, and mass flux $q=v\rho$.

[F1] A conservative routing matrix is nonnegative with unit sums down each
incoming column ([[def-conservative-network-advection-routing]]).

[F2] Such a routing maps any nonnegative incoming flux to a nonnegative
outgoing flux with the same total ([[thm-conservative-network-routing-conserves-flux]]).

## Refutation

**Given:** The junction velocities and density-to-flux relation in the
Counterexample.

1.1 If density is continuous with value $\rho=1$ on all three incident edges, the incoming flux is $v_{\rm in}\rho=1$, while the outgoing total is $v_1\rho+v_2\rho=1+2=3$. These are unequal, so this junction rule fails mass conservation in the stipulated model. [given, algebra]

2.1 The matrix $P=(1,0)^{\mathsf T}$ is entrywise nonnegative and its sole incoming column sums to $1$. With incoming flux $q^{\rm in}=1$, it produces $q^{\rm out}=(1,0)^{\mathsf T}$, whose total is $1$ by [F1, F2]. The corresponding outgoing densities are $(1,0)$, so this conservative routing does not impose equal densities. [F1, F2, step 1.1, algebra] ∎


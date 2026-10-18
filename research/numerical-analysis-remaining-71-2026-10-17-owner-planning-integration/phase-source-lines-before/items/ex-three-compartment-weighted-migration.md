---
id: ex-three-compartment-weighted-migration
kind: example
title: "Three-compartment migration conserves weighted mass"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-finite-weighted-network-diffusion-data
  - lem-weighted-network-energy-kernel-and-mass-balance
  - thm-weighted-network-semigroup-and-euler-positivity
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
    - title: "Fan R. K. Chung, Spectral Graph Theory, Chapter 1: Eigenvalues and the Laplacian of a Graph, CBMS 92 (1997), complete chapter text"
      url: "https://fanchung.ucsd.edu/cbms.pdf"
      locator: "Complete Chapter 1 text; §§1.2 and 1.4, printed pp. 2–14."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorems 3.1–3.2 and §3.4, Theorem 3.4, PDF pp. 7–16."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Consider a closed three-vertex path with orientation $1\to2\to3$, masses
$(1,2,3)$, conductances $(1,2)$, homogeneous diffusion, and initial state
$u(0)=(2,1,4)^{\mathsf T}$. Its conserved weighted mass is $16$. The
constant state $(8/3,8/3,8/3)^{\mathsf T}$ is an equilibrium with that same
weighted mass, and the exact trajectory from the stated nonnegative initial
state stays entrywise nonnegative. No convergence-to-equilibrium claim is made.

The diagram records the orientation, conductances, and vertex masses; edge lengths are schematic and are not used in the matrix calculation.

\begin{center}
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
  \node[circle,draw] (v1) at (0,0) {$1$};
  \node[circle,draw] (v2) at (2.1,0) {$2$};
  \node[circle,draw] (v3) at (4.2,0) {$3$};
  \draw[->] (v1) -- node[above] {$c_1=1$} (v2);
  \draw[->] (v2) -- node[above] {$c_2=2$} (v3);
  \node[below=4pt] at (v1) {$m_1=1$};
  \node[below=4pt] at (v2) {$m_2=2$};
  \node[below=4pt] at (v3) {$m_3=3$};
\end{tikzpicture}
\end{center}

## Facts & Assumptions

**Given:** The oriented path, $M=\operatorname{diag}(1,2,3)$,
$C=\operatorname{diag}(1,2)$, $D=\varnothing$, and the stated initial vector.

[F1] The closed network equation is $Mu'+L_Cu=0$, with $L_C=BCB^{\mathsf T}$
and weighted mass $\mathbf1^{\mathsf T}Mu$
([[def-finite-weighted-network-diffusion-data]]).

[F2] For a closed network, $\mathbf1^{\mathsf T}Mu$ is constant under
homogeneous diffusion; constants on a positive-conductance connected
component lie in $\ker L_C$
([[lem-weighted-network-energy-kernel-and-mass-balance]]).

[F3] The homogeneous exact semigroup is defined by the finite matrix
exponential and preserves nonnegative data
([[thm-weighted-network-semigroup-and-euler-positivity]]).

## Verification

**Given:** The three-compartment matrices, initial state, and homogeneous
network equation in the Example.

1.1 With the stated orientation,
$$B=\begin{pmatrix}-1&0\\1&-1\\0&1\end{pmatrix},\qquad L_C=BCB^{\mathsf T}= \begin{pmatrix}1&-1&0\\-1&3&-2\\0&-2&2\end{pmatrix}.$$
The graph is connected and both conductances are positive. [F1, given, algebra]

1.2 The initial weighted mass is
$\mathbf1^{\mathsf T}Mu(0)=2+2+12=16$. By [F2] it is constant for all
times for which the homogeneous solution is evaluated. [F1, F2, given, algebra]

2.1 The vector $\mathbf1=(1,1,1)^{\mathsf T}$ has
$L_C\mathbf1=0$ by the displayed matrix in step 1.1, and its weighted mass
at value $8/3$ is $(8/3)(1+2+3)=16$. Thus the stated constant state is an
equilibrium with the same weighted mass. [F1, F2, step 1.1, algebra]

2.2 Since $u(0)\ge0$, [F3] implies the exact semigroup trajectory remains
entrywise nonnegative for every $t\ge0$. [F3, given, step 1.1] ∎


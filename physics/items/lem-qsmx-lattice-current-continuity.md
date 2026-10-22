---
id: lem-qsmx-lattice-current-continuity
kind: lemma
title: Continuity equation for a local lattice charge current
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-lattice-current-and-limits
dependency_roles:
  def-qsmx-lattice-current-and-limits: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "J. Sirker, Transport in one-dimensional integrable quantum systems, SciPost Physics Lecture Notes 17 (2020), §2, equations (2.1)–(2.2)"
      url: https://arxiv.org/pdf/1910.12155
      locator: "§2, PDF p. 2, equations (2.1)–(2.2): the Heisenberg equation for local spin density and the oriented bond current."
---

## Statement

Use the finite open or periodic chain and bond-current definition in [[def-qsmx-lattice-current-and-limits]]. Each $j_{j,j+1}$ is self-adjoint, and with $\dot q_j:=(i/\hbar)[H_L,q_j]$ the exact local identity
$$\dot q_j=j_{j-1,j}-j_{j,j+1}$$
holds at every site. Consequently the total charge $Q_L:=\sum_{j\in\Lambda_L}q_j$, where $\Lambda_L$ is the open-chain site set or periodic site set from the definition, is conserved: $[H_L,Q_L]=0$. The current orientation is from $j$ to $j+1$, so positive outgoing current lowers the charge at site $j$.

## Statement references

[[def-qsmx-lattice-current-and-limits]]

[Sirker, §2, equations (2.1)–(2.2)](https://arxiv.org/pdf/1910.12155)

## Facts & Assumptions

**Given:** The finite open chain or periodic ring, self-adjoint nearest-neighbor bond terms $h_{j,j+1}$, local charges $q_j$, and $\hbar>0$ in the Statement.

[A1] Locality: $[h_{k,k+1},q_j]=0$ whenever $j\notin\{k,k+1\}$; absent open-chain boundary currents are zero.

[A2] Bond charge conservation: $[h_{j,j+1},q_j+q_{j+1}]=0$ for every oriented bond.

[F1] [[def-qsmx-lattice-current-and-limits]]: $H_L$ is the sum over open-chain or periodic-ring bonds, $j_{j,j+1}=(i/\hbar)[h_{j,j+1},q_{j+1}]$, and absent open-chain boundary currents are zero.

## Proof

**Proof technique:** direct commutator calculation.

**Given:** [A1]–[A2], [F1], and the open-chain or periodic-ring site and bond indices.

1.1 Since $h_{j,j+1}$ and $q_{j+1}$ are self-adjoint, $[h_{j,j+1},q_{j+1}]^*=-[h_{j,j+1},q_{j+1}]$. Thus $j_{j,j+1}=(i/\hbar)[h_{j,j+1},q_{j+1}]$ is self-adjoint. [given, F1, algebra]

1.2 The Heisenberg derivative is $\dot q_j=(i/\hbar)\sum_k[h_{k,k+1},q_j]$. By [A1], only the existing bonds immediately to the left and right of $j$ can contribute. The left contribution is $(i/\hbar)[h_{j-1,j},q_j]=j_{j-1,j}$ when that bond exists, and is zero by the open-boundary convention otherwise. [given, A1, F1, algebra]

1.3 For the right contribution, [A2] gives $[h_{j,j+1},q_j]=-[h_{j,j+1},q_{j+1}]$, so $(i/\hbar)[h_{j,j+1},q_j]=-j_{j,j+1}$ when that bond exists. If it is absent at the open right endpoint, both terms are zero by convention. [given, A1, A2, F1, algebra]

2.1 Combining steps 1.2 and 1.3 proves $\dot q_j=j_{j-1,j}-j_{j,j+1}$. Summing over $j\in\Lambda_L$ cancels every existing open-chain or periodic bond once with each sign, so $\dot Q_L=0$, equivalently $[H_L,Q_L]=0$. [step 1.2, step 1.3, algebra] ∎

## Diagram

The arrows show the declared positive orientation of the bond currents. At site $j$, the incoming arrow contributes positively to $\dot q_j$ and the outgoing arrow negatively. This picture explains the sign convention only; the commutator proof above is independent of it.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (left) at (0,0) {$q_{j-1}$};
  \node (center) at (2.4,0) {$q_j$};
  \node (right) at (4.8,0) {$q_{j+1}$};
  \draw[->] (left) -- node[above] {$j_{j-1,j}$} (center);
  \draw[->] (center) -- node[above] {$j_{j,j+1}$} (right);
\end{tikzpicture}
```


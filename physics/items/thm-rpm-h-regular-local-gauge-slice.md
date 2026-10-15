---
id: thm-rpm-h-regular-local-gauge-slice
kind: theorem
title: "A transverse local gauge condition gives a second-class slice"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-regular-constraint-system, thm-rpm-h-first-class-local-reduction, thm-rpm-h-second-class-dirac-bracket, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
dependency_roles:
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-rpm-h-regular-constraint-system: mathematical-premise
  thm-rpm-h-first-class-local-reduction: mathematical-premise
  thm-rpm-h-second-class-dirac-bracket: mathematical-premise
sources:
  references:
    - title: "Henneaux, Teitelboim and Regge, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter I, printed pp. 7–11, gauge fixing; Chapter II, pp. 27–30."
    - title: "Ghanashyam Date, Lectures on Constrained Systems, arXiv:1010.2062"
      url: "https://arxiv.org/pdf/1010.2062"
      locator: "§4, printed pp. 18–22."
physical_scope: "Local slice near a point where the gauge matrix is invertible; no uniqueness for distant orbits."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $\chi_1,\ldots,\chi_r$ be regular first-class constraints on $N$ as in [[thm-rpm-h-first-class-local-reduction]], and choose a point $z_0\in N$. Let $\phi_1,\ldots,\phi_r$ be smooth functions with $\phi_b(z_0)=0$ and suppose $A_{ab}=\{\chi_a,\phi_b\}$ is invertible at $z_0$. By continuity, it remains invertible on a neighborhood of $z_0$ in $N$. Then the combined constraint matrix for $(\chi,\phi)$ is invertible near $z_0$, so the combined surface is second class and carries the Dirac symplectic form. After shrinking the neighborhood, each nearby characteristic leaf intersects the gauge surface in exactly one point within that coordinate neighborhood. This is a local slice assertion only. When $r=0$ the characteristic leaves are points and the empty gauge condition is immediate; the proof below treats $r\ge1$.

## Facts & Assumptions

**Given:** A regular first-class constraint surface, smooth gauge functions, and an invertible transverse bracket matrix $A$ near the chosen point.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[thm-rpm-h-first-class-local-reduction]]: the independent characteristic fields span a smooth rank-$r$ involutive distribution with local leaf coordinates.

[F2] [[thm-rpm-h-second-class-dirac-bracket]]: invertible constraint bracket matrix implies an embedded symplectic joint level with Dirac bracket.

[F3] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]: a smooth map between equal-dimensional Euclidean open sets with invertible derivative at a point is a diffeomorphism between suitable neighborhoods.

## Proof

1.1 On the common zero set, the combined matrix has block form $\begin{pmatrix}B&A\\-A^T&D\end{pmatrix}$, where $B=\{\chi,\chi\}=0$ there by first-classness and $D=\{\phi,\phi\}$. If it annihilates $(u,v)$, its first block equation is $Av=0$, so $v=0$; its second is $-A^Tu=0$, so $u=0$. Thus it is invertible; continuity preserves invertibility on a smaller neighborhood. [given, A1, F1, algebra]

2.1 [F2] applied to the combined list makes its zero surface embedded and symplectic with the displayed Dirac bracket. [given, F2, step 1.1]

2.2 In Frobenius coordinates from [F1] around $z_0$, use the local frame $X_{\chi_a}$ along each leaf. At $z_0$, its derivative on the gauge map has entries $X_{\chi_a}(\phi_b)=\{\phi_b,\chi_a\}=-A_{ab}$, so it is invertible; changing to the $s$-coordinate frame multiplies by an invertible matrix. For $r\ge1$, [F3] therefore gives a local diffeomorphism of the gauge map along each leaf. [given, F1, F3, step 1.1, algebra]

3.1 At $z_0=(s_0,y_0)$ the gauge map has value $\phi(z_0)=0$ by the statement. Consider the equal-dimensional map $(s,y)\mapsto(\phi_1(s,y),\ldots,\phi_r(s,y),y)$. Its derivative at $z_0$ is block triangular with invertible diagonal blocks by step 2.2 and the identity on $y$. Applying [F3] gives a neighborhood on which this map is a diffeomorphism; therefore, for each nearby $y$, the gauge equations have exactly one local solution $s$. This proves exactly one intersection within that product neighborhood, with no claim about distant portions of a leaf. [given, F3, step 2.2, algebra] ∎


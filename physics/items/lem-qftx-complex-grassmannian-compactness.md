---
id: lem-qftx-complex-grassmannian-compactness
kind: lemma
title: Compactness of the finite complex Grassmannian
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 0
deps: [cor-heine-borel-in-the-product-topology]
dependency_roles:
  cor-heine-borel-in-the-product-topology: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "I. M. Singer, Some Remarks on the Gribov Ambiguity, Communications in Mathematical Physics 60 (1978), 7–12"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-60/issue-1/Some-remarks-on-the-Gribov-ambiguity/cmp/1103904019.pdf"
      locator: "§2, p. 9, irreducible holonomy and finite-dimensional Grassmannian context; compactness proof supplied locally."
    - title: "Steven Sivek, Lectures on Instantons and Contact Structures"
      url: "https://wwwf.imperial.ac.uk/~ssivek/papers/regensburg-notes.pdf"
      locator: "§1, pp. 2–3, irreducible connections and gauge-theoretic setup; compactness proof supplied locally."
    - title: "Dominic Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§5.13.2–§5.13.3, PDF pp. 114–116, Sobolev connection/gauge setup and irreducibility convention; Grassmannian compactness is proved locally."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Statement

Let $N\ge2$. For $1\le k<N$, let $\operatorname{Gr}_{\mathbb C}(k,N)$ be the set of matrices $P\in M_N(\mathbb C)$ satisfying $P^*=P$, $P^2=P$, and $\operatorname{tr}P=k$, with the topology inherited from $M_N(\mathbb C)\cong\mathbb R^{2N^2}$. The map $P\mapsto\operatorname{ran}P$ identifies this space with the usual Grassmannian of complex $k$-planes in $\mathbb C^N$. The finite union $\mathscr G_N=\bigcup_{1\le k<N}\operatorname{Gr}_{\mathbb C}(k,N)$ is compact.

## Facts & Assumptions

**Given:** An integer $N\ge2$ and the finite-dimensional Hermitian vector space $\mathbb C^N$.

[F1] A subset of $\mathbb R^m$, $m\ge1$, is compact in its Euclidean topology exactly when it is closed and bounded. The proof uses no choice principle ([[cor-heine-borel-in-the-product-topology]], claim 2).

## Proof

**Proof technique:** direct.

1.1 If $P^*=P$ and $P^2=P$, then $\mathbb C^N=\operatorname{ran}P\oplus\ker P$: every $x$ equals $Px+(x-Px)$, and the intersection is zero. The two summands are orthogonal because $\langle Pu,y\rangle=\langle u,P^*y\rangle=0$ for $y\in\ker P$. An orthonormal basis adapted to this decomposition makes $P$ diagonal with one $1$ for each basis vector in $\operatorname{ran}P$ and zero otherwise. Trace is invariant under change of basis, so $\operatorname{tr}P=\dim_{\mathbb C}\operatorname{ran}P$, while $\|P\|_F^2=\operatorname{tr}(P^*P)=\operatorname{tr}(P^2)=k$. Thus the stated equations are exactly the orthogonal projections onto $k$-planes, and every such plane has one unique projection. [given, algebra, construct]

2.1 For fixed $k$, the equations $P^*=P$, $P^2=P$, and $\operatorname{tr}P=k$ are closed conditions on the real and imaginary matrix entries, and step 1.1 bounds the Frobenius norm by $\sqrt{k}$. Since $2N^2\ge1$, [F1] makes $\operatorname{Gr}_{\mathbb C}(k,N)$ compact. There are finitely many indices $k$; restricting any open cover of their union to each compact member gives a finite subcover for that member, and the union of these finitely many finite subfamilies is finite. Hence $\mathscr G_N$ is compact. [F1, step 1.1, given, algebra] ∎

---
id: cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion
kind: counterexample
title: "Ordinary acyclicity over Z does not detect group-ring torsion"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: [def-based-handle-chain-complex-over-the-fundamental-group-ring, def-finite-based-free-chain-complex-and-its-contraction-torsion, lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group, def-augmentation-map-and-augmentation-ideal-of-a-group-ring, thm-group-ring-is-a-unital-algebra-with-basis-g, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 2 §2.2, equation (2.7), printed p. 28; §2.1, printed pp. 24–26"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Example 8.8(ii)–(iii), printed p. 173 (PDF 181), and Definition 8.10, printed p. 174 (PDF 182)"
---
## Statement refuted

**False claim:** a bounded based free complex over a group ring whose underlying
complex of abelian groups is acyclic must have vanishing torsion class in the
Whitehead group of the group.

## Facts & Assumptions

**Given:** The cyclic group $\pi=C_5=\langle t\mid t^5=1\rangle$, its group ring $R=\mathbb Z[\pi]$, and the element $u=1-t^2-t^3\in R$.

[F1] The element $u=1-t^2-t^3$ is a unit of $R=\mathbb Z[C_5]$ and its class $[u]$ is a nonzero element of $\mathrm{Wh}(C_5)$ ([[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]], [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F2] Contraction torsion of a two-term based free complex: for a unit $u$ in a unital ring $R$ and the complex $0\to C_q=R\xrightarrow{u}C_{q-1}=R\to0$ with the displayed single basis vector in each of the two degrees, the contraction is $s_{q-1}=u^{-1}$ and $s_q=0$, and the contraction torsion is $\tau(C)=(-1)^{q+1}[u]\in\tilde K_1(R)$ ([[def-finite-based-free-chain-complex-and-its-contraction-torsion]]).

[F3] The augmentation $\varepsilon:R[G]\to R$ is the ring homomorphism sending each basis element $[g]$ to $1$, and the group ring is the free module on the classes $[g]$ with the uniquely determined product ([[def-augmentation-map-and-augmentation-ideal-of-a-group-ring]], [[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

[F4] The handle chain complex is carried over the group ring with its chosen lifts and basis data, so that its torsion lives in $\mathrm{Wh}(\pi_1)$ and not merely in a theory of abelian chain complexes ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]]).

## Counterexample

1.1 Let $C$ be the based free right $R$-complex $0\to C_1=R\xrightarrow{d_1}C_0=R\to0$ with differential $d_1(x)=xu$, generated in degree one and zero by one basis vector each. By [F1] $u$ is a unit, and the map $h_0(y)=yu^{-1}$, $h_1=0$ satisfies $d_1h_0=\mathrm{id}_{C_0}$ and $h_0d_1=\mathrm{id}_{C_1}$, so $C$ is contractible with this contraction; by [F2] with $q=1$ its contraction torsion is $\tau(C)=(-1)^{2}[u]=[u]$, which is nonzero in $\mathrm{Wh}(C_5)$ by [F1]. [F1, F2, given]

2.1 Forgetting the $R$-module structure, the contraction $h$ of step 1.1 is a homomorphism of abelian groups, so it contracts the underlying complex of abelian groups of $C$; hence that underlying complex is contractible, and in particular acyclic, with differential the isomorphism $x\mapsto xu$ and inverse $y\mapsto yu^{-1}$. Separately, by [F3] the augmentation $\varepsilon:\mathbb Z[C_5]\to\mathbb Z$ is a ring homomorphism with $\varepsilon(1)=1$ and $\varepsilon(t^k)=1$ for every $k$, so $\varepsilon(u)=1-1-1=-1$, which is a unit of $\mathbb Z$; the base change along $\varepsilon$ gives the complex $0\to\mathbb Z\xrightarrow{-1}\mathbb Z\to0$, contracted by $n\mapsto-n$, whose homology also vanishes. [F3, step 1.1]

3.1 The complex $C$ is bounded and based free over $R=\mathbb Z[C_5]$, its contraction torsion class $[u]$ is nonzero in $\mathrm{Wh}(C_5)$ by step 1.1, and its underlying complex of abelian groups is contractible, in particular acyclic, by step 2.1; therefore the false claim fails. This is exactly why the handle chain complex of a cobordism is carried over $\mathbb Z[\pi_1]$ with its chosen lifts and basis and not over $\mathbb Z$, as recorded in [F4]: an abelian acyclicity check cannot see the class $[u]$. [F4, step 1.1, step 2.1] ∎

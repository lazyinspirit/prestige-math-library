---
id: lem-knot-tubular-exterior-and-boundary
kind: lemma
title: "Tubular exterior and boundary torus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - lem-knot-normal-circle-bundle-trivialization
  - def-tubular-neighbourhood-of-an-embedded-submanifold
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Section 4.1, compact exterior and boundary torus"
---

## Statement

Assume countable choice. For every smooth oriented knot $K$ in $S^3$, there are an oriented normal-bundle trivialization, a tubular map $\Phi$ defined on an open neighbourhood containing $S^1\times D^2_{2\epsilon}$ for some $\epsilon>0$, and a closed tubular neighbourhood $N(K)=\Phi(S^1\times D^2_\epsilon)$. This $N(K)$ is diffeomorphic to $S^1\times D^2$, its boundary $T_K$ is diffeomorphic to $S^1\times S^1$, and its exterior $E_K=S^3\setminus\operatorname{int}N(K)$ is a compact smooth oriented three-manifold with boundary $T_K$. The open complement $S^3\setminus K$ strongly deformation retracts onto $E_K$.

## Statement references

[Cattabriga and Francaviglia, §4.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

## Facts & Assumptions

**Given:** Countable choice and a smooth oriented embedding $K:S^1\to S^3$.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].

[F1] [[def-oriented-link-in-s-three-and-ambient-isotopy]] defines a smooth oriented knot as a smooth embedding of an oriented circle in the standard oriented $S^3$; its image is a smoothly embedded circle.

[F2] [[def-knot-exterior]] defines $E_K$ using a closed disk subbundle determined by a chosen smooth fibre norm, and orients it from $S^3$.

[F3] [[lem-knot-normal-circle-bundle-trivialization]] gives a smooth oriented trivialization of the rank-two normal bundle of $K$.

[F4] [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]] states that under $\mathrm{AC}_\omega$ a closed smooth embedded submanifold has an open normal-bundle neighbourhood diffeomorphic to an open neighbourhood in the ambient manifold, by a map fixing the zero section. A tubular neighbourhood has this meaning by [[def-tubular-neighbourhood-of-an-embedded-submanifold]].

## Proof

**Proof technique:** direct.

1.1 By [F1], $K$ is continuous and $K(S^1)$ is compact because $S^1$ is compact. Since $S^3$ is Hausdorff, $K(S^1)$ is closed; [F1] also identifies it as a smooth embedded submanifold. Thus the closed smooth embedded hypothesis of [F4] holds, and [A1] permits its application. Take a tubular map $\Phi:\Omega\to U\subset S^3$ defined on an open neighbourhood of the zero section of $\nu(K)$. [A1, F1, F4, given, construct]

2.1 Use the trivialization [F3] and its product Euclidean norm as the chosen smooth fibre norm in [F2], so $\Omega$ is open in $S^1\times\mathbb R^2$. For each $s\in S^1$, openness gives an arc $I_s$ about $s$ and a radius $r_s>0$ with $I_s\times D^2_{r_s}\subset\Omega$. Compactness of $S^1$ gives a finite subcover by such arcs; taking $\epsilon$ smaller than half the least of their radii yields $S^1\times D^2_{2\epsilon}\subset\Omega$. The closed disk subbundle $S^1\times D^2_\epsilon$ therefore lies in $\Omega$. [A1, F2, F3, step 1.1, choose, construct]

3.1 Put $N(K)=\Phi(S^1\times D^2_\epsilon)$. The restricted map is a smooth embedding, so $N(K)$ is a compact embedded solid torus with boundary $T_K=\Phi(S^1\times\partial D^2_\epsilon)\cong S^1\times S^1$. Since $S^3$ is compact and $E_K=S^3\setminus\operatorname{int}N(K)$ is closed, $E_K$ is compact. The annulus $S^1\times\{z:\epsilon/2<|z|<2\epsilon\}$ maps to a collar of $T_K$; in these coordinates $E_K$ is the side $|z|\ge\epsilon$. Thus $E_K$ is a smooth three-manifold with boundary exactly $T_K$, oriented by restriction of the orientation of $S^3$ as in [F2]. [F2, F3, step 2.1, construct, algebra]

4.1 On $S^3\setminus K$, define $H_t$ to be the identity outside $N(K)$ and, in the punctured disk fibres with $0<|z|\le\epsilon$, set $H_t(\Phi(s,z))=\Phi(s,((1-t)|z|+t\epsilon)z/|z|)$ for $0\le t\le1$. The formula is continuous for $z\ne0$ and is the identity at $|z|=\epsilon$, so it glues continuously to the identity outside $N(K)$. It fixes every point of $E_K$, stays in $S^3\setminus K$, and at $t=1$ sends every point of the punctured tube to $T_K\subset E_K$. Hence $H_t$ is a strong deformation retraction of $S^3\setminus K$ onto $E_K$. [F2, step 1.1, step 3.1, construct, algebra] ∎


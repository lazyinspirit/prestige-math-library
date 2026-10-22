---
id: def-csm-frontier-fk-infinite-volume-states
kind: definition
title: "Free, wired, and subsequential infinite-volume FK states on the square lattice"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps: [def-csm-frontier-fk-real-boundaries]
dependency_roles:
  def-csm-frontier-fk-real-boundaries: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Section 1, infinite-volume FK measures and free/wired boundary conventions."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapter 4, free and wired random-cluster measures as limits of finite-volume laws."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $E_\infty$ be the nearest-neighbor edge set of $\mathbb Z^2$, and let $\Lambda_n=[-n,n]^2\cap\mathbb Z^2$. Let $E_n$ contain the edges with both endpoints in $\Lambda_n$, and let $\partial\Lambda_n$ be the vertices of $\Lambda_n$ adjacent to a vertex outside it. Fix $q\geq1$ and $p\in(0,1)$. For each boundary partition $\xi_n$ on $\partial\Lambda_n$, let $\phi_{n,p,q}^{\xi_n}$ be the finite FK law on $(\Lambda_n,E_n)$ with mass proportional to $p^{|A|}(1-p)^{|E_n\setminus A|}q^{k_{\xi_n}(A)}$ for $A\subseteq E_n$, where $k_{\xi_n}(A)$ counts components after wiring the partition classes and extend its configurations to $\{0,1\}^{E_\infty}$ by setting all edges outside $E_n$ closed.

An **infinite-volume FK state** at $(p,q)$ is any probability measure on $\{0,1\}^{E_\infty}$ that is a cylinder-probability limit of such extended finite-volume laws along a sequence $n_j\to\infty$ and boundary partitions $\xi_{n_j}$. Cylinder-probability convergence means convergence of the probability of every assignment on every finite set of edges. When they exist, the **free FK state** and **wired FK state** are the cylinder limits for the identity and one-class partitions, respectively, at every $n$. Their existence and uniqueness as probability-measure cylinder limits are established by a later A-page lemma under its stated measure-extension hypothesis. For either state $\phi^b_{p,q}$, $b\in\{0,1\}$, define $\theta^b(p,q):=\phi^b_{p,q}(0\leftrightarrow\infty)$, where $0\leftrightarrow\infty$ means that the open cluster of the origin is not contained in any finite box, and define

$$p_c^b(q):=\inf\{p\in(0,1):\theta^b(p,q)>0\}.$$

No equality of free and wired states at $p=p_c$ is part of this definition.

## Definition references

[[def-csm-frontier-fk-real-boundaries]]

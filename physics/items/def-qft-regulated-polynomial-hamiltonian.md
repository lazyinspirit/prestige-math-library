---
id: def-qft-regulated-polynomial-hamiltonian
kind: definition
domain: mathematics
title: Finite-lattice polynomial Hamiltonian data
status: published
origin: pipeline
dependency_level: 0
deps: [lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-countable-choice]
dependency_roles:
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §§2.3 and 8.3, pp.76–83 and 212–214"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 8, pp.48–50"
      url: "https://arxiv.org/pdf/1203.2344v1"
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

## Definition

Assume Countable Choice ([[def-countable-choice]]). A **finite-mode regulator** in this item is a fixed
finite nonempty label set $J$ with $N:=|J|\ge1$, a fixed enumeration of $J$ by
$\{1,\ldots,N\}$, and the real coordinate vector
$q=(q_1,\ldots,q_N)\in\mathbb R^N$. The labels may name sites of a finite
lattice or finitely many modes; their geometry enters only through the chosen
polynomial below. No limit in $N$ is part of this definition.

Choose real coefficients $a_1,\ldots,a_N>0$, constants $c>0$ and $C_0\ge0$,
and a real polynomial $V\in\mathbb R[q_1,\ldots,q_N]$ such that
$$V(q)\ge c|q|^2-C_0\qquad(q\in\mathbb R^N).$$
Let $H_N:=L^2(\mathbb R^N,dq;\mathbb C)$, with vectors identified up to almost
everywhere equality and inner product
$$\langle u,v\rangle:=\int_{\mathbb R^N}u(q)\overline{v(q)}\,dq,$$
linear in the first variable. Under Countable Choice this is a complex Hilbert
space by [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]. Let
$D_0:=C_c^\infty(\mathbb R^N;\mathbb C)$, the smooth compactly supported
complex-valued functions. The associated **polynomial differential expression**
is the map
$$h_0:D_0\to H_N,\qquad h_0u:=-\sum_{j=1}^Na_j\partial_j^2u+Vu.$$
It is well defined because each derivative of $u$ and the product $Vu$ are
smooth and compactly supported. Set $W:=V+C_0+1$, so
$W(q)\ge1+c|q|^2$. This definition specifies finite mathematical data and a
differential expression; it does not choose a self-adjoint operator domain or
assert a continuum or infinite-volume limit.

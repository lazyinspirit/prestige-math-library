---
id: def-stable-homotopy-groups-of-a-sequential-prespectrum
kind: definition
title: Stable homotopy groups of a sequential prespectrum
status: draft
origin: pipeline
deps: ["def-sequential-prespectrum-spectrum-and-adjoint-structure-maps", "def-higher-homotopy-group-by-based-cubes", "prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant", "thm-set-has-all-small-colimits"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 176--177
    - title: Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 2
      url: https://web.archive.org/web/20100414235039if_/http://www.math.cornell.edu:80/~hatcher/SSAT/SSch2.pdf
      locator: Section 2.1, PDF pages 6--7
---

## Definition

Fix $k\in\mathbb Z$ and choose $n_0\geq0$ such that $n+k\geq1$ whenever
$n\geq n_0$. For a sequential prespectrum $E$, the bonding homomorphism is

$$ \begin{aligned} b_n:\pi_{n+k}(E_n)&\longrightarrow\pi_{n+k+1}(E_{n+1}),\\ [f]&\longmapsto \bigl[\sigma_n\circ(1_{S^1}\wedge f)\circ\chi\bigr], \end{aligned} $$

where $\chi:S^{n+k+1}\cong S^1\wedge S^{n+k}$ is the canonical
sphere-coordinate homeomorphism. Equivalently, $b_n$ is suspension followed
by $(\sigma_n)_*$.

The **$k$th stable homotopy group** of $E$ is

$$ \pi_k(E)=\operatorname*{colim}_{n\geq n_0} \bigl(\pi_{n+k}(E_n),b_n\bigr). $$

Concretely this is the disjoint union of the stage groups modulo
$(n,x)\sim(n+1,b_nx)$. Two representatives are added after advancing both
to a common stage. This is well defined because the $b_n$ are
homomorphisms. After increasing $n_0$ if necessary, all degrees $n+k$ are at
least two, so all stage groups and the resulting colimit are abelian. The
next lemma proves that the displayed group does not depend on the chosen
finite initial cutoff.


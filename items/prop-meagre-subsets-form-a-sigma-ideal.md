---
id: prop-meagre-subsets-form-a-sigma-ideal
kind: proposition
title: "The meagre subsets of a topological space form a sigma-ideal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nowhere-dense-meagre-and-residual-subsets, thm-n-cross-n-countable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

For every topological space $X$, the meagre subsets of $X$ contain $\varnothing$, are closed under taking subsets, and are closed under countable unions.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $X$ be a topological space and let $A\subseteq X$. The set $A$ is **nowhere dense** when $\operatorname{int}(\overline A)=\varnothing$ (def-interior-closure-boundary-top). It is **meagre** when there is a sequence $(N_n)_{n\in\mathbb N}$ of nowhere dense subsets of $X$ with $A\subseteq\bigcup_nN_n$. It is **residual**, or **comeagre**, when $X\setminus A$ is meagre. The empty union shows that $\varnothing$ is meagre, including when $X=\varnothing$. ([[def-nowhere-dense-meagre-and-residual-subsets]]).

[F2] $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$ (def-equinumerous): the plane of pairs of naturals is countably infinite (def-countable). The bijection is exhibited, not merely asserted to exist. Define $2^m$ by recursion on $m$ (thm-recursion) by $2^0 = 1$ and $2^{\sigma(m)} = 2^m + 2^m$, and set $$J(m,n) = 2^m \cdot \sigma(n + n), \qquad \text{that is} \qquad J(m,n) = 2^m(2n+1).$$ Then $J$ is a bijection from $\mathbb{N} \times \mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$, and $\sigma$ is a bijection from $\mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$, so $\sigma^{-1} \circ J$ is a bijection $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$. What makes $J$ bijective is the decomposition of a nonzero natural into a power of two times an odd number, existence and uniqueness both. ([[thm-n-cross-n-countable]]).

## Proof

**Proof technique:** direct.

1.1 Subsets of nowhere dense sets are nowhere dense, and a subset of a countable union of nowhere dense sets is covered by the same family. [given, F1, F2]

2.1 Flatten a countable family of countable covers using the published countability of the natural-number square; include the empty union and empty subset explicitly. [step 1.1, F2, F1]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎

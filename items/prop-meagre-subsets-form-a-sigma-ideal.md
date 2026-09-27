---
id: prop-meagre-subsets-form-a-sigma-ideal
kind: proposition
title: "The meagre subsets of a topological space form a sigma-ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nowhere-dense-meagre-and-residual-subsets, thm-n-cross-n-countable, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (prop-meagre-subsets-form-a-sigma-ideal). No independent judge or whole-closure certification.
    delegated_by: owner
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

For every topological space $X$, the meagre subsets of $X$ contain $\varnothing$ and are closed under taking subsets; assuming the Axiom of Countable Choice, they are also closed under countable unions. Countable Choice is what selects one witnessing sequence of nowhere dense sets for each member of the countable family, before the flattening bijection is applied.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $X$ be a topological space and let $A\subseteq X$. The set $A$ is **nowhere dense** when $\operatorname{int}(\overline A)=\varnothing$ (def-interior-closure-boundary-top). It is **meagre** when there is a sequence $(N_n)_{n\in\mathbb N}$ of nowhere dense subsets of $X$ with $A\subseteq\bigcup_nN_n$. It is **residual**, or **comeagre**, when $X\setminus A$ is meagre. The empty union shows that $\varnothing$ is meagre, including when $X=\varnothing$. ([[def-nowhere-dense-meagre-and-residual-subsets]]).

[F2] $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$ (def-equinumerous): the plane of pairs of naturals is countably infinite (def-countable). The bijection is exhibited, not merely asserted to exist. Define $2^m$ by recursion on $m$ (thm-recursion) by $2^0 = 1$ and $2^{\sigma(m)} = 2^m + 2^m$, and set $$J(m,n) = 2^m \cdot \sigma(n + n), \qquad \text{that is} \qquad J(m,n) = 2^m(2n+1).$$ Then $J$ is a bijection from $\mathbb{N} \times \mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$, and $\sigma$ is a bijection from $\mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$, so $\sigma^{-1} \circ J$ is a bijection $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$. What makes $J$ bijective is the decomposition of a nonzero natural into a power of two times an odd number, existence and uniqueness both. ([[thm-n-cross-n-countable]]).

[A1] [[def-countable-choice]] selects one member from each nonempty set in a sequence of sets. It is used below for the sets of nowhere dense covering sequences.

## Proof

**Proof technique:** direct.

1.1 The empty set is meagre, witnessed by the constant sequence of empty nowhere dense sets. If $B\subseteq A$ and $(N_n)$ witnesses that $A$ is meagre, the same sequence witnesses that $B$ is meagre. [given, F1]

1.2 Let $(A_m)_{m\in\mathbb N}$ be meagre. For each $m$, let $W_m$ be the nonempty set of sequences $(N_{m,n})_{n\in\mathbb N}$ of nowhere dense subsets of $X$ satisfying $A_m\subseteq\bigcup_nN_{m,n}$. Apply [A1] once to $(W_m)$ to choose all these sequences simultaneously. This is the only use of Countable Choice. [given, F1, A1]

2.1 Let $b:\mathbb N\to\mathbb N\times\mathbb N$ be the bijection in [F2], and put $M_k=N_{b(k)}$. Every $M_k$ is nowhere dense, and $\bigcup_m A_m\subseteq\bigcup_k M_k$. Thus the countable union is meagre; the empty indexed family has union $\varnothing$ as in step 1.1. [F1, F2, step 1.2]

3.1 Steps 1.1 and 2.1 prove the stated sigma-ideal properties under the stated choice hypothesis. [step 1.1, step 2.1] ∎

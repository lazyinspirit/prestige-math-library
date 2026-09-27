---
id: prop-open-and-residual-subspaces-of-baire-spaces
kind: proposition
title: "Open subspaces and residual subspaces of Baire spaces are Baire"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-baire-space-equivalent-characterisations, def-nowhere-dense-meagre-and-residual-subsets, def-subspace-topology-top]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (prop-open-and-residual-subspaces-of-baire-spaces). No independent judge or whole-closure certification.
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

Every open subspace of a Baire space is Baire. Every residual subspace of a Baire space, with its subspace topology, is Baire.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a topological space $X$, the following are equivalent: every countable intersection of dense open sets is dense; every countable union of closed sets with empty interior has empty interior; no nonempty open subset is meagre in $X$; and every residual subset meets every nonempty open set. The equivalence includes the empty space. ([[thm-baire-space-equivalent-characterisations]]).

[F2] A set is residual when its complement is contained in the union of one sequence of nowhere dense sets ([[def-nowhere-dense-meagre-and-residual-subsets]]).

[F3] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is $$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$ the family of **traces** on $S$ of the open sets of $X$. The pair $(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in $\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the ambient space needs emphasis. ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 Let $O$ be open in a Baire space $X$, and let $(G_n)$ be dense open subsets of $O$. Put $F_n=O\setminus G_n$ and $C_n=\overline{F_n}^{X}$. Each $C_n$ is nowhere dense in $X$: if a nonempty $X$-open $V$ lay in $C_n$, then $V$ would meet $O$ (since $C_n\subseteq\overline O$), while the nonempty relatively open $V\cap O$ would lie in $C_n\cap O=F_n$, contradicting density of $G_n$ in $O$. [F1, F3, given]

1.2 Let $Y$ be residual in $X$. By [F2], fix one sequence $(N_n)$ of nowhere dense subsets with $X\setminus Y\subseteq\bigcup_nN_n$. Since no nonempty open subset of a Baire space is meagre [F1], $Y$ is dense in $X$. [F1, F2, given]

2.1 The sets $X\setminus C_n$ are dense open in $X$. By the Baire property, their intersection meets every nonempty open subset $V$ of $O$; a point in that intersection and $V$ lies in every $G_n$. Thus $O$ is Baire, including the empty case. [F1, step 1.1]

2.2 Let $(G_n)$ be dense open subsets of $Y$. Put $F_n=Y\setminus G_n$ and $C_n=\overline{F_n}^{X}$. Because $Y$ is dense, each $C_n$ is nowhere dense in $X$: otherwise a nonempty $X$-open $V\subseteq C_n$ would meet $Y$, and the nonempty relatively open $V\cap Y$ would lie in $C_n\cap Y=F_n$, contradicting density of $G_n$ in $Y$. [F3, step 1.2]

3.1 The single interleaved sequence $N_0,C_0,N_1,C_1,\ldots$ witnesses that $(X\setminus Y)\cup\bigcup_n C_n$ is meagre; forming it requires no countable selection of witnesses. Given a nonempty relatively open $W=V\cap Y$ in $Y$, $V$ is nonempty open in $X$. By [F1], $V$ is not contained in that meagre set. Any point of $V$ outside it belongs to $Y$ and every $G_n$, hence to $W\cap\bigcap_nG_n$. Therefore $Y$ is Baire. [F1, F2, F3, step 1.2, step 2.2]

4.1 Steps 2.1 and 3.1 establish both assertions. [step 2.1, step 3.1] ∎

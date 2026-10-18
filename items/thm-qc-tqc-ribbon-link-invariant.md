---
id: thm-qc-tqc-ribbon-link-invariant
kind: theorem
title: Ribbon evaluation and framed anyon links
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-qc-tqc-ribbon-modular-data, def-ribbon-evaluation-of-an-x-colored-closed-braid, thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10, Remark 8.10.3, printed pp. 217–218: a ribbon category evaluates framed colored links."
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $\mathcal C$ be a unitary ribbon fusion
category, let $X$ be a simple color, and let $\beta\in B_n$ and
$\beta'\in B_m$ with $n,m\ge1$. If their blackboard-framed, $X$-colored
closures are isotopic as framed oriented links, then their root ribbon
evaluations satisfy $t_n(\beta)=t_m(\beta')$. No modularity assumption is
needed. Ordinary Markov stabilization is not a framed isotopy because it
changes the framing.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a unitary ribbon fusion category $\mathcal C$,
a simple object $X$, and framed-isotopic blackboard closures of $\beta$ and
$\beta'$.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every
countable family of nonempty sets has a choice function.

[F1] [[def-qc-tqc-ribbon-modular-data]]: the underlying category has a ribbon
structure, so it is a ribbon category in the root sense.

[F2] [[thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links]]: under
$\mathrm{AC}_\omega$, in any ribbon category, framed-isotopic blackboard
closures of braids with the same color have equal root ribbon evaluations.

[F3] [[def-ribbon-evaluation-of-an-x-colored-closed-braid]]: for $n\ge1$,
$t_n(\beta)$ is the left categorical trace of the pivotal comparison composed
with the braid action; this is the root ribbon-evaluation notation.

## Proof
1.1 By [F1], $\mathcal C$ is a ribbon category with the same root duality, braiding, and twist structure required by [F2]. The color $X$ and the braids $\beta,\beta'$ meet [F2]'s common-color and positive-strand hypotheses. [F1, F2, given]

2.1 The assumed $\mathrm{AC}_\omega$ supplies [F2]'s choice hypothesis by [A1]. Since the blackboard-framed closures are framed-isotopic, [F2] gives $t_n(\beta)=t_m(\beta')$; by [F3] these are exactly the root ribbon evaluations named in the Statement. The same root theorem states that ordinary Markov stabilization changes framing, and it uses no modularity hypothesis. [A1, F2, F3, given, step 1.1] ∎

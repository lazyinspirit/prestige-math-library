---
id: lem-smooth-and-topological-slice-genus-minima-exist
kind: lemma
title: "Nonemptiness and minima for the smooth and locally flat slice genera"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-oriented-seifert-surface-and-knot-genus
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - def-countable-choice
  - thm-collar-neighborhood-theorem
  - def-euclidean-spheres-and-closed-balls
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§9.5, the four-ball genus, printed p.341"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§1.2.3, Definition 1.17 and Remark 1.69, printed pp.31–33"
---

## Statement

Assume the Axiom of Countable Choice. For every smooth oriented knot $K$ in the standard oriented three-sphere, let $\mathcal S_{\mathrm{sm}}(K)$ be the set of genera $g(F)\in\mathbb N_0$ of connected compact orientable smooth properly embedded surfaces $F\subset B^4$ with oriented boundary $K$, and let $\mathcal S_{\mathrm{top}}(K)$ be the corresponding set for locally flat topologically properly embedded surfaces. For each surface, $g(F)$ is the nonnegative integer determined by $\chi(F)=1-2g(F)$. Both sets are nonempty and have least elements.

## Statement references

[[def-locally-flat-proper-surface-and-concordance-collars|Properness, local flatness, and boundary charts]]

[[def-oriented-seifert-surface-and-knot-genus|The genus convention for connected orientable spanning surfaces]]

[[thm-every-oriented-knot-bounds-a-seifert-surface|Existence of a smooth oriented Seifert surface under countable choice]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth oriented knot $K\subset S^3$.

[F1] Under $\mathrm{AC}_\omega$, $K$ bounds a connected compact smooth oriented embedded surface $\Sigma\subset S^3$ with oriented boundary $K$. ([[thm-every-oriented-knot-bounds-a-seifert-surface]])

[F2] For a connected compact orientable surface with one boundary component, $g(\Sigma)\in\mathbb N_0$ is determined by $\chi(\Sigma)=1-2g(\Sigma)$. ([[def-oriented-seifert-surface-and-knot-genus]])

[F3] A smooth boundary has a smooth collar; in the standard unit ball the boundary collar is $(x,u)\mapsto(1-u)x$ for $x\in S^3$ and sufficiently small $u\ge0$. ([[thm-collar-neighborhood-theorem]], [[def-euclidean-spheres-and-closed-balls]])

[F4] A proper surface is locally flat when it has the stated plane-pair charts at interior and boundary points; a smooth proper surface has such topological charts. ([[def-locally-flat-proper-surface-and-concordance-collars]])

[A1] The Axiom of Countable Choice is the sequence-choice principle stated in the supplier. ([[def-countable-choice]])

## Proof

**Given:** $\mathrm{AC}_\omega$ and $K$.

1.1 By [F1], choose a connected compact smooth oriented Seifert surface $\Sigma\subset S^3$ with $\partial\Sigma=K$. By [F3], choose $0<\varepsilon<1$ and identify a collar of $S^3=\partial B^4$ with $S^3\times[0,\varepsilon)$, where $(x,u)$ maps to $(1-u)x$. Apply the collar theorem in [F3] also to $\Sigma$ and write $r\ge0$ for its inward boundary-collar coordinate. Choose a smooth cutoff $\chi(r)$ equal to $1$ near $r=0$ and $0$ before the collar ends, and a constant $c\in(0,\varepsilon)$; set $h=\chi(r)r+(1-\chi(r))c$ in the collar and $h=c$ beyond it. Since $0\le r,c<\varepsilon<1$, $h$ takes values in $[0,1)$; it is smooth, vanishes exactly on $\partial\Sigma$, and is positive on the interior. [F1, F3, A1, construct]

2.1 The graph $F=\{((1-h(x))x):x\in\Sigma\}\subset B^4$ is embedded because the radial collar projection to $S^3$ recovers $x$. It is compact and connected, its boundary is exactly $K$, and all its nonboundary points lie in the interior of $B^4$. Its smooth charts give the local-flat pair charts in [F4]. The graph is homeomorphic to $\Sigma$, so it has genus $g(\Sigma)$ from [F2]. Thus this one surface contributes an element to each of $\mathcal S_{\mathrm{sm}}(K)$ and $\mathcal S_{\mathrm{top}}(K)$. [F2, F3, F4, step 1.1, construct]

3.1 Each set is therefore a nonempty subset $A\subseteq\mathbb N_0$. Choose one $n\in A$. The finite set $A\cap\{0,1,\ldots,n\}$ is nonempty, so it has a least element $m$ by the ordinary finite ordering. If $a\in A$ and $a<m$, then $a\le n$ and hence $a\in A\cap\{0,1,\ldots,n\}$, contradicting the choice of $m$. Thus $m$ is least in $A$. Applying this argument to each of the two sets gives both minima; no well-ordering principle or additional choice axiom is used. [step 2.1, algebra] ∎

## Sources

[[thm-every-oriented-knot-bounds-a-seifert-surface]]

[[thm-collar-neighborhood-theorem]]

[[def-locally-flat-proper-surface-and-concordance-collars]]

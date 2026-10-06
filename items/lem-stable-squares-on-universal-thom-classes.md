---
id: lem-stable-squares-on-universal-thom-classes
kind: lemma
title: "Stable Steenrod squares on universal Thom cohomology"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
  - thm-steenrod-squares-are-well-defined-and-natural
  - prop-steenrod-square-normalization-instability-and-top-square
  - thm-adem-relations-for-steenrod-squares
  - thm-thom-identity-for-stiefel-whitney-classes
  - def-mod-two-square-algebra-admissible-sequences-and-excess
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 12, stable square action preceding Lemma 12.2, printed p.23."
    - title: "John Milnor and James Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 8, Thom identity for Stiefel–Whitney classes, printed pp.97–114; the actual action uses the published local square and Thom-identity proofs."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. For $i\ge0$ and $x=(x_r)\in\widehat H^q(TO;\mathbb F_2)$, define $Sq^i x$ by the components $(Sq^i x)_r=Sq^i(x_r)$ in $\widetilde H^{r+q+i}(T_r;\mathbb F_2)$. At a negative finite-level source degree use the unique map from the zero cohomology group. These components form a compatible tuple, giving a linear map $Sq^i:\widehat H^q\to\widehat H^{q+i}$. They satisfy $Sq^0=\mathrm{id}$ and the published Adem relations, so their finite linear combinations and composites give an action of the mod-two square algebra on the graded invariant. For the stable normalized Thom vector $U$, $Sq^iU=w_iU$ with $w_0=1$; its rank-$r$ component is zero for $i>r$. The degree-zero stable vector $U$ is not subject to the instability bound for a degree-zero class of a space: its rank-$r$ representative has degree $r$. No freeness or homotopy-detection conclusion is asserted here.

## Facts & Assumptions

**Given:** AC; the degreewise inverse-limit module $\widehat H^*(TO;\mathbb F_2)=\mathbb F_2[w_1,w_2,\ldots]\cdot U$ of [[def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum]] with its component classes $u_n$; a stable class $x=(x_n)$; and the componentwise square operations $Sq^i(x)_n=Sq^i(x_n)$.

[F1] The degreewise constancy lemma identifies the inverse limit with the polynomial Thom module and its componentwise identification, and the structure-map naturality used below is the one recorded there ([[lem-stable-thom-cohomology-is-degreewise-eventually-constant]]).

[F2] Squares are natural additive operations on cohomology, commute with the cohomology suspension, and satisfy the Thom identity $Sq^iu_n=w_i(\gamma_n)u_n$ ([[thm-steenrod-squares-are-well-defined-and-natural]], [[prop-steenrod-square-normalization-instability-and-top-square]], [[thm-thom-identity-for-stiefel-whitney-classes]]); the Adem relations and admissible calculus act on the limit module ([[thm-adem-relations-for-steenrod-squares]], [[def-mod-two-square-algebra-admissible-sequences-and-excess]]).

## Proof

**Proof technique:** direct.

1.1 Naturality commutes squares with αₙ*, and the published square-suspension theorem commutes them with σ and its inverse. Thus ρₙ(q+i)Sqⁱ=Sqⁱρₙ(q), proving compatibility. The Thom identity at rank n gives Sqⁱuₙ=wᵢ(γₙ)uₙ, with both sides zero for i>n. These are precisely the components of wᵢU under the preceding polynomial description. [given, F1, F2]

2.1 For n=0, Sq⁰u₀=u₀ and higher squares vanish. No unstable top-square or degree-zero instability is asserted for the stable class U: its component uₙ has degree n, and those unstable bounds depend on n. Iterated words of squares and their already-proved Adem relations therefore act on this limit module. This does not prove its freeness as a Steenrod module, compute the Steenrod algebra's basis, or prove Hurewicz injectivity. Those remain distinct supplier obligations. [step 1.1, F2] ∎

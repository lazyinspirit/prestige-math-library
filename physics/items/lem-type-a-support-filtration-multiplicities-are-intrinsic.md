---
id: lem-type-a-support-filtration-multiplicities-are-intrinsic
kind: lemma
title: "The type-A support filtration multiplicities are intrinsic"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations, lem-type-a-graph-bimodule-extension-vanishing, def-type-a-standard-graph-bimodules-support-filtrations-and-character, lem-finite-weyl-strong-exchange-and-deletion]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Soergel, Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln, Bemerkung 5.5 and 5.12, PDF pp.12, 17"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias–Williamson, Soergel Calculus, §§3.4–3.6"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
  repair: research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/soergel/receipts/lem-type-a-support-filtration-multiplicities-are-intrinsic.json
---

## Statement

Let $M$ be a graded $R$-bimodule lying in $F_\Delta\cap F_\nabla$, so that it
carries a $\Delta$-flag and a $\nabla$-flag. Then:

1. the graded multiplicities $(M:\Delta_x(d))$ and $(M:\nabla_x(d))$ of
   [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]] are
   independent of the compatible enumeration of the flag, so that the character
   sums $h_\Delta(M)$ and $h_\nabla(M)$ are functions of $M$ alone;
2. if $M=M'\oplus M''$ with $M',M''\in F_\Delta\cap F_\nabla$, then
   $(M:\Delta_x(d))=(M':\Delta_x(d))+(M'':\Delta_x(d))$ and likewise for
   $\nabla$; more generally the same holds for any direct summand $N$ of $M$
   which itself lies in $F_\Delta\cap F_\nabla$.

## Facts & Assumptions

**Given:** A graded $R$-bimodule $M\in F_\Delta\cap F_\nabla$, its length filtration $\Gamma_{\ge i}M$ and $\Gamma_{\le i}M$, and standard bimodules $R_x\{a\}$ with graph index $x\in S_n$ and generator degree $a$.

[F1] A $\Delta$-flag refines the length filtration $\Gamma_{\ge i}M$, a $\nabla$-flag refines $\Gamma_{\le i}M$, and $(M:\Delta_x(d))$ is the multiplicity of $\Delta_x(d)$ in $\Gamma_{\ge i}M/\Gamma_{\ge i+1}M$ for $i=\ell(x)$, with $\Delta_x(d)=R_x\{\ell(x)-d\}$, and $(M:\nabla_x(d))$ the multiplicity of $\nabla_x(d)=R_x\{-\ell(x)-d\}$ in $\Gamma_{\le i}M/\Gamma_{\le i-1}M$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F2] Distinct graphs related by a reflection are comparable in Bruhat order; incomparable graphs consequently have no extensions by the explicit graph-extension computation ([[lem-finite-weyl-strong-exchange-and-deletion]], [[lem-type-a-graph-bimodule-extension-vanishing]]).

## Proof

1.1 Each canonical length layer is, by definition, a finite direct sum of shifted graph modules of that length. Different graph indices separate after passing to the polynomial fraction field. Its component on a fixed graph $x$ is already intrinsic before localization: all other graph equations act injectively on a different graph component and vanish on this one, so its support submodule is exactly that component. For the resulting finite free graph module, the degrees and numbers of its homogeneous generators are recovered by quotienting by $R_+$; this graded vector space does not depend on a choice of basis. Thus the multiplicities in each canonical length layer are intrinsic. This argument applies separately to either flag category, as well as to their intersection in the Statement. [given, F1, algebra]

2.1 For clarity we also establish the Bruhat-layer description used by later items. A finite partially ordered set has any two linear extensions connected by adjacent swaps of incomparable elements: move the first desired element leftwards, observing that everything crossed is incomparable with it, then induct on the remaining set. Start from an enumeration ordered by increasing length for a $\nabla$ flag. Its refinements within equal length are split graph components by [F1]. An adjacent incomparable pair has vanishing graph extensions by [F2]; hence its two-layer extension splits, and exchanging the two components yields the same graph layers with the same degrees. Repeating the swaps proves that every Bruhat-compatible enumeration realizes the same multiplicities. For a fixed $y$, select such an enumeration which lists its strict lower set immediately before $y$, and place all incomparable indices after $y$; the quotient at $y$ is then precisely $\Gamma_{\le y}M/\Gamma_{<y}M$. The same swap argument compares this enumeration to every other one, proving the canonical lower-layer identity. Reversing the order gives $\Gamma_{\ge y}M/\Gamma_{>y}M$ for a $\Delta$ flag. [step 1.1, F1, F2, algebra]

3.1 A direct sum decomposes every support cut componentwise: an element $(m',m'')$ has support equal to the union of the two component supports. Therefore both length layers and Bruhat layers are the direct sums of the corresponding layers of the two modules. Their intrinsic graph generator multiplicities add, and hence so do the character sums. This proves (2) whenever both summands are flagged, as specified in the Statement. [F1, step 1.1, step 2.1]

4.1 In fact a summand of a flagged module remains flagged. Its projection idempotent commutes with support cuts and induces an idempotent on each length layer. By the graph-Hom calculation in the definition, there are no maps between distinct graph components, so this idempotent acts separately on each graph. Each image is a finitely generated graded projective polynomial module, and is graded free: lift a homogeneous basis modulo $R_+$ and use its lower degree bound to produce a surjection from the corresponding finite free module. Projectivity splits this surjection; its finite graded kernel has zero reduction, so lower-degree induction makes it zero. Thus the projected layers are sums of shifted graph modules, giving the required flag for the summand and its complement. Additivity from step 3.1 applies to them, and all the multiplicities and characters in the Statement are intrinsic as proved in steps 1.1–2.1. [F1, step 1.1, step 3.1, algebra] ∎

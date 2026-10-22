---
id: lem-cha-kim-higher-order-rho-bound-and-coprime-separation
kind: lemma
title: "Higher-order rho bounds and coprime separation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-blanchfield-pairing-and-higher-order-rho-invariant
  - thm-cheeger-gromov-uniform-rho-bound
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Jae Choon Cha and Taehee Kim, “Iterated satellite operators on the knot concordance group”"
      url: "https://arxiv.org/pdf/2402.04629v2"
      locator: "§§3.6 and 6, rho bounds and separate coprime-polynomial theorem"
    - title: "Jae Choon Cha and Charles Livingston, “Knot signature functions are independent”"
      url: "https://arxiv.org/pdf/math/0208225v3"
      locator: "Theorem 1, prescribed-root signature support"
    - title: "Jae Choon Cha, “Structure of the string link concordance group and Hirzebruch-type invariants”"
      url: "https://arxiv.org/pdf/0709.2968"
      locator: "Lemma 5.6 and proof, bump signature construction"
---
## Statement

Assume full AC and the winding-zero and nonzero axis Blanchfield self-pairing hypotheses of Cha–Kim. For each finite stage of their iterated-infection construction, the companion knots can be chosen so that the relevant higher-order rho contribution has a fixed sign and dominates the sum of all remaining terms, using a uniform Cheeger–Gromov bound and signature functions supported on selected unit-circle arcs between realized reciprocal-polynomial roots. Relatively prime Alexander hypotheses belong to the separate Theorem C comparison of distinct patterns; they are not hypotheses of Theorems A or B.

## Statement references

[Cha–Kim, printed3–5,9–14,19–25](https://arxiv.org/pdf/2402.04629v2)

[Cha–Livingston, Theorem1](https://arxiv.org/pdf/math/0208225v3)

## Facts & Assumptions

**Given:** Full AC, a winding-zero pattern with nonzero integral classical axis self-value, and the actual finite-stage infection geometry and coefficient maps. Signature defects use the oriented zero-surgery and first-positive-push conventions.

[A1] Full AC is the explicit convention in the integral half-solution Definition and in the analytic suppliers. [[def-axiom-of-choice]], [[def-integral-half-solutions-strebel-and-l2-signatures]]

[F1] For every fixed smooth zero surgery $M$, the actual smooth bounding-defect invariant has a finite group-independent bound; its value is independent of smooth bounds and injective target enlargements, including arbitrary target groups and nononto representations. [[thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded]]

[F2] For any finite distinct odd primes and positive heights, explicit finite disk-band knots have nonnegative signature functions whose own selected primitive pair has value $2N_i$ exceeding its height, whose other selected roots have value zero, and whose other selected-prime means vanish. Their actual canonical finite-cyclic defects are $D_i=4N_i/p_i$. [[lem-finite-prime-families-have-explicit-separating-knot-signature-bumps]], [[thm-canonical-finite-cyclic-knot-defects-equal-seifert-signature-averages]]

[F3] The complete smooth infection assembly supplies actual full-forest quotient maps, the zero signature defects of all the actual joining/infection pieces, subgroup induction on the same canonical finite-cyclic bounds and the actual multi-boundary smooth rho identity. In the three-branch construction its distinguished negative branch has trivial restriction, and one or two positive branches have exact order $p$. [[thm-finite-prime-smooth-infection-obstructions-use-actual-coefficients]]

[L1] For the locally flat TOP application, the completed finite-projective signature and whole-component gluing theorem and the actual lifted-half-pair defect vanishing are proved. What is still needed is the closed TOP four-manifold equality between ordinary and group $L^2$ signature, so that gluing an actual TOP bound to a smooth bound identifies their defects. No smooth-only bounding independence is substituted for that equality. [[thm-topological-finite-projective-l2-duality-and-boundary-gluing]], [[thm-topological-lifted-half-pairs-force-amenable-signature-defect-zero]]

## Proof

**Given:** The actual finite-stage data and AC. First take the smooth bounding-defect application.

1.1 Fix the stage $n\ge1$ and desired family size $m$. Choose $L>0$ greater than [F1]'s bound for the one fixed pattern surgery $M(P(U))$. The integral axis reduction has one finite exceptional-prime set, already checked on the actual coefficient maps in [F3]. Choose distinct odd $p_1,\ldots,p_m$ outside that set, and apply [F2] at heights $p_i mnL/2$. Its actual first-push surfaces give $2N_i>p_i mnL/2$, hence $D_i=4N_i/p_i>mnL$, with zero selected cross-prime means. This proves the normalized inequality for the actual companion term; a large point-signature value alone, without its factor of $p_i$, would not prove it. [A1, F1, F2, F3, given, construct, algebra]

2.1 For any nonzero signed coefficient vector $(a_i)$, choose $i_*$ with maximal $|a_i|$. The simultaneous finite-forest map of [F3] gives order exactly $p_{i_*}$ on every actual bottom meridian. Its restriction there is cyclic, and its extension over the canonical companion bound has that same positive meridian image. Actual same-complex subgroup induction and smooth independence in [F3] therefore make the signed bottom sum exactly $a_{i_*}D_{i_*}$; changing a cyclic generator only permutes the normalized roots. There are exactly $n\sum_i|a_i|$ remaining signed pattern terms, each of absolute value below $L$. Their sum has absolute value below $nL\sum_i|a_i|\le nmL|a_{i_*}|<|a_{i_*}|D_{i_*}$. The selected bottom sum thus has the fixed sign of $a_{i_*}$ and cannot be cancelled. This is the precise domination used in Theorem A. [F1, F2, F3, step 1.1, construct, algebra]

3.1 For Theorem B choose one allowed odd prime and height $p(3nL)/2$, so $D=4N/p>3nL$. The actual three-branch map in [F3] kills the distinguished negative $J\#J$ term. Each of its two positive bottom branches has value zero or $D$, and at least one is $D$. Their sum is $sD$, $s\in\{1,2\}$, whereas the $3n$ remaining pattern terms have total absolute value below $3nL<D$. The sum is therefore strictly positive. All asserted choices are finite and no coprime Alexander assumption has entered either construction. The separate source statement in section6 compares two different patterns under relative primeness of their closure Alexander polynomials; that hypothesis was neither used nor silently transferred here. [F1, F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 Steps 1.1–3.1 establish every finite selection, fixed-sign and domination calculation for the actual smooth coefficient extensions. The same chosen surfaces and normalized cyclic numbers are available for a TOP proof, and [L1] supplies its actual half-pair zero defect. To identify its remaining TOP boundary terms with these uniformly bounded smooth invariants one must additionally prove the closed TOP signature equality specified in [L1]. The current carrier does not prove that remaining interface; the full TOP analytic application remains held rather than being inferred from smooth independence. [F1, F2, F3, L1, step 1.1, step 2.1, step 3.1]

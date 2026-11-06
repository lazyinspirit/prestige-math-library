---
id: thm-gts-proper-delignemumford-stack-of-stable-pointed-curves
kind: theorem
title: Proper Deligne–Mumford stack of stable pointed curves
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor
dependency_roles:
  def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Finn F. Knudsen, The Projectivity of the Moduli Space of Stable Curves, II: The Stacks M_{g,n}"
      url: "https://journals.msp.org/mscand/article/download/1622/1621/1653"
      locator: "Theorem 2.7 and its proof, printed p. 179: full stable-range properness, smoothness and relative normal-crossings conclusion, including the unpointed boundary base. Definition 2.3 and Theorem 2.4, pp. 176–177, and Corollary 2.6, p. 179, give stabilization and the universal-curve identification. These are owner-approved published inputs, not locally reconstructed proofs."
    - title: "The Stacks Project, Moduli of Curves"
      url: "https://stacks.math.columbia.edu/download/moduli-curves.pdf"
      locator: "Theorem 109.25.3 (tag 0E9C), in Section 109.25 (tag 0E99): for g≥2 the unpointed stable-curve stack is Deligne–Mumford, proper and smooth over Spec Z. Its proof cites Theorem 109.24.3; no separate stable-reduction theorem or normal-crossings conclusion is imported from this input."
---

## Statement

For integers $g,n\ge0$ with $2g-2+n>0$, the moduli stack $\overline{\mathcal M}_{g,n}$ of stable $n$-pointed genus-$g$ curves, using the proper flat nodal families with disjoint smooth-locus sections and relatively ample marked dualizing sheaf specified below, is a proper Deligne–Mumford stack over $\operatorname{Spec}\mathbb Z$. Knudsen's Theorem 2.7 also proves that it is smooth over $\operatorname{Spec}\mathbb Z$ and that its nodal-curve locus is a relative normal-crossings divisor. This is an algebraic moduli statement, not analytic compactness.

## Statement references

[[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]]

## Facts & Assumptions

**Given:** $g,n\ge0$, $2g-2+n>0$, and the stable-family definition in [F1]. The owner has approved exactly the two published inputs [F2] and [A1] for this single item and run.

[F1] [[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]]: objects are proper flat finitely presented families of connected nodal genus-$g$ curves with $n$ disjoint ordered smooth-locus sections and relatively ample $\omega_{C/S}(\sum p_i)$; morphisms preserve the markings. Its normalization-component degree criterion is the stability convention used below.

[F2] **Owner-approved published input — unpointed stack theorem.** The Stacks Project, Theorem 109.25.3: for each $g\ge2$, $\overline{\mathcal M}_g$ is a Deligne–Mumford algebraic stack, proper and smooth over $\operatorname{Spec}\mathbb Z$. The source also states that the smooth-curve locus is dense open. Its printed proof invokes Theorem 109.24.3 for valuative existence; that cited proof closure is part of this imported theorem, not an additional local or separately imported stable-reduction result. This theorem does not state a normal-crossings boundary conclusion.

[A1] **Owner-approved published input — full marked theorem and universal-curve construction.** Knudsen II, Theorem 2.7 and its proof, printed p. 179: for every stable-range $(g,n)$ the stack of stable pointed curves is algebraic, proper and smooth over $\operatorname{Spec}\mathbb Z$, and its singular-curve substack is a divisor with normal crossings relative to $\operatorname{Spec}\mathbb Z$. In particular its full conclusion supplies the normal-crossings boundary for the unpointed $g\ge2,n=0$ base, as well as the other stable-range cases. The approved Definition 2.3, Theorem 2.4 and Corollary 2.6 identify $\overline{\mathcal M}_{g,n+1}$ with the universal $n$-pointed curve by inverse contraction and stabilization, allowing the extra section to meet nodes and old marks. The proof of Theorem 2.7 includes the $(0,3)$ base, its closed clutching-stratum argument for $(1,1)$, and its displayed formal node chart $xy=t_i$. These source constructions are imported with their stated hypotheses and conclusions; their full local proofs and cited prerequisites are not asserted to have been reconstructed here.

## Proof
1.1 The families in [F1] have the source's stable pointed-curve convention: on a normalized component of genus $h$ with $s$ special points the marked dualizing degree is $2h-2+s>0$. In the unpointed range $g\ge2$ this excludes precisely rational tails and bridges, agreeing with the stable-stack convention of [F2]. Thus [F2] gives the proper smooth Deligne–Mumford base for $g\ge2,n=0$. For $(g,n)=(0,3)$, a geometric stable fibre with $v$ rational components has a tree as its dual graph and $3+2(v-1)=2v+1$ special points, whereas stability requires at least $3v$; hence $v=1$. The family-level identification $\overline{\mathcal M}_{0,3}=\operatorname{Spec}\mathbb Z$ is the base identification in [A1], not an inference from geometric points alone. These are the non-genus-one bases. [given, F1, F2, A1]

2.1 For fixed $g\ge2$, use the approved contraction/stabilization identification in [A1]: $\overline{\mathcal M}_{g,n+1}\to\overline{\mathcal M}_{g,n}$ is the representable proper universal stable curve. Properness follows by composition and induction from the unpointed base in step 1.1. The same construction gives $\overline{\mathcal M}_{0,n+1}$ from $\overline{\mathcal M}_{0,n}$ for $n\ge3$, starting at its $(0,3)$ base. The construction includes the rational tail or bridge inserted when the new mark meets an old mark or a node, so no geometric case is omitted. [given, F1, F2, A1, step 1.1]

3.1 For smoothness and the boundary induction, start with the unpointed boundary normal-crossings assertion explicitly imported in [A1], and with the empty boundary of $\overline{\mathcal M}_{0,3}$. On a smooth base chart with nodal-boundary parameters $t_1,\ldots,t_k$, the universal curve is smooth near each old section, while near a node the source chart is $xy=t_i$. Eliminating the independent parameter $t_i$ gives a smooth total stack over $\operatorname{Spec}\mathbb Z$. Representability of the universal curve also preserves the Deligne–Mumford property: pull an étale scheme atlas back from its Deligne–Mumford base, obtaining an étale scheme atlas of the total stack. This does not use finite automorphism groups as a substitute for unramifiedness. [F1, A1, step 2.1]

4.1 The boundary in the new total stack is the union of the inverse image of the old boundary and the images of the old sections, exactly as in [A1]. Near an old section choose its smooth fibre coordinate $u$; the union has equation $u\,t_1\cdots t_k=0$. Near a node the old sections are absent, and $xy=t_i$ changes the pulled-back boundary equation to $xy\prod_{j\ne i}t_j=0$. These are relative normal-crossings equations. Hence both smoothness and the stated boundary property propagate in the two inductions of step 2.1. The starting unpointed boundary property here comes from the full approved Knudsen theorem. [F1, A1, step 2.1, step 3.1]

5.1 For the genus-one base use the precise argument imported in the proof of [A1]. Its fixed three-pointed genus-one curve $E$ has three rational components and no automorphism fixing its distinguished points. Clutching it to the mark of a varying $(1,1)$-curve gives a closed immersion $\overline{\mathcal M}_{1,1}\hookrightarrow\overline{\mathcal M}_{2,2}$. Its image is locally the intersection of four nodal-boundary branches, and its own nodal locus is the intersection with a fifth branch. The ambient stack is proper, smooth and Deligne–Mumford with relative normal-crossings boundary by steps 2.1–4.1. Thus this source stratum is proper, smooth and Deligne–Mumford, with its stated relative nodal divisor. This uses the approved clutching argument within Theorem 2.7's proof; it is not a new independently assumed clutching theorem. [F1, A1, step 2.1, step 3.1, step 4.1]

6.1 Starting from this $(1,1)$ base, the universal-curve induction gives every $(1,n)$ with $n\ge2$, and the same local calculations in steps 3.1–4.1 preserve smoothness, Deligne–Mumford structure and relative normal crossings. Together with the genus-zero and $g\ge2$ inductions these are all $2g-2+n>0$ cases. Properness in every case is algebraic properness over $\operatorname{Spec}\mathbb Z$. The construction asserts no analytic compactness comparison. [F1, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Source boundary and reading limits

The owner-approved boundary for this item imports exactly [F2] and [A1]. The proof above applies those published results and checks their stable-range and family conventions; it is not a local reconstruction of their mixed-characteristic stable reduction, algebraicity or complete cited proof closure. All previously authored local stabilization, forgetting, inverse, infinitesimal, atlas and arithmetic components remain preserved as research, with their original hypotheses and limits.

The current author read the actual statement and complete printed proof of Stacks Theorem 109.25.3 in its full Section 109.25 source, and visually read Knudsen's printed pp. 176–179 containing Definition 2.3, Theorem 2.4 and its proof, Corollary 2.6, and Theorem 2.7 and its proof. The surrounding stable-family definition and the relevant diagrams were checked for convention matching. This is reading of those exact ranges; no complete paper, appendix, independent proof of cited prerequisites, historical native review, acceptance or gate coverage is claimed.

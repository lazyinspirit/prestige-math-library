---
id: op-type-ii-dbrane-charge-classification
kind: open-problem
title: "Type II D-Brane Charge Classification"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
category: string-theory
physical_scope: "Open problem asking for a complete nonperturbative classification of physically realizable Type II D-brane charges in specified backgrounds, with anomaly, support, torsion, and charge-notion data kept explicit. Existing K-theory proposals are not assumed to prove spectrum completeness."
deps:
  - pthm-freed-witten-dp-brane-anomaly-condition
  - def-reduced-complex-k-theory
  - thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory
dependency_roles:
  pthm-freed-witten-dp-brane-anomaly-condition: physical-result
  def-reduced-complex-k-theory: mathematical-premise
  thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Edward Witten, D-Branes and K-Theory, hep-th/9810188v2"
      url: "https://arxiv.org/pdf/hep-th/9810188v2"
      locator: "§§1, 3–5, especially §§4.1–4.3 and 5.3: tachyon-condensation proposal, Type IIA/IIB parity, and twisted K-theory limits."
    - title: "Daniel S. Freed and Edward Witten, Anomalies in String Theory with D-Branes, hep-th/9907189v2"
      url: "https://arxiv.org/pdf/hep-th/9907189v2"
      locator: "§§1–2 and §6 equations (1.12), (6.9): anomaly restrictions and the source scope."
    - title: "Donald Marolf, Chern-Simons terms and the Three Notions of Charge, hep-th/0006117v1"
      url: "https://arxiv.org/pdf/hep-th/0006117v1"
      locator: "Abstract and §§2–4: brane-source, Maxwell, and Page charge distinctions."
    - title: "Alan L. Carey, Stuart Johnson, and Michael K. Murray, Holonomy on D-Branes, hep-th/0204199v3"
      url: "https://arxiv.org/pdf/hep-th/0204199v3"
      locator: "§4.11, PDF pp. 23–25: the authors' proposed extension to non-torsion B-field data and its limits."
    - title: "Fabio Ferrari Ruffino and Juan Carlos Rocha Barriga, Twisted differential K-characters and D-branes, arXiv:2009.04223v1 [hep-th]"
      url: "https://arxiv.org/pdf/2009.04223v1"
      locator: "§3.3.1 (topological H²-torsor), §3.3.3, printed p. 54 (differential Čech H¹(R/Z)-torsor and the sufficient condition H₁(X;Z)=0), §3.3.4 (finite-order equivalence sketch); §§4.2–4.3; §5.3 (worldvolume hypotheses and flat-line ambiguity)."
    - title: "Jian-Ge Zhou, Page charge of D-branes and its behavior in topologically nontrivial B-fields, hep-th/0105106v2"
      url: "https://arxiv.org/pdf/hep-th/0105106v2"
      locator: "§§1–4, especially §2 for the Type IIB Page-current construction and §3 for the D3/NS5 patch-jump example."
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Open problem

For a specified Type II background $X$, specify and determine a complete nonperturbative classification of physically realizable D-brane charges. Here “nonperturbative” means that the classification is not restricted to a finite truncation of perturbation theory. The background data must include its spacetime and boundary conditions, the integral Dixmier–Douady class $\zeta_B\in H^3(X;\mathbb Z)$ of the NS $B$-field gerbe, including its torsion part, and the support condition for charges. The class $\zeta_B$ is integral gerbe data, not the de Rham cohomology class of the field-strength form $H_3$. The classification must:

1. impose the applicable worldvolume anomaly conditions, including, under the smooth spin-target and oriented boundary hypotheses of the referenced Freed–Witten result, $i^*\zeta_B=W_3(\nu)=W_3(TQ)$ in $H^3(Q;\mathbb Z)$ for its embedded worldvolume $i:Q\hookrightarrow X$ and oriented normal bundle $\nu$;
2. identify the correct ordinary, twisted, reduced, compactly supported, or relative complex $K$-group, if a $K$-group is the right invariant, using the reduced-group definition and two-periodicity result stated in the references below;
3. treat torsion and non-torsion $\zeta_B$ separately where their constructions differ; and
4. explain how the resulting invariant maps to the physical charge notions below and prove that it is complete for the stated background.

The currently cited reduced complex $K$-group is defined only for based compact Hausdorff spaces, while the cited two-periodicity theorem applies to finite CW pairs. These statements alone do not justify applying that group to an arbitrary noncompact $X$; a solution must state and justify any compactly supported or relative extension under its actual hypotheses.

Here brane-source charge means the localized source current's charge; Maxwell charge is the gauge-invariant flux charge, conserved in the source's field-law setting but not generally localized or quantized; Page charge is localized and quantized and is conserved in a chosen gauge patch, but can shift under large gauge transformations. In topologically nontrivial $B$-field backgrounds, patch-defined Page charges can jump across overlaps, as in Zhou's Type IIB D3/NS5 example. A solution must state which of these is classified, what patch/support data it uses, and how the others are related. For noncompact $X$, the required support or relative pair is part of the problem data; an unsupported replacement by an absolute unreduced $K$-group is not allowed.

Witten's tachyon-condensation proposal assigns Type IIB and Type IIA charges to even and odd complex $K$-theory, respectively, under its stated background and construction assumptions. This proposal, and the source's torsion-twist discussion, do not by themselves prove that every physically realizable charge in an arbitrary background is captured, nor settle the non-torsion case.

Ferrari Ruffino and Rocha Barriga give a later twisted differential $K$-theory/$K$-homology framework for generic twisting, including relative and compactly supported variants, a worldvolume/Wess–Zumino construction, and a topological charge. Their ambiguity statements have distinct hypotheses in the smooth-manifold/good-cover setting of their construction. In §3.3.1, if two twisting cocycles satisfy $\zeta'=\zeta\,\check\delta^1\eta$, the comparison isomorphisms for their topological twisted $K$-groups form a set on which $H^2(X;\mathbb Z)$ acts freely and transitively (an $H^2(X;\mathbb Z)$-torsor). When the cocycle is fixed, this gives the stated $H^2(X;\mathbb Z)$ action, whose quotient is the canonical identification. In the generic differential model of §3.3.3, the comparison isomorphisms instead form a torsor for the Čech group of locally constant coefficients $\check H^1(X;\mathbb R/\mathbb Z)\cong H^1(X;\mathbb R/\mathbb Z)\cong\operatorname{Hom}(H_1(X;\mathbb Z),\mathbb R/\mathbb Z)$; their identification is canonical when $H_1(X;\mathbb Z)=0$. For the D-brane worldvolume/Wess–Zumino construction in §5.3, Definition 5.5 is first given for simply connected spacetime and worldvolume. The authors then state that their Definitions 4.14–4.15 and Theorem 4.16 extend to arbitrary spacetime when $H_1(W;\mathbb Z)=0$, while not recovering the non-twisted analogues under those weaker assumptions. When $H_1(W;\mathbb Z)\ne0$, Definition 5.5 is canonical only up to a flat line bundle on $W$. Their §3.3.4 only sketches equivalence of the Fredholm/Schatten-Grassmannian and finite-dimensional twisted-vector-bundle models for finite-order twists, assuming compact $X$, a finite good cover, and compact closures of its cover members; the details are deferred. These are framework results under their stated hypotheses, not a proof of arbitrary physical charge completeness. The present problem asks for the broader physical completeness and charge-translation statement in a fully specified background.

## Open problem references

[[pthm-freed-witten-dp-brane-anomaly-condition]]

[[def-reduced-complex-k-theory]]

[[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]

[Witten, §§4.1–4.3 and §5.3](https://arxiv.org/pdf/hep-th/9810188v2)

[Marolf, §§2–4](https://arxiv.org/pdf/hep-th/0006117v1)

[Ferrari Ruffino and Rocha Barriga, §§3.3–5.3](https://arxiv.org/pdf/2009.04223v1)

[Zhou, §§2–3](https://arxiv.org/pdf/hep-th/0105106v2)

## Status

Status reviewed 2026-10-30. Witten's original assignment is conditional on its brane–antibrane/tachyon and background assumptions. Ferrari Ruffino and Rocha Barriga (2020), §§3.3.1, 3.3.3–3.3.4, and 5.3, provide a substantive generic-twist mathematical framework for topological/differential $K$-theory, $K$-homology, D-brane worldvolumes, Wess–Zumino holonomy, compact support, and topological charge. In §3.3.1, comparison isomorphisms for topological twisted $K$-groups under a change of cocycle are noncanonical up to an $H^2(X;\mathbb Z)$ action; in §3.3.3, the differential comparison isomorphisms form a Čech $\check H^1(X;\mathbb R/\mathbb Z)\cong H^1(X;\mathbb R/\mathbb Z)\cong\operatorname{Hom}(H_1(X;\mathbb Z),\mathbb R/\mathbb Z)$-torsor and are canonical when $H_1(X;\mathbb Z)=0$. In §5.3, the worldvolume construction is first stated for simply connected spacetime and worldvolume, then extended by the authors to arbitrary spacetime when $H_1(W;\mathbb Z)=0$; for nonzero $H_1(W;\mathbb Z)$ it is canonical only up to a flat line bundle on $W$. Their §3.3.4 equivalence of the Fredholm/Schatten-Grassmannian and finite-dimensional twisted-vector-bundle models is only sketched for finite-order twists, with compact $X$, a finite good cover, and compact closures of its cover members; details are deferred. The cited reduced complex $K$ definition is for based compact Hausdorff spaces, and the cited two-periodicity theorem is for finite CW pairs; these results alone do not cover the noncompact backgrounds in the open problem. Freed–Witten supplies a worldvolume anomaly restriction. Marolf distinguishes brane-source, Maxwell, and Page charges. Zhou (2001), §§2–3, constructs the Page charge from brane-source currents in Type IIB and exhibits a patchwise Page-charge jump in a topologically nontrivial $B$-field D3/NS5 background. These are substantive framework and special-background results; they do not establish a complete correspondence for all three charge notions and all physically realized nonperturbative Type II sectors.

The conclusion that the broader physical completeness question remains open is an inference from the scope and stated hypotheses of these sources, not a claim that the twisted differential $K$-theory construction is absent. Targeted searches on 2026-10-30 for complete D-brane charge classification with non-torsion $H$, for later resolution of Witten's $K$-theory proposal, and for a general Page/Maxwell/source charge correspondence surfaced no source establishing the full physical source/Maxwell/Page correspondence and arbitrary-background spectrum completeness stated above. The search was not exhaustive. This open problem is not a logical premise of another item.

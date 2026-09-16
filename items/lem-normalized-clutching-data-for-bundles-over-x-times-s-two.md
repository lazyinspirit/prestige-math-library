---
id: lem-normalized-clutching-data-for-bundles-over-x-times-s-two
kind: lemma
title: Normalized clutching data for bundles over X×S²
status: published
origin: pipeline
deps: [thm-finite-rank-complement-theorem-over-compact-hausdorff-bases, thm-homotopy-invariance-of-vector-bundle-pullback, def-clutching-construction-for-bundles-over-a-suspension, thm-vector-bundles-glued-from-transition-cocycles, prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, proof of Theorem 2.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Normalized clutching families over X, printed pp.42–43"
---

## Statement

Assume AC and let $X$ be compact Hausdorff. Every complex vector bundle on
$X\times S^2$ is represented, after adding a trivial bundle if necessary, by
data $[E,f]$: two copies of $\operatorname{pr}_X^*E$ on $X\times D^2$ glued
along $X\times S^1$ by a bundle automorphism $f$, normalized by
$f(x,1)=\operatorname{id}_{E_x}$. For a fixed bundle, different choices of
normalized hemisphere trivializations give homotopic normalized clutching
maps. Homotopies through normalized automorphisms give isomorphic stabilized
bundles.

## Facts & Assumptions

**Given:** AC, a compact Hausdorff space $X$, and a finite-rank complex bundle $V$ on $X\times S^2$.

[F1] Under AC, bundle pullback is invariant under homotopy ([[thm-homotopy-invariance-of-vector-bundle-pullback]]).

[F2] The fixed clutching definition supplies the upper-to-lower convention ([[def-clutching-construction-for-bundles-over-a-suspension]]). Applying the transition-cocycle construction in local charts of $E$, also with an interval parameter, glues two copies of $\operatorname{pr}_X^*E$ by an equatorial bundle automorphism and turns a homotopy of such automorphisms into a bundle over the parameter cylinder ([[thm-vector-bundles-glued-from-transition-cocycles]]).

[F3] Under AC, finite complements and common trivial stabilization are available ([[thm-finite-rank-complement-theorem-over-compact-hausdorff-bases]], [[prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases]]).

[A1] AC is used through [F1] and [F3].

## Proof

**Proof technique:** direct.

1.1 Let $D^2_+$ and $D^2_-$ be the closed hemispheres. Each inclusion $X\times\{0\}\hookrightarrow X\times D^2_\pm$ is a homotopy inverse to projection. By [F1], there are bundles $E_\pm$ on $X$ and isomorphisms $V|_{X\times D^2_\pm}\cong\operatorname{pr}_X^*E_\pm$. In these trivializations, $V$ is obtained by an equatorial isomorphism $f(x,z):(E_+)_x\to(E_-)_x$. [F1, F2, A1]

2.1 At $z=1$, $f(x,1)$ is an isomorphism $E_+\to E_-$. Identify $E_-$ with $E=E_+$ by $f(x,1)^{-1}$. In the fixed coefficient convention the transition becomes $f(x,1)^{-1}f(x,z)$, which equals the identity at $z=1$. Thus $V=[E,f]$ with normalized $f$. [F2, step 1.1, algebra]

3.1 If $h_\pm$ and $h'_\pm$ are two normalized hemisphere trivializations of the same bundle, their ratios are maps $g_\pm:X\times D^2_\pm\to\operatorname{Aut}(E)$ with $g_\pm(x,1)=I$. The straight contraction of each disk to $1$ fixes $1$, so composing $g_\pm$ with it gives homotopies to the identity through maps still equal to $I$ at $1$. Applying these changing gauges to the equatorial transition gives a homotopy between the two normalized clutching maps. [F2, step 2.1, construct]

4.1 For a virtual class, [F3] complements its negative bundle into a finite trivial bundle and then applies steps 1.1–3.1 to the resulting actual bundle; this is the optional stabilization in the statement. [F3, A1, step 1.1, step 2.1, step 3.1]

5.1 A normalized homotopy $f_t$ glues, by [F2], a bundle on $X\times S^2\times I$. Its endpoint restrictions are isomorphic by [F1]. The normalization keeps the chosen common bundle and basepoint frame fixed, and adding trivial summands before the homotopy gives the same conclusion for stabilized data. [F1, F2, A1, step 2.1, step 4.1] ∎

---
id: lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy
kind: lemma
title: "Collapse homotopy for a fixed normal identification"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-pontryagin-thom-collapse-of-an-embedded-submanifold", "lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint", "lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lee, Introduction to Smooth Manifolds, tubular neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Tubular Neighborhoods; normal quotient identification"
    - title: "Stanford Math 215B notes, Lectures 14–15, Theorems 138–139"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "printed pp.44–46; collapse pullback, compact-support duality and Thom normalization"
---

## Statement

For compact $S\subset X$, fix $(E,\alpha:E\to TX|_S/TS)$. Collapses made with any two compatible tubular charts, positive sufficiently small radii and supplied metrics represent the same based homotopy class, after the canonical radial identification of the metric targets. Compatibility means identity induced normal derivative after identifying with $\alpha$; an arbitrary normal bundle automorphism is not an auxiliary tubular choice.

## Facts & Assumptions

**Given:** Two charts $\Phi_0,\Phi_1$ for exactly the same specified normal data.

[F1] [[def-pontryagin-thom-collapse-of-an-embedded-submanifold]] imposes the induced normal derivative condition.

[F2] [[lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint]] proves continuity and interpolation of radial profiles.

[F3] [[lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism]] supplies metric comparison.

## Proof

1.1 Shrink around $0_S$ so $\psi=\Phi_1^{-1}\Phi_0$ and its inverse are defined. It fixes $0_S$ and induces the identity on the normal quotient by [F1]. For fiber dilation $\delta_t$, define $\psi_t=\delta_{1/t}\psi\delta_t$ for $t>0$, and $\psi_0=\operatorname{id}$. In bundle charts write $\psi(x,v)=(b(x,v),w(x,v))$, using a target trivialization near $x$. Then $b(x,0)=x$, $w(x,0)=0$ and $\partial_vw(x,0)=I$. Taylor's integral formula writes $w(x,tv)/t=\int_0^1\partial_vw(x,utv)v\,du$, while $b(x,tv)\to x$. These formulas prove smooth extension at $t=0$ with value $(x,v)$. They are coordinate-compatible because the dilation is intrinsic. [F1, construct, algebra]

2.1 Apply the same formulas to $\psi^{-1}$. Compactness of $S\times I$ gives a single small disk on which the two families and their composites are defined; shrinking again if necessary, their compositions are the identity, by the identity for $t>0$ and continuity at zero. Thus each $\psi_t$ is a diffeomorphism onto its image, and $\Phi_1\psi_t$ is a smooth path of compatible tubular charts from $\Phi_1$ to the germ of $\Phi_0$. Its induced normal derivative remains the identity: in the above local expression $\partial_v(w(x,tv)/t)|_{v=0}=I$, while the horizontal derivative is irrelevant to the normal quotient. A common small closed tube exists by compactness. [F1, step 1.1]

3.1 Use that common radius to collapse along $\Phi_1\psi_t$. The inverse tube coordinates vary smoothly. The track of the closed tubes is a compact subset of $X\times I$, its boundary maps to the basepoint, and closed pasting as in [F2] proves joint continuity; at a compactification point the compact track gives a uniform constant neighborhood. This supplies the based homotopy of the common-radius endpoint collapses. Interpolate each endpoint radius to its original radius within that endpoint chart: the formula is fiber scaling on the varying tube, agrees with the basepoint at its boundary, and is jointly continuous by the same compact-track argument. Radial cutoffs are covered by [F2]. [F2, step 2.1, construct]

4.1 Finally interpolate metrics by $h_t=(1-t)h_0+th_1$, use their canonical radial maps [F3] to express all targets in the $h_0$ model, and choose a common small tube uniformly in $t$. The formulas and pasting of step 3.1 give the corresponding homotopy. Concatenation proves precisely the stated choice independence. If a chart is instead precomposed with a normal automorphism, step 1.1 limits to that automorphism rather than the identity; for a point and a reflected normal line the resulting sphere maps have opposite degree. Hence preserving the specified normal data is essential to this proof and statement. [F3, step 3.1] ∎

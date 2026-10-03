---
id: rem-curve-residue-duality-is-the-dimension-one-case
kind: remark
title: "Curve duality and its residue normalization in dimension one"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme", "rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case", "lem-smooth-projective-rational-point-koszul-residue-normalization"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Vakil 2025, 29.1.12\u201313 and 29.3.14: dimension-one coherent and vector bundle forms"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
    - title: "Stacks, Remark 48.27.2: normalization by the trace pairing"
      url: https://stacks.math.columbia.edu/tag/0FVW
---

## Remark

Under AC, for a projective pure CM curve $C/k$, the theorem gives $H^1(C,F)^\vee=\operatorname{Hom}_C(F,\omega_C)$ and $H^0(C,F)^\vee=\operatorname{Ext}_C^1(F,\omega_C)$ for every coherent $F$. In particular it includes singular curves. The second formula uses global Ext; replacing it by $H^1(C,F^\vee\otimes\omega_C)$ requires $F$ to be locally free. When $C$ is smooth and $E$ is a vector bundle, the preceding smooth specialization identifies $\omega_C=\Omega^1_{C/k}$ and the first pairing with $H^1(C,E)\times H^0(C,E^\vee\otimes\Omega^1_{C/k})\to k$.

The normalization agrees with curve residue duality, including its sign. At a rational smooth point with parameter $z$, the boundary class of the principal part $dz/z$ is the point Gysin class; in the signed derived/Koszul convention its dual top cochain is $e_z\mapsto-dz$. Its normalized trace is $1$ by [[lem-smooth-projective-rational-point-koszul-residue-normalization]], which also proves independence of the parameter and compatibility with field extension. This is the local residue convention $\operatorname{res}(dz/z)=1$. After an algebraic closure of $k$, each smooth connected component has a rational point and its $H^1(\omega_C)$ is one-dimensional, by the existing smooth theorem applied to $\mathcal O_C$. Thus these point normalizations determine the trace on every component. Compatibility with field extension descends the equality to $k$. Multiplication and evaluation with a bundle section commute with this point-class construction, so the specialization above uses the same residue-normalized trace as the curve pairing. The remark compares the dimension-one pairing and its normalization; it does not assign ordinary rational differentials as the dualizing sheaf of a singular curve.

---
id: ex-weyl-integration-formula-for-su-two
kind: example
title: Weyl integration for SU(2)
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-weyl-integration-formula, ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n, def-axiom-of-choice, def-weyl-jacobian-on-a-maximal-torus]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§15, the SU(2) computation"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VIII §1"
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. For a continuous class function $f$ on $SU(2)$,
$$\int_{SU(2)}f(g)\,dg=\frac12\int_{S^1}f\bigl(\operatorname{diag}(z,z^{-1})\bigr)\,\bigl|1-z^{-2}\bigr|^2\,dz,$$
with $dz$ the normalized Haar measure of the circle.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; $SU(2)$ with its diagonal maximal torus $T=\{\operatorname{diag}(z,z^{-1}):|z|=1\}$, Weyl group of order two, and normalized Haar measures.

[L1] The diagonal matrices form a maximal torus of $SU(2)$ with Weyl group $W\cong S_2$ of order two acting by $z\mapsto z^{-1}$ ([[ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n]]).

[L2] Weyl integration: for a class function $f$ on a compact connected $G$ with maximal torus $T$, $\int_Gf\,dg=|W|^{-1}\int_Tf(t)J(t)\,dt$ with $J(t)=\prod_{\alpha>0}|1-\alpha(t)^{-1}|^2$ ([[thm-weyl-integration-formula]], [[def-weyl-jacobian-on-a-maximal-torus]]).

[L3] In $\mathfrak{sl}_2(\mathbb C)$, the adjoint action of $t=\operatorname{diag}(z,z^{-1})$ sends $E_{12}$ to $z^2E_{12}$ and $E_{21}$ to $z^{-2}E_{21}$, while it fixes the diagonal trace-zero line. Thus the roots of $(SU(2),T)$ are the two characters $z\mapsto z^{\pm2}$, and one may choose $\alpha(t)=z^2$ as the positive root. [algebra]

## Verification

**Proof technique:** direct.

1.1 Substituting $|W|=2$ into [L2] and using that the class function is constant on Weyl orbits gives $\int_{SU(2)}f\,dg=\frac12\int_{S^1}f(\operatorname{diag}(z,z^{-1}))J(\operatorname{diag}(z,z^{-1}))\,dz$. [L1, L2]

2.1 By [L3] the single positive root satisfies $\alpha(\operatorname{diag}(z,z^{-1}))=z^2$, so $J(\operatorname{diag}(z,z^{-1}))=|1-z^{-2}|^2$, which is the displayed factor. [L3, step 1.1]

3.1 As a check, $f\equiv1$ gives $\frac12\int_{S^1}|1-z^{-2}|^2\,dz=\frac12\int_{S^1}(2-z^2-z^{-2})\,dz=\frac12\cdot2=1$, consistent with the normalization of Haar measure. [step 2.1] ∎

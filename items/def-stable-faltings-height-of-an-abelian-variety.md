---
id: def-stable-faltings-height-of-an-abelian-variety
kind: definition
title: "Stable Faltings height of an abelian variety over a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-height-of-a-rank-one-normed-module-over-number-ring
  - def-neron-model-and-mapping-property
  - def-number-field
  - def-fiberwise-semiabelian-group-scheme
  - lem-faltings-differentials-module-has-rank-one
  - thm-abelian-variety-acquires-semistable-reduction-after-finite-extension
  - thm-neron-model-existence-in-stated-class
justified_by:
  - thm-stable-faltings-height-independent-of-semistable-extension

proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed p. 351 for the Faltings metric and pp. 355–357 for the height."
    - title: "J. I. Burgos Gil and J. Kramer, *On the height of the universal abelian variety*, arXiv:2403.11745v2"
      url: "https://arxiv.org/pdf/2403.11745"
      locator: "§5.4, equation (5.5), printed pp. 42–43: positive complex-orientation normalization of the Faltings metric on the Hodge line."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Definition

Assume AC and DC. Let $A/K$ be an abelian variety of dimension $g$ over a number field. Choose a finite extension $K'/K$ over which $A_{K'}$ has semistable reduction at every finite place, let $R'=\mathcal O_{K'}$, and let $\mathcal N/R'$ be its Néron model with identity section $e$. Let $\mathcal A'^0$ be its open identity component, which is fiberwise semiabelian under the semistable-reduction hypothesis, and put $\omega_{A'/R'}=e^*(\bigwedge^g\Omega^1_{\mathcal A'^0/R'})$. At each archimedean place use the positive Hermitian Faltings pairing
$$\langle\alpha,\beta\rangle_{\mathrm{Fal}}=\frac{i^{g^2}}{2^g}\int_{A'(\mathbb C)}\alpha\wedge\overline\beta,$$
where $i=\sqrt{-1}$ and the complex torus has its canonical complex orientation. The **stable Faltings height** is the normalized rank-one module height $h_{K'}(\omega_{A'/R'})$; independence of $K'$ is the following theorem.

## Definition references

[[def-height-of-a-rank-one-normed-module-over-number-ring]]

[[def-fiberwise-semiabelian-group-scheme]]

[[thm-abelian-variety-acquires-semistable-reduction-after-finite-extension]]

[[lem-faltings-differentials-module-has-rank-one]]

[[thm-stable-faltings-height-independent-of-semistable-extension]]

[Faltings 1983, §2, printed pp. 351, 355–357](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Burgos Gil–Kramer, *On the height of the universal abelian variety*, §5.4, equation (5.5)](https://arxiv.org/pdf/2403.11745)

## Facts & Assumptions

**Given:** AC and DC; a number field $K$, an abelian variety $A/K$, a semistable finite extension, and the identity component of its Néron model, which is fiberwise semiabelian under the stated reduction hypothesis.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-height-of-a-rank-one-normed-module-over-number-ring]]: the normalized logarithmic height is the log of the finite index divided by the weighted archimedean norm product, normalized by the field degree.

[F2] [[thm-abelian-variety-acquires-semistable-reduction-after-finite-extension]]: a semistable finite extension exists under the theorem's hypotheses.

[F3] [[lem-faltings-differentials-module-has-rank-one]]: the invariant top differentials form a rank-one projective module.


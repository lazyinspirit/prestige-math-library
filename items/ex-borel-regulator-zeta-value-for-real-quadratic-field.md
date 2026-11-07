---
id: ex-borel-regulator-zeta-value-for-real-quadratic-field
kind: example
title: "Borel Regulator Comparison Scalar for $\\mathbb Q(\\sqrt5)$"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-ring-of-integers-of-a-quadratic-field
  - cor-discriminant-of-a-quadratic-field
  - thm-borel-ranks-of-higher-k-groups-of-number-fields
  - thm-borel-regulator-dedekind-zeta-value-rationality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-authored
  proof: ai-authored
sources:
  references:
    - title: "Armand Borel, Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers"
      url: "https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf"
      locator: "Theorem 6.2, printed pp. 631–632; normalized comparison scalar."
    - title: "Armand Borel, Stable real cohomology of arithmetic groups"
      url: "https://numdam.org/item/10.24033/asens.1269.pdf"
      locator: "Proposition 12.2, printed pp. 271–272; rank of higher K-groups."
verification: {}
---

## Example

Let $K=\mathbb Q(\sqrt5)$. Then $\mathcal O_K=\mathbb Z[(1+\sqrt5)/2]$, the signature is $(2,0)$, and the absolute discriminant is $5$. For $m=2$, Borel's rank formula gives $\operatorname{rank}K_5(\mathcal O_K)=2$. The normalized positive zeta scalar is

$$R'_{2,K}=\sqrt5\,\zeta_K(3)\pi^{-6},$$

and the Borel regulator covolume is a nonzero rational multiple of this scalar; no particular rational factor is asserted.

## Example references

[[thm-ring-of-integers-of-a-quadratic-field]]

[[cor-discriminant-of-a-quadratic-field]]

[[thm-borel-ranks-of-higher-k-groups-of-number-fields]]

[[thm-borel-regulator-dedekind-zeta-value-rationality]]

## Facts & Assumptions

**Given:** $K=\mathbb Q(\sqrt5)$ and the integer $m=2$.

[F1] [[thm-ring-of-integers-of-a-quadratic-field]]: for squarefree $d\equiv1\pmod4$, $\mathcal O_{\mathbb Q(\sqrt d)}=\mathbb Z[(1+\sqrt d)/2]$.

[F2] [[cor-discriminant-of-a-quadratic-field]]: for such $d$, the field discriminant is $d$.

[F3] [[def-archimedean-embeddings-and-number-field-signature]]: the two real roots of $x^2-5$ give signature $(2,0)$.

[F4] [[thm-borel-ranks-of-higher-k-groups-of-number-fields]]: for even $m$, the rank of $K_{2m+1}(\mathcal O_K)$ is $r_1+r_2$.

[F5] [[thm-borel-regulator-dedekind-zeta-value-rationality]]: the covolume is a rational multiple of $|D_K|^{1/2}\zeta_K(m+1)\pi^{-[K:\mathbb Q](m+1)}$.

## Proof

1.1 Since $5$ is squarefree and $5\equiv1\pmod4$, [F1] gives the stated ring of integers. The two embeddings send $\sqrt5$ to $\sqrt5$ and $-\sqrt5$, so [F3] gives $(r_1,r_2)=(2,0)$. [F1, F3, given, algebra]

1.2 Applying [F2] with $d=5$ gives $|D_K|=5$. [F2, given]

2.1 With $m=2$ even, [F4] gives $\operatorname{rank}K_5(\mathcal O_K)=r_1+r_2=2$. [F4, step 1.1, given]

2.2 Here $[K:\mathbb Q]=r_1+2r_2=2$. Substituting $m+1=3$ and $|D_K|=5$ into [F5] gives $R'_{2,K}=\sqrt5\,\zeta_K(3)\pi^{-6}$ and the asserted rational commensurability. [F5, step 1.1, step 1.2, given, algebra]

## Escalation

The field, signature, discriminant, and scalar computation are complete. The regulator-covolume conclusion depends on the escalated Borel comparison theorem; its rational factor is not computed here, and the example cannot be marked ready until that supplier has a complete local proof.

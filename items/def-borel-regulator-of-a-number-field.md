---
id: def-borel-regulator-of-a-number-field
kind: definition
title: "Borel Regulator of a Number Field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-higher-quillen-k-group-of-ring-of-integers
  - thm-borel-ranks-of-higher-k-groups-of-number-fields
  - def-archimedean-embeddings-and-number-field-signature
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Armand Borel, Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers"
      url: "https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf"
      locator: "§§6.1–6.4, printed pp. 630–633; the stable-cohomology comparison and normalization of the higher regulator."
    - title: "Armand Borel, Stable real cohomology of arithmetic groups"
      url: "https://numdam.org/item/10.24033/asens.1269.pdf"
      locator: "§§11–12 and Proposition 12.2, for the stable primitive classes and regulator lattice."
verification: {}
---

## Definition

For $q\ge2$, let $r_q^B:K_{2q-1}(\mathbb C)\to\mathbb R(q-1)$ be the map induced by Borel's source-normalized primitive class, where $\mathbb R(j)=(2\pi i)^j\mathbb R$. For a number field $K$ and $m\ge1$, put $d_m^0=r_1+r_2$ when $m$ is even and $d_m^0=r_2$ when $m$ is odd. Define the number-field regulator

$$\operatorname{Reg}_{m,K}:K_{2m+1}(\mathcal O_K)\longrightarrow \left(\bigoplus_{\sigma:K\hookrightarrow\mathbb C}\mathbb R(m)\right)^{c=+1}$$

is the sum of the maps $r^B_{m+1}$ after the K-theory maps induced by $\mathcal O_K\hookrightarrow K\xrightarrow{\sigma}\mathbb C$; $c$ acts by complex conjugation on the embeddings and on $\mathbb R(m)$. The target has real dimension $d_m^0$, equal to the rank in Borel's rank theorem. For $m\ge2$, the Borel regulator on $K_{2m-1}(K)$ is obtained from $r_m^B$ by the same embedding construction. A regulator lattice means the image modulo its kernel, with covolume measured using the source's rational structures; this definition asserts no covolume formula.

## Definition references

[[def-higher-quillen-k-group-of-ring-of-integers]]

[[thm-borel-ranks-of-higher-k-groups-of-number-fields]]

[[def-archimedean-embeddings-and-number-field-signature]]

[Armand Borel, *Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers*, §§6.1–6.4](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf)

## Facts & Assumptions

**Given:** A number field $K$, an integer $m\ge1$, its signature $(r_1,r_2)$, and the source-normalized Borel class.

[F1] [[def-higher-quillen-k-group-of-ring-of-integers]]: for any commutative unital ring $R$, $K_n(R)=\pi_{n+1}(BQ\mathcal P(R),0)$; this applies to $R=\mathcal O_K$, $K$, and $\mathbb C$.

[F2] [[thm-borel-ranks-of-higher-k-groups-of-number-fields]]: its rank is $r_1+r_2$ for even $m$ and $r_2$ for odd $m$.

[F3] [[def-archimedean-embeddings-and-number-field-signature]]: complex embeddings occur in conjugate pairs, and the signature counts real embeddings and those pairs.

## Proof

1.1 Applying a ring homomorphism $\mathcal O_K\to\mathbb C$ induces a map on the Q-construction K-groups, so each embedding supplies the component used in the displayed direct sum. Pairing conjugate embeddings and taking the fixed subspace gives a real vector space. [F1, F3, given, construct]

2.1 Complex conjugation acts on $\mathbb R(m)$ by $(-1)^m$. If $m$ is even, each real embedding contributes one fixed real coordinate and each complex pair contributes one, giving dimension $r_1+r_2$. If $m$ is odd, real coordinates contribute none and each complex pair contributes one, giving dimension $r_2$. By [F2] this equals the domain rank. [F2, F3, given, algebra]

2.2 The source-normalized Borel class fixes the scale of the induced map; no independent scalar rescaling is made. This defines the named regulator and its target convention without asserting that its image is a lattice or computing its covolume. [F1, F2, given] ∎

## Escalation

The map and its source normalization are specified, but the Borel primitive-class construction has no local definition item in this batch. The target-dimension calculation is complete, while its identification with the rank uses the escalated Borel-rank theorem [F2]. The exact proposed prerequisite is `def-source-normalized-borel-class-and-regulator-on-stable-gl`, placed on this A page immediately before this item, together with the preceding Borel-rank proof. Until those interfaces are locally fixed, this definition is escalated.

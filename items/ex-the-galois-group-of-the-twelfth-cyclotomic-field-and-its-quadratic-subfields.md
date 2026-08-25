---
id: ex-the-galois-group-of-the-twelfth-cyclotomic-field-and-its-quadratic-subfields
kind: example
title: "$\\operatorname{Gal}(\\mathbb Q(\\zeta_{12})/\\mathbb Q)\\cong(\\mathbb Z/12)^\\times$ and its three quadratic subfields"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-the-galois-group-of-a-rational-cyclotomic-field, thm-fundamental-theorem-of-finite-galois-theory]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Sections 2-3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 5.8 and the fundamental theorem"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

Let $\zeta:=\zeta_{12}$. Then

$$\operatorname{Gal}(\mathbb Q(\zeta)/\mathbb Q)\cong(\mathbb Z/12)^\times=\{[1],[5],[7],[11]\},$$

every nonidentity element has order two, and the three order-two subgroups have
fixed fields

$$\mathbb Q(i),\qquad \mathbb Q(\sqrt3),\qquad \mathbb Q(\sqrt{-3}).$$

So $\mathbb Q(\zeta_{12})$ has exactly three quadratic intermediate fields.

## Facts & Assumptions

**Given:** A primitive twelfth root of unity $\zeta=\zeta_{12}$ and the automorphisms $\sigma_a(\zeta)=\zeta^{a}$ for $[a]\in(\mathbb Z/12)^\times$.

[L1] $[\mathbb Q(\zeta_{12}):\mathbb Q]=\varphi(12)=4$ and $\operatorname{Gal}(\mathbb Q(\zeta_{12})/\mathbb Q)\cong(\mathbb Z/12)^\times$ ([[cor-the-galois-group-of-a-rational-cyclotomic-field]]).

[L2] For a finite Galois extension $E/F$, subgroups of $\operatorname{Gal}(E/F)$ correspond bijectively to intermediate fields, and the fixed field of a subgroup $H$ has degree $[E^{H}:F]=[\operatorname{Gal}(E/F):H]$ ([[thm-fundamental-theorem-of-finite-galois-theory]]).

## Verification

**Proof technique:** direct.

1.1 The units modulo $12$ are $[1],[5],[7],[11]$, since these are exactly the residue classes in $\{1,\dots,11\}$ coprime to $12$. Their squares are $[25]=[1]$, $[49]=[1]$ and $[121]=[1]$, so every nonidentity element has order two. [L1, algebra]

2.1 Therefore $(\mathbb Z/12)^\times$ is the Klein four-group, with three order-two subgroups: $$H_i=\{[1],[5]\},\qquad H_{-3}=\{[1],[7]\},\qquad H_3=\{[1],[11]\}.$$ By [L1] and [L2], each fixed field has degree $2$ over $\mathbb Q$. [step 1.1, L1, L2]

3.1 The subgroup $H_i$ fixes $i=\zeta^{3}$, because $\sigma_{5}(\zeta^{3})=\zeta^{15}=\zeta^{3}$. Since $i\notin\mathbb Q$ and the fixed field has degree $2$ by step 2.1, that fixed field is $\mathbb Q(i)$. [step 2.1, algebra]

3.2 The subgroup $H_{-3}$ fixes $2\zeta^{2}-1$, because $\sigma_{7}(\zeta^{2})=\zeta^{14}=\zeta^{2}$; and $$ (2\zeta^{2}-1)^{2}=4\zeta^{4}-4\zeta^{2}+1=-3, $$ since $\zeta^{2}$ is a root of $t^{2}-t+1$. So the fixed field contains $\sqrt{-3}$, and again step 2.1 makes it exactly $\mathbb Q(\sqrt{-3})$. [step 2.1, algebra]

3.3 The subgroup $H_3$ fixes $\zeta+\zeta^{-1}$, because $\sigma_{11}$ is complex conjugation. Moreover $$ (\zeta+\zeta^{-1})^{2}=\zeta^{2}+2+\zeta^{-2}=3, $$ since $\zeta^{2}+\zeta^{-2}=1$. So the fixed field contains $\sqrt3$, and step 2.1 makes it exactly $\mathbb Q(\sqrt3)$. [step 2.1, algebra]

4.1 The three order-two subgroups of step 2.1 therefore yield the three quadratic intermediate fields $\mathbb Q(i)$, $\mathbb Q(\sqrt{-3})$ and $\mathbb Q(\sqrt3)$, and there are no others because [L2] gives a bijection between subgroups and intermediate fields. [step 2.1, step 3.1, step 3.2, step 3.3, L2] ∎

## Remarks

- **The same phenomenon already occurs at order eight.** The field $\mathbb Q(\zeta_8)$ also has Klein four Galois group and three quadratic subfields. The order-twelve calculation is useful because its three fields are the familiar $\mathbb Q(i)$, $\mathbb Q(\sqrt3)$ and $\mathbb Q(\sqrt{-3})$.

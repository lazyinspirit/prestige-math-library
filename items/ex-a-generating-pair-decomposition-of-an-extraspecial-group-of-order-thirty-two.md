---
id: ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two
kind: example
title: "A choice of four generators exhibiting an extraspecial group of order $32$ as an internal central product"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, cor-dihedral-groups-as-semidirect-products, def-generated-subgroup]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups (Hilary Term 2008), 48 pp."
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, 62 pp."
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups (arXiv:1510.06583v1)"
      url: "https://arxiv.org/pdf/1510.06583"
---
## Example

A choice of four generators exhibiting an extraspecial group of order $32$ as an internal central product.

## Facts & Assumptions

**Given:** The central product $\operatorname{Dih}(C_4)\circ\operatorname{Dih}(C_4)$ and its two canonical factor maps.

[L1] For $n\ge1$, $\operatorname{Dih}(C_n)=C_n\rtimes C_2$ has order $2n$, and with $C_n=\langle r\rangle$ and $C_2=\langle s\rangle$ every element has a unique form $r^i$ or $r^is$ with $0\le i<n$ ([[cor-dihedral-groups-as-semidirect-products]]).

[L2] The canonical maps into a central product are injective homomorphisms whose images commute elementwise, generate the whole central product, and meet in the common central line ([[prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images]]).

[L3] $$\langle S \rangle \;:=\; \bigcap \{\, H \;:\; H \le G \text{ and } S \subseteq H \,\}.$$ ([[def-generated-subgroup]]).

[L4] $\operatorname{Dih}(C_4)$ is extraspecial of order eight, and a central product of two extraspecial $2$-groups along their centres is extraspecial of order $|E_1||E_2|/2$ ([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]], [[thm-a-central-product-of-extraspecial-p-groups-is-extraspecial]]).


## Verification

**Proof technique:** direct.

1.1 Let $\iota_1,\iota_2:\operatorname{Dih}(C_4)\to\operatorname{Dih}(C_4)\circ\operatorname{Dih}(C_4)$ be the canonical maps, and put $a:=\iota_1(r)$, $b:=\iota_1(s)$, $c:=\iota_2(r)$ and $d:=\iota_2(s)$. By the normal form of [L1], the images of the two factors are $\langle a,b\rangle=\iota_1(\operatorname{Dih}(C_4))$ and $\langle c,d\rangle=\iota_2(\operatorname{Dih}(C_4))$, and injectivity shows that each has order eight. The central product is extraspecial and has order $8\cdot8/2=32$. [L1, L2, L3, L4]

2.1 The two subgroups commute elementwise, generate the whole central product, and meet in the common central line. Therefore the four generators $a,b,c,d$ exhibit $\operatorname{Dih}(C_4)\circ\operatorname{Dih}(C_4)$ as an internal central product of two subgroups of order eight. [L2, step 1.1] ∎

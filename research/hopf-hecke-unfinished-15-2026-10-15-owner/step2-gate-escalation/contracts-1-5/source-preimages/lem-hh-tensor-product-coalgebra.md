---
id: lem-hh-tensor-product-coalgebra
kind: lemma
title: "The tensor product of two coalgebras is a coalgebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, prop-functoriality-of-module-tensor-products, thm-unit-isomorphisms-for-module-tensor-products]
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Hans-Jürgen Schneider, Lectures on Hopf algebras, notes by Sonia Natale"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "§1, printed p. 6: the tensor-product coalgebra structure maps and their middle-factor flip"
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§2.1.3, PDF p. 3: coassociativity, counit and antipode formulas for function algebras on finite groups"

---
## Statement

Let $k$ be a field and let $(C,\Delta_C,\varepsilon_C)$ and $(D,\Delta_D,\varepsilon_D)$ be $k$-coalgebras in the sense of [[def-hh-coalgebra-and-coalgebra-map]]. Thus $\Delta_C:C\to C\otimes C$ and $\varepsilon_C:C\to k$ are linear and satisfy coassociativity and both counit equations from that definition, with the corresponding equations for $D$. Equip $C\otimes D$ with

$$\Delta_{C\otimes D}(c\otimes d)=\sum (c_{(1)}\otimes d_{(1)})\otimes(c_{(2)}\otimes d_{(2)}),\qquad \varepsilon_{C\otimes D}(c\otimes d)=\varepsilon_C(c)\varepsilon_D(d).$$

Here the sums are the finite tensor expressions for $\Delta_C(c)$ and $\Delta_D(d)$, and the formula for $\Delta_{C\otimes D}$ is obtained by applying $\Delta_C\otimes\Delta_D$ and then flipping the two middle factors. These formulas define linear maps and make $C\otimes D$ a coalgebra. No finite-dimensionality assumption is used.

## Facts & Assumptions

**Given:** $k$ is a field, and the linear maps for $C$ and $D$ satisfy the coassociativity and counit equations stated in the Statement.

[F1] Every element of $V\otimes W$ is a finite sum of elementary tensors, and tensor powers are associated using the displayed canonical associators ([[def-hh-scalar-and-tensor-conventions]]).

[F2] Linear maps induce tensor-product linear maps by $(f\otimes g)(v\otimes w)=f(v)\otimes g(w)$, uniquely and functorially ([[prop-functoriality-of-module-tensor-products]]).

[F3] The canonical associators and flips are coherent linear isomorphisms on iterated tensor products ([[lem-hh-tensor-coherence-on-elementary-tensors]]).

[F4] The canonical unit isomorphism $k\otimes k\cong k$ sends $r\otimes s$ to $rs$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F5] A coalgebra's coassociativity and counit identities use the canonical associator and tensor-unit maps ([[def-hh-coalgebra-and-coalgebra-map]]).

## Proof

**Proof technique:** direct.

1.1 The map $C\otimes D\to(C\otimes D)\otimes(C\otimes D)$ is the composite of the tensor maps induced by $\Delta_C,\Delta_D$ and the middle-factor flip from [F2]–[F3]; the counit map is $\varepsilon_C\otimes\varepsilon_D$ followed by the unit isomorphism [F4]. Thus both formulas are well-defined linear maps, and on any elementary tensor they have the stated values. [given, F1, F2, F3, F4, construct]

1.2 On $c\otimes d$, either iterated coproduct first applies the corresponding threefold coproducts to $c$ and $d$ and then interleaves their factors in the order $C,D,C,D,C,D$. Coassociativity of $\Delta_C$ and $\Delta_D$ from [F5] makes these threefold coproducts equal for the two parenthesizations, and the coherent associators and flips in [F3] give the same interleaving; therefore $(\Delta_{C\otimes D}\otimes\mathrm{id})\Delta_{C\otimes D}=(\mathrm{id}\otimes\Delta_{C\otimes D})\Delta_{C\otimes D}$ on elementary tensors. [given, F3, F5, algebra]

1.3 Applying the left counit to the displayed coproduct gives $\sum\varepsilon_C(c_{(1)})\varepsilon_D(d_{(1)})(c_{(2)}\otimes d_{(2)})=c\otimes d$ by the two left counit equations in [F5]; applying the right counit gives $\sum\varepsilon_C(c_{(2)})\varepsilon_D(d_{(2)})(c_{(1)}\otimes d_{(1)})=c\otimes d$ by the two right counit equations. [given, F5, algebra]

2.1 Both sides of every identity in steps 1.2–1.3 are linear maps, and elementary tensors span each tensor product by [F1]. The identities therefore hold on all of their domains, proving that the stated maps make $C\otimes D$ a coalgebra. [step 1.2, step 1.3, F1] ∎

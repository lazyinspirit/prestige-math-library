---
id: thm-hh-bialgebra-module-tensor-coherence
kind: theorem
title: "Bialgebra module tensor actions and their coherence"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps: [def-hh-module-category-and-tensor-action, def-left-and-right-modules, lem-hh-tensor-coherence-on-elementary-tensors, lem-hh-regular-module-detects-linear-and-tensor-identities, thm-unit-isomorphisms-for-module-tensor-products, thm-symmetry-and-associativity-over-a-commutative-ring, thm-universal-property-of-module-tensor-products, thm-tensor-product-of-algebras-over-a-commutative-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (MIT 18.769 full course lecture notes, 2009)"
      url: "https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/8a51a9d1b57a35a0e6a5804bdea6e146_MIT18_769S09_notes.pdf"
    - title: "Christoph Schweigert, Hopf algebras, quantum groups and topological field theory (Hamburg University full lecture notes, 2025)"
      url: "https://christophschweigert.github.io/skripten/hskript.pdf"
---

## Statement

Let $k$ be a field, $H$ a unital associative $k$-algebra, and $\Delta:H\to H\otimes_k H$ and $\varepsilon:H\to k$ linear maps. Suppose first that $H$ is a bialgebra: $\Delta$ is coassociative and a unital algebra map, and $\varepsilon$ is a counit and a unital algebra map. For the category $H\text{-}\mathrm{Mod}$ and candidate tensor action of [[def-hh-module-category-and-tensor-action]], the tensor product of two left $H$-modules is a left $H$-module, $k_\varepsilon$ is the unit module, tensor products of $H$-linear maps are $H$-linear, and the canonical associator and unit maps are $H$-linear. They are natural, and the pentagon and triangle diagrams commute. Thus these operations define a monoidal category of left $H$-modules; no symmetry or braiding is asserted.

Conversely, start with only the unital associative algebra $H$ and the linear maps $\Delta,\varepsilon$. If the displayed formula of [[def-hh-module-category-and-tensor-action]] makes $V\otimes_k W$ a left $H$-module for every pair of left $H$-modules, $k_\varepsilon$ is a left $H$-module, and the canonical associator and both canonical unit maps are $H$-linear, then $\Delta$ is a coassociative counital unital algebra map and $\varepsilon$ is a counital unital algebra map. Hence these data make $H$ a bialgebra.

## Facts & Assumptions

**Given:** A field $k$, a unital associative $k$-algebra $H$, linear maps $\Delta:H\to H\otimes_kH$ and $\varepsilon:H\to k$, and left $H$-modules. For the forward assertion assume the bialgebra axioms in the Statement. For the converse assume exactly the module-action and $H$-linearity conditions in its second paragraph.

[F1] [[def-hh-module-category-and-tensor-action]]: objects are unital left $H$-modules, morphisms are $H$-linear maps, the proposed tensor action is $h(v\otimes w)=\sum h_{(1)}v\otimes h_{(2)}w$, and the proposed unit action is $h c=\varepsilon(h)c$.

[F2] [[def-left-and-right-modules]]: a left module action satisfies $1_Hv=v$ and $(ab)v=a(bv)$, together with additivity in both variables.

[F3] [[thm-tensor-product-of-algebras-over-a-commutative-ring]]: the product on $H\otimes_kH$ is $(a\otimes b)(c\otimes d)=ac\otimes bd$ and its unit is $1_H\otimes1_H$.

[F4] [[thm-universal-property-of-module-tensor-products]]: a bilinear map on a pair of $k$-vector spaces induces a unique linear map out of their tensor product; pure tensors span.

[F5] [[thm-unit-isomorphisms-for-module-tensor-products]]: the canonical maps $k\otimes_kV\to V$, $c\otimes v\mapsto cv$, and $V\otimes_kk\to V$, $v\otimes c\mapsto cv$, are isomorphisms.

[F6] [[thm-symmetry-and-associativity-over-a-commutative-ring]]: the canonical associator sends $(u\otimes v)\otimes w$ to $u\otimes(v\otimes w)$.

[F7] [[lem-hh-tensor-coherence-on-elementary-tensors]]: the canonical associator and unit maps are natural and satisfy the pentagon and unit triangle on vector spaces.

[F8] [[lem-hh-regular-module-detects-linear-and-tensor-identities]]: for $n\ge1$, the regular action of $a\in H$ on $H^{\otimes n}$ is determined by left multiplication on the first factor, and equality of such actions implies equality of the elements; in particular $1_H^{\otimes n}$ detects equality.

[A1] In the forward branch, $\Delta$ and $\varepsilon$ preserve products and units; $\Delta$ is coassociative; and $(\varepsilon\otimes\mathrm{id})\Delta=(\mathrm{id}\otimes\varepsilon)\Delta=\mathrm{id}_H$.

[A2] In the converse branch, the formula defines a unital left $H$-module structure on every $V\otimes W$, the $\varepsilon$-action defines a unital left module on $k$, and the canonical associator and both canonical unit maps are $H$-linear.

## Proof

**Proof technique:** direct.

1.1 For left $H$-modules $V,W$, the four-variable map $(a,b,v,w)\mapsto av\otimes bw$ is $k$-multilinear, so the tensor universal property [F4] defines an action of $H\otimes H$ on $V\otimes W$ by $(a\otimes b)(v\otimes w)=av\otimes bw$. On pure tensors, $(a\otimes b)((c\otimes d)(v\otimes w))=acv\otimes bdw=((a\otimes b)(c\otimes d))(v\otimes w)$ by [F2] and [F3], and $1_H\otimes1_H$ acts as the identity; pure tensors span, so this is a unital algebra action. Composing its representation map with the algebra map $\Delta$ gives precisely the candidate action of [F1], $h(v\otimes w)=\sum h_{(1)}v\otimes h_{(2)}w$, as a unital left $H$-module action. [A1, F1, F2, F3, F4, construct]

1.2 If $f:V\to V'$ and $g:W\to W'$ are $H$-linear, then on each pure tensor $(f\otimes g)(h(v\otimes w))=\sum h_{(1)}f(v)\otimes h_{(2)}g(w)=h((f\otimes g)(v\otimes w))$. Both sides are linear and pure tensors span by [F4], so $f\otimes g$ is $H$-linear. The tensor maps preserve identities and compositions because their values agree on pure tensors. [F1, F4, algebra]

1.3 Since $\varepsilon$ is a unital algebra map, $h\cdot c=\varepsilon(h)c$ satisfies $1_H\cdot c=c$ and $(ab)\cdot c=a\cdot(b\cdot c)$; hence $k_\varepsilon$ is a left $H$-module by [F2]. The maps in [F5] are the proposed unit maps. [A1, F2, F5]

1.4 For $u\in U,v\in V,w\in W$, coassociativity writes the iterated coproduct in either parenthesization as $\sum h_{(1)}\otimes h_{(2)}\otimes h_{(3)}$. Both $\alpha(h\cdot((u\otimes v)\otimes w))$ and $h\cdot\alpha((u\otimes v)\otimes w)$ are therefore $\sum h_{(1)}u\otimes(h_{(2)}v\otimes h_{(3)}w)$ after applying the canonical associator; thus $\alpha$ is $H$-linear. For the left unit map, $\lambda(h\cdot(c\otimes v))=\sum\varepsilon(h_{(1)})c\,h_{(2)}v=c\,hv=h\cdot\lambda(c\otimes v)$ by the left counit identity. For the right unit map, $\rho(h\cdot(v\otimes c))=\sum h_{(1)}v\,\varepsilon(h_{(2)})c=h\cdot\rho(v\otimes c)$ by the right counit identity. Pure tensors span, so all three maps are $H$-linear on their full domains. [A1, F5, F6, algebra]

1.5 For the converse, use the regular left modules $H,H$. The action formula gives $b\cdot(1_H\otimes1_H)=\Delta(b)$ and $(ab)\cdot(1_H\otimes1_H)=\Delta(ab)$. By the assumed associativity of this tensor-module action, $\Delta(ab)=(ab)\cdot(1_H\otimes1_H)=a\cdot\bigl(b\cdot(1_H\otimes1_H)\bigr)=a\cdot\Delta(b)=\sum a_{(1)}b_{(1)}\otimes a_{(2)}b_{(2)}=\Delta(a)\Delta(b)$, where the last equality uses the tensor-product algebra multiplication [F3]. The assumed unital action law gives $1_H\otimes1_H=1_H\cdot(1_H\otimes1_H)=\Delta(1_H)$. Thus $\Delta$ is a unital algebra map. [A2, F1, F2, F3]

1.6 The assumed unital $H$-module structure on $k_\varepsilon$ gives $\varepsilon(1_H)=1$ and $\varepsilon(ab)=\varepsilon(a)\varepsilon(b)$ directly from its unit and associativity laws [F2]. Hence $\varepsilon$ is a unital algebra map. [A2, F2]

1.7 Apply $H$-linearity of the canonical associator to the three regular modules at $((1_H\otimes1_H)\otimes1_H)$. The action on this left-parenthesized unit tensor is $(\Delta\otimes\mathrm{id})\Delta(h)$, and applying the associator sends it to $\alpha((\Delta\otimes\mathrm{id})\Delta(h))$ in $H\otimes(H\otimes H)$. On the right-parenthesized unit tensor, the action is $(\mathrm{id}\otimes\Delta)\Delta(h)$. Since the associator sends the unit tensor to the right-parenthesized unit tensor, its $H$-linearity gives $\alpha((\Delta\otimes\mathrm{id})\Delta(h))=(\mathrm{id}\otimes\Delta)\Delta(h)$, precisely coassociativity with the canonical associator [F6]. [A2, F1, F6]

2.1 The naturality squares for $\alpha,\lambda,\rho$ commute on pure tensors because each composite applies the same module maps to the same entries; linearity extends equality to all tensors. By [F7], the underlying vector-space associator and unit maps satisfy the pentagon and triangle. Since every arrow in these diagrams is now $H$-linear, the same equalities hold in $H\text{-}\mathrm{Mod}$. This proves the forward assertion. [F1, F4, F7, step 1.2, step 1.3, step 1.4]

3.1 Apply $H$-linearity of $\lambda:k_\varepsilon\otimes H\to H$ at $1\otimes1_H$: it gives $\sum\varepsilon(h_{(1)})h_{(2)}=h$. Apply $H$-linearity of $\rho:H\otimes k_\varepsilon\to H$ at $1_H\otimes1$: it gives $\sum h_{(1)}\varepsilon(h_{(2)})=h$. These are the two counit identities, so $\varepsilon$ is a counit. Steps 1.5–1.7 prove the other converse axioms. [A2, step 1.5, step 1.6, step 1.7] ∎

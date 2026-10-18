---
id: thm-quasi-bialgebra-modules-form-a-monoidal-category
kind: theorem
title: "Modules over a quasi-bialgebra form a monoidal category"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-quasi-bialgebra-and-quasi-hopf-algebra, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel, def-hh-scalar-and-tensor-conventions, thm-universal-property-of-module-tensor-products, thm-symmetry-and-associativity-over-a-commutative-ring, def-monoidal-category, lem-hh-tensor-coherence-on-elementary-tensors]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Section 5.12, printed pp. 111–112: tensor products of modules, associator, and pentagon."
    - title: "F. Haußer and F. Nill, Doubles of Quasi-Quantum Groups"
      url: "https://arxiv.org/pdf/q-alg/9708023"
      locator: "Section 2.1, PDF p. 5: quasi-bialgebra module tensor product and reassociator; PDF p. 6: pentagon."
verification:
  precheck: pass
---

## Statement

Let $(H,\Delta,\varepsilon,\Phi)$ be a quasi-bialgebra over a field $k$ in the convention of [[def-quasi-bialgebra-and-quasi-hopf-algebra]]. The category $H\text{-}\mathrm{Mod}$ of unital left $H$-modules, with $H$-linear maps, is monoidal. Its tensor product has underlying vector space $V\otimes_k W$ and action
$$h\cdot(v\otimes w)=\sum h_{(1)}v\otimes h_{(2)}w.$$
Its unit object is $k_\varepsilon=k$ with $h\cdot c=\varepsilon(h)c$. The associator from $(U\otimes V)\otimes W$ to $U\otimes(V\otimes W)$ is the canonical vector-space rebracketing followed by the action of $\Phi$:
$$a_{U,V,W}((u\otimes v)\otimes w)=\sum \Phi^1u\otimes(\Phi^2v\otimes\Phi^3w),\qquad \Phi=\sum\Phi^1\otimes\Phi^2\otimes\Phi^3.$$
The left and right unit constraints are the canonical vector-space maps. No quasi-antipode is needed for this monoidal structure.

## Pentagon diagram

The arrows are the indicated rebracketing maps, each acting by the corresponding component of $\Phi$. The proof below verifies their equality by multiplying the induced operators in $H^{\otimes4}$.

```tikzcd
& (((U\otimes V)\otimes W)\otimes X)
  \arrow[rr,"a_{U\otimes V,W,X}"]
  \arrow[dl,"a_{U,V,W}\otimes 1_X"']
&& (U\otimes V)\otimes(W\otimes X)
  \arrow[dr,"a_{U,V,W\otimes X}"]
& \\
(U\otimes(V\otimes W))\otimes X
  \arrow[dr,"a_{U,V\otimes W,X}"']
&&&& U\otimes(V\otimes(W\otimes X)) \\
& U\otimes((V\otimes W)\otimes X)
  \arrow[ur,"1_U\otimes a_{V,W,X}"']
&&&
```

## Facts & Assumptions

**Given:** A field $k$, a quasi-bialgebra $(H,\Delta,\varepsilon,\Phi)$, and unital left $H$-modules $U,V,W,X$.

[F1] [[def-quasi-bialgebra-and-quasi-hopf-algebra]]: $\Delta$ and $\varepsilon$ are unital algebra maps; $(\mathrm{id}\otimes\Delta)\Delta(h)=\Phi(\Delta\otimes\mathrm{id})\Delta(h)\Phi^{-1}$; $\Phi$ satisfies the pentagon identity and $(\mathrm{id}\otimes\varepsilon\otimes\mathrm{id})(\Phi)=1\otimes1$.

[F2] [[def-left-and-right-modules]]: a left module action satisfies $1_Hv=v$ and $(ab)v=a(bv)$.

[F3] [[def-hh-scalar-and-tensor-conventions]]: tensor products are algebraic over $k$, and every tensor is a finite sum of elementary tensors.

[F4] [[thm-universal-property-of-module-tensor-products]]: a balanced bilinear pairing induces a unique map from the tensor product; elementary tensors span it.

[F5] [[thm-symmetry-and-associativity-over-a-commutative-ring]]: the canonical vector-space associator sends $(u\otimes v)\otimes w$ to $u\otimes(v\otimes w)$.

[F6] [[def-monoidal-category]]: a monoidal category has a bifunctor, a unit, natural associator and unit isomorphisms satisfying the pentagon and triangle equations.

[F7] [[def-module-homomorphism-kernel-image-and-cokernel]]: an $H$-linear map preserves addition and the left $H$-action.

[F8] [[lem-hh-tensor-coherence-on-elementary-tensors]]: canonical vector-space rebracketings satisfy naturality, the pentagon and the unit triangle; the canonical unit isomorphisms are natural. We use these coherent identifications when suppressing tensor parentheses.

## Proof

**Proof technique:** direct.

1.1 For left $H$-modules $V,W$, the formula in the Statement is a unital left action: its unit acts as $\Delta(1_H)=1_H\otimes1_H$, and on every elementary tensor the two sides of the module associativity law are respectively $\Delta(h)\Delta(g)$ and $\Delta(hg)$ acting on that tensor. They agree because $\Delta$ is an algebra map. The tensor maps induced by $H$-linear maps are $H$-linear by the same formula on elementary tensors, and preserve identities and compositions. [F1, F2, F3, F4, F7, construct]

1.2 Using the canonical vector-space identifications of [F5] and [F8], the map $a_{U,V,W}$ is invertible because $\Phi$ is invertible; its inverse is the reverse rebracketing followed by $\Phi^{-1}$. It is $H$-linear since, on the underlying triple tensor,
$$\Phi(\Delta\otimes\mathrm{id})\Delta(h)=(\mathrm{id}\otimes\Delta)\Delta(h)\Phi,$$
which is the quasi-coassociativity identity in [F1] multiplied on the right by $\Phi$. [F1, F3, F5, F8, algebra]

1.3 The associator is natural: for module maps $f,g,j$, both composites send an elementary tensor to the same tensor with $f,g,j$ applied to the three components, because these maps commute with each $H$-action. The unit object $k_\varepsilon$ is a left module since $\varepsilon$ is a unital algebra map. The canonical left and right unit maps are natural vector-space isomorphisms by [F8], with inverses $v\mapsto1\otimes v$ and $v\mapsto v\otimes1$. They are $H$-linear by the two counit equations: their values on $c\otimes v$ and $v\otimes c$ reduce respectively to $\sum\varepsilon(h_{(1)})c\,h_{(2)}v=c\,hv$ and $\sum h_{(1)}v\,\varepsilon(h_{(2)})c=c\,hv$. Their inverses are therefore $H$-linear as well. [F1, F2, F3, F4, F7, F8, construct]

2.1 Both pentagon paths go from $((U\otimes V)\otimes W)\otimes X$ to $U\otimes(V\otimes(W\otimes X))$. Under the coherent vector-space identifications of [F8], the short composite acts by $(\mathrm{id}\otimes\mathrm{id}\otimes\Delta)(\Phi)(\Delta\otimes\mathrm{id}\otimes\mathrm{id})(\Phi)$. The long composite acts by $(1\otimes\Phi)(\mathrm{id}\otimes\Delta\otimes\mathrm{id})(\Phi)(\Phi\otimes1)$. Each coproduct appears where a component of $\Phi$ acts on a two-factor module, by step 1.1; later operators multiply on the left. The products are equal by [F1], and the underlying rebracketing paths agree by [F8], so the pentagon commutes as an equality of $H$-linear maps. [F1, F3, F8, step 1.1, step 1.2, algebra]

2.2 In the triangle equation, $a_{U,k_\varepsilon,V}$ acts, after rebracketing, by $(\mathrm{id}\otimes\varepsilon\otimes\mathrm{id})(\Phi)=1\otimes1$. Both composites from $(U\otimes k)\otimes V$ to $U\otimes V$ therefore send $(u\otimes c)\otimes v$ to $cu\otimes v=u\otimes cv$, by the vector-space unit triangle in [F8]. Elementary tensors span, so the triangle commutes. [F1, F3, F8, step 1.3]

3.1 Steps 1.1–2.2 provide the bifunctor, unit, natural isomorphisms, pentagon, and triangle required by [F6]; hence $H\text{-}\mathrm{Mod}$ is monoidal with the stated convention. [F6, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎

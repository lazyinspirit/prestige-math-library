---
id: prop-weak-bialgebra-module-tensor-product-is-delta-one-image
kind: proposition
title: "Weak-bialgebra module tensor products are relative tensor products"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-weak-bialgebra-and-weak-hopf-algebra, lem-weak-bialgebra-source-and-target-bases, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel, def-hh-scalar-and-tensor-conventions, thm-universal-property-of-module-tensor-products, def-monoidal-category, thm-symmetry-and-associativity-over-a-commutative-ring]
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
      locator: "Exercise 7.23.5, printed pp. 187–188: the target-base relative tensor product and target counital unit."
    - title: "P. Schauenburg, Weak Hopf Algebras and Quantum Groupoids"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/86703"
      locator: "Section 5, printed pp. 179–180: the separability-idempotent identification of the image tensor product and the relative tensor product."
    - title: "G. Böhm and K. Szlachányi, Weak Hopf Algebras II: Representation Theory, Dimensions and the Markov Trace"
      url: "https://arxiv.org/pdf/math/9906045"
      locator: "Section 2.1, printed p. 4: the Δ(1)-image tensor product and unit object for finite-dimensional left modules over a weak-Hopf algebra."
    - title: "G. Böhm, S. Caenepeel, and K. Janssen, Weak Bialgebras and Monoidal Categories"
      url: "https://arxiv.org/pdf/1103.2261"
      locator: "Sections 1–2, PDF pp. 3–16 (especially Theorems 2.3–2.4); Section 4, PDF pp. 20–22 (Propositions 4.3–4.4 and Corollary 4.5): monoidal module category, target base, and separable-base relative tensor product."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $H$ be a weak bialgebra over a field $k$, and let $V,W$ be unital left $H$-modules. Give $V$ the right $H_t$-action $v\triangleleft x=\varepsilon_s'(x)v$ and give $W$ its left $H_t$-action by restriction. The diagonal action of $H$ descends to the balanced tensor product $V\otimes_{H_t}W$. The map
$$[v\otimes w]\longmapsto\Delta(1)\cdot(v\otimes w)=\sum1_{(1)}v\otimes1_{(2)}w$$
is a natural isomorphism
$$V\otimes_{H_t}W\ \cong\ \Delta(1)(V\otimes_kW).$$
With this action, the category of unital left $H$-modules is monoidal: its associator is the restriction of the vector-space rebracketing map, and its unit is $H_t$ with action $h\cdot x=\varepsilon_t(hx)$. This proposition applies in particular to a weak Hopf algebra; its antipode is not used.

## Image and quotient

The quotient map $q:V\otimes_kW\to V\otimes_{H_t}W$ and the idempotent $P=\Delta(1)|_{V\otimes W}$ fit into the following diagram. The lower arrow is the restriction of $q$ and is an isomorphism; the proof constructs its inverse.

```tikzcd
V\otimes_k W \arrow[r,"q"] \arrow[d,"P"'] & V\otimes_{H_t}W \\
\operatorname{im}P \arrow[ur,"q|_{\operatorname{im}P}"'] &
```

## Facts & Assumptions

**Given:** A weak bialgebra $H$, unital left $H$-modules $V,W$, and the source and target counital maps.

[F1] [[def-weak-bialgebra-and-weak-hopf-algebra]]: $\Delta$ is multiplicative; $\Delta(1)$ satisfies the weak-unit identities; $\varepsilon$ satisfies the weak-counit identities; and $\varepsilon_t,\varepsilon_s,\varepsilon_s'$ have the displayed formulas.

[F2] [[lem-weak-bialgebra-source-and-target-bases]]: $H_t,H_s$ are commuting unital subalgebras, $\varepsilon_s'|_{H_t}$ is inverse anti-isomorphic to $\varepsilon_t|_{H_s}$, $e=(\varepsilon_t\otimes\mathrm{id})\Delta(1)$ is a separability idempotent, and $\Delta(1)=\sum\varepsilon_s'(e^1)\otimes e^2$.

[F3] [[def-left-and-right-modules]]: unital left and right module actions satisfy their unit and associativity laws.

[F4] [[def-hh-scalar-and-tensor-conventions]]: tensor products are algebraic and each element is a finite sum of elementary tensors.

[F5] [[thm-universal-property-of-module-tensor-products]]: $V\otimes_{H_t}W$ is the quotient by the span of $(v\triangleleft x)\otimes w-v\otimes(xw)$, and elementary classes span it.

[F6] [[def-monoidal-category]]: a monoidal category has a bifunctor, unit, natural associator/unit isomorphisms, and the pentagon and triangle equations.

[F7] [[thm-symmetry-and-associativity-over-a-commutative-ring]]: the canonical vector-space associator sends $(U\otimes V)\otimes W$ to $U\otimes(V\otimes W)$.

[F8] [[def-module-homomorphism-kernel-image-and-cokernel]]: an $H$-linear map preserves addition and the left $H$-action.

## Proof

**Proof technique:** direct.

1.1 Put $E=\Delta(1)$. Multiplicativity gives $E^2=E$, $\Delta(h)E=\Delta(h)$, and $E\Delta(h)=\Delta(h)$. Thus the diagonal action on $V\otimes W$ restricts to a unital action on $\operatorname{im}P$: $1_H$ acts there as $P$, and the action law follows from $\Delta(hg)=\Delta(h)\Delta(g)$. [F1, F3, F4, construct]

1.2 The restriction $\varepsilon_s'|_{H_t}$ is an anti-isomorphism, so $v\triangleleft x=\varepsilon_s'(x)v$ is a right $H_t$-module action. For the separability idempotent $e=\sum e^1\otimes e^2$ of [F2], define $P_e(v\otimes w)=\sum(v\triangleleft e^1)\otimes e^2w$. The identity $\Delta(1)=\sum\varepsilon_s'(e^1)\otimes e^2$ gives $P_e=P$. The relation $\sum xe^1\otimes e^2=\sum e^1\otimes e^2x$ implies $P_e((v\triangleleft x)\otimes w)=P_e(v\otimes xw)$, so $P$ kills every balancing relation. [F1, F2, F3, F4, algebra]

2.1 In the balanced quotient, $qP_e(v\otimes w)=\sum[v\triangleleft e^1\otimes e^2w]=\sum[v\otimes e^1e^2w]=[v\otimes w]$, because $\sum e^1e^2=1$. Since $P=P_e$ is idempotent, $q|_{\operatorname{im}P}$ is inverse to the map $[v\otimes w]\mapsto P(v\otimes w)$; hence it is an isomorphism. Transporting the image action through this isomorphism gives $h\cdot[v\otimes w]=\sum[h_{(1)}v\otimes h_{(2)}w]$, since $P\Delta(h)=\Delta(h)P=\Delta(h)$. Given $H$-linear maps $f:V\to V'$ and $g:W\to W'$, the bilinear pairing $(v,w)\mapsto[f(v)\otimes g(w)]$ is balanced: for $x\in H_t$, [F8] gives $f(v\triangleleft x)=f(\varepsilon_s'(x)v)=\varepsilon_s'(x)f(v)=f(v)\triangleleft x$ and $g(xw)=xg(w)$. Thus [F5] induces $T_{f,g}:V\otimes_{H_t}W\to V'\otimes_{H_t}W'$, $T_{f,g}([v\otimes w])=[f(v)\otimes g(w)]$. It is $H$-linear because $T_{f,g}(h\cdot[v\otimes w])=\sum[f(h_{(1)}v)\otimes g(h_{(2)}w)]=\sum[h_{(1)}f(v)\otimes h_{(2)}g(w)]=h\cdot T_{f,g}([v\otimes w])$. These maps preserve identities and composition on elementary classes, which span the quotient, so they define a bifunctor. The quotient-to-image isomorphism is natural because $(f\otimes g)(P(v\otimes w))=\sum1_{(1)}f(v)\otimes1_{(2)}g(w)=P(f(v)\otimes g(w))$. [F1, F2, F4, F5, F8, step 1.1, step 1.2, algebra]

2.2 The weak-unit identities give $(\Delta\otimes\mathrm{id})E=(\mathrm{id}\otimes\Delta)E=(E\otimes1)(1\otimes E)=(1\otimes E)(E\otimes1)$. Thus the two projections used for either parenthesization of three factors commute and have common image; the canonical rebracketing restricts to an isomorphism of these images, and is $H$-linear because $\Delta$ is coassociative. For four factors, repeated use of this identity shows that each of the five parenthesized tensor products is the image of the same iterated coproduct $D_4=(\Delta\otimes\Delta)\Delta(1)$ on $U\otimes V\otimes W\otimes X$; coassociativity makes every iterated coproduct equal to $D_4$. Each associator is the restriction of canonical vector-space rebracketing, so the two pentagon composites send every elementary quadruple tensor to the same rebracketed tensor. Elementary tensors span, hence the pentagon commutes. [F1, F3, F4, F6, F7, step 1.1, algebra]

3.1 The target base $H_t$ is a unital left $H$-module under $h\cdot x=\varepsilon_t(hx)$: $\varepsilon_t(x)=x$ for $x\in H_t$, and $\varepsilon_t(h\varepsilon_t(gx))=\varepsilon_t(hgx)$ by [F2]. Its right $H_t$-action induced by $\varepsilon_s'$ is ordinary multiplication, because $\varepsilon_t(\varepsilon_s'(x)z)=zx$ for $x,z\in H_t$. The canonical relative-product unit maps are $H_t\otimes_{H_t}V\to V$, $[x\otimes v]\mapsto xv$, and $V\otimes_{H_t}H_t\to V$, $[v\otimes x]\mapsto v\triangleleft x$. They are balanced and inverse to $v\mapsto[1\otimes v]$ and $v\mapsto[v\otimes1]$, respectively. Write the two maps as $\lambda$ and $\rho$. The first identity in [F2] gives $\lambda(h\cdot[x\otimes v])=\sum\varepsilon_t(h_{(1)}x)h_{(2)}v=(hx)v=h\lambda([x\otimes v])$. For the right unit map the order is $\rho(h\cdot[v\otimes x])=\sum\varepsilon_s'(\varepsilon_t(h_{(2)}x))h_{(1)}v=h\varepsilon_s'(x)v=h\rho([v\otimes x])$, using the second identity in [F2]. Thus both unit maps are $H$-linear on elementary balanced classes and hence on their full domains. [F1, F2, F3, F5, step 2.1, algebra]

4.1 The triangle maps agree on every elementary balanced class: both send $[(v\otimes x)\otimes w]$ to $v\triangleleft x\otimes w=[v\otimes xw]$. For $H$-linear maps $f,g,j$, both naturality composites for the associator send each elementary triple class to the class with $f,g,j$ applied to its three entries, with only the indicated rebracketing changed. The unit naturality squares commute because $f(xv)=xf(v)$ and $f(v\triangleleft x)=f(v)\triangleleft x$ by [F8]. These classes span, so the maps are natural. Thus the tensor product, unit, associator, and unit maps satisfy the requirements of [F6], proving the monoidal assertion. [F2, F5, F6, F7, F8, step 2.1, step 2.2, step 3.1, algebra] ∎

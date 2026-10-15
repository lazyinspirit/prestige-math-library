---
id: lem-hh-bialgebra-compatibility-equivalence
kind: lemma
title: "The two standard bialgebra compatibility formulations are equivalent"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-bialgebra-and-bialgebra-map, def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, lem-hh-tensor-product-coalgebra, prop-functoriality-of-module-tensor-products, thm-tensor-product-of-algebras-over-a-commutative-ring, thm-unit-isomorphisms-for-module-tensor-products]
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
      locator: "§1, printed p. 6: the stated equivalence between algebra-map and coalgebra-map compatibility"
    - title: "Thomas Rüd, Hopf Algebras and rooted trees, Practical work in mathematics"
      url: "https://math.mit.edu/~rud/TeXthings/HopfAlgebras-1.1.pdf"
      locator: "Proposition 2, §2.4, PDF p. 12 (printed p. 11): all four compatibility equations and the translation to coalgebra maps"

---
## Statement

Let $H$ be a $k$-vector space with a unital associative algebra structure $(m,u)$ and a counital coassociative coalgebra structure $(\Delta,\varepsilon)$. Give $H\otimes H$ the tensor-product coalgebra structure of [[lem-hh-tensor-product-coalgebra]], and give $k$ its coalgebra structure $\Delta_k(\lambda)=\lambda(1\otimes1)$, $\varepsilon_k(\lambda)=\lambda$. Then the following are equivalent:

1. $\Delta:H\to H\otimes H$ and $\varepsilon:H\to k$ are unital algebra homomorphisms, where $H\otimes H$ has multiplication $(a\otimes b)(c\otimes d)=ac\otimes bd$.
2. $m:H\otimes H\to H$ and $u:k\to H$ are coalgebra maps.

This equivalence is valid over every field and uses no dimension assumption.

## Facts & Assumptions

**Given:** The algebra and coalgebra structure maps above, the tensor-product coalgebra formula, and the tensor-product algebra formula.

[F1] A coalgebra map $f:C\to D$ is linear and satisfies $\Delta_Df=(f\otimes f)\Delta_C$ and $\varepsilon_Df=\varepsilon_C$ ([[def-hh-coalgebra-and-coalgebra-map]]).

[F2] Every element of $V\otimes W$ is a finite sum of elementary tensors, and tensor powers are associated using the displayed canonical associators ([[def-hh-scalar-and-tensor-conventions]]).

[F3] A bialgebra over $k$ requires $\Delta$ and $\varepsilon$ to be unital algebra homomorphisms, using the tensor-product algebra multiplication ([[def-hh-bialgebra-and-bialgebra-map]]).

[F4] The tensor-product coalgebra has $\Delta_{H\otimes H}(a\otimes b)=\sum(a_{(1)}\otimes b_{(1)})\otimes(a_{(2)}\otimes b_{(2)})$ and $\varepsilon_{H\otimes H}(a\otimes b)=\varepsilon(a)\varepsilon(b)$ ([[lem-hh-tensor-product-coalgebra]]).

[F5] The tensor-product algebra multiplication satisfies $(a\otimes b)(c\otimes d)=ac\otimes bd$ with unit $1\otimes1$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[F6] The unit isomorphism $k\otimes k\to k$ sends $r\otimes s$ to $rs$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F7] The associator on iterated tensor products is coherent ([[lem-hh-tensor-coherence-on-elementary-tensors]]).

[F8] Linear maps induce tensor-product linear maps by $(f\otimes g)(v\otimes w)=f(v)\otimes g(w)$, uniquely and functorially ([[prop-functoriality-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 The stated maps make $k$ a coalgebra: for $r\in k$, both iterated coproducts of $\Delta_k(r)=r(1\otimes1)$ equal $r(1\otimes1\otimes1)$ under the coherent associator [F7], and either counit contraction equals $r$ under the unit isomorphism [F6]. The induced tensor maps are well-defined by [F8]. [given, F6, F7, F8, algebra]

1.2 The maps in condition 1 are unital algebra homomorphisms exactly when they preserve products and units, as required in the bialgebra definition [F3]. With the tensor-product algebra [F5], these requirements are precisely $\Delta(ab)=\Delta(a)\Delta(b)$, $\Delta(1)=1\otimes1$, $\varepsilon(ab)=\varepsilon(a)\varepsilon(b)$, and $\varepsilon(1)=1$. [given, F3, F5, algebra]

1.3 The comultiplication equation for $m$ to be a coalgebra map [F1], evaluated on $a\otimes b$, is $\Delta(m(a\otimes b))=(m\otimes m)\Delta_{H\otimes H}(a\otimes b)=\sum a_{(1)}b_{(1)}\otimes a_{(2)}b_{(2)}$. By [F4]–[F5], this is exactly $\Delta(ab)=\Delta(a)\Delta(b)$. Both sides are linear in $a\otimes b$ and elementary tensors span $H\otimes H$ by [F2], while $m\otimes m$ is well-defined by [F8]. Thus the map equation holds exactly when that multiplicativity equation holds for all $a,b$. [given, F1, F2, F4, F5, F8, algebra]

1.4 The counit equation for $m$ to be a coalgebra map [F1] is $\varepsilon(m(a\otimes b))=\varepsilon_{H\otimes H}(a\otimes b)$, which by [F4] is $\varepsilon(ab)=\varepsilon(a)\varepsilon(b)$. Since elementary tensors span [F2], equality on all of them is equivalent to equality of the linear maps. [given, F1, F2, F4]

2.1 For $u:k\to H$, the coalgebra-map equations [F1] at $\lambda\in k$ are $\Delta(u(\lambda))=(u\otimes u)\Delta_k(\lambda)$ and $\varepsilon(u(\lambda))=\varepsilon_k(\lambda)$. By linearity and the formulas in the Statement, these become $\lambda\Delta(1)=\lambda(1\otimes1)$ and $\lambda\varepsilon(1)=\lambda$, using the source coalgebra established in step 1.1. They hold for every $\lambda$ exactly when $\Delta(1)=1\otimes1$ and $\varepsilon(1)=1$. Steps 1.3–1.4 show that $m$ is a coalgebra map exactly when the two product equations hold; the two unit equations supply the remaining equations in step 1.2. Therefore condition 2 holds exactly when condition 1 holds. [given, F1, F8, step 1.1, step 1.2, step 1.3, step 1.4] ∎

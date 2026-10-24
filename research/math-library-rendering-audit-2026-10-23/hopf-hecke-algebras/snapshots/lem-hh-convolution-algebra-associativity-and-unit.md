---
id: lem-hh-convolution-algebra-associativity-and-unit
kind: lemma
title: "Convolution of linear maps is associative and unital"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions, def-algebra-over-a-commutative-ring, lem-hh-tensor-coherence-on-elementary-tensors, prop-functoriality-of-module-tensor-products]
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
      locator: 'Proposition 1.4, printed p. 14: convolution on Hom(C,A), associativity and unit $u\varepsilon$'
    - title: "Thomas Rüd, Hopf Algebras and rooted trees, Practical work in mathematics"
      url: "https://math.mit.edu/~rud/TeXthings/HopfAlgebras-1.1.pdf"
      locator: "§2.3.1, PDF pp. 9–10: the convolution multiplication on maps from a coalgebra to an algebra"
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§2.1.3–2.2.1, PDF pp. 3–4: convolution equations, counit, and antipode uniqueness"

---
## Statement

Let $k$ be a field, let $C$ be a $k$-coalgebra with comultiplication $\Delta_C$ and counit $\varepsilon_C$, and let $A$ be a unital associative $k$-algebra with multiplication $m_A$ and unit map $u_A$. On the $k$-vector space $\operatorname{Hom}_k(C,A)$ define

$$f*g:=m_A(f\otimes g)\Delta_C. $$

This is a well-defined associative multiplication with two-sided unit $u_A\varepsilon_C$. The assertion holds without a finite-dimensionality assumption on either $C$ or $A$.

## Facts & Assumptions

**Given:** $k$ is a field, $C$ has linear maps satisfying the coassociativity and counit equations, and $A$ has an associative multiplication and a two-sided unit.

[F1] Every tensor is a finite sum of elementary tensors, and tensor powers are associated using the canonical coherent identifications ([[def-hh-scalar-and-tensor-conventions]]).

[F2] Linear maps induce unique tensor-product linear maps, with $(f\otimes g)(c\otimes d)=f(c)\otimes g(d)$ ([[prop-functoriality-of-module-tensor-products]]).

[F3] A $k$-algebra is unital and associative, and its multiplication is bilinear ([[def-algebra-over-a-commutative-ring]]).

[F4] Reassociation maps on iterated tensor products are coherent ([[lem-hh-tensor-coherence-on-elementary-tensors]]).

[F5] A coalgebra comultiplication is coassociative and its counit satisfies both contraction identities ([[def-hh-coalgebra-and-coalgebra-map]]).

## Proof

**Proof technique:** direct.

1.1 For $f,g\in\operatorname{Hom}_k(C,A)$, [F2] gives the linear map $f\otimes g:C\otimes C\to A\otimes A$; composing it with $\Delta_C$ and $m_A$ defines a linear map $f*g:C\to A$. The finite-sum tensor convention [F1], bilinearity of tensoring maps, and bilinearity of $m_A$ make $*$ bilinear in $f,g$. [given, F1, F2, F3, construct]

1.2 For $f,g,h\in\operatorname{Hom}_k(C,A)$ and $c\in C$, write the finite iterated coproduct as $\Delta_C^{(2)}(c)=\sum c_{(1)}\otimes c_{(2)}\otimes c_{(3)}$. Coassociativity from [F5] says this is the same tensor whether formed by $\Delta_C\otimes\mathrm{id}$ or $\mathrm{id}\otimes\Delta_C$, with the canonical reassociation justified by [F4]; associativity of $m_A$ then gives $((f*g)*h)(c)=\sum (f(c_{(1)})g(c_{(2)}))h(c_{(3)})=\sum f(c_{(1)})(g(c_{(2)})h(c_{(3)}))=(f*(g*h))(c)$. Thus $*$ is associative. [given, F3, F4, F5, algebra]

1.3 The left product with $u_A\varepsilon_C$ satisfies $((u_A\varepsilon_C)*f)(c)=\sum\varepsilon_C(c_{(1)})f(c_{(2)})=f(c)$ by the left counit equation in [F5] and the unit law in $A$; the right product satisfies $(f*(u_A\varepsilon_C))(c)=\sum f(c_{(1)})\varepsilon_C(c_{(2)})=f(c)$ by the right counit equation. Hence $u_A\varepsilon_C$ is a two-sided unit. [given, F3, F5, algebra]

2.1 Steps 1.1–1.3 define a bilinear associative multiplication and verify its two-sided unit on every $c\in C$. No step requires a basis, a dual, or a dimension bound, so the result holds in arbitrary dimension. [step 1.1, step 1.2, step 1.3] ∎

---
id: def-graded-bialgebra-and-hopf-algebra
kind: definition
title: "Graded coalgebras, bialgebras and Hopf algebras over a commutative ring"
status: draft
origin: pipeline
pipeline_run: "frontier-43-complex-representation-15"
dependency_level: 0
deps:
  - def-algebra-over-a-commutative-ring
  - def-graded-ring-and-graded-module
  - def-tensor-product-of-modules-by-generators-and-relations
  - thm-tensor-product-of-algebras-over-a-commutative-ring
  - thm-symmetry-and-associativity-over-a-commutative-ring
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Darij Grinberg and Victor Reiner, Hopf Algebras in Combinatorics (complete author-hosted lecture-notes book, 2020)"
      url: "https://www.cip.ifi.lmu.de/~grinberg/algebra/HopfComb.pdf"
      locator: "§§1.1–1.4, printed pp. 6–25: algebras, coalgebras, tensor-product structures, bialgebras, convolution, antipodes and Hopf algebras; the base ring is an arbitrary commutative ring."
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete university-hosted PDF)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5 Example 25, printed pp. 91–93: the diagonal comultiplication and counit make the ring of symmetric functions a cocommutative Hopf algebra over Z."
---

## Definition

Let $k$ be a commutative ring and let $H=\bigoplus_{n\geq 0}H_n$ be a nonnegatively graded $k$-module ([[def-graded-ring-and-graded-module]]). A **graded $k$-algebra** structure on $H$ consists of a $k$-bilinear associative multiplication $m:H\otimes_k H\to H$ and a unit $k$-algebra map $u:k\to H$ such that $m(H_i\otimes H_j)\subseteq H_{i+j}$ and $u(k)\subseteq H_0$ ([[def-algebra-over-a-commutative-ring]]).

A **graded coalgebra** structure on $H$ consists of $k$-linear maps $\Delta:H\to H\otimes_k H$ and $\varepsilon:H\to k$, where $k$ is concentrated in degree $0$, such that $\Delta$ has degree $0$, $\varepsilon(H_n)=0$ for $n>0$, and

$$
(\operatorname{id}\otimes\Delta)\Delta=(\Delta\otimes\operatorname{id})\Delta,\qquad (\varepsilon\otimes\operatorname{id})\Delta=\operatorname{id}=(\operatorname{id}\otimes\varepsilon)\Delta,
$$

using the canonical identifications $k\otimes_k H\cong H\cong H\otimes_k k$ ([[def-tensor-product-of-modules-by-generators-and-relations]]). Here degree $0$ means $\Delta(H_n)\subseteq\bigoplus_{a+b=n}H_a\otimes_k H_b$.

If $H$ is both a graded algebra and a graded coalgebra and $\Delta$ and $\varepsilon$ are $k$-algebra homomorphisms, then $H$ is a **graded bialgebra**. Equivalently, the multiplication and unit maps $m$ and $u$ are morphisms of graded coalgebras: on $H\otimes_k H$ use the tensor-product algebra structure $ (a\otimes b)(c\otimes d)=ac\otimes bd$ and the tensor-product coalgebra structure with comultiplication $(\operatorname{id}\otimes\tau\otimes\operatorname{id})(\Delta\otimes\Delta)$ and counit $\varepsilon\otimes\varepsilon$, where $\tau(b\otimes c)=c\otimes b$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]], [[thm-symmetry-and-associativity-over-a-commutative-ring]]). Indeed, the coalgebra-map identities for $m$ are exactly $\Delta(ab)=\Delta(a)\Delta(b)$ and $\varepsilon(ab)=\varepsilon(a)\varepsilon(b)$, while the identities for $u$ are exactly $\Delta(1_H)=1_H\otimes1_H$ and $\varepsilon(1_H)=1$; these are the multiplicativity and unit equations for $\Delta$ and $\varepsilon$. The bialgebra is **connected** when the unit map restricts to an isomorphism $u:k\xrightarrow{\sim}H_0$; this is the precise meaning of $H_0=k\cdot 1_H$ used for connected graded bialgebras.

For $f,g\in\operatorname{Hom}_k(H,H)$, their **convolution product** is $f*g:=m(f\otimes g)\Delta$. It is associative: its two iterated products are obtained from $(\Delta\otimes\operatorname{id})\Delta$ and $(\operatorname{id}\otimes\Delta)\Delta$ followed by $m(m\otimes\operatorname{id})$ and $m(\operatorname{id}\otimes m)$, respectively, which agree by coassociativity and associativity. Its unit is $u\varepsilon$, since the two counit identities give $(u\varepsilon)*f=f=f*(u\varepsilon)$. Thus convolution makes $\operatorname{Hom}_k(H,H)$ a unital associative $k$-algebra.

An **antipode** is a $k$-linear map $S:H\to H$ satisfying

$$
m(S\otimes\operatorname{id})\Delta=u\varepsilon=m(\operatorname{id}\otimes S)\Delta;
$$

equivalently, $S$ is a two-sided convolution inverse of $\operatorname{id}_H$. A graded bialgebra equipped with an antipode is a **graded Hopf algebra**. If $k$ is a field and $H$ is commutative, forgetting the grading gives the usual commutative Hopf-algebra data: the same multiplication, unit, comultiplication, counit and antipode satisfy the same equations, and the antipode is multiplicative. For the latter claim, $S(1)=1$ follows by evaluating the antipode identity at $1$. Give $\operatorname{Hom}_k(H\otimes_kH,H)$ its convolution product from the tensor-product coalgebra structure and multiplication of $H$. Since $m$ is a coalgebra map, $S\circ m$ is a two-sided convolution inverse of $m$. The map $G=m(S\otimes S)\tau$ is another: for $a,b\in H$, its convolution product with $m$ in either order is $\varepsilon(a)\varepsilon(b)1$, since the Sweedler components reorder by commutativity and the two antipode identities give $\sum S(a_{(1)})a_{(2)}=\varepsilon(a)1=\sum a_{(1)}S(a_{(2)})$ and the corresponding identities for $b$. Uniqueness of a two-sided inverse gives $S(ab)=S(b)S(a)=S(a)S(b)$. No commutativity of $H$, field hypothesis, or choice principle is required for the definitions above.

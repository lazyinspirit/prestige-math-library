---
id: def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
kind: definition
title: "Subobject-first Hall completion and quantum tori for finite quivers"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form
  - def-untwisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §§2.1, 3.3–3.4"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, §§1.1, 1.3 and 3.3"
      url: "https://arxiv.org/pdf/math/0611617"
verification:
  precheck: n/a
---

## Definition

Fix $Q$, $k=\mathbb F_q$, and $Z$ as in
[[def-finite-acyclic-quiver-stability-data]]. For a representation $M$, write
$a_M=|\operatorname{Aut}_{\mathcal A_Q}(M)|$ and let $\delta_M$ be the basis
function of its isomorphism class. Let $H_Q$ be the direct sum over isomorphism
classes of $\mathcal A_Q$, with the quotient-first untwisted Hall product of
[[def-untwisted-hall-algebra]]. In that convention $[A]*_{qf}[B]$ counts
sequences $0\to B\to L\to A\to0$. Define the **subobject-first** product
by $f\star g:=g*_{qf}f$. Then
$$(f\star g)(L)=\sum_{U\subseteq L} f(U)g(L/U),$$
where the sum is over subobject classes of $L$: monomorphisms into $L$ modulo
isomorphisms of their domains commuting with the monomorphism. Distinct
embedded subobjects are counted separately even when their domains are
isomorphic. Put
$\kappa_M=a_M\delta_M$.

For $\mathbf d\in\mathbb N^{Q_0}$, let $H_{Q,\mathbf d}$ be the span of
classes of dimension vector $\mathbf d$. It is finite-dimensional: the
representation set on the standard spaces $k^{d_i}$ is finite. Define the
dimension completion
$$\widehat H_Q=\prod_{\mathbf d\in\mathbb N^{Q_0}}H_{Q,\mathbf d}.$$
The product is extended degreewise; each coefficient uses finitely many
decompositions $\mathbf d=\mathbf a+\mathbf b$. There is no analytic
convergence assertion. The all-object and phase factors are
$$A_{\mathrm{all}}=\sum_{[M]}\delta_M,\qquad S_Z(\phi)=\delta_0+\sum_{\substack{[M]\\M\ne0,\ \phi_Z(M)=\phi,\ M\ Z\text{-semistable}}}\delta_M.$$
Each is an element of $\widehat H_Q$ because each homogeneous component has
finite support.

Let $t=\sqrt q>0$ and $K_q=\mathbb Q(\sqrt q)$. Define the completed Euler
torus and skew torus to have bases $X^{\mathbf d}$ and $x^{\mathbf d}$,
respectively, with products
$$X^{\mathbf d}X^{\mathbf e}=q^{-\chi_Q(\mathbf e,\mathbf d)}X^{\mathbf d+\mathbf e},\qquad x^{\mathbf d}*x^{\mathbf e}=t^{-\langle\mathbf e,\mathbf d\rangle}x^{\mathbf d+\mathbf e}.$$
Their completions use the same dimension product. The next theorem proves
associativity and gives the continuous Euler and skew integration maps.

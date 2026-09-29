---
id: lem-tangent-space-product
kind: lemma
title: "Tangent spaces of products over a field"
status: draft
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-scheme
  - def-scheme-over-base
  - def-dual-numbers-scheme
  - thm-affine-scheme-ring-anti-equivalence
  - thm-coproduct-property-of-tensor-products-of-commutative-algebras
  - thm-fibre-products-of-schemes-exist
  - lem-tangent-vectors-as-dual-number-points
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Exercise 4-4 and its solution"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Let $k$ be a field, let $X,Y$ be $k$-schemes, and let $x\in X$, $y\in Y$ be
$k$-rational points. Write
$p_X:X\times_kY\to X$ and $p_Y:X\times_kY\to Y$ for the projections. The
canonical map
$$T_{(x,y)}(X\times_kY)\longrightarrow T_xX\oplus T_yY$$
that sends a tangent vector, represented by a based map
$\gamma:\operatorname{Spec}(k[\epsilon]/(\epsilon^2))\to X\times_kY$, to
$(p_X\circ\gamma,p_Y\circ\gamma)$ is a $k$-linear isomorphism. No finite-type,
reducedness, or smoothness hypothesis is needed.

## Facts & Assumptions

**Given:** A field $k$, $k$-schemes $X,Y$, and points $x,y$ whose residue fields are identified with $k$ by their structure maps.

[F1] [[def-scheme]]: each point of a scheme has an open neighbourhood that is an affine scheme with the restricted structure sheaf.

[F2] [[def-scheme-over-base]]: a $k$-scheme and its morphisms to other $k$-schemes have structure maps to $\operatorname{Spec}k$ and commute with those maps.

[F3] [[def-dual-numbers-scheme]]: the dual-numbers scheme is $\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$.

[F4] [[thm-affine-scheme-ring-anti-equivalence]]: a map between affine schemes corresponds contravariantly to a ring map; in particular, based maps from the dual-numbers scheme into an affine chart correspond to $k$-algebra maps from its coordinate ring to $k[\epsilon]/(\epsilon^2)$.

[F5] [[thm-fibre-products-of-schemes-exist]]: for affine covers of $k$-schemes $X,Y$, the product $X\times_kY$ has an open affine cover with charts $\operatorname{Spec}(A\otimes_kB)$ for charts $\operatorname{Spec}A\subseteq X$ and $\operatorname{Spec}B\subseteq Y$.

[F6] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]: given $k$-algebra maps $A\to C$ and $B\to C$, there is a unique $k$-algebra map $A\otimes_kB\to C$ whose restrictions to $A$ and $B$ are the given maps; it sends $a\otimes b$ to the product of their images.

[F7] [[lem-tangent-vectors-as-dual-number-points]]: for any $k$-scheme at a $k$-rational point, its tangent vectors are naturally the based dual-number maps, as a $k$-vector space.

[F8] [[lem-tangent-vectors-as-dual-number-points]]: under the same identification, a based local map $a\mapsto a(x)+\epsilon D(a)$ is the $k$-derivation $D$ representing the tangent vector.

## Proof

**Proof technique:** direct.

1.1 By [F1], choose affine open neighbourhoods $U=\operatorname{Spec}A$ of $x$ and $V=\operatorname{Spec}B$ of $y$. Their structure maps make $A$ and $B$ $k$-algebras by [F2]. The fibre-product theorem [F5] gives an open affine neighbourhood of $(x,y)$ in $X\times_kY$ with coordinate ring $R=A\otimes_kB$; the two projections correspond to its canonical $k$-algebra maps from $A$ and $B$. [F1, F2, F5, given, algebra]

2.1 Let $e_x:A\to k$ and $e_y:B\to k$ be the maps of the rational points, and put $D=k[\epsilon]/(\epsilon^2)$. By [F7] and [F4], a tangent vector at $x$ or $y$ is represented in these charts by a $k$-algebra map $\alpha:A\to D$ or $\beta:B\to D$, with reductions $e_x$ and $e_y$. Conversely, any such pair determines by [F6] a unique $k$-algebra map $\varphi:R\to D$ satisfying $\varphi(a\otimes b)=\alpha(a)\beta(b)$. Its reduction is $a\otimes b\mapsto e_x(a)e_y(b)$, so it is based at $(x,y)$. Restriction along the two projection maps recovers $\alpha$ and $\beta$; therefore post-composition by the projections gives a bijection between the based dual-number maps of the product and pairs of based dual-number maps of the factors. [F3, F4, F5, F6, F7, step 1.1, given, algebra]

3.1 Write $\alpha(a)=e_x(a)+\epsilon D_x(a)$ and $\beta(b)=e_y(b)+\epsilon D_y(b)$; [F8] says $D_x,D_y$ are the derivations representing the two tangent vectors. Since $\epsilon^2=0$, the map of step 2.1 satisfies $$\varphi(a\otimes b)=e_x(a)e_y(b)+ \epsilon\bigl(e_y(b)D_x(a)+e_x(a)D_y(b)\bigr).$$ Thus its coefficient derivation is linear in $(D_x,D_y)$. Conversely, restriction of the coefficient derivation of $\varphi$ along the two projection maps returns $D_x,D_y$. The bijection in step 2.1 and its inverse are therefore $k$-linear, proving the asserted natural vector-space isomorphism. Its construction uses only the projections, so it is independent of the chosen affine neighbourhoods. [F6, F7, F8, step 1.1, step 2.1, given, algebra]

4.1 If either factor has zero tangent space, its based maps consist only of the constant map at that point, and step 2.1 pairs it with the based maps of the other factor; if both tangent spaces are zero, the product tangent space is zero as well. For a one-dimensional tangent factor with generator derivation $D_x$, step 3.1 sends $(D_x,0)$ to the coefficient derivation $a\otimes b\mapsto e_y(b)D_x(a)$; a generator $D_y$ in the other factor is sent to $a\otimes b\mapsto e_x(a)D_y(b)$. Each scalar multiple is sent to the same scalar multiple; no one-dimensional exception occurs. The formula also covers nonsmooth and nonreduced schemes because it uses only their based dual-number maps. The zero vector is the constant based map, and the zero pair corresponds to the constant map at $(x,y)$. If either scheme is empty, there is no point pair and the assertion has no instance. Only one affine neighbourhood for each of the two fixed points is used, no bases are chosen, and no Axiom of Choice is needed. The statement contains no iff claim. [F1, F3, F7, F8, step 1.1, step 2.1, step 3.1, given, algebra] ∎

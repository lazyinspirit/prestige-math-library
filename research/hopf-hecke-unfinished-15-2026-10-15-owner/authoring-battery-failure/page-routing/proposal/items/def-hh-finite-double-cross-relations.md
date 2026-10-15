---
id: def-hh-finite-double-cross-relations
kind: definition
title: "Finite Drinfeld double: convention and candidate multiplication"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 8
deps:
  - def-hh-scalar-and-tensor-conventions
  - lem-hh-finite-tensor-duality-and-canonical-coevaluation
  - lem-hh-convolution-algebra-associativity-and-unit
  - def-hh-bialgebra-and-bialgebra-map
  - def-hh-hopf-algebra-and-antipode
  - thm-hh-finite-dimensional-dual-hopf-algebra
  - thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective
justified_by:
  - lem-hh-double-crossing-map-and-associativity
  - lem-hh-double-coalgebra-and-antipode-descent
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, lecture notes, §4.3"
      url: "https://math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych and Victor Ostrik, Tensor Categories, §7.14"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "G. A. García and C. Vay, Simple modules of small quantum groups at dihedral groups, Doc. Math. 29 (2024), §3.1.3"
      url: "https://ems.press/content/serial-article-files/42618"
---

## Definition

Let $k$ be a field and let $H$ be a finite-dimensional Hopf algebra over $k$ with bijective antipode $S$. Write $H^*=\operatorname{Hom}_k(H,k)$. Its dual coproduct is the unique map $\Delta_{H^*}:H^*\to H^*\otimes H^*$ satisfying

$$\Delta_{H^*}(f)(x\otimes y)=f(xy)$$

for all $f\in H^*$ and $x,y\in H$; finite tensor duality ensures this is an algebraic tensor. The ordinary convolution product on $H^*$ is $(f*g)(x)=\sum f(x_1)g(x_2)$. We use the **opposite algebra** $H^{*\mathrm{op}}$, whose product is $f\odot g:=g*f$ and whose coproduct is the ordinary dual coproduct, not its opposite.

As a vector space set $D(H):=H^{*\mathrm{op}}\otimes H$ and write $fh$ for $f\otimes h$ in this normal order. Define the crossing map

$$\chi(h\otimes f)=\sum f_1(S(h_1))f_3(h_3)f_2\otimes h_2.$$

The candidate product and unit are

$$ (f\otimes h)(g\otimes k)=\sum g_1(S(h_1))g_3(h_3)(g_2*f)\otimes h_2k,\qquad 1_D=\varepsilon_H\otimes 1_H. $$

The appearance of $g_2*f$ is the $H^{*\mathrm{op}}$ product $f\odot g_2$. This item defines the bilinear candidate operation; associativity, the coalgebra structure and the antipode are supplied separately by [[lem-hh-double-crossing-map-and-associativity]] and [[lem-hh-double-coalgebra-and-antipode-descent]].

## Facts & Assumptions

**Given:** A finite-dimensional Hopf algebra $H$ over $k$ with bijective antipode $S$. Define the finite-dual coproduct and candidate multiplication on $D(H)$, including their algebraic well-definedness.

[F1] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: evaluation identifies $H^*\otimes H^*$ with $(H\otimes H)^*$ for finite-dimensional $H$.

[F2] [[lem-hh-convolution-algebra-associativity-and-unit]]: convolution on maps from a coalgebra to an algebra is a bilinear associative multiplication with the stated unit.

[F3] [[thm-hh-finite-dimensional-dual-hopf-algebra]]: transposed structural maps give $H^*$ a Hopf structure whose product is convolution and whose coproduct is transposed multiplication.

[F4] [[thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective]]: the antipode of a finite-dimensional Hopf algebra is bijective.

[A1] $H$ is finite-dimensional and its antipode is bijective, as stated in the Definition; [F4] supplies the latter for all finite-dimensional Hopf algebras.

## Proof


1.1 By [F1], transposing multiplication on $H$ gives a unique algebraic tensor $\Delta_{H^*}(f)\in H^*\otimes H^*$ characterized by $\Delta_{H^*}(f)(x\otimes y)=f(xy)$. The dual Hopf structure in [F3] has exactly this coproduct and convolution product. The stated bijectivity of $S$ is supplied for finite-dimensional $H$ by [F4]; it is used by the downstream inverse-crossing and antipode formulas. [given, F1, F3, F4, construct]

2.1 Each displayed crossing and product is a composite of finite coproducts, evaluation, multiplication in $H$, and convolution on $H^*$, so [F2] and [F3] make them well-defined bilinear maps on the stated vector spaces. No associativity claim for the candidate double product is made here. [given, F2, F3, algebra] ∎
## Remarks

The finite-dimensional and bijective-antipode assumptions are explicit. The HH-8 supplier [[thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective]] discharges the latter for every finite-dimensional Hopf algebra. The $H^{*\mathrm{op}}$ convention is chosen so that direct coaction evaluation gives the left-left Yetter–Drinfeld action. No $H^{*\mathrm{cop}}$ formula is imported.

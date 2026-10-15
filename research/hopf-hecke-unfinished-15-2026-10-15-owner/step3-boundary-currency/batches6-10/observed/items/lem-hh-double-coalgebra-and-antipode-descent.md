---
id: lem-hh-double-coalgebra-and-antipode-descent
kind: lemma
title: "Double coalgebra, multiplicativity, and antipode"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 10
deps:
  - def-hh-finite-double-cross-relations
  - lem-hh-double-crossing-map-and-associativity
  - def-hh-bialgebra-and-bialgebra-map
  - def-hh-hopf-algebra-and-antipode
  - thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
  - thm-hh-finite-dimensional-dual-hopf-algebra
  - lem-hh-finite-tensor-duality-and-canonical-coevaluation
  - thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective
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

## Statement

For the associative algebra $D(H)$ of [[lem-hh-double-crossing-map-and-associativity]], define

$$\Delta_D(fh)=\sum (f_1h_1)\otimes(f_2h_2),\qquad \varepsilon_D(fh)=f(1_H)\varepsilon_H(h).$$

These maps make $D(H)$ a bialgebra. The inverse crossing, in normal order, is

$$fh=\sum f_1(h_1)f_3(S(h_3))h_2f_2.$$

Moreover,

$$S_D(fh):=S(h)(f\circ S^{-1})$$

is an antipode. Thus $D(H)$ is a Hopf algebra with the stated normal-order formulas.

## Facts & Assumptions

**Given:** A finite-dimensional Hopf algebra $H$ over a field with bijective antipode $S$, and the associative candidate algebra $D(H)$ with the crossing from [[def-hh-finite-double-cross-relations]] and [[lem-hh-double-crossing-map-and-associativity]]. Prove that the displayed structural maps make it a Hopf algebra.

[F1] [[def-hh-bialgebra-and-bialgebra-map]]: the coproduct is coassociative, its counit satisfies both counit equations, and both maps preserve the bialgebra multiplication and unit.

[F2] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: finite-dimensional tensor duality identifies $H^*\otimes H^*$ with $(H\otimes H)^*$ and evaluations separate tensors.

[F3] [[thm-hh-finite-dimensional-dual-hopf-algebra]]: $H^*$ has the transposed Hopf structure, with coproduct dual to multiplication, convolution product, and antipode $f\mapsto f\circ S$.

[F4] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: the antipode is anti-multiplicative and anti-comultiplicative, and its counit identity is $\varepsilon\circ S=\varepsilon$.

[F5] [[thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective]]: the antipode of a nonzero finite-dimensional Hopf algebra is bijective.

[F6] [[def-hh-hopf-algebra-and-antipode]]: $S$ satisfies both antipode contractions $\sum S(h_1)h_2=\varepsilon(h)1_H=\sum h_1S(h_2)$.

[L1] [[def-hh-finite-double-cross-relations]]: $D(H)=H^{*\mathrm{op}}\otimes H$ in normal order, with $\chi(h\otimes f)=\sum f_1(S(h_1))f_3(h_3)f_2\otimes h_2$.

[L2] [[lem-hh-double-crossing-map-and-associativity]]: the candidate product is associative and its crossing obeys both multiplication distributive laws.

[A1] $H$ is finite-dimensional and $S$ is bijective, as stated in [[def-hh-finite-double-cross-relations]]. Also $H\ne0$: its counit is a unital algebra map, so $\varepsilon_H(1_H)=1_k$; consequently the nonzero hypothesis of [F5] is satisfied.

## Proof


1.1 The dual coproduct is coassociative because for all $x,y,z\in H$, both iterated coproducts of $f$ evaluate to $f((xy)z)=f(x(yz))$, and its counit is $f\mapsto f(1_H)$; these are also the dual coalgebra maps in [F3]. The tensor coalgebra formula for $\Delta_D$ is therefore coassociative with counit $\varepsilon_D$. [given, F2, F3, L1, algebra]

1.2 By [F3], the dual Hopf algebra has antipode $S^*(f)=f\circ S$. Since $S$ is bijective, $S^*$ is bijective with inverse $\bar f=f\circ S^{-1}$. The same coproduct makes the opposite product a bialgebra: $\Delta(f\odot g)=\Delta(g*f)=\Delta(g)\Delta(f)=\sum(g_1*f_1)\otimes(g_2*f_2)=\sum(f_1\odot g_1)\otimes(f_2\odot g_2)$. The opposite unit is still $\varepsilon_H$, and $\Delta(\varepsilon_H)=\varepsilon_H\otimes\varepsilon_H$ because $\varepsilon_H(xy)=\varepsilon_H(x)\varepsilon_H(y)$; its counit $f\mapsto f(1_H)$ is multiplicative for $\odot$ since $(f\odot g)(1_H)=(g*f)(1_H)=g(1_H)f(1_H)=f(1_H)g(1_H)$ using $\Delta_H(1_H)=1_H\otimes1_H$. Pairing the two proposed antipode products with $x\in H$ gives $\sum(\bar f_1\odot f_2)(x)=f(S^{-1}(x_2)x_1)=\varepsilon(x)f(1_H)$ and $\sum(f_1\odot\bar f_2)(x)=f(x_2S^{-1}(x_1))=\varepsilon(x)f(1_H)$, using the inverse antipode identities obtained by applying $S^{-1}$ to the equations in [F6] and reversing products by [F4]. Thus $\bar f$ is the antipode of $H^{*\mathrm{op}}$. The tensor coalgebra restricts to these Hopf structures on the two embedded factors. [A1, F1, F3, F4, F5, F6, L1, algebra]

1.3 Define $\psi:H^*\otimes H\to H\otimes H^*$ by $\psi(f\otimes h)=\sum f_1(h_1)f_3(S(h_3))h_2\otimes f_2$. Pairing the dual factor of $\chi\psi(f\otimes h)$ with $x$ gives $\sum f(h_1S(h_2)x h_4S(h_5))h_3=f(x)h$, by the two contractions $h_1S(h_2)=\varepsilon(h)1$ and $h_4S(h_5)=\varepsilon(h)1$. Pairing the dual factor of $\psi\chi(h\otimes f)$ with $x$ gives $\sum f(S(h_1)h_2xS(h_4)h_5)h_3=f(x)h$ by the other two antipode contractions. Finite dual separation [F2] proves $\psi=\chi^{-1}$; equivalently, the inverse crossing relation is $fh=\sum f_1(h_1)f_3(S(h_3))h_2f_2$. [F2, F6, L1, L2, construct]

2.1 The coproduct is multiplicative on each embedded factor by step 1.2 and the bialgebra equations [F1]. For the mixed crossing, applying $\langle -,x\rangle\otimes\operatorname{id}_H\otimes\langle -,y\rangle\otimes\operatorname{id}_H$ to $\Delta_D(hf)$ and expanding $hf$ gives $\sum f(S(h_1)xyh_4)h_2\otimes h_3$. Applying the same evaluation to $\Delta_D(h)\Delta_D(f)=\sum(h_1f_1)\otimes(h_2f_2)$ and expanding both crossings gives $\sum f(S(h_1)x h_3S(h_4)y h_6)h_2\otimes h_5$. The antipode identity [F6] contracts the adjacent factors $h_3S(h_4)$, leaving $\sum f(S(h_1)xyh_4)h_2\otimes h_3$, the same tensor. By [F2], finite dual evaluations separate tensors, so $\Delta_D(hf)=\Delta_D(h)\Delta_D(f)$. [F1, F2, F3, F6, L1, step 1.2, algebra]

2.2 The map $S_D(fh)=S(h)\bar f$ reverses products on each embedded factor. Applying the inverse crossing of step 1.3 to $\bar f\otimes S(h)$, and using the anti-multiplicative and anti-comultiplicative identities [F4] together with $\bar f=f\circ S^{-1}$, gives $\bar fS(h)=\sum f_1(S(h_1))f_3(h_3)S(h_2)\bar f_2$. This is exactly the reversal of the defining crossing $hf=\sum f_1(S(h_1))f_3(h_3)f_2h_2$. Hence $S_D$ reverses the mixed relation and is an anti-algebra map on the crossed product. [F4, step 1.2, step 1.3, L1, L2, algebra]

3.1 For simple normal tensors $fh$ and $gk$, the product is $f(hg)k$ by [L2]. The defining tensor coalgebra formula gives $\Delta_D(f(hg)k)=\Delta_D(f)\Delta_D(hg)\Delta_D(k)$, because each displayed term is in normal order. The mixed calculation of step 2.1 gives $\Delta_D(hg)=\Delta_D(h)\Delta_D(g)$, and the factor restrictions of step 1.2 give the remaining products. Hence $\Delta_D((fh)(gk))=\Delta_D(fh)\Delta_D(gk)$; linearity proves multiplicativity on all of $D(H)$. [step 1.2, step 2.1, L1, L2, algebra]

4.1 Applying $\varepsilon_D$ to the crossing gives $\sum f_1(S(h_1))f_2(1_H)f_3(h_3)\varepsilon_H(h_2)=\sum f(S(h_1)h_3)\varepsilon_H(h_2)=f(1_H)\varepsilon_H(h)$: the dual coproduct combines the first three evaluations, and applying $\operatorname{id}\otimes\varepsilon\otimes\operatorname{id}$ to $\Delta^{(2)}(h)$ gives $\Delta(h)$ before the antipode contraction [F6]. Thus the counit is multiplicative on the crossing and on both factors; the normal-product calculation of step 3.1 makes it multiplicative on all products. Also $\Delta_D(1_D)=1_D\otimes1_D$, since $\Delta_{H^*}(\varepsilon_H)=\varepsilon_H\otimes\varepsilon_H$ and $\Delta_H(1_H)=1_H\otimes1_H$, and $\varepsilon_D(1_D)=1$. Therefore $D(H)$ is a bialgebra. [F1, F3, F4, F6, step 1.2, step 3.1, L1, L2, algebra]

5.1 For $\Delta_D(fh)=\sum f_1h_1\otimes f_2h_2$, the left antipode contraction is $\sum S(h_1)(\bar f_1\odot f_2)h_2$. By step 1.2 the dual factor contracts to $f(1_H)\varepsilon_H$, and the remaining $S(h_1)h_2$ contracts to $\varepsilon_H(h)1_D$ by [F6]. The right contraction is $\sum f_1h_1S(h_2)\bar f_2$; first contract $h_1S(h_2)$ by [F6] and then use the other dual antipode identity of step 1.2. Both sides equal $f(1_H)\varepsilon_H(h)1_D=\varepsilon_D(fh)1_D$. Thus $S_D$ is an antipode. [F6, step 1.2, step 2.2, L1, algebra] ∎
## Remarks

The formula uses $S^{-1}$ only after bijectivity is established by the HH-8 supplier. The dual Hopf supplier verifies the ordinary transposed coproduct first; the opposite multiplication is handled explicitly here. These draft suppliers have been inspected for the stated hypotheses and conventions, but their inspection is not an independent approval.

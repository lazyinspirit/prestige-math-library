---
id: def-residue-pairing-principal-parts
kind: definition
title: "The residue pairing of a line bundle with the dual canonical twist"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-invertible-sheaf
  - def-principal-parts-sheaf-line-bundle-curve
  - def-residue-rational-differential-curve-point
  - def-sheaf-hom
  - def-sheaf-tensor-product
  - lem-principal-parts-cech-h1-presentation
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice as inherited from the residue suppliers
([[def-axiom-of-choice]]). Let $C$ be a smooth proper geometrically integral
curve over a perfect field $k$, and let $\mathcal L$ be an invertible
$\mathcal O_C$-module with dual $\mathcal L^{-1}$
([[def-invertible-sheaf]]). Write $\omega_C=\Omega^1_{C/k}$ for the canonical
bundle ([[def-canonical-line-bundle-curve]]) and
$\mathcal L_\eta/\mathcal L$ for the sheaf of principal parts of $\mathcal L$
([[def-principal-parts-sheaf-line-bundle-curve]]). Tensoring with the dual
gives the invertible sheaf $\omega_C\otimes\mathcal L^{-1}$
([[def-sheaf-tensor-product]], [[def-sheaf-hom]]).

**Local pairing.** Let $c_p\in\mathcal L_\eta/\mathcal L_p$ be a local
principal part of $\mathcal L$ at a closed point $p$, and let
$s\in(\omega_C\otimes\mathcal L^{-1})_p$ be a regular local section of the
dual twist. Their product is a rational differential, defined modulo regular
differentials at $p$: if $c_p$ is represented by $\widetilde c_p\in\mathcal
L_\eta$, then $\widetilde c_p s$ is a rational differential. Replacing
$\widetilde c_p$ by another representative changes it by an element of
$\mathcal L_p$, whose product with $s$ is in $\omega_{C,p}$ and is regular.
Thus the local residue $\operatorname{res}_p(c_p s)$ of
[[def-residue-rational-differential-curve-point]] is independent of the
representative of $c_p$. In a local trivialization with parameter $t$, this is
the residue of the Laurent expansion of $\widetilde c_p s$; only its
$t^{-1}dt$ coefficient is used.

**The pairing.** Let $c=(c_p)$ be a finite-support family of local principal
parts of $\mathcal L$; such families represent the classes of
$H^1(C,\mathcal L)$, namely $H^1(C,\mathcal L)$ is the cokernel of the
diagonal map $\mathcal L_\eta\to\bigoplus_p\mathcal L_\eta/\mathcal L_p$
([[lem-principal-parts-cech-h1-presentation]]). Let $s$ be a global section
of $\omega_C\otimes\mathcal L^{-1}$. Define
$$\langle c,s\rangle:=\sum_{p}\operatorname{res}_p(c_p\,s)\in k .$$
The sum is finite: $c_p=0$ for all but finitely many $p$ by finite support,
and therefore $\operatorname{res}_p(c_p s)=0$ for all but finitely many $p$;
a global section $s$ is regular at every closed point, so no further poles
appear. The construction is $k$-linear in the family $c$ and in the section
$s$, by the $k$-linearity of the local residue and of the tensor product.

This defines the **residue pairing** on pairs of representatives,
$$\langle\;,\;\rangle\colon\Bigl(\text{finite-support families in }\textstyle\bigoplus_p\mathcal L_\eta/\mathcal L_p\Bigr)\times H^0(C,\omega_C\otimes\mathcal L^{-1})\longrightarrow k .$$
It is independent of the chosen representative of the principal-part family:
a new representative differs by the principal parts of a global meromorphic
section of $\mathcal L$ and by a family of local regular sections, and the
independence is the descent statement proved in the next item of this
development, which yields the induced $k$-bilinear pairing
$$H^1(C,\mathcal L)\times H^0(C,\omega_C\otimes\mathcal L^{-1})\to k .$$

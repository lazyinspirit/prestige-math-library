---
id: def-singular-cohomology-with-coefficients
kind: definition
title: Singular cohomology with coefficients
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-singular-cochain-complex-with-coefficients, lem-the-singular-coboundary-squares-to-zero]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, printed page 198
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Definition

For a space $X$ and an abelian group $G$, a degree-$n$ **singular cocycle** is a cochain in $Z^n(X;G)=\ker\delta^n$ and a degree-$n$ **singular coboundary** belongs to $B^n(X;G)=\operatorname{im}\delta^{n-1}$, for the positive coboundary convention of [[def-singular-cochain-complex-with-coefficients]]. The square-zero lemma [[lem-the-singular-coboundary-squares-to-zero]] implies $B^n\subseteq Z^n$: if $\varphi=\delta^{n-1}\psi$, then $\delta^n\varphi=0$.

The **singular cohomology group with coefficients in $G$** is
$$H^n(X;G)=Z^n(X;G)/B^n(X;G)\quad(n\ge0),\qquad H^n(X;G)=0\quad(n<0).$$
This is the abelian quotient with addition $[\varphi]+[\psi]=[\varphi+\psi]$: changing either representative by a coboundary changes the sum by a coboundary. Thus two cocycles represent the same class exactly when their difference is $\delta^{n-1}\eta$ for some degree-$(n-1)$ cochain $\eta$. In degree zero, $B^0=0$ because $C^{-1}=0$; hence $H^0=\ker\delta^0$. The zero convention in negative degrees agrees with the same kernel/image construction on the zero cochain groups.

If coefficients are a module over a commutative ring, the same groups and maps are modules and linear maps, and this is their module quotient. Empty $X$ or zero coefficients give zero cohomology in every degree. The notation does not define cohomology as the dual of homology; such identifications require their own theorems. No choice of cocycle representatives and no AC is part of this definition.

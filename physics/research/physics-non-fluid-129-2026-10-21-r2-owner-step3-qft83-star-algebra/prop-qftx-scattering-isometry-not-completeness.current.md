---
id: prop-qftx-scattering-isometry-not-completeness
kind: proposition
title: Scattering isometries do not establish asymptotic completeness
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - thm-qftx-cook-scattering-limit
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-hilbert-adjoint-properties
dependency_roles:
  thm-qftx-cook-scattering-limit: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Detlev Buchholz and Wojciech Dybalski, Scattering in relativistic quantum field theory: basic concepts, tools, and results"
      url: https://arxiv.org/pdf/math-ph/0509047
      locator: "Version 3, revised 2024-11-03; §1 and §2, PDF pp. 2–5: wave maps have scattering-state ranges; equality and full asymptotic completeness are distinct requirements."
    - title: "Klaus Fredenhagen, Quantum Field Theory, lecture notes, Wintersemester 2009/10 and Sommersemester 2010"
      url: https://www.physik.uni-hamburg.de/th2/ag-fredenhagen/dokumente/qft09-10.pdf
      locator: "Chapter IV §3, PDF p. 85: the wave maps are isometric, but unitarity requires additional range information and does not follow from Haag–Ruelle convergence."
verification:
  precheck: pending
---

## Statement

Let $\mathcal H_{\mathrm{as}}=\overline{\mathcal D_\sigma}$ and let
$\Omega_\pm:=W_{\pm1}:\mathcal H_{\mathrm{as}}\to\mathcal H$ be the two
isometric extensions supplied by the preceding Cook theorem after its
pairwise Fock-inner-product
hypothesis is proved. Define the comparison operator
$S=\Omega_+^*\Omega_-$. Here the Hilbert adjoint $T^*$ of a bounded map
$T:H_1\to H_2$ is characterized by
$(Tx,y)_{H_2}=(x,T^*y)_{H_1}$, a contraction satisfies
$\|Sx\|\le\|x\|$ for all $x$, an isometry is a linear inner-product-preserving
map, and unitary means a surjective isometry. Then
$S$ is a contraction. It is unitary if and only if
$\operatorname{Ran}\Omega_+=\operatorname{Ran}\Omega_-$. Full asymptotic
completeness is the stronger condition
$\operatorname{Ran}\Omega_+=\operatorname{Ran}\Omega_-=\mathcal H$; this
stronger condition is not part of the unitary-on-common-range criterion.

## Statement references

[[thm-qftx-cook-scattering-limit]]

[[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

## Facts & Assumptions

**Given:** The completed packet space
$\mathcal H_{\mathrm{as}}=\overline{\mathcal D_\sigma}$, the physical Hilbert
space $\mathcal H$, the isometric Cook maps
$\Omega_\pm=W_{\pm1}:\mathcal H_{\mathrm{as}}\to\mathcal H$.

[F1] [[thm-qftx-cook-scattering-limit]]: after the packet inner products are
shown to converge to the Fock inner product, the norm limits extend to
isometries on the completed packet domain. Cook convergence alone supplies no
surjectivity statement.

[F2] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]:
$|(x,y)|\le\|x\|\,\|y\|$ in every complex Hilbert space.

[F3] [[thm-hilbert-adjoint-properties]]: under Countable Choice, every
bounded linear map between real or complex Hilbert spaces has a unique bounded
Hilbert adjoint satisfying the adjoint identity; adjoints of compositions obey
$(TS)^*=S^*T^*$. Its prerequisite chain supplies the Hilbert-adjoint
definition (`def-hilbert-space-adjoint`) and the Riesz representation result
(`thm-riesz-representation-for-hilbert-space`). The Countable Choice
hypothesis is already supplied by the scattering contract in [F1]. Since
$\Omega_\pm$ are linear isometries, they are bounded, so their bounded
adjoints exist; after step 1.1, the same result applies to the bounded
comparison operator $S$.

## Proof

1.1 By [F3], the bounded linear isometry $\Omega_+$ has a bounded Hilbert
adjoint. For any $z$ in a Hilbert space,
$\|z\|=\sup_{\|x\|\le1}|(z,x)|$: Cauchy–Schwarz gives the upper bound, and
if $z\ne0$ the choice $x=z/\|z\|$ attains it. For $y\in\mathcal H$, the
adjoint identity and [F2] therefore give
$\|\Omega_+^*y\|=\sup_{\|x\|\le1}|(\Omega_+^*y,x)|
=\sup_{\|x\|\le1}|(y,\Omega_+x)|\le\|y\|$, since $\|\Omega_+x\|=\|x\|$.
Therefore
$\|Sx\|=\|\Omega_+^*\Omega_-x\|\le\|\Omega_-x\|=\|x\|$ for every
$x\in\mathcal H_{\mathrm{as}}$, so $S$ is a contraction.
[F1, F2, F3, given, algebra]

1.2 By [F3], the bounded maps $\Omega_\pm$ and $S$ have bounded Hilbert
adjoints with the stated adjoint identities. For either isometry $\Omega$,
the adjoint identity gives
$(x,\Omega^*\Omega y)=(\Omega x,\Omega y)=(x,y)$ for all $x,y$; nondegeneracy
therefore gives $\Omega^*\Omega=I$. For $P=\Omega\Omega^*$ the same identity
gives $(Px,y)=(\Omega^*x,\Omega^*y)=(x,Py)$, so $P^*=P$, and
$\Omega^*\Omega=I$ gives $P^2=P$. Also $P$ fixes each $\Omega x$ and its
image is contained in $\operatorname{Ran}\Omega$, so $P$ is the orthogonal
projection onto the closed range. If
$\operatorname{Ran}\Omega_+=\operatorname{Ran}\Omega_-=:R$, both products
are the same projection $P_R$. For all $x,z\in\mathcal H_{\mathrm{as}}$,
$(Sx,z)_{\mathrm{as}}=(\Omega_-x,\Omega_+z)_{\mathcal H}
=(x,\Omega_-^*\Omega_+z)_{\mathrm{as}}$, so uniqueness of the adjoint gives
$S^*=\Omega_-^*\Omega_+$. It follows that
$S^*S=\Omega_-^*P_R\Omega_-=\Omega_-^*\Omega_-=I$ and
$SS^*=\Omega_+^*P_R\Omega_+=\Omega_+^*\Omega_+=I$, so $S$ is unitary.
[F1, F3, given, algebra]

2.1 Conversely, suppose $S$ is unitary and put
$P_+=\Omega_+\Omega_+^*$. By [F3] and step 1.2 this is a bounded
orthogonal projection.
For each $x$,
$\|P_+\Omega_-x\|=\|\Omega_+^*\Omega_-x\|=\|Sx\|=\|x\|
=\|\Omega_-x\|$. For an orthogonal projection $P$, the identity
$\|Py\|=\|y\|$ implies
$\|y\|^2=\|Py\|^2+\|(I-P)y\|^2$ and hence $(I-P)y=0$; therefore
$\Omega_-x\in\operatorname{Ran}\Omega_+$ for every $x$, proving
$\operatorname{Ran}\Omega_-\subseteq\operatorname{Ran}\Omega_+$. Since $S$
is onto, for every $z\in\mathcal H_{\mathrm{as}}$ choose $x$ with $Sx=z$.
Then $\Omega_+z=\Omega_+Sx=P_+\Omega_-x=\Omega_-x$, which gives the reverse
range inclusion. Thus the ranges coincide. [F1, F3, given, step 1.2, algebra] ∎

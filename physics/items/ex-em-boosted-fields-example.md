---
id: ex-em-boosted-fields-example
kind: example
title: "Boosted uniform electric field and the mixed magnetic field"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 16
deps: [pthm-em-lorentz-field-transform,
       def-em-fields,
       def-em-si-conventions,
       def-cross-product-in-r3,
       def-euclidean-inner-product,
       def-rational-power,
       lem-rational-power-laws,
       post-em-vacuum-maxwell,
       def-divergence-and-curl-of-a-c1-vector-field,
       def-em-lab-geometry]
dependency_roles:
  pthm-em-lorentz-field-transform: physical-result
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact algebraic example for one uniform static electric field ($E\\equiv E_0e_2$, $B\\equiv0$ on $\\mathbb R^3\\times\\mathbb R$, $E_0>0$ in $\\mathrm V\\,\\mathrm m^{-1}$) and one passive boost along $e_1$ with $0\\le\\beta<1$: the boosted components, the resulting mixed magnetic field and the two field invariants. Excluded: real sources of the uniform field, boundary or finite-support configurations, measurements and any empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.3.2 printed pp. 107-108 (the boosted-field formulas (5.17)-(5.18) and the remark that a magnetic field in one frame is an electric field in another), read in the full extracted text"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node106.html"
      locator: "node 123 'Transformation of fields', read in the complete author-hosted lecture notes"
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zürich 2024 FS (author-hosted 176-page lecture script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§9.3 'Kovariante Elektrodynamik' pp. 9.8-9.9 (the field-strength tensor and its Lorentz transformation), read in the author-hosted script"
verification:
  precheck: pass
---

## Example

Let $E_0>0$ carry the unit $\mathrm V\,\mathrm m^{-1}$ and consider the constant
fields of [[def-em-fields]]

$$E:\mathbb R^3\times\mathbb R\to\mathbb R^3,\quad E\equiv E_0e_2,\qquad B\equiv0,$$

which form a source-free smooth solution of the vacuum Maxwell equations
[[post-em-vacuum-maxwell]] (all first derivatives vanish and
$\operatorname{div}E=\operatorname{div}B=0$,
$\operatorname{curl}E=\operatorname{curl}B=0$). Let $0\le\beta<1$,
$\gamma:=(1-\beta^2)^{-1/2}$ and $v:=\beta c\,e_1$, and let
$x'=\Lambda_\beta x+b$ be the boosted inertial chart of
[[pthm-em-lorentz-field-transform]]. Then the components of the same field in
$x'$ are

$$E'=\gamma E_0\,e_2,\qquad B'=-\frac{\gamma\beta E_0}{c}\,e_3=-\frac{\gamma |v|E_0}{c^2}\,e_3,$$

so the moving observer reads an electric field of magnitude $\gamma E_0$ along
$e_2$ and, for $\beta>0$, a nonzero magnetic field along $-e_3$: a purely
electric uniform field acquires a magnetic component in the boosted
description. The two invariants check directly: with the spatial Euclidean
structure of the chart ([[def-euclidean-inner-product]],
[[def-cross-product-in-r3]])

$$|B'|^2-\frac{|E'|^2}{c^2}=\gamma^2\Bigl(\frac{\beta^2E_0^2}{c^2}-\frac{E_0^2}{c^2}\Bigr)=-\frac{E_0^2}{c^2}=|B|^2-\frac{|E|^2}{c^2},\qquad E'\cdot B'=0=E\cdot B,$$

using $\gamma^2(1-\beta^2)=1$ ([[def-rational-power]],
[[lem-rational-power-laws]]). At $\beta=0$ the formulas reduce to $E'=E$,
$B'=0$. The computation is exact for the constant field; the example reports no
measurement, identifies no source producing the field, and asserts nothing
about finite-energy or bounded configurations.

## Facts & Assumptions

**Given:** The constant $E_0>0$ in $\mathrm V\,\mathrm m^{-1}$, the fields
$E\equiv E_0e_2$ and $B\equiv0$ on the whole-space laboratory region
$\Omega\times I=\mathbb R^3\times\mathbb R$, the boost parameter
$0\le\beta<1$, $\gamma=(1-\beta^2)^{-1/2}$, $v=\beta c\,e_1$, and the boosted
inertial chart $x'=\Lambda_\beta x+b$.

[F1] The fields are those of [[def-em-fields]]: $E$ carries
$\mathrm V\,\mathrm m^{-1}$ and $B$ the tesla, jointly $C^k$ means $C^k$ in the
chart variables, and the spatial structure is the $\delta$-orthonormal basis
$(e_1,e_2,e_3)$ with Euclidean inner product and right-handed cross product
([[def-em-fields]] (c), [[def-em-si-conventions]] (b),
[[def-euclidean-inner-product]], [[def-cross-product-in-r3]]).

[F2] Smooth branch: for jointly $C^1$ fields with the additional derivatives
required by each equation existing and continuous and continuous sources, the
smooth branch of [[post-em-vacuum-maxwell]] consists of
$\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$,
$\operatorname{curl}E=-\partial_tB$ and
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$; for $\rho=0$ and $J=0$ these
are the source-free equations. The divergence and curl are those of
[[def-divergence-and-curl-of-a-c1-vector-field]], with partial derivatives at
fixed time.

[F3] Boost components and invariants
([[pthm-em-lorentz-field-transform]] (a), (b), (c)): for $0\le\beta<1$ and the
chart $x'=\Lambda_\beta x+b$ of the statement, the dictionary components of the
same $F$ satisfy
$E'_2=\gamma(E_2-\beta cB_3)$, $E'_3=\gamma(E_3+\beta cB_2)$,
$B'_2=\gamma(B_2+\beta E_3/c)$, $B'_3=\gamma(B_3-\beta E_2/c)$, with the
components along $e_1$ unchanged, and
$|B'|^2-|E'|^2/c^2=|B|^2-|E|^2/c^2$, $E'\cdot B'=E\cdot B$; at $\beta=0$ the
boost is the identity so $E'=E$, $B'=B$.

[F4] Powers: for $a>0$ and rationals $r,s$ one has $a^r>0$, $a^{r+s}=a^ra^s$;
with $a:=1-\beta^2>0$ this gives $\gamma^2(1-\beta^2)=1$
([[def-rational-power]], [[lem-rational-power-laws]]).

[F5] Orthonormality: $|e_2|=|e_3|=1$, $e_1,e_2,e_3$ are pairwise orthogonal,
and $e_2\cdot e_3=0$
([[def-euclidean-inner-product]], [[def-em-lab-geometry]] (b)).

## Verification

**Proof technique:** direct; substitute the constant data into the sourced
smooth branch to verify the source-free solution, apply the axis-boost
components of [[pthm-em-lorentz-field-transform]] (a), and evaluate the two
invariants with the orthonormal-basis identities.

1.1 Source-free solution: the field pair $(E,B)$ is constant, hence $C^\infty$ with every first partial derivative continuous and equal to $0$, in particular jointly $C^k$ for every $k\ge1$ [F1]. With the divergence and curl of [F2], $\operatorname{div}E=\partial_1E_1+\partial_2E_2+\partial_3E_3=0$, $\operatorname{div}B=0$, $\operatorname{curl}E=(\partial_2E_3-\partial_3E_2,\ \partial_3E_1-\partial_1E_3,\ \partial_1E_2-\partial_2E_1)=0$ and $\operatorname{curl}B=0$, and $\partial_tE=\partial_tB=0$; hence the four source-free smooth-branch equations of [F2] with $\rho=0$, $J=0$ hold on $\mathbb R^3\times\mathbb R$. [given, F1, F2, algebra]

1.2 Boosted components: substitute $E_1=0$, $E_2=E_0$, $E_3=0$ and $B_1=B_2=B_3=0$ in the formulas of [F3]: $E'_1=E_1=0$, $E'_2=\gamma(E_0-\beta c\cdot0)=\gamma E_0$, $E'_3=\gamma(0+\beta c\cdot0)=0$, $B'_1=B_1=0$, $B'_2=\gamma(0+\beta\cdot0/c)=0$ and $B'_3=\gamma(0-\beta E_0/c)=-\gamma\beta E_0/c$; therefore $E'=\gamma E_0e_2$ and $B'=-(\gamma\beta E_0/c)e_3=-(\gamma|v|E_0/c^2)e_3$, since $|v|=\beta c$ by $v=\beta ce_1$ and the right-handed basis [F1]. This is the asserted pair of components; the magnetic component is nonzero exactly when $\beta>0$, and the direction is $-e_3$. [given, F1, F3, algebra]

2.1 Invariants: by [F3] the invariants agree with those computed from $(E,B)$, and directly from step 1.2, $|E'|^2=\gamma^2E_0^2$, $|B'|^2=\gamma^2\beta^2E_0^2/c^2$ and $E'\cdot B'=0$ by [F5] ($e_2\perp e_3$), while $|E|^2=E_0^2$, $|B|^2=0$ and $E\cdot B=0$; hence $|B'|^2-|E'|^2/c^2=\gamma^2E_0^2(\beta^2-1)/c^2=-E_0^2/c^2$ by $\gamma^2(1-\beta^2)=1$ [F4], which equals $|B|^2-|E|^2/c^2$, and $E'\cdot B'=0=E\cdot B$. At $\beta=0$ one has $\gamma=1$ and the formulas of [F3] give $E'=E$, $B'=B=0$, so the boosted description is the laboratory description and no magnetic field appears. [given, step 1.2, F3, F4, F5, algebra]

3.1 Closing: step 1.1 verifies that the constant data solve the source-free smooth branch; step 1.2 gives the exact boosted components and step 2.1 the two invariant checks, with the $\beta=0$ reduction. The computation is exact algebra for the constant field and uses only the dictionary and boost formulas of [F3]; no measurement, source model, finite-energy, boundary or empirical claim is made, and no choice principle is used. [step 1.1, step 1.2, step 2.1, F1, F3] ∎

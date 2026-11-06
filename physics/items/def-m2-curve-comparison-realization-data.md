---
id: def-m2-curve-comparison-realization-data
kind: definition
title: M2 Curve Comparison Realization Data
status: published
origin: session
domain: physics
library: physics
category: string-theory
dependency_level: 10
deps:
  - def-m2-regulated-protected-sector-data
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - lem-equivariant-finite-chart-symbol-calculus
  - def-axiom-of-choice
dependency_roles:
  def-m2-regulated-protected-sector-data: formulation-prerequisite
  def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface: mathematical-premise
  def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface: mathematical-premise
  def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface: mathematical-premise
  lem-equivariant-finite-chart-symbol-calculus: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: >-
  Original F4 background/charge scope retained as the physical realization objective. Specifying required data does not assert its physical existence; smooth source-model restrictions remain explicit.
proof_strategy: direct
proof_status: definition of comparison inputs; no physical existence or index equality is asserted
relations:
  motivated_by:
    - post-f4-m2-matter-curve-zero-mode-dictionary
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: https://arxiv.org/pdf/1806.01854v1
      locator: "§5.4.2, printed pp. 46–47, and §9.5.1, printed pp. 93–94: topologically twisted curve cohomology, gauge-dependent twists, and wrapped-M2 context"
    - title: "Bergshoeff, Sezgin, and Townsend, Properties of the Eleven-Dimensional Supermembrane Theory (1988)"
      url: https://pure.rug.nl/ws/files/14495060/1988AnnPhysBergshoeff.pdf
      locator: "Semiclassical discussion and final quantization caveat, §§7–8, PDF pp. 27–31 and 36–37"
---

## Definition

Given a regulated protected-sector package, **curve-comparison
realization data** consist of the following actual supplied objects for
the same background and charge family.

1. A specified family $\pi:\mathcal C\to\mathcal B$, where
   $\mathcal B$ is a finite-dimensional Hausdorff second-countable smooth
   manifold without boundary and $\pi$ is a proper smooth submersion.
   Every fiber $\mathcal C_b=\pi^{-1}(b)$ is a compact closed oriented
   Riemann surface; its complex structure on
   $T^v\mathcal C:=\ker(d\pi)$ varies smoothly with the point of
   $\mathcal C$, and its complex orientation is the stated orientation.
   Define the relative canonical line by
   $K_{\mathcal C/\mathcal B}:=\Lambda^{1,0}(T^v\mathcal C)^*$. For a
   bundle $F\to\mathcal C$, write $F_b:=F|_{\mathcal C_b}$.
2. A finite-rank $\mathbb Z_2$-graded Hermitian bundle
   $E=E^+\oplus E^-$ over $\mathcal C$, with orthogonal grading,
   ranks $r_\pm(p):=\dim_\mathbb C E_p^\pm$, and a specified
   smooth map $r:\mathcal C\to B_{\rm red}$ to the projection-family
   base of the M2 Regulated Protected Sector Data package. Require an actual
   grading-preserving Hermitian identification
   $E\cong r^*\operatorname{im}P$; its connection is the pullback of
   the Berry connection $P\nabla^{\mathscr H}$ defined there.
   The characteristic fields in this record are explicitly
   $c_\pm=[\frac{i}{2\pi}\operatorname{tr}F_\pm]\in
   H^2_{\rm dR}(\mathcal C;\mathbb R)$, where $F_\pm$ is the
   curvature of that pulled-back connection on $E^\pm$.
   Here $H^2_{\rm dR}$ is the quotient of closed smooth real
   two-forms by exact smooth real two-forms. In a unitary frame
   with connection matrix $A_\pm$, curvature means
   $F_\pm=dA_\pm+A_\pm\wedge A_\pm$. Record these ranks and
   classes from the actual identification with $r^*\operatorname{im}P$,
   together with the physical derivation of that identification;
   they are not fitted to a desired index. Supply a
   fiberwise holomorphic vector-bundle structure on $E$: locally over
   $\mathcal B$, provide frames smooth in the base parameter and
   holomorphic along each fiber, with transition matrices smooth in the
   base and holomorphic along fibers. In these frames
   $\bar\partial_{E,b}$ acts componentwise by $\partial_{\bar z}$,
   satisfies the Leibniz rule, preserves $E_b^\pm$, and varies smoothly
   with $b$. Also supply $L$ and the spin line $T$ as smooth line
   bundles on $\mathcal C$ with
   fiberwise-holomorphic transition functions varying smoothly with
   $b$, and a fiberwise holomorphic isomorphism
   $T^{\otimes2}\cong K_{\mathcal C/\mathcal B}$. At the level of
   this mathematical target, $L$ is an arbitrary supplied holomorphic
   line bundle. Calling it the physical anomaly-corrected twist
   requires a separate model-specific construction and identification
   with the actual protected-state twist, including its transition
   maps and connection; no such identification or correction formula
   is inferred from the general Euclidean descent package. This
   physical construction remains part of the held realization
   obligation, rather than a property of every supplied $L$.
3. On every fiber set $W_b:=E_b\otimes L_b\otimes T_b$. Supply a
   smoothly varying Riemannian metrics $g_b$ compatible with the fiber
   complex structures and smoothly varying Hermitian metrics on
   $E_b,L_b,T_b$; their tensor product gives $h_{W_b}$. For smooth forms
   define the first-variable-linear pairing
   $$
   \langle u,v\rangle_{L^2}:=\int_{\mathcal C_b}\langle u,v\rangle_{g_b,h_{W_b}}\,dV_{g_b}.
   $$
   and let $L^2(\mathcal C_b,\Omega^{0,*}(W_b))$ be its Hilbert
   completion. In fiberwise holomorphic frames define the smooth
   Dolbeault operator componentwise by $\partial_{\bar z}$, extend it
   as the maximal weak $L^2$ operator, and define its Hilbert adjoint
   with respect to this pairing. Fix a finite holomorphic chart/frame
   cover $(U_j,e_j)$ and subordinate smooth partition $(\chi_j)$; the
   domain $H^1$ is the completion with
   $\|u\|_{H^1}^2:=\sum_j\|(\chi_j u)_{e_j}\|_{W^{1,2}(U_j)}^2$,
   using the Euclidean vector norm on local coefficient vectors. The
   total Dolbeault-plus-adjoint operator is
   $D_b:=\bar\partial_{W_b}+\bar\partial_{W_b}^*$ on this domain.
   Its total grading is coefficient-bundle parity plus form degree
   modulo $2$, so $D_b$ is odd.
4. An actual grading-preserving Hilbert identification of the physical
   protected sector with the stated target space on the declared
   subspace, including its domain map, together with the norm-continuous
   Fredholm comparison operators and their exact domains. State which
   operators are endpoints of any comparison path; a path is data and
   by itself is not asserted here to prove an index identity.
5. Every relative zero-mode sector, its physical grading, the actual
   kernels and cokernels used to calculate its graded index, and the
   contribution included in the comparison. Rank-one or zero-relative-
   index conditions may be used only when independently demonstrated.

The definition requires an actual physical comparison and its inputs;
it does not assert that the comparison exists, that its index equals the
curve index, or that a vacuum has rank one.

## Definition references

[[def-m2-regulated-protected-sector-data]]

## Facts & Assumptions

**Given:** Full AC; a regulated protected-sector package as in [[def-m2-regulated-protected-sector-data]], plus the smooth family of closed Riemann surfaces, map to its projection-family base, pulled-back graded light bundle, fiberwise holomorphic structures, twist, spin line, metrics, domains, identification, comparison, and relative-sector data listed above.

[F1] [[def-m2-regulated-protected-sector-data]]: the physical graded Hilbert quotient, preserved odd self-adjoint charge, domains, and any actual reduction projector are supplied inputs; their physical existence is not asserted.

[F2] [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]: on a Riemann surface a holomorphic line bundle has holomorphic transition functions, and its Dolbeault operator in a holomorphic frame acts by coefficientwise $\bar\partial$. The supplied fiberwise-holomorphic frames and transition matrices for finite-rank $E$ give the same componentwise operator, which preserves its stated grading.

[F3] [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]: compatible metrics define the $L^2$ Hilbert pairings on the curve fibers.

[F4] [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]: for a holomorphic line bundle its maximal weak Dolbeault operator is closed and densely defined, its Hilbert adjoint is closed and densely defined, and the adjoint domain is specified. On each finite-rank fiberwise holomorphic bundle in this definition, use the same weak identity componentwise in holomorphic frames; holomorphic transition matrices make these local definitions agree. A Hilbert-space cokernel identification is not automatic from the smooth quotient.

[F5] [[lem-equivariant-finite-chart-symbol-calculus]]: first-order elliptic operators have the stated Sobolev Fredholm realizations on compact smooth manifolds.

[F6] [[def-axiom-of-choice]]: full AC is the stated foundational hypothesis of the elliptic Fredholm interface [F5].

## Proof

1.1 The input in [F1] supplies the physical graded Hilbert space, charge, and domains for the selected background and regulator. It does not supply a curve comparison unless that comparison is separately given. Thus the first item is additional realization data, not a consequence of the regulated-sector definition. [F1, given]

1.2 By [F1], pullback of the supplied finite-rank light bundle and
Berry connection gives the stated connection on $E$. In unitary
frames $F=dA+A\wedge A$ transforms by conjugation, so $\operatorname{tr}F$
is global and purely imaginary. Also $\operatorname{tr}(A\wedge A)=0$
by pairing off matrix entries, hence $d\operatorname{tr}F=0$ locally.
Thus the real de Rham fields $c_\pm$ are defined. The holomorphic
frames in [F2] define $\bar\partial_{W_b}$ componentwise and agree on
overlaps. Fix a fiber, write $z=x+iy$, $g=\lambda(dx^2+dy^2)$ with
$\lambda>0$, and write its positive Hermitian metric matrix $M$ in a
holomorphic frame, so $\langle u,v\rangle=v^*Mu$. Integration by parts
with the first-variable-linear pairing [F3, F4] gives, on smooth
$(0,1)$ coefficient vectors $v$,
$$
\bar\partial u=\tfrac12(\partial_x+i\partial_y)u\,d\bar z,\qquad \bar\partial^*(v\,d\bar z)=-\tfrac2\lambda M^{-1}\partial_z(Mv).
$$
Consequently $D_b$ is a smooth first-order differential operator;
local Fourier quantization replaces each derivative by $i\xi_j$,
so its polynomial symbol is classical of order one, and cutoff
localization puts $D_b$ in $\Psi^1$ of [F5]. For real
$\xi=\xi_xdx+\xi_ydy$, put $p=\tfrac i2(\xi_x+i\xi_y)$.
Its principal symbol and square are
$$
\sigma_1(D_b)=\begin{pmatrix}0&(2/\lambda)\overline p\,I\\pI&0\end{pmatrix},\qquad \sigma_1(D_b)^2=\frac{\xi_x^2+\xi_y^2}{2\lambda}I.
$$
It is invertible for $\xi\ne0$; on rank-zero summands the unique
map is invertible on the zero vector space. The supplied $H^1$
domain is the Sobolev realization in [F5], which is Fredholm on the
compact boundaryless fiber under [F6]. The local expression agrees
with the weak operator and adjoint by testing and integration by
parts as in [F4]. This constructs only the mathematical target;
its physical identification remains additional supplied data.
[F1, F2, F3, F4, F5, F6, given, algebra]

2.1 The identifications, comparison operators, endpoints, and relative zero-mode computations in items 4–5 are fields of the required data record. Supplying a norm-continuous family only establishes the stated continuity and Fredholm hypotheses; no index-preserving conclusion is included in this definition. The physical rank/parity of $E$, its Berry class, and the twist $L$ therefore remain explicit inputs, and the rank-one and zero-relative-index conditions are not automatic. [given, step 1.1, step 1.2] ∎

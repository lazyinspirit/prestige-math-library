---
id: def-em-fixed-test-geometry
kind: definition
title: "Fixed volume and patch test geometries, outward normals and induced orientations"
domain: physics
status: draft
origin: pipeline
dependency_level: 7
deps: [def-em-lab-geometry,
       def-bounded-piecewise-c-one-euclidean-domain,
       def-bounded-c-one-domain-boundary-charts-and-outward-normal,
       def-surface-integral-on-a-compact-c-one-hypersurface,
       def-the-induced-boundary-chain-of-a-c2-surface-patch,
       def-type-i-type-ii-and-elementary-green-regions,
       def-admissible-regular-parametrized-surface-patch,
       def-oriented-unit-normal-and-flux-of-a-surface-patch,
       def-scalar-and-vector-line-integrals-along-piecewise-c1-paths,
       def-cross-product-in-r3,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-countable-choice,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       cor-integral-over-a-null-set-vanishes,
       def-integrable-real-and-complex-functions-and-their-integrals]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  def-the-induced-boundary-chain-of-a-c2-surface-patch: mathematical-premise
  def-type-i-type-ii-and-elementary-green-regions: mathematical-premise
  def-admissible-regular-parametrized-surface-patch: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The time-independent spatial test geometries of the integral form of the vacuum Maxwell equations in one named inertial frame: bounded open volumes with finite piecewise C1 boundary presentations and outward normals, and oriented regular C2 surface patches over finite elementary planar regions, together with their closed-surface fluxes, induced boundary chains, circulations and oriented fluxes. The test geometries are fixed subsets of the laboratory region and carry no motion; the definition asserts no field equation, no physical law, no conservation statement and no existence of fields."
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 1.3.1 printed pp. 24-28 (line, surface and volume integrals), Section 1.3.4 printed pp. 31-34 (the fundamental theorem for divergences on volumes and the orientation of the outward normal) and Section 1.3.5 printed pp. 34-37 (the fundamental theorem for curls and the induced boundary orientation); read in the stamped scanned full text (OCR cross-checked), used only for the conventions of the test geometries, not for any electromagnetic law."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 2.1 printed p. 8 (flux through a closed surface) and Section 3.1 printed pp. 42-43 (Ampere's law in integral form with the right-handed boundary orientation); read in the stamped full text, used only for the orientation and flux conventions."
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Section 2.1 printed pp. 17-22 (Gauss's divergence theorem in integral form) and Section 2.2 printed pp. 22-26 (Stokes's theorem in integral form); read in the stamped full text, used only for the operator conventions of the test geometries."
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis), ch. 1"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 1.10.2-1.12, printed pp. 15-18, for surface integration on compact $C^1$ hypersurfaces and finite piecewise $C^1$ domain presentations; used for the imported mathematical conventions cited by the definition."
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, the convention
already carried by the imported finite piecewise $C^1$ boundary presentations
and by the compact $C^1$ surface measure cited below
([[def-countable-choice]]). Let $U\cong I\times\Omega$ be the laboratory region
of [[def-em-lab-geometry]], with $\Omega\subseteq\mathbb R^3$ open and
$I\subseteq\mathbb R$ a nonempty open interval. This definition fixes the
time-independent spatial test geometries of the integral form of the Maxwell
equations.

(a) [Volume test geometry] A **volume test geometry** in $\Omega$ is a pair
$(V,\nu_V)$ where $V\subseteq\Omega$ is a nonempty bounded open set with
$\overline V\subseteq\Omega$ and a specified finite piecewise $C^1$ presentation
of its boundary ([[def-bounded-piecewise-c-one-euclidean-domain]]), and
$\nu_V$ is the outward unit normal of that presentation off its edge set
([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]). The
**closed-surface flux** of a field $F$ continuous on a neighbourhood of
$\overline V$ is the finite face sum

$$\oint_{\partial V}F\cdot\nu_V\,dS:=\sum_j\int_{S_j}F\cdot\nu_V\,dS,$$

with the face surface integrals of
[[def-surface-integral-on-a-compact-c-one-hypersurface]]. For every closed
axis-parallel box $K=\prod_{i<3}[a_i,b_i]\subseteq\Omega$ with $a_i<b_i$, its
open interior $V=\prod_{i<3}(a_i,b_i)$ is a volume test geometry and
$\overline V=K$; its natural six-face presentation is the boundary of $K$, with
outward normals $\pm e_i$. The volume variable is $V$, while $K$ denotes its
compact closure. Each face is a degenerate three-dimensional box and hence has
$\lambda_3$-measure zero by
[[thm-lebesgue-measure-of-a-box-of-every-kind]]; their finite union
$K\setminus V$ is null. Thus for continuous $h$ on a neighbourhood of $K$,
$\int_Vh\,d\lambda_3=\int_Kh\,d\lambda_3$: the positive and negative integrals
over the null difference vanish by
[[cor-integral-over-a-null-set-vanishes]] and
[[def-integrable-real-and-complex-functions-and-their-integrals]].

(b) [Patch test geometry] A **patch test geometry** in $\Omega$ is a regular
$C^2$ surface patch $(D,r)$ over a finite elementary Green region in the sense
of [[def-the-induced-boundary-chain-of-a-c2-surface-patch]]
([[def-type-i-type-ii-and-elementary-green-regions]],
[[def-admissible-regular-parametrized-surface-patch]]): $D\subseteq\mathbb
R^2$ is a finite elementary Green region, $r$ is of class $C^2$ on an open
neighbourhood of $D$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]),
$r_u\times r_v\ne0$ on the interior of $D$ ([[def-cross-product-in-r3]]) and
no interior parameter point shares its image with a distinct point of $D$. Its
**induced boundary chain** $\partial S=r(\partial D)$ and its **circulation**
$\oint_{\partial S}F\cdot d\mathbf r$ for a field continuous on the image are
those of [[def-the-induced-boundary-chain-of-a-c2-surface-patch]]
([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]); its
**oriented flux** of a field $F$ continuous on the image is

$$\int_SF\cdot n_S\,dS:=\int_D(F\circ r)\cdot(r_u\times r_v)\,dudv,$$

the scalar Riemann integral of the continuous integrand on the compact Jordan
parameter region, in the orientation induced by $r$
([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]). The pair $(D,r)$
is part of the data. Every affine graph patch $r(u,v)=(u,v,\varphi(u,v))$ over
an axis-parallel square $D=[c_1,c_1+\ell]\times[c_2,c_2+\ell]$ with $\ell>0$,
whose graph lies in $\Omega$ with $\varphi$ affine (for instance constant), and
more generally every affine regular patch over such a square, is a patch test
geometry: the square is a finite elementary Green region, and $r$ is smooth and
regular with $\varphi_u,\varphi_v$ constant.

(c) [Regularity convention] When an integral identity of this framework is
asserted for a volume test geometry $V$, respectively for a patch test geometry
$S$, with respect to a field $F$ of stated class $C^k$, it concerns fields
defined and of class $C^k$ on an open neighbourhood of $\overline V$ in
$\Omega$, respectively of the image $r[D]$ in $\Omega$; when the identity
involves a time derivative of a flux, the field is defined with the stated
regularity on a neighbourhood of that compact set times the compact time
interval of the assertion. No regularity away from these neighbourhoods is
asserted.

(d) [Conventions and scope] Test geometries are fixed spatial subsets of
$\Omega$ and carry no motion. A patch's orientation is the one induced by its
parametrization, and its induced boundary chain has the compatible orientation
of [[def-the-induced-boundary-chain-of-a-c2-surface-patch]], so that the
classical Stokes theorem applies with a plus sign. The definition retains the
$\mathrm{AC}_\omega$ convention of the imported boundary and surface-measure
definitions; it asserts no differential equation, no physical law and no
existence of fields.

## Source notes

The conventions recorded here are the classical textbook conventions for the
divergence and Stokes test geometries: outward normals on closed volume
boundaries, induced right-handed orientation on patch boundaries, and flux and
circulation signs tied to those orientations. The mathematical content of
every clause is carried by the imported items cited in place; the textbooks
supply orientation and notation only.

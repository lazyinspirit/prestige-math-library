---
id: rem-green-identities-come-from-the-euclidean-integration-pair
kind: remark
title: The Green identities used here are Euclidean
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - cor-second-green-identity-on-a-bounded-c-one-domain
  - def-countable-choice
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - thm-green-representation-formula
  - thm-minus-laplacian-of-the-fundamental-solution-is-dirac
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§§1.11–1.12 and 2.5, printed pp.16–18, 32"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.4 equations (5.31)–(5.36), printed pp.125–126"
---

**The integration pair is the Euclidean one.** Every boundary flux computed on
this page uses the Euclidean surface measure, the divergence identity
[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]] for a bounded
$C^1$ domain with the outward normal, its piecewise-boundary relative
[[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], and the
two-function identity [[cor-second-green-identity-on-a-bounded-c-one-domain]].
No step of any item on this page integrates a differential form, and no step
uses a Stokes theorem for oriented manifolds.

**Where the pair is actually used.** The distributional computation
[[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]] and the Green
representation formula [[thm-green-representation-formula]] excise the pole
from the domain and then apply the second Green identity on the resulting
bounded $C^1$ domain; the singular flux of the kernel across the excised
sphere is computed directly from the radial profile and the chart surface
integral of [[def-surface-integral-on-a-compact-c-one-hypersurface]]. The
Neumann compatibility identity and the boundary terms of the corollaries use
the divergence theorem in the same way.

**Outward normals on excised balls are reversed.** On the outer boundary the
normal is the outward unit normal of $\Omega$; on an excised sphere
$S(x,\varepsilon)$ the outward normal of the remaining domain
$\Omega\setminus\overline B(x,\varepsilon)$ points into the hole, that is,
$\sigma(y)=-(y-x)/|y-x|$. Both cited items display this reversal, and the sign
of every singular boundary term is read off from it. Nothing here depends on
the orientation convention of a manifold boundary.

**The later manifold Stokes theorem is context only.** A general Stokes
theorem for oriented manifolds is built later in this run, on a page that this
pair does not require and that does not require this pair. It supplies no
proof step, no hypothesis and no sign convention to any item here, and no
statement proved here is claimed as a manifold statement. The orientation
language of the Euclidean surface measure is self-contained at this point.

**Choice.** Every item that invokes the Euclidean integration pair states
$\mathrm{AC}_\omega$ and inherits it through the measure, polar-surface,
divergence and Green-identity conventions listed above;
[[def-countable-choice]] is the only choice principle used on this page. No
full Axiom of Choice and no incompatible-axiom branch occurs.

## Source notes

Hunter, *Notes on Partial Differential Equations* (2014), §§1.11–1.12,
printed pp.16–18, proves the divergence theorem by graph integration, and
§2.5, printed p.32, derives the Green identities from it; the surface measure
used there is the Euclidean chart measure. Teschl, *Partial Differential
Equations: From Classical to Modern* (2025 archived author manuscript), §5.4
equations (5.31)–(5.36), printed pp.125–126, records the same Euclidean
surface and Green identities in the sign convention $-\Delta\Phi=\delta_0$
used here. Neither reference is used as a proof of the statements above: this
remark only fixes which earlier local results carry every flux computation on
the page, and records that the manifold comparison is not one of them.

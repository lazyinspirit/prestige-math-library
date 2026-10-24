---
id: ex-failed-principal-parts-problem-detected-by-residues
kind: example
title: "A failed principal-parts problem detected by residues on a complex torus"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-complex-lattice-and-complex-torus
  - thm-complex-torus-quotient-is-well-defined
  - def-meromorphic-differential-on-a-riemann-surface
  - def-principal-part-at-an-isolated-point
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - thm-riemann-roch-compact-riemann-surfaces
  - thm-serre-duality-compact-riemann-surfaces
  - thm-residue-theorem-compact-riemann-surface
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - cor-prescribed-principal-parts-compact-riemann-surface
  - def-cech-cohomology-holomorphic-line-bundle-sections
  - def-line-bundle-associated-to-a-divisor
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - thm-grand-equivalence-for-simply-connected-plane-domains
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
aliases: []
landmark: false
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references: [{"title": "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan", "url": "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf", "locator": "§§18.1–18.3, printed pp. 146–148: Mittag–Leffler obstruction, holomorphic-differential residue criterion, and the torus criterion with no solitary simple pole"}, {"title": "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)", "url": "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf", "locator": "Ch. 10, Theorem 10.5, printed pp. 89–92: the function-valued Mittag–Leffler criterion tests the residues of products with holomorphic differentials"}, {"title": "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)", "url": "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf", "locator": "Ch. 6 §2, printed pp. 54–55: residues of meromorphic differentials and the global residue theorem"}]
---

## Example

Assume full AC ([[def-axiom-of-choice]]). Let $X=\mathbb C/\Lambda$ for a full complex lattice $\Lambda$, with origin $o=[0]$ and local quotient coordinate $z$ centred at $o$. Prescribe the function-valued principal parts
$$\eta_o=[1/z]\in\mathcal M_o/\mathcal O_o,\qquad \eta_p=0\quad(p\ne o).$$
There is no global meromorphic function with these principal parts. A putative solution would have divisor $[q]-[o]$ for a point $q\ne o$, and would give a degree-one proper holomorphic map to the sphere, contradicting the torus genus $1$.

The obstruction is the residue of a **differential**, rather than an invariant residue of a function germ: the nowhere-vanishing holomorphic differential $\omega=dz$ gives
$$\sum_{p\in X}\operatorname{Res}_p(\eta_p\omega)=\operatorname{Res}_o(dz/z)=1\ne0.$$
All holomorphic differentials are constant multiples of $dz$, so the corresponding residue functional is $c\,dz\mapsto c$. For a finite good cover and compatible comparison data as constructed below, the necessary-and-sufficient criterion of [[cor-prescribed-principal-parts-compact-riemann-surface]] detects exactly this obstruction.

## Facts & Assumptions

**Given:** Full AC, a full lattice $\Lambda$, its torus $X$, and the principal part $1/z$ at $o$ with zero principal parts elsewhere.

[F1] Full AC is inherited through RR, duality and the good-cover comparison chain ([[def-axiom-of-choice]]).

[F2] The quotient torus is compact with local lift charts and translation transitions. Its proof gives $\delta>0$ such that distinct lattice points are separated by at least $\delta$ ([[def-complex-lattice-and-complex-torus]], [[thm-complex-torus-quotient-is-well-defined]]).

[F3] A principal part is a finite negative Laurent polynomial. A differential's residue is its coefficient of $z^{-1}dz$, independent of coordinates ([[def-principal-part-at-an-isolated-point]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F4] Analytic RR gives $\ell(0)=1$, $i(0)=g$ and the canonical-divisor formula; Serre duality gives $i(A)=\ell(K-A)$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

[F5] Principal divisors have degree zero; meromorphic functions on compact $X$ are proper maps to the sphere when nonconstant, with pole order equal to fibre multiplicity ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F6] Proper nonconstant holomorphic maps have positive weighted fibre degree, and multiplicity one gives a holomorphic local inverse; genus is invariant under biholomorphism and the sphere has genus zero ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], [[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-genus-and-euler-characteristic-compact-riemann-surface]]).

[F7] The residues of a global meromorphic differential on compact $X$ sum to zero ([[thm-residue-theorem-compact-riemann-surface]]).

[F8] The bundle $\mathcal O_X(0)$ has a global frame $1$. A finite good cover has disc chart members and disc-biholomorphic nonempty finite intersections. Under full AC a contractible proper plane domain is biholomorphic to a disc by the grand simple-connectivity equivalence ([[def-line-bundle-associated-to-a-divisor]], [[def-cech-cohomology-holomorphic-line-bundle-sections]], [[thm-grand-equivalence-for-simply-connected-plane-domains]]).

[F9] Compatible metrics exist under countable choice, hence full AC ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F10] A supplied finite good cover subordinate to holomorphic frame domains has the canonical sheaf/Čech/Dolbeault comparison ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]). With this comparison and supplied compatible metrics, principal parts are realizable if and only if their residue sum paired against every holomorphic differential is zero; the pairing is independent of representatives and cover ([[cor-prescribed-principal-parts-compact-riemann-surface]]).

## Verification

1.1 By [F2], local lift coordinates differ by translations, so their differentials glue to a nowhere-zero holomorphic differential $\omega=dz$ with $K=(\omega)=0$. By [F4], $i(0)=\ell(K)=\ell(0)=1$, so $g=1$ and $h^0(X,K_X)=1$. Thus every holomorphic differential is $c\,dz$. The prescribed principal part is nonzero by [F3] and would force a simple pole at $o$ with no other poles. [F1, F2, F3, F4, given, algebra]

2.1 If a meromorphic function $f$ realized the data, [F5] would give $(f)=E-[o]$ with $E$ effective of degree one. Hence $E=[q]$ and $q\ne o$. The weighted fibre over infinity has one simple point, so [F6] gives degree one; every fibre is then one point of multiplicity one. The local holomorphic inverses in [F6] glue to a global inverse, making $X$ biholomorphic to the sphere, contrary to $g=1$ in step 1.1. Independently, $f\omega$ would have residue $1$ at $o$ and zero elsewhere by [F3], contradicting [F7]. This directly proves nonsolvability without a good-cover hypothesis. [F3, F5, F6, F7, step 1.1, algebra]

3.1 Choose $0<r<\delta/4$ using [F2]. The quotient images of radius-$r$ plane balls cover $X$ and are disc chart domains; compactness gives a finite subcover. In the lift of any one member, another member that intersects it has at most one relevant translated radius-$r$ ball: two such centres would be within $4r<\delta$ of each other, contrary to [F2]. Thus every nonempty finite intersection lifts injectively to an intersection of finitely many plane balls. It is bounded, open and convex; straight-line contraction to an interior point makes it contractible, and [F8] makes it disc-biholomorphic. This is a finite good cover subordinate to the global holomorphic frame $1$ of $\mathcal O_X(0)$ from [F8]. Supply compatible metrics by [F9]; the canonical comparison in [F10] supplies the comparison map used by its residue criterion. By [F3], pairing the data with $c\,dz$ gives $\operatorname{Res}_o(c\,dz/z)=c$, since all other terms vanish; replacing the representative $1/z$ by a holomorphic perturbation leaves this residue unchanged. Step 1.1 identifies the entire differential space, so this is the complete residue functional, and [F10] is the exact necessary-and-sufficient obstruction criterion. Its value $1$ at $dz$ proves the claimed failure. [F2, F3, F8, F9, F10, step 1.1, choose, construct, algebra] ∎

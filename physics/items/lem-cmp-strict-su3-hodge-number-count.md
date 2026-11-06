---
id: lem-cmp-strict-su3-hodge-number-count
kind: lemma
title: "Hodge-number and Betti-number counts under exact SU(3) holonomy"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - thm-general-stokes-theorem
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: null
sources:
  references:
    - title: "Paul S. Aspinwall, Compactification, Geometry and Duality: N=2, arXiv:hep-th/0001001v1"
      url: "https://arxiv.org/pdf/hep-th/0001001v1"
      locator: "§2.4, PDF pp. 9–13; exact SU(3)-holonomy compactifications and the source-reported multiplet context."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, author manuscript (2012)"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter VI, §§5.1–6.1, PDF pp. 300–307, and §8.2, PDF p. 312; Kähler-operator conventions and holomorphic-form context. The local Ricci-flat Bochner identity is derived here."
---

## Statement

Assume AC. Let $X$ be a connected compact Kähler complex threefold with a Kähler metric whose Ricci form is zero and whose Levi-Civita holonomy is exactly $SU(3)$. Write $h^{p,q}=\dim_{\mathbb C}H^q(X,\Omega_X^p)$ and $b_k=\dim_{\mathbb R}H^k(X;\mathbb R)$. Then
$$h^{1,0}=h^{2,0}=0,\quad h^{3,0}=1,\quad b_1=0,\quad b_2=h^{1,1},\quad b_3=2h^{2,1}+2,\quad b_4=h^{1,1}.$$

## Facts & Assumptions

**Given:** AC; a connected compact Kähler threefold $X$; a Kähler metric $g$ with zero Ricci form and holonomy group exactly $SU(3)$ in a unitary frame; and the Hodge numbers and Betti numbers defined in the Statement.

[F1] [[def-axiom-of-choice]] is the full choice-function axiom. It is the axiom required by the compact-Kähler Hodge supplier.

[F2] [[def-gts-compact-calabiyau-manifold-conventions]] defines exact holonomy as equality of the Levi-Civita parallel-transport group with $SU(3)$ in a unitary frame, and fixes the meaning of connected compact Kähler threefold.

[F3] [[def-gts-kahler-class-canonical-bundle-and-ricci-form]] defines the Ricci form by $\rho=-i\partial\bar\partial\log\det H$. The hypothesis $\rho=0$ makes the traced curvature action on each covariant holomorphic index zero in the Bochner identity.

[F4] [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] gives unique harmonic representatives, the direct sum $H^k(X;\mathbb C)=\bigoplus_{p+q=k}H^{p,q}(X)$, Hodge conjugation, and $H^{p,q}(X)\cong H^q(X,\Omega_X^p)$ under AC. Its Kähler-identity fact and proof also establish that the Hodge star commutes with $\Delta_d$, so it maps real harmonic two-forms to real harmonic four-forms.

[F5] [[thm-general-stokes-theorem]] gives zero integral for the divergence term on this compact boundaryless manifold; full AC implies its countable-choice hypothesis.

## Proof

**Proof technique:** Bochner identity followed by invariant-form and Hodge counting.

**Given:** The compact Kähler metric with zero Ricci form and exact $SU(3)$ holonomy, the Hodge-number conventions, and AC.

1.1 Let $\alpha$ be a holomorphic covariant alternating $p$-tensor, $0\le p\le3$. In holomorphic coordinates the Kähler condition gives $\partial_i h_{j\bar k}=\partial_j h_{i\bar k}$; substituting this identity into the Levi-Civita formula makes the mixed Christoffel symbols $\Gamma^k_{\bar j i}$ zero. Hence $\nabla^{0,1}\alpha=\bar\partial\alpha=0$. In unitary holomorphic normal coordinates, commute $\nabla_j$ and $\nabla_{\bar j}$ on each covariant index. The traced commutator is the Ricci-form contraction on that index, so $\sum_j[\nabla_j,\nabla_{\bar j}]\alpha_{i_1\ldots i_p}=0$ by [F3]. The product rule for $|\alpha|^2$ therefore gives the Bochner identity $\frac12\Delta|\alpha|^2=|\nabla^{1,0}\alpha|^2$ at the coordinate center, with $\Delta=\operatorname{div}\nabla$; the same tensorial calculation holds at every point. Since $X$ is compact without boundary, $\int_X\Delta|\alpha|^2dV=0$. Thus the continuous nonnegative function $|\nabla^{1,0}\alpha|^2$ has zero integral and vanishes everywhere. Together with $\nabla^{0,1}\alpha=0$, every holomorphic $p$-form is parallel. [F3, F5, given, algebra]

2.1 Parallel $(p,0)$-forms are exactly the vectors fixed by holonomy in $\Lambda^p(\mathbb C^3)^*$. For a diagonal element $\operatorname{diag}(e^{i\theta_1},e^{i\theta_2},e^{-i(\theta_1+\theta_2)})\in SU(3)$, the three weights on $\Lambda^1$ are $e^{-i\theta_1},e^{-i\theta_2},e^{i(\theta_1+\theta_2)}$, none identically $1$; the three weights on $\Lambda^2$ are $e^{-i(\theta_1+\theta_2)},e^{i\theta_2},e^{i\theta_1}$, also none identically $1$. On $\Lambda^3$ the action is the determinant, identically $1$, so its invariant space is one-dimensional. On $\Lambda^0$ the invariant space consists of constants and is one-dimensional because $X$ is connected. By [F4], these dimensions are $h^{p,0}$, giving $h^{1,0}=h^{2,0}=0$ and $h^{3,0}=1$. Hodge conjugation then gives $h^{0,1}=h^{0,2}=0$ and $h^{0,3}=1$. [F2, F4, given, step 1.1, algebra]

3.1 The Hodge direct sum in [F4] yields $b_1=h^{1,0}+h^{0,1}=0$, $b_2=h^{2,0}+h^{1,1}+h^{0,2}=h^{1,1}$, and $b_3=h^{3,0}+h^{2,1}+h^{1,2}+h^{0,3}=2h^{2,1}+2$, using conjugation from [F4] and step 2.1. The real Hodge star on this oriented six-manifold maps harmonic real two-forms bijectively to harmonic real four-forms: it commutes with the Hodge Laplacian and $*^2=(-1)^{k(6-k)}=1$ for $k=2,4$, so it is its own inverse on those degrees. By uniqueness of harmonic representatives in [F4], the dimensions are $b_2$ and $b_4$. Hence $b_4=b_2=h^{1,1}$. The full choice axiom [F1] is required by the imported Hodge result [F4]. [F1, F4, step 2.1, algebra] ∎

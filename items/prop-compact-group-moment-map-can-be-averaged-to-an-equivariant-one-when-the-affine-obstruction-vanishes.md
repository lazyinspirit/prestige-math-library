---
id: prop-compact-group-moment-map-can-be-averaged-to-an-equivariant-one-when-the-affine-obstruction-vanishes
kind: proposition
title: A compact-group moment map can be averaged to an equivariant one when the affine obstruction vanishes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors, lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle, cor-normalized-haar-measure-on-a-compact-lie-group, prop-integration-against-haar-is-invariant-under-translations-and-conjugation, prop-adjoint-intertwines-the-exponential-map, def-fundamental-vector-field-of-a-left-action, def-axiom-of-choice, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Proposition 7.15(a) and its averaging argument, printed page 85
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.1 and Lecture 26, §26.3, printed pages 147, 166
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and $\mathrm{AC}_\omega$. Let a compact Lie group $G$
act symplectically on a connected symplectic manifold $(M,\omega)$, and suppose
that an infinitesimal moment map $\mu:M\to\mathfrak g^*$ is supplied, so that
its components satisfy $d\mu^\xi=-\iota_{\xi_M}\omega$ and depend linearly on
$\xi$. Then the Haar average

$$\bar\mu(p):=\int_G g^{-1}\cdot\mu(g\cdot p)\,d\mu_G(g)$$

is a coadjoint-equivariant moment map for the action. It differs from $\mu$ by
a constant coadjoint-fixed covector, so the constant affine non-equivariance
cocycle of $\mu$ is a coboundary. The averaging uses the supplied component
Hamiltonians and does not produce one when none is given: the existence of an
infinitesimal moment map remains an assumption, and no component one-form
$\iota_{\xi_M}\omega$ is proved exact here.

## Facts & Assumptions

**Given:** the Axiom of Choice, $\mathrm{AC}_\omega$, a compact Lie group acting symplectically on connected $(M,\omega)$, and a supplied infinitesimal moment map $\mu$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]] and $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]].

[A2] AC provides the normalized Haar measure; $\mathrm{AC}_\omega$ is inherited from the fundamental-field interface; the supplied moment map is an assumption, not a consequence of the averaging.

[F1] $G$ carries a normalized Haar probability measure invariant under left and right translations and inversion, and integrals of integrable functions are invariant under these substitutions. [[cor-normalized-haar-measure-on-a-compact-lie-group]], [[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]].

[F2] $\mu$ is an infinitesimal moment map: $d\mu^\xi=-\iota_{\xi_M}\omega$ for all $\xi$, and $\mu(g\cdot p)$ is smooth in $(g,p)$. [[def-moment-map-and-component-hamiltonian]].

[F3] Fundamental fields are equivariant: $(\operatorname{Ad}_g\xi)_M(g\cdot p)=d(a_g)_p\xi_M(p)$, and the action preserves $\omega$. [[prop-adjoint-intertwines-the-exponential-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F4] On a connected manifold, two equivariant moment maps for one action differ by a constant element of $(\mathfrak g^*)^G$. [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]].

[F5] The defect $c(\xi,\eta)=\{\mu^\xi,\mu^\eta\}-\mu^{[\xi,\eta]}$ of an infinitesimal moment map on connected $M$ is constant and is a two-cocycle; it vanishes exactly when $\mu$ is equivariant. [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]].

## Proof

**Proof technique:** direct.

1.1 The integrand $(g,p)\mapsto g^{-1}\cdot\mu(g\cdot p)$ is smooth, being a composition of the smooth action, the smooth coadjoint action and $\mu$; since $G$ is compact, integrating the finitely many components of this $\mathfrak g^*$-valued function against the normalized Haar measure defines a smooth map $\bar\mu:M\to\mathfrak g^*$. [A2, F1, F2]

2.1 Equivariance: for $h\in G$ and $p\in M$, substituting $g=hk$ in the defining integral, then using equivariance of $\mu$ and $h^{-1}h=e$, gives $$\bar\mu(h\cdot p)=\int_Gk^{-1}\cdot\mu(kh\cdot p)\,d\mu_G(k).$$ Substituting $k=k_1^{-1}$ (inversion invariance) and then $k_1=hk_2$ (left invariance) turns this into $$h\cdot\int_Gk_2\cdot\mu(k_2^{-1}\cdot p)\,d\mu_G(k_2)=h\cdot\bar\mu(p),$$ the last equality by inversion invariance of Haar. Hence $\bar\mu$ is coadjoint equivariant. [step 1.1, F1, F2]

2.2 Component equations: for fixed $g\in G$ and $\xi\in\mathfrak g$, the function $p\mapsto\langle g^{-1}\cdot\mu(g\cdot p),\xi\rangle=\mu^{\operatorname{Ad}_g\xi}(g\cdot p)$ has differential $$d\mu^{\operatorname{Ad}_g\xi}_{g\cdot p}\bigl(d(a_g)_pv\bigr)=-\omega_{g\cdot p}\bigl((\operatorname{Ad}_g\xi)_M(g\cdot p),d(a_g)_pv\bigr)=-\omega_p\bigl(\xi_M(p),v\bigr)$$ by [F2] and [F3], independently of $g$. Integrating over $G$ gives $d\bar\mu^\xi_p(v)=-\omega_p(\xi_M(p),v)$, the component moment equation for $\bar\mu$. [step 1.1, F2, F3]

3.1 By step 2.2 the averaged map satisfies the component moment equations, and by step 2.1 it is coadjoint equivariant; hence $\bar\mu$ is an equivariant moment map for the action. [step 2.1, step 2.2]

4.1 Since $M$ is connected, [F4] applies to the two equivariant moment maps $\bar\mu$ and $\mu$: their difference $\delta:=\bar\mu-\mu$ is a constant element of $(\mathfrak g^*)^G$. Equivalently the constant cocycle $c$ of [F5] is the coboundary $c(\xi,\eta)=\delta([\xi,\eta])$, so the affine obstruction vanishes on the nose for this supplied $\mu$. [step 3.1, F4, F5]

5.1 The construction began from the supplied linear family of component Hamiltonians; no step here produces such a family when the closed one-forms $-\iota_{\xi_M}\omega$ have no primitives, so averaging trivializes only the affine obstruction of a supplied infinitesimal moment map. [step 4.1, A2, A1] ∎

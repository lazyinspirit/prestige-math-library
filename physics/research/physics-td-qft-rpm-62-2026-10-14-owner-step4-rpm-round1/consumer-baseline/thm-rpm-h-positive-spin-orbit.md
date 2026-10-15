---
id: thm-rpm-h-positive-spin-orbit
kind: theorem
title: "Positive classical spin Poincare orbit and stabilizer jump"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 7
deps: ["thm-rpm-h-poincare-moment-map-and-algebra", "thm-coadjoint-orbits-are-symplectic-manifolds", "def-countable-choice", "def-rpm-h-poincare-charge-space"]
dependency_roles: {"thm-rpm-h-poincare-moment-map-and-algebra": "mathematical-premise", "thm-coadjoint-orbits-are-symplectic-manifolds": "mathematical-premise", "def-countable-choice": "mathematical-premise", "def-rpm-h-poincare-charge-space": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nesta van der Schaaf, Classical and Quantum Particles in Galilean and Poincaré Spacetime, complete 2017 monograph PDF; §9.3 PDF pp. 77–79; §10.2.2 PDF pp. 81–82."
      url: https://www.math.ru.nl/~landsman/Nesta.pdf
      locator: "Complete 85-page monograph; full relevant sections inspected. Source uses natural units and signature (+---), translated explicitly in local statements."
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
landmark: false
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G=\mathbb R^4\rtimes SO^+(1,3)$ act coadjointly on the dual charge space of [[def-rpm-h-poincare-charge-space]]. At a charge point $(P^a,J^{ab})$, define $P_b:=\eta_{ba}P^a$, $J_{cd}:=\eta_{ce}\eta_{df}J^{ef}$, and $P^2:=\eta_{ab}P^aP^b$. Let $\varepsilon_{abcd}$ be the totally antisymmetric Minkowski volume tensor with $\varepsilon_{0123}=+1$; raising all indices with $\eta=\operatorname{diag}(-1,1,1,1)$ gives $\varepsilon^{0123}=-1$. Define the algebraic vector $W^a:=\tfrac12\varepsilon^{abcd}P_bJ_{cd}$, and write $W^2:=\eta_{ab}W^aW^b$ and $W\cdot P:=\eta_{ab}W^aP^b$. For fixed mass $m>0$ in kg, angular-momentum parameter $s>0$ in kg m$^2$/s, and $c>0$ in m/s, take the rest charge point with $P^a=(mc,0,0,0)$ and $J^{12}=s$, all other independent components of $J$ being zero. Its coadjoint orbit is an eight-dimensional smooth symplectic manifold with its KKS form. On this orbit, $P^2=-m^2c^2$, $P$ is future, $W\cdot P=0$, and $W^2=m^2c^2s^2$. The exact joint invariant set with these values is this one orbit. At $s=0$ the rest stabilizer has dimension four and the spinless orbit has dimension six; no smoothness claim is made for a larger union of Casimir level sets.

## Facts & Assumptions

**Given:** The proper orthochronous Poincaré group and charge pairing, $m>0$, $s>0$, and the rest representative in the statement.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only; no full axiom of choice is used.

[F1] [[def-rpm-h-poincare-charge-space]]: the Poincaré group is a ten-dimensional Lie group with semidirect bracket and dual translation/antisymmetric Lorentz charges $(P,J)$; here $P_b=\eta_{ba}P^a$ and $J_{cd}=\eta_{ce}\eta_{df}J^{ef}$ are lowered with $\eta$.

[L1] [[thm-rpm-h-poincare-moment-map-and-algebra]]: the current assigned A draft states the affine coadjoint action (P,J)->(Lambda P,Lambda J Lambda^T+a wedge Lambda P) and the charge map with the exp(-s xi) convention. The carrier exists as this batch-26 draft, but its H0/H8 inputs and proof review remain unresolved.

[F2] [[thm-coadjoint-orbits-are-symplectic-manifolds]]: under $\mathrm{AC}_\omega$, every coadjoint orbit has the canonical smooth homogeneous-space structure and the KKS form is smooth, closed, nondegenerate, with $\omega_\beta(\xi_\mathcal O,\eta_\mathcal O)=\beta([\xi,\eta])$.

## Proof

**Proof technique:** rest-frame classification and stabilizer calculation.

**Given:** The rest covector and exact coadjoint action conditional on [L1].

1.1 In the rest frame $P=(mc,0)$, the spatial components of $W$ are the three independent duals of $J^{ij}$, multiplied by the nonzero factor $mc$. Thus $|\mathbf W|=mcs$ and $W^0=0$, so $W\cdot P=0$ and $W^2=m^2c^2s^2$. Under translations, $J$ changes by $a\wedge P$; inserting this into $W$ adds an epsilon contraction with two copies of $P$, which vanishes by antisymmetry. Lorentz covariance of $\varepsilon$ under $SO^+$ and the charge action [L1] preserve these scalar identities over the orbit. [F1, L1, algebra]

1.2 A stabilizer element must fix $P=(mc,0)$, so its Lorentz part is a spatial rotation. Preserving the nonzero spin vector leaves exactly the $SO(2)$ rotations about that axis, of dimension one. In the coadjoint action, preserving $J^{0i}=0$ then forces the spatial translation part to vanish, while translations parallel to $P$ remain free, giving one further dimension. The stabilizer has dimension two, and since $\dim G=10$ by [F1], the orbit dimension is eight. [F1, L1, algebra]

2.1 Any future timelike $P$ with $P^2=-m^2c^2$ can be sent to rest by a proper orthochronous Lorentz transformation. In that frame, choose the translation part $a$ to remove the three $J^{0i}$ components; the remaining spatial spin vector has norm $s$ by step 1.1, and a spatial rotation sends it to the specified $J^{12}=s$ axis. Therefore every pair with the stated invariants lies in the rest representative's orbit; the converse follows from step 1.1. [F1, L1, step 1.1, algebra]

3.1 Applying [F2] to this orbit gives its canonical smooth homogeneous-space structure and nondegenerate closed KKS two-form. If $s=0$, the stabilizer instead contains all three spatial rotations and the one translation parallel to $P$, hence has dimension four and its orbit dimension is $10-4=6$. This establishes the stabilizer jump without asserting regularity of any ambient Casimir locus. [F1, F2, L1, A1] ∎

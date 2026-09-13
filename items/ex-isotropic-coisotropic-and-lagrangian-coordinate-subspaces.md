---
id: ex-isotropic-coisotropic-and-lagrangian-coordinate-subspaces
kind: example
title: Isotropic, coisotropic, symplectic, and Lagrangian coordinate subspaces
status: draft
origin: pipeline
deps: ["def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Definition 2.7 and Examples 2.8--2.9, pp. 8--9
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

In standard $\mathbb R^4$ with symplectic basis $(e_1,e_2,f_1,f_2)$,
coordinate subspaces realize each of the four subspace types.

## Facts & Assumptions

**Given:** $\omega(e_i,f_j)=\delta_{ij}$,
$\omega(f_j,e_i)=-\delta_{ij}$, and the pairings among two $e$-vectors or
among two $f$-vectors are zero.

[F1] The four types are determined by $W$, $W^\omega$, their inclusion, and
their intersection.
[[def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces]].

## Verification

**Proof technique:** direct.

1.1 Direct pairing gives $\langle e_1\rangle^\omega=\langle e_1,e_2,f_2\rangle$, so $\langle e_1\rangle$ is isotropic but not Lagrangian. Taking orthogonals reverses this equality, so $\langle e_1,e_2,f_2\rangle$ is coisotropic but not Lagrangian. [F1, given, algebra]

1.2 Also $\langle e_1,f_1\rangle^\omega=\langle e_2,f_2\rangle$, making $\langle e_1,f_1\rangle$ symplectic, while $\langle e_1,e_2\rangle^\omega=\langle e_1,e_2\rangle$, making the latter Lagrangian. [F1, given, algebra]

2.1 The four displayed coordinate subspaces therefore exhibit, respectively, a proper isotropic, a proper coisotropic, a proper symplectic, and a Lagrangian subspace. [F1, step 1.1, step 1.2] ∎

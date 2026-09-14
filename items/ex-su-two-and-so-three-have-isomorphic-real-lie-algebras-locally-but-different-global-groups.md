---
id: ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups
kind: example
title: "SU(2) and SO(3): same local Lie theory, different groups"
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups, thm-universal-covering-lie-group]
landmark: false
proof_strategy: direct
axiom_base: ZF + AC_omega
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, SU(2) and SO(3)"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "Exercises 2.8–2.10 and §3.10, especially (3.25), printed pp. 24–25 and 44–45"
---

## Example

Conjugation on imaginary quaternions defines a twofold covering

$$q:\operatorname{SU}(2)\longrightarrow\operatorname{SO}(3)$$

with kernel $\{\pm I\}$. Its differential is an isomorphism
$\mathfrak{su}(2)\cong\mathfrak{so}(3)$, but the two connected groups
are not isomorphic: $\operatorname{SU}(2)$ is simply connected whereas
$\pi_1(\operatorname{SO}(3))\cong\mathbb Z/2$.

This item is stated under $\mathsf{ZF}+\mathsf{AC}_\omega$.

## Facts & Assumptions

**Given:** Identify $\operatorname{SU}(2)$ with the unit quaternions
$S^3$ and $\mathbb R^3$ with the imaginary quaternions.

[L1] Isomorphic real Lie algebras determine the same simply connected
integration but connected integrations may differ by discrete central
quotients
([[cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups]]).

[L2] The universal covering Lie group is a Lie-group covering with the
same Lie algebra ([[thm-universal-covering-lie-group]]).

## Verification

**Proof technique:** explicit covering.

1.1 For a unit quaternion $a$, the map $u\mapsto aua^{-1}$ preserves the norm and orientation on $\operatorname{Im}\mathbb H$, so it gives $q(a)\in\operatorname{SO}(3)$. It is a homomorphism. If it fixes every imaginary quaternion, then $a$ commutes with $i,j,k$, hence is real; unit length gives $a=\pm1$. Thus $\ker q=\{\pm1\}$. [given, algebra]
2.1 Differentiating at $1$ sends an imaginary quaternion $u$ to $A_u(v)=uv-vu=2u\times v$. This map is injective and both real vector spaces have dimension three, so it is an isomorphism. Its bracket compatibility follows by differentiating the homomorphism. The image of $q$ is therefore an open subgroup of connected $\operatorname{SO}(3)$, hence all of it; $q$ is a two-sheeted covering. [step 1.1, algebra]
3.1 Since $\operatorname{SU}(2)\cong S^3$ is simply connected, [L2] identifies $q$ as the universal cover. Its deck group is its kernel, so $\pi_1(\operatorname{SO}(3))\cong\{\pm1\}\cong\mathbb Z/2$. A Lie-group isomorphism is a diffeomorphism and would preserve the fundamental group; hence the groups are not isomorphic even though step 2.1 gives isomorphic Lie algebras. This realizes [L1]. [L1, L2, step 1.1, step 2.1]
4.1 The quaternionic calculation itself is finite. The declared $\mathsf{AC}_\omega$ is propagated from the library's covering-group suppliers [L1]–[L2]; it is not silently strengthened and no additional choice is used here. [L1, L2] ∎

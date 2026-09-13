---
id: prop-regular-common-level-sets-are-lagrangian-submanifolds
kind: proposition
title: Regular common level sets are Lagrangian submanifolds
status: draft
origin: pipeline
deps: ["def-completely-integrable-hamiltonian-system", "def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds", "thm-equivalent-characterizations-of-lagrangian-subspaces", "thm-a-regular-level-set-is-an-embedded-submanifold", "prop-tangent-space-of-a-regular-level-set-is-the-kernel"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, discussion before Lemma 18.11, p. 110
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

For a completely integrable system
$F=(F_1,\ldots,F_n)$ on a $2n$-manifold, every nonempty regular common level
$N=F^{-1}(c)$ is an $n$-dimensional Lagrangian submanifold. At each point,

$$T_pN=\operatorname{span}\{X_{F_1}(p),\ldots,X_{F_n}(p)\}.$$

## Facts & Assumptions

**Given:** A completely integrable system and a nonempty regular fibre.

[F1] At a regular value, $N$ is an embedded codimension-$n$ submanifold and
$T_pN=\ker dF_p$.
[[thm-a-regular-level-set-is-an-embedded-submanifold]],
[[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

[F2] The functions pairwise Poisson commute, and the $dF_i$ are independent
on the dense open regular locus.
[[def-completely-integrable-hamiltonian-system]].

[F3] In a $2n$-dimensional symplectic vector space an isotropic $n$-plane is
Lagrangian, and a submanifold is Lagrangian exactly when its tangent spaces
are Lagrangian subspaces.
[[thm-equivalent-characterizations-of-lagrangian-subspaces]],
[[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]].

## Proof

**Proof technique:** direct.

1.1 By [F1], $N$ has dimension $2n-n=n$ and $T_pN=\bigcap_j\ker dF_j$. For every $i,j$, $dF_j(X_{F_i})=\omega(X_{F_j},X_{F_i})=-\{F_j,F_i\}=0$, so each $X_{F_i}(p)$ is tangent. [F1, F2, given]

2.1 The bundle isomorphism $\omega^\flat$ sends $X_{F_i}$ to $dF_i$. Since $N$ is a regular fibre, [F1] says $dF_p$ has rank $n$, so these $n$ vectors are independent. By dimension they span $T_pN$. Their mutual symplectic pairings are the zero brackets $\{F_i,F_j\}$ from [F2], so $T_pN$ is isotropic. [F1, F2, step 1.1]

3.1 Apply [F3] at every point: the $n$-dimensional isotropic tangent spaces are Lagrangian. Thus $N$ is a Lagrangian submanifold and the displayed spanning formula holds. [F3, step 1.1, step 2.1] ∎

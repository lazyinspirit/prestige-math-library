---
id: prop-characteristic-distribution-of-a-coisotropic-submanifold-is-involutive
kind: proposition
title: Characteristic distribution of a coisotropic submanifold is involutive
status: draft
origin: pipeline
deps: ["def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds", "thm-cartans-magic-formula"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 9, coisotropic embeddings and characteristic distribution, pp. 52--53
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

If $C$ is a coisotropic submanifold of $(M,\omega)$, then

$$\mathcal K=\ker(\omega|_{TC})=(TC)^\omega$$

is a smooth constant-rank distribution on $C$, and it is involutive. It is
called the **characteristic distribution**.

## Facts & Assumptions

**Given:** A coisotropic submanifold $C\subseteq(M,\omega)$.

[F1] Coisotropic means $(T_pC)^\omega\subseteq T_pC$ at every $p$.
[[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]].

[F2] Cartan's formula relates Lie derivative, contraction, and exterior
differentiation. [[thm-cartans-magic-formula]].

## Proof

**Proof technique:** direct.

1.1 By [F1], the kernel of $\omega|_{T_pC}$ is exactly $(T_pC)^\omega$. If $\dim M=2n$ and $\dim C=k$, symplectic linear algebra gives its dimension $2n-k$, independent of $p$. It is the kernel of a smooth constant-rank bundle map $TC\to T^*C$, hence is a smooth subbundle. [F1, given, algebra]

2.1 Let $X,Y$ be local sections of $\mathcal K$ and $Z$ a tangent vector field on $C$. In the formula for $d(\omega|_C)(X,Y,Z)$, every differentiated pairing vanishes identically and all bracket terms except $-\omega([X,Y],Z)$ contain $X$ or $Y$ as an argument. Since $d\omega=0$, it follows that $\omega([X,Y],Z)=0$ for every $Z$. Thus $[X,Y]$ is a section of $\mathcal K$, proving involutivity. [F2, step 1.1, given] ∎

---
id: thm-equivalent-characterizations-of-lagrangian-subspaces
kind: theorem
title: Equivalent characterizations of Lagrangian subspaces
status: draft
origin: pipeline
deps: ["prop-symplectic-double-orthogonal-and-dimension-identities", "def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §2.2, discussion after Definition 2.7, pp. 8--9
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $(V,\omega)$ be a real symplectic vector space of dimension $2n$. For a subspace $L\le V$, the following
are equivalent:

1. $L=L^\omega$;
2. $L$ is isotropic and $\dim L=n$;
3. $L$ is coisotropic and $\dim L=n$;
4. $L$ is maximal among isotropic subspaces.

Thus each condition characterizes the Lagrangian subspaces.

## Facts & Assumptions

**Given:** A $2n$-dimensional real symplectic vector space $(V,\omega)$ and
$L\le V$.

[F1] For every $W\le V$, $\dim W+\dim W^\omega=2n$.
[[prop-symplectic-double-orthogonal-and-dimension-identities]].

[F2] Isotropic, coisotropic, and Lagrangian mean respectively
$W\subseteq W^\omega$, $W^\omega\subseteq W$, and $W=W^\omega$.
[[def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces]].

## Proof

**Proof technique:** direct.

1.1 If $L=L^\omega$, [F1] gives $2\dim L=2n$; [F2] then makes $L$ both isotropic and coisotropic. Thus condition 1 implies conditions 2 and 3. [F1, F2]

1.2 If condition 2 holds, then $L\subseteq L^\omega$ and [F1] gives $\dim L^\omega=n=\dim L$, hence equality. If condition 3 holds, the reverse inclusion and the same dimension calculation likewise give equality. Thus conditions 2 and 3 each imply condition 1. [F1, F2]

1.3 A self-orthogonal $L$ is maximal isotropic: if an isotropic $K$ contains $L$, then $K\subseteq K^\omega\subseteq L^\omega=L$, hence $K=L$. [F1, F2]

2.1 Conversely, suppose $L$ is maximal isotropic. If $L\ne L^\omega$, choose $v\in L^\omega\setminus L$; alternation and $v\in L^\omega$ make $L+\mathbb Rv$ a strictly larger isotropic subspace, which maximality forbids. Hence $L=L^\omega$. This argument also covers $n=0$, when $L=0$. [F2, choose, algebra] ∎

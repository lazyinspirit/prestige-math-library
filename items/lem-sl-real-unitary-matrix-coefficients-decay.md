---
dependency_level: 1
id: lem-sl-real-unitary-matrix-coefficients-decay
kind: lemma
title: "SLd coefficient decay at infinity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-cyclic-unitary-sl-hilbert-weak-subsequence
  - lem-sl-unipotent-fixed-vector-is-group-fixed
  - thm-singular-value-decomposition
  - thm-heine-borel-rn
proof_strategy: contradiction
sources:
  references:
    - title: "Dave Witte Morris, Introduction to Arithmetic Groups"
      url: "https://arxiv.org/pdf/math/0106063"
      locator: "§11.2, Mautner and matrix-coefficient method; the SLd specialization is proved directly"
    - title: "Kleinbock, Badly approximable systems of affine forms"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§2.2, Moore mixing input"
---

## Statement

Let $d\ge2$ and let $\pi$ be a strongly continuous unitary representation of $\operatorname{SL}_d(\mathbb R)$ on a Cauchy-complete complex Hilbert space. If there are no nonzero vectors fixed by the whole group, then every matrix coefficient $\langle\pi(g)v,z\rangle$ tends to zero as $g$ leaves every compact subset of the group. In particular it tends to zero along every escaping sequence. No general Howe–Moore theorem or Choice axiom is required for this representation-theoretic assertion about a given Hilbert space.

## Statement references

[Morris, §11.2](https://arxiv.org/pdf/math/0106063) — representation-theoretic method.

[Kleinbock, §2.2](https://arxiv.org/pdf/math/9808057v2) — the mixing input supplied by this specialization.

## Facts & Assumptions

**Given:** The representation in the Statement and fixed vectors $v,z$.

[F1] Every bounded sequence in the cyclic subspace of a given vector has an ambient weakly convergent subsequence, with an explicit construction requiring no Choice axiom. [[lem-cyclic-unitary-sl-hilbert-weak-subsequence]]

[F2] A vector fixed by one full elementary root subgroup $I+t e_{ij}$ is fixed by all of $\operatorname{SL}_d(\mathbb R)$. [[lem-sl-unipotent-fixed-vector-is-group-fixed]]

[F3] Finite-dimensional real matrices admit singular value decompositions. [[thm-singular-value-decomposition]]

[F4] Closed bounded subsets of finite Euclidean space are compact. [[thm-heine-borel-rn]]

## Proof

**Proof technique:** contradiction using compact orthogonal factors and a contracted root.

1.1 Suppose an escaping sequence has coefficient modulus at least $b>0$ along a subsequence; choose its successive indices by the least-index rule. For each matrix $g_n$ use a canonical singular value decomposition $g_n=k_na_nl_n$: order the eigenvalues of $g_n^Tg_n$, form the spectral projector for each distinct eigenvalue by its finite interpolation polynomial, and Gram–Schmidt the projected standard coordinate vectors in increasing order, skipping zero residuals. This determines an ordered orthonormal eigenbasis. Divide its images under $g_n$ by their positive singular values to determine the other basis. Since $\det g_n=1$ and the product of its singular values is1, the two orthogonal factors have the same determinant. If both determinants are $-1$, change the sign of the first column in both bases. Thus $k_n,l_n\in\operatorname{SO}(d)$ and $a_n=\operatorname{diag}(a_{1,n},\ldots,a_{d,n})$ has $a_{1,n}\ge\cdots\ge a_{d,n}>0$ and product1. This determined construction avoids countably choosing arbitrary SVD witnesses. [given, F3, assume-contra, construct]

2.1 F4 and coordinatewise nested dyadic-box extraction give a subsequence with $k_n\to k$ and $l_n\to l$. Strong continuity and unitarity imply that replacing $\pi(l_n)v$ by $v_0=\pi(l)v$ and $\pi(k_n^{-1})z$ by $z_0=\pi(k^{-1})z$ changes the coefficient by a quantity tending to zero. Hence $|\langle\pi(a_n)v_0,z_0\rangle|$ stays bounded away from zero along a tail. Moreover $a_{1,n}/a_{d,n}\to\infty$: a bounded-ratio subsequence, together with the ordered entries and their product1, would bound every entry above and away from zero and put $k_na_nl_n$ in a compact matrix set, contradicting escape. [F4, step 1.1, algebra]

3.1 Apply F1 to the bounded sequence $\pi(a_n)v_0$ and obtain an ambient weak limit $w$. For each fixed real $t$, put $u(t)=I+t e_{1d}$. Direct conjugation gives $a_n^{-1}u(t)a_n=I+t(a_{d,n}/a_{1,n})e_{1d}\to I$. Therefore $\|\pi(u(t))\pi(a_n)v_0-\pi(a_n)v_0\|=\|\pi(a_n^{-1}u(t)a_n)v_0-v_0\|\to0$. Taking pairings with an arbitrary ambient vector and then weak limits gives $\pi(u(t))w=w$. This holds for every real $t$ with the same weak limit. [F1, step 2.1, algebra]

4.1 F2 makes $w$ group-fixed, and the hypothesis forces $w=0$. Weak convergence then gives $\langle\pi(a_n)v_0,z_0\rangle\to0$, contradicting step 2.1. Thus every escaping sequence has coefficients tending to zero. To obtain the full at-infinity assertion without a hidden sequential Choice argument, use the compact exhaustion $K_n=\{g:\|g\|+\|g^{-1}\|\le n\}$ and the explicitly enumerated dense subgroup of rational elementary words. Failure of the asserted limit would, by continuity, give a member of that countable subgroup outside $K_n$ with coefficient modulus greater than half a fixed positive threshold, for every $n$. Taking its least enumerated member defines an escaping sequence contradicting what was just proved. Density follows by rationally approximating the finite elementary factorizations, as in the construction of F1. This proves the full statement. [F1, F2, F4, step 2.1, step 3.1, discharge-contradiction] ∎


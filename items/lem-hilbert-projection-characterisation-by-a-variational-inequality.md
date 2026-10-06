---
id: "lem-hilbert-projection-characterisation-by-a-variational-inequality"
kind: "lemma"
title: "The projection onto a closed convex set is characterised by a variational inequality"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "def-countable-choice"
  - "def-hilbert-space"
  - "def-real-and-complex-inner-product-space"
  - "def-relative-normed-convexity-and-separation"
  - "thm-hilbert-projection-variational-characterization"
  - "thm-projection-onto-a-nonempty-closed-convex-set"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Nguyen Dong Yen and Bui Trong Kim, Linear operators satisfying the assumptions of some generalized Lax-Milgram theorems, Acta Mathematica Vietnamica 26(3) (2001), 407-417"
      url: "https://math.ac.vn/uploads/files/0103407.pdf"
      locator: "Section 2, Theorems 2.1-2.3 and estimate (2.4), printed pp. 408-409 (Lax-Milgram; Stampacchia variational inequality; Lipschitz stability of the solution map)"
    - title: "J. T. Oden and N. Kikuchi, Theory of variational inequalities with applications to problems of flow through porous media, International Journal of Engineering Science 18 (1980), 1173-1284"
      url: "https://jtoden.oden.utexas.edu/wp-content/uploads/2013/06/1980-001.TheoryofVariationalInequalitieswithApplicationstoProblemsofFlowThroughPorousMedia.pdf"
      locator: "Chapter 1 Sections 1.2-1.5, printed pp. 1180-1189 (projections onto closed convex sets and their characterisation; construction of the contraction and its constant)"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a real Hilbert space ([[def-hilbert-space]]), let $K\subseteq H$ be nonempty, closed and convex ([[def-relative-normed-convexity-and-separation]]), let $x\in H$, and let $P_Kx$ denote the unique nearest point of $K$ to $x$, whose existence and uniqueness are supplied by [[thm-projection-onto-a-nonempty-closed-convex-set]]. Then for every $u\in K$ one has
$$u=P_Kx\qquad\Longleftrightarrow\qquad \langle u-x,\,v-u\rangle\ge0\quad\text{for every }v\in K .$$

## Facts & Assumptions

**Given:** A real Hilbert space $H$, a nonempty closed convex set $K\subseteq H$, a vector $x\in H$ and a point $u\in K$; $P_Kx$ is the unique nearest point of $K$ to $x$.

[A1] [[def-countable-choice]]: Countable Choice is the selection principle consumed by the existence-and-uniqueness theorem for nearest points.

[F1] [[thm-projection-onto-a-nonempty-closed-convex-set]]: under Countable Choice, a nonempty closed convex subset $K$ of a real or complex Hilbert space has exactly one nearest point to $x$; hence $P_Kx$ is well defined and $u=P_Kx$ holds exactly when $\|x-u\|\le\|x-v\|$ for every $v\in K$.

[F2] [[thm-hilbert-projection-variational-characterization]]: for $p\in K$, $p$ is the nearest point of $K$ to $x$ if and only if $\operatorname{Re}\langle x-p,\,v-p\rangle\le0$ for every $v\in K$.

[F3] [[def-real-and-complex-inner-product-space]]: the inner product of a real inner product space is real-valued, so $\operatorname{Re}\langle a,b\rangle=\langle a,b\rangle=\langle b,a\rangle$ and $\langle a,b\rangle=-\langle -a,b\rangle$ for all vectors $a,b$; in particular $u-x=-(x-u)$.

## Proof

**Proof technique:** direct.

**Given:** A real Hilbert space $H$, a nonempty closed convex set $K\subseteq H$, vectors $x\in H$ and $u\in K$, and the unique nearest point $P_Kx$ of $K$ to $x$.

1.1 By [F1] the point $u$ equals $P_Kx$ if and only if $u$ is a nearest point of $K$ to $x$, that is, $\|x-u\|\le\|x-v\|$ for every $v\in K$; here Countable Choice enters through the existence and uniqueness of the nearest point recorded in [A1]. [A1, F1]

1.2 By [F2] the point $u$ is a nearest point of $K$ to $x$ if and only if $\operatorname{Re}\langle x-u,\,v-u\rangle\le0$ for every $v\in K$. [F2]

2.1 Since the inner product is real-valued [F3], $\operatorname{Re}\langle x-u,v-u\rangle=\langle x-u,v-u\rangle=-\langle u-x,v-u\rangle$, so the inequality of step 1.2 is equivalent to $\langle u-x,v-u\rangle\ge0$ for every $v\in K$; combining this with step 1.1 gives $u=P_Kx$ if and only if $\langle u-x,v-u\rangle\ge0$ for every $v\in K$, which is the asserted characterisation. [step 1.1, step 1.2, F3, algebra] ∎


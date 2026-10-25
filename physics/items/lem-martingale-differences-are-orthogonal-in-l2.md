---
id: "lem-martingale-differences-are-orthogonal-in-l2"
kind: "lemma"
title: "Martingale differences are orthogonal in l2"
deps: ["def-filtration-and-filtered-probability-space", "def-martingale-difference-sequence", "cor-cauchy-schwarz-for-random-variables", "thm-taking-out-what-is-known", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition; Theorems 4.4.7\u20134.4.8, pp.237\u2013238"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Statement

Assume AC. Let $(\mathcal F_n)_{n\ge0}$ be a filtration, and let $(D_k)_{k\ge1}$ be real square-integrable martingale differences relative to it. For $1\le i<j$, $E[D_iD_j]=0$, so their real $L^2$ inner product is zero. For every $n\ge0$, $E[(\sum_{k=1}^nD_k)^2]=\sum_{k=1}^nE[D_k^2]$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Square-integrable variables have an integrable product by Cauchy–Schwarz. [[cor-cauchy-schwarz-for-random-variables]].

[F2] Under AC for conditional-expectation existence, a finite measurable factor may be taken out when its product with the integrable input is integrable. [[thm-taking-out-what-is-known]].

[F3] Under AC for existence, conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F4] Finite linear combinations remain integrable and their integrals are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F5] We assume AC: every family of nonempty sets has a choice function. [[def-axiom-of-choice]].

[F6] A filtration is increasing: $\mathcal F_n\subseteq\mathcal F_{n+1}$. [[def-filtration-and-filtered-probability-space]].

[F7] Each difference is measurable at its time and has zero conditional mean given its preceding time. [[def-martingale-difference-sequence]].

## Proof

**Proof technique:** direct.

1.1 To justify finite integral linearity independently of the affected published proof, augment every finite disjoint simple display by its zero-coefficient complement. Pairwise intersections of two augmented displays partition the whole space and carry equal coefficients wherever nonempty, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple monotonicity and additivity; scalar zero is handled directly and positive scalars termwise. Supremum over simple minorants, followed by increasing simple approximation and the standard sets $\{f_j\ge cs\}$ for $0<c<1$, gives monotone convergence and nonnegative additivity. Positive/negative and real/imaginary decompositions therefore give finite $L^1$ linearity. This repairs the exact foundation used by [F4] and by the cited conditional-expectation identities. For $i<j$, Cauchy–Schwarz gives $E|D_iD_j|\le(E D_i^2)^{1/2}(E D_j^2)^{1/2}<\infty$. Iterating [F6] gives $\mathcal F_i\subseteq\mathcal F_{j-1}$, so [F7] makes $D_i$ measurable for the latter sigma-algebra. Both $D_j$ and $D_iD_j$ are integrable, so the unbounded-factor clause applies: $E[D_iD_j\mid\mathcal F_{j-1}]=D_iE[D_j\mid\mathcal F_{j-1}]=0$. Expectation preservation gives $E[D_iD_j]=0$. The AC assumption [F5] meets the existence hypotheses of [F2, F3, F7]. All conditional identities are identities of almost-sure classes; this argument selects no sequence of representatives. [given, F1, F2, F3, F5, F6, F7, construct]

2.1 For a fixed positive $n$, expand the finite square as $\sum_{k=1}^nD_k^2+2\sum_{1\le i<j\le n}D_iD_j$. Every term is integrable by the assumptions and step 1.1. Finite integral linearity makes its expectation $\sum_{k=1}^nE D_k^2$, because every off-diagonal term vanishes. For $n=0$ both sides are zero by the empty-sum convention, and for $n=1$ there are no off-diagonal terms. [given, F4, step 1.1] ∎

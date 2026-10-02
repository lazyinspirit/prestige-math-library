---
id: lem-blichfeldt-lattice-point-principle
kind: lemma
title: "Blichfeldt lattice-point principle"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-full-lattice-fundamental-domain-and-bounded-points
  - def-full-euclidean-lattice-and-covolume
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - def-measure
  - def-countable
  - def-integers
  - thm-n-cross-n-countable
  - thm-product-of-countable
  - lem-countable-iff-surjection-from-n
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: contradiction
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Theorem 4.17, p.75."
    - title: "Ben Green, Additive Combinatorics, Lecture 3 §3.7"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/addcomb2009-3.pdf"
      locator: "Lecture 3 §3.7 Lemma 3.4, pp.26-27."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$ and let
$\Lambda\subseteq\mathbb R^n$ be a full lattice with
$\operatorname{covol}(\Lambda)>0$
([[def-full-euclidean-lattice-and-covolume]]). If $S\subseteq\mathbb R^n$ is
Lebesgue measurable with $\lambda_n(S)>\operatorname{covol}(\Lambda)$, then
there are distinct points $x,y\in S$ with $x-y\in\Lambda$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a full lattice
$\Lambda=\mathbb Z b_1\oplus\cdots\oplus\mathbb Z b_n$ in $\mathbb R^n$ with
covolume $\operatorname{covol}(\Lambda)>0$, and a Lebesgue measurable set
$S\subseteq\mathbb R^n$ with $\lambda_n(S)>\operatorname{covol}(\Lambda)$.

[A1] The Axiom of Choice gives the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), the choice
hypothesis of the complete-measure fact [F2], invoked in step 2.1; the
translation-invariance fact [F3], the defining properties of a measure [F4] and
the countability facts [F5] use no choice principle, and no further choice is
used.

[F1] The half-open fundamental parallelotope
$P=\{\sum_it_ib_i:0<t_i\le1\}$ tiles $\mathbb R^n$ uniquely by
$\Lambda$-translates, $P$ is Lebesgue measurable with
$\lambda_n(P)=\operatorname{covol}(\Lambda)$, and every bounded subset of
$\mathbb R^n$ meets $\Lambda$ in finitely many points
([[lem-full-lattice-fundamental-domain-and-bounded-points]]).

[F2] Assuming countable choice, $\mathcal L(\mathbb R^n)$ is a sigma-algebra
and $\lambda_n$ is a measure on it
([[thm-lebesgue-measure-is-a-complete-measure]]).

[F3] Translations preserve measurability and measure: $E$ is Lebesgue
measurable if and only if $E+h$ is, and then
$\lambda_n(E+h)=\lambda_n(E)$
([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F4] A measure is countably additive: for pairwise disjoint measurable sets
$E_k$ one has $\mu\bigl(\bigcup_{k}E_k\bigr)=\sum_{k}\mu(E_k)$, extended
nonnegative sums included ([[def-measure]]).

[F5] $\mathbb Z$ is at most countable: the quotient map
$\mathbb N\times\mathbb N\to\mathbb Z$ of [[def-integers]] is surjective,
$\mathbb N\times\mathbb N$ is at most countable
([[thm-n-cross-n-countable]], [[thm-product-of-countable]]), and an at most
countable set that is a surjective image of an at most countable set is at most
countable ([[lem-countable-iff-surjection-from-n]]). Hence $\mathbb Z^n$ is at
most countable, and so is $\Lambda$, being a surjective image of
$\mathbb Z^n$ under $(m_1,\dots,m_n)\mapsto\sum_im_ib_i$
([[def-countable]]).

## Proof

1.1 Assume for contradiction that there are no distinct $x,y\in S$ with $x-y\in\Lambda$. [assume-contra]

1.2 $\Lambda$ is at most countable by [F5], and it is infinite because $b_1\ne0$ gives the distinct multiples $kb_1$; being at most countable and infinite, it is countably infinite, so fix a bijection $\lambda:\mathbb N\to\Lambda$, $k\mapsto\lambda_k$ ([[def-countable]]). By [A1] the Axiom of Countable Choice holds; it discharges the choice hypothesis of the complete-measure fact [F2] applied below. [F5, A1]

2.1 For each $k$ put $S_k:=S\cap(P+\lambda_k)$ and $T_k:=S_k-\lambda_k$. Each $S_k$ is measurable: $S$ is measurable by hypothesis, the translate $P+\lambda_k$ is measurable by [F3] applied to the measurable tile $P$ of [F1], and the intersection is measurable because [F2] makes $\mathcal L(\mathbb R^n)$ a sigma-algebra, its Countable Choice hypothesis having been discharged in step 1.2. [F1, F2, F3, step 1.2]

2.2 The $S_k$ are pairwise disjoint with union $S$, since the translates $P+\lambda$ tile $\mathbb R^n$ by [F1]; hence $\lambda_n(S)=\sum_{k}\lambda_n(S_k)$ by countable additivity [F4]. [F1, F4, step 1.2]

3.1 By [F3] applied to the translation by $-\lambda_k$, $T_k$ is measurable with $\lambda_n(T_k)=\lambda_n(S_k)$; and $T_k\subseteq P$, since $P+\lambda_k$ translated by $-\lambda_k$ is $P$. [F1, F3, step 2.1]

4.1 The sets $T_k$ are pairwise disjoint: if $z\in T_j\cap T_k$ with $j\ne k$, then $z=x-\lambda_j=y-\lambda_k$ with $x\in S_j\subseteq S$ and $y\in S_k\subseteq S$, so $x-y=\lambda_j-\lambda_k\in\Lambda$ while $x\ne y$ because $\lambda_j\ne\lambda_k$; this contradicts step 1.1. [step 1.1, step 3.1]

5.1 By countable additivity [F4] applied to the pairwise disjoint measurable sets $T_k$, $\lambda_n\bigl(\bigcup_kT_k\bigr)=\sum_k\lambda_n(T_k)=\sum_k\lambda_n(S_k)=\lambda_n(S)$, using steps 2.2, 3.1 and 4.1. [F4, step 2.2, step 3.1, step 4.1]

6.1 Since $\bigcup_kT_k\subseteq P$, monotonicity of a measure (additivity [F4] applied to $P=(\bigcup_kT_k)\cup(P\setminus\bigcup_kT_k)$) gives $\lambda_n(S)=\lambda_n\bigl(\bigcup_kT_k\bigr)\le\lambda_n(P)=\operatorname{covol}(\Lambda)$. [F1, F4, step 5.1]

7.1 Step 6.1 contradicts the hypothesis $\lambda_n(S)>\operatorname{covol}(\Lambda)$; therefore the assumption of step 1.1 is false, and there exist distinct $x,y\in S$ with $x-y\in\Lambda$. [step 1.1, step 6.1, discharge-contradiction] ∎

## Remarks

The proof works for unbounded $S$ and even for $\lambda_n(S)=+\infty$:
$S_k\subseteq P+\lambda_k$ and $T_k\subseteq P$, so each piece has finite
measure, but their measure sum may be infinite. Countable additivity permits
extended nonnegative sums; under the no-pair assumption, the $T_k$ are
disjoint in $P$, which bounds that sum by $\lambda_n(P)$ and gives the
contradiction. The hypothesis is
strict: for $S=(0,1]^2$ and $\Lambda=\mathbb Z^2$ one has
$\lambda_2(S)=\operatorname{covol}(\Lambda)=1$ and no two distinct points of
$S$ differ by a lattice vector.

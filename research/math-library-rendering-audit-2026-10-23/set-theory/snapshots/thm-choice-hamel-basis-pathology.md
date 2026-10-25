---
id: thm-choice-hamel-basis-pathology
kind: theorem
title: "A Hamel coefficient has dense graph and a nonmeasurable kernel"
status: published
origin: pipeline
deps: ["lem-hamel-basis-exists", "def-axiom-of-choice", "lem-rat-embeds-dense", "thm-rationals-countable", "thm-of-archimedean", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant", "thm-lebesgue-measure-is-a-complete-measure", "thm-lebesgue-measure-of-a-box-of-every-kind", "def-measure", "def-borel-and-lebesgue-measurable-function-on-rn", "def-borel-sigma-algebra", "def-linear-subspace", "def-continuity-real"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "full Proposition 7.3.1, Theorem 7.3.2, Corollary 7.3.3, printed pp111–112, read 2026-09-09. Nonmeasurable-kernel consequence is a local disjoint-translate argument from the explicit published measure dependencies."
      url: "https://community.wvu.edu/~kciesiel/ProfessionalStuff/Other/ElectronicReprints/B2IntSetThe.pdf"
---
## Statement

Assume AC. Fix a Hamel basis B of $\mathbb R$ over $\mathbb Q$ and $b\in B$. Its coefficient map $f=\Lambda_b:\mathbb R\to\mathbb Q\subseteq\mathbb R$ is additive, has dense graph, is unbounded above and below on every nondegenerate interval, and is continuous nowhere. Its kernel W is not Lebesgue measurable, so f is not Lebesgue measurable. No claim that every Hamel basis itself is nonmeasurable is made.

## Facts & Assumptions

[F1] [[lem-hamel-basis-exists]] gives B and its unique additive rational-linear coefficient map, f(b)=1, range $\mathbb Q$, and nonzero kernel vector.

[F2] [[lem-rat-embeds-dense]] gives rational density; [[thm-rationals-countable]] gives an enumeration of $\mathbb Q$.

[F3] [[thm-of-archimedean]] gives natural numbers exceeding any prescribed real bound.

[F4] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]] preserves measurability and measure under translations.

[F5] [[thm-lebesgue-measure-is-a-complete-measure]] gives the Lebesgue sigma-algebra and measure under countable choice; [[def-measure]] specifies countable additivity.

[F6] [[thm-lebesgue-measure-of-a-box-of-every-kind]] gives the lengths of bounded intervals under countable choice.

[F7] [[def-borel-and-lebesgue-measurable-function-on-rn]] requires Borel preimages to be Lebesgue measurable; [[def-borel-sigma-algebra]] contains closed singletons.

[F8] [[def-continuity-real]] specifies epsilon-delta continuity.

[A1] Assume [[def-axiom-of-choice]], including countable choice for F5–F7.

## Proof

**Given:** The basis vector and coefficient map as in the statement, with the real codomain convention.

1.1 F1 applies under A1. It gives additivity and rational linearity, $f(b)=1$, and $0\ne w\in W$. In particular $b\ne0$, $\mathbb Qw\subseteq W$, and $f^{-1}\{q\}=qb+W$: subtract qb and apply additivity in either direction. For any u<v choose by F2 a rational r strictly between $\min(u/w,v/w)$ and $\max(u/w,v/w)$. Then $rw\in(u,v)$, with the order reversed when w<0. Thus W is dense, and translation shows every fiber $qb+W$ is dense. [F1, F2, A1]

2.1 For any open rectangle $(u,v)\times(c,d)$, F2 gives rational q in (c,d); step 1.1 gives x in $(u,v)\cap(qb+W)$, so $(x,f(x))=(x,q)$ lies in the rectangle. Such rectangles form a basis, proving graph density. Taking (c,d) wholly above any prescribed M or wholly below -M shows both unboundedness assertions on each nondegenerate interval, whose interior contains an open interval. For any x_0 and $\delta>0$, density gives x with $|x-x_0|<\delta$ and $f(x)\in(f(x_0)+2,f(x_0)+3)$. This violates F8 with $\epsilon=1$, so f is continuous at no x_0. [F2, F8, step 1.1]

2.2 Suppose W measurable and put $W_m=W\cap[-m,m]$, m a positive integer. F5 and F6, licensed by A1, make these measurable with finite measure $a_m\leq2m$. Distinct rational translates $qb+W$ are disjoint: an equality $qb+w=rb+w'$ gives q=r after applying f and step 1.1. F2 enumerates the infinitely many rationals q with $|qb|<1$; infinitude follows from density in $(-1/|b|,1/|b|)$, since any finite list can be avoided in a smaller subinterval. The sets $W_m+qb$ along this enumeration are pairwise disjoint and all lie in $[-m-1,m+1]$. By F4 each has measure a_m. If $a_m>0$, choose by F3 a natural N with $Na_m>2m+2$. Finite additivity F5 and the enclosing interval value F6 then give $Na_m\leq2m+2$, contradiction. Hence every a_m is zero. [F2, F3, F4, F5, F6, A1, step 1.1]

3.1 By F3, $W=\bigcup_{m\geq1}W_m$. Disjointizing this sequence and using F5's countable additivity shows W null. All cosets $qb+W$ are null by F4, and their countable union is $\mathbb R$ by F1's rational coefficient decomposition and F2's enumeration. Disjointization and F5 again make $\mathbb R$ null, contradicting F6's value one on [0,1] and monotonicity. Thus W is not measurable. Finally {0} is closed and Borel, so if f were Lebesgue measurable, F7 would make $f^{-1}\{0\}=W$ measurable, a contradiction. QED. [F1, F2, F3, F4, F5, F6, F7, step 2.2]

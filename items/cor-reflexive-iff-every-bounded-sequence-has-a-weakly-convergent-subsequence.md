---
id: cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence
kind: corollary
title: Reflexivity is equivalent to weak subsequential compactness of bounded sequences
status: published
origin: pipeline
deps: ["thm-reflexive-iff-unit-ball-weakly-compact", "thm-eberlein-smulian", "def-weak-topology-on-a-normed-space", "cor-relative-hahn-banach-dual-norming", "def-dependent-choice", "def-hahn-banach-extension-principle-relative"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-fa/fa.pdf"
      locator: "Theorem 4.30, printed pp. 127–128 (forward implication)"
    - title: "Haase, The Functional Analysis of Quantum Information Theory"
      url: "https://fa.ewi.tudelft.nl/~haase/files/EFHN-July2012.pdf"
      locator: "Appendix E, Theorem E.17, printed pp. 355–356"
---

## Statement

Assume the ultrafilter lemma, DC, and HB.  A real or complex Banach space $X$
is reflexive if and only if every norm-bounded sequence in $X$ has a
subsequence that converges weakly to a point of $X$.

## Facts & Assumptions

**Given:** the ultrafilter lemma, DC, HB, and a real or complex Banach space
$X$.

[F1] Under the ultrafilter lemma and HB, $X$ is reflexive if and only if its
closed unit ball $B_X$ is weakly compact
([[thm-reflexive-iff-unit-ball-weakly-compact]]).

[F2] Under the ultrafilter lemma, DC and HB, relative weak compactness,
relative weak sequential compactness and relative weak countable compactness
are equivalent ([[thm-eberlein-smulian]]).

[F3] Under HB, every nonzero vector has a norm-one scalar-linear functional
taking that vector to its norm ([[cor-relative-hahn-banach-dual-norming]]).

[F4] The weak topology is initial for all members of $X^*$, so every such
functional and fixed scalar multiplication are weakly continuous
([[def-weak-topology-on-a-normed-space]]).

[F5] The ultrafilter lemma is the statement that every filter on a set is
contained in an ultrafilter; DC is the entire-relation chain principle, and HB
is the real dominated-extension principle over ZF ([[def-dependent-choice]],
[[def-hahn-banach-extension-principle-relative]]).

## Proof

**Proof technique:** apply Eberlein–Šmulian to the weakly closed unit ball and
rescale.

1.1 The norm-closed unit ball $B_X$ is weakly closed under HB.  Indeed, if $x\notin B_X$, then $\|x\|>1$ and [F3] gives $f\in X^*$ with $\|f\|=1$ and $f(x)=\|x\|$.  The weakly open set $\{y:|f(y)|>1\}$ contains $x$ and misses $B_X$, since $|f(y)|\le\|y\|\le1$ there.  Thus every exterior point has a weak neighborhood in the complement.  This also covers $X=\{0\}$, when there is no exterior point. [F3, F4]

1.2 Suppose $X$ is reflexive and let $(x_n)$ be norm bounded.  Fix $R\ge0$ with $\|x_n\|\le R$ for every $n$.  If $R=0$, then $x_n=0$ for all $n$ and the identity subsequence converges weakly to zero.  Hence it remains to consider $R>0$ and the sequence $y_n=x_n/R\in B_X$. [given, algebra]

1.3 Conversely, suppose every norm-bounded sequence in $X$ has a weakly convergent subsequence.  Every sequence in $B_X$ is bounded by $1$, so it has a subsequence converging weakly to a point of the ambient space $X$.  Thus $B_X$ is relatively weakly sequentially compact. [given]

2.1 In the positive-radius case of step 1.2, [F1] makes $B_X$ weakly compact, and step 1.1 makes its weak closure equal to itself, so it is relatively weakly compact.  By [F2], some subsequence $y_{n_k}$ converges weakly to $y\in X$.  For every $f\in X^*$, $f(x_{n_k})=R f(y_{n_k})\to Rf(y)=f(Ry)$, so $x_{n_k}\to Ry$ weakly.  Together with the zero-radius case, every bounded sequence has the required subsequence. [F1, F2, F4, step 1.1, step 1.2]

2.2 Under the hypothesis of step 1.3, [F2] makes $B_X$ relatively weakly compact.  Its weak closure is $B_X$ by step 1.1, so $B_X$ itself is weakly compact. [F2, step 1.1, step 1.3]

3.1 Apply the reverse implication of [F1] to step 2.2.  The weak compactness of $B_X$ implies that $X$ is reflexive. [F1, step 2.2]

4.1 Steps 2.1 and 3.1 prove the two implications, including $X=0$, bound $R=0$, the closed-ball endpoint $\|x_n\|=R$, and both scalar fields.  The ultrafilter lemma is spent through the compact-unit-ball criterion and Eberlein–Šmulian, DC through Eberlein–Šmulian, and HB through those two suppliers and dual norming; no full Axiom of Choice is used. [F5, step 2.1, step 3.1] ∎

## Remarks

- The ultrafilter lemma, DC and HB are hypotheses of this corollary, not
  results consumed from its proof: the statement above names each of them in
  full. The library states the ultrafilter lemma, and proves it from AC, as
  [[thm-ultrafilter-lemma]], and records its proved choice cost in
  [[rem-choice-strengths]]; this corollary assumes the lemma and inherits no
  part of that AC-based proof.

## Source notes

Teschl's Theorem 4.30, printed pp. 127–128, proves the forward bounded-
sequence conclusion for reflexive spaces.  Haase's Theorem E.17, printed
pp. 355–356, supplies the compact/sequential equivalence used in both
directions.  The converse here also uses the already-authored compact-unit-ball
characterization and proves the ball's weak closedness explicitly, so relative
compactness is not silently replaced by compactness.

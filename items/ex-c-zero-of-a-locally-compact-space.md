---
id: ex-c-zero-of-a-locally-compact-space
kind: example
title: C zero of a locally compact space
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-c-zero-and-ell-infinity, def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-finite-truncations-are-dense-in-c0-and-ell-one, thm-minimal-c-star-unitization, thm-character-space-of-the-unitization-is-one-point-compactification, thm-characters-on-a-unital-banach-algebra-are-continuous, thm-nonunital-commutative-gelfand-naimark, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Example 3.1.39 and §3.1, printed pp. 54–67"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — §4, printed pp. 9–11"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
unitization and Gelfand representation suppliers used below. Let
$\mathbb N = \{0,1,2,\dots\}$ be discrete, so that $c_0(\mathbb N)$ is
exactly $C_0(\mathbb N)$
([[def-c-zero-and-ell-infinity]],
[[def-compact-support-c-c-and-c-zero-on-an-lch-space]]). Then:

1. the characters of $c_0(\mathbb N)$ are exactly the evaluations
   $\mathrm{ev}_n(a) = a_n$, one for each $n \in \mathbb N$, and each occurs
   exactly once;
2. $c_0(\mathbb N)$ has no unit;
3. the net of characteristic functions $\mathbf 1_F$ of finite subsets
   $F \subseteq \mathbb N$, ordered by inclusion, is an approximate unit of
   $c_0(\mathbb N)$ consisting of positive contractions.

## Facts & Assumptions

**Given:** The discrete space $\mathbb N$, the algebra $c_0(\mathbb N)$ with the supremum norm and pointwise operations, the completeness of that norm, and the coordinate projections $\delta_n$ (the characteristic function of $\{n\}$).

[L0] $C_0(X)$ consists of continuous functions whose level sets
$\{x:|f(x)|\ge\epsilon\}$ are compact for every $\epsilon>0$
([[def-compact-support-c-c-and-c-zero-on-an-lch-space]]). On discrete
$\mathbb N$, compact subsets are finite, since the singleton cover has a
finite subcover only for a finite set. Thus a sequence belongs to
$C_0(\mathbb N)$ exactly when every positive level set is finite, which is
equivalent to convergence to zero: a null sequence has each level set inside
a finite initial segment, and conversely a finite level set has a largest
index, after which all values have modulus below $\epsilon$.

[L1] $c_0$ is the space of null sequences with the supremum norm, the norm is complete on it (a $\|\cdot\|_\infty$-Cauchy sequence of null sequences has coordinatewise limits, the limit is null because $|a_n| \le |a_n - a^{(k)}_n| + |a^{(k)}_n|$ for large $k$, and the convergence is uniform), and the finite truncations converge in norm to any element of $c_0$ ([[def-c-zero-and-ell-infinity]], [[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[L2] Once $c_0(\mathbb N)$ is known to be a nonzero genuinely nonunital commutative C\*-algebra, every one of its characters extends to a character of its unitization and hence is continuous with $|\chi(a)| \le \|a\|$ ([[thm-characters-on-a-unital-banach-algebra-are-continuous]], [[thm-character-space-of-the-unitization-is-one-point-compactification]], [[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 By [L0], $c_0(\mathbb N)=C_0(\mathbb N)$. This space is a nonzero
commutative C\*-algebra: completeness is [L1], pointwise multiplication and
conjugation preserve null sequences,
$\|ab\|_\infty\leq\|a\|_\infty\|b\|_\infty$, and
$\|a^*a\|_\infty=\|a\|_\infty^2$; it has no unit, since a unit $e$ would
satisfy $e\delta_n=\delta_n$ for every $n$, hence $e(n)=1$ for all $n$,
contradicting $e\in c_0$. This proves claim 2 and licenses [L2].
[L0, L1, algebra]

1.2 Each $\mathrm{ev}_n$ is a character of $c_0(\mathbb N)$: it is complex-linear and multiplicative because evaluation at a point is, and it is nonzero because $\mathrm{ev}_n(\delta_n) = 1$ for the coordinate vector $\delta_n \in c_0(\mathbb N)$. [algebra]

2.1 If $\chi$ is a character then $\chi(\delta_n) \in \{0,1\}$ for every $n$, because $\delta_n^2 = \delta_n$ gives $\chi(\delta_n)^2 = \chi(\delta_n)$ and $\mathbb C$ is a field; the values are not all zero, since otherwise $\chi$ would vanish on all finite truncations by linearity and hence, by continuity from [L2] (licensed by [step 1.1]) and the density of truncations [L1], on all of $c_0$, contradicting that $\chi \ne 0$; and for $m \ne n$ one has $0 = \chi(\delta_m\delta_n) = \chi(\delta_m)\chi(\delta_n)$, so if $\chi(\delta_{n_0}) = 1$ then $\chi(\delta_m) = 0$ for all $m \ne n_0$. [step 1.1, L1, L2, algebra]

3.1 For a character $\chi$ with $\chi(\delta_{n_0}) = 1$ and $a \in c_0(\mathbb N)$ one has $\chi(a) = \sum_n a_n\chi(\delta_n) = a_{n_0}$: approximate $a$ by its truncations [L1], use linearity on each truncation, and pass to the limit with continuity of $\chi$ from [L2]; the series has at most one nonzero term, because $\chi(\delta_n) = 0$ for every $n \ne n_0$ by [step 2.1], so the limit is $a_{n_0}\chi(\delta_{n_0}) = a_{n_0}$ and no summability of $a$ is needed (a general element of $c_0$ need not be summable). [step 2.1, L1, L2, algebra]

4.1 Hence every character is some evaluation, evaluations are characters by [step 1.2], and two evaluations are equal only if the indices agree, since $\mathrm{ev}_m(\delta_m) = 1 \ne 0 = \mathrm{ev}_n(\delta_m)$ for $m \ne n$; this proves claim 1. [step 1.2, step 3.1, algebra]

5.1 Claim 3: each $\mathbf 1_F$ is a positive contraction, since $\mathbf 1_F^2 = \mathbf 1_F$ and $\|\mathbf 1_F\|_\infty \le 1$, and the family of finite subsets is directed by inclusion; for $a \in c_0$ and $\epsilon > 0$ choose $N$ with $|a_n| < \epsilon$ for $n > N$ (possible because $a$ is a null sequence [L1]); then for every finite $F \supseteq \{0,\dots,N\}$ one has $\|\mathbf 1_Fa - a\|_\infty = \sup_{n\notin F}|a_n| \le \sup_{n > N}|a_n| < \epsilon$. [L1, algebra] ∎

## Remarks

- **This is $C_0(X)$ for the simplest noncompact $X$**: the character space is $\mathbb N$ itself, and the absence of a unit is exactly the noncompactness.
- **The example is the concrete companion of [[thm-every-commutative-c-star-algebra-has-an-approximate-unit]]**; the net there consists of compactly supported functions, which on discrete $\mathbb N$ are precisely the finitely supported sequences.

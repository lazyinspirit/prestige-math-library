---
id: ex-gelfand-kolmogorov-recovers-beta-x-not-x
kind: example
title: Free maximal ideals of C(N) and beta N
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-gelfand-kolmogorov-for-rings-of-continuous-functions, lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters, thm-ultrafilter-lemma, def-axiom-of-choice]
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
    - title: "L. Gillman, M. Henriksen and M. Jerison, On a Theorem of Gelfand and Kolmogoroff Concerning Maximal Ideals in Rings of Continuous Functions (1954) — §2, after Theorem 1, pp. 448–449. This endpoint was inaccessible in the current run; the exact local proof and failed recovery record are in the Batch 4 coverage ledger."
      url: "https://scispace.com/pdf/on-a-theorem-of-gelfand-and-kolmogoroff-concerning-maximal-25sdibbtka.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathbb N$ be
discrete, so that $C(\mathbb N,\mathbb R) = \mathbb R^{\mathbb N}$ is the ring of
all real sequences. Then there is a maximal ideal of $\mathbb R^{\mathbb N}$
which is **not** of the form $\{f : f(n) = 0\}$ for any $n \in \mathbb N$: the
cofinite filter on $\mathbb N$ extends to a free ultrafilter $\mathcal U$, and

$$M_{\mathcal U} \;=\; \{\,f : Z(f) \in \mathcal U\,\}$$

is a maximal ideal that is free. Consequently the maximal ideals of the ring
of all continuous real functions on $\mathbb N$ are in set-theoretic bijection
with the points of the Stone–Čech compactification $\beta\mathbb N$, while
the fixed ideals correspond exactly to $\mathbb N$
([[thm-gelfand-kolmogorov-for-rings-of-continuous-functions]]), and
$\beta\mathbb N \setminus \mathbb N \ne \varnothing$. No topology on the
maximal-ideal set is asserted or reconstructed here.

## Facts & Assumptions

**Given:** The Axiom of Choice, the discrete space $\mathbb N$, the ring $\mathbb R^{\mathbb N} = C(\mathbb N,\mathbb R)$ of all real sequences, and the cofinite filter on $\mathbb N$.

[L1] For a Tychonoff space $X$ the maximal ideals of $C(X,\mathbb R)$ are exactly the ideals $M_p = \{f : p \in \overline{Z(f)}^{\beta X}\}$ with $p \in \beta X$ unique, and $M_p$ is fixed if and only if $p \in X$; for $p \in X$ one has $M_p = \{f : f(p) = 0\}$ ([[thm-gelfand-kolmogorov-for-rings-of-continuous-functions]], [[def-axiom-of-choice]]).

[L2] For discrete $\mathbb N$ every subset is a zero set, because the characteristic function of any subset is continuous, and the z-filters are exactly the ordinary filters on $\mathbb N$; the maximal ideals correspond to the filters that are maximal, and the fixed maximal ideals are the $M_n = \{f : f(n) = 0\}$ ([[lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters]]).

[L3] Under the Axiom of Choice every proper filter on a set extends to an ultrafilter ([[thm-ultrafilter-lemma]], [[def-axiom-of-choice]]).

[L4] A subset of a compact Hausdorff space that is compact is closed, and $\mathbb N$ with the discrete topology is not compact since the cover by singletons has no finite subcover; $\mathbb N$ is dense in $\beta\mathbb N$. [algebra]

## Verification

**Proof technique:** direct.

1.1 The cofinite filter $\mathcal F = \{A \subseteq \mathbb N : \mathbb N \setminus A \text{ finite}\}$ is a proper filter: it contains $\mathbb N$, omits $\varnothing$ (whose complement is infinite), and is closed under finite intersections and upward inclusion. [algebra]

1.2 By [L3] extend $\mathcal F$ to an ultrafilter $\mathcal U$; since $\mathcal F \subseteq \mathcal U$, no singleton belongs to $\mathcal U$ (a singleton has infinite complement, so it is not in the cofinite filter, and its complement is in $\mathcal U$, so the singleton is not), that is, $\mathcal U$ is free. [1.1, L3, algebra]

2.1 $M_{\mathcal U} = \{f : Z(f) \in \mathcal U\}$ is a maximal ideal of $\mathbb R^{\mathbb N}$ by [L2], and it is not fixed: if $M_{\mathcal U} = M_n = \{f : f(n) = 0\}$ for some $n$, then for the characteristic function $f := \mathbf 1_{\{n\}}$ one has $Z(f) = \mathbb N \setminus \{n\} \in \mathcal U$ by freeness, so $f \in M_{\mathcal U}$ while $f(n) = 1 \ne 0$, so $f \notin M_n$, a contradiction. [step 1.1, step 1.2, L2, algebra]

3.1 By [L1] the maximal ideals of $C(\mathbb N,\mathbb R)$ are the $M_p$ with $p\in\beta\mathbb N$ uniquely determined, and by [step 2.1] there is a maximal ideal that is not fixed. By [L1] its point $p$ lies outside $\mathbb N$, so $\beta\mathbb N\setminus\mathbb N\ne\varnothing$. This proves the point-set parametrisation claimed in the example; [L1] supplies no topology on the maximal-ideal set, and none is inferred. [step 2.1, L1]

4.1 Equivalently, $\beta\mathbb N \ne \mathbb N$ directly: $\mathbb N$ is dense in the compact space $\beta\mathbb N$ by [L4], so if $\beta\mathbb N = \mathbb N$ then $\mathbb N$ would be compact, contradicting [L4]. [L4, algebra] ∎

## Remarks

- **The unbounded function $n \mapsto n$ is never evaluated at infinity.** Both the ideal $M_{\mathcal U}$ and the identification $M_p = \{f : p \in \overline{Z(f)}\}$ use only zero sets; the witness $\mathbf 1_{\{n\}}$ is bounded, and no value of an unbounded sequence at a point of $\beta\mathbb N \setminus \mathbb N$ is asserted.
- **Free ultrafilters on $\mathbb N$ exist under AC**, and the resulting free maximal ideals are the algebraic shadow of the points at infinity of $\beta\mathbb N$.

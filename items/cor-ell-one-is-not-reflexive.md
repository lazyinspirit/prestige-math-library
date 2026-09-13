---
id: cor-ell-one-is-not-reflexive
kind: corollary
title: Ell one is not reflexive
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: [thm-ell-one-has-the-schur-property, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, lem-finite-truncations-are-dense-in-c0-and-ell-one, def-dependent-choice, def-hahn-banach-extension-principle-relative]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: contradiction
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Discussion and example following Theorem 4.30, printed pp. 128–129"
---

## Statement

Assume the ultrafilter lemma, DC, and HB.  Neither $\ell^1(\mathbb R)$ nor $\ell^1(\mathbb C)$ is reflexive.

## Facts & Assumptions

**Given:** the ultrafilter lemma, DC, HB, and $\mathbb K\in\{\mathbb R,\mathbb C\}$.

[F1] Under these three assumptions, a real or complex Banach space is reflexive if and only if every norm-bounded sequence has a weakly convergent subsequence ([[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]]).

[F2] Both real and complex $\ell^1$ have the Schur property, so every weakly convergent sequence in either space converges in norm ([[thm-ell-one-has-the-schur-property]]).

[F3] The space $\ell^1(\mathbb K)$ consists of scalar sequences with norm $\|a\|_1=\sum_{n=0}^{\infty}|a_n|$ ([[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[F4] The ultrafilter lemma is the statement that every filter on a set is
contained in an ultrafilter; DC and HB are respectively the principles named
in [[def-dependent-choice]] and [[def-hahn-banach-extension-principle-relative]].

## Proof

1.1 For $n\in\mathbb N$, let $e_n$ be the coordinate vector with value $1$ at $n$ and $0$ elsewhere.  By [F3], $e_n\in\ell^1(\mathbb K)$ and $\|e_n\|_1=1$, so $(e_n)$ is norm bounded.  If $m\ne n$, the two nonzero coordinates of $e_m-e_n$ have moduli $1$, hence $\|e_m-e_n\|_1=2$. [F3, construct]

2.1 Suppose for contradiction that $\ell^1(\mathbb K)$ is reflexive.  The forward implication of [F1] applied to the bounded sequence from step 1.1 supplies strictly increasing indices $(n_j)$ and $x\in\ell^1(\mathbb K)$ such that $e_{n_j}\rightharpoonup x$. [F1, step 1.1, assume-contra]

3.1 By [F2], the weakly convergent subsequence in step 2.1 converges to $x$ in norm.  A norm-convergent sequence is Cauchy: once $\|e_{n_j}-x\|_1<1/2$ and $\|e_{n_k}-x\|_1<1/2$, the triangle inequality gives $\|e_{n_j}-e_{n_k}\|_1<1$.  But strict increase makes $n_j\ne n_k$ for $j\ne k$, and step 1.1 makes that distance exactly $2$.  This contradiction proves that $\ell^1(\mathbb K)$ is not reflexive.  Since $\mathbb K$ was either scalar field, the result holds for both.  The ultrafilter lemma, DC and HB are spent only through [F1]; the Schur argument [F2] is choice-free. [F2, F4, step 1.1, step 2.1, discharge-contradiction: step 2.1] ∎

## Remarks

- The ultrafilter lemma, DC and HB are hypotheses of this corollary, not
  results consumed from the proof: the statement above names each of them in
  full. The library states the ultrafilter lemma, and proves it from AC, as
  [[thm-ultrafilter-lemma]], and records its proved choice cost in
  [[rem-choice-strengths]]; this corollary assumes the lemma and inherits no
  part of that AC-based proof.

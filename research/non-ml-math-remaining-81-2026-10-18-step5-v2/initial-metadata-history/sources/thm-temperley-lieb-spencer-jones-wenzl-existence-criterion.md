---
id: thm-temperley-lieb-spencer-jones-wenzl-existence-criterion
kind: theorem
title: "Spencer's quantum-characteristic criterion for Jones–Wenzl existence"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - lem-temperley-lieb-jones-wenzl-quantum-binomial-criterion-over-fields
  - lem-temperley-lieb-quantum-binomial-digit-criterion
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. A. Spencer, The Modular Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§§2.2–2.3, Theorem 8.4, and §10.3, PDF pp. 6–8 and 22–32: quantum characteristic, composition-factor support, and the projector criterion."
    - title: "Ben Elias and Nicolas Libedinsky, Soergel bimodules for universal Coxeter groups, Appendix A by Ben Webster"
      url: "https://arxiv.org/pdf/1401.2467v2"
      locator: "Appendix A, Theorem A.2, PDF pp. 24–29; the local quantum-binomial criterion gives an explicit integral word-space proof and the digit lemma supplies every characteristic branch."
---

## Statement

Let $K$ be a field, $\delta\in K$, let $\ell$ be the quantum characteristic from [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]], and let $p=\operatorname{char}K$ (write $p=\infty$ in characteristic zero). A normalized idempotent $e\in\mathrm{TL}_n(K,\delta)$ satisfying $\varepsilon(e)=1$ and $d_i e=0$ for every $1\le i<n$ exists exactly in the following cases:

1. if $\ell=\infty$, every finite $n$ satisfies the criterion $n<\ell$;
2. if $\ell<\infty$ and $p$ is finite, then $n<\ell$ or $n=a\,p(i)-1$ for some $i\ge1$ and integer $1\le a<p$;
3. if $\ell<\infty$ and $p=\infty$, then $n<\ell$ or $n=a\ell-1$ for some positive integer $a$.

The criterion is over fields. It does not assert descent to an arbitrary coefficient ring.

## Facts & Assumptions

**Given:** The field $K$, its loop parameter, rank $n\ge0$, recurrence quantum characteristic $\ell$, and characteristic parameter $p$ in the Statement. Here $\varepsilon$ is the augmentation taking the coefficient of the identity diagram, as in the quantum-binomial criterion below.

[F1] A normalized idempotent annihilated by all $d_i$ exists over a field exactly when every quantum-binomial polynomial $B_{n,k}(\delta)$, $0\le k\le n$, is nonzero; the proof establishes the equivalence over every field and makes no integral-ring descent claim ([[lem-temperley-lieb-jones-wenzl-quantum-binomial-criterion-over-fields]]).

[F2] Full-row nonvanishing is equivalent to the exact three quantum-characteristic/characteristic branches in the Statement ([[lem-temperley-lieb-quantum-binomial-digit-criterion]], with $p(i)$ as in [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

## Proof

**Given:** The data in the Statement.

1.1 By [F1], existence of the normalized annihilating idempotent is equivalent to nonvanishing of every $B_{n,k}(\delta)$. The hypotheses of [F1] are exactly a field, its loop parameter and a nonnegative rank, so this equivalence includes arbitrary positive characteristic and the zero-loop case. [F1, given]

2.1 Apply [F2] to that same field and the recurrence parameter $\ell$. It gives every finite rank when $\ell=\infty$; for finite $\ell$ and positive characteristic it gives $n<\ell$ or $n=a\ell p^{i-1}-1=a p(i)-1$ with $i\ge1$ and $1\le a<p$; and in characteristic zero it gives $n<\ell$ or $n=a\ell-1$ for any positive integer $a$. These are precisely the three asserted cases, so the equivalence in step 1.1 proves both directions without narrowing any branch. [F2, step 1.1, algebra] ∎

## Remarks

The proof uses an integral diagram representation and an explicit quantum-binomial zero-pattern argument. It does not infer arbitrary-field behavior from the ordinary generic quantum-group centralizer theorem, and does not claim the full Spencer composition-factor classification. The latter is a substantially richer theorem unnecessary for this particular existence criterion. A failed rank-by-rank Jones–Wenzl recursion is not a nonexistence test; for example the characteristic-zero finite-$\ell$ branch includes $n=a\ell-1$ even when an earlier recursion denominator vanished.

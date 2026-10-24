---
id: lem-uniqueness-of-an-extended-complete-field-absolute-value
title: "Uniqueness of an extended complete field absolute value"
kind: lemma
status: published
origin: pipeline
deps: [thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a76, Lemma 6.1, pp.10\u201311"
      url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
proof_strategy: direct argument
---

## Statement

For a finite extension E/F of a complete absolutely valued field F, at most one absolute value on E extends the given absolute value on F. Any such extension makes E complete.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]: Let F be complete for a multiplicative absolute value and V a finite-dimensional normed F-vector space. For any basis $v_1,\ldots,v_n$, its coordinate sup norm $\|\sum a_iv_i\|_\infty=\max_i|a_i|$ is bounded above and below by positive multiples of the given norm. For $n=0$ both norms are zero. Consequently V is complete and every linear subspace is closed.

## Proof

1.1 Two extending absolute values are norms on the finite-dimensional F-vector space E. Norm equivalence gives constants $c,C>0$ with $c|x|_1\le|x|_2\le C|x|_1$ for every x. It also gives completeness for either norm. [F1]

2.1 For $x\ne0$, apply the comparison to $x^n$ and take nth roots: $c^{1/n}|x|_1\le|x|_2\le C^{1/n}|x|_1$. Let n tend to infinity to obtain equality. Both values of zero are zero. This includes the trivial valuation and E=F, and asserts uniqueness only if an extension exists. [step 1.1, algebra] ∎

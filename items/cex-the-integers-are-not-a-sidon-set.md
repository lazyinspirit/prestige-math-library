---
id: cex-the-integers-are-not-a-sidon-set
kind: counterexample
title: "The integers are not a Sidon set"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sidon-set-in-the-integer-dual]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., Example 3.6.11"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement refuted

“The set $\mathbb Z$ is a Sidon set.”

## Facts & Assumptions

**Given:** $z=e_1(x)$, and polynomials $P_0=Q_0=1$ defined recursively by
$$P_{m+1}=P_m+z^{2^m}Q_m,\qquad Q_{m+1}=P_m-z^{2^m}Q_m.$$

## Counterexample

**Proof technique:** Rudin--Shapiro recursion.

1.1 Inductively, $P_m$ and $Q_m$ have $2^m$ coefficients, all $\pm1$, on [given, algebra]
the frequencies $0,\ldots,2^m-1$. The two supports in each recursion are
disjoint, so this is immediate from the displayed construction. [given, algebra]

2.1 On $|z|=1$, the parallelogram identity gives [step 1.1, algebra]
$$|P_{m+1}|^2+|Q_{m+1}|^2=2|P_m|^2+2|Q_m|^2.$$
Starting from $|P_0|^2+|Q_0|^2=2$, induction yields
$|P_m|^2+|Q_m|^2=2^{m+1}$, hence $\|P_m\|_\infty\le2^{(m+1)/2}$.
[step 1.1, algebra]

3.1 The coefficient $\ell^1$ mass of $P_m$ is $2^m$. If the defining [step 2.1, algebra]
inequality of [[def-sidon-set-in-the-integer-dual]] held for $\mathbb Z$ with
one constant $C$, it would give $2^m\le C2^{(m+1)/2}$ for every $m$, which is
impossible. Hence $\mathbb Z$ is not Sidon. [step 2.1, algebra] ∎

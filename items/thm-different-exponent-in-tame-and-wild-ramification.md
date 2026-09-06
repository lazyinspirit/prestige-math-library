---
id: thm-different-exponent-in-tame-and-wild-ramification
kind: theorem
title: "Different exponents in tame and wild ramification"
status: published
origin: pipeline
deps: [thm-prime-support-of-the-different-is-ramification, def-tame-and-wild-ramification]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Theorem 4.13"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Statement

For $\mathfrak P\mid p$, $v_{\mathfrak P}(\mathfrak D_K)\ge e(\mathfrak P/p)-1$.
Equality holds when ramification is tame; when it is wild,
$v_{\mathfrak P}(\mathfrak D_K)\ge e(\mathfrak P/p)$.

## Facts & Assumptions

[L1] Lemma 4.12 and the proof of Theorem 4.13 in the cited source give the
trace criterion for divisibility by powers of $\mathfrak P$ and apply it to
the filtration of $\mathcal O_K/\mathfrak P^e$.

## Proof

**Given:** a prime $\mathfrak P\mid p$ and its ramification index $e$.

1.1 That trace criterion first gives $v_{\mathfrak P}(\mathfrak D_K)\ge e-1$.  For the next power, the successive quotients $\mathfrak P^i/\mathfrak P^{i+1}$ are all isomorphic to the residue field as modules, so the relevant trace is $$e\,\operatorname{Tr}_{\mathcal O_K/\mathfrak P\,/\,\mathbb F_p}.$$ [L1, given, algebra]

2.1 The trace of a finite separable field extension is not the zero map. Hence the display in step 1.1 vanishes identically exactly when $p\mid e$. Thus $p\nmid e$ gives exact exponent $e-1$, while $p\mid e$ gives exponent at least $e$, which are precisely the tame and wild cases. [L1, step 1.1, cases] ∎

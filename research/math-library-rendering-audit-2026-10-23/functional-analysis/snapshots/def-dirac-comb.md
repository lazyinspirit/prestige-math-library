---
id: def-dirac-comb
kind: definition
title: Dirac comb
status: published
origin: pipeline
deps: [thm-finite-seminorm-bound-characterizes-tempered-distributions, def-dirac-delta-and-its-derivatives, thm-p-series-real-exponents]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Theorem 11.32 and equations (11.52)–(11.54), pp. 133–134; lattice rescaled to the 2pi convention"
---

## Definition

For $n\geq1$, the **unit-lattice Dirac comb** is

$$\operatorname{III}_{\mathbb Z^n}=\sum_{k\in\mathbb Z^n}\delta_k, \qquad \langle\operatorname{III}_{\mathbb Z^n},\varphi\rangle =\sum_{k\in\mathbb Z^n}\varphi(k).$$

This defines a tempered distribution, not merely a formal series.  Indeed,
choose an integer $L>n+1$.  The shell
$\{k\in\mathbb Z^n:m\leq|k|<m+1\}$ has at most $(2m+3)^n$ points, and the
Schwartz-seminorm definition gives a constant $A_{n,L}$ such that

$$|\varphi(k)|\leq A_{n,L}(1+|k|)^{-L} \max_{|\alpha|\leq L}p_{\alpha,0}(\varphi).$$

The resulting shell series is bounded by a constant times
$\sum_{m\geq1}m^{n-L}$, which converges by
[[thm-p-series-real-exponents]].  Thus the lattice sum is absolutely
convergent and obeys one finite seminorm estimate, so
[[thm-finite-seminorm-bound-characterizes-tempered-distributions]] applies.
On a compactly supported test only finitely many terms remain, and the
restriction agrees with the locally finite sum of the Dirac distributions
[[def-dirac-delta-and-its-derivatives]].  The zero test gives zero.  The shell
decomposition is canonical, so no choice axiom is used.

---
id: lem-qftx-coupled-penrose-fibre-dolbeault
kind: lemma
title: Dolbeault groups of the negative twistor-fibre twists
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-qftx-coupled-penrose-incidence-geometry
  - lem-qftx-gaga-projective-cover-laurent-cohomology
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-coupled-penrose-incidence-geometry: mathematical-premise
  lem-qftx-gaga-projective-cover-laurent-cohomology: mathematical-premise
  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_base: "ZF + full AC inherited from the analytic Laurent–Čech and Dolbeault-resolution suppliers."
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§§1–3, printed pp. 43–54: the fibre O(-2) harmonic generator and the O(-1) correction equation."
verification:
  precheck: pass
---

## Statement

Let $L=\mathbb CP^1$ and let $\mathcal O_L(k)$ be the degree-$k$ holomorphic line bundle. For the smooth Dolbeault complexes on $L$, the cohomology groups satisfy

$$H^{0,0}_{\bar\partial}(L,\mathcal O_L(-1))=H^{0,1}_{\bar\partial}(L,\mathcal O_L(-1))=H^{0,0}_{\bar\partial}(L,\mathcal O_L(-2))=0,\qquad H^{0,1}_{\bar\partial}(L,\mathcal O_L(-2))\cong\mathbb C.$$

The canonical bundle is $K_L\cong\mathcal O_L(-2)$; the last group is one-dimensional, and the first three vanish.

## Statement references

[[def-qftx-coupled-penrose-incidence-geometry]]

[[lem-qftx-gaga-projective-cover-laurent-cohomology]]

[[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[Rawnsley, §§1–3, pp. 43–54](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

## Facts & Assumptions

**Given:** The two projective charts of $L=\mathbb CP^1$, their ordinary holomorphic twisting bundles, and full AC.

[F1] The tautological frame satisfies $e_\infty=t^{-1}e_0$; hence the degree-$-k$ coefficient transition is $f_0(t)=t^{-k}f_\infty(1/t)$. The canonical transition $d(1/t)=-t^{-2}dt$ identifies $K_L$ with $\mathcal O_L(-2)$, with a harmless constant sign in one local frame. [[def-qftx-coupled-penrose-incidence-geometry]]

[F2] For the standard projective cover and $k=0,-1,-r-1$, the actual analytic twisting sheaves have acyclic intersections; their analytic sheaf cohomology is the normally convergent Laurent–Čech complex. For every integer twist, restrictions preserve Laurent coefficients and the stated mode contractions converge on the output charts. [[lem-qftx-gaga-projective-cover-laurent-cohomology]]

[F3] Under full AC, every finite-rank holomorphic bundle on $\mathbb P^r(\mathbb C)$ for $0\le r\le3$ has its analytic sheaf cohomology canonically identified with the global smooth Dolbeault quotient. This is a Dolbeault-resolution comparison, not algebraic-to-analytic GAGA. [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[A1] Full AC is assumed, as required by [F2]–[F3]. [[def-axiom-of-choice]]

## Proof

**Given:** [F1]–[F3] and [A1].

1.1 A global section of $\mathcal O(-k)$, $k=1,2$, would have an entire coefficient $f_0(t)$ with $f_0(t)=t^{-k}f_\infty(1/t)$. By the normally convergent expansions in [F2], the left side has only powers $t^n$ with $n\ge0$, whereas the right side has only powers $t^n$ with $n\le-k$. Uniqueness of Laurent coefficients forces every coefficient to vanish. Thus both degree-zero groups vanish. [F1, F2, A1, given, algebra]

2.1 A one-cochain on the two-chart overlap has a normally convergent Laurent expansion $g(t)=\sum_{n\in\mathbb Z}a_nt^n$. Coboundaries subtract the entire $t$-series with $n\ge0$ and the series $t^{-k}f_\infty(1/t)$ with $n\le-k$. These two tails converge on their respective entire charts by [F2]; the cover is acyclic for both twists because $r=1$ and $k=1,2$. For $k=1$ they exhaust every integer exponent, so the analytic first cohomology is zero. For $k=2$ the sole remaining exponent is $n=-1$; its coefficient cannot be a coboundary, and it identifies the analytic first cohomology with $\mathbb C$. [F1, F2, A1, step 1.1, algebra]

3.1 Apply [F3] to the two holomorphic line bundles on $L$. Its hypotheses hold for $r=1$ and the full AC assumption [A1]. It converts precisely the analytic sheaf groups computed in steps 1.1–2.1 to the smooth Dolbeault groups in the Statement. The transition calculation in [F1] gives $K_L\cong\mathcal O(-2)$. No scheme cohomology or unproved analytic/algebraic comparison is used. [F1, F3, A1, step 1.1, step 2.1, algebra] ∎

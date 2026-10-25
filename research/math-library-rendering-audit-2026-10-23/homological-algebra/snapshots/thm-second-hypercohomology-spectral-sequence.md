---
id: "thm-second-hypercohomology-spectral-sequence"
kind: "theorem"
title: "Second hypercohomology spectral sequence"
deps: ["def-right-hyperderived-functor-of-a-complex", "lem-finite-diagonal-cohomological-double-complex-spectral-sequences", "lem-cartan-eilenberg-comparisons-preserve-both-filtrations", "def-dependent-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.7.9"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Stacks Project, Tags 015M-015N"
      url: "https://stacks.math.columbia.edu/download/derived.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For an additive left-exact $F$ and bounded-below $K$ with supplied Cartan–Eilenberg resolution $I$, there is a strongly convergent spectral sequence
$$E_2^{p,q}=R^pF(H^qK)\quad\Longrightarrow\quad\mathbb R_I^{p+q}F(K),\qquad d_r:(p,q)\mapsto(p+r,q-r+1).$$
Its support is $p\ge0,q\ge b$ for a lower bound $b$ of $K$; translate $q$ by $b$ to obtain a first quadrant. The target has a finite decreasing filtration by resolution degree. With DC or supplied Cartan–Eilenberg comparisons and homotopies, the sequence is natural and independent of the resolution from $E_2$ onward.

## Facts & Assumptions

**Given:** The stated functor, bounded-below complex and supplied resolution.

[F1] The total complex computes the relative hyperderived objects and its horizontal boundary, cycle and cohomology complexes are supplied injective resolutions ([[def-right-hyperderived-functor-of-a-complex]]).

[F2] The horizontal-first construction has $E_1$ equal to horizontal cohomology, then the signed vertical differential, and finite-filtration convergence ([[lem-finite-diagonal-cohomological-double-complex-spectral-sequences]]).

[F3] Cartan–Eilenberg comparisons give independence from horizontal-first $E_2$ with the stated choice qualification ([[lem-cartan-eilenberg-comparisons-preserve-both-filtrations]]).

## Proof

1.1 Fix resolution degree $p$. The horizontal sequences $0\to B^{q,p}\to Z^{q,p}\to H^{q,p}\to0$ and $0\to Z^{q,p}\to I^{q,p}\to B^{q+1,p}\to0$ split. An additive functor preserves a split sequence, since it preserves the identities of an inclusion and retraction. It follows that the horizontal kernel, image and quotient after $F$ are $F(Z^{q,p})$, $F(B^{q,p})$ and $F(H^{q,p})$. Thus horizontal cohomology of $F(I^{\bullet,p})$ is canonically $F(H^{q,p})$; the canonical quotient map gives this identification independently of any chosen splitting. [F1, F2]

2.1 The next differential on $F(H^{q,p})$ is $(-1)^qF(v)$. The column $H^{q,\bullet}$ resolves $H^qK$, so its degree-$p$ cohomology after $F$ is $R^pF(H^qK)$; the constant sign $(-1)^q$ leaves its kernels and images unchanged. This gives the asserted $E_2$, rather than an $E_1$ identification. [F1, F2, step 1.1]

3.1 The total target is $H^n(\operatorname{Tot}(FI))$ and the filtration is induced by the subcomplex of resolution degrees at least $p$. In total degree $n\ge b$, its endpoints are $F^0H^n=H^n$ and $F^{n-b+1}H^n=0$. F2 therefore gives finite strong convergence. F3 supplies comparison maps preserving this filtration; their vertical homotopies give identical $E_2$ and target maps. Identity and composite comparisons prove naturality. For $K=0$ with zero data all terms vanish, and the case $n=b$ has only one possible graded quotient. [F1, F2, F3, step 2.1] ∎

---
id: cor-complex-k-theory-ahss
kind: corollary
title: Complex K-theory AHSS
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cohomological-atiyah-hirzebruch-spectral-sequence, thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory, thm-complex-bott-periodicity, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, §3.1, printed pp. 10–11"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "§3.1, K-AHSS, printed pp. 10–11"
---

## Statement

Assume AC. For a finite CW complex $X$ the Atiyah–Hirzebruch spectral sequence
of complex topological $K$-theory has
$$E_2^{p,q}\cong \begin{cases} H^p(X;\mathbb Z),& q\ \text{even},\\ 0,& q\ \text{odd}, \end{cases} \qquad d_r:E_r^{p,q}\to E_r^{p+r,q-r+1},$$
and converges to the associated graded of the skeletal filtration of
$\bigoplus_qK^{p+q}(X)$; equivalently
$E_\infty^{p,q}\cong F^pK^{p+q}(X)/F^{p+1}K^{p+q}(X)$.
The assumption AC is inherited from the construction of complex $K$-theory and
its coefficients, not from the spectral-sequence machinery.

## Facts & Assumptions

[A1] Assume AC. On finite CW pairs the groups $K^q$ form a contravariant two-periodic multiplicative generalized cohomology theory with coefficients $K^{2k}(*)\cong\mathbb Z$ and $K^{2k+1}(*)=0$ ([[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]).

[A2] Bott periodicity gives the natural isomorphisms $K^q(X)\cong K^{q-2}(X)$ used to read the coefficient groups in every degree ([[thm-complex-bott-periodicity]]).

[A3] The cohomological AHSS of a reduced generalized cohomology theory on a finite CW complex has $E_2^{p,q}=H^p(X;h^q(*))$, differentials of bidegree $(r,1-r)$ and stable page the associated graded of the skeletal filtration ([[thm-cohomological-atiyah-hirzebruch-spectral-sequence]]).

## Proof

**Proof technique:** direct.

**Given:** Assume AC and let $X$ be a finite CW complex.

1.1 Complex $K$-theory is a reduced generalized cohomology theory on finite CW pairs, so [A3] applies to it; its coefficient groups are $K^{2k}(*)\cong\mathbb Z$ and $K^{2k+1}(*)=0$ by [A1], and [A2] extends this to all integer degrees. [A1, A2, A3, given]

2.1 Substituting $h^q(*)=K^q(*)$ into $E_2^{p,q}=H^p(X;h^q(*))$ gives $E_2^{p,q}=H^p(X;\mathbb Z)$ for even $q$ and $E_2^{p,q}=0$ for odd $q$, while the differential bidegree and the convergence statement are those of [A3]. [A3, step 1.1]

3.1 Steps 1.1 and 2.1 give the displayed second page, the differential bidegree and the identification of the stable page with the associated graded of the skeletal filtration; the Axiom of Choice enters only through the inherited complex $K$-theory construction. [step 1.1, step 2.1] ∎

## Source notes

Compare [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), §3.1, printed pp. 10–11, where the parity of the coefficient groups is used to read the $K$-theory AHSS.

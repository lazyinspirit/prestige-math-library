---
id: cex-canonical-and-quasi-canonical-bases-need-not-coincide
kind: counterexample
title: "The canonical and quasi-canonical bases need not coincide"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 26
deps:
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - def-higher-level-wedge-tensor-fock-module
  - thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
  - thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
  - thm-the-highest-weight-fock-submodule-has-the-qg-global-bases
  - def-lower-global-basis-of-a-quantum-highest-weight-module
  - def-upper-global-basis-by-the-contravariant-form
  - ex-four-fock-bases-in-a-small-two-factor-tensor-space
  - thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule
  - thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Theorem 2.7 and Corollary 2.8 (printed pp. 14-16): $P_A=q^{\\frac12(2\\Lambda-\\alpha,\\alpha)}T_{A^\\uparrow}$ and the values $d_{A,A}(q)=1$, $d_{A,A^\\uparrow}(q)=q^{a}$; complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Remark 27 and Theorem 26 (printed pp. 26-28): the standard monomial basis depends on the choice of composition while the dual-canonical basis does not, so the two parametrizations of the same module differ; complete passage read."
---

## Statement refuted

In the four-dimensional model of
[[ex-four-fock-bases-in-a-small-two-factor-tensor-space]] the canonical and
quasi-canonical Fock families coincide on every label.

## Facts & Assumptions

**Given:** The rank-one Fock model with monomials $M_{00},M_{01},M_{10},M_{11}$, the source families $L,T,P$ of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], and the computed bar matrix and vectors of [[ex-four-fock-bases-in-a-small-two-factor-tensor-space]].

[F1] Bar and families ([[thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations]], [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]): $\psi$ is triangular with $\psi M_{10}=M_{10}+(s^{-1}-s)M_{01}$ and fixes the other monomials; the canonical family is the $s^{-1}\mathbb Z[s^{-1}]$-chart and the quasi-canonical family is defined by the inverse transition matrix.

[F2] Highest constituent ([[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]], [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]], [[ex-four-fock-bases-in-a-small-two-factor-tensor-space]]): the projection $\pi$, the rectified highest label $01^{\uparrow}=10$, and the rescaling $P_A=s^{a}T_{A^{\uparrow}}$ on the highest constituent with $a=1$.

## Counterexample

Take $I=\{0\}$, $I^+=\{0,1\}$, $\Lambda=2\Lambda_0$, and retain the mixed order
$(M_{01},M_{10})$ and the notation of
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]] and
[[ex-four-fock-bases-in-a-small-two-factor-tensor-space]]. There
$$P_{01}=M_{01}+s\,M_{10}=s\,T_{10},$$
because $T_{10}=M_{10}+s^{-1}M_{01}$; but
$$P_{10}=M_{10}\neq M_{10}+s^{-1}M_{01}=T_{10}$$
over $\mathbb Q(s)$. Hence the canonical and quasi-canonical families are
different, and so are the dual-canonical and monomial families. The
highest-component label rectification is $01^{\uparrow}=10$ with
$a=1$, which exhibits the genuine power and label distinction: the coincidence
$P_{01}=sT_{10}$ happens on the rectified highest label, not by an identity of
the two index sets. At $s=1$ the highest-submodule vectors $P_{01}$ and $T_{10}$
agree after rectification, but the full canonical and quasi-canonical families
are still not interchangeable. This is no claim that every corresponding label
differs at $s=1$.

**Proof technique:** direct.

1.1 **The two families at label $10$.** In the mixed order the bar fixes $M_{01}$ and sends $M_{10}$ to $M_{10}+(s^{-1}-s)M_{01}$. A vector $M_{10}+cM_{01}$ is fixed exactly when $c-\bar c=s^{-1}-s$. The positive chart gives $c=-s$ and the negative chart gives $c=s^{-1}$; uniqueness follows because a bar-fixed polynomial in either $s\mathbb Z[s]$ or $s^{-1}\mathbb Z[s^{-1}]$ is zero. Thus $L_{01}=T_{01}=M_{01}$, $L_{10}=M_{10}-sM_{01}$ and $T_{10}=M_{10}+s^{-1}M_{01}$. Inverting the $L$ chart gives $M_{10}=L_{10}+sL_{01}$, so the transposed inverse chart is $P_{01}=M_{01}+sM_{10}$ and $P_{10}=M_{10}$. Linear independence of the two monomials proves $P_{10}\ne T_{10}$. [F1, given, algebra]

2.1 **The rectified highest-label coincidence.** At label $01$ the same computations give $P_{01}=M_{01}+sM_{10}=sT_{10}$, so the two families do meet at the rectified highest label with the power $a=1$ of [F2]; this is an identity between specific vectors, not an identification of the two labelled families. [F1, F2, step 1.1, algebra]

3.1 **Conclusion.** Since $P_{10}\neq T_{10}$, the canonical and quasi-canonical families are different over $\mathbb Q(s)$; the dual-canonical and monomial families differ too, because $L_{10}=M_{10}-sM_{01}\neq M_{10}$. The highest-submodule coincidence $P_{01}=sT_{10}$ is exactly the rectified normalization of [F2], and at $s=1$ it does not make the whole families interchangeable. [step 1.1, step 2.1] ∎

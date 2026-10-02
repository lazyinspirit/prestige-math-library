---
id: lem-hilbert-transform-is-skew-adjoint-on-ltwo
kind: lemma
title: "The Hilbert transform is skew-adjoint on L2"
status: draft
origin: pipeline
deps: [cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, lem-ltwo-fourier-multiplier-bound, thm-plancherel, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.1, adjoint computation following equation (5.1.15), printed p. 317"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, Definition 20.1 and adjoint identity, printed p. 114"
---

## Statement

Assume [[def-countable-choice|Countable Choice]] and use the first-variable-linear
pairing $\langle f,g\rangle=\int_{\mathbb R}f\overline g\,dx$ on
$L^2(\mathbb R;\mathbb C)$. Then for all $f,g\in L^2(\mathbb R;\mathbb C)$,

$$\langle Hf,g\rangle=-\langle f,Hg\rangle.$$

Equivalently $H^*=-H$: the Hilbert transform is skew-adjoint, and the statement
is a statement about the $L^2$ extension of the Schwartz principal-value
operator, not about pointwise values.

## Facts & Assumptions

**Given:** Countable Choice, the first-variable-linear pairing, and the $L^2$ Hilbert transform $H$ with symbol $m(\xi)=-i\operatorname{sgn}(\xi)$.

[F1] The Hilbert transform is the $L^2$ operator with multiplier $m(\xi)=-i\operatorname{sgn}(\xi)$, extending the Schwartz principal-value operator; $\|Hf\|_2=\|f\|_2$ and $H^2=-I$. [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]

[F2] For a measurable symbol with essential supremum at most one the operator $\mathcal F_2^{-1}M_m\mathcal F_2$ acts on $L^2$, and the Schwartz-core action of $H$ extends uniquely to it. [[lem-ltwo-fourier-multiplier-bound]]

[F3] Plancherel: $\mathcal F_2$ is a surjective linear isometry that preserves the first-variable-linear inner product, $\langle f,g\rangle=\langle\mathcal F_2f,\mathcal F_2g\rangle$. [[thm-plancherel]]

## Proof

**Proof technique:** direct.

1.1 The symbol satisfies $\overline{m(\xi)}=-m(\xi)$ for every $\xi\ne0$: indeed $\overline{-i\operatorname{sgn}\xi}=i\operatorname{sgn}\xi=-(-i\operatorname{sgn}\xi)$, and both sides vanish at $\xi=0$. [given, algebra]

2.1 Since $\mathcal F_2$ preserves the inner product by [F3] and $H$ is the multiplier operator of [F1] with $\mathcal F_2(Hf)=m\mathcal F_2f$, one has $\langle Hf,g\rangle=\langle m\mathcal F_2f,\mathcal F_2g\rangle=\int m\widehat f\overline{\widehat g}\,d\lambda$ for all $f,g\in L^2$, the last expression being an absolutely convergent integral because $|m|\le1$ and $\widehat f,\widehat g\in L^2$. [step 1.1, F1, F2, F3]

3.1 Applying 2.1 with the roles of $f$ and $g$ interchanged and conjugating the symbol by 1.1, $\langle f,Hg\rangle=\int\widehat f\overline{m\widehat g}\,d\lambda=\int\widehat f\,\overline{m}\,\overline{\widehat g}\,d\lambda=-\int m\widehat f\overline{\widehat g}\,d\lambda=-\langle Hf,g\rangle$, which is the asserted skew-adjointness. [step 1.1, step 2.1, F3] ∎

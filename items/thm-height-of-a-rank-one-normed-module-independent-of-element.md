---
id: thm-height-of-a-rank-one-normed-module-independent-of-element
kind: theorem
title: "Independence of the normed-module height from its generator"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - cor-ring-of-integers-is-a-dedekind-domain
  - def-axiom-of-choice
  - def-archimedean-embeddings-and-number-field-signature
  - def-fractional-ideal
  - def-height-of-a-rank-one-normed-module-over-number-ring
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - lem-rank-one-projective-embedded-as-a-fractional-ideal
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-product-formula-for-number-fields
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "Chapter IV, §6, printed p. 152, Lemma 6.2 and its proof"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Chapter 7, Theorem 7.15 and Lemma 7.16, normalized product formula"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, $R=\mathcal O_K$, and let $(M,(\|\cdot\|_v)_{v\mid\infty})$ be a rank-one normed $R$-module as in the preceding definition. For any $m,m'\in M\setminus\{0\}$, the quantities
$$\frac{\#(M/Rm)}{\prod_{v\mid\infty}\|m\|_v^{\epsilon_v}}\quad\text{and}\quad\frac{\#(M/Rm')}{\prod_{v\mid\infty}\|m'\|_v^{\epsilon_v}}$$
are equal. Hence the height $H(M)$ and its logarithmic normalization $h(M)$ are well-defined.

## Statement references

[Milne, Abelian Varieties, Lemma 6.2](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, a rank-one projective $R$-module $M$, archimedean norms, and nonzero elements $m,m'\in M$.

[A1] The product formula is assumed; its source proof uses the Axiom of Choice only through unique factorization of fractional ideals ([[def-axiom-of-choice]], [[thm-product-formula-for-number-fields]]).

[F1] The ring of integers is a Dedekind domain and nonzero integral ideals have finite index; a rank-one projective module embeds as a fractional ideal ([[cor-ring-of-integers-is-a-dedekind-domain]], [[lem-nonzero-number-field-ideal-has-finite-quotient]], [[lem-rank-one-projective-embedded-as-a-fractional-ideal]]).

[F2] For a nonzero integral principal ideal $(b)$, its norm is $|N_{K/\mathbb Q}(b)|$ ([[thm-principal-ideal-norm-is-absolute-field-norm]]).

[F3] Every nonzero fractional ideal has a finite unique factorization into prime ideals, and the finite absolute values are $|a|_{\mathfrak p}=N\mathfrak p^{-v_{\mathfrak p}(a)}$ ([[thm-number-field-integral-ideal-factorisation-in-zf]], [[def-fractional-ideal]], [[def-archimedean-embeddings-and-number-field-signature]]).

[F4] For $a\in K^\times$, $\prod_v|a|_v=1$, with complex-place factors squared ([[thm-product-formula-for-number-fields]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], choose an $R$-linear embedding of $M$ into a fractional ideal $I\subset K$; write the images of $m,m'$ as $x,y\in I$. Since $M\otimes_RK$ is one-dimensional and $m,m'$ are nonzero, $a:=y/x\in K^\times$ and $y=ax$. [F1, given, choose]

1.2 Choose $0\ne d\in R$ with $dI\subseteq R$. Multiplication by $d$ identifies the finite quotients $I/xR$ and $dI/(dx)R$, and likewise for $y$. Because $(dx),(dy)\subseteq dI\subseteq R$, multiplicativity of finite indices gives
$$\frac{\#(M/Rm')}{\#(M/Rm)}=\frac{[dI:(dy)]}{[dI:(dx)]}=\frac{N((dy))}{N((dx))}=|N_{K/\mathbb Q}(a)|=\prod_{\mathfrak p}|a|_{\mathfrak p}^{-1}.$$
The last equality follows from [F2]–[F3] by factoring the integral principal ideals and using $v_{\mathfrak p}(dy)-v_{\mathfrak p}(dx)=v_{\mathfrak p}(a)$. [F2, F3, given, algebra]

2.1 Norm homogeneity gives $\|m'\|_v=|a|_v\|m\|_v$ at every archimedean place. By the product formula [F4],
$$\prod_{v\mid\infty}\frac{\|m'\|_v^{\epsilon_v}}{\|m\|_v^{\epsilon_v}}=\prod_{v\mid\infty}|a|_v^{\epsilon_v}=\prod_{\mathfrak p}|a|_{\mathfrak p}^{-1}=\frac{\#(M/Rm')}{\#(M/Rm)}.$$
Together with step 1.2, this shows the finite-index numerator and the archimedean denominator scale by the same factor. [A1, F4, step 1.2, given, algebra]

3.1 Dividing the equal scaling factors in steps 1.2 and 2.1 gives $H_m(M)=H_{m'}(M)$. Taking logarithms and dividing by the fixed positive integer $[K:\mathbb Q]$ gives the same equality for $h(M)$. [step 1.2, step 2.1, given, algebra] ∎

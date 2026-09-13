---
id: cex-c0-is-not-reflexive
kind: counterexample
title: $c_0$ is not reflexive
status: draft
origin: pipeline
deps: [lem-real-and-complex-c-zero-are-banach, def-reflexive-banach-space,
       def-c-zero-and-ell-infinity, thm-dual-of-c0-is-ell-one,
       thm-complex-dual-of-ell-one-is-ell-infinity,
       cor-ell-p-duality-by-counting-measure]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "Example 2.72(iv), printed p. 92"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§4.3, final example after Theorem 4.20, printed p. 116"
---

## Statement

The Banach spaces $c_0(\mathbb R)$ and $c_0(\mathbb C)$ are not reflexive.
Under the standard bilinear sequence dualities, their canonical bidual maps are
the proper inclusions
$$
 c_0(\mathbb K)\hookrightarrow\ell^\infty(\mathbb K).
$$

## Facts & Assumptions

**Given:** A scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$.

[F1] The supremum-norm space $c_0(\mathbb K)$ is Banach without choice ([[lem-real-and-complex-c-zero-are-banach]]), and a Banach space is reflexive exactly when its canonical evaluation map into the bidual is onto ([[def-reflexive-banach-space]]).

[F2] Bilinear sequence pairing gives the isometric identification $c_0(\mathbb K)^*=\ell^1(\mathbb K)$.  The dual of real $\ell^1$ is real $\ell^\infty$, and the dual of complex $\ell^1$ is complex $\ell^\infty$, with the same no-conjugation pairing ([[thm-dual-of-c0-is-ell-one]], [[cor-ell-p-duality-by-counting-measure]], [[thm-complex-dual-of-ell-one-is-ell-infinity]]).

[F3] The space $c_0$ consists exactly of the bounded scalar sequences tending to zero, while $\ell^\infty$ consists of all bounded scalar sequences ([[def-c-zero-and-ell-infinity]]).

## Proof

**Proof technique:** Compute canonical evaluation under the two published sequence-duality identifications and exhibit a missing bidual element.

1.1 Let $T:\ell^1(\mathbb K)\to c_0(\mathbb K)^*$ be the isometric bijection from [F2], so $T(a)(x)=\sum_{n=0}^\infty a_nx_n$.  Identify $(\ell^1(\mathbb K))^*$ with $\ell^\infty(\mathbb K)$ through [F2].  Both identifications use this bilinear series pairing, including over $\mathbb C$. [F2, given]

2.1 For $x\in c_0$ and $a\in\ell^1$, $$ J_{c_0}(x)(T(a))=T(a)(x)=\sum_{n=0}^\infty a_nx_n. $$ The functional on the right is represented, under the second identification in step 1.1, by the bounded sequence $x$ itself.  Hence the composite $c_0\xrightarrow{J_{c_0}}c_0^{**}\cong\ell^\infty$ is precisely the canonical inclusion $x\mapsto x$. [step 1.1, F2]

3.1 The constant sequence $\mathbf1=(1,1,\ldots)$ lies in $\ell^\infty$, has norm one, and does not tend to zero.  Thus [F3] gives $\mathbf1\notin c_0$, so step 2.1 exhibits a concrete member of $c_0^{**}$ outside the range of $J_{c_0}$. [step 2.1, F3]

4.1 The canonical map is not onto.  Since $c_0(\mathbb K)$ is Banach, [F1] therefore proves that it is not reflexive.  The calculation covers both scalar fields, including their identical bilinear convention, and uses no choice principle. [step 2.1, step 3.1, F1] ∎

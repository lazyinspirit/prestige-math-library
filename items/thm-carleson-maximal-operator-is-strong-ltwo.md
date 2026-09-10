---
id: "thm-carleson-maximal-operator-is-strong-ltwo"
kind: "theorem"
title: "Carleson maximal operator is strong ltwo"
deps: ["lem-wave-packet-model-dominates-the-linearised-carleson-operator", "lem-hunt-exceptional-set-and-distribution-estimates", "lem-carleson-restricted-weak-interpolation", "def-carleson-operator-and-measurable-linearisation", "lem-schwartz-space-is-dense-in-l-two", "lem-complex-lp-completeness-density-and-inner-product", "def-axiom-of-choice"]
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Lacey section 7; Remark 8.7
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC. The one-sided real-line Carleson maximal operator extends boundedly to complex L2(R).

## Facts & Assumptions

[F1] Uniform finite-model strong Lp estimates transfer to the real-line maximal operator on Schwartz input [[lem-wave-packet-model-dominates-the-linearised-carleson-operator]].

[F2] Finite models are uniformly restricted weak type (q,q) for every 1<q<infinity [[lem-hunt-exceptional-set-and-distribution-estimates]].

[F3] Restricted weak bounds at 1<r<p<s<infinity give a uniform strong(p,p) finite-model bound [[lem-carleson-restricted-weak-interpolation]].

[F4] The real-line operator on Schwartz functions is the supremum of the absolute values of linear one-sided Fourier cutoffs [[def-carleson-operator-and-measurable-linearisation]].

[F5] Schwartz classes are dense in complex L2 under countable choice [[lem-schwartz-space-is-dense-in-l-two]].

[F6] Complex L2 is complete under countable choice and norm convergence has an almost-everywhere convergent subsequence [[lem-complex-lp-completeness-density-and-inner-product]].

[F7] Assume AC [[def-axiom-of-choice]], supplying the countable choice in F5 and F6 and the inherited analytic interfaces.

## Proof

**Given:** The stated AC assumption and the exact one-sided operator of F4.

1.1 Apply F2 at r=3/2 and s=3, then F3 with p=2. These strict endpoint exponents give a finite-model strong $L^2$ constant independent of the family and selector. F1 gives $\|C_{\mathbb R}u\|_2\le K\|u\|_2$ for every complex Schwartz u, for a fixed finite K. This uses estimates on both sides of two; no restricted weak-$L^2$-to-strong-$L^2$ inference is made. [F1, F2, F3]

2.1 For Schwartz u,v, linearity of every cutoff and $||a|-|b||\le|a-b|$ imply pointwise $|C_{\mathbb R}u-C_{\mathbb R}v|\le C_{\mathbb R}(u-v)$. The suprema are finite because the Schwartz transform is integrable. Thus step 1.1 gives $\|C_{\mathbb R}u-C_{\mathbb R}v\|_2\le K\|u-v\|_2$. Also $C_{\mathbb R}(zu)=|z|C_{\mathbb R}u$ and $C_{\mathbb R}(u+v)\le C_{\mathbb R}u+C_{\mathbb R}v$ pointwise. [F4, step 1.1]

3.1 For each fixed $f\in L^2$, F5 and the countable choice supplied by F7 give Schwartz $u_j$ with $\|u_j-f\|_2<1/j$. Step 2.1 makes $(C_{\mathbb R}u_j)$ Cauchy in $L^2$, so F6 gives a limit; define $\overline C_{\mathbb R}f$ to be this class. If v_j is another such sequence, the same Lipschitz inequality bounds the distance between their output sequences by $K\|u_j-v_j\|_2\to0$, so the limit is independent of the approximation. On a Schwartz class take the constant sequence to see agreement with the original operator. Passing norms to the limit gives $\|\overline C_{\mathbb R}f\|_2\le K\|f\|_2$. [F5, F6, F7, step 2.1]

4.1 Applying the same argument to approximants for f,g gives $\|\overline C_{\mathbb R}f-\overline C_{\mathbb R}g\|_2\le K\|f-g\|_2$, so the extension is continuous and is the unique continuous extension from the dense Schwartz classes. It is nonnegative almost everywhere: F6 supplies an a.e.-convergent subsequence of its nonnegative approximating outputs. Homogeneity and subadditivity also pass from step 2.1; for subadditivity take subsequences along which the three output sequences for u_j, v_j and u_j+v_j converge a.e., successively using F6, and pass the pointwise inequality off the finite union of exceptional null sets. The zero class maps to zero. This is the required bounded maximal-operator extension on complex $L^2$, with precisely the inherited AC assumption and no simultaneous arbitrary-index choice of approximants. [F6, F7, step 2.1, step 3.1] ∎

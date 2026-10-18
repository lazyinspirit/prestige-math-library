---
id: thm-mutual-information-and-conditional-mutual-information-quantization
kind: theorem
title: "Mutual information is recovered by finite coordinate quantizations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-measure-theoretic-mutual-information
  - def-standard-borel-conditional-mutual-information
  - thm-general-kl-variational-and-partition-formulas
  - cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
  - lem-same-marginal-conditional-product-law-well-defined
  - lem-product-of-two-probability-kernels
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-continuity-from-below-for-measures
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is used through the countable generating-algebra and standard-Borel conditional-law suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.5, Lemmas 5.5.5 and 5.5.7"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 3 §3.4"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/486b7d83cc428acf75b74323ecafcc11_MIT6_441S16_chapter_3.pdf"
---

## Statement

A **finite quantizer** on a measurable space is a measurable map into a finite set. Let X,Y,Z be standard-Borel random elements. Choose sequences of finite quantizers $q_n$ on X and $r_n$ on Y whose generated sigma-algebras increase to the full sigma-algebras of their respective spaces. Then
$$I(X;Y)=\lim_{n\to\infty}I(q_n(X);r_n(Y))$$
and
$$I(X;Y\mid Z)=\lim_{n\to\infty}I(q_n(X);r_n(Y)\mid Z).$$
Such sequences exist by countable generation of standard-Borel sigma-algebras. In the conditional formula, Z remains unchanged.

## Facts & Assumptions

**Given:** AC, standard-Borel X,Y,Z, and finite quantizer sequences as in the Statement.

[A1] AC supplies the standard-Borel countable generating algebras and conditional laws. [[def-axiom-of-choice]]

[F1] Every standard-Borel space has a countable generating algebra. [[cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras]]

[F2] KL is the supremum of its variational functional over bounded measurable functions. [[thm-general-kl-variational-and-partition-formulas]]

[F3] Mutual information is joint KL against the product of marginals. [[def-measure-theoretic-mutual-information]]

[F4] Conditional mutual information is KL against the same-marginal conditional-product law, which is version-independent. [[def-standard-borel-conditional-mutual-information]] [[lem-same-marginal-conditional-product-law-well-defined]]

[F5] A finite measure is continuous from below on increasing measurable sets. [[thm-continuity-from-below-for-measures]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $(\mathcal G_n)$ be any increasing sequence of sub-sigma-algebras generating $\mathcal G$, and let $\rho=P+Q$ for probability measures on $\mathcal G$. The union $\mathcal U=\bigcup_n\mathcal G_n$ is an algebra. The class of $A\in\mathcal G$ approximable in $\rho$-measure by a set in $\mathcal U$ is a sigma-algebra: complements preserve the symmetric-difference measure, finite unions preserve approximation, and for a countable union one first truncates it using continuity from below [F5] of the finite measure $\rho$, then approximates the finite union. Hence every set in $\mathcal G$ is approximable. Approximating bounded measurable functions first by simple functions and then their level sets gives bounded $\mathcal U$-measurable functions converging in $L^1(\rho)$, with one $\mathcal G_n$ containing each finite simple approximation. The approximants may be clipped to the same bound M. On that bound, [F2]'s variational functional is continuous under $L^1(\rho)$ approximation: $e^t$ is Lipschitz on $[-M,M]$, and the exponential integral is bounded below by $e^{-M}$. By [F2] applied to $P,Q$ and their restrictions to each $\mathcal G_n$, the supremum over all bounded $\mathcal G_n$-measurable functions is $D(P|_{\mathcal G_n}\|Q|_{\mathcal G_n})$. These test classes increase, so the restricted divergences increase; the approximation shows their supremum equals the unrestricted variational supremum $D(P\|Q)$. Hence $D(P\|Q)=\lim_n D(P|_{\mathcal G_n}\|Q|_{\mathcal G_n})$. [A1, F2, F5, given, construct]

2.1 By [F1], countable generating algebras exist; their first-n finite Boolean subalgebras yield increasing finite quantizers by labeling their atoms. For the quantizers in the Statement, the same generated-sigma property is assumed, so in either case $\sigma(q_n(X),r_n(Y))$ increases to the product sigma-algebra of $(X,Y)$. Under the map $(x,y)\mapsto(q_n(x),r_n(y))$, the push-forward of $P_X\otimes P_Y$ is $P_{q_n(X)}\otimes P_{r_n(Y)}$, as is checked on rectangles of the finite output sets. Since $\sigma(q_n(X),r_n(Y))$ consists exactly of preimages of output events, every bounded measurable test function on that sigma-algebra factors through the finite output map. Therefore its restricted KL equals the KL of the push-forward laws, which by [F3] is $I(q_n(X);r_n(Y))$. Applying step 1.1 proves the ordinary mutual-information limit. [A1, F1, F2, F3, step 1.1]

2.2 For the conditional statement, put $\mathcal G_n=\sigma(Z,q_n(X),r_n(Y))$. These sigma-algebras increase to the full product sigma-algebra of $(Z,X,Y)$ because the entire Z sigma-algebra is retained. A bounded $\mathcal G_n$-measurable simple function factors through $(Z,q_n(X),r_n(Y))$: each level set is the preimage of a measurable output set, and finitely many output sets can be made disjoint without changing their preimages. Uniform simple approximation extends this factorization to all bounded variational test functions. Hence the KL restricted to $\mathcal G_n$ equals the KL between the push-forward joint and reference laws. Under the same map, the push-forward of the reference law in [F4] has, given Z=z, the product of the push-forward kernels $K_z\circ q_n^{-1}$ and $L_z\circ r_n^{-1}$: on a rectangle $C\times A'\times B'$ its mass is $\int_CK_z(q_n^{-1}A')L_z(r_n^{-1}B')P_Z(dz)$. By rectangle uniqueness, this is exactly the conditional-product reference law for the quantized variables. Step 1.1 therefore gives the conditional limit. [A1, F1, F2, F4, step 1.1]

3.1 Steps 2.1 and 2.2 establish both limits. The proof quantizes X and Y only; it makes no claim that coarsening Z decreases conditional mutual information. [step 2.1, step 2.2] ∎

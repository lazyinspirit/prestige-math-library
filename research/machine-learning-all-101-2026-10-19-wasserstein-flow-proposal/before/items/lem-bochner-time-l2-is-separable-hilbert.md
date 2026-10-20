---
id: lem-bochner-time-l2-is-separable-hilbert
kind: lemma
title: Bochner L2 on a finite interval is a separable Hilbert space
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-bochner-integrable-function, def-strongly-measurable-banach-valued-function, thm-bochner-integrability-criterion, thm-minkowski-inequality-for-integrals, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-finite-and-countable-subadditivity-of-measures, def-countable-choice, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-hilbert-space, def-separable-space, thm-cauchy-schwarz-in-an-inner-product-space, thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p, lem-countable-generators-yield-countable-set-algebras, lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra, def-real-and-complex-inner-product-space]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies Countable Choice for subsequence and representative selections. The simple approximation and interval-density arguments use no Dependent Choice beyond this inherited branch."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume the Axiom of Choice. Let $H$ be a separable real Hilbert space and $T>0$, and equip $(0,T)$ with its Borel sigma-algebra and Lebesgue measure. Let $Z=L^2((0,T);H)$ consist of strongly measurable $H$-valued functions modulo equality almost everywhere with $\int_0^T\|u(t)\|_H^2\,dt<\infty$. Then
$$\langle u,v\rangle_Z=\int_0^T\langle u(t),v(t)\rangle_H\,dt$$
is a well-defined real inner product and its induced norm is complete. If $D\subset H$ is any countable dense set, the finite-valued step functions with values in $D$ and finitely many rational interval endpoints are dense in $Z$; in particular $Z$ is separable.

## Statement references

[[def-bochner-integrable-function]]

[[def-strongly-measurable-banach-valued-function]]

[[thm-bochner-integrability-criterion]]

[[thm-minkowski-inequality-for-integrals]]

[[thm-dominated-convergence]]

[Ambrosio, Gigli, and Savaré, Chapter 4](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Chizat and Bach, Assumptions 2.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, $H$, and $T>0$ as in the Statement.

[F1] Bochner strong measurability is almost-everywhere pointwise norm approximation by measurable simple functions; the norm-integrability criterion characterizes Bochner integrability. [[def-strongly-measurable-banach-valued-function]] [[thm-bochner-integrability-criterion]]

[F2] Minkowski holds for scalar $L^2$, and monotone and dominated convergence hold for nonnegative measurable functions. [[thm-minkowski-inequality-for-integrals]] [[thm-monotone-convergence-for-the-integral]] [[thm-dominated-convergence]]

[F3] The inner product on $H$ is positive definite and $H$ is complete. [[def-hilbert-space]] [[def-real-and-complex-inner-product-space]]

[F4] Countable Choice is available under AC. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F5] Finite-measure subsets of a sigma-finite countably generated measure space are approximable in measure by a countable generating algebra. [[lem-countable-generators-yield-countable-set-algebras]] [[lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra]]

[F6] Finite-valued simple functions are dense in scalar $L^2$. [[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]

## Proof


**Given:** AC, $H$, and $T$ as in the Statement.

1.1 Pointwise Cauchy–Schwarz and scalar Cauchy–Schwarz show that the displayed pairing is integrable and bounded by $\|u\|_Z\|v\|_Z$. It is bilinear and symmetric; if $\int\|u\|_H^2=0$, then $\|u(t)\|_H=0$ almost everywhere, so the equivalence class is zero. Thus it is a real inner product. [F1, F2, F3]

1.2 Let $(u_n)$ be Cauchy in $Z$. By [F4], choose a subsequence $(u_{n_k})$ with $\|u_{n_{k+1}}-u_{n_k}\|_Z\le2^{-k}$. Use [F4] to choose strongly measurable representatives and modify them to zero on their exceptional null sets. Put $g_m(t)=\sum_{k=1}^m\|u_{n_{k+1}}(t)-u_{n_k}(t)\|_H$. Minkowski gives $\|g_m\|_2\le\sum_{k\ge1}2^{-k}=1$; monotone convergence then gives $g=\sum_k\|u_{n_{k+1}}-u_{n_k}\|_H\in L^2$. Hence $g<\infty$ almost everywhere, and completeness of $H$ gives a pointwise limit $u(t)$ there; put $u=0$ on the null set. [F2, F3, F4, given]

2.1 The limit $u$ is strongly measurable: the chosen representatives are strongly measurable and converge pointwise off a measurable null set, so their simple approximations give a strongly measurable limit. The tail estimate $\|u-u_{n_m}\|_H\le\sum_{k\ge m}\|u_{n_{k+1}}-u_{n_k}\|_H$ and [F2] show $\|u-u_{n_m}\|_Z\le\sum_{k\ge m}2^{-k}\to0$. Thus $u\in Z$ and the subsequence converges in norm. Since the original sequence is Cauchy, the full sequence converges to the same class; $Z$ is complete. [F1, F2, step 1.2]

3.1 Choose a countable dense set $D\subset H$. From strong measurability choose finite-valued simple functions $s_n$ converging pointwise almost everywhere to a representative $u$. Replace $s_n$ by $t_n=s_n\mathbf1_{\{\|s_n\|_H\le2\|u\|_H\}}$; then $t_n\to u$ pointwise and $\|u-t_n\|_H^2\le9\|u\|_H^2$, so dominated convergence makes finite-valued simple functions dense in $Z$. Their level sets have finite measure because $(0,T)$ has finite measure. The rational interval algebra is countable and generates the Borel sigma-algebra; [F5] approximates each level set in symmetric-difference measure. Replace each of the finitely many values by a nearby element of $D$ and each level set by a finite union of rational intervals. The squared error from changing a level set $E$ to $A$ is its coefficient norm squared times $\operatorname{Leb}(E\triangle A)$, and the value error tends to zero by density of $D$. These step functions form a countable dense family, so $Z$ is separable. [F1, F2, F5, F6, given, construct] ∎
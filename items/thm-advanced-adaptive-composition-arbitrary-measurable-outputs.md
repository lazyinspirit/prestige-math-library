---
id: thm-advanced-adaptive-composition-arbitrary-measurable-outputs
kind: theorem
title: Advanced adaptive composition on arbitrary measurable output spaces
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-differential-privacy-and-adjacency
  - def-axiom-of-choice
  - lem-dp-joint-measure-purification
  - lem-dp-test-function-extension
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-integration-against-a-radon-nikodym-derivative
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-measurability-of-integration-against-a-kernel
  - thm-sections-of-product-measurable-functions-are-measurable
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-azuma-hoeffding-inequality
  - thm-monotone-convergence-for-the-integral
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is used through ordinary finite-measure Radon–Nikodym derivatives and the Azuma supplier. No kernel Radon–Nikodym version or regular conditional law is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dwork and Roth, The Algorithmic Foundations of Differential Privacy, Theorem 3.20"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Vadhan, The Complexity of Differential Privacy, Lemma 2.4 and Claim 2.5"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

Assume AC. Let $\mathcal D$ be a set equipped with its power-set sigma-algebra and a symmetric adjacency relation $\sim$; this includes finite-support record-count databases with neighbors differing by one added or removed occurrence. Let $k\ge1$, let $Y_1,\ldots,Y_k$ be arbitrary measurable output spaces, and let round $i$ be a probability kernel $K_i(D,h,\cdot)$ on $Y_i$, measurable in the previous transcript $h\in H_{i-1}=\prod_{j<i}Y_j$ for each database $D$. Suppose that for every ordered neighboring pair $D\sim D'$, every $i$, every $h$, and every measurable $A\subseteq Y_i$,
$$K_i(D,h,A)\le e^\varepsilon K_i(D',h,A)+\delta,$$
where $\varepsilon\ge0$ and $0\le\delta\le1$. If $0<\delta'<1$ and $k\delta+\delta'\le1$, then the full transcript, on the finite product sigma-algebra, is $(\varepsilon',k\delta+\delta')$-differentially private, where
$$\varepsilon'=\varepsilon\sqrt{2k\ln(1/\delta')}+k\varepsilon(e^\varepsilon-1).$$

## Statement references

[[def-differential-privacy-and-adjacency|Differential privacy and the ordered neighboring-database inequalities]]

[Dwork and Roth, Theorem 3.20 and proof, printed pp. 49–51; Lemmas 3.17–3.19, printed pp. 44–48.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, §2.2, Lemma 2.4, Claim 2.5, and their proof sketch.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** AC, the finite adaptive sequence on arbitrary measurable output spaces, the two ordered conditional privacy inequalities at every history, and the stated parameters.

[A1] [[def-axiom-of-choice|AC]] supplies [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality|ordinary RN derivatives]] of finite measures and is assumed by the concentration supplier below.

[F1] [[def-differential-privacy-and-adjacency|Differential privacy]] uses an event inequality for every ordered neighboring pair. Here the same event criterion is used for the stated symmetric adjacency relation on $\mathcal D$, whose sigma-algebra is the power set.

[F2] [[thm-sections-of-product-measurable-functions-are-measurable|Measurable sections]] and [[thm-measurability-of-integration-against-a-kernel|kernel integration measurability]] apply to arbitrary [[def-product-sigma-algebra-and-finite-product-sigma-algebras|finite product sigma-algebras]]. [[thm-monotone-convergence-for-the-integral|Monotone convergence]] extends indicator identities to nonnegative functions and proves countable additivity of kernel-integrated measures.

[F3] [[lem-dp-joint-measure-purification|Joint-measure purification]] produces, for any supplied history probability $\lambda$, a probability $T$ with that marginal, $e^{-\varepsilon}(\lambda\otimes L)\le T\le e^\varepsilon(\lambda\otimes L)$, and $\operatorname{TV}(T,\lambda\otimes K)\le\delta$ under the two pointwise event inequalities.

[F4] [[thm-integration-against-a-radon-nikodym-derivative|RN integration]] identifies integrals against density measures; its indicator and simple identities extend to nonnegative functions by [F2], and then to integrable signed functions by positive and negative parts. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure|Density measures]] are measures.

[F5] [[lem-dp-test-function-extension|The bounded-test-function extension]] implies $|\int g\,dU-\int g\,dV|\le s$ for measurable $0\le g\le1$ whenever $\operatorname{TV}(U,V)\le s$.

[F6] [[def-conditional-expectation-given-a-sigma-algebra|Conditional expectation]] is characterized by equality of integrals over all conditioning events.

[F7] [[thm-azuma-hoeffding-inequality|Azuma–Hoeffding]] bounds the upper tail of a martingale with increment interval lengths $c_i$ by $\exp(-2t^2/\sum_i c_i^2)$.

[F8] [[thm-composition-with-borel-functions-preserves-measurability|Borel composition]] preserves scalar measurability. [[thm-natural-logarithm-laws|Logarithm laws]] and [[thm-logarithm-derivative-and-integral|the integral formula $\log x=\int_1^x dt/t$]] apply to positive likelihood ratios. In particular $\log x\le x-1$ for $x>0$: integrate $1/t\le1$ from $1$ to $x$ when $x\ge1$, and integrate $1/t\ge1$ from $x$ to $1$ with a minus sign when $x\le1$.

[F9] At $u=0$, [[cor-exponential-reciprocal-and-positivity]] gives $\exp(0)=1/\exp(0)>0$, hence $\exp(0)=1$. Then [[thm-exponential-is-strictly-increasing]] gives $a=\exp(\varepsilon)\ge1$ for $\varepsilon\ge0$, and the reciprocal identity gives $a^{-1}=\exp(-\varepsilon)>0$.

## Proof

1.1 Fix an ordered neighboring pair $D,D'$, and abbreviate the two round kernels by $K_i,L_i$. Let $H_0=\{*\}$ and $H_i=H_{i-1}\times Y_i$. For any probability $\lambda$ on $H_{i-1}$, the formula $(\lambda\otimes K_i)(B)=\int K_i(h,B_h)\lambda(dh)$ defines a probability on $H_i$: sections and their evaluations are measurable, and countable additivity follows by monotone convergence for disjoint sections. Its history marginal is $\lambda$. Starting at the point mass on $H_0$, finite recursion constructs the original prefix laws $P_i=P_{i-1}\otimes K_i$ and $Q_i=Q_{i-1}\otimes L_i$. Integrals of product-measurable nonnegative functions have the corresponding iterated-integral formula, first for indicators and then by [F2]. No countable-generation hypothesis enters this construction. [F1, F2, given, construct]

2.1 Set $T_0=P_0=Q_0$. Given $T_{i-1}$, form $R_i=T_{i-1}\otimes K_i$ and $S_i=T_{i-1}\otimes L_i$. Apply [F3] with history law $T_{i-1}$ to obtain a probability $T_i$ on $H_i$ with marginal $T_{i-1}$, $S_i/a\le T_i\le aS_i$, and $\operatorname{TV}(R_i,T_i)\le\delta$, where $a=\exp(\varepsilon)\ge1$ by [F9]. The hypotheses hold at every history, hence also under the modified history law. These are measures only; no conditional kernel for $T_i$ is required. Finite iteration yields consistent prefix marginals of the final probability $T_k$. Moreover [F5], applied to $h\mapsto K_i(h,B_h)\in[0,1]$, gives $\operatorname{TV}(P_i,R_i)\le\operatorname{TV}(P_{i-1},T_{i-1})$. Thus the triangle inequality and induction give $\operatorname{TV}(P_i,T_i)\le i\delta$. [A1, F2, F3, F5, F9, step 1.1, construct, induction]

3.1 By [A1] choose a product-measurable density $r_i=dT_i/dS_i$. The measure bounds in step 2.1 force $a^{-1}\le r_i\le a$ almost everywhere, since otherwise a level set separated from one bound contradicts that bound after integration. Clip the representative into this positive interval everywhere. Write $Z_i=\prod_{j\le i}r_j$ as a function on $H_i$, with $Z_0=1$. We prove $dT_i/dQ_i=Z_i$ by induction. If $dT_{i-1}/dQ_{i-1}=Z_{i-1}$, then for any nonnegative measurable $g$ on $H_i$, [F2] and [F4] give $\int g\,dT_i=\int gr_i\,dS_i=\int T_{i-1}(dh)\int g(h,y)r_i(h,y)L_i(h,dy)=\int Q_{i-1}(dh)Z_{i-1}(h)\int g(h,y)r_i(h,y)L_i(h,dy)=\int gZ_{i-1}r_i\,dQ_i$. The base is the common point mass. Hence $Z_i$ is the asserted density and is everywhere positive and finite. In particular $\log Z_k=\sum_i X_i$ for the measurable prefix variables $X_i=\log r_i$, each in $[-\varepsilon,\varepsilon]$. [A1, F2, F4, F8, F9, step 1.1, step 2.1, choose, induction]

4.1 Define measurable functions on $H_{i-1}$ by $u_i(h)=\int r_i(h,y)L_i(h,dy)$ and $m_i(h)=\int r_i(h,y)\log r_i(h,y)L_i(h,dy)$. They are finite by the bounds in step 3.1. Because $T_i$ and $S_i$ have the same history marginal $T_{i-1}$, their density identity on $C\times Y_i$ gives $\int_Cu_i\,dT_{i-1}=T_{i-1}(C)$ for every $C$, so $u_i=1$ almost everywhere under $T_{i-1}$. On this conull set, $\log r_i\le r_i-1$ gives $\int\log r_i\,dL_i\le0$. Therefore $m_i\le\int(r_i-1)\log r_i\,dL_i\le\varepsilon\int|r_i-1|\,dL_i$. For every $a^{-1}\le r\le a$, $|r-1|\le(a-1)\min\{r,1\}$, by separately checking $r\ge1$ and $r\le1$. Thus $m_i\le\varepsilon(a-1)=:b$ almost everywhere. This scalar conditional calculation supplies the entropy bound without a fiberwise RN identity. [F2, F4, F8, F9, step 2.1, step 3.1, construct, algebra]

5.1 Work on $(H_k,T_k)$ with the filtration $\mathcal F_i$ generated by the first $i$ coordinates. For any measurable history event $C$, consistency of marginals, the density identity for $T_i$ relative to $S_i$, and the iterated-integral formula give $\int_{\{H_{i-1}\in C\}}X_i\,dT_k=\int_Cm_i(h)T_{i-1}(dh)$. Hence $m_i(H_{i-1})$ is a version of $\mathbb E_{T_k}[X_i\mid\mathcal F_{i-1}]$ by [F6]. It is bounded, as are the $X_i$, so $M_j=\sum_{i\le j}(X_i-m_i(H_{i-1}))$ is an integrable martingale. Its $i$th increment lies in the $\mathcal F_{i-1}$-measurable interval $[-\varepsilon-m_i,\varepsilon-m_i]$, whose length is $2\varepsilon$. [F2, F4, F6, step 2.1, step 3.1, step 4.1, construct]

6.1 If $\varepsilon=0$, all $r_i=1$, so $T_k=Q_k$ and the desired one-sided bound follows from step 2.1 with error $k\delta$. If $\varepsilon>0$, put $t=\varepsilon\sqrt{2k\ln(1/\delta')}>0$. Applying [F7] with interval lengths $2\varepsilon$ gives $T_k(M_k\ge t)\le\exp(-t^2/(2k\varepsilon^2))=\delta'$. Step 4.1 bounds $\sum_i m_i\le kb$, so $T_k(\log Z_k>kb+t)\le\delta'$. Set $\varepsilon'=kb+t$. For every transcript event $B$, split at $\log Z_k\le\varepsilon'$ and use the density from step 3.1 to obtain $T_k(B)\le e^{\varepsilon'}Q_k(B)+\delta'$. Then step 2.1 gives $P_k(B)\le e^{\varepsilon'}Q_k(B)+k\delta+\delta'$. [F4, F7, step 2.1, step 3.1, step 4.1, step 5.1, algebra]

7.1 The preceding construction applies to every ordered neighboring pair. In particular repeat it with $D,D'$ interchanged, constructing a new modified measure on that side, to get $Q_k(B)\le e^{\varepsilon'}P_k(B)+k\delta+\delta'$. This proves differential privacy by [F1]. The proof includes $k=1$, $\delta=0$, and equality $k\delta+\delta'=1$; $0<\delta'<1$ makes the logarithm finite and positive. All database event evaluations are measurable by the power-set database convention in [F1]. No modified law, density, or exceptional set needs to be selected measurably in the database pair: the event inequality has been proved for each pair separately. [F1, step 1.1, step 2.1, step 6.1, given] ∎

## Source notes

The source's privacy-loss and symmetrized-entropy argument supplies the exact constants. Its displayed point probabilities do not establish measurable conditional density versions on arbitrary output spaces. The joint-measure purification lemma and the prefix-law RN argument above supply that extension. Every use of a conditional expectation is verified by an integral identity, without conditioning on individual history points or invoking a regular conditional distribution.

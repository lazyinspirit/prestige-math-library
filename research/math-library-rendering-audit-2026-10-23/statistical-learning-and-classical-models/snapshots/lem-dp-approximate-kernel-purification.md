---
id: lem-dp-approximate-kernel-purification
kind: lemma
title: Approximate-DP kernels admit a nearby pure-DP kernel on standard-Borel targets
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-differential-privacy-and-adjacency
  - def-standard-borel-space
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels
  - thm-measurability-of-integration-against-a-kernel
  - cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is used through the jointly measurable Radon–Nikodym kernel supplier and the countable measure-determining algebra; no stronger choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

Assume AC. Let $H$ and $Y$ be measurable spaces measurably isomorphic to Polish spaces, let $\lambda$ be a probability measure on $H$, and let $K,L$ be probability kernels from $H$ to $Y$. Let $\varepsilon\ge0$ and $0\le\delta\le1$. Suppose that for $\lambda$-almost every $h$, both inequalities
$$
K(h,A)\le e^\varepsilon L(h,A)+\delta,\qquad L(h,A)\le e^\varepsilon K(h,A)+\delta
$$
hold for every measurable $A\subseteq Y$. Then there is a probability kernel $K^*$ from $H$ to $Y$ such that for $\lambda$-almost every $h$ and every measurable $A\subseteq Y$,
$$
e^{-\varepsilon}L(h,A)\le K^*(h,A)\le e^\varepsilon L(h,A),
$$
and
$$
\int_H \operatorname{TV}(K(h,\cdot),K^*(h,\cdot))\,\lambda(dh)\le\delta,
$$
where $\operatorname{TV}(P,Q)=\sup_A|P(A)-Q(A)|$ over measurable events.

## Statement references

[[def-differential-privacy-and-adjacency|The two event inequalities defining approximate differential privacy]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, §§3.5.1–3.5.2, Lemma 3.17 and Theorem 3.20, printed pp. 44–51, discrete approximate-DP reduction.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §2.2, Lemma 2.4 and its proof sketch, advanced-composition context.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** AC, standard-Borel spaces $H,Y$, probability measure $\lambda$, probability kernels $K,L$, $\varepsilon\ge0$, $0\le\delta\le1$, and the two event inequalities for $\lambda$-almost every $h$ and every measurable event.

[A1] [[def-axiom-of-choice|Axiom of Choice]] is assumed by the jointly measurable RN-kernel and countable-algebra suppliers.

[F1] [[def-standard-borel-space|Standard-Borel spaces]] are measurable spaces in the stated standard-Borel class.

[F2] [[def-measure-kernel-and-probability-kernel|Probability kernels]] have probability-measure sections and measurable event evaluations.

[F3] [[lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels|Joint RN derivatives]]: for standard-Borel source and target, kernels dominated sectionwise almost everywhere by a reference kernel have a product-measurable density representing every event on one common conull set.

[F4] [[cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras|Countable determining algebra]]: a standard-Borel target has a countable algebra generating its sigma-algebra and determining finite measures.

[F5] [[thm-measurability-of-integration-against-a-kernel|Kernel integration measurability]]: integrating a nonnegative product-measurable function against a probability kernel gives a measurable function of the source point.

[F6] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure|Density measures]]: integrating a nonnegative measurable section over events defines a measure.

[F7] [[thm-sections-of-product-measurable-functions-are-measurable|Measurable sections]]: every section of a product-measurable function is measurable.

[F8] [[thm-composition-with-borel-functions-preserves-measurability|Borel composition]] preserves measurability; in particular finite-valued replacements and the clipping and correction functions below remain measurable.

[F9] At $u=0$, [[cor-exponential-reciprocal-and-positivity]] gives $\exp(0)=1/\exp(0)>0$, hence $\exp(0)=1$. Then [[thm-exponential-is-strictly-increasing]] gives $a=\exp(\varepsilon)\ge1$ for $\varepsilon\ge0$, and the reciprocal identity gives $c=\exp(-\varepsilon)=1/a>0$.

## Proof

1.1 Let $M(h,A)=(K(h,A)+L(h,A))/2$, which is a probability kernel by [F2]. For every $h$, $M(h,A)=0$ implies $K(h,A)=L(h,A)=0$, so both sections are absolutely continuous with respect to $M(h,\cdot)$. Apply [F3] twice to obtain jointly measurable densities. Replace any value $+\infty$ by $0$ in each density; this Borel operation preserves measurability by [F8] and changes no section measure on the common conull representation set, since each density has integral one. Call the resulting finite-valued functions $p(h,y)$ and $q(h,y)$. Let $\mathcal C$ be the countable generating algebra in [F4], containing $Y$. Define $G$ to be the set of $h$ for which, for every $C\in\mathcal C$, both $K(h,C)=\int_Cp(h,y)M(h,dy)$ and $L(h,C)=\int_Cq(h,y)M(h,dy)$ hold, and both DP inequalities hold for $C$. By [F2], [F5], and countability of $\mathcal C$, $G$ is measurable. It has full $\lambda$-measure by the joint representation property and the hypothesis. For $h\in G$, [F6] and [F7] make the density integrals finite measures; they agree with $K(h,\cdot)$ and $L(h,\cdot)$ on $\mathcal C$, so [F4] gives the density representations on every measurable event. [A1, F1, F2, F3, F4, F5, F6, F7, F8, given, construct]

2.1 For fixed $h\in G$, put $\rho=K(h,\cdot)+L(h,\cdot)$, a finite measure. Let $\mathcal E_\rho$ be the measurable sets approximable in $\rho$-measure by members of $\mathcal C$. Complements preserve symmetric-difference measure, and $(A\cup B)\mathbin\triangle(C\cup D)\subseteq(A\mathbin\triangle C)\cup(B\mathbin\triangle D)$ proves closure under finite unions. If $A_n\in\mathcal E_\rho$ and $A=\bigcup_nA_n$, put $U_N=\bigcup_{n\le N}A_n$ and $D_1=U_1$, $D_N=U_N\setminus U_{N-1}$ for $N>1$. The $D_N$ are disjoint and $A=\bigcup_ND_N$, so countable additivity and finiteness of $\rho(A)$ give $\rho(A\setminus U_N)=\sum_{j>N}\rho(D_j)\to0$. Approximate each of the first $N$ sets closely enough that their finite union has arbitrarily small symmetric-difference measure from $U_N$. Thus $\mathcal E_\rho$ is a sigma-algebra containing $\mathcal C$, so it is the full target sigma-algebra. For any measurable $B$, choose $C_n\in\mathcal C$ with $\rho(B\mathbin\triangle C_n)\to0$. Then both $K(h,C_n)\to K(h,B)$ and $L(h,C_n)\to L(h,B)$, so the two inequalities on $\mathcal C$ pass to every measurable $B$. [F2, F4, step 1.1, construct]

3.1 Write $a=\exp(\varepsilon)\ge1$ and $c=\exp(-\varepsilon)=1/a>0$ by [F9]. On $G$, set $p_0=\min\{\max\{p,cq\},aq\}$, $\alpha=\int(p-aq)_+\,dM$, and $\beta=\int(cq-p)_+\,dM$. These quantities are finite and measurable in $h$ by [F5] and [F8]. The sets $A_h=\{y:p(h,y)>aq(h,y)\}$ and $B_h=\{y:p(h,y)<cq(h,y)\}$ are measurable by [F7]. Step 2.1 and the density identities give $\alpha=K(h,A_h)-aL(h,A_h)\le\delta$ and $a\beta=L(h,B_h)-aK(h,B_h)\le\delta$. Also $p_0=p-(p-aq)_++(cq-p)_+$, so $m:=\int p_0\,dM=1-\alpha+\beta$. Hence $\max\{\alpha,\beta\}\le\delta$. [F2, F5, F7, F8, F9, step 2.1, given, algebra]

4.1 Define a corrected density on $G$ as follows. If $m<1$, let $t_+=(1-m)/(a-m)$ and $r=p_0+t_+(aq-p_0)$. Its denominator is positive and $0\le t_+\le1$ because $a\ge1$, so $p_0\le r\le aq$ and $\int r\,dM=m+t_+(a-m)=1$. If $m>1$, let $t_-=(m-1)/(m-c)$ and $r=p_0-t_-(p_0-cq)$. Here $m-c>0$ and $0\le t_-\le1$ because $c\le1$, so $cq\le r\le p_0$ and $\int r\,dM=m-t_-(m-c)=1$. If $m=1$, set $r=p_0$. These formulas are product-measurable by [F8], and in every case $cq\le r\le aq$ and $\int r\,dM=1$. Set $r=0$ off $G$ and define $K^*(h,A)=\int_A r(h,y)M(h,dy)+\mathbf1_{G^c}(h)L(h,A)$. By [F5], this is measurable in $h$ for each $A$; for each $h\in G$ it is a probability measure by [F6] and the normalization, and for $h\notin G$ it equals the probability measure $L(h,\cdot)$. Thus $K^*$ is a probability kernel. For $h\in G$, integrate $cq\le r\le aq$ and use the density representation of L to obtain the claimed two-sided pure-DP inequalities. [F2, F5, F6, F8, F9, step 1.1, step 3.1, algebra]

5.1 For $h\in G$, clipping changes $p$ by total integral $\int|p-p_0|\,dM=\alpha+\beta$, while correction moves $p_0$ in one direction and changes its integral by $|m-1|=|\alpha-\beta|$. Thus $\int|p-r|\,dM\le\alpha+\beta+|\alpha-\beta|=2\max\{\alpha,\beta\}\le2\delta$. For probability densities with equal integral, $\sup_A|\int_A(p-r)\,dM|=\tfrac12\int|p-r|\,dM$: every event integral is bounded by the positive-part integral and $\{p\ge r\}$ attains it. Hence $\operatorname{TV}(K(h,\cdot),K^*(h,\cdot))\le\delta$ on $G$. This TV function is measurable: applying the approximation argument of step 2.1 to $K+K^*$ shows its supremum may be taken over $\mathcal C$, whose kernel evaluations are measurable. Since $G$ is conull, integration proves the asserted bound. [F2, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

---
title: Simultaneous Sobolev extension and localization
status: published
research_item: lem-se-sobolev-extension-retraction
dependency_level: 9
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-se-author-891dd21c27d6-bounded-common-endpoint-extension](item-lem-se-author-891dd21c27d6-bounded-common-endpoint-extension)
- [lem-se-author-891dd21c27d6-whole-space-er-interpolation](item-lem-se-author-891dd21c27d6-whole-space-er-interpolation)
- [lem-se-author-891dd21c27d6-quotient-interpolation-retraction](item-lem-se-author-891dd21c27d6-quotient-interpolation-retraction)
- [lem-se-author-891dd21c27d6-exterior-collar-tail-retraction](item-lem-se-author-891dd21c27d6-exterior-collar-tail-retraction)
- [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined)


## Statement

Assume AC. For a bounded smooth domain $G$ there is one linear extension $E_G$, agreeing with the input on $G$, bounded $H^s(G)\to H^s(\mathbb R^n)$ for every $0\le s\le2$, with output supported in a fixed compact neighborhood. Here $H^s(G)$ is the restriction of the Bessel-potential space with quotient norm. In this range $[L^2(G),H^2(G)]_{s/2}=H^s(G)$ with equivalent norms. Finite smooth boundary charts, cutoffs and restriction give the same order-0-to-2 Sobolev localization/retraction for a smooth exterior domain (a bounded collar plus a free-space tail).

Here the whole-space $H^s(\mathbb R^n)$ uses the weighted Fourier distribution convention, $H^s(G)$ is its restriction quotient, and a retraction/coretraction pair consists of bounded linear maps $J,P$ with $PJ=I$. Complex interpolation is over complex scalars. For a compatible complex Banach couple $(X_0,X_1)$, give $X_0+X_1$ the sum norm $\|x\|_{X_0+X_1}=\inf_{x=x_0+x_1}(\|x_0\|_{X_0}+\|x_1\|_{X_1})$. On $S=\{z\in\mathbb C:0\le\operatorname{Re}z\le1\}$, the bounded-strip class $\mathcal F_b(X_0,X_1)$ consists of bounded, sum-norm continuous functions $f:S\to X_0+X_1$ that are norm-holomorphic in the interior and whose boundary maps $t\mapsto f(j+it)$ are bounded and continuous in the $X_j$ norm, $j=0,1$. Give this class the boundary norm $\|f\|_{\mathcal F_b}=\max_{j=0,1}\sup_{t\in\mathbb R}\|f(j+it)\|_{X_j}$. For $0<\theta<1$, $[X_0,X_1]_\theta$ consists of the values $f(\theta)$, with norm $\inf_{f(\theta)=u}\|f\|_{\mathcal F_b}$. At $\theta=0,1$, the brackets denote the respective endpoint spaces with their given norms, rather than endpoint evaluation quotients. In this Hilbert setting the claimed Sobolev identifications include equivalence of norms.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [lem-se-author-891dd21c27d6-bounded-common-endpoint-extension](item-lem-se-author-891dd21c27d6-bounded-common-endpoint-extension) constructs one $E_G$ on $L^2(G)$ and weak $W^{2,2}(G)$ with $r_GE_G=I$ and output in a fixed compact subset of a chosen neighborhood.

[F3] [lem-se-author-891dd21c27d6-whole-space-er-interpolation](item-lem-se-author-891dd21c27d6-whole-space-er-interpolation) interpolates the one whole-space map $E_Gr_G$ and infimizes over ambient extensions; [lem-se-author-891dd21c27d6-quotient-interpolation-retraction](item-lem-se-author-891dd21c27d6-quotient-interpolation-retraction) gives the domain interpolation/quotient identity with equivalent norms, including equivalence of the integer weak endpoint.

[F4] [lem-se-author-891dd21c27d6-exterior-collar-tail-retraction](item-lem-se-author-891dd21c27d6-exterior-collar-tail-retraction) constructs one exterior endpoint extension and the explicit compatible $J,P$ maps with $PJ=I$ and two-sided collar/tail norm equivalence through order two.

[F5] [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined) supplies the compatible complex Banach-couple sum and the decaying strip class $\mathcal F_d(X_0,X_1)$: it has exactly the regularity and boundedness conditions of $\mathcal F_b$ in the Statement and additionally $\|f(j+it)\|_{X_j}\to0$ as $|t|\to\infty$, $j=0,1$. Its norm is the same maximum boundary norm. The quotient/interpolation supplier in F3 uses this decaying class. The comparison with the bounded class is proved locally below.

## Proof

**Goal:** Establish every assertion of the Statement under the stated hypotheses.

**Given:** The hypotheses and data in the Statement.

1.1 For bounded smooth $G$, take the common compactly supported endpoint extension from the first fact. It is defined already on $L^2(G)$ and is bounded at the second weak-derivative endpoint. The whole-space $Er$ lemma therefore applies with $D=G$: for each $0\le s\le2$ and each ambient $H^s$ extension $F$ of $u$, $E_Gu=(E_Gr_G)F$ and $\|E_Gu\|_{H^s}\le C_s\|F\|_{H^s}$. The value is independent of $F$ because it is the original $L^2$ map applied to $u$. Infimizing gives the bounded quotient extension for every order. Its support remains in the same fixed compact set because the formula on positive-order inputs is unchanged. [F2, F3, given]

1.2 For any compatible complex Banach couple, denote the evaluation norms from $\mathcal F_b$ and $\mathcal F_d$ by $N_b$ and $N_d$. Fix $0<\theta<1$, $f\in\mathcal F_b$ and $\varepsilon>0$, and put $f_\varepsilon(z)=\exp(\varepsilon(z-\theta)^2)f(z)$ and $c_\theta=\max\{\theta^2,(1-\theta)^2\}$. For $z=x+it\in S$, the scalar factor has modulus $\exp(\varepsilon((x-\theta)^2-t^2))\le\exp(\varepsilon c_\theta)\exp(-\varepsilon t^2)$. Multiplication by this entire scalar function preserves sum-norm continuity and norm-holomorphy: the latter follows directly from the product difference quotient. The displayed bound preserves boundedness on $S$ and makes each continuous $X_j$ boundary map decay in its endpoint norm. Hence $f_\varepsilon\in\mathcal F_d$, $f_\varepsilon(\theta)=f(\theta)$, and $\|f_\varepsilon\|_{\mathcal F_d}\le e^{\varepsilon c_\theta}\|f\|_{\mathcal F_b}$. Thus the two classes have identical sets of values at $\theta$. The inclusion $\mathcal F_d\subseteq\mathcal F_b$ gives $N_b(u)\le N_d(u)$, while the damped representatives give $N_d(u)\le e^{\varepsilon c_\theta}N_b(u)$ after infimizing over all $f$ representing $u$. Letting $\varepsilon\downarrow0$ proves $N_d(u)=N_b(u)$. No convergence of $f_\varepsilon$ in either strip norm is needed. [F5, given, construct, algebra]

2.1 For $0<s<2$, apply the quotient/interpolation lemma with $\theta=s/2$. Its decaying-strip interpolation space is $H^s(G)$ with equivalent norms; step 1.2 identifies that evaluation space isometrically with the bounded-strip convention of the Statement. At $s=0,2$ the brackets are the specified endpoint spaces, and the endpoint identifications are supplied directly by F2 and F3, without an endpoint strip-evaluation argument. Quotient completeness, definiteness and independence of the chosen ambient extension are supplied by the whole-space $Er$ lemma in F3. Consequently the domain interpolation identity and the common extension have precisely the asserted restriction-quotient meaning. [F2, F3, F5, step 1.1, step 1.2]

3.1 For the smooth exterior domain, use the final helper’s bounded collar $G=\Omega\cap B_L$, its finite-reflection collar extension and its independently justified identity tail. That helper proves the common $L^2/W^{2,2}$ endpoint bounds and then applies the same whole-space and quotient arguments; it also gives explicit maps $J,P$ with $PJ=I$ and equivalent collar/tail norms for each $0\le s\le2$. Thus both the bounded compact-output assertion and the exterior localization/retraction in the Statement hold in exactly the restriction-quotient Bessel convention. [F3, F4, step 1.1, step 2.1] ∎

## Source notes

Five local intermediate items supply the second-order reflection, common compact bounded-domain extension, whole-space Er interpolation, quotient/interpolation retraction, and exterior collar/free-tail construction. The exact existing half-space weak matching and authored spectral interpolation interfaces are used; no Rychkov theorem or unread external extension theorem is cited. This is an authoring candidate, not an independent proof or scaffold review.

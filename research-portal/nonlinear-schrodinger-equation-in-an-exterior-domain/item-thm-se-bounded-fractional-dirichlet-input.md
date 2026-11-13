---
title: Bounded smooth fractional Dirichlet domain contract
status: published
research_item: thm-se-bounded-fractional-dirichlet-input
dependency_level: 0
sources:
  references:
    - title: Gerd Grubb, Regularity of spectral fractional Dirichlet and Neumann
        problems, Mathematische Nachrichten 289 (2016), 831–844
      url: https://arxiv.org/pdf/1412.3744v4
      locator: "Section 2, PDF pp. 2–3: bijectivity hypothesis before equation (2.2);
        equation (2.4), discussion and equation (2.5), Definition 2.1 and
        Theorem 2.2"
      statement: For a bijective strongly elliptic second-order realization with
        Dirichlet boundary condition on a smooth bounded open set, the domain of
        its positive power is the corresponding boundary-adapted
        Bessel-potential space. For powers strictly between zero and one it is
        also the complex interpolation space between Lp and the realization
        domain. In the L2 Dirichlet case the first boundary threshold is s=1/2,
        where the condition is equivalently d^(-1/2)u in L2; above it and below
        s=5/2 the condition is zero Dirichlet trace.
      hypotheses: Smooth bounded open subset of Euclidean space; smooth coefficients;
        strongly elliptic scalar second-order problem with Dirichlet boundary
        condition and bijective realization; 1<p<infinity. The present
        application takes p=2 and the positive shifted Dirichlet Laplacian.
      reading_limits: Read v4 PDF pp. 1–4, including the bijectivity hypothesis in
        Section 2, the cited domain and interpolation statements, the L2
        distance-weight description and the short proof of Theorem 2.2. Seeley
        was not independently read. This input is bounded-domain only; it
        supplies neither exterior localization nor the local invertibility
        argument below.
---

## Prerequisites

- [math:def-bounded-c-k-domain-and-boundary-charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)
- [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:thm-kernel-of-the-trace-is-w-one-p-zero](https://alphabetamath.cc/item/thm-kernel-of-the-trace-is-w-one-p-zero)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup](https://alphabetamath.cc/item/cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup)
- [math:def-sectorial-operator-with-the-semigroup-sign-convention](https://alphabetamath.cc/item/def-sectorial-operator-with-the-semigroup-sign-convention)
- [math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator](https://alphabetamath.cc/item/def-resolvent-and-spectrum-of-a-closed-unbounded-operator)
- [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces)
- [math:thm-extension-theorem-for-bounded-smooth-domains](https://alphabetamath.cc/item/thm-extension-theorem-for-bounded-smooth-domains)
- [math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces](https://alphabetamath.cc/item/lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces)
- [` Gerd Grubb, Regularity of spectral fractional Dirichlet and Neumann problems, Mathematische Nachrichten 289 (2016), 831–844 · Section 2, PDF pp. 2–3: bijectivity hypothesis before equation (2.2); equation (2.4), discussion and equation (2.5), Definition 2.1 and Theorem 2.2 `](https://arxiv.org/pdf/1412.3744v4)


## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $G\subset\mathbb R^n$ be a nonempty bounded open set with $C^\infty$ one-sided boundary charts. All functions are complex-valued. Let $B$ be the positive self-adjoint Dirichlet realization of $1-\Delta$ in $L^2(G)$, with domain $H^2(G)\cap H^1_0(G)$, and write $D(B^{s/2})$ for the spectral-power domain with its graph norm.

For $s\ge0$, $H^s(G)$ is the space of restrictions to $G$ of the whole-space Bessel-potential space $H^s(\mathbb R^n)$, equipped with the quotient norm. For integer $k$, this agrees with the usual weak $W^{k,2}(G)$ convention on this smooth bounded set. The space $H^1_0(G)$ is the $H^1(G)$-closure of $C_c^\infty(G)$. Write $d_G(x)=\operatorname{dist}(x,\partial G)$, and let $\gamma_0$ be the continuous boundary trace extending ordinary restriction wherever $s>1/2$.

For $0\le s\le2$, with equivalent norms,

$$D(B^{s/2})=\begin{cases}H^s(G),&0\le s<1/2,\\ \{u\in H^{1/2}(G):d_G^{-1/2}u\in L^2(G)\},&s=1/2,\\ \{u\in H^s(G):\gamma_0u=0\},&1/2<s\le2.\end{cases}$$

At the critical index the norm on the displayed space is $\|u\|_{H^{1/2}(G)}+\|d_G^{-1/2}u\|_{L^2(G)}$; at the other indices use the inherited $H^s(G)$ norm. In particular, no normal-derivative boundary condition is imposed at $s=3/2$. For $0<s<2$ this domain also equals $[L^2(G),H^2(G)\cap H^1_0(G)]_{s/2}$ with equivalent norms. At $s=0$ and $s=2$, the interpolation notation is understood to mean its respective endpoint.

Here $[X_0,X_1]_\theta$ is complex strip interpolation: use bounded continuous functions on the closed strip with values in $X_0+X_1$, holomorphic in its interior, whose boundary values belong continuously to the respective endpoint spaces and tend to zero at imaginary infinity; the norm is the infimum of the larger boundary supremum over functions taking the specified value at $\theta$.

## External input

Grubb, Section 2, equation (2.4), equation (2.5), Definition 2.1 and Theorem 2.2, supplies the bounded-domain power and complex-interpolation identifications. The application uses the Dirichlet boundary operator $\gamma_0$, exponent $p=2$, and the bijective realization of $1-\Delta$. Grubb explicitly gives the distance-weight formulation of the critical condition in the $L^2$ case. The spectral fractional operator here is the power of the Dirichlet realization, not the restricted fractional Laplacian. The cited source is not an exterior-domain theorem.

The integer zero-boundary notation is the closure in [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure); [math:thm-kernel-of-the-trace-is-w-one-p-zero](https://alphabetamath.cc/item/thm-kernel-of-the-trace-is-w-one-p-zero) identifies it with the kernel of the $H^1$ trace on this bounded smooth domain. The whole-space fractional convention is that of [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces), and spectral powers use [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus). The choice assumption is retained from those published interfaces. The fractional-domain theorem is imported; the local argument below establishes the integer Sobolev identification and the bijectivity needed for its application, without reconstructing Seeley’s theorem.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[A1] The Axiom of Choice is assumed ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)); it supplies the Countable and Dependent Choice hypotheses of the published realization and functional-analysis inputs. The Sobolev, trace-kernel and spectral-power conventions are those recorded in the Statement and External input.

[F1] On the present bounded smooth set, [math:cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup](https://alphabetamath.cc/item/cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup) (Statement (1), (3), and Proof step 4.1) supplies the self-adjoint operator $T=\Delta_D$ with $D(T)=H^2(G)\cap H^1_0(G)$, graph norm equivalent to $H^2(G)$, and $\langle Tu,u\rangle=-\|\nabla u\|_2^2$. Its proof establishes that $T$ is sectorial with vertex $0$ and angle $\pi/2$ in the $e^{tT}$ convention.

[F2] In this convention, the sectorial condition puts the positive real axis inside the resolvent set ([math:def-sectorial-operator-with-the-semigroup-sign-convention](https://alphabetamath.cc/item/def-sectorial-operator-with-the-semigroup-sign-convention)). Membership $z\in\rho(T)$ means that $zI-T:D(T)\to L^2(G)$ is bijective with bounded inverse ([math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator](https://alphabetamath.cc/item/def-resolvent-and-spectrum-of-a-closed-unbounded-operator)).

[F3] The independent Grubb input recorded in External input gives the fractional-domain and interpolation identifications for a bijective smooth strongly elliptic Dirichlet realization. For the present application the differential expression is $1-\Delta$, the boundary operator is $\gamma_0$, the exponent is $p=2$, and the fractional power parameter is $a=s/2$.

[F4] For every $k\in\mathbb N_0$, [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces) identifies $H^k(\mathbb R^n)$ with complex weak $W^{k,2}(\mathbb R^n)$, with equivalent norms and equality of norms at $k=0$, under Countable Choice. By [Bounded smooth domain Sobolev extension](https://alphabetamath.cc/item/thm-extension-theorem-for-bounded-smooth-domains), AC and the present bounded $C^\infty$ one-sided charts give, for each $k\ge1$, a bounded linear extension $E_k:W^{k,2}(G)\to W^{k,2}(\mathbb R^n)$ with $(E_ku)|_G=u$; take the ambient neighbourhood $V=\mathbb R^n$. At $k=0$ the same supplier supplies isometric zero extension. By [math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces](https://alphabetamath.cc/item/lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces), restriction $W^{k,2}(\mathbb R^n)\to W^{k,2}(G)$ is a contraction for every $k\ge0$ under AC. These are mathematical inputs; no physical premise is used.

## Proof

**Given:** The same bounded smooth set and Dirichlet realization as in the Statement.

**Goal:** Establish the stated domain and interpolation identifications.

1.1 Fix $k\in\mathbb N_0$. The assumptions $n\ge2$, complex scalars and AC meet all the hypotheses in [F4]; for $k\ge1$, the boundary of $G$ is in particular $C^k$. Choose constants $a_k,b_k>0$ such that $\|v\|_{W^{k,2}(\mathbb R^n)}\le a_k\|v\|_{H^k(\mathbb R^n)}$ and $\|v\|_{H^k(\mathbb R^n)}\le b_k\|v\|_{W^{k,2}(\mathbb R^n)}$ under the whole-space identification. If $u\in H^k(G)$ and $U\in H^k(\mathbb R^n)$ restricts to $u$, restriction in [F4] yields $u\in W^{k,2}(G)$ and $\|u\|_{W^{k,2}(G)}\le a_k\|U\|_{H^k(\mathbb R^n)}$. Taking the infimum over all such $U$ gives $\|u\|_{W^{k,2}(G)}\le a_k\|u\|_{H^k(G)}$. [given, A1, F4, choose]

2.1 Conversely, for $u\in W^{k,2}(G)$ use the extension $E_k$ from [F4], with operator norm $M_k$, using zero extension when $k=0$. Then $E_ku\in H^k(\mathbb R^n)$ by the whole-space equivalence, $(E_ku)|_G=u$, and the quotient norm gives $\|u\|_{H^k(G)}\le\|E_ku\|_{H^k(\mathbb R^n)}\le b_kM_k\|u\|_{W^{k,2}(G)}$. Together with step 1.1 this proves $H^k(G)=W^{k,2}(G)$ with equivalent norms for every nonnegative integer $k$. At $k=0$ both whole-space comparison constants and the zero-extension norm can be taken to be one, so $H^0(G)=L^2(G)$ with equality of norms. At $k=1$ equivalent norms have the same closure of $C_c^\infty(G)$, hence the Statement's $H^1_0(G)$ equals weak $W^{1,2}_0(G)$ as defined in [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). Thus the published realization and trace-kernel interfaces may be used with the restriction-space convention, in particular at orders one and two. [given, F4, step 1.1, algebra]

3.1 Apply [F1] to $G$. Its smooth boundary is in particular $C^2$, and the assumed Choice axiom covers its choice hypotheses. The integer identifications and the closure equality in step 2.1 identify the published weak Sobolev domain with the present convention. The given Dirichlet realization is $B=I-T$ on $D(T)=H^2(G)\cap H^1_0(G)$. Hence for $u\in D(B)$, $\langle Bu,u\rangle=\|u\|_2^2+\|\nabla u\|_2^2\ge\|u\|_2^2$, so $B\ge I$. Also $Tu=u-Bu$ and $Bu=u-Tu$ imply equivalence of the two graph norms, hence equivalence of the graph norm of $B$ and the $H^2(G)$ norm. [given, A1, F1, step 2.1, algebra]

4.1 Since $1$ lies on the positive real axis, the sectorial conclusion in [F1] and the conventions in [F2] give $1\in\rho(T)$. Thus $B=I-T:D(B)\to L^2(G)$ is bijective with bounded inverse $(I-T)^{-1}$. This proves the required onto assertion as well as injectivity; positivity alone was not used as a substitute for surjectivity. [F1, F2, step 3.1]

5.1 The expression $1-\Delta$ has smooth coefficients and is strongly elliptic, and $\gamma_0$ is its Dirichlet boundary operator. The bounded smooth domain, $p=2$, and bijectivity from step 4.1 therefore meet [F3]. With $a=s/2$, its imported theorem gives the displayed fractional spaces, their norms, and the complex-interpolation identity for $0<s<2$, including the distance-weight condition at $s=1/2$ and only the Dirichlet trace condition at $s=3/2$. At $s=0$ the power domain is $L^2(G)$; at $s=2$ it is $D(B)=H^2(G)\cap H^1_0(G)$ with the graph norm equivalence of step 3.1. Step 2.1 supplies the integer Sobolev and zero-boundary identifications used at these endpoints and by the trace-kernel interface. These are exactly the stated endpoint conventions. Thus all the original identifications follow from the imported theorem with its bijectivity hypothesis established locally. [given, F1, F3, step 2.1, step 3.1, step 4.1] ∎

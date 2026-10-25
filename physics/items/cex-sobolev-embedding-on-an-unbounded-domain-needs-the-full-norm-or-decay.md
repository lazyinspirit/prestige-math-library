---
id: cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay
kind: counterexample
title: "Outward dilation defeats subcritical inclusion and homogeneous Poincare on Euclidean space"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-axiom-of-choice, def-sobolev-conjugate-exponent, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, thm-linear-change-of-variables-for-lebesgue-measure, thm-chain-rule-for-total-derivatives, thm-gagliardo-nirenberg-sobolev-inequality, cor-euclidean-closed-balls-and-spheres-are-compact, thm-gagliardo-nirenberg-sobolev-inequality-for-p-one, thm-polar-coordinates-formula-for-lebesgue-measure, lem-classical-derivatives-are-weak-derivatives, thm-real-power-continuity-and-derivatives, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.1, Remark 3.4 and the dilation discussion, printed pp. 61-66."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Theorem 3.17, printed p. 66, and Theorem 3.19, printed p. 68, for comparison with the critical and bounded-domain embeddings; the outward-dilation failure is derived here."
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$, $1\le p<n$ and $0<q<p$. The assertions

1. $W^{1,p}(\mathbb R^n)\hookrightarrow L^q(\mathbb R^n)$ continuously, and
2. the homogeneous Poincare inequality (even restricted to mean-zero functions) $\|u\|_{L^p(\mathbb R^n)}\le C\|Du\|_{L^p(\mathbb R^n)}$ for compactly supported smooth $u$,

are both false. In fact $W^{1,p}(\mathbb R^n)$ is not even a subset of $L^q(\mathbb R^n)$. Although on bounded sets the inclusion $W^{1,p}\subseteq L^q$ for $q<p$ follows by applying Holder to $|u|^q$ and $1$ with exponents $p/q$ and $p/(p-q)$, on the whole of $\mathbb R^n$ even the full $W^{1,p}$ norm does not bound $L^q$ for $q<p$; additional quantitative decay or integrability assumptions would be needed. The whole-space inequality at $q=p^{*}$ is unaffected.

## Facts & Assumptions

**Given:** The Axiom of Choice (and hence Countable Choice); $n\ge2$; $1\le p<n$; $0<q<p$; a fixed nonzero mean-zero $\varphi\in C_c^\infty(B(0,1))$; and $k\ge1$.

[F1] An invertible linear map scales Lebesgue measure by $|\det|$: substituting $y=x/k$ gives $\int_{\mathbb R^n}g(x/k)\,dx=k^n\int_{\mathbb R^n}g(y)\,dy$, and $L^q$ classes are determined up to null sets ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[def-l-p-space-as-a-quotient-by-null-functions]]); for the smooth dilates the chain rule gives $D\varphi_k(x)=k^{-1}D\varphi(x/k)$ ([[thm-chain-rule-for-total-derivatives]]), and the Sobolev norm is $\|v\|_{W^{1,p}(\mathbb R^n)}=(\|v\|_{L^p}^p+\sum_i\|D_iv\|_{L^p}^p)^{1/p}$ for $1\le p<\infty$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] The closed unit ball is compact, so the support of $\varphi$ is compact and the scaled supports $\operatorname{supp}\varphi_k\subseteq B(0,k)$ are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F3] The Sobolev conjugate satisfies $p^{*}>p$, and $q<p$ implies $\frac1q>\frac1p$ ([[def-sobolev-conjugate-exponent]]); the whole-space $p^{*}$ inequality holds for $1<p<n$ by [[thm-gagliardo-nirenberg-sobolev-inequality]] and for compactly supported smooth functions at $p=1$ by [[thm-gagliardo-nirenberg-sobolev-inequality-for-p-one]].

[F4] Such a mean-zero bump exists: take a nonzero nonnegative $\eta\in C_c^\infty(B(0,1/4))$ from [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], and set $\varphi(x)=\eta(x-e_1/2)-\eta(x+e_1/2)$. Its supports are disjoint inside $B(0,1)$, and its integral is zero by [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]].

[F5] Classical smooth derivatives are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]); real powers differentiate on positive bases ([[thm-real-power-continuity-and-derivatives]]); polar coordinates test radial integrability ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

## Counterexample

**Proof technique:** direct.

1.1 The two norm scalings. Put $\varphi_k(x):=\varphi(x/k)$ for $k\ge1$, so $\operatorname{supp}\varphi_k\subseteq B(0,k)$ is compact and $\varphi_k$ is smooth with $\varphi_k\not\equiv0$. Substituting $y=x/k$ and using [F1], $\|\varphi_k\|_{L^q}^q=k^n\int_{\mathbb R^n}|\varphi(y)|^qdy$, so $\|\varphi_k\|_{L^q}=k^{n/q}\|\varphi\|_{L^q}$ and similarly $\|\varphi_k\|_{L^p}=k^{n/p}\|\varphi\|_{L^p}$. Also $D\varphi_k(x)=k^{-1}(D\varphi)(x/k)$ by the chain rule [F1], so $\|D\varphi_k\|_{L^p}^p=k^{-p}k^n\|D\varphi\|_{L^p}^p=k^{n-p}\|D\varphi\|_{L^p}^p$, that is $\|D\varphi_k\|_{L^p}=k^{n/p-1}\|D\varphi\|_{L^p}$; moreover $\|D\varphi\|_{L^p}>0$, because a nonzero compactly supported smooth function is not constant. The support statement uses [F2]. [F1, F2, F4, given, algebra]

2.1 Failure of the inclusion and of the homogeneous inequality. By step 1.1, $\|\varphi_k\|_{L^q}=k^{n/q}\|\varphi\|_{L^q}$ while $\|\varphi_k\|_{W^{1,p}}^p=k^n\|\varphi\|_{L^p}^p+k^{n-p}\sum_i\|D_i\varphi\|_{L^p}^p\le k^n\|\varphi\|_{W^{1,p}}^p$, so the normalised functions $u_k:=\varphi_k/\|\varphi_k\|_{W^{1,p}}$ satisfy $\|u_k\|_{W^{1,p}}=1$ and $\|u_k\|_{L^q}\ge k^{n/q-n/p}\|\varphi\|_{L^q}/\|\varphi\|_{W^{1,p}}\to\infty$ because $q<p$; hence no constant $C$ can satisfy $\|u\|_{L^q}\le C\|u\|_{W^{1,p}}$ for all $u$, so the whole-space inclusion fails for $0<q<p$. For the homogeneous inequality, dividing the two scalings of step 1.1 gives $\|\varphi_k\|_{L^p}/\|D\varphi_k\|_{L^p}=k\|\varphi\|_{L^p}/\|D\varphi\|_{L^p}\to\infty$ (the denominator is positive by step 1.1); thus the homogeneous estimate $\|u\|_{L^p}\le C\|Du\|_{L^p}$ fails on $\mathbb R^n$ for the same family. The dilates remain mean-zero since $\int\varphi_k=k^n\int\varphi=0$. The exponent $q=p^{*}$ inequality is unaffected by [F3]. [F1, F3, F4, step 1.1, given, algebra]

3.1 Set inclusion fails as well. Choose $a:=\tfrac12(n/p+n/q)$, so $ap>n$ and $aq<n$. The smooth function $w(x):=(1+|x|^2)^{-a/2}$ and its classical gradient $Dw=-ax(1+|x|^2)^{-a/2-1}$ are bounded near zero. For $|x|=r\ge1$, $2^{-a/2}r^{-a}\le w(x)\le r^{-a}$ and $|Dw(x)|\le ar^{-a-1}$. Polar coordinates [F5] show $\int|w|^p<\infty$ and $\int|Dw|^p<\infty$, since $\int_1^\infty r^{n-1-ap}dr$ and $\int_1^\infty r^{n-1-(a+1)p}dr$ converge. But $\int|w|^q\ge c\int_1^\infty r^{n-1-aq}dr=\infty$. By [F5], $w\in W^{1,p}(\mathbb R^n)\setminus L^q(\mathbb R^n)$, proving the stronger set-theoretic failure. [F5, given, algebra] ∎

## Source notes

The family is the outward dilation of a fixed bump; Kinnunen's dilation discussion (printed pp. 61-66) and Laugesen's necessity discussion (printed pp. 66-68) motivate the dilation calculation; the explicit ratio above proves that even the full Sobolev norm cannot give this subcritical inclusion, and that the homogeneous zero-trace estimate fails by dilation.

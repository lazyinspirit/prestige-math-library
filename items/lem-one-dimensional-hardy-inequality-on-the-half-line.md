---
id: lem-one-dimensional-hardy-inequality-on-the-half-line
kind: lemma
title: "The Hardy inequality for the averaging operator on the half-line"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-holder-inequality-for-integrals, thm-tonelli-and-fubini-for-completed-product-measures, thm-minkowski-integral-inequality, thm-monotone-convergence-for-the-integral, def-nonnegative-lebesgue-integral, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Petru Mironescu, Fine properties of functions: an introduction (Internet Archive capture of the HAL deposit cel-00747696)"
      url: "https://web.archive.org/web/20200319104529id_/https://hal.science/cel-00747696/document"
      locator: "Chapter 11, Section 11.2, steps (11.27)-(11.28) of the proof of Theorem 25(a), printed p. 78: Hardy's inequality in the radius variable for the double integral defining the trace norm."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 5 (weighted estimates) as used in Chapter 3: the weighted Hardy operator $t^{-1}\\int_0^t f$ is bounded on $L^p(0,\\infty)$ with norm $p/(p-1)$."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Appendix A, Hardy-type inequalities used in Chapter 9: boundedness of the averaging operator on $L^p(0,\\infty)$ with constant $p/(p-1)$."
    - title: "Petru Mironescu, Fine properties of functions: an introduction (author-hosted 89-page edition)"
      url: "https://math.univ-lyon1.fr/~mironescu/resources/introduction_fine_properties_functions_2005.pdf"
      locator: "Chapter 3, Theorem 3 and its complete proof, printed pp. 13-14, with r=p-1; Chapter 12, (12.27)-(12.29), printed p. 86."
---

## Statement

Assume Countable Choice. Let $1<p<\infty$ and let $f:(0,\infty)\to[0,\infty]$ be measurable, with
$Hf(t):=t^{-1}\int_0^t f(s)\,ds$. Then
$$\Bigl(\int_0^\infty\bigl(Hf(t)\bigr)^p\,dt\Bigr)^{1/p}\le\frac{p}{p-1}\Bigl(\int_0^\infty f(s)^p\,ds\Bigr)^{1/p},$$
equivalently
$$\int_0^\infty t^{-p}\Bigl(\int_0^t f(s)\,ds\Bigr)^pdt\le\Bigl(\frac{p}{p-1}\Bigr)^p\int_0^\infty f(s)^p\,ds,$$
where both sides are extended nonnegative integrals and $+\infty$ is allowed on
either side. The constant $p/(p-1)$ is sharp: for every $c<p/(p-1)$ there is a
measurable $f$ with $\|Hf\|_{L^p}>c\|f\|_{L^p}$. If $f$ is supported in
$(0,T)$ for some $0<T<\infty$, then the same inequality holds on $(0,T)$,
$$\int_0^T t^{-p}\Bigl(\int_0^t f(s)\,ds\Bigr)^pdt\le\Bigl(\frac{p}{p-1}\Bigr)^p\int_0^T f(s)^p\,ds,$$
with the same constant.

## Facts & Assumptions

**Given:** Countable Choice; an exponent $1<p<\infty$, its conjugate $p':=p/(p-1)\in(1,\infty)$, and a measurable $f:(0,\infty)\to[0,\infty]$.

[F1] Holder's inequality: for conjugate exponents $p,p'$ and measurable real-valued $\varphi,\psi$ with $\varphi\in\mathcal L^p$ and $\psi\in\mathcal L^{p'}$, $\int|\varphi\psi|\le\|\varphi\|_p\|\psi\|_{p'}$, and the right-hand side is finite, so $\varphi\psi$ is integrable. ([[thm-holder-inequality-for-integrals]])

[F2] Assume Countable Choice. For a nonnegative measurable function on a product of sigma-finite measure spaces the iterated and double integrals agree: $\int h\,d(\overline{\mu\times\nu})=\int_X\int_Yh_x\,d\nu\,d\mu=\int_Y\int_Xh^y\,d\mu\,d\nu$, with section integrals as in the cited statement. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-countable-choice]])

[F3] Minkowski's integral inequality: for sigma-finite $(X,\mu)$, $(Y,\nu)$, $1\le r<\infty$ and measurable $F:X\times Y\to\mathbb C$ with $\int_Y\|F(\cdot,y)\|_{L^r(X)}d\nu(y)<\infty$, the function $x\mapsto\int_Y|F(x,y)|d\nu(y)$ lies in $L^r(X)$ and its $L^r$ norm is at most $\int_Y\|F(\cdot,y)\|_{L^r(X)}d\nu(y)$. ([[thm-minkowski-integral-inequality]])

[F4] Monotone convergence for the integral: if $0\le h_1\le h_2\le\cdots$ are measurable and $h_n\uparrow h$ pointwise, then $\int h_n\uparrow\int h$. ([[thm-monotone-convergence-for-the-integral]])

[F5] The integral used below is the nonnegative extended integral of a measurable function, which is defined for values in $[0,\infty]$ and may be $+\infty$; it is monotone and additive on nonnegative measurable functions. ([[def-nonnegative-lebesgue-integral]])

## Proof

**Proof technique:** truncate the datum, prove the bound for bounded compactly supported $f$ through an explicit $L^{p'}$ dual test function and Minkowski's integral inequality, pass to the limit by monotone convergence, and exhibit a family witnessing sharpness.

1.1 Reduction to bounded compactly supported $f$. For $n\ge1$ put $f_n:=\min(f,n)\cdot\mathbf 1_{(0,n)}$, a measurable function with $0\le f_n\le n$ supported in $(0,n)$, so that $f_n\uparrow f$ pointwise. Write $F(t):=\int_0^tf$ and $F_n(t):=\int_0^tf_n$; by [F4] applied to the nondecreasing measurable sequence $f_n\mathbf 1_{(0,t)}$ one has $F_n(t)\uparrow F(t)$ for every $t>0$, hence $(F_n(t)/t)^p\uparrow(F(t)/t)^p$ and $\int_0^\infty f_n^p\uparrow\int_0^\infty f^p$. Therefore it suffices to prove the inequality for every $f_n$: applying [F4] to both sides then gives $\int_0^\infty t^{-p}F(t)^pdt\le(\frac{p}{p-1})^p\int_0^\infty f^p$, the case $\int f^p=+\infty$ included. [F4, F5, algebra, given]

1.2 The bounded compactly supported case: the dual test function and finiteness. Assume now $0\le f\le M$ and $f=0$ outside $(0,T_0)$. Then $F(t)\le\min(Mt,\int_0^\infty f)$ for all $t$, so $Hf=F/t$ is finite on $(0,\infty)$ with $0\le Hf\le M$; put $\varphi(t):=(F(t)/t)^{p-1}$, a bounded nonnegative measurable function. Its $L^{p'}$ norm satisfies $\|\varphi\|_{p'}^{p'}=\int_0^\infty(F(t)/t)^pdt=:I$, and $I<+\infty$ because $I\le M^p+(1/(p-1))(\int_0^\infty f)^p$: on $(0,1)$ the bound $Hf\le M$ gives $\int_0^1(Hf)^p\le M^p$, and on $(1,\infty)$ the bound $Hf\le t^{-1}\int_0^\infty f$ gives $\int_1^\infty(Hf)^p\le(\int f)^p\int_1^\infty t^{-p}dt=(\int f)^p/(p-1)$. Thus $\varphi\in L^{p'}(0,\infty)$ and $Hf\in L^p(0,\infty)$. [F5, algebra, given]

1.3 Sharpness. For $R>1$ set $f_R(t):=t^{-1/p}\mathbf1_{(1,R)}(t)$, so $\|f_R\|_p^p=\log R$. For $1<t<R$ one has $Hf_R(t)=p't^{-1/p}(1-t^{-1/p'})$. Given $A>1$ and $R>A$, this gives $\|Hf_R\|_p^p\ge(p')^p(1-A^{-1/p'})^p\log(R/A)$. Dividing by $\log R$ and letting $R\to\infty$, then $A\to\infty$, shows that no constant smaller than $p'$ can bound $\|Hf\|_p/\|f\|_p$. Each $Hf_R$ has finite $L^p$ norm: it vanishes below $1$, and above $R$ it equals $t^{-1}\int_1^R f_R$. [F5, algebra, given]

2.1 The duality identity. With $\Phi(s):=\int_s^\infty\varphi(t)t^{-1}dt$, Tonelli's theorem [F2] applied to the nonnegative measurable function $(s,t)\mapsto f(s)\varphi(t)t^{-1}\mathbf 1_{\{s<t\}}$ on $(0,\infty)\times(0,\infty)$ gives $I=\int_0^\infty\varphi(t)(F(t)/t)\,dt=\int_0^\infty\varphi(t)t^{-1}\int_0^tf(s)\,ds\,dt=\int_0^\infty f(s)\Phi(s)\,ds$. [F2, step 1.2, algebra]

2.2 The $L^{p'}$ bound on $\Phi$. For $s>0$ substitute $t=su$, $u\in(1,\infty)$, to get $\Phi(s)=\int_1^\infty\varphi(su)u^{-1}du$. Apply Minkowski's integral inequality [F3] to $F(x,u):=\varphi(xu)u^{-1}$ on $(0,\infty)\times(1,\infty)$: the hypothesis holds because $\int_1^\infty\|\varphi(\cdot\,u)u^{-1}\|_{L^{p'}}du=\|\varphi\|_{p'}\int_1^\infty u^{-1-1/p'}du=p'\|\varphi\|_{p'}<+\infty$. The conclusion gives $\|\Phi\|_{p'}\le p'\|\varphi\|_{p'}$. [F3, step 1.2, algebra]

3.1 The bound for bounded compactly supported $f$. By steps 2.1 and 2.2 and Holder's inequality [F1], $I=\int_0^\infty f\Phi\le\|f\|_p\|\Phi\|_{p'}\le p'\|f\|_p\,I^{1/p'}$. If $I=0$ there is nothing to prove; otherwise $0<I<+\infty$ by step 1.2, so dividing by $I^{1/p'}$ gives $I^{1/p}\le p'\|f\|_p$, which is the claimed inequality for $f$. [F1, step 1.2, step 2.1, step 2.2, algebra]


4.1 The interval case. Let $f$ be supported in $(0,T)$ and extend it by zero to $(0,\infty)$; the extension has the same $L^p$ integral and its averaging function equals $t^{-1}\int_0^tf$ for $t\le T$, so $\int_0^Tt^{-p}(\int_0^tf)^pdt\le\int_0^\infty t^{-p}(\int_0^tf)^pdt\le(p')^p\int_0^\infty f^p=(p')^p\int_0^Tf^p$, the middle inequality being the general inequality obtained by combining the reduction of step 1.1 with the bounded-case bound of step 3.1. [F5, step 1.1, step 3.1, algebra]

5.1 Conclusion. Step 1.1 reduces the general measurable case to the bounded compactly supported case, which is step 3.1; step 1.3 shows the constant cannot be improved, and step 4.1 discharges the interval form. This proves both displayed inequalities, the sharpness assertion, and the statement for data supported in $(0,T)$. [step 1.1, step 3.1, step 1.3, step 4.1, given] ∎

## Source notes

Mironescu, printed p. 78, steps (11.27)-(11.28), applies Hardy's inequality in the radius variable to the same double integral; Kampanou, Chapters 3 and 5, and Teschl, Appendix A, record the boundedness of $t^{-1}\int_0^t f$ on $L^p(0,\infty)$ with norm $p/(p-1)$, which is the content proved here. The proof above is the standard weighted-dual argument; it uses only Countable Choice through the Fubini-Tonelli interface [F2].

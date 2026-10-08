---
id: lem-area-and-l2-derivative-bounds-for-quasiconformal-maps
kind: lemma
title: "Area and $L^2$ derivative bounds for quasiconformal homeomorphisms"
status: published
origin: pipeline
deps:
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-axiom-of-choice
  - def-countable-choice
  - def-homeomorphism-and-open-maps
  - def-jacobian-determinant-of-a-c-one-map
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-wirtinger-derivatives
  - lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds
  - lem-analytic-quasiconformality-implies-modulus-distortion
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-acl-characterisation-of-w-one-p
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n
  - thm-heine-borel-rn
  - thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-rational-points-and-boxes-in-rn
  - def-lebesgue-outer-measure
dependency_level: 8
proof_strategy: direct
axiom_use: >-
  Assume the Axiom of Choice, inherited through the analytic quasiconformality,
  ACL and locally finite Borel-measure differentiation interfaces. No selection
  beyond the declared interfaces is used in the local area argument.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §4, printed pp. 95–96: Lemma 4.4 (the square area lower bound) and Corollary 4.5 (the $f_z$ estimate); total differentiability is supplied by the independently proved quadrilateral-core Remark, and the full earlier area formula supplies the retained Lusin-N clause."
verification:
  audited: "2026-10-08"
  precheck: pass
aliases: []
---

## Statement

Assume the Axiom of Choice. Let $\Omega,\Omega'\subseteq\mathbb C$ be complex domains, $K\ge1$, $k=(K-1)/(K+1)$, and let $f:\Omega\to\Omega'$ be a $K$-quasiconformal homeomorphism in the analytic sense ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-homeomorphism-and-open-maps]]). Let $J_f=\det Df=|f_z|^2-|f_{\bar z}|^2\ge0$ be the Jacobian of its almost-everywhere differential ([[def-jacobian-determinant-of-a-c-one-map]], [[def-wirtinger-derivatives]]).

For every Lebesgue-measurable $E\subseteq\Omega$, with $\lambda_2^*$ denoting Lebesgue outer area,
$$\int_E J_f\,dA\ \le\ \lambda_2^*(f(E)).$$
In particular, for Borel $E$ the image $f(E)$ is Borel and this reads $\int_EJ_f\,dA\le |f(E)|$. If $\lambda_2^*(f(E))<\infty$, then $\int_EJ_f<\infty$.

Consequently, for every Lebesgue-measurable $E\subseteq\Omega$,
$$\int_E|f_z|^2\,dA\le\frac{1}{1-k^2}\lambda_2^*(f(E)).$$
For $k>0$, also
$$\int_E|f_{\bar z}|^2\,dA\le\frac{k^2}{1-k^2}\lambda_2^*(f(E)).$$
For $k=0$, $f_{\bar z}=0$ almost everywhere, so $\int_E|f_{\bar z}|^2\,dA=0$, including when the outer image area is infinite.

If additionally $f:\mathbb C\to\mathbb C$ is the restriction of a $K$-quasiconformal self-map of $\widehat{\mathbb C}$ normalized by $f(0)=0$, $f(1)=1$, $f(\infty)=\infty$, and $B\Subset\mathbb C$ is bounded and open, then
$$\int_B|Df|_{HS}^2\,dA\ \le\ \frac{2(1+k^2)}{1-k^2}|f(B)|.$$
Here $|Df|_{HS}$ is the Hilbert–Schmidt norm. No equality or multiplicity formula is asserted as an additional area-bound conclusion here.

**Lusin N.** The map sends every Lebesgue-null subset of $\Omega$ to a Lebesgue-null subset of $\Omega\prime$ ([[lem-analytic-quasiconformality-implies-modulus-distortion]]). This is supplied by the earlier full area formula, rather than inferred from the lower area inequality.

## Facts & Assumptions

**Given:** the Axiom of Choice, $K\ge1$, an analytic $K$-quasiconformal homeomorphism $f:\Omega\to\Omega'$, and $k=(K-1)/(K+1)$.

[F1] The weak Wirtinger derivatives satisfy $|f_{\bar z}|\le k|f_z|$ almost everywhere, and their classes lie in $L^2_{loc}$ ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] At points of total real differentiability, $Df(h)=f_zh+f_{\bar z}\bar h$, so $\det Df=|f_z|^2-|f_{\bar z}|^2$ and $|Df|_{HS}^2=2(|f_z|^2+|f_{\bar z}|^2)$ ([[def-wirtinger-derivatives]], [[def-jacobian-determinant-of-a-c-one-map]]).

[F3] A $W^{1,2}_{loc}$ class has an ACL representative whose classical coordinate derivatives equal its weak derivatives almost everywhere ([[thm-acl-characterisation-of-w-one-p]]). Since the given map is continuous, it agrees with that representative on almost every coordinate line, first almost everywhere on the line and then everywhere by continuity ([[def-acl-sobolev-quasiconformal-homeomorphism]]).

[F4] The quadrilateral-core auxiliary Remark proves total differentiability almost everywhere for any continuous planar homeomorphism with finite classical coordinate partials almost everywhere. By [F3] this applies to the given analytic QC map ([[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]]).

[F5] The earlier full analytic modulus-distortion wrapper includes the area formula and null-set transport for the map and its inverse. In particular it supplies the approved Lusin-N assertion; this is independent of any deduction from a lower area bound ([[lem-analytic-quasiconformality-implies-modulus-distortion]]).

[F6] A homeomorphism maps Borel subsets of its domain to Borel subsets of its target. For compact $K\subseteq\Omega$, $f(K)$ is compact and bounded, hence has finite Lebesgue measure; this applies to the closures of the rational boxes and to $\overline B$ in clause (iii) ([[def-homeomorphism-and-open-maps]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-heine-borel-rn]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F7] If $\nu$ is a finite Borel measure on $\mathbb R^2$, the density $g=d\nu_a/d\lambda_2$ of its absolutely continuous part satisfies $\nu(B(x,r))/\lambda_2(B(x,r))\to g(x)$ for almost every $x$ ([[thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n]]).

[F8] For an invertible linear map $A:\mathbb R^2\to\mathbb R^2$, $\lambda_2(A[S])=|\det A|\lambda_2(S)$ for every Lebesgue-measurable $S$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]). Its inverse has finite operator norm ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[F9] Rational open boxes form a countable basis of $\mathbb R^2$ ([[thm-rational-points-and-boxes-in-rn]]).

[F10] A Lebesgue-measurable set is a Borel set up to a subset of a Borel null set ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]).

[F11] Lebesgue outer measure is monotone and agrees with area on measurable sets ([[def-lebesgue-outer-measure]], [[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]).

[F12] Full Axiom of Choice includes Countable Choice; these are the choice assumptions of the analytic-QC, ACL, and locally finite Borel-measure differentiation interfaces ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

**Proof technique:** local linearization, image measures, and differentiation of measures.

1.1 The ACL interface [F3] gives finite classical coordinate partials almost everywhere. The general core differentiability interface [F4] therefore gives total differentiability almost everywhere. Intersecting this full-measure set with the ACL set in [F3] and the weak inequality set in [F1] gives a full-measure subset $G\subseteq\Omega$ where $f$ is totally differentiable and its classical Wirtinger derivatives agree with the weak Wirtinger classes. At every $x\in G$ the pointwise inequality gives $$J_f(x)=|f_z(x)|^2-|f_{\bar z}(x)|^2\ge(1-k^2)|f_z(x)|^2\ge0.$$ Also $J_f\in L^1_{loc}$ because $|J_f|\le|f_z|^2+|f_{\bar z}|^2$ and both weak derivatives are locally square-integrable. [F1, F2, F3, F4, F12, given]

2.1 Fix a rational box $Q\Subset\Omega$ and $x\in G\cap Q$ with $J_f(x)>0$. Set $A:=Df(x)$ and $m:=\|A^{-1}\|_{op}^{-1}>0$. Given $0<\delta<1$, differentiability gives, for all sufficiently small $r>0$, $$|f(x+h)-f(x)-Ah|<\tfrac12m\delta r\qquad(|h|\le r).$$ For $|h|=r$ and $|v|\le(1-\delta)r$, the inequality $|A(h-v)|\ge m|h-v|\ge m\delta r$ shows that $f(\partial B(x,r))$ misses the open ellipsoid $f(x)+A(B(0,(1-\delta)r))$. Since $f$ is a homeomorphism, $f(\partial B(x,r))=\partial f(B(x,r))$; the ellipsoid is connected, contains $f(x)\in f(B(x,r))$, and avoids that boundary, so it lies in $f(B(x,r))$. By [F8], $$|f(B(x,r))|\ge(1-\delta)^2J_f(x)|B(x,r)|.$$ [F2, F6, F8, step 1.1, given]

3.1 Define the finite Borel measure $\nu_Q(S):=|f(S\cap Q)|$ for Borel $S\subseteq\mathbb R^2$. Countable additivity follows from injectivity of $f$, and finiteness follows from [F6]. Let $g_Q$ be the Radon–Nikodym density of the absolutely continuous part of $\nu_Q$. For almost every $x\in Q$, [F7] gives $$\lim_{r\to0^+}\frac{|f(B(x,r))|}{|B(x,r)|}=g_Q(x),$$ where $r$ is small enough that $B(x,r)\subset Q$. At points in $G$ with $J_f(x)>0$, step 2.1 and then $\delta\downarrow0$ show that this limit is at least $J_f(x)$. At points with $J_f(x)=0$ the same inequality follows from $g_Q\ge0$. Thus $J_f\le g_Q$ almost everywhere on $Q$. Therefore, for every Borel $E\subseteq Q$, $$\int_EJ_f\,dA\le\int_Eg_Q\,dA=\nu_{Q,a}(E)\le\nu_Q(E)=|f(E)|.$$ [F6, F7, F12, step 1.1, step 2.1]

4.1 Enumerate the countable rational boxes $Q_j\Subset\Omega$ covering $\Omega$, and for a Borel $E\subseteq\Omega$ set $$E_j:=E\cap\left(Q_j\setminus\bigcup_{i<j}Q_i\right).$$ The Borel sets $E_j$ are disjoint and each lies in $Q_j$. Step 3.1 gives $\int_{E_j}J_f\le|f(E_j)|$; the sets $f(E_j)$ are pairwise disjoint Borel sets because $f$ is injective. Countable additivity yields $$\int_EJ_f\,dA=\sum_j\int_{E_j}J_f\,dA\le\sum_j|f(E_j)|=|f(E)|.$$ [F6, F9, step 3.1]

5.1 Let $E\subseteq\Omega$ be Lebesgue measurable. By [F10], write $E=F\cup N$ where $F\subseteq E$ is Borel and $N\subseteq Z$ for a Borel null set $Z$. Since $J_f\in L^1_{loc}$ and $E\setminus F$ is null, $\int_EJ_f=\int_FJ_f$ as extended nonnegative integrals. Step 4.1 and [F11] now give $$\int_EJ_f\,dA\le|f(F)|\le\lambda_2^*(f(E)).$$ In particular the image-area expression is ordinary Lebesgue measure whenever $f(E)$ is measurable, and finite outer image area implies $\int_EJ_f<\infty$. [F10, F11, step 4.1]

6.1 By step 1.1, $(1-k^2)|f_z|^2\le J_f$ almost everywhere, so integration and step 5.1 give the $f_z$ bound. If $k>0$, the inequality $|f_{\bar z}|^2\le k^2|f_z|^2\le\frac{k^2}{1-k^2}J_f$ gives the other bound by integration. If $k=0$, [F1] gives $f_{\bar z}=0$ almost everywhere and hence its squared integral is zero for every $E$, without multiplying infinite image area by zero. [F1, step 1.1, step 5.1, cases]

7.1 The identity in [F2] and the pointwise estimates of step 6.1 give $$|Df|_{HS}^2=2(|f_z|^2+|f_{\bar z}|^2)\le\frac{2(1+k^2)}{1-k^2}J_f.$$ For the normalized sphere map and bounded $B$, [F6] makes $f(B)$ measurable and finite-area; integrating this inequality and using step 5.1 proves the normalized-family bound with the displayed factor. For a Lebesgue-null set, choose a Borel null superset and apply [F5] to that superset; its image is Borel and null, so every subset is Lebesgue-null by completeness [F10]. This proves the retained Lusin-N assertion separately. The area and derivative estimates above prove all remaining claims of the Statement. [F2, F5, F6, F10, step 5.1, step 6.1, given] ∎

## Supplier reconciliation

The original lower-area argument cannot prove Lusin N. That approved clause is retained and proved in step7.1 from the earlier full area formula and Borel completion, while differentiability comes directly from the quadrilateral core. Neither step uses general metric quasiconformal regularity. Current structural checks and root mathematical certification remain separate.

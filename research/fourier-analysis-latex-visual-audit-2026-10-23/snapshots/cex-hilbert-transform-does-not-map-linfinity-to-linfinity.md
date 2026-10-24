---
id: cex-hilbert-transform-does-not-map-linfinity-to-linfinity
kind: counterexample
title: "Hilbert transform does not map L-infinity to L-infinity"
status: published
origin: pipeline
deps: [ex-hilbert-transform-of-an-interval-indicator, cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, prop-mollifier-families-are-l-one-approximate-identities, thm-l-one-approximate-identities-converge-in-l-p, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-schwartz-space-and-its-seminorms, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-finite-and-countable-subadditivity-of-measures, thm-natural-logarithm-laws, cor-exponential-is-a-bijection-onto-positive-reals, thm-lebesgue-measure-of-a-box-of-every-kind, def-operator-norm, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.1, Example 5.1.3, printed pp. 315-316; Section 5.1.3, Remark 5.1.9, p. 322"
---

## Statement refuted

The claim that the Schwartz-core Hilbert transform extends to a bounded
$\mathbb C$-linear operator $T:L^\infty(\mathbb R;\mathbb C)\to L^\infty(\mathbb R;\mathbb C)$
agreeing with the $L^2$ transform on the intersection
$L^\infty(\mathbb R)\cap L^2(\mathbb R)$ is false. The bounded interval
indicator lies in that intersection, but its $L^2$ transform
$q(x)=\frac1\pi\log\frac{|x|}{|x-1|}$ is essentially unbounded near $0$ and
$1$; a bounded action would have to keep the approximating transforms
essentially bounded, and an almost-everywhere subsequence would then force $q$
itself to be essentially bounded.

This refutes a bounded $L^\infty$ action only. No $BMO$-valued endpoint
estimate is refuted or asserted here.

## Facts & Assumptions

**Given:** Countable Choice, the indicator $f=\mathbf 1_{(0,1)}$, the function $q(x)=\frac1\pi\log\frac{|x|}{|x-1|}$ for $x\notin\{0,1\}$, and the $L^p$ conventions of [[def-complex-lp-and-euclidean-test-function-conventions]].

[F1] The symmetric principal value of the indicator exists at every $x\notin\{0,1\}$ and equals $q(x)$, and $q=Hf$ in $L^2(\mathbb R;\mathbb C)$ for the $L^2$ Hilbert transform; in particular $q(x)=\frac1\pi\log\frac{x}{1-x}$ for $x\in(0,1)$. [[ex-hilbert-transform-of-an-interval-indicator]]

[F2] $H$ is complex-linear on $L^2(\mathbb R;\mathbb C)$ and satisfies $\|Hg\|_2=\|g\|_2$. [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]

[F3] $\log:(0,\infty)\to\mathbb R$ is continuous, strictly increasing and onto, $\log 1=0$, and $\exp:\mathbb R\to(0,\infty)$ is its inverse; hence for real $M$ and $y>0$, $\log y>M$ holds exactly when $y>e^{M}$. [[thm-natural-logarithm-laws]] [[cor-exponential-is-a-bijection-onto-positive-reals]]

[F4] For $a<b$ the interval $(a,b)$ is Lebesgue measurable with $\lambda_1((a,b))=b-a$. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F5] There is $\chi\in C_c^\infty(\mathbb R)$ with $0\le\chi\le1$, $\chi=1$ on $[-1,1]$ and $\chi=0$ off $(-2,2)$; $\varphi:=\chi/\int\chi$ is a nonnegative $C_c^\infty$ function of integral one; for $g\in L^1(\mathbb R)$, $g*\varphi_\varepsilon$ is smooth with support in $\overline{\operatorname{supp}g+\operatorname{supp}\varphi_\varepsilon}$; $\|g*\varphi_\varepsilon-g\|_2\to0$ for $g\in L^2(\mathbb R)$; and $C_c^\infty(\mathbb R)\subseteq\mathcal S(\mathbb R)$. [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]] [[prop-mollifier-families-are-l-one-approximate-identities]] [[thm-l-one-approximate-identities-converge-in-l-p]] [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]] [[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]] [[def-schwartz-space-and-its-seminorms]]

[F6] Every norm-convergent sequence in $L^2$ has a subsequence of measurable representatives converging almost everywhere to a representative of the limit, and countable unions of Lebesgue-null sets are Lebesgue null. [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]] [[thm-finite-and-countable-subadditivity-of-measures]]

[F7] For a bounded linear $T$ on a normed space, $\|Tg\|\le\|T\|\,\|g\|$; in particular $\|Tg\|_\infty\le\|T\|\,\|g\|_\infty$. [[def-operator-norm]]

## Counterexample

**Proof technique:** direct.

1.1 The indicator $f$ is measurable with $0\le f\le1$, so $\|f\|_\infty\le1$, and $\int_{\mathbb R}|f|^2=\lambda_1((0,1))=1$ by [F4]; hence $f\in L^\infty(\mathbb R)\cap L^2(\mathbb R)$. [F1, F4, given, algebra]

1.2 $q$ is not essentially bounded. Indeed, fix $M>0$; by [F1] and [F3], for $x\in(0,1)$ one has $q(x)>M$ exactly when $\log\frac{x}{1-x}>\pi M$, i.e. $\frac{x}{1-x}>e^{\pi M}$, i.e. $x>\frac{1}{1+e^{-\pi M}}$. Hence the set $E_M:=\{x\in(0,1):q(x)>M\}$ is the interval $\left(\frac{1}{1+e^{-\pi M}},1\right)$, which by [F4] has measure $\frac{e^{-\pi M}}{1+e^{-\pi M}}>0$. Since $M$ was arbitrary, no real number bounds $q$ from above almost everywhere, so $q\notin L^\infty(\mathbb R)$. [F1, F3, F4, algebra]

2.1 Let $\varphi$ be the unit-mass bump of [F5] and for $j\in\mathbb N$ put $f_j:=f*\varphi_{1/(j+1)}$. Then $f_j$ is smooth with support in $[-2/(j+1),1+2/(j+1)]$, hence $f_j\in C_c^\infty(\mathbb R)\subseteq\mathcal S(\mathbb R)$; and $0\le f_j\le1$ because $0\le f\le1$ and $\varphi_{1/(j+1)}\ge0$ has integral one. By [F5], $\|f_j-f\|_2\to0$. [F5, step 1.1, algebra]

3.1 $\|Hf_j-q\|_2\to0$: by [F1] $q=Hf$ and by [F2] $H$ is a linear isometry, so $\|Hf_j-q\|_2=\|f_j-f\|_2\to0$ by step 2.1. [F1, F2, step 2.1, algebra]

3.2 Suppose, for contradiction, that $T:L^\infty(\mathbb R;\mathbb C)\to L^\infty(\mathbb R;\mathbb C)$ is bounded and linear with $Tg=Hg$ almost everywhere for every $g\in L^\infty(\mathbb R)\cap L^2(\mathbb R)$. Each $f_j$ of step 2.1 lies in this intersection, so $Tf_j=Hf_j$ almost everywhere; by [F7] and $\|f_j\|_\infty\le1$, $\|Hf_j\|_\infty=\|Tf_j\|_\infty\le\|T\|\,\|f_j\|_\infty\le\|T\|$. [F7, step 2.1]

4.1 By step 3.1 and [F6] there is a subsequence $(Hf_{j_k})_k$ converging almost everywhere to $q$. The sets where $Tf_{j_k}\ne Hf_{j_k}$ are null, the sets where $|Hf_{j_k}|>\|T\|$ are null by step 3.2, and the set where the subsequence fails to converge to $q$ is null; their countable union is null by [F6]. Off that union one has $|Hf_{j_k}|\le\|T\|$ for every $k$ by step 3.2 and $Hf_{j_k}\to q$, so $|q|\le\|T\|$ almost everywhere. Hence $q\in L^\infty(\mathbb R)$ with $\|q\|_\infty\le\|T\|$. [step 3.1, step 3.2, F6]

5.1 Step 4.1 contradicts step 1.2, so no such bounded linear operator $T$ exists. The compatibility required of $T$ was only on $L^\infty\cap L^2$, hence also holds for every Schwartz function; therefore no bounded $L^\infty$ action agreeing with the $L^2$ Hilbert transform on the intersection exists. A $BMO$-valued endpoint is a different assertion and is not addressed. [step 1.2, step 4.1] ∎

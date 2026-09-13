---
id: thm-polynomial-growth-functions-define-tempered-distributions
kind: theorem
title: Polynomial growth functions define tempered distributions
status: draft
origin: pipeline
deps: [thm-finite-seminorm-bound-characterizes-tempered-distributions, def-regular-distribution-from-a-locally-integrable-function, def-locally-integrable-function-on-r-n, thm-holder-inequality-for-integrals, def-complex-lp-and-euclidean-test-function-conventions, thm-p-series-real-exponents]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.2.1, polynomial-growth examples following Remark 11.21, p. 126"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "§8.4, examples following Theorem 8.4.1, p. 128"
proof_strategy: direct
---

## Statement

Let $f:\mathbb R^n\to\mathbb C$ be locally integrable.  If, for some integer
$N\geq0$,

$$\int_{\mathbb R^n}|f(x)|(1+|x|)^{-N}\,dx<\infty,$$

then the regular functional $u_f(\varphi)=\int f\varphi$ is a tempered
distribution.  Consequently this holds if $f$ has pointwise polynomial growth
outside a compact set, and every class in complex $L^p(\mathbb R^n)$,
$1\leq p\leq\infty$, has a representative defining a tempered distribution.
These are sufficient conditions; pointwise polynomial growth is not asserted
to characterize all regular tempered distributions.

## Facts & Assumptions

**Given:** A locally integrable complex function $f$ on $\mathbb R^n$.

[F1] A regular functional is defined by bilinear integration
([[def-regular-distribution-from-a-locally-integrable-function]],
[[def-locally-integrable-function-on-r-n]]).

[F2] One finite rectangular Schwartz-seminorm estimate characterizes tempered
functionals ([[thm-finite-seminorm-bound-characterizes-tempered-distributions]]).

[F3] Hölder's inequality, including the $L^1$ and $L^\infty$ endpoints, applies
to the real nonnegative functions $|f|$ and a weight
([[thm-holder-inequality-for-integrals]]).

[F4] Complex $L^p$ classes, their moduli, and their locally integrable
representatives use the conventions of
[[def-complex-lp-and-euclidean-test-function-conventions]].

[F5] A real $p$-series converges when its exponent exceeds one
([[thm-p-series-real-exponents]]).

## Proof

**Proof technique:** weighted integral estimate.

1.1 For each integer $N\geq0$, expansion of $(1+|x_1|+\cdots+|x_n|)^N$ gives a finite constant $A_{n,N}$ for which the following estimate holds. [algebra]

$$(1+|x|)^N|\varphi(x)| \leq A_{n,N}\max_{|\alpha|\leq N}p_{\alpha,0}(\varphi).$$

Thus the weighted hypothesis implies
$|u_f(\varphi)|\leq A_{n,N}\bigl(\int|f|(1+|x|)^{-N}\bigr)
\max_{|\alpha|\leq N}p_{\alpha,0}(\varphi)$. [F1, algebra]

2.1 The estimate in step 1.1 makes the integral absolutely convergent for every Schwartz test and proves that $u_f$ is tempered.  It also shows directly that changing $f$ on a null set changes no pairing. [F1, F2, step 1.1]

3.1 The integer shells $m\leq|x|<m+1$ have measure at most $(2m+2)^n$. Hence $\int(1+|x|)^{-s}dx<\infty$ whenever $s>n+1$, by comparison with $\sum_{m\geq1}m^{n-s}$.  If $|f(x)|\leq C(1+|x|)^d$ off a compact set, choose an integer $N>d+n+1$.  Local integrability handles the compact part, and the shell estimate handles its complement, so step 2.1 applies. [F5, step 2.1]

4.1 If $f\in L^1$, take $N=0$.  If $1<p<\infty$ and $q$ is conjugate to $p$, choose $N$ with $Nq>n+1$; Hölder gives $\int|f|(1+|x|)^{-N}\leq\lVert f\rVert_p \lVert(1+|\cdot|)^{-N}\rVert_q<\infty$.  If $p=\infty$, choose $N>n+1$ and use any finite essential bound for $|f|$.  The same estimates on bounded balls give local integrability of the chosen representatives. [F3, F4, step 3.1]

5.1 For $n\geq1$, as a boundary calculation, define $f_r(x)=|x|^r$ for $x\ne0$ and assign any finite value, say $f_r(0)=0$, when $r<0$; set $f_0\equiv1$, and for $r>0$ use the usual value $f_r(0)=0$. The value at this measure-zero point has no effect on local integrability or the induced distribution. The function $f_r$ is locally integrable at the origin exactly when $r>-n$: for $r<0$, the dyadic annuli $2^{-j-1}\leq|x|<2^{-j}$ give a series comparable to $\sum_j2^{-j(n+r)}$; for $r\geq0$ there is no singularity, while the reverse bound on a fixed cone gives divergence when $r\leq-n$. At infinity it has polynomial growth. Therefore $f_r$ is among the tempered regular examples precisely for the locally meaningful range $r>-n$. [F1, step 2.1, step 3.1] ∎

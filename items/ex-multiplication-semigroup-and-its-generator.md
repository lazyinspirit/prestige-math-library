---
id: ex-multiplication-semigroup-and-its-generator
kind: example
title: "A multiplication semigroup with an unbounded generator"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - thm-complex-lp-completeness-and-almost-everywhere-subsequences
  - thm-riesz-fischer-completeness-of-l-p
  - def-strongly-continuous-semigroup
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-dominated-convergence
  - thm-locally-integrable-functions-embed-in-distributions
  - def-countable-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter I Section 4.b, multiplication semigroups on $L^p$, printed pp. 30-33"
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 2, multiplication examples and their generators, printed pp. 65-67"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3-11.4, multiplication-type examples, printed pp. 256-266"
verification:
  precheck: pass
---

## Example

Assume Countable Choice. Let $1\le p<\infty$, $X=L^p(0,\infty)$ and $q(s):=-s$. For $t\ge0$ define $(T(t)f)(s):=e^{tq(s)}f(s)=e^{-ts}f(s)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]). Then $(T(t))_{t\ge0}$ is a strongly continuous semigroup of contractions on $X$, and its generator is the multiplication operator $$Af=qf,\qquad D(A)=\{f\in L^p(0,\infty):\ qf\in L^p(0,\infty)\}=\{f:\ sf\in L^p(0,\infty)\},$$ which is unbounded: $D(A)\ne X$.

## Verification

**Given:** Countable Choice; $1\le p<\infty$; $X=L^p(0,\infty)$; $q(s)=-s$; $(T(t)f)(s)=e^{-ts}f(s)$ for $t\ge0$.

[F1] $X=L^p(0,\infty)$ is Banach under Countable Choice by [[thm-riesz-fischer-completeness-of-l-p]] for real classes and [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]] for complex classes; the classes are those of [[def-l-p-space-as-a-quotient-by-null-functions]]; the Bochner/absolute-continuity framework used below is set up under Countable Choice ([[def-countable-choice]]).

[F2] Dominated convergence for the Lebesgue integral, including its use to compute $L^p$ limits of scalar functions from pointwise convergence and a dominating $L^p$ function ([[thm-dominated-convergence]]).

[F3] The embedding of $L^1_{\mathrm{loc}}(0,\infty)$ into distributions is injective on almost-everywhere classes: a locally integrable function pairing to zero against every test function in $C_c^\infty(0,\infty)$ vanishes almost everywhere ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F4] The generator is defined by one-sided difference quotients, and unboundedness means that no finite constant bounds $\|Af\|$ by $\|f\|$ on $D(A)$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]], [[def-strongly-continuous-semigroup]]).


**Proof technique:** direct: pointwise computation for the semigroup and its difference quotients, dominated convergence for both inclusions of the generator domain, and a bump-function family for unboundedness.

1.1 For every $t\ge0$ the map $T(t)$ is linear and $\|T(t)f\|_p^p=\int_0^\infty e^{-tps}|f(s)|^p\,ds\le\|f\|_p^p$, so $T(t)$ is a contraction; the pointwise identities $e^{-(t+r)s}=e^{-ts}e^{-rs}$ and $e^{0}=1$ give $T(t+r)=T(t)T(r)$ and $T(0)=I$. [F1, algebra]

2.1 Strong continuity: for fixed $f\in X$, $\|T(t)f-f\|_p^p=\int_0^\infty|e^{-ts}-1|^p|f(s)|^p\,ds\to0$ as $t\downarrow0$ by [F2], since $e^{-ts}\to1$ pointwise and $|e^{-ts}-1|^p\le2^p$ for $t\ge0$, so the integrand is dominated by the $L^1$ function $2^p|f|^p$. [F2, step 1.1]

3.1 Inclusion $\{qf\in X\}\subseteq D(A)$: if $qf\in X$, then $\bigl\|\frac{T(h)f-f}{h}-qf\bigr\|_p^p=\int_0^\infty\bigl|\frac{e^{-hs}-1}{h}+s\bigr|^p|f(s)|^p\,ds\to0$ by [F2], because $\frac{e^{-hs}-1}{h}\to-s$ pointwise and, by the inequality $1-e^{-x}\le x$ for $x\ge0$, the bracket is at most $2s$, so the integrand is dominated by $(2s|f|)^p\in L^1$. [F2, F4, step 2.1]

4.1 Converse: suppose the difference quotients converge in $X$ to some $g$, and let $\varphi\in C_c^\infty(0,\infty)$. By [F2] and the boundedness of $s$ on $\operatorname{supp}\varphi$, $\int_0^\infty\frac{e^{-hs}-1}{h}f\varphi\,ds\to-\int_0^\infty sf\varphi\,ds$, while $\int_0^\infty\frac{T(h)f-f}{h}\varphi\,ds\to\int_0^\infty g\varphi\,ds$ because $\|\frac{T(h)f-f}{h}-g\|_p\to0$ and $\varphi\in L^{p'}$; hence $\int_0^\infty(g-qf)\varphi\,ds=0$ for every test function. The locally integrable function $g-qf$ has $sf\in L^1_{\mathrm{loc}}(0,\infty)$, so [F3] gives $g=qf$ almost everywhere; in particular $qf=g\in X$ and $f\in D(A)$ with $Af=qf$. [F2, F3, step 3.1]

5.1 Unboundedness and proper domain: for $n\ge1$ let $f_n$ be the normalised nonnegative bump supported in $[n,n+1]$ with $\|f_n\|_p=1$. Then $\|Af_n\|_p^p=\int_n^{n+1}s^p|f_n(s)|^p\,ds\ge n^p$, so $\|Af_n\|_p\ge n\to\infty$ while $\|f_n\|_p=1$, and no constant bounds $A$ on its domain. Moreover $D(A)\ne X$: the function $f(s):=s^{-1-1/p}\mathbf 1_{(1,\infty)}$ lies in $L^p(0,\infty)$ because $\int_1^\infty s^{-p-1}ds=1/p$, while $sf(s)=s^{-1/p}$ is not in $L^p$ because $\int_1^\infty s^{-1}ds=\infty$, so $f\in X\setminus D(A)$. [F4, step 4.1]

6.1 Together with [step 1.1] and [step 2.1], the displayed claims follow: $T$ is a strongly continuous contraction semigroup on $L^p(0,\infty)$ whose generator has domain $\{f:qf\in X\}=\{f:sf\in L^p\}$ and acts by $Af=qf=-sf$, and this operator is unbounded. [step 1.1, step 2.1, step 4.1, step 5.1] ∎

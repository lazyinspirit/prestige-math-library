---
id: def-maximal-truncated-singular-integral
kind: definition
title: "Maximal truncated singular integrals"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, def-countable-choice, thm-polar-coordinates-formula-for-lebesgue-measure, thm-dominated-convergence]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-5.md"
      - "research/frontier-38-owner-30-alpha-batch-5-5a.md"
      - "research/frontier-38-owner-30-step5-hash-5-post-5a.json"
    content_sha256: "019947e47971088a9ce47cfc137958b925e8f550c0190ce4594b5f63d538031b"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.3.4, definitions (5.3.15)–(5.3.18), printed pp. 362–364"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "§3.8, definitions preceding Theorem 3.8, printed p. 11"
---

## Definition

Assume Countable Choice ([[def-countable-choice]]).

Fix an integer $n\ge1$ and let $k:\mathbb R^n\setminus\{0\}\to\mathbb C$ be a
measurable function that is integrable on compact subsets of
$\mathbb R^n\setminus\{0\}$ and satisfies the pointwise **size bound**
$$|k(x)|\le A_1|x|^{-n}\qquad(x\ne0) \qquad (1)$$
for some finite constant $0\le A_1<\infty$. With the complex $L^p$ conventions of
[[def-complex-lp-and-euclidean-test-function-conventions]], fix $1\le p<\infty$
and $f\in L^p(\mathbb R^n)$.

For $0<\varepsilon<\infty$ define the **truncated singular integral**
$$T_\varepsilon f(x):=\int_{|y|>\varepsilon}k(y)f(x-y)\,dy, \qquad x\in\mathbb R^n,$$
and for $0<\varepsilon<N<\infty$ define the **doubly truncated singular integral**
$$T^{(\varepsilon,N)}f(x):=\int_{\varepsilon<|y|<N}k(y)f(x-y)\,dy, \qquad x\in\mathbb R^n.$$
Both integrals converge absolutely for every $x$. Indeed, the truncated kernel
$k_\varepsilon:=k\mathbf 1_{\{|\cdot|>\varepsilon\}}$ satisfies
$$\|k_\varepsilon\|_{p'}^{p'}=\int_{|y|>\varepsilon}|k(y)|^{p'}\,dy\le A_1^{p'}\int_{|y|>\varepsilon}|y|^{-np'}\,dy=A_1^{p'}\,|S^{n-1}|\,\frac{\varepsilon^{n-np'}}{np'-n}<\infty$$
by [[thm-polar-coordinates-formula-for-lebesgue-measure]] for $1<p<\infty$ (the case $p=1$, $p'=\infty$, uses
$\|k_\varepsilon\|_\infty\le A_1\varepsilon^{-n}$), and likewise
$\|k\mathbf 1_{\{\varepsilon<|\cdot|<N\}}\|_{p'}<\infty$; Hölder's inequality
([[thm-complex-holder-minkowski-and-the-quotient-norm]]) therefore gives
$|T_\varepsilon f(x)|\le\|f\|_p\|k_\varepsilon\|_{p'}<\infty$ and
$|T^{(\varepsilon,N)}f(x)|\le\|f\|_p\|k\mathbf 1_{\{\varepsilon<|\cdot|<N\}}\|_{p'}<\infty$
at every $x$. The **maximal truncated singular integral** and the **doubly
truncated maximal singular integral** are
$$T^*f(x):=\sup_{\varepsilon>0}|T_\varepsilon f(x)|, \qquad T^{**}f(x):=\sup_{0<\varepsilon<N<\infty}|T^{(\varepsilon,N)}f(x)|,$$
with values in $[0,\infty]$.

Under the size bound (1) the two maximal operators are pointwise comparable:
$$T^*f\le T^{**}f\le 2T^*f \qquad\text{pointwise on }\mathbb R^n. \qquad (2)$$
For the left inequality, fix $\varepsilon>0$ and $x$: dominated convergence ([[thm-dominated-convergence]]) applied
to the absolutely convergent integral defining $T_\varepsilon f(x)$ gives
$T_\varepsilon f(x)=\lim_{N\to\infty}T^{(\varepsilon,N)}f(x)$, so
$|T_\varepsilon f(x)|\le T^{**}f(x)$; take the supremum in $\varepsilon$. For the
right inequality, split the defining integral of $T^{(\varepsilon,N)}$ at $N$ to
get $T^{(\varepsilon,N)}f(x)=T_\varepsilon f(x)-T_Nf(x)$ and hence
$|T^{(\varepsilon,N)}f(x)|\le|T_\varepsilon f(x)|+|T_Nf(x)|\le2T^*f(x)$; take the
supremum in $\varepsilon<N$. Thus $T^*$ and $T^{**}$ have the same finiteness
set and the same boundedness properties. The definition itself asserts neither an
upper truncation for $T^*$ nor the existence of a principal-value limit
$\lim_{\varepsilon\downarrow0}T_\varepsilon f(x)$; the doubly truncated form is
the primitive object, because it is defined from the kernel alone. Here the
pointwise size bound (1) is a stronger hypothesis than the annular size condition
of the Calderón–Zygmund kernel definition: (1) implies
$\int_{R\le|x|\le2R}|k|\le A_1|S^{n-1}|\log2$, while the annular condition does
not by itself prevent pointwise spikes. Countable Choice is inherited from the polar-coordinate evaluation; the truncations themselves require no selection.

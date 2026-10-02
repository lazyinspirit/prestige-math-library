---
id: def-truncated-hilbert-transform-and-principal-value
kind: definition
title: Truncated Hilbert transform and principal value
status: published
origin: pipeline
deps: [def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.1, Definition 5.1.1 and Remark 5.1.2, printed pp. 314-315"
---

## Definition

Fix $1\le p<\infty$ and a function $f\in L^p(\mathbb R)$, with the $L^p$
conventions of [[def-complex-lp-and-euclidean-test-function-conventions]].
For $\varepsilon>0$ and $x\in\mathbb R$ define the **truncated Hilbert
transform**

$$H_\varepsilon f(x):=\frac1\pi\int_{|x-y|>\varepsilon}\frac{f(y)}{x-y}\,dy=\frac1\pi\int_{|t|>\varepsilon}\frac{f(x-t)}{t}\,dt .$$

Each truncation is an ordinary Lebesgue integral over the complement of an
interval of length $2\varepsilon$ around $x$, and it is absolutely convergent.
For $p=1$ this follows from the pointwise bound $|1/(x-y)|<\varepsilon^{-1}$ on
the domain of integration; for $1<p<\infty$ it follows from Hölder's inequality
applied to the two half-lines $x-y>\varepsilon$ and $x-y<-\varepsilon$, where
$|x-y|^{-1}$ has finite $L^q$ norm, with $q$ conjugate to $p$
([[thm-complex-holder-minkowski-and-the-quotient-norm]]). Changing $f$ on a
null set changes no integral, so $H_\varepsilon f(x)$ is a well-defined number
attached to the class of $f$; and $H_\varepsilon f$ is itself a measurable
function of $x$.

The **Hilbert transform in the principal-value sense** is defined only where
the truncations converge:

$$H_{\mathrm{pv}}f(x):=\lim_{\varepsilon\downarrow0}H_\varepsilon f(x),$$

whenever this limit exists in $\mathbb C$. No almost-everywhere existence of
this limit, and no bound of $H_{\mathrm{pv}}f$ in any $L^p$ norm, is asserted by
this definition. The definition also does not extend $H_\varepsilon$ to $L^\infty$:
for the tail $|x-y|>\varepsilon$ the bound $\|f\|_\infty/\varepsilon$ is finite
but the integral over an unbounded domain is not controlled, so the truncation
of a merely bounded $f$ need not converge absolutely at any $x$.

Three distinctions are recorded here for later use. First, $H_\varepsilon f$ is
an integral of a truncated singular kernel, while the pairing of a test
function with the principal-value distribution of $1/(\pi x)$ is a separate
object; the two agree only under the convergence just defined. Second, the limit is taken symmetrically in
$\varepsilon$ about the singularity $y=x$, and unsymmetric truncations are a
different object. Third, $H_{\mathrm{pv}}f$ is a pointwise partial function,
whereas the $L^2(\mathbb R)$ extension constructed later on this page is a
single bounded operator agreeing with $H_{\mathrm{pv}}$ where the latter exists
on a dense class.

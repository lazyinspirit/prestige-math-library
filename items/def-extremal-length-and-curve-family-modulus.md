---
id: def-extremal-length-and-curve-family-modulus
kind: definition
title: Extremal length and the curve-family modulus of a path family
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 0
deps: [def-complex-domain, def-borel-sigma-algebra, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, def-extended-real-valued-measurable-function, def-nonnegative-lebesgue-integral, thm-lebesgue-measure-is-a-radon-measure-on-rn, thm-lebesgue-measure-of-a-box-of-every-kind, def-arc-length-function, lem-arc-length-function-is-continuous-and-nondecreasing, thm-rectifiable-iff-coordinate-functions-have-bounded-variation, def-absolute-line-integral-over-a-rectifiable-path, thm-existence-of-complex-line-integrals-on-rectifiable-paths, thm-existence-of-the-lebesgue-stieltjes-measure, thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral, rem-complex-contours-as-planar-rectifiable-paths, def-countable-choice]
justified_by: [lem-rho-length-and-extremal-length-are-well-defined]
axiom_use: Countable Choice is inherited through the Lebesgue-measure and Lebesgue-Stieltjes-measure existence interfaces used here; the displayed supremum and definition make no selection.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 1 §1, printed pp. 1–3: modulus as the infimum of area over admissible Borel metrics and extremal length as its reciprocal."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §6.1, printed pp. 119–120: the scaling-invariant supremum of squared shortest metric length divided by area, and extremal width as its reciprocal."
    - title: "Lars Ahlfors and Arne Beurling, Conformal invariants and function-theoretic null-sets, Acta Mathematica 83 (1950), 101–129"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5710-11511_2006_Article_BF02392634.pdf"
      locator: "§4, printed pp. 114–115: extremal length of a family of rectifiable curves and the rectangle and separating-family computations."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 1 §1, printed pp. 1–3. Bishop defines admissibility by $\ell_\rho(\Gamma)\ge1$, modulus by the infimum of $\int\rho^2$, and extremal length as the reciprocal modulus; he also states that the density may be taken Borel.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 1 §6.1, printed pp. 119–120. Lyubich defines $L_\rho(\Gamma)=\ell_\rho(\Gamma)^2/m_\rho(U)$ and takes its supremum over finite-mass metrics; the reciprocal is extremal width and is also the infimum over metrics whose length on every curve is at least $1$.
- Lars Ahlfors and Arne Beurling, *Conformal Invariants and Function-Theoretic Null-Sets*, §4, printed pp. 114–115. Their supremum convention for extremal length agrees with $\lambda$ below. Their Lemmas 4–5 give the rectangle and round-annulus constants after the curve family is specified.

## Definition

Assume Countable Choice ([[def-countable-choice]]). Fix a complex domain $\Omega\subseteq\mathbb C$ ([[def-complex-domain]]), read as an open subset of the Euclidean plane, with its Borel $\sigma$-algebra ([[def-borel-sigma-algebra]]) and planar Lebesgue area measure ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]]).

A **path** in $\Omega$ is a continuous map $\gamma:[a,b]\to\Omega$. It is **rectifiable** when its two coordinate functions have bounded variation ([[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]]), and $s_\gamma$ denotes its arc-length function ([[def-arc-length-function]]). A **path family** $\Gamma$ is a set of paths. When curves joining specified boundary sets of $\Omega$ are used, allow paths $\gamma:[a,b]\to\overline\Omega$ with $\gamma((a,b))\subseteq\Omega$ and endpoints in the named sets; read complex paths as planar rectifiable paths ([[rem-complex-contours-as-planar-rectifiable-paths]]). Only the interior contributes to length, since each density below is extended by $0$ outside $\Omega$.

Let $\rho:\Omega\to[0,+\infty]$ be Borel measurable with respect to the Borel $\sigma$-algebra of $\Omega$ ([[def-extended-real-valued-measurable-function]]). Extending it by $0$ on $\mathbb C\setminus\Omega$ gives a Borel function on the plane by the trace identity for subspaces ([[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]). For a rectifiable path $\gamma:[a,b]\to\overline\Omega$, its arc-length function is continuous and nondecreasing ([[lem-arc-length-function-is-continuous-and-nondecreasing]]). Extend $s_\gamma$ to a continuous nondecreasing function $S_\gamma:\mathbb R\to\mathbb R$ by $S_\gamma(t)=0$ for $t\le a$, $S_\gamma(t)=s_\gamma(t)$ for $a\le t\le b$, and $S_\gamma(t)=s_\gamma(b)$ for $t\ge b$. Countable Choice gives the associated Lebesgue-Stieltjes Borel measure $dS_\gamma$ ([[def-countable-choice]], [[thm-existence-of-the-lebesgue-stieltjes-measure]]). Define the **$\rho$-length** by
$$\ell_\rho(\gamma):=\int_{[a,b]}\rho(\gamma(t))\,dS_\gamma(t),$$
using the nonnegative Lebesgue integral ([[def-nonnegative-lebesgue-integral]]). This value lies in $[0,+\infty]$; set $\ell_\rho(\gamma)=+\infty$ when $\gamma$ is not rectifiable. For finite-valued continuous $\rho$ and a rectifiable path whose full trace lies in $\Omega$, this agrees with the published absolute line integral $\int_\gamma\rho\,|dz|$ ([[def-absolute-line-integral-over-a-rectifiable-path]], [[thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral]], [[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]). Continuity only on $\Omega$ does not assert that the zero extension is continuous at boundary endpoints. The continuity of $S_\gamma$ makes $dS_\gamma$ atomless, so changing the integrand on finitely many parameter values does not change the length.

For a path family put $\ell_\rho(\Gamma):=\inf_{\gamma\in\Gamma}\ell_\rho(\gamma)$, with $\inf\varnothing:=+\infty$, and define its **area** by
$$A(\rho):=\int_\Omega\rho^2\,dA\in[0,+\infty].$$

The **extremal length** of $\Gamma$ is
$$\lambda(\Gamma):=\sup_{\rho}\frac{\ell_\rho(\Gamma)^2}{A(\rho)}\in[0,+\infty],$$
where the supremum is over Borel $\rho:\Omega\to[0,+\infty]$ with $0<A(\rho)<+\infty$. A supremum of an empty set is $0$; since $\Omega$ is a nonempty open domain, it contains a nondegenerate rectangle $Q$, and its indicator has positive finite area ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). The value $\ell_\rho(\Gamma)=+\infty$ is allowed. The **curve-family modulus** is the reciprocal
$$\mu(\Gamma):=\frac1{\lambda(\Gamma)}\in[0,+\infty],$$
with $1/0:=+\infty$ and $1/+\infty:=0$. Thus $\lambda(\varnothing)=+\infty$ and $\mu(\varnothing)=0$, while any family containing a constant path has $\lambda(\Gamma)=0$ and $\mu(\Gamma)=+\infty$.

**Conventions.** (1) This library defines extremal length by the displayed supremum and calls its reciprocal the modulus. Sources that define modulus by $\inf_\rho\int\rho^2$ over metrics with $\ell_\rho(\Gamma)\ge1$ call $\mu(\Gamma)$ the modulus and $\lambda(\Gamma)$ the extremal length. (2) Extending $\rho$ by zero outside $\Omega$ makes densities supported in $\Omega$ admissible and makes the value independent of an ambient enlargement; parameterization invariance, this ambient-domain independence, and agreement with the continuous line integral are the well-definedness obligations recorded for [[lem-rho-length-and-extremal-length-are-well-defined]]. (3) The page's rectangle and round-annulus constants are fixed by the computations stated there, and each cited source is translated into this library convention.

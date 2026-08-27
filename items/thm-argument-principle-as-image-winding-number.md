---
id: thm-argument-principle-as-image-winding-number
kind: theorem
title: "The argument-principle integral is the winding number of the image cycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-argument-principle-null-homologous-cycle,
       def-winding-number-closed-complex-contour,
       cor-winding-number-is-the-normalized-argument-increment,
       thm-continuous-logarithms-exist-along-a-contour,
       lem-local-holomorphic-logarithm-nonvanishing-function-on-disc,
       cor-holomorphic-logarithm-has-the-logarithmic-derivative,
       prop-reversal-and-concatenation-of-complex-line-integrals,
       thm-fundamental-theorem-for-complex-line-integrals]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7, Theorem 8.7.9"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be a closed complex contour, let
$f$ be meromorphic on a neighbourhood of $\gamma^\ast$, and suppose
$f(z)\ne0$ for every $z\in\gamma^\ast$. Then $f\circ\gamma$ is a closed complex
contour with $0\notin(f\circ\gamma)^\ast$, and

$$\frac{1}{2\pi i}\int_\gamma \frac{f'(z)}{f(z)}\,dz=n(f\circ\gamma,0).$$

Equivalently, if $\theta$ is any continuous argument of $f\circ\gamma$, then

$$\frac{1}{2\pi i}\int_\gamma \frac{f'(z)}{f(z)}\,dz=\frac{\theta(b)-\theta(a)}{2\pi}.$$

If $\gamma$ is also admissible and null-homologous in a larger open set on
which $f$ is meromorphic, then the same integer equals $Z(f,\gamma)-P(f,\gamma)$
by [[thm-argument-principle-null-homologous-cycle]].

## Facts & Assumptions

**Given:** A closed complex contour $\gamma$, a meromorphic function $f$ on a
neighbourhood of $\gamma^\ast$, and $f(z)\ne0$ on $\gamma^\ast$.

[L1] The winding number of a closed contour about a point off its trace is
$$n(\eta,p)=\frac{1}{2\pi i}\int_\eta \frac{dw}{w-p}$$
([[def-winding-number-closed-complex-contour]]).

[L2] The winding number is also the normalized increment of any continuous
argument ([[cor-winding-number-is-the-normalized-argument-increment]]).

[L3] A contour missing the origin admits a continuous logarithm, unique up to a
constant in $2\pi i\mathbb Z$
([[thm-continuous-logarithms-exist-along-a-contour]]).

[L4] A holomorphic nonvanishing function on a disc has a holomorphic logarithm,
and that logarithm has derivative $f'/f$
([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]],
[[cor-holomorphic-logarithm-has-the-logarithmic-derivative]]).

[L5] Contour integrals add under concatenation, and a primitive computes the
integral by endpoint increments
([[prop-reversal-and-concatenation-of-complex-line-integrals]],
[[thm-fundamental-theorem-for-complex-line-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Since $f$ is continuous on the compact set $\gamma^\ast$ and never vanishes there, $f\circ\gamma$ is a closed complex contour whose trace misses $0$. By [L3], choose a continuous logarithm $\lambda$ of $f\circ\gamma$. Cover $\gamma^\ast$ by finitely many open discs $U_1,\dots,U_N$ on which $f$ has no zeros, and then subdivide $\gamma$ into consecutive subcontours $\gamma_j$ whose traces lie in those discs. [given, L3, choose]

2.1 Fix $j$. On $U_j$, [L4] gives a holomorphic logarithm $L_j$ of $f$, with $L_j'=f'/f$. Along the trace of $\gamma_j$, both $L_j\circ\gamma_j$ and $\lambda|_{\gamma_j}$ are continuous logarithms of $f\circ\gamma_j$, so [L3] makes their difference constant. Therefore $$\lambda(t_j)-\lambda(t_{j-1})=L_j(\gamma(t_j))-L_j(\gamma(t_{j-1}))=\int_{\gamma_j}\frac{f'(z)}{f(z)}\,dz,$$ where the last equality is [L5] applied to the primitive $L_j$. [L3, L4, L5, step 1.1]

3.1 Summing the equalities of step 2.1 over the subdivision and using the additivity from [L5] gives $$\int_\gamma \frac{f'(z)}{f(z)}\,dz=\lambda(b)-\lambda(a).$$ Now [L1] and [L2] applied to the contour $f\circ\gamma$ identify the same increment with both $2\pi i\,n(f\circ\gamma,0)$ and $i(\theta(b)-\theta(a))$, so the two displayed formulas follow. [L1, L2, L5, step 2.1, algebra] ∎

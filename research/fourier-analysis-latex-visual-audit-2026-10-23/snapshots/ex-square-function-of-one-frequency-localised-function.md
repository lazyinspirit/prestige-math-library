---
id: ex-square-function-of-one-frequency-localised-function
kind: example
title: "The square function of a low-frequency-localised function"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-inhomogeneous-dyadic-frequency-partition, def-littlewood-paley-square-function, thm-fourier-inversion-on-schwartz-space, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Definition 6.1.1, the Fourier support $\\{c_12^j<|\\xi|<c_22^j\\}$ of $\\Delta_j(f)$, printed pp. 420-421"
generation:
  role: example
---

## Example

Assume Countable Choice ([[def-countable-choice]]).
Let $f\in\mathcal S(\mathbb R^n)$ have Fourier transform supported in
$\{|\xi|\le1\}$. Then $\Delta_jf=0$ for every $j\ge1$ and $\Delta_0f=f$, so
$Sf=|\Delta_0f|=|f|$ and hence $\|Sf\|_p=\|f\|_p$ for every $1\le p<\infty$.
The example records that in the region where exactly one piece of the
partition is nonzero the square function degenerates to the modulus of that
piece, so for nonzero functions in this class the strict-range coefficients satisfy
$c_p\le1\le C_p$.

## Verification

**Given:** Countable Choice and $f\in\mathcal S(\mathbb R^n)$ with
$\operatorname{supp}\widehat f\subset\{|\xi|\le1\}$.

[L1] The partition satisfies $\varphi_0=\psi$ with $\psi=1$ on $\{|\xi|\le1\}$, and for $j\ge1$ the piece $\varphi_j$ vanishes on $\{|\xi|\le2^{j-1}\}$ ([[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]], [[def-inhomogeneous-dyadic-frequency-partition]]).

[L2] For $f\in\mathcal S$ one has $\widehat{\Delta_jf}=\varphi_j\widehat f$, and Fourier inversion gives $g=\mathcal F^{-1}(\widehat g)$ for Schwartz $g$ ([[def-inhomogeneous-dyadic-frequency-partition]], [[thm-fourier-inversion-on-schwartz-space]]); the square function is $Sf=\bigl(\sum_{j\ge0}|\Delta_jf|^2\bigr)^{1/2}$ ([[def-littlewood-paley-square-function]]).

1.1 The pieces on the low-frequency ball. Since $\operatorname{supp}\widehat f\subset\{|\xi|\le1\}$ and $\psi=1$ there, $\varphi_0\widehat f=\psi\widehat f=\widehat f$. For $j\ge1$, $\operatorname{supp}\widehat f$ is contained in the vanishing region $\{|\xi|\le2^{j-1}\}$ of $\varphi_j$ (because $2^{j-1}\ge1$), so $\varphi_j\widehat f=0$. [L1, given, algebra]

2.1 The square function. By step 1.1 and [L2], $\Delta_0f=\mathcal F^{-1}(\widehat f)=f$ and $\Delta_jf=\mathcal F^{-1}(0)=0$ for every $j\ge1$; hence only the $j=0$ term of the square function survives, $Sf=|\Delta_0f|=|f|$, and therefore $\|Sf\|_p=\||f|\|_p=\|f\|_p$ for every $1\le p<\infty$. For a nonzero function in this class, $c_p\|f\|_p\le\|Sf\|_p\le C_p\|f\|_p$ therefore forces $c_p\le1\le C_p$. [L2, step 1.1, algebra] ∎

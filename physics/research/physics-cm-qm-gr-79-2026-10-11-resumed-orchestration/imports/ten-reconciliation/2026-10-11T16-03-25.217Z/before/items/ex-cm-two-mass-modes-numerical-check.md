---
id: ex-cm-two-mass-modes-numerical-check
kind: example
title: "Two-mass spring eigenmodes at explicit parameters: eigenrelations, a mode solution, and the zero-frequency case"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [prop-cm-two-mass-spring-modes, thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases, def-cm-oscillator-model-and-phase-system, thm-of-square-roots, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-matrix-space, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
dependency_roles:
  prop-cm-two-mass-spring-modes: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-matrix-space: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 6 Section 6.1, Eqs. (6.1)-(6.13), printed pages 1-4 of Chapter 6 (PDF pages 125-128): the two coupled oscillators and their normal frequencies, checked here at explicit parameters"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 14.2-14.3, pages 488-490 of the PDF pagination: normal coordinates of two identical coupled oscillators"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Example

Take $m=1$, $k=1$, $c=3$ in [[prop-cm-two-mass-spring-modes]], so that
$K=\begin{pmatrix}4&-3\\-3&4\end{pmatrix}$ and
$u_\pm=\frac1{\sqrt2}(1,\pm1)^{\mathsf T}$; the proposition gives $Ku_+=u_+$ and $Ku_-=7u_-$, hence
squared frequencies $k/m=1$ and $(k+2c)/m=7$. The curve

$$x(t)=\cos(t)\,u_++\cos(\sqrt7\,t)\,u_-$$

solves $x''=-Kx$ with $x(0)=(\sqrt2,0)$ and $x'(0)=0$. In the degenerate case $k=0$, $c=1$ one has
$K=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ and $Ku_+=0$, so $x(t)=(1+t)u_+$ solves $x''=-Kx$ and
is unbounded on $[0,\infty)$: the zero-frequency mode is affine, not oscillatory. All entries are
exact; no numerical integration or measurement is involved.

## Facts & Assumptions

**Given:** The parameters of the two cases, the matrix $K$ and vectors $u_\pm$ of each case, and
the system $x''=-Kx$ of [[prop-cm-two-mass-spring-modes]] with $m=1$.

[L1] The proposition ([[prop-cm-two-mass-spring-modes]]): for $m>0$, $k\ge0$, $c\ge0$ one has
$Ku_+=ku_+$ and $Ku_-=(k+2c)u_-$, the system $mx''=-Kx$ is equivalent to the two scalar
oscillator equations $my_+''+ky_+=0$, $my_-''+(k+2c)y_-=0$ via $x=y_+u_++y_-u_-$, and for $k=0$
the family $x(t)=(A+Bt)u_+$ consists of solutions with $Ku_+=0$
([[def-cm-oscillator-model-and-phase-system]],
[[thm-cm-homogeneous-oscillator-solution-classification]],
[[prop-cm-oscillator-degenerate-and-repulsive-cases]] for the scalar solution families).

[L2] Matrix and derivative data ([[def-matrix-product-and-identity-matrix]],
[[def-matrix-space]], [[def-euclidean-inner-product]],
[[def-vector-valued-derivative-and-integral]], [[thm-algebra-of-derivatives]],
[[thm-chain-rule-for-total-derivatives]], [[thm-sine-and-cosine-derivatives]],
[[def-sine-and-cosine-by-power-series]], [[def-derivative]], [[def-interval]]): matrix-vector
multiplication is the displayed sum; $\frac{d}{dt}\cos t=-\sin t$ and
$\frac{d}{dt}\cos(\sqrt7\,t)=-\sqrt7\sin(\sqrt7\,t)$, so
$\frac{d^2}{dt^2}\cos(\sqrt7\,t)=-7\cos(\sqrt7\,t)$ by the chain rule; and
$\lVert(A+Bt)u_+\rVert_2=|A+Bt|$ because $u_+$ is a unit vector.

## Verification

**Proof technique:** direct; multiply the two explicit matrices into the displayed vectors and
substitute the resulting eigenrelations into the two solutions.

1.1 Eigenrelations in the first case: direct multiplication gives $$Ku_+=\frac1{\sqrt2}\begin{pmatrix}4-3\\-3+4\end{pmatrix}=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}=u_+,\qquad Ku_-=\frac1{\sqrt2}\begin{pmatrix}4+3\\-3-4\end{pmatrix}=\frac7{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}=7u_-,$$ so $k=1$ and $k+2c=7$ are the eigenvalues and the squared frequencies are $1$ and $7$; the second case has $Ku_+=\frac1{\sqrt2}(1-1,-1+1)^{\mathsf T}=0$. [given, L1, L2, algebra]

2.1 The mode solution: with $x(t)=\cos(t)u_++\cos(\sqrt7\,t)u_-$ one has $$x''(t)=-\cos(t)u_+-7\cos(\sqrt7\,t)u_-=-\bigl(\cos(t)Ku_++\cos(\sqrt7\,t)Ku_-\bigr)=-Kx(t)$$ by step 1.1 and [L2], so $x''=-Kx$; also $x(0)=u_++u_-=(\sqrt2,0)$ and $x'(0)=0$ because both sine factors vanish at $0$. [step 1.1, given, L2, algebra]

3.1 The zero-frequency case: for $k=0$, $c=1$ and $x(t)=(1+t)u_+$ one has $x''=0$ and $-Kx=-(1+t)Ku_+=0$ by step 1.1, so $x$ solves the system; moreover $\lVert x(t)\rVert_2=1+t$ tends to $+\infty$, so the motion is unbounded and affine rather than oscillatory, as clause 4 of [L1] predicts. [step 1.1, given, L1, L2, algebra] ∎

---
id: ex-two-gauge-choices-give-different-eigenvector-derivatives
kind: example
title: "Different gauge choices change the eigenvector derivative but not the eigenvalue derivative or projector derivative"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-gauge-fixed-simple-eigenvector-derivative-formula,
       thm-derivative-of-the-simple-spectral-projector]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. W. Stewart and Ji-guang Sun, Matrix Perturbation Theory"
      url: "https://djvu.online/file/j5uuUqxIKij6w"
---

## Example

Let

$$A(t)=\begin{pmatrix}1&t\\0&2\end{pmatrix}.$$

For the eigenvalue $2$, one right eigenvector branch is
$x_1(t)=(t,1)^\mathsf T$, which fixes the second component at $1$; another is

$$x_2(t)=\frac1{1+t}(t,1)^\mathsf T,$$

which fixes the sum of the components at $1$. Then

$$x_1'(0)=\begin{pmatrix}1\\0\end{pmatrix},\qquad x_2'(0)=\begin{pmatrix}1\\-1\end{pmatrix}=x_1'(0)-x_1(0).$$

So the eigenvector derivative depends on the gauge, even though the
eigendirection and the spectral projector do not.

## Facts & Assumptions

**Given:** The family $A(t)$ and the eigenvalue branch $\lambda(t)\equiv 2$.

[L1] Different fixed gauges give eigenvector derivatives determined only up to
addition of a multiple of the eigenvector, while the spectral projector
derivative is gauge-invariant
([[thm-gauge-fixed-simple-eigenvector-derivative-formula]],
[[thm-derivative-of-the-simple-spectral-projector]]).

## Verification
**Proof technique:** direct.

1.1 Direct multiplication shows $A(t)(t,1)^\mathsf T=2(t,1)^\mathsf T$, so both displayed branches are valid right eigenvectors for $\lambda=2$. Differentiating gives the displayed derivatives at $t=0$. [algebra]

2.1 The difference is $x_2'(0)-x_1'(0)=-x_1(0)$, a multiple of the eigenvector itself. Thus the eigenvector derivative depends on the normalization, exactly as [L1] warns. Both branches span the same eigendirection, so they define the same spectral projector. [L1, step 1.1, algebra] ∎
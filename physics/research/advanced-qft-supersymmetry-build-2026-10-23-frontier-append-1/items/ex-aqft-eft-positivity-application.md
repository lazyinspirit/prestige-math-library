---
id: ex-aqft-eft-positivity-application
kind: example
title: Allowed and excluded coefficients in one gapped scalar channel
status: draft
origin: pipeline
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 5
deps:
  - def-aqft-eft-scattering-channel
  - pthm-aqft-forward-positivity-wilson-coefficient
dependency_roles:
  def-aqft-eft-scattering-channel: formulation-prerequisite
  pthm-aqft-forward-positivity-wilson-coefficient: physical-result
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
physical_scope: >-
  A finite algebraic comparison of two coefficient values for one hypothetical
  gapped identical-real-scalar channel under the same exact amplitude and
  matching assumptions. Passing the necessary inequality is not evidence that
  a full amplitude or physical QFT exists.
sources:
  references:
    - title: Claudia de Rham et al., Positivity Bounds for Scalar Theories
      url: https://arxiv.org/pdf/1702.06134
      locator: Full five-page paper; §§2.1–2.2, equations (1)–(15), PDF pp. 1–3.
    - title: Ivano Basile et al., Lectures in Quantum Gravity
      url: https://arxiv.org/pdf/2412.08690.pdf
      locator: Full 303-page lecture-notes PDF; §§3.2.1–3.3.1, printed pp. 90–98.
---

## Example

Fix one hypothetical channel satisfying all amplitude hypotheses in this page's channel definition and the exact matching identity $c_1=4C_8/\Lambda^4+\Delta_{\mathrm{match}}$. Take $\Lambda=4m$ and $\Delta_{\mathrm{match}}=0$. Compare $C_8=+1/2$ with $C_8=-1/2$ under these same assumptions. The first coefficient passes the necessary forward-positivity inequality; the second is excluded by it. Passing the inequality is not sufficient for a full amplitude.

## Example references

[[def-aqft-eft-scattering-channel]]

[[pthm-aqft-forward-positivity-wilson-coefficient]]

[de Rham et al., *Positivity Bounds for Scalar Theories*, §§ 2.1–2.2](https://arxiv.org/pdf/1702.06134)

[Basile et al., *Lectures in Quantum Gravity*, § 3.3.1](https://arxiv.org/pdf/2412.08690.pdf)

## Facts & Assumptions

**Given:** A gapped scalar channel with $m>0$, $\Lambda=4m$, exact $\Delta_{\mathrm{match}}=0$, and the two candidate coefficients $C_8=+1/2$ and $C_8=-1/2$.

[A1] [[def-aqft-eft-scattering-channel]]: $c_1=B''(0)/2!$ and the declared match is $c_1=4C_8/\Lambda^4+\Delta_{\mathrm{match}}$ for the fixed operator representative.

[F1] [[pthm-aqft-forward-positivity-wilson-coefficient]]: under the same mass-gap, analytic, crossing, pole-subtraction, spectral, and matching assumptions with $\Delta_{\mathrm{match}}=0$, the necessary bound is $C_8\ge0$.

## Verification

1.1 For $C_8=+1/2$ and $\Lambda=4m$, [A1] gives $c_1=4(1/2)/(4m)^4=1/(128m^4)>0$. This value passes the necessary forward-positivity test. [given, A1, algebra]

1.2 For $C_8=-1/2$ under the same $m$, $\Lambda$, and $\Delta_{\mathrm{match}}$, [A1] gives $c_1=4(-1/2)/(4m)^4=-1/(128m^4)<0$. This violates [F1], so the value is excluded under the stated channel assumptions. [given, A1, F1, algebra]

2.1 Since [F1] permits equality, $C_8=0$ lies on the boundary of the region that passes this necessary inequality. The positive point and boundary pass do not establish that an amplitude realizing them exists. [F1, step 1.1, step 1.2, algebra] ∎

## Remarks

The horizontal coordinate is the dimensionless coefficient $C_8$ in the fixed representative. Red shading denotes values excluded by this one necessary inequality; blue shading denotes values that pass it, including the zero boundary. The diagram encodes only $C_8\ge0$ when $\Delta_{\mathrm{match}}=0$ and does not assert amplitude existence.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth]
  \fill[red!18] (-3,-0.35) rectangle (0,0.35);
  \fill[blue!18] (0,-0.35) rectangle (3.5,0.35);
  \draw[->,thick] (-3.2,0) -- (3.8,0) node[right] {$C_8$};
  \draw[thick] (0,-0.5) -- (0,0.5);
  \node[below] at (0,-0.5) {$0$};
  \node[above] at (-1.5,0.45) {excluded};
  \node[above] at (1.75,0.45) {passes this bound};
\end{tikzpicture}
```


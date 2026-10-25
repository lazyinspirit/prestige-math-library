---
id: ex-qftx-n4-su2-line-operator-duality
kind: example
title: SU(2) and SO(3) Line-Spectrum Choices in the $N=4$ Duality Family
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 9
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-scft-and-frontier-examples
deps:
  - def-qftx-scft-protected-data
dependency_roles:
  def-qftx-scft-protected-data: formulation-prerequisite
physical_scope: "Finite center-charge and line-spectrum calculation for the su(2) N=4 duality family. T is the theta-angle shift and can permute the line-spectrum choices; quantum S-equivalence is reported as conjectural. This item proves the finite charge arithmetic and identifies the T parameter shift; it asserts no confinement law, continuum construction, or proof of quantum S-duality."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ofer Aharony, Nathan Seiberg, and Yuji Tachikawa, Reading between the Lines of Four-Dimensional Gauge Theories"
      url: "https://arxiv.org/pdf/1305.0318v5"
      locator: "§§1.1–1.2, printed pp. 2–5, and §2.4, printed pp. 17–18: the three su(2) line spectra and S/T transformations."
    - title: "Anton Kapustin and Edward Witten, Electric-Magnetic Duality and the Geometric Langlands Program"
      url: "https://arxiv.org/pdf/hep-th/0604151v3"
      locator: "§2.2, printed pp. 11–12: the simply-laced tau transformation and global-form qualification."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Use the $\mathfrak{su}(2)$ center-charge group $\mathcal C=\mathbb Z_2\times\mathbb Z_2$ with pairing $\langle(e,m),(e',m')\rangle=em'-me'\pmod2$. The source-reported line-spectrum subgroups associated with this gauge algebra are

$$L_{SU(2)}=\{(0,0),(1,0)\},\qquad L_{SO(3)_+}=\{(0,0),(0,1)\},\qquad L_{SO(3)_-}=\{(0,0),(1,1)\}.$$

Each is maximal among subgroups on which the pairing vanishes; such subgroups are called isotropic. Under the source-reported duality maps, $S:(e,m)\mapsto(m,-e)$ sends $L_{SU(2)}$ to $L_{SO(3)_+}$, while $T:(e,m)\mapsto(e+m,m)$ fixes $L_{SU(2)}$ and exchanges $L_{SO(3)_+}$ with $L_{SO(3)_-}$. With dimensionless $g>0$ and $\theta\in\mathbb R$, set $\tau=\theta/(2\pi)+4\pi i/g^2$. The accompanying coupling maps are $S:\tau\mapsto-1/\tau$ and $T:\tau\mapsto\tau+1$. Here $T$ is the shift $\theta\mapsto\theta+2\pi$ at fixed $g$, identified by Kapustin and Witten as a classical symmetry on $\mathbb R^4$; their additional quantum $S$-equivalence is conjectural. The $T$ operation can exchange the two $SO(3)$ line-spectrum choices, so it need not fix the complete theory data. This verifies the finite line-charge permutation and identifies the $T$ parameter shift; it does not prove quantum $S$-duality.

## Example references

[Aharony, Seiberg, and Tachikawa, §§1.1–1.2 and 2.4](https://arxiv.org/pdf/1305.0318v5)

[Kapustin and Witten, §2.2](https://arxiv.org/pdf/hep-th/0604151v3)

## Facts & Assumptions

**Given:** The finite group $\mathcal C=\mathbb Z_2\times\mathbb Z_2$, its alternating pairing, and the source-reported $S$ and $T$ maps in the statement.

[F1] [[def-qftx-scft-protected-data]]: the center-charge classes are $(e,m)\in\mathbb Z_2\times\mathbb Z_2$, the mutual-locality pairing is $em'-me'\pmod2$, and the source-reported maps are $S(e,m)=(m,-e)$ and $T(e,m)=(e+m,m)$. The dimensionless coupling is $\tau=\theta/(2\pi)+4\pi i/g^2$ for $g>0$ and real $\theta$.

[F2] [Aharony, Seiberg, and Tachikawa, §§1.2 and 2.4](https://arxiv.org/pdf/1305.0318v5): for gauge algebra $\mathfrak{su}(2)$ the source assigns the three maximal line classes to $SU(2)$, $SO(3)_+$, and $SO(3)_-$ and gives the source-reported $S$ action on line charges; its $T$ action follows from the stated $\theta\mapsto\theta+2\pi$ transformation, which exchanges the two $SO(3)$ choices. [Kapustin and Witten, §2.2](https://arxiv.org/pdf/hep-th/0604151v3) identify $T$ as the classical theta-shift symmetry on $\mathbb R^4$ and explicitly classify the additional quantum $S$-duality as a conjecture.

[A1] All coordinates and pairings in this example are computed in the field $\mathbb Z_2$; in particular $-1=1$ there.

## Verification

1.1 The three nonzero elements of $\mathcal C$ are $(1,0)$, $(0,1)$, and $(1,1)$. Each generates an order-two subgroup with the origin. The pairing is alternating, so each such subgroup is isotropic. Any subgroup containing two distinct nonzero elements contains two linearly independent columns in $\mathbb Z_2^2$; the determinant $em'-me'$ of two independent columns is nonzero and therefore equals $1$ in $\mathbb Z_2$. Hence such a subgroup is not isotropic. Therefore these are exactly the three maximal isotropic subgroups, and [F2] gives their source-reported gauge-group labels. [given, F1, F2, A1, algebra]

2.1 Modulo $2$, the map $S$ sends $(1,0)$ to $(0,1)$, $(0,1)$ to $(1,0)$, and $(1,1)$ to $(1,1)$. The map $T$ sends $(1,0)$ to $(1,0)$, $(0,1)$ to $(1,1)$, and $(1,1)$ to $(0,1)$. These invertible linear maps therefore send the displayed subgroups exactly as stated. At fixed $g$, replacing $\theta$ by $\theta+2\pi$ adds $1$ to $\tau$ by [F1]. Source [F2] identifies this $T$ operation as a classical symmetry on $\mathbb R^4$, with the stated permutation of line-spectrum choices, and describes the additional quantum $S$-equivalence as conjectural. That $S$-equivalence is not established by the finite arithmetic. [given, F1, F2, A1, step 1.1, algebra] ∎

## Remarks

The diagram uses horizontal coordinate $e$ and vertical coordinate $m$. Only the four marked lattice points are elements of $\mathcal C$; the drawn segments join the two elements of each subgroup as a visual aid. The algebraic proof above does not rely on the drawing.

```tikz
\begin{tikzpicture}[scale=1]
  \draw[->] (-0.35,0) -- (2.65,0) node[right] {$e$};
  \draw[->] (0,-0.35) -- (0,2.65) node[above] {$m$};
  \draw[red,thick] (0,0) -- (2,0);
  \draw[blue,thick] (0,0) -- (0,2);
  \draw[green!60!black,thick] (0,0) -- (2,2);
  \fill (0,0) circle (2pt) node[below left] {$(0,0)$};
  \fill (2,0) circle (2pt) node[below] {$(1,0)$};
  \fill (0,2) circle (2pt) node[left] {$(0,1)$};
  \fill (2,2) circle (2pt) node[above right] {$(1,1)$};
  \node[red] at (1.45,-0.45) {$L_{SU(2)}$};
  \node[blue] at (-0.85,1) {$L_{SO(3)_+}$};
  \node[green!60!black] at (2.4,1.45) {$L_{SO(3)_-}$};
\end{tikzpicture}
```

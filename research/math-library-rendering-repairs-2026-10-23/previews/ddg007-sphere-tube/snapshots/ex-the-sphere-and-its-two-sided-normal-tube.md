---
id: ex-the-sphere-and-its-two-sided-normal-tube
kind: example
title: "The sphere and its two-sided normal tube"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

For the unit sphere $S^n\subseteq\mathbb R^{n+1}$, the outward unit normal at
$p$ is again $p$. Hence the normal bundle is the trivial line bundle
$S^n\times\mathbb R$, and the normal addition map is
$$ E(p,t)=(1+t)p. $$
For $|t|<1/2$, its image is the spherical shell
$$ \{x\in\mathbb R^{n+1}:1/2<\|x\|<3/2\}. $$

## Facts & Assumptions

**Given:** The unit sphere $S^n\subseteq\mathbb R^{n+1}$ with the Euclidean metric.

## Verification
**Proof technique:** direct.

1.1 Since $T_pS^n=\{v\in\mathbb R^{n+1}:\langle v,p\rangle=0\}$, the orthogonal complement is the one-dimensional span of $p$. Thus $N^\perp S^n\cong S^n\times\mathbb R$. [given, algebra]

2.1 Under that identification, normal addition is $E(p,t)=p+tp=(1+t)p$. Since $1+t>0$ for $|t|<1/2$, its image is exactly the shell $1/2<\|x\|<3/2$: the inverse is $x\mapsto(x/\|x\|,\|x\|-1)$, which is smooth there. Thus this is an explicit two-sided tubular neighbourhood. [step 1.1, algebra] ∎


## Remarks

The shaded annulus below is a schematic radial cross-section of the shell for $S^n$ (drawn as a circle for illustration). The dashed circles are excluded boundary radii; the solid circle is the unit sphere. Along each radial normal, $t$ is signed: negative values move inward and positive values move outward. The marked point illustrates $t>0$.

```tikz
\begin{tikzpicture}[scale=0.9]
\fill[blue!12,even odd rule] (0,0) circle (3) (0,0) circle (1);
\draw[dashed] (0,0) circle (3);
\draw[thick] (0,0) circle (2);
\draw[dashed] (0,0) circle (1);
\draw[gray] (0,0) -- (3.15,0);
\fill (0,0) circle (0.035);
\node[below left] at (0,0) {$0$};
\fill (2,0) circle (0.045);
\node[below] at (2,-0.08) {$p$};
\fill (2.65,0) circle (0.045);
\draw[->,thick] (2,0.22) -- (2.65,0.22);
\node[above] at (2.325,0.22) {$tp$};
\draw (2.65,0) -- (3.35,-0.6);
\node[right] at (3.35,-0.6) {$x=(1+t)p$};
\node[fill=white,inner sep=2pt] at (-0.7,0.7) {$r=\frac12$};
\node[fill=white,inner sep=2pt] at (-1.414,1.414) {$r=1$};
\node[fill=white,inner sep=2pt] at (-2.121,2.121) {$r=\frac32$};
\end{tikzpicture}
```

Here the drawing uses twice the unit radius as its scale. Normal addition identifies $S^n\times(-1/2,1/2)$ with the open shell, with inverse $x\mapsto(x/\|x\|,\|x\|-1)$ as proved in step 2.1. The verification is independent of the picture.

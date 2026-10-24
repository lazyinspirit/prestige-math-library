---
id: ex-an-interval-endpoint-is-not-a-density-point
kind: example
title: "An endpoint of an interval has density one half, not one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-density-of-a-measurable-set-at-a-point, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed., Chapter 7"
      url: "https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

For $E=[0,1]\subseteq\mathbb{R}$, the endpoint $0$ is not a density-one point
of $E$; instead,
$$\Theta(E,0)=\frac12.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the interval $E=[0,1]$.

[L1] Density is computed by $$\Theta(E,0)=\lim_{r\to0^+}\frac{\lambda(E\cap(-r,r))}{\lambda((-r,r))}$$ when the limit exists. ([[def-density-of-a-measurable-set-at-a-point]])

[L2] The interval $(-r,r)$ has measure $2r$ and $[0,r)$ has measure $r$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Verification

**Proof technique:** direct.

1.1 For every $0<r\le1$, [L2, given, algebra] $$E\cap(-r,r)=[0,r),$$ so [L2] gives $$\frac{\lambda(E\cap(-r,r))}{\lambda((-r,r))} =\frac{r}{2r}=\frac12.$$ [L2, given, algebra]

2.1 The ratio in step 1.1 is constant for all sufficiently small $r$, so [L1] [L1, step 1.1] gives $\Theta(E,0)=1/2$. In particular $0$ is not a density-one point of $E$. [L1, step 1.1] ∎

## Remarks

For $0<r<1$, the following schematic aligns the interval $E$, the centered
neighborhood $(-r,r)$, and their intersection. Filled endpoints are included;
open endpoints are excluded. The lengths in step 1.1 give the constant ratio
$r/(2r)=1/2$. The verification above is independent of the picture.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\draw[gray,dashed] (-2,0.1) -- (-2,3.5);
\draw[gray,dashed] (0,0.1) -- (0,3.5);
\draw[gray,dashed] (2,0.1) -- (2,3.5);
\draw[gray,dashed] (4,0.1) -- (4,3.5);
\node at (-2,3.8) {$-r$};
\node at (0,3.8) {$0$};
\node at (2,3.8) {$r$};
\node at (4,3.8) {$1$};
\node[anchor=east] at (-2.5,3) {$E=[0,1]$};
\draw[very thick] (0,3) -- (4,3);
\fill (0,3) circle (2pt);
\fill (4,3) circle (2pt);
\node[anchor=east] at (-2.5,1.8) {$(-r,r)$};
\draw[very thick] (-2,1.8) -- (2,1.8);
\draw[fill=white] (-2,1.8) circle (2pt);
\draw[fill=white] (2,1.8) circle (2pt);
\node at (0,1.4) {$\mathrm{length}=2r$};
\node[anchor=east] at (-2.5,0.5) {$E\cap(-r,r)=[0,r)$};
\draw[very thick] (0,0.5) -- (2,0.5);
\fill (0,0.5) circle (2pt);
\draw[fill=white] (2,0.5) circle (2pt);
\node at (1,0) {$\mathrm{length}=r$};
\end{tikzpicture}
```

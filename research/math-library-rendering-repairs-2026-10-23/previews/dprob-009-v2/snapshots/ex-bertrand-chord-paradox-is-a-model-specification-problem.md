---
id: ex-bertrand-chord-paradox-is-a-model-specification-problem
kind: example
title: "Bertrand's chord paradox is a model-specification problem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-probability-measure]
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
    - title: "Jean-Francois Le Gall, Integration, Probabilities and Stochastic Processes, Section 8.1.4"
      url: "https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf"
---

## Example

Consider a circle of radius $1$ and the event that a random chord is longer than
the side of the inscribed equilateral triangle. Three natural models give three
different probabilities.

1. If the chord is determined by a random central angle
   $\Theta\sim\mathrm{Unif}[0,\pi]$, then the event is $\{\Theta>2\pi/3\}$ and
   has probability $1/3$.
2. If the chord is determined by choosing its midpoint uniformly on a fixed
   radius, then the event is that the midpoint lies within distance $1/2$ of the
   center, and has probability $1/2$.
3. If the chord is determined by choosing its midpoint uniformly in the whole
   disk, then the same geometric condition gives probability $1/4$.

## Facts & Assumptions

**Given:** The three sample-space models stated in the Example.

[L1] A probability question is determined only after the sample space and its probability measure have been fixed ([[def-probability-measure]]).

## Verification

**Proof technique:** direct.

1.1 A chord subtending central angle $\Theta$ has length $2\sin(\Theta/2)$. It is longer than $\sqrt 3$ exactly when $\sin(\Theta/2)>\sqrt3/2$, that is, when $\Theta>2\pi/3$. Under the uniform-angle model this has probability $$(\pi-2\pi/3)/\pi=1/3.$$ [L1, given, algebra]

2.1 A chord is longer than $\sqrt3$ exactly when its midpoint is within distance $1/2$ of the center. Along a fixed radius, the favorable segment has length $1/2$ inside the unit segment, so the midpoint-on-a-radius model gives probability $1/2$. Over the whole disk, the favorable region is the disk of radius $1/2$, so the midpoint-in-the-disk model gives area ratio $$(\pi(1/2)^2)/\pi=1/4.$$ [step 1.1, L1, algebra]

3.1 The three different answers $1/3$, $1/2$, and $1/4$ come from three different probability models for the same geometric question, exactly as [L1] predicts. [step 1.1, step 2.1, L1] ∎


## Remarks

The first panel fixes the common threshold: an equilateral triangle inscribed
in the unit circle has side length $\sqrt3$, whose midpoint is at distance
$1/2$ from the center. The other panels show the three sampling spaces, with
the favorable regions in cyan. The interval panels use normalized length;
the disk panel uses normalized area. Open endpoints and the dashed inner
circle exclude equality, which has probability zero in all three models.

```tikz
\begin{tikzpicture}[scale=1.5]
\node at (0,4.25) {Common chord threshold};
\draw (0,2.8) circle (1);
\draw[dashed] (0,3.8) -- (-0.8660254,2.3) -- (0.8660254,2.3) -- (0,3.8);
\draw[very thick] (-0.8660254,2.3) -- (0.8660254,2.3);
\draw[dotted] (0,2.8) -- (0,2.3);
\fill (0,2.8) circle (1pt);
\node[left] at (0,2.8) {$O$};
\node[right] at (0,2.55) {$1/2$};
\node[below] at (0,2.25) {$\sqrt3$};
\node at (5,4.25) {Uniform central angle};
\draw (3.5,2.8) -- (6.5,2.8);
\draw[cyan,very thick] (5.5,2.8) -- (6.5,2.8);
\draw (3.5,2.7) -- (3.5,2.9);
\draw (6.5,2.7) -- (6.5,2.9);
\draw[cyan,fill=black!99!white] (5.5,2.8) circle (3pt);
\node[below] at (3.5,2.65) {$0$};
\node[below] at (5.5,2.65) {$2\pi/3$};
\node[below] at (6.5,2.65) {$\pi$};
\node at (5,1.65) {$\mathbb P(\Theta>2\pi/3)=1/3$};
\node at (0,0.7) {Uniform midpoint on a radius};
\draw (-1.5,-0.4) -- (1.5,-0.4);
\draw[cyan,very thick] (-1.5,-0.4) -- (0,-0.4);
\draw (-1.5,-0.5) -- (-1.5,-0.3);
\draw (1.5,-0.5) -- (1.5,-0.3);
\draw[cyan,fill=black!99!white] (0,-0.4) circle (3pt);
\node[below] at (-1.5,-0.55) {$0$};
\node[below] at (0,-0.55) {$1/2$};
\node[below] at (1.5,-0.55) {$1$};
\node at (0,-1.55) {$\mathbb P(r<1/2)=1/2$};
\node at (5,0.7) {Uniform midpoint in the disk};
\draw (5,-0.55) circle (1);
\fill[cyan,opacity=0.2] (5,-0.55) circle (0.5);
\draw[cyan,dashed,thick] (5,-0.55) circle (0.5);
\fill (5,-0.55) circle (1pt);
\draw[dotted] (5,-0.55) -- (6,-0.55);
\node[above] at (5.25,-0.55) {$1/2$};
\node[above] at (5.85,-0.55) {$1$};
\node at (5,-1.95) {$\mathbb P(r<1/2)=1/4$};
\end{tikzpicture}
```

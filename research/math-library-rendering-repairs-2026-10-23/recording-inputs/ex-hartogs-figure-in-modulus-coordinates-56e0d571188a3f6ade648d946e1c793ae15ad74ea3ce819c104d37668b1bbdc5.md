---
id: ex-hartogs-figure-in-modulus-coordinates
kind: example
title: "The Hartogs figure in (|z1|, |z2|) coordinates"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-hartogs-figure-and-polydisc-hull]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

For $0<r,s<1$, the Hartogs figure $H(r,s)$ is the union of a thin inner cylinder
and a thick outer shell:

$$ H(r,s)=\{ |z_1|<1,\ |z_2|<s\}\cup\{ r<|z_1|<1,\ |z_2|<1\}. $$

In the $(|z_1|,|z_2|)$-plane this is exactly the region obtained by taking the
rectangle $[0,1)\times[0,s)$ together with the vertical strip
$(r,1)\times[0,1)$.

## Facts & Assumptions

**Given:** Real numbers $0<r,s<1$.

[L1] The Hartogs figure and its bidisc hull are defined by the displayed modulus conditions in the two coordinates ([[def-hartogs-figure-and-polydisc-hull]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], membership in $H(r,s)$ depends only on the two moduli $|z_1|$ and $|z_2|$, and the two defining pieces are exactly the inequalities listed in the Example. [L1]

2.1 So the picture in modulus coordinates is the union of the thin horizontal rectangle $[0,1)\times[0,s)$ with the outer vertical strip $(r,1)\times[0,1)$, while the missing core is $[0,r]\times[s,1)$. [step 1.1] ∎

## Remarks

The shaded footprint below is schematic for arbitrary $0<r,s<1$; it is the image of $H(r,s)$ under $(z_1,z_2)\mapsto(|z_1|,|z_2|)$. Solid blue boundary segments belong to the footprint; dashed blue segments and hollow endpoints do not. In particular, the corner $(r,s)$ is excluded, but points with $|z_1|=r$ and $|z_2|<s$ are included. The unshaded core inside the unit square is $[0,r]\times[s,1)$; the top and right edges of the unit square are excluded throughout. The Verification above is independent of this illustration.

```tikz
\begin{tikzpicture}[scale=1.1]
\fill[blue!18] (0,0) -- (4,0) -- (4,4) -- (1.6,4) -- (1.6,1.3) -- (0,1.3) -- (0,0);
\draw[->] (-0.3,0) -- (4.6,0) node[right] {$|z_1|$};
\draw[->] (0,-0.3) -- (0,4.6) node[above] {$|z_2|$};
\draw[blue,thick] (0,1.3) -- (0,0) -- (4,0);
\draw[blue,thick,dashed] (0,1.3) -- (1.6,1.3) -- (1.6,4) -- (4,4) -- (4,0);
\draw[gray,dotted] (0,4) -- (1.6,4);
\foreach \x/\y in {0/1.3,1.6/1.3,1.6/4,4/4,4/0} {
  \draw[blue,fill=white] (\x,\y) circle (0.055);
}
\fill[blue] (0,0) circle (0.045);
\draw (1.6,0.05) -- (1.6,-0.05) node[below] {$r$};
\node[below left] at (0,0) {$0$};
\node[below] at (4,0) {$1$};
\node[left] at (0,1.3) {$s$};
\node[left] at (0,4) {$1$};
\node at (2.8,2.5) {$H(r,s)$};
\node[align=center] at (0.8,2.7) {$\mathrm{excluded}$};
\end{tikzpicture}
```


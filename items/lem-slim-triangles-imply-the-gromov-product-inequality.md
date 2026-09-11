---
id: "lem-slim-triangles-imply-the-gromov-product-inequality"
kind: "lemma"
title: "Slim triangles imply the gromov product inequality"
deps: ["def-hg-toolkit-slim-triangles-products-and-four-point-constants"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich Lemmas 9.25 and 9.31"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In a geodesic space with $\delta$-slim triangles, $\delta\ge0$, one has
$$ (x|z)_o\ge\min\{(x|y)_o,(y|z)_o\}-3\delta $$
for every basepoint $o$ and every $x,y,z$. No properness is required.

## Facts & Assumptions

**Given:** The specified space and four points.

[F1] Products, their nonnegativity, and infimum-based slimness are as in [[def-hg-toolkit-slim-triangles-products-and-four-point-constants]].

## Proof

1.1 Put $\alpha=\min\{(x|y)_o,(y|z)_o\}$. For any point $v\in[x,y]$, the inequalities $d(o,x)\le d(o,v)+d(v,x)$ and $d(o,y)\le d(o,v)+d(v,y)$ add to give $d(o,v)\ge(x|y)_o$. The same argument applies to $[y,z]$. [F1, given, algebra]

2.1 If $\alpha\le\delta$, nonnegativity gives the claimed lower bound. Otherwise fix $0\le t<\alpha-\delta$ and $0<h<\alpha-\delta-t$. Choose points $x_t,y_t,z_t$ at distance $t$ from $o$ on three chosen radial sides. These points exist since each radial length is at least $\alpha$. Slimness and the infimum convention supply a point within distance less than $\delta+h$ of $x_t$ on $[o,y]\cup[x,y]$. It cannot lie on $[x,y]$, whose points have distance at least $\alpha>t+\delta+h$ from $o$. Let it be $v\in[o,y]$. Then $|d(o,v)-t|<\delta+h$, so $d(x_t,y_t)<2(\delta+h)$. Applying the same reasoning to $y_t$ in triangle $(o,y,z)$ gives $d(y_t,z_t)<2(\delta+h)$. [step 1.1, F1, algebra]

3.1 Thus $d(x_t,z_t)<4(\delta+h)$ and the joining route through them gives $d(x,z)\le d(o,x)-t+4(\delta+h)+d(o,z)-t$. Expanding the product yields $(x|z)_o\ge t-2(\delta+h)$. This is true for every sufficiently small positive $h$, so $(x|z)_o\ge t-2\delta$. Otherwise a sufficiently small $h$ would contradict the strict gap. [step 2.1, F1, algebra]

4.1 Letting $t$ approach $\alpha-\delta$ from below in the same elementary real inequality gives $(x|z)_o\ge\alpha-3\delta$. When $\delta=0$ and $\alpha>0$, the same positive $h$ and $t<\alpha$ argument applies; when both vanish step 2.1 applies. All side selections are finite and all near-point witnesses are used one at a time, so no AC or closest-point attainment was used. [step 2.1, step 3.1, algebra] ∎

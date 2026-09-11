---
id: "ex-relative-smoothing-fixes-the-endpoints-of-a-path"
kind: "example"
title: "Relative smoothing fixes the endpoints of a path"
deps: ["lem-relative-smoothing-of-a-continuous-simplex-along-its-faces", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 B inventory; explicit verification or unresolved witness in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume $\mathrm{AC}_\omega$. A continuous path $f:[0,1]\to N$ in a smooth manifold without boundary, with $f(0)=p$ and $f(1)=q$, is homotopic relative to both endpoints to a strict smooth singular path. For the explicit cusp path $f(t)=|t-1/2|$ in $\mathbb R$, one endpoint-fixed smoothing is the constant path $g(t)=1/2$.

## Facts & Assumptions

**Given:** The continuous path in the boundaryless target and its two endpoint values.

[F1] Boundaryless relative simplex smoothing preserves prescribed compatible face homotopies with their exact time parameter, using countable choice ([[lem-relative-smoothing-of-a-continuous-simplex-along-its-faces]]).

[F2] Countable choice is the axiom used here ([[def-countable-choice]]).

## Proof

1.1 Regard $[0,1]$ as $\Delta^1$. Its two faces are the separate points $0$ and $1$. Prescribe their smooth zero-simplices with values $p,q$ and the constant homotopies $H_0(0,s)=p$, $H_1(1,s)=q$. The faces have empty intersection, so compatibility is vacuous. Under [F2], [F1] supplies a strict smooth path $g$ and a continuous homotopy $H$ satisfying $H(0,s)=p$ and $H(1,s)=q$ for every $s$, as required. [given, F1, F2]

2.1 The neighbourhood hypothesis behind [F1] is concrete in this dimension: disjoint small affine neighbourhoods of the two endpoint faces carry the constant smooth maps $p$ and $q$. The relative-smoothing proof first changes the continuous path, keeping the endpoints fixed, to agree with such a smooth neighbourhood extension near the endpoint union; only then does it apply relative Whitney approximation. Thus no claim is made that mere equality of endpoint values already means smoothness near those endpoints. [F1, step 1.1]

3.1 In the explicit real example define $H(t,s)=(1-s)|t-1/2|+s/2$. This is continuous, equals $f$ at $s=0$, equals the constant smooth path $g$ at $s=1$, and has $H(0,s)=H(1,s)=(1-s)/2+s/2=1/2$ at every time. Its middle value is $H(1/2,s)=s/2$, exhibiting the actual change of the path. If the original path is smooth, [F1] also permits the constant homotopy with $g=f$, including constant paths and a one-point target. An empty target admits no path. The general assertion inherits only countable choice; the displayed real formula needs none. [F1, F2, step 1.1, algebra] ∎

---
id: "def-real-singular-cochain-complex"
kind: "definition"
title: "Real singular cochain complex"
deps: ["def-real-singular-chain-complex", "lem-real-singular-cochains-identify-with-functions-on-the-supplied-simplex-basis", "def-singular-cochain-complex-with-coefficients"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 4; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: "draft"
origin: "pipeline"
---

## Definition

For a topological space $X$, the **real singular cochain complex** is
$$C^k(X;\mathbb R)=\operatorname{Hom}_{\mathbb R}(C_k(X;\mathbb R),\mathbb R),\qquad \delta^k\varphi=\varphi\circ\partial_{k+1}.$$
Here the chains and boundary are [[def-real-singular-chain-complex]], so $C^k=0$ for $k<0$. Addition and scalar multiplication of cochains are pointwise. Precomposition with the real-linear boundary is real-linear. Explicitly, for $k\ge0$,
$$ (\delta^k\varphi)([\sigma])=\sum_{i=0}^{k+1}(-1)^i\varphi([\sigma\circ\delta_i]).$$
There is no extra degree sign. For every chain $c$, $(\delta^{k+1}\delta^k\varphi)(c)=\varphi(\partial_{k+1}\partial_{k+2}c)=0$, so $\delta^2=0$. The same assertion in negative degrees follows from the zero source, including $\delta^{-1}=0$.

By [[lem-real-singular-cochains-identify-with-functions-on-the-supplied-simplex-basis]], evaluation on the supplied basis identifies this with [[def-singular-cochain-complex-with-coefficients]] for coefficient group $\mathbb R$: it is $\operatorname{Hom}_{\mathbb Z}(C_k(X;\mathbb Z),\mathbb R)$, not $\operatorname{Hom}_{\mathbb Z}(C_k(X;\mathbb R),\mathbb R)$. That lemma verifies the identification commutes with coboundary. A cochain may have arbitrary values on infinitely many simplices; it is not required to have finite support.

At degree zero a cochain is a function on points, and its coboundary on a path is the final value minus the initial value. For the empty space all cochains vanish. For a point the unnormalized cochain groups are $\mathbb R$ in each nonnegative degree, with $\delta^k=0$ for even $k$ and $\delta^k=\operatorname{id}$ for odd $k$. No choice is involved.

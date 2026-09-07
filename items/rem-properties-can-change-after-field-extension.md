---
id: "rem-properties-can-change-after-field-extension"
kind: "remark"
title: "Why geometric properties differ from ordinary ones"
status: "draft"
origin: "pipeline"
deps: ["lem-base-extension-field-coordinate-ring", "lem-tensor-ring-presentations-for-base-change", "thm-chinese-remainder-theorem-for-comaximal-ideals"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.4.1–2 and 10.4.G"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---

## Discussion

Scalar extension on affine charts is tensor extension by [[lem-base-extension-field-coordinate-ring]]. For $\mathbb C/\mathbb R$, the presentation formula [[lem-tensor-ring-presentations-for-base-change]] gives
$$\mathbb C\otimes_{\mathbb R}\mathbb C\cong\mathbb C[z]/(z^2+1)\cong\mathbb C\times\mathbb C.$$
The last map follows from [[thm-chinese-remainder-theorem-for-comaximal-ideals]], since $(z-i)$ and $(z+i)$ differ by the unit $2i$. A one-point integral real scheme therefore becomes two disjoint points, losing connectedness, irreducibility and integrality.

For the transcendental element $u$ over $\mathbb F_p$, put $L=\mathbb F_p(u)$ and $k=\mathbb F_p(u^p)$. The elements $1,u,\ldots,u^{p-1}$ form a $k$-basis of $L$: independence follows after clearing denominators and comparing polynomial exponents modulo $p$; their span is closed under multiplication using $u^p\in k$, and is a field because multiplication by a nonzero element is an injective linear map on this finite-dimensional span and hence surjective. Therefore
$$L\otimes_k L\cong L[z]/(z^p-u^p)=L[\epsilon]/(\epsilon^p),\qquad\epsilon=z-u.$$
The class $\epsilon$ is nonzero and nilpotent, so reducedness can also fail. These computations concern ordinary properties; they motivate testing the geometric fibre.

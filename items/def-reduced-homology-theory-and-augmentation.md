---
id: "def-reduced-homology-theory-and-augmentation"
kind: "definition"
title: "Reduced homology theory and augmentation"
deps: ["def-unreduced-homology-theory-on-cw-pairs", "def-zero-simplex-augmentation-and-reduced-singular-homology"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 14§4, pp.110–111"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "14§4, pp.110–111"
    - title: "Hatcher, Algebraic Topology, Axioms for Homology, pp.160–161"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Axioms for Homology, pp.160–161"
status: "draft"
origin: "pipeline"
---

## Definition

For an unreduced theory $h$ and a nonempty based CW space $(X,x_0)$ with $x_0$ a vertex, set
$$\widetilde h_n(X)=\ker\bigl(h_n(X)\xrightarrow{p_*}h_n(*)\bigr).$$
The basepoint inclusion $s$ satisfies $p\circ s=\mathrm{id}$ and splits this augmentation. The underlying ordinary theory is as in [[def-unreduced-homology-theory-on-cw-pairs]].

Independently, a **reduced ordinary theory** on based CW spaces consists of homotopy-invariant covariant functors $\widetilde h_n$, natural suspension isomorphisms $\sigma:\widetilde h_n(X)\to\widetilde h_{n+1}(\Sigma X)$, exact cofiber sequences, and arbitrary wedge additivity. More explicitly, for every based CW inclusion $A\hookrightarrow X$, $\widetilde h_n(A)\to\widetilde h_n(X)\to\widetilde h_n(X/A)$ is exact; the boundary in the extended sequence is the cofiber map to $\Sigma A$ followed by $\sigma^{-1}$. The suspension here is reduced suspension. The dimension axiom is $\widetilde h_n(S^0)=0$ for $n\ne0$, with $\widetilde h_0(S^0)=G$. Wedge additivity includes the empty wedge $*$ and gives $\widetilde h_n(*)=0$.

The empty space is not a based object. If its reduced groups are mentioned, this library uses $\widetilde H_n(\varnothing;G)=0$ in all degrees, as in [[def-zero-simplex-augmentation-and-reduced-singular-homology]]. The augmented-chain convention $\widetilde H_{-1}(\varnothing;G)=G$ is a different extension and is not used here.

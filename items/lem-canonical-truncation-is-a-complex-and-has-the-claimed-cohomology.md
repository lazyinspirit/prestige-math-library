---
id: "lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology"
kind: "lemma"
title: "Canonical truncation is a complex and has the claimed cohomology"
deps: ["def-canonical-truncation-of-a-complex"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/0118"
      title: "12.15, all four chain and four cochain truncations"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Canonical truncations are functorial on complexes and on the homotopy category, with $H^i(\tau^{\leq n}X)=H^i(X)$ for $i\leq n$ and zero for $i>n$, and $H^i(\tau^{\geq n}X)=H^i(X)$ for $i\geq n$ and zero for $i<n$. They preserve quasi-isomorphisms and descend to functors on the derived category.

## Facts & Assumptions

**Given:** Canonical truncations are functorial on complexes and on the homotopy category, with $H^i(\tau^{\leq n}X)=H^i(X)$ for $i\leq n$ and zero for $i>n$, and $H^i(\tau^{\geq n}X)=H^i(X)$ for $i\geq n$ and zero for $i<n$. They preserve quasi-isomorphisms and descend to functors on the derived category.

[F1] Canonical upper truncation uses the kernel at its cut, and lower truncation uses the cokernel at its cut ([[def-canonical-truncation-of-a-complex]]).

## Proof

1.1 Since $d^nd^{n-1}=0$, the prescribed factors through the kernel and cokernel exist. Their adjacent composites are zero by the same equation, while all other composites are unchanged or zero. Maps of complexes preserve kernels and images, hence induce the truncation maps and preserve identities and composition. This also gives zero truncations of the zero complex. [F1, algebra]

1.2 For the upper truncation the cycles in degree $n$ are $\ker d_X^n$ and the boundaries are $\operatorname{im}d_X^{n-1}$; degree $n-1$ has the same kernel because the target inclusion is monic. Other retained degrees are unchanged. For the lower truncation the kernel at $n$ is $(\ker d_X^n)/(\operatorname{im}d_X^{n-1})$ and there are no incoming boundaries; in degree $n+1$ the boundary image is unchanged because the map to the cokernel is epic. Deleted degrees have zero cohomology. [F1, algebra]

1.3 If $f-g=dh+hd$, truncate $h$ unchanged where both adjacent terms remain. For $\tau^{\leq n}$ restrict $h^n$ to $\ker d_X^n$ and set higher components to zero; the homotopy identity at the boundary holds because $d_X^n$ vanishes there. For $\tau^{\geq n}$ compose $h^{n+1}$ with the quotient onto the target cokernel and set lower components to zero; the degree-$n$ identity follows modulo target boundaries. Thus homotopic maps remain homotopic. [F1, algebra]

2.1 The cohomology formulas imply that truncating a quasi-isomorphism is a quasi-isomorphism in every retained or deleted degree. Composing truncation on $K$ with localization therefore inverts denominators, and the localization universal property descends it to $D$. The natural truncation maps descend as well. [step 1.2, step 1.3, algebra] ∎

---
id: "ex-singular-cohomology-of-a-point-from-the-cochain-complex"
kind: "example"
title: "Singular cohomology of a point from the cochain complex"
deps: ["def-real-singular-cohomology"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 B inventory; explicit verification or unresolved witness in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For the one-point space $P$, the unnormalized real singular cochain complex is $\mathbb R\xrightarrow{0}\mathbb R\xrightarrow{1}\mathbb R\xrightarrow{0}\mathbb R\xrightarrow{1}\cdots$ in degrees starting at zero. Thus $H^0(P;\mathbb R)=\mathbb R$ and $H^k(P;\mathbb R)=0$ for $k\ne0$.

## Facts & Assumptions

**Given:** The specified one-point space.

[F1] Real singular cohomology is kernel modulo image of the signed-boundary dual differential ([[def-real-singular-cohomology]]).

## Proof

1.1 There is exactly one simplex $s_k:\Delta^k\to P$ in each nonnegative degree, so $C_k(P;\mathbb R)=\mathbb R[s_k]$ and its real dual is $\mathbb R$ by evaluation on $s_k$. For $k>0$ all faces equal $s_{k-1}$, hence $\partial s_k=(\sum_{i=0}^k(-1)^i)s_{k-1}$. Pairing consecutive signs gives scalar zero for odd $k$ and one for even $k$. The degree-zero boundary is zero by convention. [given, F1, algebra]

2.1 Thus $\delta^k$ is zero for even $k\ge0$ and identity for odd $k$. In degree zero, kernel is $\mathbb R$ and the image from degree minus one is zero. In positive even degree, kernel is $\mathbb R$ and the previous differential is identity, so the quotient is zero. In odd degree, kernel is zero and the previous image is zero, again giving zero. Negative cochain groups and cohomology are zero. This proves all claimed values by the actual quotient definition. [F1, step 1.1, algebra]

3.1 All higher point simplices are degenerate but were retained; discarding them without changing complexes would not be the calculation above. In particular the sole edge has boundary $[P]-[P]=0$ and the sole triangle has boundary $s_1-s_1+s_1=s_1$. The zero vector is the unique class in every positive group. For comparison the empty space has no basis simplices, hence zero in all cochain and cohomology degrees. These canonical identifications use no choice. [F1, step 1.1, step 2.1] ∎

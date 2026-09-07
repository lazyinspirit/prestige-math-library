---
id: "thm-invariance-of-dimension-for-euclidean-spaces"
kind: "theorem"
title: "Invariance of dimension for euclidean spaces"
deps: ["cor-homology-of-spheres", "cor-homotopic-maps-induce-the-same-map-on-singular-homology"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Miller, Algebraic Topology I lecture notes, Corollaries 10.5 and 10.6, pp.23–24"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf"
      locator: "Corollaries 10.5 and 10.6, pp.23–24"
status: published
origin: "pipeline"
proof_strategy: "Separate dimension zero by cardinality. Puncture corresponding points, translate to zero, and exhibit the radial strong deformation retraction R^k minus {0} -> S^(k-1). Reduced integral homology is supported in exactly degree k-1, including k=1. Do not use invariance of domain."
---

## Statement

For nonnegative integers $m,n$, a homeomorphism $\mathbb R^m\to\mathbb R^n$ implies $m=n$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For $n\ge1$, $\widetilde H_k(S^n;G)$ is $G$ for $k=n$ and $0$ otherwise. For $S^0$, $\widetilde H_0(S^0;G)\cong G$ and all other reduced groups vanish. Thus $H_0(S^n;G)\cong G$ for $n\ge1$, whereas $H_0(S^0;G)\cong G\oplus G$. ([[cor-homology-of-spheres]])

[F2] If $f,g:X\to Y$ are homotopic continuous maps, then for every $n\geq 0$ and every abelian group $G$ the induced homomorphisms on singular homology agree: $$H_n(f_\#)=H_n(g_\#):H_n^{\mathrm{sing}}(X;G)\to H_n^{\mathrm{sing}}(Y;G).$$ ([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]])

## Proof

1.1 The space $\mathbb R^0$ is a singleton, whereas $\mathbb R^k$ contains at least two points for $k>0$. Thus if one dimension is zero, a homeomorphism forces the other to be zero. [given]

1.2 Suppose $m,n>0$. A homeomorphism restricts to $\mathbb R^m\setminus\{0\}\cong\mathbb R^n\setminus\{f(0)\}$. Translate the omitted target point to zero. For $k>0$ the formula $R(x,t)=((1-t)+t/|x|)x$ is a strong deformation retraction of $\mathbb R^k\setminus\{0\}$ onto $S^{k-1}$: its scalar is positive and equals one when $|x|=1$. [given, algebra]

2.1 Homotopy invariance in F2, restricted to the augmentation kernels in degree zero, now identifies the reduced homology of these spheres. By F1 with integral coefficients, the only nonzero reduced group of $S^{k-1}$ is $\mathbb Z$ in degree $k-1$, including $k=1$. Equality of this support forces $m-1=n-1$ and hence $m=n$. [F1, F2, step 1.2] ∎

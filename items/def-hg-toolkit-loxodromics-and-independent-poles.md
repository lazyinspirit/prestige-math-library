---
id: "def-hg-toolkit-loxodromics-and-independent-poles"
kind: "definition"
title: "Hg toolkit loxodromics and independent poles"
deps: ["def-hg-toolkit-gromov-sequences-and-boundary-product", "lem-infinite-order-elements-have-positive-stable-translation-length", "lem-asymptotic-gromov-sequences-form-an-equivalence-relation", "def-hg-toolkit-slim-triangles-products-and-four-point-constants", "def-complete-ordered-field"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
sources:
  references:
    - title: "Hamann §5.3 after Proposition 5.2.5"
      url: "https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Definition

Work in a nonempty metric space satisfying the product condition with constant $\kappa\ge0$ of [[def-hg-toolkit-slim-triangles-products-and-four-point-constants]]. An isometry $g:X\to X$ here is bijective. It is **loxodromic** if, for some $o\in X$, there are $\lambda\ge1,c\ge0$ such that
$$\lambda^{-1}|m-n|-c\le d(g^mo,g^no)\le\lambda|m-n|+c\qquad(m,n\in\mathbb Z).$$
Its **positive and negative poles** are the boundary classes of $(g^no)_{n\ge1}$ and $(g^{-n}o)_{n\ge1}$. The verification below proves that these sequences are Gromov, that their classes are distinct and independent of $o$, and that $g$ fixes both classes. Thus the boundary limits in this definition are established. Two loxodromics are **independent** when their two pole sets are disjoint. In the standing finitely generated hyperbolic-group setting, every infinite-order element is loxodromic by [[lem-infinite-order-elements-have-positive-stable-translation-length]].

## Facts & Assumptions

**Given:** The metric space, product constant, bijective isometry and quasi-isometric orbit above. No properness or choice is assumed.

[F1] The product formula, triangle bounds and product inequality hold at every basepoint ([[def-hg-toolkit-slim-triangles-products-and-four-point-constants]]).

[F2] A Gromov sequence and mixed equivalence use joint divergence in both indices ([[def-hg-toolkit-gromov-sequences-and-boundary-product]]); this equivalence and the resulting boundary are independent of the basepoint ([[lem-asymptotic-gromov-sequences-form-an-equivalence-relation]]).

[F3] Every nonempty bounded-below real set has an infimum ([[def-complete-ordered-field]]).

[F4] Infinite-order elements of a finitely generated hyperbolic group have quasi-isometrically embedded integer orbits ([[lem-infinite-order-elements-have-positive-stable-translation-length]]).

## Verification

1.1 Put $a_n=d(o,g^no)$ for $n\ge0$. Isometry and the triangle inequality give $a_0=0$ and $0\le a_{m+n}\le a_m+a_n$. Let $\tau=\inf_{k\ge1}a_k/k$, which exists by F3. For any $\varepsilon>0$, fix $k$ with $a_k/k<\tau+\varepsilon/2$ and put $C_k=\max_{0\le r<k}a_r$. Writing $n=qk+r$ gives $\tau\le a_n/n\le a_k/k+C_k/n<\tau+\varepsilon$ for sufficiently large $n$. Large integers exist because otherwise their real supremum would be exceeded by the successor of a natural within one of it. Thus $a_n/n\to\tau$. The orbit lower bound gives $\tau\ge1/\lambda>0$. [F3, given, algebra]

2.1 Choose a positive integer $N$ so large that $a_N/N<3\tau/2$ and $N\tau/2>4\kappa$. Since $a_{2N}\ge2N\tau$, we have $a_{2N}-a_N>4\kappa$. Set $x_j=g^{jN}o$ for all integers $j$, $L=a_N$ and $K=a_N-a_{2N}/2$. Then $K\ge0$, $d(x_j,x_{j+1})=L$, $(x_{j-1}|x_{j+1})_{x_j}=K$, and $L>2K+4\kappa$. Write $A=K+\kappa$ and $\eta=L-2A>0$. These points and constants are specified by one integer; no sequence of choices is made. [step 1.1, F1, given, algebra]

3.1 For every finite consecutive subchain $x_i,\ldots,x_j$, its endpoint turn satisfies $(x_i|x_{j+1})_{x_j}\le A$ when $j>i$. For $j=i+1$ the product equals $K$. Inductively, if $(x_i|x_j)_{x_{j-1}}\le A$, the product formula gives $(x_i|x_{j-1})_{x_j}=L-(x_i|x_j)_{x_{j-1}}\ge L-A>A$. The product inequality at $x_j$ also gives $K=(x_{j-1}|x_{j+1})_{x_j}\ge\min\{(x_{j-1}|x_i)_{x_j},(x_i|x_{j+1})_{x_j}\}-\kappa$. Since its first entry is greater than $A=K+\kappa$, its second must be at most $A$. This proves the induction. Reversing any finite subchain gives the same bound in the opposite direction, because lengths and local turns remain $L,K$. [step 2.1, F1, algebra]

4.1 Expanding the bound from step 3.1 gives $d(x_i,x_{j+1})\ge d(x_i,x_j)+L-2A$. Starting with one edge, it follows that $d(x_i,x_j)\ge(j-i)\eta$ for $j>i$; the first edge satisfies $L\ge\eta$. In particular both half-orbits escape linearly in their subchain indices. [step 3.1, step 2.1, F1, algebra]

4.2 For $i<m<j$ we claim $(x_i|x_j)_{x_m}\le K+2\kappa$. If $j=m+1$, step 3.1 gives the stronger bound $A$. If $j\ge m+2$, the reversed-chain bound gives $(x_m|x_j)_{x_{m+1}}\le A$, hence $(x_{m+1}|x_j)_{x_m}\ge L-A>K+2\kappa$. Meanwhile step 3.1 gives $(x_i|x_{m+1})_{x_m}\le A$. Apply F1 with bridge $x_j$ to this latter product: $\min\{(x_i|x_j)_{x_m},(x_j|x_{m+1})_{x_m}\}\le A+\kappa=K+2\kappa$. The second entry is larger, forcing the claimed bound on the first. [step 3.1, step 2.1, F1, algebra]

5.1 For $0<m<n$, the product identity and step 4.2 give $(x_m|x_n)_{x_0}=d(x_0,x_m)-(x_0|x_n)_{x_m}\ge m\eta-K-2\kappa$. For $m=n$ the product is $d(x_0,x_m)\ge m\eta$, and symmetry covers $m>n$. Thus $(x_n)_{n\ge1}$ is Gromov with joint lower bound $\min(m,n)\eta-K-2\kappa$. Reversing the sequence proves the same for $(x_{-n})_{n\ge1}$. On the other hand step 4.2 with $i=-m$, middle index zero and $j=n$ bounds every mixed product $(x_{-m}|x_n)_{x_0}$ by $K+2\kappa$. By F2 these two classes are distinct. [step 4.1, step 4.2, F1, F2, algebra]

6.1 Put $D=\max_{0\le r<N}a_r$. If $n=qN+r$, $0\le r<N$, then $d(g^no,x_q)=a_r\le D$ and $d(g^{-n}o,x_{-q})\le D$. Moving one input of a product by distance at most $D$ changes it by at most $D$, by expanding F1 and applying the reverse triangle inequality. Therefore products of the full positive orbit have the lower bound from step 5.1 with $m,n$ replaced by their integer quotients and with $2D$ subtracted. Those quotients tend jointly to infinity. The full negative orbit is likewise Gromov; each full orbit is equivalent to its signed $N$-step orbit by the same estimate with only one moved input. Their mutual products are bounded by $K+2\kappa+2D$ on the tails. They consequently give two distinct poles exactly as claimed. [step 5.1, F1, F2, given, algebra]

7.1 For another point $u$, $d(g^nu,g^no)=d(u,o)$ for every integer $n$. The product perturbation estimate of step 6.1 proves that each signed orbit at $u$ is Gromov and equivalent to its counterpart at $o$. Its distance inequalities differ from those at $o$ by at most $2d(u,o)$, so the loxodromic condition itself is basepoint independent. F2 also permits changing the basepoint used to form products. A bijective isometry acts on boundary classes by applying it to each term: $(gy|gz)_o=(y|z)_{g^{-1}o}$, so F2 proves that this action is well-defined and invertible. Finally $d(g^{n+1}o,g^no)=a_1$ and $d(g^{1-n}o,g^{-n}o)=a_1$; the bounded perturbation argument shows that this action fixes each pole. [step 6.1, F1, F2, given, algebra]

8.1 The two classes define the pole set and hence independence by ordinary disjointness, without choosing representatives for any family. The strict lower orbit bound excludes bounded or singleton spaces and finite-order isometries. All inequalities above include $\kappa=0$, $c=0$ and $N=1$; for $N=1$, the remainder maximum is $D=a_0=0$. Only one positive integer and finite maxima were used, so no AC is required. F4 supplies the stated group specialization. [step 1.1, step 2.1, step 6.1, step 7.1, F4, given] ∎

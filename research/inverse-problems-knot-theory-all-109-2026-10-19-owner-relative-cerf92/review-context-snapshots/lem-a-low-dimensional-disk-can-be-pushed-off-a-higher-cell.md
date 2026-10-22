---
id: "lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell"
kind: "lemma"
title: "A low-dimensional disk can be pushed off a higher cell"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cw-complex-with-closure-finiteness-and-weak-topology","def-skeleta-cw-subcomplex-and-relative-cw-complex","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","thm-closed-subspace-of-a-compact-space-is-compact","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-the-exponential-law"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Lemma 4.10 and proof of Theorem 4.8,
        pp.349–351
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $Z=W\cup_\alpha D^k$ be a finite CW complex obtained from its subcomplex $W$ by attaching one $k$-cell $e$. If $0\le n<k$, every continuous $f:I^n\to Z$, with $I=[0,1]$, has a homotopy to a map into $W$ that fixes $f^{-1}(W)$ pointwise throughout. No choice principle is used. In particular, if $f(\partial I^n)\subseteq W$, the homotopy fixes the boundary. The attaching map need not be injective.

## Facts & Assumptions

[F1] [[def-cw-complex-with-closure-finiteness-and-weak-topology]] and [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] give the Hausdorff attachment quotient, its characteristic map and subcomplex. The open cell is the image of the interior disk by a homeomorphism.

[F2] [[thm-heine-borel-rn]], [[thm-compactness-agrees-with-metric-compactness]], [[thm-closed-subspace-of-a-compact-space-is-compact]] and [[thm-compact-subset-of-a-hausdorff-space-is-closed]] give compactness of cubes and closed coordinate balls, compactness of their closed subsets and closedness of compact images in $Z$.

[F3] [[thm-the-exponential-law]] for the locally compact metric interval identifies continuous $V\times I\to T$ with continuous $V\to C(I,T)$, for arbitrary spaces $V,T$.

## Proof

**Given:** $Z,W,e,k,n,f$ as stated. Use the coordinate homeomorphism $e\cong\mathbb R^k$ obtained by sending $u\in\operatorname{int}D^k$ to $u/(1-\|u\|)$ through the characteristic map. Let $B_a$ denote the closed radius-$a$ coordinate ball.

1.1 Each $B_a\subset e$ is compact by [F2] and the coordinate homeomorphism, hence closed in $Z$. Its open-ball interior is open in $Z$: the preimage in the attachment disk is open away from its boundary and the preimage in $W$ is empty. Consequently $P=f^{-1}(B_2)$ and $A=f^{-1}(B_1)$ are compact subsets of $I^n$, and $C=I^n\setminus f^{-1}(\operatorname{int}B_2)$ is closed and disjoint from $A$. If $A$ is empty, $f$ already misses the coordinate origin; retain $f$ and proceed to the radial construction below. [F1, F2, given]

2.1 Suppose $A\ne\varnothing$ and $n\ge1$. There is a positive $d$ such that every point within distance $d$ of $A$ lies outside $C$. To see this without selecting a neighborhood at every point, take all pairs $(a,r)$ with $a\in A$, $r>0$, and the relative ball $B(a,2r)$ disjoint from $C$. Their balls $B(a,r)$ cover $A$. Compactness gives finitely many such pairs, and the minimum of their radii is a suitable $d$: if $x$ is within $d$ of $a'\in A$, choose a member containing $a'$ and use the triangle inequality. If $C$ is empty any $d>0$ works. Likewise the coordinate map $f:P\to\mathbb R^k$ is uniformly continuous. For all pairs $(a,r)$, $a\in P$, whose relative radius-$2r$ ball has images within $1/8$ of $f(a)$, the radius-$r$ balls cover $P$. A finite subcover and the minimum radius give $\delta>0$ such that $x,y\in P$ and $\|x-y\|<\delta$ imply $\|f(x)-f(y)\|<1/4$. Only finite subcovers and finite minima were used. [F2, step 1.1]

3.1 Subdivide $I^n$ into a finite uniform grid of closed cubes of diameter $h<\min(d/3,\delta)$. Let $K_1$ be the union of cubes meeting $A$ and $K_2$ the union of cubes meeting $K_1$. Every point of $K_2$ is within $2h<d$ of $A$, so $K_2\subseteq P$. A point on the relative boundary of $K_2$ cannot belong to $K_1$: otherwise a cube outside $K_2$ containing that boundary point would meet $K_1$ and would have been included. Triangulate the grid compatibly by first leaving its vertices, then coning each face from its center over the already triangulated boundary, in increasing dimension. The resulting finite simplices have diameter at most $h$ and $K_1,K_2$ are subcomplexes of this triangulation. [step 2.1]

4.1 On $K_2$ let $g$ be the affine interpolation of the coordinate values of $f$ at these finitely many vertices. On every simplex barycentric coordinates are unique, are nonnegative and sum to one; the formulas agree on faces, hence define a continuous $g$. Define the piecewise affine function $\phi$ to be one at vertices in $K_1$ and zero at the other vertices of $K_2$. Then $\phi=1$ on $K_1$ and $\phi=0$ on the relative boundary of $K_2$, by step 3.1. The formula $$f_t(x)=(1-t\phi(x))f(x)+t\phi(x)g(x)\quad(x\in K_2)$$ takes its values in the coordinate cell. Outside $K_2$ retain $f$. The two prescriptions agree on the boundary and paste continuously on $K_2\times I$ and $\overline{I^n\setminus K_2}\times I$, a finite closed cover. Since $K_2\subseteq f^{-1}(e)$, the homotopy fixes $f^{-1}(W)$. Write $F=f_1$; on $K_1$ it is the finite piecewise affine map $g$. [step 1.1, step 3.1]

5.1 The image under $F$ of $I^n\setminus K_1$ misses the coordinate ball of radius $3/4$. Outside $K_2$ it misses $B_1$ by definition of $K_1$. For a point $x\in K_2\setminus K_1$, take a simplex $\sigma$ containing it. This simplex is not contained in $K_1$; fix a point $z\in\sigma\setminus K_1$. Then $\|f(z)\|>1$, while uniform continuity and the diameter bound in step 3.1 give $\|f(y)-f(z)\|<1/4$ for all $y\in\sigma$. Convexity puts $g(x)$ and $F(x)$ in the same radius-$1/4$ ball about $f(z)$, so $\|F(x)\|>3/4$. This estimate applies only to points mapped into $e$; points mapped to $W$ already miss all its coordinate balls. [step 2.1, step 3.1, step 4.1]

6.1 A finite union of affine subspaces of dimension at most $n<k$ cannot fill a nonempty open ball in $\mathbb R^k$. Here is a finite algebraic verification. For each subspace its spanning vectors have rank less than $k$; row elimination gives a nonzero vector $a$ orthogonal to them, so the subspace lies in a hyperplane $a\cdot x=b$. For the finite list of nonzero normals, substitute $v(t)=(1,t,\ldots,t^{k-1})$. Each $a\cdot v(t)$ is a nonzero polynomial and has finitely many roots: division by $t-t_0$ at a root and induction on degree prove that assertion. Choose an integer $t$ outside the finite union of root sets. The line $s\mapsto sv(t)$ meets each affine hyperplane in at most one point. An interval of sufficiently small $s$ lies in the specified ball centered at zero and contains a point outside that finite list. Thus for the finitely many affine images of simplices of $K_1$, some $p\in\operatorname{int}B_{1/2}$ is omitted by $F(K_1)$; step 5.1 shows that $p$ is omitted by all of $F$. All the linear algebra and selections here are finite. [step 4.1, step 5.1]

7.1 The cases excluded from the mesh construction also give an omitted point. If $A$ is empty use the coordinate origin, as in step 1.1. If $n=0$, the domain is one point; if its image lies in $W$, the constant homotopy already solves the problem. Otherwise choose one of two fixed distinct points of $e$ unequal to that image, leaving $f$ unchanged. Thus in every case there is a map $F$ homotopic to $f$ rel $f^{-1}(W)$ and a point $p\in e\setminus F(I^n)$. [step 1.1, step 4.1, step 5.1, step 6.1]

8.1 Let $q\in\operatorname{int}D^k$ be the unique characteristic preimage of $p$. For $u\in D^k\setminus\{q\}$ set $v=u-q$ and $$\lambda(u)=\frac{-q\cdot v+\sqrt{(q\cdot v)^2+(1-\|q\|^2)\|v\|^2}}{\|v\|^2}.$$ This is the positive solution of $\|q+\lambda v\|=1$, by expanding the square. Since $q$ is interior and $u$ is in the disk, $\lambda\ge1$, with equality for $u$ on its boundary. The homotopy $R_t(u)=q+((1-t)+t\lambda(u))(u-q)$ lies on the ray segment between $u$ and its boundary endpoint, stays in the convex disk, never equals $q$, and fixes the boundary. All formulas are continuous since $\|v\|^2>0$. [F1, step 7.1]

9.1 The attachment quotient restricted over $Z\setminus\{p\}$ is still quotient: this subset is open, its inverse image is saturated and open, and any set open in that inverse image is open upstairs, so the quotient test descends it. On its domain, the homotopy given by step 8.1 on the punctured disk and the identity on $W$ agrees on the attaching identifications. It descends continuously even with the ordinary product topology on time. Indeed, for any quotient $Q:E\to V$, a map $H:V\times I\to T$ continuous after $Q\times\mathrm{id}$ has a well-defined transpose; [F3] makes its composite with $Q$ continuous, the quotient test makes the transpose continuous, and [F3] makes $H$ continuous. Applied here, this proves a deformation retraction of $Z\setminus\{p\}$ onto $W$. Compose it with $F$ and concatenate with the first homotopy. The result ends in $W$ and fixes $f^{-1}(W)$. [F3, step 7.1, step 8.1]

10.1 No infinite family of witnesses has been selected. The grid and its triangulation are finite; neighborhood families were taken in their entirety before finite subcovers; omitted-point linear algebra involves only finitely many hyperplanes. The cases $n=0$ and $f^{-1}(B_1)=\varnothing$ were treated separately. The inequality $n<k$ is used exactly to find proper affine hyperplanes; no equal-dimension claim is made. At times zero and one the stated endpoint maps follow from the explicit formulas. Boundary fibers of a nonregular attaching map remain fixed, so the quotient argument does not require their injectivity. This proves the claimed choice-free relative homotopy. [step 2.1, step 3.1, step 6.1, step 7.1, step 9.1] ∎

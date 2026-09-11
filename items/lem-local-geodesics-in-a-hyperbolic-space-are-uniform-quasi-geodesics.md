---
id: "lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics"
kind: "lemma"
title: "Local geodesics in a hyperbolic space are uniform quasi geodesics"
deps: ["def-hg-toolkit-local-geodesics-and-hausdorff-control", "lem-slim-triangles-imply-the-gromov-product-inequality", "lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh"]
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
    - title: "Druţu–Kapovich, revised Theorem 11.45 and Lemma 11.46, pp.375–378"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For $\delta>0$, every $6\delta$-local arc-length geodesic in a geodesic $\delta$-slim space is a $(3,4\delta)$-quasi-geodesic. The same therefore holds with any locality radius $k\ge6\delta$. For $\delta=0$, every $k$-local geodesic with $k>0$ is a global geodesic.

## Facts & Assumptions

**Given:** A path $q:I\to X$ and constants satisfying the statement.

[F1] Arc length, local geodesics and real-interval quasi-geodesic inequalities are defined in [[def-hg-toolkit-local-geodesics-and-hausdorff-control]].

[F2] The successive $3\delta$ halfspaces have separation $\delta$, strict nesting and endpoint-to-bisector bounds $3\delta/2$, by [[lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh]].

[F3] Zero-slimness implies the product inequality with constant zero by [[lem-slim-triangles-imply-the-gromov-product-inequality]].

## Proof

1.1 First let $\delta>0$ and fix $[s,t]\subseteq I$. Put $L=t-s$, $n=\lfloor L/(3\delta)\rfloor$, $\sigma=L-3n\delta$, and $x_i=q(s+3i\delta)$ for $0\le i\le n$. Consecutive triples lie on an isometrically parametrized subpath of length $6\delta$. For $0\le i<n$ put $H_i=\{z:d(z,x_{i+1})\le d(z,x_i)\}$ and $B_i=\{z:d(z,x_{i+1})=d(z,x_i)\}$. For $i<n-1$, F2 gives $H_{i+1}\subset\{z:d(z,x_{i+1})<d(z,x_i)\}\subset H_i$ and $\operatorname{dist}(B_i,B_{i+1})\ge\delta$. [F1, F2, given]

1.2 Now suppose $\delta=0$. A geodesic segment is closed: if $p$ has distance zero from the image of $\gamma:[0,\ell]\to X$, set $r=d(\gamma(0),p)$. Arbitrarily close image points $\gamma(u)$ satisfy $|u-r|\le d(\gamma(u),p)$, so $r\in[0,\ell]$ and $d(\gamma(r),p)=0$. A zero-slim degenerate triangle consisting of two segments between the same endpoints and a constant side consequently forces their images to agree; radial parameters then agree too. For any triangle $(a,b,c)$ let $\alpha=(b|c)_a$. The points of $[a,b],[a,c]$ at radius $\alpha$ coincide: apply F3 twice, through $b$ and $c$, to see their product at $a$ is at least $\alpha$ and hence their distance zero. Call the common point $m$. The equality $d(b,c)=d(a,b)+d(a,c)-2\alpha=d(b,m)+d(m,c)$ shows that the concatenated tails form the unique geodesic $[b,c]$. Uniqueness prevents any further common tail. Thus every triangle is a tripod. [F3, given, algebra]

2.1 Suppose $n\ge2$. A geodesic $\gamma:[0,d(x_0,x_n)]\to X$ from $x_0$ to $x_n$ starts outside every $H_i$ and ends inside every $H_i$ by nesting. For each $i$ its first entry time $t_i$ into $H_i$ exists and lies in $B_i$: the inverse image of $H_i$ is nonempty and closed, so its infimum belongs to it, and continuity of the distance difference forces equality at first entry. This closed-infimum assertion follows by taking real parameters approaching the infimum; continuity passes the nonpositive inequality to their limit. Nesting gives $t_i\le t_{i+1}$. F2 now gives $t_0\ge3\delta/2$, $t_{i+1}-t_i\ge\delta$, and $d(x_0,x_n)-t_{n-1}\ge3\delta/2$. Adding yields $d(x_0,x_n)\ge(n+2)\delta\ge n\delta$. For $n=0,1$, the bound $d(x_0,x_n)\ge n\delta$ follows directly from locality. [step 1.1, F2, F1]

3.1 The final subarc has length $\sigma<3\delta$. Thus $d(q(s),q(t))\ge n\delta-\sigma=L/3-4\sigma/3\ge L/3-4\delta$. Arc length gives $d(q(s),q(t))\le L\le3L+4\delta$. Since $s,t$ were arbitrary, this is the required quasi-geodesic inequality. Increasing the locality radius preserves its $6\delta$ hypothesis. [step 2.1, F1, algebra]

4.1 Subdivide any compact parameter interval into finitely many equal positive pieces of length less than $k/2$; a zero-length interval already is geodesic. Each piece is geodesic. Suppose the path through the first $j$ pieces is geodesic and append the next piece at $b$. In the tripod formed by the old starting point, $b$, and the new endpoint, failure of their concatenation to be geodesic would mean both segments from $b$ initially follow the same positive-length leg. Choose $h>0$ smaller than that leg and both adjacent mesh lengths. The points at parameter distances $h$ before and after the join would coincide, although their parameter distance is $2h<k$. This contradicts locality. Finite induction proves the compact restriction geodesic, hence the whole interval map is geodesic. Only finitely many auxiliary segments have been chosen for each restriction; AC is not used. [step 1.2, F1, given] ∎

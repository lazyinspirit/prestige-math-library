---
id: "thm-topological-collaring-for-manifold-boundaries"
kind: "theorem"
title: "Compact topological manifold boundaries admit collars"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-topological-manifold-with-and-without-boundary","thm-local-homology-detects-interior-points-boundary-points-and-dimension","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-heine-borel-rn","thm-finite-products-of-compact-spaces","thm-quotient-universal-property"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Proposition 3.42 and complete proof, printed
        p.253
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: May, A Concise Course in Algebraic Topology, Chapter 21 §4
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

If $M$ is a compact topological manifold with boundary $A=\partial M$, there is an open neighborhood $V$ of $A$ and a homeomorphism
$$c:A\times[0,1)\xrightarrow{\sim}V,\qquad c(x,0)=x.$$
Consequently $A\hookrightarrow M$ is an unbased cofibration, and $M\setminus A\hookrightarrow M$ is a homotopy equivalence. The manifold is Hausdorff and second countable by convention. All three conclusions require no AC.

## Facts & Assumptions

[F1] [[def-topological-manifold-with-and-without-boundary]] gives half-space charts and the dimension-zero convention. [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] proves that all charts agree on interior and boundary membership.

[F2] [[thm-heine-borel-rn]] makes closed bounded chart balls compact. [[thm-compact-subset-of-a-hausdorff-space-is-closed]] makes their images closed in $M$ and in its boundary.

[F3] [[thm-finite-products-of-compact-spaces]] gives compactness of products with closed intervals using only finite choice.

[F4] [[thm-quotient-universal-property]] identifies continuous maps on an attached space with compatible continuous maps before the identification.

## Proof

**Given:** The compact manifold $M$. Write $A=\partial M$. If $A=\varnothing$, take $V=\varnothing$, the empty collar, the identity as the interior equivalence, and extend any compatible initial map $f:M\to Z$ by $H(y,t)=f(y)$. Hence assume $A\ne\varnothing$ and $n\ge1$.

1.1 The interior is open by [F1]: in a chart an interior point has a smaller Euclidean ball missing the model boundary. Thus $A$ is closed and compact. Restricting each boundary chart to the model hyperplane gives charts for the Hausdorff second-countable boundary $A$, of dimension $n-1$ and without boundary. We can take the ambient boundary charts $W_i$ homeomorphic to all of $\mathbb R^{n-1}\times[0,\infty)$. Indeed a product $B_r^{n-1}\times[0,r)$ inside an original chart can be sent there by the horizontal map $y\mapsto y/(r-\lVert y\rVert)$ and vertical map $v\mapsto v/(r-v)$; their inverses are $z\mapsto rz/(1+\lVert z\rVert)$ and $t\mapsto rt/(1+t)$. [F1, F2, given]

2.1 Attach an external collar by defining $M'=(M\sqcup(A\times[0,1]))/((x,0)\sim x)$. The original $M$ and the external collar embed with their usual topologies. For example an open set $O\subset M$ extends to the quotient-open set consisting of $O$ and $(O\cap A)\times[0,\epsilon)$ for $0<\epsilon\le1$; positive external heights have their ordinary product neighborhoods. These descriptions also prove that $M'$ is Hausdorff. Two points in $M$ can use disjoint open neighborhoods extended in this way; two external points have separated base or height neighborhoods; to separate an external point of height $t>0$ from a point in $M$, use a collar cutoff $\epsilon<t$ for the latter and an external neighborhood above $\epsilon$ for the former. Compatibility at height zero is exactly the quotient topology in [F4]. Each half-space chart from step 1.1, joined to its external part, therefore has signed coordinates $(x,s)$ with $s\le0$ inside $M$ and $0\le s\le1$ outside, the two copies at zero identified. The map across zero and its inverse are continuous by finite closed pasting and [F4]. [F4, step 1.1]

2.2 There are finitely many continuous functions $b_i:A\to[0,1]$ whose positive sets cover $A$ and whose supports are compact subsets of $A\cap W_i$. To construct them, in any boundary chart take the radial function $\max(0,1-\lVert y-y_0\rVert/r)$ with its closed radius-$r$ ball contained in that chart, and extend it by zero on the rest of $A$. Its support is compact by [F2], hence closed, and is contained in the chart; at a point off that compact support an open neighborhood has function identically zero, proving continuity of the extension. The positive sets of all such functions cover $A$, so compactness gives a finite subcover and hence finitely many functions. For $n=1$, boundary charts are singletons and use the constant value-one function there, extended by zero. Set $\varphi_i=b_i/(\sum_jb_j)$. The denominator is positive everywhere, so these are continuous, have the same compact supports and sum to $1$. [F1, F2, step 1.1]

3.1 Put $\psi_k=\varphi_1+\cdots+\varphi_k$, $\psi_0=0$, and let $M_k\subset M'$ consist of $M$ and the external points $(x,t)$ with $0\le t\le\psi_k(x)$. Thus $M_0=M$ and $M_m=M'$ for the finite number $m$ of functions. In the signed coordinates for $W_k$ take its inner collar with $-1\le s\le0$. Define $h_k:M_{k-1}\to M_k$ to be identity outside this collar and the external segments over $A\cap W_k$, and on their part with $-1\le s\le\psi_{k-1}(x)$ set $$h_k(x,s)=\left(x,-1+(s+1)\frac{1+\psi_k(x)}{1+\psi_{k-1}(x)}\right).$$ The denominator is at least one. This increasing affine map sends the bottom $-1$ to $-1$ and the old top $\psi_{k-1}(x)$ to the new top $\psi_k(x)$. If $\varphi_k(x)=0$ it is the identity on the entire segment. [F3, F4, step 2.1, step 2.2]

4.1 The formula in step 3.1 defines a homeomorphism globally. In its signed-coordinate region it is continuous, including across zero; along the bottom it agrees with the identity on the region below. All points where it can differ from identity lie over the compact base support of $\varphi_k$. The product of that support with $[-1,1]$ is compact by [F3], and its embedded image in the Hausdorff $M'$ is closed by [F2]. Away from this set the map is identity; at a point of the set all local pasting is within the signed-coordinate chart. Thus there is no continuity issue at the edge of the chart. The inverse has the same support and the formula $$h_k^{-1}(x,s')=\left(x,-1+(s'+1)\frac{1+\psi_{k-1}(x)}{1+\psi_k(x)}\right),$$ again continuous and fixing the bottom. Direct substitution proves both composites identities, and the increasing interval bijections plus the fixed complement prove bijectivity on the indicated $M_k$. [F2, F3, F4, step 3.1]

5.1 The finite composite $h=h_m\cdots h_1:M\to M'$ is a homeomorphism. For $x\in A$, the successive maps take the graph point $(x,\psi_{k-1}(x))$ to $(x,\psi_k(x))$, even when that stage's function is zero. Hence $h(x)=(x,1)$. The external region $A\times(0,1]$ is open in $M'$: its preimage under the quotient has empty intersection with $M$ and is open in $A\times[0,1]$. Therefore $$c(x,t)=h^{-1}(x,1-t)\quad(0\le t<1)$$ is the required homeomorphism onto its open image $V$, and $c(x,0)=x$. [F4, step 3.1, step 4.1]

6.1 Fix $b=1/2$. Within $c(A\times[0,b])$ define a homotopy by $c(x,v)\mapsto c(x,v+s(b-v)/2)$ for $s\in[0,1]$, and use identity outside $c(A\times[0,b))$. The formulas agree at $v=b$ and are continuous by finite closed pasting: the first collar segment is compact by [F3], hence closed by [F2], and the complementary piece is closed because $c(A\times[0,b))$ is open. At $s=0$ this is identity, and at $s=1$ it sends every boundary point to positive height while preserving the interior throughout. Its terminal map $r:M\to M\setminus A$ is continuous into that subspace. The homotopy gives $ir\simeq1_M$, and its restriction to the interior gives $ri\simeq1_{M\setminus A}$, where $i$ is the inclusion. Thus $i$ is a homotopy equivalence. [F2, F3, step 5.1]

6.2 For HEP put $b=1/2$ again and retract $M\times I$ onto $T=M\times\{0\}\cup A\times I$. Outside $c(A\times[0,b))$ send $(y,t)$ to $(y,0)$. At $y=c(x,v)$, $0\le v<b$, put $a(v)=v/(b-v)$. If $t\le a(v)$, send it to $$\left(c\left(x,\frac{b(a(v)-t)}{1+a(v)-t}\right),0\right);$$ if $t\ge a(v)$, send it to $(x,t-a(v))\in A\times I$. At equality both give $(x,0)$. At $v=0$ it is $(x,t)$, and at $t=0$ its first branch gives $(c(x,v),0)$. As $v$ approaches $b$ from below, $a(v)$ tends to infinity, uniformly dominating $t\in[0,1]$, and the new collar height tends to $b$; hence the formula extends continuously to the outside rule. The collar extends beyond $b$, so this limiting continuity is checked within its actual coordinate chart. These local formulas define a continuous map into the subspace $T$, fixing $T$ pointwise. To verify the unbased cofibration assertion directly, let $Z$ be any topological space, let $f:M\to Z$ and $g:A\times I\to Z$ be continuous, and suppose $g(x,0)=f(x)$ for every $x\in A$. Paste $f$ on $M\times\{0\}$ and $g$ on $A\times I$, the two closed pieces of $T$, and compose with the retraction. Finite closed pasting proves a continuous $H:M\times I\to Z$ satisfying $H(y,0)=f(y)$ and $H(x,t)=g(x,t)$ for all $x\in A$. This is the unbased homotopy extension property for every target $Z$, without appealing to a later definition. [F2, F3, step 5.1, construct]

7.1 Steps 5.1, 6.1 and 6.2 prove all assertions. Empty boundary, empty $M$ and dimension zero were settled in the Given paragraph; a compact zero-manifold has no boundary. One half-chart and zero individual bump functions cause no difficulty, since denominators in step 3.1 remain at least one and a zero increment is identity. The geometric endpoints $s=-1$, external height $1$, collar height $b$, and HEP times $0,1$ were checked explicitly. No chain or simplex convention is involved in this topological theorem. All covers are the families of every available chart bump, thinned only once to a finite subcover; all subsequent choices are finite and all maps have displayed formulas. No AC is used. [F1, F2, F3, F4, step 3.1, step 4.1, step 5.1, step 6.1, step 6.2] ∎

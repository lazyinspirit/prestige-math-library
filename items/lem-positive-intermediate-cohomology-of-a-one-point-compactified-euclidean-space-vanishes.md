---
id: lem-positive-intermediate-cohomology-of-a-one-point-compactified-euclidean-space-vanishes
kind: lemma
title: "Positive intermediate cohomology of compactified Euclidean space vanishes"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-one-point-compactification", "thm-one-point-compactification-properties", "def-euclidean-spheres-and-closed-balls", "cor-rn-is-locally-compact-and-sigma-compact", "lem-metrics-on-rn", "lem-product-topology-on-rn", "cor-heine-borel-in-the-product-topology", "cor-metrizability-and-first-countability-are-hereditary", "def-metrizable-space", "def-hausdorff-space", "thm-product-universal-property", "lem-algebra-of-continuous-real-maps-on-a-space", "def-continuous-map-top", "thm-compactness-under-continuous-maps", "def-homeomorphism-and-open-maps", "thm-topological-universal-coefficient-short-exact-sequence-for-cohomology", "cor-homology-of-spheres", "cor-integral-cohomology-detects-adjacent-homology-torsion", "def-ext-via-a-projective-resolution-of-the-first-variable", "prop-singular-cohomology-is-contravariantly-functorial", "def-axiom-of-choice"]
justified_by: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "§11, Theorem 11.3, Corollary 11.4 and projective-space example, printed pp.119–121"
---

## Statement

Assume AC. For $N\ge2$, $0<q<N$, and $R=\mathbb Z$ or $\mathbb F_2$, the one-point compactification $(\mathbb R^N)^+$ of $\mathbb R^N$ ([[def-one-point-compactification]]) is homeomorphic to $S^N$ ([[def-euclidean-spheres-and-closed-balls]]) and has $H^q((\mathbb R^N)^+;R)=0$ ([[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]], [[def-axiom-of-choice]]).

## Facts & Assumptions

**Given:** integers $N\ge2$ and $0<q<N$, a coefficient ring $R=\mathbb Z$ or $\mathbb F_2$, and the one-point compactification $(\mathbb R^N)^+=(\mathbb R^N)^{*}$ with added point $\infty$ ([[def-one-point-compactification]]).

[F1] The topology $\mathcal T^{*}$ of $X^{*}=X\cup\{\infty\}$ consists of the open sets of $X$ together with the sets $X^{*}\setminus C$ for $C\subseteq X$ closed in $X$ and a compact subset of $X$; $X^{*}$ is compact, $X$ is an open subspace with its original topology, and $X^{*}$ is Hausdorff exactly when $X$ is locally compact and Hausdorff ([[def-one-point-compactification]], [[thm-one-point-compactification-properties]]).

[F2] $\mathbb R^N$ is locally compact, its topology is the Euclidean metric topology and the product topology, and $S^N=\{y\in\mathbb R^{N+1}:\|y\|_2=1\}$ carries the subspace topology, hence is metrizable and Hausdorff ([[cor-rn-is-locally-compact-and-sigma-compact]], [[lem-metrics-on-rn]], [[lem-product-topology-on-rn]], [[def-euclidean-spheres-and-closed-balls]], [[cor-metrizability-and-first-countability-are-hereditary]], [[def-metrizable-space]], [[def-hausdorff-space]]).

[F3] A map into a finite product is continuous exactly when its components are; sums, products and quotients of continuous real-valued functions with nowhere-vanishing denominator are continuous, and $x\mapsto x_i$ and $x\mapsto\|x\|_2^2$ are continuous on $\mathbb R^N$ ([[thm-product-universal-property]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[lem-metrics-on-rn]], [[def-continuous-map-top]]).

[F4] A closed bounded subset of $\mathbb R^N$ is compact ([[cor-heine-borel-in-the-product-topology]]).

[F5] A continuous bijection from a compact space onto a Hausdorff space is a homeomorphism, and a continuous map into a subspace that corestricts to the image is continuous as a map onto that image ([[thm-compactness-under-continuous-maps]], [[def-homeomorphism-and-open-maps]]).

[F6] Under AC, for every space $X$, abelian group $G$ and $n\ge0$ the evaluation sequence is natural and exact ([[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]], [[def-axiom-of-choice]]).

[F7] For the sphere $S^N$ with $N\ge2$ one has $H_0(S^N;\mathbb Z)\cong\mathbb Z$ and $H_j(S^N;\mathbb Z)=0$ for $0<j<N$ and for $j>N$; this is the case $N\ge1$ of the reduced-homology computation of [[cor-homology-of-spheres]]. For every abelian group $G$ the explicit free resolution $0\to0\to\mathbb Z\xrightarrow{1}\mathbb Z\to0$ computes $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z,G)=0$ by the definition of $\operatorname{Ext}$ (the same resolution computation performed for $G=\mathbb Z$ in [[cor-integral-cohomology-detects-adjacent-homology-torsion]]), and $\operatorname{Ext}^1_{\mathbb Z}(0,G)=\operatorname{Hom}_{\mathbb Z}(0,G)=0$ holds trivially ([[def-ext-via-a-projective-resolution-of-the-first-variable]]).

[F8] A homeomorphism induces isomorphisms on singular cohomology, contravariantly in the map ([[prop-singular-cohomology-is-contravariantly-functorial]]).

## Proof

1.1 Define $h:(\mathbb R^N)^{*}\to S^N$ by $$h(x)=\Big(\tfrac{2x}{1+\|x\|_2^2},\ \tfrac{\|x\|_2^2-1}{\|x\|_2^2+1}\Big),\qquad h(\infty)=(0,\dots,0,1),$$ writing $\|x\|_2^2$ for the squared Euclidean norm. For $x\in\mathbb R^N$ the identity $(2\|x\|_2)^2+(\|x\|_2^2-1)^2=(\|x\|_2^2+1)^2$ shows $\|h(x)\|_2=1$, so $h(x)\in S^N$; and $h(x)\neq(0,\dots,0,1)$ since $\|x\|_2^2-1=\|x\|_2^2+1$ is impossible. For $y=(y_0,\dots,y_N)\in S^N$ with $y_N\neq1$ put $\psi(y):=(y_0,\dots,y_{N-1})/(1-y_N)\in\mathbb R^N$. If $r=\|\psi(y)\|_2$ then $r^2=(1-y_N^2)/(1-y_N)^2=(1+y_N)/(1-y_N)$, so $1+r^2=2/(1-y_N)$ and $r^2-1=2y_N/(1-y_N)$; hence $h(\psi(y))=y$. Conversely, if $h(x)=(z,t)$ then $1-t=2/(1+\|x\|_2^2)$ and $\psi(h(x))=2x/(1+\|x\|_2^2)\cdot(1+\|x\|_2^2)/2=x$. So $h$ is a bijection with inverse $\psi$ on $S^N\setminus\{(0,\dots,0,1)\}$ and $\infty\mapsto(0,\dots,0,1)$. [F3, algebra]

2.1 The map $h$ is continuous. On $\mathbb R^N$ its components $x\mapsto 2x_i/(1+\|x\|_2^2)$ and $x\mapsto(\|x\|_2^2-1)/(\|x\|_2^2+1)$ are quotients with denominator $1+\|x\|_2^2\ge1$ never zero, hence continuous by [F3]; the components are continuous, so $h|_{\mathbb R^N}$ is continuous into $\mathbb R^{N+1}$ and, since its image lies in $S^N$, continuous into the subspace $S^N$ by [F5]. At $\infty$, let $V\subseteq S^N$ be open with $(0,\dots,0,1)\in V$. The subspace topology on $S^N$ is the metric topology of the maximum metric, so there is $r>0$ such that every $y\in S^N$ with $\|y-(0,\dots,0,1)\|_\infty<r$ lies in $V$; choose $M\ge1$ with $1/M<r/2$ and put $C:=\{x\in\mathbb R^N:\|x\|_2\le M\}$, which is closed and bounded, hence compact by [F4]. For $x\notin C$ one has $\|x\|_2>M\ge1$, so $|2x_i/(1+\|x\|_2^2)|\le 2\|x\|_2/\|x\|_2^2=2/\|x\|_2<2/M<r$ and $|(\|x\|_2^2-1)/(\|x\|_2^2+1)-1|=2/(\|x\|_2^2+1)\le 2/\|x\|_2^2<2/M<r$; hence $h(x)\in V$. Therefore $W:=(\mathbb R^N)^{*}\setminus C$ is open in $(\mathbb R^N)^{*}$ by [F1], contains $\infty$, and satisfies $h(W)\subseteq V$. [F1, F2, F3, F4, F5, step 1.1]

3.1 Hence $h$ is a homeomorphism. Indeed $\mathbb R^N$ is locally compact and Hausdorff by [F2], so $(\mathbb R^N)^{*}$ is compact and Hausdorff by [F1], while $S^N$ is Hausdorff by [F2]; a continuous bijection from a compact space onto a Hausdorff space is a homeomorphism by [F5]. Consequently $h^{*}:H^q(S^N;R)\to H^q((\mathbb R^N)^{*};R)$ is an isomorphism for every $q$ by [F8]. [F1, F2, F5, F8, step 1.1, step 2.1]

4.1 By the homeomorphism of step 3.1 it suffices to compute $H^q(S^N;R)$. By [F7], $H_q(S^N;\mathbb Z)=0$ for $0<q<N$, while $H_0(S^N;\mathbb Z)\cong\mathbb Z$. Apply the universal coefficient sequence of [F6] in degree $q$ with $X=S^N$ and $G=R$: $$0\longrightarrow\operatorname{Ext}^1_{\mathbb Z}(H_{q-1}(S^N;\mathbb Z),R)\longrightarrow H^q(S^N;R)\longrightarrow\operatorname{Hom}_{\mathbb Z}(H_q(S^N;\mathbb Z),R)\longrightarrow0.$$ If $q\ge2$ then $1\le q-1<q\le N-1$, so both $H_{q-1}$ and $H_q$ vanish and both outer terms are zero by [F7]. If $q=1$ (so $N\ge2$) then $H_1(S^N;\mathbb Z)=0$ and $H_0(S^N;\mathbb Z)\cong\mathbb Z$, so the right term is $\operatorname{Hom}_{\mathbb Z}(0,R)=0$ and the left term is $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z,R)=0$ by [F7]. In both cases exactness forces $H^q(S^N;R)=0$, for $R=\mathbb Z$ and for $R=\mathbb F_2$ alike. [F6, F7, step 3.1, algebra]

5.1 Combining steps 3.1 and 4.1, $H^q((\mathbb R^N)^{*};R)\cong H^q(S^N;R)=0$ for $0<q<N$, which is the claimed vanishing for the one-point compactification. The case $N=2$, $q=1$, both coefficient rings, and both orders of the two outer terms in the universal coefficient sequence are covered by the case distinction of step 4.1; the empty coefficient ring and negative $q$ are excluded by the hypotheses, and no further choice beyond AC, used through [F6] and [F7], enters. [F6, step 3.1, step 4.1] ∎

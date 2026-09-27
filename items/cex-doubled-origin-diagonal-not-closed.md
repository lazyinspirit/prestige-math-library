---
id: cex-doubled-origin-diagonal-not-closed
kind: counterexample
title: The doubled-origin diagonal is not closed
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-doubled-origin-not-separated, def-diagonal-morphism-scheme, thm-affine-fibre-product-tensor-ring]
justified_by: []
aliases: []
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.7 and Example 26.21.8, printed p.41"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, Exercise 11.3.I, printed p.309"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
---

## Statement refuted

For the affine line $D$ with doubled origin over a field $k$, the diagonal
image $\Delta_{D/k}(D)$ is a closed subset of $D\times_kD$, so that the
diagonal of $D\to\operatorname{Spec}k$ is at least set-theoretically closed.

## Facts & Assumptions

**Given:** A field $k$ and the affine line $D$ with doubled origin over $k$, with its two charts $U=\operatorname{Spec}k[x]$, $V=\operatorname{Spec}k[y]$ glued by the identity on $D(x)\cong D(y)$, and with diagonal $\Delta=\Delta_{D/k}$.

[F1] $D$ is obtained by gluing $U$ and $V$ by the identity on the complement of the origin; the two copies of every nonzero point are identified and the two closed points $0_1\in U$, $0_2\in V$ remain distinct. Moreover $D\to\operatorname{Spec}k$ is quasi-separated but not separated. ([[cor-doubled-origin-not-separated]])

[F2] The diagonal satisfies $\operatorname{pr}_1\Delta=\operatorname{id}_D=\operatorname{pr}_2\Delta$, so it carries a point $d$ of $D$ to the pair $(d,d)$. ([[def-diagonal-morphism-scheme]])

[F3] For ring maps $k\to B$, $k\to C$ one has $\operatorname{Spec}B\times_{\operatorname{Spec}k}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_kC)$; in particular the product of two affine charts of $D$ is affine. ([[thm-affine-fibre-product-tensor-ring]])



## Counterexample

1.1 By [F3] the product $D\times_kD$ is covered by the four open subschemes $U\times_kU$, $U\times_kV$, $V\times_kU$, $V\times_kV$, of which the cross term is $U\times_kV=\operatorname{Spec}(k[x]\otimes_kk[y])=\operatorname{Spec}k[x,y]$, with $\operatorname{pr}_1$ the first projection and $\operatorname{pr}_2$ the second. [F3, given]

2.1 By [F2] the inverse image of $U\times_kV$ under $\Delta$ is $U\cap V$, and the restriction of $\Delta$ to it is the morphism $U\cap V\to U\times_kV$ whose composites with $\operatorname{pr}_1$ and $\operatorname{pr}_2$ are the two inclusions; under the identification of step 1.1 it is the morphism of affine schemes corresponding to the ring map $k[x,y]\to\Gamma(U\cap V,\mathcal O_D)$ with $x\mapsto t$, $y\mapsto t$, where $U\cap V$ is the glued $\mathbb G_m=\operatorname{Spec}k[t,t^{-1}]$. [F1, F2, step 1.1]

2.2 The point $(0,0)\in U\times_kV$ is not in $\Delta(D)$: its first projection is the closed point $0_1$ of $U$ and its second projection is the closed point $0_2$ of $V$, and these are distinct points of $D$ by [F1]. Were $(0,0)=\Delta(d)$ for some $d\in D$, then $\operatorname{pr}_1\Delta(d)=0_1$ and $\operatorname{pr}_2\Delta(d)=0_2$ would force $0_1=d=0_2$ by [F2], a contradiction. [F1, F2, step 1.1]

3.1 The image of the morphism of step 2.1 is the set $V(x-y)\setminus\{(0,0)\}$: a point of $U\cap V$ has coordinate $t\ne0$, so its image satisfies $x=y\ne0$, and conversely a point of $\operatorname{Spec}k[x,y]$ with $x=y\ne0$ lies in $D(xy)$ and is the image of the corresponding nonzero value of $t$. [F1, step 2.1, algebra]

4.1 The set $V(x-y)\setminus\{(0,0)\}$ is dense in $V(x-y)$: the line $V(x-y)\cong\operatorname{Spec}k[u]$ is irreducible, so removing the single closed point given by $x=y=0$ leaves a nonempty open subset, which is dense. Hence $(0,0)$, the maximal ideal $(x,y)$ of $k[x,y]$, lies in the closure of the image of $\Delta$ inside the chart $U\times_kV$. [step 3.1, algebra]

5.1 By steps 4.1 and 2.2 the diagonal image accumulates at a point of the chart $U\times_kV\subseteq D\times_kD$ that does not belong to it, so $\Delta_{D/k}(D)$ is not closed in $D\times_kD$. This is the concrete form of the failure of separatedness recorded in [F1]: for the doubled-origin line the diagonal is a locally closed subscheme whose closure is strictly larger than its image. [F1, step 4.1, step 2.2] ∎

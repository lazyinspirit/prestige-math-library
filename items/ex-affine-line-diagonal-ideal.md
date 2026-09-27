---
id: ex-affine-line-diagonal-ideal
kind: example
title: The diagonal of the affine line
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-diagonal-morphism-scheme, thm-affine-fibre-product-tensor-ring, thm-affine-closed-immersions-quotient-rings, lem-closed-immersion-local-on-target, lem-diagonal-base-change-identification, thm-fibre-products-of-schemes-exist]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.1 (tag 01KI) and Definition 26.21.3, printed pp.39-40"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, Proposition 11.3.1, printed pp.306-307"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Let $A$ be a commutative unital ring and $S=\operatorname{Spec}A$, and let
$\mathbb A^1_S=\operatorname{Spec}A[x]$ with structure morphism
$A\to A[x]$. Then the diagonal
$\Delta:\operatorname{Spec}A[x]\to\operatorname{Spec}A[x]\times_S\operatorname{Spec}A[x]$
is a closed immersion into
$\operatorname{Spec}A[x,y]\cong\operatorname{Spec}A[x]\times_S\operatorname{Spec}A[x]$
whose ideal is $(x-y)$. Consequently
$\mathbb A^1_S\to S$ is separated, and for $A=\mathbb Z$ this is the diagonal
of $\operatorname{Spec}\mathbb Z[x]$. If instead $S$ is an arbitrary scheme and
$\mathbb A^1_S=\operatorname{Spec}\mathbb Z[x]\times_{\operatorname{Spec}\mathbb Z}S$,
then on each affine open $\operatorname{Spec}A\subseteq S$ the same equation
$x-y$ cuts out the diagonal, so the formula glues over an arbitrary base.

## Facts & Assumptions

**Given:** A commutative unital ring $A$, the affine scheme $S=\operatorname{Spec}A$, the affine line $X=\operatorname{Spec}A[x]$ over $S$ with structure morphism $A\to A[x]$, and the diagonal $\Delta=\Delta_{X/S}$.

[F1] For every morphism $X\to S$ the **diagonal** is the unique morphism $\Delta_{X/S}:X\to X\times_SX$ with $\operatorname{pr}_1\Delta_{X/S}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/S}$. ([[def-diagonal-morphism-scheme]])

[F2] For ring maps $A\to B$ and $A\to C$ there is an isomorphism $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_AC)$, with the projections corresponding to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

[F3] For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, precisely the morphisms $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$. ([[thm-affine-closed-immersions-quotient-rings]])

[F4] A morphism is a closed immersion if and only if its restriction to every member of an open cover of the target is a closed immersion. ([[lem-closed-immersion-local-on-target]])

[F5] For a base change $S'\to S$ of $X\to S$, the diagonal of $X\times_SS'\to S'$ is the base change of $\Delta_{X/S}$ along $X\times_SX\to S$; in particular it is determined on each open of the target by $\Delta_{X/S}$. ([[lem-diagonal-base-change-identification]])

[F6] For any two schemes with morphisms to a common scheme the fibre product exists, so $\mathbb A^1_S=\operatorname{Spec}\mathbb Z[x]\times_{\operatorname{Spec}\mathbb Z}S$ is a scheme over $S$; over $S=\operatorname{Spec}A$ it is $\operatorname{Spec}A[x]$ by [F2]. ([[thm-fibre-products-of-schemes-exist]])



## Verification

1.1 By [F2] applied to $A\to A[x]$ twice, $\operatorname{Spec}A[x]\times_S\operatorname{Spec}A[x]\cong\operatorname{Spec}(A[x]\otimes_AA[x])$, and the latter is $\operatorname{Spec}A[x,y]$ with $\operatorname{pr}_1$ corresponding to $x\mapsto x\otimes1=x$ and $\operatorname{pr}_2$ to $x\mapsto1\otimes x=y$. [F2, given]

2.1 By [F1] the diagonal corresponds, under the identification of step 1.1, to a ring map $\mu:A[x,y]\to A[x]$ with $\mu(x)=x$ and $\mu(y)=x$, namely the multiplication $x\otimes1\mapsto x$, $1\otimes x\mapsto x$. [F1, step 1.1, given]

3.1 The map $\mu$ is surjective, and its kernel is $(x-y)$: writing $A[x,y]=A[x][u]$ with $u=y-x$, the map $\mu$ is the $A[x]$-algebra map sending $u$ to $0$, whose kernel is the principal ideal $(u)=(x-y)$. [step 2.1, algebra]

4.1 By [F3] the closed subscheme of $\operatorname{Spec}A[x,y]$ with ideal $(x-y)$ is presentable as $\operatorname{Spec}\bigl(A[x,y]/(x-y)\bigr)$, and $A[x,y]/(x-y)\to A[x]$, $x\mapsto x$, $y\mapsto x$, is an isomorphism of $A$-algebras; hence the diagonal is exactly the closed subscheme $V(x-y)$ and in particular a closed immersion. [F3, step 3.1]

5.1 Now let $S$ be arbitrary and $\mathbb A^1_S=\operatorname{Spec}\mathbb Z[x]\times_{\operatorname{Spec}\mathbb Z}S$ as in [F6], and let $\operatorname{Spec}A\subseteq S$ be an affine open. Base changing along $\operatorname{Spec}A\hookrightarrow S$ produces the affine line $\operatorname{Spec}A[x]$ over $\operatorname{Spec}A$, whose diagonal is cut out by $x-y$ as computed in step 4.1, and by [F5] these local diagonal conditions are the restrictions to the open subscheme $\operatorname{Spec}A\times_S\operatorname{Spec}A$ of the product. Since these products over an affine open cover of $S$ cover $\mathbb A^1_S\times_S\mathbb A^1_S$, [F4] shows that the diagonal of $\mathbb A^1_S\to S$ is a closed immersion cut out by $x-y$ on each such piece, and by [F1] and [F3] its ideal in the chart ring $A[x,y]$ is $(x-y)$. [F1, F3, F4, F5, F6, step 4.1] ∎

---
id: lem-pushouts-and-products-preserve-the-cofibrations-used-here
kind: lemma
title: Pushouts and products preserve the cofibrations used here
deps: ["prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip", "lem-interval-exponential-law-and-quotient-homotopies", "thm-quotient-universal-property", "lem-compact-test-exponential-law-and-products-of-quotients", "lem-weak-hausdorff-diagonals-and-closed-quotients", "lem-compact-generation-preserves-the-cylinder-and-closed-pushouts", "thm-compactness-under-continuous-maps", "lem-tube-lemma-for-a-compact-factor"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 6 §1 pp.43–44 and §4 p.45; Chapter 8 §3 p.58
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

In CGWH, pushouts preserve cofibrations, and k-products with any CGWH space preserve HEP. For two unbased closed cofibration pairs $(X,A)$ and $(Y,B)$, the inclusion $X\times_k B\cup A\times_k Y\hookrightarrow X\times_k Y$ is a cofibration. In particular this supplies the finite endpoint and disk-cylinder boundary constructions. The based versions use based data and collapse the fixed basepoint tracks.

## Facts & Assumptions

[F1] HEP is equivalent to the strip retraction and implies a closed embedding. [[prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip]]

[F2] Closed pushouts are CGWH with their ordinary quotient topology. [[lem-compact-generation-preserves-the-cylinder-and-closed-pushouts]]

[F3] CG products preserve quotient maps and satisfy the exponential law. [[lem-compact-test-exponential-law-and-products-of-quotients]]

[F4] Ordinary quotient maps remain quotient after product with I. [[lem-interval-exponential-law-and-quotient-homotopies]]

[F5] A continuous real function on a nonempty compact space attains extrema. [[thm-compactness-under-continuous-maps]]

[F6] Continuity near an entire compact-time track gives uniform neighbourhood control. [[lem-tube-lemma-for-a-compact-factor]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 For a pushout $P=X\cup_A B$ and test data on B, restrict the initial map to X and the B-homotopy along $A\to B$. HEP of $A\to X$ gives an extension on $X\times I$. It agrees on $A\times I$ with the given B-homotopy, so the two descend to $P\times I$ by F2 and F4. This proves pushout HEP. For a product inclusion, tensor the strip retraction of F1 with the identity of the other factor. F3 identifies its target with the strip for the product inclusion, proving HEP there. These retractions also work for arbitrary test targets by composition. [F1, F2, F3, F4]

1.2 For a closed cofibration pair let $r=(r_1,r_2)$ retract $X\times I$ onto $X\times\{0\}\cup A\times I$. Put $h(x,t)=r_1(x,t)$ and $u(x)=\max_{t\in I}(t-r_2(x,t))$. The maximum exists by F5 and lies in I, since the t=0 value is zero. It is continuous: at fixed x and ε>0, continuity of $t-r_2(x,t)$ and a finite cover of the compact interval give a neighbourhood V of x on which its values differ from those at x uniformly by less than ε. Index the cover by all suitable open rectangles and extract finitely many; no infinite selection is required. The same bound holds for the maxima. [F1, F5, F6]

2.1 For a∈A, $u(a)=0$ and $h(a,t)=a$. If u(x)=0 then $r_2(x,t)\ge t>0$ for t>0, so h(x,t) lies in A. Since A is closed and h(x,0)=x, this implies x∈A. If u(x)<1, then $r_2(x,1)>0$, so h(x,1)∈A. Thus u vanishes precisely on A and h moves every point with u<1 into A while fixing A. [F1, step 1.2]

3.1 Obtain $(v,j)$ similarly for $(Y,B)$ and put $w(x,y)=\min(u(x),v(y))$. If $v\ge u$ and v>0 set $K(x,y,t)=(h(x,t),j(y,tu/v))$; if $u\ge v$ and u>0 set $K(x,y,t)=(h(x,tv/u),j(y,t))$; if u=v=0 set K=(x,y). The formulas agree at u=v>0. At u=v=0, F6 and the fixed-point identities for h,j show that nearby inputs remain in prescribed neighbourhoods uniformly for every homotopy time; the ratios always belong to I. Thus K is continuous also there. It fixes $X\times B\cup A\times Y$, starts at the identity, and at t=1 lands in that union whenever w<1. Its zero set is exactly that union. [F3, F6, step 1.2, step 2.1]

4.1 For any data (w,K) just obtained, retract the strip by $R(z,t)=(K(z,t/w(z)),0)$ when $0\le t\le w(z)$ and w(z)>0, and by $R(z,t)=(K(z,1),t-w(z))$ when $t\ge w(z)$, including w=0. The clauses agree at t=w>0. A positive second coordinate implies w<1, so the first coordinate lies in the subspace. It fixes the bottom and the entire subspace strip. At w=t=0, compact-time tube control as in step 3.1 proves continuity; elsewhere the formulas are continuous by pasting. F1 proves the product-pair cofibration. [F1, F6, step 3.1]

5.1 For the disk boundary an explicit primitive retraction is $R(x,t)=(\lambda x,2+\lambda(t-2))$ with $\lambda=1/\max(1-t/2,\|x\|)$ on $D^m\times I$. The denominator is at least 1/2; either the height is zero or the spatial norm is one. All outputs lie in the cylinder, and the bottom and side are fixed because λ=1 there. For m=0 the formula sends the point-cylinder to its bottom and the boundary is empty. These give the finite endpoint and cell-boundary instances of the product construction. With based data every common basepoint track is fixed, so F2–F4 descend the extensions and homotopies through its collapse. [F1, F2, F3, F4, step 4.1] ∎

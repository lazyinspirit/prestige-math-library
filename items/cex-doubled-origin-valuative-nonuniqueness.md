---
id: cex-doubled-origin-valuative-nonuniqueness
kind: counterexample
title: Two DVR lifts of one diagram over the doubled-origin line
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-doubled-origin-not-separated, def-valuative-diagram-separatedness, def-discrete-valuation-ring, def-discrete-valuation, def-valuation-on-a-field]
justified_by: []
aliases: []
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, Exercise 13.7.C, printed p.382"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Schemes, Lemma 26.22.2 and Example 26.22.2, printed p.44"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  precheck: pass
---

## Statement refuted

For the affine line $D$ with doubled origin over a field $k$, every valuative
diagram for $D\to\operatorname{Spec}k$ whose valuation ring is a discrete
valuation ring has at most one lift.

## Facts & Assumptions

**Given:** A field $k$, the doubled-origin line $D$ with charts $U=\operatorname{Spec}k[x]$, $V=\operatorname{Spec}k[y]$ glued by the identity on $D(x)\cong D(y)$, and the ring $R=k[t]_{(t)}$ with fraction field $K=k(t)$.

[F1] $D$ is obtained by gluing $U$ and $V$ by the identity on the complement of the origin: the two copies of every nonzero point are identified and the two closed points $0_1,0_2$ remain distinct. The chart inclusions agree on the identified open $D(x)\cong D(y)$; the maps $k[x]\to K$, $x\mapsto t$, and $k[y]\to K$, $y\mapsto t$, therefore define the same morphism $\operatorname{Spec}K\to D$. The two origins remain distinct. ([[cor-doubled-origin-not-separated]])

[F2] A **valuative diagram** for $f:X\to S$ is a valuation ring $R\subseteq K$ with fraction field $K$ together with morphisms $\operatorname{Spec}K\to X$ and $\operatorname{Spec}R\to S$ forming a commutative square; a **lift** is a morphism $\operatorname{Spec}R\to X$ making both triangles commute. ([[def-valuative-diagram-separatedness]])

[F3] A **discrete valuation** on a field $K$ is a valuation $v:K\to\mathbb Z\cup\{\infty\}$ such that $v:K^\times\to\mathbb Z$ is surjective; its valuation ring is $V_v=\{x\in K:v(x)\ge0\}$, and a discrete valuation ring is a subring of this form, so it is not a field. ([[def-discrete-valuation]], [[def-discrete-valuation-ring]])

[F4] A valuation on a field $K$ is a function $v:K\to\Gamma\cup\{\infty\}$ with values in an ordered abelian group, satisfying $v(x)=\infty$ if and only if $x=0$, $v(xy)=v(x)+v(y)$ and $v(x+y)\ge\min(v(x),v(y))$. ([[def-valuation-on-a-field]])



## Counterexample

1.1 Define $v(f/g):=\operatorname{ord}_0(f)-\operatorname{ord}_0(g)$ for nonzero $f,g\in k[t]$ and $v(0):=\infty$, where $\operatorname{ord}_0$ is the order of vanishing at $0$. By [F4] this is a valuation: multiplicativity is clear from additivity of $\operatorname{ord}_0$ and the ultrametric inequality follows from the Taylor expansion of $f$ and $g$ at $0$; it is surjective onto $\mathbb Z$ since $v(t)=1$, so by [F3] it is a discrete valuation and $R=\{h\in K:v(h)\ge0\}=k[t]_{(t)}$ is a discrete valuation ring with fraction field $K$. [F3, F4, algebra]

2.1 Let $\operatorname{Spec}K\to D$ be the morphism with image the generic point of the shared $\mathbb G_m$, obtained by composing $k[x]\to K$, $x\mapsto t$, with the chart inclusion $U\hookrightarrow D$, and let $\operatorname{Spec}R\to\operatorname{Spec}k$ be the structure morphism. The square commutes, so this is a valuative diagram for $D\to\operatorname{Spec}k$ in the sense of [F2]. [F1, F2, step 1.1]

3.1 The generic point of $\operatorname{Spec}R$ lies in the shared overlap, so the composite $\operatorname{Spec}K\to U\hookrightarrow D$ coincides with $\operatorname{Spec}K\to V\hookrightarrow D$: both are given by the inclusion $k[t]\to k(t)$ read in the two charts, and $t$ is a unit in the glued $\mathbb G_m$. [F1, step 2.1]

4.1 The ring maps $k[x]\to R$, $x\mapsto t$, and $k[y]\to R$, $y\mapsto t$, define morphisms $u_R:\operatorname{Spec}R\to U\hookrightarrow D$ and $w_R:\operatorname{Spec}R\to V\hookrightarrow D$. Their composites to $\operatorname{Spec}k$ are the structure morphism. After restricting to $\operatorname{Spec}K$, they agree with the generic map of step 2.1 because the chart identifications on $D(x)\cong D(y)$ identify $x$ and $y$. Hence $u_R$ and $w_R$ are two lifts of the valuative diagram. [F1, F2, step 2.1, step 3.1]

5.1 The lifts $u_R\ne w_R$ are distinct: the closed point of $\operatorname{Spec}R$, corresponding to the maximal ideal $(t)$, is sent by $u_R$ to the origin $0_1$ of the chart $U$ and by $w_R$ to the origin $0_2$ of the chart $V$, and $0_1\ne0_2$ by [F1]. [F1, step 4.1]

6.1 Hence the displayed valuative diagram has two distinct lifts, refuting the claimed uniqueness for $D$. In this example the single discrete valuation ring $k[t]_{(t)}$ already detects the failure of uniqueness; this witness does not establish that DVR tests are insufficient for other morphisms. [F2, step 4.1, step 5.1] ∎

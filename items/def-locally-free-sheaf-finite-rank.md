---
id: def-locally-free-sheaf-finite-rank
kind: definition
title: Locally free sheaves of finite rank
status: published
origin: pipeline
deps:
  - def-module-on-ringed-space
  - def-quasi-coherent-module-scheme
  - def-invariant-basis-number-and-rank-of-a-free-module
  - thm-nonzero-commutative-rings-have-invariant-basis-number
  - thm-stalk-structure-sheaf-prime-localization
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Definition

Let $X$ be a scheme and let $\mathcal E$ be a sheaf of $\mathcal O_X$-modules
([[def-module-on-ringed-space]]). For $r\ge0$ write $\mathcal O_X^r$ for the
sheaf $U\mapsto\mathcal O_X(U)^r$ with componentwise restriction, so that
$\mathcal O_X^0=0$ and $\mathcal O_X^1=\mathcal O_X$.

$\mathcal E$ is **locally free of rank $r$ near $x\in X$** if there is an open
neighbourhood $U\subseteq X$ of $x$ and an isomorphism of
$\mathcal O_U$-modules
$$\mathcal E|_U\;\cong\;\mathcal O_U^{\,r}.$$
$\mathcal E$ is **locally free of finite rank** (or **finite locally free**) if
every point $x\in X$ has such a neighbourhood with some rank $r=r(x)\ge0$. It is
then **invertible** if $r(x)=1$ for every $x$, a notion recorded separately on
this page. A locally free sheaf is written with the rank function
$r:X\to\mathbb N$ that its charts determine.

*Well-definedness of the rank.* Suppose $\mathcal E|_U\cong\mathcal O_U^r$ and
$\mathcal E|_V\cong\mathcal O_V^s$ with $x\in U\cap V$. Passing to stalks gives
an isomorphism $(\mathcal O_{X,x})^r\cong(\mathcal O_{X,x})^s$ of modules over
the local ring $\mathcal O_{X,x}$, which is a nonzero commutative ring: for an
affine open $\operatorname{Spec}A\ni x$ one has
$\mathcal O_{X,x}\cong A_{\mathfrak p_x}$ with
$\mathfrak p_x\in\operatorname{Spec}A$
([[thm-stalk-structure-sheaf-prime-localization]]). A nonzero commutative ring
has invariant basis number
([[thm-nonzero-commutative-rings-have-invariant-basis-number]],
[[def-invariant-basis-number-and-rank-of-a-free-module]]), so $r=s$. Hence
$r(x)$ is independent of the chart, and on each chart $U$ the function $r$ is
constant, so $r$ is locally constant on $X$; in particular it is constant on
every connected component of $X$ and is a locally constant
$\mathbb N$-valued function on $X$.

*Immediate consequences.* If $\mathcal E$ is locally free of rank $r$ on $X$,
then $\mathcal E$ is quasi-coherent: on a chart
$\mathcal E|_U\cong\mathcal O_U^r=\widetilde{A^r}$ with $A^r$ free, so the local
affine-module condition of [[def-quasi-coherent-module-scheme]] holds. A
locally free sheaf of rank $0$ is the zero sheaf, since it vanishes on the
members of an open cover; conversely the zero sheaf is locally free of rank
$0$. The conditions are local on $X$ and invariant under isomorphism, and
restriction to an open subscheme preserves local freeness with the same rank
function. A finite locally free sheaf need not have globally constant rank: the
rank may jump between connected components, and only the existence of a rank at
each point is required.

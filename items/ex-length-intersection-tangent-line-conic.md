---
id: ex-length-intersection-tangent-line-conic
kind: example
title: "A tangent line and conic have one intersection point of local length two"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-choice, thm-projective-plane-complete-intersection-total-length, cor-projective-plane-bezout-length-form, def-total-length-of-a-zero-dimensional-projective-scheme, lem-projective-standard-chart-prime-and-local-ring-correspondence, def-projective-scheme-from-a-homogeneous-quotient, def-composition-series-and-length-of-a-module, def-simple-module]
justified_by: []
aliases: []
landmark: false
short: "tangent line meets conic in length two"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Gathmann, Algebraic Geometry class notes (2002), Example 6.2.3, pp. 96-97"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
pipeline_run: frontier-35-ten-categories
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be any field, let
$F=x_0x_2-x_1^2$ (a conic) and $G=x_2$ (a line) in
$k[x_0,x_1,x_2]$, and let $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$. Then $X$
has exactly one point, $P=[1:0:0]$. Writing $u=x_1/x_0$ and $v=x_2/x_0$ on the
chart $x_0\ne0$, the chart ring is $k[u,v]/(v-u^2,v)\cong k[u]/(u^2)$, the local
algebra $\mathcal O_{X,P}$ is this two-dimensional local $k$-algebra, its
length is $2$, the residue field is $k$ with $[\kappa(P):k]=1$, and
$\operatorname{len}_k(X)=2=\deg F\cdot\deg G$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, the conic $F=x_0x_2-x_1^2$ of degree $2$, the line
$G=x_2$ of degree $1$, the quotient $S=k[x_0,x_1,x_2]/(F,G)$ with its standard
grading, and $X=\operatorname{Proj}S$ with standard charts
$D_+(x_i)=\operatorname{Spec}(A_i)$ ([[def-projective-scheme-from-a-homogeneous-quotient]]).

[L1] Points of $X$ are the homogeneous primes $\mathfrak p\subseteq S$ with $S_+\nsubseteq\mathfrak p$; a chart $D_+(x_i)$ is empty exactly when the localisation $S_{x_i}$ is the zero ring, and the point of the chart corresponding to $\mathfrak p\subseteq A_i$ is the point of $X$ it contracts from ([[def-projective-scheme-from-a-homogeneous-quotient]], [[lem-projective-standard-chart-prime-and-local-ring-correspondence]]).

[L2] Assume AC. If $x\in D_+(x_i)$ corresponds to the prime $\mathfrak p_0\subseteq A_i$, then $\mathcal O_{X,x}\cong(A_i)_{\mathfrak p_0}$, the chart ring being the quotient $A_i\cong k[y_0,y_1]/(f_i,g_i)$ of the polynomial ring in the two chart coordinates by the dehomogenised equations ([[thm-projective-plane-complete-intersection-total-length]], [[lem-projective-standard-chart-prime-and-local-ring-correspondence]]).

[L3] Assume AC. The total length of the zero-dimensional $X$ is $\operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$, and for coprime plane forms of degrees $d,e$ it equals $de$ ([[def-total-length-of-a-zero-dimensional-projective-scheme]], [[cor-projective-plane-bezout-length-form]]).

[L4] The length of a module is the number of factors in a composition series, whose factors are simple modules ([[def-composition-series-and-length-of-a-module]], [[def-simple-module]]).



## Verification

**Proof technique:** direct.

1.1 In $S$ one has $x_2=0$ and hence $x_1^2=x_0x_2=0$, so $x_1,x_2$ are nilpotent in $S$ and the localisations $S_{x_1},S_{x_2}$ are the zero ring: the charts $D_+(x_1)$ and $D_+(x_2)$ are empty; moreover $S\cong k[x_0,x_1]/(x_1^2)$ by $x_2\mapsto0$, whose only homogeneous prime not containing $(x_0,x_1)$ is $(x_1)$, so $X$ has exactly one point, namely the point $P=[1:0:0]$ cut out by $(x_1,x_2)$. [L1, algebra]

2.1 In the chart $D_+(x_0)$ the dehomogenised equations are $v-u^2$ and $v$ with $u=x_1/x_0$, $v=x_2/x_0$, so $A_0\cong k[u,v]/(v-u^2,v)\cong k[u]/(u^2)$, and this is the chart through $P$ by step 1.1; this ring has the unique prime $(u)$ with $A_0/(u)\cong k$, so $\mathcal O_{X,P}\cong A_0$ and $\kappa(P)=k$, that is $[\kappa(P):k]=1$. [L2, step 1.1]

3.1 In $A_0=k[u]/(u^2)$ the chain $0\subsetneq(u)\subsetneq A_0$ is a composition series: $(u)=k\cdot u$ is a simple module (it is annihilated by $(u)$, so it is the simple $A_0$-module $k$) and $A_0/(u)\cong k$ is simple, so by [L4] the length is $\ell_{\mathcal O_{X,P}}(\mathcal O_{X,P})=\ell_{A_0}(A_0)=2$. [L4, step 2.1, algebra]

4.1 Since $X$ has the single point $P$ with local length $2$ and residue degree $1$, [L3] gives $\operatorname{len}_k(X)=2\cdot1=2$, which agrees with the Bezout value $\deg F\cdot\deg G=2\cdot1=2$ for the coprime forms $F,G$. [L3, step 1.1, step 2.1, step 3.1, algebra] ∎

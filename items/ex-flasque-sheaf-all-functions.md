---
id: "ex-flasque-sheaf-all-functions"
kind: "example"
title: "The sheaf of all functions to an abelian group is flasque"
status: draft
origin: pipeline
deps: [def-flasque-sheaf, def-sheaf-on-topological-space, def-presheaf-on-topological-space, def-topological-space, def-function, def-continuous-map-top]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Example

Let $X$ be a topological space ([[def-topological-space]]), let $A$ be
an abelian group, and for an open subset $U\subseteq X$ let
$$\mathcal F(U):=\operatorname{Map}(U,A)=\{\,f: f \text{ is a function } U\to A\,\},$$
the set of all functions from $U$ to $A$ ([[def-function]]) with pointwise
addition, and for $U\subseteq V$ open let $\rho^V_U(f):=f|_U$ be the restriction
of a function to $U$. Then $\mathcal F$ is a sheaf of abelian groups on $X$
([[def-sheaf-on-topological-space]]) and it is flasque
([[def-flasque-sheaf]]): every restriction map of $\mathcal F$ is surjective. The
sheaf of locally constant functions is a subsheaf of this all-functions sheaf;
its contrasting failure of flasqueness is treated in
[[cex-constant-sheaf-not-flasque]].

## Facts & Assumptions

[F1] The members of a topology $\mathcal{T}$ on $X$ are its open sets, and $\varnothing$ and $X$ are open ([[def-topological-space]]).

[F2] A presheaf of sets on $X$ consists of sets $\mathcal F(U)$ for open $U$ and restriction maps $\rho^U_V$ for $V\subseteq U$ with $\rho^U_U=\operatorname{id}$ and $\rho^U_W=\rho^V_W\circ\rho^U_V$ whenever $W\subseteq V\subseteq U$ ([[def-presheaf-on-topological-space]]).

[F3] A presheaf is a sheaf when for every open $U$ and every open cover $U=\bigcup_{i\in I}U_i$ it satisfies locality and gluing, and then the glued section is unique ([[def-sheaf-on-topological-space]]).

[F4] A sheaf of abelian groups $\mathcal F$ is flasque when every restriction map $\rho^V_U:\mathcal F(V)\to\mathcal F(U)$, $U\subseteq V$ open, is surjective ([[def-flasque-sheaf]]).

[F5] A function is a relation $f$ such that $(a,b)\in f$ and $(a,c)\in f$ imply $b=c$; thus a relation all of whose values are unique is a function ([[def-function]]).

## Verification

**Given:** A topological space $X$, an abelian group $A$ with zero element $0_A$, and for every open $U\subseteq X$ the set $\mathcal F(U)=\operatorname{Map}(U,A)$ of all functions $U\to A$ with pointwise addition and restrictions $f\mapsto f|_U$.

**Proof technique:** direct.

1.1 For open $U\subseteq X$ let $\mathcal F(U)=\operatorname{Map}(U,A)$ be the set of all functions $U\to A$, and for open $U\subseteq V$ let $\rho^V_U(f):=f|_U$; both $U$ and $V$ are open sets of the topology of [F1]. Restriction of functions satisfies $\rho^U_U(f)=f$ and $\rho^U_W(f)=\rho^V_W(\rho^U_V(f))$ for $W\subseteq V\subseteq U$, since both sides send $x\in W$ to $f(x)$; by [F2] this makes $\mathcal F$ a presheaf of sets on $X$. It is a presheaf of abelian groups under pointwise addition $(f+g)(x):=f(x)+g(x)$: the pointwise sum of two functions $U\to A$ is a function $U\to A$ [F5], addition is associative and commutative and has the constant zero function as identity because $A$ is an abelian group, and each $\rho^V_U$ is a group homomorphism since restrictions are computed valuewise. [F1, F2, F5]

2.1 $\mathcal F$ satisfies the two sheaf conditions of [F3]. Locality: if $f,g\in\mathcal F(U)$ and $f|_{U_i}=g|_{U_i}$ for all $i$ in an open cover $U=\bigcup_{i\in I}U_i$, then for every $x\in U$ there is an $i$ with $x\in U_i$, and $f(x)=f|_{U_i}(x)=g|_{U_i}(x)=g(x)$, so $f=g$. Gluing: let $f_i\in\mathcal F(U_i)$ satisfy $f_i|_{U_i\cap U_j}=f_j|_{U_i\cap U_j}$ for all $i,j$, and form the relation $$f:=\{(x,v): x\in U,\ v\in A,\ \text{there is } i\in I \text{ with } x\in U_i \text{ and } f_i(x)=v\}.$$ If $(x,v)$ and $(x,v')$ belong to $f$, witnessed by indices $i,j$ with $x\in U_i\cap U_j$, then $v=f_i(x)=f_i|_{U_i\cap U_j}(x)=f_j|_{U_i\cap U_j}(x)=f_j(x)=v'$, so the value is unique and $f$ is a function [F5] with domain $U$: every $x\in U$ lies in some $U_i$, giving $(x,f_i(x))\in f$. By construction $f|_{U_i}=f_i$ for every $i$, so compatible families glue; by [F3] the presheaf $\mathcal F$ is a sheaf, and with the pointwise group structure of [step 1.1] it is a sheaf of abelian groups, the group operations being computed valuewise and the glued section unique. [F3, F5, step 1.1]

3.1 Let $U\subseteq V$ be open and let $f\in\mathcal F(U)$. Since $V$ is the disjoint union of $U$ and $V\setminus U$, the rule $$g(x):=\begin{cases}f(x),& x\in U,\\ 0_A,& x\in V\setminus U,\end{cases}$$ defines a function $g:V\to A$ [F5], because the two cases are exhaustive and mutually exclusive and the values are prescribed by the given data; here $0_A$ is the zero element of the abelian group $A$. Its restriction to $U$ is $\rho^V_U(g)=f$. Hence every element of $\mathcal F(U)$ has a preimage under $\rho^V_U$, that is, $\rho^V_U$ is surjective. As $U\subseteq V$ were arbitrary open subsets, all restriction maps of $\mathcal F$ are surjective, and by [F4] the sheaf $\mathcal F$ is flasque. [F4, F5, step 2.1]

4.1 Collecting the two assertions: $\mathcal F$ is a sheaf of abelian groups on $X$ by [step 1.1] and [step 2.1], and it is flasque by [step 3.1], because every restriction of a function to a smaller open set has the canonical extension by the zero element of $A$ described there. In particular the statement holds for every abelian group $A$ and every topological space $X$, with $\mathcal F(\varnothing)=\operatorname{Map}(\varnothing,A)$ the one-element group. No choice principle is used anywhere: the extension of [step 3.1] is given by an explicit two-case formula and the glued function of [step 2.1] is defined by a relation whose values are unique, so that no index or point is selected and the item declares no choice principle. ∎ [F4, step 3.1, step 1.1, step 2.1]

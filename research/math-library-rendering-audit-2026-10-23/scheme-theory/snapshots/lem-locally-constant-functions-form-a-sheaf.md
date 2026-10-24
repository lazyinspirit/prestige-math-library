---
id: "lem-locally-constant-functions-form-a-sheaf"
kind: "lemma"
title: "Locally constant functions form a sheaf with constant stalks"
status: published
origin: pipeline
deps: [def-topological-space, def-presheaf-on-topological-space, def-sheaf-on-topological-space, def-stalk-of-presheaf, def-presheaf-of-groups-rings-modules, thm-abelian-sheaves-form-abelian-category]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Sheaves on Spaces"
      url: https://stacks.math.columbia.edu/download/sheaves.pdf
      locator: "Example 7.3 (tag 006V) and Definition 7.4 (tag 006W) in Section 7, and Example 11.3 (tag 007B) in Section 11, pp. 7 and 11"
---

## Statement

Let $X$ be a topological space ([[def-topological-space]]) and let $A$ be a
set. A function $f:U\to A$ on an open subset $U\subseteq X$ is **locally
constant** when every $x\in U$ has an open neighbourhood $V\subseteq U$ with
$x\in V$ on which $f$ is constant. Then:

1. the assignment
   $$\underline A_{\mathrm{loc}}(U):=\{f:U\to A \text{ locally constant}\},$$
   with the usual restriction maps, is a sheaf of sets on $X$;
2. for every $x\in X$, evaluation at $x$ induces a canonical bijection
   $$\underline A_{\mathrm{loc},x}\xrightarrow{\ \sim\ }A,\qquad [f]_x\longmapsto f(x);$$
3. if $A$ is an abelian group, then with pointwise addition
   $\underline A_{\mathrm{loc}}$ is a sheaf of abelian groups, the restriction
   maps are group homomorphisms, and for every open $U\subseteq X$ the
   assignment $a\mapsto(x\mapsto a)$ is a group homomorphism
   $A\to\underline A_{\mathrm{loc}}(U)$ (the zero homomorphism when
   $U=\varnothing$).

## Facts & Assumptions

[F1] A presheaf of sets on $X$ is a section set $\mathcal F(U)$ for every open $U$ and a restriction map $\rho^U_V:\mathcal F(U)\to\mathcal F(V)$ for every inclusion $V\subseteq U$, with $\rho^U_U=\operatorname{id}$ and $\rho^U_W=\rho^V_W\circ\rho^U_V$ for $W\subseteq V\subseteq U$ ([[def-presheaf-on-topological-space]]).

[F2] A sheaf is a presheaf in which, for every open cover $U=\bigcup_{i\in I}U_i$, sections agreeing on all members are equal (locality) and compatible local sections glue to a section of $\mathcal F(U)$ (gluing), the glued section being unique by locality ([[def-sheaf-on-topological-space]]).

[F3] The stalk $\mathcal F_x$ is described by equivalence classes of pairs $(U,s)$ with $U$ an open neighbourhood of $x$ and $s\in\mathcal F(U)$, where $(U,s)\sim(V,t)$ when $s$ and $t$ agree on some smaller open neighbourhood of $x$ ([[def-stalk-of-presheaf]]).

[F5] A presheaf of groups on $X$ is a presheaf such that every $\mathcal F(U)$ is a group and every restriction map is a group homomorphism; a sheaf of groups is such a presheaf whose underlying set-valued presheaf is a sheaf ([[def-presheaf-of-groups-rings-modules]]).

[F6] The category of sheaves of abelian groups on $X$ is an abelian category ([[thm-abelian-sheaves-form-abelian-category]]).

## Proof

**Given:** A topological space $X$, a set $A$, the assignment $\underline A_{\mathrm{loc}}$ of locally constant $A$-valued functions, an open cover $U=\bigcup_{i\in I}U_i$ with compatible sections of $\underline A_{\mathrm{loc}}$, and a point $x\in X$.

1.1 $\underline A_{\mathrm{loc}}$ with the usual restriction maps is a presheaf of sets: the restriction $f|_V$ of a locally constant $f:U\to A$ to an open $V\subseteq U$ is locally constant, since a neighbourhood of $y\in V$ on which $f$ is constant is again a neighbourhood of $y$ in $V$ on which $f|_V$ is constant; and $\rho^U_U=\operatorname{id}$ and $\rho^U_W=\rho^V_W\circ\rho^U_V$ hold because both sides are the same function $W\to A$ [F1]. [F1]

1.2 Locality holds: if $f,g\in\underline A_{\mathrm{loc}}(U)$ satisfy $f|_{U_i}=g|_{U_i}$ for every $i$, then given $x\in U$ the cover provides an index $i$ with $x\in U_i$, and $f(x)=f|_{U_i}(x)=g|_{U_i}(x)=g(x)$; hence $f=g$ as functions. [F2]

1.3 For $x\in X$ define $\mathrm{ev}_x:\underline A_{\mathrm{loc},x}\to A$ by $\mathrm{ev}_x[(U,f)]:=f(x)$, where $[(U,f)]$ denotes the class of a pair. This is well defined: if $(U,f)\sim(V,g)$ then $f$ and $g$ agree on a smaller open neighbourhood $W$ of $x$ [F3], so $f(x)=g(x)$; and it is additive in the sense of respecting the group operations when $A$ is an abelian group, since sums are formed pointwise. [F3]

2.1 Gluing holds: let $f_i\in\underline A_{\mathrm{loc}}(U_i)$ satisfy $f_i|_{U_i\cap U_j}=f_j|_{U_i\cap U_j}$ for all $i,j$. The union of graphs $f:=\bigcup_{i\in I}\{(x,f_i(x)):x\in U_i\}\subseteq U\times A$ is a function $U\to A$: it is total because the $U_i$ cover $U$, and it is single-valued because for $(x,a),(x,b)$ in it, say from $i$ and $j$, compatibility gives $a=f_i(x)=f_j(x)=b$. Then $f|_{U_i}=f_i$, and $f$ is locally constant: for $x\in U$ pick $i$ with $x\in U_i$ and an open $V\subseteq U_i$ with $x\in V$ on which $f_i$ is constant, so that $f|_V=f_i|_V$ is constant. No index is selected in the definition of $f$, the graph being described by a formula. By [F2] with [step 1.2] the presheaf $\underline A_{\mathrm{loc}}$ is a sheaf of sets, which is clause 1. [F2, step 1.2]

2.2 $\mathrm{ev}_x$ is surjective: for $a\in A$ the constant function $X\to A$ with value $a$ is locally constant, so it is an element of $\underline A_{\mathrm{loc}}(X)$ whose class maps to $a$; this uses no selection, the function being given by the formula $y\mapsto a$. [F3, step 1.3]

2.3 $\mathrm{ev}_x$ is injective: suppose $\mathrm{ev}_x[(U,f)]=a=\mathrm{ev}_x[(V,g)]$. By local constancy there are open neighbourhoods $U'\subseteq U$ and $V'\subseteq V$ of $x$ with $f|_{U'}$ and $g|_{V'}$ constant, necessarily with value $a$ because $f(x)=g(x)=a$; on the open neighbourhood $W:=U'\cap V'$ of $x$ the two functions agree, so $(U,f)\sim(V,g)$ by [F3] and the two classes coincide. Hence $\mathrm{ev}_x$ is a bijection for every $x\in X$, which is clause 2. [F3, step 1.3]

3.1 Suppose now that $A$ is an abelian group. Pointwise addition makes every $\underline A_{\mathrm{loc}}(U)$ an abelian group, with the empty function as the zero element over $U=\varnothing$ and the constant function with value $0$ as the zero element over $U\ne\varnothing$; the sum and the negative of locally constant functions are locally constant, because on the intersection of neighbourhoods on which the two functions are constant the sum is constant, and the negative is constant wherever the function is; and each restriction map $\rho^U_V$ is a group homomorphism because $(f+g)|_V=f|_V+g|_V$ and $(-f)|_V=-(f|_V)$ hold pointwise. By [step 2.1] the underlying set-valued presheaf is a sheaf, so by [F5] $\underline A_{\mathrm{loc}}$ is a sheaf of groups, abelian since addition is pointwise abelian, that is a sheaf of abelian groups, and the category of these is abelian by [F6]. Finally the assignment $a\mapsto(x\mapsto a)$ is a group homomorphism $A\to\underline A_{\mathrm{loc}}(U)$ for every open $U$, since $(x\mapsto a)+(x\mapsto b)=(x\mapsto a+b)$ pointwise and over $U=\varnothing$ it is the zero homomorphism to the trivial group. This is clause 3, and the proof is complete. ∎ [F5, F6, step 2.1]

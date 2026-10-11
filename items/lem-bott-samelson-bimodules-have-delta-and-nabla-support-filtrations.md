---
id: lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations
kind: lemma
title: "Bott–Samelson bimodules carry delta and nabla support filtrations"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-type-a-soergel-bimodule-for-a-simple-reflection, lem-type-a-graph-bimodule-extension-vanishing, lem-type-a-soergel-generators-are-finite-free-on-both-sides, lem-finite-weyl-strong-exchange-and-deletion]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Soergel, Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln, Proposition 5.7(1), 5.9(1), PDF pp.13–16"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias–Williamson, Soergel Calculus, §§3.4, 5–7"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
  repair: research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/soergel/receipts/lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations.json
---

## Statement

Let $\underline i=(i_1,\ldots,i_r)$ be a word in simple reflections and
$B_{\underline i}:=B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$, with
$B_\emptyset=R$. Then $B_{\underline i}$ belongs to both $F_\Delta$ and
$F_\nabla$: it has a $\Delta$-flag and a $\nabla$-flag in the sense of
[[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], its
support is contained in $Gr(S_n)$, and each successive quotient of these flags
is a standard bimodule $R_x\{a\}$ with $x$ a product
$x=s_{i_{j_1}}\cdots s_{i_{j_m}}$ ($1\le j_1<\cdots<j_m\le r$) of a
subexpression of $\underline i$ formed by keeping $m$ letters; the Coxeter
length $\ell(x)$ can be smaller than $m$. The shift $a$ of an occurrence
is computed recursively, one step $\pm1$ per letter of $\underline i$, from the
two rank-one exact sequences of step 1.2 below: the $\Delta$-chart and the
$\nabla$-chart use the two different sequences, so the shift depends on the
chosen subexpression and on the chart, and it is *not* a function of the lengths
and descent numbers of the subexpression alone: for the one-letter word $(s)$
the $\nabla$-chart occurrences are $R\{1\}$ and $R_s\{-1\}$, while the
$\Delta$-chart occurrences are the translates $\Delta_e(1)=R\{-1\}$ and
$\Delta_s(0)=R_s\{1\}$ of the same two subexpressions, so the same subexpression
carries different shifts in the two charts. In particular the number of occurrences of a graph $x$ in the
$\Delta$-flag and in the $\nabla$-flag of $B_{\underline i}$ is the number of
subexpressions of $\underline i$ with product $x$. Moreover $B_{\underline i}$
is finite free of rank $2^r$ as a left
$R$-module and as a right $R$-module, and the flag categories are closed under
tensoring with a generator on either side: if $M\in F_\Delta$ then
$B_s\otimes_RM\in F_\Delta$ and $M\otimes_RB_s\in F_\Delta$, and likewise with
$\nabla$ in place of $\Delta$.

## Facts & Assumptions

**Given:** A word $\underline i=(i_1,\ldots,i_r)$ of simple reflections, the rank-one bimodules $B_s=R\otimes_{R^s}R(1)$, and for a standard bimodule $R_x$ the notation $R_x\{a\}$ for its internal shift by $a$ (generator in degree $a$).

[F1] The two exact sequences $0\to R\{1\}\to B_s\to R_s\{-1\}\to0$ and $0\to R_s\{1\}\to B_s\to R\{-1\}\to0$ of graded $R$-bimodules with all maps of degree zero, and the right action of $R$ on $B_s$ in the basis $u=1\otimes1$ (degree $-1$) and $w_0=1\otimes\delta$ (degree $1$) ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F2] $B_i$ is free of rank two as a left and as a right $R$-module, and an iterated tensor product of the $B_i$ is finite free of rank $2^r$ on each side ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]], [[lem-finite-weyl-strong-exchange-and-deletion]]).

[F3] $R_w\otimes_RR_v\cong R_{wv}$ by the balanced map $a\otimes b\mapsto a\,w(b)$, and the graded Hom formula $\operatorname{Hom}_{R\text{-}R}(R_v(a),R_w(b))\cong R(b-a)$ for $v=w$ and $0$ otherwise ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F4] Extensions between distinct graph bimodules split unless their indices differ by a reflection. In the reflection case the extension obstruction is one polynomial modulo the corresponding linear hyperplane equation: in a right-free rank-two presentation it is the off-diagonal entry for the one anti-invariant linear coordinate ([[lem-type-a-graph-bimodule-extension-vanishing]], whose explicit cocycle proof applies over either field here). Strong exchange describes a Bruhat cover as deletion of one letter of a reduced expression ([[lem-finite-weyl-strong-exchange-and-deletion]]).

[F5] Opposite bimodules: $(M\otimes_RN)^{\mathrm{op}}\cong N^{\mathrm{op}}\otimes_RM^{\mathrm{op}}$ through the flip, $B_s^{\mathrm{op}}\cong B_s$, $R_x^{\mathrm{op}}\cong R_{x^{-1}}$, the length filtrations of $M$ and $M^{\mathrm{op}}$ agree, and a $\Delta$-flag of $M$ with quotients $R_{x_j}\{a_j\}$ is a $\Delta$-flag of $M^{\mathrm{op}}$ with quotients $R_{x_j^{-1}}\{a_j\}$ in the same order, while a $\nabla$-flag of $M$ is a $\nabla$-flag of $M^{\mathrm{op}}$ in the same order, so that the opposite functor preserves each flag category separately: $M\in F_\Delta$ if and only if $M^{\mathrm{op}}\in F_\Delta$, and $M\in F_\nabla$ if and only if $M^{\mathrm{op}}\in F_\nabla$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).



## Proof

1.1 We prove flag preservation and the multiplicity recursion together. For the empty word $R$ has its single graph flag. Shifts preserve supports. The generator tensor functors are exact by [F2], and [F1] gives the two graph sequences for each $B_sR_y$; their graph indices are $y,sy$. Each sequence splits on the right, since its quotient is right-free. The issue for a longer flag is placing the two graphs in the required length order, which we resolve next. [F1, F2, F3]

1.2 Refine a $\Delta$ length flag at each integer length $i$ into the left-descent indices $x$ with $\ell(x)=i$, $sx<x$, and the left-ascent indices of that length. Group the descent part at length $i$ with the ascent part at length $i-1$ into one block. The length layers are sums of graphs, so these refinements exist. Distinct graph indices of the same length do not differ by a reflection, by length parity. If a descent index $x$ of length $i$ and ascent index $y$ of length $i-1$ differ by a reflection, strong exchange gives $y$ by one deletion in a reduced expression $x=s\underline v$. If the first letter is deleted, $y=sx$; if a later letter is deleted, the remaining expression begins with $s$ and has exactly $i-1=\ell(y)$ letters, so it is reduced and $sy<y$, contradicting the ascent condition. Thus in this block the only potentially nonsplit extensions are between $R_x$ and $R_{sx}$. The cocycle calculation of [F4], applied to matrices of graph generators, then decomposes the block into the independent two-graph pairs after restricting its left action to $R^s$. [F4, algebra]

2.1 Here is why the restriction in the last sentence splits even the paired extensions. After twisting the graph action, the two left actions on the anti-invariant coordinate $\alpha_s$ are $a$ and $-a$ for a nonzero right-linear coordinate $a$, and the extension matrix is $\begin{pmatrix}a&h\\0&-a\end{pmatrix}$ in a right-free splitting. Its square is $a^2I$, with zero off-diagonal entry. All left coordinates fixed by $s$ already have identical diagonal action and zero off-diagonal obstruction in the graph-extension cocycle of [F4]. These coordinates together with $\alpha_s^2$ generate $R^s$. Thus every element of $R^s$ acts by the common scalar on the paired extension, and any right-linear splitting is also left-$R^s$-linear. With multiple copies the same matrix calculation applies with $h$ a rectangular matrix. Consequently every restricted block is the direct sum of its graph layers, retaining their homogeneous degrees. [step 1.2, F4, algebra]

3.1 Tensor a restricted block back with $R\otimes_{R^s}(-)(1)$. Each graph generator of degree $a$ now contributes the two rank-one quotients of [F1], with generator degrees $a+1$ on the descent graph $x$ and $a-1$ on the ascent graph $sx$. This follows directly from the two rank-one sequences: the high-length graph is the submodule in the $\Delta$ order, and its generator is raised by one; the low-length quotient is lowered by one. Both restricted indices $x,sx$ give this same pair of degrees because their restricted actions coincide. Arranging the resulting blocks in decreasing length therefore produces a genuine $\Delta$ flag. If $x>sx$, converting generator degrees to normalized $\Delta$ indices gives $(B_sM:\Delta_x(d))=(M:\Delta_x(d+1))+(M:\Delta_{sx}(d))$ and $(B_sM:\Delta_{sx}(d))=(M:\Delta_x(d))+(M:\Delta_{sx}(d-1))$. This also proves preservation for an arbitrary $\Delta$-flagged $M$. [step 1.1, step 1.2, step 2.1, F1, algebra]

3.2 For a $\nabla$ flag use the same half-length blocks in increasing length order. The reflection test of step 1.2 and restriction splitting of step 2.1 remain identical. The low graph is now the submodule in the appropriate rank-one sequence and has generator degree $a+1$; the high graph quotient has degree $a-1$. Since a $\nabla_y(d)$ generator has degree $-\ell(y)-d$, this gives $(B_sM:\nabla_x(d))=(M:\nabla_x(d-1))+(M:\nabla_{sx}(d))$ and $(B_sM:\nabla_{sx}(d))=(M:\nabla_x(d))+(M:\nabla_{sx}(d+1))$. This proves $\nabla$ preservation independently, rather than assuming that taking opposites exchanges the two flag categories. [step 1.2, step 2.1, F1, algebra]

4.1 By [F5] taking opposites reverses tensor order and preserves each length flag category separately. Hence left closure from steps 3.1–3.2 implies right closure. Iterating left closure from the empty word proves both flags for every word. At each tensoring, every graph occurrence branches into $y$ and $sy$ exactly once, with generator degree changing by $\pm1$. Applying letters from right to left yields exactly the subexpressions in their original order. The normalized indices follow the two recursions just proved; in the one-letter case [F1] gives exactly the two pairs in the Statement. [F5, step 1.1, step 3.1, step 3.2]

5.1 Finite freeness and rank $2^r$ follow from [F2]. Every graph in either flag is a subexpression graph by step 4.1, so its support is contained in $Gr(S_n)$. The closure statements, shifts and multiplicities are established in steps 3.1–4.1, completing all the assertions without an imported closure theorem. [F2, step 3.1, step 3.2, step 4.1] ∎

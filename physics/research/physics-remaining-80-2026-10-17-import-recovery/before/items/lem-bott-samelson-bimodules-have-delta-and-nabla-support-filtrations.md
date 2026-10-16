---
id: lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations
kind: lemma
title: "Bott–Samelson bimodules carry delta and nabla support filtrations"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-type-a-soergel-bimodule-for-a-simple-reflection, lem-type-a-graph-bimodule-extension-vanishing, lem-type-a-soergel-generators-are-finite-free-on-both-sides]
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
  audited: 2026-09-27
  precheck: pass
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

[F2] $B_i$ is free of rank two as a left and as a right $R$-module, and an iterated tensor product of the $B_i$ is finite free of rank $2^r$ on each side ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]).

[F3] $R_w\otimes_RR_v\cong R_{wv}$ by the balanced map $a\otimes b\mapsto a\,w(b)$, and the graded Hom formula $\operatorname{Hom}_{R\text{-}R}(R_v(a),R_w(b))\cong R(b-a)$ for $v=w$ and $0$ otherwise ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F4] Imported from Soergel Proposition 5.7(1) and its dual Proposition 5.9(1), with the recursions of their proofs, stated in the normalization of this page: if $M\in F_\Delta$ then $B_s\otimes_RM\in F_\Delta$ and if $M\in F_\nabla$ then $B_s\otimes_RM\in F_\nabla$; in both cases the quotients of the resulting flag are again standard bimodules, indexed by the quotients of the flag of $M$, and, for $\ell(x)>\ell(sx)$, the multiplicities satisfy $$(B_s\otimes_RM:\Delta_x(d))=(M:\Delta_x(d+1))+(M:\Delta_{sx}(d)),\qquad (B_s\otimes_RM:\Delta_{sx}(d))=(M:\Delta_x(d))+(M:\Delta_{sx}(d-1)),$$ and dually $$(B_s\otimes_RM:\nabla_x(d))=(M:\nabla_x(d-1))+(M:\nabla_{sx}(d)),\qquad (B_s\otimes_RM:\nabla_{sx}(d))=(M:\nabla_x(d))+(M:\nabla_{sx}(d+1)),$$ the source's *shifted* reflection functor $\theta_s=R[1]\otimes_{R^s}(-)$ of his Notation 5.6 being exactly the library functor $B_s\otimes_R-$, which differs from the unshifted $R\otimes_{R^s}(-)$ by the internal shift $\{-1\}$ recorded in step 1.1 below ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F5] Opposite bimodules: $(M\otimes_RN)^{\mathrm{op}}\cong N^{\mathrm{op}}\otimes_RM^{\mathrm{op}}$ through the flip, $B_s^{\mathrm{op}}\cong B_s$, $R_x^{\mathrm{op}}\cong R_{x^{-1}}$, the length filtrations of $M$ and $M^{\mathrm{op}}$ agree, and a $\Delta$-flag of $M$ with quotients $R_{x_j}\{a_j\}$ is a $\Delta$-flag of $M^{\mathrm{op}}$ with quotients $R_{x_j^{-1}}\{a_j\}$ in the same order, while a $\nabla$-flag of $M$ is a $\nabla$-flag of $M^{\mathrm{op}}$ in the same order, so that the opposite functor preserves each flag category separately: $M\in F_\Delta$ if and only if $M^{\mathrm{op}}\in F_\Delta$, and $M\in F_\nabla$ if and only if $M^{\mathrm{op}}\in F_\nabla$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

## Proof

1.1 Write $\theta^0_s:=R\otimes_{R^s}(-)$ for the *unshifted* balanced tensor functor; Soergel's shifted reflection functor, whose recursions [F4] records, is $\theta_s=R[1]\otimes_{R^s}(-)$. Since $B_s=R\otimes_{R^s}R(1)=R\otimes_{R^s}R\{-1\}$ and shifts may be moved across a balanced tensor product, $B_s\otimes_RN\cong\theta^0_s(N)\{-1\}\cong\theta_s(N)$ for every graded bimodule $N$, and associativity of $\otimes_R$ with $B_{(i_2,\ldots,i_r)}$ gives $$B_{\underline i}\cong\theta^0_{i_1}\bigl(\theta^0_{i_2}\bigl(\cdots\theta^0_{i_r}(R)\cdots\bigr)\bigr)\{-r\};$$ the empty word gives $B_\emptyset=R=R_e$, which is its own $\Delta$-flag and $\nabla$-flag, and an internal shift $M\mapsto M\{k\}$ preserves the flag categories because it changes only internal degrees and not supports. [F1, F2, F4]

1.2 One-step calculus: a standard bimodule $R_x$ is free of rank one as a *right* $R$-module, so the functor $R_x\{a\}\otimes_R-$ is exact, and applying it to the two short exact sequences of [F1], whose total space is $B_s$, and identifying the outer terms by [F3] gives the two exact sequences $$0\to R_{xs}\{a+1\}\to R_x\{a\}\otimes_RB_s\to R_x\{a-1\}\to0,$$ $$0\to R_x\{a+1\}\to R_x\{a\}\otimes_RB_s\to R_{xs}\{a-1\}\to0,$$ whose outer terms are standard bimodules with graph indices $x$ and $xs$ and shifts differing by one; the first sequence exhibits the $xs$-graph as a sub-bimodule and the second exhibits the $x$-graph as a sub-bimodule of the same total space, so $R_x\{a\}\otimes_RB_s$ has a two-term flag in either order. Taking opposites with [F5] turns these two sequences into the corresponding two sequences for $\theta_s(R_x\{a\})=B_s\otimes_RR_x\{a\}$, whose outer terms have the graph indices $x$ and $sx$ and again differ by one in shift. [F1, F3, F5]

2.1 Membership: by [F4] the functor $B_s\otimes_R-$ carries $F_\Delta$ into $F_\Delta$ and $F_\nabla$ into $F_\nabla$, and by step 1.1 it differs from the unshifted balanced tensor functor $\theta^0_s=R\otimes_{R^s}-$ by the internal shift $\{-1\}$, which preserves both categories because it changes only degrees, so $\theta^0_s$ carries each flag category into itself. Induction on the number of letters in the normal form of step 1.1 therefore gives $B_{\underline i}\in F_\Delta\cap F_\nabla$ together with a $\Delta$-flag and a $\nabla$-flag; the empty word is the single layer $R_e=R$ of step 1.1. [F4, step 1.1]

2.2 Quotient and shift bookkeeping: by the recursions of [F4], read in the direction of the contribution of an old quotient, a flag quotient of $M$ with graph $y$ and index $e$ contributes to the $\Delta$-flag of $B_s\otimes_RM$ the two quotients with graph $sy$ and index $e$, and with graph $y$ and index $e-1$ when $\ell(y)>\ell(sy)$ respectively index $e+1$ when $\ell(sy)>\ell(y)$; in the $\nabla$-chart the same pair of recursions holds with the two signs exchanged, which is the dual pair of [F4]. Iterating this along the $r$ letters of $\underline i$, each flag quotient of $B_{\underline i}$ arises from a choice, at every letter $s_{i_j}$, of keeping the graph or multiplying it by $s_{i_j}$ on the left, so its graph is the subexpression product $s_{i_{j_1}}\cdots s_{i_{j_m}}$ of the $m$ kept letters, and its normalized index is unchanged at each graph-changing branch and changes by $\pm1$ only at a graph-preserving branch, with the sign specified above. The recursion is applied from the rightmost letter to the leftmost letter, so the final graph is the subexpression product in its original order. For the unnormalized generator degree $a=\ell(y)-e$ in the $\Delta$-chart or $a=-\ell(y)-e$ in the $\nabla$-chart, each branch changes $a$ by $\pm1$, since $\ell(sy)-\ell(y)=\pm1$; the $\nabla$-chart is governed by the dual pair of recursions of [F4]. The two branches at a letter give different graphs, since $sx\neq x$ for a simple reflection $s$, so the number of occurrences of a graph $x$ equals the number of those subexpressions of $\underline i$ whose product is $x$; for the one-letter word the two charts give the two displayed pairs of the statement. [F1, F3, F4, step 1.1, step 1.2]

3.1 Right tensors: let $M\in F_\Delta$. By [F5] $M^{\mathrm{op}}\in F_\Delta$, so $B_s\otimes_RM^{\mathrm{op}}\in F_\Delta$ by [F4]; applying [F5] again, $M\otimes_RB_s\cong(B_s\otimes_RM^{\mathrm{op}})^{\mathrm{op}}$ lies in $F_\Delta$, since the opposite functor preserves the $\Delta$-flag category. The same argument with the roles of $\Delta$ and $\nabla$ exchanged, using that the opposite functor preserves the $\nabla$-flag category as well, gives the closure clause for $F_\nabla$. [F4, F5, step 2.1]

4.1 Freeness and rank: [F2] gives that $B_{\underline i}$ is finite free of rank $2^r$ on each side, and each layer $R_x\{a\}$ is free of rank one on each side; the support of $B_{\underline i}$, a finite union of graphs, is contained in $Gr(S_n)$ because every flag quotient is a standard bimodule of a permutation, and the internal shifts change only degrees. ∎ [F2, step 2.1, step 2.2, step 3.1]

---
id: cex-bott-samelson-words-related-by-a-braid-need-not-be-isomorphic-bimodules
kind: counterexample
title: "Bott–Samelson words related by a braid need not be isomorphic bimodules"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-rank-two-type-a-soergel-bimodule-decompositions, lem-type-a-support-filtration-multiplicities-are-intrinsic, def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-the-rank-two-longest-type-a-soergel-bimodule, lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Khovanov, Triply-graded Link Homology and Hochschild Homology of Soergel Bimodules, Proposition 4"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §4, PDF pp. 21–26"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  precheck: pass
---

## Statement refuted

The following over-generalisation is false. Let $n\ge3$ and let
$s_i\ne s_{i+1}$ be adjacent simple reflections. A **braid move** replaces the
word $(i,i+1,i)$ by the word $(i+1,i,i+1)$, and the two words have the same
product $w_{i,i+1}=s_is_{i+1}s_i=s_{i+1}s_is_{i+1}$ in $S_n$, the longest
element of the parabolic $\langle s_i,s_{i+1}\rangle$
([[def-the-rank-two-longest-type-a-soergel-bimodule]]). **Refuted claim:** two
Bott–Samelson words related by a braid move have isomorphic Bott–Samelson
bimodules, that is
$$B_i\otimes_RB_{i+1}\otimes_RB_i\cong B_{i+1}\otimes_RB_i\otimes_RB_{i+1}$$
as graded $(R,R)$-bimodules; more generally, the Bott–Samelson bimodule of a
word depends only on the product of its letters and not on the chosen word. It
is not: for $n=3$, $i=1$ and $s=s_1$, $t=s_2$ one has
$$B_s\otimes_RB_t\otimes_RB_s\;\not\cong\;B_t\otimes_RB_s\otimes_RB_t,$$
although $sts=tst$ in $S_3$. The two rank-two decompositions of
[[thm-rank-two-type-a-soergel-bimodule-decompositions]] exhibit the common
longest summand $B_{1,2,1}$ and the distinct extra summands $B_s$ and $B_t$, and
the intrinsic multiplicities of the graph layers
([[lem-type-a-support-filtration-multiplicities-are-intrinsic]]) distinguish the
two words: the graph $s_1$ occurs twice in the $\Delta$-flag of $B_sB_tB_s$ and
once in the $\Delta$-flag of $B_tB_sB_t$.

## Facts & Assumptions
**Given:** The adjacent simple reflections $s=s_1$, $t=s_2$ of $S_3$ with $s\ne t$, the parabolic $W_{1,2}=S_3$, the standard bimodules $R_x\{a\}$, the graph layers $\Delta_x(d)=R_x\{\ell(x)-d\}$ with their multiplicities $(M:\Delta_x(d))$, and the Bott–Samelson bimodules $B_sB_tB_s=B_s\otimes_RB_t\otimes_RB_s$ and $B_tB_sB_t=B_t\otimes_RB_s\otimes_RB_t$.

[F1] For adjacent $i,i+1$ there are degree-zero isomorphisms $B_iB_{i+1}B_i\cong B_{i,i+1,i}\oplus B_i$ and $B_{i+1}B_iB_{i+1}\cong B_{i,i+1,i}\oplus B_{i+1}$ of graded $(R,R)$-bimodules, with no additional shift on any summand, where $B_{i,i+1,i}=R\otimes_{R^{W_{i,i+1}}}R(3)$ and $w_{i,i+1}=s_is_{i+1}s_i=s_{i+1}s_is_{i+1}$ is the longest element of $W_{i,i+1}$ ([[thm-rank-two-type-a-soergel-bimodule-decompositions]], [[def-the-rank-two-longest-type-a-soergel-bimodule]]).

[F2] Let $\underline i=(i_1,\ldots,i_r)$ be a word and $B_{\underline i}=B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$, with $B_\emptyset=R$. Then $B_{\underline i}$ belongs to both $F_\Delta$ and $F_\nabla$, each successive quotient of these flags is a standard bimodule $R_x\{a\}$ with $x$ the product of a subexpression of $\underline i$, and the number of occurrences of a graph $x$ in the $\Delta$-flag and in the $\nabla$-flag of $B_{\underline i}$ is the number of subexpressions of $\underline i$ with product $x$ ([[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]]).

[F3] The graded multiplicity $(M:\Delta_x(d))$ of a $\Delta$-flagged bimodule $M$ does not depend on the compatible enumeration of the flag, so it is a function of $M$ alone, and the sums $h_\Delta(M)$ and $h_\nabla(M)$ are intrinsic; in particular two isomorphic graded bimodules have equal multiplicities $(M:\Delta_x(d))$ for all $x,d$ ([[lem-type-a-support-filtration-multiplicities-are-intrinsic]]).

[F4] $\Delta_x(d)=R_x\{\ell(x)-d\}$ is the standard bimodule $R_x$ with its generator in degree $\ell(x)-d$, where $R_x$ is $R$ with the right action $g\cdot x=gx$ twisted by $x$, and $\operatorname{Hom}_{R\text{-}R}(R_v(a),R_w(b))\cong R(b-a)$ for $v=w$ and $0$ for $v\ne w$; every successive quotient of a $\Delta$-flag is such a standard bimodule, and the layer of length $\ell(x)$ contains the occurrences of the graph $x$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).



## Refutation

1.1 *The two words and their braid relation.* In $S_3$ the products $s_1s_2s_1$ and $s_2s_1s_2$ both equal the longest element of $S_3$, the parabolic $W_{1,2}$, so the words $(1,2,1)$ and $(2,1,2)$ are related by the braid move and have the same product; their Bott–Samelson bimodules are $B_sB_tB_s$ and $B_tB_sB_t$. [F1]

1.2 *The two decompositions.* By [F1] applied to the adjacent pair $s,t$, $B_sB_tB_s\cong B_{1,2,1}\oplus B_s$ and $B_tB_sB_t\cong B_{1,2,1}\oplus B_t$ with degree-zero identifications, so the two bimodules have the common summand $B_{1,2,1}$ and the distinct extra summands $B_s$ and $B_t$. [F1]

1.3 *The occurrence count of the graph $s_1$.* By [F2] the number of occurrences of a graph $x$ in the $\Delta$-flag of $B_{\underline i}$ equals the number of subexpressions of $\underline i$ whose product is $x$. For $\underline i=(1,2,1)$ the subexpressions with product $s_1$ are the one-term subexpressions on positions $1$ and $3$: choosing position $1$ alone gives $s_1$ and choosing position $3$ alone gives $s_1$, whereas $\{1,3\}$ gives $s_1s_1=e$ and $\{1,2,3\}$ gives the longest element, so there are exactly $2$ such subexpressions. For $\underline i=(2,1,2)$ the only subexpression with product $s_1$ is the one-term subexpression on position $2$, and again $\{1,3\}$ gives $s_2s_2=e$, so there is exactly $1$. [F1, F2]

2.1 *The two sums of multiplicities.* By [F4] each occurrence of the graph $s_1$ in the $\Delta$-flag of $B_{\underline i}$ is a quotient $\Delta_{s_1}(d)$ for a unique degree $d$, and conversely every $\Delta_{s_1}(d)$-quotient is an occurrence of the graph $s_1$; hence step 1.3 counts exactly the sum over $d$ of the multiplicities, giving $\sum_d(B_sB_tB_s:\Delta_{s_1}(d))=2$ and $\sum_d(B_tB_sB_t:\Delta_{s_1}(d))=1$. [F4, step 1.3]

3.1 *The contradiction.* Suppose $B_sB_tB_s\cong B_tB_sB_t$ as graded bimodules. By [F3] the multiplicity $(M:\Delta_x(d))$ is intrinsic, so the two bimodules would have $(B_sB_tB_s:\Delta_{s_1}(d))=(B_tB_sB_t:\Delta_{s_1}(d))$ for every $d$, and summing over the finitely many degrees $d$ in which the flags of [F2] have quotients would give equal sums; but by step 2.1 the sums are $2$ and $1$. [F2, F3, step 2.1]

4.1 *Conclusion.* The braid-related words $(1,2,1)$ and $(2,1,2)$ of $S_3$ have the same product in $S_3$ yet non-isomorphic Bott–Samelson bimodules $B_sB_tB_s\not\cong B_tB_sB_t$, distinguished by the intrinsic multiplicities of the graph $s_1$: two occurrences in the first and one in the second, as counted by subexpressions in step 1.3. The common longest summand $B_{1,2,1}$ of step 1.2 therefore does not force the two words to give isomorphic bimodules, and the refuted claim is false. The argument uses only the finitely many subexpressions of the two words of length three and the displayed decompositions, so no choice principle is used. ∎ [F1, F3, step 1.2, step 3.1]

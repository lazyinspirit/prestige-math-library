---
id: "def-cg-sortable-element-skip-roots-and-cone"
kind: "definition"
title: "c-sortable elements, forced and unforced skips, skip roots, and the chamber cone"
status: published
origin: pipeline
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 20
deps:
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - lem-cg-weak-parabolic-projection-and-cover-joins
  - def-cg-geometric-inversion-set
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-canonical-reflection-homomorphism
  - def-cg-finite-reflection-arrangement-and-spherical-chambers
  - thm-cg-root-length-criterion-and-faithfulness
justified_by:
  - lem-cg-sortable-skips-basis-and-cover-decomposition
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "section 2.7, pp. 17-18 (c-sortable elements and the sequence of subsets); section 5, pp. 25-31 (skips, the roots C^r_c(v), Propositions 5.1 and 5.2); section 6, p. 32 (Cone_c(v))"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 2, pp. 5-6 (the c-sorting word, sortable elements and their recursion)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 1, section 1.4 (length conventions used in the skip positions)"
verification:
  audited: "2026-10-08"
  precheck: n/a
---

## Definition

Let $(W,S)$ be a Coxeter system of finite type with $S$ finite, with root system
$\Phi=\Phi_+\sqcup\Phi_-$ and the identification $V\cong V^\ast$ by $B$ of
[[def-cg-finite-reflection-arrangement-and-spherical-chambers]], and let
$c=s_1\cdots s_n$ be a reduced Coxeter word with periodic word $c^\infty$ as in
[[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]; the block sequence of
the $c^\infty$-sorting word is well defined by
[[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (2).

**(1) c-sortable elements.** An element $v\in W$ is $c$**-sortable** when the
block sequence $(T_1,T_2,\dots)$ of its $c^\infty$-sorting word is weakly
decreasing under inclusion: $T_1\supseteq T_2\supseteq\cdots$ (with the sequence
read up to its last nonempty set). By
[[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (2) this condition is
independent of the chosen reduced Coxeter word for $c$.

**(2) Skips and forcedness.** For any $v\in W$, fix a $c$-sorting word $a_1\cdots a_k$ of $v$ (so
$a_1,\dots,a_k$ are the letters of the sorting word in order and
$k=\ell(v)$), and let $r\in S$. The **leftmost unselected occurrence of $r$** is
the least position of $c^\infty$ carrying $r$ which is not among the selected
positions; it exists because the sorting word is finite and infinitely many
occurrences of $r$ follow it. If $i$ is the number of selected letters preceding
that position, the sorting word is said to **skip $r$ in the $(i+1)$-st
position**, with associated reflection $t:=a_1\cdots a_ir\,a_i\cdots a_1$. The
skip is **forced** when the word $a_1\cdots a_ir$ is not reduced, and
**unforced** otherwise; write $t\in fsc(v)$ in the forced case and
$t\in ufs_c(v)$ in the unforced case, and set
$\mathcal A_c(v):=\{-\beta_t:t\in fsc(v)\}$ and
$\mathcal B_c(v):=\{\beta_t:t\in ufs_c(v)\}$. By the definition of the sorting word,
the leftmost unselected occurrence of $r$ is determined by $v$ and the chosen reduced Coxeter word for $c$; the reflection $t$ is determined by the selected prefix preceding it. Word independence for sortable $v$ is established by the justifier in (3).

**(3) Skip roots.** For $r\in S$ the **skip root** is
$$C^r_c(v):=\rho(a_1\cdots a_i)\,e_r=\pm\beta_t,$$
with the sign rule
$$C^r_c(v)=-\beta_t\iff r\text{ is a forced skip of }v,\qquad C^r_c(v)=+\beta_t\iff r\text{ is an unforced skip of }v,$$
where $\beta_t$ is the positive root of $t$ and $t$ is the reflection attached to
the leftmost unselected occurrence of $r$ as in (2). The sign rule holds for every $v$: the root-length criterion of [[thm-cg-root-length-criterion-and-faithfulness]] (1) identifies the sign of $\rho(a_1\cdots a_i)e_r$ with whether the reduced prefix followed by $r$ is reduced.

When $v$ is $c$-sortable, the raw skip roots equivalently satisfy the following recursion of Reading--Speyer section 5: with $s$ initial in $c$, $C^r_c(v)=e_s$ if $v\not\ge_Rs$ and $r=s$;
$C^r_c(v)=C^r_{sc}(v)$ if $v\not\ge_Rs$ and $r\ne s$; and
$C^r_c(v)=\rho(s)\,C^r_{scs}(sv)$ if $v\ge_Rs$. For $c$-sortable $v$, agreement of the raw formula with this recursion, termination by induction on the pair (rank, length), and independence of the chosen reduced Coxeter word for $c$ are proved in [[lem-cg-sortable-skips-basis-and-cover-decomposition]] (1),(2). The recursive description and these justifier assertions apply only in that sortable case; the raw formula and sign rule above remain defined and valid for every $v\in W$.

**(4) The cone.** For $c$-sortable $v$ put
$$\mathrm{Cone}_c(v):=\{x\in V:B(x,C^r_c(v))\ge0\text{ for every }r\in S\},$$
the intersection of the closed half-spaces with inward normals the skip roots,
under the identification $V\cong V^\ast$ by $B$. Nothing beyond this definition
is asserted here; that $\mathrm{Cone}_c(v)$ is a full-dimensional simplicial
cone, that its walls are the root hyperplanes of all its skip roots, and
that it is a union of chambers is proved in the later items of this page.

**(5) Abstentions.** Nothing about the projection $\pi_c$, greatest sortable
elements, chamber unions, monotonicity, the traditional Cambrian congruence or
noncrossing partitions is asserted here, and no finiteness of $W$ beyond the
finite-type hypothesis of this page is used. No Choice is used.

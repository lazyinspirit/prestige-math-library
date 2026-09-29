---
id: lem-proj-irrelevant-and-nilpotent-boundaries
kind: lemma
title: "Empty Proj and irrelevant torsion"
status: published
origin: pipeline
deps:
  - def-proj-graded-ring-points
  - def-axiom-of-choice
  - lem-proj-associated-sheaf-basic-sections
  - lem-proj-prime-localization-correspondence
  - cor-ac-iff-zorn
  - thm-zorn
  - cor-maximal-ideals-are-prime
  - def-prime-and-maximal-ideals
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Gao-Zhang, Lectures on Algebraic Geometry, Chapter 5"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Statement

Assume the Axiom of Choice for the prime-ideal criterion
([[def-axiom-of-choice]]). Let $S=\bigoplus_{d\ge0}S_d$ be a commutative
nonnegatively graded ring with $\operatorname{Proj}S$ as in
[[def-proj-graded-ring-points]], and let $M$ be a graded $S$-module with
associated sheaf $\widetilde M$ on $\operatorname{Proj}S$
([[def-associated-sheaf-graded-module-proj]]). Then:

1. $\operatorname{Proj}S=\varnothing$ if and only if every homogeneous element
   of $S_+=\bigoplus_{d>0}S_d$ is nilpotent.
2. If $S_+$ is finitely generated as an ideal, this is equivalent to $S_+$
   being nilpotent: $S_+^N=0$ for some $N\ge0$.
3. If $m\in M$ satisfies $S_+^{\,r}m=0$ for some $r\ge0$, then for every
   homogeneous $f\in S_+$ of positive degree the image of $m$ in the full
   localisation $M_f$ is zero. Consequently every degree-zero fraction with
   such a numerator is zero in
   $M_{(f)}=\Gamma(D_+(f),\widetilde M)$. No converse is asserted
   without degree-one generation of $S$ over $S_0$.

The zero ring $S=0$ and the case $S_+=0$ are included: both are covered by
statement 1 and 2 with $\operatorname{Proj}S=\varnothing$.

## Facts & Assumptions

**Given:** A commutative nonnegatively graded ring $S$, a graded $S$-module $M$, elements $f\in S_+$ homogeneous of positive degree, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $\operatorname{Proj}S$ is the set of homogeneous prime ideals $\mathfrak p$ with $S_+\not\subseteq\mathfrak p$, and every prime ideal contains the nilradical, so contains all nilpotent elements. ([[def-proj-graded-ring-points]])

[F2] Over $\mathsf{ZF}$ the Axiom of Choice is equivalent to Zorn's lemma: a nonempty poset in which every chain has an upper bound has a maximal element. ([[cor-ac-iff-zorn]], [[thm-zorn]])

[F3] Every maximal ideal of a commutative ring is prime, and every maximal ideal is proper. ([[cor-maximal-ideals-are-prime]], [[def-prime-and-maximal-ideals]])

[F4] For a prime ideal $\mathfrak q\subseteq S_{(f)}$ the set $P(\mathfrak q)=\{a\in S\ \text{homogeneous}:a^{\deg f}/f^{\deg a}\in\mathfrak q\}$ spans a homogeneous prime ideal $\mathfrak p(\mathfrak q)\subseteq S$ with $f\notin\mathfrak p(\mathfrak q)$. ([[lem-proj-prime-localization-correspondence]])

[F5] For homogeneous $f\in S_+$ of positive degree there is a canonical identification $\Gamma(D_+(f),\widetilde M)=M_{(f)}=(M[f^{-1}])_0$, and the sections on the charts determine $\widetilde M$. ([[lem-proj-associated-sheaf-basic-sections]])

## Proof

**Proof technique:** direct: relate emptiness of Proj to nilpotency through the standard charts and prime existence, convert finite generation into a nilpotency exponent by a pigeonhole count on monomials, and localise an element killed by $S_+$.

1.1 Empty Proj from all-nilpotent. Suppose every homogeneous element of $S_+$ is nilpotent and let $\mathfrak p\subseteq S$ be a homogeneous prime. All nilpotents lie in $\mathfrak p$ by [F1], so $S_+\subseteq\mathfrak p$ and $\mathfrak p$ is not a point of $\operatorname{Proj}S$; hence $\operatorname{Proj}S=\varnothing$, which is the easy half of (1). [F1, cases: all nilpotent]

1.2 Finite generation forces a nilpotency exponent. Assume $S_+=(f_1,\dots,f_m)$ is finitely generated as an ideal with each $f_i$ homogeneous of positive degree, and assume every homogeneous element of $S_+$ is nilpotent. If $m=0$, then $S_+=0$ and $S_+^1=0$, so take $N=1$. Otherwise choose exponents $e_i\ge1$ with $f_i^{e_i}=0$ and put $N=e_1+\dots+e_m$. The ideal $S_+^N$ is spanned by the monomials $f_{i_1}\cdots f_{i_N}$: expanding each of $N$ factors of a product of elements of $S_+$ as an $S$-combination of the generators exhibits every element of $S_+^N$ as an $S$-combination of such monomials. For a monomial let $c_i$ be the number of occurrences of $f_i$; then $c_1+\dots+c_m=N$, so if $c_i\le e_i-1$ for all $i$ we would get $N\le N-m<N$, a contradiction; hence some $c_i\ge e_i$, the monomial is divisible by $f_i^{e_i}=0$, and the monomial vanishes. Thus $S_+^N=0$. [algebra, cases: finitely generated]

1.3 Irrelevant torsion is invisible on every chart. Let $m\in M$ with $S_+^{\,r}m=0$ and let $f\in S_+$ be homogeneous of positive degree. Then $f^{r}\in S_+^{\,r}$, so $f^{r}m=0$ in $M$, hence the class of $m$ in the full localisation $M_f$ is zero. If a degree-zero fraction $m/f^k$ is formed from such a homogeneous $m$, it too is zero in the degree-zero component $M_{(f)}=(M[f^{-1}])_0$, which by [F5] is $\Gamma(D_+(f),\widetilde M)$. As $f$ was arbitrary, claim (3) follows on every standard chart. [F5, algebra]

2.1 Nonempty chart from a nonnilpotent element. Suppose $f\in S_+$ is homogeneous of positive degree and not nilpotent. Then $1=f^{\deg f}/f^{\deg f}\neq0$ in the degree-zero localisation $S_{(f)}$, because $S_{(f)}=0$ would force $f$ to be nilpotent; hence $S_{(f)}$ is a nonzero commutative ring, its proper ideals form a nonempty poset in which every chain has an upper bound, and Zorn's lemma [F2] provides a maximal ideal $\mathfrak q\subseteq S_{(f)}$, which is prime by [F3]. By [F4] there is a homogeneous prime $\mathfrak p(\mathfrak q)\subseteq S$ with $f\notin\mathfrak p(\mathfrak q)$; since $f\in S_+$ this gives $S_+\not\subseteq\mathfrak p(\mathfrak q)$, so $\mathfrak p(\mathfrak q)\in\operatorname{Proj}S$ and $\operatorname{Proj}S\neq\varnothing$. Together with step 1.1 this proves (1). [A1, F1, F2, F3, F4, step 1.1, cases: nonnilpotent element]

2.2 Converse and zero cases. If $S_+^N=0$ then every element of $S_+$ is nilpotent, so the two conditions of (2) are equivalent; this argument also covers $m=0$, where $S_+=0=S_+^1$, and the zero ring $S=0$, where $\operatorname{Proj}S=\varnothing$ by [F1] and $S_+$ is nilpotent. [step 1.2, cases: zero ring]

3.1 Conclusion. Steps 1.1 and 2.1 prove the emptiness criterion (1), steps 1.2 and 2.2 the finite-generation form (2), and step 1.3 the local vanishing of irrelevant torsion (3). The Axiom of Choice [A1] is used exactly once, through Zorn's lemma [F2], to produce a prime ideal in the nonzero ring $S_{(f)}$ in step 2.1; steps 1.2 and 1.3 are choice-free. No converse of (3) is claimed: without degree-one generation an element can vanish in every chart localisation without being annihilated by a power of $S_+$, and this boundary is not decided here. [A1, F2, step 1.2, step 2.1, step 1.3]
\qed

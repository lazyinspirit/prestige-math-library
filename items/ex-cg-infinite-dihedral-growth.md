---
id: ex-cg-infinite-dihedral-growth
kind: example
title: "Infinite dihedral growth, the infinite Steinberg identity, and the failure of polynomial reciprocity"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 22
axiom_use: "No choice principle is used. The comparison with thm-cg-finite-poincare-exponent-product-and-reciprocity (2) uses only its choice-free longest-element reciprocity argument; its AC-dependent degree branch is not used."
deps: [def-cg-length-series-descent-generating-polynomial, def-formal-power-series-and-coefficient-extraction, def-hh-coxeter-matrix-word-group-and-length, def-rational-formal-power-series-and-reduced-denominator, lem-hh-dihedral-root-recurrence-and-root-sign, thm-cg-finite-poincare-exponent-product-and-reciprocity, thm-cg-parabolic-growth-factorization-and-rationality, thm-formal-power-series-unit-criterion]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Björner and F. Brenti, Combinatorics of Coxeter Groups, GTM 231 (class-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 1.2, printed pp. 4-7, Examples 1.2.2 and 1.2.7: the rank-two universal Coxeter presentation, reduced alternating words and $I_2(\\infty)$; Chapter 7.1, printed pp. 203-204, Corollary 7.1.4(ii): the infinite-case identity. These are convention comparisons; the growth series and identity are calculated locally."
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (author manuscript of the book)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 17.1, printed pp. 317-318, Corollaries 17.1.5(ii) and 17.1.6: the infinite Steinberg identity and rationality by rank induction; Chapter 4.7, printed p. 53, Lemma 4.7.2: every right descent parabolic is finite, which implies that no element has all descents when $W$ is infinite. These are independent comparisons."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $W=\langle s,t\mid s^2=t^2=1\rangle$ be the infinite dihedral Coxeter group, so $S=\{s,t\}$ and $m(s,t)=\infty$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[lem-hh-dihedral-root-recurrence-and-root-sign]] (3)(c),(4)). Then:

**(1) Growth series.** Every word reduces by canceling adjacent equal generators to an alternating word. For each $q\ge1$, the two alternating words $(st)^q$ and $(ts)^q$ have length $2q$; for each $q\ge0$, $(st)^qs$ and $(ts)^qt$ have length $2q+1$. These words are reduced by [[lem-hh-dihedral-root-recurrence-and-root-sign]] (7), with the generators interchanged for the words beginning with $t$; their pairwise distinctness is proved in step 1.1 below using the infinite order of $st$ from (4). They exhaust the nonidentity elements, so $W$ has one element of length $0$ and exactly two of each length $n\ge1$:
$$P_W(t)=1+2t+2t^2+2t^3+\cdots=1+\frac{2t}{1-t}=\frac{1+t}{1-t}\in\mathbb Q(t)$$
The coefficientwise identity $(1-t)P_W=1+t$ follows from the displayed coefficients by the Cauchy product ([[def-formal-power-series-and-coefficient-extraction]]), and $1-t$ has unit constant term ([[thm-formal-power-series-unit-criterion]], [[def-rational-formal-power-series-and-reduced-denominator]]).

**(2) The infinite Steinberg identity.** The spherical subsets are $\emptyset,\{s\},\{t\}$, with $P_{W_\emptyset}=1$, $P_{W_{\{s\}}}=P_{W_{\{t\}}}=1+t$, and $P_W=(1+t)/(1-t)$; the infinite case of [[thm-cg-parabolic-growth-factorization-and-rationality]] (4) reads
$$1-\frac{2}{1+t}+\frac{1-t}{1+t}=0,$$
i.e. $1/P_W(t)=\frac{1-t}{1+t}$, as the formal inverse of $(1+t)/(1-t)$ requires ([[thm-formal-power-series-unit-criterion]]).

**(3) Failure of polynomial reciprocity.** The reduced words in (1) have unbounded lengths, so $W$ has no longest element; the infinite-case result of [[thm-cg-parabolic-growth-factorization-and-rationality]] (1) also gives that no element has all descents. For comparison, the finite-case pattern $t^NP_W(t^{-1})=P_W(t)$ is the reciprocity of [[thm-cg-finite-poincare-exponent-product-and-reciprocity]] (2). Here the rational function satisfies
$$P_W(t^{-1})=\frac{1+t^{-1}}{1-t^{-1}}=-\frac{1+t}{1-t}=-P_W(t).$$
Thus, for every $N\ge0$, $t^NP_W(t^{-1})=-t^NP_W(t)$; equality with $P_W(t)$ would force $t^N=-1$ in $\mathbb Q(t)$, which is impossible. The substitution is interpreted in the rational-function field, not as an element of $\mathbb Z\llbracket t\rrbracket$. More generally, an infinite Coxeter group with finite $S$ has unbounded length (there are only finitely many words of bounded length), so its growth series is not a polynomial and the finite reciprocity theorem does not apply as a polynomial statement. This alone makes no assertion about rational-function reciprocity for other infinite Coxeter systems.

**(4) Rank-one comparison.** The parabolic $W_{\{s\}}=\{1,s\}$ has $P_{W_{\{s\}}}(t)=1+t=[2]_t$. The infinite growth series is not a finite product $[m]_t[2]_t$ for any finite $m$, since every such product is a polynomial while $P_W$ has infinitely many nonzero coefficients. With the conventions of the companion page, this same group is denoted $I_2(\infty)$.

## Facts & Assumptions

**Given:** The presented group $W=\langle s,t\mid s^2=t^2=1\rangle$, the Coxeter matrix with $m(s,t)=\infty$ on $S=\{s,t\}$, its length function $\ell$, and the series $P_A(t)=\sum_{w\in A}t^{\ell(w)}$ of [[def-cg-length-series-descent-generating-polynomial]].

[L1] For $m(s,t)=\infty$ the rank-two product $st$ has infinite order in $W$ and the elements $s,t\in W$ are distinct involutions ([[lem-hh-dihedral-root-recurrence-and-root-sign]] (3)(c),(4)).

[L2] Every alternating word beginning with either $s$ or $t$ of length $q\ge1$ is reduced in the ambient group (apply the source also with $s,t$ interchanged) ([[lem-hh-dihedral-root-recurrence-and-root-sign]] (7)).

[L3] The defining relators $s^2=t^2=1$ allow adjacent equal letters to be canceled without changing the represented element; $\ell(w)$ is the minimum length of a generator word representing $w$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[L4] For every $A\subseteq W$ the series $P_A=\sum_{w\in A}t^{\ell(w)}$ is well-defined ([[def-cg-length-series-descent-generating-polynomial]] (1)); a series is rational if $QF=P$ for polynomials with $Q(0)$ a unit ([[def-rational-formal-power-series-and-reduced-denominator]]).

[L5] For $J\subseteq S$, $W^J=\{w:\ell(ws)>\ell(w)\text{ for all }s\in J\}$ and $P_W=P_{W^J}P_{W_J}$ ([[thm-cg-parabolic-growth-factorization-and-rationality]] (2)).

[L6] For infinite $W$, $\sum_{K\subseteq S}(-1)^{|K|}/P_{W_K}(t)=0$ ([[thm-cg-parabolic-growth-factorization-and-rationality]] (4)).

[L7] For infinite $W$, no element has all descents ([[thm-cg-parabolic-growth-factorization-and-rationality]] (1)).

[L8] The finite-case pattern is $t^{N}P_W(t^{-1})=P_W(t)$ with $N=\ell(w_0)$ ([[thm-cg-finite-poincare-exponent-product-and-reciprocity]] (2)); its longest-element reciprocity argument is choice-free and its basic-degree branch is not used here.

[L9] The Cauchy product is defined coefficientwise by finite sums, and a series with unit constant term has a unique formal inverse; here $1+t$ and $(1+t)/(1-t)$ have constant term $1$ ([[def-formal-power-series-and-coefficient-extraction]], [[thm-formal-power-series-unit-criterion]]).

## Verification

**Proof technique:** direct.

1.1 Every word in $s,t$ can be shortened by canceling an adjacent pair $ss$ or $tt$ by [L3], so a shortest word is alternating. For each $q\ge1$ the two alternating words of length $2q$ are $(st)^q,(ts)^q$, and for each $q\ge0$ the two of length $2q+1$ are $(st)^qs,(ts)^qt$. They are reduced by [L2], so unequal lengths give unequal elements. Put $r=st$, so $ts=r^{-1}$ and $t=r^{-1}s$. At the same even length $2q>0$, equality of the two words would give $r^q=r^{-q}$ and hence $r^{2q}=1$; at the same odd length $2q+1$, equality would give $r^qs=r^{-q}t=r^{-q-1}s$ and hence $r^{2q+1}=1$. Both contradict the infinite order in [L1]. Equivalently, the presentation admits the parity homomorphism sending both generators to $-1$, because each defining relator has even length, so even and odd words cannot coincide. Every element has one of these forms or is the identity. Thus $[t^0]P_W=1$ and $[t^n]P_W=2$ for every $n\ge1$. By the Cauchy-product definition, $(1-t)P_W=1+t$: its coefficients are $1$ at degree $0$, $2-1=1$ at degree $1$, and $2-2=0$ at every degree $n\ge2$. Since $1-t$ has unit constant term, $P_W=(1+t)/(1-t)$ in $\mathbb Z\llbracket t\rrbracket$, and [L4] makes this a rational series. [L1, L2, L3, L4, L9, algebra]

2.1 A subset $I\subseteq S$ is spherical exactly when $W_I$ is finite. The three proper parabolics $W_\emptyset=\{1\}$, $W_{\{s\}}=\{1,s\}$ and $W_{\{t\}}=\{1,t\}$ are finite; $W_S=W$ is infinite by [L1]. Thus the spherical subsets are exactly $\emptyset,\{s\},\{t\}$, with $P_{W_\emptyset}=1$ and $P_{W_{\{s\}}}=P_{W_{\{t\}}}=1+t$, while all four subsets occur in the Steinberg sum of [L6]. Substituting $P_W=(1+t)/(1-t)$ from step 1.1 gives $1-2/(1+t)+1/P_W=1-2/(1+t)+(1-t)/(1+t)=0$, the infinite case of [L6]. [step 1.1, L1, L6, algebra]

2.2 In $\mathbb Q(t)$, $P_W(t^{-1})=(1+t^{-1})/(1-t^{-1})=-P_W(t)$. If $t^{N}P_W(t^{-1})=P_W(t)$ for some $N\ge0$, then $-t^NP_W(t)=P_W(t)$; since $P_W\ne0$, this forces $t^N=-1$, impossible in $\mathbb Q(t)$. Thus no such $N$ exists. The alternating words in step 1.1 have unbounded lengths, so $W$ has no longest element; the infinite-case statement of [L7] also says no element has all descents. [step 1.1, L1, L7, L8, algebra]

3.1 The series $P_W=(1+t)/(1-t)$ and $(1-t)/(1+t)$ are inverse to each other in $\mathbb Q\llbracket t\rrbracket$: their product is $1$, and both have constant term $1$, so by [L9] $(1-t)/(1+t)=1/P_W(t)$ as a formal inverse. This is the identity verified in step 2.1 and shows that $1/P_W$ is rational while $P_W$ has infinitely many positive coefficients. [step 1.1, step 2.1, L4, L9, algebra]

4.1 The rank-one parabolic $W_{\{s\}}=\{1,s\}$ has $P_{W_{\{s\}}}(t)=1+t=[2]_t$. The reduced forms in step 1.1 with no right $t$-descent are the identity and the alternating words ending in $s$, exactly one of each length; hence $P_{W^{\{t\}}}=1+t+t^2+\cdots$. By [L5], $P_W=P_{W^{\{t\}}}P_{W_{\{t\}}}=(1+t)(1+t+t^2+\cdots)$, which is not a polynomial. No finite $m$ has $[2]_t[m]_t=(1+t)/(1-t)$, since the left side is a polynomial and the right has infinitely many nonzero coefficients. The same group is denoted $I_2(\infty)$. [step 1.1, step 2.1, L4, L5, algebra] ∎

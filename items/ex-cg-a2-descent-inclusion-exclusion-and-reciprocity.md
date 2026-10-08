---
id: ex-cg-a2-descent-inclusion-exclusion-and-reciprocity
kind: example
title: "The A2 = S3 case: Steinberg inclusion-exclusion, degree product, and reciprocity"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 22
axiom_use: "The basic-degree comparison uses the Axiom of Choice through thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees. Lengths, descents, the Steinberg calculation and longest-element reciprocity are proved by finite enumeration without choice."
deps: [def-cg-length-series-descent-generating-polynomial, def-finite-cardinality, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, lem-cg-classical-type-poincare-products, thm-cg-finite-parabolic-longest-element-and-opposition, thm-cg-finite-poincare-exponent-product-and-reciprocity, thm-cg-parabolic-growth-factorization-and-rationality, def-axiom-of-choice, thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Björner and F. Brenti, Combinatorics of Coxeter Groups, GTM 231 (class-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 7.1, printed pp. 203-205: Corollary 7.1.4(i) gives the finite Steinberg identity and formula (7.5) gives the type-A product, both used as independent comparisons; Chapter 2.3, printed pp. 36-37, Proposition 2.3.2 and Corollary 2.3.3, give longest-element length complementation."
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (author manuscript of the book)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 17.1, printed p. 318, Corollary 17.1.5(i), gives the finite Steinberg identity as an independent comparison; the rank-two calculation and all needed polynomial algebra are carried out locally."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $W=S_3$ in its type $A_2$ Coxeter presentation with $S=\{s_1,s_2\}$ ([[def-finite-symmetric-group-and-permutation-notation]], [[def-inversions-inversion-number-and-sign]]). The library defines $S_3$ on $\{0,1,2\}$; the order-preserving relabelling $j\mapsto j+1$ identifies it with permutations of $\{1,2,3\}$ and preserves inversion number, so we write the adjacent generators as $s_1=(1\ 2)$ and $s_2=(2\ 3)$. This is the smallest-rank finite Coxeter system whose diagram is not a product of copies of $A_1$. The example checks the finite $A_2$ instances of parabolic factorization, descent inclusion-exclusion and the Steinberg identity of [[thm-cg-parabolic-growth-factorization-and-rationality]], and of the degree product and reciprocity of [[thm-cg-finite-poincare-exponent-product-and-reciprocity]]. The lengths, descents and reciprocity calculations use no choice. The basic-degree comparison assumes the Axiom of Choice ([[def-axiom-of-choice]]) through the degree-table supplier cited in (3).

**(1) Lengths and Poincare polynomial.** The six elements are $1$ (length $0$), $s_1,s_2$ (length $1$), $s_1s_2,s_2s_1$ (length $2$) and $w_0=s_1s_2s_1=s_2s_1s_2$ (length $3$); hence $P_W(t)=1+2t+2t^2+t^3=[2]_t[3]_t=t^3P_W(t^{-1})$, with $N=\ell(w_0)=3=|\Phi_+|$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(ii)).

**(2) Descent classes and Steinberg identity.** The right descent sets are $D_R(1)=\emptyset$, $D_R(s_1)=\{s_1\}$, $D_R(s_2)=\{s_2\}$, $D_R(s_1s_2)=\{s_2\}$, $D_R(s_2s_1)=\{s_1\}$, $D_R(w_0)=\{s_1,s_2\}$, so $D^S_S(t)=t^3$ and, with the interval convention $D^J_I=\{w:I\subseteq D_R(w)\subseteq J\}$ of [[def-cg-length-series-descent-generating-polynomial]] (2), the nine interval series are
$$D^{\emptyset}_{\emptyset}(t)=1,\quad D^{\{s_i\}}_{\emptyset}(t)=1+t+t^2,\quad D^S_{\emptyset}(t)=P_W(t)=1+2t+2t^2+t^3,\quad D^{\{s_i\}}_{\{s_i\}}(t)=t+t^2,\quad D^S_{\{s_i\}}(t)=t+t^2+t^3\ (i=1,2),\quad D^S_S(t)=t^3.$$
The parabolic series are $P_{W_\emptyset}=1$ and $P_{W_{\{s_i\}}}=1+t$. The Steinberg identity ([[thm-cg-parabolic-growth-factorization-and-rationality]] (4)) reads
$$1-\frac{2}{1+t}+\frac{1}{1+2t+2t^2+t^3}=\frac{t^3}{1+2t+2t^2+t^3},$$
which is a polynomial identity after clearing denominators, and equivalently $1/P_W(t^{-1})=\sum_{K}(-1)^{|K|}/P_{W_K}(t)$.

**(3) Degree product.** The basic degrees of $A_2$ are $2$ and $3$ ([[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]] (2), under the stated AC premise), so $\prod_i[d_i]_t=[2]_t[3]_t=P_W(t)$, $|W|=P_W(1)=6$ ([[def-finite-cardinality]]) and $\sum_i(d_i-1)=1+2=3=N$.

**(4) Reciprocity.** $t^3P_W(t^{-1})=t^3(1+2t^{-1}+2t^{-2}+t^{-3})=t^3+2t^2+2t+1=P_W(t)$: the coefficient sequence $(1,2,2,1)$ is palindromic, in agreement with [[thm-cg-finite-poincare-exponent-product-and-reciprocity]] (2).

## Facts & Assumptions

**Given:** The symmetric group $W=S_3$ in the type $A_2$ presentation with simple generators $s_1,s_2$, its length function $\ell$, the Axiom of Choice for the basic-degree comparison, the descent sets $D_L,D_R$ and the series $P_A$, $D^J_I$ of [[def-cg-length-series-descent-generating-polynomial]].

[L1] Under the order-preserving relabelling $j\mapsto j+1$, the library's $S_3=\operatorname{Sym}(\{0,1,2\})$ is identified with permutations of $\{1,2,3\}$ and its adjacent generators are $s_1=(1\ 2)$ and $s_2=(2\ 3)$ ([[def-finite-symmetric-group-and-permutation-notation]]). Direct composition gives the distinct one-line forms $[1,2,3]$, $[2,1,3]$, $[1,3,2]$, $[2,3,1]$, $[3,1,2]$, $[3,2,1]$ for $1,s_1,s_2,s_1s_2,s_2s_1,w_0=s_1s_2s_1=s_2s_1s_2$, respectively. These are all one-line arrangements of three entries. In the type-$A_2$ presentation, canceling $s_i^2$ makes every word alternating, and the braid relation reduces every alternating word of length at least four to a shorter word; thus the six listed words exhaust the presentation. Their inversion numbers are $0,1,1,2,2,3$ ([[def-inversions-inversion-number-and-sign]]); their lengths have these same values, since the length-two words are distinct from the identity and generators, while $w_0$ is distinct from all words of length at most two.

[L2] The element $w_0=s_1s_2s_1=s_2s_1s_2$ has length $3$ and is longest by [L1]; the finite longest-element result gives $\ell(w_0)=|\Phi_+|$ and $\ell(w_0w)=\ell(w_0)-\ell(w)$ for all $w\in W$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(ii),(iii)). Thus $N=\ell(w_0)=3=|\Phi_+|$.

[L3] $P_A(t)=\sum_{w\in A}t^{\ell(w)}$ for $A\subseteq W$ ([[def-cg-length-series-descent-generating-polynomial]] (1)).

[L4] $D^J_I(t)=\sum_{\{w:I\subseteq D_R(w)\subseteq J\}}t^{\ell(w)}$ uses the inclusive interval convention ([[def-cg-length-series-descent-generating-polynomial]] (2)).

[L5] The factorization theorem gives unique length-additive parabolic factorizations; for $I=\{s_2\}$, $W^{\{s_2\}}=\{1,s_1,s_2s_1\}$ and $W_{\{s_2\}}=\{1,s_2\}$ ([[thm-cg-parabolic-growth-factorization-and-rationality]] (2)).

[L6] For all $I\subseteq J\subseteq S$ one has $D^J_I(t)=\sum_{J\setminus I\subseteq K\subseteq J}(-1)^{|J\setminus K|}P_{W^{S\setminus K}}(t)$ with $W^{S\setminus K}=\{w:D_R(w)\subseteq K\}$ ([[thm-cg-parabolic-growth-factorization-and-rationality]] (3)).

[L7] For finite $W$, $\sum_{K\subseteq S}(-1)^{|K|}/P_{W_K}(t)=t^{N}/P_W(t)$ ([[thm-cg-parabolic-growth-factorization-and-rationality]] (4)).

[L8] Under the Axiom of Choice ([[def-axiom-of-choice]]), the independently determined basic-degree table gives $d_1=2,d_2=3$ for $A_2$ ([[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]] (2)).

[L9] The longest-element bijection and the length complementation in [L2] give $t^{N}P_W(t^{-1})=P_W(t)$ for finite $W$, by summing $t^{N-\ell(w)}$ over $w$; this is the choice-free argument of [[thm-cg-finite-poincare-exponent-product-and-reciprocity]] (2), Proof 1.2.

[L10] $P_{A_2}(t)=[3]_t!$ and $P_{S_3}(t)=P_{A_2}(t)$, so the classical product gives $[2]_t[3]_t$ ([[lem-cg-classical-type-poincare-products]] (3)).

[L11] The cardinality of the six-element set $S_3$ is $6$ ([[def-finite-cardinality]]).

## Verification

**Proof technique:** direct.

1.1 **Length and parabolic factorization.** By [L1], the six elements exhaust $W$ and have lengths $0,1,1,2,2,3$; hence $P_W(t)=1+2t+2t^2+t^3=(1+t)(1+t+t^2)=[2]_t[3]_t$ and $N=\ell(w_0)=3=|\Phi_+|$ by [L2]. For $I=\{s_2\}$, [L5] gives $W^{\{s_2\}}=\{1,s_1,s_2s_1\}$ and $W_{\{s_2\}}=\{1,s_2\}$, so the length-additive factorization gives $P_W=P_{W^{\{s_2\}}}P_{W_{\{s_2\}}}=(1+t+t^2)(1+t)$, agreeing with the direct enumeration. [L1, L2, L3, L5, algebra]

1.2 **Descent intervals.** Reading right descents from the length table gives $D_R(1)=\emptyset$, $D_R(s_1)=\{s_1\}$, $D_R(s_2)=\{s_2\}$, $D_R(s_1s_2)=\{s_2\}$, $D_R(s_2s_1)=\{s_1\}$ and $D_R(w_0)=S$. Thus the exact-descent series for $\emptyset,\{s_1\},\{s_2\},S$ are respectively $1,t+t^2,t+t^2,t^3$. Summing these four classes over each inclusive interval gives $D^\emptyset_\emptyset=1$, $D^{\{s_i\}}_\emptyset=1+t+t^2$, $D^S_\emptyset=P_W$, $D^{\{s_i\}}_{\{s_i\}}=t+t^2$, $D^S_{\{s_i\}}=t+t^2+t^3$ and $D^S_S=t^3$ for $i=1,2$, exactly the nine cases in the statement. [L1, L4, algebra]

2.1 **Inclusion-exclusion.** Apply [L6] to the nine pairs $I\subseteq J\subseteq S$. The needed quotients are $P_{W^S}=1$, $P_{W^{\{s_i\}}}=1+t+t^2$ (the elements whose right descents omit $s_i$), and $P_{W^\emptyset}=P_W$. The six symmetry classes of pairs yield, respectively, $D^\emptyset_\emptyset=1$, $D^{\{s_i\}}_\emptyset=P_{W^{\{s_j\}}}=1+t+t^2$ for $j\ne i$, $D^S_\emptyset=P_W$, $D^{\{s_i\}}_{\{s_i\}}=-P_{W^S}+P_{W^{\{s_j\}}}=-1+(1+t+t^2)=t+t^2$, $D^S_{\{s_i\}}=-P_{W^{\{s_i\}}}+P_W=t+t^2+t^3$, and $D^S_S=P_{W^S}-P_{W^{\{s_1\}}}-P_{W^{\{s_2\}}}+P_W=t^3$. This verifies every interval value in the statement directly from the formula. [L4, L6, step 1.1, step 1.2, algebra]

2.2 **Steinberg identity.** Substituting $P_{W_\emptyset}=1$, $P_{W_{\{s_1\}}}=P_{W_{\{s_2\}}}=1+t$ and $P_W=1+2t+2t^2+t^3$ into the finite identity of [L7] gives $1-2/(1+t)+1/P_W=t^3/P_W$. Clearing the denominator $(1+t)P_W$ yields $(1+t)P_W-2P_W+(1+t)=t^3(1+t)$; both sides equal $t^3+t^4$. The reciprocity of [L9] gives $t^3/P_W=1/P_W(t^{-1})$, so this is also the rational-function identity displayed in the statement. [step 1.1, L7, L9, algebra]

3.1 **Degree product and reciprocity.** By [L8], the basic degrees of $A_2$ are $2$ and $3$, and by [L10] the classical product is $[2]_t[3]_t=P_W(t)$; this agrees with step 1.1. At $t=1$, $P_W(1)=6=|W|$ by [L11]. Also $\sum_i(d_i-1)=1+2=3=N$ by step 1.1, and $t^3P_W(t^{-1})=t^3(t^{-3}+2t^{-2}+2t^{-1}+1)=1+2t+2t^2+t^3=P_W(t)$, so the coefficient sequence $(1,2,2,1)$ is palindromic as in [L9]. [step 1.1, L1, L8, L9, L10, L11, algebra] ∎

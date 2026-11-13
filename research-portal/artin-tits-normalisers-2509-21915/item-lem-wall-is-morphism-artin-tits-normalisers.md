---
title: Wall-crossing elements are Brink–Howlett morphisms
status: draft
research_item: lem-wall-is-morphism-artin-tits-normalisers
dependency_level: 10
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 15, Lemma 4.2
      statement: If I is an associate of J, a is outside I, and W_[I,a] is finite,
        then v_(a,I) is a Brink–Howlett morphism from I to I+a−iota_[I,a](a).
      hypotheses: The Coxeter-system notation of the article and the finiteness of W_[I,a].
      reading_limits: The frozen extracted text of Lemma 4.2 and its proof was read.
        This citation attributes the article claim; it is not a proof premise.
---

PDF p. 15: ` Lemma 4.2 `

## Prerequisites

- [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)
- [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers)
- [def-longest-elements-artin-tits-normalisers](item-def-longest-elements-artin-tits-normalisers)
- [def-associates-artin-tits-normalisers](item-def-associates-artin-tits-normalisers)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword)
- [math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition)


## Statement

Let $(W,S)$ be a Coxeter system with simple generators $s_i$ and simple roots $\alpha_i$ indexed by the vertices $\Gamma_0$ of its Coxeter diagram. Fix $J\subseteq\Gamma_0$, and let $I$ be an associate of $J$, meaning that $W_I=\langle s_i:i\in I\rangle$ is conjugate to $W_J$ in $W$. Choose $a\in\Gamma_0\setminus I$, and let $D=[I,a]$ be the component containing $a$ in the diagram induced on $I\cup\{a\}$. Suppose $W_D$ is finite. For a finite standard parabolic $W_L$, write $w_L$ for its longest element and $\iota_L$ for the permutation of $L$ such that $w_L\alpha_i=-\alpha_{\iota_L(i)}$. Put $E=D\setminus\{a\}$, $K=(I\cup\{a\})\setminus\{\iota_D(a)\}$ and $v_{a,I}=w_Ew_D$.

Then $K$ is an associate of $J$, and $v_{a,I}$ is a Brink–Howlett morphism from $I$ to $K$: explicitly, $\{v_{a,I}\alpha_k:k\in K\}=\{\alpha_i:i\in I\}$.

## Statement references

[def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)

[def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers)

[def-longest-elements-artin-tits-normalisers](item-def-longest-elements-artin-tits-normalisers)

[def-associates-artin-tits-normalisers](item-def-associates-artin-tits-normalisers)

[def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

## Facts & Assumptions

[F1] For finite $W_L$, the longest element and opposition permutation are defined by $w_L\alpha_i=-\alpha_{\iota_L(i)}$. [def-longest-elements-artin-tits-normalisers](item-def-longest-elements-artin-tits-normalisers)

[F2] A standard parabolic on a finite subset of the simple generators is the Coxeter group for its restricted matrix, with its intrinsic length equal to ambient length. [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword)

[F3] In a finite Coxeter system, its longest element is an involution and conjugates each simple generator to the generator indexed by its opposition image. [math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition)

[F4] Distinct diagram vertices with no edge have Coxeter exponent two. Their generators commute, and the reflection formula makes either generator fix the other's simple root. [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

[F5] The component $D$ contains $a$ and has no diagram edge to any vertex of $(I\cup\{a\})\setminus D$. [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers)

[F6] An associate is a subset with conjugate standard parabolic subgroup; a Brink–Howlett morphism $I\to K$ is an element sending the simple-root set indexed by $K$ onto that indexed by $I$. [def-associates-artin-tits-normalisers](item-def-associates-artin-tits-normalisers) [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)

## Proof
**Given:** The Coxeter system, subsets and elements in the Statement.


**Proof technique:** direct.

**Goal:** Show that $v_{a,I}$ maps the simple roots and generators indexed by $K$ bijectively to those indexed by $I$.

1.1 The distinct simple generators $s_i$ indexed by $D$ belong to the finite group $W_D$, so $D$ is finite. Hence $E\subseteq D$ is finite, and $W_E\leq W_D$ is finite. By [F2], apply [F3] to the finite Coxeter systems on $D$ and $E$. Their longest elements are involutions, and their opposition permutations are involutions: applying $w_L^2=1$ to $\alpha_i$ and using [F1] gives $\alpha_i=\alpha_{\iota_L^2(i)}$, so $\iota_L^2(i)=i$. The same application of [F3] gives $w_Ls_iw_L^{-1}=s_{\iota_L(i)}$ for $i\in L$, with $L=D$ or $E$. [F1, F2, F3, given]

2.1 Put $R=I\setminus D$. Since $a\in D$ and $D\subseteq I\cup\{a\}$, one has $I=R\sqcup E$ and $K=R\sqcup(D\setminus\{\iota_D(a)\})$. The involution $\iota_D$ maps $D\setminus\{\iota_D(a)\}$ bijectively onto $E$. For $k$ in this set, [F1] therefore gives $v_{a,I}\alpha_k=\alpha_{\iota_E(\iota_D(k))}$, and step 1.1 gives $v_{a,I}s_kv_{a,I}^{-1}=s_{\iota_E(\iota_D(k))}$. These images run bijectively over the roots and generators indexed by $E$. [F1, F5, step 1.1, given]

3.1 For $k\in R$, there is no edge from $k$ to a vertex of $D$ by [F5]. Hence every generator in $D$ fixes $\alpha_k$ and commutes with $s_k$ by [F4]. Since $w_E,w_D\in W_D$, it follows that $v_{a,I}\alpha_k=\alpha_k$ and $v_{a,I}s_kv_{a,I}^{-1}=s_k$. Combining this with step 2.1 yields both $v_{a,I}\{\alpha_k:k\in K\}=\{\alpha_i:i\in I\}$ and $v_{a,I}W_Kv_{a,I}^{-1}=W_I$. [F4, F5, step 2.1]

4.1 Because $W_I$ is conjugate to $W_J$, step 3.1 shows that $W_K$ is also conjugate to $W_J$. Thus $K$ is an associate of $J$, and the root-set equality of step 3.1 makes $v_{a,I}$ a morphism $I\to K$ by [F6]. This proves the claim. [F6, step 3.1, given] ∎

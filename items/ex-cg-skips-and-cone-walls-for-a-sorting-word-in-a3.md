---
id: "ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3"
kind: "example"
title: "All skips and the cone walls of the sortable element s1s2 in A3"
status: draft
origin: pipeline
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 26
deps:
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - def-cg-sortable-element-skip-roots-and-cone
  - lem-cg-sortable-skips-basis-and-cover-decomposition
  - lem-cg-sortable-cone-criterion-and-projection-monotonicity
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-canonical-reflection-homomorphism
  - lem-cg-reflection-representation-descends-and-root-norms
  - def-hh-coxeter-matrix-word-group-and-length
  - lem-cg-weak-parabolic-projection-and-cover-joins
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Propositions 5.1 and 5.2, p. 26, and Example 5.5, pp. 26-27 (skip roots and cover roots); Theorem 6.3 is stated on p. 32 and proved on p. 37"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 2, pp. 5-6 (sorting-word conventions and recursion), and Figure 2, p. 4 (sorting words of all 24 elements of A_3 for c=s_2s_1s_3; illustrative background)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 4.4, pp. 101-105 (roots and inversion sets; corroborative background)"
verification:
  precheck: pass
---

## Statement

Let $(W,S)$ be of type $A_3$, $S=\{s_1,s_2,s_3\}$, $c=s_1s_2s_3$ and $v=s_1s_2$. Put $\mathrm{Cov}(v):=\{t_\alpha:\alpha\in\operatorname{cov}(v)\}$ for its cover reflections, with $\operatorname{cov}(v)$ the positive-root set of [[lem-cg-weak-parabolic-projection-and-cover-joins]] (4). Then $v$ is $c$-sortable, its sorting word is $s_1s_2$ at positions $1,2$ of the first block of $c^\infty$, and its block sequence is the single subset $\{s_1,s_2\}$.
**(i)** The leftmost unselected occurrences are $s_1$ at position $4$, $s_2$ at position $5$ and $s_3$ at position $3$; each skip has $i=2$, so the associated reflections are $t_{s_1}=s_1s_2s_1s_2s_1=s_2$, $t_{s_2}=s_1s_2s_1$ and $t_{s_3}=s_1s_2s_3s_2s_1$. The words $s_1s_2s_1$ and $s_1s_2s_3$ are reduced while $s_1s_2s_2$ is not, so the skips of $s_1$ and $s_3$ are unforced and the skip of $s_2$ is forced.
**(ii)** Hence the skip roots are
$$C^{s_1}_c(v)=\rho(s_1s_2)e_{s_1}=e_{s_2},\qquad C^{s_2}_c(v)=\rho(s_1s_2)e_{s_2}=-(e_{s_1}+e_{s_2}),\qquad C^{s_3}_c(v)=\rho(s_1s_2)e_{s_3}=e_{s_1}+e_{s_2}+e_{s_3}.$$
These three vectors form a basis of $V$, $\mathcal A_c(v)=\{-(e_{s_1}+e_{s_2})\}$ and $\mathcal B_c(v)=\{e_{s_2},e_{s_1}+e_{s_2}+e_{s_3}\}$. In agreement with [[lem-cg-sortable-skips-basis-and-cover-decomposition]] (3), the only element covered by $v$ in the weak order is $vs_2=s_1$, so $\mathrm{Cov}(v)=\{s_1s_2s_1\}$, whose positive root is $e_{s_1}+e_{s_2}$.
**(iii)** The cone is
$$\mathrm{Cone}_c(v)=\{x\in V:B(x,e_{s_2})\ge0,\ B(x,e_{s_1}+e_{s_2})\le0,\ B(x,e_{s_1}+e_{s_2}+e_{s_3})\ge0\},$$
and for every $x\in C$ the translate $\rho(v)x$ satisfies the three inequalities, because of the adjoint identity $B(\rho(v)x,\beta)=B(x,\rho(v)^{-1}\beta)$ together with $\rho(s_1s_2)e_{s_1}=e_{s_2}$, $\rho(s_1s_2)e_{s_2}=-(e_{s_1}+e_{s_2})$, $\rho(s_1s_2)e_{s_3}=e_{s_1}+e_{s_2}+e_{s_3}$: explicitly $B(\rho(v)x,e_{s_2})=B(x,e_{s_1})\ge0$, $B(\rho(v)x,e_{s_1}+e_{s_2})=-B(x,e_{s_2})\le0$ and $B(\rho(v)x,e_{s_1}+e_{s_2}+e_{s_3})=B(x,e_{s_3})\ge0$. Thus $vC\subseteq\mathrm{Cone}_c(v)$, in agreement with the cone criterion $\pi_c(w)=v\iff wC\subseteq\mathrm{Cone}_c(v)$ at $w=v$.

## Facts & Assumptions

**Given:** $(W,S)$ of type $A_3$ with $S=\{s_1,s_2,s_3\}$, $m(s_1,s_2)=m(s_2,s_3)=3$, $m(s_1,s_3)=2$, the Coxeter form $B$ with $B(e_{s_i},e_{s_i})=1$, $B(e_{s_1},e_{s_2})=B(e_{s_2},e_{s_3})=-\tfrac12$, $B(e_{s_1},e_{s_3})=0$, the reflection representation $\rho$, the Coxeter element $c=s_1s_2s_3$, and $v=s_1s_2$.

[F1] [[def-cg-real-coxeter-form-and-reflection]] (2): in the type-$A_3$ normalization $B(e_s,e_s)=1$ for all $s\in S$, $B(e_{s_1},e_{s_2})=B(e_{s_2},e_{s_3})=-\tfrac12$ and $B(e_{s_1},e_{s_3})=0$.

[F2] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (1),(3): $E_c(e_{s_i},e_{s_j})=K(e_{s_i},e_{s_j})$ for $i>j$, $1$ for $i=j$ and $0$ for $i<j$; $c^\infty$ has dividers after each block of $n=3$ letters and the sorting word is the leftmost reduced subword.

[F3] [[def-cg-sortable-element-skip-roots-and-cone]] (1),(2),(3),(4): the definitions of the sorting word, the skips, the associated reflection $t=a_1\cdots a_ir\,a_i\cdots a_1$, forced and unforced skips, the skip roots $C^r_c(v)=\rho(a_1\cdots a_i)e_r$, the sets $\mathcal A_c(v),\mathcal B_c(v)$ and the cone $\mathrm{Cone}_c(v)$.

[F4] [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (1): the greedy scan selects a position with letter $u$ exactly when $u$ is a left descent of the current remainder and stops at the identity.

[F5] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1),(4): the support $S(w)$ of $w$ is independent of the reduced expression, and in type $A_3$ the assignment $s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_4$; under it the length equals the inversion number of the corresponding permutation.

[F6] [[lem-cg-weak-parabolic-projection-and-cover-joins]] (4): the cover roots of $w$ are the roots $\alpha\in N(w^{-1})$ with $t_\alpha w=ws$ and $\ell(ws)=\ell(w)-1$ for some $s\in S$.

[F7] [[lem-cg-sortable-skips-basis-and-cover-decomposition]] (1),(2),(3): skip roots are $\pm\beta_t$ with sign governed by forcedness, the skip set is a basis, and $\mathcal A_c(v)=\{-\beta_t:t\in\mathrm{Cov}(v)\}$.

[F8] [[lem-cg-sortable-cone-criterion-and-projection-monotonicity]] (1): for $c$-sortable $v$ with $v\le_Rw$ one has $\pi_c(w)=v\iff wC\subseteq\mathrm{Cone}_c(v)$.

[F9] [[lem-cg-reflection-representation-descends-and-root-norms]] (2): $\rho(w)$ is $B$-preserving, so $B(\rho(w)x,\beta)=B(x,\rho(w)^{-1}\beta)$ for all $x,\beta\in V$ and $w\in W$.

[F10] [[def-hh-coxeter-matrix-word-group-and-length]]: the presentation has the relators $s^2$ for $s\in S$ and $(st)^{m(s,t)}$ for $s,t\in S$ with $m(s,t)<\infty$; in particular $s_2^2=1$ and $(s_1s_2)^3=1$.

[F11] [[def-cg-real-coxeter-form-and-reflection]] (3) and [[def-cg-canonical-reflection-homomorphism]] (1): $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ for $B(a,a)\ne0$, and $\rho(s)=r_{e_s}$ for every $s\in S$.

## Proof

1.1 The element $v=s_1s_2$ has $\ell(v)=2$ and $S(v)=\{s_1,s_2\}$ [F5]. The greedy scan of $c^\infty=s_1s_2s_3\,s_1s_2s_3\cdots$ reads the remainders $v\to s_2\to1$: position $1$ has letter $s_1\in D_L(v)$ and is selected, position $2$ has letter $s_2\in D_L(s_2)$ and is selected, and position $3$ has letter $s_3\notin D_L(1)$ — the scan stops because the remainder is already $1$ after two selections [F4]. Hence the sorting word is $s_1s_2$ at positions $1,2$ and the block sequence is the single subset $\{s_1,s_2\}$, which is weakly decreasing; so $v$ is $c$-sortable [F3]. [F2, F3, F4, F5]

2.1 The selected positions are $1,2$, so the leftmost unselected occurrences are $s_3$ at position $3$ and $s_1,s_2$ at positions $4,5$; each follows exactly $i=2$ selected letters, so all three skips occur in the $3$rd position of the sorting word [F3]. [step 1.1, F2, F3]

3.1 The associated reflections are $t_{s_1}=a_1a_2s_1a_2a_1=s_1s_2s_1s_2s_1=s_2$, $t_{s_2}=s_1s_2s_2s_2s_1=s_1s_2s_1$ and $t_{s_3}=s_1s_2s_3s_2s_1$ [F3]; the reductions use $(s_1s_2)^3=1$ for the first and $s_2^2=1$ for the second [F10]. The words $a_1a_2s_1=s_1s_2s_1$ and $a_1a_2s_3=s_1s_2s_3$ are reduced while $a_1a_2s_2=s_1s_2s_2=s_1$ is not [F5]; hence the skips of $s_1$ and $s_3$ are unforced and the skip of $s_2$ is forced [F3]. [step 2.1, F3, F5, F10]

4.1 The skip roots are $C^{s_1}_c(v)=\rho(s_1s_2)e_{s_1}=e_{s_2}$, $C^{s_2}_c(v)=\rho(s_1s_2)e_{s_2}=-(e_{s_1}+e_{s_2})$ and $C^{s_3}_c(v)=\rho(s_1s_2)e_{s_3}=e_{s_1}+e_{s_2}+e_{s_3}$: the images are computed from [F1] and [F11] as $\rho(s_2)e_{s_1}=e_{s_1}+e_{s_2}$, $\rho(s_2)e_{s_2}=-e_{s_2}$, $\rho(s_2)e_{s_3}=e_{s_2}+e_{s_3}$, $\rho(s_1)e_{s_1}=-e_{s_1}$, $\rho(s_1)e_{s_2}=e_{s_1}+e_{s_2}$ and $\rho(s_1)e_{s_3}=e_{s_3}$, with the sign of the $s_2$-skip negative because that skip is forced [F3]. [step 3.1, F1, F3, F11]

5.1 The three vectors $e_{s_2}$, $-(e_{s_1}+e_{s_2})$ and $e_{s_1}+e_{s_2}+e_{s_3}$ form a basis of $V$: in the basis $(e_{s_1},e_{s_2},e_{s_3})$ they are $(0,1,0)$, $(-1,-1,0)$ and $(1,1,1)$, and the last has a nonzero third coordinate while the first two are independent. By [F3] and step 4.1, $\mathcal A_c(v)=\{-(e_{s_1}+e_{s_2})\}$ and $\mathcal B_c(v)=\{e_{s_2},e_{s_1}+e_{s_2}+e_{s_3}\}$. [step 4.1, F3, algebra]

6.1 Cover reflections: the right descents of $v=s_1s_2$ are read off the products $vs_1=s_1s_2s_1$, $vs_2=s_1$, $vs_3=s_1s_2s_3$; their lengths are $3$, $1$ and $3$ [F5], so the only cover relation $v\gtrdot vs$ has $s=s_2$ and cover reflection $t=v s_2 v^{-1}=s_1s_2s_1$, with positive root $-\rho(s_1s_2)e_{s_2}=-C^{s_2}_c(v)=e_{s_1}+e_{s_2}$ [F6, F11, step 4.1]. This matches [F7]: the unique negative skip root of $v$ is $-(e_{s_1}+e_{s_2})$ and $\mathrm{Cov}(v)=\{s_1s_2s_1\}$. [step 4.1, step 5.1, F5, F6, F7, F11]

7.1 Cone and a chamber check: by [F3] the cone is $\mathrm{Cone}_c(v)=\{x\in V:B(x,e_{s_2})\ge0,\ B(x,e_{s_1}+e_{s_2})\le0,\ B(x,e_{s_1}+e_{s_2}+e_{s_3})\ge0\}$. For $x\in C$, i.e. $B(x,e_{s_i})\ge0$ for $i=1,2,3$, the adjoint identity $B(\rho(v)x,\beta)=B(x,\rho(v)^{-1}\beta)$ [F9] and the inverse images $\rho(v)^{-1}e_{s_2}=e_{s_1}$, $\rho(v)^{-1}(e_{s_1}+e_{s_2})=-e_{s_2}$, $\rho(v)^{-1}(e_{s_1}+e_{s_2}+e_{s_3})=e_{s_3}$ [F11, step 4.1] give $B(\rho(v)x,e_{s_2})=B(x,e_{s_1})\ge0$, $B(\rho(v)x,e_{s_1}+e_{s_2})=-B(x,e_{s_2})\le0$ and $B(\rho(v)x,e_{s_1}+e_{s_2}+e_{s_3})=B(x,e_{s_3})\ge0$; hence $\rho(v)C\subseteq\mathrm{Cone}_c(v)$, that is $vC\subseteq\mathrm{Cone}_c(v)$. This is the instance $\pi_c(v)=v$ of the cone criterion at $w=v$ [F8], consistent with $v$ being $c$-sortable [step 1.1]. [step 1.1, step 4.1, step 5.1, F1, F3, F8, F9, F11, algebra] ∎

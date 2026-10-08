---
id: "lem-cg-coxeter-word-transport-and-form-independence"
kind: "lemma"
title: "Coxeter words are commutation-connected; the Euler and skew forms depend only on the Coxeter element"
status: published
origin: "pipeline"
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 14
deps:
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - lem-cg-positive-span-of-transported-simple-roots
  - def-cg-geometric-inversion-set
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-cg-root-sign-and-simple-reflection-positivity
  - thm-cg-root-length-criterion-and-faithfulness
  - thm-cg-parabolic-intersections-and-coset-factorization
  - lem-cg-weak-order-is-a-graded-partial-order
  - thm-hh-coxeter-exchange-deletion-and-faithfulness
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-hh-coxeter-matrix-word-group-and-length
  - lem-cg-reflection-representation-descends-and-root-norms
  - def-cg-parabolic-quotient-and-two-sided-minima
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-canonical-reflection-homomorphism
proof_strategy: induction
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "section 2.6, p. 16 (Coxeter elements; any two reduced words for the same Coxeter element are related by commuting transpositions), and section 3.1, pp. 18-19 (independence of the Euler form from the word)"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 2, p. 5 (any two reduced words for c are related by commutation of letters)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 1.4, pp. 14-18 (exchange and deletion), and section 3.3, pp. 75-77 (the word property)"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Let $S$, $m$, $W$, $\ell$, $V$, $B$, $\rho$, and the root system $\Phi=\Phi_+\sqcup\Phi_-$ be as in [[def-cg-canonical-reflection-homomorphism]] and [[thm-cg-root-sign-and-simple-reflection-positivity]], let $N(w)$ be the inversion set of [[def-cg-geometric-inversion-set]], and let $E_c$, $\omega_c$, and Coxeter words be as in [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]. Fix a Coxeter element $c$ of $(W,S)$.

**(1) Reducedness.** Every Coxeter word is reduced; consequently its value $c$ satisfies $\ell(c)=n$ and $S(c)=S$, and every reduced expression of $c$ is a Coxeter word.

**(2) Initial and final letters.** Let $c=s_1\cdots s_n$ be a reduced Coxeter word. Then
$$D_L(c)=\{s_k:s_k\text{ commutes with }s_1,\dots,s_{k-1}\},\qquad D_R(c)=\{s_k:s_k\text{ commutes with }s_{k+1},\dots,s_n\},$$
with $D_L,D_R$ the descent sets of [[def-cg-parabolic-quotient-and-two-sided-minima]] (2). In particular the elements of $D_L(c)$ pairwise commute, each is the first letter of some reduced expression of $c$, and symmetrically for $D_R(c)$.

**(3) Commutation connectivity.** Any two reduced Coxeter words for $c$ are connected by a sequence of transpositions of adjacent commuting letters; equivalently, whenever $m(s,t)\ge3$, the relative order of $s$ and $t$ in a reduced Coxeter word is determined by $c$ alone.

**(4) Independence of the forms.** $E_c$ and $\omega_c$ are independent of the chosen reduced Coxeter word for $c$, so $E_c,\omega_c$ are well-defined functions of the Coxeter element $c$; and $E_c+E_c^{\mathsf T}=K=2B$ for every choice of word.

**(5) Prefix roots form a basis.** For a reduced Coxeter word $c=s_1\cdots s_n$ the prefix roots $\beta_j:=\rho(s_1\cdots s_{j-1})e_{s_j}$ form a basis of $V$, and the transition matrix is upper unitriangular with nonnegative entries: $\beta_j=e_{s_j}+\sum_{i<j}a_{ij}e_{s_i}$, $a_{ij}\ge0$. (This records the triangular structure underlying (3); it is not used to define $E_c$.)

## Facts & Assumptions

**Given:** A finite set $S$, a Coxeter matrix $m$ on $S$, the presented group $W$ with length function $\ell$, the space $V=\mathbb R^S$ with the simple basis $(e_s)_{s\in S}$ and Coxeter form $B$, the canonical reflection representation $\rho:W\to\mathrm{GL}(V)$, the root system $\Phi=\Phi_+\sqcup\Phi_-$, and a Coxeter element $c$ of $(W,S)$, together with the per-word data of [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]: $K=2B$, the Euler form attached to a chosen ordered Coxeter word, and its skew part. Clause (4) proves that these forms do not depend on that choice.

[F1] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]: a Coxeter word is a word $s_1\cdots s_n$ with $S=\{s_1,\dots,s_n\}$, a Coxeter element is its value, and for a chosen ordered word the form $E_c$ is defined by $E_c(e_{s_i},e_{s_j})=K(e_{s_i},e_{s_j})$ for $i>j$, $=1$ for $i=j$ and $=0$ for $i<j$, with $K=2B$; $\omega_c=E_c-E_c^{\mathsf T}$. The independence from the chosen word asserted in clause (4) is proved here and is not assumed in this definition.

[F2] [[def-cg-real-coxeter-form-and-reflection]]: $V=\mathbb R^S$ has the basis $(e_s)_{s\in S}$, $B$ is the symmetric bilinear form with $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ when $m(s,t)=\infty$, and for $a\in V$ with $B(a,a)\ne0$ the reflection with normal $a$ is $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$.

[F3] [[def-cg-canonical-reflection-homomorphism]]: $\rho:W\to\mathrm{GL}(V)$ is the group homomorphism with $\rho(s)=r_{e_s}$ for every $s\in S$, and $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$.

[F4] [[lem-cg-reflection-representation-descends-and-root-norms]] (2): $\rho$ preserves $B$: for every $w\in W$ and $u,v\in V$, $B(\rho(w)u,\rho(w)v)=B(u,v)$.

[F5] [[lem-cg-positive-span-of-transported-simple-roots]]: for $s\notin S(w)$ and a reduced expression $w=r_1\cdots r_k$ with prefix roots $\beta_i=\rho(r_1\cdots r_{i-1})e_{r_i}$, $\rho(w)e_s=e_s+\sum_i c_i\beta_i$ with $c_i\ge0$; consequently the vector is positive. Every simple coordinate is nonnegative, its $e_s$-coordinate is $1$, and its support lies in $S(w)\cup\{s\}$.

[F6] [[thm-cg-root-length-criterion-and-faithfulness]] (1): for all $u\in W$, $t\in S$, $\ell(ut)>\ell(u)\iff\rho(u)e_t\in\Phi_+$.

[F7] [[thm-cg-root-inversion-formulas-and-strong-exchange]] (2): for a reduced expression $u=s_1\cdots s_m$ one has $N(u^{-1})=\{\rho(s_1\cdots s_{i-1})e_{s_i}:1\le i\le m\}$, these being pairwise distinct positive roots.

[F8] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1): the set $S(u)$ of letters in a reduced expression is independent of the chosen reduced expression, and $W_J=\{w:S(w)\subseteq J\}$.

[F9] [[def-cg-parabolic-quotient-and-two-sided-minima]] (2): $D_L(w)=\{s\in S:\ell(sw)<\ell(w)\}$ and $D_R(w)=\{s\in S:\ell(ws)<\ell(w)\}$.

[F10] [[lem-cg-weak-order-is-a-graded-partial-order]] (5): $s\in D_L(w)\iff e_s\in N(w^{-1})\iff\rho(w^{-1})e_s\in\Phi_-$, and $s\in D_R(w)\iff e_s\in N(w)\iff\rho(w)e_s\in\Phi_-$.

[F11] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (2): if $w=s_1\cdots s_k$ is reduced and $\ell(sw)=k-1$ then $sw=s_1\cdots\widehat{s_i}\cdots s_k$ for some $i$, and if $\ell(ws)=k-1$ then $ws=s_1\cdots\widehat{s_i}\cdots s_k$ for some $i$.

[F12] [[thm-cg-root-sign-and-simple-reflection-positivity]] (2): $\Phi_+=\Phi\cap V_+$ and $\Phi_- =\Phi\cap(-V_+)$; every root lies in one of these disjoint cones, so positive roots have nonnegative simple coordinates.

[F13] [[thm-cg-parabolic-intersections-and-coset-factorization]] (2): for $I\subseteq S$, $\Phi_I=\{\rho(v)e_s:v\in W_I,\ s\in I\}=\Phi\cap V_I$ with $V_I=\operatorname{span}\{e_s:s\in I\}$.

[F14] [[def-hh-coxeter-matrix-word-group-and-length]]: the presentation has the relator $s^2=1$ for every $s\in S$.

[F15] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2): for every $J\subseteq S$, $(W_J,J)$ is a Coxeter system and its intrinsic length function agrees with the ambient length on $W_J$.

[F16] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3): inversion $w\mapsto w^{-1}$ preserves length.

[F17] [[thm-cg-root-length-criterion-and-faithfulness]] (3): the homomorphism $\rho$ is injective.

[F18] [[lem-cg-reflection-representation-descends-and-root-norms]] (4): if $g\in\mathrm{GL}(V)$ preserves $B$ and $B(a,a)\ne0$, then $gr_ag^{-1}=r_{ga}$.

## Proof

**Proof technique:** A length induction proves reducedness of Coxeter words and characterizes when a transported simple root is fixed. The positive-span lemma gives the prefix-root basis; the descent formulas then give commutation connectivity, and adjacent commuting swaps preserve the Euler and skew forms.

1.1 Base of clause (1): for $j=0$ the empty word is reduced and $S(w_0)=\emptyset$, where $w_0:=1$. [base, F8]

1.2 Induction hypothesis of clause (1): let $s_1\cdots s_n$ be a Coxeter word, so that $s_1,\dots,s_n$ are pairwise distinct with $\{s_1,\dots,s_n\}=S$, and let $0\le j<n$ with $w_j:=s_1\cdots s_j$ reduced and $S(w_j)=\{s_1,\dots,s_j\}$. [ih, F8]

1.3 One direction of the single-pair equivalence: let $u=r_1\cdots r_m$ be reduced, with $t\notin S(u)$, and suppose every $r_i$ commutes with $t$. For each $i$, the homomorphism property [F3] and reflection conjugation [F18] give $r_{\rho(r_i)e_t}=\rho(r_i)r_{e_t}\rho(r_i)^{-1}=r_{e_t}$. By the reflection formula [F2], the $(-1)$-eigenspace of $r_a$ is $\mathbb Ra$ whenever $B(a,a)\ne0$; [F4] gives $B(\rho(r_i)e_t,\rho(r_i)e_t)=1$, and [F2] gives $B(e_t,e_t)=1$. Equality of the reflections therefore implies $\rho(r_i)e_t=\pm e_t$. The value $-e_t$ is impossible because $\rho(r_i)e_t=e_t-2B(e_t,e_{r_i})e_{r_i}$ and the distinct basis vectors $e_t,e_{r_i}$ are linearly independent. Thus each $\rho(r_i)$ fixes $e_t$, and so does $\rho(u)$. [F2, F3, F4, F18, algebra]

1.4 Converse setup: assume $\rho(u)e_t=e_t$ and argue by induction on $m=\ell(u)$. The base $m=0$ is immediate. For $m\ge1$, write $u=r_1u'$, where $u'=r_2\cdots r_m$ is reduced. Since $t\notin S(u')$ by $S(u')\subseteq S(u)$ from [F8], and $\rho(r_1)=r_{e_{r_1}}$ with $B(e_{r_1},e_{r_1})=1$, the reflection formula [F2] gives $\rho(r_1)^{-1}=\rho(r_1)$. The positive-span result [F5] therefore gives $\rho(u')e_t=\rho(r_1)e_t=e_t+\sum_{i=2}^m a_i\gamma'_i$, where $a_i\ge0$ and $\gamma'_i=\rho(r_2\cdots r_{i-1})e_{r_i}$. The reflection formula also gives $\rho(r_1)e_t=e_t+\delta e_{r_1}$ with $\delta=-2B(e_t,e_{r_1})\ge0$, because $r_1\ne t$ and the off-diagonal entries of $B$ are nonpositive; thus $\sum_i a_i\gamma'_i=\delta e_{r_1}$. Each $\gamma'_i$ is a positive root by [F7] and belongs to $\Phi_{S(u')}$ by [F13], so [F12] gives nonnegative simple coordinates and [F13] gives zero $e_t$-coordinate. [ih, F2, F5, F7, F8, F12, F13]

2.1 Exclude $\delta>0$: the equality in step 1.4 would then have nonzero right side, so some $a_i>0$, and coordinatewise nonnegativity forces each such $\gamma'_i$ to lie on the positive $e_{r_1}$-ray. By [F4] and [F2], $B(\gamma'_i,\gamma'_i)=B(e_{r_1},e_{r_1})=1$, so if $\gamma'_i=\lambda e_{r_1}$ with $\lambda>0$, then $\lambda^2=1$ and $\gamma'_i=e_{r_1}$. But [F7] puts $\gamma'_i$ in $N((u')^{-1})$, so [F10] gives $r_1\in D_L(u')$ and [F9] gives $\ell(r_1u')<\ell(u')$, contradicting that $u=r_1u'$ is reduced. Thus $\delta=0$. [step 1.4, F2, F4, F7, F9, F10]

2.2 Step of clause (1): under the hypothesis of step 1.2 we have $s_{j+1}\notin S(w_j)$, so [F5](1) gives $\rho(w_j)e_{s_{j+1}}\in\Phi_+$ and then [F6](1) gives $\ell(w_js_{j+1})=\ell(w_j)+1$; hence $w_{j+1}$ is reduced, and since $s_1\cdots s_{j+1}$ is a reduced expression of it, [F8](1) gives $S(w_{j+1})=\{s_1,\dots,s_{j+1}\}$. [step 1.2, F5, F6, F8]

3.1 Finish the converse by induction: since $\delta=0$, step 1.4 gives $\sum_i a_i\gamma'_i=0$; each $\gamma'_i$ is a nonzero positive root, so all $a_i=0$ and $\rho(u')e_t=e_t$. Induction shows every letter of $u'$ commutes with $t$. Step 1.4 also gives $\rho(r_1)e_t=e_t$; using the homomorphism property [F3], the isometry [F4], reflection conjugation [F18] and faithfulness [F17] yields $r_1tr_1^{-1}=t$, so $r_1$ commutes with $t$ as well. [step 1.4, step 2.1, F3, F4, F17, F18, discharge-induction]

3.2 Clause (1) follows from steps 1.1 and 2.2 by induction on $j$: for the value $c=s_1\cdots s_n$ we get $\ell(c)=n$ and $S(c)=S$, so every Coxeter word is reduced; conversely a reduced expression of $c$ is a word of length $n=\ell(c)$ whose letters lie in $S(c)=S$, hence it uses every element of $S$ exactly once and is a Coxeter word. [step 1.1, step 2.2, discharge-induction]

4.1 Clause (5): for each $j$, applying [F5](2) to the pair $(w_{j-1},s_j)$, whose hypothesis $s_j\notin S(w_{j-1})=\{s_1,\dots,s_{j-1}\}$ holds by step 3.2 and the pairwise distinctness of the letters, gives $\beta_j=e_{s_j}+\sum_{i<j}a_{ij}e_{s_i}$ with $a_{ij}\ge0$ and support in $\{s_1,\dots,s_j\}$. The matrix whose columns are $(\beta_1,\dots,\beta_n)$ in the basis $(e_{s_1},\dots,e_{s_n})$ is thus upper unitriangular with diagonal entries $1$ and so invertible; hence $\beta_1,\dots,\beta_n$ is a basis of $V$. [step 3.2, F5, algebra]

5.1 Clause (2), left descents: for $1\le k\le n$, the descent/inversion criterion [F10](5) gives $s_k\in D_L(c)\iff e_{s_k}\in N(c^{-1})$, and the prefix formula [F7] gives $N(c^{-1})=\{\beta_1,\dots,\beta_n\}$. By step 4.1 and linear independence of the basis $(e_s)_{s\in S}$, $e_{s_k}=\beta_j$ forces $j=k$ and $a_{ik}=0$ for all $i<k$, that is, $\beta_k=e_{s_k}$. Conversely $\beta_k=e_{s_k}$ gives $e_{s_k}\in N(c^{-1})$ and hence $s_k\in D_L(c)$. By the descent definition [F9] and steps 1.3 and 3.1 applied to $u=s_1\cdots s_{k-1}$, the identity $\rho(s_1\cdots s_{k-1})e_{s_k}=e_{s_k}$ holds exactly when $s_k$ commutes with $s_1,\dots,s_{k-1}$. This gives the formula for $D_L(c)$; if $k<j$ and $s_k,s_j\in D_L(c)$, that formula shows $s_j$ commutes with the earlier letter $s_k$, so the elements of $D_L(c)$ pairwise commute. [step 4.1, step 1.3, step 3.1, F7, F9, F10, algebra]

6.1 Clause (2), right descents and initial letters: apply step 5.1 to $c^{-1}$, whose reduced words are the reverses of the reduced words of $c$ by [F16]; the descent definition [F9] gives $D_R(c)=D_L(c^{-1})$, hence $D_R(c)=\{s_k:s_k\text{ commutes with }s_{k+1},\dots,s_n\}$. If $s_k\in D_L(c)$, then $\ell(s_kc)=\ell(c)-1$; the exchange condition [F11] gives $s_kc=s_1\cdots\widehat{s_i}\cdots s_n$ for some $i$. Since $s_k^2=1$ by [F14], $c=s_k(s_kc)$ is a length-$n$ word for $c$, so it is reduced and starts with $s_k$. The right-handed exchange condition gives symmetrically that each $s_k\in D_R(c)$ is the last letter of some reduced expression of $c$. [step 5.1, F9, F11, F14, F16]

6.2 Clause (3), commutation connectivity, by induction on $n=|S|$: let $u=s_1\cdots s_n$ and $v=t_1\cdots t_n$ be reduced Coxeter words for $c$ (for $n\le1$ there is only one such word). If $s_1=t_1$, then $s_1c=s_2\cdots s_n$ by $s_1^2=1$ in [F14]; the tails $s_2\cdots s_n$ and $t_2\cdots t_n$ are reduced Coxeter words for this element in $W_{S\setminus\{s_1\}}$. By [F15], induction connects them by adjacent commuting transpositions. If $s_1\ne t_1$, let $s=s_1$. Both $s$ and $t_1$ lie in $D_L(c)$, because their left products with $c$ have length $n-1$; step 5.1 shows they commute. Write $s=t_j$ with $j\ge2$. Step 5.1 applied to $v$ shows $s=t_j$ commutes with $t_1,\dots,t_{j-1}$, so adjacent commuting swaps move $s$ to the front, giving $s\,v'$ with $v'=t_1\cdots t_{j-1}t_{j+1}\cdots t_n$. This remains a reduced word for $c$, and $v'$ is a reduced Coxeter word for $sc\in W_{S\setminus\{s\}}$, using $s^2=1$ in [F14]; induction in that parabolic connects the tails $s_2\cdots s_n$ and $v'$. This proves commutation connectivity. Each such swap preserves the relative order of every noncommuting pair, so that relative order is determined by $c$. Conversely, suppose two reduced Coxeter words have the same relative order for every noncommuting pair. Move the first letter of $v$ leftward in $u$: every letter it crosses has the opposite relative order and therefore must commute with it. Once their first letters agree, repeat on the tails; the two words are connected by adjacent commuting swaps. [step 5.1, F14, F15, algebra]

7.1 Clause (4): by step 6.2 any two reduced Coxeter words for $c$ are connected by adjacent swaps of commuting letters. If $s,t$ commute, step 1.3 gives $\rho(s)e_t=e_t$; the reflection formula [F2] then forces $B(e_t,e_s)=0$, hence $K(e_s,e_t)=0$ by [F1]. If $w'$ is obtained from $w=x_1\cdots x_n$ by swapping the adjacent letters $x_p=s$, $x_{p+1}=t$, every entry $E(e_a,e_b)$ in [F1] depends only on the relative order of $a,b$, and the swap changes that order only for the pair $\{a,b\}=\{s,t\}$. For this pair, both entries $E(e_s,e_t),E(e_t,e_s)$ are zero before and after the swap because $K(e_s,e_t)=0$; every other entry is unchanged. Thus $E_c$ is unchanged by each swap and is independent of the reduced Coxeter word, as is $\omega_c=E_c-E_c^{\mathsf T}$. Finally $E_c+E_c^{\mathsf T}=K$ for each word: for $a\ne b$, exactly one of the two Euler entries is $K(e_a,e_b)$ and the other is $0$; on the diagonal their sum is $1+1=2=K(e_a,e_a)$ by [F1] and [F2]. [step 1.3, step 6.2, F1, F2, algebra]

8.1 Steps 3.2 and 6.2 discharge the length and rank inductions; together with steps 4.1, 5.1, 6.1, and 7.1 they establish clauses (1)–(5). No Choice is used. [step 3.2, step 4.1, step 5.1, step 6.1, step 6.2, step 7.1, discharge-induction] ∎

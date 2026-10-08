---
id: "lem-cg-greedy-sorting-word-and-rank-two-alignment"
kind: "lemma"
title: "The greedy scan computes the c-sorting word; commutation, conjugation and rank-two alignment"
status: draft
origin: "pipeline"
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 17
deps:
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - lem-cg-coxeter-word-transport-and-form-independence
  - lem-cg-finite-dihedral-subsystems-and-canonical-roots
  - def-cg-geometric-inversion-set
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-cg-root-length-criterion-and-faithfulness
  - def-cg-parabolic-quotient-and-two-sided-minima
  - thm-hh-coxeter-exchange-deletion-and-faithfulness
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - lem-cg-reflection-representation-descends-and-root-norms
  - thm-cg-parabolic-intersections-and-coset-factorization
  - def-cg-real-coxeter-form-and-reflection
  - def-hh-coxeter-matrix-word-group-and-length
  - thm-cg-finite-type-positive-definite-criterion
  - lem-cg-dual-action-and-chamber-faces-exist
  - thm-cg-dual-chamber-intersections-and-point-stabilizers
proof_strategy: induction
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "sections 2.6-2.7, arXiv PDF pp. 16-17 (commuting Coxeter words and the lexicographically first c-sorting subword with its block sequence); section 3, Lemma 3.3 and Lemma 3.7, arXiv PDF pp. 18-19 (Euler-form conjugation and restriction); section 4, Proposition 4.1 and the following definition of c-alignment, arXiv PDF pp. 22-23"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(S,m)$, $W$, $\ell$, $V$, $B$, $\rho$, $\Phi$, $E_c$, $\omega_c$, and the periodic word $c^\infty$ with its position sets, admissible sets, sorting word and block sequence be as in [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]], and let $N(w)$ be as in [[def-cg-geometric-inversion-set]]. Fix a reduced Coxeter word $c=s_1\cdots s_n$ for the Coxeter element $c$, put $V_J:=\operatorname{span}\{e_s:s\in J\}$ for $J\subseteq S$, and write $D_L(r):=\{u\in S:\ell(ur)<\ell(r)\}$ as in [[def-cg-parabolic-quotient-and-two-sided-minima]] (2).

**(1) The greedy scan.** For $w\in W$ scan the positions of $c^\infty$ in increasing order, maintaining a remainder $r$ (initially $w$): at a position with letter $u$, select the position exactly when $u\in D_L(r)$, i.e. $\ell(ur)<\ell(r)$, and then replace $r$ by $ur$. Then the scan selects exactly $\ell(w)$ positions; after the selected positions have been processed (or immediately if there are none), the remainder is $1$; the selected letters form a reduced word for $w$; and the selected position set is exactly the $c^\infty$-sorting word of $w$. In particular the sorting word exists and is unique for every $w$ and every reduced Coxeter word for $c$.

**(2) Independence of the block sequence.** For fixed $w$ the block sequence of the $c^\infty$-sorting word is independent of the chosen reduced Coxeter word for $c$; if two reduced Coxeter words for $c$ are used, the resulting sorting words differ by transpositions of adjacent commuting letters, with no commutation across dividers. Hence the block sequence is an invariant of the pair $(c,w)$.

**(3) Conjugation and restriction of the forms.** Let $s\in D_L(c)$ be initial in $c$. Choose a reduced Coxeter word $c=s\,t_2\cdots t_n$; then $t_2\cdots t_ns$ is a reduced Coxeter word for $scs$. For all $\beta,\beta'\in V$
$$E_{scs}(\rho(s)\beta,\rho(s)\beta')=E_c(\beta,\beta'),\qquad \omega_{scs}(\rho(s)\beta,\rho(s)\beta')=\omega_c(\beta,\beta'),$$
independently of the Coxeter words chosen. If $J\subseteq S$ and $c'$ is the restriction of $c$ to $W_J$, then $E_{c'}(\beta,\beta')=E_c(\beta,\beta')$ and $\omega_{c'}(\beta,\beta')=\omega_c(\beta,\beta')$ for all $\beta,\beta'\in V_J$.

**(4) Rank-two orientation and alignment.** For this clause assume that $(W,S)$ is of finite type, so $B$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1)). Let $W'$ be any generalized rank-two parabolic subgroup, write $W'=vW_Jv^{-1}$ with $|J|=2$, and put $P:=\rho(v)V_J$. Its canonical generators are ordered so that $\omega_c(\beta_{r_1},\beta_{r_2})\ge0$, and its reflections are indexed $u_1=r_1,\dots,u_m=r_2$ as in [[lem-cg-finite-dihedral-subsystems-and-canonical-roots]]. Then:
(i) if $\omega_c(\beta_{u_1},\beta_{u_m})=0$, the restriction of $\omega_c$ to $\Phi\cap P$ is zero; if $\omega_c(\beta_{u_1},\beta_{u_m})>0$, then $\omega_c(\beta_{u_i},\beta_{u_j})>0$ for all $i<j$;
(ii) $w\in W$ is $c$**-aligned with respect to $W'$** when either $\omega_c$ restricts to zero on $\Phi\cap P$ and $N(w^{-1})\cap(\Phi\cap P)$ is empty or a singleton, or $\omega_c(\beta_{u_1},\beta_{u_m})>0$ and $N(w^{-1})\cap(\Phi\cap P)$ is empty, the singleton $\{\beta_{u_m}\}$, or an initial segment $\{\beta_{u_1},\dots,\beta_{u_k}\}$; and $w$ is $c$**-aligned** when it is $c$-aligned with respect to every noncommutative generalized rank-two parabolic subgroup of $W$. When an initial order has negative endpoint value, use the reversed canonical pair, as permitted by [[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (4).

## Facts & Assumptions

**Given:** A finite set $S$ with Coxeter matrix $m$, the presented group $W$ with length $\ell$, the space $V=\mathbb R^S$ with Coxeter form $B$ and canonical reflection representation $\rho$, the root system $\Phi=\Phi_+\sqcup\Phi_-$ with reflection dictionary $\alpha\mapsto t_\alpha$ and its positive roots $\beta_t$ for $t\in T$, a reduced Coxeter word $c=s_1\cdots s_n$, its periodic word $c^\infty$ with position sets, admissible sets and block sequences, the forms $K=2B$, $E_c$, $\omega_c=E_c-E_c^{\mathsf T}$ of [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]], and the descent sets $D_L,D_R$.

[F1] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]: a position set for $c^\infty$ is a finite increasing sequence of positions with value in $W$, it is admissible for $w$ when its value is $w$ and its length is $\ell(w)$, the $c^\infty$-sorting word is the lexicographically earliest admissible set, the block sequence records the letter sets between successive dividers, and $E_c,\omega_c$ are defined from the ordered word by triangular $K$-entries.

[F2] [[lem-cg-coxeter-word-transport-and-form-independence]] (1),(3),(4): Coxeter words are reduced; any two reduced Coxeter words for $c$ are connected by adjacent swaps of commuting letters; and $E_c,\omega_c$ are independent of the chosen reduced Coxeter word.

[F3] [[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (1),(2),(4): in finite type, for a root-spanned plane $P$ and a point $x\in P^\perp$ avoiding all root hyperplanes outside $P$, the rank-two stabilizer has root set $\Phi\cap P$; its positive roots $\beta_{u_1},\ldots,\beta_{u_m}$ are in strict angular order between the canonical extreme roots, all lie in their closed sector, and reversing the extreme rays reverses the list.

[F4] [[def-cg-geometric-inversion-set]] (1): $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$.

[F5] [[thm-cg-root-inversion-formulas-and-strong-exchange]] (1),(2): $\rho(t_\alpha)=r_\alpha$, $t_{\rho(v)\alpha}=v t_\alpha v^{-1}$ and $t_{-\alpha}=t_\alpha$; for a reduced expression $w=s_1\cdots s_k$, $N(w^{-1})$ is the set of distinct positive prefix roots $\rho(s_1\cdots s_{i-1})e_{s_i}$.

[F6] [[thm-cg-root-length-criterion-and-faithfulness]] (1): $\ell(ut)>\ell(u)\iff\rho(u)e_t\in\Phi_+$ and $\ell(ut)<\ell(u)\iff\rho(u)e_t\in\Phi_-$.

[F7] [[def-cg-parabolic-quotient-and-two-sided-minima]] (2): $D_L(w)=\{s\in S:\ell(sw)<\ell(w)\}$ and $D_R(w)=\{s\in S:\ell(ws)<\ell(w)\}$.

[F8] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (1): $\ell(sw)=\ell(w)\pm1$ and $\ell(ws)=\ell(w)\pm1$ for all $s\in S,w\in W$.

[F9] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2): for each $J\subseteq S$, $(W_J,J)$ is a Coxeter system with intrinsic length equal to the restriction of ambient length $\ell|_{W_J}$.

[F10] [[lem-cg-reflection-representation-descends-and-root-norms]] (2),(3): $\rho(w)$ preserves $B$ and every root has $B$-norm $1$.

[F11] [[thm-cg-parabolic-intersections-and-coset-factorization]] (2): $\Phi_J=\Phi\cap V_J$, and the reflections in $W_J$ are exactly $t_\beta$ for $\beta\in\Phi_J\cap\Phi_+$.

[F12] [[def-cg-real-coxeter-form-and-reflection]]: $B$ is symmetric and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$; in particular $B(e_s,e_t)=0$ when $m(s,t)=2$.

[F13] [[def-hh-coxeter-matrix-word-group-and-length]]: each generator satisfies $s^2=1$.

[F14] [[thm-cg-finite-type-positive-definite-criterion]] (1),(2): in finite type $B$ is positive definite and $b:V\to V^*$, $b(y)=B(y,\cdot)$, is an isomorphism.

[F15] [[lem-cg-dual-action-and-chamber-faces-exist]] (1),(2): the dual action is $(w\cdot f)(z)=f(\rho(w)^{-1}z)$, the closed chamber is $C=\{f:f(e_s)\ge0\ \forall s\}$, and for every $J\subseteq S$ the face $C_J=\{f:f(e_s)=0\ (s\in J),\ f(e_s)>0\ (s\notin J)\}$ is nonempty.

[F16] [[thm-cg-dual-chamber-intersections-and-point-stabilizers]] (4): for $f\in C$, $\operatorname{Stab}_W(f)=W_{S(f)}$, where $S(f)=\{s:f(e_s)=0\}$.

[F17] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (2): $K=2B$, $E_c$ is the bilinear form with triangular basis entries $K(e_{s_i},e_{s_j})$ for $i>j$, $1$ for $i=j$, and $0$ for $i<j$, and $\omega_c=E_c-E_c^{\mathsf T}$.

[F18] [[thm-cg-root-inversion-formulas-and-strong-exchange]] (3): if $\ell(tw)<\ell(w)$, the positive root of $t$ belongs to $N(w^{-1})$.

[F19] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3): inversion $w\mapsto w^{-1}$ preserves lengths.

[F20] [[lem-cg-reflection-representation-descends-and-root-norms]] (1): $\rho$ is the unique group homomorphism with $\rho(s)=r_{e_s}$ for every $s\in S$.

[F21] [[def-cg-real-coxeter-form-and-reflection]] (3): for $a\in V$ with $B(a,a)\ne0$, $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$.

[F22] [[def-hh-coxeter-matrix-word-group-and-length]]: for distinct $s,t\in S$, $m(s,t)$ is the order of $st$ in $W$.

## Proof

**Proof technique:** prove the greedy scan by induction on length uniformly over suffixes of $c^\infty$, compare commuting word moves lockstep, and check the form and finite rank-two claims directly.

1.1 Left descents have the root test $s\in D_L(x)\iff\rho(x^{-1})e_s\in\Phi_-$: inversion invariance gives $\ell(sx)=\ell(x^{-1}s)$ and $\ell(x)=\ell(x^{-1})$, while [F6] applied to $x^{-1}$ gives the stated equivalence. [F6, F7, F19, algebra]

1.2 If $w=1$, the empty set is the unique admissible set, the scan makes no selection, and its remainder is already $1$. [base, F1]

1.3 Induction hypothesis for clause (1): for a fixed $w$ of positive length, assume for every $r$ with $\ell(r)<\ell(w)$ and every suffix of $c^\infty$ that the greedy scan selects $\ell(r)$ positions, ends at remainder $1$, and produces the lexicographically least admissible position set for $r$ in that suffix. Every letter of $S$ occurs infinitely often in every such suffix, even when its first block is partial. [ih, F1]

1.4 Let $s$ be initial in the chosen word $c=s\,s_2\cdots s_n$ and put $c^*=s_2\cdots s_ns$. Then $\rho(s)e_s=-e_s$ and $\rho(s)e_p=e_p-K(e_p,e_s)e_s$ for $p\ne s$, where $K=2B$. Since $s$ is first in $c$ and last in $c^*$, $E_{c^*}(e_p,e_s)=0$, $E_{c^*}(e_s,e_q)=K(e_s,e_q)$ for $p,q\ne s$, and $E_{c^*}(e_p,e_q)=E_c(e_p,e_q)$ when $p,q\ne s$. Expanding by bilinearity gives $E_{c^*}(\rho(s)e_p,\rho(s)e_q)=E_c(e_p,e_q)$: for $p=q=s$ both sides are $1$; for $p=s\ne q$ the left side is $-K(e_s,e_q)+K(e_s,e_q)=0=E_c(e_s,e_q)$; for $q=s\ne p$ it is $K(e_p,e_s)=E_c(e_p,e_s)$; and for $p,q\ne s$ the two added terms $-K(e_p,e_s)K(e_s,e_q)$ and $+K(e_p,e_s)K(e_s,e_q)$ cancel. Bilinearity extends the identity to all vectors, and subtracting the transposed identity gives the one for $\omega$. By [F2](4), the identities are independent of the reduced Coxeter words chosen. [F2, F17, F20, F21, algebra]

1.5 For $J\subseteq S$, deleting the letters outside $J$ gives a word $c_J$ containing each letter of $J$ once. By [F9], $(W_J,J)$ is a Coxeter system with the restricted length; by [F2](1), $c_J$ is a reduced Coxeter word for its value. For $p,q\in J$ the relative order and the entries $K(e_p,e_q)$ are unchanged, so the triangular definitions give $E_{c_J}(e_p,e_q)=E_c(e_p,e_q)$; bilinearity on the basis of $V_J$ gives both restriction identities in (3). [F2, F9, F17, algebra]

1.6 For clause (4), assume finite type and write the given generalized rank-two parabolic as $W'=vW_Jv^{-1}$ with $|J|=2$, so $P=\rho(v)V_J$. The vectors $\rho(v)e_j$ are roots for $j\in J$, so $P$ is root-spanned. Let $f_J\in C_J$ be the face point with $f_J(e_s)=0$ for $s\in J$ and $f_J(e_s)=1$ otherwise, and put $y=b^{-1}(f_J)$ and $x=\rho(v)y$, where $b(z)=B(z,\cdot)$. By [F14], $b$ is an isomorphism; by [F10], it is equivariant for the reflection and dual actions, so $b(x)=v\cdot f_J$ and $\operatorname{Stab}_W(x)=\operatorname{Stab}_W(v\cdot f_J)$. The point-stabilizer formula [F16] gives $\operatorname{Stab}_W(f_J)=W_J$; since the dual action is a group action [F15], $\operatorname{Stab}_W(v\cdot f_J)=vW_Jv^{-1}=W'$. For every $j\in J$, $B(x,\rho(v)e_j)=B(y,e_j)=f_J(e_j)=0$, hence $x\in P^\perp$. If a root $\alpha\notin P$ satisfied $B(x,\alpha)=0$, [F10] and its unit norm would make $t_\alpha$ fix $x$, so $t_\alpha\in W'$. Then $v^{-1}t_\alpha v=t_{\rho(v^{-1})\alpha}\in W_J$ by [F5], and [F11] together with $t_{-\gamma}=t_\gamma$ forces $\rho(v^{-1})\alpha\in V_J$, hence $\alpha\in P$, a contradiction. Thus $x$ meets the hypotheses of [F3] for the plane $P$ and the subgroup $W'$. [given, F3, F5, F10, F11, F14, F15, F16]

2.1 If a remainder $r\ne1$, choose a reduced expression $r=a_1\cdots a_k$; since $a_1^2=1$, $a_1r=a_2\cdots a_k$ has length at most $k-1$, and [F8] makes it exactly $k-1$, so $a_1\in D_L(r)$. Each letter occurs infinitely often in any suffix, so the scan eventually reaches a letter in the nonempty set $D_L(r)$. Every selected letter lowers the remainder length by one by [F8]; once the remainder is $1$, no later letter is selected because [F8] gives $\ell(u)=1$ for every $u\in S$. Thus from any starting remainder $r$ the scan makes exactly $\ell(r)$ selections and ends at $1$. [step 1.3, F7, F8, F13]

2.2 If distinct $s,t$ commute, then $m(s,t)=2$ by [F13, F22], so [F12] gives $B(e_s,e_t)=0$ and [F20, F21] give $\rho(t)e_s=r_{e_t}e_s=e_s$; symmetrically $\rho(s)e_t=e_t$. By step 1.1, $s\in D_L(tx)$ iff $\rho((tx)^{-1})e_s=\rho(x^{-1})\rho(t)e_s=\rho(x^{-1})e_s$ is negative, iff $s\in D_L(x)$; likewise $t\in D_L(sx)$ iff $t\in D_L(x)$. [step 1.1, F12, F13, F20, F21, F22]

2.3 Put $\alpha_1:=\beta_{u_1}=\beta_{r_1}$ and $\alpha_m:=\beta_{u_m}=\beta_{r_2}$, where $r_1,r_2$ are the canonical reflections in the statement. By [F3](2),(4), their order can be chosen so that $\omega_c(\alpha_1,\alpha_m)\ge0$. Use the orientation on $P$ determined by the ordered basis $(\alpha_1,\alpha_m)$. Write $\beta_{u_i}=a_i\alpha_1+b_i\alpha_m$ with $a_i,b_i\ge0$, as all roots lie in the pointed sector. The strict angular order then gives $a_ib_j-b_ia_j>0$ for $i<j$. Bilinearity and skew-symmetry yield $\omega_c(\beta_{u_i},\beta_{u_j})=(a_ib_j-b_ia_j)\omega_c(\alpha_1,\alpha_m)$, which is zero for all pairs if the endpoint value is zero and positive for every $i<j$ if it is positive. Since $\alpha_1,\alpha_m$ span $P$, endpoint value zero is equivalent to $\omega_c$ vanishing on all of $P$, hence on $\Phi\cap P$. This proves (4)(i) without assuming equally spaced roots. [step 1.6, F3, algebra]

3.1 For $w\ne1$ on any suffix, let $h$ be the first position whose letter $u_h$ lies in $D_L(w)$. The first letter of any admissible word for $w$ is a left descent, since if that word is $a_1\cdots a_k=w$ then $a_1w=a_2\cdots a_k$ has length at most $k-1$ and [F8] makes it exactly $k-1$; hence no admissible set starts before $h$. Also $\ell(u_hw)=\ell(w)-1$. A reduced expression of $u_hw$ can be embedded after $h$ in the suffix because each letter occurs infinitely often, so an admissible set starting at $h$ exists (if $u_hw=1$, use the empty tail). The admissible sets starting at $h$ are exactly $\{h\}\cup Q$ with $Q$ admissible for $u_hw$ in the later suffix. By the induction hypothesis, the continued greedy scan gives the lexicographically least such $Q$; therefore the full scan is the lexicographically least admissible set for $w$. Along with the base case and termination this proves (1), including existence and uniqueness. [step 1.2, step 1.3, step 2.1, F1, F7, F8, F13]

3.2 Compare the scans for Coxeter words differing by an adjacent swap of commuting letters $s,t$. At the pair, both scans have the same remainder $x$. If neither letter is a descent both skip; if only one is a descent both select that letter, since the other remains a non-descent by step 2.2; if both are descents both select both, since each remains a descent after left multiplication by the other. In every case the selected subset of the pair is the same and the remainders after the pair agree; when both are selected, the equality is $stx=tsx$. [step 2.2, F13, algebra]

4.1 By [F2](3), any two reduced Coxeter words for $c$ are connected by adjacent swaps of commuting letters. Repeat the comparison of step 3.2 in every block of the two periodic words, carrying the common remainder through the identical positions between swapped pairs; induction over positions shows that the selected letter subsets in corresponding blocks agree. Thus their block sequences are equal, and the sorting words can differ only by adjacent commuting swaps inside a block, never across a divider. This proves (2). [step 3.1, step 3.2, F1, F2]

5.1 Fix a reduced expression $w=s_1\cdots s_k$ and let $\beta_i=\rho(s_1\cdots s_{i-1})e_{s_i}$ and $t_i=s_1\cdots s_{i-1}s_is_{i-1}\cdots s_1$. By [F5](2), the $\beta_i$ are exactly the positive roots of $N(w^{-1})$, and [F5](1) gives $t_{\beta_i}=t_i$. Direct cancellation gives $t_iw=s_1\cdots\widehat{s_i}\cdots s_k$, so $\ell(t_iw)\le k-1<\ell(w)$. Conversely every reflection $t$ with $\ell(tw)<\ell(w)$ has its positive root in $N(w^{-1})$ by [F18]. Thus these positive roots correspond exactly to the left inversions in Reading--Speyer's c-alignment definition following Proposition 4.1. When an initial order has negative endpoint value, reverse the canonical pair and its list as in [F3](4); this gives the same convention used in the statement. No Axiom of Choice is used: the only witnesses are single instantiations (a reduced word for a fixed element and the explicit face point $f_J$), and the scan, word comparisons and finite-dimensional calculations are deterministic. Clauses (1)-(4) are proved. [step 4.1, step 1.4, step 1.5, step 2.3, F3, F4, F5, F8, F18, algebra, discharge-induction] ∎

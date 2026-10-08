---
id: "lem-cg-uniform-omega-positive-and-aligned-sortability"
kind: "lemma"
title: "Omega-positive reflection sequences are exactly the sorting words; sortable equals aligned; parabolic restriction"
status: draft
origin: pipeline
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 21
deps:
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - lem-cg-finite-rank-two-inversion-set-recognition
  - lem-cg-weak-parabolic-projection-and-cover-joins
  - def-cg-sortable-element-skip-roots-and-cone
  - def-cg-geometric-inversion-set
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-cg-root-length-criterion-and-faithfulness
  - thm-cg-root-sign-and-simple-reflection-positivity
  - lem-cg-diagram-products-and-invariant-form-comparison
  - def-cg-left-right-weak-order-and-descents
  - lem-cg-weak-order-is-a-graded-partial-order
  - lem-cg-positive-span-of-transported-simple-roots
  - lem-cg-finite-dihedral-subsystems-and-canonical-roots
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - thm-hh-coxeter-exchange-deletion-and-faithfulness
  - thm-cg-parabolic-intersections-and-coset-factorization
  - lem-cg-reflection-representation-descends-and-root-norms
proof_strategy: induction
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Proposition 3.11, pp. 20-21, Lemma 3.12, p. 21, Proposition 3.13, pp. 21-22, and Theorem 4.3, pp. 24-25"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 2, pp. 5-6 (Lemmas 2.1-2.3, Proposition 2.4; the finite recursion and parabolic restriction)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 3, section 3.3 (deletion and exchange used throughout)"
verification:
  precheck: pass
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type, $c$ a Coxeter element, and $w\in W$
with reduced word $a_1\cdots a_k$ and reflection sequence $t_1,\dots,t_k$,
$t_i=a_1\cdots a_{i-1}a_ia_{i-1}\cdots a_1$, with positive roots $\beta_i$
([[thm-cg-root-inversion-formulas-and-strong-exchange]] (2)). Let $\omega_c$ and $c$-alignment be as in
[[lem-cg-greedy-sorting-word-and-rank-two-alignment]] and $c$-sortability as in
[[def-cg-sortable-element-skip-roots-and-cone]].

**(1) Characterization.** The following are equivalent:

(i) $\omega_c(\beta_i,\beta_j)\ge0$ for all $i\le j$, with strict inequality unless $t_i$ and $t_j$ commute;

(ii) $w$ is $c$-sortable and $a_1\cdots a_k$ can be converted into a $c$-sorting word for $w$ by a sequence of transpositions of adjacent commuting letters.

**(2) Sortable equals aligned.** $w$ is $c$-sortable if and only if $w$ is
$c$-aligned; and if $w$ is $c$-sortable then $w$ is $c$-aligned with respect to
every generalized noncommutative rank-two parabolic subgroup of $W$.

**(3) Parabolic restriction.** If $v$ is $c$-sortable, $J\subseteq S$ and $v_J$ is
the $W_J$-prefix of $v$ ([[lem-cg-weak-parabolic-projection-and-cover-joins]] (1)), then $v_J$ is
$c'$-sortable, where $c'$ is the restriction of $c$ to $W_J$. Conversely, if
$u\in W_J$ is $c'$-sortable then $u$ is $c$-sortable as an element of $W$. No
Axiom of Choice is used.

## Facts & Assumptions

**Given:** a finite-type Coxeter system $(W,S)$, a Coxeter element $c$ with chosen reduced
Coxeter word $c=s_1\cdots s_n$, the periodic word $c^\infty$, the forms $K=2B$,
$E_c,\omega_c$, an element $w$ with reduced word $a_1\cdots a_k$, its reflection
sequence $t_i$ and prefix roots $\beta_i=\rho(a_1\cdots a_{i-1})e_{a_i}$, and an
initial letter $s$ of $c$ when the statement mentions one.

[F1] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (1),(2),(3): Coxeter words use each element of $S$ once; $K=2B$, $E_c(e_{s_i},e_{s_j})=K(e_{s_i},e_{s_j})$ for $i>j$, $1$ for $i=j$, $0$ for $i<j$; $\omega_c=E_c-E_c^{\mathsf T}$; $c^\infty$ is the periodic word with dividers after each block of $n$ letters, with position sets, admissible sets, sorting word and block sequence.

[F2] [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (1): the greedy scan selects a position with letter $u$ exactly when $u\in D_L(\text{remainder})$, ends at remainder $1$ after $\ell(w)$ selections, and yields the unique $c^\infty$-sorting word of $w$.

[F3] [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (2),(3): the block sequence is independent of the reduced Coxeter word chosen for $c$; for $s$ initial in $c$, $E_{scs}(\rho(s)\beta,\rho(s)\beta')=E_c(\beta,\beta')$ and $\omega_{scs}(\rho(s)\beta,\rho(s)\beta')=\omega_c(\beta,\beta')$; for $J\subseteq S$ and $c'$ the restriction, $E_{c'}=E_c$ and $\omega_{c'}=\omega_c$ on $V_J$.

[F4] [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (4): a generalized rank-two parabolic with canonical generators ordered so that $\omega_c(\beta_{r_1},\beta_{r_2})\ge0$ has reflections $u_1=r_1,\dots,u_m=r_2$ in angular order; if the endpoint value is $0$ the restriction of $\omega_c$ to the subsystem is zero, and if it is positive then $\omega_c(\beta_{u_i},\beta_{u_j})>0$ for all $i<j$; and $w$ is $c$-aligned with respect to it when either the restriction is zero and $N(w^{-1})\cap(\Phi\cap P)$ is empty or a singleton, or the endpoint value is positive and that intersection is empty, the singleton $\{\beta_{u_m}\}$, or an initial segment $\{\beta_{u_1},\dots,\beta_{u_k}\}$.

[F5] [[lem-cg-positive-span-of-transported-simple-roots]] (1),(2): for $u\in W$ with $s\notin S(u)$ and a reduced expression $u=r_1\cdots r_k$, one has $\rho(u)e_s=e_s+\sum_{l=1}^kc_l\beta_{t_l}$ with $c_l\ge0$, the coefficient of $e_s$ is $1$, and $\rho(u)e_s\in\Phi_+$.

[F6] [[lem-cg-finite-rank-two-inversion-set-recognition]] (2): a sequence of distinct reflections is the reflection sequence of a reduced word if and only if for every generalized rank-two parabolic its subsequence is an initial or final subsequence of the angular reflection list (read among the reflections in that parabolic, in increasing index order).

[F7] [[lem-cg-weak-parabolic-projection-and-cover-joins]] (1): for the $W_J$-prefix $w_J$ of $w$ one has $N(w_J^{-1})=N(w^{-1})\cap\Phi_{J,+}$, and $v\le_Rw$ for $v\in W_J$ if and only if $v\le_Rw_J$.

[F8] [[thm-cg-root-inversion-formulas-and-strong-exchange]] (1),(2): the root-reflection dictionary $\alpha\mapsto t_\alpha$ is a bijection $\Phi_+\to T$ with $t_{\rho(w)\alpha}=wt_\alpha w^{-1}$; for a reduced expression $u=r_1\cdots r_m$, $N(u^{-1})$ is the set of distinct prefix roots $\rho(r_1\cdots r_{i-1})e_{r_i}$, so $\beta_i\in N(w^{-1})$ for every prefix reflection $t_i$ of a reduced word for $w$.

[F9] [[thm-cg-root-length-criterion-and-faithfulness]] (1): for all $u\in W$, $t\in S$, $\ell(ut)>\ell(u)\iff\rho(u)e_t\in\Phi_+$ and $\ell(ut)<\ell(u)\iff\rho(u)e_t\in\Phi_-$.

[F10] [[thm-cg-root-sign-and-simple-reflection-positivity]] (2),(3): $\Phi_+=\Phi\cap V_+$ with $V_+$ the cone of nonnegative simple coordinates and $\Phi=\Phi_+\sqcup\Phi_-$, $r_s$ permutes $\Phi_+\setminus\{e_s\}$ while $r_se_s=-e_s$.

[F11] [[def-cg-geometric-inversion-set]] (1): $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$.

[F12] [[def-cg-left-right-weak-order-and-descents]] (1),(2): $u\le_Rv\iff v=ux$ with $\ell(v)=\ell(u)+\ell(x)$, and $D_L(w)=\{s:\ell(sw)<\ell(w)\}$.

[F13] [[lem-cg-weak-order-is-a-graded-partial-order]] (2),(4),(5): covers have the form $v=us$ with $\ell(v)=\ell(u)+1$; $u\le_Rv\iff N(u^{-1})\subseteq N(v^{-1})$; and $s\in D_L(w)\iff e_s\in N(w^{-1})\iff\rho(w^{-1})e_s\in\Phi_-$.

[F14] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1),(2),(3): $W_J=\{w:S(w)\subseteq J\}$ and $W_J\cap S=J$; $(W_J,J)$ is a Coxeter system with intrinsic length $\ell|_{W_J}$; every $w$ has a unique factorization $w=ud$ with $u\in W_J$ and $d$ minimal in $W_Jw$, characterized by $\ell(sd)>\ell(d)$ for all $s\in J$, and $\ell(w)=\ell(u)+\ell(d)$.

[F15] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (1),(2): $\ell(sw),\ell(ws)\in\{\ell(w)-1,\ell(w)+1\}$; and if $\ell(sw)=\ell(w)-1$ then left multiplication by $s$ deletes one letter from any reduced expression for $w$.

[F16] [[def-cg-sortable-element-skip-roots-and-cone]] (1): $v$ is $c$-sortable when the block sequence of its $c^\infty$-sorting word is weakly decreasing.

[F17] [[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (1),(2),(3),(4): for a generalized rank-two parabolic $W'$ with root-spanned plane $P$ one has $t_\alpha\in W'$ if and only if $\alpha\in P$; the positive system $\Phi_P^+:=\Phi\cap P\cap V_+$ has exactly two extreme rays, on roots $r_1,r_2$, every element of $\Phi_P^+$ is a nonnegative combination of $r_1$ and $r_2$, and with canonical generators $a=t_{r_1},b=t_{r_2}$ and $q=ab$ the reflections are the alternating list $u_1=a,\dots,u_m=b$ with $u_2=aba$ and $u_{m-1}=bab$, the positive roots are $\beta_{u_1},\dots,\beta_{u_m}$ in angular order, and reversing the extreme rays reverses the index order.

[F18] [[lem-cg-diagram-products-and-invariant-form-comparison]] (4): if $W$ is finite then $B$ is positive definite.

[F19] [[thm-cg-parabolic-intersections-and-coset-factorization]] (2): $\Phi_J=\Phi\cap V_J$, $\rho(W_J)V_J=V_J$, and a positive root belongs to $\Phi_J$ exactly when its reflection belongs to $W_J$. Every root has norm $1$, and the action preserves $B$ ([[lem-cg-reflection-representation-descends-and-root-norms]] (2),(3)).

## Proof

1.1 Equivalent forms of the left-descent conditions: for $s\in S$ and $u\in W$, lengths are inversion-invariant, so $\ell(su)=\ell(u^{-1}s)$ [F14]; applying the root-length criterion [F9] to $u^{-1}$ and translating with the descent/inversion criterion [F13] gives $\ell(su)<\ell(u)\iff\rho(u^{-1})e_s\in\Phi_-\iff e_s\in N(u^{-1})$, and $\ell(su)>\ell(u)\iff\rho(u^{-1})e_s\in\Phi_+$. Moreover $s\notin S(u)$ if and only if $u\in W_{S\setminus\{s\}}$ [F14]. [F9, F11, F13, F14, algebra]

1.2 Restriction recursion: let $s$ be initial in $c$ and $u\in W$ with $s\notin S(u)$. The letters $s$ are exactly the first letters of the successive $c$-blocks, and deleting them from $c^\infty$ leaves the periodic word $(sc)^\infty$; the remainder of the $c^\infty$-scan is always in $W_{S\setminus\{s\}}$: it starts at $u$, and if $\rho\in W_{S\setminus\{s\}}$ then $a\rho\in W_{S\setminus\{s\}}$ for every selected $a\in S\setminus\{s\}$, while $s\notin D_L(\rho)$: in the factorization $\rho=ud$ of [F14] with $J=\{s\}$ one must have $d=\rho$, since otherwise $\rho=s\,d$ would give $s\in S(\rho)=\{s\}\cup S(d)$ [F14], contradicting $S(\rho)\subseteq S\setminus\{s\}$; hence $\ell(s\rho)=\ell(\rho)+1$ and $s$ is not a left descent. Therefore no $s$-letter is ever selected [F2], and the scan of the remaining letters coincides position-by-position with the $(sc)^\infty$-scan of $u$, with the same remainders; by the uniqueness in [F2] the two sorting words coincide and, since the non-$s$ letters of the $j$-th $c$-block are exactly the $j$-th $sc$-block, $T_j^{(c)}(u)=T_j^{(sc)}(u)$ for every $j$. Consequently $u$ is $c$-sortable if and only if it is $sc$-sortable, and the $sc$-sorting word for $u$ is a $c$-sorting word for $u$. [F2, F14, F16, algebra]

1.3 Descent recursion: let $s$ be initial in $c$ with $c=s\beta$ and $scs=\beta s$, and let $\ell(su)<\ell(u)$. As letter sequences $c^\infty=s\cdot(scs)^\infty$; the first symbol $s$ is a left descent of $u$, so it is selected by the greedy scan [F2], the remainder becomes $su$, and the rest of the scan is exactly the $(scs)^\infty$-scan of $su$. Hence the $c$-sorting word of $u$ is $s$ followed by the $(scs)$-sorting word of $su$, and the selection sets satisfy $P=\{1\}\cup(Q+1)$ with $Q$ the $(scs)$-selection set. Since every block of either periodic word contains each letter exactly once, a block sequence is weakly decreasing if and only if for every $r$ the selected occurrences of $r$ form an initial segment of the list of all its occurrences [F1]; the $c$-occurrences of $r$ are the positions congruent to its index modulo $n$, and the $(scs)$-occurrences correspond under the shift $m\mapsto m+1$ to the same set of positions with position $1$ excluded when $r=s$ and included otherwise. Therefore for $r\ne s$ the two per-letter conditions coincide term-by-term through the bijection $P\cap O_r=(Q+1)\cap O_r$, while for $r=s$ the position $1$ is the first $c$-occurrence, so the condition on $O_s$ is equivalent to the condition on $O_s\setminus\{1\}$. Hence $u$ is $c$-sortable if and only if $su$ is $scs$-sortable. [F1, F2, F16, algebra]

1.4 Negative case: let $s$ be initial in $c$ and let $\ell(su)>\ell(u)$ with $s\in S(u)$, so $u\notin W_{S\setminus\{s\}}$ [F14]. The $c$-sorting word of $u$ is a reduced word for $u$, so it contains $s$ [F12]; position $1$ of $c^\infty$, whose letter is $s$, is not selected because $s\notin D_L(u)$ [F2]; the only positions carrying $s$ are $1,n+1,2n+1,\dots$, so the selected occurrence of $s$ lies in block $j\ge2$. Hence $s\notin T_1$ but $s\in T_j$ for some $j\ge2$, so the block sequence is not weakly decreasing and $u$ is not $c$-sortable [F16]. [F1, F2, F12, F14, F16, algebra]

1.5 Initial-root inequality: let $s$ be initial in $c$ and let $t\in T$ be a reflection with positive root $\beta_t=\sum_{r\in S}a_re_r$, $a_r\ge0$ [F10]. With $s$ first in the word, $E_c(e_s,e_s)=1$, $E_c(e_s,e_r)=0$ for $r\ne s$ and $E_c(e_r,e_s)=K(e_r,e_s)$ for $r\ne s$ [F1], so $E_c(e_s,\beta_t)=a_s$ and $E_c(\beta_t,e_s)=a_s+\sum_{r\ne s}a_rK(e_r,e_s)$; hence $\omega_c(e_s,\beta_t)=-\sum_{r\ne s}a_rK(e_r,e_s)\ge0$, because $K(e_r,e_s)$ is negative when $m(s,r)\ge3$ and zero when $m(s,r)=2$ [F1, F18]. Equality holds exactly when $a_r=0$ for every $r$ with $m(s,r)\ge3$, that is, when $\beta_t\in V_J$ for $J=\{r\in S:rs=sr\}$, equivalently $t\in W_J$ by [F19]; in particular equality forces $s$ and $t$ to commute, so $\omega_c(e_s,\beta_t)>0$ whenever they do not. [F1, F10, F14, F18, F19, algebra]

1.6 Final-root inequality: let $s$ be final in $c$. The same computation with $s$ last in the word gives $E_c(e_r,e_s)=0$ for $r\ne s$, $E_c(e_s,e_r)=K(e_s,e_r)$ for $r\ne s$, and $E_c(\beta_t,e_s)=a_s$, so for every reflection $t$ with $\beta_t=\sum a_re_r\ge0$ one has $\omega_c(e_s,\beta_t)=\sum_{r\ne s}a_rK(e_s,e_r)\le0$, with equality exactly when $\beta_t\in V_J$, equivalently $t\in W_J$ by [F19], for $J=\{r\in S:rs=sr\}$; in particular equality forces $s$ and $t$ to commute. [F1, F10, F14, F19, algebra]

1.7 A commuting swap with zero skew value preserves condition (i). For adjacent commuting letters $t,u$ after a prefix $x$, the two prefix roots are $\rho(x)e_t,\rho(x)e_u$; swapping the letters exchanges these roots and leaves every other prefix root unchanged. The only skew value whose sign reverses is the value between this pair. Thus if that value is zero, all inequalities and strictness conditions are preserved. Condition (ii) is invariant under every commuting swap by its definition. We use only zero-value swaps in the forward proof below, and justify separately the swaps needed in the reverse proof. [F8, algebra]

1.8 Induction claim and base cases: we prove the equivalences of clauses (1) and (2) by simultaneous induction on the pair (rank $n=|S|$, length $k$): for every finite-type Coxeter system of rank $n$, every Coxeter element $c$ and every element $w$ with reduced word of length $k$, conditions (1)(i) and (1)(ii) are equivalent, and $w$ is $c$-sortable if and only if it is $c$-aligned. Every appeal to induction below is at a pair strictly smaller in the lexicographic order: the rank drops when the system $W_{S\setminus\{s\}}$ is used, and the length drops when the element $sw$ is used. The cases $k=0$ and $S=\emptyset$ are immediate: the empty sequence satisfies (i) vacuously and the empty conversion furnishes (ii) for $w=1$; the block sequence of $1$ is empty, hence weakly decreasing, so $1$ is $c$-sortable [F16]; and $1$ is $c$-aligned because $N(1^{-1})=\emptyset$ is allowed in either case of the alignment condition of [F4]. [F4, F16, base]

1.9 Prefix construction for the non-descent alignment case. Suppose $w\not\ge_Rs$ and $w\notin W_{S\setminus\{s\}}$, and set $v=w_{S\setminus\{s\}}$, $w=vd$. Minimality of $d$ implies that every left descent of $d$ is $s$; since $d\ne1$, its reduced words begin with $s$. Fix a reduced word $a_1\cdots a_j$ for $v$ and continue it by such a reduced word for $d$, so $a_{j+1}=s$. Put $r_i=a_1\cdots a_i s a_i\cdots a_1$ for $0\le i\le j$. Then $r_j=t_{j+1}$. When $v$ is sortable we take its sorting word for the prefix. [F12, F14, algebra]

2.1 Full recursion: for $s$ initial in $c$ and $u\in W$, $u$ is $c$-sortable if and only if ($\ell(su)<\ell(u)$ and $su$ is $scs$-sortable) or ($s\notin S(u)$ and $u$ is $sc$-sortable). Indeed, if $u$ is $c$-sortable then either $\ell(su)<\ell(u)$, and step 1.3 gives that $su$ is $scs$-sortable, or $\ell(su)>\ell(u)$, and step 1.4 gives $s\notin S(u)$, so step 1.2 applies and $u$ is $sc$-sortable; conversely the two alternatives give $c$-sortability by steps 1.2 and 1.3. [step 1.2, step 1.3, step 1.4, algebra]

2.2 Step (i)$\Rightarrow$(ii), case $s\notin S(w)$: let $s$ be initial in $c$ with $c=s\beta$. By step 1.1, $w\in W_{S\setminus\{s\}}$, so all $\beta_i$ lie in $V_{S\setminus\{s\}}$ and the restriction identity [F3] gives $\omega_{sc}(\beta_i,\beta_j)=\omega_c(\beta_i,\beta_j)$ for all $i,j$, so (i) holds for $\omega_{sc}$ in the smaller-rank system $W_{S\setminus\{s\}}$. By induction on rank, $w$ is $sc$-sortable and $a_1\cdots a_k$ converts into an $sc$-sorting word for $w$ by adjacent commuting transpositions inside $S\setminus\{s\}$. By step 1.2 that word is a $c$-sorting word, so $w$ is $c$-sortable and the conversion exhibits (ii). [step 1.1, step 1.2, step 1.8, F3, ih, algebra]

2.3 Step (i)$\Rightarrow$(ii), case $s\in S(w)$: start with the given word satisfying (i), and let $j$ be its first occurrence of $s$. If $j>1$, the prefix $u=a_1\cdots a_{j-1}$ avoids $s$, and [F5] gives $\beta_{t_j}=\rho(u)e_s=e_s+\sum_{l<j}c_l\beta_{t_l}$ with $c_l\ge0$. This expansion will supply a zero-value commuting swap moving the first $s$ earlier; finite iteration then puts $s$ first. [step 1.7, F5, F14, algebra]

2.4 Aligned implies sortable in the descent case. Suppose $w$ is $c$-aligned and $s\le_Rw$. For a noncommutative rank-two parabolic not containing $s$, conjugation by $s$ preserves positivity of all its roots, so it takes the extreme rays and angular list to those of the conjugate subsystem. The inversion recursion gives $N((sw)^{-1})=\rho(s)(N(w^{-1})\setminus\{e_s\})$, and [F3] transfers the forms; alignment therefore transfers to the conjugate subsystem. In a rank-two parabolic containing $s$, $e_s$ is an extreme ray: expressing it as a nonnegative combination of the two extreme positive roots forces one of those roots to be supported only on $s$, by comparing the other simple coordinates, hence that root is $e_s$ by unit normalization [F19]. The restriction of $N((sw)^{-1})$ omits $e_s$, so rank-two recognition makes it an initial segment from the other endpoint (or empty). Since $s$ is final in $scs$, step 1.6 orders that other endpoint first with strictly positive skew value. Thus $sw$ is $scs$-aligned in every subsystem. Length induction gives $scs$-sortability of $sw$, and step 1.3 gives $c$-sortability of $w$. [step 1.3, step 1.6, step 1.8, F3, F4, F6, F10, F17, F19, ih, algebra]

2.5 Clause (2), reverse direction, case $w\not\ge_Rs$: assume $w$ is $c$-aligned with $\ell(sw)>\ell(w)$. We show first that $w\in W_{S\setminus\{s\}}$. Suppose not and put $v:=w_{\langle s\rangle}$, the $W_{S\setminus\{s\}}$-prefix of $w$; then $w=vd$ is the length-additive factorization of [F14] with $d\notin W_{S\setminus\{s\}}$, and $v<w$. For every noncommutative generalized rank-two parabolic $W''$ contained in $W_{S\setminus\{s\}}$, the prefix inversion formula [F7] gives $N(v^{-1})\cap\Phi_{W''}^+=N(w^{-1})\cap\Phi_{W''}^+$, and the forms agree by the restriction identity [F3]; hence $v$ is aligned with respect to $W''$. By the induction claim of step 1.8, applied inside the smaller-rank system $W_{S\setminus\{s\}}$, $v$ is $sc$-sortable, hence $c$-sortable by step 1.2. [step 1.2, step 1.8, F3, F7, F14, ih, algebra]

2.6 Claim: $\beta_{r_i}\in N(w^{-1})$ for every $0\le i\le j$. We prove this by descending induction on $j-i$. The base $i=j$ holds because $r_j=t_{j+1}$ is the reflection at position $j+1$ of the reduced word $a_1\cdots a_k$ for $w$, hence lies in $N(w^{-1})$ [F8]. For the step fix $i<j$, assume $\beta_{r_{i+1}}\in N(w^{-1})$, and note that also $\beta_{t_{i+1}}\in N(w^{-1})$ [F8]. Put $A=a_1\cdots a_i$, $J=\{a_{i+1},s\}$ and $W':=AW_JA^{-1}$; its generators are the reflections $t_{i+1}=Aa_{i+1}A^{-1}$ and $r_i=AsA^{-1}$, and $\Phi\cap P=\rho(A)\Phi_J$ for the root-spanned plane $P=\rho(A)V_J$; since $Aa_{i+1}$ is a prefix of the reduced word $a_1\cdots a_k$ one has $\ell(Aa_{i+1})=\ell(A)+1$, and $\ell(As)>\ell(A)$ because otherwise $\ell(sA^{-1})<\ell(A^{-1})$ and the simple length jump would make $(As)s$ a reduced spelling of $A$ containing $s$, contrary to support invariance [F14],[F15], contrary to $s\notin S(A)$; so $A$ is the minimal representative of the right coset $AW_J$ [F14], both $\rho(A)e_{a_{i+1}}$ and $\rho(A)e_s$ are positive. Every positive root of $\Phi_J$ is a nonnegative combination of these two simple roots, so its image under $\rho(A)$ is positive, and every negative subsystem root has negative image. Since $\Phi\cap P=\rho(A)\Phi_J$ by [F19], the positive roots of this plane are exactly $\rho(A)\Phi_{J,+}$. Their extreme rays are therefore $\rho(A)e_{a_{i+1}}$ and $\rho(A)e_s$; the extreme-ray characterization in [F17] proves that $t_{i+1},r_i$ are the canonical generators, with no external theorem, and the reflection list is as in [F17]. If $t_{i+1}$ and $r_i$ commute, then $r_{i+1}=t_{i+1}r_it_{i+1}=r_i$, so $\beta_{r_i}\in N(w^{-1})$ by the induction hypothesis. [step 1.9, F8, F14, F15, F17, F19, base, ih]

2.7 Clause (3), converse direction: let $J\subseteq S$, $c'$ the restriction of $c$, and $u\in W_J$ $c'$-sortable with $c'$-sorting word $a_1\cdots a_k$. Every letter of this word lies in $J$; the argument of step 1.2 with $J$ in place of $S\setminus\{s\}$ shows that the $c^\infty$-scan of $u$ never selects a letter outside $J$ (the remainder stays in $W_J$ by [F14], and for $\rho\in W_J$ and $a\notin J$ the factorization $\rho=ud$ with $d=\rho$ gives $\ell(a\rho)=\ell(\rho)+1$), and the selected letters inside the successive $c$-blocks are exactly those of the $c'$-sorting word, whose $j$-th block coincides with the $j$-th $c$-block's $J$-letters. Hence the $c$-sorting word of $u$ is $a_1\cdots a_k$, $T_j^{(c)}(u)=T_j^{(c')}(u)$ for every $j$, and $u$ is $c$-sortable. [step 1.2, F2, F14, F16, algebra]

3.1 Under step 2.3, bilinearity gives $\omega_c(\beta_{t_{j-1}},\beta_{t_j})=\omega_c(\beta_{t_{j-1}},e_s)+\sum_{l<j-1}c_l\omega_c(\beta_{t_{j-1}},\beta_{t_l})$. Each term is nonpositive by step 1.5 and (i); the left side is nonnegative by (i), so it is zero. Strictness in (i) forces $t_{j-1},t_j$ to commute. Writing $A=a_1\cdots a_{j-2}$, these are $Aa_{j-1}A^{-1}$ and $Aa_{j-1}s a_{j-1}A^{-1}$, so their commutation is equivalent to $a_{j-1}s=sa_{j-1}$. This is exactly the zero-value swap required in step 2.3. Its finite iteration yields $a_1=s$. [step 2.3, step 1.5, step 1.7, algebra]

3.2 Step (ii)$\Rightarrow$(i): let the given word be commutation-equivalent to a sorting word of sortable $w$. If $s$ is absent, every word in the class lies in $W_{S\setminus\{s\}}$ and the rank induction and restriction identity prove (i). Otherwise the sorting word begins with $s$ by step 2.1. In any commutation-equivalent word every letter preceding the first $s$ commutes with $s$: a noncommuting letter cannot cross that occurrence under commuting swaps. Move this $s$ to the front. At each such swap the preceding prefix uses letters commuting with $s$, hence fixes $e_s$; its adjacent other root is supported on those letters, and the formula in step 1.5 gives skew value zero with $e_s$. Step 1.7 therefore preserves (i) in both directions for these swaps. Deleting the first $s$ from the commutation class gives a word commutation-equivalent to the $scs$-sorting word of $sw$ (each original swap either survives deletion or exchanges that $s$ with a commuting letter and becomes an identity). The length induction proves (i) on this tail, and [F3] transports its roots to the tail roots of $w$. Pairs involving the first root $e_s$ satisfy (i) by step 1.5. Reversing the zero-value swaps proves (i) for the original word. [step 1.2, step 1.3, step 1.5, step 1.7, step 1.8, step 2.1, F3, F14, ih, algebra, discharge-induction]

3.3 Assume now that $t_{i+1},r_i$ do not commute; then $r_{i+1}\ne t_{i+1},r_i$. Since $a_1\cdots a_{i+1}$ is a reduced word for an element of $W_{S\setminus\{s\}}$, the positive-span expansion [F5] gives $\beta_{r_{i+1}}=\rho(a_1\cdots a_{i+1})e_s=e_s+\sum_{l\le i+1}c_l\beta_{t_l}$ with $c_l\ge0$. Then $\omega_c(\beta_{t_{i+1}},\beta_{r_{i+1}})=\omega_c(\beta_{t_{i+1}},e_s)+\sum_{l\le i}c_l\omega_c(\beta_{t_{i+1}},\beta_{t_l})$ (the term $l=i+1$ of the expansion of [F5] drops because $\omega_c$ is alternating), where the first term is $\le0$ by step 1.5 and each other term is $\le0$ by the induction hypothesis for clause (1)(i) at the strictly shorter sortable element $v$ of step 2.5. If the sum were $0$, then, because $\beta_{r_{i+1}}=\rho(t_{i+1})\beta_{r_i}$ and $\rho(t_{i+1})$ is the reflection with normal $\beta_{t_{i+1}}$ [F8], the identity $\omega_c(\beta_{t_{i+1}},\beta_{r_{i+1}})=\omega_c(\beta_{t_{i+1}},\beta_{r_i})$ would hold (the normal component contributes $0$ to both values); since $t_{i+1}$ and $r_i$ are the canonical generators of $W'$ [step 2.6], the endpoint value of $\omega_c$ on $W'$ would vanish, so the restriction of $\omega_c$ to $W'$ would be zero [F4], and the $c$-alignment of $w$ with respect to $W'$ would force $N(w^{-1})\cap\Phi_P^+$ to be empty or a singleton [F4]; but it contains the two distinct roots $\beta_{t_{i+1}}$ [F8] and $\beta_{r_{i+1}}$ (induction hypothesis). Therefore $\omega_c(\beta_{t_{i+1}},\beta_{r_{i+1}})<0$. [step 2.5, step 2.6, step 1.5, F4, F5, F8, ih, algebra]

4.1 Step (i)$\Rightarrow$(ii), conclusion in case $s\in S(w)$: by step 3.1 the word is $s\,a_2\cdots a_k$ with $a_2\cdots a_k$ a reduced word for $sw$ [F15], and the conjugation identity [F3] transfers (i) to $\omega_{scs}$ for the tail. By induction on length, $sw$ is $scs$-sortable and $a_2\cdots a_k$ converts into an $scs$-sorting word $\sigma$ for $sw$ by adjacent commuting transpositions. By step 1.3 the $c$-sorting word of $w$ is $s\sigma$, so $w$ is $c$-sortable, and $s(a_2\cdots a_k)\to s\sigma$ is the required conversion. [step 1.3, step 1.8, step 2.3, step 3.1, F3, F15, ih, algebra, discharge-induction]

4.2 Alignment inference: retain the notation of step 3.3 with $t_{i+1},r_i$ noncommuting, and let $u_1,\dots,u_m$ be the angular list of $W'$ ordered so that $\omega_c(\beta_{u_1},\beta_{u_m})\ge0$ [F4]; since $\omega_c(\beta_{t_{i+1}},\beta_{r_{i+1}})<0$, the restriction of $\omega_c$ to $W'$ is nonzero and the endpoint value is positive [F4]. The relation $r_{i+1}=t_{i+1}r_it_{i+1}$ and the alternating-list identities [F17] leave two possibilities: if $t_{i+1}=u_1$ and $r_i=u_m$, then $r_{i+1}=u_1u_mu_1=u_2$ and [F4] gives $\omega_c(\beta_{u_1},\beta_{u_2})>0$, contradicting the strict negativity of step 3.3; hence $t_{i+1}=u_m$, $r_i=u_1$ and $r_{i+1}=u_mu_1u_m=u_{m-1}$. Since $w$ is $c$-aligned with respect to $W'$, the set $N(w^{-1})\cap\Phi_P^+$ is empty, the singleton $\{\beta_{u_m}\}$, or an initial segment [F4]; it contains $\beta_{t_{i+1}}=\beta_{u_m}$ [F8] and $\beta_{r_{i+1}}=\beta_{u_{m-1}}$ (induction hypothesis), so it is not empty, and the singleton case is excluded because $u_{m-1}\ne u_m$ for $m\ge3$ [F17]; therefore it is an initial segment containing $u_{m-1}$, hence also $u_1$, and $\beta_{r_i}\in N(w^{-1})$. This closes the induction of step 2.6. [step 2.6, step 3.3, F4, F8, F17, ih, algebra]

5.1 Clause (1) is proved by steps 1.8, 2.1-2.3, 3.1-3.2 and 4.1. [step 1.8, step 2.2, step 2.3, step 3.1, step 4.1, step 3.2, discharge-induction]

6.1 Clause (2), forward direction: let $w$ be $c$-sortable with $c$-sorting word and reflection sequence $t_1,\dots,t_k$, prefix roots $\beta_1,\dots,\beta_k$. By clause (1), applied to the sorting word in the direction (ii)$\Rightarrow$(i), $\omega_c(\beta_i,\beta_j)\ge0$ for $i\le j$, strictly unless $t_i,t_j$ commute. Let $W_P$ be a noncommutative generalized rank-two parabolic with angular reflection list $u_1,\dots,u_m$, $m\ge3$; by the recognition lemma [F6] the subsequence of $t_1,\dots,t_k$ lying in $W_P$ is an initial or final subsequence of that list, so $N(w^{-1})\cap\Phi_P^+$ is an initial or final segment of $\{\beta_{u_1},\dots,\beta_{u_m}\}$ [F8]. In the canonical order with $\omega_c(\beta_{u_1},\beta_{u_m})\ge0$ [F4]: if the endpoint value is $0$ then any two-element segment contains two consecutive reflections $u_i,u_{i+1}$ with $\omega_c(\beta_{u_i},\beta_{u_{i+1}})=0$, contradicting the strictness of (i) since $u_i,u_{i+1}$ do not commute [F17], so the segment is empty or a singleton; if the endpoint value is positive then a final segment of size at least two presents the pair $(u_m,u_{m-1})$ in that order in the reflection sequence, so strictness would force $\omega_c(\beta_{u_m},\beta_{u_{m-1}})>0$, while the orientation [F4] gives $\omega_c(\beta_{u_m},\beta_{u_{m-1}})<0$, a contradiction; hence the segment is empty, the singleton $\{\beta_{u_m}\}$, or an initial segment. This is exactly $c$-alignment with respect to $W_P$ [F4], and $W_P$ was arbitrary. [step 5.1, F4, F6, F8, F17, algebra]

7.1 Consequence: by step 2.6 with $i=0$, $\beta_{r_0}=e_s\in N(w^{-1})$, so $s\le_Rw$ by [F13], contradicting $\ell(sw)>\ell(w)$. Hence a $c$-aligned $w$ with $w\not\ge_Rs$ lies in $W_{S\setminus\{s\}}$. It is then $sc$-aligned as an element of that parabolic: every noncommutative generalized rank-two parabolic of $W_{S\setminus\{s\}}$ is one of $W$, the inversion set satisfies $N(w^{-1})\cap\Phi_{S\setminus\{s\},+}=N(w^{-1})$, and the restriction identity [F3] preserves the alignment condition. By the induction claim of step 1.8 applied inside the smaller-rank system $W_{S\setminus\{s\}}$, $w$ is $sc$-sortable, and by step 1.2 it is $c$-sortable. Together with steps 6.1 and 2.4 this proves both directions of clause (2). [step 1.2, step 1.8, step 6.1, step 2.4, step 2.6, F3, F13, ih, algebra]

7.2 Clause (3), forward direction: let $v$ be $c$-sortable with $c$-sorting word, reflection sequence $t_1,\dots,t_k$ and prefix roots $\beta_1,\dots,\beta_k$, and let $J\subseteq S$ with restriction $c'$. By clause (1) and step 6.1 the sequence satisfies the rank-two segment condition; let $s_1,\dots,s_m$ be the subsequence of those $t_i$ lying in $W_J$. For every generalized rank-two parabolic $W_P$, the intersection $W_P\cap W_J$ is empty, a single reflection, or all of $W_P$ (its roots are $\Phi\cap P\cap V_J$, whose dimension is at most one when it is a proper intersection), so the sub-subsequence is again empty, a singleton, or an initial or final subsequence; by [F6] the sequence $s_1,\dots,s_m$ is the reflection sequence of a reduced word for some element $u$, and its positive-root set is $N(v_J^{-1})$, so $u=v_J$ by inversion-set equality and [F13], because $N(v_J^{-1})=N(v^{-1})\cap\Phi_{J,+}$ [F7] and the reflections with roots in $\Phi_{J,+}$ are exactly those in $W_J$ [F19]. For $i<j$ the pair $(s_i,s_j)$ is a pair $(\beta_{i'},\beta_{j'})$ with $i'<j'$ of the original sequence, so $\omega_{c'}(\beta_{s_i},\beta_{s_j})=\omega_c(\beta_{i'},\beta_{j'})\ge0$ by the restriction identity [F3], with strict inequality unless $s_i,s_j$ commute; by clause (1) applied in the direction (i)$\Rightarrow$(ii) inside $W_J$ with Coxeter element $c'$ [F14], $v_J$ is $c'$-sortable. [step 6.1, step 5.1, F3, F6, F7, F14, F19, algebra]

8.1 Conclusion: steps 1.1-1.4 supply the descent-condition translation, the two recursions and the negative case; steps 1.5-1.6 the two endpoint inequalities; step 1.7 the invariance under commuting transpositions; steps 1.8-1.9 set up the induction and the prefix construction; steps 2.1-2.3, 3.1-3.2 and 4.1 prove clause (1); steps 2.4-2.6, 3.3, 4.2, 6.1 and 7.1 prove clause (2); steps 2.7 and 7.2 prove clause (3). All inductions are on the well-founded lexicographic pair (rank, length), and every witness selected is a single existential instantiation from an explicitly given finite or fixed set (a reduced word of a fixed element, an initial or final letter, a canonical generator pair); no Axiom of Choice is used. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 1.5, step 1.6, step 1.7, step 1.8, step 2.2, step 2.3, step 3.1, step 4.1, step 3.2, step 5.1, step 6.1, step 2.4, step 2.5, step 1.9, step 2.6, step 3.3, step 4.2, step 7.1, step 2.7, step 7.2, discharge-induction] ∎

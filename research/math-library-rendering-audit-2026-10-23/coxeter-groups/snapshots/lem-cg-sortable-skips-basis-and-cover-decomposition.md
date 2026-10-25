---
id: "lem-cg-sortable-skips-basis-and-cover-decomposition"
kind: "lemma"
title: "Skip roots form a basis, negative skips are cover roots, and the cover decomposition of sortable elements"
status: published
origin: pipeline
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 24
deps:
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - lem-cg-finite-rank-two-inversion-set-recognition
  - def-cg-sortable-element-skip-roots-and-cone
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - lem-cg-uniform-omega-positive-and-aligned-sortability
  - lem-cg-sortable-recursion-output-and-initial-choice-independence
  - def-cg-geometric-inversion-set
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-cg-root-length-criterion-and-faithfulness
  - thm-cg-parabolic-intersections-and-coset-factorization
  - def-cg-parabolic-quotient-and-two-sided-minima
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - lem-cg-weak-parabolic-projection-and-cover-joins
  - thm-cg-root-sign-and-simple-reflection-positivity
  - lem-cg-weak-order-is-a-graded-partial-order
  - lem-cg-finite-dihedral-subsystems-and-canonical-roots
  - lem-cg-reflection-representation-descends-and-root-norms
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "section 5, Lemmas 5.6-5.11 and Propositions 5.1-5.4, pp. 26-31, with Lemma 3.12, p. 21"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 2, p. 7 (Lemma 2.7-Lemma 2.10 and the finite cover decomposition)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 4.4, pp. 101-105 (roots, reflections and inversion sets)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type, $c$ a Coxeter element, and $v\in W$ $c$-sortable, with $c$-sorting word $a_1\cdots a_k$, skip roots $C^r_c(v)$, forced and unforced skip sets $fsc(v),ufs_c(v)$, and $\mathcal A_c(v),\mathcal B_c(v)$ as in [[def-cg-sortable-element-skip-roots-and-cone]]; write $\beta_t$ for the positive root of a reflection $t$, and $\mathrm{Cov}(v):=\{t_\alpha:\alpha\in\operatorname{cov}(v)\}$ for its cover reflections, where $\operatorname{cov}(v)$ is the positive-root set of [[lem-cg-weak-parabolic-projection-and-cover-joins]] (4). Then:

**(1) Values and signs of the skip roots.** For every $r\in S$ the leftmost unselected occurrence of $r$ determines a skip in a position $i+1$ with $t=a_1\cdots a_ir\,a_i\cdots a_1$, and $C^r_c(v)=\pm\beta_t$; moreover
$$C^r_c(v)=-\beta_t\iff t\in fsc(v),\qquad C^r_c(v)=+\beta_t\iff t\in ufs_c(v).$$

**(2) The basis.** $C_c(v)=\{C^r_c(v):r\in S\}$ is a basis of $V$, and each $C^r_c(v)$ is independent of the chosen reduced Coxeter word for $c$ and of the choices in the recursion, so the skip roots are well defined.

**(3) Negative skips are cover roots.** $\mathcal A_c(v)=\{-\beta_t:t\in\mathrm{Cov}(v)\}$ and $\mathcal B_c(v)=\{\beta_t:t\in ufs_c(v)\}$ with $ufs_c(v)$ the unforced skip reflections; in particular $fsc(v)=\mathrm{Cov}(v)$ and $|fsc(v)|=|\mathrm{Cov}(v)|$.

**(4) Euler orthogonality.** Order the simple generators $r_1,\dots,r_n$ by the first appearance of $r_i$ in the complement of the selected positions of $c^\infty$. Then $E_c(C^{r_i}_c(v),C^{r_j}_c(v))=0$ for all $i<j$.

**(5) Terminal covers and cover decompositions.** (i) If $s$ is final in $c$ and $v\ge_Rs$, then $s$ is a cover reflection of $v$ (equivalently $s\in\mathrm{Cov}(v)$). (ii) If $s$ is final in $c$, $v$ is $c$-sortable and $v\ge_Rs$, then
$$v=s\vee v_{\langle s\rangle},\qquad \mathrm{Cov}(v)=\{s\}\cup\mathrm{Cov}(v_{\langle s\rangle}),\qquad ufs_c(v)=ufs_{cs}(v_{\langle s\rangle}),$$
where $v_{\langle s\rangle}$ is the $W_{\langle s\rangle}$-prefix and $cs$ the restriction of $c$ to $W_{\langle s\rangle}$ (the reduced word in $W_{\langle s\rangle}$ obtained from a reduced word for $c$ by deleting the final letter). (iii) If $s$ is initial in $c$ and $s\in\mathrm{Cov}(v)$, then the same identities hold, with the last replaced by
$$ufs_c(v)=\{sts:t\in ufs_{sc}(v_{\langle s\rangle})\},$$
where $sc$ is the restriction of $c$ to $W_{\langle s\rangle}$ (obtained by deleting the initial letter).

## Facts & Assumptions

**Given:** the finite-type system, sortable element $v$, sorting word, skips and roots of the Statement. Put $I(v):=\{t_\alpha:\alpha\in N(v^{-1})\}$, and use the reflection set $\mathrm{Cov}(v)$ defined in the Statement.

[F1] [[def-cg-sortable-element-skip-roots-and-cone]] (1)-(4): sortability means decreasing blocks, skips are the first omitted occurrences, $C^r_c(v)=\rho(a_1\cdots a_i)e_r$, forcedness means the prefix followed by $r$ is not reduced, and the cone is the intersection of the corresponding halfspaces.

[F2] [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (1)-(3): the sorting word is given by the greedy scan, words for $c$ differ by commuting swaps inside blocks, and $E,\omega$ restrict to parabolics and are transported by an initial $s$ to $scs$.

[F3] [[lem-cg-uniform-omega-positive-and-aligned-sortability]] (1)-(3) : a reduced word has the omega inequalities, strict for noncommuting reflections, exactly when it is commutation-equivalent to a sorting word of a sortable element; sortable elements are aligned and their parabolic prefixes are sortable.

[F4] [[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)-(3): the root/reflection bijection, conjugation dictionary, distinct positive prefix roots enumerating $N(w^{-1})$, and strong exchange. [[thm-cg-root-length-criterion-and-faithfulness]] (1) gives the sign test for appending a simple letter.

[F5] [[thm-cg-root-sign-and-simple-reflection-positivity]] (2),(3): positive roots have nonnegative simple coordinates; $\rho(s)$ changes the sign only of $\pm e_s$. The action preserves $B$ and roots have norm $1$ ([[lem-cg-reflection-representation-descends-and-root-norms]] (2),(3)).

[F6] [[lem-cg-weak-order-is-a-graded-partial-order]] (2),(4),(5): covers append one generator, weak order is inversion-set inclusion, and $s\le_Rw$ exactly when $e_s\in N(w^{-1})$.

[F7] [[lem-cg-weak-parabolic-projection-and-cover-joins]] (1),(4): parabolic prefix inversion sets are intersections with $\Phi_{J,+}$; deleting a cover root deletes exactly that inversion (Proof 1.3); if $s$ is a cover reflection and all other cover reflections lie in $W_{S\setminus\{s\}}$, then $v=s\vee v_{S\setminus\{s\}}$, whose cover reflections are $\{s\}\cup\mathrm{Cov}(v_{S\setminus\{s\}})$.

[F8] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1),(2): support is invariant under reduced spelling, $W_J$ consists of the elements supported on $J$, and its intrinsic lengths agree with ambient lengths. [[thm-cg-parabolic-intersections-and-coset-factorization]] (2) identifies $\Phi_J=\Phi\cap V_J$ and its reflections with those of $W_J$.

[F9] [[lem-cg-finite-rank-two-inversion-set-recognition]] (1),(2): inversion sets intersect each rank-two positive system in an initial or final segment; reflection sequences satisfy the ordered version of that condition. [[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (1)-(5) supplies such a subsystem for any root-spanned plane, its extreme positive roots and angular list.

[F10] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (2): $E_c$ is triangular with diagonal $1$ and $E_c+E_c^{\mathsf T}=2B$. If $s$ is initial, $E_c(e_s,\beta)$ is the $s$-coordinate of $\beta$; if $s$ is final, $E_c(\beta,e_s)$ is that coordinate.

## Proof

1.1 Fix a word for $c$. All inductions below are on (rank, length); the empty sorting word has skips $r$, roots $e_r$, no negative roots and no covers. It supplies the base cases. Decreasing blocks mean that for each letter the selected occurrences form an initial segment of all its occurrences. If initial $s$ is selected first, deleting it gives the $scs$-sorting word of $sv$; otherwise sortable $v$ lies in $W_{S\setminus\{s\}}$ and its word is the $sc$-sorting word. The skip positions then give $C_c(v)=\rho(s)C_{scs}(sv)$ in the first case and $C_c(v)=\{e_s\}\cup C_{sc}(v)$ in the second. This proves agreement with the recursive description by induction. [F1, F2, F3, given, induction, base]

1.2 Signs and inversions of a skip. Write $p=a_1\cdots a_i$, $v=pz$, and $\gamma=\rho(p)e_r$. The root-length test says $\gamma$ is negative exactly when $pr$ is not reduced. At the skipped occurrence the greedy remainder $z$ has no left descent $r$, so $\rho(z^{-1})e_r$ is positive. Hence $\rho(v^{-1})\gamma=\rho(z^{-1})e_r$ is positive. Thus if $\gamma=\beta_t$ then $t\notin I(v)$, and if $\gamma=-\beta_t$ then $t\in I(v)$. The dictionary gives $\gamma=\pm\beta_t$ for $t=prp^{-1}$. This proves all signs in (1) and the stated signed-root sets. [F1, F2, F4, F5, F6]

1.3 Endpoint inequalities. For initial $s$ and $\beta_t=\sum a_r e_r\in\Phi_+$, the triangular Euler formula gives $\omega_c(e_s,\beta_t)=-\sum_{r\ne s}2a_rB(e_r,e_s)\ge0$. Equality means the root is supported on generators commuting with $s$ (including $s$), so [F8] puts its reflection in the subgroup generated by them; it commutes with $s$. The final-letter formula reverses the sign and has the same equality implication. Thus both inequalities are strict when the reflections do not commute. [F5, F8, F10, algebra]

1.4 Cover transport. For $v=sq$ with $\ell(q)=\ell(v)-1$, a right descent $r$ of $v$ has negative root $\rho(v)e_r$. Applying $\rho(s)$ preserves its negative sign except when it is $-e_s$, equivalently when its cover reflection is $s$. Conversely a positive $\rho(v)e_r$ could change to negative only if it were $e_s$, which would imply $\rho(v^{-1})e_s=e_r>0$ and contradict $s\le_Rv$. Hence the right descents of $q$ correspond exactly to the cover reflections of $v$ other than $s$, and $\mathrm{Cov}(q)=\{sts:t\in\mathrm{Cov}(v)\setminus\{s\}\}$. If $s$ is a cover, $I(q)=I(v)\setminus\{s\}$ by [F7]; the general inversion transport also gives $I(q)=s(I(v)\setminus\{s\})s$. In particular $I(v)\setminus\{s\}$ is conjugation-invariant when $s$ is a cover. [F4, F5, F6, F7, algebra]

2.1 The recursion of step 1.1 gives a basis: it either applies the invertible map $\rho(s)$ to a smaller-length basis, or adjoins $e_s$ to a smaller-rank basis of $V_{S\setminus\{s\}}$. Independence under a commuting swap in the word for $c$ follows from the scan comparison [F2]: prefix products after the two positions agree; if an omitted $r$ exchanges position with a selected commuting $q$, the prefix changes by $q$ but $\rho(q)e_r=e_r$, so its skip root agrees; if both are omitted no prefix changes. Iterating these swaps proves word independence, hence independence of any initial-letter recursion choices. This proves (2). [step 1.1, F2, F5, ih, induction]

2.2 Euler orthogonality. Order the skips by their actual first omitted positions. In the descent branch their order is unchanged by removing the first selected $s$, and the transport identity for $E$ reduces every pair to smaller length. In the non-descent branch $e_s$ is the first root and all other roots lie in $V_{S\setminus\{s\}}$, so $E_c(e_s,\beta)=0$; the remaining pairs reduce by restriction and smaller rank. The empty word has $E_c(e_{s_i},e_{s_j})=0$ for $i<j$. This proves (4). [step 1.1, F2, F10, induction]

2.3 Unforced-skip preparation. If the first omitted $r$ follows prefix $p$, and $pr$ is reduced, then its selected positions together with this $r$ are the sorting positions of $pr$ and have decreasing blocks. Indeed all earlier $r$-occurrences were selected, so adding this occurrence preserves the initial-segment property. To verify the greedy assertion, suppose an earlier omitted $q$ would be selected for $pr$. At its current prefix $h$, a forced omission cannot be selected for $pr$: its negative root is the negative of an inversion of $h$, which is already below $pr$. Thus this differing omission is unforced, and its conjugate reflection $u=hqh^{-1}$ is an inversion of $pr$ but not of $v$ by step 1.2. Since $I(pr)=I(p)\cup\{t\}$ and $I(p)\subseteq I(v)$, necessarily $u=t=prp^{-1}$. Write $p=hz$. Strong exchange, or direct cancellation of the unique last prefix reflection of $pr$, gives $qzr=z$. But $q$ never occurs in $z$, since sortable $v$ has no selected $q$ after this omitted occurrence. Support invariance in the reduced equality $zr=qz$ therefore forces $q=r$; this contradicts that the given $r$ is its first omitted occurrence. No earlier omission is selected, and the selected prefix positions remain greedy since $p\le_Rpr$. Thus $pr$ is sortable with the asserted sorting word. Also no later selected letter is $r$. [step 1.2, F1, F2, F4, F6, F8]

2.4 For an unforced skip with reflection $t$ after $i$ selections, $\omega_c(\beta_t,\beta_{t_j})\ge0$ for every $j>i$, strictly when $t,t_j$ do not commute. Induct along step 1.1. If $v\not\ge_Rs$ and $r=s$, this is the initial-root inequality in step 1.3; otherwise restrict to the smaller parabolic. If $v\ge_Rs$, both the skip and every later selected root transport by $\rho(s)$ from the shorter sorting word; the skip remains unforced because its positive root is not $e_s$ (it is not an inversion of $v$ by step 1.2). The form identity transfers the inductive inequality and commutation data. [step 1.1, step 1.2, step 1.3, F2, F3, ih, induction]

2.5 If a group element commutes with all prefix reflections of a reduced word $b_1\cdots b_m$, it commutes with that word: from the first prefix reflection obtain commutation with $b_1$; successively conjugating the next reflection by the already commuting prefix obtains commutation with each $b_j$. If $s$ is final in $c$ and $s\in I(v)$, let $t_i=s$ in the sorting reflection sequence. Uniform positivity and the final-root inequality of step 1.3 force $s$ to commute with every $t_j$ for $j>i$. Conjugating by $a_1\cdots a_i$ and applying the preceding observation shows $a_i$ commutes with the suffix $a_{i+1}\cdots a_k$. Therefore $sv$ is the reduced word with $a_i$ removed, and $v=(sv)a_i$; thus $s$ is a cover reflection. This proves (5)(i). [step 1.3, F3, F4, F6, algebra]

2.6 Negative skips are covers, descent case with $s$ a cover. Put $q=sv$. First $v$ is also $scs$-sortable. Indeed step 1.4 gives $I(v)\setminus\{s\}=s(I(v)\setminus\{s\})s$, hence $I(v)=sI(v)s$. For a rank-two subsystem not containing $s$, conjugation by $s$ preserves its positive roots and extreme rays; form transport and this invariance transfer $c$-alignment of $v$ to $scs$-alignment on the conjugate subsystem. In a noncommutative subsystem containing $s$, its positive simple-coordinate cone makes $e_s$ an extreme ray. Let its other endpoint be $p$. Since $s$ is initial, step 1.3 orders its angular list as $u_1=s,u_2=sps,\dots,u_m=p$ with positive skew value. Alignment and $s\in I(v)$ make the intersection an initial segment. If it contains $u_2$, conjugation invariance puts $p=su_2s$ in it, so it is the full list; otherwise it is $\{s\}$. For $scs$, where $s$ is final, the positive orientation is reversed and both the full list and the singleton final endpoint $\{s\}$ are allowed. Thus $v$ is $scs$-aligned in every noncommutative subsystem and is $scs$-sortable by [F3]. Now scan the fixed $scs$ word for $v$ and $q$ until their first different selection. Since $I(v)=I(q)\cup\{s\}$, the difference is the reflection $s$, selected for $v$ and omitted for $q$ after a common prefix $p$, with letter $r$ and $prp^{-1}=s$. It is unforced for $q$ since $pr$ is a reduced prefix for $v$. No earlier omitted $r$ was common to the two scans: its later selection for sortable $v$ would violate decreasing blocks. Consequently this position is the first omitted $r$ for $q$, and $C^r_{scs}(q)=\rho(p)e_r=e_s$. Length induction identifies the negative skip roots of $q$ with $\mathrm{Cov}(q)$; transport now adds $-e_s$ and takes the other negative roots to the covers of $v$ by step 1.4. [step 1.1, step 1.2, step 1.3, step 1.4, F2, F3, F4, F5, F9, ih, induction]

2.7 An insertion criterion. Suppose the reflection sequence of a word commutation-equivalent to a sorting word for sortable $v$ is $t_1,\dots,t_k$. Insert a distinct $t$ after $j$ entries, assume $t_1,\dots,t_j,t$ is a reduced-word reflection sequence, and assume all earlier roots have nonnegative omega with $\beta_t$ and all later roots have nonnegative omega after $\beta_t$, strictly for noncommuting pairs. Then $t$ is an unforced skip of $v$. For initial $s$ with $v\not\ge_Rs$, uniform positivity makes the element with inversions $\{t_1,\dots,t_j,t\}$ sortable; if $t$ is outside $W_{S\setminus\{s\}}$, its only inversion outside that parabolic must be $s$ by the sortable recursion, so $t=s$, the first unforced skip. Otherwise rank induction applies. If $v\ge_Rs$, move the first $s$ to the front of the original commutation class; letters crossed commute with $s$ and have zero skew value by the initial-root formula, as in the uniform proof. If the inserted $t$ lies before this $s$, the two inequalities with the initial root from step 1.3 force $\omega_c(\beta_t,e_s)=0$ and commutation; it too can be moved across $s$, preserving the prefix-reduced condition. Delete the first $s$ and conjugate all remaining reflections by $s$; positivity is preserved because none is $s$, and length induction applies to $sv$ and $scs$. Its unforced skip transports back to the asserted skip of $v$. This proves the criterion by rank/length induction. [step 1.1, step 1.2, F2, F3, F4, F5, F8, induction]

3.1 Descent case with $s$ not a cover. If $e_s$ were an unforced skip root of $q=sv$, step 2.4 for the final letter $s$ in $scs$ would force $s$ to commute with all selected reflections after that skip. Conjugating by its prefix and using step 2.5 shows its skipped letter $r$ commutes with the remaining suffix. If $q=pz$ and $s=prp^{-1}$, then $v=sq=prz=pzr=qr$ is reduced and covers $q=sv$, contrary to the assumption. Thus $e_s$ is absent. Also $-e_s$ cannot be a skip root of $q$: step 1.2 would put $s$ in $I(q)$, although $q\not\ge_Rs$. All other root signs are preserved by $\rho(s)$, so step 1.4 and length induction identify the negative skips with the covers of $v$. The non-descent branch restricts to the parabolic and adjoins the positive root $e_s$; its covers are those of that parabolic by support and intrinsic length. Together with step 2.6 this proves (3). [step 1.1, step 1.2, step 2.4, step 2.5, step 1.4, F5, F6, F8, induction]

4.1 Confinement preparation. Suppose $s$ is initial or final and a cover of $v$. By (3), $-e_s$ is a skip root. Euler orthogonality says for every other skip root $\gamma=\pm\beta_t$ that either $E_c(e_s,\gamma)=0$ or $E_c(\gamma,e_s)=0$. The coordinate formulas and initial-letter conjugation then imply either $\beta_t\in V_{S\setminus\{s\}}$ or $\rho(s)\beta_t\in V_{S\setminus\{s\}}$, hence either $t$ or $sts$ lies in that parabolic. For example, for initial $s$, the first equality reads off the coordinate of $\gamma$, while the second becomes $E_{scs}(\rho(s)\gamma,-e_s)=0$ with $s$ final; For final $s$, apply the same initial-letter identity in $scs$ and then its inverse; the coordinate equalities give the same alternatives. [step 2.2, step 3.1, F2, F8, F10]

5.1 If $s,t$ do not commute, take the rank-two plane spanned by their roots, with the generic perpendicular point supplied by [F9]. One extreme root is $e_s$, since nonnegative simple coordinates make its ray extreme. The other canonical reflection $p$ lies in $W_{S\setminus\{s\}}$: one of $t,sts$ lies there by step 4.1, and its root has zero $s$-coordinate; this is the other extreme ray. Thus $\{t,sts\}=\{p,sps\}$. If $t$ is a cover, step 1.4 shows both $t,sts$ are inversions; together with $s$ this forces the full rank-two inversion set by [F9]. Deleting an internal angular root would leave a set which is neither initial nor final, whereas deleting a cover leaves an inversion set. Hence the cover $t$ must be the endpoint $p$, and lies in the parabolic. [step 1.4, step 4.1, F7, F8, F9]

6.1 If $t$ is unforced, it is not an inversion by step 1.2. Conjugation invariance from step 1.4 shows neither $p$ nor $sps$ is an inversion of $v$; its rank-two inversion set is therefore just $\{s\}$. The sortable element $v'=a_1\cdots a_i r$ from step 2.3 has inversions equal to the prefix inversions together with $t$, so its rank-two inversion set is either $\{p\}$ with $t=p$, or $\{s,sps\}$ with $t=sps$, by recognition. If $s$ is initial, its first sorting position is selected, so $s$ is in that prefix and only the second possibility holds; thus $sts=p$ lies in the parabolic. If $s$ is final, the endpoint order with positive omega is $(p,s)$, so alignment of $v'$ excludes $\{s,sps\}$ and forces $t=p$ in the parabolic. The commuting case has $t=sts$ and is already covered by step 4.1. These are the full confinement assertions needed below. [step 1.2, step 1.3, step 2.3, step 1.4, step 4.1, step 5.1, F3, F9]

6.2 For final $s$ with $v\ge_Rs$, step 2.5 makes $s$ a cover; for initial $s$ assume it is a cover. In either case step 5.1 puts every other cover in $W_{S\setminus\{s\}}$, so the local cover-join formulas [F7] give $v=s\vee v_{S\setminus\{s\}}$ and $\mathrm{Cov}(v)=\{s\}\cup\mathrm{Cov}(v_{S\setminus\{s\}})$. [step 2.5, step 5.1, F7]

7.1 For final $s$, step 6.1 puts every unforced skip $t$ in that parabolic. Insert $t$ in the sorting reflection sequence as in steps 2.3-2.4 and restrict the sequence to parabolic reflections. The intrinsic parabolic reflection-sequence restriction in the proof of [[lem-cg-uniform-omega-positive-and-aligned-sortability]] (3), and the prefix inversion formula identify the restricted sequence with a reduced word for $v_{S\setminus\{s\}}$; uniform positivity makes it commutation-equivalent to its $cs$-sorting word. The same restriction of the prefix-plus-$t$ sequence is reduced by recognition, and the omega inequalities restrict with the form. Thus the insertion criterion in step 2.7 makes $t$ an unforced skip of that prefix. Both unforced sets have the same cardinality: the bases have respectively $n$ and $n-1$ roots and the cover sets differ by the one reflection $s$. The inclusion is therefore equality. [step 2.1, step 2.3, step 2.4, step 2.7, step 6.1, step 6.2, F2, F3, F4, F7, F9]

8.1 For initial $s$, transport each unforced skip $t$ to $sts$ for $sv$; it is in the parabolic by step 6.1, and the restriction argument of step 7.1 makes it an unforced skip of $(sv)_{S\setminus\{s\}}$. Since $s$ is a cover, $I(sv)=I(v)\setminus\{s\}$ and the two parabolic prefixes have equal inversion sets, hence $(sv)_{S\setminus\{s\}}=v_{S\setminus\{s\}}$. Equal cardinalities as in step 7.1 give $ufs_c(v)=\{sts:t\in ufs_{sc}(v_{S\setminus\{s\}})\}$. This proves all of (5). [step 2.1, step 1.2, step 1.4, step 2.7, step 6.1, step 6.2, step 7.1, F2, F6, F7]

9.1 Steps 1.1-2.2 prove (1),(2),(4); steps 1.4, 2.6 and 3.1 prove (3); steps 2.5 and 2.7-8.1 prove (5). All selections are individual witnesses from finite sets or fixed words, and no Choice is used. [step 1.1, step 1.2, step 2.1, step 2.2, step 1.4, step 2.6, step 3.1, step 2.5, step 2.7, step 4.1, step 5.1, step 6.1, step 6.2, step 7.1, step 8.1, discharge-induction] ∎

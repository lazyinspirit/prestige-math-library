---
id: "lem-cg-sortable-recursion-output-and-initial-choice-independence"
kind: "lemma"
title: "The recursive projection is well defined, sortable-valued, below w, idempotent, descent-detecting and parabolic"
status: published
origin: pipeline
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 23
deps:
  - lem-cg-weak-parabolic-projection-and-cover-joins
  - def-cg-sortable-element-skip-roots-and-cone
  - lem-cg-uniform-omega-positive-and-aligned-sortability
  - def-cg-initial-letter-sortable-projection
  - thm-cg-finite-parabolic-longest-element-and-opposition
  - def-cg-left-right-weak-order-and-descents
  - lem-cg-weak-order-is-a-graded-partial-order
  - lem-cg-weak-order-prefix-property-and-left-translation
  - lem-cg-coxeter-word-transport-and-form-independence
  - def-cg-geometric-inversion-set
  - thm-cg-root-sign-and-simple-reflection-positivity
  - thm-cg-parabolic-intersections-and-coset-factorization
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Lemma 6.6, pp. 32-33, and Propositions 6.7-6.10, pp. 33-34"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 3, p. 8 (Proposition 3.2 and its induction)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 2, sections 2.4-2.5 (parabolic structure and interval translation)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type, $c$ a Coxeter element with the recursive map $\pi_c$ of [[def-cg-initial-letter-sortable-projection]]. Then:

**(1) Well-definedness.** For every $w\in W$ the recursion defines the same element $\pi_c(w)$ for every choice of initial letters in the successive steps; hence $\pi_c$ is a well-defined map $W\to W$.

**(2) Output and comparison.** For every $w$, $\pi_c(w)$ is $c$-sortable and $\pi_c(w)\le_R w$ ([[def-cg-left-right-weak-order-and-descents]]), with equality if and only if $w$ is $c$-sortable.

**(3) Idempotence.** $\pi_c(\pi_c(w))=\pi_c(w)$ for every $w\in W$.

**(4) Descent detection.** If $s$ is initial in $c$, then $w\ge_R s$ if and only if $\pi_c(w)\ge_R s$.

**(5) Parabolic restriction.** If $J\subseteq S$, $w\in W_J$ and $c'$ is the restriction of $c$ to $W_J$, then $\pi_c(w)=\pi_{c'}(w)$.

**(6) The mixed identity.** For two distinct initial letters $s\ne s'$ of $c$ (which commute) and any $w$ with $w\not\ge_R s$, the parabolic prefixes satisfy $(sw)_{\langle s'\rangle}=s(w_{\langle s'\rangle})$, where $\langle s'\rangle=S\setminus\{s'\}$. This is the identity used in (1) when exactly one of the two initial letters is below $w$.

## Facts & Assumptions

**Given:** a Coxeter system $(W,S)$ of finite type, a Coxeter element $c$, the recursive map $\pi_c$ of [[def-cg-initial-letter-sortable-projection]], an initial letter $s$ of $c$, the parabolic $W_{\langle s\rangle}=W_{S\setminus\{s\}}$ with prefix map $x\mapsto x_{\langle s\rangle}$, the right weak order $\le_R$, and elements $w,x,y\in W$.

[F1] [[def-cg-initial-letter-sortable-projection]]: $\pi_c$ is defined by the three branches $\pi_c(1)=1$, $\pi_c(w)=s\cdot\pi_{scs}(sw)$ when $\ell(sw)<\ell(w)$, and $\pi_c(w)=\pi_{sc}(w_{\langle s\rangle})$ when $\ell(sw)>\ell(w)$; the recursion is well founded by the lexicographic measure (rank, length).

[F2] [[def-cg-sortable-element-skip-roots-and-cone]] (1): sortability means the sorting word has decreasing blocks, equivalently each letter has an initial segment of its occurrences selected.

[F3] [[lem-cg-weak-order-is-a-graded-partial-order]] (5) gives $s\le_Rw\iff\ell(sw)<\ell(w)$. By [[lem-cg-weak-order-prefix-property-and-left-translation]] (3), left multiplication by $s$ preserves and reflects order between two elements above $s$. It consequently does so between two elements not above $s$ as well: their left multiples are above $s$, and applying (3) to those multiples recovers the original pair. Multiplication by $s$ exchanges these two sets, since the simple length jump changes sign.

[F4] [[lem-cg-weak-parabolic-projection-and-cover-joins]] (1): for every $w$ and $J\subseteq S$ one has $N(w_J^{-1})=N(w^{-1})\cap\Phi_{J,+}$; $w_J$ is the greatest element of $W_J$ below $w$ in $\le_R$, the map $w\mapsto w_J$ is order preserving, and for $v\in W_J$ one has $v\le_Rw$ if and only if $v\le_Rw_J$.

[F5] [[def-cg-left-right-weak-order-and-descents]] (1),(2): $u\le_Rv$ if and only if $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$, and $D_L(w)=\{s:\ell(sw)<\ell(w)\}$.

[F6] [[lem-cg-weak-order-is-a-graded-partial-order]] (1),(4),(5): $\le_R$ is a partial order; $u\le_Rv$ if and only if $N(u^{-1})\subseteq N(v^{-1})$, and $s\in D_L(w)$ if and only if $e_s\in N(w^{-1})$.

[F7] [[def-cg-geometric-inversion-set]] (1),(2): $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$, and for $\ell(us)>\ell(u)$ one has $N(us)=\{e_s\}\sqcup\rho(s)N(u)$, while for $\ell(us)<\ell(u)$ one has $N(us)=\rho(s)(N(u)\setminus\{e_s\})$.

[F8] [[thm-cg-root-sign-and-simple-reflection-positivity]] (3): $\rho(s)$ permutes $\Phi_+\setminus\{e_s\}$ and sends $e_s$ to $-e_s$. Together with [F9], for $s\in J$ it permutes $\Phi_{J,+}\setminus\{e_s\}$ and sends the remaining root to $-e_s$.

[F9] [[thm-cg-parabolic-intersections-and-coset-factorization]] (1),(2): $W_I\cap W_J=W_{I\cap J}$ for all $I,J\subseteq S$, and $\rho(w)V_J=V_J$ for every $w\in W_J$, so $\Phi_J=\Phi\cap V_J$ is $W_J$-invariant.

[F10] [[lem-cg-coxeter-word-transport-and-form-independence]] (2),(3): the initial letters of $c$ pairwise commute, and any two reduced Coxeter words for $c$ are connected by transpositions of adjacent commuting letters.

[F11] [[lem-cg-uniform-omega-positive-and-aligned-sortability]] (3): if $u\in W_J$ is $c|_J$-sortable then $u$ is $c$-sortable in $W$, and the $W_J$-prefix of a $c$-sortable element is $c|_J$-sortable.


[F12] [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (1): the greedy scan computes the sorting word. [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1),(2): reduced-word support characterizes $W_J$, and intrinsic parabolic length agrees with ambient length.

## Proof

1.1 We prove clauses (1)-(6) simultaneously by induction on the lexicographic pair (rank $n=|S|$, length of the current element), and we establish clause (6) first because it is used in clause (1). By [F1] every recursive call of $\pi_c$ is made either at rank $n-1$ (the branch $\ell(sw)>\ell(w)$) or at the same rank and strictly smaller length (the branch $\ell(sw)<\ell(w)$), so the induction hypothesis applies to it; clause (5) is proved by the same measure. [F1, F5, given, induction]

1.2 Base case: for $w=1$ the first branch of [F1] gives $\pi_c(1)=1$ for every Coxeter element $c$. The element $1$ is $c$-sortable, and $\pi_c(1)=1\le_R1$ with equality, so (2) holds; (1) and (3) are immediate; $1\not\ge_Rs$ and $\pi_c(1)=1\not\ge_Rs$ for every $s\ne1$, giving (4); (5) gives $\pi_c(1)=1=\pi_{c'}(1)$; and (6) reads $(s\cdot1)_{\langle s'\rangle}=s=s\,(1_{\langle s'\rangle})$. [F1, base]

1.3 Induction hypothesis: assume (1)-(6) at all strictly smaller pairs; this covers $\pi_{scs}(sw)$ at length $\ell(w)-1$ and $\pi_{sc}(w_{\langle s\rangle})$ at rank $n-1$ in the two branches of [F1], and every application of (5) inside a smaller ambient system. [ih, F1, given]

1.4 Transport of inversion sets under multiplication on the left by an initial simple root: for all $x\in W$ and $s\in S$, if $\ell(sx)>\ell(x)$ then $N((sx)^{-1})=\{e_s\}\sqcup\rho(s)N(x^{-1})$, and if $\ell(sx)<\ell(x)$ then $N((sx)^{-1})=\rho(s)\bigl(N(x^{-1})\setminus\{e_s\}\bigr)$. Indeed $\ell(x^{-1}s)=\ell(sx)$ and $(sx)^{-1}=x^{-1}s$, so the two clauses are the recursion [F7](2) applied to $u=x^{-1}$. [F7, algebra]

1.5 Local sortability recursion. Put $J_s=S\setminus\{s\}$. If initial $s$ is a left descent, the greedy scan selects its first position and then scans $(scs)^\infty$ for $sw$; selected occurrences of each letter correspond after deleting this first $s$. The per-letter initial-segment condition therefore makes $w$ sortable exactly when $sw$ is $scs$-sortable. If $s$ is not a left descent, the first occurrence is omitted; sortability then forbids every later $s$, so $w\in W_{J_s}$. Conversely, for $w\in W_{J_s}$ every greedy remainder stays in $W_{J_s}$ and cannot have an outside left descent by support invariance; removing the $s$-positions gives the $sc$-scan with identical blocks. Thus in the non-descent branch $w$ is sortable exactly when it belongs to that parabolic and is $sc$-sortable. This proves the recursion used below from the local definitions and scan. [F2, F12, algebra]

2.1 Prefix identity (clause (6)): let $s\ne s'$ be distinct initial letters of $c$; they commute by [F10]. Put $J:=S\setminus\{s'\}$ and $U:=N(x^{-1})$ for $x\in W$. By the prefix inversion formula [F4](1), $N((sx)_J^{-1})=N((sx)^{-1})\cap\Phi_{J,+}$ and $N(x_J^{-1})=U\cap\Phi_{J,+}$. Since $s\in W_J$ and $s\ne s'$, the reflection $\rho(s)$ normalizes $W_J$ and permutes $\Phi_{J,+}\setminus\{e_s\}$ and sends $e_s$ to $-e_s$ [F8, F9], so intersecting the formulas of step 1.4 with $\Phi_{J,+}$ gives $N((sx)_J^{-1})=\rho(s)\bigl((U\setminus\{e_s\})\cap\Phi_{J,+}\bigr)$ when $e_s\in U$, and $N((sx)_J^{-1})=\rho(s)\bigl(U\cap\Phi_{J,+}\bigr)\cup\{e_s\}$ when $e_s\notin U$. Replacing $x$ by $x_J$ in step 1.4 and using $e_s\in N(x_J^{-1})\iff e_s\in U$ gives the identical two expressions for $N((s\cdot x_J)^{-1})$. Equal inversion sets force $sx_J=(sx)_J$ by the inversion criterion and antisymmetry [F6]. Taking $x=w$ with $w\not\ge_Rs$ yields clause (6). [step 1.4, F4, F6, F8, F9, algebra]

2.2 Choice independence when neither commuting initial letter $s,s\prime$ is below $w$. Put $J=S\setminus\{s\}$, $J\prime=S\setminus\{s\prime\}$ and $K=J\cap J\prime$. Since $w_J\le_Rw$, $s\prime\not\le_Rw_J$. The recursion in the smaller system $W_J$, choosing initial $s\prime$ after $s$, gives $\pi_{sc}(w_J)=\pi_{c|_K}((w_J)_K)$. The reverse order gives $\pi_{s\prime c}(w_{J\prime})=\pi_{c|_K}((w_{J\prime})_K)$. Both nested prefixes equal $w_K$, by their inversion sets [F4] and antisymmetry [F6]. The subsequent rank-smaller computation is independent by induction; both choices therefore agree. No membership of $w_J$ in $W_K$ is assumed. [step 1.3, F1, F4, F6, F10, ih, algebra]

2.3 Clause (2), branch $w\ge_Rs$: [F1] gives $\pi_c(w)=s\,\pi_{scs}(sw)$. By the induction hypothesis (2) at the shorter element $sw$, the element $\pi_{scs}(sw)$ is $scs$-sortable and satisfies $\pi_{scs}(sw)\le_Rsw$, with equality if and only if $sw$ is $scs$-sortable; moreover $\pi_{scs}(sw)\not\ge_Rs$ (otherwise $s\le_R\pi_{scs}(sw)\le_Rsw$ by transitivity [F6](1), contradicting $sw\not\ge_Rs$, which holds by [F3] because $\ell(s(sw))=\ell(w)>\ell(sw)$), and $sw\not\ge_Rs$ as well. By the poset isomorphism [F3] applied to $\pi_{scs}(sw)\le_Rsw$, the element $s\,\pi_{scs}(sw)$ satisfies $s\,\pi_{scs}(sw)\le_Rw$, with equality if and only if $\pi_{scs}(sw)=sw$. The sortability recursion of step 1.5 gives: $sw$ is $scs$-sortable if and only if $w$ is $c$-sortable (here $w\ge_Rs$, so the non-descent alternative of step 1.5 is excluded); and $s\,\pi_{scs}(sw)$ is $c$-sortable because it lies in $W_{\ge s}$ [F3] and its left multiple by $s$ is the $scs$-sortable element $\pi_{scs}(sw)$, so the descent alternative of step 1.5 applies. This proves (2) in this branch. [step 1.3, step 1.4, step 1.5, F1, F2, F3, F6, algebra]

2.4 Clause (2), branch $w\not\ge_Rs$: [F1] gives $\pi_c(w)=\pi_{sc}(w_{\langle s\rangle})$ with $w_{\langle s\rangle}\in W_{\langle s\rangle}$. Then $w_{\langle s\rangle}\not\ge_Rs$, since otherwise $s\le_Rw_{\langle s\rangle}\le_Rw$ by [F4](1). By the induction hypothesis (2) at smaller rank, $\pi_{sc}(w_{\langle s\rangle})$ is $sc$-sortable and $\pi_{sc}(w_{\langle s\rangle})\le_Rw_{\langle s\rangle}\le_Rw$ [F4], with equality if and only if $w_{\langle s\rangle}$ is $sc$-sortable; and $sc$-sortability of $\pi_{sc}(w_{\langle s\rangle})$ implies $c$-sortability by [F11]. Finally $w_{\langle s\rangle}=w$ if and only if $w\in W_{\langle s\rangle}$ [F4], so $\pi_c(w)=w$ if and only if $w_{\langle s\rangle}=w$ and $w_{\langle s\rangle}$ is $sc$-sortable, which by the sortability recursion of step 1.5 is exactly $c$-sortability of $w$ in this branch. [step 1.3, step 1.5, F1, F2, F4, F11, algebra]

2.5 Parabolic restriction. It suffices to delete one generator $r$ and then iterate. Let $w\in W_{S\setminus\{r\}}$ and choose initial $s$ in $c$. If $s=r$, the non-descent branch gives the assertion directly. If $s\ne r$ and $s\le_Rw$, then $sw$ remains in that parabolic; length induction identifies the projections for $scs$ and its restriction, and multiplying by $s$ proves the assertion. If $s\ne r$ and $s\not\le_Rw$, then $w_{S\setminus\{s\}}$ lies in $W_{S\setminus\{r,s\}}$: its inversion set is the intersection of $N(w^{-1})$ with that subsystem, so its prefix to this intersection is itself by [F4],[F6]. The rank induction inside $W_{S\setminus\{s\}}$ identifies its projection with the projection for the restricted Coxeter element. This is precisely the non-descent recursion inside $W_{S\setminus\{r\}}$. Thus (5) follows at strictly smaller rank or length. [step 1.3, F1, F4, F6, F10, ih, algebra]

2.6 Clause (1), case $w\ge_Rs$ and $w\ge_Rs'$: computing with $s$ first gives $s\,\pi_{scs}(sw)$; since $s'$ is initial in $scs$ and $sw\ge_Rs'$ because step 1.4 removes $e_s$ and fixes $e_{s'}$ under the commuting reflection $s$, [F1] turns this into $ss'\,\pi_{s'scss'}(s'sw)$. Computing with $s'$ first gives $s'\,\pi_{s'cs'}(s'w)=s's\,\pi_{ss'cs's}(ss'w)$ by the same two recursion steps. Since $s$ and $s'$ commute, $s's=ss'$, $s'sw=ss'w$ and $s'scss'=ss'cs's$ as elements; both computations are the same recursive call $\pi_Y(ss'w)$ for $Y=ss'css'$, whose common value is fixed by the induction hypothesis (1) at the shorter element $ss'w$. [step 1.3, step 1.4, F1, F6, F10, algebra]

3.1 Choice independence when $s\le_Rw$ and $s\prime\not\le_Rw$. The initial letters commute, so $\rho(s)e_{s\prime}=e_{s\prime}$. Step 1.4 therefore gives $e_{s\prime}\notin N((sw)^{-1})$, hence $s\prime\not\le_Rsw$. Choosing $s$ then $s\prime$ yields $s\pi_{s\prime scs}((sw)_{S\setminus\{s\prime\}})$. Choosing $s\prime$ first yields $\pi_{s\prime c}(w_{S\setminus\{s\prime\}})$; since this prefix is above $s$ by [F4], choosing $s$ next yields $s\pi_{ss\prime cs}(s w_{S\setminus\{s\prime\}})$. The prefix identity of step 2.1 holds in both descent cases and gives $(sw)_{S\setminus\{s\prime\}}=s w_{S\setminus\{s\prime\}}$. Commutation gives $s\prime scs=ss\prime cs$, so the two calls agree by smaller-rank induction. The mirror case is identical. [step 1.3, step 1.4, step 2.1, F1, F4, F6, F10, ih, algebra]

3.2 Clause (3): by clause (2), $\pi_c(w)$ is $c$-sortable, so the equality case of clause (2) applied to the element $\pi_c(w)$ gives $\pi_c(\pi_c(w))=\pi_c(w)$. [step 2.3, step 2.4, F1]

3.3 Clause (4): if $w\not\ge_Rs$ then by (2) and step 2.4 $\pi_c(w)\le_Rw_{\langle s\rangle}\not\ge_Rs$, so $\pi_c(w)\not\ge_Rs$ by transitivity [F6](1). If $w\ge_Rs$ then $sw\not\ge_Rs$ by [F3], so $\pi_{scs}(sw)\not\ge_Rs$ by (2) applied to $sw$, and the isomorphism [F3] places $s\,\pi_{scs}(sw)=\pi_c(w)$ in $W_{\ge s}$. [step 2.3, step 2.4, F1, F3, F6, algebra]

4.1 Clause (1) is proved: the base case, the case of a single initial letter (no choice is made), and the three cases 2.2, 3.1 and 2.6 for two distinct initial letters cover every possibility, so the value of the recursion does not depend on the initial-letter choices. [step 1.2, step 1.3, step 2.2, step 3.1, step 2.6, discharge-induction]

5.1 Clause (6) is step 2.1, so all of (1)-(6) hold and the induction is discharged. [step 2.1, step 4.1, step 2.3, step 2.4, step 3.2, step 3.3, step 2.5, discharge-induction] ∎

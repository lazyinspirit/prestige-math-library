---
id: thm-cg-sortable-projection-greatest-element-and-interval-fibers
kind: theorem
title: The upper endpoint of a c-Cambrian fiber, interval fibers and the explicit formula u_c(w) = pi_{c^{-1}}(ww0)w0
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 29
deps:
  - def-cg-recursive-sortable-projection-and-cambrian-congruence
  - thm-cg-sortable-meet-join-closure-and-cambrian-quotient
  - lem-cg-lattice-quotient-descent-and-class-intervals
  - thm-cg-finite-lattice-interval-congruence-criterion
  - lem-cg-weak-parabolic-projection-and-cover-joins
  - thm-cg-finite-parabolic-longest-element-and-opposition
  - lem-cg-sortable-skips-basis-and-cover-decomposition
  - lem-cg-sortable-recursion-output-and-initial-choice-independence
  - lem-cg-uniform-omega-positive-and-aligned-sortability
  - lem-cg-sortable-cone-criterion-and-projection-monotonicity
  - thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions
  - def-cg-initial-letter-sortable-projection
  - def-cg-sortable-element-skip-roots-and-cone
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - def-cg-geometric-inversion-set
  - def-cg-left-right-weak-order-and-descents
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
  - lem-cg-weak-order-is-a-graded-partial-order
  - def-cg-finite-lattice-congruence-and-interval-projections
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "Section 2, pp. 5-6, parabolic-prefix compatibility with w ↦ ww0; Section 3, Proposition 3.1, Lemmas 3.5 and 3.6, Proposition 3.7 with proof, and the proof of Theorem 1.1 (printed pp. 7-11)"
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Section 7, Theorems 7.1 and 7.3 with proofs (printed pp. 38-40), checked for the direct meet/join supplier; the upper-projection argument here follows Reading's Section 3"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 2, Section 2.3, Proposition 2.3.2 and Corollary 2.3.3 on w0 and order reversal; Section 2.4, Proposition 2.4.4 and Corollary 2.4.5 on parabolic prefixes; Chapter 3, Proposition 3.1.5 and Sections 3.1-3.2 on weak order and finite lattices"
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type with longest element $w_0$, let $c$ be a Coxeter element, $\pi_c$ the sortable projection, $\sim_c$ the sortable equivalence and $W/{\sim_c}$ the sortable quotient of [[def-cg-recursive-sortable-projection-and-cambrian-congruence]], and let $\wedge,\vee$ be the weak-order lattice operations on $W$ ([[thm-cg-weak-order-meet-semilattice-and-finite-lattice]]). For $J\subseteq S$ write $w_J$ for the $W_J$-prefix and $ {}^{J}w_0:=w_0(J)w_0$ for the minimal representative of $W_Jw_0$ ([[lem-cg-weak-parabolic-projection-and-cover-joins]] (2)). Define the **upper projection** of $c$ by
$$u_c\colon W\to W,\qquad u_c(w):=\pi_{c^{-1}}(ww_0)\,w_0,$$
where $c^{-1}$ is the Coxeter element inverse to $c$, with the reversed reduced word, and $\pi_{c^{-1}}$ its sortable projection ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (1), [[def-cg-initial-letter-sortable-projection]]). Whenever a recursion is indexed by a Coxeter element of a standard parabolic, its projections are formed there; in particular, $u_{sc}$ in (1)(iii) is formed on $W_J$ with longest element $w_0(J)$. Then:

**(1) The terminal formula for $\pi_c$ and the recursions for $u_c$.** Let $s\in S$ and $J:=S\setminus\{s\}$.
(i) If $s$ is final in $c$ and $\ell(sw)<\ell(w)$, then $\pi_c(w)=s\vee\pi_{cs}(w_J)$, where $cs$ is the restriction of $c$ to $W_J$ obtained by deleting the final letter.
(ii) If $s$ is final in $c$ and $\ell(sw)>\ell(w)$, then $u_c(w)=s\cdot u_{scs}(sw)$.
(iii) If $s$ is initial in $c$ and $\ell(sw)>\ell(w)$, then $u_c(w)=sw_0\wedge\bigl(u_{sc}(w_J)\cdot{}^{J}w_0\bigr)$.

**(2) Monotonicity and idempotence of $u_c$.** The map $u_c$ is order preserving and idempotent, and $w\le_Ru_c(w)$ for every $w\in W$.

**(3) Fibers are closed intervals with these endpoints.** For all $x,y\in W$,
$$\pi_c(x)=\pi_c(y)\iff u_c(x)=u_c(y),\qquad \pi_c(u_c(w))=\pi_c(w),\qquad u_c(\pi_c(w))=u_c(w).$$
Consequently every $\sim_c$-fiber is the closed interval
$$[w]_c=\{y\in W:\pi_c(w)\le_Ry\le_Ru_c(w)\}$$
with lower endpoint $\pi_c(w)$ and upper endpoint $u_c(w)$: no fiber has a gap, both endpoint maps are order preserving, and by the interval criterion [[thm-cg-finite-lattice-interval-congruence-criterion]] the equivalence $\sim_c$ is recovered from the two monotone endpoint maps as a lattice congruence — the same congruence of [[thm-cg-sortable-meet-join-closure-and-cambrian-quotient]] (4), now with its classes exhibited as the fibers.

**(4) Abstention.** The quotient is still not identified with the least lattice congruence contracting the oriented rank-two pairs of $c$, and no noncrossing, cluster-fan or counting statement is made. No Choice is used.

## Facts & Assumptions

**Given:** a finite-type Coxeter system $(W,S)$, its longest element $w_0$, a Coxeter element $c$, its inverse $c^{-1}$ represented by the reversed reduced word, the sortable projections $\pi_c$ and $\pi_{c^{-1}}$, the right weak order $\le_R$, and the parabolic prefixes and longest elements.

[F1] [[def-cg-recursive-sortable-projection-and-cambrian-congruence]] (1)-(2) and [[def-cg-finite-lattice-congruence-and-interval-projections]] (1): $\sim_c$ is the kernel relation $x\sim_c y\iff \pi_c(x)=\pi_c(y)$; $W/{\sim_c}$, $p_c$, its quotient order and the proposed class meet/join operations are defined there.

[F2] [[def-cg-initial-letter-sortable-projection]]: if $s$ is initial in $c$, then $\pi_c(w)=s\pi_{scs}(sw)$ when $\ell(sw)<\ell(w)$ and $\pi_c(w)=\pi_{sc}(w_J)$ when $\ell(sw)>\ell(w)$, with $J=S\setminus\{s\}$ and $w_J$ the $W_J$-prefix; the inverse Coxeter element uses the reversed word.

[F3] [[def-cg-sortable-element-skip-roots-and-cone]] (1) and [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]: a one-letter simple generator is $c$-sortable because its sorting word lies in the first block of $c^\infty$.

[F4] [[lem-cg-weak-parabolic-projection-and-cover-joins]] (1)-(3): $N(w_J^{-1})=N(w^{-1})\cap\Phi_{J,+}$; $w_J$ is the greatest $W_J$-element below $w$ and prefix projection is order-preserving; the prefix projection preserves joins; and its largest lift is $z w_0(J)w_0$.

[F5] [[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(i)-(v): $w_0^2=1$, $\rho(w_0)\Phi_+=\Phi_-$, $N(w_0v)=\Phi_+\setminus N(v)$, $\ell(w_0w)=\ell(ww_0)=\ell(w_0)-\ell(w)$, and conjugation by $w_0$ permutes $S$.

[F6] [[def-cg-left-right-weak-order-and-descents]] (1),(3) and [[lem-cg-weak-order-is-a-graded-partial-order]] (2),(4)-(5): $x\le_Ry$ means $y=xv$ with additive length; a simple left multiplication changes length by $1$ or $-1$; $s\le_Rw$ iff $\ell(sw)<\ell(w)$; and $x\le_Ry$ iff $N(x^{-1})\subseteq N(y^{-1})$.

[F7] [[def-cg-geometric-inversion-set]] (1)-(2): $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$, with the positive and negative root partition and the inversion-set convention used in the proof.

[F8] [[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (2): $W$ is finite and its right weak order is a lattice.

[F9] [[lem-cg-sortable-recursion-output-and-initial-choice-independence]] (1)-(4): $\pi_c(w)$ is well-defined, $c$-sortable and below $w$; it fixes sortable elements and is idempotent; and for an initial letter $s$, $w\ge_Rs$ iff $\pi_c(w)\ge_Rs$.

[F10] [[lem-cg-uniform-omega-positive-and-aligned-sortability]] (3): if $v$ is $c$-sortable, its $W_J$-prefix is sortable for the restricted Coxeter element on $W_J$; conversely a sortable element of $W_J$ is $c$-sortable in $W$.

[F11] [[thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions]] (1): $\pi_c(w)$ is the unique greatest $c$-sortable element below $w$.

[F12] [[lem-cg-sortable-skips-basis-and-cover-decomposition]] (5)(ii): if $s$ is final in $c$ and $v$ is $c$-sortable with $v\ge_Rs$, then $v=s\vee v_J$.

[F13] [[lem-cg-sortable-cone-criterion-and-projection-monotonicity]] (2): $\pi_c$ is order-preserving; the same holds for any Coxeter element of a finite parabolic subsystem.

[F14] [[thm-cg-sortable-meet-join-closure-and-cambrian-quotient]] (2): $c$-sortable elements are closed under nonempty joins, and their joins are $c$-sortable.

[F15] [[lem-cg-lattice-quotient-descent-and-class-intervals]] (iii): for a finite lattice congruence, the proposed quotient operations are representative-independent and the quotient map preserves meet and join.

[F16] [[thm-cg-finite-lattice-interval-congruence-criterion]] (i)-(ii): for an equivalence relation on a finite lattice whose classes are intervals, the relation is a congruence if and only if its lower and upper endpoint maps are order-preserving.

[F17] [[thm-cg-finite-parabolic-longest-element-and-opposition]] (2), applied to $W_J$: $w_0(J)$ is the longest element of the finite parabolic $W_J$ and is an involution; applying the opposition assertion of [F5] within $W_J$ gives $N(w_0(J)v)=\Phi_{J,+}\setminus N(v)$ for $v\in W_J$.

[F18] [[thm-cg-sortable-meet-join-closure-and-cambrian-quotient]] (4): the kernel relation $\sim_c$ is a lattice congruence with the quotient operations and quotient map already defined in [[def-cg-recursive-sortable-projection-and-cambrian-congruence]].

## Proof

**Proof technique:** derive the upper-projection recursions from the terminal projection formula and the longest-element anti-isomorphism; compare fibers by induction on rank and length; then identify each fiber as an interval and apply the finite-lattice interval criterion.

1.1 Fix $J=S\setminus\{s\}$ and let $w=w_J\cdot{}^Jw$ be the length-additive parabolic factorization. The prefix inversion formula in [F4] and opposition in [F5] give $N(((ww_0)_J)^{-1})=N((ww_0)^{-1})\cap\Phi_{J,+}=N(w_0w^{-1})\cap\Phi_{J,+}=\Phi_{J,+}\setminus\bigl(N(w^{-1})\cap\Phi_{J,+}\bigr)=\Phi_{J,+}\setminus N(w_J^{-1})$. Applying opposition inside $W_J$ gives $N(w_0(J)w_J^{-1})=\Phi_{J,+}\setminus N(w_J^{-1})=N((w_Jw_0(J))^{-1})$. Both $(ww_0)_J$ and $w_Jw_0(J)$ lie in $W_J$, so equality of their inverse inversion sets gives equality of the elements by the order criterion and antisymmetry in [F6]. Hence $(ww_0)_J=w_Jw_0(J)$. [F4, F5, F6, F7, F17, given, algebra]

1.2 Suppose $s$ is final in $c$ and $\ell(sw)<\ell(w)$; set $q:=\pi_c(w)$ and $v:=\pi_{cs}(w_J)$. By [F3] and [F10], both $s$ and $v$ are $c$-sortable and lie below $w$, since $s\le_Rw$ and $v\le_Rw_J\le_Rw$. Their join $x:=s\vee v$ is $c$-sortable by [F14] and below $w$, so $x\le_Rq$ by [F11]. Thus $q\ge_Rs$; the terminal cover decomposition [F12] gives $q=s\vee q_J$. The prefix $q_J$ is $cs$-sortable by [F10] and $q_J\le_Rw_J$ by [F4], hence $q_J\le_Rv$ by [F11] applied inside $W_J$. Therefore $q=s\vee q_J\le_Rs\vee v=x$, and with $x\le_Rq$ this proves $\pi_c(w)=s\vee\pi_{cs}(w_J)$. [F3, F4, F10, F11, F12, F14, given, algebra]

1.3 We prove by lexicographic induction on $(|S|,\ell(x))$ that whenever $x\le_Ry$ and $\pi_c(x)=\pi_c(y)$, one has $u_c(x)=u_c(y)$. If $S=\emptyset$, then $W=\{1\}$ and this holds; at every positive-rank pair assume it holds for all smaller measures, and fix an initial letter $s$ of $c$. [base, ih]

1.4 Define $\tau(w):=ww_0$, so $u_c=\tau\circ\pi_{c^{-1}}\circ\tau$. The map $\tau$ reverses right weak order: if $y=xv$ with additive length, then $xw_0=yw_0\,(w_0v^{-1}w_0)$ and $\ell(w_0v^{-1}w_0)=\ell(v)$ by [F5], so $yw_0\le_Rxw_0$ by [F6]; since $\tau^2$ is the identity, this is an order anti-isomorphism. Therefore $u_c$ is order-preserving by [F13]. Since $\pi_{c^{-1}}(ww_0)\le_Rww_0$ by [F9], applying $\tau$ gives $w\le_Ru_c(w)$. Finally, $u_c(u_c(w))=\tau(\pi_{c^{-1}}(\pi_{c^{-1}}(ww_0)))=\tau(\pi_{c^{-1}}(ww_0))=u_c(w)$ by idempotence in [F9]. [F5, F6, F9, F13, given, algebra]

2.1 If $s$ is final in $c$ and $\ell(sw)>\ell(w)$, then $s$ is initial in $c^{-1}$ and $\ell(sww_0)<\ell(ww_0)$ by [F5]. The initial-letter recursion [F2] gives $\pi_{c^{-1}}(ww_0)=s\pi_{(scs)^{-1}}((sw)w_0)$, so $u_c(w)=s\,u_{scs}(sw)$, proving (1)(ii). If $s$ is initial in $c$ and $\ell(sw)>\ell(w)$, then $s$ is final in $c^{-1}$ and $\ell(sww_0)<\ell(ww_0)$; apply step 1.2 to $c^{-1}$ and $ww_0$ to get $\pi_{c^{-1}}(ww_0)=s\vee\pi_{(sc)^{-1}}((ww_0)_J)$. Multiplying on the right by $w_0$ converts the join to a meet by the order reversal in step 1.4; using $(ww_0)_J=w_Jw_0(J)$ from step 1.1 and $w_0(J)^2=1$ gives $u_c(w)=sw_0\wedge\bigl(\pi_{(sc)^{-1}}(w_Jw_0(J))w_0\bigr)=sw_0\wedge\bigl(u_{sc}(w_J)\,{}^Jw_0\bigr)$, where $u_{sc}$ is formed inside $W_J$ with longest element $w_0(J)$ and ${}^Jw_0=w_0(J)w_0$. This proves (1)(iii). [F2, F5, F6, F8, F17, step 1.1, step 1.2, step 1.4, given, algebra]

3.1 Continue the induction of step 1.3. Suppose $x\le_Ry$ and $\pi_c(x)=\pi_c(y)$. If $\ell(sx)<\ell(x)$, then $\ell(sy)<\ell(y)$ because $s\le_Rx\le_Ry$ by [F6]. Write $y=xv$ with additive length. Then $sy=(sx)v$ and $\ell(sy)=\ell(sx)+\ell(v)$, so $sx\le_Rsy$. The recursion [F2] gives $\pi_{scs}(sx)=\pi_{scs}(sy)$; since $\ell(sx)=\ell(x)-1$, the induction hypothesis yields $u_{scs}(sx)=u_{scs}(sy)$. In $scs$, the letter $s$ is final and $sx,sy$ have left ascent $s$, so step 2.1(ii) gives $u_{scs}(sx)=s u_c(x)$ and $u_{scs}(sy)=s u_c(y)$; cancellation proves $u_c(x)=u_c(y)$. If instead $\ell(sx)>\ell(x)$ but $\ell(sy)<\ell(y)$, then $\pi_c(x)=\pi_{sc}(x_J)\le_Rx$ lies outside the filter above $s$, while $\pi_c(y)=s\pi_{scs}(sy)$ lies in that filter: indeed $sy\not\ge_Rs$, and $\pi_{scs}(sy)\le_Rsy$ by [F9], so left multiplication by $s$ lengthens this projection by one. This contradicts $\pi_c(x)=\pi_c(y)$. Thus both are left ascents. The parabolic prefix is order-preserving by [F4], so $x_J\le_Ry_J$; the recursion gives $\pi_{sc}(x_J)=\pi_{sc}(y_J)$, and the induction hypothesis in lower rank gives $u_{sc}(x_J)=u_{sc}(y_J)$. Formula 2.1(iii), with the same $sw_0$ and ${}^Jw_0$ for both inputs, now yields $u_c(x)=u_c(y)$. This completes the comparable-pair induction. [F2, F4, F6, F9, step 1.3, step 2.1, given, algebra]

4.1 For arbitrary $x,y$ with $\pi_c(x)=\pi_c(y)=v$, [F9] gives $v\le_Rx,y$ and $\pi_c(v)=v$. Applying the comparable-pair result of step 3.1 to $(v,x)$ and $(v,y)$ gives $u_c(x)=u_c(v)=u_c(y)$. Conversely, if $u_c(x)=u_c(y)$, then $\pi_{c^{-1}}(xw_0)=\pi_{c^{-1}}(yw_0)$ by the definition of $u_c$; the forward implication just proved for arbitrary pairs, applied to $c^{-1}$, gives $u_{c^{-1}}(xw_0)=u_{c^{-1}}(yw_0)$. By definition these are $\pi_c(x)w_0$ and $\pi_c(y)w_0$, so $\pi_c(x)=\pi_c(y)$. Thus the two fiber partitions agree. The forward implication and idempotence of $\pi_c$ also give $u_c(\pi_c(w))=u_c(w)$. Applying this identity to $c^{-1}$ and using $u_c(w)w_0=\pi_{c^{-1}}(ww_0)$ yields $\pi_c(u_c(w))w_0=u_{c^{-1}}(u_c(w)w_0)=u_{c^{-1}}(\pi_{c^{-1}}(ww_0))=u_{c^{-1}}(ww_0)=\pi_c(w)w_0$, so $\pi_c(u_c(w))=\pi_c(w)$. [F5, F9, step 3.1, step 1.4, given, algebra]

5.1 If $y\in[x]_c$, then $\pi_c(y)=\pi_c(x)$, so step 4.1 gives $u_c(y)=u_c(x)$; by [F9] and step 1.4, $\pi_c(x)=\pi_c(y)\le_Ry\le_Ru_c(y)=u_c(x)$. Conversely, if $\pi_c(x)\le_Ry\le_Ru_c(x)$, monotonicity [F13] and step 4.1 give $\pi_c(x)=\pi_c(\pi_c(x))\le_R\pi_c(y)\le_R\pi_c(u_c(x))=\pi_c(x)$, so $\pi_c(y)=\pi_c(x)$. Thus $[x]_c=[\pi_c(x),u_c(x)]$ with the asserted endpoints; the endpoint maps are order-preserving by [F13] and step 1.4. [F9, F13, step 1.4, step 4.1, given, algebra]

6.1 The classes are intervals by step 5.1, and their endpoint maps are order-preserving there; applying [F16] shows that $\sim_c$ is a lattice congruence. It is the same kernel relation and quotient as in [F1] and the congruence conclusion of [F18], not an identification with a different least-contraction congruence. The finite quotient consequences of [F15] give the representative-independent class operations and the lattice-homomorphic quotient map. All inductions are finite and no Choice is used. [F1, F15, F16, F18, step 5.1, discharge-induction, given, algebra] ∎

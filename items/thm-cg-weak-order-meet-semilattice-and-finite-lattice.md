---
id: thm-cg-weak-order-meet-semilattice-and-finite-lattice
kind: theorem
title: "Weak order is a meet-semilattice, finite Coxeter groups are lattices, and joins of simple reflections exist exactly for finite parabolics"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 18
deps:
  - def-cg-left-right-weak-order-and-descents
  - lem-cg-weak-order-is-a-graded-partial-order
  - lem-cg-bounded-weak-order-join-construction
  - lem-cg-full-descent-element-characterizes-finite-type
  - def-hh-coxeter-matrix-word-group-and-length
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - thm-cg-finite-parabolic-longest-element-and-opposition
  - def-cg-parabolic-quotient-and-two-sided-minima
  - lem-hh-dihedral-root-recurrence-and-root-sign
  - def-lattice-distributive-lattice-and-order-ideal
justified_by: []
proof_strategy: "meets from the join-construction lemma; joins from boundedness; parabolic joins via the full-descent criterion"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Theorem 3.2.1 and Lemma 3.2.3 with proofs, printed pp. 70-72, and Figure 3.1, printed p. 66 (weak order of the infinite dihedral group)"
    - title: "Nathan Reading and David E. Speyer, Cambrian fans (J. Eur. Math. Soc. 11 (2009) 407-447; arXiv:math/0606201v2)"
      url: "https://arxiv.org/pdf/math/0606201v2"
      locator: "Section 2, arXiv p. 6 (the weak order is a lattice when the Coxeter group is finite)"
---

## Statement

Let $(S,m)$ be a finite Coxeter matrix and $W$ the presented group with length
$\ell$, descent sets $D_L,D_R$ and weak orders $\le_R,\le_L$ as in
[[def-cg-left-right-weak-order-and-descents]]. Then:

**(1) Complete meet-semilattice and bounded joins.** In $(W,\le_R)$ every
nonempty subset has a meet; a nonempty subset has a join if and only if it is
bounded above, in which case its join is the meet of its nonempty set of upper
bounds. The same statements hold in $(W,\le_L)$.

**(2) Finite Coxeter groups are lattices.** If $W$ is finite, then
$(W,\le_R)$ and $(W,\le_L)$ are lattices with minimum $1$ and maximum $w_0$;
that is, every subset of $W$ has a meet and a join, and for the empty subset

$$\bigwedge\varnothing=w_0,\qquad \bigvee\varnothing=1.$$

Moreover $w\le_R w_0$ for every $w\in W$.

**(3) Joins of sets of simple reflections.** Let $J\subseteq S$ and let
$W_J=\langle s:s\in J\rangle$ be the standard parabolic subgroup. The
following are equivalent:

(a) $W_J$ is finite;

(b) $J$ has an upper bound in $\le_R$ (equivalently, in $\le_L$);

(c) the join $\bigvee J$ of the set $J$ exists in $\le_R$ (equivalently, in
$\le_L$).

If these hold, then $\bigvee J=w_0(J)$, the longest element of the finite
parabolic $W_J$, in both orders; and every upper bound $w$ of $J$ satisfies
$w_0(J)\le_R w$. In particular, if $W_J$ is infinite then the set $J$ has no
upper bound in either order. For $J=\varnothing$, these conditions hold and
$w_0(\varnothing)=1$.

**(4) The infinite dihedral obstruction.** Let $S=\{s,t\}$ with $s\ne t$
and $m(s,t)=\infty$, so that $W$ is the infinite dihedral group. Then $st$ has
infinite order and the powers $(st)^k$ ($k\in\mathbb Z$) are pairwise
distinct, so $W_{\{s,t\}}=W$ is infinite; consequently the set $\{s,t\}$ has
no upper bound in $\le_R$ or $\le_L$, and its join does not exist in either
order. The elements $s$ and $t$ are incomparable in both orders. No completeness or
lattice property beyond (1) is claimed for infinite $W$.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$ with presented group $W$, length function $\ell$, descent sets $D_L,D_R$ and weak orders $\le_R,\le_L$ as in [[def-cg-left-right-weak-order-and-descents]]; subsets $A\subseteq W$, $J\subseteq S$, and elements $u,w\in W$ and $s,t\in S$ as specified in each clause.

[F1] [[def-cg-left-right-weak-order-and-descents]] (1): $u\le_R v$ iff $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$.

[F2] [[lem-cg-weak-order-is-a-graded-partial-order]] (1): both weak orders are partial orders with minimum $1$, and inversion is an order isomorphism $(W,\le_R)\to(W,\le_L)$.

[F3] [[lem-cg-bounded-weak-order-join-construction]] (2): every nonempty subset $A\subseteq W$ has a meet.

[F4] [[lem-cg-bounded-weak-order-join-construction]] (3): if a nonempty subset $A\subseteq W$ is bounded above, then $\bigvee A=\bigwedge U(A)$; the analogous statements hold in $\le_L$ by inversion.

[F5] [[lem-cg-full-descent-element-characterizes-finite-type]] (2): if $w\in W_J$ satisfies $\ell(sw)<\ell(w)$ for every $s\in J$, then $W_J$ is finite and $w=w_0(J)$ is its longest element.

[F6] [[def-hh-coxeter-matrix-word-group-and-length]]: $\ell(w)$ is the minimum length of a word in $S$ representing $w$, so $\ell(1)=0$ and $\ell(x)=0$ implies $x=1$.

[F7] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3): every $w\in W$ has a unique factorization $w=u d$ with $u\in W_J$, $d\in{}^JW$, and $\ell(vd)=\ell(v)+\ell(d)$ for every $v\in W_J$.

[F8] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3): $\ell(y)=\ell(y^{-1})$ for every $y\in W$.

[F9] [[def-cg-parabolic-quotient-and-two-sided-minima]] (1): $W_J=\langle s:s\in J\rangle$ is the standard parabolic subgroup.

[F10] [[def-cg-parabolic-quotient-and-two-sided-minima]] (2): $D_L(w)=\{s\in S:\ell(sw)<\ell(w)\}$.

[F11] [[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(iii): for finite $W$, $\ell(ww_0)=\ell(w_0)-\ell(w)$ for every $w\in W$.

[F12] [[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(iv): for finite $W$, $w_0^2=1$.

[F13] [[thm-cg-finite-parabolic-longest-element-and-opposition]] (2): if $W_J$ is finite, then $w_0(J)^2=1$ and $\ell(u w_0(J))=\ell(w_0(J))-\ell(u)$ for every $u\in W_J$.

[F14] [[lem-hh-dihedral-root-recurrence-and-root-sign]] (1): $\ell(s)=1$ for every $s\in S$.

[F15] [[lem-hh-dihedral-root-recurrence-and-root-sign]] (4): for distinct $s,t\in S$, one has $s\ne t$ in $W$ and $st$ has order exactly $m(s,t)$ in $W$, infinite when $m(s,t)=\infty$.

[F16] [[def-lattice-distributive-lattice-and-order-ideal]]: a lattice is a poset in which every pair has a greatest lower bound and a least upper bound.

[F17] [[def-hh-coxeter-matrix-word-group-and-length]]: the presented group has relator set $R=\{s^2:s\in S\}\cup\{(st)^{m(s,t)}:s,t\in S,\ m(s,t)<\infty\}$; when $S=\{s,t\}$ and $m(s,t)=\infty$, its presentation is $\langle s,t\mid s^2=t^2=1\rangle$.

[F18] [[def-cg-left-right-weak-order-and-descents]] (3): a right join of $A$ is an upper bound of $A$ that lies below every right upper bound of $A$.

[F19] [[lem-cg-bounded-weak-order-join-construction]] (3): no Axiom of Choice is used; its proof makes only finitely many choices in the finite recursion of (2).

[F20] [[def-cg-left-right-weak-order-and-descents]] (3): left joins are defined by replacing $\le_R$ with $\le_L$ in the upper-bound and join definitions.

[F21] [[def-cg-left-right-weak-order-and-descents]] (1): $u\le_L v$ iff $v=xu$ with $\ell(v)=\ell(u)+\ell(x)$.

[F22] [[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(iii): when $W$ is finite, it has a longest element $w_0$, unique among elements of maximum length.

[F23] [[thm-cg-finite-parabolic-longest-element-and-opposition]] (2): when $W_J$ is finite, it has a unique longest element $w_0(J)$.

## Proof

1.1 Clause (1): the complete meet-semilattice and bounded-join assertions in $\le_R$ are exactly [F3] and [F4]. Inversion is an order isomorphism by [F2], so for every nonempty $A\subseteq W$ it transports meets of $A^{-1}:=\{a^{-1}:a\in A\}$ to meets of $A$ in $\le_L$, and transports existence and values of joins in the same way. Thus clause (1) holds in both orders. [F2, F3, F4, given, algebra]

1.2 Clause (2): assume $W$ is finite, with longest element $w_0$ from [F22]. For every $w\in W$, applying [F11] to $w^{-1}$ and using [F8] gives $\ell(w^{-1}w_0)=\ell(w_0)-\ell(w^{-1})=\ell(w_0)-\ell(w)$; hence $w_0=w(w^{-1}w_0)$ is length-additive, so $w\le_R w_0$ by [F1]. Applying this to $w^{-1}$ and then using inversion and $w_0^{-1}=w_0$ from [F12] shows $w\le_L w_0$ as well. Thus $w_0$ is a maximum in both orders, and [F2] gives their minimum $1$. Every nonempty $A\subseteq W$ is bounded above by $w_0$, so [F3] and [F4] give its join and meet in each order. For $A=\varnothing$, every element is both an upper and a lower bound, so the maximum and minimum give $\bigwedge\varnothing=w_0$ and $\bigvee\varnothing=1$ in both orders by [F18] and [F20]. The two orders are lattices by [F16]. [F1, F2, F3, F4, F8, F11, F12, F16, F18, F20, F22, given, algebra]

1.3 Clause (3), $(a)\Rightarrow(b)$, and minimality of $w_0(J)$: if $J=\varnothing$, then $W_J=\{1\}$ and $w_0(J)=1$, which is an upper bound of $J$ and lies below every $w\in W$. Now assume $J\ne\varnothing$ and $W_J$ is finite, with longest element $w_0(J)$ from [F23]. For each $s\in J$, [F13] and [F14] give $\ell(sw_0(J))=\ell((sw_0(J))^{-1})=\ell(w_0(J)s)=\ell(w_0(J))-\ell(s)=\ell(w_0(J))-1$, using $w_0(J)^2=1$ from [F13], $s^2=1$ from [F17], and length invariance under inversion from [F8]. Thus $w_0(J)=s(sw_0(J))$ is length-additive, so $s\le_R w_0(J)$ by [F1] and $w_0(J)$ is an upper bound of $J$. To prove that boundedness forces finiteness and minimality, let $w$ be any upper bound of $J$, with no finiteness assumption on $W_J$. For each $s\in J$, [F1] gives $w=sx$ with $\ell(w)=\ell(s)+\ell(x)$; [F17] gives $x=sw$, so [F14] implies $\ell(sw)=\ell(w)-1$ and [F10] gives $s\in D_L(w)$. Factor $w=w_Jd$ uniquely as in [F7], with $w_J\in W_J$, $d\in{}^JW$, and $\ell(vd)=\ell(v)+\ell(d)$ for every $v\in W_J$. Then $sw_J\in W_J$ and
$\ell(sw_J)+\ell(d)=\ell(sw_Jd)=\ell(sw)<\ell(w)=\ell(w_J)+\ell(d)$,
so $\ell(sw_J)<\ell(w_J)$ for every $s\in J$. By [F5], $W_J$ is finite and $w_J=w_0(J)$. Hence $w=w_0(J)d$ is length-additive, so $w_0(J)\le_R w$ by [F1]: it lies below every upper bound of $J$, and boundedness of $J$ forces $W_J$ finite. [F1, F5, F7, F8, F9, F10, F13, F14, F17, F23, given, algebra]

2.1 Clause (3) and the join value: if $J=\varnothing$, then $\bigvee J=1=w_0(J)$ because $1$ is the minimum in both orders, and conditions (a)–(c) all hold. Suppose $J\ne\varnothing$. If $J$ has an upper bound, step 1.3 gives that $W_J$ is finite and that $w_0(J)$ is an upper bound below every upper bound. By [F4], the join exists and is the meet of the nonempty set $U(J)$ of upper bounds; therefore $\bigvee J=w_0(J)$. Conversely, if $W_J$ is finite then step 1.3 supplies an upper bound, and if the join exists then it is itself an upper bound by [F18]. This proves the equivalence and join value in $\le_R$; if $W_J$ is infinite, the equivalence shows that $J$ has no upper bound and no join. [F4, F18, step 1.3, given, algebra]

3.1 The left-order half of clauses (1) and (3): inversion is an order isomorphism by [F2]. By [F17], each $s\in S$ is an involution, so inversion fixes $J$ pointwise and transports its upper bounds, joins and boundedness in one order to those in the other. By [F13], $w_0(J)^{-1}=w_0(J)$, so the join value in the left order is also $w_0(J)$. [F2, F13, F17, step 1.1, step 2.1, given, algebra]

4.1 Clause (4): let $S=\{s,t\}$ with $s\ne t$ and $m(s,t)=\infty$. By [F17], the Coxeter presentation here is $\langle s,t\mid s^2=t^2=1\rangle$, the standard infinite dihedral presentation. By [F15], $st$ has infinite order; if $(st)^i=(st)^j$ for integers $i\ne j$, then $(st)^{i-j}=1$, a contradiction, so these powers are pairwise distinct and $W$ is infinite. Since $W_{\{s,t\}}=W$, clause (3) shows $\{s,t\}$ has no upper bound in either weak order; consequently it has no join in either order by [F18] and [F20]. To prove incomparability, if $s\le_R t$ then [F1] gives $t=sx$ and $\ell(t)=\ell(s)+\ell(x)$. Since $\ell(s)=\ell(t)=1$ by [F14], [F6] yields $x=1$, contradicting $s\ne t$; the same argument with $s,t$ exchanged excludes $t\le_R s$. For $\le_L$, [F21] gives the factorizations $t=xs$ or $s=xt$, and the same length calculation excludes both comparisons. No Axiom of Choice is used: the arbitrary-subset meet assertion is supplied by [F3], and [F19] records that its construction makes only finitely many choices. No completeness or lattice property beyond (1) is claimed for infinite $W$. [F1, F3, F6, F14, F15, F17, F18, F19, F20, F21, step 2.1, given, algebra] ∎

---
id: cex-cg-parabolic-quotient-interval-eulerian-claim-fails
kind: counterexample
title: "A parabolic quotient interval of S4 whose Möbius value is 0, so the Eulerian sign formula does not extend to quotients"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 20
deps: [thm-cg-bruhat-eulerian-intervals-and-mobius, thm-cg-bruhat-parabolic-projection-and-quotients, def-cg-parabolic-quotient-and-two-sided-minima, def-poset-mobius-function, lem-poset-mobius-recurrence, def-cg-bruhat-order-by-reflection-chains, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-cg-bruhat-subword-characterization, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, def-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  references:
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Sections 2.5 and 2.7, printed pp. 44-55: the quotient order, the fullness hypothesis behind the quotient Möbius formula and the deleted-position labels of full intervals, of which this counterexample exhibits the boundary"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement refuted

Let $W$ be a Coxeter group with simple system $S$ and let $I\subseteq S$; write $W^I=\{w\in W:\ell(ws)>\ell(w)\ \text{for all }s\in I\}$ for the parabolic quotient ([[def-cg-parabolic-quotient-and-two-sided-minima]] (2)) with the induced order. The refuted claim is:

> For every $I\subseteq S$ and all $u\le w$ in $W^I$, the Möbius function of the induced poset $[u,w]^I=[u,w]\cap W^I$ satisfies $\mu(u,w)=(-1)^{\ell(w)-\ell(u)}$.

The claim holds for full Bruhat intervals $[u,w]\subseteq W$ ([[thm-cg-bruhat-eulerian-intervals-and-mobius]] (ii)) but is false as stated for quotient intervals.

## Facts & Assumptions

**Given:** $W=S_4$ with $s_1=(1\ 2)$, $s_2=(2\ 3)$, $s_3=(3\ 4)$ in one-line notation ([[def-finite-symmetric-group-and-permutation-notation]], [[def-inversions-inversion-number-and-sign]]), the subset $I=\{s_1,s_3\}$ and the induced poset $W^I$.

[F1] The quotient is the set of elements without right descents in $I$: "$$W^I:=\{w\in W:\ell(ws)>\ell(w)\text{ for all }s\in I\}=\{w\in W:D_R(w)\cap I=\emptyset\},$$" ([[def-cg-parabolic-quotient-and-two-sided-minima]] (2)).

[F2] The quotient order is the restriction of the Bruhat order and the quotient is graded: "The subword criterion of [[thm-cg-bruhat-subword-characterization]] applies verbatim, since the order on $W^I$ is by definition the restriction of the order on $W$" ([[thm-cg-bruhat-parabolic-projection-and-quotients]] (3)).

[F3] Subword characterization: "$u\le w$" holds if and only if some reduced expression of $u$ is a subword of a fixed reduced expression of $w$ ([[thm-cg-bruhat-subword-characterization]]).

[F4] Type $A$: "Then $s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_n$ (the letters $1,\dots,n$ carry the library's symmetric group by the order-preserving identification with $\{0,\dots,n-1\}$, under which $(i\ i+1)$ is the adjacent transposition $(i-1\ i)$), and for every $w\in W$, $$\ell(w)=\operatorname{inv}\bigl(\varphi(w)\bigr),$$" ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)).

[F5] The Möbius recurrence: "Equivalently, off the diagonal, $$\mu_P(x,y)=-\sum_{x\le z<y}\mu_P(x,z)=-\sum_{x<z\le y}\mu_P(z,y).$$" ([[lem-poset-mobius-recurrence]]).

[F6] The sign formula for full intervals: "**(ii) Möbius function of a full interval.** $\mu(u,v)=(-1)^{\ell(v)-\ell(u)}$, where $\mu$ is the Möbius function of the interval" ([[thm-cg-bruhat-eulerian-intervals-and-mobius]] (ii)).

[F7] The scope refusal: "It is not asserted for intervals of a proper parabolic quotient $W^I$ ([[thm-cg-bruhat-parabolic-projection-and-quotients]]): there the fullness of the interval is an additional hypothesis" ([[thm-cg-bruhat-eulerian-intervals-and-mobius]] (iv)).

## Counterexample

Take $W=S_4$, $I=\{s_1,s_3\}$ and $w_0^I=3412$.

1.1 The quotient interval. By [F1] an element $w$ lies in $W^I$ exactly when neither $s_1$ nor $s_3$ is a right descent of $w$, that is, when $\ell(ws_1)>\ell(w)$ and $\ell(ws_3)>\ell(w)$; since right multiplication by $s_i$ swaps the entries in positions $i$ and $i+1$ of the one-line form, this says $w(1)<w(2)$ and $w(3)<w(4)$. Testing the $24$ elements of $S_4$ leaves exactly $W^I=\{1234,1324,1423,2314,2413,3412\}$, of lengths $0,1,2,2,3,4$ by [F4]; in particular $3412$ is the unique element of $W^I$ of length $4$. [F1, F4]

2.1 The covers. By [F2] the order on $W^I$ is the restriction of the Bruhat order, and two elements of $W^I$ whose lengths differ by one form a cover exactly when they are comparable; the adjacent length pairs in $W^I$ are only the pairs $\{1234,1324\}$, $\{1324,1423\}$, $\{1324,2314\}$, $\{1423,2413\}$, $\{2314,2413\}$ and $\{2413,3412\}$, because $W^I$ has exactly one element of length $0$ and of length $1$, two of length $2$, and one of length $3$ and of length $4$. Each of these six pairs is comparable, as the subword criterion [F3] shows with the reduced expressions $1324=s_2$, $1423=s_3s_2$, $2314=s_1s_2$, $2413=s_1s_3s_2$ and $3412=s_2s_1s_3s_2$: the subwords $s_2\le s_3s_2$, $s_2\le s_1s_2$, $s_3s_2\le s_1s_3s_2$, $s_1s_2\le s_1s_3s_2$ and $s_1s_3s_2\le s_2s_1s_3s_2$ exhibit the five comparabilities above the bottom, and $1234\le1324$ is the empty subword. Hence the covers inside $W^I$ are exactly $1234\lessdot1324$, $1324\lessdot1423$, $1324\lessdot2314$, $1423\lessdot2413$, $2314\lessdot2413$ and $2413\lessdot3412$, and these covers chain every element of $W^I$ below $3412$; so $3412$ is the greatest element of $W^I$ and the quotient interval $[1234,3412]^I=[1234,3412]\cap W^I$ has exactly these six elements. [F2, F3, step 1.1]

2.2 The fullness failure. The element $1432$ of $S_4$ satisfies $1432\notin W^I$ because $\ell(1432\,s_3)=\ell(1423)=2<3=\ell(1432)$ [F4], while $1432\le3412$ in the full Bruhat order: $3412=s_2s_1s_3s_2$ is a reduced expression (its length $4$ equals the inversion number of $3412$) and $1432=s_2s_3s_2$ is the product of its subword at positions $1,3,4$ [F3]. Hence $1432\in[1234,3412]\setminus[1234,3412]^I$, the quotient interval is a proper subset of the full interval $[1234,3412]$, and the fullness hypothesis fails for it. [F3, F4, step 1.1]

3.1 The Möbius values. With the recurrence [F5] and the cover list of step 2.1: $\mu(1234,1234)=1$ and $\mu(1234,1324)=-1$ (the atom covers the bottom); $\mu(1234,1423)=-(\mu(1234,1234)+\mu(1234,1324))=-(1-1)=0$ and likewise $\mu(1234,2314)=0$ (each has exactly the two displayed elements below it in the quotient interval); $\mu(1234,2413)=-(1-1+0+0)=0$; and finally $\mu(1234,3412)=-(1-1+0+0+0)=0$. [F5, step 2.1]

4.1 The refutation. By step 3.1 the induced quotient interval has $\mu(1234,3412)=0$, whereas $(-1)^{\ell(3412)-\ell(1234)}=(-1)^4=1$ by [F4]; so the indiscriminate Eulerian claim displayed above is false for this $I$ and this interval. The exact dropped hypothesis is fullness of the interval: step 2.2 shows $[1234,3412]^I\subsetneq[1234,3412]$, and for full intervals the sign formula holds by [F6]. This is why the theorem restricts its scope in [F7]. [F4, F6, F7, step 3.1, step 2.2] ∎

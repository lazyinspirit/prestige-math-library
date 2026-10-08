---
id: ex-cg-s4-rank-three-interval-mobius-from-recurrence
kind: example
title: "The Möbius value of the rank-three interval [e,c] in S4 from the recurrence, with the parity and falling-chain checks"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 20
deps: [thm-cg-bruhat-eulerian-intervals-and-mobius, def-cg-deletion-chain-labels-and-shelling, thm-cg-bruhat-deletion-label-shelling, lem-cg-lexicographic-chain-shelling-and-mobius-cancellation, thm-cg-bruhat-subword-characterization, thm-cg-bruhat-lifting-and-cover-criterion, def-cg-finite-lattice-congruence-and-interval-projections, def-poset-mobius-function, lem-poset-mobius-recurrence, lem-cg-bruhat-chain-refinement-and-gradedness, def-cg-bruhat-order-by-reflection-chains, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, def-finite-cardinality]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 2.7 and Corollary 2.7.11, printed pp. 48-55: the deleted-position labels and the Eulerian sign formula, whose rank-three S4 instance is computed here from the recurrence"
    - title: "Yufei Zhao, On the Bruhat order of the symmetric group and its shellability (expository notes, MIT, 12 December 2007)"
      url: "https://web.mit.edu/yufeiz/www/papers/bruhat.pdf"
      locator: "Section 4, printed pp. 5-7 (Verma's parity-balance induction and Corollary 4.3), of which the present finite computation is a special case"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

In the notation of the type $A_3$ Coxeter group $W$ with simple reflections $s_1,s_2,s_3$ and one-line notation on the letters $\{1,2,3,4\}$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4), the published $S_4$ on $\{0,1,2,3\}$ under the letter shift $j\mapsto j-1$ of [[def-finite-symmetric-group-and-permutation-notation]]), let $c=s_1s_2s_3=2341$ and $[e,c]=\{1234;\ 2134,1324,1243;\ 2314,2143,1342;\ 2341\}$ ([[def-cg-deletion-chain-labels-and-shelling]]).

**(i) The recurrence.** With $\mu$ the Möbius function of $[e,c]$ ([[def-poset-mobius-function]], [[lem-poset-mobius-recurrence]]) one has $\mu(1234,1234)=1$; $\mu(1234,s)=-1$ for each atom $s\in\{s_1,s_2,s_3\}$; and $\mu(1234,x)=-(1-1-1)=1$ for each of the three rank-two elements $x$, because the elements of $[1234,x]$ are exactly $1234$, the two atoms covered by $x$ and $x$ itself. Hence $\mu(1234,2341)=-(1-3+3)=-1=(-1)^{\ell(2341)-\ell(1234)}=(-1)^3$, in agreement with [[thm-cg-bruhat-eulerian-intervals-and-mobius]] (ii).

**(ii) Parity balance.** $[e,c]$ has four elements of even length, $1234,2314,2143,1342$, and four of odd length, $2134,1324,1243,2341$; so the interval contains equally many elements of each parity, and $\sum_{x\in[e,c]}(-1)^{\ell(x)}=0$, as required by [[thm-cg-bruhat-eulerian-intervals-and-mobius]] (i) ([[def-finite-cardinality]]).

**(iii) Falling-chain check.** The unique strictly falling maximal chain of $[e,c]$ is $2341\gtrdot2314\gtrdot2134\gtrdot1234$ with label word $(3,2,1)$; the falling-chain formula of [[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]] (ii), applicable through [[thm-cg-bruhat-deletion-label-shelling]], gives $\mu(1234,2341)=(-1)^3\cdot1=-1$, consistent with (i) and with the count-one clause of [[thm-cg-bruhat-eulerian-intervals-and-mobius]] (iii).

## Facts & Assumptions

**Given:** The type $A_3$ Coxeter group $W$ with simple reflections $s_1,s_2,s_3$, the element $c=s_1s_2s_3=2341$, the interval $[e,c]$ and the deleted-position labeling induced by the reduced expression $c=s_1s_2s_3$.

[F1] Subword characterization: "$u\le w$" holds if and only if some reduced expression of $u$ is a subword of a fixed reduced expression of $w$; "and the indices may be chosen with $k=\ell(u)$, so that $s_{i_1}\cdots s_{i_k}$ is a reduced expression of $u$" ([[thm-cg-bruhat-subword-characterization]]).

[F2] Reflection deletion: "Then $v_i=vt_i$ and $v_i<v$; moreover $v_i$ is covered by $v$ if and only if $\ell(v_i)=q-1$, that is, if and only if the word $s_1\cdots\widehat{s_i}\cdots s_q$ is reduced." ([[thm-cg-bruhat-lifting-and-cover-criterion]] (3)).

[F3] Type $A$: "Then $s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_n$ (the letters $1,\dots,n$ carry the library's symmetric group by the order-preserving identification with $\{0,\dots,n-1\}$, under which $(i\ i+1)$ is the adjacent transposition $(i-1\ i)$), and for every $w\in W$, $$\ell(w)=\operatorname{inv}\bigl(\varphi(w)\bigr),$$" ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)).

[F4] The Möbius recurrence: "Equivalently, off the diagonal, $$\mu_P(x,y)=-\sum_{x\le z<y}\mu_P(x,z)=-\sum_{x<z\le y}\mu_P(z,y).$$" ([[lem-poset-mobius-recurrence]]).

[F5] The labeling recursion: "the cover $x_j\gtrdot x_{j+1}$ determines a unique position $\lambda_{j+1}(m)\in P_j$ with $x_{j+1}=\prod_{p\in P_j\setminus\{\lambda_{j+1}(m)\}}s_p$" ([[def-cg-deletion-chain-labels-and-shelling]] (2)).

[F6] Falling label words: "A maximal chain $m$ of $[x,y]$ is **increasing** if $\lambda_1(m)<\lambda_2(m)<\cdots<\lambda_n(m)$; it is **falling** if $\lambda_1(m)\ge\lambda_2(m)\ge\cdots\ge\lambda_n(m)$" ([[def-cg-finite-lattice-congruence-and-interval-projections]] (3)).

[F7] The sign formula for full intervals: "$\mu(u,v)=(-1)^{\ell(v)-\ell(u)}$" for $u\le v$ in $W$ ([[thm-cg-bruhat-eulerian-intervals-and-mobius]] (ii)).

[F8] The parity balance: if $u<v$ then "$[u,v]$ contains equally many elements of even and of odd length" ([[thm-cg-bruhat-eulerian-intervals-and-mobius]] (i)).

[F9] The deleted-position labeling satisfies (N) and (L) on every rooted interval: "On every rooted interval of $[u,v]$ the labeling satisfies the no-tie condition (N) and the lex-increasing property (L)" ([[thm-cg-bruhat-deletion-label-shelling]] (i)).

[F10] The falling-chain formula: for a finite graded poset with a descending rooted-chain labeling satisfying (N) and (L) on every rooted interval, "$$\mu(v,w)=(-1)^{\rho(v,w)}\cdot\#\{\text{maximal chains of }[v,w]\text{ whose label word is strictly falling}\},$$" ([[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]] (ii)).

[F11] Cardinality of a finite set: "Let $A$ be a finite set. Then there is **exactly one** $n \in \mathbb{N}$ with $A \approx n$" ([[def-finite-cardinality]]).

[F12] Grading: "Every maximal chain in $[u,v]$ has exactly $\ell(v)-\ell(u)$ strict steps" ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (3)).

## Verification

**Proof technique:** finite computation on the fixed reduced word $s_1s_2s_3$.

1.1 The eight elements and the twelve covers. The word $s_1s_2s_3$ is reduced and its subword products are $1234,2134,1324,1243,2314,2143,1342,2341$, each reduced of its number of letters because its inversion number equals its length [F3]; by [F1] these are exactly the elements of $[e,c]$, of ranks $0,1,1,1,2,2,2,3$. By [F2] the elements covered by $c$ are the single-letter deletions of $s_1s_2s_3$ whose remaining word is reduced, namely $s_2s_3=1342$, $s_1s_3=2143$, $s_1s_2=2314$, the three elements of length $2$; each atom covers $e$; and for a length-two element $x=t_it_j$ the subword products of the reduced word $t_it_j$ are exactly $e,t_i,t_j,x$, so the atoms below $x$ are $t_i$ and $t_j$ and every other adjacent-rank pair involving $x$ is incomparable, which yields the six covers $1342\gtrdot1243$, $1342\gtrdot1324$, $2143\gtrdot1243$, $2143\gtrdot2134$, $2314\gtrdot1324$, $2314\gtrdot2134$. This is the same twelve-cover diagram used for the label words below, and by [F12] every maximal chain of $[e,c]$ has three steps. [F1, F2, F3, F12]

2.1 The atoms. By step 1.1 the three atoms $2134,1324,1243$ cover $e$ and have nothing strictly between, so the recurrence [F4] gives $\mu(e,s)=-(\mu(e,e))=-1$ for each of them. [F4, step 1.1]

2.2 Parity balance. The lengths of the eight elements are $0,1,1,1,2,2,2,3$ [F3], so four elements have even and four have odd length and $\sum_{x\in[e,c]}(-1)^{\ell(x)}=4-4=0$, as required by the parity-balance statement [F8]; the count is a cardinality of a finite set [F11]. [F3, F8, F11, step 1.1]

3.1 The rank-two elements. By step 1.1 the elements of $[e,x]$ other than $x$ are exactly $e$ and the two atoms it covers, so the recurrence [F4] gives $\mu(e,x)=-(1-1-1)=1$ for $x=1342,2143,2314$. [F4, step 1.1, step 2.1]

4.1 The top value. The elements of $[e,c]$ other than $c$ are $e$, the three rank-one elements and the three rank-two elements, so the recurrence [F4] gives $\mu(e,c)=-(1+3\cdot(-1)+3\cdot1)=-(1-3+3)=-1$, which equals $(-1)^{\ell(c)-\ell(e)}=(-1)^3$ by [F3] and agrees with the sign formula [F7]. [F3, F4, F7, step 2.1, step 3.1]

5.1 The falling-chain check. Reading off deletions from the cover diagram of step 1.1 with the recursion [F5] gives the six label words $(1,2,3)$ and $(1,3,2)$ for the chains through $1342$, $(2,1,3)$ and $(2,3,1)$ for those through $2143$, and $(3,1,2)$ and $(3,2,1)$ for those through $2314$; since these are the six permutations of $\{1,2,3\}$, exactly one maximal chain has a strictly falling word [F6], namely $2341\gtrdot2314\gtrdot2134\gtrdot1234$ with word $(3,2,1)$. By [F9] the deleted-position labeling satisfies (N) and (L) on every rooted interval and by [F12] the interval $[e,c]$ is finite and graded, so the falling-chain formula [F10] applies and gives $\mu(e,c)=(-1)^{\ell(c)-\ell(e)}\cdot1=-1$, consistent with step 4.1 and with the count-one clause of [F7]. [F5, F6, F7, F9, F10, F12, step 1.1, step 4.1]

6.1 Conclusion. Steps 4.1, 2.2 and 5.1 compute $\mu(1234,2341)=-1=(-1)^3$ from the recurrence and confirm the two independent checks of the Eulerian theorem: the equal numbers of even and odd elements [F8] and the single strictly falling maximal chain [F10]. [F8, F10, step 2.2, step 4.1, step 5.1] ∎

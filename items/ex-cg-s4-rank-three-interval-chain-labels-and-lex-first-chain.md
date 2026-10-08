---
id: ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain
kind: example
title: "All maximal chains of a rank-three interval in S4, their deleted-position labels, and the lexicographically first chain"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 19
deps: [def-cg-deletion-chain-labels-and-shelling, lem-cg-bruhat-increasing-chain-and-local-descent-replacement, thm-cg-bruhat-deletion-label-shelling, thm-cg-bruhat-lifting-and-cover-criterion, thm-cg-bruhat-subword-characterization, lem-cg-bruhat-chain-refinement-and-gradedness, def-cg-bruhat-order-by-reflection-chains, def-cg-finite-lattice-congruence-and-interval-projections, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, def-group]
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
      locator: "Section 2.7 and Example 2.7.1, printed pp. 48-50: the induced label of a maximal chain and the four labelled chains of S3, which this example instantiates for a rank-three interval of S4"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $W$ be the Coxeter group of type $A_3$ with simple reflections $s_1,s_2,s_3$ and use one-line notation on the letters $\{1,2,3,4\}$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)), so that $\ell$ is the inversion number ([[def-inversions-inversion-number-and-sign]]). This display is the published one-line notation of $S_4$ on $\{0,1,2,3\}$ ([[def-finite-symmetric-group-and-permutation-notation]]) under the letter shift $j\mapsto j-1$, a bijection that preserves the order of the letters and the group law and carries $s_i=(i\ i+1)$ to $(i-1\ i)$; it therefore preserves inversion numbers and the Bruhat order, so nothing depends on which of the two letter sets is displayed. Put $c:=s_1s_2s_3=2341$, a reduced expression, and give the rank-three interval $[e,c]$ the deleted-position labeling induced by $c=s_1s_2s_3$ ([[def-cg-deletion-chain-labels-and-shelling]]).

**(i) The interval and its covers.** $[e,c]=\{1234;\ 2134,1324,1243;\ 2314,2143,1342;\ 2341\}$, where $2134=s_1$, $1324=s_2$, $1243=s_3$, $2314=s_1s_2$, $2143=s_1s_3$, $1342=s_2s_3$ and $2341=c$; the interval has eight elements and its covers are $2341\gtrdot1342$, $2341\gtrdot2143$, $2341\gtrdot2314$, $1342\gtrdot1243$, $1342\gtrdot1324$, $2143\gtrdot1243$, $2143\gtrdot2134$, $2314\gtrdot1324$, $2314\gtrdot2134$, and $s\gtrdot1234$ for each atom $s$. Hence $[e,c]$ has exactly six maximal chains.

**(ii) All label words.** The six maximal chains of $[e,c]$ with their label words are:
$$2341\gtrdot1342\gtrdot1243\gtrdot1234:\ (1,2,3),\qquad 2341\gtrdot1342\gtrdot1324\gtrdot1234:\ (1,3,2),$$
$$2341\gtrdot2143\gtrdot1243\gtrdot1234:\ (2,1,3),\qquad 2341\gtrdot2143\gtrdot2134\gtrdot1234:\ (2,3,1),$$
$$2341\gtrdot2314\gtrdot1324\gtrdot1234:\ (3,1,2),\qquad 2341\gtrdot2314\gtrdot2134\gtrdot1234:\ (3,2,1).$$
The six words are pairwise distinct and are exactly the six permutations of $\{1,2,3\}$; the unique falling one is $(3,2,1)$.

**(iii) Lexicographically first chain.** The lexicographically first maximal chain is $2341\gtrdot1342\gtrdot1243\gtrdot1234$ with label word $(1,2,3)$, and it is the unique increasing maximal chain ([[lem-cg-bruhat-increasing-chain-and-local-descent-replacement]] (i),(iii)).

**(iv) Local descent replacement.** The chain $2341\gtrdot1342\gtrdot1324\gtrdot1234$ has label word $(1,3,2)$, with a descent at position $2$. The rooted rank-two interval $[1234,1342]$ with retained expression $s_2s_3$ has the two middle elements $1324$ and $1243$, and its two maximal chains have label words $(3,2)$ (falling) and $(2,3)$ (increasing); replacing the falling segment $1342\gtrdot1324\gtrdot1234$ by the increasing chain $1342\gtrdot1243\gtrdot1234$ produces the lexicographically first chain, with word $(1,2,3)\prec(1,3,2)$, as in [[thm-cg-bruhat-deletion-label-shelling]] (ii) and [[lem-cg-bruhat-increasing-chain-and-local-descent-replacement]] (iv).

## Facts & Assumptions

**Given:** The type $A_3$ Coxeter group $W$ with simple reflections $s_1,s_2,s_3$, the element $c=s_1s_2s_3=2341$ and the interval $[e,c]$ with the deleted-position labeling induced by the reduced expression $c=s_1s_2s_3$.

[F1] Cover criterion and reflection deletion: "Then $v_i=vt_i$ and $v_i<v$; moreover $v_i$ is covered by $v$ if and only if $\ell(v_i)=q-1$, that is, if and only if the word $s_1\cdots\widehat{s_i}\cdots s_q$ is reduced." ([[thm-cg-bruhat-lifting-and-cover-criterion]] (3)).

[F2] Subword characterization: "$u\le w$" holds if and only if some reduced expression of $u$ is a subword of a fixed reduced expression of $w$; "and the indices may be chosen with $k=\ell(u)$, so that $s_{i_1}\cdots s_{i_k}$ is a reduced expression of $u$" ([[thm-cg-bruhat-subword-characterization]]).

[F3] Type $A$: "Then $s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_n$ (the letters $1,\dots,n$ carry the library's symmetric group by the order-preserving identification with $\{0,\dots,n-1\}$, under which $(i\ i+1)$ is the adjacent transposition $(i-1\ i)$), and for every $w\in W$, $$\ell(w)=\operatorname{inv}\bigl(\varphi(w)\bigr),$$" ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)).

[F4] The published symmetric group acts on the letters $\{0,1,\dots,n-1\}$: "Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$" ([[def-finite-symmetric-group-and-permutation-notation]]).

[F5] The labeling recursion: "the cover $x_j\gtrdot x_{j+1}$ determines a unique position $\lambda_{j+1}(m)\in P_j$ with $x_{j+1}=\prod_{p\in P_j\setminus\{\lambda_{j+1}(m)\}}s_p$" ([[def-cg-deletion-chain-labels-and-shelling]] (2)).

[F6] Increasing, falling and lexicographic comparison of label words: "A maximal chain $m$ of $[x,y]$ is **increasing** if $\lambda_1(m)<\lambda_2(m)<\cdots<\lambda_n(m)$; it is **falling** if $\lambda_1(m)\ge\lambda_2(m)\ge\cdots\ge\lambda_n(m)$" ([[def-cg-finite-lattice-congruence-and-interval-projections]] (3)).

[F7] Uniqueness of the increasing chain and minimality of its word: "$([a,b],c)$ has exactly one increasing maximal chain, and it is the lexicographically first maximal chain of $([a,b],c)$" ([[lem-cg-bruhat-increasing-chain-and-local-descent-replacement]] (iii)).

[F8] Rank-two diamonds: "If $\ell(b)-\ell(a)=2$, then $[a,b]$ has exactly four elements, and its two maximal chains have label words $(i,j)$ and $(p,m)$ with $i<j$, $m<p$ and $i<j\le p$; the first word is increasing and the second is falling." ([[lem-cg-bruhat-increasing-chain-and-local-descent-replacement]] (ii)).

[F9] Local descent replacement: "Then $k':=m_0\gtrdot\cdots\gtrdot m_{e-1}\gtrdot y\gtrdot m_{e+1}\gtrdot\cdots\gtrdot m_k$ is a maximal chain of $([a,b],c)$ with $\lambda(k')\prec\lambda(m)$ and $k'\cap m=m\setminus\{m_e\}$." ([[lem-cg-bruhat-increasing-chain-and-local-descent-replacement]] (iv)).

[F10] Earlier/later chain comparison: "For all maximal chains $m',m$ of $[u,v]$ with $\lambda(m')\prec\lambda(m)$ there is a maximal chain $k$ of $[u,v]$ with $\lambda(k)\prec\lambda(m)$, $m'\cap m\subseteq k\cap m$ and $|k\cap m|=|m|-1$." ([[thm-cg-bruhat-deletion-label-shelling]] (ii)).

[F11] Grading: "Every maximal chain in $[u,v]$ has exactly $\ell(v)-\ell(u)$ strict steps" ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (3)).

## Verification

**Proof technique:** finite computation on the cover diagram of $[e,2341]$ in $S_4$.

1.1 The eight elements. The fixed word $s_1s_2s_3$ is reduced with $\ell(c)=3$, because $2341$ has exactly the three inversions $(3,4)$, $(2,4)$, $(1,4)$ [F3]; here the displayed letters $\{1,2,3,4\}$ are those of the published $S_4$ on $\{0,1,2,3\}$ shifted by $j\mapsto j-1$ [F4]. By [F2] an element $x$ of $W$ satisfies $x\le c$ if and only if $x$ is the product of a subword of $s_1s_2s_3$, so it remains to note that each of the eight subwords, with positions $\varnothing,\{1\},\{2\},\{3\},\{1,2\},\{1,3\},\{2,3\},\{1,2,3\}$, is reduced: its product $1234,2134,1324,1243,2314,2143,1342,2341$ has inversion number equal to its number of letters, as displayed [F3]. The eight products are distinct one-line forms, so $[e,c]$ has exactly these eight elements, of ranks $0,1,1,1,2,2,2,3$. [F2, F3, F4]

1.2 The covers and the six maximal chains. By [F1] the elements covered by $c$ are the single-letter deletions of the reduced word $s_1s_2s_3$ whose remaining word is reduced: deleting positions $1,2,3$ leaves $s_2s_3=1342$, $s_1s_3=2143$, $s_1s_2=2314$, each of length $2=\ell(c)-1$, so these three and no others are covered by $c$, because every element covered by $c$ has length $2$ and the length-two elements of $[e,c]$ are exactly these three. Each atom covers $e$ by the cover criterion, and each atom lies below $c$ by [F2], so the three pairs $s\gtrdot e$ are covers. For a length-two element $x=t_it_j$ with $i<j$, the products of subwords of the reduced word $t_it_j$ are exactly $e,t_i,t_j,x$, so by [F2] the elements of $[e,x]$ are exactly these four and the atoms covered by $x$ are $t_i$ and $t_j$; applying this to $1342=s_2s_3$, $2143=s_1s_3$, $2314=s_1s_2$ gives the six covers $1342\gtrdot1243$, $1342\gtrdot1324$, $2143\gtrdot1243$, $2143\gtrdot2134$, $2314\gtrdot1324$, $2314\gtrdot2134$, and shows that the remaining three pairs of adjacent ranks are incomparable (for instance $2134\not\le1342$, since $2134=s_1$ is not one of $e,s_2,s_3,s_2s_3$). Since every maximal chain of $[e,c]$ has $\ell(c)-\ell(e)=3$ steps [F11], the maximal chains are the paths of covers from $2341$ to $1234$, namely the six chains displayed in (ii). [F1, F2, F11]

2.1 The label words. At the first step the retained expression is $c=s_1s_2s_3$ and the deleted position is read off from the cover by [F5]: $2341\gtrdot1342$ deletes position $1$, $2341\gtrdot2143$ deletes position $2$, $2341\gtrdot2314$ deletes position $3$. In the rooted intervals the retained expressions are $1342=s_2s_3$, $2143=s_1s_3$, $2314=s_1s_2$, with their original positions; deleting the letter $s_1$, $s_2$ or $s_3$ from such a retained word gives the corresponding atom, so the second and third labels are the original positions of the deleted letters. Reading the six chains of step 1.2 gives exactly the six words $(1,2,3),(1,3,2),(2,1,3),(2,3,1),(3,1,2),(3,2,1)$. These are pairwise distinct and, as the six permutations of $\{1,2,3\}$, exhaust all label words; the only strictly falling one is $(3,2,1)$, and $(1,2,3)$ is increasing. [F5, F6, step 1.2]

3.1 The lexicographically first chain. By step 2.1 the six label words are distinct permutations of $\{1,2,3\}$, so the lexicographically first maximal chain is the one with word $(1,2,3)$, namely $2341\gtrdot1342\gtrdot1243\gtrdot1234$, and this word is increasing; by [F7] the increasing maximal chain of $[e,c]$ is unique and lexicographically first, in agreement. [F6, F7, step 2.1]

4.1 The local descent replacement. Consider the chain $m\colon2341\gtrdot1342\gtrdot1324\gtrdot1234$, whose word $(1,3,2)$ has its descent at position $2$. Its part above $m_1=1342$ is the single cover $2341\gtrdot1342$, and the rooted rank-two interval $([m_3,m_1],c_m)=([1234,1342],\,2341\gtrdot1342)$ has retained expression $s_2s_3$, with the two maximal chains $1342\gtrdot1324\gtrdot1234$ and $1342\gtrdot1243\gtrdot1234$ and label words $(3,2)$ and $(2,3)$, by [F8] and step 2.1 (the words are computed from the retained expression with its original positions $2,3$). The second chain is the unique increasing one, so replacing the falling segment by it gives the maximal chain $2341\gtrdot1342\gtrdot1243\gtrdot1234$ with word $(1,2,3)\prec(1,3,2)$, which is the lexicographically first chain of step 3.1; this is the instance for $e=2$ of the local descent replacement [F9], and it agrees with the earlier/later comparison [F10] with $m'$ the lexicographically first chain, for which $m'\cap m=\{2341,1342,1234\}$, $|m'\cap m|=3=|m|-1$ and $\lambda(m')\prec\lambda(m)$. [F8, F9, F10, step 2.1, step 3.1] ∎

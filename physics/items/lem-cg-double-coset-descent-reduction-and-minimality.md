---
id: lem-cg-double-coset-descent-reduction-and-minimality
kind: lemma
title: "Descent reduction, minimum-length elements, and the additive factorization in a double coset"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 7
deps: [def-cg-parabolic-quotient-and-two-sided-minima, def-hh-coxeter-matrix-word-group-and-length,
       thm-hh-coxeter-exchange-deletion-and-faithfulness,
       thm-hh-parabolic-minimal-representatives-and-length-additivity,
       thm-well-ordering-principle, def-natural-numbers, def-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised arXiv edition of the CRM monograph, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154v2"
    - title: "Sara Billey, Matjaz Konvalinka, T. Kyle Petersen, William Slofstra and Bridget Tenner, Parabolic double cosets in Coxeter groups (arXiv:1612.00736v2)"
      url: "https://arxiv.org/pdf/1612.00736v2"
---

## Statement

Let $(S,m)$, $W$, $\ell$ be as in
[[def-cg-parabolic-quotient-and-two-sided-minima]], let $I,J\subseteq S$, and
let $W_I$, $W^J$, ${}^IW$, ${}^IW^J$ be as defined there; for $d\in W$ write

$$\Omega(d):=W_IdW_J=\{udv:u\in W_I,\ v\in W_J\}$$

for the double coset of $d$.

**(1) Descent reduction.** Fix a total order on the finite set $S$. Every set
$\Omega(d)$ contains an element of ${}^IW^J$. More precisely, starting from $x:=d$ and repeatedly replacing the
current element $x$ by $sx$, where $s$ is the least element of $I$ with
$\ell(sx)<\ell(x)$, if such an $s$ exists, and otherwise by $xs$, where $s$ is
the least element of $J$ with $\ell(xs)<\ell(x)$, if such an $s$ exists, the
process stops after at most $\ell(d)$ replacements at an element of
$\Omega(d)\cap{}^IW^J$.

**(2) Elements of ${}^IW^J$ have minimum length.** Let $d\in{}^IW^J$. Then

$$\ell(d)\le\ell(x)\quad\text{for every }x\in\Omega(d),\qquad\text{and}\qquad \ell(x)=\ell(d)\iff x=d.$$

Consequently every double coset $W_IwW_J$ contains exactly one element of
${}^IW^J$, and it is the unique element of minimum length of that double coset;
conversely, every element of minimum length in its double coset $W_IxW_J$ lies
in ${}^IW^J$.

**(3) Additive factorization.** Let $d\in{}^IW^J$ and $x\in\Omega(d)$. Then
there exist $u\in W_I$ and $v\in W_J$ with

$$x=udv,\qquad \ell(x)=\ell(u)+\ell(d)+\ell(v).$$

## Facts & Assumptions

**Given:** a finite Coxeter matrix $(S,m)$ with presented group $W$ and length $\ell$, subsets $I,J\subseteq S$, an element $d\in W$, and a fixed total order on $S$.

[F1] For all $w\in W$ and $s\in S$ one has $\ell(sw)=\ell(w)\pm1$ and $\ell(ws)=\ell(w)\pm1$ ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]]).

[F2] $\ell(w)=\min\{k\in\mathbb N:\text{there are }s_1,\dots,s_k\in S\text{ with }w=s_1\cdots s_k\}$; hence a word of length $k$ representing $v$ gives $\ell(v)\le k$, and concatenating words gives $\ell(uv)\le\ell(u)+\ell(v)$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F3] $W_I=\langle s:s\in I\rangle$, ${}^IW=\{w:\ell(sw)>\ell(w)\text{ for all }s\in I\}$, $W^J=\{w:\ell(ws)>\ell(w)\text{ for all }s\in J\}$ and ${}^IW^J={}^IW\cap W^J$; for $d\in W$, $\Omega(d)=W_IdW_J$ is the set of all products $udv$ with $u\in W_I$, $v\in W_J$ ([[def-cg-parabolic-quotient-and-two-sided-minima]]).

[F4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]], [[def-natural-numbers]]).

[F5] $W_J=\{w\in W:S(w)\subseteq J\}$, where $S(w)$ is the set of letters of any reduced expression of $w$; in particular every element of $W_J$ has a reduced expression all of whose letters lie in $J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]]).

[F6] If $w=s_1\cdots s_k$ is any word in $S$ and $i<j$ are positions whose deletion does not change the value, in the sense that $s_1\cdots\widehat{s_i}\cdots\widehat{s_j}\cdots s_k=w$, then the deletion is an equality in the group $W$; conversely a word is reduced if and only if no two-letter deletion preserves its value ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]]).

[F7] Multiplication in $W$ is associative, and equalities may be multiplied on the left or on the right by group elements and cancelled ([[def-group]]).

## Proof

**Proof technique:** direct; a deletion process with a case analysis, then minima of double cosets.

1.1 *Descent reduction.* A total order on $S$ exists because $S$ is finite (transport the order from any finite enumeration). Use the fixed order in every least-generator selection. Suppose $x\in\Omega(d)$ and $\ell(sx)<\ell(x)$ for some $s\in I$; then $s\in W_I$ and $sx=s\cdot x\cdot1\in W_IxW_J=W_IdW_J=\Omega(d)$, because $W_IxW_J=W_I(W_IdW_J)W_J=W_IdW_J$ by [F3] and [F7]. Likewise, if $\ell(xs)<\ell(x)$ for some $s\in J$, then $xs\in\Omega(d)$ by [F3] and [F7]. By [F1] each replacement lowers $\ell$ by exactly $1$, so a process that starts at $x=d$, replaces $x$ by $sx$ with the least $s\in I$ of $\ell(sx)<\ell(x)$ if one exists and otherwise by $xs$ with the least $s\in J$ of $\ell(xs)<\ell(x)$ if one exists, and stops when neither exists, performs at most $\ell(d)$ replacements and terminates, because the values of $\ell$ lie in $\mathbb N$ by [F2]. At termination $x\in\Omega(d)$ and there is no $s\in I$ with $\ell(sx)<\ell(x)$ and no $s\in J$ with $\ell(xs)<\ell(x)$; since the differences lie in $\{\pm1\}$ by [F1], this says $\ell(sx)>\ell(x)$ for all $s\in I$ and $\ell(xs)>\ell(x)$ for all $s\in J$, that is, $x\in{}^IW^J$ by [F3]. [F1, F2, F3, F7]

1.2 *The middle block of a reducing word is never deleted.* Let $m$ be an element of minimum length in $\Omega:=W_IwW_J$ and let $x\in\Omega$, say $x=ama'$ with $a\in W_I$, $a'\in W_J$ by [F3]. Choose reduced words $A=(a_1,\dots,a_r)$ for $a$, $M=(m_1,\dots,m_q)$ for $m$ and $A'=(a'_1,\dots,a'_{r'})$ for $a'$; by [F5] the letters of $A$ lie in $I$ and those of $A'$ in $J$. While the current word, which begins as $A$ followed by $M$ followed by $A'$, is not reduced, choose the lexicographically least pair of positions $i<j$ whose deletion preserves the value, which exists by [F6], and delete the two positions; write the current word as $A_iMA'_i$, where $A_i$ and $A'_i$ are the surviving subwords of $A$ and $A'$ and, by induction over the rounds, the full block $M$ survives. Such a deletion pair never removes a letter of $M$: if both deleted letters lay in $M$, then the surviving word $A_iM_1A'_i$ has the value $x$ of $A_iMA'_i$, so by [F6] and [F7] the word $M_1$ has the same value $m$ as $M$, while $M_1$ has length $q-2$, contradicting $\ell(m)=q$ by [F2]; if exactly one deleted letter lay in $M$ and the other in $A_i$, then the surviving word is $A_{i+1}M_1A'_i$ with $A_{i+1}$ equal to $A_i$ with one letter deleted and $M_1$ equal to $M$ with one letter deleted, so by [F6] and [F7] the value of $M_1$ equals $\operatorname{val}(A_{i+1})^{-1}\,x\,\operatorname{val}(A'_i)^{-1}$, and this lies in $W_IxW_J=\Omega$ because $\operatorname{val}(A_{i+1})\in W_I$ and $\operatorname{val}(A'_i)\in W_J$ by [F3]; but $M_1$ has length $q-1$, so by [F2] the value of $M_1$ has length $\le q-1<q=\ell(m)$, contradicting the minimality of $m$ in $\Omega$; the case of one deleted letter in $M$ and one in $A'_i$ is the same with the roles of $A_i$ and $A'_i$ exchanged. A deletion pair with both letters outside $M$ is not excluded; it simply shortens $A_i$ or $A'_i$. Each deletion lowers the number of letters by $2$, so the process terminates at a reduced word of $x$ of the form $A_0MA'_0$, where $A_0$ and $A'_0$ arise from $A$ and $A'$ by deletions and $M$ is untouched; the words $A_0$ and $A'_0$ are themselves reduced, since a two-letter deletion inside $A_0$ preserving the value of $A_0$ would, by [F6] and [F7], preserve the value $x$ of the reduced word $A_0MA'_0$. Writing $a_0:=\operatorname{val}(A_0)\in W_I$ and $a'_0:=\operatorname{val}(A'_0)\in W_J$, the reducedness of $A_0MA'_0$ gives $x=a_0ma'_0$ and $\ell(x)=\ell(a_0)+\ell(m)+\ell(a'_0)$. [F2, F3, F5, F6, F7]

2.1 *A minimum has no descents.* Let $w\in W$ and let $\Omega:=W_IwW_J$; this set is nonempty, so the set $\{\ell(x):x\in\Omega\}\subseteq\mathbb N$ has a least element by [F4], and we choose $m\in\Omega$ with $\ell(m)$ that least element. If $s\in I$ and $\ell(sm)<\ell(m)$, then $sm\in\Omega$ by [F3] and [F7], contradicting minimality; hence $\ell(sm)>\ell(m)$ for all $s\in I$, because $\ell(sm)=\ell(m)\pm1$ by [F1]. Symmetrically $\ell(ms)>\ell(m)$ for all $s\in J$. Therefore $m\in{}^IW^J$ by [F3]: by step 1.1 every double coset $W_IwW_J$ contains an element of ${}^IW^J$, and taking $m$ of minimum length shows each double coset also has a minimum, which lies in ${}^IW^J$. [F1, F3, F4, F7, step 1.1]

3.1 *Every element of ${}^IW^J$ is a minimum of its double coset.* Let $d\in{}^IW^J$ and let $m$ be a minimum-length element of $\Omega(d)$, which exists by step 2.1. Applying step 1.2 with $w:=d$, $x:=d$ gives $d=a_0ma'_0$ with $a_0\in W_I$, $a'_0\in W_J$ and $\ell(d)=\ell(a_0)+\ell(m)+\ell(a'_0)$. If $a_0\neq1$, then $a_0$ has a reduced expression whose first letter $s$ lies in $I$ by [F5], so $\ell(sa_0)=\ell(a_0)-1$, and by [F2] and [F7] $\ell(sd)=\ell(sa_0ma'_0)\le\ell(sa_0)+\ell(m)+\ell(a'_0)=\ell(d)-1<\ell(d)$, contradicting $\ell(sd)>\ell(d)$ for $s\in I$, which holds because $d\in{}^IW$ by [F3]. Hence $a_0=1$, and symmetrically $a'_0=1$, so $d=m$: the element $d$ of ${}^IW^J$ is a minimum-length element of $\Omega(d)$. [F2, F3, F5, F7, step 1.2, step 2.1]

4.1 *Minimality, the equality case, and the additive factorization.* Let $d\in{}^IW^J$ and $x\in\Omega(d)$. By step 3.1 the element $d$ is a minimum-length element of $\Omega(d)$, so step 1.2 applied with $m:=d$ exhibits $x=udv$ with $u\in W_I$, $v\in W_J$ and $\ell(x)=\ell(u)+\ell(d)+\ell(v)$, which is the additive factorization (3); in particular $\ell(x)\ge\ell(d)$, with equality if and only if $\ell(u)=\ell(v)=0$, that is, $u=v=1$ and $x=d$. If $d'\in{}^IW^J\cap\Omega(d)$ is a second element, then applying the factorization with $x:=d'$ gives $\ell(d')=\ell(u)+\ell(d)+\ell(v)$ and, since $d'$ is also a minimum of $\Omega(d)$ by step 3.1, $\ell(d')=\ell(d)$, so $u=v=1$ and $d'=d$: each double coset contains at most one element of ${}^IW^J$, and by step 1.1 it contains one, namely its unique element of minimum length. Finally, if $x\in W_IwW_J$ has minimum length in $W_IwW_J$, then $x\in{}^IW^J$ by step 2.1. This proves (2) and completes the proof. [F1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- The deletion step is Tits deletion, not a cancellation of equal letters: the theorem of [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] provides positions $i<j$ whose deletion preserves the value of a non-reduced word, and the two deleted letters can be distinct simple reflections. The argument uses only the positions.
- The argument is choice-free: each deletion is the lexicographically least admissible pair of a finite nonempty set of positions, and the minima of double cosets are minima of nonempty subsets of $\mathbb N$.

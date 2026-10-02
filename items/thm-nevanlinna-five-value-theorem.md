---
id: thm-nevanlinna-five-value-theorem
kind: theorem
title: "Nevanlinna five-value uniqueness theorem"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-nevanlinna-second-main-theorem
  - lem-nevanlinna-growth-dominates-logarithm
  - thm-nevanlinna-first-main-theorem
  - thm-nevanlinna-characteristic-elementary-laws
  - def-nevanlinna-truncated-and-ramification-counts
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5-6.1, printed pp. 35-43: the five-value and four-value theorems"
    - title: "A. Goldberg and I. Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §§1-2, printed pp. 87-98; Ch. 4 §3, printed pp. 121-122: uniqueness theorems and truncated counting"
---

## Statement

Assume Countable Choice. Let $f$ and $g$ be nonconstant meromorphic functions
on $\mathbb C$. Suppose that $f$ and $g$ share five distinct sphere values
ignoring multiplicity: there are distinct $a_1,\dots,a_5\in\widehat{\mathbb C}$
such that for each $j$ the preimage sets $\{z:f(z)=a_j\}$ and
$\{z:g(z)=a_j\}$ agree. Then $f=g$ identically.

## Facts & Assumptions

**Given:** Nonconstant meromorphic functions $f,g$ on $\mathbb C$ sharing the distinct sphere values $a_1,\dots,a_5$; Countable Choice is assumed ([[def-countable-choice]]).

[F1] First Main Theorem: for nonconstant meromorphic $h$ and $a\in\widehat{\mathbb C}$, $m(r,a;h)+N(r,a;h)=T(r,h)+C(h,a)$ with $C(h,a)$ independent of $r$; in particular $N(r,a;h)\le T(r,h)+C(h,a)$ ([[thm-nevanlinna-first-main-theorem]]).

[F2] Characteristic laws: $T(r,h_1+h_2)\le T(r,h_1)+T(r,h_2)+O(1)$, $T(r,1/h)=T(r,h)+O_h(1)$ for $h\not\equiv0$, and for a fixed rational map $R=P/Q$ of degree $d=\max(\deg P,\deg Q)\ge1$ and nonconstant meromorphic $h$, $T(r,R(h))=d\,T(r,h)+O_{R,h}(1)$; a Möbius transformation is such an $R$ with $d=1$ ([[thm-nevanlinna-characteristic-elementary-laws]]).

[F3] Truncated Second Main Theorem: for nonconstant meromorphic $h$ on $\mathbb C$ and distinct sphere targets $b_1,\dots,b_q$ with $q\ge3$, $(q-2)T(r,h)\le\sum_{j=1}^q\bar N(r,b_j;h)+S(r,h)$ outside a set of finite linear measure, where $S(r,h)\le C(\log^+T(r,h)+\log r)$ off that set; when $h$ is rational the error is $O_h(1)$, and for $h$ of finite order it is $O_h(\log r)$, in both cases at every sufficiently large radius ([[thm-nevanlinna-second-main-theorem]]).

[F4] Truncated counts: $\bar N(r,b;h)$ counts the distinct $b$-points of $h$ once, and $N(r,a;h)=\bar N(r,a;h)+N_1(r,a;h)$ with $N_1(r,a;h)\ge0$ for $r\ge1$; each zero of $h$ contributes its multiplicity to $N(r,0;h)$ ([[def-nevanlinna-truncated-and-ramification-counts]]).

[F5] Growth: every nonconstant meromorphic $h$ on $\mathbb C$ has $T(r,h)\to\infty$; $T(r,h)/\log r\to\infty$ when $h$ is transcendental, and $T(r,h)=d\log r+O(1)$ when $h$ is rational of degree $d$ ([[lem-nevanlinna-growth-dominates-logarithm]]).

## Proof

**Proof technique:** normalise the five values to finite values by a Möbius map, compare the common value counts with the zeros of $F-G$, apply the truncated Second Main Theorem to both normalised functions, and use the characteristic growth to reach a contradiction unless $F-G\equiv0$.

1.1 (Möbius normalisation) Pick $b\in\mathbb C\setminus\{a_1,\dots,a_5\}$ and put $R(z):=1/(z-b)$, a Möbius transformation with $R(b)=\infty$; set $F:=R\circ f$, $G:=R\circ g$ and $c_j:=R(a_j)$. Then each $c_j$ is finite (it is $0$ when $a_j=\infty$) and the $c_j$ are distinct; $F$ and $G$ are nonconstant meromorphic, their preimage sets of $c_j$ agree for every $j$, and [F2] gives $T(r,F)=T(r,f)+O(1)$ and $T(r,G)=T(r,g)+O(1)$ as $r\to\infty$. [F2, construct]

2.1 (Common value count versus zeros of the difference) Put $h:=F-G$, a meromorphic function, and $C(r):=\sum_{j=1}^5\bar N(r,c_j;F)$. The sets $\{F=c_j\}$ are pairwise disjoint because the $c_j$ are distinct, and each is contained in $\{h=0\}$, since $F(z)=c_j$ forces $G(z)=c_j$ by the sharing hypothesis. If $h\equiv0$ there is nothing to prove. If $h$ is a nonzero constant, then $C(r)=0$, since no common $c_j$-point can be a zero of $h$. Otherwise $h$ is nonconstant, so for $r\ge1$ the distinct common zeros have nonnegative integrated weights and [F1] applied at target $0$, together with [F2], gives $C(r)\le N(r,0;h)\le T(r,h)+O(1)\le T(r,F)+T(r,G)+O(1)=T(r,f)+T(r,g)+O(1)$. Thus the count bound holds for all large $r$ when $h\not\equiv0$, which is the range used below; from here on assume $h\not\equiv0$. [F1, F2, F4, step 1.1]

3.1 (Second Main Theorem bounds) Apply [F3] with $q=5$ to the nonconstant functions $F$ and $G$ and the distinct finite targets $c_1,\dots,c_5$: outside sets $E_F$ and $E_G$ of finite linear measure, $3T(r,F)\le\sum_{j=1}^5\bar N(r,c_j;F)+S(r,F)$ and $3T(r,G)\le\sum_{j=1}^5\bar N(r,c_j;G)+S(r,G)$; by the shared preimage sets, $\sum_j\bar N(r,c_j;F)=\sum_j\bar N(r,c_j;G)=C(r)$, so adding gives $3\bigl(T(r,F)+T(r,G)\bigr)\le2C(r)+S(r,F)+S(r,G)$ outside $E:=E_F\cup E_G$. [F3, step 1.1, step 2.1, algebra]

4.1 (Growth separation) Off $E$, both errors are negligible compared with $T(r,F)+T(r,G)$: if $F$ is transcendental then $S(r,F)=O(\log^+T(r,F)+\log r)=o(T(r,F))$ because $T(r,F)/\log r\to\infty$ and $T(r,F)\to\infty$ by [F5], while if $F$ is rational then $S(r,F)=O(1)=o(T(r,F))$; in either case $S(r,F)=o(T(r,F)+T(r,G))$, and the same argument applies to $G$, so $S(r,F)+S(r,G)=o\bigl(T(r,F)+T(r,G)\bigr)$ along $r\notin E$, large $r$. [F3, F5, step 3.1, algebra]

5.1 (Contradiction unless the difference vanishes) Substituting the count bound of step 2.1 into step 3.1 and using step 4.1 gives $3(T(r,F)+T(r,G))\le2(T(r,F)+T(r,G))+o(T(r,F)+T(r,G))+O(1)$, hence $T(r,F)+T(r,G)\le o(T(r,F)+T(r,G))+O(1)$ for all large $r\notin E$. Since $E$ has finite measure its complement is unbounded, and along it $T(r,F)+T(r,G)\to\infty$ by [F5] because $F$ and $G$ are nonconstant; choosing $r\notin E$ so large that the $o(1)$ term is below $\tfrac12$ makes the inequality impossible. Hence $h\equiv0$, that is, $F\equiv G$. [F5, step 2.1, step 3.1, step 4.1, algebra]

6.1 (Conclusion) From $F\equiv G$ and $F=R\circ f$, $G=R\circ g$ with $R$ injective on the sphere, $f=R^{-1}\circ F=R^{-1}\circ G=g$ identically. [step 1.1, step 5.1, algebra] ∎

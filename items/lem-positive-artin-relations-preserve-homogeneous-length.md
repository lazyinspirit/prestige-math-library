---
id: lem-positive-artin-relations-preserve-homogeneous-length
kind: lemma
title: "Positive artin relations preserve homogeneous length"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-positive-braid-monoid, def-alphabet-words-and-reduction,
       def-semigroup-and-monoid, def-natural-numbers, def-equivalence-relation,
       thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 4, printed pp. 26-28"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter II, Propositions 2.32-2.33, printed pp. 47-48"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\in\mathbb N$ and let $B_n^{+}$ be the positive braid monoid of
[[def-positive-braid-monoid]], with generators $\overline{\sigma}_i$ and
defining pairs $R_n$. Then:

**(a)** Any two $\equiv^{+}$-equivalent positive words have the same length.
Consequently there is a well-defined function

$$\ell\colon B_n^{+}\longrightarrow\mathbb N,\qquad \ell([w]):=|w|,$$

which is a monoid homomorphism: $\ell(1)=0$ and
$\ell(xy)=\ell(x)+\ell(y)$ for all $x,y\in B_n^{+}$.

**(b)** For every $k\in\mathbb N$ the set
$\{x\in B_n^{+}:\ell(x)=k\}$ is finite; more precisely there are exactly
$|\Sigma_n|^{k}$ positive words of length $k$ over the alphabet
$\Sigma_n=\{\sigma_1,\dots,\sigma_{n-1}\}$, and $B_n^{+}$ contains at most
$|\Sigma_n|^{k}$ elements of length $k$. For $n\ge2$ the alphabet has
$n-1$ letters and the bound reads $(n-1)^k$; for $n\le1$ the alphabet is
empty, so the word count is $1$ for $k=0$ and $0$ for $k\ge1$, and
$B_n^{+}=\{1\}$.

**(c) Conicality.** $\ell(x)=0$ if and only if $x=1$. If
$x_1,\dots,x_r\in B_n^{+}$ and $x_1\cdots x_r=1$, then $x_1=\cdots=x_r=1$; in
particular $xy=1$ forces $x=y=1$, so the only invertible element of
$B_n^{+}$ is $1$.

**(d)** $\ell(\overline{\sigma}_i x)=\ell(x)+1>\ell(x)$ for every $i$ and every
$x\in B_n^{+}$.

No choice principle is used; all arguments are finite inductions on word
length.

## Facts & Assumptions

**Given:** A natural number $n$, the alphabet $\Sigma_n=\{\sigma_1,\dots,\sigma_{n-1}\}$ of $\text{(a)}$, the congruence $\equiv^{+}$, and the monoid $B_n^{+}=\Sigma_n^{*}/\!\equiv^{+}$.

[F1] $B_n^{+}$ is the quotient of the monoid $\Sigma_n^{*}$ of positive words by the smallest congruence $\equiv^{+}$ containing every pair of $R_n$, with product $[u][v]=[uv]$; $\overline{\sigma}_i=[\sigma_i]$; the empty word $\varepsilon$ represents $1$; $B_n^{+}$ has a universal property for monoid homomorphisms sending the $\overline{\sigma}_i$ to elements satisfying the Artin relations ([[def-positive-braid-monoid]]).

[F2] A word is a finite string of letters of an alphabet; the empty word has length $0$; length is additive under concatenation, $|uv|=|u|+|v|$, and the empty word is the only word of length $0$ ([[def-alphabet-words-and-reduction]]).

[F3] A congruence is an equivalence relation compatible with concatenation; the intersection of congruences is a congruence, and $\equiv^{+}$ contains a pair $(u,v)$ exactly when every congruence containing $R_n$ does ([[def-equivalence-relation]], [[def-positive-braid-monoid]]).

[L4] Concatenation of words is associative with two-sided identity $\varepsilon$, and $\mathbb N$ with addition is a monoid with identity $0$, where a sum of natural numbers is $0$ only if each summand is $0$ ([[def-semigroup-and-monoid]], [[def-natural-numbers]]).

[L5] A property of the natural numbers that holds for $0$ and is preserved by passing from $k$ to $k+1$ holds for every $k$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Define a relation $\sim$ on $\Sigma_n^{*}$ by $u\sim v$ if and only if $|u|=|v|$. It is reflexive, symmetric and transitive because equality of natural numbers is, so it is an equivalence relation. [F2, F3, algebra]

1.2 For (b): let $W_k:=\{w\in\Sigma_n^{*}:|w|=k\}$ be the set of positive words of length $k$. We prove $|W_k|=|\Sigma_n|^{k}$ by induction on $k$: $W_0=\{\varepsilon\}$ has one element and $|\Sigma_n|^{0}=1$; and each word of length $k+1$ is $ws$ for a unique $w\in W_k$ and a unique letter $s\in\Sigma_n$, so $|W_{k+1}|=|W_k|\cdot|\Sigma_n|=|\Sigma_n|^{k}\cdot|\Sigma_n|=|\Sigma_n|^{k+1}$. Finally $|\Sigma_n|=n-1$ for $n\ge2$, while for $n\le1$ the set $\{\sigma_1,\dots,\sigma_{n-1}\}$ is empty, which gives the two cases displayed in (b). [given, F2, L4, L5, algebra]

2.1 The relation $\sim$ is compatible with concatenation: if $|u|=|v|$, then for all words $x,y$ we have $|xuy|=|x|+|u|+|y|=|x|+|v|+|y|=|xvy|$, so $xuy\sim xvy$. Hence $\sim$ is a congruence on $\Sigma_n^{*}$. [F2, step 1.1, L4, algebra]

3.1 Every pair of $R_n$ has two sides of equal length: $\sigma_i\sigma_{i+1}\sigma_i$ and $\sigma_{i+1}\sigma_i\sigma_{i+1}$ both have three letters, and $\sigma_i\sigma_j$ and $\sigma_j\sigma_i$ both have two letters. Hence each such pair lies in the congruence $\sim$ of step 2.1. [F2, step 2.1, given]

4.1 Since $\equiv^{+}$ is the *smallest* congruence containing all pairs in $R_n$ and $\sim$ is one such congruence by steps 2.1--3.1, we have $u\equiv^{+}v\Rightarrow u\sim v$, that is, equivalent positive words have equal length. This is (a), first part. [F3, step 2.1, step 3.1, given]

5.1 Hence $\ell(x):=|w|$ for any word $w$ with $x=[w]$ is independent of the chosen representative $w$, and $\ell$ is a function $B_n^{+}\to\mathbb N$; moreover $\ell([\varepsilon])=|\varepsilon|=0$ and $\ell(xy)=\ell([uv])=|uv|=|u|+|v|=\ell(x)+\ell(y)$ for representatives $u$ of $x$ and $v$ of $y$. Thus $\ell$ is a monoid homomorphism and (a) is complete. [F1, F2, step 4.1, L4]

6.1 $\ell(x)=0$ if and only if $x=1$: if $x=[w]$ with $|w|=0$, then $w=\varepsilon$ and $x=[\varepsilon]=1$; conversely $\ell(1)=0$. If $\ell(v)=0$ then $v=1$. [F1, F2, step 5.1]

6.2 The map $W_k\to B_n^{+}$, $w\mapsto[w]$, is a surjection onto the set of elements of length $k$ by step 5.1, and a surjection from a finite set onto a set makes the target finite with cardinality at most that of the source. Hence there are at most $|\Sigma_n|^{k}$ elements of $B_n^{+}$ of length $k$, which is (b). [step 5.1, step 1.2, algebra]

7.1 Let $x_1,\dots,x_r\in B_n^{+}$ with $x_1\cdots x_r=1$. By step 5.1, $\ell(x_1)+\cdots+\ell(x_r)=\ell(1)=0$, and each $\ell(x_i)\in\mathbb N$; a sum of natural numbers is zero only if every summand is zero, so $\ell(x_i)=0$ for all $i$, and step 6.1 gives $x_i=1$. Taking $r=2$ shows $xy=1\Rightarrow x=y=1$; hence if $x$ has a two-sided inverse $y$ (so $xy=1$) then $x=1$, and $1$ is the only invertible element. This is (c). [L4, step 5.1, step 6.1, given]

7.2 For (d): $\ell(\overline{\sigma}_i x)=\ell(\overline{\sigma}_i)+\ell(x)=\ell([\sigma_i])+\ell(x)=1+\ell(x)$ for every $x$, using step 5.1 and $|\sigma_i|=1$. In particular $\ell(\overline{\sigma}_i)>0$, so $\overline{\sigma}_i\ne1$ by step 6.1. [F1, F2, step 5.1, step 6.1]

8.1 Collecting: (a) is steps 4.1--5.1, (b) is steps 1.2 and 6.2, (c) is step 7.1, and (d) is step 7.2. In particular the length function $\ell$ exists, is additive, takes the value $0$ only on $1$, and satisfies $\ell(\overline{\sigma}_i x)>\ell(x)$ for every generator $\overline{\sigma}_i$; these are the homogeneity, conicality and strict-increase properties used later on this page. ∎ [step 5.1, step 6.2, step 7.1, step 7.2]

## Remarks

- Part (a) is the invariance of homogeneous length: the two sides of every defining relation have the same number of letters, so the congruence cannot change length. This is exactly the property that makes the length of a *word* a function of its class.
- Part (b) is the "locally finite" input for later arguments: at each length only finitely many elements exist, so a search over positive words of a fixed length is a finite search.
- Part (d) says in the language of [[def-positive-braid-monoid]] that the word-length function $w\mapsto|w|$ is a right-Noetherianity witness for the Artin presentation: it does not decrease when a generator is appended, and it strictly increases in the presence of a generator because no generator is invertible (step 4.1).

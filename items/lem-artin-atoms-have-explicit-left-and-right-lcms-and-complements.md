---
id: lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements
kind: lemma
title: "Artin atoms have explicit left and right lcms and complements"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-artin-right-complements-and-word-reversing,
       def-left-and-right-divisibility-for-positive-braids,
       lem-artin-positive-word-reversing-is-complete,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative,
       def-positive-braid-monoid,
       lem-positive-artin-relations-preserve-homogeneous-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed pp. 26-27 (lcm of two atoms)"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter II, Example 4.20, printed pp. 66-67"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, let $\Sigma_n=\{\sigma_1,\dots,\sigma_{n-1}\}$ be the alphabet of
the positive braid monoid $B_n^{+}$ of [[def-positive-braid-monoid]] — its
elements are called **atoms** on this page — let $\Theta$ be the right
complement of [[def-artin-right-complements-and-word-reversing]], and let
$\preccurlyeq_L$, $\preccurlyeq_R$ and the lcm notation $\vee_L,\vee_R$ be as in
[[def-left-and-right-divisibility-for-positive-braids]]. Then, for all
$i,j\in\{1,\dots,n-1\}$:

**(a) Explicit complements.** $\Theta(\sigma_i,\sigma_j)$ equals $\varepsilon$
if $i=j$, equals the two-letter word $\sigma_j\sigma_i$ if $|i-j|=1$, and equals
the one-letter word $\sigma_j$ if $|i-j|\ge2$; symmetrically for
$\Theta(\sigma_j,\sigma_i)$.

**(b) Explicit left lcms.** The elements $\sigma_i$ and $\sigma_j$ always admit
a left-lcm, namely

$$\sigma_i\vee_L\sigma_j=\begin{cases}\sigma_i,& i=j,\\ \sigma_i\sigma_j,& |i-j|\ge2,\\ \sigma_i\sigma_j\sigma_i,& |i-j|=1.\end{cases}$$

The commuting two-letter word of the distant case is the product in either
order, and the three-letter word of the adjacent case is the common value of
$\sigma_i(\sigma_j\sigma_i)$ and $\sigma_j(\sigma_i\sigma_j)$ coming from the
braid relation.

**(c) The common multiple is the displayed multiple, and it is computed by
reversing.** With $\Theta$ as above,
$\sigma_i\,\Theta(\sigma_i,\sigma_j)=\sigma_j\,\Theta(\sigma_j,\sigma_i)$ in
$B_n^{+}$, and this common element is $\sigma_i\vee_L\sigma_j$; when $i\ne j$
it has length $2$ for distant indices and length $3$ for adjacent indices.

**(d) Divisibility test for atoms.** $\sigma_j\preccurlyeq_L\sigma_i$ holds if
and only if $i=j$; equivalently $\Theta(\sigma_i,\sigma_j)=\varepsilon$ if and
only if $i=j$. In particular distinct atoms are incomparable in
$\preccurlyeq_L$, and no atom is a proper left divisor of another atom.

**(e) Right lcms.** The right-lcm exists and equals the same element:
$\sigma_i\vee_R\sigma_j=\sigma_i\vee_L\sigma_j$; the common multiple of (c) is
also a right-lcm.

**(f) Length.** $\ell(\sigma_i\vee_L\sigma_j)$ is $1$ when $i=j$, $2$ when
$|i-j|\ge2$ and $3$ when $|i-j|=1$; the cases are exhaustive for
$n\ge2$, and for $n=2$ only the case $i=j=1$ occurs. No choice principle is
used.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, the alphabet $\Sigma_n$, the positive braid monoid $B_n^{+}$ with its length $\ell$, the complement $\Theta$, and the divisibility orders $\preccurlyeq_L,\preccurlyeq_R$ with their lcm notation.

[F1] The recursion rules for $\Theta$: $\Theta(s,\varepsilon)=\varepsilon$, $\Theta(s,tv)=\theta(s,t)\,\Theta(\theta(t,s),v)$ for letters $s,t$ and words $v$, and $\Theta(su',v)=\Theta(u',\Theta(s,v))$; the syntactic complement is $\theta(\sigma_i,\sigma_i)=\varepsilon$, $\theta(\sigma_i,\sigma_j)=\sigma_j\sigma_i$ for $|i-j|=1$ and $\theta(\sigma_i,\sigma_j)=\sigma_j$ for $|i-j|\ge2$; all these values are defined ([[def-artin-right-complements-and-word-reversing]]).

[F2] $B_n^{+}=\Sigma_n^{*}/\!\equiv^{+}$ with $[uv]=[u][v]$, $\ell([w])=|w|$, and $\ell(x)=0$ only for $x=1$; for distinct indices $\sigma_i\ne\sigma_j$ in $B_n^{+}$, since a relation of length $1$ has a word of length $1$ on each side ([[def-positive-braid-monoid]], [[lem-positive-artin-relations-preserve-homogeneous-length]]).

[L3] $\sigma_i\preccurlyeq_L b$ means $b=\sigma_i c$ for some $c\in B_n^{+}$; $\vee_L$ denotes the least common left multiple of
[[def-left-and-right-divisibility-for-positive-braids]], and $\vee_R$ the least common right multiple.

[L4] **Complements and conditional lcms** ([[lem-artin-positive-word-reversing-is-complete]]): if $\Theta(u,v)$ is defined then $u\,\Theta(u,v)\equiv^{+}v\,\Theta(v,u)$; whenever $[u]$ and $[v]$ admit a common right multiple, $[u\Theta(u,v)]$ is their right-lcm; and $\Theta(u,v)=\varepsilon$ if and only if $[u]=[v]c$ for some $c\in B_n^{+}$.

[L5] **Reversal** ([[lem-the-positive-braid-monoid-is-left-and-right-cancellative]]): $\rho([w])=[w^{\mathrm{rev}}]$ is an involutive anti-automorphism of $B_n^{+}$, and by [[def-left-and-right-divisibility-for-positive-braids]] it exchanges the two divisibility orders: $a\preccurlyeq_L b\Leftrightarrow\rho(a)\preccurlyeq_R\rho(b)$. In particular $\rho(\sigma_i)=\sigma_i$ for every atom, reversal of a one-letter word being that word.



## Proof

**Proof technique:** direct.

1.1 **The complements are the syntactic values.** For letters $s,t$: $\Theta(s,t)=\Theta(s,t\varepsilon)=\theta(s,t)\,\Theta(\theta(t,s),\varepsilon)=\theta(s,t)\cdot\varepsilon=\theta(s,t)$, by the recursion [F1] and $\Theta(w,\varepsilon)=\varepsilon$. Substituting the syntactic values gives (a): $\Theta(\sigma_i,\sigma_j)=\varepsilon$ for $i=j$, $=\sigma_j\sigma_i$ for $|i-j|=1$ and $=\sigma_j$ for $|i-j|\ge2$, with the symmetric expression for $\Theta(\sigma_j,\sigma_i)$. In particular all these complements are defined. [F1]

1.2 **The displayed words are common multiples.** By [L4], $\sigma_i\Theta(\sigma_i,\sigma_j)\equiv^{+}\sigma_j\Theta(\sigma_j,\sigma_i)$. Evaluating with 1.1: if $i=j$ both sides are $\sigma_i\varepsilon=\sigma_i$; if $|i-j|\ge2$ they are $\sigma_i\sigma_j$ and $\sigma_j\sigma_i$, which are equal in $B_n^{+}$ by the far-commutation pair; if $|i-j|=1$ they are $\sigma_i\sigma_j\sigma_i$ and $\sigma_j\sigma_i\sigma_j$, equal by the braid pair. So in every case the displayed word is a common left multiple of $\sigma_i$ and $\sigma_j$ (a left multiple of $\sigma_i$, and of $\sigma_j$ by the equality just proved). [F1, L4]

1.3 **Boundary cases.** If $n=2$ there is a single atom, $i=j=1$, and only the case $i=j$ of (a)--(f) occurs; the listed values are then $\Theta(\sigma_1,\sigma_1)=\varepsilon$, $\sigma_1\vee_L\sigma_1=\sigma_1$ and $\ell=1$, all correct since every common multiple of $\sigma_1$ and itself is a multiple of $\sigma_1$. The adjacent case requires $1\le i<j\le n-1$ with $j=i+1$, so it occurs exactly when $n\ge3$; the distant case needs $j\ge i+2$, so it occurs exactly when $n\ge4$. For $n\le1$ there are no atoms and the statements are vacuous; the hypothesis $n\ge2$ of the statement covers the remaining cases. [F1, F2]

2.1 **Leastness.** Since $a\preccurlyeq_L m$ means $m=ac$, a common left multiple of $\sigma_i,\sigma_j$ in the sense of [L3] is exactly a common right multiple of the two elements, so the join $\sigma_i\vee_L\sigma_j$ is precisely the least common right multiple. By the preceding step such a common right multiple exists, so the second assertion of [L4] applies and shows that $[\sigma_i\Theta(\sigma_i,\sigma_j)]$ is the right-lcm, hence equals $\sigma_i\vee_L\sigma_j$. Comparing with the values computed in 1.2 gives (b) and the first half of (c); the length statement in (f) follows from $\ell([w])=|w|$ [F2] applied to the three displayed words, of lengths $1,2,3$. [F2, L3, L4, step 1.1, step 1.2]

2.2 **The divisibility test (d).** By the last assertion of [L4] with $u=\sigma_i$, $v=\sigma_j$: $\Theta(\sigma_i,\sigma_j)=\varepsilon$ if and only if $\sigma_i=\sigma_j c$ for some $c\in B_n^{+}$, that is, if and only if $\sigma_j\preccurlyeq_L\sigma_i$ [L3]. Now $\sigma_j\preccurlyeq_L\sigma_i$ means $\sigma_i=\sigma_j c$, hence $1=\ell(\sigma_i)=\ell(\sigma_j)+\ell(c)=1+\ell(c)$, so $\ell(c)=0$, $c=1$ and $\sigma_i=\sigma_j$ [F2]; conversely $\sigma_i\preccurlyeq_L\sigma_i$ is reflexivity. Finally $\sigma_i=\sigma_j$ holds in $B_n^{+}$ only for $i=j$, because distinct generators are distinct classes [F2]. Hence $\Theta(\sigma_i,\sigma_j)=\varepsilon\Leftrightarrow i=j$, and for $i\ne j$ the atoms are incomparable in $\preccurlyeq_L$. [F2, L3, L4, step 1.1]

3.1 **Right-hand versions (e).** Reversal fixes atoms, $\rho(\sigma_i)=\sigma_i$ [L5]. If $m=\sigma_i\vee_L\sigma_j$, then $\rho$ exchanges the sides, so $\rho(m)$ is a common right multiple of $\rho(\sigma_j)=\sigma_j$ and $\rho(\sigma_i)=\sigma_i$: indeed $\sigma_j\preccurlyeq_L m$ gives $\rho(\sigma_j)\preccurlyeq_R\rho(m)$, and likewise for $i$; and if $m'$ is any common right multiple of $\sigma_i,\sigma_j$, applying $\rho$ gives a common left multiple $\rho(m')$ of $\rho(\sigma_i),\rho(\sigma_j)$, hence $m\preccurlyeq_L\rho(m')$, so $\rho(m)\preccurlyeq_R m'$. Therefore $\rho(m)=\sigma_i\vee_R\sigma_j$, and since $\rho$ is an involution with $\rho(\sigma_i)=\sigma_i$ and $\rho(m)=m$ for the words of (b) (reversal of $\sigma_i\sigma_j$ is $\sigma_j\sigma_i$, and the three-letter word $\sigma_i\sigma_j\sigma_i$ is a palindrome when $|i-j|=1$), the right-lcm equals the left-lcm listed in (b). The common multiple of (c) is then also a right-lcm. [L5, step 2.1]

4.1 **Assembly.** Part (a) is step 1.1, parts (b) and (f) are step 2.1, part (c) is step 1.2 together with the boundary discussion of step 1.3, part (d) is step 2.2 and part (e) is step 3.1. Every step is a finite evaluation of the recursion or a computation with lengths; no step uses a choice principle, and no lower bound in the divisibility orders is invoked. ∎ [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1]

## Remarks

- Statement (c) is the reason the criterion of [[lem-artin-positive-word-reversing-is-complete]] is used rather than mere common-multiple status: leastness of $\sigma_i\sigma_j\sigma_i$ among the common left multiples of two adjacent atoms is a genuine divisibility statement (every common multiple of $\sigma_i$ and $\sigma_j$ is a left multiple of the three-letter word), and it is what later forces $\Delta$ to be the join of the atoms.
- Sources: GM Section 4, printed pp. 26--27 for the displayed joins $\sigma_i\vee\sigma_j$; Dehornoy et al., Chapter II, Example 4.20, printed pp. 66--67, for the same three complement values computed by reversing ($\theta^*(\theta(\sigma_1,\sigma_2),\theta(\sigma_1,\sigma_3))=\sigma_3\sigma_2\sigma_1$ etc.), which match 1.1.
- For $n\ge4$ the *sharp* cube condition fails ([[lem-artin-right-complements-satisfy-the-cube-condition]]); nothing here uses sharpness: the criteria invoked are the ordinary completeness and lcm statements of item [L4].
- No choice principle and no infinite construction: all three cases are single evaluations of the recursion on letters, and the leastness statement is imported from the finite reversing criterion.

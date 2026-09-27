---
id: lem-every-positive-braid-divides-a-power-of-delta-on-both-sides
kind: lemma
title: "Every positive braid divides a power of the half twist on both sides"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-each-artin-atom-divides-delta-on-both-sides,
       lem-artin-positive-word-reversing-is-complete,
       def-artin-right-complements-and-word-reversing,
       lem-conjugation-by-delta-reverses-artin-generators,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative,
       def-garside-half-twist-and-simple-positive-braid,
       def-left-and-right-divisibility-for-positive-braids,
       def-positive-braid-monoid,
       lem-positive-artin-relations-preserve-homogeneous-length]
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
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed p. 28 (a ≼ Δ^m and Δ^m ≽ a for some m)"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter IX, Section 1.3, printed pp. 439-440"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\in\mathbb N$, let $B_n^{+}$ be the positive braid monoid of
[[def-positive-braid-monoid]] with its homogeneous length $\ell$, its negation
free half twist $\Delta=\Delta_n$ of
[[def-garside-half-twist-and-simple-positive-braid]] (of length $N=n(n-1)/2$),
and its divisibility orders
$\preccurlyeq_L,\preccurlyeq_R$
([[def-left-and-right-divisibility-for-positive-braids]]). Then:

**(a) Left divisibility into a $\Delta$-power.** For every $a\in B_n^{+}$ there
exist $k\in\mathbb N$ and $c\in B_n^{+}$ with
$\Delta^{k}=a\,c$; equivalently $a\preccurlyeq_L\Delta^{k}$.

**(b) Right divisibility into a $\Delta$-power.** For every $a\in B_n^{+}$
there exist $k'\in\mathbb N$ and $c'\in B_n^{+}$ with
$\Delta^{k'}=c'\,a$; equivalently $a\preccurlyeq_R\Delta^{k'}$.

**(c) Common $\Delta$-power multiples.** For all $a,b\in B_n^{+}$ there is
$m\in\mathbb N$ such that $\Delta^{m}$ is both a common left multiple and a
common right multiple of $a$ and $b$; more precisely, if
$a\preccurlyeq_L\Delta^{k}$ and $b\preccurlyeq_L\Delta^{k'}$, then
$a\preccurlyeq_L\Delta^{m}$ and $b\preccurlyeq_L\Delta^{m}$ for every
$m\ge\max(k,k')$, and the analogous statement holds for $\preccurlyeq_R$. In
particular every pair of positive braids admits a common right multiple, so
the right complement $\Theta$ of
[[def-artin-right-complements-and-word-reversing]] is defined on every pair of
positive words ([[lem-artin-positive-word-reversing-is-complete]]).

For $n\le1$ the monoid is trivial, $\Delta=1$, and the assertions hold with
$k=k'=m=0$. The proof is effective in the sense that a dividing power is
produced by reading a word for $a$ from left to right; no search over words is
performed and no choice principle is used.

## Facts & Assumptions

**Given:** A natural number $n$, the monoid $B_n^{+}$ with its atoms $\sigma_i$ and length $\ell$, the half twist $\Delta$ with blocks $T_k$ and the index-reversal automorphism $\tau$ ($\sigma_j\mapsto\sigma_{n-j}$), and the orders $\preccurlyeq_L,\preccurlyeq_R$.

[F1] $B_n^{+}$ is generated as a monoid by the atoms; $\ell$ is additive, $\ell(x)=0$ only for $x=1$, and $\ell(\sigma_i)=1$ ([[def-positive-braid-monoid]], [[lem-positive-artin-relations-preserve-homogeneous-length]]).

[F2] $a\preccurlyeq_Lb\iff\exists c\,(b=ac)$ and $a\preccurlyeq_Rb\iff\exists c\,(b=ca)$; both relations are partial orders, the left order is preserved by left multiplication and the right order by right multiplication, and each divisibility witness is unique by cancellation ([[def-left-and-right-divisibility-for-positive-braids]], [[lem-the-positive-braid-monoid-is-left-and-right-cancellative]]).

[F3] **The half twist identities** ([[lem-conjugation-by-delta-reverses-artin-generators]], [[def-garside-half-twist-and-simple-positive-braid]]): $\Delta w\equiv^{+}\tau(w)\Delta$ and $w\Delta\equiv^{+}\Delta\tau(w)$ for every positive word $w$, where $\tau$ is the index-reversal automorphism $\sigma_j\mapsto\sigma_{n-j}$; $\tau(\Delta)=\Delta$; and $\tau$ is an automorphism of $B_n^{+}$ because it permutes the defining relations.

[F4] **Atoms divide the half twist** ([[lem-each-artin-atom-divides-delta-on-both-sides]]): for every $i$ there is $R_i\in B_n^{+}$ with $\Delta=\sigma_iR_i$; in particular $\Delta=\sigma_iR_i$ holds for every atom and every $n\ge1$ for which the atom exists (for $n\le1$ there is no atom and $\Delta=1$).

[F5] **Reversal** ([[lem-the-positive-braid-monoid-is-left-and-right-cancellative]]): the word reversal $w\mapsto w^{\mathrm{rev}}$ induces an involutive anti-automorphism $\rho$ of $B_n^{+}$ with $\rho(xy)=\rho(y)\rho(x)$ and $\rho(\sigma_j)=\sigma_j$; it satisfies $\rho(\Delta)=\Delta$ ([[lem-conjugation-by-delta-reverses-artin-generators]]), and it exchanges the two divisibility orders: $a\preccurlyeq_Lb\iff\rho(a)\preccurlyeq_R\rho(b)$ and $a\preccurlyeq_Rb\iff\rho(a)\preccurlyeq_L\rho(b)$ ([[def-left-and-right-divisibility-for-positive-braids]]).

## Proof

**Proof technique:** direct.

1.1 **The extension step.** Let $a\in B_n^{+}$, $k\in\mathbb N$ with $a\preccurlyeq_L\Delta^{k}$, and let $\sigma_i$ be an atom; write $\Delta^{k}=ac$ with $c\in B_n^{+}$. Then associativity and the mirror identity [F3] for the positive word $c$, followed by the atom factorization [F4], give the chain of equalities $\Delta^{k+1}=\Delta^{k}\Delta=a(c\Delta)=a(\Delta\tau(c))=a(\sigma_iR_i\tau(c))$, whose last factor $\sigma_iR_i\tau(c)$ lies in $B_n^{+}$. Hence $a\sigma_i\preccurlyeq_L\Delta^{k+1}$. [F1, F2, F3, F4]

2.1 **Induction along a word.** Every element $a\in B_n^{+}$ is the class of a positive word $w$, and we prove by induction on $|w|$ that $[w]\preccurlyeq_L\Delta^{k}$ for some $k\in\mathbb N$: for $w=\varepsilon$ we have $[\varepsilon]=1=\Delta^{0}$, and if $w=w'\sigma_i$ with $[w']\preccurlyeq_L\Delta^{k}$ then $[w]=[w']\sigma_i\preccurlyeq_L\Delta^{k+1}$ by step 1.1. This proves (a). [F1, F2, step 1.1]

3.1 **The right-hand version.** Let $a\in B_n^{+}$ and apply step 2.1 to $\rho(a)$: there is $k$ with $\rho(a)\preccurlyeq_L\Delta^{k}$, say $\Delta^{k}=\rho(a)c$ with $c\in B_n^{+}$. Applying the anti-automorphism $\rho$ and using $\rho(\Delta)=\Delta$, $\rho\circ\rho=\mathrm{id}$ and $\rho(xy)=\rho(y)\rho(x)$ [F5] gives $\Delta^{k}=\rho(\Delta^{k})=\rho(c)\rho(\rho(a))=\rho(c)a$, so $a\preccurlyeq_R\Delta^{k}$. This is (b). [F2, F5, step 2.1]

4.1 **Common multiples.** Let $a,b\in B_n^{+}$. By (a) and (b), choose four exponents $k_a,k_b,r_a,r_b$ such that $a\preccurlyeq_L\Delta^{k_a}$, $b\preccurlyeq_L\Delta^{k_b}$, $a\preccurlyeq_R\Delta^{r_a}$ and $b\preccurlyeq_R\Delta^{r_b}$, and put $m:=\max(k_a,k_b,r_a,r_b)$. If $\Delta^{k_a}=ac$, then $\Delta^{m}=\Delta^{k_a}\Delta^{m-k_a}=a(c\Delta^{m-k_a})$ exhibits $a\preccurlyeq_L\Delta^{m}$, and the same computation applies to $b$. If $\Delta^{r_a}=c'a$, then $\Delta^{m}=\Delta^{m-r_a}\Delta^{r_a}=(\Delta^{m-r_a}c')a$ exhibits $a\preccurlyeq_R\Delta^{m}$, and likewise for $b$. Thus the same power is a common multiple on both sides. [F1, F2, step 2.1, step 3.1]

5.1 **Totality of the right complement.** If $u,v$ are positive words then $[u]$ and $[v]$ admit the common right multiple $\Delta^{m}$ produced in step 4.1. By the conditional termination criterion of [[lem-artin-positive-word-reversing-is-complete]], right-reversing of $u^{-1}v$ therefore reaches a terminal positive--negative path. Reversing, say, the leftmost negative--positive adjacent pair at each stage gives a fixed finite algorithm for its terminal complement pair $\Theta(u,v),\Theta(v,u)$; the right-complemented uniqueness lemma makes the output independent of that fixed schedule. Thus $\Theta$ is total for this Artin presentation. Termination follows from the explicit common $\Delta$ power and the conditional criterion, not from any bound by the input-word length. [F2, step 4.1]

6.1 **Assembly.** Part (a) is step 2.1, part (b) is step 3.1, and part (c) is step 4.1 together with step 5.1; for $n\le1$ there are no atoms, $\Delta=1$ and $k=k'=m=0$ work. Every induction is on the length of an explicit word, all products are finite, and no inverse, no group and no choice principle occur. ∎ [step 2.1, step 3.1, step 4.1, step 5.1]

## Remarks

- **Why the induction multiplies on the right.** Step 1.1 appends the atom $\sigma_i$ to $a$ on the right and *increases* the power of $\Delta$ by one; the mechanism is that $\Delta$ commutes with every element up to the index-reversal automorphism $\tau$ (that is the content of $\Delta w=\tau(w)\Delta$), and that $\Delta$ itself begins with any prescribed atom $\sigma_i$ with complement $R_i$. The mirror identity is used exactly once in step 1.1, for the word $c$, and the atom factorization is used once, for the atom through which the *new* letter enters. Comparing with GM Section 4, this is the sentence "by induction on the length, for every $a\in B_n^{+}$ one has $a\preccurlyeq\Delta^{m}$ and $\Delta^{m}\succcurlyeq a$ for some $m$".
- **What is *not* used.** The least common multiple theorem ([[thm-positive-braids-have-left-and-right-gcds-and-lcms]]) is not used; only the conditional direction "a common right multiple exists $\Rightarrow$ the reversing of the pair terminates" of [[lem-artin-positive-word-reversing-is-complete]] enters, in step 5.1, and it is used only to record that the common multiples produced here are the ones that make right-reversing total. In particular the argument is not circular: it produces common multiples of a very special shape before any general lcm theory is available.
- **Conventions.** For $n=0,1$ the notation $\Delta^{k}$ for $k=0$ is $1$ and no atom occurs; the statements of (a) and (b) are then satisfied by $k=k'=0$. For $n=2$ every positive braid is a power of the single atom $\sigma_1=\Delta$, so the dividing power is $k=\ell(a)$.
- Nothing here uses a choice principle: the word induction is finite and the exponents are natural numbers computed from a word for $a$.

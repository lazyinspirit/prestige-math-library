---
id: lem-the-positive-braid-monoid-is-left-and-right-cancellative
kind: lemma
title: "The positive braid monoid is left and right cancellative"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-positive-braid-monoid, lem-artin-positive-word-reversing-is-complete,
       lem-positive-artin-relations-preserve-homogeneous-length,
       def-alphabet-words-and-reduction, thm-induction-principle]
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
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed pp. 26-27 (cancellativity step)"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter II, Proposition 4.44 and Corollary 4.45, printed p. 78"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\in\mathbb N$, let $\Sigma_n$ be the alphabet of
[[def-positive-braid-monoid]] with the congruence $\equiv^{+}$ and the monoid
$B_n^{+}=\Sigma_n^{*}/\!\equiv^{+}$, and let $w\mapsto w^{\mathrm{rev}}$ denote
reversal of words. Then:

**(a) Reversal descends to an involutive anti-automorphism.** If
$u\equiv^{+}v$ then $u^{\mathrm{rev}}\equiv^{+}v^{\mathrm{rev}}$; consequently
$\rho([w]):=[w^{\mathrm{rev}}]$ is a well-defined bijection
$\rho\colon B_n^{+}\to B_n^{+}$ satisfying $\rho\circ\rho=\mathrm{id}$ and
$\rho(xy)=\rho(y)\rho(x)$ for all $x,y\in B_n^{+}$.

**(b) Left cancellation.** $xa=xb$ implies $a=b$, for all
$a,b,x\in B_n^{+}$.

**(c) Right cancellation.** $ax=bx$ implies $a=b$, for all
$a,b,x\in B_n^{+}$.

**(d) Dictionary.** For positive words $u,v,w$ one has $[u]=[v]$ if and only if
$[u^{\mathrm{rev}}]=[v^{\mathrm{rev}}]$, and $[w]=[u][v]$ if and only if
$[w^{\mathrm{rev}}]=[v^{\mathrm{rev}}][u^{\mathrm{rev}}]$. Thus reversal
translates left cancellation into right cancellation and exchanges the two
sides of every product equation.

For $n\le1$ the alphabet is empty, $B_n^{+}$ is the one-element monoid, and
every statement is trivial. No choice principle is used.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, the alphabet $\Sigma_n$, the congruence $\equiv^{+}$, the monoid $B_n^{+}$ and word reversal $w\mapsto w^{\mathrm{rev}}$.

[F1] $\equiv^{+}$ is the smallest congruence on $\Sigma_n^{*}$ containing the braid pairs $\sigma_i\sigma_{i+1}\sigma_i\equiv^{+}\sigma_{i+1}\sigma_i\sigma_{i+1}$ ($1\le i\le n-2$) and the far-commutation pairs $\sigma_i\sigma_j\equiv^{+}\sigma_j\sigma_i$ ($|i-j|\ge2$); $B_n^{+}=\Sigma_n^{*}/\!\equiv^{+}$ with $[u][v]=[uv]$, and $[u]=[v]$ holds if and only if $u\equiv^{+}v$ ([[def-positive-braid-monoid]], [[def-alphabet-words-and-reduction]]).

[F2] $u\equiv^{+}v$ implies $|u|=|v|$, and $\ell([w]):=|w|$ is a well-defined monoid homomorphism $B_n^{+}\to\mathbb N$ ([[lem-positive-artin-relations-preserve-homogeneous-length]]).

[L3] **Left cancellation, in the form proved by reversing.** For all $x,u,v\in B_n^{+}$, $xu=xv$ implies $u=v$ ([[lem-artin-positive-word-reversing-is-complete]], part (d)).

[L4] Induction on the natural numbers, and the elementary theory of the free monoid $\Sigma_n^{*}$ of [[def-alphabet-words-and-reduction]]: reversal of words is the **local** recursive definition $(\varepsilon)^{\mathrm{rev}}=\varepsilon$, $(ws)^{\mathrm{rev}}=s\,w^{\mathrm{rev}}$ for a letter $s$, whose well-definedness is an instance of induction ([[thm-induction-principle]]); it satisfies $(uv)^{\mathrm{rev}}=v^{\mathrm{rev}}u^{\mathrm{rev}}$, $(w^{\mathrm{rev}})^{\mathrm{rev}}=w$ and $|w^{\mathrm{rev}}|=|w|$ by induction on the length of $w$.



## Proof

**Proof technique:** direct.

1.1 **Reversal is an involution of free words.** By [L4], $w\mapsto w^{\mathrm{rev}}$ is a well-defined involution of $\Sigma_n^{*}$ with $(uv)^{\mathrm{rev}}=v^{\mathrm{rev}}u^{\mathrm{rev}}$ and $|w^{\mathrm{rev}}|=|w|$; in particular $\varepsilon^{\mathrm{rev}}=\varepsilon$ and reversal is a bijection of the free monoid fixing no letter-type but permuting letters by identity. [L4]

1.2 **Reversal preserves the defining pairs, hence the congruence.** The set $R_n$ of defining pairs of [F1] is stable under reversal: for indices with $|i-j|\ge2$, $(\sigma_i\sigma_j)^{\mathrm{rev}}=\sigma_j\sigma_i$ and $(\sigma_j\sigma_i)^{\mathrm{rev}}=\sigma_i\sigma_j$, so the pair is preserved; for the braid pair, $(\sigma_i\sigma_{i+1}\sigma_i)^{\mathrm{rev}}=\sigma_i\sigma_{i+1}\sigma_i$ and $(\sigma_{i+1}\sigma_i\sigma_{i+1})^{\mathrm{rev}}=\sigma_{i+1}\sigma_i\sigma_{i+1}$, so each side is fixed and the pair is preserved. Now suppose $u\equiv^{+}v$: by [F1] there is a finite chain $u=w_0,w_1,\dots,w_m=v$ in which each step replaces a subword by the other side of a pair in $R_n$; by induction on $m$ ([[thm-induction-principle]]), if $w_{k+1}$ is obtained from $w_k$ by replacing $a$ with $b$ inside the decomposition $w_k=xay$, $w_{k+1}=xby$ where $\{a,b\}\in R_n$, then $w_{k+1}^{\mathrm{rev}}=y^{\mathrm{rev}}b^{\mathrm{rev}}x^{\mathrm{rev}}$ is obtained from $w_k^{\mathrm{rev}}=y^{\mathrm{rev}}a^{\mathrm{rev}}x^{\mathrm{rev}}$ by replacing $a^{\mathrm{rev}}$ with $b^{\mathrm{rev}}$, and $\{a^{\mathrm{rev}},b^{\mathrm{rev}}\}=\{a,b\}\in R_n$ by the stability just proved; so $w_k^{\mathrm{rev}}\equiv^{+}w_{k+1}^{\mathrm{rev}}$ and transitivity gives $u^{\mathrm{rev}}\equiv^{+}v^{\mathrm{rev}}$. [F1, L4]

1.3 **Left cancellation (b).** This is [L3], stated there for arbitrary $x$; the case $x=1$ is trivial, and for $n\le1$ both sides lie in the one-element monoid. Since $\ell$ takes natural values [F2], the case $x=1$ is also covered: $\ell(x)=0$ means $x=[\varepsilon]=1$, and then $xa=xb$ reads $a=b$. [F2, L3]

2.1 **The induced map is an involutive anti-automorphism.** By 1.2 the assignment $\rho([w]):=[w^{\mathrm{rev}}]$ is well defined on $\equiv^{+}$-classes; it is a bijection because $w\mapsto w^{\mathrm{rev}}$ is an involution of $\Sigma_n^{*}$ (1.1) and $u\equiv^{+}v$ implies $u^{\mathrm{rev}}\equiv^{+}v^{\mathrm{rev}}$ in both directions, so $\rho\circ\rho=\mathrm{id}$. For classes $x=[u]$, $y=[v]$ we get $\rho(xy)=\rho([uv])=[(uv)^{\mathrm{rev}}]=[v^{\mathrm{rev}}u^{\mathrm{rev}}]=[v^{\mathrm{rev}}][u^{\mathrm{rev}}]=\rho(y)\rho(x)$, using 1.1 and the multiplicativity of the quotient monoid [F1]. [F1, L4, step 1.1, step 1.2]

3.1 **Right cancellation (c).** Assume $ax=bx$ in $B_n^{+}$. Applying the anti-automorphism $\rho$ of step 2.1 gives $\rho(ax)=\rho(x)\rho(a)$ and $\rho(bx)=\rho(x)\rho(b)$, hence $\rho(x)\rho(a)=\rho(x)\rho(b)$; left cancellation (step 1.3, with $x$ replaced by $\rho(x)$) gives $\rho(a)=\rho(b)$, and applying $\rho$ again gives $a=\rho(\rho(a))=\rho(\rho(b))=b$ by step 2.1. [step 1.3, step 2.1]

3.2 **The dictionary (d).** For positive words: $[u]=[v]$ implies $[u^{\mathrm{rev}}]=[v^{\mathrm{rev}}]$ by step 1.2, and the converse follows by applying step 1.2 to $u^{\mathrm{rev}},v^{\mathrm{rev}}$ together with the involution of step 1.1. For products, $\rho([w])=[w^{\mathrm{rev}}]$ and, by step 2.1, $\rho([u][v])=[v^{\mathrm{rev}}][u^{\mathrm{rev}}]$; since $\rho$ is injective, $[w]=[u][v]$ holds if and only if $[w^{\mathrm{rev}}]=[v^{\mathrm{rev}}][u^{\mathrm{rev}}]$. Lengths agree, $|w^{\mathrm{rev}}|=|w|$ (step 1.1), as [F2] requires. [F2, step 1.1, step 1.2, step 2.1]

4.1 **Assembly.** Part (a) is steps 1.2 and 2.1, part (b) is step 1.3, part (c) is step 3.1 and part (d) is step 3.2; the case $n\le1$ was noted in the statement and each step above also holds there. Every step is a finite computation or an induction over $\mathbb N$; no choice principle occurs. ∎ [step 1.2, step 1.3, step 2.1, step 3.1, step 3.2]

## Remarks

- The conventions are those of [[def-positive-braid-monoid]]: $\equiv^{+}$ is generated by the two families of Artin relations, and $[uv]=[u][v]$, so that $B_n^{+}$ is the monoid presented by the positive relations. Reversal is an anti-automorphism, not an automorphism: $\rho(xy)=\rho(y)\rho(x)$.
- Left cancellation is proved in [[lem-artin-positive-word-reversing-is-complete]] by the source's criterion for right-reversing (Corollary 4.45); the present item records it in the class-level form used by the divisibility items that follow and adds the reversal dictionary, which is what turns left-divisibility into right-divisibility throughout this page.
- Sources: GM Section 4, printed pp. 26--27 (cancellativity step), where cancellation is used to obtain lattice properties; Dehornoy et al., Chapter II, Proposition 4.44 and Corollary 4.45, printed p. 78, for the reversing proof reused here.
- No axiom of choice, no transfinite induction and no infinite construction is used: reversal is an operation on finite words and every induction is over $\mathbb N$.

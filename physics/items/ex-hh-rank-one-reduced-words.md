---
id: ex-hh-rank-one-reduced-words
kind: example
title: "Reduced words in rank one"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 4
deps: [def-hh-coxeter-matrix-word-group-and-length, def-hh-geometric-coxeter-representation-and-roots, lem-hh-dihedral-root-recurrence-and-root-sign, thm-hh-coxeter-exchange-deletion-and-faithfulness]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s\}$ and $m(s,s)=1$, so that the relator set of the presentation of
[[def-hh-coxeter-matrix-word-group-and-length]] is $R=\{s^2\}$ and
$W=F(\{s\})/\langle\!\langle s^2\rangle\!\rangle$. Then:

1. Every element of $W$ is $1$ or $s$, with $s^2=1$ and $s\ne1$; hence
$W\cong\mathbb{Z}/2$.
2. $\ell(1)=0$ and $\ell(s)=1$.
3. A word $(s,\dots,s)$ of length $k$ has value $s^k$, which is $1$ for even
$k$ and $s$ for odd $k$. Hence the only reduced words are the empty word
$(\;)$ for $1$ and the word $(s)$ for $s$, and every word of length $k\ge2$ is
nonreduced and reduces to a reduced word by repeated deletion of two letters.
4. The reflection set is $T=\{s\}$, the root set is
$\Phi=\{\alpha_s,-\alpha_s\}$ (because $\sigma_s(\alpha_s)=-\alpha_s$), and the
signed action on $\{\pm1\}\times\{s\}$ is $(\varepsilon,s)\cdot s=(-\varepsilon,s)$,
which is faithful.

## Facts & Assumptions

**Given:** The Coxeter matrix on $S=\{s\}$ with $m(s,s)=1$; the presented group
$W$ with its length $\ell$ of [[def-hh-coxeter-matrix-word-group-and-length]];
the field $K$ of characteristic $0$, the space $E$ with basis $(\alpha_s)$ and
the involution $\sigma_s$ of [[def-hh-geometric-coxeter-representation-and-roots]];
the reflection set $T$ with the right action of $W$ on $\{\pm1\}\times T$ of
[[lem-hh-dihedral-root-recurrence-and-root-sign]]; and the deletion and
faithfulness statements of [[thm-hh-coxeter-exchange-deletion-and-faithfulness]].

[F1] [[def-hh-coxeter-matrix-word-group-and-length]]: the relator set is
"$R:=\{s^2:s\in S\}\cup\{(st)^{m(s,t)}:s,t\in S,\ m(s,t)<\infty\}$" with
"$N:=\langle\!\langle R\rangle\!\rangle_{F(S)}$" its normal closure, and
"Define $$W:=F(S)/N,$$ and write $s$ (as well as $sN$) for the image of
$s\in S$ in $W$"; the length is
"$\ell(w):=\min\{k\in\mathbb{N}:\ \text{there exist }s_1,\dots,s_k\in S\text{ with }w=s_1\cdots s_k\}$",
and "the empty word $(\;)$ is a word in $S$ of length $0$, and $\ell(1)=0$; it
is the reduced expression of $1$".

[F2] [[def-hh-geometric-coxeter-representation-and-roots]]: "The prime
subfield of $K$ is $\mathbb{Q}$" and "$\operatorname{char}K=0$"; the
maps satisfy "$\sigma_s(\alpha_s)=-\alpha_s,\qquad \sigma_s(\alpha_t)=\alpha_t+c_{st}\alpha_s\quad (t\ne s)$",
and the root set is
"$\Phi:=\{\sigma_{s_1}\sigma_{s_2}\cdots\sigma_{s_k}(\alpha_t):k\ge0,\ s_1,\dots,s_k,t\in S\}\subseteq E$".

[F3] [[lem-hh-dihedral-root-recurrence-and-root-sign]]: "$\sigma_s^2=\mathrm{id}_E$ for every $s\in S$; each $\sigma_s$ is invertible, and $\ell(s)=1$.";
the reflection set is "$T:=\{wsw^{-1}:w\in W,\ s\in S\}\subseteq W$"; and
"Then $U_s^2=\mathrm{id}$ for every $s$, and the assignment $(\varepsilon,r)\cdot s:=U_s(\varepsilon,r)$ extends to a well-defined **right action** of $W$ on $\{\pm1\}\times T$".

[F4] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]]: "Hence repeated deletion of two letters transforms every word into a reduced expression for the same element, and a word is reduced if and only if it cannot be shortened by deleting two letters."; and "The right action of $W$ on $\{\pm1\}\times T$ is faithful".

## Verification

**Proof technique:** direct computation in the rank-one presentation, with the general deletion and faithfulness statements applied to it.

1.1 **The group and its two elements.** The relation $s^2=1$ holds in $W$ because $s^2\in R\subseteq N$ [F1]. Every element of $W$ is the image of a product of the generator $s$ and its inverse, and $s^{-1}=s$ in $W$, so every element is a power $s^k$ with $k\ge0$; since $s^k$ is $1$ for even $k$ and $s$ for odd $k$, one has $W=\{1,s\}$. By [F1] $\ell(1)=0$ and by [F3] $\ell(s)=1$, so $s\ne1$, and the bijection $W\to\mathbb{Z}/2$ with $1\mapsto0$, $s\mapsto1$ is a homomorphism; hence $W\cong\mathbb{Z}/2$. [F1, F3]

2.1 **Word values and reduced words.** A word $(s,\dots,s)$ of length $k$ has value $s^k$, which is $1$ for even $k$ and $s$ for odd $k$ by step 1.1; in particular $(\;)$ has value $1$ and $(s)$ has value $s$ with lengths $0=\ell(1)$ and $1=\ell(s)$ [F1, F3], so both are reduced. If $k\ge2$, the word of length $k$ has value of length at most $1<k$, so it is not reduced; by [F4] it admits a deletion of two letters with the same value, and iterating this deletion, the length drops by two each time until the word has length $\ell(1)$ or $\ell(s)$, namely until it is $(\;)$ or $(s)$. Hence the only reduced words are $(\;)$ and $(s)$. [F1, F3, F4, step 1.1]

3.1 **Reflections, roots and the signed action.** Since $W$ is abelian and $T=\{wsw^{-1}:w\in W,\ s\in S\}$, the reflection set is $T=\{s\}$ [F3, step 1.1]. By [F3] the group generated by $\sigma_s$ is $\{1,\sigma_s\}$, so the root set of [F2] is $\Phi=\{\alpha_s,\sigma_s(\alpha_s)\}=\{\alpha_s,-\alpha_s\}$, and these two vectors are distinct: $\alpha_s=-\alpha_s$ would give $2\alpha_s=0$, while the basis vector $\alpha_s$ is nonzero and $\operatorname{char}K=0$ [F2]. For $r=s$ the formula of [F3] gives $(\varepsilon,s)\cdot s=U_s(\varepsilon,s)=(\varepsilon(-1)^{\delta(s,s)},sss)=(-\varepsilon,s)$, and this action is faithful by [F4]. [F2, F3, F4] ∎

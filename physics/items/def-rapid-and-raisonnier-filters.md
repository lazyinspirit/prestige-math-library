---
id: def-rapid-and-raisonnier-filters
kind: definition
title: Rapid filters and the Raisonnier family
status: published
origin: pipeline
deps: [def-filter, def-cantor-sequence-space-for-descriptive-set-theory, def-constructible-hierarchy-and-constructible-rank, def-definable-subsets-of-a-membership-structure, thm-set-structure-satisfaction-recursion, thm-transfinite-recursion]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Lemma 3.6 and Definition 3.3, pp. 44-47"}
verification:
  audited: 2026-09-22
---

## Definition

Work in ZF. Here increasing means nondecreasing unless strictly increasing is written, and $f(n)$ denotes the finite ordinal $\{0,\ldots,f(n)-1\}$. A filter $F$ on $\omega$ in the sense of [[def-filter]] **extends the Fréchet
filter** when it contains every cofinite set. A filter extending the Fréchet filter is **rapid** when for every
increasing $f:\omega\to\omega$ there is $a\in F$ with

$$|a\cap f(n)|\le n\qquad\text{for every }n<\omega .$$

**Uniform-bounding form.** The rapidity condition is equivalent to the following
one, whose uniformity is what later estimates use: there is a single strictly
increasing $g:\omega\to\omega$ such that for every increasing $f:\omega\to\omega$
there is $a\in F$ with $|a\cap f(n)|\le g(n)$ for all $n$. The forward direction
takes $g(n)=n$. For the converse, given $g$ and an increasing $f$, apply the
hypothesis to $f^*(n)=f(g(n+1))$ to obtain $a\in F$ with
$|a\cap f(g(n+1))|\le g(n)$ for all $n$; then for $k\in[g(n),g(n+1))$ the
monotonicity of $f$ gives $|a\cap f(k)|\le|a\cap f(g(n+1))|\le g(n)\le k$, and
replacing $a$ by $a^*=a\setminus f(g(0))$, which preserves
membership in $F$ because the Fréchet filter is contained in $F$, gives the exact
inequality $|a^*\cap f(k)|\le k$ for all $k$ (the values below $g(0)$ being
empty). Rapidity is thus witnessed by a single bounding function.

**First differing prefix lengths and the Raisonnier family.** For distinct
$u,v\in 2^\omega$ let $h(u,v)=\min\{n:u\upharpoonright n\ne v\upharpoonright
n\}$ be their **first differing prefix length**. If the first differing coordinate is $k$, this length is $k+1$, because restriction to $n$ uses the coordinates strictly below $n$. Thus $h(u,v)\ge1$. We retain this prefix-length convention from Ishii Definition 3.3 throughout $H$ and $F(x)$. For $X\subseteq 2^\omega$ put

$$H(X)=\{h(u,v):u,v\in X,\ u\ne v\}.$$

The closure of a set does not change $H$: if $u,v\in\overline X$ are distinct
and $m=h(u,v)$, the length-$m$ cylinders about $u,v$ each meet $X$.
Choose $u',v'$ in these two intersections. Their prefixes agree below $m-1$
and differ at $m-1$, so $h(u',v')=m$. This proves
$H(\overline X)\subseteq H(X)$; the reverse inclusion follows from
$X\subseteq\overline X$. Only two existential witnesses are used, not a
sequence of choices.

For precision, if $x\in\omega^\omega$ is a real, use its graph as a set
predicate in the relativized constructible hierarchy. For nonempty $A$,
$\operatorname{Def}_x(A)$ consists of subsets of $A$ definable with finitely
many parameters in $(A,\in,x\cap A)$; set
$\operatorname{Def}_x(\varnothing)=\{\varnothing\}$. This is the predicate
version of [[def-definable-subsets-of-a-membership-structure]]: uniform set
satisfaction for the membership relation and one unary predicate is supplied
by [[thm-set-structure-satisfaction-recursion]], and Separation and Replacement
collect the subsets defined by the set of formula codes and finite tuples.
Define $L_0[x]=\varnothing$, $L_{\alpha+1}[x]=\operatorname{Def}_x(L_\alpha[x])$
and take unions at nonzero limits. [[thm-transfinite-recursion]] constructs
each set-length segment uniquely; uniqueness makes the segments agree, just
as in [[def-constructible-hierarchy-and-constructible-rank]]. Write $y\in L[x]$
for existence of an ordinal stage containing $y$, a class predicate rather
than a set union over all ordinals. With $L[x]\cap2^\omega$ viewed in
[[def-cantor-sequence-space-for-descriptive-set-theory]],
the **Raisonnier family** $F(x)\subseteq\mathcal P(\omega)$ is defined, for
$a\subseteq\omega$, by

$$a\in F(x)\quad\Longleftrightarrow\quad\text{there is a countable cover } \langle F_n:n<\omega\rangle\text{ of }L[x]\cap 2^\omega \text{ with }\bigcup_{n<\omega}H(F_n)\subseteq a .$$

The cover members range over subsets of $2^\omega$; replacing them by their
closures does not change the union of the $H(F_n)$, so the witnessing covers may
always be taken to consist of closed sets. Replacement forms the sequence of closures directly. The definition uses no
choice; the later filter and rapidity assertions about $F(x)$ are proved
separately from it.

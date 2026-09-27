---
id: def-artin-right-complements-and-word-reversing
kind: definition
title: "Artin right complements and word reversing"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-positive-braid-monoid, def-alphabet-words-and-reduction,
       thm-induction-principle, def-natural-numbers]
justified_by: [lem-artin-positive-word-reversing-is-complete]
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter II, Definitions 4.1-4.2, Example 4.4 and Lemma 4.6, printed pp. 63-65"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter II, Definition 4.21 and Lemma 4.32, printed pp. 68, 73-74"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $n\in\mathbb N$, with the positive braid monoid $B_n^{+}$ of
[[def-positive-braid-monoid]], its alphabet
$\Sigma_n=\{\sigma_1,\dots,\sigma_{n-1}\}$, and its defining pairs $R_n$.
Throughout, $s,t$ range over letters of $\Sigma_n$ and $u,v,w$ over positive
words.

**The syntactic right complement.** Define a function $\theta$ on pairs of
letters by

$$\theta(s,s):=\varepsilon,\qquad \theta(\sigma_i,\sigma_j):=\sigma_j\sigma_i\ \ (|i-j|=1),\qquad \theta(\sigma_i,\sigma_j):=\sigma_j\ \ (|i-j|\ge2).$$

Then $s\,\theta(s,t)$ and $t\,\theta(t,s)$ are the two sides of a defining pair
of $R_n$ when $s\ne t$, and are equal words when $s=t$. Indeed: if $s=t$ both
words are the one-letter word $s$; if $s=\sigma_i$, $t=\sigma_j$ with
$|i-j|=1$ they are $\sigma_i\sigma_j\sigma_i$ and $\sigma_j\sigma_i\sigma_j$,
the two sides of the braid pair; if $|i-j|\ge2$ they are $\sigma_i\sigma_j$
and $\sigma_j\sigma_i$, the two sides of the commutation pair. Consequently

$$[s\,\theta(s,t)]=[t\,\theta(t,s)]\qquad\text{in }B_n^{+}\text{ for all letters }s,t,$$

and for $s\ne t$ the pair $\{s\,\theta(s,t),\,t\,\theta(t,s)\}$ is the *unique*
pair of $R_n$ whose two sides begin with $s$ and with $t$ respectively. In the
terminology of the source, the presentation of $B_n^{+}$ is
**right-complemented** with **syntactic right complement** $\theta$.

**The complement recursion.** $\theta$ is extended to a map $\Theta$ on pairs of
positive words, written $\Theta(u,v)$, by evaluating the following recursion in
the order described. For a letter $s$ and a word $v$:

$$\Theta(s,\varepsilon)=\varepsilon,\qquad \Theta(s,tv)=\theta(s,t)\,\Theta\bigl(\theta(t,s),\,v\bigr)\qquad(t\in\Sigma_n,\ v\in\Sigma_n^{*});$$

and for words $u,v$:

$$\Theta(\varepsilon,v)=v,\qquad \Theta(u,\varepsilon)=\varepsilon,\qquad \Theta(su',v)=\Theta\bigl(u',\Theta(s,v)\bigr).$$

These rules are not a description by induction on the pair: the rule
$\Theta(s,tv)=\theta(s,t)\,\Theta(\theta(t,s),v)$ expresses $\Theta$ at
$(s,tv)$ through its value at $(\theta(t,s),v)$, whose *first* entry
$\theta(t,s)$ may itself be a two-letter word and is therefore not
smaller. The rules are the recursion rules of the source, whose well-definedness
is the content of its Lemma 4.32: in the right-complemented case the squares of
the grid are filled in a unique way, the reversing procedure terminates or not
independently of the order in which the steps are enumerated, and the rules
above describe the resulting terminal pair. We therefore take $\Theta(u,v)$ to be
the **partial** map so defined, exactly as in the source, its agreement with
the recursion rules being read off from the terminal pair by induction on the
number of reversing steps ([[thm-induction-principle]]): $\Theta(u,v)$ is
defined if and only if the reversing of the negative--positive signed path
$u^{-1}v$ (the letters of $u$ read negatively, then those of $v$ positively)
reaches a terminal pair of blocks, and it is then the first block of that pair,
while $\Theta(v,u)$ is the second. Its four defining rules, and the fact that
it is the least extension of $\theta$ satisfying them, are established as part (a) of
[[lem-artin-positive-word-reversing-is-complete]]; the same item shows that
$\Theta$ is undefined exactly on those pairs of words that admit no common
right multiple in $B_n^{+}$, so it is defined on *every* pair as soon as
$\Delta$-power divisibility is available
([[lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]]): the
totality of $\Theta$ is a theorem, not part of the definition. The defining
rules of the source are recovered as
$\Theta(\sigma_i,\sigma_j)=\theta(\sigma_i,\sigma_j)$,
$\Theta(u_1u_2,v)=\Theta(u_2,\Theta(u_1,v))$ for $u_1$ nonempty,
$\Theta(u,\varepsilon_x)=\varepsilon$ and $\Theta(\varepsilon_x,u)=u$.

**Word reversing.** A **signed path** is a finite word whose letters are
signed copies $s^{+}$ or $s^{-}$ of letters $s\in\Sigma_n$. These are formal
words in the signed alphabet of [[def-alphabet-words-and-reduction]], with
concatenation as the word operation; negative letters are not morphisms of
the positive monoid. For $u=s_1\cdots s_k$, the notation
$u^{-1}$ means the formal word $s_k^{-1}\cdots s_1^{-1}$, in reversed order. A **right-reversing
step** replaces a negative--positive subpath $s^{-1}t$ by
$\theta(s,t)\,\theta(t,s)^{-1}$, using the defining relation
$s\theta(s,t)=t\theta(t,s)$, and deletes $s^{-1}s$. This is the source's
syntactic transformation on signed words, not an equality in $B_n^{+}$; it
preserves the represented element in the presented group, although the number
of signed letters may change. In the source's convention the pattern is a
**negative--positive** pair: right-reversing acts on the signed path $u^{-1}v$,
in which all letters of $u$ are read negatively and all letters of $v$
positively, and, when it terminates, it reaches a terminal
**positive--negative** path $v'\,(u')^{-1}$ whose two positive blocks satisfy
$u\,v'\equiv^{+}v\,u'$. (Feeding the opposite orientation $u\,v^{-1}$ instead
would already be terminal: it is the negative--positive path $u^{-1}v$ that
encodes the comparison of the two positive words.)

**The intended use.** The pair $(\Theta(u,v),\Theta(v,u))$ is the pair that
reversing is meant to compute: the source's Lemma II.4.32 identifies the
terminal blocks of the reversing of $u^{-1}v$ with
$v'=\Theta(u,v)$ and $u'=\Theta(v,u)$, and consequently
$u\,\Theta(u,v)\equiv^{+}v\,\Theta(v,u)$: the common word
$u\Theta(u,v)=v\Theta(v,u)$ in $B_n^{+}$ is a common right multiple of $[u]$
and $[v]$, and it is their *least* common right multiple whenever a common
right multiple exists. Both statements, together with the coherence of the
recursion rules under the other evaluation order, are the content of
[[lem-artin-positive-word-reversing-is-complete]]; no lcm property is used in
this definition.

**A worked value.** By the recursion,

$$\Theta(\sigma_2\sigma_1,\sigma_3)=\Theta(\sigma_1,\Theta(\sigma_2,\sigma_3))=\Theta(\sigma_1,\sigma_3\sigma_2)=\theta(\sigma_1,\sigma_3)\,\Theta(\theta(\sigma_3,\sigma_1),\sigma_2)=\sigma_3\,\Theta(\sigma_1,\sigma_2)=\sigma_3\sigma_2\sigma_1,$$

and likewise $\Theta(\sigma_1\sigma_2,\sigma_3\sigma_2)=\sigma_3\sigma_2\sigma_1$
by the source's Example 4.11. Both values are used on the companion examples
page.

## Remarks

- Only the two words $\Theta(u,v)$ and $\Theta(v,u)$ are needed on this page;
  they are the "two sides" of a rectangle whose vertical side carries $u$ and
  whose horizontal side carries $v$. Each of the two words records how far the
  other side has to be extended so that the two extensions match.
- The recursion rules are the algebraic transcription of the square-filling
  process of the source: the square on the letters $s,t$ has lower side
  $\theta(s,t)$ and right side $\theta(t,s)$, and the identity
  $s\theta(s,t)=t\theta(t,s)$ in $B_n^{+}$ is the commutativity of that square.
  The coherence of the two evaluation orders ("first the first letter of $u$,
  then the rest" versus "split the second argument") is the technical content of
  the source's Lemma II.4.32 and is established in
  [[lem-artin-positive-word-reversing-is-complete]].
- No choice principle occurs: $\Theta$ is computed on positive words by the
  four recursion rules above, and every verification below is a finite
  computation. Negative letters occur only in the signed paths that witness the
  reversing, and they are not elements of $B_n^{+}$; the recursion is *partial*
  in general, and its totality for the Artin presentation is the theorem of
  [[lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]] together
  with [[lem-artin-positive-word-reversing-is-complete]].

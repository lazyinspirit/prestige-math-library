---
id: lem-artin-right-complements-satisfy-the-cube-condition
kind: lemma
title: "Artin right complements satisfy the cube condition"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-artin-right-complements-and-word-reversing, def-positive-braid-monoid,
       lem-positive-artin-relations-preserve-homogeneous-length,
       def-alphabet-words-and-reduction]
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
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter II, Definition 4.14 and Example 4.20, printed pp. 66-67"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter II, Example 4.11 and Lemma 4.55, printed pp. 65, 80-81"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\in\mathbb N$ and let $\Theta$ be the right complement of
[[def-artin-right-complements-and-word-reversing]], with $\equiv^{+}$ the
congruence of [[def-positive-braid-monoid]]. For letters $u,v,w\in\Sigma_n$ put

$$\Theta_3(u,v,w):=\Theta\bigl(\Theta(u,v),\,\Theta(u,w)\bigr),\qquad \Theta_3(v,u,w):=\Theta\bigl(\Theta(v,u),\,\Theta(v,w)\bigr).$$

Then, for **every** triple of letters $u,v,w\in\Sigma_n$, the two words
$\Theta_3(u,v,w)$ and $\Theta_3(v,u,w)$ are defined and
$\equiv^{+}$-equivalent; that is, the $\theta$-cube condition of the source
holds for every triple of generators of the Artin presentation. In the case of
three consecutive indices the values are, for $1\le i\le n-3$,

$$\Theta_3(\sigma_i,\sigma_{i+1},\sigma_{i+2})=\sigma_{i+2}\sigma_{i+1}\sigma_i=\Theta_3(\sigma_{i+1},\sigma_i,\sigma_{i+2}),$$

$$\Theta_3(\sigma_{i+1},\sigma_{i+2},\sigma_i)=\sigma_i\sigma_{i+1}\sigma_{i+2}=\Theta_3(\sigma_{i+2},\sigma_{i+1},\sigma_i),$$

$$\Theta_3(\sigma_{i+2},\sigma_i,\sigma_{i+1})=\sigma_{i+1}\sigma_i\sigma_{i+2}\sigma_{i+1}\ \equiv^{+}\ \sigma_{i+1}\sigma_{i+2}\sigma_i\sigma_{i+1}=\Theta_3(\sigma_i,\sigma_{i+2},\sigma_{i+1}),$$

where the last equivalence uses the commutation $\sigma_i\sigma_{i+2}=\sigma_{i+2}\sigma_i$.
No choice principle is used and every value is obtained by finitely many
applications of the recursion of [[def-artin-right-complements-and-word-reversing]].

## Facts & Assumptions

**Given:** A natural number $n$, the alphabet $\Sigma_n$, the right complement $\Theta$ and the congruence $\equiv^{+}$.

[F1] $\Theta(\varepsilon,v)=v$, $\Theta(u,\varepsilon)=\varepsilon$, $\Theta(su',v)=\Theta(u',\Theta(s,v))$, and $\Theta(s,tv)=\theta(s,t)\,\Theta(\theta(t,s),v)$ for letters $s,t$, with $\theta(\sigma_i,\sigma_j)=\varepsilon$ if $i=j$, $=\sigma_j\sigma_i$ if $|i-j|=1$, and $=\sigma_j$ if $|i-j|\ge2$ ([[def-artin-right-complements-and-word-reversing]]).

[F2] $\equiv^{+}$ is the smallest congruence on $\Sigma_n^{*}$ containing the braid pairs $(\sigma_i\sigma_{i+1}\sigma_i,\sigma_{i+1}\sigma_i\sigma_{i+1})$ and the commutation pairs $(\sigma_i\sigma_j,\sigma_j\sigma_i)$ for $|i-j|>1$; in particular $\sigma_i\sigma_j\equiv^{+}\sigma_j\sigma_i$ whenever $|i-j|>1$ ([[def-positive-braid-monoid]]).

[L3] The empty word is the unique word of length $0$, and $\equiv^{+}$-related words have the same length, so $B_n^{+}$ carries a well-defined length function with $\ell([w])=|w|$, $\ell(xy)=\ell(x)+\ell(y)$ and $\ell(x)=0$ only for $x=1$ ([[def-alphabet-words-and-reduction]], [[lem-positive-artin-relations-preserve-homogeneous-length]]); proofs in this item proceed by induction on the natural numbers, applied to the length of a word.

## Proof

**Proof technique:** direct.

1.1 For a letter $s$ and a word $w$ all of whose letters are distant from $s$ (that is, $|i-j|\ge2$ for $s=\sigma_i$ and each letter $\sigma_j$ of $w$), we have $\Theta(s,w)=w$. Indeed, for $w=\varepsilon$ this is [F1]; for $w=tw'$ with $t$ distant from $s$ we have $\theta(s,t)=t$ and $\theta(t,s)=s$ by [F1], whence $\Theta(s,tw')=t\,\Theta(s,w')=tw'$ by induction on $|w|$, which is legitimate because $|w'|<|w|$ for the length function of [L3]. [F1, L3]

1.2 For every word $x$ we have $\Theta(x,x)=\varepsilon$. Indeed, for $x=\varepsilon$ this is [F1]; for $x=sx'$ with $s$ a letter we get from [F1] that $\Theta(s,sx')=\theta(s,s)\,\Theta(\theta(s,s),x')=\varepsilon\cdot\Theta(\varepsilon,x')=x'$, hence $\Theta(sx',sx')=\Theta(x',\Theta(s,sx'))=\Theta(x',x')=\varepsilon$ by induction on $|x|$ with the length function of [L3]. [F1, L3]

1.3 For two letters $\sigma_i,\sigma_j$ we have $\Theta(\sigma_i,\sigma_j)=\theta(\sigma_i,\sigma_j)$ by [F1]; in particular $\Theta$ of two distant letters is the second letter. [F1]

2.1 **Repeated entries.** (a) If $u=v$, then $\Theta(u,v)=\Theta(u,u)=\Theta(v,u)$ and $\Theta(u,w)=\Theta(v,w)$, so $\Theta_3(u,v,w)$ and $\Theta_3(v,u,w)$ are the same word and are trivially equivalent. (b) If $u=w$, then $\Theta(u,u)=\varepsilon$ by step 1.2, so $\Theta_3(u,v,w)=\Theta(\Theta(u,v),\varepsilon)=\varepsilon$ and $\Theta_3(v,u,u)=\Theta(\Theta(v,u),\Theta(v,u))=\varepsilon$ by step 1.2; the two words are equal. (c) If $v=w$, then $\Theta_3(u,v,v)=\Theta(\Theta(u,v),\Theta(u,v))=\varepsilon$ by step 1.2, and $\Theta_3(v,u,v)=\Theta(\Theta(v,u),\Theta(v,v))=\Theta(\Theta(v,u),\varepsilon)=\varepsilon$ by [F1] and step 1.2, so again the two words are equal. Hence the cube condition holds for every triple with a repeated entry. [F1, step 1.2]

2.2 **Triples with no adjacent pair.** Assume $\sigma_i,\sigma_j,\sigma_k$ are pairwise distant. Then $\Theta(\sigma_i,\sigma_j)=\sigma_j$, $\Theta(\sigma_i,\sigma_k)=\sigma_k$ by step 1.3, and $\sigma_j,\sigma_k$ are distant, so $\Theta_3(\sigma_i,\sigma_j,\sigma_k)=\Theta(\sigma_j,\sigma_k)=\sigma_k$; likewise $\Theta(\sigma_j,\sigma_i)=\sigma_i$, $\Theta(\sigma_j,\sigma_k)=\sigma_k$, so $\Theta_3(\sigma_j,\sigma_i,\sigma_k)=\Theta(\sigma_i,\sigma_k)=\sigma_k$. The two sides are equal. [step 1.3, given]

2.3 **Triples with exactly one adjacent pair.** Let $\sigma_i,\sigma_{i+1},\sigma_k$ with $\sigma_k$ distant from both $\sigma_i$ and $\sigma_{i+1}$, that is $k\notin\{i-1,i,i+1,i+2\}$. Then, using [F1] and step 1.3, $$\Theta_3(\sigma_i,\sigma_{i+1},\sigma_k)=\Theta\bigl(\sigma_{i+1}\sigma_i,\ \Theta(\sigma_i,\sigma_k)\bigr)=\Theta(\sigma_{i+1}\sigma_i,\sigma_k)=\Theta\bigl(\sigma_i,\Theta(\sigma_{i+1},\sigma_k)\bigr)=\Theta(\sigma_i,\sigma_k)=\sigma_k,$$ and $$\Theta_3(\sigma_{i+1},\sigma_i,\sigma_k)=\Theta\bigl(\sigma_i\sigma_{i+1},\ \Theta(\sigma_{i+1},\sigma_k)\bigr)=\Theta(\sigma_i\sigma_{i+1},\sigma_k)=\Theta\bigl(\sigma_{i+1},\Theta(\sigma_i,\sigma_k)\bigr)=\Theta(\sigma_{i+1},\sigma_k)=\sigma_k .$$ The two sides are equal; the identity $\Theta(\sigma_{i+1}\sigma_i,\sigma_k)=\Theta(\sigma_i,\Theta(\sigma_{i+1},\sigma_k))$ is the defining recursion, and $\Theta(\sigma_i,\sigma_k)=\sigma_k$, $\Theta(\sigma_{i+1},\sigma_k)=\sigma_k$ hold because $k$ is distant from $i$ and from $i+1$. To cover the other placements, write $a:=\sigma_i$, $b:=\sigma_{i+1}$ and $c:=\sigma_k$. If the adjacent pair occupies the first and third positions, then $\Theta_3(a,c,b)=\Theta(c,ba)=ba$ by step 1.1, while $\Theta_3(c,a,b)=\Theta(a,b)=ba$ by step 1.3 and [F1]. Interchanging the names $a,b$ gives $\Theta_3(b,c,a)=\Theta(c,ab)=ab=\Theta(b,a)=\Theta_3(c,b,a)$. These two equalities and the equality with $w=c$ already computed cover all six orders of the three distinct letters; swapping the first two arguments merely reverses one of these equalities. [F1, step 1.1, step 1.3, given]

2.4 **Three consecutive indices, first case.** Let $1\le i\le n-3$. Using [F1] and the values $\Theta(\sigma_i,\sigma_{i+1})=\sigma_{i+1}\sigma_i$, $\Theta(\sigma_i,\sigma_{i+2})=\sigma_{i+2}$ (indices differing by $2$), $\Theta_3(\sigma_i,\sigma_{i+1},\sigma_{i+2})=\Theta\bigl(\sigma_{i+1}\sigma_i,\ \sigma_{i+2}\bigr)=\Theta\bigl(\sigma_i,\Theta(\sigma_{i+1},\sigma_{i+2})\bigr)=\Theta(\sigma_i,\sigma_{i+2}\sigma_{i+1})=\theta(\sigma_i,\sigma_{i+2})\,\Theta(\theta(\sigma_{i+2},\sigma_i),\sigma_{i+1})=\sigma_{i+2}\,\Theta(\sigma_i,\sigma_{i+1})=\sigma_{i+2}\sigma_{i+1}\sigma_i .$ For the second side, $\Theta(\sigma_{i+1},\sigma_i)=\sigma_i\sigma_{i+1}$ and $\Theta(\sigma_{i+1},\sigma_{i+2})=\sigma_{i+2}\sigma_{i+1}$, so $\Theta_3(\sigma_{i+1},\sigma_i,\sigma_{i+2})=\Theta(\sigma_i\sigma_{i+1},\sigma_{i+2}\sigma_{i+1})=\Theta\bigl(\sigma_{i+1},\Theta(\sigma_i,\sigma_{i+2}\sigma_{i+1})\bigr)=\Theta(\sigma_{i+1},\sigma_{i+2}\sigma_{i+1}\sigma_i)=\sigma_{i+2}\sigma_{i+1}\,\Theta(\sigma_{i+1}\sigma_{i+2},\sigma_{i+1}\sigma_i),$ and $\Theta(\sigma_{i+1}\sigma_{i+2},\sigma_{i+1}\sigma_i)=\Theta(\sigma_{i+2},\Theta(\sigma_{i+1},\sigma_{i+1}\sigma_i))=\Theta(\sigma_{i+2},\sigma_i)=\sigma_i$, since $\Theta(\sigma_{i+1},\sigma_{i+1}\sigma_i)=\sigma_i$; hence the second side is $\sigma_{i+2}\sigma_{i+1}\sigma_i$ as well, and the two sides are equal. [F1, step 1.3, algebra]

2.5 **Three consecutive indices, second case.** Here $\Theta(\sigma_{i+2},\sigma_{i+1})=\sigma_{i+1}\sigma_{i+2}$, $\Theta(\sigma_{i+2},\sigma_i)=\sigma_i$, so $\Theta_3(\sigma_{i+2},\sigma_{i+1},\sigma_i)=\Theta(\sigma_{i+1}\sigma_{i+2},\sigma_i)=\Theta(\sigma_{i+2},\Theta(\sigma_{i+1},\sigma_i))=\Theta(\sigma_{i+2},\sigma_i\sigma_{i+1})=\theta(\sigma_{i+2},\sigma_i)\,\Theta(\theta(\sigma_i,\sigma_{i+2}),\sigma_{i+1})=\sigma_i\,\Theta(\sigma_{i+2},\sigma_{i+1})=\sigma_i\sigma_{i+1}\sigma_{i+2} .$ For the other side, $\Theta(\sigma_{i+1},\sigma_{i+2})=\sigma_{i+2}\sigma_{i+1}$ and $\Theta(\sigma_{i+1},\sigma_i)=\sigma_i\sigma_{i+1}$, so $\Theta_3(\sigma_{i+1},\sigma_{i+2},\sigma_i)=\Theta(\sigma_{i+2}\sigma_{i+1},\sigma_i\sigma_{i+1})=\Theta\bigl(\sigma_{i+1},\Theta(\sigma_{i+2},\sigma_i\sigma_{i+1})\bigr)=\Theta(\sigma_{i+1},\sigma_i\sigma_{i+1}\sigma_{i+2}),$ where $\Theta(\sigma_{i+2},\sigma_i\sigma_{i+1})=\theta(\sigma_{i+2},\sigma_i)\Theta(\theta(\sigma_i,\sigma_{i+2}),\sigma_{i+1})=\sigma_i\Theta(\sigma_{i+2},\sigma_{i+1})=\sigma_i\sigma_{i+1}\sigma_{i+2}$; continuing, $\Theta(\sigma_{i+1},\sigma_i\sigma_{i+1}\sigma_{i+2})=\theta(\sigma_{i+1},\sigma_i)\Theta(\theta(\sigma_i,\sigma_{i+1}),\sigma_{i+1}\sigma_{i+2})=\sigma_i\sigma_{i+1}\Theta(\sigma_{i+1}\sigma_i,\sigma_{i+1}\sigma_{i+2})$, and $\Theta(\sigma_{i+1}\sigma_i,\sigma_{i+1}\sigma_{i+2})=\Theta(\sigma_i,\Theta(\sigma_{i+1},\sigma_{i+1}\sigma_{i+2}))=\Theta(\sigma_i,\sigma_{i+2})=\sigma_{i+2}$, because $\Theta(\sigma_{i+1},\sigma_{i+1}\sigma_{i+2})=\sigma_{i+2}$. Hence $\Theta_3(\sigma_{i+1},\sigma_{i+2},\sigma_i)=\sigma_i\sigma_{i+1}\sigma_{i+2}$, equal to the first side. [F1, step 1.3, algebra]

2.6 **Three consecutive indices, third case.** $\Theta_3(\sigma_{i+2},\sigma_i,\sigma_{i+1})=\Theta(\Theta(\sigma_{i+2},\sigma_i),\Theta(\sigma_{i+2},\sigma_{i+1}))=\Theta(\sigma_i,\sigma_{i+1}\sigma_{i+2})=\theta(\sigma_i,\sigma_{i+1})\Theta(\theta(\sigma_{i+1},\sigma_i),\sigma_{i+2})=\sigma_{i+1}\sigma_i\,\Theta(\sigma_i\sigma_{i+1},\sigma_{i+2}),$ and $\Theta(\sigma_i\sigma_{i+1},\sigma_{i+2})=\Theta(\sigma_{i+1},\Theta(\sigma_i,\sigma_{i+2}))=\Theta(\sigma_{i+1},\sigma_{i+2})=\sigma_{i+2}\sigma_{i+1}$, so $\Theta_3(\sigma_{i+2},\sigma_i,\sigma_{i+1})=\sigma_{i+1}\sigma_i\sigma_{i+2}\sigma_{i+1}$. Likewise $\Theta_3(\sigma_i,\sigma_{i+2},\sigma_{i+1})=\Theta(\Theta(\sigma_i,\sigma_{i+2}),\Theta(\sigma_i,\sigma_{i+1}))=\Theta(\sigma_{i+2},\sigma_{i+1}\sigma_i)=\theta(\sigma_{i+2},\sigma_{i+1})\Theta(\theta(\sigma_{i+1},\sigma_{i+2}),\sigma_i)=(\sigma_{i+1}\sigma_{i+2})\,\Theta(\sigma_{i+2}\sigma_{i+1},\sigma_i)=\sigma_{i+1}\sigma_{i+2}\,\Theta(\sigma_{i+1},\Theta(\sigma_{i+2},\sigma_i))=\sigma_{i+1}\sigma_{i+2}\Theta(\sigma_{i+1},\sigma_i)=\sigma_{i+1}\sigma_{i+2}\sigma_i\sigma_{i+1}$. The two words differ only in the order of the distant letters $\sigma_i$ and $\sigma_{i+2}$, so they are $\equiv^{+}$-equivalent by [F2]. [F1, F2, step 1.3, algebra]

3.1 **Enumerating the patterns.** Let $u,v,w$ be letters with $u,v,w$ pairwise distinct, and consider the graph on the three indices with an edge for each adjacent pair. It has at most two edges, since $\{1,\dots,n-1\}$ with the adjacency relation is a path and a path has no triangle; if it has no edge, step 2.2 applies; if it has exactly one edge, step 2.3 covers all six orders; if it has two edges, the three indices are $i,i+1,i+2$ in some order and steps 2.4--2.6 cover three orders, and swapping the first two arguments covers the other three. Together with the repeated-entry case of step 2.1 this covers every triple of letters. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 2.6, given]

4.1 Every triple $(u,v,w)$ of letters therefore satisfies $\Theta_3(u,v,w)\equiv^{+}\Theta_3(v,u,w)$, which is the $\theta$-cube condition for generators; the displayed values of the statement are steps 2.4--2.6. ∎ [step 2.1, step 3.1, step 2.4, step 2.6]

## Remarks

- The enumeration of step 3.1 is the reason only three triples have to be computed: up to the order of the arguments, the possible index patterns are "three pairwise distant letters", "one adjacent pair and one distant letter", and "three consecutive letters", and only the last one is not immediate. This is the argument of the source's Example 4.20, where the same three values are listed.
- The ordinary (not sharp) cube condition is the one proved here: in the last case the two cyclic values differ by a genuine relation of $B_n^{+}$ and are only $\equiv^{+}$-equivalent, not equal as words. The source records that the *sharp* $\theta$-cube condition fails for $n\ge4$; nothing on this page uses the sharp form.

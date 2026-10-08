---
id: thm-cg-reduced-positive-section-and-length-additive-products
kind: theorem
title: "The reduced positive section b_w, its length additivity, and the degree homomorphism"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 5
deps: [def-cg-artin-monoid-and-group-presentations, lem-cg-artin-presentation-universal-properties-and-coxeter-surjection, def-hh-coxeter-matrix-word-group-and-length, thm-hh-matsumoto-reduced-word-theorem, thm-hh-coxeter-exchange-deletion-and-faithfulness, def-natural-numbers, def-nat-addition, lem-nat-add-associative, lem-nat-add-identity, def-semigroup-and-monoid, def-group-homomorphism, def-integers, def-int-operations, thm-int-comm-ring, lem-nat-embeds-int]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
    - title: "Rachael Boyd, Homology of Coxeter and Artin groups (PhD thesis, University of Aberdeen 2018, corrected version)"
      url: "https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(S,m)$ be a finite Coxeter matrix, $W$ the presented group with length
function $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), and let
$S^{*}$, $A^{+}$, $A$, $\gamma:A^{+}\to A$, $\sigma_s=[s]$ and
$\pi^{+}:A^{+}\to W$ be as in [[def-cg-artin-monoid-and-group-presentations]] and
[[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]].

**(1) The positive lift.** For $w\in W$ choose a reduced expression
$w=s_1\cdots s_k$ ([[def-hh-coxeter-matrix-word-group-and-length]]) and put

$$b_w:=\sigma_{s_1}\cdots\sigma_{s_k}\in A^{+}.$$

Then $b_w$ depends only on $w$, not on the chosen reduced expression;
$b_1=1_{A^{+}}=[\varepsilon]$; and $\pi^{+}(b_w)=w$.

**(2) The set-section.** The map $b:W\to A^{+}$, $w\mapsto b_w$, satisfies
$\pi^{+}\circ b=\mathrm{id}_W$ and
$\pi\circ\gamma\circ b=\mathrm{id}_W$, hence $b$ is injective and is a
set-theoretic section of both $\pi^{+}$ and the composite
$\pi\circ\gamma:A^{+}\to W$.

**(3) The positive length.** There is a unique monoid homomorphism

$$L:A^{+}\longrightarrow(\mathbb N,+,0),\qquad L(\sigma_s)=1;$$

explicitly $L([s_1\cdots s_k])=k$, so $L$ is well defined, $L(xy)=L(x)+L(y)$ and
$L(1_{A^{+}})=0$. Consequently $L(b_w)=\ell(w)$ for every $w\in W$. Moreover the
same assignment defines a group homomorphism

$$\deg:A\longrightarrow\mathbb Z,\qquad \deg(\sigma_s)=1,$$

and $\deg(\gamma(x))=L(x)$ for all $x\in A^{+}$.

**(4) Multiplicativity.** For all $u,v\in W$:

$$b_ub_v=b_{uv}\quad\Longleftrightarrow\quad \ell(uv)=\ell(u)+\ell(v).$$

If $\ell(uv)<\ell(u)+\ell(v)$, then $b_ub_v\ne b_{uv}$, and indeed
$L(b_ub_v)=\ell(u)+\ell(v)>\ell(uv)=L(b_{uv})$.

**(5) Failure of multiplicativity.** If $S\ne\emptyset$ then $b$ is not a monoid
homomorphism: for $s\in S$ one has $b_sb_s=[ss]$ and $b_{s^{2}}=b_1=[\varepsilon]$,
and these differ because $L([ss])=2\ne0=L([\varepsilon])$. Likewise
$\gamma\circ b:W\to A$ is not a group homomorphism.

**(6) Scope.** No injectivity of $\gamma:A^{+}\to A$ or of $\pi^{+}:A^{+}\to W$,
no Ore or Garside condition, no embedding of $A^{+}$ into $A$, and no topological
statement is made or needed.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, the group $W$ with its length
function $\ell$ and reduced expressions, and the constructions $S^{*}$, $A^{+}$,
$A$, $\gamma$, $\sigma_s$ and $\pi^{+}$ of the two items named in the statement.

[F1] On $S^{*}$ there is a smallest congruence $\equiv^{+}$ containing every
braid pair, the classes satisfy $[u][v]=[uv]$ and $A^{+}=S^{*}/\!\equiv^{+}$ has
identity $[\varepsilon]$ and elements $\sigma_s=[s]$.
([[def-cg-artin-monoid-and-group-presentations]])

[F2] Every map $f:S\to G$ into a group whose values on the two words of every
braid pair agree extends uniquely to a group homomorphism
$\bar f:A\to G$ with $\bar f(\sigma_s)=f(s)$.
([[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]])

[F3] Every map $f:S\to M$ into a monoid whose values on the two words of every
braid pair agree extends uniquely to a monoid homomorphism
$\bar f:A^{+}\to M$ with $\bar f(\sigma_s)=f(s)$.
([[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]])

[F4] The homomorphism $\pi^{+}:A^{+}\to W$ satisfies
$\pi^{+}(\sigma_s)=s$ and $\pi\circ\gamma=\pi^{+}$.
([[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]])

[F5] $\mathbb N$ is a set containing $0$ on which addition is defined.
([[def-natural-numbers]], [[def-nat-addition]])

[F6] Addition on $\mathbb N$ satisfies $m+0=m$ and is associative.
([[def-nat-addition]], [[lem-nat-add-associative]])

[F7] $0$ is a two-sided identity for addition on $\mathbb N$.
([[lem-nat-add-identity]])

[F8] $(\mathbb{Z},+,\cdot,0,1)$ with the operations of
[[def-int-operations]] is a commutative ring in which every element has an
additive inverse; in particular $(\mathbb{Z},+,0)$ is an abelian group, and
its element $1$ is the multiplicative identity. The natural numbers embed in
$\mathbb{Z}$ by an injective map preserving addition and multiplication, and
$2\ne0$ in $\mathbb{N}$ ([[def-natural-numbers]]); hence the images of the
distinct naturals $2$ and $0$ differ, and since $1+1$ is the image of $2$ while
$0$ is the image of $0$, the element $2:=1+1$ is nonzero in $\mathbb{Z}$.
([[thm-int-comm-ring]], [[def-int-operations]], [[lem-nat-embeds-int]])

[F9] $\gamma:A^{+}\to A$ is the unique monoid homomorphism with
$\gamma(\sigma_s)=\sigma_s$ for all $s\in S$.
([[def-cg-artin-monoid-and-group-presentations]])

## Proof

1.1 The product $\sigma_{s_1}\cdots\sigma_{s_k}$ is independent of the reduced expression: by Matsumoto's theorem ([[thm-hh-matsumoto-reduced-word-theorem]] (1)), any two reduced expressions of an element $w\in W$ are connected by finitely many replacements of an alternating subword $s\,t\,s\cdots$ of length $m(s,t)<\infty$ by the other alternating subword $t\,s\,t\cdots$, inside some context $x\,(\,\cdot\,)\,y$. Such a subword pair is exactly a braid pair of [[def-cg-artin-monoid-and-group-presentations]] (2), so by the congruence property of $\equiv^{+}$ the two full words are equivalent and their classes in $A^{+}$ coincide; hence the product in $A^{+}$ depends only on $w$. A reduced expression of $w$ exists because $\ell(w)$ is a minimum over a nonempty set of word lengths ([[def-hh-coxeter-matrix-word-group-and-length]]). [F1, given]

2.1 The empty word is a reduced expression of $1$ because $\ell(1)=0$, so $b_1=[\varepsilon]=1_{A^{+}}$ by [F1]. For the projection, [F4] gives $\pi^{+}(\sigma_s)=s$ and $\pi\circ\gamma=\pi^{+}$ while [F9] makes $\gamma$ a monoid homomorphism, so for a reduced expression $w=s_1\cdots s_k$ one has $\pi^{+}(b_w)=\pi^{+}(\sigma_{s_1})\cdots\pi^{+}(\sigma_{s_k})=s_1\cdots s_k=w$, and composing with $\pi\circ\gamma=\pi^{+}$ gives $\pi\circ\gamma\circ b=\pi^{+}\circ b=\mathrm{id}_W$. [F1, F3, F4, F9, step 1.1]

2.2 The length map exists and is unique: apply the monoid universal property [F3] to $M:=(\mathbb N,+,0)$ and the constant map $f(s):=1$, which is legitimate because the two words of a braid pair both have length $m(s,t)$, so their images under the word-length map agree; this gives a unique monoid homomorphism $L:A^{+}\to(\mathbb N,+,0)$ with $L(\sigma_s)=1$. For a word $u=s_1\cdots s_k$ one has $L([u])=L(\sigma_{s_1}\cdots\sigma_{s_k})=1+\cdots+1=k$ by additivity [F6] and $L([\varepsilon])=0$ [F7], so $L$ is the word length on classes and in particular $L(b_w)=k=\ell(w)$ for every $w$. [F3, F5, F6, F7, step 1.1]

3.1 The degree map exists: apply the group universal property [F2] to $G:=(\mathbb{Z},+,0)$ of [F8] and the constant map $f(s):=1$, whose two values on a braid pair both equal $m(s,t)$; this gives a group homomorphism $\deg:A\to\mathbb Z$ with $\deg(\sigma_s)=1$. Then $\deg\circ\gamma$ and $L$ are monoid homomorphisms $A^{+}\to\mathbb Z$ agreeing on every generator: $\deg(\gamma(\sigma_s))=\deg(\sigma_s)=1=L(\sigma_s)$, so by the uniqueness in [F3] they agree on all of $A^{+}$, that is, $\deg(\gamma(x))=L(x)$ for every $x\in A^{+}$. [F2, F3, F8, step 2.2]

3.2 The map $b$ is injective and a section: if $b_u=b_v$ then $u=\pi^{+}(b_u)=\pi^{+}(b_v)=v$, and $\pi^{+}\circ b=\mathrm{id}_W$ and $\pi\circ\gamma\circ b=\mathrm{id}_W$ were proved in step 2.1; a map with a left inverse is injective, so $b$ is a set-theoretic section of both maps. [F4, step 2.1]

3.3 For the forward direction of (4), suppose $\ell(uv)=\ell(u)+\ell(v)$ and let $u=s_1\cdots s_p$, $v=t_1\cdots t_q$ be reduced expressions. The concatenated word $s_1\cdots s_pt_1\cdots t_q$ represents $uv$ and has length $p+q=\ell(u)+\ell(v)=\ell(uv)$, so it is a reduced expression of $uv$; hence by step 1.1, $b_{uv}=\sigma_{s_1}\cdots\sigma_{s_p}\sigma_{t_1}\cdots\sigma_{t_q}=b_ub_v$. Conversely, if $b_ub_v=b_{uv}$, then applying the additive map $L$ of step 2.2 gives $\ell(u)+\ell(v)=L(b_u)+L(b_v)=L(b_ub_v)=L(b_{uv})=\ell(uv)$. In particular, if $\ell(uv)<\ell(u)+\ell(v)$ then $L(b_ub_v)=\ell(u)+\ell(v)>\ell(uv)=L(b_{uv})$, so $b_ub_v\ne b_{uv}$. [F1, step 1.1, step 2.2, algebra]

4.1 If $S\ne\emptyset$, fix $s\in S$. By part 1 of [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] the sign character of $W$ satisfies $\operatorname{sgn}(s)=-1\ne1=\operatorname{sgn}(1)$, so $s\ne1$ in $W$; since $s$ is a word of length $1$ we have $\ell(s)\le1$, while $\ell(s)\ne0$ because the empty word is the only word of length $0$ and its value is $1$ ([[def-hh-coxeter-matrix-word-group-and-length]]), so $\ell(s)=1$. Hence the one-letter word $s$ is a reduced expression and $b_s=[s]$ by step 1.1, while $s^{2}=1$ in $W$ with $\ell(1)=0$ makes the empty word a reduced expression of $s^{2}$, so $b_{s^{2}}=b_1=[\varepsilon]$ by step 2.1. Hence $b_sb_s=[s][s]=[ss]$ by [F1], whereas $L([ss])=2\ne0=L([\varepsilon])$ by step 2.2, so $b_sb_s\ne b_{s^{2}}$ and $b$ is not a monoid homomorphism. For the composite, $(\gamma\circ b)(s)^{2}=\gamma([ss])=\sigma_s^{2}$ while $(\gamma\circ b)(s^{2})=\gamma([\varepsilon])=1_A$, and these differ because $\deg(\sigma_s^{2})=2\ne0=\deg(1_A)$ by step 3.1, where $2=1+1\ne0$ in $\mathbb{Z}$ is the nontriviality recorded in [F8], and a group homomorphism preserves the identity ([[def-group-homomorphism]]); so $\gamma\circ b$ is not a group homomorphism. [F1, F8, step 2.1, step 2.2, step 3.1, algebra]

5.1 Scope and choice: injectivity of $\gamma$ and of $\pi^{+}$, an Ore or Garside condition, an embedding of $A^{+}$ into $A$ and every topological statement are outside this result, and nothing here asserts them. No choice is used: $b_w$ is defined by the uniqueness proved in step 1.1, so it is a definite description rather than a selection among expressions, $\equiv^{+}$ is an intersection of a definable family of congruences, and all computations are finite. [given] ∎

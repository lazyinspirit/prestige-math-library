---
id: def-cg-artin-monoid-and-group-presentations
kind: definition
title: "Artin monoid and Artin group presentations, and the canonical monoid-to-group map"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-hh-coxeter-matrix-word-group-and-length, def-alphabet-words-and-reduction, def-semigroup-and-monoid, def-equivalence-relation, def-free-group, def-normal-closure, def-relators-relations-and-finite-presentations, def-group-presentation, def-quotient-group, def-generated-subgroup, def-group]
justified_by: [lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
    - title: "Rachael Boyd, Homology of Coxeter and Artin groups (PhD thesis, University of Aberdeen 2018, corrected version)"
      url: "https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf"
    - title: "Jon McCammond, The mysterious geometry of Artin groups (Winter Braids Lecture Notes Vol. 4 (2017), Course no I, pp. 1-30)"
      url: "https://proceedings.centre-mersenne.org/item/10.5802/wbln.17.pdf"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $S$ be a finite set and let $m$ be a Coxeter matrix on $S$
([[def-hh-coxeter-matrix-word-group-and-length]]), so that $m(s,s)=1$ and
$m(s,t)=m(t,s)\in\{2,3,\dots\}\cup\{\infty\}$ for $s\ne t$.

**(1) Words.** Let $S^{*}$ be the set of finite words $u=s_1s_2\cdots s_k$ in the
alphabet $S$ ($k\ge0$, letters read from left to right, concatenation written by
juxtaposition, empty word $\varepsilon$;
[[def-alphabet-words-and-reduction]]). Concatenation makes $S^{*}$ a monoid
with identity $\varepsilon$ ([[def-semigroup-and-monoid]]).

**(2) Braid pairs.** Let $s\ne t$ in $S$ with $m:=m(s,t)<\infty$. The **braid
words of length $m$ between $s$ and $t$** are the strictly alternating words
$u=u_1u_2\cdots u_m$ and $v=v_1v_2\cdots v_m$ defined by $u_i=s$ for odd $i$ and
$u_i=t$ for even $i$, while $v_i=t$ for odd $i$ and $v_i=s$ for even $i$. A
**braid pair** is an unordered pair $\{u,v\}$ arising this way; $m=2$
contributes the commuting pair $\{st,ts\}$ and $m=\infty$ contributes nothing.

**(3) The Artin monoid.** A **congruence** on $S^{*}$ is an equivalence relation
$\sim$ on $S^{*}$ ([[def-equivalence-relation]]) with
$u\sim v\Rightarrow xuy\sim xvy$ for all $x,y\in S^{*}$. The total relation is a
congruence and the intersection of a nonempty family of congruences is a
congruence, so there is a smallest congruence $\equiv^{+}$ containing every
braid pair: take the intersection of all congruences containing the braid
pairs. Reflexivity, symmetry, transitivity and compatibility with concatenation
hold in the intersection because they hold in each of its members. Put

$$A^{+}:=A^{+}(S,m):=S^{*}/\!\!\equiv^{+},$$

write $[u]$ for the class of a word $u$, and define $[u]\cdot[v]:=[uv]$. This
multiplication is well defined: if $u\equiv^{+}u'$ and $v\equiv^{+}v'$, then
$uv\equiv^{+}u'v\equiv^{+}u'v'$ by compatibility and transitivity.
Associativity and the identity law descend from concatenation, so $A^{+}$ is a monoid with identity
$[\varepsilon]$ ([[def-semigroup-and-monoid]]); $A^{+}$ is the **Artin monoid**
of $(S,m)$, and $\sigma_s:=[s]$ for $s\in S$.

**(4) The Artin group.** Let $F(S)$ be the free group on $S$
([[def-free-group]]) and, for $s\ne t$ with $m(s,t)<\infty$, let
$\rho_{s,t}:=u\,v^{-1}\in F(S)$ with $u,v$ the braid words of (2). Let
$N:=\langle\!\langle\{\rho_{s,t}:s\ne t,\ m(s,t)<\infty\}\rangle\!\rangle_{F(S)}$
be their normal closure ([[def-normal-closure]],
[[def-relators-relations-and-finite-presentations]]), and put

$$A:=A(S,m):=F(S)/N .$$

Equivalently, $A$ is the group presented by
$\langle S\mid u=v\text{ for every braid pair }\{u,v\}\rangle$ in the sense of
[[def-group-presentation]]; its elements are the left cosets $gN$, and the
images $\sigma_s$ of $s\in S$ generate $A$ ([[def-quotient-group]],
[[def-generated-subgroup]], [[def-group]]). **No relation $\sigma_s^{2}=1$ is
imposed**: the element $\sigma_s^{2}$ need not be trivial in $A$.

**(5) The canonical comparison $A^{+}\to A$.** The two braid words of a braid
pair have equal images in $A$, because their difference lies in $N$. Hence the
assignment $s\mapsto\sigma_s$ is constant on braid pairs, and by minimality of
$\equiv^{+}$ it induces a monoid homomorphism

$$\gamma:A^{+}\longrightarrow A,\qquad \gamma(\sigma_s)=\sigma_s ,$$

regarding the group $A$ as a monoid under its multiplication. It is the unique
monoid homomorphism with $\gamma(\sigma_s)=\sigma_s$ for all $s$. This is the
construction whose universal property is proved in
[[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]] (1);
that lemma is the recorded justifier of this definition.

**(6) Conventions and abstentions.** (i) A value $m(s,t)=\infty$ imposes no
braid pair and hence no relation in either $A^{+}$ or $A$. (ii) The constructions
depend only on the pair $(S,m)$. (iii) Nothing is asserted here about injectivity
of $\gamma$ or of $A^{+}\to W$, about Ore localisation or a group of fractions,
about torsion-freeness of $A$, about the word problem, about $A^{+}$ embedding in
$A$, or about the $K(\pi,1)$ property; in particular no multiplicativity of any
lift of a reduced expression is claimed by this definition. (iv) No topological
model (configuration space, hyperplane complement, Salvetti complex) is
constructed or used. Part (3) establishes the congruence and quotient
multiplication; [[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]]
establishes their universal property.

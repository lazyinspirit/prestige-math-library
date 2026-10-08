---
id: thm-cg-bruhat-parabolic-projection-and-quotients
kind: theorem
title: "The minimal-coset projection onto W^I is order-preserving, and Bruhat order on the parabolic quotient W^I"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [def-cg-parabolic-quotient-and-two-sided-minima, thm-cg-parabolic-intersections-and-coset-factorization, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-cg-bruhat-subword-characterization, thm-cg-bruhat-lifting-and-cover-criterion, lem-cg-bruhat-chain-refinement-and-gradedness, lem-cg-bruhat-right-exchange-and-augmentation, def-cg-bruhat-order-by-reflection-chains, def-hh-coxeter-matrix-word-group-and-length, def-group]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
aliases: []
landmark: false
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 2.5, printed pp. 42-44: Proposition 2.5.1 (the projection $P^J$ is order-preserving) with its induction proof, Corollary 2.5.2 (covers over $W^J$), Corollary 2.5.3 ($W^J$ is directed), Theorem 2.5.5 (the Chain Property in $W^J$, including the extra check that the constructed $w_1$ lies in $W^J$) and Corollary 2.5.6 (all maximal chains from $u$ to $w$ in $W^J$ have the same length)"
    - title: "Carl Marberg, MATH 6150F Coxeter systems and Iwahori-Hecke algebras, Lecture 11: More about Bruhat order (HKUST, Spring 2017)"
      url: "https://www.math.hkust.edu.hk/~emarberg/teaching/2017/Math6150F/lectures/11_Math6150F_Spring2017.pdf"
      locator: "Lecture 11, printed p. 2: the proposition that each $w$ has a unique $u\\in W^J$, $v\\in W_J$ with $w=uv$ and $\\ell(w)=\\ell(u)+\\ell(v)$, that $u$ is the unique shortest element of $wW_J$, and the corollary $\\ell(uv)=\\ell(u)+\\ell(v)$ for $u\\in W^J$, $v\\in W_J$"
---

## Statement

Let $I\subseteq S$ and let $W_I$ and $W^I=\{w\in W:\ell(ws)>\ell(w)\ \text{for all }s\in I\}$ be as in [[def-cg-parabolic-quotient-and-two-sided-minima]] (1), (2). Every $w\in W$ has a unique factorization $w=dv$ with $d\in W^I$, $v\in W_I$ and $\ell(w)=\ell(d)+\ell(v)$, and $d$ is the unique element of minimal length in the right coset $wW_I$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3), [[thm-cg-parabolic-intersections-and-coset-factorization]] (3)); write $P^I(w):=d$ for this **minimal-coset projection**.

**(1) Order-preservation and minimality.** If $u\le v$ in $W$ then $P^I(u)\le P^I(v)$; moreover $P^I(w)\le w$ for every $w\in W$, with equality exactly when $w\in W^I$.

**(2) Covers over the quotient.** If $x\in W^I$, $y\in W$ and $x$ is covered by $y$, then either $y\in W^I$ or $y=xs$ for some $s\in I$.

**(3) The quotient inherits the subword criterion and its length rank.** Let $u,w\in W^I$ with $u\le w$. The subword criterion of [[thm-cg-bruhat-subword-characterization]] applies verbatim, since the order on $W^I$ is by definition the restriction of the order on $W$; in addition there is a chain
$$u=x_0<x_1<\cdots<x_k=w,\qquad x_i\in W^I,\qquad \ell(x_i)=\ell(u)+i\quad(0\le i\le k),$$
so $k=\ell(w)-\ell(u)$ and every maximal chain in $[u,w]^I:=[u,w]\cap W^I$ has exactly $\ell(w)-\ell(u)$ steps: the subposet $W^I$ is graded by $\ell$, and $[u,w]^I$ is finite.

**(4) Directedness and top elements.** $W^I$ is directed: for all $u,w\in W^I$ there is $z\in W^I$ with $u\le z$ and $w\le z$. If $W^I$ is finite then it has a unique maximum $w_0^I$ and $W^I=[1,w_0^I]^I$. For infinite $W$ the projection is defined and order-preserving exactly as above; no longest element of $W$, and no longest element of a parabolic subgroup $W_I$, is asserted or used, and $W^I$ need not have a maximum.

## Facts & Assumptions

**Given:** a Coxeter matrix $(S,m)$, the presented group $W$ with length $\ell$, a subset $I\subseteq S$, the parabolic data $W_I$, $W^I$ and the projection $P^I$ of the Statement, and elements $u,v,w,x,y\in W$.

[F1] The right descent set is $D_R(w)=\{s\in S:\ell(ws)<\ell(w)\}$ and $\ell(ws)-\ell(w)\in\{\pm1\}$ for all $w\in W$, $s\in S$; the set $W^I=\{w\in W:\ell(ws)>\ell(w)\text{ for all }s\in I\}=\{w\in W:D_R(w)\cap I=\emptyset\}$ consists exactly of the elements of minimal length in the right cosets $wW_I$; every $w\in W$ has a unique factorization $w=dv$ with $d\in W^I$, $v\in W_I$ and $\ell(w)=\ell(d)+\ell(v)$, and then $\ell(dv')=\ell(d)+\ell(v')$ for all $v'\in W_I$; and $W_I\cap S=I$. ([[def-cg-parabolic-quotient-and-two-sided-minima]] (1), (2); [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2), (3))

[F2] Coset minima are global minima: if $d\in W^I$ and $x\in dW_I$, then $\ell(d)\le\ell(x)$, with $\ell(d)=\ell(x)$ if and only if $x=d$. Equivalently $W^I=\{d\in W:\ell(d)\le\ell(dv)\text{ for all }v\in W_I\}$. ([[thm-cg-parabolic-intersections-and-coset-factorization]] (3))

[F3] Bruhat order: $x\le y$ if and only if there is a chain $x=x_0\to x_1\to\cdots\to x_m=y$ with $x_{j+1}=x_jt_j$, $t_j\in T$, $\ell(x_{j+1})>\ell(x_j)$; the empty chain is allowed, so $1\le y$ for every $y$, and $\le$ is reflexive and transitive; a nonempty chain satisfies $\ell(x)<\ell(y)$. ([[def-cg-bruhat-order-by-reflection-chains]] (1), (2))

[F4] Lifting and directedness: if $u\le v$ and $s\in S$ with $\ell(vs)<\ell(v)$ and $\ell(us)>\ell(u)$, then $us\le v$ and $u\le vs$; and Bruhat order is directed, so for all $u,w$ there is $z$ with $u\le z$ and $w\le z$. ([[thm-cg-bruhat-lifting-and-cover-criterion]] (1a), (4))

[F5] Intervals and grading: $[u,v]=\{x\in W:u\le x\le v\}$ is finite; if $u<v$ there is a chain $u=x_0<x_1<\cdots<x_k=v$ with $\ell(x_i)=\ell(u)+i$, and every maximal chain in $[u,v]$ has exactly $\ell(v)-\ell(u)$ strict steps. ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (1), (2), (3))

[F6] Subword criterion: for a reduced expression $v=s_1\cdots s_q$ and $x\in W$, one has $x\le v$ if and only if there are $1\le i_1<\cdots<i_k\le q$ with $x=s_{i_1}\cdots s_{i_k}$, and the indices may be chosen with $k=\ell(x)$. ([[thm-cg-bruhat-subword-characterization]] (1))

[F7] Augmentation lemma: if $w=s_1\cdots s_q$ is a reduced expression and $u\in W$, $u\ne w$, is the product of the letters of $s_1\cdots s_q$ remaining after deleting the letters at the positions of a set $D=\{i_1<\cdots<i_k\}$, the remaining word being a reduced expression of $u$, then for a description with $i_k$ minimal there is $t\in T$ with $u\to ut$, $\ell(ut)=\ell(u)+1$, and $ut$ the product of a reduced subword of $s_1\cdots s_q$. ([[lem-cg-bruhat-right-exchange-and-augmentation]] (2))

[F8] Covers: $x$ is covered by $y$ if and only if $x<y$ and $\ell(y)=\ell(x)+1$. ([[thm-cg-bruhat-lifting-and-cover-criterion]] (2))

## Proof

**Given:** the Coxeter data, the parabolic data of the Statement, and elements as in the Statement; (1) is proved in steps 1.1, 1.2 and 2.1, (2) in step 3.1, (4) in step 3.2, and (3) in steps 4.1 and 5.1.

1.1 For the minimality clause of (1), write $w=P^I(w)v$ with $v\in W_I$ and $\ell(w)=\ell(P^I(w))+\ell(v)$ by [F1], and fix a reduced expression $v=s_{i_1}\cdots s_{i_j}$ of $v$ (its letters lie in $I$). Then $P^I(w)=w_0\to w_1\to\cdots\to w_j=w$ with $w_l:=P^I(w)s_{i_1}\cdots s_{i_l}$, because $\ell(w_l)=\ell(P^I(w))+l$ by the additivity in [F1], so each step is right multiplication by a simple generator with strictly increasing length, hence a Bruhat edge; therefore $P^I(w)\le w$. [F1, F3]

1.2 For the equality clause of (1): if $P^I(w)=w$ then $w\in W^I$ by definition of $P^I$; conversely, if $w\in W^I$, then $w$ lies in $W^I\cap wW_I$, whose unique element is $P^I(w)$ by [F1], so $P^I(w)=w$. [F1]

2.1 For the order-preservation in (1), prove $P^I(u)\le P^I(v)$ for all $u\le v$ by induction on $\ell(v)$. Since $P^I(u)\le u\le v$ by step 1.1, the case $v\in W^I$ is immediate, because then $P^I(v)=v$ by step 1.2. If $v\notin W^I$, then $D_R(v)\cap I\ne\emptyset$ by [F1], so there is $s\in I$ with $\ell(vs)<\ell(v)$; and $\ell(P^I(u)s)>\ell(P^I(u))$ because $P^I(u)\in W^I$. The lifting property [F4] applied to the pair $P^I(u)\le v$ gives $P^I(u)\le vs$. The induction hypothesis applies to the pair $(P^I(u),vs)$, whose second entry has smaller length, and yields $P^I(P^I(u))\le P^I(vs)$; here $P^I(P^I(u))=P^I(u)$ by step 1.2, and $P^I(vs)=P^I(v)$ because $vs$ and $v$ lie in the same right coset $vW_I$ and $P^I$ selects its minimal representative [F1]. Hence $P^I(u)\le P^I(v)$. [F1, F4, step 1.1, step 1.2]

3.1 For (2), let $x\in W^I$, $y\in W$ with $x$ covered by $y$. If $y\notin W^I$ then $y\ne P^I(y)$ and $P^I(y)\le y$ with $P^I(y)<y$ by step 1.1; moreover $x=P^I(x)\le P^I(y)$ by step 2.1 applied to $x\le y$. Since $x$ is covered by $y$, the relation $x\le P^I(y)<y$ forces $P^I(y)=x$ (otherwise $x$ would be strictly between). The factorization $y=P^I(y)v$ with $v\in W_I$, $v\ne1$ and $\ell(y)=\ell(P^I(y))+\ell(v)$ then gives $\ell(v)=\ell(y)-\ell(x)=1$ by [F8], so $v=s$ for an element $s\in I$ and $y=xs$. [F1, F8, step 1.1, step 2.1]

3.2 For (4), let $u,w\in W^I$. By the directedness in [F4] there is $z\in W$ with $u\le z$ and $w\le z$; applying the order-preserving projection of step 2.1 and using $P^I(u)=u$, $P^I(w)=w$ (step 1.2) gives $u,w\le P^I(z)\in W^I$, so $W^I$ is directed. If $W^I$ is finite, directedness combines pairwise upper bounds to give $z_0\in W^I$ with $x\le z_0$ for every $x\in W^I$: start from a common upper bound of two elements and replace it by a common upper bound of it and a further element, finitely many times. Then $z_0$ is the maximum of $W^I$, it is unique because two maxima bound each other and $\le$ is antisymmetric, and $W^I=[1,z_0]^I$ by [F3] and the definition of $z_0$. No longest element of $W$ or of $W_I$ is used: [F1] and [F2] hold for arbitrary (possibly infinite) $W$, and in the infinite case the argument stops at directedness and asserts no maximum. [F2, F3, F4, step 1.2, step 2.1]

4.1 For (3), let $u,w\in W^I$ with $u<w$; choose a reduced expression $w=s_1\cdots s_q$ and a reduced subword expression of $u$ inside it, written in deleted-position form with deleted positions $D=\{i_1<\cdots<i_k\}$ and $i_k$ minimal, and let $x_1:=ut$ for the reflection $t$ produced by the augmentation lemma [F7]: then $u\to x_1$, $\ell(x_1)=\ell(u)+1$, and $x_1$ is the product of the word $W'$ obtained from $s_1\cdots s_q$ by deleting only $i_1,\dots,i_{k-1}$, which is a reduced expression of $x_1$; in particular $x_1\le w$ by the subword criterion [F6]. We claim $x_1\in W^I$: if not, then part (2), proved in step 3.1, applied to the cover $u<x_1$ with $u\in W^I$ (the pair is a cover by the criterion [F8], since $u\to x_1$ and $\ell(x_1)=\ell(u)+1$) gives $x_1=us$ for some $s\in I$; but $x_1=ut$ then forces $t=s\in I$, and computing as in the augmentation lemma's construction gives $wt=(s_1\cdots s_q)(s_q\cdots s_{i_k+1})s_{i_k}(s_{i_k+1}\cdots s_q)=s_1\cdots\widehat{s_{i_k}}\cdots s_q$, a word of length $q-1$, so $\ell(wt)<\ell(w)$; since $t=s\in I$, this contradicts $w\in W^I$, which requires $\ell(ws)>\ell(w)$ for every $s\in I$. Hence $x_1\in W^I$. [F1, F6, F7, F8, step 3.1]

5.1 For (3), induct on the gap $\ell(w)-\ell(u)$ over pairs $u\le w$ in $W^I$: the case $u=w$ is the one-element chain, and for $u<w$ step 4.1 produces $x_1\in W^I$ with $u\to x_1$, $\ell(x_1)=\ell(u)+1$ and $x_1$ the product of a reduced subword expression of the same word $s_1\cdots s_q$, so the induction hypothesis applies to the pair $(x_1,w)$ and yields a chain $x_1<\cdots<x_k=w$ in $W^I$ with lengths $\ell(u)+2,\dots,\ell(w)$; prepending $x_0:=u$ gives the asserted chain, and $k=\ell(w)-\ell(u)$. Any strict step of a chain in $[u,w]^I$ strictly increases the length by [F3], so such a chain has at most $\ell(w)-\ell(u)$ strict steps; if it had fewer, some step $x_{i-1}<x_i$ would satisfy $\ell(x_i)-\ell(x_{i-1})\ge2$, and step 4.1 applied to the pair $x_{i-1}<x_i$ (both in $W^I$, with the required reduced subword expression supplied by the subword criterion [F6]) would insert an element of $W^I$ strictly between them, so the chain would not be maximal; hence every maximal chain has exactly $\ell(w)-\ell(u)$ steps and the rank function $x\mapsto\ell(x)-\ell(u)$ is well defined on $[u,w]^I$; finally $[u,w]^I\subseteq[u,w]$ is finite by [F5]. [F3, F5, F6, step 4.1]

6.1 Collecting: (1) is steps 1.1, 1.2 and 2.1, giving both the minimality $P^I(w)\le w$ with its equality case and order-preservation; (2) is step 3.1; (3) is steps 4.1 and 5.1, where the extra check $x_1\in W^I$ is the point at which the quotient does not simply inherit the chain property; and (4) is step 3.2. The infinite case is covered by the same steps, with no longest element asserted. No use of the Axiom of Choice is made: the chosen description, the common upper bound in step 3.2 and the induction of step 5.1 are all finite or deterministic constructs on the fixed group $W$. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1] ∎

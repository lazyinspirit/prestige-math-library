---
id: thm-hh-coxeter-exchange-deletion-and-faithfulness
kind: theorem
title: "Length parity, exchange, two-letter deletion, and faithfulness of the signed reflection action"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-hh-coxeter-matrix-word-group-and-length, def-hh-geometric-coxeter-representation-and-roots, lem-hh-dihedral-root-recurrence-and-root-sign, def-group-homomorphism, def-order-in-a-group, def-natural-numbers, def-divides-in-z]
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
---

## Statement

Let $(S,m)$ be a finite Coxeter matrix, $W$ the presented group, $\ell$ its length function, and let $T$, $\eta$, $\Phi$ and the right action of $W$ on $\{\pm1\}\times T$ be as in [[lem-hh-dihedral-root-recurrence-and-root-sign]].

1. **Sign character and parity.** There is a unique homomorphism $\operatorname{sgn}:W\to\{\pm1\}$ with $\operatorname{sgn}(s)=-1$ for all $s\in S$, and $\operatorname{sgn}(w)=(-1)^{\ell(w)}$ for all $w\in W$. Consequently, for all $w\in W$ and $s\in S$,
$$\ell(sw)=\ell(w)\pm1,\qquad \ell(ws)=\ell(w)\pm1,$$
with $\ell(sw)\equiv\ell(w)+1\pmod2$ and $\ell(ws)\equiv\ell(w)+1\pmod2$.
2. **Exchange.** Let $w=s_1\cdots s_k$ be a reduced expression and let $s\in S$ satisfy $\ell(sw)=k-1$. Then
$$sw=s_1\cdots\widehat{s_i}\cdots s_k$$
for some $i\in\{1,\dots,k\}$; equivalently, $w$ has a reduced expression beginning with $s$, and $s$ is a prefix reflection of any reduced expression of $w$. Right-handed form: if $\ell(ws)=k-1$ then $ws=s_1\cdots\widehat{s_i}\cdots s_k$ for some $i$.
3. **Deletion.** If the word $(s_1,\dots,s_k)$ in $S$ is not reduced, then there are $i<j$ with
$$s_1\cdots\widehat{s_i}\cdots\widehat{s_j}\cdots s_k=s_1\cdots s_k .$$
Hence repeated deletion of two letters transforms every word into a reduced expression for the same element, and a word is reduced if and only if it cannot be shortened by deleting two letters.
4. **Faithfulness of the signed action.** The right action of $W$ on $\{\pm1\}\times T$ is faithful, so $W$ embeds in $\operatorname{Sym}(\{\pm1\}\times T)$; in particular distinct simple generators are distinct in $W$.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, the presented group $W$ with its length $\ell$, the reflection set $T$ and the right action of $W$ on $\{\pm1\}\times T$ of [[lem-hh-dihedral-root-recurrence-and-root-sign]], and a word $(s_1,\dots,s_k)$ in $S$ in each claim below.

[F1] [[def-hh-coxeter-matrix-word-group-and-length]]: $W$ is presented by $(S,m)$ with relators $s^2$ and $(st)^{m(s,t)}$; for every group $G$ and every map $f:S\to G$ with $f(s)^2=1$ and $(f(s)f(t))^{m(s,t)}=1$ whenever $m(s,t)<\infty$, there is a unique homomorphism $W\to G$ with $s\mapsto f(s)$. The length $\ell(w)$ is the least $k$ with $w=s_1\cdots s_k$, and $\ell(1)=0$, the empty word being the only word of length $0$.

[F2] [[lem-hh-dihedral-root-recurrence-and-root-sign]]: the right action of $W$ on $\{\pm1\}\times T$ defined by $U_s(\varepsilon,r)=(\varepsilon(-1)^{\delta(s,r)},srs)$ satisfies $(\varepsilon,r)\cdot w=(\varepsilon\,\eta(r,w),w^{-1}rw)$ with $\eta(r,w)=(-1)^{n(r)}$ depending only on $w$ and $r$; $T=\{wsw^{-1}:w\in W,\ s\in S\}$; for a reduced expression $w=s_1\cdots s_k$ with prefix reflections $r_i=s_1\cdots s_{i-1}s_is_{i-1}\cdots s_1$ one has $n(r)\in\{0,1\}$ for every $r$, the map $i\mapsto r_i$ is injective, and $\Phi(w):=\{r_1,\dots,r_k\}=\{r\in T:\eta(r,w)=-1\}$ is independent of the reduced expression, with $\#\Phi(w)=\ell(w)$; also $\ell(s)=1$ for every $s\in S$.

[F3] [[def-group-homomorphism]]: a group homomorphism satisfies $\varphi(uv)=\varphi(u)\varphi(v)$ and $\varphi(1)=1$, so for $\operatorname{sgn}$ one has $\operatorname{sgn}(sw)=\operatorname{sgn}(s)\operatorname{sgn}(w)$.

## Proof

**Given:** A finite Coxeter matrix $(S,m)$, the group $W$ and length $\ell$, and the right action of $W$ on $\{\pm1\}\times T$ with its function $\eta$ and sets $\Phi(w)$.

1.1 **The sign character and the parity laws.** The map $f:S\to\{\pm1\}$, $f(s)=-1$, satisfies $f(s)^2=1$ and $(f(s)f(t))^{m(s,t)}=(-1)^{2m(s,t)}=1$ for every finite edge, so the universal property in [F1] gives a unique homomorphism $\operatorname{sgn}:W\to\{\pm1\}$ with $\operatorname{sgn}(s)=-1$. For any word $w=s_1\cdots s_k$ this gives $\operatorname{sgn}(w)=(-1)^k$; taking a word of length $\ell(w)$ shows $\operatorname{sgn}(w)=(-1)^{\ell(w)}$, so every word for $w$ has length congruent to $\ell(w)$ modulo $2$. Next, $\ell(sw)\le\ell(w)+1$: a word of length $\ell(w)$ for $w$ prefixed by $s$ is a word of length $\ell(w)+1$ for $sw$, and $\ell$ is a minimum; symmetrically $\ell(w)=\ell(s\cdot sw)\le\ell(sw)+1$. Since $\operatorname{sgn}(sw)=\operatorname{sgn}(s)\operatorname{sgn}(w)=-\operatorname{sgn}(w)$ by [F3] and $(-1)^{\ell(sw)}=\operatorname{sgn}(sw)$, the parities of $\ell(sw)$ and $\ell(w)$ are opposite, so $\ell(sw)\ne\ell(w)$; with the two inequalities this forces $\ell(sw)=\ell(w)\pm1$, and the congruence $\ell(sw)\equiv\ell(w)+1$ records the parity. The same argument with $ws$ in place of $sw$, using $\ell(ws)\le\ell(w)+1$ and $\ell(w)=\ell(ws\cdot s)\le\ell(ws)+1$, gives $\ell(ws)=\ell(w)\pm1$ and $\ell(ws)\equiv\ell(w)+1$ modulo $2$. [F1, F3, algebra]

1.2 **Faithfulness.** Let $w\ne1$. Then $\ell(w)\ne0$ because the only word of length $0$ is the empty word with value $1$ by [F1], so $\ell(w)\ge1$; choose a reduced expression $w=s_1\cdots s_k$ with $k=\ell(w)\ge1$. By [F2] the set $\Phi(w)=\{r_1,\dots,r_k\}$ has $\#\Phi(w)=\ell(w)\ge1$, so pick $r\in\Phi(w)$, that is $\eta(r,w)=-1$. The action formula of [F2] then gives $(1,r)\cdot w=(\eta(r,w)\cdot1,\ w^{-1}rw)=(-1,w^{-1}rw)\ne(1,w^{-1}rw)$, so $w$ acts nontrivially on $\{\pm1\}\times T$; hence the action is faithful and $W$ embeds in $\operatorname{Sym}(\{\pm1\}\times T)$. In particular, for $s\ne t$ in $S$ the elements $s,t$ have distinct images under this embedding because $U_s(1,s)=(-1,s)$ while $U_t(1,s)=(1,tst)$, and the first coordinates $-1$ and $1$ differ. [F1, F2]

1.3 **Exchange.** Let $w=s_1\cdots s_k$ be reduced and let $\ell(sw)=k-1$. Choose a reduced expression $sw=t_1\cdots t_{k-1}$; then $w=s\,t_1\cdots t_{k-1}$ is a word of length $k=\ell(w)$, hence a reduced expression of $w$ whose first prefix reflection is $r_1=s$, so $\eta(s,w)=-1$ and $s\in\Phi(w)$ by [F2]. By the expression-independence of $\Phi(w)$ in [F2] applied to the reduced expression $w=s_1\cdots s_k$, there is $i\in\{1,\dots,k\}$ with $s=r_i=w_{i-1}s_iw_{i-1}^{-1}$, where $w_{i-1}=s_1\cdots s_{i-1}$; multiplying this identity on the right by $w=w_{i-1}s_is_{i+1}\cdots s_k$ gives $sw=w_{i-1}s_{i+1}\cdots s_k=s_1\cdots\widehat{s_i}\cdots s_k$, which is the asserted deletion. For the right-handed form, note first that $\ell(u^{-1})=\ell(u)$ for every $u$: reversing a reduced word for $u$ gives a word of the same length for $u^{-1}$, so $\ell(u^{-1})\le\ell(u)$, and applying this to $u^{-1}$ gives equality. If now $\ell(ws)=k-1$, then $w^{-1}=s_k\cdots s_1$ is a reduced expression of $w^{-1}$ and $\ell(s\,w^{-1})=\ell((ws)^{-1})=\ell(ws)=k-1$, so the left-handed form applied to $w^{-1}$ writes $s\,w^{-1}=s_k\cdots\widehat{s_j}\cdots s_1$ for some $j$; inverting both sides gives $ws=(s\,w^{-1})^{-1}=s_1\cdots\widehat{s_j}\cdots s_k$. [F1, F2, algebra]

2.1 **Deletion.** Let $(s_1,\dots,s_k)$ be a word that is not reduced, and let $j$ be the least index such that the prefix $(s_1,\dots,s_j)$ is not reduced; such $j$ exists and $j\ge2$, and $(s_1,\dots,s_{j-1})$ is reduced with value $u:=s_1\cdots s_{j-1}$. By the minimality of $j$ the element $us_j$ has $\ell(us_j)<j=\ell(u)+1$, so $\ell(us_j)=\ell(u)-1=j-2$ by step 1.1, and the right-handed exchange of step 1.3 applied to the reduced expression $(s_1,\dots,s_{j-1})$ and the letter $s_j$ gives $us_j=s_1\cdots\widehat{s_i}\cdots s_{j-1}$ for some $i\le j-1$. Therefore $s_1\cdots\widehat{s_i}\cdots\widehat{s_j}\cdots s_k=(s_1\cdots\widehat{s_i}\cdots s_{j-1})\,s_{j+1}\cdots s_k=us_js_{j+1}\cdots s_k=s_1\cdots s_k$, so deleting the letters at positions $i$ and $j$ leaves the value unchanged. Iterating, the length strictly decreases by $2$ at each deletion and stops at length $\ell(w)$, leaving a reduced expression of the same element. Conversely, a reduced word cannot be shortened by deleting two letters, since the deleted word is a strictly shorter word for the same element. [F1, step 1.1, step 1.3, algebra] ∎

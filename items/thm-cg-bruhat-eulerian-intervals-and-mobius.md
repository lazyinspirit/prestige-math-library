---
id: thm-cg-bruhat-eulerian-intervals-and-mobius
kind: theorem
title: "Bruhat intervals are Eulerian: parity balance of the elements, and the Möbius function of a full interval"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 19
deps: [def-cg-bruhat-order-by-reflection-chains, lem-cg-bruhat-chain-refinement-and-gradedness, def-cg-deletion-chain-labels-and-shelling, thm-cg-bruhat-deletion-label-shelling, lem-cg-lexicographic-chain-shelling-and-mobius-cancellation, thm-cg-bruhat-lifting-and-cover-criterion, def-hh-coxeter-matrix-word-group-and-length, thm-hh-coxeter-exchange-deletion-and-faithfulness, def-poset-mobius-function, lem-poset-mobius-recurrence, def-finite-cardinality, def-poset-interval-and-finiteness-conditions, thm-cg-bruhat-parabolic-projection-and-quotients, def-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Sections 2.2 and 2.5-2.7, printed pp. 33-36, 45 and 48-55 (augmentation and lifting; quotients; deleted-position labels of maximal chains; Lemmas 2.7.2-2.7.4, Theorem 2.7.5, Corollaries 2.7.10-2.7.11 and Exercise 13), and Appendix A2.2-A2.4, printed pp. 302-305 (Möbius and shellability facts; cited, not consumed)"
    - title: "Yufei Zhao, On the Bruhat order of the symmetric group and its shellability (expository notes, MIT, 12 December 2007)"
      url: "https://web.mit.edu/yufeiz/www/papers/bruhat.pdf"
      locator: "Section 4, printed pp. 5-7 (Lemma 4.1 lifting property; Theorem 4.2, Verma's parity-balance induction in two cases; Corollary 4.3); the printed '=1' of Theorem 4.2 is read as the parity-balance statement its own proof establishes, and the item states the Kronecker-delta form"
    - title: "Brant C. Jones, An explicit derivation of the Möbius function for Bruhat order (arXiv:0904.4472v3, 11 December 2009)"
      url: "https://arxiv.org/pdf/0904.4472"
      locator: "Section 2, printed pp. 1-7: Lemma 2.1 (lifting), Theorem 2.12 (complete matching) and Corollary 2.13 (the sign formula via a sign-reversing involution), read as an independent alternative treatment of the same theorem"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $u\le v$ in $W$ and let $[u,v]=\{x\in W:u\le x\le v\}$ be the Bruhat interval ([[def-cg-bruhat-order-by-reflection-chains]], [[def-poset-interval-and-finiteness-conditions]]); it is finite by [[lem-cg-bruhat-chain-refinement-and-gradedness]] (1).

**(i) Cancellation formula.** $\sum_{x\in[u,v]}(-1)^{\ell(x)}=\delta_{u,v}(-1)^{\ell(u)}$; equivalently, if $u<v$ then $[u,v]$ contains equally many elements of even and of odd length ([[def-finite-cardinality]]), and $\sum_{x\in[u,v]}(-1)^{\ell(v)-\ell(x)}=\delta_{u,v}$.

**(ii) Möbius function of a full interval.** $\mu(u,v)=(-1)^{\ell(v)-\ell(u)}$, where $\mu$ is the Möbius function of the interval, computed from the recurrence of [[def-poset-mobius-function]] and [[lem-poset-mobius-recurrence]].

**(iii) Falling-chain form.** Equivalently, in the deleted-position labeling of [[def-cg-deletion-chain-labels-and-shelling]] the interval $[u,v]$ has exactly one strictly falling maximal chain: by the falling-chain formula of [[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]] (ii), instantiated through the shelling theorem [[thm-cg-bruhat-deletion-label-shelling]], one has $\mu(u,v)=(-1)^{\ell(v)-\ell(u)}\cdot\#\{\text{strictly falling maximal chains of }[u,v]\}$.

**(iv) Scope.** The sign formula is proved for the full Bruhat order on $W$, that is for intervals $[u,v]\subseteq W$. It is not asserted for intervals of a proper parabolic quotient $W^I$ ([[thm-cg-bruhat-parabolic-projection-and-quotients]]): there the fullness of the interval is an additional hypothesis, and the companion page exhibits a quotient interval for which the sign formula fails.

## Facts & Assumptions

**Given:** Elements $u\le v$ of $W$, an element $s\in S$ and the interval $[u,v]$.

[F1] Lifting case (a): "(a) if $\ell(vs)<\ell(v)$ and $\ell(us)>\ell(u)$, then $us\le v$ and $u\le vs$" ([[thm-cg-bruhat-lifting-and-cover-criterion]] (1)).

[F2] Length change and parity: "Consequently, for all $w\in W$ and $s\in S$, $$\ell(sw)=\ell(w)\pm1,\qquad \ell(ws)=\ell(w)\pm1,$$ with $\ell(sw)\equiv\ell(w)+1\pmod2$ and $\ell(ws)\equiv\ell(w)+1\pmod2$" ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (1)).

[F3] Reduced expressions and length: "A word $(s_1,\dots,s_k)$ in $S$ is a **reduced expression** of $w$ when $w=s_1\cdots s_k$ and $k=\ell(w)$", $\ell(w)$ being the least length of a word in $S$ representing $w$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F4] Squares are relators: "Let $R\subseteq F(S)$ be the set of relators $$R:=\{s^2:s\in S\}\cup\{(st)^{m(s,t)}:s,t\in S,\ m(s,t)<\infty\}$$", with $W=F(S)/N$ for $N$ the normal closure of $R$ in $F(S)$, so $s^2=1$ in $W$ for every $s\in S$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F5] Finiteness: "$[u,v]$ is finite; more precisely, for every reduced expression $v=s_1\cdots s_q$ there is an injection $[u,v]\to\{0,1\}^q$" ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (1)).

[F6] The Möbius recurrence: "For a locally finite poset $P$ and $x\le y$, $$\mu_P(x,x)=1,$$ and, when $x<y$, $$\sum_{x\le z\le y}\mu_P(x,z)=0,\qquad \sum_{x\le z\le y}\mu_P(z,y)=0.$$" ([[lem-poset-mobius-recurrence]]).

[F7] Uniqueness of the recurrence: "Either recurrence together with the diagonal values uniquely determines $\mu_P$ interval by interval." ([[lem-poset-mobius-recurrence]]).

[F8] Cardinality of a finite set: "Let $A$ be a finite set. Then there is **exactly one** $n \in \mathbb{N}$ with $A \approx n$, and we write $$\lvert A\rvert := \text{that } n,$$ the **cardinality**, or number of elements, of $A$" ([[def-finite-cardinality]]).

[F9] The falling-chain formula: for a finite graded poset with a descending rooted-chain labeling satisfying (N) and (L) on every rooted interval, "For every rooted interval $([v,w],c)$ of $[x,y]$, with $\mu$ the Möbius function of the poset $[v,w]$, $$\mu(v,w)=(-1)^{\rho(v,w)}\cdot\#\{\text{maximal chains of }[v,w]\text{ whose label word is strictly falling}\},$$" ([[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]] (ii)).

[F10] The deleted-position labeling satisfies (N) and (L) on every rooted interval: "On every rooted interval of $[u,v]$ the labeling satisfies the no-tie condition (N) and the lex-increasing property (L)" ([[thm-cg-bruhat-deletion-label-shelling]] (i)).

[F11] Grading of the interval: "Every maximal chain in $[u,v]$ has exactly $\ell(v)-\ell(u)$ strict steps" ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (3)).

[F12] Strict length increase: "every $u<v$ (that is, $u\le v$ and $u\ne v$) satisfies $\ell(u)<\ell(v)$" ([[def-cg-bruhat-order-by-reflection-chains]] (2)).

[F13] Group associativity and inverses: "**(G1)** $(x * y) * z = x * (y * z)$ for all $x, y, z \in G$", and every element of $G$ has an inverse ([[def-group]]).

[F14] The quotient is graded by the ambient length: "so $k=\ell(w)-\ell(u)$ and every maximal chain in $[u,w]^I:=[u,w]\cap W^I$ has exactly $\ell(w)-\ell(u)$ steps: the subposet $W^I$ is graded by $\ell$, and $[u,w]^I$ is finite." ([[thm-cg-bruhat-parabolic-projection-and-quotients]] (3)).

## Proof

1.1 Case 1: the lifting-paired involution. Let $u<v$ and let $s\in S$ satisfy $\ell(vs)=\ell(v)-1$; such an $s$ exists because a reduced expression $v=s_1\cdots s_q$ of positive length $q=\ell(v)$ [F3] has $vs=s_1\cdots s_{q-1}$, a word of length $q-1$ representing $vs$, so $\ell(vs)\le q-1$ and hence $\ell(vs)=q-1$ by [F2]. Assume $\ell(us)>\ell(u)$. Then $z\mapsto zs$ is a fixed-point-free involution of the finite set $[u,v]$ [F5]: for $z\in[u,v]$ with $\ell(zs)>\ell(z)$, lifting case (a) applied to $z\le v$ (with $\ell(vs)<\ell(v)$) gives $zs\le v$, while $u\le z\le zs$ gives $u\le zs$; for $z\in[u,v]$ with $\ell(zs)<\ell(z)$, lifting case (a) applied to $u\le z$ (with $\ell(us)>\ell(u)$) gives $u\le zs$, while $zs\le z\le v$ gives $zs\le v$. Since $(zs)s=z$ by $s^2=1$ and associativity [F4, F13], and $\ell(zs)\ne\ell(z)$ [F2], the map is an involution without fixed point, so $[u,v]$ is partitioned into the pairs $\{z,zs\}$ of opposite length; each pair contributes $1+(-1)=0$ to $\sum_{x\in[u,v]}(-1)^{\ell(x)}$, and the cardinality of the finite set $[u,v]$ is defined [F8], so the sum vanishes. [F1, F2, F3, F4, F5, F8, F13]

1.2 Case 2: the reduction to the strip $[u',v']$. Keep $s$ with $\ell(vs)=\ell(v)-1$ and assume now $\ell(us)<\ell(u)$; put $u':=us$ and $v':=vs$, so that $u'<u\le v$ and $v'<v$ by [F2], and $[u,v]=[u',v]\setminus B$ with $B:=\{z\in[u',v]:u\nleq z\}$. Since $\ell(u')+\ell(v)=\ell(u)+\ell(v)-1$, the induction hypothesis applies to the pair $(u',v)$; and $u'\ne v$, because their lengths satisfy $\ell(u')=\ell(u)-1<\ell(u)<\ell(v)$ by [F12]; so $\Phi(u',v):=\sum_{x\in[u',v]}(-1)^{\ell(x)}$ is assumed to vanish, and $\Phi(u,v)=-\Phi(B)$, both sums being finite by [F5]. To compute $B$, let $z\in[u',v]$ with $u\nleq z$: if $\ell(zs)<\ell(z)$, then lifting case (a) applied to $u'\le z$ (with $\ell(u's)=\ell(u)>\ell(u')$ and $\ell(zs)<\ell(z)$) gives $u=u's\le z$, a contradiction; hence $\ell(zs)>\ell(z)$, and lifting case (a) applied to $z\le v$ gives $z\le vs=v'$. Conversely every $z\in[u',v']$ with $u\nleq z$ lies in $B$, because $v'\le v$. So $B=\{z\in[u',v']:u\nleq z\}$. If $u\le v'$, then $B=[u',v']\setminus[u,v']$ and $\Phi(B)=\Phi(u',v')-\Phi(u,v')$, where both pairs $(u',v')$ and $(u,v')$ have strictly smaller length sum and are strictly ordered: $u'<v'$ because $u'\le u\le v'$ and $u'=v'$ would give $u\le u'=us<u$, and $u<v'$ because $u\le v'$ with $u=v'$ would give $us=v$, hence $\ell(v)=\ell(us)=\ell(u)-1<\ell(u)\le\ell(v)$; the induction hypothesis therefore makes both sums vanish and $\Phi(B)=0$. If $u\nleq v'$, then no element $z$ of $[u',v']$ satisfies $u\le z$ (else $u\le z\le v'$), so $B=[u',v']$; here $u'\le v'$ because $u'\in B$, as $u'\in[u',v]$ and $u\nleq u'$, and $B\subseteq[u',v']$ was shown above, while $u'<v'$ by the length computation, so the induction hypothesis gives $\Phi(B)=\Phi(u',v')=0$. [F1, F2, F5, F12]

2.1 The cancellation formula. We prove $\Phi(a,b)=\delta_{a,b}(-1)^{\ell(a)}$ for all $a\le b$ by induction on $\ell(a)+\ell(b)$: the base case $a=b$ has the single term $(-1)^{\ell(a)}$, and for $a<b$ the pair $(a,b)$ falls into Case 1 or Case 2 above according to the signs of $\ell(as)$ and $\ell(bs)$, where $s$ is a right descent of $b$, so steps 1.1 and 1.2 give $\Phi(a,b)=0$; the intervals are finite by [F5] and a finite set has a cardinality [F8]. This is the first formulation of (i); multiplying the equality by $(-1)^{\ell(v)}$ gives the form with $(-1)^{\ell(v)-\ell(x)}$, since $(-1)^{\ell(v)+\ell(x)}=(-1)^{\ell(v)-\ell(x)}$ and $\delta_{u,v}(-1)^{\ell(v)+\ell(u)}=\delta_{u,v}$, and when $u<v$ it says that the numbers of even-length and of odd-length elements agree. [F5, F8, step 1.1, step 1.2, induction]

3.1 The Möbius function. Define $\nu(a,b):=(-1)^{\ell(b)-\ell(a)}$ for $a\le b$; then $\nu(a,a)=1$ and, for $u<v$, $\sum_{u\le z\le v}\nu(u,z)=(-1)^{-\ell(u)}\sum_{u\le z\le v}(-1)^{\ell(z)}=0$ by step 2.1, so $\sum_{u\le z<v}\nu(u,z)=-\nu(u,v)$ and $\nu$ satisfies the recurrence characterising the Möbius function of the interval [F6]; since that recurrence determines $\mu$ uniquely interval by interval [F7], $\mu(u,v)=\nu(u,v)=(-1)^{\ell(v)-\ell(u)}$, which is (ii). [F6, F7, step 2.1, algebra]

4.1 The falling-chain count. By [F10] the deleted-position labeling satisfies (N) and (L) on every rooted interval of $[u,v]$, and by [F11] and [F5] the interval $[u,v]$ is finite and graded; hence the falling-chain formula [F9] applies to the rooted interval $([u,v],(v))$, whose root consists of the single vertex $v$ and has zero edges, and gives $\mu(u,v)=(-1)^{\ell(v)-\ell(u)}\cdot\#\{\text{strictly falling maximal chains of }[u,v]\}$. Comparing with step 3.1 shows that $[u,v]$ has exactly one strictly falling maximal chain, and conversely the count one reproduces (ii); this is (iii). [F5, F9, F10, F11, step 3.1]

5.1 Scope. Steps 1.1, 1.2, 2.1, 3.1 and 4.1 use only the interval $[u,v]\subseteq W$, the lifting property [F1] and the length parity [F2]; the quotient enters only through [F14], which records that the quotient order is the restriction of the Bruhat order and asserts no fullness of quotient intervals, so the sign formula is not transferred to intervals of a proper parabolic quotient $W^I$: there the fullness of the interval is an additional hypothesis, and the companion page exhibits a quotient interval for which the formula fails. This is (iv). [F14, step 4.1] ∎

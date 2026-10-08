---
id: lem-kazhdan-lusztig-mu-edges-and-left-cells-are-transported-by-star-operations
kind: lemma
title: "$\\mu$-edges and left equivalence are transported by star operations"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges, def-star-operations-on-the-symmetric-group, def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells, thm-kazhdan-lusztig-basis-multiplication-formula, thm-kazhdan-lusztig-polynomial-recursion, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-bruhat-order-basic-properties-for-permutations]
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bill Casselman, Notes on Kazhdan–Lusztig polynomials — the right-descent recursion, mixed-descent vanishing, and the full star-operation leading-coefficient argument."
      url: "https://www.math.ubc.ca/~cass/research/pdf/KL.pdf"
      locator: "Proposition 4.4 and Corollary 4.5, printed p. 7: right-descent recursion and its simplification; §§5.2–5.3, printed pp. 8–9: mixed-descent identity and leading-coefficient vanishing; Theorem 6.2 and its complete two-case proof, printed pp. 11–13. The convention $q=v^{-2}$ and the coefficient-of-$v$ definition of $\\mu$ agree after translating Casselman's $\\pi_{y,x}(0)$ to this page's $\\mu(y,x)$."
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 — star operations, nonvanishing transport, and cell transport."
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§3.2, Definition 3.2 and Lemma 3.4; §3.3, Propositions 3.6–3.7, printed pp. 7–8."
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** $n\ge3$, adjacent simple reflections $s=s_i$, $t=s_{i+1}$, the right star domain $D_i$, and $D_{ij},D_{ji},K_{ij}$ as defined in [[lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges]].

[F1] The rank-two right cosets have six elements with relative lengths $0,1,1,2,2,3$. The domain $D_i$ consists of the four middle elements, and the star involution exchanges the two adjacent pairs; its restriction $K_{ij}:D_{ij}\to D_{ji}$ is a bijection with inverse $K_{ji}$ ([[lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges]], [[def-star-operations-on-the-symmetric-group]]).

[F2] Write $C_w=\underline H_w=\sum_{a\le w}p_{a,w}H_a$. For $a<w$, $p_{a,w}\in v\mathbb Z[v]$ has fixed parity $\ell(w)-\ell(a)$, and $\mu(a,w)$ is its coefficient of $v$; $\mu(a|w)\ne0$ means that one of the two comparable orientations has nonzero coefficient ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]).

[F3] If $b s<b$, the right-descent polynomial recursion in [[thm-kazhdan-lusztig-polynomial-recursion]] applies to every $a\le b$, with coefficients $p_{a,b}=v^{\ell(b)-\ell(a)}P_{a,b}(v^{-2})$ and $\mu$ as in [F2].

[F4] If $bs<b$, the multiplication formula gives $C_bC_s=(v+v^{-1})C_b$; since [F2, F5] give $C_s=H_s+v$, this yields $C_bH_s=v^{-1}C_b$. The same multiplication formula gives every simple-generator coefficient in $C_sC_b$, and for an off-diagonal left step $a\leftarrow_L b$ the cell supplier gives $R(b)\subseteq R(a)$ ([[thm-kazhdan-lusztig-basis-multiplication-formula]], [[def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells]]).

[F5] Every Bruhat cover $a\lessdot b$ has $p_{a,b}=v$ and hence $\mu(a,b)=1$; Bruhat order is graded, has the simple-reflection lifting properties, and is inversion invariant ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]], [[lem-bruhat-order-basic-properties-for-permutations]]).

[F6] The $H_s$ generate the algebra, and the standard basis satisfies $H_wH_s=H_{ws}$ when $ws>w$ and $H_wH_s=H_{ws}+(v^{-1}-v)H_w$ when $ws<w$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F7] For every $w\in D_i$, $w\sim_Rw^*$, and the star map preserves its right-coset domain and is involutive ([[lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges]]).

## Statement

Fix $i$, let $D_{ij},D_{ji},K_{ij}$ be as in [[lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges]], and use the convention $\mu(u|v)\ne0$ of [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]. (a) **Edge transport.** For $y,w\in D_{ij}$ with $y\ne w$ and $\mu(y|w)\ne0$ one has $\mu(K_{ij}(y)|K_{ij}(w))\ne0$, and in fact the transported leading coefficients agree: $\mu(K_{ij}(y)|K_{ij}(w))=\mu(y|w)$, the transported pair being taken in the Bruhat order in which it is comparable. (b) **Transport of the preorder.** For $x,y\in D_{ij}$: $x\le_Ly\iff K_{ij}(x)\le_LK_{ij}(y)$ and $x\le_Ry\iff K_{ij}(x)\le_RK_{ij}(y)$; in particular $x\sim_Ly\iff K_{ij}(x)\sim_LK_{ij}(y)$ and $x\sim_Ry\iff K_{ij}(x)\sim_RK_{ij}(y)$.

## Proof

**Proof technique:** compare constant terms of the right-recursion polynomials on the two star strings, then transport finite generator-coefficient chains.

1.1 **Recursion notation and mixed descents.** For $a<b$ put $\pi_{a,b}:=p_{a,b}/v$, put $\pi_{a,a}:=v^{-1}$, and put $\pi_{a,b}:=0$ if $a\not\le b$; then $\pi_{a,b}\in\mathbb Z[v]$ and $\pi_{a,b}(0)=\mu(a,b)$. If $a<b$, $as>a$, and $bs<b$, coefficient comparison in $C_bH_s=v^{-1}C_b$ gives $p_{a,b}=v p_{as,b}$, hence $\pi_{a,b}=v\pi_{as,b}$; therefore $\mu(a,b)=0$ unless $as=b$, when it is $1$. The right recursion from [F3], when $as<a$, $bs<b$, and $a\ne bs$, reads $\pi_{a,b}=\pi_{as,bs}+\bigl(\pi_{a,bs}-\mu(a,bs)\bigr)/v-\sum_{a<z<bs,\,zs<z}\mu(z,bs)\pi_{a,z}$. In particular, if $a\not\le bs$, it gives $\pi_{a,b}=\pi_{as,bs}$. [F2, F3, F4, algebra]

1.2 **Pairs in one right coset.** A right $\langle s,t\rangle$-coset meets $D_{ij}$ in two elements; the rank-two table shows these form a Bruhat cover, and their two star images form a Bruhat cover as well. By [F5], the $\mu$-coefficient is $1$ for both pairs. This proves (a) when $y,w$ belong to the same right coset. [F1, F5, algebra]

1.3 **Left-preorder transport.** Let $I_s$ (respectively $I_t$) be the $A$-span of the $C_w$ with $ws<w$ (respectively $wt<w$), and put $J=I_s\cap I_t$. For each simple reflection $r$, if $rw<w$ then $C_rC_w=(v+v^{-1})C_w$; if $rw>w$, the multiplication formula expresses $C_rC_w$ as $C_{rw}$ plus lower terms $C_z$ that are nonzero off-diagonal left steps. In the second case the leading term is itself a left step. By [F4], every such step preserves each right descent of $w$, so $I_s$ and $I_t$ are stable under left multiplication by each $C_r$. Since $\mathrm{id}<r$ is a Bruhat cover, [F2, F5] give $C_r=H_r+v$; [F6] says the $H_r$ generate the algebra, so $I_s$ and $I_t$ are left ideals. By the basis property in [F2], $J$ is spanned by elements with both descents, and the quotient bases of $I_s/J$ and $I_t/J$ are indexed by $D_{ij}$ and $D_{ji}$. Right multiplication by $C_t$ maps $I_s$ into $I_t$ by the right multiplication formula in [F4], and maps $J$ into $J$ by the descent formula; it is left-linear by associativity and induces $f:I_s/J\to I_t/J$. For $xs<x$, [F4] and $C_s=H_s+v$ from [F2, F5] give $C_xH_s=v^{-1}C_x$. If also $zs>z$, comparison of the $H_z$ coefficients using [F6] gives $p_{z,x}=v p_{zs,x}$. If $zs=x$, then $z=xs$ and $\mu(z,x)=1$; if $zs<x$, the right side lies in $v^2\mathbb Z[v]$ and $\mu(z,x)=0$; if $zs\not\le x$, both coefficients vanish by support. Thus in this mixed-descent situation $\mu(z,x)$ can be nonzero only for $z=xs$. In a right $\langle s,t\rangle$-coset with shortest representative $\widetilde w$, its two $D_{ij}$ elements are $x=\widetilde ws$ and $x=\widetilde wts$. For $x=\widetilde ws$, the right-ascent formula for $C_xC_t$ has leading term $C_{xt}=C_{\widetilde wst}$. A correction index surviving modulo $J$ has $zs>z$, so the mixed-descent identity forces $z=xs=\widetilde w$. But $\widetilde wt>\widetilde w$, contradicting the condition $zt<z$ on correction indices; hence no correction survives and $f([C_x])=[C_{x^*}]$. For $x=\widetilde wts$, the leading term $C_{xt}$ has both descents and dies in $J$; any correction surviving modulo $J$ must have $zs>z$, so the identity forces $z=xs=\widetilde wt=x^*$, with coefficient $1$ because $x^*s=x$ is a Bruhat cover. Thus again $f([C_x])=[C_{x^*}]$. Exchanging $s,t$ gives the inverse left-linear map $g:I_t/J\to I_s/J$, also sending each quotient basis vector to its star. Hence for every simple $r$ and $x,z\in D_{ij}$, left-linearity and comparison in the quotient bases give equality between the coefficient of $C_z$ in $C_rC_x$ and that of $C_{z^*}$ in $C_rC_{x^*}$. Along a left-preorder chain $x=w_0\leftarrow_L\cdots\leftarrow_Lw_m=y$ with endpoints in $D_{ij}$, [F4] gives $R(y)\subseteq R(w_k)\subseteq R(x)$, so every intermediate has the same singleton descent set on $\{s,t\}$. The chain stays in $D_{ij}$ and the coefficient equality transports every step; diagonal steps and zero-length chains transport as well. Applying $g$ gives the converse. Thus $x\le_Ly$ iff $K_{ij}(x)\le_LK_{ij}(y)$. This argument uses support and nonzero coefficients only, not positivity or Choice. [F1, F2, F4, F5, F6, algebra]

1.4 **Right-preorder transport.** By [F7], $K_{ij}(x)\le_Rx$ and $y\le_RK_{ij}(y)$, so transitivity gives $x\le_Ry\Rightarrow K_{ij}(x)\le_RK_{ij}(y)$. Applying the same implication to the inverse star $K_{ji}$ gives the converse. [F1, F7, algebra]

2.1 **Different cosets, stars moving by the same simple reflection.** Let $a<b$ be a comparable pair with odd length difference in distinct right cosets. Suppose both stars move down by the same simple reflection, $a^*=as<a$ and $b^*=bs<b$. If $a\not\le bs$, step 1.1 gives $\pi_{a,b}=\pi_{as,bs}$. Otherwise $a<bs$ because the cosets differ. Parity gives $\mu(a,bs)=0$, and the right recursion gives $$\pi_{a,b}\equiv\pi_{as,bs}+\pi_{at,bs}-\sum_{a<z<bs,\,zs<z}\mu(z,bs)\mu(a,z)\pmod v.$$ Here $bst<bs$ and $at>a$, so mixed descent gives $\pi_{a,bs}/v=\pi_{at,bs}$. Bruhat lifting gives $at\le bs$; distinct cosets make the inequality strict. The rank-two table gives $at\,s<at$. The only summand with nonzero constant term is $z=at$: if a summand has $zt>z$, mixed descent for $\mu(z,bs)$ forces $z=bst$, which has $zs>z$ and is excluded; hence $zt<z$, and mixed descent for $\mu(a,z)$ then forces $z=at$. Since $a\lessdot at$, $\mu(a,at)=1$, so this constant-term summand cancels $\pi_{at,bs}(0)$. Thus $\mu(a,b)=\mu(as,bs)$. If both stars move up by the same simple reflection, apply this calculation to the starred pair and use involutivity. When the common star multiplier gives opposite directions, mixed descent using the other generator rules out a nonzero coefficient, since each element of $D_{ij}$ has exactly one of the two right descents. These are the same-multiplier cases of Casselman's two-case calculation. [F1, F2, F3, F4, F5, algebra]

3.1 **Different cosets, stars moving in opposite directions.** Take the lower element $a$ with $a^*=as<a$ and the upper element $b$ with $b^*=bt>b$; the reverse arrangement is covered by applying Casselman's symmetric two-case argument to the starred pair. The rank-two table gives $bs<b<bt<bts$ and $ast<as<a<at$, with $ast\,s>ast$ and $bs\,t>bs$. If either $\mu(a,b)$ or $\mu(as,bt)$ is nonzero, then $as\le b$: this is immediate from $a<b$ in the first case; in the second, if $as\not\le b$, step 1.1 with right descent $t$ gives $\pi_{as,bt}=\pi_{ast,b}$, whose constant term is zero by mixed descent with $s$, because $ast\,s$ lies in $a$'s right coset while $b$ lies in a different one. Thus $\ell(b)-\ell(as)$ is even, so $\mu(as,b)=0$, and mixed descent gives $\pi_{as,b}=v\pi_{a,b}$. The recursion of step 1.1 applied to $(as,bt)$ gives $$\pi_{as,bt}=\pi_{ast,b}+\pi_{as,b}/v-\sum_{as<z<b,\,zt<z}\mu(z,b)\pi_{as,z},$$ hence modulo $v$ it is $\pi_{ast,b}+\pi_{a,b}-\sum\mu(z,b)\mu(as,z)$. This polynomial sum need not be empty, but its constant-term sum is zero. Indeed, if $\mu(z,b)\ne0$, mixed descent with $s$ forces $zs<z$ unless $z=bs$; that exception has $bs\,t>bs$, contrary to $zt<z$. If also $\mu(as,z)\ne0$, mixed descent with $s$ and $as\,s>as$ forces $z=a$, but $at>a$, again contrary to $zt<z$. Also $\mu(ast,b)=0$: $ast\,s>ast$, $bs<b$, and equality $ast\,s=b$ would put $a$ and $b$ in the same right coset. Thus $\pi_{as,bt}(0)=\pi_{a,b}(0)$. If neither coefficient is nonzero the equality is immediate; if either is nonzero this calculation proves the other is equal and nonzero. Casselman's complete symmetric two-case argument handles the involutive opposite orientation. Together with steps 1.2 and 2.1 this proves (a), including the symmetric convention for comparable orientations. [step 1.2, step 2.1, F1, F2, F3, F4, F5, algebra, step 1.1]

4.1 **Cell equivalences.** The left and right cell equivalences are mutual comparability. The left-preorder iff in step 1.3 and the right-preorder iff in step 1.4 therefore give both cell iff statements in (b); with (a) proved in step 3.1, all claims of the Statement follow. [step 1.3, step 1.4, step 3.1] ∎

## Remarks

The coefficient calculation in (a) follows Casselman, Theorem 6.2; its complete proof is at Proposition 4.4 and Corollary 4.5, printed p. 7; §§5.2–5.3, printed pp. 8–9; and Theorem 6.2, printed pp. 11–13. The right-recursion equations and mixed-descent vanishing were checked against the current normalized suppliers. Ariki, Proposition 3.6, supplies nonvanishing transport but not by itself the coefficient-equality proof.

The direct supplier [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]] still has an owner-held coefficientwise-nonnegativity clause outside the proved KL-1 result. This proof uses its basis, parity, and Bruhat-cover coefficient clauses only; it does not use positivity. The item remains provisional and must be escalated until the owner resolves that supplier scope and its actual use. The proof uses no Choice.

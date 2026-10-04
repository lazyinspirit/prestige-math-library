---
id: lem-compatible-signs-exist-on-the-bruhat-graph
kind: lemma
title: Compatible signs exist on the Bruhat graph
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-bruhat-rank-two-intervals-are-diamonds, lem-bruhat-covers-are-reflection-covers, lem-finite-weyl-strong-exchange-and-deletion, lem-finite-weyl-positive-roots-and-simple-reflections, lem-finite-weyl-closed-chambers-and-stabilizers, def-bruhat-order-on-a-finite-weyl-group]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "A. Rocha-Caridi, Splitting criteria, Trans. AMS 262 (1980), Lemma 10.4 and its proof, pp. 354-355"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
    - title: "J. Bernstein, I. Gelfand and S. Gelfand, Differential operators on the base affine space and a study of g-modules, Lemma 10.4 and Sec. 11 (author-hosted scan)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/BGG-differ-operators.pdf"
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Lemma (10.3,10.4), p. 10"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "N. Hemelsoet and R. Voorhaar, A computer algorithm for the BGG resolution, arXiv:1911.00871, Prop. 2.3 and Sec. 4.2"
      url: "https://arxiv.org/pdf/1911.00871"
---

## Statement

There is a function $\varepsilon$ from the set of arrows $x\to y$ of the Bruhat graph to $\{\pm1\}$ such that for every square $(x,m_1,m_2,y)$ the product of the four signs is $-1$: $\varepsilon(x,m_1)\varepsilon(m_1,y)\varepsilon(x,m_2)\varepsilon(m_2,y)=-1$. Consequently the two saturated paths of a rank-two interval always carry opposite total signs. Moreover, for any two compatible signings $\varepsilon,\varepsilon'$ there are vertex signs $c(x)\in\{\pm1\}$, with $c(e)=1$, such that $\varepsilon'(x,y)/\varepsilon(x,y)=c(x)/c(y)$ on every cover.

## Facts & Assumptions

**Given:** The finite Weyl group $W$, its Bruhat covers oriented downwards, and its rank-two diamonds.

[F1] Bruhat order has the subword property and the right lifting property: if $u\le v$, $us>u$ and $vs<v$ for a simple reflection $s$, then $u\le vs$ and $us\le v$. If both $u,v$ descend under $s$, then $us\le vs$. These are proved in [[lem-bruhat-rank-two-intervals-are-diamonds]] from [[def-bruhat-order-on-a-finite-weyl-group]]. A nonidentity element has a simple right descent, and the unique longest element reverses all positive roots ([[lem-finite-weyl-strong-exchange-and-deletion]], [[lem-finite-weyl-positive-roots-and-simple-reflections]], [[lem-finite-weyl-closed-chambers-and-stabilizers]]).

[F2] Every interval of length two has exactly two middles ([[lem-bruhat-rank-two-intervals-are-diamonds]]).

## Proof

1.1 Induct on $\ell(w)$ to sign every cover in the principal ideal $I(w)=\{x:x\le w\}$ with product $-1$ on every diamond. For $w=1$ there are no covers. Choose a simple right descent $s$ of $w$ and put $J=I(ws)\subset I(w)$. By induction sign all edges in $J$. Every $x\in I(w)\setminus J$ descends under $s$: otherwise lifting $x\le w$ would give $x\le ws$. Moreover $xs\le ws$, by descent monotonicity. Set $\varepsilon(x,xs)=1$ for these outside vertices. If $x\rhd y$ is any other edge with $x$ outside, then $y$ also descends: if $ys>y$, lifting gives $ys\le x$, and equality of lengths forces $ys=x$, the excluded vertical edge. Thus $xs\rhd ys$, both vertices lying in $J$, and $x,y,xs,ys$ is a diamond. Define $\varepsilon(x,y)=-\varepsilon(y,ys)\varepsilon(xs,ys)$. The first factor is already defined, either by induction when $y\in J$, or as $1$ when $y$ is outside. This assigns each edge once and makes every such side diamond negative. [F1, F2, base, ih, induction, construct]

2.1 Let $D=(a,b,c,d)$ be a diamond in $I(w)$. If $a\in J$, all its vertices lie in $J$, so its product is $-1$ by induction. Suppose $a$ is outside. If neither $b$ nor $c$ equals $as$, both descend by step 1.1. Then $d$ descends too: if $ds>d$, lifting $d\le b,c$ gives $ds\le b,c$; equality of lengths forces $ds=b=c$, a contradiction. The four translated vertices $as,bs,cs,ds$ are distinct, lie in $J$, and form a diamond by descent monotonicity and their lengths. Each of the four side diamonds $(x,y,xs,ys)$ for the edges of $D$ has product $-1$: step 1.1 gives this if $x$ is outside, and induction gives it if $x\in J$. Multiplying these four products and the product of the translated diamond leaves exactly the product of $D$, because each vertical edge and each translated edge occurs twice. Hence its product is $(-1)^5=-1$. [F1, F2, step 1.1, algebra]

2.2 The remaining case, after exchanging $b,c$, is $b=as$. Here $c\ne as$ descends, and $cs\le as=b$; it has length $\ell(d)$ and differs from $d$ unless $ds>d$. If $ds>d$, lifting against $c$ gives $ds=c$, so $cs=d$. Thus $D$ is precisely the side diamond for $a\rhd c$, already made negative in step 1.1. If $ds<d$, the vertices $b,c,cs,d,ds$ give three diamonds: $(a,b,c,cs)$, $(c,d,cs,ds)$ and $(b,d,cs,ds)$. Indeed $b\rhd cs$ follows from $cs\le b$ and the lengths, $cs\rhd ds$ from descent monotonicity applied to $d\le c$, and $b\rhd d$, $d\rhd ds$, $c\rhd cs$ are given covers. The first two are side diamonds, negative by step 1.1 or induction; the last lies in $J$ because $b\in J$. Multiplying their three products cancels all extra edges twice and leaves exactly the product of $D$. It is therefore $(-1)^3=-1$. [F1, F2, step 1.1, algebra]

3.1 Steps 2.1 and 2.2 exhaust all diamonds, proving the induction. Every $x$ lies below the longest element: repeatedly append a simple reflection that increases length, producing Bruhat covers. Length is bounded on the finite group, so this stops at an element $v$ with $v\alpha_i<0$ for every simple root by the simple-reflection criterion. Every positive root is a nonnegative combination of simple roots, so $v$ reverses all positive roots and is the longest element by [F1]. Thus take $w$ to be that element to obtain a signing on all of $W$. In a diamond the two path products $P_1,P_2\in\{\pm1\}$ satisfy $P_1P_2=-1$, hence $P_2=-P_1$, the required consequence. For $W=\{1\}$ the empty signing satisfies the assertion vacuously. The construction uses only recursion on a finite group and selection from finite sets, so no infinite Choice principle is used. [F1, step 2.1, step 2.2, discharge-induction: strong induction on $\ell(w)$, algebra]

4.1 For the last assertion put $r(x,y)=\varepsilon'(x,y)/\varepsilon(x,y)$, whose product on each diamond is $1$. Induct on $\ell(w)$ to find $c(e)=1$ and $r(x,y)=c(x)/c(y)$ on $I(w)$. The identity ideal is immediate. With $s,J$ as in step 1.1, take the inductively supplied signs on $J$ and set $c(x)=r(x,xs)c(xs)$ for every $x$ outside $J$. This handles vertical edges. Every other edge $x\rhd y$ with $x$ outside has the side diamond $(x,y,xs,ys)$ of step 1.1, with $xs,ys\in J$. Also $r(y,ys)=c(y)/c(ys)$, either by induction when $y\in J$ or by the new definition otherwise. Its diamond identity gives $r(x,y)r(y,ys)=r(x,xs)r(xs,ys)$; substituting the known ratios yields $r(x,y)=c(x)/c(y)$. All remaining edges lie in $J$. Taking $w$ to be the longest element completes this finite induction and proves the assertion. [F1, step 1.1, step 3.1, base, ih, discharge-induction: induction on principal ideals, algebra] ∎

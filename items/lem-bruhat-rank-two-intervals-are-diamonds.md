---
id: lem-bruhat-rank-two-intervals-are-diamonds
kind: lemma
title: Bruhat intervals of rank two are diamonds
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-bruhat-order-on-a-finite-weyl-group, lem-finite-weyl-strong-exchange-and-deletion, lem-finite-weyl-positive-roots-and-simple-reflections, lem-bruhat-covers-are-reflection-covers, def-finite-weyl-root-system-lattice-and-chamber-conventions]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Bernstein, I. Gelfand and S. Gelfand, Differential operators on the base affine space and a study of g-modules, Lemma 10.3 and Sec. 11 (author-hosted scan, printed pp. 55-56)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/BGG-differ-operators.pdf"
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Lemma (10.3,10.4), p. 10"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "N. Hemelsoet and R. Voorhaar, A computer algorithm for the BGG resolution, arXiv:1911.00871, Prop. 2.2, p. 3"
      url: "https://arxiv.org/pdf/1911.00871"
---

## Statement

Let $x,y\in W$ with $y<x$ and $\ell(x)=\ell(y)+2$. Then the interval $\{m:y<m<x\}$ has exactly two elements $m_1\ne m_2$; each satisfies $x\rhd m_i\rhd y$. Equivalently, the number of saturated chains $x\rhd m\rhd y$ is exactly $2$, and $[y,x]=\{y,m_1,m_2,x\}$.

## Facts & Assumptions

**Given:** The finite reduced crystallographic root system with Weyl group $W$ and its Bruhat order; elements $x>y$ of $W$.

[F1] $u\le v$ holds exactly when some (equivalently every) reduced expression of $v$ contains a reduced subword expression of $u$, and exactly when there is a saturated reflection chain $u=w_0,\dots,w_k=v$ with $w_{j+1}=t_jw_j$, $\ell(w_{j+1})=\ell(w_j)+1$; every such chain has $\ell(v)-\ell(u)$ steps, and a relation with length difference one is a cover. The same item proves: for every simple reflection $s$, the map $x\mapsto x^+$ with $x^+=xs$ if $\ell(xs)=\ell(x)+1$ and $x^+=x$ otherwise satisfies $x\le y\Rightarrow x^+\le y^+$ ([[def-bruhat-order-on-a-finite-weyl-group]]).

[F2] $\ell(ws)=\ell(w)\pm1$ for every simple reflection $s$, and if $w\ne1$ then some simple $s$ has $\ell(ws)=\ell(w)-1$ ([[lem-finite-weyl-strong-exchange-and-deletion]], [[def-bruhat-order-on-a-finite-weyl-group]]).

## Proof

1.1 **Right lifting.** Let $s$ be a simple reflection and $x\le y$ with $ys<y$ and $xs>x$. Then $x\le ys$ and $xs\le y$. Indeed, choose a reduced expression $y=s_1\cdots s_q$ ending in $s$, which exists because $ys<y$; by the subword characterisation in [F1], $x$ has a reduced subword expression inside $s_1\cdots s_q$. That subword cannot use the last letter: if it did, then $x=x's$ with $\ell(x)=\ell(x')+1$ and thus $xs=x'$ has length $\ell(x)-1$, contradicting $xs>x$. Hence $x$ is a reduced subword of $s_1\cdots s_{q-1}$, which is a reduced expression for $ys$, so $x\le ys$. Adjoining the last letter to a reduced subword for $x$ gives a reduced expression of length $\ell(x)+1=\ell(xs)$ for $xs$, so $xs\le y$. [given, F1, algebra]

2.1 Three consequences of step 1.1 are used below. (a) If $x\le y$ and $xs<x$, then $xs\le y$ since $xs<x\le y$. (b) If $x\le y$, $xs<x$ and $ys<y$, then $xs\le ys$: apply (a) to get $xs\le y$, then apply step 1.1 to the pair $xs\le y$, whose right products are $(xs)s=x>xs$ and $ys<y$. (c) If $x\le y$, $xs>x$ and $ys>y$, then $xs\le ys$, which is the order-preservation statement in [F1]. [F1, step 1.1]

2.2 **Main claim, case $ys>y$.** Let $y<x$ with $\ell(x)=\ell(y)+2$. By [F2] choose a simple reflection $s$ with $xs<x$, and put $x_0=xs$, $y_0=ys$; then $\ell(x_0)=\ell(x)-1=\ell(y)+1$ and $\ell(y_0)=\ell(y)\pm1$. Assume first that $ys>y$, so $y_0>y$. Step 1.1 applied to $y\le x$ gives $y\le x_0$ and $y_0\le x$. Hence $y_0\rhd y$ and $y_0\le x$ with $\ell(x)=\ell(y_0)+1$ give $x\rhd y_0$; similarly $x_0\rhd y$ and $x\rhd x_0$. Thus $y_0$ and $x_0$ are two distinct elements between $y$ and $x$. Conversely, let $m$ be any element with $y<m<x$. If $ms>m$, step 1.1 applied to $m\le x$ gives $m\le x_0$, and $\ell(m)=\ell(y)+1=\ell(x_0)$ forces $m=x_0$. If $ms<m$, step 1.1 applied to $y\le m$ gives $y_0\le m$, and $\ell(y_0)=\ell(y)+1=\ell(m)$ forces $m=y_0$. Hence the interval is exactly $\{y,y_0,x_0,x\}$. [F1, F2, step 1.1, base, algebra]

3.1 **Main claim, case $ys<y$; reduction.** Now assume $ys<y$, so $y_0=ys$. By consequence (b) of step 2.1 applied to $y\le x$, we get $y_0\le x_0$, and $\ell(x_0)-\ell(y_0)=\ell(x)-\ell(y)=2$; since $y_0\ne x_0$ we may apply the induction hypothesis (strong induction on $\ell(x)$) to the pair $y_0<x_0$: its interval has exactly two elements $n_1,n_2$, with $x_0\rhd n_i\rhd y_0$. This is the induction step: we analyse the elements between $y$ and $x$. Every such $m$ satisfies $ms\ne m$; if $ms>m$, step 1.1 applied to $m\le x$ gives $m\le x_0$, and $\ell(m)=\ell(y)+1=\ell(x_0)$ gives $m=x_0$. If $ms<m$, then $n:=ms$ satisfies $y_0\le n$ and $n\le x_0$ by the two applications of consequence (b) to $y\le m$ and $m\le x$, and $\ell(n)=\ell(m)-1=\ell(y_0)+1$, so $n\in\{n_1,n_2\}$; moreover $ns=m>n$. Conversely, if $n\in\{n_1,n_2\}$ and $ns>n$, then $m:=ns$ satisfies $y\le m$ and $m\le x$ by the two applications of consequence (c) to $y_0\le n$ and $n\le x_0$, and $\ell(m)=\ell(n)+1=\ell(y)+1$, so $x\rhd m\rhd y$. Thus the elements between $y$ and $x$ are exactly $x_0$ (if it lies between, i.e. if $y\le x_0$) together with the elements $ns$ for those $n\in\{n_1,n_2\}$ with $ns>n$. [F1, F2, step 1.1, step 2.1, ih, algebra]

4.1 **Case $ys<y$ and $y\le x_0$.** Then $x_0$ lies between $y$ and $x$. The element $y$ itself is a middle of the interval $y_0<x_0$: indeed $y\rhd y_0$ (case hypothesis), $y\le x_0$ and $\ell(x_0)=\ell(y)+1$, so $x_0\rhd y$. As $y=ys\cdot s=y_0s$ does not rise under $s$, at least one of $n_1,n_2$ fails to rise. If the other one, say $n$, also failed to rise, then step 1.1 applied to $y_0\le n$ would give $y=y_0s\le n$ with $\ell(y)=\ell(n)$, so $y=n$, contradiction. Hence exactly one of $n_1,n_2$ rises, and by step 3.1 the interval between $y$ and $x$ consists of $x_0$ and that one element $ns$: exactly two elements. [step 2.1, step 3.1, algebra]

4.2 **Case $ys<y$ and $y\nleq x_0$.** Then $x_0$ is not between $y$ and $x$. If some $n\in\{n_1,n_2\}$ failed to rise, then step 1.1 applied to $y_0\le n$ would give $y=y_0s\le n$ with $\ell(y)=\ell(n)$, hence $y=n$, and then $y\le x_0$ because $n\le x_0$—contrary to the case hypothesis. Therefore both $n_1,n_2$ rise, and step 3.1 exhibits exactly the two elements $n_1s,n_2s$ between $y$ and $x$. [step 2.1, step 3.1, algebra]

5.1 The two cases of steps 2.2 and 3.1 (with the sub-cases resolved in steps 4.1 and 4.2) cover all possibilities for $y<x$ with $\ell(x)=\ell(y)+2$, and in each the set $\{m:y<m<x\}$ has exactly two elements. The base case of the induction is $\ell(x)=2$, $\ell(y)=0$, where $y=1$ and the hypothesis $ys>y$ of step 2.2 holds for every simple $s$, so step 2.2 applies; the induction step uses only the pair $y_0<x_0$ with $\ell(x_0)=\ell(x)-1<\ell(x)$. Since every element strictly between $y$ and $x$ has length $\ell(y)+1=\ell(x)-1$ (the chain description of [F1] forces length to increase by one along any saturated chain), each such element is a cover of $y$ and is covered by $x$, and $[y,x]=\{y,m_1,m_2,x\}$. [F1, step 2.2, step 4.1, step 4.2, discharge-induction: strong induction on $\ell(x)$] ∎

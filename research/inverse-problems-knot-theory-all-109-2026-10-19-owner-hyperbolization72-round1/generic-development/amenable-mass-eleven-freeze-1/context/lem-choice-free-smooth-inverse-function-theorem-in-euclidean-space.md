---
id: "lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space"
kind: "lemma"
title: "Choice-free smooth inverse function theorem in Euclidean space"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-c-one-map-and-local-inverse","def-invertible-euclidean-linear-map","lem-newton-contraction-near-an-invertible-derivative","thm-banach-fixed-point","thm-euclidean-space-complete","def-total-derivative-in-euclidean-space","thm-chain-rule-for-total-derivatives","thm-total-differentiability-gives-a-local-linear-bound-and-continuity","def-ck-euclidean-maps-and-diffeomorphisms","thm-ck-euclidean-maps-closed-under-algebra-and-composition","lem-matrix-inversion-preserves-ck-regularity"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: J. Lebl, Basic Analysis II, Theorem 8.5.1 and higher-regularity discussion
      url: https://www.jirka.org/ra/html/sec_svinvfuncthm.html
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "contraction"
---

## Statement

In ZF, let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $f:U\to\mathbb R^n$ be smooth, and let $a\in U$. If $Df(a)$ is invertible, then there are open neighbourhoods $a\in V\subseteq U$ and $f(a)\in W$ such that $f|_V:V\to W$ is a diffeomorphism. Writing $g=(f|_V)^{-1}$,
$$Dg(y)=Df(g(y))^{-1}\qquad(y\in W).$$
No choice axiom is used.

## Facts & Assumptions

**Given:** The positive dimension, open set, smooth map, point, and invertible derivative in the Statement. Put $b=f(a)$, $A=Df(a)$, and $B=A^{-1}$.

[F1] [[lem-newton-contraction-near-an-invertible-derivative]] supplies $R>0$, $0\le q<1$, and $C>0$ such that $\overline B(a,R)\subseteq U$, each $T_y(x)=x+B(y-f(x))$ is $q$-Lipschitz there, every $Df(x)$ there is invertible, $\|Bv\|_2\le C\|v\|_2$, and $\|Df(x)^{-1}v\|_2\le C(1-q)^{-1}\|v\|_2$.

[F2] [[thm-euclidean-space-complete]] makes $\mathbb R^n$ complete, and [[thm-banach-fixed-point]] gives the unique fixed point of a specified self-contraction of a nonempty complete metric space by its recursively specified iterates.

[F3] Total differentiability is the linear expansion with $o(\|h\|_2)$ remainder, and it implies continuity ([[def-total-derivative-in-euclidean-space]], [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[F4] Smooth Euclidean maps and diffeomorphisms have the meaning in [[def-ck-euclidean-maps-and-diffeomorphisms]]. Finite componentwise algebra and composition preserve $C^r$ regularity, and inversion of a matrix-valued $C^r$ map preserves that regularity on the invertible locus ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[lem-matrix-inversion-preserves-ck-regularity]]).

[F5] Invertibility and a local $C^1$ inverse have the meanings in [[def-invertible-euclidean-linear-map]] and [[def-c-one-map-and-local-inverse]]; derivatives obey the chain rule ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** contraction.

1.1 Take $R,q,C$ from [F1] and choose the explicit positive number $\delta=(1-q)R/(2C)$. Put $W=B(b,\delta)$. For $y\in W$ and $x\in\overline B(a,R)$, $$\|T_y(x)-a\|_2\le\|T_y(x)-T_y(a)\|_2+\|B(y-b)\|_2\le qR+C\delta=(1+q)R/2<R.$$ Thus $T_y$ maps the closed ball strictly into its open interior. [F1, algebra]

1.2 The closed ball is complete without choice. Indeed, a Cauchy sequence $(x_k)$ in it is Cauchy in $\mathbb R^n$, so [F2] gives its unique limit $x$. The triangle inequality yields $\|x-a\|_2\le\|x-x_k\|_2+R$ for every $k$; if $\|x-a\|_2>R$, choosing $k$ with $\|x-x_k\|_2<\|x-a\|_2-R$ is a contradiction. Hence $x$ remains in the ball. The ball is nonempty because it contains $a$. [F2]

2.1 For each fixed $y\in W$, [F1], step 1.1, step 1.2, and [F2] give a unique fixed point $g(y)\in\overline B(a,R)$. This defines a function without a choice axiom: $g(y)$ is the unique object satisfying the displayed fixed-point property. Its equation is $B(y-f(g(y)))=0$, hence $f(g(y))=y$ because $B$ is injective; step 1.1 puts $g(y)$ in $B(a,R)$. [F1, F2, F5, step 1.1, step 1.2]

3.1 If $x,z\in\overline B(a,R)$ and $f(x)=f(z)=y$, then $T_y(x)=x$ and $T_y(z)=z$, so [F1] gives $\|x-z\|_2\le q\|x-z\|_2$ and therefore $x=z$. Define $V=B(a,R)\cap f^{-1}[W]$. By [F3], $V$ is open; it contains $a$, lies in $U$, and step 2.1 together with injectivity shows that $f|_V:V\to W$ is bijective with inverse $g$. [F1, F3, step 2.1]

3.2 For $y,z\in W$, the fixed-point equations and [F1] give $$\|g(y)-g(z)\|_2\le q\|g(y)-g(z)\|_2+C\|y-z\|_2,$$ so $\|g(y)-g(z)\|_2\le C(1-q)^{-1}\|y-z\|_2$. Thus $g$ is Lipschitz and continuous. [F1, step 2.1, algebra]

4.1 Fix $y\in W$, put $x=g(y)$ and $L=Df(x)$. For small $h$ with $y+h\in W$, put $k=g(y+h)-x$. Step 3.2 gives $\|k\|_2=O(\|h\|_2)$, while [F3] and $f(g(y+h))-f(g(y))=h$ give $h=Lk+r(k)$ with $\|r(k)\|_2=o(\|k\|_2)$. The inverse bound in [F1] therefore gives $k=L^{-1}h-L^{-1}r(k)=L^{-1}h+o(\|h\|_2)$, including the case $k=0$. Hence $Dg(y)=Df(g(y))^{-1}$. The chain rule in [F5] also gives $Df(g(y))Dg(y)=I$ from $f\circ g=\operatorname{id}_W$, consistently with this formula. [F1, F3, F5, step 2.1, step 3.2]

5.1 The map $g$ is $C^1$: it is continuous by step 3.2, $Df\circ g$ is continuous, and [F4] makes its inverse matrix $Dg$ continuous. Inductively, suppose $g$ is $C^r$ for some $r\ge1$. Because $f$ is smooth, the matrix entries of $Df$ are $C^r$; [F4] makes $Df\circ g$ and then $(Df\circ g)^{-1}=Dg$ of class $C^r$. Thus the first partial derivatives of $g$ are $C^r$, so [F4] makes $g$ of class $C^{r+1}$. Induction proves $g$ is smooth, and [F4] and step 3.1 make $f|_V$ a diffeomorphism. [F4, step 3.1, step 3.2, step 4.1, induction]

6.1 The hypothesis $n\ge1$ excludes the zero-dimensional Euclidean convention; dimension one is included verbatim. The datum $a\in U$ makes the empty-domain case impossible. Invertibility excludes a degenerate derivative, while zero increments are covered in step 4.1. All domains are open, and the closed ball is used only as the complete space for iteration, so no boundary point is asserted to lie in $V$. The construction chooses explicit $\delta$, starts every Newton iteration at the specified point $a$, and defines each value by uniqueness; finite induction on derivative order and unique Euclidean limits use no choice axiom. [F1, F2, F4, step 1.1, step 1.2, step 2.1, step 4.1, step 5.1] ∎

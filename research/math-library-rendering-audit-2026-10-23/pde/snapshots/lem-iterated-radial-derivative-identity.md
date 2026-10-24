---
id: lem-iterated-radial-derivative-identity
kind: lemma
title: "The iterated radial-derivative identity behind the odd-dimensional reduction"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
proof_strategy: direct
deps: [thm-algebra-of-derivatives]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed p. 174, Lemma 7.6 with identity (7.18) (proof read in full; adapted to the stated differentiability class)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3, Problem 14(a), printed p. 53, the parallel recursion for spherical waves"
---


## Statement

Let $k\ge1$ and let $D_r:=r^{-1}\partial_r$ be the radial derivative on $(0,\infty)$. For every $f\in C^{k+1}((0,\infty))$,
$$\frac{\partial^2}{\partial r^2}D_r^{k-1}\bigl(r^{2k-1}f(r)\bigr)=D_r^{k-1}\Bigl[r^{2k-1}\frac{1}{r^{2k}}\frac{\partial}{\partial r}\bigl(r^{2k}\partial_rf(r)\bigr)\Bigr]$$
on $(0,\infty)$. Both sides are finite combinations of derivatives of $f$ computed by the product and quotient rules; no integral and no differential equation for $f$ is used.

## Facts & Assumptions

**Given:** an integer $k\ge1$, a function $f\in C^{k+1}((0,\infty))$, and the operator $D_r=r^{-1}\partial_r$ acting on functions on $(0,\infty)$.

[F1] Sums, products, quotients of differentiable functions are differentiable, with the usual sum, product, quotient rules; nonnegative integer powers are differentiated by repeated product rules, and reciprocals by the quotient rule on nonzero domains ([[thm-algebra-of-derivatives]]).

## Proof

1.1 Put $g:=r^{2k-1}f$, so that $g\in C^{k+1}((0,\infty))$ and $f=r^{1-2k}g$. The left-hand side is $\partial_r^2D_r^{k-1}g$, and for the right-hand side the product rule gives $r^{2k}\partial_rf=(1-2k)g+rg'$, hence $r^{-1}\partial_r(r^{2k}\partial_rf)=g''+(2-2k)r^{-1}g'$; since $r^{2k-1}r^{-2k}=r^{-1}$, the right-hand side is $D_r^{k-1}\bigl(g''+(2-2k)r^{-1}g'\bigr)$. It therefore suffices to prove $\partial_r^2D_r^{k-1}g=D_r^{k-1}\bigl(g''+(2-2k)r^{-1}g'\bigr)$ for every $g\in C^{k+1}((0,\infty))$, which is what the following steps do. [F1, given]

1.2 On $(0,\infty)$ the operators satisfy $\partial_r=rD_r$, hence $\partial_r^2=\partial_r(rD_r)=D_r+r^2D_r^2$; and for every $j\ge1$ and every $v\in C^j((0,\infty))$ one has $D_r^j(r^2v)=r^2D_r^jv+2j\,D_r^{j-1}v$. The last identity is proved by induction on $j$: for $j=1$, $D_r(r^2v)=r^{-1}(2rv+r^2v')=2v+r^2D_rv$; and if it holds for $j$, then $D_r^{j+1}(r^2v)=D_r\bigl(r^2D_r^jv+2j\,D_r^{j-1}v\bigr)=r^2D_r^{j+1}v+2D_r^jv+2j\,D_r^jv=r^2D_r^{j+1}v+2(j+1)D_r^jv$. [F1, algebra]

1.3 Fix $g\in C^{k+1}((0,\infty))$. If $k=1$, then $D_r^{k-1}(r^2D_r^2g)=r^2D_r^2g=r^2D_r^{k+1}g+2(k-1)D_r^kg$ directly; if $k\ge2$, the second identity of the previous step with $j=k-1$ and $v=D_r^2g$ gives the same equality. Also $g''=\partial_r^2g=D_rg+r^2D_r^2g$ by the first identity of the previous step, so $D_r^{k-1}g''=D_r^kg+D_r^{k-1}(r^2D_r^2g)=r^2D_r^{k+1}g+(2k-1)D_r^kg$. Moreover $r^{-1}g'=D_rg$, so $D_r^{k-1}\bigl((2-2k)r^{-1}g'\bigr)=(2-2k)D_r^kg$. [F1, algebra]

2.1 Adding the two pieces of the previous step gives $D_r^{k-1}\bigl(g''+(2-2k)r^{-1}g'\bigr)=r^2D_r^{k+1}g+(2k-1+2-2k)D_r^kg=r^2D_r^{k+1}g+D_r^kg$, and by the first identity of the second step this last quantity is $\partial_r^2D_r^{k-1}g$. This proves the equivalent identity for $g$ and hence, by the substitution of the first step, the identity of the statement. [F1, algebra] ∎ 

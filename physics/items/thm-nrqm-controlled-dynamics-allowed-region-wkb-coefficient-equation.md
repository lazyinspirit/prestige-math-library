---
id: thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation
aliases: [nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]
kind: theorem
domain: mathematics
title: "Allowed-region WKB coefficient equation"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-derivative, def-continuity-real, thm-chain-rule, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-bochner-integrable-function]
dependency_roles:
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-chain-rule: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), The WKB Approximation pp. 70-73 (WKB wavefunctions in the classically allowed region and the second-order correction)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "F. W. J. Olver, Asymptotics and Special Functions, Chapter 6 (Liouville-Green approximation and error bounds; survey recorded via DLMF Chapter 2, https://dlmf.nist.gov/2)"
      url: "https://dlmf.nist.gov/2"
---

## Statement

Let $a<b$ be real numbers, let $p\in C^2([a,b])$ with $p(x)>0$ for all
$x\in[a,b]$, let $h>0$, put $\theta(x):=\int_a^xp(s)\,ds$ and
$$w_\pm(x):=p(x)^{-1/2}e^{\pm i\theta(x)/h},\qquad q(x):=\frac{3p'(x)^2}{4p(x)^2}-\frac{p''(x)}{2p(x)}.$$
Then:

(a) $w_\pm\in C^2([a,b])$ and $w_\pm''+\dfrac{p^2}{h^2}w_\pm=q\,w_\pm$ pointwise on
$[a,b]$.

(b) The Wronskian $W:=w_+w_-'-w_+'w_-$ equals $-2i/h$ on $[a,b]$.

(c) Let $y\in C^2([a,b])$ solve $y''+\dfrac{p^2}{h^2}y=0$, let
$M(x):=\begin{pmatrix}w_+(x)&w_-(x)\\ w_+'(x)&w_-'(x)\end{pmatrix}$ and
$c(x):=\bigl(c_+(x),c_-(x)\bigr)^{\mathsf T}:=M(x)^{-1}\bigl(y(x),y'(x)\bigr)^{\mathsf T}$
(well defined by (b)). Then $c\in C^1([a,b];\mathbb C^2)$ and $c'=B(x)c$ with
$$B(x)=\frac{q(x)}{W}\begin{pmatrix}w_+(x)w_-(x)&w_-(x)^2\\ -w_+(x)^2&-w_+(x)w_-(x)\end{pmatrix},$$
and with $\|\cdot\|_1$ the $\ell^1$ norm on $\mathbb C^2$ one has
$\|B(x)\|_1=\dfrac{h|q(x)|}{p(x)}$ for every $x\in[a,b]$.

In particular $y=w_+c_++w_-c_-$, and the coefficient system is a nonsingular
linear ODE with explicitly bounded coefficients. No approximation of $y$ and no
physical interpretation is asserted here.

## Facts & Assumptions

**Given:** the interval $[a,b]$, the function $p\in C^2([a,b])$ with $p>0$, the
number $h>0$, the phase $\theta$, the functions $w_\pm$, $q$, an exact solution
$y\in C^2$ of $y''+(p^2/h^2)y=0$, and $M$, $c$ as in the statement.

[F1] Differentiation rules: sums, products, quotients and compositions of $C^2$ functions are $C^2$ and obey the product and chain rules; $p^{\pm1/2}$, $p^{-1}$ are $C^2$ because $p>0$ on the compact interval ([[def-derivative]], [[thm-chain-rule]], [[def-continuity-real]]).

[F2] The fundamental theorem of calculus: if $g:[a,b]\to\mathbb C^2$ is continuous and $c(x):=c(a)+\int_a^xg(s)\,ds$, then $c\in C^1$ and $c'=g$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[def-bochner-integrable-function]]).

[F3] Cramer's rule in dimension $2$: since $\det M=W\ne0$ by (b), $M(x)^{-1}=\frac1W\begin{pmatrix}w_-'&-w_-\\ -w_+'&w_+\end{pmatrix}$ and $c=M^{-1}(y,y')^{\mathsf T}$ is well defined ([[def-derivative]], algebra).

## Proof

1.1 [Differentiating the WKB waves] By [F1], $w_\pm'=(\pm ip/h-p'/(2p))w_\pm$ and a second differentiation gives $w_\pm''=\bigl[(\pm ip/h-p'/(2p))^2\pm ip'/h-\tfrac{d}{dx}(p'/(2p))\bigr]w_\pm$. Expanding, $(\pm ip/h)^2=-p^2/h^2$, the cross term in the square is $\mp ip'/h$, which cancels the explicit $\pm ip'/h$, and the remaining real terms are $3p'^2/(4p^2)-p''/(2p)=q$; hence $w_\pm''+\frac{p^2}{h^2}w_\pm=qw_\pm$. [F1, algebra]

2.1 [The Wronskian] $W=w_+w_-'-w_+'w_-=w_+w_-\bigl[(-ip/h-p'/(2p))-(ip/h-p'/(2p))\bigr]=-2ip\,w_+w_-/h$, and $w_+w_-=p^{-1}$; hence $W=-2i/h$. [step 1.1, F1, algebra]

3.1 [The coefficient equation] By [F1] and [F3], $M\in C^1$ has nonzero determinant and $(y,y')^{\mathsf T}\in C^1$, so $c=M^{-1}(y,y')^{\mathsf T}$ is $C^1$. Its defining identity gives both $y=w_+c_++w_-c_-$ and $y'=w_+'c_++w_-'c_-$. Differentiating the first identity gives $y'=w_+'c_++w_-'c_-+w_+c_+'+w_-c_-'$; comparison with the second identity therefore gives $w_+c_+'+w_-c_-'=0$. Differentiating the second identity and inserting (a) and the exact equation for $y$ yields $0=y''+\frac{p^2}{h^2}y=q(w_+c_++w_-c_-)+w_+'c_+'+w_-'c_-'$. These are respectively the first and second rows of $Mc'=-qy\,(0,1)^{\mathsf T}$. Hence $c'=-qy\,M^{-1}(0,1)^{\mathsf T}$, and $y=(w_+,w_-)c$, so $c'=Bc$ with $B:=-qM^{-1}\begin{pmatrix}0&0\\ w_+&w_-\end{pmatrix}=\frac qW\begin{pmatrix}w_+w_-&w_-^2\\ -w_+^2&-w_+w_-\end{pmatrix}$. [step 1.1, step 2.1, F1, F3, algebra]

4.1 [Regularity and coefficient bound] The right side $Bc$ is continuous because $q$, $p$ and $c$ are, so by [F2] the pair $c$ solves the integral equation $c(x)=c(a)+\int_a^xB(s)c(s)ds$ and is $C^1$ with $c'=Bc$; moreover the entries of $B$ are $qW^{-1}$ times $w_+w_-$, $w_-^2$, $-w_+^2$, $-w_+w_-$, all of modulus $p^{-1}$, so $|B_{ij}|=\frac{|q|}{|W|p}=\frac{h|q|}{2p}$. Therefore $\|B\|_1=\max\{|B_{11}|+|B_{21}|,|B_{12}|+|B_{22}|\}=\frac{h|q|}{p}$. [step 2.1, step 3.1, F1, F2, algebra] ∎

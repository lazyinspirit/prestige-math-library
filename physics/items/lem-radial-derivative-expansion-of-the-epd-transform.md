---
id: lem-radial-derivative-expansion-of-the-epd-transform
kind: lemma
title: "Radial-derivative expansion of the Euler–Poisson–Darboux transform and its zero-radius limit"
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
      locator: '§7.2, Problem 7.11, printed p. 176: the coefficients $\alpha_{k,j}$ with $\alpha_{k,0}=(2k-1)!!'
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3, Problem 6(d), printed p. 51: continuity at $r=0$ of the spherical-wave representation"
---


## Statement

Let $k\ge1$ and let $D_r=r^{-1}\partial_r$ on $(0,\infty)$. For every $f\in C^{k-1}((0,\infty))$ there are real constants $\alpha_{k,j}$, $0\le j\le k-1$, such that
$$D_r^{k-1}\bigl(r^{2k-1}f(r)\bigr)=\sum_{j=0}^{k-1}\alpha_{k,j}\,r^{j+1}f^{(j)}(r),\qquad \alpha_{k,0}=(2k-1)!! .$$
Consequently, if the finite limit $f(0):=\lim_{r\downarrow0}f(r)$ exists and each derivative $f^{(j)}$ with $1\le j\le k-1$ is bounded on $(0,1]$ (an empty condition when $k=1$) — in particular if $f$ extends to a $C^{k-1}$ function on $[0,\infty)$ — then
$$r^{-1}D_r^{k-1}\bigl(r^{2k-1}f\bigr)(r)\longrightarrow (2k-1)!!\,f(0)\qquad(r\downarrow0).$$
Every coefficient $\alpha_{k,0}=(2k-1)!!$ is nonzero, so the transformed average recovers the value at $r=0$ with the exact dimensional constant. The limit assumption is needed even for $k=1$, when $f(r)=\sin(1/r)$ is bounded but has no limit. Boundedness of the higher derivatives is also substantive: for $k=2$ the function $f(r)=r\sin(r^{-2})$, which is continuous at $0$, has $rf'(r)=r\sin(r^{-2})-2r^{-1}\cos(r^{-2})$ unbounded, and then $r^{-1}D_r(r^{3}f)$ does not tend to $3f(0)$.

## Facts & Assumptions

**Given:** an integer $k\ge1$, a function $f\in C^{k-1}((0,\infty))$, and the operator $D_r=r^{-1}\partial_r$ on $(0,\infty)$.

[F1] Sums, products, quotients of differentiable functions are differentiable with the usual rules, and polynomial and reciprocal functions are differentiable on their domains ([[thm-algebra-of-derivatives]]).

## Proof

1.1 Base case. For $k=1$ and $f\in C^0((0,\infty))$ one has $D_r^{0}(r^{2k-1}f)=rf=\alpha_{1,0}\,r^{1}f^{(0)}$ with $\alpha_{1,0}=1=(2\cdot1-1)!!$; under the limit hypothesis, $r^{-1}D_r^0(rf)=f(r)\to f(0)$ as $r\downarrow0$. [F1, given]

1.2 Induction hypothesis. Fix $k\ge1$ and assume that for every $h\in C^{k-1}((0,\infty))$ there are real constants $\alpha_{k,0},\dots,\alpha_{k,k-1}$ such that $D_r^{k-1}(r^{2k-1}h)=\sum_{j=0}^{k-1}\alpha_{k,j}r^{j+1}h^{(j)}$ and $\alpha_{k,0}=(2k-1)!!$. [given]

1.3 Shape of the $(k+1)$-st transform. Let $f\in C^k((0,\infty))$ and put $h:=r^2f$, so that $h\in C^k((0,\infty))\subseteq C^{k-1}((0,\infty))$ and $r^{2k+1}f=r^{2k-1}h$. The induction hypothesis gives $D_r^{k-1}(r^{2k+1}f)=\sum_{j=0}^{k-1}\alpha_{k,j}r^{j+1}h^{(j)}$, and the product rule gives $h^{(j)}=r^2f^{(j)}+2jrf^{(j-1)}+j(j-1)f^{(j-2)}$ for $0\le j\le k-1$, where the last two terms are read as $0$ for $j=0$ and $j=1$. [F1, algebra]

1.4 Applying $D_r$ once to the finitely many resulting terms, and using $D_r(r^{m}v)=mr^{m-2}v+r^{m-1}v'$, produces a finite sum $\sum_{i=0}^{k}\beta_ir^{i+1}f^{(i)}$ with constants $\beta_i$ independent of $f$: the term $\alpha_{k,j}r^{j+1}\cdot r^2f^{(j)}$ contributes $(j+3)\alpha_{k,j}r^{j+1}f^{(j)}$ and $\alpha_{k,j}r^{j+2}f^{(j+1)}$; the term $2j\alpha_{k,j}r^{j+2}f^{(j-1)}$ contributes $2j(j+2)\alpha_{k,j}r^{j}f^{(j-1)}$ and $2j\alpha_{k,j}r^{j+1}f^{(j)}$; and the term $j(j-1)\alpha_{k,j}r^{j+1}f^{(j-2)}$ contributes $j(j-1)(j+1)\alpha_{k,j}r^{j-1}f^{(j-2)}$ and $j(j-1)\alpha_{k,j}r^{j}f^{(j-1)}$. Every displayed monomial $r^{m}f^{(i)}$ has $m=i+1$ with $0\le i\le k$, and negative powers do not occur because the terms with $j=0,1$ have one or both of the last two summands read as zero. [F1, algebra]

1.5 Leading coefficient. Evaluating the identity of the previous step at the constant function $f\equiv1$, which lies in $C^k$, gives $\beta_0r=D_r^{k}(r^{2k+1})=\bigl[(2k+1)(2k-1)\cdots3\bigr]r=(2k+1)!!\,r$: indeed $D_r(r^{2k+1})=(2k+1)r^{2k-1}$, each further application of $D_r$ lowers the exponent by $2$ and multiplies the coefficient by the previous exponent, and $k$ applications leave the exponent $1$. Hence $\beta_0=(2k+1)!!$, and setting $\alpha_{k+1,i}:=\beta_i$ for $0\le i\le k$ extends the conclusion of the induction hypothesis from $k$ to $k+1$. [F1, algebra]

2.1 Conclusion. By the base case and the induction step, the expansion $D_r^{k-1}(r^{2k-1}f)=\sum_{j=0}^{k-1}\alpha_{k,j}r^{j+1}f^{(j)}$ with $\alpha_{k,0}=(2k-1)!!$ holds for every $k\ge1$ and every $f\in C^{k-1}((0,\infty))$. If $f(0):=\lim_{r\downarrow0}f(r)$ is finite and each $f^{(j)}$ with $1\le j\le k-1$ is bounded on $(0,1]$, then dividing by $r$ gives $r^{-1}D_r^{k-1}(r^{2k-1}f)(r)=\sum_{j=0}^{k-1}\alpha_{k,j}r^{j}f^{(j)}(r)\to\alpha_{k,0}f(0)=(2k-1)!!f(0)$ as $r\downarrow0$: the $j=0$ term converges by the assumed limit, and each term with $j\ge1$ is bounded by $|\alpha_{k,j}|r^{j}\sup_{(0,1]}|f^{(j)}|\to0$. [given, algebra] ∎

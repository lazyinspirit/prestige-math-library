---
id: lem-lifting-idempotents-in-complete-deformation-algebras
kind: lemma
title: "Idempotents lift through adically complete quotients"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-adic-completion-of-a-module
  - def-adic-topology-on-a-module
  - def-separated-and-complete-filtered-module
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.3, Step 5 of the proof of Theorem 2.6 ('result about lifting of idempotents'), PDF p. 5"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.2 (flatness of Hecke algebras and Tits' deformation theorem), printed p. 47"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $R$ be a commutative $\mathbb C$-algebra, let $I\subseteq R$ be an ideal, and
suppose that $R$ is $I$-adically complete and separated, so that
$R\cong\varprojlim_{n\ge1}R/I^n$
([[def-separated-and-complete-filtered-module]], [[def-adic-completion-of-a-module]]);
over a complete local ring $R$ one may take $I$ its maximal ideal. Let $A$ be an
associative unital $R$-algebra which is finitely generated as an $R$-module and
complete for the $I$-adic topology of the filtration $I^nA$, $n\ge0$, so that
$A\to\varprojlim_{n\ge1}A/I^nA$ is an isomorphism
([[def-adic-topology-on-a-module]]). If $x\in A$ satisfies
$x^2-x\in IA$, then there exists $e\in A$ with
$$e^2=e,\qquad e\equiv x\pmod{IA}.$$
Consequently: (1) every idempotent of $A/IA$ is the image of an idempotent of
$A$; (2) for every finite family of pairwise orthogonal idempotents
$\bar x_1,\dots,\bar x_k$ of $A/IA$ there are pairwise orthogonal idempotents
$e_1,\dots,e_k\in A$ with $e_i\equiv\bar x_i\pmod{IA}$ for all $i$, and if
$\bar x_1+\cdots+\bar x_k=1$ they may be chosen with
$e_1+\cdots+e_k=1$. Neither assertion uses a choice principle.

## Facts & Assumptions

**Given:** A commutative $\mathbb C$-algebra $R$, an ideal $I\subseteq R$ with $R$ $I$-adically complete and separated, an associative unital $R$-algebra $A$ finitely generated over $R$ and complete for the filtration $I^nA$, and an element $x\in A$ with $x^2-x\in IA$.

[F1] The $I$-adic topology on a module has the neighbourhood basis $I^nM$ of $0$, so its basic open sets are the cosets $x+I^nM$ ([[def-adic-topology-on-a-module]]).

[F2] Completeness of $A$ for the filtration $I^nA$ says that $A\to\varprojlim_{n\ge1}A/I^nA$ is an isomorphism, and it includes separatedness, that is, $\bigcap_{n\ge0}I^nA=0$ ([[def-separated-and-complete-filtered-module]], [[def-adic-completion-of-a-module]]).

[L1] For every $n$ the submodule $I^nA$ is a two-sided ideal of $A$, and multiplication $A\times A\to A$ is continuous for the $I$-adic topology: if $a'\equiv a$ and $b'\equiv b$ modulo $I^nA$, then $a'b'-ab=(a'-a)b'+a(b'-b)\in I^nA+I^nA=I^nA$.



## Proof

**Proof technique:** direct.

1.1 Multiplication of $A$ is continuous by [L1], and limits in $A$ are unique because $A$ is separated by [F2]. A sequence is Cauchy precisely when for every $n$ its terms eventually have a fixed residue modulo $I^nA$; completeness then gives its unique limit with those eventual residues. In particular a sequence with $s_m\in I^mA$ tends to zero, and a series with its $m$-th term in $I^mA$ has Cauchy partial sums, whose limit agrees with each partial sum modulo the ideal containing its tail. [F1, F2, L1]

2.1 Let $c_m:=\binom{-1/2}{m}\in\mathbb C$ for $m\ge0$. If $\varepsilon\in IA$ then $\varepsilon^m\in I^mA$ for every $m$, so the partial sums $S_N:=\sum_{m=0}^Nc_m\varepsilon^m$ satisfy $S_{N'}-S_N\in I^{N+1}A$ whenever $N'\ge N$: the series converges, and its limit $f(\varepsilon):=\sum_{m\ge0}c_m\varepsilon^m$ satisfies $f(\varepsilon)\equiv S_N\pmod{I^{N+1}A}$ for every $N$ by step 1.1. To justify the formal identity, put $f(u)=\sum_{m\ge0}c_mu^m$. The binomial coefficients satisfy $2(m+1)c_{m+1}=-(2m+1)c_m$, so $2(1+u)f^{\prime}(u)+f(u)=0$. Consequently the formal derivative of $(1+u)f(u)^2$ is zero, and its constant term is $1$; over $\mathbb C$ this gives $(1+u)f(u)^2=1$. Thus the identity $(1+u)\bigl(\sum_{m=0}^Nc_mu^m\bigr)^2=1+\sum_{m>N}d_mu^m$ of truncated formal power series over $\mathbb C$ shows $(1+\varepsilon)S_N^2\equiv1\pmod{I^{N+1}A}$; passing to limits using the continuity of multiplication and the uniqueness of limits gives $(1+\varepsilon)f(\varepsilon)^2=1$. [step 1.1, algebra]

2.2 Let $e\in A$ be an idempotent and put $B:=(1-e)A(1-e)$, with unit $1-e$. Then $B$ is an associative $R$-algebra with unit $1-e$ and scalar map $r\mapsto r(1-e)$, finitely generated as an $R$-module, and $I^nB=B\cap I^nA$ for every $n$: the inclusion $I^nB\subseteq B\cap I^nA$ is clear, and for $b\in B\cap I^nA$ the computation $\pi(b)=b$, where $\pi(a):=(1-e)a(1-e)$ is the $R$-linear idempotent projection onto $B$, exhibits $b\in\pi(I^nA)\subseteq I^nB$. The projection $\pi$ satisfies $\pi(I^nA)\subseteq I^nB\subseteq I^nA$, hence is continuous, so it induces an idempotent endomorphism $\Pi$ of the completion $A\cong\varprojlim_nA/I^nA$ of [F2]; its image is exactly $\varprojlim_nB/I^nB$ with the maps induced by $\pi$. Since $B\to\varprojlim_nB/I^nB$ agrees with $\Pi$ on $B$ and $\Pi$ is the identity on $B$, the map $B\to\varprojlim_nB/I^nB$ is an isomorphism: it is injective by the separatedness of $A$, and surjective onto the image of $\Pi$. Thus $B$ is $I$-adically complete. [F2, step 1.1, construct]

3.1 Put $y:=2x-1$ and $\varepsilon:=y^2-1=4(x^2-x)\in IA$. Since $\varepsilon$ is a polynomial in $y$, the element $z:=y\,f(\varepsilon)$ of step 2.1 satisfies $$z^2=y^2f(\varepsilon)^2=(1+\varepsilon)f(\varepsilon)^2=1.$$ Hence $e:=\tfrac12(1+z)$ satisfies $e^2=\tfrac14(1+2z+z^2)=e$, and $e-x=\tfrac12(z-y)=\tfrac12y\,(f(\varepsilon)-1)\in A\cdot IA\subseteq IA$, because $f(\varepsilon)-1=\sum_{m\ge1}c_m\varepsilon^m\in IA$. Any idempotent $\bar x\in A/IA$ has a representative $x\in A$ with $x^2-x\in IA$, so the preceding construction produces an idempotent $e$ of $A$ with image $\bar x$: assertion (1) holds. [step 2.1, algebra, construct]

4.1 Assertion (2) follows by finite iteration. Given orthogonal idempotents $\bar x_1,\dots,\bar x_k$ in $A/IA$, choose representatives $x_1,\dots,x_k$; they satisfy $x_i^2-x_i\in IA$ and $x_ix_j\in IA$ for $i\ne j$. Suppose $e_1,\dots,e_j\in A$ are pairwise orthogonal idempotents with $e_i\equiv x_i\pmod{IA}$ for $i\le j$, put $E_j:=e_1+\cdots+e_j$ and $B_j:=(1-E_j)A(1-E_j)$, and set $X_j:=(1-E_j)x_{j+1}(1-E_j)\in B_j$. Expanding, $X_j^2-X_j=(1-E_j)\bigl(x_{j+1}^2-x_{j+1}-x_{j+1}E_jx_{j+1}\bigr)(1-E_j)$, and both $x_{j+1}^2-x_{j+1}$ and $x_{j+1}E_jx_{j+1}\equiv\sum_{i\le j}x_{j+1}x_ix_{j+1}\equiv0$ lie in $IA$, so $X_j^2-X_j\in(1-E_j)\,IA\,(1-E_j)\subseteq IB_j$. As $B_j$ is complete by step 2.2, step 3.1 applied in $B_j$ supplies an idempotent $e_{j+1}\in B_j$ with $e_{j+1}\equiv X_j\pmod{IB_j}$; then $e_{j+1}$ is orthogonal to $e_1,\dots,e_j$, and $e_{j+1}\equiv X_j\equiv x_{j+1}\pmod{IA}$ because $(1-E_j)$ is congruent to $1-\sum_{i\le j}x_i$ modulo $IA$. Starting from $j=0$, where $B_0=A$ and $X_0=x_1$, this yields orthogonal idempotents with the required congruences. If $\bar x_1+\cdots+\bar x_k=1$, the last lift may be replaced by $e_k:=1-e_1-\cdots-e_{k-1}$: it is idempotent, orthogonal to $e_1,\dots,e_{k-1}$, and congruent to $1-\sum_{i<k}\bar x_i=\bar x_k$ modulo $IA$. [step 3.1, step 2.2, algebra] ∎ 
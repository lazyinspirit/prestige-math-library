---
id: lem-gauss-lower-half-lattice-count
kind: lemma
title: "Gauss's lemma as a lower-half lattice-point count"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-gauss-quadratic-residue-lemma, lem-gauss-half-system-permutation,
       thm-division-algorithm-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.V"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, §2"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

Let $p$ and $q$ be distinct odd primes. Put $S_{p,q}:=|\{(x,y)\in\mathbb Z^2:1\le x\le(p-1)/2,\ 0<py<qx\}|$.

Then $\left(\frac qp\right)=(-1)^{S_{p,q}}$.

Thus Gauss's sign count ([[thm-gauss-quadratic-residue-lemma]]) can be read as the parity of a finite set of lattice points, without introducing floor notation.

## Facts & Assumptions

**Given:** Distinct odd primes $p,q$, and $m=(p-1)/2$.

[L1] If $N(q,p)$ is the number of least positive residues of $q,2q,\ldots,mq$ modulo $p$ that exceed $p/2$, then $\left(\frac qp\right)=(-1)^{N(q,p)}$ ([[thm-gauss-quadratic-residue-lemma]]).

[L2] For every integer $A$ and positive integer $p$, there are unique integers $t,\rho$ such that $A=pt+\rho$ and $0\le\rho<p$ ([[thm-division-algorithm-in-z]]).

[L3] For each $1\le x\le m$, there are unique $\varepsilon_x\in\{1,-1\}$ and $u_x\in\{1,\ldots,m\}$ such that $qx\equiv\varepsilon_xu_x\pmod p$, and $u_1,\ldots,u_m$ is a permutation of $1,\ldots,m$ ([[lem-gauss-half-system-permutation]]).

## Proof

**Proof technique:** direct.

1.1 For each $1\le x\le m$, [L2] gives $qx=pt_x+\rho_x$ with $0\le\rho_x<p$; since $p\nmid qx$, one has $0<\rho_x<p$. The positive integers $y$ satisfying $py<qx=pt_x+\rho_x$ are exactly $1,\ldots,t_x$, so $S_{p,q}=\sum_{x=1}^{m}t_x$. [L2, given, algebra]

2.1 In the notation of [L3], $\rho_x=u_x$ when $\varepsilon_x=1$ and $\rho_x=p-u_x$ when $\varepsilon_x=-1$; the negative signs are exactly the residues counted by $N(q,p)$. Summing the equations of step 1.1 and reducing modulo $2$ gives $\sum_x x\equiv S_{p,q}+\sum_x\rho_x\pmod2$, because $p$ and $q$ are odd. Also $\sum_x\rho_x\equiv\sum_xu_x+N(q,p)\pmod2$, while the permutation in [L3] gives $\sum_xu_x=\sum_xx$. Hence $S_{p,q}\equiv N(q,p)\pmod2$, and [L1] yields $\left(\frac qp\right)=(-1)^{S_{p,q}}$. [step 1.1, L1, L3, algebra] ∎

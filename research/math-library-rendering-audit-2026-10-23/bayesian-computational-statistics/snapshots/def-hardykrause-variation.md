---
id: def-hardykrause-variation
kind: definition
title: "Hardy–Krause variation anchored at the upper corner"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapter 2 §2.2"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
    - title: "Lukas Einkemmer, Quasi-Monte Carlo Methods, §2.3"
      url: "https://www.einkemmer.net/files/qmm.pdf"
---

## Definition

Fix $d\ge1$ and a real function $f:[0,1]^d\to\mathbb R$. For each nonempty coordinate subset $u\subseteq\{1,\ldots,d\}$, restrict $f$ to the face adjacent to the all-ones corner by setting
$$f_u(x_u):=f(z),\qquad z_j=\begin{cases}x_j,&j\in u,\\1,&j\notin u.\end{cases}$$
For a finite coordinate grid on $[0,1]^{|u|}$, write its cells as $R_k=\prod_{j\in u}[t_{j,k_j},t_{j,k_j+1}]$. For a cell with lower and upper vertices $a,b$, define its alternating increment
$$\Delta(f_u;R_k):=\sum_{\epsilon\in\{0,1\}^{|u|}}(-1)^{|u|-|\epsilon|}f_u(z_\epsilon),$$
where $(z_\epsilon)_j=a_j$ if $\epsilon_j=0$ and $(z_\epsilon)_j=b_j$ if $\epsilon_j=1$. The **Vitali variation** of $f_u$ is
$$V_V(f_u):=\sup_{\text{finite coordinate grids on }[0,1]^{|u|}}\ \sum_k|\Delta(f_u;R_k)|.$$
The **Hardy–Krause variation anchored at the upper corner** is
$$V_{HK,1}(f):=\sum_{\emptyset\ne u\subseteq\{1,\ldots,d\}}V_V(f_u),$$
with value $+infty$ if any summand is infinite. For $d=1$ this is the ordinary total variation on $[0,1]$. The anchor is part of the convention: every coordinate outside $u$ is fixed at $1$. The smooth mixed-derivative formula for this convention is proved separately for $C^d$ functions.

The same Vitali-variation definition applies on a nondegenerate rectangle
$R=\prod_{j=1}^q[a_j,b_j]$: each coordinate grid starts at $a_j$ and ends at
$b_j$. For a subrectangle $R\subseteq[0,1]^d$, write $V_{HK,1}(f;R)$ for the
sum of the Vitali variations of its face restrictions with complementary
coordinates fixed at the upper endpoints of $R$. If a varied side has length
zero, that face's Vitali variation is defined to be zero. For $R=[0,1]^d$ this
notation is exactly $V_{HK,1}(f)$.

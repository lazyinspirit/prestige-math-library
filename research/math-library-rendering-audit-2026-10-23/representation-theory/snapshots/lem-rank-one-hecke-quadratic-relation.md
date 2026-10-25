---
id: lem-rank-one-hecke-quadratic-relation
kind: lemma
title: "The rank-one quadratic relation in the finite Hecke algebra"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
  - prop-cardinality-of-a-finite-bruhat-cell
  - thm-bruhat-decomposition-of-gl-n-over-a-finite-field
  - def-standard-subgroups-of-gl-n-over-a-finite-field
  - def-weyl-group-and-length-for-finite-gl-n
  - def-symmetric-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Equation (11.2) and the preceding computation of $(e_{B^F}se_{B^F})^2$, printed p. 46"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Proposition 2.3, second half ($T_s^2=q+(q-1)T_s$), PDF p. 4"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - The second relation for $\\bar T_s\\bar T_w$ with $q_s=[B:\\dot sB\\dot s^{-1}\\cap B]$, printed p. 44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Charles W. Curtis, Representations of Hecke Algebras (Asterisque 168) - Proposition (1.6) and the following split-group parameter discussion, printed pp. 18-19"
      url: "https://www.numdam.org/article/AST_1988__168__13_0.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

For every simple reflection $s=s_i\in S_n$ the standard basis element
$T_s\in H=e_B\mathbb C[G]e_B$ satisfies
$$T_s^2=(q-1)T_s+q\,T_1,$$
equivalently $(T_s-q)(T_s+1)=0$; here $T_1=e_B$ is the unit
([[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]]). Consequently
all eigenvalues of the operator by which $T_s$ acts in any
finite-dimensional complex representation of $H$ lie among $q$ and $-1$. No
choice principle is used.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B$, the Hecke algebra $H=e_B\mathbb C[G]e_B$ with standard basis $T_w$ and unit $T_1=e_B$, a simple reflection $s=s_i=(i\ i+1)$ with permutation matrix $\dot s=P_{s_i}$ and cell $U_s:=B\dot sB$.

[F1] For every $w$ one has $T_w=q^{\ell(w)}e_B\dot we_B=|B|^{-1}\sum_{x\in B\dot wB}x$ ([[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]]).

[F2] For every $w$ the cell satisfies $|B\dot wB/B|=q^{\ell(w)}$ and hence $|B\dot wB|=|B|\,q^{\ell(w)}$ ([[prop-cardinality-of-a-finite-bruhat-cell]]).

[F3] The cells $B\dot wB$, $w\in S_n$, partition $G$, and for $x\in BP_\sigma B$ the southwest rank matrix is $r_{a,b}(x)=\#\{\,k\le b:\sigma(k)\ge a\,\}$, so that the rank matrix determines the cell of $x$ ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]).

[F4] $B$ is the subgroup of $G$ consisting of the invertible upper triangular matrices, and every invertible upper triangular matrix has nonzero diagonal entries ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[F5] The permutation matrices satisfy $P_\sigma P_\tau=P_{\sigma\tau}$ and $\ell(w_{s_i})=1$ for the simple reflection $s_i$, whose permutation matrix is $\dot s_i=P_{s_i}$ ([[def-weyl-group-and-length-for-finite-gl-n]]).

[F6] A transposition is an involution: $(a\ b)\circ(a\ b)=\mathrm{id}$, so $s_i^{-1}=s_i$ and hence $\dot s^{-1}=\dot s$ by [F5] ([[def-symmetric-group]]).



## Proof

**Proof technique:** direct.

1.1 For $b\in B$ put $m:=\dot sb\dot s$; its entries are $m_{kl}=b_{s(k),s(l)}$. For $k>l$, the adjacent transposition satisfies $s(k)>s(l)$ except when $(k,l)=(i+1,i)$; upper triangularity of $b$ therefore gives $m_{kl}=0$ outside that exceptional pair, and $m_{i+1,i}=b_{i,i+1}$. Also $m_{kk}=b_{s(k),s(k)}\ne0$ by [F4]. If $b_{i,i+1}=0$ then $m$ has all below-diagonal entries zero, so $m\in B$. If $b_{i,i+1}\ne0$, compute the southwest rank matrix $r_{a,b}(m)$: for $a\le i$ or $a\ge i+2$, columns less than $a$ vanish in rows $a,\dots,n$, and the square minor on rows and columns $a,\dots,b$ (when $b\ge a$) has nonzero determinant. If that minor contains both $i,i+1$, it is upper block triangular with central block $\begin{pmatrix}b_{i+1,i+1}&0\\b_{i,i+1}&b_{ii}\end{pmatrix}$ and all other diagonal blocks of size one; otherwise it is upper triangular. In its determinant expansion, the only possible nonidentity permutation would exchange $i,i+1$, whose upper entry is zero. Its determinant is therefore the product of its nonzero diagonal entries, giving $r_{a,b}(m)=\max(0,b-a+1)$. For $a=i+1$, columns below $i$ vanish, columns $i,i+1$ are supported only in row $i+1$, and column $i$ has the nonzero entry $b_{i,i+1}$. Columns $i+2,\dots,b$, when present, have independent nonzero diagonal entries in rows $i+2,\dots,b$. Thus the rank is $0$, $1$, $1$ or $b-i$ according as $b\le i-1$, $b=i$, $b=i+1$ or $b\ge i+2$. These numbers equal $\#\{k\le b:s(k)\ge a\}$ in every case, so by the cell determination of [F3] one has $m\in B\dot sB$. Hence $\dot sB\dot s\subseteq B\cup B\dot sB$, and therefore $(B\dot sB)(B\dot sB)=B(\dot sB\dot s)B\subseteq B(B\cup B\dot sB)B=B\cup B\dot sB$. Moreover $U_s^{-1}=(B\dot sB)^{-1}=B\dot s^{-1}B=B\dot sB$ by [F6] and [F5]. [F3, F4, F5, F6]

2.1 Let $\mu:U_s\times U_s\to G$, $\mu(x,y)=xy$, and let $B$ act on the source by $b\cdot(x,y):=(xb^{-1},by)$; the action is free, stays in $U_s\times U_s$ by [F3], and $\mu$ is invariant, so every fiber $\mu^{-1}(g)$ is a union of free orbits and the integer $m(g):=|\mu^{-1}(g)|/|B|$ is finite, being the number of orbits over $g$. For $b,b'\in B$ the map $(x,y)\mapsto(bx,yb')$ is a bijection $\mu^{-1}(g)\to\mu^{-1}(bgb')$, so $m$ is constant on each double coset $BgB$. Over the identity, step 1.1 gives $\mu^{-1}(1)=\{(x,x^{-1}):x\in U_s\}$, and the orbit of $(x,x^{-1})$ consists exactly of the pairs $\{(xb^{-1},bx^{-1}):b\in B\}$, so these orbits correspond to the left cosets $xB$, $x\in U_s$; by [F2] and $\ell(w_{s_i})=1$ there are $|U_s|/|B|=q$ of them. Hence $m_1:=m(1)=q$. [F2, F5, step 1.1, algebra]

3.1 Since the image of $\mu$ is $U_s\cdot U_s\subseteq B\cup B\dot sB$ by step 1.1, the fiber sizes are $m_1=m(1)$ on $B$ and $m_2:=m(\dot s)$ on $B\dot sB$; counting the source gives $q^2|B|^2=|U_s|^2=\sum_{g\in G}|\mu^{-1}(g)|=|B|\bigl(m_1|B|+m_2|B\dot sB|\bigr)=|B|^2\bigl(m_1+q\,m_2\bigr)$ by [F2], hence $q^2=q+q\,m_2$ and $m_2=q-1$. Therefore, using [F1] and $|B|^{-1}\sum_{g\in B}g=e_B$, $|B|^{-1}\sum_{g\in B\dot sB}g=T_s$, $$T_s^2=\frac{1}{|B|^2}\sum_{x,y\in U_s}xy=\frac{1}{|B|}\Bigl(m_1\sum_{g\in B}g+m_2\sum_{g\in B\dot sB}g\Bigr)=q\,T_1+(q-1)T_s.$$ Equivalently $(T_s-q)(T_s+1)=0$, so the minimal polynomial of the operator by which $T_s$ acts on any finite-dimensional complex representation divides $(x-q)(x+1)$ and its eigenvalues lie among $q$ and $-1$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Step 3.1 proves the displayed quadratic relation, equivalently the factored form, and the eigenvalue statement; all data are finite groups and finite sums with the explicit permutation matrix $\dot s$, so no choice principle is used. [step 3.1] ∎

---
id: lem-ip-nullspace-property-stability-cone
kind: lemma
title: "A uniform stability margin for the nullspace cone"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-nullspace-property
  - def-p-norms-on-rn
  - def-euclidean-inner-product
  - def-norm-and-normed-space
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - lem-finite-sum-laws
  - lem-finite-set-has-max
  - lem-of-square-monotone
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.2, Definition 4.11 and Remark 4.16"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
---

## Statement

Let $m,n,s\in\mathbb N$ with $m,n\ge1$ and $1\le s\le n$, and let
$A\in\mathbb R^{m\times n}$. Use one-based coordinate labels
$j=1,\ldots,n$, with coordinate $j$ identified with the library's coordinate
$j-1$. Assume that
$$\sum_{j\in S}|h_j|<\sum_{j\notin S}|h_j|$$
for every nonzero $h\in\mathbb R^n$ with $Ah=0$ and every
$S\subseteq\{1,\ldots,n\}$ with $|S|\le s$. Then there is a constant
$\rho\in(0,1)$ such that
$$\sum_{j\in S}|h_j|\le\rho\sum_{j\notin S}|h_j|$$
for every $h\in\mathbb R^n$ with $Ah=0$ and every
$S\subseteq\{1,\ldots,n\}$ with $|S|\le s$. The estimate is only on the exact
kernel and gives no bound for vectors with $Ah\ne0$.

## Statement references

[[def-ip-nullspace-property|Strict nullspace property and coordinate conventions]]

[[def-p-norms-on-rn|Finite-dimensional one-norm and Euclidean norm]]

[[def-euclidean-inner-product|The Euclidean inner product and norm]]

[[lem-p-norms-are-norms-and-induce-the-published-metrics|Norm properties of finite-dimensional p-norms]]

[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric|Continuity of finite-dimensional norms]]

[[lem-finite-set-has-max|A finite set of real numbers has a maximum]]

[[thm-cauchy-schwarz-and-the-euclidean-norm|Cauchy–Schwarz for the Euclidean inner product]]

[[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values|Heine–Borel and extreme-value theorem in finite dimensions]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.2, Definition 4.11 and Remark 4.16, pp. 82–84](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

## Facts & Assumptions

**Given:** Integers $m,n\ge1$, $1\le s\le n$, a matrix $A\in\mathbb R^{m\times n}$ satisfying the strict nullspace inequalities in the Statement, and $\ker A:=\{h\in\mathbb R^n:Ah=0\}$.

[F1] [[def-ip-nullspace-property]]: for every nonzero $h\in\ker A$ and every $S\subseteq[n]$ with $|S|\le s$, $\|h_S\|_1<\|h_{S^c}\|_1$, where $h_S$ is zero outside $S$.

[F2] [[def-p-norms-on-rn]]: $\|x\|_1=\sum_{j=1}^n|x_j|$ on $\mathbb R^n$.

[F3] [[def-p-norms-on-rn]]: $\|x\|_2=(\sum_{j=1}^n x_j^2)^{1/2}$ on $\mathbb R^n$.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for $a,u,v\in\mathbb R^n$, $|\langle a,u-v\rangle|\le\|a\|_2\|u-v\|_2$.

[F5] [[lem-p-norms-are-norms-and-induce-the-published-metrics]]: both $\|\cdot\|_1$ and $\|\cdot\|_2$ are norms on $\mathbb R^n$, and $d_2(u,v)=\|u-v\|_2$ for $n\ge1$.

[F6] [[def-norm-and-normed-space]]: a norm satisfies absolute homogeneity, $N(\lambda v)=|\lambda|N(v)$.

[F7] [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]: every norm on $\mathbb R^n$ is continuous for the Euclidean metric.

[F8] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: closed bounded subsets of $\mathbb R^n$ are compact, and continuous real-valued functions on nonempty compact subsets attain their maxima; this result is choice-free.

[F9] [[lem-finite-set-has-max]]: every nonempty finite set of real numbers has a maximum.

[F10] [[lem-finite-sum-laws]]: finite sums are monotone termwise; every nonnegative term is at most its sum, and adjoining nonnegative terms cannot decrease the sum.

[F11] [[def-ip-nullspace-property]]: under its coordinate relabeling, $(Au)_i=\sum_{j=1}^n A_{ij}u_j$ for each row $i$.

[F12] [[def-euclidean-inner-product]]: for the row vector $r_i$ with coordinates $(r_i)_j=A_{ij}$, $\langle r_i,u\rangle=\sum_{j=1}^n A_{ij}u_j$.

[F13] [[lem-finite-sum-laws]]: additivity and scalar multiplication of finite sums give $\sum_{j=1}^n A_{ij}(u_j-v_j)=\sum_{j=1}^n A_{ij}u_j-\sum_{j=1}^n A_{ij}v_j$.

[F14] [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]: for every norm $N$, $|N(u)-N(v)|\le N(u-v)$.

[F15] [[lem-of-square-monotone]]: for nonnegative reals $a,b$, $a\le b$ if and only if $a^2\le b^2$.

## Proof

1.1 If $\ker A=\{0\}$, choose $\rho=1/2$. The only $h\in\ker A$ is zero, so both sides of the required inequality are zero for every $S$. Now suppose $\ker A\ne\{0\}$ and define $K:=\{h\in\ker A:\|h\|_2=1\}$. This set is nonempty by normalizing a nonzero kernel vector, since [F5] makes its norm positive. To show $K$ is closed, fix $x\notin K$. If $Ax\ne0$, choose a row $i$ with $c:=(Ax)_i\ne0$ and let $r_i$ be that row as a vector in $\mathbb R^n$. By [F11], [F12], and [F13], $f_i(u):=(Au)_i=\langle r_i,u\rangle$ and $f_i(y)-f_i(x)=\langle r_i,y-x\rangle$. By [F4], $|f_i(y)-c|\le\|r_i\|_2\|y-x\|_2$. Moreover, $\|r_i\|_2>0$: otherwise [F5] gives $r_i=0$, which would imply $c=\langle r_i,x\rangle=0$. Thus $\delta:=|c|/(2\|r_i\|_2)>0$, and whenever $\|y-x\|_2<\delta$ we have $|f_i(y)-c|<|c|/2$, so $f_i(y)\ne0$ and $y\notin K$. If $Ax=0$, then $\|x\|_2\ne1$; put $\delta:=|\|x\|_2-1|/2>0$. By [F14], $|\|y\|_2-\|x\|_2|\le\|y-x\|_2$, so $\|y-x\|_2<\delta$ precludes $\|y\|_2=1$ and again $y\notin K$. Hence every point outside $K$ has a ball disjoint from $K$, so $K$ is closed. It is bounded because every $h\in K$ has $\|h\|_2=1$ and [F5] identifies this with its Euclidean distance from $0$. By [F8], $K$ is compact. [given, F3, F4, F5, F8, F11, F12, F13, F14, construct, choose]

2.1 Fix $S\subseteq[n]$ with $|S|\le s$ and define $P_S,P_{S^c}:\mathbb R^n\to\mathbb R^n$ by $P_Su:=u_S$ and $P_{S^c}u:=u_{S^c}$. For all $u,v\in\mathbb R^n$ and every coordinate $j$, $|(P_Su-P_Sv)_j|\le|u_j-v_j|$; both sides are nonnegative, so the forward implication in [F15] and then [F10] give $\|P_Su-P_Sv\|_2^2\le\|u-v\|_2^2$. Both Euclidean norms are nonnegative by [F5], so the converse implication in [F15] yields $\|P_Su-P_Sv\|_2\le\|u-v\|_2$. The same argument applies to $P_{S^c}$, making both coordinate projections $1$-Lipschitz, hence continuous for $d_2$. Since $\|\cdot\|_1$ is a norm by [F5] and every norm on $\mathbb R^n$ is continuous for $d_2$ by [F7], the compositions $a_S(h):=\|h_S\|_1$ and $b_S(h):=\|h_{S^c}\|_1$ are continuous. For each $h\in K$, [F1] gives $a_S(h)<b_S(h)$, hence $b_S(h)>0$. To verify continuity of $r_S:=a_S/b_S$ at any $h_0\in K$, put $a_0:=a_S(h_0)$ and $b_0:=b_S(h_0)>0$. Continuity of $b_S$ gives a neighborhood of $h_0$ in $K$ on which $b_S(h)>b_0/2$. There,
$$|r_S(h)-r_S(h_0)|\le\frac{2}{b_0}|a_S(h)-a_0|+\frac{2a_0}{b_0^2}|b_S(h)-b_0|,$$
by splitting the difference of the two quotients. The right side tends to $0$ as $h\to h_0$, since $a_S$ and $b_S$ are continuous; thus $r_S$ is continuous on $K$. By [F8] it attains a maximum $q_S$ on $K$, and [F1] at a maximizing point gives $0\le q_S<1$. [step 1.1, F1, F2, F3, F5, F7, F8, F10, F15, algebra]

3.1 There are finitely many sets $S\subseteq[n]$ with $|S|\le s$, and this family is nonempty because it contains $\varnothing$. Therefore [F9] gives $q:=\max_{|S|\le s}q_S<1$. Choose any $h\in K$ and a coordinate $j$ with $h_j\ne0$; then $S=\{j\}$ is admissible because $s\ge1$, and [F2] gives $r_S(h)>0$, so $q>0$. Set $\rho:=(1+q)/2$; then $q<\rho<1$. [step 1.1, step 2.1, given, F1, F2, F9, choose, algebra]

4.1 Let $h\in\ker A$. If $h=0$, the required inequality is immediate. Otherwise $\widetilde h:=h/\|h\|_2$ belongs to $K$. For every admissible $S$, [F6] gives $r_S(h)=r_S(\widetilde h)\le q<\rho$, so $\|h_S\|_1\le\rho\|h_{S^c}\|_1$. This proves the estimate with one constant for all $S$ and all kernel vectors. [step 1.1, step 3.1, F1, F2, F3, F5, F6, algebra] ∎

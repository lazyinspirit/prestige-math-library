---
id: lem-hook-product-branching-identity
kind: lemma
title: The hook-product ratios sum to the size
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-hook-arm-leg-and-hook-length, def-partition-young-diagram-and-conjugate-partition, def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-evaluation-and-root, def-polynomial-ring-over-a-commutative-ring, def-removable-and-addable-nodes-of-a-partition, lem-hook-product-change-under-corner-removal, prop-polynomial-degree-laws-over-a-commutative-ring, thm-root-bound-for-polynomials-over-a-domain]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.4, printed pp. 8-10: Lemma 1.11 (hook product in first-column hooks, with the no-repetition proof) and Proposition 1.12 (the identity sum_i z_i prod_{j ne i}(1+1/(z_j-z_i)) = sum_i z_i - C(r,2), proved by residues); read in the full text."
    - title: "Pavel Etingof et al., Introduction to Representation Theory, MIT 18.712 Chapter 4 (OCW Chapter 4 file, 32 pp.)"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
      locator: "§4.17, PDF p. 18: the statement that deleting the first row inductively yields the hook product; read in the Chapter 4 file as a statement check on the same arithmetic."
---

## Statement

Let $\lambda\vdash n$ and, for $x\in\operatorname{Rem}(\lambda)$, let
$$R(x):=\prod_{y\in R_x}\frac{h_\lambda(y)}{h_\lambda(y)-1}$$
be the ratio $P(\lambda)/P(\lambda-x)$ of
[[lem-hook-product-change-under-corner-removal]], where
$R_x\subseteq[\lambda-x]$ is the set of boxes of row $a$ and column $b$ of
$x=(a,b)$ and $h_\lambda$ is the hook length of
[[def-hook-arm-leg-and-hook-length]]. Then

$$\sum_{x\in\operatorname{Rem}(\lambda)}R(x)=n,$$

the empty sum for $\lambda=\varnothing$ being $0$.

## Facts & Assumptions

**Given:** A partition $\lambda=(\lambda_1,\dots,\lambda_r)$ of $n$ with $r\ge0$ parts, its removable nodes, and the numbers $R(x)$ for $x\in\operatorname{Rem}(\lambda)$; put $h_{i,1}:=\lambda_i+r-i$ for $1\le i\le r$.

[F1] For $x=(a,b)\in\operatorname{Rem}(\lambda)$ with $\mu=\lambda-x$: $R_x=\{(a,j):j<b\}\cup\{(i,b):i<a\}$ is contained in $[\mu]$, $h_\mu(y)=h_\lambda(y)-1$ on $R_x$ and $h_\mu(y)=h_\lambda(y)$ off $R_x$, and $P(\lambda)/P(\mu)=\prod_{y\in R_x}h_\lambda(y)/(h_\lambda(y)-1)$ ([[lem-hook-product-change-under-corner-removal]]).

[F2] For a box $(i,j)\in[\lambda]$, $h_\lambda(i,j)=\lambda_i-j+\lambda'_j-i+1$, where $\lambda'_j=\#\{k:\lambda_k\ge j\}$; in particular $h_\lambda(i,1)=\lambda_i+r-i=h_{i,1}$ and the hook product is $P(\lambda)=\prod_{(i,j)\in[\lambda]}h_\lambda(i,j)$ ([[def-hook-arm-leg-and-hook-length]], [[def-partition-young-diagram-and-conjugate-partition]]).

[F3] For a partition with $r$ parts, row $a<r$ has a removable node if and only if $\lambda_a>\lambda_{a+1}$, and row $r$ always has the removable node $(r,\lambda_r)$; consequently the removable nodes of $\lambda$ are in bijection with the indices $a$ with $\lambda_a>\lambda_{a+1}$, where $\lambda_{r+1}:=0$ ([[def-removable-and-addable-nodes-of-a-partition]]).

[F4] $K[t]$ is a commutative ring with formal degree and leading coefficient, evaluation $g\mapsto g(z)$, and for nonzero $f,g$: $\deg(f+g)\le\max(\deg f,\deg g)$ if $f+g\ne0$ and $\deg(fg)\le\deg f+\deg g$ if $fg\ne0$ ([[def-polynomial-ring-over-a-commutative-ring]], [[def-polynomial-degree-leading-coefficient-and-monic]], [[def-polynomial-evaluation-and-root]], [[prop-polynomial-degree-laws-over-a-commutative-ring]]).

[F5] A nonzero polynomial over an integral domain of degree $d$ has at most $d$ distinct roots; in particular a polynomial over a field that vanishes at $r$ distinct points has degree at least $r$ unless it is the zero polynomial ([[thm-root-bound-for-polynomials-over-a-domain]]).



## Proof

**Proof technique:** direct.

1.1 The numbers $h_{i,1}=\lambda_i+r-i$ are strictly decreasing in $i$ and positive, because $\lambda_i\ge\lambda_{i+1}$ gives $h_{i,1}-h_{i+1,1}=\lambda_i-\lambda_{i+1}+1\ge1$ and $h_{r,1}=\lambda_r\ge1$; for $x=(a,b)\in\operatorname{Rem}(\lambda)$ we have $b=\lambda_a$ and $\lambda'_b=a$. By [F1] the value $R(x)$ is a finite product of ratios $h_\lambda(y)/(h_\lambda(y)-1)$ over $R_x$, which may be empty (for example when $\lambda=(1)$), and the sum over $\operatorname{Rem}(\varnothing)=\varnothing$ is $0=n$. [F1, F2, F3, given]

1.2 The multiset identity for row $a$: the $h_{a,1}=\lambda_a+(r-a)$ numbers of $$L:=\{h_\lambda(a,j):1\le j\le\lambda_a\}\cup\{h_{a,1}-h_{k,1}:a<k\le r\}$$ are pairwise distinct and all lie in $\{1,2,\dots,h_{a,1}\}$, so as multisets $L=\{1,\dots,h_{a,1}\}$. Indeed $h_\lambda(a,j)=\lambda_a-j+\lambda'_j-a+1$ decreases strictly with $j$; the differences equal $\lambda_a-\lambda_k+k-a$ and increase strictly with $k$, lying between $1$ and $h_{a,1}-1$; and a repetition $h_\lambda(a,j)=h_{a,1}-h_{k,1}$ would force $\lambda'_j+\lambda_k=j+k-1$, which is impossible: if $\lambda_k\le j-1$ then the hook of $(a,j)$ does not reach row $k$, so $\lambda'_j<k$ and $\lambda'_j+\lambda_k<j+k-1$, while if $\lambda_k\ge j$ then $(k,j)$ lies in the column of $(a,j)$, so $\lambda'_j\ge k$ and $\lambda'_j+\lambda_k>j+k-1$. [F2, algebra]

1.3 Finite identity: for pairwise distinct $z_1,\dots,z_r$ in a field $K$ with $r\ge1$, $$\sum_{i=1}^{r}z_i\prod_{j\ne i}\Bigl(1+\frac1{z_j-z_i}\Bigr)=\sum_{i=1}^{r}z_i-\binom r2.$$ For $r=1$ the identity is $z_1=z_1$. Hence assume $r\ge2$ for its coefficient calculation. Set $Q(t):=\prod_{j=1}^{r}(t-z_j)\in K[t]$ and for $g\in K[t]$ whose coefficients above $t^{r-1}$ vanish let $\Lambda(g):=\sum_i g(z_i)/\prod_{j\ne i}(z_i-z_j)$. Then $\Lambda(g)=[t^{r-1}]g$: the polynomial $g(t)-\sum_i g(z_i)\prod_{j\ne i}(t-z_j)/(z_i-z_j)$ has no nonzero coefficient above $t^{r-1}$ and vanishes at $z_1,\dots,z_r$, hence is zero by [F5], and comparing coefficients of $t^{r-1}$ gives the claim. [F4, F5, algebra]

2.1 The column-$b$ factors of $R(x)$: for $1\le i<a$ the box $(i,b)$ lies in $[\mu]$, and $h_\lambda(i,b)=\lambda_i-b+\lambda'_b-i+1=h_{i,1}-h_{a,1}+1$, because $\lambda'_b=a$ and $h_{a,1}=b+r-a$; hence $$\prod_{i<a}\frac{h_\lambda(i,b)}{h_\lambda(i,b)-1}=\prod_{i<a}\Bigl(1+\frac1{h_{i,1}-h_{a,1}}\Bigr).$$ [F1, F2, step 1.1, algebra]

2.2 The row-$a$ factors of $R(x)$: if $b\ge2$, applying step 1.2 to $\lambda$ and to $\mu=\lambda-x$ (which then has $r$ parts, row $a$ of length $\lambda_a-1$, and first-column hooks $h_{i,1}$ for $i\ne a$, $h_{a,1}-1$ for $i=a$) and multiplying the two identities gives $$\Bigl(\prod_{j<b}h_\lambda(a,j)\Bigr)\cdot\prod_{k>a}(h_{a,1}-h_{k,1})=h_{a,1}!,\qquad \Bigl(\prod_{j<b}(h_\lambda(a,j)-1)\Bigr)\cdot\prod_{k>a}(h_{a,1}-h_{k,1}-1)=(h_{a,1}-1)!,$$ where $h_\lambda(a,b)=1$ by removability; dividing them yields $$\prod_{j<b}\frac{h_\lambda(a,j)}{h_\lambda(a,j)-1}=h_{a,1}\prod_{k>a}\frac{h_{a,1}-h_{k,1}-1}{h_{a,1}-h_{k,1}}=h_{a,1}\prod_{k>a}\Bigl(1+\frac1{h_{k,1}-h_{a,1}}\Bigr),$$ since $1+(h_{k,1}-h_{a,1})^{-1}=(h_{a,1}-h_{k,1}-1)/(h_{a,1}-h_{k,1})$ for $k>a$. If $b=1$ then $\lambda_a=1$ forces $a=r$, the product over $j<b$ is empty and $h_{a,1}=1$, so the same displayed formula holds trivially. [F1, F2, step 1.2, algebra]

2.3 Set $g(t):=tQ(t-1)-(t-r)Q(t)=t(Q(t-1)-Q(t))+rQ(t)$. Both $Q(t)$ and $Q(t-1)$ are monic of degree $r$, so $[t^{r+1}]g=0$. Writing $e_1:=\sum_jz_j$, their $t^{r-1}$ coefficients differ by $-r$, while $[t^r](rQ(t))=r$; hence $[t^r]g=-r+r=0$. Thus all coefficients of $g$ above $t^{r-1}$ vanish, including when $r=0$ in $K$ or $g=0$. Moreover, expanding $Q(t-1)=\prod_j(t-(z_j+1))$ gives $[t^{r-2}](Q(t-1)-Q(t))=(r-1)e_1+\binom r2$ and $[t^{r-1}](rQ(t))=-re_1$, so $[t^{r-1}]g=\binom r2-e_1$. Here integers are mapped into $K$, so no division by $2$ in $K$ is used. [F4, step 1.3, algebra]

3.1 Combining steps 2.1 and 2.2 with [F1], for every $x=(a,b)\in\operatorname{Rem}(\lambda)$, $$R(x)=h_{a,1}\prod_{i\ne a}\Bigl(1+\frac1{h_{i,1}-h_{a,1}}\Bigr).$$ [step 2.1, step 2.2, F1]

3.2 Since $Q(z_i)=0$ and $Q(z_i-1)=\prod_j(z_i-1-z_j)=-(-1)^{r-1}\prod_{j\ne i}(z_j-z_i+1)$, for each $i$ $$\frac{g(z_i)}{\prod_{j\ne i}(z_i-z_j)}=\frac{z_iQ(z_i-1)}{\prod_{j\ne i}(z_i-z_j)}=-z_i\prod_{j\ne i}\Bigl(1+\frac1{z_j-z_i}\Bigr).$$ Summing over $i$ and using $\Lambda(g)=[t^{r-1}]g$ from step 1.3 together with step 2.3 gives the finite identity. [step 1.3, step 2.3, algebra]

4.1 Rows without removable nodes contribute zero and the sum may be extended over all rows: by [F3] the removable nodes correspond to the indices $a$ with $\lambda_a>\lambda_{a+1}$, and if $a<r$ satisfies $\lambda_a=\lambda_{a+1}$, then $h_{a,1}-h_{a+1,1}=1$ and the factor of index $a+1$ in the product of step 3.1 vanishes, so the corresponding term is $0$. Therefore $$\sum_{x\in\operatorname{Rem}(\lambda)}R(x)=\sum_{a=1}^{r}h_{a,1}\prod_{i\ne a}\Bigl(1+\frac1{h_{i,1}-h_{a,1}}\Bigr).$$ [step 3.1, F2, F3, given]

4.2 Applying the finite identity of steps 1.3 and 3.2 (the $r=1$ case being immediate in step 1.3) over $K=\mathbb Q$ to the pairwise distinct numbers $z_i:=h_{i,1}$ (step 1.1) gives $$\sum_{a=1}^{r}h_{a,1}\prod_{i\ne a}\Bigl(1+\frac1{h_{i,1}-h_{a,1}}\Bigr)=\sum_{i=1}^{r}h_{i,1}-\binom r2.$$ [step 1.1, step 1.3, step 3.2]

5.1 The first-column hooks sum to $n+\binom r2$: $\sum_i h_{i,1}=\sum_i\lambda_i+\sum_i(r-i)=n+r(r-1)/2=n+\binom r2$. Substituting this into step 4.2 and using step 4.1 yields $\sum_{x\in\operatorname{Rem}(\lambda)}R(x)=n$, and the case $\lambda=\varnothing$ is the empty sum $0$; this proves the lemma. [step 4.1, step 4.2, F2, algebra] ∎

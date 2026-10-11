---
id: lem-alternating-hook-induction-cancels-disconnected-rim-removals
kind: lemma
title: "Alternating hook induction cancels disconnected rim removals"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-removable-border-strip-and-height,
       thm-outer-littlewood-richardson-rule,
       def-littlewood-richardson-tableau-and-coefficient,
       def-skew-diagram-and-semistandard-skew-tableau,
       def-partition-young-diagram-and-conjugate-partition,
       def-outer-induction-product-for-symmetric-group-characters,
       def-binomial-coefficient,
       cor-binomial-theorem-consequences]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§21.5, printed pp. 81–82: the multiplicity binom(m−1,c−x) of [λ] in [ν][x,1^{r−x}], with the proof of the forced 1's and the free spaces at the top of the last columns; and the alternating sum following it"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §3 displayed expansion (2), printed p. 49: s_μp_r=sum over border strips with signs (−1)^{ht(λ/μ)}; Chapter I §7 Example 5, printed p. 117: the border-strip chain form of the Murnaghan–Nakayama rule"
---

## Statement

Let $r\ge1$, $\lambda\vdash n$ and $\nu\vdash n-r$, and let
$c^\lambda_{\nu\mu}$ be the Littlewood–Richardson coefficient, the number of
Littlewood–Richardson tableaux of shape $\lambda/\nu$ and content $\mu$
([[def-littlewood-richardson-tableau-and-coefficient]]); thus
$\chi^\nu\circ\chi^\mu=\sum_{\lambda\vdash n}c^\lambda_{\nu\mu}\chi^\lambda$
with $\circ$ the outer induction product
([[thm-outer-littlewood-richardson-rule]],
[[def-outer-induction-product-for-symmetric-group-characters]]). Write
$\lambda/\nu$ as the disjoint union of its edge-connected components.

1. **(LR multiplicities.)** $c^\lambda_{\nu,(x,1^{r-x})}=0$ for every $x$
   unless $\lambda/\nu$ is a union of $m\ge1$ pairwise disjoint skew hooks with
   $r$ nodes in total; precisely, this means that $\lambda/\nu$ contains no
   $2\times2$ block, and then its $m$ edge-connected components are the skew
   hooks (for $m=1$, $\lambda/\nu$ is a removable border strip in the sense of
   [[def-removable-border-strip-and-height]]). If $\lambda/\nu$ is such a union
   occupying $c$ columns in total, then
   $$c^\lambda_{\nu,(x,1^{r-x})}=\binom{m-1}{c-x}\qquad(1\le x\le r),$$
   with the convention $\binom{m-1}{c-x}=0$ when $c-x<0$ or $c-x>m-1$.

2. **(Alternating cancellation.)** With the same convention,
   $$\sum_{x=1}^{r}(-1)^{r-x}c^\lambda_{\nu,(x,1^{r-x})}=\begin{cases}(-1)^{r-c},& \lambda/\nu\text{ is a connected border strip occupying }c\text{ columns},\\ 0,&\text{otherwise},\end{cases}$$
   where "otherwise" covers both unions of $m\ge2$ disjoint skew hooks and skew
   diagrams that are not unions of disjoint skew hooks. In the first case
   $c\ge m$, because each of the $m$ nonempty components occupies at least one
   column, so the terms $x=c-m+1,\dots,c$ all occur in the range $1\le x\le r$,
   and the sum is
   $\sum_{x}(-1)^{r-x}\binom{m-1}{c-x}=(-1)^{r-c}\sum_{k=0}^{m-1}(-1)^k\binom{m-1}{k}=0$.

3. **(Character form.)** Since a connected border strip with $r$ nodes and $c$
   columns has height $r-c$
   ([[def-removable-border-strip-and-height]]),
   $$\sum_{x=1}^{r}(-1)^{r-x}\chi^\nu\circ\chi^{(x,1^{r-x})}=\sum_{\substack{\lambda\vdash n\\ \lambda/\nu\text{ a removable border strip of size }r}}(-1)^{\operatorname{ht}(\lambda/\nu)}\,\chi^\lambda,$$
   so every disconnected union of skew hooks cancels in the alternating hook
   induction of size $r$. No choice principle is used.

## Facts & Assumptions

**Given:** Integers $r\ge1$, $n\ge r$, partitions $\lambda\vdash n$, $\nu\vdash n-r$, the skew diagram $\lambda/\nu$ with $r$ nodes and English coordinates, and the LR coefficients $c^\lambda_{\nu\mu}$ of [[def-littlewood-richardson-tableau-and-coefficient]].

[F1] A skew tableau has weakly increasing rows and strictly increasing columns; its reading word is obtained by reading rows from right to left, top row first, and the $\mu$-content conditions are as in [[def-skew-diagram-and-semistandard-skew-tableau]] and [[def-littlewood-richardson-tableau-and-coefficient]]. The content $(x,1^{r-x})$ uses $x$ copies of the label $1$ and one copy each of the labels $2,3,\dots,s$, where $s:=r-x+1$.

[F2] The rows of $\lambda/\nu$ are the rows $u_1<\cdots<u_w$ of $[\lambda]$ with $\lambda_{u_t}>\nu_{u_t}$; row $t$ consists of the interval $I_t:=(\nu_{u_t},\lambda_{u_t}]$ of columns, and $r=\sum_t|I_t|$. For a fixed column $j$ the rows containing it form an interval of indices (skew diagrams are column-convex). A $2\times2$ block of cells is a set $\{(u,j),(u,j+1),(u+1,j),(u+1,j+1)\}\subseteq[\lambda/\nu]$.

[F3] The outer Littlewood–Richardson rule: $\chi^\nu\circ\chi^\mu=\sum_{\lambda\vdash n}c^\lambda_{\nu\mu}\chi^\lambda$ in $R(S_n)$, with $\circ$ the outer induction product ([[thm-outer-littlewood-richardson-rule]], [[def-outer-induction-product-for-symmetric-group-characters]]).

[F4] Binomial coefficients: $\binom{a}{k}=0$ for $k>a$, and the alternating row sum $\sum_{k=0}^{a}(-1)^k\binom{a}{k}$ equals $1$ for $a=0$ and $0$ for $a\ge1$ ([[def-binomial-coefficient]], [[cor-binomial-theorem-consequences]]).

[F5] A removable border strip of size $r$ is a connected, $2\times2$-free skew diagram $\lambda/\nu$ with $r$ nodes and $c$ columns, and $\operatorname{ht}(\lambda/\nu)=r-c$ ([[def-removable-border-strip-and-height]], [[def-skew-diagram-and-semistandard-skew-tableau]]).

## Proof

**Proof technique:** direct.

1.1 Let $T$ be a semistandard skew tableau of shape $\lambda/\nu$ and content $(x,1^{r-x})$ whose reading word is a lattice word, and put $s=r-x+1$. Then: (a) in each row of $\lambda/\nu$ at most one entry exceeds $1$, and such an entry is the rightmost entry of its row, all other entries being $1$; (b) the labels $2,3,\dots,s$ lie in strictly increasing rows; (c) the first (topmost) nonempty row of $\lambda/\nu$ consists entirely of $1$'s. For (a): a lattice word contains an occurrence of $j$ before any occurrence of $j+1$, because at the prefix ending at the first occurrence of $j+1$ one has $\#j\ge\#(j+1)=1$; so $2$ precedes $3$ precedes $\dots$ precedes $s$ in the reading word. Two entries $b<c$ greater than $1$ in one row would have $b$ to the left of $c$ (weak increase), so the right-to-left reading word would contain $c$ before $b$, contradicting $b$ before $c$; hence at most one entry of a row exceeds $1$. If a row contains $b>1$, every entry strictly to its right is $\ge b>1$ and distinct from $b$, so one would be a second entry greater than $1$: impossible; so $b$ is rightmost, and the entries to its left are $<b$ and hence equal to $1$. For (b): if $j$ and $j+1$ lay in one row, weak increase would put $j$ to the left of $j+1$ and the reading word would contain $j+1$ before $j$, contradicting $j$ before $j+1$. For (c): the rightmost entry of the first nonempty row is the first letter of the reading word; a first letter $j\ge2$ would violate $\#(j-1)\ge\#j$ in the one-letter prefix, so the first letter is $1$; but by (a) any entry greater than $1$ in that row would be its rightmost entry, so the row has none. [F1, given, algebra]

2.1 Consequences and the inverse construction. (a) If $\lambda/\nu$ contained a $2\times2$ block $\{(u,j),(u,j+1),(u+1,j),(u+1,j+1)\}$, then the entries at $(u,j)$ and $(u+1,j)$ are each not the rightmost entry of their row, hence equal $1$ by step 1.1(a), contradicting strict increase down column $j$; so $\lambda/\nu$ has no $2\times2$ block and $|I_{t-1}\cap I_t|\le1$ for every $t\ge2$. (b) Let $L:=\{t\in\{1,\dots,w\}:\text{row }t\text{ of }\lambda/\nu\text{ contains an entry different from }1\}$. By step 1.1(a,b) each row in $L$ carries exactly one label, these labels are $2,3,\dots,s$ in increasing row order, $1\notin L$ by step 1.1(c), and the content forces $|L|=r-x$; all other entries are $1$. Moreover, for every column $j$ and rows $t<t'$ with $j\in I_t\cap I_{t'}$ one must have $t'\in L$: the entries at $(u_{t'},j)$ lying below a non-label entry $1$ at $(u_t,j)$ would have to be $>1$, i.e. equal to the label of row $t'$, so a non-label row of a column must precede every label row of that same column, and at most one row of a column can be non-label (two $1$'s in a column violate strict increase); hence among the rows of any column all but possibly the first are in $L$. (c) Conversely, let $L\subseteq\{2,\dots,w\}$ satisfy $|L|=r-x$ and: whenever $j\in I_t$ and $j\in I_{t'}$ with $t'<t$, then $t\in L$. Define $T$ by filling each row $t\in L$ with $1$'s except for the label of its position in the increasing enumeration of $L$ at the rightmost cell $(u_t,\lambda_{u_t})$, and each row $t\notin L$ with $1$'s. Then rows are weakly increasing and columns strictly increasing: in a column, the rows below the first all lie in $L$ by hypothesis, so their entries are labels increasing with the row, and the possible first entry $1$ is smaller than all of them. The content is correct because there are $s-1=r-x$ labels and $r-(r-x)=x$ ones, and the reading word is a lattice word: it begins with the $1$'s of the first row and the labels occur in increasing row order, so $j$ precedes $j+1$ and at least one $1$ precedes the $2$. The two constructions are inverse to each other, so the LR tableaux of shape $\lambda/\nu$ and content $(x,1^{r-x})$ are in bijection with these admissible sets $L$. [step 1.1, F1, F2, given, algebra]

3.1 Count the admissible sets. Let $f:=\#\{t\in\{2,\dots,w\}:I_{t-1}\cap I_t\ne\emptyset\}$ and $\varepsilon_t:=1$ if $I_{t-1}\cap I_t\ne\emptyset$ and $0$ otherwise (so $f=\sum_{t=2}^w\varepsilon_t$). A row $t\ge2$ is forced into $L$ exactly when $\varepsilon_t=1$: if $j\in I_{t-1}\cap I_t$ then $j$ lies in the rows $t-1<t$ of column $j$, so step 2.1(b) gives $t\in L$; and if $\varepsilon_t=0$ then for every $j\in I_t$ the row $t$ is the first row of column $j$ (a row $t'<t$ with $j\in I_{t'}$ would force $j\in I_{t-1}$ by column-convexity), so no constraint from step 2.1(b) applies to $t$. Hence the admissible sets are exactly the subsets of the $w-1-f$ free rows $\{2,\dots,w\}\setminus\{t:\varepsilon_t=1\}$ of size $r-x-f$; their number is $\binom{w-1-f}{r-x-f}$ when $0\le r-x-f\le w-1-f$ and $0$ otherwise. Now count incidences $(t,j)$ with $j\in I_t$: on one hand $r=\sum_t|I_t|$; on the other hand $\sum_j|\{t:j\in I_t\}|=c+f$ because each column contributes $1$ for its first row and one further unit for each $t\ge2$ with $t-1,t$ both rows of the column, and $|I_{t-1}\cap I_t|\le1$ by step 2.1(a). Hence $f=r-c$. For the components: if $I_{t-1}\cap I_t$ contains $j$, then $u_t=u_{t-1}+1$, because an intermediate partition row $u_{t-1}<i<u_t$ would be a row of $[\lambda]$ with $\nu_i=\lambda_i\ge j$ (as $i<u_t$ and $\lambda_{u_t}\ge j$) while $\nu_i\le\nu_{u_{t-1}}<j$ (as $i>u_{t-1}$ and $j\in I_{t-1}$), a contradiction; so the cells $(u_{t-1},j)$ and $(u_t,j)$ are vertically adjacent and rows $t-1$ and $t$ lie in one component. Conversely, any path in $\lambda/\nu$ joining rows $t-1$ and $t$ consists of horizontal steps within rows and vertical steps within a column between consecutive partition rows, and the only consecutive partition rows between the indices $t-1$ and $t$ are these two, so such a path exists only if $\varepsilon_t=1$. Thus the components are the maximal blocks of consecutive indices joined by overlaps, and their number is $m=1+\#\{t\ge2:\varepsilon_t=0\}=w-f$. Therefore the number of LR tableaux of shape $\lambda/\nu$ and content $(x,1^{r-x})$ is $\binom{m-1}{c-x}$ (zero outside the range $0\le c-x\le m-1$), and it is $0$ when $\lambda/\nu$ contains a $2\times2$ block. This is claim 1, in the form in which the $m$ connected components of a $2\times2$-free $\lambda/\nu$ are the skew hooks. [step 2.1, F4, given, algebra]

4.1 For the alternating sum, first suppose that $\lambda/\nu$ contains a $2\times2$ block: then every coefficient is $0$ by step 3.1 and the left-hand side of claim 2 is $0$, while $\lambda/\nu$ is not a connected border strip, so the right-hand side is also $0$. Otherwise $\lambda/\nu$ is $2\times2$-free with $m$ components, $c$ columns and $r$ nodes, and by step 3.1 the sum equals $\sum_{x=1}^{r}(-1)^{r-x}\binom{m-1}{c-x}$. The nonzero terms are exactly those with $0\le c-x\le m-1$, that is $x\in\{c-m+1,\dots,c\}$; here $c\ge m$ because each of the $m$ nonempty components occupies at least one column, and $c\le r$ because $r\ge1$ and each column is nonempty, so all these $x$ lie in $\{1,\dots,r\}$. Substituting $k=c-x$ gives $\sum_{k=0}^{m-1}(-1)^{r-c+k}\binom{m-1}{k}=(-1)^{r-c}\sum_{k=0}^{m-1}(-1)^{k}\binom{m-1}{k}$, which is $(-1)^{r-c}$ when $m=1$ and $0$ when $m\ge2$ by the alternating row sum [F4]. A connected $2\times2$-free $\lambda/\nu$ with $r$ nodes and $c$ columns is exactly a connected border strip with those data [F5]; so the last display is claim 2. [step 3.1, F4, F5, algebra]

5.1 For claim 3, apply the outer Littlewood–Richardson rule [F3] to $\mu=(x,1^{r-x})$ and multiply by $(-1)^{r-x}$: $\sum_{x=1}^{r}(-1)^{r-x}\chi^\nu\circ\chi^{(x,1^{r-x})}=\sum_{x=1}^{r}(-1)^{r-x}\sum_{\lambda\vdash n}c^\lambda_{\nu,(x,1^{r-x})}\chi^\lambda=\sum_{\lambda\vdash n}\bigl[\sum_{x=1}^{r}(-1)^{r-x}c^\lambda_{\nu,(x,1^{r-x})}\bigr]\chi^\lambda$, the exchange of the two finite sums being legitimate because each is finite and the character ring is abelian. By step 4.1 the bracket equals $(-1)^{r-c(\lambda/\nu)}$ when $\lambda/\nu$ is a connected border strip of size $r$ and $0$ for every other $\lambda$, so the double sum collapses to $\sum_{\lambda/\nu}(-1)^{r-c(\lambda/\nu)}\chi^\lambda$ over the removable border strips of size $r$; since $\operatorname{ht}(\lambda/\nu)=r-c(\lambda/\nu)$ by [F5], this is the displayed character identity of claim 3. [step 4.1, F3, F5, algebra] ∎

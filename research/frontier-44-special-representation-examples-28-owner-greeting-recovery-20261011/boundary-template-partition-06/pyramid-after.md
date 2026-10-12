---
id: def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character
kind: definition
title: "The type-A nilpotent pyramid, good grading and Whittaker character"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-arakawa-suzuki-casimir-operators-on-tensor-functors,
       def-classical-complex-matrix-lie-algebras, def-universal-enveloping-algebra,
       thm-nilpotent-jordan-string-basis, def-nilpotent-endomorphism,
       prop-trace-forms-are-symmetric-and-invariant,
       def-representation-of-a-lie-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Introduction and Sections 3.1-3.2, printed pp. 1-3 and 10-12: the pyramid of a partition, the nilpotent e of Jordan type lambda, the good grading, the parabolic p with Levi gl_{q_1}+...+gl_{q_l} and opposite radical m, the centralizer basis, and the character chi(x)=tr(xe) on m."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 3, (3.1)-(3.7), printed pp. 23-25: the pyramid and shift matrix, the grading deg e_{i,j}=col(j)-col(i), the parabolic and the good grading of e, the automorphism eta, and the definition of W(pi) used later on this page."
verification:
  precheck: pass
---

## Definition

Work over $\mathbb C$. Let $\lambda=(0\le p_1\le\cdots\le p_n)$ be a partition
of $N\ge0$ with transpose $q_1\ge\cdots\ge q_l$, where $l=p_n$ for a
nonempty row list and $l=0$ for an empty row list. Zero-length rows have no
boxes. Let $\mathfrak g=\mathfrak{gl}_N(\mathbb C)$ with matrix units
$e_{i,j}$ in the standard basis
$v_1,\dots,v_N$ ([[def-classical-complex-matrix-lie-algebras]]). Number the
boxes of the diagram of $\lambda$ by $1,\dots,N$ down columns from the left,
and for a box $i$ write $\mathrm{row}(i),\mathrm{col}(i)$ for its row and
column, $L(i)$ for the box immediately to its left (or $\emptyset$ if absent),
and $R(i)$ for the box immediately to its right (or $\emptyset$ if absent).
Define the nilpotent endomorphism
$$e=\sum_{i:\ L(i)\ne\emptyset}e_{L(i),i}\in\mathfrak g,\qquad ev_i=v_{L(i)},$$
and declare $\deg e_{i,j}=\mathrm{col}(j)-\mathrm{col}(i)$ for all $i,j$, so
that $\mathfrak g=\bigoplus_{r\in\mathbb Z}\mathfrak g_r$ with
$\mathfrak g_r=\operatorname{span}\{e_{i,j}:\mathrm{col}(j)-\mathrm{col}(i)=r\}$.
Put
$$\mathfrak p=\bigoplus_{r\ge0}\mathfrak g_r,\qquad \mathfrak h=\mathfrak g_0,\qquad \mathfrak m=\bigoplus_{r<0}\mathfrak g_r,$$
and for rows $1\le i,j\le n$ define the shift $s_{i,j}=p_j-p_i$ if $i\le j$
and $s_{i,j}=0$ if $i\ge j$, together with the centralizer elements
$$e_{i,j;r}=\sum_{\substack{\mathrm{row}(h)=i,\ \mathrm{row}(k)=j\\ \mathrm{col}(k)-\mathrm{col}(h)=r}}e_{h,k} \qquad(s_{i,j}\le r<p_j).$$
Finally let $\chi\colon\mathfrak m\to\mathbb C$ be $\chi(x)=\operatorname{tr}(xe)$,
where the trace is the trace of the $N\times N$ matrix.

The verification below records the properties of this data that are used
throughout this page. $e\in\mathfrak g_1$ has Jordan type $\lambda$; $\mathfrak p$
is a parabolic subalgebra with Levi factor
$\mathfrak h\cong\mathfrak{gl}_{q_1}\oplus\cdots\oplus\mathfrak{gl}_{q_l}$ and
nilradical $\bigoplus_{r>0}\mathfrak g_r$, while $\mathfrak m$ is the
nilradical of the opposite parabolic; the elements $e_{i,j;r}$ with
$s_{i,j}\le r<p_j$ form a basis of the centralizer
$\mathfrak g^e=\{X\in\mathfrak g:[X,e]=0\}$; the box set
$J=\{(a,b)\in\{1,\dots,N\}^2:\mathrm{col}(a)\le\mathrm{col}(b),\ R(b)=\emptyset\}$
is in bijection with $K=\{(i,j,r):1\le i,j\le n,\ s_{i,j}\le r<p_j\}$ via
$(a,b)\mapsto(\mathrm{row}(a),\mathrm{row}(b),\mathrm{col}(b)-\mathrm{col}(a))$, and
$$\xi_{a,b}:=\sum_{t=0}^{\mathrm{col}(a)-1}e_{L^t(a),L^t(b)}=e_{\mathrm{row}(a),\mathrm{row}(b);\mathrm{col}(b)-\mathrm{col}(a)};$$
and $\chi$ is a Lie algebra character, $\chi([\mathfrak m,\mathfrak m])=0$. This
grading is the type-A pyramid good grading in the degree-one convention:
$\operatorname{ad}e:\mathfrak g_r\to\mathfrak g_{r+1}$ is injective for
$r<0$ and surjective for $r\ge0$. For $e\ne0$ it differs from the standard
Dynkin grading, in which $e$ has degree $2$ rather than $1$. For $e=0$ all
boxes lie in one column or there are no boxes, and the pyramid grading and
the trivial Dynkin grading both concentrate $\mathfrak g$ in degree zero.
If $N=0$, take $\mathfrak{gl}_0=0$: the box set and both centralizer index
sets are empty, $e=0$, $\mathfrak p=\mathfrak h=\mathfrak m=0$, and
$\chi=0$. These conventions also permit an empty row list.

## Facts & Assumptions

**Given:** A partition $\lambda=(0\le p_1\le\cdots\le p_n)$ of $N$ with transpose $q_1\ge\cdots\ge q_l$, the diagram boxes with row, column, $L$ and $R$ data, the nilpotent $e=\sum e_{L(i),i}$, the grading $\deg e_{i,j}=\mathrm{col}(j)-\mathrm{col}(i)$ and the subspaces $\mathfrak p,\mathfrak h,\mathfrak m$, and the elements $e_{i,j;r}$ and $\chi$.

[F1] Matrix units satisfy $e_{h,k}e_{k,l}=e_{h,l}$ and $e_{h,k}e_{k',l}=0$ for $k\ne k'$, and the trace is $\operatorname{tr}(e_{h,k})=\delta_{hk}$ ([[def-classical-complex-matrix-lie-algebras]]).

[F2] Jordan strings: a nilpotent endomorphism is described by its strings $w,Nw,N^2w,\dots$; the Jordan type is the partition of the string lengths, and the centralizer of a nilpotent of type $\mu$ has dimension $\sum_{h,l}\min(\mu_h,\mu_l)$ ([[thm-nilpotent-jordan-string-basis]], [[def-nilpotent-endomorphism]]).

[F3] The trace form $\operatorname{tr}(XY)$ on $\mathfrak{gl}_N(\mathbb C)$ is symmetric and invariant, and the degree grading is multiplicative: if $x\in\mathfrak g_r$ and $y\in\mathfrak g_s$ then $xy\in\mathfrak g_{r+s}$, and $\operatorname{tr}(x)=0$ for $x\in\mathfrak g_r$ with $r\ne0$ ([[prop-trace-forms-are-symmetric-and-invariant]], [[def-classical-complex-matrix-lie-algebras]]).

[F4] The enveloping algebra and representations of $\mathfrak g$ ([[def-universal-enveloping-algebra]], [[def-representation-of-a-lie-algebra]]).





## Proof

**Proof technique:** direct.

**Given:** The pyramid data of the Definition.

1.1 The endomorphism $e$ acts on the box basis by $ev_i=v_{L(i)}$ and $ev_i=0$ for boxes with $L(i)=\emptyset$; hence the $v_i$ in one row form a Jordan string of length $p_i$, because left shifts run from the rightmost box of the row to the first. Consequently $e$ is nilpotent of Jordan type $\lambda=(p_1,\dots,p_n)$, $e\in\mathfrak g_1$, and the number of columns is $l=p_n$ when the row list is nonempty, with $l=0$ for the empty row list. Zero-length rows contribute no Jordan strings; for $N=0$ all box-indexed sums and vector spaces are empty or zero. [F1, F2, F4, algebra]

1.2 Parabolic structure. The degree defines a $\mathbb Z$-grading of the associative algebra: $\deg(e_{h,k}e_{k',l})=\deg e_{h,k}+\deg e_{k',l}$ when $k=k'$ by [F1], and $[\mathfrak g_r,\mathfrak g_s]\subseteq\mathfrak g_{r+s}$. Hence $\mathfrak p=\bigoplus_{r\ge0}\mathfrak g_r$ is a subalgebra, its degree-zero part $\mathfrak h$ consists of the matrices $e_{h,k}$ with $\mathrm{col}(h)=\mathrm{col}(k)$, which is exactly the block-diagonal subalgebra with blocks of sizes $q_1,\dots,q_l$, so $\mathfrak h\cong\mathfrak{gl}_{q_1}\oplus\cdots\oplus\mathfrak{gl}_{q_l}$; the strictly positive part $\bigoplus_{r>0}\mathfrak g_r$ is a nilpotent ideal and $\mathfrak m=\bigoplus_{r<0}\mathfrak g_r$ is the nilradical of the opposite parabolic, with $\mathfrak g=\mathfrak m\oplus\mathfrak h\oplus\bigoplus_{r>0}\mathfrak g_r$. [F1, algebra]

1.3 The centralizer basis. First $[e,e_{h,k}]=e_{L(h),k}-e_{h,R(k)}$ for boxes $h,k$, with a term omitted when the relevant neighbour is absent (this is $[e,e_{h,k}]=\sum_d(e_{L(d),d}e_{h,k}-e_{h,k}e_{L(d),d})$ and $e_{L(d),d}e_{h,k}=\delta_{d,h}e_{L(d),k}$, while $e_{h,k}e_{L(d),d}=\delta_{L(d),k}e_{h,d}$ and $L(d)=k$ holds exactly for $d=R(k)$ in the same row). Now write $e_{i,j;r}=\sum_ce_{h_c,k_c}$ with $h_c$ the box of row $i$ in column $c$ and $k_c$ the box of row $j$ in column $c+r$, the sum over $c$ with $1\le c\le p_i$ and $1\le c+r\le p_j$; here $r\ge s_{i,j}\ge0$ by the defining range, so this index set is exactly $c=1,\dots,\min(p_i,p_j-r)$. Then $[e,e_{i,j;r}]=\sum_c(e_{h_{c-1},k_c}-e_{h_c,k_{c+1}})$ where a term is omitted when the neighbour does not exist; shifting the second sum by $c\mapsto c+1$ and using $R(k_c)=k_{c+1}$ (which exists exactly when $c+r<p_j$) shows that the two sums run over the same index set $\{c:c\ge2,\ c\le\min(p_i,p_j-r)\}$, because for every $c$ in the defining range one has $c+r\le p_j$; hence the commutator is $0$. The $e_{i,j;r}$ are linearly independent because they are sums over pairwise disjoint matrix units, and their number is $\sum_{i,j}\#\{r:s_{i,j}\le r<p_j\}=\sum_{i,j}(p_j-\max(0,p_j-p_i))=\sum_{i,j}\min(p_i,p_j)$, which equals $\dim\mathfrak g^e$ by [F2]. Hence they form a basis of $\mathfrak g^e$. [F2, algebra]

2.1 The bijection $J\to K$. For $(a,b)\in J$ put $i=\mathrm{row}(a)$, $j=\mathrm{row}(b)$ and $r=\mathrm{col}(b)-\mathrm{col}(a)$. Because $b$ is rightmost, $\mathrm{col}(b)=p_j$; hence $r=p_j-\mathrm{col}(a)\ge0$, $r<p_j$ because $\mathrm{col}(a)\ge1$, and $r\ge p_j-p_i$ because $\mathrm{col}(a)\le p_i$. Thus $s_{i,j}=\max(0,p_j-p_i)\le r<p_j$, so the map lands in $K$. The triple determines $b$ as the rightmost box of row $j$ and $a$ as the box of row $i$ in column $p_j-r$, proving injectivity. Conversely, if $(i,j,r)\in K$, then $r<p_j$ gives $1\le p_j-r$, while $r\ge\max(0,p_j-p_i)$ gives $p_j-r\le p_i$. Thus those two boxes exist, their columns satisfy $\mathrm{col}(a)\le\mathrm{col}(b)$, and they give the required preimage. If either row has length zero, the index range in $K$ is empty, consistently with the absence of such a box pair. [step 1.3, algebra]

2.2 The character. For $x,y\in\mathfrak m$ one has $[x,y]\in[\mathfrak m,\mathfrak m]\subseteq\mathfrak g_{\le-2}$ by step 1.2, and $e\in\mathfrak g_1$, so $[x,y]e\in\mathfrak g_{\le-1}$ and $\operatorname{tr}([x,y]e)=0$ by [F3]. Hence $\chi([\mathfrak m,\mathfrak m])=0$, that is, $\chi$ is a Lie algebra character on $\mathfrak m$: for $x,y\in\mathfrak m$, $\chi([x,y])=\operatorname{tr}([x,y]e)=0$. [F3, step 1.2, algebra]

3.1 The identity $\xi_{a,b}=e_{\mathrm{row}(a),\mathrm{row}(b);\mathrm{col}(b)-\mathrm{col}(a)}$. Left shifts of $a$ run through the boxes of row $i$ in columns $\mathrm{col}(a),\mathrm{col}(a)-1,\dots,1$, and the corresponding left shifts of $b$ run through the boxes of row $j$ in columns $\mathrm{col}(b),\mathrm{col}(b)-1,\dots,\mathrm{col}(b)-\mathrm{col}(a)+1$; all these exist because $\mathrm{col}(b)-\mathrm{col}(a)+1\ge1$ and the shifts stop while the row $i$ box exists. The pairs $(\mathrm{row}(h),\mathrm{row}(k))$ obtained are exactly the pairs $(i,j)$ with column difference $\mathrm{col}(b)-\mathrm{col}(a)$ and $\mathrm{col}(h)$ ranging over $1,\dots,\mathrm{col}(a)$; by step 2.1 these are exactly the pairs indexing $e_{\mathrm{row}(a),\mathrm{row}(b);\mathrm{col}(b)-\mathrm{col}(a)}$. Hence the two finite sums coincide, and the two displayed families are the same basis of $\mathfrak g^e$. [step 1.3, step 2.1, algebra]

4.1 The good-grading conditions. By step 1.3, the centralizer $\mathfrak g^e$ has a homogeneous basis $e_{i,j;r}$ with $r\ge s_{i,j}\ge0$, so it has no negative-degree part. The kernel of $\operatorname{ad}e:\mathfrak g_r\to\mathfrak g_{r+1}$ is $\mathfrak g^e\cap\mathfrak g_r$, hence this map is injective for $r<0$. The trace pairing is nondegenerate between $\mathfrak g_r$ and $\mathfrak g_{-r}$: each matrix unit $e_{a,b}$ pairs with $e_{b,a}$, and matrix units of other total degree have zero trace. Invariance gives $\operatorname{tr}([e,x]y)=-\operatorname{tr}(x[e,y])$, so the transpose of the map on degree $r$ is, up to sign, $\operatorname{ad}e:\mathfrak g_{-r-1}\to\mathfrak g_{-r}$. For $r\ge0$ the latter is injective by the negative-degree result; finite-dimensional duality therefore makes the original map surjective. These are the good-grading conditions for degree-one $e$. They remain valid when $e=0$, because all nonzero spaces then have degree zero. [F1, F3, step 1.1, step 1.3, algebra]

4.2 Dynkin normalization and the zero boundary. If $e\ne0$, step 1.1 puts this nonzero element in pyramid degree $1$, whereas the standard Dynkin grading defined by an $\mathfrak{sl}_2$-triple has $[h,e]=2e$ and puts it in degree $2$; these two gradings therefore differ. There is no assertion that every Dynkin matrix degree is even: on Jordan strings of lengths one and two the standard $h$-weights are $0$ and $1,-1$, so matrix units between these strings have odd weights. If $e=0$, no row has length greater than one, since a row of length at least two contributes a distinct nonzero left-shift matrix unit. Hence all boxes lie in the first column or there are none, every matrix unit has pyramid degree zero, and the zero triple gives the trivial Dynkin grading as well. If $N=0$, there are no matrix units or centralizer indices; the parabolic, Levi, opposite nilradical and trace character are zero. Thus the conventions and good-grading conditions cover repeated row lengths, zero-length rows and the empty pyramid without an exclusion. [F1, step 1.1, step 1.3, step 4.1, algebra] ∎

## Remarks

- The numbering of boxes down columns from the left makes each row a Jordan string of $e$; this is why the row lengths $p_i$ (weakly increasing) are the Jordan block sizes, while the column heights $q_j$ are the ranks' increments and index the Levi blocks of $\mathfrak h$.

- The shift $s_{i,j}=\max(0,p_j-p_i)$ counts the overlap $\min(p_i,p_j)$ of the two rows $i,j$ through the identity $\#\{r:s_{i,j}\le r<p_j\}=p_j-\max(0,p_j-p_i)$; this count is used again in the loop-mode index sets of the finite W-algebra items.

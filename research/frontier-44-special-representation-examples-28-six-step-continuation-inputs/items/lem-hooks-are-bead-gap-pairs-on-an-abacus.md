---
id: lem-hooks-are-bead-gap-pairs-on-an-abacus
kind: lemma
title: "Hooks are bead-gap pairs on the abacus"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-beta-set-and-e-runner-abacus-of-a-partition, def-hook-arm-leg-and-hook-length, def-removable-border-strip-and-height, lem-hooks-correspond-to-removable-border-strips]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 53-59: Lemma 4.1, Lemma 4.3, the definitions of $H_i(\\lambda)$ and $H_i(X)$, Lemma 4.4 with its proof, Corollary 4.5 with its proof, Proposition 4.7 with its proof, Corollary 4.8"
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 5.26 with its proof, printed pp. 56-57: decreasing a beta number by a hook length unwraps the corresponding rim hook; the hook/rim-hook dictionary of Proposition 5.24 and the paragraph following it, printed pp. 55-57"
---

## Statement

Let $e\ge2$, let $\lambda\vdash n$ and let $X=\{h_1>h_2>\cdots>h_m\}$ be a
$\beta$-set for $\lambda$, so that $P(X)=\lambda$
([[def-beta-set-and-e-runner-abacus-of-a-partition]]). Write $H_i(\lambda)$ for
the set of hook lengths in row $i$ of $[\lambda]$: thus $h\in H_i(\lambda)$
means $h=h_{i,j}(\lambda)$ for some node $(i,j)\in[\lambda]$, and
$H_i(\lambda)=\emptyset$ for $i>\ell(\lambda)$
([[def-hook-arm-leg-and-hook-length]]).

(i) For every $h\ge0$ and every $i\in[m]$, $h\in H_i(\lambda)$ if and only if
$h\le h_i$ and $h_i-h\notin X$. Equivalently, the hooks of $\lambda$
correspond bijectively to the **bead-gap pairs** $(b,g)$ with $b\in X$,
$g\notin X$ and $0\le g<b$; the hook $H_{i,j}(\lambda)$ corresponds to
$$(b,g)=\bigl(h_i,\;h_i-h_{i,j}(\lambda)\bigr),$$
and then $|H_{i,j}(\lambda)|=b-g$.

(ii) Fix a node $(i,j)\in[\lambda]$ and let $(b,g)$ be its bead-gap pair as in
(i). Then
$$X':=(X\setminus\{b\})\cup\{g\}$$
is again a $\beta$-set, now for the partition $\lambda\setminus R_{i,j}$
obtained from $\lambda$ by removing the removable border strip $R_{i,j}$ that
corresponds to the hook of $(i,j)$, of size $h_{i,j}(\lambda)$ and height
$\ell(i,j)=\lambda'_j-i$
([[def-removable-border-strip-and-height]],
[[lem-hooks-correspond-to-removable-border-strips]]); in terms of parts, with
$b_0:=\ell(i,j)=\lambda'_j-i$,
$$\lambda\setminus R_{i,j}=\bigl(\lambda_1,\dots,\lambda_{i-1},\,\lambda_{i+1}-1,\dots,\lambda_{i+b_0}-1,\,j-1,\,\lambda_{i+b_0+1},\dots\bigr),$$
so that $|\lambda\setminus R_{i,j}|=n-h_{i,j}(\lambda)$. Finally $X'$ is
obtained from the configuration $A_X$ by moving the bead from position $b$ to
the gap $g$.

(iii) In particular $e\mid h_{i,j}(\lambda)$ if and only if $b\equiv g\pmod e$,
that is, if and only if the bead $b$ and the gap $g$ lie on the same runner of
the $e$-abacus; then $g=b-e\cdot(h_{i,j}(\lambda)/e)$ and the move in (ii) is
the slide of the bead $b$ up $h_{i,j}(\lambda)/e$ rows on its own runner. A
hook of length $e$ in row $i$ of $\lambda$ exists if and only if $h_i\ge e$
and $h_i-e\notin X$; equivalently, if and only if some bead of $X$ has a gap
in the position $e$ labels above it on its own runner.

No choice principle is used.

## Facts & Assumptions

**Given:** An integer $e\ge2$, a partition $\lambda\vdash n$ with
$t:=\ell(\lambda)$ parts, and a $\beta$-set $X=\{h_1>\cdots>h_m\}$ for
$\lambda$, so that $P(X)=\lambda$ ([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F1] Hook lengths: $h_{i,j}(\lambda)=\lambda_i-j+\lambda'_j-i+1$ for
$(i,j)\in[\lambda]$, and for fixed $i$ the map $j\mapsto h_{i,j}(\lambda)$ is
strictly decreasing on $1\le j\le\lambda_i$, because
$h_{i,j}(\lambda)-h_{i,j+1}(\lambda)=1+\lambda'_j-\lambda'_{j+1}\ge1$; hence
the hook lengths in a fixed row are pairwise distinct and
$h_{i,j}(\lambda)\ge1$ ([[def-hook-arm-leg-and-hook-length]]).

[F2] For a $\beta$-set $Y=\{y_1>\cdots>y_r\}$ one has
$P(Y)_j=y_j-(r-j)$ for $1\le j\le r$, after which trailing zeros are deleted:
indeed there are $y_j$ positions $0,1,\dots,y_j-1$ below the bead $y_j$, of
which exactly $r-j$ are occupied by the beads $y_{j+1},\dots,y_r$, so
$y_j-(r-j)$ of them are gaps, and the definition of $P$ takes exactly this
difference ([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F3] The $\beta$-sets of $\lambda$ are exactly the sets $X_\lambda+l$,
$l\in\mathbb N_0$, where $X_\lambda=\{b_1(\lambda)>\cdots>b_t(\lambda)\}$ with
$b_i(\lambda)=h_{i,1}(\lambda)=\lambda_i+t-i$, and $|X_\lambda+l|=t+l$
([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F4] A removable border strip of $\lambda$ is a nonempty edge-connected set of
nodes containing no $2\times2$ block whose complement in $[\lambda]$ is again
a Young diagram; its height is its number of occupied rows minus one, and for
a strip that is the hook of a node it equals the leg length of that node
([[def-removable-border-strip-and-height]],
[[lem-hooks-correspond-to-removable-border-strips]]).


## Proof

**Proof technique:** direct.

1.1 Put $H_i(X):=\{1,2,\dots,h_i\}\setminus\{h_i-h_j:i<j\le m\}$ for $i\in[m]$. We claim that for every $h\ge0$ and $i\in[m]$, $$h\in H_i(X)\iff h\le h_i\ \text{and}\ h_i-h\notin X.$$ If $h>h_i$, then $h\notin H_i(X)$ by definition and $h_i-h<0$, so $h_i-h\notin X$ fails; hence assume $0\le h\le h_i$. Then $h\in H_i(X)$ means $h\ne h_i-h_j$ for all $j>i$, and $h_i-h\notin X$ means in addition $h_i-h\ne h_j$ for all $j\le i$. For $j<i$ we have $h_i-h\le h_i<h_j$, so those clauses are automatic, and the two conditions coincide. [F2, algebra]

1.2 Part (ii), the removed partition: put $b_0:=\lambda'_j-i$ and $$\mu:=\bigl(\lambda_1,\dots,\lambda_{i-1},\,\lambda_{i+1}-1,\dots,\lambda_{i+b_0}-1,\,j-1,\,\lambda_{i+b_0+1},\dots\bigr).$$ This is a partition: rows $i+1,\dots,i+b_0$ all have length at least $j$ while the entry $\mu_i=\lambda_{i+1}-1$ is at least $j-1$, and $\lambda_{i+b_0+1}<j$; all other comparisons are inherited from $\lambda$. Its size is $|\mu|=n-h_{i,j}(\lambda)$, because it is obtained from $\lambda$ by replacing the parts $\lambda_i,\lambda_{i+1},\dots,\lambda_{i+b_0}$ by $\lambda_{i+1}-1,\dots,\lambda_{i+b_0}-1,j-1$ and $\lambda_{i+1}-1+\dots+\lambda_{i+b_0}-1+j-1=\lambda_i+\dots+\lambda_{i+b_0}-h_{i,j}(\lambda)$ holds since $h_{i,j}(\lambda)=\lambda_i-j+b_0+1$. By [[lem-hooks-correspond-to-removable-border-strips]] the hook of $(i,j)$ corresponds to a removable border strip $R_{i,j}$ of $\lambda$ of size $h_{i,j}(\lambda)$ and height $\ell(i,j)=b_0$; removing it from $\lambda$ produces the partition displayed above, so $\mu=\lambda\setminus R_{i,j}$ in the notation of part (ii) and this step is the exact removal formula displayed in the source. [F1, F4, construct]

2.1 We show that $H_i(X_\lambda)=H_i(\lambda)$ for all $i\in[t]$. Fix $i\in[t]$ and consider the interval $I:=\{0,1,\dots,h_i-1\}$ of $h_i$ positions of the abacus. The beads of $X_\lambda$ lying in $I$ are exactly $h_{i+1},\dots,h_t$, so by [F2] applied to $X_\lambda$ the interval contains $h_i-(t-i)=\lambda_i$ gaps. On the other hand, for $1\le j\le\lambda_i$ put $g_j:=h_i-h_{i,j}(\lambda)$. Then $g_1\le g_j\le g_{\lambda_i}$, and $$g_1=h_i-b_i(\lambda)=t-i\ge0,\qquad g_{\lambda_i}=h_i-\lambda'_{\lambda_i}+i-1<h_i,$$ the second inequality because $\lambda'_{\lambda_i}\ge i$ as $(i,\lambda_i)\in[\lambda]$; hence every $g_j$ lies in $I$. If $g_j=h_x$ for some $x\in[t]$, then comparing $h_x=\lambda_x+t-x$ with $g_j=t+j-1-\lambda'_j$ gives $\lambda_x+\lambda'_j=x+j-1$, which says $h_{x,j}(\lambda)=0$, impossible for the hook length of a node and in fact impossible for every pair $(x,j)$: if $(x,j)\in[\lambda]$ then $x\le\lambda'_j$ and $j\le\lambda_x$ give $h_{x,j}(\lambda)=(\lambda_x-j)+(\lambda'_j-x)+1\ge1$, while if $(x,j)\notin[\lambda]$ then one of $\lambda_x<j$, $x>\lambda'_j$ holds and the same sum is $\le-1$. Hence $g_j\notin X_\lambda$, so the $\lambda_i$ distinct numbers $g_1,\dots,g_{\lambda_i}$ are all among the $\lambda_i$ gaps of $I$ and therefore exhaust them. Thus $h\in H_i(\lambda)$ holds exactly when $h=h_{i,j}(\lambda)$ for some $j$, that is, exactly when $h_i-h$ is a gap of $I$, that is, exactly when $0\le h_i-h<h_i$ and $h_i-h\notin X_\lambda$. Combined with step 1.1 this proves $H_i(X_\lambda)=H_i(\lambda)$. [F1, F3, step 1.1, algebra]

2.2 For the bijection of part (i): the map $(i,j)\mapsto(b,g)=(h_i,h_i-h_{i,j}(\lambda))$ is injective, since $b=h_i$ determines $i$ and $h_{i,j}(\lambda)=b-g$ determines $j$ by [F1]; and it lands in the bead-gap pairs because $b\in X$, $h_{i,j}(\lambda)\ge1$ gives $g<b$, and $g\notin X$ by step 1.1. Conversely, if $b\in X$, $g\notin X$ and $0\le g<b$, write $b=h_i$ and $h:=b-g\ge1$; then $h\le h_i$ and $h_i-h=g\notin X$, so $h\in H_i(\lambda)$ by step 1.1, i.e. $h=h_{i,j}(\lambda)$ for a unique $j$ by [F1], and $(b,g)$ is the pair of $(i,j)$. The length statement is $h_{i,j}(\lambda)=b-g$. [F1, step 1.1]

2.3 It is enough to verify $P(Z)=\mu$ for $Z:=(X\setminus\{h_i\})\cup\{h_i-h_{i,j}(\lambda)\}$ when $X=X_\lambda$, because shifting both sides by $l$ commutes with the construction: $(X+l)\setminus\{h_i+l\}\cup\{(h_i+l)-h_{i,j}(\lambda)\}=Z+l$, the hook length $h_{i,j}(\lambda)$ does not depend on $l$, and $P(Z+l)=P(Z)$ by [F3]. So let $X=X_\lambda=\{h_1>\cdots>h_t\}$ with $h_s=\lambda_s+t-s$. Let $Z'$ be the $\beta$-set of $\mu$ with $|Z'|=t$, namely $Z'=X_\mu+(t-\ell(\mu))$, and write $Z'=\{k_1>\cdots>k_t\}$. Then $k_s=\mu_s+(t-s)$ for every $s$, so $k_s=\lambda_s+t-s=h_s$ for $s<i$; $k_{i+s}=(\lambda_{i+s+1}-1)+(t-i-s)=\lambda_{i+s+1}+t-(i+s+1)=h_{i+s+1}$ for $0\le s<b$; $k_{i+b}=(j-1)+(t-i-b)$; and $k_s=\mu_s+(t-s)=\lambda_s+t-s=h_s$ for $s>i+b$. Consequently $Z'=(X\setminus\{h_i\})\cup\{j-1+t-i-b\}$. But $$h_i-h_{i,j}(\lambda)=(\lambda_i+t-i)-(1+\lambda_i-j+b)=j-1+t-i-b,$$ so $Z'=Z$ and $P(Z)=P(Z')=\mu$. The set $Z$ is therefore a $\beta$-set for $\lambda\setminus R_{i,j}$, as claimed, and $g=h_i-h_{i,j}(\lambda)=j-1+t-i-b<b=h_i$ with $g\notin X$ is its new element. [F1, F3, step 1.2, algebra]

2.4 Part (ii), the relocation of the bead: since $b\in X$ and $g\notin X$ by the bead-gap description of part (i), the configuration $A_{X'}$ of step 1.2 is obtained from $A_X$ by moving the bead from position $b$ to the gap $g$, and the number of beads on each runner, hence every count $|(X')^{(e)}_t|$, is unchanged. If $e\mid h_{i,j}(\lambda)$ then $g=b-h_{i,j}(\lambda)$ still lies on the runner of $b$, and the move is the slide of that bead up $h_{i,j}(\lambda)/e$ rows of its own runner. [F1, step 1.2]


3.1 We show that $H_i(X+1)=H_i(X)$ for every $\beta$-set $X$ and every $i\le m$, where $X+1=\{h_1+1>\cdots>h_m+1>0\}$: indeed $$H_i(X+1)=\{1,\dots,h_i+1\}\setminus\bigl(\{h_i-h_j:i<j\le m\}\cup\{h_i+1\}\bigr)=\{1,\dots,h_i\}\setminus\{h_i-h_j:i<j\le m\}=H_i(X),$$ and $H_{m+1}(X+1)=\{1,\dots,0\}\setminus\emptyset=\emptyset$. Also the right-hand condition of step 1.1 is stable under shifting: for $i\le m$ and $0\le h\le h_i$ one has $h_i+1-h\in X+1$ if and only if $h_i+1-h\in\{h_j+1:j\le m\}$ (the added element is $0$, and $h_i+1-h=0$ would force $h=h_i+1>h_i$), that is, if and only if $h_i-h\in X$. Hence, by induction on $l$ and [F3], $H_i(X_\lambda+l)=H_i(X_\lambda)$ for $i\le t$, while for $i>t$ we have $h_i=m-i$ for $m=t+l$, so $h_i-h_j=j-i$ for $i<j\le m$ and $H_i(X)=\{1,\dots,m-i\}\setminus\{1,\dots,m-i\}=\emptyset=H_i(\lambda)$. This proves part (i) with $H_i(X)=H_i(\lambda)$ for all $i\in[m]$. [F3, step 1.1, step 2.1, algebra]

4.1 Part (iii): since $h_{i,j}(\lambda)=b-g$, divisibility by $e$ is equivalent to $b\equiv g\pmod e$, and then $b-e\,(h_{i,j}(\lambda)/e)=g$ lies on the runner of $b$ and the relocation of step 2.4 slides the bead up $h_{i,j}(\lambda)/e$ rows on its own runner. Applying step 1.1 with $h=e$, a hook of length $e$ in row $i$ exists exactly when $h_i\ge e$ and $h_i-e\notin X$, that is, exactly when the position $e$ labels above the bead $h_i$ on its runner is a gap. [F1, step 1.1, step 2.3, algebra] ∎

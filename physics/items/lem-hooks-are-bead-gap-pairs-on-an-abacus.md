---
id: lem-hooks-are-bead-gap-pairs-on-an-abacus
kind: lemma
title: "Hooks are bead-gap pairs on the abacus"
status: published
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
and $h_i-e\notin X$; Thus $\lambda$ has a hook of length $e$ if and only if some bead of $X$ has a gap
in the position $e$ labels above it on its own runner.

No choice principle is used.

## Facts & Assumptions

**Given:** An integer $e\ge2$, a partition $\lambda\vdash n$ with $t:=\ell(\lambda)$ parts, and a $\beta$-set $X=\{h_1>\cdots>h_m\}$ for $\lambda$, so that $P(X)=\lambda$ ([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F1] Hook lengths: $h_{i,j}(\lambda)=\lambda_i-j+\lambda'_j-i+1$ for $(i,j)\in[\lambda]$, and for fixed $i$ the map $j\mapsto h_{i,j}(\lambda)$ is strictly decreasing on $1\le j\le\lambda_i$, because $h_{i,j}(\lambda)-h_{i,j+1}(\lambda)=1+\lambda'_j-\lambda'_{j+1}\ge1$; hence the hook lengths in a fixed row are pairwise distinct and $h_{i,j}(\lambda)\ge1$ ([[def-hook-arm-leg-and-hook-length]]).

[F2] For a $\beta$-set $Y=\{y_1>\cdots>y_r\}$ one has $P(Y)_j=y_j-(r-j)$ for $1\le j\le r$, after which trailing zeros are deleted: indeed there are $y_j$ positions $0,1,\dots,y_j-1$ below the bead $y_j$, of which exactly $r-j$ are occupied by the beads $y_{j+1},\dots,y_r$, so $y_j-(r-j)$ of them are gaps, and the definition of $P$ takes exactly this difference ([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F3] The $\beta$-sets of $\lambda$ are exactly the sets $X_\lambda+l$, $l\in\mathbb N_0$, where $X_\lambda=\{b_1(\lambda)>\cdots>b_t(\lambda)\}$ with $b_i(\lambda)=h_{i,1}(\lambda)=\lambda_i+t-i$, and $|X_\lambda+l|=t+l$ ([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F4] A removable border strip of $\lambda$ is a nonempty edge-connected set of nodes containing no $2\times2$ block whose complement in $[\lambda]$ is again a Young diagram; its height is its number of occupied rows minus one, and for a strip that is the hook of a node it equals the leg length of that node ([[def-removable-border-strip-and-height]], [[lem-hooks-correspond-to-removable-border-strips]]).

## Proof

**Proof technique:** direct.

1.1 Pad $\lambda$ with zeros to length $m$. By [F3], $h_i=\lambda_i+m-i$. Below $h_i$ there are exactly $m-i$ beads, hence $h_i-(m-i)=\lambda_i$ gaps. For a node $(i,j)$ put $g_j=h_i-h_{i,j}(\lambda)=m+j-1-\lambda'_j$. These values are distinct by [F1], satisfy $0\le g_j<h_i$, and are gaps: equality $g_j=h_x=\lambda_x+m-x$ would give $\lambda_x-j+\lambda'_j-x+1=0$. If $x\le\lambda'_j$, both differences are nonnegative; otherwise both are at most $-1$, since $\lambda_x<j$. Neither case gives zero. Thus the $\lambda_i$ numbers $g_j$ exhaust the gaps below $h_i$, including the empty set when $\lambda_i=0$. [F1, F2, F3, algebra]

1.2 Fix $(i,j)$ and put $r=\lambda'_j$ and $g=m+j-1-r$. The rim strip of [F4] has complement with rows $\mu_p=\lambda_p$ outside $i\le p\le r$, $\mu_p=\lambda_{p+1}-1$ for $i\le p<r$, and $\mu_r=j-1$: in row $p$ the strip occupies the rim nodes with column at least $j$, whose complement ends at $\max(j-1,\lambda_{p+1}-1)$. For $p<r$ one has $\lambda_{p+1}\ge j$, while $\lambda_{r+1}<j$. These formulas give the displayed partition in (ii), with trailing zeros deleted, and its size is $n-h_{i,j}(\lambda)$. [F1, F4, construct, algebra]

2.1 Consequently, for $h\ge0$, $h\in H_i(\lambda)$ exactly when $h\le h_i$ and $h_i-h\notin X$: at $h=0$ the latter fails because $h_i\in X$, and for $h>h_i$ its first inequality fails. For $1\le h\le h_i$ this is the gap correspondence in step 1.1. The bead $h_i$ determines $i$, and the distinct row hook lengths determine $j$, so $(i,j)\mapsto(h_i,g_j)$ is the asserted bijection with length $h_i-g_j$. [F1, step 1.1, algebra]

2.2 The new value $g$ is below $h_r$ because $h_r-g=\lambda_r-j+1\ge1$, and, if $r<m$, above $h_{r+1}$ because $g-h_{r+1}=j-\lambda_{r+1}\ge1$. Hence the decreasing list of $X'=(X\setminus\{h_i\})\cup\{g\}$ is $h_1,\ldots,h_{i-1},h_{i+1},\ldots,h_r,g,h_{r+1},\ldots,h_m$. Applying [F2] gives precisely the parts $\mu_p$ in step 1.2. Thus $P(X')=\lambda\setminus R_{i,j}$, and the abacus change is the relocation of the bead $h_i$ to $g$. [F2, step 1.1, step 1.2, algebra]

3.1 The length is $b-g$, so $e\mid h_{i,j}(\lambda)$ exactly when $b\equiv g\pmod e$. In that case the bead remains on its runner, moves up $h_{i,j}(\lambda)/e$ rows, and all runner bead counts are unchanged. Without this divisibility assumption the relocation may change runners. In row $i$ a hook of length $e$ exists exactly when $h_i\ge e$ and $h_i-e\notin X$, by step 2.1; existential quantification over $i$ gives the final bead criterion in (iii). [step 2.1, step 2.2, algebra] ∎

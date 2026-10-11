---
id: lem-hooks-correspond-to-removable-border-strips
kind: lemma
title: "Hooks of a partition correspond bijectively to removable border strips"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-removable-border-strip-and-height,
       def-hook-arm-leg-and-hook-length,
       def-partition-young-diagram-and-conjugate-partition,
       def-skew-diagram-and-semistandard-skew-tableau,
       def-removable-and-addable-nodes-of-a-partition]
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
      locator: "§18.2–18.4, printed pp. 73–74: the (i,j)-hook with its arm and leg, the skew hook as a connected part of the rim removable to leave a diagram, and Lemma 18.4 with the displayed natural bijection"
    - title: "William Woods, Representation theory of the symmetric groups (Cambridge Part III essay, 33 pp.)"
      url: "https://billywoods.net/part_iii_essay.pdf"
      locator: "§4.3.1, printed pp. 24–25: the (i,j)-hook, the skew hook obtained by crawling along the lower-right rim, and the height as one less than the number of rows occupied"
---

## Statement

Let $\lambda\vdash n$ and $x=(i,j)\in[\lambda]$. Let $H(x)$ be the hook of $x$,
with arm length $a(x)=\lambda_i-j$, leg length $\ell(x)=\lambda'_j-i$ and hook
length $h(x)=a(x)+\ell(x)+1$
([[def-hook-arm-leg-and-hook-length]]); its two endpoints are the last node
$(i,\lambda_i)$ of its arm and the last node $(\lambda'_j,j)$ of its leg. Let
$\xi(x)$ be the unique edge-connected set of nodes of $[\lambda]$ with
endpoints $(i,\lambda_i)$ and $(\lambda'_j,j)$ that lies in the rim of
$[\lambda]$, i.e. consists of nodes $(p,q)$ with $(p+1,q+1)\notin[\lambda]$
([[def-partition-young-diagram-and-conjugate-partition]],
[[def-skew-diagram-and-semistandard-skew-tableau]]). Then:

1. $\xi(x)$ is a removable border strip of $\lambda$ of size $h(x)$ and height
   $\ell(x)$ ([[def-removable-border-strip-and-height]]), and
   $[\lambda]\setminus\xi(x)$ is a Young diagram, so $\lambda\setminus\xi(x)$ is
   a partition of $n-h(x)$;
2. every removable border strip of $\lambda$ equals $\xi(x)$ for exactly one
   node $x\in[\lambda]$; hence $x\mapsto\xi(x)$ is a bijection from the nodes
   of $[\lambda]$ onto the removable border strips of $\lambda$.

Consequently the sizes of the removable border strips of $\lambda$ are exactly
the hook lengths of $\lambda$, the height of $\xi(x)$ is the leg length
$\ell(x)$, and $x$ is removable as a node
([[def-removable-and-addable-nodes-of-a-partition]]) if and only if $\xi(x)$
has size $1$. No choice principle is used.

## Facts & Assumptions

**Given:** A partition $\lambda=(\lambda_1\ge\cdots\ge\lambda_k>0)$ of $n$ with English diagram $[\lambda]$, its conjugate $\lambda'$ with $\lambda'_j=\#\{p:\lambda_p\ge j\}$, and a node $x=(i,j)\in[\lambda]$, so that $1\le i\le k$, $1\le j\le\lambda_i$, $i\le\lambda'_j$ and $j\le\lambda_i$.

[F1] The rim of $[\lambda]$ is the set $R(\lambda):=\{(p,q)\in[\lambda]:(p+1,q+1)\notin[\lambda]\}$; it contains $(p,q)\in[\lambda]$ exactly when $q=\lambda_p$ or $\lambda_{p+1}\le q$ (with $\lambda_{k+1}=0$), and it contains $(1,\lambda_1)$ and $(k,1)$, and also $(\lambda'_j,j)$ for every $j$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] Two nodes are side-adjacent when their coordinates differ by one in exactly one coordinate; a set of nodes is edge-connected when any two of its nodes are joined by a chain of side-adjacent nodes in the set ([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F3] A removable border strip of $\lambda$ is a nonempty set $\xi$ of nodes of $[\lambda]$ that is edge-connected, contains no $2\times2$ block, and whose complement $[\lambda]\setminus\xi$ is the Young diagram of a partition; its height is the number of distinct rows it occupies minus one ([[def-removable-border-strip-and-height]]).

[F4] A node $x$ is removable exactly when $h(x)=1$, equivalently when it is the last node of its row and of its column ([[def-hook-arm-leg-and-hook-length]], [[def-removable-and-addable-nodes-of-a-partition]]).

## Proof

**Proof technique:** direct.

1.1 The rim is a path whose steps move left or down. Let $(p,q)\in R(\lambda)$ and suppose first that $q>1$. If $\lambda_{p+1}\ge q$, then $(p+1,q)\in[\lambda]$ and it is a rim node because $(p+2,q+1)\notin[\lambda]$ follows from $(p+1,q+1)\notin[\lambda]$ and weak decrease; in this case $(p,q-1)$ is not a rim node, since $(p+1,q)\in[\lambda]$. If instead $\lambda_{p+1}<q$, then $(p+1,q)\notin[\lambda]$ and $q-1\ge1$, so $(p,q-1)\in[\lambda]$ is a rim node. For $q=1$ the only candidate is $(p+1,1)$, which lies in $[\lambda]$ when $p<k$ and is then a rim node because $\lambda_{p+1}=1$ forces $(p+2,2)\notin[\lambda]$. So every rim node other than the south-west end $(k,1)$ has exactly one rim successor among its two leftward or downward neighbours, and symmetrically every rim node other than the north-east end $(1,\lambda_1)$ has exactly one rim predecessor; hence $R(\lambda)$ is a single path from $(1,\lambda_1)$ to $(k,1)$ whose steps move left or down. In particular an edge-connected set of rim nodes is a subpath, determined by its two ends. [F1, F2, given]

2.1 Fix $x=(i,j)$ and put $P:=(i,\lambda_i)$, $Q:=(\lambda'_j,j)$. Both are rim nodes: $(i,\lambda_i)$ because $(i+1,\lambda_i+1)\notin[\lambda]$, and $(\lambda'_j,j)$ because $\lambda'_{j+1}\le\lambda'_j$ gives $(\lambda'_j+1,j+1)\notin[\lambda]$; and $i\le\lambda'_j$, $j\le\lambda_i$. Along the rim from $P$ the rows weakly increase and the columns weakly decrease, so the subpath from $P$ to $Q$ lies in the rectangle $\{(p,q):i\le p\le\lambda'_j,\ j\le q\le\lambda_i\}$ and all its nodes satisfy $p\ge i$, $q\ge j$. Conversely, if a rim node satisfies $p\ge i$ and $q\ge j$, then $q\le\lambda_p$ gives $\lambda_p\ge j$, so $p\le\lambda'_j$, and it cannot occur strictly before $P$ (nodes preceding $P$ have row $<i$, or row $i$ and column $>\lambda_i$, which is impossible), nor strictly after $Q$ (nodes following $Q$ have column $<j$, because the step out of $Q$ decreases the column as $\lambda_{\lambda'_j+1}<j$); so it lies on the subpath from $P$ to $Q$. Therefore $\xi(x)=R(\lambda)\cap\{(p,q):p\ge i,\ q\ge j\}$ is exactly that subpath, an edge-connected rim set with ends $P$ and $Q$, and by step 1.1 it is the unique such set. Its node count is the number of leftward steps $\lambda_i-j=a(x)$ plus the number of downward steps $\lambda'_j-i=\ell(x)$ plus one, so $|\xi(x)|=a(x)+\ell(x)+1=h(x)$; its rows are exactly $i,i+1,\dots,\lambda'_j$ (a left/down path meets each intervening row and visits rows in order), so its height is $\lambda'_j-i=\ell(x)$. [step 1.1, F1, F2, given, algebra]

3.1 The set $\xi(x)$ contains no $2\times2$ block, since a rim node $(p,q)$ forbids its southeast diagonal neighbour $(p+1,q+1)$. Put $b=\lambda'_j$ and define $\nu_p=\lambda_p$ for $p<i$ or $p>b$, and $\nu_p=\max(j-1,\lambda_{p+1}-1)$ for $i\le p\le b$, with $\lambda_{k+1}=0$. Inside $[i,b]$ these values decrease because $\lambda_{p+1}$ decreases; also $\nu_i<\lambda_i\le\lambda_{i-1}$ when $i>1$. At the lower boundary $\lambda_{b+1}<j$ gives $\nu_b=j-1\ge\lambda_{b+1}=\nu_{b+1}$. Thus $\nu$ is a partition after deleting trailing zeros. Rows outside $[i,b]$ contain no strip node: rows above $i$ fail its row condition, and rows below $b$ have width less than $j$. Within $[i,b]$, a node $(p,q)$ is outside the strip exactly when $q<j$ or $(p+1,q+1)\in[\lambda]$, equivalently $q\le\max(j-1,\lambda_{p+1}-1)$. This maximum is less than $\lambda_p$, since $\lambda_p\ge j$ and $\lambda_{p+1}\le\lambda_p$. Hence the complement is exactly $[\nu]$. Together with step 2.1, $\xi(x)$ is a removable border strip of size $h(x)$ and height $\ell(x)$, with complement a partition of $n-h(x)$. [step 2.1, F1, F2, F3, algebra]

4.1 Conversely, let $\xi$ be a removable border strip and write $[\lambda]\setminus\xi=[\nu]$ with $\nu$ a partition. Every node of $\xi$ lies in the rim: suppose $(p,q)\in\xi$ and $(p+1,q+1)\in[\lambda]$. If $(p+1,q+1)\in[\nu]$, then $\nu_p\ge\nu_{p+1}\ge q+1>q$, so $(p,q)\in[\nu]$, a contradiction; hence $(p+1,q+1)\in\xi$. Then $\nu_{p+1}\le q$ and equality is impossible, since $\nu_p\ge\nu_{p+1}=q$ would contradict $\nu_p<q$ (from $(p,q)\in\xi$); so $\nu_{p+1}<q$ and $q\le\lambda_{p+1}$ give $(p+1,q)\in\xi$, while $q+1\le\lambda_p$ and $\nu_p<q<q+1$ give $(p,q+1)\in\xi$. Thus $\xi$ would contain the $2\times2$ block through $(p,q)$, contrary to its definition. So $\xi$ is an edge-connected set of rim nodes and, by step 1.1, a subpath of the rim path; let $P'=(i,q_1)$ be its north-east end (maximal column) and $Q'=(p_2,j)$ its south-west end (maximal row), where we have named the coordinates so that $x':=(i,j)$. Then $q_1=\lambda_i$: otherwise $q_1<\lambda_i$, so $(i,q_1+1)\in[\lambda]$; this node is not in $\xi$ (it is not an end of the subpath and lies beyond its north-east end), hence lies in $[\nu]$, and $\nu_i\ge q_1+1>q_1>\nu_i$, a contradiction. Likewise $p_2=\lambda'_j$: otherwise $p_2<\lambda'_j$, so $(p_2+1,j)\in[\lambda]$; this node is not in $\xi$ (it lies beyond the south-west end), hence lies in $[\nu]$ with $\nu_{p_2+1}\ge j$, while $j>\nu_{p_2}\ge\nu_{p_2+1}$, a contradiction. Therefore $P'=(i,\lambda_i)$ and $Q'=(\lambda'_j,j)$, so $\xi$ is the unique edge-connected rim set with these ends, namely $\xi=\xi(x')$; and $x'$ is recovered from $\xi$ as (row of the north-east end, column of the south-west end), so it is unique. [step 1.1, step 2.1, step 3.1, F1, F2, F3, algebra]

5.1 Steps 3.1 and 4.1 give a map $x\mapsto\xi(x)$ from the nodes of $[\lambda]$ onto the removable border strips, of size $h(x)$ and height $\ell(x)$, whose two-sided inverse recovers $x$; so the map is a bijection. Consequently the multiset of sizes of the removable border strips of $\lambda$ is exactly the multiset of hook lengths $h(x)$, and by [F4] a node $x$ is removable if and only if $h(x)=1$, that is, if and only if $\xi(x)$ has size $1$. [step 3.1, step 4.1, F3, F4] ∎

## Remarks

- **The correspondence slides the hook to the rim.** The arm of the hook
  becomes the horizontal part of the rim subpath and the leg becomes its
  vertical part, which is why arm lengths and leg lengths are traded for
  columns and rows of the strip: the size becomes
  $a(x)+\ell(x)+1=h(x)$ and the height becomes $\ell(x)$.

- **Sizes versus shapes.** Hooks of different nodes can have the same length
  (for example $\lambda=(3,2)$ has the two hook lengths $4,3$ on the rim and
  $2,1$ below-right), so the bijection is on nodes and not on sizes; what it
  identifies is the multiset of hook lengths of $\lambda$ with the multiset of
  sizes of the removable border strips of $\lambda$.

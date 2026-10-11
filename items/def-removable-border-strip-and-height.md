---
id: def-removable-border-strip-and-height
kind: definition
title: "Removable border strips and their height"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-partition-young-diagram-and-conjugate-partition,
       def-skew-diagram-and-semistandard-skew-tableau,
       def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: [def-skew-hook, def-rim-hook]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§18, printed pp. 73–74: the skew hook as a connected part of the rim whose removal leaves a Young diagram; §21, printed pp. 77–86: the height convention entering the Murnaghan–Nakayama sign"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §3 Example 11, displayed expansion (2), printed p. 48, and §7 Example 5, printed p. 117: border strips, the height sign $(-1)^{\\operatorname{ht}}$, and the border-strip chain rule"
    - title: "William Woods, Representation theory of the symmetric groups (Cambridge Part III essay, 33 pp.)"
      url: "https://billywoods.net/part_iii_essay.pdf"
      locator: "§4.3.1, printed pp. 24–25: the skew hook obtained by crawling along the lower-right rim, with height one less than the number of rows it occupies"
---

## Definition

Let $\lambda\vdash n$ be a partition with English Young diagram $[\lambda]$, so
that rows are numbered downward and columns rightward, and let
$\nu\subseteq\lambda$ be a subpartition, so that the skew diagram
$[\lambda/\nu]=[\lambda]\setminus[\nu]$ is the set of nodes of $[\lambda]$
outside $[\nu]$ ([[def-partition-young-diagram-and-conjugate-partition]],
[[def-skew-diagram-and-semistandard-skew-tableau]]). Two nodes are
side-adjacent when their coordinates differ by exactly one in exactly one
coordinate.

A **removable border strip** of $\lambda$ (also called a **skew hook** or
**rim hook**) is a nonempty set $\xi$ of nodes of $[\lambda]$ such that

(i) $\xi$ is **edge-connected**: any two nodes of $\xi$ are joined by a chain
of side-adjacent nodes of $\xi$;

(ii) $\xi$ contains **no $2\times2$ block**: there are no nodes
$(i,j),(i+1,j),(i,j+1),(i+1,j+1)$ all belonging to $\xi$;

(iii) $[\lambda]\setminus\xi$ is again the Young diagram of a partition, say
$[\lambda]\setminus\xi=[\nu]$ for a partition $\nu\vdash n-|\xi|$.

Equivalently, a removable border strip is a skew diagram $\lambda/\nu$ that is
connected and contains no $2\times2$ block; since the complement of
$[\lambda/\nu]$ in $[\lambda]$ is $[\nu]$, condition (iii) is then automatic,
and (i) and (ii) say exactly that the skew diagram is connected and free of
$2\times2$ blocks. We write $\xi=\lambda/\nu$ in that case. The **size** of
$\xi$ is its number of nodes $|\xi|$; a removable border strip of size $r$ is a
**removable $r$-strip**, and then $\nu\vdash n-r$.

The **height** (also **leg length**) of a nonempty connected border strip
$\xi$ is
$$\operatorname{ht}(\xi):=(\text{number of distinct rows of }[\lambda]\text{ occupied by }\xi)-1.$$

**The counting identity.** If a removable border strip $\xi$ has $r$ nodes and
occupies $c$ distinct columns and $w$ distinct rows of $[\lambda]$, then
$w=r-c+1$, hence $\operatorname{ht}(\xi)=r-c\ge0$. Indeed $[\lambda/\nu]$ is a
connected, $2\times2$-free skew diagram with complement a Young diagram.
Every strip node $(p,q)$ lies on the rim: if $(p+1,q+1)$ belonged to
$[\lambda]$, it could not belong to $[\nu]$, since that would force
$(p,q)\in[\nu]$; and the partition inequalities then put all four nodes of
the corresponding $2\times2$ block in the strip, a contradiction. The rim
nodes in row $p$ have columns $\max(1,\lambda_{p+1}),\dots,\lambda_p$,
where missing row lengths are zero. Read each such interval from right to
left, then move down at column $\lambda_{p+1}$ to the next row: these are
exactly the rim nodes and their side-adjacencies. Thus the rim is a single
path moving left or down, and its connected subsets are subpaths. The
$r-1$ steps of $\xi$ consist of $w-1$ downward
steps and $c-1$ leftward steps, since the path visits exactly the $w$
occupied rows and exactly the $c$ occupied columns, whence
$r-1=(w-1)+(c-1)$.

In particular $\operatorname{ht}(\xi)=0$ exactly when $\xi$ is a horizontal
strip, that is, occupies at most one node in each column, and in general
$c=r-\operatorname{ht}(\xi)$ is the number of columns occupied. A removable
border strip of size $1$ is exactly a removable node
([[def-removable-and-addable-nodes-of-a-partition]]): a single node is
edge-connected and contains no $2\times2$ block, and its removal leaves a Young
diagram precisely when the node is removable. No choice principle is used.

## Remarks

- **Border strips are the pieces of the rim that can be peeled off.** Since
  $[\lambda/\nu]$ has complement the Young diagram $[\nu]$, its nodes form a
  contiguous stretch of the lower-right rim of $[\lambda]$: reading the strip
  from its north-east end to its south-west end one moves only leftward or
  downward, and the strip is determined by the pair $(\nu,\lambda)$. This is
  the sense in which removable border strips are the "skew hooks" of James
  §18 and the "border strips" of Macdonald I §3 and §7.

- **Height counts rows, not nodes in a column.** A vertical strip, occupying a
  single column of $r$ nodes, has $c=1$ and $\operatorname{ht}=r-1$, the
  largest possible height for a strip of size $r$; the rows-occupied count
  $w=\operatorname{ht}+1=r$ then agrees with the node count. The height sign
  $(-1)^{\operatorname{ht}}$ is the one used in the Murnaghan–Nakayama rule
  ([[thm-murnaghan-nakayama-character-rule]]).

- **Conventions.** The empty set is not a removable border strip: condition
  (i) applies to a nonempty set, and the height of a strip requires at least
  one occupied row. A removable border strip is thus never empty, and the
  skew diagram $\lambda/\lambda$ is valid notation for the empty diagram,
  but is not a removable border strip. The height
  convention agrees with the leg length $\ell(x)$ of the hook of $x$ under the
  hook/rim-hook correspondence
  ([[lem-hooks-correspond-to-removable-border-strips]]).

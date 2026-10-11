---
id: cex-a-disconnected-rim-set-is-not-a-border-strip
kind: counterexample
title: "A disconnected removable rim set is not a border strip"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [lem-alternating-hook-induction-cancels-disconnected-rim-removals,
       cor-no-removable-cycle-length-strip-forces-a-character-zero,
       def-removable-border-strip-and-height,
       def-littlewood-richardson-tableau-and-coefficient,
       def-skew-diagram-and-semistandard-skew-tableau,
       def-hook-arm-leg-and-hook-length,
       def-partition-young-diagram-and-conjugate-partition,
       def-column-antisymmetrizer-polytabloid-and-specht-module]
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
      locator: "§18.2, printed p. 73 (a skew hook is connected and contains no 2×2 block) and §21.5, printed pp. 81–82 (for a union of m disjoint skew hooks the multiplicity binom(m−1,c−x) makes the alternating sum vanish when m ≥ 2)"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §1, printed pp. 5–6: a border strip is connected and contains no 2×2 block, so a disconnected union of skew hooks is excluded; Chapter I §3 (2), printed p. 49, the signed border-strip sum"
---

## Statement refuted

Let $\lambda\vdash n$ and $\nu\vdash n-r$ with $\nu\subseteq\lambda$, and suppose
that the skew diagram $\lambda/\nu$ is a union of $m\ge1$ pairwise disjoint skew
hooks having $r$ nodes in total, so that removing $\lambda/\nu$ from $[\lambda]$
leaves the Young diagram $[\nu]$. Then:

1. $\lambda/\nu$ is a removable border strip of $\lambda$;
2. the Murnaghan–Nakayama-type recursion for a cycle of length $r$ may be summed over all such removable unions of disjoint skew hooks, each contributing the sign $(-1)^{\operatorname{ht}}$.

Both clauses fail; the witness below is $\lambda=(2,2,1,1)$, $\nu=(1,1,1)$, $r=3$.

## Facts & Assumptions

**Given:** The partitions $\lambda=(2,2,1,1)\vdash6$ and $\nu=(1,1,1)\vdash3$, with English Young diagrams $[\lambda]$, $[\nu]$ and the skew diagram $\lambda/\nu$ ([[def-skew-diagram-and-semistandard-skew-tableau]], [[def-partition-young-diagram-and-conjugate-partition]]), and the character $\chi^{(2,2,1,1)}$ of the complex Specht module ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F1] A removable border strip of $\lambda$ is a nonempty set $\xi\subseteq[\lambda]$ that is edge-connected, contains no $2\times2$ block, and whose complement in $[\lambda]$ is again a Young diagram; equivalently it is a skew diagram $\lambda/\nu$ that is connected and $2\times2$-free ([[def-removable-border-strip-and-height]], [[def-skew-diagram-and-semistandard-skew-tableau]]).

[F2] Littlewood–Richardson coefficients: $c^\lambda_{\nu\mu}$ is the number of semistandard tableaux of shape $\lambda/\nu$ with content $\mu$ whose right-to-left, top-to-bottom reading word is a lattice word; rows are weakly increasing, columns strictly increasing, and the content $(x,1^{r-x})$ means $x$ labels $1$ and one label each of $2,\dots,r-x+1$ ([[def-littlewood-richardson-tableau-and-coefficient]], [[def-skew-diagram-and-semistandard-skew-tableau]]).

[F3] Alternating cancellation: for $\lambda/\nu$ a union of $m\ge1$ pairwise disjoint skew hooks with $r$ nodes occupying $c$ columns in total, $c^\lambda_{\nu,(x,1^{r-x})}=\binom{m-1}{c-x}$ for $1\le x\le r$ (zero outside the range), and $\sum_{x=1}^{r}(-1)^{r-x}c^\lambda_{\nu,(x,1^{r-x})}$ equals $(-1)^{r-c}$ if $\lambda/\nu$ is a connected border strip and $0$ otherwise ([[lem-alternating-hook-induction-cancels-disconnected-rim-removals]]).

[F4] Hook lengths: $\lambda=(2,2,1,1)$ has hook lengths $5,4,2,2,1,1$, read row by row as $5,2$; $4,1$; $2$; $1$ ([[def-hook-arm-leg-and-hook-length]]). If no hook length of $\lambda$ equals $r$, then $\chi^\lambda(\sigma)=0$ for every $\sigma\in S_6$ whose cycle type contains a part $r$ ([[cor-no-removable-cycle-length-strip-forces-a-character-zero]]).

## Counterexample

**Proof technique:** direct.

1.1 The cells of $[\lambda]$ are $(1,1),(1,2),(2,1),(2,2),(3,1),(4,1)$, those of $[\nu]$ are $(1,1),(2,1),(3,1)$, and $\nu\subseteq\lambda$; hence $\lambda/\nu=\{(1,2),(2,2),(4,1)\}$ with $r=6-3=3$ nodes, and removing these nodes from $[\lambda]$ leaves $[\nu]$, a Young diagram. The set is the union of the two skew hooks $\{(1,2),(2,2)\}$ (a vertical domino in column $2$) and $\{(4,1)\}$ (a single node), which occupy the $c=2$ columns $1$ and $2$ and are pairwise disjoint, so $m=2$. The two components are not edge-adjacent: the only side-neighbour of $(2,2)$ in column $2$ below it is $(3,2)\notin[\lambda]$, and $(4,1)$ has no side-neighbour in $\lambda/\nu$. Hence $\lambda/\nu$ is disconnected and, by [F1], is not a border strip of $\lambda$, and in particular is not a removable border strip of $\lambda$. [F1, given, algebra]

1.2 The Littlewood–Richardson coefficients $c^{(2,2,1,1)}_{(1,1,1),\mu}$ are $1,1,0$ for $\mu=(1,1,1),(2,1),(3)$: the reading order of the cells is $(1,2),(2,2),(4,1)$; for content $(1,1,1)$ a lattice word with three distinct labels must read $1,2,3$, forcing the entries $1,2,3$ in that order down the cells $(1,2),(2,2),(4,1)$, which respects the strict increase of column $2$ and is the unique such tableau; for content $(2,1)$ the lattice words are $112$ and $121$, and only $121$ has the first two entries strictly increasing, giving the unique tableau $(1,2;1)$; for content $(3)$ the word $111$ puts equal labels $1,1$ in the two cells of column $2$, violating strict increase, so there is none. In the binomial form of [F3] these are $\binom{1}{2-x}$, namely $\binom{1}{1}=1$, $\binom{1}{0}=1$, $\binom{1}{-1}=0$ for $x=1,2,3$. [F2, F3, algebra]

2.1 Therefore $\sum_{x=1}^{3}(-1)^{3-x}c^{(2,2,1,1)}_{(1,1,1),(x,1^{3-x})}=(+1)\cdot1+(-1)\cdot1+(+1)\cdot0=0$, in accordance with the $m\ge2$ case of [F3], even though the coefficients at $x=1$ and $x=2$ are both nonzero; the disconnected set contributes the nonzero terms $1$ and $1$, which cancel in the alternating sum, so it cannot be assigned a single sign $(-1)^{\operatorname{ht}}$ as a recursion summand. [step 1.2, F3, algebra]

2.2 Consistently, the hook lengths of $\lambda$ are $5,4,2,2,1,1$ [F4], none equal to $3$, so $\chi^{(2,2,1,1)}(\sigma)=0$ for every $\sigma\in S_6$ whose cycle type contains a part $3$; there is no removable $3$-strip of $\lambda$ at all, connected or not, so the surviving contribution of the positive alternating sum is also absent from the character recursion. [step 1.1, F4, algebra]

3.1 Step 1.1 exhibits a skew diagram $\lambda/\nu$ that is a removable union of $m=2$ disjoint skew hooks with $3$ nodes but is not edge-connected, refuting clause 1; steps 1.2 and 2.1 show that the individual Littlewood–Richardson coefficients of this disconnected union are nonzero ($1$ and $1$) while their alternating sum vanishes, so summing the recursion over such unions with a definite sign $(-1)^{\operatorname{ht}}$ would be wrong, refuting clause 2; only the connected border strips contribute $(-1)^{r-c}$ to the alternating sum, exactly as in [F3]. [step 1.1, step 1.2, step 2.1, step 2.2, F3, algebra] ∎

## Remarks

- **Where the disconnected set does contribute.** The coefficients $c^{(2,2,1,1)}_{(1,1,1),(1,1,1)}=1$ and $c^{(2,2,1,1)}_{(1,1,1),(2,1)}=1$ are honest Littlewood–Richardson multiplicities of $\chi^{(1,1,1)}\circ\chi^{(1,1,1)}$ and $\chi^{(1,1,1)}\circ\chi^{(2,1)}$ in $\chi^{(2,2,1,1)}$; the false step would be to add them to the Murnaghan–Nakayama recursion with the same sign, not to compute those multiplicities at all.

- **No claim about $\chi^\lambda$ on $3$-regular classes.** Only classes containing a $3$-cycle are disposed of above; $\chi^{(2,2,1,1)}$ is generally nonzero on the other classes of $S_6$, and nothing here says otherwise.

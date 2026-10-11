---
id: ex-murnaghan-nakayama-for-shape-five-four-four
kind: example
title: "Murnaghan–Nakayama values of the character of (5,4,4)"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [thm-murnaghan-nakayama-character-rule,
       def-removable-border-strip-and-height,
       lem-hooks-correspond-to-removable-border-strips,
       cor-no-removable-cycle-length-strip-forces-a-character-zero,
       def-hook-arm-leg-and-hook-length,
       lem-character-value-on-a-full-cycle-is-supported-on-hooks,
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
      locator: "§21.2 Examples (i)–(iii), printed pp. 79–80: χ^(5,4,4) equals −1 on (5,4,3,1), 2 on (7,3,3), and 0 on every class containing a cycle of length 8,9,10,11,12 or 13, computed by the rule of §21.1"
    - title: "William Woods, Representation theory of the symmetric groups (Cambridge Part III essay, 33 pp.)"
      url: "https://billywoods.net/part_iii_essay.pdf"
      locator: "§4.3, printed pp. 24–29: the skew-hook removal form of the rule used in these recomputations"
---

## Example

The partition $\lambda=(5,4,4)$ of $13$ has hook lengths, read row by row,
$7,6,5,4,1$; $5,4,3,2$; $4,3,2,1$, so its removable border strips have sizes
$\{1,2,3,4,5,6,7\}$ and there is no removable strip of size
$8,9,10,11,12$ or $13$
([[lem-hooks-correspond-to-removable-border-strips]]). The
Murnaghan–Nakayama rule ([[thm-murnaghan-nakayama-character-rule]]) gives:

1. $\chi^{(5,4,4)}=-1$ on the class of cycle type $(5,4,3,1)$ of $S_{13}$: the two legal removals of a $5$-strip have signs $+$ and $-$, and the recursion yields $\chi^{(3,3,2)}(4,3,1)-\chi^{(5,3)}(4,3,1)=0-1=-1$;
2. $\chi^{(5,4,4)}=2$ on the class of cycle type $(7,3,3)$: the unique legal removal of a $7$-strip has sign $+$ and yields $\chi^{(3,3)}(3,3)=1-(-1)=2$;
3. $\chi^{(5,4,4)}=0$ on every class whose cycle type contains a part in $\{8,9,10,11,12,13\}$, since $\lambda$ has no removable border strip of those sizes ([[cor-no-removable-cycle-length-strip-forces-a-character-zero]]).

## Facts & Assumptions

**Given:** The partition $\lambda=(5,4,4)\vdash13$ and the character $\chi^{(5,4,4)}$ of the complex Specht module ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F1] Murnaghan–Nakayama rule: $\chi^\lambda(\sigma c)=\sum_{\lambda/\mu}(-1)^{\operatorname{ht}(\lambda/\mu)}\chi^\mu(\sigma)$ for a cycle $c$ on a specified set of points fixed by $\sigma$ (a specified fixed point for length $1$), summed over the removable border strips of $\lambda$ of size the length of $c$; the empty sum is $0$ ([[thm-murnaghan-nakayama-character-rule]]).

[F2] Hook/rim-hook correspondence: the removable border strips of $\lambda$ correspond bijectively to the nodes of $[\lambda]$, the strip of a node having size the hook length of the node; hence the sizes of the removable strips are the hook lengths, and a strip of size $r$ occupying $c$ columns has height $r-c$ ([[lem-hooks-correspond-to-removable-border-strips]], [[def-removable-border-strip-and-height]], [[def-hook-arm-leg-and-hook-length]]).

[F3] Vanishing criterion: if no hook length of $\lambda$ equals $r$, then $\chi^\lambda$ vanishes on every class of $S_{13}$ containing an $r$-cycle ([[cor-no-removable-cycle-length-strip-forces-a-character-zero]]).

[F4] Full-cycle/hook values in the recursive steps: on a $3$-cycle class of $S_3$, $\chi^{(3)}=1$ and $\chi^{(2,1)}=-1$ ([[lem-character-value-on-a-full-cycle-is-supported-on-hooks]]).

## Verification

**Proof technique:** direct.

1.1 For a node in row $i$, column $j$ the hook length is the arm length $5-j$ or $4-j$ or $4-j$ (number of nodes to its right in its row) plus the leg length (number of nodes below it in its column) plus $1$; computing this row by row gives $7,6,5,4,1$; $5,4,3,2$; $4,3,2,1$, whose multiset is $\{7,6,5,5,4,4,4,3,3,2,2,1,1\}$. By [F2] the removable strip sizes are exactly $\{1,2,3,4,5,6,7\}$, so no removable strip has size $8,9,10,11,12$ or $13$, and [F3] gives $\chi^{(5,4,4)}=0$ on every class whose cycle type contains a part in $\{8,9,10,11,12,13\}$. [F2, F3, algebra]

1.2 On the class $(5,4,3,1)$ the part $5$ is stripped first; the hooks of length $5$ sit at the nodes $(1,3)$ and $(2,1)$, with rim strips $\{(1,4),(1,5),(2,4),(3,3),(3,4)\}$ leaving $(3,3,2)$ (three columns, height $2$, sign $+$) and $\{(2,4),(3,1),(3,2),(3,3),(3,4)\}$ leaving $(5,3)$ (four columns, height $1$, sign $-$). The child values are $\chi^{(3,3,2)}(4,3,1)=0$, since the $4$-strips of $(3,3,2)$ lead to $(3,1)$ (height $1$) and $(2,1,1)$ (height $2$) and both $(3,1)$ and $(2,1,1)$ have no $3$-strip, and $\chi^{(5,3)}(4,3,1)=(-1)\cdot\chi^{(2,2)}(3,1)=(-1)\cdot(-1)=1$, the unique $4$-strip of $(5,3)$ leading to $(2,2)$ with height $1$ and the unique $3$-strip of $(2,2)$ leading to a single node with height $1$. Hence $\chi^{(5,4,4)}(5,4,3,1)=+0-1=-1$. [F1, F2, algebra]

1.3 On the class $(7,3,3)$ the unique hook of length $7$ is the one at $(1,1)$, whose rim strip occupies all seven rim nodes from $(1,5)$ to $(3,1)$ and leaves $(3,3)$ with height $2$, so $\chi^{(5,4,4)}(7,3,3)=+\chi^{(3,3)}(3,3)$; stripping a $3$-strip from $(3,3)$ gives the strips to $(3)$ (height $0$) and to $(2,1)$ (height $1$), so $\chi^{(3,3)}(3,3)=\chi^{(3)}(3)-\chi^{(2,1)}(3)=1-(-1)=2$ by [F4]. Hence the value on the class $(7,3,3)$ is $2$. [F1, F2, F4, algebra]

2.1 Steps 1.1, 1.2 and 1.3 give the three displayed values: $\chi^{(5,4,4)}=-1$ on $(5,4,3,1)$ from the two sign-opposite $5$-strip removals, $\chi^{(5,4,4)}=2$ on $(7,3,3)$ from the unique $7$-strip removal and the two-term recursion for $(3,3)$, and $\chi^{(5,4,4)}=0$ on every class containing a cycle of length in $\{8,9,10,11,12,13\}$ because the removable strip sizes are $\{1,\dots,7\}$. This settles all three claims of the statement. [step 1.1, step 1.2, step 1.3, F1, algebra] ∎

## Remarks

- **Consistency with the hook lengths.** The two $5$-strips stripped in step 1.2 correspond to the two hooks of length $5$ of $(5,4,4)$, at the nodes $(1,3)$ and $(2,1)$, and the unique $7$-strip stripped in step 1.3 to the hook of length $7$ at $(1,1)$; the remaining hook lengths $6,4,4,4,3,3,2,2,1,1$ are not used in the first removals; the later $4$, $3$ and $1$ cycles are evaluated in the resulting smaller shapes, and the absent hook lengths $8,\dots,13$ are exactly the forced zeros of step 1.1.

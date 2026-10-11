---
id: thm-murnaghan-nakayama-character-rule
kind: theorem
title: "The Murnaghan–Nakayama character rule"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-removable-border-strip-and-height,
       lem-character-value-on-a-full-cycle-is-supported-on-hooks,
       lem-alternating-hook-induction-cancels-disconnected-rim-removals,
       lem-restriction-to-two-block-subgroup-has-lr-multiplicities,
       def-littlewood-richardson-tableau-and-coefficient,
       def-finite-symmetric-group-and-permutation-notation,
       def-permutation-support-disjoint-cycles-and-cycle-type,
       def-column-antisymmetrizer-polytabloid-and-specht-module,
       def-young-subgroup-tabloid-and-permutation-module,
       lem-character-ring-of-a-direct-product-is-the-tensor-product,
       prop-basic-value-properties-of-a-complex-character]
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
      locator: "§21.1, printed pp. 79–80: Theorem 21.1, the Murnaghan–Nakayama rule χ^λ(ωρ)=Σ (−1)^i χ^{λ minus skew hook}(ω) over skew r-hooks of leg length i, with the empty sum interpreted as zero"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example 5, printed p. 117: the border-strip chain expansion of s_λ, the symmetric-function form of the rule with heights as signs"
    - title: "William Woods, Representation theory of the symmetric groups (Cambridge Part III essay, 33 pp.)"
      url: "https://billywoods.net/part_iii_essay.pdf"
      locator: "§4.3, printed pp. 24–29: hooks, skew hooks and Theorem 4.3.1 (Murnaghan–Nakayama), with the worked S_4 and S_8 instances"
---

## Statement

Let $r\ge1$, $n\ge r$, and let $\rho\in S_n$ be a cycle of length $r$
([[def-finite-symmetric-group-and-permutation-notation]]). Let $\sigma\in S_n$
fix every point moved by $\rho$ (equivalently $\sigma\rho=\rho\sigma$ and the
support of $\sigma$ is disjoint from that of $\rho$), and identify $\sigma$
with its image in $S_{n-r}$ under the unique order-preserving bijection from
the complement of the support of $\rho$ onto $\{0,\dots,n-r-1\}$
([[def-permutation-support-disjoint-cycles-and-cycle-type]]). Then for every
$\lambda\vdash n$,
$$\chi^\lambda(\sigma\rho)=\sum_{\substack{\nu\vdash n-r\\ \lambda/\nu\text{ a removable border strip of size }r}}(-1)^{\operatorname{ht}(\lambda/\nu)}\,\chi^\nu(\sigma),$$
the sum running over the removable border strips of $\lambda$ of size $r$
([[def-removable-border-strip-and-height]]) and being $0$ when there is none.
Applied to the parts of a cycle type in succession, the rule computes
$\chi^\lambda$ on every class of $S_n$. No choice principle is used.

## Facts & Assumptions

**Given:** Integers $r\ge1$ and $n\ge r$, a partition $\lambda\vdash n$, an $r$-cycle $\rho\in S_n$ and a permutation $\sigma\in S_n$ fixing every point moved by $\rho$, with $\chi^\lambda$ the character of the complex Specht module $S^\lambda$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F1] Restriction multiplicities: let $K\le S_n$ be the subgroup preserving the two blocks $B_1=\{0,\dots,n-r-1\}$ and $B_2=\{n-r,\dots,n-1\}$ of [[def-finite-symmetric-group-and-permutation-notation]], a Young subgroup of type $(n-r,r)$ ([[def-young-subgroup-tabloid-and-permutation-module]]); identifying $R(K)$ with $R(S_{n-r})\otimes_{\mathbb Z}R(S_r)$ by external tensor products, one has in $R(K)$ the identity $\chi^\lambda|_K=\sum_{\nu\vdash n-r}\sum_{\mu\vdash r}c^\lambda_{\nu\mu}\,\chi^\nu\boxtimes\chi^\mu$, where $c^\lambda_{\nu\mu}$ is the Littlewood–Richardson coefficient ([[lem-restriction-to-two-block-subgroup-has-lr-multiplicities]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F2] Evaluation of external tensor products: for characters $\chi^\nu$ of $S_{n-r}$ and $\chi^\mu$ of $S_r$ and the corresponding element $(\sigma,\tau)\in K$, $(\chi^\nu\boxtimes\chi^\mu)(\sigma,\tau)=\chi^\nu(\sigma)\chi^\mu(\tau)$, where $\chi^\nu(\sigma)$ and $\chi^\mu(\tau)$ are read through the order-preserving identifications of $B_1$ with $\{0,\dots,n-r-1\}$ and of $B_2$ with $\{0,\dots,r-1\}$ ([[lem-character-ring-of-a-direct-product-is-the-tensor-product]]).

[F3] Full-cycle values: for an $r$-cycle $\rho'\in S_r$ and $\mu\vdash r$, $\chi^\mu(\rho')=(-1)^{r-x}$ when $\mu=(x,1^{r-x})$ for some $1\le x\le r$, and $0$ otherwise ([[lem-character-value-on-a-full-cycle-is-supported-on-hooks]]).

[F4] Alternating cancellation: with the convention $\binom{m-1}{c-x}=0$ outside the range, $\sum_{x=1}^{r}(-1)^{r-x}c^\lambda_{\nu,(x,1^{r-x})}$ equals $(-1)^{r-c}$ if $\lambda/\nu$ is a connected border strip of size $r$ occupying $c$ columns, and $0$ otherwise; for a removable border strip $\operatorname{ht}(\lambda/\nu)=r-c$ ([[lem-alternating-hook-induction-cancels-disconnected-rim-removals]], [[def-removable-border-strip-and-height]]).

[F5] Every complex character is constant on conjugacy classes: $\chi(ghg^{-1})=\chi(h)$ ([[prop-basic-value-properties-of-a-complex-character]]); conjugating an element of $S_n$ by a permutation carries its disjoint cycles to cycles of the same length and carries supports accordingly ([[def-finite-symmetric-group-and-permutation-notation]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F6] For $n=0$ the Specht space of the empty partition is $S^\varnothing=\mathbb C$, so $\chi^\varnothing(1)=1$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

## Proof

**Proof technique:** direct.

1.1 Reduction to standard blocks. Since $\chi^\lambda$ is constant on conjugacy classes [F5], let $\gamma\in S_n$ be the permutation that carries $\operatorname{supp}(\rho)$ order-preservingly onto $B_2=\{n-r,\dots,n-1\}$ and the complement of $\operatorname{supp}(\rho)$ order-preservingly onto $B_1=\{0,\dots,n-r-1\}$; put $\rho':=\gamma\rho\gamma^{-1}$ and $\sigma':=\gamma\sigma\gamma^{-1}$. Then $\rho'$ is an $r$-cycle with $\operatorname{supp}(\rho')=B_2$, the permutation $\sigma'$ lies in $\operatorname{Sym}(B_1)$ and fixes $B_2$ pointwise, the element $\sigma'$ is exactly the image of $\sigma$ under the order-preserving identification with $S_{n-r}=B_1$ used in the statement, and $\chi^\lambda(\sigma\rho)=\chi^\lambda(\gamma\sigma\rho\gamma^{-1})=\chi^\lambda(\sigma'\rho')$. It therefore suffices to prove the displayed identity in the reduced case $\operatorname{supp}(\rho)=B_2$, $\sigma\in\operatorname{Sym}(B_1)$. [given, F5, algebra]

1.2 Reduced-case expansion. Assume now $\operatorname{supp}(\rho)=B_2$ and $\sigma\in\operatorname{Sym}(B_1)$, so that $\sigma\rho$ is the element $(\sigma,\rho)$ of the two-block subgroup $K$. By the restriction identity [F1] and the evaluation rule for external tensor products [F2], $\chi^\lambda(\sigma\rho)=\sum_{\nu\vdash n-r}\sum_{\mu\vdash r}c^\lambda_{\nu\mu}\,\chi^\nu(\sigma)\chi^\mu(\rho)$. [given, F1, F2]

2.1 Substitution and cancellation. In the display of step 1.2 the full-cycle lemma [F3] gives $\chi^\mu(\rho)=(-1)^{r-x}$ when $\mu=(x,1^{r-x})$ and $0$ for every other $\mu$, so $\chi^\lambda(\sigma\rho)=\sum_{\nu\vdash n-r}\chi^\nu(\sigma)\left[\sum_{x=1}^{r}(-1)^{r-x}c^\lambda_{\nu,(x,1^{r-x})}\right]$. By the cancellation lemma [F4] the bracket is $(-1)^{r-c(\lambda/\nu)}=(-1)^{\operatorname{ht}(\lambda/\nu)}$ when $\lambda/\nu$ is a removable border strip of size $r$ occupying $c(\lambda/\nu)$ columns, and is $0$ for every other $\nu$; hence in the reduced case $\chi^\lambda(\sigma\rho)=\sum_{\lambda/\nu}(-1)^{\operatorname{ht}(\lambda/\nu)}\chi^\nu(\sigma)$, the sum over the removable $r$-strips of $\lambda$ and empty (equal to $0$) when there is none. [step 1.2, F3, F4, algebra]

3.1 Undoing the reduction of step 1.1, the identity of step 2.1 holds for arbitrary $r$-cycles $\rho$ and compatible $\sigma$, which is the displayed rule of the statement. For the final assertion, prove by induction on $n$ that the rule computes all values $\chi^\lambda(\sigma)$: for $n=0$ one has $\lambda=\varnothing$, $\sigma=1$ and $\chi^\varnothing(1)=1$ [F6]; for $n\ge1$ let $c$ be a cycle of $\sigma$ of length $r$, so that $\sigma=\sigma'c$ with $\sigma'$ fixing the points moved by $c$ and lying in $S_{n-r}$ under the identification of the statement, and apply the rule just proved: $\chi^\lambda(\sigma)=\sum_{\lambda/\nu}(-1)^{\operatorname{ht}(\lambda/\nu)}\chi^\nu(\sigma')$, where each right-hand value involves the strictly smaller degree $n-r$, so by induction each $\chi^\nu(\sigma')$ is computed by iterating the rule along the remaining cycles of $\sigma$; substituting computes $\chi^\lambda(\sigma)$. [step 1.1, step 2.1, F6, given, algebra] ∎

## Remarks

- **Degenerate cases.** For $r=1$ the rule is the branching recursion $\chi^\lambda(\sigma c)=\sum_{\text{removable nodes }x}\chi^{\lambda\setminus x}(\sigma)$ over the removable nodes of $\lambda$, since the size-$1$ strips are the removable nodes and have height $0$. For $r=n$ one has $\nu=\varnothing$ and the only $\lambda$ with $\lambda/\varnothing$ a removable $n$-strip are the hooks, so the rule reproduces the full-cycle values of [[lem-character-value-on-a-full-cycle-is-supported-on-hooks]], including the value $1$ for $\lambda=(n)$.

- **Height as sign.** The sign $(-1)^{\operatorname{ht}(\lambda/\nu)}$ is the alternating weight of the alternating hook induction of [[lem-alternating-hook-induction-cancels-disconnected-rim-removals]]; the proof above is the evaluation of that virtual identity at the element $\sigma\rho$, using the restriction multiplicities [F1] to convert the induction side into multiplicities and the full-cycle lemma [F3] to reach the skew-hook sum, after which the disconnected unions cancel by [F4].

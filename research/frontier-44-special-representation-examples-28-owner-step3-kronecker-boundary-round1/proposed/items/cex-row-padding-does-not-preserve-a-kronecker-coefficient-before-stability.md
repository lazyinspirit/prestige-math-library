---
id: cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability
kind: counterexample
title: Row padding need not preserve a Kronecker coefficient before stability
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [thm-row-gap-reduction-and-conditional-k-stability,
       def-first-row-padding-of-a-partition,
       prop-kronecker-coefficient-is-a-three-character-inner-product,
       thm-frobenius-characteristic-sends-specht-characters-to-schur-functions,
       lem-complete-homogeneous-expansion-in-power-sums,
       thm-jacobi-trudi-and-dual-jacobi-trudi-identities,
       thm-youngs-rule-for-permutation-modules,
       thm-characters-of-direct-sums-tensor-products-and-duals,
       def-young-subgroup-tabloid-and-permutation-module,
       cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types,
       thm-centralizer-cardinality-from-cycle-type,
       def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Igor Pak and Greta Panova, Bounds on the Kronecker coefficients, arXiv:1406.2988v2 (2014)"
      url: "https://arxiv.org/pdf/1406.2988"
      locator: "\u00a74.1-4.2, printed pp. 7-9: Theorem 4.1 with condition (*), the Reduction Lemma 4.3, and Example 4.4 (lambda = mu = (2,2), nu = (3,1))"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (complete lecture notes)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "Chapters 3-4: the tabloid and permutation modules, Young's rule, and the S_3 character table used for the S_4 and S_5 computations"
---

## Statement refuted

**Refuted claim:** adding $t^k$ to the first $k$ rows of the first two
arguments and $tk$ to the first part of the third preserves the Kronecker
coefficient for every $t\ge0$ as soon as the three first parts are ordered
$\lambda_1+t\le\mu_1+t\le\nu_1+tk$
([[thm-row-gap-reduction-and-conditional-k-stability]]).

The witness is $\lambda=\mu=(2,2)$, $\nu=(3,1)$, $k=1$ ($n=4$, $s=n-\nu_1=1$):
$$g\bigl((2,2),(2,2),(3,1)\bigr)=0,\qquad g\bigl((2+t,2),(2+t,2),(3+t,1)\bigr)=1\ \text{ for every }t\ge1 .$$
Thus adding $(t)$ to the first rows does not preserve the coefficient from
$t=0$ on: the row-separation hypothesis of the theorem fails at $t=0$, since
$\min\{\lambda_1,\mu_1\}=2<3=\max\{\lambda_2,\mu_2\}+(n-\nu_1)$. Eventual
constancy is not immediacy.

## Facts & Assumptions

**Given:** The partitions $\lambda=\mu=(2,2)$ and $\nu=(3,1)$ of $n=4$, with $k=1$ and $s=1$; the shifted triples $\lambda+(t),\mu+(t),\nu+(t)$ of $n+t$ ([[def-first-row-padding-of-a-partition]]); the conjugacy classes of $S_4$ and $S_5$ with sizes $1,6,3,8,6$ on $(1^4),(2,1^2),(2^2),(3,1),(4)$ and $1,10,15,20,20,30,24$ on $(1^5),(2,1^3),(2^2,1),(3,1^2),(3,2),(4,1),(5)$.

[F1] For $\rho,\sigma,\tau\vdash m$, $g(\rho,\sigma,\tau)=\frac1{m!}\sum_{\upsilon\in S_m}\chi^\rho(\upsilon)\chi^\sigma(\upsilon)\chi^\tau(\upsilon)$ ([[prop-kronecker-coefficient-is-a-three-character-inner-product]]).

[F2] Cycle type indexes the conjugacy class, and the class of cycle type $\upsilon$ has size $m!/z_\upsilon$ with $z_\upsilon=\prod_i i^{m_i(\upsilon)}m_i(\upsilon)!$ ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]], [[thm-centralizer-cardinality-from-cycle-type]]).

[F3] $M^\rho$ is the permutation module on the $\rho$-tabloids; its character is $\chi_{M^\rho}(\upsilon)=\#\{\rho\text{-tabloids fixed by }\upsilon\}$, and Young's rule $M^\rho=\bigoplus_\lambda K_{\lambda\rho}S^\lambda$ gives the irreducible multiplicities ([[def-young-subgroup-tabloid-and-permutation-module]], [[thm-youngs-rule-for-permutation-modules]], [[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F4] Row-gap theorem, part (i) ([[thm-row-gap-reduction-and-conditional-k-stability]]).



## Proof

**Proof technique:** direct.

1.1 ($S_4$ characters.) For $\rho=(3,1)$ the tabloids are the ordered $(3,1)$-set pairs of $[4]$, equivalently the $3$-subsets, and a $3$-subset is fixed by $\upsilon$ exactly when its complementary point is fixed; hence $\chi_{M^{(3,1)}}=(4,2,0,1,0)$ on the five classes in the order of the Given. Subtracting the trivial character and using [F3] gives $\chi^{(3,1)}=(3,1,-1,0,-1)$, whose norm $\frac1{24}[9+6+3+0+6]=1$ confirms it is the standard character. For $\rho=(2,2)$ the tabloids are the ordered pairs $(A,A^c)$ of $2$-subsets, so $\chi_{M^{(2,2)}}(\upsilon)=\#\{A:|A|=2,\ \upsilon A=A\}$, giving $(6,2,2,0,0)$; by [F3] $\chi^{(2,2)}=\chi_{M^{(2,2)}}-\chi^{(4)}-\chi^{(3,1)}=(2,0,2,-1,0)$, with norm $\frac1{24}[4+0+12+8+0]=1$. [F2, F3, algebra]

1.2 ($S_5$ characters.) The tabloids of shape $(3,2)$ are the $3$-subsets of $[5]$, and a $3$-subset is invariant precisely when it is a union of cycles; counting over the seven classes gives $\chi_{M^{(3,2)}}=(10,4,2,1,1,0,0)$. The tabloids of shape $(4,1)$ are the $4$-subsets, whose complements are points, so $\chi_{M^{(4,1)}}(\upsilon)=\#\mathrm{fix}(\upsilon)=(5,3,1,2,0,1,0)$ and $\chi^{(4,1)}=(4,2,0,1,-1,0,-1)$. Subtracting the two characters already found from $\chi_{M^{(3,2)}}$ by [F3] gives $\chi^{(3,2)}=(10,4,2,1,1,0,0)-(1,1,1,1,1,1,1)-(4,2,0,1,-1,0,-1)=(5,1,1,-1,1,-1,0)$, of norm $\frac1{120}[25+10+15+20+20+30+0]=1$. [F2, F3, algebra]

2.1 ($t=0$.) Applying [F1] with $m=4$ and the class sizes of [F2] gives $g((2,2),(2,2),(3,1))=\frac1{24}\bigl(1\cdot2^2\cdot3+6\cdot0^2\cdot1+3\cdot2^2\cdot(-1)+8\cdot(-1)^2\cdot0+6\cdot0^2\cdot(-1)\bigr)=\frac{12-12}{24}=0$. [F1, F2, step 1.1, algebra]

2.2 ($t=1$.) Applying [F1] with $m=5$ and the class sizes of [F2] gives $g((3,2),(3,2),(4,1))=\frac1{120}\bigl(1\cdot5^2\cdot4+10\cdot1^2\cdot2+15\cdot1^2\cdot0+20\cdot1^2\cdot1+20\cdot1^2\cdot(-1)+30\cdot(-1)^2\cdot0+24\cdot0^2\cdot(-1)\bigr)=\frac{100+20+20-20}{120}=\frac{120}{120}=1$. [F1, F2, step 1.2, algebra]

3.1 (All $t\ge1$.) The triple $((3,2),(3,2),(4,1))$ satisfies the hypotheses of [F4] with $k=1$: $3=\lambda_1\le\mu_1=3\le\nu_1=4$ and $\min\{3,3\}=3\ge\max\{2,2\}+(5-4)=3$. Hence $g((3+u,2),(3+u,2),(4+u,1))=g((3,2),(3,2),(4,1))=1$ for every $u\ge0$, and substituting $u=t-1$ gives $g((2+t,2),(2+t,2),(3+t,1))=1$ for every $t\ge1$. [F4, step 2.2]

4.1 Consequently $t\mapsto g((2+t,2),(2+t,2),(3+t,1))$ takes the value $0$ at $t=0$ and the value $1$ for every $t\ge1$: the padded family is not constant from $t=0$ on, and the separation hypothesis of [F4] is exactly what fails at $t=0$. [step 2.1, 3.1] ∎

## Remarks

- The example is Pak-Panova's Example 4.4, recomputed here from the character tables of $S_4$ and $S_5$ rather than cited. Together with [[thm-row-gap-reduction-and-conditional-k-stability]] it shows that eventual constancy is not immediate constancy: the padded coefficient can jump at the first value of $t$ for which the rows $k$ and $k+1$ are separated.

- The $S_4$ value $g((2,2),(2,2),(3,1))=0$ also follows from $S^{(2,2)}\otimes S^{(2,2)}=\mathrm{Sym}^2\oplus\Lambda^2=S^{(4)}\oplus S^{(2,2)}\oplus S^{(1^4)}$, in which $S^{(3,1)}$ does not occur; the character computation above is recorded because it needs no separate decomposition input.

- The all-$t$ conclusion in step 3.1 uses the proved row-gap theorem at the separated $t=1$ triple; its proof supplies the single-cut Littlewood–Richardson/Jacobi–Trudi argument locally. The $t=0$ and $t=1$ values remain independent finite character computations.

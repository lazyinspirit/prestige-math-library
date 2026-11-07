---
id: lem-idelic-character-extension-criterion-for-number-fields
kind: lemma
title: Idèlic character extension by local power obstruction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-idele-class-group-of-a-global-field
  - lem-global-idele-class-norm-one-is-compact
  - lem-s-idele-carrier-and-s-unit-quotient-are-locally-compact
  - lem-continuous-characters-separate-points-of-an-lca-group
  - thm-injective-modules-over-a-pid-are-exactly-divisible
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-local-valuation-ring-compact-open
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for idèle-class compactness, local unit compactness and character separation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Song Wang, An Effective Version of the Grunwald–Wang Theorem
      url: https://thesis.caltech.edu/6803/1/Wang_s_2002.pdf
      locator: Chapter 1 §§1.3–1.4, printed pp.20–34; the compact exponent-quotient extension argument is supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a number field, $S$ a finite set of places, and $n\ge1$. For each $v\in S$, let $\chi_v:K_v^\times\to\mu_n$ be a continuous character. Put
$$P(n,S)=\{a\in K^\times:a\in K_v^{\times n}\text{ for every finite }v\notin S\}.$$
There is a continuous character $\chi:C_K\to\mu_n$ whose restriction to every embedded local factor is $\chi_v$ if and only if
$$\prod_{v\in S}\chi_v(a)=1\qquad\text{for every }a\in P(n,S).$$
The statement includes $S=\varnothing$ and $n=1$; it does not by itself classify $P(n,S)$.

## Facts & Assumptions

**Given:** The number field, finite set, exponent, local characters and explicit choices in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The idèle-class group is the quotient of the restricted product by the diagonal subgroup. [[def-idele-class-group-of-a-global-field]]

[F2] Norm-one idèle classes form a compact group and the full idèle-class group is locally compact Hausdorff. [[lem-global-idele-class-norm-one-is-compact]] [[lem-s-idele-carrier-and-s-unit-quotient-are-locally-compact]]

[F3] Continuous characters separate points in every locally compact Hausdorff abelian group. [[lem-continuous-characters-separate-points-of-an-lca-group]]

[F4] Divisible abelian groups, including $\mathbb Q/\mathbb Z$, are injective. [[thm-injective-modules-over-a-pid-are-exactly-divisible]]

[F5] A coprime monic residue factor of a polynomial lifts over a complete valued field; finite-place unit groups are compact. [[lem-hensel-factor-lifting-over-a-complete-valued-field]] [[thm-local-valuation-ring-compact-open]]

## Proof

**Proof technique:** identify the exact kernel of the finite local image inside the compact global exponent quotient.

1.1 The norm map on $C_K$ has a continuous section given by a positive scalar at one archimedean place, so $C_K\cong C_K^1\times\mathbb R_{>0}$. By [F2] the first factor is compact and the second is divisible. Thus $B=C_K/nC_K$ is a compact Hausdorff group killed by $n$: its first-factor $n$-image is compact and closed. By [F3] its continuous characters separate points and have image among the finite $n$th roots of unity. For each finite set of nonzero elements of $B$, intersect their detecting character kernels to obtain an open subgroup meeting that set trivially. [F2, F3, given, choose, algebra]

1.2 For a finite completion $K_v$, the quotient $K_v^\times/K_v^{\times n}$ is finite. Indeed its valuation quotient is finite and its unit group is compact by [F5]. The $n$th power subgroup contains an open unit neighborhood: if $z=1+n^2u$ with $u$ in the maximal ideal, the polynomial $f(Y)=((1+nY)^n-z)/n^2$ has integral coefficients, reduction with simple root $Y=0$, and a root by [F5]: its reduction has the coprime monic factor $Y$, which lifts to a monic linear factor; then $z=(1+nY)^n$. Thus the unit quotient is a compact discrete group and is finite. At real places the quotient is finite and at complex places it is trivial. Consequently $D=\prod_{v\in S}K_v^\times/K_v^{\times n}$ is finite, and the coordinate idèles induce a homomorphism $D\to B$ with finite image $Q$. [F5, given, construct, algebra]

2.1 Write $\alpha((x_v))=\prod_{v\in S}\chi_v(x_v)$. We identify its obstruction to descending to $Q$. If a tuple has trivial image in $B$, its idèle equals a diagonal $a\in K^\times$ times an $n$th power idèle. Outside $S$ this says $a^{-1}\in K_v^{\times n}$, so $a\in P(n,S)$; on $S$ the tuple has the same character value as $a$. Conversely, for any $a\in P(n,S)$ choose a local $n$th root of $a^{-1}$ outside $S$ and put $1$ on $S$. The choices form an idèle because $a$ is a unit outside finitely many places and every root of a unit is a unit. Its $n$th power times the diagonal $a$ is the coordinate idèle with entries $a$ on $S$ and $1$ elsewhere. Hence $\alpha$ kills the kernel $D\to Q$ exactly under the displayed condition. [A1, F1, step 1.2, given, choose, construct, algebra]

3.1 Necessity follows by evaluating any global character on the diagonal idèle in step 2.1. Conversely the condition gives a character $Q\to\mu_n$. By step 1.1 choose an open subgroup $N\le B$ disjoint from $Q\setminus\{1\}$; then $Q$ injects into the finite group $B/N$. Regard the character as a map into $\mathbb Q/\mathbb Z$ and extend it from $Q$ to $B/N$ by [F4]. Since $B/N$ is killed by $n$, the extension lands in its $n$-torsion, identified with $\mu_n$. Pullback along $C_K\to B\to B/N$ gives a continuous global character with the required local restrictions. The trivial group cases are included. [F4, step 1.1, step 1.2, step 2.1, construct, algebra] ∎

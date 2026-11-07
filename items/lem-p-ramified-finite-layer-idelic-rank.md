---
id: lem-p-ramified-finite-layer-idelic-rank
kind: lemma
title: Finite-layer p-ramified idelic rank and Leopoldt defect
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-global-class-field-existence-number-field
  - thm-global-artin-reciprocity-and-norm-index
  - thm-local-artin-reciprocity-and-norm-index
  - thm-dirichlet-unit-theorem
  - thm-finiteness-of-the-number-field-class-group
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
sources:
  references:
    - title: Romyar Sharifi, Iwasawa Theory
      url: https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html
      locator: Sections 3.1 and 3.3, especially Theorem 3.3.3; the finite idelic rank calculation is supplied locally below.
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $L$ be a number field and $p$ an odd prime. Let $M_L/L$ be the maximal abelian pro-$p$ extension unramified at every finite prime not above $p$, and put $X_L=\operatorname{Gal}(M_L/L)$. Define $\delta(L)$ as the $\mathbb Q_p$-dimension of the kernel of the diagonal map from $\mathcal O_L^\times\otimes_\mathbb Z\mathbb Z_p$ to the product of pro-$p$ completions of $\mathcal O_{L_v}^\times$ over $v\mid p$, after tensoring with $\mathbb Q_p$. Then $X_L$ is finitely generated over $\mathbb Z_p$ and
$$\operatorname{rank}_{\mathbb Z_p}X_L=r_2(L)+1+\delta(L).$$

## Statement references

[[thm-global-class-field-existence-number-field]]

[[thm-global-artin-reciprocity-and-norm-index]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-dirichlet-unit-theorem]]

[[thm-finiteness-of-the-number-field-class-group]]

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, the number field $L$, and odd prime $p$ in the Statement.

[F1] Finite abelian extensions correspond to open finite-index idelic norm subgroups, and finite global Artin maps identify their norm quotients with their Galois groups. [[thm-global-class-field-existence-number-field]] [[thm-global-artin-reciprocity-and-norm-index]]

[F2] Local reciprocity identifies finite local norm quotients with finite abelian Galois groups. [[thm-local-artin-reciprocity-and-norm-index]]

[F3] The global unit group is finitely generated with rank $r_1+r_2-1$, and the ideal class group is finite. [[thm-dirichlet-unit-theorem]] [[thm-finiteness-of-the-number-field-class-group]]

[A1] The three choice assumptions are those in the class-field and finite-unit inputs. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** finite-level Artin reciprocity, the $S$-unit valuation sequence, and local logarithms.

1.1 Let $S$ be the finite set of primes of $L$ above $p$, and put $s=|S|$. The valuation map on the $S$-unit group fits into $1\to\mathcal O_L^\times\to\mathcal O_{L,S}^\times\to\mathbb Z^S\to\operatorname{Cl}(L)$. Its final image is finite by [F3], and the image of the valuation map has finite index: for each prime in $S$, a positive power is principal because its class has finite order. Thus $\mathcal O_{L,S}^\times$ is finitely generated of rank $r_1+r_2+s-1$. The same finite-index conclusion holds after tensoring with $\mathbb Z_p$. [F3, A1, given, construct, algebra]

2.1 At a $p$-adic completion $L_v$, choose a uniformizer $\varpi_v$. The valuation decomposition is $L_v^\times=\varpi_v^{\mathbb Z}\times\mathcal O_{L_v}^\times$. For $h$ larger than the ramification index divided by $p-1$, the power series $\log(1+x)=\sum_{j\ge1}(-1)^{j+1}x^j/j$ and $\exp(x)=\sum_{j\ge0}x^j/j!$ converge on $\varpi_v^h\mathcal O_{L_v}$ and are mutually inverse there: the valuations of the terms tend to infinity, and the formal inverse identities may be evaluated coefficientwise in that complete neighborhood. This additive ideal is a full $\mathbb Z_p$-lattice of rank $[L_v:\mathbb Q_p]$; the principal-unit neighborhood has finite index in $\mathcal O_{L_v}^\times$ because its residue quotient is finite. Consequently the pro-$p$ completion of $L_v^\times$ is finitely generated of rank $[L_v:\mathbb Q_p]+1$, while its unit subgroup has rank $[L_v:\mathbb Q_p]$. Summing over $v\mid p$ gives total local rank $[L:\mathbb Q]+s$. Use the finite set from step 1.1. [A1, step 1.1, construct, algebra]

3.1 Let $P=\prod_{v\mid p}\widehat{L_v^\times}^{(p)}$ and let $H$ be the closed image of the $p$-completed $S$-unit group. Its valuation image has finite index in $\mathbb Z_p^S$ by step 1.1. Its zero-valuation part agrees up to finite index with the image of the ordinary units: a vector with all $p$-adic valuations zero is, after clearing one fixed finite-index denominator, represented by an ordinary unit. By the definition of $\delta(L)$ and [F3], that ordinary-unit image has rank $r_1+r_2-1-\delta(L)$. Therefore $\operatorname{rank}_{\mathbb Z_p}H=s+r_1+r_2-1-\delta(L)$. Use the local valuation decomposition of step 2.1. [F3, step 1.1, step 2.1, construct, algebra]

4.1 Apply finite global Artin reciprocity and class-field existence [F1], with the local identification [F2], to the ideles whose components outside $S$ are units and whose archimedean components are unrestricted. For odd $p$ the real sign groups have no nontrivial $p$-quotient. The valuation map outside $S$ identifies the quotient by the local $S$-components with the finite $S$-ideal class group, a quotient of $\operatorname{Cl}(L)$. Passing to compatible finite abelian $p$-quotients gives an exact sequence $P/H\to X_L\to C\to0$ with $C$ finite: the kernel of the local-component map is exactly the closure of the diagonal $S$-units, since equality of two such ideles in the idelic class group is witnessed by a single element of $L^\times$ whose valuations outside $S$ vanish. Conversely every open finite-index quotient with these local conditions is realized by [F1], and every finite $p$-ramified abelian extension gives such a quotient by [F2]. Thus no infinite class-field statement is assumed in place of the finite compatible quotients. The map $P\to X_L$ is continuous with compact image, and the finite quotient makes $X_L$ finitely generated over $\mathbb Z_p$. Retain the subgroup $H$ from step 3.1. [F1, F2, F3, A1, step 3.1, construct, algebra]

5.1 Finite kernels and cokernels do not change $\mathbb Z_p$-rank. From steps 2.1–4.1, $\operatorname{rank}_{\mathbb Z_p}X_L=([L:\mathbb Q]+s)-(s+r_1+r_2-1-\delta(L))=r_2+1+\delta(L)$, since $[L:\mathbb Q]=r_1+2r_2$. The empty unit basis and zero defect are included. This proves finite generation and the displayed rank formula using the local class-field construction in step 4.1. [step 2.1, step 4.1, algebra, discharge-construct] ∎

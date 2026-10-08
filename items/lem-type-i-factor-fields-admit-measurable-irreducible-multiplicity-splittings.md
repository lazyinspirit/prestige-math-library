---
id: lem-type-i-factor-fields-admit-measurable-irreducible-multiplicity-splittings
kind: lemma
title: Measurable splitting of a field of type I factors into irreducible representations with multiplicity
deps:
- lem-separable-type-i-factors-are-multiples-of-irreducible-representations
- lem-multiplicity-of-a-type-i-factor-representation-is-well-defined
- lem-measurable-von-neumann-algebra-fields-have-measurable-commutants-and-centers
- lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections
- lem-measurable-gram-schmidt-and-constant-field-trivializations
- def-measurable-field-of-von-neumann-algebras
- def-axiom-of-choice
- lem-borel-relations-admit-conull-borel-uniformizations
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)
    url: https://arxiv.org/pdf/1912.07262
    locator: 'Chapter 6, §6.D: Theorem 6.D.4 and its proof (measurable selection of abelian projections via the von Neumann selection theorem), printed pp. 199-201; §6.D: Theorem 6.D.7 (canonical decomposition into irreducible representations for type I groups), printed pp. 201-202'
  - title: 'Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)'
    url: https://bruceblackadar.com/Mathematics/Cycr.pdf
    locator: 'Part III, III.1.5.1-III.1.5.5, printed pp. 247-248 (PDF pp. 255-256): spatial type-I factor and matrix-unit orientation; the measurable selection is proved by the new local supplier, not by this passage.'
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
axiom_use: AC is inherited from the spatial, Gram–Schmidt and conull uniformization suppliers; the extra selections are countably many Borel versions, near-supremum projections and partial isometries. Every selection is conull rather than everywhere on the original base. Zero fibres are excluded by hypothesis; zero residuals are handled by q_n=u_n=0. Finite multiplicity terminates, while infinite multiplicity uses norm-convergent square-summable series. The empty or null base makes all claims vacuous.
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $(M_x)_{x\in X}$ be a measurable field of type I factors on a measurable Hilbert field $(H_x,e_n(x))$ with all fibres separable and nonzero, over a sigma-finite standard-Borel measure space, and let $(\pi_x)$ be a measurable field of strongly continuous unitary representations of a second-countable group $G$ with $\pi_x(G)''=M_x$ for almost every $x$. Then, after deleting a null set, there exist (1) a measurable field of nonzero separable Hilbert spaces $(K_x)$; (2) a measurable function $m:X\to\{1,2,\dots,\infty\}$, the **multiplicity function**; (3) a measurable field $(\sigma_x)$ of irreducible strongly continuous unitary representations of $G$ on $K_x$; and (4) a measurable field of unitaries $V_x:H_x\to K_x^{\oplus m(x)}$ such that $$V_x\pi_x(g)V_x^{-1}=\sigma_x(g)^{\oplus m(x)}\qquad\text{for every }g\in G\text{ and almost every }x.$$ Moreover the pair $(\text{unitary class of }\sigma_x,\ m(x))$ is uniquely determined by $(\pi_x)$ up to null sets. In the single-fibre case this is exactly the statement that a separable type I factor representation is a multiple of an irreducible with well-defined multiplicity.

## Facts & Assumptions

[F1] Measurable algebra fields admit countable WOT-dense measurable unit-ball sections of their commutants; measurable Gram–Schmidt gives constant-space coordinates and measurable closed subfields ([[lem-measurable-von-neumann-algebra-fields-have-measurable-commutants-and-centers]], [[lem-measurable-gram-schmidt-and-constant-field-trivializations]], [[def-measurable-field-of-von-neumann-algebras]]).

[F2] A Borel relation with nonempty sections on a sigma-finite standard-Borel measured base admits a Borel selector after removing a Borel null set; bounded sectionwise suprema have Borel versions there ([[lem-borel-relations-admit-conull-borel-uniformizations]]).

[F3] For a nonzero separable type-I factor $M$, its commutant $N$ is type I; every nonzero residual projection in $N$ contains a minimal projection, all minimal projections are equivalent, and a minimal $q\in N$ gives an irreducible carrier $qH$ ([[lem-separable-type-i-factors-are-multiples-of-irreducible-representations]]). Amplifications have uniquely determined irreducible class and multiplicity ([[lem-multiplicity-of-a-type-i-factor-representation-is-well-defined]]). AC is [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

**Given:** The hypotheses and notation of the Statement, including AC.

1.1 Discard the initial Borel null exceptions and trivialize on the countably many positive-dimension strata by [F1]. Put $N_x=M_x'$ and choose WOT-dense sections $a_j(x)$ of its unit ball. In constant-space coordinates use a complete orthonormal frame $(f_k(x))_{k\in\mathbb N}$, padded with zeros on finite-dimensional fibres, and define $\varphi_x(T)=\sum_{k\in\mathbb N}2^{-(k+1)}\langle Tf_k(x),f_k(x)\rangle$. On positive operators this is faithful, since zero diagonal coefficients force $T^{1/2}f_k=0$ on a basis; it is normal, since bounded increasing positive sequences have increasing coefficient sums and their limits commute with the summable series. Its value on $I$ is positive and at most one. On the unit ball it is WOT-continuous by uniform tail bounds. Operator products are jointly Borel in WOT-ball coordinates: each coefficient is the limit of finite basis-coordinate sums; adjoints are Borel. [F1, F3, given, construct]

2.1 The relation defining nonzero minimal $q\in N_x$ is Borel: impose $q=q^*=q^2$, $q\ne0$, commutation with the countable generators of $M_x$, and for every $j$ impose $q a_j(x)q=\varphi_x(q a_j(x)q)q/\varphi_x(q)$. These are countably many coefficient equations using the Borel operations of step 1.1. For fixed $q$, compression is WOT-continuous and the scalar functional is WOT-continuous on bounded sets; density of the $a_j$ therefore makes these equations equivalent to $qN_xq=\mathbb Cq$. They characterize minimality. For any Borel residual projection $r(x)\in N_x$, add $q\le r(x)$. If $r\ne0$, [F3] makes its section nonempty. [F1, F3, step 1.1, algebra]

3.1 Set $r_0=I$. Inductively, on $\{r_{n-1}\ne0\}$ let $s_n(x)$ be the supremum of $\varphi_x(q)$ over the minimal projections in step 2.1 below $r_{n-1}$. The functional is bounded real on projections, so [F2] gives a Borel version of $s_n$ on a conull Borel subset; there $s_n>0$ by faithfulness. Apply [F2] to the nonempty Borel relation $\varphi_x(q)>s_n(x)/2$ to select $q_n$, set $q_n=0$ on the zero-residual part, and put $r_n=r_{n-1}-q_n$. Repeat on retained bases and remove the countable union of Borel null exceptions once at the end. At each retained $x$, the $q_n$ are orthogonal. If the strong residual limit $r_\infty$ were nonzero, [F3] would supply a minimal $q\le r_\infty$ with $c=\varphi_x(q)>0$. Then $s_n\ge c$ at every step, hence $\varphi_x(q_n)>c/2$ for every $n$, contradicting $\sum_n\varphi_x(q_n)\le\varphi_x(I)\le1$. Thus $\sum_n q_n=I$ strongly. [F2, F3, step 1.1, step 2.1, construct]

4.1 Let $K_x=q_1(x)H_x$, with fundamental sections $q_1f_k$; [F1] makes this a measurable nonzero subfield. Let $m(x)$ count the nonzero $q_n$. Because construction stops exactly when the residual is zero, $\{m\ge n\}=\{q_n\ne0\}$ is Borel. On each such set the solutions $u_n\in N_x$ to $u_n^*u_n=q_n$, $u_nu_n^*=q_1$ form a nonempty Borel relation in the operator unit ball by [F3] and step 1.1. Use [F2] to select them conull, put $u_1=q_1$ and $u_n=0$ where $q_n=0$, and remove the countably many new null exceptions. [F1, F2, F3, step 3.1, construct]

5.1 Define $V_x\xi=(u_n(x)\xi)_{n\le m(x)}$ and $\sigma_x(g)=\pi_x(g)|K_x$. Then $\sum_n\|u_n\xi\|^2=\sum_n\|q_n\xi\|^2=\|\xi\|^2$, and $u_i u_j^*=\delta_{ij}q_1$, so the inverse is the norm-convergent series $V_x^{-1}(\eta_n)=\sum_nu_n^*\eta_n$. This proves unitarity including the infinite case. Fundamental coefficients and pointwise norm limits make both fields measurable. Each $u_n$ belongs to the actual commutant $\pi_x(G)'$, so the amplification identity holds for every $g$ at each retained $x$. Restriction preserves strong continuity, and [F3] makes $\sigma_x$ irreducible. Its fixed-g matrix coefficients against fundamental sections are Borel, so it is a measurable representation field. Fibrewise application of the uniqueness clause in [F3] gives the final invariant pair. [F1, F3, step 3.1, step 4.1, algebra] ∎

## Boundary and source qualifications

AC is inherited from the spatial, Gram–Schmidt and conull uniformization suppliers; the extra selections are countably many Borel versions, near-supremum projections and partial isometries. Every selection is conull rather than everywhere on the original base. Zero fibres are excluded by hypothesis; zero residuals are handled by q_n=u_n=0. Finite multiplicity terminates, while infinite multiplicity uses norm-convergent square-summable series. The empty or null base makes all claims vacuous. No source citation replaces a local supplier proof. The referenced complete Bekka–de la Harpe PDF, pp. 195–202, and Blackadar PDF pp. 255–262 were consulted for the central/type-I architecture; Blackadar explicitly outlines the direct-integral theory and refers technical details elsewhere. The measurable and spatial steps here use the proved local suppliers named above.

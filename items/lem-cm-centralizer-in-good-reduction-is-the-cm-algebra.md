---
id: lem-cm-centralizer-in-good-reduction-is-the-cm-algebra
kind: lemma
title: The CM centralizer in good reduction and its integral Frobenius
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-cm-algebra-and-cm-type
- def-ring-of-integers-of-a-number-field
- lem-good-reduction-specialization-injective-on-abelian-variety-endomorphisms
- thm-abelian-homomorphism-groups-finite-free-and-tate-faithful
- lem-arith-field-prime-to-characteristic-torsion-and-tate-module
- thm-primitive-element-theorem-for-finite-separable-extensions
- thm-chinese-remainder-theorem-for-comaximal-ideals
- thm-nonaffine-abelian-multiplication-finite-faithfully-flat
- lem-arith-prime-to-characteristic-multiplication-etale
- lem-nonaffine-fppf-descent-of-scheme-morphisms
- lem-q-power-frobenius-degree-on-abelian-variety
justified_by: []
sources:
  references:
  - title: J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)
    url: https://arxiv.org/pdf/0705.3446
    locator: Proposition1.4 and Corollaries1.5–1.6, printed6; their good-reduction application at the start of Theorem2.1, printed16. The required Tate scalar faithfulness and endomorphism integrality are supplied by local proofs here.
---

## Statement

Assume the Axiom of Choice. Let $k$ be a number field, let $P$ be a finite prime with residue field $\kappa$ of characteristic $p$ and cardinality $q$, and let $\mathcal A/\mathcal O_{k,P}$ be an abelian scheme of dimension $g\ge1$ with generic fibre $A$ and special fibre $A_0$. Let $E$ be a CM algebra of degree $2g$ with a unital injection $E\hookrightarrow\operatorname{End}_k^0(A)$, and assume $E\cap\operatorname{End}_{\bar k}(A_{\bar k})=O_E$.

Every element of $O_E$ is in fact defined over $k$ and extends to the model. Specialization identifies $E$ with a subalgebra of $\operatorname{End}_{\bar\kappa}^0(A_{0,\bar\kappa})$. The centralizer of this subalgebra is exactly $E$, and its integral centralizer is exactly $O_E$:
$$Z_{\operatorname{End}_{\bar\kappa}^0(A_{0,\bar\kappa})}(E)=E,\qquad Z_{\operatorname{End}_{\bar\kappa}(A_{0,\bar\kappa})}(O_E)=O_E.$$
Consequently the $q$-power Frobenius of $A_0/\kappa$ is the specialization of a unique element $\pi\in O_E$. No unramifiedness of $p$ in $E$ or of $k$ at $P$ is needed for these conclusions.

## Facts & Assumptions

**Given:** AC, the number field, model, full-degree CM algebra, geometric integer-order condition and residue data in the Statement.

[A1] AC is explicit and implies DC and Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] A CM algebra is a finite product of number fields. Their integer rings consist precisely of the elements integral over $\mathbb Z$ ([[def-cm-algebra-and-cm-type]], [[def-ring-of-integers-of-a-number-field]]).

[F2] Every generic endomorphism over $k$ extends uniquely to the abelian-scheme model, and specialization injects the integral and rational endomorphism rings ([[lem-good-reduction-specialization-injective-on-abelian-variety-endomorphisms]]).

[F3] Abelian homomorphism groups are finite free; the scalar-extension Tate action is injective over $\mathbb Q_\ell$; and every actual endomorphism is integral over $\mathbb Z$. The rational Tate space has dimension twice the variety dimension ([[thm-abelian-homomorphism-groups-finite-free-and-tate-faithful]], [[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]).

[F4] A finite separable field extension is simple. Pairwise comaximal ideals give the Chinese remainder product decomposition ([[thm-primitive-element-theorem-for-finite-separable-extensions]], [[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[F5] Integer multiplication is finite faithfully flat and has finite etale kernel in characteristic zero. Morphisms with equal pullbacks descend uniquely along an fppf cover ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]], [[lem-arith-prime-to-characteristic-multiplication-etale]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]]).

[F6] The $q$-power Frobenius of an abelian variety over $\mathbb F_q$ is an actual algebraic group endomorphism ([[lem-q-power-frobenius-degree-on-abelian-variety]]).

## Proof

1.1 Let $a\in O_E$. Choose $d\ge1$ such that $h=da$ is an actual $k$-endomorphism. By the geometric integer-order hypothesis, $a$ is an actual geometric endomorphism, so $h$ kills $A[d]$ after extending to $\bar k$. Because characteristic is zero, this is a finite etale group scheme by [F5]; hence its vanishing on geometric points is scheme-theoretic and descends to $k$. The kernel pair of $[d]$ is $A\times A[d]$, and $h$ has equal pullbacks along it. By [F5], $h$ descends through $[d]$ to an actual $k$-homomorphism. Over $\bar k$ it agrees with $a$, since both have numerator $h$ and $[d]$ is faithfully flat. Thus every element of $O_E$ is defined over $k$. By [F2], these elements extend and specialize preserving their ring operations, and the resulting action of $E$ on $A_0$ is injective. [A1, F2, F5, given, choose, construct, algebra]

2.1 Choose $\ell\ne p$, for instance $2$ unless $p=2$ and then $3$. Put $D=\operatorname{End}_{\bar\kappa}^0(A_{0,\bar\kappa})$ and $V=V_\ell(A_0)$. By [F3], $D$ is a finite-dimensional rational algebra and $D\otimes\mathbb Q_\ell$ injects into $\operatorname{End}_{\mathbb Q_\ell}(V)$. Consequently $E_\ell=E\otimes\mathbb Q_\ell$ acts faithfully on $V$. This algebra is a product of finite field extensions of $\mathbb Q_\ell$: for every number-field factor of $E$, choose a primitive element by [F4], factor its minimal polynomial over $\mathbb Q_\ell$, and apply CRT. The factors are distinct because the characteristic-zero polynomial has a Bezout identity with its derivative, which remains valid after extending scalars. Write $E_\ell=\prod_jL_j$. Its dimension and that of $V$ are both $2g$. Each factor idempotent has a nonzero image in $V$ by faithfulness; if its multiplicity over $L_j$ is $m_j\ge1$, then $2g=\sum_jm_j[L_j:\mathbb Q_\ell]=\sum_j[L_j:\mathbb Q_\ell]$. Thus all $m_j=1$, and $V$ is free of rank one over $E_\ell$. [F1, F3, F4, step 1.1, choose, algebra]

3.1 Let $C=Z_D(E)$. It is a finite-dimensional rational subspace, contains $E$, and after tensoring with $\mathbb Q_\ell$ injects into the commutant of $E_\ell$ on $V$ by step 2.1. A module endomorphism of a free rank-one module over a commutative ring is multiplication by its value on a generator. Therefore this commutant is $E_\ell$, of dimension $2g$. It follows that $\dim_{\mathbb Q}C\le2g=\dim_{\mathbb Q}E$, and containment gives $C=E$. This argument uses the actual scalar-extension injection, rather than inferring it merely from faithfulness over $\mathbb Q$. [F3, step 2.1, algebra]

4.1 Every actual endomorphism commuting with $O_E$ commutes with its rational span $E$, so lies in $E$ by step 3.1. It is integral over $\mathbb Z$ by [F3]. Its coordinate in each number-field factor of $E$ satisfies the same monic integral polynomial, and so belongs to that factor's integer ring by [F1]. It therefore belongs to $O_E$. Conversely all elements of $O_E$ specialize to actual endomorphisms by step 1.1 and commute with each other. This proves the stated integral centralizer equality. [F1, F3, step 1.1, step 3.1, algebra]

5.1 Each specialized element of $O_E$ is defined over $\kappa$, by construction over the local model. The $q$-power Frobenius in [F6] commutes with every $\kappa$-morphism: on coordinate functions this is the identity $u(f)^q=u(f^q)$ for a ring homomorphism, with the $q$-power map fixing the scalars of $\kappa$; these affine identities glue. It therefore lies in the integral centralizer of step 4.1 and equals the specialization of an element $\pi\in O_E$. Uniqueness follows from the injectivity in [F2]. Only $\ell\ne p$ was used; neither ramification condition was introduced. This completes every assertion. [F2, F6, step 4.1, algebra] ∎

## Source-reading boundary

The cached 2007 Milne article was read at Proposition1.4 and Corollaries1.5–1.6, printed6, and at their use in Theorem2.1, printed16. Its assumed general Tate scalar-faithfulness and endomorphism-integrality inputs have been locally reconstructed in the preceding finite-free Hom supplier. The proof above also supplies the descent from geometric integral endomorphisms to $k$ and the integral-centralizer step. No Tate-isogeny surjectivity theorem, Weil bound, Rosati identity or unramifiedness hypothesis is imported.

---
id: lem-finite-hensel-algebraic-closedness-of-dense-characteristic-zero-extensions
kind: lemma
title: Algebraic closedness from a finite Hensel approximation in characteristic zero
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-monic-polynomial-division
  - def-multiplicative-absolute-value-on-a-field
  - def-algebraically-closed-field
  - thm-binomial-theorem-over-a-commutative-ring
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad, Completion of algebraic closure"
      url: "https://math.stanford.edu/~conrad/676Page/handouts/algclosurecomp.pdf"
      locator: "Theorem1.1 and Section2; characteristic-zero finite Hensel reconstruction replacing sequences of approximating polynomials and roots"
verification: {}
---

## Statement

Let $C$ be a complete nonarchimedean absolutely valued field of characteristic zero. Suppose $F\subseteq C$ is an algebraically closed subfield dense for the restricted absolute value. Then $C$ is algebraically closed. This assertion requires no Choice axiom: it uses only finitely many coefficient approximations and one root in $F$, followed by deterministic Hensel lifting. In particular, whenever the metric completion of an algebraically closed characteristic-zero valued field is supplied as a complete valued field with its dense isometric embedding, that completion is algebraically closed without any further Choice assumption. No choice-free construction or completeness theorem for arbitrary metric completions is asserted.

## Facts & Assumptions

**Given:** The complete valued field $C$ and the specified dense algebraically closed subfield $F$, with characteristic zero. Completeness of this given field is a hypothesis; it is not inferred from an unqualified general metric-completion theorem.

[F1] Over a complete nonarchimedean field, a polynomial in the valuation ring whose nonzero reduction factors as coprime factors with one factor monic has a lift of that monic factor of the prescribed degree. The original polynomial need not be monic. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F2] Division by a monic polynomial over a commutative ring is valid, including over a field. [[thm-monic-polynomial-division]]

[F3] The absolute value is multiplicative and nonarchimedean. [[def-multiplicative-absolute-value-on-a-field]]

[F4] In an algebraically closed field every nonconstant polynomial has a root. [[def-algebraically-closed-field]]

[F5] Polynomial translation is given by the finite binomial theorem. [[thm-binomial-theorem-over-a-commutative-ring]]

## Proof

1.1 If the absolute value on $F$ is trivial, each nonzero $c\in C$ has an approximant $a\in F$ with $|c-a|<|c|$, whence $|c|=|a|=1$. Thus the value on $C$ is trivial too, and density in this discrete topology gives $C=F$. Assume henceforth the value on $F$ is nontrivial. Let $f\in C[T]$ be any nonconstant polynomial. Among its monic nonconstant polynomial divisors choose one, $q$, of least positive degree $d$. Such divisors exist by dividing $f$ by its leading coefficient; minimum degree exists among natural numbers and selecting one divisor is one existential instantiation. Minimality makes $q$ irreducible. Since the characteristic is zero, $q'\ne0$ and has degree less than $d$, so the greatest common divisor of $q,q'$ is $1$. Polynomial Euclidean division, obtained by scaling each nonzero divisor to be monic in [F2], terminates as degrees decrease. Back substitution therefore gives polynomials $A_0,B_0\in C[T]$ with $A_0q+B_0q'=1$. This is a finite calculation. [F2, F3, F4, given, construct, algebra]

2.1 Choose $s\in F^\times$ of sufficiently large absolute value that $Q(T)=s^{-d}q(sT)$ is monic with every coefficient of absolute value at most $1$. Such $s$ is a sufficiently large positive or negative power of one fixed element of $F$ of absolute value different from $1$. Scaling the preceding identity gives polynomials $A,B\in C[T]$ with $AQ+BQ'=1$. Let $H\ge1$ bound the absolute values of all coefficients of $A$ and $B$; then $|A(r)|,|B(r)|\le H$ whenever $|r|\le1$. Choose a real number $\delta$ with $0<\delta<\min(1,H^{-2})$. By density choose the finitely many lower coefficients of a monic polynomial $G\in F[T]$ of degree $d$ within $\delta$ of the corresponding coefficients of $Q$. These choices are finite, and the coefficients of $G$ all have absolute value at most $1$. By [F4] choose one root $r\in F$ of $G$. It has $|r|\le1$: otherwise its monic leading term strictly dominates every lower term. Hence $|Q(r)|=|Q(r)-G(r)|<\delta$. [F2, F3, F4, step 1.1, given, construct, algebra]

3.1 Put $e=Q'(r)$. The Bezout identity gives $1=A(r)Q(r)+B(r)e$. Since $|A(r)Q(r)|<H\delta<1$, the ultrametric inequality in both directions yields $|B(r)e|=1$. In particular $e\ne0$ and $|e|\ge H^{-1}$. Also $|e|\le1$, since $Q$ has integral coefficients and $|r|\le1$. If $Q(r)=0$ we already have the desired root. Otherwise, expand $Q(r+Z)=Q(r)+eZ+\sum_{j\ge2}c_jZ^j$ by [F5]. The binomial coefficients are integers of absolute value at most $1$, so every $c_j$ is integral. The polynomial $h(U)=Q(r+eU)/e^2$ therefore has integral coefficients: its constant has absolute value $|Q(r)|/|e|^2<\delta H^2<1$, its linear coefficient is $1$, and its coefficient of $U^j$ for $j\ge2$ is $c_je^{j-2}$. Its reduction is nonzero and has the form $U H_0(U)$ with $H_0(0)=1$, so these factors are coprime. Apply the nonmonic factor-lifting assertion [F1] to the monic factor $U$. It produces a monic linear factor $U-u$ of $h$, with $u$ in the maximal ideal. Thus $Q(r+eu)=0$. [F1, F3, F5, step 2.1, algebra, construct]

4.1 In either case step 3.1 gives a root $z\in C$ of $Q$, so $sz$ is a root of $q$ and hence of $f$. Therefore every nonconstant polynomial over $C$ has a root, which is the algebraic-closedness property [F4]. The proof used one polynomial divisor, finitely many Euclidean operations, one scalar rescaling, finitely many approximations and one root of one polynomial over $F$. Its only infinite process occurs inside [F1], where successive coefficient corrections are deterministic and converge by the assumed completeness of $C$. No sequence of arbitrary roots or approximating polynomials, no algebraic closure of $C$, and no extension of its valuation to a splitting field was selected. [F1, F4, step 1.1, step 2.1, step 3.1, algebra] ∎

## Source notes

Conrad's Theorem1.1 is proved using sequences of approximating polynomials, selected roots and a finite splitting-field argument. That full passage was read in the existing fetched three-page text. Here characteristic zero supplies a separable irreducible factor; a single finite approximation and a quantitative Bezout bound reduce it to the actual nonmonic Hensel supplier. This is a local proof adaptation, not an imported completion theorem.

The existing general algebraic-closed-completion lemma retains its original AC hypothesis and full all-characteristic scope unchanged. This lemma supplies a genuinely choice-free characteristic-zero closedness step at a given complete-field input. It does not construct an algebraic closure or a complete valued-field structure on a bare completion, identify inverse-limit completeness with sequential completeness, or prove Fontaine-map surjectivity. The original period-ring and BMS targets retain those separate obligations.

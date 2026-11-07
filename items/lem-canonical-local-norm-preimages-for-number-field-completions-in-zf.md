---
id: lem-canonical-local-norm-preimages-for-number-field-completions-in-zf
kind: lemma
title: Canonical local norm preimages for number-field completions in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-ring-of-integers-free-of-rank-degree
  - thm-field-norm-and-trace-agree-with-operator-determinant-and-trace
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Class Field Theory, version4.03
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: ChapterVIII3, Hasse norm proof; the simultaneous local-preimage choice is replaced here by an explicit finite-residue tree construction
---

## Statement

Work in ZF. Fix rational bases of number fields $K\subset L$ and hence fixed enumerations of their elements by rational coordinate tuples. For finite places $Q\mid P$ put $B=K_P$, $E=L_Q$, and use the completions constructed in the supplied ZF lemma. There is a function
$$s_{Q/P}:N_{E/B}(E^\times)\longrightarrow E^\times,\qquad N_{E/B}(s_{Q/P}(a))=a,$$
definable from these data, without making a choice from each norm fibre. If $a$ is a unit, then $s_{Q/P}(a)$ is a unit.

Suppose now $L/K$ is finite Galois and $a\in K^\times$ is a norm from every $L_w/K_v$. There is an idèle $y=(y_w)_w$ of $L$ whose norm is the principal idèle $a$, constructed in ZF. Here an idèle means a family of nonzero completion elements that are valuation-ring units at all but finitely many finite places. No global norm from $L^\times$ is asserted.

## Facts & Assumptions

**Given:** Exactly the number fields, fixed finite bases, completions and norm-image inputs in the Statement. No choice axiom is assumed.

[F1] In ZF, the local integer rings are complete DVRs, their number-field localizations are dense, residue fields are finite, and the relative completion tensor and norm formulas hold at finite and archimedean places. The global integer rings tensored with $\mathbb Z_p$ are products of these local integer rings. [[lem-number-field-completion-tensor-and-norm-in-zf]]

[F2] A number-field integer ring has a finite free integral basis. [[thm-ring-of-integers-free-of-rank-degree]]

[F3] Field norm is the determinant of the multiplication operator. [[thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]]


## Proof

1.1 The fixed rational basis gives a surjective enumeration of $L$, by enumerating integer numerators and positive denominators of its finite coordinate tuples. At $Q$, let $\pi_Q$ be the first enumerated element with $\operatorname{ord}_Q=1$; it exists by the DVR localization in [F1]. At $P$ define $\pi_P$ in the same way using $K$. For every $m\ge1$, put $R_m=\mathcal O_E/\pi_P^m\mathcal O_E$. These rings are finite: [F1]–[F2] make $\mathcal O_E$ a direct factor of a finite free $\mathbb Z_p$-module, hence finitely generated over $\mathbb Z_p$ and over $\mathcal O_B$; $\pi_P^m$ contains a sufficiently high power of $p$, so its quotient is finite. Every residue has a representative in $L$ integral at $Q$ by density. Order the residues by the least index of such a representative. This defines an actual total order on each finite ring, simultaneously for all $Q,P,m$, by a formula with unique output. It does not choose a family of arbitrary orders. [F1, F2, given, construct, algebra]

1.2 The $\mathcal O_B$-module $\mathcal O_E$ is finite free. To justify the elementary DVR step, take finite generators of any finitely generated torsion-free module over a DVR and embed it in its finite-dimensional fraction-field span. Scale coordinates so that the generators are integral. Choose a nonzero coordinate of least valuation among the finite generator matrix, make it the first pivot and use its divisibility into every other entry to clear its row and column by elementary operations. Induct on the remaining finite matrix. This expresses the generated module as a direct sum of finitely many rank-one principal modules, hence free; torsion-freeness identifies its rank with its fraction-field dimension. Applying this to $\mathcal O_E$ proves the assertion. Consequently [F3] expresses norm on $\mathcal O_E$ as a polynomial with coefficients in $\mathcal O_B$, and gives well-defined maps $R_m\to\mathcal O_B/\pi_P^m$. Norms of units are units: multiplication by a unit has integral inverse, so its determinant is invertible. Also $v_B(N\pi_Q)>0$: a power of $\pi_Q$ belongs to $\pi_P\mathcal O_E$, making its multiplication operator nilpotent modulo $\pi_P$ and its determinant zero there; its norm is nonzero because it is invertible over $E$. [F1, F3, step 1.1, construct, algebra]

2.1 Given $a$ in the norm image, there is a unique integer $r$ for which $b=a/(N\pi_Q)^r$ is a unit of $B$. Existence follows by writing one existential norm preimage as $\pi_Q^r u$ with $u$ a unit; uniqueness follows from $v_B(N\pi_Q)>0$. This argument proves existence and uniqueness, without selecting that existential preimage as data for the function. For each $m$, let $T_m$ consist of the unit residues $z\in R_m^\times$ with $N(z)=b\pmod{\pi_P^m}$. They form a finitely branching tree under reduction. Every level is nonempty, since the existential unit preimage of $b$ supplies compatible residues. No surjectivity between all the $T_m$ is claimed. Call a node extendable if it has extensions to every later level. The root is extendable. An extendable node has an extendable child: otherwise its finitely many children each have a finite bound on extension depth; a maximum of these finitely many bounds contradicts extendability. [F1, step 1.1, step 1.2, given, construct, algebra]

2.2 Starting at the root, choose at each level the least extendable child in the order from step 1.1. This is recursion of a uniquely defined function on $\mathbb N$, which ZF proves, rather than an invocation of Dependent Choice. The compatible residues have a unique inverse-limit unit $u\in\mathcal O_E^\times$ by completeness in [F1]; the $\pi_P$-adic and $\pi_Q$-adic powers are cofinal. For every $m$, the determinant polynomial in step 1.2 gives $N(u)=b\pmod{\pi_P^m}$, so separation of the DVR gives $N(u)=b$. Define $s_{Q/P}(a)=\pi_Q^r u$. Its norm is $a$, and if $a$ is a unit the unique $r$ is zero. All intermediate choices were least elements of specified finite or enumerated sets. Replacement therefore supplies the stated function on the entire norm image, and simultaneously on all finite place pairs. [F1, F3, step 1.1, step 1.2, step 2.1, construct, algebra]

3.1 Finite places above $P$ form a nonempty finite set by [F1]. They can be ordered without choice from the fixed enumeration of $L$: a prime ideal of $\mathcal O_L$ has a finite generating list (as a subgroup of the finite free abelian group in [F2], integer elimination gives finitely many generators), and order its ideal by the least code of such a list in the fixed enumeration of $L$. Distinct ideals have distinct least codes. At each finite $v=P$ let $Q(P)$ be the least prime above it, put $y_{Q(P)}=s_{Q(P)/P}(a)$, and put $y_Q=1$ at the other places above $P$. The product of their local norms is $a$. At archimedean places there are only finitely many choices. In a real-to-real or complex-to-complex factor choose $a$ itself; in a complex-to-real factor local-norm existence says $a>0$, and its positive real square root is a norm preimage. Choose one factor at each archimedean place using a fixed order on the finitely many embeddings. A fixed rational basis and root isolation order specify such an order; alternatively the existence of finitely many orders and preimages requires only the finite-choice theorem of ZF. [F1, F2, step 2.2, given, construct, algebra]

3.2 The constructed family is an idèle. Indeed a nonzero $a\in K$ and its inverse each become algebraic integers after multiplication by a nonzero rational integer, by clearing the finite characteristic-polynomial denominators. Thus $a$ is a unit outside the primes above finitely many rational primes; each of those has only finitely many factors by [F1]. At any other finite $P$, step 2.2 makes the selected $y_{Q(P)}$ a unit, and the other coordinates are1. Hence only finitely many coordinates fail to be units. Its norm is $a$ componentwise by step 3.1 and [F1]'s completion norm formula. The degree-one case gives the identity norm, and $a=1$ is included. [F1, step 2.2, step 3.1, algebra] ∎

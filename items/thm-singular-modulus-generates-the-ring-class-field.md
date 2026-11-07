---
id: thm-singular-modulus-generates-the-ring-class-field
kind: theorem
title: "A singular modulus generates the ring class field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - thm-cm-singular-moduli-are-algebraic-integers
  - thm-cm-lattice-homothety-classes-are-proper-ideal-classes
  - def-classical-modular-equation-for-cyclic-isogenies
  - thm-classical-modular-equation-integrality-and-kronecker-congruence
  - lem-prime-ideal-multiplication-gives-cyclic-isogeny-sublattice
  - lem-residue-fields-at-degree-one-primes-preserved-for-quadratic-orders
  - lem-primitive-principal-ideal-gives-cyclic-isogeny-sublattice
  - thm-j-invariant-classifies-complex-tori
  - thm-ring-of-integers-free-of-rank-degree
  - def-field-norm-and-trace
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-split-inert-ramified-and-unramified-prime
  - thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues
  - lem-number-field-splitting-set-inclusion-criterion
  - lem-coprime-ideal-extension-contraction-for-quadratic-orders
  - thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-chebotarev-dirichlet-density
  - cor-finiteness-of-positive-definite-binary-form-classes
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the ray class field
  existence/reciprocity suppliers; the finite representative choices are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Theorem 11.1, complete proof, printed pp. 237–240"
    - title: "J. S. Milne, Modular Functions and Modular Forms"
      url: "https://www.jmilne.org/math/CourseNotes/MF110.pdf"
      locator: "Chapter 7, maximal-order CM class field theorem; arbitrary-order case outlined"
verification: {}
---

## Statement

Assume AC, Countable Choice, Dependent Choice, the number-field ray class field
theorem, and Chebotarev's positive-density theorem for every nonempty
conjugacy-stable Frobenius subset in a finite Galois extension of number fields.
Let $D<0$ be a quadratic discriminant, let
$\mathcal O_D$ be its order, let $K_{\mathcal O_D}$ be the ring class field
with Galois group identified with $\operatorname{Pic}(\mathcal O_D)$, and let
$I$ be any proper invertible fractional $\mathcal O_D$-ideal. Then
$$K_D(j(I))=K_{\mathcal O_D}.$$

## Statement references

[[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues|The ring class field has Galois group $\operatorname{Pic}(\mathcal O_D)$.]]

[[lem-number-field-splitting-set-inclusion-criterion|The proof compares completely split primes and primes with a degree-one factor.]]

[Cox, Theorem 11.1, pp. 237–240](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, a negative quadratic discriminant $D$, the order $\mathcal O_D$, a proper invertible ideal $I$, and the stated class field and Chebotarev interfaces.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this is one of the global CFT supplier assumptions.

[A2] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; this is one of the global CFT supplier assumptions.

[A3] [[def-dependent-choice]]: every total relation on a nonempty set admits an infinite related sequence from any specified start; this is one of the global CFT supplier assumptions.

[A4] [[thm-chebotarev-dirichlet-density]]: every nonempty conjugacy-stable Frobenius subset in a finite Galois extension of number fields has positive Dirichlet density. The item is present in batch 111 at dependency level 23. Its proof remains conditional on the batch-111 abelian-Chebotarev input, whose actual CFT and ray-class-density suppliers remain proof-open. The complete independent proof in Milne, *Class Field Theory*, Chapter VIII §7, Theorem 7.4, pp. 258–260, was read and supports this interface; no acceptance or proof closure is inferred.

[F1] [[thm-cm-singular-moduli-are-algebraic-integers]]: all singular moduli for $\mathcal O_D$ are algebraic integers.

[F2] [[thm-cm-lattice-homothety-classes-are-proper-ideal-classes]]: distinct ideal classes give distinct $j$-values.

[F3] [[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues]]: $H=K_{\mathcal O_D}$ is finite abelian over $K_D$ with group $\operatorname{Pic}(\mathcal O_D)$ under arithmetic Artin reciprocity, and $H/\mathbb Q$ is Galois; the current CFT supplier proof remains conditional on unresolved CFT inputs.

[F4] [[thm-classical-modular-equation-integrality-and-kronecker-congruence]]: for prime $p$, $\Phi_p(X,Y)\equiv(X^p-Y)(X-Y^p)\pmod p$.

[F5] [[lem-coprime-ideal-extension-contraction-for-quadratic-orders]]: for primes away from the conductor, extension and contraction preserve ideal classes, products, and norms.

[F6] [[thm-j-invariant-classifies-complex-tori]]: homothetic lattices have equal $j$-invariants.

[F7] [[lem-primitive-principal-ideal-gives-cyclic-isogeny-sublattice]]: if $\alpha\in\mathcal O_D$ is primitive, then $\alpha J\subset J$ is cyclic of index $N(\alpha)$ for every proper invertible ideal $J$.

[F8] [[lem-prime-ideal-multiplication-gives-cyclic-isogeny-sublattice]]: a prime ideal with residue field $\mathbb F_p$ makes $J/\mathfrak p_DJ$ a cyclic group of order $p$.

[F9] [[thm-ring-of-integers-free-of-rank-degree]]: the ring of integers of a number field is a full finite-rank $\mathbb Z$-lattice.

[F10] [[def-field-norm-and-trace]]: the norm of an algebraic integer is an integer and is the determinant of its multiplication map.

[F11] [[lem-number-field-splitting-set-inclusion-criterion]]: if $H/\mathbb Q$ is Galois, then $M\subseteq H$ follows from inclusion, up to finitely many primes, of the completely split primes of $H$ in the completely split primes of $M$; and $H\subseteq M$ follows if every prime with a degree-one prime in $M$ splits completely in $H$.

[F12] [[thm-number-field-integral-ideal-factorisation-in-zf]]: every nonzero integral ideal has a finite prime-ideal factorization, so a nonzero principal ideal has only finitely many prime divisors.

[F13] [[thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders]]: proper ideal classes of an imaginary quadratic order correspond to primitive positive-definite binary quadratic form classes of the same discriminant.

[F14] [[cor-finiteness-of-positive-definite-binary-form-classes]]: a fixed negative discriminant has only finitely many reduced positive-definite binary quadratic forms, so its proper ideal class group is finite.

[F15] [[lem-residue-fields-at-degree-one-primes-preserved-for-quadratic-orders]]: a degree-one prime of $\mathcal O_K$ away from $f$ contracts to a prime-to-conductor invertible ideal of $\mathcal O_D$ with the same residue field $\mathbb F_p$.

[F16] [[def-split-inert-ramified-and-unramified-prime]]: a prime splits completely in a number-field extension exactly when it is unramified and every prime above it has residue degree one.

## Proof

1.1 Put $H=K_{\mathcal O_D}$ and $M=K_D(j(I))$. By [A1]–[A3] and [F3], $H/K_D$ is finite abelian with group $\operatorname{Pic}(\mathcal O_D)$. By [F13]–[F14] this group is finite, so choose a complete finite list of class representatives $J_1,\ldots,J_h$. For each representative put $M_r=K_D(j(J_r))$. Since $j(J_r)$ is integral by [F1], its powers up to the degree of a monic integer equation span $\mathcal O_D[j(J_r)]$ as a finite $\mathcal O_D$-module, and its rational span together with $K_D$ is $M_r$. Thus $\mathcal O_D[j(J_r)]$ is a full finite-rank lattice inside $\mathcal O_{M_r}$, which is a full lattice by [F9], so the index is finite. We first show that any rational prime $p$ splitting completely in $H$, outside the finite union of primes ramified in $H$ or any $M_r$, dividing the conductor or discriminant, or dividing one of the indices $[\mathcal O_{M_r}:\mathcal O_D[j(J_r)]]$, splits completely in each $M_r$. [A1, A2, A3, F1, F3, F9, F13, F14, given, choose]

2.1 Fix $r$ and let $p$ split completely in $H$ outside the finite set in step 1.1. It splits in $K_D$, and either prime ideal $\mathfrak p$ of $\mathcal O_K$ above it has trivial Artin class. Its contraction $\mathfrak p_D$ is therefore principal, say $(\alpha)$ with $\alpha\in\mathcal O_D$. By [F15], $\mathcal O_D/\mathfrak p_D\cong\mathcal O_K/\mathfrak p\cong\mathbb F_p$, so multiplication by $\alpha$ on the rank-two lattice $\mathcal O_D$ has determinant of absolute value $p$. This determinant is $N_{K_D/\mathbb Q}(\alpha)>0$ by [F10]; hence $N(\alpha)=p$. The element is primitive, since $\alpha=d\beta$ with an integer $d>1$ would give $p=d^2N(\beta)$. By [F7], $\alpha J_r$ is cyclic of index $p$, and [F6] gives $j(\alpha J_r)=j(J_r)$; the modular equation therefore implies $\Phi_p(j(J_r),j(J_r))=0$. By [F4], the residue of $j(J_r)$ at any prime of $M_r$ over $p$ satisfies $(j(J_r)^p-j(J_r))^2=0$, hence $j(J_r)^p=j(J_r)$. Put $A=\mathcal O_D[j(J_r)]$ and $B=\mathcal O_{M_r}$; the index $n=[B:A]$ is finite and prime to $p$ by the exclusions in step 1.1. Choose integers $s,t$ with $sn+tp=1$. Since $nB\subseteq A$, every $b\in B$ satisfies $b=sn b+tp b$ with $sn b\in A$ and $tp b\in pB$; hence $A/pA\to B/pB$ is surjective. Therefore its image surjects onto $B/\mathfrak Q$ for every prime $\mathfrak Q$ of $B$ above $p$. The image of $\mathcal O_D$ in this residue field is $\mathbb F_p$ by [F15], and the image of $j(J_r)$ is in $\mathbb F_p$ because it satisfies $x^p=x$. Since $A$ is generated by $\mathcal O_D$ and $j(J_r)$, the whole residue field is $\mathbb F_p$. Thus every residue degree is one. The prime is unramified in $M_r$ by step 1.1, so [F16] shows that $p$ splits completely in $M_r$. This holds for every $r$. [F4, F6, F7, F10, F15, F16, step 1.1, choose, algebra]

3.1 By the first criterion of [F11], applied with the Galois extension $H/\mathbb Q$, steps 1.1 and 2.1 imply $M_r\subseteq H$ for every representative $J_r$. If $J$ is any proper ideal, it is homothetic to the representative of its class by [F2], so $j(J)=j(J_r)\in H$. Thus all singular moduli of the order lie in $H$. [A4, F2, F11, step 1.1, step 2.1, given]

4.1 Use the ideal-class representatives $J_1,\ldots,J_h$ fixed in step 1.1 and put $\delta=\prod_{r<s}\bigl(j(J_r)-j(J_s)\bigr)$. By [F2] its factors are nonzero, and by step 3.1 and [F1] it is a nonzero algebraic integer in $H$. The finite prime support of $(\delta)$ is finite by [F12]. The index $[\mathcal O_M:\mathcal O_D[j(I)]]$ is finite by the same lattice argument as in step 1.1, since $j(I)$ is integral. Let $p$ be outside the finite set ramified in $H$ or $M$, dividing the conductor or discriminant, lying below a prime divisor of $(\delta)$, or dividing that index. Suppose $p$ has a prime $\mathfrak q$ in $M$ of residue degree one. Then $p$ splits in $K_D$, and one prime $\mathfrak p$ of $K_D$ above it contracts, by [F15], to a prime-to-conductor $\mathcal O_D$-ideal $\mathfrak p_D$ with residue field $\mathbb F_p$. [F1, F2, F3, F5, F9, F12, F15, step 1.1, step 3.1, given, choose]

5.1 By [F8], $\mathfrak p_D I\subset I$ is a cyclic sublattice of index $p$. Write $x=j(\mathfrak p_D I)$ and $y=j(I)$; both lie in $H$ by step 3.1. The modular equation and [F4] imply $(x^p-y)(x-y^p)=0$ modulo a prime $\mathfrak Q$ of $H$ above $\mathfrak q$. Since $\mathfrak q$ has residue field $\mathbb F_p$, the residue of $y$ is fixed by $z\mapsto z^p$. In the residue field at $\mathfrak Q$, either $x=y$ or $x^p=y$; in the second case injectivity of Frobenius and $y^p=y$ again give $x=y$. If $[\mathfrak p_D I]$ and $[I]$ were distinct, [F2] would make $x-y$ a factor of $\delta$ and force $\mathfrak Q$ to divide $(\delta)$, contrary to the choice of $p$ in step 4.1. Hence $[\mathfrak p_D]=1$ in $\operatorname{Pic}(\mathcal O_D)$. Its conjugate prime is principal as well, since conjugating $(\alpha)$ gives $(\bar\alpha)$. Both primes above $p$ therefore have trivial Artin symbol, and $p$ splits completely in $H$. [F2, F4, F8, step 3.1, step 4.1, algebra]

6.1 Steps 4.1 and 5.1 show that, up to finitely many primes, every prime with a degree-one prime in $M$ splits completely in $H$. The second criterion in [F11] gives $H\subseteq M$. Combining this with $M\subseteq H$ from step 3.1 yields $M=H$, as required. [A4, F11, step 3.1, step 4.1, step 5.1, algebra] ∎

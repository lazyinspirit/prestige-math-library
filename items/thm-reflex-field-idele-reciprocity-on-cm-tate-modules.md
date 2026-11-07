---
id: thm-reflex-field-idele-reciprocity-on-cm-tate-modules
kind: theorem
title: "Reflex-field idèle reciprocity on CM Tate modules"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - thm-reflex-field-ideal-reciprocity-on-cm-torsion
  - thm-complex-cm-abelian-varieties-classified-up-to-isogeny-by-cm-pairs
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - def-arith-tate-module-and-inertia
  - def-reflex-norm-associated-to-a-cm-type
  - lem-reflex-norm-product-with-conjugate-is-field-norm
  - lem-cm-tate-module-rank-one-over-finite-adeles
  - lem-cm-idele-class-artin-kernel-is-uniquely-divisible-and-conjugation-fixed
  - lem-cm-idelic-norm-cyclotomic-character-relation
  - lem-cm-reciprocal-idelic-to-arithmetic-ideal-class-compatibility
  - lem-cm-action-admits-conjugation-compatible-polarization-and-tate-pairing
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Theorem 3.10 and Lemmas 3.4–3.12, complete proof, printed pp. 20–24."
    - title: "J. S. Milne, Complex Multiplication, Chapter II §10"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Idelic form of the reflex-field theorem, printed pp. 82–96."
    - title: "Margaret Bilu, Complex multiplication of abelian varieties, §4"
      url: "https://perso.pages.math.cnrs.fr/users/margaret.bilu/Complexmultiplication.pdf"
      locator: "§4, idelic reciprocity and its proof outline, printed pp. 25–31."
verification: {}
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $(A,\iota)$ be a complex abelian variety with CM by $E$, type $\Phi$, reflex field $E^r$, and let $\sigma\in\operatorname{Aut}(\mathbb C/E^r)$. Write $\mathbb A_{f,F}$ for the ring of finite adèles of a number field $F$, $\widehat{\mathbb Z}=\prod_\ell\mathbb Z_\ell$, $T_fA=\prod_\ell T_\ell(A)$, and $V_fA=T_fA\otimes_{\widehat{\mathbb Z}}\mathbb A_f\cong H_1(A,\mathbb Q)\otimes_{\mathbb Q}\mathbb A_f$, the finite-adic Tate module with its restricted-product topology. If $s\in\mathbb A_{f,E^r}^{\times}$ satisfies $\operatorname{art}_{E^r}(s)=\sigma|_{E^{r,\mathrm{ab}}}$, where lowercase $\operatorname{art}$ is Milne's reciprocal idele map and sends a local uniformizer to inverse arithmetic Frobenius, then there is a unique invertible $E$-linear rational homomorphism (quasi-isogeny) $\lambda\in\operatorname{Hom}^0(A,\sigma A)$ such that
$$\lambda\bigl(N_\Phi(s)x\bigr)=\sigma x\qquad(x\in V_fA).$$
Replacing $s$ by another representative with the same Artin image changes $N_\Phi(s)$ by an element of $E^\times$ and changes $\lambda$ by the inverse $E$-linear quasi-isogeny.

## Statement references

[J. S. Milne, “The Fundamental Theorem of Complex Multiplication,” Theorem 3.10](https://arxiv.org/pdf/0705.3446)

[J. S. Milne, *Class Field Theory*, Chapter V §2](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** The exact CM pair, automorphism, matching finite idele and reciprocal Artin convention of the Statement.

[A1] The Axiom of Choice, Countable Choice and Dependent Choice are assumed as stated. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] A complex CM variety and its conjugate over the reflex field have the same CM type and are related by an E-linear isogeny; their finite Tate modules are free of rank one over the finite adeles of E. [[thm-complex-cm-abelian-varieties-classified-up-to-isogeny-by-cm-pairs]] [[lem-cm-tate-module-rank-one-over-finite-adeles]]

[F2] For an $E$-linear isogeny $f$ and the scalar $\eta$ defined by $f(\eta x)=\sigma x$, the class of $\eta/N_\Phi(s)$ belongs to the finite-idelic Artin kernel. For any other $s$ with the same Artin image, its reflex-norm ratio is a principal $E$-idele. This holds for arbitrary CM orders and products. [[lem-cm-reciprocal-idelic-to-arithmetic-ideal-class-compatibility]]

[F3] The finite-idelic Artin kernel modulo principal E-ideles is uniquely divisible and fixed by CM conjugation, including for product E. [[lem-cm-idele-class-artin-kernel-is-uniquely-divisible-and-conjugation-fixed]]

[F4] The product of a reflex norm and its conjugate is the scalar field norm; for the given Artin pair this field norm is the cyclotomic character times a positive rational. [[lem-reflex-norm-product-with-conjugate-is-field-norm]] [[lem-cm-idelic-norm-cyclotomic-character-relation]]

[F5] There is an E-conjugation-compatible polarization rho and a nondegenerate finite-adic Tate pairing psi_rho with psi_rho(ax,y)=psi_rho(x,bar(a)y), natural for homomorphisms and satisfying psi_(sigma rho)(sigma x,sigma y)=chi_cyc(sigma) psi_rho(x,y). [[lem-cm-action-admits-conjugation-compatible-polarization-and-tate-pairing]]

## Proof

**Proof technique:** compare two E-linear Tate-module maps, then use the polarization to kill the Artin-kernel class.

1.1 By [F1] choose an actual $E$-linear isogeny $f:A\to\sigma A$. Since $V_f A$ is free of rank one over $E\otimes\mathbb A_f$, the $E$-linear map $f^{-1}\circ\sigma$ is multiplication by a unique $\eta\in(E\otimes\mathbb A_f)^\times$. Thus $f(\eta x)=\sigma x$ for all $x$. Put $t=\eta/N_\Phi(s)$. By [F2] its class $k=[t]$ lies in $K_E$. [A1, F1, F2, given, choose, construct, algebra]

1.2 Choose $\rho$ as in [F5]. The rational homomorphism $b=\rho^{-1}f^\vee(\sigma\rho)f$ is an invertible element of $E$: it commutes with $E$ by the $E$-linearity of $f$ and the conjugation compatibility of both polarizations, and the centralizer of $E$ in $\operatorname{End}^0(A)$ is $E$ because its action on rational homology is rank one by [F1]. By functoriality and [F5], for all $x,y\in V_f A$,
$$\psi_\rho(x,b\eta\bar\eta y)=\psi_{\sigma\rho}(f\eta x,f\eta y)=\chi_{\mathrm{cyc}}(\sigma)\psi_\rho(x,y).$$
Here commutativity of $E$ and the adjoint identity in [F5] move the scalar from the first argument. Nondegeneracy forces $b\eta\bar\eta=\chi_{\mathrm{cyc}}(\sigma)$ as a scalar in $E\otimes\mathbb A_f$. [F1, F5, step 1.1, choose, construct, algebra]

2.1 By [F4], $N_\Phi(s)\overline{N_\Phi(s)}=q\chi_{\mathrm{cyc}}(\sigma)$ for some $q\in\mathbb Q_{>0}$. Dividing the identity of step 1.2 gives $t\bar t=(bq)^{-1}\in E^\times$. Hence $k\bar k=1$ in $K_E$. By [F3], $\bar k=k$ and $K_E$ has no nontrivial 2-torsion, so $k=1$. Thus $t=a$ as a principal finite idele for a unique $a\in E^\times$. [F3, F4, step 1.1, step 1.2, algebra]

3.1 Define $\lambda=f\circ a$ in rational Hom. It is an invertible $E$-linear quasi-isogeny, and $f(aN_\Phi(s)x)=f(\eta x)=\sigma x$ gives the required identity. If $\lambda'$ is another rational homomorphism with the identity, its difference has zero action on $V_f A$; faithfulness of the rank-one rational homology/Tate realization in [F1] makes the difference zero. Thus $\lambda$ is unique. [F1, step 1.1, step 2.1, construct, algebra]

4.1 If $s'$ has the same Artin image, [F2] gives $N_\Phi(s'/s)=e$ for $e\in E^\times$. The unique solution for $s'$ is $\lambda\circ e^{-1}$, by direct substitution and uniqueness. This includes principal representatives: when $\sigma$ is the identity and $s$ is a positive rational integer, the solution can be multiplication by a nonintegral rational scalar, so an actual isogeny is not generally available. No maximal-order, field-only, or unramified assumption was added. [F2, step 3.1, given, algebra] ∎

## Source-reading boundary

The displayed comparison is locally derived from the recorded ray bridge, kernel, norm and algebraic pairing suppliers. The actual-isogeny wording in the previous Statement is corrected to invertible rational homomorphism: for $E=\mathbb Q(i)$, $\sigma=1$ and the principal finite idele $s=n>1$, the equation forces $\lambda=[1/n]$. The explicit Q(i) example has the same correction. This records no new imported result or external computation.

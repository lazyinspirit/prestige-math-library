---
id: lem-finite-p1-curve-picard-torsion-and-divisibility-in-zf
kind: lemma
title: Picard torsion and divisibility for finite P¹ curves in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - thm-constructible-inner-model-semantic-and-formal-schema
  - thm-picard-zero-represented-by-jacobian
  - thm-nonaffine-abelian-multiplication-finite-faithfully-flat
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - cor-noether-normalisation-module-finiteness
  - lem-normal-proper-integral-curves-finite-over-p1-in-zf
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
proof_strategy: direct
axiom_use: No ambient choice. The AC/DC Picard and abelian multiplication theorems are used only inside L with finitely coded field data; only finitely many algebraic coefficients are transported out.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Picard schemes of curves and abelian varieties
      url: https://stacks.math.columbia.edu/tag/0BFG
      locator: Context only; the finite-code ZF transfer is supplied locally.
---

## Statement

Work in ZF. Let $k$ be a specified algebraically closed field and let $C/k$ be a specified normal, integral curve with a specified finite morphism $C\to\mathbb P^1_k$ and finite affine-algebra and gluing presentations for its two standard-chart preimages. For every positive integer $N$, multiplication by $N$ on $\operatorname{Pic}^0(C)$ is surjective and $\operatorname{Pic}^0(C)[N]$ is finite. If $g$ is the dimension of degree-one Čech cohomology of $\mathcal O_C$ for the two specified affine charts, the kernel has at most $N^{2g}$ elements. The conclusion includes characteristics dividing $N$ and asserts neither étaleness nor an exact number of points.

## Statement references

[[thm-constructible-inner-model-semantic-and-formal-schema]]

## Facts & Assumptions

**Given:** The specified algebraically closed field, normal integral curve with its finite projective-line presentation, and positive integer.

[F1] ZF proves each fixed ZFC axiom relativized to the constructible class $L$. [[thm-constructible-inner-model-semantic-and-formal-schema]]

[F2] Under AC and DC, the degree-zero Picard sheaf of a smooth proper geometrically connected curve is represented by its abelian Jacobian. Multiplication by $N$ on a $g$-dimensional abelian variety has finite locally free kernel of rank $N^{2g}$ and is surjective on points over an algebraically closed field. These implications are used only inside $L$. [[thm-picard-zero-represented-by-jacobian]] [[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]]

[F3] On an integral scheme, Cartier divisors modulo principal divisors compute the Picard group. [[thm-cartier-divisors-mod-principal-to-picard]]

[F4] Under AC, a finite affine cover with affine intersections computes quasi-coherent sheaf cohomology by its Čech complex. This implication is used only inside $L$. [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

[F5] Height-one localizations of Noetherian normal domains are discrete valuation rings, and finite-type field algebras admit finite Noether normalization. [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]] [[cor-noether-normalisation-module-finiteness]]

[F6] Every specified nonconstant function on a normal proper integral curve gives a finite map to the projective line, and a finite torsion-free module over a PID is free. [[lem-normal-proper-integral-curves-finite-over-p1-in-zf]] [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]

## Proof

**Proof technique:** apply the choice-based theorems to finite field codes inside $L$, then transfer only finite algebraic witnesses to the supplied field.

1.1 Each closed local ring of the normal Noetherian integral curve is a one-dimensional normal local domain, hence a discrete valuation ring; its cotangent space has dimension one. Every closed point of a finite-type scheme over the specified algebraically closed field is rational. On a finite affine presentation $k[x_1,\ldots,x_m]/I$, cotangent dimension one makes the linear parts of equations in $I$ span an $(m-1)$-dimensional subspace at that point. Choose $m-1$ equations with independent differentials. Their quotient in the regular local ambient ring is a one-dimensional regular local domain; its surjection onto the given one-dimensional local domain has zero kernel. The resulting standard Jacobian chart is smooth at the point. These are only finite local choices. If the singular locus were nonempty, finite Noether normalization would produce a closed point on it, contradicting the rank calculation. Thus the curve is smooth; the finitely many chart minors generate unit ideals and supply finite smoothness certificates. By [F3], every Picard class has a Cartier divisor representative. Each local rational equation has only finitely many zeros and poles on the Noetherian curve, and quasi-compactness supplies a finite chart cover. Consequently a Cartier divisor is determined by finitely many integer orders at closed points. Conversely finitely many orders give a Cartier divisor using one uniformizer at each of those finitely many points and the unit equation elsewhere. Principal divisors give exactly the rational-function relations. A nonconstant function gives a finite map to the projective line by [F6]; on both standard charts its finite torsion-free module over the polynomial PID is free of the common function-field degree. The zero and infinity fibres therefore have that same length, so its divisor has degree zero. A constant function has zero divisor. A finite-type closed point over the specified algebraically closed field is rational: its finite residue extension is the field itself. Hence all divisor and rational-function witnesses below use finitely many field coefficients. [F3, F5, F6, given, construct, algebra]

2.1 Choose the specified finite algebra presentations and gluing identities for the two standard-chart preimages of $C\to\mathbb P^1_k$ and let $k_0\subseteq k$ be the subfield generated by their coefficients and the finite smoothness certificates from step 1.1 over the prime field. The finite module generators, multiplication tables and their identities descend the finite morphism, so the model is proper over $k_0$. For any specified finitely generated intermediate field $T$, finite Hilbert-basis induction gives finitely generated polynomial relation ideals, so $k_0$, $T$, and their field operations have common natural-number fraction codes in $L$. The finite equations and standard affine chart maps have the same codes there. The descended smoothness certificates show the resulting $k_0$-curve is smooth. It is geometrically integral: a failure over an algebraic closure has a finite algebraic coefficient witness, whose finite field embeds into the given algebraically closed $k$, contradicting the supplied integral curve. The same holds after extending to $T$. [F1, given, construct, algebra]

3.1 Inside $L$, choose an algebraic closure $\Omega$ of the common code for $T$. Since $T$ is finitely generated over its prime field, $L$ has a countable enumeration of $\Omega$ and its operations, hence the same natural-number codes exist externally. Every finite-type chart algebra over $\Omega$ is Noetherian; all its ideals and prime ideals are finitely generated and have the same codes inside and outside $L$. The finite affine charts, closed points, local orders and polynomial identities used below therefore agree. A single finite extension of $T$ inside $\Omega$ embeds into $k$ over $T$ by finitely many root choices, including purely inseparable roots; no embedding of all of $\Omega$ is assumed. [F1, step 2.1, given, construct, algebra]

4.1 The preimages of the two standard affine charts of $\mathbb P^1$ and their intersection are affine because the given map is finite. Their two-term Čech complex is a map of the three finite-type chart algebras. Its finite coefficients and relations have the same common codes at $k_0$, and [F4] identifies its internal cohomology with sheaf cohomology inside $L$. The proper-curve input in [F2] gives finite dimension there, with a finite internal basis in the common codes. Tensoring this two-term complex with any field extension is exact: every tensor relation involves a finite-dimensional scalar span, for which a finite basis suffices. Hence its cohomology dimension is unchanged over $T$, $\Omega$ and $k$. In particular the genus $g$ is the common dimension and is independent of $T$. [F4, step 2.1, step 3.1, algebra]

4.2 Let $\alpha\in\operatorname{Pic}^0(C)$ and use step 1.1 to represent it by a finite degree-zero divisor $D$. Adjoin its coordinates to $k_0$, obtaining a finitely generated $T\subseteq k$. Inside $L$, apply [F2] to $C_\Omega$: some degree-zero divisor $E$ and nonzero rational function $f$ satisfy $N E-D=\operatorname{div}(f)$. The finitely many coordinates of $E$, coefficients of $f$, and certificates for this divisor equality lie in one finite algebraic extension $T'/T$. Embed this extension into $k$ by step 3.1 and transport the finite divisor equality. It gives $N[E]=\alpha$ in $\operatorname{Pic}^0(C)$, proving surjectivity. [F1, F2, step 1.1, step 2.1, step 3.1, given, construct, algebra]

5.1 Put $M=N^{2g}$. Suppose $M+1$ distinct $N$-torsion classes exist. Make this finite selection and choose for each a degree-zero divisor $D_i$ and one rational function witnessing $N D_i$ principal. Their finitely many coefficients and coordinates lie in a finitely generated $T\subseteq k$. Inside $L$ the same data yield $M+1$ torsion classes on $C_\Omega$. They remain distinct: if $D_i-D_j$ were principal internally, one rational function and its finitely many algebraic coefficients would lie in a finite extension of $T$ that embeds into $k$ by step 3.1, giving the forbidden equality there. By [F2] and step 4.1 the internal Jacobian kernel has rank $M$, hence at most $M$ rational points over $\Omega$, a contradiction. Therefore no $M+1$ distinct torsion classes exist. A set with no $M+1$ distinct elements has at most $M$ elements: otherwise select $M+1$ successively, requiring only finitely many selections. This proves the finite bound in ZF. [F1, F2, step 1.1, step 3.1, step 4.1, given, construct, algebra] ∎

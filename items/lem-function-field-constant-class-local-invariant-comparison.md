---
dependency_level: 11
id: lem-function-field-constant-class-local-invariant-comparison
kind: lemma
title: Constant cyclic classes and the exact local invariant diagram
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-integral-finite-type-scheme-function-field
- thm-continuous-lyndon-hochschild-serre-spectral-sequence
- thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero
- thm-hilbert-90-for-absolute-galois-group
- thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- cor-local-brauer-invariant-under-choice
- lem-local-unramified-degree-two-cohomology-and-inflation
- lem-cyclic-group-cohomology-norm-and-inflation
- lem-procyclic-permutation-cohomology-and-degree-augmentation
- lem-function-field-geometric-divisor-picard-cohomology
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- lem-hensel-factor-lifting-over-a-complete-valued-field
- thm-local-ring-smooth-curve-dvr
- thm-algebraic-embedding-extension
- thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
- thm-finite-galois-extension-characterizations
- thm-fundamental-theorem-of-finite-galois-theory
- thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
- thm-curves-function-fields-equivalence
- def-degree-divisor-proper-curve
justified_by: []
proof_strategy: direct
axiom_use: AC is assumed throughout; it covers the finite-dimensional and compactness
  choices. DC and supplied resolutions are used only where cohomology is invoked.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition, Appendix A.7;
      locally reconstructed intermediates
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: Printed pp.131–132, full actual A.7 proof read. Finite-field Jacobian,
      augmentation and local comparison details are proved in the local bodies, not
      imported from its omitted end-zero or identification sentence.
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterIII §1
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Theorem1.7 and Proposition1.8, printed pp.99–101; arithmetic Frobenius,
      valuation and restriction normalization.
verification: {}
---

## Statement

Assume AC and DC. Let $k=\mathbb F_q$, $C/k$ be smooth proper geometrically integral, $K=k(C)$, and $\bar K=K\bar k$ in a fixed separable closure. Inflation and the standard crossed-product comparison identify
$$\operatorname{Br}_{\mathrm{alg}}(K)\cong H^2_{\mathrm{cts}}(G_k,\bar K^\times).$$
Every class is represented at a finite constant extension $K_n=K\mathbb F_{q^n}$ by the cyclic carry cocycle with parameter $a\in K^\times$ and arithmetic Frobenius generator. For a closed point $v$ of degree $d_v$, its actual localization to the completed local field satisfies
$$I_{K_v}(\alpha_v)=\frac{d_v\,\operatorname{ord}_v(a)}{n}\pmod{\mathbb Z}.$$
This is also precisely the $v$ coordinate of the degree-two divisor image
$$H^2(G_k,\bar K^\times)\longrightarrow H^2(G_k,\operatorname{Div}(\bar C))
 \cong\bigoplus_v\mathbb Q/\mathbb Z.$$
Thus the divisor/cohomology injection and actual Brauer localization agree under the specified local invariants. In particular every global class has finite local support. No global reciprocity theorem is used.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[lem-integral-finite-type-scheme-function-field]]

[[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

[[thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero]]

[[thm-hilbert-90-for-absolute-galois-group]]

[[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[[cor-local-brauer-invariant-under-choice]]

[[lem-local-unramified-degree-two-cohomology-and-inflation]]

[[lem-cyclic-group-cohomology-norm-and-inflation]]

[[lem-procyclic-permutation-cohomology-and-degree-augmentation]]

[[lem-function-field-geometric-divisor-picard-cohomology]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[[thm-local-ring-smooth-curve-dvr]]

[[thm-algebraic-embedding-extension]]

## Facts & Assumptions

**Given:** AC, DC, and the objects and cohomology conventions in the Statement.

[F1] Geometric integrality implies $K\otimes_k\bar k$ is a domain under AC; finite-type affine charts compute its function field. [[lem-integral-finite-type-scheme-function-field]]

[F2] The actual continuous LHS edge is an isomorphism in degree two when the closed normal subgroup has zero $H^1,H^2$. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

[F3] Tsen gives zero Brauer group for the one-variable function field over $\bar k$, with the stated AC hypothesis. [[thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero]]

[F4] Absolute Hilbert90 gives zero $H^1$ of its multiplicative separable-closure module. [[thm-hilbert-90-for-absolute-galois-group]]

[F5] Under AC/DC, finite-quotient continuous cohomology uses actual inflation/coefficient maps, and the standard Brauer comparison is natural with $b([A(c)])=[c]$. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F6] The explicit AC/DC local classical invariant is the standard comparison followed by unramified valuation, inverse Bockstein and arithmetic Frobenius evaluation. [[cor-local-brauer-invariant-under-choice]] [[lem-local-unramified-degree-two-cohomology-and-inflation]]

[F7] Finite cyclic $H^2$ is the fixed-module norm quotient and order enlargement by $r$ multiplies its degree-two representative by $r$. [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F8] The finite-orbit coordinate on $H^2(C_N,P_d)$ sends the invariant sum coefficient $b$ to $b/(N/d)$, and the divisor map gives its actual cohomology map. [[lem-procyclic-permutation-cohomology-and-degree-augmentation]] [[lem-function-field-geometric-divisor-picard-cohomology]]

[F9] Finite unramified extensions of a finite-residue local field correspond to separable residue extensions; simple residue roots lift by Hensel. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F10] At a closed point of a smooth curve the local ring is a DVR and order is its normalized valuation; its residue field is finite over the base, as in the divisor-degree convention. [[thm-local-ring-smooth-curve-dvr]] [[def-degree-divisor-proper-curve]]

[F11] Under AC a field embedding extends across an algebraic extension into an algebraic closure. [[thm-algebraic-embedding-extension]]

[F12] Finite fields have the indicated cyclic Frobenius extensions. A finite extension with as many automorphisms as its degree is Galois, and the finite Galois correspondence identifies its fixed fields. [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]] [[thm-finite-galois-extension-characterizations]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F13] Under AC, restriction from an absolute Galois group onto a finite Galois subextension group is onto. [[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]

[F14] A smooth proper geometrically integral curve over the perfect field $\bar k$ has a finitely generated function field of transcendence degree one. [[thm-curves-function-fields-equivalence]]

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 By [F1], $K\otimes_k k_n$ is a domain for $k_n=\mathbb F_{q^n}$, and its $K$-dimension is $n$. It is a field, with $n$ distinct automorphisms induced by the constant-field Frobenius by [F12], hence is the cyclic extension $K_n/K$ of degree $n$. Their union is $\bar K=\bar k(\bar C)$, with Galois group $G_k$. Restriction from $G_K$ is onto every finite constant quotient by [F13]. Its image in $G_k$ is compact, hence closed, and is dense because those finite projections are onto; it is therefore all of $G_k$. Thus $1\to G_{\bar K}\to G_K\to G_k\to1$ is the actual Galois exact sequence, with fixed multiplicative module $\bar K^\times$. At each finite constant quotient, its fixed field is $K_n$ by [F12]. [A1, F1, F12, F13, given, construct, algebra]

1.2 The curve $\bar C/\bar k$ is smooth proper geometrically integral with one-variable function field $\bar K$ by [F14], and $K_s$ is also a separable closure of $\bar K$ (separability is transitive in this algebraic tower). Thus [F3] and [F5] give $H^2(G_{\bar K},K_s^\times)=0$. By [F4] its $H^1$ is zero. Apply the actual closed-normal-subgroup edge theorem [F2], obtaining $H^2(G_k,\bar K^\times)\cong H^2(G_K,K_s^\times)$. Combine it with [F5]'s standard comparison to identify the classical Brauer group as stated. No ordinary-group LHS or unproved continuous Shapiro theorem is substituted here. [F2, F3, F4, F5, F14, step 1.1, algebra]

1.3 By [F5] a class comes from $H^2(C_n,K_n^\times)$ for some $n$. Its norm-quotient representative by [F7] is $a\in(K_n^\times)^{C_n}=K^\times$. The corresponding normalized cocycle is $a$ on a cyclic carry and $1$ otherwise: the carry cocycle in $H^2(C_n,\mathbb Z)$ is the coboundary of $i\mapsto i/n$ and represents the positive periodic generator by the trivial-orbit calculation in [F8], and the equivariant coefficient map $\mathbb Z\to K_n^\times$, $1\mapsto a$, sends its periodic-resolution representative $1$ to $a$. Naturality of the Hom resolution therefore gives exactly that cocycle representative. [F5, F7, F8, step 1.1, step 1.2, algebra]

2.1 Fix a closed point $v$ of degree $d$. By [F10] its order is a DVR valuation. Completing preserves the uniformizer and the residue field $k(v)$: a Cauchy sequence in the valuation ring has a stabilized residue, and repeated division by its uniformizer gives the same discrete value group and residue in the completion. Thus $K_v$ is a complete finite-residue field. In characteristic $p$, the roots of $X^{q^r}-X$ in its unramified tower lift the finite constant fields uniquely by [F9], and form their field union. Extend $k\hookrightarrow K_v$ to an embedding of $\bar k$ into an algebraic closure of $K_v$ by [F11]. Each image is a root of some $X^{q^r}-X$, hence belongs to the unramified tower just constructed; this provides the compatible embeddings into the union. The multiplication map $K\otimes_k k_r\to K_v^{\mathrm{ur}}$ is then a nonzero homomorphism from the field in step 1.1, hence is injective. Passing to the union embeds $\bar K$ into $K_v^{\mathrm{ur}}$. [A1, F9, F10, F11, step 1.1, choose, construct, algebra]

2.2 Extend this embedding to one $K_s\to K_{v,s}$ using [F11] in an algebraic closure of $K_v$; separability over $K$ ensures every image lies in the separable closure of $K_v$. Restriction defines the continuous homomorphism $G_{K_v}\to G_K$ used for localization. Its inertia subgroup fixes the embedded $\bar K$, so the induced quotient map is
$$j_v:\Gamma_v=\operatorname{Gal}(K_v^{\mathrm{ur}}/K_v)\to G_k,\qquad
\phi_v\longmapsto\phi^d.$$
Indeed on all finite constant fields both sides induce $x\mapsto x^{q^d}$, by the arithmetic Frobenius normalization in [F9]. Inflation and restriction commute as literal substitutions of group arguments and coefficient inclusion, or equivalently by [F2]'s edge naturality. [F2, F5, F9, F11, step 2.1, construct, algebra]

3.1 Pull back step 1.3's carry cocycle along $j_v$ and include coefficients into $(K_v^{\mathrm{ur}})^\times$. Applying valuation sends its coefficient map $1\mapsto a$ to $1\mapsto\operatorname{ord}_v(a)$. The inverse Bockstein character therefore has value $\operatorname{ord}_v(a)/n$ on $\phi$, and after pullback value $d\,\operatorname{ord}_v(a)/n$ on $\phi_v$. By [F6], this is the invariant of the actual localized class. Standard comparison has factor sign $b=-o$, so the class of the standard carry algebra, not its opposite, has this positive value. [F5, F6, step 1.3, step 2.2, algebra]

3.2 On $\bar C$, the geometric points above $v$ form the length-$d$ orbit. The coefficient of $\operatorname{div}_{\bar C}(a)$ at each is $\operatorname{ord}_v(a)$. For precision, in the base-changed local ring the quotient by a $v$-uniformizer is the localization of $k(v)\otimes_k\bar k$ at one of its $d$ factors, hence is $\bar k$; its maximal ideal is generated by that same uniformizer. The smooth geometric local ring is a DVR by [F10], so this parameter has order one there too. Choose $N$ divisible by $n$ and $d$. Inflation to the constant level $N$ sends the carry representative $a$ to $a^{N/n}$ by [F7]. Its divisor orbit coefficient is $(N/n)\operatorname{ord}_v(a)$; [F8] therefore gives coordinate
$$\frac{(N/n)\operatorname{ord}_v(a)}{N/d}
 =\frac{d\,\operatorname{ord}_v(a)}{n}.$$
This is the value from step 3.1. For the finite support of $\operatorname{div}(a)$, one $N$ can be chosen divisible by all its orbit degrees and by $n$; zero coefficients give zero coordinates everywhere else. These finite-stage equalities prove the actual commutative localization/divisor diagram, not merely an abstract isomorphism of its terms. [F7, F8, F10, F12, step 1.3, step 3.1, algebra]

4.1 The equality holds for every closed point and every class, because step 1.3 represents every class. A rational function has finite divisor support, so the coordinate and local invariant vanish away from that finite set. This gives finite local support and the asserted diagram. Choices of compatible embeddings change the chosen geometric point within its Frobenius orbit and leave its coefficient and invariant unchanged. Neither global reciprocity nor a rational point on $C/k$ was used. [F8, step 1.3, step 3.1, step 3.2, algebra] ∎

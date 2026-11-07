---
id: ex-dedekind-zeta-of-a-quadratic-field
kind: example
title: "Dedekind zeta residue and biquadratic factors for quadratic fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-biquadratic-dedekind-zeta-factorization
  - thm-dedekind-zeta-euler-product
  - def-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-discriminant-of-a-number-field-basis-and-order
  - def-ideal-class-group-of-a-domain
  - def-number-field-regulator
  - thm-dirichlet-unit-theorem
  - def-roots-of-unity-in-a-field
  - lem-roots-of-unity-in-a-number-field-are-finite
  - thm-ring-of-integers-of-a-quadratic-field
  - cor-discriminant-of-a-quadratic-field
  - thm-minkowski-bound-for-ideal-classes
  - cor-order-index-discriminant-formula
  - def-order-in-a-number-field
  - cor-integral-elements-form-a-subring
  - thm-orders-have-integral-bases-and-finite-index
  - thm-ramified-primes-and-the-number-field-discriminant
  - thm-field-norm-and-trace-by-embeddings
  - def-finite-galois-extension-and-galois-group
  - thm-finite-galois-extension-characterizations
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-ramification-and-residue-degrees-in-towers
  - cor-frobenius-compatibility-in-finite-towers
  - thm-frobenius-order-is-residue-degree
  - thm-unramified-frobenius-element-exists-uniquely
  - cor-galois-prime-decomposition-efg
  - thm-frobenius-elements-above-a-prime-are-conjugate
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - cor-norm-of-a-prime-ideal
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Example 4.5 and the quadratic-field formulas"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Chapter 4 Example 4.5, p.71; Chapter 5 discriminant and regulator conventions."
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §5"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.465–466, analytic class-number formula and completed Dedekind zeta normalization."

---

## Example

Assume the Axiom of Choice. For $K=\mathbb Q(i)$, the residue of $\zeta_K(s)$ at $s=1$ is $\pi/4$. Let $F=\mathbb Q(\sqrt2,\sqrt3)$; the extension $F/\mathbb Q$ is Galois of degree $4$ with quadratic subfields $K_1=\mathbb Q(\sqrt2)$, $K_2=\mathbb Q(\sqrt3)$, and $K_3=\mathbb Q(\sqrt6)$. Write $Z_{E,5}(s)=\prod_{\mathfrak q\mid5\mathcal O_E}(1-(N\mathfrak q)^{-s})^{-1}$ for a number field $E$. The ramification index of every prime of $F$ above $5$ is $1$, and these factors satisfy
$$Z_{F,5}(s)Z_{\mathbb Q,5}(s)^2=Z_{K_1,5}(s)Z_{K_2,5}(s)Z_{K_3,5}(s)=(1-5^{-s})^{-2}(1-5^{-2s})^{-2}.$$

## Example references

[[def-axiom-of-choice]]

[[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[[thm-biquadratic-dedekind-zeta-factorization]]

[[thm-ring-of-integers-of-a-quadratic-field]]

[[cor-discriminant-of-a-quadratic-field]]

[[thm-minkowski-bound-for-ideal-classes]]

[[thm-dirichlet-unit-theorem]]

[[thm-finite-galois-extension-characterizations]]

[[thm-fundamental-theorem-of-finite-galois-theory]]

[[thm-dedekind-zeta-euler-product]]

[[def-absolute-norm-of-an-ideal]]

[[def-prime-above-and-residue-degree]]

[[def-ramification-index]]

## Facts & Assumptions

**Given:** AC; the number field $K=\mathbb Q(i)$; the field $F=\mathbb Q(\sqrt2,\sqrt3)$; the fields $K_1=\mathbb Q(\sqrt2)$, $K_2=\mathbb Q(\sqrt3)$, and $K_3=\mathbb Q(\sqrt6)$; and the rational prime $5$.

[A1] The Axiom of Choice is assumed; the Minkowski bound and analytic class-number theorem used below require it ([[def-axiom-of-choice]], [[thm-minkowski-bound-for-ideal-classes]], [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]).

[F1] For $d=-1$, the ring of integers is $\mathbb Z[i]$ and its field discriminant is $-4$; its signature is $(0,1)$ ([[thm-ring-of-integers-of-a-quadratic-field]], [[cor-discriminant-of-a-quadratic-field]], [[def-archimedean-embeddings-and-number-field-signature]]).

[F2] For a degree-$n$ number field of signature $(r_1,r_2)$, every ideal class contains an integral ideal of norm at most $(4/\pi)^{r_2}(n!/n^n)\sqrt{|d_K|}$ ([[thm-minkowski-bound-for-ideal-classes]], [[def-ideal-class-group-of-a-domain]]).

[F3] For a number field of signature $(r_1,r_2)$, the unit rank is $r_1+r_2-1$ and the torsion subgroup of its unit group is its roots of unity ([[thm-dirichlet-unit-theorem]]).

[F4] The regulator is the absolute determinant obtained from the logarithmic unit matrix after deleting one row; in rank zero the matrix is empty and its determinant is $1$ ([[def-number-field-regulator]]).

[F5] The roots of unity in a number field form a finite group, and every root of unity is a unit ([[def-roots-of-unity-in-a-field]], [[lem-roots-of-unity-in-a-number-field-are-finite]]).

[F6] For a number field $K$, the analytic class-number formula is $\operatorname{Res}_{s=1}\zeta_K(s)=2^{r_1}(2\pi)^{r_2}h_KR_K/(w_K\sqrt{|d_K|})$, where $h_K$ is the class number and $w_K$ the number of roots of unity ([[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]).

[F7] A finite extension is Galois when its automorphism group has order equal to its degree; for a finite Galois extension, subgroups and intermediate fields correspond with $[E^H:F]=[G:H]$ ([[thm-finite-galois-extension-characterizations]], [[thm-fundamental-theorem-of-finite-galois-theory]], [[def-finite-galois-extension-and-galois-group]]).

[F8] Algebraic integers form a subring; a full-rank order has finite index in the ring of integers; for an order $A\subseteq\mathcal O_F$, $\operatorname{disc}(A)=[\mathcal O_F:A]^2d_F$; and a rational prime ramifies in a number field exactly when it divides the field discriminant ([[cor-integral-elements-form-a-subring]], [[def-order-in-a-number-field]], [[thm-orders-have-integral-bases-and-finite-index]], [[cor-order-index-discriminant-formula]], [[thm-ramified-primes-and-the-number-field-discriminant]]).

[F9] The field trace of an element of a number field is the sum of its values under all embeddings into an algebraic closure ([[thm-field-norm-and-trace-by-embeddings]]).

[F10] Ramification indices multiply in towers; in a finite Galois extension the decomposition data satisfy $efg=[E:F]$ ([[thm-ramification-and-residue-degrees-in-towers]], [[cor-galois-prime-decomposition-efg]]).

[F11] At an unramified prime, arithmetic Frobenius acts on residues by $x\mapsto x^{N\mathfrak p}$, restricts to Frobenius in an intermediate Galois field, has order equal to the residue degree, and Frobenius elements above one prime are conjugate ([[thm-unramified-frobenius-element-exists-uniquely]], [[cor-frobenius-compatibility-in-finite-towers]], [[thm-frobenius-order-is-residue-degree]], [[thm-frobenius-elements-above-a-prime-are-conjugate]]).

[F12] The Euler product gives the local factor as the product over prime ideals above the rational prime, and for a prime $\mathfrak q$ above $p$, $N\mathfrak q=p^{f(\mathfrak q/p)}$ ([[thm-dedekind-zeta-euler-product]], [[thm-number-field-integral-ideal-factorisation-in-zf]], [[def-prime-above-and-residue-degree]], [[cor-norm-of-a-prime-ideal]], [[def-absolute-norm-of-an-ideal]]).

[F13] The norm of an integral ideal is $|\mathcal O_K/\mathfrak a|$, which is finite for a nonzero ideal; the ideal class group is the quotient by nonzero principal fractional ideals ([[def-absolute-norm-of-an-ideal]], [[lem-nonzero-number-field-ideal-has-finite-quotient]], [[def-ideal-class-group-of-a-domain]]).

## Verification

1.1 By [F1], $K$ has signature $(r_1,r_2)=(0,1)$ and $|d_K|=4$. [F1, given]

1.2 If $u=a+bi\in\mathbb Z[i]$ is a unit with inverse $v=c+di$, then $(a^2+b^2)(c^2+d^2)=|uv|^2=1$. Both factors are positive integers, so $a^2+b^2=1$ and $u\in\{1,-1,i,-i\}$. Each listed unit is a root of unity, and every root of unity is a unit, so $w_K=4$. [F1, F5, given, algebra]

1.3 Put $u=\sqrt2$ and $v=\sqrt3$. If $v=a+bu$ for $a,b\in\mathbb Q$, squaring gives $a^2+2b^2=3$ and $2ab=0$. If $b=0$, then $a^2=3$ has odd $3$-adic valuation; if $a=0$, then $b^2=3/2$ has odd $2$-adic valuation. Thus $v\notin\mathbb Q(u)$ and $[F:\mathbb Q]=4$. The separable polynomial $(X^2-2)(X^2-3)$ has splitting field $F$, so [F7] makes $F/\mathbb Q$ Galois with group of order $4$. An automorphism sends $u,v$ to signed copies; these signs determine it, so $\operatorname{Gal}(F/\mathbb Q)$ injects into $\{\pm1\}^2$ and, having order $4$, is $V_4$. Its three order-two subgroups are generated by the flips of $u$, of $v$, and of both; they fix respectively $v,u,uv$. By the Galois correspondence [F7], their fixed fields are $K_2,K_1,K_3$, since each has degree $2$. [F7, given, algebra]

2.1 Substituting the data from step 1.1 and $n=2$ into [F2] gives $M_K=(4/\pi)(2!/2^2)\sqrt4=4/\pi<2$. Every ideal class contains an integral ideal of positive integer norm below $2$, hence of norm $1$. By [F13], norm $1$ means the quotient $\mathcal O_K/\mathfrak b$ has one element, so $\mathfrak b=\mathcal O_K$. Thus every class is the identity and $h_K=1$. [A1, F1, F2, F13, given, step 1.1, algebra]

2.2 By [F3] and step 1.1 the unit rank is $r_1+r_2-1=0$; [F4] then gives $R_K=1$. [F3, F4, step 1.1]

2.3 The elements $u,v$ from step 1.3 are algebraic integers, and reducing powers by $u^2=2$, $v^2=3$ shows that $A=\mathbb Z[u,v]$ has additive basis $(1,u,v,uv)$; it has rank $4$ by step 1.3. The four embeddings are the sign changes from that step. Their trace-pairing matrix in this basis is diagonal with entries $(4,8,12,24)$: every off-diagonal product is a nonconstant rational multiple of $u,v$, or $uv$ and has trace zero, while the trace of each square is four times its rational value by [F9]. Thus $\operatorname{disc}(A)=4\cdot8\cdot12\cdot24=9216$. By [F8], $A$ is a full-rank order and $\operatorname{disc}(A)=[\mathcal O_F:A]^2d_F$; since $5\nmid9216$, we have $5\nmid d_F$, so $5$ is unramified in $F/\mathbb Q$. Multiplicativity of ramification indices in towers [F10] then shows it is unramified in each $K_j/\mathbb Q$. [F8, F9, F10, given, step 1.3, algebra]

3.1 Substituting $r_1=0$, $r_2=1$, $h_K=1$ from step 2.1, $R_K=1$ from step 2.2, $w_K=4$ from step 1.2, and $|d_K|=4$ from step 1.1 into [F6] gives $\operatorname{Res}_{s=1}\zeta_{\mathbb Q(i)}(s)=2\pi/(4\sqrt4)=\pi/4$. [A1, F1, F3, F4, F5, F6, step 1.1, step 1.2, step 2.1, step 2.2, algebra]

3.2 Choose a prime $\mathfrak Q$ of $F$ above $5$ and let $\sigma$ be its arithmetic Frobenius. For $d\in\{2,3,6\}$, [F11] says the restriction of $\sigma$ to $K_d=\mathbb Q(\sqrt d)$ is Frobenius at $\mathfrak Q\cap\mathcal O_{K_d}$. The residue of $\sqrt d$ modulo $\mathfrak Q$ is nonzero, since otherwise $d\in\mathfrak Q\cap\mathbb Z=5\mathbb Z$, contradicting $5\nmid d$. Hence $\sigma(\sqrt d)\equiv(\sqrt d)^5=d^2\sqrt d\pmod{\mathfrak Q}$. The two residues $\pm\sqrt d$ are distinct because $2\sqrt d\not\equiv0\pmod{\mathfrak Q}$; as $2^2\equiv3^2\equiv-1\pmod5$ and $6^2\equiv1\pmod5$, the restrictions are nontrivial on $K_1,K_2$ and trivial on $K_3$. [F7, F11, given, step 1.3, step 2.3, algebra]

4.1 Frobenius elements above $5$ are conjugate by [F11]; since $V_4$ is abelian, all have the same order and restrictions found in step 3.2. In $F/\mathbb Q$ the Frobenius has order $2$ and $e=1$ by step 2.3, so [F10] gives $f=2$, $g=4/(1\cdot2)=2$, and $Z_{F,5}(s)=(1-5^{-2s})^{-2}$ by [F12]. In $K_1,K_2$ it has order $2$, so $f=2$, $g=1$, and $Z_{K_1,5}(s)=Z_{K_2,5}(s)=(1-5^{-2s})^{-1}$. In $K_3$ it is the identity, so $f=1$, $g=2$, and $Z_{K_3,5}(s)=(1-5^{-s})^{-2}$. Finally $Z_{\mathbb Q,5}(s)=(1-5^{-s})^{-1}$. [F7, F10, F11, F12, step 2.3, step 3.2]

5.1 Multiplying the four local factors from step 4.1 gives both products in the statement equal to $(1-5^{-s})^{-2}(1-5^{-2s})^{-2}$. Step 3.1 proves the residue claim, so both assertions in the example hold. [F6, F12, step 3.1, step 4.1, algebra] ∎

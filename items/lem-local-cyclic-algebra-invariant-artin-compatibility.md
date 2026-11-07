---
dependency_level: 13
id: lem-local-cyclic-algebra-invariant-artin-compatibility
kind: lemma
title: Cyclic-algebra invariants evaluate the canonical local Artin character
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- def-local-artin-reciprocity-map
- lem-canonical-local-reciprocity-from-cyclic-character-pairings
- lem-finite-galois-factor-set-obstruction
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- cor-local-brauer-invariant-under-choice
- thm-fundamental-theorem-of-finite-galois-theory
- thm-normal-subgroups-and-quotients-in-the-galois-correspondence
- thm-primitive-element-theorem-for-finite-separable-extensions
justified_by: []
proof_strategy: direct
axiom_use: AC and DC are explicit hypotheses of the classical Brauer comparison and
  canonical local Artin construction, with their supplied cohomology convention. No
  unqualified or DC-only existence claim is inferred.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterIII §4 and ChapterIV
      §3; adapted finite cyclic cochain comparison
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: The actual local argument below uses proved canonical character and crossed-product
      suppliers, fixes b=-o and the positive carry explicitly, and imports no global
      reciprocity theorem.
verification: {}
---

## Statement

Assume AC and DC with the supplied cohomology conventions. Let $K$ be a complete discretely valued field with finite residue field, of arbitrary characteristic. Let $E/K$ be a given cyclic separable extension of degree $n\ge1$, with generator $\sigma$, and let $a\in K^\times$. Define the cyclic algebra by
$$A(E,\sigma,a)=\bigoplus_{i=0}^{n-1}Eu^i,\qquad ux=\sigma(x)u,\qquad u^n=a.$$
Use the standard Brauer comparison $b=-o$, where $o$ is the matrix-descent obstruction, and the local invariant $I_K=\operatorname{inv}_K\circ b_K$. If $\chi(\sigma)=1/n+\mathbb Z$, then
$$I_K([A(E,\sigma,a)])=\chi\bigl(\operatorname{rec}_K(a)|_E\bigr).$$
Here $\operatorname{rec}_K$ is the distinguished canonical local Artin map. Thus if its restriction is $\sigma^r$, the invariant is $r/n+\mathbb Z$. When $E/K$ is unramified and $\sigma$ is arithmetic Frobenius, this is $v_K(a)/n+\mathbb Z$. There is no condition excluding degrees divisible by $\operatorname{char}K$; the given extension must be cyclic and separable, not Kummer.

For any finite abelian $L/K$ and character $\psi:\operatorname{Gal}(L/K)\to\mathbb Q/\mathbb Z$, define $C(\psi,a)$ by its cyclic quotient $E=L^{\ker\psi}$ and the generator with character value $1/[E:K]$. For the zero character use the scalar algebra $K$. Then
$$I_K([C(\psi,a)])=\psi\bigl(\operatorname{rec}_K(a)|_L\bigr).$$

The formula has the following exact scalar-localization meaning. For any field embedding $F\hookrightarrow K$, cyclic separable $E/F$ with generator $\sigma$, and $a\in F^\times$, choose a compatible embedding $E\hookrightarrow K_s$ and put $M=KE$. Via the restriction inclusion $D=\operatorname{Gal}(M/K)\hookrightarrow\operatorname{Gal}(E/F)$, one has
$$I_K([A(E,\sigma,a)\otimes_F K])=(\chi|_D)\bigl(\operatorname{rec}_K(a)|_M\bigr),\qquad\chi(\sigma)=1/[E:F].$$
In particular this applies to actual finite-place number-field completions, even when the decomposition degree is smaller than $[E:F]$. The formulas include the trivial extension and zero character. No global invariant sum-zero or global reciprocity assertion is made.

## Facts & Assumptions

**Given:** The fields, algebras, normalized invariant and distinguished local Artin map in the Statement, under AC/DC and the supplied cohomology convention.

[A1] AC and DC are explicit assumptions for the accepted algebra/cohomology comparison and canonical Artin existence. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Continuous normalized inhomogeneous cochains have their explicit differential; inflation is composition with a quotient and coefficient inclusion. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F2] The actual distinguished Artin map satisfies $\operatorname{inv}_K(a\smile\delta\xi)=\xi(\operatorname{rec}_K(a))$ for every finite-order continuous character $\xi$, with coefficient pairing $(a,m)\mapsto a^m$. Its construction proves this property and the arithmetic unramified Frobenius normalization under AC/DC. [[def-local-artin-reciprocity-map]] [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F3] For a normalized cocycle $c$, the crossed product has $u_gx=g(x)u_g$, $u_gu_h=c(g,h)u_{gh}$; it is central simple, split by the given finite Galois field, and $o(A(c)^{\mathrm{op}})=[c]$. [[lem-finite-galois-factor-set-obstruction]]

[F4] The standard comparison is $b=-o$, satisfies $b([A(c)])=[c]$, and commutes with inflation and arbitrary field scalar extension. Its actual splitting matrices give the restricted factor set with coefficient inclusion. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F5] The AC/DC classical local invariant is exactly $I_K=\operatorname{inv}_K\circ b_K$, with that same standard crossed-product sign. [[cor-local-brauer-invariant-under-choice]]

[F6] Finite Galois fixed fields and normal quotients give the corresponding intermediate extensions and quotient groups. Every finite separable extension is simple. [[thm-fundamental-theorem-of-finite-galois-theory]] [[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]] [[thm-primitive-element-theorem-for-finite-separable-extensions]]

## Proof

**Proof technique:** identify the literal positive carry factor set of the algebra, apply the canonical character property, and retain the actual restricted cochain on scalar extension.

**Given:** The data above.

1.1 First let $n>1$. For $0\le i<n$, lift $\chi(\sigma^i)$ to $f(\sigma^i)=i/n\in\mathbb Q$. The trivial action on $\mathbb Z$ and [F1] give $q(i,j)=f(\sigma^i)+f(\sigma^j)-f(\sigma^{i+j\bmod n})=\lfloor(i+j)/n\rfloor$. Cancellation of the four terms of the differential gives the integer cocycle identity. Since $a$ is fixed, $c(i,j)=a^{q(i,j)}$ is a normalized multiplicative cocycle. It is exactly $a\smile\delta\chi$ for the pairing in [F2]. Inflating $f$ to $G_K$ and then differentiating is the same as inflating $q$; coefficient inclusion gives exactly $c$ in $K_s^\times$. These cochains are continuous because they factor through a finite quotient. Replacing $f$ by $f+z$ for an integer function $z$ multiplies $c$ by the coboundary $\delta(a^z)$, so its class is independent of the lift. All divisions by $n$ took place in the coefficient group $\mathbb Q$, not in $K$. [A1, F1, F2, given, construct, algebra]

2.1 In [F3]'s crossed product for this $c$, put $u=u_\sigma$. Before the $n$th multiplication no carry occurs, so $u^i=u_{\sigma^i}$ for $0\le i<n$; at the $n$th multiplication exactly one carry occurs, giving $u^n=a$. Also $ux=\sigma(x)u$. Conversely those cyclic relations give $u^iu^j=a^{\lfloor(i+j)/n\rfloor}u^{i+j\bmod n}$. Thus the algebra in the Statement is precisely $A(c)$ on its displayed $E$-basis. It is central simple and split by $E$ by [F3], and [F4] sends its class to positive $[c]$. This last sign uses $o(A(c)^{\mathrm{op}})=[c]$ and $b=-o$; applying the raw obstruction $o$ instead would give the negative class. [F3, F4, step 1.1, given, construct, algebra]

3.1 The character $\widetilde\chi$ obtained by inflating $\chi$ to $G_K$ is continuous of finite order. Steps 1.1 and 2.1 and [F5] give $I_K([A])=\operatorname{inv}_K([\operatorname{Inf}c])=\operatorname{inv}_K(a\smile\delta\widetilde\chi)$. By the actual defining property [F2], this equals $\widetilde\chi(\operatorname{rec}_K(a))=\chi(\operatorname{rec}_K(a)|_E)$. The construction in [F2] proves existence under [A1]; this is not a uniqueness inference from Frobenius normalization alone. No finite fundamental-class choice or mixed Tate cup-product identity is needed. [A1, F2, F5, step 1.1, step 2.1, given, algebra]

4.1 For $n=1$ take $f=q=0$ and $c=1$; the algebra is $K$, and its invariant and character value are both zero. For an unramified extension with $\sigma=\operatorname{Frob}_K$, [F2]'s actual normalization gives $\operatorname{rec}_K(a)|_E=\sigma^{v_K(a)}$, so step 3.1 yields $+v_K(a)/n$. A uniformizer therefore has invariant $+1/n$, fixing the sign also in degrees greater than two. The same convention with generator $\sigma^{-1}$ replaces the character by its negative. This sign check uses the given multiplication convention, not a degree-two coincidence. [F2, F3, F5, step 3.1, given, algebra]

4.2 A character $\psi$ of a finite abelian group has cyclic image: if its order is $m$, its image lies in $\frac1m\mathbb Z/\mathbb Z$. The gcd of $m$ and the integer numerators of that finite image is one: a larger gcd would give a smaller positive integer annihilating the character. Bezout therefore puts $1/m$ in the image, so the image is the entire cyclic group of $m$ elements. Hence for $m>1$, [F6] gives the cyclic extension $E=L^{\ker\psi}$ and a generator with character value $1/m$. The rational lift on that quotient inflates to exactly the same cochain on $\operatorname{Gal}(L/K)$ and then $G_K$. Applying step 3.1 proves the stated formula for $C(\psi,a)$; for $m=1$ the scalar algebra gives zero. On a fixed cyclic group of degree $n$, a character with value $k/n$ at $\sigma$ can instead be lifted by $f(\sigma^i)=ki/n$. Its differential is $k$ times the carry, so $A(E,\sigma,a^k)$ has its required value. Least-fractional lifts differ only by the explicit integer-function coboundary in step 1.1. This includes nonfaithful and zero characters. [F1, F2, F6, step 1.1, step 3.1, given, construct, algebra]

4.3 For the scalar clause, choose a primitive presentation of $E/F$ by [F6]. Its separable defining polynomial stays separable after extending coefficients to $K$, so it has a root in $K_s$ and gives a compatible embedding of $E$. Because $E/F$ is normal, all its conjugate roots are already in that embedded $E$, so $M=KE$ is the finite Galois splitting field over $K$. Restriction embeds $D=\operatorname{Gal}(M/K)$ into $\operatorname{Gal}(E/F)$. The actual scalar-extension formula in [F4] gives $b_K([A\otimes_F K])$ as inflation of the cochain $c|_{D\times D}$ with coefficient inclusion. This is the differential of $f|_D$ under the same power pairing, whether or not the restricted character is faithful. By [F2] its invariant is precisely $(\chi|_D)(\operatorname{rec}_K(a)|_M)$. Thus localization uses the actual character restriction and the actual coefficient map, not an assumed reciprocity functoriality. [A1, F1, F2, F4, F5, F6, step 1.1, step 2.1, step 3.1, given, construct, algebra]

5.1 Write $m=|D|$ and $n=[E:F]$ in step 4.3. The inverse image of $D$ in $\mathbb Z$ is $r\mathbb Z$ with $r\mid n$ and $m=n/r$; hence $D=\langle\tau\rangle$ with $\tau=\sigma^{n/m}$. Restricting the lift gives $f(\tau^i)=i/m$ for $0\le i<m$, so its restricted carry is exactly the degree-$m$ positive carry. For $m=1$ this is zero, including split completions. Different compatible embeddings change the decomposition description by conjugation in the cyclic group, which does not change the restricted character or the scalar algebra class. Consequently the scalar identity is intrinsic and applies at number-field finite places with any decomposition-degree drop. Every calculation above used a given cyclic separable extension and the coefficient groups $\mathbb Z,\mathbb Q,\mathbb Q/\mathbb Z$; none used Kummer roots, $\mu_n\subset K$, or division by $n$ in $K$. Thus all characteristics and degrees, including $p\mid n$ in characteristic $p$, are covered. The finite-residue hypothesis is not extended to archimedean fields, and no global sum-zero, norm-index, reciprocity or existence claim is inferred. [A1, F1, F4, F6, step 4.1, step 4.2, step 4.3, given, algebra] ∎

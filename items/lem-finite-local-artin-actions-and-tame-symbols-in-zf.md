---
id: lem-finite-local-artin-actions-and-tame-symbols-in-zf
kind: lemma
title: Finite local Artin actions and tame symbols in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - thm-local-brauer-invariant-for-finite-residue-local-field
  - def-local-invariant-map-of-the-brauer-group
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - def-local-artin-reciprocity-map
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - lem-prime-to-n-roots-of-unity-reduce-injectively
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Class Field Theory, version4.03
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: ChapterVIII5, tame power-residue formula; finite character construction and the required cochain signs are supplied explicitly here
---

## Statement

Work in ZF. Let $K$ be a complete DVR fraction field with finite residue field $k$ of order $q$ and characteristic $p$. Every finite abelian extension $E/K$ has a canonical finite Artin homomorphism $R_{E/K}:K^\times\to\operatorname{Gal}(E/K)$ characterized by
$$\chi(R_{E/K}(b))=\operatorname{inv}_K([b^{\delta\widetilde\chi}])$$
for every character $\chi:\operatorname{Gal}(E/K)\to\mathbb Q/\mathbb Z$, using its rational representatives in $[0,1)$, finite normalized cochains and the supplied algebraic Brauer invariant. The maps are compatible with finite subextensions. When a canonical full local Artin map is supplied, these are its finite restrictions. No full separable closure or infinite Artin-map existence is asserted.

If $p\nmid n$ and $|\mu_n(K)|=n$, the action on $\alpha^n=a$ gives a root-independent value $H_n(a,b)=R_{K(\alpha)/K}(b)(\alpha)/\alpha$. Write $r=v(a)$ and $s=v(b)$. Then
$$\overline{H_n(a,b)}=\left(\overline{(-1)^{rs}a^s/b^r}\right)^{(q-1)/n},$$
where the argument of the residue bar is a unit. Reduction is injective on $\mu_n(K)$, so this formula determines $H_n(a,b)$ in ZF using only $r,s$ and one finite residue-field value. In particular it is1 when $a$ and $b$ are units, and $n=1$ gives1. These finite actions supply exactly the prime-to-$p$ root evaluations in a norm-residue product, without assuming a choice-free construction of the entire local Artin map.

## Facts & Assumptions

**Given:** Exactly the local field, actual finite extensions and prime-to-$p$ root data in the Statement. No choice axiom or absolute Galois-cohomology comparison is assumed.

[F1] The algebraic local Brauer invariant exists in ZF and is an isomorphism to $\mathbb Q/\mathbb Z$. On an unramified cyclic carry class of degree $d$ with parameter $b$, its normalization gives $v(b)/d$. [[thm-local-brauer-invariant-for-finite-residue-local-field]] [[def-local-invariant-map-of-the-brauer-group]]

[F2] Finite normalized $H^2$ identifies with relative algebraic Brauer classes, with crossed-product multiplication cocycle $c$ sent to $[c]$, compatibly with enlargement and scalar extension. These finite assertions need no choice axiom; the absolute comparison is not used. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F3] The defining finite-character property of a supplied full canonical local Artin map is exactly the equality in the Statement. Its existence under AC/DC is not invoked. [[def-local-artin-reciprocity-map]]

[F4] Finite unramified extensions and their arithmetic Frobenius are obtained from finite residue extensions. A simple residue root has a unique Hensel lift. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F5] For $n$ prime to the residue characteristic, reduction embeds $\mu_n(K)$ into $k^\times$ and $n\mid(q-1)$. [[lem-prime-to-n-roots-of-unity-reduce-injectively]]

## Proof

1.1 Finite abelian biduality requires no choice. A character on a subgroup $B$ of a finite abelian group $A$ extends across one element $h$: if $d$ is the least positive integer with $dh\in B$, choose a rational class $y$ with $dy=\chi(dh)$ and put $\chi'(b+jh)=\chi(b)+jy$. This is well defined by that least relation; a rational lift divided by $d$ supplies $y$. Induct over the finite number of missing elements. In particular characters separate points, by extending the character $g\mapsto1/\operatorname{ord}(g)$ on a cyclic subgroup. Restriction onto a subgroup is onto, with kernel the characters of the quotient. For a cyclic group of order $d$, the characters are exactly its $d$ possible rational-class generator values. Induction on the group order using a proper nontrivial cyclic subgroup in the noncyclic case therefore gives $|\widehat A|=|A|$, where every character value lies in $(1/|A|)\mathbb Z/\mathbb Z$ and the character set is finite. Applying the same to $\widehat A$, the injective evaluation map $A\to\widehat{\widehat A}$ is a bijection. [given, construct, algebra]

1.2 For $A=\operatorname{Gal}(E/K)$ and a character $\chi$, take its uniquely specified rational lift $f$ into $[0,1)$. Its coboundary $\delta f(g,h)=f(g)+f(h)-f(gh)$ is integer valued, and $c_{\chi,b}(g,h)=b^{\delta f(g,h)}$ is a normalized $E^\times$-cocycle. By [F1]–[F2] it gives $\lambda_b(\chi)=\operatorname{inv}_K([c_{\chi,b}])$. Changing lifts multiplies the cocycle by an explicit coboundary. Adding characters adds their lifts up to an integer-valued function, so $\lambda_b$ is additive in $\chi$. It is additive in the multiplicative parameter $b$ as well. Step 1.1 therefore gives a unique $R_{E/K}(b)\in A$ with evaluations $\lambda_b$, and this is a homomorphism. Pullback of characters along a finite quotient and finite cocycle inflation prove subextension compatibility by [F2]. By [F3] it is the restriction of any supplied full canonical Artin map. Here the finite algebraic and cohomological invariant values agree without an absolute comparison theorem: [F1] represents an algebraic class at a finite unramified splitting level, where both invariants are valuation divided by degree; [F2] identifies their values after any finite common enlargement. Only these finite classes enter the character property. This constructs one finite map using a finite bidual; it does not take an inverse limit of choices of algebraic closures or automorphisms. [F1, F2, F3, step 1.1, construct, algebra]

2.1 For a finite unramified cyclic extension of degree $d$, choose its arithmetic Frobenius generator. For its character with value $1/d$ on that generator, [F1] makes $\lambda_b=v(b)/d$. Thus $R_{E/K}(b)=\operatorname{Frob}^{v(b)}$. For a unit $u$ and $p\nmid n$, reduction of $X^n-u$ is separable; adjoining its residue roots and Hensel lifting by [F4] shows that $K(u^{1/n})/K$ is unramified. It is abelian because all $n$-th roots of unity are in $K$. If $s=v(b)$, the Frobenius ratio on a root has residue $\bar u^{(q-1)/n}$. By [F5] it determines the unique root $\rho_n(u)\in\mu_n(K)$, and
$$H_n(u,b)=\rho_n(u)^s.$$
In particular all unit parameters in the second entry act trivially on this unramified extension. [F1, F4, F5, step 1.2, given, construct, algebra]

2.2 The finite root action makes $H_n$ bilinear, independent of its chosen root: replacing a root by $\zeta$ times that root changes no ratio because $\zeta\in K$. Multiplication of first-entry roots and compatibility from step 1.2 give first-entry multiplicativity. Its skew-symmetry can be checked in the common finite Kummer extension generated by roots $\alpha^n=a$ and $\beta^n=b$. Choose a primitive $\zeta\in\mu_n$, and let $x_g,y_g\in\{0,\ldots,n-1\}$ give their Kummer ratios. Such a primitive root exists by finite group algebra: take maximal prime-power orders, multiply their primary components, and use that a degree-$m$ polynomial has at most $m$ roots. Put
$$A(g,h)=\zeta^{x_gy_h},\quad B(g,h)=\zeta^{y_gx_h},\quad c(g,h)=b^{(x_g+x_h-x_{gh})/n}.$$
The finite cochains $t(g)=\beta^{x_g}$ and $h(g)=\zeta^{x_gy_g}$ satisfy $\delta t=Bc$ and $\delta h=(AB)^{-1}$, so $[c]=[A]$ by [F2]. The swapped calculation identifies the second symbol with $[B]$. Since $AB$ is a coboundary, applying [F1] and the character property in step 1.2 gives $H_n(a,b)H_n(b,a)=1$. This uses only one finite Kummer extension and its explicit cochains. [F1, F2, step 1.2, given, construct, algebra]

3.1 Let $\pi$ be a uniformizer. The polynomial $X^n-\pi$ is Eisenstein (the DVR content lemma follows by reducing primitive polynomials, so a monic field factorization has integral monic factors): a factorization into monic positive-degree polynomials would, on reduction, make each factor a power of $X$, forcing both constant coefficients divisible by $\pi$ although their product has valuation1. Thus $E=K(\pi^{1/n})$ has degree $n$, is cyclic, and $N_{E/K}(\pi^{1/n})=(-1)^{n-1}\pi$. Norms kill the finite action on this cyclic extension without a norm-kernel theorem: if $z\in E^\times$ and $N(z)=b$, the cochain $k(\sigma^i)=\prod_{j<i}\sigma^j(z)$ has coboundary $b$ on carry pairs $i+j\ge n$, and1 otherwise. This makes the cyclic character carry class zero; all characters are its multiples. By step 1.2 the finite action of $b$ is trivial. Apply it to that explicit norm. Bilinearity, skew-symmetry and step 2.1 now give
$$H_n(\pi,\pi)=\rho_n(-1).$$
Indeed $1=H_n(\pi,(-1)^{n-1}\pi)$, so the self-factor is $\rho_n(-1)^{n-1}$; this equals $\rho_n(-1)$ when $n$ is even, and both sides are1 when $n$ is odd (or the residue characteristic is2). [F1, F2, F5, step 1.2, step 2.1, step 2.2, construct, algebra]

3.2 Write $a=\pi^r u$ and $b=\pi^s v$ with units $u,v$. The preceding bilinear identities give
$$H_n(a,b)=\rho_n(-1)^{rs}\rho_n(u)^s\rho_n(v)^{-r}.$$
Reducing gives exactly the displayed formula. Since $a^s/b^r=u^s/v^r$, the result is independent of the uniformizer. Reduction identifies the $n$ global roots already in $K$ with the $n$ residue roots, so the output exists and is unique in that finite set. This constructs all required finite prime-to-$p$ evaluations directly from residue data. The trivial $n=1$ case has the zero character and every factor1. [F5, step 2.1, step 2.2, step 3.1, algebra] ∎

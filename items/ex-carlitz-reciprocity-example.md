---
id: ex-carlitz-reciprocity-example
kind: example
title: "Carlitz module as an explicit reciprocity example"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-function-field-coefficient-ring
  - def-finite-field-and-its-order
  - def-drinfeld-module-over-an-a-field
  - def-rank-of-a-drinfeld-module
  - thm-drinfeld-tate-module-is-a-galois-representation
  - def-decomposition-and-inertia-groups-for-global-function-fields
  - def-axiom-of-choice
  - thm-universal-property-of-a-polynomial-ring
  - def-unique-factorisation-domain
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - lem-gauss-lemma-over-a-ufd
  - thm-polynomial-quotient-is-a-field-iff-irreducible
  - def-integral-ring-extension
  - thm-finite-galois-extension-characterizations
  - def-finite-galois-extension-and-galois-group
  - thm-lying-over
  - cor-orders-of-decomposition-and-inertia-groups
  - thm-unramified-frobenius-element-exists-uniquely
  - def-arithmetic-frobenius-coset
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §§3.8 and 5"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
    - title: "Mihran Papikian, An Overview of the Theory of Drinfeld Modules, §§1.3 and 3.2"
      url: "https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf"
    - title: "Roland Auer, Ray Class Fields of Global Function Fields with Many Rational Places, Part I §3"
      url: "https://webdoc.sub.gwdg.de/ebook/dissts/Oldenburg/Auer1999.pdf"
verification: {}
---

## Example

Let $q$ be a prime power, $A=\mathbb F_q[T]$, $K=\mathbb F_q(T)$ with $A$ acting by inclusion, and fix a separable closure $K^{\mathrm{sep}}$. Let $C:A\to K\{\tau\}$ be the unique unital $\mathbb F_q$-algebra map with $C_T=T+\tau$ and $\tau c=c^q\tau$; its rank-one condition is $\deg_\tau(C_f)=\deg f$ for every $0\ne f\in A$. For $a\in A$, put $C[a]=\{x\in K^{\mathrm{sep}}:C_a(x)=0\}$, where $C_a(X)$ is the additive polynomial associated to $C_a$, and for an ideal $I\subset A$ put $C[I]=\{x\in K^{\mathrm{sep}}:C_a(x)=0\text{ for every }a\in I\}$. Let $L=K(C[(T)])$ be the field generated over $K$ by the $T$-torsion. Then $\operatorname{Gal}(L/K)$ acts faithfully on the one-dimensional $A/(T)$-module $C[(T)]$ and this action identifies the group canonically with $(A/(T))^\times=\mathbb F_q^\times$. For each monic irreducible $Q\in A$ with $Q\ne T$ and each nonzero prime $P$ in the integral closure of $A$ in $L$ lying above $(Q)$, the extension is unramified at $P$ (meaning its ramification index is $1$), and arithmetic Frobenius (the element reducing to $x\mapsto x^{|A/(Q)|}$) acts on $C[(T)]$ as $C_Q$; equivalently, if $\alpha\ne0$ satisfies $C_T(\alpha)=0$, then $\operatorname{Frob}_P(\alpha)=Q(0)\alpha$. Such a prime $P$ exists for every $Q$ under AC. Assuming AC, for each nonzero prime $\mathfrak l\subset A$, let $A_{\mathfrak l}=\varprojlim_n A/\mathfrak l^n$, $D_{\mathfrak l}=\bigcup_n C[\mathfrak l^n]$, where $C[\mathfrak l^n]=\{x\in K^{\mathrm{sep}}:C_a(x)=0\text{ for every }a\in\mathfrak l^n\}$, and $T_{\mathfrak l}(C)=\operatorname{Hom}_{A_{\mathfrak l}}(\operatorname{Frac}(A_{\mathfrak l})/A_{\mathfrak l},D_{\mathfrak l})$. This Tate module is a free rank-one $A_{\mathfrak l}$-module with continuous action of $G_K=\operatorname{Gal}(K^{\mathrm{sep}}/K)$.

## Example references

[[def-function-field-coefficient-ring]]

[[def-drinfeld-module-over-an-a-field]]

[[def-rank-of-a-drinfeld-module]]

[[thm-drinfeld-tate-module-is-a-galois-representation]]

[[def-decomposition-and-inertia-groups-for-global-function-fields]]

Bjorn Poonen, *Introduction to Drinfeld Modules*, §§3.8 and 5: https://math.mit.edu/~poonen/papers/drinfeld.pdf

Mihran Papikian, *An Overview of the Theory of Drinfeld Modules*, §§1.3 and 3.2: https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf

Roland Auer, *Ray Class Fields of Global Function Fields with Many Rational Places*, Part I §3, printed pp. 19–20: https://webdoc.sub.gwdg.de/ebook/dissts/Oldenburg/Auer1999.pdf

## Facts & Assumptions

**Given:** A prime power $q$, $A=\mathbb F_q[T]$, $K=\mathbb F_q(T)$ with the identity A-field structure, and the assignment $T\mapsto T+\tau$ in the skew-polynomial ring with $\tau c=c^q\tau$. Assume AC only for the existence of places above finite primes and for the Tate-module statement.

[F1] [[def-function-field-coefficient-ring]]: For $A=\mathbb F_q[T]$, $\deg_A(f)=\deg f$ for nonzero $f$ and $|f|=q^{\deg_A(f)}$.

[F2] [[def-finite-field-and-its-order]]: $\mathbb F_q$ is a field with $q$ elements.

[F3] [[def-drinfeld-module-over-an-a-field]]: A Drinfeld $A$-module over an $A$-field $M$ is an injective unital $\mathbb F_q$-algebra homomorphism $A\to M\{\tau\}$ whose differential is the $A$-field structure.

[F4] [[def-rank-of-a-drinfeld-module]]: Rank $r$ means $\deg_\tau(C_f)=r\deg_A(f)$ for every nonzero $f\in A$.

[A1] [[def-axiom-of-choice]]: AC gives a prime above each $(Q)$ by lying-over and supplies the axiom assumed by the Tate-module theorem.

[F5] [[thm-drinfeld-tate-module-is-a-galois-representation]]: Under AC, for a Drinfeld module of rank $r$ and a prime $\mathfrak l$ away from its $A$-characteristic, $T_{\mathfrak l}(C)$ is free of rank $r$ over $A_{\mathfrak l}$ and has a continuous $A_{\mathfrak l}$-linear action of the absolute Galois group.

[F6] [[def-unique-factorisation-domain]]: A UFD is an integral domain in which nonzero nonunits factor uniquely into irreducibles, up to order and associates.

[F7] [[thm-polynomial-ring-over-a-field-is-a-ufd]]: The polynomial ring $\mathbb F_q[T]$ is a UFD.

[F8] [[lem-gauss-lemma-over-a-ufd]]: A primitive positive-degree polynomial over a UFD is irreducible over the UFD exactly when it is irreducible over its fraction field.

[F9] [[thm-finite-galois-extension-characterizations]]: A finite extension is Galois if it is the splitting field of a separable polynomial; for such an extension, the automorphism group has order equal to the extension degree.

[F10] [[def-finite-galois-extension-and-galois-group]]: For a finite Galois extension $L/K$, $\operatorname{Gal}(L/K)=\operatorname{Aut}(L/K)$.

[F11] [[thm-lying-over]]: Under AC, an integral ring extension has a prime above every prime of the base.

[F12] [[cor-orders-of-decomposition-and-inertia-groups]]: For a finite Galois extension and a prime $P$ above $p$, the inertia subgroup is trivial exactly when the ramification index $e(P/p)$ is $1$.

[F13] [[thm-unramified-frobenius-element-exists-uniquely]]: If $e(P/p)=1$, there is a unique arithmetic Frobenius in the decomposition group, and its action on integral elements reduces to $x\mapsto x^{|\kappa(p)|}$.

[F14] [[def-arithmetic-frobenius-coset]]: Arithmetic Frobenius is the residue power map $x\mapsto x^{|\kappa(p)|}$; geometric Frobenius is its inverse.

[F15] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]: A finite extension of $\mathbb F_q$ of degree $d$ is Galois with cyclic group generated by $x\mapsto x^q$.

[F16] [[thm-universal-property-of-a-polynomial-ring]]: A choice of image for $T$ in an $\mathbb F_q$-algebra extends uniquely to an $\mathbb F_q$-algebra homomorphism from $\mathbb F_q[T]$.

[F17] [[def-integral-ring-extension]]: The integral closure of $A$ in a field extension consists of elements satisfying monic polynomials over $A$, and its inclusion over $A$ is integral.

[F18] [[thm-polynomial-quotient-is-a-field-iff-irreducible]]: For a nonconstant polynomial over a field, its polynomial quotient is a field exactly when the polynomial is irreducible.

[F19] [[def-decomposition-and-inertia-groups-for-global-function-fields]]: For a finite Galois extension of global function fields and a chosen maximal ideal $P$ above a finite prime $p$, the decomposition group is the stabilizer of $P$ and its inertia subgroup is the kernel of the residue-field action.

## Verification

1.1 By [F16], the assignment $T\mapsto T+\tau$ extends uniquely to a unital $\mathbb F_q$-algebra map $C:A\to K\{\tau\}$. Its differential is $T$. For $f(T)=\sum_{i=0}^m c_iT^i$ with $c_m\ne0$, the composition $C_{T^i}=C_T^{\circ i}$ has top $\tau$-degree $i$ and nonzero leading coefficient; the distinct degrees imply $C_f\ne0$. Thus $C$ is injective by [F3]. Since $\deg_A(f)=\deg f$ by [F1], the same calculation gives $\deg_\tau(C_f)=\deg_A(f)$ for every nonzero $f$, so $C$ has rank one by [F4]. [F1, F3, F4, F16, given, construct, algebra]

1.2 The additive polynomial $C_T(X)=TX+X^q$ has nonzero roots exactly $c\alpha$ for $c\in\mathbb F_q^\times$, where $\alpha^{q-1}=-T$. The polynomial $g(X)=X^{q-1}+T$ is primitive over the UFD $A$ by [F6] and [F7]. If it factored over $K$, [F8] would give a factorization into positive-degree polynomials in $A[X]$; as $g$ is monic, both factors may be chosen monic. Modulo $T$ their product is $X^{q-1}$, so each positive-degree monic factor is a positive power of $X$. Their constant terms are therefore both divisible by $T$, forcing $T^2$ to divide $g(0)=T$, a contradiction. Thus $g$ is irreducible and $[K(\alpha):K]=q-1$. The polynomial $X^q+TX$ has the $q$ distinct roots $0,c\alpha$, all in $L=K(\alpha)$, so [F9] makes $L/K$ its finite Galois splitting field. For every $c\in\mathbb F_q^\times$, sending $\alpha$ to $c\alpha$ defines a $K$-embedding of $K[X]/(g)$ into $L$; its image is $L$ because $\alpha=c^{-1}(c\alpha)$. Thus the automorphisms are exactly $\sigma_c(\alpha)=c\alpha$, and composition multiplies the scalars. The action on $C[T]=\mathbb F_q\alpha$ is faithful because $L=K(C[T])$. Scalar multiplication identifies $\mathbb F_q$ canonically with $\operatorname{End}_A(C[T])$, so this action gives the canonical group isomorphism $\operatorname{Gal}(L/K)\cong\operatorname{Aut}_A(C[T])=(A/(T))^\times$. [F6, F7, F8, F9, F10, given, construct, algebra]

1.3 Since $Q$ is irreducible, [F18] makes $A/(Q)$ a field, so $(Q)$ is prime. The integral closure of $A$ in the finite extension $L$ is integral over $A$ by [F17], so under [A1], [F11] supplies a maximal ideal $P$ above $(Q)$. The decomposition group and inertia subgroup used below are those in [F19]. [A1, F11, F17, F18, F19, given, construct]

2.1 The structure map $A\hookrightarrow K$ is injective, so the $A$-characteristic is zero and every nonzero prime $\mathfrak l$ is away from it. Under [A1], [F5] applies to the rank-one module from step 1.1 and gives the stated free rank-one Tate module and continuous Galois action. [A1, F3, F4, F5, step 1.1, given]

2.2 Each root $c\alpha$ of $g$ is integral over $A$. Since $Q\ne T$, the residue $\bar T$ is nonzero in $A/(Q)$; the equation $\bar\alpha^{q-1}=-\bar T$ shows $\bar\alpha\ne0$. If $c\ne c'$ in $\mathbb F_q^\times$, then $(c-c')\bar\alpha\ne0$, so the reductions of the roots $c\alpha$ are pairwise distinct. By [F19], an inertia element fixes each root's reduction and sends each root to another root; distinct reductions force it to fix every root, hence $\alpha$. Since $L=K(\alpha)$, inertia is trivial; [F12] now gives $e(P/Q)=1$. [F12, F19, step 1.2, step 1.3, algebra]

3.1 Since $Q\ne T$ is irreducible and monic, $Q(0)\ne0$: otherwise $T$ would divide $Q$ and force $Q=T$. By [F13], arithmetic Frobenius $\sigma_Q$ at $P$ reduces on $\alpha$ to $\bar\alpha\mapsto\bar\alpha^{q^d}$, where $d=\deg Q$ and $|A/(Q)|=q^d$. Put $S=1+q+\cdots+q^{d-1}$. The conjugates of $\bar T$ over $\mathbb F_q$ are $\bar T,\bar T^q,\ldots,\bar T^{q^{d-1}}$ by [F15]; their product is $\bar T^S=(-1)^dQ(0)$ by the constant-term formula for $Q$. Therefore $(-\bar T)^S=Q(0)$: if the characteristic is two this is immediate, and otherwise $q$ is odd and $S\equiv d\pmod2$. Using $\bar\alpha^{q-1}=-\bar T$ gives $\bar\alpha^{q^d}=Q(0)\bar\alpha$. Hence $\sigma_Q(\alpha)$ and $Q(0)\alpha$ are roots of $g$ with the same reduction; step 2.2 makes them equal. [F13, F15, step 2.2, algebra]

4.1 Write $Q(T)=\sum_i q_iT^i$. On $C[T]$, $C_T$ acts as zero, so $C_Q=\sum_i q_iC_T^{\circ i}$ acts as multiplication by its constant coefficient $Q(0)$. Thus step 3.1 gives $\sigma_Q(x)=C_Q(x)$ for every $x\in C[T]$. Under the group isomorphism of step 1.2, $\sigma_Q$ corresponds to $Q(0)=Q\bmod T$ in $(A/(T))^\times$. This is the explicit arithmetic Frobenius reciprocity law at modulus $(T)$. [step 1.2, step 3.1, algebra] ∎

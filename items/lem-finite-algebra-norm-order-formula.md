---
id: lem-finite-algebra-norm-order-formula
kind: lemma
title: "Norm and local order for a finite extension of one-dimensional local domains"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-dimension-preserved-by-integral-extensions
  - cor-contraction-of-maximal-ideals-integral-extension
  - cor-length-is-additive-in-short-exact-sequences
  - def-axiom-of-choice
  - def-composition-series-and-length-of-a-module
  - def-extension-degree-and-finite-extension
  - def-finite-type-and-module-finite-algebras
  - def-field-norm-and-trace
  - def-field-of-fractions
  - lem-order-function-one-dimensional-local-domain
  - thm-artinian-ring-characterisation-by-primes
  - thm-artinian-ring-has-finite-length
  - thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.121.8"
      url: "https://stacks.math.columbia.edu/tag/02MJ"
      locator: "Lemma 10.121.8 and its proof; one-dimensional Noetherian local domains and finite extensions"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry, Intersection Theory, Class 2"
      url: "https://math.stanford.edu/~vakil/245/245class2.pdf"
      locator: "§2 zeros and poles (printed pp. 2–3); §4 proper pushforwards (printed pp. 4–5)"
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice. Let $(A,\mathfrak m)$ be a one-dimensional Noetherian local domain with fraction field $K$, and let $A\hookrightarrow B$ be an injective map to a commutative integral-domain $A$-algebra that is finite as an $A$-module. Let $L$ be the fraction field of $B$, so $L/K$ is finite. For $r\in L^\times$, let $N_{L/K}(r)$ be the determinant of multiplication by $r$ on the finite-dimensional $K$-vector space $L$. Then
$$\operatorname{ord}_A(N_{L/K}(r))=\sum_{\mathfrak q\in\operatorname{Max}(B)}[\kappa(\mathfrak q):\kappa(A)]\operatorname{ord}_{B_{\mathfrak q}}(r),$$
where each local order is the length-defined order on its one-dimensional Noetherian local domain.

## Statement references

[Stacks Project, Algebra, Lemma 10.121.8](https://stacks.math.columbia.edu/tag/02MJ)

[Vakil, Intersection Theory, Class 2, §§2 and 4](https://math.stanford.edu/~vakil/245/245class2.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a one-dimensional Noetherian local domain $A$ with maximal ideal $\mathfrak m$ and fraction field $K$, a finite domain extension $A\subseteq B$ with fraction field $L$, and $r\in L^\times$.

[A1] The Axiom of Choice is assumed by the local-order, integral-dimension, and finite-length suppliers used below ([[def-axiom-of-choice]], [[lem-order-function-one-dimensional-local-domain]], [[cor-dimension-preserved-by-integral-extensions]], [[thm-artinian-ring-characterisation-by-primes]], [[thm-artinian-ring-has-finite-length]]).

[F1] In a one-dimensional Noetherian local domain, the order of $a/b\in K^\times$ is $\ell_A(A/aA)-\ell_A(A/bA)$, independent of presentation and additive under multiplication; the relevant quotients have finite length, and length is additive in short exact sequences ([[lem-order-function-one-dimensional-local-domain]], [[cor-length-is-additive-in-short-exact-sequences]]).

[F2] The field norm is the determinant of the multiplication operator on the finite-dimensional vector space ([[def-field-norm-and-trace]]).

[F3] A finite algebra over a Noetherian ring is Noetherian; finite integral extensions preserve dimension; a Noetherian zero-dimensional ring is Artinian and has finite module length ([[thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian]], [[cor-dimension-preserved-by-integral-extensions]], [[thm-artinian-ring-characterisation-by-primes]], [[thm-artinian-ring-has-finite-length]], [[def-composition-series-and-length-of-a-module]]).

[F4] Every maximal ideal of the integral extension $B/A$ lies over the maximal ideal $\mathfrak m$ of $A$; since $B$ is finite over $A$, its residue fields are finite over $\kappa(\mathfrak m) and their vector-space dimensions are the extension degrees ([[cor-contraction-of-maximal-ideals-integral-extension]], [[def-extension-degree-and-finite-extension]]).

[F5] A finite A-algebra is finitely generated as an A-module; localizing the domains $A\subseteq B$ gives the finite field extension $K\subseteq L$ ([[def-finite-type-and-module-finite-algebras]], [[def-field-of-fractions]], [[def-extension-degree-and-finite-extension]]).

## Proof

**Given:** The hypotheses and notation of the Statement.

1.1 Call a finitely generated $A$-submodule $M\subset L$ with $K$-span $L$ a full lattice; it is torsion-free because $M$ lies in the field $L$. Any two full lattices $M,N$ are commensurable: express finite generating lists in the $K$-span of the other lattice and clear their finitely many denominators, obtaining nonzero $c,d\in A$ with $cM\subseteq N$ and $dN\subseteq M$. Thus $M/(M\cap N)$ and $N/(M\cap N)$ are finitely generated modules killed by nonzero elements of $A$; they have finite length by [F1] and [F3]. Define
$$\delta(M,N)=\ell_A(M/(M\cap N))-\ell_A(N/(M\cap N)).$$
For any triple $M,N,P$, the common sublattice $Q=M\cap N\cap P$ gives $\delta(M,N)=\ell_A(M/Q)-\ell_A(N/Q)$, since the length of $(M\cap N)/Q$ cancels from both terms. Therefore $\delta(M,N)+\delta(N,P)=\delta(M,P)$. A $K$-linear isomorphism preserves $\delta$ because it induces isomorphisms on the intersections and quotients. [A1, F1, F3, given, construct, algebra]

1.2 For $x=a/b\in K^\times$ with $a,b\in A\setminus\{0\}$, $A$ and $xA$ are full lattices. Multiplication of both lattices by $b$ preserves $\delta$ and gives $\delta(bA,aA)$. Put $I=aA\cap bA$. The exact sequences for $I\subseteq aA,bA\subseteq A$ and [F1] give
$$\ell_A(bA/I)-\ell_A(aA/I)=\ell_A(A/aA)-\ell_A(A/bA)=\operatorname{ord}_A(a/b).$$
This proves $\delta(A,xA)=\operatorname{ord}_A(x)$, including when either numerator or denominator is a unit. [F1, step 1.1, given, algebra]

2.1 For a $K$-linear automorphism $g$ of $L$, define $\chi(g)=\delta(M,gM)$ using any full lattice $M$. For full lattices $M,N$, additivity from step 1.1 gives $\delta(M,gM)=\delta(M,N)+\delta(N,gN)+\delta(gN,gM)$. Applying $g^{-1}$ to the last pair gives $\delta(gN,gM)=\delta(N,M)$, so the first and last terms cancel and $\delta(M,gM)=\delta(N,gN)$. Thus $\chi$ is independent of $M$. Also $\delta(M,ghM)=\delta(M,gM)+\delta(gM,ghM)$, and applying $g^{-1}$ to the second pair gives $\delta(M,hM)$; hence $\chi(gh)=\chi(g)+\chi(h)$. [step 1.1, given, algebra]

3.1 Choose a $K$-basis identifying $L$ with $K^n$ and take $M=A^n$. For a diagonal matrix $D=\operatorname{diag}(x_1,\ldots,x_n)$, coordinatewise intersections and step 1.2 give $\chi(D)=\sum_i\operatorname{ord}_A(x_i)=\operatorname{ord}_A(\det D)$. For an elementary transvection $E_{ij}(u)$ with $i\ne j$, meaning it adds $u$ times coordinate $j$ to coordinate $i$, the intersection $A^n\cap E_{ij}(u)A^n$ agrees with $A^n$ in every coordinate except the $j$th, where it is $I_u=\{a\in A:ua\in A\}$. The ideal $I_u$ is nonzero because a denominator of $u\in K$ belongs to it, so $A/I_u$ has finite length by [F1] and [F3]. Projection to coordinate $j$ identifies $A^n/(A^n\cap E_{ij}(u)A^n)$ with $A/I_u$; pulling the intersection back by $E_{ij}(u)$ gives the same quotient for $E_{ij}(u)A^n$. Therefore $\chi(E_{ij}(u))=0=\operatorname{ord}_A(\det E_{ij}(u))$. Row swaps preserve $A^n$ and have determinant $\pm1$, of order zero by [F1]. Gaussian elimination over $K$ expresses every invertible matrix as a product of diagonal matrices, transvections, and row swaps. Additivity of $\chi$ and [F1] then give $\chi(g)=\operatorname{ord}_A(\det g)$ for all $g\in\operatorname{GL}_n(K)$. [F1, F3, step 1.2, step 2.1, algebra]

4.1 Let $S=A\setminus\{0\}$. The localization $S^{-1}B$ is a finite-dimensional domain over $K$, hence a field; it lies in $L$ and contains $B$, so it equals $L$. Thus $B$ is a full lattice. Multiplication by $r$ is a $K$-linear automorphism of $L$ carrying this lattice to $rB$. By [F2] its determinant is $N_{L/K}(r)$. Applying step 3.1 to this automorphism gives
$$\operatorname{ord}_A(N_{L/K}(r))=\delta(B,rB).$$
Write $r=a/b$ with $a,b\in B\setminus\{0\}$. Multiplication by $b$ preserves relative indices, so the intersection-length calculation of step 1.2, now for $B$-submodules, gives
$$\delta(B,rB)=\ell_A(B/aB)-\ell_A(B/bB).$$
These lengths exist: by [F3], $B$ is Noetherian of dimension one, and each quotient by a nonzero element is Artinian of finite length over $B$; its residue-field factors have finite degree over $\kappa(A)$ by [F4]. [A1, F2, F3, F4, step 1.2, step 3.1, given, algebra]

5.1 For any nonzero $a\in B$, the finite-length $B$-module $B/aB$ has a composition series with simple factors $\kappa(\mathfrak q)$ for maximal ideals $\mathfrak q$ of $B$. Localizing at $\mathfrak q$ counts exactly the factors isomorphic to $\kappa(\mathfrak q)$, so
$$\ell_A(B/aB)=\sum_{\mathfrak q\in\operatorname{Max}(B)}[\kappa(\mathfrak q):\kappa(\mathfrak m)]\,\ell_{B_{\mathfrak q}}(B_{\mathfrak q}/aB_{\mathfrak q}).$$
Each simple factor has $A$-length $[\kappa(\mathfrak q):\kappa(\mathfrak m)]$ by [F4]. The same formula holds for $b$. Subtracting and using [F1] identifies the right side of step 4.1 with
$$\sum_{\mathfrak q\in\operatorname{Max}(B)}[\kappa(\mathfrak q):\kappa(\mathfrak m)]\operatorname{ord}_{B_{\mathfrak q}}(r).$$
Since $\kappa(A)=\kappa(\mathfrak m)$, this is the sum in the Statement. The sum has finite support: a nonzero local order of $a/b$ requires $\mathfrak q$ to occur in one of the two finite composition series for $B/aB$ and $B/bB$. Combining with step 4.1 proves the formula. [A1, F1, F3, F4, step 4.1, algebra] ∎

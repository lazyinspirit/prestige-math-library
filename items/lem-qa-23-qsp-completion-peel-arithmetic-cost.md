---
id: lem-qa-23-qsp-completion-peel-arithmetic-cost
kind: lemma
title: Arithmetic cost of exact tower completion and QSP phase peeling
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - lem-qa-23-positive-polynomial-complement-factorization
  - thm-qa-23-qsp-phase-factorization
  - lem-qa-23-hermitian-signal-convention-conversion
  - thm-of-square-roots
sources:
  references:
    - title: "Gilyén et al., Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Corollary 10 and constructive discussion, PDF pp.12–14; arithmetic proofs supplied locally."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $h\in\mathbb Q[x]$ be parity-compatible, of degree at most $d$, with $|h|<1$ on $[-1,1]$. Let $H$ bound the binary lengths of every coefficient numerator and denominator of $R=1-h^2$. Suppose its complete exact root list, multiplicities and fixed-precision rational isolating rectangles are supplied. In a model charging ideal exact algebraic field/order/equality operations and permitting finite extension tower/DAG descriptors, root-class completion and QSP phase peeling use $\operatorname{poly}(d,H)$ operations and polynomially many descriptor nodes and written index bits. Positive roots use counted bisection with known rational upper bounds. For a unit peel ratio $r=x+iy$, choose $i$ if $x=-1$ and otherwise $s+iy/(2s)$ with $s=\sqrt{(1+x)/2}>0$; either square root of $r$ gives the exact factorization. Root generation, numerical phase approximation, expanded minimal-polynomial conversion, input encoding/access and operation implementation bit costs remain separate.

## Facts & Assumptions

**Given:** The rational target and supplied complete exact root list in the Statement; rational and algebraic operations, comparisons, and descriptor construction are charged.

[F1] [[lem-qa-23-positive-polynomial-complement-factorization]] gives the complement existence, parity correction and degree bounds. The particular root-class norm identities used for the cost calculation are verified directly below.

[F2] [[thm-qa-23-qsp-phase-factorization]] gives phase factorization of an admissible pair. The unit-ratio and cancellation calculations for the selected root are supplied directly below.

[F3] [[lem-qa-23-hermitian-signal-convention-conversion]] gives the fixed eighth-root multiplications and complete phase-list conversion.

[F4] [[thm-of-square-roots]] gives the positive real square root of a positive real number.

## Proof


1.1 For an exact algebraic $r=x+iy$ with $x^2+y^2=1$, select one square root by: [F2, given]

1.2 If $x=-1$, return $\omega=i$ (then necessarily $y=0$). Otherwise put $s=\sqrt{(1+x)/2}>0$, $t=y/(2s)$, and return $\omega=s+it$. [F4, given, construct]

1.3 Given an existing exact real algebraic value $A\ge0$ and a known rational $U\ge\max(1,\sqrt A)$, compare $A$ with zero. If equal, return rational zero. Otherwise initialize $[l,r]=[0,U]$. While $r-l>1/2$, put $m=(l+r)/2$ and compare $A$ with $m^2$ exactly. Equality returns the rational value $m$. If $A<m^2$, put $r=m$; if $A>m^2$, put $l=m$. After the loop, return the tower descriptor consisting of $T^2-A$ over the existing field and the rational isolating interval $[l,r]$, specifying its unique nonnegative root. [F4, given, construct]

2.1 Here $-1<x\le1$, so the positive square root exists, is nonzero, and has the root-selection description $S^2-(1+x)/2=0$, $0<S<2$ over the existing real algebraic field. Its two roots are distinguished immediately by sign. One has $t^2=(1-x)/2$ because $y^2=(1-x)(1+x)$, whence $s^2+t^2=1$, $s^2-t^2=x$, and $2st=y$. Therefore $|\omega|=1$ and $\omega^2=r$. The $x=1,y=0$ case returns $1$. No small-denominator numerical approximation is performed; the division is exact. There is no conditioning assumption. [F4, step 1.2, algebra]

2.2 For $A>0$, the roots are $\pm\sqrt A$, distinct, and only the positive root belongs to $[0,U]$. The square function is strictly increasing on this nonnegative interval, so each branch preserves $\sqrt A\in[l,r]$ and excludes the negative root. Every iteration halves the width and uses $O(1)$ rational or exact field operations and one exact comparison. Hence the routine uses $O(1+\log U)$ operations/comparisons and writes a degree-two defining equation plus its rational isolator. A root at the original right endpoint is permitted in the closed isolator; the root is still unique. If open endpoints are required, start with $[0,2U]$; this adds at most one iteration and makes the positive root interior unless a midpoint equality has already returned it rationally. [F4, step 1.3, algebra]

2.3 In a model requiring conversion at every step to a rational defining polynomial and a rational isolator, the quadratic relation has an algebraic coefficient. Converting it to a rational defining polynomial requires elimination, and converting all subsequent values into that representation can be expensive. The descriptor routine does not bound that conversion cost. A tower of $d$ quadratic extensions may have degree $2^d$, even though its construction writes only $d$ degree-two tower equations and rational isolators. [step 1.3, given, algebra]

3.1 This replaces a generic call ROOTS($z^2-r$,1) by a constant number of field operations and exact comparisons and the explicit quadratic-root descriptor routine below. It may choose the other square root from the existing lexicographic-rectangle rule. Either root gives the leading-term cancellation and an exact factorization: subsequent phases change coherently with that choice. The synthesis algorithm selects this formula in every mode; the efficient-numerical cost bound here uses its known upper bound rather than a bound search. [F2, step 2.1, algebra]

3.2 For the half-angle radicand $A=(1+x)/2$, one has $0<A\le1$ after the $x=-1$ branch, so $U=1$ is known without search. One bisection suffices for a closed width-$1/2$ isolator; at most two suffice with the open-endpoint initialization. This is an actual counted descriptor-construction loop, not a free ROOTS call or a radical oracle. Subsequent field operations and order/equality queries on these tower values remain the explicit charged primitives of the declared exact algebraic comparison/field model. These are ideal exact equality/order resources charged per use; their implementation is not supplied by the descriptor loop. [step 1.2, step 2.2, algebra]

3.3 Suppose the rational completion polynomial $R$ has nonzero coefficient numerators and denominators of absolute value at most $2^H$. A rational Cauchy bound $B\ge1$ can be chosen with $B\le2^{2H+2}$, because the leading coefficient ratio is at most $2^{2H}$. Every classified root coordinate $s,a,b$ then has absolute value at most $B$. In the exterior class $s\ge1$ and the imaginary class $b>0$, so $0\le s^2-1\le B^2$ and $0<b^2+1\le2B^2$; thus $U=2B$ works. For a quadruple put $D=2(a^2+1)b^2+(a^2-1)^2+b^4$. Then $D\le4B^4+4B^2+1\le9B^4$, so $U=3B^2$ works for $\sqrt D$. Writing $A=a^2+b^2$, direct expansion gives $D=(A-1)^2+4b^2$. Since $b>0$, $c=A+\sqrt D>A+|A-1|\ge1$. Hence $0<c^2-1<c^2\le25B^4$, and $U=5B^2$ works for $\sqrt{c^2-1}$. All these descriptor-construction loops therefore use $O(1+H)$ operations/comparisons per radical. They do not require roots to be well separated, and they do not approximate the input algebraic coordinates. [F1, step 2.2, given, algebra, construct]

4.1 Write $N(B,C)=B^2+(1-x^2)C^2$. Expanding the pair multiplication rule gives $N((B,C)(D,E))=N(B,C)N(D,E)$. The factors $(x,0)$, $(x^2-s^2,0)$, $(\sqrt{s^2-1}x,s)$ and $(\sqrt{b^2+1}x,b)$ have norms respectively $x^2$, $(x^2-s^2)^2$, $s^2-x^2$ and $x^2+b^2$. For a quadruple put $A=a^2+b^2$. Step 3.3 gives $c>1$, and expansion gives $c^2-2Ac-1=-2(a^2-b^2)$. Consequently the pair $(cx^2-A,\sqrt{c^2-1}x)$ has norm $x^4-2(a^2-b^2)x^2+A^2$, the monic polynomial with roots $\pm a\pm ib$. These identities verify the radicands and the norm factors directly. There is also no uncontrolled reciprocal scale hidden in the final $K$. The squared norms of the unscaled elementary factors are, respectively, $x^2$, $(x^2-s^2)^2$, $s^2-x^2$, $x^2+b^2$, and the monic degree-four root polynomial for a quadruple. For the quadruple, the $x^4$ coefficient is $c^2-(c^2-1)=1$. Thus the product norm $G$ has leading coefficient $+1$ or $-1$. If $R$ is nonconstant, its leading coefficient is minus the square of the leading coefficient of the rounded target, and $\kappa>0$ implies $\kappa=|\operatorname{lc}(R)|$. Hence $\kappa\le2^H$, and one can compute the rational upper bound $U=1+|\operatorname{lc}(R)|\le2^{H+1}$ to construct $K=\sqrt\kappa$; alternatively use the absolute value of the target leading coefficient directly. If $R$ is a nonzero constant, $0<R\le1$ and $U=1$ suffices. The unit-norm parity correction does not alter $G$ or this bound. These estimates count only the quadratic descriptors after the exact root list has already been obtained; they supply no bound for generating that root list. [F1, step 3.3, algebra]

4.2 At a nonconstant peel, comparison of the highest coefficients in $PP^*+(1-x^2)QQ^*=1$ forces $\deg Q=\ell-1$ and $|a_\ell|^2=|b_{\ell-1}|^2$, so $b_{\ell-1}\ne0$ and $r=a_\ell/b_{\ell-1}$ is unit. For either unit square root $\omega^2=r$, the leading terms in $P'$ and $Q'$ below are $\overline\omega a_\ell-\omega b_{\ell-1}=0$ and $\omega b_{\ell-1}-\overline\omega a_\ell=0$; parity lowers the resulting degree bounds by one. Direct expansion preserves the admissibility norm identity. The selected root therefore implements the same exact cancellation used for [F2]. Computing it, selecting the unit root above with its counted tower descriptor, and conjugating the root are $O(1)$ charged operations/comparisons. The simultaneous coefficient-array updates $P'=\overline\omega\,xP+\omega(1-x^2)Q$, $Q'=\omega xQ-\overline\omega P$ take $O(n+1)$ field operations at nominal degree $n$. Degree/parity scans take $O(n+1)$ exact comparisons; there are at most $d$ peels. Thus the peel itself takes $O((d+1)^2)$ field operations/comparisons, including the $O(d)$ quadratic-root descriptor constructions. If every full polynomial coefficient identity is recomputed naively after every peel, budget $O((d+1)^3)$ field operations instead; this remains polynomial. Padding and multiplication by the fixed eighth roots of unity use $O(d+1)$ additional operations and at most one fixed $\sqrt2$ descriptor construction with $U=2$. The base constant is already a unit algebraic scalar and needs no Arg oracle. [F2, F3, step 2.1, step 3.2, algebra]

5.1 There are at most $2d$ roots counting multiplicity and therefore $O(d+1)$ elementary complement factors and quadratic descriptors. Schoolbook polynomial-array pair multiplication and final coefficient-identity checks use $O((d+1)^3)$ field operations in total; root classification and symmetry checks use $O((d+1)^2)$ exact comparisons. Each descriptor writes a degree-two equation whose coefficients reference existing nodes, and an isolator of $O(H+1)$ rational bits from its known bounded endpoint. Every field operation writes one referenced node rather than expanding prior expressions. Thus all certificate equations and operation lists have polynomially many nodes, indices and bits in $d,H$; the supplied root descriptors are referenced. These are arithmetic/descriptor costs, and make no claim about implementing the ideal equality/order tests or field operations. [F1, step 2.2, step 3.3, step 4.1, step 4.2, algebra] ∎


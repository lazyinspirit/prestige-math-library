---
dependency_level: 1
id: lem-infinite-derivative-jets-split-a-purely-inseparable-jet-curve
kind: lemma
title: Infinitely many derivative jets split a purely inseparable jet curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-function-field-coordinate-derivations-and-constant-kernel
  - def-derivation-algebra
  - thm-differentials-smooth-locally-free
  - lem-ag-differentials-transitivity
  - thm-regular-local-rings-are-normal
  - thm-ag-standard-smooth-geometric-regularity
  - lem-finite-morphism-affine
  - thm-finite-morphism-integral-closed
  - thm-normality-is-local-for-domains
  - thm-affine-scheme-ring-anti-equivalence
  - lem-curve-closed-subsets-finite
  - thm-purely-inseparable-extension-characterizations
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §§2–3, printed pp. 69–75; jet-coordinate refinement"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
    - title: "Hans Grauert, Mordells Vermutung, §3, printed pp. 140–143"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be perfect, let $R$ be a smooth affine integral
$k$-variety of positive dimension with function field $K$, and let
$X\to R$ be a smooth proper family of geometrically integral curves.
Let $F\to X$ be its derivative splitting bundle, and put $C=X_K$.
Suppose an integral closed curve $A\subseteq F_K$ maps finitely and
dominantly to $C$, with purely inseparable function-field extension
$K(A)/K(C)$. Suppose infinitely many points $P\in C(K)$ have their
derivative jets $j(P)$ in $A(K)$.

Then $A\to C$ is an isomorphism. In particular it defines a regular
splitting on $C$. For any separating transcendence basis of $K/k$, the
resulting lifts to $K(C)$ of its coordinate derivations commute; in
characteristic $p>0$ their $p$th iterates vanish. Pure inseparability is
an explicit hypothesis here, not a conclusion assumed from a finite map.

## Facts & Assumptions

**Given:** AC, the family, the integral finite purely inseparable jet
curve, and the infinite point set of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Coordinate derivations for a separating transcendence basis of a
finitely generated field over perfect constants form a basis of all
constant-linear derivations and commute. In characteristic $p$ they are
$p$-nilpotent and their common kernel is the field of $p$th powers.
[[lem-function-field-coordinate-derivations-and-constant-kernel]]

[F2] Smooth differentials are locally free. Solving the invertible
Jacobian block of a standard smooth presentation gives a locally split
exact tangent sequence over a smooth base. Derivations obey the chain and
quotient rules. [[thm-differentials-smooth-locally-free]]
[[lem-ag-differentials-transitivity]] [[def-derivation-algebra]]

[F3] Smooth schemes over a field are regular, and their regular local
rings are normal. Normality of a domain is equivalent to integral
closedness of its local rings.
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-regular-local-rings-are-normal]]
[[thm-normality-is-local-for-domains]]

[F4] A finite map is affine on affine target charts and makes their
coordinate maps integral. Ring maps determine affine scheme maps.
[[lem-finite-morphism-affine]] [[thm-finite-morphism-integral-closed]]
[[thm-affine-scheme-ring-anti-equivalence]]

[F5] A proper closed subset of an integral finite-type curve is finite.
In characteristic $p$ a purely inseparable algebraic element has a $p$-power
in the base field; in characteristic zero pure inseparability means the
trivial extension. [[lem-curve-closed-subsets-finite]]
[[thm-purely-inseparable-extension-characterizations]]

## Axiom use

AC is inherited from the finite-map and regularity suppliers. The field
calculation uses only finitely many coordinate derivations and a single
minimal positive integer exponent.

## Proof

**Proof technique:** direct; differentiate a minimal purely inseparable
equation along infinitely many actual derivative jets.

1.1 Put $L=K(C)$ and $M=K(A)$. Choose a separating transcendence basis $t_1,\ldots,t_n$ of $K/k$ and its coordinate derivations $D_j$ by [F1]. At the generic point of $C$, [F2] gives a splitting of the tangent sequence and a basis $\partial$ of the one-dimensional space of $K$-derivations of $L$. Fix lifts $D_j^0$ of the $D_j$. The generic fibre of $F_K\to C$ is the affine space of lifts $D_j^0+y_j\partial$. Thus its closed point defined by the generic point of $A$ has residue field $M=L(y_1,\ldots,y_n)$, with $y_j\in M$. The $n+1$ derivations $D_1^0,\ldots,D_n^0,\partial$ span all $k$-derivations of $L$: restrict any such derivation to $K$, subtract the corresponding linear combination of the lifts, and the remainder is a multiple of $\partial$ by [F2]. [F1, F2, given, construct, algebra]

1.2 If $M\ne L$, [F5] forces characteristic $p>0$. Some $y_i\notin L$ then has a least exponent $q=p^e>1$ with $y_i^q=b\in L$. Minimality implies $b\notin L^p$: if $b=c^p$ with $c\in L$, injectivity of Frobenius in $M$ gives $y_i^{q/p}=c$, contradicting minimality. Remove from the infinite point set the finitely many poles of the rational functions used here on $A$ and $C$, using [F5]. For each remaining $P$, its actual derivative jet evaluates the splitting coordinate $y_j$ so that for every $b\in L$ under consideration,
$$D_j(b(P))=(D_j^0b)(P)+y_j(j(P))\,(\partial b)(P).$$
This is the defining property of the derivative splitting, or the chain rule of [F2] in local coordinates. Applying $D_j$ to $b(P)=y_i(j(P))^q$ gives zero. Hence $(D_j^0b)+y_j\partial b$ vanishes at infinitely many points $j(P)$ of the integral curve $A$ and is identically zero by [F5]. [F2, F5, given, algebra, step 1.1]

2.1 If $\partial b\ne0$, the identities of step 1.2 give $y_j=-(D_j^0b)/(\partial b)\in L$ for every $j$, whence $M=L$, a contradiction. If $\partial b=0$, those identities give $D_j^0b=0$ for all $j$. Step 1.1 says that all $k$-derivations of the finitely generated field $L/k$ kill $b$. Since $k$ is perfect, [F1] gives $b\in L^p$, again a contradiction. Therefore $M=L$ in all characteristics. [F1, algebra, step 1.1, step 1.2]

3.1 The finite dominant map $A\to C$ is now birational and is an isomorphism. Indeed on any affine open $\operatorname{Spec}H\subseteq C$, [F4] gives inverse image $\operatorname{Spec}J$ with $H\subseteq J\subseteq L$ integral over $H$. The domain $H$ is normal by [F3], so $J\subseteq H$ and $J=H$. These identities glue by [F4]. The inclusion $A\subseteq F_K$ is therefore a regular section of the splitting bundle. Write $D_j'$ for its induced derivations of $L$. At every point of the given infinite set, evaluation commutes with $D_j'$ and $D_j$ by the derivative-jet property in step 1.2. For each rational function, omit its poles and the finitely many poles of the finitely many derivatives appearing in a commutator. The evaluation of $[D_i',D_j']$ is then $[D_i,D_j]=0$ by [F1]. It vanishes identically by [F5]. In characteristic $p$, apply the same argument to the finitely many iterates through order $p$: evaluation of $(D_j')^p$ is $D_j^p=0$ by [F1], so that iterate vanishes identically as well. This proves the asserted regular splitting and its compatibility identities. [F1, F3, F4, F5, given, algebra, step 1.2, step 2.1] ∎

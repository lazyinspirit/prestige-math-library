---
id: cex-orbit-set-need-not-represent-quotient-sheaf
kind: counterexample
title: "The orbit set of k-points need not be the k-points of the fppf quotient sheaf"
status: published
origin: pipeline
dependency_level: 3
deps: [def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-axiom-of-choice, def-etale-morphism-schemes, def-fibre-product-schemes-universal-property, def-group-scheme-over-a-field, def-morphism-and-closed-subgroup-scheme, def-quotient-sheaf-and-representable-quotient, lem-action-map-fibres-and-stabilizer-subscheme, lem-closed-subgroup-scheme-valued-point-criterion, thm-affine-fibre-product-tensor-ring, thm-affine-scheme-ring-anti-equivalence, thm-etale-equivalent-flat-unramified-fp, thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Groupoid Schemes, Sections 39.20 and 39.23 (tags 02VG, 03BD, 03C5, 03BM, 03BE)"
      url: https://stacks.math.columbia.edu/download/groupoids.pdf
      locator: "Chapter 39, Proposition 39.23.9 and Definition 39.20.1"
    - title: "The Stacks Project, Properties of Algebraic Spaces, Section 66.14 (tags 07S5, 07S6, 0BBM)"
      url: https://stacks.math.columbia.edu/download/spaces-properties.pdf
      locator: "Chapter 66, Proposition 66.14.1"
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapter 7, Section 7(c)-(e), printed pp. 139-143"
---

## Statement refuted

For every finite-type $k$-group scheme $G$ acting on a finite-type $k$-scheme
$X$, the orbit set $X(k)/G(k)$ of $k$-points computes the $k$-points of the
fppf quotient sheaf $X/G$.

## Facts & Assumptions

**Given:** AC inherited from the quotient-sheaf supplier; a field $k$ of characteristic $\ne2$ containing a nonsquare $a\in k^\times$ (for example $k=\mathbb R$, $a=-1$); $X=\operatorname{Spec}k[x]/(x^2-a)$; and $G=\mu_2=\operatorname{Spec}k[t]/(t^2-1)$.

[F1] A group law on an affine scheme $\operatorname{Spec}A$ is given by comultiplication, counit and antipode maps satisfying the group-object identities, and on $R$-points it gives a natural group structure ([[def-group-scheme-over-a-field]], [[thm-affine-scheme-ring-anti-equivalence]], [[thm-affine-fibre-product-tensor-ring]]); a closed subscheme of a finite-type group scheme is a closed subgroup scheme exactly when its $R$-points form a subgroup for every $R$ ([[lem-closed-subgroup-scheme-valued-point-criterion]], [[def-morphism-and-closed-subgroup-scheme]]).

[F2] An action is a morphism $G\times_kX\to X$ satisfying the unit and associativity diagrams, and it is determined by its values on $R$-points ([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]). The action and second projection define the morphism $(g,z)\mapsto(gz,z):G\times_kX\to X\times_kX$ ([[def-fibre-product-schemes-universal-property]]).

[F3] A morphism locally of finite presentation is étale when it is flat and has vanishing relative differentials ([[thm-etale-equivalent-flat-unramified-fp]], [[def-etale-morphism-schemes]]). For the two algebras below, their explicit rank-two free bases also establish finiteness and local freeness; no general finite-étale module criterion is needed.

[F4] The affine finite locally free equivalence relation $R=G\times_kX\rightrightarrows X$ with $j=(t,s)$ an equivalence relation and invariants $C=\{f:s^\sharp(f)=t^\sharp(f)\}$ has $C$ finite type over $k$, quotient $X\to\operatorname{Spec}C$ finite locally free and surjective, and $\operatorname{Spec}C$ represents the fppf quotient sheaf $X/G$ ([[thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation]]).

[F5] The fppf quotient sheaf is the sheafification of the naive quotient presheaf $T\mapsto X(T)/G(T)$ in the fppf topology, and a scheme represents it when its functor is naturally isomorphic to the sheafification ([[def-quotient-sheaf-and-representable-quotient]], [[def-fibre-product-schemes-universal-property]]).

## Counterexample

1.1 The algebra $A=k[x]/(x^2-a)$ is a field $K=k[x]/(x^2-a)$: the polynomial $x^2-a$ has no root in $k$ because $a$ is a nonsquare, hence is irreducible of degree two, and it is separable because its derivative $2x$ is nonzero as $\operatorname{char}k\ne2$ and $a\ne0$. Thus $A$ is free of rank two over $k$ and finitely presented, and $\Omega_{A/k}=A\,dx/(2x\,dx)=0$ because $x$ is a unit with $x^2=a\in k^\times$ and $2$ is a unit; by [F3], $X\to\operatorname{Spec}k$ is finite étale of degree two. A $k$-algebra map $A\to k$ would send $x$ to an element $q\in k$ with $q^2=a$, so $X(k)=\varnothing$ and the orbit set $X(k)/G(k)$ is empty. [F3, given, algebra]

1.2 Put $G=\operatorname{Spec}k[t]/(t^2-1)$ with comultiplication $t\mapsto t\otimes t$, counit $t\mapsto1$ and antipode $t\mapsto t$, the last well defined because $t^2=1$; for every $k$-algebra $R$ the set $G(R)=\{r\in R:r^2=1\}$ is a group under multiplication, naturally in $R$, so by [F1] these maps make $G$ a finite-type $k$-group scheme with these groups of points. The formula $g\cdot z=gz$ defines a natural action of $G(R)$ on $X(R)=\{z\in R:z^2=a\}$: it is associative, unital, and stays in $X(R)$ because $(gz)^2=g^2z^2=a$, so by [F2] there is a morphism $\alpha:G\times_kX\to X$ with $\alpha(g,z)=gz$. [F1, F2, given, construct]

2.1 The morphism $\varphi:G\times_kX\to X\times_kX$, $(g,z)\mapsto(gz,z)$, is an isomorphism. On coordinate rings it is the $k$-algebra map $k[x,y]/(x^2-a,y^2-a)\to k[t,x]/(t^2-1,x^2-a)$ with $x\mapsto tx$ and $y\mapsto x$; in the source ring $x$ and $y$ are units with $x^2=y^2=a\in k^\times$, and the assignment $t\mapsto x/y$, $x\mapsto y$ defines an inverse: it respects the relations since $(x/y)^2=x^2/y^2=1$ and $y^2=a$, and the two composites fix each generator. [step 1.2, F2, algebra, construct]

3.1 The relation $R=G\times_kX\rightrightarrows X$ has $s(g,z)=z$ and $t(g,z)=gz$, so $j=(t,s)$ is the isomorphism $\varphi$ of step 2.1, in particular an equivalence relation. The ring $B=A[t]/(t^2-1)$ is free over $A$ via $s$ with basis $1,t$, so $s$ is finite locally free. The involution $(g,z)\mapsto(g,gz)$ carries $s$ to $t$, so $t$ is finite locally free as well. The invariant ring is $C=k$: for $f=\alpha+\beta x$ one computes $s^\sharp(f)=\alpha+\beta x$ and $t^\sharp(f)=\alpha+\beta tx$ in $B\cong K\times K$ (evaluation at $t=1,-1$). Equality is equivalent to $\beta x(t-1)=0$; since $x$ is a unit and $t-1$ has components $(0,-2)$, this forces $\beta=0$. By [F4] the quotient is represented by $\operatorname{Spec}C=\operatorname{Spec}k$, so $(X/G)(k)=\{\ast\}$. [step 1.1, step 1.2, step 2.1, F4, given, algebra]

3.2 Consider the identity section $\mathrm{id}_X\in X(X)$ and its class $[\mathrm{id}_X]$ in the naive quotient presheaf $P(X)=X(X)/G(X)$ of [F5]. Its two pullbacks along the projections $X\times_kX\rightrightarrows X$ are the first and second projections, which differ by the element $u=y/x\in G(X\times_kX)$: indeed $u^2=y^2/x^2=a/a=1$, so $u$ is a $\mu_2$-valued point, and $u\cdot\mathrm{pr}_1=\mathrm{pr}_2$ because $u\cdot x=y$. Hence the two pullbacks of $[\mathrm{id}_X]$ in $P(X\times_kX)$ agree, so the class of the identity section is a compatible family of sections of the naive presheaf over the fppf covering $X\to\operatorname{Spec}k$. [F5, step 2.1, algebra]

4.1 That compatible family does not descend: $P(k)=X(k)/G(k)$ is empty by step 1.1, so there is no class in $P(k)$ whose pullback along $X\to\operatorname{Spec}k$ could be the class of the identity section. Therefore the naive quotient presheaf is not an fppf sheaf and is not the quotient sheaf $X/G$; since $X/G$ is represented by $\operatorname{Spec}k$ with $(X/G)(k)=\{\ast\}$ by step 3.1, while $X(k)/G(k)=\varnothing$, the orbit set does not compute the $k$-points of the quotient sheaf. Sheafification is strictly necessary, and the quotient sheaf here is representable: the counterexample separates the orbit set from the quotient sheaf, not representability from the quotient sheaf. [F5, step 1.1, step 3.1, step 3.2, given] ∎

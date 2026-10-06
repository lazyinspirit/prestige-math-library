---
id: lem-blowup-charts-of-the-quadric-cone
kind: lemma
title: Blowup charts of the quadric cone at its vertex
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - cor-dimension-preserved-by-integral-extensions
  - cor-exceptional-divisor-smooth-center-normal-bundle
  - def-ag-standard-smooth-algebra
  - def-axiom-of-choice
  - def-birational-morphism-schemes
  - def-blowup-scheme-along-ideal
  - def-effective-cartier-divisor
  - def-embedding-dimension-and-regular-local-ring
  - def-exceptional-divisor-blowup
  - def-integral-scheme
  - def-normal-noetherian-ring
  - def-proper-morphism
  - def-serre-r-k-and-s-k-conditions
  - def-simple-normal-crossings-divisors
  - def-smooth-morphism-schemes
  - def-strict-transform-closed-subscheme
  - lem-blowup-isomorphism-off-center
  - lem-closed-immersion-proper
  - lem-polynomial-algebras-over-fields-are-integrally-closed
  - lem-proper-stable-base-change
  - lem-proper-stable-composition
  - thm-affine-blowup-standard-charts
  - thm-ag-standard-smooth-geometric-regularity
  - thm-blowup-projective
  - thm-exceptional-divisor-normal-cone-proj
  - thm-jacobian-criterion-affine-variety
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - thm-serre-normality-criterion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: The Stacks Project, Divisors, Sections 31.33-31.34 (Blowing up; Strict
        transform)
      url: https://stacks.math.columbia.edu/tag/01OF
    - title: "Herwig Hauser, The Hironaka theorem on resolution of singularities (or:
        A proof we always wanted to understand), Bull. Amer. Math. Soc. 40
        (2003) 323-403"
      url: https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf
---

## Statement

Let $k$ be a field of characteristic zero and let $C=V(xy-z^2)\subseteq\mathbb A^3_k$ be the quadric cone, $0\in C$ its vertex; $C$ is an integral normal surface.

Let $\pi\colon X\to\mathbb A^3_k$ be the blowup of the origin ([[def-blowup-scheme-along-ideal]]) with exceptional divisor $E=\pi^{-1}(0)\cong\mathbb P^2_k$ ([[cor-exceptional-divisor-smooth-center-normal-bundle]]), and let $\widetilde C\subseteq X$ be the strict transform of $C$ ([[def-strict-transform-closed-subscheme]]).

Then:

(1) $\widetilde C$ is smooth and $\pi|_{\widetilde C}\colon\widetilde C\to C$ is a proper birational morphism, an isomorphism over $C\setminus\{0\}$ ([[lem-blowup-isomorphism-off-center]]);

(2) in the three standard charts of the blowup the strict transform is smooth: in the chart with coordinates $(u,v)=(y/x,z/x)$ it is $u=v^2$, in the chart with coordinates $(s,t)=(x/y,z/y)$ it is $s=t^2$, and in the chart with coordinates $(p,q)=(x/z,y/z)$ it is $pq=1$;

(3) $\widetilde C\cap E$ is the smooth conic $\{xy=z^2\}\subseteq\mathbb P^2_k$, and $\widetilde C$ meets $E$ transversally along it, so that $E|_{\widetilde C}$ is a reduced effective Cartier divisor on $\widetilde C$ ([[def-simple-normal-crossings-divisors]]);

(4) the pair $(\widetilde C,E|_{\widetilde C})$ is the embedded resolution of $C$ in $\mathbb A^3$: the exceptional divisor of $\pi$ restricts to a smooth divisor on the smooth surface $\widetilde C$ ([[def-proper-morphism]], [[def-birational-morphism-schemes]]).

## Facts & Assumptions

**Given:** A field $k$ of characteristic zero, $C=V(xy-z^2)\subseteq\mathbb A^3_k$, its vertex $0$, the blowup $\pi:X\to\mathbb A^3_k$ of $(x,y,z)$, its exceptional divisor $E$, and the strict transform $\widetilde C$. Assume the Axiom of Choice inherited from the cited constructions ([[def-axiom-of-choice]]).

[F1] [[thm-affine-blowup-standard-charts]]: the standard charts for $(x,y,z)$ have rings $k[x,u,v]$, $k[s,y,t]$, and $k[p,q,z]$, with $(y,z)=(xu,xv)$, $(x,z)=(sy,ty)$, and $(x,y)=(pz,qz)$ respectively.

[F2] [[cor-exceptional-divisor-smooth-center-normal-bundle]] and [[thm-exceptional-divisor-normal-cone-proj]]: the exceptional divisor over the origin is $\mathbb P^2_k$ and is cut out in the three charts by $x$, $y$, and $z$ respectively.

[F3] [[def-strict-transform-closed-subscheme]]: on a blowup chart with exceptional parameter $a$, the strict transform of $V(f)$ is cut out by $(f:a^\infty)$.

[F4] [[lem-blowup-isomorphism-off-center]]: the blowup is an isomorphism off the origin.

[F5] [[def-smooth-morphism-schemes]], [[def-ag-standard-smooth-algebra]], and [[thm-ag-standard-smooth-geometric-regularity]]: polynomial rings and their principal localizations have standard smooth presentations with no equations, hence are smooth over $k$ at every scheme point; smoothness is local on the source.

[F6] [[lem-polynomial-algebras-over-fields-are-integrally-closed]]: $k[a,b]$ is an integrally closed domain.

[F7] [[cor-dimension-preserved-by-integral-extensions]] and [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]: an injective integral extension preserves Krull dimension, and $k[a,b]$ has dimension two.

[F8] [[def-normal-noetherian-ring]] and [[def-integral-scheme]]: an integrally closed Noetherian domain gives an integral normal affine scheme. Its localizations are integrally closed: clearing the finitely many denominators in an integral equation makes a suitable multiple integral over the original domain.

[F9] [[def-effective-cartier-divisor]] and [[def-simple-normal-crossings-divisors]]: a coordinate function on a smooth chart cuts out a reduced effective Cartier divisor; two coordinate functions give transverse smooth divisors.

[F10] [[thm-blowup-projective]], [[lem-proper-stable-base-change]], [[lem-closed-immersion-proper]], and [[lem-proper-stable-composition]]: a finite-type ideal blowup is proper, properness survives base change, a closed immersion is proper, and a composite of proper morphisms is proper.

[F11] [[def-birational-morphism-schemes]]: an isomorphism on a nonempty open of integral schemes identifies their generic points and function fields, hence gives a birational morphism.

[F12] [[def-embedding-dimension-and-regular-local-ring]]: a nonzero Noetherian local ring is regular when its Krull dimension equals the dimension of its maximal ideal modulo its square over the residue field.

## Proof

1.1 Integrality and dimension. Put $R=k[x,y,z]/(xy-z^2)$ and $B=k[a,b]$. The map $R\to B$ given by $(x,y,z)\mapsto(a^2,b^2,ab)$ is injective: reducing monomials with $xy=z^2$ leaves monomials $x^iz^j$ for $i,j\ge0$ and $y^iz^j$ for $i\ge1,j\ge0$, whose images are distinct monomials in $a,b$. Its image is $k[a^2,b^2,ab]$, a domain, and $B$ is finite integral over it because $a^2=x$ and $b^2=y$. Thus $\dim R=\dim B=2$, and $C$ is integral. [F6, F7, F8, given, algebra]

1.2 The three charts of the blowup are $U_x=\operatorname{Spec}k[x,u,v]$, $U_y=\operatorname{Spec}k[s,y,t]$, and $U_z=\operatorname{Spec}k[p,q,z]$ with the substitutions in [F1]. Their exceptional equations are $x=0$, $y=0$, and $z=0$, and globally $E\cong\mathbb P^2_k$. [F1, F2]

2.1 Normality and the singular vertex. Under the involution $\sigma(a,b)=(-a,-b)$, the invariant polynomials in $B$ are precisely the even-total-degree monomials, hence $B^\sigma=R$. If $h\in\operatorname{Frac}(R)$ is integral over $R$, its monic equation also makes it integral over $B$; by [F6] it belongs to $B$, and, being fixed by $\sigma$, it belongs to $R$. Therefore $R$ and its localizations are integrally closed, so $C$ is normal. On $D(x)$ and $D(y)$ the coordinate rings are $k[x,x^{-1},z]$ and $k[y,y^{-1},z]$, respectively, so $C\setminus\{0\}$ is smooth. At $\mathfrak m=(x,y,z)$ the chain $(0)\subsetneq(x,z)\subsetneq\mathfrak m$ and step 1.1 give local dimension two, whereas $\mathfrak m/\mathfrak m^2$ has basis $x,y,z$ because the defining relation is quadratic. The vertex is therefore singular by the regular-local-ring definition. [F5, F6, F8, F12, step 1.1, algebra]

2.2 The total transforms of $xy-z^2$ on the three charts are $x^2(u-v^2)$, $y^2(s-t^2)$, and $z^2(pq-1)$. Modulo $u-v^2$, the first chart ring is $k[x,v]$, where multiplication by $x$ is injective; thus saturation by $x$ removes precisely the factor $x^2$. The same argument gives saturation $(s-t^2)$ in the second chart and $(pq-1)$ in the third, whose quotient is $k[p,p^{-1},z]$ and has no $z$-torsion. Hence these are exactly the strict-transform equations in (2). [F1, F3, step 1.2, algebra]

3.1 The strict-transform chart rings are $k[x,v]$, $k[y,t]$, and $k[p,p^{-1},z]$, so they are smooth surfaces over $k$. Each is a domain and its open complement of the exceptional parameter is nonempty and dense. Those complements glue to the integral scheme $C\setminus\{0\}$ by [F4]; consequently their common dense open makes $\widetilde C$ integral. This proves smoothness and assertion (2). [F4, F5, F6, step 1.1, step 2.2]

3.2 Intersecting the three equations with $E$ gives $u=v^2$, $s=t^2$, and $pq=1$ on its projective charts; these are the charts of the conic $\{xy=z^2\}\subseteq\mathbb P^2_k$. The first two cover this conic, since $x=y=0$ forces $z=0$, and each is an affine line. Thus the exceptional intersection is a smooth conic. [F2, F5, step 2.2]

4.1 On $U_x$, the polynomial coordinate change $(x,u,v)\mapsto(x,u-v^2,v)$ identifies $E$ and $\widetilde C$ with two coordinate hyperplanes. On $U_y$ use $(s,y,t)\mapsto(s-t^2,y,t)$ instead. These charts cover their intersection by step 3.2, so the divisors meet transversally everywhere; on $\widetilde C$ their intersection is cut out by the coordinate $x$ or $y$. It is therefore a reduced effective Cartier divisor, proving (3). [F5, F9, step 3.2]

5.1 The blowup $X\to\mathbb A^3_k$ is proper by [F10]. Its base change $X\times_{\mathbb A^3_k}C\to C$ is proper, and the closed inclusion of $\widetilde C$ into that fibre product is proper, so $\widetilde C\to C$ is proper. It is an isomorphism over the dense open $C\setminus\{0\}$ by [F4] and the strict-transform construction, hence birational by integrality and [F11]. Its smooth source and transverse smooth exceptional divisor prove (1) and the embedded-resolution assertion (4). The displayed source chart rings are integrally closed by [F6] and localization, so no further normalization is needed. The Axiom of Choice is inherited only from the cited constructions. [F4, F6, F8, F10, F11, step 3.1, step 4.1] ∎ 
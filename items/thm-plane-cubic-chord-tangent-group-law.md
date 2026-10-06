---
id: thm-plane-cubic-chord-tangent-group-law
kind: theorem
title: "The chord-tangent group law on a smooth short Weierstrass cubic"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - cor-degree-three-line-bundle-embeds-genus-one-plane-cubic
  - thm-genus-one-canonical-bundle-trivial
  - thm-full-riemann-roch-divisor
  - def-picard-group-scheme
  - cor-degree-descends-picard-curve
  - def-projective-space-points
  - thm-jacobian-criterion-smooth-morphism
  - thm-projective-space-proper-over-base
  - def-abelian-variety-over-a-field
  - def-scheme-theoretic-fibre
  - cor-genus-degree-smooth-plane-curve
  - cor-projective-plane-bezout-length-form
  - lem-rational-map-smooth-curve-to-proper-scheme-extends
  - cor-morphisms-equal-on-dense-open-reduced-source
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - thm-existence-of-algebraic-closures
  - lem-filtered-colimit-fp-scheme-stage
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Elliptic Curves, v2.0, Chapter III (Weierstrass equations and the group law)"
      url: "https://www.jmilne.org/math/Books/ectext6.pdf"
    - title: "D. Lombardo, Abelian varieties, Luxembourg Summer School on Galois representations lecture notes (2018), Chapter 1 sections 1-7"
      url: "https://people.dm.unipi.it/lombardo/Teaching/VarietaAbeliane1718/Notes.pdf"
---

## Statement

Assume AC, inherited from Riemann-Roch and scheme-theoretic descent. Let $k$ be a field of characteristic different from $2,3$, let $a,b\in k$ with $4a^3+27b^2\ne0$, and let $C=V_+(Y^2Z-X^3-aXZ^2-bZ^3)\subseteq\mathbf P^2_k$ be the short Weierstrass cubic with origin $O=[0:1:0]$.

Then $C$ is a smooth projective geometrically integral curve of genus one over $k$, and the chord-tangent law makes it an abelian variety over $k$: for $P=(x_1,y_1)$ and $Q=(x_2,y_2)$ in the affine chart $Z\ne0$ with $P+Q\ne O$, the slope is
$$\lambda=\frac{y_2-y_1}{x_2-x_1}=\frac{x_1^2+x_1x_2+x_2^2+a}{y_1+y_2}$$
whenever the chosen denominator is nonzero, and the sum is
$$x(P+Q)=\lambda^2-x_1-x_2,\qquad y(P+Q)=\lambda(x_1-x(P+Q))-y_1,$$
while $P+Q=O$ for inverse pairs and for a doubled two-torsion point; the inverse is $[X:Y:Z]\mapsto[X:-Y:Z]$. The law is a morphism $C\times_kC\to C$, and all group identities hold as morphisms.

## Facts & Assumptions

**Given:** AC, a field $k$ with $\operatorname{char}k\ne2,3$, elements $a,b\in k$ with $4a^3+27b^2\ne0$, and the cubic $C=V_+(Y^2Z-X^3-aXZ^2-bZ^3)$ with origin $O=[0:1:0]$.

[F1] A curve over $k$ is a geometrically integral, separated, finite-type $k$-scheme of dimension one; $C$ is a closed subscheme of $\mathbf P^2_k$, which is proper over $k$, and the Jacobian criterion detects smoothness geometrically ([[def-algebraic-curve-over-field]], [[thm-projective-space-proper-over-base]], [[thm-jacobian-criterion-smooth-morphism]], [[def-projective-space-points]], [[def-scheme-theoretic-fibre]]).

[F2] A smooth plane curve of degree $d$ has genus $(d-1)(d-2)/2$, so a smooth plane cubic has genus one ([[cor-genus-degree-smooth-plane-curve]]). Two plane curves of degrees $d,e$ without common component meet in a divisor of degree $de$, weighted by local length and residue degree ([[cor-projective-plane-bezout-length-form]], assuming AC).

[F3] On a smooth proper geometrically integral genus-one curve, $\omega_C\cong\mathcal O_C$ and $h^0(\omega_C)=1$; Riemann-Roch reads $l(D)-l(K_C-D)=\deg D$ ([[thm-genus-one-canonical-bundle-trivial]], [[thm-full-riemann-roch-divisor]], both assuming AC). The degree is a homomorphism $\deg\colon\operatorname{Pic}(C)\to\mathbb Z$ with kernel $\operatorname{Pic}^0(C)$ ([[def-picard-group-scheme]], [[cor-degree-descends-picard-curve]], assuming AC). A genus-one curve with a rational point has a degree-three very ample line bundle embedding it as a plane cubic ([[cor-degree-three-line-bundle-embeds-genus-one-plane-cubic]]).

[F4] A rational map from a smooth curve over $k$ to a proper $k$-scheme extends to a morphism; two morphisms from a reduced source that agree on a dense open are equal ([[lem-rational-map-smooth-curve-to-proper-scheme-extends]], [[cor-morphisms-equal-on-dense-open-reduced-source]], both assuming AC).

[F5] Morphisms satisfying an fppf descent datum descend; morphisms between finitely presented schemes over a filtered colimit of fields descend to a finite stage; algebraic closures exist ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[lem-filtered-colimit-fp-scheme-stage]], [[thm-existence-of-algebraic-closures]], assuming AC). The group scheme conventions are [[def-abelian-variety-over-a-field]].

## Proof

**Proof technique:** direct: identify the chord-tangent operation with addition of divisor classes, then show it is algebraic and descends.

1.1 The cubic $C$ is smooth over $k$: on the affine chart $Z=1$ a common zero of $\partial F/\partial x=-3x^2-a$ and $\partial F/\partial y=2y$ would force $y=0$, $3x^2=-a$ and $b-2x^3=0$, hence $4a^3+27b^2=0$, and in the chart $Y=1$ the gradient at $O$ is nonzero because $\partial(Z-X^3-aXZ^2-bZ^3)/\partial Z=1$ at $O$; the Jacobian criterion is compatible with field extension, so $C$ is smooth over every extension of $k$. If $C_{\bar k}$ were reducible, its components would be plane curves of positive degrees summing to $3$, and by [F2] they would meet in a nonempty divisor, at whose points $C$ would not be regular, a contradiction; hence $C$ is geometrically integral and, being a closed subscheme of $\mathbf P^2_k$, proper of dimension one over $k$. Its genus is one by [F2], so $C$ is a curve in the sense of [F1] of genus one. [F1, F2, given, algebra]

2.1 Since $O\in C(k)$, the class $\mathcal O_C(3O)$ has degree $3$, and the assignment $\varphi(P)=[\mathcal O_C(P-O)]$ defines a map $C(\bar k)\to\operatorname{Pic}^0(C_{\bar k})$: the difference of two degree-one divisors has degree zero. It is bijective. Indeed, for $[\mathcal L]\in\operatorname{Pic}^0(C_{\bar k})$ the sheaf $\mathcal L\otimes\mathcal O_C(O)$ has degree one and $l=\deg=1$ by Riemann-Roch and triviality of the canonical bundle in [F3], so it admits a nonzero section whose divisor $P$ is effective of degree one; then $[\mathcal O(P-O)]=[\mathcal L]$. Uniqueness holds because $l(\mathcal O(P))=1$, so the effective divisor of degree one in a degree-one class is unique. [F3, step 1.1, algebra]

3.1 Let $P,Q\in C(\bar k)$ and let $\ell$ be the line through $P$ and $Q$, tangent at $P$ when $P=Q$; write $P+Q+R$ for the divisor of the corresponding hyperplane section, which has degree $3$ by [F2]. The restriction of $\mathcal O(1)$ to $C$ is isomorphic to $\mathcal O_C(3O)$: the coordinate $Z$ restricts to a section whose divisor is $3O$, since on the chart $Y=1$ the equation of $C$ is $Z=X^3+aXZ^2+bZ^3$, so the intersection with the line $Z=0$ is the point $X=Z=0$ with multiplicity three. Hence $P+Q+R\sim3O$. For the vertical line through $R$ the intersection divisor is $R+(-R)+O$, so $R+(-R)\sim2O$. Combining, $P+Q-(-R)\sim O$, that is, in $\operatorname{Pic}^0$, $\varphi(-R)=\varphi(P)+\varphi(Q)$: the assignment of step 2.1 converts the chord-tangent operation $P+Q:=-R$ into addition in the abelian group $\operatorname{Pic}^0(C_{\bar k})$. Consequently the operation is commutative and associative, has identity $O$, and inverse $-\!P=[X:-Y:Z](P)$; and in the affine chart the standard substitution of the line $y=\lambda x+\nu$ in $y^2=x^3+ax+b$ gives the displayed formulas, with $\lambda$ as in the statement when the chosen denominator is nonzero. [F3, step 2.1, algebra]

4.1 The operation is algebraic. On $(C\setminus\{O\})\times(C\setminus\{O\})$ with affine coordinates $(x_i,y_i)$ define $(N,D)=(y_2-y_1,x_2-x_1)$ on the first open and $(N,D)=(x_1^2+x_1x_2+x_2^2+a,y_1+y_2)$ on the second, and consider the morphism $(P,Q)\mapsto[D(N^2-(x_1+x_2)D^2):N((2x_1+x_2)D^2-N^2)-y_1D^3:D^3]$. On $D\ne0$ this is the sum computed in step 3.1 with $\lambda=N/D$, and on $D=0$, $N\ne0$ its value is $O$, which is the sum of the inverse pair $P,Q$. The two opens cover the affine square: if the first pair $(N,D)$ vanishes then $x_1=x_2$ and $y_1=y_2$, i.e. $P=Q$, and then the second pair is $(3x_1^2+a,2y_1)$, which cannot vanish at a point of the smooth curve $C$ by step 1.1. Hence the sum is a morphism on $(C\setminus\{O\})^2$; the extension at pairs involving $O$ is established next. [F1, F2, step 1.1, step 3.1, algebra]

5.1 Over $\bar k$ the law extends to the full product and its group identities hold: for each $R\in C(\bar k)$ the translation $T_R$ is a rational map from the smooth curve $C_{\bar k}$ to the proper scheme $C_{\bar k}$, hence a morphism by [F4]; $T_R$ and $T_{-R}$ are mutually inverse on a dense open and hence everywhere by [F4]; for arbitrary $(P,Q)$ and $R$ avoiding $-P$ and $Q$ the expression $(P+R)+(Q-R)$ is defined and regular near $(P,Q)$, these local morphisms agree on dense opens and hence glue to a morphism $C_{\bar k}\times C_{\bar k}\to C_{\bar k}$ extending the law of step 4.1. Since the group identities are identities of morphisms between reduced schemes over $\bar k$ and hold on the dense set of $\bar k$-points described in step 3.1, they hold everywhere by [F4]; the inverse $[X:-Y:Z]$ is a regular involution. [F4, step 3.1, step 4.1, algebra]

6.1 Since $C$ and $C\times_kC$ are finitely presented, [F5] descends the morphism of step 5.1 to some finite extension $L/k$ inside $\bar k$. Its restriction to $U=(C\setminus\{O\})^2$ is the $k$-defined morphism of step 4.1: this equality can be checked after the faithfully flat extension $\bar k/L$. The two pullbacks over $L\otimes_kL$ therefore agree on $U_{L\otimes_kL}$. This open is schematically dense in $(C\times_kC)_{L\otimes_kL}$: on affine charts restriction to the dense open is injective before base change, and a finite principal-open cover computes its sections by a finite equalizer; tensoring over the field $k$ preserves these injections and equalizers. Thus separatedness and [F4] make the pullbacks equal even when $L\otimes_kL$ is nonreduced. The finite faithfully flat extension $L/k$ is an fppf cover, so [F5] descends the law to $k$. The unit $O$ and inversion are already defined over $k$, and the group identities hold after the faithfully flat extension to $\bar k$, hence over $k$. The smooth proper geometrically integral curve $C$ with this law is an abelian variety. [F4, F5, step 4.1, step 5.1, algebra] ∎ 
---
title: Positive generic cycles determine the curve-supported homomorphism
status: published
research_item: lem-author-16f30f6b95cb-positive-generic-cycle-detection
dependency_level: 19
---

PDF p. 16: Supported leading weight two

## Prerequisites

- [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom)
- [lem-author-16f30f6b95cb-supported-euler-generic-coordinate](item-lem-author-16f30f6b95cb-supported-euler-generic-coordinate)
- [lem-curve-generic-rank-localization](item-lem-curve-generic-rank-localization)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied geometric and supported comparisons. Let $k$ be a field, let $U$ be a smooth finite-type $k$-scheme of pure dimension three, and let $i:C\hookrightarrow U$ be an integral closed curve of codimension two with generic point $\eta$ and function field $k(\eta)=\mathcal O_{C,\eta}$. A curve has dimension one, pure dimension three means that every irreducible component has dimension three, and codimension two here means $\dim\mathcal O_{U,\eta}=2$. Neither smoothness nor normality of $C$, nor global quasi-projectivity of $U$, is assumed.

Write $G_0(C)$ for the abelian group on coherent-sheaf classes with the short-exact-sequence relations, and $\mathbb Z[C]$ for the integral multiples of the single formal positive cycle $[C]$. Let $h:G_0(C)\to\mathbb Z[C]$ be a group homomorphism. If $h$ kills every closed-point residue-field class and $h([\mathcal O_C])=[C]$, then
$$h([F])=\dim_{k(\eta)}F_\eta\,[C]$$
for every coherent sheaf $F$, and $h(x)=r(x)[C]$ for every virtual class $x\in G_0(C)$, where $r$ is generic rank.

Equivalently, use the supplied actual supported perfect-$K$-theory group $K_0^{|C|}(U)$ and its coherent Euler and ideal-power devissage isomorphism $q:K_0^{|C|}(U)\to G_0(C)$. To prove that a homomorphism $g:K_0^{|C|}(U)\to H_0z_C^2(U,\bullet)$ is the positive generic-length map, it suffices to identify its generic restriction with $r\circ q$, using the positive cycle generator and $K_0(k(\eta))\cong\mathbb Z$ by dimension. Explicitly, if for an open $V\subset U$ containing $\eta$ the restriction of $g(y)$ is $r(q(y))[C\cap V]$ for every $y$, then $g(y)=r(q(y))[C]$. On a supported perfect-complex class $[E]$, this is $g([E])=(\sum_n(-1)^n\ell_{\mathcal O_{U,\eta}}H^n(E)_\eta)[C]$. A sign is fixed only once the residue-field or structure-sheaf generator has been sent to $+1$; an unspecified isomorphism of groups does not supply that condition.

## Facts & Assumptions

[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the coherent generic-rank supplier [F1] in step 1.1. Together with the fixed site and universe bounds it discharges the geometric and actual supported-coordinate premises [F2]–[F3] in step 2.1. The universes use [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), contain $\omega$ and the scheme data, and admit the enlargements required by those constructions; their existence is a separate standing size assumption. Once these supplied identifications are fixed, the homomorphism argument is finite algebra.

**Given:** The Axiom of Choice and the stated site and universe bounds; the field $k$, smooth finite-type pure threefold $U$, integral codimension-two closed curve $i:C\hookrightarrow U$ and its generic point $\eta$ as in the Statement; and the homomorphism $h$ with its two stated conditions. For the supported formulation, use the stated current group, comparison $q$ and homomorphism $g$.

**Goal:** Isolate the exact generator/sign test needed from the map comparison, without presupposing that an abstract group isomorphism has a positive normalization.

[F1] Generic rank $r:G_0(C)\to\mathbb Z$ sends $[F]$ to $\dim_{k(\eta)}F_\eta$, sends $[\mathcal O_C]$ to $1$, and has kernel generated by closed-point residue-field classes. The supplier defines $G_0(C)$ by coherent-sheaf generators and short-exact-sequence relations, and $\kappa(x)$ as the closed-point direct image of its residue field. Its generic-point $K_0$ is identified with $\mathbb Z$ by dimension. Here $\ker r=\{x\in G_0(C):r(x)=0\}$. [lem-curve-generic-rank-localization](item-lem-curve-generic-rank-localization)

[F2] The notation $z_C^2(U,\bullet)$ means the supported Bloch subcomplex on admissible cycles supported over $|C|$, and $H_0$ is its degree-zero cycles modulo boundaries. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex) The supported target is $\mathbb Z[C]$, not the image of $[C]$ in an ambient Chow group. Restriction to any open $V\subset U$ containing $\eta$ is an isomorphism sending $[C]$ to $[C\cap V]$. [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom)

[F3] In precisely the stated geometric setting, the actual supported Euler-coordinate supplier verifies that $C$ and $U$ are Noetherian, that $U$ is regular and qcqs with quasi-compact open complements, and supplies the current devissage comparison $q$. Under $q$, the generic-rank coordinate is the finite sum $\sum_n(-1)^n\ell_{\mathcal O_{U,\eta}}H^n(E)_\eta$, with value $+1$ on $i_*\mathcal O_C[0]$. Thus the hypotheses of [F1] are satisfied here. The coordinate and its sign are preserved by open restriction. [lem-author-16f30f6b95cb-supported-euler-generic-coordinate](item-lem-author-16f30f6b95cb-supported-euler-generic-coordinate)

[F4] The ground field and structure morphism $U\to\operatorname{Spec}k$ use [math:def-field](https://alphabetamath.cc/item/def-field) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). Smoothness is the supplied smoothness-over-a-field convention in [math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical); finite type means locally of finite type and quasi-compact in [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Integral means nonempty, reduced and irreducible in [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), and $i$ is a closed immersion in [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes). Dimension is the supremum of lengths of chains of nonempty irreducible closed subsets in [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space). The generic-point convention is $\overline{\{\eta\}}=|C|$ in [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset); the function field and generic stalk are supplied in [F1].

[F5] A group homomorphism preserves the group operation; in the additive notation here $h(x+x')=h(x)+h(x')$, and likewise for $g$. [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) In particular $h(0)=0$ by cancellation in $h(0)=h(0)+h(0)$, and $h(-x)=-h(x)$ by applying additivity to $x+(-x)=0$. Induction on nonnegative integers and this inverse identity give $h(nx)=n h(x)$ for every integer $n$.

[F6] The supported perfect category consists of perfect objects whose cohomology stalks vanish off $|C|$; perfect means locally equivalent to a bounded complex of finite locally free modules, and $F[0]$ places a sheaf in degree zero. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) Its current degree-zero group is $K_0^{|C|}(U)=\pi_0\mathbb K(\operatorname{Perf}_{|C|}(U))$ in the chosen compatible realization. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) The separate comparison with $G_0(C)$ is [F3], rather than a consequence of this definition. Module length $\ell_R(M)$ counts the simple factors in a finite composition series, with length zero for the zero module. [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module) Finiteness and the generic-length identity are supplied by [F3].

## Proof

1.1 In the stated setting [F3] verifies the Noetherian hypothesis for [F1]. For any $x\in G_0(C)$, $x-r(x)[\mathcal O_C]$ belongs to $\ker r$. By [F1] it is a finite integral sum of closed-point residue-field classes. The first hypothesis on $h$, together with the integral additivity in [F5], kills that difference, while its second hypothesis gives $h(r(x)[\mathcal O_C])=r(x)[C]$. Thus $h(x)=r(x)[C]$, proving the displayed formula and uniqueness on all virtual classes. [A1, F1, F3, F5, given, algebra]

2.1 By [F2], restriction to the stated $V$ is injective and sends $[C]$ to $[C\cap V]$. Hence the assumed generic restriction of $g(y)$ equals the restriction of $r(q(y))[C]$, so these elements already agree on $U$. Equivalently, transport $g$ along $q$ and the positive target identification to a homomorphism $h:G_0(C)\to\mathbb Z[C]$. The dimension-normalized coefficient kills the closed-point classes and sends $[\mathcal O_C]$ to $[C]$ by [F1], so step 1.1 gives the same equality. For a supported perfect-complex class in [F6], [F3] identifies $r(q([E]))$ with exactly the finite alternating generic-length sum in the Statement. Its value on $i_*\mathcal O_C[0]$ is $+1$. This retains the positive sign but does not infer it from an unnamed group isomorphism. [A1, F1, F2, F3, F5, F6, step 1.1, given] ∎

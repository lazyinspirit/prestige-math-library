---
id: lem-cartier-to-weil-injective-normal
kind: lemma
title: "Under AC, the Picard-to-class-group map is injective on normal Noetherian integral schemes"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-cartier-to-weil-respects-principal-and-addition
  - thm-cartier-to-weil-divisor-normal-scheme
  - def-rational-section-line-bundle
  - thm-line-bundle-rational-section-cartier-divisor
  - def-principal-cartier-divisor
  - def-cartier-divisor
  - def-picard-group-scheme
  - def-principal-weil-divisor-and-class-group
  - def-order-codimension-one-rational-function
  - lem-normal-domain-implies-s-two
  - lem-r-one-s-two-intersection-of-height-one-localisations
  - thm-normality-is-local-for-domains
  - def-integral-scheme
  - def-weil-divisor-normal-noetherian-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - thm-cartier-divisors-mod-principal-to-picard
  - lem-distinguished-open-refinement-at-a-point
  - thm-noetherian-ring-quotients-and-localisations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Lemma 31.28.6 (Tag 0BE8: for normal X the map Pic(X) to Cl(X) is injective) and Definition 31.28.4 (Tag 0BE6)"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "J. S. Milne, Algebraic Geometry, Ch. 12 §§12.1-12.9 (divisors, the class group and the Picard group)"
      url: "https://www.jmilne.org/math/CourseNotes/AG12.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a normal
Noetherian integral scheme
([[def-weil-divisor-normal-noetherian-scheme]], [[def-integral-scheme]]).
Then the canonical homomorphism
$$\operatorname{Pic}(X)\longrightarrow\operatorname{Cl}(X)$$
of [[lem-cartier-to-weil-respects-principal-and-addition]], which sends the
class $[\mathcal O_X(D)]$ of a Cartier divisor to the class of its associated
Weil divisor $\operatorname{cyc}(D)$
([[thm-cartier-to-weil-divisor-normal-scheme]]), is injective.
Moreover, the Cartier-to-Weil cycle homomorphism itself is injective:
if a Cartier divisor $E$ satisfies $\operatorname{cyc}(E)=0$, then $E=0$.

The Axiom of Choice is used exactly through the normality and $(S_2)$ inputs
[[lem-normal-domain-implies-s-two]],
[[lem-r-one-s-two-intersection-of-height-one-localisations]] and
[[thm-normality-is-local-for-domains]], which assume it, and through the
implication $\mathrm{AC}\Rightarrow\mathrm{DC}$
([[thm-choice-implies-dependent-implies-countable-choice]]) that makes the
Dependent-Choice suppliers available.

## Facts & Assumptions

**Given:** a normal Noetherian integral scheme $X$ and an invertible $\mathcal O_X$-module $\mathcal L$ whose class in $\operatorname{Pic}(X)$ lies in the kernel of the canonical homomorphism $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$.

[F1] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] $\mathrm{AC}\Rightarrow\mathrm{DC}$, and DC includes a prescribed initial point ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F3] Assume DC. For a normal Noetherian integral scheme $X$, the associated Weil divisor satisfies $\operatorname{cyc}:\operatorname{CaDiv}(X)\to\operatorname{Div}(X)$, and $\operatorname{cyc}(D+E)=\operatorname{cyc}(D)+\operatorname{cyc}(E)$ for Cartier divisors $D,E$, while $\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$ for $f\in K(X)^{\times}$; there is a canonical homomorphism $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$ carrying $[\mathcal O_X(D)]$ to the class of $\operatorname{cyc}(D)$ ([[lem-cartier-to-weil-respects-principal-and-addition]]).

[F4] Assume DC. Let $X$ be a normal Noetherian scheme and let $D$ be a Cartier divisor represented by local equations $f_i\in\mathcal K_X(U_i)^{\times}$. For every prime divisor $Z$ with generic point $\xi$ and every index $i$ with $\xi\in U_i$, the coefficient of $\operatorname{cyc}(D)$ at $Z$ is $v_\xi(f_{i,\xi})$, the value of the normalized valuation of the discrete valuation ring $\mathcal O_{X,\xi}$, and this is independent of $i$ and of the local-equation datum ([[thm-cartier-to-weil-divisor-normal-scheme]]).

[F5] Let $X$ be an integral scheme with generic point $\eta$ and $\mathcal L$ invertible. Then $K_X(\mathcal L)=\mathcal L\otimes\mathcal K_X$ is the constant sheaf with value the stalk $\mathcal L_\eta$, a one-dimensional $K(X)$-vector space, so it is nonzero; a rational section of $\mathcal L$ is by definition a nonzero element of this vector space ([[def-rational-section-line-bundle]]).

[F6] Let $X$ be integral, $\mathcal L$ invertible and $s$ a rational section of $\mathcal L$. Then $D=\operatorname{div}_C(s)$ is a well-defined Cartier divisor on $X$, there is a canonical isomorphism $\mathcal O_X(D)\to\mathcal L$ carrying $1_D$ to $s$, and for every Cartier divisor $D$ the canonical section $1_D$ satisfies $\operatorname{div}_C(1_D)=D$ ([[thm-line-bundle-rational-section-cartier-divisor]]).

[F7] For $f\in K(X)^{\times}$ the principal Cartier divisor $\operatorname{div}_C(f)$ is represented by the single global equation $f$, and principal Cartier divisors form a subgroup of $\operatorname{CaDiv}(X)$ ([[def-principal-cartier-divisor]]).

[F8] Cartier divisors on $X$ form an abelian group and are represented on open covers by meromorphic units with unit ratios; a divisor represented by unit equations is the zero divisor, and a divisor whose restriction to every member of an open cover is zero is zero ([[def-cartier-divisor]]).

[F9] The Picard group $\operatorname{Pic}(X)$ is the group of isomorphism classes of invertible $\mathcal O_X$-modules, with identity $[\mathcal O_X]$ ([[def-picard-group-scheme]]).

[F10] Assume DC. On a normal Noetherian integral scheme $X$ one has $\Gamma(X,\mathcal K_X^{\times})=K(X)^{\times}$, the map $\operatorname{div}_W:K(X)^{\times}\to\operatorname{Div}(X)$ is a group homomorphism with image the subgroup $P(X)$ of principal Weil divisors, and $\operatorname{Cl}(X)=\operatorname{Div}(X)/P(X)$; consequently a Weil divisor has zero class exactly when it is of the form $\operatorname{div}_W(f)$ for some $f\in K(X)^{\times}$ ([[def-principal-weil-divisor-and-class-group]]).

[F11] For a prime divisor $Z$ with generic point $\xi$ the order of vanishing is $\operatorname{ord}_Z(f)=v_\xi(f_\xi)$, and in the case of an integral normal locally Noetherian scheme $v_\xi(g)=0$ for $g\in K(X)^{\times}$ if and only if $g$ is a unit of $\mathcal O_{X,\xi}$ ([[def-order-codimension-one-rational-function]]).

[F12] Assume AC. Every commutative Noetherian integrally closed domain satisfies $(S_2)$ ([[lem-normal-domain-implies-s-two]]).

[F13] Assume AC. If $R$ is a commutative Noetherian domain satisfying $(S_2)$, then inside its fraction field $K$ one has $R=\bigcap_{\operatorname{ht}\mathfrak p=1}R_{\mathfrak p}$; for a field the empty intersection is interpreted as $K=R$ ([[lem-r-one-s-two-intersection-of-height-one-localisations]]).

[F14] Assume AC. A domain $A$ is integrally closed if and only if every localisation $A_{\mathfrak p}$ at a prime ideal is integrally closed ([[thm-normality-is-local-for-domains]]).

[F15] An integral scheme is nonempty, reduced and irreducible; equivalently every nonempty affine open subscheme is the spectrum of a domain ([[def-integral-scheme]]).

[F16] A Noetherian normal scheme has a finite affine open cover by spectra of Noetherian rings; normal means every local ring $\mathcal O_{X,x}$ is an integrally closed domain, and the local ring at the generic point of a prime divisor is a one-dimensional local ring ([[def-locally-noetherian-and-noetherian-scheme]], [[def-weil-divisor-normal-noetherian-scheme]]).

[F17] On an integral scheme, $D\mapsto[\mathcal O_X(D)]$ is a homomorphism $\operatorname{CaDiv}(X)\to\operatorname{Pic}(X)$ with kernel exactly the principal Cartier divisors; hence every principal Cartier divisor has trivial associated invertible sheaf ([[thm-cartier-divisors-mod-principal-to-picard]]).

[F18] Every point of an open subset of an affine spectrum has a distinguished-open neighbourhood contained in that subset; localizations of Noetherian rings are Noetherian. ([[lem-distinguished-open-refinement-at-a-point]], [[thm-noetherian-ring-quotients-and-localisations]])

## Proof

1.1 **Setup and a rational section.** Assume AC; by [F2] DC holds, so the DC-based statements [F3], [F4] and [F10] apply. Since $X$ is integral and nonempty by [F15], and $\mathcal L$ is invertible, [F5] makes $K_X(\mathcal L)$ the constant sheaf with value the one-dimensional nonzero $K(X)$-vector space $\mathcal L_\eta$; choose a nonzero element $s$ of $\mathcal L_\eta$, viewed as a rational section of $\mathcal L$ (a single selection from a nonempty set). [F1, F2, F5, F15]

1.2 **A Cartier divisor with zero associated Weil divisor is zero.** Let $E$ be any Cartier divisor with $\operatorname{cyc}(E)=0$. By [F8] it has an open cover on which it is represented by single meromorphic equations. Intersect this cover with a cover by Noetherian affine charts from [F16]. Within each such chart, [F18] refines the intersections by distinguished opens, whose coordinate rings are Noetherian localizations. Since $X$ is quasi-compact by [F16], a finite subcover $X=U_1\cup\dots\cup U_k$ suffices. Write $U_j=\operatorname{Spec}R_j$, with $R_j$ Noetherian, and retain on $U_j$ the equation restricted from its containing Cartier-trivializing open; each $R_j$ is a domain by [F15], and each $R_j$ is integrally closed: every localisation $R_{j,\mathfrak p}=\mathcal O_{X,\mathfrak p}$ is integrally closed by the normality in [F16], so $R_j$ is integrally closed by [F14]; in particular each $R_j$ satisfies $(S_2)$ by [F12]. Fix $j$ and restrict $E$ to $U_j$; by the chosen refinement and [F8], this restriction is represented by a local equation $g\in\mathcal K_X(U_j)^{\times}=K(X)^{\times}$, the equality holding because $X$ is integral by [F15]. For every height-one prime $\mathfrak q$ of $R_j$ the closure $Z_{\mathfrak q}$ of $\mathfrak q$ in $X$ is a prime divisor with generic point $\mathfrak q$, and the coefficient of $\operatorname{cyc}(E)=0$ at $Z_{\mathfrak q}$ is $v_{\mathfrak q}(g)$ by [F4], hence $v_{\mathfrak q}(g)=0$; by [F11] this means that $g$ is a unit of the discrete valuation ring $R_{j,\mathfrak q}=\mathcal O_{X,\mathfrak q}$. Applying the same argument to $g^{-1}\in K(X)^{\times}$, whose valuations are $v_{\mathfrak q}(g^{-1})=-v_{\mathfrak q}(g)=0$, shows that $g^{-1}$ is a unit of $R_{j,\mathfrak q}$ for every height-one $\mathfrak q$ as well, so both $g$ and $g^{-1}$ lie in $\bigcap_{\operatorname{ht}\mathfrak q=1}R_{j,\mathfrak q}=R_j$ by the $(S_2)$ intersection [F13]; hence $g\in R_j^{\times}$ is a unit of $R_j$. The restriction $E|_{U_j}$ is therefore represented by a unit equation, so $E|_{U_j}=0$ by [F8]; as the finitely many $U_j$ cover $X$, locality in [F8] gives $E=0$. [F4, F8, F11, F12, F13, F14, F15, F16, F18]

2.1 **The divisor of the section.** By [F6] the rational section $s$ has a Cartier divisor $D:=\operatorname{div}_C(s)$ on $X$ together with a canonical isomorphism $\mathcal O_X(D)\to\mathcal L$; hence $[\mathcal L] =[\mathcal O_X(D)]$ in $\operatorname{Pic}(X)$ by [F9], and the canonical homomorphism of [F3] carries $[\mathcal L]=[\mathcal O_X(D)]$ to the class $[\operatorname{cyc}(D)]\in\operatorname{Cl}(X)$. Since $[\mathcal L]$ lies in the kernel of that homomorphism by hypothesis, $[\operatorname{cyc}(D)]=0$ in $\operatorname{Cl}(X)$. [F3, F6, F9, step 1.1]

3.1 **Subtracting a principal divisor.** By [F10] the vanishing of the class of $\operatorname{cyc}(D)$ means that $\operatorname{cyc}(D)$ is a principal Weil divisor: there is $f\in K(X)^{\times}$ with $\operatorname{cyc}(D)=\operatorname{div}_W(f)$. Put $E:=D-\operatorname{div}_C(f)\in\operatorname{CaDiv}(X)$, using that $\operatorname{div}_C(f)$ is a Cartier divisor and that $\operatorname{CaDiv}(X)$ is a group by [F7] and [F8]; then by the additivity in [F3] and the identity $\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$, $$\operatorname{cyc}(E)=\operatorname{cyc}(D)-\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)-\operatorname{div}_W(f)=0\in\operatorname{Div}(X).$$ [F3, F7, F8, F10, step 2.1]

4.1 **Injectivity.** Applying step 1.2 to the divisor $E=D-\operatorname{div}_C(f)$ of step 3.1 gives $D=\operatorname{div}_C(f)$, so $D$ is a principal Cartier divisor; by [F17] its associated invertible sheaf is trivial, $[\mathcal O_X(D)]=[\mathcal O_X]$, and hence $[\mathcal L]=[\mathcal O_X(D)]=[\mathcal O_X]$ by step 2.1. Since $\mathcal L$ was an arbitrary invertible sheaf in the kernel of the canonical homomorphism, that homomorphism is injective. [F9, F17, step 2.1, step 3.1, step 1.2] ∎

The Axiom of Choice enters exactly through [F12], [F13] and [F14], and through the implication $\mathrm{AC}\Rightarrow\mathrm{DC}$ of [F2] that supplies [F3], [F4] and [F10]; the only selection performed in the proof is the single nonzero rational section of step 1.1. When $X$ has no prime divisors, the intersections of [F13] are empty and interpreted as $K=R_j$, so the argument still shows that any Cartier divisor with vanishing associated Weil divisor is represented by units; when $\operatorname{Cl}(X)$ is trivial this makes the injectivity statement vacuous. The result is the injectivity half of the classical comparison between the Picard group and the Weil divisor class group of a normal Noetherian integral scheme.

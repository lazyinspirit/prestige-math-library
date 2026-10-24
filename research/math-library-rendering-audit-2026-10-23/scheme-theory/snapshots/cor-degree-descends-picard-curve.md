---
id: cor-degree-descends-picard-curve
kind: corollary
title: "The degree of a divisor descends to the Picard group of a normal proper curve"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-degree-divisor-proper-curve
  - def-integral-scheme
  - def-affine-scheme
  - def-affine-scheme-spectrum
  - thm-stalk-structure-sheaf-prime-localization
  - thm-prime-spectrum-of-a-localisation-bijection
  - def-krull-dimension-of-a-ring
  - lem-integral-finite-type-scheme-function-field
  - def-proper-morphism
  - def-dimension-noetherian-topological-space
  - def-locally-noetherian-and-noetherian-scheme
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-locally-factorial-scheme
  - def-discrete-valuation-ring
  - cor-dvr-is-a-pid
  - thm-principal-ideal-domains-are-unique-factorisation-domains
  - def-unique-factorisation-domain
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - def-order-codimension-one-rational-function
  - def-weil-divisor-normal-noetherian-scheme
  - def-principal-weil-divisor-and-class-group
  - thm-principal-divisor-degree-zero-proper-curve
  - def-cartier-divisor
  - def-invertible-sheaf-of-cartier-divisor
  - def-picard-group-scheme
  - def-group-homomorphism
  - def-group-isomorphism-and-automorphism
  - def-quotient-group
  - lem-cartier-to-weil-respects-principal-and-addition
  - thm-cartier-weil-isomorphism-locally-factorial
  - thm-choice-implies-dependent-implies-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Principal divisors and pushforward, Lemma 42.18.3 (tag 02RS: principal divisors on a proper curve have degree zero)"
      url: "https://stacks.math.columbia.edu/tag/02RS"
    - title: "The Stacks Project, Divisors, §31.28 Lemma 28.7 (tag 0BE9: for UFD local rings Pic(X) is isomorphic to Cl(X))"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "J. S. Milne, Algebraic Geometry, Ch. 12 §§12.1-12.9 (divisors, the class group and the Picard group)"
      url: "https://www.jmilne.org/math/CourseNotes/AG12.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and
let $C$ be a normal proper curve over $k$
([[def-degree-divisor-proper-curve]]): $C$ is an integral $k$-scheme, proper
over $\operatorname{Spec}k$, of chain dimension one and finite type over $k$.
Then $\deg_k\mathcal O_C(D):=\deg_k D$ is a well-defined group homomorphism
$\operatorname{Pic}(C)\to\mathbb Z$: for every divisor $D$ on $C$ the degree
$\deg_k D$ ([[def-degree-divisor-proper-curve]]) depends only on the
isomorphism class of the invertible sheaf $\mathcal O_C(D)$
([[def-invertible-sheaf-of-cartier-divisor]]), and
$$[\mathcal O_C(D)]\longmapsto\deg_k D$$
is additive, so it defines a group homomorphism
$$\deg_k:\operatorname{Pic}(C)\longrightarrow\mathbb Z$$
([[def-picard-group-scheme]], [[def-group-homomorphism]]). More precisely:
$C$ is locally factorial, every Weil divisor on $C$ is Cartier, and the
canonical homomorphism $\operatorname{Pic}(C)\to\operatorname{Cl}(C)$ is an
isomorphism ([[thm-cartier-weil-isomorphism-locally-factorial]]), so degree
descends from divisors to divisor classes; since principal divisors have
degree zero ([[thm-principal-divisor-degree-zero-proper-curve]]) the descent
is well defined.

The Axiom of Choice is used exactly through the suppliers
[[thm-principal-ideal-domains-are-unique-factorisation-domains]],
[[thm-principal-divisor-degree-zero-proper-curve]], and
[[thm-cartier-weil-isomorphism-locally-factorial]] and through the
implication $\mathrm{AC}\Rightarrow\mathrm{DC}$
([[thm-choice-implies-dependent-implies-countable-choice]]) that makes the
Dependent-Choice divisor theory available.

## Facts & Assumptions

**Given:** a field $k$, a normal proper curve $C$ over $k$, and the Axiom of Choice.

[F1] **Curve and degree.** $C$ is an integral $k$-scheme, proper over $\operatorname{Spec}k$, hence of finite type, and its underlying space has chain dimension one ([[def-degree-divisor-proper-curve]], [[def-proper-morphism]], [[def-dimension-noetherian-topological-space]], [[def-integral-scheme]]). A divisor on $C$ is a finite formal integral linear combination $D=\sum_xn_x[x]$ of closed points; these form the free abelian group $\operatorname{Div}(C)$ on the closed points, and $$\deg_kD=\sum_xn_x[\kappa(x):k]$$ defines a group homomorphism $\deg_k:\operatorname{Div}(C)\to\mathbb Z$ ([[def-degree-divisor-proper-curve]]).

[F2] **$C$ is Noetherian.** A finite type morphism is quasi-compact, so the finite type morphism $C\to\operatorname{Spec}k$ presents $C$ as a finite union of affine charts $\operatorname{Spec}A$ with $A$ a finite type $k$-algebra; such an $A$ is Noetherian because $k$ is Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]), so $C$ is locally Noetherian and quasi-compact, that is, Noetherian ([[def-locally-noetherian-and-noetherian-scheme]], [[def-affine-scheme]]).

[F3] **Prime divisors and orders.** On the normal Noetherian integral scheme $C$, a prime divisor is an integral closed subscheme with generic point $\xi$ satisfying the codimension-one condition $\dim\mathcal O_{C,\xi}=1$ ([[def-weil-divisor-normal-noetherian-scheme]]). At such a point the local ring is a discrete valuation ring with fraction field $K=k(C)$ and normalized valuation $\operatorname{ord}_\xi$ ([[def-order-codimension-one-rational-function]], [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]). A Weil divisor has finite support because $C$ is quasi-compact; once prime divisors are identified with closed points, this is the finite divisor convention of [F1] ([[def-principal-weil-divisor-and-class-group]]).

[F4] **Fields and DVRs are UFDs.** A field is a UFD vacuously, since it has no nonzero nonunits; every discrete valuation ring is a principal ideal domain ([[cor-dvr-is-a-pid]]), and under the Axiom of Choice every principal ideal domain is a unique factorisation domain ([[thm-principal-ideal-domains-are-unique-factorisation-domains]], [[def-unique-factorisation-domain]]). Local factoriality means that every local ring is a UFD ([[def-locally-factorial-scheme]]).

[F5] **Cartier divisors, Weil divisors and the class group.** Every prime divisor of the locally factorial Noetherian integral scheme $C$ is an effective Cartier divisor; the cycle map $\operatorname{cyc}:\operatorname{CaDiv}(C)\to\operatorname{Div}(C)$ is surjective, and the canonical homomorphism $$\operatorname{Pic}(C)\longrightarrow\operatorname{Cl}(C),\qquad [\mathcal O_C(D)]\longmapsto[\operatorname{cyc}(D)],$$ is an isomorphism ([[thm-cartier-weil-isomorphism-locally-factorial]], [[lem-cartier-to-weil-respects-principal-and-addition]]). In particular every Weil divisor on $C$ is the associated Weil divisor $\operatorname{cyc}(D')$ of a Cartier divisor $D'$, and the invertible sheaf $\mathcal O_C(D):=\mathcal O_C(D')$ is defined up to isomorphism for every Weil divisor $D$, independently of the choice of $D'$, because two choices with the same cycle have the same image under the injective canonical map ([[def-invertible-sheaf-of-cartier-divisor]], [[def-cartier-divisor]], [[def-picard-group-scheme]]).

[F6] **Principal divisors have degree zero.** For every $f\in K(C)^\times$ the principal Weil divisor $\operatorname{div}_W(f)$ is a finite integral combination of closed points and $\deg_k\operatorname{div}_W(f)=0$ ([[thm-principal-divisor-degree-zero-proper-curve]]). The divisor class group is $\operatorname{Cl}(C)=\operatorname{Div}(C)/P(C)$ where $P(C)$ is the image of $\operatorname{div}_W$, and two Weil divisors $D,D'$ have the same class exactly when $D-D'=\operatorname{div}_W(f)$ for some $f\in K(C)^\times$ ([[def-principal-weil-divisor-and-class-group]]).

[F7] **Choice bookkeeping.** The Axiom of Choice implies the Axiom of Dependent Choice, which is the choice principle used by the cycle map and the principal divisor of [F5] and [F6] ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]], [[def-dependent-choice]]). A bijective group homomorphism is an isomorphism ([[def-group-isomorphism-and-automorphism]], [[def-group-homomorphism]]), and $\operatorname{Cl}(C)$ is the quotient group of $\operatorname{Div}(C)$ by the subgroup $P(C)$ ([[def-quotient-group]]).

[F8] **Affine points and local dimension.** On an integral affine open $U=\operatorname{Spec}A$, points are prime ideals and the stalk at $\mathfrak p$ is $A_{\mathfrak p}$ ([[def-affine-scheme-spectrum]], [[thm-stalk-structure-sheaf-prime-localization]]). The prime ideals of $A_{\mathfrak p}$ correspond in an inclusion-preserving way to the primes of $A$ contained in $\mathfrak p$, so its Krull dimension is the supremum of lengths of chains of those primes ([[thm-prime-spectrum-of-a-localisation-bijection]], [[def-krull-dimension-of-a-ring]]). At the generic point, the stalk is $K(C)=\operatorname{Frac}A$, a field ([[lem-integral-finite-type-scheme-function-field]]).

## Proof

1.1 **Closed points, prime divisors and local factoriality.** Every point $x$ other than the generic point $\eta$ is closed. Indeed, $\overline{\{x\}}$ is a proper irreducible closed subset of $C$; any distinct point $y$ in that closure would give the strict chain $\overline{\{y\}}\subsetneq\overline{\{x\}}\subsetneq C$, contradicting chain dimension one. The first inclusion is strict because points of a scheme with the same closure are equal, as follows on affine spectra from their prime ideals. On an affine neighborhood $\operatorname{Spec}A$ of a closed point $x$, its prime $\mathfrak p$ is nonzero and maximal. The chain $(0)\subsetneq\mathfrak p$ gives $\dim A_{\mathfrak p}\ge1$ by [F8]. Any longer prime chain would give a longer chain of irreducible closed subsets in this affine open and, by taking closures, in $C$, contradicting [F1]. Thus $\dim\mathcal O_{C,x}=1$, whereas $\mathcal O_{C,\eta}=K(C)$ has dimension zero by [F8]. Therefore the prime divisors are precisely the closed points with reduced structure; their local rings are DVRs by [F3]. By [F4] these DVRs, and the field at $\eta$, are UFDs under AC. Hence $C$ is locally factorial, and its Weil divisor group is the finite closed-point divisor group of [F1]. [F1, F3, F4, F8]

1.2 **Additivity and principal divisors.** The $k$-degree $\deg_k:\operatorname{Div}(C)\to\mathbb Z$ of [F1] is a group homomorphism, and it annihilates the subgroup $P(C)$ of principal Weil divisors: $\deg_k\operatorname{div}_W(f)=0$ for every $f\in K(C)^\times$ by [F6]. Consequently $\deg_k$ induces a well-defined group homomorphism $\operatorname{Cl}(C)\to\mathbb Z$ on classes, carrying the class $[D]$ of a Weil divisor to $\deg_kD$. [F1, F6, F7]

2.1 **Every Weil divisor has a Cartier representative, and $\operatorname{Pic}(C)\cong\operatorname{Cl}(C)$.** By [F2] and [F3] the curve $C$ is a Noetherian integral scheme, and by step 1.1 it is locally factorial, so [F5] applies: every prime divisor is an effective Cartier divisor, the cycle map $\operatorname{cyc}$ is surjective, and the canonical homomorphism $\varphi:\operatorname{Pic}(C)\to\operatorname{Cl}(C)$, $[\mathcal O_C(D)]\mapsto[\operatorname{cyc}(D)]$, is an isomorphism. In particular a Weil divisor $D$ is the cycle $\operatorname{cyc}(D')$ of some Cartier divisor $D'$, and the sheaf $\mathcal O_C(D):=\mathcal O_C(D')$ is well defined up to isomorphism: if also $D=\operatorname{cyc}(D'')$, then $\varphi([\mathcal O_C(D')])=[D]=\varphi([\mathcal O_C(D'')])$, and injectivity of $\varphi$ gives $[\mathcal O_C(D')]=[\mathcal O_C(D'')]$. [F2, F3, F5, step 1.1]

3.1 **The degree is well defined on isomorphism classes of line bundles.** Let $D,D'$ be Weil divisors on $C$ with $\mathcal O_C(D)\cong\mathcal O_C(D')$. Choose Cartier divisors $D_1,D_2$ with $\operatorname{cyc}(D_1)=D$ and $\operatorname{cyc}(D_2)=D'$, as in step 2.1. Then $\varphi([\mathcal O_C(D_1)])=[D]$ and $\varphi([\mathcal O_C(D_2)])=[D']$ by [F5], and $[\mathcal O_C(D_1)]=[\mathcal O_C(D)]=[\mathcal O_C(D')]=[\mathcal O_C(D_2)]$ in $\operatorname{Pic}(C)$; since $\varphi$ is injective, $[D]=[D']$ in $\operatorname{Cl}(C)$. By [F6] there is $f\in K(C)^\times$ with $D-D'=\operatorname{div}_W(f)$, so $\deg_kD-\deg_kD'=\deg_k(D-D')=\deg_k\operatorname{div}_W(f)=0$ by additivity of $\deg_k$ in [F1] and vanishing on principal divisors in [F6]. Hence $\deg_kD$ depends only on the isomorphism class $[\mathcal O_C(D)]$. [F1, F5, F6, step 2.1]

4.1 **The descended degree is a group homomorphism.** Define $\deg_k:\operatorname{Pic}(C)\to\mathbb Z$ by choosing, for a class $[L]\in\operatorname{Pic}(C)$, the unique class $[D]\in\operatorname{Cl}(C)$ with $\varphi([L])=[D]$ and setting $\deg_k[L]:=\deg_kD$; this is independent of all choices by step 3.1 and satisfies $\deg_k[\mathcal O_C(D)]=\deg_kD$ for every Weil divisor $D$ because $\varphi([\mathcal O_C(D)])=[D]$ by step 2.1. It is additive: if $[L],[L']\in\operatorname{Pic}(C)$ correspond to $[D],[D']$, then $[L][L']=[L\otimes L']$ corresponds to $[D]+[D']=[D+D']$ because $\varphi$ is a group homomorphism, so $\deg_k([L][L'])=\deg_k(D+D')=\deg_kD+\deg_kD'=\deg_k[L]+\deg_k[L']$ by additivity of $\deg_k$ on $\operatorname{Div}(C)$ in [F1]; and $\deg_k[\mathcal O_C]=\deg_k0=0$, so the identity of $\operatorname{Pic}(C)$ is respected. Thus $\deg_k\mathcal O_C(D):=\deg_kD$ is a well-defined group homomorphism $\operatorname{Pic}(C)\to\mathbb Z$. ∎ [F1, F5, F7, step 2.1, step 3.1]

The Axiom of Choice is used through the PID-to-UFD theorem [F4] establishing local factoriality, the vanishing of degrees of principal divisors [F6] and the locally factorial Cartier-Weil isomorphism [F5], whose injectivity input is AC-based; the implication $\mathrm{AC}\Rightarrow\mathrm{DC}$ then supplies the cycle map and the principal divisor machinery. No smoothness, projectivity, separability or genus hypothesis is used, and the curve may have any genus.

Boundary cases. The zero divisor has $\deg_k0=0$ and corresponds to the trivial line bundle $\mathcal O_C$, so the homomorphism carries the identity of $\operatorname{Pic}(C)$ to $0$. A single closed point $[x]$ is realised by an effective Cartier divisor and has degree $[\kappa(x):k]\ge1$ by [F1]; its negative $-[x]$ has degree $-[\kappa(x):k]$, so no sign restriction is imposed. Principal divisors have degree zero by [F6] and are exactly the divisors whose class is trivial in $\operatorname{Cl}(C)$. If $C$ is normal and proper of dimension zero it is the spectrum of a finite field extension of $k$ and is not a curve under the definition of [F1], which requires chain dimension one, so this degenerate case does not arise; a proper curve is nonempty and has closed points.

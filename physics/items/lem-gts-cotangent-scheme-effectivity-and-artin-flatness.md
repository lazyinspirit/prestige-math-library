---
id: lem-gts-cotangent-scheme-effectivity-and-artin-flatness
kind: lemma
title: "Scheme effectivity and flatness for marked Artin lifts"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
deps:
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - thm-affine-quasi-coherent-equivalence
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - thm-hilbert-basis-theorem
  - def-square-zero-extension-and-small-extension
  - def-axiom-of-choice
dependency_roles:
  thm-qc-sheaf-affine-higher-cohomology-vanishes: mathematical-premise
  thm-affine-quasi-coherent-equivalence: mathematical-premise
  def-flat-and-faithfully-flat-modules-and-ring-maps: mathematical-premise
  thm-hilbert-basis-theorem: mathematical-premise
  def-square-zero-extension-and-small-extension: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stacks Project, More on Morphisms"
      url: https://stacks.math.columbia.edu/download/more-morphisms.pdf
      locator: "Lemma 2.2 (05YV), complete proof; Lemma 10.1 (063Y), complete proof. The Artin-base proof below replaces its general local-flatness criterion."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. A square-zero sheaf-ring extension $0\to M\to E\to\mathcal O_X\to0$ of a scheme $X$, with $M$ quasi-coherent as an $\mathcal O_X$-module, makes $(|X|,E)$ a scheme. It restricts on every affine $U=\operatorname{Spec}B$ to $\operatorname{Spec}\Gamma(U,E)$, with kernel $\Gamma(U,M)$.

Let $A'\twoheadrightarrow A$ be a square-zero surjection of finite-dimensional local Artin $k$-algebras with kernel $I$. Suppose $X$ is flat and locally finitely presented over $A$, $E$ is an $A'$-algebra sheaf extension as above, and the multiplication map $I\otimes_A\mathcal O_X\to M$ is an isomorphism. Then $(|X|,E)$ is flat and locally finitely presented over $A'$, and its base change to $A$ is the prescribed $X$. Conversely any flat scheme lift of $X$ has this precise kernel and multiplication map. Isomorphisms of these sheaf extensions are exactly the marked scheme isomorphisms.

## Statement references

[Stacks Project, More on Morphisms, Lemmas 2.2 and 10.1](https://stacks.math.columbia.edu/download/more-morphisms.pdf)

## Facts & Assumptions

**Given:** the sheaf extension and, for the second assertion, the Artin-base data of the Statement.

[F1] [[thm-qc-sheaf-affine-higher-cohomology-vanishes]] gives $H^1(U,M)=0$ on any affine open; [[thm-affine-quasi-coherent-equivalence]] identifies its sections and stalks with a module and its localizations.

[F2] [[def-flat-and-faithfully-flat-modules-and-ring-maps]] supplies exactness of tensor with a flat module. [[thm-hilbert-basis-theorem]] says a finite-variable polynomial ring over a Noetherian ring is Noetherian.

[F3] [[def-square-zero-extension-and-small-extension]] fixes the base category of finite-dimensional Artin $k$-algebras and its nilpotent maximal ideals; no splitting $A\to A'$ is part of this data.

[A1] [[def-axiom-of-choice]] is used for bases and the cohomology supplier.

## Proof

**Given:** [F1]–[F3], [A1] and the extension data. Write $N=\Gamma(U,M)$ and $C=\Gamma(U,E)$ on $U=\operatorname{Spec}B$.

1.1 By [F1] the section sequence $0\to N\to C\to B\to0$ is exact. Its kernel squares to zero, so its prime ideals correspond to those of $B$ and have the same topology. Each stalk $E_x$ is local: an element lifting a unit of $\mathcal O_{X,x}$ is a unit, since after lifting an inverse their product is $1+n$, whose inverse is $1-n$ for $n^2=0$. Hence $(U,E|_U)$ is a locally ringed space. Define the map to $\operatorname{Spec}C$ by sending $x$ to the inverse image in $C$ of the maximal ideal of $E_x$; this is the preceding homeomorphism. On each basic open $D(c)$, the section $c$ is invertible in every stalk and hence as a section of $E$ there, so localization gives $C_c\to\Gamma(D(c),E)$. These maps agree under further localization and define the sheaf map of a morphism of locally ringed spaces. At corresponding primes it induces a map between exact sequences $0\to N_{\mathfrak p}\to C_{\mathfrak p}\to B_{\mathfrak p}\to0$ and $0\to M_x\to E_x\to\mathcal O_{X,x}\to0$. The outside maps are isomorphisms by [F1]; the middle is therefore an isomorphism by a direct kernel and quotient chase. Thus the locally ringed space is affine. These identifications are restrictions of the same sheaf $E$, so the affine charts agree on intersections and give the asserted scheme, including its exact kernel. [F1, given, construct, algebra]

1.2 A flat module $V$ over a local Artin ring $(R,\mathfrak m,\kappa)$ is free, allowing arbitrary rank. Choose a $\kappa$-basis of $V/\mathfrak mV$, lift it to $V$, and map the free module $F=R^{(T)}$ to $V$. The map on associated graded modules for the finite $\mathfrak m$-adic filtrations is an isomorphism. Indeed tensor exactness identifies $\mathfrak m^jV/\mathfrak m^{j+1}V$ with $(\mathfrak m^j/\mathfrak m^{j+1})\otimes_RV$, which in turn is $(\mathfrak m^j/\mathfrak m^{j+1})\otimes_\kappa(V/\mathfrak mV)$; for $F$ the same formula holds. The map between these modules is the identity on the first factor and the chosen basis isomorphism on the second. Since $\mathfrak m^n=0$ for some $n$, induction up this finite filtration shows $F\to V$ is an isomorphism. This uses no finite-generation assumption on $V$. [F2, F3, A1, construct, algebra]

2.1 On the affine chart in step 1.1, $B$ is flat over $A$ and hence free by step 1.2. Lift an $A$-basis $(b_t)$ to elements of $C$ and form $F'=(A')^{(T)}\to C$. Its reduction modulo $I$ is the isomorphism $A^{(T)}\to B$, because the multiplication hypothesis says $IC=N$ and $C/IC=B$. Its cokernel $Q$ satisfies $Q=IQ$, whence $Q=I^2Q=0$. Its kernel lies in $IF'$, since its reduction is injective. But $IF'\to N$ is the isomorphism $I^{(T)}\to I\otimes_AB\to N$ supplied by the same basis and the prescribed kernel map. The kernel is zero. Thus $C$ is free over $A'$ and is flat. In the reverse direction, if $C$ is flat over $A'$ and $C/IC=B$, tensor $0\to I\to A'\to A\to0$ with $C$: this gives $0\to I\otimes_{A'}C\to C\to B\to0$. Since $I^2=0$, $I\otimes_{A'}C=I\otimes_AB$, with its canonical multiplication map. Thus the marking of the kernel is forced, rather than an extra optional identification. The same calculation on stalks proves the converse without assuming that a lift is affine in advance. [F2, step 1.1, step 1.2, construct, algebra]

3.1 For local finite presentation, choose an affine chart where $B$ is finitely presented over $A$, and choose finite algebra generators $b_1,\ldots,b_r$ and lifts $z_1,\ldots,z_r$ in $C$. Every $c\in C$ is, modulo $N$, a polynomial in the $z_j$ with coefficients lifted from $A$. Its remaining part lies in $N=I\otimes_AB$ and is a finite sum of elements $i\,p(z_1,\ldots,z_r)$. Hence $A'[Z_1,\ldots,Z_r]\to C$ is surjective. The ring $A'$ is Noetherian because its ideals are $k$-subspaces of a finite-dimensional vector space; [F2] makes this polynomial ring Noetherian, so the kernel is finitely generated. This is a finite presentation of $C$. Base change gives exactly $B$ since $IC=N$. Steps 1.1 and 2.1 consequently prove flatness and local finite presentation on an open cover of the constructed scheme. Finally, a sheaf-algebra isomorphism fixes the underlying space and is local on stalks by step 1.1, hence is a scheme isomorphism, and conversely a marked scheme isomorphism gives precisely that sheaf map. The specified reduction of $X$ is retained by composing its unchanged marking; no new reduction is chosen. [F2, F3, step 1.1, step 2.1, algebra] ∎

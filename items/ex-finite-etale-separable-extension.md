---
id: ex-finite-etale-separable-extension
kind: example
title: "Finite field extensions and etaleness"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - thm-etale-equivalent-flat-unramified-fp
  - def-unramified-morphism-finite-type
  - thm-formally-unramified-differentials-zero
  - lem-etale-residue-extensions-finite-separable
  - def-standard-etale-algebra
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - def-separable-elements-and-separable-extensions
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
  - thm-bezout-identity-for-polynomials
  - thm-evaluation-kernel-and-minimal-polynomial
  - def-finite-morphism-schemes
  - def-extension-degree-and-finite-extension
  - def-finitely-presented-module-and-algebra
  - def-locally-finite-presentation-morphism
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.36 (tag 02G4) and Algebra, Section 10.143 (standard etale)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26 (finite etale k-schemes and separable extensions)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $k$ be a field and let $L/k$ be a finite field extension
([[def-extension-degree-and-finite-extension]]), with structure morphism
$$f\colon \operatorname{Spec}L\longrightarrow\operatorname{Spec}k .$$
Then $f$ is finite \'etale ([[def-finite-morphism-schemes]],
[[def-etale-morphism-schemes]]) if and only if the extension $L/k$ is
separable ([[def-separable-elements-and-separable-extensions]]).

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the forward
implication, which uses the separability of residue fields of morphisms with
vanishing differentials; the reverse implication is choice-free.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] \'Etale at $x$ implies locally of finite presentation and flat at $x$, and for locally finitely presented morphisms \'etale at $x$ is equivalent to flat and unramified at $x$, where unramifiedness is equivalent to the vanishing of $\Omega_{X/S,x}$ ([[def-etale-morphism-schemes]], [[thm-etale-equivalent-flat-unramified-fp]], [[def-unramified-morphism-finite-type]], [[thm-formally-unramified-differentials-zero]]).

[F2] Assume AC. If $f$ is locally of finite type at $x$ and $\Omega_{X/S,x}=0$, then $\kappa(x)/\kappa(s)$ is a finite separable extension ([[lem-etale-residue-extensions-finite-separable]]).

[F3] A finite separable extension $L/k$ is simple: $L=k(\alpha)$ for some $\alpha$, whose minimal polynomial $P\in k[T]$ is monic and separable, and evaluation at $\alpha$ identifies $k[T]/(P)\cong k(\alpha)=L$ ([[thm-primitive-element-theorem-for-finite-separable-extensions]], [[thm-evaluation-kernel-and-minimal-polynomial]], [[def-separable-elements-and-separable-extensions]]).

[F4] For $0\ne P\in k[T]$, $P$ is separable if and only if $\gcd(P,P')=1$, and in that case Bezout supplies $A,B\in k[T]$ with $AP+BP'=1$ ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]], [[thm-bezout-identity-for-polynomials]]).

[F5] If $P\in A[T]$ is monic and the image of $P'$ is a unit of $(A[T]/(P))_g$, then $(A[T]/(P))_g$ is standard \'etale over $A$; a standard \'etale $A$-algebra is \'etale over $A$ in the sense of [[def-etale-morphism-schemes]] when $A\to B$ is finitely presented, and $A[T]/(P)$ with $P$ monic is finitely presented because $A[T]$ is a finitely presented $A$-algebra and $(P)$ is a finitely generated ideal ([[def-standard-etale-algebra]], [[def-finitely-presented-module-and-algebra]], [[def-locally-finite-presentation-morphism]]).

[F6] A finite field extension $L/k$ is finite-dimensional as a $k$-vector space, hence a finite $k$-module; a morphism $\operatorname{Spec}B\to\operatorname{Spec}A$ is finite when $B$ is a module-finite $A$-algebra ([[def-extension-degree-and-finite-extension]], [[def-finite-morphism-schemes]]).

[F7] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Forward: \'etale implies separable. Assume $f$ is finite \'etale. Then $f$ is \'etale, hence locally of finite presentation, in particular locally of finite type at every point; let $x$ be the unique point of $\operatorname{Spec}L$ and $s$ the unique point of $\operatorname{Spec}k$. By [F1] \'etaleness at $x$ gives unramifiedness at $x$, equivalently $\Omega_{X/S,x}=0$. By [F2] (AC) the residue extension $\kappa(x)/\kappa(s)$ is finite separable. Here $\kappa(x)=L$ and $\kappa(s)=k$, so $L/k$ is finite separable. [F1, F2]

1.2 Reverse: separable implies standard \'etale. Assume $L/k$ is finite separable. By [F3] $L=k(\alpha)$ for some $\alpha$ with monic minimal polynomial $P\in k[T]$ and $k[T]/(P)\cong L$; the element $\alpha$ is separable over $k$ because every element of the separable extension is, so $P$ is separable and $\gcd(P,P')=1$ by [F4]. Bezout [F4] gives $A,B\in k[T]$ with $AP+BP'=1$; reducing modulo $P$ exhibits the class of $P'$ as a unit of $k[T]/(P)$. With $g=1$ in the presentation $k[T]/(P)=(k[T]/(P))_1$, the algebra $k[T]/(P)$ is standard \'etale over $k$ by [F5], and since it is finitely presented over $k$ it is \'etale over $k$; transport along the isomorphism $k[T]/(P)\cong L$ makes $\operatorname{Spec}L\to\operatorname{Spec}k$ \'etale. [F3, F4, F5]

2.1 Finiteness and conclusion. By [F6] the algebra $L$ is a finite $k$-module, so the morphism $\operatorname{Spec}L\to\operatorname{Spec}k$ is finite; together with step 1.2 it is finite \'etale. Combined with step 1.1 this proves both implications. [F6, step 1.1, step 1.2]

3.1 Choice accounting. The Axiom of Choice [F7] is assumed in the Statement and used exactly through the residue-field lemma [F2] in step 1.1; the primitive-element, Bezout and standard-\'etale arguments of steps 1.2 and 2.1 are choice-free, and the statement records this asymmetry. [F2, F7, step 1.1] $\square$

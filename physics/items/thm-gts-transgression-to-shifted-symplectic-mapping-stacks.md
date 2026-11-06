---
id: thm-gts-transgression-to-shifted-symplectic-mapping-stacks
kind: theorem
title: Transgression to shifted symplectic mapping stacks
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
deps:
- def-derived-scheme-and-cotangent-complex
- def-gts-closed-n-shifted-symplectic-form
- def-gts-derived-artin-stack-and-cotangent-complex
- def-axiom-of-choice
dependency_roles:
  def-derived-scheme-and-cotangent-complex: mathematical-premise
  def-gts-closed-n-shifted-symplectic-form: mathematical-premise
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Pantev, Toën, Vaquié, Vezzosi, Shifted Symplectic Structures
    url: https://arxiv.org/pdf/1111.3209
    locator: Definitions 2.1–2.4, integration construction, Theorem 2.5 and its complete proof (PDF pp. 30–34).
  - title: Damien Calaque and Stefano Ronchi, Shifted Symplectic Geometry by Examples
    url: https://arxiv.org/pdf/2510.04625
    locator: §5.2, Definition 5.6, Example 5.7, Theorem 5.8 and Lemma 5.9 (PDF pp. 40–41).
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Fix a characteristic-zero field $k$ and assume the Axiom of Choice (AC) for
the cotangent constructions inherited from
[[def-derived-scheme-and-cotangent-complex]]. Let $F$ be a derived Artin stack with a
closed $n$-shifted symplectic form $\omega$. Let $X$ be an
$\mathcal O$-compact derived stack: $\mathcal O_X$ is compact in
$\mathrm{QCoh}(X)$, and for every connective derived $k$-algebra $A$ and every
perfect complex $E$ on $X_A=X\times\operatorname{Spec}A$, the derived global
sections $R\Gamma(X_A,E)$ are perfect $A$-modules and commute with derived
base change. Write $C(X_A,E)=R\Gamma(X_A,E)$. Suppose $X$ carries an
orientation of degree $d$, namely a map
$$[X]:C(X,\mathcal O_X)\longrightarrow k[-d]$$
such that for every such $A$ and every perfect $E$ on $X_A$, cap product
induces a quasi-isomorphism
$$C(X_A,E)\longrightarrow R\operatorname{Hom}_A(C(X_A,E^\vee),A)[-d].$$
Define $\operatorname{Map}(X,F)(A)=
\operatorname{Map}_{\mathrm{dSt}_k}(X_A,F)$, and assume this derived mapping
stack is derived Artin and locally of finite presentation over $k$. Then
transgression of $\omega$ along $[X]$ gives a canonical
$(n-d)$-shifted symplectic structure on $\operatorname{Map}(X,F)$.

## Statement references

[[def-gts-closed-n-shifted-symplectic-form]]

[[def-gts-derived-artin-stack-and-cotangent-complex]]

## Facts & Assumptions

**Given:** AC, the characteristic-zero field, the $n$-shifted symplectic derived Artin stack $(F,\omega)$, the $\mathcal O$-compact degree-$d$ oriented derived stack $(X,[X])$, and the derived Artin locally finitely presented mapping stack $M=\operatorname{Map}(X,F)$.

[F1] [[def-gts-derived-artin-stack-and-cotangent-complex]]: for a locally finitely presented derived Artin stack the cotangent complex is perfect, $T_F=L_F^\vee$, and tangent complexes represent square-zero extensions.

[F2] [[def-gts-closed-n-shifted-symplectic-form]]: a closed form is a point of the weighted negative-cyclic mapping space; its underlying 2-form induces $\Theta_\omega:T_F\to L_F[n]$, which is a quasi-isomorphism precisely in the shifted symplectic case.

[A1] $X$ is $\mathcal O$-compact and the cap-product maps in the Statement are quasi-isomorphisms after every connective base change.

[A2] The mapping stack $M$ is derived Artin locally of finite presentation; this is an explicit representability hypothesis, not a consequence of $\mathcal O$-compactness alone.

[A3] AC is the foundational premise in the cotangent-comparison construction inherited from [[def-derived-scheme-and-cotangent-complex]].

## Proof

1.1 For every derived stack $G$, $\mathcal O$-compactness gives a natural map of graded mixed complexes $$\kappa_{G,X}:\mathrm{DR}(G\times X/k)\longrightarrow \mathrm{DR}(G/k)\otimes_k C(X,\mathcal O_X),$$ where $C(X,\mathcal O_X)$ has weight zero and zero mixed differential. On derived affines $\operatorname{Spec}B\to G$ and $\operatorname{Spec}C\to X$ this is constructed from the K\"unneth equivalence $\mathrm{DR}(B\otimes_k C)\simeq\mathrm{DR}(B)\otimes_k\mathrm{DR}(C)$, the weight-zero projection $\mathrm{DR}(C)\to\mathcal O_X$, and the projection formula $C(X,\mathrm{DR}(B)\otimes_k\mathcal O_X)\simeq \mathrm{DR}(B)\otimes_k C(X,\mathcal O_X)$. The projection formula is an equivalence because $\mathcal O_X$ is compact; this tensor factor is perfect over $k$, so tensoring with it commutes with the limits that extend the construction from derived affines to derived stacks. The map therefore respects the internal and mixed differentials. Applying weighted negative cyclic complexes and then $1\otimes[X]$ defines integration $\int_X:\mathrm{NC}^{w}(G\times X)\to\mathrm{NC}^{w}(G)[-d]$, still a map of graded complexes. [F1, F2, A1, A3, construct]

1.2 For an $A$-point $x:\operatorname{Spec}A\to M$ corresponding to $f:X_A\to F$, a square-zero extension of $A$ by a perfect $A$-module $N$ identifies the tangent complex at $x$ with $$T_{M,x}\simeq C(X_A,f^*T_F).$$ Indeed, the infinitesimal lifts of $x$ are maps from the pullback of $\operatorname{Spec}(A\oplus N)$ to $F$ over $X_A$; the derivation representing $L_F$ identifies their controlling complex with the global sections of $f^*T_F$. The derived base-change condition in [A1] makes this identification compatible with $A$-linear mapping spaces. [F1, A1, A3, given]

2.1 Pull back $\omega\in\mathcal A^{2,\mathrm{cl}}(F,n)$ along evaluation $\mathrm{ev}:X\times M\to F$, then apply the integration map of step 1.1. Because integration is induced by a map of graded mixed complexes, it sends this point to a closed-form point $\omega_M\in\mathcal A^{2,\mathrm{cl}}(M,n-d)$. [F2, A1, A3, step 1.1, construct]

3.1 The underlying pairing of $\omega_M$ at $x$ is obtained by applying $C(X_A,-)$ to the symplectic pairing $f^*T_F\otimes_A f^*T_F\to\mathcal O_{X_A}[n]$, then composing with $[X]_A$. The construction of $\kappa$ identifies this with the underlying form of the integrated closed form in step 2.1. Since $\Theta_\omega$ is a quasi-isomorphism, it identifies $f^*T_F$ with its dual shifted by $n$; the orientation duality [A1] then identifies $C(X_A,f^*T_F)$ with its $A$-linear dual shifted by $n-d$. Thus the adjoint $T_{M,x}\to L_{M,x}[n-d]$ is a quasi-isomorphism. [F1, F2, A1, A3, step 2.1, step 1.2]

4.1 The nondegeneracy check in step 3.1 holds at every affine test point $x$. Since quasi-isomorphisms of quasi-coherent complexes are local on a smooth atlas, $\Theta_{\omega_M}:T_M\to L_M[n-d]$ is a quasi-isomorphism on $M$. Thus the closed form from step 2.1 is $(n-d)$-shifted symplectic by [F2]. [F1, F2, A2, A3, step 2.1, step 3.1] ∎
## Remarks

This is a deduction from the specified orientation and duality conditions. The representability and local finite-presentation assumption for $\operatorname{Map}(X,F)$ is kept explicit; it does not follow from $\mathcal O$-compactness by definition.

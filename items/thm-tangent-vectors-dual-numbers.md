---
id: "thm-tangent-vectors-dual-numbers"
kind: "theorem"
title: "Tangent vectors as dual-number points"
status: draft
origin: "pipeline"
deps: ["def-relative-cotangent-space", "thm-sheaf-differentials-universal-property", "def-dual-numbers-scheme", "lem-morphism-schemes-local-on-source-target", "def-residue-field-scheme-point", "cor-derivations-represented-by-differentials", "lem-differentials-localization", "lem-sheaf-differentials-affine-compatibility", "thm-cotangent-space-maximal-ideal-quotient", "def-scheme-over-base"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Morphisms, Section 29.33 and Stacks Properties of Schemes, Section 28.16"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
    - title: "Vakil 22.2.18, pp.582-583"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $f\colon X\to S$ be a morphism of schemes and let $x\in X$ with image
$s=f(x)\in S$. Write $\kappa=\kappa(x)$ and let
$D_\kappa=\operatorname{Spec}\kappa[\epsilon]/(\epsilon^2)$ be the dual-numbers
scheme ([[def-dual-numbers-scheme]]), regarded as an $S$-scheme through the
canonical point $\operatorname{Spec}\kappa\to X\to S$. Consider $S$-morphisms
$$\tau\colon D_\kappa\longrightarrow X$$
whose **reduction** is the canonical $\kappa$-point $x$, i.e. the composite of
$\tau$ with the closed immersion $\operatorname{Spec}\kappa\hookrightarrow D_\kappa$
($\epsilon\mapsto0$) is the canonical morphism $\operatorname{Spec}\kappa\to X$.
Then evaluation of the $\epsilon$-coefficient induces a natural bijection
$$\bigl\{\tau\colon D_\kappa\to X \text{ over } S \text{ reducing to } x\bigr\} \;\cong\;\operatorname{Hom}_{\kappa}\bigl(\Omega_{X/S}\otimes_{\mathcal O_{X,x}}\kappa(x),\,\kappa(x)\bigr) =T_{X/S,x}$$
with the relative tangent space at $x$ ([[def-relative-cotangent-space]]). If
$x$ is $k$-rational for a field $k$ and $S=\operatorname{Spec}k$, the bijection
reads $\{\tau\}\cong\operatorname{Hom}_k(\mathfrak m_x/\mathfrak m_x^2,k)$,
recovering the classical description of the tangent space as the dual of
$\mathfrak m_x/\mathfrak m_x^2$. The $\epsilon$-coefficient of $\tau$ is a
$\kappa$-linear functional whose vanishing on $\Omega_{X/S}\otimes\kappa$
exactly means that $\tau$ is the constant (reduction) morphism.

## Facts & Assumptions

**Given:** A morphism $f\colon X\to S$, a point $x\in X$ with $s=f(x)$, and the dual-numbers scheme $D_\kappa=\operatorname{Spec}\kappa[\epsilon]/(\epsilon^2)$.

[F1] [[def-residue-field-scheme-point]] and [[def-relative-cotangent-space]]: $R:=\mathcal O_{X,x}$, $\mathfrak m=\mathfrak m_x$, $\kappa=R/\mathfrak m$, and $T_{X/S,x}=\operatorname{Hom}_\kappa(\Omega_{X/S}\otimes_{\mathcal O_{X,x}}\kappa,\kappa)$.

[F2] [[lem-morphism-schemes-local-on-source-target]]: morphisms of schemes may be constructed and compared after passing to an affine chart around a point of the source; a morphism from a one-point scheme into $X$ with image $x$ factors through an affine open containing $x$.

[F3] [[def-dual-numbers-scheme]]: $D_\kappa=\operatorname{Spec}\kappa[\epsilon]/(\epsilon^2)$ is affine with ring $\kappa[\epsilon]/(\epsilon^2)$, whose maximal ideal $(\epsilon)$ is nilpotent and whose quotient by $\epsilon$ is $\kappa$.

[F4] [[cor-derivations-represented-by-differentials]]: for a ring map $A\to R$ and $R$-module $N$ there is a natural bijection $\operatorname{Hom}_R(\Omega_{R/A},N)\cong\operatorname{Der}_A(R,N)$.

[F5] [[lem-differentials-localization]] and [[lem-sheaf-differentials-affine-compatibility]]: $\Omega_{X/S}\otimes_{\mathcal O_{X,x}}\kappa\cong\Omega_{R/A}\otimes_R\kappa$ for $A=\mathcal O_{S,s}$.

[F6] [[thm-cotangent-space-maximal-ideal-quotient]]: for a $k$-rational point $x$ of a $k$-scheme there is a natural isomorphism $\mathfrak m/\mathfrak m^2\cong\Omega_{X/k}\otimes\kappa(x)$.

## Proof

**Proof technique:** direct.

1.1 Dual-number points are local homomorphisms. Let $\tau\colon D_\kappa\to X$ be an $S$-morphism reducing to $x$. Since $D_\kappa$ is a one-point scheme with closed point mapping to $x$, [F2] lets us work on an affine chart $U=\operatorname{Spec}B\ni x$ and shows that $\tau$ corresponds to a ring map $B\to\kappa[\epsilon]/(\epsilon^2)$ whose composite with $\epsilon\mapsto0$ is the restriction of the residue map $B\to\kappa$. Passing to the local ring gives a well-defined ring map $\varphi\colon R\to\kappa[\epsilon]/(\epsilon^2)$ with $\varphi(\mathfrak m)\subseteq(\epsilon)$ and $\varphi(a)\equiv a\bmod\mathfrak m$ for $a\in R$, and the $S$-morphism condition says that $\varphi$ restricted to $A=\mathcal O_{S,s}$ lands in $\kappa\subseteq\kappa[\epsilon]/(\epsilon^2)$. Conversely such a $\varphi$ determines $\tau$ by the same description on an affine chart containing $x$; two charts give the same morphism by [F2]. [F2, F3, given]

2.1 Dual-number points are derivations. A ring map $\varphi\colon R\to\kappa[\epsilon]/(\epsilon^2)$ with $\varphi(a)\equiv a\bmod\mathfrak m$ has the form $\varphi(a)=\bar a+\epsilon D(a)$ with $\bar a$ the class of $a$ in $\kappa$ and a unique map $D\colon R\to\kappa$; the map $\varphi$ is additive exactly when $D$ is, and $\varphi(ab)=\varphi(a)\varphi(b)$ for all $a,b$ is equivalent to the Leibniz rule $D(ab)=\bar aD(b)+\bar bD(a)$, since $\epsilon^2=0$. Moreover $\varphi|_A$ lands in $\kappa$ exactly when $D$ kills the image of $A$. Hence passage to $D$ is a bijection between the ring maps of step 1.1 and the $A$-derivations $D\colon R\to\kappa$; the derivation is recovered from the product expansion of $\varphi$, so the correspondence is natural in $(X,x)$. [F3, given]

3.1 Derivations are tangent vectors. Evaluation gives $\operatorname{Der}_A(R,\kappa)\cong\operatorname{Hom}_R(\Omega_{R/A},\kappa)$ by [F4] (with $N=\kappa$, an $R$-module through $R\to\kappa$), and restriction and extension of scalars along $R\to\kappa$ give $\operatorname{Hom}_R(\Omega_{R/A},\kappa)\cong\operatorname{Hom}_\kappa(\Omega_{R/A}\otimes_R\kappa,\kappa)$. By [F5] the latter is $\operatorname{Hom}_\kappa(\Omega_{X/S}\otimes_{\mathcal O_{X,x}}\kappa,\kappa)$, which is the relative tangent space $T_{X/S,x}$ as recalled in [F1]. Composing the bijections of steps 1.1 and 2.1 with this identification gives the asserted bijection between the dual-number points reducing to $x$ and the relative tangent space. [F1, F4, F5, step 1.1, step 2.1]

4.1 Naturality and the rational-point case. The correspondence of steps 1.1–3.1 is natural for morphisms of pointed $S$-schemes with a fixed coefficient field $\kappa$: if $h:X\to Y$ sends the chosen $\kappa$-point over $x$ to a $\kappa$-point over $y$, composition sends a map $D_\kappa\to X$ to a map $D_\kappa\to Y$. On local rings the $\epsilon$-coefficient is the derivation $D\circ h^\sharp_y:\mathcal O_{Y,y}\to\kappa$, matching pullback of cotangent vectors after tensoring $\Omega_{Y/S,y}$ with $\kappa$ along $\kappa(y)\to\kappa$. If the residue-field map $\kappa(y)\to\kappa(x)$ is an isomorphism, this is the usual map of relative tangent spaces; for a nontrivial residue-field extension, the target is instead the $\kappa$-dual of the base-extended cotangent space, with no map from $D_{\kappa(x)}$ to $D_{\kappa(y)}$ assumed. In the case $S=\operatorname{Spec}k$ and $x$ $k$-rational, [F6] identifies $\Omega_{X/k}\otimes\kappa(x)$ with $\mathfrak m_x/\mathfrak m_x^2$, so the bijection becomes the classical tangent-space description. A dual-number point whose $\epsilon$-coefficient functional vanishes has $D=0$, hence $\varphi$ is the residue map and $\tau$ is the constant morphism, and conversely. [F6, step 3.1] ∎

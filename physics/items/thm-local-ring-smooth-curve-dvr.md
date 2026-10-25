---
id: thm-local-ring-smooth-curve-dvr
kind: theorem
title: "Local rings at closed points of smooth curves are discrete valuation rings"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-discrete-valuation
  - def-discrete-valuation-ring
  - def-embedding-dimension-and-regular-local-ring
  - def-locally-noetherian-and-noetherian-scheme
  - def-regular-local-ring-geometric-point
  - def-smooth-morphism-to-field-classical
  - lem-affine-local-dimension-residue-transcendence
  - lem-finite-type-jacobson-residue-extension
  - lem-integral-finite-type-scheme-function-field
  - thm-one-dimensional-regular-local-rings-are-dvrs
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Morphisms of Schemes, \u00a7\u00a729, 33-35, 43"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice, inherited through the smoothness
characterization, the affine local-dimension formula, and the criterion that
one-dimensional regular Noetherian local rings are discrete valuation rings.
Let $C$ be a smooth curve over a field $k$ and let $x\in C$ be a closed point.
Then the local ring $\mathcal O_{C,x}$ is a Noetherian regular local ring of
dimension one, hence a discrete valuation ring whose maximal ideal is generated
by a uniformizer $t_x$. Consequently every nonzero rational function
$f\in k(C)^\times$ has a well-defined order $\operatorname{ord}_x(f)\in\mathbb Z$,
and every nonzero element of $\mathcal O_{C,x}$ is a unit times a power of
$t_x$.

## Facts & Assumptions
**Given:** A field $k$, a smooth curve $C$ over $k$, and a closed point $x\in C$.

[F1] A smooth curve $C$ over $k$ is nonempty, integral, of finite type over $k$, of chain dimension one and smooth over $k$; every nonempty open subscheme of $C$ contains the generic point $\eta$. ([[def-algebraic-curve-over-field]])

[F2] Under Choice, $C\to\operatorname{Spec}k$ is smooth if and only if for every field extension $K/k$ every local ring of the base change $C_K$ is regular; in particular all local rings of $C$ itself are regular. ([[def-smooth-morphism-to-field-classical]])

[F3] Under Choice, for a finite-type $k$-algebra $A$ and $\mathfrak q\in\operatorname{Spec}A$, the local dimension satisfies $\dim_{\mathfrak q}\operatorname{Spec}A=\dim A_{\mathfrak q}+\operatorname{trdeg}_k\kappa(\mathfrak q)$; for a maximal ideal $\mathfrak m$ the residue field $\kappa(\mathfrak m)$ is a finite extension of $k$. ([[lem-affine-local-dimension-residue-transcendence]], [[lem-finite-type-jacobson-residue-extension]])

[F4] A finite-type algebra over the Noetherian ring $k$ is Noetherian, so every affine coordinate ring of $C$ is Noetherian; a scheme with an affine cover by spectra of Noetherian rings is locally Noetherian, and every local ring of a locally Noetherian scheme is a Noetherian local ring. ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[def-locally-noetherian-and-noetherian-scheme]])

[F5] For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$ one sets $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$, and $R$ is regular local when $\operatorname{edim}R=\dim R$. ([[def-embedding-dimension-and-regular-local-ring]])

[F6] Under Choice, a nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. ([[thm-one-dimensional-regular-local-rings-are-dvrs]])

[F7] For a field $K$ with discrete valuation $v:K^\times\to\mathbb Z$, the ring $V_v=\{y\in K:v(y)\ge0\}$ is a valuation ring and a DVR, and since $v$ is surjective there is $t\in K$ with $v(t)=1$; an element $u\in K$ is a unit of $V_v$ if and only if $v(u)=0$. ([[def-discrete-valuation-ring]], [[def-discrete-valuation]])

[F8] For an integral finite-type $k$-scheme $W$ and any nonempty affine open $\operatorname{Spec}A\subseteq W$ one has $k(W)=\operatorname{Frac}(A)$; localising at a prime does not change the fraction field of a domain. ([[lem-integral-finite-type-scheme-function-field]])

[F9] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct; compute dimension and regularity of the local ring in an affine chart, then apply the one-dimensional DVR criterion.

1.1 Choose an affine open $\operatorname{Spec}A\subseteq C$ containing $x$; then $A$ is a finite-type $k$-domain [F1], the point $x$ corresponds to a maximal ideal $\mathfrak m\subset A$, and $\mathcal O_{C,x}=A_{\mathfrak m}$ [F4]. The function field of $C$ satisfies $k(C)=\operatorname{Frac}(A)=\operatorname{Frac}(A_{\mathfrak m})$ [F8]. [F1, F4, F8, given]

1.2 The local ring $\mathcal O_{C,x}$ has dimension one. Indeed the local dimension formula [F3] applied to $\mathfrak q=\mathfrak m$ gives $\dim_{\mathfrak m}\operatorname{Spec}A=\dim A_{\mathfrak m}+\operatorname{trdeg}_k\kappa(\mathfrak m)$, and $\operatorname{trdeg}_k\kappa(\mathfrak m)=0$ because $\kappa(\mathfrak m)$ is a finite extension of $k$ [F3]. Every open neighbourhood of the closed point $x$ contains the generic point $\eta$ [F1], so each such neighbourhood has chain dimension one, and hence the infimum $\dim_{\mathfrak m}\operatorname{Spec}A$ of the dimensions of these neighbourhoods equals $1$; therefore $\dim A_{\mathfrak m}=1$. [F1, F3, given]

1.3 The local ring is regular. Under the equivalence of [F2], smoothness of $C$ over $k$ applies to the field extension $k/k$ itself, so every local ring of $C_k=C$ is regular; in particular $\mathcal O_{C,x}$ is a regular local ring in the sense of [F5]. [F2, F5, given]

2.1 The ring $\mathcal O_{C,x}=A_{\mathfrak m}$ is a Noetherian local ring: $A$ is Noetherian by [F4] and localisations of Noetherian rings are Noetherian [F4]. It is nonzero because $A$ is a domain and $\mathfrak m$ is a prime. [F4, step 1.1]

3.1 By steps 1.2, 1.3 and 2.1 the ring $\mathcal O_{C,x}$ is a nonzero Noetherian regular local ring of dimension one; under Choice [F9] the criterion [F6] shows that $\mathcal O_{C,x}$ is a discrete valuation ring. [F6, F9, step 1.2, step 1.3, step 2.1]

4.1 By [F7] there is a discrete valuation $v:k(C)^\times\to\mathbb Z$ with $\mathcal O_{C,x}=V_v$, and there is $t_x\in k(C)$ with $v(t_x)=1$. Define $\operatorname{ord}_x(f):=v(f)$ for $f\in k(C)^\times$; this is a well-defined element of $\mathbb Z$ because $v$ is a function on $k(C)^\times$. For $0\ne f\in\mathcal O_{C,x}$ put $n=\operatorname{ord}_x(f)$, so that $n\ge0$ because $f\in V_v$, and set $u=f\cdot t_x^{-n}$. Then $v(u)=v(f)-n\,v(t_x)=0$, so $u$ is a unit of $\mathcal O_{C,x}$ by [F7], and $f=u\,t_x^{n}$. In particular $\mathfrak m_x=(t_x)$, since $f\in\mathfrak m_x$ if and only if $v(f)>0$, which by the display means $f\in(t_x)$. [F7, step 3.1]

5.1 Steps 3.1 and 4.1 give every clause of the statement: $\mathcal O_{C,x}$ is Noetherian, regular and one-dimensional (steps 1.2, 1.3 and 2.1), hence a discrete valuation ring with maximal ideal generated by the uniformizer $t_x$ (steps 3.1, 4.1), and orders and the normal form $f=u\,t_x^{n}$ are well defined (step 4.1). Choice is inherited through the local-dimension formula [F3] in step 1.2, the smoothness characterization [F2] in step 1.3, and the DVR criterion [F6] in step 3.1. [F6, F7, F9, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1] ∎

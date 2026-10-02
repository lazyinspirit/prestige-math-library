---
id: thm-serre-duality-curves-vector-bundles
kind: theorem
title: "Serre duality for finite locally free sheaves on a smooth proper curve"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-projective-embedding-every-smooth-proper-curve
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-locally-free-sheaf-finite-rank
  - def-sheaf-hom
  - def-sheaf-tensor-product
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the duality suppliers. Let $C$
be a smooth proper geometrically integral curve over a field $k$ and let
$\mathcal E$ be a finite locally free $\mathcal O_C$-module of rank $r$. Then
there is a functorial perfect $k$-bilinear pairing
$$H^1(C,\mathcal E)\times H^0(C,\mathcal E^\vee\otimes\omega_C) \longrightarrow k$$
given by $c\cup s$ followed by the normalized trace
$t_C\colon H^1(C,\omega_C)\to k$, and consequently a canonical $k$-linear
isomorphism $H^1(C,\mathcal E)^\ast\cong
H^0(C,\mathcal E^\vee\otimes\omega_C)$ and the dimension identity
$h^1(C,\mathcal E)=h^0(C,\mathcal E^\vee\otimes\omega_C)$. For $\mathcal E$
of rank one this recovers the line-bundle form of Serre duality for curves,
and the result is stated over an arbitrary field with no perfectness
hypothesis.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$; a smooth proper geometrically
integral curve $C$ over $k$; and a finite locally free $\mathcal O_C$-module
$\mathcal E$.

[F1] The Axiom of Choice: every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F2] Every smooth proper geometrically integral curve $C$ over a field $k$
admits a closed immersion $i\colon C\to\mathbf P^N_k$ over $k$, so that the
structure morphism $C\to\operatorname{Spec}k$ is projective in the
H-projective convention
([[cor-projective-embedding-every-smooth-proper-curve]]).

[F3] The canonical bundle of a smooth curve $C$ over $k$ is
$\omega_C=\Omega^1_{C/k}$; since $C$ is smooth of relative dimension one over
the field $k$, this sheaf is locally free of rank one, so it is the sheaf
$\bigwedge^1\Omega^1_{C/k}$ ([[def-canonical-line-bundle-curve]]).

[F4] For a smooth projective $k$-scheme $X$ of pure dimension $n$ one writes
$\omega_X:=\det\Omega^1_{X/k}=\bigwedge^n\Omega^1_{X/k}$, and a normalized
Serre trace for $X$ is a $k$-linear map $t_X\colon H^n(X,\omega_X)\to k$
whose normalization is the Gysin compatibility $t_X=t_{\mathbb P^N}\circ G_j$
along any closed immersion $j\colon X\hookrightarrow\mathbb P^N_k$ over $k$;
the existence and embedding-independence of such a trace are claims of the
duality theorem cited in [F6]
([[def-smooth-projective-dualizing-line-bundle-and-trace]]).

[F5] A finite locally free $\mathcal O_C$-module is a sheaf of
$\mathcal O_C$-modules admitting a local isomorphism to $\mathcal O_C^{\,r}$,
with locally constant rank function $r$; the dual sheaf is
$\mathcal E^\vee=\mathcal Hom_{\mathcal O_C}(\mathcal E,\mathcal O_C)$ and
$\mathcal E^\vee\otimes_{\mathcal O_C}\omega_C$ is the sheaf tensor product
constructed as the sheafification of the componentwise tensor presheaf
([[def-locally-free-sheaf-finite-rank]], [[def-sheaf-hom]],
[[def-sheaf-tensor-product]]).

[F6] Let $X$ be a smooth projective $k$-scheme of pure dimension $n$ and let
$E$ be a finite locally free $\mathcal O_X$-module. With
$\omega_X=\bigwedge^n\Omega^1_{X/k}$ there is a normalized trace
$t_X\colon H^n(X,\omega_X)\to k$, independent of a projective embedding, such
that for every $0\le q\le n$ the cup product, contraction and trace give a
functorial perfect pairing of finite-dimensional $k$-vector spaces
$$H^q(X,E)\times H^{n-q}(X,E^\vee\otimes\omega_X)\longrightarrow H^n(X,\omega_X)\xrightarrow{t_X}k;$$ outside $0\le q\le n$ the relevant
cohomology groups vanish
([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]).

## Proof
**Proof technique:** direct; specialise the published smooth-projective duality
theorem to a curve, where $n=1$ and $q=1$.

1.1 By [F2] the curve $C$ is projective over $k$; it is smooth over $k$ and, being a curve, has underlying space of dimension one, so $X=C$ satisfies the hypotheses of the duality theorem [F6] with pure dimension $n=1$, and the canonical bundle $\omega_C=\Omega^1_{C/k}$ of [F3] is exactly the dualizing line bundle $\bigwedge^1\Omega^1_{C/k}$ of [F4]. [F2, F3, F4]

1.2 The module $\mathcal E$ is finite locally free of rank $r$ by hypothesis; its dual $\mathcal E^\vee$ and the tensor product $\mathcal E^\vee\otimes\omega_C$ are the sheaves of [F5], and the latter is the module paired against $H^1(C,\mathcal E)$ in the duality theorem. [F5]

2.1 Apply the duality theorem [F6] to $X=C$, $n=1$, $E=\mathcal E$ and $q=1$: the cup product, contraction and the normalized trace $t_C\colon H^1(C,\omega_C)\to k$ give a functorial perfect $k$-bilinear pairing $H^1(C,\mathcal E)\times H^0(C,\mathcal E^\vee\otimes\omega_C)\to k$, and both $k$-vector spaces are finite-dimensional. [F6, step 1.1, step 1.2]

3.1 Perfectness of the pairing of step 2.1 says that the induced maps $H^1(C,\mathcal E)\to H^0(C,\mathcal E^\vee\otimes\omega_C)^\ast$ and $H^0(C,\mathcal E^\vee\otimes\omega_C)\to H^1(C,\mathcal E)^\ast$ are bijective; dualising the first gives the canonical $k$-linear isomorphism $H^1(C,\mathcal E)^\ast\cong H^0(C,\mathcal E^\vee\otimes\omega_C)$, and applying $\dim_k$ to either isomorphism gives $h^1(C,\mathcal E)=h^0(C,\mathcal E^\vee\otimes\omega_C)$. [step 2.1]

4.1 Specialisation to rank one: if $r=1$ then $\mathcal E$ is finite locally free of rank one, so the displayed pairing is $H^1(C,\mathcal E)\times H^0(C,\mathcal E^\vee\otimes\omega_C)\to k$ given by the cup product followed by the same normalized trace $t_C$, which is the line-bundle form of Serre duality for curves; thus the present theorem generalises the invertible-coefficient case without changing the trace. [F4, F5, step 3.1]

5.1 No perfectness of $k$ was used: the duality theorem [F6] is stated over an arbitrary field, the projective embedding of step 1.1 and the canonical bundle identification exist over every field, and functoriality in $\mathcal E$ together with embedding-independence of $t_C$ are parts of the cited theorem and definition; the only choice-theoretic input is the Axiom of Choice inherited through the duality suppliers [F1]. [F1, F4, F6, step 4.1] ∎

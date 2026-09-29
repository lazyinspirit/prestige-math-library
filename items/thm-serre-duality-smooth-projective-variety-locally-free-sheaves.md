---
id: thm-serre-duality-smooth-projective-variety-locally-free-sheaves
kind: theorem
title: Serre duality for locally free sheaves on a smooth projective variety
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-serre-duality-projective-space-coherent-sheaves
  - lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction
  - lem-regular-immersion-local-to-global-ext-collapse
  - lem-smooth-projective-embedding-gysin-trace-compatibility
  - def-cup-product-sheaf-cohomology
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - thm-cohomological-dimension-noetherian-scheme
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Duality for Schemes"
      url: "https://stacks.math.columbia.edu/download/duality.pdf"
      locator: "§27, Lemmas 27.1, 27.4–27.5 and Remarks 27.2–27.3, 27.6"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry Classes 53–54"
      url: "https://math.stanford.edu/~vakil/0506-216/216Cjun2807.pdf"
      locator: "Class 53 §§1–5 and Class 54 §§7, 11"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a smooth projective $k$-scheme
of pure dimension $n$ and let $E$ be a finite locally free
$\mathcal O_X$-module. With
$\omega_X=\bigwedge^n\Omega^1_{X/k}$, there is a normalized trace
$t_X:H^n(X,\omega_X)\to k$ independent of a projective embedding,
such that for every $0\le q\le n$ the cup product, contraction and
trace give a functorial perfect pairing of finite-dimensional
$k$-vector spaces
$$H^q(X,E)\times H^{n-q}(X,E^\vee\otimes\omega_X)\longrightarrow H^n(X,\omega_X)\xrightarrow{t_X}k.$$
Outside $0\le q\le n$ the relevant cohomology groups vanish.

## Facts & Assumptions

**Given:** $X,k,n,E$ as in the statement.

[F1] Projective-space coherent Serre duality gives, for a closed
embedding $i:X\hookrightarrow\mathbb P^N_k$, a perfect natural Yoneda
pairing between $H^q(\mathbb P^N,i_*E)$ and
$\operatorname{Ext}^{N-q}_{\mathbb P^N}(i_*E,\omega_{\mathbb P^N})$.
([[thm-serre-duality-projective-space-coherent-sheaves]])

[F2] If $c=N-n$, the regular-immersion Ext collapse gives a natural
isomorphism
$\operatorname{Ext}^{c+r}_{\mathbb P^N}(i_*E,\omega_{\mathbb P^N})
\cong H^r(X,E^\vee\otimes\omega_X)$; the determinant identification
of its local Koszul generator is the conormal adjunction formula.
([[lem-regular-immersion-local-to-global-ext-collapse]],
[[lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction]])

[F3] The Gysin trace obtained from [F1]–[F2] by taking
$E=\mathcal O_X$ and evaluating at $1$ is independent of the
projective embedding. The comparison respects cup/evaluation for all
finite locally free $E$. ([[lem-smooth-projective-embedding-gysin-trace-compatibility]])

[F4] Cup product is natural in its sheaf arguments; the dualizing line
is $\omega_X=\bigwedge^n\Omega^1_{X/k}$, and for projective space the
normalization sends the ordered Laurent generator to $1$.
([[def-cup-product-sheaf-cohomology]],
[[def-smooth-projective-dualizing-line-bundle-and-trace]])

[F5] The Axiom of Choice is [[def-axiom-of-choice]].

[F6] On a separated Noetherian scheme of dimension at most $n$,
quasi-coherent cohomology vanishes in degrees above $n$.
([[thm-cohomological-dimension-noetherian-scheme]])

## Proof

1.1 Choose a closed projective embedding $i:X\hookrightarrow\mathbb P^N_k$ and put $c=N-n$. The trace $t_i:H^n(X,\omega_X)\to k$ is the image under [F2] of the projective-space Yoneda functional of [F1] evaluated at $1\in H^0(X,\mathcal O_X)$. By [F3] it is independent of $i$; write it $t_X$. The normalization is the Laurent normalization of [F4], carried through the conormal determinant order of [F2]. If $X=\varnothing$, every group displayed is zero and $t_X=0$. [F1, F2, F3, F4]

2.1 For $0\le q\le n$, [F1] is a perfect pairing of $H^q(\mathbb P^N,i_*E)=H^q(X,E)$ with $\operatorname{Ext}^{N-q}_{\mathbb P^N}(i_*E,\omega_{\mathbb P^N})$. Since $N-q=c+(n-q)$, [F2] identifies the second vector space with $H^{n-q}(X,E^\vee\otimes\omega_X)$. Therefore the transported pairing is perfect and both groups are finite-dimensional. This argument works componentwise and includes $n=0$: then the only degree is $q=0$ and the same ambient perfectness applies. [F1, F2, step 1.1]

3.1 Identify the transported pairing. The sign-normalized regular-immersion collapse in [F2] identifies the Yoneda product and evaluation of [F1] with the cup product, contraction $E\otimes E^\vee\to\mathcal O_X$, and the embedding trace $t_i$, by the compatibility assertion of [F3]. This applies in every degree $0\le q\le n$ and is natural in $E$; the Koszul determinant and shift signs are part of that normalized comparison. By 1.1, $t_i=t_X$, so the perfect transported pairing of 2.1 is exactly the pairing displayed in the statement. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 Naturality in $E$ follows from the naturality of [F1]–[F3], and equivalently from cup product and contraction: a map $E\to E'$ acts covariantly on the first factor and dually on the second. Naturality under an isomorphism of $X$ follows from [F3] and the functorial differential determinant. Since $X$ is projective over a field, it is separated and Noetherian of dimension $n$, so [F6] makes cohomology above degree $n$ vanish; negative degrees vanish by definition of right derived cohomology. AC is inherited through [F1]–[F4] and [F6]. [F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1] ∎

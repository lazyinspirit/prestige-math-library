---
id: lem-pa36-singular-parabolic-kernel
kind: lemma
title: The singular simple-parabolic kernel on the flag variety
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-pa36-flag-tdo-and-module
  - def-sheaf-tensor-product
  - def-weyl-vector-rho-for-a-chosen-positive-system
  - lem-pa36-p1-line-bundle-cohomology
  - lem-pa36-flag-tdo-pbw-and-twist
  - lem-pa36-partial-flag-twist-product
  - lem-pa36-relative-p1-singular-kernel
  - thm-affine-morphism-higher-direct-images-qc-vanish
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
  - thm-pa36-flag-d-affinity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§§7.7 and 8.1–8.2, Lemma 7.7.1 and Proposition 8.2.1, printed pp. 99–101"
---

## Statement

Let $\kappa$ be antidominant and let $\alpha$ be a simple root with
$\langle\kappa,\alpha^\vee\rangle=0$. Put
$p_\alpha:X=G/B\to X_\alpha=G/P_\alpha$, a Zariski-locally trivial
$\mathbb P^1$-bundle, and let $\rho=\frac12\sum_{\beta\in\Phi^+}\beta$.
Use the partial TDO $\mathcal D^{\alpha}_{\kappa-\rho}$ and pullback module
$p_\alpha^\dagger N$ defined in
[[lem-pa36-partial-flag-twist-product]]. For every coherent
$\mathcal D_\kappa$-module $M$:

1. $R^q p_{\alpha*}M=0$ for every $q>0$;
2. $p_{\alpha*}M=0$ if and only if there is a coherent
   $\mathcal D^{\alpha}_{\kappa-\rho}$-module $N$ with
   $$M\cong\mathcal O_X(\rho)\otimes p_\alpha^\dagger N,$$
   where $N\cong p_{\alpha*}(\mathcal O_X(-\rho)\otimes M)$; this determines $N$ up to canonical isomorphism.

## Facts & Assumptions

**Given:** Antidominant $\kappa$, a simple root $\alpha$ with zero pairing,
the minimal parabolic projection $p_\alpha$, and a coherent
$\mathcal D_\kappa$-module $M$.

[F1] The projection is a Zariski-locally trivial $\mathbb P^1$-bundle;
on product charts its TDO has the singular rank-one relative factor.
The ordinary inverse image of a base module has relative factor
$\mathcal O_{\mathbb P^1}$, and $\mathcal O_X(\rho)$ has relative factor
$\mathcal O_{\mathbb P^1}(-1)$
([[thm-minimal-parabolic-flag-projection-is-p1-bundle]],
[[lem-pa36-partial-flag-twist-product]]).

[F2] For a coherent product differential module on $\mathbb P^1\times U$
with singular relative factor $D_0=\operatorname{Diff}(\mathcal O(-1))$,
all positive higher direct images to $U$ vanish. Its direct image is zero
if and only if it is $\mathcal O(-1)\boxtimes N$ for a coherent base-TDO
module $N$, recovered as the direct image after tensoring by
$\mathcal O(1)$. The canonical evaluation is compatible with the differential
transition maps and glues
([[lem-pa36-relative-p1-singular-kernel]]).

## Proof

1.1 Cover $X_\alpha$ by the product charts of [F1]. On each chart [F2] proves $R^q p_{\alpha*}M=0$ for every $q>0$, including arbitrary base affine opens. Higher direct image is a sheaf on the base, so vanishing on this open cover proves assertion (1). In particular the underlying sheaf direct-image functor is exact on coherent $\mathcal D_\kappa$-modules: its long exact sequence has zero $R^1$ term for every coherent kernel. [F1, F2, given]

2.1 Suppose $p_{\alpha*}M=0$. On a product chart, [F2] gives the canonical differential-module isomorphism $M=\mathcal O(-1)\boxtimes N$, with $N=p_{\alpha*}(\mathcal O_X(-\rho)\otimes M)$ in that chart's partial TDO convention. The inverse image in [F1] has relative structure-sheaf factor, so this is precisely the displayed form $\mathcal O_X(\rho)\otimes p_\alpha^\dagger N$. The proof of [F2] makes its evaluation natural in all commuting base operators; on overlaps it is intertwined by the chain rule and the partial TDO cocycle in [F1]. Thus the base actions glue on the stated direct image and the local isomorphisms glue to the asserted global one. Coherence of $N$ is part of [F2], not an inference from $\mathcal O_X$-coherence of $M$. [F1, F2, step 1.1, construct]

3.1 Conversely, the displayed form has local relative factor $\mathcal O(-1)\boxtimes N$ by [F1], whose direct image is zero by [F2]; hence $p_{\alpha*}M=0$ globally. Tensoring this form by $\mathcal O_X(-\rho)$ and applying $p_{\alpha*}$ recovers $N$, since $p_{\alpha*}p_\alpha^\dagger N=N$. The same identity proves uniqueness up to the recovered canonical isomorphism. This proves both directions and all higher-image assertions; no rank-one classification is left as a source-only premise. [F1, F2, step 2.1, algebra] ∎

## Remarks

The geometry is locally a product over a Zariski open $U\subseteq X_\alpha$;
write $X_U=p_\alpha^{-1}(U)$ and choose a product chart $\Phi_U$:

```tikzcd
\begin{tikzcd}[column sep=large, row sep=large, font=\Large, labels={font=\large}]
\mathbb P^1\times U \arrow[r,"\Phi_U","\sim"'] \arrow[d,"\mathrm{pr}_U"'] & X_U \arrow[d,"p_\alpha|_{X_U}"] \\
U \arrow[r,"\mathrm{id}_U"'] & U
\end{tikzcd}
```

This square asserts $p_\alpha\circ\Phi_U=\mathrm{pr}_U$, not a global
product decomposition of $X$. In these coordinates, $p_\alpha^\dagger N$
has relative factor $\mathcal O_{\mathbb P^1}$, while
$\mathcal O_X(\rho)$ has relative factor $\mathcal O_{\mathbb P^1}(-1)$.
Thus, in the kernel case $p_{\alpha*}M=0$, the local form is
$M|_{X_U}\cong\mathcal O_{\mathbb P^1}(-1)\boxtimes N|_U$.

The recovery operations are displayed in their required order:

```tikzcd
\begin{tikzcd}[column sep=9em, font=\Large, labels={font=\large}]
M \arrow[r,"\mathcal O_X(-\rho)\otimes(-)"] & \mathcal O_X(-\rho)\otimes M \arrow[r,"p_{\alpha*}"] & N
\end{tikzcd}
```

Here arrows denote operations on modules, rather than homomorphisms between
modules on one space. The middle object is canonically isomorphic to
$p_\alpha^\dagger N$, a $\mathcal D_{\kappa-\rho}$-module on $X$;
the last object is the recovered
$\mathcal D^\alpha_{\kappa-\rho}$-module on $X_\alpha$. The opposite twist
has relative factor $\mathcal O_{\mathbb P^1}(1)$, cancelling the kernel's
$\mathcal O_{\mathbb P^1}(-1)$ before pushforward. The local differential
identifications glue by the compatible transition maps of [F1] and [F2],
as used in step 2.1. Both diagrams illustrate the proof above; the proof
remains independent of them.

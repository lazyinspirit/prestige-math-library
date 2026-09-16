---
id: def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra
kind: definition
title: Positive and negative nilpotent subalgebras and the Borel
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-positive-system-and-base-of-simple-roots, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, prop-brackets-of-root-spaces, def-lower-central-series-and-nilpotent-lie-algebra, def-lie-subalgebra-ideal-and-center, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §1, (5.8)"
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and root set
$\Phi$, and let $\Phi^+$ be a positive system of the root system with base
$\Delta=\{\alpha_1,\dots,\alpha_r\}$ of simple roots
([[def-positive-system-and-base-of-simple-roots]],
[[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]).
Write $\Phi^-=-\Phi^+$ for the negative roots. Define
$$\mathfrak n^+=\sum_{\alpha\in\Phi^+}\mathfrak g_\alpha,\qquad \mathfrak n^-=\sum_{\alpha\in\Phi^-}\mathfrak g_\alpha,\qquad \mathfrak b=\mathfrak h\oplus\mathfrak n^+ .$$
Then $\mathfrak n^+$ and $\mathfrak n^-$ are called the **positive** and
**negative nilpotent subalgebras** and $\mathfrak b$ the **Borel subalgebra**
attached to $\Phi^+$. The definition depends only on the set $\Phi^+$ and not
on any enumeration of it, because each sum is the span of a fixed set of
subspaces.

**These are Lie subalgebras.** Let $\alpha,\beta\in\Phi^+$ and
$x\in\mathfrak g_\alpha$, $y\in\mathfrak g_\beta$. By
[[prop-brackets-of-root-spaces]], $[x,y]\in\mathfrak g_{\alpha+\beta}$, and
$\mathfrak g_{\alpha+\beta}=0$ unless $\alpha+\beta$ is a root. When
$\alpha+\beta$ is a root, write $\alpha=\sum_im_i\alpha_i$ and
$\beta=\sum_in_i\alpha_i$ with nonnegative integral coefficients, as
[[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]
permits; then $\alpha+\beta=\sum_i(m_i+n_i)\alpha_i$ has nonnegative integral
coefficients and is nonzero, so by the same theorem it is a positive root.
Hence $[\mathfrak n^+,\mathfrak n^+]\subseteq\mathfrak n^+$, and
$\mathfrak n^+$ is a subalgebra; the same argument with signs reversed gives
$[\mathfrak n^-,\mathfrak n^-]\subseteq\mathfrak n^-$. Finally
$[\mathfrak h,\mathfrak h]=0$ and
$[\mathfrak h,\mathfrak g_\alpha]\subseteq\mathfrak g_\alpha$ for every root
$\alpha$, so $[\mathfrak h,\mathfrak n^+]\subseteq\mathfrak n^+$ and
$\mathfrak b$ is closed under the bracket
([[def-lie-subalgebra-ideal-and-center]]).

**The subalgebras $\mathfrak n^\pm$ are nilpotent.** For a positive root
$\gamma=\sum_in_i\alpha_i$ put
$\operatorname{ht}(\gamma)=\sum_in_i$ and, for $k\ge1$,
$$F_k=\operatorname{span}\{\mathfrak g_\gamma:\gamma\in\Phi^+,\ \operatorname{ht}(\gamma)\ge k\},$$
the span being $0$ when no such root exists; by
[[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]] we have
$\mathfrak n^+=F_1$, and $\operatorname{ht}(\gamma)\ge1$ for every positive
root because $\gamma\ne0$ has nonnegative integral coefficients. If
$\alpha,\gamma\in\Phi^+$ and $\alpha+\gamma$ is a root, then
$\operatorname{ht}(\alpha+\gamma)=\operatorname{ht}(\alpha)+\operatorname{ht}(\gamma)$
by uniqueness of the simple-root coefficients, so
$[\mathfrak n^+,F_k]\subseteq F_{k+1}$. Induction gives
$\gamma_k(\mathfrak n^+)\subseteq F_k$ for the lower central series
([[def-lower-central-series-and-nilpotent-lie-algebra]]). Since the finite set
$\Phi^+$ has a maximal height $H$, we get $F_{H+1}=0$ and hence
$\gamma_{H+1}(\mathfrak n^+)=0$: the algebra $\mathfrak n^+$ is nilpotent. The
negative case is identical, with heights of the positive roots $-\gamma$ for
$\gamma\in\Phi^-$, since $\Phi^-=-\Phi^+$. Thus the terms "positive and
negative nilpotent subalgebras" are justified.

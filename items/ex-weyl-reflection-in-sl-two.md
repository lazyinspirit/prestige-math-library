---
id: ex-weyl-reflection-in-sl-two
kind: example
title: The Weyl reflection in sl_2
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-root-reflections-are-induced-by-inner-automorphisms, ex-cartan-subalgebra-and-roots-of-sl-two, def-root-reflection-from-a-coroot, def-special-linear-lie-algebra-sl-two, def-coroot-of-a-lie-algebra-root, def-root-and-root-space-relative-to-a-cartan-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §4"
landmark: false
proof_strategy: direct
---

## Example

In $\mathfrak{sl}_2(\mathbb C)=\mathbb Ch\oplus\mathbb Ce\oplus\mathbb Cf$
with the root $\alpha$ of [[ex-cartan-subalgebra-and-roots-of-sl-two]], the
coroot is $h_\alpha=h$, and the reflection
$s_\alpha:\mathfrak h^*\to\mathfrak h^*$ of
[[def-root-reflection-from-a-coroot]] is $-\operatorname{id}$, because
$\mathfrak h^*$ is one-dimensional and $s_\alpha(\alpha)=-\alpha$. The inner
automorphism
$$\tau_\alpha=\operatorname{Ad}_{\exp(e)}\operatorname{Ad}_{\exp(-f)}\operatorname{Ad}_{\exp(e)}$$
of [[prop-root-reflections-are-induced-by-inner-automorphisms]] realizes it:
$\tau_\alpha$ acts on $\mathfrak h$ as $-1$, fixing only $0=\ker\alpha$, and
conjugation by the matrix
$W=e^ee^{-f}e^e=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\in SL_2(\mathbb C)$
sends $h\mapsto-h$, $e\mapsto-f$, $f\mapsto-e$, hence interchanges the two
roots $\pm\alpha$.

## Facts & Assumptions

**Given:** The algebra $\mathfrak{sl}_2(\mathbb C)$ with its root $\alpha$ and coroot $h_\alpha=h$ as in [[ex-cartan-subalgebra-and-roots-of-sl-two]] and [[def-coroot-of-a-lie-algebra-root]], the reflection $s_\alpha$ of [[def-root-reflection-from-a-coroot]], and the inner automorphism $\tau_\alpha$ of [[prop-root-reflections-are-induced-by-inner-automorphisms]].

## Verification

**Proof technique:** direct.

1.1 Since $\mathfrak h=\mathbb Ch$ is one-dimensional, so is $\mathfrak h^*$; it is spanned by $\alpha$ with $\alpha(h)=2$. The reflection formula gives $s_\alpha(\alpha)=\alpha-\alpha(h_\alpha)\alpha=\alpha-2\alpha=-\alpha$, so $s_\alpha=-\operatorname{id}$ on the whole line. [given, algebra]

1.2 The element $W=e^ee^{-f}e^e$ is the product of the three matrix exponentials $e^e=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $e^{-f}=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$, $e^e=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, which multiplies to $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$; it lies in $SL_2(\mathbb C)$ and satisfies $W^2=-I$, $WhW^{-1}=-h$. [given, algebra]

2.1 Conjugation by $W$ is the inner automorphism of $\mathfrak{sl}_2(\mathbb C)$ corresponding to $\tau_\alpha$ under the identification of $e,f,h$ with the basis of the special linear algebra. It acts on the basis by $h\mapsto-h$, $e\mapsto-f$, $f\mapsto-e$: indeed $WeW^{-1}=\begin{pmatrix}0&0\\-1&0\end{pmatrix}=-f$ and $WfW^{-1}=\begin{pmatrix}0&-1\\0&0\end{pmatrix}=-e$. Hence it maps $\mathfrak g_\alpha=\mathbb Ce$ to $\mathfrak g_{-\alpha}=\mathbb Cf$ and back, and its action on $\mathfrak h$ is $-\operatorname{id}$. [given, step 1.2, algebra]

3.1 Since $\tau_\alpha$ acts on $\mathfrak h$ as $-1$, its induced action on $\mathfrak h^*$ is also $-1$: for $\lambda\in\mathfrak h^*$ the induced functional is $\lambda\circ\tau_\alpha^{-1}=\lambda\circ(-\operatorname{id})=-\lambda$. This equals $s_\alpha$ by step 1.1, so the Weyl reflection of the root $\alpha$ is realized by the inner automorphism $\tau_\alpha$ and swaps the roots $\pm\alpha$. [given, step 1.1, step 2.1, algebra] ∎

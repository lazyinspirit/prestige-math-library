---
id: fs-all-cartan-subalgebras-of-a-real-semisimple-lie-algebra-are-conjugate
kind: false-statement
title: All cartan subalgebras of a real semisimple lie algebra are conjugate
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-real-cartan-subalgebras-need-not-be-conjugate, def-cartan-subalgebra-of-a-lie-algebra, def-special-linear-lie-algebra-sl-two, thm-cartans-semisimplicity-criterion]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §6, the discussion of sl(2,R) after Proposition 6.59, printed p. 386"
landmark: false
proof_strategy: counterexample
---

## Statement

False: all Cartan subalgebras of a real semisimple Lie algebra are conjugate.

## Facts & Assumptions

**Given:** The real Lie algebra $\mathfrak{sl}_2(\mathbb R)$ with basis $h=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $f=\begin{pmatrix}0&0\\1&0\end{pmatrix}$ and $k=e-f$, and the two lines $\mathbb Rh$ and $\mathbb Rk$.

[L1] $\mathfrak{sl}_2(\mathbb R)$ is semisimple: its Killing form has matrix $\begin{pmatrix}8&0&0\\0&0&4\\0&4&0\end{pmatrix}$ in the basis $(h,e,f)$, which is nondegenerate, and a finite-dimensional Lie algebra over a characteristic-zero field is semisimple if and only if its Killing form is nondegenerate ([[thm-cartans-semisimplicity-criterion]], [[prop-real-cartan-subalgebras-need-not-be-conjugate]]).

[L2] A Cartan subalgebra of a Lie algebra is a nilpotent subalgebra equal to its own normalizer, and a one-dimensional abelian subalgebra is nilpotent ([[def-cartan-subalgebra-of-a-lie-algebra]]).

[L3] In $\mathfrak{sl}_2(\mathbb R)$ the lines $\mathbb Rh$ and $\mathbb Rk$ are Cartan subalgebras, $\mathbb Rh\subseteq\mathfrak p_0$ is the split part and $\mathbb Rk\subseteq\mathfrak k_0$ is the compact part of the Cartan decomposition attached to $\theta(X)=-X^{T}$, and there is no automorphism $\alpha$ of $\mathfrak{sl}_2(\mathbb R)$ with $\alpha(\mathbb Rh)=\mathbb Rk$: such an $\alpha$ would satisfy $B(h,h)=B(\alpha h,\alpha h)$ for the automorphism-invariant Killing form, that is $8=-8c^2$ for $\alpha(h)=ck$, $c\ne0$, which is impossible ([[prop-real-cartan-subalgebras-need-not-be-conjugate]], [[def-special-linear-lie-algebra-sl-two]]).

## Refutation

**Proof technique:** counterexample.

1.1 In the real semisimple Lie algebra $\mathfrak g_0=\mathfrak{sl}_2(\mathbb R)$ the two one-dimensional subspaces $\mathbb Rh$ and $\mathbb Rk$ are Cartan subalgebras by [L3] and [L2], and $\mathfrak g_0$ is semisimple by [L1]; the two lines are distinct, since $k=e-f$ is not a real multiple of $h$. [L1, L2, L3]

2.1 The two Cartan subalgebras are not conjugate by any automorphism of $\mathfrak g_0$, hence not by any inner automorphism either, because every inner automorphism is an automorphism: by [L3] no automorphism carries $\mathbb Rh$ onto $\mathbb Rk$, the obstruction being the sign of the $B$-squared length, which an automorphism must preserve because the Killing form is invariant under every automorphism. [L3, step 1.1]

3.1 Therefore a real semisimple Lie algebra can contain two Cartan subalgebras that are not conjugate — the compact Cartan line $\mathbb Rk$ and the split Cartan line $\mathbb Rh$ of $\mathfrak{sl}_2(\mathbb R)$ — and the statement that all Cartan subalgebras of a real semisimple Lie algebra are conjugate is false. [step 1.1, step 2.1] ∎

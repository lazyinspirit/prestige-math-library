---
id: ex-immersing-the-circle-in-the-plane-from-a-formal-line-monomorphism
kind: example
title: "Immersing the circle in the plane from a formal line monomorphism"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-formal-immersion-between-smooth-manifolds, thm-smale-hirsch-immersion-theorem, cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes, def-immersion-submersion-and-constant-rank-map, def-space-of-immersions-and-space-of-formal-immersions, def-countable-choice, def-vector-bundle-map-over-a-smooth-base-map, def-frame-bundle-and-associated-vector-bundle, def-degree-of-a-circle-loop, cor-degree-descends-to-circle-loop-classes, thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree, prop-standard-circle-loops-have-their-integer-degrees]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
dependency_level: 13
---

## Example

Assume $\mathrm{AC}_\omega$. Give the unit circle its counterclockwise orientation and global tangent vector $\tau(x)=ix$, identifying $\mathbb R^2$ with $\mathbb C$. A formal immersion is uniquely described by a smooth base map $f:S^1\to\mathbb R^2$ and a nowhere-zero vector field $v(x)=F_x(\tau(x))\in\mathbb R^2$. Write $v=\ell u$ with $\ell>0$ and $u:S^1\to S^1$. The positive-length functions and base maps are contractible, so formal homotopy classes are classified by the degree of $u$. The Smale–Hirsch theorem and its component corollary identify these with regular homotopy classes of parametrized immersed plane curves. The derivative of the standard inclusion has $u(x)=ix$, of degree $+1$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the counterclockwise unit circle, its smooth global tangent vector $\tau(x)=ix$, and the standard inclusion.

[F1] A formal immersion is a smooth fibrewise linear injection over a smooth base map ([[def-formal-immersion-between-smooth-manifolds]], [[def-vector-bundle-map-over-a-smooth-base-map]]).

[L1] Smale–Hirsch in positive codimension and the component corollary identify formal homotopy classes with regular homotopy classes ([[thm-smale-hirsch-immersion-theorem]], [[cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes]]).

[L2] Based circle loops are path-homotopic exactly when their degrees agree, and every integer is the degree of a standard loop ([[thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree]], [[prop-standard-circle-loops-have-their-integer-degrees]], [[def-degree-of-a-circle-loop]]). Here the unit circle is identified with $\mathbb R/\mathbb Z$ by $t\mapsto e^{2\pi it}$.

## Verification

**Proof technique:** direct.

1.1 Since $\tau(x)$ is a basis of $T_xS^1$, $F_x$ is determined by the nonzero vector $v(x)=F_x\tau(x)$, not just its unoriented image line. The smooth positive length $\ell(x)=|v(x)|$ contracts to $1$ through positive functions, while the base map contracts to the zero map in $\mathbb R^2$ without changing $v$ in the target's standard trivialization. Thus a formal pair deforms to $(0,u)$, where $u=v/|v|$ is a smooth unit-vector map. [F1, given, construct]

2.1 For a map $u:S^1\to S^1$, normalize its value at $1$ by $\alpha(x)=u(x)\overline{u(1)}$, a based loop. Choose one angular path from $u(1)$ to $1$; multiplying $u$ by this path gives a free homotopy to $\alpha$. A free homotopy $u_s$ normalizes to the based homotopy $u_s(x)\overline{u_s(1)}$, so its degree is invariant. Conversely equal degrees give a based homotopy of the normalized maps by [L2], and the angular paths undo the normalizations. Hence free homotopy classes are exactly the integer degrees. This classification applies to smooth maps and smooth homotopies: lifting a smooth normalized map to a real angle on $[0,1]$, its angle is $kt+h(t)$ with $h$ smooth periodic; interpolation of periodic $h$ to zero gives a smooth homotopy to $e^{2\pi ikt}$. Smoothness of the lift follows locally from the exponential's smooth inverse on an arc. [L2, step 1.1, construct]

3.1 For an immersion $f$, the derivative direction is $u(x)=df_x(\tau(x))/|df_x(\tau(x))|$. For the standard inclusion it is $ix$; after normalization this is $x=e^{2\pi it}$, of degree $+1$ by [L2]. The contractions in step 1.1 and the degree classification in step 2.1 identify formal homotopy classes with $\mathbb Z$; [L1] transfers this classification to regular homotopy classes of the parametrized immersions. [L1, L2, step 1.1, step 2.1] ∎


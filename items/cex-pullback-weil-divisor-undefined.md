---
id: cex-pullback-weil-divisor-undefined
kind: counterexample
title: "Pulling back the equation of a Weil divisor can give zero"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-affine-scheme-spectrum
  - def-effective-cartier-divisor
  - def-morphism-of-schemes
  - def-pullback-cartier-divisor
  - def-sheaf-total-quotient-rings
  - def-weil-divisor-normal-noetherian-scheme
  - thm-effective-cartier-divisor-closed-immersion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Definitions 31.14.12–31.14.13 and Definition 31.27.2"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §15.1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Statement refuted

The claim refuted is: *for every morphism of schemes $f:X\to Y$ and every
Weil divisor $D=\sum n_Z[Z]$ on $Y$, the pullback $f^*D$ is defined by pulling
back local equations of the prime divisors $Z$.* The closed-point map
$i:\operatorname{Spec}k\to\mathbb A^1_k$ landing at the origin refutes it for
the prime divisor $[0]$: the structure-sheaf map sends its equation $t$ to
$0\in k$. This zero is a meromorphic function, but not a meromorphic unit, so
it does not give the pullback of the equation as a Cartier-divisor equation;
the source also has no prime divisors.

## Facts & Assumptions

**Given:** A field $k$, the affine line $Y=\mathbb A^1_k=\operatorname{Spec}k[t]$ with origin $Z=V(t)=\{0\}$, the one-point scheme $X=\operatorname{Spec}k$, and the morphism $i:X\to Y$ corresponding to the $k$-algebra homomorphism $k[t]\to k$ with $t\mapsto0$.

[F1] $Y=\operatorname{Spec}k[t]$ is a normal Noetherian integral scheme of dimension one; its prime divisors are the closed points $V(g)$ for the irreducible polynomials $g$, and $Z=V(t)$ is a prime divisor with local equation $t$. The element $t$ is a meromorphic unit on $Y$, that is, $t\in K(Y)^{\times}=k(t)^{\times}$, and it is a regular section of $\mathcal O_Y$, i.e. a nonzerodivisor in every local ring of $Y$ ([[def-weil-divisor-normal-noetherian-scheme]]).

[F2] $X=\operatorname{Spec}k$ is a zero-dimensional integral scheme with $\mathcal O_X(X)=k$ and $\mathcal O_X=K_X$ the constant sheaf $k$ ([[def-sheaf-total-quotient-rings]]); it has no prime divisors, because a prime divisor requires local-ring dimension one at its generic point, whereas the unique stalk of $X$ is the zero-dimensional field $k$, so $\operatorname{Div}(X)=0$ and the only Weil divisor on $X$ is the zero divisor ([[def-weil-divisor-normal-noetherian-scheme]]).

[F3] The morphism $i$ is the spectrum of the $k$-algebra homomorphism $k[t]\to k$, $t\mapsto0$ ([[def-affine-scheme-spectrum]], [[def-morphism-of-schemes]]); on global sections $i^{\#}(t)=0\in k$. Its image is the origin: the unique prime $\mathfrak p=(0)$ of $k$ pulls back to $(i^{\#})^{-1}(0)=(t)$, so $i^{-1}(Z)=X$.

[F4] A pullback of all meromorphic functions is induced when $f^{\#}$
carries every stalkwise nonzerodivisor section to a stalkwise nonzerodivisor.
Pullback of a particular Cartier divisor requires only an admissible datum
$a_i/s_i$ whose pulled-back numerators and denominators are regular.
For an effective Cartier divisor, its pullback is defined exactly when
its pulled-back regular local equations remain regular
([[def-pullback-cartier-divisor]]).

[F5] A section $g\in\mathcal O_X(V)$ defines an effective Cartier divisor on $V$ only when multiplication by $g$ is injective on the local rings, i.e. when $g$ is a nonzerodivisor ([[def-effective-cartier-divisor]], [[thm-effective-cartier-divisor-closed-immersion]]).

## Counterexample

1.1 The origin $Z=V(t)$ is a prime divisor of $Y$ with local equation $t$, and $t$ is a regular function on $Y$; its divisor is the Weil divisor $[0]$, whose local equation at the origin is the meromorphic unit $t$. [F1]

1.2 The structure-sheaf pullback sends $t$ to $0\in\mathcal O_X(X)=k$. This zero is a meromorphic function on $X$, but it is not a regular section: multiplication by $0$ on the nonzero ring $k$ is not injective. Since $t$ is a regular section on $Y$, $i^{\#}$ fails the condition in [F4] for inducing a pullback map on meromorphic functions. Thus no pullback of the local equation as a meromorphic unit is defined, and no order of its image can be evaluated. [F2, F3, F4]

1.3 The set-theoretic inverse image is not a divisor of the source either: $i^{-1}(Z)=X$ by [F3], a closed subscheme of codimension zero rather than a formal sum of prime divisors, and $\operatorname{Div}(X)=0$ by [F2], so there is no nonzero Weil divisor of $X$ that could receive the class $[0]$. [F2, F3]

1.4 The failure is not an artefact of the choice of equation: by [F5] the pulled-back equation $0$ cuts out no effective Cartier divisor on $X$, so the associated invertible-sheaf construction also has no input; the divisor $V(t)$ of the target simply has no pulled-back divisor along $i$ in the sense of pulling back its equation. [F4, F5]

2.1 Therefore the proposed pullback of the Weil divisor $[0]$ along the morphism $i:\operatorname{Spec}k\to\mathbb A^1_k$ is undefined: the structure-sheaf image of its equation is $0$, which is not a meromorphic unit, and the source possesses no prime divisor at all. This refutes the general claim that arbitrary morphisms carry a pullback of Weil divisors defined by pulling back local equations. [step 1.1, step 1.2, step 1.3, step 1.4] ∎

The example is minimal in two independent ways. The source is a single point, so the failure cannot be blamed on a poor cover choice, and the target is the affine line, the simplest scheme carrying a nonzero prime divisor with a global equation. The same phenomenon occurs for the constant morphism $\mathbb A^1_k\to\mathbb A^1_k$ with $t\mapsto0$, where the inverse image of $Z$ is the whole source of dimension one; there the pulled-back equation is again $0$ and is not regular. The positive results for pullback on this page therefore carry explicit hypotheses, such as flatness, ensuring that pulled-back regular equations stay regular ([[def-pullback-cartier-divisor]]).

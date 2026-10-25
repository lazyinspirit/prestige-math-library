---
id: cex-arbitrary-pullback-does-not-define-a-chow-operation
kind: counterexample
title: "Scheme-theoretic preimages do not define a pullback on Chow groups"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 12
deps:
  - cor-segre-veronese-embedding
  - cor-blowup-birational-integral-scheme
  - def-axiom-of-choice
  - def-blowup-scheme-along-ideal
  - def-chow-group-of-cycles-mod-rational-equivalence
  - def-exceptional-divisor-blowup
  - def-refined-gysin-pullback-for-regular-embeddings
  - lem-blowup-isomorphism-off-center
  - lem-chow-groups-of-projective-space
  - lem-cycle-of-a-closed-subscheme
  - lem-flat-pullback-chow-groups
  - lem-proper-pushforward-of-cycles-well-defined
  - thm-blowup-projective
  - thm-blowup-regular-surface-closed-point-regular
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Intersection Theory, Section 43.1 (introduction: why the naive preimage is not a pullback)"
      url: "https://stacks.math.columbia.edu/download/intersection.pdf"
      locator: "Chapter 43, Section 43.1: the failure of the scheme-theoretic preimage as a pullback and the need for Gysin corrections"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry, Introduction to Intersection Theory, Class 17"
      url: "https://math.stanford.edu/~vakil/245/245class17.pdf"
      locator: "Class 17: failure of naive pullback for nonflat morphisms (point blowup of the plane)"
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
smooth-immersion and homological suppliers. **Statement refuted.** For every
morphism $f:Y\to X$ of smooth projective $k$-varieties, the **scheme-theoretic
preimage recipe** — send an integral closed subscheme $V\subseteq X$ to the
cycle $[f^{-1}(V)]$ of its scheme-theoretic preimage
([[lem-cycle-of-a-closed-subscheme]]) and extend the assignment linearly to all
cycles — descends to a well-defined homomorphism of abelian groups
$A_*(X)\to A_*(Y)$; that is, preimage cycles of rationally equivalent cycles are
rationally equivalent.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$; the projective plane $X=\mathbb P^2_k$ with a rational point $p$, a second rational point $q\ne p$, and the blowup $\pi:Y=\operatorname{Bl}_pX\to X$ with exceptional curve $E=\pi^{-1}(p)$.

[F1] The blowup is proper and birational; projectivity in this example is verified by the incidence model in step 1.1, rather than inferred from local H-projectivity. Its source is smooth by [F2]; the exceptional divisor is $\pi^{-1}(p)$ ([[def-blowup-scheme-along-ideal]], [[def-exceptional-divisor-blowup]], [[thm-blowup-projective]], [[cor-blowup-birational-integral-scheme]]).

[F2] Because $p$ is a rational point of the regular surface $X$, the blowup $Y$ is a smooth projective surface and $E\cong\mathbb P^1_k$; $\pi$ restricts to an isomorphism over $X\smallsetminus\{p\}$ ([[thm-blowup-regular-surface-closed-point-regular]], [[lem-blowup-isomorphism-off-center]]).

[F3] In $A_0(\mathbb P^2_k)\cong\mathbb Z$ the class of a closed point $x$ is $[\kappa(x):k][\mathbb P^0]$; in particular all $k$-rational points have the same class, and the degree homomorphism is injective ([[lem-chow-groups-of-projective-space]]).

[F4] The scheme-theoretic preimage of an integral subscheme is its cycle under the fundamental-cycle convention; proper pushforward of cycles is defined by the norm-degree formula and descends to rational equivalence ([[lem-cycle-of-a-closed-subscheme]], [[lem-proper-pushforward-of-cycles-well-defined]]).

[F5] For a flat morphism of fixed pure relative dimension the preimage recipe is the flat pullback and is well defined on Chow groups; in general the correction is given by the refined Gysin construction ([[lem-flat-pullback-chow-groups]], [[def-refined-gysin-pullback-for-regular-embeddings]]).

## Counterexample

1.1 The geometric set-up. Choose homogeneous coordinates $[x:y:z]$ with $p=[0:0:1]$. The incidence subscheme $H=\{xv=yu\}\subset\mathbb P^2_k\times\mathbb P^1_k$, with coordinates $[u:v]$ on the second factor, is the blowup: on $z\ne0$, its $u\ne0$ and $v\ne0$ charts are $\operatorname{Spec}k[x,v/u]$ with $y=x(v/u)$ and $\operatorname{Spec}k[y,u/v]$ with $x=y(u/v)$, the two Rees charts for $(x,y)$; away from $p$ the incidence projection is an isomorphism. These identifications glue to $H\cong Y$. The Segre embedding [[cor-segre-veronese-embedding]] therefore embeds $Y$ as a closed subscheme of projective space; the incidence embedding also proves that $\pi$ is projective. By [F2] the blowup $\pi:Y\to X$ at the rational point $p$ is a birational morphism of smooth projective surfaces, its exceptional curve $E=\pi^{-1}(p)$ is isomorphic to $\mathbb P^1_k$, and $\pi$ restricts to an isomorphism $\pi^{-1}(X\smallsetminus\{p\})\to X\smallsetminus\{p\}$; in particular for the second rational point $q\ne p$ the scheme-theoretic preimage $\pi^{-1}(q)=\{q'\}$ is a single reduced point. [F1, F2, given]

2.1 The rationally equivalent cycles. In $A_0(X)\cong\mathbb Z$ the classes of $k$-rational points are all equal because the degree homomorphism sends each to $[\kappa(x):k]=1$ and is injective: $[p]=[q]$ in $A_0(X)$. The preimage cycles, however, lie in different Chow degrees: $\pi^{-1}(p)=E$ is a curve, so $[E]\in Z_1(Y)$, while $\pi^{-1}(q)=\{q'\}$ is a point, so $[q']\in Z_0(Y)$. [F3, step 1.1]

3.1 The contradiction. If the preimage recipe descended to a homomorphism $\varphi:A_*(X)\to A_*(Y)$, then $[p]=[q]$ would force $\varphi[p]=\varphi[q]$, that is $[E]=[q']$ in $A_*(Y)$. Apply the proper pushforward $\pi_*$, which is well defined on rational equivalence by [F4]. Since $\pi(E)=\{p\}$ has dimension $0<1=\dim E$, the norm-degree formula gives $\pi_*[E]=0$; and since $\pi$ is an isomorphism over $q$, $\pi_*[q']=[q]$. Together with $[E]=[q']$ this gives $[q]=0$ in $A_0(X)$, contradicting that $[q]$ has degree $1$ by [F3]. By contrast the flat case of [F5] is well defined on Chow groups, so the failure is exactly the dimension jump of the non-flat morphism. Hence the preimage cycles of the rationally equivalent cycles $[p]$ and $[q]$ are not rationally equivalent, and the scheme-theoretic preimage recipe is not well defined on Chow groups. [F3, F4, F5, step 2.1] ∎

**Discussion.** The obstruction is the jump of fibre dimension at $p$; for flat morphisms of fixed pure relative dimension the recipe is the flat pullback of [[lem-flat-pullback-chow-groups]] and is well defined, while in general one needs the expected-dimension correction provided by the refined Gysin construction ([[def-refined-gysin-pullback-for-regular-embeddings]], and the Gysin construction for complete-intersection morphisms beyond the scope of this page). The counterexample refutes only the preimage recipe: it makes no claim about whether some corrected operation can define a pullback for the morphism above.

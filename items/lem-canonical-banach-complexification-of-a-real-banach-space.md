---
id: lem-canonical-banach-complexification-of-a-real-banach-space
kind: lemma
title: Canonical Banach complexification of a real Banach space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-banach-space", "def-norm-and-normed-space", "def-bounded-linear-operator", "def-operator-norm", "def-complex-numbers-and-arithmetic", "def-complex-conjugate-real-imaginary-part-and-modulus", "def-complete-ordered-field", "thm-sine-and-cosine-addition-formulas", "thm-polar-form-with-unique-principal-argument", "thm-complex-numbers-form-a-field", "lem-complex-conjugation-and-modulus-laws", "rem-real-and-complex-normed-space-convention", "cor-cauchy-reals-lub-complete", "cor-trigonometric-parity-and-pythagorean-identity", "thm-quarter-turn-values-and-shift-formulas"]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Exercise 5.4 and §5.1.1, printed pp. 209–213"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.1, printed pp. 19–24"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Let $X$ be a real Banach space ([[def-banach-space]]) and let
$X_{\mathbb C} := X \times X$ carry

* the complex scalar multiplication $(a+bi)(x,y) := (ax-by,\; bx+ay)$, making
  it a complex vector space, and
* the **rotation-supremum norm**
  $$\rho(x,y) \;:=\; \sup_{\theta \in \mathbb R} \bigl\|\cos\theta\,x - \sin\theta\,y\bigr\| ,$$
  the supremum of a bounded set of reals, so that $\rho(x,y) \in [0,\infty)$.

Then:

1. $\rho$ is a norm on the complex vector space $X_{\mathbb C}$ (the complex norm
   axioms of [[rem-real-and-complex-normed-space-convention]]), and $X_{\mathbb C}$ is complete
   for it, hence a complex Banach space;
2. $j : X \to X_{\mathbb C}$, $j(x) := (x,0)$, is a real-linear isometry, and
   for every bounded real-linear $T : X \to X$ the map
   $T_{\mathbb C}(x,y) := (Tx,Ty)$ is complex-linear and bounded with
   $\|T_{\mathbb C}\| = \|T\|$;
3. **(canonical comparison)** Let $Z$ be a complex Banach space and let
   $j_Z : X \to Z$ be a real-linear isometry such that every $z \in Z$ has a
   unique representation $z = j_Z(x) + i\,j_Z(y)$ with $x,y \in X$, and let
   $\sigma : Z \to Z$ be a conjugation: real-linear with $\sigma(iz) = -i\,\sigma(z)$,
   $\sigma^2 = \mathrm{id}$, $\sigma(j_Z(x)) = j_Z(x)$ and $\|\sigma(z)\| = \|z\|$
   for all $z \in Z$. Then
   $$\Phi : X_{\mathbb C} \to Z, \qquad \Phi(x,y) := j_Z(x) + i\,j_Z(y)$$
   is a complex-linear bijection with $\|\Phi\| \le 2$ and
   $\|\Phi^{-1}\| \le 2$, and $\Phi\,T_{\mathbb C} = T_Z\,\Phi$, where
   $T_Z := \Phi\,T_{\mathbb C}\,\Phi^{-1}$ is the extension of $T$ defined by
   $T_Z(j_Z(x) + i\,j_Z(y)) := j_Z(Tx) + i\,j_Z(Ty)$. If in addition $Z$ carries
   the rotation-supremum norm relative to $j_Z$, that is
   $\|j_Z(x) + ij_Z(y)\|_Z = \sup_\theta\|\cos\theta\,j_Z(x) - \sin\theta\,j_Z(y)\|_Z$,
   then $\Phi$ is an isometry.

The comparison is bounded, not isometric, in general; isometry holds precisely when the
comparison model has the same rotation-supremum norm under its unique coordinates.

## Facts & Assumptions

**Given:** A real Banach space $X$ with norm $\|\cdot\|$; the set $X_{\mathbb C} = X \times X$ with complex scalar multiplication $(a+bi)(x,y) = (ax-by,bx+ay)$; the function $\rho(x,y) = \sup_\theta\|\cos\theta x - \sin\theta y\|$.

[L1] $X$ is a real normed space that is complete: $\|x\| \ge 0$ with equality only for $x = 0$, $\|\lambda x\| = |\lambda|\,\|x\|$ for real $\lambda$, and $\|x+y\| \le \|x\|+\|y\|$; the closed unit ball and all bounded sets are as in [[def-norm-and-normed-space]], and completeness is [[def-banach-space]]. For complex spaces we use the modulus-homogeneity convention of [[rem-real-and-complex-normed-space-convention]].

[L2] $\mathbb C$ is a field with the specified real subfield, $|\mu| \ge 0$ vanishes exactly at $\mu = 0$, and $|\mu\nu| = |\mu|\,|\nu|$ ([[thm-complex-numbers-form-a-field]], [[lem-complex-conjugation-and-modulus-laws]]).

[L3] Every $\mu \ne 0$ in $\mathbb C$ has a representation $\mu = r(\cos\theta + i\sin\theta)$ with $r = |\mu| > 0$ and $\theta \in \mathbb R$ ([[thm-polar-form-with-unique-principal-argument]]).

[L4] For all real $u,v$, $\cos(u+v) = \cos u\cos v - \sin u\sin v$ and $\sin(u+v) = \sin u\cos v + \cos u\sin v$ ([[thm-sine-and-cosine-addition-formulas]]).

[L5] A real-linear $T : X \to X$ is bounded when it has a finite bound
([[def-bounded-linear-operator]]). Its operator norm $\|T\|$ is the least such
bound, and $\|Tx\|\leq\|T\|\,\|x\|$ for all $x$
([[def-operator-norm]]).

[L6] The real field is a complete ordered field: every nonempty subset of $\mathbb R$ that is bounded above has a least upper bound, and suprema are monotone, satisfy $\sup(f+g)\le\sup f+\sup g$ for bounded real functions on a common nonempty index set, and commute with multiplication by a positive scalar ([[cor-cauchy-reals-lub-complete]], [[def-complete-ordered-field]]). Its order properties used below follow directly by comparing upper bounds.

[L7] For every real angle, $|\sin\theta|,|\cos\theta|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]); $(\cos0,\sin0)=(1,0)$ and $(\cos(\pi/2),\sin(\pi/2))=(0,1)$ ([[thm-quarter-turn-values-and-shift-formulas]]).

## Proof

**Proof technique:** direct.

1.1 For every $(x,y)$ the set $\{\|\cos\theta x - \sin\theta y\| : \theta \in \mathbb R\}$ is nonempty and bounded above by $\|x\|+\|y\|$, because $\|\cos\theta x - \sin\theta y\| \le |\cos\theta|\,\|x\| + |\sin\theta|\,\|y\| \le \|x\|+\|y\|$; hence $\rho(x,y)$ is a well-defined real number with $0 \le \rho(x,y) \le \|x\|+\|y\|$, and choosing $\theta = 0$ and $\theta = \tfrac{\pi}{2}$ gives $\|x\| \le \rho(x,y)$ and $\|y\| \le \rho(x,y)$. [L1, L6, L7, algebra]

1.2 $j(x) = (x,0)$ is real-linear, and $\rho(x,0) = \sup_\theta\|\cos\theta\,x\| = \|x\|$ because the value at $\theta = 0$ is $\|x\|$ and $|\cos\theta| \le 1$ bounds every other value by $\|x\|$; hence $j$ is an isometric real-linear embedding. [L1, L6, L7, algebra]

1.3 For a real-linear $T : X \to X$ the map $T_{\mathbb C}(x,y) := (Tx,Ty)$ is complex-linear: $T_{\mathbb C}((a+bi)(x,y)) = T_{\mathbb C}(ax-by,bx+ay) = (aTx-bTy,\,bTx+aTy) = (a+bi)\,T_{\mathbb C}(x,y)$ by real-linearity of $T$. [L1, algebra]

1.4 In the situation of claim 3, every $z \in Z$ is $j_Z(x) + ij_Z(y)$ for unique $x,y \in X$ by hypothesis; hence $\Phi(x,y) := j_Z(x)+ij_Z(y)$ is a well-defined bijection $X_{\mathbb C} \to Z$, and it is complex-linear because $j_Z$ is real-linear and $i^2 = -1$. [L1, L2, algebra]

2.1 The conjugation inverts the two components: $\sigma(j_Z(x) + ij_Z(y)) = j_Z(x) - ij_Z(y)$, because $\sigma$ is real-linear, fixes $j_Z(X)$ pointwise and satisfies $\sigma(iw) = -i\sigma(w)$; consequently the formulas $j_Z(x) = \tfrac12(z + \sigma(z))$ and $j_Z(y) = \tfrac{1}{2i}(z-\sigma(z))$ hold for $z = j_Z(x)+ij_Z(y)$. [step 1.4, L2, algebra]

2.2 $\rho(x,y) = 0$ forces $x = y = 0$ by the bound $\max(\|x\|,\|y\|) \le \rho(x,y)$ of step 1.1 and definiteness of the norm, so $\rho$ is definite. [step 1.1, L1, algebra]

2.3 $\rho$ satisfies the triangle inequality: for all $(x,y),(x',y')$, and every $\theta$, $\|\cos\theta(x+x') - \sin\theta(y+y')\| \le \|\cos\theta x - \sin\theta y\| + \|\cos\theta x' - \sin\theta y'\| \le \rho(x,y) + \rho(x',y')$, so the supremum over $\theta$ gives $\rho(x+x',y+y') \le \rho(x,y)+\rho(x',y')$. [step 1.1, L1, L6, algebra]

2.4 $\rho$ is absolutely homogeneous for complex scalars: writing $\mu = a+bi$, for $\theta \in \mathbb R$ one has $\cos\theta(ax-by) - \sin\theta(bx+ay) = (a\cos\theta - b\sin\theta)x - (b\cos\theta + a\sin\theta)y$; if $\mu \ne 0$ and $\mu = r(\cos\varphi + i\sin\varphi)$ by [L3], then $a = r\cos\varphi$ and $b = r\sin\varphi$, so [L4] turns the two coefficients into $r\cos(\varphi+\theta)$ and $r\sin(\varphi+\theta)$; the norm of the resulting vector is $r\|\cos\psi\,x - \sin\psi\,y\|$ with $\psi := \varphi+\theta$, and taking suprema over $\theta$ (equivalently over $\psi$) gives $\rho(\mu(x,y)) = r\,\rho(x,y) = |\mu|\,\rho(x,y)$, while $\mu = 0$ gives the zero vector. [step 1.1, L2, L3, L4, L6, algebra]

2.5 If in addition $T$ is bounded, then $\rho(T_{\mathbb C}(x,y)) = \sup_\theta\|T(\cos\theta\,x - \sin\theta\,y)\| \le \|T\|\sup_\theta\|\cos\theta x - \sin\theta y\| = \|T\|\,\rho(x,y)$ by [L5], and the reverse inequality follows by evaluating at $y = 0$, where the supremum is $\|Tx\|$: the operator norm of $T_{\mathbb C}$ is exactly $\|T\|$. If $X=\{0\}$, both unit-ball suprema are zero by [L5], so this conclusion still holds. [step 1.2, step 1.3, L5, L6, algebra]

2.6 The intertwining is a definitional identity: $T_Z := \Phi\,T_{\mathbb C}\,\Phi^{-1}$ satisfies $T_Z(j_Z(x)+ij_Z(y)) = \Phi(T_{\mathbb C}(x,y)) = j_Z(Tx) + ij_Z(Ty)$, so $\Phi\,T_{\mathbb C} = T_Z\,\Phi$ holds by construction. [step 1.3, step 1.4, algebra, L1] 

2.7 If $Z$ carries the rotation-supremum norm relative to $j_Z$, then $\|\Phi(x,y)\|_Z = \sup_\theta\|\cos\theta\,j_Z(x) - \sin\theta\,j_Z(y)\|_Z = \sup_\theta\|j_Z(\cos\theta\,x - \sin\theta\,y)\|_Z = \sup_\theta\|\cos\theta\,x - \sin\theta\,y\| = \rho(x,y)$, using real-linearity and isometry of $j_Z$; so $\Phi$ is an isometry in that case. Conversely, if $\Phi$ is isometric, its defining formula gives exactly this norm equality for every $(x,y)$, which is the stated rotation-supremum condition. [step 1.2, step 1.4, L1, L6, algebra]

3.1 For $z = j_Z(x)+ij_Z(y)$ the component estimates $\|x\| = \|j_Z(x)\| \le \tfrac12(\|z\|+\|\sigma(z)\|) = \|z\|$ and $\|y\| \le \|z\|$ hold, because $\|\sigma(z)\| = \|z\|$ by hypothesis and $j_Z$ is isometric. [step 2.1, L1, algebra]

3.2 By steps 1.1, 2.2, 2.3 and 2.4, the function $\rho$ satisfies definiteness, the triangle inequality and absolute homogeneity, so it is a norm on the complex vector space $X_{\mathbb C}$ with scalar multiplication $(a+bi)(x,y) = (ax-by,bx+ay)$, which is associative and distributive because $\mathbb C$ is a field. [step 1.1, step 2.2, step 2.3, step 2.4, L1, L2, algebra]

4.1 For $z = \Phi(x,y)$ one has $\rho(x,y) \le \|x\|+\|y\| \le 2\|z\|$ by [step 3.1] and $\|\Phi(x,y)\|_Z = \|j_Z(x)+ij_Z(y)\| \le \|x\|+\|y\| \le 2\rho(x,y)$ by [step 1.1]; hence $\Phi^{-1}$ and $\Phi$ are bounded with norms at most $2$. Thus $\|T_Zz\|\le4\|T\|\|z\|$, using its defining composition and step 2.5. [step 1.4, step 3.1, step 1.1, step 2.5, step 2.6, L1, L5, algebra]

4.2 The norm $\rho$ is equivalent to the product maximum norm $\|(x,y)\|_\infty := \max(\|x\|,\|y\|)$: indeed $\|(x,y)\|_\infty \le \rho(x,y) \le 2\|(x,y)\|_\infty$ by [step 1.1]. Consequently a $\rho$-Cauchy sequence in $X_{\mathbb C}$ is Cauchy for $\|\cdot\|_\infty$, hence its two coordinate sequences are Cauchy in $X$ and converge by completeness of $X$, and the coordinatewise limit is the $\rho$-limit by the same two-sided estimate; so $X_{\mathbb C}$ is complete for $\rho$ and is a complex Banach space. [step 3.2, step 1.1, L1, L6, algebra]

5.1 Claims 1, 2 and 3 are established: [step 3.2] and [step 4.2] give the complex Banach space, [step 1.2] and [step 2.5] give the isometric embedding and the same-norm extension, and [step 4.1], [step 2.6] and [step 2.7] give the bounded canonical comparison, its intertwining property and its isometry in the equal-norm case. [step 3.2, step 4.2, step 1.2, step 2.5, step 4.1, step 2.6, step 2.7, L1] ∎

## Remarks

- **The comparison is not claimed to be isometric in general.** Bühler–Salamon Exercise 5.4 and the surrounding discussion show that a real Banach space can carry different complexification norms agreeing on its real copy; the rotation-supremum model is one convenient choice, and the canonical map between two compatible models is bounded in both directions but isometric only when norms are the same rotation-supremum construction.

- **Why a real operator's spectrum is defined through the complexification.** $T_{\mathbb C}$ is complex-linear on a complex Banach space, and, when $X\ne\{0\}$, the nonzero unital algebra $\mathcal B(X_{\mathbb C})$ applies to it and the whole spectrum theory of this page becomes available; the definition [[def-complexification-and-spectrum-of-a-real-operator]] records that convention and uses the bounded comparison of claim 3 to show that the resulting spectrum does not depend on the model.

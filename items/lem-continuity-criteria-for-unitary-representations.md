---
id: lem-continuity-criteria-for-unitary-representations
kind: lemma
title: Continuity criteria for unitary representations
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-topological-group, def-strongly-continuous-unitary-representation, def-matrix-coefficient-of-a-unitary-representation, def-real-and-complex-inner-product-space, cor-inner-product-induces-a-norm, def-complex-metric-convergence-and-continuity, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, lem-of-square-monotone, cor-cauchy-reals-lub-complete, thm-of-square-roots]
landmark: false
sources:
  references:
    - title: "Karl-Hermann Neeb, Unitary Representation Theory (2024), §1.2, Lemma 1.2.6, printed p. 15; §1.3, Exercise 1.3.3, printed p. 26"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/rep14.pdf"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, corrected 2025 notes, §3.4, Proposition 3.4.3, printed pp. 106–107"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
---

## Statement

Let $G$ be a topological group, $H$ a complex Hilbert space, and
$\pi:G\to U(H)$ a group homomorphism. The following conditions are
equivalent:

1. $\pi$ is strongly continuous.
2. Every matrix coefficient $g\mapsto\langle\pi(g)\xi,\eta\rangle$ is
   continuous on $G$.
3. For every total subset $S\subseteq H$, each diagonal coefficient
   $g\mapsto\langle\pi(g)v,v\rangle$, $v\in S$, is continuous at the identity
   $e$.

Here $S$ is **total** if every $x\in H$ can be approximated in norm by finite
complex linear combinations of elements of $S$; the empty sum is allowed.

## Facts & Assumptions

[A1] For a strongly continuous unitary representation, every matrix coefficient is continuous ([[def-matrix-coefficient-of-a-unitary-representation]]).

[A2] A unitary representation is a group homomorphism into bijective complex-linear isometries, and strong continuity means that each orbit map is norm-continuous ([[def-strongly-continuous-unitary-representation]]).

[A3] Multiplication and inversion in $G$ are continuous ([[def-topological-group]]).

[A4] The complex inner product is linear in its first argument, conjugate-linear in its second, and conjugate symmetric ([[def-real-and-complex-inner-product-space]]).

[A5] The induced length is nonnegative, vanishes exactly at zero, is absolutely homogeneous, and satisfies the triangle inequality ([[cor-inner-product-induces-a-norm]]).

[A6] If $z=a+bi$, then $\overline z=a-bi$ and $|z|=\sqrt{a^2+b^2}$; in particular $|\overline z|=|z|$, $|-z|=|z|$, and $|t|=t$ for a nonnegative real $t$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-of-square-roots]]).

[A7] Complex modulus is subadditive: $|z+w|\le |z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[A8] The real numbers form a complete ordered field ([[cor-cauchy-reals-lub-complete]]).

[A9] Squaring is strictly increasing on the nonnegative reals: if $0\le a<b$, then $a^2<b^2$ ([[lem-of-square-monotone]]).

[A10] Continuity into $\mathbb C$ is measured by the metric $d_{\mathbb C}(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]).

## Proof

**Proof technique:** direct.

**Given:** $G$, $H$, and a group homomorphism $\pi:G\to U(H)$. When testing condition 3, fix a total subset $S$ and assume that each diagonal coefficient for $v\in S$ is continuous at $e$.

1.1 If $\pi$ is strongly continuous, [A1] makes every mixed matrix coefficient continuous on $G$. In particular, every diagonal coefficient is continuous at $e$ on every total subset. [A1, A2]

1.2 Now suppose the diagonal coefficients are continuous at $e$ for a total subset $S$. Fix $v\in S$, put $q(g)=\langle\pi(g)v,v\rangle$, $r=\|v\|^2=q(e)$, and $z(g)=q(g)-r$. The homomorphism law gives $\pi(e)=I$. Using [A2] and [A4], $$\|\pi(g)v-v\|^2=\|\pi(g)v\|^2-\langle\pi(g)v,v\rangle-\langle v,\pi(g)v\rangle+\|v\|^2=2r-q(g)-\overline{q(g)}=-(z(g)+\overline{z(g)}).$$ This is a nonnegative real number. By [A6] and [A7], $$0\le\|\pi(g)v-v\|^2=\big|z(g)+\overline{z(g)}\big|\le |z(g)|+|\overline{z(g)}|=2|z(g)|.$$ Continuity of $q$ at $e$ in the metric of [A10] gives, for each $\varepsilon>0$, a neighborhood of $e$ on which $2|z(g)|<\varepsilon^2$. Then $\|\pi(g)v-v\|^2<\varepsilon^2$, so [A5] and [A9] give $\|\pi(g)v-v\|<\varepsilon$. No nonzero-vector hypothesis was used, so this also covers $v=0$. [A2, A4, A5, A6, A7, A8, A9, A10, algebra]

2.1 If $w=\sum_{j=1}^n\lambda_jv_j$ is a finite complex linear combination of elements of $S$, then linearity and [A5] give $$\|\pi(g)w-w\|\le\sum_{j=1}^n|\lambda_j|\,\|\pi(g)v_j-v_j\|\longrightarrow0\qquad(g\to e).$$ by step 1.2. Only finitely many orbit maps occur, so intersecting their neighborhoods proves convergence of the sum. If $n=0$, then $w=0$ and the orbit difference is identically zero. [A5, step 1.2, algebra]

3.1 For any $x\in H$ and $\varepsilon>0$, totality supplies a finite-span vector $w$ with $\|x-w\|<\varepsilon/3$. Step 2.1 gives a neighborhood of $e$ on which $\|\pi(g)w-w\|<\varepsilon/3$. For such $g$, the triangle inequality and the isometry property in [A2] give $$\|\pi(g)x-x\|\le\|\pi(g)(x-w)\|+\|\pi(g)w-w\|+\|w-x\|=2\|x-w\|+\|\pi(g)w-w\|<\varepsilon.$$ This proves continuity at $e$ for every orbit map. If $S=\varnothing$, totality means the only available finite sum is $0$ and still supplies the required approximation; step 2.1 and the same estimate apply (and force $H=\{0\}$). [A2, A5, step 2.1, given]

4.1 Fix $x\in H$ and $g_0\in G$. As $g\to g_0$, continuity of multiplication in [A3] gives $h=g_0^{-1}g\to e$. The homomorphism law and the isometry $\pi(g_0)$ yield $$\|\pi(g)x-\pi(g_0)x\|=\|\pi(g_0)(\pi(h)x-x)\|=\|\pi(h)x-x\|\longrightarrow0.$$ by step 3.1. Thus every orbit map is norm-continuous on $G$, which is strong continuity. [A2, A3, step 3.1]

5.1 If every matrix coefficient is continuous, its diagonal coefficients are continuous at $e$ on any total subset, so steps 1.2–4.1 prove strong continuity. Conversely step 1.1 proves that strong continuity implies both coefficient conditions. Hence all three conditions are equivalent. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎

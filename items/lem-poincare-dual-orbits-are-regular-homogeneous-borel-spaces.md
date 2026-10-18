---
id: lem-poincare-dual-orbits-are-regular-homogeneous-borel-spaces
kind: lemma
title: Lorentz momentum orbits are regular homogeneous Borel spaces
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
proof_strategy: direct
axiom_use: >-
  AC is inherited from the connected-cover topology supplier, including its
  AC_omega group-cover classification and its AC local-section fibration proof;
  the coordinate and orbit calculations are choice-free.
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-connected-poincare-cover-and-positive-energy
  - lem-lorentz-stabilizers-and-connected-cover-preimages
  - def-pontryagin-dual-and-compact-open-topology
  - lem-compact-open-character-group-operations-are-continuous
  - thm-dual-of-an-lca-group-is-locally-compact-abelian
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
  - lem-closed-subgroup-quotient-averaging-and-compact-lifts
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.2, PDF pp. 11–13: causal orbit types and time-orientation distinctions; the local proof also treats D=2 and verifies regularity."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.13–4.15 (PDF pp. 61–63): mass shells, energy signs and Lorentz orbits."
---

## Statement

Let $D\ge2$, let $L=SO_0(D-1,1)$ act on momentum space $(\mathbb R^D,\eta)$, and use the character convention of [[def-connected-poincare-cover-and-positive-energy]]. The map $p\mapsto\chi_p$ is a homeomorphism from $\mathbb R^D$ onto $\widehat{\mathbb R^D}$ with its compact-open topology. Every $L$-orbit is locally closed, and a countable family of $L$-invariant Borel subsets separates distinct orbits. The orbits are:

- for $q=\eta(p,p)<0$, the future and past sheets for each fixed $q$;
- for $q>0$, one orbit for each fixed $q$ if $D\ge3$, and two orbits distinguished by the sign of $p^1$ if $D=2$;
- for $q=0$, the origin and the nonzero future and past null orbits if $D\ge3$; if $D=2$, the four nonzero null rays distinguished by the signs of $p^0$ and $p^1$.

For every connected cover $c:K\to L$, the induced action of $K$ on the whole translation dual has the same orbit sets and is countably separated by invariant Borel sets. Each orbit $O$ is Borel, its stabilizer $K_p$ is closed, and the orbit map $K/K_p\to O$ is a Borel isomorphism.

## Facts & Assumptions

**Given:** The dimension $D\ge2$, the mostly-plus form $\eta$, the proper orthochronous Lorentz action, and the character convention from [[def-connected-poincare-cover-and-positive-energy]].

[F1] [[def-connected-poincare-cover-and-positive-energy]]: $L$ preserves $\eta$, preserves future-pointing causal vectors, and acts on characters by $\Lambda\cdot\chi_p=\chi_{\Lambda p}$.

[F2] [[lem-continuous-characters-of-the-real-line-are-exponentials]]: every continuous character of $(\mathbb R,+)$ has the form $t\mapsto e^{2\pi i\xi t}$ for a unique $\xi\in\mathbb R$.

[F3] [[def-pontryagin-dual-and-compact-open-topology]] and [[lem-compact-open-character-group-operations-are-continuous]]: the dual topology is compact-open and character multiplication/inversion are continuous.

[F4] [[thm-dual-of-an-lca-group-is-locally-compact-abelian]]: the Pontryagin dual of $\mathbb R^D$ is locally compact Hausdorff.

[F5] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: each connected cover $K$ is second-countable locally compact Hausdorff; $K_p=c^{-1}(L_p)$ is closed, and $K$ has the same orbits as $L$.

[F6] [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]: in a second-countable locally compact Hausdorff space, every open set is a countable union of compact subsets contained in it.

[F7] [[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]: for a closed subgroup of a locally compact Hausdorff group, the quotient is locally compact Hausdorff and the quotient map is open.

[A1] AC and its Countable Choice consequence are inherited through [F5]'s connected-cover hypotheses; the explicit dual and orbit-coordinate computations use no choice. [[def-axiom-of-choice]], [[def-countable-choice]]

## Proof

**Given:** $D\ge2$, the Lorentz action, and the character convention in [F1].

1.1 Let $\gamma\in\widehat{\mathbb R^D}$. For the coordinate vectors $e_j$, each restriction $t\mapsto\gamma(te_j)$ is a continuous character, so [F2] gives unique $\xi_j\in\mathbb R$ with $\gamma(te_j)=e^{2\pi i\xi_jt}$. Since $a=\sum_j a^je_j$ and $\gamma$ is a homomorphism, $\gamma(a)=\prod_j e^{2\pi i\xi_ja^j}=\chi_p(a)$ for $p^0=-2\pi\xi_0$ and $p^j=2\pi\xi_j$ for $j>0$. The same restrictions show uniqueness, so $p\mapsto\chi_p$ is a bijection. [F1, F2, given]

1.2 Put $q(p)=\eta(p,p)$. A boost in the plane spanned by $e_0$ and a chosen spatial unit vector has matrix $\begin{pmatrix}\cosh t&\sinh t\\\sinh t&\cosh t\end{pmatrix}$ on that plane and fixes its orthogonal complement; it lies in $L$. Spatial rotations lie in $L$ when $D\ge3$. If $q<0$, a boost sends $p$ to $(\operatorname{sgn}(p^0)\sqrt{-q},0,\ldots,0)$, and no element of $L$ changes the sign of $p^0$. If $q>0$ and $D\ge3$, first rotate the spatial part to the first spatial axis, then choose $t$ with $\tanh t=-p^0/|\mathbf p|$ to set the time coordinate to zero; the result is $(0,\sqrt q,0,\ldots,0)$, and spatial rotations act transitively on its directions. If $q>0$ and $D=2$, choose $t$ with $\tanh t=-p^0/p^1$; the result is $(0,\operatorname{sgn}(p^1)\sqrt q)$. In the $D=2$ boost group, $p^1+p^0$ and $p^1-p^0$ are multiplied by $e^t$ and $e^{-t}$, so their signs are invariant; for $q>0$ both have the sign of $p^1$. If $q=0$ and $p\ne0$, a spatial rotation followed by a boost rescales any future null vector to $(1,1,0,\ldots,0)$ when $D\ge3$; time reversal is outside $L$, so future and past give distinct orbits. In $D=2$, one of $p^1+p^0,p^1-p^0$ is zero and the other has a fixed sign, distinguishing the four signed rays. The zero vector is fixed. [F1, algebra, construct]

2.1 The map $p\mapsto\chi_p$ is continuous for the compact-open topology: for compact $C\subset\mathbb R^D$, the vectors $a\in C$ are bounded, so $\sup_{a\in C}|\eta(p-p_0,a)|\to0$ as $p\to p_0$; the exponential is uniformly continuous on bounded real intervals, hence $\chi_p\to\chi_{p_0}$ uniformly on $C$. Its inverse is continuous as well. For each coordinate axis use the compact segment $C_j=\{te_j:|t|\le1\}$ and the compact-open neighborhood $V=\{z\in\mathbb T:|z-1|<1\}$ of $1$. If $\chi_{p-p_0}[C_j]\subset V$, then $|p^j-p_0^j|<\pi/3$: a difference at least $\pi$ attains phase $-1$ at some $|t|\le1$, while a difference in $[\pi/3,\pi)$ already has $|e^{it(p^j-p_0^j)}-1|\ge1$ at $t=1$. For any prescribed $\varepsilon>0$, replace each $C_j$ by $C_{j,R}=\{te_j:|t|\le R\}$ with $R>\pi/(3\varepsilon)$. The same phase argument, rescaled by $t=Ru$, makes $\chi_{p-p_0}[C_{j,R}]\subset V$ imply $|p^j-p_0^j|<\pi/(3R)<\varepsilon$. These finitely many compact-open conditions therefore force every coordinate difference below any prescribed tolerance. Translations in the character group carry these neighborhoods of $1$ to neighborhoods of $\chi_{p_0}$ by [F3], proving inverse continuity. [F1, F3, step 1.1, algebra]

2.2 The orbits in step 1.2 are locally closed. A fixed timelike sheet is closed because on $q=q_0<0$ its time coordinate has absolute value at least $\sqrt{-q_0}$; a fixed spacelike level is closed, and in $D=2$ each sign branch is closed because $|p^1|\ge\sqrt q$. A nonzero null future or past orbit is relatively open in the corresponding closed causal null cone, and the four $D=2$ rays are relatively open in their closed half-cones; the origin is closed. [step 1.2, F1]

3.1 The rational sublevel sets $E_r=\{p:q(p)<r\}$, $r\in\mathbb Q$, are invariant Borel sets and separate distinct values of $q$. For $D\ge3$ add $T_\pm=\{q<0,\ \pm p^0>0\}$, $N_\pm=\{q=0,\ p\ne0,\ \pm p^0>0\}$, $\{0\}$, and $\{q>0\}$. These are invariant because $L$ preserves time orientation on the causal cone and preserves $q$. For $D=2$ instead add the two spacelike sets $S_\pm=\{q>0,\ \pm p^1>0\}$ and the four null-ray sets $N_{\epsilon,\delta}=\{q=0,\ p\ne0,\ \epsilon p^0>0,\ \delta p^1>0\}$ for $\epsilon,\delta\in\{+1,-1\}$, along with the two timelike signs and $\{0\}$. The light-cone coordinates from step 1.2 show these sets are invariant. The orbit list in step 1.2 shows that two points belong to the same orbit exactly when they have the same $q$ and the same one of these finite type labels. Thus this countable family separates every pair of orbits on the whole dual, including spacelike and past orbits. [F1, step 1.2, step 2.2]

4.1 Since $c:K\to L$ is onto, $K$ and $L$ have exactly the same orbits on $\mathbb R^D$ and on its character dual; the invariant Borel family of step 3.1 therefore separates $K$-orbits too. For any $p$, $K_p$ is closed by [F5]. The quotient map $q:K\to K/K_p$ is open and the quotient is locally compact Hausdorff by [F7]; images of a countable basis of $K$ give a countable basis of the quotient. The orbit map $\varphi:K/K_p\to O$ is a continuous bijection. For an open $V\subseteq K/K_p$, [F6] writes $V$ as a countable union of compact subsets; their images under $\varphi$ are compact and hence closed in the Hausdorff dual by [F4], so $\varphi(V)$ is Borel. Thus $\varphi^{-1}$ is Borel, while $\varphi$ is continuous. The dual identification, orbit list, local closedness, regularity, and homogeneous Borel property follow from steps 1.1–3.1 and the preceding construction. [F1, F4, F5, F6, F7, A1, step 1.1, step 2.1, step 1.2, step 2.2, step 3.1] ∎

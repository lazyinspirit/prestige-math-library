---
id: lem-em-interface-derivatives
kind: lemma
title: "Distributional divergence and curl across a stationary interface"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-em-surface-distribution, def-distribution, def-distributional-derivative, def-regular-distribution-from-a-locally-integrable-function, def-bounded-piecewise-c-one-euclidean-domain, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, def-surface-integral-on-a-compact-c-one-hypersurface, def-cross-product-in-r3, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-countable-choice, def-divergence-and-curl-of-a-c1-vector-field, lem-test-function-cutoffs-and-euclidean-localization, def-fixed-support-test-function-frechet-space]
dependency_roles:
  def-em-surface-distribution: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  def-fixed-support-test-function-frechet-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis, 2014), §1.10, §1.12, §2.7"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "S. Dyatlov, Lecture notes for 18.155 (MIT), Chapter 2 and Chapter 3"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]). Let $\Omega\subseteq\mathbb R^3$ be open and let $(S,\Omega_-,\Omega_+,n)$ be a two-sided presentation of a compact embedded $C^2$ interface in $\Omega$ in the sense of [[def-em-surface-distribution]]: $\Omega\setminus S=\Omega_-\cup\Omega_+$ are the two open sides and $n:S\to\mathbb R^3$ is the continuous unit normal pointing from $\Omega_-$ to $\Omega_+$. Let $F:\Omega\setminus S\to\mathbb R^3$ be of class $C^1$ on $\Omega_-$ and on $\Omega_+$ separately, with one-sided $C^1$ traces on $S$: $F$ and each first partial derivative $\partial_iF$ extend continuously from each side to $S$, and the traces $F_+,F_-\in C^0(S;\mathbb R^3)$ give the jump $[F]=F_+-F_-$.

Let $\{\partial_iF_j\}$, $\{\operatorname{div}F\}$ and $\{\operatorname{curl}F\}$ denote the locally integrable fields equal on $\Omega_\pm$ to the corresponding classical derivative of $F$; these are regular distributions ([[def-regular-distribution-from-a-locally-integrable-function]]). The slice-chart definition makes $S$ a hypersurface without manifold boundary, so no edge is part of these data. Then, in the distributional sense,

$$\partial_iF_j=\{\partial_iF_j\}+n_i\,[F_j]\,\delta_S\qquad(i,j\in\{1,2,3\}),$$

and consequently

$$\operatorname{div}F=\{\operatorname{div}F\}_{\mathrm{piecewise}}+n\cdot[F]\,\delta_S,\qquad \operatorname{curl}F=\{\operatorname{curl}F\}_{\mathrm{piecewise}}+n\times[F]\,\delta_S,$$

as distributions on $\Omega$: their pairings agree for every $\psi\in\mathcal D(\Omega)$. Here $\delta_S$ is the surface distribution of [[def-em-surface-distribution]], $n\cdot[F]=\sum_i n_i[F_i]$, and $n\times[F]$ is the cross product of [[def-cross-product-in-r3]]. A moving interface with $\partial_tS\ne0$ requires additional terms and is not covered; the stationary jump formulas may not be reused for a moving interface. Interfaces with a manifold boundary require separate definitions and are not included.

## Facts & Assumptions

**Given:** The open set $\Omega\subseteq\mathbb R^3$; a two-sided compact embedded $C^2$ interface $S$ with sides $\Omega_\pm$ and unit normal $n$ from $\Omega_-$ to $\Omega_+$; a field $F$ of class $C^1$ on each side with one-sided $C^1$ traces; and a test function $\psi\in\mathcal D(\Omega)$ with compact support in $\Omega$.

[F1] Surface distributions and jumps: $\delta_S(\varphi)=\int_S\varphi\,dS$, the density functional and the jump $[F]=F_+-F_-$ are those of [[def-em-surface-distribution]]; a field $C^1$ on each side with one-sided continuous traces has locally integrable components, and the traces extend continuously to $S$.

[F2] Distributional derivative and regular distributions: $\langle\partial_i u,\varphi\rangle=-\langle u,\partial_i\varphi\rangle$ for $u\in\mathcal D'(\Omega)$ ([[def-distributional-derivative]]), and a locally integrable function defines a distribution by integration ([[def-regular-distribution-from-a-locally-integrable-function]], [[def-distribution]]).

[F3] Divergence theorem and domains: under $\mathrm{AC}_\omega$, a bounded open set with a specified finite piecewise $C^1$ presentation admits the divergence theorem $\int_\Omega\operatorname{div}G=\sum_j\int_{S_j}G\cdot\nu_j\,dS$ for $G\in C^1(\overline\Omega)$ ([[def-bounded-piecewise-c-one-euclidean-domain]], [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F4] Localization: compactly supported smooth cutoffs and smooth partitions of unity subordinate to a given open cover of an open set exist ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F5] Derivative conventions: divergence and curl are those of [[def-divergence-and-curl-of-a-c1-vector-field]]; the cross product satisfies $(u\times v)_k=\epsilon_{kij}u_iv_j$ in the right-handed convention of [[def-cross-product-in-r3]], where $\epsilon_{kij}$ is $+1$ for an even permutation of $(1,2,3)$, $-1$ for an odd permutation and zero for repeated indices (all repeated indices are summed), and the Euclidean inner product is that of [[def-euclidean-inner-product]]; products and one-sided derivatives follow the usual product and chain rules ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct; reduce to a local single-patch computation by a partition of unity, integrate by parts on each side with the divergence theorem, and read off the jump terms.

1.1 By [F1] the components of $F$ and of its one-sided first derivatives are locally integrable on $\Omega$, the piecewise fields $\{\partial_iF_j\}$ are locally integrable, and $[F_j]$ is continuous on $S$; hence all the distributions displayed in the Statement are defined, and $n_i[F_j]\delta_S$ is the surface distribution of the continuous density $n_i[F_j]$ of [F1]. [given, F1, F2, algebra]

1.2 Reduction to finite chart boxes. At a point of $S$ use the $C^2$ slice diffeomorphism $\phi$ from [F1], with $\phi(S)=\{s=0\}$ locally. Choose a closed rectangular product box inside its open image, centred at the image point, and write $B$ for its open inverse image. Shrink the box so its closure is compactly contained in the chart and in $\Omega$. The two sets $B_\pm=B\cap\Omega_\pm$ are inverse images of the two open half-boxes: the local side designation is determined by the normal convention and continuity, and the half-boxes are connected. Each has a specified finite piecewise $C^1$ presentation, with the interface rectangle at $s=0$ and the finitely many outer rectangular faces transported by the $C^2$ chart inverse. Faces are regular parametrized compact patches. Their seams are transported line segments and vertices, hence null in ambient volume: the chart inverse has bounded first derivatives on the compact box, so a subdivision of each segment into $O(\delta^{-1})$ pieces has images covered by balls of radius $C\delta$, whose total three-dimensional content is $O(\delta^2)\to0$. For the required surface-null condition, parametrize each face by its two free box coordinates. Its seam preimage is a finite union of line segments, covered by $O(\delta^{-1})$ parameter squares of area $O(\delta^2)$; thus it has two-dimensional Lebesgue measure zero. The chart surface density is bounded on the compact face, so its surface integral on those seams is zero. This verifies the finite-face and seam obligations in [F3], without asserting any property of a spherical chart cut. Compactness of the test support and [F4] now give finitely many such $B_1,\dots,B_N$ covering $\operatorname{supp}\psi\cap S$, with compactly supported smooth cutoffs $\chi_k$ inside $B_k$ summing to one near that intersection. Write $\psi=\sum_k\chi_k\psi+(1-\sum_k\chi_k)\psi$; the last test vanishes near $S$, where the identity is the ordinary classical integration-by-parts identity. Thus it suffices to prove the displayed component identity for a test supported in one $B_k$. [given, F1, F2, F3, F4, F5, algebra]


2.1 Local computation: let $\varphi\in\mathcal D(\Omega)$ have support in a chart box $B=B_k$ as in step 1.2. By [F2], $\langle\partial_iF_j,\varphi\rangle=-\int_{\Omega}F_j\partial_i\varphi=-\int_{\Omega_+}F_j\partial_i\varphi-\int_{\Omega_-}F_j\partial_i\varphi$. On each side apply the divergence theorem [F3] to $G^\pm:=F_j\varphi\,e_i$. Its values and first spatial derivatives extend continuously to the closed half-box by the one-sided trace hypothesis and the product rule, so it belongs to $C^1(\overline{B_\pm})$ in the stated up-to-boundary convention, which requires no ambient extension. It vanishes near every outer box face because $\operatorname{supp}\varphi\subseteq B$. For complex $\varphi$, apply the real divergence theorem separately to its real and imaginary parts; the outward normal of $\Omega_+$ on the interface face is $-n$ and that of $\Omega_-$ is $+n$, so $\int_{\Omega_+}\partial_i(F_j\varphi)=-\int_{S\cap B}(F_j)_+\varphi\,n_i\,dS$ and $\int_{\Omega_-}\partial_i(F_j\varphi)=\int_{S\cap B}(F_j)_-\varphi\,n_i\,dS$. Substituting $\int_{\Omega_\pm}F_j\partial_i\varphi=\int_{\Omega_\pm}\partial_i(F_j\varphi)-\int_{\Omega_\pm}(\partial_iF_j)\varphi$ gives $\langle\partial_iF_j,\varphi\rangle=\int_{\Omega}\{\partial_iF_j\}\varphi+\int_{S}((F_j)_+-(F_j)_-)\varphi\,n_i\,dS=\int_{\Omega}\{\partial_iF_j\}\varphi+\langle n_i[F_j]\delta_S,\varphi\rangle$, which is the componentwise identity. [step 1.2, F2, F3, algebra]

3.1 Summing step 2.1 over $i$ (and using the definitions of [[def-divergence-and-curl-of-a-c1-vector-field]] and of the piecewise fields) gives $\langle\operatorname{div}F,\varphi\rangle=\int_\Omega\{\operatorname{div}F\}\varphi+\langle n\cdot[F]\delta_S,\varphi\rangle$ for every test supported in some $B_k$, hence, by the finite partition of step 1.2, for every $\psi\in\mathcal D(\Omega)$; this is the divergence identity on $\Omega$. [step 1.2, step 2.1, F5, algebra]

4.1 Antisymmetrizing step 2.1 gives the curl identity: by [F5], $(\operatorname{curl}F)_k=\epsilon_{kij}\partial_iF_j=\epsilon_{kij}\{\partial_iF_j\}+\epsilon_{kij}n_i[F_j]\delta_S=\{\operatorname{curl}F\}_k+(n\times[F])_k\delta_S$ for each $k$, since $\epsilon_{kij}\{\partial_iF_j\}$ is the classical $k$-th component of the piecewise curl and $\epsilon_{kij}n_i[F_j]=(n\times[F])_k$ in the stated convention; hence, for every $\psi\in\mathcal D(\Omega)$, $\operatorname{curl}F=\{\operatorname{curl}F\}_{\mathrm{piecewise}}+n\times[F]\delta_S$. [step 3.1, F1, F5, algebra] ∎

## Remarks

- The sign convention is the one fixed by the normal: because $n$ points from $\Omega_-$ to $\Omega_+$, the outward normal of $\Omega_+$ on the interface is $-n$ and that of $\Omega_-$ is $+n$, which produces the difference $F_+-F_-$. Reversing $n$ reverses both $n$ and $[F]$, leaving $n\cdot[F]$ and $n\times[F]$ unchanged, as it must.
- The computation uses local charts on the edge-free interface specified here; interfaces with boundary are outside this definition. A moving interface contributes an additional term proportional to the normal velocity, not covered here.

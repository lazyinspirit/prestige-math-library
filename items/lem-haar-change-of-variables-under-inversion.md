---
id: lem-haar-change-of-variables-under-inversion
kind: lemma
title: "Haar change of variables under inversion"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-measure-with-density, thm-integration-against-a-density, thm-monotone-convergence-for-the-integral, thm-the-modular-function-is-a-continuous-homomorphism, lem-right-translation-scales-left-haar-measure, thm-uniqueness-of-left-haar-measure-up-to-scale, thm-rmk-uniqueness-among-radon-measures, thm-rmk-positive-functional-is-integration-against-its-representing-measure, def-left-haar-integral-and-left-haar-measure, def-borel-sigma-algebra, thm-compactness-under-continuous-maps, def-axiom-of-choice, def-modular-function-of-a-locally-compact-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§§30A–30B, printed pp. 115–118"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume AC. For a left Haar measure $\mu$ on an LCH group $G$ and the modular
function $\Delta_G$ of [[def-modular-function-of-a-locally-compact-group]],
$$\int_G f(x^{-1})\,d\mu(x)=\int_G \Delta_G(x^{-1})f(x)\,d\mu(x)$$
for every nonnegative Borel function $f$, with extended nonnegative integrals,
and for every complex Borel function $f$ such that
$$\int_G \Delta_G(x^{-1})|f(x)|\,d\mu(x)<\infty.$$
For such a complex function both sides are absolutely integrable.

## Facts & Assumptions

**Given:** An LCH group $G$ with left Haar measure $\mu$ and modular function $\Delta_G$, and AC.

[F1] The translate identity $\int_G F(xg)d\mu=c(g)\int F\,d\mu$ with $c(g)=\Delta_G(g^{-1})$ holds for $F\in C_c(G)$ and, in the Borel-level form, for every nonnegative Borel $F$ ([[lem-right-translation-scales-left-haar-measure]]).

[F2] $\Delta_G$ is a continuous homomorphism into $\mathbb R_{>0}$, so $\Delta_G(x)\Delta_G(x^{-1})=1$ and $\Delta_G(x)>0$ everywhere ([[thm-the-modular-function-is-a-continuous-homomorphism]]).

[F3] Any two left Haar measures on an LCH group are positive scalar multiples on every Borel set ([[thm-uniqueness-of-left-haar-measure-up-to-scale]]).

[F4] If two Radon measures on an LCH space have the same $C_c$ integrals, then they agree on all Borel sets ([[thm-rmk-uniqueness-among-radon-measures]]).

[F5] Every positive real-linear functional on $C_c(X;\mathbb R)$ for $X$ LCH is integration against a Radon measure ([[thm-rmk-positive-functional-is-integration-against-its-representing-measure]]).

[F6] A left Haar measure is nonzero, left invariant, finite on compact sets and regular as in the definition of a Radon measure; inversion is a homeomorphism preserving $C_c$ and, with it, compactness ([[def-left-haar-integral-and-left-haar-measure]]).

[F7] Continuous maps between topological spaces are Borel measurable: the subsets of the codomain with Borel preimage form a sigma-algebra containing the open sets, hence contain the Borel sigma-algebra. Apply this to a homeomorphism and its inverse to transport Borel sets in both directions ([[def-borel-sigma-algebra]]).

[F8] A continuous image of a compact set is compact ([[thm-compactness-under-continuous-maps]]).

[F9] For nonnegative measurable $w$, the density measure $\eta(E)=\int_Ew\,d\mu$ satisfies $\int f\,d\eta=\int fw\,d\mu$ for nonnegative measurable $f$. Monotone convergence applies to increasing nonnegative approximations ([[def-measure-with-density]], [[thm-integration-against-a-density]], [[thm-monotone-convergence-for-the-integral]]).

[A1] AC is assumed in the choice-function form of the cited definition; it supplies the uniqueness statements quoted above and the countable open-set selection in step 1.3 ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Transfer of regularity: if $\theta:G\to G$ is a homeomorphism and $\lambda$ a Radon measure, then $\theta_*\lambda(E):=\lambda(\theta^{-1}E)$ is a Radon measure. Indeed $\theta$ and $\theta^{-1}$ carry Borel sets to Borel sets by [F7], so $\theta_*\lambda$ is a Borel measure; it is finite on compact $K$ because $\theta^{-1}K$ is compact by [F8] and $\lambda$ is compact finite by [F6]; it is outer regular on Borel sets and inner regular on open sets by transporting the corresponding open and compact approximations along $\theta$ as in the definition of $\theta_*\lambda$. [F6, F7, F8]. [F7, F8, F6]

1.2 The functional $P(f):=\int_G f(x)\Delta_G(x^{-1})\,d\mu(x)$ on $C_c(G;\mathbb R)$ is positive and real-linear: the integrand is continuous with compact support because $\Delta_G\circ\mathrm{inv}$ is continuous by [F2] and $f$ is compactly supported, so it is $\mu$-integrable by the compact finiteness of [F6]; positivity and linearity are those of the integral, and $f\ge0$ gives $\int f(x)\Delta_G(x^{-1})d\mu(x)\ge0$ because the density is positive. By [F5] there is a Radon measure $\sigma$ with $\int f\,d\sigma=P(f)$ for every $f\in C_c(G)$. [F2, F5, F6]. [F2, F6, F5]

1.3 Identify the density on Borel sets. Put $w(x)=\Delta_G(x^{-1})>0$ and $\eta(E)=\int_Ew\,d\mu$. This is a nonzero Borel measure by [F9], finite on compact sets since $w$ is continuous. To prove outer regularity, only $\eta(E)<\infty$ needs consideration. Partition $E$ into $E_n=E\cap\{2^n\le w<2^{n+1}\}$ for $n\in\mathbb Z$. Then $\mu(E_n)\le2^{-n}\eta(E)<\infty$. Given $\epsilon>0$, choose positive $\epsilon_n$ with $\sum_n\epsilon_n<\epsilon$. Outer regularity of $\mu$ and [A1] give open $O_n\supseteq E_n$ contained in $\{w<2^{n+2}\}$ with $\mu(O_n\setminus E_n)<2^{-n-2}\epsilon_n$. Their union $O$ contains $E$ and satisfies $\eta(O\setminus E)\le\sum_n2^{n+2}\mu(O_n\setminus E_n)<\epsilon$. Thus $\eta(E)=\inf_{O\supseteq E\text{ open}}\eta(O)$; if $\eta(E)=\infty$ the equality is automatic. [A1, F2, F6, F7, F9]. [F9, A1, F2, F6, F7]

2.1 For an open $U$, the functions $s_m=2^{-m}\sum_{k=1}^{m2^m}\mathbf1_{U\cap\{w>k2^{-m}\}}$ increase to $w\mathbf1_U$. For each finite sum, inner regularity of $\mu$ on its open level sets lets one approximate its integral from below using compact subsets of these sets. Their finite union $K\subseteq U$ is compact, and $\eta(K)$ is at least the sum of their weighted measures, since their weighted indicators sum to at most $w\mathbf1_K$. This holds also for arbitrarily large finite lower bounds if one of the open sets has infinite measure. Monotone convergence [F9] gives $\eta(U)=\sup_{K\subseteq U\text{ compact}}\eta(K)$. Therefore $\eta$ is Radon. By [F9] its $C_c$ integrals are $P$, so [F4] identifies $\eta=\sigma$ on all Borel sets. In particular $\sigma e0$ and $\int f\,d\sigma=\int fw\,d\mu$ for every nonnegative Borel $f$. [F4, F6, F9, step 1.2, step 1.3]. [F9, F4, F6, step 1.2, step 1.3]

2.2 $\nu(E):=\mu(E^{-1})$ is a right Haar measure: by step 1.1 applied to the homeomorphism $\theta(x)=x^{-1}$ it is Radon and nonzero, and for Borel $E$ and $a\in G$, $\nu(Ea)=\mu((Ea)^{-1})=\mu(a^{-1}E^{-1})=\mu(E^{-1})=\nu(E)$ by left invariance of $\mu$ and $(Ea)^{-1}=a^{-1}E^{-1}$. [F6, step 1.1]. [F6, step 1.1]

2.3 $\sigma$ is right invariant. For $F\in C_c(G)$ and $a\in G$, using the Borel-level identity of [F1] with $H(x):=F(xa^{-1})\Delta_G(x^{-1})\in C_c(G)$ (using real and imaginary parts if necessary) gives $\int_G F(xa^{-1})\,d\sigma(x)=P(x\mapsto F(xa^{-1}))=\int_G F(xa^{-1})\Delta_G(x^{-1})\,d\mu(x)=\Delta_G(a)\int_G F(y)\Delta_G(a^{-1}y^{-1})\,d\mu(y)=\Delta_G(a)\Delta_G(a^{-1})\int_G F(y)\Delta_G(y^{-1})\,d\mu(y)=P(F)=\int_G F\,d\sigma$, where the third equality substitutes $x=ya$ and the fourth uses multiplicativity of $\Delta_G$ from [F2]. Both $\sigma$ and its pushforward under $x\mapsto xa^{-1}$ are Radon by step 1.1, so [F4] upgrades this identity of $C_c$ integrals to $\sigma(Ea)=\sigma(E)$ for every Borel $E$. [F1, F2, F4, step 1.1]. [F1, F2, F4, step 1.1]

3.1 Since $\sigma$ is right Haar by step 2.3, the measure $\sigma^\sharp(E):=\sigma(E^{-1})$ is left Haar and Radon by step 1.1; so is $\mu$, so [F3] (whose choice hypothesis is discharged by [A1]) gives a scalar $\lambda>0$ with $\sigma^\sharp=\lambda\mu$. Unwinding the definitions, for every $f\in C_c(G)$ we have $(\ast)$: $\int_G f(x^{-1})\Delta_G(x^{-1})\,d\mu(x)=\int_G f\,d\sigma^\sharp=\lambda\int_G f\,d\mu$. [A1, F3, F6, step 1.1, step 2.3]. [F3, A1, F6, step 1.1, step 2.3]

4.1 The scalar is one. Write $\Phi f(x):=f(x^{-1})\Delta_G(x^{-1})$; then $(\ast)$ reads $\int_G\Phi f\,d\mu=\lambda\int_G f\,d\mu$ for all $f\in C_c(G)$. Since $\Phi$ is an involution, $\Phi(\Phi f)(x)=\Phi f(x^{-1})\Delta_G(x^{-1})=f(x)\Delta_G(x)\Delta_G(x^{-1})=f(x)$ by [F2], applying $(\ast)$ to $\Phi f$ gives $\int_G f\,d\mu=\int_G\Phi(\Phi f)\,d\mu=\lambda\int_G\Phi f\,d\mu=\lambda^2\int_G f\,d\mu$; and some $f\in C_c(G)$ has $\int_G f\,d\mu\ne0$, since otherwise the zero measure and $\mu$ would have the same $C_c$ integrals and [F4] would force $\mu=0$, contrary to [F6]. Hence $\lambda^2=1$, and $\lambda>0$ forces $\lambda=1$. [F2, F4, F6, step 3.1]. [F2, F4, F6, step 3.1]

5.1 With $\lambda=1$, applying $(\ast)$ to the test function $g(x):=f(x)\Delta_G(x^{-1})$, which lies in $C_c(G)$ because $\Delta_G\circ\mathrm{inv}$ is continuous by [F2], gives $\int_G f(x^{-1})\,d\mu(x)=\int_G g(x^{-1})\Delta_G(x^{-1})\,d\mu(x)=\lambda\int_G f(x)\Delta_G(x^{-1})\,d\mu(x)=\int_G f(x)\Delta_G(x^{-1})\,d\mu(x)$, after using $\Delta_G(x)\Delta_G(x^{-1})=1$ in the first equality; so the two functionals $f\mapsto\int_G f(x^{-1})d\mu(x)$ and $f\mapsto\int_G f(x)\Delta_G(x^{-1})d\mu(x)$ agree on $C_c(G)$. [F2, step 4.1]. [F2, step 4.1]

6.1 Step 5.1 shows that the functionals $f\mapsto\int f\,d\nu$ and $f\mapsto\int f\,d\sigma$ agree on $C_c(G)$, where $\nu=\mu\circ\mathrm{inv}$ is the Radon measure of step 2.2 and $\sigma$ is the Radon measure of step 1.2 representing $P$. By [F4] the Radon measures $\nu$ and $\sigma$ are equal on all Borel sets. Since the integral of a nonnegative Borel function is determined by the measure it integrates against, for every nonnegative Borel $f$ one has $\int_G f(x^{-1})\,d\mu(x)=\int_G f\,d\nu=\int_G f\,d\sigma=\int_G f(x)\Delta_G(x^{-1})\,d\mu(x)$, with extended nonnegative integrals. If $f$ is a complex Borel function with $\int_G\Delta_G(x^{-1})|f(x)|\,d\mu(x)<\infty$, applying this nonnegative identity to $|f|$ first shows $\int_G|f(x^{-1})|\,d\mu(x)<\infty$. Apply the identity to the positive and negative parts of the real and imaginary parts of $f$ and combine them; each has finite weighted integral because it is bounded by $|f|$. This gives the asserted finite complex identity. [F4, step 1.2, step 5.1]. [F4, step 1.2, step 5.1] ∎


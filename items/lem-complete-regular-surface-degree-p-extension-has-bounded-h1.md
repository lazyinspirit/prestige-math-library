---
id: lem-complete-regular-surface-degree-p-extension-has-bounded-h1
kind: lemma
title: "Degree-p inseparable extensions of complete regular surfaces have bounded H1"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 13
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces,
                    lem-finite-closed-immersion-derived-coinduction-adjunction,
                    lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme,
                    lem-normal-projective-surface-dualizing-module-over-regular-local-base,
                    lem-normal-surface-modification-leray-short-exact-sequence,
                    lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it,
                    lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module,
                    lem-regular-base-dualizing-traces-compose-on-rational-modifications,
                    lem-surface-finite-type-normalization-finite, lem-surface-p-basis-subfield-separation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and DC. Let $A=k[\![u,v]\!]$ have characteristic $p>0$, let $L/K$ be a purely inseparable degree-$p$ extension of its fraction field, and let $B$ be the finite normalization of $A$ in $L$. Then normal modification H1 over $B$ is uniformly bounded.

## Facts & Assumptions

**Given:** The complete regular surface $A=k[\![u,v]\!]$ of characteristic $p>0$, a purely inseparable degree-$p$ extension $L/K$ of its fraction field, and the finite normalization $B$ of $A$ in $L$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-surface-p-basis-subfield-separation.* Assume AC. Let $k$ have characteristic $p>0$, $A=k[\![X_1,\ldots,X_n]\!][Y_1,\ldots,Y_m]$ and $K=\operatorname{Frac}A$. Choose a possibly infinite $p$-basis $(b_i)_{i\in I}$ of $k/k^p$, meaning its restricted monomials of finite support form a $k^p$-basis. For finite $J\subset I$ put $k_J=k^p(b_i:i\notin J)$, $A_J=k_J[\![X_1^p,\ldots,X_n^p]\!][Y_1^p,\ldots,Y_m^p]$ and $K_J=\operatorname{Frac}A_J$. Then $A$ is finite free over $A_J$, the family $(K_J)$ is downward directed with intersection $K^p$, and for every finite field extension $L/K$, $\bigcap_J L^pK_J=L^p$. ([[lem-surface-p-basis-subfield-separation]])

[F4] *lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces.* Assume AC and DC. Let $S$ be a scheme and let $Y\xrightarrow\pi X$ be a finite dominant $S$-morphism of normal integral Noetherian schemes of characteristic $p$ whose function fields have purely inseparable degree $p$. If $\Omega_{X/S}$ is coherent, then for $q\ge1$ the generic differential trace extends canonically to $\pi_*\wedge^q\Omega_{Y/S}\to(\wedge^q\Omega_{X/S})^{**}$. For a monogenic algebra $B=A[z]/(z^p-f)$ it kills forms pulled back from $A$ and sends $\eta\wedge z^i dz$ to zero for $i<p-1$ and to $\eta\wedge df$ for $i=p-1$. ([[lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces]])

[F5] *lem-finite-closed-immersion-derived-coinduction-adjunction.* Assume AC. For a finite homomorphism $A\to B$ of Noetherian rings and $G\in D^+(A)$, the complex $f^!G=R\operatorname{Hom}_A(B,G)$ has its natural $B$-action and is right adjoint to restriction of scalars. ([[lem-finite-closed-immersion-derived-coinduction-adjunction]])

[F6] *lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme.* Assume AC and DC. Let $A$ be a normal Noetherian local domain of dimension two essentially of finite type over a field or a complete equicharacteristic Noetherian local ring. Let $B$ be a finite normal local $A$-domain, and let $Y\to\operatorname{Spec}B$ be a normal integral modification. ([[lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme]])

[F7] *lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module.* Assume AC and DC. Let $A$ be a regular local surface of characteristic $p$, and let $A_0\subset A$ have coherent differential module $\Omega_{A/A_0}$ free of finite rank $r$. Choose $\omega_A=\wedge^r\Omega_{A/A_0}$. Every finite sequence of regular point blowups $X\to\operatorname{Spec}A$ has a generic-compatible map $(\wedge^r\Omega_{X/A_0})^{**}\to\omega_X$. ([[lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module]])

[F8] *lem-regular-base-dualizing-traces-compose-on-rational-modifications.* Assume AC and DC. Let $R$ be regular local of dimension two, $A$ finite normal local over $R$, and let $g:X'\to X$ be a morphism of projective normal modifications over $A$. Their regular-base dualizing complexes are independent of the chosen projective embeddings up to the unique isomorphism preserving their duality pairings. ([[lem-regular-base-dualizing-traces-compose-on-rational-modifications]])

[F9] *lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it.* Assume AC and DC. Let $R$ be regular local of dimension two and $A$ a finite normal local $R$-domain in the permitted class. For a projective normal modification $X$, put $M=H^1(X,\mathcal O_X)$. ([[lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it]])

[F10] *lem-normal-surface-modification-leray-short-exact-sequence.* Assume AC and DC. Let $A$ be a normal local domain of dimension two in the field/complete-equicharacteristic finite-type class, and $X'\xrightarrow gX\to\operatorname{Spec}A$ normal integral modifications. Then $g_*\mathcal O_{X'}=\mathcal O_X$ and $H^1(X,\mathcal O_X)\to H^1(X',\mathcal O_{X'})$ is injective. ([[lem-normal-surface-modification-leray-short-exact-sequence]])

[F11] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F12] *lem-normal-projective-surface-dualizing-module-over-regular-local-base.* Assume AC and DC. Let $R$ be a regular Noetherian local ring of dimension two, let $A$ be a finite normal local $R$-domain of dimension two, with $R\hookrightarrow A$ local, and let $X$ be a normal integral scheme of dimension two projective over $R$, with a proper birational map $f:X\to\operatorname{Spec}A$. Put $\omega_A=\operatorname{Hom}_R(A,R)$. ([[lem-normal-projective-surface-dualizing-module-over-regular-local-base]])

## Proof

1.1 Choose $z\in L$ with $L=K(z)$ and $z^p=f\in A$ after scaling to clear denominators; then $f\notin K^p$, since otherwise $z\in K$. Let $(b_i)_{i\in I}$ be the $p$-basis in [F3]. For finite $J\subset I$, write $A_J=k_J[\![u^p,v^p]\!]$ and $K_J=\operatorname{Frac}A_J$. The helper gives $\bigcap_JL^pK_J=L^p$ and $\bigcap_JK_J=K^p$. If $f$ belonged to every $K_J$, then $L^pK_J=K_J$ for every $J$ because $L^p=K^p(f)$; this would force $L^p=K^p$, a contradiction. Choose $J$ with $f\notin K_J$. The finite-free monomial basis of $A$ over $A_J$ gives $\Omega_{A/A_J}$ the free basis $\{db_i:i\in J\}\cup\{du,dv\}$, so its rank is $r=|J|+2$. Since $K/K_J$ has exponent one and $f\notin K_J$, $df\ne0$ in $\Omega_{K/K_J}$, hence in the free module $\Omega_{A/A_J}$. Choose a basis coordinate of $df$ with nonzero coefficient and let $\eta$ be the wedge of the other $r-1$ basis elements; then $\theta=\eta\wedge df\ne0$ in $\omega_A=\wedge^r\Omega_{A/A_J}$. Set $A_0=A_J$ and let $z\in B$ be the image of the chosen generator. [F2, F3, given]

2.1 At the generic point $L=K[z]/(z^p-f)$, so the degree-$p$ differential-trace formula [F4] gives $\operatorname{Tr}(z^j\alpha_i)=\delta_{ij}\theta$ for $\alpha_i=\eta\wedge z^{p-1-i}\,dz$ and $0\le i,j<p$. The chosen $z$ is integral, hence lies in $B$, so every $\alpha_i$ is a global section of $\wedge^r\Omega_{B/A_0}$. Finite coinduction identifies the trace map with $c\colon\wedge^r\Omega_{B/A_0}\to\omega_B=\operatorname{Hom}_A(B,\omega_A)$, $\alpha\mapsto(b\mapsto\operatorname{Tr}(b\alpha))$; since $1,z,\ldots,z^{p-1}$ is a $K$-basis of $L$, the displayed formula makes $c$ an isomorphism generically between rank-one $B$-modules. Its coherent cokernel is therefore torsion and is killed by a fixed nonzero $d\in B$. [F4, F5, F12, step 1.1]

3.1 For an arbitrary normal projective modification $Y$ of $B$, the regular specialization of finite domination produces a normal integral modification $Y'\to Y$ that is finite over a regular point-blowup modification $X$ of $\operatorname{Spec}A$, with $X$ and $Y'$ projective over $A$ and all normalizations finite. [F6, F11, given, step 2.1]

4.1 Write $\pi:Y'\to X$ and $Q=\wedge^r\Omega_{Y'/A_0}$. Apply [F4] over $\operatorname{Spec}A_0$ and compose with [F7] to obtain an $\mathcal O_X$-linear map $\tau:\pi_*Q\to\omega_X$. Finite coinduction [F5] turns it into the $\mathcal O_{Y'}$-linear map $Q\to\pi^!\omega_X$, given on an affine chart by $\alpha\mapsto(b\mapsto\tau(b\alpha))$. Here $\pi^!\omega_X=\omega_{Y'}$: finite adjunction with $D_X=\omega_X[2]$ gives the regular-base duality pairing on $Y'$, so the pairing uniqueness in [F8] and the concentration in [F12] identify $\pi^!D_X$ with $D_{Y'}$. Taking degree $-2$ gives the stated module identification. Generically this map is exactly $c$ of step 2.1, with the same functional formula. [F4, F5, F7, F8, F12, step 2.1, step 3.1]

5.1 Forms pulled back from $B$ are global forms on $Y'$, and the map in step 4.1 sends them to global sections of $\omega_{Y'}$ whose trace to $\omega_B$ equals $c$ generically and hence everywhere, since $\omega_B$ is torsion-free. Thus that trace image contains $c(\wedge^r\Omega_{B/A_0})$ and its cokernel is killed by the fixed nonzero $d$. Trace composition [F8] for $Y'\to Y\to\operatorname{Spec}B$ makes this image a submodule of the trace image from $Y$, so $d$ also kills the trace cokernel of every original normal projective modification $Y$. [F8, F9, F12, step 2.1, step 4.1]

6.1 The trace-cokernel criterion, applied with regular base $A$ and finite normal local domain $B$, converts annihilation of every trace cokernel by the fixed nonzero $d$ into a uniform bound on the length of $H^1$ of normal modifications over $B$; the Leray short exact sequence injects $H^1(Y,\mathcal O_Y)$ into $H^1(Y',\mathcal O_{Y'})$, so the bound is inherited by the arbitrary modification $Y$ and normal modification H1 over $B$ is uniformly bounded. [F9, F10, step 5.1]

7.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited resolution, duality and normalization suppliers, and no ordinary field trace is substituted for the differential trace. [F1, F2, step 6.1] ∎

## Remarks

- The fixed element $d$ is produced by the finite presentation of the degree-$p$ extension and is independent of the modification.
- The differential trace is essential in characteristic $p$ where the ordinary field trace vanishes.

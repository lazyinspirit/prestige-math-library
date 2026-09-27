---
id: lem-the-l1-involution-is-isometric-and-reverses-convolution
kind: lemma
title: "The L1 involution is isometric, involutive and reverses convolution"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-involution-on-l1-of-a-group, def-modular-function-of-a-locally-compact-group, thm-the-modular-function-is-a-continuous-homomorphism, lem-haar-change-of-variables-under-inversion, def-left-haar-integral-and-left-haar-measure, def-compactly-supported-convolution-on-a-group, def-convolution-on-cc-and-l1-of-a-group, lem-l1-convolution-norm-inequality, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, lem-topological-group-translations-and-inversion, def-axiom-of-choice, lem-convolution-preserves-cc-and-is-associative]
justified_by: []
forward_refs: [cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group]
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31A–31E, printed pp. 119–125"
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Assume AC. Let $G$ be an LCH group with a fixed left Haar measure $\mu$. The
involution $f\mapsto f^{*}$ of $L^1(G)$
([[def-involution-on-l1-of-a-group]]) is conjugate-linear and isometric,
satisfies $(f^{*})^{*}=f$ for every $f\in L^1(G)$, and reverses convolution,
$$(f\ast g)^{*}=g^{*}\ast f^{*}\qquad(f,g\in L^1(G)),$$
with $\ast$ the convolution of
[[def-convolution-on-cc-and-l1-of-a-group]].

## Facts & Assumptions
**Given:** An LCH group $G$ with a fixed left Haar measure $\mu$, the modular function $\Delta_G$, the complex space $L^1(G)$ with norm $\|\cdot\|_1$, and AC.

[F1] The involution is $f^{*}(x)=\Delta_G(x^{-1})\overline{f(x^{-1})}$, defined on classes and independent of the representative, with $\|f^{*}\|_1=\|f\|_1$ ([[def-involution-on-l1-of-a-group]]).

[F2] $\Delta_G$ is a continuous homomorphism into $\mathbb R_{>0}$, so $\Delta_G(y^{-1})\Delta_G(x^{-1}y)=\Delta_G(x^{-1})$ for all $x,y\in G$ and $\Delta_G(x)\Delta_G(x^{-1})=1$ ([[thm-the-modular-function-is-a-continuous-homomorphism]]).

[F3] For every nonnegative Borel $H$ one has $\int_GH(x^{-1})\,d\mu(x)=\int_G\Delta_G(x^{-1})H(x)\,d\mu(x)$ ([[lem-haar-change-of-variables-under-inversion]]).

[F4] $\mu$ is left invariant: $\mu(xE)=\mu(E)$ for every Borel set $E$ and every $x\in G$ ([[def-left-haar-integral-and-left-haar-measure]]).

[F5] On $C_c(G)$ convolution is $(f\ast g)(x)=\int_Gf(y)g(y^{-1}x)\,d\mu(y)$, with $f\ast g\in C_c(G)$ ([[def-compactly-supported-convolution-on-a-group]], [[lem-convolution-preserves-cc-and-is-associative]]).

[F6] The $L^1$ convolution of [[def-convolution-on-cc-and-l1-of-a-group]] is the unique $\mathbb C$-bilinear extension of the $C_c$ convolution satisfying $\|f\ast g\|_1\le\|f\|_1\|g\|_1$, hence jointly continuous ([[def-convolution-on-cc-and-l1-of-a-group]], [[lem-l1-convolution-norm-inequality]]).

[F7] $C_c(G)$ is dense in $L^1(G)$ ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F8] Inversion $\operatorname{inv}(x)=x^{-1}$ is a homeomorphism of $G$, hence carries compact sets to compact sets; $\Delta_G\circ\operatorname{inv}$ is continuous ([[lem-topological-group-translations-and-inversion]], [[thm-the-modular-function-is-a-continuous-homomorphism]]).

[A1] AC is assumed in the choice-function form of the cited definition, inherited here from the Haar and modular interfaces ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Conjugate-linearity. Let $f,g\in L^1(G)$ and $\alpha,\beta\in\mathbb C$. For every $x$ the defining formula of [F1] gives $(\alpha f+\beta g)^{*}(x)=\Delta_G(x^{-1})\overline{\alpha f(x^{-1})+\beta g(x^{-1})}=\overline{\alpha}f^{*}(x)+\overline{\beta}g^{*}(x)$, as conjugation is additive and $\overline{\alpha\beta}=\overline{\alpha}\overline{\beta}$; since the identity holds pointwise it holds for the classes, so $(\alpha f+\beta g)^{*}=\overline{\alpha}f^{*}+\overline{\beta}g^{*}$. [F1]

1.2 Isometry. For $f\in L^1(G)$ the modulus of $f^{*}$ is $|f^{*}(x)|=\Delta_G(x^{-1})|f(x^{-1})|$, the factor being positive. Apply the change of variables [F3] (whose choice hypothesis is discharged by [A1]) to the nonnegative Borel function $H(t):=\Delta_G(t)|f(t)|$. Then $\int_G|f^{*}|\,d\mu=\int_GH(x^{-1})\,d\mu(x)=\int_G\Delta_G(x^{-1})H(x)\,d\mu(x)=\int_G|f|\,d\mu$, using $\Delta_G(x^{-1})\Delta_G(x)=1$. Hence $\|f^{*}\|_1=\|f\|_1$. [A1, F1, F3]

1.3 Involutivity. For $f\in L^1(G)$ and $x\in G$, the definition gives $(f^{*})^{*}(x)=\Delta_G(x^{-1})\overline{f^{*}(x^{-1})}=\Delta_G(x^{-1})\overline{\Delta_G(x)\overline{f(x)}}=\Delta_G(x^{-1})\Delta_G(x)f(x)=f(x)$, where $\Delta_G$ is real-valued and $\Delta_G(x)\Delta_G(x^{-1})=1$ by [F2]; hence $(f^{*})^{*}=f$. [F1, F2]

1.4 The involution preserves $C_c(G)$. If $f\in C_c(G)$ then $f^{*}$ is continuous by [F1] and [F8], and its support is $\operatorname{supp}(f^{*})=\operatorname{inv}(\operatorname{supp}f)$, a compact set because $\operatorname{inv}$ is a homeomorphism and continuous images of compact sets are compact; thus $f^{*}\in C_c(G)$. [F1, F8]

1.5 Anti-multiplicativity on $C_c(G)$. Let $f,g\in C_c(G)$ and $x\in G$. By [F5] and [F1], $(f\ast g)^{*}(x)=\Delta_G(x^{-1})\overline{\int_Gf(y)g(y^{-1}x^{-1})\,d\mu(y)}=\Delta_G(x^{-1})\int_G\overline{f(y)}\,\overline{g(y^{-1}x^{-1})}\,d\mu(y)$, conjugation being continuous. In the other order, [F5] and [F1] give $(g^{*}\ast f^{*})(x)=\int_Gg^{*}(y)f^{*}(y^{-1}x)\,d\mu(y)=\int_G\Delta_G(y^{-1})\Delta_G(x^{-1}y)\overline{g(y^{-1})}\,\overline{f(x^{-1}y)}\,d\mu(y)=\Delta_G(x^{-1})\int_G\overline{g(y^{-1})}\,\overline{f(x^{-1}y)}\,d\mu(y)$, where [F2] computes $\Delta_G(y^{-1})\Delta_G(x^{-1}y)=\Delta_G(y^{-1}x^{-1}y)=\Delta_G(x^{-1})$. Substituting $y=xu$ in this last integral and using left invariance [F4] turns it into $\Delta_G(x^{-1})\int_G\overline{g(u^{-1}x^{-1})}\overline{f(u)}\,d\mu(u)$, which is the first expression with the order of the two factors interchanged. Hence $(f\ast g)^{*}(x)=(g^{*}\ast f^{*})(x)$ for every $x$, so $(f\ast g)^{*}=g^{*}\ast f^{*}$ for $f,g\in C_c(G)$. [F1, F2, F4, F5]

2.1 Anti-multiplicativity on $L^1(G)$. Fix $F,G\in L^1(G)$ and choose $f_n,g_n\in C_c(G)$ with $f_n\to F$ and $g_n\to G$ in $\|\cdot\|_1$, possible by [F7]. By step 1.5, $(f_n\ast g_n)^{*}=g_n^{*}\ast f_n^{*}$ for every $n$. The left side converges to $(F\ast G)^{*}$: indeed $f_n\ast g_n\to F\ast G$ by joint continuity of the extension [F6], and the involution is isometric by step 1.2, hence norm continuous. The right side converges to $G^{*}\ast F^{*}$ by joint continuity [F6] applied to $g_n^{*}\to G^{*}$ and $f_n^{*}\to F^{*}$, again by step 1.2. Since limits in the normed space $L^1(G)$ are unique, $(F\ast G)^{*}=G^{*}\ast F^{*}$. [F6, F7, step 1.2, step 1.5]

3.1 Concatenating: step 1.1 gives conjugate-linearity, step 1.2 isometry, step 1.3 involutivity and step 2.1 the reversal property, for all $f,g\in L^1(G)$. ∎ [step 1.1, step 1.2, step 1.3, step 2.1]

## Remarks

- **Where the modular factor is used.** The factor $\Delta_G(x^{-1})$ enters through [F1] in steps 1.2, 1.3 and 2.1; the multiplicativity in step 2.1 is exactly the computation $\Delta_G(y^{-1})\Delta_G(x^{-1}y)=\Delta_G(x^{-1})$, which is where a naive involution without $\Delta_G$ would fail ([[cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group]]).
- **Choice cost.** [A1] is inherited from the Haar measure and modular function used in [F1]; the algebraic computations of this proof spend no further choice.

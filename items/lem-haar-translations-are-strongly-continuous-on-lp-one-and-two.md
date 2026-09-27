---
id: lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
kind: lemma
title: "Strong continuity of left and modular right translations on L1 and L2"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-complex-haar-lp-spaces-and-compactly-supported-functions, lem-right-translation-scales-left-haar-measure, thm-uniqueness-of-left-haar-measure-up-to-scale, def-left-haar-integral-and-left-haar-measure, def-modular-function-of-a-locally-compact-group, thm-the-modular-function-is-a-continuous-homomorphism, lem-translations-preserve-compactly-supported-continuous-functions, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, def-axiom-of-choice]
justified_by: []
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
      locator: "§§31A–31E, printed pp. 119–125"
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§§5.2–5.3 and Lemma 5.5.2, printed pp. 212–230, 238–239"
verification:
  precheck: pass
---

## Statement

Assume AC. Let $G$ be an LCH group with a fixed left Haar measure $\mu$,
$\Delta_G$ its modular function, and for $g\in G$ define
$$L_gf(x):=f(g^{-1}x),\qquad R_gf(x):=\Delta_G(g)^{1/2}f(xg).$$
Then $g\mapsto L_g$ is strongly continuous on $L^1(G)$ and on $L^2(G)$, and
$g\mapsto R_g$ is strongly continuous on $L^2(G)$: for every $f$ in the space
and every $\epsilon>0$ there is a neighbourhood $V$ of $e$ in $G$ with
$\|L_gf-f\|_p<\epsilon$, respectively $\|R_gf-f\|_2<\epsilon$, for every
$g\in V$ — and then, for the general point $g_0$, $\|L_gf-L_{g_0}f\|_p\to0$
and $\|R_gf-R_{g_0}f\|_2\to0$ as $g\to g_0$, neighbourhoods rather than
sequences being used throughout since $G$ need not be first countable.

## Facts & Assumptions
**Given:** An LCH group $G$ with a fixed left Haar measure $\mu$, its modular function $\Delta_G$, the complex spaces $L^1(G),L^2(G)$ with norms $\|\cdot\|_p$, and AC.

[F1] For $p\in\{1,2\}$ the complex space $L^p(G)=L^p(G,\mu;\mathbb C)$ consists of the a.e. classes of measurable complex functions with $\|f\|_p=(\int_G|f|^p\,d\mu)^{1/p}<\infty$, and $C_c(G)=C_c(G;\mathbb C)$ ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F2] Left invariance: $\mu(aE)=\mu(E)$ for every Borel $E$ and $a\in G$, so $\int_GH(ax)\,d\mu(x)=\int_GH(x)\,d\mu(x)$ for nonnegative Borel $H$ ([[def-left-haar-integral-and-left-haar-measure]]); and for each $g$ there is $c(g)>0$ with $\int_GF(xg)\,d\mu(x)=c(g)\int_GF\,d\mu(x)$ for every nonnegative Borel $F$, the scalar being the unique one with that property and equal to $\Delta_G(g^{-1})$ ([[lem-right-translation-scales-left-haar-measure]], [[thm-uniqueness-of-left-haar-measure-up-to-scale]], [[def-modular-function-of-a-locally-compact-group]]).

[F3] $\Delta_G$ is a continuous homomorphism $G\to\mathbb R_{>0}$ with $\Delta_G(e)=1$, so $g\mapsto\Delta_G(g)^{1/2}$ is continuous at $e$ with value $1$, and $\Delta_G(g)\Delta_G(g^{-1})=1$ ([[thm-the-modular-function-is-a-continuous-homomorphism]]).

[F4] For $f\in C_c(G)$ the maps $a\mapsto L_af$ and $a\mapsto\rho_af$, where $\rho_af(x):=f(xa)$ is the **unscaled** right translate, are continuous in uniform norm at every $a_0\in G$, with all supports contained in one fixed compact set on a neighbourhood of $a_0$; both translates lie in $C_c(G)$ ([[lem-translations-preserve-compactly-supported-continuous-functions]]). The modular right translate of the Statement is $R_af=\Delta_G(a)^{1/2}\rho_af$, whose scalar factor is continuous by [F3].

[F5] $C_c(G)$ is dense in $L^1(G)$ and in $L^2(G)$ ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F6] A left Haar measure is finite on compact sets ([[def-left-haar-integral-and-left-haar-measure]]).

[A1] AC is assumed in the choice-function form of the cited definition; it is inherited here through the density statement [F5] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Isometries. Let $f\in L^1(G)$. By [F2] both $\int_G|f(g^{-1}x)|\,d\mu(x)=\int_G|f(y)|\,d\mu(y)$ and, since $|R_gf(x)|=\Delta_G(g)^{1/2}|f(xg)|$, $\|R_gf\|_1=\Delta_G(g)^{-1/2}\|f\|_1$. For $f\in L^2(G)$ the same substitution gives $\|L_gf\|_2=\|f\|_2$, while $\|R_gf\|_2^2=\int_G\Delta_G(g)|f(xg)|^2\,d\mu(x)=\Delta_G(g)c(g)\|f\|_2^2=\|f\|_2^2$ by [F2] and $\Delta_G(g)\Delta_G(g^{-1})=1$ from [F3]. So $L_g$ is isometric on $L^1(G)$ and on $L^2(G)$, and $R_g$ is isometric on $L^2(G)$ (it scales the $L^1$ norm by $\Delta_G(g)^{-1/2}$). [F1, F2, F3]

1.2 Uniform-norm continuity at $e$ for compactly supported functions. Let $f\in C_c(G)$. By [F4] applied at $a_0=e$ there are a neighbourhood $V_0$ of $e$ and a compact $C\subseteq G$ containing the supports of $L_af$, $\rho_af$ and $f$ for every $a\in V_0$, with $\|L_af-f\|_\infty\to0$ and $\|\rho_af-f\|_\infty\to0$ as $a\to e$. The scalar $\Delta_G(a)^{1/2}$ tends to $1$ by [F3], and $$\|R_af-f\|_\infty\le\Delta_G(a)^{1/2}\|\rho_af-f\|_\infty+|\Delta_G(a)^{1/2}-1|\,\|f\|_\infty\longrightarrow0.$$ Since this scalar is positive, $\operatorname{supp}R_af=\operatorname{supp}\rho_af\subseteq C$. Thus for every $\epsilon>0$ some neighbourhood $V\subseteq V_0$ makes both $\|L_af-f\|_\infty$ and $\|R_af-f\|_\infty$ less than $\epsilon$ for all $a\in V$. [F3, F4]

2.1 Compactly supported convergence in $L^p$. With $f$, $C$ and $V$ as in step 1.2, for $a\in V$ the difference $L_af-f$ is supported in the compact set $C$, so $\|L_af-f\|_1\le\|L_af-f\|_\infty\,\mu(C)$ and $\|L_af-f\|_2\le\|L_af-f\|_\infty\,\mu(C)^{1/2}$, both tending to $0$ as $a\to e$ by the uniform bound of step 1.2, with $\mu(C)<\infty$ by [F6]; the same estimates hold for $R_af-f$. Thus $L_a\to\mathrm{id}$ strongly on $C_c(G)$ for $p=1,2$ and $R_a\to\mathrm{id}$ strongly on $C_c(G)$ for $p=2$. [F6, step 1.2]

3.1 Left translations on $L^p(G)$. Fix $f\in L^p(G)$ with $p\in\{1,2\}$ and $\epsilon>0$. By [F5] under the AC of [A1] choose $h\in C_c(G)$ with $\|f-h\|_p<\epsilon/3$, and by step 2.1 choose a neighbourhood $V$ of $e$ with $\|L_ah-h\|_p<\epsilon/3$ for $a\in V$. For $a\in V$ the isometry of step 1.1 gives $\|L_af-f\|_p\le\|L_a(f-h)\|_p+\|L_ah-h\|_p+\|h-f\|_p<3\cdot\epsilon/3=\epsilon$, so $L_a\to\mathrm{id}$ strongly at $e$ on $L^p(G)$. For a general $g_0\in G$, the definition $L_af(x)=f(a^{-1}x)$ gives $L_aL_b=L_{ab}$, hence $L_g=L_{g_0}L_{g_0^{-1}g}$. Therefore $$\|L_gf-L_{g_0}f\|_p=\|L_{g_0}(L_{g_0^{-1}g}f-f)\|_p=\|L_{g_0^{-1}g}f-f\|_p,$$ by the isometry of step 1.1. This is $<\epsilon$ once $g_0^{-1}g\in V$, i.e. for $g$ in the neighbourhood $g_0V$ of $g_0$. [A1, F5, step 1.1, step 2.1]

3.2 Right translations on all of $L^2(G)$. Fix $f\in L^2(G)$ and $\epsilon>0$, choose $h\in C_c(G)$ with $\|f-h\|_2<\epsilon/3$ and a neighbourhood $V$ of $e$ with $\|R_ah-h\|_2<\epsilon/3$ for $a\in V$, by step 2.1 and [F5]. Since $R_a$ is isometric on $L^2(G)$ by step 1.1, $\|R_af-f\|_2\le\|R_a(f-h)\|_2+\|R_ah-h\|_2+\|h-f\|_2<\epsilon$ for $a\in V$. For a general $g_0$, $R_g=R_{g_0}R_{g_0^{-1}g}$ because $\Delta_G(g_0)^{1/2}\Delta_G(g_0^{-1}g)^{1/2}=\Delta_G(g)^{1/2}$ by multiplicativity [F3], so $\|R_gf-R_{g_0}f\|_2=\|R_{g_0}(R_{g_0^{-1}g}f-f)\|_2=\|R_{g_0^{-1}g}f-f\|_2<\epsilon$ for $g\in g_0V$, again by the isometry of step 1.1. [F3, F5, step 1.1, step 2.1]

4.1 Collecting the statements: step 3.1 gives strong continuity of $g\mapsto L_g$ on $L^1(G)$ and on $L^2(G)$ at every point, and step 3.2 gives strong continuity of $g\mapsto R_g$ on $L^2(G)$ at every point. ∎ [step 3.1, step 3.2]

## Remarks

- **Neighbourhoods, not sequences.** Every convergence statement above is formulated with a neighbourhood $V$ of the relevant point, so it applies to a group of arbitrary cardinality and character; no sequential criterion ([[thm-sequential-criterion-for-continuity]] formalises such a criterion only in first-countable spaces) is used.
- **Why $R_g$ carries the factor $\Delta_G(g)^{1/2}$.** Without it the right translation would scale the $L^2$ norm by $\Delta_G(g)^{-1/2}$ and would fail to be isometric, hence could not be a unitary representation ([[def-left-and-right-regular-unitary-representations]]).
- **Choice cost.** [A1] is inherited only through the density statement [F5]; the rest of the proof uses the fixed measure, its modular function and uniform continuity.

---
id: lem-s-rational-map-descends-along-faithfully-flat-smooth-maps
kind: lemma
title: "An S-rational map defined after a faithfully flat smooth base change is defined"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-s-dense-open-and-s-rational-map
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - def-faithfully-flat-morphism-schemes
  - def-locally-noetherian-and-noetherian-scheme
  - def-locally-finite-presentation-morphism
  - def-finite-type-and-module-finite-algebras
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-finite-variable-polynomial-ring-noetherian
  - lem-finite-type-local-on-source-and-target
  - thm-prime-filtration-of-a-finite-module
  - thm-existence-of-associated-primes
  - thm-associated-primes-in-a-short-exact-sequence
  - lem-flat-morphisms-stable-base-change
  - def-separated-morphism-schemes
  - cor-morphisms-equal-on-dense-open-reduced-source
  - def-smooth-morphism-schemes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 2.5/5 (descent of S-rational maps)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC. Let $S$ be locally Noetherian ([[def-locally-noetherian-and-noetherian-scheme]]), let $Y$ be separated over $S$ ([[def-separated-morphism-schemes]]), and let $u:X\dashrightarrow Y$ be an $S$-rational map between smooth finite-type $S$-schemes ([[def-s-dense-open-and-s-rational-map]]). Let $f:X'\to X$ be a faithfully flat morphism of smooth finite-type $S$-schemes ([[def-faithfully-flat-morphism-schemes]]) such that the base-changed $S$-rational map $u\circ f:X'\dashrightarrow Y$ is represented by an $S$-morphism $X'\to Y$ defined on all of $X'$. Then $u$ is represented by an $S$-morphism $X\to Y$ defined on all of $X$. This is BLR 2.5/5; no arbitrary base change is used.

## Facts & Assumptions

**Given:** AC, a locally Noetherian base $S$, a separated $S$-scheme $Y$, smooth finite-type $S$-schemes $X,X'$, an $S$-rational map $u:X\dashrightarrow Y$ and a faithfully flat $S$-morphism $f:X'\to X$ such that $u\circ f$ is defined everywhere and equal to a morphism $g:X'\to Y$.

[F1] An $S$-rational map is an equivalence class of $S$-morphisms on $S$-dense opens, with domain of definition $\operatorname{dom}(u)$; base change preserves these notions, and for separated smooth finite-type targets the domain commutes with flat base change ([[def-s-dense-open-and-s-rational-map]]).

[F2] A faithfully flat, quasi-compact, locally finitely presented morphism is a cover for fppf descent of morphisms: a morphism whose two pullbacks to $X'\times_XX'$ agree descends uniquely ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]], assuming AC). Faithfully flat morphisms are surjective ([[def-faithfully-flat-morphism-schemes]]).

[F3] For a separated target, morphisms from any source that agree on a schematically dense open are equal ([[cor-morphisms-equal-on-dense-open-reduced-source]], assuming AC). A smooth morphism is flat with geometrically reduced fibres ([[def-smooth-morphism-schemes]]). On affine charts $\operatorname{Spec}B\to\operatorname{Spec}A$ of a smooth finite-type map with $A$ Noetherian, a finite prime filtration of the $A$-module $A$ tensors exactly with the flat $A$-algebra $B$ and filters $B$ by the rings $B/\mathfrak p_iB$. Each is flat over the domain $A/\mathfrak p_i$, hence injects into its reduced generic fibre and is reduced. In a reduced Noetherian ring every associated prime is minimal: the ring injects into the finite product of its minimal-prime domain quotients, so the annihilator of a nonzero element is the intersection of those minimal primes where its image is nonzero; if this annihilator is prime, it equals one of those minimal primes. Flatness over $A/\mathfrak p_i$ makes every nonzero base element a nonzerodivisor, so these minimal primes contract to $\mathfrak p_i$. The associated-prime theorem for a finite filtration then shows every associated prime of $B$ is the generic point of a component of some fibre. If an open $U$ meets every fibre densely but $\ker(B\to\Gamma(U,\mathcal O))\ne0$, this finite ideal has an associated prime; it is also associated in $B$, so its point lies in $U$, where the restriction kernel has zero stalk, a contradiction. Hence $U$ is schematically dense. These uses are supplied by [[thm-prime-filtration-of-a-finite-module]], [[thm-existence-of-associated-primes]], and [[thm-associated-primes-in-a-short-exact-sequence]].

[F4] If $U\subseteq X$ is schematically dense and $q:T\to X$ is flat, then $q^{-1}(U)$ is schematically dense in $T$. Locally take $V=\operatorname{Spec}A\subseteq X$ and an affine $W=\operatorname{Spec}B\subseteq q^{-1}(V)$; flatness makes $B$ flat over $A$. The open $U\cap V$ is quasi-compact since $X$ is locally Noetherian. A finite principal-open cover computes $\Gamma(U\cap V,\mathcal O)$ as a finite equalizer of localizations of $A$; tensoring this equalizer with flat $B$ computes $\Gamma(W\times_XU,\mathcal O)$ and preserves the injection $A\hookrightarrow\Gamma(U\cap V,\mathcal O)$. Thus $B\hookrightarrow\Gamma(W\times_XU,\mathcal O)$, which is the required schematic density. Flatness is stable under base change ([[lem-flat-morphisms-stable-base-change]]).

[F5] The given hypotheses make $f$ faithfully flat, quasi-compact, and locally of finite presentation. To see the latter two properties, work locally on affine Noetherian opens $S_0=\operatorname{Spec}A\subseteq S$. For affine charts $W=\operatorname{Spec}C\subseteq X'$ and $V=\operatorname{Spec}B\subseteq X$ with $f(W)\subseteq V\subseteq X_{S_0}$, both $B$ and $C$ are finite-type $A$-algebras; generators of $C$ over $A$ also generate it over $B$, so $C$ is finite type over $B$. The ring $B$ is Noetherian because it is of finite type over the Noetherian ring $A$, and a finite-type algebra over $B$ is finitely presented, proving local finite presentation ([[def-finite-type-and-module-finite-algebras]], [[def-locally-finite-presentation-morphism]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[cor-finite-variable-polynomial-ring-noetherian]], [[lem-finite-type-local-on-source-and-target]]). For quasi-compactness, cover any quasi-compact open $V_0\subseteq X$ by finitely many affine opens $V_i$ each lying over an affine Noetherian open $S_i\subseteq S$. Each $f^{-1}(V_i)$ is open in the Noetherian finite-type $S_i$-scheme $X'_{S_i}$, hence is quasi-compact; therefore $f^{-1}(V_0)$ is quasi-compact. Faithful flatness is given ([[def-faithfully-flat-morphism-schemes]]).

## Proof

**Proof technique:** direct, descending the representative along the faithfully flat cover.

1.1 Let $U=\operatorname{dom}(u)$. Since $X$ is smooth over $S$ and $U$ is $S$-dense, [F3] makes $U$ schematically dense in $X$. Its pullback $U'=f^{-1}(U)$ is schematically dense in $X'$ by [F4]. The everywhere-defined representative $g:X'\to Y$ and the morphism $u|_U\circ f|_{U'}:U'\to Y$ agree on an $S$-dense open by the definition of $u\circ f$; that open is schematically dense in the smooth scheme $U'$ by [F3]. Separatedness of $Y$ and [F3] therefore give $g|_{U'}=u|_U\circ f|_{U'}$. [F3, F4, F1, given]

2.1 Put $X''=X'\times_XX'$ and let $q:X''\to X$ be the composite of either projection with $f$. This map is flat: each projection is a base change of the flat map $f$, hence flat by [F4], and compositions of flat morphisms are flat. The open $W=q^{-1}(U)=f^{-1}(U)\times_Uf^{-1}(U)$ is schematically dense in $X''$ by [F4]. By step 1.1, the two pullbacks of $g$ agree on $W$, where both are the composite of the common map to $U$ with $u|_U$. As $Y$ is separated over $S$, [F3] gives equality of these pullbacks on all of $X''$. [F4, F3, step 1.1, given, algebra]

3.1 By [F5], $f$ is faithfully flat, quasi-compact and locally finitely presented; by step 2.1 the two pullbacks of $g$ to $X''$ agree. Fppf descent of morphisms [F2] therefore gives a unique $S$-morphism $h:X\to Y$ with $h\circ f=g$. [F5, F2, step 2.1, construct]

4.1 The morphism $h$ extends $u$: on $U$, the morphisms $h|_U$ and $u|_U$ pull back along the faithfully flat morphism $f^{-1}(U)\to U$ to the same map $g|_{f^{-1}(U)}$ by step 1.1. Uniqueness in [F2] makes them equal. Hence $h$ is a morphism on all of $X$ whose restriction to the $S$-dense open $U$ represents $u$, so it represents the $S$-rational map $u$. [F2, step 1.1, step 3.1]. [F2, step 1.1, step 3.1] ∎


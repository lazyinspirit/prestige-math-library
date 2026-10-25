---
id: thm-qftx-gaga-analytic-local-ring-flatness
kind: theorem
title: Faithful flatness of finite-type algebraic-to-analytic local rings
status: draft
origin: pipeline
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + full AC; AC supplies the completion and faithful-flatness hypotheses and implies DC for the supplied Tor results."
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-finite-type-and-module-finite-algebras
  - thm-hilbert-basis-theorem
  - thm-noetherian-ring-ideal-characterisations
  - lem-qftx-gaga-algebraic-analytic-local-completions
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - thm-completion-of-a-noetherian-local-ring
  - thm-flatness-of-noetherian-completion
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-faithfully-flat-ring-map-characterisations
  - thm-long-exact-tor-sequence-in-the-right-module-variable
  - thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes
  - thm-recursion
  - def-free-module-on-a-set-and-standard-basis
  - thm-universal-property-of-free-modules
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-scheme: mathematical-premise
  def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  def-finite-type-and-module-finite-algebras: mathematical-premise
  thm-hilbert-basis-theorem: mathematical-premise
  thm-noetherian-ring-ideal-characterisations: mathematical-premise
  lem-qftx-gaga-algebraic-analytic-local-completions: mathematical-premise
  def-flat-and-faithfully-flat-modules-and-ring-maps: mathematical-premise
  thm-completion-of-a-noetherian-local-ring: mathematical-premise
  thm-flatness-of-noetherian-completion: mathematical-premise
  thm-flatness-criteria-by-injections-and-ideals: mathematical-premise
  thm-faithfully-flat-ring-map-characterisations: mathematical-premise
  thm-long-exact-tor-sequence-in-the-right-module-variable: mathematical-premise
  thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes: mathematical-premise
  thm-recursion: mathematical-premise
  def-free-module-on-a-set-and-standard-basis: mathematical-premise
  thm-universal-property-of-free-modules: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, §2, no. 6 and Annex §§22–24"
      url: "https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf"
    - title: "Johannes Anschütz, Lecture Notes on Étale Cohomology, §§3.24–3.26"
      url: "https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf"
    - title: "Kiran S. Kedlaya, MIT OpenCourseWare 18.726, Lecture 22: GAGA"
      url: "https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $X$ be a scheme of finite type over $\mathbb C$
and let $x\in X$ be a closed point with residue field $\mathbb C$. Choose an
affine neighborhood of $x$ presented as (adding a dummy coordinate if needed)
$\operatorname{Spec}(\mathbb C[w_1,\ldots,w_n]/I)$, with $n\ge1$, $I$ a
finitely generated polynomial ideal contained in $(w_1,\ldots,w_n)$, and $x$
the origin. Write
$A=(\mathbb C[w_1,\ldots,w_n]_{(w_1,\ldots,w_n)})/I\mathbb C[w_1,\ldots,w_n]_{(w_1,\ldots,w_n)}$.
On this chart, define the analytic local ring by extending the same ideal to
holomorphic germs,
$B=\mathbb C\{w_1,\ldots,w_n\}/I\mathbb C\{w_1,\ldots,w_n\}$; this quotient
retains the given scheme structure, including nilpotents. For a local ring $R$
with maximal ideal $\mathfrak m_R$, let
$\widehat R=\varprojlim_{k\ge1}R/\mathfrak m_R^k$.

The canonical local homomorphism $A\to B$, which sends each polynomial class
to the same holomorphic germ, is injective and faithfully flat.
Its induced map $\widehat A\to\widehat B$ is an isomorphism, with both
completions canonically identified with
$\mathbb C\llbracket w_1,\ldots,w_n\rrbracket/I\mathbb C\llbracket w_1,\ldots,w_n\rrbracket$. For every
$A$-module $M$, the map $M\to M\otimes_A B$ is injective, and the quotient
$B/A$ is a flat $A$-module. These are local-ring conclusions; no relative
direct-image comparison is asserted.

## Statement references

[Serre, local algebraic-to-holomorphic comparison and flat-pair appendix](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

[Anschütz, analytification of locally finite-type schemes](https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf)

[MIT OpenCourseWare, Lecture 22: GAGA](https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-type complex scheme $X$, a closed $\mathbb C$-point $x$, and the local rings and canonical map specified in the statement.

[A1] AC says that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] A scheme is locally an affine scheme; finite type over $\mathbb C$ means each point has an affine neighborhood whose coordinate algebra is a finitely generated $\mathbb C$-algebra, hence a quotient of a polynomial ring ([[def-scheme]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-finite-type-and-module-finite-algebras]]).

[F2] The polynomial ring over $\mathbb C$ is Noetherian ([[thm-hilbert-basis-theorem]]).

[F3] Under dependent choice, a commutative ring is Noetherian exactly when all its ideals are finitely generated, so the chart's defining ideal is finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

[F4] For the same polynomial ideal, the algebraic and holomorphic local rings are Noetherian local rings, the map between them is local, and both completions are the same formal-series quotient ([[lem-qftx-gaga-algebraic-analytic-local-completions]]).

[F5] Assuming AC, for any Noetherian local ring its completion map is faithfully flat; in particular the completion is flat and the map is a local ring homomorphism ([[thm-completion-of-a-noetherian-local-ring]], [[thm-flatness-of-noetherian-completion]]).

[F6] A module is flat exactly when tensoring preserves injections ([[thm-flatness-criteria-by-injections-and-ideals]]). A faithfully flat ring map is a flat ring map for which tensoring detects exactness ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[F7] For a flat map of commutative rings, faithful flatness is equivalent to every proper ideal extending to a proper ideal ([[thm-faithfully-flat-ring-map-characterisations]]).

[F8] Dependent Choice (DC) means that, for every nonempty set $Y$, every relation $R\subseteq Y\times Y$ with an $R$-successor for each $y\in Y$, and any prescribed initial point, there is an $\mathbb N$-indexed sequence following $R$. Given a supplied projective resolution and DC, a short exact sequence of right modules gives the natural long exact Tor sequence in the right-module variable ([[thm-long-exact-tor-sequence-in-the-right-module-variable]]).

[F9] Under DC and supplied projective-resolution data, a right module is flat exactly when its first Tor with every left module vanishes ([[thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]]).

[F10] Given a set, an initial element, and a self-map, recursion on $\mathbb N$ supplies the unique sequence following that map ([[thm-recursion]]).

[F11] The free module on a set has its standard basis, and any map from that basis to a module extends to a module homomorphism ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]]).

## Proof

**Proof technique:** direct.

1.1 AC implies DC: for a nonempty set $Y$ and a serial relation $R\subseteq Y\times Y$, the family of successor sets $\{\{z\in Y:yRz\}:y\in Y\}$ consists of nonempty sets. [A1] gives a choice function on this family; composing it with the successor-set map gives a self-map $s:Y\to Y$ with $yRs(y)$. For any prescribed $y_0$, [F10] gives the sequence $y_{k+1}=s(y_k)$. For any $A$-module $N$, let $F_0$ be free on its underlying set and let $\epsilon_0:F_0\twoheadrightarrow N$ send each standard basis vector to the element it names, using [F11]. A free module on any set is projective: given a surjection $E\twoheadrightarrow Q$ and a map from the free module to $Q$, [A1] chooses a preimage in $E$ for the image of each basis vector, and [F11] extends that assignment to a lift. Put $K_0=\ker\epsilon_0$; recursively, for each $j\ge0$, take $F_{j+1}$ free on the set $K_j$, let $\epsilon_{j+1}:F_{j+1}\twoheadrightarrow K_j$ send each basis vector to the element it names, and set $K_{j+1}=\ker\epsilon_{j+1}$. The differential $F_{j+1}\to F_j$ is $\epsilon_{j+1}$ followed by the inclusion $K_j\hookrightarrow F_j$. The sequence is exact by the definitions of the kernels, each $F_j$ is projective by the lifting argument, and [F10] supplies the recursion. Thus every $A$-module has the projective-resolution data required by [F8] and [F9], and AC supplies their DC hypothesis. [A1, F8, F9, F10, F11, construct]

2.1 By [F1], around $x$ the scheme has a finite-type affine chart; [F2] and [F3], whose dependent-choice hypothesis is supplied by step 1.1, make its polynomial defining ideal $I$ finitely generated. Translate the coordinates to put $x$ at the origin, adding a dummy coordinate with relation $w_1=0$ if the chart has no polynomial coordinates. Apply [F4] to obtain the local map $A\to B$ and its common completion $T=\mathbb C\llbracket w_1,\ldots,w_n\rrbracket/I\mathbb C\llbracket w_1,\ldots,w_n\rrbracket$. [given, F1, F2, F3, step 1.1, F4]

3.1 By [F5] under [A1], the completion maps $A\to T$ and $B\to T$ are faithfully flat. For a nonzero $a\in A$, the ideal $(a)$ is a nonzero $A$-module. Faithfulness means $(a)\otimes_A T\ne0$: otherwise the nonexact sequence $0\to(a)\to0$ would become exact after tensoring. Flatness makes the multiplication map $(a)\otimes_A T\to A\otimes_A T=T$ injective. If $a$ mapped to zero in $T$, this map would be zero, a contradiction. Hence $A\to T$ is injective. If an element of $A$ maps to zero in $B$, its image in $T$ is zero as well, so injectivity of $A\to T$ makes it zero. Therefore $A\to B$ is injective. [A1, F5, F6, step 2.1, algebra]

3.2 Let $U\hookrightarrow V$ be any injection of $A$-modules and let $K$ be the kernel of $B\otimes_A U\to B\otimes_A V$. Tensoring $0\to K\to B\otimes_A U\to B\otimes_A V$ over $B$ with $T$ preserves its kernel because $T$ is flat over $B$ by [F5] under [A1]. By associativity, the resulting map is $T\otimes_A U\to T\otimes_A V$, which is injective because $T$ is flat over $A$. Thus $K\otimes_B T=0$; faithful flatness of $B\to T$ gives $K=0$. The flatness criterion [F6] now makes $B$ flat over $A$. [A1, F5, F6, step 2.1]

4.1 The map $A\to B$ is local by [F4]. If $J\subsetneq A$ is a proper ideal, then $J$ lies in the maximal ideal of the local ring $A$, whose image lies in the maximal ideal of $B$; hence $JB\subsetneq B$. Combining this with the flatness in step 3.2 and [F7] shows that $A\to B$ is faithfully flat. [F4, F7, step 3.2]

5.1 Let $M$ be any $A$-module and $m\in M$ nonzero. Its annihilator $J=\{a\in A:am=0\}$ is a proper ideal, and the map $A/J\to M$ sending $1+J$ to $m$ is injective. Flatness from step 3.2 preserves this injection. The balanced tensor relations give inverse maps $(A/J)\otimes_A B\to B/JB$, $(a+J)\otimes b\mapsto ab+JB$, and $B/JB\to(A/J)\otimes_A B$, $b+JB\mapsto(1+J)\otimes b$. By [F7], $B/JB\ne0$, so $m\otimes1\ne0$. Therefore $M\to M\otimes_A B$ is injective for every $M$. [F7, step 3.2, step 4.1, algebra]

6.1 Put $C=B/A$, which is defined because step 3.1 proves $A\hookrightarrow B$. For any left $A$-module $M$, apply [F8] under the DC and resolution construction in step 1.1 to the short exact sequence of right $A$-modules $0\to A\to B\to C\to0$. The long exact sequence gives $\operatorname{Tor}_1^A(A,M)\to\operatorname{Tor}_1^A(B,M)\to\operatorname{Tor}_1^A(C,M)\to A\otimes_A M\to B\otimes_A M$. The first two Tor groups vanish: $A$ is free over itself and $B$ is flat by step 3.2. The final map is injective by step 5.1, so exactness forces $\operatorname{Tor}_1^A(C,M)=0$ for every $M$. By [F9], $C=B/A$ is a flat $A$-module. [F8, F9, step 1.1, step 3.1, step 3.2, step 5.1] ∎

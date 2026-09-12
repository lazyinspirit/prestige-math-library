---
id: "lem-cartan-eilenberg-comparisons-preserve-both-filtrations"
kind: "lemma"
title: "Cartan–Eilenberg comparisons preserve both filtrations"
deps: ["def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex", "def-injective-object", "def-dependent-choice", "thm-snake-lemma-in-an-abelian-category", "thm-the-next-page-is-the-homology-of-the-current-page"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Weibel, Exercises 5.7.2–3 and cohomology variant 5.7.9; completed comparison argument"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Let $f:K\to L$ be a map of bounded-below complexes, and let $I,J$ be supplied Cartan–Eilenberg injective resolutions, in the commuting convention. Assume DC or supply the countable splittings and extensions used below. There is a bicomplex map $a:I\to J$ over $f$. Any two such maps $a,a'$ differ by $v_Js+sv_I$ for maps $s^{p,q}:I^{p,q}\to J^{p,q-1}$ commuting with $h$. After any additive functor, comparisons induce the same maps on vertical-first spectral sequences from $E_1$, and on horizontal-first spectral sequences from $E_2$. Identity lifts and composites therefore give canonical resolution-independent spectral sequences from these respective pages.

More generally, the existence and uniqueness of a lift into $J$ hold when the augmented source $K\to I$ is exact on terms, horizontal boundaries, cycles and cohomology, even if its objects are not injective. The spectral-sequence comparison conclusions hold whenever its filtered totals have the stated pages. Only the target rows need the injective split Cartan–Eilenberg condition.

## Facts & Assumptions

**Given:** The bounded-below data and the DC or supplied-extension qualification above.

[F1] Cartan–Eilenberg columns resolve terms, cycles, boundaries and cohomology, and the two horizontal short exact sequences split degreewise ([[def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex]]).

[F2] Maps to an injective object extend across monomorphisms ([[def-injective-object]]).

[F3] The snake lemma controls kernels and cokernels in a diagram of short exact sequences ([[thm-snake-lemma-in-an-abelian-category]]).

[F4] DC supplies countably many successive choices on a set ([[def-dependent-choice]]).

[F5] Taking page homology gives the next page naturally ([[thm-the-next-page-is-the-homology-of-the-current-page]]).

## Proof

1.1 Call a short exact sequence $0\to X\to Y\to Z\to0$ of horizontal complexes admissible if the induced sequences on boundaries, cycles and cohomology are also short exact. For such a monomorphism $X\to Y$, the maps $X^p\to Y^p$ and $X^p/B^pX\to Y^p/B^pY$ are monic. For the latter assertion, apply the snake lemma to the exact boundary sequences inside the term sequences: an element of $X^p$ mapping into $B^pY$ comes from $B^pX$, as a subobject identity. This argument uses kernels and images and holds in an arbitrary abelian category. [F3]

1.2 Regard $0\to K\to I^{\bullet,0}\to I^{\bullet,1}\to\cdots$ as a resolution in horizontal complexes. Its successive image complexes $C_I^q$ fit into admissible sequences $0\to C_I^q\to I^{\bullet,q}\to C_I^{q+1}\to0$, with $C_I^0=K$. To check this assertion, use vertical exactness separately on terms, boundaries, cycles and cohomology in F1, or the explicit exactness assumption for the more general source. No source injectivity or splitting is used in this step. In the diagrams for $0\to B\to Z\to H\to0$ and $0\to Z\to I\to B[1]\to0$, the snake lemma identifies the induced cokernels with the next cycle, boundary and cohomology objects. This proves the same assertions for every successive image by induction. The analogous statement holds for $J$. [F1, F3]

2.1 Fix a horizontal row $J^{\bullet,q}$. Its split sequences decompose it as the locally finite sum of stalk complexes $H^{p,q}$ in degree $p$ and two-term disk complexes $B^{p+1,q}\xrightarrow{1}B^{p+1,q}$ in degrees $p,p+1$. At each degree there are only three summands. A cochain map $X\to S^p(E)$ is the same as a map $X^p/B^pX\to E$. A cochain map $X\to D^p(E)$, with $D^p(E)$ in degrees $p,p+1$, is the same as a map $X^{p+1}\to E$: the degree-$p$ component is that map composed with $d_X^p$. Because each $E$ is injective, these maps extend across the monomorphisms in step 1.1. Assemble the extensions into a map $Y\to J^{\bullet,q}$. Countably many splittings and extensions are sufficient; take them as supplied or apply DC to finite partial selections in the fixed Hom sets. Thus every row $J^{\bullet,q}$ has the extension property for admissible monomorphisms. [F1, F2, F4, step 1.1]

3.1 Extend $K\xrightarrow{f}L\to J^{\bullet,0}$ across $K\to I^{\bullet,0}$ by step 2.1. After this extension, $v_Ja^0$ kills $K$, so it descends to $C_I^1$ and extends across $C_I^1\to I^{\bullet,1}$ into $J^{\bullet,1}$. Continue: at stage $q$, $v_Ja^{q-1}$ kills the preceding image because $v_J^2=0$, hence descends and extends. Each extension is a horizontal cochain map. These choices yield $a^q$, with $v_Ja^{q-1}=a^qv_I$, and therefore a bicomplex map over $f$. DC applies to finite partial maps in the set of these Hom groups; supplied extensions give the same recursion without choice. [F4, step 2.1, step 1.2]

4.1 For two lifts, put $s^0=0$. At vertical degree zero $a^0-a'^0$ kills $K$, so it factors through $C_I^1$ and extends to $s^1:I^{\bullet,1}\to J^{\bullet,0}$. Inductively, $a^q-a'^q-v_Js^q$ kills $\operatorname{im}v_I^{q-1}$: substitution of the preceding homotopy equation and $v_J^2=0$ verifies this equality. It therefore descends to $C_I^{q+1}$ and extends to $s^{q+1}$ by step 2.1. Thus $a-a'=v_Js+sv_I$, with every $s^q$ a horizontal cochain map. The same countable-choice accounting applies. [F4, step 2.1, step 1.2, step 3.1]

5.1 After an additive functor the equation of step 4.1 remains a vertical homotopy, so the induced maps on vertical cohomology coincide. These are the vertical-first $E_1$ maps. On horizontal cohomology, the same equation gives a homotopy for the induced vertical differential, so its cohomology maps coincide on horizontal-first $E_2$. All subsequent maps agree by natural page transitions. The signed total homotopy is $(-1)^p s$ on bidegree $(p,q)$: the horizontal mixed terms cancel since $s$ commutes with $h$, and the vertical terms are $vs+sv$. It preserves the horizontal-degree filtration and lowers the resolution-degree filtration by one, consistently with the respective starting pages. Applying the result to lifts of identities and composites proves the stated canonicity. Zero rows, zero maps and bottom resolution degree $q=0$ are included by $s^0=0$. [F5, step 3.1, step 4.1] ∎

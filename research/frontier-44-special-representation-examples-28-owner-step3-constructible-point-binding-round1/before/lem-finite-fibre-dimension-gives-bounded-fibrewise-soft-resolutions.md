---
id: lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions
kind: lemma
title: "Bounded fibrewise-soft resolutions from a uniform all-sheaf dimension bound"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 12
deps: [def-c-soft-sheaf, def-compactly-supported-global-sections,
       lem-c-soft-field-sheaves-are-compact-support-acyclic,
       lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft,
       lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward,
       def-extension-by-zero-abelian-sheaf, def-direct-image-sheaf,
       def-restriction-sheaf-open-subspace,
       def-inverse-image-presheaf-and-sheaf,
       def-support-of-a-sheaf-section,
       lem-sections-near-a-compact-set-are-sections-on-that-set,
       thm-abelian-sheaves-have-enough-injectives,
       thm-right-derived-functors-form-a-cohomological-delta-functor,
       def-exact-sequence-sheaves, thm-exactness-of-sheaves-stalkwise,
       def-sheaf-on-topological-space, def-compact-space,
       def-locally-compact-space, def-hausdorff-space,
       def-subspace-topology-top, thm-locally-compact-hausdorff-basics,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       lem-t0-t1-and-hausdorff-are-hereditary,
       thm-closed-subspace-of-a-compact-space-is-compact,
       thm-choice-implies-dependent-implies-countable-choice,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Louis Verdier, Dualite dans la cohomologie des espaces localement compacts, Seminaire N. Bourbaki 1964-1966, expose 300, pp. 337-349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
      locator: '§1.4, p. 340: the cohomological dimension of f_! is finite if and only if the compact-support dimension of the fibres is uniformly bounded, and then every sheaf admits a finite resolution by Y-soft sheaves; read in full'
    - title: "Pierre Schapira, An Introduction to Categories and Sheaves, lecture notes, 2023"
      url: "https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf"
      locator: '§11.2, printed pp. 207-210: Proposition 11.2.9 (the vanishing criterion on open subspaces) and §11.7 p. 221 Proposition 11.7.2 (resolutions by acyclic sheaves and dimension bounds), the pattern transplanted here fibre by fibre'
---

## Statement

Assume the Axiom of Choice. Let $f:X\to Y$ be a continuous map between locally
compact Hausdorff spaces ([[def-locally-compact-space]],
[[def-hausdorff-space]]) and let $d\ge0$ be an integer such that
$$H^q_c(V,\mathcal F)=0\qquad(q>d)$$
for every open subspace $V$ of every fibre $f^{-1}(y)$, $y\in Y$, and every
sheaf $\mathcal F$ of $k$-vector spaces on $V$
([[def-sheaf-on-topological-space]],
[[def-compactly-supported-global-sections]]; the sheaves may equally be
sheaves of abelian groups). Then every sheaf $\mathcal A$ of $k$-vector spaces
on $X$ has a bounded resolution by fibrewise c-soft sheaves: there is an exact
sequence
$$0\longrightarrow\mathcal A\longrightarrow\mathcal K^0\longrightarrow\mathcal K^1\longrightarrow\cdots\longrightarrow\mathcal K^d\longrightarrow0$$
in which each $\mathcal K^j$ restricts to a c-soft sheaf on every fibre
$f^{-1}(y)$ ([[def-c-soft-sheaf]]). For $d=0$ this says that every sheaf on
$X$ is already c-soft on every fibre. In particular the constant sheaf $k_X$
has such a resolution.

## Facts & Assumptions

**Given:** A continuous map $f:X\to Y$ between locally compact Hausdorff spaces, an integer $d\ge0$ with $H^q_c(V,\mathcal F)=0$ for all $q>d$, all open subspaces $V$ of fibres of $f$ and all sheaves $\mathcal F$ on $V$, a sheaf $\mathcal A$ of $k$-vector spaces on $X$, and the Axiom of Choice.

[F1] Fibres and their open subspaces: a fibre $F=f^{-1}(y)$ is closed in $X$ because $Y$ is Hausdorff and $f$ is continuous; a closed subspace of a locally compact space is locally compact, and Hausdorffness is hereditary, so every fibre and every open subspace of a fibre is locally compact Hausdorff. Compactness of a subset may be read in the subspace or in the ambient space ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-locally-compact-hausdorff-basics]], [[lem-t0-t1-and-hausdorff-are-hereditary]], [[def-subspace-topology-top]], [[def-compact-space]]).

[F2] c-softness and restrictions: injective abelian sheaves on a locally compact Hausdorff space are c-soft; restriction of a c-soft sheaf to an open or closed subspace is c-soft; c-soft sheaves are acyclic, $H^q_c=0$ for $q>0$; the restriction of a sheaf to an open subspace is the inverse image along the open inclusion and is exact ([[def-c-soft-sheaf]], [[lem-c-soft-field-sheaves-are-compact-support-acyclic]], [[def-restriction-sheaf-open-subspace]], [[def-inverse-image-presheaf-and-sheaf]]).

[F3] The vanishing criterion: if a sheaf $\mathcal E$ on a locally compact Hausdorff space $Z$ satisfies $H^1_c(V,\mathcal E|_V)=0$ for every open $V\subseteq Z$, then $\mathcal E$ is c-soft on $Z$ ([[lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft]]).

[F4] Injective resolutions exist: under AC every abelian sheaf on every topological space admits an injective resolution, assembled from one supplied functorial resolution datum ([[thm-abelian-sheaves-have-enough-injectives]], [[def-extension-by-zero-abelian-sheaf]]).

[F5] Long exact sequences: the functors $R^q\Gamma_c(Z,-)$ on a locally compact Hausdorff space $Z$ form a cohomological delta functor with $R^0\Gamma_c(Z,-)=\Gamma_c(Z,-)$, so every short exact sequence of abelian sheaves on $Z$ has a long exact compactly supported cohomology sequence; a sequence of sheaves is exact if and only if it is exact on every stalk, and restriction to an open subspace preserves exactness ([[thm-right-derived-functors-form-a-cohomological-delta-functor]], [[def-compactly-supported-global-sections]], [[def-exact-sequence-sheaves]], [[thm-exactness-of-sheaves-stalkwise]]).

[F6] The Axiom of Choice, from which dependent choice follows; dependent choice is used by the resolution and delta-functor theorems of facts F4 and F5 ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Fibres are locally compact Hausdorff.** For $y\in Y$ the fibre $F=f^{-1}(y)$ is closed in $X$ because $\{y\}$ is closed in the Hausdorff space $Y$ and $f$ is continuous [F1], so $F$ is a closed subspace of the locally compact space $X$ and is locally compact, and it is Hausdorff as a subspace of a Hausdorff space [F1]; the same holds for every open subspace $V\subseteq F$ [F1]. Consequently, for every sheaf $\mathcal G$ on $X$ that is c-soft on $X$, the restriction $\mathcal G|_F$ is c-soft on $F$ and its further restriction $\mathcal G|_V$ is c-soft on $V$, by the closed- and open-restriction clauses of [F2]; if $\mathcal G$ is injective on $X$ it is c-soft on $X$ by the injectivity clause of [F2]. [F1, F2]

2.1 **The resolution and its terms.** Fix the supplied functorial injective resolution datum on $\mathrm{Ab}(X)$ of [F4] and let $0\to\mathcal A\to I^0\to I^1\to\cdots$ be the injective resolution it assigns to $\mathcal A$. Each $I^j$ is injective on $X$, hence c-soft on $X$, hence restricts to a c-soft sheaf $I^j|_F$ on every fibre $F$ and to a c-soft sheaf $I^j|_V$ on every open $V$ of a fibre, by [step 1.1]; in particular each $I^j$ is fibrewise c-soft. [step 1.1, F2, F4]

3.1 **Dimension shifting on an open subspace of a fibre.** Let $V\subseteq F$ be open in a fibre $F=f^{-1}(y)$ and define the syzygies $Z^0:=\mathcal A$ and, for $j\ge0$, $Z^{j+1}:=\operatorname{coker}(Z^j\to I^j)$, so that $0\to Z^j\to I^j\to Z^{j+1}\to0$ is a short exact sequence of sheaves on $X$. Restricting to the open subspace $V$ preserves exactness and cokernels, so $0\to Z^j|_V\to I^j|_V\to Z^{j+1}|_V\to0$ is a short exact sequence of sheaves on the locally compact Hausdorff space $V$ [F5] whose middle term is c-soft, hence acyclic [F2]; the long exact compactly supported cohomology sequence of [F5] therefore gives isomorphisms $H^p_c(V,Z^{j+1}|_V)\xrightarrow{\ \sim\ }H^{p+1}_c(V,Z^j|_V)$ for every $p\ge1$, because the two adjacent groups of the c-soft sheaf $I^j|_V$ vanish in positive degrees. Iterating these isomorphisms for $j=0,1,\dots,d-1$ with $p=1,2,\dots,d$ gives $H^1_c(V,Z^d|_V)\cong H^{d+1}_c(V,\mathcal A|_V)=0$, the last group vanishing by the dimension hypothesis of the statement because $d+1>d$ and $V$ is an open subspace of a fibre. [step 2.1, F2, F5]

4.1 **The cokernel after $d$ steps is fibrewise c-soft.** Let $F=f^{-1}(y)$ be any fibre and let $V\subseteq F$ be open; by [step 3.1] one has $H^1_c(V,Z^d|_V)=0$ for every such $V$, so the vanishing criterion [F3] applied to the locally compact Hausdorff space $Z=F$ and the sheaf $\mathcal E=Z^d|_F$ shows that $Z^d|_F$ is c-soft on $F$. Since $y$ was arbitrary, $Z^d$ restricts to a c-soft sheaf on every fibre. Concatenating the short exact sequences $0\to Z^j\to I^j\to Z^{j+1}\to0$ for $j=0,\dots,d-1$ gives the exact sequence $0\to\mathcal A\to I^0\to I^1\to\cdots\to I^{d-1}\to Z^d\to0$, a bounded resolution of $\mathcal A$ whose terms $I^0,\dots,I^{d-1}$ are fibrewise c-soft by [step 2.1] and whose last term $Z^d$ is fibrewise c-soft by the preceding argument; when $d=0$ the construction stops at $Z^0=\mathcal A$ and the isomorphism $H^1_c(V,\mathcal A|_V)\cong H^{d+1}_c(V,\mathcal A|_V)=0$ of [step 3.1] with $d=0$ gives the c-softness of $\mathcal A$ on every fibre directly by [F3]. [step 2.1, step 3.1, F3, F5]

5.1 **Conclusion.** The displayed bounded resolution of the statement is [step 4.1], and taking $\mathcal A=k_X$ gives the instance of the constant sheaf. The Axiom of Choice is used only through the injective resolution datum of [F4] and the delta-functor and comparison statements of [F5], whose connecting maps use dependent choice, a consequence of AC [F6]; the fibre-by-fibre dimension count of [step 3.1] is finite. [step 4.1, F3, F4, F5, F6] ∎

## Remarks

- **What is claimed and what is deferred.** The resolution statement proved here is
  the finite-resolution form of Verdier's criterion: a uniform bound $d$ on the
  compact-support dimension of the open subspaces of the fibres bounds the length
  of a resolution of every sheaf by fibrewise c-soft sheaves. The scaffold also
  contemplated a statement about *bounded complexes* of sheaves, obtained by
  resolving each term and totalising over the bounded index range. That
  totalisation requires a Cartan--Eilenberg-style compatible choice of comparison
  maps making the total complex a complex of sheaves (naive termwise lifts need
  not square to zero), which the foundation this page rests on does not supply;
  the complex-level clause is therefore deferred rather than asserted, and no
  result in this pair depends on it.

- **Where the uniform bound is used.** The hypothesis is used exactly once, in
  [step 3.1], to kill $H^{d+1}_c(V,\mathcal A|_V)$; it is a uniform bound over all
  sheaves and all open subspaces of all fibres, not merely a bound on the
  cohomological dimension of a fixed sheaf. A single sheaf of finite
  compact-support dimension on each fibre would not suffice for the statement as
  formulated.

- **Relation to the acyclicity and criterion lemmas.** The terms $I^j$ are c-soft
  because injective sheaves are c-soft, and the last term is c-soft by the
  converse criterion; both directions of the c-softness theory on this page are
  thereby used in the single construction.

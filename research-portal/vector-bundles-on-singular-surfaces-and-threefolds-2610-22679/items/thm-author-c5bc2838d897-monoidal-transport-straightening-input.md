---
id: thm-author-c5bc2838d897-monoidal-transport-straightening-input
kind: theorem
title: External straightening and symmetric monoidal criteria
status: published
domain: mathematics
deps:
  - math:def-simplicial-set-homotopy-and-trivial-kan-fibration
  - math:def-simplicial-horn-and-kan-fibration
dependency_roles:
  math:def-simplicial-set-homotopy-and-trivial-kan-fibration: mathematical-premise
  math:def-simplicial-horn-and-kan-fibration: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Vladimir Hinich, Dwyer–Kan localization revisited
      url: https://arxiv.org/pdf/1311.4128v4
      locator: §1.1.2–1.1.3 (markings and localization, equation (1) and the
        proposition); Definition 2.1.1; Definition 2.1.3; Proposition 2.1.4;
        §2.1.5, equation (31); Lemma 2.1.6; §2.2.2, equations (33)–(34) and the
        pullback description; Definition 3.2.1 and Proposition 3.2.2
      statement: Saturated markings and their arrow infinity-category, and
        infinity-localization with its mapping-space universal property and
        existence. The four marked-cocartesian conditions are those listed
        explicitly in [F8]. Coc(D), with cocartesian-preserving morphisms, is
        equivalent to Fun(D,Cat∞). The marked family localizes over L(D,W); its
        classifying functor extends L∘F⁺, and its pullback to D is classified by
        L∘F⁺. Componentwise markings preserved by all active transports permit
        strict symmetric monoidal localization.
      hypotheses: Infinity-categories in compatible universes; saturated markings; all
        four conditions of Definition 2.1.1, including marked cocartesian lifts,
        preservation of fiber markings and equivalences on localized fibers over
        marked base arrows. For Proposition 3.2.2 start with a symmetric
        monoidal family, extend the marking componentwise, and require every
        active transport to preserve it. Cocartesian fibrations in Cat∞ are
        understood up to the presentations in Definition 2.1.3.
      reading_limits: This repair read §1.1.2–1.1.3 through the existence proposition;
        Definitions 2.1.1 and 2.1.3, Proposition 2.1.4, §2.1.5–2.1.6, §2.2.2
        including equations (33)–(34) and its pullback description, and
        Definition 3.2.1 through Proposition 3.2.2. Portions of §2.2.3–2.2.4
        were inspected for context. The proof of Proposition 2.1.4 is imported;
        no complete new reading of §2.2.3–2.2.6 or reconstruction of
        localization model structures is claimed.
    - title: Jacob Lurie, Higher Algebra
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Notation 2.0.0.2 and Definition 2.0.0.7; Definition 2.1.1.8; Definition
        2.1.2.1; Definition 2.1.3.7 and its immediately preceding discussion
      statement: Finite pointed sets, their inert maps (singleton preimages of each
        nonbasepoint) and active maps (only the basepoint maps to the
        basepoint). A cocartesian family over N(Fin_*) with inert Segal
        equivalences for all n≥0 is symmetric monoidal. A functor over that base
        preserving all cocartesian edges is symmetric monoidal, with invertible
        tensor and unit comparisons.
      hypotheses: Cocartesian fibrations of infinity-categories over N(Fin_*); Segal
        equivalences in every arity, including the terminal zeroth fiber. For
        the functor criterion preserve all cocartesian edges; merely preserving
        inert edges is insufficient.
      reading_limits: This repair read the finite-pointed-set notation, Definitions
        2.0.0.7, 2.1.1.8 and 2.1.2.1, and Definition 2.1.3.7 with its preceding
        tensor/unit comparison discussion. It imports the stated formalism and
        does not reconstruct general infinity-operad foundations.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definition 1.1.2.4; Definitions 1.1.5.1, 1.1.5.3 and 1.1.5.5;
        Proposition 1.1.5.10; §1.2.4 and Proposition 1.2.4.3; Proposition
        1.2.5.3 and its following paragraph (printed pp. 35–36; PDF pp. 53–54);
        Notation 1.2.7.2 and Proposition 1.2.7.3; Definition 2.0.0.3; Remark
        2.4.1.4 and Definition 2.4.2.1 (opposite/cocartesian version);
        Definition 3.0.0.1 and Remarks 3.0.0.2–3
      statement: The quasi-category, equivalence, simplicial functor-category,
        coherent-nerve and Cat∞ constructions used in [F5]–[F6]; inner
        fibrations and the cocartesian horn/lift conditions in [F7]. Fun(K,C) is
        an infinity-category for any simplicial set K and infinity-category C. A
        simplicial category with Kan mapping complexes has an infinity-category
        as coherent nerve. The equivalence-edge simplicial subset of any
        infinity-category is its largest Kan subcomplex (Proposition 1.2.5.3).
        Currying is the simplicial exponential identity.
      hypotheses: Compatible fixed universes; quasi-categories as the model of
        infinity-categories; inner fibrations for the cocartesian-edge horn
        criterion; specified source objects for cocartesian lifts. For the
        coherent-nerve infinity-category assertion the mapping simplicial sets
        must be Kan. Fun(K,C) requires C to be an infinity-category, with K any
        simplicial set. For the core assertion C must be an infinity-category;
        apply it to T and to Fun(A,T) or Fun(C,D) after Proposition 1.2.7.3.
      reading_limits: The preceding repair recorded inspection of the previously
        listed definitions and statements, the outer-horn criterion of Remark
        2.4.1.4 with its opposite convention, the coherent-nerve and Cat∞
        constructions, and the proof of Proposition 1.1.5.10. Current
        adjudication inspected Proposition 1.2.5.3, its proof and the following
        largest-Kan-subcomplex interpretation on printed pp. 35–36, and
        Definition 3.0.0.1 with Remarks 3.0.0.2–3 to check its application in
        [F5], [F6] and [F8]. No fresh reading of the other listed passages is
        claimed. General model-structure, functor-category and straightening
        proofs remain imported.
dependency_level: 0
---

## Statement
For any infinity-category $D$, straightening gives an equivalence $\mathrm{Coc}(D)\simeq\mathrm{Fun}(D,\mathrm{Cat}_\infty)$, where $\mathrm{Coc}(D)$ has cocartesian fibrations as objects and functors over $D$ preserving cocartesian arrows as morphisms. Functor categories satisfy exponential currying $\mathrm{Fun}(B\times S,\mathrm{Cat}_\infty)\simeq\mathrm{Fun}(B,\mathrm{Fun}(S,\mathrm{Cat}_\infty))$.

For $S=N(\mathrm{Fin}_*)$, a cocartesian fibration $C^\otimes\to S$ is a symmetric monoidal infinity-category exactly when its inert maps $\rho_i:\langle n\rangle\to\langle1\rangle$ give $C_n\simeq C_1^n$ for every $n\geq0$, with $C_0$ terminal. Maps over $S$ preserving all cocartesian arrows are strong symmetric monoidal functors, including equivalence of their tensor and unit comparisons.

Let $f:(C,V)\to(D,W)$ satisfy all four conditions of Hinich Definition 2.1.1, with saturated markings, and let $F^+:D\to\mathrm{Cat}_\infty^+$ classify its marked fibers. The composite $L\circ F^+:D\to\mathrm{Cat}_\infty$ sends $W$ to equivalences and extends to $\overline F:L(D,W)\to\mathrm{Cat}_\infty$. The localized family $L(C,V)\to L(D,W)$ is the unstraightening of $\overline F$. Its pullback to $D$ is classified by $L\circ F^+$ and has the localized fibers. These are constructions of whole cocartesian families and their localization map. If $W$ consists of equivalences, $L(D,W)\simeq D$, giving the original-base special case. The explicit marked-cocartesian hypotheses and, in the monoidal application, preservation of componentwise markings by active tensor transports remain required.

## Source contract
**Given:** Categories in fixed suitable universes, genuinely cocartesian families, and the stated Segal and marking conditions where used.

**Goal:** Import the standard family/functor dictionary and exact strong monoidal criterion.

[F1] Hinich §2.1.5, equation (31), supplies Coc(D)≃Fun(D,Cat∞) with cocartesian-preserving maps. Its §2.2.2–2.2.6 proves the actual family-localization assertion.

[F2] HTT Notation 1.2.7.2 and Proposition 1.2.7.3 supply functor infinity-categories; currying is their defining simplicial exponential identity.

[F3] HA Definition 2.0.0.7 and Definition 2.1.3.7 supply precisely the Segal and strong symmetric monoidal conditions, including the nullary unit.

## Facts & Assumptions
[F4] [[math:def-simplicial-set-homotopy-and-trivial-kan-fibration]] supplies simplicial sets, standard simplices $\Delta[n]$, and degreewise products and pullbacks. [[math:def-simplicial-horn-and-kan-fibration]] supplies horns $\Lambda^i[n]$ and the horn-filling meaning of Kan complexes. All categories and simplicial sets are small in a fixed universe when required; their categories of objects are taken in a larger compatible universe.

[F5] In the HTT conventions cited in source reference 2, an **infinity-category** is a simplicial set $C$ in which every $\Lambda^i[n]\to C$ with $0<i<n$ extends to $\Delta[n]$. Its objects and arrows are vertices and edges; identities are degenerate edges. A functor is a simplicial map. An edge $e$ is an **equivalence** precisely when every outer-horn map $\Lambda^0[n]\to C$, $n\geq2$, whose first edge is $e$ extends to $\Delta[n]$ (HTT Proposition 1.2.4.3). Put $\mathrm{Fun}(K,C)_m=\operatorname{Hom}_{\mathrm{sSet}}(K\times\Delta[m],C)$, with simplicial operators induced from $\Delta[m]$; for an infinity-category $C$ this is an infinity-category (HTT Proposition 1.2.7.3). Its edges and equivalence edges are natural transformations and natural equivalences. The **core** $C^\simeq$ is its largest Kan subcomplex, consisting of simplices all of whose edges are equivalences (HTT Proposition 1.2.5.3 and its following paragraph).

[F6] The ambient $\mathrm{Cat}_\infty$ in source reference 2 is the coherent nerve of the simplicial category whose objects are small infinity-categories and whose mapping simplicial sets are $\mathrm{Fun}(C,D)^\simeq$, with composition induced by composition of functors (HTT Definition 3.0.0.1). Here a simplicial category has simplicial sets of morphisms and associative unital simplicial composition. Explicitly, let $Q^n$ have objects $0,\ldots,n$, empty morphism simplicial sets for $i>j$, and $\operatorname{Map}_{Q^n}(i,j)=N(P_{ij})$ for $i\leq j$, where $P_{ij}$ is the inclusion-ordered set of subsets of $\{i,\ldots,j\}$ containing both endpoints; composition is induced by union and identities by singleton subsets. The ordinary nerve $N(A)_m$ consists of strings of $m$ composable arrows in the category $A$. The coherent nerve has $n$-simplices the simplicial functors $Q^n\to A$; simplicial operators use direct images of subsets under monotone maps. This is the construction of HTT Definitions 1.1.5.1, 1.1.5.3 and 1.1.5.5. Its infinity-category property for Kan mapping simplicial sets is imported from Proposition 1.1.5.10. Equivalences of infinity-categories mean equivalence edges in this $\mathrm{Cat}_\infty$; a terminal infinity-category means one equivalent to $\Delta[0]$.

[F7] In source reference 2, an **inner fibration** $p:E\to D$ has the relative lifting property against every $\Lambda^i[n]\hookrightarrow\Delta[n]$ with $0<i<n$. For such $p$, an edge $e$ of $E$ is **$p$-cocartesian** when every compatible pair $\Lambda^0[n]\to E$, $\Delta[n]\to D$ with first edge $e$ admits a lift $\Delta[n]\to E$, for $n\geq2$. This is the opposite of HTT Remark 2.4.1.4. A **cocartesian fibration** is an inner fibration for which every arrow $u:d\to d'$ and every $x$ over $d$ have a cocartesian lift starting at $x$ (the opposite of Definition 2.4.2.1). Its fiber is $E_d=E\times_D\{d\}$. The transport $u_!:E_d\to E_{d'}$ and its coherences are those furnished by the imported straightening equivalence [F1], not additional independently chosen pointwise functors. As in Hinich Definition 2.1.3 (source reference 0), the same family in $\mathrm{Cat}_\infty$ may be represented up to equivalence by such a simplicial cocartesian fibration; pullbacks of families are understood in $\mathrm{Cat}_\infty$.

[F8] Source reference 0, §1.1.2–1.1.3, supplies **marked infinity-categories** $(C,V)$, where $V$ is a collection of arrows. A marking is **saturated** if $V$ is the inverse image of equivalence arrows under some functor $C\to T$. Thus $V$ determines a wide subcategory of $C$; $\mathrm{Cat}_\infty^+$ is the full subcategory of $\mathrm{Fun}(\Delta[1],\mathrm{Cat}_\infty)$ on these inclusions. Let $K(T)=T^\simeq$ and $\operatorname{Map}(A,T)=\mathrm{Fun}(A,T)^\simeq$. The **localization** $C\to L(C,V)$ has, naturally in $T$, $\operatorname{Map}(L(C,V),T)\simeq\operatorname{Map}(C,T)\times_{\operatorname{Map}(V,T)}\operatorname{Map}(V,K(T))$, where the fiber product is the homotopy pullback of Kan complexes, equivalently the space of functors carrying $V$ to equivalences. Its existence and functorial localization map are imported from §1.1.3. A homotopy pullback here records two points and a path identifying their images, with all higher simplices. For a marking-preserving $f:(C,V)\to(D,W)$, the four conditions of Hinich Definition 2.1.1 are: $f$ is cocartesian; cocartesian lifts of $W$ belong to $V$; every transport preserves the fiber markings; and transport along every arrow of $W$ induces an equivalence of localized fibers. These are all required, with saturated markings. No condition is inferred merely from separate fiberwise localizations.

[F9] In source reference 1, $\mathrm{Fin}_*$ is the category of finite pointed sets and basepoint-preserving maps, with representatives $\langle n\rangle=\{*,1,\ldots,n\}$. A map $\alpha:\langle m\rangle\to\langle n\rangle$ is **inert** if each $\alpha^{-1}(i)$, $1\leq i\leq n$, is a singleton; it is **active** if $\alpha^{-1}(*)=\{*\}$. The projection $\rho_i$ sends $i$ to $1$ and all other elements to $*$. The active fold $\langle n\rangle\to\langle1\rangle$ sends all nonbasepoints to $1$, including the unique map when $n=0$. In a family with the Segal equivalences of the Statement these active transports encode tensor operations and the nullary unit. If its first fiber has a saturated marking $V$, the **componentwise marking** on the $n$th fiber means that an arrow maps to $V$ under every $\rho_i$; at $n=0$ all arrows are marked. These are the fiber markings in Hinich §3.2 (source reference 0). Preservation by every active transport is a hypothesis of the monoidal-localization application. It is distinct from the all-cocartesian-edge preservation required of a strong symmetric monoidal functor in [F3].

## External input
Import [F1]–[F3] and the sourced framework [F5]–[F9] with the frontmatter reading limits; [F4] supplies their simplicial syntax. This standard formal input does not supply a product-base family in an application: that must actually have been constructed, with its hypotheses verified. No identification of separately existing functors is part of this import.

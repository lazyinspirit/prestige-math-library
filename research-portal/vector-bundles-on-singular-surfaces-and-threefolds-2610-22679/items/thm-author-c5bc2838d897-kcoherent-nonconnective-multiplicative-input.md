---
id: thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input
kind: theorem
title: External nonconnective lax symmetric monoidal K-theory
status: published
domain: mathematics
deps:
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
dependency_roles:
  def-stable-spectra-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  thm-author-e0b0bf18ed2b-stable-enhancement-input: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic
        K-theory
      url: https://arxiv.org/pdf/1001.2282v4
      locator: §2.2, Definition 2.12 and the idempotent-completeness paragraph
        (printed p. 14); Definition 2.15 (§2.3, p. 15); §2.4 (pp. 17–18); §3.1
        and Theorem 3.1 (p. 20); Definition 5.12 and Proposition 5.13 (p. 35);
        Definition 8.1 (p. 52), Theorem 8.7 (p. 55); Definition 9.6 and Theorem
        9.8 (p. 58).
      statement: Stable categories have finite limits and colimits with coincident
        pullback and pushout squares; exact functors preserve finite limits and
        colimits. Idempotent completeness is closure of the Yoneda image under
        retracts. Cat_perf has the separately exact tensor with compact spectra
        as unit. The universal localizing invariant U_loc has stable presentable
        target M_loc; its spectral mapping object from U_loc(Sp^omega) to
        U_loc(A) represents nonconnective IK(A).
      hypotheses: Small stable infinity-categories and exact functors in compatible
        fixed universes, with idempotent completeness imposed for Cat_perf. In
        the exact-sequence criterion use kappa=omega and idempotent-complete
        targets. Compactness means preservation of filtered colimits by the
        represented mapping-space functor. The representability theorem concerns
        nonconnective IK.
      reading_limits: For this repair, read the defining paragraphs in §§2.2–2.4, the
        tensor universal property and Theorem 3.1, Definition 5.12 and
        Proposition 5.13 with its displayed argument, Definition 8.1 and Theorem
        8.7 statement, and Definition 9.6 and Theorem 9.8 statement and
        announced proof dependencies. The constructions of motives, spectral
        enrichment and nonconnective K-theory and the proofs of Theorems 3.1,
        8.7 and 9.8 are imported. No complete source audit, scheme localization
        proof, classical-model comparison or degree-zero computation is claimed.
    - title: Blumberg–Gepner–Tabuada, Uniqueness of the multiplicative cyclotomic
        trace
      url: https://arxiv.org/pdf/1103.3923v3
      locator: Introduction, equations (1.2)–(1.3), printed pp. 2–3; §3,
        finite-pointed-set/inert-map conventions and operad-map/algebra/functor
        discussion, pp. 10–12; Theorem 5.8, Proposition 5.9 and Corollary 5.10,
        p. 23.
      statement: U_loc is symmetric monoidal, with U_loc(Sp^omega) as tensor unit.
        Nonconnective IK, expressed by the localizing-motive mapping spectrum,
        is lax symmetric monoidal. Consequently commutative algebra objects give
        E-infinity ring spectra. Lax monoidal maps are inert-preserving maps of
        the monoidal operadic families, so composition transports specified
        coherent algebra and module operations.
      hypotheses: Small stable idempotent-complete infinity-categories with the
        separately exact tensor. The lax structure includes nullary units and
        all coherence data; separately exact pairings must first define maps out
        of that tensor. Only already supplied coherent algebra/module structures
        are transported.
      reading_limits: For this repair, read introduction equations (1.2)–(1.3), the
        finite-pointed-set and inert-map conventions and
        operad-map/algebra/functor discussion in §3, Theorem 5.8 statement,
        Proposition 5.9 with its full displayed proof and Corollary 5.10.
        Proposition 5.9 explicitly includes IK and gives its proof by the same
        argument as K. The motivic monoidal construction and general operadic
        foundations are imported; no independent reconstruction or acceptance is
        claimed.
dependency_level: 4
formulation_deps:
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
argument_deps:
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
---

## Statement
Assume the Axiom of Choice and compatible fixed universes. Smallness is relative to the small universe, with categories of small categories formed in larger universes. Use infinity-categories, spaces, coherent functors, limits and colimits in the stable-enhancement conventions. A stable infinity-category has a zero object, finite limits and finite colimits, and its pullback and pushout squares coincide. An exact functor preserves finite limits and finite colimits. An infinity-category $A$ is idempotent-complete when every retract of a representable presheaf is representable: in $\operatorname{Fun}(A^{\mathrm{op}},S)$, if $P\to\operatorname{map}_A(-,a)\to P$ composes to the identity up to homotopy, then $P\simeq\operatorname{map}_A(-,b)$ for some $b$. Here $S$ denotes spaces, $\operatorname{map}$ denotes the mapping space, and the assignment $a\mapsto\operatorname{map}_A(-,a)$ is the Yoneda embedding.

Let $\mathrm{Cat}_{\mathrm{perf}}$ have small idempotent-complete stable infinity-categories as objects and exact functors as arrows, with natural equivalences and their higher coherences in its mapping spaces. It has a symmetric monoidal tensor characterized, for every such $A,B,C$, by $\operatorname{Fun}^{\mathrm{ex}}(A\otimes B,C)\simeq\operatorname{Fun}^{\mathrm{ex},\mathrm{ex}}(A\times B,C)$; the right side consists of functors exact separately in the two variables. Its unit is $\mathrm{Sp}^{\omega}$, a small equivalent presentation of the full category of compact spectra. Compact means that $\operatorname{map}_{\mathrm{Sp}}(E,-)$ preserves filtered colimits.

The nonconnective algebraic K-theory functor $\mathbb K:\mathrm{Cat}_{\mathrm{perf}}\to\mathrm{Sp}$ exists and is lax symmetric monoidal. It is BGT's $IK$, and has the natural equivalence $\mathbb K(A)\simeq\operatorname{Map}_{\mathcal M_{\mathrm{loc}}}(U_{\mathrm{loc}}(\mathrm{Sp}^{\omega}),U_{\mathrm{loc}}(A))$. Here $U_{\mathrm{loc}}:\mathrm{Cat}_{\mathrm{perf}}\to\mathcal M_{\mathrm{loc}}$ is the universal localizing invariant, with stable presentable target the category of localizing motives; its defining universal property and the meaning of localizing are specified below. $\operatorname{Map}_{\mathcal M_{\mathrm{loc}}}$ is the mapping spectrum in that category, whose nth space is $\operatorname{map}_{\mathcal M_{\mathrm{loc}}}(X,Y[n])$ for $n\geq0$, with structure equivalences supplied by stability. It is not merely a mapping space.

In particular $\mathbb K$ carries coherent commutative algebra objects in $\mathrm{Cat}_{\mathrm{perf}}$ to $E_\infty$ ring spectra, and transports their specified coherent algebra and module operations functorially. Lax symmetric monoidal includes coherent comparisons $\mathbb K(A)\wedge\mathbb K(B)\to\mathbb K(A\otimes B)$ and $\mathbb S\to\mathbb K(\mathrm{Sp}^{\omega})$ in all arities. A commutative algebra object has coherently symmetric, associative and unital operations in every finite arity; an $E_\infty$ ring spectrum is such an object in spectra. A module has coherent unital associative action operations of an algebra on its underlying object. Only supplied algebra/module data are transported.

## Source contract
**Given:** The Axiom of Choice of [[math:def-axiom-of-choice]] and the universe, higher-category, presentability, filtered-colimit and symmetric monoidal conventions of [[thm-author-e0b0bf18ed2b-stable-enhancement-input]]. AC is included in the classical foundations of these imported constructions; no choice-free theorem is claimed. The target spectra, sphere, suspension and smash conventions are those of [[def-stable-spectra-interface]].

**Goal:** Import the precise nonconnective multiplicative functor, including the interfaces needed to interpret its domain and representing formula.

[F1] Reference 0, BGT, A universal characterization, supplies the stable/exact/idempotent-complete interfaces in §2.2, mapping spectra in Definition 2.15, compactness in §2.4, the tensor universal property and unit in §3.1, exact sequences in Definition 5.12 and Proposition 5.13, and the localizing invariant and nonconnective representing formula in Definition 8.1, Theorem 8.7, Definition 9.6 and Theorem 9.8.

[F2] Reference 1, BGT, Uniqueness of the multiplicative cyclotomic trace, supplies the operadic meaning of coherent algebras and lax monoidal maps in §3, the monoidal motive target in Theorem 5.8, and the nonconnective lax symmetric monoidal assertion and algebra consequence in Proposition 5.9 and Corollary 5.10.

## External input
Import [F1] and [F2] with the hypotheses and reading limits recorded in the references; the inline interfaces are sourced specifications, not local proofs.

For precision, a localizing invariant on $\mathrm{Cat}_{\mathrm{perf}}$ with values in a stable presentable infinity-category $D$ preserves filtered colimits and sends exact sequences to cofiber sequences. Here an exact sequence $A\to B\to C$ has zero composite, fully faithful first map (equivalences on mapping spaces), and identifies $C$ with the cofiber $B\sqcup_A0$ in $\mathrm{Cat}_{\mathrm{perf}}$. Equivalently its idempotent-completed stable quotient is $C$; the quotient is universal for exact functors from $B$ sending $A$ to zero. BGT also defines the invariant on all small stable categories and requires inversion of maps becoming equivalences after idempotent completion; on the restricted domain that condition is already invariance under equivalence. Universality means that precomposition induces $\operatorname{Fun}^{L}(\mathcal M_{\mathrm{loc}},D)\simeq\operatorname{Fun}_{\mathrm{loc}}(\mathrm{Cat}_{\mathrm{perf}},D)$, where $L$ denotes colimit-preserving functors and the right side is the full functor category on these localizing invariants. Existence of this target and invariant is imported from [F1], not inferred from a notation convention.

Use the symmetric monoidal families over the nerve of finite pointed sets specified by the stable-enhancement supplier. A lax symmetric monoidal functor is a functor between these families over that nerve preserving the cocartesian arrows over inert maps, where inert means that each nonbasepoint in the target has exactly one preimage. It need not preserve the cocartesian arrows over every map. A commutative algebra is an inert-preserving section of the family; composing such operations with the lax functor gives the transported operations. The same composition applies to the coherent algebra/action operations specifying a module, including the nullary unit and all action compatibilities. This is the operadic meaning of [F2], not a construction from binary homotopy-category maps alone.

This is the nonconnective $IK$ of [F1] and [F2]. A scheme localization sequence or identification of $\pi_0$ with a separately presented degree-zero group requires its own application/comparison supplier.

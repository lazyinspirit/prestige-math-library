---
id: lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge
kind: lemma
title: Actual EM coefficient mapping and smooth-site comparison
status: draft
domain: mathematics
deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - thm-author-32887006bdff-p1-spectrum-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-nisnevich-covering-interface
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-adjudicate-3616f2ecb23d-native-field-site-comparison
formulation_deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - thm-author-32887006bdff-p1-spectrum-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-nisnevich-covering-interface
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-adjudicate-3616f2ecb23d-native-field-site-comparison
argument_deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - thm-author-32887006bdff-p1-spectrum-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-nisnevich-covering-interface
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-adjudicate-3616f2ecb23d-native-field-site-comparison
dependency_roles:
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  lem-author-32887006bdff-actual-orientation: mathematical-premise
  thm-author-32887006bdff-p1-spectrum-input: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison: mathematical-premise
  def-adjudicate-c387df8ff29b-non-a1-spectrum-framework: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  lem-adjudicate-3616f2ecb23d-native-field-site-comparison: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
local_argument_provenance: ai-generated
proof_strategy: direct
dependency_level: 20
sources:
  references:
    - title: Jacob Lurie, Higher Topos Theory (2009)
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definition 6.2.2.6 and Proposition 6.2.2.7, printed p. 579; proof of
        Proposition 6.2.2.7, pp. 582–583 (PDF pages 597, 600–601)
      statement: Space-valued sheaves on a small site form a full reflective
        localization of presheaves, with left exact sheafification.
      hypotheses: A small category with a Grothendieck topology; apply separately to
        Zariski and Nisnevich topologies on the fixed universe-bounded smooth
        category.
      reading_limits: Freshly read Definition 6.2.2.6, Proposition 6.2.2.7 and its
        complete displayed proof in the primary PDF extraction for this repair.
        Import the localization theorem; its transfinite and higher-category
        foundations are not reconstructed. Only covering-sieve descent is used.
    - title: Jacob Lurie, Higher Algebra (18 September 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Theorem 7.1.2.13 and proof, printed pp. 1212–1213; Corollary
        4.2.3.3(1)–(2), p. 527
      statement: The derived infinity-category of modules over a commutative ring is
        canonically equivalent to module spectra over that discrete ring
        spectrum. Module limits are created in underlying spectra.
      hypotheses: Take the commutative ring to be Z and the ambient monoidal category
        to be spectra. All complexes are unbounded in the fixed universes;
        translate source homological grading to cochain grading.
      reading_limits: Freshly read the full Theorem 7.1.2.13 statement and proof and
        the complete Corollary 4.2.3.3 statement in the primary PDF extraction
        for this repair. Import the equivalence and module-limit theorem; their
        model-category and operadic prerequisites are not reconstructed. Use the
        supplied cochain convention.
---

## Statement
Assume the Axiom of Choice and compatible nested Grothendieck universes containing $\omega$, with the site and coefficient size bounds of the supplied models. Let $k$ be a field and let $\mathcal C$ be the smooth finite-type $k$-site, allowing nonseparated schemes. Write $\mathcal S_\tau=\operatorname{Shv}_\tau(\mathcal C,\mathrm{Spaces})$ for space-valued sheaves with covering-sieve descent, for $\tau=\mathrm{Zar}$ or $\mathrm{Nis}$, and $a_\tau$ for sheafification. Use the actual EM model $\mathcal E_k$ and its coefficient spectra $A_i(U)=H(\mathbb Z(i)_{\rm mot}(U)[2i])$ for $i\geq0$. Here $H$ is Eilenberg–Mac Lane realization, with $\pi_r HC=H^{-r}(C)$ and $H^a(C[b])=H^{a+b}(C)$.

Let $\mathcal D$ be the supplied native qcqs smooth derived $k$-site. Discrete realization $j:\mathcal C\simeq\mathcal D$ identifies the Zariski sites and their coefficient, pointed-stack and motivic constructions by the supplied native-field-site comparison. Throughout, $\widetilde{\mathcal E}_k^{p,q}(X)$ for $X\in\mathcal S_{\mathrm{Zar},*}$ means native cohomology of the corresponding stack $(j^*)^{-1}X$; the coefficient levels on $\mathcal C$ are the restrictions $j^*A_i$. This specifies the site comparison before using the native suspension/evaluation adjunction.

For a pointed space-valued presheaf $P$, define the ordinary mapping spectrum
$$T_i(P)=\operatorname{map}_{\operatorname{Fun}(\mathcal C^{\rm op},\mathrm{Sp})}(\Sigma^\infty P,A_i),$$
where $\Sigma^\infty$ is reduced circle suspension, applied objectwise. Then $A_i$ has Nisnevich descent, and there are natural identifications
$$\Omega^\infty T_i(P)\simeq\operatorname{Map}_{\mathcal S_{\tau,*}}(a_\tau P,\Omega^\infty A_i),\qquad \pi_rT_i(P)\cong\widetilde{\mathcal E}_k^{2i-r,i}(a_{\rm Zar}P)\quad(r\geq0).$$
Thus the same mapping spectrum computes the pointed target maps for both topologies, in particular their degrees zero and one. For an unpointed presheaf, use its disjointly pointed version in this formula. If it already has a chosen point, evaluation there splits off $A_i(k)$ from the unpointed mapping spectrum, leaving $T_i(P)$ as the reduced summand.

Let $P_n(U)=B(GL_n(\Gamma(U,\mathcal O_U)))$, pointed at its sole object; $GL_n$ is the group of invertible $n$-by-$n$ matrices, and $B$ is its nerve, whose degree-$q$ simplices are $q$-tuples of matrices. Then $a_{\rm Zar}P_n=\mathrm{Vect}_{n,k}$, the stack of rank-$n$ vector bundles and isomorphisms pointed by $\mathcal O^n$. Consequently the bigraded cohomology computation for this actual oriented PBF model computes these mapping groups in degrees zero and one, on both sites. All these identifications preserve source stabilization by addition of a trivial line and restriction arrows. No comparison theorem limited to separated schemes is used.

## Statement references

[[lem-author-32887006bdff-em-p1-model]]

[[lem-author-32887006bdff-actual-orientation]]

[[thm-author-32887006bdff-p1-spectrum-input]]

[[lem-author-b747b28c359f-elmanto-morrow-complexes]]

[[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]]

[[def-nisnevich-covering-interface]]

[[def-stable-spectra-interface]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

[[lem-adjudicate-3616f2ecb23d-native-field-site-comparison]]

## Facts & Assumptions

[A1] Assume [[math:def-axiom-of-choice]] and [[math:def-grothendieck-universe-closure-convention]], including the separate existence and size bounds stated above. These are inherited by the coefficient, spectral and sheaf constructions; no choice-free version is asserted.

[F1] The actual model has level $i$ equal to $\Omega^\infty A_i$, and the actual orientation satisfies PBF. These are the model and orientation, not an abstract cohomology theory. [[lem-author-32887006bdff-em-p1-model]] [[lem-author-32887006bdff-actual-orientation]]

[F2] The motivic suspension/evaluation adjunction and the projective-line shift evaluate $\Sigma_{\mathbb P^1}^i\mathcal E_k$ at level zero as $\Omega^\infty A_i$. The framework also supplies circle stabilization and its adjunction, reduced cohomology, the smooth site and the vector-bundle stack; ordinary mapping spectra and their homotopy groups use the stable interface. [[thm-author-32887006bdff-p1-spectrum-input]] [[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]] [[def-stable-spectra-interface]]

[F3] The actual complexes are coherent derived Nisnevich sheaves on all size-bounded qcqs field-schemes, hence on this smooth site, including its nonseparated objects. The supplied geometric clause makes every smooth finite-type scheme over a field Noetherian and qcqs, without separatedness, so this restriction is within that scope. The Nisnevich covering convention includes Zariski covers. [[lem-author-b747b28c359f-elmanto-morrow-complexes]] [[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison]] [[def-nisnevich-covering-interface]]

[F4] Reference 0 supplies sheafification as a reflective localization of space-valued presheaves for a small site, with sheaves a full subcategory; its sheafification is left exact. Apply this separately to the two topologies on the same bounded category.

[F5] Reference 1 identifies the unbounded derived category of abelian groups with modules over $H\mathbb Z$, and says that module limits are created on underlying spectra. Use its canonical Eilenberg–Mac Lane realization with cochain grading; it preserves coherent limits and has $\pi_r HC=H^{-r}(C)$.

[F6] The comparison [[lem-adjudicate-3616f2ecb23d-native-field-site-comparison]] gives the actual equivalence $j:\mathcal C\simeq\mathcal D$ over the discrete field, including nonseparated schemes. It transports arbitrary presheaves, pointed Zariski sheafification, coefficient levels, the usual pointed projective line and its spectrum suspension/evaluation and shift rules. It also identifies the native vector-bundle stack with the classical one, preserving its trivial point, addition of a trivial line and restriction maps. Its two geometric instances are separate; in spectral geometry it uses the supplied flat, fiber-smooth convention.

## External input

The categorical premises in [F4] and [F5] are imported only at the locators and hypotheses in references 0 and 1. Their foundational proofs are not reconstructed. The EM model, orientation, PBF, coefficient descent and motivic evaluation are supplied by [F1]–[F3]. The native-to-classical comparison, including its precise geometric inputs, is supplied by [F6]. The mapping comparison below is a local composition of those inputs; the whole lemma is not an imported statement.

## Proof

**Given:** The field, the two bounded smooth sites, the actual model, $i\geq0$, the presheaf $P$, Choice and the stated universes.

**Goal:** Identify the coefficient mapping groups and the site change needed by the universal Chern application.

1.1 First use [F6] to transport the native actual model and its adjunctions along $j^*$. This is an equivalence on all presheaves and pointed Zariski sheaves, so the native cohomology of $(j^*)^{-1}a_{\rm Zar}P$ has the meaning fixed in the Statement for every $P$. By [F3] the complexes have Nisnevich descent; [F5] transports those coherent limits to spectra, and $\Omega^\infty$ preserves them, so $A_i$ and $\Omega^\infty A_i$ are Nisnevich sheaves and hence Zariski sheaves. For Zariski sheaves, the motivic suspension/evaluation adjunction and shift in [F2] identify maps into $\Sigma_{\mathbb P^1}^i\mathcal E_k$ with pointed maps into its actual zeroth level $\Omega^\infty A_i$. Circle suspension and [F1]–[F2] identify the latter mapping space with the zeroth space of the ordinary mapping spectrum into $A_i$. Taking $\pi_r$ for $r\geq0$ gives exactly $\widetilde{\mathcal E}_k^{2i-r,i}$ by the framework grading, and [F5] gives the cochain sign convention stated above. The model's orientation and PBF are supplied by [F1], independently of this adjunction. The map $P_n\to\mathrm{Vect}_{n,k}$ sends the sole object to $\mathcal O^n$ and its automorphisms to invertible matrices. It is fully faithful and Zariski locally essentially surjective, since vector bundles are locally free. Because [F6] identifies this target with the native vector-bundle stack of [F2], its descent glues precisely these local free objects and their transition isomorphisms, proving $a_{\rm Zar}P_n=\mathrm{Vect}_{n,k}$. [A1, F1, F2, F3, F5, F6]

2.1 By [F4], mapping from $a_\tau P$ into the $\tau$-sheaf $\Omega^\infty A_i$ is mapping from $P$ in presheaves. The adjunction holds for pointed maps by taking the fiber over the specified basepoint. Circle suspension then identifies this with $\Omega^\infty T_i(P)$. The same reasoning applies to every shift $A_i[m]$, since shifting a derived sheaf preserves its limit diagrams and [F5] preserves these limits. Thus it also identifies the corresponding mapping spectra for the two topologies, without replacing ordinary sheaf descent by hyperdescent. For a presheaf with a chosen point, evaluation at that point has the section given by constant maps pulled back from $\operatorname{Spec}k$. In the stable category this splits the unpointed mapping spectrum into $A_i(k)$ and its fiber, which by the pointed suspension adjunction is $T_i(P)$. The site equivalence of [F6] preserves these constructions and their coefficient levels. All maps used are adjunction units, coefficient maps, evaluation, or the fixed trivial-bundle inclusion; hence they commute with source maps, addition of a trivial line and restriction diagrams. Together with step 1.1 this proves the asserted bridge on the full stated site. [F2, F3, F4, F5, F6, step 1.1] ∎

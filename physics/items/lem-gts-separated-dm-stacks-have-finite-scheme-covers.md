---
id: lem-gts-separated-dm-stacks-have-finite-scheme-covers
kind: lemma
title: Finite scheme covers of separated finite-type Deligne–Mumford stacks
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: gts-stable-curves-algebraic-enumerative-theory
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - cor-noether-normalisation-module-finiteness
  - def-axiom-of-choice
  - def-gts-classical-dm-stack-cotangent-complex
  - lem-relative-normalization-finite-stage
  - lem-integral-closure-commutes-etale-base-change
  - thm-integral-closure-finite-finite-type-domain-over-field
  - thm-polynomial-algebras-over-fields-have-finite-integral-closures
dependency_roles:
  cor-noether-normalisation-module-finiteness: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-gts-classical-dm-stack-cotangent-complex: mathematical-premise
  lem-relative-normalization-finite-stage: mathematical-premise
  lem-integral-closure-commutes-etale-base-change: mathematical-premise
  thm-integral-closure-finite-finite-type-domain-over-field: mathematical-premise
  thm-polynomial-algebras-over-fields-have-finite-integral-closures: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Edidin, Hassett, Kresch and Vistoli, Brauer groups and quotient stacks
      url: https://arxiv.org/pdf/math/9905049
      locator: "Theorem 2.7; §4.1, PDF pp.12–13. The proof below specializes the construction to separated DM stacks, so an étale scheme atlas replaces the general quasi-finite-flat-cover input."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Choice. If $\mathcal X$ is a separated Deligne–Mumford stack of finite type over a field $k$, there is a finite surjective representable morphism $S\to\mathcal X$ with $S$ a finite-type scheme over $k$. For any two schemes over $\mathcal X$, their fiber product is a scheme whenever its induced map to their product over $k$ is finite; in particular $S\times_{\mathcal X}S$ is a scheme. The same finite-cover existence holds for every separated finite-type DM base change used in the subsequent Chow construction.

No biconditional characterization, uniqueness or optimal-degree assertion is made.

## Facts & Assumptions

**Given:** Full AC, a field $k$ and the stack $\mathcal X$ of the Statement.

[F1] A DM stack admits a surjective étale atlas, and its groupoid has the usual identity, composition and cocycle maps. [[def-gts-classical-dm-stack-cotangent-complex]]

[F2] For a separated quasi-finite scheme map over a qcqs scheme, the integral closure of the base in the structure-sheaf pushforward gives an open immersion into its relative spectrum. This construction commutes with étale base change. [[lem-relative-normalization-finite-stage]], [[lem-integral-closure-commutes-etale-base-change]]

[F3] A finite-type domain over a field has finite normalization; more generally its integral closure in any finite extension of its fraction field is finite. For the latter assertion choose Noether normalization $R\subset A$ with $R$ polynomial and $A$ finite over $R$; the finite extension is also finite over $\operatorname{Frac}R$, and transitivity of integrality identifies the two closures. The polynomial closure theorem makes this closure finite over $R$, hence over $A$. [[cor-noether-normalisation-module-finiteness]] [[thm-integral-closure-finite-finite-type-domain-over-field]], [[thm-polynomial-algebras-over-fields-have-finite-integral-closures]]

## Proof

**Given:** [F1]–[F3]. All relative integral closures in this proof are specified by their algebra on an étale scheme atlas and its canonical descent isomorphisms.

1.1 If $\mathcal X=\varnothing$, take $S=\varnothing$; the empty morphism is representable, finite and surjective onto the empty target. All fiber products are empty, so every assertion holds. Henceforth assume the stack nonempty. A finite representable morphism means one whose pullback along every scheme map to its target is a finite scheme morphism; surjectivity is surjectivity on geometric points. Separatedness here means properness of the diagonal. [given, construct]

1.2 The diagonal of $\mathcal X$ is proper, unramified and quasi-finite, hence finite: on scheme charts this is the proper-quasi-finite criterion, equivalently use [F2] to factor a proper quasi-finite scheme map as an open immersion into a finite scheme over the base. That open immersion is proper, because its source is proper over the base and the finite target is separated over the base; its image is therefore open and closed, so the source is finite over the base. An algebraic space finite over a scheme is a scheme, since its finite algebra descends from affine étale charts and its relative spectrum represents it. Therefore $U\times_{\mathcal X}V$ is a scheme finite over $U\times_kV$ for schemes $U,V$ over $\mathcal X$. In particular the atlas relation is a scheme. [F1, F2, construct, algebra]

1.3 Here is the descent convention used to construct finite stacks below. On an atlas $T\to\mathcal X$ that is a finite disjoint union of affine étale charts, a finite algebra $C$ with an algebra isomorphism between its two pullbacks to $T\times_{\mathcal X}T$ satisfying the cocycle condition determines $\operatorname{Spec}_{\mathcal X}C$: its pullback to $T$ is $\operatorname{Spec}_TC$, and the pulled-back groupoid maps and cocycle glue it as a stack. Every base change to a scheme is the affine scheme obtained by ordinary faithfully flat descent of this finite algebra; thus its map to $\mathcal X$ is representable and finite. Descent here is effective for the explicit reason that sections are the equalizer of the two module pullbacks, multiplication and unit descend as module maps, and faithful flatness makes the equalizer algebra recover the original algebra after pullback. Finiteness and an isomorphism of such algebras are detected faithfully flat locally. [F1, construct, algebra]

2.1 Replace $\mathcal X$ by the disjoint union of the normalizations of its reduced irreducible components. This is a finite surjective representable map: reduce on an atlas, normalize its finitely many irreducible components using [F3], and use [F2] to identify their pullbacks along the two étale groupoid maps. The cocycle follows from the identical integral-closure operation; step 1.3 glues the finite algebras. It suffices to construct a finite scheme cover of a normal integral stack. Its étale atlas can be chosen normal; its irreducible components are open and closed, so choose one integral affine component $U$ mapping onto a nonempty open substack and hence densely into $\mathcal X$. [F1, F2, F3, step 1.3, construct]

3.1 Compactify $U\to\mathcal X$ canonically as follows. On an affine normal étale chart $T\to\mathcal X$, the source $U_T$ is a normal scheme by step 1.2 and étaleness. Its map to $T$ is separated and quasi-finite. Take $C_T$ to be the integral closure of $\mathcal O_T$ in $(U_T\to T)_*\mathcal O_{U_T}$. On each normal connected component of $T$, this is the integral closure in a finite product of finite extensions of its function field: $U_T$ is normal, so elements of the generic product integral over $\mathcal O_T$ are regular on $U_T$, and the converse is precisely the definition of $C_T$. Thus $C_T$ is finite by [F3]. The same construction on any overlap is its pullback by [F2]. For clarity the required flat base-change formula for degree-zero pushforward follows by covering the quasi-compact separated $U_T$ by finitely many affine opens: global functions are a kernel between finite products of chart and overlap section modules, and flat tensor product preserves this kernel. Thus the closures really have canonical descent maps, rather than merely isomorphic completions. Step 1.3 gives a finite representable $\overline U\to\mathcal X$. The scheme open immersions of [F2] glue to an open immersion $U\hookrightarrow\overline U$. Take the normal component containing $U$; it is finite, has dense image, and is surjective onto $\mathcal X$. It has a dense open scheme and hence generic residual stack $\operatorname{Spec}K$ for a field $K$. Composing a finite scheme cover of this component with its map to $\mathcal X$ will finish. [F2, F3, step 1.2, step 1.3, step 2.1, construct]

4.1 We may now assume a normal integral stack $\mathcal F$ has generic residual stack $\operatorname{Spec}K$. Work on an open image of a normal integral affine étale atlas component $V\to\mathcal F$, so that this map is surjective. Its generic extension $L=k(V)/K$ is finite separable, because the map is étale and quasi-finite. Choose a finite Galois extension $L'/K$ containing $L$, by taking the splitting field of the separable minimal polynomials of finitely many generators. Let $G=\operatorname{Gal}(L'/K)$. Normalize $\mathcal F$ in the generic cover $\operatorname{Spec}L'$: on an étale normal chart its generic algebra is the finite étale algebra obtained by tensoring this generic cover, and its normalization is finite by [F3]. The canonical identifications of [F2] and step 1.3 give a finite normal representable stack $\mathcal F'\to\mathcal F$, with $G$-action. The normalization $V'$ of $V$ in $L'$ is a normal scheme finite surjective over $V$. It is the component of $\mathcal F'\times_{\mathcal F}V$ corresponding to the fixed embedding $L\hookrightarrow L'$; the other components correspond to the other embeddings. Components of a normal scheme are disjoint open and closed, so $V'\to\mathcal F'$ is étale and separated, and is generically an isomorphism. Its relative integral closure is $\mathcal O_{\mathcal F'}$: this can be checked on normal scheme charts, where an element of the unchanged function field integral over a normal ring lies in that ring. Applying [F2] on those charts proves that $V'\hookrightarrow\mathcal F'$ is an open immersion. [F1, F2, F3, step 1.3, step 3.1, construct, algebra]

5.1 The $G$-translates of this open scheme cover $\mathcal F'$. The algebra fact used here is that, for a normal domain $A$ and the normalization $D$ in a finite Galois generic algebra with invariant generic algebra $\operatorname{Frac}A$, the primes of $D$ above a fixed prime of $A$ form a single $G$-orbit. Indeed $D^G=A$ by normality. If primes $P,Q$ above the same base prime were not conjugate, incomparability of primes in an integral extension and finite prime avoidance choose $a\in P$ outside all conjugates of $Q$. Then $\prod_{g\in G}g(a)$ belongs to $A\cap P$ and avoids $Q$, a contradiction. The same argument after a strict henselian local base change gives transitivity on geometric fiber points; normalization commutes with that filtered étale base change by [F2], and the finite equations all occur at a finite stage. For each point of $\mathcal F$, the finite surjection $V'\to V$ and the surjection $V\to\mathcal F$ supply at least one point of the chosen open $V'$ above it. Fiber transitivity makes every geometric point of $\mathcal F'$ lie in some $gV'$. These finitely many open schemes cover $\mathcal F'$, so it is a scheme: the open immersion charts have trivial inertia and glue by their ordinary scheme overlaps. Hence each open substack of $\mathcal F$ chosen above has a finite scheme cover. [F2, F3, step 4.1, construct, algebra]

6.1 Finish the global gluing for the normal integral $\mathcal F$. Choose finitely many opens $\mathcal F_i$ carrying finite normal integral scheme covers $Z_i\to\mathcal F_i$ as in step 5.1. Compactify each $Z_i\to\mathcal F$ by the relative integral-closure construction of step 3.1, obtaining a finite representable normal stack $\overline Z_i\to\mathcal F$ containing $Z_i$ openly. Its restriction to $\mathcal F_i$ is exactly $Z_i$: there the map was already finite and the normal integral-closure algebra is its entire algebra. Each $\overline Z_i\to\mathcal F$ is surjective, since its closed image contains the dense open $\mathcal F_i$. Form $Z=\overline Z_1\times_{\mathcal F}\cdots\times_{\mathcal F}\overline Z_m$. It is finite and surjective over $\mathcal F$. Over $\mathcal F_i$, its projection to the scheme $Z_i$ is representable finite, so its restriction is a scheme. These open restrictions cover $Z$, making $Z$ a scheme. Composing with the finite maps in steps 2.1–3.1 gives the required cover of the original $\mathcal X$. Step 1.2 proves the fiber-product assertion. Every construction was for an arbitrary separated finite-type DM stack over $k$, so it applies individually after any base change that remains in this category. [F1, F2, F3, step 1.2, step 2.1, step 3.1, step 5.1, construct, algebra] ∎

## Source scope

The published mathematical suppliers in this dependency list are existing read-only published files already present in this isolated physics snapshot and recorded in its math-imports manifest. Their imported bytes are authenticated against the mathematics-import manifest; no imported source is modified or recursively audited here. This proof reconstructs the DM case; EHKV is source attribution, not an assumed stack finite-cover theorem.

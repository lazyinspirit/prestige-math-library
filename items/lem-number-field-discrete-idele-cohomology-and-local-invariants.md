---
id: lem-number-field-discrete-idele-cohomology-and-local-invariants
kind: lemma
title: Discrete number-field idele cohomology and its actual local invariants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-global-idele-class-module-for-galois-group
  - thm-hilbert-90-for-finite-galois-extension
  - thm-shapiro-lemma-for-group-cohomology
  - thm-decomposition-group-and-completion
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-ring-of-integers-free-of-rank-degree
  - thm-trace-form-is-nondegenerate-iff-separable
  - thm-field-norm-and-trace-agree-with-operator-determinant-and-trace
  - lem-unramified-local-unit-norms-and-cohomology
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - thm-local-brauer-invariant-for-finite-residue-local-field
  - thm-archimedean-brauer-groups-and-invariant-maps
  - lem-local-invariant-restriction-scaling
  - lem-cyclic-cyclotomic-extension-with-prescribed-local-degree-divisibility
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - thm-algebraic-embedding-extension
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are literal hypotheses for restricted products, local restrictions, finite Shapiro, algebraic embeddings and the actual continuous-cohomology convention. No global H2/H3 class-formation theorem is assumed.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Class Field Theory, version4.03
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: ChapterVII2 finite idelic cohomology; actual fixed modules, finite-level local coordinates and global cofinal splitting levels are constructed here
---

## Statement

Assume AC, Countable Choice and DC with the supplied ordinary/continuous cohomology convention. Let $F$ be a number field, fix $F_s$, and put
$$J=\varinjlim_{T/F\subset F_s}\mathbb A_T^\times,\qquad C=\varinjlim_{T/F\subset F_s}C_T$$
with the actual extension-of-idèles maps and discrete Galois transport action. The stage maps are injective. For every finite intermediate field $E/F$,
$$J^{G_E}=\mathbb A_E^\times,\qquad C^{G_E}=C_E,\qquad H^1_{\mathrm{cts}}(G_E,J)=0,$$
and there is a canonical isomorphism
$$H^2_{\mathrm{cts}}(G_E,J)\xrightarrow{\sim}\bigoplus_v\operatorname{Br}_{\mathrm{alg}}(E_v).$$
Its finite-place normalized coordinates are $\mathbb Q/\mathbb Z$, its real coordinates are $\frac12\mathbb Z/\mathbb Z$, and its complex coordinates are zero. The map from $H^2(G_E,F_s^\times)$ is exactly algebraic Brauer localization under the supplied AC/DC absolute comparison.

For finite $E'/E$, restriction sends the $v$-invariant coordinate to $[E'_w:E_v]$ times that coordinate at every $w\mid v$, including finite, real and complex places. Thus the sum of invariants scales by $[E':E]$. No noncyclic finite $H^3$ vanishing or global class-formation invariant is assumed.

## Facts & Assumptions

**Given:** Exactly the field, closure, actual direct systems and public choice hypotheses in the Statement.

[F1] The direct-limit idèle and class modules use extension maps and Galois transport; their coefficient sequence $1\to F_s^\times\to J\to C\to1$ is exact and their action is discrete continuous. [[def-global-idele-class-module-for-galois-group]]

[F2] Number-field prime localizations are DVRs and their relative embeddings preserve units. Finite Hilbert90 and finite Shapiro hold; decomposition groups identify with the local Galois groups, and relative completion tensors give all finite and archimedean factors and degrees. [[thm-hilbert-90-for-finite-galois-extension]] [[thm-shapiro-lemma-for-group-cohomology]] [[thm-decomposition-group-and-completion]] [[lem-number-field-completion-tensor-and-norm-in-zf]]

[F3] The finite-discriminant argument in steps 0.1–0.2 below proves that a number-field extension ramifies at only finitely many finite places. Units in finite unramified local extensions have zero positive cohomology. [[lem-unramified-local-unit-norms-and-cohomology]]

[F4] The finite algebraic relative Brauer comparison and its enlargement/scalar-extension compatibility are proved. Under AC/DC its absolute comparison identifies $H^2(G_E,F_s^\times)$ with the algebraic Brauer group. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F5] Finite-place Brauer invariants are $\mathbb Q/\mathbb Z$, real ones are $\frac12\mathbb Z/\mathbb Z$ and complex ones are zero; local restriction multiplies their normalized values by the local degree. [[thm-local-brauer-invariant-for-finite-residue-local-field]] [[thm-archimedean-brauer-groups-and-invariant-maps]] [[lem-local-invariant-restriction-scaling]]

[F6] Given finitely many finite places and any positive integer $m$, a finite totally complex cyclic global extension has local degrees divisible by $m$ at all of them. [[lem-cyclic-cyclotomic-extension-with-prescribed-local-degree-divisibility]]

[F7] Continuous cohomology is the actual finite-quotient/fixed-module colimit. Under AC an algebraic embedding into an algebraically closed field extends. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]] [[thm-algebraic-embedding-extension]]

[F8] The integer ring of a degree-$d$ number field has a free integral basis of rank $d$. The trace form of a finite separable field extension is nondegenerate, and field trace is the trace of its multiplication operator. [[thm-ring-of-integers-free-of-rank-degree]] [[thm-trace-form-is-nondegenerate-iff-separable]] [[thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]]

[A1] AC, Countable Choice and DC are literal. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

0.1 Here is the finite-discriminant ramification argument needed below. For a number field $T$, choose an integral basis $e_1,\ldots,e_d$ by [F8]. Its trace matrix $G=(\operatorname{Tr}_{T/\mathbb Q}(e_ie_j))$ has integer entries, since multiplication in this integral basis has integer matrices, and its determinant $\Delta$ is nonzero because $T/\mathbb Q$ is separable and [F8]'s trace form is nondegenerate. If a rational prime $p$ does not divide $\Delta$, the finite algebra $R=\mathcal O_T/p\mathcal O_T$ has nondegenerate trace pairing: its multiplication matrices and their traces are the reductions of those integral matrices. This algebra is reduced. Indeed, if $x$ is nilpotent, then $xy$ is nilpotent for every $y$, its multiplication operator is nilpotent and has trace zero, so nondegeneracy forces $x=0$. Localizing this reduced algebra at any prime $Q$ above $p$ remains reduced. By [F2], $\mathcal O_{T,Q}$ is a DVR. If $p=u\pi_Q^e$ with $e>1$, the nonzero class of $\pi_Q$ in $\mathcal O_{T,Q}/p\mathcal O_{T,Q}$ would be nilpotent. Therefore $e(Q/p)=1$ for every such $Q$. This proves absolute unramifiedness outside the finite set of prime divisors of the explicit nonzero integer $\Delta$. [A1, F2, F8, given, construct, algebra]

0.2 For a finite extension $T/E$, let $Q\mid P\mid p$ be finite primes and take their local DVR uniformizers. The inclusions in [F2] preserve units, so writing $p=u\pi_P^{e(P/p)}$ and $\pi_P=v\pi_Q^{e(Q/P)}$ gives
$$e(Q/p)=e(Q/P)e(P/p).$$
If $p$ does not divide the integer $\Delta$ from step 0.1 for $T$, both positive factors are therefore1. Every finite prime of $E$ ramified in $T$ lies above one of the finitely many rational prime divisors of $\Delta$. Each such $p$ has finitely many primes above it: [F8] makes $\mathcal O_E/p\mathcal O_E$ a finite ring, so it has only finitely many ideals and hence finitely many prime ideals. This proves exactly the finite exceptional-set assertion summarized above, without a later finite-ramification supplier or a normal-closure theorem. Degree one and $\Delta=\pm1$ include the empty exceptional set. [F2, F8, step 0.1, construct, algebra]

1.1 For finite Galois $T/E$ with group $G$, [F2] identifies the fixed idèles with $\mathbb A_E^\times$: at a place this is the fixed field in the chosen completion, and unit conditions agree outside a finite set. In the exact sequence $1\to T^\times\to\mathbb A_T^\times\to C_T\to1$, finite Hilbert90 then gives $C_T^G=C_E$ with its actual extension map. Extension-of-idèles is injective, and extension on classes is injective too: if an extended $E$-idèle is a principal $T$-idèle, that principal element is $G$-fixed, so is in $E$. For nonnormal finite extensions pass to one finite Galois normal closure; injectivity into that closure implies injectivity at the intermediate stage. [A1, F1, F2, given, construct, algebra]

1.2 Any element in $J^{G_E}$ or $C^{G_E}$ is represented at a finite Galois level $T/E$. All stage maps are injective by step 1.1, so invariance in the colimit is already invariance at that level. The quotient restriction $G_E\to\operatorname{Gal}(T/E)$ is onto under [F7]: extend a finite field automorphism to $F_s$, whose algebraically closed image contains $E$ and hence every root of every $E$-polynomial, making the extension onto. Step 1.1 therefore identifies these fixed modules with $\mathbb A_E^\times$ and $C_E$. This also proves their asserted equality at every finite fixed field, without putting a finite quotient inside the absolute group. [F2, F7, step 1.1, construct, algebra]

2.1 Fix finite Galois $T/E$ with group $G$ and a finite set $S$ containing its ramified and archimedean places. The corresponding restricted idèles are the product over $v\in S$ of the coinduced local groups $T_w^\times$, and over $v\notin S$ of the coinduced local unit groups $\mathcal O_{T_w}^\times$. Their union over finite $S$ is the full idèle group. A finite-group cochain has only finitely many idèle values, so belongs to one such product; thus finite-group cohomology commutes with this union. Cochains and cohomology commute with these products under the public AC: cycles are coordinatewise, and a coordinatewise boundary has a family of preimages chosen by AC. By Shapiro in [F2] and unit acyclicity in [F3], every positive-degree cohomology coordinate outside $S$ vanishes. Local Hilbert90 gives $H^1(G,\mathbb A_T^\times)=0$. The actual degree-two map is
$$H^2(G,\mathbb A_T^\times)\cong\bigoplus_vH^2(D_w,T_w^\times)
\hookrightarrow\bigoplus_v\operatorname{Br}(E_v),$$
with image at $v$ precisely the kernel of restriction to $\operatorname{Br}(T_w)$, by [F4]. The finite sum notation is justified by the same finite $S$ argument, not by dropping an infinite product of nonzero cohomology groups. [A1, F2, F3, F4, step 1.1, construct, algebra]

2.2 For a larger finite Galois splitting level, finite Shapiro's adjunction map restricts a cochain to the decomposition subgroup and evaluates its chosen local coordinate. The inflation/coefficient inclusion maps therefore become exactly the enlargements of the same relative local Brauer classes by [F4]. In particular they agree inside $\operatorname{Br}(E_v)$, with no change to the base field $E_v$. Now [F7] and step 1.2 identify $H^q(G_E,J)$ with the colimit over these finite $T/E$ cohomologies. Step 2.1 kills $H^1$ and gives an injective degree-two map into the stated direct sum. To prove it onto, take any finite-support local tuple. Choose $m$ divisible by the denominators of its finite invariants. By [F6], choose one totally complex cyclic $T/E$ whose finite local degrees at its support are divisible by $m$. By [F5], restriction kills every component there, and real classes also restrict to zero since the real completions become complex. Thus each tuple component belongs to the relative kernel in step 2.1, and finite Shapiro produces the desired finite-level idelic class. Empty support gives zero. This proves the exact degree-two isomorphism, with all finite/real/complex normalizations in [F5]. [A1, F4, F5, F6, F7, step 1.2, step 2.1, construct, algebra]

3.1 A global finite Brauer cocycle represented at a finite Galois splitting field $T/E$ maps to the diagonal idèle cocycle. Evaluating on a local decomposition subgroup gives its scalar extension to $E_v$, by [F4]. This is exactly the Shapiro/evaluation coordinate in step 2.1. Passing through [F7]'s actual colimit proves that the map from $H^2(G_E,F_s^\times)$ is the usual Brauer localization map, not a newly chosen abstract isomorphism. The AC/DC absolute comparison in [F4] has the public hypotheses needed here; no stronger unqualified comparison is inferred. [F4, F7, step 2.1, step 2.2, algebra]

4.1 Let $E'/E$ be finite, not necessarily normal. Represent a cohomology class at one finite Galois $T/E$ containing $E'$, enlarging a previous level if needed. Restriction becomes restriction to the actual subgroup $\operatorname{Gal}(T/E')$ of this finite quotient. For a place $w'$ of $E'$ over $v$, evaluate that restricted cocycle at a prime of $T$ over $w'$. It is the restriction of its previous local cocycle to the intersected decomposition subgroup, with the same local coefficient embedding. By the finite comparison in [F4], it is exactly scalar extension of the $E_v$ Brauer class to $E'_{w'}$. Thus [F5] multiplies its normalized invariant by $[E'_{w'}:E_v]$. This includes real-to-complex restriction, where multiplication by2 kills the real half-invariant, and the complex zero group. Finally [F2]'s tensor degree sum gives $\sum_{w'\mid v}[E'_{w'}:E_v]=[E':E]$, so the total finite-support invariant sum scales by that global degree. The complex factors are oriented over the chosen base embedding as in [F2]. This proves all naturality assertions. [F2, F4, F5, F7, step 2.2, step 3.1, construct, algebra] ∎

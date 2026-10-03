---
id: thm-purity-for-finite-covers-of-regular-local-rings
kind: theorem
title: "Finite étale covers extend across the closed point of a regular local ring"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - lem-formal-full-faithfulness-on-regular-punctured-spectrum
  - lem-punctured-hartogs-and-flat-base-change-for-finite-projectives
  - lem-complete-local-finite-etale-algebra-lifting
  - thm-finite-etale-algebras-invariant-under-nilpotent-thickening
  - thm-effective-fpqc-descent-of-finite-etale-covers
  - lem-discriminant-detects-etaleness-of-finite-free-algebra
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - lem-integral-closure-commutes-etale-base-change
  - thm-regular-local-rings-are-normal
  - thm-serre-normality-criterion
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - lem-regular-local-quotient-by-parameter-is-regular
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-auslander-buchsbaum-formula
  - cor-height-preserved-under-going-down-integral-extensions
  - thm-finiteness-of-associated-primes
  - thm-zero-divisors-on-a-module
  - thm-depth-zero-associated-prime-criterion
  - lem-depth-quotient-by-regular-element
  - lem-finite-prime-avoidance
  - thm-flatness-of-noetherian-completion
  - thm-completion-preserves-regular-local-rings
  - lem-flat-local-map-faithfully-flat
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 2, Exposé X §§3.5–3.9 and complete proof of Theorem 3.4(i)"
      url: https://arxiv.org/pdf/math/0511279
    - title: "SGA 1, Exposé X §3, purity and its dimension-two discriminant proof"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups §§19–21, especially Lemmas 20.7 and 21.3–21.4"
      url: https://stacks.math.columbia.edu/download/pione.pdf
    - title: "Stacks Project, Algebraic and Formal Geometry §15, Lemmas 15.1 and 15.5; regular-case argument expanded here"
      url: https://stacks.math.columbia.edu/download/algebraization.pdf
---

## Statement

Assume AC. Let $(A,\mathfrak m)$ be a Noetherian regular local ring of dimension $d\ge2$, put $U=\operatorname{Spec}A\setminus\{\mathfrak m\}$, and let $V\to U$ be finite étale. Then $V$ is the restriction of a finite étale cover of $\operatorname{Spec}A$, unique up to unique compatible isomorphism. No equicharacteristic, excellence or dimension bound is imposed.

## Facts & Assumptions

**Given:** AC, the regular local ring $A$, punctured spectrum $U$ and cover $V$.

[F1] Regular local rings are normal domains and Cohen–Macaulay; localizations remain regular, their global dimension equals their dimension, and quotient by a parameter is regular of one smaller dimension ([[thm-regular-local-rings-are-normal]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[thm-localisation-and-polynomial-extension-of-regular-rings]], [[lem-regular-local-quotient-by-parameter-is-regular]]). A finite module with finite projective dimension and full depth over a local ring is free by Auslander–Buchsbaum ([[thm-auslander-buchsbaum-formula]]).

[F2] A normal Noetherian ring is a finite product of normal domains and satisfies $S_2$. A finite separable integral closure over a normal Noetherian domain is finite; integral closure commutes with étale base change ([[thm-serre-normality-criterion]], [[thm-finite-integral-closure-in-a-finite-separable-extension]], [[lem-integral-closure-commutes-etale-base-change]]). Heights are preserved in an integral domain extension over a normal domain ([[cor-height-preserved-under-going-down-integral-extensions]]).

[F3] Associated primes of finite modules are finite and detect zero divisors. Being associated locally is equivalent to depth zero; quotient by a regular element lowers depth by one; finite prime avoidance selects an element outside finitely many proper primes ([[thm-finiteness-of-associated-primes]], [[thm-zero-divisors-on-a-module]], [[thm-depth-zero-associated-prime-criterion]], [[lem-depth-quotient-by-regular-element]], [[lem-finite-prime-avoidance]]).

[F4] The closed-point extension is detected by the trace discriminant once its algebra is free ([[lem-discriminant-detects-etaleness-of-finite-free-algebra]]). Finite étale algebras lift through nilpotent quotients and across complete local reduction ([[thm-finite-etale-algebras-invariant-under-nilpotent-thickening]], [[lem-complete-local-finite-etale-algebra-lifting]]). Vector-bundle maps on a complete regular punctured spectrum of dimension at least three are recovered from all parameter thickenings ([[lem-formal-full-faithfulness-on-regular-punctured-spectrum]]).

[F5] Punctured Hartogs extends maps between finite projectives after any flat base change ([[lem-punctured-hartogs-and-flat-base-change-for-finite-projectives]]). The maximal-adic completion is flat and regular, and is faithfully flat since the map is local ([[thm-flatness-of-noetherian-completion]], [[thm-completion-preserves-regular-local-rings]], [[lem-flat-local-map-faithfully-flat]]). Finite étale covers descend along that cover ([[thm-effective-fpqc-descent-of-finite-etale-covers]]). AC is inherited through [F1]–[F5] ([[def-axiom-of-choice]]).

## Proof

1.1 The normalization construction provides a finite normal $A$-algebra $B$ whose restriction is $V$. Indeed $U$ is integral and normal by [F1]. The finite étale algebra on each principal open is normal by [F2]: applying integral-closure compatibility to the inclusion of its normal base ring into its fraction field identifies that algebra with the integral closure in its generic, separable algebra, a product of fields. Thus $V$ is a finite disjoint union of integral normal schemes, and its generic fibre is a finite product of finite separable extensions of $\operatorname{Frac}A$. Normalize $A$ in these fields; [F2] makes their product $B$ finite. On every principal open of $U$ it agrees with the original finite normal algebra by uniqueness of integral closure, so it restricts to $V$. Empty covers use $B=0$. [F1, F2, construct]

2.1 Suppose $d=2$ and $B\ne0$. Choose $0\ne x\in\mathfrak m$; it acts injectively on each normal domain factor of $B$. If $\mathfrak q$ is associated to $B/xB$, then [F3] makes $(B/xB)_{\mathfrak q}$ have depth zero, so $B_{\mathfrak q}$ has depth one. By $S_2$ in [F2] and $x\ne0$, this implies $\operatorname{ht}\mathfrak q=1$. Its contraction to $A$ also has height one by [F2]. By prime avoidance in [F3] choose $y\in\mathfrak m$ outside these finitely many contractions. Then $x,y$ is a $B$-regular sequence from $A$, giving $\operatorname{depth}_A B\ge2$. Its projective dimension is finite by the regular-ring global-dimension assertion in [F1], so Auslander–Buchsbaum makes $B$ free over $A$. It is generically étale and étale on $U$, so [F4] makes it étale everywhere. This proves existence when $d=2$. [F1, F2, F3, F4, step 1.1, choose]

3.1 Induct on $d$, and first suppose $d\ge3$ and $A$ is complete local. Choose a parameter $f\in\mathfrak m\setminus\mathfrak m^2$. The cover $V_1$ on the punctured spectrum of $A/fA$ extends, by the induction hypothesis and [F1], to a finite étale $A/fA$-algebra $D_1$. The ring $A$ is also $f$-adically complete, as established in the proof of [F4]'s formal-full-faithfulness lemma. The affine complete lifting in [F4] gives a finite étale $A$-algebra $D$. On every parameter thickening $U_n$, the restrictions of $V$ and $\operatorname{Spec}D$ have the same reduction on $U_1$; the nilpotent equivalence in [F4], applied on affine opens, gives a unique compatible isomorphism between them. Those isomorphisms glue by uniqueness. The corresponding vector bundles of finite algebra functions on $U$ are isomorphic by formal full faithfulness in [F4]. The inverse maps and their compatibility with products and units also extend by that same lemma. Thus this is an isomorphism of covers on all of $U$, and $\operatorname{Spec}D$ is the required extension. [F1, F4, step 2.1, construct]

4.1 For an arbitrary regular local $A$ of dimension $d\ge3$, let $C=\widehat A$. By [F5], $C$ is regular, complete and faithfully flat. The pullback of $U$ is the punctured spectrum of $C$, because $\mathfrak mC$ is its maximal ideal. Step 3.1 extends the pullback of $V$ to a finite étale $C$-algebra $D'$. Over $C\otimes_A C$, its two pullbacks have a canonical isomorphism on $U_{C\otimes_A C}$, coming from the original cover $V$. Both are finite projective over this flat $A$-algebra. By [F5]'s Hartogs assertion, the isomorphism and inverse extend uniquely to the whole affine spectrum. The cocycle identity holds because it holds over $U_{C\otimes_A C\otimes_A C}$ and the same Hartogs restriction is injective there. Thus $D'$ has an fpqc datum, which [F5] descends to a finite étale algebra over $A$. Its restriction to $U$ is $V$: the upstairs isomorphism is compatible with that datum, so it descends on each affine open of $U$. This proves existence for all regular local rings in the induction. [F5, step 3.1, construct]

5.1 Finally two finite étale extensions have finite projective underlying modules, and their algebra maps on $U$ extend uniquely by the Hartogs assertion in [F5]. The inverse and the algebra identities extend as well, proving uniqueness up to unique compatible isomorphism and full faithfulness. The base case and induction prove the theorem in every dimension at least two. The only choices and compactness assumptions used are those recorded in [F1]–[F5]; AC is retained. [F1, F2, F3, F4, F5, step 2.1, step 4.1] ∎

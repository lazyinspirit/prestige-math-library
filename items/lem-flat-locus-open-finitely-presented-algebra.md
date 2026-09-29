---
id: lem-flat-locus-open-finitely-presented-algebra
kind: lemma
title: "The flat locus of a finitely presented algebra is open"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-flatness-criteria-by-injections-and-ideals
  - lem-base-flat-syzygies-and-fibrewise-resolution-exactness
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - lem-noetherian-approximation-fp-algebra-module-system
  - lem-eventual-flatness-noetherian-local-approximation
  - lem-free-fibre-flat-module-free-noetherian-target
  - lem-fibrewise-exact-flat-complex-lifts-noetherian-target
  - lem-fibrewise-exact-free-complex-locus-open-cm-flat-family
  - thm-support-and-annihilator-of-a-finite-module
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Commutative Algebra, Sections 10.99, 10.127-10.130 and Morphisms of Schemes 29.26"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.26 (flat morphisms)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "The Stacks Project, Algebra, Theorem 10.129.4 (tag 00RC), flat locus of a finitely presented module"
      url: https://stacks.math.columbia.edu/tag/00RC
    - title: "The Stacks Project, Algebra, Lemma 10.129.3 (tag 00RB), openness of fibrewise exactness"
      url: https://stacks.math.columbia.edu/tag/00RB
---

## Statement

Assume the Axiom of Choice (AC). Let $R\to B$ be a finitely presented ring
map ([[def-finitely-presented-module-and-algebra]]). Then the set of primes
$\mathfrak q\in\operatorname{Spec}B$ at which $B_{\mathfrak q}$ is flat over $R$
is open in $\operatorname{Spec}B$. The same statement holds with a finitely
presented $B$-module $M$ in place of $B$.

## Facts & Assumptions
**Given:** The finitely presented ring map and module in the Statement, and a prime at which the module is flat over the base.

[F1] Localization and base change preserve flatness ([[thm-flatness-criteria-by-injections-and-ideals]]).

[F2] A finitely presented algebra-module pair has compatible local Noetherian approximations. Flatness of the localized limit module descends to a sufficiently late Noetherian stage ([[lem-noetherian-approximation-fp-algebra-module-system]], [[lem-eventual-flatness-noetherian-local-approximation]]).

[F3] The polynomial algebra in $n$ variables over a field is regular of dimension $n$, and its prime localizations have global dimension at most $n$. An $n$th syzygy over such a ring is projective, hence free over its local ring ([[thm-localisation-and-polynomial-extension-of-regular-rings]], [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]], [[thm-auslander-buchsbaum-serre-regularity-criterion]], [[thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]]).

[F4] For a local map of Noetherian local rings, a nonzero finite module that is flat over the base and free on the closed fibre is free over the target ([[lem-free-fibre-flat-module-free-noetherian-target]]).

[F5] For a flat finite-type polynomial family with Cohen–Macaulay equidimensional fibres of fixed dimension, the locus where a finite free complex is exact on the local fibre in positive degrees is open ([[lem-fibrewise-exact-free-complex-locus-open-cm-flat-family]]).

[F6] A finite complex of finite target modules flat over a Noetherian local base, whose reduction is exact in positive degrees, is exact there with base-flat final cokernel ([[lem-fibrewise-exact-flat-complex-lifts-noetherian-target]]).

[F7] The support of a finite module is closed. A finite module vanishing after localization at a chosen prime vanishes on some principal neighbourhood of that prime ([[thm-support-and-annihilator-of-a-finite-module]]).

[F8] The Axiom of Choice is declared ([[def-axiom-of-choice]]).

[F9] Over an $R$-flat algebra, the syzygies of an $R$-flat module in a free partial resolution remain $R$-flat, and the resolution remains exact after any base change on $R$ ([[lem-base-flat-syzygies-and-fibrewise-resolution-exactness]]).



## Proof

**Proof technique:** descend to a Noetherian stage, free the top syzygy over the polynomial chart, and spread exactness over all nearby fibres.

1.1 Fix a prime $\mathfrak q\subseteq B$ at which $M_{\mathfrak q}$ is $R$-flat, and put $\mathfrak p=\mathfrak q\cap R$. If $M_{\mathfrak q}=0$, finite presentation and [F7] give $g\notin\mathfrak q$ with $M_g=0$, hence $M_g$ is flat. Otherwise use [F2] to express the finitely presented pair $(R\to B,M)$ at these contracted primes as a directed Noetherian local approximation. Eventual flatness in [F2] makes the module flat over the base at a sufficiently late Noetherian stage. It therefore suffices to prove the neighbourhood assertion there: a principal neighbourhood at that stage pulls back to one at $\mathfrak q$, and its flat module remains flat after base change and localization. [F1, F2, F7]

1.2 Assume henceforth that $R$ is Noetherian and that $M_{\mathfrak q}$ is $R_{\mathfrak p}$-flat. Present $B$ as a quotient of $P=R[T_1,\ldots,T_n]$ and regard $M$ as a finite $P$-module; its support lies in the closed subscheme $\operatorname{Spec}B$ of $\operatorname{Spec}P$. If the chosen presentation has $n=0$, adjoin a dummy variable $T_1$ and the relation $T_1=0$, so $n\ge1$. Let $\mathfrak Q$ be the contraction of $\mathfrak q$ to $P$. Since $P$ is Noetherian, construct a free resolution $\cdots\to F_1\to F_0\to M\to0$ with each $F_j$ finite free over $P$; only its first $n$ terms will be used. Set $K_n=\ker(F_{n-1}\to F_{n-2})$, with $F_{-1}=M$ when $n=1$. Then $K_n$ is a finite $P$-module. [F1, F2]

2.1 At $\mathfrak Q$, the map $R_{\mathfrak p}\to P_{\mathfrak Q}$ is flat and $M_{\mathfrak q}$ is $R_{\mathfrak p}$-flat. Apply [F9] to the truncated free resolution: $(K_n)_{\mathfrak Q}$ is $R_{\mathfrak p}$-flat, and tensoring the sequence $0\to(K_n)_{\mathfrak Q}\to(F_{n-1})_{\mathfrak Q}\to\cdots\to(F_0)_{\mathfrak Q}\to M_{\mathfrak q}\to0$ with $\kappa(\mathfrak p)$ preserves exactness. The closed-fibre ring $P_{\mathfrak Q}/\mathfrak pP_{\mathfrak Q}$ is a localization of $\kappa(\mathfrak p)[T_1,\ldots,T_n]$, so [F3] gives global dimension at most $n$. The displayed reduced resolution makes $(K_n)_{\mathfrak Q}/\mathfrak p(K_n)_{\mathfrak Q}$ a finite projective, hence free, module over this local fibre ring. If $(K_n)_{\mathfrak Q}=0$ it is already free of rank zero; otherwise [F4] makes it free over $P_{\mathfrak Q}$. [F3, F4, F9, step 1.2]

3.1 The finite $P$-module $K_n$ is finitely presented because $P$ is Noetherian. Lift a basis of the free localization $(K_n)_{\mathfrak Q}$ to finitely many sections of $K_n$ after one principal localization. Their map from a finite free module has finite kernel and cokernel, both zero at $\mathfrak Q$, so [F7] lets us shrink to a principal $D(g)$ containing $\mathfrak Q$ on which $K_n$ is free. The truncated finite complex $0\to(K_n)_g\to(F_{n-1})_g\to\cdots\to(F_0)_g$ is therefore a finite free complex on $P_g$. Its fibre at $\mathfrak Q$ is exact in positive degrees by step 2.1. The family $R\to P_g$ is flat and finite type, and every nonempty fibre is a principal open in affine $n$-space over a residue field, hence regular, Cohen–Macaulay and equidimensional of dimension $n$. By [F5], after another principal shrink around $\mathfrak Q$, this complex is exact in positive degrees on every local fibre. [F3, F5, F7, step 2.1]

4.1 At each point of that final neighbourhood, the terms of the truncated complex are finite over the local target ring and flat over the local base ring. Apply [F6] to its exact local fibre complex: its final cokernel $M$ is flat over the local base. Thus $M$ is $R$-flat at every point of a principal neighbourhood of $\mathfrak Q$ in $\operatorname{Spec}P$. Intersecting with $\operatorname{Spec}B$ gives a neighbourhood of $\mathfrak q$ where $M$ is $R$-flat. Step 1.1 transports this neighbourhood from the Noetherian stage to the original pair. Since every flat point has such a neighbourhood, the module flat locus is open; taking $M=B$ gives the algebra claim. AC is inherited through [F2]–[F6], as recorded in [F8]. [F1, F2, F5, F6, F8, F9, step 1.1, step 3.1] ∎

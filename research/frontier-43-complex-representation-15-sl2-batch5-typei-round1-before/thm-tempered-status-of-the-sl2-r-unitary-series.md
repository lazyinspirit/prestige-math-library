---
id: thm-tempered-status-of-the-sl2-r-unitary-series
kind: theorem
title: Tempered status of the SL2(R) unitary series
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-axiom-of-choice
  - def-fell-topology-on-the-unitary-dual
  - def-left-and-right-regular-unitary-representations
  - def-limits-of-discrete-series-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - def-tempered-unitary-representation
  - def-unitary-dual-of-a-locally-compact-group
  - def-weak-containment-of-unitary-representations
  - cor-complementary-series-converge-to-the-trivial-representation
  - thm-plancherel-support-for-sl2-r
  - thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series
  - thm-unitarity-of-the-sl2-complementary-series
  - thm-unitarity-of-the-sl2-unitary-principal-series
dependency_level: 12
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_audit: "AC is assumed through the unitary dual, regular representation, Plancherel field, and complementary-series sign-equivalence interfaces. The carrier, support, and positive-kernel arguments make no further selections."
verification:
  precheck: pass
proof_scope:
  local: "The tempered classes are identified with the Plancherel support supplied by the assigned support theorem. The negative complementary parameter is reduced to the positive representative using the in-run complementary Hilbert-space sign-equivalence result; its convergence to the trivial class is not used. The Plancherel supplier remains held on its batch-1 direct-integral inputs; the complementary completed sign equivalence is established by its cited supplier."
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Theorem 7.4.24 and the following tempered paragraph, printed p. 313: the source defines temperedness by L^{2+ε} coefficients but then lists the trivial representation as tempered; this conflicting source claim is audited and not used."
    - title: "Jan Frahm, The Plancherel formula for real reductive groups I: Examples (AIM RTG lecture notes)"
      url: "https://prclare.people.wm.edu/AIM_RTNCG/LS_210823_Frahm.pdf"
      locator: "SL(2,R) Plancherel slides, PDF pp. 22–25: discrete-series definition and the principal/discrete Plancherel carrier; corroboration only, not used to exclude complementary or trivial representations."
    - title: "Peter Hochs, Harish-Chandra's Plancherel formula for SL(2,R) (lecture notes)"
      url: "https://www.math.ru.nl/~hochs/HC_Plancherel_formula.pdf"
      locator: "§2 Theorem 2.1, printed p. 6, gives the principal/discrete inversion formula; contextual audit only, not used to infer non-temperedness from missing measure."
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and use the normalized parameter convention of [[def-normalized-principal-series-i-epsilon-nu]]. Every irreducible unitary principal-series class $[I_{\varepsilon,is}]$, with $\varepsilon\in\{0,1\}$ and $s\in\mathbb R$, is tempered. The odd family at $s=0$ is reducible, $I_{1,0}=D_1^+\oplus D_1^-$, and its two irreducible summands are tempered; each $D_n^\pm$ for $n\ge2$ is also tempered. No nontrivial spherical complementary-series class $[I_{0,\nu}]$ with $0<|\nu|<1$, and not the trivial class, is tempered. Here tempered means weak containment in the left regular representation ([[def-tempered-unitary-representation]]); the reducible $I_{1,0}$ is not itself a point of the unitary dual ([[def-unitary-dual-of-a-locally-compact-group]]).

## Facts & Assumptions

**Given:** AC, the normalized principal-series parameter, the irreducible unitary dual of $G=\mathrm{SL}_2(\mathbb R)$, its fixed left Haar measure, and the Plancherel support theorem for this group.

[F1] A strongly continuous unitary representation is tempered exactly when it is weakly contained in the left regular representation; for irreducibles this is membership in the regular representation's Fell support ([[def-tempered-unitary-representation]], [[def-left-and-right-regular-unitary-representations]], [[def-weak-containment-of-unitary-representations]], [[def-fell-topology-on-the-unitary-dual]]).

[F2] The Plancherel transform identifies the regular representation with an irreducible direct integral over its Plancherel support. The carrier consists of nonzero-parameter unitary principal classes and $D_n^\pm$ for $n\ge2$; its closed support also contains $[I_{0,0}]$ and $D_1^\pm$, while the spherical complementary classes with $0<\nu<1$ and the trivial class lie outside the support ([[thm-plancherel-support-for-sl2-r]]). This in-run supplier remains a draft and its exact use is held open.

[F3] The compact-picture representations $I_{\varepsilon,is}$ are strongly continuous and unitary. The spherical $I_{0,0}$ is irreducible, while $I_{1,0}=D_1^+\oplus D_1^-$ is reducible ([[thm-unitarity-of-the-sl2-unitary-principal-series]], [[def-limits-of-discrete-series-for-sl2-r]]).

[F4] Each $D_1^\pm$ is an irreducible strongly continuous unitary limit, and $D_n^\pm$ for $n\ge2$ are irreducible unitary discrete-series models ([[def-limits-of-discrete-series-for-sl2-r]], [[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]]).

[F5] The spherical complementary models $I_{0,\nu}$ are irreducible unitary representations for $0<|\nu|<1$ ([[thm-unitarity-of-the-sl2-complementary-series]]).

[F6] The unitary complementary representations with parameters $\nu$ and $-\nu$ are equivalent for $0<\nu<1$; this follows by extending the normalized intertwiner to a unitary map between their completed Hilbert spaces ([[cor-complementary-series-converge-to-the-trivial-representation]], proof step 1.2). Its convergence-to-trivial clause is not used here.

[A1] AC is inherited through the unitary dual, regular representation, Plancherel field, and complementary-series Hilbert models ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** identify tempered classes by the regular Plancherel support and exclude the complementary family by its explicit sign equivalence.

**Given:** The statement, Facts [F1]–[F6], and AC.

1.1 Let $S$ be the closed support of the Plancherel measure. By [F2], the regular representation has its irreducible direct-integral decomposition over $S$; by [F1], the irreducible classes in this support are exactly the tempered classes. [F1, F2, A1]

2.1 Every nonzero-parameter unitary principal class and every $D_n^\pm$ for $n\ge2$ is in the Plancherel carrier, hence in $S$. The even endpoint $[I_{0,0}]$ and the two limits $D_1^\pm$ lie in $S$ by [F2]; [F3] and [F4] make these irreducible unitary dual points. Step 1.1 therefore proves all principal, discrete, and limit claims. At the odd endpoint, [F3] identifies $I_{1,0}$ with the two summands, so the reducible direct sum is not asserted to be a dual point. [F2, F3, F4, step 1.1]

3.1 By [F2], the positive-parameter spherical complementary classes $[I_{0,\nu}]$, $0<\nu<1$, and the trivial class are outside $S$, hence are not tempered by step 1.1. If $-1<\nu<0$, [F6] gives $[I_{0,\nu}]=[I_{0,-\nu}]$, and $0<-\nu<1$, so the negative-parameter class is outside $S$ as well. This uses the complementary Hilbert-space sign equivalence; no non-temperedness conclusion is drawn from its convergence to the trivial class or from zero Plancherel mass alone. [F2, F5, F6, step 1.1, A1] ∎

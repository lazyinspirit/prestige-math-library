---
id: fs-every-symmetric-submodel-satisfies-choice
kind: false-statement
title: Every symmetric submodel satisfies Choice
status: published
origin: pipeline
deps: [cor-basic-cohen-model-fails-well-orderability-and-choice, thm-atom-free-socks-model-has-countable-pairs-without-choice, thm-generic-extensions-satisfy-zf-and-zfc]
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, §§10.3–10.4, pp. 48–51", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

False: full generic extensions of choice models preserve AC, but hereditarily symmetric names may omit enumerations and choice functions. The basic Cohen model and the corrected socks model are transitive ZF countermodels.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-generic-extensions-satisfy-zf-and-zfc]] says that a full generic extension of a ZFC ground satisfies ZFC.

[F2] [[cor-basic-cohen-model-fails-well-orderability-and-choice]] gives a symmetric inner model with an infinite Dedekind-finite set of reals and hence failure of AC.

[F3] [[thm-atom-free-socks-model-has-countable-pairs-without-choice]] gives a symmetric inner model in which choice already fails for a countable family of pairs of sets of reals.

## Counterexample

1.1 Let $G$ be generic for the basic Cohen forcing over a ZFC ground. By F1 the ambient $M[G]$ satisfies AC. The hereditarily symmetric interpretation $N\subseteq M[G]$, however, contains the invariant set $A$ while every proposed enumeration is moved by a finite-support transposition. By F2, $N\models\neg\mathrm{AC}$. Thus $N$ directly refutes the universal statement. [F1, F2]

1.2 The socks construction sharpens the same failure mode: the indexed pair family is invariant, while a swap outside a proposed choice name's finite support exchanges its selected mate. Hence the family lies in the symmetric model but no choice function does. [F3]

2.1 The failed inference is therefore $M[G]\models\mathrm{AC}\Rightarrow N\models\mathrm{AC}$. Transitivity and satisfaction of ZF pass to the symmetric interpretation by its separate model theorem; AC does not. [F1, F2, F3] ∎
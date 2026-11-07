---
id: thm-raynaud-isogeny-kernel-differential-exponent
kind: theorem
title: "Raynaud determinant character for finite flat p-torsion isogeny kernels"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-number-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "M. Raynaud, “Schémas en groupes de type $(p,\\ldots,p)$,” Théorème 4.1.1"
      url: "https://www.numdam.org/article/BSMF_1974__102__241_0.pdf"
      locator: "Printed p. 272; proof via the finite-flat-group-scheme classification in §§3.2–3.3."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Let $p$ be prime and let $F/\mathbb Q_p$ be a finite extension with absolute ramification index $e(F/\mathbb Q_p)<p-1$. Let $G$ be a finite commutative flat group scheme over $\mathcal O_F$, killed by $p$, whose generic fiber has order $p^d$. The determinant character of the Galois representation on the geometric generic fiber of $G$ has the form $\varepsilon\chi_p^a$ for some integer $a\ge0$, where $\chi_p$ is the $p$-adic cyclotomic character and $\varepsilon$ is unramified at $p$.

## Statement references

[[def-finite-flat-group-scheme-and-cartier-dual]]

[Raynaud 1974, Théorème 4.1.1, printed p. 272](https://www.numdam.org/article/BSMF_1974__102__241_0.pdf)

[Faltings–Wüstholz, *Rational Points*, Chapter III, Theorem 4.6, printed pp. 105–106](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and DC; a prime $p$, a finite extension $F/\mathbb Q_p$ with $e(F/\mathbb Q_p)<p-1$, and a finite flat commutative $p$-torsion group scheme over $\mathcal O_F$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-finite-flat-group-scheme-and-cartier-dual]]: finite flat group schemes have finite locally free coordinate Hopf algebras and well-defined geometric generic fibers.

## Proof status

**Confirmed statement defect; retained historical statement, not a logical supplier.** The geometric generic fibre killed by $p$ gives an $\mathbb F_p$-representation, so its determinant takes values in $\mathbb F_p^\times$, whereas the displayed $\chi_p$ was declared $p$-adic. Even after replacing it by its mod-$p$ reduction, the asserted cyclotomic-only form is false for the stated ramified bases. For $p=5$, $F=\mathbb Q_5(\pi)$ with $\pi^2=5$, the height-one Lubin–Tate formal group with $[\pi](X)=\pi X+X^5$ has a finite flat order-five kernel whose inertial determinant $\tau$ has order four; the mod-five cyclotomic character is $\tau^2$. Thus no unramified twist of a cyclotomic power gives $\tau$, although $e=2<4$. The explicit finite Hopf/valuation argument is in `research/number-theory-all-141-2026-10-25-escalations/faltings120/research/raynaud-scope-counterexample.md`; this does not import a reciprocity theorem. Raynaud's actual local formula uses the tame fundamental character and the exact cotangent-length/different exponent; identification with the mod-$p$ cyclotomic character requires an unramified base in the number-field specialization. The full local classification and its exact integer-length formula remain held. The paragraph below records the earlier proof plan and does not validate the preserved Statement.

The claim is retained with the exact local hypotheses. The proof is not reconstructed here: Raynaud's Theorem 4.1.1 uses the determinant character of the generic fiber and the classification developed in §§3.2–3.3, including Corollary 3.3.7. Faltings–Wüstholz, Chapter III, Theorem 4.6, reduces the number-field version to that local theorem and an induced-representation determinant identity. The full Raynaud argument and its local classification prerequisites are absent from the active library. Escalate this item and any fixed-isogeny-class argument depending on it.

Unresolved proof prerequisite (not an accepted given): Raynaud's determinant-character theorem is the substantive local input; its full proof proceeds through the classification of finite flat group schemes killed by $p$ and is not supplied by the current item library. Proposed supplier ID: `thm-raynaud-determinant-character-for-finite-flat-p-group-schemes` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).

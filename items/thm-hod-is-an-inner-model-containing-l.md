---
id: "thm-hod-is-an-inner-model-containing-l"
kind: "theorem"
title: "HOD as an inner model and comparison with L"
deps: ["def-ordinal-definability-and-hod", "thm-constructibility-is-absolute-and-l-is-minimal", "lem-canonical-well-order-of-finite-definition-codes", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila §8.4 Exercises 8.37–8.38 p42; local exercise solution and Geschke
        minimality p16
      url: https://karagila.org/files/set-theory-2017.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, HOD is a definable transitive class containing all ordinals, satisfying every ZFC axiom, and containing $L$. No ambient AC is assumed; [[def-axiom-of-choice]] specifies the internal conclusion. This does not assert HOD=L, idempotence of HOD, or absoluteness of HOD across inner models.

## Facts & Assumptions

**Given:** ZF only. Complete local argument composes ordinal definitions, verifies each axiom by hereditary closure, explicitly orders bounded witness codes, and proves the external least-element graph belongs to HOD before claiming internal AC; only then invokes L minimality.

[F1] [[def-ordinal-definability-and-hod]]: OD is uniformly definable by set-level codes and agrees with ambient unique ordinal definability; HOD imposes hereditary OD.

[F2] [[lem-canonical-well-order-of-finite-definition-codes]]: Natural-number-first and fixed-arity lexicographic order on tuples from an ordinal is a well-order.

[F3] [[def-axiom-of-choice]]: Internal AC asks for a choice function on each set family of nonempty sets.

[F4] [[thm-constructibility-is-absolute-and-l-is-minimal]]: Once HOD is a transitive ZF inner model containing all ordinals, minimality places L inside it.

## Proof

1.1 OD is closed under every fixed uniquely defined set operation with finitely many OD parameters: replace each parameter by its unique definition from finitely many ordinals and existentially quantify those uniquely specified parameters. The resulting fixed formula uniquely defines the output from the union of the finite lists of ordinal parameters, so F1 makes the output OD. This argument is a formula-by-formula composition, not a class truth predicate. Every ordinal is OD using itself as a parameter, so every ordinal and all its descendants are OD. Thus all ordinals belong to HOD. If $y\in x\in\mathrm{HOD}$, every member of $\operatorname{TC}(\{y\})$ belongs to $\operatorname{TC}(\{x\})$, proving transitivity. [F1]

2.1 Whenever a set z is OD and every member of z is in HOD, z is in HOD: its TC consists of z and descendants of its members, all OD. Pairing and union of HOD sets are OD by step 1.1; their members are HOD by transitivity, so they are HOD. Empty and omega are already HOD as ordinals. Transitivity transfers Extensionality and ambient Foundation exactly by putting every actual member, including a Foundation witness, in HOD. Actual omega, pairs and unions verify internal Infinity. [F1, step 1.1]

3.1 For a fixed formula phi, a and finitely many parameters in HOD, ambient Separation forms $b=\{x\in a:\phi^{\mathrm{HOD}}(x,p)\}$. Because HOD is a fixed definable class, b is uniquely definable from those OD parameters; step 1.1 makes it OD. Every member of b is HOD by transitivity from a, so step 2.1 makes b HOD. This proves each internal Separation instance. [F1, step 1.1, step 2.1]

4.1 Ambient Separation on $\mathcal P(a)$ forms $c=\mathcal P(a)\cap\mathrm{HOD}$ for $a\in\mathrm{HOD}$. It is uniquely definable from the OD parameter a, hence OD by step 1.1. All its members are HOD by its definition, so c is HOD by step 2.1. Transitivity makes internal subsethood agree with actual subsethood, proving that c is the internal power set. [F1, step 1.1, step 2.1, step 3.1]

5.1 If a fixed HOD-relativized formula is functional on $a\in\mathrm{HOD}$ with HOD parameters, ambient Replacement produces its set image Y of HOD elements. This image is uniquely definable from those OD parameters, so it is OD; step 2.1 then puts Y in HOD. This proves Replacement without assuming it internally. Together with steps 2.1–4.1 all ZF axioms now hold in HOD. [F1, step 1.1, step 2.1, step 4.1]

6.1 Order OD witness codes $(\theta,e,t)$ first by the ordinal theta, then by the natural number e encoding formula and arity, then lexicographically by the ordinal tuple $t\in\theta^n$. Require theta positive and the code to have a unique decoded output in $V_\theta$. F2 gives a well-order within each theta. For any nonempty definable class of codes, minimize theta by first restricting to an ordinal bound supplied by one witness; then minimize e and t in sets. Predecessors of a fixed code form a set, since they lie among codes with theta at most its theta, hence in a set of finite ordinal tuples. Each OD set has a least witness code; order OD by these least codes. This is a uniformly definable setlike class well-order: distinct outputs have distinct least codes, and the same witness-bound minimization supplies minima for nonempty set subsets of OD. [F1, F2, step 5.1]

7.1 For a family $a\in\mathrm{HOD}$ of nonempty sets, let m(b) be the least element of b in the OD order from step 6.1. Each b is a subset of HOD and hence of OD. Ambient Replacement forms $g=\{\langle b,m(b)\rangle:b\in a\}$. This graph is uniquely definable from a using the fixed code order, so it is OD by step 1.1. Each b and m(b) is HOD, and Kuratowski pairs formed from them are HOD by step 2.1. Thus every member of g is HOD and step 2.1 implies g is HOD. It is a choice function internally as well as externally, proving F3 in HOD. This does not require the ambient OD order to be the order computed as OD inside HOD. [F3, step 1.1, step 2.1, step 6.1]

8.1 HOD is now a transitive definable ZFC inner model with all ordinals. Apply F4 to obtain $L\subseteq\mathrm{HOD}$. Every construction above used unique definitions, ambient ZF and minimization in specified well-orders, never ambient AC. [F4, step 1.1, step 5.1, step 7.1] ∎

---
id: "ex-clifford-boundaries-n-equals-one-and-n-equals-g"
kind: "example"
title: "Boundary normal subgroups in Clifford theory"
status: "draft"
origin: "pipeline"
deps: ["thm-clifford-correspondence", "def-clifford-ramification-index", "thm-gallagher-correspondence-for-an-extendible-character"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorems 1.1–1.3; tom Dieck Theorem 4.2.4 boundary specializations"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
generation:
  role: example
proof_strategy: direct
---

## Example

Let $G$ be any finite group. At $N=1$, the sole normal type is $\theta=1$ and inertia is $G$; an irreducible character $\chi$ restricts to $\chi(1)$ copies of this type, so $e(\chi,1)=\chi(1)$. Clifford induction is identity on $\operatorname{Irr}(G)$. At $N=G$ and $\theta\in\operatorname{Irr}(G)$, inertia is again $G$, the lying-over set is the singleton $\{\theta\}$, and $e(\theta,\theta)=1$; the correspondence is the singleton identity.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the example. All representations here are finite-dimensional complex left representations.

[F1] Induction from inertia is a bijection above a normal type, with inverse its isotypical component. ([[thm-clifford-correspondence]]).

[F2] The ramification index is the multiplicity of the chosen normal type. ([[def-clifford-ramification-index]]).

[F3] An extension to inertia parametrizes the irreducibles above the normal type by irreducibles of the inertia quotient. ([[thm-gallagher-correspondence-for-an-extendible-character]]).

## Verification

**Proof technique:** direct.

1.1 For $N=1$, the trivial group has just its one-dimensional trivial irreducible: every subspace is invariant, so a nonzero irreducible space has dimension one. Every $G$-module restricts to its dimension many copies of this type. Conjugation fixes it, so $I=G$, its isotypical component is the whole module, and induction from $G$ to itself is identity. The ramification is therefore $\chi(1)$. [F1, F2, given]

2.1 The trivial normal type extends to the trivial representation of $G$. Gallagher with $G/1=G$ sends $\eta$ to $1\cdot\eta=\eta$, recovering all of $\operatorname{Irr}(G)$. A higher-degree irreducible thus has homogeneous but reducible restriction to $1$. [F3, step 1.1]

3.1 For $N=G$, characters are fixed by inner conjugation, so $I=G$. The restriction of an irreducible to the same group is itself, hence it contains $\theta$ exactly when it equals $\theta$, then with multiplicity one. Clifford correspondence is the singleton identity. The module affording $\theta$ extends to itself, and Gallagher has the trivial quotient $G/G$, again giving only $\theta$. If $G=1$, these two endpoint descriptions agree and all degrees and indices are one. [F1, F2, F3, given] ∎

---
id: ex-hh-group-and-function-algebras-for-s3
kind: example
title: "Group and function Hopf algebras of the symmetric group on three letters"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [lem-hh-group-and-polynomial-hopf-algebras-exist]
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass

sources:
  references:
    - title: "Hans-Jürgen Schneider, Lectures on Hopf algebras, notes by Sonia Natale"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "§1, printed pp. 2–8: group-algebra Hopf structure"
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Example 2.3(i)–(ii), PDF p. 4: finite-group function and group algebras"

---
## Example

Let $G=S_3$, the six permutations of $\{1,2,3\}$ under composition, and let $a=(12)$ and $b=(23)$, with the rightmost permutation applied first. Compare the group algebra $kG$ and the function algebra $k^G$ for any field $k$. The first is noncommutative and cocommutative; the second is commutative and noncocommutative. Both are Hopf algebras.

## Facts & Assumptions

**Given:** The finite group $S_3$, a field $k$, and the group-algebra and finite-function-algebra structures.

[F1] For any group the group algebra has $\Delta(g)=g\otimes g$; for a finite group the function algebra has pointwise product and $\Delta(f)(x,y)=f(xy)$, with the finite-set tensor identification ([[lem-hh-group-and-polynomial-hopf-algebras-exist]]).

## Verification

**Proof technique:** direct.

1.1 Applying the stated composition convention gives $ab=(123)$, since $1\mapsto2$, $2\mapsto3$, and $3\mapsto1$; it gives $ba=(132)$, since $1\mapsto3$, $3\mapsto2$, and $2\mapsto1$. These are distinct permutations. [given, construct]

2.1 The group elements form a basis of $kG$, so the products of the basis vectors $a,b$ are the distinct basis vectors $ab$ and $ba$ from step 1.1; hence $kG$ is not commutative. For every basis vector $g$, $\tau\Delta(g)=\tau(g\otimes g)=g\otimes g=\Delta(g)$, and linearity then gives cocommutativity on all of $kG$. [F1, step 1.1, algebra]

2.2 Multiplication in $k^{S_3}$ is pointwise, so $fg=gf$ at every group element and this algebra is commutative. Let $f=\delta_{ab}$, the function equal to $1$ at $ab$ and $0$ elsewhere. Then $\Delta(f)(a,b)=f(ab)=1$, whereas $(\tau\Delta(f))(a,b)=\Delta(f)(b,a)=f(ba)=0$ by step 1.1. Therefore $\Delta(f)\ne\tau\Delta(f)$, so $k^{S_3}$ is not cocommutative. [F1, step 1.1, algebra]

3.1 The structures in [F1] make both algebras Hopf algebras, while steps 2.1–2.2 show that commutativity and cocommutativity distinguish the two examples exactly as stated. [F1, step 2.1, step 2.2] ∎

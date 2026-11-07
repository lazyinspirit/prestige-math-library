---
id: lem-fifteen-torsion-reduces-global-semistability-to-local-criterion
kind: lemma
title: "Fifteen-torsion reduction of global semistability to a local criterion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: locally-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - def-fiberwise-semiabelian-group-scheme
  - lem-arith-field-prime-to-characteristic-torsion-and-tate-module
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, BSD seminar notes, Lecture 3"
      url: "https://virtualmath1.stanford.edu/~conrad/BSDseminar/Notes/L3.pdf"
      locator: "Theorem 3.5 and the paragraph immediately following, printed p. 6; the local theorem is explicitly assumed below."
---

## Statement

Assume AC and DC. Let $A/K$ be an abelian variety over a number field. Suppose the following local criterion is supplied: for every finite extension $F/K$, every finite place $v$ of $F$, and every $\ell\in\{3,5\}$ distinct from the residue characteristic of $v$, if all geometric $\ell$-torsion points of $A_F$ are $F$-rational, then $A_F$ has a fiberwise semiabelian model over $\mathcal O_{F,v}$. Then some finite Galois extension $L/K$ makes $A_L$ fiberwise semiabelian over the local ring at every finite place of $L$.

## Facts & Assumptions

**Given:** AC, DC, $A/K$, and the local criterion explicitly stated above.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[A2] The local criterion is a hypothesis of this lemma. It is not an accepted imported theorem or a proof of the local semistable-reduction theorem.

[F1] For every prime $\ell$ different from the characteristic of the field, the geometric $\ell$-torsion of an abelian variety of dimension $g$ is a finite group of order $\ell^{2g}$. [[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]

[F2] Fiberwise semiabelian models have the geometric fibre conventions stated in the definition. [[def-fiberwise-semiabelian-group-scheme]]

## Proof

**Proof technique:** split two coprime torsion groups and choose one prime at each residue characteristic.

1.1 Since $K$ has characteristic zero, F1 gives finite geometric point sets $A[3](\overline K)$ and $A[5](\overline K)$. Each point has coordinates in a finite separable extension of $K$: the torsion schemes are finite étale in characteristic zero. Adjoin the coordinates of all these finitely many points and take a finite Galois closure $L/K$. Then every geometric point of both $A[3]$ and $A[5]$ is $L$-rational. [A1, F1, given, construct]

2.1 Let $w$ be any finite place of $L$ with residue characteristic $p$. At least one of $3,5$ is distinct from $p$. Choose such an $\ell$. Step 1.1 gives all geometric $\ell$-torsion points $L$-rational, so the supplied local criterion A2 applies to $F=L$ and $v=w$. It gives a fiberwise semiabelian model over $\mathcal O_{L,w}$ in the sense of F2. Since $w$ was arbitrary, this same $L$ works at every finite place. [A2, F2, step 1.1, given] ∎

---
id: thm-c-prime-one-sixth-torsion-elements-come-from-relator-roots
kind: theorem
title: "C prime one sixth torsion elements come from relator roots"
status: draft
origin: pipeline
deps: [lem-minimal-power-diagram-has-a-periodic-boundary-shell, def-minimal-cyclic-power-diagram-and-relator-root]
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Lipschutz (1964), \u00a76 periodic-word proof, with the local torsion deduction"
      url: "http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf"
---

## Statement

In a group presented by a symmetrised $C'(1/6)$ set of nonempty cyclically reduced free words, every nonidentity finite-order element is conjugate to a power of a root of a cyclic conjugate of a defining relator. Relators that are proper powers are permitted; no assertion about presentations over arbitrary free-product factors is made.

## Facts & Assumptions

**Given:** A nonidentity finite-order element $g$ of such a presented group.

[F1] A shortest conjugacy representative and a cyclic conjugate of a defining relator are positive powers of a common word ([[lem-minimal-power-diagram-has-a-periodic-boundary-shell]]).

[F2] Shortest representatives exist and a relator root is a nonempty literal root that is not a proper power ([[def-minimal-cyclic-power-diagram-and-relator-root]]).

## Proof

1.1 Choose a shortest conjugacy representative using [F2]. By [F1], a rotation $v$ of this representative and a relator $r$ satisfy $v=c^a$, $r=c^b$ for a nonempty word $c$ and positive integers $a,b$. Rotation is conjugation in the free group, since $pq$ rotates to $qp=p^{-1}(pq)p$. Therefore $g$ is conjugate in the quotient to the image of $c^a$. [F1, F2]

2.1 Among words $d$ with $c=d^k$ literally for some positive $k$, choose one of shortest length. The finite set of candidate lengths is nonempty because $d=c,k=1$ is allowed. If $d=e^j$ with $j\ge2$, then $c=e^{jk}$, contradicting the shorter length of $e$. Hence $d$ is not a proper power, $r=d^{kb}$, and $v=d^{ka}$. Thus $d$ is a root in [F2] and $g$ is conjugate to a power of its image, as claimed. If $kb=1$, the relator itself is the root and is trivial in the quotient, which would contradict $g\ne1$; this endpoint simply cannot occur for the given element. [step 1.1, F2, algebra] ∎

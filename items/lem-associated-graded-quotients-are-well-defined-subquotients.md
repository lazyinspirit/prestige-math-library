---
id: lem-associated-graded-quotients-are-well-defined-subquotients
kind: lemma
title: Associated graded quotients are well defined subquotients
deps: ["def-associated-graded-object-of-a-filtered-object", "lem-spectral-sequence-subquotient-and-local-lifting-calculus"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

The associated graded quotients of a filtered object exist as subquotients of the ambient object, independently up to unique compatible isomorphism of the monomorphisms representing its subobjects.

## Facts & Assumptions

**Given:** A filtered object and two systems of compatible monomorphisms representing its subobjects.

[F1] For an increasing filtration, $\operatorname{gr}_pA$ is the cokernel of $F_{p-1}A\hookrightarrow F_pA$; for a decreasing filtration, $\operatorname{gr}^pA$ is the cokernel of $F^{p+1}A\hookrightarrow F^pA$ ([[def-associated-graded-object-of-a-filtered-object]]).

[F2] Quotients exist in the abelian category and maps preserving subobjects descend uniquely ([[lem-spectral-sequence-subquotient-and-local-lifting-calculus]]).

## Proof

**Proof technique:** direct.

1.1 Choose the specified representatives $i_p:M_p\hookrightarrow A$. Subobject containment gives $j_p:M_{p-1}\to M_p$ with $i_pj_p=i_{p-1}$. If $j_pa=j_pb$, then $i_{p-1}a=i_{p-1}b$, hence $a=b$. Thus $j_p$ is monic and its cokernel exists, giving the subquotient in [F1]. [F1, F2]

2.1 For a decreasing filtration choose representatives $i^p:M^p\hookrightarrow A$. The containment $F^{p+1}A\subseteq F^pA$ gives $j^p:M^{p+1}\to M^p$ with $i^pj^p=i^{p+1}$. The same monic-cancellation argument as in step 1.1 makes $j^p$ monic, so its cokernel is the decreasing associated-graded subquotient. Equivalently, this is step 1.1 after translating by $F^pA=F_{-p}A$. [F1, F2, step 1.1]

3.1 Replace either system of representatives by a compatible primed system and let $u$ be the compatible isomorphisms. Monicity in $A$ gives $u_pj_p=j'_pu_{p-1}$ in the increasing case and $u^pj^p=(j')^pu^{p+1}$ in the decreasing case. By [F2], $u$ and $u^{-1}$ descend to maps of the respective cokernels. Their composites are identities because they agree with the identities after the epic quotient projections; the same cancellation proves uniqueness. This covers equal adjacent pieces and zero pieces in both conventions. [F2, step 1.1, step 2.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

---
id: lem-trace-of-an-idempotent-is-the-dimension-of-its-image
kind: lemma
title: "The trace of an idempotent is its rank as a field scalar"
status: published
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [def-trace-of-an-endomorphism, cor-idempotent-endomorphisms-are-diagonalisable-projections, thm-dimension-of-a-linear-subspace]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

If $P:V\to V$ is an idempotent endomorphism of a finite-dimensional space over a field $k$, then $\operatorname{tr}(P)=(\dim_k\operatorname{im}P)\cdot1_k$. In positive characteristic this equality does not in general determine the integer rank from the trace.

## Facts & Assumptions

**Given:** $P\in\operatorname{End}_k(V)$, $\dim_kV<\infty$, and $P^2=P$.

[F1] $V=\operatorname{im}P\oplus\ker P$, with $P$ the projection onto its image ([[cor-idempotent-endomorphisms-are-diagonalisable-projections]]).

[F2] Trace is the matrix trace in any ordered basis, with trace zero on the zero space ([[def-trace-of-an-endomorphism]]).

[F3] Every linearly independent subset of a subspace of a finite-dimensional vector space extends to a finite basis of that subspace, without a choice principle ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 By F1, both $\operatorname{im}P$ and $\ker P$ are subspaces of the finite-dimensional space $V$. Apply F3 to each empty independent subset to obtain finite bases, and concatenate them in the displayed direct-sum order, putting the $r=\dim_k\operatorname{im}P$ image basis vectors first. For $u=P(v)$, $P(u)=P^2(v)=P(v)=u$; for $w\in\ker P$, $P(w)=0$. Thus the matrix is $\operatorname{diag}(I_r,0)$. [F1, F3, given]

2.1 F2 permits this basis for computing trace. Summing the diagonal gives $\operatorname{tr}(P)=\underbrace{1_k+\cdots+1_k}_{r\text{ terms}}=r\cdot1_k$. For $r=0$ this is the empty sum $0$; when $V=0$ it also agrees with F2. For $P=\operatorname{id}_V$, it gives $(\dim_kV)\cdot1_k$. [step 1.1, F2]

3.1 If $\operatorname{char}(k)=p>0$, take $V=k^p$. Its identity has rank $p$ and trace $p\cdot1_k=0$, whereas its zero map has rank $0$ and trace $0$. Therefore equal traces need not imply equal integer ranks, even among idempotents on the same space. [step 2.1, algebra] ∎

## Sources

[Axler](https://linear.axler.net/LADR4e.pdf), 8.47–8.51, pp. 326–327, gives the trace convention and basis independence. [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Theorem 4.5.1 proof, p. 68, uses projector trace over the complex numbers; the local proof retains arbitrary characteristic.

---
id: ex-homology-of-the-loop-space-of-an-odd-sphere
kind: example
title: Homology of the loop space of an odd sphere
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-mapping-path-factorization, thm-higher-dimensional-spheres-are-simply-connected, thm-homological-serre-spectral-sequence, cor-homology-of-spheres, cor-contractible-nonempty-spaces-have-the-homology-of-a-point]
proof_strategy: spectral-sequence
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: Hatcher, Algebraic Topology, Example 5.5
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf
      locator: Example 5.5 and complete two-column calculation, printed p. 528
---

## Statement

For every $m\geq1$,
$$H_k(\Omega S^{2m+1};\mathbb Z)\cong\begin{cases}\mathbb Z,&2m\mid k,\\0,&2m\nmid k,\end{cases}\qquad(k\geq0).$$
This is an additive calculation. It does not assert a Pontryagin-ring
identification, and it uses no choice principle.

## Facts & Assumptions

**Given:** $m\geq1$, $N=2m+1$, a basepoint of $S^N$, and integral coefficients.

[F1] [[thm-mapping-path-factorization]] supplies the Hurewicz path fibration $\Omega S^N\to PS^N\to S^N$. Its explicit path total space contracts by rescaling paths.

[F2] [[thm-higher-dimensional-spheres-are-simply-connected]] says that $S^N$ is simply connected. In particular the based loop space is path connected: a nullhomotopy relative to the loop basepoint is a path to the constant loop.

[F3] [[thm-homological-serre-spectral-sequence]] supplies the choice-free integral homological sequence, its bidegree, constant-coefficient clause, and strong convergence.

[F4] [[cor-homology-of-spheres]] gives the two nonzero base homology groups. [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] computes the path-space abutment.

## Verification

**Proof technique:** the contractible abutment makes the only possible family of differentials isomorphisms, yielding a recurrence for the unknown fiber groups.

1.1 The path-space formula is $$PS^N=\{\gamma:I\to S^N:\gamma(0)=*\},\qquad p(\gamma)=\gamma(1).$$ The homotopy $H_s(\gamma)(t)=\gamma(st)$ contracts it to the constant path; the compact-open exponential law makes this formula continuous. By [F2], any based loop has a based nullhomotopy, whose slices give a path in $\Omega S^N$, so $H_0(\Omega S^N;\mathbb Z)=\mathbb Z$. [F1, F2, F4]

2.1 Write $G_q=H_q(\Omega S^N;\mathbb Z)$. Since the base is simply connected, [F3, F4] give $$E^2_{p,q}=\begin{cases}G_q,&p=0,N,\\0,&\text{otherwise}. \end{cases}$$ The homological bidegree $(-r,r-1)$ shows that every differential before page $N$ is zero and that the only possibly nonzero family is $$d_N:E^N_{N,q}=G_q\longrightarrow E^N_{0,q+N-1}=G_{q+N-1}.$$ There are no nonzero differentials after page $N$. The contractibility in step 1.1 and [F4] say that the stable page is $\mathbb Z$ at $(0,0)$ and zero in every positive total degree. [F3, F4, step 1.1]

3.1 For every $q\geq0$, the source $(N,q)$ has zero stable term, so $d_N$ has zero kernel. Its target has positive total degree $q+N-1$, so that stable term is also zero and $d_N$ has zero cokernel. Thus $$G_q\xrightarrow{\cong}G_{q+N-1}=G_{q+2m}\qquad(q\geq0).$$ For $0<j<N-1$, the group $G_j$ in position $(0,j)$ has no possible incoming differential and must vanish. Together with $G_0=\mathbb Z$, induction on the quotient and remainder of $k$ by $N-1=2m$ gives exactly the displayed groups. [F3, step 1.1, step 2.1]

4.1 When $m=1$, the recurrence has period two and gives $\mathbb Z$ in every even degree and zero in every odd degree. Degree zero is the surviving $G_0=\mathbb Z$, not a target required to vanish. The proof also covers the zero groups, the first gap $1\leq j<2m$, the first isomorphism, both columns, both endpoints of every $d_N$, and every remainder class. Each construction uses one supplied basepoint or one finite chain representative; neither an infinite family of choices nor AC is used. There is no ring claim, converse, or extension splitting. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎

## Source notes

[Hatcher, Example 5.5](https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf), printed p. 528, gives this complete two-column path-space calculation for $\Omega S^N$. The kernel, cokernel, and low-degree gap arguments are written separately in step 3.1 to make the induction and its endpoints explicit.

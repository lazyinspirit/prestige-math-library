---
id: lem-ip-smooth-manifold-elliptic-nonresonant-regularity
kind: lemma
title: "Smooth-manifold elliptic nonresonant solvability and regularity"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-riemannian-metric-and-riemannian-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-axiom-of-choice
  - def-countable-choice
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - thm-collar-neighborhood-theorem
  - thm-lax-milgram
  - thm-rellich-compactness-from-w-one-p-zero-to-lp
  - def-compact-linear-operator
  - thm-fredholm-alternative-for-identity-minus-compact
  - thm-higher-order-boundary-regularity-for-dirichlet-problems
  - thm-bounded-right-inverse-for-the-sobolev-trace
  - thm-lp-trace-operator-on-a-bounded-c-one-domain
  - thm-sharp-trace-theorem-for-w-one-p
  - thm-kernel-of-the-trace-is-w-one-p-zero
  - lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts
  - lem-nested-domain-induction-for-interior-elliptic-derivatives
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Sections 2.2 and 3.1, Sobolev conventions and smooth Dirichlet solvability; the higher-order estimate is localized from the cited Euclidean boundary-regularity supplier."
    - title: "Feizmohammadi and Oksanen, An inverse problem for a semilinear elliptic equation in Riemannian geometries (2019)"
      url: "https://arxiv.org/pdf/1904.00608v3"
      locator: "Section 2.1, linear elliptic Dirichlet solution operators and the direct problem."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $(M,g)$ be a compact smooth Riemannian domain with smooth boundary and no orientability assumption, let $q\in C^\infty(M,\mathbb R)$, and suppose the only $w\in H_0^1(M)$ satisfying $(-\Delta_g+q)w=0$ weakly is $w=0$. For every $F\in L^2(M)$ and $f\in H^{1/2}(\partial M)$ there is a unique weak solution $u\in H^1(M)$ of $(-\Delta_g+q)u=F$ with trace $f$. If $f=0$, $F\in H^m(M)$ and $m\geq0$ is an integer, then $u\in H^{m+2}(M)$ and $\|u\|_{H^{m+2}}\leq C_m\|F\|_{H^m}$. If $F$ and $f$ are smooth, this solution belongs to $H^m(M)$ for every integer $m\geq0$.

## Statement references

[[def-ip-sobolev-spaces-on-compact-riemannian-domain|Fixed-atlas Sobolev and trace spaces]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this is assumed by the Rellich compactness and abstract Fredholm suppliers used in steps 2.1 and 3.1.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this is assumed by the Lax--Milgram, partition, and trace suppliers used in steps 1.1 and 4.1.

**Given:** AC and Countable Choice; the compact smooth Riemannian domain; a real smooth potential with trivial Dirichlet kernel; $F\in L^2(M)$; and $f\in H^{1/2}(\partial M)$.

[F1] [[def-ip-sobolev-spaces-on-compact-riemannian-domain]]: $H_0^1(M)$ is the closure of compactly supported interior smooth functions in $H^1(M)$; the boundary space $H^{1/2}$ is defined by finite chartwise Euclidean $W^{1/2,2}$ norms.

[F2] [[thm-lax-milgram]]: a bounded coercive sesquilinear form on a Hilbert space has a unique weak solution.

[F3] [[thm-rellich-compactness-from-w-one-p-zero-to-lp]]: on a bounded Euclidean open set, $W_0^{1,2}$ is compactly embedded in $L^2$.

[F4] [[thm-fredholm-alternative-for-identity-minus-compact]]: for compact $K$ on a Banach space, $I-K$ is injective if and only if it is surjective, and then it is boundedly invertible.

[F5] [[thm-bounded-right-inverse-for-the-sobolev-trace]]: a smooth bounded Euclidean domain has a bounded right inverse from its $H^{1/2}$ boundary space to $H^1$.

[F6] [[thm-higher-order-boundary-regularity-for-dirichlet-problems]]: a zero-trace weak solution of a uniformly elliptic divergence-form equation on a bounded smooth Euclidean domain gains two derivatives, with the stated $H^{m+2}$ estimate.

[F7] [[thm-sharp-trace-theorem-for-w-one-p]] and [[lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts]]: local Euclidean traces patch in the fixed boundary atlas to a bounded map $T_M:H^1(M)\to H^{1/2}(\partial M)$ agreeing with restriction on smooth functions. [[thm-kernel-of-the-trace-is-w-one-p-zero]]: finite localization gives $\ker T_M=H_0^1(M)$.

[F8] [[lem-nested-domain-induction-for-interior-elliptic-derivatives]]: on relatively compact interior charts, smooth uniformly elliptic divergence-form equations with $H^k$ data have the corresponding $H^{k+2}$ regularity and local estimate.

## Proof

**Given:** AC and Countable Choice and the data in the statement.

1.1 Choose a real constant $Q>1+\|q\|_{L^\infty(M)}$ and let $A=-\Delta_g+Q$ on $H_0^1(M)$, with form $a(w,z)=\int_M(g(\nabla w,\nabla\bar z)+Qw\bar z)\,dV_g$. The form is bounded and coercive in the chartwise $H^1$ norm, so [F2] gives a bounded inverse $A_D^{-1}:(H_0^1(M))^*\to H_0^1(M)$. [A2, given, F1, F2]

2.1 Multiplication by $Q-q$ maps $H_0^1(M)$ boundedly to $L^2(M)$, and the inclusion $H_0^1(M)\hookrightarrow L^2(M)$ is compact: localize with the finite atlas and partition, apply [F3] on each bounded chart piece (using zero extension at a boundary face), then extract a finite diagonal subsequence and sum the localized limits. Hence $K:=A_D^{-1}(Q-q)$ is compact on $H_0^1(M)$. [A1, F1, F3, step 1.1, algebra]

3.1 For $w\in H_0^1(M)$, $(I-K)w=0$ is equivalent, after applying $A$, to $(-\Delta_g+q)w=0$. The latter has only the zero solution by hypothesis, so $I-K$ is injective. By [F4], $I-K$ is boundedly invertible. This gives a unique weak zero-trace solution for every bounded functional on $H_0^1(M)$, in particular for every $F\in L^2(M)$ after subtracting any fixed boundary lift. [A1, F4, given, step 1.1, step 2.1, algebra]

4.1 For $n=1$, the bounded endpoint trace, smooth finite-dimensional lift and zero-trace kernel follow from the fundamental theorem of calculus and Cauchy--Schwarz; specifically, $|u(t)|^2\leq t\int_0^t|u'(r)|^2dr$ permits cutoff approximation at a zero endpoint, followed by interior mollification. For $n=0$ the boundary is empty, the trace space is zero and $H_0^1=H^1$. For $n\geq2$, a finite collection of flattened boundary charts, the collar neighborhood, and [F5] give a bounded extension $E:H^{1/2}(\partial M)\to H^1(M)$ with trace $f$. Set $u=Ef+w$ and solve for $w\in H_0^1(M)$ with weak right-hand-side functional $z\mapsto\int_MF\bar z\,dV_g-a_q(Ef,z)$ by step 3.1. This proves existence for the stated data. The difference of any two solutions has zero global trace, so [F7] puts it in $H_0^1(M)$; the assumed trivial kernel then proves uniqueness. [A2, F1, F5, F7, step 3.1, construct]

5.1 First take zero boundary data and $F\in L^2$. For $n\geq2$, in each boundary chart the collar flattens the boundary and the pulled-back coefficients are smooth and uniformly elliptic; localize $u$ by a cutoff, whose trace remains zero and hence lies in $H_0^1$ locally by [F7], and apply the $m=0$ case of [F6]. In interior charts apply [F8]. A finite cover gives $u\in H^2(M)$ and the estimate with the additional $L^2$ term. If $f$ is smooth, extend it smoothly in a boundary collar by keeping its chart representative constant in the normal variable near the boundary and multiplying by a cutoff; a finite partition patches these extensions to a smooth $Ef$. Then $w=u-Ef$ has zero trace and, by [F7], lies in $H_0^1(M)$; the same local estimates apply to $w$. For $n=1$, in a coordinate the weak equation has form $-\partial_x(a\partial_xu)+b\partial_xu+cu=F$ with smooth $a>0$; it gives $\partial_x(a\partial_xu)\in L^2$, hence $u\in H^2$ with the corresponding estimate. For $n=0$, the equation is pointwise and the trivial-kernel hypothesis gives the estimate. [F1, F6, F7, F8, step 4.1]

6.1 Fix $k\geq1$ and suppose inductively that $u\in H^{k+1}(M)$ and $F\in H^k(M)$. If $n\geq2$, in a boundary chart a cutoff localization has zero trace on the physical boundary and hence belongs locally to $H_0^1$ by [F7]; its equation has right-hand side $\chi F+[L,\chi]u\in H^k$, since the commutator is first order with smooth coefficients. Apply [F6] at order $k$ to these boundary-localized equations; in interior charts apply [F8]. This gives $u\in H^{k+2}(M)$ with a bound by $C_k(\|F\|_{H^k}+\|u\|_{H^{k+1}}+\|u\|_{L^2})$. If $n=1$, the coordinate equation in step 5.1 gives $\partial_x(a\partial_xu)=b\partial_xu+cu-F$; under the induction hypothesis the right-hand side belongs to $H^k$, so $a\partial_xu\in H^{k+1}$ and $u\in H^{k+2}$ with the analogous estimate. If $n=0$, all Sobolev orders coincide and the pointwise inverse gives it. For zero trace, the bounded inverse in step 3.1 controls $\|u\|_{H^1}$ by $\|F\|_{L^2}$; the induction hypothesis then absorbs the lower-order term and yields $\|u\|_{H^{k+2}}\leq C_k\|F\|_{H^k}$. For smooth nonzero $f$, apply the same induction to $u-Ef$. No differentiation of normal boundary values is used. [F1, F6, F7, F8, step 3.1, step 5.1, induction] ∎


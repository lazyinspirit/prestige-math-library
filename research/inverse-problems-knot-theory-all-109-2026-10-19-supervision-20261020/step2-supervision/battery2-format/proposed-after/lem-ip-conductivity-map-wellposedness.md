---
id: lem-ip-conductivity-map-wellposedness
kind: lemma
title: "Weak solvability of the positive scalar conductivity equation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-riemannian-metric-and-riemannian-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-countable-choice
  - def-axiom-of-choice
  - thm-lax-milgram
  - thm-rellich-compactness-from-w-one-p-zero-to-lp
  - thm-lp-trace-operator-on-a-bounded-c-one-domain
  - thm-bounded-right-inverse-for-the-sobolev-trace
  - thm-higher-order-boundary-regularity-for-dirichlet-problems
  - thm-higher-order-sobolev-embedding
  - thm-collar-neighborhood-theorem
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Section 3.1, the positive scalar conductivity equation and its classical Dirichlet problem."
    - title: "Mikko Salo, Applications of microlocal analysis to inverse problems (2019)"
      url: "https://arxiv.org/pdf/1908.03041"
      locator: "Section 5, equation (5.1), conductivity equation, boundary data, and direct-problem solutions."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $(M,g)$ be a compact connected smooth Riemannian domain with nonempty smooth boundary and no orientability assumption, and let $\gamma\in C^\infty(M,\mathbb R)$ satisfy $\gamma>0$. There is a constant $C_P>0$ such that $\|w\|_{L^2(M)}\leq C_P\|\nabla_gw\|_{L^2(M)}$ for every $w\in H_0^1(M)$. For every $h\in L^2(M)$ and $f\in H^{1/2}(\partial M)$ there is a unique $v\in H^1(M)$ with trace $f$ satisfying $\int_M\gamma\,g(\nabla_gv,\nabla_g\overline z)\,dV_g=-\int_Mh\overline z\,dV_g$ for every $z\in H_0^1(M)$. If $h$ and $f$ are smooth, this weak solution is smooth up to the boundary.

## Statement references

[[def-ip-sobolev-spaces-on-compact-riemannian-domain|Fixed-atlas Sobolev and trace spaces]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this is assumed by the Rellich, trace-right-inverse, higher-order regularity, and Sobolev embedding suppliers.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this is assumed by the Lax--Milgram, partition, and collar suppliers.

**Given:** AC and Countable Choice; the compact connected smooth Riemannian domain and positive smooth conductivity in the statement; and $f\in H^{1/2}(\partial M)$.

[F1] [[def-ip-sobolev-spaces-on-compact-riemannian-domain]]: $H^1(M)$ is defined by finitely many chartwise $W^{1,2}$ norms, and $H_0^1(M)$ is the $H^1$ closure of $C_c^\infty(M^\circ)$.

[F2] [[thm-rellich-compactness-from-w-one-p-zero-to-lp]]: on a bounded Euclidean open set, $W_0^{1,2}$ is compactly embedded in $L^2$.

[F3] [[thm-lax-milgram]]: a bounded coercive sesquilinear form on a Hilbert space has a unique weak solution.

[F4] [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]: on a bounded $C^1$ Euclidean domain, the trace is a bounded operator from $H^1$ to $L^2$ and agrees with restriction for smooth functions; therefore every class in the closure $H_0^1$ has zero trace.

[F5] [[thm-bounded-right-inverse-for-the-sobolev-trace]]: on a bounded smooth Euclidean domain, every $H^{1/2}$ boundary datum has an $H^1$ extension; after localization this supplies boundary-chart extensions on $M$.

[F6] [[thm-higher-order-boundary-regularity-for-dirichlet-problems]]: a zero-trace weak solution of a smooth uniformly elliptic divergence-form equation on a bounded smooth Euclidean domain gains two Sobolev derivatives when its right-hand side has the corresponding Sobolev regularity.

[F7] [[thm-higher-order-sobolev-embedding]]: membership in every chartwise integer Sobolev space gives a smooth representative up to the boundary.

[F8] [[thm-collar-neighborhood-theorem]]: smooth boundary data extend smoothly into a collar by constant normal extension and a cutoff.

## Proof

**Given:** the data in the statement, including $h\in L^2(M)$.

1.1 There is a constant $C_P$ such that $\|w\|_{L^2(M)}\leq C_P\|\nabla w\|_{L^2(M)}$ for $w\in H_0^1(M)$. Otherwise choose $w_j\in H_0^1(M)$ with $\|w_j\|_{L^2}=1$ and $\|\nabla w_j\|_{L^2}\to0$. The sequence is bounded in $H^1$. A finite chart partition and [F2] give an $L^2$-convergent subsequence; a further subsequence converges weakly in the Hilbert space $H^1$, so its limit $w$ belongs to the weakly closed subspace $H_0^1(M)$, has weak gradient zero, and has $L^2$ norm one. In each connected coordinate ball, convolution of a function with zero weak gradient is constant on smaller balls; overlapping balls force the constants to agree, so connectedness makes $w$ constant on $M^\circ$. Its trace is zero by [F4], whereas the trace of a nonzero constant is that same nonzero constant on the nonempty boundary. This contradiction proves the inequality. [A1, F1, F2, F4, given, contradiction]

2.1 Compactness of $M$ and positivity of $\gamma$ give $\gamma_*:=\min_M\gamma>0$. Thus $a_\gamma(w,z)=\int_M\gamma\,g(\nabla w,\nabla\bar z)\,dV_g$ is bounded on $H_0^1(M)$ and $a_\gamma(w,w)\geq c\|w\|_{H^1(M)}^2$ by step 1.1 and $\gamma_*$. By [F3], for any bounded conjugate-linear functional $G$ on $H_0^1(M)$ there is a unique $w\in H_0^1(M)$ with $a_\gamma(w,z)=G(z)$ for all $z$. [A2, F1, F3, step 1.1, given]

3.1 Flatten each boundary chart, apply the local half-space trace lift, and patch the finitely many chart lifts with a smooth partition. The resulting $Ef\in H^1(M)$ has trace $f$ and norm bounded by $C\|f\|_{H^{1/2}(\partial M)}$ by [F5]. For $h\in L^2(M)$ take $G(z)=-\int_Mh\overline z\,dV_g-a_\gamma(Ef,z)$ in step 2.1 and set $v=Ef+w$. Then $v$ has trace $f$ and satisfies the weak equation. If $v_1,v_2$ are two such solutions, their difference $w$ lies in $H_0^1$ and $a_\gamma(w,w)=0$; since $\gamma\geq\gamma_*>0$, $\nabla w=0$, and step 1.1 gives $w=0$. [A1, A2, F1, F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 Suppose $h$ and $f$ are smooth. By [F8], extend $f$ smoothly from the boundary into a collar and multiply by a cutoff to obtain a smooth extension $Ef$ on $M$. Then $w=v-Ef$ has zero trace and solves $\operatorname{div}_g(\gamma\nabla_gw)=h-\operatorname{div}_g(\gamma\nabla_gEf)$, whose right-hand side is smooth. In each boundary chart, flatten the boundary and write the principal matrix as $|g|^{1/2}\gamma g^{ij}$; it is smooth and uniformly elliptic because $g$ is positive definite and $\gamma$ has a positive minimum. For the base case, localize $w$ by a cutoff; its equation has an $L^2$ right-hand side since $w\in H^1$, so [F6] gives local $H^2$ regularity. If $w\in H^{m+1}$, each cutoff commutator contains derivatives of $w$ of order at most $m+1$ with smooth bounded coefficients, hence lies in $H^m$; the localized right-hand side is therefore in $H^m$, and [F6] gives $H^{m+2}$ regularity. Induction over $m$ and a finite chart cover give $w\in H^m(M)$ for every integer $m$. By [F7], $w$ and hence $v=Ef+w$ are smooth up to the boundary. [A1, A2, F1, F6, F7, F8, step 3.1, induction, algebra] ∎


---
id: thm-general-hausdorff-transfer-for-distorted-inhomogeneous-linear-forms
kind: theorem
title: "Hausdorff transfer for inhomogeneous linear forms with distortion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-countable-choice
  - def-distorted-inhomogeneous-linear-form-limsup-set
  - def-hausdorff-dimension-function-and-gauge-measure
  - thm-mass-transference-principle-for-systems-of-linear-forms
  - lem-gauge-fixed-dilation-and-small-gauge-regimes
  - lem-linear-form-events-and-affine-plane-neighborhoods
  - lem-truncating-affine-planes-preserves-small-tubes-on-a-ball
  - lem-constant-scaling-limsup-neighborhoods-preserves-measure
  - thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure

proof_strategy: direct
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, Theorem 6"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "§2.3, Theorem 6 and proof"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$, let $y\in[0,1)^m$, let $\Phi\in\mathbb R^{m\times m}\setminus\{0\}$, and let $\Psi:\mathbb Z^m\times(\mathbb Z^n\setminus\{0\})\to[0,\infty)$ satisfy

$$\lim_{\|q\|_\infty\to\infty}\sup_{p\in\mathbb Z^m}\frac{\Psi(p,q)}{\|q\|_\infty}=0.$$

Let $f$ and $g$ be dimension functions with $g(r)=r^{-m(n-1)}f(r)$ and $r^{-nm}f(r)$ monotonic. Define

$$\Theta(p,q):=\|q\|_\infty\,g\!\left(\frac{\Psi(p,q)}{\|q\|_\infty}\right)^{1/m}.$$

If $M_{n,m}^{y,\Phi}(\Theta)$ has full Lebesgue measure in $[0,1]^{n\times m}$, then

$$\mathcal H^f\bigl(M_{n,m}^{y,\Phi}(\Psi)\bigr)=\mathcal H^f([0,1]^{n\times m}).$$

The conclusion permits every nonzero $\Phi$, including singular matrices.

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, Theorem 6](https://arxiv.org/pdf/1703.10015v2)

## Facts & Assumptions

**Given:** Countable Choice and the complete fixed-target, nonzero-distortion, uniform sublinear and gauge hypotheses. Every limsup here requires unbounded denominator norm.

[A1] Countable Choice supports the countable measure constructions and selections. [[def-countable-choice]]

[F1] The distorted definition uses arbitrarily large denominator norm, including when distinct integer offsets have equal or densely accumulating images. [[def-distorted-inhomogeneous-linear-form-limsup-set]]

[F2] The complete affine-plane mass-transference theorem applies without angle restrictions. [[thm-mass-transference-principle-for-systems-of-linear-forms]]

[F3] Fixed gauge contraction is bounded below outside the ambient-zero case; Euclidean distance to $qX+p\Phi-y=0$ is $\|qX+p\Phi-y\|_2/\|q\|_2$. [[lem-gauge-fixed-dilation-and-small-gauge-regimes]] [[lem-linear-form-events-and-affine-plane-neighborhoods]]

[F4] Scaling shrinking neighborhoods of bounded sets preserves limsup Lebesgue measure, and planes can be truncated locally. [[lem-constant-scaling-limsup-neighborhoods-preserves-measure]] [[lem-truncating-affine-planes-preserves-small-tubes-on-a-ball]]

[F5] Power Hausdorff measure in ambient dimension is proportional to Lebesgue measure. [[thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure]]

## Proof

1.1 Put $k=nm$, $\ell=m(n-1)$ and $h(r)=f(r)/r^k$. If its limit is zero the conclusion is trivial by [F3]. Otherwise fixed contractions of $g(r)=r^{-\ell}f(r)$ are bounded below by positive constants: apply the fixed-contraction bound for $f$ and multiply by the fixed $r^{-\ell}$ factor. For a pair $(p,q)$ with $Q=\|q\|_\infty$, define $u_{p,q}=\Psi(p,q)/(2\sqrt n Q)$, omitting pairs with zero $\Psi$, and let $R_{p,q}$ be the affine plane $qX+p\Phi-y=0$. It has codimension $m$ because the map $X\mapsto qX$ is onto for every nonzero $q$. The uniform hypothesis gives $u_{p,q}\to0$ uniformly as $Q\to\infty$. [given, F1, F3, algebra]

2.1 For each positive integer shell $Q$, the transformed event union in the unit cube is a countable union of relatively open sets, one per pair on that shell. By continuity from below of Lebesgue measure, choose a finite set of pairs whose transformed union misses at most $2^{-Q}$ of that full shell union. Only countably many such finite selections are used. The limsup of these finite unions is still full: a point in the original transformed limsup but not the selected one lies in infinitely many missed shell sets, whose limsup measure is at most $\lim_{N\to\infty}\sum_{Q\ge N}2^{-Q}=0$. Unbounded denominator norm in [F1] is exactly what identifies the hypothesis with this shell limsup. Flatten the finite selected shells in increasing $Q$ to get a sequence of pairs, with $u_i\to0$. No discreteness of $\mathbb Z^m\Phi$ or maximization over an offset fibre is asserted or needed. [step 1.1, A1, F1, algebra, choose]

3.1 Let $t_i=g(u_i)^{1/m}$. By step 1.1 there is a fixed $a>0$ with $t_i\ge a\,\Theta(p_i,q_i)/Q_i$. If a transformed event holds, [F3] gives $\operatorname{dist}_2(X,R_i)<\sqrt m\,\Theta(p_i,q_i)/Q_i\le(\sqrt m/a)t_i$. Hence the limsup of fixed dilates of the $t_i$ tubes is full in the interior of the unit cube. Here $t_i\to0$ uniformly. Truncate the planes on a bounded neighborhood of the cube and use [F4]; the undilated $t_i$ tube limsup has the same full measure in every interior ball. [step 2.1, step 1.1, F3, F4, algebra]

4.1 Apply [F2] on every ball compactly contained in the cube's interior, to radii $u_i$. This gives full $\mathcal H^f$ measure there to the original $u_i$ tube limsup. Such a tube lies inside the desired original event, since $\|q_iX+p_i\Phi-y\|_\infty\le\|q_i\|_2\operatorname{dist}_2(X,R_i)<\sqrt n Q_i u_i=\Psi(p_i,q_i)/2$. Infinitely many selected indices have unbounded $Q_i$, so this inclusion is valid for the actual distorted limsup. If $h\to\infty$, any interior ball already gives infinite gauge measure, equal to that of the cube. If $h\to L\in(0,\infty)$, the gauge measure is proportional to Lebesgue measure, by comparison of fine costs and [F5]; countably many interior balls give full measure in the interior, and the boundary is null. Together with the zero-limit case this proves the conclusion for every allowed $\Phi$, including all nonzero singular matrices. [step 3.1, F2, F3, F5, algebra] ∎
